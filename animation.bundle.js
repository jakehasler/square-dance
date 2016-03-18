/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keyMap = __webpack_require__(1);

	var _keyMap2 = _interopRequireDefault(_keyMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var keystate = {};

	document.addEventListener('keydown', function (evt) {
		keystate[evt.keyCode] = true;
	});

	document.addEventListener('keyup', function (evt) {
		keystate[evt.keyCode] = false;
	});

	var square = {
		x: 0,
		y: 0,
		width: 50,
		height: 50,
		update: function update() {
			if (keystate[_keyMap2.default.A]) {
				if (this.x > 0) this.x -= 5;
			}
			if (keystate[_keyMap2.default.W]) {
				if (this.y > 0) this.y -= 5;
			}
			if (keystate[_keyMap2.default.S]) {
				if (this.y + this.height < canvas.height) this.y += 5;
			}
			if (keystate[_keyMap2.default.D]) {
				if (this.x + this.width < canvas.width) this.x += 5;
			}
		},
		draw: function draw() {
			ctx.fillStyle = 'orange';
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};

	var squareBlue = {
		x: 0,
		y: 0,
		width: 100,
		height: 100,
		update: function update() {
			this.x += 2;
			this.y++;
		},
		draw: function draw() {
			ctx.fillStyle = 'blue';
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};

	function init() {}

	function main() {
		canvas.height = 400;
		canvas.width = 800;
		init();
		loop();
	}

	function reset() {}

	function draw() {
		ctx.clearRect(0, 0, 800, 400);
		square.draw();
		squareBlue.draw();
	}

	function update() {
		square.update();
		squareBlue.update();
	}

	function loop() {
		update();
		draw();

		requestAnimationFrame(loop);
	}

	main();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _keyMap;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var keyMap = (_keyMap = {
		space: 32,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		n0: 48,
		n1: 49,
		n2: 50,
		n3: 51,
		n4: 52,
		n5: 53,
		n6: 54,
		n7: 55,
		n8: 56,
		n9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85
	}, _defineProperty(_keyMap, "P", 86), _defineProperty(_keyMap, "W", 87), _defineProperty(_keyMap, "X", 88), _defineProperty(_keyMap, "Y", 89), _defineProperty(_keyMap, "Z", 90), _defineProperty(_keyMap, "backspace", 8), _defineProperty(_keyMap, "tab", 9), _defineProperty(_keyMap, "enter", 13), _defineProperty(_keyMap, "shift", 16), _defineProperty(_keyMap, "ctrl", 17), _defineProperty(_keyMap, "alt", 18), _defineProperty(_keyMap, "caps", 20), _defineProperty(_keyMap, "lWindow", 91), _defineProperty(_keyMap, "lCmd", 91), _defineProperty(_keyMap, "rCmd", 93), _defineProperty(_keyMap, "select", 93), _defineProperty(_keyMap, "semiCol", 186), _defineProperty(_keyMap, "equals", 187), _defineProperty(_keyMap, "comma", 188), _defineProperty(_keyMap, "dash", 189), _defineProperty(_keyMap, "period", 190), _defineProperty(_keyMap, "slash", 191), _defineProperty(_keyMap, "grave", 192), _defineProperty(_keyMap, "lBrack", 219), _defineProperty(_keyMap, "bSlash", 220), _defineProperty(_keyMap, "rBrack", 221), _defineProperty(_keyMap, "sQuote", 222), _keyMap);

	exports.default = keyMap;

/***/ }
/******/ ]);