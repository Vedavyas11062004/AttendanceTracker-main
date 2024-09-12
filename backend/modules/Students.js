const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : Number,
        required : true
    },
    branch : {
        type : String,
        required : true
    }
},
    { collection : "Student" }
);

const Students = mongoose.model("Student", StudentSchema);

module.exports = Students;