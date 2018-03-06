webpackJsonp([6],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildGallery;

var _config = __webpack_require__(5);

function buildGallery(data) {
	return data.map(function (image) {
		return [_config.domainUrl + '/img/pet/' + image.pet_id + '/moment/' + image.image_name, image.moment_message, '/moment/' + image.moment_id];
	});
}

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(83);

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

/***/ 142:
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CLEAR_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = undefined;
exports.changeAccountData = changeAccountData;
exports.readAccountData = readAccountData;
exports.deleteAccountToken = deleteAccountToken;

var _config = __webpack_require__(5);

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

/***/ 5:
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

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(12);

var _store = __webpack_require__(73);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(76);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	(0, _router2.default)()
), document.getElementById('root'));

/***/ }),

/***/ 55:
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

/***/ 56:
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

var	fixUrls = __webpack_require__(142);

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

/***/ 57:
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

/***/ 58:
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

/***/ 59:
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_EXPLORE_MOMENTS = exports.CHANGE_EXPLORE_NATURE = exports.CHANGE_EXPLORE_TYPE = undefined;
exports.readExploreMoments = readExploreMoments;
exports.selectExploreType = selectExploreType;
exports.selectExploreNature = selectExploreNature;

var _config = __webpack_require__(5);

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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_HOME_MOMENTS = undefined;
exports.readHomeMoments = readHomeMoments;

var _config = __webpack_require__(5);

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

/***/ 62:
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

var _config = __webpack_require__(5);

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

/***/ 63:
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

var _config = __webpack_require__(5);

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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_USER_MOMENTS = exports.BUILD_USER_PAGE = undefined;
exports.readUserPage = readUserPage;
exports.readUserMoments = readUserMoments;

var _config = __webpack_require__(5);

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildComments;

var _config = __webpack_require__(5);

function buildComments(data) {
	return data.map(function (comment) {
		return [comment.comment_content, _config.domainUrl + "/img/user/" + comment.user_id + ".jpg", "/user/" + comment.user_id, new Date(comment.comment_time).toISOString().substring(0, 10)];
	});
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(11);

var _account = __webpack_require__(67);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(69);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(71);

var _pet2 = _interopRequireDefault(_pet);

var _user = __webpack_require__(72);

var _user2 = _interopRequireDefault(_user);

var _moment = __webpack_require__(70);

var _moment2 = _interopRequireDefault(_moment);

var _explore = __webpack_require__(68);

var _explore2 = _interopRequireDefault(_explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	account: _account2.default,
	home: _home2.default,
	moment: _moment2.default,
	pet: _pet2.default,
	user: _user2.default,
	explore: _explore2.default
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(30);

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
		default:
			return state;
	}
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _explore = __webpack_require__(60);

var _buildGallery = __webpack_require__(13);

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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(61);

var _buildGallery = __webpack_require__(13);

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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(62);

var _buildComments = __webpack_require__(65);

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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(63);

var _config = __webpack_require__(5);

var _noToInfo = __webpack_require__(57);

var _buildGallery = __webpack_require__(13);

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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _user = __webpack_require__(64);

var _config = __webpack_require__(5);

var _buildGallery = __webpack_require__(13);

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

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(66);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 74:
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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _account = __webpack_require__(30);

var _config = __webpack_require__(5);

var _Googlelogin = __webpack_require__(59);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(58);

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
						{ href: "/user/" + this.props.userId },
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _Bundle = __webpack_require__(74);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(141);

var _Header = __webpack_require__(75);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(78);

var _Home2 = _interopRequireDefault(_Home);

var _Explore = __webpack_require__(77);

var _Explore2 = _interopRequireDefault(_Explore);

var _Pet = __webpack_require__(80);

var _Pet2 = _interopRequireDefault(_Pet);

var _User = __webpack_require__(82);

var _User2 = _interopRequireDefault(_User);

var _Moment = __webpack_require__(79);

var _Moment2 = _interopRequireDefault(_Moment);

var _Terms = __webpack_require__(81);

var _Terms2 = _interopRequireDefault(_Terms);

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
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/terms', component: createComponent(_Terms2.default) })
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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(148));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(149));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(150));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(151));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(152));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(153));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "#header{\n\tposition: fixed;\n\twidth: 100%;\n\theight: 50px;\n\tline-height: 50px;\n\tborder-bottom: 1px solid white;\n\tbackground-color: #ef8513;\n\tcolor: white;\n\tz-index: 999;\n\tvertical-align: middle;\n}\n\n#header-desc{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcolor: white;\n\tmargin-left: 2%;\n}\n\n.header-navi{\n\tcolor: white;\n\tfloat: right;\n\tmargin-right: 5%;\n\tcursor: pointer;\n}\n\n#header-logo{\n\tfloat: left;\n\tmargin-left: 10%;\n\theight: 40px;\n\tmargin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n\n\n\n\n#footer{\n  display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n  display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}", ""]);

// exports


/***/ })

},[146]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9idWlsZEdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzcz83YjdkIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbm9Ub0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hb29nbGVsb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzIl0sIm5hbWVzIjpbImJ1aWxkR2FsbGVyeSIsImRhdGEiLCJtYXAiLCJpbWFnZSIsInBldF9pZCIsImltYWdlX25hbWUiLCJtb21lbnRfbWVzc2FnZSIsIm1vbWVudF9pZCIsImNoYW5nZUFjY291bnREYXRhIiwicmVhZEFjY291bnREYXRhIiwiZGVsZXRlQWNjb3VudFRva2VuIiwiQ0hBTkdFX0FDQ09VTlRfREFUQSIsIkNMRUFSX0FDQ09VTlRfREFUQSIsInR5cGUiLCJwb3J0YWwiLCJ0b2tlbiIsImFwaVVybCIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjYXRjaCIsImNsZWFyQWNjb3VudERhdGEiLCJpZCIsIm9rIiwiY2xlYXIiLCJkb21haW5VcmwiLCJhbmRyb2lkU3RvcmVVcmwiLCJnb29nbGVDbGllbnRJZCIsImZhY2Vib29rQ2xpZW50SWQiLCJyZWFkQWNjb3VudEZhY2Vib29rQXBpIiwicmVhZEFjY291bnRHb29nbGVBcGkiLCJkZWxldGVBY2NvdW50VG9rZW5BcGkiLCJyZWFkSG9tZU1vbWVudHNBcGkiLCJyZWFkRXhwbG9yZU1vbWVudHNBcGkiLCJyZWFkUGV0UGFnZUFwaSIsInVwZGF0ZVBldFdhdGNoQXBpIiwiY3JlYXRlUGV0TW9tZW50QXBpIiwicmVhZFBldE1vbWVudHNBcGkiLCJyZWFkVXNlclBhZ2VBcGkiLCJyZWFkVXNlck1vbWVudHNBcGkiLCJyZWFkTW9tZW50UGFnZUFwaSIsImRlbGV0ZU1vbWVudFBhZ2VBcGkiLCJ1cGRhdGVNb21lbnRMaWtlQXBpIiwicmVhZE1vbWVudENvbW1lbnRzQXBpIiwiY3JlYXRlTW9tZW50Q29tbWVudEFwaSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJub0dldEFiaWxpdHkiLCJub0dldEdlbmRlciIsIm5vR2V0TmF0dXJlIiwibm9HZXRUeXBlIiwidmFsdWUiLCJwYXJzZUludCIsIkZhY2Vib29rbG9naW4iLCJwcm9wcyIsInN0YXRlIiwid2lkdGgiLCJoZWFkZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInNlbGYiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiY2xpZW50SWQiLCJ4ZmJtbCIsInZlcnNpb24iLCJmTG9naW4iLCJsb2dpbiIsInN0YXR1cyIsImF1dGhSZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiYXBpIiwic2V0U3RhdGUiLCJidXR0b25TdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiZmFjZWJvb2siLCJjbGlja0J1dHRvbiIsImJpbmQiLCJHb29nbGVsb2dpbiIsInJlc3VsdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInJlbGF5b3V0IiwiZ2FwaSIsImxvYWQiLCJpbnN0YW5jZSIsImF1dGgyIiwiY2xpZW50X2lkIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZ2V0IiwicHJvZmlsZSIsImdldEJhc2ljUHJvZmlsZSIsImdldEF1dGhJbnN0YW5jZSIsInNpZ25JbiIsImlzU2lnbmVkSW4iLCJnZXRJZCIsIm5hbWUiLCJnZXROYW1lIiwiZmlyc3RuYW1lIiwiZ2V0R2l2ZW5OYW1lIiwibGFzdG5hbWUiLCJnZXRGYW1pbHlOYW1lIiwiaW1hZ2VVcmwiLCJnZXRJbWFnZVVybCIsImVtYWlsIiwiZ2V0RW1haWwiLCJnZXRBdXRoUmVzcG9uc2UiLCJpZF90b2tlbiIsImdMb2dpbiIsImdvb2dsZSIsInJlYWRFeHBsb3JlTW9tZW50cyIsInNlbGVjdEV4cGxvcmVUeXBlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsIkNIQU5HRV9FWFBMT1JFX1RZUEUiLCJDSEFOR0VfRVhQTE9SRV9OQVRVUkUiLCJDSEFOR0VfRVhQTE9SRV9NT01FTlRTIiwiY2hhbmdlRXhwbG9yZU1vbWVudHMiLCJtb21lbnRzRGF0YSIsIm5hdHVyZSIsImFwaVBhcmFtcyIsIm5ld1R5cGUiLCJuZXdOYXR1cmUiLCJyZWFkSG9tZU1vbWVudHMiLCJDSEFOR0VfSE9NRV9NT01FTlRTIiwiY2hhbmdlSG9tZU1vbWVudHMiLCJyZWFkTW9tZW50UGFnZSIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwidXBkYXRlTW9tZW50TGlrZSIsInJlYWRNb21lbnRDb21tZW50cyIsInNob3dDb21tZW50RW1wdHkiLCJjcmVhdGVNb21lbnRDb21tZW50IiwiQlVJTERfTU9NRU5UX1BBR0UiLCJTSE9XX01PTUVOVF9ERUxFVEUiLCJSRURJUkVDVF9VU0VSX1BBR0UiLCJDSEFOR0VfTU9NRU5UX0xJS0UiLCJDSEFOR0VfTU9NRU5UX0NPTU1FTlRTIiwiU0hPV19DT01NRU5UX0VNUFRZIiwiQUREX01PTUVOVF9DT01NRU5UIiwiYnVpbGRNb21lbnRQYWdlIiwicmVkaXJjdFVzZXJQYWdlIiwidXNlcklkIiwidXNlclRva2VuIiwibW9tZW50SWQiLCJwZXRJZCIsImNoYW5nZU1vbWVudExpa2UiLCJhY3Rpb24iLCJjaGFuZ2VNb21lbnRDb21tZW50cyIsImNvbW1lbnRMb2FkIiwiY29tbWVudEFkZGVkIiwiYWRkTW9tZW50Q29tbWVudCIsImNvbnRlbnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJyZWFkUGV0UGFnZSIsInNob3dBY2NvdW50UmVxdWlyZWQiLCJ1cGRhdGVQZXRXYXRjaCIsImNyZWF0ZVBldE1vbWVudCIsInJlYWRQZXRNb21lbnRzIiwiQlVJTERfUEVUX1BBR0UiLCJTSE9XX0FDQ09VTlRfUkVRVUlSRUQiLCJDSEFOR0VfUEVUX1dBVENIIiwiQUREX1BFVF9NT01FTlQiLCJDSEFOR0VfUEVUX01PTUVOVFMiLCJidWlsZFBldFBhZ2UiLCJjaGFuZ2VQZXRXYXRjaCIsImFkZFBldE1vbWVudCIsImluZm8iLCJtZXNzYWdlIiwic3BsaXQiLCJmaWxlRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2Vzc0RhdGEiLCJjaGFuZ2VQZXRNb21lbnRzIiwiYWRkIiwicGFyYW1zIiwicmVhZFVzZXJQYWdlIiwicmVhZFVzZXJNb21lbnRzIiwiQlVJTERfVVNFUl9QQUdFIiwiQ0hBTkdFX1VTRVJfTU9NRU5UUyIsImJ1aWxkVXNlclBhZ2UiLCJjaGFuZ2VVc2VyTW9tZW50cyIsImJlbG9uZyIsImJ1aWxkQ29tbWVudHMiLCJjb21tZW50IiwiY29tbWVudF9jb250ZW50IiwidXNlcl9pZCIsImNvbW1lbnRfdGltZSIsImFjY291bnQiLCJob21lIiwibW9tZW50IiwicGV0IiwiZXhwbG9yZSIsInJlZHVjZXIiLCJpbml0U3RhdGUiLCJsb2NrZXIiLCJuZXdNb21lbnRzIiwiY29uY2F0IiwibGVuZ3RoIiwibmV3RGF0YSIsIm1vbWVudERhdGEiLCJmYW1pbHlEYXRhIiwibGlrZURhdGEiLCJjb21tZW50RGF0YSIsInNob3dDb25maXJtIiwiY29tbWVudExvY2tlciIsImNvbW1lbnRFcnJvciIsInJlZGlyZWN0VXNlciIsImxpa2UiLCJvd25lcl9pZCIsInJlbGF0aXZlX2lkIiwiZmlsdGVyIiwibmV3Q29tbWVudHMiLCJwZXRPd25lciIsInBldERhdGEiLCJmcmllbmREYXRhIiwiZ2FsbGVyeURhdGEiLCJ3YXRjaERhdGEiLCJsb2dpblJlcXVpcmVkIiwicmVzZXQiLCJ3YXRjaCIsIm5ld01vbWVudCIsImFiaWxpdHkiLCJuZXdBYmlsaXR5IiwidXNlckRhdGEiLCJyZWxhdGl2ZURhdGEiLCJwZXRzRGF0YSIsImJlbG9uZ0RhdGEiLCJmb3JFYWNoIiwicHVzaCIsIlNldCIsInN0b3JlIiwiQnVuZGxlIiwibW9kIiwibmV4dFByb3BzIiwiZGVmYXVsdCIsImNoaWxkcmVuIiwiSGVhZGVyIiwic2hvd0Ryb3AiLCJnZXRJdGVtIiwiZGV0YWlsIiwibG9nb3V0Iiwic2lnbk91dCIsImxvZ2luU3R5bGUiLCJ1c2VySW5mbyIsImxvZ291dEJvYXJkIiwibG9nT3V0IiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0Um91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFFd0JBLFk7O0FBRnhCOztBQUVlLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFDLFFBQU9BLEtBQUtDLEdBQUwsQ0FBUyxVQUFTQyxLQUFULEVBQWdCO0FBQy9CLFNBQU8sQ0FDTixvQkFBWSxXQUFaLEdBQTBCQSxNQUFNQyxNQUFoQyxHQUF5QyxVQUF6QyxHQUFzREQsTUFBTUUsVUFEdEQsRUFFTkYsTUFBTUcsY0FGQSxFQUdOLGFBQWFILE1BQU1JLFNBSGIsQ0FBUDtBQUtBLEVBTk0sQ0FBUDtBQU9BLEM7Ozs7Ozs7O0FDVEQ7O0FBRUE7O0FBRUE7QUFD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QkFBaUIsOEJBQThCLGdDQUFnQyxnREFBZ0Qsc0JBQXNCLHlCQUF5QiwwQkFBMEIsR0FBRyx1QkFBdUIsZ0RBQWdELGlEQUFpRCw4QkFBOEIseUNBQXlDLGlDQUFpQyw0QkFBNEIscUNBQXFDLEdBQUcsaUJBQWlCLHVCQUF1QixxQkFBcUIseUJBQXlCLHVCQUF1QixpQkFBaUIseUJBQXlCLG1CQUFtQixnQ0FBZ0MsMkJBQTJCLHFCQUFxQixzQkFBc0IsR0FBRyxxQkFBcUIsc0JBQXNCLGlCQUFpQix5QkFBeUIsbUJBQW1CLGdDQUFnQyxvQkFBb0IsdUJBQXVCLEdBQUcsc0JBQXNCLHVDQUF1QyxpQkFBaUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsMEJBQTBCLHNCQUFzQixtQ0FBbUMsR0FBRyxvQkFBb0Isc0JBQXNCLGdCQUFnQixtQkFBbUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsOEJBQThCLGdDQUFnQyxnREFBZ0Qsc0JBQXNCLHlCQUF5Qix5QkFBeUIsU0FBUyxzQkFBc0IscUJBQXFCLHFCQUFxQix5QkFBeUIsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQixtQkFBbUIsZUFBZSw0QkFBNEIscUJBQXFCLHFCQUFxQixnQkFBZ0IsR0FBRyxlQUFlLDBCQUEwQiwyQkFBMkIscUJBQXFCLGlCQUFpQixHQUFHOztBQUV6ekYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEdhbGxlcnkoZGF0YSkge1xuXHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0ZG9tYWluVXJsICsgJy9pbWcvcGV0LycgKyBpbWFnZS5wZXRfaWQgKyAnL21vbWVudC8nICsgaW1hZ2UuaW1hZ2VfbmFtZSxcblx0XHRcdGltYWdlLm1vbWVudF9tZXNzYWdlLFxuXHRcdFx0Jy9tb21lbnQvJyArIGltYWdlLm1vbWVudF9pZFxuXHRcdF07XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRBY2NvdW50RmFjZWJvb2tBcGksIHJlYWRBY2NvdW50R29vZ2xlQXBpLCBkZWxldGVBY2NvdW50VG9rZW5BcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfREFUQSA9IFwiYWNjb3VudC9DSEFOR0VfQUNDT1VOVF9EQVRBXCI7XG5leHBvcnQgY29uc3QgQ0xFQVJfQUNDT1VOVF9EQVRBID0gXCJhY2NvdW50L0NMRUFSX0FDQ09VTlRfREFUQVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWNjb3VudERhdGEoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9BQ0NPVU5UX0RBVEEsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQWNjb3VudERhdGEocG9ydGFsLCB0b2tlbikge1xuXHRjb25zdCBhcGlVcmwgPSBwb3J0YWwgPT09ICdmYWNlYm9vaycgPyByZWFkQWNjb3VudEZhY2Vib29rQXBpIDogcmVhZEFjY291bnRHb29nbGVBcGk7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdG9rZW4sIFxuXHRcdFx0XHRcInBsYXRmb3JtXCI6IFwid2Vic2l0ZVwiXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGpzb25bMF0pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwganNvblsxXSk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwganNvblsyXSk7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUFjY291bnREYXRhKGpzb24pKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBY2NvdW50RGF0YSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDTEVBUl9BQ0NPVU5UX0RBVEFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWNjb3VudFRva2VuKGlkLCB0b2tlbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGRlbGV0ZUFjY291bnRUb2tlbkFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHRva2VuLCBcblx0XHRcdFx0XCJpZFwiOiBpZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0XHRcdGRpc3BhdGNoKGNsZWFyQWNjb3VudERhdGEoKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWNjb3VudC5qcyIsImV4cG9ydCBjb25zdCBkb21haW5VcmwgPSAnaHR0cHM6Ly9zbWlsaW5ncy5tZSc7XG5cbmV4cG9ydCBjb25zdCBhbmRyb2lkU3RvcmVVcmwgPSAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50aG91c2FuZGF5JztcblxuZXhwb3J0IGNvbnN0IGdvb2dsZUNsaWVudElkID0gJzE2ODA5ODg1MDIzNC1mc3E4NHBrNGNhZTk3bWxqMGs0NjRqb2MyMWNncWp2di5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XG5leHBvcnQgY29uc3QgZmFjZWJvb2tDbGllbnRJZCA9ICc0NDc2ODgyNjU1NzYxMjUnO1xuXG5leHBvcnQgY29uc3QgcmVhZEFjY291bnRGYWNlYm9va0FwaSA9ICcvYWNjb3VudC9mYWNlYm9vayc7XG5leHBvcnQgY29uc3QgcmVhZEFjY291bnRHb29nbGVBcGkgPSAnL2FjY291bnQvZ29vZ2xlJztcbmV4cG9ydCBjb25zdCBkZWxldGVBY2NvdW50VG9rZW5BcGkgPSAnL2FjY291bnQvbG9nb3V0JztcblxuZXhwb3J0IGNvbnN0IHJlYWRIb21lTW9tZW50c0FwaSA9ICcvaW5kZXgvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkRXhwbG9yZU1vbWVudHNBcGkgPSAnL2V4cGxvcmUvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkUGV0UGFnZUFwaSA9ICcvcGV0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBldFdhdGNoQXBpID0gJy9wZXQvd2F0Y2gnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBldE1vbWVudEFwaSA9ICcvdXBsb2FkL21vbWVudCc7XG5leHBvcnQgY29uc3QgcmVhZFBldE1vbWVudHNBcGkgPSAnL3BldC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRVc2VyUGFnZUFwaSA9ICcvdXNlci9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkVXNlck1vbWVudHNBcGkgPSAnL3VzZXIvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vbWVudFBhZ2VBcGkgPSAnL21vbWVudC9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vbWVudExpa2VBcGkgPSAnL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL21vbWVudC9sb2FkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVNb21lbnRDb21tZW50QXBpID0gJy9tb21lbnQvY29tbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vcmVkdXgvc3RvcmUuanMnO1xuaW1wb3J0IGdldFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcblxuUmVhY3REb20ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT57Z2V0Um91dGVyKCl9PC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImV4cG9ydCBmdW5jdGlvbiBub0dldEFiaWxpdHkodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gJ2F0dGFjayc7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuICdkZWZlbmQnO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiAnaGVhbHRoJztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gJ3N3aWZ0Jztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gJ2x1Y2t5Jztcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXRHZW5kZXIodmFsdWUpIHtcblx0cmV0dXJuIHBhcnNlSW50KHZhbHVlKSA9PT0gMCA/IFwi4pmCXCIgOiBcIuKZgFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXROYXR1cmUodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gXCJjdXRlXCI7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFwic3Ryb25nXCI7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFwic21hcnRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJiZWF1dHlcIjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXRUeXBlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiZG9nXCI7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFwiY2F0XCI7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFwiYmlyZFwiO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBcImZpc2hcIjtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gXCJvdGhlclwiO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvbm9Ub0luZm8uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2Vib29rbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRyZXNwb25zZTogbnVsbFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0bGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LmlkID0gXCJmYWNlYm9vay1qc3Nka1wiO1xuXHRcdHNjcmlwdC5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHdpbmRvdy5mYkFzeW5jSW5pdCA9ICgpID0+IHtcblx0XHRcdEZCLmluaXQoe1xuXHRcdFx0XHRhcHBJZCAgICAgIDogdGhpcy5wcm9wcy5jbGllbnRJZCxcblx0XHRcdFx0eGZibWwgICAgICA6IHRydWUsXG5cdFx0XHRcdHZlcnNpb24gICAgOiAndjIuOCdcblx0XHRcdH0pO1xuLy8gXHRcdFx0RkIuZ2V0TG9naW5TdGF0dXMoKHJlc3BvbnNlKSA9PiB7XG4vLyBcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG4vLyBcdFx0XHRcdFx0bGV0IHRva2VuID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuLy8gXHRcdFx0XHRcdEZCLmFwaSgnL21lJywgKHJlc3BvbnNlKSA9PiB7XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2UgfSk7XG4vLyAgXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5mTG9naW4ocmVzcG9uc2UsIHRva2VuKTtcbi8vIFx0XHRcdFx0XHR9KTtcbi8vIFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2U6IGZhbHNlIH0pO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGNsaWNrQnV0dG9uKCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRpZiAodGhpcy5zdGF0ZS5yZXNwb25zZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5mTG9naW4odGhpcy5zdGF0ZS5yZXNwb25zZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEZCLmxvZ2luKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdGxldCB0b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcblx0XHRcdFx0XHRGQi5hcGkoJy9tZScsIChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlIH0pO1xuXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5mTG9naW4ocmVzcG9uc2UsIHRva2VuKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZTogZmFsc2UgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBmYWNlYm9vayA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTQUFBQUErQ0FZQUFBQ0xLTWJmQUFBS3htbERRMUJKUTBNZ1VISnZabWxzWlFBQVNBMnRsbmRVVTlrV2gvZTk2WTJXVUtXRTNwRWlYWG9Ob0NCVnNCR1NRRUlKSVNTSVdMQXdPQUpqUVVVRUt6b2lvdUJZQUJrTFlzR0tZTzhETXFpbzQyREJoc3E3Z1FjemE5YWIvOTVlNjl6ejNYMStkOSt6VDFsckE5QmJ1QkpKSnFvQ2tDV1dTYU5EL05rekU1UFlwRWRBQWdUVVFCdm9YRjZ1eEM4cUtnTCsxVDdjeHJTWTNiQlZ4UHBYMmY4ZVVPVUxjbmtBU0JRMm5NTFA1V1ZoZkFScjIzZ1NxUXdBRjR2NVRlYkxKQXJPeDVnbHhTYUljWm1DMDhaNGg0SlR4aGo3RnRQRVJnZGdtZ3NBWkRxWEswMERvTjNFL093OFhob1doL1llWTNzeFh5UUdvSnRnN00wVGN2a1lZdzFzc3JLeUZid1dZNHVVdjhWSit4dHp1U2tUTWJuY3RBa2V5d1g3RXZ0eG9DaFhrc2xkTVByeS8zeGtaY3F4OVJvMWZleEp6ODJJQ2NkNk0yek44bm5jb0poeEZnbzRpajBiOVV0ay90SGpMSkp4WXNkWktBK05HMmQ1UnB6Zk9HZGtoMC9veFNuVEk4Zjl2TndBYk8zSFloWUlZeFBHbVM4SURCcG5hWGIwaEQ0M0wyYkNYeUFNbUQ2dVNlZUdLZlo3ZEc1Y0tVYi9aVUZteU1SL0piS29pWG1LTTZkUDVKSXFEWjdRQ0hML3lsY21qQTBkanlQRERzQTRwNHFDT2VNc2xJWk8rQ1dabzJkNmRBNVNlZlRFT2dqRWNSTnJ5T2NHVHF3dHhJSVE1Q0FHUGdoQUNpbVFEWmtnQXpZRWdnaHlRWUs5Y1FIYmJwa2dIenRqQUFIWmtnVlNVWnBReHZiRGJvWEFoczBSOCt4czJJNzJEazZndUdNS0RjQTdqZEc3ZzJoYytzdVgwd2JnWG9MdHArSjRzeFVxQUs0eHdMR25BTXdQZi9tTTM0NmQweE5kUExrMGIweUhWM1FFb0lJeXNMRGJxdy9HWUFHMjRBZ3U0QW0rRUFSaEVJbGxrZ2h6Z1lmbGs0VmxNaDhXd1RJb2hsSllDeHVoQ3JiREx0Z0xCK0FRTk1OeE9BM240VEowd1MxNEFEM1FEeTloRUQ3QU1JSWdKSVNCTUJGdHhBQXhSYXdSUjhRTjhVYUNrQWdrR2tsRWtwRTBSSXpJa1VYSUNxUVVLVWVxa0oxSUhmSUxjZ3c1alZ4RXVwRjdTQzh5Z0x4RnZxQTRsSTZ5VUQzVURKMk11cUYrYURnYWk4NUIwOUFjdEFBdFFsZWpsV2dOdWg5dFFrK2psOUZiYUEvNkVoM0NBWTZHMDhBWjRteHhicmdBWENRdUNaZUtrK0tXNEVwd0ZiZ2FYQU91RmRlQnU0SHJ3YjNDZmNZVDhVdzhHMitMOThTSDR1UHdQSHdPZmdtK0RGK0YzNHR2d3AvRjM4RDM0Z2Z4M3drTWdpN0JtdUJCNEJCbUV0SUk4d25GaEFyQ0hzSlJ3am5DTFVJLzRRT1JTTlFnbWhOZGlhSEVSR0k2Y1NHeGpMaVYyRWhzSTNZVCs0aERKQkpKbTJSTjhpSkZrcmdrR2FtWXRKbTBuM1NLZEozVVQvcEVwcEVOeUk3a1lISVNXVXhlVHE0Zzd5T2ZKRjhuUHlNUFUxUW9waFFQU2lTRlQxbEFXVVBaVFdtbFhLUDBVNGFwcWxSenFoYzFscHBPWFVhdHBEWlF6MUVmVXQvUmFEUWptanR0QmsxRVcwcXJwQjJrWGFEMTBqN1QxZWhXOUFENmJMcWN2cHBlUzIrajM2Ty9ZekFZWmd4ZlJoSkR4bGpOcUdPY1lUeG1mRkppS3RrcGNaVDRTb1ZLMVVwTlN0ZVZYaXRUbEUyVi9aVG5LaGNvVnlnZlZyNm0vRXFGb21LbUVxRENWVm1pVXExeVRPV095cEFxVTlWQk5WSTFTN1ZNZFovcVJkWG5haVExTTdVZ05iNWFrZG91dFROcWZVd2MwNWdad09ReFZ6QjNNODh4KzFsRWxqbUx3MHBubGJJT3NEcFpnK3BxNmxQVTQ5WHoxYXZWVDZqM2FPQTB6RFE0R3BrYWF6UU9hZHpXK0tLcHArbW5LZEJjcGRtZ2VWM3pvOVlrTFY4dGdWYUpWcVBXTGEwdjJtenRJTzBNN1hYYXpkcVBkUEE2VmpvemRPYnJiTk01cC9OcUVtdVM1eVRlcEpKSmh5YmQxMFYxclhTamRSZnE3dEs5b2p1a3A2OFhvaWZSMjZ4M1J1K1Z2b2ErcjM2Ni9nYjlrL29EQmt3RGJ3T1J3UWFEVXdZdjJPcHNQM1ltdTVKOWxqMW9xR3NZYWlnMzNHbllhVGhzWkc0VVo3VGNxTkhva1RIVjJNMDQxWGlEY2J2eG9JbUJ5VFNUUlNiMUp2ZE5LYVp1cGtMVFRhWWRwaC9Oek0wU3pGYWFOWnM5TjljeTU1Z1htTmViUDdSZ1dQaFk1RmpVV055MEpGcTZXV1pZYnJYc3NrS3RuSzJFVnRWVzE2eFJheGRya2ZWVzYyNGJnbzI3amRpbXh1YU9MZDNXenpiUHR0NjIxMDdETHNKdXVWMnozZXZKSnBPVEpxK2IzREg1dTcyemZhYjlidnNIRG1vT1lRN0xIVm9kM2pwYU9mSWNxeDF2T2pHY2dwMEtuVnFjM2t5eG5pS1lzbTNLWFdlbTh6VG5sYzd0enQ5Y1hGMmtMZzB1QTY0bXJzbXVXMXp2dUxIY290ekszQzY0RTl6OTNRdmRqN3QvOW5EeGtIa2M4dmpUMDlZenczT2Y1L09wNWxNRlUzZFA3Zk15OHVKNjdmVHE4V1o3SjN2djhPN3hNZlRoK3RUNFBQRTE5dVg3N3ZGOTVtZnBsKzYzMysrMXY3Mi8xUCtvLzhjQWo0REZBVzJCdU1DUXdKTEF6aUMxb0xpZ3FxREh3VWJCYWNIMXdZTWh6aUVMUTlwQ0NhSGhvZXRDNzNEME9EeE9IV2N3ekRWc2NkalpjSHA0VEhoVitKTUlxd2hwUk9zMGRGcll0UFhUSGs0M25TNmUzaHdKa1p6STlaR1Bvc3lqY3FKK25VR2NFVFdqZXNiVGFJZm9SZEVkTWN5WWVUSDdZajdFK3NldWlYMFFaeEVuajJ1UFY0NmZIVjhYL3pFaE1LRThvV2ZtNUptTFoxNU8xRWtVSmJZa2taTGlrL1lrRGMwS21yVnhWdjlzNTluRnMyL1BNWitUUCtmaVhKMjVtWE5QekZPZXg1MTNPSm1RbkpDOEwva3JONUpid3gxSzRhUnNTUm5rQmZBMjhWN3lmZmtiK0FNQ0wwRzU0Rm1xVjJwNTZ2TTByN1QxYVFOQ0gyR0Y4SlVvUUZRbGVwTWVtcjQ5L1dOR1pFWnR4a2htUW1aakZqa3JPZXVZV0UyY0lUNmJyWitkbjkwdHNaWVVTM3B5UEhJMjVneEt3NlY3Y3BIY09ia3RNaFpXekZ5Ulc4aC9rUGZtZWVkVjUzMmFIei8vY0w1cXZqai95Z0tyQmFzV1BDc0lMdmg1SVg0aGIySDdJc05GeXhiMUx2WmJ2SE1Kc2lSbFNYdWhjV0ZSWWYvU2tLVjdsMUdYWlN5N3V0eCtlZm55OXlzU1ZyUVc2UlV0TGVyN0llU0grbUtsWW1ueG5aV2VLN2YvaVA5UjlHUG5LcWRWbTFkOUwrR1hYQ3ExTDYwby9WckdLN3YwazhOUGxUK05yRTVkM2JuR1pjMjJ0Y1MxNHJXMzEvbXMyMXV1V2w1UTNyZCsydnFtRGV3TkpSdmViNXkzOFdMRmxJcnRtNmliNUp0NktpTXFXemFiYkY2NytXdVZzT3BXdFg5MTR4YmRMYXUyZk56SzMzcDltKysyaHUxNjIwdTNmOWtoMm5GM1o4ak9waHF6bW9wZHhGMTV1NTd1anQvZDhiUGJ6M1Y3ZFBhVTd2bFdLNjd0MlJ1OTkyeWRhMTNkUHQxOWErclJlbm45d1A3Wis3c09CQjVvYWJCdDJObW8wVmg2RUE3S0Q3NzRKZm1YMjRmQ0Q3VWZkanZjY01UMHlKYWp6S01sVFVqVGdxYkJabUZ6VDB0aVMvZXhzR1B0clo2dFIzKzErN1gydU9IeDZoUHFKOWFjcEo0c09qbHlxdURVVUp1azdkWHB0Tk45N2ZQYUg1eVplZWJtMlJsbk84K0ZuN3R3UHZqOG1RNi9qbE1YdkM0Y3YraHg4ZGdsdDB2TmwxMHVOMTF4dm5MMHF2UFZvNTB1blUzWFhLKzFkTGwzdFhaUDdUNTUzZWY2NlJ1Qk44N2Y1Tnk4Zkd2NnJlN2JjYmZ2M3BsOXArY3UvKzd6ZTVuMzN0elB1ei84WU9sRHdzT1NSeXFQS2g3clBxNzV6ZkszeGg2WG5oTzlnYjFYbnNROGVkREg2M3Y1ZSs3dlgvdUxuaktlVmp3emVGYjMzUEg1OFlIZ2dhNFhzMTcwdjVTOEhINVYvSWZxSDF0ZVc3dys4cWZ2bjFjR1p3NzJ2NUcrR1hsYjlrNzdYZTM3S2UvYmg2S0dIbi9JK2pEOHNlU1Q5cWU5bjkwK2QzeEorUEpzZVA1WDB0ZktiNWJmV3IrSGYzODRralV5SXVGS3VhTzFBQTU3b3FtcEFHOXJBUmlKV08zUUJVQlZHcXVCUnhYSVdOMk9zYUorVnpTRi9ZUEg2dVRSRVJlQVdsK0F1S1VBRVcwQTI3Qm1pakVkNnhYbFhLd3ZvRTVPRXczektDdzMxY2x4RkJDNkZDdE5QbzJNdk5NRElMVUNmSk9PakF4dkhSbjV0aHVyMWU4QnRPV00xZDRLTlZFRm9OeGNVNGxGdmxxSVRmc2Y5aC9jd3YyQk9peHBzd0FBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFqZHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlsaE5VQ0JEYjNKbElEVXVNUzR5SWo0S0lDQWdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBZ0lDQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpUGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBZVW1WemIyeDFkR2x2Ymo0M01qd3ZkR2xtWmpwWVVtVnpiMngxZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNldWSmxjMjlzZFhScGIyNCtOekk4TDNScFptWTZXVkpsYzI5c2RYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pa052YlhCeVpYTnphVzl1UGpFOEwzUnBabVk2UTI5dGNISmxjM05wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sQm9iM1J2YldWMGNtbGpTVzUwWlhKd2NtVjBZWFJwYjI0K01qd3ZkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLdXN0K0lRQUFLZlpKUkVGVWVBSHRmUWRnVlVYVy95L2xwYjMwWGtrSWtBQUpMUkI2VXdRUlZGQkFWRlJFMTY2ZnErdW5hOWxkM2YxYzk5dEY5MU5YM1Q4MnhMSTJ4TFlXUkJFUmtONFNBcVNSM252UGUwbit2ek0zTjNuRUJDa2hFdmNlZUczdTNKa3paODZjT1cxdTdONzlaR3ZiazIvdWhhdURIZHBnZ0VFQmd3SUdCYzR1QmV6WWZIMUxHKzViTmdaMjQ1YysxeWJDQjFKcWdFRUJnd0lHQmZxQ0F0UjJSQWpadXprYXdxY3Y2RzMwWVZEQW9JQU5CU2gyekpROTlvYlpaVU1VNDZ0QkFZTUNmVVlCa1QzMmZkYWIwWkZCQVlNQ0JnVzZVTUFRUUYwSVl2dzBLR0JRb084b1lBaWd2cU8xMFpOQkFZTUNYU2hnQ0tBdUJERitHaFF3S05CM0ZEQUVVTi9SMnVqSm9JQkJnUzRVTUFSUUY0SVlQdzBLR0JUb093b1lBcWp2YUczMFpGREFvRUFYQ2hnQ3FBdEJqSjhHQlF3SzlCMEZEQUhVZDdRMmVqSW9ZRkNnQ3dVTUFkU0ZJTVpQZ3dJR0JmcU9BbzY5MFpXRHZSMGNlYUJWcE5uWlBOclIwdG9HS3crd25jMCtlb01lUmhzR0JRd0tuQndGemtnQWlTQndwUENwYnJCaVYwRUQwTkRLa3JOMHJKN1NMU3pBaENGK0xyQmp4NFlRT3JrSk5tb1pGRGlYS1hCR0FraUVUMkYxTTZiRUJlR3Z2eDRCUDI4M3RMVzFpNGJla2tOc3pvNXRpZWF6Zlg4T1h2Z29DVDdPMUxiWXQ5N1Z1VXhnQXplREFnWUZlcWJBYVFzZ01idXFHeXlZRmgrTVIrK2VpK0FBejU1NzZhVXJDU09qRWVqbmpvZGYzSVl3ZHdlMFVqQVpRcWlYaUdzMFkxRGdaNkRBYVR1aFRmVDU3TXByeEtJNXc1VHdFYzJudGJXVkwvazgxVmNyV2xwYU83VW5JVVI3ZTFLdXRTZm1IWEQrMUdFWUhXNUdlYjBWRHFJYUdXQlF3S0JBdjZYQWFXdEFhdTNYdDhMSHcwVU5YZ1NRdmYycHl6TzV6ODZ1OHo2TFZSTTBZbUk1MkxUWDFxWUpHM2MzSjdpN09LS1JKcGtoZi9vdDN4bUlHeFJRRkRodEFhVHVwa3hvcFFEUjROUzFFVTM0MkNuL1RtcEdBWktQRnVCWVFaWHk3M2k2T1NQQTF3MGpZa01RSFJuRUxxUWZ6ZStqN21zdjBmbys5WGRua3dQc0tjR2tWUkY2TGRUZXpqV3dJMzVPanZZS1Q0a0FObHRiemhrVVpYTXdFVGVCazZXZlRuUGhtU2JMNlkzRnR0K2VpQ0djZUM3UlMzaE0vS1ZPamc0S1pTdTErbWErVG4zRjlEVGkweXNYTjRySkJpZkJxNi9oekFRUXNiVTdUVExxd3FldW9SbXZmL0FEYm50dEw4eHRMUWgxcFcrSGk4M05aSStESDFiaXFYK094ejIzekZXK0h0RjQxS1NkOGN5MTRhdGpKV2lyYVJUT3dPZ1FMM2k3dTU1VC9pUVpxOFZxd1hjNWxXaXRhVVlRaFhGc29PZHgybUpmTTR2ZW4rQldXbE9IQS9sVnFtaGtxQmQ4U1Q5T20xcG9KZ2NSVE54WUtOUkZPSWtpSytiNStveFNvTGFKeitKMHhyUndYNlhoeXVJOFdaQit5OWp2ZnRYdkNlNmtnQXRrUUdTWStDVnR0T3VUN2FjMzZ3bVdzdERMYXh1d0w3ZENkbXhFQjNraXlzK0Q5S0VXMzV1ZG5VSmJSQWtWZFEzWW0xdkp1OXJJV3g0STlYWlhjM2dLelp4eDFUTVdRS2VMZ2V6dUF1OThzaE8zUGJNZEZ3N3pRQnZMcEZRdXljNWZOTGNWSHU3T3FsNnZ2Ykh4cHFaRy9QWThYN2k3MnRIM0JLUmtOK0JZZVF1Y1RZN0grNkY2cmROVGEwaG9JRHU0cTRNRjk4M3dnWmU3Q2NVVlRkaWIyWXcyQjZZaG5GcHp2VnBiNXEycDJZTDRFRHNzbWhDczJqNlMzWWlNTWl2Y25FMG9xNjdGL2h3S0dxNjhtQkJ2aFB0NXdkTENlVzF0eGlOekFrQUxHdHh6c0NtcGdjenV5cmsrZ1NDeHdWenZOeTdVRG9zbmhyQjUzcWYrZDdtZlArM3BueXlyWW1wSXVnVU9qdUlpNkZMSHB0MnovVlg4bExXTlZnd1B0c2VTU1dHS3QzT0ttN0U5b3hsZUpJWnN0bjBOUXNzR2l4VXhBZUFjaHBJNnJjZ3ViTWFCWEF0Y25aMzZkQTM4TEFKSTEzN1NzMHJ4enBjcG1ETFFEVmJPZzVXN1pXbWRCWVhNSi9KM3RrZnh0bHJVTDdMMDJ2eVE3Z1E3RkZIenVlL09HK0RyNjZYYVh2UDJldHovNmdHTUNQYmdZdWw3aHVnNlFBY3VvS282SzJLalBQRGJlNWJDeDlzVDZabTV1T1BSdGFodW9tQnlzbGNDcXV0OWZmRmJUSW1reWtiY2ZlVTRMTDNzUE5YbE8rczI0cjVWZXhEcVlZZUpNV2JjdVRCS0xiUWp4eXF4Zm44ZHpDNzAyem0yNGNGN2xzUE56UlVORFkzWWRlc0xLRzNrQnNONUZtSDdVeUQ5SG1LL2R5d1pnMldMTC9pcDZraEx6OEh5aDk1Rkc5dDJvdVZ6RWwzOFpKdW5VOEdabXZ6R0k3VzQ4L0lFWEhmbEhOWEU5bDFKZU9IcXRiaG9XaWpxbTZ5bjArd1ozU01CcEQxRmpiaHhmaHgrZGUxRnFxMk4zKzNCaTcvN0VyTUh1dlNwcWY4ekNTQk55OG5LTGNiNjdEcGNHT1pNbTVoL3BxTzVGWXRuRHNhMGNkSHdwblBiMWNVRWYxOTNSU0JOZUp3UjNUdHVGdlhUS3FvUFFVd0RXUUJTZGpJZzZyVDRqdVFsSVA0TWVYVzNpS1NLK0N5a2JkbDFWTDEyQWFmbk1Vbi9YWmNmbTFOYVRwdTlFMnJyTFJSQXBFMWpDK3dkbldEWDNLWlVlcmxmZGsrcHE3TFFwUk4rbHo1RXRUL1J6aXE0eXppa0U2bG5pN3NqelNjMU5MWWxKcFMwTDZEdUllTTZjanhlVGlZMFdlM1IzTzdIa2U4QjNNMTNGRGZndjBSQUxORUV4TWJ2ZHVOdm42L0g3R0hNRCtNK1ltMzNZY21uME1PWldxNExGNmlRcEkzdUIrblBGaGV0NTg1MzBTWmFUM0tEYUdYUXd0Nk9HaTMvU1pCREJKamNMeFlaaDYzRzFST3RaUHoyckNpV3BId1hHc2lyaFcvZDBWVUZUS1J0ZWJGdG5SL2tVd0hia1dpdUR1cTdpd1BuelY1cCtsSXVsN3Z6UStxNGlCbkwvNHBYVG9TTHROWEpvNTMxZFp6a3VtQWxmd3pIbHRZS0orRUpSUytaWjM3bmY5V1hEUi9JL2IwSlA0c0EwZ2ZRM0VSL1FHVVRURkZ1eUtxb3g5eXhZZml2NjgrRHI1ZXJYdVdzZkxhenhTbTFMY3dsREZsVlY0KzAwa3BVbHRXcSsvMERQQkR0NXcxUDd1eXk4RHQ0anZYYjZOUEtMNnRFU2tFNXVHSUJIek1taGZpcmlTMnBydWNDZElDUHV4c1pVUlpLSndoam1KMGRrRlZVaTBlZldnc1hKenZVVUN0c3BJRG1Dc1RSL0RMazBZNko4L1ZnUFVkc3pDNEJ0dFBzRVJqbmkvRjAycHRkTlorTVZ0ajVMZ3hkVlZlSFEyVlZrRjRqUE13STl2SGlvcEU2YmNnc0trVmhmUVBjVFNiRUJQckMwZEZFUG14RGRYMGRqcFpXMFV4bVJycTdHUjkrbll5dHU0K3FCVmRVYVlXM0N4dllsQTNyemNNNk9tdHI0NWkzcDZJdzJCRWhIcG9EVmwxa0d5MHRGbnlmUnB5UGxRSEZsRTZqdkRBMk9nU2Vack1TU0t6U0krZ2FkRFg5UVp1MkpzRmtFck5CcjA0QjdlQ0FuUHh5bW1MRW5ZS2tqVFRMTEsxQVppNzdTcTVtUmRMUmk3YmdVQjhraGdmQ2czT255d2NSSm5ac3JMU3lDZ2VLT1c5MTVGRUdMSUo4T00vK1huQnpjVkZCRTcwM0VmNTFwTmVoa2dwVVY5WnhZRzN3OGZmQTBBQWZ1TGxxRVdLOXJ2NHB2SVRDT3ByK2VVakxvMStJcG10OHFCLzlWcDRVY0pxQWtMb2FMcTAwYTZ1eG56ekh4RHVSTGdqa3BpdzhaMmI3a3FDcmcrSlJtclNWbk44VTFxOFhmRGhESHVTN1dOYjNNcnNwMmg3SGJQck44c21tWk1Oc2FHckEwWkpLRkRjMTgwL25tT2hMOHlJUE92ZDRtMjBUcC9yOVp4VkFvaDRMUlVUYUhxNnc0SzRJT2pNcGZJVEJiRUZObUcxQkgzOFhmbWx0c1dKelpqNW1oclRpd1FXeGlCa1VydkJNU2MzR2wxdU9Za3VtQ1JNaVFqbmZva0hRVDJKcFFscEJQaFlrK09EM3kyZFFtM05CVm00Ulh2OWtMN1U3TnlTTzh1WkV0eUtMdnBNR3E0UGF0ZlJSYS8wQkx2WjB5dnM2MGJkaWo2cmFOdHJwMUliYzdERjNYRGdYcWdsSE1rdXc5V0F1WHJwOU1zYXVHcW9ZNk9DaE5Mejk2VjdrMWJUQTE5UGp1QjFiMm0yZ3FqbDJrRHV1bVJYRWF5MG9MRzNBbC90cUVlamxnWXFhU2l5YkhrajhuT2c4YnNQWHUwclEwT0pBUEpzUkgyYVBxNmlkQ29ObThkaE5XVlU5QnZoclRObklvemlPbkxQZlBCS0w4RkRmanRueDluTEhnNCtOb1ZucmdpMUpGSktDQUVIbXZhUWtINDlmRVk4THBpK0NpNHN6VXRPejhTLzZBdzhYdHlEWTE1c0xpeXV4TzlDYVVGZHFhK3R4NlozL3hvQ2hnUlQrTFdweGlaWlRibWxGTUlWMmxBODFhODdENGJ3OHJKZ1JpcWwzVE1DZ3FEQ1ZMbExEalNUcFVBYldmbmtBV2VWTkZNSlVNN2xZbTdncGJzM094VFdqUFBIckplUGhRN28wTmpjak5TTVBuMnhLeGJFcVR3d0k4RmNDV3pha293WEZpSFNyeDhNTFl4bXREYUh3czhlUjlGeXMvVG9GUnlzOU1IS0E1aWV6SFVwek00TWZKVm00YStIRkNPZUcxTkRZaEs4M0g4U3JlN0l3TXpxQ1ZiWElaeFA3M1pXVGh3V3hMdmpWUlhFSURmYUhoYjZiMUl4Y2ZMWTVGU25sWnNRRUIxSXdhTnFYOE9qTzNIeE1Ed091V2h5THlIQ0pIZ09aMllYWXNQVUlmc2hpd0NVOGhJS1p2aWN5bXcwcFdVc0wvTlRXMTZPcHZnUTNYeEFCZDdNclRNNW03RXFwSkM4M1VrNVNtT3RNcWxvKzg3YytGVUFhOGpJQ2ViVVB2NTBwWlNnNlFhU2VYdnh6Q3g4ZHI0eWlRankzWWpRdXUrUjgrUHY3S2lhV2E1ZlNsRnV4ckJUdnJ0dUFKOTQ3alBnQllVcmR6aTh0eEtyNzUrRENXVlBWQXBPNkFyUFBtNEN5OGdwTW1UUU9SY1ZsK01zL1BzSEc1Qm9FdURzcERVcnFpTGtqVHNMWUVHZmN1bUlCd2tJQ2tYdzRBMXNmWFFjL1R4ZmNzR3crd2tJRHNXdlBRZHg4clFOR2p4d3V0eWtZUFNvTzQ4ZU53SzhmZXh0VnpWYnVYSTRkUWtpaVU3c3JHN0I0ZWpodXYya2VuSjJja0p5U2hqZTJ2c1hkMFJYUmdVNjQ3Y2FGQ0FrS1FDTVhSYzFUYjJQdDlncjZLUnF4ZU41VVhEeDNLaG9wakZhL3RaNTl0ZUhtNWZPVkVGNzlyL1hZZjdnQWYzem9hclhyNnhyS21GSERrVEE2RG9jT1oyTGxWYXZVdUJTU25Pai8rOTFWbURabHZJWTAzMGVPR0k2eFkrSngvK052STcyc2tjcWljd2M5T2lyOTZBc1pKYTBRK2R3VXhIeFR3QTF0bUs4bndyamppeERMTHl2Qm1rZm1rKzZUNE1UeDJzTEU4UWs0YjNvaS92alUrMGloRnVaR1RhZW1waGp2M1Q4THM4K2ZEQyt2enV4K3E5VksweklmVDY5YWh5LzJWeUFxeUI5Sk9RVzRjcUkzN3I3bFJneVF6YWVkZzhXc3ZtSmhEdjdmNmsreGZoKzFLQzVjVy9EMk5DTXArUStJR3g3YlVUei93aG1ZOHZFM2VIVE5Yc1NHaHRBUFkwVlZGVGVzZTJkaXppd05GMzB0V0hqdHVpdUw4TXFibitMMWJ3dUppMndtcmNndEtjTEs1YU54K2FYa1ViOU9IbTBoajE1M1pUbDU5Q3Y4L1lNVURBNE5vd21tcGFEb0NOaHhZNm12cVVkT1N5bFdQN1lJMHlhUFV6eStjVXNTUHQ2NlJabjVzajVsNWZZbTlLa0Ewb1NLSnExbEVHSURhem9oZjVCL0pIb2hJS3JudVFLU3UvRlZlZ0grZVVNQ2JscStVRTFLUTJNejBqSUxsRFlRTXpnTUlTRkJYTkJYY0ZkNUQwOStuSVZpYWhtcmI1K09CZk5ucVdFME5GQWJPbGJJOFRvZ05tWlF4L2c4YU1wSUxvM3lGZGdNMmVZcm5HZ0tDWmdjS1VqYVo5K0ZrUW9CV2R4TkZES0hqdVRRaEdoQkxIR1IrckZEb3JGMC9oamM4ZkpCVEFuM1JqT3ZDWWovSXNiVENic09GYU9FNWxSNGFBQ0NBdjF3V1VJUVh0aGNocFhMaHNCUGFRTFV2cWlWakJnYWhzZS96TU04T2laakI4dk9ERFN6di9VL0hNUEM4Mk1WTGFSTWNrbkthMXV4TnlrTEE4UDlFQ3BtSnFHWVprQnBlUzFTTTBzUkdXQldaZkxtNmVHT2llUEhJcGw0eThJZVF0Tkx6SldveUhBc21aZUFLMVp1dzV3aFl0SnFlSGZjMk9XTEs1M2J6encvRGM3T2pKUnkxeEw2bUNoRXNndHE4TzJCR3V3cGFjSnpOMDZETEc2QnZJSXliTjUraEZxT0ZWUEdEOGJnZ2FFWUZCMkpXNitiZzhuM2ZZcEkxeGFzdkcwbUZpK2NyZXJYTWt4OWxQbHBadWFreFE0S1EvVEFBWGprM210UTlhYzM4TnFlUXZ6bS9BQThlUGRWOFBQelFUMU40dlJqUlJSeUR0U3lnbGszRXZmY2RnVksvL0ltOWlWWFVqSFdabFVFeFNodUdMVjFqVGh3S0V2NU9ZZEVoOEtiNXRmVlMrWWlnNEdaVC9iVW9LeTJGay9kT2gxWExMcFE0VkxOTUg2YWpndm5lUUEzdW52dldJYWEralhZa0ZTUEd2TGszWmZINGFickZ5a1R0S25KZ3BTMExNVnpRMWsvaUp2S3JUY3VvVGIzRGw3a25MclRiTFhsTTZ1Rm9VbWF5MnMyL3hyVHB5YXFQcmZ2T1lySC9ybVp3cENCRDlLMXc2ZWxydmJPVzU4S29IYyszRXBtTEtIdDZrUWkyZUVJN2YrRUlXWVN6NHJFVUZkOHZ5ZVg2dWdYU29NUVIxcDFYVE1tam8zR25Ca2plbWUwcDlpS0NNTGFSZ3ZtRDNJakUwOVdDNjYrdmhHdnZQVU4vdmVqVkxod0RBOHZqY05WbDhzaWNNTEMrZFB4M3NZMUdNSEZOSFhTYU5XYjFGL3ozaVk4K200S0o5MGU5MTBXaSt1WG5zY0ZMbWFPdFYwN3NXV0Y0NUVVaGhXUVQ3MldyYlB5emZlL3hVMnZKeVBPYkk5Ly9HWW1aazRacGVvUEd6SUE5Ulc3WUsvSkRWVW1QaW8vaHZUZjRRNStKOVZ5RVVEKzFCUVM0cWl6LzNVZkV2NHlod3ZJcE5HZm04UHcyRWphR09zeGJHWXNoWVBzOEVCK1lTbldiUzdCb3RtZHZoN0pnTjk3ckFaVHIzd2ZxLzhuRWN1djBxSTlZdUpjTVBORGpMMGlERU9EekIwTUxBR0E5ei81SG5lL3RCY2xQRS80K1NNek1YZVd4dlNSRWNGSUNIUkdJeDNjc2gvcFFsZDFMbThVTXJvbTRPM3RqVHR2dmFiekVpdmJFKys5QjFLeGJ2dkhyR3JQaGUzTFJWMmtCUFRxdDcvRm54L2F6L29sK084L1RNQmZINzFGM1J2Zzd3TnNyc1Rsand6QjNBc21xN0x5aW1vOCs4b0dQUGRORGdKNStQbFphaUxuVFIySmdBQS96SitWZ05jK1g0ZGJsMSt2aEU5eFNUbFdQcjhPZjNzOWpidG5HMTU4WkNvMWpnc1JIQnlBNVV1bTQ1V25YMVZPYldsWWFGWEZWSVZuWGxxUEo5Wm5ZNVNQQ2Y5NzEzUk1uendDcnVTYlJaZE13WjkvL3hMdS9PMFFYRFJuaXNLbG9ySUdUNys4SGs5dXlNRkFzd1ArZEdNaUxybHdQRHc5M2JHQ3RINXF4V3BjUE13TFN4Yk9Vc0pITnJ4WE9kYUgzMHVCRDNsT2VIVFpvbW1RamV2S3kyZGh3NDQxV00rUWU0ZVp3VjdzN0Zyd3hWZTNkQWlmelQ4azQrNG52MUdha2lkUEhnanZuQTNvVXdHMGc2ZlpuMXFaQ3I4cDdpampXYTU0K2hBQ3VTREUzK0JPcCt2aC9EcThzVGVabmpCbWpkSm4yWnphaERlZjFoamYxaXc3RzRUb3JrMEpWMjZpaitUSlJZTVE2TytucXFRY3pjWUQ3eVpqZktDN2lpSTh1R1lQRXNkRUkyN29RTzc4Z1pnMk1rVFZFek5HSURlL0JQZThzUitUZ2ozcEMybkZuOTdlajhUUlVSZzdTbE8vZFZOVFZUN0JtNzdvYkt2azVoZmowMitQWUJKOUhkdUs2N0ZyWDNxSEFESzcwUUZLSDFQWCs0U09KakxVd1pSY2pFOFlxZ1JPZUFqSE50Q1oycERtdnptV25ZOUJBOE01bmdERWpITENvQUYrMUN3MFRXd24rK0FFZFFoRGhROEZoVEl5UWt5czEybHVpSU1XbzV6cG9LYVdwNXlsR2hPTGViZDJmUktpNld2eVo3T2J0aDNHbEFuRG1mTmxWbXRDY3NBRXorTTdzUjI1OWwxTVBZdE5kcmo4ZHFFQUV2ZFJTNXNEeGdlNzRPOXY3TUMzNmV1VXMzdktCQi9jY0pjM3dvSUdZUGJNTVIwTmlvbENic1BvK0VpNEV3ZUJmUWZUOE9qTHliaG9VakR5eWh1dzVzTjlqRVJhbFNhYVhWaURlNjRhanVBZ2pTY0tpNHJSWnEzQlk3K0tWRDZhb3VKQ2xGZFU4Ym8vd3NQb2g1bEVjNUNialE0SEQyWGk5eThtWS82VVlPekpJODkvdUIwajQ2TGdUWCtUOE5DWVM3a3BFQmZSRkFYMko2WGpzZGRTTUM4eENMa1ZqWGoycmUza24yaHVJSUdJSEJDQ3hhTjlNVEltdUFNZjhSSGQ4ZW9leklyeVVXa2xONzI4RTVQR0R1S0dFcVdFNHRReEE3Q2U0OU41UStnMmFjSVlhcUZhOENlTi9yZzdIditBbXA4UGp6Mlp6bXJXZHA4S0lIOGZOeVRNOVVaMEFOVnJNcVE0UkNYMExud3FrUjl2WmtFdkhPcWxpQzVFYVlqd1FGU0VwczZyd3JQNHBzTHF4SVAvQ1dJZlM3aWJDNmU4R1JHTVVJaG1JRkJXenVoQ2FUUGNJalRTRlI1cVJDVjNLQUhSZ3NLRGZWQlJWY2VGcUYydnAxT3ZrZHFCT2NxWGp1bFdPRk9yS2l1WFNNenBnNzRYaVluUXlEYmRxVTF4aTVYL0hTRDRkN2VBeFMrU1NQcHYySkdGSlF2cW1lYmdSU1lPeHMwTHd4RVk0RXNUeTRKL2I5aURhNWQ0Y1FHWU1XOXNFQmRIcEdxM2lmNmZYUWR5QUxjZnMwMW4xNTNmZER3N2tHci9JazVvTVZtY0hGMlYzMFhtWGc5dmM5cVZYNm5yUFIyLzJiendoaXdlV2VUUHZQUWwzQmc1a3pLNVY4ejZvckk2K05HSEpOR3Y1THdjUExOOEJNNm5yOGVQMnA3NHZjeXNML01wV21YbitVVjcwa0x6K1lpd09KeWFSL1BNclB4SUFSU1VxWGsxdUpoNU1nd2RjbGRweEhPUGpJTlR1eWtjTjJ3SW52akQ0QTRVWmR4aU1ndjRVN3RhUERLSXpuQk5BRW1mT1huRlFERHhZOFZCUGs3SUthcERBVFZMRVVDT05HZUhSWGpDbDFFM0FSR09SOUx5RUIzQlhEbmU2OGZnUTNWREhiSnlSSU1OVkJyUElHYVZCL296UzU3OEtwQkdoL2xBRHhQSHhsUUh2Z2E3T2pLUExFOEpJT0h6a0NCcWZMSTVxZHBrRTVhSjhOY2hsSnJ4NG1saFdQbEZQaVlPQ095b3AxL3Z6YzhmYzFKdnR0NmxyZnhpMnVYdmwyRFBaQkszd29xb1FhNFk1TXRJQlRVZzBUWkthaTNZc0xzU2NDVWh5emxoa1M1WUZhUUpwQzVOOWVwUDBVS2NxRHFMSUd4VmN5Z3NwQlF4dGJDMVgzcVhzcjFhT25ZUDhMZ0U3OUl2c3B4aFRBbVh0NE9UQ0NJL09lMHZ1eXpEM05WVjlOUG9VNi9YT3IxUFlTWnBTZVZ6ZEZHUlZRL0hJNjQ2a1dxdVZDODNwbGZqV0ZhaEpvQm85a3lpRmlmbVdGVlZMZFo4a1lLTDV5UXkvOGdEVThZTm9STmMwK2JTR0FWTXk2dUZuWmVXWDJPTHRlcEtWcFM4MmtGaHgzd1hFZVRNU0RnZWlMdmsxWWhxYjBzTm1ZdVRCUkdXZjFxVmhJaWhBYkJ3Y1VyUFRXeFBqdk9FZWJ2Z0t4NzllUGVlV2NvcEs2SDV1dm9tWk5CUGN6anRNRnFzalRSSFp0cDBwVVV2OVFKSm9aQjVWV0Y4dEtEVlVvYzVrUTBxSlNLRGNrcUZ5TnN4TDJZSVBqdXZqT1lmNTVwamtnVnRzVmo0dFlYK3BsYVUxOUVZYkJjT2FsZVFwQ2Z5ZzlTVGw2UXJpQURWd2M1ZUFnZjZMMm5TeXA0b0xNbGJkbmFTbTBYY3BBMkMzTmJDNTlLMDZjK21VZTNKZGExOXJVNEw2N1hYWjRGcTIzYTNrakkybEp0WHdraWJyOUtFcmwwNkI5djJ2NElLcGhpWTZROVVQQ2FOOVRMMHFRQmFjY1VFWERZbm51bnhEdHlKSExGbFp6cWUrdlFvUmdhNU12TFJoSVdKSVhqK2dSRktyWlpkVWh5S29Uei9KRUM2bmpWb3JLOUY1bWNIa1RQUkY5WW1UcDcweFlsMWQ2WFcwK1pHcDJZVkdhbFphVGcrUEM4RHB6cFVNZ1NzZkRIZVRmQmlWRU5BYk8vQ3NnWmtVSzB1SzYrQ0g3V0xVTzVTZDgzMHc3T3Y3ZWZLdDZQcVBvUWF4UkJWWDVqdlRFSGoyMU5yUjJxN1V6QnUyWm1LY1dOaWxjTjVGcU5FQW9mVGNyRjdldzN5eUl3U1ZwNCtaUnhjNkpzUU9FS3Q0RHMrZ2lYR0xBdE5GWjN3eldvVngyWTJDdW5mQytuY1lMVjdiQmJjU1RUVmJUOGlCSVlNTmZOc0ZWTTMyZ1dRWGxFeWpDK0lOTlBaUFZKcENhWE14L3JqMzlmaDJlK1pDN1NqRWc4OE1LQkRBR25VazFRSDRrdHdwUFlTRnh1RzlJM2ZJbnF4Rzdibmx1T2FNZTc0OVMzTDZVZHhKdDJPWUhkU3Jvb0lpcWFibnBuRHFOSEx3TlJ3T0ZDNHQreWhoaFBiak1sQkx2RDA4c00zUnkyNFpxNldCeVU0UjRwV3Z6a2ZsbWd2Yk00cHg4M2p6RXFia2I0bElUQ2p4SUtLYW9icUNTSTQ0MkxDa2I3NUcwUmZ4bnc1NXA5Rm11c3hzTjBuSnhyVk1XWTFlM28wVXNob3dpOTJjRGh6bmo1RkdGTmF4TkpJS3lsbDJnajlmQVNwVTFoYXh5akQ4WnRJY2tvbUxyNy9mWHkyY2luZENaRnNQeHozM25nQjV0ejdFV2FQanY1bENLQ0VrWU1VRWZRMzJaSHluei9BL0JsM3BESmlFUlBsaDhuam1jOXlsdUg0NVdySEVPMDRmTGM1UWdsR2ZXR0pDU09NK01sWEIvRHV4Z3dzWFZCTlRjQ2Zrek1JVDk4d0dvKy9zVTNsTDYyNmNRYUdESXBVR0JjVWxlUDdwRkprVjFtNGtQTVlhZUVoVjZyVkQ5OXpMYVlrN3FBUXRjY2NobmU5dlRXdFR2QTQyY1ZudTBPcWJhK0RScDB0Mk5aUjYvdjRnWGJjSWIyYUtkd1BIaTJDSlBPSnFSWEIvQkNCdE14Q2FteHUySGNvQnhNVGh5TXdVRE9CYXlod2R5ZGxJMVFZdDFWMmJOdm0yclVZeVQ3dTJPbEJzOEFiMTk4V3lGeWlaaFJWc1g3N1BiYTNhakpZU3JUUzQ5cTE2YUxqSzZ2cEMwMCtLNmx0TnZNSWo2MEFrZ0JHQTAzVElUd2tLM01vVU0rZFBDc3JFK0NDZHh6Umh1a1ROVWU1WEZQbUt2MWFPdy9rWXQ0c2pSNGo0Mkx3NEFPRHNlckxRNGlubWJUaXlrc3dsQkZNZ2MwNzB2RDNid3B4NTRvcW1pNXVHQlVmZzVWUEorTEZqL2JTQkxUREpYY1B4QTNYWG9vSStuKzJVbGg5TVgydDBwalV6WHlMSHg2RHgvODJDbysrdHdmai9KeHhGYU51NGxBV2tFamR0cjIxek5VcXBMTzZUbTF1OFhHRDhjajlzWGpoOHhSNGNEaTMzM3dKL1QyYVZwcEpMZmFEb3pVMDhTUkFVRTVCNWsvL1hRU2V1WDBzL3ZqNlZ0WG1QeGxOa3dpamFwOUpyRDhrVVVCNm0wZ3pqZVphZVFteTk5QWY5Y0YyL082ZUlCV1ZuRGFaYlN3N2pQLzVkeTVtUk5HTUpKMTdHL3BVQTlMdC9GYXFneEtTbGxBaGpWU05tZWw0MUZQN1pSZlF0UVBaTVhvWGhOMWtvV2p0eXFlRVl1WFZIUnloR3YvNEs4ZXc0YnNrWExONG1qckxkTXNOaXpGalNvS0t1QXhseU50RWY0S1lBMTlzUElETVNndkNhWCsvK001T0JOR25Nbmhnc0FxQkxsMDBYelZmVmxHRG96eW5GRE1vb24zSlNYRW5JeHlIQTFlbnZxRDFUNkdML2wyTlFWWncrNnJWeTZVTjliMzlHVXJIdGNrZm9rNEgwZm0vOTFndGZSM2lqTlljNHJLZ003SktlRnJkaEgySGkxU1VUdmRsVmRJMCs0N0poQU84blprczJOeEJQNzB2Qzl2MDllU2hXVHBzZFlqbkluNzErY2VZYTVTQitLdGYxQVE4TDZwaklPM21pNkF1Z2xuSFhadVg3dWRjcUNUaDdNNjY1SjMyZHZRKzVWUE1DVSthWVh1emFsRmJTMDJDZnVBQkVTSDQ2KytXNDhiVVRQcTh3akJxUkdjVVQvSGFLQk0yN0MvRjlPK1RzZUNpOGVxYzRFTy9XWUhMTDA2bmFlckRCUnlodWtnL1ZvRDMxaCtoV1dMQzJuL3Z4aDByWnNPREF2enUyNWN4WDJlQ01yVmp5QlBpMEcwa2YyL2ZsMDFKTEJuWjJwaEVZeEdCLzhBOTF6UGlOcEdKanA0WXlQQytnR2pRbjJ4SXdzamhYdmdtdVp6SmlVbTRmUDRFbXNKZStPMjkxK1BTaTFLVnIwWlNPYVE5Q2VXL3c2VFRrVjdPek03bnZWL3RZMHJCTEJWTnUrV0dKZFRLUnROc3M4TncrcWhFRU11NituajlYdVF5Y3oyQ3ByR09rL1F0UGpHL2VETmUzNUtQR1JPVE1mZjhzVW96WG5IMVBPeEtYbzBjbnAvMGRaZk02OTRWUW4wcWdQUkYzKzVvMFFqUUlZVkZmUlJTdE52WCtnK3RxTmZlaGVGTlBGTmxwZDlKUUR1WHBJa0E2VjRyMWI2SVE5RFNZbyt3R0EvODMzc0htUkZzeGFWekVwU2RQR3BrSndObjU1WGl3ODkzNDVtUG1PVGxLNmZWVy9IYTVuUnFROC9oNGVzbWNlZU01Z1E3b2FxbUFXK3MyNGFGczRacUFvaklhSXZwK0FXbjQyRHZ3R1E4RlQzUzdIeDdrelBzVkpsZ0xtZW51SEFkblNXQUkwVGp3dFBVZkxtbVhFNU04YmZWaXFSY1FFZ3VaN0EyTVJTYmZDU2ZVYnhZUmZ2TTdDSWtaVlpoREUybUl6UWpzM0pMTUd3SUJTWHhURG1haCs5ekdqR1ArVGxFZ2tjeU9rOXl0OW1aVU04VDcyTm9DbjJ3S1lzbXhpNXFHRU81ME54b1FuQ2hNT0lKYW9KeTJGaEFIdEZoeDJ4YzhGeWJXZ1F5cHZiNWtPaVZBK2VuYzBiVUxlcTNvNzNXcjh5WnpJM2M0OEo4RmlXQWJTWlB6VEdkMFJVTmJWajcyUjdjZUpVN0FuaU1RaGF1dktUL0xUc09NOEFSUUszV0Q0NXNZMlo4QUFXelBaNVl2Wk1iWVN0bVRZdFRqdUJ4Q1NNVkFtSnU3enVZaVZWdmIyVWt5b0xKb1dZOC8xbWFjall2WFRDZWpsMWZqSWpyMU40TGl5dVlmckVGYjN4OWpFYys2RUFtSHdsWW1GNndiWGN5Qmc0SVloNVh2Q3FUdC9LS1dyejkwVGE4dlpsYXBxZm1jL2t6Y1JGY0w1Z2V6L3dzRHlTT0hhWHFpNEROWUY3Wm0rdDJZTzNXWElSVEFFblpzK3NPS1QvUnBSZU9WdmpZSnFpS1pyWHVpejE0Z1M0UDJVUktHZEdUZVJNUWVsbnBRK0l6UmpHWUVkVi92TFVMdzJJaW1Fa2R5Q2hlTUc2L2JqWnVmWElUazBNMWNhL3pwN3I1RE4vc1ppeDcvclRha3hQWlgreXR4STZYTDBkaXdoQVZ4ZWdRTUQrQmxHaENVdmR6Umx2bVBmQVZGbzd6dzRkTTkzNytobEc0N2ZyWml1RnRwYk0wSjR0QXlpUVYvZGFIM3NLMjFFcUU4anlQdmtCL29zdmpMc3NDakExenAwTlJrcXYwU3gxZjlBTFZYMTVKUFpQQ0xNcEpubHJlaUVsUm5raU1EK0ZqYUxVb1JRNzlRMXYyNWVFUUQySU81TVRLQnRITXBLNUYweGtXOVhkRlNWa05Qdmo2Q0RhWGNJVTBrd25UaTdGei9XMzB2Y1JCOGp2dWYrSjk3TTJncXMxSWhhMmpUNWpDaVVJaUt0Q05qMGh3NUZrc0MyMTlSdGU0c0tLQzNIZzh3eEZWTE10aStGMW9JODVjSHpjVG9vSWxsRzFISHhVVDQzamV5SW1uRHFXdHJpRHlYV2duL1VZd1IwZmFyYWhwUWpiVER2UzFITXp4QlBtNHFrV1FYVnpIbkNnZWlPVkZjUjRIY0pHRStHcGgyd0pxUGNWVlBOUEhOaVIvcDRudERpZDl2WmpkTFhOZHdtdEZQTWsrbk5FZEo1cCtvdWtlWVZSSjBaNjR1VGs3WUFESEtROHNLeWNPdWNTaE83RHRWL2luZ1l2b2FINk4ydVc3cXkrYVZsR05CV01IZW1MS1dJYlkzWng0andWN0QrVmpJN1c1aEVoR216Z09PZWg3ak9PVHhTNjB5dUVmV3BnUjY0UEpZeUtveVFpUDBjOUMwKzJUSDNLVWFSZkNxSmpRVzJoUlZNdU1kUXJlS1dQQ0ZVL0llSXRMYTdIOVlCNzI1OVloZ2p3cWtjb0FKb0JHQkRJWGl0ZVRzcXE0bUIxeDN2Z29QblRQckpKSnY5K2RoWTJIeXhIWkxreGtmaWp6a0UxY1poS1hzZkdocEtlTG11dGp1Ulg0Zm44K2NpcWJLYXljRk4vSW5NazltU3hMalBUQXBGRmhrS2d6UzVGZlZJMXRCL0tRVk5DQUFWN2NsRmdxYysvSGNZUUhTQjArMzRsemxFdi9wUndRcnVMUm1oZzY3Znk4dFA0a1RlWndUclZxWDFYdXhiZi9TQUVrazFYRXgzNDBXQ1RVcnUyMTNkRlVtREdJak9MQ1NaRkprMGhkQlhmemtnWkdSZFNxcGpuQXhvTGNITlJDRnFhVTArSWJjbXV3L1crWGRKZzJXN2J0eHZPdmZvcVN5am9zV3pBWlN4ZGRwTlRiSTNUNFh2N2ZhMmtPeVprcS9wTk9iRUQ2S09Wak9lcklBTjRVK0Q0TWYzY3Q4MmFaem53U1RTeWdzQ1FhOEtacDY2dnEyelRZNWFzd3JOeFRURnB3amZDdmpmQ2tPd1dTRHJWMHlKZHhySEpXTDRCdE9UTjZKempLZlJMcEt4SE5oaURYWkVPU2Z1VXNsb3hGbnRsZDB4NE45S082Nzg1WFFiVkZQVXBYRWppRGFLWUszZ0lpZUVzNHpnWlpGS3pueVZkM29QZGJ5Z1VpZ2w0ZVdoZm9UcDlVRjdyWjNpdENTSEFwNFQwU2xSUGNQTlY5SnJYUXloaWw4dUM0L0RnR0ZWVWtVaklHZVN4TUtRV1RpdVR4SGhQYkNlZGlkNlpBYnlhZWdydThwUDFLdGwxS09vbUExUHFnMVVVVFVJU01MSFRCVzRSUUFZVVZXUWtoTkg4YlphN1lCK05hbWtCbmZYK2F2c0pET3NoOU9pNWw3YmpJVlRuSkhzeHhTKzZjN2VOakZENmtiU1hIVzF6UFlBcEI2aE5GQkpKSHZUbTNlbjBkcHlMU1hjQ1hOUGZnUzRTZStMR0V6eXZZcDRBYjZSTkkzRG94VThXOTh0YkpiYjNTWFA5b1JBZ3BPNGRNMkUrQkxBNmRKMlR5WklHS0lMQUZ1YTVQckdnam82azV2UFR1RHFVR1I0UUY4TnpYV0tyYnc1WDI1c2tEb2dLaUVyLzByeTJLWVlWQnVQbitDR1JCaUpZbjE0VXh0RjIzczB3V29hNDF5U0lVYlVmU0dnUUVKLzNhanhwdUw5RHZrVU9iQXZMYmRnSFlqdFdXRGxMUGpRSW5tdUZaQWYyYTBGTUVwREIzQUJtV3Vab0tkRndpdk1XMDBrQ25sL3dTaHBkcmNqOUozQ1BlZXI4RDIvdGxWYlhBcFkyZVFIQVQ0ZUl2a2J0MmtQdFVPWEVVUlZhbnJWeVdQa1NRaURBSW9LQ3dCYmxIOEJZOEJWVC9MTE9sazNhbG5aWXlHS25IRDFjS3ZSZzZuS1ZFMnBGa1M4bDdrOS9TbnRTeHBUMkxUb2dMbStqZ09ha3JJRzNwV3UySmVGVFZaV1hCU2VjWFFWVzBNNWs3d1UvdTkydW5tZlFsWldjRE9tZmxORnMvTzJqMWpJenFyeGM2bFlrNkhaQ0owUGFGN3U4V0pwTGpEcHRTS3RENnpKZTRkc0VZUkRPQzRNcEZJNlpSRHFNUXgraHJlZm05bmRpZVRqT1NKa0JYeHJOdHVUczh1eXVUZTRTSmJSZTJiVHM5ZlQvUlBTY2FxL0JqVDgvbVVZdEozcnBBVDdpZENJY3VUU2pCMmxPL1hldnF2M3VpcjFVNjdrYndDK1k5M2FPM2FmdDVJanJwOVlSZW9qbDFBUHMrRVIvcDlVNFZGN252WlBDUmVpZWF3NU50UTlvNUV6Z3pBVVRxaU1Uc1M1RHVaQ0hMeFBSeDF5YzlURmxvWXZ2dno2akV5dzk5Z2RuUkhnaWlWaVJJWjVRMFlDdDlBNGs4N3hUMkU4TG5wRHMwS2hvVTZLY1VPRE1CSlBhd09BOFUvTmlIMFJOTnhFd1I4U0h2dG1KRUZiTkV1NjR1ZHJ6Sk5SRjJjcDVLZGlmTjE5QngrWno2SW9KUmNQU2t1VFluaWhFaU9rdFRjclFrTnpOTmx6bFI3dXI2cWV5eTU5UUFEV1FNQ3ZRU0JiVFk0R2swSnJ0OFRLZ3pOdTNNVkZFTkNTZUxabkl5TDNsb2swRFh4M0ZJeUZhZ3U3YjBDTnVCUTdsSXlxMkZQNTFxWXJPZXl5QnFiQk9kT3hJZEVqK0J2T1JZZ3BUSk5RTU1DdnluVStDME5TRHhRNFRUY2ZqR2hqUjQ4T0RmZ3RrajRlMzU0NmNaZGtkZ0VSeHVmTVpLalNTSjhRbC9LcUxFQ0V3OUg4MGd5Vmp5akp1dXBwMHMySU9IOC9ETTY5dmdRSFZJVXRUN3l5Slc0elBrVFhlc1lKVDloMVBndE1Qd090MUVaOGxtZUZWQ3NXSmVxQ2lJZnZFblBzV3M2cm91SmVKakMzSmRpdVF6ai8xNFVWQjVNUHdvL3J3dVZXMXZNNzRiRkRBbzBBOG9jTm9ha08zWUJ2S3NqUGlDMUNud2s1VUtsRDRTZnBWUXN3NGlrQ1Evb2p2SklyWENtZW92SnA1b1BwMTM2WGNibndZRkRBcjBOd3Fjc1FBU3pVVE1NUkVtOGpvVmtLUXdFVG82aVBZalJ3UjZBcWwvcnZ0OWVzTGRLRGNvWUZEZ3h4UTRZd0drTjZuNVZHMmtpWDdoRkQ3bDd1NGlZS2ZRaEZIVm9JQkJnWDVFZ1o3VmpYNDBDQU5WZ3dJR0Jmb25CUXdCMUQvbnpjRGFvTUF2Z2dLR0FQcEZUS014Q0lNQy9aTUNoZ0Rxbi9ObVlHMVE0QmRCQVVNQS9TS20wUmlFUVlIK1NRRkRBUFhQZVRPd05pandpNkNBSVlCK0VkTm9ETUtnUVAra2dDR0ErdWU4R1ZnYkZQaEZVTUFRUUwrSWFUUUdZVkNnZjFKQWY4cEYvOFRld05xZ2dFR0Jma3NCT1hwbFg4Yy9qZEwxQkhxL0haR0J1RUVCZ3dMOWdnSWljNVRzbVJUcnhyK2ZwUDFkN1g2QnVZR2tRUUdEQXYyYUFuTG1zNXd5UjJTUDR4VnpoOExQTXhYYlVtclJ5S2VHYW9kSysvWDRET1FOQ2hnVU9FY3BvSjU0d1QrT01tdTBKeTZZUEFUL0gwdWtWLzlTcVN4WkFBQUFBRWxGVGtTdVFtQ0NcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGltZyBcblx0XHRcdFx0c3R5bGU9eyBidXR0b25TdHlsZSB9IFxuXHRcdFx0XHRzcmM9eyBmYWNlYm9vayB9IFxuXHRcdFx0XHRhbHQ9XCJMb2cgaW4gd2l0aCBGYWNlYm9va1wiIFxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpIH1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZWxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0cmVzdWx0OiBudWxsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHRsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzXCI7XG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH0gICBcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdHJlbGF5b3V0KHNlbGYpO1xuXHRcdFx0fSAgICBcblx0XHR9LCA1MDApO1xuXHRcdGZ1bmN0aW9uIHJlbGF5b3V0KHNlbGYpIHtcblx0XHRcdGdhcGkubG9hZCgnYXV0aDInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGluc3RhbmNlID0gZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHNlbGYucHJvcHMuY2xpZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGluc3RhbmNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGxldCB1c2VyID0gaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCk7XG5cdFx0XHRcdFx0bGV0IHByb2ZpbGUgPSB1c2VyLmdldEJhc2ljUHJvZmlsZSgpO1xuLy8gXHRcdFx0XHRcdGlmICh1c2VyLmlzU2lnbmVkSW4oKSkge1xuLy8gXHRcdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmlkID0gcHJvZmlsZS5nZXRJZCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBwcm9maWxlLmdldE5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5maXJzdG5hbWUgPSBwcm9maWxlLmdldEdpdmVuTmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0Lmxhc3RuYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuaW1hZ2VVcmwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuZW1haWwgPSBwcm9maWxlLmdldEVtYWlsKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQudG9rZW4gPSB1c2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5nTG9naW4ocmVzdWx0KTtcbi8vIFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXN1bHQgfSk7XG4vLyBcdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRjbGlja0J1dHRvbigpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUucmVzdWx0KSB7XG5cdFx0XHRsZXQgaW5zdGFuY2UgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpOyBcblx0XHRcdGluc3RhbmNlLnNpZ25JbigpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRsZXQgdXNlciA9IGluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpO1xuXHRcdFx0XHRpZiAodXNlci5pc1NpZ25lZEluKCkpIHtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XG5cdFx0XHRcdFx0bGV0IHByb2ZpbGUgPSB1c2VyLmdldEJhc2ljUHJvZmlsZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcblx0XHRcdFx0XHRyZXN1bHQubmFtZSA9IHByb2ZpbGUuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5maXJzdG5hbWUgPSBwcm9maWxlLmdldEdpdmVuTmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5sYXN0bmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5pbWFnZVVybCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcblx0XHRcdFx0XHRyZXN1bHQuZW1haWwgPSBwcm9maWxlLmdldEVtYWlsKCk7XG5cdFx0XHRcdFx0cmVzdWx0LnRva2VuID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKS5pZF90b2tlbjtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdMb2dpbihyZXN1bHQpO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXN1bHQgfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nTG9naW4oZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5nTG9naW4odGhpcy5zdGF0ZS5yZXN1bHQpO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcblx0XHR9O1xuXHRcdGxldCBnb29nbGUgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWDRBQUFCY0NBWUFBQUJweWQ1MUFBQUFBWE5TUjBJQXJzNGM2UUFBSHZ0SlJFRlVlQUh0WFFtWUZOVzEvcXZYV1JuV1lRWUhCTWRSaEhFUWtFWERhQ0NJR3R5K01SSFVDQ2Jpa29keFM0VGtrZmNlV2RTRUdJMVBlWkZnVkJRamZ1L0JwNG5qVThIbGdZcGhCSlI5RzBka0dWYVpqWm5wdGQ2NTNWM2RWZFZWMDAxUDkwdzNuUHQ5MVYxMTEzUC9lK3ZjYzg4OTl4YkFqaEZnQkJnQlJvQVJZQVFZQVVhQUVXQUVHQUZHZ0JGZ0JCZ0JSb0FSWUFRWUFVYUFFV0FFTWhFQktVNmk0NDBYWjNZY2pSRmdCQmdCUmlCRkNNaXg4bzNGMEsyVWdTVjBpYml4NHNjcWo4TVpBVWFBRVdBRVVvT0FZUGppOG9jdW4xa3hab3hjK0Z0SDNmSDI0QjZETHY2ZFpIRk1rQ3lXL21hWnNEOGp3QWd3QW94QTl5TWcrLzJIWmIvN282YkRtMysrNGI4bWZrVVVDZVlmTlFNd1kveUM2UThwR0hMcE9rbXk5T3IrNmpBRmpBQWp3QWd3QXZFaUlNditoaFA3UGgzNythSXBYMUthS01uZlpwS1JMWC9neUFXQzZZODl4NHFIdnV0QXZ4NUM0OFBPRElHalRYNDg4WlliNjc2TXd0Z3NDZnN6QW93QUk1QVNCSWgzOXl3b0h2Rjd5dnhtdXFLWWtoRTNGN01BaDhXUzlTMUJFVE45Z1VKc0p3WkdnUlU3Um9BUllBVFNBWUVRRHhkTUtVcXpZOHI0SmF1MVVCRFBrbjc4VGNoWXhZOFZ4MlFFR0lIVUloRGk0YWZFK00xVVFLbWxsSE5uQkJnQlJvQVJTQ1lDZ3BmSExmRWJ6UVNTU1F6bnhRZ3dBb3dBSTVCNkJBUXZqNHZ4QzFLaUlxYWVQaTZCRVdBRUdBRkdJTWtJR1BKeWx1eVRqREpueHdnd0FveEF1aVBBakQvZFc0anBZd1FZQVVZZ3lRZ3c0MDh5b0p3ZEk4QUlNQUxwamdBei9uUnZJYWFQRVdBRUdJRWtJOENNUDhtQWNuYU1BQ1BBQ0tRN0FzejQwNzJGbUQ1R2dCRmdCSktNQURQK0pBUEsyVEVDakFBamtPNElNT05QOXhaaStoZ0JSb0FSU0RJQ3pQaVREQ2hueHdnd0FveEF1aVBBakQvZFc0anBZd1FZQVVZZ3lRZ3c0MDh5b0p3ZEk4QUlNQUxwamdBei9uUnZJYWFQRVdBRUdJRWtJOENNUDhtQWNuYU1BQ1BBQ0tRN0FzejQwNzJGbUQ1R2dCRmdCSktNUU5wL2NNVjN1Qjd1bWsvaDJiNFozajI3SURlY2dMKzVDYkJJc1BUcUEwdnZQckFXRnNFeGVod2NZeStoNTc1SmhvaXpZd1FZQVViZzlFSWdMUm0vTE10d2ZiZ1M3Vyt1Z09lTERhYUkrK3NQUUZ6ZXJadmcrdURkUUR6YjBPSEltVDREemdrVFRkTnhBQ1BBQ0RBQ1p6SUNhY2Y0M2V2L2laWkYvd25mbDdzVGFoZnZqcTFvbWo4WHRyS2h5TDNySjNDTUhKTlFQcHlJRVdBRUdJSFRGWUcwMGZITGJqZWFuM2tjalhOL2tqRFRWemVTZC9jT05ENDhHeWRmZUJheTM2OE80bnRHZ0JGZ0JNNW9CTkpDNHZjM05hTHhGL2ZCdTNONzBodWo5WlhuNGEzYmc0SmZQNTcwdkRsRFJvQVJZQVF5RVlGdVoveitFOStnWWM1cytPcHFVNE9mdzRuczYyOUtUZDZjS3lQQUNEQUNHWWhBdHpKKzJlTkI0Mzg4bkZLbVgvQ2JQNUxGejlnTWJCb21tUkdJRDRFeEkrMjQ1VHdMUEY3QWJwT3g1bjAzVmh5Tkx5M0hPblVFOGdmWThQTktLK3lFTjRpREh0dnF4b0l0OHFsbjFJMHB1cFh4dHl6OEk3emJOc2RWZmR0NUY4QXg3bHNRVmp1V1hyMEJzdnp4azJtbmQ5ZDJ1TmQ5QXUvMkxkcDhTTkkvM1puK1pIcmhwMXhneFZtOUpOSC9BT3FJemExKzFIM2x3eHNidk5oeVVndEo0S21mRFV0KzRFUkpOajM1Wkx6elJoc1c3TWljVG52ek5WbVlWV0VOVktWaG54dHpYdllnUlhORkEvQ1M3NVdNK2d5N3dJNkt3VktZdU95dlBjVDRVOWVtK2Yyc3VPTlNHMFlXV1pDbDRpQW5qdm13ZnFzWGk3ZWMzbXRxaFdkWk1iNDBVbkd2dzBlTVg0d0NtZU1pMUhjeHpXNHkweFRtbXJHY2JkaUZ5THY3ZnRpSFZ4aEdkZEpna0h2YkxIaklwTE5sMFZQQmdlUTBaL3JsNVhiODIxUUgrZ2I1bndhWHZuMHNHRExRaGttVlR1emY2c0s5YjNqUnJJb3hlWnc5eVBTRm4xWENsWmZiaVBGN1ZESFMrTlpoeFRVaHBpK283RG5RanF2NmViQXdVNlhiSk5YSDdkTzJtWkQ4VStNazNIbWpFOVBQTitoNFZHRGZBZ3ZLU3UyWWZvVVBLLzd1d3NMYTFBMCtxYWxmbkxucThHM1g0UjluTHQwYXJWc1l2OS9uUmN2VGo4V3NlUGIwbWNqOTBZOGhXV0liSDRtQm9lZVRpM0R5cjM4T2J1WTZUZFU3WXlxejhEdWFac2JqU29ZN3NheUhoS2trRlN2T3Fkd28vN2FJcEtoNFpjNi9qSlpJMVRLSGJGTks5ZldSTVAvdUhGVDJvY2tjTVJlYjFZL25ubXJEcTBZek9kTThreFZnd1lMN3NqRTZMNDc4c3Eyb21wYURjMWUyNHNHYTA1VDV4d0ZET2tlSnpWRlRRZjJKZCtBc1gwMDkyWHhLbUgzVGJjaWJOVHN1cHErUUtGbHR5Qk8yKzZjcDAwYy9PMzVwd1BSYmpvc3B0Z2ViOXZtRnRrZmpzZ1k2c0dSeVpLQll2ZG1MQmxXTTlldjBLVlNCNlhaTG91MG5YMFVZaWJmUmoyM3F5cVFidmJIb2lhTStCVG5CVEd5QkpwU1FaNCtWYVdyQzU4d3lZdm95cVJXOStIU25GNGRhSXUyaVVGQnhSUmFxY3BVbi9rOG5CTHBGNHBmcmw4SjU0UWs2YXFFTkoxY01JVjI5Vmc3TnVxWXF3TURUQ2FoMG9HWHFPQnJZTklUNHNlekZOaXcrcVBKMFdQRElEN014bnFSRXhaVmNhRVBwS2w5QUY5NjgxNE1iSC9XZ09GZEN5MGxab3daUzRxZnovOEsvdFdLaFEwSXhaTlM3MDVuUytHaUxWUi85aE1hdDk0aXZtRTdGeWk5MTRNcENiUmJ0Unp5WS81d2JOU3J2OG5JSEhybk9ydXFqRnR4NmxSVXJsbWVnTGtSVnI5UHh0c3Nadit4cGdIenN6UUNXdHY3dDZQSERuVGo1NXRudzdDNEkrRWw1K2NpZGRlL3BpSFhTNjNSb2sxdkw5RVVKYmovbUxYVmgrZjFPOUZSS3BLbjNCSHFvRmRKeHJnVTNEN1BBRVFvN1JndkIxWVlMZ1JLcUt1MllPTmlDb0pBcDQ5QitIMTcrd0l2V3MwblhYaWdod0hmYi9GaEJpM25LT2tMeEFDdW1uQlZVSHptSU9iOWZRd05PVHlzZW9MV0VvYVIyQ2poYVZONjhpWFR6Q1N3Q2pobHF3N0Q4RVBGZUdlOXU5S0UrOUppeXNtbWd1WG1FTll4Wjh6ZWt3OWJwcjh1SnJrdUlMamU5VWNmMmVBblRFRkdodjhxUk5weWp2RzFFOXdxaVcyQm1YQi9DZm93VlRxK0VVckVJSDNZU0xocHJnN3VGUEpwOWVOVmtVZDdiUnVHNVZzeVpUR1VxbUZPL1dQK0ZCNHROMG9TTE1MaVpjWmxDZUNpUTlHdjNFZE92MWNYZHNzV054Mm5CZC83WXlBeXo1eUFTT2hBVU9uVFJBNCtUQ1pjSjUxaFJsQlBzR3g2aWM4Y3VIMTRLNFdPVVJ1MG5GcHFuVTlzTUs3U0F1ams1R2NlUCt2SEJweDZzaWprYlRLeVBxOHVQZFovZjA0THBGMU9mRGRGbkkvb08xL3Z3K21vdmFycFJjTkcxYUt4cWRENWNQckljOEx2Q0dVbFpmdVRlV0lmMnRZVm9YMTJNN08vZkNrdWVWcTROUno3RGI1eVI5eW1JaEptVzVxUVBPeHBsWEV3d2VuMFNza0NNT1NRcGxnNnpZOVlWa1diMzduT2grbVZkUnNMeVp5WlovaWlqUXdqM01sbzBycnpJam1NMHF3Z3ZMTk42emZvdExpZzJWVk8rN2NRTWxZWEo2RUZlRERuZkZyUTZVclZmMldBYnBveng0S0VYb2htSUtwcnVWc0tNNjUwWUZzWkJocU91Rll0REwzaXF5czZuUmVSWlY2aDBMRWZJWExKV0xYcGI4RUNWRTBNVWFvZExxSDVPR3o3emFsVTR0Y2V4clcyb2RwdlVCMlExYzRXVDJpM2FWVnppUk1ETWdYRGZ2Q09DdXpwbXhhUXNWT2VSeFkzYWsvSVVDNjlYa1NYVXZiVG1vd3lXbWloR0Q3bGtLRkFjR3JCRDRldmZON2VrV3JPVzF1K0k4WWZmNEd3TGhsSS9xdFV4dWZLUkR2eHFpaDBrRStnY01YR2lzK283UGl6N2J4Y1c3NDFXSVFVVFdERHZ0aXhNR3FpbFRZU1ZEUVRHajNMZ3RwMWszTEJjYTl3UUxxd1RmVHljUjRjM0VoNllsb1ZyUzZPMTZjTDRZdnhZQjlaLzBJNDVhODNWM1IxbTM4bkFDQWZvWkVieEpwY2JQbzZLS2xIYlpWOTZCTGJCMU5tcnBrZUZHM2w4OW1YbnBvOTB1Q2RHRFlucWRVWkZwWTFmazB2N0VoU05jbUpCbzFIbmtURnZZYXN4M1RvZUgyV1IwTk9HNVhlcVpndjZYT2hGN3F2Mm94ZGFDSmlLMDF1WWxCSFROM041eFhZOGVvMFAwOTZNdnkzYkJBTlJTY0ZxZnBLcXNwdHJmZGhQODU0U3BTSjlyQmdEVDBUTlFUTWc0alVSVjJqRlpBcGZwZmlRVkZxczNOTy85N2dYcTBPRW05VkgxMHlxMUhIY1JqSDlTSnFldE9ieitGViszUHAyL0poSFV0T2R6NGQvZEdTemZ0S0xleGI3VWFLTWt4NDVTckl0SGVQRVV5cmhRNU8vOGtBV1Q5TnZ6Y0hndjdkaVhsUjVVbHdMelNYbk8vSDYzUmJjdFVnblhIU3lqeXNrbXY5TG1FZUw4cE5VNnRib3VCSkdUOHpHa3R4MnpDUTFiRmM3ODdjeVJaVElMWXBzR0YyQW82SUNVblpvTlNzNldPTXpkMW03NWptUmg3Zm41c0JPSm8yWjRsWnQ5K0hoVVZhVjlCenNQTytNOFdGMWpRZkwxdE9VV3MwSkU2alluTzhaTUgxUzUydzc2RWNoU1NwOWRiTUFFaVRqY3Z2M2VkRmtzMkJZc1ZZQzZqdmNqa3BpL0d2aXlpV3hTSjB2MjRlTjlUSktGTW5YYXNIWWZrQk5TSjB6bGRaUXRDK1NGUk9IU2xnVlVxdVVuNnVWdmcvUlFLS294Z3hyMUNwako2a0RlcENxcDJ5Z0ZxK0dJejRjSlQ3aG9aKzlob2tqbnFMZWJUUk5MQ08xbk5vVmxkc3doaGkvV2ordkRsZmY1MVA1cENXTU9GTFRIWXc4R2Q3Vms2ckZkRVpCTTRoSERaaitmbG9rL29ad3JkRFZkL3gxV1ppNlM4eU9Ja1ZWWFo4VlpWM2tiZkZoMndFWmhhUmFLbElKQnVnVExWeWtxbzhyRkZaT2RrWXgvWFl5UktpbmR1MUZRa05QMVR0VU10YUptV3Ric2FTTExiVzAvVldoUEpYL3JnT211VXY1bzAzRFVoSFFRSXViL1JRZGFDb0tTSGFldERENzI3Vld6TDlFeTIxdGVWWk1taWd1b0tYUmgzVWJQSGgrYlVUM0hUY1paRFYwdVc0Ujd4aE5sNmZSZERubzNIamd0bXhjYXpDOU5pOUR1d0JkVE5QNDU2WTVJbW9JZXRtSEVtZFpFMU1mYTE2Q2VVanl5djU0angvWEZpdTRTN2lRbURtSXdRRVNMajFIeTV3RlBVT0hVOXdkUWR4R2EyYVdNalp1aXpHOXA2bkxuQmVDVXVBakQrWmlmSmlSeWZpZmw5cnhxb29KR3RmZGo1Y1d0MkZKYUdBcUpsM0xpMVgyeU9CRTB2UkZoSGxOSEpnTGxZMm9SWmhSdUdXWXpDV05TZEg1VmwxRiswL1VmajZpOWZrSXJmbG4yL0hpclE3VllHUEJqQ2xXVkN1elFobzRiaDJ1eGZzUTdWZTVsZmFyQkowTGQ1SXA2ZlRTeUdEWHQ4S0JxbmZic0VMZ2xwSStycTZRRmZlbzFqaEVTTjI2ZHN3S1MvVTBHeURqaTRqNlRNSVVzdFJia3VnTVRGMzBLZHhyRVR5RmhBbEg5VGFhSjNYME53OUxRY2dKWXZ5WjV0YVFYdkN4TlY2WXpYZnlDc1FBa0lXbE5KdDV4TUQwczZQNmppbTNSaGl5aUVpTGVBK0VtYjd3a1BHbmw5dXdMU2JqRVhHRGJqZlJxN1k2cXEvMWd0VGJHbmNLMlduU3hYcEladGsxTzN3YXpBY0t4aThjS2FuTHd3cnRvRmZBbTVoOWVlQ1JGbVQ3UjVpUVdIei9PSmJJSE01R0NpMnNoejJRRjhlRWVOdks5akRURnlucmFZUGV0a1F4SjQ0Zlp2cVVWOHRoblRSUGc4alRzM093ZkhZMlhvdTZjdkRHYkNkb3IySElXVEJ4aUFvTDh2MzBEUzJ0d3Vwc3prcUZpUWVUOWFXRjg5SlFEdVVWTnRXZ1FKN1VSKzhKTS8xZ3BNV3Z0V0dUcHI0V1ZOSzZpM0NwNk9QQlVvTy9wYlJZWGFUMmFQU29tTDRJa1BISW14NU5YeW82VDZzS1ZDZFAxWDNYTS81VTFTU0JmRTlHMXBnVFNOMTlTVmF0Y1dIcTQ2MVlzY21IRmpNeVNJVTFualo3dlhHTG9tdzFpeGp4MTZ0aDZzam0zMmpLM25ZS0tzbm9YYVF5dGg3dW1nRTNxV1VmOVdLWGFvVEs2bThOTUtOeVV2TVk4SDJBR09Ma0FZUXQvUThLUyt4QSswR3k1b2hBZnNwM0toSk9JYTJNYlFsaW5tUFhNdXFzZkFtS1VWV0FBTExHR1ZRZ29TZnQyaFU3ZDdVWDdUc2dRV1NBTWxpUmhjdWc4Q0JBcVdtOTRIVURLNk5hVWx2V3Fmc1lHUk9NQ0tVYlBVVExzdW8yR2kzZWt0WFU1K29NZ01Lemd1bFMwY2ZWRFRHV21MakcwUmhXUmFxMW0ybEFDRi9uYWpFRldZMTF1QnlneVRBNUQrckJQRGs1eHNyRlJtYWJudEFjVkIvWGZWanZrOUxuSHRtNkJraHBhVW5PbktiY0M5OXNwd3VvSklub3N1RTJqRDJYckNsMC9TNXZNRzNnb3NXOG1YRk1KZldMbzIwR20zS1NVUXQ5T2NuSU05NDhFaTlieHJwOU1pb1VGUUl4ZERMTVFHL1Y4UVVOWDNsd3NLOGR3d0lqZ1lTUlpEYUxPcTJPL012ZFdvWVVMOTJkalVjcThNU2Nqa1BZaUhtZlRUbXBWK3AwVWFMS0NROVd0TkFyQkpYd1FFbDkrSnVvMk1LRC9DblJrUENBU1l4UkRCN2twMisvWnBNK3VxZEJLMXpraFZTNit2U3A2dVBoYXRFYXcrenJ3ayttTjVvSmltbXM1QVhFYXJQa2xhVGs1RHpMbFBITHpldVZXRjN5M3pzdmd4bS9DcUUxcEVzV2wzQlQ2WXlldXlxMVVtakpDSHRjaTNrdXNpOFhPbXZGdFdsbjNJcjNHZnYvNFM0ZlpvVVA1eUxHUHRvRyt1UnoyTzM0cHdlZlhFUTIyK2NITVN3YWJNTk1XdENPT0JtZmJkTXlwRWhZZXQ3Vkh2RUgxQkpxMDFBTmsycnc0YThyWGVnVDRpUnVXcENlTXNtQklwMEFZbFM3bHNQbTl2MzYrT0hCUXhld1o3OHhuc29rUXhjZGFkbkhDYXZ3R0tjbk9FWFBYYzc0cGJ4eXlDMmZHMVpuZDhNK0RQSzBJY2NlRzRaTHkyTDNyS05OTW5hVFR0TElDWE5PWlR1OFVYamErZEdHblBuWDJGQkF6TmhEcldadnB4TUJTYmVwVjhWVWt4cW8rbXMvcW1tQkxQeXkwZ0pxUEl0NVR0MjVQZkVyaWRJT3JaUVFWRStNLzlqVlpOa1V5bjMwWlU0NjZFNHB5bzlQYUZQWGFqcXI5Nkh6ZzhqWkNtMm82aGtaU05IaXhidGRiTDJoVUpmdy83R2dsQjd1U3c0YmJqemJoUVY3bFJ4SnJWS2psaEFrREo5QWpOL29GU2ExVVZqYXArUjVBWFdaTjJvam1KS3orbCt0SVZMN24xdEMrQnB1UUZUSGl0eDNlUituTlIxaEVkZWg5U0NkcUhzOFFtS1gzSFU5NCsvNUxjaUhsbW9xUnljczQrVzJjN0dvOVd6Y3Zmc3QvR2pZalpwd280ZmZmRC9jRlkyQ0EzN1B2dWN5WmZ6OVNTOXBFUnNJTXNUbGt3aFZHWlkyaVdpYXV2Y3hZUHlCNnV3VkE0SWpzcUdJUE0wa0puWDE5ZExRZ0VFa3JkSU9TblloQkdoajNIYXlUYWdVbTh3RkxHR21UNVl2UjJpM3JvaEdpOEFSbTM5aWRNU3hnZ2VzMFk3ZXZRbFlXb2s4dTlPcDZ4eWk0M0xheWJ0QXYra3ZIaHBwVDV0NmlJREo1aTZ4NjFpN1k1bDI0NXFZRWdWMDl3WjlWSzlyYnljaFVMaFU5M0ZYdXlnbndsY083WERqSjRwRlVvQ0M5UGhSejBPN2hDS3A4RWJJRWtsS0lkZml0MkZPODFqOHVYVVk3V2VVc0hUSDM5SGk3cnhZNUNWNzQ5WDBFcHE1c2FXcXQ5WXNVaHI1TngveWF3NVhnOVdHZXl0Tm1vOTJKZmJUMFc0bU1hbWpyZDJwblIzMUhlNVFXV1NFWXRKbUpPMUxxYzdoZEwrWDhkSGVFRWFpKzZpNlY5MU81Y0dIajJndFFPMkNCNndCZTNUNHF1T1kzWGYvckV0R05Sa1JxRjNXUUNlZW5XajIva2pvWVJZa2RwUUxKWC9ZV1hEVHBPaklWWk5wUjI4NER0M1FocmVWSWNubHc2MWFXb29xN0xSWlR1Zkk1UE1HWlMwbUZMU0o5c0FJbCtvK3ZwWm0yMnBYVk9IRW5mcVhVVVNnTmFLbjZiVFRlZVdSUVVLZEx0WDNKcHdqZGNWSzlwN3c5cjR5VU1BZWJ3L2MzbkE1UG5KSERLQ2FQU2Z4OUtaWE9rMUE5ZWRlSEtaakM4emNPRm9JelNoSE95TFhITkZTWEZhWmpWZklKbjdxQUxLMElNNmVUd2V2VGIzRWdlVS9jbWltMUhSR0JuYkVZYk5kVHgrVDJLOHB3b0tIN3N2Q1RNcGZ1Rkt5d1grdG8xMjltclNuNThNL04vc2lVbXU0QzhsWXV6bnl3cisvUmN1Y2dralF5YUlHRml3ZG95VGpjNDAxRHVuUEo5Z0NCK3lWNW5hY01wbWhOYVErcEdPaE5LN3NraXdzdjQzNlhqODZNQy9VOXlhUHNlT1ZuMldqVENkbFJCNWx2S3FUemt0R1plSFpxNmhPZ2R3bHpLUVA3Y3pXMmVsdm9vOEtOWWRLcjkvaWdYWjkzSXBmUEppRm0wTjl0SmkranJYa3g4NndPaTZRakJhcmx0VUdNMGgxSDYvZnFLZFB3dlE3Y3pCdnBDVnNEVlZKMzlONGpXZ2VSanVzSjExSFp0Y2p1NTc1ZDdtcVI4RHZLYndKS3c5c3dJS1dFWENwNTh2QnRxRnpVTjVGTHVuNTd4dHhXOGpuMVA3MjBLTFJvdmQwUFZXVmhaTnFQWksyMldlYSs5T3JMbHhDaDY4cE9tWkJmeEV4NDRmRTFVRmw5cS96WUUwSDRaRWdPb1J0Z3grL0dLV1NCMGd5bVhGN0RtWkVJcDNSZDgya1J0dm5zNFBNOUNOTzZPNVZBMnN0ZllWS3ZSWWdJbnJwNk96VmtSUngzK210VUlRRXVWUWMxdVAyNHE3SFhYSHB4K011ekRTaWpBZi81a2IxN2FwMUk0b3JQb1R6MEoweDVpUzBRWXVPVXdxN0xXSVF1VGdIRmFvMWdESTZlbVFwWFVJTkZNV1F5QTUrZ2VaTWZ6K2VlZCtyUGZLQlRtZWJSWDMwZGhwdmxkbFZ1RUM2V2ZPLzZpTWJVdDNIL2ZqRHUxNzhoZGFDSWs3Q3BLdHAwOWJWUVZXWE9rVEV1ZWc4Nmt4a2x0cVZUdldHZDEyeE9mMnI4RGZyRFlaTVg2SGk1UjF2NEprdmxzSXZSeVFwSmF5ai95MzdmSmo3YWp2cDhzeGpYVWZXR0E3ZFFxWjU3RFFLSWFsLzJtSVg2SkRNdU4yeFdqcW9LcnhyTUhheVZXKzM0eDA2bnFBclhVUWlqRjJxbnMyY1NscWozRTg5dlI4YmoyanhPVVNMdnBwRmR1TFc2M1d6TTdOakdtTFY1ODNQVERyeUtmU0JwTlQ3SUcxRW9xMnZHazJOVWNacVA5cnc4Y1F6N1ZpbGtjRm9FUGxMTzNaclRJT0NpZlFNVWRodVByYllyY1dXb202cGNlR0pkZEVBR0RGOXNXdDJ2bTZtbGVvK1hydlJGZGhrcVlaQ3VZK3FJdzFzYzE4emFXTWxVUXIrdTRYeDIwZy8vZkNvTzJKV1o4bU8xekhydlY5aTA3R2RNZVB1YlQ2SVIycWV4ZjBybjhlSlZuTWdjMmw1NFpaTFQvMTFqMGxBVjBXZ2pVUXpmOStLNTlaNkREOStvWkRSUUhyUlphKzFZaHAxS21XYUxNSmExWWRHMG5ONzFPNWxHUXRlb1B3M3FGUWFTcWIwdjVzKytFS2ZWbzA0OVQzNUJoZlBJc0ZOQmk5NFJGY1NqS2ZoQzVHa2huZXRtdkswWDZ4S2Rka0tRZituV1R1UzhZbE9CeTdpdlVWU2Y4VFJIZ0NUWXhvNnFvOUkzMHlITDRtZDJ1cmNBdm1xWmh4ZFZXK3hBL2g2MmppNGJCTjl6S2VEUm11ZzJjMzd0R1A3aGlmYlVXMjBYRWU2L251ZXBIeElYMis0QTUzVzUzWnZjdEdNUmo5b1JCQ3RYdFdPSDd6aVFwMkpIYi80T0pIby81R2pFaUpweFQ2Qnp2VHgyTzhRSURaWjN2QWl6VzUwUWtLWUNuRk05anFLczlDdDJSTVJEay94alpGeVNReEtoWk1lYVRrZ3luN3ZYMU9uVEh6c3M3OEUxRHJ4MVBHQ1hxV1lNR0FVaHZjdVErK3NBdHI1N3NHQmxzUFlUOWYyYjJyeGNmMEdhczZnSkdadEswUDI0ZG13K0hwRlpUMXJvaDAza3g0OFZlNDdqeHIxOUZTVkZ0VHJEKzFMaDREUjVoalFoalFuMmVMWDFmczdkMWliK05BSmJhNnBwOFgyeVVNdGFEd3VvNkNQaERvNkViWFdia00xcVp2Q05sV2tjcmlmVkE1YlVsZEZ6bGtnUUcweVdad0pSQU8zWVBSN3FJMjcrME0weGYwc0dFNGJveHJicUg5UTMydHNvclVrTXExVUN4cXhHMC9DbUZJTG1TbkxhS1QrbHVYeDQvT0RwNWFIb0dNVTljOGpvcC8yb0QxelpBaFJHK3MxN01JK0x0YmV4dEhoY3k1aFdVUTR0Ui8zMHpsSjJsbGpiSndTaS9IK3ZEemFPQVV4LzlUSURsRXpqOFN5VHl6VnowYitFTHNidnNMbTQ3dGlackQ5UkMzRUZZL3paZS9HeVpKL0R6Qi9XL3ZRY0pJUlpKNzR2Ykg2eVhVNE9DTnZta2xpcnlFSktubU9qcnk5SjRkT1A2VERzK2pyWGtzVTZUYXcyVnJDSFBYK0FDclUyK0JucHA4ODhNMXpvb0Y0bGRJVzVyRzZOQ1J3Q3FmSkp2ejRDYUgrUzZlVmRzWUpPc0lmdm9tTG5xN3Q0K0lkVGJlMjYxYkdiN2ZhOGZpRXVmaVhEMytGMnNhdk85UDJVV2xsV3hOYUIvd096bTl1Z3JQaHV4aEVFc0d2djVmVjhVYUtxRnpPUEk4N2IxRytyVXFuSXQ2ZWkwbDBETUZIdTJtZGhTd1F2ajNhamlMZFpPbUxUeldDeEprSEdOYzQ0eERnUG02d2lON1ZyU2pVTm9zbS9ncjNyZjR0dHBIS0pxbE9rdUhxOHhwS0NodncyT1E3a0pkbHBObEthb2tabjFtdjBDZndsSXFVRExaaittRGxTZmRQQzFOUFJuMGtReGVISHhtQk5FT0ErempRTFl1NytuNVE0TXpINGttL3hVMWxaTytVWkRlaGVEUVdYVHNkUlhTNEZMdllDQ3g0ams3OXJJMXRTWFdJRmgzdm9vVXBqVFZMN093NUJpUFE3UWh3SDA4RGlWL3BCUTVTK3doTG44c0dYSXludm5pSmRQOTdsYUNFL25zNmUrQU9PdnBoV3RsM0lXWFEwUXdKVlRhcGllalVUenJQL0NVNlozN0dlQnRHbGxnZ0pDUmhLaWQyUXg4OVFKL2VJNHVpYWxxQVk4Y0laQ1lDM01lN1ZjZHYxR25HRlkzQTB2NS93TXF2UHlISmN5VTJITjFxRk0zVXIzOU9YOXh5M2xSVWxVNUJsbzFzTjlrbGhFQXpuYnE0OE8zT0xib2xWREFuWWdTNkNJRXp1WStuSGVNWGJXNlJMTGp5N0FtQnEvN2tVYXc5OURtMmtPWFB6aE4xT09GcVFwTTd1STJrdDdNQXZiSjZvREM3RDBZVkRzZDRHalNHOUNqcG9tN0R4VEFDakFBamtKa0lwQ1hqVjBOWm5OdVBwUGNyQXBmYW4rOFpBVWFBRVdBRUVrT0FWendUdzQxVE1RS01BQ09Rc1FndzQ4L1lwbVBDR1FGR2dCRklEQUZtL0luaHhxa1lBVWFBRWNoWUJKanhaMnpUTWVHTUFDUEFDQ1NHQURQK3hIRGpWSXdBSThBSVpDd0N6UGd6dHVtWWNFYUFFV0FFRWtPQUdYOWl1SEVxUm9BUllBUXlGZ0ZtL0JuYmRFdzRJOEFJTUFLSkljQ01QekhjT0JVandBZ3dBaG1MQURQK2pHMDZKcHdSWUFRWWdjUVFZTWFmR0c2Y2loRmdCQmlCakVXQUdYL0dOaDBUemdnd0FveEFZZ2d3NDA4TU4wN0ZDREFDakVER0lzQ01QMk9iamdsbkJCZ0JSaUF4QkpqeEo0WWJwMklFR0FGR0lHTVJZTWFmc1UzSGhETUNqQUFqa0JnQ3pQZ1R3NDFUTVFLTUFDT1FzUWlZTVg3WjcvVWNFN1U2MnVUUDJNcDFOZUdNVlZjanp1VXhBb3lBR1FJaEhpNGJoUnN4ZmhIUjUyazd0a0VrZU9JdE56Ti9JK1IwZm9McEM2ellNUUtNQUNPUURnaUVlTGlQYUlsaS9wSUJnV0l3S0Jnd2J0YkY1MTN6aCtVV2l6M2ZJQTU3TVFLTUFDUEFDS1FwQXJMUDA3VHpIeis5OFdETjgrdUp4RWE2TktvYnF3bmQxdVlERzl4dEo3NzZ1TWRaRi9XWHJOa0ZGcXN0MnlRdWV6TUNqQUFqd0Fpa0FRSStqK3NiZC9PQlQzZjk0NmR6RDIxOFpTZVIxRXhYbENyQ1NPSVg1RHZvRXBKK0g3b0s2TXFpUzh3RXpPSlRFRHRHZ0JGZ0JCaUJia1JBcUhTRVpOOU9sNUR5ajlObHlQaHRGR0Rrdk9SNU1oVGdvbi9CK01Yc2dCbC9DQlQrWXdRWUFVWWd6UkFJck04U1RZTHh0OUFsZUxqZzVWR3VJMFl1d3V5aFN3d1FMUEZId2NjZWpBQWp3QWlrRFFLS3hDK1l2U2QwUlMzc0NtbzdZdndpWERnUlI3a0NIdnpEQ0RBQ2pBQWprSllJQ0VhdlhHbEpJQlBGQ0RBQ2pBQWp3QWd3QW93QUk4QUlNQUtwUnVEL0FlYm14anRUdXMwT0FBQUFBRWxGVGtTdVFtQ0NcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGltZyBzdHlsZT17YnV0dG9uU3R5bGV9IHNyYz17IGdvb2dsZSB9IGFsdD1cIkxvZyBpbiB3aXRoIEdvb2dsZVwiIG9uQ2xpY2s9eyB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcykgfS8+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZEV4cGxvcmVNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9FWFBMT1JFX1RZUEUgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfVFlQRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FWFBMT1JFX05BVFVSRSA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9OQVRVUkVcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9NT01FTlRTID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlRXhwbG9yZU1vbWVudHMobW9tZW50c0RhdGEsIHR5cGUsIG5hdHVyZSwgbG9hZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX01PTUVOVFMsXG5cdFx0ZGF0YToge1xuXHRcdFx0bW9tZW50c0RhdGEsIHR5cGUsIG5hdHVyZSwgbG9hZFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEV4cGxvcmVNb21lbnRzKHR5cGUsIG5hdHVyZSwgbG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9sb2FkPScgKyBsb2FkICsgJyZuYXR1cmU9JyArIG5hdHVyZSArICcmdHlwZT0nICsgdHlwZTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEV4cGxvcmVNb21lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRXhwbG9yZU1vbWVudHMoanNvbiwgdHlwZSwgbmF0dXJlLCBsb2FkKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEV4cGxvcmVUeXBlKHR5cGUsIG5hdHVyZSwgbmV3VHlwZSkge1xuXHRpZiAobmV3VHlwZSA9PT0gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfVFlQRSxcblx0XHRcdGRhdGE6IG51bGxcblx0XHR9XG5cdH0gZWxzZSBpZiAobmF0dXJlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX1RZUEUsXG5cdFx0XHRkYXRhOiBuZXdUeXBlXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZWFkRXhwbG9yZU1vbWVudHMobmV3VHlwZSwgbmF0dXJlLCAwKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RXhwbG9yZU5hdHVyZShuYXR1cmUsIHR5cGUsIG5ld05hdHVyZSkge1xuXHRpZiAobmV3TmF0dXJlID09PSAtMSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTkFUVVJFLFxuXHRcdFx0ZGF0YTogbmV3TmF0dXJlXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZWFkRXhwbG9yZU1vbWVudHModHlwZSwgbmV3TmF0dXJlLCAwKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBkb21haW5VcmwsIHJlYWRIb21lTW9tZW50c0FwaSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9IT01FX01PTUVOVFMgPSBcImhvbWUvQ0hBTkdFX0hPTUVfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBjaGFuZ2VIb21lTW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0hPTUVfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRIb21lTW9tZW50cyhsb2FkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEhvbWVNb21lbnRzQXBpICsgJz9sb2FkPScgKyBsb2FkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlSG9tZU1vbWVudHMoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRNb21lbnRQYWdlQXBpLCBkZWxldGVNb21lbnRQYWdlQXBpLCB1cGRhdGVNb21lbnRMaWtlQXBpLCBcblx0cmVhZE1vbWVudENvbW1lbnRzQXBpLCBjcmVhdGVNb21lbnRDb21tZW50QXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX01PTUVOVF9QQUdFID0gXCJtb21lbnQvQlVJTERfTU9NRU5UX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX01PTUVOVF9ERUxFVEUgPSBcIm1vbWVudC9TSE9XX01PTUVOVF9ERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9VU0VSX1BBR0UgPSBcIm1vbWVudC9SRURJUkVDVF9VU0VSX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTU9NRU5UX0xJS0UgPSBcIm1vbWVudC9DSEFOR0VfTU9NRU5UX0xJS0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9DT01NRU5UU1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NTUVOVF9FTVBUWSA9IFwibW9tZW50L1NIT1dfQ09NTUVOVF9FTVBUWVwiO1xuZXhwb3J0IGNvbnN0IEFERF9NT01FTlRfQ09NTUVOVCA9IFwibW9tZW50L0FERF9NT01FTlRfQ09NTUVOVFwiO1xuXG5mdW5jdGlvbiBidWlsZE1vbWVudFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX01PTUVOVF9QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkTW9tZW50UGFnZShqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb21lbnREZWxldGUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0hPV19NT01FTlRfREVMRVRFXG5cdH1cbn1cblxuZnVuY3Rpb24gcmVkaXJjdFVzZXJQYWdlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFRElSRUNUX1VTRVJfUEFHRVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNb21lbnRQYWdlKHVzZXJJZCwgdXNlclRva2VuLCBtb21lbnRJZCwgcGV0SWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVNb21lbnRQYWdlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlZGlyY3RVc2VyUGFnZSgpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9tZW50TGlrZShhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9NT01FTlRfTElLRSxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb24sIHVzZXJJZFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW9tZW50TGlrZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZU1vbWVudExpa2VBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J21vbWVudCc6IG1vbWVudElkLFxuXHRcdFx0XHQnYWN0aW9uJzogYWN0aW9uXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9tZW50Q29tbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9NT01FTlRfQ09NTUVOVFMsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZE1vbWVudENvbW1lbnRzKG1vbWVudElkLCBjb21tZW50TG9hZCwgY29tbWVudEFkZGVkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlQYXJhbXMgPSAnP2lkPScgKyBtb21lbnRJZCArICcmbG9hZD0nICsgY29tbWVudExvYWQgKyAnJmFkZD0nICsgY29tbWVudEFkZGVkO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkTW9tZW50Q29tbWVudHNBcGkgKyBhcGlQYXJhbXMpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRDb21tZW50cyhqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb21tZW50RW1wdHkoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0hPV19DT01NRU5UX0VNUFRZXG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZE1vbWVudENvbW1lbnQodXNlcklkLCBjb250ZW50KSB7XG5cdGNvbnN0IGRhdGEgPSBbXG5cdFx0Y29udGVudCxcblx0XHRkb21haW5VcmwgKyAnL2ltZy91c2VyLycgKyB1c2VySWQgKyAnLmpwZycsXG5cdFx0Jy91c2VyLycgKyB1c2VySWQsXG5cdFx0bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XTtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfTU9NRU5UX0NPTU1FTlQsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9tZW50Q29tbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIGNvbnRlbnQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVNb21lbnRDb21tZW50QXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2NvbnRlbnQnOiBjb250ZW50XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZE1vbWVudENvbW1lbnQodXNlcklkLCBjb250ZW50KSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvbW9tZW50LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFBldFBhZ2VBcGksIHVwZGF0ZVBldFdhdGNoQXBpLCBjcmVhdGVQZXRNb21lbnRBcGksXG5cdHJlYWRQZXRNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1BFVF9QQUdFID0gXCJwZXQvQlVJTERfUEVUX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQgPSBcInBldC9TSE9XX0FDQ09VTlRfUkVRVUlSRURcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX1dBVENIID0gXCJwZXQvQ0hBTkdFX1BFVF9XQVRDSFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QRVRfTU9NRU5UID0gXCJwZXQvQUREX1BFVF9NT01FTlRcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX01PTUVOVFMgPSBcInBldC9DSEFOR0VfUEVUX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRQZXRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9QRVRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFBldFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWNjb3VudFJlcXVpcmVkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQUNDT1VOVF9SRVFVSVJFRFxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfV0FUQ0gsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQZXRXYXRjaCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVBldFdhdGNoQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRQZXRNb21lbnQoaW5mbywgcGV0SWQsIG1lc3NhZ2UpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfUEVUX01PTUVOVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCBwZXRJZCwgbWVzc2FnZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBldE1vbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGltYWdlLCBtZXNzYWdlKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRsZXQgdHlwZSA9IGltYWdlLnR5cGU7XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCIvXCIpWzFdO1xuXHRcdHR5cGUgPSBcIi5cIiArIHR5cGU7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlLCB0eXBlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInBldFwiLCBwZXRJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCB1c2VySWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInRva2VuXCIsIHVzZXJUb2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVBldE1vbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRQZXRNb21lbnQocmVzdWx0LCBwZXRJZCwgbWVzc2FnZSkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUGV0TW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVF9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFBldE1vbWVudHMocGV0SWQsIGxvYWQsIGFkZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gJz9hZGQ9JyArIGFkZCArICcmbG9hZD0nICsgbG9hZCArICcmcGV0PScgKyBwZXRJZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFBldE1vbWVudHNBcGkgKyBwYXJhbXMpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VQZXRNb21lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3BldC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRVc2VyUGFnZUFwaSwgcmVhZFVzZXJNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1VTRVJfUEFHRSA9IFwidXNlci9CVUlMRF9VU0VSX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfVVNFUl9NT01FTlRTID0gXCJ1c2VyL0NIQU5HRV9VU0VSX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRVc2VyUGFnZShpbmZvLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9VU0VSX1BBR0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFVzZXJQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFVzZXJQYWdlKGpzb24sIHBhcnNlSW50KGlkKSkpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVzZXJNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfVVNFUl9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJNb21lbnRzKGJlbG9uZywgbG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRVc2VyTW9tZW50c0FwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQnYmVsb25nJzogYmVsb25nLFxuXHRcdFx0XHQnbG9hZCc6IGxvYWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVVzZXJNb21lbnRzKGpzb24pKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Y29tbWVudC5jb21tZW50X2NvbnRlbnQsXG5cdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCArIFwiLmpwZ1wiLFxuXHRcdFx0XCIvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCxcblx0XHRcdG5ldyBEYXRlKGNvbW1lbnQuY29tbWVudF90aW1lKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9yZWR1Y2Vycy9hY2NvdW50JztcbmltcG9ydCBob21lIGZyb20gJy4vcmVkdWNlcnMvaG9tZSc7XG5pbXBvcnQgcGV0IGZyb20gJy4vcmVkdWNlcnMvcGV0JztcbmltcG9ydCB1c2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJy4vcmVkdWNlcnMvbW9tZW50JztcbmltcG9ydCBleHBsb3JlIGZyb20gJy4vcmVkdWNlcnMvZXhwbG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGFjY291bnQsXG5cdGhvbWUsXG5cdG1vbWVudCxcblx0cGV0LFxuXHR1c2VyLFxuXHRleHBsb3JlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJpbXBvcnQgeyBDSEFOR0VfQUNDT1VOVF9EQVRBLCBDTEVBUl9BQ0NPVU5UX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2FjY291bnQnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdGlkOiBudWxsLFxuXHRuYW1lOiBudWxsLFxuXHR0b2tlbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRpZiAoc3RhdGUuaWQgPT09IG51bGwgJiYgYWN0aW9uLmRhdGFbMF0gIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRpZDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF0pLFxuXHRcdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRcdHRva2VuOiBhY3Rpb24uZGF0YVsyXVxuXHRcdFx0XHR9O1x0XG5cdFx0XHR9XG5cdFx0Y2FzZSBDTEVBUl9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdHRva2VuOiBudWxsXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfRVhQTE9SRV9UWVBFLCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsIENIQU5HRV9FWFBMT1JFX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9leHBsb3JlJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdHR5cGU6IG51bGwsXG5cdG5hdHVyZTogbnVsbCxcblx0bW9tZW50c0RhdGE6IFtdLFxuXHRsb2FkOiAwLFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfVFlQRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0eXBlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9OQVRVUkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50cyA9IGFjdGlvbi5kYXRhLmxvYWQgPT09IDAgPyBcblx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhKSA6XG5cdFx0XHRcdHN0YXRlLm1vbWVudHNEYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50c0RhdGEpKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogbmV3TW9tZW50cyxcblx0XHRcdFx0dHlwZTogYWN0aW9uLmRhdGEudHlwZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YS5uYXR1cmUsXG5cdFx0XHRcdGxvYWQ6IGFjdGlvbi5kYXRhLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBDSEFOR0VfSE9NRV9NT01FTlRTIH0gZnJvbSAnLi4vYWN0aW9ucy9ob21lJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgbW9tZW50cyBkYXRhXG5cdGRhdGE6IFtdLFxuXHQvL3JlY29yZCBsb2FkIG51bWJlclxuXHRsb2FkOiAwLFxuXHQvL2FsbG93IGxvYWQgb3Igbm90XG5cdGxvY2tlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfSE9NRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfTU9NRU5UX1BBR0UsIFNIT1dfTU9NRU5UX0RFTEVURSwgUkVESVJFQ1RfVVNFUl9QQUdFLCBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdENIQU5HRV9NT01FTlRfQ09NTUVOVFMsIFNIT1dfQ09NTUVOVF9FTVBUWSwgQUREX01PTUVOVF9DT01NRU5UXG59IGZyb20gJy4uL2FjdGlvbnMvbW9tZW50JztcbmltcG9ydCBidWlsZENvbW1lbnRzIGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRDb21tZW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0bW9tZW50RGF0YTogW10sXG5cdGZhbWlseURhdGE6IFtdLFxuXHRsaWtlRGF0YTogW10sXG5cdGNvbW1lbnREYXRhOiBbXSxcblx0c2hvd0NvbmZpcm06IGZhbHNlLFxuXHRjb21tZW50TG9ja2VyOiBmYWxzZSxcblx0Y29tbWVudEFkZGVkOiAwLFxuXHRjb21tZW50TG9hZDogMCxcblx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRyZWRpcmVjdFVzZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfTU9NRU5UX1BBR0U6XG5cdFx0XHRjb25zdCBsaWtlRGF0YSA9IGFjdGlvbi5kYXRhWzJdLm1hcChmdW5jdGlvbihsaWtlKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludChsaWtlLnVzZXJfaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjb21tZW50RGF0YSA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGFbM10pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBbXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ub3duZXJfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLnJlbGF0aXZlX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XSxcblx0XHRcdFx0bGlrZURhdGEsXG5cdFx0XHRcdGNvbW1lbnREYXRhLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDVcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX01PTUVOVF9ERUxFVEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0NvbmZpcm06IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9VU0VSX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RVc2VyOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9MSUtFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxpa2VEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS5saWtlRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUubGlrZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGxpa2UpIHsgcmV0dXJuIGxpa2UgIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfQ09NTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdDb21tZW50cyA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbLi4uc3RhdGUuY29tbWVudERhdGEsIC4uLm5ld0NvbW1lbnRzXSxcblx0XHRcdFx0Y29tbWVudExvYWQ6IHN0YXRlLmNvbW1lbnRMb2FkICsgMSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAxMFxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQ09NTUVOVF9FTVBUWTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IFwiQ29tbWVudCBjYW7igLJ0IGJlIGVtcHR5XCJcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfTU9NRU5UX0NPTU1FTlQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuY29tbWVudERhdGFdLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IG51bGwsXG5cdFx0XHRcdGNvbW1lbnRBZGRlZDogc3RhdGUuY29tbWVudEFkZGVkICsgMVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9QRVRfUEFHRSwgU0hPV19BQ0NPVU5UX1JFUVVJUkVELCBDSEFOR0VfUEVUX1dBVENILCBBRERfUEVUX01PTUVOVCwgQ0hBTkdFX1BFVF9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCB7IG5vR2V0QWJpbGl0eSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9pbmRpY2F0ZSBwZXQgYmVsb25nIHRvIGN1cnJlbnQgdXNlciBvciBub3Rcblx0cGV0T3duZXI6IGZhbHNlLFxuXHQvL3N0b3JlIGRhdGEgZm9yIG9uZSBwZXRcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0J3MgZmFtaWx5XG5cdGZhbWlseURhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldHMgZnJpZW5kXG5cdGZyaWVuZERhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIGltYWdlIGdhbGxlcnlcblx0Z2FsbGVyeURhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vaW5kaWNhdGUgYWRkIGhvdyBtYW55IGltYWdlc1xuXHRhZGQ6IDAsXG5cdC8vc3RvcmUgYWxsIHdhdGNoZXIgb2YgY3VycmVudCBwZXRcblx0d2F0Y2hEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBub3RpY2UgdXNlciBsb2dpbiBvciBub3Rcblx0bG9naW5SZXF1aXJlZDogZmFsc2UsXG5cdC8vdHJpZ2dlciByZXNldCBmdW5jdGlvbiBmb3IgcG9zdCBpbWFnZVxuXHRyZXNldDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9QRVRfUEFHRTpcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10pO1xuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPSBhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9PT0gbnVsbCA/IFxuXHRcdFx0XHRudWxsIDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10pO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBhY3Rpb24uZGF0YVsxXSxcblx0XHRcdFx0ZnJpZW5kRGF0YTogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YVszXSksXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGFbNF0ubWFwKGZ1bmN0aW9uKHdhdGNoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHdhdGNoLnVzZXJfaWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQUNDT1VOVF9SRVFVSVJFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpblJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX1dBVENIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUud2F0Y2hEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS53YXRjaERhdGEuZmlsdGVyKGZ1bmN0aW9uKHdhdGNoKSB7IHJldHVybiB3YXRjaCAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX1BFVF9NT01FTlQ6XG5cdFx0XHRjb25zdCBuZXdNb21lbnQgPSBbXG5cdFx0XHRcdGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyBhY3Rpb24uZGF0YS5wZXRJZCArIFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGFjdGlvbi5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMF1cblx0XHRcdF07XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGEuaW5mby5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgYWJpbGl0eSA9IG5vR2V0QWJpbGl0eShhY3Rpb24uZGF0YS5pbmZvWzJdKTtcblx0XHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IHsuLi5zdGF0ZS5wZXREYXRhfTtcblx0XHRcdFx0bmV3QWJpbGl0eVthYmlsaXR5XSA9IHBhcnNlSW50KHN0YXRlLnBldERhdGFbYWJpbGl0eV0pICsgMTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxLFxuXHRcdFx0XHRcdHBldERhdGE6IG5ld0FiaWxpdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9VU0VSX1BBR0UsIENIQU5HRV9VU0VSX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgdXNlciBkYXRhXG5cdHVzZXJEYXRhOiBbXSxcblx0Ly9zdG9yZSByZWxhdGl2ZSBkYXRhXG5cdHJlbGF0aXZlRGF0YTogW10sXG5cdC8vc3RvcmUgcGV0cyBsaXN0XG5cdHBldHNEYXRhOiBbXSxcblx0Ly9zdG9yZSBtb21lbnQgaW1hZ2VzXG5cdG1vbWVudERhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgbW9tZW50IGhvdyBtYW55IHRpbWVzXG5cdGxvYWQ6IDEsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIGltYWdlcyBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9zdG9yZSBwZXQgbGlzdFxuXHRiZWxvbmdEYXRhOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfVVNFUl9QQUdFOlxuXHRcdFx0bGV0IHJlbGF0aXZlRGF0YSA9IFtdO1xuXHRcdFx0YWN0aW9uLmRhdGEuaW5mb1sxXS5mb3JFYWNoKGZ1bmN0aW9uKHBldCkge1xuXHRcdFx0XHRpZiAocGV0LnJlbGF0aXZlX2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVEYXRhLnB1c2goXG5cdFx0XHRcdFx0XHRwYXJzZUludChwZXQucmVsYXRpdmVfaWQpID09PSBhY3Rpb24uZGF0YS51c2VySWQgPyBcblx0XHRcdFx0XHRcdFx0cGFyc2VJbnQocGV0Lm93bmVyX2lkKSA6IHBhcnNlSW50KHBldC5yZWxhdGl2ZV9pZClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XHRcblx0XHRcdH0pO1xuXHRcdFx0YWN0aW9uLmRhdGEuaW5mb1swXS51c2VyX2lkID0gcGFyc2VJbnQoYWN0aW9uLmRhdGEuaW5mb1swXS51c2VyX2lkKTtcbiAgICAgIHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyRGF0YTogYWN0aW9uLmRhdGEuaW5mb1swXSxcblx0XHRcdFx0cGV0c0RhdGE6IGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGJlbG9uZ0RhdGE6IGFjdGlvbi5kYXRhLmluZm9bM10sXG5cdFx0XHRcdG1vbWVudERhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5pbmZvWzJdKSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5pbmZvWzJdLmxlbmd0aCAhPT0gMjAsXG5cdFx0XHRcdHJlbGF0aXZlRGF0YTogWy4uLm5ldyBTZXQocmVsYXRpdmVEYXRhKV1cblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfVVNFUl9NT01FTlRTOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IHN0YXRlLm1vbWVudERhdGEuY29uY2F0KGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSkpLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLmpzIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy5qcyc7XG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBCdW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgc3RhdGUgPSB7XG4gICAgbW9kOiBudWxsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMubG9hZCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5sb2FkICE9PSB0aGlzLnByb3BzLmxvYWQpIHtcbiAgICAgIHRoaXMubG9hZChuZXh0UHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBudWxsIH0pO1xuICAgIHByb3BzLmxvYWQoKG1vZCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZDogbW9kLmRlZmF1bHQgPyBtb2QuZGVmYXVsdCA6IG1vZCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLm1vZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0Y2hhbmdlQWNjb3VudERhdGEsIGRlbGV0ZUFjY291bnRUb2tlbiwgcmVhZEFjY291bnREYXRhXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBHb29nbGVsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0dvb2dsZWxvZ2luJztcbmltcG9ydCBGYWNlYm9va2xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbic7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93RHJvcDogZmFsc2UsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cblx0Z0xvZ2luKGRldGFpbCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdnb29nbGUnLCBkZXRhaWwudG9rZW4pO1xuXHRcdH1cblx0fVxuXHRmTG9naW4ocmVzcG9uc2UsIHRva2VuKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2ZhY2Vib29rJywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHRzaG93RHJvcCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0Ryb3A6ICF0aGlzLnN0YXRlLnNob3dEcm9wIH0pO1xuXHR9XG5cdGxvZ091dCgpIHtcblx0XHRpZiAoRkIpIHtcblx0XHRcdEZCLmxvZ291dCgpO1xuXHRcdH1cblx0XHRpZiAoZ2FwaSkge1xuXHRcdFx0bGV0IGF1dGgyID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdGF1dGgyLnNpZ25PdXQoKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5kZWxldGVBY2NvdW50VG9rZW4oXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW5cblx0XHQpO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBsb2dpblN0eWxlID0gdGhpcy5zdGF0ZS5zaG93RHJvcCA/IFwiaGVhZGVyLWRyb3BcIiA6IFwiaGVhZGVyLWRyb3AtaGlkZVwiO1xuXHRcdGNvbnN0IHVzZXJJbmZvID0gKFxuXHRcdFx0PGRpdiBpZD1cImhlYWRlci1sb2dpblwiIG9uQ2xpY2s9eyB0aGlzLnNob3dEcm9wLmJpbmQodGhpcykgfT5cblx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsID8gJ0xvZ2luJyA6IHRoaXMucHJvcHMuYWNjb3VudC5uYW1lIH1cblx0XHRcdFx0PC9oNT5cblx0XHRcdFx0PGltZyBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1kcm9wZG93bi5wbmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9nb3V0Qm9hcmQ7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd0Ryb3AgJiYgdGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsKSB7XG5cdFx0XHRsb2dvdXRCb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3BcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHRoaXMucHJvcHMudXNlcklkIH0+PGg1PkhvbWU8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvd2F0Y2hcIiB9PjxoNT5XYXRjaCBMaXN0PC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3JlcXVlc3RcIiB9PjxoNT5SZXF1ZXN0czwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9zZXR0aW5nXCIgfT48aDU+U2V0dGluZzwvaDU+PC9hPlxuXHRcdFx0XHRcdDxoNiBpZD1cImhlYWRlci1kcm9wLWxvZ291dFwiIG9uQ2xpY2s9eyB0aGlzLmxvZ091dC5iaW5kKHRoaXMpIH0+TG9nIE91dDwvaDY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNSBpZD1cImhlYWRlci1kZXNjXCI+SG9tZXBhZ2UgZm9yIHBldHM8L2g1PlxuXHRcdFx0XHR7IHVzZXJJbmZvIH1cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL2V4cGxvcmVcIj5cblx0XHRcdFx0XHQ8aDU+RXhwbG9yZTwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxoNT5QdWJsaWM8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17IGxvZ2luU3R5bGUgfT5cblx0XHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZHJvcC1ub3RpY2VcIj5DbGljayB0byBzaWduIGluIG9yIHNpZ24gdXA8L2g1PlxuXHRcdFx0XHRcdDxHb29nbGVsb2dpbiBcblx0XHRcdFx0XHRcdGNsaWVudElkPXsgZ29vZ2xlQ2xpZW50SWQgfSBcblx0XHRcdFx0XHRcdHdpZHRoPVwiMjAwcHhcIlxuXHRcdFx0XHRcdFx0Z0xvZ2luPXsgdGhpcy5nTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZhY2Vib29rbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGZhY2Vib29rQ2xpZW50SWQgfVxuXHRcdFx0XHRcdFx0d2lkdGg9XCIxOTRweFwiXG5cdFx0XHRcdFx0XHRmTG9naW49eyB0aGlzLmZMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHR7IGxvZ291dEJvYXJkIH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IGNoYW5nZUFjY291bnREYXRhLCBkZWxldGVBY2NvdW50VG9rZW4sIHJlYWRBY2NvdW50RGF0YSB9XG4pKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5pbXBvcnQgSG9tZSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4uL3BhZ2VzL0hvbWUnO1xuaW1wb3J0IEV4cGxvcmUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuLi9wYWdlcy9FeHBsb3JlJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgVXNlciBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4uL3BhZ2VzL1VzZXInO1xuaW1wb3J0IE1vbWVudCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi4vcGFnZXMvTW9tZW50JztcbmltcG9ydCBUZXJtcyBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT10ZXJtcyEuLi9wYWdlcy9UZXJtcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IChwcm9wcykgPT4gKFxuICA8QnVuZGxlIGxvYWQ9eyBjb21wb25lbnQgfT5cbiAgICB7XG4gICAgICAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPiA6IG51bGxcbiAgICB9XG4gIDwvQnVuZGxlPlxuKTtcblxuY29uc3QgZ2V0Um91dGVyID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoSG9tZSkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9leHBsb3JlXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEV4cGxvcmUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcGV0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQZXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvdXNlci86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVXNlcikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi90ZXJtc1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChUZXJtcykgfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxoNj7CqSAyMDE3LTIwMTggU21pbGluZ3MubWU8L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViXCIgdGFyZ2V0PVwiX19ibGFua1wiPlNvdXJjZSBDb2RlPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjYvVGhvdXNhbmRheS1XZWIvaXNzdWVzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlJlcG9ydDwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHA6Ly9nbHlwaGljb25zLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5HbHlwaGljb25zPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX19ibGFua1wiPlRlcm1zICYgUHJpdmFjeSBQb2xpY3k8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNlwiIHRhcmdldD1cIl9fYmxhbmtcIj5BYm91dDwvYT48L2g2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRXhwbG9yZS5qc1wiKSk7XG5cdH0sIFwiZXhwbG9yZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuL3NyYy9wYWdlcy9FeHBsb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0hvbWUuanNcIikpO1xuXHR9LCBcImhvbWVcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWhvbWUhLi9zcmMvcGFnZXMvSG9tZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Nb21lbnQuanNcIikpO1xuXHR9LCBcIm1vbWVudFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9bW9tZW50IS4vc3JjL3BhZ2VzL01vbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9QZXQuanNcIikpO1xuXHR9LCBcInBldFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4vc3JjL3BhZ2VzL1BldC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9UZXJtcy5qc1wiKSk7XG5cdH0sIFwidGVybXNcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4vc3JjL3BhZ2VzL1Rlcm1zLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1VzZXIuanNcIikpO1xuXHR9LCBcInVzZXJcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXVzZXIhLi9zcmMvcGFnZXMvVXNlci5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjaGVhZGVye1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDUwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4jaGVhZGVyLWRlc2N7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuLmhlYWRlci1uYXZpe1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1JTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXItbG9nb3tcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRtYXJnaW4tbGVmdDogMTAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNoZWFkZXItbG9naW57XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRlci1sb2dpbiBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbiNoZWFkZXItbG9naW4gaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1kcm9we1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuI2hlYWRlci1kcm9wLW1lc3NhZ2V7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA1MjQ1NiAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDUyNDU2ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiA4cHggMiUgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItZHJvcCBhe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXItZHJvcCBpbnB1dHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuI2hlYWRlci1kcm9wLWxvZ291dHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZjg1MTM7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWRyb3AtaGlkZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjRweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcdFxcdFxcdFxcbn1cXG4jaGVhZGVyLWRyb3Atbm90aWNle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNlZjg1MTM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jZm9vdGVye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHggMTAlO1xcblxcdG1hcmdpbi10b3A6IDcwcHg7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcblxcbiNmb290ZXIgaDZ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDMlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9