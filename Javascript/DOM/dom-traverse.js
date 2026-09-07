let doc = document.getRootNode()
let child = doc.childNodes
// console.log(child)
let html = child[1]
// console.log(html)
// console.log(html.childNodes[2])
let body = html.childNodes[2]
// console.log(body.childNodes)
// console.log(body.children)
let div = body.children[0]
console.log(div.children)
// let h3 = div.children[2]
// console.log(h3.parentNode.parentNode)
// console.log(h3.nextSibling.nextSibling)
// console.log(h3.nextElementSibling)
// console.log(h3.previousSibling.previousSibling)
// console.log(h3.previousElementSibling)