const {sign, verify} = require('jsonwebtoken')

const createToken = (user)=>{
  const token = sign({user: user},process.env.SECRET_KEY)
  return token
}

const validateToken = (req, res, next)=>{
  
  try{
    const token = req.cookie["access-token"]
    if(!token){
      return res.status(403).json("You are not authenticated")
    }
  
    const valid = verify(token, process.env.SECRET_KEY)
    if(valid){
      req.authenticated = true;
      next();
    }
    else{
      return res.json(403).json({msg:"Your token is invalid or experied "})
    }
  }
  catch(err){
    return res.status(400).json({err: `An Error Occured: ${err}`})
  }
}

module.exports = {createToken, validateToken}