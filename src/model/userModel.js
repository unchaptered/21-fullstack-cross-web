import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email: {type:String, required:true, unique:true}
});

// userSchema.pre("save", async function() {
//     if(this.isModified("password")) {
//         this.password=await bcrypt.hash(this.password, 5);
//     }
// });
const userModel=mongoose.model("User",userSchema);

export default userModel;