webpackJsonp([4],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _home = __webpack_require__(61);

var _account = __webpack_require__(30);

var _config = __webpack_require__(5);

var _Waterfall = __webpack_require__(154);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(59);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(58);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(170);

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
			this.props.readHomeMoments(this.props.home.load);
		}
	}, {
		key: 'gLogin',
		value: function gLogin(detail) {
			if (this.props.account.id === null) {
				//verify google login user
				this.props.readAccountData('google', detail.token);
			}
		}
	}, {
		key: 'fLogin',
		value: function fLogin(response, token) {
			if (this.props.account.id === null) {
				//verify facebook login user
				this.props.readAccountData('facebook', token);
			}
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			//this.props.readHomeMoments(this.props.home.load);
		}
	}, {
		key: 'render',
		value: function render() {
			//login board
			var loginBoard = void 0;
			if (this.props.account.id === null) {
				loginBoard = _react2.default.createElement(
					'section',
					{ id: 'main-login' },
					_react2.default.createElement(
						'h6',
						null,
						'Sign in or sign up'
					),
					_react2.default.createElement(
						'h6',
						null,
						'by your Facebook or Google account:'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Googlelogin2.default, {
							clientId: _config.googleClientId,
							width: window.innerWidth >= 290 ? '200px' : '120px',
							gLogin: this.gLogin.bind(this)
						}),
						_react2.default.createElement(_Facebooklogin2.default, {
							clientId: _config.facebookClientId,
							width: window.innerWidth >= 290 ? '194px' : '114px',
							fLogin: this.fLogin.bind(this)
						})
					)
				);
			} else {
				//show welcome box if users logged in
				loginBoard = _react2.default.createElement(
					'section',
					{ id: 'main-welcome' },
					_react2.default.createElement(
						'a',
						{ href: "/user/" + this.props.account.id },
						_react2.default.createElement('img', {
							alt: 'User Avatar',
							src: _config.domainUrl + "/img/user/" + this.props.account.id + ".jpg"
						})
					),
					_react2.default.createElement(
						'h4',
						null,
						'Welcome back! ',
						this.props.account.name
					)
				);
			}
			//load more moment button
			var loadButton = void 0;
			if (!this.props.home.locker) {
				loadButton = _react2.default.createElement(
					'h6',
					{ id: 'load-button', onClick: this.loadMore.bind(this) },
					'Load more ...'
				);
			}
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
				loginBoard,
				_react2.default.createElement(
					'h6',
					{ id: 'main-app' },
					'Get the mobile app'
				),
				_react2.default.createElement(
					'a',
					{ href: _config.androidStoreUrl, target: '_blank' },
					_react2.default.createElement('img', {
						className: 'main-mobile',
						alt: 'Google Play',
						src: './public/img/google-play.png'
					})
				)
			), _react2.default.createElement(
				'aside',
				{ id: 'aside', key: 'aside' },
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 900 ? '3' : '2',
					image: this.props.home.data,
					fontFamily: '\'Rubik\', sans-serif'
				}),
				loadButton
			)];
		}
	}]);

	return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { home: state.home, account: state.account };
}, { readHomeMoments: _home.readHomeMoments, readAccountData: _account.readAccountData })(Home);

/***/ }),

/***/ 154:
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n\n\n\n\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}", ""]);

// exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(164);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcHVibGljLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3M/NTAzZiJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyZWFkSG9tZU1vbWVudHMiLCJob21lIiwibG9hZCIsImRldGFpbCIsImFjY291bnQiLCJpZCIsInJlYWRBY2NvdW50RGF0YSIsInRva2VuIiwicmVzcG9uc2UiLCJsb2dpbkJvYXJkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImdMb2dpbiIsImJpbmQiLCJmTG9naW4iLCJuYW1lIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwiZGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJpIiwic2V0U3RhdGUiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJtYXJnaW4iLCJjb250YWluZXJTdHlsZSIsImltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlclJhZGl1cyIsImNvbnRlbnRTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhbGxJbWFnZXMiLCJpbWFnZSIsImxlbmd0aCIsInNob3dDb250ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7c0NBQ2dCO0FBQ2xCLFFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JDLElBQTNDO0FBQ0Q7Ozt5QkFDS0MsTSxFQUFRO0FBQ2QsT0FBSSxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEVBQW5CLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DO0FBQ0EsU0FBS04sS0FBTCxDQUFXTyxlQUFYLENBQTJCLFFBQTNCLEVBQXFDSCxPQUFPSSxLQUE1QztBQUNBO0FBQ0Q7Ozt5QkFDTUMsUSxFQUFVRCxLLEVBQU87QUFDdkIsT0FBSSxLQUFLUixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEVBQW5CLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DO0FBQ0EsU0FBS04sS0FBTCxDQUFXTyxlQUFYLENBQTJCLFVBQTNCLEVBQXVDQyxLQUF2QztBQUNBO0FBQ0Q7Ozs2QkFDVztBQUNUO0FBQ0Q7OzsyQkFDUTtBQUNUO0FBQ0EsT0FBSUUsbUJBQUo7QUFDQSxPQUFJLEtBQUtWLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsRUFBbkIsS0FBMEIsSUFBOUIsRUFBb0M7QUFDbkNJLGlCQUNDO0FBQUE7QUFBQSxPQUFTLElBQUcsWUFBWjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRDtBQUdDO0FBQUE7QUFBQTtBQUNDO0FBQ0MsdUNBREQ7QUFFQyxjQUFRQyxPQUFPQyxVQUFQLElBQXFCLEdBQXJCLEdBQTJCLE9BQTNCLEdBQXFDLE9BRjlDO0FBR0MsZUFBUyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakI7QUFIVixRQUREO0FBTUM7QUFDQyx5Q0FERDtBQUVDLGNBQVFILE9BQU9DLFVBQVAsSUFBcUIsR0FBckIsR0FBMkIsT0FBM0IsR0FBcUMsT0FGOUM7QUFHQyxlQUFTLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQjtBQUhWO0FBTkQ7QUFIRCxLQUREO0FBa0JBLElBbkJELE1BbUJPO0FBQ047QUFDQUosaUJBQ0M7QUFBQTtBQUFBLE9BQVMsSUFBRyxjQUFaO0FBQ0M7QUFBQTtBQUFBLFFBQUcsTUFBTSxXQUFXLEtBQUtWLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsRUFBdkM7QUFDQztBQUNDLFlBQUksYUFETDtBQUVDLFlBQUssb0JBQVksWUFBWixHQUEyQixLQUFLTixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEVBQTlDLEdBQW1EO0FBRnpEO0FBREQsTUFERDtBQU9DO0FBQUE7QUFBQTtBQUFBO0FBQW1CLFdBQUtOLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQlc7QUFBdEM7QUFQRCxLQUREO0FBV0E7QUFDQztBQUNBLE9BQUlDLG1CQUFKO0FBQ0YsT0FBSSxDQUFDLEtBQUtqQixLQUFMLENBQVdFLElBQVgsQ0FBZ0JnQixNQUFyQixFQUE2QjtBQUM1QkQsaUJBQ0M7QUFBQTtBQUFBLE9BQUksSUFBRyxhQUFQLEVBQXFCLFNBQVUsS0FBS0UsUUFBTCxDQUFjTCxJQUFkLENBQW1CLElBQW5CLENBQS9CO0FBQUE7QUFBQSxLQUREO0FBS0E7QUFDQyxVQUFRLENBQ047QUFBQTtBQUFBLE1BQU0sSUFBRyxNQUFULEVBQWdCLEtBQUksTUFBcEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkY7QUFHQUosY0FIQTtBQUlFO0FBQUE7QUFBQSxPQUFJLElBQUcsVUFBUDtBQUFBO0FBQUEsS0FKRjtBQUtFO0FBQUE7QUFBQSxPQUFHLDZCQUFILEVBQTRCLFFBQU8sUUFBbkM7QUFDRTtBQUNKLGlCQUFVLGFBRE47QUFFSixXQUFJLGFBRkE7QUFHSixXQUFJO0FBSEE7QUFERjtBQUxGLElBRE0sRUFjTjtBQUFBO0FBQUEsTUFBTyxJQUFHLE9BQVYsRUFBa0IsS0FBSSxPQUF0QjtBQUNFO0FBQ0UsYUFBU0MsT0FBT0MsVUFBUCxHQUFvQixHQUFwQixHQUEwQixHQUExQixHQUFnQyxHQUQzQztBQUVFLFlBQVEsS0FBS1osS0FBTCxDQUFXRSxJQUFYLENBQWdCa0IsSUFGMUI7QUFHRSxpQkFBVztBQUhiLE1BREY7QUFNSUg7QUFOSixJQWRNLENBQVI7QUF1QkQ7Ozs7OztrQkFHWSx5QkFDYixVQUFDSSxLQUFEO0FBQUEsUUFBWSxFQUFFbkIsTUFBTW1CLE1BQU1uQixJQUFkLEVBQW9CRyxTQUFTZ0IsTUFBTWhCLE9BQW5DLEVBQVo7QUFBQSxDQURhLEVBRWIsRUFBRUosc0NBQUYsRUFBbUJNLHlDQUFuQixFQUZhLEVBR2JSLElBSGEsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHZjs7Ozs7Ozs7Ozs7O0lBRXFCdUIsUzs7O0FBQ3BCLG9CQUFZdEIsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNaQSxLQURZOztBQUVsQixRQUFLcUIsS0FBTCxHQUFhO0FBQ1pFLFdBQVEsTUFBS3ZCLEtBQUwsQ0FBV3VCLE1BQVgsSUFBcUIsT0FEakI7QUFFWkMsVUFBUUMsU0FBUyxNQUFNLE1BQUt6QixLQUFMLENBQVcwQixNQUExQixJQUFtQyxDQUFwQyxHQUF5QyxHQUZwQztBQUdaQyxXQUFRLElBSEk7QUFJWkMsZUFBWSxNQUFLNUIsS0FBTCxDQUFXNEIsVUFBWCxJQUF5QjtBQUp6QixHQUFiO0FBRmtCO0FBUWxCOzs7O3VDQUNvQjtBQUNwQixPQUFJQyxZQUFZQyxTQUFTQyxjQUFULENBQXdCLG9DQUF4QixDQUFoQjtBQUNBLE9BQUlGLFNBQUosRUFBZTtBQUNkQSxjQUFVRyxLQUFWLENBQWdCQyxHQUFoQixHQUFzQixNQUFNSixVQUFVSyxZQUFoQixHQUErQixJQUFyRDtBQUNBTCxjQUFVRyxLQUFWLENBQWdCRyxZQUFoQixHQUErQixNQUFNTixVQUFVSyxZQUFoQixHQUErQixJQUE5RDtBQUNBO0FBQ0Q7Ozs4QkFDV0UsQyxFQUFHO0FBQ2QsT0FBSSxLQUFLZixLQUFMLENBQVdNLE1BQVgsS0FBc0JTLENBQTFCLEVBQTZCO0FBQzVCLFNBQUtDLFFBQUwsQ0FBYyxFQUFFVixRQUFRUyxDQUFWLEVBQWQ7QUFDQTtBQUNEOzs7MkJBQ1E7QUFDUixPQUFJRSxZQUFZO0FBQ2ZDLGFBQVMsY0FETTtBQUVmZixXQUFPLE1BRlE7QUFHZmdCLG1CQUFlLEtBSEE7QUFJZkMsYUFBUyxHQUpNO0FBS2ZDLFlBQVE7QUFMTyxJQUFoQjtBQU9BLE9BQUlDLGlCQUFpQjtBQUNwQkosYUFBUyxjQURXO0FBRXBCQyxtQkFBZSxRQUZLO0FBR3BCaEIsV0FBTyxLQUFLSCxLQUFMLENBQVdHLEtBSEU7QUFJcEJrQixZQUFRO0FBSlksSUFBckI7QUFNQSxPQUFJRSxhQUFhO0FBQ2hCTCxhQUFTLE9BRE87QUFFaEJmLFdBQU8sTUFGUztBQUdoQkQsWUFBUSxLQUFLRixLQUFMLENBQVdFLE1BSEg7QUFJaEJzQixvQkFBZ0IsT0FKQTtBQUtoQkMsa0JBQWM7QUFMRSxJQUFqQjtBQU9BLE9BQUlDLGVBQWU7QUFDbEJDLGNBQVUsVUFEUTtBQUVsQnhCLFdBQU8sS0FGVztBQUdsQmtCLFlBQVEsR0FIVTtBQUlsQkQsYUFBUyxRQUpTO0FBS2xCUSxxQkFBaUIsaUJBTEM7QUFNbEJILGtCQUFjLEtBTkk7QUFPbEJJLFdBQU8sT0FQVztBQVFsQnRCLGdCQUFZLEtBQUtQLEtBQUwsQ0FBV08sVUFSTDtBQVNsQnVCLGNBQVUsTUFUUTtBQVVsQkMsZ0JBQVk7QUFWTSxJQUFuQjtBQVlBLE9BQUlDLFlBQVksRUFBaEI7QUFDQSxRQUFLLElBQUlqQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3BDLEtBQUwsQ0FBV3NELEtBQVgsQ0FBaUJDLE1BQXJDLEVBQTZDbkIsR0FBN0MsRUFBa0Q7QUFDakQsUUFBSSxLQUFLZixLQUFMLENBQVdNLE1BQVgsS0FBc0JTLENBQTFCLEVBQTZCO0FBQzVCaUIsZUFBVWpCLENBQVYsSUFDQztBQUFBO0FBQUE7QUFDQyxjQUFRTyxjQURUO0FBRUMsWUFBTSw2QkFBNkJQLENBRnBDO0FBR0MscUJBQWUsS0FBS29CLFdBQUwsQ0FBaUIxQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QnNCLENBQTVCLENBSGhCO0FBSUMsYUFBTyxLQUFLcEMsS0FBTCxDQUFXc0QsS0FBWCxDQUFpQmxCLENBQWpCLEVBQW9CLENBQXBCO0FBSlI7QUFNQztBQUNDLGNBQ0NxQixPQUFPQyxNQUFQLENBQ0MsRUFERCxFQUNLZCxVQURMLEVBQ2lCLEVBQUVlLGlCQUFpQixTQUFTLEtBQUszRCxLQUFMLENBQVdzRCxLQUFYLENBQWlCbEIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBVCxHQUFrQyxHQUFyRCxFQURqQjtBQUZGLFFBTkQ7QUFjQztBQUFBO0FBQUEsU0FBSyxJQUFHLG9DQUFSLEVBQTZDLE9BQVFXLFlBQXJEO0FBQ0csWUFBSy9DLEtBQUwsQ0FBV3NELEtBQVgsQ0FBaUJsQixDQUFqQixFQUFvQixDQUFwQjtBQURIO0FBZEQsTUFERDtBQW9CQSxLQXJCRCxNQXFCTztBQUNOaUIsZUFBVWpCLENBQVYsSUFDQztBQUFBO0FBQUE7QUFDQyxjQUFRTyxjQURUO0FBRUMsWUFBTSw2QkFBNkJQLENBRnBDO0FBR0MscUJBQWUsS0FBS29CLFdBQUwsQ0FBaUIxQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QnNCLENBQTVCLENBSGhCO0FBSUMsYUFBTyxLQUFLcEMsS0FBTCxDQUFXc0QsS0FBWCxDQUFpQmxCLENBQWpCLEVBQW9CLENBQXBCO0FBSlI7QUFNQztBQUNDLGNBQ0NxQixPQUFPQyxNQUFQLENBQ0MsRUFERCxFQUNLZCxVQURMLEVBQ2lCLEVBQUVlLGlCQUFpQixTQUFTLEtBQUszRCxLQUFMLENBQVdzRCxLQUFYLENBQWlCbEIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBVCxHQUFrQyxHQUFyRCxFQURqQjtBQUZGO0FBTkQsTUFERDtBQWlCQTtBQUNEO0FBQ0QsVUFDQztBQUFBO0FBQUEsTUFBUyxPQUFRRSxTQUFqQjtBQUNHZTtBQURILElBREQ7QUFLQTs7Ozs7O2tCQXZHbUIvQixTOzs7Ozs7O0FDRnJCO0FBQ0E7OztBQUdBO0FBQ0EsK0JBQWdDLDRCQUE0QiwwQkFBMEIsd0JBQXdCLHVCQUF1QixpQkFBaUIseUJBQXlCLHNDQUFzQyxHQUFHLFdBQVcseUJBQXlCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsV0FBVyx5QkFBeUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLGdDQUFnQyxpQkFBaUIseUJBQXlCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHdCQUF3QixxQkFBcUIseUJBQXlCLHFCQUFxQixHQUFHLGdCQUFnQixxQkFBcUIsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLG1DQUFtQyx5QkFBeUIscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQiwrQkFBK0IsR0FBRyxtQkFBbUIscUJBQXFCLHlCQUF5QixzQ0FBc0Msa0JBQWtCLHNCQUFzQixzQkFBc0IseUJBQXlCLEdBQUcsb0JBQW9CLHlCQUF5QixpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLG1CQUFtQixxQkFBcUIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsNEJBQTRCLDBCQUEwQixpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLFlBQVkscUJBQXFCLGtCQUFrQix5QkFBeUIsbUJBQW1CLHFCQUFxQix5QkFBeUIsdUJBQXVCLGdDQUFnQyxHQUFHOztBQUVseUQ7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVhZEhvbWVNb21lbnRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9ob21lJztcbmltcG9ydCB7IHJlYWRBY2NvdW50RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBcblx0ZG9tYWluVXJsLCBhbmRyb2lkU3RvcmVVcmwsIGdvb2dsZUNsaWVudElkLCBmYWNlYm9va0NsaWVudElkIFxufSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCBHb29nbGVsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0dvb2dsZWxvZ2luJztcbmltcG9ydCBGYWNlYm9va2xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbic7XG5pbXBvcnQgJy4uL3N0eWxlcy9wdWJsaWMuY3NzJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMucmVhZEhvbWVNb21lbnRzKHRoaXMucHJvcHMuaG9tZS5sb2FkKTtcbiAgfVxuXHRnTG9naW4oZGV0YWlsKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0Ly92ZXJpZnkgZ29vZ2xlIGxvZ2luIHVzZXJcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdnb29nbGUnLCBkZXRhaWwudG9rZW4pO1xuXHRcdH1cblx0fVxuXHRmTG9naW4ocmVzcG9uc2UsIHRva2VuKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0Ly92ZXJpZnkgZmFjZWJvb2sgbG9naW4gdXNlclxuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2ZhY2Vib29rJywgdG9rZW4pO1xuXHRcdH1cblx0fVxuICBsb2FkTW9yZSgpIHtcbiAgICAvL3RoaXMucHJvcHMucmVhZEhvbWVNb21lbnRzKHRoaXMucHJvcHMuaG9tZS5sb2FkKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cdFx0Ly9sb2dpbiBib2FyZFxuXHRcdGxldCBsb2dpbkJvYXJkO1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdGxvZ2luQm9hcmQgPSAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwibWFpbi1sb2dpblwiPlxuXHRcdFx0XHRcdDxoNj5TaWduIGluIG9yIHNpZ24gdXA8L2g2PlxuXHRcdFx0XHRcdDxoNj5ieSB5b3VyIEZhY2Vib29rIG9yIEdvb2dsZSBhY2NvdW50OjwvaDY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxHb29nbGVsb2dpbiBcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBnb29nbGVDbGllbnRJZCB9IFxuXHRcdFx0XHRcdFx0XHR3aWR0aD17IHdpbmRvdy5pbm5lcldpZHRoID49IDI5MCA/ICcyMDBweCcgOiAnMTIwcHgnIH1cblx0XHRcdFx0XHRcdFx0Z0xvZ2luPXsgdGhpcy5nTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxGYWNlYm9va2xvZ2luIFxuXHRcdFx0XHRcdFx0XHRjbGllbnRJZD17IGZhY2Vib29rQ2xpZW50SWQgfVxuXHRcdFx0XHRcdFx0XHR3aWR0aD17IHdpbmRvdy5pbm5lcldpZHRoID49IDI5MCA/ICcxOTRweCcgOiAnMTE0cHgnIH0gXG5cdFx0XHRcdFx0XHRcdGZMb2dpbj17IHRoaXMuZkxvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9zaG93IHdlbGNvbWUgYm94IGlmIHVzZXJzIGxvZ2dlZCBpblxuXHRcdFx0bG9naW5Cb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJtYWluLXdlbGNvbWVcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtcIi91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlVzZXIgQXZhdGFyXCIgXG5cdFx0XHRcdFx0XHRcdHNyYz17ZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyB0aGlzLnByb3BzLmFjY291bnQuaWQgKyBcIi5qcGdcIn0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8aDQ+V2VsY29tZSBiYWNrISB7dGhpcy5wcm9wcy5hY2NvdW50Lm5hbWV9PC9oND5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KVxuXHRcdH1cbiAgICAvL2xvYWQgbW9yZSBtb21lbnQgYnV0dG9uXG4gICAgbGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKCF0aGlzLnByb3BzLmhvbWUubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cbiAgICAgICAgPGgxPk1lZXQgd2l0aCBwZXRzPC9oMT5cbiAgICAgICAgPGgyPmFyb3VuZCB0aGUgd29ybGQgZXZlcnlkYXkhPC9oMj5cblx0XHRcdFx0eyBsb2dpbkJvYXJkIH1cbiAgICAgICAgPGg2IGlkPVwibWFpbi1hcHBcIj5HZXQgdGhlIG1vYmlsZSBhcHA8L2g2PlxuICAgICAgICA8YSBocmVmPXsgYW5kcm9pZFN0b3JlVXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4tbW9iaWxlXCIgXG5cdFx0XHRcdFx0XHRhbHQ9XCJHb29nbGUgUGxheVwiIFxuXHRcdFx0XHRcdFx0c3JjPVwiLi9wdWJsaWMvaW1nL2dvb2dsZS1wbGF5LnBuZ1wiXG5cdFx0XHRcdFx0Lz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9tYWluPixcbiAgICAgIDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cbiAgICAgICAgPFdhdGVyZmFsbCBcbiAgICAgICAgICBjb2x1bW49eyB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCA/ICczJyA6ICcyJyB9IFxuICAgICAgICAgIGltYWdlPXsgdGhpcy5wcm9wcy5ob21lLmRhdGEgfSBcbiAgICAgICAgICBmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuICAgICAgICAvPlxuICAgICAgICB7IGxvYWRCdXR0b24gfVxuICAgICAgPC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGhvbWU6IHN0YXRlLmhvbWUsIGFjY291bnQ6IHN0YXRlLmFjY291bnQgfSksXG4gIHsgcmVhZEhvbWVNb21lbnRzLCByZWFkQWNjb3VudERhdGEgfVxuKShIb21lKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgd2lkdGg6IDI2JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbn1cXG4jbWFpbiBoMXtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGgye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4tYXBwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyNDU2O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jbWFpbi1sb2dpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q3YjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuI21haW4tbG9naW4gaDZ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluLWxvZ2luIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4IDAgIWltcG9ydGFudDtcXG59XFxuXFxuI21haW4td2VsY29tZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7IFxcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIG1hcmdpbjogNTBweCA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jbWFpbi13ZWxjb21lIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuI21haW4td2VsY29tZSBoNHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1tb2JpbGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuI2FzaWRlIGg2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvcHVibGljLmNzc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==