const express = require('express')
const axios = require('axios')

const router= new express.Router()


///////////////////////////////////// ROUTE FOR HOME /////////////////////////////////////////
router.get("/", async(req, res) => {
    var countrydata
    var statedata
    const url= 'https://api.covid19india.org/data.json'
    try {
        countrydata = await axios.get(url)
        // statedata = await axios.get(url+)
        
    } catch (err) {
        res.redirect("error")
    }
    // res.render('error')
    res.render("home", {country: countrydata.data})
    // console.log(countrydata.data.statewise)
})

///////////////////////////////////// ROUTE FOR HELPLINES /////////////////////////////////////////
router.get("/helplines", async(req, res) => {
    var helpline
    const url= 'https://covid-19india-api.herokuapp.com/v2.0'
    try {
        helpline = await axios.get(url+'/helpline_numbers')
    } catch (err) {
        res.redirect("error")
    }
    res.render("helplines", {helpline: helpline.data[1].contact_details})
    // console.log(helpline.data[1])
})

///////////////////////////////////// ROUTE FOR WORLD /////////////////////////////////////////
var world
router.get("/world", async(req, res) => {
    
    const url= 'https://covid-19.dataflowkit.com/v1'
    try {
        world = await axios.get(url)
        
    } catch (err) {
        res.redirect("error")
    }
    // res.render("error")
    res.render("world", {world: world.data})
    // console.log(world.data[0]["Last Update"].slice(11, 13))
})

///////////////////////////////////// ROUTE FOR ABOUT PAGE /////////////////////////////////////////
router.get("/about", (req, res) => {
    // res.render("about")
    res.render("about")
})

///////////////////////////////////// ROUTE FOR CONTACT PAGE /////////////////////////////////////////
router.get("/contact", (req, res) => {
    res.render("contact")
    // res.send("contact")
})

///////////////////////////////////// ROUTE FOR ERROR PAGE /////////////////////////////////////////
router.get("/error", (req, res) => {
    res.render("error")
})

module.exports= router
