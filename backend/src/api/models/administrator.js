const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
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
      default: "admin"
    },
    school_name: {
      type: String
    },
    uid: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

const adminModel = mongoose.model('admin', adminSchema)
module.exports=adminModel