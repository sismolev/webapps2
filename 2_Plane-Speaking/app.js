var xPlanes = [
{
    "name":"X-1",
    "description":"First plane to break the speed of sound",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/5/50/Bell_X-1_46-062_%28in_flight%29.jpg"
},
{
  "name":"X-3",
 "description":"Used to test long-duration high-speed flight",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/3/32/Douglas_X-3_NASA_E-17348.jpg"
},
{
  "name":"X-15",
 "description":"Used for hypersonic high-altitude testing, and was the first manned hypersonic plane with the ability of suborbital space-flight",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/d/d6/X-15_in_flight.jpg"
},
{
  "name":"X-29",
 "description":"Had forward-swept wings",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/9/91/Grumman-X29-InFlight.jpg"
},
{
  "name":"X-31",
 "description":"Used thrust vectoring",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/8/80/Rockwell-MBB_X-31_landing.JPG"
},
{
  "name":"X-37",
 "description":"Reusable orbital spaceplane",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ee/Boeing_X-37B_inside_payload_fairing_before_launch.jpg"
},
{
  "name":"X-45",
 "description":"Unmanned combat plane",
 "imageURL":"https://upload.wikimedia.org/wikipedia/commons/b/b1/Boeing_X-45A_UCAV.jpg"
}
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list");

for(var i in xPlanes) {
  var xPlane = xPlanes[i]
  e.innerHTML +=
  "<h2>" +
  xPlane.name +
  "</h2>" +
  "<p>" +
  xPlane.description +
  "</p>" +
  "<img src='" +
  xPlane.imageURL +
  "' width='500px'/>";
}
