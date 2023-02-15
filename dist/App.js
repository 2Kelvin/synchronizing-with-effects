"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function VideoPlayer(_ref) {
  var src = _ref.src,
    isPlaying = _ref.isPlaying;
  var vidRef = React.useRef(null);
  React.useEffect(function () {
    isPlaying ? vidRef.current.play() : vidRef.current.pause();
  });
  return /*#__PURE__*/React.createElement("video", {
    className: "rounded-md",
    ref: vidRef,
    src: src,
    loop: true,
    playsInline: true
  });
}
function App() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isPlaying = _React$useState2[0],
    setIsPlaying = _React$useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "grid h-2/4 w-2/4 place-content-center m-auto mt-24"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 w-20 font-semibold my-3 bg-green-400 rounded-md active:bg-green-600",
    onClick: function onClick() {
      return setIsPlaying(!isPlaying);
    }
  }, isPlaying ? "Pause" : "Play"), /*#__PURE__*/React.createElement(VideoPlayer, {
    isPlaying: isPlaying,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }));
}
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render( /*#__PURE__*/React.createElement(App, null));