const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
    {
        roleName: 
        { 
            type: String, 
            required: true 
        },
        description: {
            type: String,
            default: "Not Available"
        }
    },
    {
        timestamps: true
    }
    
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role