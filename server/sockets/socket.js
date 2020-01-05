const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', { data });

        //comentado para probar el broadcasting
        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!!!'
        //     });
        // }

    })
});