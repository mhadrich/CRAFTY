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
const GETById = async (req, res) => {

  try {
    const userId = parseInt(req.params.userId);

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const favoriteItems = await prisma.favouriteItem.findMany({
      where: {
        userId: userId,
      },
      include: {
        item: {
          include: {
            images: true,
          },
        },
      }
    });

    return res.status(200).json(favoriteItems);
  } catch (error) {

    console.error(error);
    return res.status(500).json({ error: "Error fetching favorite items by user ID" });
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
const DELETE = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {  
      
      return res.status(400).json({ error: "ID parameter is missing" });
    }
    

    await prisma.favouriteItem.delete({
      where: { id: id*1 },
    });

    return res.status(200).json({ message: "FavouriteItem deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error deleting FavouriteItem" });
  }
};

// Example usage in a route handler:
// app.delete('/favoriteItems/:id', DELETE);


module.exports = { POST, GET, GETById, UPDATE, DELETE };
