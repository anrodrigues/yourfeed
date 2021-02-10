const User = require('../models/user');
const jwt = require('jsonwebtoken')
module.exports = {

  async auth(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    user = await User.findOne({ email, password })

     if(!user) {
      res.status(403).send('Usuário ou senha não encontrado')
     } else {
      var response = {}
       response.name = user.name
       req.body.id = user._id;
       const secret = 'xablau';
       var token = jwt.sign(req.body, secret,{expiresIn: 999999999999})
       response.token = token
       res.json(response)
     } 
  },

  async verifyToken(req, res, next){
    const token = req.headers['x-access-token'] 

    if(token) {
      const secret = 'xablau';
      jwt.verify(token, secret, function(err, decoded) {
        if(err){
          res.status(401).send('token rejeitado')
        }
        req.user = decoded;
        next();
      })
    } else {
      res.status(403).send('Não autorizado')
    }
  }

}