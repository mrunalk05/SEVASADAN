const mongoose = require('mongoose');

// Define the expense schema
const expenseSchema = new mongoose.Schema({
  expenseType: String,
  amount: Number,
});

// Define the billing schema
const billingSchema = new mongoose.Schema({
  expenses: [expenseSchema], // Use the expense schema here
  grossTotal: Number,
  objectId: String,
  name: String,
});

// Create the billing model
const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
