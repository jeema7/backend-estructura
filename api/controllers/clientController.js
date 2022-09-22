import Client from '../models/Client.js';


const createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        return res.json({
            msg: "Cliente creado",
            data: {
                client: newClient,
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear cliente",
            error
        })
    }
}

export { createClient }