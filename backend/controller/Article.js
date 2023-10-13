const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Article */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        status,
        title,
        tags,
        description,
        coverImage,
        likes,
        userId,
      } = req.body;
      const Article = await prisma.Article.create({
        data: {
          status,
          title,
          tags,
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
    const Articles = await prisma.Article.findMany();
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
/*UPDATE Article*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedArticle = await prisma.Article.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedArticle));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Article", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Article */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Article.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Article deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Article", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
