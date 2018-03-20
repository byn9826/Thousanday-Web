webpackJsonp([5],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _watch = __webpack_require__(72);

var _config = __webpack_require__(2);

var _Waterfall = __webpack_require__(198);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(411);

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

/***/ 198:
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "#aside{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#aside-header{\n    display: block;\n    font-weight: bold;\n    margin-bottom: 20px;\n    border-bottom: 1px solid black;\n    padding-bottom: 10px;\n}\n\n.aside-list{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-remove{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-list a{\n    display: block;\n    background-color: #f7d7b4;\n}\n.aside-remove a{\n    display: block;\n    background-color: #abaeb2;\n    border-radius: 5px;\n}\n.aside-list img{\n    width: 30%;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n}\n.aside-remove img{\n    display: none;\n}\n.aside-list h5{\n    display: inline-block;\n    vertical-align: middle;\n    width: 70%;\n    text-align: center;\n}\n.aside-remove h5{\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n.aside-list h6{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n.aside-remove h6{\n    margin-top: 5px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n#aside-load{\n    display: block;\n    cursor: pointer;\n    background-color: #052456;\n    color: white;\n    margin-top: 20px;\n    text-align: center;\n    border-radius: 5px;\n    padding: 3px 0;\n}\n\n#main{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-header{\n    display: block;\n    border-bottom: 5px solid #abaeb2;\n    padding-bottom: 15px;\n    margin-bottom: 20px;\n}\n.main-header-section{\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n    width: 29%;\n    padding: 10px 1%;\n    margin: 0 1%;\n    text-align: center;\n    cursor: pointer;\n}\n.main-header-section img{\n    height: 25px;\n    margin-bottom: 5px;\n}\n.main-header-section h7{\n    display: block;\n}\n\n\n@media only screen and (max-width: 900px) {\n    #aside{\n        width: 25%;\n        margin-left: 5%;\n    }\n\n    #main{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n        min-height: 0;\n    }\n\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n\n\n}\n\n@media only screen and (max-width: 400px) {\n    #aside{\n        width: 90%;\n        margin-left: 5%;\n    }\n\n    #main{\n        width: 90%;\n        margin-left: 5%;\n    }\n}", ""]);

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

var update = __webpack_require__(57)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzPzY2Y2IqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzPzAyNzEiXSwibmFtZXMiOlsiV2F0Y2giLCJwcm9wcyIsInJlYWRXYXRjaFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJjaGFuZ2VQZXRzTG9hZCIsInBldElkIiwiYWN0aW9uIiwidXBkYXRlV2F0Y2hQZXQiLCJ0b2tlbiIsInZhbHVlIiwid2F0Y2giLCJsb2FkTGlzdCIsImxpc3RzIiwid2F0Y2hMaXN0IiwicmVhZFdhdGNoTW9tZW50cyIsImxvYWQiLCJ3YXRjaFBldHMiLCJ0b3RhbFBldHMiLCJsb2FkUGV0cyIsInBldHNMaXN0IiwibGVuZ3RoIiwiYmluZCIsImxvYWRHYWxsZXJ5IiwibG9ja2VyIiwibG9hZE1vcmUiLCJpIiwidW53YXRjaCIsImluZGV4T2YiLCJwZXRfaWQiLCJwZXRfbmFtZSIsImNoYW5nZVdhdGNoIiwiY2hhbmdlTGlzdCIsImJhY2tncm91bmRDb2xvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7O3NDQUNlO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTVDO0FBQ0E7Ozs2QkFDVTtBQUNWLFFBQUtILEtBQUwsQ0FBV0ksY0FBWDtBQUNBOzs7OEJBQ1dDLEssRUFBT0MsTSxFQUFRO0FBQzFCLFFBQUtOLEtBQUwsQ0FBV08sY0FBWCxDQUNDLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEcEIsRUFFQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLEtBRnBCLEVBR0NILEtBSEQsRUFJQ0MsTUFKRDtBQU1BOzs7NkJBQ1VHLEssRUFBTztBQUNqQixPQUFJQSxVQUFVLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBL0IsRUFBeUM7QUFDeEMsUUFBTUMsUUFBUUgsVUFBVSxPQUFWLEdBQ2IsS0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCRyxTQURKLEdBQ2dCLElBRDlCO0FBRUEsU0FBS2IsS0FBTCxDQUFXYyxnQkFBWCxDQUNDRixLQURELEVBQ1EsQ0FEUixFQUNXSCxLQURYLEVBQ2tCLEtBQUtULEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEckM7QUFHQTtBQUNEOzs7NkJBQ1U7QUFDVixPQUFNUyxRQUFRLEtBQUtaLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBakIsS0FBOEIsT0FBOUIsR0FDYixLQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJHLFNBREosR0FDZ0IsSUFEOUI7QUFFQSxRQUFLYixLQUFMLENBQVdjLGdCQUFY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R0FBRyx1QkFBdUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDJCQUEyQixtQkFBbUIseUJBQXlCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLGlEQUFpRCxhQUFhLHFCQUFxQiwwQkFBMEIsT0FBTyxjQUFjLHFCQUFxQixPQUFPLEdBQUcsK0NBQStDLGFBQWEseUJBQXlCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsd0JBQXdCLE9BQU8sY0FBYyx5QkFBeUIscUJBQXFCLDJCQUEyQixPQUFPLE9BQU8sK0NBQStDLGFBQWEscUJBQXFCLDBCQUEwQixPQUFPLGNBQWMscUJBQXFCLDBCQUEwQixPQUFPLEdBQUc7O0FBRWo0Rjs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJ3YXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0cmVhZFdhdGNoUGFnZSwgdXBkYXRlV2F0Y2hQZXQsIHJlYWRXYXRjaE1vbWVudHMsIGNoYW5nZVBldHNMb2FkXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvd2F0Y2gnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IFdhdGVyZmFsbCBmcm9tICcuLi9jb21wb25lbnRzL1dhdGVyZmFsbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy93YXRjaC5jc3MnO1xuXG5jbGFzcyBXYXRjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVhZFdhdGNoUGFnZSh0aGlzLnByb3BzLmFjY291bnQuaWQpO1xuXHR9XG5cdGxvYWRQZXRzKCkge1xuXHRcdHRoaXMucHJvcHMuY2hhbmdlUGV0c0xvYWQoKTtcblx0fVxuXHRjaGFuZ2VXYXRjaChwZXRJZCwgYWN0aW9uKSB7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVXYXRjaFBldChcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdHBldElkLFxuXHRcdFx0YWN0aW9uXG5cdFx0KTtcblx0fVxuXHRjaGFuZ2VMaXN0KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0KSB7XG5cdFx0XHRjb25zdCBsaXN0cyA9IHZhbHVlID09PSBcIndhdGNoXCIgPyBcblx0XHRcdFx0dGhpcy5wcm9wcy53YXRjaC53YXRjaExpc3QgOiBudWxsO1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkV2F0Y2hNb21lbnRzKFxuXHRcdFx0XHRsaXN0cywgMCwgdmFsdWUsIHRoaXMucHJvcHMuYWNjb3VudC5pZFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0bG9hZE1vcmUoKSB7XG5cdFx0Y29uc3QgbGlzdHMgPSB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcblx0XHRcdHRoaXMucHJvcHMud2F0Y2gud2F0Y2hMaXN0IDogbnVsbDtcblx0XHR0aGlzLnByb3BzLnJlYWRXYXRjaE1vbWVudHMoXG5cdFx0XHRsaXN0cywgdGhpcy5wcm9wcy53YXRjaC5sb2FkLCB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0LCB0aGlzLnByb3BzLmFjY291bnQuaWRcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgd2F0Y2hQZXRzID0gW10sIHRvdGFsUGV0cywgbG9hZFBldHM7XG5cdFx0aWYgKHRoaXMucHJvcHMud2F0Y2gubG9hZFBldHMgKiA1ID49IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3QubGVuZ3RoKSB7XG5cdFx0XHR0b3RhbFBldHMgPSB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0Lmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG90YWxQZXRzID0gdGhpcy5wcm9wcy53YXRjaC5sb2FkUGV0cyAqIDU7XG5cdFx0XHRsb2FkUGV0cyA9ICg8aDYgaWQ9XCJhc2lkZS1sb2FkXCIgb25DbGljaz17IHRoaXMubG9hZFBldHMuYmluZCh0aGlzKSB9PkxvYWQgTW9yZSAuLi48L2g2Pik7XG5cdFx0fVxuXHRcdGxldCBsb2FkR2FsbGVyeTtcblx0XHRpZiAoIXRoaXMucHJvcHMud2F0Y2gubG9ja2VyKSB7XG5cdFx0XHRsb2FkR2FsbGVyeSA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFBldHM7IGkrKykge1xuXHRcdFx0d2F0Y2hQZXRzW2ldID0gKFxuXHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdGtleT17IFwicGV0d2F0Y2hcIiArIGkgfSBcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gudW53YXRjaC5pbmRleE9mKHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkKSA9PT0gLTEgP1xuXHRcdFx0XHRcdFx0XHRcImFzaWRlLWxpc3RcIiA6IFwiYXNpZGUtcmVtb3ZlXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvcGV0L1wiICsgdGhpcy5wcm9wcy53YXRjaC5wZXRzTGlzdFtpXS5wZXRfaWQgfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X25hbWUgfSBcblx0XHRcdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkICsgXCIvMC5wbmdcIiB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxoNT57IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X25hbWUgfTwvaDU+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gudW53YXRjaC5pbmRleE9mKHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkKSA9PT0gLTEgPyAoXG5cdFx0XHRcdFx0XHRcdDxoNiBvbkNsaWNrPXsgdGhpcy5jaGFuZ2VXYXRjaC5iaW5kKHRoaXMsIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkLCAwKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFVud2F0Y2hcblx0XHRcdFx0XHRcdFx0PC9oNj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxoNiBvbkNsaWNrPXsgdGhpcy5jaGFuZ2VXYXRjaC5iaW5kKHRoaXMsIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkLCAxKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFdhdGNoXG5cdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVx0XG5cdFx0cmV0dXJuIChbXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdDxoNCBpZD1cImFzaWRlLWhlYWRlclwiPldhdGNoIExpc3Q8L2g0PlxuXHRcdFx0XHR7IHdhdGNoUGV0cyB9XG5cdFx0XHRcdHsgbG9hZFBldHMgfVxuXHRcdFx0PC9hc2lkZT4sXG5cdFx0XHQ8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9XCJtYWluLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jaGFuZ2VMaXN0LmJpbmQodGhpcywgXCJ3YXRjaFwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcIiNlZjg1MTNcIiA6IFwiI2U1ZTVlNVwiXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiV2F0Y2hcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy13YXRjaC5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg2Pk9uIFdhdGNoIExpc3Q8L2g2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jaGFuZ2VMaXN0LmJpbmQodGhpcywgXCJsb3ZlXCIpIH0gXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYWluLWhlYWRlci1zZWN0aW9uXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMud2F0Y2gubG9hZExpc3QgPT09IFwid2F0Y2hcIiA/IFwiI2VmODUxM1wiIDogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJMb3ZlXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtd2F0Y2gucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5Nb21lbnRzIExpa2VkPC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwiY29tbWVudFwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcIiNlZjg1MTNcIiA6IFwiI2U1ZTVlNVwiXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiQ29tbWVudFwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWNvbW1lbnQucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5Db21tZW50cyBMaXN0PC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxXYXRlcmZhbGwgXG5cdFx0XHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAnMycgOiAnMicgfSBcblx0XHRcdFx0XHRpbWFnZT17IHRoaXMucHJvcHMud2F0Y2guZ2FsbGVyeURhdGEgfSBcblx0XHRcdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGxvYWRHYWxsZXJ5IH1cblx0XHRcdDwvbWFpbj5cblx0XHRdKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IHdhdGNoOiBzdGF0ZS53YXRjaCwgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyByZWFkV2F0Y2hQYWdlLCB1cGRhdGVXYXRjaFBldCwgcmVhZFdhdGNoTW9tZW50cywgY2hhbmdlUGV0c0xvYWQgfVxuKShXYXRjaCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1dhdGNoLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxufVxcbiNhc2lkZS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFzaWRlLWxpc3R7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYXNpZGUtcmVtb3Zle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmFzaWRlLWxpc3QgYXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q3YjQ7XFxufVxcbi5hc2lkZS1yZW1vdmUgYXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFlYjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmFzaWRlLWxpc3QgaW1ne1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmFzaWRlLXJlbW92ZSBpbWd7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hc2lkZS1saXN0IGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFzaWRlLXJlbW92ZSBoNXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hc2lkZS1saXN0IGg2e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2FiYWViMjtcXG4gICAgcGFkZGluZzogM3B4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYXNpZGUtcmVtb3ZlIGg2e1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjYWJhZWIyO1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhc2lkZS1sb2Fke1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyNDU2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG59XFxuXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuI21haW4taGVhZGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNhYmFlYjI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWFpbi1oZWFkZXItc2VjdGlvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyOSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMSU7XFxuICAgIG1hcmdpbjogMCAxJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLWhlYWRlci1zZWN0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5tYWluLWhlYWRlci1zZWN0aW9uIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAgICNhc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAjbWFpbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvd2F0Y2guY3NzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dhdGNoLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3dhdGNoLmNzc1xuLy8gbW9kdWxlIGlkID0gNDExXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=