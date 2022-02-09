const jwt = require("jsonwebtoken");
const JWT_KEY ="abcde123";
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_KEY, {
    expiresIn: "15d",
  });
};
module.exports = generateToken;
