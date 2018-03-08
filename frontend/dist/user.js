webpackJsonp([5],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _user = __webpack_require__(65);

var _config = __webpack_require__(4);

var _noToInfo = __webpack_require__(57);

var _Waterfall = __webpack_require__(172);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(381);

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

/***/ 172:
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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#main-profile{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 50%;\n}\n.main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    text-align: center;\n}\n#main-relative{\n    border-top: 1px solid #e5e5e5;\n    padding-top: 15px;\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n}\n\n#main-family{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n    border-radius: 5px;\n    padding-top: 10px;\n    padding-left: 3%;\n    padding-right: 3%;\n    background-color: #f7d7b4\n}\n#main-family img{\n    display: inline-block;\n    width: 20%;\n    margin-right: 5%;\n    border-radius: 50%;\n    vertical-align: \"middle\";\n    margin-bottom: 10px;\n}\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-header{\n    display: block;\n    width: 94%;\n    padding: 10px 3%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 25px;\n}\n.aside-header img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n}\n.aside-header h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-header-add{\n    float: right;\n    color: #ef8513;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.aside-pet{\n    display: inline-block;\n    vertical-align: middle;\n    width: 17%;\n    margin-right: 3%;\n    background-color: #e5e5e5;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n.aside-pet img{\n    display: block;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.aside-pet h5{\n    text-align: center;\n    display: block;\n    margin-top: 5px;\n    font-weight: bold;\n}\n.aside-pet-info{\n    display: block;\n    text-align: center;\n    margin-bottom: 8px;\n}\n.aside-pet-info>:first-child{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.aside-pet-info>:nth-child(2){\n    display: inline-block;\n    vertical-align: middle;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 3px;\n    padding: 2px 4px;\n}\n\n.aside-pet-edit{\n    display: block;\n    background-color: #ef8513;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    padding: 5px 0;\n}\n\n.aside-no{\n    display: block;\n    margin-bottom: 30px;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    padding: 5px 50px;\n}", ""]);

// exports


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(279);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYioqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdXNlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91c2VyLmNzcz84OTNmIl0sIm5hbWVzIjpbIlVzZXIiLCJwcm9wcyIsInJlYWRVc2VyUGFnZSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJyZWFkVXNlck1vbWVudHMiLCJ1c2VyIiwiYmVsb25nRGF0YSIsImxvYWQiLCJyZWxhdGl2ZUJvYXJkIiwicmVsYXRpdmVEYXRhIiwibWFwIiwicmVsYXRpdmUiLCJpbmRleCIsImFkZEJ1dHRvbiIsInVzZXJEYXRhIiwidXNlcl9pZCIsImFjY291bnQiLCJwZXRzTGlzdCIsInBldHNEYXRhIiwicGV0IiwicGV0X2lkIiwicGV0X25hbWUiLCJwZXRfZ2VuZGVyIiwicGV0X3R5cGUiLCJlbXB0eU1lc3NhZ2UiLCJtb21lbnREYXRhIiwibGVuZ3RoIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwiYmluZCIsInVzZXJfbmFtZSIsInVzZXJfYWJvdXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7O3NDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0IsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBaEQ7QUFDQzs7OzZCQUNTO0FBQ1YsUUFBS0osS0FBTCxDQUFXSyxlQUFYLENBQTJCLEtBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsVUFBM0MsRUFBdUQsS0FBS1AsS0FBTCxDQUFXTSxJQUFYLENBQWdCRSxJQUF2RTtBQUNBOzs7MkJBQ1M7QUFBQTs7QUFDVCxPQUFNQyxnQkFBZ0IsS0FBS1QsS0FBTCxDQUFXTSxJQUFYLENBQWdCSSxZQUFoQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsV0FDdEQ7QUFBQTtBQUFBLE9BQUcsTUFBTyxXQUFXRCxRQUFyQixFQUFpQyxLQUFNLGlCQUFpQkMsS0FBeEQ7QUFDQyw0Q0FBSyxLQUFNLG9CQUFZLFlBQVosR0FBMkJELFFBQTNCLEdBQXNDLE1BQWpEO0FBREQsS0FEc0Q7QUFBQSxJQUFqQyxDQUF0QjtBQUtBLE9BQUlFLGtCQUFKO0FBQ0EsT0FBSSxLQUFLZCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JTLFFBQWhCLENBQXlCQyxPQUF6QixLQUFxQyxLQUFLaEIsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQmIsRUFBNUQsRUFBZ0U7QUFDL0RVLGdCQUNDO0FBQUE7QUFBQSxPQUFHLE1BQUssTUFBUjtBQUNDO0FBQUE7QUFBQSxRQUFJLElBQUcsa0JBQVA7QUFBQTtBQUFB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Qyx5QkFBeUIsdUJBQXVCLEdBQUcsb0JBQW9CLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLHlCQUF5QixrQkFBa0IscUNBQXFDLHNDQUFzQyxzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxxQkFBcUIsMEJBQTBCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLEdBQUc7O0FBRW53Rjs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZWFkVXNlclBhZ2UsIHJlYWRVc2VyTW9tZW50cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgeyBub0dldEdlbmRlciwgbm9HZXRUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9ub1RvSW5mbyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL3VzZXIuY3NzJztcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFVzZXJQYWdlKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgfVxuXHRsb2FkTW9yZSgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRVc2VyTW9tZW50cyh0aGlzLnByb3BzLnVzZXIuYmVsb25nRGF0YSwgdGhpcy5wcm9wcy51c2VyLmxvYWQpO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCByZWxhdGl2ZUJvYXJkID0gdGhpcy5wcm9wcy51c2VyLnJlbGF0aXZlRGF0YS5tYXAoKHJlbGF0aXZlLCBpbmRleCkgPT5cblx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgcmVsYXRpdmUgfSAga2V5PXsgXCJ1c2VyUmVsYXRpdmVcIiArIGluZGV4IH0+XG5cdFx0XHRcdDxpbWcgc3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyByZWxhdGl2ZSArIFwiLmpwZ1wiIH0gLz5cblx0XHRcdDwvYT5cblx0XHQpO1xuXHRcdGxldCBhZGRCdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWQpIHtcblx0XHRcdGFkZEJ1dHRvbiA9IChcblx0XHRcdFx0PGEgaHJlZj1cIi9hZGRcIj5cblx0XHRcdFx0XHQ8aDUgaWQ9XCJhc2lkZS1oZWFkZXItYWRkXCI+QWRkIFBldDwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNvbnN0IHBldHNMaXN0ID0gdGhpcy5wcm9wcy51c2VyLnBldHNEYXRhLm1hcCgocGV0LCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXsgXCJ1c2VyUGV0XCIgKyBpbmRleCB9IGNsYXNzTmFtZT1cImFzaWRlLXBldFwiPlxuXHRcdFx0XHQ8YSBocmVmPXsgXCIvcGV0L1wiICsgcGV0LnBldF9pZCB9PlxuXHRcdFx0XHRcdDxpbWcgYWx0PXsgcGV0LnBldF9uYW1lIH0gc3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHBldC5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDU+eyBwZXQucGV0X25hbWUgfTwvaDU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtcGV0LWluZm9cIj5cblx0XHRcdFx0XHQ8aDY+eyBub0dldEdlbmRlcihwZXQucGV0X2dlbmRlcikgfTwvaDY+XG5cdFx0XHRcdFx0PGg2Pnsgbm9HZXRUeXBlKHBldC5wZXRfdHlwZSkgfTwvaDY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZCA/IChcblx0XHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9lZGl0L1wiICsgcGV0LnBldF9pZCB9PjxoNiBjbGFzc05hbWU9XCJhc2lkZS1wZXQtZWRpdFwiPkVkaXQ8L2g2PjwvYT5cblx0XHRcdFx0XHQpIDogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBlbXB0eU1lc3NhZ2U7XG5cdFx0aWYgKHRoaXMucHJvcHMudXNlci5tb21lbnREYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0ZW1wdHlNZXNzYWdlID0gKFxuXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiYXNpZGUtbm9cIj5Ob3QgbW9tZW50cyB5ZXQgLi4uPC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy51c2VyLmxvY2tlcikge1xuXHRcdFx0bG9hZEJ1dHRvbiA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0aWQ9XCJtYWluLXByb2ZpbGVcIiBcblx0XHRcdFx0XHRhbHQ9eyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9uYW1lfSBcblx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIHRoaXMucHJvcHMudXNlci51c2VyRGF0YS51c2VyX2lkICsgXCIuanBnXCIgfSBcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPnsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfbmFtZSB9PC9oMT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tbmFtZVwiPnsgdGhpcy5wcm9wcy51c2VyLnVzZXJEYXRhLnVzZXJfYWJvdXQgfTwvaDU+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYWluLW5hbWVcIj4tIFVzZXIgeyB0aGlzLnByb3BzLnVzZXIudXNlckRhdGEudXNlcl9pZCB9IC08L2g1PlxuXHRcdFx0XHQ8aDUgaWQ9XCJtYWluLXJlbGF0aXZlXCI+UmVsYXRpdmVzOjwvaDU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLWZhbWlseVwiPlxuXHRcdFx0XHRcdHsgcmVsYXRpdmVCb2FyZCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPixcblx0XHRcdDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cInBldHMgaHViXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtaHViLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg0PlBldHMgaW4gaHViPC9oND5cblx0XHRcdFx0XHR7IGFkZEJ1dHRvbiB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IHBldHNMaXN0IH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cInBldHMgbW9tZW50XCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtbW9tZW50LnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg0Pk1vbWVudHM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBlbXB0eU1lc3NhZ2UgfVxuXHRcdFx0XHQ8V2F0ZXJmYWxsIFxuXHRcdFx0XHRcdGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gXCIzXCIgOiBcIjJcIiB9XG5cdFx0XHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLnVzZXIubW9tZW50RGF0YSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgbG9hZEJ1dHRvbiB9XG5cdFx0XHQ8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCwgdXNlcjogc3RhdGUudXNlciB9KSxcbiAgeyBcblx0XHRyZWFkVXNlclBhZ2UsIHJlYWRVc2VyTW9tZW50c1xuXHR9XG4pKFVzZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Vc2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuI21haW4tcHJvZmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLW5hbWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI21haW4tcmVsYXRpdmV7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4tZmFtaWx5e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNFxcbn1cXG4jbWFpbi1mYW1pbHkgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IFxcXCJtaWRkbGVcXFwiO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmFzaWRlLWhlYWRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5NCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMyU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi5hc2lkZS1oZWFkZXIgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxufVxcbi5hc2lkZS1oZWFkZXIgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhc2lkZS1oZWFkZXItYWRke1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXNpZGUtcGV0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAxNyU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFzaWRlLXBldCBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uYXNpZGUtcGV0IGg1e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYXNpZGUtcGV0LWluZm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFzaWRlLXBldC1pbmZvPjpmaXJzdC1jaGlsZHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5hc2lkZS1wZXQtaW5mbz46bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcblxcbi5hc2lkZS1wZXQtZWRpdHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uYXNpZGUtbm97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1MHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvdXNlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91c2VyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91c2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdXNlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9