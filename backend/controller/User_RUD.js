const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Get Users */
const GET = async (req, res) => {
  try {
    const Users = await prisma.user.findMany();
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

/*GET User by id*/
const GETBYID = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "id parameter is missing" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error fetching user by id", error: message });
  }
};

/*UPDATE User*/

const UPDATE = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("ID parameter is missing");
    }

    const { role, name, lastName, email } = req.body;

    const updateData = {};
    if (role) {
      updateData.role = role;
    }
    if (name) {
      updateData.name = name;
    }
    if (lastName) {
      updateData.lastName = lastName;
    }
    if (email) {
      updateData.email = email;
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error updating user", error: message });
  }
};

/*DELETE User */
const DELETE = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("ID parameter is missing");
    }

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .json({ message: "Error deleting User", error: message });
  }
};

module.exports = { GET, GETBYEMAIL, GETBYID, UPDATE, DELETE };
