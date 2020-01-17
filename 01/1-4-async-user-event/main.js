

window.addEventListener('load', function (event) {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('canvas'));

  // TODO: 사용자 입력 받기 => 비동기적 이벤트
  var tool = new Tool();
  tool.onMouseDown = function(event) {
    // var circle = Shape.Circle(event.point.x, event.point.y, 25);
    // js 의 중요한 기능 => 넘겨받은 매개변수를 바탕으로 추론하는 능력.
    var circle = Shape.Circle(event.point, 25);
    circle.fillColor = 'green';
  };


  paper.view.draw();
});
