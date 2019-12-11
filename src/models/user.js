const mongoose = require("mongoose");

const schema = mongoose.Schema;

const user = new schema({
  usuario: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  senha: {
    type: String,
    trim: true,
    required: true
  }
});

const Usuario = mongoose.model("Usuario", user);

module.exports = Usuario;
