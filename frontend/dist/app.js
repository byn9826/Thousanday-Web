webpackJsonp([5],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(77);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(55)(content, options);

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

/***/ 136:
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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 16:
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

var readHomeMomentsApi = exports.readHomeMomentsApi = '/index/read';

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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(69);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(71);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	(0, _router2.default)()
), document.getElementById('root'));

/***/ }),

/***/ 54:
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

/***/ 55:
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

var	fixUrls = __webpack_require__(136);

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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_ACCOUNT_DATA = undefined;
exports.changeAccountData = changeAccountData;
exports.readAccountData = readAccountData;

var _config = __webpack_require__(5);

var CHANGE_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = "account/CHANGE_ACCOUNT_DATA";

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

/***/ 59:
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

/***/ 60:
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

/***/ 61:
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

/***/ 62:
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(11);

var _account = __webpack_require__(64);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(65);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(67);

var _pet2 = _interopRequireDefault(_pet);

var _user = __webpack_require__(68);

var _user2 = _interopRequireDefault(_user);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	account: _account2.default,
	home: _home2.default,
	moment: _moment2.default,
	pet: _pet2.default,
	user: _user2.default
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(56);

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
		default:
			return state;
	}
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(58);

var _buildGallery = __webpack_require__(16);

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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(59);

var _buildComments = __webpack_require__(62);

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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(60);

var _config = __webpack_require__(5);

var _noToInfo = __webpack_require__(57);

var _buildGallery = __webpack_require__(16);

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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _user = __webpack_require__(61);

var _config = __webpack_require__(5);

var _buildGallery = __webpack_require__(16);

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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(63);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 70:
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _Bundle = __webpack_require__(70);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(135);

var _Home = __webpack_require__(72);

var _Home2 = _interopRequireDefault(_Home);

var _Pet = __webpack_require__(74);

var _Pet2 = _interopRequireDefault(_Pet);

var _User = __webpack_require__(76);

var _User2 = _interopRequireDefault(_User);

var _Moment = __webpack_require__(73);

var _Moment2 = _interopRequireDefault(_Moment);

var _Terms = __webpack_require__(75);

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
      _react2.default.createElement(
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
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) }),
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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(142));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(143));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(144));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(145));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(146));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#header{\n\tposition: fixed;\n\twidth: 100%;\n\theight: 50px;\n\tline-height: 50px;\n\tborder-bottom: 1px solid white;\n\tbackground-color: #ef8513;\n\tcolor: white;\n\tz-index: 999;\n\tvertical-align: middle;\n}\n\n#header-desc{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcolor: white;\n\tmargin-left: 2%;\n}\n\n.header-navi{\n\tcolor: white;\n\tfloat: right;\n\tmargin-right: 5%;\n\tcursor: pointer;\n}\n\n#header-logo{\n\tfloat: left;\n\tmargin-left: 10%;\n\theight: 40px;\n\tmargin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n\n\n\n\n#footer{\n  display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n  display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}", ""]);

// exports


/***/ })

},[140]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzPzdiN2QiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvYnVpbGRHYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbm9Ub0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9CdW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVGVybXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzcyJdLCJuYW1lcyI6WyJidWlsZEdhbGxlcnkiLCJkYXRhIiwibWFwIiwiaW1hZ2UiLCJwZXRfaWQiLCJpbWFnZV9uYW1lIiwibW9tZW50X21lc3NhZ2UiLCJtb21lbnRfaWQiLCJkb21haW5VcmwiLCJhbmRyb2lkU3RvcmVVcmwiLCJnb29nbGVDbGllbnRJZCIsImZhY2Vib29rQ2xpZW50SWQiLCJyZWFkQWNjb3VudEZhY2Vib29rQXBpIiwicmVhZEFjY291bnRHb29nbGVBcGkiLCJyZWFkSG9tZU1vbWVudHNBcGkiLCJyZWFkUGV0UGFnZUFwaSIsInVwZGF0ZVBldFdhdGNoQXBpIiwiY3JlYXRlUGV0TW9tZW50QXBpIiwicmVhZFBldE1vbWVudHNBcGkiLCJyZWFkVXNlclBhZ2VBcGkiLCJyZWFkVXNlck1vbWVudHNBcGkiLCJyZWFkTW9tZW50UGFnZUFwaSIsImRlbGV0ZU1vbWVudFBhZ2VBcGkiLCJ1cGRhdGVNb21lbnRMaWtlQXBpIiwicmVhZE1vbWVudENvbW1lbnRzQXBpIiwiY3JlYXRlTW9tZW50Q29tbWVudEFwaSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGFuZ2VBY2NvdW50RGF0YSIsInJlYWRBY2NvdW50RGF0YSIsIkNIQU5HRV9BQ0NPVU5UX0RBVEEiLCJ0eXBlIiwicG9ydGFsIiwidG9rZW4iLCJhcGlVcmwiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY2F0Y2giLCJub0dldEFiaWxpdHkiLCJub0dldEdlbmRlciIsIm5vR2V0TmF0dXJlIiwibm9HZXRUeXBlIiwidmFsdWUiLCJwYXJzZUludCIsInJlYWRIb21lTW9tZW50cyIsIkNIQU5HRV9IT01FX01PTUVOVFMiLCJjaGFuZ2VIb21lTW9tZW50cyIsImxvYWQiLCJyZWFkTW9tZW50UGFnZSIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwidXBkYXRlTW9tZW50TGlrZSIsInJlYWRNb21lbnRDb21tZW50cyIsInNob3dDb21tZW50RW1wdHkiLCJjcmVhdGVNb21lbnRDb21tZW50IiwiQlVJTERfTU9NRU5UX1BBR0UiLCJTSE9XX01PTUVOVF9ERUxFVEUiLCJSRURJUkVDVF9VU0VSX1BBR0UiLCJDSEFOR0VfTU9NRU5UX0xJS0UiLCJDSEFOR0VfTU9NRU5UX0NPTU1FTlRTIiwiU0hPV19DT01NRU5UX0VNUFRZIiwiQUREX01PTUVOVF9DT01NRU5UIiwiYnVpbGRNb21lbnRQYWdlIiwiaWQiLCJyZWRpcmN0VXNlclBhZ2UiLCJ1c2VySWQiLCJ1c2VyVG9rZW4iLCJtb21lbnRJZCIsInBldElkIiwib2siLCJjaGFuZ2VNb21lbnRMaWtlIiwiYWN0aW9uIiwiY2hhbmdlTW9tZW50Q29tbWVudHMiLCJjb21tZW50TG9hZCIsImNvbW1lbnRBZGRlZCIsImFwaVBhcmFtcyIsImFkZE1vbWVudENvbW1lbnQiLCJjb250ZW50IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwicmVhZFBldFBhZ2UiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsIkJVSUxEX1BFVF9QQUdFIiwiU0hPV19BQ0NPVU5UX1JFUVVJUkVEIiwiQ0hBTkdFX1BFVF9XQVRDSCIsIkFERF9QRVRfTU9NRU5UIiwiQ0hBTkdFX1BFVF9NT01FTlRTIiwiYnVpbGRQZXRQYWdlIiwiY2hhbmdlUGV0V2F0Y2giLCJhZGRQZXRNb21lbnQiLCJpbmZvIiwibWVzc2FnZSIsInNwbGl0IiwiZmlsZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3NEYXRhIiwicmVzdWx0IiwiY2hhbmdlUGV0TW9tZW50cyIsImFkZCIsInBhcmFtcyIsInJlYWRVc2VyUGFnZSIsInJlYWRVc2VyTW9tZW50cyIsIkJVSUxEX1VTRVJfUEFHRSIsIkNIQU5HRV9VU0VSX01PTUVOVFMiLCJidWlsZFVzZXJQYWdlIiwiY2hhbmdlVXNlck1vbWVudHMiLCJiZWxvbmciLCJidWlsZENvbW1lbnRzIiwiY29tbWVudCIsImNvbW1lbnRfY29udGVudCIsInVzZXJfaWQiLCJjb21tZW50X3RpbWUiLCJhY2NvdW50IiwiaG9tZSIsIm1vbWVudCIsInBldCIsInVzZXIiLCJyZWR1Y2VyIiwiaW5pdFN0YXRlIiwibmFtZSIsInN0YXRlIiwibG9ja2VyIiwibmV3RGF0YSIsImNvbmNhdCIsImxlbmd0aCIsIm1vbWVudERhdGEiLCJmYW1pbHlEYXRhIiwibGlrZURhdGEiLCJjb21tZW50RGF0YSIsInNob3dDb25maXJtIiwiY29tbWVudExvY2tlciIsImNvbW1lbnRFcnJvciIsInJlZGlyZWN0VXNlciIsImxpa2UiLCJvd25lcl9pZCIsInJlbGF0aXZlX2lkIiwiZmlsdGVyIiwibmV3Q29tbWVudHMiLCJwZXRPd25lciIsInBldERhdGEiLCJmcmllbmREYXRhIiwiZ2FsbGVyeURhdGEiLCJ3YXRjaERhdGEiLCJsb2dpblJlcXVpcmVkIiwicmVzZXQiLCJ3YXRjaCIsIm5ld01vbWVudCIsImFiaWxpdHkiLCJuZXdBYmlsaXR5IiwidXNlckRhdGEiLCJyZWxhdGl2ZURhdGEiLCJwZXRzRGF0YSIsImJlbG9uZ0RhdGEiLCJmb3JFYWNoIiwicHVzaCIsIlNldCIsInN0b3JlIiwiQnVuZGxlIiwibW9kIiwicHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImRlZmF1bHQiLCJjaGlsZHJlbiIsImNyZWF0ZUNvbXBvbmVudCIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RGd0JBLFk7O0FBRnhCOztBQUVlLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFDLFFBQU9BLEtBQUtDLEdBQUwsQ0FBUyxVQUFTQyxLQUFULEVBQWdCO0FBQy9C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QUFxQixnQkFBZ0IsR0FBRyxlQUFlLDBCQUEwQiwyQkFBMkIscUJBQXFCLGlCQUFpQixHQUFHOztBQUV6ekYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEdhbGxlcnkoZGF0YSkge1xuXHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0ZG9tYWluVXJsICsgJy9pbWcvcGV0LycgKyBpbWFnZS5wZXRfaWQgKyAnL21vbWVudC8nICsgaW1hZ2UuaW1hZ2VfbmFtZSxcblx0XHRcdGltYWdlLm1vbWVudF9tZXNzYWdlLFxuXHRcdFx0Jy9tb21lbnQvJyArIGltYWdlLm1vbWVudF9pZFxuXHRcdF07XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsImV4cG9ydCBjb25zdCBkb21haW5VcmwgPSAnaHR0cHM6Ly9zbWlsaW5ncy5tZSc7XG5cbmV4cG9ydCBjb25zdCBhbmRyb2lkU3RvcmVVcmwgPSAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50aG91c2FuZGF5JztcblxuZXhwb3J0IGNvbnN0IGdvb2dsZUNsaWVudElkID0gJzE2ODA5ODg1MDIzNC1mc3E4NHBrNGNhZTk3bWxqMGs0NjRqb2MyMWNncWp2di5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XG5leHBvcnQgY29uc3QgZmFjZWJvb2tDbGllbnRJZCA9ICc0NDc2ODgyNjU1NzYxMjUnO1xuXG5leHBvcnQgY29uc3QgcmVhZEFjY291bnRGYWNlYm9va0FwaSA9ICcvYWNjb3VudC9mYWNlYm9vayc7XG5leHBvcnQgY29uc3QgcmVhZEFjY291bnRHb29nbGVBcGkgPSAnL2FjY291bnQvZ29vZ2xlJztcblxuZXhwb3J0IGNvbnN0IHJlYWRIb21lTW9tZW50c0FwaSA9ICcvaW5kZXgvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkUGV0UGFnZUFwaSA9ICcvcGV0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBldFdhdGNoQXBpID0gJy9wZXQvd2F0Y2gnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBldE1vbWVudEFwaSA9ICcvdXBsb2FkL21vbWVudCc7XG5leHBvcnQgY29uc3QgcmVhZFBldE1vbWVudHNBcGkgPSAnL3BldC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRVc2VyUGFnZUFwaSA9ICcvdXNlci9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkVXNlck1vbWVudHNBcGkgPSAnL3VzZXIvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vbWVudFBhZ2VBcGkgPSAnL21vbWVudC9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vbWVudExpa2VBcGkgPSAnL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL21vbWVudC9sb2FkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVNb21lbnRDb21tZW50QXBpID0gJy9tb21lbnQvY29tbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vcmVkdXgvc3RvcmUuanMnO1xuaW1wb3J0IGdldFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcblxuUmVhY3REb20ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT57Z2V0Um91dGVyKCl9PC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRBY2NvdW50RmFjZWJvb2tBcGksIHJlYWRBY2NvdW50R29vZ2xlQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0RBVEEgPSBcImFjY291bnQvQ0hBTkdFX0FDQ09VTlRfREFUQVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWNjb3VudERhdGEoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9BQ0NPVU5UX0RBVEEsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQWNjb3VudERhdGEocG9ydGFsLCB0b2tlbikge1xuXHRjb25zdCBhcGlVcmwgPSBwb3J0YWwgPT09ICdmYWNlYm9vaycgPyByZWFkQWNjb3VudEZhY2Vib29rQXBpIDogcmVhZEFjY291bnRHb29nbGVBcGk7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdG9rZW4sIFxuXHRcdFx0XHRcInBsYXRmb3JtXCI6IFwid2Vic2l0ZVwiXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGpzb25bMF0pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwganNvblsxXSk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwganNvblsyXSk7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUFjY291bnREYXRhKGpzb24pKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJleHBvcnQgZnVuY3Rpb24gbm9HZXRBYmlsaXR5KHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICdhdHRhY2snO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnZGVmZW5kJztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJ2hlYWx0aCc7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuICdzd2lmdCc7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuICdsdWNreSc7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0R2VuZGVyKHZhbHVlKSB7XG5cdHJldHVybiBwYXJzZUludCh2YWx1ZSkgPT09IDAgPyBcIuKZglwiIDogXCLimYBcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0TmF0dXJlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiY3V0ZVwiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcInN0cm9uZ1wiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcInNtYXJ0XCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiYmVhdXR5XCI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0VHlwZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImRvZ1wiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcImNhdFwiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcImJpcmRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJmaXNoXCI7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFwib3RoZXJcIjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCByZWFkSG9tZU1vbWVudHNBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfSE9NRV9NT01FTlRTID0gXCJob21lL0NIQU5HRV9IT01FX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlSG9tZU1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9IT01FX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkSG9tZU1vbWVudHMobG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRIb21lTW9tZW50c0FwaSArICc/bG9hZD0nICsgbG9hZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUhvbWVNb21lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkTW9tZW50UGFnZUFwaSwgZGVsZXRlTW9tZW50UGFnZUFwaSwgdXBkYXRlTW9tZW50TGlrZUFwaSwgXG5cdHJlYWRNb21lbnRDb21tZW50c0FwaSwgY3JlYXRlTW9tZW50Q29tbWVudEFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9NT01FTlRfUEFHRSA9IFwibW9tZW50L0JVSUxEX01PTUVOVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19NT01FTlRfREVMRVRFID0gXCJtb21lbnQvU0hPV19NT01FTlRfREVMRVRFXCI7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVVNFUl9QQUdFID0gXCJtb21lbnQvUkVESVJFQ1RfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9MSUtFID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9MSUtFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9DT01NRU5UUyA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfQ09NTUVOVFNcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTU1FTlRfRU1QVFkgPSBcIm1vbWVudC9TSE9XX0NPTU1FTlRfRU1QVFlcIjtcbmV4cG9ydCBjb25zdCBBRERfTU9NRU5UX0NPTU1FTlQgPSBcIm1vbWVudC9BRERfTU9NRU5UX0NPTU1FTlRcIjtcblxuZnVuY3Rpb24gYnVpbGRNb21lbnRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9NT01FTlRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTW9tZW50UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRNb21lbnRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZE1vbWVudFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9tZW50RGVsZXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfTU9NRU5UX0RFTEVURVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyY3RVc2VyUGFnZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9VU0VSX1BBR0Vcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9tZW50UGFnZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlTW9tZW50UGFnZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmN0VXNlclBhZ2UoKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbWVudExpa2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVNb21lbnRMaWtlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRMaWtlKGFjdGlvbiwgdXNlcklkKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRDb21tZW50cyhtb21lbnRJZCwgY29tbWVudExvYWQsIGNvbW1lbnRBZGRlZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9pZD0nICsgbW9tZW50SWQgKyAnJmxvYWQ9JyArIGNvbW1lbnRMb2FkICsgJyZhZGQ9JyArIGNvbW1lbnRBZGRlZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudENvbW1lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlTW9tZW50Q29tbWVudHMoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tbWVudEVtcHR5KCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQ09NTUVOVF9FTVBUWVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkge1xuXHRjb25zdCBkYXRhID0gW1xuXHRcdGNvbnRlbnQsXG5cdFx0ZG9tYWluVXJsICsgJy9pbWcvdXNlci8nICsgdXNlcklkICsgJy5qcGcnLFxuXHRcdCcvdXNlci8nICsgdXNlcklkLFxuXHRcdG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdF07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX01PTUVOVF9DT01NRU5ULFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbWVudENvbW1lbnQodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBjb250ZW50KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlTW9tZW50Q29tbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdjb250ZW50JzogY29udGVudFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRQZXRQYWdlQXBpLCB1cGRhdGVQZXRXYXRjaEFwaSwgY3JlYXRlUGV0TW9tZW50QXBpLFxuXHRyZWFkUGV0TW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9QRVRfUEFHRSA9IFwicGV0L0JVSUxEX1BFVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ0NPVU5UX1JFUVVJUkVEID0gXCJwZXQvU0hPV19BQ0NPVU5UX1JFUVVJUkVEXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9XQVRDSCA9IFwicGV0L0NIQU5HRV9QRVRfV0FUQ0hcIjtcbmV4cG9ydCBjb25zdCBBRERfUEVUX01PTUVOVCA9IFwicGV0L0FERF9QRVRfTU9NRU5UXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9NT01FTlRTID0gXCJwZXQvQ0hBTkdFX1BFVF9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUGV0UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfUEVUX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFBldFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUGV0UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRQZXRQYWdlKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjY291bnRSZXF1aXJlZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTSE9XX0FDQ09VTlRfUkVRVUlSRURcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUEVUX1dBVENILFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGV0V2F0Y2godXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVQZXRXYXRjaEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWQsXG5cdFx0XHRcdCdhY3Rpb24nOiBhY3Rpb25cblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkUGV0TW9tZW50KGluZm8sIHBldElkLCBtZXNzYWdlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX1BFVF9NT01FTlQsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgcGV0SWQsIG1lc3NhZ2Vcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQZXRNb21lbnQodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBpbWFnZSwgbWVzc2FnZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0bGV0IHR5cGUgPSBpbWFnZS50eXBlO1xuXHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiL1wiKVsxXTtcblx0XHR0eXBlID0gXCIuXCIgKyB0eXBlO1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSwgdHlwZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJwZXRcIiwgcGV0SWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInVzZXJcIiwgdXNlcklkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVQZXRNb21lbnRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHRcdGJvZHk6IGZpbGVEYXRhXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkUGV0TW9tZW50KHJlc3VsdCwgcGV0SWQsIG1lc3NhZ2UpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBldE1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQZXRNb21lbnRzKHBldElkLCBsb2FkLCBhZGQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IHBhcmFtcyA9ICc/YWRkPScgKyBhZGQgKyAnJmxvYWQ9JyArIGxvYWQgKyAnJnBldD0nICsgcGV0SWQ7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRNb21lbnRzQXBpICsgcGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0TW9tZW50cyhqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9wZXQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkVXNlclBhZ2VBcGksIHJlYWRVc2VyTW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9VU0VSX1BBR0UgPSBcInVzZXIvQlVJTERfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1VTRVJfTU9NRU5UUyA9IFwidXNlci9DSEFOR0VfVVNFUl9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkVXNlclBhZ2UoaW5mbywgdXNlcklkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfVVNFUl9QQUdFLFxuXHRcdGRhdGE6IHtcblx0XHRcdGluZm8sIHVzZXJJZFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVc2VyUGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRVc2VyUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRVc2VyUGFnZShqc29uLCBwYXJzZUludChpZCkpKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VVc2VyTW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1VTRVJfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVc2VyTW9tZW50cyhiZWxvbmcsIGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkVXNlck1vbWVudHNBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J2JlbG9uZyc6IGJlbG9uZyxcblx0XHRcdFx0J2xvYWQnOiBsb2FkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VVc2VyTW9tZW50cyhqc29uKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHRcdFxuXHRcdFxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlci5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb21tZW50cyhkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGNvbW1lbnQuY29tbWVudF9jb250ZW50LFxuXHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQgKyBcIi5qcGdcIixcblx0XHRcdFwiL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQsXG5cdFx0XHRuZXcgRGF0ZShjb21tZW50LmNvbW1lbnRfdGltZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhY2NvdW50IGZyb20gJy4vcmVkdWNlcnMvYWNjb3VudCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL3JlZHVjZXJzL2hvbWUnO1xuaW1wb3J0IHBldCBmcm9tICcuL3JlZHVjZXJzL3BldCc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICcuL3JlZHVjZXJzL21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGFjY291bnQsXG5cdGhvbWUsXG5cdG1vbWVudCxcblx0cGV0LFxuXHR1c2VyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJpbXBvcnQgeyBDSEFOR0VfQUNDT1VOVF9EQVRBIH0gZnJvbSAnLi4vYWN0aW9ucy9hY2NvdW50JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRpZDogbnVsbCxcblx0bmFtZTogbnVsbCxcblx0dG9rZW46IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfQUNDT1VOVF9EQVRBOlxuXHRcdFx0aWYgKHN0YXRlLmlkID09PSBudWxsICYmIGFjdGlvbi5kYXRhWzBdICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0aWQ6IHBhcnNlSW50KGFjdGlvbi5kYXRhWzBdKSxcblx0XHRcdFx0XHRuYW1lOiBhY3Rpb24uZGF0YVsxXSxcblx0XHRcdFx0XHR0b2tlbjogYWN0aW9uLmRhdGFbMl1cblx0XHRcdFx0fTtcdFxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsImltcG9ydCB7IENIQU5HRV9IT01FX01PTUVOVFMgfSBmcm9tICcuLi9hY3Rpb25zL2hvbWUnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSBtb21lbnRzIGRhdGFcblx0ZGF0YTogW10sXG5cdC8vcmVjb3JkIGxvYWQgbnVtYmVyXG5cdGxvYWQ6IDAsXG5cdC8vYWxsb3cgbG9hZCBvciBub3Rcblx0bG9ja2VyOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9IT01FX01PTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdEYXRhID0gYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvY2tlcjogbmV3RGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvaG9tZS5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9NT01FTlRfUEFHRSwgU0hPV19NT01FTlRfREVMRVRFLCBSRURJUkVDVF9VU0VSX1BBR0UsIENIQU5HRV9NT01FTlRfTElLRSxcblx0Q0hBTkdFX01PTUVOVF9DT01NRU5UUywgU0hPV19DT01NRU5UX0VNUFRZLCBBRERfTU9NRU5UX0NPTU1FTlRcbn0gZnJvbSAnLi4vYWN0aW9ucy9tb21lbnQnO1xuaW1wb3J0IGJ1aWxkQ29tbWVudHMgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZENvbW1lbnRzJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRtb21lbnREYXRhOiBbXSxcblx0ZmFtaWx5RGF0YTogW10sXG5cdGxpa2VEYXRhOiBbXSxcblx0Y29tbWVudERhdGE6IFtdLFxuXHRzaG93Q29uZmlybTogZmFsc2UsXG5cdGNvbW1lbnRMb2NrZXI6IGZhbHNlLFxuXHRjb21tZW50QWRkZWQ6IDAsXG5cdGNvbW1lbnRMb2FkOiAwLFxuXHRjb21tZW50RXJyb3I6IG51bGwsXG5cdHJlZGlyZWN0VXNlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9NT01FTlRfUEFHRTpcblx0XHRcdGNvbnN0IGxpa2VEYXRhID0gYWN0aW9uLmRhdGFbMl0ubWFwKGZ1bmN0aW9uKGxpa2UpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KGxpa2UudXNlcl9pZCk7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGNvbW1lbnREYXRhID0gYnVpbGRDb21tZW50cyhhY3Rpb24uZGF0YVszXSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9tZW50RGF0YTogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGZhbWlseURhdGE6IFtcblx0XHRcdFx0XHRwYXJzZUludChhY3Rpb24uZGF0YVsxXS5vd25lcl9pZCkgfHwgbnVsbCwgXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ucmVsYXRpdmVfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaWtlRGF0YSxcblx0XHRcdFx0Y29tbWVudERhdGEsXG5cdFx0XHRcdGNvbW1lbnRMb2NrZXI6IGFjdGlvbi5kYXRhWzNdLmxlbmd0aCAhPT0gNVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfTU9NRU5UX0RFTEVURTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93Q29uZmlybTogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1VTRVJfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZWRpcmVjdFVzZXI6IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfTU9NRU5UX0xJS0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bGlrZURhdGE6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMSA/XG5cdFx0XHRcdFx0Wy4uLnN0YXRlLmxpa2VEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS5saWtlRGF0YS5maWx0ZXIoZnVuY3Rpb24obGlrZSkgeyByZXR1cm4gbGlrZSAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9DT01NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0NvbW1lbnRzID0gYnVpbGRDb21tZW50cyhhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFsuLi5zdGF0ZS5jb21tZW50RGF0YSwgLi4ubmV3Q29tbWVudHNdLFxuXHRcdFx0XHRjb21tZW50TG9hZDogc3RhdGUuY29tbWVudExvYWQgKyAxLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YS5sZW5ndGggIT09IDEwXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19DT01NRU5UX0VNUFRZOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnRFcnJvcjogXCJDb21tZW50IGNhbuKAsnQgYmUgZW1wdHlcIlxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9NT01FTlRfQ09NTUVOVDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RGF0YTogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5jb21tZW50RGF0YV0sXG5cdFx0XHRcdGNvbW1lbnRFcnJvcjogbnVsbCxcblx0XHRcdFx0Y29tbWVudEFkZGVkOiBzdGF0ZS5jb21tZW50QWRkZWQgKyAxXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbW9tZW50LmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1BFVF9QQUdFLCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQsIENIQU5HRV9QRVRfV0FUQ0gsIEFERF9QRVRfTU9NRU5ULCBDSEFOR0VfUEVUX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9wZXQnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHsgbm9HZXRBYmlsaXR5IH0gZnJvbSAnLi4vLi4vaGVscGVycy9ub1RvSW5mbyc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL2luZGljYXRlIHBldCBiZWxvbmcgdG8gY3VycmVudCB1c2VyIG9yIG5vdFxuXHRwZXRPd25lcjogZmFsc2UsXG5cdC8vc3RvcmUgZGF0YSBmb3Igb25lIHBldFxuXHRwZXREYXRhOiB7fSxcblx0Ly9zdG9yZSBkYXRhIGZvciBwZXQncyBmYW1pbHlcblx0ZmFtaWx5RGF0YTogW10sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0cyBmcmllbmRcblx0ZnJpZW5kRGF0YTogW10sXG5cdC8vc3RvcmUgZGF0YSBmb3IgaW1hZ2UgZ2FsbGVyeVxuXHRnYWxsZXJ5RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9pbmRpY2F0ZSBhZGQgaG93IG1hbnkgaW1hZ2VzXG5cdGFkZDogMCxcblx0Ly9zdG9yZSBhbGwgd2F0Y2hlciBvZiBjdXJyZW50IHBldFxuXHR3YXRjaERhdGE6IFtdLFxuXHQvL2luZGljYXRlIG5vdGljZSB1c2VyIGxvZ2luIG9yIG5vdFxuXHRsb2dpblJlcXVpcmVkOiBmYWxzZSxcblx0Ly90cmlnZ2VyIHJlc2V0IGZ1bmN0aW9uIGZvciBwb3N0IGltYWdlXG5cdHJlc2V0OiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1BFVF9QQUdFOlxuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10gPSBwYXJzZUludChhY3Rpb24uZGF0YVswXVsnb3duZXJfaWQnXSk7XG5cdFx0XHRhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9IGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddID09PSBudWxsID8gXG5cdFx0XHRcdG51bGwgOiBwYXJzZUludChhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSk7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cGV0RGF0YTogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGZhbWlseURhdGE6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRmcmllbmREYXRhOiBhY3Rpb24uZGF0YVsyXSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhWzNdKSxcblx0XHRcdFx0d2F0Y2hEYXRhOiBhY3Rpb24uZGF0YVs0XS5tYXAoZnVuY3Rpb24od2F0Y2gpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQod2F0Y2gudXNlcl9pZCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19BQ0NPVU5UX1JFUVVJUkVEOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvZ2luUmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfV0FUQ0g6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0d2F0Y2hEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS53YXRjaERhdGEsIGFjdGlvbi5kYXRhLnVzZXJJZF0gOlxuXHRcdFx0XHRcdHN0YXRlLndhdGNoRGF0YS5maWx0ZXIoZnVuY3Rpb24od2F0Y2gpIHsgcmV0dXJuIHdhdGNoICE9PSBhY3Rpb24uZGF0YS51c2VySWQgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfUEVUX01PTUVOVDpcblx0XHRcdGNvbnN0IG5ld01vbWVudCA9IFtcblx0XHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIGFjdGlvbi5kYXRhLnBldElkICsgXCIvbW9tZW50L1wiICsgYWN0aW9uLmRhdGEuaW5mb1sxXSxcblx0XHRcdFx0YWN0aW9uLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XCIvbW9tZW50L1wiICsgYWN0aW9uLmRhdGEuaW5mb1swXVxuXHRcdFx0XTtcblx0XHRcdGlmIChhY3Rpb24uZGF0YS5pbmZvLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0XHRjb25zdCBhYmlsaXR5ID0gbm9HZXRBYmlsaXR5KGFjdGlvbi5kYXRhLmluZm9bMl0pO1xuXHRcdFx0XHRjb25zdCBuZXdBYmlsaXR5ID0gey4uLnN0YXRlLnBldERhdGF9O1xuXHRcdFx0XHRuZXdBYmlsaXR5W2FiaWxpdHldID0gcGFyc2VJbnQoc3RhdGUucGV0RGF0YVthYmlsaXR5XSkgKyAxO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGdhbGxlcnlEYXRhOiBbbmV3TW9tZW50LCAuLi5zdGF0ZS5nYWxsZXJ5RGF0YV0sXG5cdFx0XHRcdFx0cmVzZXQ6IHN0YXRlLnJlc2V0ICsgMSxcblx0XHRcdFx0XHRhZGQ6IHN0YXRlLmFkZCArIDEsXG5cdFx0XHRcdFx0cGV0RGF0YTogbmV3QWJpbGl0eVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGdhbGxlcnlEYXRhOiBbbmV3TW9tZW50LCAuLi5zdGF0ZS5nYWxsZXJ5RGF0YV0sXG5cdFx0XHRcdFx0cmVzZXQ6IHN0YXRlLnJlc2V0ICsgMSxcblx0XHRcdFx0XHRhZGQ6IHN0YXRlLmFkZCArIDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX1BFVF9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IHN0YXRlLmdhbGxlcnlEYXRhLmNvbmNhdChuZXdEYXRhKSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogbmV3RGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcGV0LmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1VTRVJfUEFHRSwgQ0hBTkdFX1VTRVJfTU9NRU5UU1xufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSB1c2VyIGRhdGFcblx0dXNlckRhdGE6IFtdLFxuXHQvL3N0b3JlIHJlbGF0aXZlIGRhdGFcblx0cmVsYXRpdmVEYXRhOiBbXSxcblx0Ly9zdG9yZSBwZXRzIGxpc3Rcblx0cGV0c0RhdGE6IFtdLFxuXHQvL3N0b3JlIG1vbWVudCBpbWFnZXNcblx0bW9tZW50RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBtb21lbnQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgaW1hZ2VzIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlLFxuXHQvL3N0b3JlIHBldCBsaXN0XG5cdGJlbG9uZ0RhdGE6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9VU0VSX1BBR0U6XG5cdFx0XHRsZXQgcmVsYXRpdmVEYXRhID0gW107XG5cdFx0XHRhY3Rpb24uZGF0YS5pbmZvWzFdLmZvckVhY2goZnVuY3Rpb24ocGV0KSB7XG5cdFx0XHRcdGlmIChwZXQucmVsYXRpdmVfaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZURhdGEucHVzaChcblx0XHRcdFx0XHRcdHBhcnNlSW50KHBldC5yZWxhdGl2ZV9pZCkgPT09IGFjdGlvbi5kYXRhLnVzZXJJZCA/IFxuXHRcdFx0XHRcdFx0XHRwYXJzZUludChwZXQub3duZXJfaWQpIDogcGFyc2VJbnQocGV0LnJlbGF0aXZlX2lkKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fSk7XG5cdFx0XHRhY3Rpb24uZGF0YS5pbmZvWzBdLnVzZXJfaWQgPSBwYXJzZUludChhY3Rpb24uZGF0YS5pbmZvWzBdLnVzZXJfaWQpO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzBdLFxuXHRcdFx0XHRwZXRzRGF0YTogYWN0aW9uLmRhdGEuaW5mb1sxXSxcblx0XHRcdFx0YmVsb25nRGF0YTogYWN0aW9uLmRhdGEuaW5mb1szXSxcblx0XHRcdFx0bW9tZW50RGF0YTogYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLmluZm9bMl0pLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLmluZm9bMl0ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0cmVsYXRpdmVEYXRhOiBbLi4ubmV3IFNldChyZWxhdGl2ZURhdGEpXVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9VU0VSX01PTUVOVFM6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9tZW50RGF0YTogc3RhdGUubW9tZW50RGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXIuanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJ1bmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBtb2Q6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxvYWQgIT09IHRoaXMucHJvcHMubG9hZCkge1xuICAgICAgdGhpcy5sb2FkKG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZChwcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG51bGwgfSk7XG4gICAgcHJvcHMubG9hZCgobW9kKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBtb2QuZGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUubW9kKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW5kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuLi9wYWdlcy9Ib21lJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgVXNlciBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4uL3BhZ2VzL1VzZXInO1xuaW1wb3J0IE1vbWVudCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi4vcGFnZXMvTW9tZW50JztcbmltcG9ydCBUZXJtcyBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT10ZXJtcyEuLi9wYWdlcy9UZXJtcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IChwcm9wcykgPT4gKFxuICA8QnVuZGxlIGxvYWQ9eyBjb21wb25lbnQgfT5cbiAgICB7XG4gICAgICAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPiA6IG51bGxcbiAgICB9XG4gIDwvQnVuZGxlPlxuKTtcblxuY29uc3QgZ2V0Um91dGVyID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNSBpZD1cImhlYWRlci1kZXNjXCI+SG9tZXBhZ2UgZm9yIHBldHM8L2g1PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJoZWFkZXItbmF2aVwiIGhyZWY9XCIvZXhwbG9yZVwiPlxuXHRcdFx0XHRcdDxoNT5FeHBsb3JlPC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJoZWFkZXItbmF2aVwiIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGg1PlB1YmxpYzwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvaGVhZGVyPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEhvbWUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcGV0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQZXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvdXNlci86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVXNlcikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi90ZXJtc1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChUZXJtcykgfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxoNj7CqSAyMDE3LTIwMTggU21pbGluZ3MubWU8L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViXCIgdGFyZ2V0PVwiX19ibGFua1wiPlNvdXJjZSBDb2RlPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjYvVGhvdXNhbmRheS1XZWIvaXNzdWVzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlJlcG9ydDwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHA6Ly9nbHlwaGljb25zLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5HbHlwaGljb25zPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX19ibGFua1wiPlRlcm1zICYgUHJpdmFjeSBQb2xpY3k8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNlwiIHRhcmdldD1cIl9fYmxhbmtcIj5BYm91dDwvYT48L2g2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vSG9tZS5qc1wiKSk7XG5cdH0sIFwiaG9tZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuL3NyYy9wYWdlcy9Ib21lLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL01vbWVudC5qc1wiKSk7XG5cdH0sIFwibW9tZW50XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi9zcmMvcGFnZXMvTW9tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1BldC5qc1wiKSk7XG5cdH0sIFwicGV0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1wZXQhLi9zcmMvcGFnZXMvUGV0LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1Rlcm1zLmpzXCIpKTtcblx0fSwgXCJ0ZXJtc1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dGVybXMhLi9zcmMvcGFnZXMvVGVybXMuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vVXNlci5qc1wiKSk7XG5cdH0sIFwidXNlclwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dXNlciEuL3NyYy9wYWdlcy9Vc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNoZWFkZXJ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNTBweDtcXG5cXHRsaW5lLWhlaWdodDogNTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNoZWFkZXItZGVzY3tcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4uaGVhZGVyLW5hdml7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDUlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlYWRlci1sb2dve1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdG1hcmdpbi1sZWZ0OiAxMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI2hlYWRlci1sb2dpbntcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyLWxvZ2luIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI2hlYWRlci1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRyb3B7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4jaGVhZGVyLWRyb3AtbWVzc2FnZXtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDUyNDU2ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDhweCAyJSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wIGF7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1kcm9wIGlucHV0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jaGVhZGVyLWRyb3AtbG9nb3V0e1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmODUxMztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItZHJvcC1oaWRle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIyNHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFx0XFx0XFx0XFxufVxcbiNoZWFkZXItZHJvcC1ub3RpY2V7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2VmODUxMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblxcblxcblxcbiNmb290ZXJ7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdHBhZGRpbmc6IDVweCAxMCU7XFxuXFx0bWFyZ2luLXRvcDogNzBweDtcXG5cXHRjbGVhcjogYm90aDtcXG59XFxuXFxuI2Zvb3RlciBoNntcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdG1hcmdpbi1yaWdodDogMyU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=