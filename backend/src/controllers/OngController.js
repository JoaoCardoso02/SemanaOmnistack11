const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        // const params = request.query.name QUERYS URL, EX. ...&name=3
        // const params = request.params IDENTIFICAÇÃO DE RECURSOS, EX. .../1
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}