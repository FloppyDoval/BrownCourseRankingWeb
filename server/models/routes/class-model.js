const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Classes = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('courses', Classes)