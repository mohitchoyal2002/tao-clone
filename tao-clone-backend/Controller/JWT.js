const { sign, verify } = require("jsonwebtoken");

const createOrgToken = (org) => {
  const token = sign({ id: org._id, name: org.name, email: org.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
  return token;
};

const createToken = (user) => {
  const token = sign({ user: user }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
  return token;
};

const createStudentToken = (student)=>{
  const token = sign({name: student.name, email: student.email, orgName: student.orgName, phoneNo: student.phoneNo}, process.env.SECRET_KEY, {expiresIn: '3h'})
  return token
}

const validateStudentToken = (req, res, next) =>{
  try{
    const token = req.cookies['student-token']
    if(!token){
      res.status(403).json('You  are not authenticated')
    }
    else{
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
    }
  }
  catch(err){
    return res.status(400).json({ err: `An Error Occured: ${err}` });
  }
}

const validateUser = (req, res, next)=>{
  try{
    const token = req.cookies['demo-user-token']
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
}

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

module.exports = { createOrgToken, createStudentToken, validateStudentToken, createToken, validateToken, validateUser };
