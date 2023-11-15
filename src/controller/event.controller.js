const { pool } = require('../database');

/* Agregar evento */

const postAddEvent = async (req, res) => {

try 
{
      
  let sql = "INSERT INTO eventos (id_usuario, desporte_id, titulo, fecha, hora, descripcion, foto)" + 
  "VALUES ('" +  req.body.id_usuario + "', '" +
              req.desporte_id + "', '" +
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


const getEvent = async (req, res) => {

   try{
        let sql = 'SELECT * FROM eventos'
          
       console.log(sql);
       let [result] = await pool.query(sql);
       console.log(result);
       if(result == 0){
        res.send({error:true , codigo: 404, mensaje:'eventos no encontrados'})
       }else{
        res.send({error:false , codigo: 200, mensaje:'eventos encontrados', data:result})
       }
   }
   catch (err){
        console.log(err);
   }
}


module.exports = {postAddEvent, getEvent};