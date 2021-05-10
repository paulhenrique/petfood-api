const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("product", product);
