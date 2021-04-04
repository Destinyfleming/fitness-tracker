const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        trim:true,
        required: true
    },
    distance: {
        type: Number,
        trim:true,
    },
    weight: {
        type: String,
        trim:true,
    }
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;