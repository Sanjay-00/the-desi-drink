/* ============================================================================
 *  THE DESI DRINK  SITE CONFIGURATION
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you normally need to edit.
 *  Change menu items, prices, photos, address, hours, links etc. right here.
 *  No coding knowledge needed, just edit the text between the quotes.
 *
 *  This is a browse-only digital menu (no cart / ordering), so nothing here
 *  needs a phone number for WhatsApp - "phone" below is only used for the
 *  tap-to-call button.
 * ========================================================================== */

window.CAFE_CONFIG = {

  /* --- Basic cafe identity ------------------------------------------------- */
  cafe: {
    name: "THE DESI DRINK",
    tagline: "Aromatic • Spiced • Soulful",

    phone: "+918825209423",            // REPLACE with cafe phone

    address: "Tamnar - Chhattisgarh",  // REPLACE
    mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Desi+Drink",  // REPLACE

    hours: [
      { day: "Breakfast Menu", time: "7:00 AM to 11:00 AM" },
      { day: "All Day Menu",   time: "11:00 AM to 10:00 PM" },
    ],

    instagram: "https://instagram.com/",   // REPLACE with cafe Instagram
  },

  /* --- Short "our story" blurb --------------------------------------------- */
  about: {
    heading: "Our Story",
    text: "The Desi Drink is a modern cafe built around an old-fashioned idea, " +
          "good ingredients make good food. We source fresh spices, real milk, " +
          "and honest produce, and cook everything the way we'd want it ourselves. " +
          "Whether it's a quick chai between errands or a full plate with friends, " +
          "pull up a chair and taste the difference.",
  },

  /* --- Hero banner slideshow ------------------------------------------------
   * Each slide is one combo/feature. The homepage auto-rotates through these.
   * Add or remove slides freely - just copy a block and edit it.
   * ------------------------------------------------------------------------- */
  heroSlides: [
    {
      badge: "New Launch",
      title: "Jambo Burger",
      desc: "The ultimate 3-layer burger! Huge, loaded with flavour, and made for true food lovers.",
      price: 150,
      image: "assets/menu/jambo-burger.jpg",
    },
    {
      badge: "Monsoon Special",
      title: "Bun Maska & Masala Chai",
      desc: "The classic monsoon duo! Soft buttery bun with soulful aromatic spiced chai.",
      price: 50,
      image: "assets/menu/combo-bun-maska-chai.jpg",
    },
    {
      badge: "Cheesy Favourite",
      title: "Cheese Garlic Bread & Chai",
      desc: "Crispy garlicky cheese bread paired with our signature masala chai.",
      price: 55,
      image: "assets/menu/combo-cheese-garlic-chai.jpg",
    },
  ],

  /* --- Category tabs ------------------------------------------------------- */
  categories: ["Warm Brews", "Bites & Snacks", "Breakfast", "Cool Sips", "Desserts"],

  /* --- THE MENU ------------------------------------------------------------
   * Breakfast items are available 7AM to 11AM only (7 different items, one
   * per day of the week). All other items are available all day.
   * To add an item: copy one { ... } block, paste it, change the details.
   * For photos: drop a file in assets/menu/ and write "assets/menu/your-photo.jpg"
   * ------------------------------------------------------------------------- */
  menu: [

    // ======================================================================
    // WARM BREWS
    // ======================================================================
    {
      id: '1',
      name: 'Masala Chai',
      category: 'Warm Brews',
      price: 20,
      desc: 'BOLD SPICES, WARM HUGS! Brewed with fresh spices and rich milk.',
      badge: 'Sukoon',
      image: 'assets/menu/masala-chai.jpg',
      customize: [
        { name: 'Tea Strength', type: 'radio', options: ['Regular Spice Tea', 'Kadak Spice (Strong)', 'Lighter Blend'] },
        { name: 'Sugar', type: 'radio', options: ['Regular Sugar', 'No Sugar', 'Less Sweet', 'Desi Gur/Jaggery (+Rs.5)'] },
        { name: 'Serve Style', type: 'radio', options: ['Clay Kulhad (Traditional)', 'Classic Cup'] }
      ]
    },
    {
      id: '2',
      name: 'Hot Coffee',
      category: 'Warm Brews',
      price: 30,
      desc: 'SIP. RELAX. RECHARGE. Smooth creamy espresso combined with rich warm milk.',
      badge: 'Creamy Froth',
      image: 'assets/menu/hot-coffee.jpg',
      customize: [
        { name: 'Sugar', type: 'radio', options: ['Regular Sugar', 'No Sugar', 'Less Sweet'] },
        { name: 'Strength', type: 'radio', options: ['Classic Blend', 'Darker Roast'] }
      ]
    },
    {
      id: '3',
      name: 'Chhotu Chocolate Coffee',
      category: 'Warm Brews',
      price: 40,
      desc: 'WARM HUG IN EVERY SIP! Creamy coffee loaded with rich cocoa sweetness.',
      badge: 'Best-Seller',
      image: 'assets/menu/hot-chocolate-coffee.jpg',
      customize: [
        { name: 'Sugar', type: 'radio', options: ['Regular Sugar', 'No Sugar', 'Less Sweet'] },
        { name: 'Extra', type: 'checkbox', options: [{ name: 'Whipped Cream Topping', price: 10 }] }
      ]
    },
    {
      id: '4',
      name: 'Hot Cocoa',
      category: 'Warm Brews',
      price: 60,
      desc: 'RICH. CREAMY. IRRESISTIBLE! Pure hot cocoa made with real cocoa powder.',
      badge: 'Pure Indulgence',
      image: '',
    },

    // ======================================================================
    // BITES & SNACKS
    // ======================================================================
    {
      id: '5',
      name: 'Bun Maska',
      category: 'Bites & Snacks',
      price: 40,
      desc: 'SIMPLE JOY, PERFECTED! Soft toasted bun loaded with creamy maska butter.',
      badge: 'Sweet Bliss',
      image: 'assets/menu/bun-maska.jpg',
      customize: [
        { name: 'Extra', type: 'checkbox', options: [{ name: 'Warm Chocolate Drizzle', price: 10 }] }
      ]
    },
    {
      id: '6',
      name: 'Cheese Garlic Bread',
      category: 'Bites & Snacks',
      price: 40,
      desc: 'GARLICKY BLISS! Crispy baked slices topped with cheese and fresh garlic.',
      badge: 'Irresistible',
      image: 'assets/menu/cheese-garlic-bread.jpg',
      customize: [
        { name: 'Extra', type: 'checkbox', options: [{ name: 'Double Cheese Topping', price: 15 }] }
      ]
    },
    {
      id: '7',
      name: 'Cheesy Corn',
      category: 'Bites & Snacks',
      price: 50,
      desc: 'CHEESY. SPICY. PERFECT! Sweet juicy corn smothered with melty cheese topping.',
      badge: 'Comfort Snack',
      image: 'assets/menu/cheesy-corn.jpg',
      customize: [
        { name: 'Portion', type: 'radio', options: ['Half Portion (Rs.50)', 'Full Portion (+Rs.50)'] }
      ]
    },
    {
      id: '8',
      name: 'Chilli Garlic Maggi',
      category: 'Bites & Snacks',
      price: 40,
      desc: 'BOLD FLAVORS! Savory noodles cooked with spicy garlic and loaded cheese.',
      badge: 'Spicy Delight',
      image: 'assets/menu/chilli-garlic-maggi.jpg',
      customize: [
        { name: 'Portion', type: 'radio', options: ['Half Portion (Rs.40)', 'Full Portion (+Rs.30)'] },
        { name: 'Heat', type: 'radio', options: ['Spicy Garlicky', 'Extra Spicy', 'Milder Blend'] },
        { name: 'Extra', type: 'checkbox', options: [{ name: 'Extra Cheese Topping', price: 15 }] }
      ]
    },
    {
      id: '9',
      name: 'Cheese Paneer Sandwich',
      category: 'Bites & Snacks',
      price: 80,
      desc: 'CHEESY GOODNESS! Crispy toasted bread packed with paneer and mozzarella.',
      badge: 'Toasted Perfectly',
      image: 'assets/menu/cheese-paneer-sandwich.jpg',
      customize: [
        { name: 'Size', type: 'radio', options: ['Small Size (Rs.80)', 'Jumbo Size (+Rs.20)'] }
      ]
    },
    {
      id: '10',
      name: 'Cheese Corn Sandwich',
      category: 'Bites & Snacks',
      price: 130,
      desc: 'CHEESY. CORNY. TOTALLY YUMMY! Sweet corn and melty cheese perfectly toasted.',
      badge: 'Loved By Everyone',
      image: 'assets/menu/cheese-corn-sandwich.jpg',
      customize: [
        { name: 'Size', type: 'radio', options: ['Regular Size (Rs.130)', 'Jumbo Size (+Rs.20)'] }
      ]
    },
    {
      id: '11',
      name: 'Cheese Garlic Mushroom',
      category: 'Bites & Snacks',
      price: 150,
      desc: 'A BURST OF FLAVOR! Fresh mushrooms loaded with garlic and melty cheese.',
      badge: 'Pure Delight',
      image: 'assets/menu/cheese-garlic-mushroom.jpg',
    },
    {
      id: '46',
      name: 'Jambo Burger',
      category: 'Bites & Snacks',
      price: 150,
      desc: 'BIGGER. BETTER. ULTIMATE! Huge 3-layer burger loaded with flavour and made for true food lovers.',
      badge: 'New Launch',
      image: 'assets/menu/jambo-burger.jpg',
    },

    // ======================================================================
    // BREAKFAST  (available 7AM to 11AM only, one special per day)
    // ======================================================================
    {
      id: '12',
      name: 'Aloo Ke Parathe',
      category: 'Breakfast',
      price: 40,
      desc: 'HEARTY AND WHOLESOME! Crispy flatbread stuffed with spiced potato filling.',
      badge: 'Mon Special',
      image: '',
    },
    {
      id: '13',
      name: 'Sevai Upma',
      category: 'Breakfast',
      price: 40,
      desc: 'LIGHT BITE, BIG DELIGHT! Fine sevai tossed with fresh veggies and spices.',
      badge: 'Tue Special',
      image: 'assets/menu/sevai-upma.jpg',
    },
    {
      id: '14',
      name: 'Chole Paratha',
      category: 'Breakfast',
      price: 50,
      desc: 'COMFORT FOOD, PURE DELIGHT! Soft paratha served with rich flavorful chole.',
      badge: 'Wed Special',
      image: 'assets/menu/chole-paratha.jpg',
    },
    {
      id: '15',
      name: 'Poha',
      category: 'Breakfast',
      price: 35,
      desc: 'LIGHT AND WHOLESOME! Fluffy flattened rice tempered with spices and peanuts.',
      badge: 'Thu Special',
      image: '',
    },
    {
      id: '16',
      name: 'Rava Upma',
      category: 'Breakfast',
      price: 40,
      desc: 'SIMPLE INGREDIENTS, BIG COMFORT! Soft savory semolina cooked with fresh veggies.',
      badge: 'Fri Special',
      image: 'assets/menu/rava-upma.jpg',
    },
    {
      id: '17',
      name: 'Mooglet',
      category: 'Breakfast',
      price: 40,
      desc: 'PROTEIN PACKED GOODNESS! Light crispy moong dal chilla served piping hot.',
      badge: 'Sat Special',
      image: '',
    },
    {
      id: '18',
      name: 'Uttapam',
      category: 'Breakfast',
      price: 40,
      desc: 'SOUTH INDIAN GOODNESS! Soft savory rice pancake loaded with colorful veggies.',
      badge: 'Sun Special',
      image: 'assets/menu/uttapam.jpg',
    },

    // ======================================================================
    // COOL SIPS
    // ======================================================================
    {
      id: '19',
      name: 'Cold Coffee',
      category: 'Cool Sips',
      price: 70,
      desc: 'SIP OF JOY! Thick creamy chilled coffee made with real coffee beans.',
      badge: 'Thandi Khushi',
      image: 'assets/menu/cold-coffee.jpg',
    },
    {
      id: '20',
      name: 'Cold Cocoa',
      category: 'Cool Sips',
      price: 120,
      desc: 'RICH. CREAMY. PURE INDULGENCE! Chilled cocoa drink loaded with chocolate goodness.',
      badge: 'Choco Bliss',
      image: '',
    },
    {
      id: '21',
      name: 'Chaanch',
      category: 'Cool Sips',
      price: 20,
      desc: 'DESI PERFECTION! Cool probiotic buttermilk with mint and roasted cumin.',
      badge: 'Healthy Sip',
      image: 'assets/menu/chaanch.jpg',
    },
    {
      id: '22',
      name: 'Sattu Chatpata',
      category: 'Cool Sips',
      price: 30,
      desc: 'DESI ENERGY, PURE AND SIMPLE! Natural sattu drink packed with protein power.',
      badge: 'Energy Boost',
      image: 'assets/menu/sattu-chatpata.jpg',
    },
    {
      id: '23',
      name: 'Saunf Breeze',
      category: 'Cool Sips',
      price: 20,
      desc: 'COOL. REFRESHING. NATURALLY YOURS! Chilled fennel drink aids digestion perfectly.',
      badge: 'Feel Good',
      image: 'assets/menu/saunf-breeze.jpg',
    },
    {
      id: '24',
      name: 'Plain Lassi',
      category: 'Cool Sips',
      price: 40,
      desc: 'DESI PERFECTION! Cool creamy yogurt drink blended smooth and perfectly chilled.',
      badge: 'Classic Desi',
      image: '',
      customize: [
        { name: 'Flavour', type: 'radio', options: ['Sweet', 'Salted', 'No Sugar'] }
      ]
    },
    {
      id: '25',
      name: 'Rabdi Lassi',
      category: 'Cool Sips',
      price: 50,
      desc: 'SWEETNESS THAT FEELS LIKE HOME! Thick creamy lassi loaded with dry fruits.',
      badge: 'Royal Sip',
      image: 'assets/menu/rabdi-lassi.jpg',
    },
    {
      id: '26',
      name: 'Strawberry Lassi',
      category: 'Cool Sips',
      price: 60,
      desc: 'DESI PERFECTION! Cool refreshing lassi made with real fresh strawberries.',
      badge: 'Berry Fresh',
      image: 'assets/menu/strawberry-lassi.jpg',
    },
    {
      id: '27',
      name: 'Mango Lassi',
      category: 'Cool Sips',
      price: 60,
      desc: 'FRUITY. CREAMY. PURE BLISS! Thick mango lassi made with real fresh mangoes.',
      badge: 'Tropical Joy',
      image: 'assets/menu/mango-lassi.jpg',
    },
    {
      id: '28',
      name: 'Black Currant Lassi',
      category: 'Cool Sips',
      price: 60,
      desc: 'RICH. CREAMY. PURE BLISS! Chilled lassi bursting with real black currant.',
      badge: 'Berry Bliss',
      image: 'assets/menu/black-currant-lassi.jpg',
    },
    {
      id: '29',
      name: 'Thick Mango Shake',
      category: 'Cool Sips',
      price: 80,
      desc: 'PURE MANGO BLISS! Thick rich shake loaded with real mango and dry fruits.',
      badge: 'Tropical Thick',
      image: 'assets/menu/thick-mango-shake.jpg',
    },
    {
      id: '30',
      name: 'Strawberry Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'A SIP OF STRAWBERRY BLISS! Fizzy chilled drink with real strawberries inside.',
      badge: 'Berry Fizz',
      image: 'assets/menu/strawberry-mocktail.jpg',
    },
    {
      id: '31',
      name: 'Black Currant Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'BERRY BLISS! Chilled fizzy refreshment loaded with sweet real black currant.',
      badge: 'Refreshing',
      image: 'assets/menu/black-currant-mocktail.jpg',
    },
    {
      id: '32',
      name: 'Mango Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'A SIP OF MANGO BLISS! Chilled fizzy drink with real mango pulp inside.',
      badge: 'Tropical Bliss',
      image: 'assets/menu/mango-mocktail.jpg',
    },
    {
      id: '33',
      name: 'Orange Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'A SIP OF CITRUS BLISS! Chilled fizzy orange drink with fresh citrus twist.',
      badge: 'Citrus Fresh',
      image: 'assets/menu/orange-mocktail.jpg',
    },
    {
      id: '34',
      name: 'Jamun Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'A SIP OF INDIAN SUMMER! Cool jamun fizz bursting with authentic desi flavors.',
      badge: 'Desi Pride',
      image: 'assets/menu/jamun-mocktail.jpg',
    },
    {
      id: '35',
      name: 'Jeera Mocktail',
      category: 'Cool Sips',
      price: 60,
      desc: 'COOL AND REFRESHING! Chilled cumin fizz with a perfectly spiced tangy twist.',
      badge: 'Desi Punch',
      image: '',
    },

    // ======================================================================
    // DESSERTS
    // ======================================================================
    {
      id: '36',
      name: 'Strawberry Ice Cream',
      category: 'Desserts',
      price: 50,
      desc: 'FRUITY. CREAMY. PURE BLISS! Rich creamy scoops made with real strawberries.',
      badge: 'Cool Treat',
      image: 'assets/menu/strawberry-icecream.jpg',
      bestseller: true,
    },
    {
      id: '37',
      name: 'Black Currant Ice Cream',
      category: 'Desserts',
      price: 50,
      desc: 'FRUITY. CREAMY. PURE BLISS! Berry rich scoops made with real black currant.',
      badge: 'Berry Delight',
      image: 'assets/menu/black-currant-icecream.jpg',
      bestseller: true,
    },
    {
      id: '38',
      name: 'Coffee Ice Cream',
      category: 'Desserts',
      price: 50,
      desc: 'BOLD. CREAMY. PURE INDULGENCE! Rich coffee scoops chilled to pure perfection.',
      badge: 'Coffee Lover',
      image: 'assets/menu/coffee-icecream.jpg',
      bestseller: true,
    },
    {
      id: '39',
      name: 'Mango Ice Cream',
      category: 'Desserts',
      price: 50,
      desc: 'FRUITY. CREAMY. PURE BLISS! Rich mango scoops made with real fresh mangoes.',
      badge: 'Mango Delight',
      image: 'assets/menu/mango-icecream.jpg',
      bestseller: true,
    },
    {
      id: '40',
      name: 'Chocolate Ice Cream',
      category: 'Desserts',
      price: 60,
      desc: 'RICH. CREAMY. PURE BLISS! Decadent chocolate scoops made with real cocoa.',
      badge: 'Choco Bliss',
      image: 'assets/menu/chocolate-icecream.jpg',
      bestseller: true,
    },
    {
      id: '41',
      name: 'Orange Stuffed Ice Cream',
      category: 'Desserts',
      price: 60,
      desc: 'A BURST OF ORANGE HAPPINESS! Creamy ice cream scooped inside fresh orange.',
      badge: 'Citrus Special',
      image: 'assets/menu/orange-stuffed-icecream.jpg',
      bestseller: true,
    },
    {
      id: '42',
      name: 'Mango Stuffed Ice Cream',
      category: 'Desserts',
      price: 80,
      desc: 'A BURST OF MANGO HAPPINESS! Creamy ice cream scooped inside fresh mango.',
      badge: 'Mango Special',
      image: 'assets/menu/mango-stuffed-icecream.jpg',
      bestseller: true,
      customize: [
        { name: 'Size', type: 'radio', options: ['Small (Rs.80)', 'Large (+Rs.20)'] }
      ]
    },
    {
      id: '43',
      name: 'Mango Mousse',
      category: 'Desserts',
      price: 60,
      desc: 'PURE MANGO JOY! Silky creamy mousse made with real mango curd and paneer.',
      badge: 'Silky Smooth',
      image: 'assets/menu/mango-mousse.jpg',
    },
    {
      id: '44',
      name: 'Misti Doi',
      category: 'Desserts',
      price: 35,
      desc: 'SWEETNESS OF TRADITION! Authentic creamy sweet yogurt made from pure milk.',
      badge: 'Traditional',
      image: 'assets/menu/misti-doi.jpg',
    },
    {
      id: '45',
      name: 'Aam Doi',
      category: 'Desserts',
      price: 40,
      desc: 'MANGO GOODNESS, PURE BLISS! Sweet mango curd made with real fresh mangoes.',
      badge: 'Mango Sweet',
      image: 'assets/menu/aam-doi.jpg',
    },
  ],
};
