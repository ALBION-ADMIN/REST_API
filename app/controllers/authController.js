const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/user');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Busca el usuario en la base de datos
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Genera un token JWT
        const token = jwt.sign({ username }, keys.secretKey);

        // Devuelve el token en la respuesta
        res.json({ token });
    } catch (error) {
        console.error('Error al buscar usuario en la base de datos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        const newUser = new User({ username, password });
        await newUser.save();

        // Generar un token JWT
        const token = jwt.sign({ username }, keys.secretKey);

        // Devolver el token en la respuesta
        res.status(201).json({ message: 'Usuario registrado exitosamente', token });
    } catch (error) {
        console.error('Error al registrar usuario en la base de datos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};