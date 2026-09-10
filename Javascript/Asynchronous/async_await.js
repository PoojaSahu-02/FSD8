let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
let h4 = document.querySelector(".h4");
let h5 = document.querySelector(".h5");
let h6 = document.querySelector(".h6");
function chnage(ele, text, color, time) {
  return new Promise((resolve, reject) => {
    if (ele) {
      setTimeout(() => {
        ele.textContent = text;
        ele.style.backgroundColor = color;
          resolve();
      }, time);
    }
    else {
    reject("Element Not found");
    }
  });
}
async function getChnage(){
try{
 await chnage(h1, "heading1", "red", 1000)
 await chnage(h2, "heading2", "blue", 1000)
 await chnage(h3, "heading3", "green", 1000)
 await chnage(h4, "heading4", "pink", 1000)
 await chnage(h5, "heading5", "brown", 1000)
 await chnage(h6, "heading6", "yellow", 1000)
}
catch(err){
    console.log(err)
}
}
getChnage()