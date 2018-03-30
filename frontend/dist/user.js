webpackJsonp([6],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _user = __webpack_require__(72);

var _config = __webpack_require__(2);

var _noToInfo = __webpack_require__(61);

var _Waterfall = __webpack_require__(205);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(420);

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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*pet page*/\n#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#main-profile{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 50%;\n}\n.main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    text-align: center;\n}\n#main-relative{\n    border-top: 1px solid #e5e5e5;\n    padding-top: 15px;\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n}\n\n#main-family{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    border-radius: 5px;\n    padding-top: 10px;\n    padding-left: 3%;\n    padding-right: 3%;\n    background-color: #f7d7b4\n}\n#main-family img{\n    display: inline-block;\n    width: 20%;\n    margin-right: 5%;\n    border-radius: 50%;\n    vertical-align: \"middle\";\n    margin-bottom: 10px;\n}\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-header{\n    display: block;\n    width: 94%;\n    padding: 10px 3%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 25px;\n}\n.aside-header img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n}\n.aside-header h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-header-add{\n    float: right;\n    color: #ef8513;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.aside-pet{\n    display: inline-block;\n    vertical-align: middle;\n    width: 17%;\n    margin-right: 3%;\n    background-color: #e5e5e5;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n.aside-pet img{\n    display: block;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.aside-pet h5{\n    text-align: center;\n    display: block;\n    margin-top: 5px;\n    font-weight: bold;\n}\n.aside-pet-info{\n    display: block;\n    text-align: center;\n    margin-bottom: 8px;\n}\n.aside-pet-info>:first-child{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.aside-pet-info>:nth-child(2){\n    display: inline-block;\n    vertical-align: middle;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 3px;\n    padding: 2px 4px;\n}\n\n.aside-pet-edit{\n    display: block;\n    background-color: #ef8513;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    padding: 5px 0;\n}\n\n.aside-no{\n    display: block;\n    margin-bottom: 30px;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    padding: 5px 50px;\n}\n\n@media only screen and (max-width: 900px) {\n    #main{\n        width: 25%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        margin-top: 0;\n        padding-top: 100px;\n        width: 90%;\n        min-height: 0;\n    }\n\n    #main-profile{\n        display: block;\n        width: 60%;\n        margin-left: 20%;\n    }\n\n    #aside{\n        width: 90%;\n        margin-top: 30px;\n    }\n\n    .aside-pet{\n        width: 22%;\n    }\n\n}\n\n@media only screen and (max-width: 420px) {\n    .aside-pet{\n        width: 30%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(406);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdXNlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91c2VyLmNzcz84OTNmIl0sIm5hbWVzIjpbIlVzZXIiLCJwcm9wcyIsInJlYWRVc2VyUGFnZSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJyZWFkVXNlck1vbWVudHMiLCJ1c2VyIiwiYmVsb25nRGF0YSIsImxvYWQiLCJyZWxhdGl2ZUJvYXJkIiwicmVsYXRpdmVEYXRhIiwibWFwIiwicmVsYXRpdmUiLCJpbmRleCIsImFkZEJ1dHRvbiIsInVzZXJEYXRhIiwidXNlcl9pZCIsImFjY291bnQiLCJwZXRzTGlzdCIsInBldHNEYXRhIiwicGV0IiwicGV0X2lkIiwicGV0X25hbWUiLCJwZXRfZ2VuZGVyIiwicGV0X3R5cGUiLCJlbXB0eU1lc3NhZ2UiLCJtb21lbnREYXRhIiwibGVuZ3RoIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwiYmluZCIsInVzZXJfbmFtZSIsInVzZXJfYWJvdXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7O3NDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0IsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBaEQ7QUFDQzs7OzZCQUNTO0FBQ1YsUUFBS0osS0FBTCxDQUFXSyxlQUFYLENBQTJCLEtBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsVUFBM0MsRUFBdUQsS0FBS1AsS0FBTCxDQUFXTSxJQUFYLENBQWdCRSxJQUF2RTtBQUNBOzs7MkJBQ1M7QUFBQTs7QUFDVCxPQUFNQyxnQkFBZ0IsS0FBS1QsS0FBTCxDQUFXTSxJQUFYLENBQWdCSSxZQUFoQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsV0FDdEQ7QUFBQTtBQUFBLE9BQUcsTUFBTyxXQUFXRCxRQUFyQixFQUFpQyxLQUFNLGlCQUFpQkMsS0FBeEQ7QUFDQyw0Q0FBSyxLQUFNLG9CQUFZLGVBQVosR0FBOEJELFFBQTlCLEdBQXlDLE1BQXBEO0FBREQsS0FEc0Q7QUFBQSxJQUFqQyxDQUF0QjtBQUtBLE9BQUlFLGtCQUFKO0FBQ0EsT0FBSSxLQUFLZCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JTLFFBQWhCLENBQXlCQyxPQUF6QixLQUFxQyxLQUFLaEIsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQmIsRUFBNUQsRUFBZ0U7QUFDL0RVLGdCQUNDO0FBQUE7QUFBQSxPQUFHLE1BQUssTUFBUjtBQUNDO0FBQUE7QUFBQSxRQUFJLElBQUcsa0JBQVA7QUFBQTtBQUFB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dUMseUJBQXlCLHVCQUF1QixHQUFHLG9CQUFvQixxQkFBcUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsa0JBQWtCLHFDQUFxQyxzQ0FBc0Msc0JBQXNCLHFCQUFxQixHQUFHLGNBQWMscUJBQXFCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixHQUFHLCtDQUErQyxZQUFZLHFCQUFxQiwwQkFBMEIsT0FBTyxlQUFlLHFCQUFxQixPQUFPLEdBQUcsK0NBQStDLFlBQVkseUJBQXlCLHdCQUF3Qiw2QkFBNkIscUJBQXFCLHdCQUF3QixPQUFPLHNCQUFzQix5QkFBeUIscUJBQXFCLDJCQUEyQixPQUFPLGVBQWUscUJBQXFCLDJCQUEyQixPQUFPLG1CQUFtQixxQkFBcUIsT0FBTyxLQUFLLCtDQUErQyxpQkFBaUIscUJBQXFCLE9BQU8sR0FBRzs7QUFFNTZHOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlYWRVc2VyUGFnZSwgcmVhZFVzZXJNb21lbnRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCB7IG5vR2V0R2VuZGVyLCBub0dldFR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL25vVG9JbmZvJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvdXNlci5jc3MnO1xuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkVXNlclBhZ2UodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cdGxvYWRNb3JlKCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFVzZXJNb21lbnRzKHRoaXMucHJvcHMudXNlci5iZWxvbmdEYXRhLCB0aGlzLnByb3BzLnVzZXIubG9hZCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IHJlbGF0aXZlQm9hcmQgPSB0aGlzLnByb3BzLnVzZXIucmVsYXRpdmVEYXRhLm1hcCgocmVsYXRpdmUsIGluZGV4KSA9PlxuXHRcdFx0PGEgaHJlZj17IFwiL3VzZXIvXCIgKyByZWxhdGl2ZSB9ICBrZXk9eyBcInVzZXJSZWxhdGl2ZVwiICsgaW5kZXggfT5cblx0XHRcdFx0PGltZyBzcmM9eyBkb21haW5VcmwgKyBcIi9wdWJsaWMvdXNlci9cIiArIHJlbGF0aXZlICsgXCIuanBnXCIgfSAvPlxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdFx0bGV0IGFkZEJ1dHRvbjtcblx0XHRpZiAodGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZCkge1xuXHRcdFx0YWRkQnV0dG9uID0gKFxuXHRcdFx0XHQ8YSBocmVmPVwiL2FkZFwiPlxuXHRcdFx0XHRcdDxoNSBpZD1cImFzaWRlLWhlYWRlci1hZGRcIj5BZGQgUGV0PC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgcGV0c0xpc3QgPSB0aGlzLnByb3BzLnVzZXIucGV0c0RhdGEubWFwKChwZXQsIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9eyBcInVzZXJQZXRcIiArIGluZGV4IH0gY2xhc3NOYW1lPVwiYXNpZGUtcGV0XCI+XG5cdFx0XHRcdDxhIGhyZWY9eyBcIi9wZXQvXCIgKyBwZXQucGV0X2lkIH0+XG5cdFx0XHRcdFx0PGltZyBhbHQ9eyBwZXQucGV0X25hbWUgfSBzcmM9eyBkb21haW5VcmwgKyBcIi9wdWJsaWMvcGV0L1wiICsgcGV0LnBldF9pZCArIFwiLzAucG5nXCIgfSAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNT57IHBldC5wZXRfbmFtZSB9PC9oNT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1wZXQtaW5mb1wiPlxuXHRcdFx0XHRcdDxoNj57IG5vR2V0R2VuZGVyKHBldC5wZXRfZ2VuZGVyKSB9PC9oNj5cblx0XHRcdFx0XHQ8aDY+eyBub0dldFR5cGUocGV0LnBldF90eXBlKSB9PC9oNj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkID8gKFxuXHRcdFx0XHRcdFx0PGEgaHJlZj17IFwiL2VkaXQvXCIgKyBwZXQucGV0X2lkIH0+PGg2IGNsYXNzTmFtZT1cImFzaWRlLXBldC1lZGl0XCI+RWRpdDwvaDY+PC9hPlxuXHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0bGV0IGVtcHR5TWVzc2FnZTtcblx0XHRpZiAodGhpcy5wcm9wcy51c2VyLm1vbWVudERhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRlbXB0eU1lc3NhZ2UgPSAoXG5cdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJhc2lkZS1ub1wiPk5vdCBtb21lbnRzIHlldCAuLi48L2g2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0bGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKCF0aGlzLnByb3BzLnVzZXIubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRpZD1cIm1haW4tcHJvZmlsZVwiIFxuXHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX25hbWV9IFxuXHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL3B1YmxpYy91c2VyL1wiICsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgKyBcIi5qcGdcIiB9IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWFpbi1uYW1lXCI+eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9uYW1lIH08L2gxPlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi1uYW1lXCI+eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9hYm91dCB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPi0gVXNlciB7IHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkIH0gLTwvaDU+XG5cdFx0XHRcdDxoNSBpZD1cIm1haW4tcmVsYXRpdmVcIj5SZWxhdGl2ZXM6PC9oNT5cblx0XHRcdFx0PGRpdiBpZD1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0eyByZWxhdGl2ZUJvYXJkIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+LFxuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwicGV0cyBodWJcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1odWIucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDQ+UGV0cyBpbiBodWI8L2g0PlxuXHRcdFx0XHRcdHsgYWRkQnV0dG9uIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgcGV0c0xpc3QgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwicGV0cyBtb21lbnRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1tb21lbnQucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDQ+TW9tZW50czwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IGVtcHR5TWVzc2FnZSB9XG5cdFx0XHRcdDxXYXRlcmZhbGwgXG5cdFx0XHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyBcIjNcIiA6IFwiMlwiIH1cblx0XHRcdFx0XHRpbWFnZT17IHRoaXMucHJvcHMudXNlci5tb21lbnREYXRhIH0gXG5cdFx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBsb2FkQnV0dG9uIH1cblx0XHRcdDwvYXNpZGU+XG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50LCB1c2VyOiBzdGF0ZS51c2VyIH0pLFxuICB7IFxuXHRcdHJlYWRVc2VyUGFnZSwgcmVhZFVzZXJNb21lbnRzXG5cdH1cbikoVXNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1VzZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjUwcHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypwZXQgcGFnZSovXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xcbn1cXG4jbWFpbi1wcm9maWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1haW4tbmFtZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMTBweCA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbWFpbi1yZWxhdGl2ZXtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbWFpbi1mYW1pbHl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0XFxufVxcbiNtYWluLWZhbWlseSBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogXFxcIm1pZGRsZVxcXCI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4uYXNpZGUtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgcGFkZGluZzogMTBweCAzJTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLmFzaWRlLWhlYWRlciBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuLmFzaWRlLWhlYWRlciBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FzaWRlLWhlYWRlci1hZGR7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgY29sb3I6ICNlZjg1MTM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hc2lkZS1wZXR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDE3JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYXNpZGUtcGV0IGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5hc2lkZS1wZXQgaDV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hc2lkZS1wZXQtaW5mb3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uYXNpZGUtcGV0LWluZm8+OmZpcnN0LWNoaWxke1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmFzaWRlLXBldC1pbmZvPjpudGgtY2hpbGQoMil7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZjg1MTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuXFxuLmFzaWRlLXBldC1lZGl0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5hc2lkZS1ub3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDUwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICB9XFxuXFxuICAgICNtYWluLXByb2ZpbGV7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5hc2lkZS1wZXR7XFxuICAgICAgICB3aWR0aDogMjIlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcXG4gICAgLmFzaWRlLXBldHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3VzZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VzZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3VzZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MjBcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==