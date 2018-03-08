webpackJsonp([0],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _pet = __webpack_require__(63);

var _noToInfo = __webpack_require__(57);

var _config = __webpack_require__(4);

var _Postimg = __webpack_require__(162);

var _Postimg2 = _interopRequireDefault(_Postimg);

var _Progress = __webpack_require__(163);

var _Progress2 = _interopRequireDefault(_Progress);

var _Waterfall = __webpack_require__(158);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pet = function (_Component) {
	_inherits(Pet, _Component);

	function Pet() {
		_classCallCheck(this, Pet);

		return _possibleConstructorReturn(this, (Pet.__proto__ || Object.getPrototypeOf(Pet)).apply(this, arguments));
	}

	_createClass(Pet, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.readPetPage(this.props.match.params.id);
		}
	}, {
		key: 'watchPet',
		value: function watchPet() {
			if (this.props.account.id === null) {
				this.props.showAccountRequired();
			} else {
				this.props.updatePetWatch(this.props.account.id, this.props.account.token, this.props.match.params.id, this.props.pet.watchData.indexOf(this.props.account.id) !== -1 ? 0 : 1);
			}
		}
	}, {
		key: 'submitImg',
		value: function submitImg(message, image) {
			this.props.createPetMoment(this.props.account.id, this.props.account.token, this.props.match.params.id, image, message);
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			this.props.readPetMoments(this.props.match.params.id, this.props.pet.load, this.props.pet.add);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var watchInfo = void 0;
			if (this.props.account.id !== null && this.props.pet.watchData.indexOf(this.props.account.id) !== -1) {
				watchInfo = "Watched | by " + this.props.pet.watchData.length;
			} else {
				if (this.props.pet.loginRequired) {
					watchInfo = "Please Login";
				} else {
					watchInfo = "+ Watch | by " + this.props.pet.watchData.length;
				}
			}
			var familiesBoard = this.props.pet.familyData.map(function (family, index) {
				return _react2.default.createElement(
					'div',
					{ key: "petfamily" + index, className: 'main-owner' },
					_react2.default.createElement(
						'a',
						{ href: "/user/" + family.user_id },
						_react2.default.createElement('img', { src: _config.domainUrl + "/img/user/" + family.user_id + ".jpg" }),
						_react2.default.createElement(
							'h5',
							null,
							family.user_name
						)
					)
				);
			});
			var friendsBoard = this.props.pet.friendData.map(function (friend, index) {
				return _react2.default.createElement(
					'div',
					{ key: "petfriend" + index, className: 'main-friend' },
					_react2.default.createElement(
						'a',
						{ href: "/pet/" + friend.pet_id },
						_react2.default.createElement('img', { src: _config.domainUrl + "/img/pet/" + friend.pet_id + "/0.png" }),
						_react2.default.createElement(
							'h6',
							null,
							friend.pet_name
						)
					)
				);
			});
			var postBoard = void 0;
			if (this.props.account.id !== null && (this.props.pet.petData.owner_id === this.props.account.id || this.props.pet.petData.relative_id === this.props.account.id)) {
				postBoard = _react2.default.createElement(_Postimg2.default, {
					content: '',
					max: '120',
					title: 'Share new moment',
					submitImg: this.submitImg.bind(this),
					fontFamily: '\'Rubik\', sans-serif',
					reset: this.props.pet.reset
				});
			}
			var skillBoard = ['Attack', 'Defend', 'Health', 'Swift', 'Lucky'].map(function (skill) {
				return _react2.default.createElement(
					'div',
					{ key: skill },
					_react2.default.createElement(
						'h6',
						null,
						skill
					),
					_react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(_Progress2.default, {
							progress: _this2.props.pet.petData[skill.toLowerCase()],
							max: '999',
							percentage: 'false'
						})
					)
				);
			});
			var loadButton = void 0;
			if (!this.props.pet.locker) {
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
					alt: this.props.pet.petData.pet_name,
					src: _config.domainUrl + "/img/pet/" + this.props.pet.petData.pet_id + "/0.png"
				}),
				_react2.default.createElement(
					'div',
					{ id: 'main-name' },
					_react2.default.createElement(
						'h1',
						null,
						this.props.pet.petData.pet_name
					),
					_react2.default.createElement(
						'h4',
						null,
						(0, _noToInfo.noGetGender)(this.props.pet.petData.pet_gender)
					)
				),
				_react2.default.createElement(
					'h5',
					{ id: 'main-watch', onClick: this.watchPet.bind(this) },
					watchInfo
				),
				_react2.default.createElement(
					'h5',
					{ id: 'main-nature' },
					'Nature: ',
					(0, _noToInfo.noGetNature)(this.props.pet.petData.pet_nature)
				),
				_react2.default.createElement(
					'h5',
					{ className: 'main-title' },
					'Type: ',
					(0, _noToInfo.noGetType)(this.props.pet.petData.pet_type)
				),
				_react2.default.createElement(
					'h5',
					{ className: 'main-title' },
					'Reg in hub:',
					this.props.pet.petData.pet_reg ? new Date(this.props.pet.petData.pet_reg).toISOString().substring(0, 10) : null
				),
				_react2.default.createElement(
					'div',
					{ className: 'main-family' },
					_react2.default.createElement('img', { alt: 'Family', src: '/public/icon/glyphicons-hub.png' }),
					_react2.default.createElement(
						'h5',
						null,
						'Family'
					)
				),
				familiesBoard,
				_react2.default.createElement(
					'div',
					{ className: 'main-family' },
					_react2.default.createElement('img', { alt: 'friend', src: '/public/icon/glyphicons-team.png' }),
					_react2.default.createElement(
						'h5',
						null,
						'Friends'
					)
				),
				friendsBoard
			), _react2.default.createElement(
				'aside',
				{ id: 'aside', key: 'aside' },
				postBoard,
				_react2.default.createElement(
					'div',
					{ className: 'aside-title' },
					_react2.default.createElement('img', { alt: 'moments', src: '/public/icon/glyphicons-skill.png' }),
					_react2.default.createElement(
						'h4',
						null,
						'Ability'
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'aside-ability' },
					_react2.default.createElement(
						'div',
						{ id: 'aside-ability-left' },
						skillBoard
					),
					_react2.default.createElement(
						'div',
						{ id: 'aside-ability-right' },
						_react2.default.createElement(
							'h4',
							null,
							'Play & Win',
							_react2.default.createElement('br', null),
							this.props.pet.petData.win
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'aside-title' },
					_react2.default.createElement('img', { alt: 'moments', src: '/public/icon/glyphicons-moment.png' }),
					_react2.default.createElement(
						'h4',
						null,
						'Moments'
					)
				),
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 900 ? 3 : 2,
					image: this.props.pet.galleryData,
					fontFamily: '\'Rubik\', sans-serif'
				}),
				loadButton
			)];
		}
	}]);

	return Pet;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { account: state.account, pet: state.pet };
}, {
	readPetPage: _pet.readPetPage, updatePetWatch: _pet.updatePetWatch, showAccountRequired: _pet.showAccountRequired,
	readPetMoments: _pet.readPetMoments, createPetMoment: _pet.createPetMoment
})(Pet);

/***/ }),

/***/ 158:
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

/***/ 162:
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
			width: _this.props.width || "94%",
			border: _this.props.border || "2px solid #f7d7b4",
			fontSize: _this.props.fontSize || "14px",
			content: _this.props.content || "",
			count: parseInt(_this.props.max) - _this.props.content.length,
			length: parseInt(_this.props.max),
			fontFamily: _this.props.fontFamily || "Times New Roman",
			error: "",
			rawUrl: null,
			title: _this.props.title || null,
			reset: _this.props.reset
		};
		return _this;
	}

	_createClass(Inputarea, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.state.reset != this.props.reset) {
				this.setState({
					content: "", rawUrl: null, reset: this.props.reset, error: "Success!", count: this.state.length
				});
			}
		}
	}, {
		key: "editInput",
		value: function editInput(event) {
			var changedInput = event.target.value.substr(0, this.state.length);
			this.setState({ content: changedInput });
			if (changedInput.replace(/^\s+/, "").replace(/\s+$/, "") !== "" && this.state.error !== "") {
				this.setState({ error: "" });
			}
			this.setState({ count: this.state.length - changedInput.length });
		}
	}, {
		key: "loadImg",
		value: function loadImg(event) {
			var _this2 = this;

			event.preventDefault();
			var file = event.target.files[0];
			var reader = new FileReader();
			var canvas = document.createElement("canvas");
			var context = canvas.getContext("2d");
			reader.onload = function () {
				var img = new Image();
				img.src = reader.result;
				img.onload = function () {
					if (img.width > 800 && img.width > img.height) {
						img.height = img.height / img.width * 800;
						img.width = 800;
					} else if (img.height > 800 && img.height > img.width) {
						img.width = img.width / img.height * 800;
						img.height = 800;
					}
					canvas.width = img.width;
					canvas.height = img.height;
					context.drawImage(img, 0, 0, img.width, img.height);
					var compressed = canvas.toDataURL();
					_this2.setState({ rawUrl: compressed });
				};
				if (_this2.state.error !== "") {
					_this2.setState({ error: "" });
				}
			};
			reader.readAsDataURL(file);
		}
	}, {
		key: "submitPost",
		value: function submitPost() {
			var content = this.state.content.replace(/^\s+/, "").replace(/\s+$/, "");
			if (content === "") {
				this.setState({ error: "Please say something" });
			} else if (!this.state.rawUrl) {
				this.setState({ error: "Please upload an image" });
			} else {
				var url = this.state.rawUrl;
				var type = url.split(",")[0];
				type = type.split(":")[1];
				type = type.split(";")[0];
				if (type == "image/jpeg" || type == "image/png") {
					var src = url.split(",")[1];
					src = window.atob(src);
					var blobSrc = new Uint8Array(src.length);
					for (var i = 0; i < src.length; i++) {
						blobSrc[i] = src.charCodeAt(i);
					};
					var image = new Blob([blobSrc], { type: type });
					var message = this.state.content;
					this.props.submitImg(message, image);
				} else {
					this.setState({ error: "File type not support" });
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var titleStyle = {
				display: "block",
				fontSize: "15px",
				fontWeight: "bold",
				fontFamily: this.state.fontFamily,
				color: "#ef8513",
				marginBottom: "10px"
			};
			var spanStyle = {
				width: this.state.width,
				display: "inline-block",
				verticalAlign: "top",
				backgroundColor: "#f7f9fc",
				borderRadius: "6px",
				padding: "20px 3%"
			};
			var inputStyle = {
				display: "block",
				width: "98%",
				paddingTop: "5px",
				paddingBottom: "5px",
				border: this.state.border,
				height: "50px",
				fontFamily: this.state.fontFamily,
				fontSize: this.state.fontSize,
				paddingLeft: "1%",
				outline: "none",
				borderRadius: "5px",
				resize: "none"
			};
			var lineStyle = {
				display: "block",
				width: "100%",
				marginTop: "5px",
				lineHeight: "20px",
				verticalAlign: "middle",
				overflow: "auto"
			};
			var cameraStyle = {
				float: "left",
				marginLeft: "10px",
				filter: "opacity(50%)",
				width: "20px",
				cursor: "pointer"
			};
			var postStyle = {
				float: "right",
				backgroundColor: "#934c4c",
				borderRadius: "3px",
				textAlign: "center",
				color: "white",
				fontSize: "11px",
				fontFamily: this.state.fontFamily,
				padding: "2px 5px",
				marginRight: "10px",
				cursor: "pointer"
			};
			var errorStyle = {
				float: "right",
				fontFamily: this.state.fontFamily,
				fontSize: "11px",
				marginRight: "15px",
				color: "red"
			};
			var countStyle = {
				float: "left",
				fontFamily: this.state.fontFamily,
				fontSize: "11px",
				marginLeft: "10px"
			};
			var fileStyle = {
				position: "relative",
				width: "20px",
				height: "12px",
				left: "-76px",
				cursor: "pointer",
				opacity: "0"
			};
			var imgStyle = {
				float: "left",
				marginTop: "10px",
				marginBottom: "5px",
				height: "150px",
				borderRadius: "6px",
				marginLeft: "5px"
			};
			var camera = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5NjZGRDgyODUzMzExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5NjZGRDgxODUzMzExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GbyTMwAAALhJREFUeNpi+P//PwMuDAQCQLwAiP8TwCA1AnjNImDRASIsgeEDZFkEBAYkWALDCnjMAwfPBDIMJRZPgNpBU0vgljFCGTQHTDQy1w+KUQCx3l+AHNkgNpFJH4aJUpSAJzUlUMuiBUiGNkDzFgg3IIkvoIZFCkiWoMs1IAUjZRYRKCUOIMnjNYfSVKdAteTNyMgIM+wAFukFaGrwgkGTGOiWvKmSYelW1jEDsSAQW9DYnol0q48AAgwADIvhHQLlhIIAAAAASUVORK5CYII=";
			var image = void 0;
			if (this.state.rawUrl) {
				image = _react2.default.createElement("img", { style: imgStyle, src: this.state.rawUrl, alt: "upload-image" });
			}
			return _react2.default.createElement(
				"span",
				{ style: spanStyle },
				_react2.default.createElement(
					"span",
					{ style: titleStyle },
					this.state.title
				),
				_react2.default.createElement("textarea", { style: inputStyle, value: this.state.content, onChange: this.editInput.bind(this) }),
				_react2.default.createElement(
					"div",
					{ style: lineStyle },
					_react2.default.createElement("img", { style: cameraStyle, src: camera, alt: "ADD" }),
					_react2.default.createElement("input", { style: fileStyle, type: "file", accept: "image/*", onChange: this.loadImg.bind(this) }),
					_react2.default.createElement(
						"span",
						{ style: countStyle },
						this.state.count,
						"/",
						this.state.length
					),
					_react2.default.createElement(
						"div",
						{ style: postStyle, onClick: this.submitPost.bind(this) },
						"Post"
					),
					_react2.default.createElement(
						"span",
						{ style: errorStyle },
						this.state.error
					)
				),
				_react2.default.createElement(
					"div",
					{ style: lineStyle },
					image
				)
			);
		}
	}]);

	return Inputarea;
}(_react.Component);

exports.default = Inputarea;

/***/ }),

/***/ 163:
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

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

    _this.state = {
      width: _this.props.width || "100%",
      height: _this.props.height || "18px",
      fontFamily: _this.props.fontFamily || "Times New Roman",
      fontSize: _this.props.fontSize || "9px",
      fontColor: _this.props.fontColor || "black"
    };
    return _this;
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var containerStyle = {
        display: "inline-block",
        width: this.state.width,
        height: this.state.height,
        lineHeight: this.state.height,
        padding: "0",
        textAlign: "center",
        verticalAlign: "middle",
        fontFamily: this.state.fontFamily,
        fontSize: this.state.fontSize,
        color: this.state.fontColor,
        backgroundColor: "#f7f8f9",
        border: "1px solid #dee2e8",
        borderRadius: "5px",
        overflow: "hidden"
      };
      var hintStyle = {
        position: "relative",
        zIndex: "3"
      };
      var backStyle = {
        position: "relative",
        top: "-" + this.state.height,
        width: this.props.progress / this.props.max * 100 + "%",
        height: this.state.height,
        backgroundColor: "#b9d17f",
        borderRadius: "3px",
        zIndex: "2"
      };
      var showProgress = void 0;
      if (this.props.percentage === "false") {
        showProgress = this.props.progress + " / " + this.props.max;
      } else {
        showProgress = parseInt(this.props.progress / this.props.max * 100) + " %";
      }
      return _react2.default.createElement(
        "div",
        { id: this.props.id, style: containerStyle },
        _react2.default.createElement(
          "div",
          { style: hintStyle },
          showProgress
        ),
        _react2.default.createElement("div", { style: backStyle })
      );
    }
  }]);

  return Progress;
}(_react.Component);

exports.default = Progress;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-profile{\n    display: block;\n    width: 100%;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n#main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n}\n#main-name h1{\n    display: inline-block;\n    margin-right: 5%;\n    vertical-align: middle;\n}\n#main-name h4{\n    display: inline-block;\n    vertical-align: middle;\n}\n#main-watch{\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    background-color: #ef8513;\n    border-radius: 5px;\n    width: 70%;\n    padding: 5px 0;\n    margin-left: 5%;\n    border-bottom: 20px;\n    color: white;\n    cursor: pointer;\n}\n#main-nature{\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 15px;\n    margin-bottom: 8px;\n    padding-top: 15px;\n    border-top: 1px solid #e5e5e5;\n    font-weight: bold;\n}\n.main-title{\n    display: block;\n    width: 90%;\n    margin: 8px 5%;\n}\n\n.main-family {\n    display: block;\n    width: 92%;\n    padding: 5px 4%;\n    margin-bottom: 15px;\n    border-left: 4px solid black;\n    border-bottom: 1px solid #e5e5e5;\n    margin-top: 30px;\n}\n.main-family img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 15px;\n    margin: 0 5%;\n}\n.main-family h5{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n.main-owner{\n    display: inline-block;\n    vertical-align: top;\n    width: 35%;\n    margin-right: 15%;\n    text-align: center;\n}\n.main-owner img{\n    display: block;\n    width: 100%;\n    border-radius: 50%;\n}\n.main-owner h5{\n    display: block;\n    margin-top: 10px;\n    font-style: italic;\n}\n\n.main-friend {\n    display: inline-block;\n    width: 31%;\n    margin-right: 2%;\n    vertical-align: top;\n    margin-bottom: 10px;\n}\n.main-friend img{\n    display: block;\n    width: 100%;\n    border-radius: 3px;\n}\n.main-friend h6{\n    display: block;\n    width: 80%;\n    border-bottom: 1px solid #f7d7b4;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    padding: 5px 10%;\n    border-radius: 3px;\n    margin-top: 5px;\n}\n\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-title{\n    display: block;\n    width: 90%;\n    padding: 5px 5%;\n    border-bottom: 1px solid #f7d7b4;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    border-radius: 3px;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    border-bottom: 1px solid #f7d7b4;\n}\n.aside-title img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n    width: 22px;\n}\n.aside-title h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-ability{\n    display: block;\n    width: 100%;\n    margin-bottom: 30px;\n}\n#aside-ability-left{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50%;\n    min-width: 300px;\n}\n#aside-ability-left>div{\n    display: block;\n    width: 100%;\n    margin-top: 5px;\n}\n#aside-ability-left>div>h6{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n#aside-ability-left>div>span{\n    display: inline-block;\n    vertical-align: middle;\n    width: 220px;\n}\n#aside-ability-right{\n    display: inline-block;\n    vertical-align: middle;\n}\n#aside-ability-right>h4{\n    display: block;\n    width: 120px;\n    height: 80px;\n    padding-top: 40px;\n    border-left: 1px solid #ef8513;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 50%;\n    text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(167);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./pet.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./pet.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0aW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGV0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BldC5jc3M/ZTI3MSJdLCJuYW1lcyI6WyJQZXQiLCJwcm9wcyIsInJlYWRQZXRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImFjY291bnQiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJ0b2tlbiIsInBldCIsIndhdGNoRGF0YSIsImluZGV4T2YiLCJtZXNzYWdlIiwiaW1hZ2UiLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsImxvYWQiLCJhZGQiLCJ3YXRjaEluZm8iLCJsZW5ndGgiLCJsb2dpblJlcXVpcmVkIiwiZmFtaWxpZXNCb2FyZCIsImZhbWlseURhdGEiLCJtYXAiLCJmYW1pbHkiLCJpbmRleCIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJmcmllbmRzQm9hcmQiLCJmcmllbmREYXRhIiwiZnJpZW5kIiwicGV0X2lkIiwicGV0X25hbWUiLCJwb3N0Qm9hcmQiLCJwZXREYXRhIiwib3duZXJfaWQiLCJyZWxhdGl2ZV9pZCIsInN1Ym1pdEltZyIsImJpbmQiLCJyZXNldCIsInNraWxsQm9hcmQiLCJza2lsbCIsInRvTG93ZXJDYXNlIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwicGV0X2dlbmRlciIsIndhdGNoUGV0IiwicGV0X25hdHVyZSIsInBldF90eXBlIiwicGV0X3JlZyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsIndpbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJpIiwic2V0U3RhdGUiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJtYXJnaW4iLCJjb250YWluZXJTdHlsZSIsImltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlclJhZGl1cyIsImNvbnRlbnRTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhbGxJbWFnZXMiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSIsIklucHV0YXJlYSIsImJvcmRlciIsImNvbnRlbnQiLCJjb3VudCIsIm1heCIsImVycm9yIiwicmF3VXJsIiwidGl0bGUiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwicmVwbGFjZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9ubG9hZCIsImltZyIsIkltYWdlIiwic3JjIiwicmVzdWx0IiwiZHJhd0ltYWdlIiwiY29tcHJlc3NlZCIsInRvRGF0YVVSTCIsInJlYWRBc0RhdGFVUkwiLCJ1cmwiLCJ0eXBlIiwic3BsaXQiLCJhdG9iIiwiYmxvYlNyYyIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInRpdGxlU3R5bGUiLCJzcGFuU3R5bGUiLCJpbnB1dFN0eWxlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm91dGxpbmUiLCJyZXNpemUiLCJsaW5lU3R5bGUiLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0Iiwib3ZlcmZsb3ciLCJjYW1lcmFTdHlsZSIsImZsb2F0IiwibWFyZ2luTGVmdCIsImZpbHRlciIsImN1cnNvciIsInBvc3RTdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwiZXJyb3JTdHlsZSIsImNvdW50U3R5bGUiLCJmaWxlU3R5bGUiLCJsZWZ0Iiwib3BhY2l0eSIsImltZ1N0eWxlIiwiY2FtZXJhIiwiZWRpdElucHV0IiwibG9hZEltZyIsInN1Ym1pdFBvc3QiLCJQcm9ncmVzcyIsImZvbnRDb2xvciIsImhpbnRTdHlsZSIsInpJbmRleCIsImJhY2tTdHlsZSIsInByb2dyZXNzIiwic2hvd1Byb2dyZXNzIiwicGVyY2VudGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O3NDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBL0M7QUFDQzs7OzZCQUNTO0FBQ1YsT0FBSSxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJELEVBQW5CLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DLFNBQUtKLEtBQUwsQ0FBV00sbUJBQVg7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLTixLQUFMLENBQVdPLGNBQVgsQ0FDQyxLQUFLUCxLQUFMLENBQVdLLE9BQVgsQ0FBbUJELEVBRHBCLEVBRUMsS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CRyxLQUZwQixFQUdDLEtBQUtSLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBSHpCLEVBSUMsS0FBS0osS0FBTCxDQUFXUyxHQUFYLENBQWVDLFNB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aUJBQWlCLHNCQUFzQix3QkFBd0IsMEJBQTBCLEdBQUcsaUJBQWlCLHFCQUFxQixpQkFBaUIsc0JBQXNCLHVDQUF1QywyQkFBMkIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsc0NBQXNDLHNDQUFzQyx3Q0FBd0MsR0FBRyxtQkFBbUIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsa0JBQWtCLEdBQUcsa0JBQWtCLDRCQUE0Qiw2QkFBNkIsd0JBQXdCLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsMEJBQTBCLEdBQUcsc0JBQXNCLDRCQUE0Qiw2QkFBNkIsaUJBQWlCLHVCQUF1QixHQUFHLDBCQUEwQixxQkFBcUIsa0JBQWtCLHNCQUFzQixHQUFHLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLHlCQUF5QixHQUFHLCtCQUErQiw0QkFBNEIsNkJBQTZCLG1CQUFtQixHQUFHLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLEdBQUcsMEJBQTBCLHFCQUFxQixtQkFBbUIsbUJBQW1CLHdCQUF3QixxQ0FBcUMsdUNBQXVDLHlCQUF5Qix5QkFBeUIsR0FBRzs7QUFFcHVIOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6InBldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHJlYWRQZXRQYWdlLCB1cGRhdGVQZXRXYXRjaCwgY3JlYXRlUGV0TW9tZW50LCByZWFkUGV0TW9tZW50cywgc2hvd0FjY291bnRSZXF1aXJlZCBcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9wZXQnO1xuaW1wb3J0IHsgbm9HZXRHZW5kZXIsIG5vR2V0VHlwZSwgbm9HZXROYXR1cmUsIG5vR2V0QWJpbGl0eSB9IGZyb20gJy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IFBvc3RpbWcgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0aW1nJztcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2dyZXNzJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcGV0LmNzcyc7XG5cbmNsYXNzIFBldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFBldFBhZ2UodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cdHdhdGNoUGV0KCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMuc2hvd0FjY291bnRSZXF1aXJlZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVBldFdhdGNoKFxuXHRcdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHRcdHRoaXMucHJvcHMucGV0LndhdGNoRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgIT09IC0xID8gMCA6IDFcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHN1Ym1pdEltZyhtZXNzYWdlLCBpbWFnZSkge1xuXHRcdHRoaXMucHJvcHMuY3JlYXRlUGV0TW9tZW50KFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHRpbWFnZSxcblx0XHRcdG1lc3NhZ2Vcblx0XHQpXG5cdH1cblx0bG9hZE1vcmUoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkUGV0TW9tZW50cyhcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5wZXQubG9hZCxcblx0XHRcdHRoaXMucHJvcHMucGV0LmFkZFxuXHRcdCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGxldCB3YXRjaEluZm87XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsICYmIFxuXHRcdFx0dGhpcy5wcm9wcy5wZXQud2F0Y2hEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSAhPT0gLTFcblx0XHQpIHtcblx0XHRcdHdhdGNoSW5mbyA9IFwiV2F0Y2hlZCB8IGJ5IFwiICsgdGhpcy5wcm9wcy5wZXQud2F0Y2hEYXRhLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGV0LmxvZ2luUmVxdWlyZWQpIHtcblx0XHRcdFx0d2F0Y2hJbmZvID0gXCJQbGVhc2UgTG9naW5cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdhdGNoSW5mbyA9IFwiKyBXYXRjaCB8IGJ5IFwiICsgdGhpcy5wcm9wcy5wZXQud2F0Y2hEYXRhLmxlbmd0aDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgZmFtaWxpZXNCb2FyZCA9IHRoaXMucHJvcHMucGV0LmZhbWlseURhdGEubWFwKChmYW1pbHksIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9eyBcInBldGZhbWlseVwiICsgaW5kZXggfSBjbGFzc05hbWU9XCJtYWluLW93bmVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgZmFtaWx5LnVzZXJfaWR9PlxuXHRcdFx0XHRcdDxpbWcgc3JjID0geyBkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIGZhbWlseS51c2VyX2lkICsgXCIuanBnXCIgfSAvPlxuXHRcdFx0XHRcdDxoNT57IGZhbWlseS51c2VyX25hbWUgfTwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG4gICAgY29uc3QgZnJpZW5kc0JvYXJkID0gdGhpcy5wcm9wcy5wZXQuZnJpZW5kRGF0YS5tYXAoKGZyaWVuZCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17XCJwZXRmcmllbmRcIiArIGluZGV4fSBjbGFzc05hbWU9XCJtYWluLWZyaWVuZFwiPlxuXHRcdFx0XHQ8YSBocmVmPXtcIi9wZXQvXCIgKyBmcmllbmQucGV0X2lkfT5cblx0XHRcdFx0XHQ8aW1nIHNyYyA9IHsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIGZyaWVuZC5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gIC8+XG5cdFx0XHRcdFx0PGg2PntmcmllbmQucGV0X25hbWV9PC9oNj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgcG9zdEJvYXJkO1xuXHRcdGlmIChcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCAhPT0gbnVsbCAmJiBcblx0XHRcdChcblx0XHRcdFx0dGhpcy5wcm9wcy5wZXQucGV0RGF0YS5vd25lcl9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkIHx8XG5cdFx0XHRcdHRoaXMucHJvcHMucGV0LnBldERhdGEucmVsYXRpdmVfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZFxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0cG9zdEJvYXJkID0gPFBvc3RpbWcgXG5cdFx0XHRcdGNvbnRlbnQ9XCJcIiBcblx0XHRcdFx0bWF4PVwiMTIwXCIgXG5cdFx0XHRcdHRpdGxlPVwiU2hhcmUgbmV3IG1vbWVudFwiIFxuXHRcdFx0XHRzdWJtaXRJbWc9eyB0aGlzLnN1Ym1pdEltZy5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdHJlc2V0PXsgdGhpcy5wcm9wcy5wZXQucmVzZXQgfSBcblx0XHRcdC8+XG5cdFx0fVxuXHRcdGNvbnN0IHNraWxsQm9hcmQgPSBbJ0F0dGFjaycsICdEZWZlbmQnLCAnSGVhbHRoJywgJ1N3aWZ0JywgJ0x1Y2t5J10ubWFwKHNraWxsID0+XG5cdFx0XHQ8ZGl2IGtleT17IHNraWxsIH0+XG5cdFx0XHRcdDxoNj57IHNraWxsIH08L2g2PlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHQ8UHJvZ3Jlc3MgXG5cdFx0XHRcdFx0XHRwcm9ncmVzcz17IHRoaXMucHJvcHMucGV0LnBldERhdGFbc2tpbGwudG9Mb3dlckNhc2UoKV0gfSBcblx0XHRcdFx0XHRcdG1heD1cIjk5OVwiIFxuXHRcdFx0XHRcdFx0cGVyY2VudGFnZT1cImZhbHNlXCIgXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9hZEJ1dHRvbjtcblx0XHRpZiAoIXRoaXMucHJvcHMucGV0LmxvY2tlcikge1xuXHRcdFx0bG9hZEJ1dHRvbiA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgcmV0dXJuIChbXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0aWQ9XCJtYWluLXByb2ZpbGVcIiBcblx0XHRcdFx0XHRhbHQ9eyB0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9uYW1lIH0gXG5cdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X2lkICsgXCIvMC5wbmdcIiB9IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpbi1uYW1lXCI+XG5cdFx0XHRcdFx0XHQ8aDE+eyB0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9uYW1lIH08L2gxPlxuXHRcdFx0XHRcdFx0PGg0Pnsgbm9HZXRHZW5kZXIodGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfZ2VuZGVyKSB9PC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoNSBpZD1cIm1haW4td2F0Y2hcIiBvbkNsaWNrPXsgdGhpcy53YXRjaFBldC5iaW5kKHRoaXMpIH0+eyB3YXRjaEluZm8gfTwvaDU+XG5cdFx0XHRcdDxoNSBpZD1cIm1haW4tbmF0dXJlXCI+TmF0dXJlOiB7IG5vR2V0TmF0dXJlKHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X25hdHVyZSkgfTwvaDU+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+VHlwZTogeyBub0dldFR5cGUodGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfdHlwZSkgfTwvaDU+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XG5cdFx0XHRcdFx0UmVnIGluIGh1YjogIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X3JlZyA/IFxuXHRcdFx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9yZWcpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSA6IFxuXHRcdFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2g1PiAgICBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWZhbWlseVwiPlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJGYW1pbHlcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1odWIucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNT5GYW1pbHk8L2g1PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBmYW1pbGllc0JvYXJkIH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWZhbWlseVwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwiZnJpZW5kXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtdGVhbS5wbmdcIiAvPlxuXHRcdFx0XHRcdDxoNT5GcmllbmRzPC9oNT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgZnJpZW5kc0JvYXJkIH1cblx0XHRcdDwvbWFpbj4sXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdHsgcG9zdEJvYXJkIH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS10aXRsZVwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwibW9tZW50c1wiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLXNraWxsLnBuZ1wiIC8gPlxuXHRcdFx0XHRcdDxoND5BYmlsaXR5PC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJhc2lkZS1hYmlsaXR5XCI+XG5cdFx0XHRcdFx0PGRpdiBpZD1cImFzaWRlLWFiaWxpdHktbGVmdFwiPlxuXHRcdFx0XHRcdFx0eyBza2lsbEJvYXJkIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiYXNpZGUtYWJpbGl0eS1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdFx0XHRQbGF5ICYgV2luPGJyIC8+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YS53aW4gfVxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdGl0bGVcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cIm1vbWVudHNcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1tb21lbnQucG5nXCIgLyA+XG5cdFx0XHRcdFx0PGg0Pk1vbWVudHM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFdhdGVyZmFsbCBcblx0XHRcdFx0XHRjb2x1bW49eyB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCA/IDMgOiAyIH0gXG5cdFx0XHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLnBldC5nYWxsZXJ5RGF0YSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgbG9hZEJ1dHRvbiB9XG5cdFx0XHQ8L2FzaWRlPlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCwgcGV0OiBzdGF0ZS5wZXQgfSksXG4gIHsgXG5cdFx0cmVhZFBldFBhZ2UsIHVwZGF0ZVBldFdhdGNoLCBzaG93QWNjb3VudFJlcXVpcmVkLFxuXHRcdHJlYWRQZXRNb21lbnRzLCBjcmVhdGVQZXRNb21lbnRcblx0fVxuKShQZXQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9QZXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjk0JVwiLFxuXHRcdFx0Ym9yZGVyOiB0aGlzLnByb3BzLmJvcmRlciB8fCBcIjJweCBzb2xpZCAjZjdkN2I0XCIsXG5cdFx0XHRmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSB8fCBcIjE0cHhcIixcblx0XHRcdGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudCB8fCBcIlwiLFxuXHRcdFx0Y291bnQ6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSAtIHRoaXMucHJvcHMuY29udGVudC5sZW5ndGgsXG5cdFx0XHRsZW5ndGg6IHBhcnNlSW50KHRoaXMucHJvcHMubWF4KSxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiLFxuXHRcdFx0ZXJyb3I6IFwiXCIsXG5cdFx0XHRyYXdVcmw6IG51bGwsXG5cdFx0XHR0aXRsZTogdGhpcy5wcm9wcy50aXRsZSB8fCBudWxsLFxuXHRcdFx0cmVzZXQ6IHRoaXMucHJvcHMucmVzZXRcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZXNldCAhPSB0aGlzLnByb3BzLnJlc2V0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y29udGVudDogXCJcIiwgcmF3VXJsOiBudWxsLCByZXNldDogdGhpcy5wcm9wcy5yZXNldCwgZXJyb3I6IFwiU3VjY2VzcyFcIiwgY291bnQ6IHRoaXMuc3RhdGUubGVuZ3RoXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0ZWRpdElucHV0KGV2ZW50KSB7XG5cdFx0bGV0IGNoYW5nZWRJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZS5zdWJzdHIoMCwgdGhpcy5zdGF0ZS5sZW5ndGgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IGNoYW5nZWRJbnB1dH0pO1xuXHRcdGlmIChjaGFuZ2VkSW5wdXQucmVwbGFjZSgvXlxccysvLCBcIlwiKS5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuZXJyb3IgIT09IFwiXCIpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIlwifSk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe2NvdW50OiB0aGlzLnN0YXRlLmxlbmd0aCAtIGNoYW5nZWRJbnB1dC5sZW5ndGh9KTtcblx0fVxuXHRsb2FkSW1nKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHRsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5zcmMgPSByZWFkZXIucmVzdWx0O1xuXHRcdFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGltZy53aWR0aCA+IDgwMCAmJiBpbWcud2lkdGggPiBpbWcuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0aW1nLmhlaWdodCA9IChpbWcuaGVpZ2h0IC8gaW1nLndpZHRoKSAqIDgwMDtcblx0XHRcdFx0XHRpbWcud2lkdGggPSA4MDA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW1nLmhlaWdodCA+IDgwMCAmJiBpbWcuaGVpZ2h0ID4gaW1nLndpZHRoKSB7XG5cdFx0XHRcdFx0aW1nLndpZHRoID0gKGltZy53aWR0aCAvIGltZy5oZWlnaHQpICogODAwO1xuXHRcdFx0XHRcdGltZy5oZWlnaHQgPSA4MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBcdFx0Y2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7ICBcblx0XHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuXHRcdFx0XHRsZXQgY29tcHJlc3NlZCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cmF3VXJsOiBjb21wcmVzc2VkfSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5lcnJvciAhPT0gXCJcIikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJcIn0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0fVxuXHRzdWJtaXRQb3N0KCkge1xuXHRcdGxldCBjb250ZW50ID0gdGhpcy5zdGF0ZS5jb250ZW50LnJlcGxhY2UoL15cXHMrLywgXCJcIikucmVwbGFjZSgvXFxzKyQvLCBcIlwiKTtcblx0XHRpZiAoY29udGVudCA9PT0gXCJcIikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiUGxlYXNlIHNheSBzb21ldGhpbmdcIn0pO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUucmF3VXJsKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJQbGVhc2UgdXBsb2FkIGFuIGltYWdlXCJ9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHVybCA9IHRoaXMuc3RhdGUucmF3VXJsO1xuXHRcdFx0bGV0IHR5cGUgPSB1cmwuc3BsaXQoXCIsXCIpWzBdO1xuXHRcdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCI6XCIpWzFdO1xuXHRcdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCI7XCIpWzBdO1xuXHRcdFx0aWYgKHR5cGUgPT0gXCJpbWFnZS9qcGVnXCIgfHwgdHlwZSA9PSBcImltYWdlL3BuZ1wiKSB7XG5cdFx0XHRcdGxldCBzcmMgPSB1cmwuc3BsaXQoXCIsXCIpWzFdO1xuXHRcdFx0XHRzcmMgPSB3aW5kb3cuYXRvYihzcmMpO1xuXHRcdFx0XHRsZXQgYmxvYlNyYyA9IG5ldyBVaW50OEFycmF5KHNyYy5sZW5ndGgpO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGJsb2JTcmNbaV0gPSBzcmMuY2hhckNvZGVBdChpKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0bGV0IGltYWdlID0gbmV3IEJsb2IoW2Jsb2JTcmNdLCB7dHlwZTogdHlwZX0pO1xuXHRcdFx0XHRsZXQgbWVzc2FnZSA9IHRoaXMuc3RhdGUuY29udGVudDtcblx0XHRcdFx0dGhpcy5wcm9wcy5zdWJtaXRJbWcobWVzc2FnZSwgaW1hZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiRmlsZSB0eXBlIG5vdCBzdXBwb3J0XCJ9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aXRsZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTVweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRjb2xvcjogXCIjZWY4NTEzXCIsXG5cdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiXG5cdFx0fTtcblx0XHRsZXQgc3BhblN0eWxlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZjdmOWZjXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjIwcHggMyVcIixcblx0XHR9O1xuXHRcdGxldCBpbnB1dFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiOTglXCIsXG5cdFx0XHRwYWRkaW5nVG9wOiBcIjVweFwiLFxuXHRcdFx0cGFkZGluZ0JvdHRvbTogXCI1cHhcIixcblx0XHRcdGJvcmRlcjogdGhpcy5zdGF0ZS5ib3JkZXIsXG5cdFx0XHRoZWlnaHQ6IFwiNTBweFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIxJVwiLFxuXHRcdFx0b3V0bGluZTogXCJub25lXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRyZXNpemU6IFwibm9uZVwiLFxuXHRcdH07XG5cdFx0bGV0IGxpbmVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdG1hcmdpblRvcDogXCI1cHhcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdG92ZXJmbG93OiBcImF1dG9cIlxuXHRcdH07XG5cdFx0bGV0IGNhbWVyYVN0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwibGVmdFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxMHB4XCIsXG5cdFx0XHRmaWx0ZXI6IFwib3BhY2l0eSg1MCUpXCIsXG5cdFx0XHR3aWR0aDogXCIyMHB4XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXG5cdFx0fTtcblx0XHRsZXQgcG9zdFN0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwicmlnaHRcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjOTM0YzRjXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0cGFkZGluZzogXCIycHggNXB4XCIsXG5cdFx0XHRtYXJnaW5SaWdodDogXCIxMHB4XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXG5cdFx0fTtcblx0XHRsZXQgZXJyb3JTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcInJpZ2h0XCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxMXB4XCIsXG5cdFx0XHRtYXJnaW5SaWdodDogXCIxNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJyZWRcIlxuXHRcdH07XG5cdFx0bGV0IGNvdW50U3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJsZWZ0XCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxMXB4XCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjEwcHhcIlxuXHRcdH07XG5cdFx0bGV0IGZpbGVTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCIyMHB4XCIsXG5cdFx0XHRoZWlnaHQ6IFwiMTJweFwiLFxuXHRcdFx0bGVmdDogXCItNzZweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdG9wYWNpdHk6IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgaW1nU3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJsZWZ0XCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjVweFwiLFxuXHRcdFx0aGVpZ2h0OiBcIjE1MHB4XCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY2FtZXJhID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQVVDQVlBQUFDVFFDMitBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQkFocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1EWTNJRGM1TGpFMU56YzBOeXdnTWpBeE5TOHdNeTh6TUMweU16bzBNRG8wTWlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKMWRXbGtPalkxUlRZek9UQTJPRFpEUmpFeFJFSkJOa1V5UkRnNE4wTkZRVU5DTkRBM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qZzVOalpHUkRneU9EVXpNekV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pnNU5qWkdSRGd4T0RVek16RXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaE5ZV05wYm5SdmMyZ3BJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRrNU56QTFPR0V0WkRJM09DMDBORFprTFdFNE9EZ3ROR000TUdRNFlXSTFOek5tSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKaFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZZelJrWm1ReE1HTXRZMk5sTlMweE1UYzRMV0U1T0dRdFkyTmtabU01T0RrNVlXWXdJaTgrSUR4a1l6cDBhWFJzWlQ0Z1BISmtaanBCYkhRK0lEeHlaR1k2YkdrZ2VHMXNPbXhoYm1jOUluZ3RaR1ZtWVhWc2RDSStaMng1Y0docFkyOXVjend2Y21SbU9teHBQaUE4TDNKa1pqcEJiSFErSUR3dlpHTTZkR2wwYkdVK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K0dieVRNd0FBQUxoSlJFRlVlTnBpK1AvL1B3TXVEQVFDUUx3QWlQOFR3Q0ExQW5qTkltRFJBU0lzZ2VFRFpGa0VCQVlrV0FMRENuak1Bd2ZQQkRJTUpSWlBnTnBCVTB2Z2xqRkNHVFFIVERReTF3K0tVUUN4M2wrQUhOa2dOcEZKSDRhSlVwU0FKelVsVU11aUJVaUdOa0R6RmdnM0lJa3ZvSVpGQ2tpV29NczFJQVVqWlJZUktDVU9JTW5qTllmU1ZLZEF0ZVROeU1nSU0rd0FGdWtGYUdyd2drR1RHT2lXdkttU1llbFcxakVEc1NBUVc5RFlub2wwcTQ4QUFnd0FESXZoSFFMbGhJSUFBQUFBU1VWT1JLNUNZSUk9XCI7XG5cdFx0bGV0IGltYWdlO1xuXHRcdGlmICh0aGlzLnN0YXRlLnJhd1VybCkge1xuXHRcdFx0aW1hZ2UgPSAoPGltZyBzdHlsZT17aW1nU3R5bGV9IHNyYz17dGhpcy5zdGF0ZS5yYXdVcmx9IGFsdD1cInVwbG9hZC1pbWFnZVwiIC8+KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXtzcGFuU3R5bGV9PlxuXHRcdFx0XHQ8c3BhbiBzdHlsZT17dGl0bGVTdHlsZX0+e3RoaXMuc3RhdGUudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHQ8dGV4dGFyZWEgc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IG9uQ2hhbmdlPXt0aGlzLmVkaXRJbnB1dC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtsaW5lU3R5bGV9PlxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e2NhbWVyYVN0eWxlfSBzcmM9e2NhbWVyYX0gYWx0PVwiQUREXCIgLz5cblx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9e2ZpbGVTdHlsZX0gdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e3RoaXMubG9hZEltZy5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5zdGF0ZS5jb3VudH0ve3RoaXMuc3RhdGUubGVuZ3RofTwvc3Bhbj5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtwb3N0U3R5bGV9IG9uQ2xpY2s9e3RoaXMuc3VibWl0UG9zdC5iaW5kKHRoaXMpfT5Qb3N0PC9kaXY+XG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9e2Vycm9yU3R5bGV9Pnt0aGlzLnN0YXRlLmVycm9yfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2xpbmVTdHlsZX0+XG5cdFx0XHRcdFx0e2ltYWdlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qb3N0aW1nLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fFwiMThweFwiLFxuICAgICAgZm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCIsXG4gICAgICBmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSB8fCBcIjlweFwiLFxuICAgICAgZm9udENvbG9yOiB0aGlzLnByb3BzLmZvbnRDb2xvciB8fCBcImJsYWNrXCJcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICBmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG4gICAgICBmb250U2l6ZTogdGhpcy5zdGF0ZS5mb250U2l6ZSxcbiAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLmZvbnRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjdmOGY5XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZWUyZThcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgfTtcbiAgICBsZXQgaGludFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHpJbmRleDogXCIzXCJcbiAgICB9O1xuICAgIGxldCBiYWNrU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgdG9wOiBcIi1cIiArIHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMucHJvZ3Jlc3MgLyB0aGlzLnByb3BzLm1heCAqIDEwMCArIFwiJVwiLFxuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYjlkMTdmXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICB6SW5kZXg6IFwiMlwiXG4gICAgfTtcbiAgICBsZXQgc2hvd1Byb2dyZXNzO1xuICAgIGlmICh0aGlzLnByb3BzLnBlcmNlbnRhZ2UgPT09IFwiZmFsc2VcIikge1xuICAgICAgc2hvd1Byb2dyZXNzID0gdGhpcy5wcm9wcy5wcm9ncmVzcyArIFwiIC8gXCIgKyB0aGlzLnByb3BzLm1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1Byb2dyZXNzID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wcm9ncmVzcyAvIHRoaXMucHJvcHMubWF4ICogMTAwKSArIFwiICVcIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2hpbnRTdHlsZX0+e3Nob3dQcm9ncmVzc308L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17YmFja1N0eWxlfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbiNtYWluLXByb2ZpbGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuI21haW4tbmFtZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMTBweCA1JTtcXG59XFxuI21haW4tbmFtZSBoMXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jbWFpbi1uYW1lIGg0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNtYWluLXdhdGNoe1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI21haW4tbmF0dXJle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5tYWluLXRpdGxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiA4cHggNSU7XFxufVxcblxcbi5tYWluLWZhbWlseSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTIlO1xcbiAgICBwYWRkaW5nOiA1cHggNCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ubWFpbi1mYW1pbHkgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgNSU7XFxufVxcbi5tYWluLWZhbWlseSBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1haW4tb3duZXJ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tb3duZXIgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1haW4tb3duZXIgaDV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tYWluLWZyaWVuZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMxJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLm1haW4tZnJpZW5kIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5tYWluLWZyaWVuZCBoNntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1O1xcbiAgICBwYWRkaW5nOiA1cHggMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuXFxuI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5hc2lkZS10aXRsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDVweCA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7IFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZDdiNDtcXG59XFxuLmFzaWRlLXRpdGxlIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICB3aWR0aDogMjJweDtcXG59XFxuLmFzaWRlLXRpdGxlIGg0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYXNpZGUtYWJpbGl0eXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1sZWZ0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LWxlZnQ+ZGl2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdD5kaXY+aDZ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1sZWZ0PmRpdj5zcGFue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktcmlnaHR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI2FzaWRlLWFiaWxpdHktcmlnaHQ+aDR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VmODUxMztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZjg1MTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvcGV0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BldC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGV0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGV0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9wZXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==