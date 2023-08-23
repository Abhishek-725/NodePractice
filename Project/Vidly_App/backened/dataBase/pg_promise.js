const pgsql = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: `${process.env.DATABASE_NAME}`,
    user: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    max: 30 // use up to 30 connections
    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgsql(cn);

module.exports = db;