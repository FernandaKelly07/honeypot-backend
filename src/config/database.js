const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb://localhost:27017/honeypot",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      console.log("Conectado ao mongo");
    }
  );
};

module.exports = connect;
