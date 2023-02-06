const { sign, verify } = require("jsonwebtoken");

const createOrgToken = (org) => {
  const token = sign({ id: org._id, name: org.name, email: org.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
  return token;
};

const createToken = (user) => {
  const token = sign({ user: user }, process.env.SECRET_KEY, {
    expiresIn: "15h",
  });
  return token;
};

const validateToken = (req, res, next) => {
  try {
    const token = req.cookies['org_token'];
    // console.log(token);
    if (token) {
      // console.log(token);
      const valid = verify(token, process.env.SECRET_KEY);
      if (valid) {
        // req.authenticated = true;
        req.body.token = { valid };
        next();
      } else {
        return res
          .json(403)
          .json({ msg: "Your token is invalid or experied " });
      }
    } else {
      return res.status(403).json("You are not authenticated");
    }
  } catch (err) {
    return res.status(400).json({ err: `An Error Occured: ${err}` });
  }
};

module.exports = { createOrgToken, createToken, validateToken };
