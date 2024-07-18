const Employees = require('../models/employee.model.js')
const upload = require("../middlewares/multer.js")
const uploadOnCloudinary = require('../utils/cloudinary.js')

const getEmployees = async (req, res) => {
    try {

        const employees = await Employees.find({}).populate('departmentId').populate('roleId').exec()
        res.status(200).json(employees)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createEmployee = async (req, res) => {
    // try {
        
    //     const employee = await Employees.create(req.body)


    //     res.status(200).json(employee)

    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }

    try {
        const { firstName, lastName, email, phone, address, dateOfBirth, departmentId, roleId } = req.body;
        let empImage = req.file.filename;
        const managerId = req.body._id
        empImage = await uploadOnCloudinary(empImage)
        // console.log(empImage, "hi");


        const employee = await Employees.create({
            firstName,
            lastName,
            email,
            phone,
            address,
            dateOfBirth,
            empImage,
            departmentId,
            roleId,
            managerId
        });

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    

}

const deleteEmployee = async(req, res) => {
    try {

        const { id, name } = req.params
        const employee = await Employees.findByIdAndDelete(id)

        if(!employee){
            res.status(400).json({message: "Employee not found !!"})
        }

        res.status(200).json({message: `employee deleted successfully`})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

// const updateEmployee = async(req, res) => {
//     try {
//         const { id } = req.params

//         const { name, email, DOB, salary, experience } = req.body;
//         let empImage = req.file.filename;
        
//         empImage = await uploadOnCloudinary(empImage)
//         // console.log(empImage, "hi");


//         const employee = await Employees.findByIdAndUpdate(id, {
//             name,
//             email,
//             DOB,
//             salary,
//             experience,
//             empImage
//         });

//         res.status(200).json({message : 'Employee updated successfully', employee})
        
//         // const { id } = req.params
//         // const employee = await Employees.findByIdAndUpdate(id, req.body)

//         // if(!employee){
//         //     res.status(400).json({message: 'Employee not found'})
//         // }

//         // res.status(200).json({message : 'Employee updated successfully', employee})

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, phone, address, dateOfBirth, departmentId, roleId} = req.body;

        // Check if all required fields are provided
        // if (name=='' || email=='' || DOB=='' || salary=='' || experience=='') {
        //     return res.status(400).json({ message: 'Please provide all required fields.' });
        // }

        // Check if the employee exists
        const employee = await Employees.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        console.log(employee);

        // Check if an image file is provided
        let empImage;
        // console.log(req.file);
        if (req.file) {
            empImage = req.file.filename;
            console.log(empImage);
            // Upload the image to Cloudinary or any other cloud storage service
            empImage = await uploadOnCloudinary(empImage);
            // console.log(empImage);
        }

        // Update employee details
        const updatedEmployee = await Employees.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            phone,
            address,
            dateOfBirth,
            empImage,
            departmentId,
            roleId
        }, { new: true });

        res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const findSingleEmployee = async(req, res) => {
    try {

        const { id } = req.params
        const employee = await Employees.findById(id).populate('departmentId').populate('roleId').exec()

        if(!employee){
            res.status(400).json({message: 'Employee not found'})
        }

        res.status(200).json(employee)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
    findSingleEmployee
}