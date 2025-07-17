const productsData = [
  {
    id: 1,
    category: "Munching Snacks",
    name: "ALMOND SEV (250 grm)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    originalPrice: 850,
    salePrice: 750,
    weight: "250 grm",
    onSale: true,
    description: "Product Description: Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). Zero cereal (jowar, bajra). It is more delicious than regular sev because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [3, 4]
  },
  {
    id: 2,
    category: "Ice Cream",
    name: "BLUE BERRY (500grm)",
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
    originalPrice: 1075,
    salePrice: 975,
    weight: "500 grm",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Fat free (cream / cocoa powder). Zero refined oil (butter / desi ghee). Zero flour (Almond flour/ cocoa powder). It is more delicious than regular ice-cream because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [6, 10]
  },
  {
    id: 3,
    category: "Munching Snacks",
    name: "CHEESE CRIPS (500 grm)",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    originalPrice: 2050,
    salePrice: 1950,
    weight: "500 grm",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). It is more delicious than regular cheese crips because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [1, 4]
  },
  {
    id: 4,
    category: "Munching Snacks",
    name: "CHEESY POCKETS (250gm)",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    originalPrice: 875,
    salePrice: 775,
    weight: "250 gm",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). It is more delicious than regular cookies because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [1, 3]
  },
  {
    id: 5,
    category: "Kebab",
    name: "CHICKEN KEBAB (10 pieces)",
    image: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?auto=format&fit=crop&w=400&q=80",
    originalPrice: 1175,
    salePrice: 975,
    weight: "10 pieces",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). It is more delicious than regular chicken kebab because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [8, 9]
  },
  {
    id: 6,
    category: "Ice Cream",
    name: "CHOCOLATE (500grm)",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    originalPrice: 950,
    salePrice: 850,
    weight: "500 grm",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Fat free (cream / cocoa powder). Zero refined oil (butter / desi ghee). Zero flour (Almond flour/ cocoa powder). It is more delicious than regular ice-cream because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [2, 10]
  },
  {
    id: 7,
    category: "Consultation",
    name: "CINNAMON TEA CAKE (300grm)",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    originalPrice: 1075,
    salePrice: 975,
    weight: "300 grm",
    onSale: false,
    description: "Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). It is more delicious than regular cakes because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [8, 9]
  },
  {
    id: 8,
    category: "Fat-Loss Brownie",
    name: "FAT LOSS BROWNIE (6 pieces)",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    originalPrice: 1075,
    salePrice: 975,
    weight: "6 pieces",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter / desi ghee). It is more delicious than regular because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [5, 7]
  },
  {
    id: 9,
    category: "Zero Wheat Chaat",
    name: "GOL-GAPPE (20 pieces)",
    image: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?auto=format&fit=crop&w=400&q=80",
    originalPrice: 350,
    salePrice: 250,
    weight: "20 pieces",
    onSale: true,
    description: "Zero sugar (has erythritol/monk fruit). Zero wheat (has almond / seeds flour). Zero refined oil (butter/desi ghee). It is more delicious than regular cookies because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [5, 7]
  },
  {
    id: 10,
    category: "Ice Cream",
    name: "VANILLA (500gms)",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    originalPrice: 850,
    salePrice: 750,
    weight: "500 gms",
    onSale: true,
    description: "Zero sugar (has erythritol / monk fruit). Fat free (cream / cocoa powder). Zero refined oil (butter / desi ghee). Zero flour (Almond flour/ cocoa powder). It is more delicious than regular ice-cream because it is processed with pure and natural ingredient with no chemicals like preservatives or stabilizers and emulsifiers. Does not spike your insulin levels and satisfied your taste and hunger and manage your weight too.",
    similar: [2, 6]
  }
];

export default productsData; 