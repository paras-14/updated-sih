const mongoose = require('mongoose')

const teacherAuthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number
    },
    gender: {
      type: String
    },
    role: {
      type: String,
      required: true,
      default: "teacher"
    },
    subject: {
      type: String,
      required: true
    },
    batches: {
      type: [Number],
      default: []
    },
    school_name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

const teacherAuthModel = mongoose.model('teacher', teacherAuthSchema)
module.exports=teacherAuthModel