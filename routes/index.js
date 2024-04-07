const express=require('express');
const router=express.Router();

const Donor=require('../database/models/donors.js');

router.get('/', function(req, res){
    // const serverIp = req.socket.localAddress;
    // console.log(serverIp);
    res.render('welcome.ejs');
});

router.get('/donors/', async (req, res) => {
    try {
      const donors = await Donor.find(); // Find all donors
      res.json(donors); // Send all donors data in response
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error retrieving donor data" });
    }
  });

router.post('/donors/', async (req, res) => {
    try {
      const newDonor = new Donor(req.body);
      const savedDonor = await newDonor.save();
      res.json(savedDonor); // Send saved donor data in response
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error saving donor data" });
    }
  });

module.exports=router;