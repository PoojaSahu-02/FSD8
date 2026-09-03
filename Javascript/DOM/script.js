//  select the element

// let h3 = document.getElementById("heading3")
// console.log(h3)//single element

// let p = document.getElementsByClassName("para")
// console.log(p)//HTMLCollection

// let h2 = document.getElementsByTagName("h2")
// console.log(h2)//HTMLCollection

// let radioBtn = document.getElementsByName("gender")
// console.log(radioBtn) //Nodelist

// let head3 = document.querySelector('#heading3')
// console.log(head3)

// let p = document.querySelector('.para')
// console.log(p)//Single Element

// let p = document.querySelectorAll('div .para1')
// console.log(p)//NodeList

// change the element
// chnage the content

let h2 = document.querySelector('h2')
// console.log(h2)
console.dir(h2)
// h2.innerText = "Hello,Good Morning"
// h2.innerHTML = "Chnage done by innerHTML"
// h2.textContent = "change by textContent"

// let div = document.querySelector('.container')
// console.log(div)
// console.log(div.innerHTML)
// console.log(div.innerText)
// console.log(div.textContent)
// div.innerHTML = "<h1> this is done by innerHTML"

// chnage the css style
// h2.style.backgroundColor = "gray"
// h2.style.color = "white"

// h2.style = "border:2px solid black;color:white;background-color:black;border-radius:3px;padding:3px"


// add and remove the class


// let p = document.querySelector('.para1')
// console.log(p.classList)
// p.classList.add("xyz")
// console.log(p.classList)
// p.classList.remove("para1")
// console.log(p.classList)
// p.classList.toggle("xyz")
// console.log(p.classList)
// console.log(p.classList.contains("para"))


// change the attribute

// let img = document.querySelector('img')

// let src = img.getAttribute('src')
// console.log(src)

// img.setAttribute("alt","image")

// add and remove the element

// let li = document.createElement('li')
// li.innerText = "Item 1"
// console.log(li)
// li.setAttribute("id","item")
// li.classList.add("list-item")
// let ul = document.querySelector('.list-container .list')
// console.log(ul)

// ul.append(li)
// ul.prepend(li)
// ul.after(li)
// ul.before(li)

// ul.appendChild(li)

let btn = document.querySelector("button")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("btn clicked")
}
)




