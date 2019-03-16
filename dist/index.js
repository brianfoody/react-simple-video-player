(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-simple-video-player"] = factory();
	else
		root["react-simple-video-player"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpreact_simple_video_player([1],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var iconStyle = {
  color: '#FFFFFF',
  fill: 'currentcolor',
  height: '100%',
  width: '100%',
  display: 'inline-block',
  userSelect: 'none'
};

/* harmony default export */ __webpack_exports__["a"] = (iconStyle);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SizedPlayer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_PlayIcon__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_PauseIcon__ = __webpack_require__(67);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Player = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div({
  position: 'relative',
  lineHeight: 0,
  display: 'inline-block'
}, function (_ref) {
  var autosize = _ref.autosize;

  if (autosize) return { width: '100%', height: '100%' };
});

var overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
};

var Overlay = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div(overlayStyles, {
  backgroundColor: 'rgba(0, 0, 0, .5)',
  opacity: 0,
  transition: 'all 450ms cubic-bezier(.23, 1, .32, 1) 0ms',
  cursor: 'pointer'
}, function (_ref2) {
  var shown = _ref2.shown;

  if (shown) return { opacity: 1 };
});

var InnerOverlay = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div(overlayStyles);

var PlayButton = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 72,
  height: 72
});

var VideoPlayer = function (_PureComponent) {
  _inherits(VideoPlayer, _PureComponent);

  function VideoPlayer() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      playing: _this.props.autoplay,
      overlayShown: !_this.props.autoplay
    }, _this.onPlay = function () {
      _this.setState({
        playing: true,
        overlayShown: false
      });
    }, _this.onPause = function () {
      _this.setState({
        playing: false,
        overlayShown: true
      });
    }, _this.onMouseOver = function () {
      return _this.setState({ overlayShown: true });
    }, _this.onMouseLeave = function () {
      if (!_this.state.playing) {
        _this.setState({ overlayShown: true });
        return;
      }

      _this.setState({ overlayShown: false });
    }, _this.render = function () {
      var playing = _this.state.playing;
      var autosize = _this.props.autosize;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Player,
        {
          autosize: autosize,
          onMouseOver: _this.onMouseOver,
          onMouseLeave: _this.onMouseLeave
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SizedPlayer__["a" /* default */], _extends({ playing: playing }, _this.props)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Overlay,
          {
            shown: _this.state.overlayShown,
            onClick: playing ? _this.onPause : _this.onPlay
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            PlayButton,
            null,
            playing ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__icons_PauseIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icons_PlayIcon__["a" /* default */], null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InnerOverlay, null)
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return VideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

VideoPlayer.propTypes = {
  url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  poster: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  autosize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autoplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  loop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  aspectRatio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
VideoPlayer.defaultProps = {
  loop: false,
  autoplay: false
};
/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseAspectRatio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_player__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_player__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var PlayerContainer = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      autosize = _ref.autosize;

  if (autosize) return { width: '100%', height: '100%' };
  return { width: width, height: height };
});

var parseAspectRatio = function parseAspectRatio(aspectRatio) {
  var ratioArr = aspectRatio.split(':');
  var ratio = ratioArr.map(function (str) {
    return Number(str);
  });
  if (ratio.length !== 2 || Number.isNaN(ratio[0]) || Number.isNaN(ratio[1])) {
    // eslint-disable-next-line
    console.warn('Invalid aspect ratio supplied to react-simple-video-player, defaulting to 16:9');
    return [16, 9];
  }
  return ratio;
};

var SizedPlayer = function SizedPlayer(_ref2) {
  var url = _ref2.url,
      poster = _ref2.poster,
      playing = _ref2.playing,
      loop = _ref2.loop,
      props = _objectWithoutProperties(_ref2, ['url', 'poster', 'playing', 'loop']);

  var options = _objectWithoutProperties(props, []);

  var aspectRatio = parseAspectRatio(options.aspectRatio);

  if (!options.autosize && !options.width && !options.height) {
    options.width = 640;
    options.height = options.width / aspectRatio[0] * aspectRatio[1];
  }

  if (!options.autosize && options.width && !options.height) {
    options.height = options.width / aspectRatio[0] * aspectRatio[1];
  }

  if (!options.autosize && options.height && !options.width) {
    options.width = options.height / aspectRatio[1] * aspectRatio[0];
  }

  var config = poster ? { file: { attributes: { poster: poster } } } : {};

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    PlayerContainer,
    {
      width: options.width,
      height: options.height,
      autosize: options.autosize
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_player___default.a, {
      url: url,
      config: config,
      playing: playing,
      loop: loop,
      width: '100%',
      height: '100%'
    })
  );
};

SizedPlayer.propTypes = {
  url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  poster: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  playing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  autosize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  loop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  aspectRatio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

SizedPlayer.defaultProps = {
  autosize: false,
  aspectRatio: '16:9'
};

/* harmony default export */ __webpack_exports__["a"] = (SizedPlayer);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iconStyle__ = __webpack_require__(22);



var PlayIcon = function PlayIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    { viewBox: '0 0 24 24', style: __WEBPACK_IMPORTED_MODULE_1__iconStyle__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PlayIcon);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iconStyle__ = __webpack_require__(22);



var PauseIcon = function PauseIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    { viewBox: '0 0 24 24', style: __WEBPACK_IMPORTED_MODULE_1__iconStyle__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PauseIcon);

/***/ })

},[23]);
});