// const amount=9
// if(amount<10){
//     console.log("small number")
// }
// else{
//     console.log("large number")
// }
// console.log("Hey! It's my first node app!!")

// console.log(__dirname)
const http= require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write("Welcome to our home page")
    res.end()
    }
    if(req.url==='/about'){
        res.end("Here is our short history")
    }
})

server.listen(5000)