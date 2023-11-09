import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: null
    }
})

const Category = mongoose.model("Category", categorySchema)

export default Category;