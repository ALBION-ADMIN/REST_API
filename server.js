const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoutes = require('./app/routes/registerRoutes');
const loginRoutes = require('./app/routes/loginRoutes');
const keys = require('./app/config/keys');

const app = express();
const port = 3000;

// Conexión a MongoDB Atlas
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
