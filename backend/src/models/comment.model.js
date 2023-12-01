import {Schema, model} from "mongoose"
import userSchema from "./user.model.js"


const commentSchema = new Schema(
    {
    description:{
        type: String,
        require: true
    },
    autor:{
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
    versionKey: false // para que no aparezca la version __v
}
)

export default model("Comment", commentSchema)