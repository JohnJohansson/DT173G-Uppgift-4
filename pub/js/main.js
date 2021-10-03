"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var _console,_ref,_ref2;function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&_setPrototypeOf(e,r)}function _setPrototypeOf(e,r){return(_setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function _createSuper(e){var r=_isNativeReflectConstruct();return function(){var o,t=_getPrototypeOf(e);if(r){var n=_getPrototypeOf(this).constructor;o=Reflect.construct(t,arguments,n)}else o=t.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(e,r){if(r&&("object"===_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,o){return r&&_defineProperties(e.prototype,r),o&&_defineProperties(e,o),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,t=new Array(r);o<r;o++)t[o]=e[o];return t}var name="JohnJohansson",nameArray=_toConsumableArray(name);document.getElementById("printName").innerHTML=nameArray;var one,two,arr=["J","O","H","N"];(_console=console).log.apply(_console,arr);var u,d,c,three=(one=(_ref=[11,12])[0],two=_ref[1],_ref);console.log(three);var abc=(u=(_ref2=["a","b","c","d","e"])[0],d=_ref2[1],c=_ref2.slice(2),_ref2);console.log(abc);var q=["a","b","c","d","e"],w=q[0],e=q[1];function helloWorld(){return"Hello World"}console.log(q),console.log(u),console.log(d),console.log(helloWorld());var helloArrow=function(){return"Hello Arrow"};console.log(helloArrow());var helloArrow2=function(e){return console.log(e)};helloArrow2("Hello");var aArr=Array.of(5);console.log(aArr.length);var anotherArr=Array.from("John");console.log(anotherArr);var price=[25],multiPrices=Array.from(price,(function(e){return 1.55*e}));console.log(multiPrices);var arrValues=[111,222,333];arrValues.fill(10),console.log(arrValues);var arrValues2=[111,222,333];arrValues2.fill(20,2),console.log(arrValues2);var numbers=[100,200,300,400,500,600,700,800,900],res=numbers.find((function(e){return e<900&&e>700}));console.log(res);var valueX=["yes","no","hello"],valuRes=valueX.findIndex((function(e){return"hello"==e}));console.log(valuRes);var computor=function(){function e(r,o,t){_classCallCheck(this,e),this.gpu=r,this.cpu=o,this.psu=t}return _createClass(e,[{key:"displayComputor",value:function(){console.log("gpu: ".concat(this.gpu," cpu: ").concat(this.cpu," psu: ").concat(this.psu))}}]),e}(),comp1=new computor("3070","i9-1198hk","750w"),comp2=new computor("3060","i8-1198hk","800w"),comp3=new computor("3050","i7-1198hk","850w");comp1.displayComputor(),comp2.displayComputor(),comp3.displayComputor();var amazingComputor=function(e){_inherits(o,computor);var r=_createSuper(o);function o(){return _classCallCheck(this,o),r.call(this,"3090","i9-10900X","1200w")}return o}(),comp4=new amazingComputor;function smallerThen(e){return function(r){return r<e}}comp4.displayComputor();var smallerThen20=smallerThen(20);console.log(smallerThen20(12));var arrayForEach=[10,11,12,13,14,15];arrayForEach.forEach((function(e){console.log(e)}));var employee=[{name:"Bob",job:"Sales",hireDate:1999},{name:"Jean",job:"Taxes",hireDate:1990},{name:"Max",job:"Secretery",hireDate:2001}];employee.forEach((function(e){console.log(e)}));var arrayForMap=["Jan","Siv","Bob2","Nira"],challengers=arrayForMap.map((function(e){return e+"! a new challenger!"}));console.log(challengers);var arrayForFilter=[17,22,66,33,10,1],lowerNumbers=arrayForFilter.filter((function(e){return e<=20}));console.log(lowerNumbers);var employeeHireDate=employee.filter((function(e){return e.hireDate>=2001}));function toggle(){var e=document.getElementById("hamburgerMenuID");"block"===e.style.display?e.style.display="none":e.style.display="block"}console.log(employeeHireDate),console.log("Hello gulp! From one.js"),console.log("Hello gulp from two.js");