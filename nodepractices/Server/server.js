const http = require('http');
const port = 3001;
const hostname = 'localhost';
const server = http.createServer((req,res) => {
  console.log('request URL',req.url)
  console.log('request method', req.method)
});
server.listen(port,()=>{
  console.log(`listenring on port ${port}`)
})