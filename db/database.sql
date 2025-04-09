CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullName TEXT,
  dob TEXT,
  idCard TEXT,
  address TEXT
);

CREATE TABLE answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  questionId INTEGER,
  answer TEXT,
  FOREIGN KEY(userId) REFERENCES users(id)
);
