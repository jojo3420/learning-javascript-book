

window.addEventListener('load', function (event) {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('canvas'));

  // TODO: 원 그리기
  var c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';

  paper.view.draw();
});
