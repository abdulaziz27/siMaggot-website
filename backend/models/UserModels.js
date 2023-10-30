import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const schemaUser = mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
        unique:true,
    },
    password:{
        type: String,
        require:true,
    },
    isSeller:{
        type: Boolean,
        require:true,
        default:false,
    }
},
{
    timestamps:true
}
)

//login
schemaUser.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
}

const User = mongoose.model("User", schemaUser)

export default User;