const mongoose = require("mongoose");

const LecturerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true
    },
    course : {
        type : String,
        required : true
    }
},
    { collection : "Lecturer"}
);

const Lectures = mongoose.model("Lecture", LecturerSchema);

module.exports = Lectures;