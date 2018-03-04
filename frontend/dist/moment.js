webpackJsonp([2],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _moment = __webpack_require__(57);

var _account = __webpack_require__(55);

var _config = __webpack_require__(6);

var _Like = __webpack_require__(146);

var _Like2 = _interopRequireDefault(_Like);

var _Inputarea = __webpack_require__(147);

var _Inputarea2 = _interopRequireDefault(_Inputarea);

__webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Moment = function (_Component) {
	_inherits(Moment, _Component);

	function Moment() {
		_classCallCheck(this, Moment);

		return _possibleConstructorReturn(this, (Moment.__proto__ || Object.getPrototypeOf(Moment)).apply(this, arguments));
	}

	_createClass(Moment, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.fetchAccountData();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.loadMomentData(this.props.match.params.id);
		}
	}, {
		key: 'showConfirm',
		value: function showConfirm() {
			this.props.showMomentDelete();
		}
	}, {
		key: 'confirmDelete',
		value: function confirmDelete() {}
	}, {
		key: 'sharePage',
		value: function sharePage() {}
	}, {
		key: 'changeLike',
		value: function changeLike() {}
	}, {
		key: 'sendComment',
		value: function sendComment() {}
	}, {
		key: 'render',
		value: function render() {
			var likeButton = void 0,
			    commentArea = void 0,
			    deleteButton = void 0;
			if (this.props.account.id !== null) {
				likeButton = _react2.default.createElement(_Like2.default, {
					key: this.props.moment.likeData.indexOf(this.props.account.id) === -1 ? 'false' : 'true',
					liked: this.props.moment.likeData.indexOf(this.props.account.id) === -1 ? 'false' : 'true',
					interact: 'true',
					agree: this.props.moment.likeData.length,
					newTotal: this.changeLike.bind(this)
				});
				commentArea = _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Inputarea2.default, { ref: 'newComment', content: '', max: '150' }),
					_react2.default.createElement(
						'h6',
						null,
						this.props.moment.commentError
					),
					_react2.default.createElement(
						'h6',
						{ id: 'aside-leave', onClick: this.sendComment.bind(this) },
						'Comment'
					)
				);
				if (this.props.moment.familyData.indexOf(this.props.account.id) !== -1) {
					deleteButton = _react2.default.createElement(
						'h6',
						{ onClick: this.showConfirm.bind(this) },
						'Delete'
					);
				}
			} else {
				likeButton = _react2.default.createElement(_Like2.default, {
					interact: 'false',
					agree: this.props.moment.likeData.length,
					liked: 'false'
				});
			}
			var confirmButton = void 0;
			if (this.props.moment.showConfirm) {
				confirmButton = _react2.default.createElement('input', { type: 'button', value: 'Confirm ?', onClick: this.confirmDelete.bind(this) });
			}
			return [_react2.default.createElement(
				'main',
				{ id: 'main', key: 'main' },
				_react2.default.createElement('img', {
					alt: 'Moment Image',
					src: _config.domainUrl + "/img/pet/" + this.props.moment.momentData.pet_id + "/moment/" + this.props.moment.momentData.image_name
				}),
				_react2.default.createElement(
					'h5',
					null,
					this.props.moment.momentData.moment_date ? new Date(this.props.moment.momentData.moment_date).toISOString().substring(0, 10) : null
				),
				deleteButton,
				confirmButton
			), _react2.default.createElement(
				'aside',
				{ id: 'aside', key: 'aside' },
				_react2.default.createElement(
					'section',
					{ id: 'aside-talk' },
					_react2.default.createElement(
						'a',
						{ href: "/pet/" + this.props.moment.momentData.pet_id },
						_react2.default.createElement('img', {
							alt: 'Pet',
							src: _config.domainUrl + "/img/pet/" + this.props.moment.momentData.pet_id + "/0.png"
						})
					),
					_react2.default.createElement(
						'h4',
						null,
						this.props.moment.momentData.moment_message
					)
				),
				_react2.default.createElement(
					'section',
					{ id: 'aside-social' },
					likeButton,
					_react2.default.createElement('img', {
						id: 'fb-share-button',
						onClick: this.sharePage.bind(this),
						alt: 'share',
						src: '../public/img/facebook-share.png'
					})
				),
				commentArea
			)];
		}
	}]);

	return Moment;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { account: state.account, moment: state.moment };
}, { loadMomentData: _moment.loadMomentData, fetchAccountData: _account.fetchAccountData, showMomentDelete: _moment.showMomentDelete })(Moment);

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: middle;\n    text-align: center;\n    margin-bottom: 200px;\n}\n#main img{\n    border-radius: 5px;\n    margin: 0 auto;\n    max-width: 320px;\n    display: block;\n}\n#main h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main h6{\n    display: inline-block;\n    color: red;\n    cursor: pointer;\n    margin-left: 3%;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main input{\n    display: inline-block;\n    margin-top: 10px;\n    vertical-align: middle;\n    border: 1px solid #ef8513;\n    outline: none;\n    background-color: #ef8513;\n    color: white;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-left: 3%;\n}\n\n#aside{\n    display: inline-block;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: middle;\n    width: 35%;\n    margin-bottom: 200px;\n}\n\n#aside-talk{\n    display: block;\n    padding: 5px 0;\n}\n#aside-talk img{\n    display: inline-block;\n    width: 15%;\n    vertical-align: top;\n    border-radius: 3px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#aside-talk h4{\n    display: inline-block;\n    vertical-align: top;\n    background-color: black;\n    color: white;\n    width: 77%;\n    padding: 3px 2%;\n    border-radius: 5px;\n    min-height: 50px;\n}\n\n#aside-social{\n    margin-top: 10px;\n    display: block;\n    padding-left: 3%;\n}\n#fb-share-button{\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5%;\n    width: 60px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside-leave{\n    float: right;\n    display: block;\n    margin-right: 5%;\n    border: 1px solid #abaeb2;\n    padding: 5px 2%;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside h7{\n    display: block;\n    color: red;\n    text-align: center;\n    margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(140);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(54)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./moment.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./moment.css");

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

/***/ }),

/***/ 146:
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

var Like = function (_Component) {
	_inherits(Like, _Component);

	function Like(props) {
		_classCallCheck(this, Like);

		var _this = _possibleConstructorReturn(this, (Like.__proto__ || Object.getPrototypeOf(Like)).call(this, props));

		_this.state = {
			liked: _this.props.liked || "false",
			hover: "false",
			interact: _this.props.interact || "true"
		};
		return _this;
	}

	_createClass(Like, [{
		key: "clickLike",
		value: function clickLike() {
			var total = parseInt(this.state.agree);
			if (this.state.liked === "true") {
				this.props.newTotal(-1);
				this.setState({ liked: "false" });
			} else {
				this.props.newTotal(1);
				this.setState({ liked: "true" });
			}
		}
	}, {
		key: "enterHeart",
		value: function enterHeart() {
			this.setState({ hover: "true" });
		}
	}, {
		key: "leaveHeart",
		value: function leaveHeart() {
			this.setState({ hover: "flase" });
		}
	}, {
		key: "render",
		value: function render() {
			var containerStyle = {
				display: "inline-block",
				verticalAlign: "middle"
			};
			var lightHeart = {
				backgroundColor: "#f2aa98",
				borderRadius: "3px",
				padding: "1px 4px",
				color: "white",
				cursor: "pointer",
				fontSize: "14px",
				fontFamily: "Times New Roman",
				display: "inline-block",
				verticalAlign: "midde"
			};
			var passiveHeart = {
				backgroundColor: "#f2aa98",
				borderRadius: "3px",
				padding: "1px 4px",
				color: "white",
				fontSize: "14px",
				fontFamily: "Times New Roman",
				display: "inline-block",
				verticalAlign: "midde"
			};
			var darkHeart = {
				backgroundColor: "#e51010",
				borderRadius: "3px",
				padding: "1px 4px",
				color: "white",
				cursor: "pointer",
				fontSize: "14px",
				fontFamily: "Times New Roman",
				display: "inline-block",
				verticalAlign: "midde"
			};
			var numStyle = {
				fontFamily: "Times New Roman",
				fontSize: "16px",
				marginLeft: "5px",
				display: "inline-block",
				verticalAlign: "middle"
			};
			var heart = void 0;
			if (this.state.interact === "true") {
				if (this.state.liked === "true" || this.state.liked === "false" && this.state.hover === "true") {
					heart = _react2.default.createElement(
						"span",
						{
							style: darkHeart,
							onClick: this.clickLike.bind(this),
							onMouseLeave: this.leaveHeart.bind(this)
						},
						"\u2764"
					);
				} else {
					heart = _react2.default.createElement(
						"span",
						{
							style: lightHeart,
							onClick: this.clickLike.bind(this),
							onMouseEnter: this.enterHeart.bind(this)
						},
						"\u2764"
					);
				}
			} else {
				heart = _react2.default.createElement(
					"span",
					{ style: passiveHeart },
					"\u2764"
				);
			}
			return _react2.default.createElement(
				"span",
				{ style: containerStyle },
				heart,
				_react2.default.createElement(
					"span",
					{ style: numStyle },
					this.props.agree,
					" "
				)
			);
		}
	}]);

	return Like;
}(_react.Component);

exports.default = Like;

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

var Inputarea = function (_Component) {
	_inherits(Inputarea, _Component);

	function Inputarea(props) {
		_classCallCheck(this, Inputarea);

		var _this = _possibleConstructorReturn(this, (Inputarea.__proto__ || Object.getPrototypeOf(Inputarea)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			border: _this.props.border || "2px solid #f7d7b4",
			height: _this.props.height || "50px",
			fontSize: _this.props.fontSize || "14px",
			content: _this.props.content || "",
			count: parseInt(_this.props.max) - _this.props.content.length,
			length: parseInt(_this.props.max),
			fontFamily: _this.props.fontFamily || "Times New Roman"
		};
		return _this;
	}

	_createClass(Inputarea, [{
		key: "editInput",
		value: function editInput(event) {
			var changedInput = event.target.value.substr(0, this.state.length);
			this.setState({ content: changedInput });
			this.setState({ count: this.state.length - changedInput.length });
		}
	}, {
		key: "render",
		value: function render() {
			var spanStyle = {
				width: this.state.width,
				display: "inline-block",
				verticalAlign: "top"
			};
			var inputStyle = {
				display: "block",
				width: "98%",
				paddingTop: "5px",
				paddingBottom: "5px",
				border: this.state.border,
				height: this.state.height,
				fontFamily: this.state.fontFamily,
				fontSize: this.state.fontSize,
				paddingLeft: "1%",
				outline: "none",
				borderRadius: "5px",
				resize: "none"
			};
			var countStyle = {
				display: "block",
				fontFamily: this.state.fontFamily,
				fontSize: "11px",
				width: "99%",
				marginLeft: "1%",
				marginTop: "5px"
			};
			return _react2.default.createElement(
				"span",
				{ style: spanStyle },
				_react2.default.createElement("textarea", { style: inputStyle, value: this.state.content, onChange: this.editInput.bind(this) }),
				_react2.default.createElement(
					"span",
					{ style: countStyle },
					this.state.count,
					" / ",
					this.state.length
				)
			);
		}
	}]);

	return Inputarea;
}(_react.Component);

exports.default = Inputarea;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9tZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vbWVudC5jc3M/OTM4MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyJdLCJuYW1lcyI6WyJNb21lbnQiLCJwcm9wcyIsImZldGNoQWNjb3VudERhdGEiLCJsb2FkTW9tZW50RGF0YSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJzaG93TW9tZW50RGVsZXRlIiwibGlrZUJ1dHRvbiIsImNvbW1lbnRBcmVhIiwiZGVsZXRlQnV0dG9uIiwiYWNjb3VudCIsIm1vbWVudCIsImxpa2VEYXRhIiwiaW5kZXhPZiIsImxlbmd0aCIsImNoYW5nZUxpa2UiLCJiaW5kIiwiY29tbWVudEVycm9yIiwic2VuZENvbW1lbnQiLCJmYW1pbHlEYXRhIiwic2hvd0NvbmZpcm0iLCJjb25maXJtQnV0dG9uIiwiY29uZmlybURlbGV0ZSIsIm1vbWVudERhdGEiLCJwZXRfaWQiLCJpbWFnZV9uYW1lIiwibW9tZW50X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJtb21lbnRfbWVzc2FnZSIsInNoYXJlUGFnZSIsInN0YXRlIiwiTGlrZSIsImxpa2VkIiwiaG92ZXIiLCJpbnRlcmFjdCIsInRvdGFsIiwicGFyc2VJbnQiLCJhZ3JlZSIsIm5ld1RvdGFsIiwic2V0U3RhdGUiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGlnaHRIZWFydCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjb2xvciIsImN1cnNvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInBhc3NpdmVIZWFydCIsImRhcmtIZWFydCIsIm51bVN0eWxlIiwibWFyZ2luTGVmdCIsImhlYXJ0IiwiY2xpY2tMaWtlIiwibGVhdmVIZWFydCIsImVudGVySGVhcnQiLCJJbnB1dGFyZWEiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCIsImNvbnRlbnQiLCJjb3VudCIsIm1heCIsImV2ZW50IiwiY2hhbmdlZElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJzdWJzdHIiLCJzcGFuU3R5bGUiLCJpbnB1dFN0eWxlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm91dGxpbmUiLCJyZXNpemUiLCJjb3VudFN0eWxlIiwibWFyZ2luVG9wIiwiZWRpdElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7O3VDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLGdCQUFYO0FBQ0E7OztzQ0FDbUI7QUFDbkIsUUFBS0QsS0FBTCxDQUFXRSxjQUFYLENBQTBCLEtBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQWxEO0FBQ0E7OztnQ0FDYTtBQUNiLFFBQUtMLEtBQUwsQ0FBV00sZ0JBQVg7QUFDQTs7O2tDQUNlLENBRWY7Ozs4QkFDVyxDQUVYOzs7K0JBQ1ksQ0FFWjs7O2dDQUNhLENBRWI7OzsyQkFDUTtBQUNSLE9BQUlDLG1CQUFKO0FBQUEsT0FBZ0JDLG9CQUFoQjtBQUFBLE9BQTZCQyxxQkFBN0I7QUFDQSxPQUFJLEtBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkwsRUFBbkIsS0FBMEIsSUFBOUIsRUFBb0M7QUFDbkNFLGlCQUFhO0FBQ1osVUFDQyxLQUFLUCxLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLFFBQWxCLENBQTJCQyxPQUEzQixDQUFtQyxLQUFLYixLQUFMLENBQVdVLE9BQVgsQ0FBbUJMLEVBQXRELE1BQThELENBQUMsQ0FBL0QsR0FBbUUsT0FBbkUs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QVBQO0FBUWhCRCxjQUFVLEtBQUtuQixLQUFMLENBQVdtQixRQVJMO0FBU2hCMEIsaUJBQWEsSUFURztBQVVoQkMsYUFBUyxNQVZPO0FBV2hCL0Isa0JBQWMsS0FYRTtBQVloQmdDLFlBQVE7QUFaUSxJQUFqQjtBQWNBLE9BQUlDLGFBQWE7QUFDaEJyQyxhQUFTLE9BRE87QUFFaEJTLGdCQUFZLEtBQUtwQixLQUFMLENBQVdvQixVQUZQO0FBR2hCRCxjQUFVLE1BSE07QUFJaEJXLFdBQU8sS0FKUztBQUtoQk4sZ0JBQVksSUFMSTtBQU1oQnlCLGVBQVc7QUFOSyxJQUFqQjtBQVFBLFVBQ0M7QUFBQTtBQUFBLE1BQU0sT0FBT1IsU0FBYjtBQUNDLGdEQUFVLE9BQU9DLFVBQWpCLEVBQTZCLE9BQU8sS0FBSzFDLEtBQUwsQ0FBV2lDLE9BQS9DLEVBQXdELFVBQVUsS0FBS2lCLFNBQUwsQ0FBZWxFLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEUsR0FERDtBQUVDO0FBQUE7QUFBQSxPQUFNLE9BQU9nRSxVQUFiO0FBQTBCLFVBQUtoRCxLQUFMLENBQVdrQyxLQUFyQztBQUFBO0FBQStDLFVBQUtsQyxLQUFMLENBQVdsQjtBQUExRDtBQUZELElBREQ7QUFNQTs7Ozs7O2tCQXJEbUIrQyxTIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9hZE1vbWVudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL21vbWVudCc7XG5pbXBvcnQgeyBzaG93TW9tZW50RGVsZXRlIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9tb21lbnQnO1xuaW1wb3J0IHsgZmV0Y2hBY2NvdW50RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgTGlrZSBmcm9tICcuLi9jb21wb25lbnRzL0xpa2UnO1xuaW1wb3J0IElucHV0YXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0YXJlYSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tb21lbnQuY3NzJztcblxuY2xhc3MgTW9tZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZmV0Y2hBY2NvdW50RGF0YSgpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMubG9hZE1vbWVudERhdGEodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuXHR9XG5cdHNob3dDb25maXJtKCkge1xuXHRcdHRoaXMucHJvcHMuc2hvd01vbWVudERlbGV0ZSgpO1xuXHR9XG5cdGNvbmZpcm1EZWxldGUoKSB7XG5cdFx0XG5cdH1cblx0c2hhcmVQYWdlKCkge1xuXHRcdFxuXHR9XG5cdGNoYW5nZUxpa2UoKSB7XG5cdFx0XG5cdH1cblx0c2VuZENvbW1lbnQoKSB7XG5cdFx0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBsaWtlQnV0dG9uLCBjb21tZW50QXJlYSwgZGVsZXRlQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwpIHtcblx0XHRcdGxpa2VCdXR0b24gPSA8TGlrZSBcblx0XHRcdFx0a2V5PXsgXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpID09PSAtMSA/ICdmYWxzZScgOiAndHJ1ZScgXG5cdFx0XHRcdH1cblx0XHRcdFx0bGlrZWQ9eyBcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgPT09IC0xID8gJ2ZhbHNlJyA6ICd0cnVlJyBcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnRlcmFjdD1cInRydWVcIiBcblx0XHRcdFx0YWdyZWU9eyB0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5sZW5ndGggfSBcblx0XHRcdFx0bmV3VG90YWw9eyB0aGlzLmNoYW5nZUxpa2UuYmluZCh0aGlzKSB9XG5cdFx0XHQvPlxuXHRcdFx0Y29tbWVudEFyZWEgPSAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PElucHV0YXJlYSByZWY9XCJuZXdDb21tZW50XCIgY29udGVudD1cIlwiIG1heD1cIjE1MFwiIC8+XG5cdFx0XHRcdFx0PGg2PnsgdGhpcy5wcm9wcy5tb21lbnQuY29tbWVudEVycm9yIH08L2g2PlxuXHRcdFx0XHRcdDxoNiBpZD1cImFzaWRlLWxlYXZlXCIgb25DbGljaz17IHRoaXMuc2VuZENvbW1lbnQuYmluZCh0aGlzKSB9PkNvbW1lbnQ8L2g2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tb21lbnQuZmFtaWx5RGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgIT09IC0xKSB7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbiA9IDxoNiBvbkNsaWNrPXsgdGhpcy5zaG93Q29uZmlybS5iaW5kKHRoaXMpIH0+RGVsZXRlPC9oNj47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpa2VCdXR0b24gPSA8TGlrZSBcblx0XHRcdFx0aW50ZXJhY3Q9XCJmYWxzZVwiIFxuXHRcdFx0XHRhZ3JlZT17IHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmxlbmd0aCB9IFxuXHRcdFx0XHRsaWtlZD1cImZhbHNlXCJcblx0XHRcdC8+XG5cdFx0fVxuXHRcdGxldCBjb25maXJtQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLm1vbWVudC5zaG93Q29uZmlybSkge1xuXHRcdFx0Y29uZmlybUJ1dHRvbiA9IChcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvbmZpcm0gP1wiIG9uQ2xpY2s9eyB0aGlzLmNvbmZpcm1EZWxldGUuYmluZCh0aGlzKSB9IC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFtcblx0XHRcdDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRhbHQ9XCJNb21lbnQgSW1hZ2VcIiBcblx0XHRcdFx0XHRzcmM9e1xuXHRcdFx0XHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkICsgXG5cdFx0XHRcdFx0XHRcIi9tb21lbnQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLmltYWdlX25hbWVcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHQvPlxuICAgICAgICA8aDU+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfZGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9kYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkgOlxuXHRcdFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHR7IGRlbGV0ZUJ1dHRvbiB9XG5cdFx0XHRcdHsgY29uZmlybUJ1dHRvbiB9XG5cdFx0XHQ8L21haW4+LFxuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFzaWRlLXRhbGtcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtcIi9wZXQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJQZXRcIiBcblx0XHRcdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkICsgXCIvMC5wbmdcIiB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PGg0PnsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfbWVzc2FnZSB9PC9oND5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFzaWRlLXNvY2lhbFwiPlxuXHRcdFx0XHRcdHsgbGlrZUJ1dHRvbiB9XG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdGlkPVwiZmItc2hhcmUtYnV0dG9uXCIgXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5zaGFyZVBhZ2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0YWx0PVwic2hhcmVcIiBcblx0XHRcdFx0XHRcdHNyYz1cIi4uL3B1YmxpYy9pbWcvZmFjZWJvb2stc2hhcmUucG5nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdHsgY29tbWVudEFyZWEgfVxuXHRcdFx0PC9hc2lkZT5cblx0XHRdKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIG1vbWVudDogc3RhdGUubW9tZW50IH0pLFxuICB7IGxvYWRNb21lbnREYXRhLCBmZXRjaEFjY291bnREYXRhLCBzaG93TW9tZW50RGVsZXRlIH1cbikoTW9tZW50KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL01vbWVudC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbiNtYWluIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbiNtYWluIGg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jbWFpbiBpbnB1dHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuXFxuI2FzaWRlLXRhbGt7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuI2FzaWRlLXRhbGsgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG4jYXNpZGUtdGFsayBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzclO1xcbiAgICBwYWRkaW5nOiAzcHggMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuI2FzaWRlLXNvY2lhbHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxufVxcbiNmYi1zaGFyZS1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhc2lkZS1sZWF2ZXtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FiYWViMjtcXG4gICAgcGFkZGluZzogNXB4IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FzaWRlIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvbW9tZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbWVudC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tb21lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaWtlZDogdGhpcy5wcm9wcy5saWtlZCB8fCBcImZhbHNlXCIsXG5cdFx0XHRob3ZlcjogXCJmYWxzZVwiLFxuXHRcdFx0aW50ZXJhY3Q6IHRoaXMucHJvcHMuaW50ZXJhY3QgfHwgXCJ0cnVlXCJcblx0XHR9O1xuXHR9XG5cdGNsaWNrTGlrZSgpIHtcblx0XHRsZXQgdG90YWwgPSBwYXJzZUludCh0aGlzLnN0YXRlLmFncmVlKTtcblx0XHRpZiAodGhpcy5zdGF0ZS5saWtlZCA9PT0gXCJ0cnVlXCIpIHtcblx0XHRcdHRoaXMucHJvcHMubmV3VG90YWwoLTEpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxpa2VkOiBcImZhbHNlXCIgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMubmV3VG90YWwoMSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbGlrZWQ6IFwidHJ1ZVwiIH0pO1xuXHRcdH0gXG5cdH1cblx0ZW50ZXJIZWFydCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaG92ZXI6IFwidHJ1ZVwiIH0pO1xuXHR9XG5cdGxlYXZlSGVhcnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBcImZsYXNlXCIgfSk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG5cdFx0fTtcblx0XHRsZXQgbGlnaHRIZWFydCA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZjJhYTk4XCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjFweCA0cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRlXCJcblx0XHR9O1xuXHRcdGxldCBwYXNzaXZlSGVhcnQgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyYWE5OFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIxcHggNHB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRlXCJcblx0XHR9O1xuXHRcdGxldCBkYXJrSGVhcnQgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2U1MTAxMFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIxcHggNHB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgbnVtU3R5bGUgPSB7XG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTZweFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCI1cHhcIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG5cdFx0fTtcblx0XHRsZXQgaGVhcnQ7XG5cdFx0aWYgKHRoaXMuc3RhdGUuaW50ZXJhY3QgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuc3RhdGUubGlrZWQgPT09IFwidHJ1ZVwiIHx8IFxuXHRcdFx0XHQodGhpcy5zdGF0ZS5saWtlZCA9PT0gXCJmYWxzZVwiICYmIHRoaXMuc3RhdGUuaG92ZXIgPT09IFwidHJ1ZVwiKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGhlYXJ0ID0gKFxuXHRcdFx0XHRcdDxzcGFuIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBkYXJrSGVhcnQgfSBcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmNsaWNrTGlrZS5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eyB0aGlzLmxlYXZlSGVhcnQuYmluZCh0aGlzKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx04p2kXG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVhcnQgPSAoXG5cdFx0XHRcdFx0PHNwYW4gXG5cdFx0XHRcdFx0XHRzdHlsZT17IGxpZ2h0SGVhcnQgfSBcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmNsaWNrTGlrZS5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLmVudGVySGVhcnQuYmluZCh0aGlzKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx04p2kXG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSAgIFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFydCA9IChcblx0XHRcdFx0PHNwYW4gc3R5bGU9eyBwYXNzaXZlSGVhcnQgfT7inaQ8L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9eyBjb250YWluZXJTdHlsZSB9PlxuXHRcdFx0XHR7IGhlYXJ0IH1cblx0XHRcdFx0PHNwYW4gc3R5bGU9eyBudW1TdHlsZSB9PnsgdGhpcy5wcm9wcy5hZ3JlZX0gPC9zcGFuPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdGJvcmRlcjogdGhpcy5wcm9wcy5ib3JkZXIgfHwgXCIycHggc29saWQgI2Y3ZDdiNFwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjUwcHhcIixcblx0XHRcdGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplIHx8IFwiMTRweFwiLFxuXHRcdFx0Y29udGVudDogdGhpcy5wcm9wcy5jb250ZW50IHx8IFwiXCIsXG5cdFx0XHRjb3VudDogcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpIC0gdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCxcblx0XHRcdGxlbmd0aDogcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGVkaXRJbnB1dChldmVudCkge1xuXHRcdGxldCBjaGFuZ2VkSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUuc3Vic3RyKDAsIHRoaXMuc3RhdGUubGVuZ3RoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29udGVudDogY2hhbmdlZElucHV0IH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjb3VudDogdGhpcy5zdGF0ZS5sZW5ndGggLSBjaGFuZ2VkSW5wdXQubGVuZ3RoIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgc3BhblN0eWxlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIlxuXHRcdH07XG5cdFx0bGV0IGlucHV0U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCI5OCVcIixcblx0XHRcdHBhZGRpbmdUb3A6IFwiNXB4XCIsXG5cdFx0XHRwYWRkaW5nQm90dG9tOiBcIjVweFwiLFxuXHRcdFx0Ym9yZGVyOiB0aGlzLnN0YXRlLmJvcmRlcixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogdGhpcy5zdGF0ZS5mb250U2l6ZSxcblx0XHRcdHBhZGRpbmdMZWZ0OiBcIjElXCIsXG5cdFx0XHRvdXRsaW5lOiBcIm5vbmVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdHJlc2l6ZTogXCJub25lXCJcblx0XHR9O1xuXHRcdGxldCBjb3VudFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0d2lkdGg6IFwiOTklXCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjElXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiNXB4XCJcblx0XHR9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cblx0XHRcdFx0PHRleHRhcmVhIHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5lZGl0SW5wdXQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PHNwYW4gc3R5bGU9e2NvdW50U3R5bGV9Pnt0aGlzLnN0YXRlLmNvdW50fSAvIHt0aGlzLnN0YXRlLmxlbmd0aH08L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSW5wdXRhcmVhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==