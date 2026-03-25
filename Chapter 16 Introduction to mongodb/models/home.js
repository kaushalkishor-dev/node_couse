const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, rating, location, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    const db = db.getDB();
    return db.collection('homes').insertOne('this');
  }

  static fetchAll(promise) {
  }

  static findById(homeId) {
  }

  static deleteById(homeId) {
  }
};
