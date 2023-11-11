import express from 'express';
import OrderItems from '../models/OrderItems.js';
import Product from "../models/ProductModels.js";
import mongoose from 'mongoose'; // Import mongoose


const cartRoutes = express.Router();

cartRoutes.get('/', async (req, res) => {
  try {
    const orderItems = await OrderItems.find().populate('product');
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

cartRoutes.post('/', async (req, res) => {
  try {
    const { quantity, product } = req.body;

    // Create a new order item with the existing product's ID
    const orderItem = new OrderItems({
      quantity,
      product,
    });

    const savedOrderItem = await orderItem.save();

    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

cartRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const orderItem = await OrderItems.findById(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    orderItem.quantity = quantity;

    const updatedOrderItem = await orderItem.save();

    res.json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

cartRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrderItem = await OrderItems.findByIdAndDelete(id);

    if (!deletedOrderItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default cartRoutes;
