const mongoose = require('mongoose')

const studentAuthSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: Number
    },
    gender: {
      type: String
    },
    role: {
      type: String,
      default: "student"
    },
    school_name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true
    },
    section: {
      section: Number
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

const studentAuthModel = mongoose.model('student', studentAuthSchema)
module.exports=studentAuthModel