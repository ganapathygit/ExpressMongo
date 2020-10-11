const mongoose = require("mongoose")

const relocationSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  phone: String,
  email: String,
  from : String,
  to: String
  
});

module.exports = mongoose.model('Relocation', relocationSchema);


