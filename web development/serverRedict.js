const http = require('http');
const { read } = require('fs');

http.createServer((req, res) => {
    console.log('This is the 8686 port...')

    res.write('<p>8686</p>')
    res.end
}).listen('8686', () => {
    console.log('I am listening 8686 port...')
})