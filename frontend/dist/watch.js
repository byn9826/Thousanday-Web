webpackJsonp([5],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(17);

var _watch = __webpack_require__(73);

var _config = __webpack_require__(2);

var _Waterfall = __webpack_require__(205);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

__webpack_require__(421);

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
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.readWatchPage(this.props.account.id);
		}
	}, {
		key: "loadPets",
		value: function loadPets() {
			this.props.changePetsLoad();
		}
	}, {
		key: "changeWatch",
		value: function changeWatch(petId, action) {
			this.props.updateWatchPet(this.props.account.id, this.props.account.token, petId, action);
		}
	}, {
		key: "changeList",
		value: function changeList(value) {
			if (value !== this.props.watch.loadList) {
				var lists = value === "watch" ? this.props.watch.watchList : null;
				this.props.readWatchMoments(lists, 0, value, this.props.account.id);
			}
		}
	}, {
		key: "loadMore",
		value: function loadMore() {
			var lists = this.props.watch.loadList === "watch" ? this.props.watch.watchList : null;
			this.props.readWatchMoments(lists, this.props.watch.load, this.props.watch.loadList, this.props.account.id);
		}
	}, {
		key: "render",
		value: function render() {
			if (this.props.account.id === null) {
				return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/403' });
			}
			var watchPets = [],
			    totalPets = void 0,
			    loadPets = void 0;
			if (this.props.watch.loadPets * 5 >= this.props.watch.petsList.length) {
				totalPets = this.props.watch.petsList.length;
			} else {
				totalPets = this.props.watch.loadPets * 5;
				loadPets = _react2.default.createElement(
					"h6",
					{ id: "aside-load", onClick: this.loadPets.bind(this) },
					"Load More ..."
				);
			}
			var loadGallery = void 0;
			if (!this.props.watch.locker) {
				loadGallery = _react2.default.createElement(
					"h6",
					{ id: "load-button", onClick: this.loadMore.bind(this) },
					"Load more ..."
				);
			}
			for (var i = 0; i < totalPets; i++) {
				watchPets[i] = _react2.default.createElement(
					"div",
					{
						key: "petwatch" + i,
						className: this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ? "aside-list" : "aside-remove"
					},
					_react2.default.createElement(
						"a",
						{ href: "/pet/" + this.props.watch.petsList[i].pet_id },
						_react2.default.createElement("img", {
							alt: this.props.watch.petsList[i].pet_name,
							src: _config.domainUrl + "/img/pet/" + this.props.watch.petsList[i].pet_id + "/0.png"
						}),
						_react2.default.createElement(
							"h5",
							null,
							this.props.watch.petsList[i].pet_name
						)
					),
					this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ? _react2.default.createElement(
						"h6",
						{ onClick: this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 0) },
						"Unwatch"
					) : _react2.default.createElement(
						"h6",
						{ onClick: this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 1) },
						"Watch"
					)
				);
			}
			return [_react2.default.createElement(
				"aside",
				{ id: "aside", key: "aside" },
				_react2.default.createElement(
					"h4",
					{ id: "aside-header" },
					"Watch List"
				),
				watchPets,
				loadPets
			), _react2.default.createElement(
				"main",
				{ id: "main", key: "main" },
				_react2.default.createElement(
					"header",
					{ id: "main-header" },
					_react2.default.createElement(
						"div",
						{
							onClick: this.changeList.bind(this, "watch"),
							className: "main-header-section",
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement("img", { alt: "Watch", src: "/public/icon/glyphicons-watch.png" }),
						_react2.default.createElement(
							"h6",
							null,
							"On Watch List"
						)
					),
					_react2.default.createElement(
						"div",
						{
							onClick: this.changeList.bind(this, "love"),
							className: "main-header-section",
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement("img", { alt: "Love", src: "/public/icon/glyphicons-watch.png" }),
						_react2.default.createElement(
							"h6",
							null,
							"Moments Liked"
						)
					),
					_react2.default.createElement(
						"div",
						{
							onClick: this.changeList.bind(this, "comment"),
							className: "main-header-section",
							style: {
								backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
							}
						},
						_react2.default.createElement("img", { alt: "Comment", src: "/public/icon/glyphicons-comment.png" }),
						_react2.default.createElement(
							"h6",
							null,
							"Comments List"
						)
					)
				),
				_react2.default.createElement(_Waterfall2.default, {
					column: window.innerWidth > 900 ? '3' : '2',
					image: this.props.watch.galleryData,
					fontFamily: "'Rubik', sans-serif"
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

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "#aside{\n    display: inline-block;\n    width: 20%;\n    margin-left: 10%;\n    margin-top: 100px;\n    vertical-align: top;\n    min-height: 650px;\n}\n#aside-header{\n    display: block;\n    font-weight: bold;\n    margin-bottom: 20px;\n    border-bottom: 1px solid black;\n    padding-bottom: 10px;\n}\n\n.aside-list{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-remove{\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n}\n.aside-list a{\n    display: block;\n    background-color: #f7d7b4;\n}\n.aside-remove a{\n    display: block;\n    background-color: #abaeb2;\n    border-radius: 5px;\n}\n.aside-list img{\n    width: 30%;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n}\n.aside-remove img{\n    display: none;\n}\n.aside-list h5{\n    display: inline-block;\n    vertical-align: middle;\n    width: 70%;\n    text-align: center;\n}\n.aside-remove h5{\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n.aside-list h6{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n.aside-remove h6{\n    margin-top: 5px;\n    display: block;\n    text-align: center;\n    color: #abaeb2;\n    padding: 3px 0;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n#aside-load{\n    display: block;\n    cursor: pointer;\n    background-color: #052456;\n    color: white;\n    margin-top: 20px;\n    text-align: center;\n    border-radius: 5px;\n    padding: 3px 0;\n}\n\n#main{\n    display: inline-block;\n    width: 55%;\n    margin-left: 5%;\n    margin-top: 100px;\n    vertical-align: top;\n}\n#main-header{\n    display: block;\n    border-bottom: 5px solid #abaeb2;\n    padding-bottom: 15px;\n    margin-bottom: 20px;\n}\n.main-header-section{\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 5px;\n    width: 29%;\n    padding: 10px 1%;\n    margin: 0 1%;\n    text-align: center;\n    cursor: pointer;\n}\n.main-header-section img{\n    height: 25px;\n    margin-bottom: 5px;\n}\n.main-header-section h7{\n    display: block;\n}\n\n\n@media only screen and (max-width: 900px) {\n    #aside{\n        width: 25%;\n        margin-left: 5%;\n    }\n\n    #main{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 710px) {\n    #aside{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n        margin-top: 0;\n        padding-top: 100px;\n        text-align: center;\n        min-height: 0;\n    }\n\n    #main{\n        display: block;\n        width: 80%;\n        margin-left: 10%;\n    }\n\n\n}\n\n@media only screen and (max-width: 400px) {\n    #aside{\n        width: 90%;\n        margin-left: 5%;\n    }\n\n    #main{\n        width: 90%;\n        margin-left: 5%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(407);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzPzY2Y2IqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzPzAyNzEiXSwibmFtZXMiOlsiV2F0Y2giLCJwcm9wcyIsInJlYWRXYXRjaFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJjaGFuZ2VQZXRzTG9hZCIsInBldElkIiwiYWN0aW9uIiwidXBkYXRlV2F0Y2hQZXQiLCJ0b2tlbiIsInZhbHVlIiwid2F0Y2giLCJsb2FkTGlzdCIsImxpc3RzIiwid2F0Y2hMaXN0IiwicmVhZFdhdGNoTW9tZW50cyIsImxvYWQiLCJ3YXRjaFBldHMiLCJ0b3RhbFBldHMiLCJsb2FkUGV0cyIsInBldHNMaXN0IiwibGVuZ3RoIiwiYmluZCIsImxvYWRHYWxsZXJ5IiwibG9ja2VyIiwibG9hZE1vcmUiLCJpIiwidW53YXRjaCIsImluZGV4T2YiLCJwZXRfaWQiLCJwZXRfbmFtZSIsImNoYW5nZVdhdGNoIiwiY2hhbmdlTGlzdCIsImJhY2tncm91bmRDb2xvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7O3NDQUNlO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTVDO0FBQ0E7Ozs2QkFDVTtBQUNWLFFBQUtILEtBQUwsQ0FBV0ksY0FBWDtBQUNBOzs7OEJBQ1dDLEssRUFBT0MsTSxFQUFRO0FBQzFCLFFBQUtOLEtBQUwsQ0FBV08sY0FBWCxDQUNDLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEcEIsRUFFQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLEtBRnBCLEVBR0NILEtBSEQsRUFJQ0MsTUFKRDtBQU1BOzs7NkJBQ1VHLEssRUFBTztBQUNqQixPQUFJQSxVQUFVLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBL0IsRUFBeUM7QUFDeEMsUUFBTUMsUUFBUUgsVUFBVSxPQUFWLEdBQ2IsS0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCRyxTQURKLEdBQ2dCLElBRDlCO0FBRUEsU0FBS2IsS0FBTCxDQUFXYyxnQkFBWCxDQUNDRixLQURELEVBQ1EsQ0FEUixFQUNXSCxLQURYLEVBQ2tCLEtBQUtULEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEckM7QUFHQTtBQUNEOzs7NkJBQ1U7QUFDVixPQUFNUyxRQUFRLEtBQUtaLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBakIsS0FBOEIsT0FBOUIsR0FDYixLQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJHLFNBREosR0FDZ0IsSUFEOUI7QUFFQSxRQUFLYixLQUFMLENBQVdj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Qix5QkFBeUIseUJBQXlCLHFCQUFxQixHQUFHLFVBQVUsNEJBQTRCLGlCQUFpQixzQkFBc0Isd0JBQXdCLDBCQUEwQixHQUFHLGVBQWUscUJBQXFCLHVDQUF1QywyQkFBMkIsMEJBQTBCLEdBQUcsdUJBQXVCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLGlCQUFpQix1QkFBdUIsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRywyQkFBMkIsbUJBQW1CLHlCQUF5QixHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyxpREFBaUQsYUFBYSxxQkFBcUIsMEJBQTBCLE9BQU8sY0FBYyxxQkFBcUIsT0FBTyxHQUFHLCtDQUErQyxhQUFhLHlCQUF5QixxQkFBcUIsMkJBQTJCLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHdCQUF3QixPQUFPLGNBQWMseUJBQXlCLHFCQUFxQiwyQkFBMkIsT0FBTyxPQUFPLCtDQUErQyxhQUFhLHFCQUFxQiwwQkFBMEIsT0FBTyxjQUFjLHFCQUFxQiwwQkFBMEIsT0FBTyxHQUFHOztBQUVqNEY7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoid2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgXG5cdHJlYWRXYXRjaFBhZ2UsIHVwZGF0ZVdhdGNoUGV0LCByZWFkV2F0Y2hNb21lbnRzLCBjaGFuZ2VQZXRzTG9hZFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3dhdGNoJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBXYXRlcmZhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9XYXRlcmZhbGwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvd2F0Y2guY3NzJztcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlYWRXYXRjaFBhZ2UodGhpcy5wcm9wcy5hY2NvdW50LmlkKTtcblx0fVxuXHRsb2FkUGV0cygpIHtcblx0XHR0aGlzLnByb3BzLmNoYW5nZVBldHNMb2FkKCk7XG5cdH1cblx0Y2hhbmdlV2F0Y2gocGV0SWQsIGFjdGlvbikge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlV2F0Y2hQZXQoXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHRwZXRJZCxcblx0XHRcdGFjdGlvblxuXHRcdCk7XG5cdH1cblx0Y2hhbmdlTGlzdCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCkge1xuXHRcdFx0Y29uc3QgbGlzdHMgPSB2YWx1ZSA9PT0gXCJ3YXRjaFwiID8gXG5cdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gud2F0Y2hMaXN0IDogbnVsbDtcblx0XHRcdHRoaXMucHJvcHMucmVhZFdhdGNoTW9tZW50cyhcblx0XHRcdFx0bGlzdHMsIDAsIHZhbHVlLCB0aGlzLnByb3BzLmFjY291bnQuaWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdGxvYWRNb3JlKCkge1xuXHRcdGNvbnN0IGxpc3RzID0gdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCA9PT0gXCJ3YXRjaFwiID8gXG5cdFx0XHR0aGlzLnByb3BzLndhdGNoLndhdGNoTGlzdCA6IG51bGw7XG5cdFx0dGhpcy5wcm9wcy5yZWFkV2F0Y2hNb21lbnRzKFxuXHRcdFx0bGlzdHMsIHRoaXMucHJvcHMud2F0Y2gubG9hZCwgdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCwgdGhpcy5wcm9wcy5hY2NvdW50LmlkXG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIDxSZWRpcmVjdCB0bz17ICcvNDAzJyB9IC8+O1xuXHRcdH1cblx0XHRsZXQgd2F0Y2hQZXRzID0gW10sIHRvdGFsUGV0cywgbG9hZFBldHM7XG5cdFx0aWYgKHRoaXMucHJvcHMud2F0Y2gubG9hZFBldHMgKiA1ID49IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3QubGVuZ3RoKSB7XG5cdFx0XHR0b3RhbFBldHMgPSB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0Lmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG90YWxQZXRzID0gdGhpcy5wcm9wcy53YXRjaC5sb2FkUGV0cyAqIDU7XG5cdFx0XHRsb2FkUGV0cyA9ICg8aDYgaWQ9XCJhc2lkZS1sb2FkXCIgb25DbGljaz17IHRoaXMubG9hZFBldHMuYmluZCh0aGlzKSB9PkxvYWQgTW9yZSAuLi48L2g2Pik7XG5cdFx0fVxuXHRcdGxldCBsb2FkR2FsbGVyeTtcblx0XHRpZiAoIXRoaXMucHJvcHMud2F0Y2gubG9ja2VyKSB7XG5cdFx0XHRsb2FkR2FsbGVyeSA9IChcblx0XHRcdFx0PGg2IGlkPVwibG9hZC1idXR0b25cIiBvbkNsaWNrPXsgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpIH0+XG5cdFx0XHRcdFx0TG9hZCBtb3JlIC4uLlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0KTtcblx0XHR9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFBldHM7IGkrKykge1xuXHRcdFx0d2F0Y2hQZXRzW2ldID0gKFxuXHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdGtleT17IFwicGV0d2F0Y2hcIiArIGkgfSBcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gudW53YXRjaC5pbmRleE9mKHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkKSA9PT0gLTEgP1xuXHRcdFx0XHRcdFx0XHRcImFzaWRlLWxpc3RcIiA6IFwiYXNpZGUtcmVtb3ZlXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvcGV0L1wiICsgdGhpcy5wcm9wcy53YXRjaC5wZXRzTGlzdFtpXS5wZXRfaWQgfT5cblx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdGFsdD17IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X25hbWUgfSBcblx0XHRcdFx0XHRcdFx0c3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkICsgXCIvMC5wbmdcIiB9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxoNT57IHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X25hbWUgfTwvaDU+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMud2F0Y2gudW53YXRjaC5pbmRleE9mKHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkKSA9PT0gLTEgPyAoXG5cdFx0XHRcdFx0XHRcdDxoNiBvbkNsaWNrPXsgdGhpcy5jaGFuZ2VXYXRjaC5iaW5kKHRoaXMsIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkLCAwKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFVud2F0Y2hcblx0XHRcdFx0XHRcdFx0PC9oNj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxoNiBvbkNsaWNrPXsgdGhpcy5jaGFuZ2VXYXRjaC5iaW5kKHRoaXMsIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkLCAxKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFdhdGNoXG5cdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVx0XG5cdFx0cmV0dXJuIChbXG5cdFx0XHQ8YXNpZGUgaWQ9XCJhc2lkZVwiIGtleT1cImFzaWRlXCI+XG5cdFx0XHRcdDxoNCBpZD1cImFzaWRlLWhlYWRlclwiPldhdGNoIExpc3Q8L2g0PlxuXHRcdFx0XHR7IHdhdGNoUGV0cyB9XG5cdFx0XHRcdHsgbG9hZFBldHMgfVxuXHRcdFx0PC9hc2lkZT4sXG5cdFx0XHQ8bWFpbiBpZD1cIm1haW5cIiBrZXk9XCJtYWluXCI+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9XCJtYWluLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jaGFuZ2VMaXN0LmJpbmQodGhpcywgXCJ3YXRjaFwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcIiNlZjg1MTNcIiA6IFwiI2U1ZTVlNVwiXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiV2F0Y2hcIiBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy13YXRjaC5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg2Pk9uIFdhdGNoIExpc3Q8L2g2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jaGFuZ2VMaXN0LmJpbmQodGhpcywgXCJsb3ZlXCIpIH0gXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYWluLWhlYWRlci1zZWN0aW9uXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMud2F0Y2gubG9hZExpc3QgPT09IFwid2F0Y2hcIiA/IFwiI2VmODUxM1wiIDogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJMb3ZlXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtd2F0Y2gucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5Nb21lbnRzIExpa2VkPC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwiY29tbWVudFwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcIndhdGNoXCIgPyBcIiNlZjg1MTNcIiA6IFwiI2U1ZTVlNVwiXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWcgYWx0PVwiQ29tbWVudFwiIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWNvbW1lbnQucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5Db21tZW50cyBMaXN0PC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxXYXRlcmZhbGwgXG5cdFx0XHRcdFx0Y29sdW1uPXsgd2luZG93LmlubmVyV2lkdGggPiA5MDAgPyAnMycgOiAnMicgfSBcblx0XHRcdFx0XHRpbWFnZT17IHRoaXMucHJvcHMud2F0Y2guZ2FsbGVyeURhdGEgfSBcblx0XHRcdFx0XHRmb250RmFtaWx5PVwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiIFxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGxvYWRHYWxsZXJ5IH1cblx0XHRcdDwvbWFpbj5cblx0XHRdKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IHdhdGNoOiBzdGF0ZS53YXRjaCwgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyByZWFkV2F0Y2hQYWdlLCB1cGRhdGVXYXRjaFBldCwgcmVhZFdhdGNoTW9tZW50cywgY2hhbmdlUGV0c0xvYWQgfVxuKShXYXRjaCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1dhdGNoLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJmYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgXCIyMjBweFwiLFxuXHRcdFx0d2lkdGg6IChwYXJzZUludCgxMDAgLyB0aGlzLnByb3BzLmNvbHVtbikgLTIpICsgXCIlXCIsXG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYW1pbHkgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB3YXRlcmZhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIik7XG5cdFx0aWYgKHdhdGVyZmFsbCkge1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLnRvcCA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHRcdHdhdGVyZmFsbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHdhdGVyZmFsbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG5cdHNob3dDb250ZW50KGkpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgIT09IGkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGkgfSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcm9vdFN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBcIixcblx0XHRcdG1hcmdpbjogXCIwXCJcblx0XHR9O1xuXHRcdGxldCBjb250YWluZXJTdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRtYXJnaW46IFwiNnB4IDElXCJcblx0XHR9O1xuXHRcdGxldCBpbWFnZVN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBjb250ZW50U3R5bGUgPSB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0d2lkdGg6IFwiOTYlXCIsXG5cdFx0XHRtYXJnaW46IFwiMFwiLFxuXHRcdFx0cGFkZGluZzogXCI0cHggMiVcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRmb250RmFtaWx5OiB0aGlzLnN0YXRlLmZvbnRGYW1pbHksXG5cdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG5cdFx0fTtcblx0XHRsZXQgYWxsSW1hZ2VzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGkpIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0aG91c2FuZGF5LXJlYWN0LXdhdGVyZmFsbC1jb250ZW50XCIgc3R5bGU9eyBjb250ZW50U3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmltYWdlW2ldWzFdIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsbEltYWdlc1tpXSA9IChcblx0XHRcdFx0XHQ8YSBcblx0XHRcdFx0XHRcdHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfSBcblx0XHRcdFx0XHRcdGtleT17IFwidGhvdXNhbmRheXJlYWN0d2F0ZXJmYWxsXCIgKyBpIH0gXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyB0aGlzLnNob3dDb250ZW50LmJpbmQodGhpcywgaSkgfSBcblx0XHRcdFx0XHRcdGhyZWY9eyB0aGlzLnByb3BzLmltYWdlW2ldWzJdIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0XHRcdHt9LCBpbWFnZVN0eWxlLCB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB0aGlzLnByb3BzLmltYWdlW2ldWzBdICsgXCIpXCIgfVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9eyByb290U3R5bGUgfT5cblx0XHRcdFx0eyBhbGxJbWFnZXMgfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XYXRlcmZhbGwuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhc2lkZXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxufVxcbiNhc2lkZS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFzaWRlLWxpc3R7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYXNpZGUtcmVtb3Zle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmFzaWRlLWxpc3QgYXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q3YjQ7XFxufVxcbi5hc2lkZS1yZW1vdmUgYXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFlYjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmFzaWRlLWxpc3QgaW1ne1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmFzaWRlLXJlbW92ZSBpbWd7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hc2lkZS1saXN0IGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFzaWRlLXJlbW92ZSBoNXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hc2lkZS1saXN0IGg2e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2FiYWViMjtcXG4gICAgcGFkZGluZzogM3B4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYXNpZGUtcmVtb3ZlIGg2e1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjYWJhZWIyO1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhc2lkZS1sb2Fke1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyNDU2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG59XFxuXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuI21haW4taGVhZGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNhYmFlYjI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWFpbi1oZWFkZXItc2VjdGlvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyOSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMSU7XFxuICAgIG1hcmdpbjogMCAxJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLWhlYWRlci1zZWN0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5tYWluLWhlYWRlci1zZWN0aW9uIGg3e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAgICNhc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAjbWFpbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAjYXNpZGV7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNtYWlue1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvd2F0Y2guY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dhdGNoLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3dhdGNoLmNzc1xuLy8gbW9kdWxlIGlkID0gNDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=