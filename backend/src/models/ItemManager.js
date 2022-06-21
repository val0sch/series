const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "serie";

  insert(serie) {
    return this.connection.query(
      `insert into ${ItemManager.table} (title, release_date, country, picture, rate, genre) values (?, ? , ? , ? , ?, ?)`,
      [
        serie.title,
        serie.release_date,
        serie.country,
        serie.picture,
        serie.rate,
        serie.genre,
      ]
    );
  }

  update(serie) {
    return this.connection.query(
      `update ${ItemManager.table} set title = ?, release_date = ?, country = ?, picture = ?, rate = ?, genre = ? where id = ?`,
      [
        serie.title,
        serie.release_date,
        serie.country,
        serie.picture,
        serie.rate,
        serie.genre,
        serie.id,
      ]
    );
  }
}

module.exports = ItemManager;
