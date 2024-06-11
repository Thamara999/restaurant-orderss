const mysql = require('mysql');
// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'restaurant'
});
// Función para establecer la conexión con la base de datos
connection.connect((err) => {
 if (err) {
  console.error('Error connecting to the database:', err);
 return
}
  console.log('Connected to the MySQL database.');
});
module.exports = connection;