const express = require('express');

const PORT = 3030;
const app = express();

app.get('/', (req, res) => {
  res.write(`
  <!DOCTYPE html>
  <html>
    home page
  </html>
  `)
  res.send();
})

app.get('/about', (req, res) => {
  res.write(`
  <!DOCTYPE html>
  <html>
    about page
  </html>
  `)
  res.send();
})

// middleware
app.use((req, res, next) => {
  console.log(req.method,req.url, Date());
  next();
})


app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})