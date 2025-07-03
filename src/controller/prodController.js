let proModel = require("../models/prodModel.js")

exports.homePage=((req,res)=>{
    res.render("home.ejs")
})

exports.Product = ((req,res) => {
    res.render("addProd.ejs",{msg:""})
})

exports.addProducts = ((req,res) => {
    let {name,category,price,quantity} = req.body
    let promise = proModel.newProduct(name,category,price,quantity)
    promise.then((result)=>{
        res.render("addProd.ejs",{msg:result})
    }).catch((err)=>{
        res.render("addProd.ejs",{msg:err})
    })
})