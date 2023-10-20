const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create FAVOURITE ITEM */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { userId, itemId } = req.body;
      const FavouriteItem = await prisma.favouriteItem.create({
        data: {
          userId,
          itemId,
        },
      });

      return res.status(201).json({ FavouriteItem });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create FavouriteItem" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get FavouriteItems */
const GET = async (req, res) => {
  try {
    const FavouriteItems = await prisma.favouriteItem.findMany();
    return res.status(200).json(FavouriteItems);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching FavouriteItems", error: message });
  }
};

/*GET FavouriteItem By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const FavouriteItem = await prisma.favouriteItem.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "FavouriteItem not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(FavouriteItem));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error fetching FavouriteItem",
        error: message,
      }),
      { status: 500 }
    );
  }
};
/*UPDATE FavouriteItem*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedFavouriteItem = await prisma.FavouriteItem.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedFavouriteItem));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error updating FavouriteItem",
        error: message,
      }),
      { status: 500 }
    );
  }
};
/*DELETE FavouriteItem */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.favouriteItem.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "FavouriteItem deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error deleting FavouriteItem",
        error: message,
      }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
