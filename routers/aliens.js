const express = require('express');
const router = express.Router();

const Alien = require('../models/alien');

router.get('/', async(req, res) =>{
    try {
        const aliens = await Alien.find();
        res.json(aliens);
        
    } catch (error) {
        res.send('Erroe: ' + error);
    }
});

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech
    });
    
    try {
        const a1 = await alien.save();
        res.json(a1);
        
    } catch (error) {
        res.send('Erroe: ' + error); 
    }
});

module.exports = router;