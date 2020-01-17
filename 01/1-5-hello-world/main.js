

window.addEventListener('load', function (event) {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('canvas'));

  // TODO: hello world
  var circle = Shape.Circle(200, 200, 60);
  circle.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';


  paper.view.draw();
});
