const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    date: { 
        type: Date, 
        required: true 
    },
    status: { 
        type: String, 
        enum: [ 'Present', 'Absent' ], 
        required: true 
    },
    checkInTime: String,
    checkOutTime: String
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance