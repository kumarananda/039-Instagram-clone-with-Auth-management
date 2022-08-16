import mongoose from "mongoose";


const userTokenSchema = mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    },
    verifyToken : {
        type : String,
        required : true,
    }



},
{
    timestamps : true
})


// export Schema // user verify token
export default mongoose.model('Usertoken', userTokenSchema)