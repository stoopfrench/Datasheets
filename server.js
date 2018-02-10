const express = require('express')
const request = require('request')
// const HTTP = require('http')
// const HTTPS = require('https')
// const fs = require('fs')
const fetch = require('node-fetch')

const app = express()

const secrets = require('./secrets.js')

app.use(express.static('./public'))

//FILES =========================================

app.get('/', (req, res) => {

    res.sendFile('./public/html/index.html', { root: './' })
})


//REQUESTS ======================================

const Octokey = secrets.OctopartKey

app.get('/search', (req, res) => {

    console.log(req.query)

    const searchUrl = `http://octopart.com/api/v3/parts/search?callback=&apikey=${Octokey}&q=${req.query.q}&start=0&limit=${req.query.limit}&include[]=datasheets`
    request(searchUrl, function(err, response, data) {

        if (err) { res.send(err) }

        res.send(data)
    })
})


//EXPRESS SERVER --------------------------------

const port = 8080;

app.listen(port, () => {

    console.log('Datasheets running on', port)
})

//HTTP/HTTPS Server -----------------------------
/*var httpsKey = secrets.httpsKey
var httpsCert = secrets.httpsCert

try {
    var httpsConfig = {

        key: fs.readFileSync(httpsKey),
        cert: fs.readFileSync(httpsCert),
    }

    var httpsServer = HTTPS.createServer(httpsConfig, app)

    httpsServer.listen(443)

    var httpApp = express()

    httpApp.use(function(req, res, next){

        res.redirect('https://example.com' + req.url)
    })

    httpApp.listen(80)
}
catch(e){

    console.log(e)

    console.log('could not start HTTPS server')

    var httpServer = HTTP.createServer(app)

    httpServer.listen(80)
}*/