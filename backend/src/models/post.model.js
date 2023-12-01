import {Schema, model} from "mongoose"
import userSchema from "./user.model.js"
import commentSchema from "./comment.model.js"


const postSchema = new Schema(
    {
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    autor:{
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    comments:{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    imgURL: {
        type: String,
        trim: true,
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

export default model("Post", postSchema)