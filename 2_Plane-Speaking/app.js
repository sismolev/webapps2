var xPlanes = {
  "X-1":"First plane to break the speed of sound",
  "X-3":"Used to test long-duration high-speed flight",
  "X-15":"Used for hypersonic high-altitude testing, and was the first manned hypersonic plane with the ability of suborbital space-flight",
  "X-29":"Had forward-swept wings",
  "X-31":"Used thrust vectoring",
  "X-37":"Reusable orbital spaceplane",
  "X-45":"Unmanned combat plane"
};

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list");

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  e.innerHTML += "<li>" +
  xPlane +
  "</li>";

  //What does "i" refer to?
  // Do some things to add <li> elements to our empty list.
}
