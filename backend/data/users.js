import bcrypt from "bcryptjs";

const users = [
  {
    name: "Seller",
    email: "seller@seller.com",
    password: bcrypt.hashSync ("12345678", 10),
    isSeller: true,
  },
  {
    name: "User",
    email: "user@user.com",
    password: bcrypt.hashSync ("12345678", 10),
  },

];

export default users;