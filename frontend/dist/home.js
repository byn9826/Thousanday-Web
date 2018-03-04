webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _home = __webpack_require__(56);

var _account = __webpack_require__(55);

var _config = __webpack_require__(6);

var _Waterfall = __webpack_require__(142);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(139);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(138);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(147);

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
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
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
		//load more moment

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
}, { readHomeMoments: _home.readHomeMoments, readAccountData: _account.readAccountData, changeAccountData: _account.changeAccountData })(Home);

/***/ }),

/***/ 138:
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

var Facebooklogin = function (_Component) {
	_inherits(Facebooklogin, _Component);

	function Facebooklogin(props) {
		_classCallCheck(this, Facebooklogin);

		var _this = _possibleConstructorReturn(this, (Facebooklogin.__proto__ || Object.getPrototypeOf(Facebooklogin)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			response: null
		};
		return _this;
	}

	_createClass(Facebooklogin, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var header = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.id = "facebook-jssdk";
			script.src = "//connect.facebook.net/en_US/sdk.js";
			header.appendChild(script);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			var self = this;
			window.fbAsyncInit = function () {
				FB.init({
					appId: _this2.props.clientId,
					xfbml: true,
					version: 'v2.8'
				});
				// 			FB.getLoginStatus((response) => {
				// 				if (response.status === 'connected') {
				// 					let token = response.authResponse.accessToken;
				// 					FB.api('/me', (response) => {
				// 						self.setState({ response });
				//  						self.props.fLogin(response, token);
				// 					});
				// 				} else {
				// 					self.setState({ response: false });
				// 				}
				// 			});
			};
		}
	}, {
		key: "clickButton",
		value: function clickButton() {
			var self = this;
			if (this.state.response) {
				this.props.fLogin(this.state.response);
			} else {
				FB.login(function (response) {
					if (response.status === 'connected') {
						var token = response.authResponse.accessToken;
						FB.api('/me', function (response) {
							self.setState({ response: response });
							self.props.fLogin(response, token);
						});
					} else {
						self.setState({ response: false });
					}
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var buttonStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: this.state.width,
				cursor: "pointer",
				borderRadius: "5px"
			};
			var facebook = "data:image/png;base64,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";
			return _react2.default.createElement("img", {
				style: buttonStyle,
				src: facebook,
				alt: "Log in with Facebook",
				onClick: this.clickButton.bind(this)
			});
		}
	}]);

	return Facebooklogin;
}(_react.Component);

exports.default = Facebooklogin;

/***/ }),

/***/ 139:
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

var Googlelogin = function (_Component) {
	_inherits(Googlelogin, _Component);

	function Googlelogin(props) {
		_classCallCheck(this, Googlelogin);

		var _this = _possibleConstructorReturn(this, (Googlelogin.__proto__ || Object.getPrototypeOf(Googlelogin)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			result: null
		};
		return _this;
	}

	_createClass(Googlelogin, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var header = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = "https://apis.google.com/js/api:client.js";
			header.appendChild(script);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var self = this;
			var interval = setInterval(function () {
				if (document.readyState === 'complete') {
					clearInterval(interval);
					relayout(self);
				}
			}, 500);
			function relayout(self) {
				gapi.load('auth2', function () {
					var instance = gapi.auth2.init({
						client_id: self.props.clientId
					});
					instance.then(function () {
						var user = instance.currentUser.get();
						var profile = user.getBasicProfile();
						// 					if (user.isSignedIn()) {
						// 						let result = {};
						// 						result.id = profile.getId();
						// 						result.name = profile.getName();
						// 						result.firstname = profile.getGivenName();
						// 						result.lastname = profile.getFamilyName();
						// 						result.imageUrl = profile.getImageUrl();
						// 						result.email = profile.getEmail();
						// 						result.token = user.getAuthResponse().id_token;
						// 						self.props.gLogin(result);
						// 						self.setState({ result });
						// 					}
					});
				});
			}
		}
	}, {
		key: "clickButton",
		value: function clickButton() {
			var _this2 = this;

			if (!this.state.result) {
				var instance = gapi.auth2.getAuthInstance();
				instance.signIn().then(function () {
					var user = instance.currentUser.get();
					if (user.isSignedIn()) {
						var result = {};
						var profile = user.getBasicProfile();
						result.id = profile.getId();
						result.name = profile.getName();
						result.firstname = profile.getGivenName();
						result.lastname = profile.getFamilyName();
						result.imageUrl = profile.getImageUrl();
						result.email = profile.getEmail();
						result.token = user.getAuthResponse().id_token;
						_this2.props.gLogin(result);
						_this2.setState({ result: result });
					} else {
						_this2.props.gLogin(false);
					}
				});
			} else {
				this.props.gLogin(this.state.result);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var buttonStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: this.state.width,
				cursor: "pointer"
			};
			var google = "data:image/png;base64,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";
			return _react2.default.createElement("img", { style: buttonStyle, src: google, alt: "Log in with Google", onClick: this.clickButton.bind(this) });
		}
	}]);

	return Googlelogin;
}(_react.Component);

exports.default = Googlelogin;

/***/ }),

/***/ 142:
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n\n\n\n\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}", ""]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(144);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(54)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzPzUwM2YiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY2hhbmdlQWNjb3VudERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVhZEhvbWVNb21lbnRzIiwiaG9tZSIsImxvYWQiLCJkZXRhaWwiLCJhY2NvdW50IiwiaWQiLCJyZWFkQWNjb3VudERhdGEiLCJ0b2tlbiIsInJlc3BvbnNlIiwibG9naW5Cb2FyZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnTG9naW4iLCJiaW5kIiwiZkxvZ2luIiwibmFtZSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsImRhdGEiLCJzdGF0ZSIsIkZhY2Vib29rbG9naW4iLCJ3aWR0aCIsImhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJzZWxmIiwiZmJBc3luY0luaXQiLCJGQiIsImluaXQiLCJhcHBJZCIsImNsaWVudElkIiwieGZibWwiLCJ2ZXJzaW9uIiwibG9naW4iLCJzdGF0dXMiLCJhdXRoUmVzcG9uc2UiLCJhY2Nlc3NUb2tlbiIsImFwaSIsInNldFN0YXRlIiwiYnV0dG9uU3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImZhY2Vib29rIiwiY2xpY2tCdXR0b24iLCJHb29nbGVsb2dpbiIsInJlc3VsdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInJlbGF5b3V0IiwiZ2FwaSIsImluc3RhbmNlIiwiYXV0aDIiLCJjbGllbnRfaWQiLCJ0aGVuIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZ2V0IiwicHJvZmlsZSIsImdldEJhc2ljUHJvZmlsZSIsImdldEF1dGhJbnN0YW5jZSIsInNpZ25JbiIsImlzU2lnbmVkSW4iLCJnZXRJZCIsImdldE5hbWUiLCJmaXJzdG5hbWUiLCJnZXRHaXZlbk5hbWUiLCJsYXN0bmFtZSIsImdldEZhbWlseU5hbWUiLCJpbWFnZVVybCIsImdldEltYWdlVXJsIiwiZW1haWwiLCJnZXRFbWFpbCIsImdldEF1dGhSZXNwb25zZSIsImlkX3Rva2VuIiwiZ29vZ2xlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJyb290U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7O3VDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLGlCQUFYLENBQ0MsQ0FDQ0Ms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MEIsd0JBQXdCLHVCQUF1QixpQkFBaUIseUJBQXlCLHNDQUFzQyxHQUFHLFdBQVcseUJBQXlCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsV0FBVyx5QkFBeUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLGdDQUFnQyxpQkFBaUIseUJBQXlCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHdCQUF3QixxQkFBcUIseUJBQXlCLHFCQUFxQixHQUFHLGdCQUFnQixxQkFBcUIsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLG1DQUFtQyx5QkFBeUIscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQiwrQkFBK0IsR0FBRyxtQkFBbUIscUJBQXFCLHlCQUF5QixzQ0FBc0Msa0JBQWtCLHNCQUFzQixzQkFBc0IseUJBQXlCLEdBQUcsb0JBQW9CLHlCQUF5QixpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLG1CQUFtQixxQkFBcUIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsNEJBQTRCLDBCQUEwQixpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLFlBQVkscUJBQXFCLGtCQUFrQix5QkFBeUIsbUJBQW1CLHFCQUFxQix5QkFBeUIsdUJBQXVCLGdDQUFnQyxHQUFHOztBQUVseUQ7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVhZEhvbWVNb21lbnRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9ob21lJztcbmltcG9ydCB7IGNoYW5nZUFjY291bnREYXRhLCByZWFkQWNjb3VudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgYW5kcm9pZFN0b3JlVXJsLCBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCBcbn0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgR29vZ2xlbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVsb2dpbic7XG5pbXBvcnQgRmFjZWJvb2tsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4nO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHVibGljLmNzcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZWFkSG9tZU1vbWVudHModGhpcy5wcm9wcy5ob21lLmxvYWQpO1xuICB9XG5cdGdMb2dpbihkZXRhaWwpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHQvL3ZlcmlmeSBnb29nbGUgbG9naW4gdXNlclxuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2dvb2dsZScsIGRldGFpbC50b2tlbik7XG5cdFx0fVxuXHR9XG5cdGZMb2dpbihyZXNwb25zZSwgdG9rZW4pIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHQvL3ZlcmlmeSBmYWNlYm9vayBsb2dpbiB1c2VyXG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZmFjZWJvb2snLCB0b2tlbik7XG5cdFx0fVxuXHR9XG4gXHQvL2xvYWQgbW9yZSBtb21lbnRcbiAgbG9hZE1vcmUoKSB7XG4gICAgdGhpcy5wcm9wcy5yZWFkSG9tZU1vbWVudHModGhpcy5wcm9wcy5ob21lLmxvYWQpO1xuICB9XG4gIHJlbmRlcigpIHtcblx0XHQvL2xvZ2luIGJvYXJkXG5cdFx0bGV0IGxvZ2luQm9hcmQ7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0bG9naW5Cb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJtYWluLWxvZ2luXCI+XG5cdFx0XHRcdFx0PGg2PlNpZ24gaW4gb3Igc2lnbiB1cDwvaDY+XG5cdFx0XHRcdFx0PGg2PmJ5IHlvdXIgRmFjZWJvb2sgb3IgR29vZ2xlIGFjY291bnQ6PC9oNj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PEdvb2dsZWxvZ2luIFxuXHRcdFx0XHRcdFx0XHRjbGllbnRJZD17IGdvb2dsZUNsaWVudElkIH0gXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsgd2luZG93LmlubmVyV2lkdGggPj0gMjkwID8gJzIwMHB4JyA6ICcxMjBweCcgfVxuXHRcdFx0XHRcdFx0XHRnTG9naW49eyB0aGlzLmdMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEZhY2Vib29rbG9naW4gXG5cdFx0XHRcdFx0XHRcdGNsaWVudElkPXsgZmFjZWJvb2tDbGllbnRJZCB9XG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsgd2luZG93LmlubmVyV2lkdGggPj0gMjkwID8gJzE5NHB4JyA6ICcxMTRweCcgfSBcblx0XHRcdFx0XHRcdFx0ZkxvZ2luPXsgdGhpcy5mTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL3Nob3cgd2VsY29tZSBib3ggaWYgdXNlcnMgbG9nZ2VkIGluXG5cdFx0XHRsb2dpbkJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cIm1haW4td2VsY29tZVwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3VzZXIvXCIgKyB0aGlzLnByb3BzLmFjY291bnQuaWR9PlxuXHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0YWx0PVwiVXNlciBBdmF0YXJcIiBcblx0XHRcdFx0XHRcdFx0c3JjPXtkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZCArIFwiLmpwZ1wifSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxoND5XZWxjb21lIGJhY2shIHt0aGlzLnByb3BzLmFjY291bnQubmFtZX08L2g0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdFx0fVxuICAgIC8vbG9hZCBtb3JlIG1vbWVudCBidXR0b25cbiAgICBsZXQgbG9hZEJ1dHRvbjtcblx0XHRpZiAoIXRoaXMucHJvcHMuaG9tZS5sb2NrZXIpIHtcblx0XHRcdGxvYWRCdXR0b24gPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoW1xuICAgICAgPG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuICAgICAgICA8aDE+TWVldCB3aXRoIHBldHM8L2gxPlxuICAgICAgICA8aDI+YXJvdW5kIHRoZSB3b3JsZCBldmVyeWRheSE8L2gyPlxuXHRcdFx0XHR7IGxvZ2luQm9hcmQgfVxuICAgICAgICA8aDYgaWQ9XCJtYWluLWFwcFwiPkdldCB0aGUgbW9iaWxlIGFwcDwvaDY+XG4gICAgICAgIDxhIGhyZWY9eyBhbmRyb2lkU3RvcmVVcmwgfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1tb2JpbGVcIiBcblx0XHRcdFx0XHRcdGFsdD1cIkdvb2dsZSBQbGF5XCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIuL3B1YmxpYy9pbWcvZ29vZ2xlLXBsYXkucG5nXCJcblx0XHRcdFx0XHQvPlxuICAgICAgICA8L2E+XG4gICAgICA8L21haW4+LFxuICAgICAgPGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuICAgICAgICA8V2F0ZXJmYWxsIFxuICAgICAgICAgIGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gJzMnIDogJzInIH0gXG4gICAgICAgICAgaW1hZ2U9eyB0aGlzLnByb3BzLmhvbWUuZGF0YSB9IFxuICAgICAgICAgIGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG4gICAgICAgIC8+XG4gICAgICAgIHsgbG9hZEJ1dHRvbiB9XG4gICAgICA8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgaG9tZTogc3RhdGUuaG9tZSwgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyByZWFkSG9tZU1vbWVudHMsIHJlYWRBY2NvdW50RGF0YSwgY2hhbmdlQWNjb3VudERhdGEgfVxuKShIb21lKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZWJvb2tsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdHJlc3BvbnNlOiBudWxsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHRsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0XHRzY3JpcHQuaWQgPSBcImZhY2Vib29rLWpzc2RrXCI7XG5cdFx0c2NyaXB0LnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0d2luZG93LmZiQXN5bmNJbml0ID0gKCkgPT4ge1xuXHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdGFwcElkICAgICAgOiB0aGlzLnByb3BzLmNsaWVudElkLFxuXHRcdFx0XHR4ZmJtbCAgICAgIDogdHJ1ZSxcblx0XHRcdFx0dmVyc2lvbiAgICA6ICd2Mi44J1xuXHRcdFx0fSk7XG4vLyBcdFx0XHRGQi5nZXRMb2dpblN0YXR1cygocmVzcG9uc2UpID0+IHtcbi8vIFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbi8vIFx0XHRcdFx0XHRsZXQgdG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4vLyBcdFx0XHRcdFx0RkIuYXBpKCcvbWUnLCAocmVzcG9uc2UpID0+IHtcbi8vIFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZSB9KTtcbi8vICBcdFx0XHRcdFx0XHRzZWxmLnByb3BzLmZMb2dpbihyZXNwb25zZSwgdG9rZW4pO1xuLy8gXHRcdFx0XHRcdH0pO1xuLy8gXHRcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZTogZmFsc2UgfSk7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y2xpY2tCdXR0b24oKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGlmICh0aGlzLnN0YXRlLnJlc3BvbnNlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmZMb2dpbih0aGlzLnN0YXRlLnJlc3BvbnNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0RkIubG9naW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0bGV0IHRva2VuID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuXHRcdFx0XHRcdEZCLmFwaSgnL21lJywgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2UgfSk7XG5cdFx0XHRcdFx0XHRzZWxmLnByb3BzLmZMb2dpbihyZXNwb25zZSwgdG9rZW4pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlOiBmYWxzZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGZhY2Vib29rID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVNBQUFBQStDQVlBQUFDTEtNYmZBQUFLeG1sRFExQkpRME1nVUhKdlptbHNaUUFBU0EydGxuZFVVOWtXaC9lOTZZMldVS1dFM3BFaVhYb05vQ0JWc0JHU1FFSUpJU1NJV0xBd09BSmpRVVVFS3pvaW91QllBQmtMWXNHS1lPOERNcWlvNDJEQmhzcTdnUWN6YTlhYi85NWU2OXp6M1gxK2Q5K3pUMWxyQTlCYnVCSkpKcW9Da0NXV1NhTkQvTmt6RTVQWXBFZEFBZ1RVUUJ2b1hGNnV4QzhxS2dMKzFUN2N4clNZM2JCVnhQcFgyZjhlVU9VTGNua0FTQlEybk1MUDVXVmhmQVJyMjNnU3FRd0FGNHY1VGViTEpBck94NWdseFNhSWNabUMwOFo0aDRKVHhoajdGdFBFUmdkZ21nc0FaRHFYSzAwRG9OM0UvT3c4WGhvV2gvWWVZM3N4WHlRR29KdGc3TTBUY3ZrWVl3MXNzckt5RmJ3V1k0dVV2OFZKK3h0enVTa1RNYm5jdEFrZXl3WDdFdnR4b0NoWGtzbGRNUHJ5LzN4a1pjcXg5Um8xZmV4Sno4MklDY2Q2TTJ6TjhubmNvSmh4RmdvNGlqMGI5VXRrL3RIakxKSnhZc2RaS0ErTkcyZDVScHpmT0dka2gwL294U25USThmOXZOd0FiTzNIWWhZSVl4UEdtUzhJREJwbmFYYjBoRDQzTDJiQ1h5QU1tRDZ1U2VlR0tmWjdkRzVjS1ViL1pVRm15TVIvSmJLb2lYbUtNNmRQNUpJcURaN1FDSEwveWxjbWpBMGRqeVBERHNBNHA0cUNPZU1zbElaTytDV1pvMmQ2ZEE1U2VmVEVPZ2pFY1JOcnlPY0dUcXd0eElJUTVDQUdQZ2hBQ2ltUURaa2dBellFZ2doeVFZSzljUUhiYnBrZ0h6dGpBQUhaa2dWU1VacFF4dmJEYm9YQWhzMFI4K3hzMkk3MkRrNmd1R01LRGNBN2pkRzdnMmhjK3N1WDB3YmdYb0x0cCtKNHN4VXFBSzR4d0xHbkFNd1BmL21NMzQ2ZDB4TmRQTGswYjB5SFYzUUVvSUl5c0xEYnF3L0dZQUcyNEFndTRBbStFQVJoRUlsbGtnaHpnWWZsazRWbE1oOFd3VElvaGxKWUN4dWhDcmJETHRnTEIrQVFOTU54T0EzbjRUSjB3UzE0QUQzUUR5OWhFRDdBTUlJZ0pJU0JNQkZ0eEFBeFJhd1JSOFFOOFVhQ2tBZ2tHa2xFa3BFMFJJeklrVVhJQ3FRVUtVZXFrSjFJSGZJTGNndzVqVnhFdXBGN1NDOHlnTHhGdnFBNGxJNnlVRDNVREoyTXVxRithRGdhaTg1QjA5QWN0QUF0UWxlamxXZ051aDl0UWsramw5RmJhQS82RWgzQ0FZNkcwOEFaNG14eGJyZ0FYQ1F1Q1plS2srS1c0RXB3RmJnYVhBT3VGZGVCdTRIcndiM0NmY1lUOFV3OEcyK0w5OFNINHVQd1BId09mZ20rREYrRjM0dHZ3cC9GMzhEMzRnZngzd2tNZ2k3Qm11QkI0QkJtRXRJSTh3bkZoQXJDSHNKUndqbkNMVUkvNFFPUlNOUWdtaE5kaWFIRVJHSTZjU0d4akxpVjJFaHNJM1lUKzRoREpCSkptMlJOOGlKRmtyZ2tHYW1ZdEptMG4zU0tkSjNVVC9wRXBwRU55STdrWUhJU1dVeGVUcTRnN3lPZkpGOG5QeU1QVTFRb3BoUVBTaVNGVDFsQVdVUFpUV21sWEtQMFU0YXBxbFJ6cWhjMWxwcE9YVWF0cERaUXoxRWZVdC9SYURRam1qdHRCazFFVzBxcnBCMmtYYUQxMGo3VDFlaFc5QUQ2YkxxY3ZwcGVTMitqMzZPL1l6QVlaZ3hmUmhKRHhsak5xR09jWVR4bWZGSmlLdGtwY1pUNFNvVksxVXBOU3RlVlhpdFRsRTJWL1pUbktoY29WeWdmVnI2bS9FcUZvbUttRXFEQ1ZWbWlVcTF5VE9XT3lwQXFVOVZCTlZJMVM3Vk1kWi9xUmRYbmFpUTFNN1VnTmI1YWtkb3V0VE5xZlV3YzA1Z1p3T1F4VnpCM004OHgrMWxFbGptTHcwcG5sYklPc0RwWmcrcHE2bFBVNDlYejFhdlZUNmozYU9BMHpEUTRHcGthYXpRT2FkelcrS0twcCttbktkQmNwZG1nZVYzem85WWtMVjh0Z1ZhSlZxUFdMYTB2Mm16dElPME03WFhhemRxUGRQQTZWam96ZE9icmJOTTVwL05xRW11UzV5VGVwSkpKaHliZDEwVjFyWFNqZFJmcTd0SzlvanVrcDY4WG9pZlIyNngzUnUrVnZvYStyMzY2L2diOWsvb0RCa3dEYndPUndRYURVd1l2Mk9wc1AzWW11NUo5bGoxb3FHc1lhaWczM0duWWFUaHNaRzRVWjdUY3FOSG9rVEhWMk0wNDFYaURjYnZ4b0ltQnlUU1RSU2IxSnZkTkthWnVwa0xUVGFZZHBoL056TTBTekZhYU5aczlOOWN5NTVnWG1OZWJQN1JnV1BoWTVGalVXTnkwSkZxNldXWlliclhzc2tLdG5LMkVWdFZXMTZ4UmF4ZHJrZlZXNjI0YmdvMjdqZGlteHVhT0xkM1d6emJQdHQ2MjEwN0RMc0p1dVYyejNldkpKcE9USnErYjNESDV1NzJ6ZmFiOWJ2c0hEbW9PWVE3TEhWb2QzanBhT2ZJY3F4MXZPakdjZ3AwS25WcWMza3l4bmlLWXNtM0tYV2VtOHpUbmxjN3R6dDljWEYya0xnMHVBNjRtcnNtdVcxenZ1TEhjb3R6SzNDNjRFOXo5M1F2ZGo3dC85bkR4a0hrYzh2alQwOVl6dzNPZjUvT3A1bE1GVTNkUDdmTXk4dUo2N2ZUcThXWjdKM3Z2OE83eE1mVGgrdFQ0UFBFMTl1WDc3dkY5NW1mcGwrNjMzKysxdjcyLzFQK28vOGNBajRERkFXMkJ1TUNRd0pMQXppQzFvTGlncXFESHdVYkJhY0gxd1lNaHppRUxROXBDQ2FIaG9ldEM3M0QwT0R4T0hXY3d6RFZzY2RqWmNIcDRUSGhWK0pNSXF3aHBST3MwZEZyWXRQWFRIazQzblM2ZTNod0prWnpJOVpHUG9zeWpjcUorblVHY0VUV2plc2JUYUlmb1JkRWRNY3lZZVRIN1lqN0Urc2V1aVgwUVp4RW5qMnVQVjQ2ZkhWOFgvekVoTUtFOG9XZm01Sm1MWjE1TzFFa1VKYllra1pMaWsvWWtEYzBLbXJWeFZ2OXM1OW5GczIvUE1aK1RQK2ZpWEoyNW1YTlB6Rk9leDUxM09KbVFuSkM4TC9rck41SmJ3eDFLNGFSc1NSbmtCZkEyOFY3eWZma2IrQU1DTDBHNTRGbXFWMnA1NnZNMHI3VDFhUU5DSDJHRjhKVW9RRlFsZXBNZW1yNDkvV05HWkVadHhraG1RbVpqRmprck9ldVlXRTJjSVQ2YnJaK2RuOTB0c1pZVVMzcHlQSEkyNWd4S3c2VjdjcEhjT2JrdE1oWld6RnlSVzhoL2tQZm1lZWRWNTMyYUh6Ly9jTDVxdmpqL3lnS3JCYXNXUENzSUx2aDVJWDRoYjJIN0lzTkZ5eGIxTHZaYnZITUpzaVJsU1h1aGNXRlJZZi9Ta0tWN2wxR1haU3k3dXR4K2Vmbnk5eXNTVnJRVzZSVXRMZXI3SWVTSCttS2xZbW54blpXZUs3Zi9pUDlSOUdQbktxZFZtMWQ5TCtHWFhDcTFMNjBvL1ZyR0s3djBrOE5QbFQrTnJFNWQzYm5HWmMyMnRjUzE0clczMS9tczIxdXVXbDVRM3JkKzJ2cW1EZXdOSlJ2ZWI1eTM4V0xGbElydG02aWI1SnQ2S2lNcVd6YWJiRjY3K1d1VnNPcFd0WDkxNHhiZExhdTJmTnpLMzNwOW0rKzJodTE2MjB1M2Y5a2gybkYzWjhqT3BocXptb3BkeEYxNXU1N3VqdC9kOGJQYnozVjdkUGFVN3ZsV0s2N3QyUnU5OTJ5ZGExM2RQdDE5YStyUmVubjl3UDdaKzdzT0JCNW9hYkJ0Mk5tbzBWaDZFQTdLRDc3NEpmbVgyNGZDRDdVZmRqdmNjTVQweUphanpLTWxUVWpUZ3FiQlptRnpUMHRpUy9leHNHUHRyWjZ0UjMrMSs3WDJ1T0h4NmhQcUo5YWNwSjRzT2pseXF1RFVVSnVrN2RYcHROTjk3ZlBhSDV5WmVlYm0yUmxuTzgrRm43dHdQdmo4bVE2L2psTVh2QzRjditoeDhkZ2x0MHZObDEwdU4xMXh2bkwwcXZQVm81MHVuVTNYWEsrMWRMbDN0WFpQN1Q1NTNlZjY2UnVCTjg3ZjVOeThmR3Y2cmU3YmNiZnYzcGw5cCtjdS8rN3plNW4zM3R6UHV6LzhZT2xEd3NPU1J5cVBLaDdyUHE3NXpmSzN4aDZYbmhPOWdiMVhuc1E4ZWRESDYzdjVlKzd2WC91TG5qS2VWand6ZUZiMzNQSDU4WUhnZ2E0WHMxNzB2NVM4SEg1Vi9JZnFIMXRlVzd3KzhxZnZuMWNHWnc3MnY1RytHWGxiOWs3N1hlMzdLZS9iaDZLR0huL0krakQ4c2VTVDlxZTluOTArZDN4SitQSnNlUDVYMHRmS2I1YmZXcitIZjM4NGtqVXlJdUZLdWFPMUFBNTdvcW1wQUc5ckFSaUpXTzNRQlVCVkdxdUJSeFhJV04yT3NhSitWelNGL1lQSDZ1VFJFUmVBV2wrQXVLVUFFVzBBMjdCbWlqRWQ2eFhsWEt3dm9FNU9FdzN6S0N3MzFjbHhGQkM2RkN0TlBvMk12Tk1ESUxVQ2ZKT09qQXh2SFJuNXRodXIxZThCdE9XTTFkNEtOVkVGb054Y1U0bEZ2bHFJVGZzZjloL2N3djJCT2l4cHN3QUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWpkcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU1TNHlJajRLSUNBZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0FnSUNBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWp3dmRHbG1aanBZVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1BIUnBabVk2V1ZKbGMyOXNkWFJwYjI0K056SThMM1JwWm1ZNldWSmxjMjlzZFhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rTnZiWEJ5WlhOemFXOXVQakU4TDNScFptWTZRMjl0Y0hKbGMzTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGpFOEwzUnBabVk2VDNKcFpXNTBZWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xCb2IzUnZiV1YwY21salNXNTBaWEp3Y21WMFlYUnBiMjQrTWp3dmRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQZ29nSUNBZ0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJQ0FnUEM5eVpHWTZVa1JHUGdvOEwzZzZlRzF3YldWMFlUNEt1c3QrSVFBQUtmWkpSRUZVZUFIdGZRZGdWVVhXL3kvbHBiMzBYa2tJa0FBSkxSQjZVd1FSVkZCQVZGUkUxNjZmcSt1bmE5bGQzZjFjOTl0RjkxTlgzVDgyeExJMnhMWVdSQkVSa040U0FxU1IzbnZQZTBuK3Z6TTNOM25FQkNraEV2Y2VlRzN1M0prelo4NmNPVzF1N043OVpHdmJrMi91aGF1REhkcGdnRUVCZ3dJR0JjNHVCZXpZZkgxTEcrNWJOZ1oyNDVjKzF5YkNCMUpxZ0VFQmd3SUdCZnFDQXRSMlJBalp1emthd3FjdjZHMzBZVkRBb0lBTkJTaDJ6SlE5OW9iWlpVTVU0NnRCQVlNQ2ZVWUJrVDMyZmRhYjBaRkJBWU1DQmdXNlVNQVFRRjBJWXZ3MEtHQlFvTzhvWUFpZ3ZxTzEwWk5CQVlNQ1hTaGdDS0F1QkRGK0doUXdLTkIzRkRBRVVOL1IydWpKb0lCQmdTNFVNQVJRRjRJWVB3MEtHQlRvT3dvWUFxanZhRzMwWkZEQW9FQVhDaGdDcUF0QmpKOEdCUXdLOUIwRkRBSFVkN1EyZWpJb1lGQ2dDd1VNQWRTRklNWlBnd0lHQmZxT0FvNjkwWldEdlIwY2VhQlZwTm5aUE5yUjB0b0dLdyt3bmMwK2VvTWVSaHNHQlF3S25Cd0Z6a2dBaVNCd3BQQ3BickJpVjBFRDBOREtrck4wcko3U0xTekFoQ0YrTHJCang0WVFPcmtKTm1vWkZEaVhLWEJHQWtpRVQyRjFNNmJFQmVHdnZ4NEJQMjgzdExXMWk0YmVra05zem81dGllYXpmWDhPWHZnb0NUN08xTGJZdDk3VnVVeGdBemVEQWdZRmVxYkFhUXNnTWJ1cUd5eVlGaCtNUisrZWkrQUF6NTU3NmFVckNTT2pFZWpuam9kZjNJWXdkd2UwVWpBWlFxaVhpR3MwWTFEZ1o2REFhVHVoVGZUNTdNcHJ4S0k1dzVUd0VjMm50YldWTC9rODFWY3JXbHBhTzdVbklVUjdlMUt1dFNmbUhYRCsxR0VZSFc1R2ViMFZEcUlhR1dCUXdLQkF2NlhBYVd0QWF1M1h0OExIdzBVTlhnU1F2ZjJweXpPNXo4NnU4ejZMVlJNMFltSTUyTFRYMXFZSkczYzNKN2k3T0tLUkpwa2hmL290M3htSUd4UlFGRGh0QWFUdXBreG9wUURSNE5TMUVVMzQyQ24vVG1wR0FaS1BGdUJZUVpYeTczaTZPU1BBMXcwallrTVFIUm5FTHFRZnplK2o3bXN2MGZvKzlYZG5rd1BzS2NHa1ZSRjZMZFRlempXd0kzNU9qdllLVDRrQU5sdGJ6aGtVWlhNd0VUZUJrNldmVG5QaG1TYkw2WTNGdHQrZWlDR2NlQzdSUzNoTS9LVk9qZzRLWlN1MSttYStUbjNGOURUaTB5c1hONHJKQmlmQnE2L2h6QVFRc2JVN1RUTHF3cWV1b1JtdmYvQURibnR0TDh4dExRaDFwVytIaTgzTlpJK0RIMWJpcVgrT3h6MjN6RlcrSHRGNDFLU2Q4Y3kxNGF0akpXaXJhUlRPd09nUUwzaTd1NTVUL2lRWnE4VnF3WGM1bFdpdGFVWVFoWEZzb09keDJtSmZNNHZlbitCV1dsT0hBL2xWcW1oa3FCZDhTVDlPbTFwb0pnY1JUTnhZS05SRk9Ja2lLK2I1K294U29MYUp6K0oweHJSd1g2WGh5dUk4V1pCK3k5anZmdFh2Q2U2a2dBdGtRR1NZK0NWdHRPdVQ3YWMzNndtV3N0RExheHV3TDdkQ2RteEVCM2tpeXMrRDlLRVczNXVkblVKYlJBa1ZkUTNZbTF2SnU5cklXeDRJOVhaWGMzZ0t6Wnh4MVRNV1FLZUxnZXp1QXU5OHNoTzNQYk1kRnc3elFCdkxwRlF1eWM1Zk5MY1ZIdTdPcWw2dnZiSHhwcVpHL1BZOFg3aTcydEgzQktSa04rQlllUXVjVFk3SCs2RjZyZE5UYTBob0lEdTRxNE1GOTgzd2daZTdDY1VWVGRpYjJZdzJCNllobkZwenZWcGI1cTJwMllMNEVEc3NtaENzMmo2UzNZaU1NaXZjbkUwb3E2N0YvaHdLR3E2OG1CQnZoUHQ1d2RMQ2VXMXR4aU56QWtBTEd0eHpzQ21wZ2N6dXlyaytnU0N4d1Z6dk55N1VEb3NuaHJCNTNxZitkN21mUCszcG55eXJZbXBJdWdVT2p1SWk2RkxIcHQyei9WWDhsTFdOVmd3UHRzZVNTV0dLdDNPS203RTlveGxlSklac3RuME5Rc3NHaXhVeEFlQWNocEk2cmNndWJNYUJYQXRjblozNmRBMzhMQUpJMTM3U3Mwcnh6cGNwbURMUURWYk9nNVc3WldtZEJZWE1KL0ozdGtmeHRsclVMN0wwMnZ5UTdnUTdGRkh6dWUvT0crRHI2NlhhWHZQMmV0ei82Z0dNQ1BiZ1l1bDdodWc2UUFjdW9LbzZLMktqUFBEYmU1YkN4OXNUNlptNXVPUFJ0YWh1b21CeXNsY0NxdXQ5ZmZGYlRJbWt5a2JjZmVVNExMM3NQTlhsTytzMjRyNVZleERxWVllSk1XYmN1VEJLTGJRanh5cXhmbjhkekM3MDJ6bTI0Y0Y3bHNQTnpSVU5EWTNZZGVzTEtHM2tCc041Rm1IN1V5RDlIbUsvZHl3WmcyV0xML2lwNmtoTHo4SHloOTVGRzl0Mm91VnpFbDM4Wkp1blU4R1ptdnpHSTdXNDgvSUVYSGZsSE5YRTlsMUplT0hxdGJob1dpanFtNnluMCt3WjNTTUJwRDFGamJoeGZoeCtkZTFGcXEyTjMrM0JpNy83RXJNSHV2U3BxZjh6Q1NCTnk4bktMY2I2N0RwY0dPWk1tNWgvcHFPNUZZdG5Ec2EwY2RId3BuUGIxY1VFZjE5M1JTQk5lSndSM1R0dUZ2WFRLcW9QUVV3RFdRQlNkaklnNnJUNGp1UWxJUDRNZVhXM2lLU0srQ3lrYmRsMVZMMTJBYWZuTVVuL1haY2ZtMU5hVHB1OUUycnJMUlJBcEUxakMrd2RuV0RYM0taVWVybGZkaytwcTdMUXBSTitsejVFdFQvUnppcTR5emlrRTZsbmk3c2p6U2MxTkxZbEpwUzBMNkR1SWVNNmNqeGVUaVkwV2UzUjNPN0hrZThCM00xM0ZEZmd2MFJBTE5FRXhNYnZkdU52bjYvSDdHSE1EK00rWW0zM1ljbW4wTU9aV3E0TEY2aVFwSTN1QituUEZoZXQ1ODUzMFNaYVQzS0RhR1hRd3Q2T0dpMy9TWkJEQkpqY0x4WVpoNjNHMVJPdFpQejJyQ2lXcEh3WEdzaXJoVy9kMFZVRlRLUnRlYkZ0blIva1V3SGJrV2l1RHVxN2l3UG56VjVwK2xJdWw3dnpRK3E0aUJuTC80cFhUb1NMdE5YSm81MzFkWnprdW1BbGZ3ekhsdFlLSitFSlJTK1paMzduZjlXWERSL0kvYjBKUDRzQTBnZlEzRVIvUUdVVFRGRnV5S3FveDl5eFlmaXY2OCtEcjVlclh1V3NmTGF6eFNtMUxjd2xERmxWVjQrMDBrcFVsdFdxKy8wRFBCRHQ1dzFQN3V5eThEdDRqdlhiNk5QS0w2dEVTa0U1dUdJQkh6TW1oZmlyaVMycHJ1Y0NkSUNQdXhzWlVSWktKd2hqbUowZGtGVlVpMGVmV2dzWEp6dlVVQ3RzcElEbUNzVFIvRExrMFk2SjgvVmdQVWRzekM0QnR0UHNFUmpuaS9GMDJwdGROWitNVnRqNUxneGRWVmVIUTJWVmtGNGpQTXdJOXZIaW9wRTZiY2dzS2tWaGZRUGNUU2JFQlByQzBkRkVQbXhEZFgwZGpwWlcwVXhtUnJxN0dSOStuWXl0dTQrcUJWZFVhWVczQ3h2WWxBM3J6Y002T210cjQ1aTNwNkl3MkJFaEhwb0RWbDFrR3kwdEZueWZScHlQbFFIRmxFNmp2REEyT2dTZVpyTVNTS3pTSStnYWREWDlRWnUySnNGa0VyTkJyMDRCN2VDQW5QeHltbUxFbllLa2pUVExMSzFBWmk3N1NxNW1SZExSaTdiZ1VCOGtoZ2ZDZzNPbnl3Y1JKblpzckxTeUNnZUtPVzkxNUZFR0xJSjhPTS8rWG5CemNWRkJFNzAzRWY1MXBOZWhrZ3BVVjlaeFlHM3c4ZmZBMEFBZnVMbHFFV0s5cnY0cHZJVENPcHIrZVVqTG8xK0lwbXQ4cUIvOVZwNFVjSnFBa0xvYUxxMDBhNnV4bnp6SHhEdVJMZ2prcGl3OFoyYjdrcUNyZytKUm1yU1ZuTjhVMXE4WGZEaERIdVM3V05iM01yc3AyaDdIYlByTjhzbW1aTU5zYUdyQTBaSktGRGMxODAvbm1PaEw4eUlQT3ZkNG0yMFRwL3I5WnhWQW9oNExSVVRhSHE2dzRLNElPak1wZklUQmJFRk5tRzFCSDM4WGZtbHRzV0p6Wmo1bWhyVGl3UVd4aUJrVXJ2Qk1TYzNHbDF1T1lrdW1DUk1pUWpuZm9rSFFUMkpwUWxwQlBoWWsrT0QzeTJkUW0zTkJWbTRSWHY5a0w3VTdOeVNPOHVaRXR5S0x2cE1HcTRQYXRmUlJhLzBCTHZaMHl2czYwYmRpajZyYU50cnAxSWJjN0RGM1hEZ1hxZ2xITWt1dzlXQXVYcnA5TXNhdUdxb1k2T0NoTkx6OTZWN2sxYlRBMTlQanVCMWIybTJncWpsMmtEdXVtUlhFYXkwb0xHM0FsL3RxRWVqbGdZcWFTaXliSGtqOG5PZzhic1BYdTByUTBPSkFQSnNSSDJhUHE2aWRDb05tOGRoTldWVTlCdmhyVE5uSW96aU9uTFBmUEJLTDhGRGZqdG54OW5MSGc0K05vVm5yZ2kxSkZKS0NBRUhtdmFRa0g0OWZFWThMcGkrQ2k0c3pVdE96OFMvNkF3OFh0eURZMTVzTGl5dXhPOUNhVUZkcWErdHg2WjMveG9DaGdSVCtMV3B4aVpaVGJtbEZNSVYybEE4MWE4N0Q0Ync4ckpnUmlxbDNUTUNncURDVkxsTERqU1RwVUFiV2Zua0FXZVZORk1KVU03bFltN2dwYnMzT3hUV2pQUEhySmVQaFE3bzBOamNqTlNNUG4yeEt4YkVxVHd3SThGY0NXemFrb3dYRmlIU3J4OE1MWXhtdERhSHdzOGVSOUZ5cy9Ub0ZSeXM5TUhLQTVpZXpIVXB6TTRNZkpWbTRhK0hGQ09lRzFORFloSzgzSDhTcmU3SXdNenFDVmJYSVp4UDczWldUaHdXeEx2alZSWEVJRGZhSGhiNmIxSXhjZkxZNUZTbmxac1FFQjFJd2FOcVg4T2pPM0h4TUR3T3VXaHlMeUhDSkhnT1oyWVhZc1BVSWZzaGl3Q1U4aElLWnZpY3ltdzBwV1VzTC9OVFcxNk9wdmdRM1h4QUJkN01yVE01bTdFcXBKQzgzVWs1U21PdE1xbG8rODdjK0ZVQWE4aklDZWJVUHY1MHBaU2c2UWFTZVh2eHpDeDhkcjR5aVFqeTNZalF1dStSOCtQdjdLaWFXYTVmU2xGdXhyQlR2cnR1QUo5NDdqUGdCWVVyZHppOHR4S3I3NStEQ1dWUFZBcE82QXJQUG00Q3k4Z3BNbVRRT1JjVmwrTXMvUHNIRzVCb0V1RHNwRFVycWlMa2pUc0xZRUdmY3VtSUJ3a0lDa1h3NEExc2ZYUWMvVHhmY3NHdyt3a0lEc1d2UFFkeDhyUU5Hanh3dXR5a1lQU29PNDhlTndLOGZleHRWelZidVhJNGRRa2lpVTdzckc3QjRlamh1djJrZW5KMmNrSnlTaGplMnZzWGQwUlhSZ1U2NDdjYUZDQWtLUUNNWFJjMVRiMlB0OWdyNktScXhlTjVVWER4M0tob3BqRmEvdFo1OXRlSG01Zk9WRUY3OXIvWFlmN2dBZjN6b2FyWHI2eHJLbUZIRGtUQTZEb2NPWjJMbFZhdlV1QlNTbk9qLys5MVZtRFpsdklZMDMwZU9HSTZ4WStKeC8rTnZJNzJza2NxaWN3YzlPaXI5NkFzWkphMFErZHdVeEh4VHdBMXRtSzhud3Jqaml4RExMeXZCbWtmbWsrNlQ0TVR4MnNMRThRazRiM29pL3ZqVSswaWhGdVpHVGFlbXBoanYzVDhMczgrZkRDK3Z6dXgrcTlWSzB6SWZUNjlhaHkvMlZ5QXF5QjlKT1FXNGNxSTM3cjdsUmd5UXphZWRnOFdzdm1KaER2N2Y2ayt4ZmgrMUtDNWNXL0QyTkNNcCtRK0lHeDdiVVR6L3dobVk4dkUzZUhUTlhzU0dodEFQWTBWVkZUZXNlMmRpeml3TkYzMHRXSGp0dWl1TDhNcWJuK0wxYnd1Smkyd21yY2d0S2NMSzVhTngrYVhrVWI5T0htMGhqMTUzWlRsNTlDdjgvWU1VREE0Tm93bW1wYURvQ05oeFk2bXZxVWRPU3lsV1A3WUkweWFQVXp5K2NVc1NQdDY2UlpuNXNqNWw1ZlltOUtrQTBvU0tKcTFsRUdJRGF6b2hmNUIvSkhvaElLcm51UUtTdS9GVmVnSCtlVU1DYmxxK1VFMUtRMk16MGpJTGxEWVFNemdNSVNGQlhOQlhjRmQ1RDA5K25JVmlhaG1yYjUrT0JmTm5xV0UwTkZBYk9sYkk4VG9nTm1aUXgvZzhhTXBJTG8zeUZkZ00yZVlybkdnS0NaZ2NLVWphWjkrRmtRb0JXZHhORkRLSGp1VFFoR2hCTEhHUityRkRvckYwL2hqYzhmSkJUQW4zUmpPdkNZai9Jc2JUQ2JzT0ZhT0U1bFI0YUFDQ0F2MXdXVUlRWHRoY2hwWExoc0JQYVFMVXZxaVZqQmdhaHNlL3pNTThPaVpqQjh2T0REU3p2L1UvSE1QQzgyTVZMYVJNY2tuS2ExdXhOeWtMQThQOUVDcG1KcUdZWmtCcGVTMVNNMHNSR1dCV1pmTG02ZUdPaWVQSElwbDR5OEllUXROTHpKV295SEFzbVplQUsxWnV3NXdoWXRKcWVIZmMyT1dMSzUzYnp6dy9EYzdPakpSeTF4TDZtQ2hFc2d0cThPMkJHdXdwYWNKek4wNkRMRzZCdklJeWJONStoRnFPRlZQR0Q4YmdnYUVZRkIySlc2K2JnOG4zZllwSTF4YXN2RzBtRmkrY3JlclhNa3g5bFBscFp1YWt4UTRLUS9UQUFYamszbXRROWFjMzhOcWVRdnptL0FBOGVQZFY4UFB6UVQxTjR2UmpSUlJ5RHRTeWdsazNFdmZjZGdWSy8vSW05aVZYVWpIV1psVUV4U2h1R0xWMWpUaHdLRXY1T1lkRWg4S2I1dGZWUytZaWc0R1pUL2JVb0t5MkZrL2RPaDFYTExwUTRWTE5NSDZhamd2bmVRQTN1bnZ2V0lhYStqWFlrRlNQR3ZMazNaZkg0YWJyRnlrVHRLbkpncFMwTE1WelExay9pSnZLclRjdW9UYjNEbDdrbkxyVGJMWGxNNnVGb1VtYXkyczIveHJUcHlhcVByZnZPWXJIL3JtWndwQ0JEOUsxdzZlbHJ2Yk9XNThLb0hjKzNFcG1MS0h0NmtRaTJlRUk3ZitFSVdZU3o0ckVVRmQ4dnllWDZ1Z1hTb01RUjFwMVhUTW1qbzNHbkJramVtZTBwOWlLQ01MYVJndm1EM0lqRTA5V0M2Nit2aEd2dlBVTi92ZWpWTGh3REE4dmpjTlZsOHNpY01MQytkUHgzc1kxR01IRk5IWFNhTldiMUYvejNpWTgrbTRLSjkwZTkxMFdpK3VYbnNjRkxtYU90VjA3c1dXRjQ1RVVoaFdRVDcyV3JiUHl6ZmUveFUydkp5UE9iSTkvL0dZbVprNFpwZW9QR3pJQTlSVzdZSy9KRFZVbVBpby9odlRmNFE1K0o5VnlFVUQrMUJRUzRxaXovM1VmRXY0eWh3dklwTkdmbThQdzJFamFHT3N4YkdZc2hZUHM4RUIrWVNuV2JTN0JvdG1kdmg3SmdOOTdyQVpUcjN3ZnEvOG5FY3V2MHFJOVl1SmNNUE5EakwwaURFT0R6QjBNTEFHQTl6LzVIbmUvdEJjbFBFLzQrU016TVhlV3h2U1JFY0ZJQ0hSR0l4M2NzaC9wUWxkMUxtOFVNcm9tNE8zdGpUdHZ2YWJ6RWl2YkUrKzlCMUt4YnZ2SHJHclBoZTNMUlYya0JQVHF0Ny9GbngvYXovb2wrTzgvVE1CZkg3MUYzUnZnN3dOc3JzVGxqd3pCM0FzbXE3THlpbW84KzhvR1BQZE5EZ0o1K1BsWmFpTG5UUjJKZ0FBL3pKK1ZnTmMrWDRkYmwxK3ZoRTl4U1RsV1ByOE9mM3M5amJ0bkcxNThaQ28xamdzUkhCeUE1VXVtNDVXblgxVk9iV2xZYUZYRlZJVm5YbHFQSjlablk1U1BDZjk3MTNSTW56d0NydVNiUlpkTXdaOS8veEx1L08wUVhEUm5pc0tsb3JJR1Q3KzhIazl1eU1GQXN3UCtkR01pTHJsd1BEdzkzYkdDdEg1cXhXcGNQTXdMU3hiT1VzSkhOcnhYT2RhSDMwdUJEM2xPZUhUWm9tbVFqZXZLeTJkaHc0NDFXTStRZTRlWndWN3M3RnJ3eFZlM2RBaWZ6VDhrNCs0bnYxR2FraWRQSGdqdm5BM29Vd0cwZzZmWm4xcVpDcjhwN2lqaldhNTQraEFDdVNERTMrQk9wK3ZoL0RxOHNUZVpuakJtamRKbjJaemFoRGVmMWhqZjFpdzdHNFRvcmswSlYyNmlqK1RKUllNUTZPK25xcVFjemNZRDd5WmpmS0M3aWlJOHVHWVBFc2RFSTI3b1FPNzhnWmcyTWtUVkV6TkdJRGUvQlBlOHNSK1RnajNwQzJuRm45N2VqOFRSVVJnN1NsTy9kVk5UVlQ3Qm03N29iS3ZrNWhmajAyK1BZQko5SGR1SzY3RnJYM3FIQURLNzBRRktIMVBYKzRTT0pqTFV3WlJjakU4WXFnUk9lQWpITnRDWjJwRG12em1Xblk5QkE4TTVuZ0RFakhMQ29BRisxQ3cwVFd3bisrQUVkUWhEaFE4RmhUSXlRa3lzMTJsdWlJTVdvNXpwb0thV3A1eWxHaE9MZWJkMmZSS2k2V3Z5WjdPYnRoM0dsQW5EbWZObFZtdENjc0FFeitNN3NSMjU5bDFNUFl0TmRyajhkcUVBRXZkUlM1c0R4Z2U3NE85djdNQzM2ZXVVczN2S0JCL2NjSmMzd29JR1lQYk1NUjBOaW9sQ2JzUG8rRWk0RXdlQmZRZlQ4T2pMeWJob1VqRHl5aHV3NXNOOWpFUmFsU2FhWFZpRGU2NGFqdUFnalNjS2k0clJacTNCWTcrS1ZENmFvdUpDbEZkVThiby93c1BvaDVsRWM1Q2JqUTRIRDJYaTl5OG1ZLzZVWU96Skk4OS91QjBqNDZMZ1RYK1Q4TkNZUzdrcEVCZlJGQVgySjZYanNkZFNNQzh4Q0xrVmpYajJyZTNrbjJodUlJR0lIQkNDeGFOOU1USW11QU1mOFJIZDhlb2V6SXJ5VVdrbE43MjhFNVBHRHVLR0VxV0U0dFF4QTdDZTQ5TjVRK2cyYWNJWWFxRmE4Q2VOL3JnN0h2K0FtcDhQanoyWnptcldkcDhLSUg4Zk55VE05VVowQU5Wck1xUTRSQ1gwTG53cWtSOXZaa0V2SE9xbGlDNUVhWWp3UUZTRXBzNnJ3clA0cHNMcXhJUC9DV0lmUzdpYkM2ZThHUkdNVUlobUlGQld6dWhDYVRQY0lqVFNGUjVxUkNWM0tBSFJnc0tEZlZCUlZjZUZxRjJ2cDFPdmtkcUJPY3FYanVsV09GT3JLaXVYU016cGc3NFhpWW5ReURiZHFVMXhpNVgvSFNENGQ3ZUF4UytTU1BwdjJKR0ZKUXZxbWViZ1JTWU94czBMd3hFWTRFc1R5NEovYjlpRGE1ZDRjUUdZTVc5c0VCZEhwR3EzaWY2ZlhRZHlBTGNmczAxbjE1M2ZkRHc3a0dyL0lrNW9NVm1jSEYyVjMwWG1YZzl2YzlxVlg2bnJQUjIvMmJ6d2hpd2VXZVRQdlBRbDNCZzVreks1Vjh6Nm9ySTYrTkdISk5HdjVMd2NQTE44Qk02bnI4ZVAycDc0dmN5c0wvTXBXbVhuK1VWNzBrTHorWWl3T0p5YVIvUE1yUHhJQVJTVXFYazF1Smg1TWd3ZGNsZHB4SE9QaklOVHV5a2NOMndJbnZqRDRBNFVaZHhpTWd2NFU3dGFQREtJem5CTkFFbWZPWG5GUUREeFk4VkJQazdJS2FwREFUVkxFVUNPTkdlSFJYakNsMUUzQVJHT1I5THlFQjNCWERuZTY4ZmdRM1ZESGJKeVJJTU5WQnJQSUdhVkIvb3pTNTc4S3BCR2gvbEFEeFBIeGxRSHZnYTdPaktQTEU4SklPSHprQ0JxZkxJNXFkcGtFNWFKOE5jaGxKcng0bWxoV1BsRlBpWU9DT3lvcDEvdnpjOGZjMUp2dHQ2bHJmeGkydVh2bDJEUFpCSzN3b3FvUWE0WTVNdElCVFVnMFRaS2FpM1lzTHNTY0NVaHl6bGhrUzVZRmFRSnBDNU45ZXBQMFVLY3FEcUxJR3hWY3lnc3BCUXh0YkMxWDNxWHNyMWFPbllQOExnRTc5SXZzcHhoVEFtWHQ0T1RDQ0kvT2UwdnV5ekQzTlZWOU5Qb1U2L1hPcjFQWVNacFNlVnpkRkdSVlEvSEk2NDZrV3F1VkM4M3BsZmpXRmFoSm9CbzlreWlGaWZtV0ZWVkxkWjhrWUtMNXlReS84Z0RVOFlOb1JOYzArYlNHQVZNeTZ1Rm5aZVdYMk9MdGVwS1ZwUzgya0ZoeDN3WEVlVE1TRGdlaUx2azFZaHFiMHNObVl1VEJSR1dmMXFWaElpaEFiQndjVXJQVFd4UGp2T0VlYnZnS3g3OWVQZWVXY29wSzZINXV2b21aTkJQY3pqdE1GcXNqVFJIWnRwMHBVVXY5UUpKb1pCNVZXRjh0S0RWVW9jNWtRMHFKU0tEY2txRnlOc3hMMllJUGp1dmpPWWY1NXBqa2dWdHNWajR0WVgrcGxhVTE5RVliQmNPYWxlUXBDZnlnOVNUbDZRcmlBRFZ3YzVlQWdmNkwyblN5cDRvTE1sYmRuYVNtMFhjcEEyQzNOYkM1OUswNmMrbVVlM0pkYTE5clU0TDY3WFhaNEZxMjNhM2tqSTJsSnRYd2tpYnI5S0VybDA2Qjl2MnY0SUtwaGlZNlE5VVBDYU45VEwwcVFCYWNjVUVYRFlubnVueER0eUpITEZsWnpxZSt2UW9SZ2E1TXZMUmhJV0pJWGorZ1JGS3JaWmRVaHlLb1R6L0pFQzZualZvcks5RjVtY0hrVFBSRjlZbVRwNzB4WWwxZDZYVzArWkdwMllWR2FsWmFUZytQQzhEcHpwVU1nU3NmREhlVGZCaVZFTkFiTy9Dc2daa1VLMHVLNitDSDdXTFVPNVNkODMwdzdPdjdlZkt0NlBxUG9RYXhSQlZYNWp2VEVIajIxTnJSMnE3VXpCdTJabUtjV05pbGNONUZxTkVBb2ZUY3JGN2V3M3l5SXdTVnA0K1pSeGM2SnNRT0VLdDREcytnaVhHTEF0TkZaM3d6V29WeDJZMkN1bmZDK25jWUxWN2JCYmNTVFRWYlQ4aUJJWU1OZk5zRlZNMzJnV1FYbEV5akMrSU5OUFpQVkpwQ2FYTXgvcmozOWZoMmUrWkM3U2pFZzg4TUtCREFHblVrMVFINGt0d3BQWVNGeHVHOUkzZklucXhHN2JubHVPYU1lNzQ5UzNMNlVkeEp0Mk9ZSGRTcm9vSWlxYWJucG5EcU5ITHdOUndPRkM0dCt5aGhoUGJqTWxCTHZEMDhzTTNSeTI0WnE2V0J5VTRSNHBXdnprZmxtZ3ZiTTRweDgzanpFcWJrYjRsSVRDanhJS0thb2JxQ1NJNDQyTENrYjc1RzBSZnhudzU1cDlGbXVzeHNOMG5KeHJWTVdZMWUzbzBVc2hvd2k5MmNEaHpuajVGR0ZOYXhOSklLeWxsMmdqOWZBU3BVMWhheHlqRDhadElja29tTHI3L2ZYeTJjaW5kQ1pGc1B4ejMzbmdCNXR6N0VXYVBqdjVsQ0tDRWtZTVVFZlEzMlpIeW56L0EvQmwzcERKaUVSUGxoOG5qbWM5eWx1SDQ1V3JIRU8wNGZMYzVRZ2xHZldHSkNTT00rTWxYQi9EdXhnd3NYVkJOVGNDZmt6TUlUOTh3R28rL3NVM2xMNjI2Y1FhR0RJcFVHQmNVbGVQN3BGSmtWMW00a1BNWWFlRWhWNnJWRDk5ekxhWWs3cUFRdGNjY2huZTl2VFd0VHZBNDJjVm51ME9xYmErRFJwMHQyTlpSNi92NGdYYmNJYjJhS2R3UEhpMkNKUE9KcVJYQi9CQ0J0TXhDYW14dTJIY29CeE1UaHlNd1VET0JheWh3ZHlkbEkxUVl0MVYyYk52bTJyVVl5VDd1Mk9sQnM4QWIxOThXeUZ5aVpoUlZzWDc3UGJhM2FqSllTclRTNDlxMTZhTGpLNnZwQzAwK0s2bHROdk1JajYwQWtnQkdBMDNUSVR3a0szTW9VTStkUENzckUrQ0NkeHpSaHVrVE5VZTVYRlBtS3YxYU93L2tZdDRzalI0ajQyTHc0QU9Ec2VyTFE0aW5tYlRpeWtzd2xCRk1nYzA3MHZEM2J3cHg1NG9xbWk1dUdCVWZnNVZQSitMRmovYlNCTFRESlhjUHhBM1hYb29JK24rMlVsaDlNWDJ0MHBqVXpYeUxIeDZEeC84MkNvKyt0d2ZqL0p4eEZhTnU0bEFXa0VqZHRyMjF6TlVxcExPNlRtMXU4WEdEOGNqOXNYamg4eFI0Y0RpMzMzd0ovVDJhVnBwSkxmYURvelUwOFNSQVVFNUI1ay8vWFFTZXVYMHMvdmo2VnRYbVB4bE5rd2lqYXA5SnJEOGtVVUI2bTBnemplWmFlUW15OTlBZjljRjIvTzZlSUJXVm5EYVpiU3c3alAvNWR5NW1STkdNSkoxN0cvcFVBOUx0L0ZhcWd4S1NsbEFoalZTTm1lbDQxRlA3WlJmUXRRUFpNWG9YaE4xa29XanR5cWVFWXVYVkhSeWhHdi80SzhldzRic2tYTE40bWpyTGRNc05pekZqU29LS3VBeGx5TnRFZjRLWUExOXNQSURNU2d2Q2FYKy8rTTVPQk5Hbk1uaGdzQXFCTGwwMFh6VmZWbEdEb3p5bkZETW9vbjNKU1hFbkl4eUhBMWVudnFEMVQ2R0wvbDJOUVZadys2clZ5NlVOOWIzOUdVckh0Y2tmb2s0SDBmbS85MWd0ZlIzaWpOWWM0cktnTTdKS2VGcmRoSDJIaTFTVVR2ZGxWZEkwKzQ3SmhBTzhuWmtzMk54QlA3MHZDOXYwOWVTaFdUcHNkWWpuSW43MStjZVlhNVNCK0t0ZjFBUThMNnBqSU8zbWk2QXVnbG5IWFp1WDd1ZGNxQ1RoN002NjVKMzJkdlErNVZQTUNVK2FZWHV6YWxGYlMwMkNmdUFCRVNINDYrK1c0OGJVVFBxOHdqQnFSR2NVVC9IYUtCTTI3Qy9GOU8rVHNlQ2k4ZXFjNEVPL1dZSExMMDZuYWVyREJSeWh1a2cvVm9EMzFoK2hXV0xDMm4vdnhoMHJac09EQXZ6dTI1Y3hYMmVDTXJWanlCUGkwRzBrZjIvZmwwMUpMQm5aMnBoRVl4R0IvOEE5MXpQaU5wR0pqcDRZeVBDK2dHalFuMnhJd3NqaFh2Z211WnpKaVVtNGZQNEVtc0plK08yOTErUFNpMUtWcjBaU09hUTlDZVcvdzZUVGtWN096TTdudlYvdFkwckJMQlZOdStXR0pkVEtSdE5zczhOdytxaEVFTXU2K25qOVh1UXljejJDcHJHT2svUXRQakcvZUROZTM1S1BHUk9UTWZmOHNVb3pYbkgxUE94S1hvMGNucC8wZFpmTTY5NFZRbjBxZ1BSRjMrNW8wUWpRSVlWRmZSUlN0TnZYK2crdHFOZmVoZUZOUEZObHBkOUpRRHVYcElrQTZWNHIxYjZJUTlEU1lvK3dHQS84MzNzSG1SRnN4YVZ6RXBTZFBHcGtKd05uNTVYaXc4OTM0NW1QbU9UbEs2ZlZXL0hhNW5ScVE4L2g0ZXNtY2VlTTVnUTdvYXFtQVcrczI0YUZzNFpxQW9qSWFJdnArQVduNDJEdndHUThGVDNTN0h4N2t6UHNWSmxnTG1lbnVIQWRuU1dBSTBUand0UFVmTG1tWEU1TThiZlZpcVJjUUVndVo3QTJNUlNiZkNTZlVieFlSZnZNN0NJa1pWWmhERTJtSXpRanMzSkxNR3dJQlNYeFREbWFoKzl6R2pHUCtUbEVna2N5T2s5eXQ5bVpVTThUNzJOb0NuMndLWXNteGk1cUdFTzUwTnhvUW5DaE1PSUphb0p5MkZoQUh0Rmh4MnhjOEZ5YldnUXlwdmI1a09pVkErZW5jMGJVTGVxM283M1dyOHlaekkzYzQ4SjhGaVdBYlNaUHpUR2QwUlVOYlZqNzJSN2NlSlU3QW5pTVFoYXV2S1QvTFRzT004QVJRSzNXRDQ1c1kyWjhBQVd6UFo1WXZaTWJZU3RtVFl0VGp1QnhDU01WQW1KdTd6dVlpVlZ2YjJVa3lvTEpvV1k4LzFtYWNqWXZYVENlamwxZmpJanIxTjRMaXl1WWZyRUZiM3g5akVjKzZFQW1Id2xZbUY2d2JYY3lCZzRJWWg1WHZDcVR0L0tLV3J6OTBUYTh2WmxhcHFmbWMva3pjUkZjTDVnZXovd3NEeVNPSGFYcWk0RE5ZRjdabSt0MllPM1dYSVJUQUVuWnMrc09LVC9ScFJlT1Z2allKcWlLWnJYdWl6MTRnUzRQMlVSS0dkR1RlUk1RZWxucFErSXpSakdZRWRWL3ZMVUx3MklpbUVrZHlDaGVNRzYvYmpadWZYSVRrME0xY2EvenA3cjVETi9zWml4Ny9yVGFreFBaWCt5dHhJNlhMMGRpd2hBVnhlZ1FNRCtCbEdoQ1V2ZHpSbHZtUGZBVkZvN3p3NGRNOTM3K2hsRzQ3ZnJaaXVGdHBiTTBKNHRBeWlRVi9kYUgzc0syMUVxRThqeVB2a0Ivb3N2akxzc0NqQTF6cDBOUmtxdjBTeDFmOUFMVlgxNUpQWlBDTE1wSm5scmVpRWxSbmtpTUQrRmphTFVvUlE3OVExdjI1ZUVRRDJJTzVNVEtCdEhNcEs1RjB4a1c5WGRGU1ZrTlB2ajZDRGFYY0lVMGt3blRpN0Z6L1czMHZjUkI4anZ1ZitKOTdNMmdxczFJaGEyalQ1akNpVUlpS3RDTmowaHc1RmtzQzIxOVJ0ZTRzS0tDM0hnOHd4RlZMTXRpK0Yxb0k4NWNIemNUb29JbGxHMUhIeFVUNDNqZXlJbW5EcVd0cmlEeVhXZ24vVVl3UjBmYXJhaHBRamJURHZTMUhNenhCUG00cWtXUVhWekhuQ2dlaU9WRmNSNEhjSkdFK0dwaDJ3SnFQY1ZWUE5QSE5pUi9wNG50RGlkOXZaamRMWE5kd210RlBNaytuTkVkSjVwK291a2VZVlJKMFo2NHVUazdZQURIS1E4c0t5Y091Y1NoTzdEdFYvaW5nWXZvYUg2TjJ1VzdxeSthVmxHTkJXTUhlbUxLV0liWTNaeDRqd1Y3RCtWakk3VzVoRWhHbXpnT09laDdqT09UeFM2MHl1RWZXcGdSNjRQSll5S295UWlQMGM5QzArMlRIM0tVYVJmQ3FKalFXMmhSVk11TWRRcmVLV1BDRlUvSWVJdExhN0g5WUI3MjU5WWhnandxa2NvQUpvQkdCRElYaXRlVHNxcTRtQjF4M3Znb1BuVFBySkpKdjkrZGhZMkh5eEhaTGt4a2ZpanprRTFjWmhLWHNmR2hwS2VMbXV0anVSWDRmbjgrY2lxYktheWNGTi9Jbk1rOW1TeExqUFRBcEZGaGtLZ3pTNUZmVkkxdEIvS1FWTkNBQVY3Y2xGZ3FjKy9IY1lRSFNCMCszNGx6bEV2L3BSd1FydUxSbWhnNjdmeTh0UDRrVGVad1RyVnFYMVh1eGJmL1NBRWtrMVhFeDM0MFdDVFVydTIxM2RGVW1ER0lqT0xDU1pGSmswaGRCWGZ6a2daR1JkU3Fwam5BeG9MY0hOUkNGcWFVMCtJYmNtdXcvVytYZEpnMlc3YnR4dk92Zm9xU3lqb3NXekFaU3hkZHBOVGJJM1Q0WHY3ZmEya095WmtxL3BOT2JFRDZLT1ZqT2VySUFONFUrRDRNZjNjdDgyYVp6bndTVFN5Z3NDUWE4S1pwNjZ2cTJ6VFk1YXN3ck54VFRGcHdqZkN2amZDa093V1NEclYweUpkeHJISldMNEJ0T1RONkp6aktmUkxwS3hITmhpRFhaRU9TZnVVc2xveEZudGxkMHg0TjlLTzY3ODVYUWJWRlBVcFhFamlEYUtZSzNnSWllRXM0emdaWkZLem55VmQzb1BkYnlnVWlnbDRlV2hmb1RwOVVGN3JaM2l0Q1NIQXA0VDBTbFJQY1BOVjlKclhReWhpbDh1QzQvRGdHRlZVa1VqSUdlU3hNS1FXVGl1VHhIaFBiQ2VkaWQ2WkFieWFlZ3J1OHBQMUt0bDFLT29tQTFQcWcxVVVUVUlTTUxIVEJXNFJRQVlVVldRa2hOSDhiWmE3WUIrTmFta0JuZlgrYXZzSkRPc2g5T2k1bDdiaklWVG5KSHN4eFMrNmM3ZU5qRkQ2a2JTWEhXMXpQWUFwQjZoTkZCSkpIdlRtM2VuMGRweUxTWGNDWE5QZmdTNFNlK0xHRXp5dllwNEFiNlJOSTNEb3hVOFc5OHRiSmJiM1NYUDlvUkFncE80ZE0yRStCTEE2ZEoyVHlaSUdLSUxBRnVhNVByR2dqbzZrNXZQVHVEcVVHUjRRRjhOelhXS3JidzVYMjVza0RvZ0tpRXIvMHJ5MktZWVZCdVBuK0NHUkJpSlluMTRVeHRGMjNzMHdXb2E0MXlTSVViVWZTR2dRRUovM2FqeHB1TDlEdmtVT2JBdkxiZGdIWWp0V1dEbExQalFJbm11RlpBZjJhMEZNRXBEQjNBQm1XdVpvS2RGd2l2TVcwMGtDbmwvd1NocGRyY2o5SjNDUGVlcjhEMi90bFZiWEFwWTJlUUhBVDRlSXZrYnQya1B0VU9YRVVSVmFuclZ5V1BrU1FpREFJb0tDd0JibEg4Qlk4QlZUL0xMT2xrM2FsblpZeUdLbkhEMWNLdlJnNm5LVkUycEZrUzhsN2s5L1NudFN4cFQyTFRvZ0xtK2pnT2FrcklHM3BXdTJKZUZUVlpXWEJTZWNYUVZXME01azd3VS91OTJ1bm1mUWxaV2NET21mbE5Gcy9PMmoxakl6cXJ4YzZsWWs2SFpDSjBQYUY3dThXSnBMakRwdFNLdEQ2ekplNGRzRVlSRE9DNE1wRkk2WlJEcU1ReCtocmVmbTluZGllVGpPU0prQlh4ck50dVRzOHV5dVRlNFNKYlJlMmJUczlmVC9SUFNjYXEvQmpUOC9tVVl0SjNycEFUN2lkQ0ljdVRTakIybE8vWGV2cXYzdWlyMVU2N2tid0MrWTkzYU8zYWZ0NUlqcnA5WVJlb2psMUFQcytFUi9wOVU0VkY3bnZaUENSZWllYXc1TnRROW81RXpnekFVVHFpTVRzUzVEdVpDSEx4UFJ4MXljOVRGbG9ZdnZ2ejZqRXl3OTlnZG5SSGdpaVZpUklaNVEwWUN0OUE0azg3eFQyRThMbnBEczBLaG9VNktjVU9ETUJKUGF3T0E4VS9OaUgwUk5OeEV3UjhTSHZ0bUpFRmJORXU2NHVkcnpKTlJGMmNwNUtkaWZOMTlCeCtaejZJb0pSY1BTa3VUWW5paEVpT2t0VGNyUWtOek5ObHpsUjd1cjZxZXl5NTlRQURXUU1DdlFTQmJUWTRHazBKcnQ4VEtnek51M01WRkVOQ1NlTFpuSXlMM2xvazBEWHgzRkl5RmFndTdiMENOdUJRN2xJeXEyRlA1MXFZck9leXlCcWJCT2RPeElkRWorQnZPUllncFRKTlFNTUN2eW5VK0MwTlNEeFE0VFRjZmpHaGpSNDhPRGZndGtqNGUzNTQ2Y1pka2RnRVJ4dWZNWktqU1NKOFFsL0txTEVDRXc5SDgwZ3lWanlqSnV1cHAwczJJT0g4L0RNNjl2Z1FIVklVdFQ3eXlKVzR6UGtUWGVzWUpUOWgxUGd0TVB3T3QxRVo4bG1lRlZDc1dKZXFDaUlmdkVuUHNXczZyb3VKZUpqQzNKZGl1UXpqLzE0VVZCNU1Qd28vcnd1Vlcxdk03NGJGREFvMEE4b2NOb2FrTzNZQnZLc2pQaUMxQ253azVVS2xENFNmcFZRc3c0aWtDUS9vanZKSXJYQ21lb3ZKcDVvUHAxMzZYY2Jud1lGREFyME53cWNzUUFTelVUTU1SRW04am9Wa0tRd0VUbzZpUFlqUndSNkFxbC9ydnQ5ZXNMZEtEY29ZRkRneHhRNFl3R2tONm41Vkcya2lYN2hGRDdsN3U0aVlLZlFoRkhWb0lCQmdYNUVnWjdWalg0MENBTlZnd0lHQmZvbkJRd0IxRC9uemNEYW9NQXZnZ0tHQVBwRlRLTXhDSU1DL1pNQ2hnRHFuL05tWUcxUTRCZEJBVU1BL1NLbTBSaUVRWUgrU1FGREFQWFBlVE93Tmlqd2k2Q0FJWUIrRWROb0RNS2dRUCtrZ0NHQSt1ZThHVmdiRlBoRlVNQVFRTCtJYVRRR1lWQ2dmMUpBZjhwRi84VGV3TnFnZ0VHQmZrc0JPWHBsWDhjL2pkTDFCSHEvSFpHQnVFRUJnd0w5Z2dJaWM1VHNtUlRyeHIrZnBQMWQ3WDZCdVlHa1FRR0RBdjJhQW5MbXM1d3lSMlNQNHhWemg4TFBNeFhiVW1yUnlLZUdhb2RLKy9YNERPUU5DaGdVT0VjcG9KNTR3VCtPTW11MEp5NllQQVQvSDB1a1YvOVNxU3haQUFBQUFFbEZUa1N1UW1DQ1wiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW1nIFxuXHRcdFx0XHRzdHlsZT17IGJ1dHRvblN0eWxlIH0gXG5cdFx0XHRcdHNyYz17IGZhY2Vib29rIH0gXG5cdFx0XHRcdGFsdD1cIkxvZyBpbiB3aXRoIEZhY2Vib29rXCIgXG5cdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcykgfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRyZXN1bHQ6IG51bGxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHRcdGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanNcIjtcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fSAgIFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0cmVsYXlvdXQoc2VsZik7XG5cdFx0XHR9ICAgIFxuXHRcdH0sIDUwMCk7XG5cdFx0ZnVuY3Rpb24gcmVsYXlvdXQoc2VsZikge1xuXHRcdFx0Z2FwaS5sb2FkKCdhdXRoMicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgaW5zdGFuY2UgPSBnYXBpLmF1dGgyLmluaXQoe1xuXHRcdFx0XHRcdGNsaWVudF9pZDogc2VsZi5wcm9wcy5jbGllbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aW5zdGFuY2UudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHVzZXIgPSBpbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKTtcblx0XHRcdFx0XHRsZXQgcHJvZmlsZSA9IHVzZXIuZ2V0QmFzaWNQcm9maWxlKCk7XG4vLyBcdFx0XHRcdFx0aWYgKHVzZXIuaXNTaWduZWRJbigpKSB7XG4vLyBcdFx0XHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuaWQgPSBwcm9maWxlLmdldElkKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQubmFtZSA9IHByb2ZpbGUuZ2V0TmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmZpcnN0bmFtZSA9IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQubGFzdG5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5pbWFnZVVybCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC50b2tlbiA9IHVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnByb3BzLmdMb2dpbihyZXN1bHQpO1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3VsdCB9KTtcbi8vIFx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGNsaWNrQnV0dG9uKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5yZXN1bHQpIHtcblx0XHRcdGxldCBpbnN0YW5jZSA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7IFxuXHRcdFx0aW5zdGFuY2Uuc2lnbkluKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdGxldCB1c2VyID0gaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCk7XG5cdFx0XHRcdGlmICh1c2VyLmlzU2lnbmVkSW4oKSkge1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcblx0XHRcdFx0XHRsZXQgcHJvZmlsZSA9IHVzZXIuZ2V0QmFzaWNQcm9maWxlKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmlkID0gcHJvZmlsZS5nZXRJZCgpO1xuXHRcdFx0XHRcdHJlc3VsdC5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmZpcnN0bmFtZSA9IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0Lmxhc3RuYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmltYWdlVXJsID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuXHRcdFx0XHRcdHJlc3VsdC5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcblx0XHRcdFx0XHRyZXN1bHQudG9rZW4gPSB1c2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKHJlc3VsdCk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlc3VsdCB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdMb2dpbihmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmdMb2dpbih0aGlzLnN0YXRlLnJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IGdvb2dsZSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFYNEFBQUJjQ0FZQUFBQnB5ZDUxQUFBQUFYTlNSMElBcnM0YzZRQUFIdnRKUkVGVWVBSHRYUW1ZRk5XMS9xdlhXUm5XWVFZSEJNZFJoSEVRa0VYRGFDQ0lHdHkrTVJIVUNDYmlrb2R4UzRUa2tmY2VXZFNFR0kxUGVaRmdWQlFqZnUvQnA0bmpVOEhsZ1lwaEJKUjlHMGRrR1ZhWmpabnB0ZDY1M1YzZFZkVlYwMDFQOTB3M25QdDkxVjExMTNQL2UrdmNjODg5OXhiQWpoRmdCQmdCUm9BUllBUVlBVWFBRVdBRUdBRkdnQkZnQkJnQlJvQVJZQVFZQVVhQUVXQUVNaEVCS1U2aTQ0MFhaM1ljalJGZ0JCZ0JSaUJGQ01peDhvM0YwSzJVZ1NWMGliaXg0c2NxajhNWkFVYUFFV0FFVW9PQVlQamk4b2N1bjFreFpveGMrRnRIM2ZIMjRCNkRMdjZkWkhGTWtDeVcvbWFac0Q4andBZ3dBb3hBOXlNZysvMkhaYi83bzZiRG0zKys0YjhtZmtVVUNlWWZOUU13WS95QzZROHBHSExwT2tteTlPcis2akFGakFBandBZ3dBdkVpSU12K2hoUDdQaDM3K2FJcFgxS2FLTW5mWnBLUkxYL2d5QVdDNlk4OXg0cUh2dXRBdng1QzQ4UE9ESUdqVFg0ODhaWWI2NzZNd3Rnc0Nmc3pBb3dBSTVBU0JJaDM5eXdvSHZGN3l2eG11cUtZa2hFM0Y3TUFoOFdTOVMxQkVUTjlnVUpzSndaR2dSVTdSb0FSWUFUU0FZRVFEeGRNS1Vxelk4cjRKYXUxVUJEUGtuNzhUY2hZeFk4VngyUUVHSUhVSWhEaTRhZkUrTTFVUUttbGxITm5CQmdCUm9BUlNDWUNncGZITGZFYnpRU1NTUXpueFFnd0Fvd0FJNUI2QkFRdmo0dnhDMUtpSXFhZVBpNkJFV0FFR0FGR0lNa0lHUEp5bHV5VGpESm54d2d3QW94QXVpUEFqRC9kVzRqcFl3UVlBVVlneVFndzQwOHlvSndkSThBSU1BTHBqZ0F6L25SdklhYVBFV0FFR0lFa0k4Q01QOG1BY25hTUFDUEFDS1E3QXN6NDA3MkZtRDVHZ0JGZ0JKS01BRFArSkFQSzJURUNqQUFqa080SU1PTlA5eFppK2hnQlJvQVJTRElDelBpVERDaG54d2d3QW94QXVpUEFqRC9kVzRqcFl3UVlBVVlneVFndzQwOHlvSndkSThBSU1BTHBqZ0F6L25SdklhYVBFV0FFR0lFa0k4Q01QOG1BY25hTUFDUEFDS1E3QXN6NDA3MkZtRDVHZ0JGZ0JKS01RTnAvY01WM3VCN3Vtay9oMmI0WjNqMjdJRGVjZ0wrNUNiQklzUFRxQTB2dlByQVdGc0V4ZWh3Y1l5K2g1NzVKaG9pell3UVlBVWJnOUVJZ0xSbS9MTXR3ZmJnUzdXK3VnT2VMRGFhSSsrc1BRRnplclp2Zyt1RGRRRHpiME9ISW1UNER6Z2tUVGROeEFDUEFDREFDWnpJQ2FjZjQzZXYvaVpaRi93bmZsN3NUYWhmdmpxMW9tajhYdHJLaHlMM3JKM0NNSEpOUVBweUlFV0FFR0lIVEZZRzAwZkhMYmplYW4za2NqWE4va2pEVFZ6ZVNkL2NPTkQ0OEd5ZGZlQmF5MzY4TzRudEdnQkZnQk01b0JOSkM0dmMzTmFMeEYvZkJ1M043MGh1ajlaWG40YTNiZzRKZlA1NzB2RGxEUm9BUllBUXlFWUZ1Wi96K0U5K2dZYzVzK09wcVU0T2Z3NG5zNjI5S1RkNmNLeVBBQ0RBQ0dZaEF0ekorMmVOQjQzODhuRkttWC9DYlA1TEZ6OWdNYkJvbW1SR0lENEV4SSsyNDVUd0xQRjdBYnBPeDVuMDNWaHlOTHkzSE9uVUU4Z2ZZOFBOS0sreUVONGlESHR2cXhvSXQ4cWxuMUkwcHVwWHh0eXo4STd6Yk5zZFZmZHQ1RjhBeDdsc1FWanVXWHIwQnN2enhrMm1uZDlkMnVOZDlBdS8yTGRwOFNOSS8zWm4rWkhyaHAxeGd4Vm05Sk5IL0FPcUl6YTErMUgzbHd4c2J2Tmh5VWd0SjRLbWZEVXQrNEVSSk5qMzVaTHp6UmhzVzdNaWNUbnZ6TlZtWVZXRU5WS1Zobnh0elh2WWdSWE5GQS9DUzc1V00rZ3k3d0k2S3dWS1l1T3l2UGNUNFU5ZW0rZjJzdU9OU0cwWVdXWkNsNGlBbmp2bXdmcXNYaTdlYzNtdHFoV2RaTWI0MFVuR3Z3MGVNWDR3Q21lTWkxSGN4elc0eTB4VG1tckdjYmRpRnlMdjdmdGlIVnhoR2RkSmdrSHZiTEhqSXBMTmwwVlBCZ2VRMFovcmw1WGI4MjFRSCtnYjVud2FYdm4wc0dETFFoa21WVHV6ZjZzSzliM2pScklveGVadzl5UFNGbjFYQ2xaZmJpUEY3VkRIUytOWmh4VFVocGkrbzdEblFqcXY2ZWJBd1U2WGJKTlhIN2RPMm1aRDhVK01rM0htakU5UFBOK2g0VkdEZkFndktTdTJZZm9VUEsvN3V3c0xhMUEwK3FhbGZuTG5xOEczWDRSOW5MdDBhclZzWXY5L25SY3ZUajhXc2VQYjBtY2o5MFk4aFdXSWJING1Cb2VlVGkzRHlyMzhPYnVZNlRkVTdZeXF6OER1YVpzYmpTb1k3c2F5SGhLa2tGU3ZPcWR3by83YUlwS2g0WmM2L2pKWkkxVEtIYkZOSzlmV1JNUC91SEZUMm9ja2NNUmViMVkvbm5tckRxMFl6T2RNOGt4Vmd3WUw3c2pFNkw0NzhzcTJvbXBhRGMxZTI0c0dhMDVUNXh3RkRPa2VKelZGVFFmMkpkK0FzWDAwOTJYeEttSDNUYmNpYk5Uc3VwcStRS0ZsdHlCTzIrNmNwMDBjL08zNXB3UFJiam9zcHRnZWI5dm1GdGtmanNnWTZzR1J5WktCWXZkbUxCbFdNOWV2MEtWU0I2WFpMb3UwblgwVVlpYmZSajIzcXlxUWJ2YkhvaWFNK0JUbkJUR3lCSnBTUVo0K1ZhV3JDNTh3eVl2b3lxUlc5K0hTbkY0ZGFJdTJpVUZCeFJSYXFjcFVuL2s4bkJMcEY0cGZybDhKNTRRazZhcUVOSjFjTUlWMjlWZzdOdXFZcXdNRFRDYWgwb0dYcU9CcllOSVQ0c2V6Rk5pdytxUEowV1BESUQ3TXhucVJFeFpWY2FFUHBLbDlBRjk2ODE0TWJIL1dnT0ZkQ3kwbFpvd1pTNHFmei84Sy90V0toUTBJeFpOUzcwNW5TK0dpTFZSLzloTWF0OTRpdm1FN0Z5aTkxNE1wQ2JSYnRSenlZLzV3Yk5TcnY4bklISHJuT3J1cWpGdHg2bFJVcmxtZWdMa1JWcjlQeHRzc1p2K3hwZ0h6c3pRQ1d0djd0NlBIRG5UajU1dG53N0M0SStFbDUrY2lkZGUvcGlIWFM2M1JvazF2TDlFVUpiai9tTFhWaCtmMU85RlJLcEtuM0JIcW9GZEp4cmdVM0Q3UEFFUW83Umd2QjFZWUxnUktxS3UyWU9OaUNvSkFwNDlCK0gxNyt3SXZXczBuWFhpZ2h3SGZiL0ZoQmkzbktPa0x4QUN1bW5CVlVIem1JT2I5ZlF3Tk9UeXNlb0xXRW9hUjJDamhhVk42OGlYVHpDU3dDamhscXc3RDhFUEZlR2U5dTlLRSs5Sml5c21tZ3VYbUVOWXhaOHpla3c5YnByOHVKcmt1SUxqZTlVY2YyZUFuVEVGR2h2OHFSTnB5anZHMUU5d3FpVzJCbVhCL0Nmb3dWVHErRVVyRUlIM1lTTGhwcmc3dUZQSnA5ZU5Wa1VkN2JSdUc1VnN5WlRHVXFtRk8vV1ArRkI0dE4wb1NMTUxpWmNabENlQ2lROUd2M0VkT3YxY1hkc3NXTngybkJkLzdZeUF5ejV5QVNPaEFVT25UUkE0K1RDWmNKNTFoUmxCUHNHeDZpYzhjdUgxNEs0V09VUnUwbkZwcW5VOXNNSzdTQXVqazVHY2VQK3ZIQnB4NnNpamtiVEt5UHE4dVBkWi9mMDRMcEYxT2ZEZEZuSS9vTzEvdncrbW92YXJwUmNORzFhS3hxZEQ1Y1BySWM4THZDR1VsWmZ1VGVXSWYydFlWb1gxMk03Ty9mQ2t1ZVZxNE5SejdEYjV5Ujl5bUloSm1XNXFRUE94cGxYRXd3ZW4wU3NrQ01PU1FwbGc2elk5WVZrV2IzN25PaCttVmRSc0x5WnlaWi9paWpRd2ozTWxvMHJyeklqbU0wcXdndkxOTjZ6Zm90TGlnMlZWTys3Y1FNbFlYSjZFRmVERG5mRnJRNlVyVmYyV0FicG96eDRLRVhvaG1JS3BydVZzS002NTBZRnNaQmhxT3VGWXRETDNpcXlzNm5SZVJaVjZoMExFZklYTEpXTFhwYjhFQ1ZFME1VYW9kTHFINU9Hejd6YWxVNHRjZXhyVzJvZHB2VUIyUTFjNFdUMmkzYVZWemlSTURNZ1hEZnZDT0N1enBteGFRc1ZPZVJ4WTNhay9JVUM2OVhrU1hVdmJUbW93eVdtaWhHRDdsa0tGQWNHckJENGV2Zk43ZWtXck9XMXUrSThZZmY0R3dMaGxJL3F0VXh1ZktSRHZ4cWloMGtFK2djTVhHaXMrbzdQaXo3YnhjVzc0MVdJUVVUV0REdnRpeE1HcWlsVFlTVkRRVEdqM0xndHAxazNMQmNhOXdRTHF3VGZUeWNSNGMzRWg2WWxvVnJTNk8xNmNMNFl2eFlCOVovMEk0NWE4M1YzUjFtMzhuQUNBZm9aRWJ4SnBjYlBvNktLbEhiWlY5NkJMYkIxTm1ycGtlRkczbDg5bVhucG85MHVDZEdEWW5xZFVaRnBZMWZrMHY3RWhTTmNtSkJvMUhua1RGdllhc3gzVG9lSDJXUjBOT0c1WGVxWmd2NlhPaEY3cXYyb3hkYUNKaUswMXVZbEJIVE4zTjV4WFk4ZW8wUDA5Nk12eTNiQkFOUlNjRnFmcEtxc3B0cmZkaFA4NTRTcFNKOXJCZ0RUMFROUVRNZzRqVVJWMmpGWkFwZnBmaVFWRnFzM05PLzk3Z1hxME9FbTlWSDEweXExSEhjUmpIOVNKcWV0T2J6K0ZWKzNQcDIvSmhIVXRPZHo0ZC9kR1N6ZnRLTGV4YjdVYUtNa3g0NVNySXRIZVBFVXlyaFE1Ty84a0FXVDlOdnpjSGd2N2RpWGxSNVVsd0x6U1huTy9INjNSYmN0VWduWEhTeWp5c2ttdjlMbUVlTDhwTlU2dGJvdUJKR1Q4ekdrdHgyekNRMWJGYzc4N2N5UlpUSUxZcHNHRjJBbzZJQ1VuWm9OU3M2V09NemQxbTc1am1SaDdmbjVzQk9KbzJaNGxadDkrSGhVVmFWOUJ6c1BPK004V0YxalFmTDF0T1VXczBKRTZqWW5POFpNSDFTNTJ3NzZFY2hTU3A5ZGJNQUVpVGpjdnYzZWRGa3MyQllzVllDNmp2Y2prcGkvR3ZpeWlXeFNKMHYyNGVOOVRKS0ZNblhhc0hZZmtCTlNKMHpsZFpRdEMrU0ZST0hTbGdWVXF1VW42dVZ2Zy9SUUtLb3hneHIxQ3BqSjZrRGVwQ3FwMnlnRnErR0l6NGNKVDdob1orOWhva2pucUxlYlRSTkxDTzFuTm9WbGRzd2hoaS9Xait2RGxmZjUxUDVwQ1dNT0ZMVEhZdzhHZDdWazZyRmRFWkJNNGhIRFpqK2Zsb2svb1p3cmREVmQveDFXWmk2Uzh5T0lrVlZYWjhWWlYza2JmRmgyd0VaaGFSYUtsSUpCdWdUTFZ5a3FvOHJGRlpPZGtZeC9YWXlSS2luZHUxRlFrTlAxVHRVTXRhSm1XdGJzYVNMTGJXMC9WV2hQSlgvcmdPbXVVdjVvMDNEVWhIUVFJdWIvUlFkYUNvS1NIYWV0REQ3MjdWV3pMOUV5MjF0ZVZaTW1pZ3VvS1hSaDNVYlBIaCtiVVQzSFRjWlpEVjB1VzRSN3hoTmw2ZlJkRG5vM0hqZ3RteGNhekM5Tmk5RHV3QmRUTlA0NTZZNUltb0lldG1IRW1kWkUxTWZhMTZDZVVqeXl2NTRqeC9YRml1NFM3aVFtRG1Jd1FFU0xqMUh5NXdGUFVPSFU5d2RRZHhHYTJhV01qWnVpekc5cDZuTG5CZUNVdUFqRCtaaWZKaVJ5ZmlmbDlyeHFvb0pHdGZkajVjV3QyRkphR0FxSmwzTGkxWDJ5T0JFMHZSRmhIbE5ISmdMbFkyb1JaaFJ1R1dZekNXTlNkSDVWbDFGKzAvVWZqNmk5ZmtJcmZsbjIvSGlyUTdWWUdQQmpDbFdWQ3V6UWhvNGJoMnV4ZnNRN1ZlNWxmYXJCSjBMZDVJcDZmVFN5R0RYdDhLQnFuZmJzRUxnbHBJK3JxNlFGZmVvMWpoRVNOMjZkc3dLUy9VMEd5RGppNGo2VE1JVXN0UmJrdWdNVEYzMEtkeHJFVHlGaEFsSDlUYWFKM1gwTnc5TFFjZ0pZdnlaNXRhUVh2Q3hOVjZZelhmeUNzUUFrSVdsTkp0NXhNRDBzNlA2amltM1JoaXlpRWlMZUErRW1iN3drUEdubDl1d0xTYmpFWEdEYmpmUnE3WTZxcS8xZ3RUYkduY0syV25TeFhwSVp0azFPM3dhekFjS3hpOGNLYW5Md3dydG9GZkFtNWg5ZWVDUkZtVDdSNWlRV0h6L09KYklITTVHQ2kyc2h6MlFGOGVFZU52SzlqRFRGeW5yYVlQZXRrUXhKNDRmWnZxVVY4dGhuVFJQZzhqVHMzT3dmSFkyWG91NmN2REdiQ2RvcjJISVdUQnhpQW9MOHYzMERTMnR3dXBzemtxRmlRZVQ5YVdGODlKUUR1VVZOdFdnUUo3VVIrOEpNLzFncE1XdnRXR1RwcjRXVk5LNmkzQ3A2T1BCVW9PL3BiUllYYVQyYVBTb21MNElrUEhJbXg1Tlh5bzZUNnNLVkNkUDFYM1hNLzVVMVNTQmZFOUcxcGdUU04xOVNWYXRjV0hxNDYxWXNjbUhGak15U0lVMW5qWjd2WEdMb213MWl4angxNnRoNnNqbTMyakszbllLS3Nub1hhUXl0aDd1bWdFM3FXVWY5V0tYYW9USzZtOE5NS055VXZNWThIMkFHT0xrQVlRdC9ROEtTK3hBKzBHeTVvaEFmc3AzS2hKT0lhMk1iUWxpbm1QWE11cXNmQW1LVVZXQUFMTEdHVlFnb1NmdDJoVTdkN1VYN1RzZ1FXU0FNbGlSaGN1ZzhDQkFxV205NEhVREs2TmFVbHZXcWZzWUdST01DS1ViUFVUTHN1bzJHaTNla3RYVTUrb01nTUt6Z3VsUzBjZlZEVEdXbUxqRzBSaFdSYXExbTJsQUNGL25hakVGV1kxMXVCeWd5VEE1RCtyQlBEazV4c3JGUm1hYm50QWNWQi9YZlZqdms5TG5IdG02QmtocGFVbk9uS2JjQzk5c3B3dW9KSW5vc3VFMmpEMlhyQ2wwL1M1dk1HM2dvc1c4bVhGTUpmV0xvMjBHbTNLU1VRdDlPY25JTTk0OEVpOWJ4cnA5TWlvVUZRSXhkRExNUUcvVjhRVU5YM2x3c0s4ZHd3SWpnWVNSWkRhTE9xMk8vTXZkV29ZVUw5MmRqVWNxOE1TY2prUFlpSG1mVFRtcFYrcDBVYUxLQ1E5V3ROQXJCSlh3UUVsOStKdW8yTUtEL0NuUmtQQ0FTWXhSREI3a3AyKy9acE0rdXFkQksxemtoVlM2K3ZTcDZ1UGhhdEVhdyt6cndrK21ONW9KaW1tczVBWEVhclBrbGFUazVEekxsUEhMemV1VldGM3kzenN2Z3htL0NxRTFwRXNXbDNCVDZZeWV1eXExVW1qSkNIdGNpM2t1c2k4WE9tdkZ0V2xuM0lyM0dmdi80UzRmWm9VUDV5TEdQdG9HK3VSejJPMzRwd2VmWEVRMjIrY0hNU3dhYk1OTVd0Q09PQm1mYmRNeXBFaFlldDdWSHZFSDFCSnEwMUFOazJydzRhOHJYZWdUNGlSdVdwQ2VNc21CSXAwQVlsUzdsc1BtOXYzNitPSEJReGV3Wjc4eG5zb2tReGNkYWRuSENhdndHS2NuT0VYUFhjNzRwYnh5eUMyZkcxWm5kOE0rRFBLMEljY2VHNFpMeTJMM3JLTk5NbmFUVHRMSUNYTk9aVHU4VVhqYStkR0duUG5YMkZCQXpOaERyV1p2cHhNQlNiZXBWOFZVa3hxbyttcy9xbW1CTFB5eTBnSnFQSXQ1VHQyNVBmRXJpZElPclpRUVZFK00vOWpWWk5rVXluMzBaVTQ2NkU0cHlvOVBhRlBYYWpxcjk2SHpnOGpaQ20ybzZoa1pTTkhpeGJ0ZGJMMmhVSmZ3LzdHZ2xCN3VTdzRiYmp6YmhRVjdsUnhKclZLamxoQWtESjlBak4vb0ZTYTFVVmphcCtSNUFYV1pOMm9qbUpLeitsK3RJVkw3bjF0QytCcHVRRlRIaXR4M2VSK25OUjFoRWRlaDlTQ2RxSHM4UW1LWDNIVTk0Ky81TGNpSGxtb3FSeWNzNCtXMmM3R285V3pjdmZzdC9HallqWnB3bzRmZmZEL2NGWTJDQTM3UHZ1Y3laZno5U1M5cEVSc0lNc1Rsa3doVkdaWTJpV2lhdXZjeFlQeUI2dXdWQTRJanNxR0lQTTBrSm5YMTlkTFFnRUVrcmRJT1NuWWhCR2hqM0hheVRhZ1VtOHdGTEdHbVQ1WXZSMmkzcm9oR2k4QVJtMzlpZE1TeGdnZXMwWTdldlFsWVdvazh1OU9wNnh5aTQzTGF5YnRBditrdkhocHBUNXQ2aUlESjVpNng2MWk3WTVsMjQ1cVlFZ1YwOXdaOVZLOXJieWNoVUxoVTkzRlh1eWdud2xjTzdYRGpKNHBGVW9DQzlQaFJ6ME83aENLcDhFYklFa2xLSWRmaXQyRk84MWo4dVhVWTdXZVVzSFRIMzlIaTdyeFk1Q1Y3NDlYMEVwcTVzYVdxdDlZc1VocjVOeC95YXc1WGc5V0dleXRObW85MkpmYlQwVzRtTWFtanJkMnBuUjMxSGU1UVdXU0VZdEptSk8xTHFjN2hkTCtYOGRIZUVFYWkrNmk2VjkxTzVjR0hqMmd0UU8yQ0I2d0JlM1Q0cXVPWTNYZi9yRXRHTlJrUnFGM1dRQ2VlbldqMi9ram9ZUllrZHBRTEpYL1lXWERUcE9qSVZaTnBSMjg0RHQzUWhyZVZJY25sdzYxYVdvb3E3TFJaVHVmSTVQTUdaUzBtRkxTSjlzQUlsK28rdnBabTIycFhWT0hFbmZxWFVVU2dOYUtuNmJUVGVlV1JRVUtkTHRYM0pwd2pkY1ZLOXA3dzlyNHlVTUFlYncvYzNuQTVQbkpIREtDYVBTZng5S1pYT2sxQTllZGVIS1pqQzh6Y09Gb0l6U2hIT3lMWEhORlNYRmFaalZmSUpuN3FBTEswSU02ZVR3ZXZUYjNFZ2VVL2NtaW0xSFJHQm5iRVliTmRUeCtUMks4cHdvS0g3c3ZDVE1wZnVGS3l3WCt0bzEyOW1yU241OE0vTi9zaVVtdTRDOGxZdXpueXdyKy9SY3VjZ2tqUXlhSUdGaXdkb3lUamM0MDFEdW5QSjlnQ0IreVY1bmFjTXBtaE5hUStwR09oTks3c2tpd3N2NDM2WGo4Nk1DL1U5eWFQc2VPVm4yV2pUQ2RsUkI1bHZLcVR6a3RHWmVIWnE2aE9nZHdsektRUDdjelcyZWx2b284S05ZZEtyOS9pZ1haOTNJcGZQSmlGbTBOOXRKaStqclhreDg2d09pNlFqQmFybHRVR00waDFINi9mcUtkUHd2UTdjekJ2cENWc0RWVkozOU40aldnZVJqdXNKMTFIWnRjanU1NzVkN21xUjhEdktid0pLdzlzd0lLV0VYQ3A1OHZCdHFGelVONUZMdW41N3h0eFc4am4xUDcyMEtMUm92ZDBQVldWaFpOcVBaSzIyV2VhKzlPckxseENoNjhwT21aQmZ4RXg0NGZFMVVGbDlxL3pZRTBINFpFZ09vUnRneCsvR0tXU0IwZ3ltWEY3RG1aRUlwM1JkODJrUnR2bnM0UE05Q05PNk81VkEyc3RmWVZLdlJZZ0lucnA2T3pWa1JSeDMrbXRVSVFFdVZRYzF1UDI0cTdIWFhIcHgrTXV6RFNpakFmLzVrYjE3YXAxSTRvclBvVHowSjB4NWlTMFFZdU9Vd3E3TFdJUXVUZ0hGYW8xZ0RJNmVtUXBYVUlORk1XUXlBNStnZVpNZnorZWVkK3JQZktCVG1lYlJYMzBkaHB2bGRsVnVFQzZXZk8vNmlNYlV0M0gvZmpEdTE3OGhkYUNJazdDcEt0cDA5YlZRVldYT2tURXVlZzg2a3hrbHRxVlR2V0dkMTJ4T2YycjhEZnJEWVpNWDZIaTVSMXY0Smt2bHNJdlJ5UXBKYXlqL3kzN2ZKajdhanZwOHN4alhVZldHQTdkUXFaNTdEUUtJYWwvMm1JWDZKRE11TjJ4V2pxb0tyeHJNSGF5VlcrMzR4MDZucUFyWFVRaWpGMnFuczJjU2xxajNFODl2UjhiajJqeE9VU0x2cHBGZHVMVzYzV3pNN05qR21MVjU4M1BURHJ5S2ZTQnBOVDdJRzFFb3EydkdrMk5VY1pxUDlydzhjUXo3Vmlsa2NGb0VQbExPM1pyVElPQ2lmUU1VZGh1UHJiWXJjV1dvbTZwY2VHSmRkRUFHREY5c1d0MnZtNm1sZW8rWHJ2UkZkaGtxWVpDdVkrcUl3MXNjMTh6YVdNbFVRcit1NFh4MjBnLy9mQ29PMkpXWjhtTzF6SHJ2VjlpMDdHZE1lUHViVDZJUjJxZXhmMHJuOGVKVm5NZ2MybDU0WlpMVC8xMWowbEFWMFdnalVRemY5K0s1OVo2REQ5K29aRFJRSHJSWmErMVlocDFLbVdhTE1KYTFZZEcwbk43MU81bEdRdGVvUHczcUZRYVNxYjB2NXMrK0VLZlZvMDQ5VDM1QmhmUElzRk5CaTk0UkZjU2pLZmhDNUdraG5ldG12SzBYNnhLZGRrS1FmK25XVHVTOFlsT0J5N2l2VVZTZjhUUkhnQ1RZeG82cW85STMweUhMNG1kMnVyY0F2bXFaaHhkVlcreEEvaDYyamk0YkJOOXpLZURSbXVnMmMzN3RHUDdoaWZiVVcyMFhFZTYvbnVlcEh4SVgyKzRBNTNXNTNadmN0R01SajlvUkJDdFh0V09IN3ppUXAySkhiLzRPSkhvLzVHakVpSnB4VDZCenZUeDJPOFFJRFpaM3ZBaXpXNTBRa0tZQ25GTTlqcUtzOUN0MlJNUkRrL3hqWkZ5U1F4S2haTWVhVGtneW43dlgxT25USHpzczc4RTFEcngxUEdDWHFXWU1HQVVodmN1USsrc0F0cjU3c0dCbHNQWVQ5ZjJiMnJ4Y2YwR2FzNmdKR1p0SzBQMjRkbXcrSHBGWlQxcm9oMDNreDQ4VmU0N2p4cjE5RlNWRnRUckQrMUxoNERSNWhqUWhqUW4yZUxYMWZzN2QxaWIrTkFKYmE2cHA4WDJ5VU10YUR3dW82Q1BoRG82RWJYV2JrTTFxWnZDTmxXa2NyaWZWQTViVWxkRnpsa2dRRzB5V1p3SlJBTzNZUFI3cUkyNyswTTB4ZjBzR0U0Ym94cmJxSDlRMzJ0c29yVWtNcTFVQ3hxeEcwL0NtRklMbVNuTGFLVCtsdVh4NC9PRHA1YUhvR01VOWM4am9wLzJvRDF6WkFoUkcrczE3TUkrTHRiZXh0SGhjeTVoV1VRNHRSLzMwemxKMmxsamJKd1NpL0grdkR6YU9BVXgvOVRJRGxFemo4U3lUeXpWejBiK0VMc2J2c0xtNDd0aVpyRDlSQzNFRlkvelplL0d5WkovRHpCL1cvdlFjSklSWko3NHZiSDZ5WFU0T0NOdm1rbGlyeUVKS25tT2pyeTlKNGRPUDZURHMranJYa3NVNlRhdzJWckNIUFgrQUNyVTIrQm5wcDg4OE0xem9vRjRsZElXNXJHNk5DUndDcWZKSnZ6NENhSCtTNmVWZHNZSk9zSWZ2b21MbnE3dDQrSWRUYmUyNjFiR2I3ZmE4ZmlFdWZpWEQzK0Yyc2F2TzlQMlVXbGxXeE5hQi93T3ptOXVnclBodXhoRUVzR3Z2NWZWOFVhS3FGek9QSTg3YjFHK3JVcW5JdDZlaTBsMERNRkh1Mm1kaFN3UXZqM2FqaUxkWk9tTFR6V0N4SmtIR05jNDR4RGdQbTZ3aU43VnJTalVOb3NtL2dyM3JmNHR0cEhLSnFsT2t1SHE4eHBLQ2h2dzJPUTdrSmRscE5sS2Fva1puMW12MENmd2xJcVVETFpqK21EbFNmZFBDMU5QUm4wa1F4ZUhIeG1CTkVPQSt6alFMWXU3K241UTRNekg0a20veFUxbFpPK1VaRGVoZURRV1hUc2RSWFM0Rkx2WUNDeDRqazc5ckkxdFNYV0lGaDN2b29VcGpUVkw3T3c1QmlQUTdRaHdIMDhEaVYvcEJRNVMrd2hMbjhzR1hJeW52bmlKZFA5N2xhQ0UvbnM2ZStBT092cGhXdGwzSVdYUTBRd0pWVGFwaWVqVVR6clAvQ1U2WjM3R2VCdEdsbGdnSkNSaEtpZDJReDg5UUovZUk0dWlhbHFBWThjSVpDWUMzTWU3VmNkdjFHbkdGWTNBMHY1L3dNcXZQeUhKY3lVMkhOMXFGTTNVcjM5T1g5eHkzbFJVbFU1QmxvMXNOOWtsaEVBem5icTQ4TzNPTGJvbFZEQW5ZZ1M2Q0lFenVZK25IZU1YYlc2UkxMank3QW1CcS83a1Vhdzk5RG0ya09YUHpoTjFPT0ZxUXBNN3VJMmt0N01BdmJKNm9EQzdEMFlWRHNkNEdqU0c5Q2pwb203RHhUQUNqQUFqa0prSXBDWGpWME5abk51UHBQY3JBcGZhbis4WkFVYUFFV0FFRWtPQVZ6d1R3NDFUTVFLTUFDT1FzUWd3NDgvWXBtUENHUUZHZ0JGSURBRm0vSW5oeHFrWUFVYUFFY2hZQkpqeFoyelRNZUdNQUNQQUNDU0dBRFAreEhEalZJd0FJOEFJWkN3Q3pQZ3p0dW1ZY0VhQUVXQUVFa09BR1g5aXVIRXFSb0FSWUFReUZnRm0vQm5iZEV3NEk4QUlNQUtKSWNDTVB6SGNPQlVqd0Fnd0FobUxBRFArakcwNkpwd1JZQVFZZ2NRUVlNYWZHRzZjaWhGZ0JCaUJqRVdBR1gvR05oMFR6Z2d3QW94QVlnZ3c0MDhNTjA3RkNEQUNqRURHSXNDTVAyT2JqZ2xuQkJnQlJpQXhCSmp4SjRZYnAySUVHQUZHSUdNUllNYWZzVTNIaERNQ2pBQWprQmdDelBnVHc0MVRNUUtNQUNPUXNRaVlNWDdaNy9VY0U3VTYydVRQMk1wMU5lR01WVmNqenVVeEFveUFHUUloSGk0YmhSc3hmaEhSNTJrN3RrRWtlT0l0TnpOL0krUjBmb0xwQzZ6WU1RS01BQ09RRGdpRWVMaVBhSWxpL3BJQmdXSXdLQmd3YnRiRjUxM3poK1VXaXozZklBNTdNUUtNQUNQQUNLUXBBckxQMDdUekh6Kzk4V0ROOCt1SnhFYTZOS29icXduZDF1WURHOXh0Sjc3NnVNZFpGL1dYck5rRkZxc3QyeVF1ZXpNQ2pBQWp3QWlrQVFJK2orc2JkL09CVDNmOTQ2ZHpEMjE4WlNlUjFFeFhsQ3JDU09JWDVEdm9FcEorSDdvSzZNcWlTOHdFek9KVEVEdEdnQkZnQkJpQmJrUkFxSFNFWk45T2w1RHlqOU5seVBodEZHRGt2T1I1TWhUZ29uL0IrTVhzZ0JsL0NCVCtZd1FZQVVZZ3pSQUlyTThTVFlMeHQ5QWxlTGpnNVZHdUkwWXV3dXloU3d3UUxQRkh3Y2NlakFBandBaWtEUUtLeEMrWXZTZDBSUzNzQ21vN1l2d2lYRGdSUjdrQ0h2ekRDREFDakFBamtKWUlDRWF2WEdsSklCUEZDREFDakFBandBZ3dBb3dBSThBSU1BS3BSdUQvQWVibXhqdFR1czBPQUFBQUFFbEZUa1N1UW1DQ1wiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW1nIHN0eWxlPXtidXR0b25TdHlsZX0gc3JjPXsgZ29vZ2xlIH0gYWx0PVwiTG9nIGluIHdpdGggR29vZ2xlXCIgb25DbGljaz17IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKSB9Lz5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR29vZ2xlbG9naW4uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiAyNiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuI21haW4gaDF7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbiBoMntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluLWFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjQ1NjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tbG9naW57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNtYWluLWxvZ2luIGg2e1xcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbi1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNtYWluLXdlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1OyBcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtYXJnaW46IDUwcHggNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI21haW4td2VsY29tZSBpbWd7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbiNtYWluLXdlbGNvbWUgaDR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1haW4tbW9iaWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbiNhc2lkZSBoNntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmODUxMztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcHVibGljLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=