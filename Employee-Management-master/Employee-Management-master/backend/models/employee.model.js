const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
    {
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        phone: {
            type: String,
            required: true
        },
        
        address: {
            type: String,
            required: true
        },
        
        dateOfBirth: {
            type: Date,
            required: true
        },
        empImage: {
            type: String,
            required: true
        },
        
        departmentId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Department' 
        },
        roleId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Role' 
        },
        managerId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        }
    },
    {
        timestamps: true
    }
);

const Employees = mongoose.model('Employee', employeeSchema);

module.exports = Employees