import mongoose from "mongoose";

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

const User = mongoose.model("User", schemaUser)

export default User;