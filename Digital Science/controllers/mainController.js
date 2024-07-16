let main = {
  home: function (req, res, next) {
    return res.render("index", { title: "Digital Science" });
  },
  credito: function (req, res) {
    return res.render("credito", { title: "Sobre Mí" });
  }
};

module.exports = main;
