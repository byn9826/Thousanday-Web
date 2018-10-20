webpackJsonp([3],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(12);

var _moment = __webpack_require__(56);

var _config = __webpack_require__(2);

var _Like = __webpack_require__(371);

var _Like2 = _interopRequireDefault(_Like);

var _Inputarea = __webpack_require__(370);

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Commentlist = __webpack_require__(367);

var _Commentlist2 = _interopRequireDefault(_Commentlist);

__webpack_require__(414);

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
					src: _config.domainUrl + "/public/pet/" + this.props.moment.momentData.pet_id + "/moment/" + this.props.moment.momentData.image_name
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
							src: _config.domainUrl + "/public/pet/" + this.props.moment.momentData.pet_id + "/0.png"
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

/***/ 367:
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

/***/ 370:
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

/***/ 371:
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

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/*moment page*/\n#main{\n    display: inline-block;\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: middle;\n    text-align: center;\n    margin-bottom: 200px;\n}\n#main img{\n    border-radius: 5px;\n    margin: 0 auto;\n    max-width: 320px;\n    display: block;\n}\n#main h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main h6{\n    display: inline-block;\n    color: red;\n    cursor: pointer;\n    margin-left: 3%;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main input{\n    display: inline-block;\n    margin-top: 10px;\n    vertical-align: middle;\n    border: 1px solid #ef8513;\n    outline: none;\n    background-color: #ef8513;\n    color: white;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-left: 3%;\n}\n\n#aside{\n    display: inline-block;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: middle;\n    width: 35%;\n    margin-bottom: 200px;\n}\n\n#aside-talk{\n    display: block;\n    padding: 5px 0;\n}\n#aside-talk img{\n    display: inline-block;\n    width: 15%;\n    vertical-align: top;\n    border-radius: 3px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#aside-talk h4{\n    display: inline-block;\n    vertical-align: top;\n    background-color: black;\n    color: white;\n    width: 77%;\n    padding: 3px 2%;\n    border-radius: 5px;\n    min-height: 50px;\n}\n\n#aside-social{\n    margin-top: 10px;\n    display: block;\n    padding-left: 3%;\n}\n#fb-share-button{\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5%;\n    width: 60px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside-leave{\n    float: right;\n    display: block;\n    margin-right: 5%;\n    border: 1px solid #abaeb2;\n    padding: 5px 2%;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside h7{\n    display: block;\n    color: red;\n    text-align: center;\n    margin-bottom: 10px;\n}\n\n@media only screen and (max-width: 900px) {\n    #main img{\n        max-width: 260px;\n    }\n}\n\n@media only screen and (max-width: 700px) {\n    #main{\n        display: block;\n        width: 80%;\n        padding-top: 100px;\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        padding-top: 60px;\n        margin-top: 0;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(400);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(47)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9tZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vbWVudC5jc3M/OTM4MyJdLCJuYW1lcyI6WyJNb21lbnQiLCJwcm9wcyIsInJlYWRNb21lbnRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwiYWNjb3VudCIsInRva2VuIiwibW9tZW50IiwibW9tZW50RGF0YSIsInBldF9pZCIsImFjdGlvbiIsInVwZGF0ZU1vbWVudExpa2UiLCJjb250ZW50IiwicmVmcyIsIm5ld0NvbW1lbnQiLCJzdGF0ZSIsInRyaW0iLCJzaG93Q29tbWVudEVtcHR5Iiwic2V0U3RhdGUiLCJjcmVhdGVNb21lbnRDb21tZW50IiwicmVhZE1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJyZWRpcmVjdFVzZXIiLCJsaWtlQnV0dG9uIiwiY29tbWVudEFyZWEiLCJkZWxldGVCdXR0b24iLCJsaWtlRGF0YSIsImluZGV4T2YiLCJsZW5ndGgiLCJjaGFuZ2VMaWtlIiwiYmluZCIsImNvbW1lbnRFcnJvciIsInNlbmRDb21tZW50IiwiZmFtaWx5RGF0YSIsInNob3dDb25maXJtIiwiY29uZmlybUJ1dHRvbiIsImNvbmZpcm1EZWxldGUiLCJkb21haW5VcmwiLCJpbWFnZV9uYW1lIiwibW9tZW50X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJtb21lbnRfbWVzc2FnZSIsImNvbW1lbnREYXRhIiwiY29tbWVudExvY2tlciIsImxvYWRDb21tZW50IiwiQ29tcG9uZW50IiwiQ29tbWVudGxpc3QiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyVG9wU3R5bGUiLCJzaW5nbGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNvbnRlbnRTdHlsZSIsImZvbnRTaXplIiwiYWJvdXRTdHlsZSIsInByb2ZpbGVTdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJkYXRlU3R5bGUiLCJsb2FkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJsb2NrZXJTdHlsZSIsImNvbW1lbnRzIiwiZGF0YSIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImxvYWQiLCJsb2NrZXIiLCJsb2FkTW9yZSIsIklucHV0YXJlYSIsImJvcmRlciIsImhlaWdodCIsImNvdW50IiwicGFyc2VJbnQiLCJtYXgiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJyZXNpemUiLCJjb3VudFN0eWxlIiwiZWRpdElucHV0IiwiTGlrZSIsImxpa2VkIiwiaG92ZXIiLCJpbnRlcmFjdCIsInRvdGFsIiwiYWdyZWUiLCJuZXdUb3RhbCIsImxpZ2h0SGVhcnQiLCJwYXNzaXZlSGVhcnQiLCJkYXJrSGVhcnQiLCJudW1TdHlsZSIsImhlYXJ0IiwiY2xpY2tMaWtlIiwibGVhdmVIZWFydCIsImVudGVySGVhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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QixxQkFBcUIsNEJBQTRCLHdCQUF3QiwyQkFBMkIsT0FBTyxHQUFHOztBQUV4M0U7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxHQUF1RDs7QUFFN0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLEVBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVU7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0cmVhZE1vbWVudFBhZ2UsIHNob3dNb21lbnREZWxldGUsIGRlbGV0ZU1vbWVudFBhZ2UsIHVwZGF0ZU1vbWVudExpa2UsIHJlYWRNb21lbnRDb21tZW50cyxcblx0c2hvd0NvbW1lbnRFbXB0eSwgY3JlYXRlTW9tZW50Q29tbWVudFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL21vbWVudCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgTGlrZSBmcm9tICcuLi9jb21wb25lbnRzL0xpa2UnO1xuaW1wb3J0IElucHV0YXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0YXJlYSc7XG5pbXBvcnQgQ29tbWVudGxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50bGlzdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tb21lbnQuY3NzJztcblxuY2xhc3MgTW9tZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkTW9tZW50UGFnZSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG5cdH1cblx0c2hvd0NvbmZpcm0oKSB7XG5cdFx0dGhpcy5wcm9wcy5zaG93TW9tZW50RGVsZXRlKCk7XG5cdH1cblx0Y29uZmlybURlbGV0ZSgpIHtcblx0XHR0aGlzLnByb3BzLmRlbGV0ZU1vbWVudFBhZ2UoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkXG5cdFx0KTtcblx0fVxuLy8gXHRzaGFyZVBhZ2UoKSB7XG4vLyBcdFx0RkIudWkoe1xuLy8gXHRcdFx0ZGlzcGxheTogJ3BvcHVwJyxcbi8vIFx0XHRcdG1ldGhvZDogJ3NoYXJlX29wZW5fZ3JhcGgnLFxuLy8gXHRcdFx0YWN0aW9uX3R5cGU6ICdvZy5zaGFyZXMnLFxuLy8gXHRcdFx0YWN0aW9uX3Byb3BlcnRpZXM6IEpTT04uc3RyaW5naWZ5KHtcbi8vIFx0XHRcdFx0b2JqZWN0IDoge1xuLy8gXHRcdFx0XHRcdFwib2c6dXJsXCI6IGxvY2F0aW9uLmhyZWYsXG4vLyBcdFx0XHRcdFx0XCJvZzp0aXRsZVwiOiAnXCInICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfbWVzc2FnZSArICdcIicsXG4vLyBcdFx0XHRcdFx0XCJvZzpkZXNjcmlwdGlvblwiOiBcIlNtaWxpbmdzLm1lIC0gSG9tZXBhZ2UgZm9yIHlvdXIgcGV0c1wiLFxuLy8gXHRcdFx0XHRcdFwib2c6aW1hZ2VcIjogZG9tYWluVXJsICsgJy9pbWcvcGV0LycgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZCArIFxuLy8gXHRcdFx0XHRcdFx0XCIvbW9tZW50L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5pbWFnZV9uYW1lXG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH0pXG4vLyBcdFx0fSk7XG4vLyBcdH1cblx0Y2hhbmdlTGlrZShhY3Rpb24pIHtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZU1vbWVudExpa2UoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdGFjdGlvblxuXHRcdCk7XG5cdH1cblx0c2VuZENvbW1lbnQoKSB7XG5cdFx0Ly9jb21tZW50IGNvbnRlbnQgY2FuJ3QgYmUgZW1wdHlcblx0XHRsZXQgY29udGVudCA9IHRoaXMucmVmcy5uZXdDb21tZW50LnN0YXRlLmNvbnRlbnQudHJpbSgpO1xuXHRcdGlmIChjb250ZW50ID09PSBcIlwiKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNob3dDb21tZW50RW1wdHkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZWZzLm5ld0NvbW1lbnQuc2V0U3RhdGUoe2NvbnRlbnQ6IFwiXCJ9KTtcblx0XHRcdHRoaXMucHJvcHMuY3JlYXRlTW9tZW50Q29tbWVudChcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0XHRjb250ZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRsb2FkQ29tbWVudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRNb21lbnRDb21tZW50cyhcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5tb21lbnQuY29tbWVudExvYWQsXG5cdFx0XHR0aGlzLnByb3BzLm1vbWVudC5jb21tZW50QWRkZWRcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5tb21lbnQucmVkaXJlY3RVc2VyKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXsgJy91c2VyLycgKyB0aGlzLnByb3BzLmFjY291bnQuaWQgfSAvPjtcbiAgICB9XG5cdFx0bGV0IGxpa2VCdXR0b24sIGNvbW1lbnRBcmVhLCBkZWxldGVCdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCAhPT0gbnVsbCkge1xuXHRcdFx0bGlrZUJ1dHRvbiA9IDxMaWtlIFxuXHRcdFx0XHRrZXk9eyBcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgPT09IC0xID8gJ2ZhbHNlJyA6ICd0cnVlJyBcblx0XHRcdFx0fVxuXHRcdFx0XHRsaWtlZD17IFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSA9PT0gLTEgPyAnZmFsc2UnIDogJ3RydWUnIFxuXHRcdFx0XHR9XG5cdFx0XHRcdGludGVyYWN0PVwidHJ1ZVwiIFxuXHRcdFx0XHRhZ3JlZT17IHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmxlbmd0aCB9IFxuXHRcdFx0XHRuZXdUb3RhbD17IHRoaXMuY2hhbmdlTGlrZS5iaW5kKHRoaXMpIH1cblx0XHRcdC8+XG5cdFx0XHRjb21tZW50QXJlYSA9IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8SW5wdXRhcmVhIHJlZj1cIm5ld0NvbW1lbnRcIiBjb250ZW50PVwiXCIgbWF4PVwiMTUwXCIgLz5cblx0XHRcdFx0XHQ8aDY+eyB0aGlzLnByb3BzLm1vbWVudC5jb21tZW50RXJyb3IgfTwvaDY+XG5cdFx0XHRcdFx0PGg2IGlkPVwiYXNpZGUtbGVhdmVcIiBvbkNsaWNrPXsgdGhpcy5zZW5kQ29tbWVudC5iaW5kKHRoaXMpIH0+Q29tbWVudDwvaDY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm1vbWVudC5mYW1pbHlEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSAhPT0gLTEpIHtcblx0XHRcdFx0ZGVsZXRlQnV0dG9uID0gPGg2IG9uQ2xpY2s9eyB0aGlzLnNob3dDb25maXJtLmJpbmQodGhpcykgfT5EZWxldGU8L2g2Pjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlrZUJ1dHRvbiA9IDxMaWtlIFxuXHRcdFx0XHRpbnRlcmFjdD1cImZhbHNlXCIgXG5cdFx0XHRcdGFncmVlPXsgdGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEubGVuZ3RoIH0gXG5cdFx0XHRcdGxpa2VkPVwiZmFsc2VcIlxuXHRcdFx0Lz5cblx0XHR9XG5cdFx0bGV0IGNvbmZpcm1CdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMubW9tZW50LnNob3dDb25maXJtKSB7XG5cdFx0XHRjb25maXJtQnV0dG9uID0gKFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29uZmlybSA/XCIgb25DbGljaz17IHRoaXMuY29uZmlybURlbGV0ZS5iaW5kKHRoaXMpIH0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiAoW1xuXHRcdFx0PG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdGFsdD1cIk1vbWVudCBJbWFnZVwiIFxuXHRcdFx0XHRcdHNyYz17XG5cdFx0XHRcdFx0XHRkb21haW5VcmwgKyBcIi9wdWJsaWMvcGV0L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWQgKyBcblx0XHRcdFx0XHRcdFwiL21vbWVudC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEuaW1hZ2VfbmFtZVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdC8+XG4gICAgICAgIDxoNT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9kYXRlID8gXG5cdFx0XHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEubW9tZW50X2RhdGUpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSA6XG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvaDU+XG5cdFx0XHRcdHsgZGVsZXRlQnV0dG9uIH1cblx0XHRcdFx0eyBjb25maXJtQnV0dG9uIH1cblx0XHRcdDwvbWFpbj4sXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYXNpZGUtdGFsa1wiPlxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlBldFwiIFxuXHRcdFx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9wdWJsaWMvcGV0L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8aDQ+eyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9tZXNzYWdlIH08L2g0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYXNpZGUtc29jaWFsXCI+XG5cdFx0XHRcdFx0eyBsaWtlQnV0dG9uIH1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8Q29tbWVudGxpc3QgXG5cdFx0XHRcdFx0ZGF0YT17IHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnREYXRhIH0gXG5cdFx0XHRcdFx0bG9ja2VyPXsgdGhpcy5wcm9wcy5tb21lbnQuY29tbWVudExvY2tlciB9IFxuXHRcdFx0XHRcdGxvYWRNb3JlPXsgdGhpcy5sb2FkQ29tbWVudC5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBjb21tZW50QXJlYSB9XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdF0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCwgbW9tZW50OiBzdGF0ZS5tb21lbnQgfSksXG4gIHsgXG5cdFx0cmVhZE1vbWVudFBhZ2UsIHNob3dNb21lbnREZWxldGUsIGRlbGV0ZU1vbWVudFBhZ2UsIHVwZGF0ZU1vbWVudExpa2UsIHJlYWRNb21lbnRDb21tZW50cyxcblx0XHRzaG93Q29tbWVudEVtcHR5LCBjcmVhdGVNb21lbnRDb21tZW50XG5cdH1cbikoTW9tZW50KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL01vbWVudC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29tbWVudGxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiMjBweFwiLFxuXHRcdFx0cGFkZGluZzogXCIyMHB4IDBcIixcblx0XHRcdGJvcmRlclRvcFN0eWxlOiBcInJpZGdlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxuXHRcdH07XG5cdFx0bGV0IHNpbmdsZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmY1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjE1cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMiVcIixcblx0XHRcdG1hcmdpblJpZ2h0OiBcIjIlXCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdHBhZGRpbmc6IFwiNnB4IDIlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCJcblx0XHR9O1xuXHRcdGxldCBhYm91dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmN2Q3YjRcIlxuXHRcdH07XG5cdFx0bGV0IHByb2ZpbGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IFwiOCVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdG1hcmdpbjogXCIzcHggMiVcIlxuXHRcdH07XG5cdFx0bGV0IGRhdGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCJcblx0XHR9O1xuXHRcdGxldCBsb2FkU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCI5cHhcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRvdXRsaW5lOiBcIm5vbmVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGxvY2tlclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcCgoY29tbWVudCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17XCJ0aG91c2FuZGF5LW1vbWVudC1jb21tZW50XCIgKyBpbmRleH0gc3R5bGU9e3NpbmdsZVN0eWxlfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cblx0XHRcdFx0XHR7Y29tbWVudFswXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2Fib3V0U3R5bGV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9e2NvbW1lbnRbMl19PlxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17cHJvZmlsZVN0eWxlfSBhbHQ9XCJVc2VyIFByb2ZpbGVcIiBzcmM9e2NvbW1lbnRbMV19IC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2RhdGVTdHlsZX0+e2NvbW1lbnRbM119PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9hZDtcblx0XHRpZiAoIXRoaXMucHJvcHMubG9ja2VyKSB7XG5cdFx0XHRsb2FkID0gKFxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17bG9hZFN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLmxvYWRNb3JlLmJpbmQobnVsbCl9PkxvYWQgTW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvYWQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtsb2NrZXJTdHlsZX0+Tm8gbW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG5cdFx0XHRcdHtjb21tZW50c31cblx0XHRcdFx0e2xvYWR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50bGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db21tZW50bGlzdC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRib3JkZXI6IHRoaXMucHJvcHMuYm9yZGVyIHx8IFwiMnB4IHNvbGlkICNmN2Q3YjRcIixcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCI1MHB4XCIsXG5cdFx0XHRmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSB8fCBcIjE0cHhcIixcblx0XHRcdGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudCB8fCBcIlwiLFxuXHRcdFx0Y291bnQ6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSAtIHRoaXMucHJvcHMuY29udGVudC5sZW5ndGgsXG5cdFx0XHRsZW5ndGg6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRlZGl0SW5wdXQoZXZlbnQpIHtcblx0XHRsZXQgY2hhbmdlZElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cigwLCB0aGlzLnN0YXRlLmxlbmd0aCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQ6IGNoYW5nZWRJbnB1dCB9KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUubGVuZ3RoIC0gY2hhbmdlZElucHV0Lmxlbmd0aCB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNwYW5TdHlsZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCJcblx0XHR9O1xuXHRcdGxldCBpbnB1dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTglXCIsXG5cdFx0XHRwYWRkaW5nVG9wOiBcIjVweFwiLFxuXHRcdFx0cGFkZGluZ0JvdHRvbTogXCI1cHhcIixcblx0XHRcdGJvcmRlcjogdGhpcy5zdGF0ZS5ib3JkZXIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIxJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRyZXNpemU6IFwibm9uZVwiXG5cdFx0fTtcblx0XHRsZXQgY291bnRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdHdpZHRoOiBcIjk5JVwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxJVwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjVweFwiXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XG5cdFx0XHRcdDx0ZXh0YXJlYSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMuZWRpdElucHV0LmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5zdGF0ZS5jb3VudH0gLyB7dGhpcy5zdGF0ZS5sZW5ndGh9PC9zcGFuPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGlrZWQ6IHRoaXMucHJvcHMubGlrZWQgfHwgXCJmYWxzZVwiLFxuXHRcdFx0aG92ZXI6IFwiZmFsc2VcIixcblx0XHRcdGludGVyYWN0OiB0aGlzLnByb3BzLmludGVyYWN0IHx8IFwidHJ1ZVwiXG5cdFx0fTtcblx0fVxuXHRjbGlja0xpa2UoKSB7XG5cdFx0bGV0IHRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5hZ3JlZSk7XG5cdFx0aWYgKHRoaXMuc3RhdGUubGlrZWQgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKC0xKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogXCJmYWxzZVwiIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKDEpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxpa2VkOiBcInRydWVcIiB9KTtcblx0XHR9IFxuXHR9XG5cdGVudGVySGVhcnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBcInRydWVcIiB9KTtcblx0fVxuXHRsZWF2ZUhlYXJ0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogXCJmbGFzZVwiIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGxpZ2h0SGVhcnQgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyYWE5OFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIxcHggNHB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgcGFzc2l2ZUhlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmMmFhOThcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgZGFya0hlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNlNTEwMTBcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGVcIlxuXHRcdH07XG5cdFx0bGV0IG51bVN0eWxlID0ge1xuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGZvbnRTaXplOiBcIjE2cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiNXB4XCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGhlYXJ0O1xuXHRcdGlmICh0aGlzLnN0YXRlLmludGVyYWN0ID09PSBcInRydWVcIikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnN0YXRlLmxpa2VkID09PSBcInRydWVcIiB8fCBcblx0XHRcdFx0KHRoaXMuc3RhdGUubGlrZWQgPT09IFwiZmFsc2VcIiAmJiB0aGlzLnN0YXRlLmhvdmVyID09PSBcInRydWVcIilcblx0XHRcdCkge1xuXHRcdFx0XHRoZWFydCA9IChcblx0XHRcdFx0XHQ8c3BhbiBcblx0XHRcdFx0XHRcdHN0eWxlPXsgZGFya0hlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgdGhpcy5sZWF2ZUhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYXJ0ID0gKFxuXHRcdFx0XHRcdDxzcGFuIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBsaWdodEhlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5lbnRlckhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gICBcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhcnQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgcGFzc2l2ZUhlYXJ0IH0+4p2kPC9zcGFuPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cblx0XHRcdFx0eyBoZWFydCB9XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgbnVtU3R5bGUgfT57IHRoaXMucHJvcHMuYWdyZWV9IDwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGlrZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyptb21lbnQgcGFnZSovXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbiNtYWluIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbiNtYWluIGg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jbWFpbiBpbnB1dHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuXFxuI2FzaWRlLXRhbGt7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuI2FzaWRlLXRhbGsgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG4jYXNpZGUtdGFsayBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzclO1xcbiAgICBwYWRkaW5nOiAzcHggMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuI2FzaWRlLXNvY2lhbHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxufVxcbiNmYi1zaGFyZS1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhc2lkZS1sZWF2ZXtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FiYWViMjtcXG4gICAgcGFkZGluZzogNXB4IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FzaWRlIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNtYWluIGltZ3tcXG4gICAgICAgIG1heC13aWR0aDogMjYwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL21vbWVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb21lbnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbWVudC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbWVudC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbW9tZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=