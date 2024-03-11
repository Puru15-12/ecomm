import Product from "../models/product.js";

export const getProducts= async (req ,res) =>{
    res.status(200).json({
        message: "All products",
    });
};
<<<<<<< HEAD
=======

export const newProduct= async (req ,res) =>{
    const product= await product.create(req.body);

    res.status(200).json({
        product,
    });
};
>>>>>>> f30ee40fc6ef92caa6b5a8283a22baaad6b8c87b
