/**
 * AURAM — Complete Menu & Media Configuration
 * --------------------------------------------------------------------------
 * Edit image URLs in MEDIA_CONFIG or menu items in MENU_CATEGORIES below.
 * All prices are in INR (₹) and preserved exactly as specified.
 */

export const MEDIA_CONFIG = {
  hero: {
    src: './assets/images/hero-espresso.jpg',
    alt: 'Rich golden crema espresso extracting into a matte ceramic cup in warm morning light'
  },
  story: {
    src: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&w=1000&q=85',
    alt: 'Minimalist AURAM café bar and coffee workspace in warm natural light'
  },
  experiences: {
    coffee: {
      src: './assets/images/exp-coffee.jpg',
      alt: 'Handmade stoneware cup with delicate rosetta latte art on travertine stone'
    },
    chocolate: {
      src: './assets/images/exp-chocolate.jpg',
      alt: 'Velvety Belgian hot chocolate in a minimalist ceramic mug with cocoa dusting'
    },
    frappe: {
      src: 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=1000&q=85',
      alt: 'Ice-blended crafted coffee frappe served cold'
    },
    innovative: {
      src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85',
      alt: 'Innovative specialty coffee pour with rich crema'
    }
  },
  gallery: [
    {
      id: 'gal-1',
      src: './assets/images/gallery-pour.jpg',
      alt: 'Barista pouring silky steamed milk into espresso',
      caption: 'The Quiet Ritual of Pouring',
      aspect: 'tall'
    },
    {
      id: 'gal-2',
      src: 'https://images.unsplash.com/photo-1590093217544-da597729d81a?auto=format&fit=crop&w=1000&q=85',
      alt: 'Close-up of freshly roasted specialty coffee beans',
      caption: 'Small-Batch Roasted Beans',
      aspect: 'wide'
    },
    {
      id: 'gal-3',
      src: 'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?auto=format&fit=crop&w=1000&q=85',
      alt: 'Aromatic roasted coffee beans and brewing preparation',
      caption: 'Single-Origin Roasts & Cupping',
      aspect: 'square'
    },
    {
      id: 'gal-4',
      src: 'https://images.unsplash.com/photo-1687825807239-f880c177aea4?auto=format&fit=crop&w=1000&q=85',
      alt: 'Warm specialty café counter and welcoming atmosphere',
      caption: 'A Place to Slow Down',
      aspect: 'tall'
    },
    {
      id: 'gal-5',
      src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1000&q=85',
      alt: 'Sunlit café table and coffee setting',
      caption: 'Morning Light & Conversation',
      aspect: 'square'
    },
    {
      id: 'gal-6',
      src: 'https://images.unsplash.com/photo-1720664282854-6081564f7e88?auto=format&fit=crop&w=1000&q=85',
      alt: 'Warm indulgent hot chocolate in a stoneware cup',
      caption: 'Velvety Hot Chocolate',
      aspect: 'square'
    },
    {
      id: 'gal-7',
      src: 'https://images.unsplash.com/photo-1620051787220-50768889e32c?auto=format&fit=crop&w=1000&q=85',
      alt: 'Manual pour-over coffee brewing into a glass carafe',
      caption: 'Manual Pour-Over Craft',
      aspect: 'wide'
    },
    {
      id: 'gal-8',
      src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85',
      alt: 'Chilled chocolate cookie frappe topped with cream',
      caption: 'Crafted Frappes & Cold Blends',
      aspect: 'square'
    }
  ]
};

export const HIGHLIGHTS_DATA = [
  {
    name: 'Jaggery Cinnamon Latte',
    price: '₹370',
    category: 'hot-innovations',
    categoryLabel: 'Hot Innovations',
    description: 'An amazing source of iron, magnesium, potassium and loaded with antioxidants. Made with in-house cinnamon syrup.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Pistachio Cappuccino',
    price: '₹350',
    category: 'just-hot-white',
    categoryLabel: 'Just Hot White',
    description: 'Classic cappuccino infused with pistachio flavour and topped with real pistachio crumbs.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'TAN Mocha Bliss',
    price: '₹370',
    category: 'just-hot-white',
    categoryLabel: 'Just Hot White',
    description: 'Mocha made with 100% original Belgian cocoa (unsweetened / less sweetened).',
    image: 'https://images.unsplash.com/photo-1533651441215-d01c13c8c4ad?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Strawberry Espresso Tonic',
    price: '₹370',
    category: 'too-innovative',
    categoryLabel: 'Too Innovative',
    description: 'Cold, refreshing and bittersweet.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Iced Golden Americano',
    price: '₹270',
    category: 'too-innovative',
    categoryLabel: 'Too Innovative',
    description: 'A balanced and mild sweetness of honey poured with your favourite long black.',
    image: 'https://images.unsplash.com/photo-1462917882517-e150004895fa?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Biscoff Hot Chocolate',
    price: '₹430',
    category: 'hot-chocolate',
    categoryLabel: 'Hot Chocolate',
    description: 'Creamy hot chocolate mixed with Biscoff spread and hot milk, topped with Biscoff biscuit crumb and served with a crunchy Biscoff biscuit.',
    image: 'https://images.unsplash.com/photo-1697899841037-da543603bd09?auto=format&fit=crop&w=900&q=85'
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'black-gold',
    number: '01',
    title: 'Black Gold — Coffee',
    shortTitle: 'Black Gold',
    subtitle: 'Pure, bold espresso foundations.',
    items: [
      {
        name: 'Espresso',
        price: '₹210',
        description: 'A pure black shot of coffee and mother of all coffees.'
      },
      {
        name: 'Americano',
        price: '₹230',
        description: 'Espresso stretched with hot water.'
      },
      {
        name: 'Espresso Macchiato',
        price: '₹230',
        description: 'Espresso marked with a dash of milk foam.'
      },
      {
        name: 'Mandarin Black Hot',
        price: '₹250',
        description: 'An Americano served with a floating fresh slice of orange.'
      },
      {
        name: 'Irish Long Black',
        price: '₹270',
        description: 'Americano infused with rich Irish flavour.'
      }
    ]
  },
  {
    id: 'just-hot-white',
    number: '02',
    title: 'Just Hot White — Hot Coffee',
    shortTitle: 'Just Hot White',
    subtitle: 'Silky steamed milk paired with balanced espresso.',
    items: [
      {
        name: 'Cappuccino',
        price: '₹280',
        description: 'A classic authentic coffee served with equal amounts of espresso, milk and froth on top.'
      },
      {
        name: 'Latte',
        price: '₹300',
        description: 'Mild and milky coffee with little foam.'
      },
      {
        name: 'Flat White',
        price: '₹290',
        description: 'A mild and milky coffee served with almost no foam on top.'
      },
      {
        name: 'Mocha',
        price: '₹330',
        description: 'A chocolatey cappuccino.'
      },
      {
        name: 'Pistachio Cappuccino',
        price: '₹350',
        featured: true,
        description: 'Classic cappuccino infused with pistachio flavour and topped with real pistachio crumbs.'
      },
      {
        name: 'Cortado',
        price: '₹270',
        description: 'A strong coffee with equal amounts of espresso and foam of milk.'
      },
      {
        name: 'Hazelnut Cappuccino',
        price: '₹330',
        description: 'Handcrafted cappuccino with hazelnut flavour in it.'
      },
      {
        name: 'Hazelnut Latte',
        price: '₹350',
        description: 'Latte, a mild and milky coffee with hazelnut flavour in it.'
      },
      {
        name: 'Bounty Coconut Latte',
        price: '₹350',
        description: 'A coconut-flavoured coffee with little foam on top.'
      },
      {
        name: 'TAN Mocha Bliss',
        price: '₹370',
        featured: true,
        description: 'Mocha made with 100% original Belgian cocoa (unsweetened / less sweetened).'
      }
    ]
  },
  {
    id: 'too-icy',
    number: '03',
    title: 'Too Icy — Iced Coffee',
    shortTitle: 'Too Icy',
    subtitle: 'Crisp, chilled espresso pours over crystal ice.',
    items: [
      {
        name: 'Iced Americano',
        price: '₹270',
        description: 'Iced chilled water on the rocks topped with freshly brewed espresso.'
      },
      {
        name: 'Iced Latte',
        price: '₹310',
        description: 'Brewed by pouring espresso over ice and adding frothed milk on top.'
      },
      {
        name: 'Iced Cappuccino',
        price: '₹310',
        description: 'On the rocks, low-fat milk, espresso and crowned with milk foam.'
      },
      {
        name: 'Iced Espresso',
        price: '₹250',
        description: 'Hand-shaken espresso with ice and served in a glass.'
      },
      {
        name: 'Iced Mocha',
        price: '₹350',
        description: 'Iced cappuccino with in-house chocolate sauce.'
      },
      {
        name: 'Iced Chocolate',
        price: '₹350',
        description: 'In-house chocolate sauce topped with low-fat milk and served on the rocks.'
      },
      {
        name: 'Pistachio Iced Latte',
        price: '₹350',
        description: 'Classic iced latte infused with pistachio flavour.'
      },
      {
        name: 'Triple Burst',
        price: '₹370',
        description: 'Chocolate, in-house hazelnut and caramel, with milk topped with all three flavours.'
      },
      {
        name: 'Iced Cortado',
        price: '₹370',
        description: 'An icy cortado for that instant caffeine kick. A TAN special.'
      }
    ]
  },
  {
    id: 'too-chocolatey',
    number: '04',
    title: 'Too Chocolatey — Chocolate Beverages',
    shortTitle: 'Too Chocolatey',
    subtitle: 'Indulgent chilled chocolate shakes in two sizes.',
    items: [
      {
        name: 'Choco Mint',
        price: '₹380 Small / ₹430 Regular',
        description: 'Refreshing chocolate shake with mint infusion.'
      },
      {
        name: 'Berries & Chocolate',
        price: '₹380 Small / ₹430 Regular',
        description: 'Rich combination of forest berries and chocolate.'
      },
      {
        name: 'Oreo-licious',
        price: '₹380 Small / ₹430 Regular',
        description: 'Favourite of teenagers — Oreo with chocolate blended.'
      },
      {
        name: 'Kit & Kat',
        price: '₹370 Small / ₹410 Regular',
        description: 'Chocolate and KitKat blended to smooth.'
      },
      {
        name: 'Snickers Chocolate',
        price: '₹370 Small / ₹410 Regular',
        description: 'Rich and creamy chocolate shake with Snickers.'
      },
      {
        name: 'Choco Brownie Crunch',
        price: '₹410 Small / ₹440 Regular',
        description: 'Velvety chocolate shake that has brownie blended.'
      }
    ]
  },
  {
    id: 'hot-innovations',
    number: '05',
    title: 'Hot Innovations',
    shortTitle: 'Hot Innovations',
    subtitle: 'Warm, imaginative twists on classic espresso.',
    items: [
      {
        name: 'Kerala Spiced Cappuccino',
        price: '₹300',
        description: 'Cappuccino with infusion of cinnamon and cardamom.'
      },
      {
        name: 'Black Marine Cappuccino',
        price: '₹310',
        description: 'Cappuccino with added charcoal (100% safe and food grade).'
      },
      {
        name: 'German Cappuccino',
        price: '₹310',
        description: 'An espresso with loads of whipped cream, sip it and eat it.'
      },
      {
        name: 'Jaggery Cinnamon Latte',
        price: '₹370',
        featured: true,
        description: 'An amazing source of iron, magnesium, potassium and loaded with antioxidants. Made with in-house cinnamon syrup.'
      },
      {
        name: 'Nutty Nutella Mocha',
        price: '₹390',
        description: 'Combines the flavours of Nutella, a popular chocolate hazelnut spread, with rich espresso and creamy milk.'
      },
      {
        name: 'Spanish Valencia Coffee',
        price: '₹290',
        description: 'Made with equal amount of condensed milk, freshly brewed espresso and topped with milk foam to balance the flavour.'
      },
      {
        name: 'French Vanilla Latte',
        price: '₹330',
        description: 'Creamy espresso drink made with steamed milk and flavoured with sweet vanilla syrup, offering a rich, smooth taste with a hint of vanilla sweetness.'
      },
      {
        name: 'Winter Cappuccino',
        price: '₹330',
        description: 'Cozy espresso-based drink topped with steamed milk, a frothy cap of foam, and a dusting of aromatic nutmeg for a warm and festive twist.'
      },
      {
        name: 'Tiramisu Latte',
        price: '₹370',
        description: 'Combination of Italian dessert, tiramisu and elements of a latte.'
      }
    ]
  },
  {
    id: 'hot-chocolate',
    number: '06',
    title: 'Hot Chocolate',
    shortTitle: 'Hot Chocolate',
    subtitle: 'Velvety melted chocolate crafted for slow sipping.',
    items: [
      {
        name: 'Signature Hot Chocolate',
        price: '₹350',
        description: 'Rich melted chocolate with hot frothed milk.'
      },
      {
        name: 'Nutella Hot Chocolate',
        price: '₹410',
        description: 'All-time favourite Nutella melted with hot chocolate and frothed milk.'
      },
      {
        name: 'Crumbled Hot Chocolate',
        price: '₹410',
        description: 'Hot chocolate with crumbled brownie on top.'
      },
      {
        name: 'White Hot Chocolate',
        price: '₹410',
        description: 'Rich melted white chocolate with hot frothed milk.'
      },
      {
        name: 'Tiramisu Hot Chocolate',
        price: '₹430',
        description: 'Combination of Italian dessert, tiramisu and elements of a chocolate.'
      },
      {
        name: 'Belgian Hot Chocolate',
        price: '₹430',
        description: 'Hot chocolate with 100% original Belgian cocoa (unsweetened / less sweetened).'
      },
      {
        name: 'Bubblegum Hot Chocolate',
        price: '₹430',
        description: 'A hot chocolate with indulgent bubblegum flavour.'
      },
      {
        name: 'Pistachio Hot Chocolate',
        price: '₹430',
        description: 'Smooth white chocolate mixed with pistachio syrup and hot milk, topped with a pistachio crumble.'
      },
      {
        name: 'Biscoff Hot Chocolate',
        price: '₹430',
        featured: true,
        description: 'Creamy hot chocolate mixed with Biscoff spread and hot milk, topped with Biscoff biscuit crumb and served with a crunchy Biscoff biscuit.'
      }
    ]
  },
  {
    id: 'blended-frappes',
    number: '07',
    title: 'Blended Frappes',
    shortTitle: 'Blended Frappes',
    subtitle: 'Smooth, cold-blended coffee creations in Small and Regular.',
    items: [
      {
        name: 'Signature Blended Frappe',
        price: '₹350 Small / ₹410 Regular',
        description: 'A classic frappe but without having any ice cream in it.'
      },
      {
        name: 'Double Caffeinated',
        price: '₹380 Small / ₹410 Regular',
        description: 'Bold and strong version of Signature Cold Coffee.'
      },
      {
        name: 'Hazelnut Frappe',
        price: '₹410 Small / ₹450 Regular',
        description: 'A cold coffee blended with hazelnut flavour.'
      },
      {
        name: 'Mocha Frappe',
        price: '₹380 Small / ₹450 Regular',
        description: 'A chocolatey cold coffee.'
      },
      {
        name: 'Caramel Burst',
        price: '₹380 Small / ₹430 Regular',
        description: 'A cold coffee blended with caramel flavour.'
      },
      {
        name: 'TAN Mocha Frappe',
        price: '₹390 Small / ₹450 Regular',
        description: 'A chocolatey cold coffee made with 100% Belgian cocoa.'
      },
      {
        name: 'Brownie Mocha Frappe',
        price: '₹410 Small / ₹450 Regular',
        description: 'Sweet, chocolatey with velvety brownie crumbs.'
      },
      {
        name: 'Hazelnut Mocha Frappe',
        price: '₹430 Small / ₹470 Regular',
        description: 'Heavenly combination of hazelnut, coffee and chocolate.'
      },
      {
        name: 'Coffee Banoffee',
        price: '₹370 Small / ₹410 Regular',
        description: 'Banoffee and coffee blended together.'
      },
      {
        name: 'Tiramisu Frappe',
        price: '₹370 Small / ₹410 Regular',
        description: 'A cold coffee with tiramisu flavour blended altogether.'
      },
      {
        name: 'Pistachio Frappe',
        price: '₹370 Small / ₹410 Regular',
        description: 'A cold coffee with pistachio flavour blended altogether.'
      },
      {
        name: 'Biscoff Frappe',
        price: '₹370 Small / ₹410 Regular',
        description: 'A cold coffee with Biscoff spread blended altogether.'
      },
      {
        name: 'Mango Mocha Frappe',
        price: '₹370 Small / ₹410 Regular',
        description: 'A cold coffee with mango crush and chocolate blended altogether.'
      },
      {
        name: 'Brown Butter Frappe',
        price: '₹370 Small / ₹410 Regular',
        description: 'A cold coffee with brown butter flavour blended altogether.'
      }
    ]
  },
  {
    id: 'too-innovative',
    number: '08',
    title: 'Too Innovative — Specialty Beverages',
    shortTitle: 'Too Innovative',
    subtitle: 'Botanical tonics, cask-aged brews, and unexpected pairings.',
    items: [
      {
        name: 'Cranberry Fusion',
        price: '₹350',
        description: 'Cranberry with hand-shaken cask-aged coffee brew.'
      },
      {
        name: 'Espresso Ginger Ale',
        price: '₹370',
        description: 'Ginger ale with pour-over freshly brewed espresso.'
      },
      {
        name: 'Espresso Lemonade',
        price: '₹370',
        description: 'Classic lemonade with pour-over freshly brewed espresso.'
      },
      {
        name: 'Mango Iced Latte',
        price: '₹370',
        description: 'Mango puree poured over an iced latte.'
      },
      {
        name: 'Iced Tiramisu Latte',
        price: '₹370',
        description: 'Refreshing twist on the classic Italian dessert, tiramisu, combined with the creamy richness of a latte.'
      },
      {
        name: 'Burnt Jaggery Iced Latte',
        price: '₹350',
        description: 'Comforting beverage for those looking to explore unique flavour combinations in their coffee.'
      },
      {
        name: 'Iced Golden Americano',
        price: '₹270',
        featured: true,
        description: 'A balanced and mild sweetness of honey poured with your favourite long black.'
      },
      {
        name: 'Dalgona Affogato',
        price: '₹310',
        description: 'A whipped espresso poured over ice cream.'
      },
      {
        name: 'Pistachio Affogato',
        price: '₹310',
        description: 'A pistachio flavour with espresso poured over the ice cream.'
      },
      {
        name: 'Lahori Citrus Brew',
        price: '₹330',
        description: 'A TAN special iced Americano with a fizzy Lahori twist.'
      },
      {
        name: 'Strawberry Espresso Tonic',
        price: '₹370',
        featured: true,
        description: 'Cold, refreshing and bittersweet.'
      },
      {
        name: 'Hazelnut Espresso Toddy (Non-Alcoholic)',
        price: '₹370',
        description: 'Tan touch to espresso tonic with in-house hazelnut seeds.'
      }
    ]
  },
  {
    id: 'teas',
    number: '09',
    title: 'Teas',
    shortTitle: 'Teas',
    subtitle: 'Single-origin botanicals, spiced chai, and sparkling iced infusions.',
    items: [
      {
        name: 'Hibiscus Tea',
        price: '₹270',
        description: '100% original hibiscus leaves freshly brewed and sourced from Egypt.'
      },
      {
        name: 'Chamomile Tea',
        price: '₹270',
        description: 'Chamomile is mild, smooth and always believed to be beneficial.'
      },
      {
        name: 'Earl Grey',
        price: '₹270',
        description: 'A tea made from bergamot orange plant, its mild and aromatic.'
      },
      {
        name: 'Masala Chai',
        price: '₹270',
        description: 'Indian tea mix with aromatic spices.'
      }
    ],
    subsections: [
      {
        title: 'Iced Tea',
        items: [
          {
            name: 'Iced Tea Lemon',
            price: '₹310',
            description: 'Iced shaken tea with lemon and garnished with fresh mint leaves.'
          },
          {
            name: 'Iced Tea Peach',
            price: '₹350',
            description: 'Iced shaken tea with peach extract and served on the rocks.'
          },
          {
            name: 'Tropical Iced Tea',
            price: '₹350',
            description: 'Sweet and Tangy with pinch of spice in a Iced Tea.'
          },
          {
            name: 'Lavender Blue Pea Tea',
            price: '₹350',
            description: 'Lavender Iced Tea with freshly brewed Blue Pea Tea poured on top.'
          },
          {
            name: 'Hibiscus Sparkling Ice Tea',
            price: '₹310',
            description: 'Ice Tea brewed with original hibiscus flower topped with fizz.'
          },
          {
            name: 'Peach Earl Grey Iced Tea',
            price: '₹370',
            description: 'The goodness of bergamot herb infused delicately with peach.'
          }
        ]
      }
    ]
  },
  {
    id: 'cold-brew',
    number: '10',
    title: 'Cold Brew',
    shortTitle: 'Cold Brew',
    subtitle: 'Slow-steeped for 24 hours in darkness for velvet clarity.',
    items: [
      {
        name: 'Signature Cold Brew',
        price: '₹290',
        description: 'Granulated Coffee and Water soaked for 24 hours in dark and under cold refrigeration. Served in portions of glass on the rocks.'
      },
      {
        name: 'Cold Brew Lemonade',
        price: '₹330',
        description: 'Classic lemonade with poured over cold brew.'
      },
      {
        name: 'Honey Ginger Cold Brew',
        price: '₹350',
        description: 'Cold brew with honey and freshly squeezed ginger extract.'
      }
    ]
  },
  {
    id: 'addons',
    number: '11',
    title: 'Flavours & Add-Ons',
    shortTitle: 'Add-Ons',
    subtitle: 'Customise your cup with house syrups, extra shots, or alternative milks.',
    isAddonGrid: true,
    addonGroups: [
      {
        title: 'Flavours — ₹90',
        items: ['Hazelnut', 'Caramel', 'Irish', 'Coconut', 'Vanilla']
      },
      {
        title: 'Other add-ons — ₹90 each',
        items: ['Espresso Shot', 'Ice Cream Scoop (Chocolate / Vanilla)']
      },
      {
        title: 'Milk options',
        items: ['Soy Milk', 'Almond Milk', 'Lactose-Free Milk', 'Plant-Based Oats']
      }
    ]
  }
];
