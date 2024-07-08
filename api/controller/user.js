import User from "../models/User.js"

export const updateUser =async (req,res,next)=>{
    try{
        const userId = req.params.id;
        const updatedUser = req.body;
        const updateUser = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
        res.status(200).json(updateUser);
      }catch(err){
     next(err)
    } 
}

export const deleteeUser =async (req,res,next)=>{
  try{
    await User.findByIdAndDelete( req.params.id)
    res.status(200).json("Deleted  Successfully");
  }catch(err){
     next(err)
    } 
}

export const getUser =async (req,res,next)=>{
    try{
        const user = await User.findById( req.params.id )
        res.status(200).json(user);
      }catch(err){
     next(err)
    } 
}
export const getUsers =async (req,res,next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
       }catch(err){
     next(err)
    } 
}

export const searchUserByPhone = async (req, res, next) => {
  try {
      const phone = req.query.phone;
      const user = await User.findOne({ phone: phone });
      if (user) {
          res.status(200).json({ id: user._id, username: user.username });
      } else {
          res.status(404).json({ message: "User not found" });
      }
  } catch (err) {
      next(err);
  }
};
