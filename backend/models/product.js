import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true ,"Please enter product name"],
        maxLength:[200 ,"Enter in short"]
    },
    ratings: {
        type: Number,
        default: 0,
    },
    price:{
        type: Number,
        required:[true ,"Please enter the price"],
        maxLength:[5 ,"product price must be less than 10k$"],
    },
    description:{
        type: String,
        required:[true ,"Please enter the description"],
    },
    images:[
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: [true, "Please enter the category"],
        enum:{
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Food",
                "Books",
                "Sports",
                "Outdoor",
                "Home",
            ],
            message:"Please select correct category",
        },
    },
    seller:{
        type: String,
        required: [true ,"Please enter product seller"],
    },
    stock:{
        type: Number,
        required:[true ,"Please enter product stock"],
    },
    numberOfReviews:{
        type: Number,
        default: 0,
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User",
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment:{
                type: String,
                required: true,
            },
        },
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: false,
    },
} ,
    {timestamps: true}
);

export default mongoose.model("product" ,productSchema);