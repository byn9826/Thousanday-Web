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

var readAccountFacebookApi = exports.readAccountFacebookApi = '/api/account/facebook';
var readAccountGoogleApi = exports.readAccountGoogleApi = '/api/account/google';
var deleteAccountTokenApi = exports.deleteAccountTokenApi = '/api/account/logout';

var readHomeMomentsApi = exports.readHomeMomentsApi = '/api/index/read';
var readExploreMomentsApi = exports.readExploreMomentsApi = '/api/explore/read';

var readPetPageApi = exports.readPetPageApi = '/api/pet/read';
var updatePetWatchApi = exports.updatePetWatchApi = '/api/pet/watch';
var createPetMomentApi = exports.createPetMomentApi = '/api/upload/moment';
var readPetMomentsApi = exports.readPetMomentsApi = '/api/pet/load';

var readUserPageApi = exports.readUserPageApi = '/api/user/read';
var readUserMomentsApi = exports.readUserMomentsApi = '/api/user/load';

var readMomentPageApi = exports.readMomentPageApi = '/api/moment/read';
var deleteMomentPageApi = exports.deleteMomentPageApi = '/api/moment/delete';
var updateMomentLikeApi = exports.updateMomentLikeApi = '/api/moment/like';
var readMomentCommentsApi = exports.readMomentCommentsApi = '/api/moment/load';
var createMomentCommentApi = exports.createMomentCommentApi = '/api/moment/comment';

var readWatchPageApi = exports.readWatchPageApi = '/api/watch/read';
var createWatchPetApi = exports.createWatchPetApi = '/api/watch/add';
var deleteWatchPetApi = exports.deleteWatchPetApi = '/api/watch/remove';
var readWatchMomentsApi = exports.readWatchMomentsApi = '/api/watch/load';

var readRequestPageApi = exports.readRequestPageApi = '/api/request/read';
var createRequestUserApi = exports.createRequestUserApi = '/api/request/accept';
var deleteRequestUserApi = exports.deleteRequestUserApi = '/api/request/delete';

var readSettingPageApi = exports.readSettingPageApi = '/api/setting/read';
var updateSettingAboutApi = exports.updateSettingAboutApi = '/api/setting/about';
var updateSettingNameApi = exports.updateSettingNameApi = '/api/setting/name';
var createSettingProfileApi = exports.createSettingProfileApi = '/api/upload/user';

var createAddPetApi = exports.createAddPetApi = '/api/upload/add';
var readEditPageApi = exports.readEditPageApi = '/api/edit/read';
var updateEditNameApi = exports.updateEditNameApi = '/api/edit/name';
var updateEditProfileApi = exports.updateEditProfileApi = '/api/upload/pet';
var deleteEditRelativeApi = exports.deleteEditRelativeApi = '/api/edit/remove';
var readEditSearchApi = exports.readEditSearchApi = '/api/edit/search';
var createEditRelativeApi = exports.createEditRelativeApi = '/api/edit/add';
var updateEditTransferApi = exports.updateEditTransferApi = '/api/edit/transfer';
var updateEditRelationApi = exports.updateEditRelationApi = '/api/edit/end';

var createNewUserApi = exports.createNewUserApi = '/api/upload/create';

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
		return [_config.domainUrl + '/public/pet/' + image.pet_id + '/moment/' + image.image_name, image.moment_message, '/moment/' + image.moment_id];
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
	var data = [content, _config.domainUrl + '/public/user/' + userId + '.jpg', '/user/' + userId, new Date().toISOString().substring(0, 10)];
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
		return [comment.comment_content, _config.domainUrl + "/public/user/" + comment.user_id + ".jpg", "/user/" + comment.user_id, new Date(comment.comment_time).toISOString().substring(0, 10)];
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
			var newMoment = [_config.domainUrl + "/public/pet/" + action.data.petId + "/moment/" + action.data.info[1], action.data.message, "/moment/" + action.data.info[0]];
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
exports.push([module.i, "/*general-header*/\n#header{\n    position: fixed;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid white;\n    background-color: #ef8513;\n    color: white;\n    z-index: 999;\n\t\ttop: 0;\n\t\tleft: 0;\n}\n#header-desc{\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin-left: 2%;\n}\n.header-navi{\n    color: white;\n    float: right;\n    margin-right: 5%;\n    cursor: pointer;\n}\n#header-logo{\n    float: left;\n    margin-left: 10%;\n    height: 40px;\n    margin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n/*Footer style*/\n#footer{\n  position: fixed;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n\theight: 25px;\n\tline-height: 25px;\n\tz-index: 999;\n\tbottom: 0;\n\tleft: 0;\n}\n\n#footer h6{\n  display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}\n\n@media only screen and (max-width: 948px) {\n    #header-logo{\n        margin-left: 5%;\n    }\n\n    #footer{\n        width: 90%;\n        padding: 5px 5%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    #header-desc{\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    #header-logo{\n        display: none;\n    }\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcHJvY2Vzc0Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93YXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9FeHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRm9yYmlkZGVuLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9JbnRlcm5hbFNlcnZlckVycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1JlYWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVGVybXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzcz83YjdkIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbImRvbWFpblVybCIsImFuZHJvaWRTdG9yZVVybCIsImdvb2dsZUNsaWVudElkIiwiZmFjZWJvb2tDbGllbnRJZCIsInJlYWRBY2NvdW50RmFjZWJvb2tBcGkiLCJyZWFkQWNjb3VudEdvb2dsZUFwaSIsImRlbGV0ZUFjY291bnRUb2tlbkFwaSIsInJlYWRIb21lTW9tZW50c0FwaSIsInJlYWRFeHBsb3JlTW9tZW50c0FwaSIsInJlYWRQZXRQYWdlQXBpIiwidXBkYXRlUGV0V2F0Y2hBcGkiLCJjcmVhdGVQZXRNb21lbnRBcGkiLCJyZWFkUGV0TW9tZW50c0FwaSIsInJlYWRVc2VyUGFnZUFwaSIsInJlYWRVc2VyTW9tZW50c0FwaSIsInJlYWRNb21lbnRQYWdlQXBpIiwiZGVsZXRlTW9tZW50UGFnZUFwaSIsInVwZGF0ZU1vbWVudExpa2VBcGkiLCJyZWFkTW9tZW50Q29tbWVudHNBcGkiLCJjcmVhdGVNb21lbnRDb21tZW50QXBpIiwicmVhZFdhdGNoUGFnZUFwaSIsImNyZWF0ZVdhdGNoUGV0QXBpIiwiZGVsZXRlV2F0Y2hQZXRBcGkiLCJyZWFkV2F0Y2hNb21lbnRzQXBpIiwicmVhZFJlcXVlc3RQYWdlQXBpIiwiY3JlYXRlUmVxdWVzdFVzZXJBcGkiLCJkZWxldGVSZXF1ZXN0VXNlckFwaSIsInJlYWRTZXR0aW5nUGFnZUFwaSIsInVwZGF0ZVNldHRpbmdBYm91dEFwaSIsInVwZGF0ZVNldHRpbmdOYW1lQXBpIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGkiLCJjcmVhdGVBZGRQZXRBcGkiLCJyZWFkRWRpdFBhZ2VBcGkiLCJ1cGRhdGVFZGl0TmFtZUFwaSIsInVwZGF0ZUVkaXRQcm9maWxlQXBpIiwiZGVsZXRlRWRpdFJlbGF0aXZlQXBpIiwicmVhZEVkaXRTZWFyY2hBcGkiLCJjcmVhdGVFZGl0UmVsYXRpdmVBcGkiLCJ1cGRhdGVFZGl0VHJhbnNmZXJBcGkiLCJ1cGRhdGVFZGl0UmVsYXRpb25BcGkiLCJjcmVhdGVOZXdVc2VyQXBpIiwicHJvY2Vzc0Vycm9yIiwiZXJyIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiYnVpbGRHYWxsZXJ5IiwiZGF0YSIsIm1hcCIsImltYWdlIiwicGV0X2lkIiwiaW1hZ2VfbmFtZSIsIm1vbWVudF9tZXNzYWdlIiwibW9tZW50X2lkIiwiY2hhbmdlQWNjb3VudERhdGEiLCJyZWFkQWNjb3VudERhdGEiLCJkZWxldGVBY2NvdW50VG9rZW4iLCJjbGVhckFjY291bnRTaWdudXAiLCJDSEFOR0VfQUNDT1VOVF9EQVRBIiwiQ0xFQVJfQUNDT1VOVF9EQVRBIiwiUkVESVJFQ1RfVE9fU0lHTlVQIiwiQ0xFQVJfQUNDT1VOVF9TSUdOVVAiLCJ0eXBlIiwicmVkaXJlY3RUb1NpZ251cCIsInBvcnRhbCIsImRldGFpbCIsImFwaVVybCIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmFtZSIsImltYWdlVXJsIiwiY2F0Y2giLCJjbGVhckFjY291bnREYXRhIiwib2siLCJjbGVhciIsInJlYWRTZXR0aW5nUGFnZSIsInVwZGF0ZVNldHRpbmdBYm91dCIsInVwZGF0ZVNldHRpbmdOYW1lIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGUiLCJCVUlMRF9TRVRUSU5HX1BBR0UiLCJDSEFOR0VfU0VUVElOR19BQk9VVCIsIkNIQU5HRV9BQ0NPVU5UX05BTUUiLCJDSEFOR0VfU0VUVElOR19OQU1FIiwiQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSIsImJ1aWxkU2V0dGluZ1BhZ2UiLCJjaGFuZ2VTZXR0aW5nQWJvdXQiLCJhYm91dCIsInN0YXR1cyIsImNoYW5nZUFjY291bnROYW1lIiwiY2hhbmdlU2V0dGluZ05hbWUiLCJjaGFuZ2VTZXR0aW5nUHJvZmlsZSIsImZpbGUiLCJmaWxlRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2Vzc0RhdGEiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRmFjZWJvb2tsb2dpbiIsInByb3BzIiwic3RhdGUiLCJ3aWR0aCIsImhlYWRlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwcGVuZENoaWxkIiwic2VsZiIsImZiQXN5bmNJbml0IiwiRkIiLCJpbml0IiwiYXBwSWQiLCJjbGllbnRJZCIsInhmYm1sIiwidmVyc2lvbiIsImZMb2dpbiIsImxvZ2luIiwiYXV0aFJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJhcGkiLCJzZXRTdGF0ZSIsImJ1dHRvblN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJmYWNlYm9vayIsImNsaWNrQnV0dG9uIiwiYmluZCIsIkdvb2dsZWxvZ2luIiwicmVzdWx0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlYWR5U3RhdGUiLCJjbGVhckludGVydmFsIiwicmVsYXlvdXQiLCJnYXBpIiwibG9hZCIsImluc3RhbmNlIiwiYXV0aDIiLCJjbGllbnRfaWQiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJnZXQiLCJwcm9maWxlIiwiZ2V0QmFzaWNQcm9maWxlIiwiZ2V0QXV0aEluc3RhbmNlIiwic2lnbkluIiwiaXNTaWduZWRJbiIsImdldElkIiwiZ2V0TmFtZSIsImZpcnN0bmFtZSIsImdldEdpdmVuTmFtZSIsImxhc3RuYW1lIiwiZ2V0RmFtaWx5TmFtZSIsImdldEltYWdlVXJsIiwiZW1haWwiLCJnZXRFbWFpbCIsImdldEF1dGhSZXNwb25zZSIsImlkX3Rva2VuIiwiZ0xvZ2luIiwiZ29vZ2xlIiwibm9HZXRBYmlsaXR5Iiwibm9HZXRHZW5kZXIiLCJub0dldE5hdHVyZSIsIm5vR2V0VHlwZSIsInZhbHVlIiwicGFyc2VJbnQiLCJjaGFuZ2VBZGREZXRhaWwiLCJjaGFuZ2VBZGRVcGRhdGUiLCJjcmVhdGVBZGRQZXQiLCJDSEFOR0VfQUREX0RFVEFJTCIsIkNIQU5HRV9BRERfVVBEQVRFIiwiUkVESVJFQ1RfVE9fVVNFUiIsInJlZGlyZWN0VG9Vc2VyIiwicGV0TmFtZSIsInBldEdlbmRlciIsInBldFR5cGUiLCJwZXROYXR1cmUiLCJwZXRBdmF0YXIiLCJ1c2VySWQiLCJ1c2VyVG9rZW4iLCJyZWFkRWRpdFBhZ2UiLCJjaGFuZ2VFZGl0VXBkYXRlIiwidXBkYXRlRWRpdE5hbWUiLCJ1cGRhdGVFZGl0UHJvZmlsZSIsImNoYW5nZUVkaXRSZW1vdmUiLCJkZWxldGVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0QWRkIiwicmVzZXRFZGl0U2VhcmNoIiwicmVhZEVkaXRTZWFyY2giLCJjcmVhdGVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0T3duZXJzaGlwIiwidXBkYXRlRWRpdFRyYW5zZmVyIiwiY2hhbmdlRWRpdEVuZCIsInJlZGlyZWN0VG9Ib21lIiwidXBkYXRlRWRpdFJlbGF0aW9uIiwiQlVJTERfRURJVF9QQUdFIiwiQ0hBTkdFX0VESVRfVVBEQVRFIiwiQ0hBTkdFX0VESVRfTkFNRSIsIkNIQU5HRV9FRElUX1JFTU9WRSIsIlJFTU9WRV9FRElUX1JFTEFUSVZFIiwiQ0hBTkdFX0VESVRfQUREIiwiUkVTRVRfRURJVF9TRUFSQ0giLCJDSEFOR0VfRURJVF9TRUFSQ0giLCJBRERfRURJVF9SRUxBVElWRSIsIkNIQU5HRV9FRElUX09XTkVSU0hJUCIsIkNIQU5HRV9FRElUX1RSQU5TRkVSIiwiQ0hBTkdFX0VESVRfRU5EIiwiUkVESVJFQ1RfVE9fSE9NRSIsImJ1aWxkRWRpdFBhZ2UiLCJwZXRJZCIsImNoYW5nZUVkaXROYW1lIiwiZm9ybURhdGEiLCJyZW1vdmVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0U2VhcmNoIiwic2VhcmNoSWQiLCJzZWFyY2hEYXRhIiwiYWRkRWRpdFJlbGF0aXZlIiwiY2hhbmdlRWRpdFRyYW5zZmVyIiwicmVsYXRpdmVJZCIsInJlYWRFeHBsb3JlTW9tZW50cyIsInNlbGVjdEV4cGxvcmVUeXBlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsIkNIQU5HRV9FWFBMT1JFX1RZUEUiLCJDSEFOR0VfRVhQTE9SRV9OQVRVUkUiLCJDSEFOR0VfRVhQTE9SRV9NT01FTlRTIiwiY2hhbmdlRXhwbG9yZU1vbWVudHMiLCJtb21lbnRzRGF0YSIsIm5hdHVyZSIsImFwaVBhcmFtcyIsIm5ld1R5cGUiLCJuZXdOYXR1cmUiLCJyZWFkSG9tZU1vbWVudHMiLCJDSEFOR0VfSE9NRV9NT01FTlRTIiwiY2hhbmdlSG9tZU1vbWVudHMiLCJyZWFkTW9tZW50UGFnZSIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwidXBkYXRlTW9tZW50TGlrZSIsInJlYWRNb21lbnRDb21tZW50cyIsInNob3dDb21tZW50RW1wdHkiLCJjcmVhdGVNb21lbnRDb21tZW50IiwiQlVJTERfTU9NRU5UX1BBR0UiLCJTSE9XX01PTUVOVF9ERUxFVEUiLCJSRURJUkVDVF9VU0VSX1BBR0UiLCJDSEFOR0VfTU9NRU5UX0xJS0UiLCJDSEFOR0VfTU9NRU5UX0NPTU1FTlRTIiwiU0hPV19DT01NRU5UX0VNUFRZIiwiQUREX01PTUVOVF9DT01NRU5UIiwiYnVpbGRNb21lbnRQYWdlIiwicmVkaXJjdFVzZXJQYWdlIiwibW9tZW50SWQiLCJjaGFuZ2VNb21lbnRMaWtlIiwiYWN0aW9uIiwiY2hhbmdlTW9tZW50Q29tbWVudHMiLCJjb21tZW50TG9hZCIsImNvbW1lbnRBZGRlZCIsImFkZE1vbWVudENvbW1lbnQiLCJjb250ZW50IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwicmVhZFBldFBhZ2UiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsIkJVSUxEX1BFVF9QQUdFIiwiU0hPV19BQ0NPVU5UX1JFUVVJUkVEIiwiQ0hBTkdFX1BFVF9XQVRDSCIsIkFERF9QRVRfTU9NRU5UIiwiQ0hBTkdFX1BFVF9NT01FTlRTIiwiYnVpbGRQZXRQYWdlIiwiY2hhbmdlUGV0V2F0Y2giLCJhZGRQZXRNb21lbnQiLCJpbmZvIiwibWVzc2FnZSIsInNwbGl0IiwiY2hhbmdlUGV0TW9tZW50cyIsImFkZCIsInBhcmFtcyIsInJlYWRSZXF1ZXN0UGFnZSIsInVwZGF0ZVJlcXVlc3RVc2VyIiwiQlVJTERfUkVRVUVTVF9QQUdFIiwiQ0hBTkdFX1JFUVVFU1RfVVNFUiIsImJ1aWxkUmVxdWVzdFBhZ2UiLCJjaGFuZ2VSZXF1ZXN0VXNlciIsImluZGV4IiwicmVhZFVzZXJQYWdlIiwicmVhZFVzZXJNb21lbnRzIiwiQlVJTERfVVNFUl9QQUdFIiwiQ0hBTkdFX1VTRVJfTU9NRU5UUyIsImJ1aWxkVXNlclBhZ2UiLCJjaGFuZ2VVc2VyTW9tZW50cyIsImJlbG9uZyIsInJlYWRXYXRjaFBhZ2UiLCJ1cGRhdGVXYXRjaFBldCIsInJlYWRXYXRjaE1vbWVudHMiLCJjaGFuZ2VQZXRzTG9hZCIsIkJVSUxEX1dBVENIX1BBR0UiLCJDSEFOR0VfV0FUQ0hfUEVUIiwiQ0hBTkdFX1dBVENIX01PTUVOVFMiLCJDSEFOR0VfUEVUU19MT0FEIiwiYnVpbGRXYXRjaFBhZ2UiLCJjaGFuZ2VXYXRjaFBldCIsImNoYW5nZVdhdGNoTW9tZW50cyIsIm1vbWVudHMiLCJsb2FkTGlzdCIsImxpc3RzIiwiYnVpbGRDb21tZW50cyIsImNvbW1lbnQiLCJjb21tZW50X2NvbnRlbnQiLCJ1c2VyX2lkIiwiY29tbWVudF90aW1lIiwiYWNjb3VudCIsImhvbWUiLCJtb21lbnQiLCJwZXQiLCJleHBsb3JlIiwid2F0Y2giLCJyZXF1ZXN0Iiwic2V0dGluZyIsImVkaXQiLCJyZWR1Y2VyIiwiaW5pdFN0YXRlIiwicmVkaXJlY3RTaWdudXAiLCJ1cGRhdGVSZXN1bHQiLCJjcmVhdGVBdmF0YXIiLCJjcmVhdGVHZW5kZXIiLCJjcmVhdGVUeXBlIiwiY3JlYXRlTmF0dXJlIiwicmVkaXJlY3RVc2VyIiwibmV3U3RhdGUiLCJwZXREYXRhIiwic2hvd0VuZCIsInNob3dBZGQiLCJzZWFyY2giLCJzaG93UmVtb3ZlIiwic2hvd1RyYW5zZmVyIiwiZGF0YUxvYWRlZCIsInJlZGlyZWN0SG9tZSIsInBldF9uYW1lIiwicmVsYXRpdmVfaWQiLCJvd25lcl9pZCIsImxvY2tlciIsIm5ld01vbWVudHMiLCJjb25jYXQiLCJsZW5ndGgiLCJuZXdEYXRhIiwibW9tZW50RGF0YSIsImZhbWlseURhdGEiLCJsaWtlRGF0YSIsImNvbW1lbnREYXRhIiwic2hvd0NvbmZpcm0iLCJjb21tZW50TG9ja2VyIiwiY29tbWVudEVycm9yIiwibGlrZSIsImZpbHRlciIsIm5ld0NvbW1lbnRzIiwicGV0T3duZXIiLCJmcmllbmREYXRhIiwiZ2FsbGVyeURhdGEiLCJ3YXRjaERhdGEiLCJsb2dpblJlcXVpcmVkIiwicmVzZXQiLCJuZXdNb21lbnQiLCJhYmlsaXR5IiwibmV3QWJpbGl0eSIsInJlcXVlc3REYXRhIiwiYWNjZXB0TGlzdCIsInVzZXJEYXRhIiwidXNlckFib3V0IiwidXNlcl9hYm91dCIsInJlbGF0aXZlRGF0YSIsInBldHNEYXRhIiwiYmVsb25nRGF0YSIsImZvckVhY2giLCJwdXNoIiwiU2V0IiwicGV0c0xpc3QiLCJ1bndhdGNoIiwibG9hZFBldHMiLCJ3YXRjaExpc3QiLCJzdG9yZSIsIkJ1bmRsZSIsIm1vZCIsIm5leHRQcm9wcyIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIkhlYWRlciIsInNob3dEcm9wIiwiZ2V0SXRlbSIsImxvZ291dCIsInNpZ25PdXQiLCJsb2dpblN0eWxlIiwidXNlckluZm8iLCJsb2dvdXRCb2FyZCIsImxvZ091dCIsImNyZWF0ZUNvbXBvbmVudCIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsZ0NBQVkscUJBQWxCOztBQUVBLElBQU1DLDRDQUFrQiw4REFBeEI7O0FBRUEsSUFBTUMsMENBQWlCLDBFQUF2QjtBQUNBLElBQU1DLDhDQUFtQixpQkFBekI7O0FBRUEsSUFBTUMsMERBQXlCLHVCQUEvQjtBQUNBLElBQU1DLHNEQUF1QixxQkFBN0I7QUFDQSxJQUFNQyx3REFBd0IscUJBQTlCOztBQUVBLElBQU1DLGtEQUFxQixpQkFBM0I7QUFDQSxJQUFNQyx3REFBd0IsbUJBQTlCOztBQUVBLElBQU1DLDBDQUFpQixlQUF2QjtBQUNBLElBQU1DLGdEQUFvQixnQkFBMUI7QUFDQSxJQUFNQyxrREFBcUIsb0JBQTNCO0FBQ0EsSUFBTUMsZ0RBQW9CLGVBQTFCOztBQUVBLElBQU1DLDRDQUFrQixnQkFBeEI7QUFDQSxJQUFNQyxrREFBcUIsZ0JBQTNCOztBQUVBLElBQU1DLGdEQUFvQixrQkFBMUI7QUFDQSxJQUFNQyxvREFBc0Isb0JBQTVCO0FBQ0EsSUFBTUMsb0RBQXNCLGtCQUE1QjtBQUNBLElBQU1DLHdEQUF3QixrQkFBOUI7QUFDQSxJQUFNQywwREFBeUIscUJBQS9COztBQUVBLElBQU1DLDhDQUFtQixpQkFBekI7QUFDQSxJQUFNQyxnREFBb0IsZ0JBQTFCO0FBQ0EsSUFBTUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkb21haW5VcmwgPSAnaHR0cHM6Ly9zbWlsaW5ncy5tZSc7XG5cbmV4cG9ydCBjb25zdCBhbmRyb2lkU3RvcmVVcmwgPSAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50aG91c2FuZGF5JztcblxuZXhwb3J0IGNvbnN0IGdvb2dsZUNsaWVudElkID0gJzE2ODA5ODg1MDIzNC1mc3E4NHBrNGNhZTk3bWxqMGs0NjRqb2MyMWNncWp2di5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XG5leHBvcnQgY29uc3QgZmFjZWJvb2tDbGllbnRJZCA9ICc0NDc2ODgyNjU1NzYxMjUnO1xuXG5leHBvcnQgY29uc3QgcmVhZEFjY291bnRGYWNlYm9va0FwaSA9ICcvYXBpL2FjY291bnQvZmFjZWJvb2snO1xuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50R29vZ2xlQXBpID0gJy9hcGkvYWNjb3VudC9nb29nbGUnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFjY291bnRUb2tlbkFwaSA9ICcvYXBpL2FjY291bnQvbG9nb3V0JztcblxuZXhwb3J0IGNvbnN0IHJlYWRIb21lTW9tZW50c0FwaSA9ICcvYXBpL2luZGV4L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFeHBsb3JlTW9tZW50c0FwaSA9ICcvYXBpL2V4cGxvcmUvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkUGV0UGFnZUFwaSA9ICcvYXBpL3BldC9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXRXYXRjaEFwaSA9ICcvYXBpL3BldC93YXRjaCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUGV0TW9tZW50QXBpID0gJy9hcGkvdXBsb2FkL21vbWVudCc7XG5leHBvcnQgY29uc3QgcmVhZFBldE1vbWVudHNBcGkgPSAnL2FwaS9wZXQvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkVXNlclBhZ2VBcGkgPSAnL2FwaS91c2VyL3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRVc2VyTW9tZW50c0FwaSA9ICcvYXBpL3VzZXIvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvYXBpL21vbWVudC9yZWFkJztcbmV4cG9ydCBjb25zdCBkZWxldGVNb21lbnRQYWdlQXBpID0gJy9hcGkvbW9tZW50L2RlbGV0ZSc7XG5leHBvcnQgY29uc3QgdXBkYXRlTW9tZW50TGlrZUFwaSA9ICcvYXBpL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL2FwaS9tb21lbnQvbG9hZCc7XG5leHBvcnQgY29uc3QgY3JlYXRlTW9tZW50Q29tbWVudEFwaSA9ICcvYXBpL21vbWVudC9jb21tZW50JztcblxuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaFBhZ2VBcGkgPSAnL2FwaS93YXRjaC9yZWFkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVXYXRjaFBldEFwaSA9ICcvYXBpL3dhdGNoL2FkZCc7XG5leHBvcnQgY29uc3QgZGVsZXRlV2F0Y2hQZXRBcGkgPSAnL2FwaS93YXRjaC9yZW1vdmUnO1xuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaE1vbWVudHNBcGkgPSAnL2FwaS93YXRjaC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRSZXF1ZXN0UGFnZUFwaSA9ICcvYXBpL3JlcXVlc3QvcmVhZCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUmVxdWVzdFVzZXJBcGkgPSAnL2FwaS9yZXF1ZXN0L2FjY2VwdCc7XG5leHBvcnQgY29uc3QgZGVsZXRlUmVxdWVzdFVzZXJBcGkgPSAnL2FwaS9yZXF1ZXN0L2RlbGV0ZSc7XG5cbmV4cG9ydCBjb25zdCByZWFkU2V0dGluZ1BhZ2VBcGkgPSAnL2FwaS9zZXR0aW5nL3JlYWQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdBYm91dEFwaSA9ICcvYXBpL3NldHRpbmcvYWJvdXQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdOYW1lQXBpID0gJy9hcGkvc2V0dGluZy9uYW1lJztcbmV4cG9ydCBjb25zdCBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSA9ICcvYXBpL3VwbG9hZC91c2VyJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFkZFBldEFwaSA9ICcvYXBpL3VwbG9hZC9hZGQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFZGl0UGFnZUFwaSA9ICcvYXBpL2VkaXQvcmVhZCc7XG5leHBvcnQgY29uc3QgdXBkYXRlRWRpdE5hbWVBcGkgPSAnL2FwaS9lZGl0L25hbWUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUVkaXRQcm9maWxlQXBpID0gJy9hcGkvdXBsb2FkL3BldCc7XG5leHBvcnQgY29uc3QgZGVsZXRlRWRpdFJlbGF0aXZlQXBpID0gJy9hcGkvZWRpdC9yZW1vdmUnO1xuZXhwb3J0IGNvbnN0IHJlYWRFZGl0U2VhcmNoQXBpID0gJy9hcGkvZWRpdC9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVkaXRSZWxhdGl2ZUFwaSA9ICcvYXBpL2VkaXQvYWRkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0VHJhbnNmZXJBcGkgPSAnL2FwaS9lZGl0L3RyYW5zZmVyJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0UmVsYXRpb25BcGkgPSAnL2FwaS9lZGl0L2VuZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdVc2VyQXBpID0gJy9hcGkvdXBsb2FkL2NyZWF0ZSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvY2Vzc0Vycm9yKGVycikge1xuXHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycgKyBlcnIpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3Byb2Nlc3NFcnJvci5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRHYWxsZXJ5KGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGltYWdlKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGRvbWFpblVybCArICcvcHVibGljL3BldC8nICsgaW1hZ2UucGV0X2lkICsgJy9tb21lbnQvJyArIGltYWdlLmltYWdlX25hbWUsXG5cdFx0XHRpbWFnZS5tb21lbnRfbWVzc2FnZSxcblx0XHRcdCcvbW9tZW50LycgKyBpbWFnZS5tb21lbnRfaWRcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZEdhbGxlcnkuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkQWNjb3VudEZhY2Vib29rQXBpLCByZWFkQWNjb3VudEdvb2dsZUFwaSwgZGVsZXRlQWNjb3VudFRva2VuQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0RBVEEgPSBcImFjY291bnQvQ0hBTkdFX0FDQ09VTlRfREFUQVwiO1xuZXhwb3J0IGNvbnN0IENMRUFSX0FDQ09VTlRfREFUQSA9IFwiYWNjb3VudC9DTEVBUl9BQ0NPVU5UX0RBVEFcIjtcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9UT19TSUdOVVAgPSBcImFjY291bnQvUkVESVJFQ1RfVE9fU0lHTlVQXCI7XG5leHBvcnQgY29uc3QgQ0xFQVJfQUNDT1VOVF9TSUdOVVAgPSBcImFjY291bnQvQ0xFQVJfQUNDT1VOVF9TSUdOVVBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjY291bnREYXRhKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9EQVRBLFxuXHRcdGRhdGFcblx0fVxufVxuXG5mdW5jdGlvbiByZWRpcmVjdFRvU2lnbnVwKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFRElSRUNUX1RPX1NJR05VUFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQWNjb3VudERhdGEocG9ydGFsLCBkZXRhaWwpIHtcblx0Y29uc3QgYXBpVXJsID0gcG9ydGFsID09PSAnZmFjZWJvb2snID8gcmVhZEFjY291bnRGYWNlYm9va0FwaSA6IHJlYWRBY2NvdW50R29vZ2xlQXBpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IGRldGFpbC50b2tlbiwgXG5cdFx0XHRcdFwicGxhdGZvcm1cIjogXCJ3ZWJzaXRlXCJcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGlmIChqc29uLmlkKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdJZFwiLCBqc29uLmlkKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld1Rva2VuXCIsIGRldGFpbC50b2tlbik7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdQbGF0Zm9ybVwiLCBwb3J0YWwpO1xuXHRcdFx0XHRcdGlmIChwb3J0YWwgPT09ICdmYWNlYm9vaycpIHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3TmFtZVwiLCBkZXRhaWwucmVzcG9uc2UubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcblx0XHRcdFx0XHRcdFx0XCJuZXdBdmF0YXJcIiwgXG5cdFx0XHRcdFx0XHRcdFwiaHR0cDovL2dyYXBoLmZhY2Vib29rLmNvbS9cIiArIGpzb24uaWQgKyBcIi9waWN0dXJlP3R5cGU9c3F1YXJlJndpZHRoPTcyMCZoZWlnaHQ9NzIwXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3TmFtZVwiLCBkZXRhaWwubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld0F2YXRhclwiLCBkZXRhaWwuaW1hZ2VVcmwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXNwYXRjaChyZWRpcmVjdFRvU2lnbnVwKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwganNvblswXSk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIGpzb25bMV0pO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwganNvblsyXSk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlQWNjb3VudERhdGEoanNvbikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWNjb3VudERhdGEoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0xFQVJfQUNDT1VOVF9EQVRBXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFjY291bnRUb2tlbihpZCwgdG9rZW4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVBY2NvdW50VG9rZW5BcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB0b2tlbiwgXG5cdFx0XHRcdFwiaWRcIjogaWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRkaXNwYXRjaChjbGVhckFjY291bnREYXRhKCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBY2NvdW50U2lnbnVwKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENMRUFSX0FDQ09VTlRfU0lHTlVQXG5cdH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hY2NvdW50LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFNldHRpbmdQYWdlQXBpLCB1cGRhdGVTZXR0aW5nQWJvdXRBcGksIHVwZGF0ZVNldHRpbmdOYW1lQXBpLFxuXHRjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1NFVFRJTkdfUEFHRSA9ICdzZXR0aW5nL0JVSUxEX1NFVFRJTkdfUEFHRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFVFRJTkdfQUJPVVQgPSAnc2V0dGluZy9DSEFOR0VfU0VUVElOR19BQk9VVCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfTkFNRSA9ICdhY2NvdW50L0NIQU5HRV9BQ0NPVU5UX05BTUUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9TRVRUSU5HX05BTUUgPSAnc2V0dGluZy9DSEFOR0VfU0VUVElOR19OQU1FJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfU0VUVElOR19QUk9GSUxFID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSc7XG5cbmZ1bmN0aW9uIGJ1aWxkU2V0dGluZ1BhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1NFVFRJTkdfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkU2V0dGluZ1BhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkU2V0dGluZ1BhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFNldHRpbmdQYWdlKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ0Fib3V0KGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfU0VUVElOR19BQk9VVCxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZXR0aW5nQWJvdXQoaWQsIHRva2VuLCBhYm91dCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVNldHRpbmdBYm91dEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IGlkLFxuXHRcdFx0XHQndG9rZW4nOiB0b2tlbixcblx0XHRcdFx0J2Fib3V0JzogYWJvdXRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VTZXR0aW5nQWJvdXQoYWJvdXQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFjY291bnROYW1lKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9OQU1FLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ05hbWUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfTkFNRVxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZXR0aW5nUHJvZmlsZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfU0VUVElOR19QUk9GSUxFXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZXR0aW5nTmFtZShpZCwgdG9rZW4sIG5hbWUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVTZXR0aW5nTmFtZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IGlkLFxuXHRcdFx0XHQndG9rZW4nOiB0b2tlbixcblx0XHRcdFx0J25hbWUnOiBuYW1lXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIG5hbWUpO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VBY2NvdW50TmFtZShuYW1lKSk7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVNldHRpbmdOYW1lKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdQcm9maWxlKGlkLCB0b2tlbiwgZmlsZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUsIGlkICsgJy5qcGcnKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIGlkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB0b2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVNldHRpbmdQcm9maWxlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmaWxlRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ1Byb2ZpbGUoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3NldHRpbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZS5qcyc7XG5pbXBvcnQgZ2V0Um91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuXG5SZWFjdERvbS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntnZXRSb3V0ZXIoKX08L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2Vib29rbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRyZXNwb25zZTogbnVsbFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0bGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LmlkID0gXCJmYWNlYm9vay1qc3Nka1wiO1xuXHRcdHNjcmlwdC5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHdpbmRvdy5mYkFzeW5jSW5pdCA9ICgpID0+IHtcblx0XHRcdEZCLmluaXQoe1xuXHRcdFx0XHRhcHBJZCAgICAgIDogdGhpcy5wcm9wcy5jbGllbnRJZCxcblx0XHRcdFx0eGZibWwgICAgICA6IHRydWUsXG5cdFx0XHRcdHZlcnNpb24gICAgOiAndjIuOCdcblx0XHRcdH0pO1xuLy8gXHRcdFx0RkIuZ2V0TG9naW5TdGF0dXMoKHJlc3BvbnNlKSA9PiB7XG4vLyBcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG4vLyBcdFx0XHRcdFx0bGV0IHRva2VuID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuLy8gXHRcdFx0XHRcdEZCLmFwaSgnL21lJywgKHJlc3BvbnNlKSA9PiB7XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2UgfSk7XG4vLyAgXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5mTG9naW4ocmVzcG9uc2UsIHRva2VuKTtcbi8vIFx0XHRcdFx0XHR9KTtcbi8vIFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2U6IGZhbHNlIH0pO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGNsaWNrQnV0dG9uKCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRpZiAodGhpcy5zdGF0ZS5yZXNwb25zZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5mTG9naW4odGhpcy5zdGF0ZS5yZXNwb25zZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEZCLmxvZ2luKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdGxldCB0b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcblx0XHRcdFx0XHRGQi5hcGkoJy9tZScsIChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlIH0pO1xuXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5mTG9naW4ocmVzcG9uc2UsIHRva2VuKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZTogZmFsc2UgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCJcblx0XHR9O1xuXHRcdGxldCBmYWNlYm9vayA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTQUFBQUErQ0FZQUFBQ0xLTWJmQUFBS3htbERRMUJKUTBNZ1VISnZabWxzWlFBQVNBMnRsbmRVVTlrV2gvZTk2WTJXVUtXRTNwRWlYWG9Ob0NCVnNCR1NRRUlKSVNTSVdMQXdPQUpqUVVVRUt6b2lvdUJZQUJrTFlzR0tZTzhETXFpbzQyREJoc3E3Z1FjemE5YWIvOTVlNjl6ejNYMStkOSt6VDFsckE5QmJ1QkpKSnFvQ2tDV1dTYU5EL05rekU1UFlwRWRBQWdUVVFCdm9YRjZ1eEM4cUtnTCsxVDdjeHJTWTNiQlZ4UHBYMmY4ZVVPVUxjbmtBU0JRMm5NTFA1V1ZoZkFScjIzZ1NxUXdBRjR2NVRlYkxKQXJPeDVnbHhTYUljWm1DMDhaNGg0SlR4aGo3RnRQRVJnZGdtZ3NBWkRxWEswMERvTjNFL093OFhob1doL1llWTNzeFh5UUdvSnRnN00wVGN2a1lZdzFzc3JLeUZid1dZNHVVdjhWSit4dHp1U2tUTWJuY3RBa2V5d1g3RXZ0eG9DaFhrc2xkTVByeS8zeGtaY3F4OVJvMWZleEp6ODJJQ2NkNk0yek44bm5jb0poeEZnbzRpajBiOVV0ay90SGpMSkp4WXNkWktBK05HMmQ1UnB6Zk9HZGtoMC9veFNuVEk4Zjl2TndBYk8zSFloWUlZeFBHbVM4SURCcG5hWGIwaEQ0M0wyYkNYeUFNbUQ2dVNlZUdLZlo3ZEc1Y0tVYi9aVUZteU1SL0piS29pWG1LTTZkUDVKSXFEWjdRQ0hML3lsY21qQTBkanlQRERzQTRwNHFDT2VNc2xJWk8rQ1dabzJkNmRBNVNlZlRFT2dqRWNSTnJ5T2NHVHF3dHhJSVE1Q0FHUGdoQUNpbVFEWmtnQXpZRWdnaHlRWUs5Y1FIYmJwa2dIenRqQUFIWmtnVlNVWnBReHZiRGJvWEFoczBSOCt4czJJNzJEazZndUdNS0RjQTdqZEc3ZzJoYytzdVgwd2JnWG9MdHArSjRzeFVxQUs0eHdMR25BTXdQZi9tTTM0NmQweE5kUExrMGIweUhWM1FFb0lJeXNMRGJxdy9HWUFHMjRBZ3U0QW0rRUFSaEVJbGxrZ2h6Z1lmbGs0VmxNaDhXd1RJb2hsSllDeHVoQ3JiREx0Z0xCK0FRTk1OeE9BM240VEowd1MxNEFEM1FEeTloRUQ3QU1JSWdKSVNCTUJGdHhBQXhSYXdSUjhRTjhVYUNrQWdrR2tsRWtwRTBSSXpJa1VYSUNxUVVLVWVxa0oxSUhmSUxjZ3c1alZ4RXVwRjdTQzh5Z0x4RnZxQTRsSTZ5VUQzVURKMk11cUYrYURnYWk4NUIwOUFjdEFBdFFsZWpsV2dOdWg5dFFrK2psOUZiYUEvNkVoM0NBWTZHMDhBWjRteHhicmdBWENRdUNaZUtrK0tXNEVwd0ZiZ2FYQU91RmRlQnU0SHJ3YjNDZmNZVDhVdzhHMitMOThTSDR1UHdQSHdPZmdtK0RGK0YzNHR2d3AvRjM4RDM0Z2Z4M3drTWdpN0JtdUJCNEJCbUV0SUk4d25GaEFyQ0hzSlJ3am5DTFVJLzRRT1JTTlFnbWhOZGlhSEVSR0k2Y1NHeGpMaVYyRWhzSTNZVCs0aERKQkpKbTJSTjhpSkZrcmdrR2FtWXRKbTBuM1NLZEozVVQvcEVwcEVOeUk3a1lISVNXVXhlVHE0Zzd5T2ZKRjhuUHlNUFUxUW9waFFQU2lTRlQxbEFXVVBaVFdtbFhLUDBVNGFwcWxSenFoYzFscHBPWFVhdHBEWlF6MUVmVXQvUmFEUWptanR0QmsxRVcwcXJwQjJrWGFEMTBqN1QxZWhXOUFENmJMcWN2cHBlUzIrajM2Ty9ZekFZWmd4ZlJoSkR4bGpOcUdPY1lUeG1mRkppS3RrcGNaVDRTb1ZLMVVwTlN0ZVZYaXRUbEUyVi9aVG5LaGNvVnlnZlZyNm0vRXFGb21LbUVxRENWVm1pVXExeVRPV095cEFxVTlWQk5WSTFTN1ZNZFovcVJkWG5haVExTTdVZ05iNWFrZG91dFROcWZVd2MwNWdad09ReFZ6QjNNODh4KzFsRWxqbUx3MHBubGJJT3NEcFpnK3BxNmxQVTQ5WHoxYXZWVDZqM2FPQTB6RFE0R3BrYWF6UU9hZHpXK0tLcHArbW5LZEJjcGRtZ2VWM3pvOVlrTFY4dGdWYUpWcVBXTGEwdjJtenRJTzBNN1hYYXpkcVBkUEE2VmpvemRPYnJiTk01cC9OcUVtdVM1eVRlcEpKSmh5YmQxMFYxclhTamRSZnE3dEs5b2p1a3A2OFhvaWZSMjZ4M1J1K1Z2b2ErcjM2Ni9nYjlrL29EQmt3RGJ3T1J3UWFEVXdZdjJPcHNQM1ltdTVKOWxqMW9xR3NZYWlnMzNHbllhVGhzWkc0VVo3VGNxTkhva1RIVjJNMDQxWGlEY2J2eG9JbUJ5VFNUUlNiMUp2ZE5LYVp1cGtMVFRhWWRwaC9Oek0wU3pGYWFOWnM5TjljeTU1Z1htTmViUDdSZ1dQaFk1RmpVV055MEpGcTZXV1pZYnJYc3NrS3RuSzJFVnRWVzE2eFJheGRya2ZWVzYyNGJnbzI3amRpbXh1YU9MZDNXenpiUHR0NjIxMDdETHNKdXVWMnozZXZKSnBPVEpxK2IzREg1dTcyemZhYjlidnNIRG1vT1lRN0xIVm9kM2pwYU9mSWNxeDF2T2pHY2dwMEtuVnFjM2t5eG5pS1lzbTNLWFdlbTh6VG5sYzd0enQ5Y1hGMmtMZzB1QTY0bXJzbXVXMXp2dUxIY290ekszQzY0RTl6OTNRdmRqN3QvOW5EeGtIa2M4dmpUMDlZenczT2Y1L09wNWxNRlUzZFA3Zk15OHVKNjdmVHE4V1o3SjN2djhPN3hNZlRoK3RUNFBQRTE5dVg3N3ZGOTVtZnBsKzYzMysrMXY3Mi8xUCtvLzhjQWo0REZBVzJCdU1DUXdKTEF6aUMxb0xpZ3FxREh3VWJCYWNIMXdZTWh6aUVMUTlwQ0NhSGhvZXRDNzNEME9EeE9IV2N3ekRWc2NkalpjSHA0VEhoVitKTUlxd2hwUk9zMGRGcll0UFhUSGs0M25TNmUzaHdKa1p6STlaR1Bvc3lqY3FKK25VR2NFVFdqZXNiVGFJZm9SZEVkTWN5WWVUSDdZajdFK3NldWlYMFFaeEVuajJ1UFY0NmZIVjhYL3pFaE1LRThvV2ZtNUptTFoxNU8xRWtVSmJZa2taTGlrL1lrRGMwS21yVnhWdjlzNTluRnMyL1BNWitUUCtmaVhKMjVtWE5QekZPZXg1MTNPSm1RbkpDOEwva3JONUpid3gxSzRhUnNTUm5rQmZBMjhWN3lmZmtiK0FNQ0wwRzU0Rm1xVjJwNTZ2TTByN1QxYVFOQ0gyR0Y4SlVvUUZRbGVwTWVtcjQ5L1dOR1pFWnR4a2htUW1aakZqa3JPZXVZV0UyY0lUNmJyWitkbjkwdHNaWVVTM3B5UEhJMjVneEt3NlY3Y3BIY09ia3RNaFpXekZ5Ulc4aC9rUGZtZWVkVjUzMmFIei8vY0w1cXZqai95Z0tyQmFzV1BDc0lMdmg1SVg0aGIySDdJc05GeXhiMUx2WmJ2SE1Kc2lSbFNYdWhjV0ZSWWYvU2tLVjdsMUdYWlN5N3V0eCtlZm55OXlzU1ZyUVc2UlV0TGVyN0llU0grbUtsWW1ueG5aV2VLN2YvaVA5UjlHUG5LcWRWbTFkOUwrR1hYQ3ExTDYwby9WckdLN3YwazhOUGxUK05yRTVkM2JuR1pjMjJ0Y1MxNHJXMzEvbXMyMXV1V2w1UTNyZCsydnFtRGV3TkpSdmViNXkzOFdMRmxJcnRtNmliNUp0NktpTXFXemFiYkY2NytXdVZzT3BXdFg5MTR4YmRMYXUyZk56SzMzcDltKysyaHUxNjIwdTNmOWtoMm5GM1o4ak9waHF6bW9wZHhGMTV1NTd1anQvZDhiUGJ6M1Y3ZFBhVTd2bFdLNjd0MlJ1OTkyeWRhMTNkUHQxOWErclJlbm45d1A3Wis3c09CQjVvYWJCdDJObW8wVmg2RUE3S0Q3NzRKZm1YMjRmQ0Q3VWZkanZjY01UMHlKYWp6S01sVFVqVGdxYkJabUZ6VDB0aVMvZXhzR1B0clo2dFIzKzErN1gydU9IeDZoUHFKOWFjcEo0c09qbHlxdURVVUp1azdkWHB0Tk45N2ZQYUg1eVplZWJtMlJsbk84K0ZuN3R3UHZqOG1RNi9qbE1YdkM0Y3YraHg4ZGdsdDB2TmwxMHVOMTF4dm5MMHF2UFZvNTB1blUzWFhLKzFkTGwzdFhaUDdUNTUzZWY2NlJ1Qk44N2Y1Tnk4Zkd2NnJlN2JjYmZ2M3BsOXArY3UvKzd6ZTVuMzN0elB1ei84WU9sRHdzT1NSeXFQS2g3clBxNzV6ZkszeGg2WG5oTzlnYjFYbnNROGVkREg2M3Y1ZSs3dlgvdUxuaktlVmp3emVGYjMzUEg1OFlIZ2dhNFhzMTcwdjVTOEhINVYvSWZxSDF0ZVc3dys4cWZ2bjFjR1p3NzJ2NUcrR1hsYjlrNzdYZTM3S2UvYmg2S0dIbi9JK2pEOHNlU1Q5cWU5bjkwK2QzeEorUEpzZVA1WDB0ZktiNWJmV3IrSGYzODRralV5SXVGS3VhTzFBQTU3b3FtcEFHOXJBUmlKV08zUUJVQlZHcXVCUnhYSVdOMk9zYUorVnpTRi9ZUEg2dVRSRVJlQVdsK0F1S1VBRVcwQTI3Qm1pakVkNnhYbFhLd3ZvRTVPRXczektDdzMxY2x4RkJDNkZDdE5QbzJNdk5NRElMVUNmSk9PakF4dkhSbjV0aHVyMWU4QnRPV00xZDRLTlZFRm9OeGNVNGxGdmxxSVRmc2Y5aC9jd3YyQk9peHBzd0FBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFqZHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlsaE5VQ0JEYjNKbElEVXVNUzR5SWo0S0lDQWdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBZ0lDQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpUGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBZVW1WemIyeDFkR2x2Ymo0M01qd3ZkR2xtWmpwWVVtVnpiMngxZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNldWSmxjMjlzZFhScGIyNCtOekk4TDNScFptWTZXVkpsYzI5c2RYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pa052YlhCeVpYTnphVzl1UGpFOEwzUnBabVk2UTI5dGNISmxjM05wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sQm9iM1J2YldWMGNtbGpTVzUwWlhKd2NtVjBZWFJwYjI0K01qd3ZkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLdXN0K0lRQUFLZlpKUkVGVWVBSHRmUWRnVlVYVy95L2xwYjMwWGtrSWtBQUpMUkI2VXdRUlZGQkFWRlJFMTY2ZnErdW5hOWxkM2YxYzk5dEY5MU5YM1Q4MnhMSTJ4TFlXUkJFUmtONFNBcVNSM252UGUwbit2ek0zTjNuRUJDa2hFdmNlZUczdTNKa3paODZjT1cxdTdONzlaR3ZiazIvdWhhdURIZHBnZ0VFQmd3SUdCYzR1QmV6WWZIMUxHKzViTmdaMjQ1YysxeWJDQjFKcWdFRUJnd0lHQmZxQ0F0UjJSQWpadXprYXdxY3Y2RzMwWVZEQW9JQU5CU2gyekpROTlvYlpaVU1VNDZ0QkFZTUNmVVlCa1QzMmZkYWIwWkZCQVlNQ0JnVzZVTUFRUUYwSVl2dzBLR0JRb084b1lBaWd2cU8xMFpOQkFZTUNYU2hnQ0tBdUJERitHaFF3S05CM0ZEQUVVTi9SMnVqSm9JQkJnUzRVTUFSUUY0SVlQdzBLR0JUb093b1lBcWp2YUczMFpGREFvRUFYQ2hnQ3FBdEJqSjhHQlF3SzlCMEZEQUhVZDdRMmVqSW9ZRkNnQ3dVTUFkU0ZJTVpQZ3dJR0JmcU9BbzY5MFpXRHZSMGNlYUJWcE5uWlBOclIwdG9HS3crd25jMCtlb01lUmhzR0JRd0tuQndGemtnQWlTQndwUENwYnJCaVYwRUQwTkRLa3JOMHJKN1NMU3pBaENGK0xyQmp4NFlRT3JrSk5tb1pGRGlYS1hCR0FraUVUMkYxTTZiRUJlR3Z2eDRCUDI4M3RMVzFpNGJla2tOc3pvNXRpZWF6Zlg4T1h2Z29DVDdPMUxiWXQ5N1Z1VXhnQXplREFnWUZlcWJBYVFzZ01idXFHeXlZRmgrTVIrK2VpK0FBejU1NzZhVXJDU09qRWVqbmpvZGYzSVl3ZHdlMFVqQVpRcWlYaUdzMFkxRGdaNkRBYVR1aFRmVDU3TXByeEtJNXc1VHdFYzJudGJXVkwvazgxVmNyV2xwYU83VW5JVVI3ZTFLdXRTZm1IWEQrMUdFWUhXNUdlYjBWRHFJYUdXQlF3S0JBdjZYQWFXdEFhdTNYdDhMSHcwVU5YZ1NRdmYycHl6TzV6ODZ1OHo2TFZSTTBZbUk1MkxUWDFxWUpHM2MzSjdpN09LS1JKcGtoZi9vdDN4bUlHeFJRRkRodEFhVHVwa3hvcFFEUjROUzFFVTM0MkNuL1RtcEdBWktQRnVCWVFaWHk3M2k2T1NQQTF3MGpZa01RSFJuRUxxUWZ6ZStqN21zdjBmbys5WGRua3dQc0tjR2tWUkY2TGRUZXpqV3dJMzVPanZZS1Q0a0FObHRiemhrVVpYTXdFVGVCazZXZlRuUGhtU2JMNlkzRnR0K2VpQ0djZUM3UlMzaE0vS1ZPamc0S1pTdTErbWErVG4zRjlEVGkweXNYTjRySkJpZkJxNi9oekFRUXNiVTdUVExxd3FldW9SbXZmL0FEYm50dEw4eHRMUWgxcFcrSGk4M05aSStESDFiaXFYK094ejIzekZXK0h0RjQxS1NkOGN5MTRhdGpKV2lyYVJUT3dPZ1FMM2k3dTU1VC9pUVpxOFZxd1hjNWxXaXRhVVlRaFhGc29PZHgybUpmTTR2ZW4rQldXbE9IQS9sVnFtaGtxQmQ4U1Q5T20xcG9KZ2NSVE54WUtOUkZPSWtpSytiNStveFNvTGFKeitKMHhyUndYNlhoeXVJOFdaQit5OWp2ZnRYdkNlNmtnQXRrUUdTWStDVnR0T3VUN2FjMzZ3bVdzdERMYXh1d0w3ZENkbXhFQjNraXlzK0Q5S0VXMzV1ZG5VSmJSQWtWZFEzWW0xdkp1OXJJV3g0STlYWlhjM2dLelp4eDFUTVdRS2VMZ2V6dUF1OThzaE8zUGJNZEZ3N3pRQnZMcEZRdXljNWZOTGNWSHU3T3FsNnZ2Ykh4cHFaRy9QWThYN2k3MnRIM0JLUmtOK0JZZVF1Y1RZN0grNkY2cmROVGEwaG9JRHU0cTRNRjk4M3dnWmU3Q2NVVlRkaWIyWXcyQjZZaG5GcHp2VnBiNXEycDJZTDRFRHNzbWhDczJqNlMzWWlNTWl2Y25FMG9xNjdGL2h3S0dxNjhtQkJ2aFB0NXdkTENlVzF0eGlOekFrQUxHdHh6c0NtcGdjenV5cmsrZ1NDeHdWenZOeTdVRG9zbmhyQjUzcWYrZDdtZlArM3BueXlyWW1wSXVnVU9qdUlpNkZMSHB0MnovVlg4bExXTlZnd1B0c2VTU1dHS3QzT0ttN0U5b3hsZUpJWnN0bjBOUXNzR2l4VXhBZUFjaHBJNnJjZ3ViTWFCWEF0Y25aMzZkQTM4TEFKSTEzN1NzMHJ4enBjcG1ETFFEVmJPZzVXN1pXbWRCWVhNSi9KM3RrZnh0bHJVTDdMMDJ2eVE3Z1E3RkZIenVlL09HK0RyNjZYYVh2UDJldHovNmdHTUNQYmdZdWw3aHVnNlFBY3VvS282SzJLalBQRGJlNWJDeDlzVDZabTV1T1BSdGFodW9tQnlzbGNDcXV0OWZmRmJUSW1reWtiY2ZlVTRMTDNzUE5YbE8rczI0cjVWZXhEcVlZZUpNV2JjdVRCS0xiUWp4eXF4Zm44ZHpDNzAyem0yNGNGN2xzUE56UlVORFkzWWRlc0xLRzNrQnNONUZtSDdVeUQ5SG1LL2R5d1pnMldMTC9pcDZraEx6OEh5aDk1Rkc5dDJvdVZ6RWwzOFpKdW5VOEdabXZ6R0k3VzQ4L0lFWEhmbEhOWEU5bDFKZU9IcXRiaG9XaWpxbTZ5bjArd1ozU01CcEQxRmpiaHhmaHgrZGUxRnFxMk4zKzNCaTcvN0VyTUh1dlNwcWY4ekNTQk55OG5LTGNiNjdEcGNHT1pNbTVoL3BxTzVGWXRuRHNhMGNkSHdwblBiMWNVRWYxOTNSU0JOZUp3UjNUdHVGdlhUS3FvUFFVd0RXUUJTZGpJZzZyVDRqdVFsSVA0TWVYVzNpS1NLK0N5a2JkbDFWTDEyQWFmbk1Vbi9YWmNmbTFOYVRwdTlFMnJyTFJSQXBFMWpDK3dkbldEWDNLWlVlcmxmZGsrcHE3TFFwUk4rbHo1RXRUL1J6aXE0eXppa0U2bG5pN3NqelNjMU5MWWxKcFMwTDZEdUllTTZjanhlVGlZMFdlM1IzTzdIa2U4QjNNMTNGRGZndjBSQUxORUV4TWJ2ZHVOdm42L0g3R0hNRCtNK1ltMzNZY21uME1PWldxNExGNmlRcEkzdUIrblBGaGV0NTg1MzBTWmFUM0tEYUdYUXd0Nk9HaTMvU1pCREJKamNMeFlaaDYzRzFST3RaUHoyckNpV3BId1hHc2lyaFcvZDBWVUZUS1J0ZWJGdG5SL2tVd0hia1dpdUR1cTdpd1BuelY1cCtsSXVsN3Z6UStxNGlCbkwvNHBYVG9TTHROWEpvNTMxZFp6a3VtQWxmd3pIbHRZS0orRUpSUytaWjM3bmY5V1hEUi9JL2IwSlA0c0EwZ2ZRM0VSL1FHVVRURkZ1eUtxb3g5eXhZZml2NjgrRHI1ZXJYdVdzZkxhenhTbTFMY3dsREZsVlY0KzAwa3BVbHRXcSsvMERQQkR0NXcxUDd1eXk4RHQ0anZYYjZOUEtMNnRFU2tFNXVHSUJIek1taGZpcmlTMnBydWNDZElDUHV4c1pVUlpLSndoam1KMGRrRlZVaTBlZldnc1hKenZVVUN0c3BJRG1Dc1RSL0RMazBZNko4L1ZnUFVkc3pDNEJ0dFBzRVJqbmkvRjAycHRkTlorTVZ0ajVMZ3hkVlZlSFEyVlZrRjRqUE13STl2SGlvcEU2YmNnc0trVmhmUVBjVFNiRUJQckMwZEZFUG14RGRYMGRqcFpXMFV4bVJycTdHUjkrbll5dHU0K3FCVmRVYVlXM0N4dllsQTNyemNNNk9tdHI0NWkzcDZJdzJCRWhIcG9EVmwxa0d5MHRGbnlmUnB5UGxRSEZsRTZqdkRBMk9nU2Vack1TU0t6U0krZ2FkRFg5UVp1MkpzRmtFck5CcjA0QjdlQ0FuUHh5bW1MRW5ZS2tqVFRMTEsxQVppNzdTcTVtUmRMUmk3YmdVQjhraGdmQ2czT255d2NSSm5ac3JMU3lDZ2VLT1c5MTVGRUdMSUo4T00vK1huQnpjVkZCRTcwM0VmNTFwTmVoa2dwVVY5WnhZRzN3OGZmQTBBQWZ1TGxxRVdLOXJ2NHB2SVRDT3ByK2VVakxvMStJcG10OHFCLzlWcDRVY0pxQWtMb2FMcTAwYTZ1eG56ekh4RHVSTGdqa3BpdzhaMmI3a3FDcmcrSlJtclNWbk44VTFxOFhmRGhESHVTN1dOYjNNcnNwMmg3SGJQck44c21tWk1Oc2FHckEwWkpLRkRjMTgwL25tT2hMOHlJUE92ZDRtMjBUcC9yOVp4VkFvaDRMUlVUYUhxNnc0SzRJT2pNcGZJVEJiRUZObUcxQkgzOFhmbWx0c1dKelpqNW1oclRpd1FXeGlCa1VydkJNU2MzR2wxdU9Za3VtQ1JNaVFqbmZva0hRVDJKcFFscEJQaFlrK09EM3kyZFFtM05CVm00Ulh2OWtMN1U3TnlTTzh1WkV0eUtMdnBNR3E0UGF0ZlJSYS8wQkx2WjB5dnM2MGJkaWo2cmFOdHJwMUliYzdERjNYRGdYcWdsSE1rdXc5V0F1WHJwOU1zYXVHcW9ZNk9DaE5Mejk2VjdrMWJUQTE5UGp1QjFiMm0yZ3FqbDJrRHV1bVJYRWF5MG9MRzNBbC90cUVlamxnWXFhU2l5YkhrajhuT2c4YnNQWHUwclEwT0pBUEpzUkgyYVBxNmlkQ29ObThkaE5XVlU5QnZoclRObklvemlPbkxQZlBCS0w4RkRmanRueDluTEhnNCtOb1ZucmdpMUpGSktDQUVIbXZhUWtINDlmRVk4THBpK0NpNHN6VXRPejhTLzZBdzhYdHlEWTE1c0xpeXV4TzlDYVVGZHFhK3R4NlozL3hvQ2hnUlQrTFdweGlaWlRibWxGTUlWMmxBODFhODdENGJ3OHJKZ1JpcWwzVE1DZ3FEQ1ZMbExEalNUcFVBYldmbmtBV2VWTkZNSlVNN2xZbTdncGJzM094VFdqUFBIckplUGhRN28wTmpjak5TTVBuMnhLeGJFcVR3d0k4RmNDV3pha293WEZpSFNyeDhNTFl4bXREYUh3czhlUjlGeXMvVG9GUnlzOU1IS0E1aWV6SFVwek00TWZKVm00YStIRkNPZUcxTkRZaEs4M0g4U3JlN0l3TXpxQ1ZiWElaeFA3M1pXVGh3V3hMdmpWUlhFSURmYUhoYjZiMUl4Y2ZMWTVGU25sWnNRRUIxSXdhTnFYOE9qTzNIeE1Ed091V2h5THlIQ0pIZ09aMllYWXNQVUlmc2hpd0NVOGhJS1p2aWN5bXcwcFdVc0wvTlRXMTZPcHZnUTNYeEFCZDdNclRNNW03RXFwSkM4M1VrNVNtT3RNcWxvKzg3YytGVUFhOGpJQ2ViVVB2NTBwWlNnNlFhU2VYdnh6Q3g4ZHI0eWlRankzWWpRdXUrUjgrUHY3S2lhV2E1ZlNsRnV4ckJUdnJ0dUFKOTQ3alBnQllVcmR6aTh0eEtyNzUrRENXVlBWQXBPNkFyUFBtNEN5OGdwTW1UUU9SY1ZsK01zL1BzSEc1Qm9FdURzcERVcnFpTGtqVHNMWUVHZmN1bUlCd2tJQ2tYdzRBMXNmWFFjL1R4ZmNzR3crd2tJRHNXdlBRZHg4clFOR2p4d3V0eWtZUFNvTzQ4ZU53SzhmZXh0VnpWYnVYSTRkUWtpaVU3c3JHN0I0ZWpodXYya2VuSjJja0p5U2hqZTJ2c1hkMFJYUmdVNjQ3Y2FGQ0FrS1FDTVhSYzFUYjJQdDlncjZLUnF4ZU41VVhEeDNLaG9wakZhL3RaNTl0ZUhtNWZPVkVGNzlyL1hZZjdnQWYzem9hclhyNnhyS21GSERrVEE2RG9jT1oyTGxWYXZVdUJTU25Pai8rOTFWbURabHZJWTAzMGVPR0k2eFkrSngvK052STcyc2tjcWljd2M5T2lyOTZBc1pKYTBRK2R3VXhIeFR3QTF0bUs4bndyamppeERMTHl2Qm1rZm1rKzZUNE1UeDJzTEU4UWs0YjNvaS92alUrMGloRnVaR1RhZW1waGp2M1Q4THM4K2ZEQyt2enV4K3E5VksweklmVDY5YWh5LzJWeUFxeUI5Sk9RVzRjcUkzN3I3bFJneVF6YWVkZzhXc3ZtSmhEdjdmNmsreGZoKzFLQzVjVy9EMk5DTXArUStJR3g3YlVUei93aG1ZOHZFM2VIVE5Yc1NHaHRBUFkwVlZGVGVzZTJkaXppd05GMzB0V0hqdHVpdUw4TXFibitMMWJ3dUppMndtcmNndEtjTEs1YU54K2FYa1ViOU9IbTBoajE1M1pUbDU5Q3Y4L1lNVURBNE5vd21tcGFEb0NOaHhZNm12cVVkT1N5bFdQN1lJMHlhUFV6eStjVXNTUHQ2NlJabjVzajVsNWZZbTlLa0Ewb1NLSnExbEVHSURhem9oZjVCL0pIb2hJS3JudVFLU3UvRlZlZ0grZVVNQ2JscStVRTFLUTJNejBqSUxsRFlRTXpnTUlTRkJYTkJYY0ZkNUQwOStuSVZpYWhtcmI1K09CZk5ucVdFME5GQWJPbGJJOFRvZ05tWlF4L2c4YU1wSUxvM3lGZGdNMmVZcm5HZ0tDWmdjS1VqYVo5K0ZrUW9CV2R4TkZES0hqdVRRaEdoQkxIR1IrckZEb3JGMC9oamM4ZkpCVEFuM1JqT3ZDWWovSXNiVENic09GYU9FNWxSNGFBQ0NBdjF3V1VJUVh0aGNocFhMaHNCUGFRTFV2cWlWakJnYWhzZS96TU04T2laakI4dk9ERFN6di9VL0hNUEM4Mk1WTGFSTWNrbkthMXV4TnlrTEE4UDlFQ3BtSnFHWVprQnBlUzFTTTBzUkdXQldaZkxtNmVHT2llUEhJcGw0eThJZVF0Tkx6SldveUhBc21aZUFLMVp1dzV3aFl0SnFlSGZjMk9XTEs1M2J6encvRGM3T2pKUnkxeEw2bUNoRXNndHE4TzJCR3V3cGFjSnpOMDZETEc2QnZJSXliTjUraEZxT0ZWUEdEOGJnZ2FFWUZCMkpXNitiZzhuM2ZZcEkxeGFzdkcwbUZpK2NyZXJYTWt4OWxQbHBadWFreFE0S1EvVEFBWGprM210UTlhYzM4TnFlUXZ6bS9BQThlUGRWOFBQelFUMU40dlJqUlJSeUR0U3lnbGszRXZmY2RnVksvL0ltOWlWWFVqSFdabFVFeFNodUdMVjFqVGh3S0V2NU9ZZEVoOEtiNXRmVlMrWWlnNEdaVC9iVW9LeTJGay9kT2gxWExMcFE0VkxOTUg2YWpndm5lUUEzdW52dldJYWEralhZa0ZTUEd2TGszWmZINGFickZ5a1R0S25KZ3BTMExNVnpRMWsvaUp2S3JUY3VvVGIzRGw3a25MclRiTFhsTTZ1Rm9VbWF5MnMyL3hyVHB5YXFQcmZ2T1lySC9ybVp3cENCRDlLMXc2ZWxydmJPVzU4S29IYyszRXBtTEtIdDZrUWkyZUVJN2YrRUlXWVN6NHJFVUZkOHZ5ZVg2dWdYU29NUVIxcDFYVE1tam8zR25Ca2plbWUwcDlpS0NNTGFSZ3ZtRDNJakUwOVdDNjYrdmhHdnZQVU4vdmVqVkxod0RBOHZqY05WbDhzaWNNTEMrZFB4M3NZMUdNSEZOSFhTYU5XYjFGL3ozaVk4K200S0o5MGU5MTBXaSt1WG5zY0ZMbWFPdFYwN3NXV0Y0NUVVaGhXUVQ3MldyYlB5emZlL3hVMnZKeVBPYkk5Ly9HWW1aazRacGVvUEd6SUE5Ulc3WUsvSkRWVW1QaW8vaHZUZjRRNStKOVZ5RVVEKzFCUVM0cWl6LzNVZkV2NHlod3ZJcE5HZm04UHcyRWphR09zeGJHWXNoWVBzOEVCK1lTbldiUzdCb3RtZHZoN0pnTjk3ckFaVHIzd2ZxLzhuRWN1djBxSTlZdUpjTVBORGpMMGlERU9EekIwTUxBR0E5ei81SG5lL3RCY2xQRS80K1NNek1YZVd4dlNSRWNGSUNIUkdJeDNjc2gvcFFsZDFMbThVTXJvbTRPM3RqVHR2dmFiekVpdmJFKys5QjFLeGJ2dkhyR3JQaGUzTFJWMmtCUFRxdDcvRm54L2F6L29sK084L1RNQmZINzFGM1J2Zzd3TnNyc1Rsand6QjNBc21xN0x5aW1vOCs4b0dQUGRORGdKNStQbFphaUxuVFIySmdBQS96SitWZ05jK1g0ZGJsMSt2aEU5eFNUbFdQcjhPZjNzOWpidG5HMTU4WkNvMWpnc1JIQnlBNVV1bTQ1V25YMVZPYldsWWFGWEZWSVZuWGxxUEo5Wm5ZNVNQQ2Y5NzEzUk1uendDcnVTYlJaZE13WjkvL3hMdS9PMFFYRFJuaXNLbG9ySUdUNys4SGs5dXlNRkFzd1ArZEdNaUxybHdQRHc5M2JHQ3RINXF4V3BjUE13TFN4Yk9Vc0pITnJ4WE9kYUgzMHVCRDNsT2VIVFpvbW1RamV2S3kyZGh3NDQxV00rUWU0ZVp3VjdzN0Zyd3hWZTNkQWlmelQ4azQrNG52MUdha2lkUEhnanZuQTNvVXdHMGc2ZlpuMXFaQ3I4cDdpampXYTU0K2hBQ3VTREUzK0JPcCt2aC9EcThzVGVabmpCbWpkSm4yWnphaERlZjFoamYxaXc3RzRUb3JrMEpWMjZpaitUSlJZTVE2TytucXFRY3pjWUQ3eVpqZktDN2lpSTh1R1lQRXNkRUkyN29RTzc4Z1pnMk1rVFZFek5HSURlL0JQZThzUitUZ2ozcEMybkZuOTdlajhUUlVSZzdTbE8vZFZOVFZUN0JtNzdvYkt2azVoZmowMitQWUJKOUhkdUs2N0ZyWDNxSEFESzcwUUZLSDFQWCs0U09KakxVd1pSY2pFOFlxZ1JPZUFqSE50Q1oycERtdnptV25ZOUJBOE01bmdERWpITENvQUYrMUN3MFRXd24rK0FFZFFoRGhROEZoVEl5UWt5czEybHVpSU1XbzV6cG9LYVdwNXlsR2hPTGViZDJmUktpNld2eVo3T2J0aDNHbEFuRG1mTmxWbXRDY3NBRXorTTdzUjI1OWwxTVBZdE5kcmo4ZHFFQUV2ZFJTNXNEeGdlNzRPOXY3TUMzNmV1VXMzdktCQi9jY0pjM3dvSUdZUGJNTVIwTmlvbENic1BvK0VpNEV3ZUJmUWZUOE9qTHliaG9VakR5eWh1dzVzTjlqRVJhbFNhYVhWaURlNjRhanVBZ2pTY0tpNHJSWnEzQlk3K0tWRDZhb3VKQ2xGZFU4Ym8vd3NQb2g1bEVjNUNialE0SEQyWGk5eThtWS82VVlPekpJODkvdUIwajQ2TGdUWCtUOE5DWVM3a3BFQmZSRkFYMko2WGpzZGRTTUM4eENMa1ZqWGoycmUza24yaHVJSUdJSEJDQ3hhTjlNVEltdUFNZjhSSGQ4ZW9leklyeVVXa2xONzI4RTVQR0R1S0dFcVdFNHRReEE3Q2U0OU41UStnMmFjSVlhcUZhOENlTi9yZzdIditBbXA4UGp6Mlp6bXJXZHA4S0lIOGZOeVRNOVVaMEFOVnJNcVE0UkNYMExud3FrUjl2WmtFdkhPcWxpQzVFYVlqd1FGU0VwczZyd3JQNHBzTHF4SVAvQ1dJZlM3aWJDNmU4R1JHTVVJaG1JRkJXenVoQ2FUUGNJalRTRlI1cVJDVjNLQUhSZ3NLRGZWQlJWY2VGcUYydnAxT3ZrZHFCT2NxWGp1bFdPRk9yS2l1WFNNenBnNzRYaVluUXlEYmRxVTF4aTVYL0hTRDRkN2VBeFMrU1NQcHYySkdGSlF2cW1lYmdSU1lPeHMwTHd4RVk0RXNUeTRKL2I5aURhNWQ0Y1FHWU1XOXNFQmRIcEdxM2lmNmZYUWR5QUxjZnMwMW4xNTNmZER3N2tHci9JazVvTVZtY0hGMlYzMFhtWGc5dmM5cVZYNm5yUFIyLzJiendoaXdlV2VUUHZQUWwzQmc1a3pLNVY4ejZvckk2K05HSEpOR3Y1THdjUExOOEJNNm5yOGVQMnA3NHZjeXNML01wV21YbitVVjcwa0x6K1lpd09KeWFSL1BNclB4SUFSU1VxWGsxdUpoNU1nd2RjbGRweEhPUGpJTlR1eWtjTjJ3SW52akQ0QTRVWmR4aU1ndjRVN3RhUERLSXpuQk5BRW1mT1huRlFERHhZOFZCUGs3SUthcERBVFZMRVVDT05HZUhSWGpDbDFFM0FSR09SOUx5RUIzQlhEbmU2OGZnUTNWREhiSnlSSU1OVkJyUElHYVZCL296UzU3OEtwQkdoL2xBRHhQSHhsUUh2Z2E3T2pLUExFOEpJT0h6a0NCcWZMSTVxZHBrRTVhSjhOY2hsSnJ4NG1saFdQbEZQaVlPQ095b3AxL3Z6YzhmYzFKdnR0NmxyZnhpMnVYdmwyRFBaQkszd29xb1FhNFk1TXRJQlRVZzBUWkthaTNZc0xzU2NDVWh5emxoa1M1WUZhUUpwQzVOOWVwUDBVS2NxRHFMSUd4VmN5Z3NwQlF4dGJDMVgzcVhzcjFhT25ZUDhMZ0U3OUl2c3B4aFRBbVh0NE9UQ0NJL09lMHZ1eXpEM05WVjlOUG9VNi9YT3IxUFlTWnBTZVZ6ZEZHUlZRL0hJNjQ2a1dxdVZDODNwbGZqV0ZhaEpvQm85a3lpRmlmbVdGVlZMZFo4a1lLTDV5UXkvOGdEVThZTm9STmMwK2JTR0FWTXk2dUZuWmVXWDJPTHRlcEtWcFM4MmtGaHgzd1hFZVRNU0RnZWlMdmsxWWhxYjBzTm1ZdVRCUkdXZjFxVmhJaWhBYkJ3Y1VyUFRXeFBqdk9FZWJ2Z0t4NzllUGVlV2NvcEs2SDV1dm9tWk5CUGN6anRNRnFzalRSSFp0cDBwVVV2OVFKSm9aQjVWV0Y4dEtEVlVvYzVrUTBxSlNLRGNrcUZ5TnN4TDJZSVBqdXZqT1lmNTVwamtnVnRzVmo0dFlYK3BsYVUxOUVZYkJjT2FsZVFwQ2Z5ZzlTVGw2UXJpQURWd2M1ZUFnZjZMMm5TeXA0b0xNbGJkbmFTbTBYY3BBMkMzTmJDNTlLMDZjK21VZTNKZGExOXJVNEw2N1hYWjRGcTIzYTNrakkybEp0WHdraWJyOUtFcmwwNkI5djJ2NElLcGhpWTZROVVQQ2FOOVRMMHFRQmFjY1VFWERZbm51bnhEdHlKSExGbFp6cWUrdlFvUmdhNU12TFJoSVdKSVhqK2dSRktyWlpkVWh5S29Uei9KRUM2bmpWb3JLOUY1bWNIa1RQUkY5WW1UcDcweFlsMWQ2WFcwK1pHcDJZVkdhbFphVGcrUEM4RHB6cFVNZ1NzZkRIZVRmQmlWRU5BYk8vQ3NnWmtVSzB1SzYrQ0g3V0xVTzVTZDgzMHc3T3Y3ZWZLdDZQcVBvUWF4UkJWWDVqdlRFSGoyMU5yUjJxN1V6QnUyWm1LY1dOaWxjTjVGcU5FQW9mVGNyRjdldzN5eUl3U1ZwNCtaUnhjNkpzUU9FS3Q0RHMrZ2lYR0xBdE5GWjN3eldvVngyWTJDdW5mQytuY1lMVjdiQmJjU1RUVmJUOGlCSVlNTmZOc0ZWTTMyZ1dRWGxFeWpDK0lOTlBaUFZKcENhWE14L3JqMzlmaDJlK1pDN1NqRWc4OE1LQkRBR25VazFRSDRrdHdwUFlTRnh1RzlJM2ZJbnF4Rzdibmx1T2FNZTc0OVMzTDZVZHhKdDJPWUhkU3Jvb0lpcWFibnBuRHFOSEx3TlJ3T0ZDNHQreWhoaFBiak1sQkx2RDA4c00zUnkyNFpxNldCeVU0UjRwV3Z6a2ZsbWd2Yk00cHg4M2p6RXFia2I0bElUQ2p4SUtLYW9icUNTSTQ0MkxDa2I3NUcwUmZ4bnc1NXA5Rm11c3hzTjBuSnhyVk1XWTFlM28wVXNob3dpOTJjRGh6bmo1RkdGTmF4TkpJS3lsbDJnajlmQVNwVTFoYXh5akQ4WnRJY2tvbUxyNy9mWHkyY2luZENaRnNQeHozM25nQjV0ejdFV2FQanY1bENLQ0VrWU1VRWZRMzJaSHluei9BL0JsM3BESmlFUlBsaDhuam1jOXlsdUg0NVdySEVPMDRmTGM1UWdsR2ZXR0pDU09NK01sWEIvRHV4Z3dzWFZCTlRjQ2Zrek1JVDk4d0dvKy9zVTNsTDYyNmNRYUdESXBVR0JjVWxlUDdwRkprVjFtNGtQTVlhZUVoVjZyVkQ5OXpMYVlrN3FBUXRjY2NobmU5dlRXdFR2QTQyY1ZudTBPcWJhK0RScDB0Mk5aUjYvdjRnWGJjSWIyYUtkd1BIaTJDSlBPSnFSWEIvQkNCdE14Q2FteHUySGNvQnhNVGh5TXdVRE9CYXlod2R5ZGxJMVFZdDFWMmJOdm0yclVZeVQ3dTJPbEJzOEFiMTk4V3lGeWlaaFJWc1g3N1BiYTNhakpZU3JUUzQ5cTE2YUxqSzZ2cEMwMCtLNmx0TnZNSWo2MEFrZ0JHQTAzVElUd2tLM01vVU0rZFBDc3JFK0NDZHh6Umh1a1ROVWU1WEZQbUt2MWFPdy9rWXQ0c2pSNGo0Mkx3NEFPRHNlckxRNGlubWJUaXlrc3dsQkZNZ2MwNzB2RDNid3B4NTRvcW1pNXVHQlVmZzVWUEorTEZqL2JTQkxUREpYY1B4QTNYWG9vSStuKzJVbGg5TVgydDBwalV6WHlMSHg2RHgvODJDbysrdHdmai9KeHhGYU51NGxBV2tFamR0cjIxek5VcXBMTzZUbTF1OFhHRDhjajlzWGpoOHhSNGNEaTMzM3dKL1QyYVZwcEpMZmFEb3pVMDhTUkFVRTVCNWsvL1hRU2V1WDBzL3ZqNlZ0WG1QeGxOa3dpamFwOUpyRDhrVVVCNm0wZ3pqZVphZVFteTk5QWY5Y0YyL082ZUlCV1ZuRGFaYlN3N2pQLzVkeTVtUk5HTUpKMTdHL3BVQTlMdC9GYXFneEtTbGxBaGpWU05tZWw0MUZQN1pSZlF0UVBaTVhvWGhOMWtvV2p0eXFlRVl1WFZIUnloR3YvNEs4ZXc0YnNrWExONG1qckxkTXNOaXpGalNvS0t1QXhseU50RWY0S1lBMTlzUElETVNndkNhWCsvK001T0JOR25Nbmhnc0FxQkxsMDBYelZmVmxHRG96eW5GRE1vb24zSlNYRW5JeHlIQTFlbnZxRDFUNkdML2wyTlFWWncrNnJWeTZVTjliMzlHVXJIdGNrZm9rNEgwZm0vOTFndGZSM2lqTlljNHJLZ003SktlRnJkaEgySGkxU1VUdmRsVmRJMCs0N0poQU84blprczJOeEJQNzB2Qzl2MDllU2hXVHBzZFlqbkluNzErY2VZYTVTQitLdGYxQVE4TDZwaklPM21pNkF1Z2xuSFhadVg3dWRjcUNUaDdNNjY1SjMyZHZRKzVWUE1DVSthWVh1emFsRmJTMDJDZnVBQkVTSDQ2KytXNDhiVVRQcTh3akJxUkdjVVQvSGFLQk0yN0MvRjlPK1RzZUNpOGVxYzRFTy9XWUhMTDA2bmFlckRCUnlodWtnL1ZvRDMxaCtoV1dMQzJuL3Z4aDByWnNPREF2enUyNWN4WDJlQ01yVmp5QlBpMEcwa2YyL2ZsMDFKTEJuWjJwaEVZeEdCLzhBOTF6UGlOcEdKanA0WXlQQytnR2pRbjJ4SXdzamhYdmdtdVp6SmlVbTRmUDRFbXNKZStPMjkxK1BTaTFLVnIwWlNPYVE5Q2VXL3c2VFRrVjdPek03bnZWL3RZMHJCTEJWTnUrV0dKZFRLUnROc3M4TncrcWhFRU11NituajlYdVF5Y3oyQ3ByR09rL1F0UGpHL2VETmUzNUtQR1JPVE1mZjhzVW96WG5IMVBPeEtYbzBjbnAvMGRaZk02OTRWUW4wcWdQUkYzKzVvMFFqUUlZVkZmUlJTdE52WCtnK3RxTmZlaGVGTlBGTmxwZDlKUUR1WHBJa0E2VjRyMWI2SVE5RFNZbyt3R0EvODMzc0htUkZzeGFWekVwU2RQR3BrSndObjU1WGl3ODkzNDVtUG1PVGxLNmZWVy9IYTVuUnFROC9oNGVzbWNlZU01Z1E3b2FxbUFXK3MyNGFGczRacUFvaklhSXZwK0FXbjQyRHZ3R1E4RlQzUzdIeDdrelBzVkpsZ0xtZW51SEFkblNXQUkwVGp3dFBVZkxtbVhFNU04YmZWaXFSY1FFZ3VaN0EyTVJTYmZDU2ZVYnhZUmZ2TTdDSWtaVlpoREUybUl6UWpzM0pMTUd3SUJTWHhURG1haCs5ekdqR1ArVGxFZ2tjeU9rOXl0OW1aVU04VDcyTm9DbjJ3S1lzbXhpNXFHRU81ME54b1FuQ2hNT0lKYW9KeTJGaEFIdEZoeDJ4YzhGeWJXZ1F5cHZiNWtPaVZBK2VuYzBiVUxlcTNvNzNXcjh5WnpJM2M0OEo4RmlXQWJTWlB6VEdkMFJVTmJWajcyUjdjZUpVN0FuaU1RaGF1dktUL0xUc09NOEFSUUszV0Q0NXNZMlo4QUFXelBaNVl2Wk1iWVN0bVRZdFRqdUJ4Q1NNVkFtSnU3enVZaVZWdmIyVWt5b0xKb1dZOC8xbWFjall2WFRDZWpsMWZqSWpyMU40TGl5dVlmckVGYjN4OWpFYys2RUFtSHdsWW1GNndiWGN5Qmc0SVloNVh2Q3FUdC9LS1dyejkwVGE4dlpsYXBxZm1jL2t6Y1JGY0w1Z2V6L3dzRHlTT0hhWHFpNEROWUY3Wm0rdDJZTzNXWElSVEFFblpzK3NPS1QvUnBSZU9WdmpZSnFpS1pyWHVpejE0Z1M0UDJVUktHZEdUZVJNUWVsbnBRK0l6UmpHWUVkVi92TFVMdzJJaW1Fa2R5Q2hlTUc2L2JqWnVmWElUazBNMWNhL3pwN3I1RE4vc1ppeDcvclRha3hQWlgreXR4STZYTDBkaXdoQVZ4ZWdRTUQrQmxHaENVdmR6Umx2bVBmQVZGbzd6dzRkTTkzNytobEc0N2ZyWml1RnRwYk0wSjR0QXlpUVYvZGFIM3NLMjFFcUU4anlQdmtCL29zdmpMc3NDakExenAwTlJrcXYwU3gxZjlBTFZYMTVKUFpQQ0xNcEpubHJlaUVsUm5raU1EK0ZqYUxVb1JRNzlRMXYyNWVFUUQySU81TVRLQnRITXBLNUYweGtXOVhkRlNWa05Qdmo2Q0RhWGNJVTBrd25UaTdGei9XMzB2Y1JCOGp2dWYrSjk3TTJncXMxSWhhMmpUNWpDaVVJaUt0Q05qMGh3NUZrc0MyMTlSdGU0c0tLQzNIZzh3eEZWTE10aStGMW9JODVjSHpjVG9vSWxsRzFISHhVVDQzamV5SW1uRHFXdHJpRHlYV2duL1VZd1IwZmFyYWhwUWpiVER2UzFITXp4QlBtNHFrV1FYVnpIbkNnZWlPVkZjUjRIY0pHRStHcGgyd0pxUGNWVlBOUEhOaVIvcDRudERpZDl2WmpkTFhOZHdtdEZQTWsrbk5FZEo1cCtvdWtlWVZSSjBaNjR1VGs3WUFESEtROHNLeWNPdWNTaE83RHRWL2luZ1l2b2FINk4ydVc3cXkrYVZsR05CV01IZW1MS1dJYlkzWng0andWN0QrVmpJN1c1aEVoR216Z09PZWg3ak9PVHhTNjB5dUVmV3BnUjY0UEpZeUtveVFpUDBjOUMwKzJUSDNLVWFSZkNxSmpRVzJoUlZNdU1kUXJlS1dQQ0ZVL0llSXRMYTdIOVlCNzI1OVloZ2p3cWtjb0FKb0JHQkRJWGl0ZVRzcXE0bUIxeDN2Z29QblRQckpKSnY5K2RoWTJIeXhIWkxreGtmaWp6a0UxY1poS1hzZkdocEtlTG11dGp1Ulg0Zm44K2NpcWJLYXljRk4vSW5NazltU3hMalBUQXBGRmhrS2d6UzVGZlZJMXRCL0tRVk5DQUFWN2NsRmdxYysvSGNZUUhTQjArMzRsemxFdi9wUndRcnVMUm1oZzY3Znk4dFA0a1RlWndUclZxWDFYdXhiZi9TQUVrazFYRXgzNDBXQ1RVcnUyMTNkRlVtREdJak9MQ1NaRkprMGhkQlhmemtnWkdSZFNxcGpuQXhvTGNITlJDRnFhVTArSWJjbXV3L1crWGRKZzJXN2J0eHZPdmZvcVN5am9zV3pBWlN4ZGRwTlRiSTNUNFh2N2ZhMmtPeVprcS9wTk9iRUQ2S09Wak9lcklBTjRVK0Q0TWYzY3Q4MmFaem53U1RTeWdzQ1FhOEtacDY2dnEyelRZNWFzd3JOeFRURnB3amZDdmpmQ2tPd1dTRHJWMHlKZHhySEpXTDRCdE9UTjZKempLZlJMcEt4SE5oaURYWkVPU2Z1VXNsb3hGbnRsZDB4NE45S082Nzg1WFFiVkZQVXBYRWppRGFLWUszZ0lpZUVzNHpnWlpGS3pueVZkM29QZGJ5Z1VpZ2w0ZVdoZm9UcDlVRjdyWjNpdENTSEFwNFQwU2xSUGNQTlY5SnJYUXloaWw4dUM0L0RnR0ZWVWtVaklHZVN4TUtRV1RpdVR4SGhQYkNlZGlkNlpBYnlhZWdydThwUDFLdGwxS09vbUExUHFnMVVVVFVJU01MSFRCVzRSUUFZVVZXUWtoTkg4YlphN1lCK05hbWtCbmZYK2F2c0pET3NoOU9pNWw3YmpJVlRuSkhzeHhTKzZjN2VOakZENmtiU1hIVzF6UFlBcEI2aE5GQkpKSHZUbTNlbjBkcHlMU1hjQ1hOUGZnUzRTZStMR0V6eXZZcDRBYjZSTkkzRG94VThXOTh0YkpiYjNTWFA5b1JBZ3BPNGRNMkUrQkxBNmRKMlR5WklHS0lMQUZ1YTVQckdnam82azV2UFR1RHFVR1I0UUY4TnpYV0tyYnc1WDI1c2tEb2dLaUVyLzByeTJLWVlWQnVQbitDR1JCaUpZbjE0VXh0RjIzczB3V29hNDF5U0lVYlVmU0dnUUVKLzNhanhwdUw5RHZrVU9iQXZMYmRnSFlqdFdXRGxMUGpRSW5tdUZaQWYyYTBGTUVwREIzQUJtV3Vab0tkRndpdk1XMDBrQ25sL3dTaHBkcmNqOUozQ1BlZXI4RDIvdGxWYlhBcFkyZVFIQVQ0ZUl2a2J0MmtQdFVPWEVVUlZhbnJWeVdQa1NRaURBSW9LQ3dCYmxIOEJZOEJWVC9MTE9sazNhbG5aWXlHS25IRDFjS3ZSZzZuS1ZFMnBGa1M4bDdrOS9TbnRTeHBUMkxUb2dMbStqZ09ha3JJRzNwV3UySmVGVFZaV1hCU2VjWFFWVzBNNWs3d1UvdTkydW5tZlFsWldjRE9tZmxORnMvTzJqMWpJenFyeGM2bFlrNkhaQ0owUGFGN3U4V0pwTGpEcHRTS3RENnpKZTRkc0VZUkRPQzRNcEZJNlpSRHFNUXgraHJlZm05bmRpZVRqT1NKa0JYeHJOdHVUczh1eXVUZTRTSmJSZTJiVHM5ZlQvUlBTY2FxL0JqVDgvbVVZdEozcnBBVDdpZENJY3VUU2pCMmxPL1hldnF2M3VpcjFVNjdrYndDK1k5M2FPM2FmdDVJanJwOVlSZW9qbDFBUHMrRVIvcDlVNFZGN252WlBDUmVpZWF3NU50UTlvNUV6Z3pBVVRxaU1Uc1M1RHVaQ0hMeFBSeDF5YzlURmxvWXZ2dno2akV5dzk5Z2RuUkhnaWlWaVJJWjVRMFlDdDlBNGs4N3hUMkU4TG5wRHMwS2hvVTZLY1VPRE1CSlBhd09BOFUvTmlIMFJOTnhFd1I4U0h2dG1KRUZiTkV1NjR1ZHJ6Sk5SRjJjcDVLZGlmTjE5QngrWno2SW9KUmNQU2t1VFluaWhFaU9rdFRjclFrTnpOTmx6bFI3dXI2cWV5eTU5UUFEV1FNQ3ZRU0JiVFk0R2swSnJ0OFRLZ3pOdTNNVkZFTkNTZUxabkl5TDNsb2swRFh4M0ZJeUZhZ3U3YjBDTnVCUTdsSXlxMkZQNTFxWXJPZXl5QnFiQk9kT3hJZEVqK0J2T1JZZ3BUSk5RTU1DdnluVStDME5TRHhRNFRUY2ZqR2hqUjQ4T0RmZ3RrajRlMzU0NmNaZGtkZ0VSeHVmTVpLalNTSjhRbC9LcUxFQ0V3OUg4MGd5Vmp5akp1dXBwMHMySU9IOC9ETTY5dmdRSFZJVXRUN3l5Slc0elBrVFhlc1lKVDloMVBndE1Qd090MUVaOGxtZUZWQ3NXSmVxQ2lJZnZFblBzV3M2cm91SmVKakMzSmRpdVF6ai8xNFVWQjVNUHdvL3J3dVZXMXZNNzRiRkRBbzBBOG9jTm9ha08zWUJ2S3NqUGlDMUNud2s1VUtsRDRTZnBWUXN3NGlrQ1Evb2p2SklyWENtZW92SnA1b1BwMTM2WGNibndZRkRBcjBOd3Fjc1FBU3pVVE1NUkVtOGpvVmtLUXdFVG82aVBZalJ3UjZBcWwvcnZ0OWVzTGRLRGNvWUZEZ3h4UTRZd0drTjZuNVZHMmtpWDdoRkQ3bDd1NGlZS2ZRaEZIVm9JQkJnWDVFZ1o3VmpYNDBDQU5WZ3dJR0Jmb25CUXdCMUQvbnpjRGFvTUF2Z2dLR0FQcEZUS014Q0lNQy9aTUNoZ0Rxbi9ObVlHMVE0QmRCQVVNQS9TS20wUmlFUVlIK1NRRkRBUFhQZVRPd05pandpNkNBSVlCK0VkTm9ETUtnUVAra2dDR0ErdWU4R1ZnYkZQaEZVTUFRUUwrSWFUUUdZVkNnZjFKQWY4cEYvOFRld05xZ2dFR0Jma3NCT1hwbFg4Yy9qZEwxQkhxL0haR0J1RUVCZ3dMOWdnSWljNVRzbVJUcnhyK2ZwUDFkN1g2QnVZR2tRUUdEQXYyYUFuTG1zNXd5UjJTUDR4VnpoOExQTXhYYlVtclJ5S2VHYW9kSysvWDRET1FOQ2hnVU9FY3BvSjU0d1QrT01tdTBKeTZZUEFUL0gwdWtWLzlTcVN4WkFBQUFBRWxGVGtTdVFtQ0NcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGltZyBcblx0XHRcdFx0c3R5bGU9eyBidXR0b25TdHlsZSB9IFxuXHRcdFx0XHRzcmM9eyBmYWNlYm9vayB9IFxuXHRcdFx0XHRhbHQ9XCJMb2cgaW4gd2l0aCBGYWNlYm9va1wiIFxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpIH1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZWxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0cmVzdWx0OiBudWxsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHRsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzXCI7XG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH0gICBcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdHJlbGF5b3V0KHNlbGYpO1xuXHRcdFx0fSAgICBcblx0XHR9LCA1MDApO1xuXHRcdGZ1bmN0aW9uIHJlbGF5b3V0KHNlbGYpIHtcblx0XHRcdGdhcGkubG9hZCgnYXV0aDInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGluc3RhbmNlID0gZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHNlbGYucHJvcHMuY2xpZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGluc3RhbmNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGxldCB1c2VyID0gaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCk7XG5cdFx0XHRcdFx0bGV0IHByb2ZpbGUgPSB1c2VyLmdldEJhc2ljUHJvZmlsZSgpO1xuLy8gXHRcdFx0XHRcdGlmICh1c2VyLmlzU2lnbmVkSW4oKSkge1xuLy8gXHRcdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmlkID0gcHJvZmlsZS5nZXRJZCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBwcm9maWxlLmdldE5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5maXJzdG5hbWUgPSBwcm9maWxlLmdldEdpdmVuTmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0Lmxhc3RuYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuaW1hZ2VVcmwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuZW1haWwgPSBwcm9maWxlLmdldEVtYWlsKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQudG9rZW4gPSB1c2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5wcm9wcy5nTG9naW4ocmVzdWx0KTtcbi8vIFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXN1bHQgfSk7XG4vLyBcdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRjbGlja0J1dHRvbigpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUucmVzdWx0KSB7XG5cdFx0XHRsZXQgaW5zdGFuY2UgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpOyBcblx0XHRcdGluc3RhbmNlLnNpZ25JbigpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRsZXQgdXNlciA9IGluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpO1xuXHRcdFx0XHRpZiAodXNlci5pc1NpZ25lZEluKCkpIHtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XG5cdFx0XHRcdFx0bGV0IHByb2ZpbGUgPSB1c2VyLmdldEJhc2ljUHJvZmlsZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcblx0XHRcdFx0XHRyZXN1bHQubmFtZSA9IHByb2ZpbGUuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5maXJzdG5hbWUgPSBwcm9maWxlLmdldEdpdmVuTmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5sYXN0bmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpO1xuXHRcdFx0XHRcdHJlc3VsdC5pbWFnZVVybCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcblx0XHRcdFx0XHRyZXN1bHQuZW1haWwgPSBwcm9maWxlLmdldEVtYWlsKCk7XG5cdFx0XHRcdFx0cmVzdWx0LnRva2VuID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKS5pZF90b2tlbjtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdMb2dpbihyZXN1bHQpO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXN1bHQgfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nTG9naW4oZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5nTG9naW4odGhpcy5zdGF0ZS5yZXN1bHQpO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcblx0XHR9O1xuXHRcdGxldCBnb29nbGUgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWDRBQUFCY0NBWUFBQUJweWQ1MUFBQUFBWE5TUjBJQXJzNGM2UUFBSHZ0SlJFRlVlQUh0WFFtWUZOVzEvcXZYV1JuV1lRWUhCTWRSaEhFUWtFWERhQ0NJR3R5K01SSFVDQ2Jpa29keFM0VGtrZmNlV2RTRUdJMVBlWkZnVkJRamZ1L0JwNG5qVThIbGdZcGhCSlI5RzBka0dWYVpqWm5wdGQ2NTNWM2RWZFZWMDAxUDkwdzNuUHQ5MVYxMTEzUC9lK3ZjYzg4OTl4YkFqaEZnQkJnQlJvQVJZQVFZQVVhQUVXQUVHQUZHZ0JGZ0JCZ0JSb0FSWUFRWUFVYUFFV0FFTWhFQktVNmk0NDBYWjNZY2pSRmdCQmdCUmlCRkNNaXg4bzNGMEsyVWdTVjBpYml4NHNjcWo4TVpBVWFBRVdBRVVvT0FZUGppOG9jdW4xa3hab3hjK0Z0SDNmSDI0QjZETHY2ZFpIRk1rQ3lXL21hWnNEOGp3QWd3QW94QTl5TWcrLzJIWmIvN282YkRtMysrNGI4bWZrVVVDZVlmTlFNd1kveUM2UThwR0hMcE9rbXk5T3IrNmpBRmpBQWp3QWd3QXZFaUlNditoaFA3UGgzNythSXBYMUthS01uZlpwS1JMWC9neUFXQzZZODl4NHFIdnV0QXZ4NUM0OFBPRElHalRYNDg4WlliNjc2TXd0Z3NDZnN6QW93QUk1QVNCSWgzOXl3b0h2Rjd5dnhtdXFLWWtoRTNGN01BaDhXUzlTMUJFVE45Z1VKc0p3WkdnUlU3Um9BUllBVFNBWUVRRHhkTUtVcXpZOHI0SmF1MVVCRFBrbjc4VGNoWXhZOFZ4MlFFR0lIVUloRGk0YWZFK00xVVFLbWxsSE5uQkJnQlJvQVJTQ1lDZ3BmSExmRWJ6UVNTU1F6bnhRZ3dBb3dBSTVCNkJBUXZqNHZ4QzFLaUlxYWVQaTZCRVdBRUdBRkdJTWtJR1BKeWx1eVRqREpueHdnd0FveEF1aVBBakQvZFc0anBZd1FZQVVZZ3lRZ3c0MDh5b0p3ZEk4QUlNQUxwamdBei9uUnZJYWFQRVdBRUdJRWtJOENNUDhtQWNuYU1BQ1BBQ0tRN0FzejQwNzJGbUQ1R2dCRmdCSktNQURQK0pBUEsyVEVDakFBamtPNElNT05QOXhaaStoZ0JSb0FSU0RJQ3pQaVREQ2hueHdnd0FveEF1aVBBakQvZFc0anBZd1FZQVVZZ3lRZ3c0MDh5b0p3ZEk4QUlNQUxwamdBei9uUnZJYWFQRVdBRUdJRWtJOENNUDhtQWNuYU1BQ1BBQ0tRN0FzejQwNzJGbUQ1R2dCRmdCSktNUU5wL2NNVjN1Qjd1bWsvaDJiNFozajI3SURlY2dMKzVDYkJJc1BUcUEwdnZQckFXRnNFeGVod2NZeStoNTc1SmhvaXpZd1FZQVViZzlFSWdMUm0vTE10d2ZiZ1M3Vyt1Z09lTERhYUkrK3NQUUZ6ZXJadmcrdURkUUR6YjBPSEltVDREemdrVFRkTnhBQ1BBQ0RBQ1p6SUNhY2Y0M2V2L2laWkYvd25mbDdzVGFoZnZqcTFvbWo4WHRyS2h5TDNySjNDTUhKTlFQcHlJRVdBRUdJSFRGWUcwMGZITGJqZWFuM2tjalhOL2tqRFRWemVTZC9jT05ENDhHeWRmZUJheTM2OE80bnRHZ0JGZ0JNNW9CTkpDNHZjM05hTHhGL2ZCdTNONzBodWo5WlhuNGEzYmc0SmZQNTcwdkRsRFJvQVJZQVF5RVlGdVoveitFOStnWWM1cytPcHFVNE9mdzRuczYyOUtUZDZjS3lQQUNEQUNHWWhBdHpKKzJlTkI0Mzg4bkZLbVgvQ2JQNUxGejlnTWJCb21tUkdJRDRFeEkrMjQ1VHdMUEY3QWJwT3g1bjAzVmh5Tkx5M0hPblVFOGdmWThQTktLK3lFTjRpREh0dnF4b0l0OHFsbjFJMHB1cFh4dHl6OEk3emJOc2RWZmR0NUY4QXg3bHNRVmp1V1hyMEJzdnp4azJtbmQ5ZDJ1TmQ5QXUvMkxkcDhTTkkvM1puK1pIcmhwMXhneFZtOUpOSC9BT3FJemExKzFIM2x3eHNidk5oeVVndEo0S21mRFV0KzRFUkpOajM1Wkx6elJoc1c3TWljVG52ek5WbVlWV0VOVktWaG54dHpYdllnUlhORkEvQ1M3NVdNK2d5N3dJNkt3VktZdU95dlBjVDRVOWVtK2Yyc3VPTlNHMFlXV1pDbDRpQW5qdm13ZnFzWGk3ZWMzbXRxaFdkWk1iNDBVbkd2dzBlTVg0d0NtZU1pMUhjeHpXNHkweFRtbXJHY2JkaUZ5THY3ZnRpSFZ4aEdkZEpna0h2YkxIaklwTE5sMFZQQmdlUTBaL3JsNVhiODIxUUgrZ2I1bndhWHZuMHNHRExRaGttVlR1emY2c0s5YjNqUnJJb3hlWnc5eVBTRm4xWENsWmZiaVBGN1ZESFMrTlpoeFRVaHBpK283RG5RanF2NmViQXdVNlhiSk5YSDdkTzJtWkQ4VStNazNIbWpFOVBQTitoNFZHRGZBZ3ZLU3UyWWZvVVBLLzd1d3NMYTFBMCtxYWxmbkxucThHM1g0UjluTHQwYXJWc1l2OS9uUmN2VGo4V3NlUGIwbWNqOTBZOGhXV0liSDRtQm9lZVRpM0R5cjM4T2J1WTZUZFU3WXlxejhEdWFac2JqU29ZN3NheUhoS2trRlN2T3Fkd28vN2FJcEtoNFpjNi9qSlpJMVRLSGJGTks5ZldSTVAvdUhGVDJvY2tjTVJlYjFZL25ubXJEcTBZek9kTThreFZnd1lMN3NqRTZMNDc4c3Eyb21wYURjMWUyNHNHYTA1VDV4d0ZET2tlSnpWRlRRZjJKZCtBc1gwMDkyWHhLbUgzVGJjaWJOVHN1cHErUUtGbHR5Qk8yKzZjcDAwYy9PMzVwd1BSYmpvc3B0Z2ViOXZtRnRrZmpzZ1k2c0dSeVpLQll2ZG1MQmxXTTlldjBLVlNCNlhaTG91MG5YMFVZaWJmUmoyM3F5cVFidmJIb2lhTStCVG5CVEd5QkpwU1FaNCtWYVdyQzU4d3lZdm95cVJXOStIU25GNGRhSXUyaVVGQnhSUmFxY3BVbi9rOG5CTHBGNHBmcmw4SjU0UWs2YXFFTkoxY01JVjI5Vmc3TnVxWXF3TURUQ2FoMG9HWHFPQnJZTklUNHNlekZOaXcrcVBKMFdQRElEN014bnFSRXhaVmNhRVBwS2w5QUY5NjgxNE1iSC9XZ09GZEN5MGxab3daUzRxZnovOEsvdFdLaFEwSXhaTlM3MDVuUytHaUxWUi85aE1hdDk0aXZtRTdGeWk5MTRNcENiUmJ0Unp5WS81d2JOU3J2OG5JSEhybk9ydXFqRnR4NmxSVXJsbWVnTGtSVnI5UHh0c3Nadit4cGdIenN6UUNXdHY3dDZQSERuVGo1NXRudzdDNEkrRWw1K2NpZGRlL3BpSFhTNjNSb2sxdkw5RVVKYmovbUxYVmgrZjFPOUZSS3BLbjNCSHFvRmRKeHJnVTNEN1BBRVFvN1JndkIxWVlMZ1JLcUt1MllPTmlDb0pBcDQ5QitIMTcrd0l2V3MwblhYaWdod0hmYi9GaEJpM25LT2tMeEFDdW1uQlZVSHptSU9iOWZRd05PVHlzZW9MV0VvYVIyQ2poYVZONjhpWFR6Q1N3Q2pobHF3N0Q4RVBGZUdlOXU5S0UrOUppeXNtbWd1WG1FTll4Wjh6ZWt3OWJwcjh1SnJrdUlMamU5VWNmMmVBblRFRkdodjhxUk5weWp2RzFFOXdxaVcyQm1YQi9DZm93VlRxK0VVckVJSDNZU0xocHJnN3VGUEpwOWVOVmtVZDdiUnVHNVZzeVpUR1VxbUZPL1dQK0ZCNHROMG9TTE1MaVpjWmxDZUNpUTlHdjNFZE92MWNYZHNzV054Mm5CZC83WXlBeXo1eUFTT2hBVU9uVFJBNCtUQ1pjSjUxaFJsQlBzR3g2aWM4Y3VIMTRLNFdPVVJ1MG5GcHFuVTlzTUs3U0F1ams1R2NlUCt2SEJweDZzaWprYlRLeVBxOHVQZFovZjA0THBGMU9mRGRGbkkvb08xL3Z3K21vdmFycFJjTkcxYUt4cWRENWNQckljOEx2Q0dVbFpmdVRlV0lmMnRZVm9YMTJNN08vZkNrdWVWcTROUno3RGI1eVI5eW1JaEptVzVxUVBPeHBsWEV3d2VuMFNza0NNT1NRcGxnNnpZOVlWa1diMzduT2grbVZkUnNMeVp5WlovaWlqUXdqM01sbzBycnpJam1NMHF3Z3ZMTk42emZvdExpZzJWVk8rN2NRTWxZWEo2RUZlRERuZkZyUTZVclZmMldBYnBveng0S0VYb2htSUtwcnVWc0tNNjUwWUZzWkJocU91Rll0REwzaXF5czZuUmVSWlY2aDBMRWZJWExKV0xYcGI4RUNWRTBNVWFvZExxSDVPR3o3emFsVTR0Y2V4clcyb2RwdlVCMlExYzRXVDJpM2FWVnppUk1ETWdYRGZ2Q09DdXpwbXhhUXNWT2VSeFkzYWsvSVVDNjlYa1NYVXZiVG1vd3lXbWloR0Q3bGtLRkFjR3JCRDRldmZON2VrV3JPVzF1K0k4WWZmNEd3TGhsSS9xdFV4dWZLUkR2eHFpaDBrRStnY01YR2lzK283UGl6N2J4Y1c3NDFXSVFVVFdERHZ0aXhNR3FpbFRZU1ZEUVRHajNMZ3RwMWszTEJjYTl3UUxxd1RmVHljUjRjM0VoNllsb1ZyUzZPMTZjTDRZdnhZQjlaLzBJNDVhODNWM1IxbTM4bkFDQWZvWkVieEpwY2JQbzZLS2xIYlpWOTZCTGJCMU5tcnBrZUZHM2w4OW1YbnBvOTB1Q2RHRFlucWRVWkZwWTFmazB2N0VoU05jbUpCbzFIbmtURnZZYXN4M1RvZUgyV1IwTk9HNVhlcVpndjZYT2hGN3F2Mm94ZGFDSmlLMDF1WWxCSFROM041eFhZOGVvMFAwOTZNdnkzYkJBTlJTY0ZxZnBLcXNwdHJmZGhQODU0U3BTSjlyQmdEVDBUTlFUTWc0alVSVjJqRlpBcGZwZmlRVkZxczNOTy85N2dYcTBPRW05VkgxMHlxMUhIY1JqSDlTSnFldE9ieitGViszUHAyL0poSFV0T2R6NGQvZEdTemZ0S0xleGI3VWFLTWt4NDVTckl0SGVQRVV5cmhRNU8vOGtBV1Q5TnZ6Y0hndjdkaVhsUjVVbHdMelNYbk8vSDYzUmJjdFVnblhIU3lqeXNrbXY5TG1FZUw4cE5VNnRib3VCSkdUOHpHa3R4MnpDUTFiRmM3ODdjeVJaVElMWXBzR0YyQW82SUNVblpvTlNzNldPTXpkMW03NWptUmg3Zm41c0JPSm8yWjRsWnQ5K0hoVVZhVjlCenNQTytNOFdGMWpRZkwxdE9VV3MwSkU2alluTzhaTUgxUzUydzc2RWNoU1NwOWRiTUFFaVRqY3Z2M2VkRmtzMkJZc1ZZQzZqdmNqa3BpL0d2aXlpV3hTSjB2MjRlTjlUSktGTW5YYXNIWWZrQk5TSjB6bGRaUXRDK1NGUk9IU2xnVlVxdVVuNnVWdmcvUlFLS294Z3hyMUNwako2a0RlcENxcDJ5Z0ZxK0dJejRjSlQ3aG9aKzlob2tqbnFMZWJUUk5MQ08xbk5vVmxkc3doaGkvV2ordkRsZmY1MVA1cENXTU9GTFRIWXc4R2Q3Vms2ckZkRVpCTTRoSERaaitmbG9rL29ad3JkRFZkL3gxV1ppNlM4eU9Ja1ZWWFo4VlpWM2tiZkZoMndFWmhhUmFLbElKQnVnVExWeWtxbzhyRkZaT2RrWXgvWFl5UktpbmR1MUZRa05QMVR0VU10YUptV3Ric2FTTExiVzAvVldoUEpYL3JnT211VXY1bzAzRFVoSFFRSXViL1JRZGFDb0tTSGFldERENzI3Vld6TDlFeTIxdGVWWk1taWd1b0tYUmgzVWJQSGgrYlVUM0hUY1paRFYwdVc0Ujd4aE5sNmZSZERubzNIamd0bXhjYXpDOU5pOUR1d0JkVE5QNDU2WTVJbW9JZXRtSEVtZFpFMU1mYTE2Q2VVanl5djU0angvWEZpdTRTN2lRbURtSXdRRVNMajFIeTV3RlBVT0hVOXdkUWR4R2EyYVdNalp1aXpHOXA2bkxuQmVDVXVBakQrWmlmSmlSeWZpZmw5cnhxb29KR3RmZGo1Y1d0MkZKYUdBcUpsM0xpMVgyeU9CRTB2UkZoSGxOSEpnTGxZMm9SWmhSdUdXWXpDV05TZEg1VmwxRiswL1VmajZpOWZrSXJmbG4yL0hpclE3VllHUEJqQ2xXVkN1elFobzRiaDJ1eGZzUTdWZTVsZmFyQkowTGQ1SXA2ZlRTeUdEWHQ4S0JxbmZic0VMZ2xwSStycTZRRmZlbzFqaEVTTjI2ZHN3S1MvVTBHeURqaTRqNlRNSVVzdFJia3VnTVRGMzBLZHhyRVR5RmhBbEg5VGFhSjNYME53OUxRY2dKWXZ5WjV0YVFYdkN4TlY2WXpYZnlDc1FBa0lXbE5KdDV4TUQwczZQNmppbTNSaGl5aUVpTGVBK0VtYjd3a1BHbmw5dXdMU2JqRVhHRGJqZlJxN1k2cXEvMWd0VGJHbmNLMlduU3hYcEladGsxTzN3YXpBY0t4aThjS2FuTHd3cnRvRmZBbTVoOWVlQ1JGbVQ3UjVpUVdIei9PSmJJSE01R0NpMnNoejJRRjhlRWVOdks5akRURnlucmFZUGV0a1F4SjQ0Zlp2cVVWOHRoblRSUGc4alRzM093ZkhZMlhvdTZjdkRHYkNkb3IySElXVEJ4aUFvTDh2MzBEUzJ0d3Vwc3prcUZpUWVUOWFXRjg5SlFEdVVWTnRXZ1FKN1VSKzhKTS8xZ3BNV3Z0V0dUcHI0V1ZOSzZpM0NwNk9QQlVvTy9wYlJZWGFUMmFQU29tTDRJa1BISW14NU5YeW82VDZzS1ZDZFAxWDNYTS81VTFTU0JmRTlHMXBnVFNOMTlTVmF0Y1dIcTQ2MVlzY21IRmpNeVNJVTFualo3dlhHTG9tdzFpeGp4MTZ0aDZzam0zMmpLM25ZS0tzbm9YYVF5dGg3dW1nRTNxV1VmOVdLWGFvVEs2bThOTUtOeVV2TVk4SDJBR09Ma0FZUXQvUThLUyt4QSswR3k1b2hBZnNwM0toSk9JYTJNYlFsaW5tUFhNdXFzZkFtS1VWV0FBTExHR1ZRZ29TZnQyaFU3ZDdVWDdUc2dRV1NBTWxpUmhjdWc4Q0JBcVdtOTRIVURLNk5hVWx2V3Fmc1lHUk9NQ0tVYlBVVExzdW8yR2kzZWt0WFU1K29NZ01Lemd1bFMwY2ZWRFRHV21MakcwUmhXUmFxMW0ybEFDRi9uYWpFRldZMTF1QnlneVRBNUQrckJQRGs1eHNyRlJtYWJudEFjVkIvWGZWanZrOUxuSHRtNkJraHBhVW5PbktiY0M5OXNwd3VvSklub3N1RTJqRDJYckNsMC9TNXZNRzNnb3NXOG1YRk1KZldMbzIwR20zS1NVUXQ5T2NuSU05NDhFaTlieHJwOU1pb1VGUUl4ZERMTVFHL1Y4UVVOWDNsd3NLOGR3d0lqZ1lTUlpEYUxPcTJPL012ZFdvWVVMOTJkalVjcThNU2Nqa1BZaUhtZlRUbXBWK3AwVWFMS0NROVd0TkFyQkpYd1FFbDkrSnVvMk1LRC9DblJrUENBU1l4UkRCN2twMisvWnBNK3VxZEJLMXpraFZTNit2U3A2dVBoYXRFYXcrenJ3ayttTjVvSmltbXM1QVhFYXJQa2xhVGs1RHpMbFBITHpldVZXRjN5M3pzdmd4bS9DcUUxcEVzV2wzQlQ2WXlldXlxMVVtakpDSHRjaTNrdXNpOFhPbXZGdFdsbjNJcjNHZnYvNFM0ZlpvVVA1eUxHUHRvRyt1UnoyTzM0cHdlZlhFUTIyK2NITVN3YWJNTk1XdENPT0JtZmJkTXlwRWhZZXQ3Vkh2RUgxQkpxMDFBTmsycnc0YThyWGVnVDRpUnVXcENlTXNtQklwMEFZbFM3bHNQbTl2MzYrT0hCUXhld1o3OHhuc29rUXhjZGFkbkhDYXZ3R0tjbk9FWFBYYzc0cGJ4eXlDMmZHMVpuZDhNK0RQSzBJY2NlRzRaTHkyTDNyS05OTW5hVFR0TElDWE5PWlR1OFVYamErZEdHblBuWDJGQkF6TmhEcldadnB4TUJTYmVwVjhWVWt4cW8rbXMvcW1tQkxQeXkwZ0pxUEl0NVR0MjVQZkVyaWRJT3JaUVFWRStNLzlqVlpOa1V5bjMwWlU0NjZFNHB5bzlQYUZQWGFqcXI5Nkh6ZzhqWkNtMm82aGtaU05IaXhidGRiTDJoVUpmdy83R2dsQjd1U3c0YmJqemJoUVY3bFJ4SnJWS2psaEFrREo5QWpOL29GU2ExVVZqYXArUjVBWFdaTjJvam1KS3orbCt0SVZMN24xdEMrQnB1UUZUSGl0eDNlUituTlIxaEVkZWg5U0NkcUhzOFFtS1gzSFU5NCsvNUxjaUhsbW9xUnljczQrVzJjN0dvOVd6Y3Zmc3QvR2pZalpwd280ZmZmRC9jRlkyQ0EzN1B2dWN5WmZ6OVNTOXBFUnNJTXNUbGt3aFZHWlkyaVdpYXV2Y3hZUHlCNnV3VkE0SWpzcUdJUE0wa0puWDE5ZExRZ0VFa3JkSU9TblloQkdoajNIYXlUYWdVbTh3RkxHR21UNVl2UjJpM3JvaEdpOEFSbTM5aWRNU3hnZ2VzMFk3ZXZRbFlXb2s4dTlPcDZ4eWk0M0xheWJ0QXYra3ZIaHBwVDV0NmlJREo1aTZ4NjFpN1k1bDI0NXFZRWdWMDl3WjlWSzlyYnljaFVMaFU5M0ZYdXlnbndsY083WERqSjRwRlVvQ0M5UGhSejBPN2hDS3A4RWJJRWtsS0lkZml0MkZPODFqOHVYVVk3V2VVc0hUSDM5SGk3cnhZNUNWNzQ5WDBFcHE1c2FXcXQ5WXNVaHI1TngveWF3NVhnOVdHZXl0Tm1vOTJKZmJUMFc0bU1hbWpyZDJwblIzMUhlNVFXV1NFWXRKbUpPMUxxYzdoZEwrWDhkSGVFRWFpKzZpNlY5MU81Y0dIajJndFFPMkNCNndCZTNUNHF1T1kzWGYvckV0R05Sa1JxRjNXUUNlZW5XajIva2pvWVJZa2RwUUxKWC9ZV1hEVHBPaklWWk5wUjI4NER0M1FocmVWSWNubHc2MWFXb29xN0xSWlR1Zkk1UE1HWlMwbUZMU0o5c0FJbCtvK3ZwWm0yMnBYVk9IRW5mcVhVVVNnTmFLbjZiVFRlZVdSUVVLZEx0WDNKcHdqZGNWSzlwN3c5cjR5VU1BZWJ3L2MzbkE1UG5KSERLQ2FQU2Z4OUtaWE9rMUE5ZWRlSEtaakM4emNPRm9JelNoSE95TFhITkZTWEZhWmpWZklKbjdxQUxLMElNNmVUd2V2VGIzRWdlVS9jbWltMUhSR0JuYkVZYk5kVHgrVDJLOHB3b0tIN3N2Q1RNcGZ1Rkt5d1grdG8xMjltclNuNThNL04vc2lVbXU0QzhsWXV6bnl3cisvUmN1Y2dralF5YUlHRml3ZG95VGpjNDAxRHVuUEo5Z0NCK3lWNW5hY01wbWhOYVErcEdPaE5LN3NraXdzdjQzNlhqODZNQy9VOXlhUHNlT1ZuMldqVENkbFJCNWx2S3FUemt0R1plSFpxNmhPZ2R3bHpLUVA3Y3pXMmVsdm9vOEtOWWRLcjkvaWdYWjkzSXBmUEppRm0wTjl0SmkranJYa3g4NndPaTZRakJhcmx0VUdNMGgxSDYvZnFLZFB3dlE3Y3pCdnBDVnNEVlZKMzlONGpXZ2VSanVzSjExSFp0Y2p1NTc1ZDdtcVI4RHZLYndKS3c5c3dJS1dFWENwNTh2QnRxRnpVTjVGTHVuNTd4dHhXOGpuMVA3MjBLTFJvdmQwUFZXVmhaTnFQWksyMldlYSs5T3JMbHhDaDY4cE9tWkJmeEV4NDRmRTFVRmw5cS96WUUwSDRaRWdPb1J0Z3grL0dLV1NCMGd5bVhGN0RtWkVJcDNSZDgya1J0dm5zNFBNOUNOTzZPNVZBMnN0ZllWS3ZSWWdJbnJwNk96VmtSUngzK210VUlRRXVWUWMxdVAyNHE3SFhYSHB4K011ekRTaWpBZi81a2IxN2FwMUk0b3JQb1R6MEoweDVpUzBRWXVPVXdxN0xXSVF1VGdIRmFvMWdESTZlbVFwWFVJTkZNV1F5QTUrZ2VaTWZ6K2VlZCtyUGZLQlRtZWJSWDMwZGhwdmxkbFZ1RUM2V2ZPLzZpTWJVdDNIL2ZqRHUxNzhoZGFDSWs3Q3BLdHAwOWJWUVZXWE9rVEV1ZWc4Nmt4a2x0cVZUdldHZDEyeE9mMnI4RGZyRFlaTVg2SGk1UjF2NEprdmxzSXZSeVFwSmF5ai95MzdmSmo3YWp2cDhzeGpYVWZXR0E3ZFFxWjU3RFFLSWFsLzJtSVg2SkRNdU4yeFdqcW9LcnhyTUhheVZXKzM0eDA2bnFBclhVUWlqRjJxbnMyY1NscWozRTg5dlI4YmoyanhPVVNMdnBwRmR1TFc2M1d6TTdOakdtTFY1ODNQVERyeUtmU0JwTlQ3SUcxRW9xMnZHazJOVWNacVA5cnc4Y1F6N1ZpbGtjRm9FUGxMTzNaclRJT0NpZlFNVWRodVByYllyY1dXb202cGNlR0pkZEVBR0RGOXNXdDJ2bTZtbGVvK1hydlJGZGhrcVlaQ3VZK3FJdzFzYzE4emFXTWxVUXIrdTRYeDIwZy8vZkNvTzJKV1o4bU8xekhydlY5aTA3R2RNZVB1YlQ2SVIycWV4ZjBybjhlSlZuTWdjMmw1NFpaTFQvMTFqMGxBVjBXZ2pVUXpmOStLNTlaNkREOStvWkRSUUhyUlphKzFZaHAxS21XYUxNSmExWWRHMG5ONzFPNWxHUXRlb1B3M3FGUWFTcWIwdjVzKytFS2ZWbzA0OVQzNUJoZlBJc0ZOQmk5NFJGY1NqS2ZoQzVHa2huZXRtdkswWDZ4S2Rka0tRZituV1R1UzhZbE9CeTdpdlVWU2Y4VFJIZ0NUWXhvNnFvOUkzMHlITDRtZDJ1cmNBdm1xWmh4ZFZXK3hBL2g2MmppNGJCTjl6S2VEUm11ZzJjMzd0R1A3aGlmYlVXMjBYRWU2L251ZXBIeElYMis0QTUzVzUzWnZjdEdNUmo5b1JCQ3RYdFdPSDd6aVFwMkpIYi80T0pIby81R2pFaUpweFQ2Qnp2VHgyTzhRSURaWjN2QWl6VzUwUWtLWUNuRk05anFLczlDdDJSTVJEay94alpGeVNReEtoWk1lYVRrZ3luN3ZYMU9uVEh6c3M3OEUxRHJ4MVBHQ1hxV1lNR0FVaHZjdVErK3NBdHI1N3NHQmxzUFlUOWYyYjJyeGNmMEdhczZnSkdadEswUDI0ZG13K0hwRlpUMXJvaDAza3g0OFZlNDdqeHIxOUZTVkZ0VHJEKzFMaDREUjVoalFoalFuMmVMWDFmczdkMWliK05BSmJhNnBwOFgyeVVNdGFEd3VvNkNQaERvNkViWFdia00xcVp2Q05sV2tjcmlmVkE1YlVsZEZ6bGtnUUcweVdad0pSQU8zWVBSN3FJMjcrME0weGYwc0dFNGJveHJicUg5UTMydHNvclVrTXExVUN4cXhHMC9DbUZJTG1TbkxhS1QrbHVYeDQvT0RwNWFIb0dNVTljOGpvcC8yb0QxelpBaFJHK3MxN01JK0x0YmV4dEhoY3k1aFdVUTR0Ui8zMHpsSjJsbGpiSndTaS9IK3ZEemFPQVV4LzlUSURsRXpqOFN5VHl6VnowYitFTHNidnNMbTQ3dGlackQ5UkMzRUZZL3paZS9HeVpKL0R6Qi9XL3ZRY0pJUlpKNzR2Ykg2eVhVNE9DTnZta2xpcnlFSktubU9qcnk5SjRkT1A2VERzK2pyWGtzVTZUYXcyVnJDSFBYK0FDclUyK0JucHA4ODhNMXpvb0Y0bGRJVzVyRzZOQ1J3Q3FmSkp2ejRDYUgrUzZlVmRzWUpPc0lmdm9tTG5xN3Q0K0lkVGJlMjYxYkdiN2ZhOGZpRXVmaVhEMytGMnNhdk85UDJVV2xsV3hOYUIvd096bTl1Z3JQaHV4aEVFc0d2djVmVjhVYUtxRnpPUEk4N2IxRytyVXFuSXQ2ZWkwbDBETUZIdTJtZGhTd1F2ajNhamlMZFpPbUxUeldDeEprSEdOYzQ0eERnUG02d2lON1ZyU2pVTm9zbS9ncjNyZjR0dHBIS0pxbE9rdUhxOHhwS0NodncyT1E3a0pkbHBObEthb2tabjFtdjBDZndsSXFVRExaaittRGxTZmRQQzFOUFJuMGtReGVISHhtQk5FT0ErempRTFl1NytuNVE0TXpINGttL3hVMWxaTytVWkRlaGVEUVdYVHNkUlhTNEZMdllDQ3g0ams3OXJJMXRTWFdJRmgzdm9vVXBqVFZMN093NUJpUFE3UWh3SDA4RGlWL3BCUTVTK3doTG44c0dYSXludm5pSmRQOTdsYUNFL25zNmUrQU9PdnBoV3RsM0lXWFEwUXdKVlRhcGllalVUenJQL0NVNlozN0dlQnRHbGxnZ0pDUmhLaWQyUXg4OVFKL2VJNHVpYWxxQVk4Y0laQ1lDM01lN1ZjZHYxR25HRlkzQTB2NS93TXF2UHlISmN5VTJITjFxRk0zVXIzOU9YOXh5M2xSVWxVNUJsbzFzTjlrbGhFQXpuYnE0OE8zT0xib2xWREFuWWdTNkNJRXp1WStuSGVNWGJXNlJMTGp5N0FtQnEvN2tVYXc5OURtMmtPWFB6aE4xT09GcVFwTTd1STJrdDdNQXZiSjZvREM3RDBZVkRzZDRHalNHOUNqcG9tN0R4VEFDakFBamtKa0lwQ1hqVjBOWm5OdVBwUGNyQXBmYW4rOFpBVWFBRVdBRUVrT0FWendUdzQxVE1RS01BQ09Rc1FndzQ4L1lwbVBDR1FGR2dCRklEQUZtL0luaHhxa1lBVWFBRWNoWUJKanhaMnpUTWVHTUFDUEFDQ1NHQURQK3hIRGpWSXdBSThBSVpDd0N6UGd6dHVtWWNFYUFFV0FFRWtPQUdYOWl1SEVxUm9BUllBUXlGZ0ZtL0JuYmRFdzRJOEFJTUFLSkljQ01QekhjT0JVandBZ3dBaG1MQURQK2pHMDZKcHdSWUFRWWdjUVFZTWFmR0c2Y2loRmdCQmlCakVXQUdYL0dOaDBUemdnd0FveEFZZ2d3NDA4TU4wN0ZDREFDakVER0lzQ01QMk9iamdsbkJCZ0JSaUF4QkpqeEo0WWJwMklFR0FGR0lHTVJZTWFmc1UzSGhETUNqQUFqa0JnQ3pQZ1R3NDFUTVFLTUFDT1FzUWlZTVg3WjcvVWNFN1U2MnVUUDJNcDFOZUdNVlZjanp1VXhBb3lBR1FJaEhpNGJoUnN4ZmhIUjUyazd0a0VrZU9JdE56Ti9JK1IwZm9McEM2ellNUUtNQUNPUURnaUVlTGlQYUlsaS9wSUJnV0l3S0Jnd2J0YkY1MTN6aCtVV2l6M2ZJQTU3TVFLTUFDUEFDS1FwQXJMUDA3VHpIeis5OFdETjgrdUp4RWE2TktvYnF3bmQxdVlERzl4dEo3NzZ1TWRaRi9XWHJOa0ZGcXN0MnlRdWV6TUNqQUFqd0Fpa0FRSStqK3NiZC9PQlQzZjk0NmR6RDIxOFpTZVIxRXhYbENyQ1NPSVg1RHZvRXBKK0g3b0s2TXFpUzh3RXpPSlRFRHRHZ0JGZ0JCaUJia1JBcUhTRVpOOU9sNUR5ajlObHlQaHRGR0Rrdk9SNU1oVGdvbi9CK01Yc2dCbC9DQlQrWXdRWUFVWWd6UkFJck04U1RZTHh0OUFsZUxqZzVWR3VJMFl1d3V5aFN3d1FMUEZId2NjZWpBQWp3QWlrRFFLS3hDK1l2U2QwUlMzc0NtbzdZdndpWERnUlI3a0NIdnpEQ0RBQ2pBQWprSllJQ0VhdlhHbEpJQlBGQ0RBQ2pBQWp3QWd3QW93QUk4QUlNQUtwUnVEL0FlYm14anRUdXMwT0FBQUFBRWxGVGtTdVFtQ0NcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGltZyBzdHlsZT17YnV0dG9uU3R5bGV9IHNyYz17IGdvb2dsZSB9IGFsdD1cIkxvZyBpbiB3aXRoIEdvb2dsZVwiIG9uQ2xpY2s9eyB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcykgfS8+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIG5vR2V0QWJpbGl0eSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiAnYXR0YWNrJztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gJ2RlZmVuZCc7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuICdoZWFsdGgnO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiAnc3dpZnQnO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiAnbHVja3knO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldEdlbmRlcih2YWx1ZSkge1xuXHRyZXR1cm4gcGFyc2VJbnQodmFsdWUpID09PSAwID8gXCLimYJcIiA6IFwi4pmAXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldE5hdHVyZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImN1dGVcIjtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gXCJzdHJvbmdcIjtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gXCJzbWFydFwiO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBcImJlYXV0eVwiO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub0dldFR5cGUodmFsdWUpIHtcblx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gXCJkb2dcIjtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gXCJjYXRcIjtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gXCJiaXJkXCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiZmlzaFwiO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBcIm90aGVyXCI7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9ub1RvSW5mby5qcyIsImltcG9ydCB7IGRvbWFpblVybCwgY3JlYXRlQWRkUGV0QXBpIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0FERF9ERVRBSUwgPSAnYWRkL0NIQU5HRV9BRERfREVUQUlMJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUREX1VQREFURSA9ICdhZGQvQ0hBTkdFX0FERF9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1RPX1VTRVIgPSAnYWRkL1JFRElSRUNUX1RPX1VTRVInO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWRkRGV0YWlsKHR5cGUsIHZhbHVlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FERF9ERVRBSUwsXG5cdFx0ZGF0YToge1xuXHRcdFx0dHlwZSwgdmFsdWVcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBZGRVcGRhdGUoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9BRERfVVBEQVRFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RUb1VzZXIoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVESVJFQ1RfVE9fVVNFUlxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRQZXQoXG5cdHBldE5hbWUsIHBldEdlbmRlciwgcGV0VHlwZSwgcGV0TmF0dXJlLCBwZXRBdmF0YXIsIHVzZXJJZCwgdXNlclRva2VuXG4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibmFtZVwiLCBwZXROYW1lKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJnZW5kZXJcIiwgcGV0R2VuZGVyKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0eXBlXCIsIHBldFR5cGUpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcIm5hdHVyZVwiLCBwZXROYXR1cmUpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcImZpbGVcIiwgcGV0QXZhdGFyLCBcIi5wbmdcIik7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCB1c2VySWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInRva2VuXCIsIHVzZXJUb2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZUFkZFBldEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlZGlyZWN0VG9Vc2VyKCkpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FkZC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRFZGl0UGFnZUFwaSwgdXBkYXRlRWRpdE5hbWVBcGksIHVwZGF0ZUVkaXRQcm9maWxlQXBpLFxuXHRkZWxldGVFZGl0UmVsYXRpdmVBcGksIHJlYWRFZGl0U2VhcmNoQXBpLCBjcmVhdGVFZGl0UmVsYXRpdmVBcGksIHVwZGF0ZUVkaXRUcmFuc2ZlckFwaSxcblx0dXBkYXRlRWRpdFJlbGF0aW9uQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQlVJTERfRURJVF9QQUdFID0gJ2VkaXQvQlVJTERfRURJVF9QQUdFJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9VUERBVEUgPSAnZWRpdC9DSEFOR0VfRURJVF9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX05BTUUgPSAnZWRpdC9DSEFOR0VfRURJVF9OQU1FJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9SRU1PVkUgPSAnZWRpdC9DSEFOR0VfRURJVF9SRU1PVkUnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9FRElUX1JFTEFUSVZFID0gJ2VkaXQvUkVNT1ZFX0VESVRfUkVMQVRJVkUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX0FERCA9ICdlZGl0L0NIQU5HRV9FRElUX0FERCc7XG5leHBvcnQgY29uc3QgUkVTRVRfRURJVF9TRUFSQ0ggPSAnZWRpdC9SRVNFVF9FRElUX1NFQVJDSCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfU0VBUkNIID0gJ2VkaXQvQ0hBTkdFX0VESVRfU0VBUkNIJztcbmV4cG9ydCBjb25zdCBBRERfRURJVF9SRUxBVElWRSA9ICdlZGl0L0FERF9FRElUX1JFTEFUSVZFJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9PV05FUlNISVAgPSAnZWRpdC9DSEFOR0VfRURJVF9PV05FUlNISVAnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX1RSQU5TRkVSID0gJ2VkaXQvQ0hBTkdFX0VESVRfVFJBTlNGRVInO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX0VORCA9ICdlZGl0L0NIQU5HRV9FRElUX0VORCc7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVE9fSE9NRSA9ICdlZGl0L1JFRElSRUNUX1RPX0hPTUUnO1xuXG5mdW5jdGlvbiBidWlsZEVkaXRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9FRElUX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEVkaXRQYWdlKHBldElkLCB1c2VySWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkRWRpdFBhZ2VBcGkgKyAnP3BldD0nICsgcGV0SWQgKyAnJnVzZXI9JyArIHVzZXJJZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRFZGl0UGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFZGl0VXBkYXRlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9VUERBVEUsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUVkaXROYW1lKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9OQU1FLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWRpdE5hbWUodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBwZXROYW1lKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlRWRpdE5hbWVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB1c2VyVG9rZW4sXG5cdFx0XHRcdFwidXNlclwiOiB1c2VySWQsXG5cdFx0XHRcdFwicGV0XCI6IHBldElkLFxuXHRcdFx0XHRcIm5hbWVcIjogcGV0TmFtZVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUVkaXROYW1lKHBldE5hbWUpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFZGl0UHJvZmlsZSh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGZpbGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgcGV0SWQgKyBcIi5wbmdcIik7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCd1c2VyJywgdXNlcklkKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdXNlclRva2VuKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3BldCcsIHBldElkKTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlRWRpdFByb2ZpbGVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHRcdGJvZHk6IGZvcm1EYXRhXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VFZGl0VXBkYXRlKCdBdmF0YXIgdXBkYXRlZCBzdWNjZXNzZnVsbHkhJykpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVkaXRSZW1vdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfUkVNT1ZFXG5cdH1cdFxufVxuXG5mdW5jdGlvbiByZW1vdmVFZGl0UmVsYXRpdmUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVNT1ZFX0VESVRfUkVMQVRJVkVcblx0fVx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFZGl0UmVsYXRpdmUodXNlcklkLCB1c2VyVG9rZW4sIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlRWRpdFJlbGF0aXZlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdXNlclRva2VuLFxuXHRcdFx0XHRcInVzZXJcIjogdXNlcklkLFxuXHRcdFx0XHRcInBldFwiOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlbW92ZUVkaXRSZWxhdGl2ZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFZGl0QWRkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX0FERFxuXHR9XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RWRpdFNlYXJjaCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRVNFVF9FRElUX1NFQVJDSFxuXHR9XG59XHRcblxuZnVuY3Rpb24gY2hhbmdlRWRpdFNlYXJjaChzZWFyY2hJZCwgc2VhcmNoRGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX1NFQVJDSCxcblx0XHRkYXRhOiB7XG5cdFx0XHRzZWFyY2hJZCwgc2VhcmNoRGF0YVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEVkaXRTZWFyY2goc2VhcmNoSWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkRWRpdFNlYXJjaEFwaSArICc/aWQ9JyArIHNlYXJjaElkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VFZGl0U2VhcmNoKHNlYXJjaElkLCBqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZEVkaXRSZWxhdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfRURJVF9SRUxBVElWRVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0UmVsYXRpdmUodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBzZWFyY2hJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZUVkaXRSZWxhdGl2ZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHVzZXJUb2tlbixcblx0XHRcdFx0XCJ1c2VyXCI6IHVzZXJJZCxcblx0XHRcdFx0XCJwZXRcIjogcGV0SWQsXG5cdFx0XHRcdFwiYWRkXCI6IHNlYXJjaElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRFZGl0UmVsYXRpdmUoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWRpdE93bmVyc2hpcCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9PV05FUlNISVBcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VFZGl0VHJhbnNmZXIoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfVFJBTlNGRVJcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWRpdFRyYW5zZmVyKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgcmVsYXRpdmVJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZUVkaXRUcmFuc2ZlckFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHVzZXJUb2tlbixcblx0XHRcdFx0XCJ1c2VyXCI6IHVzZXJJZCxcblx0XHRcdFx0XCJwZXRcIjogcGV0SWQsXG5cdFx0XHRcdFwicmVsYXRpdmVcIjogcmVsYXRpdmVJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRWRpdFRyYW5zZmVyKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVkaXRFbmQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfRU5EXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFRElSRUNUX1RPX0hPTUVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWRpdFJlbGF0aW9uKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZUVkaXRSZWxhdGlvbkFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHVzZXJUb2tlbixcblx0XHRcdFx0XCJ1c2VyXCI6IHVzZXJJZCxcblx0XHRcdFx0XCJwZXRcIjogcGV0SWQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmVjdFRvSG9tZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZWRpdC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRFeHBsb3JlTW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9FWFBMT1JFX1RZUEUgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfVFlQRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FWFBMT1JFX05BVFVSRSA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9OQVRVUkVcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9NT01FTlRTID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlRXhwbG9yZU1vbWVudHMobW9tZW50c0RhdGEsIHR5cGUsIG5hdHVyZSwgbG9hZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX01PTUVOVFMsXG5cdFx0ZGF0YToge1xuXHRcdFx0bW9tZW50c0RhdGEsIHR5cGUsIG5hdHVyZSwgbG9hZFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEV4cGxvcmVNb21lbnRzKHR5cGUsIG5hdHVyZSwgbG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9sb2FkPScgKyBsb2FkICsgJyZuYXR1cmU9JyArIG5hdHVyZSArICcmdHlwZT0nICsgdHlwZTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZEV4cGxvcmVNb21lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VFeHBsb3JlTW9tZW50cyhqc29uLCB0eXBlLCBuYXR1cmUsIGxvYWQpKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEV4cGxvcmVUeXBlKHR5cGUsIG5hdHVyZSwgbmV3VHlwZSkge1xuXHRpZiAobmV3VHlwZSA9PT0gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfVFlQRSxcblx0XHRcdGRhdGE6IG51bGxcblx0XHR9XG5cdH0gZWxzZSBpZiAobmF0dXJlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX1RZUEUsXG5cdFx0XHRkYXRhOiBuZXdUeXBlXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZWFkRXhwbG9yZU1vbWVudHMobmV3VHlwZSwgbmF0dXJlLCAwKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RXhwbG9yZU5hdHVyZShuYXR1cmUsIHR5cGUsIG5ld05hdHVyZSkge1xuXHRpZiAobmV3TmF0dXJlID09PSAtMSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTkFUVVJFLFxuXHRcdFx0ZGF0YTogbmV3TmF0dXJlXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZWFkRXhwbG9yZU1vbWVudHModHlwZSwgbmV3TmF0dXJlLCAwKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBkb21haW5VcmwsIHJlYWRIb21lTW9tZW50c0FwaSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX0hPTUVfTU9NRU5UUyA9IFwiaG9tZS9DSEFOR0VfSE9NRV9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZUhvbWVNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfSE9NRV9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEhvbWVNb21lbnRzKGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkSG9tZU1vbWVudHNBcGkgKyAnP2xvYWQ9JyArIGxvYWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUhvbWVNb21lbnRzKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ob21lLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZE1vbWVudFBhZ2VBcGksIGRlbGV0ZU1vbWVudFBhZ2VBcGksIHVwZGF0ZU1vbWVudExpa2VBcGksIFxuXHRyZWFkTW9tZW50Q29tbWVudHNBcGksIGNyZWF0ZU1vbWVudENvbW1lbnRBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9NT01FTlRfUEFHRSA9IFwibW9tZW50L0JVSUxEX01PTUVOVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19NT01FTlRfREVMRVRFID0gXCJtb21lbnQvU0hPV19NT01FTlRfREVMRVRFXCI7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVVNFUl9QQUdFID0gXCJtb21lbnQvUkVESVJFQ1RfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9MSUtFID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9MSUtFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9DT01NRU5UUyA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfQ09NTUVOVFNcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTU1FTlRfRU1QVFkgPSBcIm1vbWVudC9TSE9XX0NPTU1FTlRfRU1QVFlcIjtcbmV4cG9ydCBjb25zdCBBRERfTU9NRU5UX0NPTU1FTlQgPSBcIm1vbWVudC9BRERfTU9NRU5UX0NPTU1FTlRcIjtcblxuZnVuY3Rpb24gYnVpbGRNb21lbnRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9NT01FTlRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTW9tZW50UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRNb21lbnRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkTW9tZW50UGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9tZW50RGVsZXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfTU9NRU5UX0RFTEVURVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyY3RVc2VyUGFnZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9VU0VSX1BBR0Vcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9tZW50UGFnZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlTW9tZW50UGFnZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlZGlyY3RVc2VyUGFnZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbWVudExpa2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVNb21lbnRMaWtlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRDb21tZW50cyhtb21lbnRJZCwgY29tbWVudExvYWQsIGNvbW1lbnRBZGRlZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9pZD0nICsgbW9tZW50SWQgKyAnJmxvYWQ9JyArIGNvbW1lbnRMb2FkICsgJyZhZGQ9JyArIGNvbW1lbnRBZGRlZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudENvbW1lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRDb21tZW50cyhqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tbWVudEVtcHR5KCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQ09NTUVOVF9FTVBUWVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkge1xuXHRjb25zdCBkYXRhID0gW1xuXHRcdGNvbnRlbnQsXG5cdFx0ZG9tYWluVXJsICsgJy9wdWJsaWMvdXNlci8nICsgdXNlcklkICsgJy5qcGcnLFxuXHRcdCcvdXNlci8nICsgdXNlcklkLFxuXHRcdG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdF07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX01PTUVOVF9DT01NRU5ULFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbWVudENvbW1lbnQodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBjb250ZW50KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlTW9tZW50Q29tbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdjb250ZW50JzogY29udGVudFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZE1vbWVudENvbW1lbnQodXNlcklkLCBjb250ZW50KSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRQZXRQYWdlQXBpLCB1cGRhdGVQZXRXYXRjaEFwaSwgY3JlYXRlUGV0TW9tZW50QXBpLFxuXHRyZWFkUGV0TW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1BFVF9QQUdFID0gXCJwZXQvQlVJTERfUEVUX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQgPSBcInBldC9TSE9XX0FDQ09VTlRfUkVRVUlSRURcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX1dBVENIID0gXCJwZXQvQ0hBTkdFX1BFVF9XQVRDSFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QRVRfTU9NRU5UID0gXCJwZXQvQUREX1BFVF9NT01FTlRcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX01PTUVOVFMgPSBcInBldC9DSEFOR0VfUEVUX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRQZXRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9QRVRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkUGV0UGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWNjb3VudFJlcXVpcmVkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQUNDT1VOVF9SRVFVSVJFRFxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfV0FUQ0gsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQZXRXYXRjaCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVBldFdhdGNoQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVBldFdhdGNoKGFjdGlvbiwgdXNlcklkKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRQZXRNb21lbnQoaW5mbywgcGV0SWQsIG1lc3NhZ2UpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfUEVUX01PTUVOVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCBwZXRJZCwgbWVzc2FnZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBldE1vbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGltYWdlLCBtZXNzYWdlKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRsZXQgdHlwZSA9IGltYWdlLnR5cGU7XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCIvXCIpWzFdO1xuXHRcdHR5cGUgPSBcIi5cIiArIHR5cGU7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlLCB0eXBlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInBldFwiLCBwZXRJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCB1c2VySWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInRva2VuXCIsIHVzZXJUb2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVBldE1vbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZFBldE1vbWVudChyZXN1bHQsIHBldElkLCBtZXNzYWdlKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUEVUX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0TW9tZW50cyhwZXRJZCwgbG9hZCwgYWRkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBwYXJhbXMgPSAnP2FkZD0nICsgYWRkICsgJyZsb2FkPScgKyBsb2FkICsgJyZwZXQ9JyArIHBldElkO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUGV0TW9tZW50c0FwaSArIHBhcmFtcylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0TW9tZW50cyhqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFJlcXVlc3RQYWdlQXBpLCBkZWxldGVSZXF1ZXN0VXNlckFwaSwgY3JlYXRlUmVxdWVzdFVzZXJBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9SRVFVRVNUX1BBR0UgPSBcInJlcXVlc3QvQlVJTERfUkVRVUVTVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1JFUVVFU1RfVVNFUiA9IFwicmVxdWVzdC9DSEFOR0VfUkVRVUVTVF9VU0VSXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWVzdFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1JFUVVFU1RfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVxdWVzdFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUmVxdWVzdFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFJlcXVlc3RQYWdlKGpzb24pKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1JFUVVFU1RfVVNFUixcblx0XHRkYXRhOiBpbmRleFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVxdWVzdFVzZXIocGV0SWQsIGluZGV4LCB1c2VySWQsIHVzZXJUb2tlbiwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlVcmwgPSBhY3Rpb24gPT09IDAgPyBkZWxldGVSZXF1ZXN0VXNlckFwaSA6IGNyZWF0ZVJlcXVlc3RVc2VyQXBpO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUmVxdWVzdFVzZXIoaW5kZXgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRVc2VyUGFnZUFwaSwgcmVhZFVzZXJNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQlVJTERfVVNFUl9QQUdFID0gXCJ1c2VyL0JVSUxEX1VTRVJfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX01PTUVOVFMgPSBcInVzZXIvQ0hBTkdFX1VTRVJfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBidWlsZFVzZXJQYWdlKGluZm8sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1VTRVJfUEFHRSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkVXNlclBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkVXNlclBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRVc2VyUGFnZShqc29uLCBwYXJzZUludChpZCkpKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVXNlck1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9VU0VSX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkVXNlck1vbWVudHMoYmVsb25nLCBsb2FkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFVzZXJNb21lbnRzQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdiZWxvbmcnOiBiZWxvbmcsXG5cdFx0XHRcdCdsb2FkJzogbG9hZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VVc2VyTW9tZW50cyhqc29uKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXIuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkV2F0Y2hQYWdlQXBpLCBkZWxldGVXYXRjaFBldEFwaSwgY3JlYXRlV2F0Y2hQZXRBcGksXG5cdHJlYWRXYXRjaE1vbWVudHNBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9XQVRDSF9QQUdFID0gXCJ3YXRjaC9CVUlMRF9XQVRDSF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1dBVENIX1BFVCA9IFwid2F0Y2gvQ0hBTkdFX1dBVENIX1BFVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9XQVRDSF9NT01FTlRTID0gXCJ3YXRjaC9DSEFOR0VfV0FUQ0hfTU9NRU5UU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QRVRTX0xPQUQgPSBcIndhdGNoL0NIQU5HRV9QRVRTX0xPQURcIjtcblxuZnVuY3Rpb24gYnVpbGRXYXRjaFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1dBVENIX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFdhdGNoUGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRXYXRjaFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRXYXRjaFBhZ2UoanNvbikpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1dBVENIX1BFVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb24sIHBldElkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hQZXQodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVVybCA9IGFjdGlvbiA9PT0gMCA/IGRlbGV0ZVdhdGNoUGV0QXBpIDogY3JlYXRlV2F0Y2hQZXRBcGk7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VXYXRjaE1vbWVudHMobW9tZW50cywgbG9hZCwgbG9hZExpc3QpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfV0FUQ0hfTU9NRU5UUyxcblx0XHRkYXRhOiB7XG5cdFx0XHRtb21lbnRzLCBsb2FkLCBsb2FkTGlzdFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRXYXRjaE1vbWVudHMobGlzdHMsIGxvYWQsIGxvYWRMaXN0LCB1c2VySWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkV2F0Y2hNb21lbnRzQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdsaXN0JzogbGlzdHMsXG5cdFx0XHRcdCdsb2FkJzogbG9hZCxcblx0XHRcdFx0J3JvdXRlJzogbG9hZExpc3QsXG5cdFx0XHRcdCd1c2VyJzogdXNlcklkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVdhdGNoTW9tZW50cyhqc29uLCBsb2FkLCBsb2FkTGlzdCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBldHNMb2FkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRTX0xPQURcblx0fTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy93YXRjaC5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb21tZW50cyhkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGNvbW1lbnQuY29tbWVudF9jb250ZW50LFxuXHRcdFx0ZG9tYWluVXJsICsgXCIvcHVibGljL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQgKyBcIi5qcGdcIixcblx0XHRcdFwiL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQsXG5cdFx0XHRuZXcgRGF0ZShjb21tZW50LmNvbW1lbnRfdGltZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhY2NvdW50IGZyb20gJy4vcmVkdWNlcnMvYWNjb3VudCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL3JlZHVjZXJzL2hvbWUnO1xuaW1wb3J0IHBldCBmcm9tICcuL3JlZHVjZXJzL3BldCc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICcuL3JlZHVjZXJzL21vbWVudCc7XG5pbXBvcnQgZXhwbG9yZSBmcm9tICcuL3JlZHVjZXJzL2V4cGxvcmUnO1xuaW1wb3J0IHdhdGNoIGZyb20gJy4vcmVkdWNlcnMvd2F0Y2gnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZWR1Y2Vycy9yZXF1ZXN0JztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vcmVkdWNlcnMvc2V0dGluZyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vcmVkdWNlcnMvYWRkJztcbmltcG9ydCBlZGl0IGZyb20gJy4vcmVkdWNlcnMvZWRpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGFjY291bnQsXG5cdGhvbWUsXG5cdG1vbWVudCxcblx0cGV0LFxuXHR1c2VyLFxuXHRleHBsb3JlLFxuXHR3YXRjaCxcblx0cmVxdWVzdCxcblx0c2V0dGluZyxcblx0YWRkLFxuXHRlZGl0XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJpbXBvcnQgeyBcblx0Q0hBTkdFX0FDQ09VTlRfREFUQSwgQ0xFQVJfQUNDT1VOVF9EQVRBLCBSRURJUkVDVF9UT19TSUdOVVAsIENMRUFSX0FDQ09VTlRfU0lHTlVQXG59IGZyb20gJy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBDSEFOR0VfQUNDT1VOVF9OQU1FIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXR0aW5nJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRpZDogbnVsbCxcblx0bmFtZTogbnVsbCxcblx0dG9rZW46IG51bGwsXG5cdHJlZGlyZWN0U2lnbnVwOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGFbMF0gIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRpZDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF0pLFxuXHRcdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRcdHRva2VuOiBhY3Rpb24uZGF0YVsyXVxuXHRcdFx0XHR9O1x0XG5cdFx0XHR9XG5cdFx0Y2FzZSBDTEVBUl9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdHRva2VuOiBudWxsXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0FDQ09VTlRfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRuYW1lOiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1RPX1NJR05VUDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZWRpcmVjdFNpZ251cDogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENMRUFSX0FDQ09VTlRfU0lHTlVQOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0U2lnbnVwOiBmYWxzZVxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2FjY291bnQuanMiLCJpbXBvcnQgeyBcblx0Q0hBTkdFX0FERF9ERVRBSUwsIENIQU5HRV9BRERfVVBEQVRFLCBSRURJUkVDVF9UT19VU0VSXG59IGZyb20gJy4uL2FjdGlvbnMvYWRkJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL2luZGljYXRlIHVwZGF0ZSByZXN1bHRcblx0dXBkYXRlUmVzdWx0OiBudWxsLFxuXHQvL3N0b3JlIGF2YXRhciBpbWFnZVxuXHRjcmVhdGVBdmF0YXI6IG51bGwsXG5cdC8vc3RvcmUgcGV0IGdlbmRlclxuXHRjcmVhdGVHZW5kZXI6IG51bGwsXG5cdC8vc3RvcmUgY3JlYXRlIHR5cGVcblx0Y3JlYXRlVHlwZTogbnVsbCxcblx0Ly9zdG9yZSBjcmVhdGUgbmF0dXJlXG5cdGNyZWF0ZU5hdHVyZTogbnVsbCxcblx0cmVkaXJlY3RVc2VyOiBmYWxzZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0FERF9ERVRBSUw6XG5cdFx0XHRjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcblx0XHRcdG5ld1N0YXRlWydjcmVhdGUnICsgYWN0aW9uLmRhdGEudHlwZV0gPSBhY3Rpb24uZGF0YS52YWx1ZTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblx0XHRjYXNlIENIQU5HRV9BRERfVVBEQVRFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogYWN0aW9uLmRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9UT19VU0VSOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0VXNlcjogdHJ1ZVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hZGQuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfRURJVF9QQUdFLCBDSEFOR0VfRURJVF9VUERBVEUsIENIQU5HRV9FRElUX05BTUUsIENIQU5HRV9FRElUX1JFTU9WRSxcblx0UkVNT1ZFX0VESVRfUkVMQVRJVkUsIENIQU5HRV9FRElUX0FERCwgUkVTRVRfRURJVF9TRUFSQ0gsIENIQU5HRV9FRElUX1NFQVJDSCxcblx0QUREX0VESVRfUkVMQVRJVkUsIENIQU5HRV9FRElUX09XTkVSU0hJUCwgQ0hBTkdFX0VESVRfVFJBTlNGRVIsIENIQU5HRV9FRElUX0VORCxcblx0UkVESVJFQ1RfVE9fSE9NRVxufSBmcm9tICcuLi9hY3Rpb25zL2VkaXQnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcGV0IGRhdGFcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgcGV0IG5hbWVcblx0cGV0TmFtZTogXCJcIixcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgaW5mb1xuXHR1cGRhdGVSZXN1bHQ6IG51bGwsXG5cdC8vc2hvdyBlbmQgcmVsYXRpb24gYm94XG5cdHNob3dFbmQ6IGZhbHNlLFxuXHQvL3Nob3cgYWRkIHJlbGF0aXZlIGJveFxuXHRzaG93QWRkOiBmYWxzZSxcblx0Ly9jb250ZW50IGluIHNlYXJjaCBiYXJcblx0c2VhcmNoOiBcIlwiLFxuXHQvL3N0b3JlIHNlYXJjaCBkYXRhXG5cdHNlYXJjaERhdGE6IG51bGwsXG5cdC8vc2hvdyByZW1vdmUgcmVsYXRpdmUgYm94XG5cdHNob3dSZW1vdmU6IGZhbHNlLFxuXHQvL3Nob3cgdHJhbnNmZXIgYm94XG5cdHNob3dUcmFuc2ZlcjogZmFsc2UsXG5cdGRhdGFMb2FkZWQ6IGZhbHNlLFxuXHRyZWRpcmVjdEhvbWU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfRURJVF9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHRwZXROYW1lOiBhY3Rpb24uZGF0YS5wZXRfbmFtZSxcblx0XHRcdFx0ZGF0YUxvYWRlZDogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX1VQREFURTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXROYW1lOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTmFtZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfUkVNT1ZFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dSZW1vdmU6ICFzdGF0ZS5zaG93UmVtb3ZlXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVNT1ZFX0VESVRfUkVMQVRJVkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1JlbW92ZTogZmFsc2UsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ1N1Y2Nlc3NmdWxseSByZW1vdmVkIHJlbGF0aXZlIScsXG5cdFx0XHRcdHBldERhdGE6IHsgLi4uc3RhdGUucGV0RGF0YSwgcmVsYXRpdmVfaWQ6IG51bGwgfVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX0FERDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93QWRkOiAhc3RhdGUuc2hvd0FkZCxcblx0XHRcdFx0c2VhcmNoOiAnJyxcblx0XHRcdFx0c2VhcmNoRGF0YTogbnVsbFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFU0VUX0VESVRfU0VBUkNIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlYXJjaDogJycsXG5cdFx0XHRcdHNlYXJjaERhdGE6IG51bGxcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9TRUFSQ0g6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VhcmNoOiBhY3Rpb24uZGF0YS5zZWFyY2hJZCxcblx0XHRcdFx0c2VhcmNoRGF0YTogYWN0aW9uLmRhdGEuc2VhcmNoRGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9FRElUX1JFTEFUSVZFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dBZGQ6IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2g6ICcnLFxuXHRcdFx0XHRzZWFyY2hEYXRhOiBudWxsLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdSZXF1ZXN0IHNlbnQgc3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9PV05FUlNISVA6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1RyYW5zZmVyOiAhc3RhdGUuc2hvd1RyYW5zZmVyXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfVFJBTlNGRVI6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1RyYW5zZmVyOiBmYWxzZSxcblx0XHRcdFx0cGV0RGF0YTogeyBcblx0XHRcdFx0XHQuLi5zdGF0ZS5wZXREYXRhLCBcblx0XHRcdFx0XHRvd25lcl9pZDogc3RhdGUucGV0RGF0YS5yZWxhdGl2ZV9pZCxcblx0XHRcdFx0XHRyZWxhdGl2ZV9pZDogc3RhdGUucGV0RGF0YS5vd25lcl9pZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdTdWNjZXNzZnVsbHkgdHJhbnNmZXJyZWQgb3duZXJzaGlwISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9FTkQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0VuZDogIXN0YXRlLnNob3dFbmRcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9UT19IT01FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0SG9tZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZWRpdC5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfRVhQTE9SRV9UWVBFLCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsIENIQU5HRV9FWFBMT1JFX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9leHBsb3JlJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdHR5cGU6IG51bGwsXG5cdG5hdHVyZTogbnVsbCxcblx0bW9tZW50c0RhdGE6IFtdLFxuXHRsb2FkOiAwLFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfVFlQRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0eXBlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9OQVRVUkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50cyA9IGFjdGlvbi5kYXRhLmxvYWQgPT09IDAgPyBcblx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhKSA6XG5cdFx0XHRcdHN0YXRlLm1vbWVudHNEYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50c0RhdGEpKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogbmV3TW9tZW50cyxcblx0XHRcdFx0dHlwZTogYWN0aW9uLmRhdGEudHlwZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YS5uYXR1cmUsXG5cdFx0XHRcdGxvYWQ6IGFjdGlvbi5kYXRhLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBDSEFOR0VfSE9NRV9NT01FTlRTIH0gZnJvbSAnLi4vYWN0aW9ucy9ob21lJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgbW9tZW50cyBkYXRhXG5cdGRhdGE6IFtdLFxuXHQvL3JlY29yZCBsb2FkIG51bWJlclxuXHRsb2FkOiAwLFxuXHQvL2FsbG93IGxvYWQgb3Igbm90XG5cdGxvY2tlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfSE9NRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfTU9NRU5UX1BBR0UsIFNIT1dfTU9NRU5UX0RFTEVURSwgUkVESVJFQ1RfVVNFUl9QQUdFLCBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdENIQU5HRV9NT01FTlRfQ09NTUVOVFMsIFNIT1dfQ09NTUVOVF9FTVBUWSwgQUREX01PTUVOVF9DT01NRU5UXG59IGZyb20gJy4uL2FjdGlvbnMvbW9tZW50JztcbmltcG9ydCBidWlsZENvbW1lbnRzIGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRDb21tZW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0bW9tZW50RGF0YTogW10sXG5cdGZhbWlseURhdGE6IFtdLFxuXHRsaWtlRGF0YTogW10sXG5cdGNvbW1lbnREYXRhOiBbXSxcblx0c2hvd0NvbmZpcm06IGZhbHNlLFxuXHRjb21tZW50TG9ja2VyOiBmYWxzZSxcblx0Y29tbWVudEFkZGVkOiAwLFxuXHRjb21tZW50TG9hZDogMCxcblx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRyZWRpcmVjdFVzZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfTU9NRU5UX1BBR0U6XG5cdFx0XHRjb25zdCBsaWtlRGF0YSA9IGFjdGlvbi5kYXRhWzJdLm1hcChmdW5jdGlvbihsaWtlKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludChsaWtlLnVzZXJfaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjb21tZW50RGF0YSA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGFbM10pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBbXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ub3duZXJfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLnJlbGF0aXZlX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XSxcblx0XHRcdFx0bGlrZURhdGEsXG5cdFx0XHRcdGNvbW1lbnREYXRhLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDVcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX01PTUVOVF9ERUxFVEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0NvbmZpcm06IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9VU0VSX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RVc2VyOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9MSUtFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxpa2VEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS5saWtlRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUubGlrZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGxpa2UpIHsgcmV0dXJuIGxpa2UgIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfQ09NTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdDb21tZW50cyA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbLi4uc3RhdGUuY29tbWVudERhdGEsIC4uLm5ld0NvbW1lbnRzXSxcblx0XHRcdFx0Y29tbWVudExvYWQ6IHN0YXRlLmNvbW1lbnRMb2FkICsgMSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAxMFxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQ09NTUVOVF9FTVBUWTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IFwiQ29tbWVudCBjYW7igLJ0IGJlIGVtcHR5XCJcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfTU9NRU5UX0NPTU1FTlQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuY29tbWVudERhdGFdLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IG51bGwsXG5cdFx0XHRcdGNvbW1lbnRBZGRlZDogc3RhdGUuY29tbWVudEFkZGVkICsgMVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9QRVRfUEFHRSwgU0hPV19BQ0NPVU5UX1JFUVVJUkVELCBDSEFOR0VfUEVUX1dBVENILCBBRERfUEVUX01PTUVOVCwgQ0hBTkdFX1BFVF9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCB7IG5vR2V0QWJpbGl0eSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9pbmRpY2F0ZSBwZXQgYmVsb25nIHRvIGN1cnJlbnQgdXNlciBvciBub3Rcblx0cGV0T3duZXI6IGZhbHNlLFxuXHQvL3N0b3JlIGRhdGEgZm9yIG9uZSBwZXRcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0J3MgZmFtaWx5XG5cdGZhbWlseURhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldHMgZnJpZW5kXG5cdGZyaWVuZERhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIGltYWdlIGdhbGxlcnlcblx0Z2FsbGVyeURhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vaW5kaWNhdGUgYWRkIGhvdyBtYW55IGltYWdlc1xuXHRhZGQ6IDAsXG5cdC8vc3RvcmUgYWxsIHdhdGNoZXIgb2YgY3VycmVudCBwZXRcblx0d2F0Y2hEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBub3RpY2UgdXNlciBsb2dpbiBvciBub3Rcblx0bG9naW5SZXF1aXJlZDogZmFsc2UsXG5cdC8vdHJpZ2dlciByZXNldCBmdW5jdGlvbiBmb3IgcG9zdCBpbWFnZVxuXHRyZXNldDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9QRVRfUEFHRTpcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10pO1xuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPSBhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9PT0gbnVsbCA/IFxuXHRcdFx0XHRudWxsIDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10pO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBhY3Rpb24uZGF0YVsxXSxcblx0XHRcdFx0ZnJpZW5kRGF0YTogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YVszXSksXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGFbNF0ubWFwKGZ1bmN0aW9uKHdhdGNoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHdhdGNoLnVzZXJfaWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQUNDT1VOVF9SRVFVSVJFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpblJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX1dBVENIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUud2F0Y2hEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS53YXRjaERhdGEuZmlsdGVyKGZ1bmN0aW9uKHdhdGNoKSB7IHJldHVybiB3YXRjaCAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX1BFVF9NT01FTlQ6XG5cdFx0XHRjb25zdCBuZXdNb21lbnQgPSBbXG5cdFx0XHRcdGRvbWFpblVybCArIFwiL3B1YmxpYy9wZXQvXCIgKyBhY3Rpb24uZGF0YS5wZXRJZCArIFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGFjdGlvbi5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMF1cblx0XHRcdF07XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGEuaW5mby5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgYWJpbGl0eSA9IG5vR2V0QWJpbGl0eShhY3Rpb24uZGF0YS5pbmZvWzJdKTtcblx0XHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IHsuLi5zdGF0ZS5wZXREYXRhfTtcblx0XHRcdFx0bmV3QWJpbGl0eVthYmlsaXR5XSA9IHBhcnNlSW50KHN0YXRlLnBldERhdGFbYWJpbGl0eV0pICsgMTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxLFxuXHRcdFx0XHRcdHBldERhdGE6IG5ld0FiaWxpdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9SRVFVRVNUX1BBR0UsIENIQU5HRV9SRVFVRVNUX1VTRVJcbn0gZnJvbSAnLi4vYWN0aW9ucy9yZXF1ZXN0JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHJlcXVlc3QgbGlzdFxuXHRyZXF1ZXN0RGF0YTogW10sXG5cdC8vc3RvcmUgYWNjZXB0IGxpc3Rcblx0YWNjZXB0TGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9SRVFVRVNUX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVxdWVzdERhdGE6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1JFUVVFU1RfVVNFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZXF1ZXN0RGF0YTogc3RhdGUucmVxdWVzdERhdGEuZmlsdGVyKChyZXF1ZXN0LCBpbmRleCkgPT4geyBcblx0XHRcdFx0XHRcdHJldHVybiBpbmRleCAhPT0gYWN0aW9uLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9TRVRUSU5HX1BBR0UsIENIQU5HRV9TRVRUSU5HX0FCT1VULCBDSEFOR0VfU0VUVElOR19OQU1FLCBcblx0Q0hBTkdFX1NFVFRJTkdfUFJPRklMRVxufSBmcm9tICcuLi9hY3Rpb25zL3NldHRpbmcnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgdXNlciBkYXRhXG5cdHVzZXJEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgcmVzdWx0XG5cdHVwZGF0ZVJlc3VsdDogbnVsbCxcblx0Ly9zdG9yZSB1c2VyIGFib3V0IGluZm9cblx0dXNlckFib3V0OiBcIlwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfU0VUVElOR19QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJEYXRhOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YS51c2VyX2Fib3V0XG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfQUJPVVQ6XG5cdFx0XHRpZiAoIWFjdGlvbi5kYXRhKSB7XG5cdFx0XHRcdGFjdGlvbi5kYXRhID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YSwgXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ01vb2QgdXBkYXRlZCBTdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9TRVRUSU5HX05BTUU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTmFtZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfUFJPRklMRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdQcm9maWxlIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3NldHRpbmcuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfVVNFUl9QQUdFLCBDSEFOR0VfVVNFUl9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHVzZXIgZGF0YVxuXHR1c2VyRGF0YTogW10sXG5cdC8vc3RvcmUgcmVsYXRpdmUgZGF0YVxuXHRyZWxhdGl2ZURhdGE6IFtdLFxuXHQvL3N0b3JlIHBldHMgbGlzdFxuXHRwZXRzRGF0YTogW10sXG5cdC8vc3RvcmUgbW9tZW50IGltYWdlc1xuXHRtb21lbnREYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIG1vbWVudCBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBpbWFnZXMgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vc3RvcmUgcGV0IGxpc3Rcblx0YmVsb25nRGF0YTogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1VTRVJfUEFHRTpcblx0XHRcdGxldCByZWxhdGl2ZURhdGEgPSBbXTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMV0uZm9yRWFjaChmdW5jdGlvbihwZXQpIHtcblx0XHRcdFx0aWYgKHBldC5yZWxhdGl2ZV9pZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlRGF0YS5wdXNoKFxuXHRcdFx0XHRcdFx0cGFyc2VJbnQocGV0LnJlbGF0aXZlX2lkKSA9PT0gYWN0aW9uLmRhdGEudXNlcklkID8gXG5cdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBldC5vd25lcl9pZCkgOiBwYXJzZUludChwZXQucmVsYXRpdmVfaWQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVx0XG5cdFx0XHR9KTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCA9IHBhcnNlSW50KGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCk7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckRhdGE6IGFjdGlvbi5kYXRhLmluZm9bMF0sXG5cdFx0XHRcdHBldHNEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzFdLFxuXHRcdFx0XHRiZWxvbmdEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzNdLFxuXHRcdFx0XHRtb21lbnREYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEuaW5mb1syXSksXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEuaW5mb1syXS5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRyZWxhdGl2ZURhdGE6IFsuLi5uZXcgU2V0KHJlbGF0aXZlRGF0YSldXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1VTRVJfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnREYXRhOiBzdGF0ZS5tb21lbnREYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpKSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9XQVRDSF9QQUdFLCBDSEFOR0VfV0FUQ0hfUEVULCBDSEFOR0VfV0FUQ0hfTU9NRU5UUywgQ0hBTkdFX1BFVFNfTE9BRFxufSBmcm9tICcuLi9hY3Rpb25zL3dhdGNoJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcGV0cyBkYXRhIG9uIHdhdGNoIGxpc3Rcblx0cGV0c0xpc3Q6IFtdLFxuXHQvL3N0b3JlIHBldCBoYXMgYmVlbiB1bndhdGNoZWRcblx0dW53YXRjaDogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBwZXQgbGlzdCBmb3IgaG93IG1hbnkgdGltZXNcblx0bG9hZFBldHM6IDEsXG5cdC8vc3RvcmUgcGV0cyBpZCBvbiB3YXRjaCBsaXN0XG5cdHdhdGNoTGlzdDogbnVsbCxcblx0Ly9zdG9yZSBsaXN0IG1vbWVudHMgdG8gc2hvd1xuXHRnYWxsZXJ5RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgd2hpY2ggbGlzdCB0byBzaG93XG5cdGxvYWRMaXN0OiBcIndhdGNoXCIsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIGltYWdlcyBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9pbmRpY2F0ZSBjbGljayBsb2FkIGZvciBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfV0FUQ0hfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXRzTGlzdDogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdHdhdGNoTGlzdDogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGFbMV0pLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhWzFdLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfUEVUOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVud2F0Y2g6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMCA/IFxuXHRcdFx0XHRcdFsuLi5zdGF0ZS51bndhdGNoLCBhY3Rpb24uZGF0YS5wZXRJZF0gOiBcblx0XHRcdFx0XHRzdGF0ZS51bndhdGNoLmZpbHRlcihpZCA9PiB7IGlkICE9PSBhY3Rpb24uZGF0YS5wZXRJZDsgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYWN0aW9uLmRhdGEubG9hZCA9PT0gMCA/XG5cdFx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpIDpcblx0XHRcdFx0XHRzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpKSxcblx0XHRcdFx0bG9hZDogYWN0aW9uLmRhdGEubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubW9tZW50cy5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRsb2FkTGlzdDogYWN0aW9uLmRhdGEubG9hZExpc3Rcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfUEVUU19MT0FEOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRQZXRzOiBzdGF0ZS5sb2FkUGV0cyArIDFcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJ1bmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBtb2Q6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxvYWQgIT09IHRoaXMucHJvcHMubG9hZCkge1xuICAgICAgdGhpcy5sb2FkKG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZChwcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG51bGwgfSk7XG4gICAgcHJvcHMubG9hZCgobW9kKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBtb2QuZGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUubW9kKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW5kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFxuXHRjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGEsIGNsZWFyQWNjb3VudFNpZ251cFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgZ29vZ2xlQ2xpZW50SWQsIGZhY2Vib29rQ2xpZW50SWQgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgR29vZ2xlbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVsb2dpbic7XG5pbXBvcnQgRmFjZWJvb2tsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4nO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd0Ryb3A6IGZhbHNlLFxuXHRcdFx0cmVkaXJlY3RIb21lOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuY2hhbmdlQWNjb3VudERhdGEoXG5cdFx0XHRbXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLCBcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSxcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblx0XHRcdF1cblx0XHQpO1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdEhvbWUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdEhvbWU6IGZhbHNlIH0pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hY2NvdW50LnJlZGlyZWN0U2lnbnVwKSB7XG5cdFx0XHR0aGlzLnByb3BzLmNsZWFyQWNjb3VudFNpZ251cCgpO1xuXHRcdH1cblx0fVxuXHRnTG9naW4oZGV0YWlsKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2dvb2dsZScsIGRldGFpbCk7XG5cdFx0fVxuXHR9XG5cdGZMb2dpbihyZXNwb25zZSwgdG9rZW4pIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZmFjZWJvb2snLCB7IHJlc3BvbnNlLCB0b2tlbiB9KTtcblx0XHR9XG5cdH1cblx0c2hvd0Ryb3AoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dEcm9wOiAhdGhpcy5zdGF0ZS5zaG93RHJvcCB9KTtcblx0fVxuXHRsb2dPdXQoKSB7XG5cdFx0aWYgKEZCKSB7XG5cdFx0XHRGQi5sb2dvdXQoKTtcblx0XHR9XG5cdFx0aWYgKGdhcGkpIHtcblx0XHRcdGxldCBhdXRoMiA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XG5cdFx0XHRhdXRoMi5zaWduT3V0KCk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuZGVsZXRlQWNjb3VudFRva2VuKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuXG5cdFx0KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3RIb21lOiB0cnVlIH0pO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdEhvbWUpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89eyAnLycgfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWNjb3VudC5yZWRpcmVjdFNpZ251cCkge1xuXHRcdFx0cmV0dXJuIDxSZWRpcmVjdCB0bz17ICcvc2lnbnVwJyB9IC8+O1xuXHRcdH1cblx0XHRjb25zdCBsb2dpblN0eWxlID0gdGhpcy5zdGF0ZS5zaG93RHJvcCA/IFwiaGVhZGVyLWRyb3BcIiA6IFwiaGVhZGVyLWRyb3AtaGlkZVwiO1xuXHRcdGNvbnN0IHVzZXJJbmZvID0gKFxuXHRcdFx0PGRpdiBpZD1cImhlYWRlci1sb2dpblwiIG9uQ2xpY2s9eyB0aGlzLnNob3dEcm9wLmJpbmQodGhpcykgfT5cblx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsID8gJ0xvZ2luJyA6IHRoaXMucHJvcHMuYWNjb3VudC5uYW1lIH1cblx0XHRcdFx0PC9oNT5cblx0XHRcdFx0PGltZyBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1kcm9wZG93bi5wbmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9nb3V0Qm9hcmQ7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd0Ryb3AgJiYgdGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsKSB7XG5cdFx0XHRsb2dvdXRCb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3BcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZCB9PjxoNT5Ib21lPC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3dhdGNoXCIgfT48aDU+V2F0Y2ggTGlzdDwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9yZXF1ZXN0XCIgfT48aDU+UmVxdWVzdHM8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvc2V0dGluZ1wiIH0+PGg1PlNldHRpbmc8L2g1PjwvYT5cblx0XHRcdFx0XHQ8aDYgaWQ9XCJoZWFkZXItZHJvcC1sb2dvdXRcIiBvbkNsaWNrPXsgdGhpcy5sb2dPdXQuYmluZCh0aGlzKSB9PkxvZyBPdXQ8L2g2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgaWQ9XCJoZWFkZXItbG9nb1wiIHNyYz1cIi9wdWJsaWMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZGVzY1wiPkhvbWVwYWdlIGZvciBwZXRzPC9oNT5cblx0XHRcdFx0eyB1c2VySW5mbyB9XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9leHBsb3JlXCI+XG5cdFx0XHRcdFx0PGg1PkV4cGxvcmU8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8aDU+UHVibGljPC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9eyBsb2dpblN0eWxlIH0+XG5cdFx0XHRcdFx0PGg1IGlkPVwiaGVhZGVyLWRyb3Atbm90aWNlXCI+Q2xpY2sgdG8gc2lnbiBpbiBvciBzaWduIHVwPC9oNT5cblx0XHRcdFx0XHQ8R29vZ2xlbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGdvb2dsZUNsaWVudElkIH0gXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjIwMHB4XCJcblx0XHRcdFx0XHRcdGdMb2dpbj17IHRoaXMuZ0xvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGYWNlYm9va2xvZ2luIFxuXHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBmYWNlYm9va0NsaWVudElkIH1cblx0XHRcdFx0XHRcdHdpZHRoPVwiMTk0cHhcIlxuXHRcdFx0XHRcdFx0ZkxvZ2luPXsgdGhpcy5mTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0eyBsb2dvdXRCb2FyZCB9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyBjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGEsIGNsZWFyQWNjb3VudFNpZ251cCB9XG4pKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5pbXBvcnQgSG9tZSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4uL3BhZ2VzL0hvbWUnO1xuaW1wb3J0IEV4cGxvcmUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuLi9wYWdlcy9FeHBsb3JlJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgVXNlciBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4uL3BhZ2VzL1VzZXInO1xuaW1wb3J0IE1vbWVudCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi4vcGFnZXMvTW9tZW50JztcbmltcG9ydCBXYXRjaCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT13YXRjaCEuLi9wYWdlcy9XYXRjaCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZXF1ZXN0IS4uL3BhZ2VzL1JlcXVlc3QnO1xuaW1wb3J0IFNldHRpbmcgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9TZXR0aW5nJztcbmltcG9ydCBFZGl0IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvRWRpdCc7XG5pbXBvcnQgQWRkIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvQWRkJztcbmltcG9ydCBTaWdudXAgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9TaWdudXAnO1xuaW1wb3J0IFRlcm1zIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4uL3BhZ2VzL1Rlcm1zJztcbmltcG9ydCBSZWFjdFVJIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4uL3BhZ2VzL1JlYWN0JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi4vcGFnZXMvUGFnZU5vdEZvdW5kJztcbmltcG9ydCBJbnRlcm5hbFNlcnZlckVycm9yIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4uL3BhZ2VzL0ludGVybmFsU2VydmVyRXJyb3InO1xuaW1wb3J0IEZvcmJpZGRlbiBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuLi9wYWdlcy9Gb3JiaWRkZW4nO1xuXG5jb25zdCBjcmVhdGVDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiAocHJvcHMpID0+IChcbiAgPEJ1bmRsZSBsb2FkPXsgY29tcG9uZW50IH0+XG4gICAge1xuICAgICAgKENvbXBvbmVudCkgPT4gQ29tcG9uZW50ID8gPENvbXBvbmVudCB7IC4uLnByb3BzIH0gLz4gOiBudWxsXG4gICAgfVxuICA8L0J1bmRsZT5cbik7XG5cbmNvbnN0IGdldFJvdXRlciA9ICgpID0+IChcbiAgPFJvdXRlcj5cbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEhvbWUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvZXhwbG9yZVwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChFeHBsb3JlKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BldC86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoUGV0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3VzZXIvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFVzZXIpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvbW9tZW50LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChNb21lbnQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvd2F0Y2hcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoV2F0Y2gpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcmVxdWVzdFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChSZXF1ZXN0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NldHRpbmdcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoU2V0dGluZykgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9lZGl0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChFZGl0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChBZGQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFNpZ251cCkgfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi90ZXJtc1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChUZXJtcykgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWFjdFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChSZWFjdFVJKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiLzUwMFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChJbnRlcm5hbFNlcnZlckVycm9yKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiLzQwM1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChGb3JiaWRkZW4pIH0gLz5cblx0XHRcdFx0PFJvdXRlIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQYWdlTm90Rm91bmQpIH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxuICAgICAgICA8aDY+wqkgMjAxNy0yMDE4IFNtaWxpbmdzLm1lPC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNi9UaG91c2FuZGF5LVdlYlwiIHRhcmdldD1cIl9fYmxhbmtcIj5Tb3VyY2UgQ29kZTwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViL2lzc3Vlc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5SZXBvcnQ8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwOi8vZ2x5cGhpY29ucy5jb21cIiB0YXJnZXQ9XCJfX2JsYW5rXCI+R2x5cGhpY29uczwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5UZXJtcyAmIFByaXZhY3kgUG9saWN5PC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjZcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+QWJvdXQ8L2E+PC9oNj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICA8L1JvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVycy9yb3V0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0V4cGxvcmUuanNcIikpO1xuXHR9LCBcImV4cGxvcmVcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWV4cGxvcmUhLi9zcmMvcGFnZXMvRXhwbG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vSG9tZS5qc1wiKSk7XG5cdH0sIFwiaG9tZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuL3NyYy9wYWdlcy9Ib21lLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Nb21lbnQuanNcIikpO1xuXHR9LCBcIm1vbWVudFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9bW9tZW50IS4vc3JjL3BhZ2VzL01vbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vUGV0LmpzXCIpKTtcblx0fSwgXCJwZXRcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXBldCEuL3NyYy9wYWdlcy9QZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0ZvcmJpZGRlbi5qc1wiKSk7XG5cdH0sIFwicmVhY3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4vc3JjL3BhZ2VzL0ZvcmJpZGRlbi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vSW50ZXJuYWxTZXJ2ZXJFcnJvci5qc1wiKSk7XG5cdH0sIFwicmVhY3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4vc3JjL3BhZ2VzL0ludGVybmFsU2VydmVyRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1BhZ2VOb3RGb3VuZC5qc1wiKSk7XG5cdH0sIFwicmVhY3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4vc3JjL3BhZ2VzL1BhZ2VOb3RGb3VuZC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vUmVhY3QuanNcIikpO1xuXHR9LCBcInJlYWN0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuL3NyYy9wYWdlcy9SZWFjdC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vUmVxdWVzdC5qc1wiKSk7XG5cdH0sIFwicmVxdWVzdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVxdWVzdCEuL3NyYy9wYWdlcy9SZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9BZGQuanNcIikpO1xuXHR9LCBcInNldHRpbmdcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi9zcmMvcGFnZXMvQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRWRpdC5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9FZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2V0dGluZy5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9TZXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2lnbnVwLmpzXCIpKTtcblx0fSwgXCJzZXR0aW5nXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4vc3JjL3BhZ2VzL1NpZ251cC5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1Rlcm1zLmpzXCIpKTtcblx0fSwgXCJ0ZXJtc1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dGVybXMhLi9zcmMvcGFnZXMvVGVybXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Vc2VyLmpzXCIpKTtcblx0fSwgXCJ1c2VyXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4vc3JjL3BhZ2VzL1VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9XYXRjaC5qc1wiKSk7XG5cdH0sIFwid2F0Y2hcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXdhdGNoIS4vc3JjL3BhZ2VzL1dhdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypnZW5lcmFsLWhlYWRlciovXFxuI2hlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogMDtcXG59XFxuI2hlYWRlci1kZXNje1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG4uaGVhZGVyLW5hdml7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXItbG9nb3tcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ2lue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXItbG9naW4gaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jaGVhZGVyLWxvZ2luIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItZHJvcHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbiNoZWFkZXItZHJvcC1tZXNzYWdle1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA1MjQ1NiAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogOHB4IDIlICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWRyb3AgYXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyLWRyb3AgaW5wdXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNoZWFkZXItZHJvcC1sb2dvdXR7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWY4NTEzO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wLWhpZGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHRcXHRcXHRcXG59XFxuI2hlYWRlci1kcm9wLW5vdGljZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLypGb290ZXIgc3R5bGUqL1xcbiNmb290ZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRwYWRkaW5nOiA1cHggMTAlO1xcblxcdG1hcmdpbi10b3A6IDcwcHg7XFxuXFx0Y2xlYXI6IGJvdGg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuI2Zvb3RlciBoNntcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdG1hcmdpbi1yaWdodDogMyU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0OHB4KSB7XFxuICAgICNoZWFkZXItbG9nb3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVye1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA1JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgICNoZWFkZXItZGVzY3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgICAjaGVhZGVyLWxvZ297XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=