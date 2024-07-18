
const connectDB = require('./db/dbConnection.js');

const employeeRoute = require("./routes/employees.route.js");
const departmentRoute = require("./routes/department.route.js");
const roleRoute = require("./routes/role.route.js");
const projectRoute = require("./routes/project.route.js");
const leaveRoute = require("./routes/leave.route.js");
const attendanceRoute = require("./routes/attendance.route.js");
const userRoute = require("./routes/user.route.js");

const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth.js')
const cors = require("cors");
const express = require("express");
const path = require('path');

require('dotenv').config();
const app = express();


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public/images"));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true
}));

app.use("/api/user", userRoute);

app.get('/user/register', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'register.html'));
});

app.get('/user/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// authentication middleware
app.use(auth)


// routes
app.use("/api/employees", employeeRoute);
app.use("/api/departments", departmentRoute);
app.use("/api/roles", roleRoute);
app.use("/api/projects", projectRoute);
app.use("/api/leaves", leaveRoute);
app.use("/api/attendance", attendanceRoute);



app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/user/logout', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/dashboard', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'dashboard.html'));
});

app.get('/emp', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'employees.html'));
});

app.get('/departments', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'departments.html'));
});

app.get('/projects', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'projects.html'));
});

app.get('/roles', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'roles.html'));
});

app.get('/leaves', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'leaves.html'));
});

app.get('/attendance', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend', 'attendance.html'));
});



// DB Connection
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=> {
        console.log(`Server connected at port ${process.env.PORT}`);
    });
})
.catch(()=> {
    console.log("Server connection error");
});
