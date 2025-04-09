const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./survey.db');

class UserModel {
  static initializeDB() {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          fullName TEXT,
          dob TEXT,
          idCard TEXT,
          address TEXT
        )
      `);
      db.run(`
        CREATE TABLE IF NOT EXISTS answers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER,
          questionId INTEGER,
          answer TEXT,
          FOREIGN KEY(userId) REFERENCES users(id)
        )
      `);
    });
  }

  static createUser(userData, callback) {
    const { fullName, dob, idCard, address } = userData;
    db.run(
      `INSERT INTO users (fullName, dob, idCard, address) VALUES (?, ?, ?, ?)`,
      [fullName, dob, idCard, address],
      function(err) {
        callback(err, this.lastID);
      }
    );
  }

  static saveAnswer(userId, questionId, answer, callback) {
    db.run(
      `INSERT INTO answers (userId, questionId, answer) VALUES (?, ?, ?)`,
      [userId, questionId, answer],
      callback
    );
  }
}

UserModel.initializeDB();
module.exports = UserModel;
