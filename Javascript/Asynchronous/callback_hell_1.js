let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
let h4 = document.querySelector(".h4");
let h5 = document.querySelector(".h5");
let h6 = document.querySelector(".h6");
setTimeout(() => {
  h1.textContent = "heading1";
  h1.style.backgroundColor = "red";
  setTimeout(() => {
    h2.textContent = "heading2";
    h2.style.backgroundColor = "blue";
    setTimeout(() => {
      h3.textContent = "heading3";
      h3.style.backgroundColor = "green";
      setTimeout(() => {
        h4.textContent = "heading4";
        h4.style.backgroundColor = "pink";
        setTimeout(() => {
          h5.textContent = "heading5";
          h5.style.backgroundColor = "yellow";
          setTimeout(() => {
            h6.textContent = "heading6";
            h6.style.backgroundColor = "brown";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
