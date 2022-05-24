var arr = "2019-05-29 18:06:00".split(/[- :]/);
var box = document.getElementsByClassName("textCon")[0];
function init() {
  var e = box.offsetWidth;
  var a = parseInt((e / 50) * 5);
  for (var c = 0; c < a; c++) {
    var d = parseInt(ran(60, 120) / 10);
    var b = document.createElement("div");
    b.classList.add("item");
    b.style.width = d + "px";
    b.style.height = d + "px";
    b.style.left = ran(0, 95) + "%";
    b.style.top = ran(20, 80) + "%";
    b.style.animationDelay = ran(0, 30) / 10 + "s";
    box.appendChild(b);
  }
}
function ran(b, a) {
  b = parseInt(b);
  a = parseInt(a);
  return Math.floor(Math.random() * (a - b + 1)) + b;
}
init();
