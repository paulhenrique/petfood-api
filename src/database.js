const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("debug", true);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB is uo"))
  .catch(console.log);
