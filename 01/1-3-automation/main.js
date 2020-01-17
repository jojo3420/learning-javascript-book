

window.addEventListener('load', function (event) {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('canvas'));

  // TODO: 반복 적인 작업 자동화 하기
  for(var x=25; x < 500; x+=50) {
    for(var y=25; y < 500; y+=50) {
      var circle = Shape.Circle(x, y, 25);
      circle.fillColor = 'green';
    }
  }

  paper.view.draw();
});
