import mongoose from "mongoose";

function initDB() {
  if (mongoose.connections[0].readyState) {
    // If database already connected then return from this function.
    console.log("Already connected");
    return;
  }
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });

  mongoose.connection.on("error", () => {
    console.log("error connecting to mongo");
  });
}

export default initDB;
