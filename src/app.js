let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
let favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.of('/stream').on('connection', stream);

server.listen(3000);

//openssl req -new -newkey rsa:2048 -nodes -out example_com.csr -keyout example_com.key -subj "/C=IN/ST=UP/L=Lucknow/O=virtue/OU=IT/CN=example.com"








// let express = require( 'express' );
// let app = express();
// var fs = require('fs');

// var options = {
//   key: fs.readFileSync('src/private.key'),
//   cert: fs.readFileSync('src/certificate.crt')
// };

// let server = require( 'https' ).Server(options, app );
// let io = require( 'socket.io' )( server );
// let stream = require( './ws/stream' );
// let path = require( 'path' );
// let favicon = require( 'serve-favicon' );


// app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
// app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

// app.get( '/', ( req, res ) => {
//     res.sendFile( __dirname + '/index.html' );
// } );


// io.of( '/stream' ).on( 'connection', stream );

// server.listen( 8080 );
