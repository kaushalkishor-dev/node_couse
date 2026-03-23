const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, rating, location, photoUrl } = req.body;

  const home = new Home(houseName, price, rating, location, photoUrl);
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, rating, location, photoUrl } = req.body;
  const home = new Home(houseName, price, rating, location, photoUrl);
  ((home.id = id), home.save());
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came to delete ", homeId);
  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("error while deleting", error);
    }
    res.redirect("/host/host-home-list");
  });
};
