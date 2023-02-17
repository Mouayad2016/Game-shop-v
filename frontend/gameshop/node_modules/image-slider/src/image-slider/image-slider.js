//shim
require("document-register-element");

//element setup
var template = require("./_template.html");
require("./image-slider.less");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {

  var images = this.querySelectorAll("img");
  this.innerHTML = template();
  this.querySelector(".first").appendChild(images[0]);
  this.querySelector(".second").appendChild(images[1]);
  images[0].setAttribute("draggable", "false");
  images[1].setAttribute("draggable", "false");

  var first = this.querySelector(".first");
  var container = this;
  var slider = this.querySelector(".slider");

  var resizeable = function(e, transition) {
    e.preventDefault();
    var bounds = e.target.getBoundingClientRect();
    var x;
    if (e.touches) { 
      x = e.touches[0].pageX - bounds.left;
    } else { 
      x = e.pageX - bounds.left;
    }

    var width = first.parentElement.clientWidth;

    if (x <= 3.5) {
      x = 3.5;
    }
    else if (x > width) {
      x = width;
    }
    else {
      x;
    }

    slider.style.transition = "";
    slider.style.left = x-2.5 + "px";
    first.style.transition = "";
    first.style.width = x + "px";
  };

  var resizeme = function(e) {
    e.preventDefault();
    var bounds = e.target.getBoundingClientRect();
    var x;
    if (e.touches) { 
      x = e.touches[0].pageX - bounds.left;
    } else { 
      x = e.pageX - bounds.left;
    }

    if (x <= 3.5) {
      x = 3.5;
    }
    else {
      x;
    }

    slider.style.transition = "left 0.5s";
    slider.style.left = x-2.5 + "px";
    first.style.transition = "width 0.5s";
    first.style.width = x + "px";
  };

  container.addEventListener("mousedown",resizeme);
  container.addEventListener("touchstart",resizeme);
  container.addEventListener("mousedown", function(e) {
    e.preventDefault();
    container.addEventListener("mousemove", resizeable);
  });
  container.addEventListener("touchstart", function(e) {
    e.preventDefault();
    container.addEventListener("touchmove", resizeable);
  });
  container.addEventListener("mouseup", function() {
    container.removeEventListener("mousemove", resizeable);
  });
  container.addEventListener("touchend", function() {
    container.removeEventListener("touchmove", resizeable);
  });

  var resize = function() {
    var width = container.getBoundingClientRect().width;
    container.querySelector(".first img").style.maxWidth = width + "px";
  };
  
  resize();
  window.addEventListener('resize', resize);

};

proto.attachedCallback = function() {};
proto.detachedCallback = function() {};
proto.attributeChangedCallback = function() {};

try {
  document.registerElement("image-slider", { prototype: proto });
} catch (e) {
  console.error("<image-slider> has already been registered.")
}