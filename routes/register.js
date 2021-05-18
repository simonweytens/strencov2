const express = require('express')
const router = express.Router()
const Register = require('../models/register')

router.get('/', (req,res) => {
    res.render("register/index")
})

router.post('/', async (req,res) => {
    const register = new Register({
        country: req.body.country,
        role: req.body.role
    })
    try{
        const newRegister = await register.save()
        res.render('sterrentool/indexEN', {layout: false})
    }
    catch (err){
        res.render('register/index')
        console.log(err)
    }
    
})

module.exports = router