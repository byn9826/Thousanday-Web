webpackJsonp([3],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _watch = __webpack_require__(65);

var _config = __webpack_require__(4);

var _Waterfall = __webpack_require__(158);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = function (_Component) {
	_inherits(Watch, _Component);

	function Watch() {
		_classCallCheck(this, Watch);

		return _possibleConstructorReturn(this, (Watch.__proto__ || Object.getPrototypeOf(Watch)).apply(this, arguments));
	}

	_createClass(Watch, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.readWatchPage(this.props.account.id);
		}
	}, {
		key: 'loadPets',
		value: function loadPets() {
			this.props.changePetsLoad();
		}
	}, {
		key: 'changeWatch',
		value: function changeWatch(petId, action) {
			this.props.updateWatchPet(this.props.account.id, this.props.account.token, petId, action);
		}
	}, {
		key: 'changeList',
		value: function changeList(value) {
			if (value !== this.props.watch.loadList) {
				var lists = value === "watch" ? this.props.watch.watchList : null;
				this.props.readWatchMoments(lists, 0, value, this.props.account.id);
			}
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			var lists = this.props.watch.loadList === "watch" ? this.props.watch.watchList : null;
			this.props.readWatchMoments(lists, this.props.watch.load, this.props.watch.loadList, this.props.account.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var watchPets = [],
			    totalPets = void 0,
			    loadPets = void 0;
			if (this.props.watch.loadPets * 5 >= this.props.watch.petsList.length) {
				totalPets = this.props.watch.petsList.length;
			} else {
				totalPets = this.props.watch.loadPets * 5;
				loadPets = _react2.default.createElement(
					'h6',
					{ id: 'aside-load', onClick: this.loadPets.bind(this) },
					'Load More ...'
				);
			}
			var loadGallery = void 0;
			if (!this.props.watch.locker) {
				loadGallery = _react2.default.createElement(
					'h6',
					{ id: 'load-button', onClick: this.loadMore.bind(this) },
					'Load more ...'
				);
			}
			for (var i = 0; i < totalPets; i++) {
				watchPets[i] = _react2.default.createElement(
					'div',
					{
						key: "petwatch" + i,
						className: this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ? "aside-list" : "aside-remove"
					},
					_react2.default.createElement(
						'a',
						{ href: "/pet/" + this.props.watch.petsList[i].pet_id },
						_react2.default.createElement('img', {
							alt: this.props.watch.petsList[i].pet_name,
							src: _config.domainUrl + "/img/pet/" + this.props.watch.petsList[i].pet_id + "/0.png"
						}),
						_react2.default.createElement(
							'h5',
							null,
							this.props.watch.petsList[i].pet_name
						)
					),
					this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ? _react2.default.createElement(
						'h6',
						{ onClick: this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 0) },
						'Unwatch'
					) : _react2.default.createElement(
						'h6',
						{ onClick: this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 1) },
						'Watch'
					)
				);
			}
			return [_react2.default.createElement(
				'aside',
				{ id: 'aside', key: 'aside' },
				_react2.default.createElement(
					'h4',
					{ id: 'aside-header' },
					'Watch List'
				),
				watchPets,
				loadPets
			), _react2.default.createElement(
				'main',
				{ id: 'main', key: 'main' },
				_react2.default.createElement(
					'header',
					{ id: 'main-header' },
					_react2.default.createElement(
						'div',
						{
							onClick: this.changeList.bind(this, "watch"),
							className: 'main-header-section',
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement('img', { alt: 'Watch', src: '/public/icon/glyphicons-watch.png' }),
						_react2.default.createElement(
							'h6',
							null,
							'On Watch List'
						)
					),
					_react2.default.createElement(
						'div',
						{
							onClick: this.changeList.bind(this, "love"),
							className: 'main-header-section',
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement('img', { alt: 'Love', src: '/public/icon/glyphicons-watch.png' }),
						_react2.default.createElement(
							'h6',
							null,
							'Moments Liked'
						)
					),
					_react2.default.createElement(
						'div',
						{
							onClick: this.changeList.bind(this, "comment"),
							className: 'main-header-section',
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement('img', { alt: 'Comment', src: '/public/icon/glyphicons-comment.png' }),
						_react2.default.createElement(
							'h6',
							null,
							'Comments List'
						)
					)
				),
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 900 ? '3' : '2',
					image: this.props.watch.galleryData,
					fontFamily: '\'Rubik\', sans-serif'
				}),
				loadGallery
			)];
		}
	}]);

	return Watch;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { watch: state.watch, account: state.account };
}, { readWatchPage: _watch.readWatchPage, updateWatchPet: _watch.updateWatchPet, readWatchMoments: _watch.readWatchMoments, changePetsLoad: _watch.changePetsLoad })(Watch);

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

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#aside{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#aside-header{\n    display: block;\n    font-weight: bold;\n    margin-bottom: 20px;\n    border-bottom: 1px solid black;\n    padding-bottom: 10px;\n}\n\n.aside-list{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-remove{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-list a{\n    display: block;\n    background-color: #f7d7b4;\n}\n.aside-remove a{\n    display: block;\n    background-color: #abaeb2;\n    border-radius: 5px;\n}\n.aside-list img{\n    width: 30%;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n}\n.aside-remove img{\n    display: none;\n}\n.aside-list h5{\n    display: inline-block;\n    vertical-align: middle;\n    width: 70%;\n    text-align: center;\n}\n.aside-remove h5{\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n.aside-list h6{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n.aside-remove h6{\n    margin-top: 5px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n#aside-load{\n    display: block;\n    cursor: pointer;\n    background-color: #052456;\n    color: white;\n    margin-top: 20px;\n    text-align: center;\n    border-radius: 5px;\n    padding: 3px 0;\n}\n\n#main{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-header{\n    display: block;\n    border-bottom: 5px solid #abaeb2;\n    padding-bottom: 15px;\n    margin-bottom: 20px;\n}\n.main-header-section{\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n    width: 29%;\n    padding: 10px 1%;\n    margin: 0 1%;\n    text-align: center;\n    cursor: pointer;\n}\n.main-header-section img{\n    height: 25px;\n    margin-bottom: 5px;\n}\n.main-header-section h7{\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(171);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./watch.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./watch.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzPzAyNzEiXSwibmFtZXMiOlsiV2F0Y2giLCJwcm9wcyIsInJlYWRXYXRjaFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJjaGFuZ2VQZXRzTG9hZCIsInBldElkIiwiYWN0aW9uIiwidXBkYXRlV2F0Y2hQZXQiLCJ0b2tlbiIsInZhbHVlIiwid2F0Y2giLCJsb2FkTGlzdCIsImxpc3RzIiwid2F0Y2hMaXN0IiwicmVhZFdhdGNoTW9tZW50cyIsImxvYWQiLCJ3YXRjaFBldHMiLCJ0b3RhbFBldHMiLCJsb2FkUGV0cyIsInBldHNMaXN0IiwibGVuZ3RoIiwiYmluZCIsImxvYWRHYWxsZXJ5IiwibG9ja2VyIiwibG9hZE1vcmUiLCJpIiwidW53YXRjaCIsImluZGV4T2YiLCJwZXRfaWQiLCJwZXRfbmFtZSIsImNoYW5nZVdhdGNoIiwiY2hhbmdlTGlzdCIsImJhY2tncm91bmRDb2xvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7O3NDQUNlO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTVDO0FBQ0E7Ozs2QkFDVTtBQUNWLFFBQUtILEtBQUwsQ0FBV0ksY0FBWDtBQUNBOzs7OEJBQ1dDLEssRUFBT0MsTSxFQUFRO0FBQzFCLFFBQUtOLEtBQUwsQ0FBV08sY0FBWCxDQUNDLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEcEIsRUFFQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLEtBRnBCLEVBR0NILEtBSEQsRUFJQ0MsTUFKRDtBQU1BOzs7NkJBQ1VHLEssRUFBTztBQUNqQixPQUFJQSxVQUFVLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBL0IsRUFBeUM7QUFDeEMsUUFBTUMsUUFBUUgsVUFBVSxPQUFWLEdBQ2IsS0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCRyxTQURKLEdBQ2dCLElBRDlCO0FBRUEsU0FBS2IsS0FBTCxDQUFXYyxnQkFBWCxDQUNDRixLQURELEVBQ1EsQ0FEUixFQUNXSCxLQURYLEVBQ2tCLEtBQUtULEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEckM7QUFHQTtBQUNEOzs7NkJBQ1U7QUFDVixPQUFNUyxRQUFRLEtBQUtaLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBakIsS0FBOEIsT0FBOUIsR0FDYixLQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJHLFNBREosR0FDZ0IsSUFEOUI7QUFFQSxRQUFLYixLQUFMLENBQVdjLGdCQUFYLENBQ0NG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QkFBdUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDJCQUEyQixtQkFBbUIseUJBQXlCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHOztBQUU1c0U7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoid2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHJlYWRXYXRjaFBhZ2UsIHVwZGF0ZVdhdGNoUGV0LCByZWFkV2F0Y2hNb21lbnRzLCBjaGFuZ2VQZXRzTG9hZFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3dhdGNoJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvd2F0Y2guY3NzJztcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRXYXRjaFBhZ2UodGhpcy5wcm9wcy5hY2NvdW50LmlkKTtcblx0fVxuXHRsb2FkUGV0cygpIHtcblx0XHR0aGlzLnByb3BzLmNoYW5nZVBldHNMb2FkKCk7XG5cdH1cblx0Y2hhbmdlV2F0Y2gocGV0SWQsIGFjdGlvbikge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlV2F0Y2hQZXQoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHRwZXRJZCxcblx0XHRcdGFjdGlvblxuXHRcdCk7XG5cdH1cblx0Y2hhbmdlTGlzdCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCkge1xuXHRcdFx0Y29uc3QgbGlzdHMgPSB2YWx1ZSA9PT0gXCJ3YXRjaFwiID8gXG5cdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gud2F0Y2hMaXN0IDogbnVsbDtcblx0XHRcdHRoaXMucHJvcHMucmVhZFdhdGNoTW9tZW50cyhcblx0XHRcdFx0bGlzdHMsIDAsIHZhbHVlLCB0aGlzLnByb3BzLmFjY291bnQuaWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdGxvYWRNb3JlKCkge1xuXHRcdGNvbnN0IGxpc3RzID0gdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCA9PT0gXCJ3YXRjaFwiID8gXG5cdFx0XHR0aGlzLnByb3BzLndhdGNoLndhdGNoTGlzdCA6IG51bGw7XG5cdFx0dGhpcy5wcm9wcy5yZWFkV2F0Y2hNb21lbnRzKFxuXHRcdFx0bGlzdHMsIHRoaXMucHJvcHMud2F0Y2gubG9hZCwgdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCwgdGhpcy5wcm9wcy5hY2NvdW50LmlkXG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHdhdGNoUGV0cyA9IFtdLCB0b3RhbFBldHMsIGxvYWRQZXRzO1xuXHRcdGlmICh0aGlzLnByb3BzLndhdGNoLmxvYWRQZXRzICogNSA+PSB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0Lmxlbmd0aCkge1xuXHRcdFx0dG90YWxQZXRzID0gdGhpcy5wcm9wcy53YXRjaC5wZXRzTGlzdC5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvdGFsUGV0cyA9IHRoaXMucHJvcHMud2F0Y2gubG9hZFBldHMgKiA1O1xuXHRcdFx0bG9hZFBldHMgPSAoPGg2IGlkPVwiYXNpZGUtbG9hZFwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRQZXRzLmJpbmQodGhpcykgfT5Mb2FkIE1vcmUgLi4uPC9oNj4pO1xuXHRcdH1cblx0XHRsZXQgbG9hZEdhbGxlcnk7XG5cdFx0aWYgKCF0aGlzLnByb3BzLndhdGNoLmxvY2tlcikge1xuXHRcdFx0bG9hZEdhbGxlcnkgPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQZXRzOyBpKyspIHtcblx0XHRcdHdhdGNoUGV0c1tpXSA9IChcblx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRrZXk9eyBcInBldHdhdGNoXCIgKyBpIH0gXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLndhdGNoLnVud2F0Y2guaW5kZXhPZih0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCkgPT09IC0xID9cblx0XHRcdFx0XHRcdFx0XCJhc2lkZS1saXN0XCIgOiBcImFzaWRlLXJlbW92ZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3BldC9cIiArIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkIH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9eyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9uYW1lIH0gXG5cdFx0XHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCArIFwiLzAucG5nXCIgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aDU+eyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9uYW1lIH08L2g1PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLndhdGNoLnVud2F0Y2guaW5kZXhPZih0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCkgPT09IC0xID8gKFxuXHRcdFx0XHRcdFx0XHQ8aDYgb25DbGljaz17IHRoaXMuY2hhbmdlV2F0Y2guYmluZCh0aGlzLCB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCwgMCkgfT5cblx0XHRcdFx0XHRcdFx0XHRVbndhdGNoXG5cdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8aDYgb25DbGljaz17IHRoaXMuY2hhbmdlV2F0Y2guYmluZCh0aGlzLCB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCwgMSkgfT5cblx0XHRcdFx0XHRcdFx0XHRXYXRjaFxuXHRcdFx0XHRcdFx0XHQ8L2g2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cdFxuXHRcdHJldHVybiAoW1xuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8aDQgaWQ9XCJhc2lkZS1oZWFkZXJcIj5XYXRjaCBMaXN0PC9oND5cblx0XHRcdFx0eyB3YXRjaFBldHMgfVxuXHRcdFx0XHR7IGxvYWRQZXRzIH1cblx0XHRcdDwvYXNpZGU+LFxuXHRcdFx0PG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aGVhZGVyIGlkPVwibWFpbi1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwid2F0Y2hcIikgfSBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4taGVhZGVyLXNlY3Rpb25cIiBcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCA9PT0gXCJ3YXRjaFwiID8gXCIjZWY4NTEzXCIgOiBcIiNlNWU1ZTVcIlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cIldhdGNoXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtd2F0Y2gucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5PbiBXYXRjaCBMaXN0PC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwibG92ZVwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcIiNlZjg1MTNcIiA6IFwiI2U1ZTVlNVwiXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiTG92ZVwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLXdhdGNoLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8aDY+TW9tZW50cyBMaWtlZDwvaDY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmNoYW5nZUxpc3QuYmluZCh0aGlzLCBcImNvbW1lbnRcIikgfSBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4taGVhZGVyLXNlY3Rpb25cIiBcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCA9PT0gXCJ3YXRjaFwiID8gXCIjZWY4NTEzXCIgOiBcIiNlNWU1ZTVcIlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cIkNvbW1lbnRcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1jb21tZW50LnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8aDY+Q29tbWVudHMgTGlzdDwvaDY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHQ8V2F0ZXJmYWxsIFxuXHRcdFx0XHRcdGNvbHVtbj17IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwID8gJzMnIDogJzInIH0gXG5cdFx0XHRcdFx0aW1hZ2U9eyB0aGlzLnByb3BzLndhdGNoLmdhbGxlcnlEYXRhIH0gXG5cdFx0XHRcdFx0Zm9udEZhbWlseT1cIidSdWJpaycsIHNhbnMtc2VyaWZcIiBcblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBsb2FkR2FsbGVyeSB9XG5cdFx0XHQ8L21haW4+XG5cdFx0XSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyB3YXRjaDogc3RhdGUud2F0Y2gsIGFjY291bnQ6IHN0YXRlLmFjY291bnQgfSksXG4gIHsgcmVhZFdhdGNoUGFnZSwgdXBkYXRlV2F0Y2hQZXQsIHJlYWRXYXRjaE1vbWVudHMsIGNoYW5nZVBldHNMb2FkIH1cbikoV2F0Y2gpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9XYXRjaC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyZmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMjIwcHhcIixcblx0XHRcdHdpZHRoOiAocGFyc2VJbnQoMTAwIC8gdGhpcy5wcm9wcy5jb2x1bW4pIC0yKSArIFwiJVwiLFxuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFtaWx5IHx8IFwiVGltZXMgTmV3IFJvbWFuXCJcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgd2F0ZXJmYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIpO1xuXHRcdGlmICh3YXRlcmZhbGwpIHtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS50b3AgPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXHRzaG93Q29udGVudChpKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlICE9PSBpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpIH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJvb3RTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0bWFyZ2luOiBcIjZweCAxJVwiXG5cdFx0fTtcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgY29udGVudFN0eWxlID0ge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHdpZHRoOiBcIjk2JVwiLFxuXHRcdFx0bWFyZ2luOiBcIjBcIixcblx0XHRcdHBhZGRpbmc6IFwiNHB4IDIlXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0Zm9udEZhbWlseTogdGhpcy5zdGF0ZS5mb250RmFtaWx5LFxuXHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIlxuXHRcdH07XG5cdFx0bGV0IGFsbEltYWdlcyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5pbWFnZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpKSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiIHN0eWxlPXsgY29udGVudFN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5pbWFnZVtpXVsxXSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXsgcm9vdFN0eWxlIH0+XG5cdFx0XHRcdHsgYWxsSW1hZ2VzIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjYXNpZGV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xcbn1cXG4jYXNpZGUtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hc2lkZS1saXN0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmFzaWRlLXJlbW92ZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5hc2lkZS1saXN0IGF7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkN2I0O1xcbn1cXG4uYXNpZGUtcmVtb3ZlIGF7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhZWIyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5hc2lkZS1saXN0IGltZ3tcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5hc2lkZS1yZW1vdmUgaW1ne1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXNpZGUtbGlzdCBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hc2lkZS1yZW1vdmUgaDV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXNpZGUtbGlzdCBoNntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNhYmFlYjI7XFxuICAgIHBhZGRpbmc6IDNweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFzaWRlLXJlbW92ZSBoNntcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2FiYWViMjtcXG4gICAgcGFkZGluZzogM3B4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYXNpZGUtbG9hZHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjQ1NjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDA7XFxufVxcblxcbiNtYWlue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbiNtYWluLWhlYWRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjYWJhZWIyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLm1haW4taGVhZGVyLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMjklO1xcbiAgICBwYWRkaW5nOiAxMHB4IDElO1xcbiAgICBtYXJnaW46IDAgMSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbi1oZWFkZXItc2VjdGlvbiBpbWd7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4ubWFpbi1oZWFkZXItc2VjdGlvbiBoN3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy93YXRjaC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93YXRjaC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93YXRjaC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvd2F0Y2guY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==