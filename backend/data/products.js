import mongoose from "mongoose";

const products = [
    {
        name: "barang1",
        image: "/frontend/src/assets/images/820522.png",
        description: "ini adalah barang1",
        price: 10000,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: new mongoose.Types.ObjectId()
    },
    {
        name: "barang2",
        image: "/frontend/src/assets/images/820522.png",
        description: "ini adalah barang1",
        price: 10000,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: new mongoose.Types.ObjectId()
    },
    {
        name: "barang3",
        image: "/frontend/src/assets/images/820522.png",
        description: "ini adalah barang1",
        price: 10000,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: new mongoose.Types.ObjectId()
    },
    {
        name: "barang4",
        image: "/frontend/src/assets/images/820522.png",
        description: "ini adalah barang1",
        price: 10000,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: new mongoose.Types.ObjectId()
    },
];

export default products;