import Joi from "joi"
/**
 * 1.- Un schema de jou
 * 2.- Validar en un try catch
 */

//Next es un callback y llamara al siguiente middleware

const createClientSchema = Joi.object({
    // Campos a validar
    name: Joi.string().required(),
    birthday: Joi.date().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    addresses: Joi.string().required,
    references: Joi.string().required
    
})
export default  async (req, res, next) => {
    try {
        //TODO: Validacion
       await createClientSchema.validateAsync(req.body)
       next()
    } catch (error) {
        return res.status(400).json({
            msg: "Error de validacion",
            error
        })
    }

}