const express = require("express");
const router = express.Router();
const Product = require("../models/products.model");

// post all product api
router.post("/postproduct", (req, res, next) => {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    deliveryarea:req.body.deliveryarea
  })
    .then(product => {
      res.json({ status: "Product is added successfully" });
    })
    .catch(next);
});

// get all product api
router.get("/receiveproduct", (req, res, next) => {
  console.log("I am in here");
  Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// receive product by id
router.get("/:id", function(req, res) {
  Product.findById(req.params.id)
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// update product
router.put("/updateproduct/:id", (req, res, next) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category
    },
    { new: true }
  );
});

// delete product parameter id
router.delete("/deleteproduct/:id", function(req, res, next) {
  Product.findByIdAndDelete(req.params.id).then(response => {
    console.log("Product has been deleted of " + req.params.id);
  });
});

module.exports = router;
