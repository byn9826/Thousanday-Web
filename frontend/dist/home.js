webpackJsonp([7],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _home = __webpack_require__(55);

var _account = __webpack_require__(26);

var _config = __webpack_require__(2);

var _Waterfall = __webpack_require__(196);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(49);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(48);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(416);

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

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/*public page - main*/\n#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n/*public page - aside*/\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}\n\n@media only screen and (max-width: 1040px) {\n    #main{\n        width: 31%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 54%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(402);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(47)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzPzUwM2YiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicmVhZEhvbWVNb21lbnRzIiwiaG9tZSIsImxvYWQiLCJkZXRhaWwiLCJhY2NvdW50IiwiaWQiLCJyZWFkQWNjb3VudERhdGEiLCJyZXNwb25zZSIsInRva2VuIiwibG9naW5Cb2FyZCIsImdvb2dsZUNsaWVudElkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImdMb2dpbiIsImJpbmQiLCJmYWNlYm9va0NsaWVudElkIiwiZkxvZ2luIiwiZG9tYWluVXJsIiwibmFtZSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsImFuZHJvaWRTdG9yZVVybCIsImRhdGEiLCJDb21wb25lbnQiLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwiY29udGFpbmVyU3R5bGUiLCJtYXJnaW4iLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q29u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LCtDQUErQyxZQUFZLHlCQUF5QixxQkFBcUIsMkJBQTJCLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLE9BQU8sZUFBZSx5QkFBeUIscUJBQXFCLDJCQUEyQixPQUFPLEdBQUc7O0FBRTF5RTs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLEdBQXVEOztBQUU3RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsRUFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZWFkSG9tZU1vbWVudHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2hvbWUnO1xuaW1wb3J0IHsgcmVhZEFjY291bnREYXRhIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IFxuXHRkb21haW5VcmwsIGFuZHJvaWRTdG9yZVVybCwgZ29vZ2xlQ2xpZW50SWQsIGZhY2Vib29rQ2xpZW50SWQgXG59IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0IEdvb2dsZWxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvR29vZ2xlbG9naW4nO1xuaW1wb3J0IEZhY2Vib29rbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9GYWNlYm9va2xvZ2luJztcbmltcG9ydCAnLi4vc3R5bGVzL3B1YmxpYy5jc3MnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZWFkSG9tZU1vbWVudHModGhpcy5wcm9wcy5ob21lLmxvYWQpO1xuICB9XG5cdGdMb2dpbihkZXRhaWwpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZ29vZ2xlJywgZGV0YWlsKTtcblx0XHR9XG5cdH1cblx0ZkxvZ2luKHJlc3BvbnNlLCB0b2tlbikge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdmYWNlYm9vaycsIHsgcmVzcG9uc2UsIHRva2VuIH0pO1xuXHRcdH1cblx0fVxuICBsb2FkTW9yZSgpIHtcbiAgICB0aGlzLnByb3BzLnJlYWRIb21lTW9tZW50cyh0aGlzLnByb3BzLmhvbWUubG9hZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXHRcdC8vbG9naW4gYm9hcmRcblx0XHRsZXQgbG9naW5Cb2FyZDtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHRsb2dpbkJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cIm1haW4tbG9naW5cIj5cblx0XHRcdFx0XHQ8aDY+U2lnbiBpbiBvciBzaWduIHVwPC9oNj5cblx0XHRcdFx0XHQ8aDY+YnkgeW91ciBGYWNlYm9vayBvciBHb29nbGUgYWNjb3VudDo8L2g2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8R29vZ2xlbG9naW4gXG5cdFx0XHRcdFx0XHRcdGNsaWVudElkPXsgZ29vZ2xlQ2xpZW50SWQgfSBcblx0XHRcdFx0XHRcdFx0d2lkdGg9eyB3aW5kb3cuaW5uZXJXaWR0aCA+PSAyOTAgPyAnMjAwcHgnIDogJzEyMHB4JyB9XG5cdFx0XHRcdFx0XHRcdGdMb2dpbj17IHRoaXMuZ0xvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RmFjZWJvb2tsb2dpbiBcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBmYWNlYm9va0NsaWVudElkIH1cblx0XHRcdFx0XHRcdFx0d2lkdGg9eyB3aW5kb3cuaW5uZXJXaWR0aCA+PSAyOTAgPyAnMTk0cHgnIDogJzExNHB4JyB9IFxuXHRcdFx0XHRcdFx0XHRmTG9naW49eyB0aGlzLmZMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vc2hvdyB3ZWxjb21lIGJveCBpZiB1c2VycyBsb2dnZWQgaW5cblx0XHRcdGxvZ2luQm9hcmQgPSAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwibWFpbi13ZWxjb21lXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJVc2VyIEF2YXRhclwiIFxuXHRcdFx0XHRcdFx0XHRzcmM9e2RvbWFpblVybCArIFwiL3B1YmxpYy91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkICsgXCIuanBnXCJ9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PGg0PldlbGNvbWUgYmFjayEge3RoaXMucHJvcHMuYWNjb3VudC5uYW1lfTwvaDQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdClcblx0XHR9XG4gICAgLy9sb2FkIG1vcmUgbW9tZW50IGJ1dHRvblxuICAgIGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy5ob21lLmxvY2tlcikge1xuXHRcdFx0bG9hZEJ1dHRvbiA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG4gICAgICAgIDxoMT5NZWV0IHdpdGggcGV0czwvaDE+XG4gICAgICAgIDxoMj5hcm91bmQgdGhlIHdvcmxkIGV2ZXJ5ZGF5ITwvaDI+XG5cdFx0XHRcdHsgbG9naW5Cb2FyZCB9XG4gICAgICAgIDxoNiBpZD1cIm1haW4tYXBwXCI+R2V0IHRoZSBtb2JpbGUgYXBwPC9oNj5cbiAgICAgICAgPGEgaHJlZj17IGFuZHJvaWRTdG9yZVVybCB9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxpbWcgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYWluLW1vYmlsZVwiIFxuXHRcdFx0XHRcdFx0YWx0PVwiR29vZ2xlIFBsYXlcIiBcblx0XHRcdFx0XHRcdHNyYz1cIi4vcHVibGljL2ltZy9nb29nbGUtcGxheS5wbmdcIlxuXHRcdFx0XHRcdC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbWFpbj4sXG4gICAgICA8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG4gICAgICAgIDxXYXRlcmZhbGwgXG4gICAgICAgICAgY29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAnMycgOiAnMicgfSBcbiAgICAgICAgICBpbWFnZT17IHRoaXMucHJvcHMuaG9tZS5kYXRhIH0gXG4gICAgICAgICAgZm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcbiAgICAgICAgLz5cbiAgICAgICAgeyBsb2FkQnV0dG9uIH1cbiAgICAgIDwvYXNpZGU+XG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBob21lOiBzdGF0ZS5ob21lLCBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IHJlYWRIb21lTW9tZW50cywgcmVhZEFjY291bnREYXRhIH1cbikoSG9tZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL0hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjUwcHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypwdWJsaWMgcGFnZSAtIG1haW4qL1xcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB3aWR0aDogMjYlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxufVxcbiNtYWluIGgxe1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4gaDJ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbi1hcHB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTI0NTY7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWluLWxvZ2lue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDElO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jbWFpbi1sb2dpbiBoNntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI21haW4tbG9naW4gaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiA1cHggMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jbWFpbi13ZWxjb21lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTsgXFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgbWFyZ2luOiA1MHB4IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNtYWluLXdlbGNvbWUgaW1ne1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4jbWFpbi13ZWxjb21lIGg0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tYWluLW1vYmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi8qcHVibGljIHBhZ2UgLSBhc2lkZSovXFxuI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbiNhc2lkZSBoNntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmODUxMztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICB3aWR0aDogMzElO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIHdpZHRoOiA1NCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcHVibGljLmNzc1xuLy8gbW9kdWxlIGlkID0gNDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=