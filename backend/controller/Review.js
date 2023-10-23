const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Review */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { date, rating, description, images, userId, itemId } = req.body;
      const Review = await prisma.review.create({
        data: {
          date,
          rating,
          description,  
          images: {
            create: images.map((url) => ( {url} )),
          } ,
          userId,
          itemId,
        },
        include: {
          images: true,
          
        },
      }); 

      return res.status(201).json({ Review });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Review" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Reviews */
const GET = async (req, res) => {
  try {
    const Reviews = await prisma.Review.findMany();
    return res.status(200).json(Reviews);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Reviews", error: message });
  }
};

/*GET Review By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Review = await prisma.Review.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Review not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Review));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Review", error: message }),
      { status: 500 }
    );
  }
};
/*GET Review By UserId */
const GETByUserId = async (req, { params }) => {
  try {
    if (!params || !params.userId) {
      throw new Error("userId parameter is missing");
    }

    const { userId } = params;
    const Review = await prisma.Review.findUnique({
      where: { userId },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Review not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Review));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Review", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Review*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();
    const { id } = params;
    const updateData = { ...body };
    const updatedReview = await prisma.Review.update({
      where: { id },
      data: updateData,
    });
    return new Response(JSON.stringify(updatedReview));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Review", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Review */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Review.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Review deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Review", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, GETByUserId, UPDATE, DELETE };
