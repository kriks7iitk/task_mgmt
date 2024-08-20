import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    assignedTo: {  type: mongoose.Schema.Types.ObjectId },
    work :{type:String , },
    productUrl:{type:String, },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now() },
    dueDateTime: {
        type: Date,
        required: true,  // Make this true if it's required
    },


})

const taskModel = mongoose.model("Tasks",taskSchema)
export default taskModel