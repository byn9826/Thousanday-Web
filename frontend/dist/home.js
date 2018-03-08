webpackJsonp([5],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _home = __webpack_require__(61);

var _account = __webpack_require__(30);

var _config = __webpack_require__(4);

var _Waterfall = __webpack_require__(162);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _Googlelogin = __webpack_require__(59);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(58);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

__webpack_require__(179);

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

/***/ 162:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 100px;\n    margin-left: 10%;\n    width: 26%;\n    text-align: center;\n    min-height: calc(100vh - 150px);\n}\n#main h1{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main h2{\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 10px;\n    display: block;\n}\n#main-app{\n    background-color: #052456;\n    width: 80%;\n    text-align: center;\n    margin-left: 10%;\n    margin-top: 30px;\n    color: white;\n    font-weight: bold;\n    padding: 5px 0;\n    border-radius: 5px;\n    display: block;\n}\n\n#main-login{\n    display: block;\n    background-color: #f7d7b4;\n    border-radius: 5px;\n    padding: 10px 1%;\n    margin-top: 20px;\n}\n#main-login h6{\n    font-weight: bold !important;\n    margin-bottom: 5px;\n    display: block;\n}\n#main-login img{\n    display: block;\n    margin: 5px 0 !important;\n}\n\n#main-welcome {\n    display: block;\n    text-align: center;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    width: 90%;\n    padding: 20px 0;\n    margin: 50px 5%;\n    border-radius: 5px;\n}\n#main-welcome img{\n    border-radius: 50%;\n    width: 50%;\n    display: block;\n    margin-left: 25%;\n}\n#main-welcome h4{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n}\n\n.main-mobile{\n    display: block;\n    margin-top: 20px;\n    width: 50%;\n    margin-left: 25%;\n}\n\n\n\n\n\n#aside{\n    display: inline-block;\n    vertical-align: top;\n    width: 49%;\n    margin-left: 5%;\n    margin-top: 100px;\n}\n#aside h6{\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: black;\n    padding: 5px 0;\n    border-radius: 5px;\n    margin-top: 20px;\n    border: 1px solid #ef8513;\n}", ""]);

// exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(172);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wdWJsaWMuY3NzPzUwM2YiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicmVhZEhvbWVNb21lbnRzIiwiaG9tZSIsImxvYWQiLCJkZXRhaWwiLCJhY2NvdW50IiwiaWQiLCJyZWFkQWNjb3VudERhdGEiLCJ0b2tlbiIsInJlc3BvbnNlIiwibG9naW5Cb2FyZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnTG9naW4iLCJiaW5kIiwiZkxvZ2luIiwibmFtZSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsImRhdGEiLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztB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QUF3Qix1QkFBdUIsaUJBQWlCLHlCQUF5QixzQ0FBc0MsR0FBRyxXQUFXLHlCQUF5Qix3QkFBd0IsdUJBQXVCLHFCQUFxQixHQUFHLFdBQVcseUJBQXlCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsWUFBWSxnQ0FBZ0MsaUJBQWlCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLG1CQUFtQix3QkFBd0IscUJBQXFCLHlCQUF5QixxQkFBcUIsR0FBRyxnQkFBZ0IscUJBQXFCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLHVCQUF1QixHQUFHLGlCQUFpQixtQ0FBbUMseUJBQXlCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsK0JBQStCLEdBQUcsbUJBQW1CLHFCQUFxQix5QkFBeUIsc0NBQXNDLGtCQUFrQixzQkFBc0Isc0JBQXNCLHlCQUF5QixHQUFHLG9CQUFvQix5QkFBeUIsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIscUJBQXFCLHdCQUF3Qix1QkFBdUIsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLDRCQUE0QiwwQkFBMEIsaUJBQWlCLHNCQUFzQix3QkFBd0IsR0FBRyxZQUFZLHFCQUFxQixrQkFBa0IseUJBQXlCLG1CQUFtQixxQkFBcUIseUJBQXlCLHVCQUF1QixnQ0FBZ0MsR0FBRzs7QUFFbHlEOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlYWRIb21lTW9tZW50cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvaG9tZSc7XG5pbXBvcnQgeyByZWFkQWNjb3VudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgYW5kcm9pZFN0b3JlVXJsLCBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCBcbn0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgR29vZ2xlbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVsb2dpbic7XG5pbXBvcnQgRmFjZWJvb2tsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4nO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHVibGljLmNzcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlYWRIb21lTW9tZW50cyh0aGlzLnByb3BzLmhvbWUubG9hZCk7XG4gIH1cblx0Z0xvZ2luKGRldGFpbCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdC8vdmVyaWZ5IGdvb2dsZSBsb2dpbiB1c2VyXG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZ29vZ2xlJywgZGV0YWlsLnRva2VuKTtcblx0XHR9XG5cdH1cblx0ZkxvZ2luKHJlc3BvbnNlLCB0b2tlbikge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdC8vdmVyaWZ5IGZhY2Vib29rIGxvZ2luIHVzZXJcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdmYWNlYm9vaycsIHRva2VuKTtcblx0XHR9XG5cdH1cbiAgbG9hZE1vcmUoKSB7XG4gICAgLy90aGlzLnByb3BzLnJlYWRIb21lTW9tZW50cyh0aGlzLnByb3BzLmhvbWUubG9hZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXHRcdC8vbG9naW4gYm9hcmRcblx0XHRsZXQgbG9naW5Cb2FyZDtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHRsb2dpbkJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cIm1haW4tbG9naW5cIj5cblx0XHRcdFx0XHQ8aDY+U2lnbiBpbiBvciBzaWduIHVwPC9oNj5cblx0XHRcdFx0XHQ8aDY+YnkgeW91ciBGYWNlYm9vayBvciBHb29nbGUgYWNjb3VudDo8L2g2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8R29vZ2xlbG9naW4gXG5cdFx0XHRcdFx0XHRcdGNsaWVudElkPXsgZ29vZ2xlQ2xpZW50SWQgfSBcblx0XHRcdFx0XHRcdFx0d2lkdGg9eyB3aW5kb3cuaW5uZXJXaWR0aCA+PSAyOTAgPyAnMjAwcHgnIDogJzEyMHB4JyB9XG5cdFx0XHRcdFx0XHRcdGdMb2dpbj17IHRoaXMuZ0xvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RmFjZWJvb2tsb2dpbiBcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBmYWNlYm9va0NsaWVudElkIH1cblx0XHRcdFx0XHRcdFx0d2lkdGg9eyB3aW5kb3cuaW5uZXJXaWR0aCA+PSAyOTAgPyAnMTk0cHgnIDogJzExNHB4JyB9IFxuXHRcdFx0XHRcdFx0XHRmTG9naW49eyB0aGlzLmZMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vc2hvdyB3ZWxjb21lIGJveCBpZiB1c2VycyBsb2dnZWQgaW5cblx0XHRcdGxvZ2luQm9hcmQgPSAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwibWFpbi13ZWxjb21lXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJVc2VyIEF2YXRhclwiIFxuXHRcdFx0XHRcdFx0XHRzcmM9e2RvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkICsgXCIuanBnXCJ9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PGg0PldlbGNvbWUgYmFjayEge3RoaXMucHJvcHMuYWNjb3VudC5uYW1lfTwvaDQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdClcblx0XHR9XG4gICAgLy9sb2FkIG1vcmUgbW9tZW50IGJ1dHRvblxuICAgIGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy5ob21lLmxvY2tlcikge1xuXHRcdFx0bG9hZEJ1dHRvbiA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG4gICAgICAgIDxoMT5NZWV0IHdpdGggcGV0czwvaDE+XG4gICAgICAgIDxoMj5hcm91bmQgdGhlIHdvcmxkIGV2ZXJ5ZGF5ITwvaDI+XG5cdFx0XHRcdHsgbG9naW5Cb2FyZCB9XG4gICAgICAgIDxoNiBpZD1cIm1haW4tYXBwXCI+R2V0IHRoZSBtb2JpbGUgYXBwPC9oNj5cbiAgICAgICAgPGEgaHJlZj17IGFuZHJvaWRTdG9yZVVybCB9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxpbWcgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYWluLW1vYmlsZVwiIFxuXHRcdFx0XHRcdFx0YWx0PVwiR29vZ2xlIFBsYXlcIiBcblx0XHRcdFx0XHRcdHNyYz1cIi4vcHVibGljL2ltZy9nb29nbGUtcGxheS5wbmdcIlxuXHRcdFx0XHRcdC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbWFpbj4sXG4gICAgICA8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG4gICAgICAgIDxXYXRlcmZhbGwgXG4gICAgICAgICAgY29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAnMycgOiAnMicgfSBcbiAgICAgICAgICBpbWFnZT17IHRoaXMucHJvcHMuaG9tZS5kYXRhIH0gXG4gICAgICAgICAgZm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcbiAgICAgICAgLz5cbiAgICAgICAgeyBsb2FkQnV0dG9uIH1cbiAgICAgIDwvYXNpZGU+XG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBob21lOiBzdGF0ZS5ob21lLCBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IHJlYWRIb21lTW9tZW50cywgcmVhZEFjY291bnREYXRhIH1cbikoSG9tZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL0hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiAyNiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuI21haW4gaDF7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbiBoMntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluLWFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjQ1NjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tbG9naW57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNtYWluLWxvZ2luIGg2e1xcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbi1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNtYWluLXdlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1OyBcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtYXJnaW46IDUwcHggNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI21haW4td2VsY29tZSBpbWd7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbiNtYWluLXdlbGNvbWUgaDR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1haW4tbW9iaWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbiNhc2lkZSBoNntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmODUxMztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3B1YmxpYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wdWJsaWMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3B1YmxpYy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcHVibGljLmNzc1xuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=