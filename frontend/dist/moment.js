webpackJsonp([1],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(12);

var _moment = __webpack_require__(62);

var _config = __webpack_require__(5);

var _Like = __webpack_require__(157);

var _Like2 = _interopRequireDefault(_Like);

var _Inputarea = __webpack_require__(156);

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Commentlist = __webpack_require__(155);

var _Commentlist2 = _interopRequireDefault(_Commentlist);

__webpack_require__(168);

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

/***/ 155:
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

/***/ 156:
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

/***/ 157:
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    text-align: center;\n    margin-bottom: 200px;\n}\n#main img{\n    border-radius: 5px;\n    margin: 0 auto;\n    max-width: 320px;\n    display: block;\n}\n#main h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main h6{\n    display: inline-block;\n    color: red;\n    cursor: pointer;\n    margin-left: 3%;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main input{\n    display: inline-block;\n    margin-top: 10px;\n    vertical-align: middle;\n    border: 1px solid #ef8513;\n    outline: none;\n    background-color: #ef8513;\n    color: white;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-left: 3%;\n}\n\n#aside{\n    display: inline-block;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: middle;\n    width: 35%;\n    margin-bottom: 100px;\n}\n\n#aside-talk{\n    display: block;\n    padding: 5px 0;\n}\n#aside-talk img{\n    display: inline-block;\n    width: 15%;\n    vertical-align: top;\n    border-radius: 3px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#aside-talk h4{\n    display: inline-block;\n    vertical-align: top;\n    background-color: black;\n    color: white;\n    width: 77%;\n    padding: 3px 2%;\n    border-radius: 5px;\n    min-height: 50px;\n}\n\n#aside-social{\n    margin-top: 10px;\n    display: block;\n    padding-left: 3%;\n}\n#fb-share-button{\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5%;\n    width: 60px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside-leave{\n    float: right;\n    display: block;\n    margin-right: 5%;\n    border: 1px solid #abaeb2;\n    padding: 5px 2%;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside h7{\n    display: block;\n    color: red;\n    text-align: center;\n    margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(162);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9tZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vbWVudC5jc3M/OTM4MyJdLCJuYW1lcyI6WyJNb21lbnQiLCJwcm9wcyIsInJlYWRNb21lbnRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwiYWNjb3VudCIsInRva2VuIiwibW9tZW50IiwibW9tZW50RGF0YSIsInBldF9pZCIsImFjdGlvbiIsInVwZGF0ZU1vbWVudExpa2UiLCJjb250ZW50IiwicmVmcyIsIm5ld0NvbW1lbnQiLCJzdGF0ZSIsInRyaW0iLCJzaG93Q29tbWVudEVtcHR5Iiwic2V0U3RhdGUiLCJjcmVhdGVNb21lbnRDb21tZW50IiwicmVhZE1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJyZWRpcmVjdFVzZXIiLCJsaWtlQnV0dG9uIiwiY29tbWVudEFyZWEiLCJkZWxldGVCdXR0b24iLCJsaWtlRGF0YSIsImluZGV4T2YiLCJsZW5ndGgiLCJjaGFuZ2VMaWtlIiwiYmluZCIsImNvbW1lbnRFcnJvciIsInNlbmRDb21tZW50IiwiZmFtaWx5RGF0YSIsInNob3dDb25maXJtIiwiY29uZmlybUJ1dHRvbiIsImNvbmZpcm1EZWxldGUiLCJpbWFnZV9uYW1lIiwibW9tZW50X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJtb21lbnRfbWVzc2FnZSIsImNvbW1lbnREYXRhIiwiY29tbWVudExvY2tlciIsImxvYWRDb21tZW50IiwiQ29tbWVudGxpc3QiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyVG9wU3R5bGUiLCJzaW5nbGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNvbnRlbnRTdHlsZSIsImZvbnRTaXplIiwiYWJvdXRTdHlsZSIsInByb2ZpbGVTdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJkYXRlU3R5bGUiLCJsb2FkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJsb2NrZXJTdHlsZSIsImNvbW1lbnRzIiwiZGF0YSIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImxvYWQiLCJsb2NrZXIiLCJsb2FkTW9yZSIsIklucHV0YXJlYSIsImJvcmRlciIsImhlaWdodCIsImNvdW50IiwicGFyc2VJbnQiLCJtYXgiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJyZXNpemUiLCJjb3VudFN0eWxlIiwiZWRpdElucHV0IiwiTGlrZSIsImxpa2VkIiwiaG92ZXIiLCJpbnRlcmFjdCIsInRvdGFsIiwiYWdyZWUiLCJuZXdUb3RhbCIsImxpZ2h0SGVhcnQiLCJwYXNzaXZlSGVhcnQiLCJkYXJrSGVhcnQiLCJudW1TdHlsZSIsImhlYXJ0IiwiY2xpY2tMaWtlIiwibGVhdmVIZWFydCIsImVudGVySGVhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7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IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0cmVhZE1vbWVudFBhZ2UsIHNob3dNb21lbnREZWxldGUsIGRlbGV0ZU1vbWVudFBhZ2UsIHVwZGF0ZU1vbWVudExpa2UsIHJlYWRNb21lbnRDb21tZW50cyxcblx0c2hvd0NvbW1lbnRFbXB0eSwgY3JlYXRlTW9tZW50Q29tbWVudFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL21vbWVudCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgTGlrZSBmcm9tICcuLi9jb21wb25lbnRzL0xpa2UnO1xuaW1wb3J0IElucHV0YXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0YXJlYSc7XG5pbXBvcnQgQ29tbWVudGxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50bGlzdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tb21lbnQuY3NzJztcblxuY2xhc3MgTW9tZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkTW9tZW50UGFnZSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG5cdH1cblx0c2hvd0NvbmZpcm0oKSB7XG5cdFx0dGhpcy5wcm9wcy5zaG93TW9tZW50RGVsZXRlKCk7XG5cdH1cblx0Y29uZmlybURlbGV0ZSgpIHtcblx0XHR0aGlzLnByb3BzLmRlbGV0ZU1vbWVudFBhZ2UoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkXG5cdFx0KTtcblx0fVxuLy8gXHRzaGFyZVBhZ2UoKSB7XG4vLyBcdFx0RkIudWkoe1xuLy8gXHRcdFx0ZGlzcGxheTogJ3BvcHVwJyxcbi8vIFx0XHRcdG1ldGhvZDogJ3NoYXJlX29wZW5fZ3JhcGgnLFxuLy8gXHRcdFx0YWN0aW9uX3R5cGU6ICdvZy5zaGFyZXMnLFxuLy8gXHRcdFx0YWN0aW9uX3Byb3BlcnRpZXM6IEpTT04uc3RyaW5naWZ5KHtcbi8vIFx0XHRcdFx0b2JqZWN0IDoge1xuLy8gXHRcdFx0XHRcdFwib2c6dXJsXCI6IGxvY2F0aW9uLmhyZWYsXG4vLyBcdFx0XHRcdFx0XCJvZzp0aXRsZVwiOiAnXCInICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfbWVzc2FnZSArICdcIicsXG4vLyBcdFx0XHRcdFx0XCJvZzpkZXNjcmlwdGlvblwiOiBcIlNtaWxpbmdzLm1lIC0gSG9tZXBhZ2UgZm9yIHlvdXIgcGV0c1wiLFxuLy8gXHRcdFx0XHRcdFwib2c6aW1hZ2VcIjogZG9tYWluVXJsICsgJy9pbWcvcGV0LycgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZCArIFxuLy8gXHRcdFx0XHRcdFx0XCIvbW9tZW50L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5pbWFnZV9uYW1lXG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH0pXG4vLyBcdFx0fSk7XG4vLyBcdH1cblx0Y2hhbmdlTGlrZShhY3Rpb24pIHtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZU1vbWVudExpa2UoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdGFjdGlvblxuXHRcdCk7XG5cdH1cblx0c2VuZENvbW1lbnQoKSB7XG5cdFx0Ly9jb21tZW50IGNvbnRlbnQgY2FuJ3QgYmUgZW1wdHlcblx0XHRsZXQgY29udGVudCA9IHRoaXMucmVmcy5uZXdDb21tZW50LnN0YXRlLmNvbnRlbnQudHJpbSgpO1xuXHRcdGlmIChjb250ZW50ID09PSBcIlwiKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNob3dDb21tZW50RW1wdHkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZWZzLm5ld0NvbW1lbnQuc2V0U3RhdGUoe2NvbnRlbnQ6IFwiXCJ9KTtcblx0XHRcdHRoaXMucHJvcHMuY3JlYXRlTW9tZW50Q29tbWVudChcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0XHRjb250ZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRsb2FkQ29tbWVudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRNb21lbnRDb21tZW50cyhcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5tb21lbnQuY29tbWVudExvYWQsXG5cdFx0XHR0aGlzLnByb3BzLm1vbWVudC5jb21tZW50QWRkZWRcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5tb21lbnQucmVkaXJlY3RVc2VyKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXsgJy91c2VyLycgKyB0aGlzLnByb3BzLmFjY291bnQuaWQgfSAvPjtcbiAgICB9XG5cdFx0bGV0IGxpa2VCdXR0b24sIGNvbW1lbnRBcmVhLCBkZWxldGVCdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCAhPT0gbnVsbCkge1xuXHRcdFx0bGlrZUJ1dHRvbiA9IDxMaWtlIFxuXHRcdFx0XHRrZXk9eyBcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgPT09IC0xID8gJ2ZhbHNlJyA6ICd0cnVlJyBcblx0XHRcdFx0fVxuXHRcdFx0XHRsaWtlZD17IFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSA9PT0gLTEgPyAnZmFsc2UnIDogJ3RydWUnIFxuXHRcdFx0XHR9XG5cdFx0XHRcdGludGVyYWN0PVwidHJ1ZVwiIFxuXHRcdFx0XHRhZ3JlZT17IHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmxlbmd0aCB9IFxuXHRcdFx0XHRuZXdUb3RhbD17IHRoaXMuY2hhbmdlTGlrZS5iaW5kKHRoaXMpIH1cblx0XHRcdC8+XG5cdFx0XHRjb21tZW50QXJlYSA9IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8SW5wdXRhcmVhIHJlZj1cIm5ld0NvbW1lbnRcIiBjb250ZW50PVwiXCIgbWF4PVwiMTUwXCIgLz5cblx0XHRcdFx0XHQ8aDY+eyB0aGlzLnByb3BzLm1vbWVudC5jb21tZW50RXJyb3IgfTwvaDY+XG5cdFx0XHRcdFx0PGg2IGlkPVwiYXNpZGUtbGVhdmVcIiBvbkNsaWNrPXsgdGhpcy5zZW5kQ29tbWVudC5iaW5kKHRoaXMpIH0+Q29tbWVudDwvaDY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm1vbWVudC5mYW1pbHlEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSAhPT0gLTEpIHtcblx0XHRcdFx0ZGVsZXRlQnV0dG9uID0gPGg2IG9uQ2xpY2s9eyB0aGlzLnNob3dDb25maXJtLmJpbmQodGhpcykgfT5EZWxldGU8L2g2Pjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlrZUJ1dHRvbiA9IDxMaWtlIFxuXHRcdFx0XHRpbnRlcmFjdD1cImZhbHNlXCIgXG5cdFx0XHRcdGFncmVlPXsgdGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEubGVuZ3RoIH0gXG5cdFx0XHRcdGxpa2VkPVwiZmFsc2VcIlxuXHRcdFx0Lz5cblx0XHR9XG5cdFx0bGV0IGNvbmZpcm1CdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMubW9tZW50LnNob3dDb25maXJtKSB7XG5cdFx0XHRjb25maXJtQnV0dG9uID0gKFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29uZmlybSA/XCIgb25DbGljaz17IHRoaXMuY29uZmlybURlbGV0ZS5iaW5kKHRoaXMpIH0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiAoW1xuXHRcdFx0PG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdGFsdD1cIk1vbWVudCBJbWFnZVwiIFxuXHRcdFx0XHRcdHNyYz17XG5cdFx0XHRcdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWQgKyBcblx0XHRcdFx0XHRcdFwiL21vbWVudC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEuaW1hZ2VfbmFtZVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdC8+XG4gICAgICAgIDxoNT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9kYXRlID8gXG5cdFx0XHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEubW9tZW50X2RhdGUpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSA6XG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvaDU+XG5cdFx0XHRcdHsgZGVsZXRlQnV0dG9uIH1cblx0XHRcdFx0eyBjb25maXJtQnV0dG9uIH1cblx0XHRcdDwvbWFpbj4sXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYXNpZGUtdGFsa1wiPlxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3BldC9cIiArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlBldFwiIFxuXHRcdFx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8aDQ+eyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9tZXNzYWdlIH08L2g0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYXNpZGUtc29jaWFsXCI+XG5cdFx0XHRcdFx0eyBsaWtlQnV0dG9uIH1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8Q29tbWVudGxpc3QgXG5cdFx0XHRcdFx0ZGF0YT17IHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnREYXRhIH0gXG5cdFx0XHRcdFx0bG9ja2VyPXsgdGhpcy5wcm9wcy5tb21lbnQuY29tbWVudExvY2tlciB9IFxuXHRcdFx0XHRcdGxvYWRNb3JlPXsgdGhpcy5sb2FkQ29tbWVudC5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBjb21tZW50QXJlYSB9XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdF0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCwgbW9tZW50OiBzdGF0ZS5tb21lbnQgfSksXG4gIHsgXG5cdFx0cmVhZE1vbWVudFBhZ2UsIHNob3dNb21lbnREZWxldGUsIGRlbGV0ZU1vbWVudFBhZ2UsIHVwZGF0ZU1vbWVudExpa2UsIHJlYWRNb21lbnRDb21tZW50cyxcblx0XHRzaG93Q29tbWVudEVtcHR5LCBjcmVhdGVNb21lbnRDb21tZW50XG5cdH1cbikoTW9tZW50KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL01vbWVudC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29tbWVudGxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiMjBweFwiLFxuXHRcdFx0cGFkZGluZzogXCIyMHB4IDBcIixcblx0XHRcdGJvcmRlclRvcFN0eWxlOiBcInJpZGdlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxuXHRcdH07XG5cdFx0bGV0IHNpbmdsZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmY1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjE1cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMiVcIixcblx0XHRcdG1hcmdpblJpZ2h0OiBcIjIlXCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdHBhZGRpbmc6IFwiNnB4IDIlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCJcblx0XHR9O1xuXHRcdGxldCBhYm91dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmN2Q3YjRcIlxuXHRcdH07XG5cdFx0bGV0IHByb2ZpbGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IFwiOCVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdG1hcmdpbjogXCIzcHggMiVcIlxuXHRcdH07XG5cdFx0bGV0IGRhdGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCJcblx0XHR9O1xuXHRcdGxldCBsb2FkU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCI5cHhcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRvdXRsaW5lOiBcIm5vbmVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGxvY2tlclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcCgoY29tbWVudCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17XCJ0aG91c2FuZGF5LW1vbWVudC1jb21tZW50XCIgKyBpbmRleH0gc3R5bGU9e3NpbmdsZVN0eWxlfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cblx0XHRcdFx0XHR7Y29tbWVudFswXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2Fib3V0U3R5bGV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9e2NvbW1lbnRbMl19PlxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17cHJvZmlsZVN0eWxlfSBhbHQ9XCJVc2VyIFByb2ZpbGVcIiBzcmM9e2NvbW1lbnRbMV19IC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2RhdGVTdHlsZX0+e2NvbW1lbnRbM119PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9hZDtcblx0XHRpZiAoIXRoaXMucHJvcHMubG9ja2VyKSB7XG5cdFx0XHRsb2FkID0gKFxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17bG9hZFN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLmxvYWRNb3JlLmJpbmQobnVsbCl9PkxvYWQgTW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvYWQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtsb2NrZXJTdHlsZX0+Tm8gbW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG5cdFx0XHRcdHtjb21tZW50c31cblx0XHRcdFx0e2xvYWR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50bGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db21tZW50bGlzdC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRib3JkZXI6IHRoaXMucHJvcHMuYm9yZGVyIHx8IFwiMnB4IHNvbGlkICNmN2Q3YjRcIixcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCI1MHB4XCIsXG5cdFx0XHRmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSB8fCBcIjE0cHhcIixcblx0XHRcdGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudCB8fCBcIlwiLFxuXHRcdFx0Y291bnQ6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSAtIHRoaXMucHJvcHMuY29udGVudC5sZW5ndGgsXG5cdFx0XHRsZW5ndGg6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRlZGl0SW5wdXQoZXZlbnQpIHtcblx0XHRsZXQgY2hhbmdlZElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cigwLCB0aGlzLnN0YXRlLmxlbmd0aCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQ6IGNoYW5nZWRJbnB1dCB9KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUubGVuZ3RoIC0gY2hhbmdlZElucHV0Lmxlbmd0aCB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNwYW5TdHlsZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCJcblx0XHR9O1xuXHRcdGxldCBpbnB1dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTglXCIsXG5cdFx0XHRwYWRkaW5nVG9wOiBcIjVweFwiLFxuXHRcdFx0cGFkZGluZ0JvdHRvbTogXCI1cHhcIixcblx0XHRcdGJvcmRlcjogdGhpcy5zdGF0ZS5ib3JkZXIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIxJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRyZXNpemU6IFwibm9uZVwiXG5cdFx0fTtcblx0XHRsZXQgY291bnRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdHdpZHRoOiBcIjk5JVwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxJVwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjVweFwiXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XG5cdFx0XHRcdDx0ZXh0YXJlYSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMuZWRpdElucHV0LmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5zdGF0ZS5jb3VudH0gLyB7dGhpcy5zdGF0ZS5sZW5ndGh9PC9zcGFuPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGlrZWQ6IHRoaXMucHJvcHMubGlrZWQgfHwgXCJmYWxzZVwiLFxuXHRcdFx0aG92ZXI6IFwiZmFsc2VcIixcblx0XHRcdGludGVyYWN0OiB0aGlzLnByb3BzLmludGVyYWN0IHx8IFwidHJ1ZVwiXG5cdFx0fTtcblx0fVxuXHRjbGlja0xpa2UoKSB7XG5cdFx0bGV0IHRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5hZ3JlZSk7XG5cdFx0aWYgKHRoaXMuc3RhdGUubGlrZWQgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKC0xKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogXCJmYWxzZVwiIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKDEpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxpa2VkOiBcInRydWVcIiB9KTtcblx0XHR9IFxuXHR9XG5cdGVudGVySGVhcnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBcInRydWVcIiB9KTtcblx0fVxuXHRsZWF2ZUhlYXJ0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogXCJmbGFzZVwiIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGxpZ2h0SGVhcnQgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyYWE5OFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIxcHggNHB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgcGFzc2l2ZUhlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmMmFhOThcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgZGFya0hlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNlNTEwMTBcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGVcIlxuXHRcdH07XG5cdFx0bGV0IG51bVN0eWxlID0ge1xuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGZvbnRTaXplOiBcIjE2cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiNXB4XCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGhlYXJ0O1xuXHRcdGlmICh0aGlzLnN0YXRlLmludGVyYWN0ID09PSBcInRydWVcIikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnN0YXRlLmxpa2VkID09PSBcInRydWVcIiB8fCBcblx0XHRcdFx0KHRoaXMuc3RhdGUubGlrZWQgPT09IFwiZmFsc2VcIiAmJiB0aGlzLnN0YXRlLmhvdmVyID09PSBcInRydWVcIilcblx0XHRcdCkge1xuXHRcdFx0XHRoZWFydCA9IChcblx0XHRcdFx0XHQ8c3BhbiBcblx0XHRcdFx0XHRcdHN0eWxlPXsgZGFya0hlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgdGhpcy5sZWF2ZUhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYXJ0ID0gKFxuXHRcdFx0XHRcdDxzcGFuIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBsaWdodEhlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5lbnRlckhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gICBcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhcnQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgcGFzc2l2ZUhlYXJ0IH0+4p2kPC9zcGFuPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cblx0XHRcdFx0eyBoZWFydCB9XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgbnVtU3R5bGUgfT57IHRoaXMucHJvcHMuYWdyZWV9IDwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGlrZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbiNtYWluIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbiNtYWluIGg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jbWFpbiBpbnB1dHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuI2FzaWRlLXRhbGt7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuI2FzaWRlLXRhbGsgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG4jYXNpZGUtdGFsayBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzclO1xcbiAgICBwYWRkaW5nOiAzcHggMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuI2FzaWRlLXNvY2lhbHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxufVxcbiNmYi1zaGFyZS1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhc2lkZS1sZWF2ZXtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FiYWViMjtcXG4gICAgcGFkZGluZzogNXB4IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FzaWRlIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvbW9tZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbWVudC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tb21lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==