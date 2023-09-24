const mongoose = require('mongoose')

const batchSchema = new mongoose.Schema(
  {
    batch: {
        type: Number,
        required: true
    },
    courses: {
      type: [String],
      default: []
    },
    school_name: {
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

const batchModel = mongoose.model('batch', batchSchema)
module.exports=batchModel