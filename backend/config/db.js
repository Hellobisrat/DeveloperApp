import mongoose from "mongoose";

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PWD;
const dbName = process.env.MONGO_DB_NAME;
const host = process.env.MONGO_DB_HOST;
const port = process.env.MONGO_DB_PORT;

const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=admin`;


const dbConnect = async () => {
  try {
    await mongoose.connect(uri );
    console.log('db connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;



