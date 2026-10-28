const url = require('node:url')

// let obj = url.parse('https://www.google.com/search?q=url+module+in+node+js&name=john')
// console.log(obj)
let format = url.format('https://www.google.com/search?q=url+module+in+node+js&name=john')
console.log(format)


