webpackJsonp([1],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Waterfall = function (_Component) {
	_inherits(Waterfall, _Component);

	function Waterfall(props) {
		_classCallCheck(this, Waterfall);

		var _this = _possibleConstructorReturn(this, (Waterfall.__proto__ || Object.getPrototypeOf(Waterfall)).call(this, props));

		_this.state = {
			height: _this.props.height || "220px",
			width: parseInt(100 / _this.props.column) - 2 + "%",
			active: null,
			fontFamily: _this.props.fontFamily || "Times New Roman"
		};
		return _this;
	}

	_createClass(Waterfall, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			var waterfall = document.getElementById("thousanday-react-waterfall-content");
			if (waterfall) {
				waterfall.style.top = "-" + waterfall.offsetHeight + "px";
				waterfall.style.marginBottom = "-" + waterfall.offsetHeight + "px";
			}
		}
	}, {
		key: "showContent",
		value: function showContent(i) {
			if (this.state.active !== i) {
				this.setState({ active: i });
			}
		}
	}, {
		key: "render",
		value: function render() {
			var rootStyle = {
				display: "inline-block",
				width: "100%",
				verticalAlign: "top",
				padding: "0",
				margin: "0"
			};
			var containerStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: this.state.width,
				margin: "6px 1%"
			};
			var imageStyle = {
				display: "block",
				width: "100%",
				height: this.state.height,
				backgroundSize: "cover",
				borderRadius: "5px"
			};
			var contentStyle = {
				position: "relative",
				width: "96%",
				margin: "0",
				padding: "4px 2%",
				backgroundColor: "rgba(0,0,0,0.6)",
				borderRadius: "5px",
				color: "white",
				fontFamily: this.state.fontFamily,
				fontSize: "14px",
				fontWeight: "normal"
			};
			var allImages = [];
			for (var i = 0; i < this.props.image.length; i++) {
				if (this.state.active === i) {
					allImages[i] = _react2.default.createElement(
						"a",
						{
							style: containerStyle,
							key: "thousandayreactwaterfall" + i,
							onMouseEnter: this.showContent.bind(this, i),
							href: this.props.image[i][2]
						},
						_react2.default.createElement("div", {
							style: Object.assign({}, imageStyle, { backgroundImage: "url(" + this.props.image[i][0] + ")" })
						}),
						_react2.default.createElement(
							"div",
							{ id: "thousanday-react-waterfall-content", style: contentStyle },
							this.props.image[i][1]
						)
					);
				} else {
					allImages[i] = _react2.default.createElement(
						"a",
						{
							style: containerStyle,
							key: "thousandayreactwaterfall" + i,
							onMouseEnter: this.showContent.bind(this, i),
							href: this.props.image[i][2]
						},
						_react2.default.createElement("div", {
							style: Object.assign({}, imageStyle, { backgroundImage: "url(" + this.props.image[i][0] + ")" })
						})
					);
				}
			}
			return _react2.default.createElement(
				"section",
				{ style: rootStyle },
				allImages
			);
		}
	}]);

	return Waterfall;
}(_react.Component);

exports.default = Waterfall;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n\n\n\n\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}", ""]);

// exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(129);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(53)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./public.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./public.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(24);

__webpack_require__(130);

var _Waterfall = __webpack_require__(127);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _home = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props.loadHomeData(0));
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'main',
        { id: 'main', key: 'main' },
        _react2.default.createElement(
          'h1',
          null,
          'Meet with pets'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'around the world everyday!'
        ),
        _react2.default.createElement(
          'h6',
          { id: 'main-app' },
          'Get the mobile app'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://play.google.com/store/apps/details?id=com.thousanday', target: '_blank' },
          _react2.default.createElement('img', { className: 'main-mobile', alt: 'Google Play', src: './public/img/google-play.png' })
        )
      ), _react2.default.createElement(
        'aside',
        { id: 'aside', key: 'aside' },
        _react2.default.createElement(_Waterfall2.default, {
          column: window.innerWidth > 900 ? '3' : '2',
          image: [],
          fontFamily: '\'Rubik\', sans-serif'
        })
      )];
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    homeData: state.homeData,
    load: state.load
  };
}, {
  loadHomeData: _home.loadHomeData
})(Home);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcHVibGljLmNzcz81MDNmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIldhdGVyZmFsbCIsInByb3BzIiwic3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwibGVuZ3RoIiwic2hvd0NvbnRlbnQiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiYmFja2dyb3VuZEltYWdlIiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkSG9tZURhdGEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaG9tZURhdGEiLCJsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUNwQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFLE1BQVgsSUFBcUIsT0FE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QUdFLHNCQUFXO0FBSGI7QUFERixPQVRNLENBQVI7QUFpQkQ7Ozs7OztrQkFHWSx5QkFDYixVQUFDNUMsS0FBRDtBQUFBLFNBQVk7QUFDVjZDLGNBQVU3QyxNQUFNNkMsUUFETjtBQUVWQyxVQUFNOUMsTUFBTThDO0FBRkYsR0FBWjtBQUFBLENBRGEsRUFLYjtBQUNFSjtBQURGLENBTGEsRUFRYkgsSUFSYSxDIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB3aWR0aDogMjYlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxufVxcbiNtYWluIGgxe1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4gaDJ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbi1hcHB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTI0NTY7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWluLWxvZ2lue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDElO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jbWFpbi1sb2dpbiBoNntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4tbG9naW4gaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiA1cHggMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jbWFpbi13ZWxjb21lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTsgXFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgbWFyZ2luOiA1MHB4IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNtYWluLXdlbGNvbWUgaW1ne1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4jbWFpbi13ZWxjb21lIGg0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tYWluLW1vYmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcblxcblxcblxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4jYXNpZGUgaDZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjg1MTM7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vc3R5bGVzL3B1YmxpYy5jc3MnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tIFwiLi4vY29tcG9uZW50cy9XYXRlcmZhbGxcIjtcbmltcG9ydCB7IGxvYWRIb21lRGF0YSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2hvbWVcIjtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubG9hZEhvbWVEYXRhKDApKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG4gICAgICAgIDxoMT5NZWV0IHdpdGggcGV0czwvaDE+XG4gICAgICAgIDxoMj5hcm91bmQgdGhlIHdvcmxkIGV2ZXJ5ZGF5ITwvaDI+XG4gICAgICAgIDxoNiBpZD1cIm1haW4tYXBwXCI+R2V0IHRoZSBtb2JpbGUgYXBwPC9oNj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20udGhvdXNhbmRheVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFpbi1tb2JpbGVcIiBhbHQ9XCJHb29nbGUgUGxheVwiIHNyYz1cIi4vcHVibGljL2ltZy9nb29nbGUtcGxheS5wbmdcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L21haW4+LFxuICAgICAgPGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuICAgICAgICA8V2F0ZXJmYWxsIFxuICAgICAgICAgIGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gJzMnIDogJzInIH0gXG4gICAgICAgICAgaW1hZ2U9eyBbXSB9IFxuICAgICAgICAgIGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG4gICAgICAgIC8+XG4gICAgICA8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgXG4gICAgaG9tZURhdGE6IHN0YXRlLmhvbWVEYXRhLFxuICAgIGxvYWQ6IHN0YXRlLmxvYWRcbiAgfSksXG4gIHsgXG4gICAgbG9hZEhvbWVEYXRhIFxuICB9XG4pKEhvbWUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Ib21lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==