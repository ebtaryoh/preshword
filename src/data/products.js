export const categories = [
  { 
    id: "cookware", 
    name: "Kitchen Wares & Cookware", 
    tagline: "Pots, Pans & Dutch Ovens", 
    count: 5, 
    image: "/images/product-cookware-set.jpg",
    color: "from-amber-500/20 to-orange-500/10"
  },
  { 
    id: "appliances", 
    name: "House Wares & Appliances", 
    tagline: "Blenders, Toasters & Processors", 
    count: 3, 
    image: "/images/product-smart-toaster.jpg",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  { 
    id: "utensils", 
    name: "Utensils & Luxury Cutlery", 
    tagline: "24pc Cutlery & Chef Knives", 
    count: 3, 
    image: "/images/product-luxury-cutlery.jpg",
    color: "from-lime-500/20 to-emerald-500/10"
  },
  { 
    id: "kids", 
    name: "Children Wares", 
    tagline: "BPA-Free Kids Feeding Sets", 
    count: 2, 
    image: "/images/product-children-tableware.jpg",
    color: "from-yellow-500/20 to-amber-500/10"
  },
  { 
    id: "tableware", 
    name: "Tableware & Dining", 
    tagline: "Aesthetic Stoneware Plates", 
    count: 2, 
    image: "/images/product-dinner-tableware.jpg",
    color: "from-purple-500/20 to-pink-500/10"
  },
  { 
    id: "storage", 
    name: "Home & Pantry Storage", 
    tagline: "Airtight Glass Canisters", 
    count: 1, 
    image: "/images/product-pantry-jars.jpg",
    color: "from-teal-500/20 to-emerald-500/10"
  }
];

export const products = [
  { 
    id: 1, 
    name: "28cm Non-Stick Sol-Gel Frying Pan & Cookware Set", 
    category: "cookware", 
    price: 58000, 
    originalPrice: 72000, 
    badge: "Bestseller",
    rating: 4.9,
    reviews: 248,
    image: "/images/product-cookware-set.jpg", 
    gallery: [
      "/images/product-cookware-set.jpg",
      "/images/hero-housewares-collection.jpg"
    ], 
    description: "Multi-layered European Sol-Gel mineral ceramic coating. 100% free from PTFE, PFOA, and heavy metals. Ultra-smooth non-stick surface wipes clean in seconds with zero chemical fumes.", 
    specs: { 
      material: "Forged Aluminum Core + Sol-Gel Mineral Glaze", 
      diameter: "28cm (11-inch)", 
      weight: "890g", 
      compatibility: "Induction, Gas, Electric, Ceramic",
      care: "Wipes clean with cloth or warm rinse" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true
  },
  { 
    id: 2, 
    name: "German Steel Kitchen Prep Knife Set (6pc)", 
    category: "utensils", 
    price: 45000, 
    originalPrice: 58000, 
    badge: "Trending",
    rating: 4.9,
    reviews: 164,
    image: "/images/product-knife-plantain-prep.jpg", 
    gallery: [
      "/images/product-knife-plantain-prep.jpg"
    ], 
    description: "Ice-tempered German DIN 1.4116 high-carbon stainless blades with 15° razor edges. Slices ripe plantains, meats, and vegetables with laser precision and effortless balance.", 
    specs: { 
      steel: "German DIN 1.4116 High-Carbon Stainless", 
      pieces: "6 (Chef Knife, Meat Cleaver, Santoku, Utility, Paring, Honing Steel)", 
      hardness: "56±2 HRC", 
      handle: "Ergonomic Pakkawood moisture-sealed grip" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 3, 
    name: "5.5L Enameled Cast Iron Dutch Oven Pot", 
    category: "cookware", 
    price: 78000, 
    originalPrice: 95000, 
    badge: "Heirloom Pot",
    rating: 5.0,
    reviews: 189,
    image: "/images/product-egusi-dutch-oven.jpg", 
    gallery: [
      "/images/product-egusi-dutch-oven.jpg",
      "/images/product-cookware-set.jpg"
    ], 
    description: "Heavy-duty 3-coat vitreous enamel Dutch oven with moisture-locking condensation lid. The gold standard for slow-simmered soups, stews, and braised meats that retain bubbling heat for hours.", 
    specs: { 
      material: "Heavy-Gauge Enameled Cast Iron", 
      capacity: "5.5 Liters", 
      thermalLimit: "Up to 260°C / 500°F (Stovetop & Oven)", 
      dishwasherSafe: "Yes" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true 
  },
  { 
    id: 4, 
    name: "24-Piece Satin Gold & Matte Black Luxury Cutlery Set", 
    category: "utensils", 
    price: 38000, 
    originalPrice: 48000, 
    badge: "New Luxury Drop",
    rating: 5.0,
    reviews: 198,
    image: "/images/product-luxury-cutlery.jpg", 
    gallery: [
      "/images/product-luxury-cutlery.jpg",
      "/images/product-dinner-tableware.jpg"
    ], 
    description: "Complete 24-piece luxury 18/10 stainless steel dining flatware set with modern satin brushed gold heads and ergonomic matte black handles. Includes 6 dinner forks, 6 dinner knives, 6 tablespoons, and 6 dessert teaspoons in a presentation case.", 
    specs: { 
      steel: "Food-Grade 18/10 Chromium-Nickel Stainless Steel", 
      pieces: "24 (6 Knives, 6 Forks, 6 Tablespoons, 6 Dessert Spoons)", 
      finish: "Electro-Plated Satin Gold & Matte Black", 
      care: "Dishwasher Safe & Corrosion Resistant" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 5, 
    name: "High-Speed Vortex Pepper & Beans Blender 1500W", 
    category: "appliances", 
    price: 65000, 
    originalPrice: 82000, 
    badge: "House Essential",
    rating: 5.0,
    reviews: 312,
    image: "/images/product-blender-puree.jpg", 
    gallery: [
      "/images/product-blender-puree.jpg"
    ], 
    description: "Ultra-high torque 1500-watt commercial grade motor with 6-blade Japanese stainless steel assembly. Pulverizes scotch bonnets (ata rodo), tatashe peppers, beans, and frozen fruits into silky puree in 30 seconds.", 
    specs: { 
      power: "1500 Watts Peak Turbo", 
      rpm: "28,000 RPM", 
      jar: "2.0L BPA-Free Shatterproof Eastman Tritan", 
      warranty: "2 Years Instant Replacement in Nigeria" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 6, 
    name: "Smart Digital Long-Slot Toaster with LED Timer", 
    category: "appliances", 
    price: 36000, 
    originalPrice: 46000, 
    badge: "Breakfast Star",
    rating: 4.9,
    reviews: 147,
    image: "/images/product-smart-toaster.jpg", 
    gallery: [
      "/images/product-smart-toaster.jpg"
    ], 
    description: "Matte charcoal and brushed champagne gold 2-slice wide-slot smart toaster with digital LED countdown screen. Features 6 precise shade browning levels, one-touch bagel, defrost, reheat, and high-lift carriage.", 
    specs: { 
      power: "900W High-Efficiency Quartz Element", 
      controls: "Digital LED Countdown Display + 6 Shade Settings", 
      slots: "Extra-Wide 1.5-inch Self-Centering Slots", 
      features: "Removable Crumb Tray, Bagel & Defrost Functions" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 7, 
    name: "5-Piece Eco Silicone & Bamboo Children Dining Set", 
    category: "kids", 
    price: 22000, 
    originalPrice: 30000, 
    badge: "Parent Favorite",
    rating: 5.0,
    reviews: 184,
    image: "/images/product-children-tableware.jpg", 
    gallery: [
      "/images/product-children-tableware.jpg"
    ], 
    description: "Aesthetic, 100% food-grade BPA-free silicone and natural organic bamboo children's dining set. Includes powerful suction divided plate, soft toddler straw cup, ergonomic baby spoon & fork, and waterproof catch-all bib.", 
    specs: { 
      material: "100% Food-Grade Platinum Silicone + Organic Bamboo", 
      safety: "BPA, PVC, Phthalate & Lead Free", 
      pieces: "5 (Suction Plate, Sippy Straw Cup, Spoon, Fork, Catch Bib)", 
      safe: "Microwave Safe, Dishwasher Safe (-40°C to 220°C)" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 8, 
    name: "Smart Electric Yam Pounder & Food Processor 1200W", 
    category: "appliances", 
    price: 88000, 
    originalPrice: 110000, 
    badge: "Chef Choice",
    rating: 5.0,
    reviews: 278,
    image: "/images/product-yam-pounder.jpg", 
    gallery: [
      "/images/product-yam-pounder.jpg"
    ], 
    description: "Brushed stainless steel electric pounder. Dual-tier double-S stainless blades effortlessly pound hot boiled yam into soft, stretchy, lump-free pounded yam in under 2 minutes with zero physical effort.", 
    specs: { 
      motor: "Pure Copper 1200W High-Torque Motor", 
      bowl: "4.0L Food-Grade 304 Stainless Steel Bowl", 
      modes: "Pound Yam, Pulse Meat, Dough Knead, Vegetable Chop", 
      speed: "2-Speed Touch Button" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 9, 
    name: "Speckled Stoneware Dinner Plates Service (6pc)", 
    category: "tableware", 
    price: 42000, 
    originalPrice: 52000, 
    badge: "Aesthetic Table",
    rating: 4.9,
    reviews: 142,
    image: "/images/product-dinner-tableware.jpg", 
    gallery: [
      "/images/product-dinner-tableware.jpg"
    ], 
    description: "Artisanal semi-matte glazed high-temperature stoneware plates with raised organic rims. Perfectly sized for generous family dinners, rice, stew, and sides without spills.", 
    specs: { 
      material: "Double-fired high-density stoneware", 
      diameter: "28cm (Large Dinner Service)", 
      set: "6 Dinner Plates", 
      safe: "Microwave, Oven (up to 220°C), Dishwasher" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true 
  },
  { 
    id: 10, 
    name: "Borosilicate Glass Pantry Jars & Canisters (5pc)", 
    category: "storage", 
    price: 32000, 
    originalPrice: 40000, 
    badge: "Pantry Organization",
    rating: 4.9,
    reviews: 172,
    image: "/images/product-pantry-jars.jpg", 
    gallery: [
      "/images/product-pantry-jars.jpg"
    ], 
    description: "High-borosilicate thermal glass food canisters with natural bamboo airtight lids and silicone gaskets. Keeps dry ingredients, grains, spices, and pasta fresh, moisture-free, and organized.", 
    specs: { 
      glass: "Heavy Borosilicate Glass (BPA & Lead Free)", 
      lids: "FSC Certified Natural Bamboo", 
      capacities: "500ml, 800ml, 1200ml, 1600ml, 2200ml", 
      seal: "Double-lip airtight silicone ring" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true 
  },
  { 
    id: 11, 
    name: "Heavy Ribbed Cast Iron Suya & Grill Skillet Pan", 
    category: "cookware", 
    price: 52000, 
    originalPrice: 65000, 
    badge: "Grill Master",
    rating: 5.0,
    reviews: 234,
    image: "/images/product-clean-grill-skillet.jpg", 
    gallery: [
      "/images/product-clean-grill-skillet.jpg",
      "/images/product-suya-skillet.jpg"
    ], 
    description: "Pre-seasoned heavy cast iron grill skillet with deep sear ridges and dual pour spouts. Gives authentic smoky char to steak, beef suya, roasted vegetables, and fish right on your gas or electric stove.", 
    specs: { 
      material: "Pre-Seasoned 100% Cast Iron with organic flaxseed oil", 
      dimensions: "30cm Square Ribbed Surface", 
      weight: "3.2kg", 
      stovetop: "All Stovetops + Oven + Open Charcoal Grill" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 12, 
    name: "Multi-Tier Stainless Steel Steamer Pot (8.5L)", 
    category: "cookware", 
    price: 62000, 
    originalPrice: 78000, 
    badge: "Party Size",
    rating: 4.9,
    reviews: 156,
    image: "/images/product-clean-steamer.jpg", 
    gallery: [
      "/images/product-clean-steamer.jpg",
      "/images/product-steamer-moimoi.jpg"
    ], 
    description: "Heavy-gauge 3-tier induction steamer pot with tempered glass lid and steam vents. Spotless 304 stainless steel ideal for steaming vegetables, dumplings, parcels, plantains, and seafood with uniform heat circulation.", 
    specs: { 
      steel: "Food-Grade 304 High-Polished Stainless Steel", 
      tiers: "3 Detachable Steamer Baskets + Base Pot", 
      capacity: "8.5L Total Volume", 
      compatibility: "Induction, Gas, Electric" 
    }, 
    inStock: true, 
    isNew: true, 
    onSale: true 
  },
  { 
    id: 13, 
    name: "Handcrafted Beechwood Cooking & Spatula Set (Omorogun 5pc)", 
    category: "utensils", 
    price: 18000, 
    originalPrice: 24000, 
    badge: "Handmade",
    rating: 4.9,
    reviews: 215,
    image: "/images/product-wooden-omorogun.jpg", 
    gallery: [
      "/images/product-wooden-omorogun.jpg"
    ], 
    description: "Curated 5-piece set of solid wooden kitchen turning sticks (omorogun), cooking spoons, and sauce scrapers. Crafted from FSC-certified organic beechwood that protects non-stick cookware.", 
    specs: { 
      wood: "FSC Certified European Beechwood", 
      pieces: "5 curated tools (2 Omorogun, 2 Spatulas, 1 Deep Ladle)", 
      finish: "Food-safe organic mineral oil coating", 
      length: "32-35cm" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true 
  },
  { 
    id: 14, 
    name: "Authentic Ceramic Pepper Soup & Simmer Broth Pot", 
    category: "cookware", 
    price: 48000, 
    originalPrice: 60000, 
    badge: "Slow Simmer",
    rating: 4.8,
    reviews: 110,
    image: "/images/product-pepper-soup.jpg", 
    gallery: [
      "/images/product-pepper-soup.jpg"
    ], 
    description: "Chalk-cream thermal shock-resistant ceramic pot designed for slow-simmering broths, soups, and herbal teas. Retains bubbling heat for 2+ hours with zero flavor transfer.", 
    specs: { 
      material: "Mineral-Reinforced Stoneware Ceramic", 
      capacity: "3.8 Liters", 
      base: "Heat-diffusing thick base for even simmer", 
      handles: "Integrated stay-cool ceramic side handles" 
    }, 
    inStock: true, 
    isNew: false, 
    onSale: true 
  }
];

export const heroHighlights = [
  { label: "100% Non-Toxic", sub: "PTFE, PFOA & BPA Free" },
  { label: "Lagos Same-Day", sub: "Nationwide in 48h" },
  { label: "4.9/5 Rating", sub: "From 3,400+ Nigerian Homes" },
  { label: "Pay on Delivery", sub: "Lagos & Abuja Hubs" }
];

export const reviews = [
  {
    id: 1,
    name: "Chidinma Okafor",
    role: "Interior & Lifestyle Creator, Lekki Phase 1",
    city: "Lekki, Lagos",
    dish: "Kitchen Wares & Cutlery",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop",
    rating: 5,
    verified: true,
    helpfulCount: 56,
    text: "PRESHWORD completely transformed my kitchen setup. The 24-piece gold and black cutlery set looks stunning on my dining table, and the 1500W blender crushes whole beans and peppers into smooth puree in seconds!"
  },
  {
    id: 2,
    name: "Tunde Bakare",
    role: "Culinary Enthusiast, Victoria Island",
    city: "Victoria Island, Lagos",
    dish: "Smart Appliances & Grill",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
    rating: 5,
    verified: true,
    helpfulCount: 48,
    text: "The digital smart toaster and cast iron grill pan are exceptional quality. Breakfast toast is golden and evenly crisp every morning, and dispatch in Lagos took less than 3 hours to my door."
  },
  {
    id: 3,
    name: "Dr. Fatima Aliyu",
    role: "Pediatrician & Mother of Two, Maitama",
    city: "Maitama, Abuja",
    dish: "Children Wares & Family Kitchen",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop",
    rating: 5,
    verified: true,
    helpfulCount: 62,
    text: "Finding 100% food-grade BPA-free children tableware in Nigeria that is both durable and aesthetic was difficult until PRESHWORD. The suction plates stay put, and the non-toxic ceramic cookware gives me complete peace of mind."
  }
];
