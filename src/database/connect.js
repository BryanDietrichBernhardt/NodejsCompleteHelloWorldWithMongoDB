const mongoose = require("mongoose");

const connectToDatabase = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@clusternodejsapi.mx2c4e6.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(error);
      }

      return console.log("Conectado ao BD!");
    }
  );
};

module.exports = connectToDatabase;
