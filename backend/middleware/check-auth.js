const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // extracting the token from http header
  try {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "this_should_be_a_long_secret");
  next();

  } catch (error) {
    res.status(401).json({
      message: "Auth failed"
    });
  }
};
