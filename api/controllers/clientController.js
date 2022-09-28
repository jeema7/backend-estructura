import Client from '../models/Client.js';


const createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        return res.json({
            msg: "Cliente creado",
            data: {
                Client: newClient,
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear cliente",
            error
        })
    }
}

const GetAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        return res.json({
            msg: "Clientes encontrados",
            data: clients,
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al encontrar cliente",
            error
        })
    }
}

const getClientById = async (req, res) => {
    try {  
        const { id } = req.params
        const client = await Client.findById(id)
        if(!client){
            return res.status(404).json({
                msg: "No existe este cliente"
            })
        }
        return res.json({
            msg: "Cliente encontrado",
            data:{
                client,
            },
        })
    } catch (error) {
        res.json({
            msg: "No existe cliente",
            error
        })
    }
}

const updateClientById = async (req, res) => {
    try {
        const id = req.params.id
        const client = await Client.findByIdAndUpdate(id, req.body,{ new: true }); 
        return res.json({
            msg: "Cliente Actualizado",
            data: { client: client },
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar cliente",
            error
        })
    }
}

const deleteClientByID = async (req, res) => {
    try {
        const id = req.params.id
        await Client.findByIdAndDelete(id)
        return res.json({
            msg: "Cliente eliminado por Id"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error al borrar cliente por id",
            error
        })
    }
}

export { createClient, GetAllClients, getClientById , updateClientById, deleteClientByID}