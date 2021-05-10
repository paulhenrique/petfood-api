const express = require("express");
const router = express.Router();

const Petshop = require("../models/petshop");
const Product = require("../models/product");

const createSplitTransaction = require("../services/pagarme")
  .createSplitTransaction;

router.get("/petshops", async (req, res) => {
  try {
    const petshops = await Petshop.find();
    res.json({ error: false, petshops });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});
router.get("/petshops/:id", async (req, res) => {
  try {
    const petshop = await Petshop.findById(req.params.id);
    const product = await Product.find({ petshop_id: petshop.id });

    res.json({ error: false, petshop: { ...petshop._doc, product } });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post("/purchase", async (req, res) => {
  try {
    const transaction = await createSplitTransaction(req.body);
    res.json(transaction);
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
