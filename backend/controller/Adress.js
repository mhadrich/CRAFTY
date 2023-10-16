const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Adress */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { street, city, postalCode, userId } = req.body;
      const Adress = await prisma.Adress.create({
        data: {
          street,
          city,
          postalCode,
          userId,
        },
      });

      return res.status(201).json({ Adress });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Adress" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Adresss */
const GET = async (req, res) => {
  try {
    const Adresss = await prisma.Adress.findMany();
    return res.status(200).json(Adresss);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Adresss", error: message });
  }
};

/*GET adress by id*/
const GETBYID = async (req, { params }) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: "userId parameter is missing" });
    }
    const adress = await prisma.adress.findFirst({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(adress);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error fetching adress by user id", error: message });
  }
};

/*UPDATE Adress*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedAdress = await prisma.Adress.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedAdress));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Adress", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Adress */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Adress.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Adress deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Adress", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETBYID, UPDATE, DELETE };
