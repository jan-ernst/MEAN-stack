const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // extracting the token from http header
  try {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "this_should_be_a_long_secret");
  req.userData = {email: decodedToken.email, userId: decodedToken.userId };
  next();

  } catch (error) {
    res.status(401).json({
      message: "Auth failed"
    });
  }
};
