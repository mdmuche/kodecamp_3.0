require("dotenv").config();
const jwt = require("jsonwebtoken");

const isUserLoggedIn = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).send("no-authorization-header");
    return;
  }

  const val = authorization.split(" ");

  const tokenType = val[0];

  const tokenValue = val[1];

  if (tokenType == "Bearer") {
    const decoded = jwt.verify(tokenValue, process.env.secret);
    req.decoded = decoded;
    next();
    return;
  }

  res.status(401).send("not-authorized");
};

function adminsOnly(req, res, next) {
  if (req.decoded.role == "admin") {
    next();
  } else {
    res.status(401).send("you are not an admin");
  }
}

module.exports = {
  isUserLoggedIn,
  adminsOnly,
};
