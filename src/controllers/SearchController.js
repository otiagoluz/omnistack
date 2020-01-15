const Dev = require('../models/Dev')


module.exports = {
    async index(request, response) {
        console.log(request.query);
        
        //Buscar todos os devs num raio 10km
        //Buscar tecnologias
        return response.json({ devs: [] })
    }
}