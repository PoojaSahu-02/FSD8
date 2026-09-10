let promise = fetch ('https://jsonplaceholder.typicode.com/posts')
promise.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data)
})
.catch(err=>{
    console.log(err,"something went wrong")
})