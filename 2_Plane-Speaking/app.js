var xPlanes = [
{
    "name":"X-1",
    "description":"First plane to break the speed of sound",
    "imageURL": "https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Bell_X-1_46-062_(in_flight).jpg"
},
{
  "name":"X-3",
 "description":"Used to test long-duration high-speed flight",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Douglas_X-3_NASA_E-17348.jpg"
},
{
  "name":"X-15",
 "description":"Used for hypersonic high-altitude testing, and was the first manned hypersonic plane with the ability of suborbital space-flight",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:X-15_in_flight.jpg"
},
{
  "name":"X-29",
 "description":"Had forward-swept wings",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Grumman-X29-InFlight.jpg"
},
{
  "name":"X-31",
 "description":"Used thrust vectoring",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Rockwell-MBB_X-31_landing.JPG"
},
{
  "name":"X-37",
 "description":"Reusable orbital spaceplane",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Boeing_X-37B_inside_payload_fairing_before_launch.jpg"
},
{
  "name":"X-45",
 "description":"Unmanned combat plane",
 "imageURL":"https://en.wikipedia.org/wiki/List_of_X-planes#/media/File:Boeing_X-45A_UCAV.jpg"
}
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list");

for(var i in xPlanes) {
  var xPlane = xPlanes[i]
  e.innerHTML =
  "<h1>" +
  xPlane.name +
  "</h1>" +
  "<p>" +
  xPlane.description +
  "</p>" +
  "<img src='" +
  xPlane.imageURL +
  "' height='30%' width='50%'" +
  "</img>"
}
