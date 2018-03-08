webpackJsonp([7],{

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _request = __webpack_require__(67);

var _config = __webpack_require__(4);

__webpack_require__(184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Request = function (_Component) {
	_inherits(Request, _Component);

	function Request() {
		_classCallCheck(this, Request);

		return _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).apply(this, arguments));
	}

	_createClass(Request, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.readRequestPage(this.props.account.id);
		}
	}, {
		key: 'acceptRequest',
		value: function acceptRequest(pet, index) {
			this.props.updateRequestUser(pet, index, this.props.account.id, this.props.account.token, 1);
		}
	}, {
		key: 'deleteRequest',
		value: function deleteRequest(pet, index) {
			this.props.updateRequestUser(pet, index, this.props.account.id, this.props.account.token, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var requestsInfo = this.props.request.requestData.map(function (request, index) {
				return _react2.default.createElement(
					'div',
					{ key: "requestlist" + index, className: 'main-contain' },
					_react2.default.createElement(
						'a',
						{ href: "/user/" + request.sender_id, target: '_blank' },
						_react2.default.createElement('img', { alt: 'Sender', src: _config.domainUrl + "/img/user/" + request.sender_id + ".jpg" })
					),
					_react2.default.createElement(
						'h5',
						null,
						'wants to add you as'
					),
					_react2.default.createElement(
						'a',
						{ href: "/pet/" + request.pet_id, target: '_blank' },
						_react2.default.createElement('img', { alt: 'Sender', src: _config.domainUrl + "/img/pet/" + request.pet_id + "/0.png" })
					),
					_react2.default.createElement(
						'h5',
						null,
						'\'s relative.'
					),
					_react2.default.createElement('input', {
						type: 'button',
						onClick: _this2.acceptRequest.bind(_this2, request.pet_id, index),
						value: 'Accept',
						style: { border: "2px solid #ef8513" }
					}),
					_react2.default.createElement('input', {
						type: 'button',
						onClick: _this2.deleteRequest.bind(_this2, request.pet_id, index),
						value: 'Delete',
						style: { border: "2px solid #abaeb2" }
					}),
					_react2.default.createElement(
						'h6',
						null,
						request.request_time
					)
				);
			});
			return _react2.default.createElement(
				'main',
				{ id: 'main' },
				_react2.default.createElement(
					'h3',
					null,
					'All Requests:'
				),
				requestsInfo
			);
		}
	}]);

	return Request;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { request: state.request, account: state.account };
}, { readRequestPage: _request.readRequestPage, updateRequestUser: _request.updateRequestUser })(Request);

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: block;\n    width: 60%;\n    margin-left: 20%;\n    padding-top: 80px;\n    padding-bottom: 20px;\n    min-height: 650px;\n}\n\n#main h3{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 30px;\n    font-weight: bold;\n    margin-left: 20px;\n    margin-bottom: 20px;\n}\n\n.main-contain{\n    display: block;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    margin-bottom: 15px;\n}\n.main-contain img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50px;\n    padding: 8px 10px;\n    border-radius: 50%;\n}\n.main-contain h5{\n    display: inline-block;\n    vertical-align: middle;\n}\n.main-contain h6{\n    display: block;\n    margin-top: 5px;\n    margin-left: 2%;\n    padding-bottom: 10px;\n}\n.main-contain input{\n    margin-left: 30px;\n    background-color: white;\n    outline: none;\n    cursor: pointer;\n    border-radius: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(183);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./request.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./request.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3JlcXVlc3QuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVxdWVzdC5jc3M/MGE3MiJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwicHJvcHMiLCJyZWFkUmVxdWVzdFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJwZXQiLCJpbmRleCIsInVwZGF0ZVJlcXVlc3RVc2VyIiwidG9rZW4iLCJyZXF1ZXN0c0luZm8iLCJyZXF1ZXN0IiwicmVxdWVzdERhdGEiLCJtYXAiLCJzZW5kZXJfaWQiLCJwZXRfaWQiLCJhY2NlcHRSZXF1ZXN0IiwiYmluZCIsImJvcmRlciIsImRlbGV0ZVJlcXVlc3QiLCJyZXF1ZXN0X3RpbWUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7O3NDQUNlO0FBQ2pCLFFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTlDO0FBQ0Q7OztnQ0FDWUMsRyxFQUFLQyxLLEVBQU87QUFDekIsUUFBS0wsS0FBTCxDQUFXTSxpQkFBWCxDQUNDRixHQURELEVBRUNDLEtBRkQsRUFHQyxLQUFLTCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBSHBCLEVBSUMsS0FBS0gsS0FBTCxDQUFXRSxPQUFYLENBQW1CSyxLQUpwQixFQUtDLENBTEQ7QUFPQTs7O2dDQUNhSCxHLEVBQUtDLEssRUFBTztBQUN6QixRQUFLTCxLQUFMLENBQVdNLGlCQUFYLENBQ0NGLEdBREQsRUFFQ0MsS0FGRCxFQUdDLEtBQUtMLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFIcEIsRUFJQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJLLEtBSnBCLEVBS0MsQ0FMRDtBQU9BOzs7MkJBQ1M7QUFBQTs7QUFDVCxPQUFNQyxlQUFlLEtBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsV0FBbkIsQ0FBK0JDLEdBQS9CLENBQW1DLFVBQUNGLE9BQUQsRUFBVUosS0FBVjtBQUFBLFdBQ3ZEO0FBQUE7QUFBQSxPQUFLLEtBQU0sZ0JBQWdCQSxLQUEzQixFQUFtQyxXQUFVLGNBQTdDO0FBQ0M7QUFBQTtBQUFBLFFBQUcsTUFBTyxXQUFXSSxRQUFRRyxTQUE3QixFQUF5QyxRQUFPLFFBQWhEO0FBQ0MsNkNBQUssS0FBSSxRQUFULEVBQWtCLEtBQU0sb0JBQVksWUFBWixHQUEyQkgsUUFBUUcsU0FBbkMsR0FBK0MsTUFBdkU7QUFERCxNQUREO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpEO0FBS0M7QUFBQTtBQUFBLFFBQUcsTUFBTSxVQUFVSCxRQUFRSSxNQUEzQixFQUFtQyxRQUFPLFFBQTFDO0FBQ0MsNkNBQUssS0FBSSxRQUFULEVBQWtCLEtBQU0sb0JBQVksV0FBWixHQUEwQkosUUFBUUksTUFBbEMsR0FBMkMsUUFBbkU7QUFERCxNQUxEO0FBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJEO0FBU0M7QUFDQyxZQUFLLFFBRE47QUFFQyxlQUFVLE9BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLFNBQThCTixRQUFRSSxNQUF0QyxFQUE4Q1IsS0FBOUMsQ0FGWDtBQUdDLGFBQU0sUUFIUDtBQUlDLGFBQU8sRUFBRVcsUUFBUSxtQkFBVjtBQUpSLE9BVEQ7QUFlQztBQUNDLFlBQUssUUFETjtBQUVDLGVBQVUsT0FBS0MsYUFBTCxDQUFtQkYsSUFBbkIsU0FBOEJOLFFBQVFJLE1BQXRDLEVBQThDUixLQUE5QyxDQUZYO0FBR0MsYUFBTSxRQUhQO0FBSUMsYUFBTyxFQUFFVyxRQUFRLG1CQUFWO0FBSlIsT0FmRDtBQXFCQztBQUFBO0FBQUE7QUFBTVAsY0FBUVM7QUFBZDtBQXJCRCxLQUR1RDtBQUFBLElBQW5DLENBQXJCO0FBeUJFLFVBQ0U7QUFBQTtBQUFBLE1BQU0sSUFBRyxNQUFUO0FBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURFO0FBRUFWO0FBRkEsSUFERjtBQU1EOzs7Ozs7a0JBR1kseUJBQ2IsVUFBQ1csS0FBRDtBQUFBLFFBQVksRUFBRVYsU0FBU1UsTUFBTVYsT0FBakIsRUFBMEJQLFNBQVNpQixNQUFNakIsT0FBekMsRUFBWjtBQUFBLENBRGEsRUFFYixFQUFFRCx5Q0FBRixFQUFtQkssNkNBQW5CLEVBRmEsRUFHYlAsT0FIYSxDOzs7Ozs7O0FDakVmO0FBQ0E7OztBQUdBO0FBQ0EsK0JBQWdDLHFCQUFxQixpQkFBaUIsdUJBQXVCLHdCQUF3QiwyQkFBMkIsd0JBQXdCLEdBQUcsYUFBYSw0QkFBNEIsNkJBQTZCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixHQUFHLGtCQUFrQixxQkFBcUIsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsR0FBRyxvQkFBb0IsNEJBQTRCLDZCQUE2QixrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLG1CQUFtQiw0QkFBNEIsNkJBQTZCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0Isc0JBQXNCLDJCQUEyQixHQUFHLHNCQUFzQix3QkFBd0IsOEJBQThCLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUc7O0FBRXg3Qjs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFxuXHRyZWFkUmVxdWVzdFBhZ2UsIHVwZGF0ZVJlcXVlc3RVc2VyXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcmVxdWVzdCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9yZXF1ZXN0LmNzcyc7XG5cbmNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlYWRSZXF1ZXN0UGFnZSh0aGlzLnByb3BzLmFjY291bnQuaWQpO1xuICB9XG5cdGFjY2VwdFJlcXVlc3QocGV0LCBpbmRleCkge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlUmVxdWVzdFVzZXIoXG5cdFx0XHRwZXQsIFxuXHRcdFx0aW5kZXgsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHQxXG5cdFx0KTtcblx0fVxuXHRkZWxldGVSZXF1ZXN0KHBldCwgaW5kZXgpIHtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVJlcXVlc3RVc2VyKFxuXHRcdFx0cGV0LCBcblx0XHRcdGluZGV4LFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuLFxuXHRcdFx0MFxuXHRcdCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IHJlcXVlc3RzSW5mbyA9IHRoaXMucHJvcHMucmVxdWVzdC5yZXF1ZXN0RGF0YS5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PlxuXHRcdFx0PGRpdiBrZXk9eyBcInJlcXVlc3RsaXN0XCIgKyBpbmRleCB9IGNsYXNzTmFtZT1cIm1haW4tY29udGFpblwiPlxuXHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHJlcXVlc3Quc2VuZGVyX2lkIH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJTZW5kZXJcIiBzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIHJlcXVlc3Quc2VuZGVyX2lkICsgXCIuanBnXCIgfSAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNT53YW50cyB0byBhZGQgeW91IGFzPC9oNT5cblx0XHRcdFx0PGEgaHJlZj17XCIvcGV0L1wiICsgcmVxdWVzdC5wZXRfaWR9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxpbWcgYWx0PVwiU2VuZGVyXCIgc3JjPXsgZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIHJlcXVlc3QucGV0X2lkICsgXCIvMC5wbmdcIiB9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGg1PidzIHJlbGF0aXZlLjwvaDU+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCIgXG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMuYWNjZXB0UmVxdWVzdC5iaW5kKHRoaXMsIHJlcXVlc3QucGV0X2lkLCBpbmRleCkgfSBcblx0XHRcdFx0XHR2YWx1ZT1cIkFjY2VwdFwiIFxuXHRcdFx0XHRcdHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgI2VmODUxM1wiIH19IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiIFxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmRlbGV0ZVJlcXVlc3QuYmluZCh0aGlzLCByZXF1ZXN0LnBldF9pZCwgaW5kZXgpIH0gXG5cdFx0XHRcdFx0dmFsdWU9XCJEZWxldGVcIiBcblx0XHRcdFx0XHRzdHlsZT17eyBib3JkZXI6IFwiMnB4IHNvbGlkICNhYmFlYjJcIiB9fSBcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGg2PnsgcmVxdWVzdC5yZXF1ZXN0X3RpbWUgfTwvaDY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIj5cblx0XHRcdFx0PGgzPkFsbCBSZXF1ZXN0czo8L2gzPlxuXHRcdFx0XHR7IHJlcXVlc3RzSW5mbyB9XG5cdFx0XHQ8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+ICh7IHJlcXVlc3Q6IHN0YXRlLnJlcXVlc3QsIGFjY291bnQ6IHN0YXRlLmFjY291bnQgfSksXG4gIHsgcmVhZFJlcXVlc3RQYWdlLCB1cGRhdGVSZXF1ZXN0VXNlciB9XG4pKFJlcXVlc3QpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9SZXF1ZXN0LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxufVxcblxcbiNtYWluIGgze1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1haW4tY29udGFpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLm1haW4tY29udGFpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tYWluLWNvbnRhaW4gaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm1haW4tY29udGFpbiBoNntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLm1haW4tY29udGFpbiBpbnB1dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3JlcXVlc3QuY3NzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmVxdWVzdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmVxdWVzdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlcXVlc3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3JlcXVlc3QuY3NzXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==