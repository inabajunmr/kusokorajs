function addImage(canvas, url) {
  fabric.Image.fromURL(url, function(oImg) {
    oImg.scale(0.5);
    canvas.add(oImg);
  });
}
