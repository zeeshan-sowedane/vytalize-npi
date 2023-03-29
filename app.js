const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const { Client } = require('pg');

const client = new Client({
    user: 'vytalize_user',
    host: 'dpg-cghds6fdvk4ml9u02hsg-a.ohio-postgres.render.com',
    database: 'vytalize_npi',
    password: 'DNAqAch20oNKBGlVT1NerBfccGhkstfT',
    port: 5432,
});

const findRows = async (pattern) => {
  const query = `
            SELECT * FROM "npi_details"
            WHERE  "provider_name"  LIKE 'BILAL';
    `;
    await client.connect();   // creates connection
    try {
        const { rows } =  await client.query(query, [pattern]);  // sends query
        return rows;
    } finally {
        await client.end();   // closes connection
    }
};

findRows('A%') // Ailisa, Andrew
    .then(result => console.table(result))
    .catch(error => console.error(error.stack));


//app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

