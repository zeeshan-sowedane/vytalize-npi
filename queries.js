const Pool = require('pg').Pool
const pool = new Pool({
  connectionString:
    "postgres://vytalize_user:DNAqAch20oNKBGlVT1NerBfccGhkstfT@dpg-cghds6fdvk4ml9u02hsg-a/vytalize_npi",
})


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM npi_details WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {  
  getUserById, 
}