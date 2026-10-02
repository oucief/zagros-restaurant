export const RESTAURANT_INFO = {
  name: "Zagros Restaurant",
  tagline: "Authentic Middle Eastern Charcoal Grill & Fresh Tandoor Bread",
  cuisine: "Middle Eastern, Charcoal Grill, Kebabs, Rice Plates & Fresh Naan",
  address: "5-7 Bentinck Rd, Radford, Nottingham NG7 4AA, UK",
  shortAddress: "5-7 Bentinck Rd, Radford, Nottingham",
  postcode: "NG7 4AA",
  phone: "+44 115 942 0088",
  phoneRaw: "+441159420088",
  displayPhone: "0115 942 0088",
  rating: 5.0,
  reviewCount: 18,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zagros+Restaurant+5-7+Bentinck+Rd+Radford+Nottingham+NG7+4AA",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.721471378822!2d-1.171887323291244!3d52.96238690342371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c2049e7b2ff9%3A0xbcf7ce0750fc3ddc!2s5-7%20Bentinck%20Rd%2C%20Radford%2C%20Nottingham%20NG7%204AA%2C%20UK!5e0!3m2!1sen!2suk!4v1711200000000!5m2!1sen!2suk",
  openingHours: "Open Daily: 11:00 AM – 10:00 PM",
  hoursDetail: [
    { day: "Monday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Tuesday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Wednesday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Thursday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Friday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Saturday", hours: "11:00 AM – 10:00 PM", isOpen: true },
    { day: "Sunday", hours: "11:00 AM – 10:00 PM", isOpen: true },
  ],
  certifications: ["100% Halal Certified", "Charcoal Grill Mangal", "Fresh Clay Oven Tandoor", "Dine-In & Takeout"],
};

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "grill", label: "Grill & Kebabs", subtitle: "Natural Charcoal Mangal" },
  { id: "rice", label: "Rice Dishes & Stews", subtitle: "Slow-Braised & Aromatic" },
  { id: "appetizers", label: "Appetizers & Bread", subtitle: "Fresh Tandoor & Cold Mezze" },
  { id: "drinks", label: "Drinks & Desserts", subtitle: "Ayran, Chai & Baklava" },
];

export const MENU_ITEMS = [
  // --- GRILL & KEBABS ---
  {
    id: "g1",
    name: "Zagros Royal Mixed Grill Platter",
    nativeName: "ميكس مشاوي زاگرۆس",
    category: "grill",
    price: 18.95,
    tag: "Chef's Signature",
    popular: true,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate feast: 1 skewer of Lamb Kobeda, 1 skewer of Chicken Shish, 2 Lamb Chops, and 3 Chicken Wings grilled over hardwood embers. Served with aromatic saffron rice, charred tomato, grilled sweet pepper, sumac onion salad, and warm tandoor naan.",
    details: ["100% Fresh Halal Meat", "Served with Rice & Bread", "Large Portion (Ideal for 1-2)"],
    allergens: ["Wheat (Bread)"]
  },
  {
    id: "g2",
    name: "Lamb Kobeda Kebab (Shish)",
    nativeName: "کەبابی کوبیدە",
    category: "grill",
    price: 11.95,
    tag: "Best Seller",
    popular: true,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    description: "Two long skewers of prime minced British lamb blended with chopped onions, fresh parsley, and authentic Zagros mountain spices. Charred over glowing coals and served with fresh tandoor naan, sumac salad, and homemade garlic sauce.",
    details: ["2 Lamb Skewers", "Cooked over Hardwood Charcoal", "Choice of Saffron Rice or Fresh Naan"],
    allergens: ["Wheat (Bread)"]
  },
  {
    id: "g3",
    name: "Marinated Chicken Shish (Tawook)",
    nativeName: "شیش تاووق برژاو",
    category: "grill",
    price: 11.50,
    tag: "Tender & Juicy",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    description: "Tender chunks of boneless chicken breast marinated overnight in Greek yogurt, saffron, crushed garlic, lemon zest, and mild Middle Eastern herbs. Grilled on wide skewers until golden and succulent.",
    details: ["Marinated 24 Hours", "Served with Toum (Garlic Sauce)", "Fresh Naan or Rice"],
    allergens: ["Dairy (Marinade)"]
  },
  {
    id: "g4",
    name: "Charcoal Grilled Lamb Chops (Pirzola)",
    nativeName: "پەراسووی بەرخ (پیرزۆلا)",
    category: "grill",
    price: 14.95,
    tag: "Customer Favorite",
    popular: false,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
    description: "Four thick-cut tender lamb cutlets seasoned with sea salt, crushed peppercorns, rosemary, and olive oil, seared over open coals for that smoky caramelized crust. Served with grilled vegetables and saffron rice.",
    details: ["4 Prime Cutlets", "Smoky Charcoal Sear", "Includes Rice or Fresh Tandoor Bread"],
    allergens: []
  },
  {
    id: "g5",
    name: "Charcoal Glazed Lamb Ribs",
    nativeName: "پەراسووی برژاو",
    category: "grill",
    price: 13.50,
    tag: "Smoky & Crispy",
    popular: false,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: "Succulent lamb ribs brushed with pomegranate molasses and Middle Eastern dry rub, slow-charred over wood charcoal until crispy on the edges and tender inside.",
    details: ["Pomegranate Glaze", "Hardwood Fire Roasted", "Served with Fresh Naan & Salad"],
    allergens: []
  },
  {
    id: "g6",
    name: "Spiced Charcoal Chicken Wings",
    nativeName: "باڵی مریشک لەسەر خەڵوز",
    category: "grill",
    price: 8.50,
    tag: "Crispy & Smoky",
    popular: false,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    description: "7 pieces of fresh chicken wings tossed in garlic-paprika marinade, grilled over hot coals with a crispy blistered skin and juicy center. Accompanied by garlic sauce and pickled turnips.",
    details: ["7 Pieces", "Charcoal Blistered", "House Garlic Toum"],
    allergens: []
  },
  {
    id: "g7",
    name: "Whole Seabass on Charcoal Grill",
    nativeName: "ماسی لەسەر خەڵوز",
    category: "grill",
    price: 15.50,
    tag: "Fresh Catch",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    description: "Fresh whole Mediterranean seabass stuffed with fresh dill, lemon slices, and crushed garlic, cooked gently over natural embers. Served with lemon-herb olive oil, salad, and choice of rice or naan.",
    details: ["Whole Fresh Fish", "Lemon & Dill Infused", "Includes Rice or Naan"],
    allergens: ["Fish"]
  },

  // --- RICE DISHES & STEWS ---
  {
    id: "r1",
    name: "Traditional Kurdish Lamb Shank (Qozi / Quzi)",
    nativeName: "قۆزی بەرخ لەگەڵ برنج",
    category: "rice",
    price: 14.95,
    tag: "Signature Dish",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    description: "Our pride and joy: tender lamb shank slow-braised for 5 hours in cinnamon, cardamom, dried lime (numi basra), and bay leaf broth until it melts off the bone. Served over fragrant golden saffron basmati rice topped with toasted slivered almonds and sweet raisins, accompanied by a bowl of rich Tashreeb broth.",
    details: ["Slow-Cooked 5 Hours", "Melt-in-Mouth Tender", "Served with Rice, Broth & Naan"],
    allergens: ["Nuts (Almond Garnish - optional)"]
  },
  {
    id: "r2",
    name: "Zagros Spiced Chicken Biryani",
    nativeName: "بریانی مریشک",
    category: "rice",
    price: 11.50,
    tag: "Aromatic",
    popular: true,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    description: "Aromatic long-grain basmati rice layered with half tender chicken, caramelized golden onions, crushed cardamom, cloves, and whole spices. Served with a side of lentil soup or tomato daqoos sauce.",
    details: ["Traditional Dum Style", "Tender Chicken", "Includes Daqoos & Salad"],
    allergens: []
  },
  {
    id: "r3",
    name: "Bamia Okra Lamb Stew with Rice",
    nativeName: "شۆربای بامیە لەگەڵ گۆشت",
    category: "rice",
    price: 10.95,
    tag: "Comfort Classic",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Tender chunks of slow-cooked lamb simmered with baby green okra in a rich, garlicky tomato and fresh coriander sauce with a hint of pomegranate tang. Served with fluffy vermicelli basmati rice.",
    details: ["Rich Garlicky Tomato Sauce", "Slow-Cooked Lamb", "Includes Fluffy Rice"],
    allergens: ["Wheat (Vermicelli)"]
  },
  {
    id: "r4",
    name: "Fasolia (White Bean Stew) with Meat & Rice",
    nativeName: "شۆربای فاسۆلیا",
    category: "rice",
    price: 10.50,
    tag: "Hearty & Warm",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    description: "Plump white beans simmered with tender lamb cuts in a savory tomato-herb gravy infused with garlic and ground coriander. Served with steamed basmati rice and fresh Kurdish bread.",
    details: ["Rich in Protein", "Hearty Home-Style", "Includes Rice & Bread"],
    allergens: []
  },
  {
    id: "r5",
    name: "Vegetarian Okra Stew & Saffron Rice",
    nativeName: "بامیەی ڕووەکی",
    category: "rice",
    price: 9.95,
    tag: "Vegetarian",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Tender baby okra simmered in rich tomato, garlic, and fresh coriander sauce, served with steaming saffron rice, pickled vegetables, and warm tandoor naan.",
    details: ["100% Vegetarian / Vegan Friendly", "Served with Rice & Bread"],
    allergens: []
  },

  // --- APPETIZERS & BREAD ---
  {
    id: "a1",
    name: "Fresh Clay-Oven Tandoor Naan (Kurdish Bread)",
    nativeName: "نانی تیری / نانی تەنور",
    category: "appetizers",
    price: 1.50,
    tag: "Baked Fresh Daily",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Hand-stretched flatbread slapped directly onto the scorching clay walls of our traditional tandoor oven, emerging blistered, hot, and slightly crispy with sesame seeds and a light brush of butter.",
    details: ["Baked to Order in Seconds", "Traditional Clay Hearth", "Crispy & Pillowy"],
    allergens: ["Wheat (Gluten)"]
  },
  {
    id: "a2",
    name: "Artisanal Creamy Hummus with Olive Oil",
    nativeName: "حومس بە ڕۆنی زەیتوون",
    category: "appetizers",
    price: 4.50,
    tag: "House Made",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80",
    description: "Silky smooth puréed chickpeas blended with premium sesame tahini, fresh lemon juice, and crushed garlic. Drizzled generously with extra virgin olive oil, whole chickpeas, and smoked paprika. Served with fresh naan.",
    details: ["Creamy & Smooth", "Extra Virgin Olive Oil", "Served with 1 Fresh Naan"],
    allergens: ["Sesame", "Wheat (Bread)"]
  },
  {
    id: "a3",
    name: "Smoked Baba Ghanoush (Moutabal)",
    nativeName: "بابا غنوج / موتبەل",
    category: "appetizers",
    price: 4.95,
    tag: "Smoky Mezze",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Whole aubergines chargrilled over live embers until charred and smoky, hand-whipped with creamy tahini, garlic, lemon, and fresh pomegranate seeds. Served with hot tandoor bread.",
    details: ["Charcoal Smoked Eggplant", "Pomegranate Garnish", "Includes Fresh Naan"],
    allergens: ["Sesame", "Wheat (Bread)"]
  },
  {
    id: "a4",
    name: "Kurdish Crispy Kubba (3 Pcs)",
    nativeName: "کوبەی کوردی",
    category: "appetizers",
    price: 5.50,
    tag: "Traditional",
    popular: false,
    spicy: 1,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "Crispy golden cracked-wheat (bulgur) croquettes stuffed with finely minced lamb, pine nuts, sweet onions, and aromatic Kurdish seven-spice. Fried to crunchy perfection.",
    details: ["3 Pieces", "Crispy Shell & Juicy Lamb Filling", "Handmade Daily"],
    allergens: ["Wheat (Bulgur)", "Nuts (Pine Nuts)"]
  },
  {
    id: "a5",
    name: "Golden Crispy Falafel (5 Pcs)",
    nativeName: "فەلافل بە تەحینە",
    category: "appetizers",
    price: 4.95,
    tag: "Vegetarian",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    description: "Crispy freshly fried patties made from soaked chickpeas, fresh coriander, parsley, and toasted cumin. Served with sesame tahini dip and tangy pickled pink turnips.",
    details: ["5 Pieces", "100% Vegan", "House Tahini & Pickles"],
    allergens: ["Sesame"]
  },
  {
    id: "a6",
    name: "Fattoush Salad with Sumac & Crispy Khubz",
    nativeName: "زەڵاتەی فەتوش",
    category: "appetizers",
    price: 4.95,
    tag: "Fresh & Tangy",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Crisp romaine lettuce, baby cucumbers, cherry tomatoes, and red radishes tossed with fresh mint, wild mountain sumac, pomegranate molasses dressing, and crunchy toasted flatbread crisps.",
    details: ["Tangy Pomegranate Dressing", "Crispy Bread Croutons", "Refreshing Pairing for Grill"],
    allergens: ["Wheat"]
  },
  {
    id: "a7",
    name: "Mast-o-Khiar (Mint & Cucumber Yogurt)",
    nativeName: "ماست و خەیار",
    category: "appetizers",
    price: 4.20,
    tag: "Cooling",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    description: "Thick strained Middle Eastern yogurt folded with diced English cucumbers, wild dried mountain mint, crushed garlic, and a hint of walnut. The perfect cooling companion to charcoal kebabs.",
    details: ["Cooling After Spiced Grills", "Greek-Style Strained Yogurt"],
    allergens: ["Dairy"]
  },
  {
    id: "a8",
    name: "Traditional Yellow Lentil Soup (Shorba)",
    nativeName: "شۆربای نیسک",
    category: "appetizers",
    price: 4.00,
    tag: "Heartwarming",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Velvety spiced yellow lentils cooked with cumin, sweet turmeric, and slow-caramelized onions. Served steaming hot with a fresh lemon wedge and crispy fried bread.",
    details: ["Warming & Wholesome", "Served with Lemon & Fresh Bread"],
    allergens: ["Wheat (Bread)"]
  },

  // --- DRINKS & DESSERTS ---
  {
    id: "d1",
    name: "Fresh Chilled Ayran (Doogh)",
    nativeName: "دۆی کوردی فێنک",
    category: "drinks",
    price: 2.20,
    tag: "Traditional Drink",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Middle Eastern salted and whipped yogurt beverage with a hint of dried mint. Cool, savoury, and the time-honored authentic accompaniment to hot charcoal kebabs.",
    details: ["Hand-Whisked", "Chilled & Frothy", "Digestive & Refreshing"],
    allergens: ["Dairy"]
  },
  {
    id: "d2",
    name: "Zagros Cardamom Black Tea (Chai)",
    nativeName: "چای بە هێل",
    category: "drinks",
    price: 1.80,
    tag: "Aromatic Brew",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: "Piping hot Persian-style strong black tea brewed with crushed green cardamom pods. Served in a traditional glass teacup with raw sugar crystals on the side.",
    details: ["Freshly Brewed", "Fragrant Green Cardamom", "Served Sweet or Unsweetened"],
    allergens: []
  },
  {
    id: "d3",
    name: "Homemade Pistachio Baklava (3 Pcs)",
    nativeName: "بەقلاوە بە فستق",
    category: "drinks",
    price: 3.95,
    tag: "Sweet Finish",
    popular: true,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    description: "Crisp layers of delicate filo pastry brushed with pure clarified butter, stuffed generously with roasted Antep pistachios, and drenched in fragrant orange-blossom and honey syrup.",
    details: ["3 Generous Pieces", "Crispy Filo & Antep Pistachio", "Pure Honey Glaze"],
    allergens: ["Wheat", "Nuts (Pistachio)", "Dairy"]
  },
  {
    id: "d4",
    name: "Iced Pomegranate & Mint Cooler",
    nativeName: "شەربەتی هەنار و نەعنا",
    category: "drinks",
    price: 2.80,
    tag: "Refreshing",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    description: "Sparkling chilled natural pomegranate nectar infused with muddled fresh mint leaves, lime juice, and crushed ice.",
    details: ["100% Fruit Juice", "No Artificial Colors", "Served Over Ice"],
    allergens: []
  },
  {
    id: "d5",
    name: "Cold Soft Drinks (Vimto / Coca-Cola / 7Up)",
    nativeName: "خواردنەوە گازیەکان",
    category: "drinks",
    price: 1.80,
    tag: "Chilled Can",
    popular: false,
    spicy: 0,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    description: "Choice of chilled can: Classic Middle Eastern favorite Vimto, Coca-Cola Original, Diet Coke, Fanta Orange, or 7Up.",
    details: ["330ml Chilled Can", "Served with Lemon & Ice"],
    allergens: []
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: 1,
    author: "Mohammed K.",
    rating: 5,
    time: "2 weeks ago",
    content: "Hands down the best charcoal grill in Nottingham! The Kobeda kebab is extraordinarily juicy and the fresh tandoor naan came straight from the clay oven steaming hot. Generous portions and very welcoming Kurdish hospitality. Will be our weekly spot!",
    highlight: "Best charcoal grill in Nottingham"
  },
  {
    id: 2,
    author: "Sophie Reynolds",
    rating: 5,
    time: "a month ago",
    content: "Stumbled upon Zagros on Bentinck Road after a friend recommended their lamb shank. The meat literally fell off the bone, and the saffron rice with toasted almonds was heaven. 100% Halal and clean atmosphere. 5 stars all day.",
    highlight: "Meat literally fell off the bone"
  },
  {
    id: 3,
    author: "Aras Baban",
    rating: 5,
    time: "3 weeks ago",
    content: "Proper authentic Kurdish and Middle Eastern grill. Real charcoal makes all the difference! The mixed grill platter was huge, more than enough for two people. Staff are polite, food was fast, and the tea at the end was delicious.",
    highlight: "Proper authentic Kurdish charcoal grill"
  },
  {
    id: 4,
    author: "David L.",
    rating: 5,
    time: "2 months ago",
    content: "Called ahead for a takeout order (+44 115 942 0088) and it was ready in 20 minutes hot and packed securely. The chicken shish was tender and flavorful, and the hummus was creamy and fresh. Radford has a real gem here.",
    highlight: "Fast takeout & tender chicken shish"
  }
];

export const FAQS = [
  {
    q: "Is all the food 100% Halal?",
    a: "Yes, absolutely. All meat and poultry served at Zagros Restaurant are 100% certified Halal, ethically sourced, and prepared according to strict Halal standards."
  },
  {
    q: "Do you offer Dine-In as well as Takeout?",
    a: "Yes! We have comfortable seating for dine-in guests and families, as well as fast takeaway collection. You can call us directly on 0115 942 0088 to place your takeout order for prompt pickup."
  },
  {
    q: "Where are you located and is there parking nearby?",
    a: "We are located at 5-7 Bentinck Rd, Radford, Nottingham NG7 4AA. There is convenient street parking along Bentinck Road and adjacent streets, and we are easily accessible by local buses from Nottingham City Centre."
  },
  {
    q: "What are your opening hours?",
    a: "We are open 7 days a week, Monday through Sunday, from 11:00 AM until 10:00 PM."
  }
];
