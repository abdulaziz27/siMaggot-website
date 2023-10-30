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

// register
schemaUser.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", schemaUser)

export default User;