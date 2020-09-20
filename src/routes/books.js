const express = require("express");
const Cart = require("../models/books.model");
const router = new express.Router();

router.get("/", function(req, res) {
  Cart.find()
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

router.post("/res", (req, res, next) => {
  console.log(req.body.quantity + req.body.location);
  Cart.create({
    productid: req.body.productid,
    userid: req.body.userid,
    quantity: req.body.quantity,
    location: req.body.location,
    phone: req.body.phone
  })
    .then(cart => {
      console.log(req.body);
      res.json({ status: "Your order is completed" });
    })
    .catch(next);
});

// join query
router.post('/getCartJoin', (req,res,next) => {
  const id = req.body.userid;
  Cart.find({userid:id})
  .populate("userid")
  .populate("productid")
  .exec()
  .then(doc => {
      if(doc) {
       
        result=[];
       doc.forEach(data => {
         var dataa={};
         dataa.username=data.userid.fullname;
         dataa.userid=data.userid._id;
         dataa.productid=data.productid._id;
         dataa.productName=data.productid.name;
         dataa.price=data.productid.price;
         result.push(dataa);
       });
       res.status(200).json(result);
      }else{
          res.status(404).json({
              message: 'No cart found'
          });
      }
  }).catch(err => {
      res.status(500).json({error:err});
  });
});
 
module.exports = router;