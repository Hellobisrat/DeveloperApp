import mongoose from "mongoose"




const dbConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb://user:password@developerapp-mongodb:27017/developerapp?authSource=admin'
    );
    console.log('db connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;

