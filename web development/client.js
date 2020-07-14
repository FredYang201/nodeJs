const hp = require('http');

// options = {
//     hostname: 'localhost',
//     port: '6868',
//     path: '/',
//     method: 'POST'
// }

// let req = hp.request(options, (res) => {
//     console.log("Status code: " + res.statusCode);
//     console.log("Headers: " + JSON.stringify(res.headers));
//     res.setEncoding('utf-8');
//     res.on("data", (chunk) => {
//         console.log('Body: ' + chunk);
//     })
// })

// req.on('error', (error) => {
//     console.log('Has an error...');
// })

// req.end();

// *************************************
// *************************************
// get
let req = hp.get("http://127.0.0.1:6868/?name=fred&pwd=12345678", (res) => {
    
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