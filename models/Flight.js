// Import Mongoose
const mongoose = require('mongoose')
// Now we write the rules for our movies
const flightSchema = new mongoose.Schema(
    {
      airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
      },
      airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
      },
      flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
      },
      departs: {
        type: Date,
        default: () => {
          const oneYearFromNow = new Date();
          oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
          return oneYearFromNow;
        },
      },
    },
    {
      timestamps: true, // Add timestamps fields createdAt and updatedAt
    }
  );

// Our schema need to compile into a model, we'll export the model to use in our controllers/routes
// Every single model has functions baked into them, these functions allow us to CRUD on these resources(more on that in controllers)
// model is method that comes from mongoose, it takes two arguments
// The first argument is the NAME we want to use to refer to the model(capitalized first letter)
// The second argument is the schema used to create the model
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;