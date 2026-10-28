const http = require('http')
const PORT = 3000
const server = http.createServer((req,res)=>{
    res.write("Welcome to node js")
    res.end()
})
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


