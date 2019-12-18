const mongoose = require("mongoose");

const schema = mongoose.Schema;

const lote = new schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true
  },
  colmeiaExtraida: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "colmeia",
    require: true
  },
  dataColeta: {
    type: Date,
    require: true
  },
  quantidadeExtraida: {
    type: String,
    required: true
  },
  corAparente: {
    type: String,
    required: true
  },
  recipienteEvasado: {
    type: String,
    required: true
  }
});

const Lote = mongoose.model("lote", lote);

module.exports = Lote;
