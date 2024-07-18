const mongoose = require('mongoose')

const performanceReviewSchema = new mongoose.Schema(
    {
        employeeId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        },
        reviewerId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        },
        date: { 
            type: Date, 
            required: true 
        },
        score: { 
            type: Number, 
            min: 1, 
            max: 10, 
            required: true 
        },
        comments: String
    }
);

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewSchema);


module.exports = PerformanceReview