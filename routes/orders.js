const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Ruta para manejar la solicitud POST del formulario
router.post('/new', (req, res) => {
const { tableNumber, items } = req.body;

// Verifica si los datos recibidos son válidos
 if (!tableNumber || !items || !Array.isArray(items)) {
    return res.status(400).send('Invalid input');
 }

 // Calcula subtotal y total del pedido
const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
const total = subtotal * 1.10; // Incluye la propina del 10%

// Crea un nuevo pedido utilizando el modelo Order
 Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {
    if (err) {
    return res.status(500).send('Error al crear el pedido');
    }
    res.status(201).send(`Pedido creado con ID: ${orderId}`);// Envia respuesta exitosa con el ID del pedido
  });
});

module.exports = router;