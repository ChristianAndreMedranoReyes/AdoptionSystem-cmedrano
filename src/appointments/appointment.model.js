import mongoose, { Schema, model } from "mongoose";

const appointmentSchema = new Schema(
    {
        date: { 
            type: Date, 
            required: true 
        },
        time: { 
            type: String, 
            required: true 
        },
        user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            required: true 
        },
        pet: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Pet", 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        }
    },
    { 
        timestamps: true 
    }
);

export default model("Appointment", appointmentSchema);
