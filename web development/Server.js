const hp = require('http');
const url = require('url')
const qs = require('querystring')


// hp.createServer((req, res) => {
//     res.writeHead(301, {
//         Location: 'http://localhost:8686'
//     });

//     res.write('<h1>My title，你好</h1>');
//     res.write("<p>This is a paragraph...</p>")
//     res.end();

// }).listen(6868, () => {console.log('I am listening...')});


// ***********************************************
// Testing headers
// hp.createServer((req, res) => {
//     console.log(req.url)
//     var status = req.url.substr(1);
//     var status_code = status.substring(12);
//     if (!hp.STATUS_CODES[status_code]) {
//         status_code = '404'
//     }

//     res.writeHead(status_code, {'Content-type': 'text/plain'});
//     res.end(hp.STATUS_CODES[status_code]);

// }).listen(6868, () => {console.log('I am listening...')});



// ***********************************************
// Testing get method
// hp.createServer((req, res) => {
    
//     let query = url.parse(req.url).query;
//     console.log(query)

//     let qs_query = qs.parse(query)
//     console.log(qs_query)

//     res.end(JSON.stringify(qs_query));

// }).listen(6868, () => {console.log('I am listening...')});



// ***********************************************
// Testing multiple pages
hp.createServer((req, res) => {

    let pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.write('<h1>My Home，你好</h1>');
        res.end();

    } else if (pathname === '/about') {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.write('<h1>My About，你好</h1>');
        res.end();

    } else if (pathname === '/redirect') {
        res.writeHead(301, {
            Location: '/'
        })
        res.write('<h1>My Home，你好</h1>');
        res.end();
        
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('Error page')
        res.end();
    }

}).listen(6868, () => {console.log('I am listening...')});