let db = require("../../db.js")

exports.newProduct=(name,category,price,quantity)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into product values ('0',?,?,?,?)",[name,category,price,quantity],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Product Added...")
            }
        })
    })

}