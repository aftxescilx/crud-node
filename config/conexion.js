var mysql= require("mysql");
var con= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'institutojeffersonian'
});
con.connect(
    (err)=>{
        if (!err) {
            console.log('Conexión establecida');
        }else{
        console.log('Error de conexión');
        }
    }
);
module.exports=con;