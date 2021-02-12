var mongoose = require("mongoose")
var Schema = mongoose.Schema

var QuestionSchema = new Schema({
        text: String,
        responses: Array},
    {
        versionKey: false
    })

var Question = mongoose.model("Question", QuestionSchema)
module.exports = Question