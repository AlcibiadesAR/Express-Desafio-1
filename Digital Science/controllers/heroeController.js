const userNameDB = require('../db/science'); 

let heroesController = {
    heroes: function (req, res) {
        let nombresHeroes = userNameDB.lista.map(heroe => heroe.nombre);
        
        return res.render('heroes', { 
            title: "Lista de Héroes", 
            lista: nombresHeroes 
        });
    },
};

module.exports = heroesController;
