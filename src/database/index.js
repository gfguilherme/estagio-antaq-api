const knex = require("knex");
require("dotenv").config();

const config = {
  client: "mssql",
  connection: {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {},
  seed: {
    directory: `${__dirname}/src/database/seeds`,
  },
};

module.exports = {
  outorgaDB: knex({
    ...config,
    connection: {
      ...config.connection,
      database: "DBPRDOutorga",
    },
  }),
  extensaoControleDB: knex({
    ...config,
    connection: {
      ...config.connection,
      database: "DBExtensaoControleGPO",
    },
  }),
  arrendamentoV2DB: knex({
    ...config,
    connection: {
      ...config.connection,
      database: "DBPRDArrendamentoV2",
    },
  }),
  corporativoDB: knex({
    ...config,
    connection: {
      ...config.connection,
      database: "DBPRDCORPORATIVO",
    },
  }),
};
