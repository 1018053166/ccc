module.exports = class extends think.Model {
  createTable() {
    this.execute(`
      CREATE TABLE IF NOT EXISTS message (
        id	INTEGER,
        producer	TEXT,
        type	INTEGER,
        content	TEXT,
        create_time	TEXT,
        PRIMARY KEY(id)
      );
    `);
  }
};
