const Goals = require('../models/goals');

module.exports = {

  async index(req, res) {
    const goals = await 
    Goals.find()
    .populate('user');
    return res.json(goals)
  },

   goalsByUser(req, res) {
 
    console.log(req.user)
    const user = req.user.id
    Goals.find({
      user: user
    })
    .populate('user')
    .then((goals) => {
      if(goals.length > 0){
        return res.status(200).json(goals)
      } else {
        return res.status(404).json('Nenhum registro corresponde a este ID')
      }
      
    }, (err) => {
      return res.status(501).json(err)
    })

  },

  async getById(req, res) {

    goal = await Goals.findById(req.params._id)
    return res.json(goal)
  },

  async store(req, res) {
    const { name, category, notify, endDate,createdAt, concluded, actions, user} = req.body;

      goal = await Goals.create({
        name,
        category,
        notify,
        endDate,
        createdAt,
        concluded,
        actions,
        user
      })

    return res.json(goal);
  },

  async delete(req, res) {
    const user = req.body.id;
    Goals.remove({_id: user})
    .then(() => {
      res.status(200).send('Objetivo excluido')
    }, (err) => {
      re.status(500).json(err)
    })
  },

  async update(req, res) {
    Goals.findByIdAndUpdate(req.params._id, req.body)
    .then(() => {
      res.status(200).send('Objetivo atualizado')
    }, (err) => {
      re.status(500).json(err)
    })
  }
}