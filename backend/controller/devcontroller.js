import Developer from '../model/developer.js'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export const postDeveloper = async (req,res)=>{
  try {
    const {name,lastName,email,password,role}= req.body;
    if(!name || !lastName || ! email || !password || !role){
    return  res.status(300).json({message:'all input field required '})
    }
    const salt = await bcrypt.genSalt(10);
    const newPassword =await bcrypt.hash(password,salt)
    const newDeveloper = await Developer.create({name,lastName,email,password:newPassword,role})
    const token = JWT.sign({id:newDeveloper._id,name:newDeveloper.name},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.status(200).json({name,lastName,email,role,token})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export const getDevelopers = async(req,res)=>{
  try {
    const developers = await Developer.find().select('-password');
    if(!developers){
    return  res.status(300).json('no developer found')
    }
    res.status(200).json(developers)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateDeveloper = async(req,res)=>{
  try {
    const {id}=req.params
    const developer = await Developer.findById(id)
    if(!developer){res.status(300).json('no developer found by given id')}
    developer.name=req.body.name|| developer.name
    developer.lastName=req.body.lastName || developer.lastName,
    developer.role = req.body.role || developer.role
    if(req.body.password){ 
      const hashPassword = await bcrypt.hash(req.body.password,10)
      developer.password = hashPassword
    }
    const EditedDeveloper = await developer.save()
   
    res.status(200).json({message:"developer updated",EditedDeveloper})
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteDeveloper = async(req,res)=>{
  try {
    const {id} = req.params;
    const developer = await Developer.findById(id);
    if(!developer ){
      return res.status(300).json('no developer found with given id')
    } 
    await Developer.findOneAndDelete(developer)
    res.status(200).json({message:'successfully deleted'})
  } catch (error) {
    res.status(500).json(error.message)
  }
}