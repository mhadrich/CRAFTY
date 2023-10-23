const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Order */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        dateOfDelivery,
        trackingNumber,
        deliveredProcessing,
        userId,
        items,
      } = req.body;
      const order = await prisma.order.create({
        data: {
          dateOfDelivery,
          trackingNumber,
          deliveredProcessing,
          userId,
          items: {
            create: [
              {
                item: {
                  connect: {
                    id: 1
                  }
                },
                quantity: 3
              },
              {
                item: {
                  connect: {
                    id: 3
                  }
                },
                quantity: 2
              }
            ]
          }
        },
        include: {
          items: true
        }
      });

      return res.status(201).json({ order });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Order" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};
 
/* Get Orders */
const GET = async (req, res) => {
  try {
    const Orders = await prisma.Order.findMany();
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
const GETByUserId = async (req, { params }) => {
  try {
    if (!params || !params.userId) {
      throw new Error("userId parameter is missing");
    }

    const { userId } = params;
    const Order = await prisma.order.findUnique({
      where: { userId },
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

module.exports = { POST, GET, GETById, GETByUserId, UPDATE, DELETE };
