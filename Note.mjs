
import mongoose from "mongoose";


const noteSchema = new mongoose.Schema(
{
  jobId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Job",
    required:true
  },

  note:{
    type:String,
    required:true,
    trim:true
  }
},

{
 timestamps:true
});


const Note = mongoose.model("Note", noteSchema);

export default Note;