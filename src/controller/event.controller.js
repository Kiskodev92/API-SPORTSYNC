const { pool } = require('../database');

/*Llamar a los deportes*/
const getDeporte = async (req, res) => {

  try{
       let sql = 'SELECT * FROM deporte'
         
      console.log(sql);
      let [result] = await pool.query(sql);
      console.log(result);
      if(result == 0){
       res.send({error:true , codigo: 404, mensaje:'deportes no encontrados'})
      }else{
       res.send({error:false , codigo: 200, mensaje:'deportes encontrados', data:result})
      }
  }
  catch (err){
       console.log(err);
  }
}
/* Agregar evento */

const postAddEvent = async (req, res) => {

try 
{
      
  let sql = "INSERT INTO eventos (id_usuario, id_deporte, titulo, fecha, descripcion, foto)" + 
  "VALUES ('" +  req.body.id_usuario + "', '" +
              req.body.id_deporte + "', '" +
              req.body.titulo + "', '" +
              req.body.fecha + "', '" +
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
    
    let valor = [req.query.titulo]

    let sql = 'SELECT * FROM eventos WHERE titulo = ?'
  
      console.log('evento no encontrado');
    

    console.log(sql);
    let [result] = await pool.query(sql,valor)
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

//Cambiar boton seguido

const postBoton  = async (req, res) => {
  {
    const { id_usuario, id_evento } = req.body;
 
    try 
    {
 
        let sql = "SELECT id_usuario, id_evento FROM usEvent ";
        
        let [result] = await pool.query(sql, [id_usuario, id_evento]);
        console.log(result);
        res.send(result);
 
 }
 catch(err)
 {
     console.log(err);
 }
 }
}


module.exports = {postAddEvent, getEvent, getOne, getDeporte, postBoton};