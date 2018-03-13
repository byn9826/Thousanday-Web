webpackJsonp([10],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var domainUrl = exports.domainUrl = 'https://smilings.me';

var androidStoreUrl = exports.androidStoreUrl = 'https://play.google.com/store/apps/details?id=com.thousanday';

var googleClientId = exports.googleClientId = '168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com';
var facebookClientId = exports.facebookClientId = '447688265576125';

var readAccountFacebookApi = exports.readAccountFacebookApi = '/account/facebook';
var readAccountGoogleApi = exports.readAccountGoogleApi = '/account/google';
var deleteAccountTokenApi = exports.deleteAccountTokenApi = '/account/logout';

var readHomeMomentsApi = exports.readHomeMomentsApi = '/index/read';
var readExploreMomentsApi = exports.readExploreMomentsApi = '/explore/read';

var readPetPageApi = exports.readPetPageApi = '/pet/read';
var updatePetWatchApi = exports.updatePetWatchApi = '/pet/watch';
var createPetMomentApi = exports.createPetMomentApi = '/upload/moment';
var readPetMomentsApi = exports.readPetMomentsApi = '/pet/load';

var readUserPageApi = exports.readUserPageApi = '/user/read';
var readUserMomentsApi = exports.readUserMomentsApi = '/user/load';

var readMomentPageApi = exports.readMomentPageApi = '/moment/read';
var deleteMomentPageApi = exports.deleteMomentPageApi = '/moment/delete';
var updateMomentLikeApi = exports.updateMomentLikeApi = '/moment/like';
var readMomentCommentsApi = exports.readMomentCommentsApi = '/moment/load';
var createMomentCommentApi = exports.createMomentCommentApi = '/moment/comment';

var readWatchPageApi = exports.readWatchPageApi = '/watch/read';
var createWatchPetApi = exports.createWatchPetApi = '/watch/add';
var deleteWatchPetApi = exports.deleteWatchPetApi = '/watch/remove';
var readWatchMomentsApi = exports.readWatchMomentsApi = '/watch/load';

var readRequestPageApi = exports.readRequestPageApi = '/request/read';
var createRequestUserApi = exports.createRequestUserApi = '/request/accept';
var deleteRequestUserApi = exports.deleteRequestUserApi = '/request/delete';

var readSettingPageApi = exports.readSettingPageApi = '/setting/read';
var updateSettingAboutApi = exports.updateSettingAboutApi = '/setting/about';
var updateSettingNameApi = exports.updateSettingNameApi = '/setting/name';
var createSettingProfileApi = exports.createSettingProfileApi = '/upload/user';

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildGallery;

var _config = __webpack_require__(3);

function buildGallery(data) {
	return data.map(function (image) {
		return [_config.domainUrl + '/img/pet/' + image.pet_id + '/moment/' + image.image_name, image.moment_message, '/moment/' + image.moment_id];
	});
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CLEAR_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = undefined;
exports.changeAccountData = changeAccountData;
exports.readAccountData = readAccountData;
exports.deleteAccountToken = deleteAccountToken;

var _config = __webpack_require__(3);

var CHANGE_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = "account/CHANGE_ACCOUNT_DATA";
var CLEAR_ACCOUNT_DATA = exports.CLEAR_ACCOUNT_DATA = "account/CLEAR_ACCOUNT_DATA";

function changeAccountData(data) {
	return {
		type: CHANGE_ACCOUNT_DATA,
		data: data
	};
}

function readAccountData(portal, token) {
	var apiUrl = portal === 'facebook' ? _config.readAccountFacebookApi : _config.readAccountGoogleApi;
	return function (dispatch) {
		return fetch(_config.domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": token,
				"platform": "website"
			})
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
			localStorage.setItem("id", json[0]);
			localStorage.setItem("name", json[1]);
			localStorage.setItem("token", json[2]);
			dispatch(changeAccountData(json));
		}).catch(function () {
			//error
		});
	};
}

function clearAccountData() {
	return {
		type: CLEAR_ACCOUNT_DATA
	};
}

function deleteAccountToken(id, token) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.deleteAccountTokenApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": token,
				"id": id
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function (json) {
			localStorage.clear();
			dispatch(clearAccountData());
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(82);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(85);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	(0, _router2.default)()
), document.getElementById('root'));

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(152);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.noGetAbility = noGetAbility;
exports.noGetGender = noGetGender;
exports.noGetNature = noGetNature;
exports.noGetType = noGetType;
function noGetAbility(value) {
	value = parseInt(value);
	switch (value) {
		case 0:
			return 'attack';
		case 1:
			return 'defend';
		case 2:
			return 'health';
		case 3:
			return 'swift';
		case 4:
			return 'lucky';
	}
}

function noGetGender(value) {
	return parseInt(value) === 0 ? "♂" : "♀";
}

function noGetNature(value) {
	value = parseInt(value);
	switch (value) {
		case 0:
			return "cute";
		case 1:
			return "strong";
		case 2:
			return "smart";
		case 3:
			return "beauty";
	}
}

function noGetType(value) {
	value = parseInt(value);
	switch (value) {
		case 0:
			return "dog";
		case 1:
			return "cat";
		case 2:
			return "bird";
		case 3:
			return "fish";
		case 4:
			return "other";
	}
}

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
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

var Facebooklogin = function (_Component) {
	_inherits(Facebooklogin, _Component);

	function Facebooklogin(props) {
		_classCallCheck(this, Facebooklogin);

		var _this = _possibleConstructorReturn(this, (Facebooklogin.__proto__ || Object.getPrototypeOf(Facebooklogin)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			response: null
		};
		return _this;
	}

	_createClass(Facebooklogin, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var header = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.id = "facebook-jssdk";
			script.src = "//connect.facebook.net/en_US/sdk.js";
			header.appendChild(script);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			var self = this;
			window.fbAsyncInit = function () {
				FB.init({
					appId: _this2.props.clientId,
					xfbml: true,
					version: 'v2.8'
				});
				// 			FB.getLoginStatus((response) => {
				// 				if (response.status === 'connected') {
				// 					let token = response.authResponse.accessToken;
				// 					FB.api('/me', (response) => {
				// 						self.setState({ response });
				//  						self.props.fLogin(response, token);
				// 					});
				// 				} else {
				// 					self.setState({ response: false });
				// 				}
				// 			});
			};
		}
	}, {
		key: "clickButton",
		value: function clickButton() {
			var self = this;
			if (this.state.response) {
				this.props.fLogin(this.state.response);
			} else {
				FB.login(function (response) {
					if (response.status === 'connected') {
						var token = response.authResponse.accessToken;
						FB.api('/me', function (response) {
							self.setState({ response: response });
							self.props.fLogin(response, token);
						});
					} else {
						self.setState({ response: false });
					}
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var buttonStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: this.state.width,
				cursor: "pointer",
				borderRadius: "5px"
			};
			var facebook = "data:image/png;base64,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";
			return _react2.default.createElement("img", {
				style: buttonStyle,
				src: facebook,
				alt: "Log in with Facebook",
				onClick: this.clickButton.bind(this)
			});
		}
	}]);

	return Facebooklogin;
}(_react.Component);

exports.default = Facebooklogin;

/***/ }),
/* 62 */
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

var Googlelogin = function (_Component) {
	_inherits(Googlelogin, _Component);

	function Googlelogin(props) {
		_classCallCheck(this, Googlelogin);

		var _this = _possibleConstructorReturn(this, (Googlelogin.__proto__ || Object.getPrototypeOf(Googlelogin)).call(this, props));

		_this.state = {
			width: _this.props.width || "100%",
			result: null
		};
		return _this;
	}

	_createClass(Googlelogin, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var header = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = "https://apis.google.com/js/api:client.js";
			header.appendChild(script);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var self = this;
			var interval = setInterval(function () {
				if (document.readyState === 'complete') {
					clearInterval(interval);
					relayout(self);
				}
			}, 500);
			function relayout(self) {
				gapi.load('auth2', function () {
					var instance = gapi.auth2.init({
						client_id: self.props.clientId
					});
					instance.then(function () {
						var user = instance.currentUser.get();
						var profile = user.getBasicProfile();
						// 					if (user.isSignedIn()) {
						// 						let result = {};
						// 						result.id = profile.getId();
						// 						result.name = profile.getName();
						// 						result.firstname = profile.getGivenName();
						// 						result.lastname = profile.getFamilyName();
						// 						result.imageUrl = profile.getImageUrl();
						// 						result.email = profile.getEmail();
						// 						result.token = user.getAuthResponse().id_token;
						// 						self.props.gLogin(result);
						// 						self.setState({ result });
						// 					}
					});
				});
			}
		}
	}, {
		key: "clickButton",
		value: function clickButton() {
			var _this2 = this;

			if (!this.state.result) {
				var instance = gapi.auth2.getAuthInstance();
				instance.signIn().then(function () {
					var user = instance.currentUser.get();
					if (user.isSignedIn()) {
						var result = {};
						var profile = user.getBasicProfile();
						result.id = profile.getId();
						result.name = profile.getName();
						result.firstname = profile.getGivenName();
						result.lastname = profile.getFamilyName();
						result.imageUrl = profile.getImageUrl();
						result.email = profile.getEmail();
						result.token = user.getAuthResponse().id_token;
						_this2.props.gLogin(result);
						_this2.setState({ result: result });
					} else {
						_this2.props.gLogin(false);
					}
				});
			} else {
				this.props.gLogin(this.state.result);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var buttonStyle = {
				display: "inline-block",
				verticalAlign: "middle",
				width: this.state.width,
				cursor: "pointer"
			};
			var google = "data:image/png;base64,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";
			return _react2.default.createElement("img", { style: buttonStyle, src: google, alt: "Log in with Google", onClick: this.clickButton.bind(this) });
		}
	}]);

	return Googlelogin;
}(_react.Component);

exports.default = Googlelogin;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_EXPLORE_MOMENTS = exports.CHANGE_EXPLORE_NATURE = exports.CHANGE_EXPLORE_TYPE = undefined;
exports.readExploreMoments = readExploreMoments;
exports.selectExploreType = selectExploreType;
exports.selectExploreNature = selectExploreNature;

var _config = __webpack_require__(3);

var CHANGE_EXPLORE_TYPE = exports.CHANGE_EXPLORE_TYPE = "explore/CHANGE_EXPLORE_TYPE";
var CHANGE_EXPLORE_NATURE = exports.CHANGE_EXPLORE_NATURE = "explore/CHANGE_EXPLORE_NATURE";
var CHANGE_EXPLORE_MOMENTS = exports.CHANGE_EXPLORE_MOMENTS = "explore/CHANGE_EXPLORE_MOMENTS";

function changeExploreMoments(momentsData, type, nature, load) {
	return {
		type: CHANGE_EXPLORE_MOMENTS,
		data: {
			momentsData: momentsData, type: type, nature: nature, load: load
		}
	};
}

function readExploreMoments(type, nature, load) {
	return function (dispatch) {
		var apiParams = '?load=' + load + '&nature=' + nature + '&type=' + type;
		return fetch(_config.domainUrl + _config.readExploreMomentsApi + apiParams).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(changeExploreMoments(json, type, nature, load));
		}).catch(function () {
			//error
		});
	};
}

function selectExploreType(type, nature, newType) {
	if (newType === -1) {
		return {
			type: CHANGE_EXPLORE_TYPE,
			data: null
		};
	} else if (nature === null) {
		return {
			type: CHANGE_EXPLORE_TYPE,
			data: newType
		};
	} else {
		return readExploreMoments(newType, nature, 0);
	}
}

function selectExploreNature(nature, type, newNature) {
	if (newNature === -1) {
		return {
			type: CHANGE_EXPLORE_NATURE,
			data: null
		};
	} else if (type === null) {
		return {
			type: CHANGE_EXPLORE_NATURE,
			data: newNature
		};
	} else {
		return readExploreMoments(type, newNature, 0);
	}
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_HOME_MOMENTS = undefined;
exports.readHomeMoments = readHomeMoments;

var _config = __webpack_require__(3);

var CHANGE_HOME_MOMENTS = exports.CHANGE_HOME_MOMENTS = "home/CHANGE_HOME_MOMENTS";

function changeHomeMoments(data) {
	return {
		type: CHANGE_HOME_MOMENTS,
		data: data
	};
}

function readHomeMoments(load) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readHomeMomentsApi + '?load=' + load).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(changeHomeMoments(json));
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ADD_MOMENT_COMMENT = exports.SHOW_COMMENT_EMPTY = exports.CHANGE_MOMENT_COMMENTS = exports.CHANGE_MOMENT_LIKE = exports.REDIRECT_USER_PAGE = exports.SHOW_MOMENT_DELETE = exports.BUILD_MOMENT_PAGE = undefined;
exports.readMomentPage = readMomentPage;
exports.showMomentDelete = showMomentDelete;
exports.deleteMomentPage = deleteMomentPage;
exports.updateMomentLike = updateMomentLike;
exports.readMomentComments = readMomentComments;
exports.showCommentEmpty = showCommentEmpty;
exports.createMomentComment = createMomentComment;

var _config = __webpack_require__(3);

var BUILD_MOMENT_PAGE = exports.BUILD_MOMENT_PAGE = "moment/BUILD_MOMENT_PAGE";
var SHOW_MOMENT_DELETE = exports.SHOW_MOMENT_DELETE = "moment/SHOW_MOMENT_DELETE";
var REDIRECT_USER_PAGE = exports.REDIRECT_USER_PAGE = "moment/REDIRECT_USER_PAGE";
var CHANGE_MOMENT_LIKE = exports.CHANGE_MOMENT_LIKE = "moment/CHANGE_MOMENT_LIKE";
var CHANGE_MOMENT_COMMENTS = exports.CHANGE_MOMENT_COMMENTS = "moment/CHANGE_MOMENT_COMMENTS";
var SHOW_COMMENT_EMPTY = exports.SHOW_COMMENT_EMPTY = "moment/SHOW_COMMENT_EMPTY";
var ADD_MOMENT_COMMENT = exports.ADD_MOMENT_COMMENT = "moment/ADD_MOMENT_COMMENT";

function buildMomentPage(data) {
	return {
		type: BUILD_MOMENT_PAGE,
		data: data
	};
}

function readMomentPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readMomentPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildMomentPage(json));
		}).catch(function () {
			//error
		});
	};
}

function showMomentDelete() {
	return {
		type: SHOW_MOMENT_DELETE
	};
}

function redirctUserPage() {
	return {
		type: REDIRECT_USER_PAGE
	};
}

function deleteMomentPage(userId, userToken, momentId, petId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.deleteMomentPageApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'pet': petId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(redirctUserPage());
		}).catch(function () {
			//error
		});
	};
}

function changeMomentLike(action, userId) {
	return {
		type: CHANGE_MOMENT_LIKE,
		data: {
			action: action, userId: userId
		}
	};
}

function updateMomentLike(userId, userToken, momentId, action) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateMomentLikeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'action': action
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changeMomentLike(action, userId));
		}).catch(function () {
			//error
		});
	};
}

function changeMomentComments(data) {
	return {
		type: CHANGE_MOMENT_COMMENTS,
		data: data
	};
}

function readMomentComments(momentId, commentLoad, commentAdded) {
	return function (dispatch) {
		var apiParams = '?id=' + momentId + '&load=' + commentLoad + '&add=' + commentAdded;
		return fetch(_config.domainUrl + _config.readMomentCommentsApi + apiParams).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(changeMomentComments(json));
		}).catch(function () {
			//error
		});
	};
}

function showCommentEmpty() {
	return {
		type: SHOW_COMMENT_EMPTY
	};
}

function addMomentComment(userId, content) {
	var data = [content, _config.domainUrl + '/img/user/' + userId + '.jpg', '/user/' + userId, new Date().toISOString().substring(0, 10)];
	return {
		type: ADD_MOMENT_COMMENT,
		data: data
	};
}

function createMomentComment(userId, userToken, momentId, content) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.createMomentCommentApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'content': content
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(addMomentComment(userId, content));
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_PET_MOMENTS = exports.ADD_PET_MOMENT = exports.CHANGE_PET_WATCH = exports.SHOW_ACCOUNT_REQUIRED = exports.BUILD_PET_PAGE = undefined;
exports.readPetPage = readPetPage;
exports.showAccountRequired = showAccountRequired;
exports.updatePetWatch = updatePetWatch;
exports.createPetMoment = createPetMoment;
exports.readPetMoments = readPetMoments;

var _config = __webpack_require__(3);

var BUILD_PET_PAGE = exports.BUILD_PET_PAGE = "pet/BUILD_PET_PAGE";
var SHOW_ACCOUNT_REQUIRED = exports.SHOW_ACCOUNT_REQUIRED = "pet/SHOW_ACCOUNT_REQUIRED";
var CHANGE_PET_WATCH = exports.CHANGE_PET_WATCH = "pet/CHANGE_PET_WATCH";
var ADD_PET_MOMENT = exports.ADD_PET_MOMENT = "pet/ADD_PET_MOMENT";
var CHANGE_PET_MOMENTS = exports.CHANGE_PET_MOMENTS = "pet/CHANGE_PET_MOMENTS";

function buildPetPage(data) {
	return {
		type: BUILD_PET_PAGE,
		data: data
	};
}

function readPetPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readPetPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildPetPage(json));
		}).catch(function () {
			//error
		});
	};
}

function showAccountRequired() {
	return {
		type: SHOW_ACCOUNT_REQUIRED
	};
}

function changePetWatch(action, userId) {
	return {
		type: CHANGE_PET_WATCH,
		data: {
			action: action, userId: userId
		}
	};
}

function updatePetWatch(userId, userToken, petId, action) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updatePetWatchApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'pet': petId,
				'action': action
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changePetWatch(action, userId));
		}).catch(function () {
			//error
		});
	};
}

function addPetMoment(info, petId, message) {
	return {
		type: ADD_PET_MOMENT,
		data: {
			info: info, petId: petId, message: message
		}
	};
}

function createPetMoment(userId, userToken, petId, image, message) {
	return function (dispatch) {
		var type = image.type;
		type = type.split("/")[1];
		type = "." + type;
		var fileData = new FormData();
		fileData.append("file", image, type);
		fileData.append("message", message);
		fileData.append("pet", petId);
		fileData.append("user", userId);
		fileData.append("token", userToken);
		return fetch(_config.domainUrl + _config.createPetMomentApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			processData: false,
			body: fileData
		}).then(function (response) {
			if (response.ok) {
				return response.json();
			}
		}).then(function (result) {
			dispatch(addPetMoment(result, petId, message));
		});
	};
}

function changePetMoments(data) {
	return {
		type: CHANGE_PET_MOMENTS,
		data: data
	};
}

function readPetMoments(petId, load, add) {
	return function (dispatch) {
		var params = '?add=' + add + '&load=' + load + '&pet=' + petId;
		return fetch(_config.domainUrl + _config.readPetMomentsApi + params).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(changePetMoments(json));
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_REQUEST_USER = exports.BUILD_REQUEST_PAGE = undefined;
exports.readRequestPage = readRequestPage;
exports.updateRequestUser = updateRequestUser;

var _config = __webpack_require__(3);

var BUILD_REQUEST_PAGE = exports.BUILD_REQUEST_PAGE = "request/BUILD_REQUEST_PAGE";
var CHANGE_REQUEST_USER = exports.CHANGE_REQUEST_USER = "request/CHANGE_REQUEST_USER";

function buildRequestPage(data) {
	return {
		type: BUILD_REQUEST_PAGE,
		data: data
	};
}

function readRequestPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readRequestPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildRequestPage(json));
		}).catch(function () {
			//error
		});
	};
}

function changeRequestUser(index) {
	return {
		type: CHANGE_REQUEST_USER,
		data: index
	};
}

function updateRequestUser(petId, index, userId, userToken, action) {
	return function (dispatch) {
		var apiUrl = action === 0 ? _config.deleteRequestUserApi : _config.createRequestUserApi;
		return fetch(_config.domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'pet': petId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changeRequestUser(index));
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_SETTING_PROFILE = exports.CHANGE_SETTING_NAME = exports.CHANGE_ACCOUNT_NAME = exports.CHANGE_SETTING_ABOUT = exports.BUILD_SETTING_PAGE = undefined;
exports.readSettingPage = readSettingPage;
exports.updateSettingAbout = updateSettingAbout;
exports.updateSettingName = updateSettingName;
exports.createSettingProfile = createSettingProfile;

var _config = __webpack_require__(3);

var BUILD_SETTING_PAGE = exports.BUILD_SETTING_PAGE = 'setting/BUILD_SETTING_PAGE';
var CHANGE_SETTING_ABOUT = exports.CHANGE_SETTING_ABOUT = 'setting/CHANGE_SETTING_ABOUT';
var CHANGE_ACCOUNT_NAME = exports.CHANGE_ACCOUNT_NAME = 'account/CHANGE_ACCOUNT_NAME';
var CHANGE_SETTING_NAME = exports.CHANGE_SETTING_NAME = 'setting/CHANGE_SETTING_NAME';
var CHANGE_SETTING_PROFILE = exports.CHANGE_SETTING_PROFILE = 'setting/CHANGE_SETTING_PROFILE';

function buildSettingPage(data) {
	return {
		type: BUILD_SETTING_PAGE,
		data: data
	};
}

function readSettingPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readSettingPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildSettingPage(json));
		}).catch(function () {
			//error
		});
	};
}

function changeSettingAbout(data) {
	return {
		type: CHANGE_SETTING_ABOUT,
		data: data
	};
}

function updateSettingAbout(id, token, about) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateSettingAboutApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': id,
				'token': token,
				'about': about
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changeSettingAbout(about));
		}).catch(function () {
			//error
		});
	};
}

function changeAccountName(data) {
	return {
		type: CHANGE_ACCOUNT_NAME,
		data: data
	};
}

function changeSettingName() {
	return {
		type: CHANGE_SETTING_NAME
	};
}

function changeSettingProfile() {
	return {
		type: CHANGE_SETTING_PROFILE
	};
}

function updateSettingName(id, token, name) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateSettingNameApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': id,
				'token': token,
				'name': name
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			localStorage.setItem("name", name);
			dispatch(changeAccountName(name));
			dispatch(changeSettingName());
		}).catch(function () {
			//error
		});
	};
}

function createSettingProfile(id, token, file) {
	return function (dispatch) {
		var fileData = new FormData();
		fileData.append("file", file, id + '.jpg');
		fileData.append("user", id);
		fileData.append("token", token);
		return fetch(_config.domainUrl + _config.createSettingProfileApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			processData: false,
			body: fileData
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changeSettingProfile());
		});
	};
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_USER_MOMENTS = exports.BUILD_USER_PAGE = undefined;
exports.readUserPage = readUserPage;
exports.readUserMoments = readUserMoments;

var _config = __webpack_require__(3);

var BUILD_USER_PAGE = exports.BUILD_USER_PAGE = "user/BUILD_USER_PAGE";
var CHANGE_USER_MOMENTS = exports.CHANGE_USER_MOMENTS = "user/CHANGE_USER_MOMENTS";

function buildUserPage(info, userId) {
	return {
		type: BUILD_USER_PAGE,
		data: {
			info: info, userId: userId
		}
	};
}

function readUserPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readUserPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildUserPage(json, parseInt(id)));
		}).catch(function () {
			//error
		});
	};
}

function changeUserMoments(data) {
	return {
		type: CHANGE_USER_MOMENTS,
		data: data
	};
}

function readUserMoments(belong, load) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readUserMomentsApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'belong': belong,
				'load': load
			})
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(changeUserMoments(json));
		}).catch(function () {
			//error
		});
	};
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_PETS_LOAD = exports.CHANGE_WATCH_MOMENTS = exports.CHANGE_WATCH_PET = exports.BUILD_WATCH_PAGE = undefined;
exports.readWatchPage = readWatchPage;
exports.updateWatchPet = updateWatchPet;
exports.readWatchMoments = readWatchMoments;
exports.changePetsLoad = changePetsLoad;

var _config = __webpack_require__(3);

var BUILD_WATCH_PAGE = exports.BUILD_WATCH_PAGE = "watch/BUILD_WATCH_PAGE";
var CHANGE_WATCH_PET = exports.CHANGE_WATCH_PET = "watch/CHANGE_WATCH_PET";
var CHANGE_WATCH_MOMENTS = exports.CHANGE_WATCH_MOMENTS = "watch/CHANGE_WATCH_MOMENTS";
var CHANGE_PETS_LOAD = exports.CHANGE_PETS_LOAD = "watch/CHANGE_PETS_LOAD";

function buildWatchPage(data) {
	return {
		type: BUILD_WATCH_PAGE,
		data: data
	};
}

function readWatchPage(id) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readWatchPageApi + '?id=' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			dispatch(buildWatchPage(json));
		}).catch(function () {
			//error
		});
	};
}

function changeWatchPet(action, petId) {
	return {
		type: CHANGE_WATCH_PET,
		data: {
			action: action, petId: petId
		}
	};
}

function updateWatchPet(userId, userToken, petId, action) {
	return function (dispatch) {
		var apiUrl = action === 0 ? _config.deleteWatchPetApi : _config.createWatchPetApi;
		return fetch(_config.domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'pet': petId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
		}).then(function () {
			dispatch(changeWatchPet(action, petId));
		}).catch(function () {
			//error
		});
	};
}

function changeWatchMoments(moments, load, loadList) {
	return {
		type: CHANGE_WATCH_MOMENTS,
		data: {
			moments: moments, load: load, loadList: loadList
		}
	};
}

function readWatchMoments(lists, load, loadList, userId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readWatchMomentsApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'list': lists,
				'load': load,
				'route': loadList,
				'user': userId
			})
		}).then(function (response) {
			if (response.ok) {
				return response.json();
			}
		}).then(function (json) {
			dispatch(changeWatchMoments(json, load, loadList));
		}).catch(function () {
			//error
		});
	};
}

function changePetsLoad() {
	return {
		type: CHANGE_PETS_LOAD
	};
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildComments;

var _config = __webpack_require__(3);

function buildComments(data) {
	return data.map(function (comment) {
		return [comment.comment_content, _config.domainUrl + "/img/user/" + comment.user_id + ".jpg", "/user/" + comment.user_id, new Date(comment.comment_time).toISOString().substring(0, 10)];
	});
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _account = __webpack_require__(73);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(75);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(77);

var _pet2 = _interopRequireDefault(_pet);

var _user = __webpack_require__(80);

var _user2 = _interopRequireDefault(_user);

var _moment = __webpack_require__(76);

var _moment2 = _interopRequireDefault(_moment);

var _explore = __webpack_require__(74);

var _explore2 = _interopRequireDefault(_explore);

var _watch = __webpack_require__(81);

var _watch2 = _interopRequireDefault(_watch);

var _request = __webpack_require__(78);

var _request2 = _interopRequireDefault(_request);

var _setting = __webpack_require__(79);

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	account: _account2.default,
	home: _home2.default,
	moment: _moment2.default,
	pet: _pet2.default,
	user: _user2.default,
	explore: _explore2.default,
	watch: _watch2.default,
	request: _request2.default,
	setting: _setting2.default
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(36);

var _setting = __webpack_require__(68);

var initState = {
	id: null,
	name: null,
	token: null
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _account.CHANGE_ACCOUNT_DATA:
			if (state.id === null && action.data[0] !== null) {
				return _extends({}, state, {
					id: parseInt(action.data[0]),
					name: action.data[1],
					token: action.data[2]
				});
			}
		case _account.CLEAR_ACCOUNT_DATA:
			return _extends({}, state, {
				id: null,
				name: null,
				token: null
			});
		case _setting.CHANGE_ACCOUNT_NAME:
			return _extends({}, state, {
				name: action.data
			});
		default:
			return state;
	}
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _explore = __webpack_require__(63);

var _buildGallery = __webpack_require__(9);

var _buildGallery2 = _interopRequireDefault(_buildGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
	type: null,
	nature: null,
	momentsData: [],
	load: 0,
	locker: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _explore.CHANGE_EXPLORE_TYPE:
			return _extends({}, state, {
				type: action.data,
				momentsData: [],
				load: 0
			});
		case _explore.CHANGE_EXPLORE_NATURE:
			return _extends({}, state, {
				nature: action.data,
				momentsData: [],
				load: 0
			});
		case _explore.CHANGE_EXPLORE_MOMENTS:
			var newMoments = action.data.load === 0 ? (0, _buildGallery2.default)(action.data.momentsData) : state.momentsData.concat((0, _buildGallery2.default)(action.data.momentsData));
			return _extends({}, state, {
				momentsData: newMoments,
				type: action.data.type,
				nature: action.data.nature,
				load: action.data.load + 1,
				locker: action.data.momentsData.length !== 20
			});
		default:
			return state;
	}
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(64);

var _buildGallery = __webpack_require__(9);

var _buildGallery2 = _interopRequireDefault(_buildGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
	//store moments data
	data: [],
	//record load number
	load: 0,
	//allow load or not
	locker: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _home.CHANGE_HOME_MOMENTS:
			var newData = (0, _buildGallery2.default)(action.data);
			return _extends({}, state, {
				load: state.load + 1,
				data: state.data.concat(newData),
				locker: newData.length !== 20
			});
		default:
			return state;
	}
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(65);

var _buildComments = __webpack_require__(71);

var _buildComments2 = _interopRequireDefault(_buildComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
	momentData: [],
	familyData: [],
	likeData: [],
	commentData: [],
	showConfirm: false,
	commentLocker: false,
	commentAdded: 0,
	commentLoad: 0,
	commentError: null,
	redirectUser: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _moment.BUILD_MOMENT_PAGE:
			var likeData = action.data[2].map(function (like) {
				return parseInt(like.user_id);
			});
			var commentData = (0, _buildComments2.default)(action.data[3]);
			return _extends({}, state, {
				momentData: action.data[0],
				familyData: [parseInt(action.data[1].owner_id) || null, parseInt(action.data[1].relative_id) || null],
				likeData: likeData,
				commentData: commentData,
				commentLocker: action.data[3].length !== 5
			});
		case _moment.SHOW_MOMENT_DELETE:
			return _extends({}, state, {
				showConfirm: true
			});
		case _moment.REDIRECT_USER_PAGE:
			return _extends({}, state, {
				redirectUser: true
			});
		case _moment.CHANGE_MOMENT_LIKE:
			return _extends({}, state, {
				likeData: action.data.action === 1 ? [].concat(_toConsumableArray(state.likeData), [action.data.userId]) : state.likeData.filter(function (like) {
					return like !== action.data.userId;
				})
			});
		case _moment.CHANGE_MOMENT_COMMENTS:
			var newComments = (0, _buildComments2.default)(action.data);
			return _extends({}, state, {
				commentData: [].concat(_toConsumableArray(state.commentData), _toConsumableArray(newComments)),
				commentLoad: state.commentLoad + 1,
				commentLocker: action.data.length !== 10
			});
		case _moment.SHOW_COMMENT_EMPTY:
			return _extends({}, state, {
				commentError: "Comment can′t be empty"
			});
		case _moment.ADD_MOMENT_COMMENT:
			return _extends({}, state, {
				commentData: [action.data].concat(_toConsumableArray(state.commentData)),
				commentError: null,
				commentAdded: state.commentAdded + 1
			});
		default:
			return state;
	}
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(66);

var _config = __webpack_require__(3);

var _noToInfo = __webpack_require__(57);

var _buildGallery = __webpack_require__(9);

var _buildGallery2 = _interopRequireDefault(_buildGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
	//indicate pet belong to current user or not
	petOwner: false,
	//store data for one pet
	petData: {},
	//store data for pet's family
	familyData: [],
	//store data for pets friend
	friendData: [],
	//store data for image gallery
	galleryData: [],
	//indicate load how many times
	load: 1,
	//indicate could load more or not
	locker: false,
	//indicate add how many images
	add: 0,
	//store all watcher of current pet
	watchData: [],
	//indicate notice user login or not
	loginRequired: false,
	//trigger reset function for post image
	reset: 0
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _pet.BUILD_PET_PAGE:
			action.data[0]['owner_id'] = parseInt(action.data[0]['owner_id']);
			action.data[0]['relative_id'] = action.data[0]['relative_id'] === null ? null : parseInt(action.data[0]['relative_id']);
			return _extends({}, state, {
				petData: action.data[0],
				familyData: action.data[1],
				friendData: action.data[2],
				locker: action.data[3].length !== 20,
				galleryData: (0, _buildGallery2.default)(action.data[3]),
				watchData: action.data[4].map(function (watch) {
					return parseInt(watch.user_id);
				})
			});
		case _pet.SHOW_ACCOUNT_REQUIRED:
			return _extends({}, state, {
				loginRequired: true
			});
		case _pet.CHANGE_PET_WATCH:
			return _extends({}, state, {
				watchData: action.data.action === 1 ? [].concat(_toConsumableArray(state.watchData), [action.data.userId]) : state.watchData.filter(function (watch) {
					return watch !== action.data.userId;
				})
			});
		case _pet.ADD_PET_MOMENT:
			var newMoment = [_config.domainUrl + "/img/pet/" + action.data.petId + "/moment/" + action.data.info[1], action.data.message, "/moment/" + action.data.info[0]];
			if (action.data.info.length === 3) {
				var ability = (0, _noToInfo.noGetAbility)(action.data.info[2]);
				var newAbility = _extends({}, state.petData);
				newAbility[ability] = parseInt(state.petData[ability]) + 1;
				return _extends({}, state, {
					galleryData: [newMoment].concat(_toConsumableArray(state.galleryData)),
					reset: state.reset + 1,
					add: state.add + 1,
					petData: newAbility
				});
			} else {
				return _extends({}, state, {
					galleryData: [newMoment].concat(_toConsumableArray(state.galleryData)),
					reset: state.reset + 1,
					add: state.add + 1
				});
			}
		case _pet.CHANGE_PET_MOMENTS:
			var newData = (0, _buildGallery2.default)(action.data);
			return _extends({}, state, {
				galleryData: state.galleryData.concat(newData),
				load: state.load + 1,
				locker: newData.length !== 20
			});
		default:
			return state;
	}
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _request = __webpack_require__(67);

var initState = {
	//store request list
	requestData: [],
	//store accept list
	acceptList: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _request.BUILD_REQUEST_PAGE:
			return _extends({}, state, {
				requestData: action.data
			});
		case _request.CHANGE_REQUEST_USER:
			return _extends({}, state, {
				requestData: state.requestData.filter(function (request, index) {
					return index !== action.data;
				})
			});
		default:
			return state;
	}
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _setting = __webpack_require__(68);

var initState = {
	//store user data
	userData: [],
	//indicate update result
	updateResult: null,
	//store user about info
	userAbout: ""
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _setting.BUILD_SETTING_PAGE:
			return _extends({}, state, {
				userData: action.data,
				userAbout: action.data.user_about
			});
		case _setting.CHANGE_SETTING_ABOUT:
			if (!action.data) {
				action.data = '';
			}
			return _extends({}, state, {
				userAbout: action.data,
				updateResult: 'Mood updated Successfully!'
			});
		case _setting.CHANGE_SETTING_NAME:
			return _extends({}, state, {
				updateResult: 'Name updated Successfully!'
			});
		case _setting.CHANGE_SETTING_PROFILE:
			return _extends({}, state, {
				updateResult: 'Profile updated Successfully!'
			});
		default:
			return state;
	}
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _user = __webpack_require__(69);

var _config = __webpack_require__(3);

var _buildGallery = __webpack_require__(9);

var _buildGallery2 = _interopRequireDefault(_buildGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
	//store user data
	userData: [],
	//store relative data
	relativeData: [],
	//store pets list
	petsData: [],
	//store moment images
	momentData: [],
	//indicate load moment how many times
	load: 1,
	//indicate could load more images or not
	locker: false,
	//store pet list
	belongData: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _user.BUILD_USER_PAGE:
			var relativeData = [];
			action.data.info[1].forEach(function (pet) {
				if (pet.relative_id !== null) {
					relativeData.push(parseInt(pet.relative_id) === action.data.userId ? parseInt(pet.owner_id) : parseInt(pet.relative_id));
				}
			});
			action.data.info[0].user_id = parseInt(action.data.info[0].user_id);
			return _extends({}, state, {
				userData: action.data.info[0],
				petsData: action.data.info[1],
				belongData: action.data.info[3],
				momentData: (0, _buildGallery2.default)(action.data.info[2]),
				locker: action.data.info[2].length !== 20,
				relativeData: [].concat(_toConsumableArray(new Set(relativeData)))
			});
		case _user.CHANGE_USER_MOMENTS:
			return _extends({}, state, {
				momentData: state.momentData.concat((0, _buildGallery2.default)(action.data)),
				load: state.load + 1,
				locker: action.data.length !== 20
			});
		default:
			return state;
	}
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _watch = __webpack_require__(70);

var _buildGallery = __webpack_require__(9);

var _buildGallery2 = _interopRequireDefault(_buildGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
	//store pets data on watch list
	petsList: [],
	//store pet has been unwatched
	unwatch: [],
	//indicate load pet list for how many times
	loadPets: 1,
	//store pets id on watch list
	watchList: null,
	//store list moments to show
	galleryData: [],
	//indicate which list to show
	loadList: "watch",
	//indicate could load more images or not
	locker: false,
	//indicate click load for how many times
	load: 1
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _watch.BUILD_WATCH_PAGE:
			return _extends({}, state, {
				petsList: action.data[2],
				watchList: action.data[0],
				galleryData: (0, _buildGallery2.default)(action.data[1]),
				locker: action.data[1].length !== 20
			});
		case _watch.CHANGE_WATCH_PET:
			return _extends({}, state, {
				unwatch: action.data.action === 0 ? [].concat(_toConsumableArray(state.unwatch), [action.data.petId]) : state.unwatch.filter(function (id) {
					id !== action.data.petId;
				})
			});
		case _watch.CHANGE_WATCH_MOMENTS:
			return _extends({}, state, {
				galleryData: action.data.load === 0 ? (0, _buildGallery2.default)(action.data.moments) : state.galleryData.concat((0, _buildGallery2.default)(action.data.moments)),
				load: action.data.load + 1,
				locker: action.data.moments.length !== 20,
				loadList: action.data.loadList
			});
		case _watch.CHANGE_PETS_LOAD:
			return _extends({}, state, {
				loadPets: state.loadPets + 1
			});
		default:
			return state;
	}
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(72);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 83 */
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

var Bundle = function (_Component) {
  _inherits(Bundle, _Component);

  function Bundle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bundle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mod: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bundle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps);
      }
    }
  }, {
    key: 'load',
    value: function load(props) {
      var _this2 = this;

      this.setState({ mod: null });
      props.load(function (mod) {
        _this2.setState({ mod: mod.default ? mod.default : mod });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state.mod);
    }
  }]);

  return Bundle;
}(_react.Component);

exports.default = Bundle;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _account = __webpack_require__(36);

var _config = __webpack_require__(3);

var _Googlelogin = __webpack_require__(62);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(61);

var _Facebooklogin2 = _interopRequireDefault(_Facebooklogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			showDrop: false
		};
		return _this;
	}

	_createClass(Header, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
		key: 'gLogin',
		value: function gLogin(detail) {
			if (this.props.account.id === null) {
				this.props.readAccountData('google', detail.token);
			}
		}
	}, {
		key: 'fLogin',
		value: function fLogin(response, token) {
			if (this.props.account.id === null) {
				this.props.readAccountData('facebook', token);
			}
		}
	}, {
		key: 'showDrop',
		value: function showDrop() {
			this.setState({ showDrop: !this.state.showDrop });
		}
	}, {
		key: 'logOut',
		value: function logOut() {
			if (FB) {
				FB.logout();
			}
			if (gapi) {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut();
			}
			this.props.deleteAccountToken(this.props.account.id, this.props.account.token);
		}
	}, {
		key: 'render',
		value: function render() {
			var loginStyle = this.state.showDrop ? "header-drop" : "header-drop-hide";
			var userInfo = _react2.default.createElement(
				'div',
				{ id: 'header-login', onClick: this.showDrop.bind(this) },
				_react2.default.createElement(
					'h5',
					null,
					this.props.account.id === null ? 'Login' : this.props.account.name
				),
				_react2.default.createElement('img', { src: '/public/icon/glyphicons-dropdown.png' })
			);
			var logoutBoard = void 0;
			if (this.state.showDrop && this.props.account.id !== null) {
				logoutBoard = _react2.default.createElement(
					'section',
					{ className: 'header-drop' },
					_react2.default.createElement(
						'a',
						{ href: "/user/" + this.props.account.id },
						_react2.default.createElement(
							'h5',
							null,
							'Home'
						)
					),
					_react2.default.createElement(
						'a',
						{ href: "/watch" },
						_react2.default.createElement(
							'h5',
							null,
							'Watch List'
						)
					),
					_react2.default.createElement(
						'a',
						{ href: "/request" },
						_react2.default.createElement(
							'h5',
							null,
							'Requests'
						)
					),
					_react2.default.createElement(
						'a',
						{ href: "/setting" },
						_react2.default.createElement(
							'h5',
							null,
							'Setting'
						)
					),
					_react2.default.createElement(
						'h6',
						{ id: 'header-drop-logout', onClick: this.logOut.bind(this) },
						'Log Out'
					)
				);
			}
			return _react2.default.createElement(
				'header',
				{ id: 'header' },
				_react2.default.createElement(
					'a',
					{ href: '/' },
					_react2.default.createElement('img', { id: 'header-logo', src: '/public/logo.png', alt: 'logo' })
				),
				_react2.default.createElement(
					'h5',
					{ id: 'header-desc' },
					'Homepage for pets'
				),
				userInfo,
				_react2.default.createElement(
					'a',
					{ className: 'header-navi', href: '/explore' },
					_react2.default.createElement(
						'h5',
						null,
						'Explore'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'header-navi', href: '/' },
					_react2.default.createElement(
						'h5',
						null,
						'Public'
					)
				),
				_react2.default.createElement(
					'section',
					{ className: loginStyle },
					_react2.default.createElement(
						'h5',
						{ id: 'header-drop-notice' },
						'Click to sign in or sign up'
					),
					_react2.default.createElement(_Googlelogin2.default, {
						clientId: _config.googleClientId,
						width: '200px',
						gLogin: this.gLogin.bind(this)
					}),
					_react2.default.createElement(_Facebooklogin2.default, {
						clientId: _config.facebookClientId,
						width: '194px',
						fLogin: this.fLogin.bind(this)
					})
				),
				logoutBoard
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { account: state.account };
}, { changeAccountData: _account.changeAccountData, deleteAccountToken: _account.deleteAccountToken, readAccountData: _account.readAccountData })(Header);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _Bundle = __webpack_require__(83);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(151);

var _Header = __webpack_require__(84);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(87);

var _Home2 = _interopRequireDefault(_Home);

var _Explore = __webpack_require__(86);

var _Explore2 = _interopRequireDefault(_Explore);

var _Pet = __webpack_require__(89);

var _Pet2 = _interopRequireDefault(_Pet);

var _User = __webpack_require__(94);

var _User2 = _interopRequireDefault(_User);

var _Moment = __webpack_require__(88);

var _Moment2 = _interopRequireDefault(_Moment);

var _Watch = __webpack_require__(95);

var _Watch2 = _interopRequireDefault(_Watch);

var _Request = __webpack_require__(91);

var _Request2 = _interopRequireDefault(_Request);

var _Setting = __webpack_require__(92);

var _Setting2 = _interopRequireDefault(_Setting);

var _Terms = __webpack_require__(93);

var _Terms2 = _interopRequireDefault(_Terms);

var _React = __webpack_require__(90);

var _React2 = _interopRequireDefault(_React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createComponent = function createComponent(component) {
  return function (props) {
    return _react2.default.createElement(
      _Bundle2.default,
      { load: component },
      function (Component) {
        return Component ? _react2.default.createElement(Component, props) : null;
      }
    );
  };
};

var getRouter = function getRouter() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/explore', component: createComponent(_Explore2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/pet/:id', component: createComponent(_Pet2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/user/:id', component: createComponent(_User2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/moment/:id', component: createComponent(_Moment2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/watch', component: createComponent(_Watch2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/request', component: createComponent(_Request2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/setting', component: createComponent(_Setting2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/terms', component: createComponent(_Terms2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/react', component: createComponent(_React2.default) })
      ),
      _react2.default.createElement(
        'footer',
        { id: 'footer' },
        _react2.default.createElement(
          'h6',
          null,
          '\xA9 2017-2018 Smilings.me'
        ),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/byn9826/Thousanday-Web', target: '__blank' },
            'Source Code'
          )
        ),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/byn9826/Thousanday-Web/issues', target: '__blank' },
            'Report'
          )
        ),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://glyphicons.com', target: '__blank' },
            'Glyphicons'
          )
        ),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'a',
            { href: '/terms', target: '__blank' },
            'Terms & Privacy Policy'
          )
        ),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/byn9826', target: '__blank' },
            'About'
          )
        )
      )
    )
  );
};

exports.default = getRouter;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(158));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(7).then((function(require) {
		cb(__webpack_require__(159));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(160));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(161));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(162));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(9).then((function(require) {
		cb(__webpack_require__(163));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(164));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(8).then((function(require) {
		cb(__webpack_require__(165));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(6).then((function(require) {
		cb(__webpack_require__(166));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(167));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "/*general-header*/\n#header{\n    position: fixed;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid white;\n    background-color: #ef8513;\n    color: white;\n    z-index: 999;\n    vertical-align: middle;\n}\n#header-desc{\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin-left: 2%;\n}\n.header-navi{\n    color: white;\n    float: right;\n    margin-right: 5%;\n    cursor: pointer;\n}\n#header-logo{\n    float: left;\n    margin-left: 10%;\n    height: 40px;\n    margin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n/*Footer style*/\n#footer{\n    display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n    display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}\n\n@media only screen and (max-width: 948px) {\n    #header-logo{\n        margin-left: 5%;\n    }\n\n    #footer{\n        width: 90%;\n        padding: 5px 5%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    #header-desc{\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    #header-logo{\n        display: none;\n    }\n}", ""]);

// exports


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./general.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./general.css");

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

/***/ }),
/* 152 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ })
],[156]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvYnVpbGRHYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9ub1RvSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9FeHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9XYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3M/N2I3ZCIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJkb21haW5VcmwiLCJhbmRyb2lkU3RvcmVVcmwiLCJnb29nbGVDbGllbnRJZCIsImZhY2Vib29rQ2xpZW50SWQiLCJyZWFkQWNjb3VudEZhY2Vib29rQXBpIiwicmVhZEFjY291bnRHb29nbGVBcGkiLCJkZWxldGVBY2NvdW50VG9rZW5BcGkiLCJyZWFkSG9tZU1vbWVudHNBcGkiLCJyZWFkRXhwbG9yZU1vbWVudHNBcGkiLCJyZWFkUGV0UGFnZUFwaSIsInVwZGF0ZVBldFdhdGNoQXBpIiwiY3JlYXRlUGV0TW9tZW50QXBpIiwicmVhZFBldE1vbWVudHNBcGkiLCJyZWFkVXNlclBhZ2VBcGkiLCJyZWFkVXNlck1vbWVudHNBcGkiLCJyZWFkTW9tZW50UGFnZUFwaSIsImRlbGV0ZU1vbWVudFBhZ2VBcGkiLCJ1cGRhdGVNb21lbnRMaWtlQXBpIiwicmVhZE1vbWVudENvbW1lbnRzQXBpIiwiY3JlYXRlTW9tZW50Q29tbWVudEFwaSIsInJlYWRXYXRjaFBhZ2VBcGkiLCJjcmVhdGVXYXRjaFBldEFwaSIsImRlbGV0ZVdhdGNoUGV0QXBpIiwicmVhZFdhdGNoTW9tZW50c0FwaSIsInJlYWRSZXF1ZXN0UGFnZUFwaSIsImNyZWF0ZVJlcXVlc3RVc2VyQXBpIiwiZGVsZXRlUmVxdWVzdFVzZXJBcGkiLCJyZWFkU2V0dGluZ1BhZ2VBcGkiLCJ1cGRhdGVTZXR0aW5nQWJvdXRBcGkiLCJ1cGRhdGVTZXR0aW5nTmFtZUFwaSIsImNyZWF0ZVNldHRpbmdQcm9maWxlQXBpIiwiYnVpbGRHYWxsZXJ5IiwiZGF0YSIsIm1hcCIsImltYWdlIiwicGV0X2lkIiwiaW1hZ2VfbmFtZSIsIm1vbWVudF9tZXNzYWdlIiwibW9tZW50X2lkIiwiY2hhbmdlQWNjb3VudERhdGEiLCJyZWFkQWNjb3VudERhdGEiLCJkZWxldGVBY2NvdW50VG9rZW4iLCJDSEFOR0VfQUNDT1VOVF9EQVRBIiwiQ0xFQVJfQUNDT1VOVF9EQVRBIiwidHlwZSIsInBvcnRhbCIsInRva2VuIiwiYXBpVXJsIiwiZGlzcGF0Y2giLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiY2xlYXJBY2NvdW50RGF0YSIsImlkIiwib2siLCJjbGVhciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJub0dldEFiaWxpdHkiLCJub0dldEdlbmRlciIsIm5vR2V0TmF0dXJlIiwibm9HZXRUeXBlIiwidmFsdWUiLCJwYXJzZUludCIsIkZhY2Vib29rbG9naW4iLCJwcm9wcyIsInN0YXRlIiwid2lkdGgiLCJoZWFkZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInNlbGYiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiY2xpZW50SWQiLCJ4ZmJtbCIsInZlcnNpb24iLCJmTG9naW4iLCJsb2dpbiIsInN0YXR1cyIsImF1dGhSZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiYXBpIiwic2V0U3RhdGUiLCJidXR0b25TdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiZmFjZWJvb2siLCJjbGlja0J1dHRvbiIsImJpbmQiLCJHb29nbGVsb2dpbiIsInJlc3VsdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInJlbGF5b3V0IiwiZ2FwaSIsImxvYWQiLCJpbnN0YW5jZSIsImF1dGgyIiwiY2xpZW50X2lkIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZ2V0IiwicHJvZmlsZSIsImdldEJhc2ljUHJvZmlsZSIsImdldEF1dGhJbnN0YW5jZSIsInNpZ25JbiIsImlzU2lnbmVkSW4iLCJnZXRJZCIsIm5hbWUiLCJnZXROYW1lIiwiZmlyc3RuYW1lIiwiZ2V0R2l2ZW5OYW1lIiwibGFzdG5hbWUiLCJnZXRGYW1pbHlOYW1lIiwiaW1hZ2VVcmwiLCJnZXRJbWFnZVVybCIsImVtYWlsIiwiZ2V0RW1haWwiLCJnZXRBdXRoUmVzcG9uc2UiLCJpZF90b2tlbiIsImdMb2dpbiIsImdvb2dsZSIsInJlYWRFeHBsb3JlTW9tZW50cyIsInNlbGVjdEV4cGxvcmVUeXBlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsIkNIQU5HRV9FWFBMT1JFX1RZUEUiLCJDSEFOR0VfRVhQTE9SRV9OQVRVUkUiLCJDSEFOR0VfRVhQTE9SRV9NT01FTlRTIiwiY2hhbmdlRXhwbG9yZU1vbWVudHMiLCJtb21lbnRzRGF0YSIsIm5hdHVyZSIsImFwaVBhcmFtcyIsIm5ld1R5cGUiLCJuZXdOYXR1cmUiLCJyZWFkSG9tZU1vbWVudHMiLCJDSEFOR0VfSE9NRV9NT01FTlRTIiwiY2hhbmdlSG9tZU1vbWVudHMiLCJyZWFkTW9tZW50UGFnZSIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwidXBkYXRlTW9tZW50TGlrZSIsInJlYWRNb21lbnRDb21tZW50cyIsInNob3dDb21tZW50RW1wdHkiLCJjcmVhdGVNb21lbnRDb21tZW50IiwiQlVJTERfTU9NRU5UX1BBR0UiLCJTSE9XX01PTUVOVF9ERUxFVEUiLCJSRURJUkVDVF9VU0VSX1BBR0UiLCJDSEFOR0VfTU9NRU5UX0xJS0UiLCJDSEFOR0VfTU9NRU5UX0NPTU1FTlRTIiwiU0hPV19DT01NRU5UX0VNUFRZIiwiQUREX01PTUVOVF9DT01NRU5UIiwiYnVpbGRNb21lbnRQYWdlIiwicmVkaXJjdFVzZXJQYWdlIiwidXNlcklkIiwidXNlclRva2VuIiwibW9tZW50SWQiLCJwZXRJZCIsImNoYW5nZU1vbWVudExpa2UiLCJhY3Rpb24iLCJjaGFuZ2VNb21lbnRDb21tZW50cyIsImNvbW1lbnRMb2FkIiwiY29tbWVudEFkZGVkIiwiYWRkTW9tZW50Q29tbWVudCIsImNvbnRlbnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJyZWFkUGV0UGFnZSIsInNob3dBY2NvdW50UmVxdWlyZWQiLCJ1cGRhdGVQZXRXYXRjaCIsImNyZWF0ZVBldE1vbWVudCIsInJlYWRQZXRNb21lbnRzIiwiQlVJTERfUEVUX1BBR0UiLCJTSE9XX0FDQ09VTlRfUkVRVUlSRUQiLCJDSEFOR0VfUEVUX1dBVENIIiwiQUREX1BFVF9NT01FTlQiLCJDSEFOR0VfUEVUX01PTUVOVFMiLCJidWlsZFBldFBhZ2UiLCJjaGFuZ2VQZXRXYXRjaCIsImFkZFBldE1vbWVudCIsImluZm8iLCJtZXNzYWdlIiwic3BsaXQiLCJmaWxlRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2Vzc0RhdGEiLCJjaGFuZ2VQZXRNb21lbnRzIiwiYWRkIiwicGFyYW1zIiwicmVhZFJlcXVlc3RQYWdlIiwidXBkYXRlUmVxdWVzdFVzZXIiLCJCVUlMRF9SRVFVRVNUX1BBR0UiLCJDSEFOR0VfUkVRVUVTVF9VU0VSIiwiYnVpbGRSZXF1ZXN0UGFnZSIsImNoYW5nZVJlcXVlc3RVc2VyIiwiaW5kZXgiLCJyZWFkU2V0dGluZ1BhZ2UiLCJ1cGRhdGVTZXR0aW5nQWJvdXQiLCJ1cGRhdGVTZXR0aW5nTmFtZSIsImNyZWF0ZVNldHRpbmdQcm9maWxlIiwiQlVJTERfU0VUVElOR19QQUdFIiwiQ0hBTkdFX1NFVFRJTkdfQUJPVVQiLCJDSEFOR0VfQUNDT1VOVF9OQU1FIiwiQ0hBTkdFX1NFVFRJTkdfTkFNRSIsIkNIQU5HRV9TRVRUSU5HX1BST0ZJTEUiLCJidWlsZFNldHRpbmdQYWdlIiwiY2hhbmdlU2V0dGluZ0Fib3V0IiwiYWJvdXQiLCJjaGFuZ2VBY2NvdW50TmFtZSIsImNoYW5nZVNldHRpbmdOYW1lIiwiY2hhbmdlU2V0dGluZ1Byb2ZpbGUiLCJmaWxlIiwicmVhZFVzZXJQYWdlIiwicmVhZFVzZXJNb21lbnRzIiwiQlVJTERfVVNFUl9QQUdFIiwiQ0hBTkdFX1VTRVJfTU9NRU5UUyIsImJ1aWxkVXNlclBhZ2UiLCJjaGFuZ2VVc2VyTW9tZW50cyIsImJlbG9uZyIsInJlYWRXYXRjaFBhZ2UiLCJ1cGRhdGVXYXRjaFBldCIsInJlYWRXYXRjaE1vbWVudHMiLCJjaGFuZ2VQZXRzTG9hZCIsIkJVSUxEX1dBVENIX1BBR0UiLCJDSEFOR0VfV0FUQ0hfUEVUIiwiQ0hBTkdFX1dBVENIX01PTUVOVFMiLCJDSEFOR0VfUEVUU19MT0FEIiwiYnVpbGRXYXRjaFBhZ2UiLCJjaGFuZ2VXYXRjaFBldCIsImNoYW5nZVdhdGNoTW9tZW50cyIsIm1vbWVudHMiLCJsb2FkTGlzdCIsImxpc3RzIiwiYnVpbGRDb21tZW50cyIsImNvbW1lbnQiLCJjb21tZW50X2NvbnRlbnQiLCJ1c2VyX2lkIiwiY29tbWVudF90aW1lIiwiYWNjb3VudCIsImhvbWUiLCJtb21lbnQiLCJwZXQiLCJleHBsb3JlIiwid2F0Y2giLCJyZXF1ZXN0Iiwic2V0dGluZyIsInJlZHVjZXIiLCJpbml0U3RhdGUiLCJsb2NrZXIiLCJuZXdNb21lbnRzIiwiY29uY2F0IiwibGVuZ3RoIiwibmV3RGF0YSIsIm1vbWVudERhdGEiLCJmYW1pbHlEYXRhIiwibGlrZURhdGEiLCJjb21tZW50RGF0YSIsInNob3dDb25maXJtIiwiY29tbWVudExvY2tlciIsImNvbW1lbnRFcnJvciIsInJlZGlyZWN0VXNlciIsImxpa2UiLCJvd25lcl9pZCIsInJlbGF0aXZlX2lkIiwiZmlsdGVyIiwibmV3Q29tbWVudHMiLCJwZXRPd25lciIsInBldERhdGEiLCJmcmllbmREYXRhIiwiZ2FsbGVyeURhdGEiLCJ3YXRjaERhdGEiLCJsb2dpblJlcXVpcmVkIiwicmVzZXQiLCJuZXdNb21lbnQiLCJhYmlsaXR5IiwibmV3QWJpbGl0eSIsInJlcXVlc3REYXRhIiwiYWNjZXB0TGlzdCIsInVzZXJEYXRhIiwidXBkYXRlUmVzdWx0IiwidXNlckFib3V0IiwidXNlcl9hYm91dCIsInJlbGF0aXZlRGF0YSIsInBldHNEYXRhIiwiYmVsb25nRGF0YSIsImZvckVhY2giLCJwdXNoIiwiU2V0IiwicGV0c0xpc3QiLCJ1bndhdGNoIiwibG9hZFBldHMiLCJ3YXRjaExpc3QiLCJzdG9yZSIsIkJ1bmRsZSIsIm1vZCIsIm5leHRQcm9wcyIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIkhlYWRlciIsInNob3dEcm9wIiwiZ2V0SXRlbSIsImRldGFpbCIsImxvZ291dCIsInNpZ25PdXQiLCJsb2dpblN0eWxlIiwidXNlckluZm8iLCJsb2dvdXRCb2FyZCIsImxvZ091dCIsImNyZWF0ZUNvbXBvbmVudCIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGdDQUFZLHFCQUFsQjs7QUFFQSxJQUFNQyw0Q0FBa0IsOERBQXhCOztBQUVBLElBQU1DLDBDQUFpQiwwRUFBdkI7QUFDQSxJQUFNQyw4Q0FBbUIsaUJBQXpCOztBQUVBLElBQU1DLDBEQUF5QixtQkFBL0I7QUFDQSxJQUFNQyxzREFBdUIsaUJBQTdCO0FBQ0EsSUFBTUMsd0RBQXdCLGlCQUE5Qjs7QUFFQSxJQUFNQyxrREFBcUIsYUFBM0I7QUFDQSxJQUFNQyx3REFBd0IsZUFBOUI7O0FBRUEsSUFBTUMsMENBQWlCLFdBQXZCO0FBQ0EsSUFBTUMsZ0RBQW9CLFlBQTFCO0FBQ0EsSUFBTUMsa0RBQXFCLGdCQUEzQjtBQUNBLElBQU1DLGdEQUFvQixXQUExQjs7QUFFQSxJQUFNQyw0Q0FBa0IsWUFBeEI7QUFDQSxJQUFNQyxrREFBcUIsWUFBM0I7O0FBRUEsSUFBTUMsZ0RBQW9CLGNBQTFCO0FBQ0EsSUFBTUMsb0RBQXNCLGdCQUE1QjtBQUNBLElBQU1DLG9EQUFzQixjQUE1QjtBQUNBLElBQU1DLHdEQUF3QixjQUE5QjtBQUNBLElBQU1DLDBEQUF5QixpQkFBL0I7O0FBRUEsSUFBTUMsOENBQW1CLGFBQXpCO0FBQ0EsSUFBTUMsZ0RBQW9CLFlBQTFCO0FBQ0EsSUFBTUMsZ0RBQW9CLGVBQTFCO0FBQ0EsSUFBTUMsb0RBQXNCLGFBQTVCOztBQUVBLElBQU1DLGtEQUFxQixlQUEz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvbWFpblVybCA9ICdodHRwczovL3NtaWxpbmdzLm1lJztcblxuZXhwb3J0IGNvbnN0IGFuZHJvaWRTdG9yZVVybCA9ICdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnRob3VzYW5kYXknO1xuXG5leHBvcnQgY29uc3QgZ29vZ2xlQ2xpZW50SWQgPSAnMTY4MDk4ODUwMjM0LWZzcTg0cGs0Y2FlOTdtbGowazQ2NGpvYzIxY2dxanZ2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcbmV4cG9ydCBjb25zdCBmYWNlYm9va0NsaWVudElkID0gJzQ0NzY4ODI2NTU3NjEyNSc7XG5cbmV4cG9ydCBjb25zdCByZWFkQWNjb3VudEZhY2Vib29rQXBpID0gJy9hY2NvdW50L2ZhY2Vib29rJztcbmV4cG9ydCBjb25zdCByZWFkQWNjb3VudEdvb2dsZUFwaSA9ICcvYWNjb3VudC9nb29nbGUnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFjY291bnRUb2tlbkFwaSA9ICcvYWNjb3VudC9sb2dvdXQnO1xuXG5leHBvcnQgY29uc3QgcmVhZEhvbWVNb21lbnRzQXBpID0gJy9pbmRleC9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkRXhwbG9yZU1vbWVudHNBcGkgPSAnL2V4cGxvcmUvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkUGV0UGFnZUFwaSA9ICcvcGV0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBldFdhdGNoQXBpID0gJy9wZXQvd2F0Y2gnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBldE1vbWVudEFwaSA9ICcvdXBsb2FkL21vbWVudCc7XG5leHBvcnQgY29uc3QgcmVhZFBldE1vbWVudHNBcGkgPSAnL3BldC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRVc2VyUGFnZUFwaSA9ICcvdXNlci9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkVXNlck1vbWVudHNBcGkgPSAnL3VzZXIvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vbWVudFBhZ2VBcGkgPSAnL21vbWVudC9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vbWVudExpa2VBcGkgPSAnL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL21vbWVudC9sb2FkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVNb21lbnRDb21tZW50QXBpID0gJy9tb21lbnQvY29tbWVudCc7XG5cbmV4cG9ydCBjb25zdCByZWFkV2F0Y2hQYWdlQXBpID0gJy93YXRjaC9yZWFkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVXYXRjaFBldEFwaSA9ICcvd2F0Y2gvYWRkJztcbmV4cG9ydCBjb25zdCBkZWxldGVXYXRjaFBldEFwaSA9ICcvd2F0Y2gvcmVtb3ZlJztcbmV4cG9ydCBjb25zdCByZWFkV2F0Y2hNb21lbnRzQXBpID0gJy93YXRjaC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRSZXF1ZXN0UGFnZUFwaSA9ICcvcmVxdWVzdC9yZWFkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXF1ZXN0VXNlckFwaSA9ICcvcmVxdWVzdC9hY2NlcHQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcXVlc3RVc2VyQXBpID0gJy9yZXF1ZXN0L2RlbGV0ZSc7XG5cbmV4cG9ydCBjb25zdCByZWFkU2V0dGluZ1BhZ2VBcGkgPSAnL3NldHRpbmcvcmVhZCc7XG5leHBvcnQgY29uc3QgdXBkYXRlU2V0dGluZ0Fib3V0QXBpID0gJy9zZXR0aW5nL2Fib3V0JztcbmV4cG9ydCBjb25zdCB1cGRhdGVTZXR0aW5nTmFtZUFwaSA9ICcvc2V0dGluZy9uYW1lJztcbmV4cG9ydCBjb25zdCBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSA9ICcvdXBsb2FkL3VzZXInO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2NvbmZpZy5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRHYWxsZXJ5KGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGltYWdlKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGRvbWFpblVybCArICcvaW1nL3BldC8nICsgaW1hZ2UucGV0X2lkICsgJy9tb21lbnQvJyArIGltYWdlLmltYWdlX25hbWUsXG5cdFx0XHRpbWFnZS5tb21lbnRfbWVzc2FnZSxcblx0XHRcdCcvbW9tZW50LycgKyBpbWFnZS5tb21lbnRfaWRcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZEdhbGxlcnkuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkQWNjb3VudEZhY2Vib29rQXBpLCByZWFkQWNjb3VudEdvb2dsZUFwaSwgZGVsZXRlQWNjb3VudFRva2VuQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0RBVEEgPSBcImFjY291bnQvQ0hBTkdFX0FDQ09VTlRfREFUQVwiO1xuZXhwb3J0IGNvbnN0IENMRUFSX0FDQ09VTlRfREFUQSA9IFwiYWNjb3VudC9DTEVBUl9BQ0NPVU5UX0RBVEFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjY291bnREYXRhKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9EQVRBLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFjY291bnREYXRhKHBvcnRhbCwgdG9rZW4pIHtcblx0Y29uc3QgYXBpVXJsID0gcG9ydGFsID09PSAnZmFjZWJvb2snID8gcmVhZEFjY291bnRGYWNlYm9va0FwaSA6IHJlYWRBY2NvdW50R29vZ2xlQXBpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHRva2VuLCBcblx0XHRcdFx0XCJwbGF0Zm9ybVwiOiBcIndlYnNpdGVcIlxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCBqc29uWzBdKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIGpzb25bMV0pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGpzb25bMl0pO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VBY2NvdW50RGF0YShqc29uKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWNjb3VudERhdGEoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0xFQVJfQUNDT1VOVF9EQVRBXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFjY291bnRUb2tlbihpZCwgdG9rZW4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVBY2NvdW50VG9rZW5BcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB0b2tlbiwgXG5cdFx0XHRcdFwiaWRcIjogaWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRkaXNwYXRjaChjbGVhckFjY291bnREYXRhKCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZS5qcyc7XG5pbXBvcnQgZ2V0Um91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuXG5SZWFjdERvbS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntnZXRSb3V0ZXIoKX08L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnQgZnVuY3Rpb24gbm9HZXRBYmlsaXR5KHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICdhdHRhY2snO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnZGVmZW5kJztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJ2hlYWx0aCc7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuICdzd2lmdCc7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuICdsdWNreSc7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0R2VuZGVyKHZhbHVlKSB7XG5cdHJldHVybiBwYXJzZUludCh2YWx1ZSkgPT09IDAgPyBcIuKZglwiIDogXCLimYBcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0TmF0dXJlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiY3V0ZVwiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcInN0cm9uZ1wiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcInNtYXJ0XCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiYmVhdXR5XCI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0VHlwZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImRvZ1wiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcImNhdFwiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcImJpcmRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJmaXNoXCI7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFwib3RoZXJcIjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlYm9va2xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0cmVzcG9uc2U6IG51bGxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHRcdGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdHNjcmlwdC5pZCA9IFwiZmFjZWJvb2stanNzZGtcIjtcblx0XHRzY3JpcHQuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSAoKSA9PiB7XG5cdFx0XHRGQi5pbml0KHtcblx0XHRcdFx0YXBwSWQgICAgICA6IHRoaXMucHJvcHMuY2xpZW50SWQsXG5cdFx0XHRcdHhmYm1sICAgICAgOiB0cnVlLFxuXHRcdFx0XHR2ZXJzaW9uICAgIDogJ3YyLjgnXG5cdFx0XHR9KTtcbi8vIFx0XHRcdEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuLy8gXHRcdFx0XHRcdGxldCB0b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcbi8vIFx0XHRcdFx0XHRGQi5hcGkoJy9tZScsIChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlIH0pO1xuLy8gIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG4vLyBcdFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlOiBmYWxzZSB9KTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRjbGlja0J1dHRvbigpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVzcG9uc2UpIHtcblx0XHRcdHRoaXMucHJvcHMuZkxvZ2luKHRoaXMuc3RhdGUucmVzcG9uc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRGQi5sb2dpbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG5cdFx0XHRcdFx0RkIuYXBpKCcvbWUnLCAocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZSB9KTtcblx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2U6IGZhbHNlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgZmFjZWJvb2sgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBU0FBQUFBK0NBWUFBQUNMS01iZkFBQUt4bWxEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJ0bG5kVVU5a1doL2U5NlkyV1VLV0UzcEVpWFhvTm9DQlZzQkdTUUVJSklTU0lXTEF3T0FKalFVVUVLem9pb3VCWUFCa0xZc0dLWU84RE1xaW80MkRCaHNxN2dRY3phOWFiLzk1ZTY5enozWDErZDkrelQxbHJBOUJidUJKSkpxb0NrQ1dXU2FORC9Oa3pFNVBZcEVkQUFnVFVRQnZvWEY2dXhDOHFLZ0wrMVQ3Y3hyU1kzYkJWeFBwWDJmOGVVT1VMY25rQVNCUTJuTUxQNVdWaGZBUnIyM2dTcVF3QUY0djVUZWJMSkFyT3g1Z2x4U2FJY1ptQzA4WjRoNEpUeGhqN0Z0UEVSZ2RnbWdzQVpEcVhLMDBEb04zRS9PdzhYaG9XaC9ZZVkzc3hYeVFHb0p0ZzdNMFRjdmtZWXcxc3NyS3lGYndXWTR1VXY4VkoreHR6dVNrVE1ibmN0QWtleXdYN0V2dHhvQ2hYa3NsZE1QcnkvM3hrWmNxeDlSbzFmZXhKejgySUNjZDZNMnpOOG5uY29KaHhGZ280aWowYjlVdGsvdEhqTEpKeFlzZFpLQStORzJkNVJwemZPR2RraDAvb3hTblRJOGY5dk53QWJPM0hZaFlJWXhQR21TOElEQnBuYVhiMGhENDNMMmJDWHlBTW1ENnVTZWVHS2ZaN2RHNWNLVWIvWlVGbXlNUi9KYktvaVhtS002ZFA1SklxRFo3UUNITC95bGNtakEwZGp5UEREc0E0cDRxQ09lTXNsSVpPK0NXWm8yZDZkQTVTZWZURU9nakVjUk5yeU9jR1Rxd3R4SUlRNUNBR1BnaEFDaW1RRFprZ0F6WUVnZ2h5UVlLOWNRSGJicGtnSHp0akFBSFprZ1ZTVVpwUXh2YkRib1hBaHMwUjgreHMySTcyRGs2Z3VHTUtEY0E3amRHN2cyaGMrc3VYMHdiZ1hvTHRwK0o0c3hVcUFLNHh3TEduQU13UGYvbU0zNDZkMHhOZFBMazBiMHlIVjNRRW9JSXlzTERicXcvR1lBRzI0QWd1NEFtK0VBUmhFSWxsa2doemdZZmxrNFZsTWg4V3dUSW9obEpZQ3h1aENyYkRMdGdMQitBUU5NTnhPQTNuNFRKMHdTMTRBRDNRRHk5aEVEN0FNSUlnSklTQk1CRnR4QUF4UmF3UlI4UU44VWFDa0Fna0drbEVrcEUwUkl6SWtVWElDcVFVS1VlcWtKMUlIZklMY2d3NWpWeEV1cEY3U0M4eWdMeEZ2cUE0bEk2eVVEM1VESjJNdXFGK2FEZ2FpODVCMDlBY3RBQXRRbGVqbFdnTnVoOXRRaytqbDlGYmFBLzZFaDNDQVk2RzA4QVo0bXh4YnJnQVhDUXVDWmVLaytLVzRFcHdGYmdhWEFPdUZkZUJ1NEhyd2IzQ2ZjWVQ4VXc4RzIrTDk4U0g0dVB3UEh3T2ZnbStERitGMzR0dndwL0YzOEQzNGdmeDN3a01naTdCbXVCQjRCQm1FdElJOHduRmhBckNIc0pSd2puQ0xVSS80UU9SU05RZ21oTmRpYUhFUkdJNmNTR3hqTGlWMkVoc0kzWVQrNGhESkJKSm0yUk44aUpGa3Jna0dhbVl0Sm0wbjNTS2RKM1VUL3BFcHBFTnlJN2tZSElTV1V4ZVRxNGc3eU9mSkY4blB5TVBVMVFvcGhRUFNpU0ZUMWxBV1VQWlRXbWxYS1AwVTRhcHFsUnpxaGMxbHBwT1hVYXRwRFpRejFFZlV0L1JhRFFqbWp0dEJrMUVXMHFycEIya1hhRDEwajdUMWVoVzlBRDZiTHFjdnBwZVMyK2ozNk8vWXpBWVpneGZSaEpEeGxqTnFHT2NZVHhtZkZKaUt0a3BjWlQ0U29WSzFVcE5TdGVWWGl0VGxFMlYvWlRuS2hjb1Z5Z2ZWcjZtL0VxRm9tS21FcURDVlZtaVVxMXlUT1dPeXBBcVU5VkJOVkkxUzdWTWRaL3FSZFhuYWlRMU03VWdOYjVha2RvdXRUTnFmVXdjMDVnWndPUXhWekIzTTg4eCsxbEVsam1MdzBwbmxiSU9zRHBaZytwcTZsUFU0OVh6MWF2VlQ2ajNhT0EwekRRNEdwa2FhelFPYWR6VytLS3BwK21uS2RCY3BkbWdlVjN6bzlZa0xWOHRnVmFKVnFQV0xhMHYybXp0SU8wTTdYWGF6ZHFQZFBBNlZqb3pkT2JyYk5NNXAvTnFFbXVTNXlUZXBKSkpoeWJkMTBWMXJYU2pkUmZxN3RLOW9qdWtwNjhYb2lmUjI2eDNSdStWdm9hK3IzNjYvZ2I5ay9vREJrd0Rid09Sd1FhRFV3WXYyT3BzUDNZbXU1SjlsajFvcUdzWWFpZzMzR25ZYVRoc1pHNFVaN1RjcU5Ib2tUSFYyTTA0MVhpRGNidnhvSW1CeVRTVFJTYjFKdmROS2FadXBrTFRUYVlkcGgvTnpNMFN6RmFhTlpzOU45Y3k1NWdYbU5lYlA3UmdXUGhZNUZqVVdOeTBKRnE2V1daWWJyWHNza0t0bksyRVZ0VlcxNnhSYXhkcmtmVlc2MjRiZ28yN2pkaW14dWFPTGQzV3p6YlB0dDYyMTA3RExzSnV1VjJ6M2V2SkpwT1RKcStiM0RINXU3MnpmYWI5YnZzSERtb09ZUTdMSFZvZDNqcGFPZkljcXgxdk9qR2NncDBLblZxYzNreXhuaUtZc20zS1hXZW04elRubGM3dHp0OWNYRjJrTGcwdUE2NG1yc211VzF6dnVMSGNvdHpLM0M2NEU5ejkzUXZkajd0LzluRHhrSGtjOHZqVDA5WXp3M09mNS9PcDVsTUZVM2RQN2ZNeTh1SjY3ZlRxOFdaN0ozdnY4Tzd4TWZUaCt0VDRQUEUxOXVYNzd2Rjk1bWZwbCs2MzMrKzF2NzIvMVArby84Y0FqNERGQVcyQnVNQ1F3SkxBemlDMW9MaWdxcURId1ViQmFjSDF3WU1oemlFTFE5cENDYUhob2V0QzczRDBPRHhPSFdjd3pEVnNjZGpaY0hwNFRIaFYrSk1JcXdocFJPczBkRnJZdFBYVEhrNDNuUzZlM2h3Smtaekk5WkdQb3N5amNxSituVUdjRVRXamVzYlRhSWZvUmRFZE1jeVllVEg3WWo3RStzZXVpWDBRWnhFbmoydVBWNDZmSFY4WC96RWhNS0U4b1dmbTVKbUxaMTVPMUVrVUpiWWtrWkxpay9Za0RjMEttclZ4VnY5czU5bkZzMi9QTVorVFArZmlYSjI1bVhOUHpGT2V4NTEzT0ptUW5KQzhML2tyTjVKYnd4MUs0YVJzU1Jua0JmQTI4Vjd5ZmZrYitBTUNMMEc1NEZtcVYycDU2dk0wcjdUMWFRTkNIMkdGOEpVb1FGUWxlcE1lbXI0OS9XTkdaRVp0eGtobVFtWmpGamtyT2V1WVdFMmNJVDZiclorZG45MHRzWllVUzNweVBISTI1Z3hLdzZWN2NwSGNPYmt0TWhaV3pGeVJXOGgva1BmbWVlZFY1MzJhSHovL2NMNXF2amoveWdLckJhc1dQQ3NJTHZoNUlYNGhiMkg3SXNORnl4YjFMdlpidkhNSnNpUmxTWHVoY1dGUllmL1NrS1Y3bDFHWFpTeTd1dHgrZWZueTl5c1NWclFXNlJVdExlcjdJZVNIK21LbFltbnhuWldlSzdmL2lQOVI5R1BuS3FkVm0xZDlMK0dYWENxMUw2MG8vVnJHSzd2MGs4TlBsVCtOckU1ZDNibkdaYzIydGNTMTRyVzMxL21zMjF1dVdsNVEzcmQrMnZxbURld05KUnZlYjV5MzhXTEZsSXJ0bTZpYjVKdDZLaU1xV3phYmJGNjcrV3VWc09wV3RYOTE0eGJkTGF1MmZOekszM3A5bSsrMmh1MTYyMHUzZjlraDJuRjNaOGpPcGhxem1vcGR4RjE1dTU3dWp0L2Q4YlBiejNWN2RQYVU3dmxXSzY3dDJSdTk5MnlkYTEzZFB0MTlhK3JSZW5uOXdQN1orN3NPQkI1b2FiQnQyTm1vMFZoNkVBN0tENzc0SmZtWDI0ZkNEN1VmZGp2Y2NNVDB5SmFqektNbFRValRncWJCWm1GelQwdGlTL2V4c0dQdHJaNnRSMysxKzdYMnVPSHg2aFBxSjlhY3BKNHNPamx5cXVEVVVKdWs3ZFhwdE5OOTdmUGFINXlaZWVibTJSbG5POCtGbjd0d1B2ajhtUTYvamxNWHZDNGN2K2h4OGRnbHQwdk5sMTB1TjExeHZuTDBxdlBWbzUwdW5VM1hYSysxZExsM3RYWlA3VDU1M2VmNjZSdUJOODdmNU55OGZHdjZyZTdiY2JmdjNwbDlwK2N1Lys3emU1bjMzdHpQdXovOFlPbER3c09TUnlxUEtoN3JQcTc1emZLM3hoNlhuaE85Z2IxWG5zUThlZERINjN2NWUrN3ZYL3VMbmpLZVZqd3plRmIzM1BINThZSGdnYTRYczE3MHY1UzhISDVWL0lmcUgxdGVXN3crOHFmdm4xY0dadzcydjVHK0dYbGI5azc3WGUzN0tlL2JoNktHSG4vSStqRDhzZVNUOXFlOW45MCtkM3hKK1BKc2VQNVgwdGZLYjViZldyK0hmMzg0a2pVeUl1Rkt1YU8xQUE1N29xbXBBRzlyQVJpSldPM1FCVUJWR3F1QlJ4WElXTjJPc2FKK1Z6U0YvWVBINnVUUkVSZUFXbCtBdUtVQUVXMEEyN0JtaWpFZDZ4WGxYS3d2b0U1T0V3M3pLQ3czMWNseEZCQzZGQ3ROUG8yTXZOTURJTFVDZkpPT2pBeHZIUm41dGh1cjFlOEJ0T1dNMWQ0S05WRUZvTnhjVTRsRnZscUlUZnNmOWgvY3d2MkJPaXhwc3dBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBamRwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJbGhOVUNCRGIzSmxJRFV1TVM0eUlqNEtJQ0FnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQWdJQ0FnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNand2ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZXVkpsYzI5c2RYUnBiMjQrTnpJOEwzUnBabVk2V1ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S3VzdCtJUUFBS2ZaSlJFRlVlQUh0ZlFkZ1ZVWFcveS9scGIzMFhra0lrQUFKTFJCNlV3UVJWRkJBVkZSRTE2NmZxK3VuYTlsZDNmMWM5OXRGOTFOWDNUODJ4TEkyeExZV1JCRVJrTjRTQXFTUjNudlBlMG4rdnpNM04zbkVCQ2toRXZjZWVHM3UzSmt6Wjg2Y09XMXU3Tjc5Wkd2YmsyL3VoYXVESGRwZ2dFRUJnd0lHQmM0dUJlellmSDFMRys1Yk5nWjI0NWMrMXliQ0IxSnFnRUVCZ3dJR0JmcUNBdFIyUkFqWnV6a2F3cWN2NkczMFlWREFvSUFOQlNoMnpKUTk5b2JaWlVNVTQ2dEJBWU1DZlVZQmtUMzJmZGFiMFpGQkFZTUNCZ1c2VU1BUVFGMElZdncwS0dCUW9POG9ZQWlndnFPMTBaTkJBWU1DWFNoZ0NLQXVCREYrR2hRd0tOQjNGREFFVU4vUjJ1akpvSUJCZ1M0VU1BUlFGNElZUHcwS0dCVG9Pd29ZQXFqdmFHMzBaRkRBb0VBWENoZ0NxQXRCako4R0JRd0s5QjBGREFIVWQ3UTJlaklvWUZDZ0N3VU1BZFNGSU1aUGd3SUdCZnFPQW82OTBaV0R2UjBjZWFCVnBOblpQTnJSMHRvR0t3K3duYzArZW9NZVJoc0dCUXdLbkJ3RnprZ0FpU0J3cFBDcGJyQmlWMEVEME5ES2tyTjBySjdTTFN6QWhDRitMckJqeDRZUU9ya0pObW9aRkRpWEtYQkdBa2lFVDJGMU02YkVCZUd2dng0QlAyODN0TFcxaTRiZWtrTnN6bzV0aWVhemZYOE9YdmdvQ1Q3TzFMYll0OTdWdVV4Z0F6ZURBZ1lGZXFiQWFRc2dNYnVxR3l5WUZoK01SKytlaStBQXo1NTc2YVVyQ1NPakVlam5qb2RmM0lZd2R3ZTBVakFaUXFpWGlHczBZMURnWjZEQWFUdWhUZlQ1N01wcnhLSTV3NVR3RWMybnRiV1ZML2s4MVZjcldscGFPN1VuSVVSN2UxS3V0U2ZtSFhEKzFHRVlIVzVHZWIwVkRxSWFHV0JRd0tCQXY2WEFhV3RBYXUzWHQ4TEh3MFVOWGdTUXZmMnB5ek81ejg2dTh6NkxWUk0wWW1JNTJMVFgxcVlKRzNjM0o3aTdPS0tSSnBraGYvb3QzeG1JR3hSUUZEaHRBYVR1cGt4b3BRRFI0TlMxRVUzNDJDbi9UbXBHQVpLUEZ1QllRWlh5NzNpNk9TUEExdzBqWWtNUUhSbkVMcVFmemUrajdtc3YwZm8rOVhkbmt3UHNLY0drVlJGNkxkVGV6ald3STM1T2p2WUtUNGtBTmx0Ynpoa1VaWE13RVRlQms2V2ZUblBobVNiTDZZM0Z0dCtlaUNHY2VDN1JTM2hNL0tWT2pnNEtaU3UxK21hK1RuM0Y5RFRpMHlzWE40ckpCaWZCcTYvaHpBUVFzYlU3VFRMcXdxZXVvUm12Zi9BRGJudHRMOHh0TFFoMXBXK0hpODNOWkkrREgxYmlxWCtPeHoyM3pGVytIdEY0MUtTZDhjeTE0YXRqSldpcmFSVE93T2dRTDNpN3U1NVQvaVFacThWcXdYYzVsV2l0YVVZUWhYRnNvT2R4Mm1KZk00dmVuK0JXV2xPSEEvbFZxbWhrcUJkOFNUOU9tMXBvSmdjUlROeFlLTlJGT0lraUsrYjUrb3hTb0xhSnorSjB4clJ3WDZYaHl1SThXWkIreTlqdmZ0WHZDZTZrZ0F0a1FHU1krQ1Z0dE91VDdhYzM2d21Xc3RETGF4dXdMN2RDZG14RUIza2l5cytEOUtFVzM1dWRuVUpiUkFrVmRRM1ltMXZKdTlySVd4NEk5WFpYYzNnS3paeHgxVE1XUUtlTGdlenVBdTk4c2hPM1BiTWRGdzd6UUJ2THBGUXV5YzVmTkxjVkh1N09xbDZ2dmJIeHBxWkcvUFk4WDdpNzJ0SDNCS1JrTitCWWVRdWNUWTdIKzZGNnJkTlRhMGhvSUR1NHE0TUY5ODN3Z1plN0NjVVZUZGliMll3MkI2WWhuRnB6dlZwYjVxMnAyWUw0RURzc21oQ3MyajZTM1lpTU1pdmNuRTBvcTY3Ri9od0tHcTY4bUJCdmhQdDV3ZExDZVcxdHhpTnpBa0FMR3R4enNDbXBnY3p1eXJrK2dTQ3h3Vnp2Tnk3VURvc25ockI1M3FmK2Q3bWZQKzNwbnl5clltcEl1Z1VPanVJaTZGTEhwdDJ6L1ZYOGxMV05WZ3dQdHNlU1NXR0t0M09LbTdFOW94bGVKSVpzdG4wTlFzc0dpeFV4QWVBY2hwSTZyY2d1Yk1hQlhBdGNuWjM2ZEEzOExBSkkxMzdTczByeHpwY3BtRExRRFZiT2c1VzdaV21kQllYTUovSjN0a2Z4dGxyVUw3TDAydnlRN2dRN0ZGSHp1ZS9PRytEcjY2WGFYdlAyZXR6LzZnR01DUGJnWXVsN2h1ZzZRQWN1b0tvNksyS2pQUERiZTViQ3g5c1Q2Wm01dU9QUnRhaHVvbUJ5c2xjQ3F1dDlmZkZiVElta3lrYmNmZVU0TEwzc1BOWGxPK3MyNHI1VmV4RHFZWWVKTVdiY3VUQktMYlFqeHlxeGZuOGR6QzcwMnptMjRjRjdsc1BOelJVTkRZM1lkZXNMS0cza0JzTjVGbUg3VXlEOUhtSy9keXdaZzJXTEwvaXA2a2hMejhIeWg5NUZHOXQyb3VWekVsMzhaSnVuVThHWm12ekdJN1c0OC9JRVhIZmxITlhFOWwxSmVPSHF0YmhvV2lqcW02eW4wK3daM1NNQnBEMUZqYmh4Zmh4K2RlMUZxcTJOMyszQmk3LzdFck1IdXZTcHFmOHpDU0JOeThuS0xjYjY3RHBjR09aTW01aC9wcU81Rll0bkRzYTBjZEh3cG5QYjFjVUVmMTkzUlNCTmVKd1IzVHR1RnZYVEtxb1BRVXdEV1FCU2RqSWc2clQ0anVRbElQNE1lWFczaUtTSytDeWtiZGwxVkwxMkFhZm5NVW4vWFpjZm0xTmFUcHU5RTJyckxSUkFwRTFqQyt3ZG5XRFgzS1pVZXJsZmRrK3BxN0xRcFJOK2x6NUV0VC9SemlxNHl6aWtFNmxuaTdzanpTYzFOTFlsSnBTMEw2RHVJZU02Y2p4ZVRpWTBXZTNSM083SGtlOEIzTTEzRkRmZ3YwUkFMTkVFeE1idmR1TnZuNi9IN0dITUQrTStZbTMzWWNtbjBNT1pXcTRMRjZpUXBJM3VCK25QRmhldDU4NTMwU1phVDNLRGFHWFF3dDZPR2kzL1NaQkRCSmpjTHhZWmg2M0cxUk90WlB6MnJDaVdwSHdYR3NpcmhXL2QwVlVGVEtSdGViRnRuUi9rVXdIYmtXaXVEdXE3aXdQbnpWNXArbEl1bDd2elErcTRpQm5MLzRwWFRvU0x0TlhKbzUzMWRaemt1bUFsZnd6SGx0WUtKK0VKUlMrWlozN25mOVdYRFIvSS9iMEpQNHNBMGdmUTNFUi9RR1VUVEZGdXlLcW94OXl4WWZpdjY4K0RyNWVyWHVXc2ZMYXp4U20xTGN3bERGbFZWNCswMGtwVWx0V3ErLzBEUEJEdDV3MVA3dXl5OER0NGp2WGI2TlBLTDZ0RVNrRTV1R0lCSHpNbWhmaXJpUzJwcnVjQ2RJQ1B1eHNaVVJaS0p3aGptSjBka0ZWVWkwZWZXZ3NYSnp2VVVDdHNwSURtQ3NUUi9ETGswWTZKOC9WZ1BVZHN6QzRCdHRQc0VSam5pL0YwMnB0ZE5aK01WdGo1TGd4ZFZWZUhRMlZWa0Y0alBNd0k5dkhpb3BFNmJjZ3NLa1ZoZlFQY1RTYkVCUHJDMGRGRVBteERkWDBkanBaVzBVeG1ScnE3R1I5K25ZeXR1NCtxQlZkVWFZVzNDeHZZbEEzcnpjTTZPbXRyNDVpM3A2SXcyQkVoSHBvRFZsMWtHeTB0Rm55ZlJweVBsUUhGbEU2anZEQTJPZ1NlWnJNU1NLelNJK2dhZERYOVFadTJKc0ZrRXJOQnIwNEI3ZUNBblB4eW1tTEVuWUtralRUTExLMUFaaTc3U3E1bVJkTFJpN2JnVUI4a2hnZkNnM09ueXdjUkpuWnNyTFN5Q2dlS09XOTE1RkVHTElKOE9NLytYbkJ6Y1ZGQkU3MDNFZjUxcE5laGtncFVWOVp4WUczdzhmZkEwQUFmdUxscUVXSzlydjRwdklUQ09wcitlVWpMbzErSXBtdDhxQi85VnA0VWNKcUFrTG9hTHEwMGE2dXhuenpIeER1UkxnamtwaXc4WjJiN2txQ3JnK0pSbXJTVm5OOFUxcThYZkRoREh1UzdXTmIzTXJzcDJoN0hiUHJOOHNtbVpNTnNhR3JBMFpKS0ZEYzE4MC9ubU9oTDh5SVBPdmQ0bTIwVHAvcjlaeFZBb2g0TFJVVGFIcTZ3NEs0SU9qTXBmSVRCYkVGTm1HMUJIMzhYZm1sdHNXSnpaajVtaHJUaXdRV3hpQmtVcnZCTVNjM0dsMXVPWWt1bUNSTWlRam5mb2tIUVQySnBRbHBCUGhZaytPRDN5MmRRbTNOQlZtNFJYdjlrTDdVN055U084dVpFdHlLTHZwTUdxNFBhdGZSUmEvMEJMdloweXZzNjBiZGlqNnJhTnRycDFJYmM3REYzWERnWHFnbEhNa3V3OVdBdVhycDlNc2F1R3FvWTZPQ2hOTHo5NlY3azFiVEExOVBqdUIxYjJtMmdxamwya0R1dW1SWEVheTBvTEczQWwvdHFFZWpsZ1lxYVNpeWJIa2o4bk9nOGJzUFh1MHJRME9KQVBKc1JIMmFQcTZpZENvTm04ZGhOV1ZVOUJ2aHJUTm5Jb3ppT25MUGZQQktMOEZEZmp0bng5bkxIZzQrTm9WbnJnaTFKRkpLQ0FFSG12YVFrSDQ5ZkVZOExwaStDaTRzelV0T3o4Uy82QXc4WHR5RFkxNXNMaXl1eE85Q2FVRmRxYSt0eDZaMy94b0NoZ1JUK0xXcHhpWlpUYm1sRk1JVjJsQTgxYTg3RDRidzhySmdSaXFsM1RNQ2dxRENWTGxMRGpTVHBVQWJXZm5rQVdlVk5GTUpVTTdsWW03Z3BiczNPeFRXalBQSHJKZVBoUTdvME5qY2pOU01QbjJ4S3hiRXFUd3dJOEZjQ1d6YWtvd1hGaUhTcng4TUxZeG10RGFId3M4ZVI5RnlzL1RvRlJ5czlNSEtBNWllekhVcHpNNE1mSlZtNGErSEZDT2VHMU5EWWhLODNIOFNyZTdJd016cUNWYlhJWnhQNzNaV1Rod1d4THZqVlJYRUlEZmFIaGI2YjFJeGNmTFk1RlNubFpzUUVCMUl3YU5xWDhPak8zSHhNRHdPdVdoeUx5SENKSGdPWjJZWFlzUFVJZnNoaXdDVThoSUtadmljeW13MHBXVXNML05UVzE2T3B2Z1EzWHhBQmQ3TXJUTTVtN0VxcEpDODNVazVTbU90TXFsbys4N2MrRlVBYThqSUNlYlVQdjUwcFpTZzZRYVNlWHZ4ekN4OGRyNHlpUWp5M1lqUXV1K1I4K1B2N0tpYVdhNWZTbEZ1eHJCVHZydHVBSjk0N2pQZ0JZVXJkemk4dHhLcjc1K0RDV1ZQVkFwTzZBclBQbTRDeThncE1tVFFPUmNWbCtNcy9Qc0hHNUJvRXVEc3BEVXJxaUxralRzTFlFR2ZjdW1JQndrSUNrWHc0QTFzZlhRYy9UeGZjc0d3K3drSURzV3ZQUWR4OHJRTkdqeHd1dHlrWVBTb080OGVOd0s4ZmV4dFZ6VmJ1WEk0ZFFraWlVN3NyRzdCNGVqaHV2MmtlbkoyY2tKeVNoamUydnNYZDBSWFJnVTY0N2NhRkNBa0tRQ01YUmMxVGIyUHQ5Z3I2S1JxeGVONVVYRHgzS2hvcGpGYS90WjU5dGVIbTVmT1ZFRjc5ci9YWWY3Z0FmM3pvYXJYcjZ4ckttRkhEa1RBNkRvY09aMkxsVmF2VXVCU1NuT2ovKzkxVm1EWmx2SVkwMzBlT0dJNnhZK0p4LytOdkk3MnNrY3FpY3djOU9pcjk2QXNaSmEwUStkd1V4SHhUd0ExdG1LOG53cmpqaXhETEx5dkJta2Ztays2VDRNVHgyc0xFOFFrNGIzb2kvdmpVKzBpaEZ1WkdUYWVtcGhqdjNUOExzOCtmREMrdnp1eCtxOVZLMHpJZlQ2OWFoeS8yVnlBcXlCOUpPUVc0Y3FJMzdyN2xSZ3lRemFlZGc4V3N2bUpoRHY3ZjZrK3hmaCsxS0M1Y1cvRDJOQ01wK1ErSUd4N2JVVHovd2htWTh2RTNlSFROWHNTR2h0QVBZMFZWRlRlc2UyZGl6aXdORjMwdFdIanR1aXVMOE1xYm4rTDFid3VKaTJ3bXJjZ3RLY0xLNWFOeCthWGtVYjlPSG0waGoxNTNaVGw1OUN2OC9ZTVVEQTROb3dtbXBhRG9DTmh4WTZtdnFVZE9TeWxXUDdZSTB5YVBVenkrY1VzU1B0NjZSWm41c2o1bDVmWW05S2tBMG9TS0pxMWxFR0lEYXpvaGY1Qi9KSG9oSUtybnVRS1N1L0ZWZWdIK2VVTUNibHErVUUxS1EyTXowaklMbERZUU16Z01JU0ZCWE5CWGNGZDVEMDkrbklWaWFobXJiNStPQmZObnFXRTBORkFiT2xiSThUb2dObVpReC9nOGFNcElMbzN5RmRnTTJlWXJuR2dLQ1pnY0tVamFaOStGa1FvQldkeE5GREtIanVUUWhHaEJMSEdSK3JGRG9yRjAvaGpjOGZKQlRBbjNSak92Q1lqL0lzYlRDYnNPRmFPRTVsUjRhQUNDQXYxd1dVSVFYdGhjaHBYTGhzQlBhUUxVdnFpVmpCZ2Foc2Uvek1NOE9pWmpCOHZPRERTenYvVS9ITVBDODJNVkxhUk1ja25LYTF1eE55a0xBOFA5RUNwbUpxR1laa0JwZVMxU00wc1JHV0JXWmZMbTZlR09pZVBISXBsNHk4SWVRdE5MekpXb3lIQXNtWmVBSzFadXc1d2hZdEpxZUhmYzJPV0xLNTNienp3L0RjN09qSlJ5MXhMNm1DaEVzZ3RxOE8yQkd1d3BhY0p6TjA2RExHNkJ2SUl5Yk41K2hGcU9GVlBHRDhiZ2dhRVlGQjJKVzYrYmc4bjNmWXBJMXhhc3ZHMG1GaStjcmVyWE1reDlsUGxwWnVha3hRNEtRL1RBQVhqazNtdFE5YWMzOE5xZVF2em0vQUE4ZVBkVjhQUHpRVDFONHZSalJSUnlEdFN5Z2xrM0V2ZmNkZ1ZLLy9JbTlpVlhVakhXWmxVRXhTaHVHTFYxalRod0tFdjVPWWRFaDhLYjV0ZlZTK1lpZzRHWlQvYlVvS3kyRmsvZE9oMVhMTHBRNFZMTk1INmFqZ3ZuZVFBM3VudnZXSWFhK2pYWWtGU1BHdkxrM1pmSDRhYnJGeWtUdEtuSmdwUzBMTVZ6UTFrL2lKdktyVGN1b1RiM0RsN2tuTHJUYkxYbE02dUZvVW1heTJzMi94clRweWFxUHJmdk9Zckgvcm1ad3BDQkQ5SzF3NmVscnZiT1c1OEtvSGMrM0VwbUxLSHQ2a1FpMmVFSTdmK0VJV1lTejRyRVVGZDh2eWVYNnVnWFNvTVFSMXAxWFRNbWpvM0duQmtqZW1lMHA5aUtDTUxhUmd2bUQzSWpFMDlXQzY2K3ZoR3Z2UFVOL3ZlalZMaHdEQTh2amNOVmw4c2ljTUxDK2RQeDNzWTFHTUhGTkhYU2FOV2IxRi96M2lZOCttNEtKOTBlOTEwV2krdVhuc2NGTG1hT3RWMDdzV1dGNDVFVWhoV1FUNzJXcmJQeXpmZS94VTJ2SnlQT2JJOS8vR1ltWms0WnBlb1BHeklBOVJXN1lLL0pEVlVtUGlvL2h2VGY0UTUrSjlWeUVVRCsxQlFTNHFpei8zVWZFdjR5aHd2SXBOR2ZtOFB3MkVqYUdPc3hiR1lzaFlQczhFQitZU25XYlM3Qm90bWR2aDdKZ045N3JBWlRyM3dmcS84bkVjdXYwcUk5WXVKY01QTkRqTDBpREVPRHpCME1MQUdBOXovNUhuZS90QmNsUEUvNCtTTXpNWGVXeHZTUkVjRklDSFJHSXgzY3NoL3BRbGQxTG04VU1yb200TzN0alR0dnZhYnpFaXZiRSsrOUIxS3hidnZIckdyUGhlM0xSVjJrQlBUcXQ3L0ZueC9hei9vbCtPOC9UTUJmSDcxRjNSdmc3d05zcnNUbGp3ekIzQXNtcTdMeWltbzgrOG9HUFBkTkRnSjUrUGxaYWlMblRSMkpnQUEvekorVmdOYytYNGRibDErdmhFOXhTVGxXUHI4T2YzczlqYnRuRzE1OFpDbzFqZ3NSSEJ5QTVVdW00NVduWDFWT2JXbFlhRlhGVklWblhscVBKOVpuWTVTUENmOTcxM1JNbnp3Q3J1U2JSWmRNd1o5Ly94THUvTzBRWERSbmlzS2xvcklHVDcrOEhrOXV5TUZBc3dQK2RHTWlMcmx3UER3OTNiR0N0SDVxeFdwY1BNd0xTeGJPVXNKSE5yeFhPZGFIMzB1QkQzbE9lSFRab21tUWpldkt5MmRodzQ0MVdNK1FlNGVad1Y3czdGcnd4VmUzZEFpZnpUOGs0KzRudjFHYWtpZFBIZ2p2bkEzb1V3RzBnNmZabjFxWkNyOHA3aWpqV2E1NCtoQUN1U0RFMytCT3ArdmgvRHE4c1RlWm5qQm1qZEpuMlp6YWhEZWYxaGpmMWl3N0c0VG9yazBKVjI2aWorVEpSWU1RNk8rbnFxUWN6Y1lEN3laamZLQzdpaUk4dUdZUEVzZEVJMjdvUU83OGdaZzJNa1RWRXpOR0lEZS9CUGU4c1IrVGdqM3BDMm5Gbjk3ZWo4VFJVUmc3U2xPL2RWTlRWVDdCbTc3b2JLdms1aGZqMDIrUFlCSjlIZHVLNjdGclgzcUhBREs3MFFGS0gxUFgrNFNPSmpMVXdaUmNqRThZcWdST2VBakhOdENaMnBEbXZ6bVduWTlCQThNNW5nREVqSExDb0FGKzFDdzBUV3duKytBRWRRaERoUThGaFRJeVFreXMxMmx1aUlNV281enBvS2FXcDV5bEdoT0xlYmQyZlJLaTZXdnlaN09idGgzR2xBbkRtZk5sVm10Q2NzQUV6K003c1IyNTlsMU1QWXROZHJqOGRxRUFFdmRSUzVzRHhnZTc0Tzl2N01DMzZldVVzM3ZLQkIvY2NKYzN3b0lHWVBiTU1SME5pb2xDYnNQbytFaTRFd2VCZlFmVDhPakx5YmhvVWpEeXlodXc1c045akVSYWxTYWFYVmlEZTY0YWp1QWdqU2NLaTRyUlpxM0JZNytLVkQ2YW91SkNsRmRVOGJvL3dzUG9oNWxFYzVDYmpRNEhEMlhpOXk4bVkvNlVZT3pKSTg5L3VCMGo0NkxnVFgrVDhOQ1lTN2twRUJmUkZBWDJKNlhqc2RkU01DOHhDTGtWalhqMnJlM2tuMmh1SUlHSUhCQ0N4YU45TVRJbXVBTWY4UkhkOGVvZXpJcnlVV2tsTjcyOEU1UEdEdUtHRXFXRTR0UXhBN0NlNDlONVErZzJhY0lZYXFGYThDZU4vcmc3SHYrQW1wOFBqejJaem1yV2RwOEtJSDhmTnlUTTlVWjBBTlZyTXFRNFJDWDBMbndxa1I5dlprRXZIT3FsaUM1RWFZandRRlNFcHM2cndyUDRwc0xxeElQL0NXSWZTN2liQzZlOEdSR01VSWhtSUZCV3p1aENhVFBjSWpUU0ZSNXFSQ1YzS0FIUmdzS0RmVkJSVmNlRnFGMnZwMU92a2RxQk9jcVhqdWxXT0ZPcktpdVhTTXpwZzc0WGlZblF5RGJkcVUxeGk1WC9IU0Q0ZDdlQXhTK1NTUHB2MkpHRkpRdnFtZWJnUlNZT3hzMEx3eEVZNEVzVHk0Si9iOWlEYTVkNGNRR1lNVzlzRUJkSHBHcTNpZjZmWFFkeUFMY2ZzMDFuMTUzZmREdzdrR3IvSWs1b01WbWNIRjJWMzBYbVhnOXZjOXFWWDZuclBSMi8yYnp3aGl3ZVdlVFB2UFFsM0JnNWt6SzVWOHo2b3JJNitOR0hKTkd2NUx3Y1BMTjhCTTZucjhlUDJwNzR2Y3lzTC9NcFdtWG4rVVY3MGtMeitZaXdPSnlhUi9QTXJQeElBUlNVcVhrMXVKaDVNZ3dkY2xkcHhIT1BqSU5UdXlrY04yd0ludmpENEE0VVpkeGlNZ3Y0VTd0YVBES0l6bkJOQUVtZk9YbkZRRER4WThWQlBrN0lLYXBEQVRWTEVVQ09OR2VIUlhqQ2wxRTNBUkdPUjlMeUVCM0JYRG5lNjhmZ1EzVkRIYkp5UklNTlZCclBJR2FWQi9velM1NzhLcEJHaC9sQUR4UEh4bFFIdmdhN09qS1BMRThKSU9IemtDQnFmTEk1cWRwa0U1YUo4TmNobEpyeDRtbGhXUGxGUGlZT0NPeW9wMS92emM4ZmMxSnZ0dDZscmZ4aTJ1WHZsMkRQWkJLM3dvcW9RYTRZNU10SUJUVWcwVFpLYWkzWXNMc1NjQ1VoeXpsaGtTNVlGYVFKcEM1TjllcFAwVUtjcURxTElHeFZjeWdzcEJReHRiQzFYM3FYc3IxYU9uWVA4TGdFNzlJdnNweGhUQW1YdDRPVENDSS9PZTB2dXl6RDNOVlY5TlBvVTYvWE9yMVBZU1pwU2VWemRGR1JWUS9ISTY0NmtXcXVWQzgzcGxmaldGYWhKb0JvOWt5aUZpZm1XRlZWTGRaOGtZS0w1eVF5LzhnRFU4WU5vUk5jMCtiU0dBVk15NnVGblplV1gyT0x0ZXBLVnBTODJrRmh4M3dYRWVUTVNEZ2VpTHZrMVlocWIwc05tWXVUQlJHV2YxcVZoSWloQWJCd2NVclBUV3hQanZPRWVidmdLeDc5ZVBlZVdjb3BLNkg1dXZvbVpOQlBjemp0TUZxc2pUUkhadHAwcFVVdjlRSkpvWkI1VldGOHRLRFZVb2M1a1EwcUpTS0Rja3FGeU5zeEwyWUlQanV2ak9ZZjU1cGprZ1Z0c1ZqNHRZWCtwbGFVMTlFWWJCY09hbGVRcENmeWc5U1RsNlFyaUFEVndjNWVBZ2Y2TDJuU3lwNG9MTWxiZG5hU20wWGNwQTJDM05iQzU5SzA2YyttVWUzSmRhMTlyVTRMNjdYWFo0RnEyM2Eza2pJMmxKdFh3a2licjlLRXJsMDZCOXYydjRJS3BoaVk2UTlVUENhTjlUTDBxUUJhY2NVRVhEWW5udW54RHR5SkhMRmxaenFlK3ZRb1JnYTVNdkxSaElXSklYaitnUkZLclpaZFVoeUtvVHovSkVDNm5qVm9ySzlGNW1jSGtUUFJGOVltVHA3MHhZbDFkNlhXMCtaR3AyWVZHYWxaYVRnK1BDOERwenBVTWdTc2ZESGVUZkJpVkVOQWJPL0NzZ1prVUswdUs2K0NIN1dMVU81U2Q4MzB3N092N2VmS3Q2UHFQb1FheFJCVlg1anZURUhqMjFOclIycTdVekJ1MlptS2NXTmlsY041RnFORUFvZlRjckY3ZXczeXlJd1NWcDQrWlJ4YzZKc1FPRUt0NERzK2dpWEdMQXRORlozd3pXb1Z4MlkyQ3VuZkMrbmNZTFY3YkJiY1NUVFZiVDhpQklZTU5mTnNGVk0zMmdXUVhsRXlqQytJTk5QWlBWSnBDYVhNeC9yajM5ZmgyZStaQzdTakVnODhNS0JEQUduVWsxUUg0a3R3cFBZU0Z4dUc5STNmSW5xeEc3Ym5sdU9hTWU3NDlTM0w2VWR4SnQyT1lIZFNyb29JaXFhYm5wbkRxTkhMd05Sd09GQzR0K3loaGhQYmpNbEJMdkQwOHNNM1J5MjRacTZXQnlVNFI0cFd2emtmbG1ndmJNNHB4ODNqekVxYmtiNGxJVENqeElLS2FvYnFDU0k0NDJMQ2tiNzVHMFJmeG53NTVwOUZtdXN4c04wbkp4clZNV1kxZTNvMFVzaG93aTkyY0Roem5qNUZHRk5heE5KSUt5bGwyZ2o5ZkFTcFUxaGF4eWpEOFp0SWNrb21McjcvZlh5MmNpbmRDWkZzUHh6MzNuZ0I1dHo3RVdhUGp2NWxDS0NFa1lNVUVmUTMyWkh5bnovQS9CbDNwREppRVJQbGg4bmptYzl5bHVINDVXckhFTzA0ZkxjNVFnbEdmV0dKQ1NPTStNbFhCL0R1eGd3c1hWQk5UY0Nma3pNSVQ5OHdHbysvc1UzbEw2MjZjUWFHRElwVUdCY1VsZVA3cEZKa1YxbTRrUE1ZYWVFaFY2clZEOTl6TGFZazdxQVF0Y2NjaG5lOXZUV3RUdkE0MmNWbnUwT3FiYStEUnAwdDJOWlI2L3Y0Z1hiY0liMmFLZHdQSGkyQ0pQT0pxUlhCL0JDQnRNeENhbXh1Mkhjb0J4TVRoeU13VURPQmF5aHdkeWRsSTFRWXQxVjJiTnZtMnJVWXlUN3UyT2xCczhBYjE5OFd5RnlpWmhSVnNYNzdQYmEzYWpKWVNyVFM0OXExNmFMaks2dnBDMDArSzZsdE52TUlqNjBBa2dCR0EwM1RJVHdrSzNNb1VNK2RQQ3NyRStDQ2R4elJodWtUTlVlNVhGUG1LdjFhT3cva1l0NHNqUjRqNDJMdzRBT0RzZXJMUTRpbm1iVGl5a3N3bEJGTWdjMDcwdkQzYndweDU0b3FtaTV1R0JVZmc1VlBKK0xGai9iU0JMVERKWGNQeEEzWFhvb0krbisyVWxoOU1YMnQwcGpVelh5TEh4NkR4LzgyQ28rK3R3ZmovSnh4RmFOdTRsQVdrRWpkdHIyMXpOVXFwTE82VG0xdThYR0Q4Y2o5c1hqaDh4UjRjRGkzMzN3Si9UMmFWcHBKTGZhRG96VTA4U1JBVUU1QjVrLy9YUVNldVgwcy92ajZWdFhtUHhsTmt3aWphcDlKckQ4a1VVQjZtMGd6amVaYWVRbXk5OUFmOWNGMi9PNmVJQldWbkRhWmJTdzdqUC81ZHk1bVJOR01KSjE3Ry9wVUE5THQvRmFxZ3hLU2xsQWhqVlNObWVsNDFGUDdaUmZRdFFQWk1Yb1hoTjFrb1dqdHlxZUVZdVhWSFJ5aEd2LzRLOGV3NGJza1hMTjRtanJMZE1zTml6RmpTb0tLdUF4bHlOdEVmNEtZQTE5c1BJRE1TZ3ZDYVgrLytNNU9CTkduTW5oZ3NBcUJMbDAwWHpWZlZsR0RvenluRkRNb29uM0pTWEVuSXh5SEExZW52cUQxVDZHTC9sMk5RVlp3KzZyVnk2VU45YjM5R1VySHRja2ZvazRIMGZtLzkxZ3RmUjNpak5ZYzRyS2dNN0pLZUZyZGhIMkhpMVNVVHZkbFZkSTArNDdKaEFPOG5aa3MyTnhCUDcwdkM5djA5ZVNoV1Rwc2RZam5JbjcxK2NlWWE1U0IrS3RmMUFROEw2cGpJTzNtaTZBdWdsbkhYWnVYN3VkY3FDVGg3TTY2NUozMmR2USs1VlBNQ1UrYVlYdXphbEZiUzAyQ2Z1QUJFU0g0NisrVzQ4YlVUUHE4d2pCcVJHY1VUL0hhS0JNMjdDL0Y5TytUc2VDaThlcWM0RU8vV1lITEwwNm5hZXJEQlJ5aHVrZy9Wb0QzMWgraFdXTEMybi92eGgwclpzT0RBdnp1MjVjeFgyZUNNclZqeUJQaTBHMGtmMi9mbDAxSkxCbloycGhFWXhHQi84QTkxelBpTnBHSmpwNFl5UEMrZ0dqUW4yeEl3c2poWHZnbXVaekppVW00ZlA0RW1zSmUrTzI5MStQU2kxS1ZyMFpTT2FROUNlVy93NlRUa1Y3T3pNN252Vi90WTByQkxCVk51K1dHSmRUS1J0TnNzOE53K3FoRUVNdTYrbmo5WHVReWN6MkNwckdPay9RdFBqRy9lRE5lMzVLUEdST1RNZmY4c1VvelhuSDFQT3hLWG8wY25wLzBkWmZNNjk0VlFuMHFnUFJGMys1bzBRalFJWVZGZlJSU3ROdlgrZyt0cU5mZWhlRk5QRk5scGQ5SlFEdVhwSWtBNlY0cjFiNklROURTWW8rd0dBLzgzM3NIbVJGc3hhVnpFcFNkUEdwa0p3Tm41NVhpdzg5MzQ1bVBtT1RsSzZmVlcvSGE1blJxUTgvaDRlc21jZWVNNWdRN29hcW1BVytzMjRhRnM0WnFBb2pJYUl2cCtBV240MkR2d0dROEZUM1M3SHg3a3pQc1ZKbGdMbWVudUhBZG5TV0FJMFRqd3RQVWZMbW1YRTVNOGJmVmlxUmNRRWd1WjdBMk1SU2JmQ1NmVWJ4WVJmdk03Q0lrWlZaaERFMm1JelFqczNKTE1Hd0lCU1h4VERtYWgrOXpHakdQK1RsRWdrY3lPazl5dDltWlVNOFQ3Mk5vQ24yd0tZc214aTVxR0VPNTBOeG9RbkNoTU9JSmFvSnkyRmhBSHRGaHgyeGM4RnliV2dReXB2YjVrT2lWQStlbmMwYlVMZXEzbzczV3I4eVp6STNjNDhKOEZpV0FiU1pQelRHZDBSVU5iVmo3MlI3Y2VKVTdBbmlNUWhhdXZLVC9MVHNPTThBUlFLM1dENDVzWTJaOEFBV3pQWjVZdlpNYllTdG1UWXRUanVCeENTTVZBbUp1N3p1WWlWVnZiMlVreW9MSm9XWTgvMW1hY2pZdlhUQ2VqbDFmaklqcjFONExpeXVZZnJFRmIzeDlqRWMrNkVBbUh3bFltRjZ3YlhjeUJnNElZaDVYdkNxVHQvS0tXcno5MFRhOHZabGFwcWZtYy9remNSRmNMNWdlei93c0R5U09IYVhxaTRETllGN1ptK3QyWU8zV1hJUlRBRW5acytzT0tUL1JwUmVPVnZqWUpxaUtaclh1aXoxNGdTNFAyVVJLR2RHVGVSTVFlbG5wUStJelJqR1lFZFYvdkxVTHcySWltRWtkeUNoZU1HNi9ialp1ZlhJVGswTTFjYS96cDdyNUROL3NaaXg3L3JUYWt4UFpYK3l0eEk2WEwwZGl3aEFWeGVnUU1EK0JsR2hDVXZkelJsdm1QZkFWRm83enc0ZE05MzcraGxHNDdmclppdUZ0cGJNMEo0dEF5aVFWL2RhSDNzSzIxRXFFOGp5UHZrQi9vc3ZqTHNzQ2pBMXpwME5Sa3F2MFN4MWY5QUxWWDE1SlBaUENMTXBKbmxyZWlFbFJua2lNRCtGamFMVW9SUTc5UTF2MjVlRVFEMklPNU1US0J0SE1wSzVGMHhrVzlYZEZTVmtOUHZqNkNEYVhjSVUwa3duVGk3RnovVzMwdmNSQjhqdnVmK0o5N00yZ3FzMUloYTJqVDVqQ2lVSWlLdENOajBodzVGa3NDMjE5UnRlNHNLS0MzSGc4d3hGVkxNdGkrRjFvSTg1Y0h6Y1Rvb0lsbEcxSEh4VVQ0M2pleUltbkRxV3RyaUR5WFdnbi9VWXdSMGZhcmFocFFqYlREdlMxSE16eEJQbTRxa1dRWFZ6SG5DZ2VpT1ZGY1I0SGNKR0UrR3BoMndKcVBjVlZQTlBITmlSL3A0bnREaWQ5dlpqZExYTmR3bXRGUE1rK25ORWRKNXArb3VrZVlWUkowWjY0dVRrN1lBREhLUThzS3ljT3VjU2hPN0R0Vi9pbmdZdm9hSDZOMnVXN3F5K2FWbEdOQldNSGVtTEtXSWJZM1p4NGp3VjdEK1ZqSTdXNWhFaEdtemdPT2VoN2pPT1R4UzYweXVFZldwZ1I2NFBKWXlLb3lRaVAwYzlDMCsyVEgzS1VhUmZDcUpqUVcyaFJWTXVNZFFyZUtXUENGVS9JZUl0TGE3SDlZQjcyNTlZaGdqd3FrY29BSm9CR0JESVhpdGVUc3FxNG1CMXgzdmdvUG5UUHJKSkp2OStkaFkySHl4SFpMa3hrZmlqemtFMWNaaEtYc2ZHaHBLZUxtdXRqdVJYNGZuOCtjaXFiS2F5Y0ZOL0luTWs5bVN4TGpQVEFwRkZoa0tnelM1RmZWSTF0Qi9LUVZOQ0FBVjdjbEZncWMrL0hjWVFIU0IwKzM0bHpsRXYvcFJ3UXJ1TFJtaGc2N2Z5OHRQNGtUZVp3VHJWcVgxWHV4YmYvU0FFa2sxWEV4MzQwV0NUVXJ1MjEzZEZVbURHSWpPTENTWkZKazBoZEJYZnprZ1pHUmRTcXBqbkF4b0xjSE5SQ0ZxYVUwK0liY211dy9XK1hkSmcyVzdidHh2T3Zmb3FTeWpvc1d6QVpTeGRkcE5UYkkzVDRYdjdmYTJrT3laa3EvcE5PYkVENktPVmpPZXJJQU40VStENE1mM2N0ODJhWnpud1NUU3lnc0NRYThLWnA2NnZxMnpUWTVhc3dyTnhUVEZwd2pmQ3ZqZkNrT3dXU0RyVjB5SmR4ckhKV0w0QnRPVE42SnpqS2ZSTHBLeEhOaGlEWFpFT1NmdVVzbG94Rm50bGQweDROOUtPNjc4NVhRYlZGUFVwWEVqaURhS1lLM2dJaWVFczR6Z1paRkt6bnlWZDNvUGRieWdVaWdsNGVXaGZvVHA5VUY3clozaXRDU0hBcDRUMFNsUlBjUE5WOUpyWFF5aGlsOHVDNC9EZ0dGVlVrVWpJR2VTeE1LUVdUaXVUeEhoUGJDZWRpZDZaQWJ5YWVncnU4cFAxS3RsMUtPb21BMVBxZzFVVVRVSVNNTEhUQlc0UlFBWVVWV1FraE5IOGJaYTdZQitOYW1rQm5mWCthdnNKRE9zaDlPaTVsN2JqSVZUbkpIc3h4Uys2YzdlTmpGRDZrYlNYSFcxelBZQXBCNmhORkJKSkh2VG0zZW4wZHB5TFNYY0NYTlBmZ1M0U2UrTEdFenl2WXA0QWI2Uk5JM0RveFU4Vzk4dGJKYmIzU1hQOW9SQWdwTzRkTTJFK0JMQTZkSjJUeVpJR0tJTEFGdWE1UHJHZ2pvNms1dlBUdURxVUdSNFFGOE56WFdLcmJ3NVgyNXNrRG9nS2lFci8wcnkyS1lZVkJ1UG4rQ0dSQmlKWW4xNFV4dEYyM3Mwd1dvYTQxeVNJVWJVZlNHZ1FFSi8zYWp4cHVMOUR2a1VPYkF2TGJkZ0hZanRXV0RsTFBqUUlubXVGWkFmMmEwRk1FcERCM0FCbVd1Wm9LZEZ3aXZNVzAwa0NubC93U2hwZHJjajlKM0NQZWVyOEQyL3RsVmJYQXBZMmVRSEFUNGVJdmtidDJrUHRVT1hFVVJWYW5yVnlXUGtTUWlEQUlvS0N3QmJsSDhCWThCVlQvTExPbGszYWxuWll5R0tuSEQxY0t2Umc2bktWRTJwRmtTOGw3azkvU250U3hwVDJMVG9nTG0ramdPYWtySUczcFd1MkplRlRWWldYQlNlY1hRVlcwTTVrN3dVL3U5MnVubWZRbFpXY0RPbWZsTkZzL08yajFqSXpxcnhjNmxZazZIWkNKMFBhRjd1OFdKcExqRHB0U0t0RDZ6SmU0ZHNFWVJET0M0TXBGSTZaUkRxTVF4K2hyZWZtOW5kaWVUak9TSmtCWHhyTnR1VHM4dXl1VGU0U0piUmUyYlRzOWZUL1JQU2NhcS9CalQ4L21VWXRKM3JwQVQ3aWRDSWN1VFNqQjJsTy9YZXZxdjN1aXIxVTY3a2J3QytZOTNhTzNhZnQ1SWpycDlZUmVvamwxQVBzK0VSL3A5VTRWRjdudlpQQ1JlaWVhdzVOdFE5bzVFemd6QVVUcWlNVHNTNUR1WkNITHhQUngxeWM5VEZsb1l2dnZ6NmpFeXc5OWdkblJIZ2lpVmlSSVo1UTBZQ3Q5QTRrODd4VDJFOExucERzMEtob1U2S2NVT0RNQkpQYXdPQThVL05pSDBSTk54RXdSOFNIdnRtSkVGYk5FdTY0dWRyekpOUkYyY3A1S2RpZk4xOUJ4K1p6NklvSlJjUFNrdVRZbmloRWlPa3RUY3JRa056Tk5semxSN3VyNnFleXk1OVFBRFdRTUN2UVNCYlRZNEdrMEpydDhUS2d6TnUzTVZGRU5DU2VMWm5JeUwzbG9rMERYeDNGSXlGYWd1N2IwQ051QlE3bEl5cTJGUDUxcVlyT2V5eUJxYkJPZE94SWRFaitCdk9SWWdwVEpOUU1NQ3Z5blUrQzBOU0R4UTRUVGNmakdoalI0OE9EZmd0a2o0ZTM1NDZjWmRrZGdFUnh1Zk1aS2pTU0o4UWwvS3FMRUNFdzlIODBneVZqeWpKdXVwcDBzMklPSDgvRE02OXZnUUhWSVV0VDd5eUpXNHpQa1RYZXNZSlQ5aDFQZ3RNUHdPdDFFWjhsbWVGVkNzV0plcUNpSWZ2RW5Qc1dzNnJvdUplSmpDM0pkaXVRemovMTRVVkI1TVB3by9yd3VWVzF2TTc0YkZEQW8wQThvY05vYWtPM1lCdktzalBpQzFDbndrNVVLbEQ0U2ZwVlFzdzRpa0NRL29qdkpJclhDbWVvdkpwNW9QcDEzNlhjYm53WUZEQXIwTndxY3NRQVN6VVRNTVJFbThqb1ZrS1F3RVRvNmlQWWpSd1I2QXFsL3J2dDllc0xkS0Rjb1lGRGd4eFE0WXdHa042bjVWRzJraVg3aEZEN2w3dTRpWUtmUWhGSFZvSUJCZ1g1RWdaN1ZqWDQwQ0FOVmd3SUdCZm9uQlF3QjFEL256Y0Rhb01BdmdnS0dBUHBGVEtNeENJTUMvWk1DaGdEcW4vTm1ZRzFRNEJkQkFVTUEvU0ttMFJpRVFZSCtTUUZEQVBYUGVUT3dOaWp3aTZDQUlZQitFZE5vRE1LZ1FQK2tnQ0dBK3VlOEdWZ2JGUGhGVU1BUVFMK0lhVFFHWVZDZ2YxSkFmOHBGLzhUZXdOcWdnRUdCZmtzQk9YcGxYOGMvamRMMUJIcS9IWkdCdUVFQmd3TDlnZ0lpYzVUc21SVHJ4citmcFAxZDdYNkJ1WUdrUVFHREF2MmFBbkxtczV3eVIyU1A0eFZ6aDhMUE14WGJVbXJSeUtlR2FvZEsrL1g0RE9RTkNoZ1VPRWNwb0o1NHdUK09NbXUwSnk2WVBBVC9IMHVrVi85U3FTeFpBQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgXG5cdFx0XHRcdHN0eWxlPXsgYnV0dG9uU3R5bGUgfSBcblx0XHRcdFx0c3JjPXsgZmFjZWJvb2sgfSBcblx0XHRcdFx0YWx0PVwiTG9nIGluIHdpdGggRmFjZWJvb2tcIiBcblx0XHRcdFx0b25DbGljaz17IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKSB9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdHJlc3VsdDogbnVsbFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0bGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9ICAgXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRyZWxheW91dChzZWxmKTtcblx0XHRcdH0gICAgXG5cdFx0fSwgNTAwKTtcblx0XHRmdW5jdGlvbiByZWxheW91dChzZWxmKSB7XG5cdFx0XHRnYXBpLmxvYWQoJ2F1dGgyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBpbnN0YW5jZSA9IGdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiBzZWxmLnByb3BzLmNsaWVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnN0YW5jZS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgdXNlciA9IGluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpO1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbi8vIFx0XHRcdFx0XHRpZiAodXNlci5pc1NpZ25lZEluKCkpIHtcbi8vIFx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5sYXN0bmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmltYWdlVXJsID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LnRva2VuID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKS5pZF90b2tlbjtcbi8vIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZ0xvZ2luKHJlc3VsdCk7XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuLy8gXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Y2xpY2tCdXR0b24oKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLnJlc3VsdCkge1xuXHRcdFx0bGV0IGluc3RhbmNlID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTsgXG5cdFx0XHRpbnN0YW5jZS5zaWduSW4oKS50aGVuKCgpID0+IHtcblx0XHRcdFx0bGV0IHVzZXIgPSBpbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKTtcblx0XHRcdFx0aWYgKHVzZXIuaXNTaWduZWRJbigpKSB7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaWQgPSBwcm9maWxlLmdldElkKCk7XG5cdFx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBwcm9maWxlLmdldE5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQubGFzdG5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaW1hZ2VVcmwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuXHRcdFx0XHRcdHJlc3VsdC50b2tlbiA9IHVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nTG9naW4ocmVzdWx0KTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXG5cdFx0fTtcblx0XHRsZXQgZ29vZ2xlID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVg0QUFBQmNDQVlBQUFCcHlkNTFBQUFBQVhOU1IwSUFyczRjNlFBQUh2dEpSRUZVZUFIdFhRbVlGTlcxL3F2WFdSbldZUVlIQk1kUmhIRVFrRVhEYUNDSUd0eStNUkhVQ0NiaWtvZHhTNFRra2ZjZVdkU0VHSTFQZVpGZ1ZCUWpmdS9CcDRualU4SGxnWXBoQkpSOUcwZGtHVmFaalpucHRkNjUzVjNkVmRWVjAwMVA5MHczblB0OTFWMTExM1AvZSt2Y2M4ODk5eGJBamhGZ0JCZ0JSb0FSWUFRWUFVYUFFV0FFR0FGR2dCRmdCQmdCUm9BUllBUVlBVWFBRVdBRU1oRUJLVTZpNDQwWFozWWNqUkZnQkJnQlJpQkZDTWl4OG8zRjBLMlVnU1YwaWJpeDRzY3FqOE1aQVVhQUVXQUVVb09BWVBqaThvY3VuMWt4Wm94YytGdEgzZkgyNEI2REx2NmRaSEZNa0N5Vy9tYVpzRDhqd0Fnd0FveEE5eU1nKy8ySFpiLzdvNmJEbTMrKzRiOG1ma1VVQ2VZZk5RTXdZL3lDNlE4cEdITHBPa215OU9yKzZqQUZqQUFqd0Fnd0F2RWlJTXYraGhQN1BoMzcrYUlwWDFLYUtNbmZacEtSTFgvZ3lBV0M2WTg5eDRxSHZ1dEF2eDVDNDhQT0RJR2pUWDQ4OFpZYjY3Nk13dGdzQ2ZzekFvd0FJNUFTQkloMzl5d29IdkY3eXZ4bXVxS1lraEUzRjdNQWg4V1M5UzFCRVROOWdVSnNKd1pHZ1JVN1JvQVJZQVRTQVlFUUR4ZE1LVXF6WThyNEphdTFVQkRQa243OFRjaFl4WThWeDJRRUdJSFVJaERpNGFmRStNMVVRS21sbEhObkJCZ0JSb0FSU0NZQ2dwZkhMZkVielFTU1NRem54UWd3QW93QUk1QjZCQVF2ajR2eEMxS2lJcWFlUGk2QkVXQUVHQUZHSU1rSUdQSnlsdXlUakRKbnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTUFEUCtKQVBLMlRFQ2pBQWprTzRJTU9OUDl4WmkraGdCUm9BUlNESUN6UGlURENobnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTVFOcC9jTVYzdUI3dW1rL2gyYjRaM2oyN0lEZWNnTCs1Q2JCSXNQVHFBMHZ2UHJBV0ZzRXhlaHdjWXkraDU3NUpob2l6WXdRWUFVYmc5RUlnTFJtL0xNdHdmYmdTN1crdWdPZUxEYWFJKytzUFFGemVyWnZnK3VEZFFEemIwT0hJbVQ0RHpna1RUZE54QUNQQUNEQUNaeklDYWNmNDNldi9pWlpGL3duZmw3c1RhaGZ2anExb21qOFh0cktoeUwzckozQ01ISk5RUHB5SUVXQUVHSUhURllHMDBmSExiamVhbjNrY2pYTi9rakRUVnplU2QvY09ORDQ4R3lkZmVCYXkzNjhPNG50R2dCRmdCTTVvQk5KQzR2YzNOYUx4Ri9mQnUzTjcwaHVqOVpYbjRhM2JnNEpmUDU3MHZEbERSb0FSWUFReUVZRnVaL3orRTkrZ1ljNXMrT3BxVTRPZnc0bnM2MjlLVGQ2Y0t5UEFDREFDR1loQXR6SisyZU5CNDM4OG5GS21YL0NiUDVMRno5Z01iQm9tbVJHSUQ0RXhJKzI0NVR3TFBGN0FicE94NW4wM1ZoeU5MeTNIT25VRThnZlk4UE5LSyt5RU40aURIdHZxeG9JdDhxbG4xSTBwdXBYeHR5ejhJN3piTnNkVmZkdDVGOEF4N2xzUVZqdVdYcjBCc3Z6eGsybW5kOWQydU5kOUF1LzJMZHA4U05JLzNabitaSHJocDF4Z3hWbTlKTkgvQU9xSXphMSsxSDNsd3hzYnZOaHlVZ3RKNEttZkRVdCs0RVJKTmozNVpMenpSaHNXN01pY1RudnpOVm1ZVldFTlZLVmhueHR6WHZZZ1JYTkZBL0NTNzVXTStneTd3STZLd1ZLWXVPeXZQY1Q0VTllbStmMnN1T05TRzBZV1daQ2w0aUFuanZtd2Zxc1hpN2VjM210cWhXZFpNYjQwVW5HdncwZU1YNHdDbWVNaTFIY3h6VzR5MHhUbW1yR2NiZGlGeUx2N2Z0aUhWeGhHZGRKZ2tIdmJMSGpJcExObDBWUEJnZVEwWi9ybDVYYjgyMVFIK2diNW53YVh2bjBzR0RMUWhrbVZUdXpmNnNLOWIzalJySW94ZVp3OXlQU0ZuMVhDbFpmYmlQRjdWREhTK05aaHhUVWhwaStvN0RuUWpxdjZlYkF3VTZYYkpOWEg3ZE8ybVpEOFUrTWszSG1qRTlQUE4raDRWR0RmQWd2S1N1Mllmb1VQSy83dXdzTGExQTArcWFsZm5MbnE4RzNYNFI5bkx0MGFyVnNZdjkvblJjdlRqOFdzZVBiMG1jajkwWThoV1dJYkg0bUJvZWVUaTNEeXIzOE9idVk2VGRVN1l5cXo4RHVhWnNialNvWTdzYXlIaEtra0ZTdk9xZHdvLzdhSXBLaDRaYzYvakpaSTFUS0hiRk5LOWZXUk1QL3VIRlQyb2NrY01SZWIxWS9ubm1yRHEwWXpPZE04a3hWZ3dZTDdzakU2TDQ3OHNxMm9tcGFEYzFlMjRzR2EwNVQ1eHdGRE9rZUp6VkZUUWYySmQrQXNYMDA5Mlh4S21IM1RiY2liTlRzdXBxK1FLRmx0eUJPMis2Y3AwMGMvTzM1cHdQUmJqb3NwdGdlYjl2bUZ0a2Zqc2dZNnNHUnlaS0JZdmRtTEJsV005ZXYwS1ZTQjZYWkxvdTBuWDBVWWliZlJqMjNxeXFRYnZiSG9pYU0rQlRuQlRHeUJKcFNRWjQrVmFXckM1OHd5WXZveXFSVzkrSFNuRjRkYUl1MmlVRkJ4UlJhcWNwVW4vazhuQkxwRjRwZnJsOEo1NFFrNmFxRU5KMWNNSVYyOVZnN051cVlxd01EVENhaDBvR1hxT0JyWU5JVDRzZXpGTml3K3FQSjBXUERJRDdNeG5xUkV4WlZjYUVQcEtsOUFGOTY4MTRNYkgvV2dPRmRDeTBsWm93WlM0cWZ6LzhLL3RXS2hRMEl4Wk5TNzA1blMrR2lMVlIvOWhNYXQ5NGl2bUU3RnlpOTE0TXBDYlJidFJ6eVkvNXdiTlNydjhuSUhIcm5PcnVxakZ0eDZsUlVybG1lZ0xrUlZyOVB4dHNzWnYreHBnSHpzelFDV3R2N3Q2UEhEblRqNTV0bnc3QzRJK0VsNStjaWRkZS9waUhYUzYzUm9rMXZMOUVVSmJqL21MWFZoK2YxTzlGUktwS24zQkhxb0ZkSnhyZ1UzRDdQQUVRbzdSZ3ZCMVlZTGdSS3FLdTJZT05pQ29KQXA0OUIrSDE3K3dJdldzMG5YWGlnaHdIZmIvRmhCaTNuS09rTHhBQ3VtbkJWVUh6bUlPYjlmUXdOT1R5c2VvTFdFb2FSMkNqaGFWTjY4aVhUekNTd0NqaGxxdzdEOEVQRmVHZTl1OUtFKzlKaXlzbW1ndVhtRU5ZeFo4emVrdzlicHI4dUpya3VJTGplOVVjZjJlQW5URUZHaHY4cVJOcHlqdkcxRTl3cWlXMkJtWEIvQ2Zvd1ZUcStFVXJFSUgzWVNMaHByZzd1RlBKcDllTlZrVWQ3YlJ1RzVWc3laVEdVcW1GTy9XUCtGQjR0TjBvU0xNTGlaY1psQ2VDaVE5R3YzRWRPdjFjWGRzc1dOeDJuQmQvN1l5QXl6NXlBU09oQVVPblRSQTQrVENaY0o1MWhSbEJQc0d4NmljOGN1SDE0SzRXT1VSdTBuRnBxblU5c01LN1NBdWprNUdjZVArdkhCcHg2c2lqa2JUS3lQcTh1UGRaL2YwNExwRjFPZkRkRm5JL29PMS92dyttb3ZhcnBSY05HMWFLeHFkRDVjUHJJYzhMdkNHVWxaZnVUZVdJZjJ0WVZvWDEyTTdPL2ZDa3VlVnE0TlJ6N0RiNXlSOXltSWhKbVc1cVFQT3hwbFhFd3dlbjBTc2tDTU9TUXBsZzZ6WTlZVmtXYjM3bk9oK21WZFJzTHlaeVpaL2lpalF3ajNNbG8wcnJ6SWptTTBxd2d2TE5ONnpmb3RMaWcyVlZPKzdjUU1sWVhKNkVGZUREbmZGclE2VXJWZjJXQWJwb3p4NEtFWG9obUlLcHJ1VnNLTTY1MFlGc1pCaHFPdUZZdERMM2lxeXM2blJlUlpWNmgwTEVmSVhMSldMWHBiOEVDVkUwTVVhb2RMcUg1T0d6N3phbFU0dGNleHJXMm9kcHZVQjJRMWM0V1QyaTNhVlZ6aVJNRE1nWERmdkNPQ3V6cG14YVFzVk9lUnhZM2FrL0lVQzY5WGtTWFV2YlRtb3d5V21paEdEN2xrS0ZBY0dyQkQ0ZXZmTjdla1dyT1cxdStJOFlmZjRHd0xobEkvcXRVeHVmS1JEdnhxaWgwa0UrZ2NNWEdpcytvN1BpejdieGNXNzQxV0lRVVRXRER2dGl4TUdxaWxUWVNWRFFUR2ozTGd0cDFrM0xCY2E5d1FMcXdUZlR5Y1I0YzNFaDZZbG9WclM2TzE2Y0w0WXZ4WUI5Wi8wSTQ1YTgzVjNSMW0zOG5BQ0Fmb1pFYnhKcGNiUG82S0tsSGJaVjk2QkxiQjFObXJwa2VGRzNsODltWG5wbzkwdUNkR0RZbnFkVVpGcFkxZmswdjdFaFNOY21KQm8xSG5rVEZ2WWFzeDNUb2VIMldSME5PRzVYZXFaZ3Y2WE9oRjdxdjJveGRhQ0ppSzAxdVlsQkhUTjNONXhYWThlbzBQMDk2TXZ5M2JCQU5SU2NGcWZwS3FzcHRyZmRoUDg1NFNwU0o5ckJnRFQwVE5RVE1nNGpVUlYyakZaQXBmcGZpUVZGcXMzTk8vOTdnWHEwT0VtOVZIMTB5cTFISGNSakg5U0pxZXRPYnorRlYrM1BwMi9KaEhVdE9kejRkL2RHU3pmdEtMZXhiN1VhS01reDQ1U3JJdEhlUEVVeXJoUTVPLzhrQVdUOU52emNIZ3Y3ZGlYbFI1VWx3THpTWG5PL0g2M1JiY3RVZ25YSFN5anlza212OUxtRWVMOHBOVTZ0Ym91QkpHVDh6R2t0eDJ6Q1ExYkZjNzg3Y3lSWlRJTFlwc0dGMkFvNklDVW5ab05TczZXT016ZDFtNzVqbVJoN2ZuNXNCT0pvMlo0bFp0OStIaFVWYVY5QnpzUE8rTThXRjFqUWZMMXRPVVdzMEpFNmpZbk84Wk1IMVM1Mnc3NkVjaFNTcDlkYk1BRWlUamN2djNlZEZrczJCWXNWWUM2anZjamtwaS9Hdml5aVd4U0owdjI0ZU45VEpLRk1uWGFzSFlma0JOU0owemxkWlF0QytTRlJPSFNsZ1ZVcXVVbjZ1VnZnL1JRS0tveGd4cjFDcGpKNmtEZXBDcXAyeWdGcStHSXo0Y0pUN2hvWis5aG9ram5xTGViVFJOTENPMW5Ob1ZsZHN3aGhpL1dqK3ZEbGZmNTFQNXBDV01PRkxUSFl3OEdkN1ZrNnJGZEVaQk00aEhEWmorZmxvay9vWndyZERWZC94MVdaaTZTOHlPSWtWVlhaOFZaVjNrYmZGaDJ3RVpoYVJhS2xJSkJ1Z1RMVnlrcW84ckZGWk9ka1l4L1hZeVJLaW5kdTFGUWtOUDFUdFVNdGFKbVd0YnNhU0xMYlcwL1ZXaFBKWC9yZ09tdVV2NW8wM0RVaEhRUUl1Yi9SUWRhQ29LU0hhZXRERDcyN1ZXekw5RXkyMXRlVlpNbWlndW9LWFJoM1ViUEhoK2JVVDNIVGNaWkRWMHVXNFI3eGhObDZmUmREbm8zSGpndG14Y2F6QzlOaTlEdXdCZFROUDQ1Nlk1SW1vSWV0bUhFbWRaRTFNZmExNkNlVWp5eXY1NGp4L1hGaXU0UzdpUW1EbUl3UUVTTGoxSHk1d0ZQVU9IVTl3ZFFkeEdhMmFXTWpadWl6RzlwNm5MbkJlQ1V1QWpEK1ppZkppUnlmaWZsOXJ4cW9vSkd0ZmRqNWNXdDJGSmFHQXFKbDNMaTFYMnlPQkUwdlJGaEhsTkhKZ0xsWTJvUlpoUnVHV1l6Q1dOU2RINVZsMUYrMC9VZmo2aTlma0lyZmxuMi9IaXJRN1ZZR1BCakNsV1ZDdXpRaG80YmgydXhmc1E3VmU1bGZhckJKMExkNUlwNmZUU3lHRFh0OEtCcW5mYnNFTGdscEkrcnE2UUZmZW8xamhFU04yNmRzd0tTL1UwR3lEamk0ajZUTUlVc3RSYmt1Z01URjMwS2R4ckVUeUZoQWxIOVRhYUozWDBOdzlMUWNnSll2eVo1dGFRWHZDeE5WNll6WGZ5Q3NRQWtJV2xOSnQ1eE1EMHM2UDZqaW0zUmhpeWlFaUxlQStFbWI3d2tQR25sOXV3TFNiakVYR0RiamZScTdZNnFxLzFndFRiR25jSzJXblN4WHBJWnRrMU8zd2F6QWNLeGk4Y0thbkx3d3J0b0ZmQW01aDllZUNSRm1UN1I1aVFXSHovT0piSUhNNUdDaTJzaHoyUUY4ZUVlTnZLOWpEVEZ5bnJhWVBldGtReEo0NGZadnFVVjh0aG5UUlBnOGpUczNPd2ZIWTJYb3U2Y3ZER2JDZG9yMkhJV1RCeGlBb0w4djMwRFMydHd1cHN6a3FGaVFlVDlhV0Y4OUpRRHVVVk50V2dRSjdVUis4Sk0vMWdwTVd2dFdHVHByNFdWTks2aTNDcDZPUEJVb08vcGJSWVhhVDJhUFNvbUw0SWtQSElteDVOWHlvNlQ2c0tWQ2RQMVgzWE0vNVUxU1NCZkU5RzFwZ1RTTjE5U1ZhdGNXSHE0NjFZc2NtSEZqTXlTSVUxbmpaN3ZYR0xvbXcxaXhqeDE2dGg2c2ptMzJqSzNuWUtLc25vWGFReXRoN3VtZ0UzcVdVZjlXS1hhb1RLNm04Tk1LTnlVdk1ZOEgyQUdPTGtBWVF0L1E4S1MreEErMEd5NW9oQWZzcDNLaEpPSWEyTWJRbGlubVBYTXVxc2ZBbUtVVldBQUxMR0dWUWdvU2Z0MmhVN2Q3VVg3VHNnUVdTQU1saVJoY3VnOENCQXFXbTk0SFVESzZOYVVsdldxZnNZR1JPTUNLVWJQVVRMc3VvMkdpM2VrdFhVNStvTWdNS3pndWxTMGNmVkRUR1dtTGpHMFJoV1JhcTFtMmxBQ0YvbmFqRUZXWTExdUJ5Z3lUQTVEK3JCUERrNXhzckZSbWFibnRBY1ZCL1hmVmp2azlMbkh0bTZCa2hwYVVuT25LYmNDOTlzcHd1b0pJbm9zdUUyakQyWHJDbDAvUzV2TUczZ29zVzhtWEZNSmZXTG8yMEdtM0tTVVF0OU9jbklNOTQ4RWk5YnhycDlNaW9VRlFJeGRETE1RRy9WOFFVTlgzbHdzSzhkd3dJamdZU1JaRGFMT3EyTy9NdmRXb1lVTDkyZGpVY3E4TVNjamtQWWlIbWZUVG1wVitwMFVhTEtDUTlXdE5BckJKWHdRRWw5K0p1bzJNS0QvQ25Sa1BDQVNZeFJEQjdrcDIrL1pwTSt1cWRCSzF6a2hWUzYrdlNwNnVQaGF0RWF3K3pyd2srbU41b0ppbW1zNUFYRWFyUGtsYVRrNUR6TGxQSEx6ZXVWV0YzeTN6c3ZneG0vQ3FFMXBFc1dsM0JUNll5ZXV5cTFVbWpKQ0h0Y2kza3VzaThYT212RnRXbG4zSXIzR2Z2LzRTNGZab1VQNXlMR1B0b0crdVJ6Mk8zNHB3ZWZYRVEyMitjSE1Td2FiTU5NV3RDT09CbWZiZE15cEVoWWV0N1ZIdkVIMUJKcTAxQU5rMnJ3NGE4clhlZ1Q0aVJ1V3BDZU1zbUJJcDBBWWxTN2xzUG05djM2K09IQlF4ZXdaNzh4bnNva1F4Y2RhZG5IQ2F2d0dLY25PRVhQWGM3NHBieHl5QzJmRzFabmQ4TStEUEswSWNjZUc0Wkx5MkwzcktOTk1uYVRUdExJQ1hOT1pUdThVWGphK2RHR25QblgyRkJBek5oRHJXWnZweE1CU2JlcFY4VlVreHFvK21zL3FtbUJMUHl5MGdKcVBJdDVUdDI1UGZFcmlkSU9yWlFRVkUrTS85alZaTmtVeW4zMFpVNDY2RTRweW85UGFGUFhhanFyOTZIemc4alpDbTJvNmhrWlNOSGl4YnRkYkwyaFVKZncvN0dnbEI3dVN3NGJianpiaFFWN2xSeEpyVktqbGhBa0RKOUFqTi9vRlNhMVVWamFwK1I1QVhXWk4yb2ptSkt6K2wrdElWTDduMXRDK0JwdVFGVEhpdHgzZVIrbk5SMWhFZGVoOVNDZHFIczhRbUtYM0hVOTQrLzVMY2lIbG1vcVJ5Y3M0K1cyYzdHbzlXemN2ZnN0L0dqWWpacHdvNGZmZkQvY0ZZMkNBMzdQdnVjeVpmejlTUzlwRVJzSU1zVGxrd2hWR1pZMmlXaWF1dmN4WVB5QjZ1d1ZBNElqc3FHSVBNMGtKblgxOWRMUWdFRWtyZElPU25ZaEJHaGozSGF5VGFnVW04d0ZMR0dtVDVZdlIyaTNyb2hHaThBUm0zOWlkTVN4Z2dlczBZN2V2UWxZV29rOHU5T3A2eHlpNDNMYXlidEF2K2t2SGhwcFQ1dDZpSURKNWk2eDYxaTdZNWwyNDVxWUVnVjA5d1o5Vks5cmJ5Y2hVTGhVOTNGWHV5Z253bGNPN1hEako0cEZVb0NDOVBoUnowTzdoQ0twOEViSUVrbEtJZGZpdDJGTzgxajh1WFVZN1dlVXNIVEgzOUhpN3J4WTVDVjc0OVgwRXBxNXNhV3F0OVlzVWhyNU54L3lhdzVYZzlXR2V5dE5tbzkySmZiVDBXNG1NYW1qcmQycG5SMzFIZTVRV1dTRVl0Sm1KTzFMcWM3aGRMK1g4ZEhlRUVhaSs2aTZWOTFPNWNHSGoyZ3RRTzJDQjZ3QmUzVDRxdU9ZM1hmL3JFdEdOUmtScUYzV1FDZWVuV2oyL2tqb1lSWWtkcFFMSlgvWVdYRFRwT2pJVlpOcFIyODREdDNRaHJlVkljbmx3NjFhV29vcTdMUlpUdWZJNVBNR1pTMG1GTFNKOXNBSWwrbyt2cFptMjJwWFZPSEVuZnFYVVVTZ05hS242YlRUZWVXUlFVS2RMdFgzSnB3amRjVks5cDd3OXI0eVVNQWVidy9jM25BNVBuSkhES0NhUFNmeDlLWlhPazFBOWVkZUhLWmpDOHpjT0ZvSXpTaEhPeUxYSE5GU1hGYVpqVmZJSm43cUFMSzBJTTZlVHdldlRiM0VnZVUvY21pbTFIUkdCbmJFWWJOZFR4K1QySzhwd29LSDdzdkNUTXBmdUZLeXdYK3RvMTI5bXJTbjU4TS9OL3NpVW11NEM4bFl1em55d3IrL1JjdWNna2pReWFJR0Zpd2RveVRqYzQwMUR1blBKOWdDQit5VjVuYWNNcG1oTmFRK3BHT2hOSzdza2l3c3Y0MzZYajg2TUMvVTl5YVBzZU9WbjJXalRDZGxSQjVsdktxVHprdEdaZUhacTZoT2dkd2x6S1FQN2N6VzJlbHZvbzhLTllkS3I5L2lnWFo5M0lwZlBKaUZtME45dEppK2pyWGt4ODZ3T2k2UWpCYXJsdFVHTTBoMUg2L2ZxS2RQd3ZRN2N6QnZwQ1ZzRFZWSjM5TjRqV2dlUmp1c0oxMUhadGNqdTU3NWQ3bXFSOER2S2J3Skt3OXN3SUtXRVhDcDU4dkJ0cUZ6VU41Rkx1bjU3eHR4VzhqbjFQNzIwS0xSb3ZkMFBWV1ZoWk5xUFpLMjJXZWErOU9yTGx4Q2g2OHBPbVpCZnhFeDQ0ZkUxVUZsOXEvellFMEg0WkVnT29SdGd4Ky9HS1dTQjBneW1YRjdEbVpFSXAzUmQ4MmtSdHZuczRQTTlDTk82TzVWQTJzdGZZVkt2UllnSW5ycDZPelZrUlJ4MyttdFVJUUV1VlFjMXVQMjRxN0hYWEhweCtNdXpEU2lqQWYvNWtiMTdhcDFJNG9yUG9UejBKMHg1aVMwUVl1T1V3cTdMV0lRdVRnSEZhbzFnREk2ZW1RcFhVSU5GTVdReUE1K2dlWk1meitlZWQrclBmS0JUbWViUlgzMGRocHZsZGxWdUVDNldmTy82aU1iVXQzSC9makR1MTc4aGRhQ0lrN0NwS3RwMDliVlFWV1hPa1RFdWVnODZreGtsdHFWVHZXR2QxMnhPZjJyOERmckRZWk1YNkhpNVIxdjRKa3Zsc0l2UnlRcEpheWoveTM3ZkpqN2FqdnA4c3hqWFVmV0dBN2RRcVo1N0RRS0lhbC8ybUlYNkpETXVOMnhXanFvS3J4ck1IYXlWVyszNHgwNm5xQXJYVVFpakYycW5zMmNTbHFqM0U4OXZSOGJqMmp4T1VTTHZwcEZkdUxXNjNXek03TmpHbUxWNTgzUFREcnlLZlNCcE5UN0lHMUVvcTJ2R2syTlVjWnFQOXJ3OGNRejdWaWxrY0ZvRVBsTE8zWnJUSU9DaWZRTVVkaHVQcmJZcmNXV29tNnBjZUdKZGRFQUdERjlzV3Qydm02bWxlbytYcnZSRmRoa3FZWkN1WStxSXcxc2MxOHphV01sVVFyK3U0WHgyMGcvL2ZDb08ySldaOG1PMXpIcnZWOWkwN0dkTWVQdWJUNklSMnFleGYwcm44ZUpWbk1nYzJsNTRaWkxULzExajBsQVYwV2dqVVF6ZjkrSzU5WjZERDkrb1pEUlFIclJaYSsxWWhwMUttV2FMTUphMVlkRzBuTjcxTzVsR1F0ZW9QdzNxRlFhU3FiMHY1cysrRUtmVm8wNDlUMzVCaGZQSXNGTkJpOTRSRmNTaktmaEM1R2tobmV0bXZLMFg2eEtkZGtLUWYrbldUdVM4WWxPQnk3aXZVVlNmOFRSSGdDVFl4bzZxbzlJMzB5SEw0bWQydXJjQXZtcVpoeGRWVyt4QS9oNjJqaTRiQk45ektlRFJtdWcyYzM3dEdQN2hpZmJVVzIwWEVlNi9udWVwSHhJWDIrNEE1M1c1M1p2Y3RHTVJqOW9SQkN0WHRXT0g3emlRcDJKSGIvNE9KSG8vNUdqRWlKcHhUNkJ6dlR4Mk84UUlEWlozdkFpelc1MFFrS1lDbkZNOWpxS3M5Q3QyUk1SRGsveGpaRnlTUXhLaFpNZWFUa2d5bjd2WDFPblRIenNzNzhFMURyeDFQR0NYcVdZTUdBVWh2Y3VRKytzQXRyNTdzR0Jsc1BZVDlmMmIycnhjZjBHYXM2Z0pHWnRLMFAyNGRtdytIcEZaVDFyb2gwM2t4NDhWZTQ3anhyMTlGU1ZGdFRyRCsxTGg0RFI1aGpRaGpRbjJlTFgxZnM3ZDFpYitOQUpiYTZwcDhYMnlVTXRhRHd1bzZDUGhEbzZFYlhXYmtNMXFadkNObFdrY3JpZlZBNWJVbGRGemxrZ1FHMHlXWndKUkFPM1lQUjdxSTI3KzBNMHhmMHNHRTRib3hyYnFIOVEzMnRzb3JVa01xMVVDeHF4RzAvQ21GSUxtU25MYUtUK2x1WHg0L09EcDVhSG9HTVU5Yzhqb3AvMm9EMXpaQWhSRytzMTdNSStMdGJleHRIaGN5NWhXVVE0dFIvMzB6bEoybGxqYkp3U2kvSCt2RHphT0FVeC85VElEbEV6ajhTeVR5elZ6MGIrRUxzYnZzTG00N3RpWnJEOVJDM0VGWS96WmUvR3laSi9EekIvVy92UWNKSVJaSjc0dmJINnlYVTRPQ052bWtsaXJ5RUpLbm1PanJ5OUo0ZE9QNlREcytqclhrc1U2VGF3MlZyQ0hQWCtBQ3JVMitCbnBwODg4TTF6b29GNGxkSVc1ckc2TkNSd0NxZkpKdno0Q2FIK1M2ZVZkc1lKT3NJZnZvbUxucTd0NCtJZFRiZTI2MWJHYjdmYThmaUV1ZmlYRDMrRjJzYXZPOVAyVVdsbFd4TmFCL3dPem05dWdyUGh1eGhFRXNHdnY1ZlY4VWFLcUZ6T1BJODdiMUcrclVxbkl0NmVpMGwwRE1GSHUybWRoU3dRdmozYWppTGRaT21MVHpXQ3hKa0hHTmM0NHhEZ1BtNndpTjdWclNqVU5vc20vZ3IzcmY0dHRwSEtKcWxPa3VIcTh4cEtDaHZ3Mk9RN2tKZGxwTmxLYW9rWm4xbXYwQ2Z3bElxVURMWmorbURsU2ZkUEMxTlBSbjBrUXhlSEh4bUJORU9BK3pqUUxZdTcrbjVRNE16SDRrbS94VTFsWk8rVVpEZWhlRFFXWFRzZFJYUzRGTHZZQ0N4NGprNzlySTF0U1hXSUZoM3Zvb1VwalRWTDdPdzVCaVBRN1Fod0gwOERpVi9wQlE1Uyt3aExuOHNHWEl5bnZuaUpkUDk3bGFDRS9uczZlK0FPT3ZwaFd0bDNJV1hRMFF3SlZUYXBpZWpVVHpyUC9DVTZaMzdHZUJ0R2xsZ2dKQ1JoS2lkMlF4ODlRSi9lSTR1aWFscUFZOGNJWkNZQzNNZTdWY2R2MUduR0ZZM0EwdjUvd01xdlB5SEpjeVUySE4xcUZNM1VyMzlPWDl4eTNsUlVsVTVCbG8xc045a2xoRUF6bmJxNDhPM09MYm9sVkRBbllnUzZDSUV6dVkrbkhlTVhiVzZSTExqeTdBbUJxLzdrVWF3OTlEbTJrT1hQemhOMU9PRnFRcE03dUkya3Q3TUF2Yko2b0RDN0QwWVZEc2Q0R2pTRzlDanBvbTdEeFRBQ2pBQWprSmtJcENYalYwTlpuTnVQcFBjckFwZmFuKzhaQVVhQUVXQUVFa09BVnp3VHc0MVRNUUtNQUNPUXNRZ3c0OC9ZcG1QQ0dRRkdnQkZJREFGbS9Jbmh4cWtZQVVhQUVjaFlCSmp4WjJ6VE1lR01BQ1BBQ0NTR0FEUCt4SERqVkl3QUk4QUlaQ3dDelBnenR1bVljRWFBRVdBRUVrT0FHWDlpdUhFcVJvQVJZQVF5RmdGbS9CbmJkRXc0SThBSU1BS0pJY0NNUHpIY09CVWp3QWd3QWhtTEFEUCtqRzA2SnB3UllBUVlnY1FRWU1hZkdHNmNpaEZnQkJpQmpFV0FHWC9HTmgwVHpnZ3dBb3hBWWdndzQwOE1OMDdGQ0RBQ2pFREdJc0NNUDJPYmpnbG5CQmdCUmlBeEJKanhKNFlicDJJRUdBRkdJR01SWU1hZnNVM0hoRE1DakFBamtCZ0N6UGdUdzQxVE1RS01BQ09Rc1FpWU1YN1o3L1VjRTdVNjJ1VFAyTXAxTmVHTVZWY2p6dVV4QW95QUdRSWhIaTRiaFJzeGZoSFI1Mms3dGtFa2VPSXROek4vSStSMGZvTHBDNnpZTVFLTUFDT1FEZ2lFZUxpUGFJbGkvcElCZ1dJd0tCZ3didGJGNTEzemgrVVdpejNmSUE1N01RS01BQ1BBQ0tRcEFyTFAwN1R6SHorOThXRE44K3VKeEVhNk5Lb2Jxd25kMXVZREc5eHRKNzc2dU1kWkYvV1hyTmtGRnFzdDJ5UXVlek1DakFBandBaWtBUUkraitzYmQvT0JUM2Y5NDZkekQyMThaU2VSMUV4WGxDckNTT0lYNUR2b0VwSitIN29LNk1xaVM4d0V6T0pURUR0R2dCRmdCQmlCYmtSQXFIU0VaTjlPbDVEeWo5Tmx5UGh0RkdEa3ZPUjVNaFRnb24vQitNWHNnQmwvQ0JUK1l3UVlBVVlnelJBSXJNOFNUWUx4dDlBbGVMamc1Vkd1STBZdXd1eWhTd3dRTFBGSHdjY2VqQUFqd0Fpa0RRS0t4QytZdlNkMFJTM3NDbW83WXZ3aVhEZ1JSN2tDSHZ6RENEQUNqQUFqa0pZSUNFYXZYR2xKSUJQRkNEQUNqQUFqd0Fnd0Fvd0FJOEFJTUFLcFJ1RC9BZWJteGp0VHVzME9BQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgc3R5bGU9e2J1dHRvblN0eWxlfSBzcmM9eyBnb29nbGUgfSBhbHQ9XCJMb2cgaW4gd2l0aCBHb29nbGVcIiBvbkNsaWNrPXsgdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpIH0vPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Hb29nbGVsb2dpbi5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRFeHBsb3JlTW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9UWVBFID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfTkFUVVJFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VYUExPUkVfTU9NRU5UUyA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZUV4cGxvcmVNb21lbnRzKG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRFeHBsb3JlTW9tZW50cyh0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVBhcmFtcyA9ICc/bG9hZD0nICsgbG9hZCArICcmbmF0dXJlPScgKyBuYXR1cmUgKyAnJnR5cGU9JyArIHR5cGU7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRFeHBsb3JlTW9tZW50c0FwaSArIGFwaVBhcmFtcylcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUV4cGxvcmVNb21lbnRzKGpzb24sIHR5cGUsIG5hdHVyZSwgbG9hZCkpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFeHBsb3JlVHlwZSh0eXBlLCBuYXR1cmUsIG5ld1R5cGUpIHtcblx0aWYgKG5ld1R5cGUgPT09IC0xKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX1RZUEUsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hdHVyZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9UWVBFLFxuXHRcdFx0ZGF0YTogbmV3VHlwZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKG5ld1R5cGUsIG5hdHVyZSwgMCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEV4cGxvcmVOYXR1cmUobmF0dXJlLCB0eXBlLCBuZXdOYXR1cmUpIHtcblx0aWYgKG5ld05hdHVyZSA9PT0gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTkFUVVJFLFxuXHRcdFx0ZGF0YTogbnVsbFxuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX05BVFVSRSxcblx0XHRcdGRhdGE6IG5ld05hdHVyZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKHR5cGUsIG5ld05hdHVyZSwgMCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9leHBsb3JlLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCByZWFkSG9tZU1vbWVudHNBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfSE9NRV9NT01FTlRTID0gXCJob21lL0NIQU5HRV9IT01FX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlSG9tZU1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9IT01FX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkSG9tZU1vbWVudHMobG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRIb21lTW9tZW50c0FwaSArICc/bG9hZD0nICsgbG9hZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUhvbWVNb21lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkTW9tZW50UGFnZUFwaSwgZGVsZXRlTW9tZW50UGFnZUFwaSwgdXBkYXRlTW9tZW50TGlrZUFwaSwgXG5cdHJlYWRNb21lbnRDb21tZW50c0FwaSwgY3JlYXRlTW9tZW50Q29tbWVudEFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9NT01FTlRfUEFHRSA9IFwibW9tZW50L0JVSUxEX01PTUVOVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19NT01FTlRfREVMRVRFID0gXCJtb21lbnQvU0hPV19NT01FTlRfREVMRVRFXCI7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVVNFUl9QQUdFID0gXCJtb21lbnQvUkVESVJFQ1RfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9MSUtFID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9MSUtFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9DT01NRU5UUyA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfQ09NTUVOVFNcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTU1FTlRfRU1QVFkgPSBcIm1vbWVudC9TSE9XX0NPTU1FTlRfRU1QVFlcIjtcbmV4cG9ydCBjb25zdCBBRERfTU9NRU5UX0NPTU1FTlQgPSBcIm1vbWVudC9BRERfTU9NRU5UX0NPTU1FTlRcIjtcblxuZnVuY3Rpb24gYnVpbGRNb21lbnRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9NT01FTlRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTW9tZW50UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRNb21lbnRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZE1vbWVudFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9tZW50RGVsZXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfTU9NRU5UX0RFTEVURVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyY3RVc2VyUGFnZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9VU0VSX1BBR0Vcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9tZW50UGFnZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlTW9tZW50UGFnZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmN0VXNlclBhZ2UoKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbWVudExpa2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVNb21lbnRMaWtlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRMaWtlKGFjdGlvbiwgdXNlcklkKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRDb21tZW50cyhtb21lbnRJZCwgY29tbWVudExvYWQsIGNvbW1lbnRBZGRlZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9pZD0nICsgbW9tZW50SWQgKyAnJmxvYWQ9JyArIGNvbW1lbnRMb2FkICsgJyZhZGQ9JyArIGNvbW1lbnRBZGRlZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudENvbW1lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlTW9tZW50Q29tbWVudHMoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tbWVudEVtcHR5KCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQ09NTUVOVF9FTVBUWVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkge1xuXHRjb25zdCBkYXRhID0gW1xuXHRcdGNvbnRlbnQsXG5cdFx0ZG9tYWluVXJsICsgJy9pbWcvdXNlci8nICsgdXNlcklkICsgJy5qcGcnLFxuXHRcdCcvdXNlci8nICsgdXNlcklkLFxuXHRcdG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdF07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX01PTUVOVF9DT01NRU5ULFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbWVudENvbW1lbnQodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBjb250ZW50KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlTW9tZW50Q29tbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdjb250ZW50JzogY29udGVudFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRQZXRQYWdlQXBpLCB1cGRhdGVQZXRXYXRjaEFwaSwgY3JlYXRlUGV0TW9tZW50QXBpLFxuXHRyZWFkUGV0TW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9QRVRfUEFHRSA9IFwicGV0L0JVSUxEX1BFVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ0NPVU5UX1JFUVVJUkVEID0gXCJwZXQvU0hPV19BQ0NPVU5UX1JFUVVJUkVEXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9XQVRDSCA9IFwicGV0L0NIQU5HRV9QRVRfV0FUQ0hcIjtcbmV4cG9ydCBjb25zdCBBRERfUEVUX01PTUVOVCA9IFwicGV0L0FERF9QRVRfTU9NRU5UXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9NT01FTlRTID0gXCJwZXQvQ0hBTkdFX1BFVF9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUGV0UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfUEVUX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFBldFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUGV0UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRQZXRQYWdlKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjY291bnRSZXF1aXJlZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTSE9XX0FDQ09VTlRfUkVRVUlSRURcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUEVUX1dBVENILFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGV0V2F0Y2godXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVQZXRXYXRjaEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWQsXG5cdFx0XHRcdCdhY3Rpb24nOiBhY3Rpb25cblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkUGV0TW9tZW50KGluZm8sIHBldElkLCBtZXNzYWdlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX1BFVF9NT01FTlQsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgcGV0SWQsIG1lc3NhZ2Vcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQZXRNb21lbnQodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBpbWFnZSwgbWVzc2FnZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0bGV0IHR5cGUgPSBpbWFnZS50eXBlO1xuXHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiL1wiKVsxXTtcblx0XHR0eXBlID0gXCIuXCIgKyB0eXBlO1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSwgdHlwZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJwZXRcIiwgcGV0SWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInVzZXJcIiwgdXNlcklkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVQZXRNb21lbnRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHRcdGJvZHk6IGZpbGVEYXRhXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkUGV0TW9tZW50KHJlc3VsdCwgcGV0SWQsIG1lc3NhZ2UpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBldE1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQZXRNb21lbnRzKHBldElkLCBsb2FkLCBhZGQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IHBhcmFtcyA9ICc/YWRkPScgKyBhZGQgKyAnJmxvYWQ9JyArIGxvYWQgKyAnJnBldD0nICsgcGV0SWQ7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRNb21lbnRzQXBpICsgcGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0TW9tZW50cyhqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9wZXQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkUmVxdWVzdFBhZ2VBcGksIGRlbGV0ZVJlcXVlc3RVc2VyQXBpLCBjcmVhdGVSZXF1ZXN0VXNlckFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9SRVFVRVNUX1BBR0UgPSBcInJlcXVlc3QvQlVJTERfUkVRVUVTVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1JFUVVFU1RfVVNFUiA9IFwicmVxdWVzdC9DSEFOR0VfUkVRVUVTVF9VU0VSXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWVzdFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1JFUVVFU1RfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVxdWVzdFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUmVxdWVzdFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkUmVxdWVzdFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1JFUVVFU1RfVVNFUixcblx0XHRkYXRhOiBpbmRleFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVxdWVzdFVzZXIocGV0SWQsIGluZGV4LCB1c2VySWQsIHVzZXJUb2tlbiwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlVcmwgPSBhY3Rpb24gPT09IDAgPyBkZWxldGVSZXF1ZXN0VXNlckFwaSA6IGNyZWF0ZVJlcXVlc3RVc2VyQXBpO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRTZXR0aW5nUGFnZUFwaSwgdXBkYXRlU2V0dGluZ0Fib3V0QXBpLCB1cGRhdGVTZXR0aW5nTmFtZUFwaSxcblx0Y3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfU0VUVElOR19QQUdFID0gJ3NldHRpbmcvQlVJTERfU0VUVElOR19QQUdFJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfU0VUVElOR19BQk9VVCA9ICdzZXR0aW5nL0NIQU5HRV9TRVRUSU5HX0FCT1VUJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9OQU1FID0gJ2FjY291bnQvQ0hBTkdFX0FDQ09VTlRfTkFNRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFVFRJTkdfTkFNRSA9ICdzZXR0aW5nL0NIQU5HRV9TRVRUSU5HX05BTUUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9TRVRUSU5HX1BST0ZJTEUgPSAnc2V0dGluZy9DSEFOR0VfU0VUVElOR19QUk9GSUxFJztcblxuZnVuY3Rpb24gYnVpbGRTZXR0aW5nUGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfU0VUVElOR19QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRTZXR0aW5nUGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRTZXR0aW5nUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRTZXR0aW5nUGFnZShqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ0Fib3V0KGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfU0VUVElOR19BQk9VVCxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZXR0aW5nQWJvdXQoaWQsIHRva2VuLCBhYm91dCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVNldHRpbmdBYm91dEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IGlkLFxuXHRcdFx0XHQndG9rZW4nOiB0b2tlbixcblx0XHRcdFx0J2Fib3V0JzogYWJvdXRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ0Fib3V0KGFib3V0KSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFjY291bnROYW1lKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9OQU1FLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ05hbWUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfTkFNRVxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZXR0aW5nUHJvZmlsZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfU0VUVElOR19QUk9GSUxFXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZXR0aW5nTmFtZShpZCwgdG9rZW4sIG5hbWUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVTZXR0aW5nTmFtZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IGlkLFxuXHRcdFx0XHQndG9rZW4nOiB0b2tlbixcblx0XHRcdFx0J25hbWUnOiBuYW1lXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBuYW1lKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlQWNjb3VudE5hbWUobmFtZSkpO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VTZXR0aW5nTmFtZSgpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdQcm9maWxlKGlkLCB0b2tlbiwgZmlsZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUsIGlkICsgJy5qcGcnKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIGlkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB0b2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVNldHRpbmdQcm9maWxlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmaWxlRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VTZXR0aW5nUHJvZmlsZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvc2V0dGluZy5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRVc2VyUGFnZUFwaSwgcmVhZFVzZXJNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1VTRVJfUEFHRSA9IFwidXNlci9CVUlMRF9VU0VSX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfVVNFUl9NT01FTlRTID0gXCJ1c2VyL0NIQU5HRV9VU0VSX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRVc2VyUGFnZShpbmZvLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9VU0VSX1BBR0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFVzZXJQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFVzZXJQYWdlKGpzb24sIHBhcnNlSW50KGlkKSkpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVzZXJNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfVVNFUl9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJNb21lbnRzKGJlbG9uZywgbG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRVc2VyTW9tZW50c0FwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQnYmVsb25nJzogYmVsb25nLFxuXHRcdFx0XHQnbG9hZCc6IGxvYWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVVzZXJNb21lbnRzKGpzb24pKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFdhdGNoUGFnZUFwaSwgZGVsZXRlV2F0Y2hQZXRBcGksIGNyZWF0ZVdhdGNoUGV0QXBpLFxuXHRyZWFkV2F0Y2hNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1dBVENIX1BBR0UgPSBcIndhdGNoL0JVSUxEX1dBVENIX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfV0FUQ0hfUEVUID0gXCJ3YXRjaC9DSEFOR0VfV0FUQ0hfUEVUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1dBVENIX01PTUVOVFMgPSBcIndhdGNoL0NIQU5HRV9XQVRDSF9NT01FTlRTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVFNfTE9BRCA9IFwid2F0Y2gvQ0hBTkdFX1BFVFNfTE9BRFwiO1xuXG5mdW5jdGlvbiBidWlsZFdhdGNoUGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfV0FUQ0hfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkV2F0Y2hQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFdhdGNoUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRXYXRjaFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoUGV0KGFjdGlvbiwgcGV0SWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfV0FUQ0hfUEVULFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgcGV0SWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaFBldCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpVXJsID0gYWN0aW9uID09PSAwID8gZGVsZXRlV2F0Y2hQZXRBcGkgOiBjcmVhdGVXYXRjaFBldEFwaTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoTW9tZW50cyhtb21lbnRzLCBsb2FkLCBsb2FkTGlzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9XQVRDSF9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHMsIGxvYWQsIGxvYWRMaXN0XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFdhdGNoTW9tZW50cyhsaXN0cywgbG9hZCwgbG9hZExpc3QsIHVzZXJJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRXYXRjaE1vbWVudHNBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J2xpc3QnOiBsaXN0cyxcblx0XHRcdFx0J2xvYWQnOiBsb2FkLFxuXHRcdFx0XHQncm91dGUnOiBsb2FkTGlzdCxcblx0XHRcdFx0J3VzZXInOiB1c2VySWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVdhdGNoTW9tZW50cyhqc29uLCBsb2FkLCBsb2FkTGlzdCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGV0c0xvYWQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVFNfTE9BRFxuXHR9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3dhdGNoLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Y29tbWVudC5jb21tZW50X2NvbnRlbnQsXG5cdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCArIFwiLmpwZ1wiLFxuXHRcdFx0XCIvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCxcblx0XHRcdG5ldyBEYXRlKGNvbW1lbnQuY29tbWVudF90aW1lKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9yZWR1Y2Vycy9hY2NvdW50JztcbmltcG9ydCBob21lIGZyb20gJy4vcmVkdWNlcnMvaG9tZSc7XG5pbXBvcnQgcGV0IGZyb20gJy4vcmVkdWNlcnMvcGV0JztcbmltcG9ydCB1c2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJy4vcmVkdWNlcnMvbW9tZW50JztcbmltcG9ydCBleHBsb3JlIGZyb20gJy4vcmVkdWNlcnMvZXhwbG9yZSc7XG5pbXBvcnQgd2F0Y2ggZnJvbSAnLi9yZWR1Y2Vycy93YXRjaCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlZHVjZXJzL3JlcXVlc3QnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9yZWR1Y2Vycy9zZXR0aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcblx0YWNjb3VudCxcblx0aG9tZSxcblx0bW9tZW50LFxuXHRwZXQsXG5cdHVzZXIsXG5cdGV4cGxvcmUsXG5cdHdhdGNoLFxuXHRyZXF1ZXN0LFxuXHRzZXR0aW5nXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJpbXBvcnQgeyBDSEFOR0VfQUNDT1VOVF9EQVRBLCBDTEVBUl9BQ0NPVU5UX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgQ0hBTkdFX0FDQ09VTlRfTkFNRSB9IGZyb20gJy4uL2FjdGlvbnMvc2V0dGluZyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0aWQ6IG51bGwsXG5cdG5hbWU6IG51bGwsXG5cdHRva2VuOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0FDQ09VTlRfREFUQTpcblx0XHRcdGlmIChzdGF0ZS5pZCA9PT0gbnVsbCAmJiBhY3Rpb24uZGF0YVswXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGlkOiBwYXJzZUludChhY3Rpb24uZGF0YVswXSksXG5cdFx0XHRcdFx0bmFtZTogYWN0aW9uLmRhdGFbMV0sXG5cdFx0XHRcdFx0dG9rZW46IGFjdGlvbi5kYXRhWzJdXG5cdFx0XHRcdH07XHRcblx0XHRcdH1cblx0XHRjYXNlIENMRUFSX0FDQ09VTlRfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpZDogbnVsbCxcblx0XHRcdFx0bmFtZTogbnVsbCxcblx0XHRcdFx0dG9rZW46IG51bGxcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfQUNDT1VOVF9OQU1FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfRVhQTE9SRV9UWVBFLCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsIENIQU5HRV9FWFBMT1JFX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9leHBsb3JlJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdHR5cGU6IG51bGwsXG5cdG5hdHVyZTogbnVsbCxcblx0bW9tZW50c0RhdGE6IFtdLFxuXHRsb2FkOiAwLFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfVFlQRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0eXBlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9OQVRVUkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50cyA9IGFjdGlvbi5kYXRhLmxvYWQgPT09IDAgPyBcblx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhKSA6XG5cdFx0XHRcdHN0YXRlLm1vbWVudHNEYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50c0RhdGEpKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogbmV3TW9tZW50cyxcblx0XHRcdFx0dHlwZTogYWN0aW9uLmRhdGEudHlwZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YS5uYXR1cmUsXG5cdFx0XHRcdGxvYWQ6IGFjdGlvbi5kYXRhLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBDSEFOR0VfSE9NRV9NT01FTlRTIH0gZnJvbSAnLi4vYWN0aW9ucy9ob21lJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgbW9tZW50cyBkYXRhXG5cdGRhdGE6IFtdLFxuXHQvL3JlY29yZCBsb2FkIG51bWJlclxuXHRsb2FkOiAwLFxuXHQvL2FsbG93IGxvYWQgb3Igbm90XG5cdGxvY2tlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfSE9NRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfTU9NRU5UX1BBR0UsIFNIT1dfTU9NRU5UX0RFTEVURSwgUkVESVJFQ1RfVVNFUl9QQUdFLCBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdENIQU5HRV9NT01FTlRfQ09NTUVOVFMsIFNIT1dfQ09NTUVOVF9FTVBUWSwgQUREX01PTUVOVF9DT01NRU5UXG59IGZyb20gJy4uL2FjdGlvbnMvbW9tZW50JztcbmltcG9ydCBidWlsZENvbW1lbnRzIGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRDb21tZW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0bW9tZW50RGF0YTogW10sXG5cdGZhbWlseURhdGE6IFtdLFxuXHRsaWtlRGF0YTogW10sXG5cdGNvbW1lbnREYXRhOiBbXSxcblx0c2hvd0NvbmZpcm06IGZhbHNlLFxuXHRjb21tZW50TG9ja2VyOiBmYWxzZSxcblx0Y29tbWVudEFkZGVkOiAwLFxuXHRjb21tZW50TG9hZDogMCxcblx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRyZWRpcmVjdFVzZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfTU9NRU5UX1BBR0U6XG5cdFx0XHRjb25zdCBsaWtlRGF0YSA9IGFjdGlvbi5kYXRhWzJdLm1hcChmdW5jdGlvbihsaWtlKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludChsaWtlLnVzZXJfaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjb21tZW50RGF0YSA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGFbM10pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBbXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ub3duZXJfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLnJlbGF0aXZlX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XSxcblx0XHRcdFx0bGlrZURhdGEsXG5cdFx0XHRcdGNvbW1lbnREYXRhLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDVcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX01PTUVOVF9ERUxFVEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0NvbmZpcm06IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9VU0VSX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RVc2VyOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9MSUtFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxpa2VEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS5saWtlRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUubGlrZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGxpa2UpIHsgcmV0dXJuIGxpa2UgIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfQ09NTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdDb21tZW50cyA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbLi4uc3RhdGUuY29tbWVudERhdGEsIC4uLm5ld0NvbW1lbnRzXSxcblx0XHRcdFx0Y29tbWVudExvYWQ6IHN0YXRlLmNvbW1lbnRMb2FkICsgMSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAxMFxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQ09NTUVOVF9FTVBUWTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IFwiQ29tbWVudCBjYW7igLJ0IGJlIGVtcHR5XCJcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfTU9NRU5UX0NPTU1FTlQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuY29tbWVudERhdGFdLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IG51bGwsXG5cdFx0XHRcdGNvbW1lbnRBZGRlZDogc3RhdGUuY29tbWVudEFkZGVkICsgMVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9QRVRfUEFHRSwgU0hPV19BQ0NPVU5UX1JFUVVJUkVELCBDSEFOR0VfUEVUX1dBVENILCBBRERfUEVUX01PTUVOVCwgQ0hBTkdFX1BFVF9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCB7IG5vR2V0QWJpbGl0eSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9pbmRpY2F0ZSBwZXQgYmVsb25nIHRvIGN1cnJlbnQgdXNlciBvciBub3Rcblx0cGV0T3duZXI6IGZhbHNlLFxuXHQvL3N0b3JlIGRhdGEgZm9yIG9uZSBwZXRcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0J3MgZmFtaWx5XG5cdGZhbWlseURhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldHMgZnJpZW5kXG5cdGZyaWVuZERhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIGltYWdlIGdhbGxlcnlcblx0Z2FsbGVyeURhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vaW5kaWNhdGUgYWRkIGhvdyBtYW55IGltYWdlc1xuXHRhZGQ6IDAsXG5cdC8vc3RvcmUgYWxsIHdhdGNoZXIgb2YgY3VycmVudCBwZXRcblx0d2F0Y2hEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBub3RpY2UgdXNlciBsb2dpbiBvciBub3Rcblx0bG9naW5SZXF1aXJlZDogZmFsc2UsXG5cdC8vdHJpZ2dlciByZXNldCBmdW5jdGlvbiBmb3IgcG9zdCBpbWFnZVxuXHRyZXNldDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9QRVRfUEFHRTpcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10pO1xuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPSBhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9PT0gbnVsbCA/IFxuXHRcdFx0XHRudWxsIDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10pO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBhY3Rpb24uZGF0YVsxXSxcblx0XHRcdFx0ZnJpZW5kRGF0YTogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YVszXSksXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGFbNF0ubWFwKGZ1bmN0aW9uKHdhdGNoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHdhdGNoLnVzZXJfaWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQUNDT1VOVF9SRVFVSVJFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpblJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX1dBVENIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUud2F0Y2hEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS53YXRjaERhdGEuZmlsdGVyKGZ1bmN0aW9uKHdhdGNoKSB7IHJldHVybiB3YXRjaCAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX1BFVF9NT01FTlQ6XG5cdFx0XHRjb25zdCBuZXdNb21lbnQgPSBbXG5cdFx0XHRcdGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyBhY3Rpb24uZGF0YS5wZXRJZCArIFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGFjdGlvbi5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMF1cblx0XHRcdF07XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGEuaW5mby5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgYWJpbGl0eSA9IG5vR2V0QWJpbGl0eShhY3Rpb24uZGF0YS5pbmZvWzJdKTtcblx0XHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IHsuLi5zdGF0ZS5wZXREYXRhfTtcblx0XHRcdFx0bmV3QWJpbGl0eVthYmlsaXR5XSA9IHBhcnNlSW50KHN0YXRlLnBldERhdGFbYWJpbGl0eV0pICsgMTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxLFxuXHRcdFx0XHRcdHBldERhdGE6IG5ld0FiaWxpdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9SRVFVRVNUX1BBR0UsIENIQU5HRV9SRVFVRVNUX1VTRVJcbn0gZnJvbSAnLi4vYWN0aW9ucy9yZXF1ZXN0JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHJlcXVlc3QgbGlzdFxuXHRyZXF1ZXN0RGF0YTogW10sXG5cdC8vc3RvcmUgYWNjZXB0IGxpc3Rcblx0YWNjZXB0TGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9SRVFVRVNUX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVxdWVzdERhdGE6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1JFUVVFU1RfVVNFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZXF1ZXN0RGF0YTogc3RhdGUucmVxdWVzdERhdGEuZmlsdGVyKChyZXF1ZXN0LCBpbmRleCkgPT4geyBcblx0XHRcdFx0XHRcdHJldHVybiBpbmRleCAhPT0gYWN0aW9uLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9TRVRUSU5HX1BBR0UsIENIQU5HRV9TRVRUSU5HX0FCT1VULCBDSEFOR0VfU0VUVElOR19OQU1FLCBcblx0Q0hBTkdFX1NFVFRJTkdfUFJPRklMRVxufSBmcm9tICcuLi9hY3Rpb25zL3NldHRpbmcnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgdXNlciBkYXRhXG5cdHVzZXJEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgcmVzdWx0XG5cdHVwZGF0ZVJlc3VsdDogbnVsbCxcblx0Ly9zdG9yZSB1c2VyIGFib3V0IGluZm9cblx0dXNlckFib3V0OiBcIlwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfU0VUVElOR19QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJEYXRhOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YS51c2VyX2Fib3V0XG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfQUJPVVQ6XG5cdFx0XHRpZiAoIWFjdGlvbi5kYXRhKSB7XG5cdFx0XHRcdGFjdGlvbi5kYXRhID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YSwgXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ01vb2QgdXBkYXRlZCBTdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9TRVRUSU5HX05BTUU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTmFtZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfUFJPRklMRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdQcm9maWxlIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3NldHRpbmcuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfVVNFUl9QQUdFLCBDSEFOR0VfVVNFUl9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHVzZXIgZGF0YVxuXHR1c2VyRGF0YTogW10sXG5cdC8vc3RvcmUgcmVsYXRpdmUgZGF0YVxuXHRyZWxhdGl2ZURhdGE6IFtdLFxuXHQvL3N0b3JlIHBldHMgbGlzdFxuXHRwZXRzRGF0YTogW10sXG5cdC8vc3RvcmUgbW9tZW50IGltYWdlc1xuXHRtb21lbnREYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIG1vbWVudCBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBpbWFnZXMgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vc3RvcmUgcGV0IGxpc3Rcblx0YmVsb25nRGF0YTogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1VTRVJfUEFHRTpcblx0XHRcdGxldCByZWxhdGl2ZURhdGEgPSBbXTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMV0uZm9yRWFjaChmdW5jdGlvbihwZXQpIHtcblx0XHRcdFx0aWYgKHBldC5yZWxhdGl2ZV9pZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlRGF0YS5wdXNoKFxuXHRcdFx0XHRcdFx0cGFyc2VJbnQocGV0LnJlbGF0aXZlX2lkKSA9PT0gYWN0aW9uLmRhdGEudXNlcklkID8gXG5cdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBldC5vd25lcl9pZCkgOiBwYXJzZUludChwZXQucmVsYXRpdmVfaWQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVx0XG5cdFx0XHR9KTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCA9IHBhcnNlSW50KGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCk7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckRhdGE6IGFjdGlvbi5kYXRhLmluZm9bMF0sXG5cdFx0XHRcdHBldHNEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzFdLFxuXHRcdFx0XHRiZWxvbmdEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzNdLFxuXHRcdFx0XHRtb21lbnREYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEuaW5mb1syXSksXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEuaW5mb1syXS5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRyZWxhdGl2ZURhdGE6IFsuLi5uZXcgU2V0KHJlbGF0aXZlRGF0YSldXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1VTRVJfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnREYXRhOiBzdGF0ZS5tb21lbnREYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpKSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9XQVRDSF9QQUdFLCBDSEFOR0VfV0FUQ0hfUEVULCBDSEFOR0VfV0FUQ0hfTU9NRU5UUywgQ0hBTkdFX1BFVFNfTE9BRFxufSBmcm9tICcuLi9hY3Rpb25zL3dhdGNoJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcGV0cyBkYXRhIG9uIHdhdGNoIGxpc3Rcblx0cGV0c0xpc3Q6IFtdLFxuXHQvL3N0b3JlIHBldCBoYXMgYmVlbiB1bndhdGNoZWRcblx0dW53YXRjaDogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBwZXQgbGlzdCBmb3IgaG93IG1hbnkgdGltZXNcblx0bG9hZFBldHM6IDEsXG5cdC8vc3RvcmUgcGV0cyBpZCBvbiB3YXRjaCBsaXN0XG5cdHdhdGNoTGlzdDogbnVsbCxcblx0Ly9zdG9yZSBsaXN0IG1vbWVudHMgdG8gc2hvd1xuXHRnYWxsZXJ5RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgd2hpY2ggbGlzdCB0byBzaG93XG5cdGxvYWRMaXN0OiBcIndhdGNoXCIsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIGltYWdlcyBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9pbmRpY2F0ZSBjbGljayBsb2FkIGZvciBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfV0FUQ0hfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXRzTGlzdDogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdHdhdGNoTGlzdDogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGFbMV0pLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhWzFdLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfUEVUOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVud2F0Y2g6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMCA/IFxuXHRcdFx0XHRcdFsuLi5zdGF0ZS51bndhdGNoLCBhY3Rpb24uZGF0YS5wZXRJZF0gOiBcblx0XHRcdFx0XHRzdGF0ZS51bndhdGNoLmZpbHRlcihpZCA9PiB7IGlkICE9PSBhY3Rpb24uZGF0YS5wZXRJZDsgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYWN0aW9uLmRhdGEubG9hZCA9PT0gMCA/XG5cdFx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpIDpcblx0XHRcdFx0XHRzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpKSxcblx0XHRcdFx0bG9hZDogYWN0aW9uLmRhdGEubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubW9tZW50cy5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRsb2FkTGlzdDogYWN0aW9uLmRhdGEubG9hZExpc3Rcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfUEVUU19MT0FEOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRQZXRzOiBzdGF0ZS5sb2FkUGV0cyArIDFcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJ1bmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBtb2Q6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxvYWQgIT09IHRoaXMucHJvcHMubG9hZCkge1xuICAgICAgdGhpcy5sb2FkKG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZChwcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG51bGwgfSk7XG4gICAgcHJvcHMubG9hZCgobW9kKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBtb2QuZGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUubW9kKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW5kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFxuXHRjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGFcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IGdvb2dsZUNsaWVudElkLCBmYWNlYm9va0NsaWVudElkIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IEdvb2dsZWxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvR29vZ2xlbG9naW4nO1xuaW1wb3J0IEZhY2Vib29rbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9GYWNlYm9va2xvZ2luJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dEcm9wOiBmYWxzZSxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmNoYW5nZUFjY291bnREYXRhKFxuXHRcdFx0W1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSwgXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJyksXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fVxuXHRnTG9naW4oZGV0YWlsKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2dvb2dsZScsIGRldGFpbC50b2tlbik7XG5cdFx0fVxuXHR9XG5cdGZMb2dpbihyZXNwb25zZSwgdG9rZW4pIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZmFjZWJvb2snLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHNob3dEcm9wKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93RHJvcDogIXRoaXMuc3RhdGUuc2hvd0Ryb3AgfSk7XG5cdH1cblx0bG9nT3V0KCkge1xuXHRcdGlmIChGQikge1xuXHRcdFx0RkIubG9nb3V0KCk7XG5cdFx0fVxuXHRcdGlmIChnYXBpKSB7XG5cdFx0XHRsZXQgYXV0aDIgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xuXHRcdFx0YXV0aDIuc2lnbk91dCgpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLmRlbGV0ZUFjY291bnRUb2tlbihcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC5pZCxcblx0XHRcdHRoaXMucHJvcHMuYWNjb3VudC50b2tlblxuXHRcdCk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGNvbnN0IGxvZ2luU3R5bGUgPSB0aGlzLnN0YXRlLnNob3dEcm9wID8gXCJoZWFkZXItZHJvcFwiIDogXCJoZWFkZXItZHJvcC1oaWRlXCI7XG5cdFx0Y29uc3QgdXNlckluZm8gPSAoXG5cdFx0XHQ8ZGl2IGlkPVwiaGVhZGVyLWxvZ2luXCIgb25DbGljaz17IHRoaXMuc2hvd0Ryb3AuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHQ8aDU+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwgPyAnTG9naW4nIDogdGhpcy5wcm9wcy5hY2NvdW50Lm5hbWUgfVxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWRyb3Bkb3duLnBuZ1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBsb2dvdXRCb2FyZDtcblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93RHJvcCAmJiB0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwpIHtcblx0XHRcdGxvZ291dEJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcFwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkIH0+PGg1PkhvbWU8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvd2F0Y2hcIiB9PjxoNT5XYXRjaCBMaXN0PC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3JlcXVlc3RcIiB9PjxoNT5SZXF1ZXN0czwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9zZXR0aW5nXCIgfT48aDU+U2V0dGluZzwvaDU+PC9hPlxuXHRcdFx0XHRcdDxoNiBpZD1cImhlYWRlci1kcm9wLWxvZ291dFwiIG9uQ2xpY2s9eyB0aGlzLmxvZ091dC5iaW5kKHRoaXMpIH0+TG9nIE91dDwvaDY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNSBpZD1cImhlYWRlci1kZXNjXCI+SG9tZXBhZ2UgZm9yIHBldHM8L2g1PlxuXHRcdFx0XHR7IHVzZXJJbmZvIH1cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL2V4cGxvcmVcIj5cblx0XHRcdFx0XHQ8aDU+RXhwbG9yZTwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxoNT5QdWJsaWM8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17IGxvZ2luU3R5bGUgfT5cblx0XHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZHJvcC1ub3RpY2VcIj5DbGljayB0byBzaWduIGluIG9yIHNpZ24gdXA8L2g1PlxuXHRcdFx0XHRcdDxHb29nbGVsb2dpbiBcblx0XHRcdFx0XHRcdGNsaWVudElkPXsgZ29vZ2xlQ2xpZW50SWQgfSBcblx0XHRcdFx0XHRcdHdpZHRoPVwiMjAwcHhcIlxuXHRcdFx0XHRcdFx0Z0xvZ2luPXsgdGhpcy5nTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZhY2Vib29rbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGZhY2Vib29rQ2xpZW50SWQgfVxuXHRcdFx0XHRcdFx0d2lkdGg9XCIxOTRweFwiXG5cdFx0XHRcdFx0XHRmTG9naW49eyB0aGlzLmZMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHR7IGxvZ291dEJvYXJkIH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IGNoYW5nZUFjY291bnREYXRhLCBkZWxldGVBY2NvdW50VG9rZW4sIHJlYWRBY2NvdW50RGF0YSB9XG4pKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5pbXBvcnQgSG9tZSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4uL3BhZ2VzL0hvbWUnO1xuaW1wb3J0IEV4cGxvcmUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuLi9wYWdlcy9FeHBsb3JlJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgVXNlciBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4uL3BhZ2VzL1VzZXInO1xuaW1wb3J0IE1vbWVudCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi4vcGFnZXMvTW9tZW50JztcbmltcG9ydCBXYXRjaCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT13YXRjaCEuLi9wYWdlcy9XYXRjaCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZXF1ZXN0IS4uL3BhZ2VzL1JlcXVlc3QnO1xuaW1wb3J0IFNldHRpbmcgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9TZXR0aW5nJztcbmltcG9ydCBUZXJtcyBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT10ZXJtcyEuLi9wYWdlcy9UZXJtcyc7XG5pbXBvcnQgUmVhY3RVSSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuLi9wYWdlcy9SZWFjdCc7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IChwcm9wcykgPT4gKFxuICA8QnVuZGxlIGxvYWQ9eyBjb21wb25lbnQgfT5cbiAgICB7XG4gICAgICAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPiA6IG51bGxcbiAgICB9XG4gIDwvQnVuZGxlPlxuKTtcblxuY29uc3QgZ2V0Um91dGVyID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoSG9tZSkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9leHBsb3JlXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEV4cGxvcmUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcGV0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQZXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvdXNlci86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVXNlcikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi93YXRjaFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChXYXRjaCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9yZXF1ZXN0XCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFJlcXVlc3QpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2V0dGluZ1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChTZXR0aW5nKSB9IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Rlcm1zXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFRlcm1zKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3JlYWN0XCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFJlYWN0VUkpIH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxuICAgICAgICA8aDY+wqkgMjAxNy0yMDE4IFNtaWxpbmdzLm1lPC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNi9UaG91c2FuZGF5LVdlYlwiIHRhcmdldD1cIl9fYmxhbmtcIj5Tb3VyY2UgQ29kZTwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViL2lzc3Vlc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5SZXBvcnQ8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwOi8vZ2x5cGhpY29ucy5jb21cIiB0YXJnZXQ9XCJfX2JsYW5rXCI+R2x5cGhpY29uczwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5UZXJtcyAmIFByaXZhY3kgUG9saWN5PC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjZcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+QWJvdXQ8L2E+PC9oNj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICA8L1JvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVycy9yb3V0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0V4cGxvcmUuanNcIikpO1xuXHR9LCBcImV4cGxvcmVcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWV4cGxvcmUhLi9zcmMvcGFnZXMvRXhwbG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vSG9tZS5qc1wiKSk7XG5cdH0sIFwiaG9tZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuL3NyYy9wYWdlcy9Ib21lLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Nb21lbnQuanNcIikpO1xuXHR9LCBcIm1vbWVudFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9bW9tZW50IS4vc3JjL3BhZ2VzL01vbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vUGV0LmpzXCIpKTtcblx0fSwgXCJwZXRcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXBldCEuL3NyYy9wYWdlcy9QZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlYWN0LmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvUmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlcXVlc3QuanNcIikpO1xuXHR9LCBcInJlcXVlc3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlcXVlc3QhLi9zcmMvcGFnZXMvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2V0dGluZy5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9TZXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9UZXJtcy5qc1wiKSk7XG5cdH0sIFwidGVybXNcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4vc3JjL3BhZ2VzL1Rlcm1zLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Vc2VyLmpzXCIpKTtcblx0fSwgXCJ1c2VyXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4vc3JjL3BhZ2VzL1VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1dhdGNoLmpzXCIpKTtcblx0fSwgXCJ3YXRjaFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9d2F0Y2ghLi9zcmMvcGFnZXMvV2F0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qZ2VuZXJhbC1oZWFkZXIqL1xcbiNoZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNoZWFkZXItZGVzY3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuLmhlYWRlci1uYXZpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyLWxvZ297XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI2hlYWRlci1sb2dpbntcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyLWxvZ2luIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI2hlYWRlci1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRyb3B7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4jaGVhZGVyLWRyb3AtbWVzc2FnZXtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDUyNDU2ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDhweCAyJSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wIGF7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1kcm9wIGlucHV0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jaGVhZGVyLWRyb3AtbG9nb3V0e1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmODUxMztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItZHJvcC1oaWRle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIyNHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFx0XFx0XFx0XFxufVxcbiNoZWFkZXItZHJvcC1ub3RpY2V7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2VmODUxMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qRm9vdGVyIHN0eWxlKi9cXG4jZm9vdGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdHBhZGRpbmc6IDVweCAxMCU7XFxuXFx0bWFyZ2luLXRvcDogNzBweDtcXG5cXHRjbGVhcjogYm90aDtcXG59XFxuXFxuI2Zvb3RlciBoNntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzJTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ4cHgpIHtcXG4gICAgI2hlYWRlci1sb2dve1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNmb290ZXJ7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgI2hlYWRlci1kZXNje1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAgICNoZWFkZXItbG9nb3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9