let res = new Promise((resolve,reject)=>{
let no = 13;
if(no%2==0)
    resolve("No is even : promise is resolved")
else
    reject("no is odd : promise rejected")
})
res.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})
