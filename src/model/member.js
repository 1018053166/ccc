module.exports = class extends think.Model {
  createTable() {
    this.execute(`
      CREATE TABLE IF NOT EXISTS member (
        id	INTEGER,
        name	TEXT UNIQUE,
        email	TEXT,
        status	INTEGER,
        PRIMARY KEY(id)
      );
    `);
  }
};
