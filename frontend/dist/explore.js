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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRXhwbG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanM/NjZjYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBlcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXhwbG9yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9leHBsb3JlLmNzcz81NGZmIl0sIm5hbWVzIjpbIkV4cGxvcmUiLCJuZXdUeXBlIiwicHJvcHMiLCJzZWxlY3RFeHBsb3JlVHlwZSIsImV4cGxvcmUiLCJ0eXBlIiwibmF0dXJlIiwibmV3TmF0dXJlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsInJlYWRFeHBsb3JlTW9tZW50cyIsImxvYWQiLCJsb2FkQnV0dG9uIiwibW9tZW50c0RhdGEiLCJsZW5ndGgiLCJsb2NrZXIiLCJsb2FkTW9yZSIsImJpbmQiLCJwaWNrVHlwZSIsInBpY2tOYXR1cmUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3RhdGUiLCJXYXRlcmZhbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhcnNlSW50IiwiY29sdW1uIiwiYWN0aXZlIiwiZm9udEZhbWlseSIsIndhdGVyZmFsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsIm9mZnNldEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImkiLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUeXBlcGlja2VyIiwiY2hvb3NlIiwiaW5kZXgiLCJjaG9vc2VUeXBlIiwiY3Vyc29yIiwiYm9yZGVyIiwicGlja1N0eWxlIiwib3B0aW9ucyIsImRhdGEiLCJjaG9vc2VPbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7MkJBQ0lDLE8sRUFBUztBQUNqQixRQUFLQyxLQUFMLENBQVdDLGlCQUFYLENBQ0MsS0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxJQURwQixFQUVDLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkUsTUFGcEIsRUFHQ0wsT0FIRDtBQUtBOzs7NkJBQ1VNLFMsRUFBVztBQUNyQixRQUFLTCxLQUFMLENBQVdNLG1CQUFYLENBQ0MsS0FBS04sS0FBTCxDQUFXRSxPQUFYLENBQW1CRSxNQURwQixFQUVDLEtBQUtKLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsSUFGcEIsRUFHQ0UsU0FIRDtBQUtBOzs7NkJBQ1U7QUFDVixRQUFLTCxLQUFMLENBQVdPLGtCQUFYLENBQ0MsS0FBS1AsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxJQURwQixFQUVDLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkUsTUFGcEIsRUFHQyxLQUFLSixLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLElBSHBCO0FBS0E7OzsyQkFDUztBQUNULE9BQUlDLG1CQUFKO0FBQ0EsT0FBSSxLQUFLVCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJRLFdBQW5CLENBQStCQyxNQUEvQixLQUEwQyxDQUExQyxJQUErQyxDQUFDLEtBQUtYLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQlUsTUFBdkUsRUFBK0U7QUFDOUVILGlCQUNDO0FBQUE7QUFBQSxPQUFJLElBQUcsYUFBUCxFQUFxQixTQUFVLEtBQUtJLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixD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QWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImV4cGxvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHNlbGVjdEV4cGxvcmVUeXBlLCBzZWxlY3RFeHBsb3JlTmF0dXJlLCByZWFkRXhwbG9yZU1vbWVudHNcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9leHBsb3JlJztcbmltcG9ydCBUeXBlcGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVHlwZXBpY2tlcic7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL2V4cGxvcmUuY3NzJztcblxuY2xhc3MgRXhwbG9yZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHBpY2tUeXBlKG5ld1R5cGUpIHtcblx0XHR0aGlzLnByb3BzLnNlbGVjdEV4cGxvcmVUeXBlKFxuXHRcdFx0dGhpcy5wcm9wcy5leHBsb3JlLnR5cGUsXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUubmF0dXJlLFxuXHRcdFx0bmV3VHlwZVxuXHRcdCk7XG5cdH1cblx0cGlja05hdHVyZShuZXdOYXR1cmUpIHtcblx0XHR0aGlzLnByb3BzLnNlbGVjdEV4cGxvcmVOYXR1cmUoXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUubmF0dXJlLFxuXHRcdFx0dGhpcy5wcm9wcy5leHBsb3JlLnR5cGUsXG5cdFx0XHRuZXdOYXR1cmVcblx0XHQpO1xuXHR9XG5cdGxvYWRNb3JlKCkge1xuXHRcdHRoaXMucHJvcHMucmVhZEV4cGxvcmVNb21lbnRzKFxuXHRcdFx0dGhpcy5wcm9wcy5leHBsb3JlLnR5cGUsXG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUubmF0dXJlLFx0XG5cdFx0XHR0aGlzLnByb3BzLmV4cGxvcmUubG9hZFxuXHRcdCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGxldCBsb2FkQnV0dG9uO1xuXHRcdGlmICh0aGlzLnByb3BzLmV4cGxvcmUubW9tZW50c0RhdGEubGVuZ3RoICE9PSAwICYmICF0aGlzLnByb3BzLmV4cGxvcmUubG9ja2VyKSB7XG5cdFx0XHRsb2FkQnV0dG9uID0gKFxuXHRcdFx0XHQ8aDYgaWQ9XCJsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcykgfT5cblx0XHRcdFx0XHRMb2FkIG1vcmUgLi4uXG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFxuXHRcdFx0PG1haW4gaWQ9XCJtYWluXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tZmlsdGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWZpbHRlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJ0eXBlXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtdHlwZS5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg0PkZpbHRlciBUeXBlPC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8VHlwZXBpY2tlclxuXHRcdFx0XHRcdFx0ZGF0YT17IFtcIkRvZ1wiLCBcIkNhdFwiLCBcIkJpcmRcIiwgXCJGaXNoXCIsIFwiT3RoZXJcIl0gfSBcblx0XHRcdFx0XHRcdGNvbG9yPVwiIzA1MjQ1NlwiIFxuXHRcdFx0XHRcdFx0d2lkdGg9XCIzNXB4XCIgXG5cdFx0XHRcdFx0XHRjaG9vc2VUeXBlPXsgdGhpcy5waWNrVHlwZS5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluLWZpbHRlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1maWx0ZXItdGl0bGVcIj5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwidHlwZVwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLW5hdHVyZS5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg0PkZpbHRlciBOYXR1cmU8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUeXBlcGlja2VyXG5cdFx0XHRcdFx0XHRkYXRhPXsgW1wiQ3V0ZVwiLCBcIlN0cm9uZ1wiLCBcIlNtYXJ0XCIsIFwiQmVhdXR5XCJdIH0gXG5cdFx0XHRcdFx0XHRjb2xvcj1cIiMwNTI0NTZcIiBcblx0XHRcdFx0XHRcdHdpZHRoPVwiNDBweFwiIFxuXHRcdFx0XHRcdFx0Y2hvb3NlVHlwZT17IHRoaXMucGlja05hdHVyZS5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpbi10aXRsZVwiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwiTW9tZW50XCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtbW9tZW50LnBuZ1wiIC8+XG5cdFx0XHRcdFx0PGgzPkV4cGxvcmUgY3V0ZXMgYXJvdW5kIHRoZSB3b3JsZDwvaDM+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8V2F0ZXJmYWxsIFxuXHRcdFx0XHRcdGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTEwID8gJzQnIDogJzMnIH1cblx0XHRcdFx0XHRpbWFnZT17IHRoaXMucHJvcHMuZXhwbG9yZS5tb21lbnRzRGF0YSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgbG9hZEJ1dHRvbiB9XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IGV4cGxvcmU6IHN0YXRlLmV4cGxvcmUgfSksXG4gIHsgc2VsZWN0RXhwbG9yZVR5cGUsIHNlbGVjdEV4cGxvcmVOYXR1cmUsIHJlYWRFeHBsb3JlTW9tZW50cyB9XG4pKEV4cGxvcmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL0V4cGxvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjUwcHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZXBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjaG9vc2U6IG51bGxcblx0XHR9XG5cdH1cblx0Y2hvb3NlT25lKGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuY2hvb3NlICE9IGluZGV4KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtjaG9vc2U6IGluZGV4fSk7XG5cdFx0XHR0aGlzLnByb3BzLmNob29zZVR5cGUoaW5kZXgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtjaG9vc2U6IG51bGx9KTtcblx0XHRcdHRoaXMucHJvcHMuY2hvb3NlVHlwZSgtMSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjNweFwiLFxuXHRcdFx0cGFkZGluZzogXCIzcHggM3B4XCIsXG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcblx0XHRcdG1hcmdpbjogXCIxMHB4IDVweFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgXCIgKyB0aGlzLnByb3BzLmNvbG9yXG5cdFx0fTtcblx0XHRsZXQgcGlja1N0eWxlID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuXHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBcIiArIHRoaXMucHJvcHMuY29sb3IsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCIzcHhcIixcblx0XHRcdHBhZGRpbmc6IFwiM3B4IDNweFwiLFxuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiMTBweCA1cHhcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcblx0XHR9O1xuXHRcdGxldCBvcHRpb25zID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdG9wdGlvbnNbaV0gPSAoXG5cdFx0XHRcdDxoNiBrZXk9e1wiY2hvb3NlIGRpZmZlcmVudFwiICsgaX0gc3R5bGU9eyh0aGlzLnN0YXRlLmNob29zZT09PWkpP3BpY2tTdHlsZTpjb250ZW50U3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hvb3NlT25lLmJpbmQodGhpcywgaSl9PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmRhdGFbaV19XG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG5cdFx0XHRcdHtvcHRpb25zfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1R5cGVwaWNrZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qZXhwbG9yZSBwYWdlKi9cXG4jbWFpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxufVxcblxcbi5tYWluLWZpbHRlcntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aWR0aDogNDglO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBtYXJnaW46IDAgMSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5tYWluLWZpbHRlciBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcbi5tYWluLWZpbHRlciBoNHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1haW4tZmlsdGVyLXRpdGxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNDtcXG4gICAgcGFkZGluZzogN3B4IDMlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuI21haW4tdGl0bGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHggNSU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNlNWU1ZTU7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbiNtYWluLXRpdGxlIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbn1cXG4jbWFpbi10aXRsZSBoM3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAgIC5tYWluLWZpbHRlcntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvZXhwbG9yZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9leHBsb3JlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9leHBsb3JlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZXhwbG9yZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZXhwbG9yZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9