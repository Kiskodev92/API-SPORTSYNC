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
   const { usuario, password } = req.body;

   try 
   {

       let sql = "SELECT id_user, nombre, usuario, email, provincia, foto, descripcion FROM usuario WHERE usuario = ? AND password = ?";
       
       let [result] = await pool.query(sql, [usuario, password]);
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
                      req.body.id_user]

        let sql = "UPDATE usuario SET  nombre = COALESCE(?, nombre) , " + 
                                   "provincia = COALESCE(?, provincia), " +
                                   "descripcion = COALESCE(?, descripcion), " +
                                   "foto = COALESCE(?, foto) WHERE id_user = ?";

        console.log(sql);
        let [result] = await pool.query(sql, params);
        res.send(result); 
    }
    catch(err)
    {
        console.log(err)
    }
}


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



module.exports = {postRegister,postDeporte, postLogin, putUsuario, getproyect};
