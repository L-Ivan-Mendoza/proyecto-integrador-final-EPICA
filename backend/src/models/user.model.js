// tambien se puede importar mongoose from mongoose y crear Schema con mongoose.Schema
import {Schema, model} from "mongoose"


const userSchema = new Schema(
    {
    username:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        requiere: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        requiere: true
    },
    avatarURL: {
        type: String,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false // para que no aparezca la version __v
}
)

export default model("User", userSchema)