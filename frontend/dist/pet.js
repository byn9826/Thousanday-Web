webpackJsonp([2],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _pet = __webpack_require__(70);

var _noToInfo = __webpack_require__(61);

var _config = __webpack_require__(2);

var _Postimg = __webpack_require__(371);

var _Postimg2 = _interopRequireDefault(_Postimg);

var _Progress = __webpack_require__(372);

var _Progress2 = _interopRequireDefault(_Progress);

var _Waterfall = __webpack_require__(205);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(413);

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
						_react2.default.createElement('img', { src: _config.domainUrl + "/public/user/" + family.user_id + ".jpg" }),
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
						_react2.default.createElement('img', { src: _config.domainUrl + "/public/pet/" + friend.pet_id + "/0.png" }),
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
					src: _config.domainUrl + "/public/pet/" + this.props.pet.petData.pet_id + "/0.png"
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
					{ className: 'main-title' },
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

/***/ 372:
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

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*pet page*/\n#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-profile{\n    display: block;\n    width: 100%;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n#main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n}\n#main-name h1{\n    display: inline-block;\n    margin-right: 5%;\n    vertical-align: middle;\n}\n#main-name h4{\n    display: inline-block;\n    vertical-align: middle;\n}\n#main-watch{\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    background-color: #ef8513;\n    border-radius: 5px;\n    width: 70%;\n    padding: 5px 0;\n    margin-left: 5%;\n    border-bottom: 20px;\n    color: white;\n    cursor: pointer;\n}\n#main-nature{\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 15px;\n    margin-bottom: 8px;\n    padding-top: 15px;\n    border-top: 1px solid #e5e5e5;\n    font-weight: bold;\n}\n.main-title{\n    display: block;\n    width: 90%;\n    margin: 8px 5%;\n}\n\n.main-family {\n    display: block;\n    width: 92%;\n    padding: 5px 4%;\n    margin-bottom: 15px;\n    border-left: 4px solid black;\n    border-bottom: 1px solid #e5e5e5;\n    margin-top: 30px;\n}\n.main-family img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 15px;\n    margin: 0 5%;\n}\n.main-family h5{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n.main-owner{\n    display: inline-block;\n    vertical-align: top;\n    width: 35%;\n    margin-right: 15%;\n    text-align: center;\n}\n.main-owner img{\n    display: block;\n    width: 100%;\n    border-radius: 50%;\n}\n.main-owner h5{\n    display: block;\n    margin-top: 10px;\n    font-style: italic;\n}\n\n.main-friend {\n    display: inline-block;\n    width: 31%;\n    margin-right: 2%;\n    vertical-align: top;\n    margin-bottom: 10px;\n}\n.main-friend img{\n    display: block;\n    width: 100%;\n    border-radius: 3px;\n}\n.main-friend h6{\n    display: block;\n    width: 80%;\n    border-bottom: 1px solid #f7d7b4;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    padding: 5px 10%;\n    border-radius: 3px;\n    margin-top: 5px;\n}\n\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-title{\n    display: block;\n    width: 90%;\n    padding: 5px 5%;\n    border-bottom: 1px solid #f7d7b4;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    border-radius: 3px;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    border-bottom: 1px solid #f7d7b4;\n}\n.aside-title img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n    width: 22px;\n}\n.aside-title h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-ability{\n    display: block;\n    width: 100%;\n    margin-bottom: 30px;\n}\n#aside-ability-left{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50%;\n    min-width: 300px;\n}\n#aside-ability-left>div{\n    display: block;\n    width: 100%;\n    margin-top: 5px;\n}\n#aside-ability-left>div>h6{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n#aside-ability-left>div>span{\n    display: inline-block;\n    vertical-align: middle;\n    width: 220px;\n}\n#aside-ability-right{\n    display: inline-block;\n    vertical-align: middle;\n}\n#aside-ability-right>h4{\n    display: block;\n    width: 120px;\n    height: 80px;\n    padding-top: 40px;\n    border-left: 1px solid #ef8513;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 50%;\n    text-align: center;\n}\n\n@media only screen and (max-width: 900px) {\n    #main{\n        width: 25%;\n        margin-left: 5%;\n    }\n\n    #aside{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n    }\n\n    #main-profile{\n        width: 60%;\n        margin-left: 20%;\n    }\n\n    #main-watch{\n        width: 80%;\n        margin-left: 10%;\n    }\n\n    .main-owner{\n        width: 20%;\n    }\n\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(399);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0aW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGV0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BldC5jc3M/ZTI3MSJdLCJuYW1lcyI6WyJQZXQiLCJwcm9wcyIsInJlYWRQZXRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImFjY291bnQiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJ0b2tlbiIsInBldCIsIndhdGNoRGF0YSIsImluZGV4T2YiLCJtZXNzYWdlIiwiaW1hZ2UiLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsImxvYWQiLCJhZGQiLCJ3YXRjaEluZm8iLCJsZW5ndGgiLCJsb2dpblJlcXVpcmVkIiwiZmFtaWxpZXNCb2FyZCIsImZhbWlseURhdGEiLCJtYXAiLCJmYW1pbHkiLCJpbmRleCIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJmcmllbmRzQm9hcmQiLCJmcmllbmREYXRhIiwiZnJpZW5kIiwicGV0X2lkIiwicGV0X25hbWUiLCJwb3N0Qm9hcmQiLCJwZXREYXRhIiwib3duZXJfaWQiLCJyZWxhdGl2ZV9pZCIsInN1Ym1pdEltZyIsImJpbmQiLCJyZXNldCIsInNraWxsQm9hcmQiLCJza2lsbCIsInRvTG93ZXJDYXNlIiwibG9hZEJ1dHRvbiIsImxvY2tlciIsImxvYWRNb3JlIiwicGV0X2dlbmRlciIsIndhdGNoUGV0IiwicGV0X25hdHVyZSIsInBldF90eXBlIiwicGV0X3JlZyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsIndpbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJpIiwic2V0U3RhdGUiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJjb250YWluZXJTdHlsZSIsIm1hcmdpbiIsImltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlclJhZGl1cyIsImNvbnRlbnRTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhbGxJbWFnZXMiLCJzaG93Q29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmRJbWFnZSIsIklucHV0YXJlYSIsImJvcmRlciIsImNvbnRlbnQiLCJjb3VudCIsIm1heCIsImVycm9yIiwicmF3VXJsIiwidGl0bGUiLCJldmVudCIsImNoYW5nZWRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwic3Vic3RyIiwicmVwbGFjZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9ubG9hZCIsImltZyIsIkltYWdlIiwic3JjIiwicmVzdWx0IiwiZHJhd0ltYWdlIiwiY29tcHJlc3NlZCIsInRvRGF0YVVSTCIsInJlYWRBc0RhdGFVUkwiLCJ1cmwiLCJ0eXBlIiwic3BsaXQiLCJhdG9iIiwiYmxvYlNyYyIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInRpdGxlU3R5bGUiLCJzcGFuU3R5bGUiLCJpbnB1dFN0eWxlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm91dGxpbmUiLCJyZXNpemUiLCJsaW5lU3R5bGUiLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0Iiwib3ZlcmZsb3ciLCJjYW1lcmFTdHlsZSIsImZsb2F0IiwibWFyZ2luTGVmdCIsImZpbHRlciIsImN1cnNvciIsInBvc3RTdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwiZXJyb3JTdHlsZSIsImNvdW50U3R5bGUiLCJmaWxlU3R5bGUiLCJsZWZ0Iiwib3BhY2l0eSIsImltZ1N0eWxlIiwiY2FtZXJhIiwiZWRpdElucHV0IiwibG9hZEltZyIsInN1Ym1pdFBvc3QiLCJQcm9ncmVzcyIsImZvbnRDb2xvciIsImhpbnRTdHlsZSIsInpJbmRleCIsImJhY2tTdHlsZSIsInByb2dyZXNzIiwic2hvd1Byb2dyZXNzIiwicGVyY2VudGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O3NDQUNnQjtBQUNwQixRQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBL0M7QUFDQzs7OzZCQUNTO0FBQ1YsT0FBSSxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJELEVBQW5CLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DLFNBQUtKLEtBQUwsQ0FBV00sbUJBQVg7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLTixLQUFMLENBQVdPLGNBQVgsQ0FDQyxLQUFLUCxLQUFMLENBQVdLLE9BQVgsQ0FBbUJELEVBRHBCLEVBRUMsS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CRyxLQUZwQixFQUdDLEtBQUtSLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBSHpCLEVBSUMsS0FBS0osS0FBTCxDQUFXUyxHQUFYLENBQWVDLFNB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFxuXHRyZWFkUGV0UGFnZSwgdXBkYXRlUGV0V2F0Y2gsIGNyZWF0ZVBldE1vbWVudCwgcmVhZFBldE1vbWVudHMsIHNob3dBY2NvdW50UmVxdWlyZWQgXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IG5vR2V0R2VuZGVyLCBub0dldFR5cGUsIG5vR2V0TmF0dXJlLCBub0dldEFiaWxpdHkgfSBmcm9tICcuLi9oZWxwZXJzL25vVG9JbmZvJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBQb3N0aW1nIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdGltZyc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9ncmVzcyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL3BldC5jc3MnO1xuXG5jbGFzcyBQZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRQZXRQYWdlKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgfVxuXHR3YXRjaFBldCgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNob3dBY2NvdW50UmVxdWlyZWQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy51cGRhdGVQZXRXYXRjaChcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0XHR0aGlzLnByb3BzLnBldC53YXRjaERhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpICE9PSAtMSA/IDAgOiAxXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRzdWJtaXRJbWcobWVzc2FnZSwgaW1hZ2UpIHtcblx0XHR0aGlzLnByb3BzLmNyZWF0ZVBldE1vbWVudChcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRtZXNzYWdlXG5cdFx0KVxuXHR9XG5cdGxvYWRNb3JlKCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFBldE1vbWVudHMoXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdHRoaXMucHJvcHMucGV0LmxvYWQsXG5cdFx0XHR0aGlzLnByb3BzLnBldC5hZGRcblx0XHQpO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRsZXQgd2F0Y2hJbmZvO1xuXHRcdGlmIChcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCAhPT0gbnVsbCAmJiBcblx0XHRcdHRoaXMucHJvcHMucGV0LndhdGNoRGF0YS5pbmRleE9mKHRoaXMucHJvcHMuYWNjb3VudC5pZCkgIT09IC0xXG5cdFx0KSB7XG5cdFx0XHR3YXRjaEluZm8gPSBcIldhdGNoZWQgfCBieSBcIiArIHRoaXMucHJvcHMucGV0LndhdGNoRGF0YS5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLnBldC5sb2dpblJlcXVpcmVkKSB7XG5cdFx0XHRcdHdhdGNoSW5mbyA9IFwiUGxlYXNlIExvZ2luXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3YXRjaEluZm8gPSBcIisgV2F0Y2ggfCBieSBcIiArIHRoaXMucHJvcHMucGV0LndhdGNoRGF0YS5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGZhbWlsaWVzQm9hcmQgPSB0aGlzLnByb3BzLnBldC5mYW1pbHlEYXRhLm1hcCgoZmFtaWx5LCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXsgXCJwZXRmYW1pbHlcIiArIGluZGV4IH0gY2xhc3NOYW1lPVwibWFpbi1vd25lclwiPlxuXHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIGZhbWlseS51c2VyX2lkfT5cblx0XHRcdFx0XHQ8aW1nIHNyYyA9IHsgZG9tYWluVXJsICsgXCIvcHVibGljL3VzZXIvXCIgKyBmYW1pbHkudXNlcl9pZCArIFwiLmpwZ1wiIH0gLz5cblx0XHRcdFx0XHQ8aDU+eyBmYW1pbHkudXNlcl9uYW1lIH08L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuICAgIGNvbnN0IGZyaWVuZHNCb2FyZCA9IHRoaXMucHJvcHMucGV0LmZyaWVuZERhdGEubWFwKChmcmllbmQsIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9e1wicGV0ZnJpZW5kXCIgKyBpbmRleH0gY2xhc3NOYW1lPVwibWFpbi1mcmllbmRcIj5cblx0XHRcdFx0PGEgaHJlZj17XCIvcGV0L1wiICsgZnJpZW5kLnBldF9pZH0+XG5cdFx0XHRcdFx0PGltZyBzcmMgPSB7IGRvbWFpblVybCArIFwiL3B1YmxpYy9wZXQvXCIgKyBmcmllbmQucGV0X2lkICsgXCIvMC5wbmdcIiB9ICAvPlxuXHRcdFx0XHRcdDxoNj57ZnJpZW5kLnBldF9uYW1lfTwvaDY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0bGV0IHBvc3RCb2FyZDtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwgJiYgXG5cdFx0XHQoXG5cdFx0XHRcdHRoaXMucHJvcHMucGV0LnBldERhdGEub3duZXJfaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudC5pZCB8fFxuXHRcdFx0XHR0aGlzLnByb3BzLnBldC5wZXREYXRhLnJlbGF0aXZlX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWRcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdHBvc3RCb2FyZCA9IDxQb3N0aW1nIFxuXHRcdFx0XHRjb250ZW50PVwiXCIgXG5cdFx0XHRcdG1heD1cIjEyMFwiIFxuXHRcdFx0XHR0aXRsZT1cIlNoYXJlIG5ldyBtb21lbnRcIiBcblx0XHRcdFx0c3VibWl0SW1nPXsgdGhpcy5zdWJtaXRJbWcuYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdFx0XHRyZXNldD17IHRoaXMucHJvcHMucGV0LnJlc2V0IH0gXG5cdFx0XHQvPlxuXHRcdH1cblx0XHRjb25zdCBza2lsbEJvYXJkID0gWydBdHRhY2snLCAnRGVmZW5kJywgJ0hlYWx0aCcsICdTd2lmdCcsICdMdWNreSddLm1hcChza2lsbCA9PlxuXHRcdFx0PGRpdiBrZXk9eyBza2lsbCB9PlxuXHRcdFx0XHQ8aDY+eyBza2lsbCB9PC9oNj5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0PFByb2dyZXNzIFxuXHRcdFx0XHRcdFx0cHJvZ3Jlc3M9eyB0aGlzLnByb3BzLnBldC5wZXREYXRhW3NraWxsLnRvTG93ZXJDYXNlKCldIH0gXG5cdFx0XHRcdFx0XHRtYXg9XCI5OTlcIiBcblx0XHRcdFx0XHRcdHBlcmNlbnRhZ2U9XCJmYWxzZVwiIFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0bGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKCF0aGlzLnByb3BzLnBldC5sb2NrZXIpIHtcblx0XHRcdGxvYWRCdXR0b24gPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoW1xuICAgICAgPG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdGlkPVwibWFpbi1wcm9maWxlXCIgXG5cdFx0XHRcdFx0YWx0PXsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfbmFtZSB9IFxuXHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL3B1YmxpYy9wZXQvXCIgKyB0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9pZCArIFwiLzAucG5nXCIgfSBcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBpZD1cIm1haW4tbmFtZVwiPlxuXHRcdFx0XHRcdFx0PGgxPnsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfbmFtZSB9PC9oMT5cblx0XHRcdFx0XHRcdDxoND57IG5vR2V0R2VuZGVyKHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X2dlbmRlcikgfTwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aDUgaWQ9XCJtYWluLXdhdGNoXCIgb25DbGljaz17IHRoaXMud2F0Y2hQZXQuYmluZCh0aGlzKSB9Pnsgd2F0Y2hJbmZvIH08L2g1PlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPk5hdHVyZTogeyBub0dldE5hdHVyZSh0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9uYXR1cmUpIH08L2g1PlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlR5cGU6IHsgbm9HZXRUeXBlKHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X3R5cGUpIH08L2g1PlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxuXHRcdFx0XHRcdFJlZyBpbiBodWI6ICBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9yZWcgPyBcblx0XHRcdFx0XHRcdFx0bmV3IERhdGUodGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfcmVnKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkgOiBcblx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9oNT4gICAgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1mYW1pbHlcIj5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiRmFtaWx5XCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtaHViLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8aDU+RmFtaWx5PC9oNT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgZmFtaWxpZXNCb2FyZCB9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1mYW1pbHlcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cImZyaWVuZFwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLXRlYW0ucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDU+RnJpZW5kczwvaDU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IGZyaWVuZHNCb2FyZCB9XG5cdFx0XHQ8L21haW4+LFxuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHR7IHBvc3RCb2FyZCB9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdGl0bGVcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cIm1vbWVudHNcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1za2lsbC5wbmdcIiAvID5cblx0XHRcdFx0XHQ8aDQ+QWJpbGl0eTwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiYXNpZGUtYWJpbGl0eVwiPlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJhc2lkZS1hYmlsaXR5LWxlZnRcIj5cblx0XHRcdFx0XHRcdHsgc2tpbGxCb2FyZCB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBpZD1cImFzaWRlLWFiaWxpdHktcmlnaHRcIj5cblx0XHRcdFx0XHRcdDxoND5cblx0XHRcdFx0XHRcdFx0UGxheSAmIFdpbjxiciAvPlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMucGV0LnBldERhdGEud2luIH1cblx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJtb21lbnRzXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtbW9tZW50LnBuZ1wiIC8gPlxuXHRcdFx0XHRcdDxoND5Nb21lbnRzPC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxXYXRlcmZhbGwgXG5cdFx0XHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAzIDogMiB9IFxuXHRcdFx0XHRcdGltYWdlPXsgdGhpcy5wcm9wcy5wZXQuZ2FsbGVyeURhdGEgfSBcblx0XHRcdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGxvYWRCdXR0b24gfVxuXHRcdFx0PC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIHBldDogc3RhdGUucGV0IH0pLFxuICB7IFxuXHRcdHJlYWRQZXRQYWdlLCB1cGRhdGVQZXRXYXRjaCwgc2hvd0FjY291bnRSZXF1aXJlZCxcblx0XHRyZWFkUGV0TW9tZW50cywgY3JlYXRlUGV0TW9tZW50XG5cdH1cbikoUGV0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvUGV0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCI1MHB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCI5NCVcIixcblx0XHRcdGJvcmRlcjogdGhpcy5wcm9wcy5ib3JkZXIgfHwgXCIycHggc29saWQgI2Y3ZDdiNFwiLFxuXHRcdFx0Zm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgfHwgXCIxNHB4XCIsXG5cdFx0XHRjb250ZW50OiB0aGlzLnByb3BzLmNvbnRlbnQgfHwgXCJcIixcblx0XHRcdGNvdW50OiBwYXJzZUludCh0aGlzLnByb3BzLm1heCkgLSB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoLFxuXHRcdFx0bGVuZ3RoOiBwYXJzZUludCh0aGlzLnByb3BzLm1heCksXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIixcblx0XHRcdGVycm9yOiBcIlwiLFxuXHRcdFx0cmF3VXJsOiBudWxsLFxuXHRcdFx0dGl0bGU6IHRoaXMucHJvcHMudGl0bGUgfHwgbnVsbCxcblx0XHRcdHJlc2V0OiB0aGlzLnByb3BzLnJlc2V0XG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVzZXQgIT0gdGhpcy5wcm9wcy5yZXNldCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCIsIHJhd1VybDogbnVsbCwgcmVzZXQ6IHRoaXMucHJvcHMucmVzZXQsIGVycm9yOiBcIlN1Y2Nlc3MhXCIsIGNvdW50OiB0aGlzLnN0YXRlLmxlbmd0aFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGVkaXRJbnB1dChldmVudCkge1xuXHRcdGxldCBjaGFuZ2VkSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUuc3Vic3RyKDAsIHRoaXMuc3RhdGUubGVuZ3RoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjaGFuZ2VkSW5wdXR9KTtcblx0XHRpZiAoY2hhbmdlZElucHV0LnJlcGxhY2UoL15cXHMrLywgXCJcIikucmVwbGFjZSgvXFxzKyQvLCBcIlwiKSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmVycm9yICE9PSBcIlwiKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJcIn0pO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtjb3VudDogdGhpcy5zdGF0ZS5sZW5ndGggLSBjaGFuZ2VkSW5wdXQubGVuZ3RofSk7XG5cdH1cblx0bG9hZEltZyhldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcuc3JjID0gcmVhZGVyLnJlc3VsdDtcblx0XHRcdGltZy5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChpbWcud2lkdGggPiA4MDAgJiYgaW1nLndpZHRoID4gaW1nLmhlaWdodCkge1xuXHRcdFx0XHRcdGltZy5oZWlnaHQgPSAoaW1nLmhlaWdodCAvIGltZy53aWR0aCkgKiA4MDA7XG5cdFx0XHRcdFx0aW1nLndpZHRoID0gODAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGltZy5oZWlnaHQgPiA4MDAgJiYgaW1nLmhlaWdodCA+IGltZy53aWR0aCkge1xuXHRcdFx0XHRcdGltZy53aWR0aCA9IChpbWcud2lkdGggLyBpbWcuaGVpZ2h0KSAqIDgwMDtcblx0XHRcdFx0XHRpbWcuaGVpZ2h0ID0gODAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgXHRcdGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0OyAgXG5cdFx0XHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcblx0XHRcdFx0bGV0IGNvbXByZXNzZWQgPSBjYW52YXMudG9EYXRhVVJMKCk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Jhd1VybDogY29tcHJlc3NlZH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuZXJyb3IgIT09IFwiXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiXCJ9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cdH1cblx0c3VibWl0UG9zdCgpIHtcblx0XHRsZXQgY29udGVudCA9IHRoaXMuc3RhdGUuY29udGVudC5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpLnJlcGxhY2UoL1xccyskLywgXCJcIik7XG5cdFx0aWYgKGNvbnRlbnQgPT09IFwiXCIpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIlBsZWFzZSBzYXkgc29tZXRoaW5nXCJ9KTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnJhd1VybCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiUGxlYXNlIHVwbG9hZCBhbiBpbWFnZVwifSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB1cmwgPSB0aGlzLnN0YXRlLnJhd1VybDtcblx0XHRcdGxldCB0eXBlID0gdXJsLnNwbGl0KFwiLFwiKVswXTtcblx0XHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiOlwiKVsxXTtcblx0XHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiO1wiKVswXTtcblx0XHRcdGlmICh0eXBlID09IFwiaW1hZ2UvanBlZ1wiIHx8IHR5cGUgPT0gXCJpbWFnZS9wbmdcIikge1xuXHRcdFx0XHRsZXQgc3JjID0gdXJsLnNwbGl0KFwiLFwiKVsxXTtcblx0XHRcdFx0c3JjID0gd2luZG93LmF0b2Ioc3JjKTtcblx0XHRcdFx0bGV0IGJsb2JTcmMgPSBuZXcgVWludDhBcnJheShzcmMubGVuZ3RoKTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRibG9iU3JjW2ldID0gc3JjLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdGxldCBpbWFnZSA9IG5ldyBCbG9iKFtibG9iU3JjXSwge3R5cGU6IHR5cGV9KTtcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLmNvbnRlbnQ7XG5cdFx0XHRcdHRoaXMucHJvcHMuc3VibWl0SW1nKG1lc3NhZ2UsIGltYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIkZpbGUgdHlwZSBub3Qgc3VwcG9ydFwifSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGl0bGVTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdGZvbnRTaXplOiBcIjE1cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Y29sb3I6IFwiI2VmODUxM1wiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuXHRcdH07XG5cdFx0bGV0IHNwYW5TdHlsZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjlmY1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiLFxuXHRcdFx0cGFkZGluZzogXCIyMHB4IDMlXCIsXG5cdFx0fTtcblx0XHRsZXQgaW5wdXRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjk4JVwiLFxuXHRcdFx0cGFkZGluZ1RvcDogXCI1cHhcIixcblx0XHRcdHBhZGRpbmdCb3R0b206IFwiNXB4XCIsXG5cdFx0XHRib3JkZXI6IHRoaXMuc3RhdGUuYm9yZGVyLFxuXHRcdFx0aGVpZ2h0OiBcIjUwcHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiB0aGlzLnN0YXRlLmZvbnRTaXplLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMSVcIixcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0cmVzaXplOiBcIm5vbmVcIixcblx0XHR9O1xuXHRcdGxldCBsaW5lU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFwiNXB4XCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIjIwcHhcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHRvdmVyZmxvdzogXCJhdXRvXCJcblx0XHR9O1xuXHRcdGxldCBjYW1lcmFTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcImxlZnRcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuXHRcdFx0ZmlsdGVyOiBcIm9wYWNpdHkoNTAlKVwiLFxuXHRcdFx0d2lkdGg6IFwiMjBweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IHBvc3RTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcInJpZ2h0XCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzkzNGM0Y1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdHBhZGRpbmc6IFwiMnB4IDVweFwiLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IGVycm9yU3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJyaWdodFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuXHRcdFx0Y29sb3I6IFwicmVkXCJcblx0XHR9O1xuXHRcdGxldCBjb3VudFN0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwibGVmdFwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTFweFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCIxMHB4XCJcblx0XHR9O1xuXHRcdGxldCBmaWxlU3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiMjBweFwiLFxuXHRcdFx0aGVpZ2h0OiBcIjEycHhcIixcblx0XHRcdGxlZnQ6IFwiLTc2cHhcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRvcGFjaXR5OiBcIjBcIlxuXHRcdH07XG5cdFx0bGV0IGltZ1N0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwibGVmdFwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCI1cHhcIixcblx0XHRcdGhlaWdodDogXCIxNTBweFwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiLFxuXHRcdFx0bWFyZ2luTGVmdDogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNhbWVyYSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFVQ0FZQUFBQ1RRQzIrQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUJBaHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNRFkzSURjNUxqRTFOemMwTnl3Z01qQXhOUzh3TXk4ek1DMHlNem8wTURvME1pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjFkV2xrT2pZMVJUWXpPVEEyT0RaRFJqRXhSRUpCTmtVeVJEZzROME5GUVVOQ05EQTNJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPamc1TmpaR1JEZ3lPRFV6TXpFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qZzVOalpHUkRneE9EVXpNekV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hOWVdOcGJuUnZjMmdwSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1UazVOekExT0dFdFpESTNPQzAwTkRaa0xXRTRPRGd0TkdNNE1HUTRZV0kxTnpObUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2WXpSa1ptUXhNR010WTJObE5TMHhNVGM0TFdFNU9HUXRZMk5rWm1NNU9EazVZV1l3SWk4K0lEeGtZenAwYVhSc1pUNGdQSEprWmpwQmJIUStJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlJbmd0WkdWbVlYVnNkQ0krWjJ4NWNHaHBZMjl1Y3p3dmNtUm1PbXhwUGlBOEwzSmtaanBCYkhRK0lEd3ZaR002ZEdsMGJHVStJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtHYnlUTXdBQUFMaEpSRUZVZU5waStQLy9Qd011REFRQ1FMd0FpUDhUd0NBMUFuak5JbURSQVNJc2dlRURaRmtFQkFZa1dBTERDbmpNQXdmUEJESU1KUlpQZ05wQlUwdmdsakZDR1RRSFREUXkxdytLVVFDeDNsK0FITmtnTnBGSkg0YUpVcFNBSnpVbFVNdWlCVWlHTmtEekZnZzNJSWt2b0laRkNraVdvTXMxSUFValpSWVJLQ1VPSU1uak5ZZlNWS2RBdGVUTnlNZ0lNK3dBRnVrRmFHcndna0dUR09pV3ZLbVNZZWxXMWpFRHNTQVFXOURZbm9sMHE0OEFBZ3dBREl2aEhRTGxoSUlBQUFBQVNVVk9SSzVDWUlJPVwiO1xuXHRcdGxldCBpbWFnZTtcblx0XHRpZiAodGhpcy5zdGF0ZS5yYXdVcmwpIHtcblx0XHRcdGltYWdlID0gKDxpbWcgc3R5bGU9e2ltZ1N0eWxlfSBzcmM9e3RoaXMuc3RhdGUucmF3VXJsfSBhbHQ9XCJ1cGxvYWQtaW1hZ2VcIiAvPik7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cblx0XHRcdFx0PHNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9Pnt0aGlzLnN0YXRlLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0PHRleHRhcmVhIHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5lZGl0SW5wdXQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PGRpdiBzdHlsZT17bGluZVN0eWxlfT5cblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXtjYW1lcmFTdHlsZX0gc3JjPXtjYW1lcmF9IGFsdD1cIkFERFwiIC8+XG5cdFx0XHRcdFx0PGlucHV0IHN0eWxlPXtmaWxlU3R5bGV9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXt0aGlzLmxvYWRJbWcuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17Y291bnRTdHlsZX0+e3RoaXMuc3RhdGUuY291bnR9L3t0aGlzLnN0YXRlLmxlbmd0aH08L3NwYW4+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17cG9zdFN0eWxlfSBvbkNsaWNrPXt0aGlzLnN1Ym1pdFBvc3QuYmluZCh0aGlzKX0+UG9zdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXtlcnJvclN0eWxlfT57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtsaW5lU3R5bGV9PlxuXHRcdFx0XHRcdHtpbWFnZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUG9zdGltZy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHxcIjE4cHhcIixcbiAgICAgIGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiLFxuICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgfHwgXCI5cHhcIixcbiAgICAgIGZvbnRDb2xvcjogdGhpcy5wcm9wcy5mb250Q29sb3IgfHwgXCJibGFja1wiXG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgZm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuICAgICAgZm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsXG4gICAgICBjb2xvcjogdGhpcy5zdGF0ZS5mb250Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjhmOVwiLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGVlMmU4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgIH07XG4gICAgbGV0IGhpbnRTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB6SW5kZXg6IFwiM1wiXG4gICAgfTtcbiAgICBsZXQgYmFja1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHRvcDogXCItXCIgKyB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnByb2dyZXNzIC8gdGhpcy5wcm9wcy5tYXggKiAxMDAgKyBcIiVcIixcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I5ZDE3ZlwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgekluZGV4OiBcIjJcIlxuICAgIH07XG4gICAgbGV0IHNob3dQcm9ncmVzcztcbiAgICBpZiAodGhpcy5wcm9wcy5wZXJjZW50YWdlID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHNob3dQcm9ncmVzcyA9IHRoaXMucHJvcHMucHJvZ3Jlc3MgKyBcIiAvIFwiICsgdGhpcy5wcm9wcy5tYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dQcm9ncmVzcyA9IHBhcnNlSW50KHRoaXMucHJvcHMucHJvZ3Jlc3MgLyB0aGlzLnByb3BzLm1heCAqIDEwMCkgKyBcIiAlXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtoaW50U3R5bGV9PntzaG93UHJvZ3Jlc3N9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2JhY2tTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3MuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qcGV0IHBhZ2UqL1xcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4jbWFpbi1wcm9maWxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiNtYWluLW5hbWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggNSU7XFxufVxcbiNtYWluLW5hbWUgaDF7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI21haW4tbmFtZSBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jbWFpbi13YXRjaHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNtYWluLW5hdHVyZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubWFpbi10aXRsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogOHB4IDUlO1xcbn1cXG5cXG4ubWFpbi1mYW1pbHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkyJTtcXG4gICAgcGFkZGluZzogNXB4IDQlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLm1haW4tZmFtaWx5IGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luOiAwIDUlO1xcbn1cXG4ubWFpbi1mYW1pbHkgaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW93bmVye1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLW93bmVyIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLW93bmVyIGg1e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWFpbi1mcmllbmQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMSU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tYWluLWZyaWVuZCBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubWFpbi1mcmllbmQgaDZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTtcXG4gICAgcGFkZGluZzogNXB4IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcblxcbiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4uYXNpZGUtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA1cHggNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZTVlNWU1OyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Q3YjQ7XFxufVxcbi5hc2lkZS10aXRsZSBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgd2lkdGg6IDIycHg7XFxufVxcbi5hc2lkZS10aXRsZSBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FzaWRlLWFiaWxpdHl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1sZWZ0PmRpdntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LWxlZnQ+ZGl2Pmg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdD5kaXY+c3BhbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LXJpZ2h0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNhc2lkZS1hYmlsaXR5LXJpZ2h0Pmg0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZjg1MTM7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgI2FzaWRle1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAgICNtYWlue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI21haW4tcHJvZmlsZXtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xcbiAgICB9XFxuXFxuICAgICNtYWluLXdhdGNoe1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tb3duZXJ7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICB9XFxuXFxuICAgICNhc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3BldC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wZXQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BldC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BldC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcGV0LmNzc1xuLy8gbW9kdWxlIGlkID0gNDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=