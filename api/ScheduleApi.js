const mongoose = require('../db/connection.js')
const Schedule = mongoose.Schema({
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