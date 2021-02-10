const User = require('../models/user');

module.exports = {

  async index(req, res) {
    const users = await User.find();
    return res.json(users)
  },

  async store(request, res) {
    const { name, email, password, dateBirth, genere, country,state, city } = request.body;

      user = await User.create({
        name,
        email,
        password,
        dateBirth,
        genere,
        country,
        state,
        city
      })

    return res.json(user);
  },

  async me(req, res) {
    if(!req.user) {
      res.status(400).send('user not found')
    } 

    const id = req.user.id
    const user = await User.findById(id)
    res.status(200).send(user)
  }
}