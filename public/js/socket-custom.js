var socket = io();
// los "on" son para escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Los "emit" son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'José Fiascaro',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
})