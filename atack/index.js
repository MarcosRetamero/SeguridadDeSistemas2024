const axios = require('axios');

// Datos de inicio de sesión (usuario y contraseña)
const usuarios = [
    'admin@test.com',
    'algo@test.com',
    'prueba@test.com',
    'test@test.com',
    'a@test.com',
    'dd@test.com',
];
const claves = [
    'asdasd',
    '123455667890',
    '123456'
];

usuarios.forEach(user => {
    claves.forEach(clave => {
        const request = {
            name: user,
            password: clave
        };

        axios.put('http://localhost:3000/auth/login', request)
          .then((respuesta) => {
            console.log('Inicio de sesión exitoso');
            console.log(JSON.stringify(request)); // Suponiendo que la API devuelve un token de acceso
          })
          .catch((error) => {
            console.error('Error al iniciar sesión:', error.response.data);
          });
    })

});