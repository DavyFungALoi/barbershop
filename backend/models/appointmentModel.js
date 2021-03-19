import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    AppointmentTime: [
      {
        date: { type: String, required: true },
        timeSlot: { type: Number, required: true },
        dateCreated: { type: Date, default: Date.now },
      },
    ],
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("appointment", appointmentSchema);

export default Appointment;
