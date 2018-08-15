module.exports = class extends think.Model {
  createTable() {
    this.execute(`
      CREATE TABLE IF NOT EXISTS block (
        id	INTEGER,
        high	INTEGER UNIQUE,
        timestamp	TEXT,
        node	TEXT,
        gasused	TEXT,
        gaslimit	TEXT,
        PRIMARY KEY(id)
      );
    `);
  }
};
