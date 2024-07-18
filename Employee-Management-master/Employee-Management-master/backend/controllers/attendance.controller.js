const Attendance = require('../models/attendance.model.js')

const createAttendance = async (req, res) => {
    try {        
        const attendance = await Attendance.create(req.body)
        res.status(200).json(attendance)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find({}).populate('employeeId').exec()
        res.status(200).json(attendance)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const { date, status, checkInTime, checkOutTime } = req.body;

        const attendance = await Attendance.findById(id)

        if(!attendance){
            res.status(400).json({message: "Attendance not found"})
        }

        // const updateAttendance = await Attendance.findByIdAndUpdate(id, req.body)

        const updateAttendance = await Attendance.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({message: "Attendance updated successfully", updateAttendance})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const attendance = await Attendance.findById(id)

        if(!attendance){
            res.status(400).json({message: "Attendance not found"})
        }

        const deleteAttendance = await Attendance.findByIdAndDelete(id)
        res.status(200).json({message: "Attendance deleted successfully"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const attendance = await Attendance.findById(id).populate('employeeId').exec()

        if(!attendance){
            res.status(400).json({message: "Attendance not found"})
        }

        res.status(200).json(attendance)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createAttendance,
    getAttendance,
    updateAttendance,
    deleteAttendance,
    findSingleAttendance
}
