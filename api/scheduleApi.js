const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.ObjectId
const Schedule = mongoose.Schema({
    client: { type: ObjectId, ref: "Client" },
    style: { type: ObjectId, ref: "style" },
    appointment: String,
});

const ScheduleCollection = mongoose.model('Schedule', Schedule)//Schedule to select date

function getAllSchedules() {
    return ScheduleCollection.find()
}
function createNewSchedule(schedule) {
    return ScheduleCollection.create(schedule)
}

function updateSchedule(scheduleId, schedule) {
    return ScheduleCollection.findByIdAndUpdate(scheduleId , schedule)
}

function deleteSchedule(scheduleId) {
    return ScheduleCollection.findByIdAndDelete(scheduleId)
}

module.exports = {
    getAllSchedules,
    createNewSchedule,
    updateSchedule,
    deleteSchedule
}