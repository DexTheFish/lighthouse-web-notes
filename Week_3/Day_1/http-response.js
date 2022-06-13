const log = console.log;
const greeting = "Hello from DexTheFish\n"
const PORT = 8000;
const http = require('http');


const server = http.createServer((request, response) => {
  log(
    Date(),
    ' Request received: ',
    request.method,
    request.url
    );
    response.end(greeting);
})

server.listen(PORT, () => {
  log('listening on port ' + PORT);
})