webpackJsonp([6],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _user = __webpack_require__(59);

var _config = __webpack_require__(2);

var _noToInfo = __webpack_require__(50);

var _Waterfall = __webpack_require__(196);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(422);

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
					_react2.default.createElement('img', { src: _config.domainUrl + "/public/user/" + relative + ".jpg" })
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
						_react2.default.createElement('img', { alt: pet.pet_name, src: _config.domainUrl + "/public/pet/" + pet.pet_id + "/0.png" })
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
					src: _config.domainUrl + "/public/user/" + this.props.user.userData.user_id + ".jpg"
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
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 900 ? "3" : "2",
					image: this.props.user.momentData,
					fontFamily: '\'Rubik\', sans-serif'
				}),
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

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/*pet page*/\n#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#main-profile{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 50%;\n}\n.main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    text-align: center;\n}\n#main-relative{\n    border-top: 1px solid #e5e5e5;\n    padding-top: 15px;\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n}\n\n#main-family{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    border-radius: 5px;\n    padding-top: 10px;\n    padding-left: 3%;\n    padding-right: 3%;\n    background-color: #f7d7b4\n}\n#main-family img{\n    display: inline-block;\n    width: 20%;\n    margin-right: 5%;\n    border-radius: 50%;\n    vertical-align: \"middle\";\n    margin-bottom: 10px;\n}\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-header{\n    display: block;\n    width: 94%;\n    padding: 10px 3%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 25px;\n}\n.aside-header img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n}\n.aside-header h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-header-add{\n    float: right;\n    color: #ef8513;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.aside-pet{\n    display: inline-block;\n    vertical-align: middle;\n    width: 17%;\n    margin-right: 3%;\n    background-color: #e5e5e5;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n.aside-pet img{\n    display: block;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.aside-pet h5{\n    text-align: center;\n    display: block;\n    margin-top: 5px;\n    font-weight: bold;\n}\n.aside-pet-info{\n    display: block;\n    text-align: center;\n    margin-bottom: 8px;\n}\n.aside-pet-info>:first-child{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.aside-pet-info>:nth-child(2){\n    display: inline-block;\n    vertical-align: middle;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 3px;\n    padding: 2px 4px;\n}\n\n.aside-pet-edit{\n    display: block;\n    background-color: #ef8513;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    padding: 5px 0;\n}\n\n.aside-no{\n    display: block;\n    margin-bottom: 30px;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    padding: 5px 50px;\n}\n\n@media only screen and (max-width: 900px) {\n    #main{\n        width: 25%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        margin-top: 0;\n        padding-top: 100px;\n        width: 90%;\n        min-height: 0;\n    }\n\n    #main-profile{\n        display: block;\n        width: 60%;\n        margin-left: 20%;\n    }\n\n    #aside{\n        width: 90%;\n        margin-top: 30px;\n    }\n\n    .aside-pet{\n        width: 22%;\n    }\n\n}\n\n@media only screen and (max-width: 420px) {\n    .aside-pet{\n        width: 30%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(408);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(47)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdXNlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91c2VyLmNzcz84OTNmIl0sIm5hbWVzIjpbIlVzZXIiLCJwcm9wcyIsInJlYWRVc2VyUGFnZSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJyZWFkVXNlck1vbWVudHMiLCJ1c2VyIiwiYmVsb25nRGF0YSIsImxvYWQiLCJyZWxhdGl2ZUJvYXJkIiwicmVsYXRpdmVEYXRhIiwibWFwIiwicmVsYXRpdmUiLCJpbmRleCIsImRvbWFpblVybCIsImFkZEJ1dHRvbiIsInVzZXJEYXRhIiwidXNlcl9pZCIsImFjY291bnQiLCJwZXRzTGlzdCIsInBldHNEYXRhIiwicGV0IiwicGV0X2lkIiwicGV0X25hbWUiLCJwZXRfZ2VuZGVyIiwicGV0X3R5cGUiLCJlbXB0eU1lc3NhZ2UiLCJtb21lbnREYXRhIiwibGVuZ3RoIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwiYmluZCIsInVzZXJfbmFtZSIsInVzZXJfYWJvdXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7O3NDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0IsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBaEQ7QUFDQzs7OzZCQUNTO0FBQ1YsUUFBS0osS0FBTCxDQUFXSyxlQUFYLENBQTJCLEtBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsVUFBM0MsRUFBdUQsS0FBS1AsS0FBTCxDQUFXTSxJQUFYLENBQWdCRSxJQUF2RTtBQUNBOzs7MkJBQ1M7QUFBQTs7QUFDVCxPQUFNQyxnQkFBZ0IsS0FBS1QsS0FBTCxDQUFXTSxJQUFYLENBQWdCSSxZQUFoQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsV0FDdEQ7QUFBQTtBQUFBLE9BQUcsTUFBTyxXQUFXRCxRQUFyQixFQUFpQyxLQUFNLGlCQUFpQkMsS0FBeEQ7QUFDQyw0Q0FBSyxLQUFNQyxvQkFBWSxlQUFaLEdBQThCRixRQUE5QixHQUF5QyxNQUFwRDtBQURELEtBRHNEO0FBQUEsSUFBakMsQ0FBdEI7QUFLQSxPQUFJRyxrQkFBSjtBQUNBLE9BQUksS0FBS2YsS0FBTCxDQUFXTSxJQUFYLENBQWdCVSxRQUFoQixDQUF5QkMsT0FBekIsS0FBcUMsS0FBS2pCLEtBQUwsQ0FBV2tCLE9BQVgsQ0FBbUJkLEVBQTVELEVBQWdFO0FBQy9EVyxnQkFDQztBQUFBO0FBQUEsT0FBRyxNQUFLLE1BQVI7QUFDQztBQUFBO0FBQUEs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QUcsa0JBQWtCLHFCQUFxQix5QkFBeUIseUJBQXlCLEdBQUcsK0JBQStCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLEdBQUcsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsdUNBQXVDLHlCQUF5Qix1QkFBdUIsR0FBRyxvQkFBb0IscUJBQXFCLGdDQUFnQyxtQkFBbUIseUJBQXlCLGtCQUFrQixxQ0FBcUMsc0NBQXNDLHNCQUFzQixxQkFBcUIsR0FBRyxjQUFjLHFCQUFxQiwwQkFBMEIsZ0NBQWdDLHlCQUF5Qix3QkFBd0IsR0FBRywrQ0FBK0MsWUFBWSxxQkFBcUIsMEJBQTBCLE9BQU8sZUFBZSxxQkFBcUIsT0FBTyxHQUFHLCtDQUErQyxZQUFZLHlCQUF5Qix3QkFBd0IsNkJBQTZCLHFCQUFxQix3QkFBd0IsT0FBTyxzQkFBc0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsT0FBTyxlQUFlLHFCQUFxQiwyQkFBMkIsT0FBTyxtQkFBbUIscUJBQXFCLE9BQU8sS0FBSywrQ0FBK0MsaUJBQWlCLHFCQUFxQixPQUFPLEdBQUc7O0FBRTU2Rzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLEdBQXFEOztBQUUzRSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsRUFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZWFkVXNlclBhZ2UsIHJlYWRVc2VyTW9tZW50cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgeyBub0dldEdlbmRlciwgbm9HZXRUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9ub1RvSW5mbyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL3VzZXIuY3NzJztcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFVzZXJQYWdlKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgfVxuXHRsb2FkTW9yZSgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRVc2VyTW9tZW50cyh0aGlzLnByb3BzLnVzZXIuYmVsb25nRGF0YSwgdGhpcy5wcm9wcy51c2VyLmxvYWQpO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCByZWxhdGl2ZUJvYXJkID0gdGhpcy5wcm9wcy51c2VyLnJlbGF0aXZlRGF0YS5tYXAoKHJlbGF0aXZlLCBpbmRleCkgPT5cblx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgcmVsYXRpdmUgfSAga2V5PXsgXCJ1c2VyUmVsYXRpdmVcIiArIGluZGV4IH0+XG5cdFx0XHRcdDxpbWcgc3JjPXsgZG9tYWluVXJsICsgXCIvcHVibGljL3VzZXIvXCIgKyByZWxhdGl2ZSArIFwiLmpwZ1wiIH0gLz5cblx0XHRcdDwvYT5cblx0XHQpO1xuXHRcdGxldCBhZGRCdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWQpIHtcblx0XHRcdGFkZEJ1dHRvbiA9IChcblx0XHRcdFx0PGEgaHJlZj1cIi9hZGRcIj5cblx0XHRcdFx0XHQ8aDUgaWQ9XCJhc2lkZS1oZWFkZXItYWRkXCI+QWRkIFBldDwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNvbnN0IHBldHNMaXN0ID0gdGhpcy5wcm9wcy51c2VyLnBldHNEYXRhLm1hcCgocGV0LCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXsgXCJ1c2VyUGV0XCIgKyBpbmRleCB9IGNsYXNzTmFtZT1cImFzaWRlLXBldFwiPlxuXHRcdFx0XHQ8YSBocmVmPXsgXCIvcGV0L1wiICsgcGV0LnBldF9pZCB9PlxuXHRcdFx0XHRcdDxpbWcgYWx0PXsgcGV0LnBldF9uYW1lIH0gc3JjPXsgZG9tYWluVXJsICsgXCIvcHVibGljL3BldC9cIiArIHBldC5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDU+eyBwZXQucGV0X25hbWUgfTwvaDU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtcGV0LWluZm9cIj5cblx0XHRcdFx0XHQ8aDY+eyBub0dldEdlbmRlcihwZXQucGV0X2dlbmRlcikgfTwvaDY+XG5cdFx0XHRcdFx0PGg2Pnsgbm9HZXRUeXBlKHBldC5wZXRfdHlwZSkgfTwvaDY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZCA/IChcblx0XHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9lZGl0L1wiICsgcGV0LnBldF9pZCB9PjxoNiBjbGFzc05hbWU9XCJhc2lkZS1wZXQtZWRpdFwiPkVkaXQ8L2g2PjwvYT5cblx0XHRcdFx0XHQpIDogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBlbXB0eU1lc3NhZ2U7XG5cdFx0aWYgKHRoaXMucHJvcHMudXNlci5tb21lbnREYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0ZW1wdHlNZXNzYWdlID0gKFxuXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiYXNpZGUtbm9cIj5Ob3QgbW9tZW50cyB5ZXQgLi4uPC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy51c2VyLmxvY2tlcikge1xuXHRcdFx0bG9hZEJ1dHRvbiA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0aWQ9XCJtYWluLXByb2ZpbGVcIiBcblx0XHRcdFx0XHRhbHQ9eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9uYW1lfSBcblx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9wdWJsaWMvdXNlci9cIiArIHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkICsgXCIuanBnXCIgfSBcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPnsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfbmFtZSB9PC9oMT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPnsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfYWJvdXQgfTwvaDU+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYWluLW5hbWVcIj4tIFVzZXIgeyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCB9IC08L2g1PlxuXHRcdFx0XHQ8aDUgaWQ9XCJtYWluLXJlbGF0aXZlXCI+UmVsYXRpdmVzOjwvaDU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLWZhbWlseVwiPlxuXHRcdFx0XHRcdHsgcmVsYXRpdmVCb2FyZCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPixcblx0XHRcdDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cInBldHMgaHViXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtaHViLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg0PlBldHMgaW4gaHViPC9oND5cblx0XHRcdFx0XHR7IGFkZEJ1dHRvbiB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IHBldHNMaXN0IH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cInBldHMgbW9tZW50XCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtbW9tZW50LnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg0Pk1vbWVudHM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBlbXB0eU1lc3NhZ2UgfVxuXHRcdFx0XHQ8V2F0ZXJmYWxsIFxuXHRcdFx0XHRcdGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gXCIzXCIgOiBcIjJcIiB9XG5cdFx0XHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLnVzZXIubW9tZW50RGF0YSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgbG9hZEJ1dHRvbiB9XG5cdFx0XHQ8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCwgdXNlcjogc3RhdGUudXNlciB9KSxcbiAgeyBcblx0XHRyZWFkVXNlclBhZ2UsIHJlYWRVc2VyTW9tZW50c1xuXHR9XG4pKFVzZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Vc2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCI1MHB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qcGV0IHBhZ2UqL1xcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuI21haW4tcHJvZmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLW5hbWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI21haW4tcmVsYXRpdmV7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4tZmFtaWx5e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNFxcbn1cXG4jbWFpbi1mYW1pbHkgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IFxcXCJtaWRkbGVcXFwiO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmFzaWRlLWhlYWRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5NCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMyU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi5hc2lkZS1oZWFkZXIgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxufVxcbi5hc2lkZS1oZWFkZXIgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhc2lkZS1oZWFkZXItYWRke1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXNpZGUtcGV0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAxNyU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFzaWRlLXBldCBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uYXNpZGUtcGV0IGg1e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYXNpZGUtcGV0LWluZm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFzaWRlLXBldC1pbmZvPjpmaXJzdC1jaGlsZHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5hc2lkZS1wZXQtaW5mbz46bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcblxcbi5hc2lkZS1wZXQtZWRpdHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uYXNpZGUtbm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcblxcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1wcm9maWxle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG4gICAgfVxcblxcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgfVxcblxcbiAgICAuYXNpZGUtcGV0e1xcbiAgICAgICAgd2lkdGg6IDIyJTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIC5hc2lkZS1wZXR7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy91c2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VzZXIuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VzZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91c2VyLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy91c2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=