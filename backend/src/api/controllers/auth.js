const {
    adminModel,
    batchModel,
    freelancerAuthModel,
    schoolAuthmodel,
    studentAuthModel,
    teacherAuthModel
} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const sendEmails=require("../helpers/Nodemailer");

const signup = async (req, res) => {
    const { role } = req.body;
    if (role === "admin") {
        const { name, email, phone, gender, school_name, password, sid, address } = req.body;

        try {
            const oldUser = await schoolAuthmodel.find({ email })
            const oldsname = await schoolAuthmodel.find({ school_name })
            if (oldUser.length != 0 || oldsname.length != 0) {
                return res.send({ data: "School already registered" });
            }
            const encryptedPassword = await bcrypt.hash(password, 10);
            const registerSchool = await schoolAuthmodel.create({
                name: school_name,
                sid,
                email,
                address
            })
            const registerAdmin = await adminModel.create({
                name,
                email,
                phone,
                gender,
                school_name,
                uid: sid,
                password: encryptedPassword
            })
            await registerSchool.save();
            await registerAdmin.save();

            res.status(200).json({
                status: "ok",
                data: "successfully registered!",
            })

        } catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    else if (role === "freelancer") {
        const { name, email, phone, gender, address, password } = req.body;
        try {
            const encryptedPassword = await bcrypt.hash(password, 10)
            const register = await freelancerAuthModel.create({
                name,
                email,
                phone,
                gender,
                uid: email,
                address,
                password: encryptedPassword,
            })
            await register.save();
            res.status(200).json({
                status: "ok",
                data: register,
            })

        } catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }
}

const registerTeachers = async (req, res) => {

    const teachers = req.body;
    console.log(teachers);

    const registerTeacher = async (teacherr) => {
        const { name, email, school_name, uid, batches, subject } = teacherr;
        try {
            const encryptedPassword = await bcrypt.hash(uid, 10)
            const register = await teacherAuthModel.create({
                name,
                email,
                school_name,
                uid,
                batches, 
                subject,
                password: encryptedPassword,
            })

            sendEmails({email,uid,school_name});
            await register.save();

        } catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    try {
        await teachers.map(teacherr => registerTeacher(teacherr))
        res.status(200).json({
            status: "ok",
            data: "All teachers are created with their user id and password as their given id. Please fill all other details by signing in and change the password!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }

}

const registerStudents = async (req, res) => {

    const { school_name, batch, courses, range } = req.body;


    const registerStudent = async (num, school_name, batch) => {
        const pass = `${batch}` + num;
        
            const encryptedPassword = await bcrypt.hash(pass, 10);
            const register = await studentAuthModel.create({
                uid: pass,
                batch,
                school_name,
                password: encryptedPassword,
            })
            await register.save();
    }

    try {
        const registerbatch = await batchModel.create({
            batch,
            school_name,
            courses
        })
        await registerbatch.save();

        for (let i = range.start; i <= range.end; i++) {
            await registerStudent(i, school_name, batch);
        }
        res.status(200).json({
            status: "ok",
            data: "All students are created with their user id and password as their given id. with their class as their suffix. Please fill all other details by signing in and change the password!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }


}

const login = async (req, res) => {
    let model = studentAuthModel;
    const { email, password, role } = req.body
    if (role === "admin") {
        model = adminModel;
    }
    else if (role === "teacher") {
        model = teacherAuthModel;
    }
    else if (role === "student") {
        model = studentAuthModel;
    }
    else if (role === "freelancer") {
        model = freelancerAuthModel;
    }
    const oldUser = await model.findOne({ uid })
    if (!oldUser) {
        return res.status(500).json({
            error: 'User Not Found',
        })
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email, username: oldUser.uid }, process.env.JWT_SECRET)
        if (res.status(201)) {
            return res.status(200).json({ status: "ok", data: token })
        } else {
            return res.status(500).json({ error: 'error' })
        }
    }
    res.json({ error: 'Invalid Password' })

}

module.exports = { signup, login, registerTeachers, registerStudents }