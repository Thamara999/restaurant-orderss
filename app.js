const express = require('express');
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Se configura EJS como motor de plantillas
app.use(bodyParser.json());
app.use('/orders', ordersRouter);

// Configuración para servir archivos estáticos desde la carpeta 'estilo'
app.use(express.static('estilo'));

app.get('/', (req, res) => {
    res.render('index'); // Renderiza el archivo index.ejs
});

//Se inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});