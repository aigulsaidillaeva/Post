require('dotenv').config();

module.exports = {
  DBSERVER: process.env.DBSERVER,
  DBPORT: process.env.DBPORT,
  DBNAME: process.env.DBNAME,
  DBUSER: process.env.DBUSER,
  DBPASS: process.env.DBPASS,
  DBPG_MAX_CONNECTIONS: process.env.DBPG_MAX_CONNECTIONS,
  DBPG_IDLETIMEOUTMILLLIS: process.env.DBPG_IDLETIMEOUTMILLLIS,
  DBPG_CONNECTIONTIMEOUTMILLES: process.env.DBPG_CONNECTIONTIMEOUTMILLES,
  NODE_ENV: process.env.NODE_ENV,
  SENTRY_DSN: process.env.SENTRY_DSN,
};
