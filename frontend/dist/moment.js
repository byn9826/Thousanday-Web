webpackJsonp([2],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(15);

var _moment = __webpack_require__(59);

var _account = __webpack_require__(56);

var _config = __webpack_require__(5);

var _Like = __webpack_require__(152);

var _Like2 = _interopRequireDefault(_Like);

var _Inputarea = __webpack_require__(151);

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Commentlist = __webpack_require__(148);

var _Commentlist2 = _interopRequireDefault(_Commentlist);

__webpack_require__(160);

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
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
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
	showCommentEmpty: _moment.showCommentEmpty, createMomentComment: _moment.createMomentComment, changeAccountData: _account.changeAccountData
})(Moment);

/***/ }),

/***/ 148:
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

/***/ 151:
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

/***/ 152:
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    text-align: center;\n    margin-bottom: 200px;\n}\n#main img{\n    border-radius: 5px;\n    margin: 0 auto;\n    max-width: 320px;\n    display: block;\n}\n#main h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main h6{\n    display: inline-block;\n    color: red;\n    cursor: pointer;\n    margin-left: 3%;\n    vertical-align: middle;\n    margin-top: 10px;\n}\n#main input{\n    display: inline-block;\n    margin-top: 10px;\n    vertical-align: middle;\n    border: 1px solid #ef8513;\n    outline: none;\n    background-color: #ef8513;\n    color: white;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-left: 3%;\n}\n\n#aside{\n    display: inline-block;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: middle;\n    width: 35%;\n    margin-bottom: 100px;\n}\n\n#aside-talk{\n    display: block;\n    padding: 5px 0;\n}\n#aside-talk img{\n    display: inline-block;\n    width: 15%;\n    vertical-align: top;\n    border-radius: 3px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#aside-talk h4{\n    display: inline-block;\n    vertical-align: top;\n    background-color: black;\n    color: white;\n    width: 77%;\n    padding: 3px 2%;\n    border-radius: 5px;\n    min-height: 50px;\n}\n\n#aside-social{\n    margin-top: 10px;\n    display: block;\n    padding-left: 3%;\n}\n#fb-share-button{\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5%;\n    width: 60px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside-leave{\n    float: right;\n    display: block;\n    margin-right: 5%;\n    border: 1px solid #abaeb2;\n    padding: 5px 2%;\n    border-radius: 3px;\n    cursor: pointer;\n}\n#aside h7{\n    display: block;\n    color: red;\n    text-align: center;\n    margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(155);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(55)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9tZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vbWVudC5jc3M/OTM4MyJdLCJuYW1lcyI6WyJNb21lbnQiLCJwcm9wcyIsImNoYW5nZUFjY291bnREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlYWRNb21lbnRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwiYWNjb3VudCIsInRva2VuIiwibW9tZW50IiwibW9tZW50RGF0YSIsInBldF9pZCIsImFjdGlvbiIsInVwZGF0ZU1vbWVudExpa2UiLCJjb250ZW50IiwicmVmcyIsIm5ld0NvbW1lbnQiLCJzdGF0ZSIsInRyaW0iLCJzaG93Q29tbWVudEVtcHR5Iiwic2V0U3RhdGUiLCJjcmVhdGVNb21lbnRDb21tZW50IiwicmVhZE1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJyZWRpcmVjdFVzZXIiLCJsaWtlQnV0dG9uIiwiY29tbWVudEFyZWEiLCJkZWxldGVCdXR0b24iLCJsaWtlRGF0YSIsImluZGV4T2YiLCJsZW5ndGgiLCJjaGFuZ2VMaWtlIiwiYmluZCIsImNvbW1lbnRFcnJvciIsInNlbmRDb21tZW50IiwiZmFtaWx5RGF0YSIsInNob3dDb25maXJtIiwiY29uZmlybUJ1dHRvbiIsImNvbmZpcm1EZWxldGUiLCJpbWFnZV9uYW1lIiwibW9tZW50X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJtb21lbnRfbWVzc2FnZSIsImNvbW1lbnREYXRhIiwiY29tbWVudExvY2tlciIsImxvYWRDb21tZW50IiwiQ29tbWVudGxpc3QiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyVG9wU3R5bGUiLCJzaW5nbGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNvbnRlbnRTdHlsZSIsImZvbnRTaXplIiwiYWJvdXRTdHlsZSIsInByb2ZpbGVTdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJkYXRlU3R5bGUiLCJsb2FkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJsb2NrZXJTdHlsZSIsImNvbW1lbnRzIiwiZGF0YSIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImxvYWQiLCJsb2NrZXIiLCJsb2FkTW9yZSIsIklucHV0YXJlYSIsImJvcmRlciIsImhlaWdodCIsImNvdW50IiwicGFyc2VJbnQiLCJtYXgiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJyZXNpemUiLCJjb3VudFN0eWxlIiwiZWRpdElucHV0IiwiTGlrZSIsImxpa2VkIiwiaG92ZXIiLCJpbnRlcmFjdCIsInRvdGFsIiwiYWdyZWUiLCJuZXdUb3RhbCIsImxpZ2h0SGVhcnQiLCJwYXNzaXZlSGVhcnQiLCJkYXJrSGVhcnQiLCJudW1TdHlsZSIsImhlYXJ0IiwiY2xpY2tMaWtlIiwibGVhdmVIZWFydCIsImVudGVySGVhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7QUFD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QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHJlYWRNb21lbnRQYWdlLCBzaG93TW9tZW50RGVsZXRlLCBkZWxldGVNb21lbnRQYWdlLCB1cGRhdGVNb21lbnRMaWtlLCByZWFkTW9tZW50Q29tbWVudHMsXG5cdHNob3dDb21tZW50RW1wdHksIGNyZWF0ZU1vbWVudENvbW1lbnRcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9tb21lbnQnO1xuaW1wb3J0IHsgY2hhbmdlQWNjb3VudERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi4vY29tcG9uZW50cy9MaWtlJztcbmltcG9ydCBJbnB1dGFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dGFyZWEnO1xuaW1wb3J0IENvbW1lbnRsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWVudGxpc3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbW9tZW50LmNzcyc7XG5cbmNsYXNzIE1vbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmNoYW5nZUFjY291bnREYXRhKFxuXHRcdFx0W1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSwgXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJyksXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRNb21lbnRQYWdlKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcblx0fVxuXHRzaG93Q29uZmlybSgpIHtcblx0XHR0aGlzLnByb3BzLnNob3dNb21lbnREZWxldGUoKTtcblx0fVxuXHRjb25maXJtRGVsZXRlKCkge1xuXHRcdHRoaXMucHJvcHMuZGVsZXRlTW9tZW50UGFnZShcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWRcblx0XHQpO1xuXHR9XG4vLyBcdHNoYXJlUGFnZSgpIHtcbi8vIFx0XHRGQi51aSh7XG4vLyBcdFx0XHRkaXNwbGF5OiAncG9wdXAnLFxuLy8gXHRcdFx0bWV0aG9kOiAnc2hhcmVfb3Blbl9ncmFwaCcsXG4vLyBcdFx0XHRhY3Rpb25fdHlwZTogJ29nLnNoYXJlcycsXG4vLyBcdFx0XHRhY3Rpb25fcHJvcGVydGllczogSlNPTi5zdHJpbmdpZnkoe1xuLy8gXHRcdFx0XHRvYmplY3QgOiB7XG4vLyBcdFx0XHRcdFx0XCJvZzp1cmxcIjogbG9jYXRpb24uaHJlZixcbi8vIFx0XHRcdFx0XHRcIm9nOnRpdGxlXCI6ICdcIicgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLm1vbWVudF9tZXNzYWdlICsgJ1wiJyxcbi8vIFx0XHRcdFx0XHRcIm9nOmRlc2NyaXB0aW9uXCI6IFwiU21pbGluZ3MubWUgLSBIb21lcGFnZSBmb3IgeW91ciBwZXRzXCIsXG4vLyBcdFx0XHRcdFx0XCJvZzppbWFnZVwiOiBkb21haW5VcmwgKyAnL2ltZy9wZXQvJyArIHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEucGV0X2lkICsgXG4vLyBcdFx0XHRcdFx0XHRcIi9tb21lbnQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLmltYWdlX25hbWVcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSlcbi8vIFx0XHR9KTtcbi8vIFx0fVxuXHRjaGFuZ2VMaWtlKGFjdGlvbikge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlTW9tZW50TGlrZShcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0YWN0aW9uXG5cdFx0KTtcblx0fVxuXHRzZW5kQ29tbWVudCgpIHtcblx0XHQvL2NvbW1lbnQgY29udGVudCBjYW4ndCBiZSBlbXB0eVxuXHRcdGxldCBjb250ZW50ID0gdGhpcy5yZWZzLm5ld0NvbW1lbnQuc3RhdGUuY29udGVudC50cmltKCk7XG5cdFx0aWYgKGNvbnRlbnQgPT09IFwiXCIpIHtcblx0XHRcdHRoaXMucHJvcHMuc2hvd0NvbW1lbnRFbXB0eSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlZnMubmV3Q29tbWVudC5zZXRTdGF0ZSh7Y29udGVudDogXCJcIn0pO1xuXHRcdFx0dGhpcy5wcm9wcy5jcmVhdGVNb21lbnRDb21tZW50KFxuXHRcdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHRcdGNvbnRlbnRcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdGxvYWRDb21tZW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZE1vbWVudENvbW1lbnRzKFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHR0aGlzLnByb3BzLm1vbWVudC5jb21tZW50TG9hZCxcblx0XHRcdHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnRBZGRlZFxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLm1vbWVudC5yZWRpcmVjdFVzZXIpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89eyAnL3VzZXIvJyArIHRoaXMucHJvcHMuYWNjb3VudC5pZCB9IC8+O1xuICAgIH1cblx0XHRsZXQgbGlrZUJ1dHRvbiwgY29tbWVudEFyZWEsIGRlbGV0ZUJ1dHRvbjtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsKSB7XG5cdFx0XHRsaWtlQnV0dG9uID0gPExpa2UgXG5cdFx0XHRcdGtleT17IFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubW9tZW50Lmxpa2VEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSA9PT0gLTEgPyAnZmFsc2UnIDogJ3RydWUnIFxuXHRcdFx0XHR9XG5cdFx0XHRcdGxpa2VkPXsgXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpID09PSAtMSA/ICdmYWxzZScgOiAndHJ1ZScgXG5cdFx0XHRcdH1cblx0XHRcdFx0aW50ZXJhY3Q9XCJ0cnVlXCIgXG5cdFx0XHRcdGFncmVlPXsgdGhpcy5wcm9wcy5tb21lbnQubGlrZURhdGEubGVuZ3RoIH0gXG5cdFx0XHRcdG5ld1RvdGFsPXsgdGhpcy5jaGFuZ2VMaWtlLmJpbmQodGhpcykgfVxuXHRcdFx0Lz5cblx0XHRcdGNvbW1lbnRBcmVhID0gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxJbnB1dGFyZWEgcmVmPVwibmV3Q29tbWVudFwiIGNvbnRlbnQ9XCJcIiBtYXg9XCIxNTBcIiAvPlxuXHRcdFx0XHRcdDxoNj57IHRoaXMucHJvcHMubW9tZW50LmNvbW1lbnRFcnJvciB9PC9oNj5cblx0XHRcdFx0XHQ8aDYgaWQ9XCJhc2lkZS1sZWF2ZVwiIG9uQ2xpY2s9eyB0aGlzLnNlbmRDb21tZW50LmJpbmQodGhpcykgfT5Db21tZW50PC9oNj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubW9tZW50LmZhbWlseURhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpICE9PSAtMSkge1xuXHRcdFx0XHRkZWxldGVCdXR0b24gPSA8aDYgb25DbGljaz17IHRoaXMuc2hvd0NvbmZpcm0uYmluZCh0aGlzKSB9PkRlbGV0ZTwvaDY+O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsaWtlQnV0dG9uID0gPExpa2UgXG5cdFx0XHRcdGludGVyYWN0PVwiZmFsc2VcIiBcblx0XHRcdFx0YWdyZWU9eyB0aGlzLnByb3BzLm1vbWVudC5saWtlRGF0YS5sZW5ndGggfSBcblx0XHRcdFx0bGlrZWQ9XCJmYWxzZVwiXG5cdFx0XHQvPlxuXHRcdH1cblx0XHRsZXQgY29uZmlybUJ1dHRvbjtcblx0XHRpZiAodGhpcy5wcm9wcy5tb21lbnQuc2hvd0NvbmZpcm0pIHtcblx0XHRcdGNvbmZpcm1CdXR0b24gPSAoXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb25maXJtID9cIiBvbkNsaWNrPXsgdGhpcy5jb25maXJtRGVsZXRlLmJpbmQodGhpcykgfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIChbXG5cdFx0XHQ8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0YWx0PVwiTW9tZW50IEltYWdlXCIgXG5cdFx0XHRcdFx0c3JjPXtcblx0XHRcdFx0XHRcdGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZCArIFxuXHRcdFx0XHRcdFx0XCIvbW9tZW50L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5pbWFnZV9uYW1lXG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0Lz5cbiAgICAgICAgPGg1PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEubW9tZW50X2RhdGUgPyBcblx0XHRcdFx0XHRcdFx0bmV3IERhdGUodGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5tb21lbnRfZGF0ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApIDpcblx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9oNT5cblx0XHRcdFx0eyBkZWxldGVCdXR0b24gfVxuXHRcdFx0XHR7IGNvbmZpcm1CdXR0b24gfVxuXHRcdFx0PC9tYWluPixcblx0XHRcdDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhc2lkZS10YWxrXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvcGV0L1wiICsgdGhpcy5wcm9wcy5tb21lbnQubW9tZW50RGF0YS5wZXRfaWR9PlxuXHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0YWx0PVwiUGV0XCIgXG5cdFx0XHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyB0aGlzLnByb3BzLm1vbWVudC5tb21lbnREYXRhLnBldF9pZCArIFwiLzAucG5nXCIgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxoND57IHRoaXMucHJvcHMubW9tZW50Lm1vbWVudERhdGEubW9tZW50X21lc3NhZ2UgfTwvaDQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhc2lkZS1zb2NpYWxcIj5cblx0XHRcdFx0XHR7IGxpa2VCdXR0b24gfVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxDb21tZW50bGlzdCBcblx0XHRcdFx0XHRkYXRhPXsgdGhpcy5wcm9wcy5tb21lbnQuY29tbWVudERhdGEgfSBcblx0XHRcdFx0XHRsb2NrZXI9eyB0aGlzLnByb3BzLm1vbWVudC5jb21tZW50TG9ja2VyIH0gXG5cdFx0XHRcdFx0bG9hZE1vcmU9eyB0aGlzLmxvYWRDb21tZW50LmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGNvbW1lbnRBcmVhIH1cblx0XHRcdDwvYXNpZGU+XG5cdFx0XSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50LCBtb21lbnQ6IHN0YXRlLm1vbWVudCB9KSxcbiAgeyBcblx0XHRyZWFkTW9tZW50UGFnZSwgc2hvd01vbWVudERlbGV0ZSwgZGVsZXRlTW9tZW50UGFnZSwgdXBkYXRlTW9tZW50TGlrZSwgcmVhZE1vbWVudENvbW1lbnRzLFxuXHRcdHNob3dDb21tZW50RW1wdHksIGNyZWF0ZU1vbWVudENvbW1lbnQsIGNoYW5nZUFjY291bnREYXRhXG5cdH1cbikoTW9tZW50KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL01vbWVudC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29tbWVudGxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiMjBweFwiLFxuXHRcdFx0cGFkZGluZzogXCIyMHB4IDBcIixcblx0XHRcdGJvcmRlclRvcFN0eWxlOiBcInJpZGdlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxuXHRcdH07XG5cdFx0bGV0IHNpbmdsZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmY1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjE1cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMiVcIixcblx0XHRcdG1hcmdpblJpZ2h0OiBcIjIlXCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdHBhZGRpbmc6IFwiNnB4IDIlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCJcblx0XHR9O1xuXHRcdGxldCBhYm91dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmN2Q3YjRcIlxuXHRcdH07XG5cdFx0bGV0IHByb2ZpbGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IFwiOCVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdG1hcmdpbjogXCIzcHggMiVcIlxuXHRcdH07XG5cdFx0bGV0IGRhdGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCJcblx0XHR9O1xuXHRcdGxldCBsb2FkU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCI5cHhcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRvdXRsaW5lOiBcIm5vbmVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGxvY2tlclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiOXB4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdGNvbG9yOiBcIiMwNTI0NTZcIlxuXHRcdH07XG5cdFx0bGV0IGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcCgoY29tbWVudCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17XCJ0aG91c2FuZGF5LW1vbWVudC1jb21tZW50XCIgKyBpbmRleH0gc3R5bGU9e3NpbmdsZVN0eWxlfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cblx0XHRcdFx0XHR7Y29tbWVudFswXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2Fib3V0U3R5bGV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9e2NvbW1lbnRbMl19PlxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17cHJvZmlsZVN0eWxlfSBhbHQ9XCJVc2VyIFByb2ZpbGVcIiBzcmM9e2NvbW1lbnRbMV19IC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2RhdGVTdHlsZX0+e2NvbW1lbnRbM119PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9hZDtcblx0XHRpZiAoIXRoaXMucHJvcHMubG9ja2VyKSB7XG5cdFx0XHRsb2FkID0gKFxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17bG9hZFN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLmxvYWRNb3JlLmJpbmQobnVsbCl9PkxvYWQgTW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvYWQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtsb2NrZXJTdHlsZX0+Tm8gbW9yZSAuLi48L3NwYW4+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG5cdFx0XHRcdHtjb21tZW50c31cblx0XHRcdFx0e2xvYWR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50bGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db21tZW50bGlzdC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRib3JkZXI6IHRoaXMucHJvcHMuYm9yZGVyIHx8IFwiMnB4IHNvbGlkICNmN2Q3YjRcIixcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCI1MHB4XCIsXG5cdFx0XHRmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSB8fCBcIjE0cHhcIixcblx0XHRcdGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudCB8fCBcIlwiLFxuXHRcdFx0Y291bnQ6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSAtIHRoaXMucHJvcHMuY29udGVudC5sZW5ndGgsXG5cdFx0XHRsZW5ndGg6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRlZGl0SW5wdXQoZXZlbnQpIHtcblx0XHRsZXQgY2hhbmdlZElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cigwLCB0aGlzLnN0YXRlLmxlbmd0aCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQ6IGNoYW5nZWRJbnB1dCB9KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUubGVuZ3RoIC0gY2hhbmdlZElucHV0Lmxlbmd0aCB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNwYW5TdHlsZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCJcblx0XHR9O1xuXHRcdGxldCBpbnB1dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTglXCIsXG5cdFx0XHRwYWRkaW5nVG9wOiBcIjVweFwiLFxuXHRcdFx0cGFkZGluZ0JvdHRvbTogXCI1cHhcIixcblx0XHRcdGJvcmRlcjogdGhpcy5zdGF0ZS5ib3JkZXIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIxJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRyZXNpemU6IFwibm9uZVwiXG5cdFx0fTtcblx0XHRsZXQgY291bnRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdHdpZHRoOiBcIjk5JVwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxJVwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjVweFwiXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XG5cdFx0XHRcdDx0ZXh0YXJlYSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMuZWRpdElucHV0LmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5zdGF0ZS5jb3VudH0gLyB7dGhpcy5zdGF0ZS5sZW5ndGh9PC9zcGFuPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0lucHV0YXJlYS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGlrZWQ6IHRoaXMucHJvcHMubGlrZWQgfHwgXCJmYWxzZVwiLFxuXHRcdFx0aG92ZXI6IFwiZmFsc2VcIixcblx0XHRcdGludGVyYWN0OiB0aGlzLnByb3BzLmludGVyYWN0IHx8IFwidHJ1ZVwiXG5cdFx0fTtcblx0fVxuXHRjbGlja0xpa2UoKSB7XG5cdFx0bGV0IHRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5hZ3JlZSk7XG5cdFx0aWYgKHRoaXMuc3RhdGUubGlrZWQgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKC0xKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogXCJmYWxzZVwiIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLm5ld1RvdGFsKDEpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxpa2VkOiBcInRydWVcIiB9KTtcblx0XHR9IFxuXHR9XG5cdGVudGVySGVhcnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBcInRydWVcIiB9KTtcblx0fVxuXHRsZWF2ZUhlYXJ0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogXCJmbGFzZVwiIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGxpZ2h0SGVhcnQgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyYWE5OFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIxcHggNHB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgcGFzc2l2ZUhlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmMmFhOThcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkZVwiXG5cdFx0fTtcblx0XHRsZXQgZGFya0hlYXJ0ID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNlNTEwMTBcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMXB4IDRweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGVcIlxuXHRcdH07XG5cdFx0bGV0IG51bVN0eWxlID0ge1xuXHRcdFx0Zm9udEZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGZvbnRTaXplOiBcIjE2cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiNXB4XCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuXHRcdH07XG5cdFx0bGV0IGhlYXJ0O1xuXHRcdGlmICh0aGlzLnN0YXRlLmludGVyYWN0ID09PSBcInRydWVcIikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnN0YXRlLmxpa2VkID09PSBcInRydWVcIiB8fCBcblx0XHRcdFx0KHRoaXMuc3RhdGUubGlrZWQgPT09IFwiZmFsc2VcIiAmJiB0aGlzLnN0YXRlLmhvdmVyID09PSBcInRydWVcIilcblx0XHRcdCkge1xuXHRcdFx0XHRoZWFydCA9IChcblx0XHRcdFx0XHQ8c3BhbiBcblx0XHRcdFx0XHRcdHN0eWxlPXsgZGFya0hlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgdGhpcy5sZWF2ZUhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYXJ0ID0gKFxuXHRcdFx0XHRcdDxzcGFuIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBsaWdodEhlYXJ0IH0gXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0xpa2UuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5lbnRlckhlYXJ0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOKdpFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gICBcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhcnQgPSAoXG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgcGFzc2l2ZUhlYXJ0IH0+4p2kPC9zcGFuPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cblx0XHRcdFx0eyBoZWFydCB9XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXsgbnVtU3R5bGUgfT57IHRoaXMucHJvcHMuYWdyZWV9IDwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGlrZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxufVxcbiNtYWluIGltZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNtYWluIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbiNtYWluIGg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jbWFpbiBpbnB1dHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuI2FzaWRlLXRhbGt7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuI2FzaWRlLXRhbGsgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG4jYXNpZGUtdGFsayBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzclO1xcbiAgICBwYWRkaW5nOiAzcHggMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuI2FzaWRlLXNvY2lhbHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxufVxcbiNmYi1zaGFyZS1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhc2lkZS1sZWF2ZXtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FiYWViMjtcXG4gICAgcGFkZGluZzogNXB4IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FzaWRlIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvbW9tZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbWVudC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9tZW50LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tb21lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==