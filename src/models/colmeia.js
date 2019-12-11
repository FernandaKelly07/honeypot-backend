const mongoose = require("mongoose");

const schema = mongoose.Schema;

const colmeia = new schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", require: true },
  numerodaColmeia: { type: Number, required: true, unique: true },
  previsaoExtracao: { type: Date, required: true },
  volumetotal: { type: String, required: true },
  posturaDosOvos: { type: String, required: true }
});

const Colmeia = mongoose.model("colmeia", colmeia);

module.exports = Colmeia;
