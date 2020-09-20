let mongoose = require("mongoose");

// connect with mongodb atlas
mongoose.connect(`mongodb+srv://onlinestore:onlinestore123@cluster0.f3rkh.mongodb.net/onlinestore`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
