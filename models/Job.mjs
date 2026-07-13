import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true
    },

    position: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      required: true,
      enum: [
        "Applied",
        "Interview",
        "Rejected",
        "Offer"
      ]
    },

    location: {
      type: String,
      default: "Remote"
    },

    salary: {
      type: Number,
      min: 0
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);


// Create indexes for frequently searched fields
jobSchema.index({ company: 1 });

jobSchema.index({ status: 1 });


// Compound index for searching a user's jobs by status
jobSchema.index({
  userId: 1,
  status: 1
});


const Job = mongoose.model("Job", jobSchema);

export default Job;