const Creature = require('../models/Creature')

const creatureController = {
index: (req, res) =>{
    Creature.find({}).then((creatures)=>{
        res.send(creatures)
    })
},
show: (req, res) => {
    Creature.findById(req.params.creatureId)
    .then((creature) => {
        res.send(user)
    })
},
update: (req, res) =>{
    Creature.findByIdAndUpdate(req.params.creatureIdea , req.body)
    .then((updatedCreature) => {
        updatedCreature.save()
        res.send(updatedCreature)
    })
},
create: (req, res) => {
    Creature.create(req.body)
    .then((creature) => {
        res.send(creature)
    })
},
delete: (req, res) => {
    Creature.findByIdAndDelete(req.params.creatureId)
    .then(() => {
        res.send()
    })
}
}





module.exports = creatureController
