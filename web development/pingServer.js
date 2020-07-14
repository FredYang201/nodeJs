const http = require('http');

function serverPing(url, port) {
    options = {
        hostname: 'localhost',
        port: 6868,
        path: '/',
        method: 'POST'
    }

    http.get(options, (res) => {
        if (res.statusCode === 200){
            console.log('This website is up...')
        } else {
            console.log('This website is down...')
        }
    }).on('error', (error) => {
        console.log('Error...')
    })
}

setInterval(serverPing, 2000);