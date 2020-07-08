const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });

try{
      db.connect();
  }catch(err){
      console.log(err);   
  }

//---- Create Database ----//
// let query = "create database cuentas";
// db.query(query, err =>{
//     if (err) console.log(err);
//     console.log('Database created');
// })

// Create Table //
// const query = "create table posts(id int auto_increment, title varchar(20), content varchar(200), primary key (id))";
// db.query(query, err =>{
//     if (err) console.log(err);
//     else console.log('Table created');
// })

//Insert 
// const query = "insert into posts (title,content) values('ULtimo blog de prueba','Esto es un contenido de blog. Pertenece al blog de prueba con id 1')";
// db.query(query, err =>{
//     if (err)console.log(err);
//     else console.log('Se agrego otro post')
// });

// consult
// db.query('SELECT * FROM `posts`', function (error, posts) {
//     for(post of posts){
//         console.log(`-------ID = ${post.id} --------`);
//         console.log(`title: ${post.title}`);
//         console.log(`constent: ${post.content}`);
//         console.log('-----------------------------');
//     }
    
// });

db.query('select * from usuarios',(err,usuarios)=>{
    for (usuario of usuarios){
        console.log(`------User id: ${usuario.id}-------`);
        console.log(`Nombre: ${usuario.nombre}`);
        console.log(`Apellido: ${usuario.apellido}`);
        console.log(`Email: ${usuario.apellido}`);
    }
});




db.end();