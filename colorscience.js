/**
 * ColorScience.js - Color space conversions & skin detection
 * Optimized for South Asian skin tones
 */

const ColorScience = {

    /**
     * Convert RGB to HSV (Hue, Saturation, Value)
     * @param {number} r - Red (0-255)
     * @param {number} g - Green (0-255)
     * @param {number} b - Blue (0-255)
     * @returns {Array} [H(0-360), S(0-255), V(0-255)]
     */
    rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, v = max;
        const d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h * 360, s * 255, v * 255];
    },

    /**
     * Convert RGB to XYZ color space
     * @param {number} r - Red (0-255)
     * @param {number} g - Green (0-255)
     * @param {number} b - Blue (0-255)
     * @returns {Array} [X, Y, Z]
     */
    rgbToXyz(r, g, b) {
        r = r / 255; g = g / 255; b = b / 255;

        if (r > 0.04045) r = Math.pow((r + 0.055) / 1.055, 2.4);
        else r = r / 12.92;
        if (g > 0.04045) g = Math.pow((g + 0.055) / 1.055, 2.4);
        else g = g / 12.92;
        if (b > 0.04045) b = Math.pow((b + 0.055) / 1.055, 2.4);
        else b = b / 12.92;

        r *= 100; g *= 100; b *= 100;

        const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
        const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
        const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

        return [x, y, z];
    },

    /**
     * Convert XYZ to CIELAB (L*a*b*)
     * @param {number} x - X value
     * @param {number} y - Y value
     * @param {number} z - Z value
     * @returns {Array} [L(0-100), a(-128-127), b(-128-127)]
     */
    xyzToLab(x, y, z) {
        x /= 95.047; y /= 100.000; z /= 108.883;

        const ft = (t) => t > 0.008856 ? Math.pow(t, 1/3) : (7.787 * t) + (16 / 116);

        const fx = ft(x);
        const fy = ft(y);
        const fz = ft(z);

        const l = (116 * fy) - 16;
        const a = 500 * (fx - fy);
        const b = 200 * (fy - fz);

        return [l, a, b];
    },

    /**
     * Convert RGB directly to CIELAB
     * @param {number} r - Red (0-255)
     * @param {number} g - Green (0-255)
     * @param {number} b - Blue (0-255)
     * @returns {Array} [L, a, b]
     */
    rgbToLab(r, g, b) {
        const xyz = this.rgbToXyz(r, g, b);
        return this.xyzToLab(xyz[0], xyz[1], xyz[2]);
    },

    /**
     * Calculate Delta-E (CIE76) color difference
     * @param {Array} lab1 - [L, a, b] first color
     * @param {Array} lab2 - [L, a, b] second color
     * @returns {number} Delta-E value
     */
    deltaE(lab1, lab2) {
        const dL = lab1[0] - lab2[0];
        const da = lab1[1] - lab2[1];
        const db = lab1[2] - lab2[2];
        return Math.sqrt(dL * dL + da * da + db * db);
    },

    /**
     * Calculate weighted Delta-E
     * @param {Array} lab1 - [L, a, b] first color
     * @param {Array} lab2 - [L, a, b] second color
     * @returns {number} Weighted Delta-E
     */
    deltaEWeighted(lab1, lab2) {
        const kL = 2.0;
        const kC = 1.0;
        const kH = 1.0;

        const dL = lab1[0] - lab2[0];
        const da = lab1[1] - lab2[1];
        const db = lab1[2] - lab2[2];

        const c1 = Math.sqrt(lab1[1] * lab1[1] + lab1[2] * lab1[2]);
        const c2 = Math.sqrt(lab2[1] * lab2[1] + lab2[2] * lab2[2]);
        const dC = c1 - c2;

        const dH = Math.sqrt(Math.max(0, da * da + db * db - dC * dC));

        return Math.sqrt(
            Math.pow(dL / kL, 2) +
            Math.pow(dC / kC, 2) +
            Math.pow(dH / kH, 2)
        );
    },

    /**
     * Check if pixel is skin-colored (optimized for South Asian tones)
     * @param {number} r - Red (0-255)
     * @param {number} g - Green (0-255)
     * @param {number} b - Blue (0-255)
     * @returns {boolean} True if skin pixel
     */
    isSkinPixel(r, g, b) {
        const hsv = this.rgbToHsv(r, g, b);
        const h = hsv[0];
        const s = hsv[1];
        const v = hsv[2];

        const hMatch = (h >= 0 && h <= 50) || (h >= 340 && h <= 360);
        const sMatch = s >= 10 && s <= 180;
        const vMatch = v >= 35 && v <= 255;

        const skinTone = (
            r > 85 && g > 35 && b > 15 &&
            (Math.max(r, g, b) - Math.min(r, g, b)) > 12
        );

        const rgbOrder = r > g && g > b;

        return hMatch && sMatch && vMatch && skinTone && rgbOrder;
    },

    /**
     * Extract skin pixels from image data
     * @param {ImageData} imageData - Canvas ImageData object
     * @returns {Object} {pixels, mask, width, height}
     */
    extractSkinPixels(imageData) {
        const { data, width, height } = imageData;
        const skinPixels = [];
        const skinMask = new Uint8Array(width * height);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 4;
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                if (this.isSkinPixel(r, g, b)) {
                    skinPixels.push([r, g, b]);
                    skinMask[y * width + x] = 1;
                }
            }
        }

        return { pixels: skinPixels, mask: skinMask, width, height };
    },

    /**
     * Sample pixels for performance
     * @param {Array} pixels - Array of [r,g,b] pixels
     * @param {number} maxSamples - Maximum samples
     * @returns {Array} Sampled pixels
     */
    samplePixels(pixels, maxSamples = 5000) {
        if (pixels.length <= maxSamples) return pixels;
        const step = Math.max(1, Math.floor(pixels.length / maxSamples));
        const sampled = [];
        for (let i = 0; i < pixels.length; i += step) {
            sampled.push(pixels[i]);
        }
        return sampled;
    },

    /**
     * K-Means clustering with k-means++ initialization
     * @param {Array} pixels - Array of [r,g,b] pixels
     * @param {number} k - Number of clusters
     * @param {number} maxIterations - Max iterations
     * @returns {Object} {dominant, allCentroids, clusterSizes}
     */
    kMeansClustering(pixels, k = 3, maxIterations = 10) {
        if (pixels.length === 0) {
            return {
                dominant: [128, 128, 128],
                allCentroids: [[128, 128, 128]],
                clusterSizes: [0]
            };
        }

        let centroids = [];
        centroids.push([...pixels[Math.floor(Math.random() * pixels.length)]]);

        for (let i = 1; i < k; i++) {
            let maxDist = -1;
            let farthestPixel = pixels[0];

            for (const pixel of pixels) {
                let minDistToCentroid = Infinity;
                for (const centroid of centroids) {
                    const dist = Math.sqrt(
                        Math.pow(pixel[0] - centroid[0], 2) +
                        Math.pow(pixel[1] - centroid[1], 2) +
                        Math.pow(pixel[2] - centroid[2], 2)
                    );
                    if (dist < minDistToCentroid) {
                        minDistToCentroid = dist;
                    }
                }
                if (minDistToCentroid > maxDist) {
                    maxDist = minDistToCentroid;
                    farthestPixel = pixel;
                }
            }
            centroids.push([...farthestPixel]);
        }

        let assignments = new Array(pixels.length);

        for (let iter = 0; iter < maxIterations; iter++) {
            for (let i = 0; i < pixels.length; i++) {
                let minDist = Infinity;
                let bestCluster = 0;

                for (let j = 0; j < k; j++) {
                    const dist = Math.sqrt(
                        Math.pow(pixels[i][0] - centroids[j][0], 2) +
                        Math.pow(pixels[i][1] - centroids[j][1], 2) +
                        Math.pow(pixels[i][2] - centroids[j][2], 2)
                    );
                    if (dist < minDist) {
                        minDist = dist;
                        bestCluster = j;
                    }
                }
                assignments[i] = bestCluster;
            }

            let newCentroids = [];
            let counts = new Array(k).fill(0);

            for (let j = 0; j < k; j++) {
                newCentroids.push([0, 0, 0]);
            }

            for (let i = 0; i < pixels.length; i++) {
                const cluster = assignments[i];
                newCentroids[cluster][0] += pixels[i][0];
                newCentroids[cluster][1] += pixels[i][1];
                newCentroids[cluster][2] += pixels[i][2];
                counts[cluster]++;
            }

            for (let j = 0; j < k; j++) {
                if (counts[j] > 0) {
                    newCentroids[j][0] /= counts[j];
                    newCentroids[j][1] /= counts[j];
                    newCentroids[j][2] /= counts[j];
                } else {
                    newCentroids[j] = [...centroids[j]];
                }
            }

            centroids = newCentroids;
        }

        let clusterSizes = new Array(k).fill(0);
        for (let i = 0; i < assignments.length; i++) {
            clusterSizes[assignments[i]]++;
        }

        let largestCluster = 0;
        for (let i = 1; i < k; i++) {
            if (clusterSizes[i] > clusterSizes[largestCluster]) {
                largestCluster = i;
            }
        }

        return {
            dominant: centroids[largestCluster].map(Math.round),
            allCentroids: centroids.map(c => c.map(Math.round)),
            clusterSizes: clusterSizes
        };
    },

    /**
     * Detect skin undertone from RGB
     * @param {Array} rgb - [r, g, b] skin tone
     * @returns {Object} {name, confidence}
     */
    detectUndertone(rgb) {
        const [r, g, b] = rgb;
        const hsv = this.rgbToHsv(r, g, b);

        let undertone = 'Neutral';
        let confidence = 85;

        if (hsv[1] > 100 && hsv[0] < 15) {
            undertone = 'Warm Golden';
            confidence = 92;
        } else if (hsv[1] > 80 && hsv[0] > 15 && hsv[0] < 30) {
            undertone = 'Warm Olive';
            confidence = 88;
        } else if (r > g + 20) {
            undertone = 'Warm Peach';
            confidence = 86;
        } else if (b > r * 0.9 || (b > g && r - g < 20)) {
            undertone = 'Cool Pink';
            confidence = 90;
        } else if (Math.abs(r - g) < 15 && Math.abs(g - b) < 15) {
            undertone = 'Neutral Beige';
            confidence = 87;
        }

        return { name: undertone, confidence };
    },

    /**
     * Detect skin depth category
     * @param {Array} rgb - [r, g, b] skin tone
     * @returns {string} Depth category
     */
    detectDepth(rgb) {
        const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);

        if (luminance > 200) return 'Fair';
        if (luminance > 160) return 'Medium';
        if (luminance > 120) return 'Tan';
        if (luminance > 80) return 'Deep';
        return 'Very Deep';
    },

    /**
     * Find best matching products
     * @param {Array} skinRgb - [r, g, b] detected skin tone
     * @param {Array} products - Array of product objects
     * @param {number} topN - Number of results
     * @returns {Array} Sorted products with matchScore and deltaE
     */
    findMatches(skinRgb, products, topN = 5) {
        const skinLab = this.rgbToLab(skinRgb[0], skinRgb[1], skinRgb[2]);

        const scored = products.map(product => {
            const productLab = this.rgbToLab(product.rgb[0], product.rgb[1], product.rgb[2]);
            const de = this.deltaE(skinLab, productLab);
            const matchScore = Math.max(0, 100 - de * 2);

            return {
                ...product,
                deltaE: de,
                matchScore: matchScore,
                matchQuality: de < 10 ? 'excellent' : de < 20 ? 'good' : 'fair'
            };
        });

        scored.sort((a, b) => a.deltaE - b.deltaE);
        return scored.slice(0, topN);
    },

    /**
     * Create skin mask visualization
     * @param {Uint8Array} skinMask - Binary mask
     * @param {number} width - Image width
     * @param {number} height - Image height
     * @param {number} scaleX - Scale factor X
     * @param {number} scaleY - Scale factor Y
     * @returns {ImageData} Canvas ImageData
     */
    createSkinOverlay(skinMask, width, height, scaleX, scaleY) {
        const overlayWidth = Math.floor(width * scaleX);
        const overlayHeight = Math.floor(height * scaleY);
        const overlayData = new ImageData(overlayWidth, overlayHeight);

        for (let y = 0; y < overlayHeight; y++) {
            for (let x = 0; x < overlayWidth; x++) {
                const srcX = Math.floor(x / scaleX);
                const srcY = Math.floor(y / scaleY);

                if (srcX < width && srcY < height && skinMask[srcY * width + srcX]) {
                    const idx = (y * overlayWidth + x) * 4;
                    overlayData.data[idx] = 212;
                    overlayData.data[idx + 1] = 165;
                    overlayData.data[idx + 2] = 116;
                    overlayData.data[idx + 3] = 100;
                }
            }
        }

        return overlayData;
    }
};

// Export globally
window.ColorScience = ColorScience;