const mongoose = require('mongoose')

const schoolAuthSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
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

const schoolAuthmodel = mongoose.model('school', schoolAuthSchema)
module.exports=schoolAuthmodel