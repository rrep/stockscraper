require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: 5432,
})

async function createVendor(vendorName, db) {
    await db.connect();
    const result = db.query(`'insert into Vendors (vendor_name) values ('${vendorName}')'`)
    db.end();
}