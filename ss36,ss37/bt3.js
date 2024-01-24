// cách 1:
function input1(){
    let a = document.getElementById("inputt").value;
    document.getElementById("div").innerHTML = "Ban da nhap:"+a;
}

// Cách 2:
let a = document.getElementById("inputt");
let b = document.getElementById("div");
a.addEventListener("input",function(){
    let c = a.value;
    b.textContent = "Ban da nhap:"+c;
});
