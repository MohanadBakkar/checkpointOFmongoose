const mongoose = require('mongoose');

// Define the schema for the Person prototype
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // name field is required and of type String
  age: { type: Number }, // age field is of type Number
  favoriteFoods: { type: [String] } // favoriteFoods field is an array of strings
});

// Create the Person model using the schema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;