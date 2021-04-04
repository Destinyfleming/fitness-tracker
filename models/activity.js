const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    weight: {
        type: Number,
        trim:true,
    },
    sets: {
        type: String,
        trim:true,
    },
    reps: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
        trim:true,
    },
    distance: {
        type: Number,
        trim:true,
    }
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;