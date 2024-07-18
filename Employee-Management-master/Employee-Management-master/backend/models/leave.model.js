const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    leaveType: String,
    reason: String,
    status: { 
        type: String, 
        enum: ['Approved', 'Rejected', 'Pending'],
        required: true 
    }
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave