const Product = require('../models/productModel')




const getproducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const createdproduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error);

    }
}

const productid = async (req, res) => {
    try {

        const id = req.params.id
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const updateproduct = async (req, res) => {
    try {

        const { id } = req.params
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body)




        if (!updatedProduct) {

            return res.status(404).json({ message: "no product found" })

        }

        res.status(200).json(updatedProduct)



    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}



const deleteproduct = async (req, res) => {
    try {

        const { id } = req.params;

        const deleteProduct = await Product.findByIdAndDelete(id)



        if (!deleteProduct) {
            return res.status(404).json({ message: "product not found" })
        }

        const products = await Product.find({})

        res.status(200).json({ deleted: deleteProduct, allproducts: products })


    } catch (error) {

        res.status(500).json({ message: error.message })
    }
}


module.exports = {updateproduct , deleteproduct , createdproduct , productid , getproducts}
