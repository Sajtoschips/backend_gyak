const express = require('express');
const EpisodeModel = require('../models/episodes');
const SeasonModel = require('../models/seasons');

const router = express.Router()

//Post Method
router.post('/', async (req, res) => {
    const data = new EpisodeModel(req.body); // igy nem kell kódban megadni a body tartalmát, hanem csak a requestben
    try{
        const ujEpisode = await data.save();
        res.status(201).json({_id: ujEpisode._id})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// //Get all Method
// router.get('/', async (req, res) => {
//     try{
//         const data = await SeasonModel.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })


//Get by ID Method
router.get('/episodes/:season', async (req, res) => {
    try{
        const season = await SeasonModel.findOne({_id: req.params.season})

        const data = await EpisodeModel.find({season: season._id}).populate('season', '-_id');
        if (data.length !== 0) {
            res.json(data)
        } else {
            res.status(404).json({message: 'Nincs olyan telefon az adatbázisban, amit ez a gyártó gyártott.'})
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Delete by ID Method
router.delete('/:title', async (req, res) => {
    try {
        const episode = await EpisodeModel.findOne({title: req.params.title})
        const id = episode._id;
        const data = await EpisodeModel.findByIdAndDelete(id)
        res.send(`A ${data.title} nevű epizód törölve lett.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;