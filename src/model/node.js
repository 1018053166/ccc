module.exports = class extends think.Model {
  createTable() {
    this.execute(`
      CREATE TABLE IF NOT EXISTS node (
        id	INTEGER,
        info	TEXT,
        member_id	INTEGER,
        PRIMARY KEY(id)
      );
    `);
  }
};
