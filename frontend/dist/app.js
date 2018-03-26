webpackJsonp([10],[
/* 0 */,
/* 1 */,
/* 2 */
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

var createAddPetApi = exports.createAddPetApi = '/upload/add';
var readEditPageApi = exports.readEditPageApi = '/edit/read';
var updateEditNameApi = exports.updateEditNameApi = '/edit/name';
var updateEditProfileApi = exports.updateEditProfileApi = '/upload/pet';
var deleteEditRelativeApi = exports.deleteEditRelativeApi = '/edit/remove';
var readEditSearchApi = exports.readEditSearchApi = '/edit/search';
var createEditRelativeApi = exports.createEditRelativeApi = '/edit/add';
var updateEditTransferApi = exports.updateEditTransferApi = '/edit/transfer';
var updateEditRelationApi = exports.updateEditRelationApi = '/edit/end';

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = processError;
function processError(err) {
	window.location.replace('/' + err);
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildGallery;

var _config = __webpack_require__(2);

function buildGallery(data) {
	return data.map(function (image) {
		return [_config.domainUrl + '/img/pet/' + image.pet_id + '/moment/' + image.image_name, image.moment_message, '/moment/' + image.moment_id];
	});
}

/***/ }),
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
exports.CLEAR_ACCOUNT_SIGNUP = exports.REDIRECT_TO_SIGNUP = exports.CLEAR_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = undefined;
exports.changeAccountData = changeAccountData;
exports.readAccountData = readAccountData;
exports.deleteAccountToken = deleteAccountToken;
exports.clearAccountSignup = clearAccountSignup;

var _config = __webpack_require__(2);

var CHANGE_ACCOUNT_DATA = exports.CHANGE_ACCOUNT_DATA = "account/CHANGE_ACCOUNT_DATA";
var CLEAR_ACCOUNT_DATA = exports.CLEAR_ACCOUNT_DATA = "account/CLEAR_ACCOUNT_DATA";
var REDIRECT_TO_SIGNUP = exports.REDIRECT_TO_SIGNUP = "account/REDIRECT_TO_SIGNUP";
var CLEAR_ACCOUNT_SIGNUP = exports.CLEAR_ACCOUNT_SIGNUP = "account/CLEAR_ACCOUNT_SIGNUP";

function changeAccountData(data) {
	return {
		type: CHANGE_ACCOUNT_DATA,
		data: data
	};
}

function redirectToSignup() {
	return {
		type: REDIRECT_TO_SIGNUP
	};
}

function readAccountData(portal, detail) {
	var apiUrl = portal === 'facebook' ? _config.readAccountFacebookApi : _config.readAccountGoogleApi;
	return function (dispatch) {
		return fetch(_config.domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": detail.token,
				"platform": "website"
			})
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
			if (json.id) {
				localStorage.setItem("newId", json.id);
				localStorage.setItem("newToken", detail.token);
				localStorage.setItem("newPlatform", portal);
				if (portal === 'facebook') {
					localStorage.setItem("newName", detail.response.name);
					localStorage.setItem("newAvatar", "http://graph.facebook.com/" + json.id + "/picture?type=square&width=720&height=720");
				} else {
					localStorage.setItem("newName", detail.name);
					localStorage.setItem("newAvatar", detail.imageUrl);
				}
				dispatch(redirectToSignup());
			} else {
				localStorage.setItem("id", json[0]);
				localStorage.setItem("name", json[1]);
				localStorage.setItem("token", json[2]);
				dispatch(changeAccountData(json));
			}
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

function clearAccountSignup() {
	return {
		type: CLEAR_ACCOUNT_SIGNUP
	};
}

/***/ }),
/* 37 */,
/* 38 */
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

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
		}).then(function (json) {
			dispatch(buildSettingPage(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeSettingAbout(about));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			localStorage.setItem("name", name);
			dispatch(changeAccountName(name));
			dispatch(changeSettingName());
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeSettingProfile());
		});
	};
}

/***/ }),
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
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(87);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(90);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	(0, _router2.default)()
), document.getElementById('root'));

/***/ }),
/* 57 */
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
/* 58 */
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

var	fixUrls = __webpack_require__(163);

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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.REDIRECT_TO_USER = exports.CHANGE_ADD_UPDATE = exports.CHANGE_ADD_DETAIL = undefined;
exports.changeAddDetail = changeAddDetail;
exports.changeAddUpdate = changeAddUpdate;
exports.createAddPet = createAddPet;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_ADD_DETAIL = exports.CHANGE_ADD_DETAIL = 'add/CHANGE_ADD_DETAIL';
var CHANGE_ADD_UPDATE = exports.CHANGE_ADD_UPDATE = 'add/CHANGE_ADD_UPDATE';
var REDIRECT_TO_USER = exports.REDIRECT_TO_USER = 'add/REDIRECT_TO_USER';

function changeAddDetail(type, value) {
	return {
		type: CHANGE_ADD_DETAIL,
		data: {
			type: type, value: value
		}
	};
}

function changeAddUpdate(data) {
	return {
		type: CHANGE_ADD_UPDATE,
		data: data
	};
}

function redirectToUser() {
	return {
		type: REDIRECT_TO_USER
	};
}

function createAddPet(petName, petGender, petType, petNature, petAvatar, userId, userToken) {
	return function (dispatch) {
		var fileData = new FormData();
		fileData.append("name", petName);
		fileData.append("gender", petGender);
		fileData.append("type", petType);
		fileData.append("nature", petNature);
		fileData.append("file", petAvatar, ".png");
		fileData.append("user", userId);
		fileData.append("token", userToken);
		return fetch(_config.domainUrl + _config.createAddPetApi, {
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(redirectToUser());
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
exports.REDIRECT_TO_HOME = exports.CHANGE_EDIT_END = exports.CHANGE_EDIT_TRANSFER = exports.CHANGE_EDIT_OWNERSHIP = exports.ADD_EDIT_RELATIVE = exports.CHANGE_EDIT_SEARCH = exports.RESET_EDIT_SEARCH = exports.CHANGE_EDIT_ADD = exports.REMOVE_EDIT_RELATIVE = exports.CHANGE_EDIT_REMOVE = exports.CHANGE_EDIT_NAME = exports.CHANGE_EDIT_UPDATE = exports.BUILD_EDIT_PAGE = undefined;
exports.readEditPage = readEditPage;
exports.changeEditUpdate = changeEditUpdate;
exports.updateEditName = updateEditName;
exports.updateEditProfile = updateEditProfile;
exports.changeEditRemove = changeEditRemove;
exports.deleteEditRelative = deleteEditRelative;
exports.changeEditAdd = changeEditAdd;
exports.resetEditSearch = resetEditSearch;
exports.readEditSearch = readEditSearch;
exports.createEditRelative = createEditRelative;
exports.changeEditOwnership = changeEditOwnership;
exports.updateEditTransfer = updateEditTransfer;
exports.changeEditEnd = changeEditEnd;
exports.redirectToHome = redirectToHome;
exports.updateEditRelation = updateEditRelation;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_EDIT_PAGE = exports.BUILD_EDIT_PAGE = 'edit/BUILD_EDIT_PAGE';
var CHANGE_EDIT_UPDATE = exports.CHANGE_EDIT_UPDATE = 'edit/CHANGE_EDIT_UPDATE';
var CHANGE_EDIT_NAME = exports.CHANGE_EDIT_NAME = 'edit/CHANGE_EDIT_NAME';
var CHANGE_EDIT_REMOVE = exports.CHANGE_EDIT_REMOVE = 'edit/CHANGE_EDIT_REMOVE';
var REMOVE_EDIT_RELATIVE = exports.REMOVE_EDIT_RELATIVE = 'edit/REMOVE_EDIT_RELATIVE';
var CHANGE_EDIT_ADD = exports.CHANGE_EDIT_ADD = 'edit/CHANGE_EDIT_ADD';
var RESET_EDIT_SEARCH = exports.RESET_EDIT_SEARCH = 'edit/RESET_EDIT_SEARCH';
var CHANGE_EDIT_SEARCH = exports.CHANGE_EDIT_SEARCH = 'edit/CHANGE_EDIT_SEARCH';
var ADD_EDIT_RELATIVE = exports.ADD_EDIT_RELATIVE = 'edit/ADD_EDIT_RELATIVE';
var CHANGE_EDIT_OWNERSHIP = exports.CHANGE_EDIT_OWNERSHIP = 'edit/CHANGE_EDIT_OWNERSHIP';
var CHANGE_EDIT_TRANSFER = exports.CHANGE_EDIT_TRANSFER = 'edit/CHANGE_EDIT_TRANSFER';
var CHANGE_EDIT_END = exports.CHANGE_EDIT_END = 'edit/CHANGE_EDIT_END';
var REDIRECT_TO_HOME = exports.REDIRECT_TO_HOME = 'edit/REDIRECT_TO_HOME';

function buildEditPage(data) {
	return {
		type: BUILD_EDIT_PAGE,
		data: data
	};
}

function readEditPage(petId, userId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readEditPageApi + '?pet=' + petId + '&user=' + userId).then(function (response) {
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(buildEditPage(json));
		});
	};
}

function changeEditUpdate(data) {
	return {
		type: CHANGE_EDIT_UPDATE,
		data: data
	};
}

function changeEditName(data) {
	return {
		type: CHANGE_EDIT_NAME,
		data: data
	};
}

function updateEditName(userId, userToken, petId, petName) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateEditNameApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"name": petName
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeEditName(petName));
		});
	};
}

function updateEditProfile(userId, userToken, petId, file) {
	return function (dispatch) {
		var formData = new FormData();
		formData.append('file', file, petId + ".png");
		formData.append('user', userId);
		formData.append('token', userToken);
		formData.append('pet', petId);
		return fetch(_config.domainUrl + _config.updateEditProfileApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			processData: false,
			body: formData
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeEditUpdate('Avatar updated successfully!'));
		});
	};
}

function changeEditRemove() {
	return {
		type: CHANGE_EDIT_REMOVE
	};
}

function removeEditRelative() {
	return {
		type: REMOVE_EDIT_RELATIVE
	};
}

function deleteEditRelative(userId, userToken, petId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.deleteEditRelativeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(removeEditRelative());
		});
	};
}

function changeEditAdd() {
	return {
		type: CHANGE_EDIT_ADD
	};
}

function resetEditSearch() {
	return {
		type: RESET_EDIT_SEARCH
	};
}

function changeEditSearch(searchId, searchData) {
	return {
		type: CHANGE_EDIT_SEARCH,
		data: {
			searchId: searchId, searchData: searchData
		}
	};
}

function readEditSearch(searchId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.readEditSearchApi + '?id=' + searchId).then(function (response) {
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeEditSearch(searchId, json));
		});
	};
}

function addEditRelative() {
	return {
		type: ADD_EDIT_RELATIVE
	};
}

function createEditRelative(userId, userToken, petId, searchId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.createEditRelativeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"add": searchId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(addEditRelative());
		});
	};
}

function changeEditOwnership() {
	return {
		type: CHANGE_EDIT_OWNERSHIP
	};
}

function changeEditTransfer() {
	return {
		type: CHANGE_EDIT_TRANSFER
	};
}

function updateEditTransfer(userId, userToken, petId, relativeId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateEditTransferApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"relative": relativeId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeEditTransfer());
		});
	};
}

function changeEditEnd() {
	return {
		type: CHANGE_EDIT_END
	};
}

function redirectToHome() {
	return {
		type: REDIRECT_TO_HOME
	};
}

function updateEditRelation(userId, userToken, petId) {
	return function (dispatch) {
		return fetch(_config.domainUrl + _config.updateEditRelationApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId
			})
		}).then(function (response) {
			if (response.ok) {
				return true;
			}
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(redirectToHome());
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
exports.CHANGE_EXPLORE_MOMENTS = exports.CHANGE_EXPLORE_NATURE = exports.CHANGE_EXPLORE_TYPE = undefined;
exports.readExploreMoments = readExploreMoments;
exports.selectExploreType = selectExploreType;
exports.selectExploreNature = selectExploreNature;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeExploreMoments(json, type, nature, load));
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_HOME_MOMENTS = undefined;
exports.readHomeMoments = readHomeMoments;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeHomeMoments(json));
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
exports.ADD_MOMENT_COMMENT = exports.SHOW_COMMENT_EMPTY = exports.CHANGE_MOMENT_COMMENTS = exports.CHANGE_MOMENT_LIKE = exports.REDIRECT_USER_PAGE = exports.SHOW_MOMENT_DELETE = exports.BUILD_MOMENT_PAGE = undefined;
exports.readMomentPage = readMomentPage;
exports.showMomentDelete = showMomentDelete;
exports.deleteMomentPage = deleteMomentPage;
exports.updateMomentLike = updateMomentLike;
exports.readMomentComments = readMomentComments;
exports.showCommentEmpty = showCommentEmpty;
exports.createMomentComment = createMomentComment;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(buildMomentPage(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(redirctUserPage());
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeMomentLike(action, userId));
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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeMomentComments(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(addMomentComment(userId, content));
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
exports.CHANGE_PET_MOMENTS = exports.ADD_PET_MOMENT = exports.CHANGE_PET_WATCH = exports.SHOW_ACCOUNT_REQUIRED = exports.BUILD_PET_PAGE = undefined;
exports.readPetPage = readPetPage;
exports.showAccountRequired = showAccountRequired;
exports.updatePetWatch = updatePetWatch;
exports.createPetMoment = createPetMoment;
exports.readPetMoments = readPetMoments;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(buildPetPage(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changePetWatch(action, userId));
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
			(0, _processError2.default)(response.status);
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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changePetMoments(json));
		});
	};
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_REQUEST_USER = exports.BUILD_REQUEST_PAGE = undefined;
exports.readRequestPage = readRequestPage;
exports.updateRequestUser = updateRequestUser;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
		}).then(function (json) {
			dispatch(buildRequestPage(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeRequestUser(index));
		});
	};
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_USER_MOMENTS = exports.BUILD_USER_PAGE = undefined;
exports.readUserPage = readUserPage;
exports.readUserMoments = readUserMoments;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(buildUserPage(json, parseInt(id)));
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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeUserMoments(json));
		});
	};
}

/***/ }),
/* 73 */
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

var _config = __webpack_require__(2);

var _processError = __webpack_require__(6);

var _processError2 = _interopRequireDefault(_processError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			if (response.ok) {
				return response.json();
			}
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(buildWatchPage(json));
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
			(0, _processError2.default)(response.status);
		}).then(function () {
			dispatch(changeWatchPet(action, petId));
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
			(0, _processError2.default)(response.status);
		}).then(function (json) {
			dispatch(changeWatchMoments(json, load, loadList));
		});
	};
}

function changePetsLoad() {
	return {
		type: CHANGE_PETS_LOAD
	};
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildComments;

var _config = __webpack_require__(2);

function buildComments(data) {
	return data.map(function (comment) {
		return [comment.comment_content, _config.domainUrl + "/img/user/" + comment.user_id + ".jpg", "/user/" + comment.user_id, new Date(comment.comment_time).toISOString().substring(0, 10)];
	});
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(13);

var _account = __webpack_require__(76);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(80);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(82);

var _pet2 = _interopRequireDefault(_pet);

var _user = __webpack_require__(85);

var _user2 = _interopRequireDefault(_user);

var _moment = __webpack_require__(81);

var _moment2 = _interopRequireDefault(_moment);

var _explore = __webpack_require__(79);

var _explore2 = _interopRequireDefault(_explore);

var _watch = __webpack_require__(86);

var _watch2 = _interopRequireDefault(_watch);

var _request = __webpack_require__(83);

var _request2 = _interopRequireDefault(_request);

var _setting = __webpack_require__(84);

var _setting2 = _interopRequireDefault(_setting);

var _add = __webpack_require__(77);

var _add2 = _interopRequireDefault(_add);

var _edit = __webpack_require__(78);

var _edit2 = _interopRequireDefault(_edit);

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
	setting: _setting2.default,
	add: _add2.default,
	edit: _edit2.default
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(36);

var _setting = __webpack_require__(38);

var initState = {
	id: null,
	name: null,
	token: null,
	redirectSignup: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _account.CHANGE_ACCOUNT_DATA:
			if (action.data[0] !== null) {
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
		case _account.REDIRECT_TO_SIGNUP:
			return _extends({}, state, {
				redirectSignup: true
			});
		case _account.CLEAR_ACCOUNT_SIGNUP:
			return _extends({}, state, {
				redirectSignup: false
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

var _add = __webpack_require__(65);

var initState = {
	//indicate update result
	updateResult: null,
	//store avatar image
	createAvatar: null,
	//store pet gender
	createGender: null,
	//store create type
	createType: null,
	//store create nature
	createNature: null,
	redirectUser: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _add.CHANGE_ADD_DETAIL:
			var newState = _extends({}, state);
			newState['create' + action.data.type] = action.data.value;
			return newState;
		case _add.CHANGE_ADD_UPDATE:
			return _extends({}, state, {
				updateResult: action.data
			});
		case _add.REDIRECT_TO_USER:
			return _extends({}, state, {
				redirectUser: true
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

var _edit = __webpack_require__(66);

var initState = {
	//store pet data
	petData: {},
	//store pet name
	petName: "",
	//indicate update info
	updateResult: null,
	//show end relation box
	showEnd: false,
	//show add relative box
	showAdd: false,
	//content in search bar
	search: "",
	//store search data
	searchData: null,
	//show remove relative box
	showRemove: false,
	//show transfer box
	showTransfer: false,
	dataLoaded: false,
	redirectHome: false
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case _edit.BUILD_EDIT_PAGE:
			return _extends({}, state, {
				petData: action.data,
				petName: action.data.pet_name,
				dataLoaded: true
			});
		case _edit.CHANGE_EDIT_UPDATE:
			return _extends({}, state, {
				updateResult: action.data
			});
		case _edit.CHANGE_EDIT_NAME:
			return _extends({}, state, {
				petName: action.data,
				updateResult: 'Name updated Successfully!'
			});
		case _edit.CHANGE_EDIT_REMOVE:
			return _extends({}, state, {
				showRemove: !state.showRemove
			});
		case _edit.REMOVE_EDIT_RELATIVE:
			return _extends({}, state, {
				showRemove: false,
				updateResult: 'Successfully removed relative!',
				petData: _extends({}, state.petData, { relative_id: null })
			});
		case _edit.CHANGE_EDIT_ADD:
			return _extends({}, state, {
				showAdd: !state.showAdd,
				search: '',
				searchData: null
			});
		case _edit.RESET_EDIT_SEARCH:
			return _extends({}, state, {
				search: '',
				searchData: null
			});
		case _edit.CHANGE_EDIT_SEARCH:
			return _extends({}, state, {
				search: action.data.searchId,
				searchData: action.data.searchData
			});
		case _edit.ADD_EDIT_RELATIVE:
			return _extends({}, state, {
				showAdd: false,
				search: '',
				searchData: null,
				updateResult: 'Request sent successfully!'
			});
		case _edit.CHANGE_EDIT_OWNERSHIP:
			return _extends({}, state, {
				showTransfer: !state.showTransfer
			});
		case _edit.CHANGE_EDIT_TRANSFER:
			return _extends({}, state, {
				showTransfer: false,
				petData: _extends({}, state.petData, {
					owner_id: state.petData.relative_id,
					relative_id: state.petData.owner_id
				}),
				updateResult: 'Successfully transferred ownership!'
			});
		case _edit.CHANGE_EDIT_END:
			return _extends({}, state, {
				showEnd: !state.showEnd
			});
		case _edit.REDIRECT_TO_HOME:
			return _extends({}, state, {
				redirectHome: true
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

var _explore = __webpack_require__(67);

var _buildGallery = __webpack_require__(10);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(68);

var _buildGallery = __webpack_require__(10);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(69);

var _buildComments = __webpack_require__(74);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(70);

var _config = __webpack_require__(2);

var _noToInfo = __webpack_require__(61);

var _buildGallery = __webpack_require__(10);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _request = __webpack_require__(71);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _setting = __webpack_require__(38);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _user = __webpack_require__(72);

var _config = __webpack_require__(2);

var _buildGallery = __webpack_require__(10);

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _watch = __webpack_require__(73);

var _buildGallery = __webpack_require__(10);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reduxThunk = __webpack_require__(30);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(75);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 88 */
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
/* 89 */
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

var _account = __webpack_require__(36);

var _config = __webpack_require__(2);

var _Googlelogin = __webpack_require__(60);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(59);

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
			showDrop: false,
			redirectHome: false
		};
		return _this;
	}

	_createClass(Header, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.props.changeAccountData([localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('token')]);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.state.redirectHome) {
				this.setState({ redirectHome: false });
			} else if (this.props.account.redirectSignup) {
				this.props.clearAccountSignup();
			}
		}
	}, {
		key: "gLogin",
		value: function gLogin(detail) {
			if (this.props.account.id === null) {
				this.props.readAccountData('google', detail);
			}
		}
	}, {
		key: "fLogin",
		value: function fLogin(response, token) {
			if (this.props.account.id === null) {
				this.props.readAccountData('facebook', { response: response, token: token });
			}
		}
	}, {
		key: "showDrop",
		value: function showDrop() {
			this.setState({ showDrop: !this.state.showDrop });
		}
	}, {
		key: "logOut",
		value: function logOut() {
			if (FB) {
				FB.logout();
			}
			if (gapi) {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut();
			}
			this.props.deleteAccountToken(this.props.account.id, this.props.account.token);
			this.setState({ redirectHome: true });
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.redirectHome) {
				return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
			} else if (this.props.account.redirectSignup) {
				return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signup' });
			}
			var loginStyle = this.state.showDrop ? "header-drop" : "header-drop-hide";
			var userInfo = _react2.default.createElement(
				"div",
				{ id: "header-login", onClick: this.showDrop.bind(this) },
				_react2.default.createElement(
					"h5",
					null,
					this.props.account.id === null ? 'Login' : this.props.account.name
				),
				_react2.default.createElement("img", { src: "/public/icon/glyphicons-dropdown.png" })
			);
			var logoutBoard = void 0;
			if (this.state.showDrop && this.props.account.id !== null) {
				logoutBoard = _react2.default.createElement(
					"section",
					{ className: "header-drop" },
					_react2.default.createElement(
						"a",
						{ href: "/user/" + this.props.account.id },
						_react2.default.createElement(
							"h5",
							null,
							"Home"
						)
					),
					_react2.default.createElement(
						"a",
						{ href: "/watch" },
						_react2.default.createElement(
							"h5",
							null,
							"Watch List"
						)
					),
					_react2.default.createElement(
						"a",
						{ href: "/request" },
						_react2.default.createElement(
							"h5",
							null,
							"Requests"
						)
					),
					_react2.default.createElement(
						"a",
						{ href: "/setting" },
						_react2.default.createElement(
							"h5",
							null,
							"Setting"
						)
					),
					_react2.default.createElement(
						"h6",
						{ id: "header-drop-logout", onClick: this.logOut.bind(this) },
						"Log Out"
					)
				);
			}
			return _react2.default.createElement(
				"header",
				{ id: "header" },
				_react2.default.createElement(
					"a",
					{ href: "/" },
					_react2.default.createElement("img", { id: "header-logo", src: "/public/logo.png", alt: "logo" })
				),
				_react2.default.createElement(
					"h5",
					{ id: "header-desc" },
					"Homepage for pets"
				),
				userInfo,
				_react2.default.createElement(
					"a",
					{ className: "header-navi", href: "/explore" },
					_react2.default.createElement(
						"h5",
						null,
						"Explore"
					)
				),
				_react2.default.createElement(
					"a",
					{ className: "header-navi", href: "/" },
					_react2.default.createElement(
						"h5",
						null,
						"Public"
					)
				),
				_react2.default.createElement(
					"section",
					{ className: loginStyle },
					_react2.default.createElement(
						"h5",
						{ id: "header-drop-notice" },
						"Click to sign in or sign up"
					),
					_react2.default.createElement(_Googlelogin2.default, {
						clientId: _config.googleClientId,
						width: "200px",
						gLogin: this.gLogin.bind(this)
					}),
					_react2.default.createElement(_Facebooklogin2.default, {
						clientId: _config.facebookClientId,
						width: "194px",
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
}, { changeAccountData: _account.changeAccountData, deleteAccountToken: _account.deleteAccountToken, readAccountData: _account.readAccountData, clearAccountSignup: _account.clearAccountSignup })(Header);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _Bundle = __webpack_require__(88);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(162);

var _Header = __webpack_require__(89);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(92);

var _Home2 = _interopRequireDefault(_Home);

var _Explore = __webpack_require__(91);

var _Explore2 = _interopRequireDefault(_Explore);

var _Pet = __webpack_require__(94);

var _Pet2 = _interopRequireDefault(_Pet);

var _User = __webpack_require__(105);

var _User2 = _interopRequireDefault(_User);

var _Moment = __webpack_require__(93);

var _Moment2 = _interopRequireDefault(_Moment);

var _Watch = __webpack_require__(106);

var _Watch2 = _interopRequireDefault(_Watch);

var _Request = __webpack_require__(99);

var _Request2 = _interopRequireDefault(_Request);

var _Setting = __webpack_require__(102);

var _Setting2 = _interopRequireDefault(_Setting);

var _Edit = __webpack_require__(101);

var _Edit2 = _interopRequireDefault(_Edit);

var _Add = __webpack_require__(100);

var _Add2 = _interopRequireDefault(_Add);

var _Signup = __webpack_require__(103);

var _Signup2 = _interopRequireDefault(_Signup);

var _Terms = __webpack_require__(104);

var _Terms2 = _interopRequireDefault(_Terms);

var _React = __webpack_require__(98);

var _React2 = _interopRequireDefault(_React);

var _PageNotFound = __webpack_require__(97);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _InternalServerError = __webpack_require__(96);

var _InternalServerError2 = _interopRequireDefault(_InternalServerError);

var _Forbidden = __webpack_require__(95);

var _Forbidden2 = _interopRequireDefault(_Forbidden);

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
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/edit/:id', component: createComponent(_Edit2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/add', component: createComponent(_Add2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', component: createComponent(_Signup2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/terms', component: createComponent(_Terms2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/react', component: createComponent(_React2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/500', component: createComponent(_InternalServerError2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/403', component: createComponent(_Forbidden2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { component: createComponent(_PageNotFound2.default) })
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(171));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(7).then((function(require) {
		cb(__webpack_require__(173));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(175));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(177));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(172));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(174));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(176));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(178));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(9).then((function(require) {
		cb(__webpack_require__(179));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(169));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(170));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(180));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(181));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(8).then((function(require) {
		cb(__webpack_require__(182));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(6).then((function(require) {
		cb(__webpack_require__(183));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(184));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "/*general-header*/\n#header{\n    position: fixed;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid white;\n    background-color: #ef8513;\n    color: white;\n    z-index: 999;\n    vertical-align: middle;\n}\n#header-desc{\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin-left: 2%;\n}\n.header-navi{\n    color: white;\n    float: right;\n    margin-right: 5%;\n    cursor: pointer;\n}\n#header-logo{\n    float: left;\n    margin-left: 10%;\n    height: 40px;\n    margin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n/*Footer style*/\n#footer{\n    display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n    display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}\n\n@media only screen and (max-width: 948px) {\n    #header-logo{\n        margin-left: 5%;\n    }\n\n    #footer{\n        width: 90%;\n        padding: 5px 5%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    #header-desc{\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    #header-logo{\n        display: none;\n    }\n}", ""]);

// exports


/***/ }),
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
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(107);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(58)(content, options);

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
/* 163 */
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
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ })
],[167]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcHJvY2Vzc0Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93YXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9FeHBsb3JlLmpzP2IzYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUuanM/ZTA0YiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzP2U3Y2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BldC5qcz82YzUyIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Gb3JiaWRkZW4uanM/ZGIwMyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW50ZXJuYWxTZXJ2ZXJFcnJvci5qcz83OWM4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QYWdlTm90Rm91bmQuanM/YTk5NiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVhY3QuanM/MjM5NiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVxdWVzdC5qcz9iMjZlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BZGQuanM/ZGU0NyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRWRpdC5qcz8xMmJiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TZXR0aW5nLmpzPzhjYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1NpZ251cC5qcz85ZjA0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UZXJtcy5qcz8yNDhiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Vc2VyLmpzPzcxMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1dhdGNoLmpzP2ZlNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzPzdiN2QiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiZG9tYWluVXJsIiwiYW5kcm9pZFN0b3JlVXJsIiwiZ29vZ2xlQ2xpZW50SWQiLCJmYWNlYm9va0NsaWVudElkIiwicmVhZEFjY291bnRGYWNlYm9va0FwaSIsInJlYWRBY2NvdW50R29vZ2xlQXBpIiwiZGVsZXRlQWNjb3VudFRva2VuQXBpIiwicmVhZEhvbWVNb21lbnRzQXBpIiwicmVhZEV4cGxvcmVNb21lbnRzQXBpIiwicmVhZFBldFBhZ2VBcGkiLCJ1cGRhdGVQZXRXYXRjaEFwaSIsImNyZWF0ZVBldE1vbWVudEFwaSIsInJlYWRQZXRNb21lbnRzQXBpIiwicmVhZFVzZXJQYWdlQXBpIiwicmVhZFVzZXJNb21lbnRzQXBpIiwicmVhZE1vbWVudFBhZ2VBcGkiLCJkZWxldGVNb21lbnRQYWdlQXBpIiwidXBkYXRlTW9tZW50TGlrZUFwaSIsInJlYWRNb21lbnRDb21tZW50c0FwaSIsImNyZWF0ZU1vbWVudENvbW1lbnRBcGkiLCJyZWFkV2F0Y2hQYWdlQXBpIiwiY3JlYXRlV2F0Y2hQZXRBcGkiLCJkZWxldGVXYXRjaFBldEFwaSIsInJlYWRXYXRjaE1vbWVudHNBcGkiLCJyZWFkUmVxdWVzdFBhZ2VBcGkiLCJjcmVhdGVSZXF1ZXN0VXNlckFwaSIsImRlbGV0ZVJlcXVlc3RVc2VyQXBpIiwicmVhZFNldHRpbmdQYWdlQXBpIiwidXBkYXRlU2V0dGluZ0Fib3V0QXBpIiwidXBkYXRlU2V0dGluZ05hbWVBcGkiLCJjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSIsImNyZWF0ZUFkZFBldEFwaSIsInJlYWRFZGl0UGFnZUFwaSIsInVwZGF0ZUVkaXROYW1lQXBpIiwidXBkYXRlRWRpdFByb2ZpbGVBcGkiLCJkZWxldGVFZGl0UmVsYXRpdmVBcGkiLCJyZWFkRWRpdFNlYXJjaEFwaSIsImNyZWF0ZUVkaXRSZWxhdGl2ZUFwaSIsInVwZGF0ZUVkaXRUcmFuc2ZlckFwaSIsInVwZGF0ZUVkaXRSZWxhdGlvbkFwaSIsInByb2Nlc3NFcnJvciIsImVyciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImJ1aWxkR2FsbGVyeSIsImRhdGEiLCJtYXAiLCJpbWFnZSIsInBldF9pZCIsImltYWdlX25hbWUiLCJtb21lbnRfbWVzc2FnZSIsIm1vbWVudF9pZCIsImNoYW5nZUFjY291bnREYXRhIiwicmVhZEFjY291bnREYXRhIiwiZGVsZXRlQWNjb3VudFRva2VuIiwiY2xlYXJBY2NvdW50U2lnbnVwIiwiQ0hBTkdFX0FDQ09VTlRfREFUQSIsIkNMRUFSX0FDQ09VTlRfREFUQSIsIlJFRElSRUNUX1RPX1NJR05VUCIsIkNMRUFSX0FDQ09VTlRfU0lHTlVQIiwidHlwZSIsInJlZGlyZWN0VG9TaWdudXAiLCJwb3J0YWwiLCJkZXRhaWwiLCJhcGlVcmwiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5hbWUiLCJpbWFnZVVybCIsImNhdGNoIiwiY2xlYXJBY2NvdW50RGF0YSIsIm9rIiwiY2xlYXIiLCJyZWFkU2V0dGluZ1BhZ2UiLCJ1cGRhdGVTZXR0aW5nQWJvdXQiLCJ1cGRhdGVTZXR0aW5nTmFtZSIsImNyZWF0ZVNldHRpbmdQcm9maWxlIiwiQlVJTERfU0VUVElOR19QQUdFIiwiQ0hBTkdFX1NFVFRJTkdfQUJPVVQiLCJDSEFOR0VfQUNDT1VOVF9OQU1FIiwiQ0hBTkdFX1NFVFRJTkdfTkFNRSIsIkNIQU5HRV9TRVRUSU5HX1BST0ZJTEUiLCJidWlsZFNldHRpbmdQYWdlIiwiY2hhbmdlU2V0dGluZ0Fib3V0IiwiYWJvdXQiLCJzdGF0dXMiLCJjaGFuZ2VBY2NvdW50TmFtZSIsImNoYW5nZVNldHRpbmdOYW1lIiwiY2hhbmdlU2V0dGluZ1Byb2ZpbGUiLCJmaWxlIiwiZmlsZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3NEYXRhIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZhY2Vib29rbG9naW4iLCJwcm9wcyIsInN0YXRlIiwid2lkdGgiLCJoZWFkZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInNlbGYiLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiY2xpZW50SWQiLCJ4ZmJtbCIsInZlcnNpb24iLCJmTG9naW4iLCJsb2dpbiIsImF1dGhSZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiYXBpIiwic2V0U3RhdGUiLCJidXR0b25TdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiZmFjZWJvb2siLCJjbGlja0J1dHRvbiIsImJpbmQiLCJHb29nbGVsb2dpbiIsInJlc3VsdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInJlbGF5b3V0IiwiZ2FwaSIsImxvYWQiLCJpbnN0YW5jZSIsImF1dGgyIiwiY2xpZW50X2lkIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZ2V0IiwicHJvZmlsZSIsImdldEJhc2ljUHJvZmlsZSIsImdldEF1dGhJbnN0YW5jZSIsInNpZ25JbiIsImlzU2lnbmVkSW4iLCJnZXRJZCIsImdldE5hbWUiLCJmaXJzdG5hbWUiLCJnZXRHaXZlbk5hbWUiLCJsYXN0bmFtZSIsImdldEZhbWlseU5hbWUiLCJnZXRJbWFnZVVybCIsImVtYWlsIiwiZ2V0RW1haWwiLCJnZXRBdXRoUmVzcG9uc2UiLCJpZF90b2tlbiIsImdMb2dpbiIsImdvb2dsZSIsIm5vR2V0QWJpbGl0eSIsIm5vR2V0R2VuZGVyIiwibm9HZXROYXR1cmUiLCJub0dldFR5cGUiLCJ2YWx1ZSIsInBhcnNlSW50IiwiY2hhbmdlQWRkRGV0YWlsIiwiY2hhbmdlQWRkVXBkYXRlIiwiY3JlYXRlQWRkUGV0IiwiQ0hBTkdFX0FERF9ERVRBSUwiLCJDSEFOR0VfQUREX1VQREFURSIsIlJFRElSRUNUX1RPX1VTRVIiLCJyZWRpcmVjdFRvVXNlciIsInBldE5hbWUiLCJwZXRHZW5kZXIiLCJwZXRUeXBlIiwicGV0TmF0dXJlIiwicGV0QXZhdGFyIiwidXNlcklkIiwidXNlclRva2VuIiwicmVhZEVkaXRQYWdlIiwiY2hhbmdlRWRpdFVwZGF0ZSIsInVwZGF0ZUVkaXROYW1lIiwidXBkYXRlRWRpdFByb2ZpbGUiLCJjaGFuZ2VFZGl0UmVtb3ZlIiwiZGVsZXRlRWRpdFJlbGF0aXZlIiwiY2hhbmdlRWRpdEFkZCIsInJlc2V0RWRpdFNlYXJjaCIsInJlYWRFZGl0U2VhcmNoIiwiY3JlYXRlRWRpdFJlbGF0aXZlIiwiY2hhbmdlRWRpdE93bmVyc2hpcCIsInVwZGF0ZUVkaXRUcmFuc2ZlciIsImNoYW5nZUVkaXRFbmQiLCJyZWRpcmVjdFRvSG9tZSIsInVwZGF0ZUVkaXRSZWxhdGlvbiIsIkJVSUxEX0VESVRfUEFHRSIsIkNIQU5HRV9FRElUX1VQREFURSIsIkNIQU5HRV9FRElUX05BTUUiLCJDSEFOR0VfRURJVF9SRU1PVkUiLCJSRU1PVkVfRURJVF9SRUxBVElWRSIsIkNIQU5HRV9FRElUX0FERCIsIlJFU0VUX0VESVRfU0VBUkNIIiwiQ0hBTkdFX0VESVRfU0VBUkNIIiwiQUREX0VESVRfUkVMQVRJVkUiLCJDSEFOR0VfRURJVF9PV05FUlNISVAiLCJDSEFOR0VfRURJVF9UUkFOU0ZFUiIsIkNIQU5HRV9FRElUX0VORCIsIlJFRElSRUNUX1RPX0hPTUUiLCJidWlsZEVkaXRQYWdlIiwicGV0SWQiLCJjaGFuZ2VFZGl0TmFtZSIsImZvcm1EYXRhIiwicmVtb3ZlRWRpdFJlbGF0aXZlIiwiY2hhbmdlRWRpdFNlYXJjaCIsInNlYXJjaElkIiwic2VhcmNoRGF0YSIsImFkZEVkaXRSZWxhdGl2ZSIsImNoYW5nZUVkaXRUcmFuc2ZlciIsInJlbGF0aXZlSWQiLCJyZWFkRXhwbG9yZU1vbWVudHMiLCJzZWxlY3RFeHBsb3JlVHlwZSIsInNlbGVjdEV4cGxvcmVOYXR1cmUiLCJDSEFOR0VfRVhQTE9SRV9UWVBFIiwiQ0hBTkdFX0VYUExPUkVfTkFUVVJFIiwiQ0hBTkdFX0VYUExPUkVfTU9NRU5UUyIsImNoYW5nZUV4cGxvcmVNb21lbnRzIiwibW9tZW50c0RhdGEiLCJuYXR1cmUiLCJhcGlQYXJhbXMiLCJuZXdUeXBlIiwibmV3TmF0dXJlIiwicmVhZEhvbWVNb21lbnRzIiwiQ0hBTkdFX0hPTUVfTU9NRU5UUyIsImNoYW5nZUhvbWVNb21lbnRzIiwicmVhZE1vbWVudFBhZ2UiLCJzaG93TW9tZW50RGVsZXRlIiwiZGVsZXRlTW9tZW50UGFnZSIsInVwZGF0ZU1vbWVudExpa2UiLCJyZWFkTW9tZW50Q29tbWVudHMiLCJzaG93Q29tbWVudEVtcHR5IiwiY3JlYXRlTW9tZW50Q29tbWVudCIsIkJVSUxEX01PTUVOVF9QQUdFIiwiU0hPV19NT01FTlRfREVMRVRFIiwiUkVESVJFQ1RfVVNFUl9QQUdFIiwiQ0hBTkdFX01PTUVOVF9MSUtFIiwiQ0hBTkdFX01PTUVOVF9DT01NRU5UUyIsIlNIT1dfQ09NTUVOVF9FTVBUWSIsIkFERF9NT01FTlRfQ09NTUVOVCIsImJ1aWxkTW9tZW50UGFnZSIsInJlZGlyY3RVc2VyUGFnZSIsIm1vbWVudElkIiwiY2hhbmdlTW9tZW50TGlrZSIsImFjdGlvbiIsImNoYW5nZU1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJhZGRNb21lbnRDb21tZW50IiwiY29udGVudCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsInJlYWRQZXRQYWdlIiwic2hvd0FjY291bnRSZXF1aXJlZCIsInVwZGF0ZVBldFdhdGNoIiwiY3JlYXRlUGV0TW9tZW50IiwicmVhZFBldE1vbWVudHMiLCJCVUlMRF9QRVRfUEFHRSIsIlNIT1dfQUNDT1VOVF9SRVFVSVJFRCIsIkNIQU5HRV9QRVRfV0FUQ0giLCJBRERfUEVUX01PTUVOVCIsIkNIQU5HRV9QRVRfTU9NRU5UUyIsImJ1aWxkUGV0UGFnZSIsImNoYW5nZVBldFdhdGNoIiwiYWRkUGV0TW9tZW50IiwiaW5mbyIsIm1lc3NhZ2UiLCJzcGxpdCIsImNoYW5nZVBldE1vbWVudHMiLCJhZGQiLCJwYXJhbXMiLCJyZWFkUmVxdWVzdFBhZ2UiLCJ1cGRhdGVSZXF1ZXN0VXNlciIsIkJVSUxEX1JFUVVFU1RfUEFHRSIsIkNIQU5HRV9SRVFVRVNUX1VTRVIiLCJidWlsZFJlcXVlc3RQYWdlIiwiY2hhbmdlUmVxdWVzdFVzZXIiLCJpbmRleCIsInJlYWRVc2VyUGFnZSIsInJlYWRVc2VyTW9tZW50cyIsIkJVSUxEX1VTRVJfUEFHRSIsIkNIQU5HRV9VU0VSX01PTUVOVFMiLCJidWlsZFVzZXJQYWdlIiwiY2hhbmdlVXNlck1vbWVudHMiLCJiZWxvbmciLCJyZWFkV2F0Y2hQYWdlIiwidXBkYXRlV2F0Y2hQZXQiLCJyZWFkV2F0Y2hNb21lbnRzIiwiY2hhbmdlUGV0c0xvYWQiLCJCVUlMRF9XQVRDSF9QQUdFIiwiQ0hBTkdFX1dBVENIX1BFVCIsIkNIQU5HRV9XQVRDSF9NT01FTlRTIiwiQ0hBTkdFX1BFVFNfTE9BRCIsImJ1aWxkV2F0Y2hQYWdlIiwiY2hhbmdlV2F0Y2hQZXQiLCJjaGFuZ2VXYXRjaE1vbWVudHMiLCJtb21lbnRzIiwibG9hZExpc3QiLCJsaXN0cyIsImJ1aWxkQ29tbWVudHMiLCJjb21tZW50IiwiY29tbWVudF9jb250ZW50IiwidXNlcl9pZCIsImNvbW1lbnRfdGltZSIsImFjY291bnQiLCJob21lIiwibW9tZW50IiwicGV0IiwiZXhwbG9yZSIsIndhdGNoIiwicmVxdWVzdCIsInNldHRpbmciLCJlZGl0IiwicmVkdWNlciIsImluaXRTdGF0ZSIsInJlZGlyZWN0U2lnbnVwIiwidXBkYXRlUmVzdWx0IiwiY3JlYXRlQXZhdGFyIiwiY3JlYXRlR2VuZGVyIiwiY3JlYXRlVHlwZSIsImNyZWF0ZU5hdHVyZSIsInJlZGlyZWN0VXNlciIsIm5ld1N0YXRlIiwicGV0RGF0YSIsInNob3dFbmQiLCJzaG93QWRkIiwic2VhcmNoIiwic2hvd1JlbW92ZSIsInNob3dUcmFuc2ZlciIsImRhdGFMb2FkZWQiLCJyZWRpcmVjdEhvbWUiLCJwZXRfbmFtZSIsInJlbGF0aXZlX2lkIiwib3duZXJfaWQiLCJsb2NrZXIiLCJuZXdNb21lbnRzIiwiY29uY2F0IiwibGVuZ3RoIiwibmV3RGF0YSIsIm1vbWVudERhdGEiLCJmYW1pbHlEYXRhIiwibGlrZURhdGEiLCJjb21tZW50RGF0YSIsInNob3dDb25maXJtIiwiY29tbWVudExvY2tlciIsImNvbW1lbnRFcnJvciIsImxpa2UiLCJmaWx0ZXIiLCJuZXdDb21tZW50cyIsInBldE93bmVyIiwiZnJpZW5kRGF0YSIsImdhbGxlcnlEYXRhIiwid2F0Y2hEYXRhIiwibG9naW5SZXF1aXJlZCIsInJlc2V0IiwibmV3TW9tZW50IiwiYWJpbGl0eSIsIm5ld0FiaWxpdHkiLCJyZXF1ZXN0RGF0YSIsImFjY2VwdExpc3QiLCJ1c2VyRGF0YSIsInVzZXJBYm91dCIsInVzZXJfYWJvdXQiLCJyZWxhdGl2ZURhdGEiLCJwZXRzRGF0YSIsImJlbG9uZ0RhdGEiLCJmb3JFYWNoIiwicHVzaCIsIlNldCIsInBldHNMaXN0IiwidW53YXRjaCIsImxvYWRQZXRzIiwid2F0Y2hMaXN0Iiwic3RvcmUiLCJCdW5kbGUiLCJtb2QiLCJuZXh0UHJvcHMiLCJkZWZhdWx0IiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJzaG93RHJvcCIsImdldEl0ZW0iLCJsb2dvdXQiLCJzaWduT3V0IiwibG9naW5TdHlsZSIsInVzZXJJbmZvIiwibG9nb3V0Qm9hcmQiLCJsb2dPdXQiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGdDQUFZLHFCQUFsQjs7QUFFQSxJQUFNQyw0Q0FBa0IsOERBQXhCOztBQUVBLElBQU1DLDBDQUFpQiwwRUFBdkI7QUFDQSxJQUFNQyw4Q0FBbUIsaUJBQXpCOztBQUVBLElBQU1DLDBEQUF5QixtQkFBL0I7QUFDQSxJQUFNQyxzREFBdUIsaUJBQTdCO0FBQ0EsSUFBTUMsd0RBQXdCLGlCQUE5Qjs7QUFFQSxJQUFNQyxrREFBcUIsYUFBM0I7QUFDQSxJQUFNQyx3REFBd0IsZUFBOUI7O0FBRUEsSUFBTUMsMENBQWlCLFdBQXZCO0FBQ0EsSUFBTUMsZ0RBQW9CLFlBQTFCO0FBQ0EsSUFBTUMsa0RBQXFCLGdCQUEzQjtBQUNBLElBQU1DLGdEQUFvQixXQUExQjs7QUFFQSxJQUFNQyw0Q0FBa0IsWUFBeEI7QUFDQSxJQUFNQyxrREFBcUIsWUFBM0I7O0FBRUEsSUFBTUMsZ0RBQW9CLGNBQTFCO0FBQ0EsSUFBTUMsb0RBQXNCLGdCQUE1QjtBQUNBLElBQU1DLG9EQUFzQixjQUE1QjtBQUNBLElBQU1DLHdEQUF3QixjQUE5QjtBQUNBLElBQU1DLDBEQUF5QixpQkFBL0I7O0FBRUEsSUFB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Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZG9tYWluVXJsID0gJ2h0dHBzOi8vc21pbGluZ3MubWUnO1xuXG5leHBvcnQgY29uc3QgYW5kcm9pZFN0b3JlVXJsID0gJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20udGhvdXNhbmRheSc7XG5cbmV4cG9ydCBjb25zdCBnb29nbGVDbGllbnRJZCA9ICcxNjgwOTg4NTAyMzQtZnNxODRwazRjYWU5N21sajBrNDY0am9jMjFjZ3FqdnYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xuZXhwb3J0IGNvbnN0IGZhY2Vib29rQ2xpZW50SWQgPSAnNDQ3Njg4MjY1NTc2MTI1JztcblxuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50RmFjZWJvb2tBcGkgPSAnL2FjY291bnQvZmFjZWJvb2snO1xuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50R29vZ2xlQXBpID0gJy9hY2NvdW50L2dvb2dsZSc7XG5leHBvcnQgY29uc3QgZGVsZXRlQWNjb3VudFRva2VuQXBpID0gJy9hY2NvdW50L2xvZ291dCc7XG5cbmV4cG9ydCBjb25zdCByZWFkSG9tZU1vbWVudHNBcGkgPSAnL2luZGV4L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFeHBsb3JlTW9tZW50c0FwaSA9ICcvZXhwbG9yZS9yZWFkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRQZXRQYWdlQXBpID0gJy9wZXQvcmVhZCc7XG5leHBvcnQgY29uc3QgdXBkYXRlUGV0V2F0Y2hBcGkgPSAnL3BldC93YXRjaCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUGV0TW9tZW50QXBpID0gJy91cGxvYWQvbW9tZW50JztcbmV4cG9ydCBjb25zdCByZWFkUGV0TW9tZW50c0FwaSA9ICcvcGV0L2xvYWQnO1xuXG5leHBvcnQgY29uc3QgcmVhZFVzZXJQYWdlQXBpID0gJy91c2VyL3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRVc2VyTW9tZW50c0FwaSA9ICcvdXNlci9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRNb21lbnRQYWdlQXBpID0gJy9tb21lbnQvcmVhZCc7XG5leHBvcnQgY29uc3QgZGVsZXRlTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L2RlbGV0ZSc7XG5leHBvcnQgY29uc3QgdXBkYXRlTW9tZW50TGlrZUFwaSA9ICcvbW9tZW50L2xpa2UnO1xuZXhwb3J0IGNvbnN0IHJlYWRNb21lbnRDb21tZW50c0FwaSA9ICcvbW9tZW50L2xvYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vbWVudENvbW1lbnRBcGkgPSAnL21vbWVudC9jb21tZW50JztcblxuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaFBhZ2VBcGkgPSAnL3dhdGNoL3JlYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVdhdGNoUGV0QXBpID0gJy93YXRjaC9hZGQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVdhdGNoUGV0QXBpID0gJy93YXRjaC9yZW1vdmUnO1xuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaE1vbWVudHNBcGkgPSAnL3dhdGNoL2xvYWQnO1xuXG5leHBvcnQgY29uc3QgcmVhZFJlcXVlc3RQYWdlQXBpID0gJy9yZXF1ZXN0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3RVc2VyQXBpID0gJy9yZXF1ZXN0L2FjY2VwdCc7XG5leHBvcnQgY29uc3QgZGVsZXRlUmVxdWVzdFVzZXJBcGkgPSAnL3JlcXVlc3QvZGVsZXRlJztcblxuZXhwb3J0IGNvbnN0IHJlYWRTZXR0aW5nUGFnZUFwaSA9ICcvc2V0dGluZy9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVTZXR0aW5nQWJvdXRBcGkgPSAnL3NldHRpbmcvYWJvdXQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdOYW1lQXBpID0gJy9zZXR0aW5nL25hbWUnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNldHRpbmdQcm9maWxlQXBpID0gJy91cGxvYWQvdXNlcic7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBZGRQZXRBcGkgPSAnL3VwbG9hZC9hZGQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFZGl0UGFnZUFwaSA9ICcvZWRpdC9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0TmFtZUFwaSA9ICcvZWRpdC9uYW1lJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0UHJvZmlsZUFwaSA9ICcvdXBsb2FkL3BldCc7XG5leHBvcnQgY29uc3QgZGVsZXRlRWRpdFJlbGF0aXZlQXBpID0gJy9lZGl0L3JlbW92ZSc7XG5leHBvcnQgY29uc3QgcmVhZEVkaXRTZWFyY2hBcGkgPSAnL2VkaXQvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBjcmVhdGVFZGl0UmVsYXRpdmVBcGkgPSAnL2VkaXQvYWRkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0VHJhbnNmZXJBcGkgPSAnL2VkaXQvdHJhbnNmZXInO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUVkaXRSZWxhdGlvbkFwaSA9ICcvZWRpdC9lbmQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2NvbmZpZy5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2Nlc3NFcnJvcihlcnIpIHtcblx0d2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nICsgZXJyKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9wcm9jZXNzRXJyb3IuanMiLCJpbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkR2FsbGVyeShkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihpbWFnZSkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRkb21haW5VcmwgKyAnL2ltZy9wZXQvJyArIGltYWdlLnBldF9pZCArICcvbW9tZW50LycgKyBpbWFnZS5pbWFnZV9uYW1lLFxuXHRcdFx0aW1hZ2UubW9tZW50X21lc3NhZ2UsXG5cdFx0XHQnL21vbWVudC8nICsgaW1hZ2UubW9tZW50X2lkXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRHYWxsZXJ5LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZEFjY291bnRGYWNlYm9va0FwaSwgcmVhZEFjY291bnRHb29nbGVBcGksIGRlbGV0ZUFjY291bnRUb2tlbkFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9EQVRBID0gXCJhY2NvdW50L0NIQU5HRV9BQ0NPVU5UX0RBVEFcIjtcbmV4cG9ydCBjb25zdCBDTEVBUl9BQ0NPVU5UX0RBVEEgPSBcImFjY291bnQvQ0xFQVJfQUNDT1VOVF9EQVRBXCI7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVE9fU0lHTlVQID0gXCJhY2NvdW50L1JFRElSRUNUX1RPX1NJR05VUFwiO1xuZXhwb3J0IGNvbnN0IENMRUFSX0FDQ09VTlRfU0lHTlVQID0gXCJhY2NvdW50L0NMRUFSX0FDQ09VTlRfU0lHTlVQXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBY2NvdW50RGF0YShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FDQ09VTlRfREFUQSxcblx0XHRkYXRhXG5cdH1cbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RUb1NpZ251cCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9UT19TSUdOVVBcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFjY291bnREYXRhKHBvcnRhbCwgZGV0YWlsKSB7XG5cdGNvbnN0IGFwaVVybCA9IHBvcnRhbCA9PT0gJ2ZhY2Vib29rJyA/IHJlYWRBY2NvdW50RmFjZWJvb2tBcGkgOiByZWFkQWNjb3VudEdvb2dsZUFwaTtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiBkZXRhaWwudG9rZW4sIFxuXHRcdFx0XHRcInBsYXRmb3JtXCI6IFwid2Vic2l0ZVwiXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRpZiAoanNvbi5pZCkge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3SWRcIiwganNvbi5pZCk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdUb2tlblwiLCBkZXRhaWwudG9rZW4pO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3UGxhdGZvcm1cIiwgcG9ydGFsKTtcblx0XHRcdFx0XHRpZiAocG9ydGFsID09PSAnZmFjZWJvb2snKSB7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld05hbWVcIiwgZGV0YWlsLnJlc3BvbnNlLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXG5cdFx0XHRcdFx0XHRcdFwibmV3QXZhdGFyXCIsIFxuXHRcdFx0XHRcdFx0XHRcImh0dHA6Ly9ncmFwaC5mYWNlYm9vay5jb20vXCIgKyBqc29uLmlkICsgXCIvcGljdHVyZT90eXBlPXNxdWFyZSZ3aWR0aD03MjAmaGVpZ2h0PTcyMFwiXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld05hbWVcIiwgZGV0YWlsLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdBdmF0YXJcIiwgZGV0YWlsLmltYWdlVXJsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJlY3RUb1NpZ251cCgpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGpzb25bMF0pO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBqc29uWzFdKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGpzb25bMl0pO1xuXHRcdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUFjY291bnREYXRhKGpzb24pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhckFjY291bnREYXRhKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENMRUFSX0FDQ09VTlRfREFUQVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBY2NvdW50VG9rZW4oaWQsIHRva2VuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlQWNjb3VudFRva2VuQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdG9rZW4sIFxuXHRcdFx0XHRcImlkXCI6IGlkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2xlYXJBY2NvdW50RGF0YSgpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWNjb3VudFNpZ251cCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDTEVBUl9BQ0NPVU5UX1NJR05VUFxuXHR9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWNjb3VudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRTZXR0aW5nUGFnZUFwaSwgdXBkYXRlU2V0dGluZ0Fib3V0QXBpLCB1cGRhdGVTZXR0aW5nTmFtZUFwaSxcblx0Y3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9TRVRUSU5HX1BBR0UgPSAnc2V0dGluZy9CVUlMRF9TRVRUSU5HX1BBR0UnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9TRVRUSU5HX0FCT1VUID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfQUJPVVQnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX05BTUUgPSAnYWNjb3VudC9DSEFOR0VfQUNDT1VOVF9OQU1FJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfU0VUVElOR19OQU1FID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfTkFNRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSA9ICdzZXR0aW5nL0NIQU5HRV9TRVRUSU5HX1BST0ZJTEUnO1xuXG5mdW5jdGlvbiBidWlsZFNldHRpbmdQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9TRVRUSU5HX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFNldHRpbmdQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFNldHRpbmdQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRTZXR0aW5nUGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdBYm91dChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfQUJPVVQsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ0Fib3V0KGlkLCB0b2tlbiwgYWJvdXQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVTZXR0aW5nQWJvdXRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCdhYm91dCc6IGFib3V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ0Fib3V0KGFib3V0KSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY2NvdW50TmFtZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FDQ09VTlRfTkFNRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdOYW1lKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9TRVRUSU5HX05BTUVcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ1Byb2ZpbGUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfUFJPRklMRVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ05hbWUoaWQsIHRva2VuLCBuYW1lKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlU2V0dGluZ05hbWVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCduYW1lJzogbmFtZVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBuYW1lKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlQWNjb3VudE5hbWUobmFtZSkpO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VTZXR0aW5nTmFtZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nUHJvZmlsZShpZCwgdG9rZW4sIGZpbGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLCBpZCArICcuanBnJyk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCBpZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVNldHRpbmdQcm9maWxlKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9zZXR0aW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vcmVkdXgvc3RvcmUuanMnO1xuaW1wb3J0IGdldFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcblxuUmVhY3REb20ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT57Z2V0Um91dGVyKCl9PC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlYm9va2xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0cmVzcG9uc2U6IG51bGxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHRcdGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdHNjcmlwdC5pZCA9IFwiZmFjZWJvb2stanNzZGtcIjtcblx0XHRzY3JpcHQuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSAoKSA9PiB7XG5cdFx0XHRGQi5pbml0KHtcblx0XHRcdFx0YXBwSWQgICAgICA6IHRoaXMucHJvcHMuY2xpZW50SWQsXG5cdFx0XHRcdHhmYm1sICAgICAgOiB0cnVlLFxuXHRcdFx0XHR2ZXJzaW9uICAgIDogJ3YyLjgnXG5cdFx0XHR9KTtcbi8vIFx0XHRcdEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuLy8gXHRcdFx0XHRcdGxldCB0b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcbi8vIFx0XHRcdFx0XHRGQi5hcGkoJy9tZScsIChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlIH0pO1xuLy8gIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG4vLyBcdFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlOiBmYWxzZSB9KTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRjbGlja0J1dHRvbigpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVzcG9uc2UpIHtcblx0XHRcdHRoaXMucHJvcHMuZkxvZ2luKHRoaXMuc3RhdGUucmVzcG9uc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRGQi5sb2dpbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG5cdFx0XHRcdFx0RkIuYXBpKCcvbWUnLCAocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZSB9KTtcblx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2U6IGZhbHNlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgZmFjZWJvb2sgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBU0FBQUFBK0NBWUFBQUNMS01iZkFBQUt4bWxEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJ0bG5kVVU5a1doL2U5NlkyV1VLV0UzcEVpWFhvTm9DQlZzQkdTUUVJSklTU0lXTEF3T0FKalFVVUVLem9pb3VCWUFCa0xZc0dLWU84RE1xaW80MkRCaHNxN2dRY3phOWFiLzk1ZTY5enozWDErZDkrelQxbHJBOUJidUJKSkpxb0NrQ1dXU2FORC9Oa3pFNVBZcEVkQUFnVFVRQnZvWEY2dXhDOHFLZ0wrMVQ3Y3hyU1kzYkJWeFBwWDJmOGVVT1VMY25rQVNCUTJuTUxQNVdWaGZBUnIyM2dTcVF3QUY0djVUZWJMSkFyT3g1Z2x4U2FJY1ptQzA4WjRoNEpUeGhqN0Z0UEVSZ2RnbWdzQVpEcVhLMDBEb04zRS9PdzhYaG9XaC9ZZVkzc3hYeVFHb0p0ZzdNMFRjdmtZWXcxc3NyS3lGYndXWTR1VXY4VkoreHR6dVNrVE1ibmN0QWtleXdYN0V2dHhvQ2hYa3NsZE1QcnkvM3hrWmNxeDlSbzFmZXhKejgySUNjZDZNMnpOOG5uY29KaHhGZ280aWowYjlVdGsvdEhqTEpKeFlzZFpLQStORzJkNVJwemZPR2RraDAvb3hTblRJOGY5dk53QWJPM0hZaFlJWXhQR21TOElEQnBuYVhiMGhENDNMMmJDWHlBTW1ENnVTZWVHS2ZaN2RHNWNLVWIvWlVGbXlNUi9KYktvaVhtS002ZFA1SklxRFo3UUNITC95bGNtakEwZGp5UEREc0E0cDRxQ09lTXNsSVpPK0NXWm8yZDZkQTVTZWZURU9nakVjUk5yeU9jR1Rxd3R4SUlRNUNBR1BnaEFDaW1RRFprZ0F6WUVnZ2h5UVlLOWNRSGJicGtnSHp0akFBSFprZ1ZTVVpwUXh2YkRib1hBaHMwUjgreHMySTcyRGs2Z3VHTUtEY0E3amRHN2cyaGMrc3VYMHdiZ1hvTHRwK0o0c3hVcUFLNHh3TEduQU13UGYvbU0zNDZkMHhOZFBMazBiMHlIVjNRRW9JSXlzTERicXcvR1lBRzI0QWd1NEFtK0VBUmhFSWxsa2doemdZZmxrNFZsTWg4V3dUSW9obEpZQ3h1aENyYkRMdGdMQitBUU5NTnhPQTNuNFRKMHdTMTRBRDNRRHk5aEVEN0FNSUlnSklTQk1CRnR4QUF4UmF3UlI4UU44VWFDa0Fna0drbEVrcEUwUkl6SWtVWElDcVFVS1VlcWtKMUlIZklMY2d3NWpWeEV1cEY3U0M4eWdMeEZ2cUE0bEk2eVVEM1VESjJNdXFGK2FEZ2FpODVCMDlBY3RBQXRRbGVqbFdnTnVoOXRRaytqbDlGYmFBLzZFaDNDQVk2RzA4QVo0bXh4YnJnQVhDUXVDWmVLaytLVzRFcHdGYmdhWEFPdUZkZUJ1NEhyd2IzQ2ZjWVQ4VXc4RzIrTDk4U0g0dVB3UEh3T2ZnbStERitGMzR0dndwL0YzOEQzNGdmeDN3a01naTdCbXVCQjRCQm1FdElJOHduRmhBckNIc0pSd2puQ0xVSS80UU9SU05RZ21oTmRpYUhFUkdJNmNTR3hqTGlWMkVoc0kzWVQrNGhESkJKSm0yUk44aUpGa3Jna0dhbVl0Sm0wbjNTS2RKM1VUL3BFcHBFTnlJN2tZSElTV1V4ZVRxNGc3eU9mSkY4blB5TVBVMVFvcGhRUFNpU0ZUMWxBV1VQWlRXbWxYS1AwVTRhcHFsUnpxaGMxbHBwT1hVYXRwRFpRejFFZlV0L1JhRFFqbWp0dEJrMUVXMHFycEIya1hhRDEwajdUMWVoVzlBRDZiTHFjdnBwZVMyK2ozNk8vWXpBWVpneGZSaEpEeGxqTnFHT2NZVHhtZkZKaUt0a3BjWlQ0U29WSzFVcE5TdGVWWGl0VGxFMlYvWlRuS2hjb1Z5Z2ZWcjZtL0VxRm9tS21FcURDVlZtaVVxMXlUT1dPeXBBcVU5VkJOVkkxUzdWTWRaL3FSZFhuYWlRMU03VWdOYjVha2RvdXRUTnFmVXdjMDVnWndPUXhWekIzTTg4eCsxbEVsam1MdzBwbmxiSU9zRHBaZytwcTZsUFU0OVh6MWF2VlQ2ajNhT0EwekRRNEdwa2FhelFPYWR6VytLS3BwK21uS2RCY3BkbWdlVjN6bzlZa0xWOHRnVmFKVnFQV0xhMHYybXp0SU8wTTdYWGF6ZHFQZFBBNlZqb3pkT2JyYk5NNXAvTnFFbXVTNXlUZXBKSkpoeWJkMTBWMXJYU2pkUmZxN3RLOW9qdWtwNjhYb2lmUjI2eDNSdStWdm9hK3IzNjYvZ2I5ay9vREJrd0Rid09Sd1FhRFV3WXYyT3BzUDNZbXU1SjlsajFvcUdzWWFpZzMzR25ZYVRoc1pHNFVaN1RjcU5Ib2tUSFYyTTA0MVhpRGNidnhvSW1CeVRTVFJTYjFKdmROS2FadXBrTFRUYVlkcGgvTnpNMFN6RmFhTlpzOU45Y3k1NWdYbU5lYlA3UmdXUGhZNUZqVVdOeTBKRnE2V1daWWJyWHNza0t0bksyRVZ0VlcxNnhSYXhkcmtmVlc2MjRiZ28yN2pkaW14dWFPTGQzV3p6YlB0dDYyMTA3RExzSnV1VjJ6M2V2SkpwT1RKcStiM0RINXU3MnpmYWI5YnZzSERtb09ZUTdMSFZvZDNqcGFPZkljcXgxdk9qR2NncDBLblZxYzNreXhuaUtZc20zS1hXZW04elRubGM3dHp0OWNYRjJrTGcwdUE2NG1yc211VzF6dnVMSGNvdHpLM0M2NEU5ejkzUXZkajd0LzluRHhrSGtjOHZqVDA5WXp3M09mNS9PcDVsTUZVM2RQN2ZNeTh1SjY3ZlRxOFdaN0ozdnY4Tzd4TWZUaCt0VDRQUEUxOXVYNzd2Rjk1bWZwbCs2MzMrKzF2NzIvMVArby84Y0FqNERGQVcyQnVNQ1F3SkxBemlDMW9MaWdxcURId1ViQmFjSDF3WU1oemlFTFE5cENDYUhob2V0QzczRDBPRHhPSFdjd3pEVnNjZGpaY0hwNFRIaFYrSk1JcXdocFJPczBkRnJZdFBYVEhrNDNuUzZlM2h3Smtaekk5WkdQb3N5amNxSituVUdjRVRXamVzYlRhSWZvUmRFZE1jeVllVEg3WWo3RStzZXVpWDBRWnhFbmoydVBWNDZmSFY4WC96RWhNS0U4b1dmbTVKbUxaMTVPMUVrVUpiWWtrWkxpay9Za0RjMEttclZ4VnY5czU5bkZzMi9QTVorVFArZmlYSjI1bVhOUHpGT2V4NTEzT0ptUW5KQzhML2tyTjVKYnd4MUs0YVJzU1Jua0JmQTI4Vjd5ZmZrYitBTUNMMEc1NEZtcVYycDU2dk0wcjdUMWFRTkNIMkdGOEpVb1FGUWxlcE1lbXI0OS9XTkdaRVp0eGtobVFtWmpGamtyT2V1WVdFMmNJVDZiclorZG45MHRzWllVUzNweVBISTI1Z3hLdzZWN2NwSGNPYmt0TWhaV3pGeVJXOGgva1BmbWVlZFY1MzJhSHovL2NMNXF2amoveWdLckJhc1dQQ3NJTHZoNUlYNGhiMkg3SXNORnl4YjFMdlpidkhNSnNpUmxTWHVoY1dGUllmL1NrS1Y3bDFHWFpTeTd1dHgrZWZueTl5c1NWclFXNlJVdExlcjdJZVNIK21LbFltbnhuWldlSzdmL2lQOVI5R1BuS3FkVm0xZDlMK0dYWENxMUw2MG8vVnJHSzd2MGs4TlBsVCtOckU1ZDNibkdaYzIydGNTMTRyVzMxL21zMjF1dVdsNVEzcmQrMnZxbURld05KUnZlYjV5MzhXTEZsSXJ0bTZpYjVKdDZLaU1xV3phYmJGNjcrV3VWc09wV3RYOTE0eGJkTGF1MmZOekszM3A5bSsrMmh1MTYyMHUzZjlraDJuRjNaOGpPcGhxem1vcGR4RjE1dTU3dWp0L2Q4YlBiejNWN2RQYVU3dmxXSzY3dDJSdTk5MnlkYTEzZFB0MTlhK3JSZW5uOXdQN1orN3NPQkI1b2FiQnQyTm1vMFZoNkVBN0tENzc0SmZtWDI0ZkNEN1VmZGp2Y2NNVDB5SmFqektNbFRValRncWJCWm1GelQwdGlTL2V4c0dQdHJaNnRSMysxKzdYMnVPSHg2aFBxSjlhY3BKNHNPamx5cXVEVVVKdWs3ZFhwdE5OOTdmUGFINXlaZWVibTJSbG5POCtGbjd0d1B2ajhtUTYvamxNWHZDNGN2K2h4OGRnbHQwdk5sMTB1TjExeHZuTDBxdlBWbzUwdW5VM1hYSysxZExsM3RYWlA3VDU1M2VmNjZSdUJOODdmNU55OGZHdjZyZTdiY2JmdjNwbDlwK2N1Lys3emU1bjMzdHpQdXovOFlPbER3c09TUnlxUEtoN3JQcTc1emZLM3hoNlhuaE85Z2IxWG5zUThlZERINjN2NWUrN3ZYL3VMbmpLZVZqd3plRmIzM1BINThZSGdnYTRYczE3MHY1UzhISDVWL0lmcUgxdGVXN3crOHFmdm4xY0dadzcydjVHK0dYbGI5azc3WGUzN0tlL2JoNktHSG4vSStqRDhzZVNUOXFlOW45MCtkM3hKK1BKc2VQNVgwdGZLYjViZldyK0hmMzg0a2pVeUl1Rkt1YU8xQUE1N29xbXBBRzlyQVJpSldPM1FCVUJWR3F1QlJ4WElXTjJPc2FKK1Z6U0YvWVBINnVUUkVSZUFXbCtBdUtVQUVXMEEyN0JtaWpFZDZ4WGxYS3d2b0U1T0V3M3pLQ3czMWNseEZCQzZGQ3ROUG8yTXZOTURJTFVDZkpPT2pBeHZIUm41dGh1cjFlOEJ0T1dNMWQ0S05WRUZvTnhjVTRsRnZscUlUZnNmOWgvY3d2MkJPaXhwc3dBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBamRwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJbGhOVUNCRGIzSmxJRFV1TVM0eUlqNEtJQ0FnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQWdJQ0FnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNand2ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZXVkpsYzI5c2RYUnBiMjQrTnpJOEwzUnBabVk2V1ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S3VzdCtJUUFBS2ZaSlJFRlVlQUh0ZlFkZ1ZVWFcveS9scGIzMFhra0lrQUFKTFJCNlV3UVJWRkJBVkZSRTE2NmZxK3VuYTlsZDNmMWM5OXRGOTFOWDNUODJ4TEkyeExZV1JCRVJrTjRTQXFTUjNudlBlMG4rdnpNM04zbkVCQ2toRXZjZWVHM3UzSmt6Wjg2Y09XMXU3Tjc5Wkd2YmsyL3VoYXVESGRwZ2dFRUJnd0lHQmM0dUJlellmSDFMRys1Yk5nWjI0NWMrMXliQ0IxSnFnRUVCZ3dJR0JmcUNBdFIyUkFqWnV6a2F3cWN2NkczMFlWREFvSUFOQlNoMnpKUTk5b2JaWlVNVTQ2dEJBWU1DZlVZQmtUMzJmZGFiMFpGQkFZTUNCZ1c2VU1BUVFGMElZdncwS0dCUW9POG9ZQWlndnFPMTBaTkJBWU1DWFNoZ0NLQXVCREYrR2hRd0tOQjNGREFFVU4vUjJ1akpvSUJCZ1M0VU1BUlFGNElZUHcwS0dCVG9Pd29ZQXFqdmFHMzBaRkRBb0VBWENoZ0NxQXRCako4R0JRd0s5QjBGREFIVWQ3UTJlaklvWUZDZ0N3VU1BZFNGSU1aUGd3SUdCZnFPQW82OTBaV0R2UjBjZWFCVnBOblpQTnJSMHRvR0t3K3duYzArZW9NZVJoc0dCUXdLbkJ3RnprZ0FpU0J3cFBDcGJyQmlWMEVEME5ES2tyTjBySjdTTFN6QWhDRitMckJqeDRZUU9ya0pObW9aRkRpWEtYQkdBa2lFVDJGMU02YkVCZUd2dng0QlAyODN0TFcxaTRiZWtrTnN6bzV0aWVhemZYOE9YdmdvQ1Q3TzFMYll0OTdWdVV4Z0F6ZURBZ1lGZXFiQWFRc2dNYnVxR3l5WUZoK01SKytlaStBQXo1NTc2YVVyQ1NPakVlam5qb2RmM0lZd2R3ZTBVakFaUXFpWGlHczBZMURnWjZEQWFUdWhUZlQ1N01wcnhLSTV3NVR3RWMybnRiV1ZML2s4MVZjcldscGFPN1VuSVVSN2UxS3V0U2ZtSFhEKzFHRVlIVzVHZWIwVkRxSWFHV0JRd0tCQXY2WEFhV3RBYXUzWHQ4TEh3MFVOWGdTUXZmMnB5ek81ejg2dTh6NkxWUk0wWW1JNTJMVFgxcVlKRzNjM0o3aTdPS0tSSnBraGYvb3QzeG1JR3hSUUZEaHRBYVR1cGt4b3BRRFI0TlMxRVUzNDJDbi9UbXBHQVpLUEZ1QllRWlh5NzNpNk9TUEExdzBqWWtNUUhSbkVMcVFmemUrajdtc3YwZm8rOVhkbmt3UHNLY0drVlJGNkxkVGV6ald3STM1T2p2WUtUNGtBTmx0Ynpoa1VaWE13RVRlQms2V2ZUblBobVNiTDZZM0Z0dCtlaUNHY2VDN1JTM2hNL0tWT2pnNEtaU3UxK21hK1RuM0Y5RFRpMHlzWE40ckpCaWZCcTYvaHpBUVFzYlU3VFRMcXdxZXVvUm12Zi9BRGJudHRMOHh0TFFoMXBXK0hpODNOWkkrREgxYmlxWCtPeHoyM3pGVytIdEY0MUtTZDhjeTE0YXRqSldpcmFSVE93T2dRTDNpN3U1NVQvaVFacThWcXdYYzVsV2l0YVVZUWhYRnNvT2R4Mm1KZk00dmVuK0JXV2xPSEEvbFZxbWhrcUJkOFNUOU9tMXBvSmdjUlROeFlLTlJGT0lraUsrYjUrb3hTb0xhSnorSjB4clJ3WDZYaHl1SThXWkIreTlqdmZ0WHZDZTZrZ0F0a1FHU1krQ1Z0dE91VDdhYzM2d21Xc3RETGF4dXdMN2RDZG14RUIza2l5cytEOUtFVzM1dWRuVUpiUkFrVmRRM1ltMXZKdTlySVd4NEk5WFpYYzNnS3paeHgxVE1XUUtlTGdlenVBdTk4c2hPM1BiTWRGdzd6UUJ2THBGUXV5YzVmTkxjVkh1N09xbDZ2dmJIeHBxWkcvUFk4WDdpNzJ0SDNCS1JrTitCWWVRdWNUWTdIKzZGNnJkTlRhMGhvSUR1NHE0TUY5ODN3Z1plN0NjVVZUZGliMll3MkI2WWhuRnB6dlZwYjVxMnAyWUw0RURzc21oQ3MyajZTM1lpTU1pdmNuRTBvcTY3Ri9od0tHcTY4bUJCdmhQdDV3ZExDZVcxdHhpTnpBa0FMR3R4enNDbXBnY3p1eXJrK2dTQ3h3Vnp2Tnk3VURvc25ockI1M3FmK2Q3bWZQKzNwbnl5clltcEl1Z1VPanVJaTZGTEhwdDJ6L1ZYOGxMV05WZ3dQdHNlU1NXR0t0M09LbTdFOW94bGVKSVpzdG4wTlFzc0dpeFV4QWVBY2hwSTZyY2d1Yk1hQlhBdGNuWjM2ZEEzOExBSkkxMzdTczByeHpwY3BtRExRRFZiT2c1VzdaV21kQllYTUovSjN0a2Z4dGxyVUw3TDAydnlRN2dRN0ZGSHp1ZS9PRytEcjY2WGFYdlAyZXR6LzZnR01DUGJnWXVsN2h1ZzZRQWN1b0tvNksyS2pQUERiZTViQ3g5c1Q2Wm01dU9QUnRhaHVvbUJ5c2xjQ3F1dDlmZkZiVElta3lrYmNmZVU0TEwzc1BOWGxPK3MyNHI1VmV4RHFZWWVKTVdiY3VUQktMYlFqeHlxeGZuOGR6QzcwMnptMjRjRjdsc1BOelJVTkRZM1lkZXNMS0cza0JzTjVGbUg3VXlEOUhtSy9keXdaZzJXTEwvaXA2a2hMejhIeWg5NUZHOXQyb3VWekVsMzhaSnVuVThHWm12ekdJN1c0OC9JRVhIZmxITlhFOWwxSmVPSHF0YmhvV2lqcW02eW4wK3daM1NNQnBEMUZqYmh4Zmh4K2RlMUZxcTJOMyszQmk3LzdFck1IdXZTcHFmOHpDU0JOeThuS0xjYjY3RHBjR09aTW01aC9wcU81Rll0bkRzYTBjZEh3cG5QYjFjVUVmMTkzUlNCTmVKd1IzVHR1RnZYVEtxb1BRVXdEV1FCU2RqSWc2clQ0anVRbElQNE1lWFczaUtTSytDeWtiZGwxVkwxMkFhZm5NVW4vWFpjZm0xTmFUcHU5RTJyckxSUkFwRTFqQyt3ZG5XRFgzS1pVZXJsZmRrK3BxN0xRcFJOK2x6NUV0VC9SemlxNHl6aWtFNmxuaTdzanpTYzFOTFlsSnBTMEw2RHVJZU02Y2p4ZVRpWTBXZTNSM083SGtlOEIzTTEzRkRmZ3YwUkFMTkVFeE1idmR1TnZuNi9IN0dITUQrTStZbTMzWWNtbjBNT1pXcTRMRjZpUXBJM3VCK25QRmhldDU4NTMwU1phVDNLRGFHWFF3dDZPR2kzL1NaQkRCSmpjTHhZWmg2M0cxUk90WlB6MnJDaVdwSHdYR3NpcmhXL2QwVlVGVEtSdGViRnRuUi9rVXdIYmtXaXVEdXE3aXdQbnpWNXArbEl1bDd2elErcTRpQm5MLzRwWFRvU0x0TlhKbzUzMWRaemt1bUFsZnd6SGx0WUtKK0VKUlMrWlozN25mOVdYRFIvSS9iMEpQNHNBMGdmUTNFUi9RR1VUVEZGdXlLcW94OXl4WWZpdjY4K0RyNWVyWHVXc2ZMYXp4U20xTGN3bERGbFZWNCswMGtwVWx0V3ErLzBEUEJEdDV3MVA3dXl5OER0NGp2WGI2TlBLTDZ0RVNrRTV1R0lCSHpNbWhmaXJpUzJwcnVjQ2RJQ1B1eHNaVVJaS0p3aGptSjBka0ZWVWkwZWZXZ3NYSnp2VVVDdHNwSURtQ3NUUi9ETGswWTZKOC9WZ1BVZHN6QzRCdHRQc0VSam5pL0YwMnB0ZE5aK01WdGo1TGd4ZFZWZUhRMlZWa0Y0alBNd0k5dkhpb3BFNmJjZ3NLa1ZoZlFQY1RTYkVCUHJDMGRGRVBteERkWDBkanBaVzBVeG1ScnE3R1I5K25ZeXR1NCtxQlZkVWFZVzNDeHZZbEEzcnpjTTZPbXRyNDVpM3A2SXcyQkVoSHBvRFZsMWtHeTB0Rm55ZlJweVBsUUhGbEU2anZEQTJPZ1NlWnJNU1NLelNJK2dhZERYOVFadTJKc0ZrRXJOQnIwNEI3ZUNBblB4eW1tTEVuWUtralRUTExLMUFaaTc3U3E1bVJkTFJpN2JnVUI4a2hnZkNnM09ueXdjUkpuWnNyTFN5Q2dlS09XOTE1RkVHTElKOE9NLytYbkJ6Y1ZGQkU3MDNFZjUxcE5laGtncFVWOVp4WUczdzhmZkEwQUFmdUxscUVXSzlydjRwdklUQ09wcitlVWpMbzErSXBtdDhxQi85VnA0VWNKcUFrTG9hTHEwMGE2dXhuenpIeER1UkxnamtwaXc4WjJiN2txQ3JnK0pSbXJTVm5OOFUxcThYZkRoREh1UzdXTmIzTXJzcDJoN0hiUHJOOHNtbVpNTnNhR3JBMFpKS0ZEYzE4MC9ubU9oTDh5SVBPdmQ0bTIwVHAvcjlaeFZBb2g0TFJVVGFIcTZ3NEs0SU9qTXBmSVRCYkVGTm1HMUJIMzhYZm1sdHNXSnpaajVtaHJUaXdRV3hpQmtVcnZCTVNjM0dsMXVPWWt1bUNSTWlRam5mb2tIUVQySnBRbHBCUGhZaytPRDN5MmRRbTNOQlZtNFJYdjlrTDdVN055U084dVpFdHlLTHZwTUdxNFBhdGZSUmEvMEJMdloweXZzNjBiZGlqNnJhTnRycDFJYmM3REYzWERnWHFnbEhNa3V3OVdBdVhycDlNc2F1R3FvWTZPQ2hOTHo5NlY3azFiVEExOVBqdUIxYjJtMmdxamwya0R1dW1SWEVheTBvTEczQWwvdHFFZWpsZ1lxYVNpeWJIa2o4bk9nOGJzUFh1MHJRME9KQVBKc1JIMmFQcTZpZENvTm04ZGhOV1ZVOUJ2aHJUTm5Jb3ppT25MUGZQQktMOEZEZmp0bng5bkxIZzQrTm9WbnJnaTFKRkpLQ0FFSG12YVFrSDQ5ZkVZOExwaStDaTRzelV0T3o4Uy82QXc4WHR5RFkxNXNMaXl1eE85Q2FVRmRxYSt0eDZaMy94b0NoZ1JUK0xXcHhpWlpUYm1sRk1JVjJsQTgxYTg3RDRidzhySmdSaXFsM1RNQ2dxRENWTGxMRGpTVHBVQWJXZm5rQVdlVk5GTUpVTTdsWW03Z3BiczNPeFRXalBQSHJKZVBoUTdvME5qY2pOU01QbjJ4S3hiRXFUd3dJOEZjQ1d6YWtvd1hGaUhTcng4TUxZeG10RGFId3M4ZVI5RnlzL1RvRlJ5czlNSEtBNWllekhVcHpNNE1mSlZtNGErSEZDT2VHMU5EWWhLODNIOFNyZTdJd016cUNWYlhJWnhQNzNaV1Rod1d4THZqVlJYRUlEZmFIaGI2YjFJeGNmTFk1RlNubFpzUUVCMUl3YU5xWDhPak8zSHhNRHdPdVdoeUx5SENKSGdPWjJZWFlzUFVJZnNoaXdDVThoSUtadmljeW13MHBXVXNML05UVzE2T3B2Z1EzWHhBQmQ3TXJUTTVtN0VxcEpDODNVazVTbU90TXFsbys4N2MrRlVBYThqSUNlYlVQdjUwcFpTZzZRYVNlWHZ4ekN4OGRyNHlpUWp5M1lqUXV1K1I4K1B2N0tpYVdhNWZTbEZ1eHJCVHZydHVBSjk0N2pQZ0JZVXJkemk4dHhLcjc1K0RDV1ZQVkFwTzZBclBQbTRDeThncE1tVFFPUmNWbCtNcy9Qc0hHNUJvRXVEc3BEVXJxaUxralRzTFlFR2ZjdW1JQndrSUNrWHc0QTFzZlhRYy9UeGZjc0d3K3drSURzV3ZQUWR4OHJRTkdqeHd1dHlrWVBTb080OGVOd0s4ZmV4dFZ6VmJ1WEk0ZFFraWlVN3NyRzdCNGVqaHV2MmtlbkoyY2tKeVNoamUydnNYZDBSWFJnVTY0N2NhRkNBa0tRQ01YUmMxVGIyUHQ5Z3I2S1JxeGVONVVYRHgzS2hvcGpGYS90WjU5dGVIbTVmT1ZFRjc5ci9YWWY3Z0FmM3pvYXJYcjZ4ckttRkhEa1RBNkRvY09aMkxsVmF2VXVCU1NuT2ovKzkxVm1EWmx2SVkwMzBlT0dJNnhZK0p4LytOdkk3MnNrY3FpY3djOU9pcjk2QXNaSmEwUStkd1V4SHhUd0ExdG1LOG53cmpqaXhETEx5dkJta2Ztays2VDRNVHgyc0xFOFFrNGIzb2kvdmpVKzBpaEZ1WkdUYWVtcGhqdjNUOExzOCtmREMrdnp1eCtxOVZLMHpJZlQ2OWFoeS8yVnlBcXlCOUpPUVc0Y3FJMzdyN2xSZ3lRemFlZGc4V3N2bUpoRHY3ZjZrK3hmaCsxS0M1Y1cvRDJOQ01wK1ErSUd4N2JVVHovd2htWTh2RTNlSFROWHNTR2h0QVBZMFZWRlRlc2UyZGl6aXdORjMwdFdIanR1aXVMOE1xYm4rTDFid3VKaTJ3bXJjZ3RLY0xLNWFOeCthWGtVYjlPSG0waGoxNTNaVGw1OUN2OC9ZTVVEQTROb3dtbXBhRG9DTmh4WTZtdnFVZE9TeWxXUDdZSTB5YVBVenkrY1VzU1B0NjZSWm41c2o1bDVmWW05S2tBMG9TS0pxMWxFR0lEYXpvaGY1Qi9KSG9oSUtybnVRS1N1L0ZWZWdIK2VVTUNibHErVUUxS1EyTXowaklMbERZUU16Z01JU0ZCWE5CWGNGZDVEMDkrbklWaWFobXJiNStPQmZObnFXRTBORkFiT2xiSThUb2dObVpReC9nOGFNcElMbzN5RmRnTTJlWXJuR2dLQ1pnY0tVamFaOStGa1FvQldkeE5GREtIanVUUWhHaEJMSEdSK3JGRG9yRjAvaGpjOGZKQlRBbjNSak92Q1lqL0lzYlRDYnNPRmFPRTVsUjRhQUNDQXYxd1dVSVFYdGhjaHBYTGhzQlBhUUxVdnFpVmpCZ2Foc2Uvek1NOE9pWmpCOHZPRERTenYvVS9ITVBDODJNVkxhUk1ja25LYTF1eE55a0xBOFA5RUNwbUpxR1laa0JwZVMxU00wc1JHV0JXWmZMbTZlR09pZVBISXBsNHk4SWVRdE5MekpXb3lIQXNtWmVBSzFadXc1d2hZdEpxZUhmYzJPV0xLNTNienp3L0RjN09qSlJ5MXhMNm1DaEVzZ3RxOE8yQkd1d3BhY0p6TjA2RExHNkJ2SUl5Yk41K2hGcU9GVlBHRDhiZ2dhRVlGQjJKVzYrYmc4bjNmWXBJMXhhc3ZHMG1GaStjcmVyWE1reDlsUGxwWnVha3hRNEtRL1RBQVhqazNtdFE5YWMzOE5xZVF2em0vQUE4ZVBkVjhQUHpRVDFONHZSalJSUnlEdFN5Z2xrM0V2ZmNkZ1ZLLy9JbTlpVlhVakhXWmxVRXhTaHVHTFYxalRod0tFdjVPWWRFaDhLYjV0ZlZTK1lpZzRHWlQvYlVvS3kyRmsvZE9oMVhMTHBRNFZMTk1INmFqZ3ZuZVFBM3VudnZXSWFhK2pYWWtGU1BHdkxrM1pmSDRhYnJGeWtUdEtuSmdwUzBMTVZ6UTFrL2lKdktyVGN1b1RiM0RsN2tuTHJUYkxYbE02dUZvVW1heTJzMi94clRweWFxUHJmdk9Zckgvcm1ad3BDQkQ5SzF3NmVscnZiT1c1OEtvSGMrM0VwbUxLSHQ2a1FpMmVFSTdmK0VJV1lTejRyRVVGZDh2eWVYNnVnWFNvTVFSMXAxWFRNbWpvM0duQmtqZW1lMHA5aUtDTUxhUmd2bUQzSWpFMDlXQzY2K3ZoR3Z2UFVOL3ZlalZMaHdEQTh2amNOVmw4c2ljTUxDK2RQeDNzWTFHTUhGTkhYU2FOV2IxRi96M2lZOCttNEtKOTBlOTEwV2krdVhuc2NGTG1hT3RWMDdzV1dGNDVFVWhoV1FUNzJXcmJQeXpmZS94VTJ2SnlQT2JJOS8vR1ltWms0WnBlb1BHeklBOVJXN1lLL0pEVlVtUGlvL2h2VGY0UTUrSjlWeUVVRCsxQlFTNHFpei8zVWZFdjR5aHd2SXBOR2ZtOFB3MkVqYUdPc3hiR1lzaFlQczhFQitZU25XYlM3Qm90bWR2aDdKZ045N3JBWlRyM3dmcS84bkVjdXYwcUk5WXVKY01QTkRqTDBpREVPRHpCME1MQUdBOXovNUhuZS90QmNsUEUvNCtTTXpNWGVXeHZTUkVjRklDSFJHSXgzY3NoL3BRbGQxTG04VU1yb200TzN0alR0dnZhYnpFaXZiRSsrOUIxS3hidnZIckdyUGhlM0xSVjJrQlBUcXQ3L0ZueC9hei9vbCtPOC9UTUJmSDcxRjNSdmc3d05zcnNUbGp3ekIzQXNtcTdMeWltbzgrOG9HUFBkTkRnSjUrUGxaYWlMblRSMkpnQUEvekorVmdOYytYNGRibDErdmhFOXhTVGxXUHI4T2YzczlqYnRuRzE1OFpDbzFqZ3NSSEJ5QTVVdW00NVduWDFWT2JXbFlhRlhGVklWblhscVBKOVpuWTVTUENmOTcxM1JNbnp3Q3J1U2JSWmRNd1o5Ly94THUvTzBRWERSbmlzS2xvcklHVDcrOEhrOXV5TUZBc3dQK2RHTWlMcmx3UER3OTNiR0N0SDVxeFdwY1BNd0xTeGJPVXNKSE5yeFhPZGFIMzB1QkQzbE9lSFRab21tUWpldkt5MmRodzQ0MVdNK1FlNGVad1Y3czdGcnd4VmUzZEFpZnpUOGs0KzRudjFHYWtpZFBIZ2p2bkEzb1V3RzBnNmZabjFxWkNyOHA3aWpqV2E1NCtoQUN1U0RFMytCT3ArdmgvRHE4c1RlWm5qQm1qZEpuMlp6YWhEZWYxaGpmMWl3N0c0VG9yazBKVjI2aWorVEpSWU1RNk8rbnFxUWN6Y1lEN3laamZLQzdpaUk4dUdZUEVzZEVJMjdvUU83OGdaZzJNa1RWRXpOR0lEZS9CUGU4c1IrVGdqM3BDMm5Gbjk3ZWo4VFJVUmc3U2xPL2RWTlRWVDdCbTc3b2JLdms1aGZqMDIrUFlCSjlIZHVLNjdGclgzcUhBREs3MFFGS0gxUFgrNFNPSmpMVXdaUmNqRThZcWdST2VBakhOdENaMnBEbXZ6bVduWTlCQThNNW5nREVqSExDb0FGKzFDdzBUV3duKytBRWRRaERoUThGaFRJeVFreXMxMmx1aUlNV281enBvS2FXcDV5bEdoT0xlYmQyZlJLaTZXdnlaN09idGgzR2xBbkRtZk5sVm10Q2NzQUV6K003c1IyNTlsMU1QWXROZHJqOGRxRUFFdmRSUzVzRHhnZTc0Tzl2N01DMzZldVVzM3ZLQkIvY2NKYzN3b0lHWVBiTU1SME5pb2xDYnNQbytFaTRFd2VCZlFmVDhPakx5YmhvVWpEeXlodXc1c045akVSYWxTYWFYVmlEZTY0YWp1QWdqU2NLaTRyUlpxM0JZNytLVkQ2YW91SkNsRmRVOGJvL3dzUG9oNWxFYzVDYmpRNEhEMlhpOXk4bVkvNlVZT3pKSTg5L3VCMGo0NkxnVFgrVDhOQ1lTN2twRUJmUkZBWDJKNlhqc2RkU01DOHhDTGtWalhqMnJlM2tuMmh1SUlHSUhCQ0N4YU45TVRJbXVBTWY4UkhkOGVvZXpJcnlVV2tsTjcyOEU1UEdEdUtHRXFXRTR0UXhBN0NlNDlONVErZzJhY0lZYXFGYThDZU4vcmc3SHYrQW1wOFBqejJaem1yV2RwOEtJSDhmTnlUTTlVWjBBTlZyTXFRNFJDWDBMbndxa1I5dlprRXZIT3FsaUM1RWFZandRRlNFcHM2cndyUDRwc0xxeElQL0NXSWZTN2liQzZlOEdSR01VSWhtSUZCV3p1aENhVFBjSWpUU0ZSNXFSQ1YzS0FIUmdzS0RmVkJSVmNlRnFGMnZwMU92a2RxQk9jcVhqdWxXT0ZPcktpdVhTTXpwZzc0WGlZblF5RGJkcVUxeGk1WC9IU0Q0ZDdlQXhTK1NTUHB2MkpHRkpRdnFtZWJnUlNZT3hzMEx3eEVZNEVzVHk0Si9iOWlEYTVkNGNRR1lNVzlzRUJkSHBHcTNpZjZmWFFkeUFMY2ZzMDFuMTUzZmREdzdrR3IvSWs1b01WbWNIRjJWMzBYbVhnOXZjOXFWWDZuclBSMi8yYnp3aGl3ZVdlVFB2UFFsM0JnNWt6SzVWOHo2b3JJNitOR0hKTkd2NUx3Y1BMTjhCTTZucjhlUDJwNzR2Y3lzTC9NcFdtWG4rVVY3MGtMeitZaXdPSnlhUi9QTXJQeElBUlNVcVhrMXVKaDVNZ3dkY2xkcHhIT1BqSU5UdXlrY04yd0ludmpENEE0VVpkeGlNZ3Y0VTd0YVBES0l6bkJOQUVtZk9YbkZRRER4WThWQlBrN0lLYXBEQVRWTEVVQ09OR2VIUlhqQ2wxRTNBUkdPUjlMeUVCM0JYRG5lNjhmZ1EzVkRIYkp5UklNTlZCclBJR2FWQi9velM1NzhLcEJHaC9sQUR4UEh4bFFIdmdhN09qS1BMRThKSU9IemtDQnFmTEk1cWRwa0U1YUo4TmNobEpyeDRtbGhXUGxGUGlZT0NPeW9wMS92emM4ZmMxSnZ0dDZscmZ4aTJ1WHZsMkRQWkJLM3dvcW9RYTRZNU10SUJUVWcwVFpLYWkzWXNMc1NjQ1VoeXpsaGtTNVlGYVFKcEM1TjllcFAwVUtjcURxTElHeFZjeWdzcEJReHRiQzFYM3FYc3IxYU9uWVA4TGdFNzlJdnNweGhUQW1YdDRPVENDSS9PZTB2dXl6RDNOVlY5TlBvVTYvWE9yMVBZU1pwU2VWemRGR1JWUS9ISTY0NmtXcXVWQzgzcGxmaldGYWhKb0JvOWt5aUZpZm1XRlZWTGRaOGtZS0w1eVF5LzhnRFU4WU5vUk5jMCtiU0dBVk15NnVGblplV1gyT0x0ZXBLVnBTODJrRmh4M3dYRWVUTVNEZ2VpTHZrMVlocWIwc05tWXVUQlJHV2YxcVZoSWloQWJCd2NVclBUV3hQanZPRWVidmdLeDc5ZVBlZVdjb3BLNkg1dXZvbVpOQlBjemp0TUZxc2pUUkhadHAwcFVVdjlRSkpvWkI1VldGOHRLRFZVb2M1a1EwcUpTS0Rja3FGeU5zeEwyWUlQanV2ak9ZZjU1cGprZ1Z0c1ZqNHRZWCtwbGFVMTlFWWJCY09hbGVRcENmeWc5U1RsNlFyaUFEVndjNWVBZ2Y2TDJuU3lwNG9MTWxiZG5hU20wWGNwQTJDM05iQzU5SzA2YyttVWUzSmRhMTlyVTRMNjdYWFo0RnEyM2Eza2pJMmxKdFh3a2licjlLRXJsMDZCOXYydjRJS3BoaVk2UTlVUENhTjlUTDBxUUJhY2NVRVhEWW5udW54RHR5SkhMRmxaenFlK3ZRb1JnYTVNdkxSaElXSklYaitnUkZLclpaZFVoeUtvVHovSkVDNm5qVm9ySzlGNW1jSGtUUFJGOVltVHA3MHhZbDFkNlhXMCtaR3AyWVZHYWxaYVRnK1BDOERwenBVTWdTc2ZESGVUZkJpVkVOQWJPL0NzZ1prVUswdUs2K0NIN1dMVU81U2Q4MzB3N092N2VmS3Q2UHFQb1FheFJCVlg1anZURUhqMjFOclIycTdVekJ1MlptS2NXTmlsY041RnFORUFvZlRjckY3ZXczeXlJd1NWcDQrWlJ4YzZKc1FPRUt0NERzK2dpWEdMQXRORlozd3pXb1Z4MlkyQ3VuZkMrbmNZTFY3YkJiY1NUVFZiVDhpQklZTU5mTnNGVk0zMmdXUVhsRXlqQytJTk5QWlBWSnBDYVhNeC9yajM5ZmgyZStaQzdTakVnODhNS0JEQUduVWsxUUg0a3R3cFBZU0Z4dUc5STNmSW5xeEc3Ym5sdU9hTWU3NDlTM0w2VWR4SnQyT1lIZFNyb29JaXFhYm5wbkRxTkhMd05Sd09GQzR0K3loaGhQYmpNbEJMdkQwOHNNM1J5MjRacTZXQnlVNFI0cFd2emtmbG1ndmJNNHB4ODNqekVxYmtiNGxJVENqeElLS2FvYnFDU0k0NDJMQ2tiNzVHMFJmeG53NTVwOUZtdXN4c04wbkp4clZNV1kxZTNvMFVzaG93aTkyY0Roem5qNUZHRk5heE5KSUt5bGwyZ2o5ZkFTcFUxaGF4eWpEOFp0SWNrb21McjcvZlh5MmNpbmRDWkZzUHh6MzNuZ0I1dHo3RVdhUGp2NWxDS0NFa1lNVUVmUTMyWkh5bnovQS9CbDNwREppRVJQbGg4bmptYzl5bHVINDVXckhFTzA0ZkxjNVFnbEdmV0dKQ1NPTStNbFhCL0R1eGd3c1hWQk5UY0Nma3pNSVQ5OHdHbysvc1UzbEw2MjZjUWFHRElwVUdCY1VsZVA3cEZKa1YxbTRrUE1ZYWVFaFY2clZEOTl6TGFZazdxQVF0Y2NjaG5lOXZUV3RUdkE0MmNWbnUwT3FiYStEUnAwdDJOWlI2L3Y0Z1hiY0liMmFLZHdQSGkyQ0pQT0pxUlhCL0JDQnRNeENhbXh1Mkhjb0J4TVRoeU13VURPQmF5aHdkeWRsSTFRWXQxVjJiTnZtMnJVWXlUN3UyT2xCczhBYjE5OFd5RnlpWmhSVnNYNzdQYmEzYWpKWVNyVFM0OXExNmFMaks2dnBDMDArSzZsdE52TUlqNjBBa2dCR0EwM1RJVHdrSzNNb1VNK2RQQ3NyRStDQ2R4elJodWtUTlVlNVhGUG1LdjFhT3cva1l0NHNqUjRqNDJMdzRBT0RzZXJMUTRpbm1iVGl5a3N3bEJGTWdjMDcwdkQzYndweDU0b3FtaTV1R0JVZmc1VlBKK0xGai9iU0JMVERKWGNQeEEzWFhvb0krbisyVWxoOU1YMnQwcGpVelh5TEh4NkR4LzgyQ28rK3R3ZmovSnh4RmFOdTRsQVdrRWpkdHIyMXpOVXFwTE82VG0xdThYR0Q4Y2o5c1hqaDh4UjRjRGkzMzN3Si9UMmFWcHBKTGZhRG96VTA4U1JBVUU1QjVrLy9YUVNldVgwcy92ajZWdFhtUHhsTmt3aWphcDlKckQ4a1VVQjZtMGd6amVaYWVRbXk5OUFmOWNGMi9PNmVJQldWbkRhWmJTdzdqUC81ZHk1bVJOR01KSjE3Ry9wVUE5THQvRmFxZ3hLU2xsQWhqVlNObWVsNDFGUDdaUmZRdFFQWk1Yb1hoTjFrb1dqdHlxZUVZdVhWSFJ5aEd2LzRLOGV3NGJza1hMTjRtanJMZE1zTml6RmpTb0tLdUF4bHlOdEVmNEtZQTE5c1BJRE1TZ3ZDYVgrLytNNU9CTkduTW5oZ3NBcUJMbDAwWHpWZlZsR0RvenluRkRNb29uM0pTWEVuSXh5SEExZW52cUQxVDZHTC9sMk5RVlp3KzZyVnk2VU45YjM5R1VySHRja2ZvazRIMGZtLzkxZ3RmUjNpak5ZYzRyS2dNN0pLZUZyZGhIMkhpMVNVVHZkbFZkSTArNDdKaEFPOG5aa3MyTnhCUDcwdkM5djA5ZVNoV1Rwc2RZam5JbjcxK2NlWWE1U0IrS3RmMUFROEw2cGpJTzNtaTZBdWdsbkhYWnVYN3VkY3FDVGg3TTY2NUozMmR2USs1VlBNQ1UrYVlYdXphbEZiUzAyQ2Z1QUJFU0g0NisrVzQ4YlVUUHE4d2pCcVJHY1VUL0hhS0JNMjdDL0Y5TytUc2VDaThlcWM0RU8vV1lITEwwNm5hZXJEQlJ5aHVrZy9Wb0QzMWgraFdXTEMybi92eGgwclpzT0RBdnp1MjVjeFgyZUNNclZqeUJQaTBHMGtmMi9mbDAxSkxCbloycGhFWXhHQi84QTkxelBpTnBHSmpwNFl5UEMrZ0dqUW4yeEl3c2poWHZnbXVaekppVW00ZlA0RW1zSmUrTzI5MStQU2kxS1ZyMFpTT2FROUNlVy93NlRUa1Y3T3pNN252Vi90WTByQkxCVk51K1dHSmRUS1J0TnNzOE53K3FoRUVNdTYrbmo5WHVReWN6MkNwckdPay9RdFBqRy9lRE5lMzVLUEdST1RNZmY4c1VvelhuSDFQT3hLWG8wY25wLzBkWmZNNjk0VlFuMHFnUFJGMys1bzBRalFJWVZGZlJSU3ROdlgrZyt0cU5mZWhlRk5QRk5scGQ5SlFEdVhwSWtBNlY0cjFiNklROURTWW8rd0dBLzgzM3NIbVJGc3hhVnpFcFNkUEdwa0p3Tm41NVhpdzg5MzQ1bVBtT1RsSzZmVlcvSGE1blJxUTgvaDRlc21jZWVNNWdRN29hcW1BVytzMjRhRnM0WnFBb2pJYUl2cCtBV240MkR2d0dROEZUM1M3SHg3a3pQc1ZKbGdMbWVudUhBZG5TV0FJMFRqd3RQVWZMbW1YRTVNOGJmVmlxUmNRRWd1WjdBMk1SU2JmQ1NmVWJ4WVJmdk03Q0lrWlZaaERFMm1JelFqczNKTE1Hd0lCU1h4VERtYWgrOXpHakdQK1RsRWdrY3lPazl5dDltWlVNOFQ3Mk5vQ24yd0tZc214aTVxR0VPNTBOeG9RbkNoTU9JSmFvSnkyRmhBSHRGaHgyeGM4RnliV2dReXB2YjVrT2lWQStlbmMwYlVMZXEzbzczV3I4eVp6STNjNDhKOEZpV0FiU1pQelRHZDBSVU5iVmo3MlI3Y2VKVTdBbmlNUWhhdXZLVC9MVHNPTThBUlFLM1dENDVzWTJaOEFBV3pQWjVZdlpNYllTdG1UWXRUanVCeENTTVZBbUp1N3p1WWlWVnZiMlVreW9MSm9XWTgvMW1hY2pZdlhUQ2VqbDFmaklqcjFONExpeXVZZnJFRmIzeDlqRWMrNkVBbUh3bFltRjZ3YlhjeUJnNElZaDVYdkNxVHQvS0tXcno5MFRhOHZabGFwcWZtYy9remNSRmNMNWdlei93c0R5U09IYVhxaTRETllGN1ptK3QyWU8zV1hJUlRBRW5acytzT0tUL1JwUmVPVnZqWUpxaUtaclh1aXoxNGdTNFAyVVJLR2RHVGVSTVFlbG5wUStJelJqR1lFZFYvdkxVTHcySWltRWtkeUNoZU1HNi9ialp1ZlhJVGswTTFjYS96cDdyNUROL3NaaXg3L3JUYWt4UFpYK3l0eEk2WEwwZGl3aEFWeGVnUU1EK0JsR2hDVXZkelJsdm1QZkFWRm83enc0ZE05MzcraGxHNDdmclppdUZ0cGJNMEo0dEF5aVFWL2RhSDNzSzIxRXFFOGp5UHZrQi9vc3ZqTHNzQ2pBMXpwME5Sa3F2MFN4MWY5QUxWWDE1SlBaUENMTXBKbmxyZWlFbFJua2lNRCtGamFMVW9SUTc5UTF2MjVlRVFEMklPNU1US0J0SE1wSzVGMHhrVzlYZEZTVmtOUHZqNkNEYVhjSVUwa3duVGk3RnovVzMwdmNSQjhqdnVmK0o5N00yZ3FzMUloYTJqVDVqQ2lVSWlLdENOajBodzVGa3NDMjE5UnRlNHNLS0MzSGc4d3hGVkxNdGkrRjFvSTg1Y0h6Y1Rvb0lsbEcxSEh4VVQ0M2pleUltbkRxV3RyaUR5WFdnbi9VWXdSMGZhcmFocFFqYlREdlMxSE16eEJQbTRxa1dRWFZ6SG5DZ2VpT1ZGY1I0SGNKR0UrR3BoMndKcVBjVlZQTlBITmlSL3A0bnREaWQ5dlpqZExYTmR3bXRGUE1rK25ORWRKNXArb3VrZVlWUkowWjY0dVRrN1lBREhLUThzS3ljT3VjU2hPN0R0Vi9pbmdZdm9hSDZOMnVXN3F5K2FWbEdOQldNSGVtTEtXSWJZM1p4NGp3VjdEK1ZqSTdXNWhFaEdtemdPT2VoN2pPT1R4UzYweXVFZldwZ1I2NFBKWXlLb3lRaVAwYzlDMCsyVEgzS1VhUmZDcUpqUVcyaFJWTXVNZFFyZUtXUENGVS9JZUl0TGE3SDlZQjcyNTlZaGdqd3FrY29BSm9CR0JESVhpdGVUc3FxNG1CMXgzdmdvUG5UUHJKSkp2OStkaFkySHl4SFpMa3hrZmlqemtFMWNaaEtYc2ZHaHBLZUxtdXRqdVJYNGZuOCtjaXFiS2F5Y0ZOL0luTWs5bVN4TGpQVEFwRkZoa0tnelM1RmZWSTF0Qi9LUVZOQ0FBVjdjbEZncWMrL0hjWVFIU0IwKzM0bHpsRXYvcFJ3UXJ1TFJtaGc2N2Z5OHRQNGtUZVp3VHJWcVgxWHV4YmYvU0FFa2sxWEV4MzQwV0NUVXJ1MjEzZEZVbURHSWpPTENTWkZKazBoZEJYZnprZ1pHUmRTcXBqbkF4b0xjSE5SQ0ZxYVUwK0liY211dy9XK1hkSmcyVzdidHh2T3Zmb3FTeWpvc1d6QVpTeGRkcE5UYkkzVDRYdjdmYTJrT3laa3EvcE5PYkVENktPVmpPZXJJQU40VStENE1mM2N0ODJhWnpud1NUU3lnc0NRYThLWnA2NnZxMnpUWTVhc3dyTnhUVEZwd2pmQ3ZqZkNrT3dXU0RyVjB5SmR4ckhKV0w0QnRPVE42SnpqS2ZSTHBLeEhOaGlEWFpFT1NmdVVzbG94Rm50bGQweDROOUtPNjc4NVhRYlZGUFVwWEVqaURhS1lLM2dJaWVFczR6Z1paRkt6bnlWZDNvUGRieWdVaWdsNGVXaGZvVHA5VUY3clozaXRDU0hBcDRUMFNsUlBjUE5WOUpyWFF5aGlsOHVDNC9EZ0dGVlVrVWpJR2VTeE1LUVdUaXVUeEhoUGJDZWRpZDZaQWJ5YWVncnU4cFAxS3RsMUtPb21BMVBxZzFVVVRVSVNNTEhUQlc0UlFBWVVWV1FraE5IOGJaYTdZQitOYW1rQm5mWCthdnNKRE9zaDlPaTVsN2JqSVZUbkpIc3h4Uys2YzdlTmpGRDZrYlNYSFcxelBZQXBCNmhORkJKSkh2VG0zZW4wZHB5TFNYY0NYTlBmZ1M0U2UrTEdFenl2WXA0QWI2Uk5JM0RveFU4Vzk4dGJKYmIzU1hQOW9SQWdwTzRkTTJFK0JMQTZkSjJUeVpJR0tJTEFGdWE1UHJHZ2pvNms1dlBUdURxVUdSNFFGOE56WFdLcmJ3NVgyNXNrRG9nS2lFci8wcnkyS1lZVkJ1UG4rQ0dSQmlKWW4xNFV4dEYyM3Mwd1dvYTQxeVNJVWJVZlNHZ1FFSi8zYWp4cHVMOUR2a1VPYkF2TGJkZ0hZanRXV0RsTFBqUUlubXVGWkFmMmEwRk1FcERCM0FCbVd1Wm9LZEZ3aXZNVzAwa0NubC93U2hwZHJjajlKM0NQZWVyOEQyL3RsVmJYQXBZMmVRSEFUNGVJdmtidDJrUHRVT1hFVVJWYW5yVnlXUGtTUWlEQUlvS0N3QmJsSDhCWThCVlQvTExPbGszYWxuWll5R0tuSEQxY0t2Umc2bktWRTJwRmtTOGw3azkvU250U3hwVDJMVG9nTG0ramdPYWtySUczcFd1MkplRlRWWldYQlNlY1hRVlcwTTVrN3dVL3U5MnVubWZRbFpXY0RPbWZsTkZzL08yajFqSXpxcnhjNmxZazZIWkNKMFBhRjd1OFdKcExqRHB0U0t0RDZ6SmU0ZHNFWVJET0M0TXBGSTZaUkRxTVF4K2hyZWZtOW5kaWVUak9TSmtCWHhyTnR1VHM4dXl1VGU0U0piUmUyYlRzOWZUL1JQU2NhcS9CalQ4L21VWXRKM3JwQVQ3aWRDSWN1VFNqQjJsTy9YZXZxdjN1aXIxVTY3a2J3QytZOTNhTzNhZnQ1SWpycDlZUmVvamwxQVBzK0VSL3A5VTRWRjdudlpQQ1JlaWVhdzVOdFE5bzVFemd6QVVUcWlNVHNTNUR1WkNITHhQUngxeWM5VEZsb1l2dnZ6NmpFeXc5OWdkblJIZ2lpVmlSSVo1UTBZQ3Q5QTRrODd4VDJFOExucERzMEtob1U2S2NVT0RNQkpQYXdPQThVL05pSDBSTk54RXdSOFNIdnRtSkVGYk5FdTY0dWRyekpOUkYyY3A1S2RpZk4xOUJ4K1p6NklvSlJjUFNrdVRZbmloRWlPa3RUY3JRa056Tk5semxSN3VyNnFleXk1OVFBRFdRTUN2UVNCYlRZNEdrMEpydDhUS2d6TnUzTVZGRU5DU2VMWm5JeUwzbG9rMERYeDNGSXlGYWd1N2IwQ051QlE3bEl5cTJGUDUxcVlyT2V5eUJxYkJPZE94SWRFaitCdk9SWWdwVEpOUU1NQ3Z5blUrQzBOU0R4UTRUVGNmakdoalI0OE9EZmd0a2o0ZTM1NDZjWmRrZGdFUnh1Zk1aS2pTU0o4UWwvS3FMRUNFdzlIODBneVZqeWpKdXVwcDBzMklPSDgvRE02OXZnUUhWSVV0VDd5eUpXNHpQa1RYZXNZSlQ5aDFQZ3RNUHdPdDFFWjhsbWVGVkNzV0plcUNpSWZ2RW5Qc1dzNnJvdUplSmpDM0pkaXVRemovMTRVVkI1TVB3by9yd3VWVzF2TTc0YkZEQW8wQThvY05vYWtPM1lCdktzalBpQzFDbndrNVVLbEQ0U2ZwVlFzdzRpa0NRL29qdkpJclhDbWVvdkpwNW9QcDEzNlhjYm53WUZEQXIwTndxY3NRQVN6VVRNTVJFbThqb1ZrS1F3RVRvNmlQWWpSd1I2QXFsL3J2dDllc0xkS0Rjb1lGRGd4eFE0WXdHa042bjVWRzJraVg3aEZEN2w3dTRpWUtmUWhGSFZvSUJCZ1g1RWdaN1ZqWDQwQ0FOVmd3SUdCZm9uQlF3QjFEL256Y0Rhb01BdmdnS0dBUHBGVEtNeENJTUMvWk1DaGdEcW4vTm1ZRzFRNEJkQkFVTUEvU0ttMFJpRVFZSCtTUUZEQVBYUGVUT3dOaWp3aTZDQUlZQitFZE5vRE1LZ1FQK2tnQ0dBK3VlOEdWZ2JGUGhGVU1BUVFMK0lhVFFHWVZDZ2YxSkFmOHBGLzhUZXdOcWdnRUdCZmtzQk9YcGxYOGMvamRMMUJIcS9IWkdCdUVFQmd3TDlnZ0lpYzVUc21SVHJ4citmcFAxZDdYNkJ1WUdrUVFHREF2MmFBbkxtczV3eVIyU1A0eFZ6aDhMUE14WGJVbXJSeUtlR2FvZEsrL1g0RE9RTkNoZ1VPRWNwb0o1NHdUK09NbXUwSnk2WVBBVC9IMHVrVi85U3FTeFpBQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgXG5cdFx0XHRcdHN0eWxlPXsgYnV0dG9uU3R5bGUgfSBcblx0XHRcdFx0c3JjPXsgZmFjZWJvb2sgfSBcblx0XHRcdFx0YWx0PVwiTG9nIGluIHdpdGggRmFjZWJvb2tcIiBcblx0XHRcdFx0b25DbGljaz17IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKSB9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdHJlc3VsdDogbnVsbFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0bGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9ICAgXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRyZWxheW91dChzZWxmKTtcblx0XHRcdH0gICAgXG5cdFx0fSwgNTAwKTtcblx0XHRmdW5jdGlvbiByZWxheW91dChzZWxmKSB7XG5cdFx0XHRnYXBpLmxvYWQoJ2F1dGgyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBpbnN0YW5jZSA9IGdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiBzZWxmLnByb3BzLmNsaWVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnN0YW5jZS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgdXNlciA9IGluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpO1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbi8vIFx0XHRcdFx0XHRpZiAodXNlci5pc1NpZ25lZEluKCkpIHtcbi8vIFx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5sYXN0bmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmltYWdlVXJsID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LnRva2VuID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKS5pZF90b2tlbjtcbi8vIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZ0xvZ2luKHJlc3VsdCk7XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuLy8gXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Y2xpY2tCdXR0b24oKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLnJlc3VsdCkge1xuXHRcdFx0bGV0IGluc3RhbmNlID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTsgXG5cdFx0XHRpbnN0YW5jZS5zaWduSW4oKS50aGVuKCgpID0+IHtcblx0XHRcdFx0bGV0IHVzZXIgPSBpbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKTtcblx0XHRcdFx0aWYgKHVzZXIuaXNTaWduZWRJbigpKSB7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaWQgPSBwcm9maWxlLmdldElkKCk7XG5cdFx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBwcm9maWxlLmdldE5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQubGFzdG5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaW1hZ2VVcmwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuXHRcdFx0XHRcdHJlc3VsdC50b2tlbiA9IHVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nTG9naW4ocmVzdWx0KTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXG5cdFx0fTtcblx0XHRsZXQgZ29vZ2xlID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVg0QUFBQmNDQVlBQUFCcHlkNTFBQUFBQVhOU1IwSUFyczRjNlFBQUh2dEpSRUZVZUFIdFhRbVlGTlcxL3F2WFdSbldZUVlIQk1kUmhIRVFrRVhEYUNDSUd0eStNUkhVQ0NiaWtvZHhTNFRra2ZjZVdkU0VHSTFQZVpGZ1ZCUWpmdS9CcDRualU4SGxnWXBoQkpSOUcwZGtHVmFaalpucHRkNjUzVjNkVmRWVjAwMVA5MHczblB0OTFWMTExM1AvZSt2Y2M4ODk5eGJBamhGZ0JCZ0JSb0FSWUFRWUFVYUFFV0FFR0FGR2dCRmdCQmdCUm9BUllBUVlBVWFBRVdBRU1oRUJLVTZpNDQwWFozWWNqUkZnQkJnQlJpQkZDTWl4OG8zRjBLMlVnU1YwaWJpeDRzY3FqOE1aQVVhQUVXQUVVb09BWVBqaThvY3VuMWt4Wm94YytGdEgzZkgyNEI2REx2NmRaSEZNa0N5Vy9tYVpzRDhqd0Fnd0FveEE5eU1nKy8ySFpiLzdvNmJEbTMrKzRiOG1ma1VVQ2VZZk5RTXdZL3lDNlE4cEdITHBPa215OU9yKzZqQUZqQUFqd0Fnd0F2RWlJTXYraGhQN1BoMzcrYUlwWDFLYUtNbmZacEtSTFgvZ3lBV0M2WTg5eDRxSHZ1dEF2eDVDNDhQT0RJR2pUWDQ4OFpZYjY3Nk13dGdzQ2ZzekFvd0FJNUFTQkloMzl5d29IdkY3eXZ4bXVxS1lraEUzRjdNQWg4V1M5UzFCRVROOWdVSnNKd1pHZ1JVN1JvQVJZQVRTQVlFUUR4ZE1LVXF6WThyNEphdTFVQkRQa243OFRjaFl4WThWeDJRRUdJSFVJaERpNGFmRStNMVVRS21sbEhObkJCZ0JSb0FSU0NZQ2dwZkhMZkVielFTU1NRem54UWd3QW93QUk1QjZCQVF2ajR2eEMxS2lJcWFlUGk2QkVXQUVHQUZHSU1rSUdQSnlsdXlUakRKbnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTUFEUCtKQVBLMlRFQ2pBQWprTzRJTU9OUDl4WmkraGdCUm9BUlNESUN6UGlURENobnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTVFOcC9jTVYzdUI3dW1rL2gyYjRaM2oyN0lEZWNnTCs1Q2JCSXNQVHFBMHZ2UHJBV0ZzRXhlaHdjWXkraDU3NUpob2l6WXdRWUFVYmc5RUlnTFJtL0xNdHdmYmdTN1crdWdPZUxEYWFJKytzUFFGemVyWnZnK3VEZFFEemIwT0hJbVQ0RHpna1RUZE54QUNQQUNEQUNaeklDYWNmNDNldi9pWlpGL3duZmw3c1RhaGZ2anExb21qOFh0cktoeUwzckozQ01ISk5RUHB5SUVXQUVHSUhURllHMDBmSExiamVhbjNrY2pYTi9rakRUVnplU2QvY09ORDQ4R3lkZmVCYXkzNjhPNG50R2dCRmdCTTVvQk5KQzR2YzNOYUx4Ri9mQnUzTjcwaHVqOVpYbjRhM2JnNEpmUDU3MHZEbERSb0FSWUFReUVZRnVaL3orRTkrZ1ljNXMrT3BxVTRPZnc0bnM2MjlLVGQ2Y0t5UEFDREFDR1loQXR6SisyZU5CNDM4OG5GS21YL0NiUDVMRno5Z01iQm9tbVJHSUQ0RXhJKzI0NVR3TFBGN0FicE94NW4wM1ZoeU5MeTNIT25VRThnZlk4UE5LSyt5RU40aURIdHZxeG9JdDhxbG4xSTBwdXBYeHR5ejhJN3piTnNkVmZkdDVGOEF4N2xzUVZqdVdYcjBCc3Z6eGsybW5kOWQydU5kOUF1LzJMZHA4U05JLzNabitaSHJocDF4Z3hWbTlKTkgvQU9xSXphMSsxSDNsd3hzYnZOaHlVZ3RKNEttZkRVdCs0RVJKTmozNVpMenpSaHNXN01pY1RudnpOVm1ZVldFTlZLVmhueHR6WHZZZ1JYTkZBL0NTNzVXTStneTd3STZLd1ZLWXVPeXZQY1Q0VTllbStmMnN1T05TRzBZV1daQ2w0aUFuanZtd2Zxc1hpN2VjM210cWhXZFpNYjQwVW5HdncwZU1YNHdDbWVNaTFIY3h6VzR5MHhUbW1yR2NiZGlGeUx2N2Z0aUhWeGhHZGRKZ2tIdmJMSGpJcExObDBWUEJnZVEwWi9ybDVYYjgyMVFIK2diNW53YVh2bjBzR0RMUWhrbVZUdXpmNnNLOWIzalJySW94ZVp3OXlQU0ZuMVhDbFpmYmlQRjdWREhTK05aaHhUVWhwaStvN0RuUWpxdjZlYkF3VTZYYkpOWEg3ZE8ybVpEOFUrTWszSG1qRTlQUE4raDRWR0RmQWd2S1N1Mllmb1VQSy83dXdzTGExQTArcWFsZm5MbnE4RzNYNFI5bkx0MGFyVnNZdjkvblJjdlRqOFdzZVBiMG1jajkwWThoV1dJYkg0bUJvZWVUaTNEeXIzOE9idVk2VGRVN1l5cXo4RHVhWnNialNvWTdzYXlIaEtra0ZTdk9xZHdvLzdhSXBLaDRaYzYvakpaSTFUS0hiRk5LOWZXUk1QL3VIRlQyb2NrY01SZWIxWS9ubm1yRHEwWXpPZE04a3hWZ3dZTDdzakU2TDQ3OHNxMm9tcGFEYzFlMjRzR2EwNVQ1eHdGRE9rZUp6VkZUUWYySmQrQXNYMDA5Mlh4S21IM1RiY2liTlRzdXBxK1FLRmx0eUJPMis2Y3AwMGMvTzM1cHdQUmJqb3NwdGdlYjl2bUZ0a2Zqc2dZNnNHUnlaS0JZdmRtTEJsV005ZXYwS1ZTQjZYWkxvdTBuWDBVWWliZlJqMjNxeXFRYnZiSG9pYU0rQlRuQlRHeUJKcFNRWjQrVmFXckM1OHd5WXZveXFSVzkrSFNuRjRkYUl1MmlVRkJ4UlJhcWNwVW4vazhuQkxwRjRwZnJsOEo1NFFrNmFxRU5KMWNNSVYyOVZnN051cVlxd01EVENhaDBvR1hxT0JyWU5JVDRzZXpGTml3K3FQSjBXUERJRDdNeG5xUkV4WlZjYUVQcEtsOUFGOTY4MTRNYkgvV2dPRmRDeTBsWm93WlM0cWZ6LzhLL3RXS2hRMEl4Wk5TNzA1blMrR2lMVlIvOWhNYXQ5NGl2bUU3RnlpOTE0TXBDYlJidFJ6eVkvNXdiTlNydjhuSUhIcm5PcnVxakZ0eDZsUlVybG1lZ0xrUlZyOVB4dHNzWnYreHBnSHpzelFDV3R2N3Q2UEhEblRqNTV0bnc3QzRJK0VsNStjaWRkZS9waUhYUzYzUm9rMXZMOUVVSmJqL21MWFZoK2YxTzlGUktwS24zQkhxb0ZkSnhyZ1UzRDdQQUVRbzdSZ3ZCMVlZTGdSS3FLdTJZT05pQ29KQXA0OUIrSDE3K3dJdldzMG5YWGlnaHdIZmIvRmhCaTNuS09rTHhBQ3VtbkJWVUh6bUlPYjlmUXdOT1R5c2VvTFdFb2FSMkNqaGFWTjY4aVhUekNTd0NqaGxxdzdEOEVQRmVHZTl1OUtFKzlKaXlzbW1ndVhtRU5ZeFo4emVrdzlicHI4dUpya3VJTGplOVVjZjJlQW5URUZHaHY4cVJOcHlqdkcxRTl3cWlXMkJtWEIvQ2Zvd1ZUcStFVXJFSUgzWVNMaHByZzd1RlBKcDllTlZrVWQ3YlJ1RzVWc3laVEdVcW1GTy9XUCtGQjR0TjBvU0xNTGlaY1psQ2VDaVE5R3YzRWRPdjFjWGRzc1dOeDJuQmQvN1l5QXl6NXlBU09oQVVPblRSQTQrVENaY0o1MWhSbEJQc0d4NmljOGN1SDE0SzRXT1VSdTBuRnBxblU5c01LN1NBdWprNUdjZVArdkhCcHg2c2lqa2JUS3lQcTh1UGRaL2YwNExwRjFPZkRkRm5JL29PMS92dyttb3ZhcnBSY05HMWFLeHFkRDVjUHJJYzhMdkNHVWxaZnVUZVdJZjJ0WVZvWDEyTTdPL2ZDa3VlVnE0TlJ6N0RiNXlSOXltSWhKbVc1cVFQT3hwbFhFd3dlbjBTc2tDTU9TUXBsZzZ6WTlZVmtXYjM3bk9oK21WZFJzTHlaeVpaL2lpalF3ajNNbG8wcnJ6SWptTTBxd2d2TE5ONnpmb3RMaWcyVlZPKzdjUU1sWVhKNkVGZUREbmZGclE2VXJWZjJXQWJwb3p4NEtFWG9obUlLcHJ1VnNLTTY1MFlGc1pCaHFPdUZZdERMM2lxeXM2blJlUlpWNmgwTEVmSVhMSldMWHBiOEVDVkUwTVVhb2RMcUg1T0d6N3phbFU0dGNleHJXMm9kcHZVQjJRMWM0V1QyaTNhVlZ6aVJNRE1nWERmdkNPQ3V6cG14YVFzVk9lUnhZM2FrL0lVQzY5WGtTWFV2YlRtb3d5V21paEdEN2xrS0ZBY0dyQkQ0ZXZmTjdla1dyT1cxdStJOFlmZjRHd0xobEkvcXRVeHVmS1JEdnhxaWgwa0UrZ2NNWEdpcytvN1BpejdieGNXNzQxV0lRVVRXRER2dGl4TUdxaWxUWVNWRFFUR2ozTGd0cDFrM0xCY2E5d1FMcXdUZlR5Y1I0YzNFaDZZbG9WclM2TzE2Y0w0WXZ4WUI5Wi8wSTQ1YTgzVjNSMW0zOG5BQ0Fmb1pFYnhKcGNiUG82S0tsSGJaVjk2QkxiQjFObXJwa2VGRzNsODltWG5wbzkwdUNkR0RZbnFkVVpGcFkxZmswdjdFaFNOY21KQm8xSG5rVEZ2WWFzeDNUb2VIMldSME5PRzVYZXFaZ3Y2WE9oRjdxdjJveGRhQ0ppSzAxdVlsQkhUTjNONXhYWThlbzBQMDk2TXZ5M2JCQU5SU2NGcWZwS3FzcHRyZmRoUDg1NFNwU0o5ckJnRFQwVE5RVE1nNGpVUlYyakZaQXBmcGZpUVZGcXMzTk8vOTdnWHEwT0VtOVZIMTB5cTFISGNSakg5U0pxZXRPYnorRlYrM1BwMi9KaEhVdE9kejRkL2RHU3pmdEtMZXhiN1VhS01reDQ1U3JJdEhlUEVVeXJoUTVPLzhrQVdUOU52emNIZ3Y3ZGlYbFI1VWx3THpTWG5PL0g2M1JiY3RVZ25YSFN5anlza212OUxtRWVMOHBOVTZ0Ym91QkpHVDh6R2t0eDJ6Q1ExYkZjNzg3Y3lSWlRJTFlwc0dGMkFvNklDVW5ab05TczZXT016ZDFtNzVqbVJoN2ZuNXNCT0pvMlo0bFp0OStIaFVWYVY5QnpzUE8rTThXRjFqUWZMMXRPVVdzMEpFNmpZbk84Wk1IMVM1Mnc3NkVjaFNTcDlkYk1BRWlUamN2djNlZEZrczJCWXNWWUM2anZjamtwaS9Hdml5aVd4U0owdjI0ZU45VEpLRk1uWGFzSFlma0JOU0owemxkWlF0QytTRlJPSFNsZ1ZVcXVVbjZ1VnZnL1JRS0tveGd4cjFDcGpKNmtEZXBDcXAyeWdGcStHSXo0Y0pUN2hvWis5aG9ram5xTGViVFJOTENPMW5Ob1ZsZHN3aGhpL1dqK3ZEbGZmNTFQNXBDV01PRkxUSFl3OEdkN1ZrNnJGZEVaQk00aEhEWmorZmxvay9vWndyZERWZC94MVdaaTZTOHlPSWtWVlhaOFZaVjNrYmZGaDJ3RVpoYVJhS2xJSkJ1Z1RMVnlrcW84ckZGWk9ka1l4L1hZeVJLaW5kdTFGUWtOUDFUdFVNdGFKbVd0YnNhU0xMYlcwL1ZXaFBKWC9yZ09tdVV2NW8wM0RVaEhRUUl1Yi9SUWRhQ29LU0hhZXRERDcyN1ZXekw5RXkyMXRlVlpNbWlndW9LWFJoM1ViUEhoK2JVVDNIVGNaWkRWMHVXNFI3eGhObDZmUmREbm8zSGpndG14Y2F6QzlOaTlEdXdCZFROUDQ1Nlk1SW1vSWV0bUhFbWRaRTFNZmExNkNlVWp5eXY1NGp4L1hGaXU0UzdpUW1EbUl3UUVTTGoxSHk1d0ZQVU9IVTl3ZFFkeEdhMmFXTWpadWl6RzlwNm5MbkJlQ1V1QWpEK1ppZkppUnlmaWZsOXJ4cW9vSkd0ZmRqNWNXdDJGSmFHQXFKbDNMaTFYMnlPQkUwdlJGaEhsTkhKZ0xsWTJvUlpoUnVHV1l6Q1dOU2RINVZsMUYrMC9VZmo2aTlma0lyZmxuMi9IaXJRN1ZZR1BCakNsV1ZDdXpRaG80YmgydXhmc1E3VmU1bGZhckJKMExkNUlwNmZUU3lHRFh0OEtCcW5mYnNFTGdscEkrcnE2UUZmZW8xamhFU04yNmRzd0tTL1UwR3lEamk0ajZUTUlVc3RSYmt1Z01URjMwS2R4ckVUeUZoQWxIOVRhYUozWDBOdzlMUWNnSll2eVo1dGFRWHZDeE5WNll6WGZ5Q3NRQWtJV2xOSnQ1eE1EMHM2UDZqaW0zUmhpeWlFaUxlQStFbWI3d2tQR25sOXV3TFNiakVYR0RiamZScTdZNnFxLzFndFRiR25jSzJXblN4WHBJWnRrMU8zd2F6QWNLeGk4Y0thbkx3d3J0b0ZmQW01aDllZUNSRm1UN1I1aVFXSHovT0piSUhNNUdDaTJzaHoyUUY4ZUVlTnZLOWpEVEZ5bnJhWVBldGtReEo0NGZadnFVVjh0aG5UUlBnOGpUczNPd2ZIWTJYb3U2Y3ZER2JDZG9yMkhJV1RCeGlBb0w4djMwRFMydHd1cHN6a3FGaVFlVDlhV0Y4OUpRRHVVVk50V2dRSjdVUis4Sk0vMWdwTVd2dFdHVHByNFdWTks2aTNDcDZPUEJVb08vcGJSWVhhVDJhUFNvbUw0SWtQSElteDVOWHlvNlQ2c0tWQ2RQMVgzWE0vNVUxU1NCZkU5RzFwZ1RTTjE5U1ZhdGNXSHE0NjFZc2NtSEZqTXlTSVUxbmpaN3ZYR0xvbXcxaXhqeDE2dGg2c2ptMzJqSzNuWUtLc25vWGFReXRoN3VtZ0UzcVdVZjlXS1hhb1RLNm04Tk1LTnlVdk1ZOEgyQUdPTGtBWVF0L1E4S1MreEErMEd5NW9oQWZzcDNLaEpPSWEyTWJRbGlubVBYTXVxc2ZBbUtVVldBQUxMR0dWUWdvU2Z0MmhVN2Q3VVg3VHNnUVdTQU1saVJoY3VnOENCQXFXbTk0SFVESzZOYVVsdldxZnNZR1JPTUNLVWJQVVRMc3VvMkdpM2VrdFhVNStvTWdNS3pndWxTMGNmVkRUR1dtTGpHMFJoV1JhcTFtMmxBQ0YvbmFqRUZXWTExdUJ5Z3lUQTVEK3JCUERrNXhzckZSbWFibnRBY1ZCL1hmVmp2azlMbkh0bTZCa2hwYVVuT25LYmNDOTlzcHd1b0pJbm9zdUUyakQyWHJDbDAvUzV2TUczZ29zVzhtWEZNSmZXTG8yMEdtM0tTVVF0OU9jbklNOTQ4RWk5YnhycDlNaW9VRlFJeGRETE1RRy9WOFFVTlgzbHdzSzhkd3dJamdZU1JaRGFMT3EyTy9NdmRXb1lVTDkyZGpVY3E4TVNjamtQWWlIbWZUVG1wVitwMFVhTEtDUTlXdE5BckJKWHdRRWw5K0p1bzJNS0QvQ25Sa1BDQVNZeFJEQjdrcDIrL1pwTSt1cWRCSzF6a2hWUzYrdlNwNnVQaGF0RWF3K3pyd2srbU41b0ppbW1zNUFYRWFyUGtsYVRrNUR6TGxQSEx6ZXVWV0YzeTN6c3ZneG0vQ3FFMXBFc1dsM0JUNll5ZXV5cTFVbWpKQ0h0Y2kza3VzaThYT212RnRXbG4zSXIzR2Z2LzRTNGZab1VQNXlMR1B0b0crdVJ6Mk8zNHB3ZWZYRVEyMitjSE1Td2FiTU5NV3RDT09CbWZiZE15cEVoWWV0N1ZIdkVIMUJKcTAxQU5rMnJ3NGE4clhlZ1Q0aVJ1V3BDZU1zbUJJcDBBWWxTN2xzUG05djM2K09IQlF4ZXdaNzh4bnNva1F4Y2RhZG5IQ2F2d0dLY25PRVhQWGM3NHBieHl5QzJmRzFabmQ4TStEUEswSWNjZUc0Wkx5MkwzcktOTk1uYVRUdExJQ1hOT1pUdThVWGphK2RHR25QblgyRkJBek5oRHJXWnZweE1CU2JlcFY4VlVreHFvK21zL3FtbUJMUHl5MGdKcVBJdDVUdDI1UGZFcmlkSU9yWlFRVkUrTS85alZaTmtVeW4zMFpVNDY2RTRweW85UGFGUFhhanFyOTZIemc4alpDbTJvNmhrWlNOSGl4YnRkYkwyaFVKZncvN0dnbEI3dVN3NGJianpiaFFWN2xSeEpyVktqbGhBa0RKOUFqTi9vRlNhMVVWamFwK1I1QVhXWk4yb2ptSkt6K2wrdElWTDduMXRDK0JwdVFGVEhpdHgzZVIrbk5SMWhFZGVoOVNDZHFIczhRbUtYM0hVOTQrLzVMY2lIbG1vcVJ5Y3M0K1cyYzdHbzlXemN2ZnN0L0dqWWpacHdvNGZmZkQvY0ZZMkNBMzdQdnVjeVpmejlTUzlwRVJzSU1zVGxrd2hWR1pZMmlXaWF1dmN4WVB5QjZ1d1ZBNElqc3FHSVBNMGtKblgxOWRMUWdFRWtyZElPU25ZaEJHaGozSGF5VGFnVW04d0ZMR0dtVDVZdlIyaTNyb2hHaThBUm0zOWlkTVN4Z2dlczBZN2V2UWxZV29rOHU5T3A2eHlpNDNMYXlidEF2K2t2SGhwcFQ1dDZpSURKNWk2eDYxaTdZNWwyNDVxWUVnVjA5d1o5Vks5cmJ5Y2hVTGhVOTNGWHV5Z253bGNPN1hEako0cEZVb0NDOVBoUnowTzdoQ0twOEViSUVrbEtJZGZpdDJGTzgxajh1WFVZN1dlVXNIVEgzOUhpN3J4WTVDVjc0OVgwRXBxNXNhV3F0OVlzVWhyNU54L3lhdzVYZzlXR2V5dE5tbzkySmZiVDBXNG1NYW1qcmQycG5SMzFIZTVRV1dTRVl0Sm1KTzFMcWM3aGRMK1g4ZEhlRUVhaSs2aTZWOTFPNWNHSGoyZ3RRTzJDQjZ3QmUzVDRxdU9ZM1hmL3JFdEdOUmtScUYzV1FDZWVuV2oyL2tqb1lSWWtkcFFMSlgvWVdYRFRwT2pJVlpOcFIyODREdDNRaHJlVkljbmx3NjFhV29vcTdMUlpUdWZJNVBNR1pTMG1GTFNKOXNBSWwrbyt2cFptMjJwWFZPSEVuZnFYVVVTZ05hS242YlRUZWVXUlFVS2RMdFgzSnB3amRjVks5cDd3OXI0eVVNQWVidy9jM25BNVBuSkhES0NhUFNmeDlLWlhPazFBOWVkZUhLWmpDOHpjT0ZvSXpTaEhPeUxYSE5GU1hGYVpqVmZJSm43cUFMSzBJTTZlVHdldlRiM0VnZVUvY21pbTFIUkdCbmJFWWJOZFR4K1QySzhwd29LSDdzdkNUTXBmdUZLeXdYK3RvMTI5bXJTbjU4TS9OL3NpVW11NEM4bFl1em55d3IrL1JjdWNna2pReWFJR0Zpd2RveVRqYzQwMUR1blBKOWdDQit5VjVuYWNNcG1oTmFRK3BHT2hOSzdza2l3c3Y0MzZYajg2TUMvVTl5YVBzZU9WbjJXalRDZGxSQjVsdktxVHprdEdaZUhacTZoT2dkd2x6S1FQN2N6VzJlbHZvbzhLTllkS3I5L2lnWFo5M0lwZlBKaUZtME45dEppK2pyWGt4ODZ3T2k2UWpCYXJsdFVHTTBoMUg2L2ZxS2RQd3ZRN2N6QnZwQ1ZzRFZWSjM5TjRqV2dlUmp1c0oxMUhadGNqdTU3NWQ3bXFSOER2S2J3Skt3OXN3SUtXRVhDcDU4dkJ0cUZ6VU41Rkx1bjU3eHR4VzhqbjFQNzIwS0xSb3ZkMFBWV1ZoWk5xUFpLMjJXZWErOU9yTGx4Q2g2OHBPbVpCZnhFeDQ0ZkUxVUZsOXEvellFMEg0WkVnT29SdGd4Ky9HS1dTQjBneW1YRjdEbVpFSXAzUmQ4MmtSdHZuczRQTTlDTk82TzVWQTJzdGZZVkt2UllnSW5ycDZPelZrUlJ4MyttdFVJUUV1VlFjMXVQMjRxN0hYWEhweCtNdXpEU2lqQWYvNWtiMTdhcDFJNG9yUG9UejBKMHg1aVMwUVl1T1V3cTdMV0lRdVRnSEZhbzFnREk2ZW1RcFhVSU5GTVdReUE1K2dlWk1meitlZWQrclBmS0JUbWViUlgzMGRocHZsZGxWdUVDNldmTy82aU1iVXQzSC9makR1MTc4aGRhQ0lrN0NwS3RwMDliVlFWV1hPa1RFdWVnODZreGtsdHFWVHZXR2QxMnhPZjJyOERmckRZWk1YNkhpNVIxdjRKa3Zsc0l2UnlRcEpheWoveTM3ZkpqN2FqdnA4c3hqWFVmV0dBN2RRcVo1N0RRS0lhbC8ybUlYNkpETXVOMnhXanFvS3J4ck1IYXlWVyszNHgwNm5xQXJYVVFpakYycW5zMmNTbHFqM0U4OXZSOGJqMmp4T1VTTHZwcEZkdUxXNjNXek03TmpHbUxWNTgzUFREcnlLZlNCcE5UN0lHMUVvcTJ2R2syTlVjWnFQOXJ3OGNRejdWaWxrY0ZvRVBsTE8zWnJUSU9DaWZRTVVkaHVQcmJZcmNXV29tNnBjZUdKZGRFQUdERjlzV3Qydm02bWxlbytYcnZSRmRoa3FZWkN1WStxSXcxc2MxOHphV01sVVFyK3U0WHgyMGcvL2ZDb08ySldaOG1PMXpIcnZWOWkwN0dkTWVQdWJUNklSMnFleGYwcm44ZUpWbk1nYzJsNTRaWkxULzExajBsQVYwV2dqVVF6ZjkrSzU5WjZERDkrb1pEUlFIclJaYSsxWWhwMUttV2FMTUphMVlkRzBuTjcxTzVsR1F0ZW9QdzNxRlFhU3FiMHY1cysrRUtmVm8wNDlUMzVCaGZQSXNGTkJpOTRSRmNTaktmaEM1R2tobmV0bXZLMFg2eEtkZGtLUWYrbldUdVM4WWxPQnk3aXZVVlNmOFRSSGdDVFl4bzZxbzlJMzB5SEw0bWQydXJjQXZtcVpoeGRWVyt4QS9oNjJqaTRiQk45ektlRFJtdWcyYzM3dEdQN2hpZmJVVzIwWEVlNi9udWVwSHhJWDIrNEE1M1c1M1p2Y3RHTVJqOW9SQkN0WHRXT0g3emlRcDJKSGIvNE9KSG8vNUdqRWlKcHhUNkJ6dlR4Mk84UUlEWlozdkFpelc1MFFrS1lDbkZNOWpxS3M5Q3QyUk1SRGsveGpaRnlTUXhLaFpNZWFUa2d5bjd2WDFPblRIenNzNzhFMURyeDFQR0NYcVdZTUdBVWh2Y3VRKytzQXRyNTdzR0Jsc1BZVDlmMmIycnhjZjBHYXM2Z0pHWnRLMFAyNGRtdytIcEZaVDFyb2gwM2t4NDhWZTQ3anhyMTlGU1ZGdFRyRCsxTGg0RFI1aGpRaGpRbjJlTFgxZnM3ZDFpYitOQUpiYTZwcDhYMnlVTXRhRHd1bzZDUGhEbzZFYlhXYmtNMXFadkNObFdrY3JpZlZBNWJVbGRGemxrZ1FHMHlXWndKUkFPM1lQUjdxSTI3KzBNMHhmMHNHRTRib3hyYnFIOVEzMnRzb3JVa01xMVVDeHF4RzAvQ21GSUxtU25MYUtUK2x1WHg0L09EcDVhSG9HTVU5Yzhqb3AvMm9EMXpaQWhSRytzMTdNSStMdGJleHRIaGN5NWhXVVE0dFIvMzB6bEoybGxqYkp3U2kvSCt2RHphT0FVeC85VElEbEV6ajhTeVR5elZ6MGIrRUxzYnZzTG00N3RpWnJEOVJDM0VGWS96WmUvR3laSi9EekIvVy92UWNKSVJaSjc0dmJINnlYVTRPQ052bWtsaXJ5RUpLbm1PanJ5OUo0ZE9QNlREcytqclhrc1U2VGF3MlZyQ0hQWCtBQ3JVMitCbnBwODg4TTF6b29GNGxkSVc1ckc2TkNSd0NxZkpKdno0Q2FIK1M2ZVZkc1lKT3NJZnZvbUxucTd0NCtJZFRiZTI2MWJHYjdmYThmaUV1ZmlYRDMrRjJzYXZPOVAyVVdsbFd4TmFCL3dPem05dWdyUGh1eGhFRXNHdnY1ZlY4VWFLcUZ6T1BJODdiMUcrclVxbkl0NmVpMGwwRE1GSHUybWRoU3dRdmozYWppTGRaT21MVHpXQ3hKa0hHTmM0NHhEZ1BtNndpTjdWclNqVU5vc20vZ3IzcmY0dHRwSEtKcWxPa3VIcTh4cEtDaHZ3Mk9RN2tKZGxwTmxLYW9rWm4xbXYwQ2Z3bElxVURMWmorbURsU2ZkUEMxTlBSbjBrUXhlSEh4bUJORU9BK3pqUUxZdTcrbjVRNE16SDRrbS94VTFsWk8rVVpEZWhlRFFXWFRzZFJYUzRGTHZZQ0N4NGprNzlySTF0U1hXSUZoM3Zvb1VwalRWTDdPdzVCaVBRN1Fod0gwOERpVi9wQlE1Uyt3aExuOHNHWEl5bnZuaUpkUDk3bGFDRS9uczZlK0FPT3ZwaFd0bDNJV1hRMFF3SlZUYXBpZWpVVHpyUC9DVTZaMzdHZUJ0R2xsZ2dKQ1JoS2lkMlF4ODlRSi9lSTR1aWFscUFZOGNJWkNZQzNNZTdWY2R2MUduR0ZZM0EwdjUvd01xdlB5SEpjeVUySE4xcUZNM1VyMzlPWDl4eTNsUlVsVTVCbG8xc045a2xoRUF6bmJxNDhPM09MYm9sVkRBbllnUzZDSUV6dVkrbkhlTVhiVzZSTExqeTdBbUJxLzdrVWF3OTlEbTJrT1hQemhOMU9PRnFRcE03dUkya3Q3TUF2Yko2b0RDN0QwWVZEc2Q0R2pTRzlDanBvbTdEeFRBQ2pBQWprSmtJcENYalYwTlpuTnVQcFBjckFwZmFuKzhaQVVhQUVXQUVFa09BVnp3VHc0MVRNUUtNQUNPUXNRZ3c0OC9ZcG1QQ0dRRkdnQkZJREFGbS9Jbmh4cWtZQVVhQUVjaFlCSmp4WjJ6VE1lR01BQ1BBQ0NTR0FEUCt4SERqVkl3QUk4QUlaQ3dDelBnenR1bVljRWFBRVdBRUVrT0FHWDlpdUhFcVJvQVJZQVF5RmdGbS9CbmJkRXc0SThBSU1BS0pJY0NNUHpIY09CVWp3QWd3QWhtTEFEUCtqRzA2SnB3UllBUVlnY1FRWU1hZkdHNmNpaEZnQkJpQmpFV0FHWC9HTmgwVHpnZ3dBb3hBWWdndzQwOE1OMDdGQ0RBQ2pFREdJc0NNUDJPYmpnbG5CQmdCUmlBeEJKanhKNFlicDJJRUdBRkdJR01SWU1hZnNVM0hoRE1DakFBamtCZ0N6UGdUdzQxVE1RS01BQ09Rc1FpWU1YN1o3L1VjRTdVNjJ1VFAyTXAxTmVHTVZWY2p6dVV4QW95QUdRSWhIaTRiaFJzeGZoSFI1Mms3dGtFa2VPSXROek4vSStSMGZvTHBDNnpZTVFLTUFDT1FEZ2lFZUxpUGFJbGkvcElCZ1dJd0tCZ3didGJGNTEzemgrVVdpejNmSUE1N01RS01BQ1BBQ0tRcEFyTFAwN1R6SHorOThXRE44K3VKeEVhNk5Lb2Jxd25kMXVZREc5eHRKNzc2dU1kWkYvV1hyTmtGRnFzdDJ5UXVlek1DakFBandBaWtBUUkraitzYmQvT0JUM2Y5NDZkekQyMThaU2VSMUV4WGxDckNTT0lYNUR2b0VwSitIN29LNk1xaVM4d0V6T0pURUR0R2dCRmdCQmlCYmtSQXFIU0VaTjlPbDVEeWo5Tmx5UGh0RkdEa3ZPUjVNaFRnb24vQitNWHNnQmwvQ0JUK1l3UVlBVVlnelJBSXJNOFNUWUx4dDlBbGVMamc1Vkd1STBZdXd1eWhTd3dRTFBGSHdjY2VqQUFqd0Fpa0RRS0t4QytZdlNkMFJTM3NDbW83WXZ3aVhEZ1JSN2tDSHZ6RENEQUNqQUFqa0pZSUNFYXZYR2xKSUJQRkNEQUNqQUFqd0Fnd0Fvd0FJOEFJTUFLcFJ1RC9BZWJteGp0VHVzME9BQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgc3R5bGU9e2J1dHRvblN0eWxlfSBzcmM9eyBnb29nbGUgfSBhbHQ9XCJMb2cgaW4gd2l0aCBHb29nbGVcIiBvbkNsaWNrPXsgdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpIH0vPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Hb29nbGVsb2dpbi5qcyIsImV4cG9ydCBmdW5jdGlvbiBub0dldEFiaWxpdHkodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gJ2F0dGFjayc7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuICdkZWZlbmQnO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiAnaGVhbHRoJztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gJ3N3aWZ0Jztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gJ2x1Y2t5Jztcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXRHZW5kZXIodmFsdWUpIHtcblx0cmV0dXJuIHBhcnNlSW50KHZhbHVlKSA9PT0gMCA/IFwi4pmCXCIgOiBcIuKZgFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXROYXR1cmUodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gXCJjdXRlXCI7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFwic3Ryb25nXCI7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFwic21hcnRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJiZWF1dHlcIjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9HZXRUeXBlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiZG9nXCI7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFwiY2F0XCI7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFwiYmlyZFwiO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBcImZpc2hcIjtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gXCJvdGhlclwiO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvbm9Ub0luZm8uanMiLCJpbXBvcnQgeyBkb21haW5VcmwsIGNyZWF0ZUFkZFBldEFwaSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BRERfREVUQUlMID0gJ2FkZC9DSEFOR0VfQUREX0RFVEFJTCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0FERF9VUERBVEUgPSAnYWRkL0NIQU5HRV9BRERfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9UT19VU0VSID0gJ2FkZC9SRURJUkVDVF9UT19VU0VSJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFkZERldGFpbCh0eXBlLCB2YWx1ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9BRERfREVUQUlMLFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGUsIHZhbHVlXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWRkVXBkYXRlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUREX1VQREFURSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmZ1bmN0aW9uIHJlZGlyZWN0VG9Vc2VyKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFRElSRUNUX1RPX1VTRVJcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkUGV0KFxuXHRwZXROYW1lLCBwZXRHZW5kZXIsIHBldFR5cGUsIHBldE5hdHVyZSwgcGV0QXZhdGFyLCB1c2VySWQsIHVzZXJUb2tlblxuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBmaWxlRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcIm5hbWVcIiwgcGV0TmFtZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZ2VuZGVyXCIsIHBldEdlbmRlcik7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidHlwZVwiLCBwZXRUeXBlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJuYXR1cmVcIiwgcGV0TmF0dXJlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHBldEF2YXRhciwgXCIucG5nXCIpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInVzZXJcIiwgdXNlcklkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVBZGRQZXRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHRcdGJvZHk6IGZpbGVEYXRhXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmVjdFRvVXNlcigpKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hZGQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkRWRpdFBhZ2VBcGksIHVwZGF0ZUVkaXROYW1lQXBpLCB1cGRhdGVFZGl0UHJvZmlsZUFwaSxcblx0ZGVsZXRlRWRpdFJlbGF0aXZlQXBpLCByZWFkRWRpdFNlYXJjaEFwaSwgY3JlYXRlRWRpdFJlbGF0aXZlQXBpLCB1cGRhdGVFZGl0VHJhbnNmZXJBcGksXG5cdHVwZGF0ZUVkaXRSZWxhdGlvbkFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX0VESVRfUEFHRSA9ICdlZGl0L0JVSUxEX0VESVRfUEFHRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfVVBEQVRFID0gJ2VkaXQvQ0hBTkdFX0VESVRfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9OQU1FID0gJ2VkaXQvQ0hBTkdFX0VESVRfTkFNRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfUkVNT1ZFID0gJ2VkaXQvQ0hBTkdFX0VESVRfUkVNT1ZFJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRURJVF9SRUxBVElWRSA9ICdlZGl0L1JFTU9WRV9FRElUX1JFTEFUSVZFJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9BREQgPSAnZWRpdC9DSEFOR0VfRURJVF9BREQnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0VESVRfU0VBUkNIID0gJ2VkaXQvUkVTRVRfRURJVF9TRUFSQ0gnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX1NFQVJDSCA9ICdlZGl0L0NIQU5HRV9FRElUX1NFQVJDSCc7XG5leHBvcnQgY29uc3QgQUREX0VESVRfUkVMQVRJVkUgPSAnZWRpdC9BRERfRURJVF9SRUxBVElWRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfT1dORVJTSElQID0gJ2VkaXQvQ0hBTkdFX0VESVRfT1dORVJTSElQJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9UUkFOU0ZFUiA9ICdlZGl0L0NIQU5HRV9FRElUX1RSQU5TRkVSJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9FTkQgPSAnZWRpdC9DSEFOR0VfRURJVF9FTkQnO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1RPX0hPTUUgPSAnZWRpdC9SRURJUkVDVF9UT19IT01FJztcblxuZnVuY3Rpb24gYnVpbGRFZGl0UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfRURJVF9QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRFZGl0UGFnZShwZXRJZCwgdXNlcklkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEVkaXRQYWdlQXBpICsgJz9wZXQ9JyArIHBldElkICsgJyZ1c2VyPScgKyB1c2VySWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkRWRpdFBhZ2UoanNvbikpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWRpdFVwZGF0ZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfVVBEQVRFLFxuXHRcdGRhdGFcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VFZGl0TmFtZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfTkFNRSxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVkaXROYW1lKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgcGV0TmFtZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZUVkaXROYW1lQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdXNlclRva2VuLFxuXHRcdFx0XHRcInVzZXJcIjogdXNlcklkLFxuXHRcdFx0XHRcInBldFwiOiBwZXRJZCxcblx0XHRcdFx0XCJuYW1lXCI6IHBldE5hbWVcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VFZGl0TmFtZShwZXROYW1lKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWRpdFByb2ZpbGUodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBmaWxlKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIHBldElkICsgXCIucG5nXCIpO1xuXHRcdGZvcm1EYXRhLmFwcGVuZCgndXNlcicsIHVzZXJJZCk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHVzZXJUb2tlbik7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdwZXQnLCBwZXRJZCk7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZUVkaXRQcm9maWxlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmb3JtRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRWRpdFVwZGF0ZSgnQXZhdGFyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFZGl0UmVtb3ZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX1JFTU9WRVxuXHR9XHRcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWRpdFJlbGF0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFTU9WRV9FRElUX1JFTEFUSVZFXG5cdH1cdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRWRpdFJlbGF0aXZlKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGRlbGV0ZUVkaXRSZWxhdGl2ZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHVzZXJUb2tlbixcblx0XHRcdFx0XCJ1c2VyXCI6IHVzZXJJZCxcblx0XHRcdFx0XCJwZXRcIjogcGV0SWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZW1vdmVFZGl0UmVsYXRpdmUoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWRpdEFkZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9BRERcblx0fVx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEVkaXRTZWFyY2goKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVTRVRfRURJVF9TRUFSQ0hcblx0fVxufVx0XG5cbmZ1bmN0aW9uIGNoYW5nZUVkaXRTZWFyY2goc2VhcmNoSWQsIHNlYXJjaERhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9TRUFSQ0gsXG5cdFx0ZGF0YToge1xuXHRcdFx0c2VhcmNoSWQsIHNlYXJjaERhdGFcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRFZGl0U2VhcmNoKHNlYXJjaElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEVkaXRTZWFyY2hBcGkgKyAnP2lkPScgKyBzZWFyY2hJZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRWRpdFNlYXJjaChzZWFyY2hJZCwganNvbikpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRFZGl0UmVsYXRpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX0VESVRfUkVMQVRJVkVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdFJlbGF0aXZlKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgc2VhcmNoSWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVFZGl0UmVsYXRpdmVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB1c2VyVG9rZW4sXG5cdFx0XHRcdFwidXNlclwiOiB1c2VySWQsXG5cdFx0XHRcdFwicGV0XCI6IHBldElkLFxuXHRcdFx0XHRcImFkZFwiOiBzZWFyY2hJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkRWRpdFJlbGF0aXZlKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVkaXRPd25lcnNoaXAoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfT1dORVJTSElQXG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlRWRpdFRyYW5zZmVyKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX1RSQU5TRkVSXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVkaXRUcmFuc2Zlcih1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIHJlbGF0aXZlSWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVFZGl0VHJhbnNmZXJBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB1c2VyVG9rZW4sXG5cdFx0XHRcdFwidXNlclwiOiB1c2VySWQsXG5cdFx0XHRcdFwicGV0XCI6IHBldElkLFxuXHRcdFx0XHRcInJlbGF0aXZlXCI6IHJlbGF0aXZlSWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUVkaXRUcmFuc2ZlcigpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFZGl0RW5kKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX0VORFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvSG9tZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9UT19IT01FXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVkaXRSZWxhdGlvbih1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVFZGl0UmVsYXRpb25BcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB1c2VyVG9rZW4sXG5cdFx0XHRcdFwidXNlclwiOiB1c2VySWQsXG5cdFx0XHRcdFwicGV0XCI6IHBldElkLFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJlY3RUb0hvbWUoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2VkaXQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkRXhwbG9yZU1vbWVudHNBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9UWVBFID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfTkFUVVJFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VYUExPUkVfTU9NRU5UUyA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZUV4cGxvcmVNb21lbnRzKG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRFeHBsb3JlTW9tZW50cyh0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVBhcmFtcyA9ICc/bG9hZD0nICsgbG9hZCArICcmbmF0dXJlPScgKyBuYXR1cmUgKyAnJnR5cGU9JyArIHR5cGU7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRFeHBsb3JlTW9tZW50c0FwaSArIGFwaVBhcmFtcylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRXhwbG9yZU1vbWVudHMoanNvbiwgdHlwZSwgbmF0dXJlLCBsb2FkKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFeHBsb3JlVHlwZSh0eXBlLCBuYXR1cmUsIG5ld1R5cGUpIHtcblx0aWYgKG5ld1R5cGUgPT09IC0xKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX1RZUEUsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hdHVyZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9UWVBFLFxuXHRcdFx0ZGF0YTogbmV3VHlwZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKG5ld1R5cGUsIG5hdHVyZSwgMCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEV4cGxvcmVOYXR1cmUobmF0dXJlLCB0eXBlLCBuZXdOYXR1cmUpIHtcblx0aWYgKG5ld05hdHVyZSA9PT0gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTkFUVVJFLFxuXHRcdFx0ZGF0YTogbnVsbFxuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX05BVFVSRSxcblx0XHRcdGRhdGE6IG5ld05hdHVyZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKHR5cGUsIG5ld05hdHVyZSwgMCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9leHBsb3JlLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCByZWFkSG9tZU1vbWVudHNBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9IT01FX01PTUVOVFMgPSBcImhvbWUvQ0hBTkdFX0hPTUVfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBjaGFuZ2VIb21lTW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0hPTUVfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRIb21lTW9tZW50cyhsb2FkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEhvbWVNb21lbnRzQXBpICsgJz9sb2FkPScgKyBsb2FkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VIb21lTW9tZW50cyhqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRNb21lbnRQYWdlQXBpLCBkZWxldGVNb21lbnRQYWdlQXBpLCB1cGRhdGVNb21lbnRMaWtlQXBpLCBcblx0cmVhZE1vbWVudENvbW1lbnRzQXBpLCBjcmVhdGVNb21lbnRDb21tZW50QXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQlVJTERfTU9NRU5UX1BBR0UgPSBcIm1vbWVudC9CVUlMRF9NT01FTlRfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9NRU5UX0RFTEVURSA9IFwibW9tZW50L1NIT1dfTU9NRU5UX0RFTEVURVwiO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1VTRVJfUEFHRSA9IFwibW9tZW50L1JFRElSRUNUX1VTRVJfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9NT01FTlRfTElLRSA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfTElLRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9NT01FTlRfQ09NTUVOVFMgPSBcIm1vbWVudC9DSEFOR0VfTU9NRU5UX0NPTU1FTlRTXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01NRU5UX0VNUFRZID0gXCJtb21lbnQvU0hPV19DT01NRU5UX0VNUFRZXCI7XG5leHBvcnQgY29uc3QgQUREX01PTUVOVF9DT01NRU5UID0gXCJtb21lbnQvQUREX01PTUVOVF9DT01NRU5UXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkTW9tZW50UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfTU9NRU5UX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZE1vbWVudFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkTW9tZW50UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRNb21lbnRQYWdlKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb21lbnREZWxldGUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0hPV19NT01FTlRfREVMRVRFXG5cdH1cbn1cblxuZnVuY3Rpb24gcmVkaXJjdFVzZXJQYWdlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFRElSRUNUX1VTRVJfUEFHRVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNb21lbnRQYWdlKHVzZXJJZCwgdXNlclRva2VuLCBtb21lbnRJZCwgcGV0SWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVNb21lbnRQYWdlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJjdFVzZXJQYWdlKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9tZW50TGlrZShhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9NT01FTlRfTElLRSxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb24sIHVzZXJJZFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW9tZW50TGlrZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZU1vbWVudExpa2VBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J21vbWVudCc6IG1vbWVudElkLFxuXHRcdFx0XHQnYWN0aW9uJzogYWN0aW9uXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlTW9tZW50TGlrZShhY3Rpb24sIHVzZXJJZCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9tZW50Q29tbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9NT01FTlRfQ09NTUVOVFMsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZE1vbWVudENvbW1lbnRzKG1vbWVudElkLCBjb21tZW50TG9hZCwgY29tbWVudEFkZGVkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlQYXJhbXMgPSAnP2lkPScgKyBtb21lbnRJZCArICcmbG9hZD0nICsgY29tbWVudExvYWQgKyAnJmFkZD0nICsgY29tbWVudEFkZGVkO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkTW9tZW50Q29tbWVudHNBcGkgKyBhcGlQYXJhbXMpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZU1vbWVudENvbW1lbnRzKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb21tZW50RW1wdHkoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0hPV19DT01NRU5UX0VNUFRZXG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZE1vbWVudENvbW1lbnQodXNlcklkLCBjb250ZW50KSB7XG5cdGNvbnN0IGRhdGEgPSBbXG5cdFx0Y29udGVudCxcblx0XHRkb21haW5VcmwgKyAnL2ltZy91c2VyLycgKyB1c2VySWQgKyAnLmpwZycsXG5cdFx0Jy91c2VyLycgKyB1c2VySWQsXG5cdFx0bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XTtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfTU9NRU5UX0NPTU1FTlQsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9tZW50Q29tbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIGNvbnRlbnQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVNb21lbnRDb21tZW50QXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2NvbnRlbnQnOiBjb250ZW50XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkTW9tZW50Q29tbWVudCh1c2VySWQsIGNvbnRlbnQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvbW9tZW50LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFBldFBhZ2VBcGksIHVwZGF0ZVBldFdhdGNoQXBpLCBjcmVhdGVQZXRNb21lbnRBcGksXG5cdHJlYWRQZXRNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQlVJTERfUEVUX1BBR0UgPSBcInBldC9CVUlMRF9QRVRfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNDT1VOVF9SRVFVSVJFRCA9IFwicGV0L1NIT1dfQUNDT1VOVF9SRVFVSVJFRFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QRVRfV0FUQ0ggPSBcInBldC9DSEFOR0VfUEVUX1dBVENIXCI7XG5leHBvcnQgY29uc3QgQUREX1BFVF9NT01FTlQgPSBcInBldC9BRERfUEVUX01PTUVOVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QRVRfTU9NRU5UUyA9IFwicGV0L0NIQU5HRV9QRVRfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBidWlsZFBldFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1BFVF9QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQZXRQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFBldFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRQZXRQYWdlKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBY2NvdW50UmVxdWlyZWQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0hPV19BQ0NPVU5UX1JFUVVJUkVEXG5cdH07XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBldFdhdGNoKGFjdGlvbiwgdXNlcklkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVF9XQVRDSCxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb24sIHVzZXJJZFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBldFdhdGNoKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlUGV0V2F0Y2hBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J3BldCc6IHBldElkLFxuXHRcdFx0XHQnYWN0aW9uJzogYWN0aW9uXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZFBldE1vbWVudChpbmZvLCBwZXRJZCwgbWVzc2FnZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEFERF9QRVRfTU9NRU5ULFxuXHRcdGRhdGE6IHtcblx0XHRcdGluZm8sIHBldElkLCBtZXNzYWdlXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGV0TW9tZW50KHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgaW1hZ2UsIG1lc3NhZ2UpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGxldCB0eXBlID0gaW1hZ2UudHlwZTtcblx0XHR0eXBlID0gdHlwZS5zcGxpdChcIi9cIilbMV07XG5cdFx0dHlwZSA9IFwiLlwiICsgdHlwZTtcblx0XHRjb25zdCBmaWxlRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UsIHR5cGUpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwicGV0XCIsIHBldElkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIHVzZXJJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdXNlclRva2VuKTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlUGV0TW9tZW50QXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmaWxlRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkUGV0TW9tZW50KHJlc3VsdCwgcGV0SWQsIG1lc3NhZ2UpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBldE1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQZXRNb21lbnRzKHBldElkLCBsb2FkLCBhZGQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IHBhcmFtcyA9ICc/YWRkPScgKyBhZGQgKyAnJmxvYWQ9JyArIGxvYWQgKyAnJnBldD0nICsgcGV0SWQ7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRNb21lbnRzQXBpICsgcGFyYW1zKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VQZXRNb21lbnRzKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9wZXQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkUmVxdWVzdFBhZ2VBcGksIGRlbGV0ZVJlcXVlc3RVc2VyQXBpLCBjcmVhdGVSZXF1ZXN0VXNlckFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1JFUVVFU1RfUEFHRSA9IFwicmVxdWVzdC9CVUlMRF9SRVFVRVNUX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUkVRVUVTVF9VU0VSID0gXCJyZXF1ZXN0L0NIQU5HRV9SRVFVRVNUX1VTRVJcIjtcblxuZnVuY3Rpb24gYnVpbGRSZXF1ZXN0UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfUkVRVUVTVF9QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZXF1ZXN0UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRSZXF1ZXN0UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkUmVxdWVzdFBhZ2UoanNvbikpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUmVxdWVzdFVzZXIoaW5kZXgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUkVRVUVTVF9VU0VSLFxuXHRcdGRhdGE6IGluZGV4XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXF1ZXN0VXNlcihwZXRJZCwgaW5kZXgsIHVzZXJJZCwgdXNlclRva2VuLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVVybCA9IGFjdGlvbiA9PT0gMCA/IGRlbGV0ZVJlcXVlc3RVc2VyQXBpIDogY3JlYXRlUmVxdWVzdFVzZXJBcGk7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VSZXF1ZXN0VXNlcihpbmRleCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9yZXF1ZXN0LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFVzZXJQYWdlQXBpLCByZWFkVXNlck1vbWVudHNBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9VU0VSX1BBR0UgPSBcInVzZXIvQlVJTERfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1VTRVJfTU9NRU5UUyA9IFwidXNlci9DSEFOR0VfVVNFUl9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkVXNlclBhZ2UoaW5mbywgdXNlcklkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfVVNFUl9QQUdFLFxuXHRcdGRhdGE6IHtcblx0XHRcdGluZm8sIHVzZXJJZFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVc2VyUGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRVc2VyUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFVzZXJQYWdlKGpzb24sIHBhcnNlSW50KGlkKSkpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VVc2VyTW9tZW50cyhkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1VTRVJfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVc2VyTW9tZW50cyhiZWxvbmcsIGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkVXNlck1vbWVudHNBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J2JlbG9uZyc6IGJlbG9uZyxcblx0XHRcdFx0J2xvYWQnOiBsb2FkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVVzZXJNb21lbnRzKGpzb24pKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlci5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRXYXRjaFBhZ2VBcGksIGRlbGV0ZVdhdGNoUGV0QXBpLCBjcmVhdGVXYXRjaFBldEFwaSxcblx0cmVhZFdhdGNoTW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1dBVENIX1BBR0UgPSBcIndhdGNoL0JVSUxEX1dBVENIX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfV0FUQ0hfUEVUID0gXCJ3YXRjaC9DSEFOR0VfV0FUQ0hfUEVUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1dBVENIX01PTUVOVFMgPSBcIndhdGNoL0NIQU5HRV9XQVRDSF9NT01FTlRTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVFNfTE9BRCA9IFwid2F0Y2gvQ0hBTkdFX1BFVFNfTE9BRFwiO1xuXG5mdW5jdGlvbiBidWlsZFdhdGNoUGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfV0FUQ0hfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkV2F0Y2hQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFdhdGNoUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFdhdGNoUGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoUGV0KGFjdGlvbiwgcGV0SWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfV0FUQ0hfUEVULFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgcGV0SWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaFBldCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpVXJsID0gYWN0aW9uID09PSAwID8gZGVsZXRlV2F0Y2hQZXRBcGkgOiBjcmVhdGVXYXRjaFBldEFwaTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVdhdGNoUGV0KGFjdGlvbiwgcGV0SWQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoTW9tZW50cyhtb21lbnRzLCBsb2FkLCBsb2FkTGlzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9XQVRDSF9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHMsIGxvYWQsIGxvYWRMaXN0XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFdhdGNoTW9tZW50cyhsaXN0cywgbG9hZCwgbG9hZExpc3QsIHVzZXJJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRXYXRjaE1vbWVudHNBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J2xpc3QnOiBsaXN0cyxcblx0XHRcdFx0J2xvYWQnOiBsb2FkLFxuXHRcdFx0XHQncm91dGUnOiBsb2FkTGlzdCxcblx0XHRcdFx0J3VzZXInOiB1c2VySWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlV2F0Y2hNb21lbnRzKGpzb24sIGxvYWQsIGxvYWRMaXN0KSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGV0c0xvYWQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVFNfTE9BRFxuXHR9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3dhdGNoLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Y29tbWVudC5jb21tZW50X2NvbnRlbnQsXG5cdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCArIFwiLmpwZ1wiLFxuXHRcdFx0XCIvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCxcblx0XHRcdG5ldyBEYXRlKGNvbW1lbnQuY29tbWVudF90aW1lKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9yZWR1Y2Vycy9hY2NvdW50JztcbmltcG9ydCBob21lIGZyb20gJy4vcmVkdWNlcnMvaG9tZSc7XG5pbXBvcnQgcGV0IGZyb20gJy4vcmVkdWNlcnMvcGV0JztcbmltcG9ydCB1c2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJy4vcmVkdWNlcnMvbW9tZW50JztcbmltcG9ydCBleHBsb3JlIGZyb20gJy4vcmVkdWNlcnMvZXhwbG9yZSc7XG5pbXBvcnQgd2F0Y2ggZnJvbSAnLi9yZWR1Y2Vycy93YXRjaCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlZHVjZXJzL3JlcXVlc3QnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9yZWR1Y2Vycy9zZXR0aW5nJztcbmltcG9ydCBhZGQgZnJvbSAnLi9yZWR1Y2Vycy9hZGQnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9yZWR1Y2Vycy9lZGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcblx0YWNjb3VudCxcblx0aG9tZSxcblx0bW9tZW50LFxuXHRwZXQsXG5cdHVzZXIsXG5cdGV4cGxvcmUsXG5cdHdhdGNoLFxuXHRyZXF1ZXN0LFxuXHRzZXR0aW5nLFxuXHRhZGQsXG5cdGVkaXRcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfQUNDT1VOVF9EQVRBLCBDTEVBUl9BQ0NPVU5UX0RBVEEsIFJFRElSRUNUX1RPX1NJR05VUCwgQ0xFQVJfQUNDT1VOVF9TSUdOVVBcbn0gZnJvbSAnLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IENIQU5HRV9BQ0NPVU5UX05BTUUgfSBmcm9tICcuLi9hY3Rpb25zL3NldHRpbmcnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdGlkOiBudWxsLFxuXHRuYW1lOiBudWxsLFxuXHR0b2tlbjogbnVsbCxcblx0cmVkaXJlY3RTaWdudXA6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0FDQ09VTlRfREFUQTpcblx0XHRcdGlmIChhY3Rpb24uZGF0YVswXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGlkOiBwYXJzZUludChhY3Rpb24uZGF0YVswXSksXG5cdFx0XHRcdFx0bmFtZTogYWN0aW9uLmRhdGFbMV0sXG5cdFx0XHRcdFx0dG9rZW46IGFjdGlvbi5kYXRhWzJdXG5cdFx0XHRcdH07XHRcblx0XHRcdH1cblx0XHRjYXNlIENMRUFSX0FDQ09VTlRfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpZDogbnVsbCxcblx0XHRcdFx0bmFtZTogbnVsbCxcblx0XHRcdFx0dG9rZW46IG51bGxcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfQUNDT1VOVF9OQU1FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVESVJFQ1RfVE9fU0lHTlVQOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0U2lnbnVwOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0xFQVJfQUNDT1VOVF9TSUdOVVA6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RTaWdudXA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfQUREX0RFVEFJTCwgQ0hBTkdFX0FERF9VUERBVEUsIFJFRElSRUNUX1RPX1VTRVJcbn0gZnJvbSAnLi4vYWN0aW9ucy9hZGQnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vaW5kaWNhdGUgdXBkYXRlIHJlc3VsdFxuXHR1cGRhdGVSZXN1bHQ6IG51bGwsXG5cdC8vc3RvcmUgYXZhdGFyIGltYWdlXG5cdGNyZWF0ZUF2YXRhcjogbnVsbCxcblx0Ly9zdG9yZSBwZXQgZ2VuZGVyXG5cdGNyZWF0ZUdlbmRlcjogbnVsbCxcblx0Ly9zdG9yZSBjcmVhdGUgdHlwZVxuXHRjcmVhdGVUeXBlOiBudWxsLFxuXHQvL3N0b3JlIGNyZWF0ZSBuYXR1cmVcblx0Y3JlYXRlTmF0dXJlOiBudWxsLFxuXHRyZWRpcmVjdFVzZXI6IGZhbHNlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfQUREX0RFVEFJTDpcblx0XHRcdGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuXHRcdFx0bmV3U3RhdGVbJ2NyZWF0ZScgKyBhY3Rpb24uZGF0YS50eXBlXSA9IGFjdGlvbi5kYXRhLnZhbHVlO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXHRcdGNhc2UgQ0hBTkdFX0FERF9VUERBVEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1RPX1VTRVI6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RVc2VyOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2FkZC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9FRElUX1BBR0UsIENIQU5HRV9FRElUX1VQREFURSwgQ0hBTkdFX0VESVRfTkFNRSwgQ0hBTkdFX0VESVRfUkVNT1ZFLFxuXHRSRU1PVkVfRURJVF9SRUxBVElWRSwgQ0hBTkdFX0VESVRfQURELCBSRVNFVF9FRElUX1NFQVJDSCwgQ0hBTkdFX0VESVRfU0VBUkNILFxuXHRBRERfRURJVF9SRUxBVElWRSwgQ0hBTkdFX0VESVRfT1dORVJTSElQLCBDSEFOR0VfRURJVF9UUkFOU0ZFUiwgQ0hBTkdFX0VESVRfRU5ELFxuXHRSRURJUkVDVF9UT19IT01FXG59IGZyb20gJy4uL2FjdGlvbnMvZWRpdCc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSBwZXQgZGF0YVxuXHRwZXREYXRhOiB7fSxcblx0Ly9zdG9yZSBwZXQgbmFtZVxuXHRwZXROYW1lOiBcIlwiLFxuXHQvL2luZGljYXRlIHVwZGF0ZSBpbmZvXG5cdHVwZGF0ZVJlc3VsdDogbnVsbCxcblx0Ly9zaG93IGVuZCByZWxhdGlvbiBib3hcblx0c2hvd0VuZDogZmFsc2UsXG5cdC8vc2hvdyBhZGQgcmVsYXRpdmUgYm94XG5cdHNob3dBZGQ6IGZhbHNlLFxuXHQvL2NvbnRlbnQgaW4gc2VhcmNoIGJhclxuXHRzZWFyY2g6IFwiXCIsXG5cdC8vc3RvcmUgc2VhcmNoIGRhdGFcblx0c2VhcmNoRGF0YTogbnVsbCxcblx0Ly9zaG93IHJlbW92ZSByZWxhdGl2ZSBib3hcblx0c2hvd1JlbW92ZTogZmFsc2UsXG5cdC8vc2hvdyB0cmFuc2ZlciBib3hcblx0c2hvd1RyYW5zZmVyOiBmYWxzZSxcblx0ZGF0YUxvYWRlZDogZmFsc2UsXG5cdHJlZGlyZWN0SG9tZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9FRElUX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cGV0RGF0YTogYWN0aW9uLmRhdGEsXG5cdFx0XHRcdHBldE5hbWU6IGFjdGlvbi5kYXRhLnBldF9uYW1lLFxuXHRcdFx0XHRkYXRhTG9hZGVkOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfVVBEQVRFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogYWN0aW9uLmRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9OQU1FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldE5hbWU6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdOYW1lIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9SRU1PVkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1JlbW92ZTogIXN0YXRlLnNob3dSZW1vdmVcblx0XHRcdH07XG5cdFx0Y2FzZSBSRU1PVkVfRURJVF9SRUxBVElWRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93UmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgcmVsYXRpdmUhJyxcblx0XHRcdFx0cGV0RGF0YTogeyAuLi5zdGF0ZS5wZXREYXRhLCByZWxhdGl2ZV9pZDogbnVsbCB9XG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfQUREOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dBZGQ6ICFzdGF0ZS5zaG93QWRkLFxuXHRcdFx0XHRzZWFyY2g6ICcnLFxuXHRcdFx0XHRzZWFyY2hEYXRhOiBudWxsXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVTRVRfRURJVF9TRUFSQ0g6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VhcmNoOiAnJyxcblx0XHRcdFx0c2VhcmNoRGF0YTogbnVsbFxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX1NFQVJDSDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZWFyY2g6IGFjdGlvbi5kYXRhLnNlYXJjaElkLFxuXHRcdFx0XHRzZWFyY2hEYXRhOiBhY3Rpb24uZGF0YS5zZWFyY2hEYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX0VESVRfUkVMQVRJVkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0FkZDogZmFsc2UsXG5cdFx0XHRcdHNlYXJjaDogJycsXG5cdFx0XHRcdHNlYXJjaERhdGE6IG51bGwsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ1JlcXVlc3Qgc2VudCBzdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX09XTkVSU0hJUDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93VHJhbnNmZXI6ICFzdGF0ZS5zaG93VHJhbnNmZXJcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9UUkFOU0ZFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93VHJhbnNmZXI6IGZhbHNlLFxuXHRcdFx0XHRwZXREYXRhOiB7IFxuXHRcdFx0XHRcdC4uLnN0YXRlLnBldERhdGEsIFxuXHRcdFx0XHRcdG93bmVyX2lkOiBzdGF0ZS5wZXREYXRhLnJlbGF0aXZlX2lkLFxuXHRcdFx0XHRcdHJlbGF0aXZlX2lkOiBzdGF0ZS5wZXREYXRhLm93bmVyX2lkXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ1N1Y2Nlc3NmdWxseSB0cmFuc2ZlcnJlZCBvd25lcnNoaXAhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX0VORDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93RW5kOiAhc3RhdGUuc2hvd0VuZFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1RPX0hPTUU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RIb21lOiB0cnVlXG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9lZGl0LmpzIiwiaW1wb3J0IHsgXG5cdENIQU5HRV9FWFBMT1JFX1RZUEUsIENIQU5HRV9FWFBMT1JFX05BVFVSRSwgQ0hBTkdFX0VYUExPUkVfTU9NRU5UU1xufSBmcm9tICcuLi9hY3Rpb25zL2V4cGxvcmUnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0dHlwZTogbnVsbCxcblx0bmF0dXJlOiBudWxsLFxuXHRtb21lbnRzRGF0YTogW10sXG5cdGxvYWQ6IDAsXG5cdGxvY2tlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9UWVBFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHR5cGU6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogW10sXG5cdFx0XHRcdGxvYWQ6IDBcblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9FWFBMT1JFX05BVFVSRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRuYXR1cmU6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogW10sXG5cdFx0XHRcdGxvYWQ6IDBcblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9FWFBMT1JFX01PTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdNb21lbnRzID0gYWN0aW9uLmRhdGEubG9hZCA9PT0gMCA/IFxuXHRcdFx0XHRidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50c0RhdGEpIDpcblx0XHRcdFx0c3RhdGUubW9tZW50c0RhdGEuY29uY2F0KGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5tb21lbnRzRGF0YSkpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudHNEYXRhOiBuZXdNb21lbnRzLFxuXHRcdFx0XHR0eXBlOiBhY3Rpb24uZGF0YS50eXBlLFxuXHRcdFx0XHRuYXR1cmU6IGFjdGlvbi5kYXRhLm5hdHVyZSxcblx0XHRcdFx0bG9hZDogYWN0aW9uLmRhdGEubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubW9tZW50c0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXhwbG9yZS5qcyIsImltcG9ydCB7IENIQU5HRV9IT01FX01PTUVOVFMgfSBmcm9tICcuLi9hY3Rpb25zL2hvbWUnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSBtb21lbnRzIGRhdGFcblx0ZGF0YTogW10sXG5cdC8vcmVjb3JkIGxvYWQgbnVtYmVyXG5cdGxvYWQ6IDAsXG5cdC8vYWxsb3cgbG9hZCBvciBub3Rcblx0bG9ja2VyOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9IT01FX01PTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdEYXRhID0gYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvY2tlcjogbmV3RGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvaG9tZS5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9NT01FTlRfUEFHRSwgU0hPV19NT01FTlRfREVMRVRFLCBSRURJUkVDVF9VU0VSX1BBR0UsIENIQU5HRV9NT01FTlRfTElLRSxcblx0Q0hBTkdFX01PTUVOVF9DT01NRU5UUywgU0hPV19DT01NRU5UX0VNUFRZLCBBRERfTU9NRU5UX0NPTU1FTlRcbn0gZnJvbSAnLi4vYWN0aW9ucy9tb21lbnQnO1xuaW1wb3J0IGJ1aWxkQ29tbWVudHMgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZENvbW1lbnRzJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRtb21lbnREYXRhOiBbXSxcblx0ZmFtaWx5RGF0YTogW10sXG5cdGxpa2VEYXRhOiBbXSxcblx0Y29tbWVudERhdGE6IFtdLFxuXHRzaG93Q29uZmlybTogZmFsc2UsXG5cdGNvbW1lbnRMb2NrZXI6IGZhbHNlLFxuXHRjb21tZW50QWRkZWQ6IDAsXG5cdGNvbW1lbnRMb2FkOiAwLFxuXHRjb21tZW50RXJyb3I6IG51bGwsXG5cdHJlZGlyZWN0VXNlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9NT01FTlRfUEFHRTpcblx0XHRcdGNvbnN0IGxpa2VEYXRhID0gYWN0aW9uLmRhdGFbMl0ubWFwKGZ1bmN0aW9uKGxpa2UpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KGxpa2UudXNlcl9pZCk7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGNvbW1lbnREYXRhID0gYnVpbGRDb21tZW50cyhhY3Rpb24uZGF0YVszXSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9tZW50RGF0YTogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGZhbWlseURhdGE6IFtcblx0XHRcdFx0XHRwYXJzZUludChhY3Rpb24uZGF0YVsxXS5vd25lcl9pZCkgfHwgbnVsbCwgXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ucmVsYXRpdmVfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaWtlRGF0YSxcblx0XHRcdFx0Y29tbWVudERhdGEsXG5cdFx0XHRcdGNvbW1lbnRMb2NrZXI6IGFjdGlvbi5kYXRhWzNdLmxlbmd0aCAhPT0gNVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfTU9NRU5UX0RFTEVURTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93Q29uZmlybTogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1VTRVJfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZWRpcmVjdFVzZXI6IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfTU9NRU5UX0xJS0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bGlrZURhdGE6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMSA/XG5cdFx0XHRcdFx0Wy4uLnN0YXRlLmxpa2VEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS5saWtlRGF0YS5maWx0ZXIoZnVuY3Rpb24obGlrZSkgeyByZXR1cm4gbGlrZSAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9DT01NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0NvbW1lbnRzID0gYnVpbGRDb21tZW50cyhhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFsuLi5zdGF0ZS5jb21tZW50RGF0YSwgLi4ubmV3Q29tbWVudHNdLFxuXHRcdFx0XHRjb21tZW50TG9hZDogc3RhdGUuY29tbWVudExvYWQgKyAxLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YS5sZW5ndGggIT09IDEwXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19DT01NRU5UX0VNUFRZOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnRFcnJvcjogXCJDb21tZW50IGNhbuKAsnQgYmUgZW1wdHlcIlxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9NT01FTlRfQ09NTUVOVDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RGF0YTogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5jb21tZW50RGF0YV0sXG5cdFx0XHRcdGNvbW1lbnRFcnJvcjogbnVsbCxcblx0XHRcdFx0Y29tbWVudEFkZGVkOiBzdGF0ZS5jb21tZW50QWRkZWQgKyAxXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbW9tZW50LmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1BFVF9QQUdFLCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQsIENIQU5HRV9QRVRfV0FUQ0gsIEFERF9QRVRfTU9NRU5ULCBDSEFOR0VfUEVUX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9wZXQnO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHsgbm9HZXRBYmlsaXR5IH0gZnJvbSAnLi4vLi4vaGVscGVycy9ub1RvSW5mbyc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL2luZGljYXRlIHBldCBiZWxvbmcgdG8gY3VycmVudCB1c2VyIG9yIG5vdFxuXHRwZXRPd25lcjogZmFsc2UsXG5cdC8vc3RvcmUgZGF0YSBmb3Igb25lIHBldFxuXHRwZXREYXRhOiB7fSxcblx0Ly9zdG9yZSBkYXRhIGZvciBwZXQncyBmYW1pbHlcblx0ZmFtaWx5RGF0YTogW10sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0cyBmcmllbmRcblx0ZnJpZW5kRGF0YTogW10sXG5cdC8vc3RvcmUgZGF0YSBmb3IgaW1hZ2UgZ2FsbGVyeVxuXHRnYWxsZXJ5RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9pbmRpY2F0ZSBhZGQgaG93IG1hbnkgaW1hZ2VzXG5cdGFkZDogMCxcblx0Ly9zdG9yZSBhbGwgd2F0Y2hlciBvZiBjdXJyZW50IHBldFxuXHR3YXRjaERhdGE6IFtdLFxuXHQvL2luZGljYXRlIG5vdGljZSB1c2VyIGxvZ2luIG9yIG5vdFxuXHRsb2dpblJlcXVpcmVkOiBmYWxzZSxcblx0Ly90cmlnZ2VyIHJlc2V0IGZ1bmN0aW9uIGZvciBwb3N0IGltYWdlXG5cdHJlc2V0OiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1BFVF9QQUdFOlxuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10gPSBwYXJzZUludChhY3Rpb24uZGF0YVswXVsnb3duZXJfaWQnXSk7XG5cdFx0XHRhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9IGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddID09PSBudWxsID8gXG5cdFx0XHRcdG51bGwgOiBwYXJzZUludChhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSk7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cGV0RGF0YTogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGZhbWlseURhdGE6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRmcmllbmREYXRhOiBhY3Rpb24uZGF0YVsyXSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhWzNdKSxcblx0XHRcdFx0d2F0Y2hEYXRhOiBhY3Rpb24uZGF0YVs0XS5tYXAoZnVuY3Rpb24od2F0Y2gpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQod2F0Y2gudXNlcl9pZCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19BQ0NPVU5UX1JFUVVJUkVEOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvZ2luUmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfV0FUQ0g6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0d2F0Y2hEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS53YXRjaERhdGEsIGFjdGlvbi5kYXRhLnVzZXJJZF0gOlxuXHRcdFx0XHRcdHN0YXRlLndhdGNoRGF0YS5maWx0ZXIoZnVuY3Rpb24od2F0Y2gpIHsgcmV0dXJuIHdhdGNoICE9PSBhY3Rpb24uZGF0YS51c2VySWQgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfUEVUX01PTUVOVDpcblx0XHRcdGNvbnN0IG5ld01vbWVudCA9IFtcblx0XHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3BldC9cIiArIGFjdGlvbi5kYXRhLnBldElkICsgXCIvbW9tZW50L1wiICsgYWN0aW9uLmRhdGEuaW5mb1sxXSxcblx0XHRcdFx0YWN0aW9uLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XCIvbW9tZW50L1wiICsgYWN0aW9uLmRhdGEuaW5mb1swXVxuXHRcdFx0XTtcblx0XHRcdGlmIChhY3Rpb24uZGF0YS5pbmZvLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0XHRjb25zdCBhYmlsaXR5ID0gbm9HZXRBYmlsaXR5KGFjdGlvbi5kYXRhLmluZm9bMl0pO1xuXHRcdFx0XHRjb25zdCBuZXdBYmlsaXR5ID0gey4uLnN0YXRlLnBldERhdGF9O1xuXHRcdFx0XHRuZXdBYmlsaXR5W2FiaWxpdHldID0gcGFyc2VJbnQoc3RhdGUucGV0RGF0YVthYmlsaXR5XSkgKyAxO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGdhbGxlcnlEYXRhOiBbbmV3TW9tZW50LCAuLi5zdGF0ZS5nYWxsZXJ5RGF0YV0sXG5cdFx0XHRcdFx0cmVzZXQ6IHN0YXRlLnJlc2V0ICsgMSxcblx0XHRcdFx0XHRhZGQ6IHN0YXRlLmFkZCArIDEsXG5cdFx0XHRcdFx0cGV0RGF0YTogbmV3QWJpbGl0eVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGdhbGxlcnlEYXRhOiBbbmV3TW9tZW50LCAuLi5zdGF0ZS5nYWxsZXJ5RGF0YV0sXG5cdFx0XHRcdFx0cmVzZXQ6IHN0YXRlLnJlc2V0ICsgMSxcblx0XHRcdFx0XHRhZGQ6IHN0YXRlLmFkZCArIDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX1BFVF9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IHN0YXRlLmdhbGxlcnlEYXRhLmNvbmNhdChuZXdEYXRhKSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogbmV3RGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcGV0LmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1JFUVVFU1RfUEFHRSwgQ0hBTkdFX1JFUVVFU1RfVVNFUlxufSBmcm9tICcuLi9hY3Rpb25zL3JlcXVlc3QnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcmVxdWVzdCBsaXN0XG5cdHJlcXVlc3REYXRhOiBbXSxcblx0Ly9zdG9yZSBhY2NlcHQgbGlzdFxuXHRhY2NlcHRMaXN0OiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1JFUVVFU1RfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZXF1ZXN0RGF0YTogYWN0aW9uLmRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfUkVRVUVTVF9VU0VSOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlcXVlc3REYXRhOiBzdGF0ZS5yZXF1ZXN0RGF0YS5maWx0ZXIoKHJlcXVlc3QsIGluZGV4KSA9PiB7IFxuXHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ICE9PSBhY3Rpb24uZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZXF1ZXN0LmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1NFVFRJTkdfUEFHRSwgQ0hBTkdFX1NFVFRJTkdfQUJPVVQsIENIQU5HRV9TRVRUSU5HX05BTUUsIFxuXHRDSEFOR0VfU0VUVElOR19QUk9GSUxFXG59IGZyb20gJy4uL2FjdGlvbnMvc2V0dGluZyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSB1c2VyIGRhdGFcblx0dXNlckRhdGE6IFtdLFxuXHQvL2luZGljYXRlIHVwZGF0ZSByZXN1bHRcblx0dXBkYXRlUmVzdWx0OiBudWxsLFxuXHQvL3N0b3JlIHVzZXIgYWJvdXQgaW5mb1xuXHR1c2VyQWJvdXQ6IFwiXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9TRVRUSU5HX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckRhdGE6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHR1c2VyQWJvdXQ6IGFjdGlvbi5kYXRhLnVzZXJfYWJvdXRcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfU0VUVElOR19BQk9VVDpcblx0XHRcdGlmICghYWN0aW9uLmRhdGEpIHtcblx0XHRcdFx0YWN0aW9uLmRhdGEgPSAnJztcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyQWJvdXQ6IGFjdGlvbi5kYXRhLCBcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTW9vZCB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdOYW1lIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfU0VUVElOR19QUk9GSUxFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ1Byb2ZpbGUgdXBkYXRlZCBTdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0ZGVmYXVsdDpcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dGluZy5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9VU0VSX1BBR0UsIENIQU5HRV9VU0VSX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgdXNlciBkYXRhXG5cdHVzZXJEYXRhOiBbXSxcblx0Ly9zdG9yZSByZWxhdGl2ZSBkYXRhXG5cdHJlbGF0aXZlRGF0YTogW10sXG5cdC8vc3RvcmUgcGV0cyBsaXN0XG5cdHBldHNEYXRhOiBbXSxcblx0Ly9zdG9yZSBtb21lbnQgaW1hZ2VzXG5cdG1vbWVudERhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgbW9tZW50IGhvdyBtYW55IHRpbWVzXG5cdGxvYWQ6IDEsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIGltYWdlcyBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9zdG9yZSBwZXQgbGlzdFxuXHRiZWxvbmdEYXRhOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfVVNFUl9QQUdFOlxuXHRcdFx0bGV0IHJlbGF0aXZlRGF0YSA9IFtdO1xuXHRcdFx0YWN0aW9uLmRhdGEuaW5mb1sxXS5mb3JFYWNoKGZ1bmN0aW9uKHBldCkge1xuXHRcdFx0XHRpZiAocGV0LnJlbGF0aXZlX2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVEYXRhLnB1c2goXG5cdFx0XHRcdFx0XHRwYXJzZUludChwZXQucmVsYXRpdmVfaWQpID09PSBhY3Rpb24uZGF0YS51c2VySWQgPyBcblx0XHRcdFx0XHRcdFx0cGFyc2VJbnQocGV0Lm93bmVyX2lkKSA6IHBhcnNlSW50KHBldC5yZWxhdGl2ZV9pZClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XHRcblx0XHRcdH0pO1xuXHRcdFx0YWN0aW9uLmRhdGEuaW5mb1swXS51c2VyX2lkID0gcGFyc2VJbnQoYWN0aW9uLmRhdGEuaW5mb1swXS51c2VyX2lkKTtcbiAgICAgIHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyRGF0YTogYWN0aW9uLmRhdGEuaW5mb1swXSxcblx0XHRcdFx0cGV0c0RhdGE6IGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGJlbG9uZ0RhdGE6IGFjdGlvbi5kYXRhLmluZm9bM10sXG5cdFx0XHRcdG1vbWVudERhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5pbmZvWzJdKSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5pbmZvWzJdLmxlbmd0aCAhPT0gMjAsXG5cdFx0XHRcdHJlbGF0aXZlRGF0YTogWy4uLm5ldyBTZXQocmVsYXRpdmVEYXRhKV1cblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfVVNFUl9NT01FTlRTOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IHN0YXRlLm1vbWVudERhdGEuY29uY2F0KGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSkpLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1dBVENIX1BBR0UsIENIQU5HRV9XQVRDSF9QRVQsIENIQU5HRV9XQVRDSF9NT01FTlRTLCBDSEFOR0VfUEVUU19MT0FEXG59IGZyb20gJy4uL2FjdGlvbnMvd2F0Y2gnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSBwZXRzIGRhdGEgb24gd2F0Y2ggbGlzdFxuXHRwZXRzTGlzdDogW10sXG5cdC8vc3RvcmUgcGV0IGhhcyBiZWVuIHVud2F0Y2hlZFxuXHR1bndhdGNoOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIHBldCBsaXN0IGZvciBob3cgbWFueSB0aW1lc1xuXHRsb2FkUGV0czogMSxcblx0Ly9zdG9yZSBwZXRzIGlkIG9uIHdhdGNoIGxpc3Rcblx0d2F0Y2hMaXN0OiBudWxsLFxuXHQvL3N0b3JlIGxpc3QgbW9tZW50cyB0byBzaG93XG5cdGdhbGxlcnlEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSB3aGljaCBsaXN0IHRvIHNob3dcblx0bG9hZExpc3Q6IFwid2F0Y2hcIixcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgaW1hZ2VzIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlLFxuXHQvL2luZGljYXRlIGNsaWNrIGxvYWQgZm9yIGhvdyBtYW55IHRpbWVzXG5cdGxvYWQ6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9XQVRDSF9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldHNMaXN0OiBhY3Rpb24uZGF0YVsyXSxcblx0XHRcdFx0d2F0Y2hMaXN0OiBhY3Rpb24uZGF0YVswXSxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YVsxXSksXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGFbMV0ubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9XQVRDSF9QRVQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dW53YXRjaDogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAwID8gXG5cdFx0XHRcdFx0Wy4uLnN0YXRlLnVud2F0Y2gsIGFjdGlvbi5kYXRhLnBldElkXSA6IFxuXHRcdFx0XHRcdHN0YXRlLnVud2F0Y2guZmlsdGVyKGlkID0+IHsgaWQgIT09IGFjdGlvbi5kYXRhLnBldElkOyB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9XQVRDSF9NT01FTlRTOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBhY3Rpb24uZGF0YS5sb2FkID09PSAwID9cblx0XHRcdFx0XHRidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50cykgOlxuXHRcdFx0XHRcdHN0YXRlLmdhbGxlcnlEYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50cykpLFxuXHRcdFx0XHRsb2FkOiBhY3Rpb24uZGF0YS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5tb21lbnRzLmxlbmd0aCAhPT0gMjAsXG5cdFx0XHRcdGxvYWRMaXN0OiBhY3Rpb24uZGF0YS5sb2FkTGlzdFxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9QRVRTX0xPQUQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZFBldHM6IHN0YXRlLmxvYWRQZXRzICsgMVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy93YXRjaC5qcyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMuanMnO1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY2xhc3MgQnVuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIHN0YXRlID0ge1xuICAgIG1vZDogbnVsbFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmxvYWQodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMubG9hZCAhPT0gdGhpcy5wcm9wcy5sb2FkKSB7XG4gICAgICB0aGlzLmxvYWQobmV4dFByb3BzKTtcbiAgICB9XG4gIH1cblxuICBsb2FkKHByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZDogbnVsbCB9KTtcbiAgICBwcm9wcy5sb2FkKChtb2QpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG1vZC5kZWZhdWx0ID8gbW9kLmRlZmF1bHQgOiBtb2QgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5tb2QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bmRsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVycy9CdW5kbGUuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgXG5cdGNoYW5nZUFjY291bnREYXRhLCBkZWxldGVBY2NvdW50VG9rZW4sIHJlYWRBY2NvdW50RGF0YSwgY2xlYXJBY2NvdW50U2lnbnVwXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBHb29nbGVsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0dvb2dsZWxvZ2luJztcbmltcG9ydCBGYWNlYm9va2xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbic7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93RHJvcDogZmFsc2UsXG5cdFx0XHRyZWRpcmVjdEhvbWU6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0SG9tZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0SG9tZTogZmFsc2UgfSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmFjY291bnQucmVkaXJlY3RTaWdudXApIHtcblx0XHRcdHRoaXMucHJvcHMuY2xlYXJBY2NvdW50U2lnbnVwKCk7XG5cdFx0fVxuXHR9XG5cdGdMb2dpbihkZXRhaWwpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZ29vZ2xlJywgZGV0YWlsKTtcblx0XHR9XG5cdH1cblx0ZkxvZ2luKHJlc3BvbnNlLCB0b2tlbikge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdmYWNlYm9vaycsIHsgcmVzcG9uc2UsIHRva2VuIH0pO1xuXHRcdH1cblx0fVxuXHRzaG93RHJvcCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0Ryb3A6ICF0aGlzLnN0YXRlLnNob3dEcm9wIH0pO1xuXHR9XG5cdGxvZ091dCgpIHtcblx0XHRpZiAoRkIpIHtcblx0XHRcdEZCLmxvZ291dCgpO1xuXHRcdH1cblx0XHRpZiAoZ2FwaSkge1xuXHRcdFx0bGV0IGF1dGgyID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdGF1dGgyLnNpZ25PdXQoKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5kZWxldGVBY2NvdW50VG9rZW4oXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW5cblx0XHQpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdEhvbWU6IHRydWUgfSk7XG5cdH1cbiAgcmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0SG9tZSkge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17ICcvJyB9IC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hY2NvdW50LnJlZGlyZWN0U2lnbnVwKSB7XG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPXsgJy9zaWdudXAnIH0gLz47XG5cdFx0fVxuXHRcdGNvbnN0IGxvZ2luU3R5bGUgPSB0aGlzLnN0YXRlLnNob3dEcm9wID8gXCJoZWFkZXItZHJvcFwiIDogXCJoZWFkZXItZHJvcC1oaWRlXCI7XG5cdFx0Y29uc3QgdXNlckluZm8gPSAoXG5cdFx0XHQ8ZGl2IGlkPVwiaGVhZGVyLWxvZ2luXCIgb25DbGljaz17IHRoaXMuc2hvd0Ryb3AuYmluZCh0aGlzKSB9PlxuXHRcdFx0XHQ8aDU+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwgPyAnTG9naW4nIDogdGhpcy5wcm9wcy5hY2NvdW50Lm5hbWUgfVxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi9wdWJsaWMvaWNvbi9nbHlwaGljb25zLWRyb3Bkb3duLnBuZ1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGxldCBsb2dvdXRCb2FyZDtcblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93RHJvcCAmJiB0aGlzLnByb3BzLmFjY291bnQuaWQgIT09IG51bGwpIHtcblx0XHRcdGxvZ291dEJvYXJkID0gKFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcFwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi91c2VyL1wiICsgdGhpcy5wcm9wcy5hY2NvdW50LmlkIH0+PGg1PkhvbWU8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvd2F0Y2hcIiB9PjxoNT5XYXRjaCBMaXN0PC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3JlcXVlc3RcIiB9PjxoNT5SZXF1ZXN0czwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9zZXR0aW5nXCIgfT48aDU+U2V0dGluZzwvaDU+PC9hPlxuXHRcdFx0XHRcdDxoNiBpZD1cImhlYWRlci1kcm9wLWxvZ291dFwiIG9uQ2xpY2s9eyB0aGlzLmxvZ091dC5iaW5kKHRoaXMpIH0+TG9nIE91dDwvaDY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCk7XG5cdFx0fVxuICAgIHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxoNSBpZD1cImhlYWRlci1kZXNjXCI+SG9tZXBhZ2UgZm9yIHBldHM8L2g1PlxuXHRcdFx0XHR7IHVzZXJJbmZvIH1cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL2V4cGxvcmVcIj5cblx0XHRcdFx0XHQ8aDU+RXhwbG9yZTwvaDU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlcIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxoNT5QdWJsaWM8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17IGxvZ2luU3R5bGUgfT5cblx0XHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZHJvcC1ub3RpY2VcIj5DbGljayB0byBzaWduIGluIG9yIHNpZ24gdXA8L2g1PlxuXHRcdFx0XHRcdDxHb29nbGVsb2dpbiBcblx0XHRcdFx0XHRcdGNsaWVudElkPXsgZ29vZ2xlQ2xpZW50SWQgfSBcblx0XHRcdFx0XHRcdHdpZHRoPVwiMjAwcHhcIlxuXHRcdFx0XHRcdFx0Z0xvZ2luPXsgdGhpcy5nTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZhY2Vib29rbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGZhY2Vib29rQ2xpZW50SWQgfVxuXHRcdFx0XHRcdFx0d2lkdGg9XCIxOTRweFwiXG5cdFx0XHRcdFx0XHRmTG9naW49eyB0aGlzLmZMb2dpbi5iaW5kKHRoaXMpIH0gXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHR7IGxvZ291dEJvYXJkIH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiAoeyBhY2NvdW50OiBzdGF0ZS5hY2NvdW50IH0pLFxuICB7IGNoYW5nZUFjY291bnREYXRhLCBkZWxldGVBY2NvdW50VG9rZW4sIHJlYWRBY2NvdW50RGF0YSwgY2xlYXJBY2NvdW50U2lnbnVwIH1cbikoSGVhZGVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVycy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBCdW5kbGUgZnJvbSAnLi9CdW5kbGUnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2VuZXJhbC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmltcG9ydCBIb21lIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWhvbWUhLi4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgRXhwbG9yZSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1leHBsb3JlIS4uL3BhZ2VzL0V4cGxvcmUnO1xuaW1wb3J0IFBldCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1wZXQhLi4vcGFnZXMvUGV0JztcbmltcG9ydCBVc2VyIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXVzZXIhLi4vcGFnZXMvVXNlcic7XG5pbXBvcnQgTW9tZW50IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPW1vbWVudCEuLi9wYWdlcy9Nb21lbnQnO1xuaW1wb3J0IFdhdGNoIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXdhdGNoIS4uL3BhZ2VzL1dhdGNoJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlcXVlc3QhLi4vcGFnZXMvUmVxdWVzdCc7XG5pbXBvcnQgU2V0dGluZyBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4uL3BhZ2VzL1NldHRpbmcnO1xuaW1wb3J0IEVkaXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9FZGl0JztcbmltcG9ydCBBZGQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9BZGQnO1xuaW1wb3J0IFNpZ251cCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4uL3BhZ2VzL1NpZ251cCc7XG5pbXBvcnQgVGVybXMgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dGVybXMhLi4vcGFnZXMvVGVybXMnO1xuaW1wb3J0IFJlYWN0VUkgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi4vcGFnZXMvUmVhY3QnO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuLi9wYWdlcy9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEludGVybmFsU2VydmVyRXJyb3IgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi4vcGFnZXMvSW50ZXJuYWxTZXJ2ZXJFcnJvcic7XG5pbXBvcnQgRm9yYmlkZGVuIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4uL3BhZ2VzL0ZvcmJpZGRlbic7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IChwcm9wcykgPT4gKFxuICA8QnVuZGxlIGxvYWQ9eyBjb21wb25lbnQgfT5cbiAgICB7XG4gICAgICAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPiA6IG51bGxcbiAgICB9XG4gIDwvQnVuZGxlPlxuKTtcblxuY29uc3QgZ2V0Um91dGVyID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoSG9tZSkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9leHBsb3JlXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEV4cGxvcmUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcGV0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQZXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvdXNlci86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVXNlcikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi93YXRjaFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChXYXRjaCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9yZXF1ZXN0XCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFJlcXVlc3QpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2V0dGluZ1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChTZXR0aW5nKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL2VkaXQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEVkaXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvYWRkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEFkZCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoU2lnbnVwKSB9IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Rlcm1zXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFRlcm1zKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3JlYWN0XCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFJlYWN0VUkpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvNTAwXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEludGVybmFsU2VydmVyRXJyb3IpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvNDAzXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEZvcmJpZGRlbikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFBhZ2VOb3RGb3VuZCkgfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxoNj7CqSAyMDE3LTIwMTggU21pbGluZ3MubWU8L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViXCIgdGFyZ2V0PVwiX19ibGFua1wiPlNvdXJjZSBDb2RlPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjYvVGhvdXNhbmRheS1XZWIvaXNzdWVzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlJlcG9ydDwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHA6Ly9nbHlwaGljb25zLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5HbHlwaGljb25zPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX19ibGFua1wiPlRlcm1zICYgUHJpdmFjeSBQb2xpY3k8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNlwiIHRhcmdldD1cIl9fYmxhbmtcIj5BYm91dDwvYT48L2g2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRXhwbG9yZS5qc1wiKSk7XG5cdH0sIFwiZXhwbG9yZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuL3NyYy9wYWdlcy9FeHBsb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Ib21lLmpzXCIpKTtcblx0fSwgXCJob21lXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4vc3JjL3BhZ2VzL0hvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL01vbWVudC5qc1wiKSk7XG5cdH0sIFwibW9tZW50XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi9zcmMvcGFnZXMvTW9tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9QZXQuanNcIikpO1xuXHR9LCBcInBldFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4vc3JjL3BhZ2VzL1BldC5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRm9yYmlkZGVuLmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvRm9yYmlkZGVuLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9JbnRlcm5hbFNlcnZlckVycm9yLmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvSW50ZXJuYWxTZXJ2ZXJFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vUGFnZU5vdEZvdW5kLmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvUGFnZU5vdEZvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9SZWFjdC5qc1wiKSk7XG5cdH0sIFwicmVhY3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4vc3JjL3BhZ2VzL1JlYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9SZXF1ZXN0LmpzXCIpKTtcblx0fSwgXCJyZXF1ZXN0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZXF1ZXN0IS4vc3JjL3BhZ2VzL1JlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0FkZC5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9BZGQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9FZGl0LmpzXCIpKTtcblx0fSwgXCJzZXR0aW5nXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4vc3JjL3BhZ2VzL0VkaXQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9TZXR0aW5nLmpzXCIpKTtcblx0fSwgXCJzZXR0aW5nXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4vc3JjL3BhZ2VzL1NldHRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9TaWdudXAuanNcIikpO1xuXHR9LCBcInNldHRpbmdcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi9zcmMvcGFnZXMvU2lnbnVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vVGVybXMuanNcIikpO1xuXHR9LCBcInRlcm1zXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT10ZXJtcyEuL3NyYy9wYWdlcy9UZXJtcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1VzZXIuanNcIikpO1xuXHR9LCBcInVzZXJcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXVzZXIhLi9zcmMvcGFnZXMvVXNlci5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1dhdGNoLmpzXCIpKTtcblx0fSwgXCJ3YXRjaFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9d2F0Y2ghLi9zcmMvcGFnZXMvV2F0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKmdlbmVyYWwtaGVhZGVyKi9cXG4jaGVhZGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jaGVhZGVyLWRlc2N7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxufVxcbi5oZWFkZXItbmF2aXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRlci1sb2dve1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNoZWFkZXItbG9naW57XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRlci1sb2dpbiBoNXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbiNoZWFkZXItbG9naW4gaW1ne1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1kcm9we1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuI2hlYWRlci1kcm9wLW1lc3NhZ2V7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA1MjQ1NiAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDUyNDU2ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiA4cHggMiUgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItZHJvcCBhe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXItZHJvcCBpbnB1dHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuI2hlYWRlci1kcm9wLWxvZ291dHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZjg1MTM7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWRyb3AtaGlkZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjRweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Q3YjQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcdFxcdFxcdFxcbn1cXG4jaGVhZGVyLWRyb3Atbm90aWNle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNlZjg1MTM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKkZvb3RlciBzdHlsZSovXFxuI2Zvb3RlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHggMTAlO1xcblxcdG1hcmdpbi10b3A6IDcwcHg7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcblxcbiNmb290ZXIgaDZ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdG1hcmdpbi1yaWdodDogMyU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0OHB4KSB7XFxuICAgICNoZWFkZXItbG9nb3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVye1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA1JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgICNoZWFkZXItZGVzY3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgICAjaGVhZGVyLWxvZ297XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=