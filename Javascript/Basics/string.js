let str = "good morning"
console.log(str,typeof(str))
console.log("length = "+str.length)
// console.log(str[0])

str = str.trim()
console.log("length = "+str.length)

console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.charAt(0))
console.log(str.charCodeAt(0))

// ASCII 
// A-Z = 65 - 90
// a-z = 98-122
// 0-9 = 48-57
// space =32

console.log(str.concat("hii"))
console.log(str.includes("morning",10))
console.log(str.indexOf('m',5))
console.log(str.lastIndexOf('g'))
console.log(str.repeat(10))
console.log(str.startsWith("hello"))
console.log(str.endsWith("ing"))
console.log(str.replace("good","bad"))
console.log(str.replaceAll("good morning","abc"))
console.log(str.slice(5,12))
console.log(str.substring(5,12))
console.log(str.search("morning"))



// template literals (string templating)
// console.log("Hello Everyone "+str)
console.log(`Hello Everyone ${str}`)