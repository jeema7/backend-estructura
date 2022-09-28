import { Router } from "express";
import * as clientController from '../controllers/clientController.js'
import createClientValidator from "../middlewares/createClientValidator.js";
const router = Router();


/**
 * TODO: Aca van todas las rutas de clientes
 */

router.route('/clients')
.get(clientController.GetAllClients)
.post(createClientValidator,clientController.createClient)

router.route('/clients/:id')
.get(clientController.getClientById)
.put(clientController.updateClientById)
.delete(clientController.deleteClientByID)

export default router