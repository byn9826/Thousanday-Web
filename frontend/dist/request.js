webpackJsonp([9],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _request = __webpack_require__(68);

var _config = __webpack_require__(3);

__webpack_require__(388);

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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "#main{\n    display: block;\n    width: 60%;\n    margin-left: 20%;\n    padding-top: 80px;\n    padding-bottom: 20px;\n    min-height: 650px;\n}\n\n#main h3{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 30px;\n    font-weight: bold;\n    margin-left: 20px;\n    margin-bottom: 20px;\n}\n\n.main-contain{\n    display: block;\n    background-color: #f7f9fc;\n    border-radius: 5px;\n    margin-bottom: 15px;\n}\n.main-contain img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 50px;\n    padding: 8px 10px;\n    border-radius: 50%;\n}\n.main-contain h5{\n    display: inline-block;\n    vertical-align: middle;\n}\n.main-contain h6{\n    display: block;\n    margin-top: 5px;\n    margin-left: 2%;\n    padding-bottom: 10px;\n}\n.main-contain input{\n    margin-left: 30px;\n    background-color: white;\n    outline: none;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n@media only screen and (max-width: 1020px) {\n    #main{\n        width: 80%;\n        margin-left: 10%;\n    }\n}\n\n@media only screen and (max-width: 770px) {\n    #main{\n        width: 90%;\n        margin-left: 5%;\n    }\n}\n\n@media only screen and (max-width: 650px) {\n    .main-contain input{\n        display: block;\n        margin: 20px 5%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(377);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(57)(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3JlcXVlc3QuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVxdWVzdC5jc3M/MGE3MiJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwicHJvcHMiLCJyZWFkUmVxdWVzdFBhZ2UiLCJhY2NvdW50IiwiaWQiLCJwZXQiLCJpbmRleCIsInVwZGF0ZVJlcXVlc3RVc2VyIiwidG9rZW4iLCJyZXF1ZXN0c0luZm8iLCJyZXF1ZXN0IiwicmVxdWVzdERhdGEiLCJtYXAiLCJzZW5kZXJfaWQiLCJwZXRfaWQiLCJhY2NlcHRSZXF1ZXN0IiwiYmluZCIsImJvcmRlciIsImRlbGV0ZVJlcXVlc3QiLCJyZXF1ZXN0X3RpbWUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7O3NDQUNlO0FBQ2pCLFFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBQTlDO0FBQ0Q7OztnQ0FDWUMsRyxFQUFLQyxLLEVBQU87QUFDekIsUUFBS0wsS0FBTCxDQUFXTSxpQkFBWCxDQUNDRixHQURELEVBRUNDLEtBRkQsRUFHQyxLQUFLTCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEVBSHBCLEVBSUMsS0FBS0gsS0FBTCxDQUFXRSxPQUFYLENBQW1CSyxLQUpwQixFQUtDLENBTEQ7QUFPQTs7O2dDQUNhSCxHLEVBQUtDLEssRUFBTztBQUN6QixRQUFLTCxLQUFMLENBQVdNLGlCQUFYLENBQ0NGLEdBREQsRUFFQ0MsS0FGRCxFQUdDLEtBQUtMLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsRUFIcEIsRUFJQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJLLEtBSnBCLEVBS0MsQ0FMRDtBQU9BOzs7MkJBQ1M7QUFBQTs7QUFDVCxPQUFNQyxlQUFlLEtBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsV0FBbkIsQ0FBK0JDLEdBQS9CLENBQW1DLFVBQUNGLE9BQUQsRUFBVUosS0FBVjtBQUFBLFdBQ3ZEO0FBQUE7QUFBQSxPQUFLLEtBQU0sZ0JBQWdCQSxLQUEzQixFQUFtQyxXQUFVLGNBQTdDO0FBQ0M7QUFBQTtBQUFBLFFBQUcsTUFBTyxXQUFXSSxRQUFRRyxTQUE3QixFQUF5QyxRQUFPLFFBQWhEO0FBQ0MsNkNBQUssS0FBSSxRQUFULEVBQWtCLEtBQU0sb0JBQVksWUFBWixHQUEyQkgsUUFBUUcsU0FBbkMsR0FBK0MsTUFBdkU7QUFERCxNQUREO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpEO0FBS0M7QUFBQTtBQUFBLFFBQUcsTUFBTSxVQUFVSCxRQUFRSSxNQUEzQixFQUFtQyxRQUFPLFFBQTFDO0FBQ0MsNkNBQUssS0FBSSxRQUFULEVBQWtCLEtBQU0sb0JBQVksV0FBWixHQUEwQkosUUFBUUksTUFBbEMsR0FBMkMsUUFBbkU7QUFERCxNQUxEO0FBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJEO0FBU0M7QUFDQyxZQUFLLFFBRE47QUFFQyxlQUFVLE9BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLFNBQThCTixRQUFRSSxNQUF0QyxFQUE4Q1IsS0FBOUMsQ0FGWDtBQUdDLGFBQU0sUUFIUDtBQUlDLGFBQU8sRUFBRVcsUUFBUSxtQkFBVjtBQUpSLE9BVEQ7QUFlQztBQUNDLFlBQUssUUFETjtBQUVDLGVBQVUsT0FBS0MsYUFBTCxDQUFtQkYsSUFBbkIsU0FBOEJOLFFBQVFJLE1BQXRDLEVBQThDUixLQUE5QyxDQUZYO0FBR0MsYUFBTSxRQUhQO0FBSUMsYUFBTyxFQUFFVyxRQUFRLG1CQUFWO0FBSlIsT0FmRDtBQXFCQztBQUFBO0FBQUE7QUFBTVAsY0FBUVM7QUFBZDtBQXJCRCxLQUR1RDtBQUFBLElBQW5DLENBQXJCO0FBeUJFLFVBQ0U7QUFBQTtBQUFBLE1BQU0sSUFBRyxNQUFUO0FBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURFO0FBRUFWO0FBRkEsSUFERjtBQU1EOzs7Ozs7a0JBR1kseUJBQ2IsVUFBQ1csS0FBRDtBQUFBLFFBQVksRUFBRVYsU0FBU1UsTUFBTVYsT0FBakIsRUFBMEJQLFNBQVNpQixNQUFNakIsT0FBekMsRUFBWjtBQUFBLENBRGEsRUFFYixFQUFFRCx5Q0FBRixFQUFtQkssNkNBQW5CLEVBRmEsRUFHYlAsT0FIYSxDOzs7Ozs7O0FDakVmO0FBQ0E7OztBQUdBO0FBQ0EsK0JBQWdDLHFCQUFxQixpQkFBaUIsdUJBQXVCLHdCQUF3QiwyQkFBMkIsd0JBQXdCLEdBQUcsYUFBYSw0QkFBNEIsNkJBQTZCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixHQUFHLGtCQUFrQixxQkFBcUIsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsR0FBRyxvQkFBb0IsNEJBQTRCLDZCQUE2QixrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLG1CQUFtQiw0QkFBNEIsNkJBQTZCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0Isc0JBQXNCLDJCQUEyQixHQUFHLHNCQUFzQix3QkFBd0IsOEJBQThCLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsZ0RBQWdELFlBQVkscUJBQXFCLDJCQUEyQixPQUFPLEdBQUcsK0NBQStDLFlBQVkscUJBQXFCLDBCQUEwQixPQUFPLEdBQUcsK0NBQStDLDBCQUEwQix5QkFBeUIsMEJBQTBCLE9BQU8sR0FBRzs7QUFFeHlDOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG5cdHJlYWRSZXF1ZXN0UGFnZSwgdXBkYXRlUmVxdWVzdFVzZXJcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9yZXF1ZXN0JztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCAnLi4vc3R5bGVzL3JlcXVlc3QuY3NzJztcblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMucmVhZFJlcXVlc3RQYWdlKHRoaXMucHJvcHMuYWNjb3VudC5pZCk7XG4gIH1cblx0YWNjZXB0UmVxdWVzdChwZXQsIGluZGV4KSB7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVSZXF1ZXN0VXNlcihcblx0XHRcdHBldCwgXG5cdFx0XHRpbmRleCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlbixcblx0XHRcdDFcblx0XHQpO1xuXHR9XG5cdGRlbGV0ZVJlcXVlc3QocGV0LCBpbmRleCkge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlUmVxdWVzdFVzZXIoXG5cdFx0XHRwZXQsIFxuXHRcdFx0aW5kZXgsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW4sXG5cdFx0XHQwXG5cdFx0KTtcblx0fVxuICByZW5kZXIoKSB7XG5cdFx0Y29uc3QgcmVxdWVzdHNJbmZvID0gdGhpcy5wcm9wcy5yZXF1ZXN0LnJlcXVlc3REYXRhLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+XG5cdFx0XHQ8ZGl2IGtleT17IFwicmVxdWVzdGxpc3RcIiArIGluZGV4IH0gY2xhc3NOYW1lPVwibWFpbi1jb250YWluXCI+XG5cdFx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgcmVxdWVzdC5zZW5kZXJfaWQgfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8aW1nIGFsdD1cIlNlbmRlclwiIHNyYz17IGRvbWFpblVybCArIFwiL2ltZy91c2VyL1wiICsgcmVxdWVzdC5zZW5kZXJfaWQgKyBcIi5qcGdcIiB9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGg1PndhbnRzIHRvIGFkZCB5b3UgYXM8L2g1PlxuXHRcdFx0XHQ8YSBocmVmPXtcIi9wZXQvXCIgKyByZXF1ZXN0LnBldF9pZH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGltZyBhbHQ9XCJTZW5kZXJcIiBzcmM9eyBkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgcmVxdWVzdC5wZXRfaWQgKyBcIi8wLnBuZ1wiIH0gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDU+J3MgcmVsYXRpdmUuPC9oNT5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIiBcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hY2NlcHRSZXF1ZXN0LmJpbmQodGhpcywgcmVxdWVzdC5wZXRfaWQsIGluZGV4KSB9IFxuXHRcdFx0XHRcdHZhbHVlPVwiQWNjZXB0XCIgXG5cdFx0XHRcdFx0c3R5bGU9e3sgYm9yZGVyOiBcIjJweCBzb2xpZCAjZWY4NTEzXCIgfX0gXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCIgXG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMuZGVsZXRlUmVxdWVzdC5iaW5kKHRoaXMsIHJlcXVlc3QucGV0X2lkLCBpbmRleCkgfSBcblx0XHRcdFx0XHR2YWx1ZT1cIkRlbGV0ZVwiIFxuXHRcdFx0XHRcdHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgI2FiYWViMlwiIH19IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDY+eyByZXF1ZXN0LnJlcXVlc3RfdGltZSB9PC9oNj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGlkPVwibWFpblwiPlxuXHRcdFx0XHQ8aDM+QWxsIFJlcXVlc3RzOjwvaDM+XG5cdFx0XHRcdHsgcmVxdWVzdHNJbmZvIH1cblx0XHRcdDwvbWFpbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgcmVxdWVzdDogc3RhdGUucmVxdWVzdCwgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyByZWFkUmVxdWVzdFBhZ2UsIHVwZGF0ZVJlcXVlc3RVc2VyIH1cbikoUmVxdWVzdCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1JlcXVlc3QuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWlue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG59XFxuXFxuI21haW4gaDN7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWlue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ubWFpbi1jb250YWluIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1haW4tY29udGFpbiBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWFpbi1jb250YWluIGg2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ubWFpbi1jb250YWluIGlucHV0e1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xcbiAgICAjbWFpbntcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXG4gICAgI21haW57XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgLm1haW4tY29udGFpbiBpbnB1dHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IDUlO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9yZXF1ZXN0LmNzc1xuLy8gbW9kdWxlIGlkID0gMzc3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlcXVlc3QuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlcXVlc3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yZXF1ZXN0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9yZXF1ZXN0LmNzc1xuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=