const bcrypt = require( "bcrypt");
const prisma = require ("./lib/prisma.js")
require("dotenv").config()




const createManyUsers = async (userArray) => {
    const usersToCreate = userArray.map((userData) => {
        const {
            role,
            name,
            lastName,
            businessName,
            email,
            dateOfBirth,
            password,
        } = userData;

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
  var x =items.length-1;


    try {
      for (let i=0 ;i<x; i++) {
        const { name, description, price, userId, imageUrls, tagNames } = items[i];
      
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
      console.log({ message: "  Item seeded successfully ", count :x});


      }catch (err) {
        console.log("🚀 ~ file: seed.js:92 ~ err:", err)
        
      }}


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
        console.log({ message: "Articles seeded successfully", articles: createdArticles });
    } catch (error) {
        console.error("Error creating articles:", error);
    }
};
  const Users = [
    {
        "role": "user",
        "name": "Alice",
        "lastName": "Smith",
        "businessName": "Alice's Crafts",
        "email": "alice@example.com",
        "password": "securepass1",
    },
    {
        "role": "user",
        "name": "Bob",
        "lastName": "Johnson",
        "businessName": "Bob's Creations",
        "email": "bob@example.com",
        "password": "securepass2",
    },
    {
        "role": "user",
        "name": "Charlie",
        "lastName": "Brown",
        "businessName": "Charlie's Artistry",
        "email": "charlie@example.com",
        "password": "securepass3",
    },
    {
        "role": "user",
        "name": "David",
        "lastName": "Wilson",
        "businessName": "David's Designs",
        "email": "david@example.com",
        "password": "securepass4",
    },
    {
        "role": "user",
        "name": "Eva",
        "lastName": "Miller",
        "businessName": "Eva's Handmade",
        "email": "eva@example.com",
        "password": "securepass5",
    },
    {
        "role": "user",
        "name": "Frank",
        "lastName": "Martinez",
        "businessName": "Frank's Artistry",
        "email": "frank@example.com",
        "password": "securepass6",
    },
    {
        "role": "user",
        "name": "Grace",
        "lastName": "Clark",
        "businessName": "Grace's Crafts",
        "email": "grace@example.com",
        "password": "securepass7",
    },
    {
        "role": "user",
        "name": "Hannah",
        "lastName": "Lewis",
        "businessName": "Hannah's Creations",
        "email": "hannah@example.com",
        "password": "securepass8",
    },
    {
        "role": "user",
        "name": "Isaac",
        "lastName": "Hill",
        "businessName": "Isaac's Designs",
        "email": "isaac@example.com",
        "password": "securepass9",
    },
    {
        "role": "user",
        "name": "Jack",
        "lastName": "Wright",
        "businessName": "Jack's Handmade",
        "email": "jack@example.com",
        "password": "securepass10",
    },
    {
        "role": "crafter",
        "name": "Oliver",
        "lastName": "White",
        "businessName": "Oliver's Masterpieces",
        "email": "oliver@example.com",
        "password": "securepass11",
    },
    {
        "role": "crafter",
        "name": "Lily",
        "lastName": "Wilson",
        "businessName": "Lily's Creations",
        "email": "lily@example.com",
        "password": "securepass12",
    },
    {
        "role": "crafter",
        "name": "William",
        "lastName": "Davis",
        "businessName": "William's Crafts",
        "email": "william@example.com",
        "password": "securepass13",
    },
    {
        "role": "crafter",
        "name": "Olivia",
        "lastName": "Moore",
        "businessName": "Olivia's Artistry",
        "email": "olivia@example.com",
        "password": "securepass14",
    },
    {
        "role": "crafter",
        "name": "James",
        "lastName": "Johnson",
        "businessName": "James' Designs",
        "email": "james@example.com",
        "password": "securepass15",
    },
    {
        "role": "crafter",
        "name": "Sophia",
        "lastName": "Harris",
        "businessName": "Sophia's Handmade",
        "email": "sophia@example.com",
        "password": "securepass16",
    },
    {
        "role": "crafter",
        "name": "Benjamin",
        "lastName": "Walker",
        "businessName": "Benjamin's Masterpieces",
        "email": "benjamin@example.com",
        "password": "securepass17",
    },
    {
        "role": "crafter",
        "name": "Emma",
        "lastName": "Lopez",
        "businessName": "Emma's Creations",
        "email": "emma@example.com",
        "password": "securepass18",
    },
    {
        "role": "crafter",
        "name": "Lucas",
        "lastName": "Young",
        "businessName": "Lucas' Crafts",
        "email": "lucas@example.com",
        "password": "securepass19",
    },
    {
        "role": "crafter",
        "name": "Ava",
        "lastName": "Scott",
        "businessName": "Ava's Artistry",
        "email": "ava@example.com",
        "password": "securepass20",
    }
];

const items = [
    {
        "name": "Handmade Leather Wallet",
        "description": "A high-quality handmade leather wallet with multiple card slots and a stylish design.",
        "price": 35,
        "imageUrls": [
            "https://i.etsystatic.com/33743076/r/il/36d721/3850507966/il_794xN.3850507966_nz2p.jpg",
            "https://i.etsystatic.com/33743076/r/il/36d721/3850507966/il_794xN.3850507966_nz2p.jpg"
        ],
        "tagNames": ["Handmade", "Fashion"],
        "userId": 3
    },
    {
        "name": "Artisanal Wooden Coffee Table",
        "description": "This artisanal wooden coffee table will add warmth and character to your living room. Crafted with love and attention to detail.",
        "price": 250,
        "imageUrls": [
            "https://i.etsystatic.com/31651949/r/il/338bd2/4762845339/il_794xN.4762845339_cjwq.jpg",
            "https://i.etsystatic.com/31651949/r/il/7205e5/4714597888/il_794xN.4714597888_b1ep.jpg"
        ],
        "tagNames": ["Furniture", "Handmade"],
        "userId": 4
    },
    {
        "name": "Handcrafted Leather Backpack",
        "description": "A stylish and durable leather backpack for all your adventures. Multiple compartments and comfortable straps.",
        "price": 85,
        "imageUrls": [
            "https://i.etsystatic.com/10840798/r/il/199be4/2274981547/il_794xN.2274981547_qmsf.jpg",
            "https://i.etsystatic.com/10840798/r/il/e8d8f5/2247941205/il_794xN.2247941205_djf1.jpg"
        ],
        "tagNames": ["Handmade", "Fashion"],
        "userId": 5
    },
    {
        "name": "Handmade Ceramic Vase",
        "description": "Elevate your home decor with this beautiful handmade ceramic vase. Perfect for flowers or as a standalone piece.",
        "price": 40,
        "imageUrls": [
            "https://i.etsystatic.com/13346155/r/il/858e00/5080130415/il_794xN.5080130415_qb0m.jpg",
            "https://i.etsystatic.com/13346155/r/il/0606d0/4684140243/il_794xN.4684140243_tmkz.jpg"
        ],
        "tagNames": ["Handmade", "Home Decor"],
        "userId": 2
    },
   

]
const articles = [
    {
        "title": "The Art of Origami: Crafting Beauty from a Single Sheet of Paper",
        "description": "Origami, the traditional Japanese art of paper folding, is a craft that transforms a simple sheet of paper into intricate and stunning sculptures. Originating from Japan, this art form has captured the hearts of craft enthusiasts worldwide. The magic of origami lies in its simplicity and complexity, offering endless creative possibilities with just a square piece of paper. Artists master the techniques of folding, crimping, and sculpting to create delicate animals, intricate geometric designs, and more. Origami's appeal extends from beginner to expert, offering a unique sense of achievement with each completed piece. This article explores the history, techniques, and the beauty of origami, providing insights into the captivating world of crafting artistry with a single sheet of paper.",
        "coverImage": "https://i.ytimg.com/vi/FmNIMUsuBNQ/maxresdefault.jpg",
        "likes": 90,
        "userId": 2,
        
    },
    {
        "title": "Crafting with Beads: From Jewelry to Home Decor",
        "description": "Bead crafting is a versatile and vibrant craft that allows artists to create stunning jewelry, home decor, and more. This craft involves using an array of beads, including glass, acrylic, wood, and gemstone beads, to design unique and eye-catching pieces. The art of bead crafting enables crafters to explore their creativity by arranging colorful beads into intricate patterns, whether it's a beaded necklace, a beaded curtain, or a beaded tapestry. Bead crafting offers endless possibilities for personal expression and can be both relaxing and fulfilling. Dive into the world of bead crafting to discover the beauty and artistry of working with these tiny treasures to create exquisite handcrafted items.",
        "coverImage": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f4836f1aff6874d6fe020a75b79717d4.jpg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp",
        "likes": 85,
        "userId": 2,
        
    },
    {
        "title": "The Art of Woodturning: Crafting Elegance on a Lathe",
        "description": "Woodturning is a timeless craft that transforms raw wood into elegant and functional objects. Using a lathe, skilled woodturners shape and sculpt wood into items like bowls, vases, pens, and more. This craft combines the beauty of woodworking with the precision and artistry of turning wood on a lathe. Woodturners carefully select wood types, grains, and finishes to bring out the natural beauty of the material. The process of woodturning requires both skill and creativity, allowing artisans to craft unique and functional items. This article delves into the world of woodturning, exploring the tools, techniques, and the sheer joy of crafting elegance from a block of wood.",
        "coverImage": "https://images.squarespace-cdn.com/content/v1/5263da08e4b0b68d00ba1ec4/27192bbc-6f24-43c0-a8ff-6a64099218a9/Midmod%2BCandlesticks.png",
        "likes": 75,
        "userId": 3,
        
    }
      
];
 const  seed = async() =>{ 
    await createManyUsers( Users)
   await  CreateManyItems(items)
   await createManyArticles(articles)  }
    
      seed()

 