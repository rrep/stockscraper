require('dotenv').config();

const Client = require('pg').Client
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: 5432,
})

async function createVendor(vendorName, client) {
    const db =  await client.connect();
    const result = await db.query(`'insert into Vendors (vendor_name) values ('${vendorName}')'`, (err, res) => {
        console.log(err, res)
        db.end();
    });
}