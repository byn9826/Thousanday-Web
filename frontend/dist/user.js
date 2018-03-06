webpackJsonp([2],{

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

var _user = __webpack_require__(63);

var _config = __webpack_require__(5);

var _noToInfo = __webpack_require__(57);

var _Waterfall = __webpack_require__(150);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
	_inherits(User, _Component);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
	}

	_createClass(User, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.readUserPage(this.props.match.params.id);
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			this.props.readUserMoments(this.props.user.belongData, this.props.user.load);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var relativeBoard = this.props.user.relativeData.map(function (relative, index) {
				return _react2.default.createElement(
					'a',
					{ href: "/user/" + relative, key: "userRelative" + index },
					_react2.default.createElement('img', { src: _config.domainUrl + "/img/user/" + relative + ".jpg" })
				);
			});
			var addButton = void 0;
			if (this.props.user.userData.user_id === this.props.account.id) {
				addButton = _react2.default.createElement(
					'a',
					{ href: '/add' },
					_react2.default.createElement(
						'h5',
						{ id: 'aside-header-add' },
						'Add Pet'
					)
				);
			}
			var petsList = this.props.user.petsData.map(function (pet, index) {
				return _react2.default.createElement(
					'div',
					{ key: "userPet" + index, className: 'aside-pet' },
					_react2.default.createElement(
						'a',
						{ href: "/pet/" + pet.pet_id },
						_react2.default.createElement('img', { alt: pet.pet_name, src: _config.domainUrl + "/img/pet/" + pet.pet_id + "/0.png" })
					),
					_react2.default.createElement(
						'h5',
						null,
						pet.pet_name
					),
					_react2.default.createElement(
						'div',
						{ className: 'aside-pet-info' },
						_react2.default.createElement(
							'h6',
							null,
							(0, _noToInfo.noGetGender)(pet.pet_gender)
						),
						_react2.default.createElement(
							'h6',
							null,
							(0, _noToInfo.noGetType)(pet.pet_type)
						)
					),
					_this2.props.user.userData.user_id === _this2.props.account.id ? _react2.default.createElement(
						'a',
						{ href: "/edit/" + pet.pet_id },
						_react2.default.createElement(
							'h6',
							{ className: 'aside-pet-edit' },
							'Edit'
						)
					) : null
				);
			});
			var emptyMessage = void 0;
			if (this.props.user.momentData.length === 0) {
				emptyMessage = _react2.default.createElement(
					'h6',
					{ className: 'aside-no' },
					'Not moments yet ...'
				);
			}
			var galleryBoard = _react2.default.createElement(_Waterfall2.default, {
				column: window.innerWidth > 900 ? "3" : "2",
				image: this.props.user.momentData,
				fontFamily: '\'Rubik\', sans-serif'
			});
			var loadButton = void 0;
			if (!this.props.user.locker) {
				loadButton = _react2.default.createElement(
					'h6',
					{ id: 'load-button', onClick: this.loadMore.bind(this) },
					'Load more ...'
				);
			}
			return [_react2.default.createElement(
				'main',
				{ id: 'main', key: 'main' },
				_react2.default.createElement('img', {
					id: 'main-profile',
					alt: this.props.user.userData.user_name,
					src: _config.domainUrl + "/img/user/" + this.props.user.userData.user_id + ".jpg"
				}),
				_react2.default.createElement(
					'h1',
					{ className: 'main-name' },
					this.props.user.userData.user_name
				),
				_react2.default.createElement(
					'h5',
					{ className: 'main-name' },
					this.props.user.userData.user_about
				),
				_react2.default.createElement(
					'h5',
					{ className: 'main-name' },
					'- User ',
					this.props.user.userData.user_id,
					' -'
				),
				_react2.default.createElement(
					'h5',
					{ id: 'main-relative' },
					'Relatives:'
				),
				_react2.default.createElement(
					'div',
					{ id: 'main-family' },
					relativeBoard
				)
			), _react2.default.createElement(
				'aside',
				{ id: 'aside', key: 'aside' },
				_react2.default.createElement(
					'div',
					{ className: 'aside-header' },
					_react2.default.createElement('img', { alt: 'pets hub', src: '/public/icon/glyphicons-hub.png' }),
					_react2.default.createElement(
						'h4',
						null,
						'Pets in hub'
					),
					addButton
				),
				petsList,
				_react2.default.createElement(
					'div',
					{ className: 'aside-header' },
					_react2.default.createElement('img', { alt: 'pets moment', src: '/public/icon/glyphicons-moment.png' }),
					_react2.default.createElement(
						'h4',
						null,
						'Moments'
					)
				),
				emptyMessage,
				galleryBoard,
				loadButton
			)];
		}
	}]);

	return User;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { account: state.account, user: state.user };
}, {
	readUserPage: _user.readUserPage, readUserMoments: _user.readUserMoments
})(User);

/***/ }),

/***/ 150:
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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#main-profile{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 50%;\n}\n.main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    text-align: center;\n}\n#main-relative{\n    border-top: 1px solid #e5e5e5;\n    padding-top: 15px;\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n}\n\n#main-family{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    border-radius: 5px;\n    padding-top: 10px;\n    padding-left: 3%;\n    padding-right: 3%;\n    background-color: #f7d7b4\n}\n#main-family img{\n    display: inline-block;\n    width: 20%;\n    margin-right: 5%;\n    border-radius: 50%;\n    vertical-align: \"middle\";\n    margin-bottom: 10px;\n}\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-header{\n    display: block;\n    width: 94%;\n    padding: 10px 3%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 25px;\n}\n.aside-header img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n}\n.aside-header h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-header-add{\n    float: right;\n    color: #ef8513;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.aside-pet{\n    display: inline-block;\n    vertical-align: middle;\n    width: 17%;\n    margin-right: 3%;\n    background-color: #e5e5e5;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n.aside-pet img{\n    display: block;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.aside-pet h5{\n    text-align: center;\n    display: block;\n    margin-top: 5px;\n    font-weight: bold;\n}\n.aside-pet-info{\n    display: block;\n    text-align: center;\n    margin-bottom: 8px;\n}\n.aside-pet-info>:first-child{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.aside-pet-info>:nth-child(2){\n    display: inline-block;\n    vertical-align: middle;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 3px;\n    padding: 2px 4px;\n}\n\n.aside-pet-edit{\n    display: block;\n    background-color: #ef8513;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    padding: 5px 0;\n}\n\n.aside-no{\n    display: block;\n    margin-bottom: 30px;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    padding: 5px 50px;\n}", ""]);

// exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(160);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./user.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./user.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3VzZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdXNlci5jc3M/ODkzZiJdLCJuYW1lcyI6WyJVc2VyIiwicHJvcHMiLCJyZWFkVXNlclBhZ2UiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwicmVhZFVzZXJNb21lbnRzIiwidXNlciIsImJlbG9uZ0RhdGEiLCJsb2FkIiwicmVsYXRpdmVCb2FyZCIsInJlbGF0aXZlRGF0YSIsIm1hcCIsInJlbGF0aXZlIiwiaW5kZXgiLCJhZGRCdXR0b24iLCJ1c2VyRGF0YSIsInVzZXJfaWQiLCJhY2NvdW50IiwicGV0c0xpc3QiLCJwZXRzRGF0YSIsInBldCIsInBldF9pZCIsInBldF9uYW1lIiwicGV0X2dlbmRlciIsInBldF90eXBlIiwiZW1wdHlNZXNzYWdlIiwibW9tZW50RGF0YSIsImxlbmd0aCIsImdhbGxlcnlCb2FyZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsb2FkQnV0dG9uIiwibG9ja2VyIiwibG9hZE1vcmUiLCJiaW5kIiwidXNlcl9uYW1lIiwidXNlcl9hYm91dCIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJpIiwic2V0U3RhdGUiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJtYXJnaW4iLCJjb250YWluZXJTdHlsZSIsImltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlclJhZGl1cyIsImNvbnRlbnRTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhbGxJbWFnZXMiLCJpbWFnZSIsInNob3dDb250ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7OztzQ0FDZ0I7QUFDcEIsUUFBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCLEtBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQWhEO0FBQ0M7Ozs2QkFDUztBQUNWLFFBQUtKLEtBQUwsQ0FBV0ssZUFBWCxDQUEyQixLQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JDLFVBQTNDLEVBQXVELEtBQUtQLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkUsSUFBdkU7QUFDQTs7OzJCQUNTO0FBQUE7O0FBQ1QsT0FBTUMsZ0JBQWdCLEtBQUtULEtBQUwsQ0FBV00sSUFBWCxDQUFnQkksWUFBaEIsQ0FBNkJDLEdBQTdCLENBQWlDLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ3REO0FBQUE7QUFBQSxPQUFHLE1BQU8sV0FBV0QsUUFBckIsRUFBaUMsS0FBTSxpQkFBaUJDLEtBQXhEO0FBQ0MsNENBQUssS0FBTSxvQkFBWSxZQUFaLEdBQTJCRCxRQUEzQixHQUFzQyxNQUFqRDtBQURELEtBRHNEO0FBQUEsSUFBakMsQ0FBdEI7QUFLQSxPQUFJRSxrQkFBSjtBQUNBLE9BQUksS0FBS2QsS0FBTCxDQUFXTSxJQUFYLENBQWdCUyxRQUFoQixDQUF5QkMsT0FBekIsS0FBcUMsS0FBS2hCLEtBQUwsQ0FBV2lCLE9BQVgsQ0FBbUJiLEVBQTVELEVBQWdFO0FBQy9EVSxnQkFDQztBQUFBO0FBQUEsT0FBRyxNQUFLLE1BQVI7QUFDQztBQUFBO0FBQUEsUUFBSSxJQUFHLGtC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QkFBeUIsR0FBRyxnQ0FBZ0MsNEJBQTRCLDZCQUE2Qix1Q0FBdUMseUJBQXlCLHVCQUF1QixHQUFHLG9CQUFvQixxQkFBcUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsa0JBQWtCLHFDQUFxQyxzQ0FBc0Msc0JBQXNCLHFCQUFxQixHQUFHLGNBQWMscUJBQXFCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixHQUFHOztBQUVud0Y7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVhZFVzZXJQYWdlLCByZWFkVXNlck1vbWVudHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXInO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHsgbm9HZXRHZW5kZXIsIG5vR2V0VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy91c2VyLmNzcyc7XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRVc2VyUGFnZSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gIH1cblx0bG9hZE1vcmUoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkVXNlck1vbWVudHModGhpcy5wcm9wcy51c2VyLmJlbG9uZ0RhdGEsIHRoaXMucHJvcHMudXNlci5sb2FkKTtcblx0fVxuICByZW5kZXIoKSB7XG5cdFx0Y29uc3QgcmVsYXRpdmVCb2FyZCA9IHRoaXMucHJvcHMudXNlci5yZWxhdGl2ZURhdGEubWFwKChyZWxhdGl2ZSwgaW5kZXgpID0+XG5cdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHJlbGF0aXZlIH0gIGtleT17IFwidXNlclJlbGF0aXZlXCIgKyBpbmRleCB9PlxuXHRcdFx0XHQ8aW1nIHNyYz17IGRvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgcmVsYXRpdmUgKyBcIi5qcGdcIiB9IC8+XG5cdFx0XHQ8L2E+XG5cdFx0KTtcblx0XHRsZXQgYWRkQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkKSB7XG5cdFx0XHRhZGRCdXR0b24gPSAoXG5cdFx0XHRcdDxhIGhyZWY9XCIvYWRkXCI+XG5cdFx0XHRcdFx0PGg1IGlkPVwiYXNpZGUtaGVhZGVyLWFkZFwiPkFkZCBQZXQ8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRjb25zdCBwZXRzTGlzdCA9IHRoaXMucHJvcHMudXNlci5wZXRzRGF0YS5tYXAoKHBldCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17IFwidXNlclBldFwiICsgaW5kZXggfSBjbGFzc05hbWU9XCJhc2lkZS1wZXRcIj5cblx0XHRcdFx0PGEgaHJlZj17IFwiL3BldC9cIiArIHBldC5wZXRfaWQgfT5cblx0XHRcdFx0XHQ8aW1nIGFsdD17IHBldC5wZXRfbmFtZSB9IHNyYz17IGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyBwZXQucGV0X2lkICsgXCIvMC5wbmdcIiB9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGg1PnsgcGV0LnBldF9uYW1lIH08L2g1PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXBldC1pbmZvXCI+XG5cdFx0XHRcdFx0PGg2Pnsgbm9HZXRHZW5kZXIocGV0LnBldF9nZW5kZXIpIH08L2g2PlxuXHRcdFx0XHRcdDxoNj57IG5vR2V0VHlwZShwZXQucGV0X3R5cGUpIH08L2g2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWQgPyAoXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvZWRpdC9cIiArIHBldC5wZXRfaWQgfT48aDYgY2xhc3NOYW1lPVwiYXNpZGUtcGV0LWVkaXRcIj5FZGl0PC9oNj48L2E+XG5cdFx0XHRcdFx0KSA6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgZW1wdHlNZXNzYWdlO1xuXHRcdGlmICh0aGlzLnByb3BzLnVzZXIubW9tZW50RGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdGVtcHR5TWVzc2FnZSA9IChcblx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImFzaWRlLW5vXCI+Tm90IG1vbWVudHMgeWV0IC4uLjwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRjb25zdCBnYWxsZXJ5Qm9hcmQgPSA8V2F0ZXJmYWxsIFxuXHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyBcIjNcIiA6IFwiMlwiIH1cblx0XHRcdGltYWdlPXsgdGhpcy5wcm9wcy51c2VyLm1vbWVudERhdGEgfSBcblx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0Lz5cblx0XHRsZXQgbG9hZEJ1dHRvbjtcblx0XHRpZiAoIXRoaXMucHJvcHMudXNlci5sb2NrZXIpIHtcblx0XHRcdGxvYWRCdXR0b24gPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoW1xuICAgICAgPG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdGlkPVwibWFpbi1wcm9maWxlXCIgXG5cdFx0XHRcdFx0YWx0PXsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfbmFtZX0gXG5cdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCArIFwiLmpwZ1wiIH0gXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYWluLW5hbWVcIj57IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX25hbWUgfTwvaDE+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYWluLW5hbWVcIj57IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2Fib3V0IH08L2g1PlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi1uYW1lXCI+LSBVc2VyIHsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgfSAtPC9oNT5cblx0XHRcdFx0PGg1IGlkPVwibWFpbi1yZWxhdGl2ZVwiPlJlbGF0aXZlczo8L2g1PlxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpbi1mYW1pbHlcIj5cblx0XHRcdFx0XHR7IHJlbGF0aXZlQm9hcmQgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj4sXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJwZXRzIGh1YlwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWh1Yi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxoND5QZXRzIGluIGh1YjwvaDQ+XG5cdFx0XHRcdFx0eyBhZGRCdXR0b24gfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwZXRzTGlzdCB9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJwZXRzIG1vbWVudFwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLW1vbWVudC5wbmdcIiAvPlxuXHRcdFx0XHRcdDxoND5Nb21lbnRzPC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgZW1wdHlNZXNzYWdlIH1cblx0XHRcdFx0eyBnYWxsZXJ5Qm9hcmQgfVxuXHRcdFx0XHR7IGxvYWRCdXR0b24gfVxuXHRcdFx0PC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIHVzZXI6IHN0YXRlLnVzZXIgfSksXG4gIHsgXG5cdFx0cmVhZFVzZXJQYWdlLCByZWFkVXNlck1vbWVudHNcblx0fVxuKShVc2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvVXNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxufVxcbiNtYWluLXByb2ZpbGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWFpbi1uYW1le1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNtYWluLXJlbGF0aXZle1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNtYWluLWZhbWlseXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMTBweCA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcXG4gICAgcGFkZGluZy1yaWdodDogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q3YjRcXG59XFxuI21haW4tZmFtaWx5IGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBcXFwibWlkZGxlXFxcIjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5hc2lkZS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTQlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMlO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG4uYXNpZGUtaGVhZGVyIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbn1cXG4uYXNpZGUtaGVhZGVyIGg0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYXNpZGUtaGVhZGVyLWFkZHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBjb2xvcjogI2VmODUxMztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFzaWRlLXBldHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMTclO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hc2lkZS1wZXQgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmFzaWRlLXBldCBoNXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFzaWRlLXBldC1pbmZve1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5hc2lkZS1wZXQtaW5mbz46Zmlyc3QtY2hpbGR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uYXNpZGUtcGV0LWluZm8+Om50aC1jaGlsZCgyKXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmODUxMztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG4uYXNpZGUtcGV0LWVkaXR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmFzaWRlLW5ve1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggNTBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3VzZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VzZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3VzZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==