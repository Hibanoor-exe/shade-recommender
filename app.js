/**
 * GlowMatch AI - Main Application Logic
 * Handles image upload, skin tone analysis, and product recommendations
 */

const GlowMatchApp = (function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════
    // PRIVATE STATE
    // ═══════════════════════════════════════════════════════════

    let currentImage = null;
    let detectedSkinTone = null;
    let currentFilter = 'all';
    let currentFoundations = null;
    let currentLipsticks = null;
    let toastTimeout = null;

    // ═══════════════════════════════════════════════════════════
    // DOM ELEMENTS (cached for performance)
    // ═══════════════════════════════════════════════════════════

    const elements = {
        uploadArea: null,
        fileInput: null,
        previewSection: null,
        previewImage: null,
        faceOverlay: null,
        skinOverlay: null,
        loader: null,
        loaderText: null,
        resultsSection: null,
        skinToneSwatch: null,
        skinToneName: null,
        skinToneDesc: null,
        foundationGrid: null,
        lipstickGrid: null,
        toast: null,
        analysisCanvas: null,
        steps: {
            step1: null,
            step2: null,
            step3: null,
            step4: null
        }
    };

    // ═══════════════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════════════

    function init() {
        cacheElements();
        bindEvents();
        console.log('✨ GlowMatch AI initialized');
    }

    function cacheElements() {
        elements.uploadArea = document.getElementById('uploadArea');
        elements.fileInput = document.getElementById('fileInput');
        elements.previewSection = document.getElementById('previewSection');
        elements.previewImage = document.getElementById('previewImage');
        elements.faceOverlay = document.getElementById('faceOverlay');
        elements.skinOverlay = document.getElementById('skinOverlay');
        elements.loader = document.getElementById('loader');
        elements.loaderText = document.getElementById('loaderText');
        elements.resultsSection = document.getElementById('resultsSection');
        elements.skinToneSwatch = document.getElementById('skinToneSwatch');
        elements.skinToneName = document.getElementById('skinToneName');
        elements.skinToneDesc = document.getElementById('skinToneDesc');
        elements.foundationGrid = document.getElementById('foundationGrid');
        elements.lipstickGrid = document.getElementById('lipstickGrid');
        elements.toast = document.getElementById('toast');
        elements.analysisCanvas = document.getElementById('analysisCanvas');
        elements.steps.step1 = document.getElementById('step1');
        elements.steps.step2 = document.getElementById('step2');
        elements.steps.step3 = document.getElementById('step3');
        elements.steps.step4 = document.getElementById('step4');
    }

    function bindEvents() {
        // File input change
        elements.fileInput.addEventListener('change', handleFileSelect);

        // Drag and drop
        if (elements.uploadArea) {
            elements.uploadArea.addEventListener('dragover', handleDragOver);
            elements.uploadArea.addEventListener('dragleave', handleDragLeave);
            elements.uploadArea.addEventListener('drop', handleDrop);
            elements.uploadArea.addEventListener('click', triggerUpload);
        }

        // Action buttons (data-action attributes)
        document.querySelectorAll('[data-action]').forEach(btn => {
            const action = btn.getAttribute('data-action');
            switch (action) {
                case 'scroll-to-upload':
                    btn.addEventListener('click', scrollToUpload);
                    break;
                case 'scroll-to-tech':
                    btn.addEventListener('click', scrollToTech);
                    break;
                case 'trigger-upload':
                    btn.addEventListener('click', triggerUpload);
                    break;
                case 'analyze':
                    btn.addEventListener('click', analyzeImage);
                    break;
                case 'reset':
                    btn.addEventListener('click', resetUpload);
                    break;
                case 'filter-all':
                case 'filter-local':
                case 'filter-online':
                    btn.addEventListener('click', (e) => {
                        const filterType = btn.getAttribute('data-filter');
                        filterProducts(filterType, btn);
                    });
                    break;
            }
        });

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
    }

    function triggerUpload(e) {
        e.preventDefault();
        e.stopPropagation();
        if (elements.fileInput) {
            elements.fileInput.click();
        }
    }

    // ═══════════════════════════════════════════════════════════
    // FILE HANDLING
    // ═══════════════════════════════════════════════════════════

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            showToast('File too large! Max 5MB allowed.', 'error');
            return;
        }

        // Validate MIME type
        if (!file.type.startsWith('image/')) {
            showToast('Please upload an image file (JPG/PNG).', 'error');
            return;
        }

        // Additional validation: must be raster image
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            showToast('Please upload JPG, PNG, or WebP only.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                currentImage = img;
                displayPreview(img);
            };
            img.onerror = function() {
                showToast('Failed to load image. Please try another file.', 'error');
            };
            img.src = e.target.result;
        };
        reader.onerror = function() {
            showToast('Failed to read file.', 'error');
        };
        reader.readAsDataURL(file);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        elements.uploadArea.classList.add('dragover');
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        elements.uploadArea.classList.remove('dragover');
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        elements.uploadArea.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Simulate file input change
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(files[0]);
            elements.fileInput.files = dataTransfer.files;
            handleFileSelect({ target: elements.fileInput });
        }
    }

    // ═══════════════════════════════════════════════════════════
    // PREVIEW DISPLAY
    // ═══════════════════════════════════════════════════════════

    function displayPreview(img) {
        elements.previewImage.src = img.src;
        elements.previewSection.classList.add('active');
        elements.uploadArea.style.display = 'none';

        // Reset steps to initial state
        resetSteps();
    }

    function resetUpload() {
        currentImage = null;
        detectedSkinTone = null;
        currentFoundations = null;
        currentLipsticks = null;

        elements.previewSection.classList.remove('active');
        elements.uploadArea.style.display = 'block';
        elements.fileInput.value = '';
        elements.resultsSection.classList.remove('active');
        elements.faceOverlay.classList.remove('detected');

        // Clear skin overlay
        const skinCtx = elements.skinOverlay.getContext('2d');
        skinCtx.clearRect(0, 0, elements.skinOverlay.width, elements.skinOverlay.height);

        resetSteps();
    }

    function resetSteps() {
        Object.values(elements.steps).forEach(step => {
            if (step) {
                step.classList.remove('active', 'completed');
                const circle = step.querySelector('.step-circle');
                if (circle) {
                    // Restore original number
                    const stepNum = step.id.replace('step', '');
                    circle.textContent = stepNum;
                }
            }
        });
    }

    // ═══════════════════════════════════════════════════════════
    // IMAGE ANALYSIS
    // ═══════════════════════════════════════════════════════════

    async function analyzeImage() {
        if (!currentImage) {
            showToast('Please upload an image first!', 'error');
            return;
        }

        const stepTexts = [
            'Detecting face...',
            'Extracting skin regions...',
            'Analyzing skin tone...',
            'Matching shades...'
        ];

        elements.loader.classList.add('active');

        try {
            // Step 1: Prepare canvas and detect face region
            updateStep('step1');
            setLoaderText(stepTexts[0]);
            await sleep(600);

            const canvas = elements.analysisCanvas;
            const ctx = canvas.getContext('2d');

            // Resize for processing (max 400px)
            const maxSize = 400;
            let width = currentImage.width;
            let height = currentImage.height;

            if (width > height) {
                if (width > maxSize) {
                    height = Math.round(height * maxSize / width);
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width = Math.round(width * maxSize / height);
                    height = maxSize;
                }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(currentImage, 0, 0, width, height);

            const imageData = ctx.getImageData(0, 0, width, height);

            // Estimate face region (center 60% of image)
            const faceX = Math.round(width * 0.2);
            const faceY = Math.round(height * 0.1);
            const faceW = Math.round(width * 0.6);
            const faceH = Math.round(height * 0.7);

            // Wait for preview image to render before calculating overlay
            await waitForImageRender(elements.previewImage);

            const previewWidth = elements.previewImage.clientWidth;
            const previewHeight = elements.previewImage.clientHeight;
            const scaleX = previewWidth / width;
            const scaleY = previewHeight / height;

            // Position face overlay (rounded to prevent sub-pixel blur)
            elements.faceOverlay.style.left = Math.round(faceX * scaleX) + 'px';
            elements.faceOverlay.style.top = Math.round(faceY * scaleY) + 'px';
            elements.faceOverlay.style.width = Math.round(faceW * scaleX) + 'px';
            elements.faceOverlay.style.height = Math.round(faceH * scaleY) + 'px';
            elements.faceOverlay.classList.add('detected');

            completeStep('step1');

            // Step 2: Extract skin pixels
            updateStep('step2');
            setLoaderText(stepTexts[1]);
            await sleep(600);

            const skinResult = ColorScience.extractSkinPixels(imageData);

            if (skinResult.pixels.length === 0) {
                throw new Error('No skin detected in the image. Please try a clearer photo with good lighting.');
            }

            // Create skin overlay visualization
            createSkinOverlay(skinResult, width, height, scaleX, scaleY);

            completeStep('step2');

            // Step 3: K-Means Clustering
            updateStep('step3');
            setLoaderText(stepTexts[2]);
            await sleep(600);

            const sampledPixels = ColorScience.samplePixels(skinResult.pixels, 5000);
            const clusterResult = ColorScience.kMeansClustering(sampledPixels, 3, 10);
            detectedSkinTone = clusterResult.dominant;

            completeStep('step3');

            // Step 4: Shade Matching
            updateStep('step4');
            setLoaderText(stepTexts[3]);
            await sleep(500);

            const skinLab = ColorScience.rgbToLab(
                detectedSkinTone[0], 
                detectedSkinTone[1], 
                detectedSkinTone[2]
            );

            // Get products from database
            const allFoundations = window.ProductDatabase ? 
                window.ProductDatabase.foundations : [];
            const allLipsticks = window.ProductDatabase ? 
                window.ProductDatabase.lipsticks : [];

            if (allFoundations.length === 0 || allLipsticks.length === 0) {
                throw new Error('Product database not loaded. Please refresh the page.');
            }

            // Find matches
            currentFoundations = ColorScience.findMatches(detectedSkinTone, allFoundations, 5);
            currentLipsticks = ColorScience.findMatches(detectedSkinTone, allLipsticks, 5);

            completeStep('step4');

            // Hide loader and show results
            elements.loader.classList.remove('active');
            displayResults(detectedSkinTone, clusterResult, skinLab, currentFoundations, currentLipsticks);

        } catch (error) {
            elements.loader.classList.remove('active');
            showToast(error.message || 'Analysis failed. Please try again.', 'error');
            console.error('Analysis error:', error);
        }
    }

    // ═══════════════════════════════════════════════════════════
    // HELPER FUNCTIONS
    // ═══════════════════════════════════════════════════════════

    function updateStep(stepId) {
        Object.values(elements.steps).forEach(s => s.classList.remove('active'));
        const step = document.getElementById(stepId);
        if (step) step.classList.add('active');
    }

    function completeStep(stepId) {
        const step = document.getElementById(stepId);
        if (!step) return;

        step.classList.remove('active');
        step.classList.add('completed');

        const circle = step.querySelector('.step-circle');
        if (circle) circle.textContent = '✓';
    }

    function setLoaderText(text) {
        if (elements.loaderText) {
            elements.loaderText.textContent = text;
        }
    }

    function sleep(ms) {
        return new Promise(resolve => {
            const timeout = setTimeout(resolve, ms);
            // Cleanup on page unload
            window.addEventListener('beforeunload', () => clearTimeout(timeout), { once: true });
        });
    }

    function waitForImageRender(img) {
        return new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0 && img.clientWidth > 0) {
                resolve();
            } else {
                const check = () => {
                    if (img.clientWidth > 0) {
                        resolve();
                    } else {
                        requestAnimationFrame(check);
                    }
                };
                requestAnimationFrame(check);
            }
        });
    }

    function createSkinOverlay(skinResult, width, height, scaleX, scaleY) {
        const overlay = ColorScience.createSkinOverlay(
            skinResult.mask, 
            width, 
            height, 
            scaleX, 
            scaleY
        );

        elements.skinOverlay.width = overlay.width;
        elements.skinOverlay.height = overlay.height;
        const skinCtx = elements.skinOverlay.getContext('2d');
        skinCtx.putImageData(overlay, 0, 0);
    }

    // ═══════════════════════════════════════════════════════════
    // RESULTS DISPLAY
    // ═══════════════════════════════════════════════════════════

    function displayResults(skinTone, clusterResult, skinLab, foundations, lipsticks) {
        elements.resultsSection.classList.add('active');

        // Update skin tone swatch
        elements.skinToneSwatch.style.backgroundColor = 
            `rgb(${skinTone[0]}, ${skinTone[1]}, ${skinTone[2]})`;

        // Detect undertone and depth
        const undertone = ColorScience.detectUndertone(skinTone);
        const depth = ColorScience.detectDepth(skinTone);

        elements.skinToneName.textContent = `${depth} ${undertone.name}`;
        elements.skinToneDesc.textContent = 
            `Detected undertone with ${undertone.confidence}% confidence`;

        // Update technical details
        updateTechnicalDetails(skinTone, clusterResult, skinLab);

        // Render products
        renderProducts(foundations, lipsticks);

        // Scroll to results
        setTimeout(() => {
            elements.resultsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }

    function updateTechnicalDetails(skinTone, clusterResult, skinLab) {
        const hsv = ColorScience.rgbToHsv(skinTone[0], skinTone[1], skinTone[2]);

        // RGB values
        const rgbEl = document.getElementById('rgbValues');
        if (rgbEl) {
            rgbEl.innerHTML = `
                <span class="color-chip">
                    <span class="color-dot" style="background:rgb(${skinTone[0]},${skinTone[1]},${skinTone[2]})"></span>
                    R:${skinTone[0]} G:${skinTone[1]} B:${skinTone[2]}
                </span>
            `;
        }

        // HSV values
        const hsvEl = document.getElementById('hsvValues');
        if (hsvEl) {
            hsvEl.innerHTML = `
                <span class="color-chip">H:${Math.round(hsv[0])}°</span>
                <span class="color-chip">S:${Math.round(hsv[1])}</span>
                <span class="color-chip">V:${Math.round(hsv[2])}</span>
            `;
        }

        // LAB values
        const labEl = document.getElementById('labValues');
        if (labEl) {
            labEl.innerHTML = `
                <span class="color-chip">L:${Math.round(skinLab[0])}</span>
                <span class="color-chip">a:${Math.round(skinLab[1])}</span>
                <span class="color-chip">b:${Math.round(skinLab[2])}</span>
            `;
        }

        // K-Means clusters
        const kmeansEl = document.getElementById('kmeansValues');
        if (kmeansEl) {
            kmeansEl.innerHTML = `
                <span class="color-chip">Cluster 1: ${clusterResult.clusterSizes[0]}px</span>
                <span class="color-chip">Cluster 2: ${clusterResult.clusterSizes[1]}px</span>
                <span class="color-chip">Cluster 3: ${clusterResult.clusterSizes[2]}px</span>
            `;
        }
    }

    function renderProducts(foundations, lipsticks) {
        if (elements.foundationGrid) {
            elements.foundationGrid.innerHTML = foundations.map(p => createProductCard(p)).join('');
        }
        if (elements.lipstickGrid) {
            elements.lipstickGrid.innerHTML = lipsticks.map(p => createProductCard(p)).join('');
        }
    }

    function createProductCard(product) {
        const matchPercent = Math.round(product.matchScore);
        const deltaClass = product.deltaE < 10 ? 'good' : product.deltaE < 20 ? 'medium' : '';
        const badgeClass = product.availability === 'local' ? 'badge-local' : 'badge-online';
        const badgeText = product.availability === 'local' ? 'In Swabi' : 'Online Only';

        return `
            <div class="product-card" data-availability="${product.availability}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <div class="product-image">
                    <div class="product-shade-swatch" style="background: rgb(${product.rgb.join(',')})"></div>
                    <span class="match-percentage">${matchPercent}% Match</span>
                </div>
                <div class="product-details">
                    <div class="product-brand">${escapeHtml(product.brand)}</div>
                    <div class="product-name">${escapeHtml(product.name)}</div>
                    <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">${escapeHtml(product.shade)}</div>
                    <div class="product-meta">
                        <span class="product-price">${escapeHtml(product.price)}</span>
                        <span class="product-delta ${deltaClass}">ΔE: ${product.deltaE.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ═══════════════════════════════════════════════════════════
    // FILTERING
    // ═══════════════════════════════════════════════════════════

    function filterProducts(type, clickedTab) {
        if (!currentFoundations || !currentLipsticks) {
            showToast('Please analyze an image first!', 'error');
            return;
        }

        currentFilter = type;

        // Update tab UI
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        if (clickedTab) {
            clickedTab.classList.add('active');
        }

        let filteredF = currentFoundations;
        let filteredL = currentLipsticks;

        if (type === 'local') {
            filteredF = currentFoundations.filter(p => p.availability === 'local');
            filteredL = currentLipsticks.filter(p => p.availability === 'local');
        } else if (type === 'online') {
            filteredF = currentFoundations.filter(p => p.availability === 'online');
            filteredL = currentLipsticks.filter(p => p.availability === 'online');
        }

        // If filter results in empty, show message but keep tabs working
        if (filteredF.length === 0 && filteredL.length === 0) {
            showToast('No products match this filter for your skin tone.', 'warning');
        }

        renderProducts(filteredF.slice(0, 5), filteredL.slice(0, 5));
    }

    // ═══════════════════════════════════════════════════════════
    // TOAST NOTIFICATIONS
    // ═══════════════════════════════════════════════════════════

    function showToast(message, type) {
        // Clear existing timeout
        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        const toast = elements.toast;
        if (!toast) return;

        toast.textContent = message;
        toast.className = 'toast ' + (type || '');
        toast.classList.add('show');

        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            toastTimeout = null;
        }, 3000);
    }

    // ═══════════════════════════════════════════════════════════
    // SCROLL HELPERS
    // ═══════════════════════════════════════════════════════════

    function scrollToUpload() {
        if (elements.uploadArea) {
            elements.uploadArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function scrollToTech() {
        const techSection = document.getElementById('technology');
        if (techSection) {
            techSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function handleSmoothScroll(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ═══════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════

    return {
        init: init,
        handleFileSelect: handleFileSelect,
        analyzeImage: analyzeImage,
        resetUpload: resetUpload,
        filterProducts: filterProducts,
        scrollToUpload: scrollToUpload,
        scrollToTech: scrollToTech
    };

})();

// ═══════════════════════════════════════════════════════════
// AUTO-INITIALIZE ON DOM READY
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', GlowMatchApp.init);
} else {
    GlowMatchApp.init();
}