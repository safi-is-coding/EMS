const mongoose = require('mongoose')

const employeeProjectSchema = new mongoose.Schema(
    {
        employeeId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        },
        projectId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Project' 
        }
    }, 
    { 
        _id: false 
    }
);

const EmployeeProject = mongoose.model('EmployeeProject', employeeProjectSchema);

module.exports = EmployeeProject