/* ============================================================================
 *  THE DESI DRINK  SITE CONFIGURATION
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you normally need to edit.
 *  Change menu items, prices, photos, address, hours, links etc. right here.
 *  No coding knowledge needed, just edit the text between the quotes.
 *
 *  IMPORTANT (WhatsApp number):
 *    The live phone number is NOT stored here. On the deployed site it is
 *    injected from a GitHub "secret" (see README). The token below is a
 *    placeholder that the deploy step replaces automatically.
 *    For LOCAL testing, put your real number in `config.local.js`
 *    (that file is gitignored and never committed).
 * ========================================================================== */

window.CAFE_CONFIG = {

  /* --- WhatsApp ordering number (international format, no +, no spaces) ----
   * Leave this token as-is. It is replaced at deploy time from the
   * WHATSAPP_NUMBER GitHub secret, and overridden locally by config.local.js. */
  whatsappNumber: "__WHATSAPP_NUMBER__",

  /* --- Basic cafe identity ------------------------------------------------- */
  cafe: {
    name: "THE DESI DRINK",
    tagline: "Aromatic • Spiced • Soulful",

    // One-tap call button. Use full number with country code.
    phone: "+918825209423",            // REPLACE with cafe phone

    // "Find us" section.
    address: "123 Your Street, Your Area, Your City - 000000",  // REPLACE
    // Paste a Google Maps share link (Maps app -> Share -> Copy link).
    mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Desi+Drink",  // REPLACE

    // Opening hours (shown as plain text rows).
    hours: [
      { day: "Mon to Fri", time: "8:00 AM to 10:00 PM" },
      { day: "Sat to Sun", time: "9:00 AM to 11:00 PM" },
    ],

    // Social. Leave a value empty ("") to hide that link.
    instagram: "https://instagram.com/",   // REPLACE with cafe Instagram
  },

  /* --- Short "our story" blurb --------------------------------------------- */
  about: {
    heading: "Our Story",
    text: "The Desi Drink began with one simple idea, that a cup of chai is more " +
          "than a drink, it's a warm hug. We brew every cup with fresh spices, " +
          "real milk, and a whole lot of soul. Pull up a chair, take a sip, and " +
          "let the world slow down for a while.",
  },

  /* --- Hero banner (the featured combo at the top) ------------------------- */
  hero: {
    badge: "Soulful Combo",
    title: "Masala Chai & Bun Maska!",
    desc: "Experience pure, organic sukoon toasted to perfect golden buttery crispiness. Complete combo only at ₹60!",
    price: 60,
    // REPLACE with your own banner photo (e.g. "assets/hero.jpg")
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600",
    // Which two menu item ids make up the combo (see menu ids below):
    comboItemIds: ["1", "4"],
  },

  /* --- Category tabs (order shown left to right) --------------------------- */
  categories: ["Warm Brews", "Bites & Snacks", "Cool Refreshers"],

  /* --- THE MENU -----------------------------------------------------------
   * To add an item: copy one { ... } block, paste it, change the details.
   * Each "id" must be unique.
   * For photos: use a web link, or drop a file in assets/menu/ and write
   * "assets/menu/your-photo.jpg".
   * customize: optional. "radio" = pick one, "checkbox" = pick any (with +price).
   * ------------------------------------------------------------------------- */
  menu: [
    {
      id: '1',
      name: 'Masala Chai',
      category: 'Warm Brews',
      price: 20,
      desc: 'BOLD SPICES, WARM HUGS! Brewed with fresh spices and rich milk.',
      badge: 'Sukoon',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/masala-chai.jpg
      customize: [
        { name: 'Tea Strength', type: 'radio', options: ['Regular Spice Tea', 'Kadak Spice (Strong)', 'Lighter Blend'] },
        { name: 'Sugar Selection', type: 'radio', options: ['Regular Sugar', 'No Sugar added', 'Less Sweet', 'Desi Gur/Jaggery (+₹5)'] },
        { name: 'Kulhad Serve', type: 'radio', options: ['Clay Pot (Traditional)', 'Classic Cup'] }
      ]
    },
    {
      id: '2',
      name: 'Hot Coffee',
      category: 'Warm Brews',
      price: 30,
      desc: 'SIP. RELAX. RECHARGE. Smooth creamy espresso combined with rich warm milk.',
      badge: 'Creamy Froth',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/hot-coffee.jpg
      customize: [
        { name: 'Sugar Selection', type: 'radio', options: ['Regular Sugar', 'No Sugar added', 'Less Sweet'] },
        { name: 'Strength Brew', type: 'radio', options: ['Classic Espresso', 'Darker Roast'] }
      ]
    },
    {
      id: '3',
      name: 'Chhotu Chocolate Coffee',
      category: 'Warm Brews',
      price: 40,
      desc: 'WARM HUG IN EVERY SIP! Creamy coffee loaded with rich cocoa sweetness.',
      badge: 'Best-Seller',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/chocolate-coffee.jpg
      customize: [
        { name: 'Temperature Style', type: 'radio', options: ['Classic Warm', 'Iced Chocolate Frappe (+₹10)'] },
        { name: 'Extra Froth Topper', type: 'checkbox', options: [{ name: 'Topped Cocoa Whipped Cream', price: 10 }] }
      ]
    },
    {
      id: '4',
      name: 'Classic Bun Maska',
      category: 'Bites & Snacks',
      price: 40,
      desc: 'SIMPLE JOY, PERFECTED! Soft toasted bun loaded with creamy maska butter.',
      badge: 'Sweet Bliss',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/bun-maska.jpg
      customize: [
        { name: 'Toasted Bread Custom', type: 'radio', options: ['Soft Warm Toasted', 'Slightly Crispier Roll'] },
        { name: 'Addons', type: 'checkbox', options: [{ name: 'Warm Chocolate Drizzle', price: 10 }] }
      ]
    },
    {
      id: '5',
      name: 'Chilli Garlic Maggi',
      category: 'Bites & Snacks',
      price: 60,
      desc: 'BOLD FLAVORS! Savory noodles cooked with spicy garlic and loaded cheese.',
      badge: 'Spicy Delight',
      image: 'https://images.unsplash.com/photo-1612966608997-30d411b49989?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/garlic-maggi.jpg
      customize: [
        { name: 'Heat Index', type: 'radio', options: ['Spicy Garlicky', 'Extremely Spicy Extra Pepper', 'Milder Blend'] },
        { name: 'Melted Toppers', type: 'checkbox', options: [{ name: 'Melted Extra Cheese', price: 15 }] }
      ]
    },
    {
      id: '6',
      name: 'Cheese Paneer Sandwich',
      category: 'Bites & Snacks',
      price: 80,
      desc: 'CHEESY GOODNESS! Crispy toasted bread packed with paneer and mozzarella.',
      badge: 'Toasted Perfectly',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/paneer-sandwich.jpg
      customize: [
        { name: 'Portion Size Selection', type: 'radio', options: ['Small Portion Size (₹80)', 'Jumbo Portion Size (+₹20)'] }
      ]
    },
    {
      id: '7',
      name: 'Cheese Garlic Bread',
      category: 'Bites & Snacks',
      price: 40,
      desc: 'GARLICKY BLISS! Crispy baked slices topped with cheese and fresh garlic.',
      badge: 'Irresistible',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/garlic-bread.jpg
      customize: [
        { name: 'Cheesy upgrade', type: 'checkbox', options: [{ name: 'Double Cheese Topping', price: 15 }] }
      ]
    },
    {
      id: '8',
      name: 'Black Currant Mocktail',
      category: 'Cool Refreshers',
      price: 60,
      desc: 'BERRY BLISS! Chilled fizzy refreshment loaded with sweet real black currant.',
      badge: 'Refreshing',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=300&auto=format&fit=crop', // REPLACE -> assets/menu/black-currant.jpg
      customize: [
        { name: 'Fizz Strength', type: 'radio', options: ['High Carbonation', 'Light Water Blend'] }
      ]
    }
  ],

};
