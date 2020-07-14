const hp = require('http');
const queryString = require('querystring')

let statusCode = new Array()
statusCode[0] = 201
statusCode[1] = 202
statusCode[2] = 203
statusCode[3] = 401
statusCode[4] = 402

let postData = new Array()

for (let i = 0; i < 5; i++){
    postData[i] = queryString.stringify({
        statuscodes: statusCode[i]
    })
}

for (let i = 0; i < 5; i++){
    options = {
        hostname: 'localhost',
        port: '6868',
        path: '/' + postData[i],
        method: 'POST',
        headers: {
            "Content-Type": 'application/x-www-form-application',
            "Content-Length": postData.length
        }
    }

    let req = hp.request(options, (res) => {
        console.log("Status code: " + res.statusCode);
        console.log("Headers: " + JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on("data", (chunk) => {
            console.log('Body: ' + chunk);
        })
    })

    req.on('error', (error) => {
        console.log('Has an error...');
    })
    
    req.end();
}