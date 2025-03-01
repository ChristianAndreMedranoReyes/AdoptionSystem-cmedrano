import { Router } from "express";
import { check } from "express-validator";
import { createAppointment  } from "./appointment.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check('pet', 'no se encontro la mascota').not().isEmpty(),
        validarCampos
    ],
    createAppointment 
);

export default router; 