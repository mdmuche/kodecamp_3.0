const { ref } = require("joi");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    taskBody: {
      type: String,
      required: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "users",
    // },
  },
  { timestamps: true }
);

const taskCollection = mongoose.model("task", taskSchema);

module.exports = {
  taskCollection,
};
