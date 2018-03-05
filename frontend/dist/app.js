webpackJsonp([4],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(74);

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

/***/ 133:
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildGallery;

var _config = __webpack_require__(6);

function buildGallery(data) {
	return data.map(function (image) {
		return [_config.domainUrl + '/img/pet/' + image.pet_id + '/moment/' + image.image_name, image.moment_message, '/moment/' + image.moment_id];
	});
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(67);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(69);

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

var	fixUrls = __webpack_require__(133);

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

var _config = __webpack_require__(6);

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

var _config = __webpack_require__(6);

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

var _config = __webpack_require__(6);

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

/***/ 6:
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

var readMomentPageApi = exports.readMomentPageApi = '/moment/read';
var deleteMomentPageApi = exports.deleteMomentPageApi = '/moment/delete';
var updateMomentLikeApi = exports.updateMomentLikeApi = '/moment/like';
var readMomentCommentsApi = exports.readMomentCommentsApi = '/moment/load';
var createMomentCommentApi = exports.createMomentCommentApi = '/moment/comment';

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

var _config = __webpack_require__(6);

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
exports.default = buildComments;

var _config = __webpack_require__(6);

function buildComments(data) {
	return data.map(function (comment) {
		return [comment.comment_content, _config.domainUrl + "/img/user/" + comment.user_id + ".jpg", "/user/" + comment.user_id, new Date(comment.comment_time).toISOString().substring(0, 10)];
	});
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(11);

var _account = __webpack_require__(63);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(64);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(66);

var _pet2 = _interopRequireDefault(_pet);

var _moment = __webpack_require__(65);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	account: _account2.default,
	home: _home2.default,
	moment: _moment2.default,
	pet: _pet2.default
});

/***/ }),

/***/ 63:
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(58);

var _buildGallery = __webpack_require__(29);

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(59);

var _buildComments = __webpack_require__(61);

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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(60);

var _config = __webpack_require__(6);

var _noToInfo = __webpack_require__(57);

var _buildGallery = __webpack_require__(29);

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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(28);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(62);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 68:
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _Bundle = __webpack_require__(68);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(132);

var _Home = __webpack_require__(70);

var _Home2 = _interopRequireDefault(_Home);

var _Pet = __webpack_require__(72);

var _Pet2 = _interopRequireDefault(_Pet);

var _Moment = __webpack_require__(71);

var _Moment2 = _interopRequireDefault(_Moment);

var _Terms = __webpack_require__(73);

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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(139));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(140));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(141));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(142));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#header{\n\tposition: fixed;\n\twidth: 100%;\n\theight: 50px;\n\tline-height: 50px;\n\tborder-bottom: 1px solid white;\n\tbackground-color: #ef8513;\n\tcolor: white;\n\tz-index: 999;\n\tvertical-align: middle;\n}\n\n#header-desc{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcolor: white;\n\tmargin-left: 2%;\n}\n\n.header-navi{\n\tcolor: white;\n\tfloat: right;\n\tmargin-right: 5%;\n\tcursor: pointer;\n}\n\n#header-logo{\n\tfloat: left;\n\tmargin-left: 10%;\n\theight: 40px;\n\tmargin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n\n\n\n\n#footer{\n  display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n  display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}", ""]);

// exports


/***/ })

},[137]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzPzdiN2QiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvYnVpbGRHYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9ub1RvSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3MiXSwibmFtZXMiOlsiYnVpbGRHYWxsZXJ5IiwiZGF0YSIsIm1hcCIsImltYWdlIiwicGV0X2lkIiwiaW1hZ2VfbmFtZSIsIm1vbWVudF9tZXNzYWdlIiwibW9tZW50X2lkIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoYW5nZUFjY291bnREYXRhIiwicmVhZEFjY291bnREYXRhIiwiQ0hBTkdFX0FDQ09VTlRfREFUQSIsInR5cGUiLCJwb3J0YWwiLCJ0b2tlbiIsImFwaVVybCIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjYXRjaCIsIm5vR2V0QWJpbGl0eSIsIm5vR2V0R2VuZGVyIiwibm9HZXROYXR1cmUiLCJub0dldFR5cGUiLCJ2YWx1ZSIsInBhcnNlSW50IiwicmVhZEhvbWVNb21lbnRzIiwiQ0hBTkdFX0hPTUVfTU9NRU5UUyIsImNoYW5nZUhvbWVNb21lbnRzIiwibG9hZCIsInJlYWRNb21lbnRQYWdlIiwic2hvd01vbWVudERlbGV0ZSIsImRlbGV0ZU1vbWVudFBhZ2UiLCJ1cGRhdGVNb21lbnRMaWtlIiwicmVhZE1vbWVudENvbW1lbnRzIiwic2hvd0NvbW1lbnRFbXB0eSIsImNyZWF0ZU1vbWVudENvbW1lbnQiLCJCVUlMRF9NT01FTlRfUEFHRSIsIlNIT1dfTU9NRU5UX0RFTEVURSIsIlJFRElSRUNUX1VTRVJfUEFHRSIsIkNIQU5HRV9NT01FTlRfTElLRSIsIkNIQU5HRV9NT01FTlRfQ09NTUVOVFMiLCJTSE9XX0NPTU1FTlRfRU1QVFkiLCJBRERfTU9NRU5UX0NPTU1FTlQiLCJidWlsZE1vbWVudFBhZ2UiLCJpZCIsInJlZGlyY3RVc2VyUGFnZSIsInVzZXJJZCIsInVzZXJUb2tlbiIsIm1vbWVudElkIiwicGV0SWQiLCJvayIsImNoYW5nZU1vbWVudExpa2UiLCJhY3Rpb24iLCJjaGFuZ2VNb21lbnRDb21tZW50cyIsImNvbW1lbnRMb2FkIiwiY29tbWVudEFkZGVkIiwiYXBpUGFyYW1zIiwiYWRkTW9tZW50Q29tbWVudCIsImNvbnRlbnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJkb21haW5VcmwiLCJhbmRyb2lkU3RvcmVVcmwiLCJnb29nbGVDbGllbnRJZCIsImZhY2Vib29rQ2xpZW50SWQiLCJyZWFkQWNjb3VudEZhY2Vib29rQXBpIiwicmVhZEFjY291bnRHb29nbGVBcGkiLCJyZWFkSG9tZU1vbWVudHNBcGkiLCJyZWFkUGV0UGFnZUFwaSIsInVwZGF0ZVBldFdhdGNoQXBpIiwiY3JlYXRlUGV0TW9tZW50QXBpIiwicmVhZFBldE1vbWVudHNBcGkiLCJyZWFkTW9tZW50UGFnZUFwaSIsImRlbGV0ZU1vbWVudFBhZ2VBcGkiLCJ1cGRhdGVNb21lbnRMaWtlQXBpIiwicmVhZE1vbWVudENvbW1lbnRzQXBpIiwiY3JlYXRlTW9tZW50Q29tbWVudEFwaSIsInJlYWRQZXRQYWdlIiwic2hvd0FjY291bnRSZXF1aXJlZCIsInVwZGF0ZVBldFdhdGNoIiwiY3JlYXRlUGV0TW9tZW50IiwicmVhZFBldE1vbWVudHMiLCJCVUlMRF9QRVRfUEFHRSIsIlNIT1dfQUNDT1VOVF9SRVFVSVJFRCIsIkNIQU5HRV9QRVRfV0FUQ0giLCJBRERfUEVUX01PTUVOVCIsIkNIQU5HRV9QRVRfTU9NRU5UUyIsImJ1aWxkUGV0UGFnZSIsImNoYW5nZVBldFdhdGNoIiwiYWRkUGV0TW9tZW50IiwiaW5mbyIsIm1lc3NhZ2UiLCJzcGxpdCIsImZpbGVEYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzRGF0YSIsInJlc3VsdCIsImNoYW5nZVBldE1vbWVudHMiLCJhZGQiLCJwYXJhbXMiLCJidWlsZENvbW1lbnRzIiwiY29tbWVudCIsImNvbW1lbnRfY29udGVudCIsInVzZXJfaWQiLCJjb21tZW50X3RpbWUiLCJhY2NvdW50IiwiaG9tZSIsIm1vbWVudCIsInBldCIsInJlZHVjZXIiLCJpbml0U3RhdGUiLCJuYW1lIiwic3RhdGUiLCJsb2NrZXIiLCJuZXdEYXRhIiwiY29uY2F0IiwibGVuZ3RoIiwibW9tZW50RGF0YSIsImZhbWlseURhdGEiLCJsaWtlRGF0YSIsImNvbW1lbnREYXRhIiwic2hvd0NvbmZpcm0iLCJjb21tZW50TG9ja2VyIiwiY29tbWVudEVycm9yIiwicmVkaXJlY3RVc2VyIiwibGlrZSIsIm93bmVyX2lkIiwicmVsYXRpdmVfaWQiLCJmaWx0ZXIiLCJuZXdDb21tZW50cyIsInBldE93bmVyIiwicGV0RGF0YSIsImZyaWVuZERhdGEiLCJnYWxsZXJ5RGF0YSIsIndhdGNoRGF0YSIsImxvZ2luUmVxdWlyZWQiLCJyZXNldCIsIndhdGNoIiwibmV3TW9tZW50IiwiYWJpbGl0eSIsIm5ld0FiaWxpdHkiLCJzdG9yZSIsIkJ1bmRsZSIsIm1vZCIsInByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJkZWZhdWx0IiwiY2hpbGRyZW4iLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTZCLGtCQUFrQix3QkFBd0IsR0FBRyxpQkFBaUIsc0JBQXNCLGdCQUFnQixtQkFBbUIseUJBQXlCLHNCQUFzQixpQkFBaUIsOEJBQThCLGdDQUFnQyxnREFBZ0Qsc0JBQXNCLHlCQUF5QiwwQkFBMEIsR0FBRyx1QkFBdUIsZ0RBQWdELGlEQUFpRCw4QkFBOEIseUNBQXlDLGlDQUFpQyw0QkFBNEIscUNBQXFDLEdBQUcsaUJBQWlCLHVCQUF1QixxQkFBcUIseUJBQXlCLHVCQUF1QixpQkFBaUIseUJBQXlCLG1CQUFtQixnQ0FBZ0MsMkJBQTJCLHFCQUFxQixzQkFBc0IsR0FBRyxxQkFBcUIsc0JBQXNCLGlCQUFpQix5QkFBeUIsbUJBQW1CLGdDQUFnQyxvQkFBb0IsdUJBQXVCLEdBQUcsc0JBQXNCLHVDQUF1QyxpQkFBaUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsMEJBQTBCLHNCQUFzQixtQ0FBbUMsR0FBRyxvQkFBb0Isc0JBQXNCLGdCQUFnQixtQkFBbUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsOEJBQThCLGdDQUFnQyxnREFBZ0Qsc0JBQXNCLHlCQUF5Qix5QkFBeUIsU0FBUyxzQkFBc0IscUJBQXFCLHFCQUFxQix5QkFBeUIsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQixtQkFBbUIsZUFBZSw0QkFBNEIscUJBQXFCLHFCQUFxQixnQkFBZ0IsR0FBRyxlQUFlLDBCQUEwQiwyQkFBMkIscUJBQXFCLGlCQUFpQixHQUFHOztBQUV6ekYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEdhbGxlcnkoZGF0YSkge1xuXHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0ZG9tYWluVXJsICsgJy9pbWcvcGV0LycgKyBpbWFnZS5wZXRfaWQgKyAnL21vbWVudC8nICsgaW1hZ2UuaW1hZ2VfbmFtZSxcblx0XHRcdGltYWdlLm1vbWVudF9tZXNzYWdlLFxuXHRcdFx0Jy9tb21lbnQvJyArIGltYWdlLm1vbWVudF9pZFxuXHRcdF07XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3JlZHV4L3N0b3JlLmpzJztcbmltcG9ydCBnZXRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5cblJlYWN0RG9tLnJlbmRlcihcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+e2dldFJvdXRlcigpfTwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkQWNjb3VudEZhY2Vib29rQXBpLCByZWFkQWNjb3VudEdvb2dsZUFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9EQVRBID0gXCJhY2NvdW50L0NIQU5HRV9BQ0NPVU5UX0RBVEFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjY291bnREYXRhKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9EQVRBLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFjY291bnREYXRhKHBvcnRhbCwgdG9rZW4pIHtcblx0Y29uc3QgYXBpVXJsID0gcG9ydGFsID09PSAnZmFjZWJvb2snID8gcmVhZEFjY291bnRGYWNlYm9va0FwaSA6IHJlYWRBY2NvdW50R29vZ2xlQXBpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHRva2VuLCBcblx0XHRcdFx0XCJwbGF0Zm9ybVwiOiBcIndlYnNpdGVcIlxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCBqc29uWzBdKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIGpzb25bMV0pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGpzb25bMl0pO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VBY2NvdW50RGF0YShqc29uKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hY2NvdW50LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIG5vR2V0QWJpbGl0eSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiAnYXR0YWNrJztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gJ2RlZmVuZCc7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuICdoZWFsdGgnO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiAnc3dpZnQnO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiAnbHVja3knO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldEdlbmRlcih2YWx1ZSkge1xuXHRyZXR1cm4gcGFyc2VJbnQodmFsdWUpID09PSAwID8gXCLimYJcIiA6IFwi4pmAXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldE5hdHVyZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImN1dGVcIjtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gXCJzdHJvbmdcIjtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gXCJzbWFydFwiO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBcImJlYXV0eVwiO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldFR5cGUodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gXCJkb2dcIjtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gXCJjYXRcIjtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gXCJiaXJkXCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiZmlzaFwiO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBcIm90aGVyXCI7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9ub1RvSW5mby5qcyIsImltcG9ydCB7IGRvbWFpblVybCwgcmVhZEhvbWVNb21lbnRzQXBpIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX0hPTUVfTU9NRU5UUyA9IFwiaG9tZS9DSEFOR0VfSE9NRV9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZUhvbWVNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfSE9NRV9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEhvbWVNb21lbnRzKGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkSG9tZU1vbWVudHNBcGkgKyAnP2xvYWQ9JyArIGxvYWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VIb21lTW9tZW50cyhqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ob21lLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZE1vbWVudFBhZ2VBcGksIGRlbGV0ZU1vbWVudFBhZ2VBcGksIHVwZGF0ZU1vbWVudExpa2VBcGksIFxuXHRyZWFkTW9tZW50Q29tbWVudHNBcGksIGNyZWF0ZU1vbWVudENvbW1lbnRBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfTU9NRU5UX1BBR0UgPSBcIm1vbWVudC9CVUlMRF9NT01FTlRfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9NRU5UX0RFTEVURSA9IFwibW9tZW50L1NIT1dfTU9NRU5UX0RFTEVURVwiO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1VTRVJfUEFHRSA9IFwibW9tZW50L1JFRElSRUNUX1VTRVJfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9NT01FTlRfTElLRSA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfTElLRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9NT01FTlRfQ09NTUVOVFMgPSBcIm1vbWVudC9DSEFOR0VfTU9NRU5UX0NPTU1FTlRTXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01NRU5UX0VNUFRZID0gXCJtb21lbnQvU0hPV19DT01NRU5UX0VNUFRZXCI7XG5leHBvcnQgY29uc3QgQUREX01PTUVOVF9DT01NRU5UID0gXCJtb21lbnQvQUREX01PTUVOVF9DT01NRU5UXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkTW9tZW50UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfTU9NRU5UX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZE1vbWVudFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkTW9tZW50UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRNb21lbnRQYWdlKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vbWVudERlbGV0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTSE9XX01PTUVOVF9ERUxFVEVcblx0fVxufVxuXG5mdW5jdGlvbiByZWRpcmN0VXNlclBhZ2UoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVESVJFQ1RfVVNFUl9QQUdFXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1vbWVudFBhZ2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBwZXRJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGRlbGV0ZU1vbWVudFBhZ2VBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J21vbWVudCc6IG1vbWVudElkLFxuXHRcdFx0XHQncGV0JzogcGV0SWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJjdFVzZXJQYWdlKCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb21lbnRMaWtlKGFjdGlvbiwgdXNlcklkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX01PTUVOVF9MSUtFLFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgdXNlcklkXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNb21lbnRMaWtlKHVzZXJJZCwgdXNlclRva2VuLCBtb21lbnRJZCwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlTW9tZW50TGlrZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdhY3Rpb24nOiBhY3Rpb25cblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlTW9tZW50TGlrZShhY3Rpb24sIHVzZXJJZCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb21lbnRDb21tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX01PTUVOVF9DT01NRU5UUyxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTW9tZW50Q29tbWVudHMobW9tZW50SWQsIGNvbW1lbnRMb2FkLCBjb21tZW50QWRkZWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVBhcmFtcyA9ICc/aWQ9JyArIG1vbWVudElkICsgJyZsb2FkPScgKyBjb21tZW50TG9hZCArICcmYWRkPScgKyBjb21tZW50QWRkZWQ7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRNb21lbnRDb21tZW50c0FwaSArIGFwaVBhcmFtcylcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZU1vbWVudENvbW1lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbW1lbnRFbXB0eSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTSE9XX0NPTU1FTlRfRU1QVFlcblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkTW9tZW50Q29tbWVudCh1c2VySWQsIGNvbnRlbnQpIHtcblx0Y29uc3QgZGF0YSA9IFtcblx0XHRjb250ZW50LFxuXHRcdGRvbWFpblVybCArICcvaW1nL3VzZXIvJyArIHVzZXJJZCArICcuanBnJyxcblx0XHQnL3VzZXIvJyArIHVzZXJJZCxcblx0XHRuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxuXHRdO1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEFERF9NT01FTlRfQ09NTUVOVCxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb21lbnRDb21tZW50KHVzZXJJZCwgdXNlclRva2VuLCBtb21lbnRJZCwgY29udGVudCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZU1vbWVudENvbW1lbnRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J21vbWVudCc6IG1vbWVudElkLFxuXHRcdFx0XHQnY29udGVudCc6IGNvbnRlbnRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkTW9tZW50Q29tbWVudCh1c2VySWQsIGNvbnRlbnQpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJleHBvcnQgY29uc3QgZG9tYWluVXJsID0gJ2h0dHBzOi8vc21pbGluZ3MubWUnO1xuXG5leHBvcnQgY29uc3QgYW5kcm9pZFN0b3JlVXJsID0gJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20udGhvdXNhbmRheSc7XG5cbmV4cG9ydCBjb25zdCBnb29nbGVDbGllbnRJZCA9ICcxNjgwOTg4NTAyMzQtZnNxODRwazRjYWU5N21sajBrNDY0am9jMjFjZ3FqdnYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xuZXhwb3J0IGNvbnN0IGZhY2Vib29rQ2xpZW50SWQgPSAnNDQ3Njg4MjY1NTc2MTI1JztcblxuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50RmFjZWJvb2tBcGkgPSAnL2FjY291bnQvZmFjZWJvb2snO1xuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50R29vZ2xlQXBpID0gJy9hY2NvdW50L2dvb2dsZSc7XG5cbmV4cG9ydCBjb25zdCByZWFkSG9tZU1vbWVudHNBcGkgPSAnL2luZGV4L3JlYWQnO1xuXG5leHBvcnQgY29uc3QgcmVhZFBldFBhZ2VBcGkgPSAnL3BldC9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXRXYXRjaEFwaSA9ICcvcGV0L3dhdGNoJztcbmV4cG9ydCBjb25zdCBjcmVhdGVQZXRNb21lbnRBcGkgPSAnL3VwbG9hZC9tb21lbnQnO1xuZXhwb3J0IGNvbnN0IHJlYWRQZXRNb21lbnRzQXBpID0gJy9wZXQvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vbWVudFBhZ2VBcGkgPSAnL21vbWVudC9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vbWVudExpa2VBcGkgPSAnL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL21vbWVudC9sb2FkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVNb21lbnRDb21tZW50QXBpID0gJy9tb21lbnQvY29tbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFBldFBhZ2VBcGksIHVwZGF0ZVBldFdhdGNoQXBpLCBjcmVhdGVQZXRNb21lbnRBcGksXG5cdHJlYWRQZXRNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1BFVF9QQUdFID0gXCJwZXQvQlVJTERfUEVUX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQgPSBcInBldC9TSE9XX0FDQ09VTlRfUkVRVUlSRURcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX1dBVENIID0gXCJwZXQvQ0hBTkdFX1BFVF9XQVRDSFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QRVRfTU9NRU5UID0gXCJwZXQvQUREX1BFVF9NT01FTlRcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX01PTUVOVFMgPSBcInBldC9DSEFOR0VfUEVUX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRQZXRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9QRVRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFBldFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWNjb3VudFJlcXVpcmVkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQUNDT1VOVF9SRVFVSVJFRFxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfV0FUQ0gsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQZXRXYXRjaCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVBldFdhdGNoQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRQZXRNb21lbnQoaW5mbywgcGV0SWQsIG1lc3NhZ2UpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfUEVUX01PTUVOVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCBwZXRJZCwgbWVzc2FnZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBldE1vbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGltYWdlLCBtZXNzYWdlKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRsZXQgdHlwZSA9IGltYWdlLnR5cGU7XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCIvXCIpWzFdO1xuXHRcdHR5cGUgPSBcIi5cIiArIHR5cGU7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlLCB0eXBlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInBldFwiLCBwZXRJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCB1c2VySWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInRva2VuXCIsIHVzZXJUb2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVBldE1vbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRQZXRNb21lbnQocmVzdWx0LCBwZXRJZCwgbWVzc2FnZSkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUGV0TW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVF9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFBldE1vbWVudHMocGV0SWQsIGxvYWQsIGFkZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gJz9hZGQ9JyArIGFkZCArICcmbG9hZD0nICsgbG9hZCArICcmcGV0PScgKyBwZXRJZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFBldE1vbWVudHNBcGkgKyBwYXJhbXMpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VQZXRNb21lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3BldC5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb21tZW50cyhkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGNvbW1lbnQuY29tbWVudF9jb250ZW50LFxuXHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQgKyBcIi5qcGdcIixcblx0XHRcdFwiL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQsXG5cdFx0XHRuZXcgRGF0ZShjb21tZW50LmNvbW1lbnRfdGltZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhY2NvdW50IGZyb20gJy4vcmVkdWNlcnMvYWNjb3VudCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL3JlZHVjZXJzL2hvbWUnO1xuaW1wb3J0IHBldCBmcm9tICcuL3JlZHVjZXJzL3BldCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJy4vcmVkdWNlcnMvbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcblx0YWNjb3VudCxcblx0aG9tZSxcblx0bW9tZW50LFxuXHRwZXRcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsImltcG9ydCB7IENIQU5HRV9BQ0NPVU5UX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2FjY291bnQnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdGlkOiBudWxsLFxuXHRuYW1lOiBudWxsLFxuXHR0b2tlbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRpZiAoc3RhdGUuaWQgPT09IG51bGwgJiYgYWN0aW9uLmRhdGFbMF0gIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRpZDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF0pLFxuXHRcdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRcdHRva2VuOiBhY3Rpb24uZGF0YVsyXVxuXHRcdFx0XHR9O1x0XG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hY2NvdW50LmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0hPTUVfTU9NRU5UUyB9IGZyb20gJy4uL2FjdGlvbnMvaG9tZSc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIG1vbWVudHMgZGF0YVxuXHRkYXRhOiBbXSxcblx0Ly9yZWNvcmQgbG9hZCBudW1iZXJcblx0bG9hZDogMCxcblx0Ly9hbGxvdyBsb2FkIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0hPTUVfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLmNvbmNhdChuZXdEYXRhKSxcblx0XHRcdFx0bG9ja2VyOiBuZXdEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX01PTUVOVF9QQUdFLCBTSE9XX01PTUVOVF9ERUxFVEUsIFJFRElSRUNUX1VTRVJfUEFHRSwgQ0hBTkdFX01PTUVOVF9MSUtFLFxuXHRDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLCBTSE9XX0NPTU1FTlRfRU1QVFksIEFERF9NT01FTlRfQ09NTUVOVFxufSBmcm9tICcuLi9hY3Rpb25zL21vbWVudCc7XG5pbXBvcnQgYnVpbGRDb21tZW50cyBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkQ29tbWVudHMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdG1vbWVudERhdGE6IFtdLFxuXHRmYW1pbHlEYXRhOiBbXSxcblx0bGlrZURhdGE6IFtdLFxuXHRjb21tZW50RGF0YTogW10sXG5cdHNob3dDb25maXJtOiBmYWxzZSxcblx0Y29tbWVudExvY2tlcjogZmFsc2UsXG5cdGNvbW1lbnRBZGRlZDogMCxcblx0Y29tbWVudExvYWQ6IDAsXG5cdGNvbW1lbnRFcnJvcjogbnVsbCxcblx0cmVkaXJlY3RVc2VyOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX01PTUVOVF9QQUdFOlxuXHRcdFx0Y29uc3QgbGlrZURhdGEgPSBhY3Rpb24uZGF0YVsyXS5tYXAoZnVuY3Rpb24obGlrZSkge1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQobGlrZS51c2VyX2lkKTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgY29tbWVudERhdGEgPSBidWlsZENvbW1lbnRzKGFjdGlvbi5kYXRhWzNdKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnREYXRhOiBhY3Rpb24uZGF0YVswXSxcblx0XHRcdFx0ZmFtaWx5RGF0YTogW1xuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLm93bmVyX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XHRwYXJzZUludChhY3Rpb24uZGF0YVsxXS5yZWxhdGl2ZV9pZCkgfHwgbnVsbCwgXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpa2VEYXRhLFxuXHRcdFx0XHRjb21tZW50RGF0YSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSA1XG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19NT01FTlRfREVMRVRFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dDb25maXJtOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVESVJFQ1RfVVNFUl9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0VXNlcjogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfTElLRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsaWtlRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUubGlrZURhdGEsIGFjdGlvbi5kYXRhLnVzZXJJZF0gOlxuXHRcdFx0XHRcdHN0YXRlLmxpa2VEYXRhLmZpbHRlcihmdW5jdGlvbihsaWtlKSB7IHJldHVybiBsaWtlICE9PSBhY3Rpb24uZGF0YS51c2VySWQgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTOlxuXHRcdFx0Y29uc3QgbmV3Q29tbWVudHMgPSBidWlsZENvbW1lbnRzKGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RGF0YTogWy4uLnN0YXRlLmNvbW1lbnREYXRhLCAuLi5uZXdDb21tZW50c10sXG5cdFx0XHRcdGNvbW1lbnRMb2FkOiBzdGF0ZS5jb21tZW50TG9hZCArIDEsXG5cdFx0XHRcdGNvbW1lbnRMb2NrZXI6IGFjdGlvbi5kYXRhLmxlbmd0aCAhPT0gMTBcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX0NPTU1FTlRfRU1QVFk6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudEVycm9yOiBcIkNvbW1lbnQgY2Fu4oCydCBiZSBlbXB0eVwiXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX01PTUVOVF9DT01NRU5UOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLmNvbW1lbnREYXRhXSxcblx0XHRcdFx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRcdFx0XHRjb21tZW50QWRkZWQ6IHN0YXRlLmNvbW1lbnRBZGRlZCArIDFcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfUEVUX1BBR0UsIFNIT1dfQUNDT1VOVF9SRVFVSVJFRCwgQ0hBTkdFX1BFVF9XQVRDSCwgQUREX1BFVF9NT01FTlQsIENIQU5HRV9QRVRfTU9NRU5UU1xufSBmcm9tICcuLi9hY3Rpb25zL3BldCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgeyBub0dldEFiaWxpdHkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL25vVG9JbmZvJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vaW5kaWNhdGUgcGV0IGJlbG9uZyB0byBjdXJyZW50IHVzZXIgb3Igbm90XG5cdHBldE93bmVyOiBmYWxzZSxcblx0Ly9zdG9yZSBkYXRhIGZvciBvbmUgcGV0XG5cdHBldERhdGE6IHt9LFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldCdzIGZhbWlseVxuXHRmYW1pbHlEYXRhOiBbXSxcblx0Ly9zdG9yZSBkYXRhIGZvciBwZXRzIGZyaWVuZFxuXHRmcmllbmREYXRhOiBbXSxcblx0Ly9zdG9yZSBkYXRhIGZvciBpbWFnZSBnYWxsZXJ5XG5cdGdhbGxlcnlEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIGhvdyBtYW55IHRpbWVzXG5cdGxvYWQ6IDEsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlLFxuXHQvL2luZGljYXRlIGFkZCBob3cgbWFueSBpbWFnZXNcblx0YWRkOiAwLFxuXHQvL3N0b3JlIGFsbCB3YXRjaGVyIG9mIGN1cnJlbnQgcGV0XG5cdHdhdGNoRGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbm90aWNlIHVzZXIgbG9naW4gb3Igbm90XG5cdGxvZ2luUmVxdWlyZWQ6IGZhbHNlLFxuXHQvL3RyaWdnZXIgcmVzZXQgZnVuY3Rpb24gZm9yIHBvc3QgaW1hZ2Vcblx0cmVzZXQ6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfUEVUX1BBR0U6XG5cdFx0XHRhY3Rpb24uZGF0YVswXVsnb3duZXJfaWQnXSA9IHBhcnNlSW50KGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddKTtcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddID0gYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPT09IG51bGwgPyBcblx0XHRcdFx0bnVsbCA6IHBhcnNlSW50KGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddKTtcbiAgICAgIHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXREYXRhOiBhY3Rpb24uZGF0YVswXSxcblx0XHRcdFx0ZmFtaWx5RGF0YTogYWN0aW9uLmRhdGFbMV0sXG5cdFx0XHRcdGZyaWVuZERhdGE6IGFjdGlvbi5kYXRhWzJdLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhWzNdLmxlbmd0aCAhPT0gMjAsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGFbM10pLFxuXHRcdFx0XHR3YXRjaERhdGE6IGFjdGlvbi5kYXRhWzRdLm1hcChmdW5jdGlvbih3YXRjaCkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCh3YXRjaC51c2VyX2lkKTtcblx0XHRcdFx0fSlcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX0FDQ09VTlRfUkVRVUlSRUQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9naW5SZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX1BFVF9XQVRDSDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR3YXRjaERhdGE6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMSA/XG5cdFx0XHRcdFx0Wy4uLnN0YXRlLndhdGNoRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUud2F0Y2hEYXRhLmZpbHRlcihmdW5jdGlvbih3YXRjaCkgeyByZXR1cm4gd2F0Y2ggIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9QRVRfTU9NRU5UOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50ID0gW1xuXHRcdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgYWN0aW9uLmRhdGEucGV0SWQgKyBcIi9tb21lbnQvXCIgKyBhY3Rpb24uZGF0YS5pbmZvWzFdLFxuXHRcdFx0XHRhY3Rpb24uZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcIi9tb21lbnQvXCIgKyBhY3Rpb24uZGF0YS5pbmZvWzBdXG5cdFx0XHRdO1xuXHRcdFx0aWYgKGFjdGlvbi5kYXRhLmluZm8ubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRcdGNvbnN0IGFiaWxpdHkgPSBub0dldEFiaWxpdHkoYWN0aW9uLmRhdGEuaW5mb1syXSk7XG5cdFx0XHRcdGNvbnN0IG5ld0FiaWxpdHkgPSB7Li4uc3RhdGUucGV0RGF0YX07XG5cdFx0XHRcdG5ld0FiaWxpdHlbYWJpbGl0eV0gPSBwYXJzZUludChzdGF0ZS5wZXREYXRhW2FiaWxpdHldKSArIDE7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0Z2FsbGVyeURhdGE6IFtuZXdNb21lbnQsIC4uLnN0YXRlLmdhbGxlcnlEYXRhXSxcblx0XHRcdFx0XHRyZXNldDogc3RhdGUucmVzZXQgKyAxLFxuXHRcdFx0XHRcdGFkZDogc3RhdGUuYWRkICsgMSxcblx0XHRcdFx0XHRwZXREYXRhOiBuZXdBYmlsaXR5XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0Z2FsbGVyeURhdGE6IFtuZXdNb21lbnQsIC4uLnN0YXRlLmdhbGxlcnlEYXRhXSxcblx0XHRcdFx0XHRyZXNldDogc3RhdGUucmVzZXQgKyAxLFxuXHRcdFx0XHRcdGFkZDogc3RhdGUuYWRkICsgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX01PTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdEYXRhID0gYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogc3RhdGUuZ2FsbGVyeURhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBuZXdEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9wZXQuanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJ1bmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBtb2Q6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxvYWQgIT09IHRoaXMucHJvcHMubG9hZCkge1xuICAgICAgdGhpcy5sb2FkKG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZChwcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG51bGwgfSk7XG4gICAgcHJvcHMubG9hZCgobW9kKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBtb2QuZGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUubW9kKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW5kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuLi9wYWdlcy9Ib21lJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPW1vbWVudCEuLi9wYWdlcy9Nb21lbnQnO1xuaW1wb3J0IFRlcm1zIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4uL3BhZ2VzL1Rlcm1zJztcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4gKHByb3BzKSA9PiAoXG4gIDxCdW5kbGUgbG9hZD17IGNvbXBvbmVudCB9PlxuICAgIHtcbiAgICAgIChDb21wb25lbnQpID0+IENvbXBvbmVudCA/IDxDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+IDogbnVsbFxuICAgIH1cbiAgPC9CdW5kbGU+XG4pO1xuXG5jb25zdCBnZXRSb3V0ZXIgPSAoKSA9PiAoXG4gIDxSb3V0ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cblx0XHRcdFx0PGEgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8aW1nIGlkPVwiaGVhZGVyLWxvZ29cIiBzcmM9XCIvcHVibGljL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGg1IGlkPVwiaGVhZGVyLWRlc2NcIj5Ib21lcGFnZSBmb3IgcGV0czwvaDU+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9leHBsb3JlXCI+XG5cdFx0XHRcdFx0PGg1PkV4cGxvcmU8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8aDU+UHVibGljPC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9oZWFkZXI+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoSG9tZSkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9wZXQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFBldCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi90ZXJtc1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChUZXJtcykgfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxoNj7CqSAyMDE3LTIwMTggU21pbGluZ3MubWU8L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViXCIgdGFyZ2V0PVwiX19ibGFua1wiPlNvdXJjZSBDb2RlPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjYvVGhvdXNhbmRheS1XZWIvaXNzdWVzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlJlcG9ydDwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHA6Ly9nbHlwaGljb25zLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5HbHlwaGljb25zPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX19ibGFua1wiPlRlcm1zICYgUHJpdmFjeSBQb2xpY3k8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNlwiIHRhcmdldD1cIl9fYmxhbmtcIj5BYm91dDwvYT48L2g2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vSG9tZS5qc1wiKSk7XG5cdH0sIFwiaG9tZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuL3NyYy9wYWdlcy9Ib21lLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL01vbWVudC5qc1wiKSk7XG5cdH0sIFwibW9tZW50XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi9zcmMvcGFnZXMvTW9tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1BldC5qc1wiKSk7XG5cdH0sIFwicGV0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1wZXQhLi9zcmMvcGFnZXMvUGV0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1Rlcm1zLmpzXCIpKTtcblx0fSwgXCJ0ZXJtc1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dGVybXMhLi9zcmMvcGFnZXMvVGVybXMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2hlYWRlcntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdGxpbmUtaGVpZ2h0OiA1MHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuI2hlYWRlci1kZXNje1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5oZWFkZXItbmF2aXtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdG1hcmdpbi1yaWdodDogNSU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVhZGVyLWxvZ297XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ2lue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXItbG9naW4gaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jaGVhZGVyLWxvZ2luIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItZHJvcHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbiNoZWFkZXItZHJvcC1tZXNzYWdle1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA1MjQ1NiAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogOHB4IDIlICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWRyb3AgYXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyLWRyb3AgaW5wdXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNoZWFkZXItZHJvcC1sb2dvdXR7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWY4NTEzO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wLWhpZGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHRcXHRcXHRcXG59XFxuI2hlYWRlci1kcm9wLW5vdGljZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI2Zvb3RlcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0cGFkZGluZzogNXB4IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiA3MHB4O1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG5cXG4jZm9vdGVyIGg2e1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzJTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==