
// Loads Elements on html load
window.onload=JsItems();

function theDomHasLoaded(e) {

  // do something with the images
  const Pictires = document.querySelectorAll("img");
  Pictires.loading = "lazy";
}

  //creates slideshow and lazy loads images
  
  var i = 0;
  function change_image(){
  const pics = document.getElementById("slideshow");
  pics.src = "/Images/SlideShow/img"+(i++ % 3)+".jpg";
  pics.loading = "lazy";
  //const Image1 = document.getElementById("Image_One");
 // Image1.loading = "lazy";
  
  //const Image2 = document.getElementById("Image_Two");
  //Image2.loading = "lazy";
}





function JsItems(){
  setInterval(change_image, 5000);
}