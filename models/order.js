const db = require('../db/connection');

// Esta función crea un nuevo pedido en la base de datos
const createOrder = (tableNumber, items, subtotal, total, callback) => {
const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';

// En esta seccion ejecuta la consulta SQL con los parámetros proporcionados
 db.query(sql, [tableNumber, JSON.stringify(items), subtotal, total], (err, result) => {
    if (err) {
       return callback(err);
    }
     callback(null, result.insertId);// Llama al callback con el ID del pedido insertado
  });
 };
 
module.exports = {
   createOrder
};