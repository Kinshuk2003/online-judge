import mongoose from "mongoose"

const ProblemSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    difficuly : {
        type: String,
        required: true,
        trim: true,
        
    },
    category: {
        type: Array(String),
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    examples: {
        type: Array(Object),
        required: true,
    },
    constraints: {
        type: Array(String),
        required: true,
    },
    testcases: {
        type: Array(Object),
        required: true,
    }
}, {timestamps: true});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;

