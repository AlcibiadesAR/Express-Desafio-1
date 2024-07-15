const userDB = require("../db/science");

let heroesController = {
  heroes: function (req, res) {
    let nombresHeroes = userDB.lista.map((heroe) => heroe.nombre);

    return res.render("heroes", {
      title: "Personalidades",
      lista: nombresHeroes,
    });
  },
  detalles: function (req, res) {
    let id = parseInt(req.params.id);
    let heroeID = userDB.lista.find((heroe) => heroe.id === id);

    if (heroeID) {
      return res.render("detalles", {
        title: "Presentación Inicial",
        heroe: heroeID,
      });
    } else {
      return res
        .status(404)
        .send(
          "No encontramos al científico indicado. Por favor, elija otro id"
        );
    }
  },
  biografia: function (req, res) {
    let id = parseInt(req.params.id);
    let heroeID = userDB.lista.find((heroe) => heroe.id === id);

    if (heroeID) {
        let mensaje = req.params.ok === 'ok' ? null : "Lamento que no desees saber más de mí :(";
        return res.render("biografia", {
            title: "Reseña de:",
            heroe: heroeID,
            mensaje: mensaje
        });
    } else {
        return res.status(404).send("No encontramos al científico indicado para mostrar su biografía");
    }
}
}

module.exports = heroesController;
