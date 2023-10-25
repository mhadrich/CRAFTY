const bcrypt = require("bcrypt");
const prisma = require("./lib/prisma.js");
require("dotenv").config();

const createManyUsers = async (userArray) => {
  const usersToCreate = userArray.map((userData) => {
    const { role, name, lastName, businessName, email, dateOfBirth, password } =
      userData;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    return {
      role,
      name,
      lastName,
      businessName,
      email,
      dateOfBirth,
      password: hashedPassword,
    };
  });

  try {
    const createdUsers = await prisma.user.createMany({
      data: usersToCreate,
    });

    console.log({ message: "Users seeded successfully", Users: createdUsers });
  } catch (error) {
    console.error("Error creating users:", error);
  }
};

// CreateManyItems function
const CreateManyItems = async (items) => {
  var x = items.length - 1;

  try {
    for (let i = 0; i < x; i++) {
      const { name, description, price, userId, imageUrls, tagNames } =
        items[i];

      const createdItem = await prisma.item.create({
        data: {
          name,
          description,
          price,
          userId,
          images: {
            create: imageUrls.map((url) => ({ url })),
          },
          tags: {
            create: tagNames.map((tagName) => ({ tag: tagName })),
          },
        },
        include: {
          images: true,
          tags: true,
        },
      });
    }
    console.log({ message: "  Item seeded successfully ", count: x });
  } catch (err) {
    console.log("🚀 ~ file: seed.js:92 ~ err:", err);
  }
};
const createManyPaymentCards = async (cardsData) => {
  try {
    const createdPaymentCards = await prisma.paymentCard.createMany({
      data: cardsData.map((card) => ({
        userId: card.userId,
        CardHolder: card.name,
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate,
        cvv: card.cvv,
      })),
    });

    console.log({
      message: "Payment cards created successfully",
      paymentCards: createdPaymentCards,
    });
  } catch (error) {
    console.error("Error creating payment cards:", error);
  }
};
const CreateAdresses = async (Adress) => {
 
    try {
      const addressData = Adress 

      const createdAddresses = await prisma.adress.createMany({
        data: addressData.map((address) => {
          const { street, city, postalCode, userId } = address;
          return {
            street,
            city,
            postalCode,
            userId,
          };
        }),
      });
      console.log({
        message: "Articles seeded successfully",
        Addresses: createdAddresses,
      });
     
    } catch (error) {
      console.error("Error creating Adress:", error);
      
    }
 
};

const createManyArticles = async (articles) => {
  try {
    const createdArticles = await prisma.article.createMany({
      data: articles.map((article) => {
        const { title, description, coverImage, likes, userId } = article;
        return {
          title,
          description,
          coverImage,
          likes,
          userId,
        };
      }),
    });
    console.log({
      message: "Articles seeded successfully",
      articles: createdArticles,
    });
  } catch (error) {
    console.error("Error creating articles:", error);
  }
};
const Users = [
  {
    role: "user",
    name: "Alice",
    lastName: "Smith",
    businessName: "Alice's Crafts",
    email: "alice@example.com",
    password: "securepass1",
  },
  {
    role: "user",
    name: "Bob",
    lastName: "Johnson",
    businessName: "Bob's Creations",
    email: "bob@example.com",
    password: "securepass2",
  },
  {
    role: "user",
    name: "Charlie",
    lastName: "Brown",
    businessName: "Charlie's Artistry",
    email: "charlie@example.com",
    password: "securepass3",
  },
  {
    role: "user",
    name: "David",
    lastName: "Wilson",
    businessName: "David's Designs",
    email: "david@example.com",
    password: "securepass4",
  },
  {
    role: "user",
    name: "Eva",
    lastName: "Miller",
    businessName: "Eva's Handmade",
    email: "eva@example.com",
    password: "securepass5",
  },
  {
    role: "user",
    name: "Frank",
    lastName: "Martinez",
    businessName: "Frank's Artistry",
    email: "frank@example.com",
    password: "securepass6",
  },
  {
    role: "user",
    name: "Grace",
    lastName: "Clark",
    businessName: "Grace's Crafts",
    email: "grace@example.com",
    password: "securepass7",
  },
  {
    role: "user",
    name: "Hannah",
    lastName: "Lewis",
    businessName: "Hannah's Creations",
    email: "hannah@example.com",
    password: "securepass8",
  },
  {
    role: "user",
    name: "Isaac",
    lastName: "Hill",
    businessName: "Isaac's Designs",
    email: "isaac@example.com",
    password: "securepass9",
  },
  {
    role: "user",
    name: "Jack",
    lastName: "Wright",
    businessName: "Jack's Handmade",
    email: "jack@example.com",
    password: "securepass10",
  },
  {
    role: "crafter",
    name: "Oliver",
    lastName: "White",
    businessName: "Oliver's Masterpieces",
    email: "oliver@example.com",
    password: "securepass11",
  },
  {
    role: "crafter",
    name: "Lily",
    lastName: "Wilson",
    businessName: "Lily's Creations",
    email: "lily@example.com",
    password: "securepass12",
  },
  {
    role: "crafter",
    name: "William",
    lastName: "Davis",
    businessName: "William's Crafts",
    email: "william@example.com",
    password: "securepass13",
  },
  {
    role: "crafter",
    name: "Olivia",
    lastName: "Moore",
    businessName: "Olivia's Artistry",
    email: "olivia@example.com",
    password: "securepass14",
  },
  {
    role: "crafter",
    name: "James",
    lastName: "Johnson",
    businessName: "James' Designs",
    email: "james@example.com",
    password: "securepass15",
  },
  {
    role: "crafter",
    name: "Sophia",
    lastName: "Harris",
    businessName: "Sophia's Handmade",
    email: "sophia@example.com",
    password: "securepass16",
  },
  {
    role: "crafter",
    name: "Benjamin",
    lastName: "Walker",
    businessName: "Benjamin's Masterpieces",
    email: "benjamin@example.com",
    password: "securepass17",
  },
  {
    role: "crafter",
    name: "Emma",
    lastName: "Lopez",
    businessName: "Emma's Creations",
    email: "emma@example.com",
    password: "securepass18",
  },
  {
    role: "crafter",
    name: "Lucas",
    lastName: "Young",
    businessName: "Lucas' Crafts",
    email: "lucas@example.com",
    password: "securepass19",
  },
  {
    role: "crafter",
    name: "Ava",
    lastName: "Scott",
    businessName: "Ava's Artistry",
    email: "ava@example.com",
    password: "securepass20",
  },
];
const addressData = [
  {
    street: "123 Main St",
    city: "New York",
    postalCode: 10001,
    userId: 1,
  },
  {
    street: "456 Elm St",
    city: "Los Angeles",
    postalCode: 90001,
    userId: 2,
  },
  {
    street: "789 Oak St",
    city: "Chicago",
    postalCode: 60601,
    userId: 3,
  },
  {
    street: "321 Elm St",
    city: "San Francisco",
    postalCode: 94101,
    userId: 4,
  },
  {
    street: "555 Pine St",
    city: "Miami",
    postalCode: 33101,
    userId: 5,
  },
  {
    street: "987 Oak St",
    city: "Dallas",
    postalCode: 75201,
    userId: 6,
  },
  {
    street: "246 Elm St",
    city: "Houston",
    postalCode: 77001,
    userId: 7,
  },
  {
    street: "777 Main St",
    city: "Seattle",
    postalCode: 98101,
    userId: 8,
  },
  {
    street: "888 Oak St",
    city: "Boston",
    postalCode: 22101,
    userId: 9,
  },
  {
    street: "111 Elm St",
    city: "Denver",
    postalCode: 80201,
    userId: 10,
  },
  {
    street: "999 Pine St",
    city: "Phoenix",
    postalCode: 85001,
    userId: 11,
  },
  {
    street: "444 Main St",
    city: "Philadelphia",
    postalCode: 19101,
    userId: 12,
  },
  {
    street: "555 Oak St",
    city: "San Diego",
    postalCode: 92101,
    userId: 13,
  },
  {
    street: "222 Elm St",
    city: "Las Vegas",
    postalCode: 89101,
    userId: 14,
  },
  {
    street: "666 Pine St",
    city: "Atlanta",
    postalCode: 30301,
    userId: 15,
  },
  {
    street: "789 Main St",
    city: "Detroit",
    postalCode: 48201,
    userId: 16,
  },
  {
    street: "333 Oak St",
    city: "Minneapolis",
    postalCode: 55401,
    userId: 17,
  },
  {
    street: "123 Elm St",
    city: "New Orleans",
    postalCode: 70101,
    userId: 18,
  },
  {
    street: "888 Pine St",
    city: "Portland",
    postalCode: 97201,
    userId: 19,
  },
  {
    street: "555 Main St",
    city: "San Antonio",
    postalCode: 78201,
    userId: 20,
  },
];


const paymentCards = Users.map((user, index) => {
  const userId = index + 1; // User IDs start from 1
  return {
    userId,
    name: `${user.name} ${user.lastName}`,
    cardNumber: `1234${index + 1}5678${index + 1}1234${index + 1}5678`,
    expiryDate: `10/${25 + (index % 5)}`, // Expiry dates from 10/25 to 02/29
    cvv: `12${index + 1}`,
  };
});


const items = [
  {
    name: "Handmade Leather Wallet",
    description:
      "A high-quality handmade leather wallet with multiple card slots and a stylish design.",
    price: 35,
    imageUrls: [
      "https://i.etsystatic.com/33743076/r/il/36d721/3850507966/il_794xN.3850507966_nz2p.jpg",
      "https://i.etsystatic.com/33743076/r/il/36d721/3850507966/il_794xN.3850507966_nz2p.jpg",
    ],
    tagNames: ["Handmade", "Fashion", "Leather"],
    userId: 3,
  },
  {
    name: "Artisanal Wooden Coffee Table",
    description:
      "This artisanal wooden coffee table will add warmth and character to your living room. Crafted with love and attention to detail.",
    price: 250,
    imageUrls: [
      "https://i.etsystatic.com/31651949/r/il/338bd2/4762845339/il_794xN.4762845339_cjwq.jpg",
      "https://i.etsystatic.com/31651949/r/il/7205e5/4714597888/il_794xN.4714597888_b1ep.jpg",
    ],
    tagNames: ["Furniture", "Handmade", "Wood"],
    userId: 4,
  },
  {
    name: "Handcrafted Leather Backpack",
    description:
      "A stylish and durable leather backpack for all your adventures. Multiple compartments and comfortable straps.",
    price: 85,
    imageUrls: [
      "https://i.etsystatic.com/10840798/r/il/199be4/2274981547/il_794xN.2274981547_qmsf.jpg",
      "https://i.etsystatic.com/10840798/r/il/e8d8f5/2247941205/il_794xN.2247941205_djf1.jpg",
    ],
    tagNames: ["Handmade", "Fashion", "Leather"],
    userId: 5,
  },
  {
    name: "Handmade Ceramic Vase",
    description:
      "Elevate your home decor with this beautiful handmade ceramic vase. Perfect for flowers or as a standalone piece.",
    price: 40,
    imageUrls: [
      "https://i.etsystatic.com/13346155/r/il/858e00/5080130415/il_794xN.5080130415_qb0m.jpg",
      "https://i.etsystatic.com/13346155/r/il/0606d0/4684140243/il_794xN.4684140243_tmkz.jpg",
    ],
    tagNames: ["Handmade", "Home Decor", "Ceramic"],
    userId: 2,
  },
  {
    name: "Mountain Lines Panel",
    description:
      "Mountain With Lines Panel Set of 2-3 Wood Wall Art Decor Wooden Nursery Sign Picture Living Room.\nThis product is a square abstract wooden wall decor.\nIt can be produced in black color or wenge, walnut, oak, maple wooden colors according to your request.It is produced with solid and wooden colors painted on both sides.\n",
    price: 30,
    imageUrls: [
      "https://i.etsystatic.com/26931130/r/il/bcc9a4/3288056379/il_1588xN.3288056379_37zf.jpg",
      "https://i.etsystatic.com/26931130/r/il/4bcf21/4052888259/il_1588xN.4052888259_96tx.jpg",
      "https://i.etsystatic.com/26931130/r/il/31f3c1/3099696658/il_1588xN.3099696658_8mv8.jpg",
      "https://i.etsystatic.com/26931130/r/il/21f111/5410425332/il_1588xN.5410425332_aqcw.jpg"
    ],
    tagNames: ["Handmade", "Home Decor", "Wood"],
    userId: 2,
  },
  {
    name: "Birth Flower Necklace",
    description:
      "Birth Flower Necklace • Silver Birthstone Necklace • Custom Necklace • Custom Flower Necklace • Personalized Flower Necklace • Dainty\n❝ Best unique gift alternative, Birth Flower Necklace ♡ The easiest way to show your ‘LOVE’ to yourself and your loved ones ❞\n⋆ Do you like this item? You can get more information about it below but if you have any questions, just click the Message button and I will be very happy to hear from you ☺",
    price: 24,
    imageUrls: [
      "https://i.etsystatic.com/12654619/r/il/09a2dc/3118863022/il_794xN.3118863022_912u.jpg",
      "https://i.etsystatic.com/12654619/r/il/f3e22c/3037024665/il_794xN.3037024665_67zv.jpg",
      "https://i.etsystatic.com/12654619/r/il/9c63de/2697415423/il_794xN.2697415423_mrow.jpg",
    ],
    tagNames: ["Handmade", "Jewelery", "Silver"],
    userId: 2,
  },
  {
    name: "Nothern Lights",
    description:
      "Inside this resin pendant you can find a picturesque landscape with tiny mountains, set in front of a colorful display of iridescent green and blue colors that look very much like real northern lights.\nA complex fusion of rare wood, crystal clear resin and synthetic opal, this unique necklace could make for a perfect fifth anniversary gift for her.\nThe opal is a very large and rare kind of synthetic opal, which changes color from a soft to a vivid green/blue and was specifically designed to look like an Aurora. The color changes depending on angle of view and light source. The display of dancing colors gets more intense in direct light.",
    price: 95,
    imageUrls: [
      "https://i.etsystatic.com/12328946/r/il/c0a1f7/5172983115/il_794xN.5172983115_krb2.jpg",
      "https://i.etsystatic.com/12328946/r/il/5e16f5/4005536459/il_794xN.4005536459_yfl1.jpg",
      "https://i.etsystatic.com/12328946/r/il/9ebc9e/1523249813/il_794xN.1523249813_efmz.jpg",
      "https://i.etsystatic.com/12328946/r/il/35e90d/3366447807/il_794xN.3366447807_o6ah.jpg",
    ],
    tagNames: ["Handmade", "Jewelery", "Wood"],
    userId: 2,
  },
  
];
const articles = [
  {
    title: "The Art of Origami",
    description:
      "Origami, the traditional Japanese art of paper folding, is a craft that transforms a simple sheet of paper into intricate and stunning sculptures. Originating from Japan, this art form has captured the hearts of craft enthusiasts worldwide. The magic of origami lies in its simplicity and complexity, offering endless creative possibilities with just a square piece of paper. Artists master the techniques of folding, crimping, and sculpting to create delicate animals, intricate geometric designs, and more. Origami's appeal extends from beginner to expert, offering a unique sense of achievement with each completed piece. This article explores the history, techniques, and the beauty of origami, providing insights into the captivating world of crafting artistry with a single sheet of paper.",
    coverImage: "https://i.ytimg.com/vi/FmNIMUsuBNQ/maxresdefault.jpg",
    likes: 90,
    userId: 2,
  },
  {
    title: "Crafting with Beads",
    description:
      "Bead crafting is a versatile and vibrant craft that allows artists to create stunning jewelry, home decor, and more. This craft involves using an array of beads, including glass, acrylic, wood, and gemstone beads, to design unique and eye-catching pieces. The art of bead crafting enables crafters to explore their creativity by arranging colorful beads into intricate patterns, whether it's a beaded necklace, a beaded curtain, or a beaded tapestry. Bead crafting offers endless possibilities for personal expression and can be both relaxing and fulfilling. Dive into the world of bead crafting to discover the beauty and artistry of working with these tiny treasures to create exquisite handcrafted items.",
    coverImage:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f4836f1aff6874d6fe020a75b79717d4.jpg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp",
    likes: 85,
    userId: 2,
  },
  {
    title: "The Art of Woodturning",
    description:
      "Woodturning is a timeless craft that transforms raw wood into elegant and functional objects. Using a lathe, skilled woodturners shape and sculpt wood into items like bowls, vases, pens, and more. This craft combines the beauty of woodworking with the precision and artistry of turning wood on a lathe. Woodturners carefully select wood types, grains, and finishes to bring out the natural beauty of the material. The process of woodturning requires both skill and creativity, allowing artisans to craft unique and functional items. This article delves into the world of woodturning, exploring the tools, techniques, and the sheer joy of crafting elegance from a block of wood.",
    coverImage:
      "https://images.squarespace-cdn.com/content/v1/5263da08e4b0b68d00ba1ec4/27192bbc-6f24-43c0-a8ff-6a64099218a9/Midmod%2BCandlesticks.png",
    likes: 75,
    userId: 3,
  },
  {
    title: "The Ultimate Gift Guide for Pets",
    description:
      "Pets are more than just animals; they are beloved members of the family. Their unconditional love, loyalty, and endless companionship make them deserving of special treats and surprises. This holiday season, why not spoil your four-legged companions with thoughtful and exciting gifts that will make tails wag and purrs rumble? To help you find the perfect presents for your pets, we've put together the ultimate gift guide for pets.\nEvery pet loves a new toy to keep them entertained. For dogs, consider interactive toys like puzzle feeders or durable chew toys. Cats, on the other hand, adore feather wands, laser pointers, and crinkly tunnels. Birds will enjoy colorful hanging toys, while small mammals such as hamsters or guinea pigs would appreciate exercise balls and tunnels.\nTreats are a universal way to express your love for your pets. There's a wide variety of options, from gourmet dog biscuits to organic catnip treats. Be sure to choose treats that align with your pet's dietary needs and preferences.\nDressing your pet in cute or functional outfits can be a fun way to show them some love. Consider cozy sweaters for dogs during the colder months or adorable costumes for a bit of fun. Cats might appreciate a stylish collar, while small pets like rabbits can stay warm with snugly hutch covers.\nComfort is key for pets. Offer your furry friend a plush bed, blankets, or cozy hideaways. Cats adore warm, enclosed spaces like heated beds or covered cat hammocks. Dogs may love orthopedic beds to support their joints, while rabbits will enjoy soft, cushioned flooring in their play areas.\nGrooming is an essential part of pet care, and the right grooming tools can make it a more enjoyable experience for both you and your pet. Gift your dog or cat a high-quality brush or grooming kit to keep their fur in tip-top shape. For smaller pets, look for specialized grooming tools such as small animal combs.\nHealth is wealth, even for pets. Consider investing in pet health products such as dental chews for dogs, joint supplements for senior pets, or calming aids for anxious pets. It's a practical way to show your love by keeping them happy and healthy.\nPersonalized gifts always hold a special place in our hearts. Customized pet tags, embroidered blankets, or pet portrait paintings can make your pet feel truly cherished.\nThis gift guide for pets is your roadmap to selecting the perfect presents for your beloved animal companions. Remember, it's not just about the gifts themselves; it's about the joy, comfort, and love they bring into your pet's life. As you celebrate the holidays, make sure to include your pets in the festivities by pampering them with these thoughtful and fun gifts. After all, a happy pet is a happy home.",
    coverImage:
      "https://img.freepik.com/premium-photo/studio-shot-happy-smiling-golden-retriever-dog-with-yellow-background-eye-that-blinks_410516-21689.jpg",
    likes: 1075,
    userId: 2,
  },
];
const seed = async () => {

  await createManyUsers(Users);
  await CreateManyItems(items);
  await createManyArticles(articles);
 await CreateAdresses(addressData) ;
 await createManyPaymentCards(paymentCards) ;
};

seed();
// 
