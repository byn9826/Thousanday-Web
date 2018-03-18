webpackJsonp([7],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _home = __webpack_require__(67);

var _account = __webpack_require__(36);

var _config = __webpack_require__(2);

var _Waterfall = __webpack_require__(196);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(63);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(62);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(401);

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

/***/ 196:
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

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "/*public page - main*/\n#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n/*public page - aside*/\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}\n\n@media only screen and (max-width: 1040px) {\n    #main{\n        width: 31%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 54%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(388);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(57)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzPzUwM2YiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicmVhZEhvbWVNb21lbnRzIiwiaG9tZSIsImxvYWQiLCJkZXRhaWwiLCJhY2NvdW50IiwiaWQiLCJyZWFkQWNjb3VudERhdGEiLCJ0b2tlbiIsInJlc3BvbnNlIiwibG9naW5Cb2FyZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnTG9naW4iLCJiaW5kIiwiZkxvZ2luIiwibmFtZSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsImRhdGEiLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztB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QSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZWFkSG9tZU1vbWVudHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2hvbWUnO1xuaW1wb3J0IHsgcmVhZEFjY291bnREYXRhIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IFxuXHRkb21haW5VcmwsIGFuZHJvaWRTdG9yZVVybCwgZ29vZ2xlQ2xpZW50SWQsIGZhY2Vib29rQ2xpZW50SWQgXG59IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0IEdvb2dsZWxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvR29vZ2xlbG9naW4nO1xuaW1wb3J0IEZhY2Vib29rbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9GYWNlYm9va2xvZ2luJztcbmltcG9ydCAnLi4vc3R5bGVzL3B1YmxpYy5jc3MnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZWFkSG9tZU1vbWVudHModGhpcy5wcm9wcy5ob21lLmxvYWQpO1xuICB9XG5cdGdMb2dpbihkZXRhaWwpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHQvL3ZlcmlmeSBnb29nbGUgbG9naW4gdXNlclxuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2dvb2dsZScsIGRldGFpbC50b2tlbik7XG5cdFx0fVxuXHR9XG5cdGZMb2dpbihyZXNwb25zZSwgdG9rZW4pIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHQvL3ZlcmlmeSBmYWNlYm9vayBsb2dpbiB1c2VyXG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZmFjZWJvb2snLCB0b2tlbik7XG5cdFx0fVxuXHR9XG4gIGxvYWRNb3JlKCkge1xuICAgIC8vdGhpcy5wcm9wcy5yZWFkSG9tZU1vbWVudHModGhpcy5wcm9wcy5ob21lLmxvYWQpO1xuICB9XG4gIHJlbmRlcigpIHtcblx0XHQvL2xvZ2luIGJvYXJkXG5cdFx0bGV0IGxvZ2luQm9hcmQ7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0bG9naW5Cb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJtYWluLWxvZ2luXCI+XG5cdFx0XHRcdFx0PGg2PlNpZ24gaW4gb3Igc2lnbiB1cDwvaDY+XG5cdFx0XHRcdFx0PGg2PmJ5IHlvdXIgRmFjZWJvb2sgb3IgR29vZ2xlIGFjY291bnQ6PC9oNj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PEdvb2dsZWxvZ2luIFxuXHRcdFx0XHRcdFx0XHRjbGllbnRJZD17IGdvb2dsZUNsaWVudElkIH0gXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsgd2luZG93LmlubmVyV2lkdGggPj0gMjkwID8gJzIwMHB4JyA6ICcxMjBweCcgfVxuXHRcdFx0XHRcdFx0XHRnTG9naW49eyB0aGlzLmdMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEZhY2Vib29rbG9naW4gXG5cdFx0XHRcdFx0XHRcdGNsaWVudElkPXsgZmFjZWJvb2tDbGllbnRJZCB9XG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsgd2luZG93LmlubmVyV2lkdGggPj0gMjkwID8gJzE5NHB4JyA6ICcxMTRweCcgfSBcblx0XHRcdFx0XHRcdFx0ZkxvZ2luPXsgdGhpcy5mTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL3Nob3cgd2VsY29tZSBib3ggaWYgdXNlcnMgbG9nZ2VkIGluXG5cdFx0XHRsb2dpbkJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cIm1haW4td2VsY29tZVwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3VzZXIvXCIgKyB0aGlzLnByb3BzLmFjY291bnQuaWR9PlxuXHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0YWx0PVwiVXNlciBBdmF0YXJcIiBcblx0XHRcdFx0XHRcdFx0c3JjPXtkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZCArIFwiLmpwZ1wifSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxoND5XZWxjb21lIGJhY2shIHt0aGlzLnByb3BzLmFjY291bnQubmFtZX08L2g0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdFx0fVxuICAgIC8vbG9hZCBtb3JlIG1vbWVudCBidXR0b25cbiAgICBsZXQgbG9hZEJ1dHRvbjtcblx0XHRpZiAoIXRoaXMucHJvcHMuaG9tZS5sb2NrZXIpIHtcblx0XHRcdGxvYWRCdXR0b24gPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoW1xuICAgICAgPG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuICAgICAgICA8aDE+TWVldCB3aXRoIHBldHM8L2gxPlxuICAgICAgICA8aDI+YXJvdW5kIHRoZSB3b3JsZCBldmVyeWRheSE8L2gyPlxuXHRcdFx0XHR7IGxvZ2luQm9hcmQgfVxuICAgICAgICA8aDYgaWQ9XCJtYWluLWFwcFwiPkdldCB0aGUgbW9iaWxlIGFwcDwvaDY+XG4gICAgICAgIDxhIGhyZWY9eyBhbmRyb2lkU3RvcmVVcmwgfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1tb2JpbGVcIiBcblx0XHRcdFx0XHRcdGFsdD1cIkdvb2dsZSBQbGF5XCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIuL3B1YmxpYy9pbWcvZ29vZ2xlLXBsYXkucG5nXCJcblx0XHRcdFx0XHQvPlxuICAgICAgICA8L2E+XG4gICAgICA8L21haW4+LFxuICAgICAgPGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuICAgICAgICA8V2F0ZXJmYWxsIFxuICAgICAgICAgIGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gJzMnIDogJzInIH0gXG4gICAgICAgICAgaW1hZ2U9eyB0aGlzLnByb3BzLmhvbWUuZGF0YSB9IFxuICAgICAgICAgIGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG4gICAgICAgIC8+XG4gICAgICAgIHsgbG9hZEJ1dHRvbiB9XG4gICAgICA8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgaG9tZTogc3RhdGUuaG9tZSwgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyByZWFkSG9tZU1vbWVudHMsIHJlYWRBY2NvdW50RGF0YSB9XG4pKEhvbWUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Ib21lLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qcHVibGljIHBhZ2UgLSBtYWluKi9cXG4jbWFpbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgd2lkdGg6IDI2JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbn1cXG4jbWFpbiBoMXtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGgye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4tYXBwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyNDU2O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jbWFpbi1sb2dpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q3YjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuI21haW4tbG9naW4gaDZ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluLWxvZ2luIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4IDAgIWltcG9ydGFudDtcXG59XFxuXFxuI21haW4td2VsY29tZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7IFxcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIG1hcmdpbjogNTBweCA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jbWFpbi13ZWxjb21lIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuI21haW4td2VsY29tZSBoNHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1tb2JpbGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4vKnB1YmxpYyBwYWdlIC0gYXNpZGUqL1xcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4jYXNpZGUgaDZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjg1MTM7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0MHB4KSB7XFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDMxJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcblxcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogNTQlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjYXNpZGV7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzXG4vLyBtb2R1bGUgaWQgPSAzODhcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHVibGljLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9