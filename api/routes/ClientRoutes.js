import { Router } from "express";
import * as clientController from '../controllers/clientController.js'
const router = Router();

/**
 * TODO: Aca van todas las rutas de clientes
 */

router.route('/clients')
.get()
.post(clientController.createClient)

router.route('/clients/:id')
.get()
.put()
.delete()

export default router