import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

const developerSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true,

  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:[String],
    enum:['developer','leadDeveloper','seniorDeveloper'],
    required:true
  }
})

const Developer = mongoose.model('Developer',developerSchema);

export default Developer;