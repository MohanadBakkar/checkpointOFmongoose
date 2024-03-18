const express = require('express');
const connectDB = require('./db'); // Import the database connection function
const app = express();
const Person = require ('./models/Person');


// Connect to the database
connectDB();

// Other server setup and routes
// ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const newPerson = new Person({
    name: 'John',
    age: 30,
    favoriteFoods: ['Pizza', 'Burgers']
  });
  
  newPerson.save()
    .then(savedPerson => {
      console.log('New person saved:', savedPerson);
    })
    .catch(error => {
      console.error('Error saving person:', error);
    });

// Function to create multiple people
async function createManyPeople(arrayOfPeople) {
  try {
    const createdPeople = await Person.create(arrayOfPeople);
    console.log('Successfully created people:', createdPeople);
  } catch (error) {
    console.error('Error creating people:', error);
  }
}

// Array of people data
const arrayOfPeople = [
  { name: 'John', age: 30, favoriteFoods: ['Pizza', 'Burgers'] },
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  // Add more objects for additional people as needed
];

// Call the function to create multiple people
createManyPeople(arrayOfPeople);

// Function to find people by name
async function findPeopleByName(name) {
  try {
    const people = await Person.find({ name: name });
    console.log(`People with the name '${name}':`, people);
  } catch (error) {
    console.error('Error finding people by name:', error);
  }
}

// Call the function to find people by name
findPeopleByName('John');

// Function to find a person by favorite food
async function findPersonByFavoriteFood(food) {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log(`Person with '${food}' as a favorite food:`, person);
  } catch (error) {
    console.error('Error finding person by favorite food:', error);
  }
}

// Call the function to find a person by favorite food
findPersonByFavoriteFood('Pizza');

// Function to find a person by _id
async function findPersonById(personId) {
  try {
    const person = await Person.findById(personId);
    console.log(`Person with _id '${personId}':`, person);
  } catch (error) {
    console.error('Error finding person by _id:', error);
  }
}

// Call the function to find a person by _id
findPersonById('65f827584a6e70ef649f42c7');


// Function to find a person by name and update their age
async function updatePersonAge(personName) {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName }, // Search criteria
      { age: 20 }, // Update age to 20
      { new: true } // Return the updated document
    );
    console.log(`Updated person:`, updatedPerson);
  } catch (error) {
    console.error('Error updating person:', error);
  }
}

// Call the function to update a person's age by name
updatePersonAge('John');

// Function to delete a person by _id
async function deletePersonById(personId) {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log(`Deleted person:`, deletedPerson);
  } catch (error) {
    console.error('Error deleting person:', error);
  }
}

// Call the function to delete a person by _id
deletePersonById('65f6e3a3c9e62c54b5644d73');