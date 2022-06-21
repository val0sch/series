const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "user";

  getUserByEmail(email) {
    return this.connection.query(`SELECT * FROM user WHERE email = ?`, [email]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${AdminManager.table} (email, password, name, firstname, role) values (?, ? , ? , ? , ?)`,
      [user.email, user.password, user.name, user.firstname, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${AdminManager.table} set email = ?, password = ?, name = ?, firstname = ?, role = ? where id = ?`,
      [user.email, user.password, user.name, user.firstname, user.role, user.id]
    );
  }
}

module.exports = AdminManager;
