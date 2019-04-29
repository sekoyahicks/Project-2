const mongoose = require('../db/connection.js')
const Style = mongoose.Schema({
    name: String,
    description: String,
    cost: Number
});

const StyleCollection = mongoose.model('Style', Style)

function getAllStyles() {
    return StyleCollection.find()
}
function createNewStyle(style) {
    return StyleCollection.create(style)
}

function updateStyle(styleId, style) {
    return StyleCollection.findByIdAndUpdate(styleId , style)
}

function deleteStyle(styleId) {
    return StyleCollection.findByIdAndDelete(styleId)
}

module.exports = {
    getAllStyles,
    createNewStyle,
    updateStyle,
    deleteStyle
}