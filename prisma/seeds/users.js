const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const seedUsers = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        username: "Ash",
        email: "ash@pikadex.io",
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: "https://archives.bulbagarden.net/media/upload/thumb/c/cd/Ash_JN.png/300px-Ash_JN.png"
      },
      {
        username: "Brock",
        email: "brock@pikadex.io",
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: "https://archives.bulbagarden.net/media/upload/6/6a/Brock_SM.png"
      },
      {
        username: "Misty",
        email: "misty@pikadex.io",
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: "https://archives.bulbagarden.net/media/upload/f/fb/Misty_SM.png"
      }
    ]
  })
}

module.exports = seedUsers;