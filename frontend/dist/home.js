webpackJsonp([7],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _home = __webpack_require__(68);

var _account = __webpack_require__(36);

var _config = __webpack_require__(2);

var _Waterfall = __webpack_require__(205);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(60);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(59);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(414);

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
				this.props.readAccountData('google', detail);
			}
		}
	}, {
		key: 'fLogin',
		value: function fLogin(response, token) {
			if (this.props.account.id === null) {
				this.props.readAccountData('facebook', { response: response, token: token });
			}
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			this.props.readHomeMoments(this.props.home.load);
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
							src: _config.domainUrl + "/public/user/" + this.props.account.id + ".jpg"
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

/***/ 205:
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
				marginBottom: "50px"
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

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*public page - main*/\n#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n/*public page - aside*/\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}\n\n@media only screen and (max-width: 1040px) {\n    #main{\n        width: 31%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 54%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(400);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcHVibGljLmNzcz81MDNmIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInJlYWRIb21lTW9tZW50cyIsImhvbWUiLCJsb2FkIiwiZGV0YWlsIiwiYWNjb3VudCIsImlkIiwicmVhZEFjY291bnREYXRhIiwicmVzcG9uc2UiLCJ0b2tlbiIsImxvZ2luQm9hcmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZ0xvZ2luIiwiYmluZCIsImZMb2dpbiIsIm5hbWUiLCJsb2FkQnV0dG9uIiwibG9ja2VyIiwibG9hZE1vcmUiLCJkYXRhIiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwibGVuZ3RoIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlYWRIb21lTW9tZW50cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvaG9tZSc7XG5pbXBvcnQgeyByZWFkQWNjb3VudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgYW5kcm9pZFN0b3JlVXJsLCBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCBcbn0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgR29vZ2xlbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVsb2dpbic7XG5pbXBvcnQgRmFjZWJvb2tsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4nO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHVibGljLmNzcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlYWRIb21lTW9tZW50cyh0aGlzLnByb3BzLmhvbWUubG9hZCk7XG4gIH1cblx0Z0xvZ2luKGRldGFpbCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdnb29nbGUnLCBkZXRhaWwpO1xuXHRcdH1cblx0fVxuXHRmTG9naW4ocmVzcG9uc2UsIHRva2VuKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2ZhY2Vib29rJywgeyByZXNwb25zZSwgdG9rZW4gfSk7XG5cdFx0fVxuXHR9XG4gIGxvYWRNb3JlKCkge1xuICAgIHRoaXMucHJvcHMucmVhZEhvbWVNb21lbnRzKHRoaXMucHJvcHMuaG9tZS5sb2FkKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cdFx0Ly9sb2dpbiBib2FyZFxuXHRcdGxldCBsb2dpbkJvYXJkO1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdGxvZ2luQm9hcmQgPSAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwibWFpbi1sb2dpblwiPlxuXHRcdFx0XHRcdDxoNj5TaWduIGluIG9yIHNpZ24gdXA8L2g2PlxuXHRcdFx0XHRcdDxoNj5ieSB5b3VyIEZhY2Vib29rIG9yIEdvb2dsZSBhY2NvdW50OjwvaDY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxHb29nbGVsb2dpbiBcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBnb29nbGVDbGllbnRJZCB9IFxuXHRcdFx0XHRcdFx0XHR3aWR0aD17IHdpbmRvdy5pbm5lcldpZHRoID49IDI5MCA/ICcyMDBweCcgOiAnMTIwcHgnIH1cblx0XHRcdFx0XHRcdFx0Z0xvZ2luPXsgdGhpcy5nTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxGYWNlYm9va2xvZ2luIFxuXHRcdFx0XHRcdFx0XHRjbGllbnRJZD17IGZhY2Vib29rQ2xpZW50SWQgfVxuXHRcdFx0XHRcdFx0XHR3aWR0aD17IHdpbmRvdy5pbm5lcldpZHRoID49IDI5MCA/ICcxOTRweCcgOiAnMTE0cHgnIH0gXG5cdFx0XHRcdFx0XHRcdGZMb2dpbj17IHRoaXMuZkxvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9zaG93IHdlbGNvbWUgYm94IGlmIHVzZXJzIGxvZ2dlZCBpblxuXHRcdFx0bG9naW5Cb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJtYWluLXdlbGNvbWVcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtcIi91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlVzZXIgQXZhdGFyXCIgXG5cdFx0XHRcdFx0XHRcdHNyYz17ZG9tYWluVXJsICsgXCIvcHVibGljL3VzZXIvXCIgKyB0aGlzLnByb3BzLmFjY291bnQuaWQgKyBcIi5qcGdcIn0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8aDQ+V2VsY29tZSBiYWNrISB7dGhpcy5wcm9wcy5hY2NvdW50Lm5hbWV9PC9oND5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KVxuXHRcdH1cbiAgICAvL2xvYWQgbW9yZSBtb21lbnQgYnV0dG9uXG4gICAgbGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKCF0aGlzLnByb3BzLmhvbWUubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cbiAgICAgICAgPGgxPk1lZXQgd2l0aCBwZXRzPC9oMT5cbiAgICAgICAgPGgyPmFyb3VuZCB0aGUgd29ybGQgZXZlcnlkYXkhPC9oMj5cblx0XHRcdFx0eyBsb2dpbkJvYXJkIH1cbiAgICAgICAgPGg2IGlkPVwibWFpbi1hcHBcIj5HZXQgdGhlIG1vYmlsZSBhcHA8L2g2PlxuICAgICAgICA8YSBocmVmPXsgYW5kcm9pZFN0b3JlVXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4tbW9iaWxlXCIgXG5cdFx0XHRcdFx0XHRhbHQ9XCJHb29nbGUgUGxheVwiIFxuXHRcdFx0XHRcdFx0c3JjPVwiLi9wdWJsaWMvaW1nL2dvb2dsZS1wbGF5LnBuZ1wiXG5cdFx0XHRcdFx0Lz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9tYWluPixcbiAgICAgIDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cbiAgICAgICAgPFdhdGVyZmFsbCBcbiAgICAgICAgICBjb2x1bW49eyB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCA/ICczJyA6ICcyJyB9IFxuICAgICAgICAgIGltYWdlPXsgdGhpcy5wcm9wcy5ob21lLmRhdGEgfSBcbiAgICAgICAgICBmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuICAgICAgICAvPlxuICAgICAgICB7IGxvYWRCdXR0b24gfVxuICAgICAgPC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGhvbWU6IHN0YXRlLmhvbWUsIGFjY291bnQ6IHN0YXRlLmFjY291bnQgfSksXG4gIHsgcmVhZEhvbWVNb21lbnRzLCByZWFkQWNjb3VudERhdGEgfVxuKShIb21lKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW5Cb3R0b206IFwiNTBweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKnB1YmxpYyBwYWdlIC0gbWFpbiovXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiAyNiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuI21haW4gaDF7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbiBoMntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluLWFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjQ1NjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tbG9naW57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNtYWluLWxvZ2luIGg2e1xcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbi1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNtYWluLXdlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1OyBcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtYXJnaW46IDUwcHggNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI21haW4td2VsY29tZSBpbWd7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbiNtYWluLXdlbGNvbWUgaDR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1haW4tbW9iaWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLypwdWJsaWMgcGFnZSAtIGFzaWRlKi9cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuI2FzaWRlIGg2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIHdpZHRoOiAzMSU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgI2FzaWRle1xcbiAgICAgICAgd2lkdGg6IDU0JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAgICNtYWlue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2FzaWRle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvcHVibGljLmNzc1xuLy8gbW9kdWxlIGlkID0gNDAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MTRcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==