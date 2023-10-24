const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Article */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { title, description, coverImage, likes, userId, image } = req.body;
      const Article = await prisma.article.create({
        data: {
          images: {
            create: image,
          },
          title,

          description,
          coverImage,
          likes,
          userId,
        },
      });

      return res.status(201).json({ Article });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Article" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Articles */
const GET = async (req, res) => {
  try {
    const Articles = await prisma.Article.findMany({ include: { user: true } });
    return res.status(200).json(Articles);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Articles", error: message });
  }
};

/*GET Article By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Article = await prisma.Article.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Article not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Article));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Article", error: message }),
      { status: 500 }
    );
  }
};

/*GET Article By UserId */
const GETByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "id parameter is missing" });
    }

    const userId = parseInt(id);

    const article = await prisma.article.findMany({
      where: {
        userId: userId,
      },
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.status(200).json(article);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error fetching article by Userid", error: message });
  }
};



/*UPDATE Article*/
const UPDATE = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("ID parameter is missing");
    }

    const { status, title, description, coverImage, userId } = req.body;

    const updateData = {};
    if (status) {
      updateData.status = status;
    }
    if (title) {
      updateData.title = title;
    }
    if (description) {
      updateData.description = description;
    }
    if (coverImage) {
      updateData.coverImage = coverImage;
    }
    if (userId) {
      updateData.userId = userId;
    }

    const updatedUser = await prisma.article.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error updating article", error: message });
  }
};
/*DELETE Article */
const DELETE = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("ID parameter is missing");
    }
    await prisma.article.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "article deleted successfully" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error deleting User", error: message });
  }
};

module.exports = { POST, GET, GETById, GETByUserId, UPDATE, DELETE };
