const fs = require('node:fs')
fs.readFile('notes.txt',(err,data)=>{
  if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})
fs.writeFile('abc.txt',"hello",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("content added")
    }
})
fs.appendFile('notes.txt',"this is new data",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(" data updated")
    }
})
fs.unlink('abc.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(" file deleted")
    }
})


