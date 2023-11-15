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

// MOSTRAT EVENTOS EN HOME
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


// MOSTRAR EL EVENTO ELEGIDO EN EXPLORE
const getOne = async (req, res) => {
  
  try{
    
    let sql;

     sql = 'SELECT * FROM eventos WHERE titulo = '+req.query.titulo
  
      console.log('evento no encontrado');
    

    console.log(sql);
    let [result] = await pool.query(sql)
    console.log(result);
    if(result.length == 0){
      res.send({error:true, codigo:404, mensaje:'evento no encontrado'})
    }else{
      res.send({error:false, codigo:200, mensaje:'evento encontrado', data:result})
    }
  }catch(err){
    console.log(err);
  }
}

module.exports = {postAddEvent, getEvent, getOne};