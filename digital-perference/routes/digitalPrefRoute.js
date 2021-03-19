const express = require('express');
const _ = require('lodash');
const digitalPrefService = require('../services/digitalPrefService')

const router  = express.Router();

router.get('/',async(req,res) => {
    res.send('Welcome to Digital preference app')
})

router.post('/digital_preference',(req,res,next) => {
    var body = _.pick(req.body,['username'])
    console.log(body);
    return digitalPrefService.getDigitalPreference(body);

})

module.exports = router