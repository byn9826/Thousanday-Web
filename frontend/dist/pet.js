webpackJsonp([0],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _pet = __webpack_require__(60);

var _account = __webpack_require__(56);

var _noToInfo = __webpack_require__(57);

var _config = __webpack_require__(5);

var _Postimg = __webpack_require__(153);

var _Postimg2 = _interopRequireDefault(_Postimg);

var _Progress = __webpack_require__(154);

var _Progress2 = _interopRequireDefault(_Progress);

var _Waterfall = __webpack_require__(147);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(161);

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
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
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
	readPetPage: _pet.readPetPage, updatePetWatch: _pet.updatePetWatch, showAccountRequired: _pet.showAccountRequired, changeAccountData: _account.changeAccountData,
	readPetMoments: _pet.readPetMoments, createPetMoment: _pet.createPetMoment
})(Pet);

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

/***/ 153:
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-profile{\n    display: block;\n    width: 100%;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n#main-name{\n    display: block;\n    width: 90%;\n    margin: 10px 5%;\n}\n#main-name h1{\n    display: inline-block;\n    margin-right: 5%;\n    vertical-align: middle;\n}\n#main-name h4{\n    display: inline-block;\n    vertical-align: middle;\n}\n#main-watch{\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    background-color: #ef8513;\n    border-radius: 5px;\n    width: 70%;\n    padding: 5px 0;\n    margin-left: 5%;\n    border-bottom: 20px;\n    color: white;\n    cursor: pointer;\n}\n#main-nature{\n    display: block;\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 15px;\n    margin-bottom: 8px;\n    padding-top: 15px;\n    border-top: 1px solid #e5e5e5;\n    font-weight: bold;\n}\n.main-title{\n    display: block;\n    width: 90%;\n    margin: 8px 5%;\n}\n\n.main-family {\n    display: block;\n    width: 92%;\n    padding: 5px 4%;\n    margin-bottom: 15px;\n    border-left: 4px solid black;\n    border-bottom: 1px solid #e5e5e5;\n    margin-top: 30px;\n}\n.main-family img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 15px;\n    margin: 0 5%;\n}\n.main-family h5{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n.main-owner{\n    display: inline-block;\n    vertical-align: top;\n    width: 35%;\n    margin-right: 15%;\n    text-align: center;\n}\n.main-owner img{\n    display: block;\n    width: 100%;\n    border-radius: 50%;\n}\n.main-owner h5{\n    display: block;\n    margin-top: 10px;\n    font-style: italic;\n}\n\n.main-friend {\n    display: inline-block;\n    width: 31%;\n    margin-right: 2%;\n    vertical-align: top;\n    margin-bottom: 10px;\n}\n.main-friend img{\n    display: block;\n    width: 100%;\n    border-radius: 3px;\n}\n.main-friend h6{\n    display: block;\n    width: 80%;\n    border-bottom: 1px solid #f7d7b4;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    padding: 5px 10%;\n    border-radius: 3px;\n    margin-top: 5px;\n}\n\n\n#aside{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n\n.aside-title{\n    display: block;\n    width: 90%;\n    padding: 5px 5%;\n    border-bottom: 1px solid #f7d7b4;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    border-radius: 3px;\n    border-right: 1px solid #f7d7b4;\n    box-shadow: 2px 2px 1px #e5e5e5; \n    border-bottom: 1px solid #f7d7b4;\n}\n.aside-title img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5%;\n    width: 22px;\n}\n.aside-title h4{\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: bold;\n}\n\n#aside-ability{\n    display: block;\n    width: 100%;\n    margin-bottom: 30px;\n}\n#aside-ability-left{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50%;\n    min-width: 300px;\n}\n#aside-ability-left>div{\n    display: block;\n    width: 100%;\n    margin-top: 5px;\n}\n#aside-ability-left>div>h6{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n#aside-ability-left>div>span{\n    display: inline-block;\n    vertical-align: middle;\n    width: 220px;\n}\n#aside-ability-right{\n    display: inline-block;\n    vertical-align: middle;\n}\n#aside-ability-right>h4{\n    display: block;\n    width: 120px;\n    height: 80px;\n    padding-top: 40px;\n    border-left: 1px solid #ef8513;\n    border-bottom: 1px solid #ef8513;\n    border-radius: 50%;\n    text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(156);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(55)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0aW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGV0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BldC5jc3M/ZTI3MSJdLCJuYW1lcyI6WyJQZXQiLCJwcm9wcyIsImNoYW5nZUFjY291bnREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlYWRQZXRQYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImFjY291bnQiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJ0b2tlbiIsInBldCIsIndhdGNoRGF0YSIsImluZGV4T2YiLCJtZXNzYWdlIiwiaW1hZ2UiLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsImxvYWQiLCJhZGQiLCJ3YXRjaEluZm8iLCJsZW5ndGgiLCJsb2dpblJlcXVpcmVkIiwiZmFtaWxpZXNCb2FyZCIsImZhbWlseURhdGEiLCJtYXAiLCJmYW1pbHkiLCJpbmRleCIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJmcmllbmRzQm9hcmQiLCJmcmllbmREYXRhIiwiZnJpZW5kIiwicGV0X2lkIiwicGV0X25hbWUiLCJwb3N0Qm9hcmQiLCJwZXREYXRhIiwib3duZXJfaWQiLCJyZWxhdGl2ZV9pZCIsInN1Ym1pdEltZyIsImJpbmQiLCJyZXNldCIsInNraWxsQm9hcmQiLCJza2lsbCIsInRvTG93ZXJDYXNlIiwibW9tZW50R2FsbGVyeSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsImxvYWRCdXR0b24iLCJsb2NrZXIiLCJsb2FkTW9yZSIsInBldF9nZW5kZXIiLCJ3YXRjaFBldCIsInBldF9uYXR1cmUiLCJwZXRfdHlwZSIsInBldF9yZWciLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJ3aW4iLCJzdGF0ZSIsIldhdGVyZmFsbCIsImhlaWdodCIsIndpZHRoIiwicGFyc2VJbnQiLCJjb2x1bW4iLCJhY3RpdmUiLCJmb250RmFtaWx5Iiwid2F0ZXJmYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaSIsInNldFN0YXRlIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyU3R5bGUiLCJpbWFnZVN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50U3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYWxsSW1hZ2VzIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJJbnB1dGFyZWEiLCJib3JkZXIiLCJjb250ZW50IiwiY291bnQiLCJtYXgiLCJlcnJvciIsInJhd1VybCIsInRpdGxlIiwiZXZlbnQiLCJjaGFuZ2VkSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1YnN0ciIsInJlcGxhY2UiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJvbmxvYWQiLCJpbWciLCJJbWFnZSIsInNyYyIsInJlc3VsdCIsImRyYXdJbWFnZSIsImNvbXByZXNzZWQiLCJ0b0RhdGFVUkwiLCJyZWFkQXNEYXRhVVJMIiwidXJsIiwidHlwZSIsInNwbGl0IiwiYXRvYiIsImJsb2JTcmMiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJ0aXRsZVN0eWxlIiwic3BhblN0eWxlIiwiaW5wdXRTdHlsZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJvdXRsaW5lIiwicmVzaXplIiwibGluZVN0eWxlIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsIm92ZXJmbG93IiwiY2FtZXJhU3R5bGUiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJmaWx0ZXIiLCJjdXJzb3IiLCJwb3N0U3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsImVycm9yU3R5bGUiLCJjb3VudFN0eWxlIiwiZmlsZVN0eWxlIiwibGVmdCIsIm9wYWNpdHkiLCJpbWdTdHlsZSIsImNhbWVyYSIsImVkaXRJbnB1dCIsImxvYWRJbWciLCJzdWJtaXRQb3N0IiwiUHJvZ3Jlc3MiLCJmb250Q29sb3IiLCJoaW50U3R5bGUiLCJ6SW5kZXgiLCJiYWNrU3R5bGUiLCJwcm9ncmVzcyIsInNob3dQcm9ncmVzcyIsInBlcmNlbnRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxHOzs7Ozs7Ozs7Ozt1Q0FDZ0I7QUFDcEIsUUFBS0MsS0FBTCxDQUFXQyxpQkFBWCxDQUNDLENBQ0NDLGFBQWFDLE9BQWIsQ0FBcUIsSUFBckIsQ0FERCxFQUVDRCxhQUFhQyxPQUFiLENBQXFCLE1BQXJCLENBRkQsRUFHQ0QsYUFBYUMsT0FBYixDQUFxQixPQUFyQixDQUhELENBREQ7QUFPQTs7O3NDQUNvQjtBQUNwQixRQUFLSCxLQUFMLENBQVdJLFdBQVgsQ0FBdUIsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBL0M7QUFDQzs7OzZCQUNTO0FBQ1YsT0FBSSxLQUFLUCxLQUFMLENBQVdRLE9BQVgsQ0FBbUJELEVBQW5CLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DLFNBQUtQLEtBQUws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RUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJwZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFxuXHRyZWFkUGV0UGFnZSwgdXBkYXRlUGV0V2F0Y2gsIGNyZWF0ZVBldE1vbWVudCwgcmVhZFBldE1vbWVudHMsIHNob3dBY2NvdW50UmVxdWlyZWQgXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IGNoYW5nZUFjY291bnREYXRhIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IG5vR2V0R2VuZGVyLCBub0dldFR5cGUsIG5vR2V0TmF0dXJlLCBub0dldEFiaWxpdHkgfSBmcm9tICcuLi9oZWxwZXJzL25vVG9JbmZvJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBQb3N0aW1nIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdGltZyc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9ncmVzcyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL3BldC5jc3MnO1xuXG5jbGFzcyBQZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkUGV0UGFnZSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gIH1cblx0d2F0Y2hQZXQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zaG93QWNjb3VudFJlcXVpcmVkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlUGV0V2F0Y2goXG5cdFx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdFx0dGhpcy5wcm9wcy5wZXQud2F0Y2hEYXRhLmluZGV4T2YodGhpcy5wcm9wcy5hY2NvdW50LmlkKSAhPT0gLTEgPyAwIDogMVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0c3VibWl0SW1nKG1lc3NhZ2UsIGltYWdlKSB7XG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVQZXRNb21lbnQoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcblx0XHRcdGltYWdlLFxuXHRcdFx0bWVzc2FnZVxuXHRcdClcblx0fVxuXHRsb2FkTW9yZSgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRQZXRNb21lbnRzKFxuXHRcdFx0dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG5cdFx0XHR0aGlzLnByb3BzLnBldC5sb2FkLFxuXHRcdFx0dGhpcy5wcm9wcy5wZXQuYWRkXG5cdFx0KTtcblx0fVxuICByZW5kZXIoKSB7XG5cdFx0bGV0IHdhdGNoSW5mbztcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwgJiYgXG5cdFx0XHR0aGlzLnByb3BzLnBldC53YXRjaERhdGEuaW5kZXhPZih0aGlzLnByb3BzLmFjY291bnQuaWQpICE9PSAtMVxuXHRcdCkge1xuXHRcdFx0d2F0Y2hJbmZvID0gXCJXYXRjaGVkIHwgYnkgXCIgKyB0aGlzLnByb3BzLnBldC53YXRjaERhdGEubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5wZXQubG9naW5SZXF1aXJlZCkge1xuXHRcdFx0XHR3YXRjaEluZm8gPSBcIlBsZWFzZSBMb2dpblwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2F0Y2hJbmZvID0gXCIrIFdhdGNoIHwgYnkgXCIgKyB0aGlzLnByb3BzLnBldC53YXRjaERhdGEubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBmYW1pbGllc0JvYXJkID0gdGhpcy5wcm9wcy5wZXQuZmFtaWx5RGF0YS5tYXAoKGZhbWlseSwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17IFwicGV0ZmFtaWx5XCIgKyBpbmRleCB9IGNsYXNzTmFtZT1cIm1haW4tb3duZXJcIj5cblx0XHRcdFx0PGEgaHJlZj17IFwiL3VzZXIvXCIgKyBmYW1pbHkudXNlcl9pZH0+XG5cdFx0XHRcdFx0PGltZyBzcmMgPSB7IGRvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgZmFtaWx5LnVzZXJfaWQgKyBcIi5qcGdcIiB9IC8+XG5cdFx0XHRcdFx0PGg1PnsgZmFtaWx5LnVzZXJfbmFtZSB9PC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcbiAgICBjb25zdCBmcmllbmRzQm9hcmQgPSB0aGlzLnByb3BzLnBldC5mcmllbmREYXRhLm1hcCgoZnJpZW5kLCBpbmRleCkgPT5cblx0XHRcdDxkaXYga2V5PXtcInBldGZyaWVuZFwiICsgaW5kZXh9IGNsYXNzTmFtZT1cIm1haW4tZnJpZW5kXCI+XG5cdFx0XHRcdDxhIGhyZWY9e1wiL3BldC9cIiArIGZyaWVuZC5wZXRfaWR9PlxuXHRcdFx0XHRcdDxpbWcgc3JjID0geyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgZnJpZW5kLnBldF9pZCArIFwiLzAucG5nXCIgfSAgLz5cblx0XHRcdFx0XHQ8aDY+e2ZyaWVuZC5wZXRfbmFtZX08L2g2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBwb3N0Qm9hcmQ7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsICYmIFxuXHRcdFx0KFxuXHRcdFx0XHR0aGlzLnByb3BzLnBldC5wZXREYXRhLm93bmVyX2lkID09PSB0aGlzLnByb3BzLmFjY291bnQuaWQgfHxcblx0XHRcdFx0dGhpcy5wcm9wcy5wZXQucGV0RGF0YS5yZWxhdGl2ZV9pZCA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmlkXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRwb3N0Qm9hcmQgPSA8UG9zdGltZyBcblx0XHRcdFx0Y29udGVudD1cIlwiIFxuXHRcdFx0XHRtYXg9XCIxMjBcIiBcblx0XHRcdFx0dGl0bGU9XCJTaGFyZSBuZXcgbW9tZW50XCIgXG5cdFx0XHRcdHN1Ym1pdEltZz17IHRoaXMuc3VibWl0SW1nLmJpbmQodGhpcykgfSBcblx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0cmVzZXQ9eyB0aGlzLnByb3BzLnBldC5yZXNldCB9IFxuXHRcdFx0Lz5cblx0XHR9XG5cdFx0Y29uc3Qgc2tpbGxCb2FyZCA9IFsnQXR0YWNrJywgJ0RlZmVuZCcsICdIZWFsdGgnLCAnU3dpZnQnLCAnTHVja3knXS5tYXAoc2tpbGwgPT5cblx0XHRcdDxkaXYga2V5PXsgc2tpbGwgfT5cblx0XHRcdFx0PGg2Pnsgc2tpbGwgfTwvaDY+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxQcm9ncmVzcyBcblx0XHRcdFx0XHRcdHByb2dyZXNzPXsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YVtza2lsbC50b0xvd2VyQ2FzZSgpXSB9IFxuXHRcdFx0XHRcdFx0bWF4PVwiOTk5XCIgXG5cdFx0XHRcdFx0XHRwZXJjZW50YWdlPVwiZmFsc2VcIiBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGNvbnN0IG1vbWVudEdhbGxlcnkgPSA8V2F0ZXJmYWxsIFxuXHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAzIDogMiB9IFxuXHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLnBldC5nYWxsZXJ5RGF0YSB9IFxuXHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHQvPlxuXHRcdGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICghdGhpcy5wcm9wcy5wZXQubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFtcbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGtleT1cIm1haW5cIj5cblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRpZD1cIm1haW4tcHJvZmlsZVwiIFxuXHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X25hbWUgfSBcblx0XHRcdFx0XHRzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgdGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLW5hbWVcIj5cblx0XHRcdFx0XHRcdDxoMT57IHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X25hbWUgfTwvaDE+XG5cdFx0XHRcdFx0XHQ8aDQ+eyBub0dldEdlbmRlcih0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF9nZW5kZXIpIH08L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGg1IGlkPVwibWFpbi13YXRjaFwiIG9uQ2xpY2s9eyB0aGlzLndhdGNoUGV0LmJpbmQodGhpcykgfT57IHdhdGNoSW5mbyB9PC9oNT5cblx0XHRcdFx0PGg1IGlkPVwibWFpbi1uYXR1cmVcIj5OYXR1cmU6IHsgbm9HZXROYXR1cmUodGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfbmF0dXJlKSB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5UeXBlOiB7IG5vR2V0VHlwZSh0aGlzLnByb3BzLnBldC5wZXREYXRhLnBldF90eXBlKSB9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cblx0XHRcdFx0XHRSZWcgaW4gaHViOiAgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wZXQucGV0RGF0YS5wZXRfcmVnID8gXG5cdFx0XHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMucHJvcHMucGV0LnBldERhdGEucGV0X3JlZykudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApIDogXG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvaDU+ICAgIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cIkZhbWlseVwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWh1Yi5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg1PkZhbWlseTwvaDU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IGZhbWlsaWVzQm9hcmQgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZmFtaWx5XCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJmcmllbmRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy10ZWFtLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGg1PkZyaWVuZHM8L2g1PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBmcmllbmRzQm9hcmQgfVxuXHRcdFx0PC9tYWluPixcblx0XHRcdDxhc2lkZSBpZD1cImFzaWRlXCIga2V5PVwiYXNpZGVcIj5cblx0XHRcdFx0eyBwb3N0Qm9hcmQgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJtb21lbnRzXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtc2tpbGwucG5nXCIgLyA+XG5cdFx0XHRcdFx0PGg0PkFiaWxpdHk8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cImFzaWRlLWFiaWxpdHlcIj5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiYXNpZGUtYWJpbGl0eS1sZWZ0XCI+XG5cdFx0XHRcdFx0XHR7IHNraWxsQm9hcmQgfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJhc2lkZS1hYmlsaXR5LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0XHRcdFBsYXkgJiBXaW48YnIgLz5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLnBldC5wZXREYXRhLndpbiB9XG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhc2lkZS10aXRsZVwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwibW9tZW50c1wiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLW1vbWVudC5wbmdcIiAvID5cblx0XHRcdFx0XHQ8aDQ+TW9tZW50czwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IG1vbWVudEdhbGxlcnkgfVxuXHRcdFx0XHR7IGxvYWRCdXR0b24gfVxuXHRcdFx0PC9hc2lkZT5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGFjY291bnQ6IHN0YXRlLmFjY291bnQsIHBldDogc3RhdGUucGV0IH0pLFxuICB7IFxuXHRcdHJlYWRQZXRQYWdlLCB1cGRhdGVQZXRXYXRjaCwgc2hvd0FjY291bnRSZXF1aXJlZCwgY2hhbmdlQWNjb3VudERhdGEsXG5cdFx0cmVhZFBldE1vbWVudHMsIGNyZWF0ZVBldE1vbWVudFxuXHR9XG4pKFBldCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1BldC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiOTQlXCIsXG5cdFx0XHRib3JkZXI6IHRoaXMucHJvcHMuYm9yZGVyIHx8IFwiMnB4IHNvbGlkICNmN2Q3YjRcIixcblx0XHRcdGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplIHx8IFwiMTRweFwiLFxuXHRcdFx0Y29udGVudDogdGhpcy5wcm9wcy5jb250ZW50IHx8IFwiXCIsXG5cdFx0XHRjb3VudDogcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpIC0gdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCxcblx0XHRcdGxlbmd0aDogcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XHRlcnJvcjogXCJcIixcblx0XHRcdHJhd1VybDogbnVsbCxcblx0XHRcdHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlIHx8IG51bGwsXG5cdFx0XHRyZXNldDogdGhpcy5wcm9wcy5yZXNldFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnJlc2V0ICE9IHRoaXMucHJvcHMucmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjb250ZW50OiBcIlwiLCByYXdVcmw6IG51bGwsIHJlc2V0OiB0aGlzLnByb3BzLnJlc2V0LCBlcnJvcjogXCJTdWNjZXNzIVwiLCBjb3VudDogdGhpcy5zdGF0ZS5sZW5ndGhcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRlZGl0SW5wdXQoZXZlbnQpIHtcblx0XHRsZXQgY2hhbmdlZElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cigwLCB0aGlzLnN0YXRlLmxlbmd0aCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY2hhbmdlZElucHV0fSk7XG5cdFx0aWYgKGNoYW5nZWRJbnB1dC5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpLnJlcGxhY2UoL1xccyskLywgXCJcIikgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5lcnJvciAhPT0gXCJcIikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiXCJ9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHRoaXMuc3RhdGUubGVuZ3RoIC0gY2hhbmdlZElucHV0Lmxlbmd0aH0pO1xuXHR9XG5cdGxvYWRJbWcoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLnNyYyA9IHJlYWRlci5yZXN1bHQ7XG5cdFx0XHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoaW1nLndpZHRoID4gODAwICYmIGltZy53aWR0aCA+IGltZy5oZWlnaHQpIHtcblx0XHRcdFx0XHRpbWcuaGVpZ2h0ID0gKGltZy5oZWlnaHQgLyBpbWcud2lkdGgpICogODAwO1xuXHRcdFx0XHRcdGltZy53aWR0aCA9IDgwMDtcblx0XHRcdFx0fSBlbHNlIGlmIChpbWcuaGVpZ2h0ID4gODAwICYmIGltZy5oZWlnaHQgPiBpbWcud2lkdGgpIHtcblx0XHRcdFx0XHRpbWcud2lkdGggPSAoaW1nLndpZHRoIC8gaW1nLmhlaWdodCkgKiA4MDA7XG5cdFx0XHRcdFx0aW1nLmhlaWdodCA9IDgwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgIFx0XHRjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDsgIFxuXHRcdFx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG5cdFx0XHRcdGxldCBjb21wcmVzc2VkID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtyYXdVcmw6IGNvbXByZXNzZWR9KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnN0YXRlLmVycm9yICE9PSBcIlwiKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIlwifSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXHR9XG5cdHN1Ym1pdFBvc3QoKSB7XG5cdFx0bGV0IGNvbnRlbnQgPSB0aGlzLnN0YXRlLmNvbnRlbnQucmVwbGFjZSgvXlxccysvLCBcIlwiKS5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpO1xuXHRcdGlmIChjb250ZW50ID09PSBcIlwiKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJQbGVhc2Ugc2F5IHNvbWV0aGluZ1wifSk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5yYXdVcmwpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBcIlBsZWFzZSB1cGxvYWQgYW4gaW1hZ2VcIn0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgdXJsID0gdGhpcy5zdGF0ZS5yYXdVcmw7XG5cdFx0XHRsZXQgdHlwZSA9IHVybC5zcGxpdChcIixcIilbMF07XG5cdFx0XHR0eXBlID0gdHlwZS5zcGxpdChcIjpcIilbMV07XG5cdFx0XHR0eXBlID0gdHlwZS5zcGxpdChcIjtcIilbMF07XG5cdFx0XHRpZiAodHlwZSA9PSBcImltYWdlL2pwZWdcIiB8fCB0eXBlID09IFwiaW1hZ2UvcG5nXCIpIHtcblx0XHRcdFx0bGV0IHNyYyA9IHVybC5zcGxpdChcIixcIilbMV07XG5cdFx0XHRcdHNyYyA9IHdpbmRvdy5hdG9iKHNyYyk7XG5cdFx0XHRcdGxldCBibG9iU3JjID0gbmV3IFVpbnQ4QXJyYXkoc3JjLmxlbmd0aCk7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0YmxvYlNyY1tpXSA9IHNyYy5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRsZXQgaW1hZ2UgPSBuZXcgQmxvYihbYmxvYlNyY10sIHt0eXBlOiB0eXBlfSk7XG5cdFx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5zdGF0ZS5jb250ZW50O1xuXHRcdFx0XHR0aGlzLnByb3BzLnN1Ym1pdEltZyhtZXNzYWdlLCBpbWFnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogXCJGaWxlIHR5cGUgbm90IHN1cHBvcnRcIn0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRpdGxlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxNXB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGNvbG9yOiBcIiNlZjg1MTNcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcblx0XHR9O1xuXHRcdGxldCBzcGFuU3R5bGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmN2Y5ZmNcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI2cHhcIixcblx0XHRcdHBhZGRpbmc6IFwiMjBweCAzJVwiLFxuXHRcdH07XG5cdFx0bGV0IGlucHV0U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCI5OCVcIixcblx0XHRcdHBhZGRpbmdUb3A6IFwiNXB4XCIsXG5cdFx0XHRwYWRkaW5nQm90dG9tOiBcIjVweFwiLFxuXHRcdFx0Ym9yZGVyOiB0aGlzLnN0YXRlLmJvcmRlcixcblx0XHRcdGhlaWdodDogXCI1MHB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogdGhpcy5zdGF0ZS5mb250U2l6ZSxcblx0XHRcdHBhZGRpbmdMZWZ0OiBcIjElXCIsXG5cdFx0XHRvdXRsaW5lOiBcIm5vbmVcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdHJlc2l6ZTogXCJub25lXCIsXG5cdFx0fTtcblx0XHRsZXQgbGluZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjVweFwiLFxuXHRcdFx0bGluZUhlaWdodDogXCIyMHB4XCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0b3ZlcmZsb3c6IFwiYXV0b1wiXG5cdFx0fTtcblx0XHRsZXQgY2FtZXJhU3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJsZWZ0XCIsXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjEwcHhcIixcblx0XHRcdGZpbHRlcjogXCJvcGFjaXR5KDUwJSlcIixcblx0XHRcdHdpZHRoOiBcIjIwcHhcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcblx0XHR9O1xuXHRcdGxldCBwb3N0U3R5bGUgPSB7XG5cdFx0XHRmbG9hdDogXCJyaWdodFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiM5MzRjNGNcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250U2l6ZTogXCIxMXB4XCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRwYWRkaW5nOiBcIjJweCA1cHhcIixcblx0XHRcdG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcblx0XHR9O1xuXHRcdGxldCBlcnJvclN0eWxlID0ge1xuXHRcdFx0ZmxvYXQ6IFwicmlnaHRcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcblx0XHRcdGNvbG9yOiBcInJlZFwiXG5cdFx0fTtcblx0XHRsZXQgY291bnRTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcImxlZnRcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjExcHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiMTBweFwiXG5cdFx0fTtcblx0XHRsZXQgZmlsZVN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjIwcHhcIixcblx0XHRcdGhlaWdodDogXCIxMnB4XCIsXG5cdFx0XHRsZWZ0OiBcIi03NnB4XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0b3BhY2l0eTogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBpbWdTdHlsZSA9IHtcblx0XHRcdGZsb2F0OiBcImxlZnRcIixcblx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRtYXJnaW5Cb3R0b206IFwiNXB4XCIsXG5cdFx0XHRoZWlnaHQ6IFwiMTUwcHhcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI2cHhcIixcblx0XHRcdG1hcmdpbkxlZnQ6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjYW1lcmEgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBVUNBWUFBQUNUUUMyK0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFCQWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTURZM0lEYzVMakUxTnpjME55d2dNakF4TlM4d015OHpNQzB5TXpvME1EbzBNaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0oxZFdsa09qWTFSVFl6T1RBMk9EWkRSakV4UkVKQk5rVXlSRGc0TjBORlFVTkNOREEzSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pnNU5qWkdSRGd5T0RVek16RXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamc1TmpaR1JEZ3hPRFV6TXpFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoTllXTnBiblJ2YzJncElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVGs1TnpBMU9HRXRaREkzT0MwME5EWmtMV0U0T0RndE5HTTRNR1E0WVdJMU56Tm1JaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0poWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNll6UmtabVF4TUdNdFkyTmxOUzB4TVRjNExXRTVPR1F0WTJOa1ptTTVPRGs1WVdZd0lpOCtJRHhrWXpwMGFYUnNaVDRnUEhKa1pqcEJiSFErSUR4eVpHWTZiR2tnZUcxc09teGhibWM5SW5ndFpHVm1ZWFZzZENJK1oyeDVjR2hwWTI5dWN6d3ZjbVJtT214cFBpQThMM0prWmpwQmJIUStJRHd2WkdNNmRHbDBiR1UrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrR2J5VE13QUFBTGhKUkVGVWVOcGkrUC8vUHdNdURBUUNRTHdBaVA4VHdDQTFBbmpOSW1EUkFTSXNnZUVEWkZrRUJBWWtXQUxEQ25qTUF3ZlBCRElNSlJaUGdOcEJVMHZnbGpGQ0dUUUhURFF5MXcrS1VRQ3gzbCtBSE5rZ05wRkpINGFKVXBTQUp6VWxVTXVpQlVpR05rRHpGZ2czSUlrdm9JWkZDa2lXb01zMUlBVWpaUllSS0NVT0lNbmpOWWZTVktkQXRlVE55TWdJTSt3QUZ1a0ZhR3J3Z2tHVEdPaVd2S21TWWVsVzFqRURzU0FRVzlEWW5vbDBxNDhBQWd3QURJdmhIUUxsaElJQUFBQUFTVVZPUks1Q1lJST1cIjtcblx0XHRsZXQgaW1hZ2U7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmF3VXJsKSB7XG5cdFx0XHRpbWFnZSA9ICg8aW1nIHN0eWxlPXtpbWdTdHlsZX0gc3JjPXt0aGlzLnN0YXRlLnJhd1VybH0gYWx0PVwidXBsb2FkLWltYWdlXCIgLz4pO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XG5cdFx0XHRcdDxzcGFuIHN0eWxlPXt0aXRsZVN0eWxlfT57dGhpcy5zdGF0ZS50aXRsZX08L3NwYW4+XG5cdFx0XHRcdDx0ZXh0YXJlYSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMuZWRpdElucHV0LmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2xpbmVTdHlsZX0+XG5cdFx0XHRcdFx0PGltZyBzdHlsZT17Y2FtZXJhU3R5bGV9IHNyYz17Y2FtZXJhfSBhbHQ9XCJBRERcIiAvPlxuXHRcdFx0XHRcdDxpbnB1dCBzdHlsZT17ZmlsZVN0eWxlfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17dGhpcy5sb2FkSW1nLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9e2NvdW50U3R5bGV9Pnt0aGlzLnN0YXRlLmNvdW50fS97dGhpcy5zdGF0ZS5sZW5ndGh9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3Bvc3RTdHlsZX0gb25DbGljaz17dGhpcy5zdWJtaXRQb3N0LmJpbmQodGhpcyl9PlBvc3Q8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17ZXJyb3JTdHlsZX0+e3RoaXMuc3RhdGUuZXJyb3J9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17bGluZVN0eWxlfT5cblx0XHRcdFx0XHR7aW1hZ2V9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Bvc3RpbWcuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8XCIxOHB4XCIsXG4gICAgICBmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIixcbiAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplIHx8IFwiOXB4XCIsXG4gICAgICBmb250Q29sb3I6IHRoaXMucHJvcHMuZm9udENvbG9yIHx8IFwiYmxhY2tcIlxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgIGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0YXRlLmZvbnRTaXplLFxuICAgICAgY29sb3I6IHRoaXMuc3RhdGUuZm9udENvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2Y4ZjlcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RlZTJlOFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICB9O1xuICAgIGxldCBoaW50U3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgekluZGV4OiBcIjNcIlxuICAgIH07XG4gICAgbGV0IGJhY2tTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB0b3A6IFwiLVwiICsgdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy5wcm9ncmVzcyAvIHRoaXMucHJvcHMubWF4ICogMTAwICsgXCIlXCIsXG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiOWQxN2ZcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgIHpJbmRleDogXCIyXCJcbiAgICB9O1xuICAgIGxldCBzaG93UHJvZ3Jlc3M7XG4gICAgaWYgKHRoaXMucHJvcHMucGVyY2VudGFnZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBzaG93UHJvZ3Jlc3MgPSB0aGlzLnByb3BzLnByb2dyZXNzICsgXCIgLyBcIiArIHRoaXMucHJvcHMubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93UHJvZ3Jlc3MgPSBwYXJzZUludCh0aGlzLnByb3BzLnByb2dyZXNzIC8gdGhpcy5wcm9wcy5tYXggKiAxMDApICsgXCIgJVwiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGRpdiBzdHlsZT17aGludFN0eWxlfT57c2hvd1Byb2dyZXNzfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrU3R5bGV9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuI21haW4tcHJvZmlsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4jbWFpbi1uYW1le1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDUlO1xcbn1cXG4jbWFpbi1uYW1lIGgxe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNtYWluLW5hbWUgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI21haW4td2F0Y2h7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbWFpbi1uYXR1cmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm1haW4tdGl0bGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDhweCA1JTtcXG59XFxuXFxuLm1haW4tZmFtaWx5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MiU7XFxuICAgIHBhZGRpbmc6IDVweCA0JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5tYWluLWZhbWlseSBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCA1JTtcXG59XFxuLm1haW4tZmFtaWx5IGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1vd25lcntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1vd25lciBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWFpbi1vd25lciBoNXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1haW4tZnJpZW5kIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzElO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ubWFpbi1mcmllbmQgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm1haW4tZnJpZW5kIGg2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7XFxuICAgIHBhZGRpbmc6IDVweCAxMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG5cXG4jYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmFzaWRlLXRpdGxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogNXB4IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdkN2I0O1xcbn1cXG4uYXNpZGUtdGl0bGUgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIHdpZHRoOiAyMnB4O1xcbn1cXG4uYXNpZGUtdGl0bGUgaDR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhc2lkZS1hYmlsaXR5e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LWxlZnR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuI2FzaWRlLWFiaWxpdHktbGVmdD5kaXZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1sZWZ0PmRpdj5oNntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbiNhc2lkZS1hYmlsaXR5LWxlZnQ+ZGl2PnNwYW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1yaWdodHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jYXNpZGUtYWJpbGl0eS1yaWdodD5oNHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWY4NTEzO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmODUxMztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9wZXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGV0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wZXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wZXQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3BldC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9