const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 5000
app.get('/cool', (req, res) => res.send(cool()))
app.listen(port)
console.log('server started ' + port)