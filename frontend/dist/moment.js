webpackJsonp([3],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(15);

var _moment = __webpack_require__(69);

var _config = __webpack_require__(2);

var _Like = __webpack_require__(369);

var _Like2 = _interopRequireDefault(_Like);

var _Inputarea = __webpack_require__(368);

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Commentlist = __webpack_require__(365);

var _Commentlist2 = _interopRequireDefault(_Commentlist);

__webpack_require__(411);

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
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.readMomentPage(this.props.match.params.id);
		}
	}, {
		key: 'showConfirm',
		value: function showConfirm() {
			this.props.showMomentDelete();
		}
	}, {
		key: 'confirmDelete',
		value: function confirmDelete() {
			this.props.deleteMomentPage(this.props.account.id, this.props.account.token, this.props.match.params.id, this.props.moment.momentData.pet_id);
		}
		// 	sharePage() {
		// 		FB.ui({
		// 			display: 'popup',
		// 			method: 'share_open_graph',
		// 			action_type: 'og.shares',
		// 			action_properties: JSON.stringify({
		// 				object : {
		// 					"og:url": location.href,
		// 					"og:title": '"' + this.props.moment.momentData.moment_message + '"',
		// 					"og:description": "Smilings.me - Homepage for your pets",
		// 					"og:image": domainUrl + '/img/pet/' + this.props.moment.momentData.pet_id + 
		// 						"/moment/" + this.props.moment.momentData.image_name
		// 				}
		// 			})
		// 		});
		// 	}

	}, {
		key: 'changeLike',
		value: function changeLike(action) {
			this.props.updateMomentLike(this.props.account.id, this.props.account.token, this.props.match.params.id, action);
		}
	}, {
		key: 'sendComment',
		value: function sendComment() {
			//comment content can't be empty
			var content = this.refs.newComment.state.content.trim();
			if (content === "") {
				this.props.showCommentEmpty();
			} else {
				this.refs.newComment.setState({ content: "" });
				this.props.createMomentComment(this.props.account.id, this.props.account.token, this.props.match.params.id, content);
			}
		}
	}, {
		key: 'loadComment',
		value: function loadComment() {
			this.props.readMomentComments(this.props.match.params.id, this.props.moment.commentLoad, this.props.moment.commentAdded);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.moment.redirectUser) {
				return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.props.account.id });
			}
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
					likeButton
				),
				_react2.default.createElement(_Commentlist2.default, {
					data: this.props.moment.commentData,
					locker: this.props.moment.commentLocker,
					loadMore: this.loadComment.bind(this),
					fontFamily: '\'Rubik\', sans-serif'
				}),
				commentArea
			)];
		}
	}]);

	return Moment;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { account: state.account, moment: state.moment };
}, {
	readMomentPage: _moment.readMomentPage, showMomentDelete: _moment.showMomentDelete, deleteMomentPage: _moment.deleteMomentPage, updateMomentLike: _moment.updateMomentLike, readMomentComments: _moment.readMomentComments,
	showCommentEmpty: _moment.showCommentEmpty, createMomentComment: _moment.createMomentComment
})(Moment);

/***/ }),

/***/ 365:
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

var Commentlist = function (_Component) {
	_inherits(Commentlist, _Component);

	function Commentlist(props) {
		_classCallCheck(this, Commentlist);

		var _this = _possibleConstructorReturn(this, (Commentlist.__proto__ || Object.getPrototypeOf(Commentlist)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			fontFamily: _this.props.fontFamily || "Times New Roman"
		};
		return _this;
	}

	_createClass(Commentlist, [{
		key: "render",
		value: function render() {
			var containerStyle = {
				display: "inline-block",
				marginTop: "20px",
				padding: "20px 0",
				borderTopStyle: "ridge",
				width: this.state.width
			};
			var singleStyle = {
				display: "block",
				width: "96%",
				backgroundColor: "#f7f9fc",
				borderRadius: "3px",
				marginBottom: "15px",
				marginLeft: "2%",
				marginRight: "2%"
			};
			var contentStyle = {
				display: "block",
				width: "96%",
				padding: "6px 2%",
				fontFamily: this.state.fontFamily,
				fontSize: "14px"
			};
			var aboutStyle = {
				display: "block",
				width: "100%",
				borderRadius: "3px",
				backgroundColor: "#f7d7b4"
			};
			var profileStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: "8%",
				borderRadius: "50%",
				margin: "3px 2%"
			};
			var dateStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				fontFamily: this.state.fontFamily,
				fontSize: "9px"
			};
			var loadStyle = {
				display: "block",
				textAlign: "center",
				fontFamily: this.state.fontFamily,
				fontSize: "9px",
				padding: "4px 2%",
				outline: "none",
				backgroundColor: "white",
				cursor: "pointer",
				color: "#052456"
			};
			var lockerStyle = {
				display: "block",
				textAlign: "center",
				fontFamily: this.state.fontFamily,
				fontSize: "9px",
				padding: "4px 2%",
				outline: "none",
				backgroundColor: "white",
				color: "#052456"
			};
			var comments = this.props.data.map(function (comment, index) {
				return _react2.default.createElement(
					"div",
					{ key: "thousanday-moment-comment" + index, style: singleStyle },
					_react2.default.createElement(
						"div",
						{ style: contentStyle },
						comment[0]
					),
					_react2.default.createElement(
						"div",
						{ style: aboutStyle },
						_react2.default.createElement(
							"a",
							{ href: comment[2] },
							_react2.default.createElement("img", { style: profileStyle, alt: "User Profile", src: comment[1] })
						),
						_react2.default.createElement(
							"div",
							{ style: dateStyle },
							comment[3]
						)
					)
				);
			});
			var load = void 0;
			if (!this.props.locker) {
				load = _react2.default.createElement(
					"span",
					{ style: loadStyle, onClick: this.props.loadMore.bind(null) },
					"Load More ..."
				);
			} else {
				load = _react2.default.createElement(
					"span",
					{ style: lockerStyle },
					"No more ..."
				);
			}
			return _react2.default.createElement(
				"div",
				{ style: containerStyle },
				comments,
				load
			);
		}
	}]);

	return Commentlist;
}(_react.Component);

exports.default = Commentlist;

/***/ }),

/***/ 368:
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

/***/ }),

/***/ 369:
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*moment page*/\n#main{\n    display: inline-block;\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: middle;\n    text-align: center;\n    margin-bottom: 200px;\n}\n#main img{\n    border-radius: 5px;\n    margin: 0 auto;\n    max-width: 320px;\n    display: block;\n}\n#main h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main h6{\n    display: inline-block;\n    color: red;\n    cursor: pointer;\n    margin-left: 3%;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main input{\n    display: inline-block;\n    margin-top: 10px;\n    vertical-align: middle;\n    border: 1px solid #ef8513;\n    outline: none;\n    background-color: #ef8513;\n    color: white;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-left: 3%;\n}\n\n#aside{\n    display: inline-block;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: middle;\n    width: 35%;\n    margin-bottom: 200px;\n}\n\n#aside-talk{\n    display: block;\n    padding: 5px 0;\n}\n#aside-talk img{\n    display: inline-block;\n    width: 15%;\n    vertical-align: top;\n    border-radius: 3px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#aside-talk h4{\n    display: inline-block;\n    vertical-align: top;\n    background-color: black;\n    color: white;\n    width: 77%;\n    padding: 3px 2%;\n    border-radius: 5px;\n    min-height: 50px;\n}\n\n#aside-social{\n    margin-top: 10px;\n    display: block;\n    padding-left: 3%;\n}\n#fb-share-button{\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5%;\n    width: 60px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside-leave{\n    float: right;\n    display: block;\n    margin-right: 5%;\n    border: 1px solid #abaeb2;\n    padding: 5px 2%;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside h7{\n    display: block;\n    color: red;\n    text-align: center;\n    margin-bottom: 10px;\n}\n\n@media only screen and (max-width: 900px) {\n    #main img{\n        max-width: 260px;\n    }\n}\n\n@media only screen and (max-width: 700px) {\n    #main{\n        display: block;\n        width: 80%;\n        padding-top: 100px;\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        padding-top: 60px;\n        margin-top: 0;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(397);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9tZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vbWVudC5jc3M/OTM4MyJdLCJuYW1lcyI6WyJNb21lbnQiLCJwcm9wcyIsInJlYWRNb21lbnRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwiYWNjb3VudCIsInRva2VuIiwibW9tZW50IiwibW9tZW50RGF0YSIsInBldF9pZCIsImFjdGlvbiIsInVwZGF0ZU1vbWVudExpa2UiLCJjb250ZW50IiwicmVmcyIsIm5ld0NvbW1lbnQiLCJzdGF0ZSIsInRyaW0iLCJzaG93Q29tbWVudEVtcHR5Iiwic2V0U3RhdGUiLCJjcmVhdGVNb21lbnRDb21tZW50IiwicmVhZE1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJyZWRpcmVjdFVzZXIiLCJsaWtlQnV0dG9uIiwiY29tbWVudEFyZWEiLCJkZWxldGVCdXR0b24iLCJsaWtlRGF0YSIsImluZGV4T2YiLCJsZW5ndGgiLCJjaGFuZ2VMaWtlIiwiYmluZCIsImNvbW1lbnRFcnJvciIsInNlbmRDb21tZW50IiwiZmFtaWx5RGF0YSIsInNob3dDb25maXJtIiwiY29uZmlybUJ1dHRvbiIsImNvbmZpcm1EZWxldGUiLCJpbWFnZV9uYW1lIiwibW9tZW50X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJtb21lbnRfbWVzc2FnZSIsImNvbW1lbnREYXRhIiwiY29tbWVudExvY2tlciIsImxvYWRDb21tZW50IiwiQ29tbWVudGxpc3QiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyVG9wU3R5bGUiLCJzaW5nbGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNvbnRlbnRTdHlsZSIsImZvbnRTaXplIiwiYWJvdXRTdHlsZSIsInByb2ZpbGVTdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJkYXRlU3R5bGUiLCJsb2FkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJsb2NrZXJTdHlsZSIsImNvbW1lbnRzIiwiZGF0YSIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImxvYWQiLCJsb2NrZXIiLCJsb2FkTW9yZSIsIklucHV0YXJlYSIsImJvcmRlciIsImhlaWdodCIsImNvdW50IiwicGFyc2VJbnQiLCJtYXgiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJyZXNpemUiLCJjb3VudFN0eWxlIiwiZWRpdElucHV0IiwiTGlrZSIsImxpa2VkIiwiaG92ZXIiLCJpbnRlcmFjdCIsInRvdGFsIiwiYWdyZWUiLCJuZXdUb3RhbCIsImxpZ2h0SGVhcnQiLCJwYXNzaXZlSGVhcnQiLCJkYXJrSGVhcnQiLCJudW1TdHlsZSIsImhlYXJ0IiwiY2xpY2tMaWtlIiwibGVhdmVIZWFydCIsImVudGVySGVhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7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QUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHJlYWRNb21lbnRQYWdlLCBzaG93TW9tZW50RGVsZXRlLCBkZWxldGVNb21lbnRQYWdlLCB1cGRhdGVNb21lbnRMaWtlLCByZWFkTW9tZW50Q29tbWVudHMsXG5cdHNob3dDb21tZW50RW1wdHksIGNyZWF0ZU1vbWVudENvbW1lbnRcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9tb21lbnQnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi4vY29tcG9uZW50cy9MaWtlJztcbmltcG9ydCBJbnB1dGFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dGFyZWEnO1xuaW1wb3J0IENvbW1lbnRsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWVudGxpc3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbW9tZW50LmNzcyc7XG5cbmNsYXNzIE1vbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZE1vbWVudFBhZ2UodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuXHR9XG5cdHNob3dDb25maXJtKCkge1xuXHRcdHRoaXMucHJvcHMuc2hvd01vbWVudERlbGV0ZSgpO1xuXHR9XG5cdGNvbmZpcm1EZWxldGUoKSB7XG5cdFx0dGhpcy5wcm9wcy5kZWxldGVNb21lbnRQYWdlKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHR0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZFxuXHRcdCk7XG5cdH1cbi8vIFx0c2hhcmVQYWdlKCkge1xuLy8gXHRcdEZCLnVpKHtcbi8vIFx0XHRcdGRpc3BsYXk6ICdwb3B1cCcsXG4vLyBcdFx0XHRtZXRob2Q6ICdzaGFyZV9vcGVuX2dyYXBoJyxcbi8vIFx0XHRcdGFjdGlvbl90eXBlOiAnb2cuc2hhcmVzJyxcbi8vIFx0XHRcdGFjdGlvbl9wcm9wZXJ0aWVzOiBKU09OLnN0cmluZ2lmeSh7XG4vLyBcdFx0XHRcdG9iamVjdCA6IHtcbi8vIFx0XHRcdFx0XHRcIm9nOnVybFwiOiBsb2NhdGlvbi5ocmVmLFxuLy8gXHRcdFx0XHRcdFwib2c6dGl0bGVcIjogJ1wiJyArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEubW9tZW50X21lc3NhZ2UgKyAnXCInLFxuLy8gXHRcdFx0XHRcdFwib2c6ZGVzY3JpcHRpb25cIjogXCJTbWlsaW5ncy5tZSAtIEhvbWVwYWdlIGZvciB5b3VyIHBldHNcIixcbi8vIFx0XHRcdFx0XHRcIm9nOmltYWdlXCI6IGRvbWFpblVybCArICcvaW1nL3BldC8nICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWQgKyBcbi8vIFx0XHRcdFx0XHRcdFwiL21vbWVudC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEuaW1hZ2VfbmFtZVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9KVxuLy8gXHRcdH0pO1xuLy8gXHR9XG5cdGNoYW5nZUxpa2UoYWN0aW9uKSB7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVNb21lbnRMaWtlKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHRhY3Rpb25cblx0XHQpO1xuXHR9XG5cdHNlbmRDb21tZW50KCkge1xuXHRcdC8vY29tbWVudCBjb250ZW50IGNhbid0IGJlIGVtcHR5XG5cdFx0bGV0IGNvbnRlbnQgPSB0aGlzLnJlZnMubmV3Q29tbWVudC5zdGF0ZS5jb250ZW50LnRyaW0oKTtcblx0XHRpZiAoY29udGVudCA9PT0gXCJcIikge1xuXHRcdFx0dGhpcy5wcm9wcy5zaG93Q29tbWVudEVtcHR5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVmcy5uZXdDb21tZW50LnNldFN0YXRlKHtjb250ZW50OiBcIlwifSk7XG5cdFx0XHR0aGlzLnByb3BzLmNyZWF0ZU1vbWVudENvbW1lbnQoXG5cdFx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdFx0Y29udGVudFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0bG9hZENvbW1lbnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkTW9tZW50Q29tbWVudHMoXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnRMb2FkLFxuXHRcdFx0dGhpcy5wcm9wcy5tb21lbnQuY29tbWVudEFkZGVkXG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubW9tZW50LnJlZGlyZWN0VXNlcikge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17ICcvdXNlci8nICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkIH0gLz47XG4gICAgfVxuXHRcdGxldCBsaWtlQnV0dG9uLCBjb21tZW50QXJlYSwgZGVsZXRlQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwpIHtcblx0XHRcdGxpa2VCdXR0b24gPSA8TGlrZSBcblx0XHRcdFx0a2V5PXsgXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpID09PSAtMSA/ICdmYWxzZScgOiAndHJ1ZScgXG5cdFx0XHRcdH1cblx0XHRcdFx0bGlrZWQ9eyBcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgPT09IC0xID8gJ2ZhbHNlJyA6ICd0cnVlJyBcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnRlcmFjdD1cInRydWVcIiBcblx0XHRcdFx0YWdyZWU9eyB0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5sZW5ndGggfSBcblx0XHRcdFx0bmV3VG90YWw9eyB0aGlzLmNoYW5nZUxpa2UuYmluZCh0aGlzKSB9XG5cdFx0XHQvPlxuXHRcdFx0Y29tbWVudEFyZWEgPSAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PElucHV0YXJlYSByZWY9XCJuZXdDb21tZW50XCIgY29udGVudD1cIlwiIG1heD1cIjE1MFwiIC8+XG5cdFx0XHRcdFx0PGg2PnsgdGhpcy5wcm9wcy5tb21lbnQuY29tbWVudEVycm9yIH08L2g2PlxuXHRcdFx0XHRcdDxoNiBpZD1cImFzaWRlLWxlYXZlXCIgb25DbGljaz17IHRoaXMuc2VuZENvbW1lbnQuYmluZCh0aGlzKSB9PkNvbW1lbnQ8L2g2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tb21lbnQuZmFtaWx5RGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgIT09IC0xKSB7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbiA9IDxoNiBvbkNsaWNrPXsgdGhpcy5zaG93Q29uZmlybS5iaW5kKHRoaXMpIH0+RGVsZXRlPC9oNj47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxpa2VCdXR0b24gPSA8TGlrZSBcblx0XHRcdFx0aW50ZXJhY3Q9XCJmYWxzZVwiIFxuXHRcdFx0XHRhZ3JlZT17IHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmxlbmd0aCB9IFxuXHRcdFx0XHRsaWtlZD1cImZhbHNlXCJcblx0XHRcdC8+XG5cdFx0fVxuXHRcdGxldCBjb25maXJtQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLm1vbWVudC5zaG93Q29uZmlybSkge1xuXHRcdFx0Y29uZmlybUJ1dHRvbiA9IChcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvbmZpcm0gP1wiIG9uQ2xpY2s9eyB0aGlzLmNvbmZpcm1EZWxldGUuYmluZCh0aGlzKSB9IC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFtcblx0XHRcdDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRhbHQ9XCJNb21lbnQgSW1hZ2VcIiBcblx0XHRcdFx0XHRzcmM9e1xuXHRcdFx0XHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkICsgXG5cdFx0XHRcdFx0XHRcIi9tb21lbnQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLmltYWdlX25hbWVcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHQvPlxuICAgICAgICA8aDU+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfZGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9kYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkgOlxuXHRcdFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHR7IGRlbGV0ZUJ1dHRvbiB9XG5cdFx0XHRcdHsgY29uZmlybUJ1dHRvbiB9XG5cdFx0XHQ8L21haW4+LFxuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFzaWRlLXRhbGtcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtcIi9wZXQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJQZXRcIiBcblx0XHRcdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkICsgXCIvMC5wbmdcIiB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PGg0PnsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfbWVzc2FnZSB9PC9oND5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFzaWRlLXNvY2lhbFwiPlxuXHRcdFx0XHRcdHsgbGlrZUJ1dHRvbiB9XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PENvbW1lbnRsaXN0IFxuXHRcdFx0XHRcdGRhdGE9eyB0aGlzLnByb3BzLm1vbWVudC5jb21tZW50RGF0YSB9IFxuXHRcdFx0XHRcdGxvY2tlcj17IHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnRMb2NrZXIgfSBcblx0XHRcdFx0XHRsb2FkTW9yZT17IHRoaXMubG9hZENvbW1lbnQuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgY29tbWVudEFyZWEgfVxuXHRcdFx0PC9hc2lkZT5cblx0XHRdKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIG1vbWVudDogc3RhdGUubW9tZW50IH0pLFxuICB7IFxuXHRcdHJlYWRNb21lbnRQYWdlLCBzaG93TW9tZW50RGVsZXRlLCBkZWxldGVNb21lbnRQYWdlLCB1cGRhdGVNb21lbnRMaWtlLCByZWFkTW9tZW50Q29tbWVudHMsXG5cdFx0c2hvd0NvbW1lbnRFbXB0eSwgY3JlYXRlTW9tZW50Q29tbWVudFxuXHR9XG4pKE1vbWVudCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9Nb21lbnQuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmNsYXNzIENvbW1lbnRsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjIwcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMjBweCAwXCIsXG5cdFx0XHRib3JkZXJUb3BTdHlsZTogXCJyaWRnZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGhcblx0XHR9O1xuXHRcdGxldCBzaW5nbGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmN2Y5ZmNcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjIlXCIsXG5cdFx0XHRtYXJnaW5SaWdodDogXCIyJVwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjZweCAyJVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiXG5cdFx0fTtcblx0XHRsZXQgYWJvdXRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZjdkN2I0XCJcblx0XHR9O1xuXHRcdGxldCBwcm9maWxlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiBcIjglXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG5cdFx0XHRtYXJnaW46IFwiM3B4IDIlXCJcblx0XHR9O1xuXHRcdGxldCBkYXRlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjlweFwiXG5cdFx0fTtcblx0XHRsZXQgbG9hZFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRjb2xvcjogXCIjMDUyNDU2XCJcblx0XHR9O1xuXHRcdGxldCBsb2NrZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjlweFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRjb2xvcjogXCIjMDUyNDU2XCJcblx0XHR9O1xuXHRcdGxldCBjb21tZW50cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9e1widGhvdXNhbmRheS1tb21lbnQtY29tbWVudFwiICsgaW5kZXh9IHN0eWxlPXtzaW5nbGVTdHlsZX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XG5cdFx0XHRcdFx0e2NvbW1lbnRbMF19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXthYm91dFN0eWxlfT5cblx0XHRcdFx0XHQ8YSBocmVmPXtjb21tZW50WzJdfT5cblx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3Byb2ZpbGVTdHlsZX0gYWx0PVwiVXNlciBQcm9maWxlXCIgc3JjPXtjb21tZW50WzFdfSAvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtkYXRlU3R5bGV9Pntjb21tZW50WzNdfTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0bGV0IGxvYWQ7XG5cdFx0aWYgKCF0aGlzLnByb3BzLmxvY2tlcikge1xuXHRcdFx0bG9hZCA9IChcblx0XHRcdFx0PHNwYW4gc3R5bGU9e2xvYWRTdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5sb2FkTW9yZS5iaW5kKG51bGwpfT5Mb2FkIE1vcmUgLi4uPC9zcGFuPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2FkID0gKFxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17bG9ja2VyU3R5bGV9Pk5vIG1vcmUgLi4uPC9zcGFuPlxuXHRcdFx0KVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuXHRcdFx0XHR7Y29tbWVudHN9XG5cdFx0XHRcdHtsb2FkfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudGxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudGxpc3QuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0Ym9yZGVyOiB0aGlzLnByb3BzLmJvcmRlciB8fCBcIjJweCBzb2xpZCAjZjdkN2I0XCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiNTBweFwiLFxuXHRcdFx0Zm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgfHwgXCIxNHB4XCIsXG5cdFx0XHRjb250ZW50OiB0aGlzLnByb3BzLmNvbnRlbnQgfHwgXCJcIixcblx0XHRcdGNvdW50OiBwYXJzZUludCh0aGlzLnByb3BzLm1heCkgLSB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoLFxuXHRcdFx0bGVuZ3RoOiBwYXJzZUludCh0aGlzLnByb3BzLm1heCksXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0ZWRpdElucHV0KGV2ZW50KSB7XG5cdFx0bGV0IGNoYW5nZWRJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZS5zdWJzdHIoMCwgdGhpcy5zdGF0ZS5sZW5ndGgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBjaGFuZ2VkSW5wdXQgfSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvdW50OiB0aGlzLnN0YXRlLmxlbmd0aCAtIGNoYW5nZWRJbnB1dC5sZW5ndGggfSk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzcGFuU3R5bGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiXG5cdFx0fTtcblx0XHRsZXQgaW5wdXRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjk4JVwiLFxuXHRcdFx0cGFkZGluZ1RvcDogXCI1cHhcIixcblx0XHRcdHBhZGRpbmdCb3R0b206IFwiNXB4XCIsXG5cdFx0XHRib3JkZXI6IHRoaXMuc3RhdGUuYm9yZGVyLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiB0aGlzLnN0YXRlLmZvbnRTaXplLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMSVcIixcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0cmVzaXplOiBcIm5vbmVcIlxuXHRcdH07XG5cdFx0bGV0IGNvdW50U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxMXB4XCIsXG5cdFx0XHR3aWR0aDogXCI5OSVcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMSVcIixcblx0XHRcdG1hcmdpblRvcDogXCI1cHhcIlxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXtzcGFuU3R5bGV9PlxuXHRcdFx0XHQ8dGV4dGFyZWEgc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IG9uQ2hhbmdlPXt0aGlzLmVkaXRJbnB1dC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17Y291bnRTdHlsZX0+e3RoaXMuc3RhdGUuY291bnR9IC8ge3RoaXMuc3RhdGUubGVuZ3RofTwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9JbnB1dGFyZWEuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWtlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxpa2VkOiB0aGlzLnByb3BzLmxpa2VkIHx8IFwiZmFsc2VcIixcblx0XHRcdGhvdmVyOiBcImZhbHNlXCIsXG5cdFx0XHRpbnRlcmFjdDogdGhpcy5wcm9wcy5pbnRlcmFjdCB8fCBcInRydWVcIlxuXHRcdH07XG5cdH1cblx0Y2xpY2tMaWtlKCkge1xuXHRcdGxldCB0b3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuYWdyZWUpO1xuXHRcdGlmICh0aGlzLnN0YXRlLmxpa2VkID09PSBcInRydWVcIikge1xuXHRcdFx0dGhpcy5wcm9wcy5uZXdUb3RhbCgtMSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbGlrZWQ6IFwiZmFsc2VcIiB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5uZXdUb3RhbCgxKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogXCJ0cnVlXCIgfSk7XG5cdFx0fSBcblx0fVxuXHRlbnRlckhlYXJ0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogXCJ0cnVlXCIgfSk7XG5cdH1cblx0bGVhdmVIZWFydCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaG92ZXI6IFwiZmxhc2VcIiB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcblx0XHR9O1xuXHRcdGxldCBsaWdodEhlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmMmFhOThcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGVcIlxuXHRcdH07XG5cdFx0bGV0IHBhc3NpdmVIZWFydCA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZjJhYTk4XCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjFweCA0cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGVcIlxuXHRcdH07XG5cdFx0bGV0IGRhcmtIZWFydCA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZTUxMDEwXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjFweCA0cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRlXCJcblx0XHR9O1xuXHRcdGxldCBudW1TdHlsZSA9IHtcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNnB4XCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjVweFwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcblx0XHR9O1xuXHRcdGxldCBoZWFydDtcblx0XHRpZiAodGhpcy5zdGF0ZS5pbnRlcmFjdCA9PT0gXCJ0cnVlXCIpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5zdGF0ZS5saWtlZCA9PT0gXCJ0cnVlXCIgfHwgXG5cdFx0XHRcdCh0aGlzLnN0YXRlLmxpa2VkID09PSBcImZhbHNlXCIgJiYgdGhpcy5zdGF0ZS5ob3ZlciA9PT0gXCJ0cnVlXCIpXG5cdFx0XHQpIHtcblx0XHRcdFx0aGVhcnQgPSAoXG5cdFx0XHRcdFx0PHNwYW4gXG5cdFx0XHRcdFx0XHRzdHlsZT17IGRhcmtIZWFydCB9IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2xpY2tMaWtlLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17IHRoaXMubGVhdmVIZWFydC5iaW5kKHRoaXMpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHTinaRcblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoZWFydCA9IChcblx0XHRcdFx0XHQ8c3BhbiBcblx0XHRcdFx0XHRcdHN0eWxlPXsgbGlnaHRIZWFydCB9IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2xpY2tMaWtlLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuZW50ZXJIZWFydC5iaW5kKHRoaXMpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHTinaRcblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCk7XG5cdFx0XHR9ICAgXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYXJ0ID0gKFxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17IHBhc3NpdmVIZWFydCB9PuKdpDwvc3Bhbj5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG5cdFx0XHRcdHsgaGVhcnQgfVxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17IG51bVN0eWxlIH0+eyB0aGlzLnByb3BzLmFncmVlfSA8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xpa2UuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qbW9tZW50IHBhZ2UqL1xcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG4jbWFpbiBpbWd7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jbWFpbiBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jbWFpbiBoNntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuI21haW4gaW5wdXR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmODUxMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbn1cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcblxcbiNhc2lkZS10YWxre1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcbiNhc2lkZS10YWxrIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG59XFxuI2FzaWRlLXRhbGsgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDc3JTtcXG4gICAgcGFkZGluZzogM3B4IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbiNhc2lkZS1zb2NpYWx7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcbn1cXG4jZmItc2hhcmUtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYXNpZGUtbGVhdmV7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYmFlYjI7XFxuICAgIHBhZGRpbmc6IDVweCAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhc2lkZSBoN3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjbWFpbiBpbWd7XFxuICAgICAgICBtYXgtd2lkdGg6IDI2MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAjYXNpZGV7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9tb21lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb21lbnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb21lbnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL21vbWVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9