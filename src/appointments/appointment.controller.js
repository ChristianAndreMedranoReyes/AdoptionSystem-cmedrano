import Appointment from "./appointment.model.js"; 
import Pet from "../pet/pet.model.js";

export const createAppointment = async (req, res) => {
    try {
        const data = req.body;

        const pet = await Pet.findById(data.pet); 

        if (!pet) {
            return res.status(404).json({
                success: false,
                msg: "Pet not found"
            });
        }

        const appointment = new Appointment({
            date: data.date,
            time: data.time,
            user: req.usuario.id,
            pet: pet._id,
            description: data.description
        });

        await appointment.save();

        res.status(201).json({
            success: true,
            msg: "Appointment created",
            appointment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Error creating appointment",
            error: error.message
        });
    }
};
