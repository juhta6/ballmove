tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true
}).open();

//---------------------------------------------------------------------------------------------------------------------------
var wh = 64;
var corner = wh/2;
var num = 0;

var y = "";
var x = "";

setInterval(stop, 50);

new tabris.Composite({
  layoutData: {centerX: 0, centerY: 0, height: wh, width: wh},
  background: "black",
  cornerRadius: corner,
  highlightOnTouch: true
}).on("touchmove", function(widget, event){
	xy("touchmove", event);
	widget.set({layoutData: {top: y-wh/2, left: x-wh/2, height: wh, width: wh}});
    num++;
  if (num == 1){
  widget.animate({transform: {scaleY: 1.2, scaleX: 1.2}},{reverse: true, repeat: 1, duration: 500, easing: "ease-in-out"});
  }
}).on("touchstart", function(widget, event){
  num++;
  if (num == 1){
  widget.animate({transform: {scaleY: 1.75, scaleX: 1.75}},{reverse: true, repeat: 1, duration: 500, easing: "ease-in-out"});
  }
}).on("animationend", function(widget, event){
  num = 0
}).appendTo(page);

var text = new tabris.TextView({
  layoutData: {right: 5, top: 5}
}).appendTo(page);

var xy = function(prefix, event, widget) {
  text.set("text", (x = Math.round(event.touches[0].pageX)) + " X " + (y = Math.round(event.touches[0].pageY)));
  stop(widget)
;};

function stop(widget) {
  if (x > screen.width - (wh/2)) {
  x = x - (wh/2)
} else if (x < (wh/2)){
  x = x + (wh/2)
} else if (y > screen.height - (wh/2)){
  y = y - (wh/2)
} else if (y < (wh/2)){
  y = y + (wh/2)
}
}
