let todoInput = document.getElementById("todo-input")
let btn = document.getElementById("todo-btn")
let ul = document.querySelector(".todo-list")
let editspan = null;

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let inputText = todoInput.value
    if (editspan) {
    editspan.textContent = inputText;
    editspan = null;
    btn.textContent = "Add";
    todoInput.value = "";
    return;
  }
    let inputCheckbox = document.createElement('input')
    let li = document.createElement("li")
    let editBtn = document.createElement("button")
    let delBtn = document.createElement("button")
    let span = document.createElement("span")

    span.textContent = inputText
    inputCheckbox.setAttribute("type","checkbox")
    editBtn.textContent = "Edit"
    delBtn.textContent = "Delete"
    editBtn.classList.add("btn")
    delBtn.classList.add("btn")
    ul.append(li)
    li.append(inputCheckbox,span,editBtn,delBtn)

    inputCheckbox.addEventListener("change",()=>{
        if(inputCheckbox.checked){
            span.style.textDecoration = "line-through"
            span.style.color = "grey"
        }
        else{
            span.style.textDecoration = "none"
            span.style.color = "black"
        }
    })

    delBtn.addEventListener("click",()=>{
        li.remove()
    })

    editBtn.addEventListener("click",()=>{
        todoInput.value = span.textContent
        editspan = span;
        btn.textContent = "Update"
        // li.remove()
    })
    todoInput.value = ""
})

