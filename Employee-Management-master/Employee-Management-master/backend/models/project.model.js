const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
    {
        projectName: { 
            type: String, 
            required: true 
        },
        startDate: Date,
        endDate: Date,
        managerId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        },
        departmentId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Department' 
        }
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project
