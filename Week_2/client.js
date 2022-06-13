// // Client - the computer that connects to a server

// const net = require('net');

// const stdin = process.stdin;


// const credentials = { host: '135.23.132.20', port: 3001 }

// const client = net.createConnection(credentials, () => {
//     console.log("connected to server!!");
// });

// stdin.setEncoding('utf8');
// stdin.on('data', (input) => {
//     // console.log("You Have Written:");
//     // console.log(input);
//     client.write(input);
// });

// to connect to yourself, host should be 'localhost'

// Client - the computer that connects to a server
////
const stdin = process.stdin;
////
const net = require('net');

const credentials = { host: '135.23.132.20', port: 3001 }

const client = net.createConnection(credentials, () => {
    console.log("connected to server!!");
})

///////////
const username = 'dexthefish';
client.write(`His Excellency ${username} has connected.`)
stdin.setEncoding('utf8');
stdin.setEncoding('utf8');
stdin.on('data', (input) => {
    client.write(`${username}: ${input}`);
})


client.setEncoding('utf8');
client.on('data', (data) => {
    console.log("server has sent you data!!")
    console.log(data);
})