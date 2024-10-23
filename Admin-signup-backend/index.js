const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbconnect = require('./database/connectDb');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

// database connect
dbconnect()

//! Common Routes
const userRoutes = require("./routes/userRoute");
app.use("/common", userRoutes);

//! otp
const otpController = require("./middleware/otpController");
app.use("/", otpController);

// !client
const clientsignupOTPmail = require("./middleware/clientsignupOTPmail");
app.use("/", clientsignupOTPmail);
// ! admin 
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

const usersavedemail = require("./middleware/usersavedemail");
app.use("/", usersavedemail);

//! resetpassword
const resetpassword = require("./controller/resetPasswordController");
app.use("/", resetpassword);

//!  Routes
const passwordupdateemail = require("./middleware/passwordupdatemail")
app.use("/", passwordupdateemail);

//! EmailTemplate Routes
const clientsavedemail = require("./middleware/clientsavedEmail");
app.use("/", clientsavedemail);

//! EmailTemplate Routes
const teammembersavedemail = require("./middleware/teamMembersendInviteEmail");
app.use("/", teammembersavedemail);

const emailsync = require("./middleware/emailsync");
app.use("/", emailsync);

//! firmsetting
const firmsetting = require("./routes/firmsettingRoutes");
app.use("/", firmsetting);

//! resetpassword
const teammemberpasswordupdate = require("./middleware/teammemberpasswordupdate");
app.use("/", teammemberpasswordupdate);

const PORT = process.env.PORT || 8880;
app.listen(PORT, ()=>{
    console.log(`connection is live at port no. ${PORT}`);
})