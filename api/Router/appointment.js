
import express from 'express';
import { createAppointment, getAppointments,getuserappointments,getAppointmentsByDoctorAndDate,getpatientdetails,deleteappointment,getFutureAppointmentsByDoctor } from '../controller/appointmentController.js';

const router = express.Router();

router.post('/appointments', createAppointment);
router.get('/appointments', getAppointments);
router.get('/appointments/:userid', getuserappointments);
router.get('/appointmentsbydate',getAppointmentsByDoctorAndDate)
router.get('/appointments/doctor/:doctorid',getpatientdetails)
router.delete('/appointment/delete/:appointmentid',deleteappointment)
router.get('/future/:doctorid', getFutureAppointmentsByDoctor)

export default router;
