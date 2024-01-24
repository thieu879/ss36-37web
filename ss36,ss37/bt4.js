let a = document.getElementById("item1");
let b = document.getElementById("item2");
let d = document.getElementById("item3");
a.addEventListener("input",sum);
b.addEventListener("input",sum);
function sum(){
    d.value = parseInt(a.value) + parseInt(b.value);
}

// cách 2:
function click1(){
    let a = document.getElementById("item1");
    let b = document.getElementById("item2");
    document.getElementById("item3").value= parseInt(a.value) + parseInt(b.value);
}