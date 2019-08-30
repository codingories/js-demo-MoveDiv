var div1 = document.createElement("div");
div1.className = "demo";
document.body.appendChild(div1);
div1.style.top = "0";
div1.style.left = "0";

var dragging = false;

var lastX;
var lastY;

div1.onmousedown = function(e) {
  lastX = e.clientX;
  lastY = e.clientY;
  dragging = true;
};

document.onmousemove = function(e) {
  // 既不是放div，移动太快会出bug,也不是放document.body上，因为放body上body范围会有问题
  if (dragging === true) {
    var deltaX = e.clientX - lastX;
    var deltaY = e.clientY - lastY;
    var top = parseInt(div1.style.top) || 0;
    var left = parseInt(div1.style.left) || 0;
    var resultY = top + deltaY;
    var resultX = left + deltaX;
    if (resultY < 0) {
      resultY = 0;
    }
    if (resultX < 0) {
      resultX = 0;
    }
    div1.style.top = resultY + "px";
    div1.style.left = resultX + "px";
    lastX = e.clientX;
    lastY = e.clientY;
  }
};

document.onmouseup = function() {
  dragging = false;
};
