import mongoose from "mongoose";

const OrderItemSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

const OrderItems = mongoose.model("orderItems", OrderItemSchema)

export default OrderItems;