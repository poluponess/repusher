const http = require('http')
const fetch = require("node-fetch")

http.createServer(async function (req, res) {
    if (req.method == 'POST') {
        var body = ''
        
        req.on('data', function (data) {
            body += data
        });

        req.on('end', async function () {
            console.log("Body:", body)

            if (body.slice(0,39) != "https://api.coingecko.com/api/v3/coins/")  {
                res.end()
                return
            }
            res.write(JSON.stringify(await (await fetch(body)).json()))
            res.end()
        });
    }
    if (req.method == 'POST') {
        res.write("Hola!")
        res.end()
    }
}).listen(process.env.PORT)
console.log("Port:", process.env.PORT)
