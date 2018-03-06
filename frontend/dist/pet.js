webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _pet = __webpack_require__(62);

var _noToInfo = __webpack_require__(57);

var _config = __webpack_require__(5);

var _Postimg = __webpack_require__(154);

var _Postimg2 = _interopRequireDefault(_Postimg);

var _Progress = __webpack_require__(155);

var _Progress2 = _interopRequireDefault(_Progress);

var _Waterfall = __webpack_require__(150);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(162);

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
			var momentGallery = _react2.default.createElement(_Waterfall2.default, {
				column: window.innerWidth > 900 ? 3 : 2,
				image: this.props.pet.galleryData,
				fontFamily: '\'Rubik\', sans-serif'
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
				momentGallery,
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

/***/ 150:
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

/***/ 154:
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-profile{\n    display: block;\n    width: 100%;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n#main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n}\n#main-name h1{\n    display: inline-block;\n    margin-right: 5%;\n    vertical-align: middle;\n}\n#main-name h4{\n    display: inline-block;\n    vertical-align: middle;\n}\n#main-watch{\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    background-color: #ef8513;\n    border-radius: 5px;\n    width: 70%;\n    padding: 5px 0;\n    margin-left: 5%;\n    border-bottom: 20px;\n    color: white;\n    cursor: pointer;\n}\n#main-nature{\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 15px;\n    margin-bottom: 8px;\n    padding-top: 15px;\n    border-top: 1px solid #e5e5e5;\n    font-weight: bold;\n}\n.main-title{\n    display: block;\n    width: 90%;\n    margin: 8px 5%;\n}\n\n.main-family {\n    display: block;\n    width: 92%;\n    padding: 5px 4%;\n    margin-bottom: 15px;\n    border-left: 4px solid black;\n    border-bottom: 1px solid #e5e5e5;\n    margin-top: 30px;\n}\n.main-family img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 15px;\n    margin: 0 5%;\n}\n.main-family h5{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n.main-owner{\n    display: inline-block;\n    vertical-align: top;\n    width: 35%;\n    margin-right: 15%;\n    text-align: center;\n}\n.main-owner img{\n    display: block;\n    width: 100%;\n    border-radius: 50%;\n}\n.main-owner h5{\n    display: block;\n    margin-top: 10px;\n    font-style: italic;\n}\n\n.main-friend {\n    display: inline-block;\n    width: 31%;\n    margin-right: 2%;\n    vertical-align: top;\n    margin-bottom: 10px;\n}\n.main-friend img{\n    display: block;\n    width: 100%;\n    border-radius: 3px;\n}\n.main-friend h6{\n    display: block;\n    width: 80%;\n    border-bottom: 1px solid #f7d7b4;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    padding: 5px 10%;\n    border-radius: 3px;\n    margin-top: 5px;\n}\n\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-title{\n    display: block;\n    width: 90%;\n    padding: 5px 5%;\n    border-bottom: 1px solid #f7d7b4;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    border-radius: 3px;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    border-bottom: 1px solid #f7d7b4;\n}\n.aside-title img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n    width: 22px;\n}\n.aside-title h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-ability{\n    display: block;\n    width: 100%;\n    margin-bottom: 30px;\n}\n#aside-ability-left{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50%;\n    min-width: 300px;\n}\n#aside-ability-left>div{\n    display: block;\n    width: 100%;\n    margin-top: 5px;\n}\n#aside-ability-left>div>h6{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n#aside-ability-left>div>span{\n    display: inline-block;\n    vertical-align: middle;\n    width: 220px;\n}\n#aside-ability-right{\n    display: inline-block;\n    vertical-align: middle;\n}\n#aside-ability-right>h4{\n    display: block;\n    width: 120px;\n    height: 80px;\n    padding-top: 40px;\n    border-left: 1px solid #ef8513;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 50%;\n    text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(157);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0aW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGV0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BldC5jc3M/ZTI3MSJdLCJuYW1lcyI6WyJQZXQiLCJwcm9wcyIsInJlYWRQZXRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImFjY291bnQiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJ0b2tlbiIsInBldCIsIndhdGNoRGF0YSIsImluZGV4T2YiLCJtZXNzYWdlIiwiaW1hZ2UiLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsImxvYWQiLCJhZGQiLCJ3YXRjaEluZm8iLCJsZW5ndGgiLCJsb2dpblJlcXVpcmVkIiwiZmFtaWxpZXNCb2FyZCIsImZhbWlseURhdGEiLCJtYXAiLCJmYW1pbHkiLCJpbmRleCIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJmcmllbmRzQm9hcmQiLCJmcmllbmREYXRhIiwiZnJpZW5kIiwicGV0X2lkIiwicGV0X25hbWUiLCJwb3N0Qm9hcmQiLCJwZXREYXRhIiwib3duZXJfaWQiLCJyZWxhdGl2ZV9pZCIsInN1Ym1pdEltZyIsImJpbmQiLCJyZXNldCIsInNraWxsQm9hcmQiLCJza2lsbCIsInRvTG93ZXJDYXNlIiwibW9tZW50R2FsbGVyeSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsInBldF9nZW5kZXIiLCJ3YXRjaFBldCIsInBldF9uYXR1cmUiLCJwZXRfdHlwZSIsInBldF9yZWciLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJ3aW4iLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJJbnB1dGFyZWEiLCJib3JkZXIiLCJjb250ZW50IiwiY291bnQiLCJtYXgiLCJlcnJvciIsInJhd1VybCIsInRpdGxlIiwiZXZlbnQiLCJjaGFuZ2VkSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1YnN0ciIsInJlcGxhY2UiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJvbmxvYWQiLCJpbWciLCJJbWFnZSIsInNyYyIsInJlc3VsdCIsImRyYXdJbWFnZSIsImNvbXByZXNzZWQiLCJ0b0RhdGFVUkwiLCJyZWFkQXNEYXRhVVJMIiwidXJsIiwidHlwZSIsInNwbGl0IiwiYXRvYiIsImJsb2JTcmMiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJ0aXRsZVN0eWxlIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJvdXRsaW5lIiwicmVzaXplIiwibGluZVN0eWxlIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsIm92ZXJmbG93IiwiY2FtZXJhU3R5bGUiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJmaWx0ZXIiLCJjdXJzb3IiLCJwb3N0U3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsImVycm9yU3R5bGUiLCJjb3VudFN0eWxlIiwiZmlsZVN0eWxlIiwibGVmdCIsIm9wYWNpdHkiLCJpbWdTdHlsZSIsImNhbWVyYSIsImVkaXRJbnB1dCIsImxvYWRJbWciLCJzdWJtaXRQb3N0IiwiUHJvZ3Jlc3MiLCJmb250Q29sb3IiLCJoaW50U3R5bGUiLCJ6SW5kZXgiLCJiYWNrU3R5bGUiLCJwcm9ncmVzcyIsInNob3dQcm9ncmVzcyIsInBlcmNlbnRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxHOzs7Ozs7Ozs7OztzQ0FDZ0I7QUFDcEIsUUFBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCLEtBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQS9DO0FBQ0M7Ozs2QkFDUztBQUNWLE9BQUksS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CRCxFQUFuQixLQUEwQixJQUE5QixFQUFvQztBQUNuQyxTQUFLSixLQUFMLENBQVdNLG1CQUFYO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBS04sS0FBTCxDQUFXTyxjQUFYLENBQ0MsS0FBS1AsS0FBTCxDQUFXSyxPQUFYLENBQW1CRCxFQURwQixFQUVDLEtBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkcsS0FGcEIsRUFHQyxLQUFLUixLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxFQUh6QixFQUlDLEtBQUtKLEtBQUwsQ0FB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QyxzQ0FBc0MsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxhQUFhLDRCQUE0QixpQkFBaUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsR0FBRyxpQkFBaUIscUJBQXFCLGlCQUFpQixzQkFBc0IsdUNBQXVDLDJCQUEyQiwwQkFBMEIsdUJBQXVCLHlCQUF5QixzQ0FBc0Msc0NBQXNDLHdDQUF3QyxHQUFHLG1CQUFtQiw0QkFBNEIsNkJBQTZCLHVCQUF1QixrQkFBa0IsR0FBRyxrQkFBa0IsNEJBQTRCLDZCQUE2Qix3QkFBd0IsR0FBRyxtQkFBbUIscUJBQXFCLGtCQUFrQiwwQkFBMEIsR0FBRyxzQkFBc0IsNEJBQTRCLDZCQUE2QixpQkFBaUIsdUJBQXVCLEdBQUcsMEJBQTBCLHFCQUFxQixrQkFBa0Isc0JBQXNCLEdBQUcsNkJBQTZCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLEdBQUcsK0JBQStCLDRCQUE0Qiw2QkFBNkIsbUJBQW1CLEdBQUcsdUJBQXVCLDRCQUE0Qiw2QkFBNkIsR0FBRywwQkFBMEIscUJBQXFCLG1CQUFtQixtQkFBbUIsd0JBQXdCLHFDQUFxQyx1Q0FBdUMseUJBQXlCLHlCQUF5QixHQUFHOztBQUVwdUg7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoicGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0cmVhZFBldFBhZ2UsIHVwZGF0ZVBldFdhdGNoLCBjcmVhdGVQZXRNb21lbnQsIHJlYWRQZXRNb21lbnRzLCBzaG93QWNjb3VudFJlcXVpcmVkIFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3BldCc7XG5pbXBvcnQgeyBub0dldEdlbmRlciwgbm9HZXRUeXBlLCBub0dldE5hdHVyZSwgbm9HZXRBYmlsaXR5IH0gZnJvbSAnLi4vaGVscGVycy9ub1RvSW5mbyc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgUG9zdGltZyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RpbWcnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3MnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9wZXQuY3NzJztcblxuY2xhc3MgUGV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkUGV0UGFnZSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gIH1cblx0d2F0Y2hQZXQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zaG93QWNjb3VudFJlcXVpcmVkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlUGV0V2F0Y2goXG5cdFx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdFx0dGhpcy5wcm9wcy5wZXQud2F0Y2hEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSAhPT0gLTEgPyAwIDogMVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0c3VibWl0SW1nKG1lc3NhZ2UsIGltYWdlKSB7XG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVQZXRNb21lbnQoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdGltYWdlLFxuXHRcdFx0bWVzc2FnZVxuXHRcdClcblx0fVxuXHRsb2FkTW9yZSgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRQZXRNb21lbnRzKFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHR0aGlzLnByb3BzLnBldC5sb2FkLFxuXHRcdFx0dGhpcy5wcm9wcy5wZXQuYWRkXG5cdFx0KTtcblx0fVxuICByZW5kZXIoKSB7XG5cdFx0bGV0IHdhdGNoSW5mbztcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwgJiYgXG5cdFx0XHR0aGlzLnByb3BzLnBldC53YXRjaERhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpICE9PSAtMVxuXHRcdCkge1xuXHRcdFx0d2F0Y2hJbmZvID0gXCJXYXRjaGVkIHwgYnkgXCIgKyB0aGlzLnByb3BzLnBldC53YXRjaERhdGEubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5wZXQubG9naW5SZXF1aXJlZCkge1xuXHRcdFx0XHR3YXRjaEluZm8gPSBcIlBsZWFzZSBMb2dpblwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2F0Y2hJbmZvID0gXCIrIFdhdGNoIHwgYnkgXCIgKyB0aGlzLnByb3BzLnBldC53YXRjaERhdGEubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBmYW1pbGllc0JvYXJkID0gdGhpcy5wcm9wcy5wZXQuZmFtaWx5RGF0YS5tYXAoKGZhbWlseSwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17IFwicGV0ZmFtaWx5XCIgKyBpbmRleCB9IGNsYXNzTmFtZT1cIm1haW4tb3duZXJcIj5cblx0XHRcdFx0PGEgaHJlZj17IFwiL3VzZXIvXCIgKyBmYW1pbHkudXNlcl9pZH0+XG5cdFx0XHRcdFx0PGltZyBzcmMgPSB7IGRvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgZmFtaWx5LnVzZXJfaWQgKyBcIi5qcGdcIiB9IC8+XG5cdFx0XHRcdFx0PGg1PnsgZmFtaWx5LnVzZXJfbmFtZSB9PC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcbiAgICBjb25zdCBmcmllbmRzQm9hcmQgPSB0aGlzLnByb3BzLnBldC5mcmllbmREYXRhLm1hcCgoZnJpZW5kLCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXtcInBldGZyaWVuZFwiICsgaW5kZXh9IGNsYXNzTmFtZT1cIm1haW4tZnJpZW5kXCI+XG5cdFx0XHRcdDxhIGhyZWY9e1wiL3BldC9cIiArIGZyaWVuZC5wZXRfaWR9PlxuXHRcdFx0XHRcdDxpbWcgc3JjID0geyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgZnJpZW5kLnBldF9pZCArIFwiLzAucG5nXCIgfSAgLz5cblx0XHRcdFx0XHQ8aDY+e2ZyaWVuZC5wZXRfbmFtZX08L2g2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBwb3N0Qm9hcmQ7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsICYmIFxuXHRcdFx0KFxuXHRcdFx0XHR0aGlzLnByb3BzLnBldC5wZXREYXRhLm93bmVyX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWQgfHxcblx0XHRcdFx0dGhpcy5wcm9wcy5wZXQucGV0RGF0YS5yZWxhdGl2ZV9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRwb3N0Qm9hcmQgPSA8UG9zdGltZyBcblx0XHRcdFx0Y29udGVudD1cIlwiIFxuXHRcdFx0XHRtYXg9XCIxMjBcIiBcblx0XHRcdFx0dGl0bGU9XCJTaGFyZSBuZXcgbW9tZW50XCIgXG5cdFx0XHRcdHN1Ym1pdEltZz17IHRoaXMuc3VibWl0SW1nLmJpbmQodGhpcykgfSBcblx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0cmVzZXQ9eyB0aGlzLnByb3BzLnBldC5yZXNldCB9IFxuXHRcdFx0Lz5cblx0XHR9XG5cdFx0Y29uc3Qgc2tpbGxCb2FyZCA9IFsnQXR0YWNrJywgJ0RlZmVuZCcsICdIZWFsdGgnLCAnU3dpZnQnLCAnTHVja3knXS5tYXAoc2tpbGwgPT5cblx0XHRcdDxkaXYga2V5PXsgc2tpbGwgfT5cblx0XHRcdFx0PGg2Pnsgc2tpbGwgfTwvaDY+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxQcm9ncmVzcyBcblx0XHRcdFx0XHRcdHByb2dyZXNzPXsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YVtza2lsbC50b0xvd2VyQ2FzZSgpXSB9IFxuXHRcdFx0XHRcdFx0bWF4PVwiOTk5XCIgXG5cdFx0XHRcdFx0XHRwZXJjZW50YWdlPVwiZmFsc2VcIiBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGNvbnN0IG1vbWVudEdhbGxlcnkgPSA8V2F0ZXJmYWxsIFxuXHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAzIDogMiB9IFxuXHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLnBldC5nYWxsZXJ5RGF0YSB9IFxuXHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHQvPlxuXHRcdGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy5wZXQubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRpZD1cIm1haW4tcHJvZmlsZVwiIFxuXHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X25hbWUgfSBcblx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLW5hbWVcIj5cblx0XHRcdFx0XHRcdDxoMT57IHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X25hbWUgfTwvaDE+XG5cdFx0XHRcdFx0XHQ8aDQ+eyBub0dldEdlbmRlcih0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9nZW5kZXIpIH08L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGg1IGlkPVwibWFpbi13YXRjaFwiIG9uQ2xpY2s9eyB0aGlzLndhdGNoUGV0LmJpbmQodGhpcykgfT57IHdhdGNoSW5mbyB9PC9oNT5cblx0XHRcdFx0PGg1IGlkPVwibWFpbi1uYXR1cmVcIj5OYXR1cmU6IHsgbm9HZXROYXR1cmUodGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfbmF0dXJlKSB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5UeXBlOiB7IG5vR2V0VHlwZSh0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF90eXBlKSB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cblx0XHRcdFx0XHRSZWcgaW4gaHViOiAgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfcmVnID8gXG5cdFx0XHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X3JlZykudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApIDogXG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvaDU+ICAgIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cIkZhbWlseVwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWh1Yi5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg1PkZhbWlseTwvaDU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IGZhbWlsaWVzQm9hcmQgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJmcmllbmRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy10ZWFtLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg1PkZyaWVuZHM8L2g1PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBmcmllbmRzQm9hcmQgfVxuXHRcdFx0PC9tYWluPixcblx0XHRcdDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cblx0XHRcdFx0eyBwb3N0Qm9hcmQgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJtb21lbnRzXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtc2tpbGwucG5nXCIgLyA+XG5cdFx0XHRcdFx0PGg0PkFiaWxpdHk8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cImFzaWRlLWFiaWxpdHlcIj5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiYXNpZGUtYWJpbGl0eS1sZWZ0XCI+XG5cdFx0XHRcdFx0XHR7IHNraWxsQm9hcmQgfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJhc2lkZS1hYmlsaXR5LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0XHRcdFBsYXkgJiBXaW48YnIgLz5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLnBldC5wZXREYXRhLndpbiB9XG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS10aXRsZVwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwibW9tZW50c1wiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLW1vbWVudC5wbmdcIiAvID5cblx0XHRcdFx0XHQ8aDQ+TW9tZW50czwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IG1vbWVudEdhbGxlcnkgfVxuXHRcdFx0XHR7IGxvYWRCdXR0b24gfVxuXHRcdFx0PC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIHBldDogc3RhdGUucGV0IH0pLFxuICB7IFxuXHRcdHJlYWRQZXRQYWdlLCB1cGRhdGVQZXRXYXRjaCwgc2hvd0FjY291bnRSZXF1aXJlZCxcblx0XHRyZWFkUGV0TW9tZW50cywgY3JlYXRlUGV0TW9tZW50XG5cdH1cbikoUGV0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvUGV0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCI5NCVcIixcblx0XHRcdGJvcmRlcjogdGhpcy5wcm9wcy5ib3JkZXIgfHwgXCIycHggc29saWQgI2Y3ZDdiNFwiLFxuXHRcdFx0Zm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgfHwgXCIxNHB4XCIsXG5cdFx0XHRjb250ZW50OiB0aGlzLnByb3BzLmNvbnRlbnQgfHwgXCJcIixcblx0XHRcdGNvdW50OiBwYXJzZUludCh0aGlzLnByb3BzLm1heCkgLSB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoLFxuXHRcdFx0bGVuZ3RoOiBwYXJzZUludCh0aGlzLnByb3BzLm1heCksXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGVycm9yOiBcIlwiLFxuXHRcdFx0cmF3VXJsOiBudWxsLFxuXHRcdFx0dGl0bGU6IHRoaXMucHJvcHMudGl0bGUgfHwgbnVsbCxcblx0XHRcdHJlc2V0OiB0aGlzLnByb3BzLnJlc2V0XG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVzZXQgIT0gdGhpcy5wcm9wcy5yZXNldCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCIsIHJhd1VybDogbnVsbCwgcmVzZXQ6IHRoaXMucHJvcHMucmVzZXQsIGVycm9yOiBcIlN1Y2Nlc3MhXCIsIGNvdW50OiB0aGlzLnN0YXRlLmxlbmd0aFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGVkaXRJbnB1dChldmVudCkge1xuXHRcdGxldCBjaGFuZ2VkSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUuc3Vic3RyKDAsIHRoaXMuc3RhdGUubGVuZ3RoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjaGFuZ2VkSW5wdXR9KTtcblx0XHRpZiAoY2hhbmdlZElucHV0LnJlcGxhY2UoL15cXHMrLywgXCJcIikucmVwbGFjZSgvXFxzKyQvLCBcIlwiKSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmVycm9yICE9PSBcIlwiKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJcIn0pO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtjb3VudDogdGhpcy5zdGF0ZS5sZW5ndGggLSBjaGFuZ2VkSW5wdXQubGVuZ3RofSk7XG5cdH1cblx0bG9hZEltZyhldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcuc3JjID0gcmVhZGVyLnJlc3VsdDtcblx0XHRcdGltZy5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChpbWcud2lkdGggPiA4MDAgJiYgaW1nLndpZHRoID4gaW1nLmhlaWdodCkge1xuXHRcdFx0XHRcdGltZy5oZWlnaHQgPSAoaW1nLmhlaWdodCAvIGltZy53aWR0aCkgKiA4MDA7XG5cdFx0XHRcdFx0aW1nLndpZHRoID0gODAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGltZy5oZWlnaHQgPiA4MDAgJiYgaW1nLmhlaWdodCA+IGltZy53aWR0aCkge1xuXHRcdFx0XHRcdGltZy53aWR0aCA9IChpbWcud2lkdGggLyBpbWcuaGVpZ2h0KSAqIDgwMDtcblx0XHRcdFx0XHRpbWcuaGVpZ2h0ID0gODAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgXHRcdGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0OyAgXG5cdFx0XHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcblx0XHRcdFx0bGV0IGNvbXByZXNzZWQgPSBjYW52YXMudG9EYXRhVVJMKCk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Jhd1VybDogY29tcHJlc3NlZH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuZXJyb3IgIT09IFwiXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiXCJ9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cdH1cblx0c3VibWl0UG9zdCgpIHtcblx0XHRsZXQgY29udGVudCA9IHRoaXMuc3RhdGUuY29udGVudC5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpLnJlcGxhY2UoL1xccyskLywgXCJcIik7XG5cdFx0aWYgKGNvbnRlbnQgPT09IFwiXCIpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIlBsZWFzZSBzYXkgc29tZXRoaW5nXCJ9KTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnJhd1VybCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiUGxlYXNlIHVwbG9hZCBhbiBpbWFnZVwifSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB1cmwgPSB0aGlzLnN0YXRlLnJhd1VybDtcblx0XHRcdGxldCB0eXBlID0gdXJsLnNwbGl0KFwiLFwiKVswXTtcblx0XHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiOlwiKVsxXTtcblx0XHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiO1wiKVswXTtcblx0XHRcdGlmICh0eXBlID09IFwiaW1hZ2UvanBlZ1wiIHx8IHR5cGUgPT0gXCJpbWFnZS9wbmdcIikge1xuXHRcdFx0XHRsZXQgc3JjID0gdXJsLnNwbGl0KFwiLFwiKVsxXTtcblx0XHRcdFx0c3JjID0gd2luZG93LmF0b2Ioc3JjKTtcblx0XHRcdFx0bGV0IGJsb2JTcmMgPSBuZXcgVWludDhBcnJheShzcmMubGVuZ3RoKTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRibG9iU3JjW2ldID0gc3JjLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdGxldCBpbWFnZSA9IG5ldyBCbG9iKFtibG9iU3JjXSwge3R5cGU6IHR5cGV9KTtcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLmNvbnRlbnQ7XG5cdFx0XHRcdHRoaXMucHJvcHMuc3VibWl0SW1nKG1lc3NhZ2UsIGltYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIkZpbGUgdHlwZSBub3Qgc3VwcG9ydFwifSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGl0bGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdGZvbnRTaXplOiBcIjE1cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Y29sb3I6IFwiI2VmODUxM1wiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuXHRcdH07XG5cdFx0bGV0IHNwYW5TdHlsZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmY1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiLFxuXHRcdFx0cGFkZGluZzogXCIyMHB4IDMlXCIsXG5cdFx0fTtcblx0XHRsZXQgaW5wdXRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjk4JVwiLFxuXHRcdFx0cGFkZGluZ1RvcDogXCI1cHhcIixcblx0XHRcdHBhZGRpbmdCb3R0b206IFwiNXB4XCIsXG5cdFx0XHRib3JkZXI6IHRoaXMuc3RhdGUuYm9yZGVyLFxuXHRcdFx0aGVpZ2h0OiBcIjUwcHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiB0aGlzLnN0YXRlLmZvbnRTaXplLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMSVcIixcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0cmVzaXplOiBcIm5vbmVcIixcblx0XHR9O1xuXHRcdGxldCBsaW5lU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiNXB4XCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIjIwcHhcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHRvdmVyZmxvdzogXCJhdXRvXCJcblx0XHR9O1xuXHRcdGxldCBjYW1lcmFTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcImxlZnRcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuXHRcdFx0ZmlsdGVyOiBcIm9wYWNpdHkoNTAlKVwiLFxuXHRcdFx0d2lkdGg6IFwiMjBweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IHBvc3RTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcInJpZ2h0XCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzkzNGM0Y1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdHBhZGRpbmc6IFwiMnB4IDVweFwiLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IGVycm9yU3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJyaWdodFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuXHRcdFx0Y29sb3I6IFwicmVkXCJcblx0XHR9O1xuXHRcdGxldCBjb3VudFN0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwibGVmdFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxMHB4XCJcblx0XHR9O1xuXHRcdGxldCBmaWxlU3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiMjBweFwiLFxuXHRcdFx0aGVpZ2h0OiBcIjEycHhcIixcblx0XHRcdGxlZnQ6IFwiLTc2cHhcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRvcGFjaXR5OiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGltZ1N0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwibGVmdFwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCI1cHhcIixcblx0XHRcdGhlaWdodDogXCIxNTBweFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNhbWVyYSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFVQ0FZQUFBQ1RRQzIrQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUJBaHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNRFkzSURjNUxqRTFOemMwTnl3Z01qQXhOUzh3TXk4ek1DMHlNem8wTURvME1pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjFkV2xrT2pZMVJUWXpPVEEyT0RaRFJqRXhSRUpCTmtVeVJEZzROME5GUVVOQ05EQTNJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPamc1TmpaR1JEZ3lPRFV6TXpFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qZzVOalpHUkRneE9EVXpNekV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hOWVdOcGJuUnZjMmdwSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1UazVOekExT0dFdFpESTNPQzAwTkRaa0xXRTRPRGd0TkdNNE1HUTRZV0kxTnpObUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2WXpSa1ptUXhNR010WTJObE5TMHhNVGM0TFdFNU9HUXRZMk5rWm1NNU9EazVZV1l3SWk4K0lEeGtZenAwYVhSc1pUNGdQSEprWmpwQmJIUStJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlJbmd0WkdWbVlYVnNkQ0krWjJ4NWNHaHBZMjl1Y3p3dmNtUm1PbXhwUGlBOEwzSmtaanBCYkhRK0lEd3ZaR002ZEdsMGJHVStJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtHYnlUTXdBQUFMaEpSRUZVZU5waStQLy9Qd011REFRQ1FMd0FpUDhUd0NBMUFuak5JbURSQVNJc2dlRURaRmtFQkFZa1dBTERDbmpNQXdmUEJESU1KUlpQZ05wQlUwdmdsakZDR1RRSFREUXkxdytLVVFDeDNsK0FITmtnTnBGSkg0YUpVcFNBSnpVbFVNdWlCVWlHTmtEekZnZzNJSWt2b0laRkNraVdvTXMxSUFValpSWVJLQ1VPSU1uak5ZZlNWS2RBdGVUTnlNZ0lNK3dBRnVrRmFHcndna0dUR09pV3ZLbVNZZWxXMWpFRHNTQVFXOURZbm9sMHE0OEFBZ3dBREl2aEhRTGxoSUlBQUFBQVNVVk9SSzVDWUlJPVwiO1xuXHRcdGxldCBpbWFnZTtcblx0XHRpZiAodGhpcy5zdGF0ZS5yYXdVcmwpIHtcblx0XHRcdGltYWdlID0gKDxpbWcgc3R5bGU9e2ltZ1N0eWxlfSBzcmM9e3RoaXMuc3RhdGUucmF3VXJsfSBhbHQ9XCJ1cGxvYWQtaW1hZ2VcIiAvPik7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cblx0XHRcdFx0PHNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9Pnt0aGlzLnN0YXRlLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0PHRleHRhcmVhIHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5lZGl0SW5wdXQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PGRpdiBzdHlsZT17bGluZVN0eWxlfT5cblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXtjYW1lcmFTdHlsZX0gc3JjPXtjYW1lcmF9IGFsdD1cIkFERFwiIC8+XG5cdFx0XHRcdFx0PGlucHV0IHN0eWxlPXtmaWxlU3R5bGV9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXt0aGlzLmxvYWRJbWcuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17Y291bnRTdHlsZX0+e3RoaXMuc3RhdGUuY291bnR9L3t0aGlzLnN0YXRlLmxlbmd0aH08L3NwYW4+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17cG9zdFN0eWxlfSBvbkNsaWNrPXt0aGlzLnN1Ym1pdFBvc3QuYmluZCh0aGlzKX0+UG9zdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXtlcnJvclN0eWxlfT57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtsaW5lU3R5bGV9PlxuXHRcdFx0XHRcdHtpbWFnZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUG9zdGltZy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHxcIjE4cHhcIixcbiAgICAgIGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiLFxuICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgfHwgXCI5cHhcIixcbiAgICAgIGZvbnRDb2xvcjogdGhpcy5wcm9wcy5mb250Q29sb3IgfHwgXCJibGFja1wiXG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgZm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuICAgICAgZm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG4gICAgICBjb2xvcjogdGhpcy5zdGF0ZS5mb250Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjhmOVwiLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGVlMmU4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgIH07XG4gICAgbGV0IGhpbnRTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB6SW5kZXg6IFwiM1wiXG4gICAgfTtcbiAgICBsZXQgYmFja1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHRvcDogXCItXCIgKyB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnByb2dyZXNzIC8gdGhpcy5wcm9wcy5tYXggKiAxMDAgKyBcIiVcIixcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I5ZDE3ZlwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgekluZGV4OiBcIjJcIlxuICAgIH07XG4gICAgbGV0IHNob3dQcm9ncmVzcztcbiAgICBpZiAodGhpcy5wcm9wcy5wZXJjZW50YWdlID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHNob3dQcm9ncmVzcyA9IHRoaXMucHJvcHMucHJvZ3Jlc3MgKyBcIiAvIFwiICsgdGhpcy5wcm9wcy5tYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dQcm9ncmVzcyA9IHBhcnNlSW50KHRoaXMucHJvcHMucHJvZ3Jlc3MgLyB0aGlzLnByb3BzLm1heCAqIDEwMCkgKyBcIiAlXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtoaW50U3R5bGV9PntzaG93UHJvZ3Jlc3N9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2JhY2tTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3MuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4jbWFpbi1wcm9maWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiNtYWluLW5hbWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxufVxcbiNtYWluLW5hbWUgaDF7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI21haW4tbmFtZSBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jbWFpbi13YXRjaHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNtYWluLW5hdHVyZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubWFpbi10aXRsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogOHB4IDUlO1xcbn1cXG5cXG4ubWFpbi1mYW1pbHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkyJTtcXG4gICAgcGFkZGluZzogNXB4IDQlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLm1haW4tZmFtaWx5IGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luOiAwIDUlO1xcbn1cXG4ubWFpbi1mYW1pbHkgaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW93bmVye1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLW93bmVyIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLW93bmVyIGg1e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWFpbi1mcmllbmQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMSU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tYWluLWZyaWVuZCBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubWFpbi1mcmllbmQgaDZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTtcXG4gICAgcGFkZGluZzogNXB4IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4uYXNpZGUtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA1cHggNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1OyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Q3YjQ7XFxufVxcbi5hc2lkZS10aXRsZSBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgd2lkdGg6IDIycHg7XFxufVxcbi5hc2lkZS10aXRsZSBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FzaWRlLWFiaWxpdHl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1sZWZ0PmRpdntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LWxlZnQ+ZGl2Pmg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdD5kaXY+c3BhbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LXJpZ2h0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNhc2lkZS1hYmlsaXR5LXJpZ2h0Pmg0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZjg1MTM7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3BldC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wZXQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BldC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BldC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcGV0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=