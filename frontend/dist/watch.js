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
							src: _config.domainUrl + "/public/pet/" + this.props.watch.petsList[i].pet_id + "/0.png"
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
								backgroundColor: this.props.watch.loadList === "love" ? "#ef8513" : "#e5e5e5"
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
								backgroundColor: this.props.watch.loadList === "comment" ? "#ef8513" : "#e5e5e5"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2F0ZXJmYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvd2F0Y2guY3NzPzAyNzEiXSwibmFtZXMiOlsiV2F0Y2giLCJwcm9wcyIsInJlYWRXYXRjaFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJjaGFuZ2VQZXRzTG9hZCIsInBldElkIiwiYWN0aW9uIiwidXBkYXRlV2F0Y2hQZXQiLCJ0b2tlbiIsInZhbHVlIiwid2F0Y2giLCJsb2FkTGlzdCIsImxpc3RzIiwid2F0Y2hMaXN0IiwicmVhZFdhdGNoTW9tZW50cyIsImxvYWQiLCJ3YXRjaFBldHMiLCJ0b3RhbFBldHMiLCJsb2FkUGV0cyIsInBldHNMaXN0IiwibGVuZ3RoIiwiYmluZCIsImxvYWRHYWxsZXJ5IiwibG9ja2VyIiwibG9hZE1vcmUiLCJpIiwidW53YXRjaCIsImluZGV4T2YiLCJwZXRfaWQiLCJwZXRfbmFtZSIsImNoYW5nZVdhdGNoIiwiY2hhbmdlTGlzdCIsImJhY2tncm91bmRDb2xvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnYWxsZXJ5RGF0YSIsInN0YXRlIiwiV2F0ZXJmYWxsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUludCIsImNvbHVtbiIsImFjdGl2ZSIsImZvbnRGYW1pbHkiLCJ3YXRlcmZhbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaW1hZ2VTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiY29udGVudFN0eWxlIiwicG9zaXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImFsbEltYWdlcyIsImltYWdlIiwic2hvd0NvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7O3NDQUNlO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTVDO0FBQ0E7Ozs2QkFDVTtBQUNWLFFBQUtILEtBQUwsQ0FBV0ksY0FBWDtBQUNBOzs7OEJBQ1dDLEssRUFBT0MsTSxFQUFRO0FBQzFCLFFBQUtOLEtBQUwsQ0FBV08sY0FBWCxDQUNDLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEcEIsRUFFQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJNLEtBRnBCLEVBR0NILEtBSEQsRUFJQ0MsTUFKRDtBQU1BOzs7NkJBQ1VHLEssRUFBTztBQUNqQixPQUFJQSxVQUFVLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBL0IsRUFBeUM7QUFDeEMsUUFBTUMsUUFBUUgsVUFBVSxPQUFWLEdBQ2IsS0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCRyxTQURKLEdBQ2dCLElBRDlCO0FBRUEsU0FBS2IsS0FBTCxDQUFXYyxnQkFBWCxDQUNDRixLQURELEVBQ1EsQ0FEUixFQUNXSCxLQURYLEVBQ2tCLEtBQUtULEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFEckM7QUFHQTtBQUNEOzs7NkJBQ1U7QUFDVixPQUFNUyxRQUFRLEtBQUtaLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsUUFBakIsS0FBOEIsT0FBOUIsR0FDYixLQUFLWCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJHLFNBREosR0FDZ0IsSUFEOUI7QUFFQSxRQUFLYixLQUFMLENBQVdjLGdCQUFY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QXlCLHlCQUF5QixxQkFBcUIsR0FBRyxVQUFVLDRCQUE0QixpQkFBaUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsR0FBRyxlQUFlLHFCQUFxQix1Q0FBdUMsMkJBQTJCLDBCQUEwQixHQUFHLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLHlCQUF5QixpQkFBaUIsdUJBQXVCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMkJBQTJCLG1CQUFtQix5QkFBeUIsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsaURBQWlELGFBQWEscUJBQXFCLDBCQUEwQixPQUFPLGNBQWMscUJBQXFCLE9BQU8sR0FBRywrQ0FBK0MsYUFBYSx5QkFBeUIscUJBQXFCLDJCQUEyQix3QkFBd0IsNkJBQTZCLDZCQUE2Qix3QkFBd0IsT0FBTyxjQUFjLHlCQUF5QixxQkFBcUIsMkJBQTJCLE9BQU8sT0FBTywrQ0FBK0MsYUFBYSxxQkFBcUIsMEJBQTBCLE9BQU8sY0FBYyxxQkFBcUIsMEJBQTBCLE9BQU8sR0FBRzs7QUFFajRGOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6IndhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFxuXHRyZWFkV2F0Y2hQYWdlLCB1cGRhdGVXYXRjaFBldCwgcmVhZFdhdGNoTW9tZW50cywgY2hhbmdlUGV0c0xvYWRcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy93YXRjaCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJztcbmltcG9ydCAnLi4vc3R5bGVzL3dhdGNoLmNzcyc7XG5cbmNsYXNzIFdhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZWFkV2F0Y2hQYWdlKHRoaXMucHJvcHMuYWNjb3VudC5pZCk7XG5cdH1cblx0bG9hZFBldHMoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VQZXRzTG9hZCgpO1xuXHR9XG5cdGNoYW5nZVdhdGNoKHBldElkLCBhY3Rpb24pIHtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVdhdGNoUGV0KFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0cGV0SWQsXG5cdFx0XHRhY3Rpb25cblx0XHQpO1xuXHR9XG5cdGNoYW5nZUxpc3QodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgIT09IHRoaXMucHJvcHMud2F0Y2gubG9hZExpc3QpIHtcblx0XHRcdGNvbnN0IGxpc3RzID0gdmFsdWUgPT09IFwid2F0Y2hcIiA/IFxuXHRcdFx0XHR0aGlzLnByb3BzLndhdGNoLndhdGNoTGlzdCA6IG51bGw7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRXYXRjaE1vbWVudHMoXG5cdFx0XHRcdGxpc3RzLCAwLCB2YWx1ZSwgdGhpcy5wcm9wcy5hY2NvdW50LmlkXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRsb2FkTW9yZSgpIHtcblx0XHRjb25zdCBsaXN0cyA9IHRoaXMucHJvcHMud2F0Y2gubG9hZExpc3QgPT09IFwid2F0Y2hcIiA/IFxuXHRcdFx0dGhpcy5wcm9wcy53YXRjaC53YXRjaExpc3QgOiBudWxsO1xuXHRcdHRoaXMucHJvcHMucmVhZFdhdGNoTW9tZW50cyhcblx0XHRcdGxpc3RzLCB0aGlzLnByb3BzLndhdGNoLmxvYWQsIHRoaXMucHJvcHMud2F0Y2gubG9hZExpc3QsIHRoaXMucHJvcHMuYWNjb3VudC5pZFxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiA8UmVkaXJlY3QgdG89eyAnLzQwMycgfSAvPjtcblx0XHR9XG5cdFx0bGV0IHdhdGNoUGV0cyA9IFtdLCB0b3RhbFBldHMsIGxvYWRQZXRzO1xuXHRcdGlmICh0aGlzLnByb3BzLndhdGNoLmxvYWRQZXRzICogNSA+PSB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0Lmxlbmd0aCkge1xuXHRcdFx0dG90YWxQZXRzID0gdGhpcy5wcm9wcy53YXRjaC5wZXRzTGlzdC5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvdGFsUGV0cyA9IHRoaXMucHJvcHMud2F0Y2gubG9hZFBldHMgKiA1O1xuXHRcdFx0bG9hZFBldHMgPSAoPGg2IGlkPVwiYXNpZGUtbG9hZFwiIG9uQ2xpY2s9eyB0aGlzLmxvYWRQZXRzLmJpbmQodGhpcykgfT5Mb2FkIE1vcmUgLi4uPC9oNj4pO1xuXHRcdH1cblx0XHRsZXQgbG9hZEdhbGxlcnk7XG5cdFx0aWYgKCF0aGlzLnByb3BzLndhdGNoLmxvY2tlcikge1xuXHRcdFx0bG9hZEdhbGxlcnkgPSAoXG5cdFx0XHRcdDxoNiBpZD1cImxvYWQtYnV0dG9uXCIgb25DbGljaz17IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHRcdExvYWQgbW9yZSAuLi5cblx0XHRcdFx0PC9oNj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQZXRzOyBpKyspIHtcblx0XHRcdHdhdGNoUGV0c1tpXSA9IChcblx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRrZXk9eyBcInBldHdhdGNoXCIgKyBpIH0gXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLndhdGNoLnVud2F0Y2guaW5kZXhPZih0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCkgPT09IC0xID9cblx0XHRcdFx0XHRcdFx0XCJhc2lkZS1saXN0XCIgOiBcImFzaWRlLXJlbW92ZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3BldC9cIiArIHRoaXMucHJvcHMud2F0Y2gucGV0c0xpc3RbaV0ucGV0X2lkIH0+XG5cdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRhbHQ9eyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9uYW1lIH0gXG5cdFx0XHRcdFx0XHRcdHNyYz17IGRvbWFpblVybCArIFwiL3B1YmxpYy9wZXQvXCIgKyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCArIFwiLzAucG5nXCIgfSBcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aDU+eyB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9uYW1lIH08L2g1PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLndhdGNoLnVud2F0Y2guaW5kZXhPZih0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCkgPT09IC0xID8gKFxuXHRcdFx0XHRcdFx0XHQ8aDYgb25DbGljaz17IHRoaXMuY2hhbmdlV2F0Y2guYmluZCh0aGlzLCB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCwgMCkgfT5cblx0XHRcdFx0XHRcdFx0XHRVbndhdGNoXG5cdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8aDYgb25DbGljaz17IHRoaXMuY2hhbmdlV2F0Y2guYmluZCh0aGlzLCB0aGlzLnByb3BzLndhdGNoLnBldHNMaXN0W2ldLnBldF9pZCwgMSkgfT5cblx0XHRcdFx0XHRcdFx0XHRXYXRjaFxuXHRcdFx0XHRcdFx0XHQ8L2g2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cdFxuXHRcdHJldHVybiAoW1xuXHRcdFx0PGFzaWRlIGlkPVwiYXNpZGVcIiBrZXk9XCJhc2lkZVwiPlxuXHRcdFx0XHQ8aDQgaWQ9XCJhc2lkZS1oZWFkZXJcIj5XYXRjaCBMaXN0PC9oND5cblx0XHRcdFx0eyB3YXRjaFBldHMgfVxuXHRcdFx0XHR7IGxvYWRQZXRzIH1cblx0XHRcdDwvYXNpZGU+LFxuXHRcdFx0PG1haW4gaWQ9XCJtYWluXCIga2V5PVwibWFpblwiPlxuXHRcdFx0XHQ8aGVhZGVyIGlkPVwibWFpbi1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwid2F0Y2hcIikgfSBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4taGVhZGVyLXNlY3Rpb25cIiBcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy53YXRjaC5sb2FkTGlzdCA9PT0gXCJ3YXRjaFwiID8gXCIjZWY4NTEzXCIgOiBcIiNlNWU1ZTVcIlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aW1nIGFsdD1cIldhdGNoXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtd2F0Y2gucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5PbiBXYXRjaCBMaXN0PC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwibG92ZVwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcImxvdmVcIiA/IFwiI2VmODUxM1wiIDogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJMb3ZlXCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtd2F0Y2gucG5nXCIgLz5cblx0XHRcdFx0XHRcdDxoNj5Nb21lbnRzIExpa2VkPC9oNj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuY2hhbmdlTGlzdC5iaW5kKHRoaXMsIFwiY29tbWVudFwiKSB9IFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VjdGlvblwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLndhdGNoLmxvYWRMaXN0ID09PSBcImNvbW1lbnRcIiA/IFwiI2VmODUxM1wiIDogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJDb21tZW50XCIgc3JjPVwiL3B1YmxpYy9pY29uL2dseXBoaWNvbnMtY29tbWVudC5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0PGg2PkNvbW1lbnRzIExpc3Q8L2g2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PFdhdGVyZmFsbCBcblx0XHRcdFx0XHRjb2x1bW49eyB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCA/ICczJyA6ICcyJyB9IFxuXHRcdFx0XHRcdGltYWdlPXsgdGhpcy5wcm9wcy53YXRjaC5nYWxsZXJ5RGF0YSB9IFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk9XCInUnViaWsnLCBzYW5zLXNlcmlmXCIgXG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgbG9hZEdhbGxlcnkgfVxuXHRcdFx0PC9tYWluPlxuXHRcdF0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgd2F0Y2g6IHN0YXRlLndhdGNoLCBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IHJlYWRXYXRjaFBhZ2UsIHVwZGF0ZVdhdGNoUGV0LCByZWFkV2F0Y2hNb21lbnRzLCBjaGFuZ2VQZXRzTG9hZCB9XG4pKFdhdGNoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcmZhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjIyMHB4XCIsXG5cdFx0XHR3aWR0aDogKHBhcnNlSW50KDEwMCAvIHRoaXMucHJvcHMuY29sdW1uKSAtMikgKyBcIiVcIixcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhbWlseSB8fCBcIlRpbWVzIE5ldyBSb21hblwiXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHdhdGVyZmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhvdXNhbmRheS1yZWFjdC13YXRlcmZhbGwtY29udGVudFwiKTtcblx0XHRpZiAod2F0ZXJmYWxsKSB7XG5cdFx0XHR3YXRlcmZhbGwuc3R5bGUudG9wID0gXCItXCIgKyB3YXRlcmZhbGwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0d2F0ZXJmYWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgd2F0ZXJmYWxsLm9mZnNldEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cblx0c2hvd0NvbnRlbnQoaSkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gaSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogaSB9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCByb290U3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJ0b3BcIixcblx0XHRcdHBhZGRpbmc6IFwiMFwiLFxuXHRcdFx0bWFyZ2luQm90dG9tOiBcIjUwcHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRhaW5lclN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdG1hcmdpbjogXCI2cHggMSVcIlxuXHRcdH07XG5cdFx0bGV0IGltYWdlU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGNvbnRlbnRTdHlsZSA9IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHR3aWR0aDogXCI5NiVcIixcblx0XHRcdG1hcmdpbjogXCIwXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjRweCAyJVwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdGZvbnRGYW1pbHk6IHRoaXMuc3RhdGUuZm9udEZhbWlseSxcblx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcblx0XHR9O1xuXHRcdGxldCBhbGxJbWFnZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaSkge1xuXHRcdFx0XHRhbGxJbWFnZXNbaV0gPSAoXG5cdFx0XHRcdFx0PGEgXG5cdFx0XHRcdFx0XHRzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0gXG5cdFx0XHRcdFx0XHRrZXk9eyBcInRob3VzYW5kYXlyZWFjdHdhdGVyZmFsbFwiICsgaSB9IFxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5zaG93Q29udGVudC5iaW5kKHRoaXMsIGkpIH0gXG5cdFx0XHRcdFx0XHRocmVmPXsgdGhpcy5wcm9wcy5pbWFnZVtpXVsyXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7fSwgaW1hZ2VTdHlsZSwgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgdGhpcy5wcm9wcy5pbWFnZVtpXVswXSArIFwiKVwiIH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRob3VzYW5kYXktcmVhY3Qtd2F0ZXJmYWxsLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRlbnRTdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuaW1hZ2VbaV1bMV0gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxsSW1hZ2VzW2ldID0gKFxuXHRcdFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0c3R5bGU9eyBjb250YWluZXJTdHlsZSB9IFxuXHRcdFx0XHRcdFx0a2V5PXsgXCJ0aG91c2FuZGF5cmVhY3R3YXRlcmZhbGxcIiArIGkgfSBcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzLCBpKSB9IFxuXHRcdFx0XHRcdFx0aHJlZj17IHRoaXMucHJvcHMuaW1hZ2VbaV1bMl0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0XHRcdFx0e30sIGltYWdlU3R5bGUsIHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHRoaXMucHJvcHMuaW1hZ2VbaV1bMF0gKyBcIilcIiB9XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17IHJvb3RTdHlsZSB9PlxuXHRcdFx0XHR7IGFsbEltYWdlcyB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dhdGVyZmFsbC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2FzaWRle1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuI2FzaWRlLWhlYWRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYXNpZGUtbGlzdHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5hc2lkZS1yZW1vdmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYXNpZGUtbGlzdCBhe1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDdiNDtcXG59XFxuLmFzaWRlLXJlbW92ZSBhe1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWViMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uYXNpZGUtbGlzdCBpbWd7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uYXNpZGUtcmVtb3ZlIGltZ3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFzaWRlLWxpc3QgaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXNpZGUtcmVtb3ZlIGg1e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFzaWRlLWxpc3QgaDZ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjYWJhZWIyO1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hc2lkZS1yZW1vdmUgaDZ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNhYmFlYjI7XFxuICAgIHBhZGRpbmc6IDNweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FzaWRlLWxvYWR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTI0NTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweCAwO1xcbn1cXG5cXG4jbWFpbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4jbWFpbi1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2FiYWViMjtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5tYWluLWhlYWRlci1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDI5JTtcXG4gICAgcGFkZGluZzogMTBweCAxJTtcXG4gICAgbWFyZ2luOiAwIDElO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4taGVhZGVyLXNlY3Rpb24gaW1ne1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLm1haW4taGVhZGVyLXNlY3Rpb24gaDd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNhc2lkZXtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgI21haW57XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gICAgI2FzaWRle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICB9XFxuXFxuICAgICNtYWlue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgICNhc2lkZXtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgI21haW57XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy93YXRjaC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93YXRjaC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2F0Y2guY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93YXRjaC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvd2F0Y2guY3NzXG4vLyBtb2R1bGUgaWQgPSA0MjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==