function check(){
    let a = document.getElementById("id").value;
    let b = document.getElementById("name").value;
    let c = document.getElementById("age").value;
    let d = document.getElementById("phone").value;
    let e = document.getElementById("email").value;
    if(a.length > 6 && b.length > 0 && c >= 18 && d.length == 10 && e.includes("@gmail.com")){
        alert("hop le");
    }else{
        alert("sai roi");
    }
}

