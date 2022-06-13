const log = console.log;
const https = require("https");

const options = {
  hostname: 'google.com',
  port: '80',

}

const request = https.request(options, (response) => {
  log(response);
  response.on('data', (data) => {
    log(data);
    process.stdout.write(data);
  });
});


request.on('error', (error) => {
  log(error);
});

request.end();