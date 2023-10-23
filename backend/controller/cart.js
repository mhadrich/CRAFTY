const prisma = require("../lib/prisma.js");
require("dotenv").config();



const addToCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;

        const userCart = await prisma.cart.findFirst({
            where: {
                userId,
            },
        });

        if (userCart) {

            const existingCartItem = await prisma.cartItem.findFirst({
                where: {
                    cartId: userCart.id,
                    itemId,
                },
            });

            if (existingCartItem) {
                // If the item is already in the cart, update the quantity
                await prisma.cartItem.update({
                    where: {
                        id: existingCartItem.id,
                    },
                    data: {
                        quantity: existingCartItem.quantity + quantity,
                    },
                });
            } else {

                await prisma.cartItem.create({
                    data: {
                      quantity,
                      cart: {
                        connect: {
                          id: userCart.id,
                        },
                      },
                      item: {
                        connect: {
                          id: itemId, 
                        },
                      },
                    },
                  })
            }
        } else {

            const cart = await prisma.cart.create({
                data: {
                    userId,
                    items: {
                        create: [
                            {
                                quantity,
                                itemId,
                            },
                        ],
                    },
                },
            });
        }

        res.status(200).json({ message: 'Item added to the cart successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getCart = async (req, res) => {
    
    const userId = parseInt(req.params.userId, 10)
    console.log("🚀 ~ file: cart.js:73 ~ getCart ~ userId:", userId)
    
    try {
        
        console.log("🚀 ~ file: cart.js:73 ~ getCart ~ userId:", userId)

        const userCart = await prisma.cart.findFirst({
            where: {
                userId:userId,
            },
            include: {
                items: {
                    include: {
                        item: true,
                    },
                },
            },
        });
        console.log("🚀 ~ file: cart.js:84 ~ getCart ~ userCart:", userCart)
  
        if (userCart) {
            res.status(200).json({ cart: userCart });
        } else {
            res.status(404).json({ message: 'Cart not found for the user' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addToCart, getCart  };


