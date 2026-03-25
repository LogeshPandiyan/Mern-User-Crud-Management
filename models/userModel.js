const mongoose = require('mongoose');

// Write schema 
const userSchema = new mongoose.Schema(
  {
    // field Name
    userName: {
      type: String,
      required: true
    },
    userRole: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true,
    },
    userContact: {
      type: String,
      required: true
    },
    salary: {
      type: String
    },
     street:{
          type: String,
          required: true
     },
     city:{
          type: String,
          required: true
     },
     district:{
          type: String,
          required: true
     },
     state:{
          type: String,
          required: true
     },
     country:{
          type: String,
          required: true
     }
    },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('userManagement', userSchema)