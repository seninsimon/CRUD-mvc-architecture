const express = require('express')
const router = express.Router()
const controller = require('../controller/prooductcontoller')


router.get('/', controller.getproducts)


router.post('/', controller.createdproduct)

router.get('/:id', controller.productid)


//update a  product

router.put('/:id', controller.updateproduct)


// delete a product


router.delete('/:id', controller.deleteproduct)



module.exports = router