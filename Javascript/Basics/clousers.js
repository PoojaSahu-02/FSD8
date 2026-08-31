let y = 100;
function outer (){
    let x = 10;
    console.log("This is outer function")
    function inner(){
        console.log(`x = ${x} and y = ${y}`)
        console.log("this is inner function")
    }
    inner()
}
outer()