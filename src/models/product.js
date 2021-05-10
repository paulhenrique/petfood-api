const mongoose = require("mongoose");
const Schema = mongoose.Squema;

const product = new Schema({
  nome: String,
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: "Petshop",
  },
  capa: String,
  preco: Number,
  avaliacoes: Number,
});

module.exports = mongoose.model("product", petshop);
