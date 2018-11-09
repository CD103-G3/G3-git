const circle1 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '0',
  top: '-45',
  stroke: '#44433f',
  strokeWidth: {35:0},
  fill: 'transparent',
  radius: {0: 40},
  opacity: 0.2,
  duration: 750,
  easing: mojs.easing.bezier(0, 1, 0.5, 1)
});

const circle2 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '40',
  top: '-60',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 20},
  opacity: 0.2,
  duration: 500,
  delay: 100,
  easing: mojs.easing.sin.out
});

const circle3 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '-10', 
  top: '-80',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 10},
  opacity: 0.5,
  duration: 500,
  delay: 180,
  isRunLess: true,
  easing: mojs.easing.sin.out
});

const circle4 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '-70', 
  top: '-10',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 20},
  opacity: 0.3,
  duration: 800,
  delay: 240,
  easing: mojs.easing.sin.out
});

const circle5 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '80', 
  top: '-50',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 20},
  opacity: 0.4,
  duration: 800,
  delay: 240,
  easing: mojs.easing.sin.out
});

const circle6 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '20', 
  top: '-100',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 15},
  opacity: 0.2,
  duration: 1000,
  delay: 300,
  easing: mojs.easing.sin.out
});

const circle7 = new mojs.Shape({
  className: 'a',
  type: 'circle',
  left: '-40', 
  top: '-90',
  stroke: '#44433f',
  strokeWidth: {5:0},
  fill: 'transparent',
  radius: {0: 25},
  opacity: 0.4,
  duration: 600,
  delay: 330,
  easing: mojs.easing.sin.out
});

const trash_timeline = new mojs.Timeline({ speed: 0.5 });

trash_timeline.add(circle1, circle2, circle3, circle4, circle5, circle6, circle7);

var trash_icon = document.querySelectorAll('.trash_icon');
var a = document.querySelectorAll('.a');

for(i=0; i<trash_icon.length; i++){
  trash_icon[i].addEventListener( 'click', function (e) {

    for(j=0; j<a.length; j++){
      // alert(a[j]);
      a[j].style.display = "block";
    }
    
    const coords = { x: e.pageX, y: e.pageY };
    circle1.tune(coords);
    circle2.tune(coords);
    circle3.tune(coords);
    circle4.tune(coords);
    circle5.tune(coords);
    circle6.tune(coords);
    circle7.tune(coords);
    trash_timeline.replay();

    setTimeout(function(){

      for(j=0; j<a.length; j++){
        // alert(a[j]);
        a[j].style.display = "none";
      }
      
      }, 1000);
  });
}

// --------------------heart_icon-------------------- //

class Heart extends mojs.CustomShape {
  getShape() {
      return '<g><path d="M87.9,10.6c-4.6-4-10.5-6.2-16.6-6.2c-7.1,0-13.9,2.9-18.8,8.1c-0.9,0.9-1.7,1.9-2.5,3C44,7.2,34.1,2.9,24.2,4.9\
              c-8.1,1.5-14.5,6.2-19,13.9C-1.1,29.6-1.6,40.2,3.7,50c2.8,5.3,6.5,10.4,11.3,15.7c8.7,9.7,19,18.9,32.4,28.9c0.9,0.6,1.8,1,2.7,1\
              c1.5,0,2.5-0.8,3-1.2C65,85.3,74.5,77,82.8,68.1c4.6-4.9,9.9-11,13.7-18.6c1.6-3.3,3.5-7.7,3.4-12.6C99.7,26.2,95.7,17.3,87.9,10.6\
              z M90.3,46c-3.4,6.7-8.3,12.3-12.5,16.9C70.1,71.1,61.3,78.8,50,87.4c-12.3-9.3-21.8-17.9-29.9-26.9c-4.3-4.8-7.7-9.5-10.3-14.2\
              c-4.1-7.5-3.6-15,1.4-23.6c3.4-5.8,8.2-9.4,14.3-10.5c1.2-0.2,2.3-0.4,3.5-0.4c7.2,0,13.6,4.2,17.2,11.4l0.6,1.2\
              c0.6,1.3,1.9,1.9,3.2,2c1.3,0,2.6-0.8,3.1-2.1c1.3-2.7,2.6-4.8,4.3-6.6c3.5-3.7,8.5-5.9,13.7-5.9c4.5,0,8.8,1.5,12.1,4.5\
              c6.2,5.4,9.3,12.1,9.5,20.7C92.9,40.3,91.6,43.4,90.3,46z"/>\
              </g>';
  }
  getLength() {
      return 200;
  }
}
mojs.addShape('heart', Heart);

const heart1 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '0',
  top: '-45',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 40},
  opacity: 0.2,
  duration: 750,
  easing: mojs.easing.bezier(0, 1, 0.5, 1)
});

const heart2 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '40',
  top: '-60',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 20},
  opacity: 0.2,
  duration: 500,
  delay: 100,
  easing: mojs.easing.sin.out
});

const heart3 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '-10', 
  top: '-80',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 10},
  opacity: 0.5,
  duration: 500,
  delay: 180,
  isRunLess: true,
  easing: mojs.easing.sin.out
});

const heart4 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '-70', 
  top: '-10',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 20},
  opacity: 0.3,
  duration: 800,
  delay: 240,
  easing: mojs.easing.sin.out
});

const heart5 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '80', 
  top: '-50',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 20},
  opacity: 0.4,
  duration: 800,
  delay: 240,
  easing: mojs.easing.sin.out
});

const heart6 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '20', 
  top: '-100',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 15},
  opacity: 0.2,
  duration: 1000,
  delay: 300,
  easing: mojs.easing.sin.out
});

const heart7 = new mojs.Shape({
  shape: 'heart',
  className: 'b',
  type: 'circle',
  left: '-40', 
  top: '-90',
  stroke: '#f35186',
  strokeWidth: {5:0},
  fill: '#f35186',
  radius: {0: 25},
  opacity: 0.4,
  duration: 600,
  delay: 330,
  easing: mojs.easing.sin.out
});

const heart_timeline = new mojs.Timeline({ speed: 0.5 });

heart_timeline.add(heart1, heart2, heart3, heart4, heart5, heart6, heart7);

var heart_icon = document.querySelectorAll('.heart_icon');
var b = document.querySelectorAll('.b');

for(i=0; i<heart_icon.length; i++){
  heart_icon[i].addEventListener( 'click', function (e) {

    for(j=0; j<b.length; j++){
      // alert(a[j]);
      b[j].style.display = "block";
    }
    
    const coords = { x: e.pageX, y: e.pageY };
    heart1.tune(coords);
    heart2.tune(coords);
    heart3.tune(coords);
    heart4.tune(coords);
    heart5.tune(coords);
    heart6.tune(coords);
    heart7.tune(coords);
    heart_timeline.replay();

    setTimeout(function(){

      for(j=0; j<b.length; j++){
        // alert(a[j]);
        b[j].style.display = "none";
      }
      
      }, 1000);
  });
}

// --------------------cart_icon-------------------- //

var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var RADIUS = 28;
var circle = new mojs.Shape({
  className: 'c',
  left: 0, 
  top: 0,
  stroke: '#FF9C00',
  strokeWidth: _defineProperty({}, 28, 0),
  fill: 'none',
  scale: { 0: 1, easing: 'quad.out' },
  radius: 35,
  duration: 450 
});

var burst = new mojs.Burst({
  className: 'c',
  left: 0, 
  top: 0,
  radius: { 13: 28 },
  angle: 225,
  children: {
    shape: 'line',
    radius: 28 / 7.3,
    scale: 1,
    stroke: '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    degreeShift: 'stagger(0,-5)',
    duration: 700,
    delay: 200,
    easing: 'quad.out' 
  } 
});

var cart_timeline = new mojs.Timeline({ speed: 1.5 });

cart_timeline.add(burst, circle);

var cart_icon = document.querySelectorAll('.cart_icon');
var c = document.querySelectorAll('.c');

for(i=0; i<cart_icon.length; i++){
  cart_icon[i].addEventListener( 'click', function (e) {

    for(j=0; j<c.length; j++){
      // alert(a[j]);
      c[j].style.display = "block";
    }

    var coords = { x: e.pageX, y: e.pageY };
    burst.tune(coords);
    circle.tune(coords);
    cart_timeline.replay();

    setTimeout(function(){

      for(j=0; j<c.length; j++){
        // alert(a[j]);
        c[j].style.display = "none";
      }
      
      }, 350);
  });
}
