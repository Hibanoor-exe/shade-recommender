
const ProductDatabase = {
    
    // ═══════════════════════════════════════════════════════════
    // FOUNDATIONS (61 products)
    // ═══════════════════════════════════════════════════════════
    foundations: [
        
        // ─── LOCAL PAKISTANI BRANDS (Available in Swabi) ───
        
        // Medora - Affordable local brand
        { 
            id: "f001", brand: "Medora", name: "Soft Beige", 
            shade: "Soft Beige", rgb: [210, 170, 130], 
            price: "₨450", availability: "local", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "normal"
        },
        { 
            id: "f002", brand: "Medora", name: "Honey Glow", 
            shade: "Honey", rgb: [190, 145, 105], 
            price: "₨450", availability: "local", type: "foundation",
            coverage: "medium", finish: "dewy", skinType: "dry"
        },
        { 
            id: "f003", brand: "Medora", name: "Natural Tan", 
            shade: "Natural Tan", rgb: [170, 120, 85], 
            price: "₨450", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        { 
            id: "f004", brand: "Medora", name: "Deep Bronze", 
            shade: "Deep Bronze", rgb: [140, 95, 65], 
            price: "₨450", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "combination"
        },
        
        // Rivaj UK - Mid-range local brand
        { 
            id: "f005", brand: "Rivaj UK", name: "Ivory Beige", 
            shade: "Ivory", rgb: [225, 195, 165], 
            price: "₨850", availability: "local", type: "foundation",
            coverage: "light", finish: "natural", skinType: "sensitive"
        },
        { 
            id: "f006", brand: "Rivaj UK", name: "Sand Beige", 
            shade: "Sand", rgb: [200, 160, 120], 
            price: "₨850", availability: "local", type: "foundation",
            coverage: "medium", finish: "satin", skinType: "normal"
        },
        { 
            id: "f007", brand: "Rivaj UK", name: "Golden Honey", 
            shade: "Golden", rgb: [185, 140, 100], 
            price: "₨850", availability: "local", type: "foundation",
            coverage: "medium", finish: "luminous", skinType: "dry"
        },
        { 
            id: "f008", brand: "Rivaj UK", name: "Caramel", 
            shade: "Caramel", rgb: [160, 110, 75], 
            price: "₨850", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        { 
            id: "f009", brand: "Rivaj UK", name: "Espresso", 
            shade: "Espresso", rgb: [120, 80, 55], 
            price: "₨850", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "combination"
        },
        
        // Golden Rose - Premium local brand
        { 
            id: "f010", brand: "Golden Rose", name: "Porcelain", 
            shade: "Porcelain", rgb: [235, 210, 185], 
            price: "₨650", availability: "local", type: "foundation",
            coverage: "light", finish: "natural", skinType: "sensitive"
        },
        { 
            id: "f011", brand: "Golden Rose", name: "Warm Ivory", 
            shade: "Warm Ivory", rgb: [215, 180, 145], 
            price: "₨650", availability: "local", type: "foundation",
            coverage: "medium", finish: "satin", skinType: "normal"
        },
        { 
            id: "f012", brand: "Golden Rose", name: "Buff", 
            shade: "Buff", rgb: [195, 155, 115], 
            price: "₨650", availability: "local", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f013", brand: "Golden Rose", name: "Toffee", 
            shade: "Toffee", rgb: [175, 130, 90], 
            price: "₨650", availability: "local", type: "foundation",
            coverage: "full", finish: "dewy", skinType: "dry"
        },
        { 
            id: "f014", brand: "Golden Rose", name: "Mocha", 
            shade: "Mocha", rgb: [145, 100, 70], 
            price: "₨650", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        
        // Kryolan - Professional grade
        { 
            id: "f015", brand: "Kryolan", name: "TV White", 
            shade: "TV White", rgb: [240, 220, 200], 
            price: "₨1200", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "all"
        },
        { 
            id: "f016", brand: "Kryolan", name: "Olive Beige", 
            shade: "Olive", rgb: [180, 155, 115], 
            price: "₨1200", availability: "local", type: "foundation",
            coverage: "full", finish: "natural", skinType: "combination"
        },
        { 
            id: "f017", brand: "Kryolan", name: "Dark Spice", 
            shade: "Dark Spice", rgb: [130, 90, 65], 
            price: "₨1200", availability: "local", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        
        // ─── INTERNATIONAL BRANDS (Online Only) ───
        
        // Maybelline Fit Me Matte
        { 
            id: "f018", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "120 Classic Ivory", rgb: [230, 200, 170], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        { 
            id: "f019", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "128 Warm Nude", rgb: [210, 175, 140], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "normal"
        },
        { 
            id: "f020", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "220 Natural Beige", rgb: [195, 155, 115], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f021", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "228 Soft Tan", rgb: [180, 140, 100], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "normal"
        },
        { 
            id: "f022", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "238 Rich Tan", rgb: [165, 125, 85], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        { 
            id: "f023", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "310 Sun Beige", rgb: [175, 135, 95], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f024", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "322 Honey", rgb: [160, 120, 80], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "dry"
        },
        { 
            id: "f025", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "330 Toffee", rgb: [150, 110, 75], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        { 
            id: "f026", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "338 Spicy Brown", rgb: [135, 95, 65], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f027", brand: "Maybelline", name: "Fit Me Matte", 
            shade: "355 Coconut", rgb: [120, 85, 60], 
            price: "₨1500", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        
        // L'Oreal True Match
        { 
            id: "f028", brand: "L'Oreal", name: "True Match", 
            shade: "W1 Porcelain", rgb: [235, 210, 185], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "light", finish: "natural", skinType: "sensitive"
        },
        { 
            id: "f029", brand: "L'Oreal", name: "True Match", 
            shade: "W2 Light Ivory", rgb: [220, 190, 160], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "light", finish: "natural", skinType: "normal"
        },
        { 
            id: "f030", brand: "L'Oreal", name: "True Match", 
            shade: "W3 Nude Beige", rgb: [205, 170, 135], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "combination"
        },
        { 
            id: "f031", brand: "L'Oreal", name: "True Match", 
            shade: "W4 Natural Beige", rgb: [190, 155, 120], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "normal"
        },
        { 
            id: "f032", brand: "L'Oreal", name: "True Match", 
            shade: "W5 Sand Beige", rgb: [180, 145, 110], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "oily"
        },
        { 
            id: "f033", brand: "L'Oreal", name: "True Match", 
            shade: "W6 Sun Beige", rgb: [170, 135, 100], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "combination"
        },
        { 
            id: "f034", brand: "L'Oreal", name: "True Match", 
            shade: "W7 Golden Amber", rgb: [160, 125, 90], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "dry"
        },
        { 
            id: "f035", brand: "L'Oreal", name: "True Match", 
            shade: "W8 Creme Cafe", rgb: [150, 115, 80], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "oily"
        },
        { 
            id: "f036", brand: "L'Oreal", name: "True Match", 
            shade: "W9 Golden Sand", rgb: [140, 105, 75], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "full", finish: "natural", skinType: "combination"
        },
        { 
            id: "f037", brand: "L'Oreal", name: "True Match", 
            shade: "W10 Golden Chocolate", rgb: [125, 95, 70], 
            price: "₨2200", availability: "online", type: "foundation",
            coverage: "full", finish: "natural", skinType: "oily"
        },
        
        // Huda Beauty FauxFilter
        { 
            id: "f038", brand: "Huda Beauty", name: "FauxFilter", 
            shade: "Angel Food", rgb: [225, 195, 165], 
            price: "₨4500", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "all"
        },
        { 
            id: "f039", brand: "Huda Beauty", name: "FauxFilter", 
            shade: "Baklava", rgb: [200, 160, 120], 
            price: "₨4500", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "combination"
        },
        { 
            id: "f040", brand: "Huda Beauty", name: "FauxFilter", 
            shade: "Kunafa", rgb: [175, 135, 95], 
            price: "₨4500", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        { 
            id: "f041", brand: "Huda Beauty", name: "FauxFilter", 
            shade: "Panna Cotta", rgb: [155, 115, 80], 
            price: "₨4500", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "dry"
        },
        { 
            id: "f042", brand: "Huda Beauty", name: "FauxFilter", 
            shade: "Tres Leches", rgb: [135, 100, 70], 
            price: "₨4500", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "combination"
        },
        
        // Fenty Beauty Pro Filt'r
        { 
            id: "f043", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "100", rgb: [240, 220, 200], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "normal"
        },
        { 
            id: "f044", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "130", rgb: [220, 190, 160], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f045", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "185", rgb: [195, 160, 125], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        { 
            id: "f046", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "240", rgb: [175, 140, 105], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "dry"
        },
        { 
            id: "f047", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "300", rgb: [160, 125, 90], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "combination"
        },
        { 
            id: "f048", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "360", rgb: [145, 110, 80], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "medium", finish: "matte", skinType: "oily"
        },
        { 
            id: "f049", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "420", rgb: [125, 95, 70], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "combination"
        },
        { 
            id: "f050", brand: "Fenty Beauty", name: "Pro Filt'r", 
            shade: "470", rgb: [110, 85, 65], 
            price: "₨5000", availability: "online", type: "foundation",
            coverage: "full", finish: "matte", skinType: "oily"
        },
        
        // MAC Studio Fix Fluid
        { 
            id: "f051", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC15", rgb: [235, 215, 195], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "all"
        },
        { 
            id: "f052", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC20", rgb: [225, 200, 175], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "normal"
        },
        { 
            id: "f053", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC25", rgb: [215, 185, 155], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "combination"
        },
        { 
            id: "f054", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC30", rgb: [205, 170, 140], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "oily"
        },
        { 
            id: "f055", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC35", rgb: [195, 160, 125], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "dry"
        },
        { 
            id: "f056", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC40", rgb: [185, 150, 115], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "combination"
        },
        { 
            id: "f057", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC42", rgb: [180, 145, 110], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "oily"
        },
        { 
            id: "f058", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC44", rgb: [175, 140, 105], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "medium", finish: "natural", skinType: "normal"
        },
        { 
            id: "f059", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC45", rgb: [170, 135, 100], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "full", finish: "natural", skinType: "combination"
        },
        { 
            id: "f060", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC50", rgb: [155, 120, 90], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "full", finish: "natural", skinType: "oily"
        },
        { 
            id: "f061", brand: "MAC", name: "Studio Fix Fluid", 
            shade: "NC55", rgb: [140, 105, 80], 
            price: "₨3500", availability: "online", type: "foundation",
            coverage: "full", finish: "natural", skinType: "combination"
        }
    ],
    
    // ═══════════════════════════════════════════════════════════
    // LIPSTICKS (50 products)
    // ═══════════════════════════════════════════════════════════
    lipsticks: [
        
        // ─── LOCAL PAKISTANI BRANDS ───
        
        // Medora
        { 
            id: "l001", brand: "Medora", name: "Ruby Red", 
            shade: "Ruby", rgb: [200, 50, 60], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l002", brand: "Medora", name: "Coral Pink", 
            shade: "Coral", rgb: [230, 120, 110], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "cream", undertone: "warm"
        },
        { 
            id: "l003", brand: "Medora", name: "Brick Red", 
            shade: "Brick", rgb: [170, 60, 50], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l004", brand: "Medora", name: "Nude Beige", 
            shade: "Nude", rgb: [200, 150, 130], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "cream", undertone: "neutral"
        },
        { 
            id: "l005", brand: "Medora", name: "Plum Wine", 
            shade: "Plum", rgb: [140, 50, 70], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l006", brand: "Medora", name: "Peach Glow", 
            shade: "Peach", rgb: [240, 160, 130], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "cream", undertone: "warm"
        },
        { 
            id: "l007", brand: "Medora", name: "Berry Blast", 
            shade: "Berry", rgb: [160, 40, 60], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l008", brand: "Medora", name: "Rose Petal", 
            shade: "Rose", rgb: [210, 100, 110], 
            price: "₨350", availability: "local", type: "lipstick",
            finish: "cream", undertone: "cool"
        },
        
        // Rivaj UK
        { 
            id: "l009", brand: "Rivaj UK", name: "Matte Red", 
            shade: "Red", rgb: [190, 40, 50], 
            price: "₨550", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l010", brand: "Rivaj UK", name: "Dusty Rose", 
            shade: "Rose", rgb: [200, 120, 125], 
            price: "₨550", availability: "local", type: "lipstick",
            finish: "satin", undertone: "neutral"
        },
        { 
            id: "l011", brand: "Rivaj UK", name: "Terracotta", 
            shade: "Terracotta", rgb: [200, 100, 70], 
            price: "₨550", availability: "local", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l012", brand: "Rivaj UK", name: "Mauve Pink", 
            shade: "Mauve", rgb: [180, 110, 130], 
            price: "₨550", availability: "local", type: "lipstick",
            finish: "satin", undertone: "cool"
        },
        { 
            id: "l013", brand: "Rivaj UK", name: "Crimson", 
            shade: "Crimson", rgb: [160, 30, 40], 
            price: "₨550", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        
        // Golden Rose
        { 
            id: "l014", brand: "Golden Rose", name: "Velvet Red", 
            shade: "Red", rgb: [185, 45, 55], 
            price: "₨450", availability: "local", type: "lipstick",
            finish: "velvet", undertone: "cool"
        },
        { 
            id: "l015", brand: "Golden Rose", name: "Soft Pink", 
            shade: "Pink", rgb: [230, 150, 160], 
            price: "₨450", availability: "local", type: "lipstick",
            finish: "cream", undertone: "cool"
        },
        { 
            id: "l016", brand: "Golden Rose", name: "Brown Sugar", 
            shade: "Brown", rgb: [170, 110, 90], 
            price: "₨450", availability: "local", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l017", brand: "Golden Rose", name: "Wine", 
            shade: "Wine", rgb: [130, 40, 55], 
            price: "₨450", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        
        // Kryolan
        { 
            id: "l018", brand: "Kryolan", name: "Classic Red", 
            shade: "Red", rgb: [175, 35, 45], 
            price: "₨950", availability: "local", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l019", brand: "Kryolan", name: "Natural", 
            shade: "Natural", rgb: [195, 140, 125], 
            price: "₨950", availability: "local", type: "lipstick",
            finish: "cream", undertone: "neutral"
        },
        
        // ─── INTERNATIONAL BRANDS (Online) ───
        
        // Maybelline SuperStay Matte
        { 
            id: "l020", brand: "Maybelline", name: "SuperStay Matte", 
            shade: "Pioneer", rgb: [180, 40, 50], 
            price: "₨1200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l021", brand: "Maybelline", name: "SuperStay Matte", 
            shade: "Lover", rgb: [200, 90, 110], 
            price: "₨1200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l022", brand: "Maybelline", name: "SuperStay Matte", 
            shade: "Amazonian", rgb: [160, 50, 60], 
            price: "₨1200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l023", brand: "Maybelline", name: "SuperStay Matte", 
            shade: "Ruler", rgb: [140, 60, 70], 
            price: "₨1200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l024", brand: "Maybelline", name: "SuperStay Matte", 
            shade: "Heroine", rgb: [210, 80, 95], 
            price: "₨1200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        
        // L'Oreal Color Riche
        { 
            id: "l025", brand: "L'Oreal", name: "Color Riche", 
            shade: "Blake's Red", rgb: [190, 45, 55], 
            price: "₨1800", availability: "online", type: "lipstick",
            finish: "satin", undertone: "cool"
        },
        { 
            id: "l026", brand: "L'Oreal", name: "Color Riche", 
            shade: "Eva's Nude", rgb: [205, 155, 140], 
            price: "₨1800", availability: "online", type: "lipstick",
            finish: "cream", undertone: "neutral"
        },
        { 
            id: "l027", brand: "L'Oreal", name: "Color Riche", 
            shade: "Julianne's Nude", rgb: [195, 145, 130], 
            price: "₨1800", availability: "online", type: "lipstick",
            finish: "cream", undertone: "neutral"
        },
        { 
            id: "l028", brand: "L'Oreal", name: "Color Riche", 
            shade: "J Lo's Nude", rgb: [185, 135, 120], 
            price: "₨1800", availability: "online", type: "lipstick",
            finish: "cream", undertone: "warm"
        },
        { 
            id: "l029", brand: "L'Oreal", name: "Color Riche", 
            shade: "Doutzen's Nude", rgb: [175, 125, 110], 
            price: "₨1800", availability: "online", type: "lipstick",
            finish: "cream", undertone: "warm"
        },
        
        // MAC
        { 
            id: "l030", brand: "MAC", name: "Ruby Woo", 
            shade: "Ruby", rgb: [175, 35, 45], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l031", brand: "MAC", name: "Velvet Teddy", 
            shade: "Teddy", rgb: [185, 130, 110], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l032", brand: "MAC", name: "Chili", 
            shade: "Chili", rgb: [190, 70, 50], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l033", brand: "MAC", name: "Mehr", 
            shade: "Mehr", rgb: [195, 110, 120], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l034", brand: "MAC", name: "Twig", 
            shade: "Twig", rgb: [180, 120, 115], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "satin", undertone: "neutral"
        },
        { 
            id: "l035", brand: "MAC", name: "Diva", 
            shade: "Diva", rgb: [130, 40, 50], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        
        // Huda Beauty Liquid Matte
        { 
            id: "l036", brand: "Huda Beauty", name: "Liquid Matte", 
            shade: "Icon", rgb: [195, 90, 100], 
            price: "₨3200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l037", brand: "Huda Beauty", name: "Liquid Matte", 
            shade: "Trendsetter", rgb: [175, 115, 95], 
            price: "₨3200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l038", brand: "Huda Beauty", name: "Liquid Matte", 
            shade: "Bombshell", rgb: [210, 140, 145], 
            price: "₨3200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l039", brand: "Huda Beauty", name: "Liquid Matte", 
            shade: "Flirt", rgb: [185, 100, 105], 
            price: "₨3200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l040", brand: "Huda Beauty", name: "Liquid Matte", 
            shade: "Cheerleader", rgb: [165, 50, 60], 
            price: "₨3200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        
        // Fenty Beauty
        { 
            id: "l041", brand: "Fenty Beauty", name: "Stunna Lip Paint", 
            shade: "Uncensored", rgb: [180, 40, 50], 
            price: "₨3800", availability: "online", type: "lipstick",
            finish: "liquid", undertone: "cool"
        },
        { 
            id: "l042", brand: "Fenty Beauty", name: "Mattemoiselle", 
            shade: "Ma'Damn", rgb: [175, 45, 55], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l043", brand: "Fenty Beauty", name: "Mattemoiselle", 
            shade: "Spanked", rgb: [190, 110, 115], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        },
        { 
            id: "l044", brand: "Fenty Beauty", name: "Mattemoiselle", 
            shade: "Saw-C", rgb: [200, 125, 105], 
            price: "₨2800", availability: "online", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        
        // NARS
        { 
            id: "l045", brand: "NARS", name: "Audacious", 
            shade: "Carmen", rgb: [185, 50, 60], 
            price: "₨3500", availability: "online", type: "lipstick",
            finish: "satin", undertone: "cool"
        },
        { 
            id: "l046", brand: "NARS", name: "Audacious", 
            shade: "Anna", rgb: [175, 115, 125], 
            price: "₨3500", availability: "online", type: "lipstick",
            finish: "satin", undertone: "cool"
        },
        { 
            id: "l047", brand: "NARS", name: "Audacious", 
            shade: "Barbara", rgb: [185, 130, 120], 
            price: "₨3500", availability: "online", type: "lipstick",
            finish: "satin", undertone: "neutral"
        },
        
        // Charlotte Tilbury
        { 
            id: "l048", brand: "Charlotte Tilbury", name: "Matte Revolution", 
            shade: "Pillow Talk", rgb: [205, 145, 140], 
            price: "₨4200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "neutral"
        },
        { 
            id: "l049", brand: "Charlotte Tilbury", name: "Matte Revolution", 
            shade: "Walk of Shame", rgb: [175, 80, 75], 
            price: "₨4200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "warm"
        },
        { 
            id: "l050", brand: "Charlotte Tilbury", name: "Matte Revolution", 
            shade: "Red Carpet Red", rgb: [170, 40, 50], 
            price: "₨4200", availability: "online", type: "lipstick",
            finish: "matte", undertone: "cool"
        }
    ],
    
    // ═══════════════════════════════════════════════════════════
    // DATABASE UTILITY METHODS
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Get all products of a specific type
     * @param {string} type - 'foundation' or 'lipstick'
     * @returns {Array} Filtered products
     */
    getByType(type) {
        if (type === 'foundation') return this.foundations;
        if (type === 'lipstick') return this.lipsticks;
        return [...this.foundations, ...this.lipsticks];
    },
    
    /**
     * Get products by availability
     * @param {string} availability - 'local' or 'online'
     * @returns {Array} Filtered products
     */
    getByAvailability(availability) {
        const all = [...this.foundations, ...this.lipsticks];
        return all.filter(p => p.availability === availability);
    },
    
    /**
     * Get products by brand
     * @param {string} brandName - Brand name
     * @returns {Array} Filtered products
     */
    getByBrand(brandName) {
        const all = [...this.foundations, ...this.lipsticks];
        return all.filter(p => p.brand === brandName);
    },
    
    /**
     * Get product by ID
     * @param {string} id - Product ID
     * @returns {Object|null} Product or null
     */
    getById(id) {
        const all = [...this.foundations, ...this.lipsticks];
        return all.find(p => p.id === id) || null;
    },
    
    /**
     * Get total product count
     * @returns {number} Total products
     */
    getTotalCount() {
        return this.foundations.length + this.lipsticks.length;
    },
    
    /**
     * Get all unique brands
     * @returns {Array} Brand names
     */
    getBrands() {
        const all = [...this.foundations, ...this.lipsticks];
        return [...new Set(all.map(p => p.brand))];
    },
    
    /**
     * Search products by name/shade
     * @param {string} query - Search query
     * @returns {Array} Matching products
     */
    search(query) {
        const all = [...this.foundations, ...this.lipsticks];
        const lowerQuery = query.toLowerCase();
        return all.filter(p => 
            p.name.toLowerCase().includes(lowerQuery) ||
            p.shade.toLowerCase().includes(lowerQuery) ||
            p.brand.toLowerCase().includes(lowerQuery)
        );
    }
};


// Make available globally
window.ProductDatabase = ProductDatabase;