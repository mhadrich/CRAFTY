const prisma = require("../lib/prisma.js");
require("dotenv").config();







const  calculateCartTotal = async(cartId) => {
  try {
    
    const cartItems = await prisma.cartItem.findMany({
      where: {
        cartId:cartId,
      },
      include: {
        item: {
          select: {
            price: true,
          },
        },
      },
    });

   
    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.quantity * cartItem.item.price;
    }

    return total;
  } catch (error) {
    
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
const POST = async (req, res) => {
  try {
    
    const cardId = req.body.cardId;
    const userId = req.body.userId;
    const userCart = await prisma.cart.findFirst({
      where: {
          userId:userId,
      },
      include: {
          items: {
              include: {
                  item:{ 
                      include : {images :true}
                  },
              },
          },
      },
  });
    const amount = await calculateCartTotal(userCart.id)
   
    const addressId = req.body.addressId;

    const orderDetails = {
      dateOfDelivery: req.body.dateOfDelivery,
      trackingNumber: req.body.trackingNumber,
      deliveredProcessing: req.body.deliveredProcessing,
    };

    const newOrder = await prisma.order.create({
      data: {
        userId,
        addressId,
        ...orderDetails,
        payments: {
          create: {
            amount,
            paymentDate: new Date(),
            paymentCard: {
              connect: {
                id: cardId,
              },
            },
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
      },
      include: {
        payments: true,
      },
    });

    const cartItems = await prisma.cartItem.findMany({
      where: {
        cartId:userCart.id,
      },
    });

    for (const cartItem of cartItems) {
      await prisma.orderItem.create({
        data: {
          orderId: newOrder.id,
          itemId: cartItem.itemId,
          quantity: cartItem.quantity,
        },
      });
    }

    await prisma.cartItem.deleteMany({
      where: {
        cartId:userCart.id,
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ error: 'An error occurred while adding the order'  ,mes:error});
  } 
}



 
/* Get Orders */
const GET = async (req, res) => {
  try {
    const Orders = await prisma.order.findMany();
    return res.status(200).json(Orders);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Orders", error: message });
  }
};
/*GET Article By UserID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.Id) {
      throw new Error("userId parameter is missing");
    }
    const { Id } = params;
    const Order = await prisma.order.findUnique({
      where: { id: Id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Order));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Order", error: message }),
      { status: 500 }
    );
  }
};
/*GET Article By UserID */
const GETByUserId = async (req, res) => {
  try {
    const userId = req.params.userId; // Use req.params to get the userId from the URL parameters

    if (!userId) {
      throw new Error("userId parameter is missing");
    }

    const orders = await prisma.order.findMany({
      where: { userId: Number(userId) }, // Convert userId to a number if needed
      include: {
        address: true, // Include the address details
        payments: true, // Include payment details
        items : true
    },
    });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "Orders not found" });
    }

    return res.status(200).json(orders);
  } catch (error) {
    console.log("🚀 ~ file: Order.js:177 ~ GETByUserId ~ error:", error)
    
    return res.status(500).json({ message: "Error fetching orders", error:error});
  }
};
/*UPDATE Order*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedOrder = await prisma.Order.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedOrder));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Order", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Order */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Order.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Order deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Order", error: message }),
      { status: 500 }
    );
  }
};


module.exports = { POST, GET, GETById, GETByUserId, UPDATE, DELETE ,calculateCartTotal};
