const { pool } = require('../database');

/* Agregar evento */

const postAddEvent = async (req, res) => {

try 
{
      
    let sql = "INSERT INTO eventos (id_usuario, titulo, fecha, hora, descripcion, foto)" + 
                                    "VALUES ('" +  req.body.id_usuario + "', '" +
                                                req.body.titulo + "', '" +
                                                req.body.fecha + "', '" +
                                                req.body.hora + "', '" +
                                                req.body.descripcion + "', '" +
                                                req.body.foto + "')";


  
    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);
                                         
    if (result.insertId)
    res.send(String(result.insertId));
                                         
    else
        res.send("-1");
}
catch(err)
        {
          console.log(err);
        }
}

module.exports = {postAddEvent};