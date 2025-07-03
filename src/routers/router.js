let express = require("express")
let prodCtrl = require("../controller/prodController.js")

let router = express.Router()


router.get("/",prodCtrl.homePage)
router.get("/product",prodCtrl.Product)
router.post("/addProd",prodCtrl.addProducts)

module.exports = router