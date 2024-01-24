function caculate(value) {
    document.getElementById("input").value += value;
}

function xoa() {
    document.getElementById("input").value = " ";
}

function plus() {
    let a = document.getElementById("input").value;
    let result =eval(a);
    document.getElementById("input").value = result;
}