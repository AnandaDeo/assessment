const mongoose = require('mongoose');

const DescSchema = new mongoose.Schema({
    desc: String,
}, { versionKey: false });

const Desc = mongoose.model('descriptions', DescSchema);

module.exports = Desc;