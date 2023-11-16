const { pool } = require("../database");

/*Funcion Resgistrar */
const postRegister = async (req, res) =>
{

   try 
   {

       let sql = "INSERT INTO usuario (nombre, usuario, email, password, provincia) " + 
                 "VALUES ('" + req.body.nombre + "', '" +
                               req.body.usuario + "', '" +
                               req.body.email + "', '" +
                               req.body.password + "', '" +
                               req.body.provincia + "')";
       
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

/* Funcion Registar Deporte */
const postDeporte = async (req, res) =>
{

   try 
   {

       let sql = "INSERT INTO deporte (deporte) " + 
                 "VALUES ('" + req.body.deporte + "')";
       
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

/* Funcion Iniciar Sesion */
const postLogin = async (req, res) =>
{
   const { email, password } = req.body;

   try 
   {

       let sql = "SELECT id_usuario, nombre, usuario, email, provincia, ciudad FROM usuario WHERE email = ? AND password = ?";
       
       let [result , data] = await pool.query(sql, [email, password]);
       console.log(result);
       res.send(result);
    

}
catch(err)
{
    console.log(err);
}
}


/*Actualiza la informacion del perfil del usuario */
const putUsuario = async (req, res) =>
{
    try
    {   
        console.log(req.body);
        let params = [req.body.nombre,
                      req.body.provincia,
                      req.body.descripcion,
                      req.body.foto,
                      req.body.id_usuario]

        let sql = "UPDATE usuario SET  nombre = COALESCE(?, nombre) , " + 
                                   "ciudad = COALESCE(?, last_ciudad), " +
                                   "descripcion = COALESCE(?, descripcion), " +
                                   "foto = COALESCE(?, foto) WHERE id_usuario = ?";

        console.log(sql);
        let [result] = await pool.query(sql, params);
        res.send(result); 
    }
    catch(err)
    {
        console.log(err)
    }
}
<<<<<<< HEAD
module.exports = {postRegister, postDeporte, postLogin, putUsuario};
=======


const getproyect = async (req,res) =>{
    
    try{

        let sql = 'SELECT s.titulo, s.fecha, s.descripcion, s.foto FROM eventos AS s INNER JOIN usEvent AS b ON (s.id_eventos=b.id_evento) INNER JOIN usuario AS c ON (b.id_usuario=c.id_usuario) GROUP BY s.titulo, s.fecha, s.descripcion, s.foto'

        console.log(sql);
        let [result] = await pool.query(sql);
        res.send(result); 


    }catch(err){
        console.log(err);
    }
}



module.exports = {postRegister, postLogin, putUsuario, getproyect};
>>>>>>> apiborja
