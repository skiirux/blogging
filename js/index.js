'use Strict'
const modal = document.getElementById("myModal");
const Btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
Btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById("myModal1");
var Btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
Btn1.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
var modal2 = document.getElementById("myModal2");
var Btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
Btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
