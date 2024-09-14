 import {Schema,model} from "mongoose"

 const userSchema= new Schema({
     fullName:{
        type:String,
        required:true,
     },

     email:{
      type:String,
      required:true,
     },
     password:{
        type:String,
        required:true,
        unique:true
     },
     dob:{
        type:Date,
        required:true
     },
     address:{
        type:String,
        required:true
     },

     phone:{
      Type:String,
      required:true
     },
     
  },{
    timestamps:true
  })

  const User =model("User",userSchema)

  export default User