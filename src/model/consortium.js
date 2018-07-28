module.exports = class extends think.Model {
  createTable() {
    this.execute(`
      CREATE TABLE IF NOT EXISTS consortium (
        id	INTEGER,
        chain_id	INTEGER,
        network_id	INTEGER,
        rpc_port INTEGER,
        coinbase TEXT,
        corsdomain TEXT,
        datadir TEXT,
        PRIMARY KEY(id)
      );
    `);
  }
};