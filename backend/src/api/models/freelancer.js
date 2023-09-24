const mongoose = require('mongoose')

const freelancerAuthSchema = new mongoose.Schema(
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
      type: Number,
      required: true
    },
    address: {
        type: String,
        requird: true,
    },
    gender: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "freelancer"
    },
    uid: {
      type: String
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

const freelancerAuthModel = mongoose.model('freelancer', freelancerAuthSchema)
module.exports=freelancerAuthModel