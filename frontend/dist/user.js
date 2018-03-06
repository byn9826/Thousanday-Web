webpackJsonp([3],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _user = __webpack_require__(61);

var _account = __webpack_require__(56);

var _config = __webpack_require__(5);

var _noToInfo = __webpack_require__(57);

var _Waterfall = __webpack_require__(147);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(164);

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
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
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
	readUserPage: _user.readUserPage, changeAccountData: _account.changeAccountData, readUserMoments: _user.readUserMoments
})(User);

/***/ }),

/***/ 147:
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#main-profile{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 50%;\n}\n.main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    text-align: center;\n}\n#main-relative{\n    border-top: 1px solid #e5e5e5;\n    padding-top: 15px;\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n}\n\n#main-family{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    border-radius: 5px;\n    padding-top: 10px;\n    padding-left: 3%;\n    padding-right: 3%;\n    background-color: #f7d7b4\n}\n#main-family img{\n    display: inline-block;\n    width: 20%;\n    margin-right: 5%;\n    border-radius: 50%;\n    vertical-align: \"middle\";\n    margin-bottom: 10px;\n}\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-header{\n    display: block;\n    width: 94%;\n    padding: 10px 3%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 25px;\n}\n.aside-header img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n}\n.aside-header h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-header-add{\n    float: right;\n    color: #ef8513;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.aside-pet{\n    display: inline-block;\n    vertical-align: middle;\n    width: 17%;\n    margin-right: 3%;\n    background-color: #e5e5e5;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n.aside-pet img{\n    display: block;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.aside-pet h5{\n    text-align: center;\n    display: block;\n    margin-top: 5px;\n    font-weight: bold;\n}\n.aside-pet-info{\n    display: block;\n    text-align: center;\n    margin-bottom: 8px;\n}\n.aside-pet-info>:first-child{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.aside-pet-info>:nth-child(2){\n    display: inline-block;\n    vertical-align: middle;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 3px;\n    padding: 2px 4px;\n}\n\n.aside-pet-edit{\n    display: block;\n    background-color: #ef8513;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    padding: 5px 0;\n}\n\n.aside-no{\n    display: block;\n    margin-bottom: 30px;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    padding: 5px 50px;\n}", ""]);

// exports


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(159);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(55)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91c2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3VzZXIuY3NzPzg5M2YiXSwibmFtZXMiOlsiVXNlciIsInByb3BzIiwiY2hhbmdlQWNjb3VudERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVhZFVzZXJQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInJlYWRVc2VyTW9tZW50cyIsInVzZXIiLCJiZWxvbmdEYXRhIiwibG9hZCIsInJlbGF0aXZlQm9hcmQiLCJyZWxhdGl2ZURhdGEiLCJtYXAiLCJyZWxhdGl2ZSIsImluZGV4IiwiYWRkQnV0dG9uIiwidXNlckRhdGEiLCJ1c2VyX2lkIiwiYWNjb3VudCIsInBldHNMaXN0IiwicGV0c0RhdGEiLCJwZXQiLCJwZXRfaWQiLCJwZXRfbmFtZSIsInBldF9nZW5kZXIiLCJwZXRfdHlwZSIsImVtcHR5TWVzc2FnZSIsIm1vbWVudERhdGEiLCJsZW5ndGgiLCJnYWxsZXJ5Qm9hcmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwiYmluZCIsInVzZXJfbmFtZSIsInVzZXJfYWJvdXQiLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwiaW1hZ2UiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7dUNBQ2dCO0FBQ3BCLFFBQUtDLEtBQUwsQ0FBV0MsaUJBQVgsQ0FDQyxDQUNDQyxhQUFhQyxPQUFiLENBQXFCLElBQXJCLENBREQsRUFFQ0QsYUFBYUMsT0FBYixDQUFxQixNQUFyQixDQUZELEVBR0NELGFBQWFDLE9BQWIsQ0FBcUIsT0FBckIsQ0FIRCxDQUREO0FBT0E7OztzQ0FDb0I7QUFDcEIsUUFBS0gsS0FBTCxDQUFXSSxZQUFYLENBQXdCLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQWhEO0FBQ0M7Ozs2QkFDUztBQUNWLFFBQUtQLEtBQUwsQ0FBV1EsZUFBWCxDQUEyQixLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0JDLFVBQTNDLEVBQXVELEtBQUtWLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkUsSUFBdkU7QUFDQTs7OzJCQUNTO0FBQUE7O0FBQ1QsT0FBTUMsZ0JBQWdCLEtBQUtaLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkksWUFBaEIsQ0FBNkJDLEdBQTdCLENBQWlDLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ3REO0FBQUE7QUFBQSxPQUFHLE1BQU8sV0FBV0QsUUFBckIsRUFBaUMsS0FBTSxpQkFBaUJDLEtBQXhEO0FBQ0MsNENBQUssS0FBTSxvQkFBWSxZQUFaLEdBQTJCRCxRQUEzQixHQUFzQyxNQUFqRDtBQURELEtBRHNEO0FBQUEs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cUIsd0JBQXdCLHNCQUFzQixHQUFHLGVBQWUsNEJBQTRCLDZCQUE2QixpQkFBaUIsdUJBQXVCLGdDQUFnQyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLHFCQUFxQixrQkFBa0Isa0NBQWtDLG1DQUFtQyxHQUFHLGdCQUFnQix5QkFBeUIscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0IscUJBQXFCLHlCQUF5Qix5QkFBeUIsR0FBRywrQkFBK0IsNEJBQTRCLDZCQUE2Qix5QkFBeUIsR0FBRyxnQ0FBZ0MsNEJBQTRCLDZCQUE2Qix1Q0FBdUMseUJBQXlCLHVCQUF1QixHQUFHLG9CQUFvQixxQkFBcUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsa0JBQWtCLHFDQUFxQyxzQ0FBc0Msc0JBQXNCLHFCQUFxQixHQUFHLGNBQWMscUJBQXFCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixHQUFHOztBQUVud0Y7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVhZFVzZXJQYWdlLCByZWFkVXNlck1vbWVudHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXInO1xuaW1wb3J0IHsgY2hhbmdlQWNjb3VudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHsgbm9HZXRHZW5kZXIsIG5vR2V0VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy91c2VyLmNzcyc7XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkVXNlclBhZ2UodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cdGxvYWRNb3JlKCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFVzZXJNb21lbnRzKHRoaXMucHJvcHMudXNlci5iZWxvbmdEYXRhLCB0aGlzLnByb3BzLnVzZXIubG9hZCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IHJlbGF0aXZlQm9hcmQgPSB0aGlzLnByb3BzLnVzZXIucmVsYXRpdmVEYXRhLm1hcCgocmVsYXRpdmUsIGluZGV4KSA9PlxuXHRcdFx0PGEgaHJlZj17IFwiL3VzZXIvXCIgKyByZWxhdGl2ZSB9ICBrZXk9eyBcInVzZXJSZWxhdGl2ZVwiICsgaW5kZXggfT5cblx0XHRcdFx0PGltZyBzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIHJlbGF0aXZlICsgXCIuanBnXCIgfSAvPlxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdFx0bGV0IGFkZEJ1dHRvbjtcblx0XHRpZiAodGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZCkge1xuXHRcdFx0YWRkQnV0dG9uID0gKFxuXHRcdFx0XHQ8YSBocmVmPVwiL2FkZFwiPlxuXHRcdFx0XHRcdDxoNSBpZD1cImFzaWRlLWhlYWRlci1hZGRcIj5BZGQgUGV0PC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgcGV0c0xpc3QgPSB0aGlzLnByb3BzLnVzZXIucGV0c0RhdGEubWFwKChwZXQsIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9eyBcInVzZXJQZXRcIiArIGluZGV4IH0gY2xhc3NOYW1lPVwiYXNpZGUtcGV0XCI+XG5cdFx0XHRcdDxhIGhyZWY9eyBcIi9wZXQvXCIgKyBwZXQucGV0X2lkIH0+XG5cdFx0XHRcdFx0PGltZyBhbHQ9eyBwZXQucGV0X25hbWUgfSBzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgcGV0LnBldF9pZCArIFwiLzAucG5nXCIgfSAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNT57IHBldC5wZXRfbmFtZSB9PC9oNT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1wZXQtaW5mb1wiPlxuXHRcdFx0XHRcdDxoNj57IG5vR2V0R2VuZGVyKHBldC5wZXRfZ2VuZGVyKSB9PC9oNj5cblx0XHRcdFx0XHQ8aDY+eyBub0dldFR5cGUocGV0LnBldF90eXBlKSB9PC9oNj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkID8gKFxuXHRcdFx0XHRcdFx0PGEgaHJlZj17IFwiL2VkaXQvXCIgKyBwZXQucGV0X2lkIH0+PGg2IGNsYXNzTmFtZT1cImFzaWRlLXBldC1lZGl0XCI+RWRpdDwvaDY+PC9hPlxuXHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0bGV0IGVtcHR5TWVzc2FnZTtcblx0XHRpZiAodGhpcy5wcm9wcy51c2VyLm1vbWVudERhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRlbXB0eU1lc3NhZ2UgPSAoXG5cdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJhc2lkZS1ub1wiPk5vdCBtb21lbnRzIHlldCAuLi48L2g2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZ2FsbGVyeUJvYXJkID0gPFdhdGVyZmFsbCBcblx0XHRcdGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gXCIzXCIgOiBcIjJcIiB9XG5cdFx0XHRpbWFnZT17IHRoaXMucHJvcHMudXNlci5tb21lbnREYXRhIH0gXG5cdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdC8+XG5cdFx0bGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKCF0aGlzLnByb3BzLnVzZXIubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRpZD1cIm1haW4tcHJvZmlsZVwiIFxuXHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX25hbWV9IFxuXHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgKyBcIi5qcGdcIiB9IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWFpbi1uYW1lXCI+eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9uYW1lIH08L2gxPlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi1uYW1lXCI+eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9hYm91dCB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPi0gVXNlciB7IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkIH0gLTwvaDU+XG5cdFx0XHRcdDxoNSBpZD1cIm1haW4tcmVsYXRpdmVcIj5SZWxhdGl2ZXM6PC9oNT5cblx0XHRcdFx0PGRpdiBpZD1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0eyByZWxhdGl2ZUJvYXJkIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+LFxuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwicGV0cyBodWJcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1odWIucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDQ+UGV0cyBpbiBodWI8L2g0PlxuXHRcdFx0XHRcdHsgYWRkQnV0dG9uIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgcGV0c0xpc3QgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwicGV0cyBtb21lbnRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1tb21lbnQucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDQ+TW9tZW50czwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IGVtcHR5TWVzc2FnZSB9XG5cdFx0XHRcdHsgZ2FsbGVyeUJvYXJkIH1cblx0XHRcdFx0eyBsb2FkQnV0dG9uIH1cblx0XHRcdDwvYXNpZGU+XG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50LCB1c2VyOiBzdGF0ZS51c2VyIH0pLFxuICB7IFxuXHRcdHJlYWRVc2VyUGFnZSwgY2hhbmdlQWNjb3VudERhdGEsIHJlYWRVc2VyTW9tZW50c1xuXHR9XG4pKFVzZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Vc2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuI21haW4tcHJvZmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLW5hbWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI21haW4tcmVsYXRpdmV7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4tZmFtaWx5e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNFxcbn1cXG4jbWFpbi1mYW1pbHkgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IFxcXCJtaWRkbGVcXFwiO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmFzaWRlLWhlYWRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5NCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMyU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi5hc2lkZS1oZWFkZXIgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxufVxcbi5hc2lkZS1oZWFkZXIgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhc2lkZS1oZWFkZXItYWRke1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXNpZGUtcGV0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAxNyU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFzaWRlLXBldCBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uYXNpZGUtcGV0IGg1e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYXNpZGUtcGV0LWluZm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFzaWRlLXBldC1pbmZvPjpmaXJzdC1jaGlsZHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5hc2lkZS1wZXQtaW5mbz46bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcblxcbi5hc2lkZS1wZXQtZWRpdHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uYXNpZGUtbm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1MHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvdXNlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91c2VyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91c2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdXNlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9