webpackJsonp([4],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _explore = __webpack_require__(67);

var _Typepicker = __webpack_require__(373);

var _Typepicker2 = _interopRequireDefault(_Typepicker);

var _Waterfall = __webpack_require__(205);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(411);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Explore = function (_Component) {
	_inherits(Explore, _Component);

	function Explore() {
		_classCallCheck(this, Explore);

		return _possibleConstructorReturn(this, (Explore.__proto__ || Object.getPrototypeOf(Explore)).apply(this, arguments));
	}

	_createClass(Explore, [{
		key: 'pickType',
		value: function pickType(newType) {
			this.props.selectExploreType(this.props.explore.type, this.props.explore.nature, newType);
		}
	}, {
		key: 'pickNature',
		value: function pickNature(newNature) {
			this.props.selectExploreNature(this.props.explore.nature, this.props.explore.type, newNature);
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			this.props.readExploreMoments(this.props.explore.type, this.props.explore.nature, this.props.explore.load);
		}
	}, {
		key: 'render',
		value: function render() {
			var loadButton = void 0;
			if (this.props.explore.momentsData.length !== 0 && !this.props.explore.locker) {
				loadButton = _react2.default.createElement(
					'h6',
					{ id: 'load-button', onClick: this.loadMore.bind(this) },
					'Load more ...'
				);
			}
			return _react2.default.createElement(
				'main',
				{ id: 'main' },
				_react2.default.createElement(
					'section',
					{ className: 'main-filter' },
					_react2.default.createElement(
						'div',
						{ className: 'main-filter-title' },
						_react2.default.createElement('img', { alt: 'type', src: '/public/icon/glyphicons-type.png' }),
						_react2.default.createElement(
							'h4',
							null,
							'Filter Type'
						)
					),
					_react2.default.createElement(_Typepicker2.default, {
						data: ["Dog", "Cat", "Bird", "Fish", "Other"],
						color: '#052456',
						width: '35px',
						chooseType: this.pickType.bind(this)
					})
				),
				_react2.default.createElement(
					'section',
					{ className: 'main-filter' },
					_react2.default.createElement(
						'div',
						{ className: 'main-filter-title' },
						_react2.default.createElement('img', { alt: 'type', src: '/public/icon/glyphicons-nature.png' }),
						_react2.default.createElement(
							'h4',
							null,
							'Filter Nature'
						)
					),
					_react2.default.createElement(_Typepicker2.default, {
						data: ["Cute", "Strong", "Smart", "Beauty"],
						color: '#052456',
						width: '40px',
						chooseType: this.pickNature.bind(this)
					})
				),
				_react2.default.createElement(
					'div',
					{ id: 'main-title' },
					_react2.default.createElement('img', { alt: 'Moment', src: '/public/icon/glyphicons-moment.png' }),
					_react2.default.createElement(
						'h3',
						null,
						'Explore cutes around the world'
					)
				),
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 910 ? '4' : '3',
					image: this.props.explore.momentsData,
					fontFamily: '\'Rubik\', sans-serif'
				}),
				loadButton
			);
		}
	}]);

	return Explore;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { explore: state.explore };
}, { selectExploreType: _explore.selectExploreType, selectExploreNature: _explore.selectExploreNature, readExploreMoments: _explore.readExploreMoments })(Explore);

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

/***/ 373:
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

var Typepicker = function (_Component) {
	_inherits(Typepicker, _Component);

	function Typepicker(props) {
		_classCallCheck(this, Typepicker);

		var _this = _possibleConstructorReturn(this, (Typepicker.__proto__ || Object.getPrototypeOf(Typepicker)).call(this, props));

		_this.state = {
			choose: null
		};
		return _this;
	}

	_createClass(Typepicker, [{
		key: "chooseOne",
		value: function chooseOne(index) {
			if (this.state.choose != index) {
				this.setState({ choose: index });
				this.props.chooseType(index);
			} else {
				this.setState({ choose: null });
				this.props.chooseType(-1);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var containerStyle = {
				display: "block",
				width: "100%"
			};
			var contentStyle = {
				display: "inline-block",
				borderRadius: "3px",
				padding: "3px 3px",
				width: this.props.width,
				margin: "10px 5px",
				cursor: "pointer",
				border: "1px solid " + this.props.color
			};
			var pickStyle = {
				backgroundColor: this.props.color,
				border: "1px solid " + this.props.color,
				color: "white",
				display: "inline-block",
				borderRadius: "3px",
				padding: "3px 3px",
				width: this.props.width,
				margin: "10px 5px",
				cursor: "pointer"
			};
			var options = [];
			for (var i = 0; i < this.props.data.length; i++) {
				options[i] = _react2.default.createElement(
					"h6",
					{ key: "choose different" + i, style: this.state.choose === i ? pickStyle : contentStyle, onClick: this.chooseOne.bind(this, i) },
					this.props.data[i]
				);
			}
			return _react2.default.createElement(
				"div",
				{ style: containerStyle },
				options
			);
		}
	}]);

	return Typepicker;
}(_react.Component);

exports.default = Typepicker;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*explore page*/\n#main{\n    display: block;\n    width: 80%;\n    margin-left: 10%;\n    padding-top: 100px;\n    min-height: 650px;\n}\n\n.main-filter{\n    display: inline-block;\n    vertical-align: top;\n    width: 48%;\n    text-align: center;\n    border-radius: 5px 5px 0 0;\n    margin: 0 1%;\n    padding-bottom: 5px;\n}\n.main-filter img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3%;\n    width: 15px;\n}\n.main-filter h4{\n    display: inline-block;\n    font-weight: bold;\n    vertical-align: middle;\n}\n\n.main-filter-title{\n    display: block;\n    background-color: #f7d7b4;\n    padding: 7px 3%;\n    border-radius: 4px;\n    margin-bottom: 3px;\n}\n\n#main-title{\n    display: block;\n    font-weight: bold;\n    margin-top: 20px;\n    border-bottom: 1px solid #e5e5e5;\n    border-radius: 10px;\n    padding: 15px 5%;\n    box-shadow: 2px 2px 1px #e5e5e5;\n    margin-bottom: 30px;\n}\n#main-title img{\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3%;\n}\n#main-title h3{\n    display: inline-block;\n    vertical-align: middle;\n}\n\n@media only screen and (max-width: 450px) {\n    .main-filter{\n        display: block;\n        width: 90%;\n    }\n}", ""]);

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
	module.hot.accept("!!../../node_modules/css-loader/index.js!./explore.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./explore.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRXhwbG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBlcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXhwbG9yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9leHBsb3JlLmNzcz81NGZmIl0sIm5hbWVzIjpbIkV4cGxvcmUiLCJuZXdUeXBlIiwicHJvcHMiLCJzZWxlY3RFeHBsb3JlVHlwZSIsImV4cGxvcmUiLCJ0eXBlIiwibmF0dXJlIiwibmV3TmF0dXJlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsInJlYWRFeHBsb3JlTW9tZW50cyIsImxvYWQiLCJsb2FkQnV0dG9uIiwibW9tZW50c0RhdGEiLCJsZW5ndGgiLCJsb2NrZXIiLCJsb2FkTW9yZSIsImJpbmQiLCJwaWNrVHlwZSIsInBpY2tOYXR1cmUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUeXBlcGlja2VyIiwiY2hvb3NlIiwiaW5kZXgiLCJjaG9vc2VUeXBlIiwiY3Vyc29yIiwiYm9yZGVyIiwicGlja1N0eWxlIiwib3B0aW9ucyIsImRhdGEiLCJjaG9vc2VPbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7MkJBQ0lDLE8sRUFBUztBQUNqQixRQUFLQyxLQUFMLENBQVdDLGlCQUFYLENBQ0MsS0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxJQURwQixFQUVDLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkUsTUFGcEIsRUFHQ0wsT0FIRDtBQUtBOzs7NkJBQ1VNLFMsRUFBVztBQUNyQixRQUFLTCxLQUFMLENBQVdNLG1CQUFYLENBQ0MsS0FBS04sS0FBTCxDQUFXRSxPQUFYLENBQW1CRSxNQURwQixFQUVDLEtBQUtKLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsSUFGcEIsRUFHQ0UsU0FIRDtBQUtBOzs7NkJBQ1U7QUFDVixRQUFLTCxLQUFMLENBQVdPLGtCQUFYLENBQ0MsS0FBS1AsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxJQURwQixFQUVDLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkUsTUFGcEIsRUFHQyxLQUFLSixLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLElBSHBCO0FBS0E7OzsyQkFDUztBQUNULE9BQUlDLG1CQUFKO0FBQ0EsT0FBSSxLQUFLVCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJRLFdBQW5CLENBQStCQyxNQUEvQixLQUEwQyxDQUExQyxJQUErQyxDQUFDLEtBQUtYLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQlUsTUFBdkUsRUFBK0U7QUFDOUVILGlCQUNDO0FBQUE7QUFBQSxPQUFJLElBQUcsYUFBUCxFQUFxQixTQUFVLEtBQUtJLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixD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Z0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiZXhwbG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0c2VsZWN0RXhwbG9yZVR5cGUsIHNlbGVjdEV4cGxvcmVOYXR1cmUsIHJlYWRFeHBsb3JlTW9tZW50c1xufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2V4cGxvcmUnO1xuaW1wb3J0IFR5cGVwaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBlcGlja2VyJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZXhwbG9yZS5jc3MnO1xuXG5jbGFzcyBFeHBsb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cGlja1R5cGUobmV3VHlwZSkge1xuXHRcdHRoaXMucHJvcHMuc2VsZWN0RXhwbG9yZVR5cGUoXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUudHlwZSxcblx0XHRcdHRoaXMucHJvcHMuZXhwbG9yZS5uYXR1cmUsXG5cdFx0XHRuZXdUeXBlXG5cdFx0KTtcblx0fVxuXHRwaWNrTmF0dXJlKG5ld05hdHVyZSkge1xuXHRcdHRoaXMucHJvcHMuc2VsZWN0RXhwbG9yZU5hdHVyZShcblx0XHRcdHRoaXMucHJvcHMuZXhwbG9yZS5uYXR1cmUsXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUudHlwZSxcblx0XHRcdG5ld05hdHVyZVxuXHRcdCk7XG5cdH1cblx0bG9hZE1vcmUoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkRXhwbG9yZU1vbWVudHMoXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUudHlwZSxcblx0XHRcdHRoaXMucHJvcHMuZXhwbG9yZS5uYXR1cmUsXHRcblx0XHRcdHRoaXMucHJvcHMuZXhwbG9yZS5sb2FkXG5cdFx0KTtcblx0fVxuICByZW5kZXIoKSB7XG5cdFx0bGV0IGxvYWRCdXR0b247XG5cdFx0aWYgKHRoaXMucHJvcHMuZXhwbG9yZS5tb21lbnRzRGF0YS5sZW5ndGggIT09IDAgJiYgIXRoaXMucHJvcHMuZXhwbG9yZS5sb2NrZXIpIHtcblx0XHRcdGxvYWRCdXR0b24gPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoXG5cdFx0XHQ8bWFpbiBpZD1cIm1haW5cIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbi1maWx0ZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZmlsdGVyLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cInR5cGVcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy10eXBlLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8aDQ+RmlsdGVyIFR5cGU8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUeXBlcGlja2VyXG5cdFx0XHRcdFx0XHRkYXRhPXsgW1wiRG9nXCIsIFwiQ2F0XCIsIFwiQmlyZFwiLCBcIkZpc2hcIiwgXCJPdGhlclwiXSB9IFxuXHRcdFx0XHRcdFx0Y29sb3I9XCIjMDUyNDU2XCIgXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjM1cHhcIiBcblx0XHRcdFx0XHRcdGNob29zZVR5cGU9eyB0aGlzLnBpY2tUeXBlLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tZmlsdGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWZpbHRlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJ0eXBlXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtbmF0dXJlLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8aDQ+RmlsdGVyIE5hdHVyZTwvaDQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFR5cGVwaWNrZXJcblx0XHRcdFx0XHRcdGRhdGE9eyBbXCJDdXRlXCIsIFwiU3Ryb25nXCIsIFwiU21hcnRcIiwgXCJCZWF1dHlcIl0gfSBcblx0XHRcdFx0XHRcdGNvbG9yPVwiIzA1MjQ1NlwiIFxuXHRcdFx0XHRcdFx0d2lkdGg9XCI0MHB4XCIgXG5cdFx0XHRcdFx0XHRjaG9vc2VUeXBlPXsgdGhpcy5waWNrTmF0dXJlLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJNb21lbnRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1tb21lbnQucG5nXCIgLz5cblx0XHRcdFx0XHQ8aDM+RXhwbG9yZSBjdXRlcyBhcm91bmQgdGhlIHdvcmxkPC9oMz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxXYXRlcmZhbGwgXG5cdFx0XHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MTAgPyAnNCcgOiAnMycgfVxuXHRcdFx0XHRcdGltYWdlPXsgdGhpcy5wcm9wcy5leHBsb3JlLm1vbWVudHNEYXRhIH0gXG5cdFx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBsb2FkQnV0dG9uIH1cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgZXhwbG9yZTogc3RhdGUuZXhwbG9yZSB9KSxcbiAgeyBzZWxlY3RFeHBsb3JlVHlwZSwgc2VsZWN0RXhwbG9yZU5hdHVyZSwgcmVhZEV4cGxvcmVNb21lbnRzIH1cbikoRXhwbG9yZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvRXhwbG9yZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNob29zZTogbnVsbFxuXHRcdH1cblx0fVxuXHRjaG9vc2VPbmUoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5jaG9vc2UgIT0gaW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Nob29zZTogaW5kZXh9KTtcblx0XHRcdHRoaXMucHJvcHMuY2hvb3NlVHlwZShpbmRleCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2Nob29zZTogbnVsbH0pO1xuXHRcdFx0dGhpcy5wcm9wcy5jaG9vc2VUeXBlKC0xKTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG5cdFx0XHRwYWRkaW5nOiBcIjNweCAzcHhcIixcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjEwcHggNXB4XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBcIiArIHRoaXMucHJvcHMuY29sb3Jcblx0XHR9O1xuXHRcdGxldCBwaWNrU3R5bGUgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuY29sb3IsXG5cdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5wcm9wcy5jb2xvcixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIzcHggM3B4XCIsXG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcblx0XHRcdG1hcmdpbjogXCIxMHB4IDVweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IG9wdGlvbnMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0b3B0aW9uc1tpXSA9IChcblx0XHRcdFx0PGg2IGtleT17XCJjaG9vc2UgZGlmZmVyZW50XCIgKyBpfSBzdHlsZT17KHRoaXMuc3RhdGUuY2hvb3NlPT09aSk/cGlja1N0eWxlOmNvbnRlbnRTdHlsZX0gb25DbGljaz17dGhpcy5jaG9vc2VPbmUuYmluZCh0aGlzLCBpKX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YVtpXX1cblx0XHRcdFx0PC9oNj5cblx0XHRcdClcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cblx0XHRcdFx0e29wdGlvbnN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVHlwZXBpY2tlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypleHBsb3JlIHBhZ2UqL1xcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuXFxuLm1haW4tZmlsdGVye1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiA0OCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIG1hcmdpbjogMCAxJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuLm1haW4tZmlsdGVyIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuLm1haW4tZmlsdGVyIGg0e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubWFpbi1maWx0ZXItdGl0bGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0O1xcbiAgICBwYWRkaW5nOiA3cHggMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4jbWFpbi10aXRsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTVweCA1JTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI2U1ZTVlNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuI21haW4tdGl0bGUgaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxufVxcbiNtYWluLXRpdGxlIGgze1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gICAgLm1haW4tZmlsdGVye1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9leHBsb3JlLmNzc1xuLy8gbW9kdWxlIGlkID0gMzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2V4cGxvcmUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2V4cGxvcmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9leHBsb3JlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9leHBsb3JlLmNzc1xuLy8gbW9kdWxlIGlkID0gNDExXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=