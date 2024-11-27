import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place order using Cash on delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Place order using Stripe
const placeOrderStripe = async (req, res) => {};

// All orders data for admin panel
const allOrders = async (req, res) => {};

// All orders data for Frontend
const userOrder = async (req, res) => {};

// Updating order status from admin panel
const updateStatus = async (req, res) => {};

export { placeOrder, placeOrderStripe, allOrders, userOrder, updateStatus };
