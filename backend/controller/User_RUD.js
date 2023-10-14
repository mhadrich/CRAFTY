const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Get Users */
const GET = async (req, res) => {
  try {
    const Users = await prisma.User.findMany();
    return res.status(200).json(Users);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Users", error: message });
  }
};

// Get user by email
const GETBYEMAIL = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ error: "Email parameter is missing" });
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error fetching user by email", error: message });
  }
};

/*UPDATE User*/

const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;
    let hashedPassword;
    if (body.password) {
      hashedPassword = await hash(body.password, 12);
    }

    const updateData = { ...body };
    if (hashedPassword) {
      updateData.password = hashedPassword;
    } else {
      delete updateData.password;
    }
    console.log(updateData);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedUser));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating user", error: message }),
      { status: 500 }
    );
  }
};

/*DELETE User */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.user.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "User deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting User", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { GET, GETBYEMAIL, UPDATE, DELETE };
