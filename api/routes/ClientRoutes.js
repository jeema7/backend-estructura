import { Router } from "express";
import * as clientController from '../controllers/clientController.js'
const router = Router();

/**
 * TODO: Aca van todas las rutas de clientes
 */

router.route('/clients')
.get(clientController.GetAllClients)
.post(clientController.createClient)

router.route('/clients/:id')
.get(clientController.getClientById)
.put(clientController.updateClientById)
.delete(clientController.deleteClientByID)

export default router