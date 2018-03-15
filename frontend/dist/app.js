webpackJsonp([10],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(57)(content, options);

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

/***/ 152:
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 3:
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

/***/ }),

/***/ 36:
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

/***/ 37:
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

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(426));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _add = __webpack_require__(432);

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

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.REDIRECT_TO_USER = exports.CHANGE_ADD_UPDATE = exports.CHANGE_ADD_DETAIL = undefined;
exports.changeAddDetail = changeAddDetail;
exports.changeAddUpdate = changeAddUpdate;
exports.createAddPet = createAddPet;

var _config = __webpack_require__(3);

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
		}).then(function () {
			dispatch(redirectToUser());
		});
	};
}

/***/ }),

/***/ 55:
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

/***/ 56:
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

/***/ 57:
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

/***/ 58:
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

/***/ 62:
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

/***/ 63:
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

/***/ 64:
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

/***/ 65:
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

/***/ 66:
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

/***/ 67:
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

/***/ 68:
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

/***/ 69:
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

/***/ 70:
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

/***/ 71:
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

/***/ 72:
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

var _add = __webpack_require__(431);

var _add2 = _interopRequireDefault(_add);

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
	add: _add2.default
});

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(36);

var _setting = __webpack_require__(37);

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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _explore = __webpack_require__(64);

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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(65);

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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(66);

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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(67);

var _config = __webpack_require__(3);

var _noToInfo = __webpack_require__(58);

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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _request = __webpack_require__(68);

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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _setting = __webpack_require__(37);

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

/***/ 80:
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

/***/ 81:
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

/***/ 82:
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

/***/ 83:
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

/***/ 84:
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

var _Googlelogin = __webpack_require__(63);

var _Googlelogin2 = _interopRequireDefault(_Googlelogin);

var _Facebooklogin = __webpack_require__(62);

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

/***/ 85:
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

var _Add = __webpack_require__(425);

var _Add2 = _interopRequireDefault(_Add);

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
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/add', component: createComponent(_Add2.default) }),
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(158));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(7).then((function(require) {
		cb(__webpack_require__(159));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(160));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(161));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 9:
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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(162));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(9).then((function(require) {
		cb(__webpack_require__(163));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(164));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(8).then((function(require) {
		cb(__webpack_require__(165));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(6).then((function(require) {
		cb(__webpack_require__(166));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(167));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "/*general-header*/\n#header{\n    position: fixed;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid white;\n    background-color: #ef8513;\n    color: white;\n    z-index: 999;\n    vertical-align: middle;\n}\n#header-desc{\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin-left: 2%;\n}\n.header-navi{\n    color: white;\n    float: right;\n    margin-right: 5%;\n    cursor: pointer;\n}\n#header-logo{\n    float: left;\n    margin-left: 10%;\n    height: 40px;\n    margin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n/*Footer style*/\n#footer{\n    display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n    display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}\n\n@media only screen and (max-width: 948px) {\n    #header-logo{\n        margin-left: 5%;\n    }\n\n    #footer{\n        width: 90%;\n        padding: 5px 5%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    #header-desc{\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    #header-logo{\n        display: none;\n    }\n}", ""]);

// exports


/***/ })

},[156]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzPzdiN2QiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbm9Ub0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hb29nbGVsb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy93YXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9XYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzIl0sIm5hbWVzIjpbImRvbWFpblVybCIsImFuZHJvaWRTdG9yZVVybCIsImdvb2dsZUNsaWVudElkIiwiZmFjZWJvb2tDbGllbnRJZCIsInJlYWRBY2NvdW50RmFjZWJvb2tBcGkiLCJyZWFkQWNjb3VudEdvb2dsZUFwaSIsImRlbGV0ZUFjY291bnRUb2tlbkFwaSIsInJlYWRIb21lTW9tZW50c0FwaSIsInJlYWRFeHBsb3JlTW9tZW50c0FwaSIsInJlYWRQZXRQYWdlQXBpIiwidXBkYXRlUGV0V2F0Y2hBcGkiLCJjcmVhdGVQZXRNb21lbnRBcGkiLCJyZWFkUGV0TW9tZW50c0FwaSIsInJlYWRVc2VyUGFnZUFwaSIsInJlYWRVc2VyTW9tZW50c0FwaSIsInJlYWRNb21lbnRQYWdlQXBpIiwiZGVsZXRlTW9tZW50UGFnZUFwaSIsInVwZGF0ZU1vbWVudExpa2VBcGkiLCJyZWFkTW9tZW50Q29tbWVudHNBcGkiLCJjcmVhdGVNb21lbnRDb21tZW50QXBpIiwicmVhZFdhdGNoUGFnZUFwaSIsImNyZWF0ZVdhdGNoUGV0QXBpIiwiZGVsZXRlV2F0Y2hQZXRBcGkiLCJyZWFkV2F0Y2hNb21lbnRzQXBpIiwicmVhZFJlcXVlc3RQYWdlQXBpIiwiY3JlYXRlUmVxdWVzdFVzZXJBcGkiLCJkZWxldGVSZXF1ZXN0VXNlckFwaSIsInJlYWRTZXR0aW5nUGFnZUFwaSIsInVwZGF0ZVNldHRpbmdBYm91dEFwaSIsInVwZGF0ZVNldHRpbmdOYW1lQXBpIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGkiLCJjcmVhdGVBZGRQZXRBcGkiLCJjaGFuZ2VBY2NvdW50RGF0YSIsInJlYWRBY2NvdW50RGF0YSIsImRlbGV0ZUFjY291bnRUb2tlbiIsIkNIQU5HRV9BQ0NPVU5UX0RBVEEiLCJDTEVBUl9BQ0NPVU5UX0RBVEEiLCJkYXRhIiwidHlwZSIsInBvcnRhbCIsInRva2VuIiwiYXBpVXJsIiwiZGlzcGF0Y2giLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiY2xlYXJBY2NvdW50RGF0YSIsImlkIiwib2siLCJjbGVhciIsInJlYWRTZXR0aW5nUGFnZSIsInVwZGF0ZVNldHRpbmdBYm91dCIsInVwZGF0ZVNldHRpbmdOYW1lIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGUiLCJCVUlMRF9TRVRUSU5HX1BBR0UiLCJDSEFOR0VfU0VUVElOR19BQk9VVCIsIkNIQU5HRV9BQ0NPVU5UX05BTUUiLCJDSEFOR0VfU0VUVElOR19OQU1FIiwiQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSIsImJ1aWxkU2V0dGluZ1BhZ2UiLCJjaGFuZ2VTZXR0aW5nQWJvdXQiLCJhYm91dCIsImNoYW5nZUFjY291bnROYW1lIiwiY2hhbmdlU2V0dGluZ05hbWUiLCJjaGFuZ2VTZXR0aW5nUHJvZmlsZSIsIm5hbWUiLCJmaWxlIiwiZmlsZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3NEYXRhIiwicmVkdWNlciIsImluaXRTdGF0ZSIsInVwZGF0ZVJlc3VsdCIsImNyZWF0ZUF2YXRhciIsImNyZWF0ZUdlbmRlciIsImNyZWF0ZVR5cGUiLCJjcmVhdGVOYXR1cmUiLCJyZWRpcmVjdFVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld1N0YXRlIiwidmFsdWUiLCJjaGFuZ2VBZGREZXRhaWwiLCJjaGFuZ2VBZGRVcGRhdGUiLCJjcmVhdGVBZGRQZXQiLCJDSEFOR0VfQUREX0RFVEFJTCIsIkNIQU5HRV9BRERfVVBEQVRFIiwiUkVESVJFQ1RfVE9fVVNFUiIsInJlZGlyZWN0VG9Vc2VyIiwicGV0TmFtZSIsInBldEdlbmRlciIsInBldFR5cGUiLCJwZXROYXR1cmUiLCJwZXRBdmF0YXIiLCJ1c2VySWQiLCJ1c2VyVG9rZW4iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm9HZXRBYmlsaXR5Iiwibm9HZXRHZW5kZXIiLCJub0dldE5hdHVyZSIsIm5vR2V0VHlwZSIsInBhcnNlSW50IiwiRmFjZWJvb2tsb2dpbiIsInByb3BzIiwid2lkdGgiLCJoZWFkZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInNlbGYiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiY2xpZW50SWQiLCJ4ZmJtbCIsInZlcnNpb24iLCJmTG9naW4iLCJsb2dpbiIsInN0YXR1cyIsImF1dGhSZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiYXBpIiwic2V0U3RhdGUiLCJidXR0b25TdHlsZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiZmFjZWJvb2siLCJjbGlja0J1dHRvbiIsImJpbmQiLCJHb29nbGVsb2dpbiIsInJlc3VsdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInJlbGF5b3V0IiwiZ2FwaSIsImxvYWQiLCJpbnN0YW5jZSIsImF1dGgyIiwiY2xpZW50X2lkIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZ2V0IiwicHJvZmlsZSIsImdldEJhc2ljUHJvZmlsZSIsImdldEF1dGhJbnN0YW5jZSIsInNpZ25JbiIsImlzU2lnbmVkSW4iLCJnZXRJZCIsImdldE5hbWUiLCJmaXJzdG5hbWUiLCJnZXRHaXZlbk5hbWUiLCJsYXN0bmFtZSIsImdldEZhbWlseU5hbWUiLCJpbWFnZVVybCIsImdldEltYWdlVXJsIiwiZW1haWwiLCJnZXRFbWFpbCIsImdldEF1dGhSZXNwb25zZSIsImlkX3Rva2VuIiwiZ0xvZ2luIiwiZ29vZ2xlIiwicmVhZEV4cGxvcmVNb21lbnRzIiwic2VsZWN0RXhwbG9yZVR5cGUiLCJzZWxlY3RFeHBsb3JlTmF0dXJlIiwiQ0hBTkdFX0VYUExPUkVfVFlQRSIsIkNIQU5HRV9FWFBMT1JFX05BVFVSRSIsIkNIQU5HRV9FWFBMT1JFX01PTUVOVFMiLCJjaGFuZ2VFeHBsb3JlTW9tZW50cyIsIm1vbWVudHNEYXRhIiwibmF0dXJlIiwiYXBpUGFyYW1zIiwibmV3VHlwZSIsIm5ld05hdHVyZSIsInJlYWRIb21lTW9tZW50cyIsIkNIQU5HRV9IT01FX01PTUVOVFMiLCJjaGFuZ2VIb21lTW9tZW50cyIsInJlYWRNb21lbnRQYWdlIiwic2hvd01vbWVudERlbGV0ZSIsImRlbGV0ZU1vbWVudFBhZ2UiLCJ1cGRhdGVNb21lbnRMaWtlIiwicmVhZE1vbWVudENvbW1lbnRzIiwic2hvd0NvbW1lbnRFbXB0eSIsImNyZWF0ZU1vbWVudENvbW1lbnQiLCJCVUlMRF9NT01FTlRfUEFHRSIsIlNIT1dfTU9NRU5UX0RFTEVURSIsIlJFRElSRUNUX1VTRVJfUEFHRSIsIkNIQU5HRV9NT01FTlRfTElLRSIsIkNIQU5HRV9NT01FTlRfQ09NTUVOVFMiLCJTSE9XX0NPTU1FTlRfRU1QVFkiLCJBRERfTU9NRU5UX0NPTU1FTlQiLCJidWlsZE1vbWVudFBhZ2UiLCJyZWRpcmN0VXNlclBhZ2UiLCJtb21lbnRJZCIsInBldElkIiwiY2hhbmdlTW9tZW50TGlrZSIsImNoYW5nZU1vbWVudENvbW1lbnRzIiwiY29tbWVudExvYWQiLCJjb21tZW50QWRkZWQiLCJhZGRNb21lbnRDb21tZW50IiwiY29udGVudCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsInJlYWRQZXRQYWdlIiwic2hvd0FjY291bnRSZXF1aXJlZCIsInVwZGF0ZVBldFdhdGNoIiwiY3JlYXRlUGV0TW9tZW50IiwicmVhZFBldE1vbWVudHMiLCJCVUlMRF9QRVRfUEFHRSIsIlNIT1dfQUNDT1VOVF9SRVFVSVJFRCIsIkNIQU5HRV9QRVRfV0FUQ0giLCJBRERfUEVUX01PTUVOVCIsIkNIQU5HRV9QRVRfTU9NRU5UUyIsImJ1aWxkUGV0UGFnZSIsImNoYW5nZVBldFdhdGNoIiwiYWRkUGV0TW9tZW50IiwiaW5mbyIsIm1lc3NhZ2UiLCJpbWFnZSIsInNwbGl0IiwiY2hhbmdlUGV0TW9tZW50cyIsImFkZCIsInBhcmFtcyIsInJlYWRSZXF1ZXN0UGFnZSIsInVwZGF0ZVJlcXVlc3RVc2VyIiwiQlVJTERfUkVRVUVTVF9QQUdFIiwiQ0hBTkdFX1JFUVVFU1RfVVNFUiIsImJ1aWxkUmVxdWVzdFBhZ2UiLCJjaGFuZ2VSZXF1ZXN0VXNlciIsImluZGV4IiwicmVhZFVzZXJQYWdlIiwicmVhZFVzZXJNb21lbnRzIiwiQlVJTERfVVNFUl9QQUdFIiwiQ0hBTkdFX1VTRVJfTU9NRU5UUyIsImJ1aWxkVXNlclBhZ2UiLCJjaGFuZ2VVc2VyTW9tZW50cyIsImJlbG9uZyIsInJlYWRXYXRjaFBhZ2UiLCJ1cGRhdGVXYXRjaFBldCIsInJlYWRXYXRjaE1vbWVudHMiLCJjaGFuZ2VQZXRzTG9hZCIsIkJVSUxEX1dBVENIX1BBR0UiLCJDSEFOR0VfV0FUQ0hfUEVUIiwiQ0hBTkdFX1dBVENIX01PTUVOVFMiLCJDSEFOR0VfUEVUU19MT0FEIiwiYnVpbGRXYXRjaFBhZ2UiLCJjaGFuZ2VXYXRjaFBldCIsImNoYW5nZVdhdGNoTW9tZW50cyIsIm1vbWVudHMiLCJsb2FkTGlzdCIsImxpc3RzIiwiYnVpbGRDb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50X2NvbnRlbnQiLCJ1c2VyX2lkIiwiY29tbWVudF90aW1lIiwiYWNjb3VudCIsImhvbWUiLCJtb21lbnQiLCJwZXQiLCJleHBsb3JlIiwid2F0Y2giLCJyZXF1ZXN0Iiwic2V0dGluZyIsImxvY2tlciIsIm5ld01vbWVudHMiLCJjb25jYXQiLCJsZW5ndGgiLCJuZXdEYXRhIiwibW9tZW50RGF0YSIsImZhbWlseURhdGEiLCJsaWtlRGF0YSIsImNvbW1lbnREYXRhIiwic2hvd0NvbmZpcm0iLCJjb21tZW50TG9ja2VyIiwiY29tbWVudEVycm9yIiwibGlrZSIsIm93bmVyX2lkIiwicmVsYXRpdmVfaWQiLCJmaWx0ZXIiLCJuZXdDb21tZW50cyIsInBldE93bmVyIiwicGV0RGF0YSIsImZyaWVuZERhdGEiLCJnYWxsZXJ5RGF0YSIsIndhdGNoRGF0YSIsImxvZ2luUmVxdWlyZWQiLCJyZXNldCIsIm5ld01vbWVudCIsImFiaWxpdHkiLCJuZXdBYmlsaXR5IiwicmVxdWVzdERhdGEiLCJhY2NlcHRMaXN0IiwidXNlckRhdGEiLCJ1c2VyQWJvdXQiLCJ1c2VyX2Fib3V0IiwicmVsYXRpdmVEYXRhIiwicGV0c0RhdGEiLCJiZWxvbmdEYXRhIiwiZm9yRWFjaCIsInB1c2giLCJTZXQiLCJwZXRzTGlzdCIsInVud2F0Y2giLCJsb2FkUGV0cyIsIndhdGNoTGlzdCIsInN0b3JlIiwiQnVuZGxlIiwibW9kIiwibmV4dFByb3BzIiwiZGVmYXVsdCIsImNoaWxkcmVuIiwiSGVhZGVyIiwic2hvd0Ryb3AiLCJnZXRJdGVtIiwiZGV0YWlsIiwibG9nb3V0Iiwic2lnbk91dCIsImxvZ2luU3R5bGUiLCJ1c2VySW5mbyIsImxvZ291dEJvYXJkIiwibG9nT3V0IiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0Um91dGVyIiwiYnVpbGRHYWxsZXJ5IiwicGV0X2lkIiwiaW1hZ2VfbmFtZSIsIm1vbWVudF9tZXNzYWdlIiwibW9tZW50X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Qiw2QkFBNkIsa0JBQWtCLHdCQUF3QixHQUFHLGlCQUFpQixzQkFBc0IsZ0JBQWdCLG1CQUFtQix5QkFBeUIsc0JBQXNCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLGdEQUFnRCxzQkFBc0IseUJBQXlCLDBCQUEwQixHQUFHLHVCQUF1QixnREFBZ0QsaURBQWlELDhCQUE4Qix5Q0FBeUMsaUNBQWlDLDRCQUE0QixxQ0FBcUMsR0FBRyxpQkFBaUIsdUJBQXVCLHFCQUFxQix5QkFBeUIsdUJBQXVCLGlCQUFpQix5QkFBeUIsbUJBQW1CLGdDQUFnQywyQkFBMkIscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsZ0NBQWdDLG9CQUFvQix1QkFBdUIsR0FBRyxzQkFBc0IsdUNBQXVDLGlCQUFpQix1QkFBdUIsbUJBQW1CLHVCQUF1QiwwQkFBMEIsc0JBQXNCLG1DQUFtQyxHQUFHLG9CQUFvQixzQkFBc0IsZ0JBQWdCLG1CQUFtQix1QkFBdUIsc0JBQXNCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLGdEQUFnRCxzQkFBc0IseUJBQXlCLHlCQUF5QixTQUFTLHNCQUFzQixxQkFBcUIscUJBQXFCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEdBQUcsOEJBQThCLHFCQUFxQixlQUFlLDRCQUE0QixxQkFBcUIscUJBQXFCLGdCQUFnQixHQUFHLGVBQWUsNEJBQTRCLDJCQUEyQixxQkFBcUIsaUJBQWlCLEdBQUcsK0NBQStDLG1CQUFtQiwwQkFBMEIsT0FBTyxnQkFBZ0IscUJBQXFCLDBCQUEwQixPQUFPLEdBQUcsK0NBQStDLG1CQUFtQix3QkFBd0IsT0FBTyxHQUFHLCtDQUErQyxtQkFBbUIsd0JBQXdCLE9BQU8sR0FBRzs7QUFFbnZHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW5lcmFsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiZXhwb3J0IGNvbnN0IGRvbWFpblVybCA9ICdodHRwczovL3NtaWxpbmdzLm1lJztcblxuZXhwb3J0IGNvbnN0IGFuZHJvaWRTdG9yZVVybCA9ICdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnRob3VzYW5kYXknO1xuXG5leHBvcnQgY29uc3QgZ29vZ2xlQ2xpZW50SWQgPSAnMTY4MDk4ODUwMjM0LWZzcTg0cGs0Y2FlOTdtbGowazQ2NGpvYzIxY2dxanZ2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcbmV4cG9ydCBjb25zdCBmYWNlYm9va0NsaWVudElkID0gJzQ0NzY4ODI2NTU3NjEyNSc7XG5cbmV4cG9ydCBjb25zdCByZWFkQWNjb3VudEZhY2Vib29rQXBpID0gJy9hY2NvdW50L2ZhY2Vib29rJztcbmV4cG9ydCBjb25zdCByZWFkQWNjb3VudEdvb2dsZUFwaSA9ICcvYWNjb3VudC9nb29nbGUnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFjY291bnRUb2tlbkFwaSA9ICcvYWNjb3VudC9sb2dvdXQnO1xuXG5leHBvcnQgY29uc3QgcmVhZEhvbWVNb21lbnRzQXBpID0gJy9pbmRleC9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkRXhwbG9yZU1vbWVudHNBcGkgPSAnL2V4cGxvcmUvcmVhZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkUGV0UGFnZUFwaSA9ICcvcGV0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBldFdhdGNoQXBpID0gJy9wZXQvd2F0Y2gnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBldE1vbWVudEFwaSA9ICcvdXBsb2FkL21vbWVudCc7XG5leHBvcnQgY29uc3QgcmVhZFBldE1vbWVudHNBcGkgPSAnL3BldC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRVc2VyUGFnZUFwaSA9ICcvdXNlci9yZWFkJztcbmV4cG9ydCBjb25zdCByZWFkVXNlck1vbWVudHNBcGkgPSAnL3VzZXIvbG9hZCc7XG5cbmV4cG9ydCBjb25zdCByZWFkTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vbWVudFBhZ2VBcGkgPSAnL21vbWVudC9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vbWVudExpa2VBcGkgPSAnL21vbWVudC9saWtlJztcbmV4cG9ydCBjb25zdCByZWFkTW9tZW50Q29tbWVudHNBcGkgPSAnL21vbWVudC9sb2FkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVNb21lbnRDb21tZW50QXBpID0gJy9tb21lbnQvY29tbWVudCc7XG5cbmV4cG9ydCBjb25zdCByZWFkV2F0Y2hQYWdlQXBpID0gJy93YXRjaC9yZWFkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVXYXRjaFBldEFwaSA9ICcvd2F0Y2gvYWRkJztcbmV4cG9ydCBjb25zdCBkZWxldGVXYXRjaFBldEFwaSA9ICcvd2F0Y2gvcmVtb3ZlJztcbmV4cG9ydCBjb25zdCByZWFkV2F0Y2hNb21lbnRzQXBpID0gJy93YXRjaC9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRSZXF1ZXN0UGFnZUFwaSA9ICcvcmVxdWVzdC9yZWFkJztcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXF1ZXN0VXNlckFwaSA9ICcvcmVxdWVzdC9hY2NlcHQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcXVlc3RVc2VyQXBpID0gJy9yZXF1ZXN0L2RlbGV0ZSc7XG5cbmV4cG9ydCBjb25zdCByZWFkU2V0dGluZ1BhZ2VBcGkgPSAnL3NldHRpbmcvcmVhZCc7XG5leHBvcnQgY29uc3QgdXBkYXRlU2V0dGluZ0Fib3V0QXBpID0gJy9zZXR0aW5nL2Fib3V0JztcbmV4cG9ydCBjb25zdCB1cGRhdGVTZXR0aW5nTmFtZUFwaSA9ICcvc2V0dGluZy9uYW1lJztcbmV4cG9ydCBjb25zdCBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSA9ICcvdXBsb2FkL3VzZXInO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkUGV0QXBpID0gJy91cGxvYWQvYWRkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jb25maWcuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkQWNjb3VudEZhY2Vib29rQXBpLCByZWFkQWNjb3VudEdvb2dsZUFwaSwgZGVsZXRlQWNjb3VudFRva2VuQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0RBVEEgPSBcImFjY291bnQvQ0hBTkdFX0FDQ09VTlRfREFUQVwiO1xuZXhwb3J0IGNvbnN0IENMRUFSX0FDQ09VTlRfREFUQSA9IFwiYWNjb3VudC9DTEVBUl9BQ0NPVU5UX0RBVEFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjY291bnREYXRhKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUNDT1VOVF9EQVRBLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFjY291bnREYXRhKHBvcnRhbCwgdG9rZW4pIHtcblx0Y29uc3QgYXBpVXJsID0gcG9ydGFsID09PSAnZmFjZWJvb2snID8gcmVhZEFjY291bnRGYWNlYm9va0FwaSA6IHJlYWRBY2NvdW50R29vZ2xlQXBpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHRva2VuLCBcblx0XHRcdFx0XCJwbGF0Zm9ybVwiOiBcIndlYnNpdGVcIlxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCBqc29uWzBdKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIGpzb25bMV0pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGpzb25bMl0pO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VBY2NvdW50RGF0YShqc29uKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWNjb3VudERhdGEoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0xFQVJfQUNDT1VOVF9EQVRBXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFjY291bnRUb2tlbihpZCwgdG9rZW4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVBY2NvdW50VG9rZW5BcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB0b2tlbiwgXG5cdFx0XHRcdFwiaWRcIjogaWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRkaXNwYXRjaChjbGVhckFjY291bnREYXRhKCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkU2V0dGluZ1BhZ2VBcGksIHVwZGF0ZVNldHRpbmdBYm91dEFwaSwgdXBkYXRlU2V0dGluZ05hbWVBcGksXG5cdGNyZWF0ZVNldHRpbmdQcm9maWxlQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1NFVFRJTkdfUEFHRSA9ICdzZXR0aW5nL0JVSUxEX1NFVFRJTkdfUEFHRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFVFRJTkdfQUJPVVQgPSAnc2V0dGluZy9DSEFOR0VfU0VUVElOR19BQk9VVCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfTkFNRSA9ICdhY2NvdW50L0NIQU5HRV9BQ0NPVU5UX05BTUUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9TRVRUSU5HX05BTUUgPSAnc2V0dGluZy9DSEFOR0VfU0VUVElOR19OQU1FJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfU0VUVElOR19QUk9GSUxFID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSc7XG5cbmZ1bmN0aW9uIGJ1aWxkU2V0dGluZ1BhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1NFVFRJTkdfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkU2V0dGluZ1BhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkU2V0dGluZ1BhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkU2V0dGluZ1BhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdBYm91dChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfQUJPVVQsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ0Fib3V0KGlkLCB0b2tlbiwgYWJvdXQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVTZXR0aW5nQWJvdXRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCdhYm91dCc6IGFib3V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVNldHRpbmdBYm91dChhYm91dCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY2NvdW50TmFtZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FDQ09VTlRfTkFNRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdOYW1lKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9TRVRUSU5HX05BTUVcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ1Byb2ZpbGUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfUFJPRklMRVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ05hbWUoaWQsIHRva2VuLCBuYW1lKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlU2V0dGluZ05hbWVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCduYW1lJzogbmFtZVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgbmFtZSk7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUFjY291bnROYW1lKG5hbWUpKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ05hbWUoKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nUHJvZmlsZShpZCwgdG9rZW4sIGZpbGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLCBpZCArICcuanBnJyk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCBpZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ1Byb2ZpbGUoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3NldHRpbmcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0FkZC5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9BZGQuanNcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiaW1wb3J0IHsgXG5cdENIQU5HRV9BRERfREVUQUlMLCBDSEFOR0VfQUREX1VQREFURSwgUkVESVJFQ1RfVE9fVVNFUlxufSBmcm9tICcuLi9hY3Rpb25zL2FkZCc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgcmVzdWx0XG5cdHVwZGF0ZVJlc3VsdDogbnVsbCxcblx0Ly9zdG9yZSBhdmF0YXIgaW1hZ2Vcblx0Y3JlYXRlQXZhdGFyOiBudWxsLFxuXHQvL3N0b3JlIHBldCBnZW5kZXJcblx0Y3JlYXRlR2VuZGVyOiBudWxsLFxuXHQvL3N0b3JlIGNyZWF0ZSB0eXBlXG5cdGNyZWF0ZVR5cGU6IG51bGwsXG5cdC8vc3RvcmUgY3JlYXRlIG5hdHVyZVxuXHRjcmVhdGVOYXR1cmU6IG51bGwsXG5cdHJlZGlyZWN0VXNlcjogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BRERfREVUQUlMOlxuXHRcdFx0Y29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XG5cdFx0XHRuZXdTdGF0ZVsnY3JlYXRlJyArIGFjdGlvbi5kYXRhLnR5cGVdID0gYWN0aW9uLmRhdGEudmFsdWU7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cdFx0Y2FzZSBDSEFOR0VfQUREX1VQREFURTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVESVJFQ1RfVE9fVVNFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZWRpcmVjdFVzZXI6IHRydWVcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWRkLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCBjcmVhdGVBZGRQZXRBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfQUREX0RFVEFJTCA9ICdhZGQvQ0hBTkdFX0FERF9ERVRBSUwnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BRERfVVBEQVRFID0gJ2FkZC9DSEFOR0VfQUREX1VQREFURSc7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVE9fVVNFUiA9ICdhZGQvUkVESVJFQ1RfVE9fVVNFUic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBZGREZXRhaWwodHlwZSwgdmFsdWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUREX0RFVEFJTCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlLCB2YWx1ZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFkZFVwZGF0ZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FERF9VUERBVEUsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWRpcmVjdFRvVXNlcigpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9UT19VU0VSXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFBldChcblx0cGV0TmFtZSwgcGV0R2VuZGVyLCBwZXRUeXBlLCBwZXROYXR1cmUsIHBldEF2YXRhciwgdXNlcklkLCB1c2VyVG9rZW5cbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJuYW1lXCIsIHBldE5hbWUpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcImdlbmRlclwiLCBwZXRHZW5kZXIpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInR5cGVcIiwgcGV0VHlwZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibmF0dXJlXCIsIHBldE5hdHVyZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBwZXRBdmF0YXIsIFwiLnBuZ1wiKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIHVzZXJJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdXNlclRva2VuKTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlQWRkUGV0QXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmaWxlRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmVjdFRvVXNlcigpKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hZGQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZS5qcyc7XG5pbXBvcnQgZ2V0Um91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuXG5SZWFjdERvbS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntnZXRSb3V0ZXIoKX08L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnQgZnVuY3Rpb24gbm9HZXRBYmlsaXR5KHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICdhdHRhY2snO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnZGVmZW5kJztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJ2hlYWx0aCc7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuICdzd2lmdCc7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuICdsdWNreSc7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0R2VuZGVyKHZhbHVlKSB7XG5cdHJldHVybiBwYXJzZUludCh2YWx1ZSkgPT09IDAgPyBcIuKZglwiIDogXCLimYBcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0TmF0dXJlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiY3V0ZVwiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcInN0cm9uZ1wiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcInNtYXJ0XCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiYmVhdXR5XCI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0VHlwZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImRvZ1wiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcImNhdFwiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcImJpcmRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJmaXNoXCI7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFwib3RoZXJcIjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlYm9va2xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IFwiMTAwJVwiLFxuXHRcdFx0cmVzcG9uc2U6IG51bGxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHRcdGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdHNjcmlwdC5pZCA9IFwiZmFjZWJvb2stanNzZGtcIjtcblx0XHRzY3JpcHQuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSAoKSA9PiB7XG5cdFx0XHRGQi5pbml0KHtcblx0XHRcdFx0YXBwSWQgICAgICA6IHRoaXMucHJvcHMuY2xpZW50SWQsXG5cdFx0XHRcdHhmYm1sICAgICAgOiB0cnVlLFxuXHRcdFx0XHR2ZXJzaW9uICAgIDogJ3YyLjgnXG5cdFx0XHR9KTtcbi8vIFx0XHRcdEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuLy8gXHRcdFx0XHRcdGxldCB0b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcbi8vIFx0XHRcdFx0XHRGQi5hcGkoJy9tZScsIChyZXNwb25zZSkgPT4ge1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlIH0pO1xuLy8gIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG4vLyBcdFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlOiBmYWxzZSB9KTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRjbGlja0J1dHRvbigpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVzcG9uc2UpIHtcblx0XHRcdHRoaXMucHJvcHMuZkxvZ2luKHRoaXMuc3RhdGUucmVzcG9uc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRGQi5sb2dpbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG5cdFx0XHRcdFx0RkIuYXBpKCcvbWUnLCAocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZSB9KTtcblx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZkxvZ2luKHJlc3BvbnNlLCB0b2tlbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2U6IGZhbHNlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0fTtcblx0XHRsZXQgZmFjZWJvb2sgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBU0FBQUFBK0NBWUFBQUNMS01iZkFBQUt4bWxEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJ0bG5kVVU5a1doL2U5NlkyV1VLV0UzcEVpWFhvTm9DQlZzQkdTUUVJSklTU0lXTEF3T0FKalFVVUVLem9pb3VCWUFCa0xZc0dLWU84RE1xaW80MkRCaHNxN2dRY3phOWFiLzk1ZTY5enozWDErZDkrelQxbHJBOUJidUJKSkpxb0NrQ1dXU2FORC9Oa3pFNVBZcEVkQUFnVFVRQnZvWEY2dXhDOHFLZ0wrMVQ3Y3hyU1kzYkJWeFBwWDJmOGVVT1VMY25rQVNCUTJuTUxQNVdWaGZBUnIyM2dTcVF3QUY0djVUZWJMSkFyT3g1Z2x4U2FJY1ptQzA4WjRoNEpUeGhqN0Z0UEVSZ2RnbWdzQVpEcVhLMDBEb04zRS9PdzhYaG9XaC9ZZVkzc3hYeVFHb0p0ZzdNMFRjdmtZWXcxc3NyS3lGYndXWTR1VXY4VkoreHR6dVNrVE1ibmN0QWtleXdYN0V2dHhvQ2hYa3NsZE1QcnkvM3hrWmNxeDlSbzFmZXhKejgySUNjZDZNMnpOOG5uY29KaHhGZ280aWowYjlVdGsvdEhqTEpKeFlzZFpLQStORzJkNVJwemZPR2RraDAvb3hTblRJOGY5dk53QWJPM0hZaFlJWXhQR21TOElEQnBuYVhiMGhENDNMMmJDWHlBTW1ENnVTZWVHS2ZaN2RHNWNLVWIvWlVGbXlNUi9KYktvaVhtS002ZFA1SklxRFo3UUNITC95bGNtakEwZGp5UEREc0E0cDRxQ09lTXNsSVpPK0NXWm8yZDZkQTVTZWZURU9nakVjUk5yeU9jR1Rxd3R4SUlRNUNBR1BnaEFDaW1RRFprZ0F6WUVnZ2h5UVlLOWNRSGJicGtnSHp0akFBSFprZ1ZTVVpwUXh2YkRib1hBaHMwUjgreHMySTcyRGs2Z3VHTUtEY0E3amRHN2cyaGMrc3VYMHdiZ1hvTHRwK0o0c3hVcUFLNHh3TEduQU13UGYvbU0zNDZkMHhOZFBMazBiMHlIVjNRRW9JSXlzTERicXcvR1lBRzI0QWd1NEFtK0VBUmhFSWxsa2doemdZZmxrNFZsTWg4V3dUSW9obEpZQ3h1aENyYkRMdGdMQitBUU5NTnhPQTNuNFRKMHdTMTRBRDNRRHk5aEVEN0FNSUlnSklTQk1CRnR4QUF4UmF3UlI4UU44VWFDa0Fna0drbEVrcEUwUkl6SWtVWElDcVFVS1VlcWtKMUlIZklMY2d3NWpWeEV1cEY3U0M4eWdMeEZ2cUE0bEk2eVVEM1VESjJNdXFGK2FEZ2FpODVCMDlBY3RBQXRRbGVqbFdnTnVoOXRRaytqbDlGYmFBLzZFaDNDQVk2RzA4QVo0bXh4YnJnQVhDUXVDWmVLaytLVzRFcHdGYmdhWEFPdUZkZUJ1NEhyd2IzQ2ZjWVQ4VXc4RzIrTDk4U0g0dVB3UEh3T2ZnbStERitGMzR0dndwL0YzOEQzNGdmeDN3a01naTdCbXVCQjRCQm1FdElJOHduRmhBckNIc0pSd2puQ0xVSS80UU9SU05RZ21oTmRpYUhFUkdJNmNTR3hqTGlWMkVoc0kzWVQrNGhESkJKSm0yUk44aUpGa3Jna0dhbVl0Sm0wbjNTS2RKM1VUL3BFcHBFTnlJN2tZSElTV1V4ZVRxNGc3eU9mSkY4blB5TVBVMVFvcGhRUFNpU0ZUMWxBV1VQWlRXbWxYS1AwVTRhcHFsUnpxaGMxbHBwT1hVYXRwRFpRejFFZlV0L1JhRFFqbWp0dEJrMUVXMHFycEIya1hhRDEwajdUMWVoVzlBRDZiTHFjdnBwZVMyK2ozNk8vWXpBWVpneGZSaEpEeGxqTnFHT2NZVHhtZkZKaUt0a3BjWlQ0U29WSzFVcE5TdGVWWGl0VGxFMlYvWlRuS2hjb1Z5Z2ZWcjZtL0VxRm9tS21FcURDVlZtaVVxMXlUT1dPeXBBcVU5VkJOVkkxUzdWTWRaL3FSZFhuYWlRMU03VWdOYjVha2RvdXRUTnFmVXdjMDVnWndPUXhWekIzTTg4eCsxbEVsam1MdzBwbmxiSU9zRHBaZytwcTZsUFU0OVh6MWF2VlQ2ajNhT0EwekRRNEdwa2FhelFPYWR6VytLS3BwK21uS2RCY3BkbWdlVjN6bzlZa0xWOHRnVmFKVnFQV0xhMHYybXp0SU8wTTdYWGF6ZHFQZFBBNlZqb3pkT2JyYk5NNXAvTnFFbXVTNXlUZXBKSkpoeWJkMTBWMXJYU2pkUmZxN3RLOW9qdWtwNjhYb2lmUjI2eDNSdStWdm9hK3IzNjYvZ2I5ay9vREJrd0Rid09Sd1FhRFV3WXYyT3BzUDNZbXU1SjlsajFvcUdzWWFpZzMzR25ZYVRoc1pHNFVaN1RjcU5Ib2tUSFYyTTA0MVhpRGNidnhvSW1CeVRTVFJTYjFKdmROS2FadXBrTFRUYVlkcGgvTnpNMFN6RmFhTlpzOU45Y3k1NWdYbU5lYlA3UmdXUGhZNUZqVVdOeTBKRnE2V1daWWJyWHNza0t0bksyRVZ0VlcxNnhSYXhkcmtmVlc2MjRiZ28yN2pkaW14dWFPTGQzV3p6YlB0dDYyMTA3RExzSnV1VjJ6M2V2SkpwT1RKcStiM0RINXU3MnpmYWI5YnZzSERtb09ZUTdMSFZvZDNqcGFPZkljcXgxdk9qR2NncDBLblZxYzNreXhuaUtZc20zS1hXZW04elRubGM3dHp0OWNYRjJrTGcwdUE2NG1yc211VzF6dnVMSGNvdHpLM0M2NEU5ejkzUXZkajd0LzluRHhrSGtjOHZqVDA5WXp3M09mNS9PcDVsTUZVM2RQN2ZNeTh1SjY3ZlRxOFdaN0ozdnY4Tzd4TWZUaCt0VDRQUEUxOXVYNzd2Rjk1bWZwbCs2MzMrKzF2NzIvMVArby84Y0FqNERGQVcyQnVNQ1F3SkxBemlDMW9MaWdxcURId1ViQmFjSDF3WU1oemlFTFE5cENDYUhob2V0QzczRDBPRHhPSFdjd3pEVnNjZGpaY0hwNFRIaFYrSk1JcXdocFJPczBkRnJZdFBYVEhrNDNuUzZlM2h3Smtaekk5WkdQb3N5amNxSituVUdjRVRXamVzYlRhSWZvUmRFZE1jeVllVEg3WWo3RStzZXVpWDBRWnhFbmoydVBWNDZmSFY4WC96RWhNS0U4b1dmbTVKbUxaMTVPMUVrVUpiWWtrWkxpay9Za0RjMEttclZ4VnY5czU5bkZzMi9QTVorVFArZmlYSjI1bVhOUHpGT2V4NTEzT0ptUW5KQzhML2tyTjVKYnd4MUs0YVJzU1Jua0JmQTI4Vjd5ZmZrYitBTUNMMEc1NEZtcVYycDU2dk0wcjdUMWFRTkNIMkdGOEpVb1FGUWxlcE1lbXI0OS9XTkdaRVp0eGtobVFtWmpGamtyT2V1WVdFMmNJVDZiclorZG45MHRzWllVUzNweVBISTI1Z3hLdzZWN2NwSGNPYmt0TWhaV3pGeVJXOGgva1BmbWVlZFY1MzJhSHovL2NMNXF2amoveWdLckJhc1dQQ3NJTHZoNUlYNGhiMkg3SXNORnl4YjFMdlpidkhNSnNpUmxTWHVoY1dGUllmL1NrS1Y3bDFHWFpTeTd1dHgrZWZueTl5c1NWclFXNlJVdExlcjdJZVNIK21LbFltbnhuWldlSzdmL2lQOVI5R1BuS3FkVm0xZDlMK0dYWENxMUw2MG8vVnJHSzd2MGs4TlBsVCtOckU1ZDNibkdaYzIydGNTMTRyVzMxL21zMjF1dVdsNVEzcmQrMnZxbURld05KUnZlYjV5MzhXTEZsSXJ0bTZpYjVKdDZLaU1xV3phYmJGNjcrV3VWc09wV3RYOTE0eGJkTGF1MmZOekszM3A5bSsrMmh1MTYyMHUzZjlraDJuRjNaOGpPcGhxem1vcGR4RjE1dTU3dWp0L2Q4YlBiejNWN2RQYVU3dmxXSzY3dDJSdTk5MnlkYTEzZFB0MTlhK3JSZW5uOXdQN1orN3NPQkI1b2FiQnQyTm1vMFZoNkVBN0tENzc0SmZtWDI0ZkNEN1VmZGp2Y2NNVDB5SmFqektNbFRValRncWJCWm1GelQwdGlTL2V4c0dQdHJaNnRSMysxKzdYMnVPSHg2aFBxSjlhY3BKNHNPamx5cXVEVVVKdWs3ZFhwdE5OOTdmUGFINXlaZWVibTJSbG5POCtGbjd0d1B2ajhtUTYvamxNWHZDNGN2K2h4OGRnbHQwdk5sMTB1TjExeHZuTDBxdlBWbzUwdW5VM1hYSysxZExsM3RYWlA3VDU1M2VmNjZSdUJOODdmNU55OGZHdjZyZTdiY2JmdjNwbDlwK2N1Lys3emU1bjMzdHpQdXovOFlPbER3c09TUnlxUEtoN3JQcTc1emZLM3hoNlhuaE85Z2IxWG5zUThlZERINjN2NWUrN3ZYL3VMbmpLZVZqd3plRmIzM1BINThZSGdnYTRYczE3MHY1UzhISDVWL0lmcUgxdGVXN3crOHFmdm4xY0dadzcydjVHK0dYbGI5azc3WGUzN0tlL2JoNktHSG4vSStqRDhzZVNUOXFlOW45MCtkM3hKK1BKc2VQNVgwdGZLYjViZldyK0hmMzg0a2pVeUl1Rkt1YU8xQUE1N29xbXBBRzlyQVJpSldPM1FCVUJWR3F1QlJ4WElXTjJPc2FKK1Z6U0YvWVBINnVUUkVSZUFXbCtBdUtVQUVXMEEyN0JtaWpFZDZ4WGxYS3d2b0U1T0V3M3pLQ3czMWNseEZCQzZGQ3ROUG8yTXZOTURJTFVDZkpPT2pBeHZIUm41dGh1cjFlOEJ0T1dNMWQ0S05WRUZvTnhjVTRsRnZscUlUZnNmOWgvY3d2MkJPaXhwc3dBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBamRwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJbGhOVUNCRGIzSmxJRFV1TVM0eUlqNEtJQ0FnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQWdJQ0FnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNand2ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZXVkpsYzI5c2RYUnBiMjQrTnpJOEwzUnBabVk2V1ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S3VzdCtJUUFBS2ZaSlJFRlVlQUh0ZlFkZ1ZVWFcveS9scGIzMFhra0lrQUFKTFJCNlV3UVJWRkJBVkZSRTE2NmZxK3VuYTlsZDNmMWM5OXRGOTFOWDNUODJ4TEkyeExZV1JCRVJrTjRTQXFTUjNudlBlMG4rdnpNM04zbkVCQ2toRXZjZWVHM3UzSmt6Wjg2Y09XMXU3Tjc5Wkd2YmsyL3VoYXVESGRwZ2dFRUJnd0lHQmM0dUJlellmSDFMRys1Yk5nWjI0NWMrMXliQ0IxSnFnRUVCZ3dJR0JmcUNBdFIyUkFqWnV6a2F3cWN2NkczMFlWREFvSUFOQlNoMnpKUTk5b2JaWlVNVTQ2dEJBWU1DZlVZQmtUMzJmZGFiMFpGQkFZTUNCZ1c2VU1BUVFGMElZdncwS0dCUW9POG9ZQWlndnFPMTBaTkJBWU1DWFNoZ0NLQXVCREYrR2hRd0tOQjNGREFFVU4vUjJ1akpvSUJCZ1M0VU1BUlFGNElZUHcwS0dCVG9Pd29ZQXFqdmFHMzBaRkRBb0VBWENoZ0NxQXRCako4R0JRd0s5QjBGREFIVWQ3UTJlaklvWUZDZ0N3VU1BZFNGSU1aUGd3SUdCZnFPQW82OTBaV0R2UjBjZWFCVnBOblpQTnJSMHRvR0t3K3duYzArZW9NZVJoc0dCUXdLbkJ3RnprZ0FpU0J3cFBDcGJyQmlWMEVEME5ES2tyTjBySjdTTFN6QWhDRitMckJqeDRZUU9ya0pObW9aRkRpWEtYQkdBa2lFVDJGMU02YkVCZUd2dng0QlAyODN0TFcxaTRiZWtrTnN6bzV0aWVhemZYOE9YdmdvQ1Q3TzFMYll0OTdWdVV4Z0F6ZURBZ1lGZXFiQWFRc2dNYnVxR3l5WUZoK01SKytlaStBQXo1NTc2YVVyQ1NPakVlam5qb2RmM0lZd2R3ZTBVakFaUXFpWGlHczBZMURnWjZEQWFUdWhUZlQ1N01wcnhLSTV3NVR3RWMybnRiV1ZML2s4MVZjcldscGFPN1VuSVVSN2UxS3V0U2ZtSFhEKzFHRVlIVzVHZWIwVkRxSWFHV0JRd0tCQXY2WEFhV3RBYXUzWHQ4TEh3MFVOWGdTUXZmMnB5ek81ejg2dTh6NkxWUk0wWW1JNTJMVFgxcVlKRzNjM0o3aTdPS0tSSnBraGYvb3QzeG1JR3hSUUZEaHRBYVR1cGt4b3BRRFI0TlMxRVUzNDJDbi9UbXBHQVpLUEZ1QllRWlh5NzNpNk9TUEExdzBqWWtNUUhSbkVMcVFmemUrajdtc3YwZm8rOVhkbmt3UHNLY0drVlJGNkxkVGV6ald3STM1T2p2WUtUNGtBTmx0Ynpoa1VaWE13RVRlQms2V2ZUblBobVNiTDZZM0Z0dCtlaUNHY2VDN1JTM2hNL0tWT2pnNEtaU3UxK21hK1RuM0Y5RFRpMHlzWE40ckpCaWZCcTYvaHpBUVFzYlU3VFRMcXdxZXVvUm12Zi9BRGJudHRMOHh0TFFoMXBXK0hpODNOWkkrREgxYmlxWCtPeHoyM3pGVytIdEY0MUtTZDhjeTE0YXRqSldpcmFSVE93T2dRTDNpN3U1NVQvaVFacThWcXdYYzVsV2l0YVVZUWhYRnNvT2R4Mm1KZk00dmVuK0JXV2xPSEEvbFZxbWhrcUJkOFNUOU9tMXBvSmdjUlROeFlLTlJGT0lraUsrYjUrb3hTb0xhSnorSjB4clJ3WDZYaHl1SThXWkIreTlqdmZ0WHZDZTZrZ0F0a1FHU1krQ1Z0dE91VDdhYzM2d21Xc3RETGF4dXdMN2RDZG14RUIza2l5cytEOUtFVzM1dWRuVUpiUkFrVmRRM1ltMXZKdTlySVd4NEk5WFpYYzNnS3paeHgxVE1XUUtlTGdlenVBdTk4c2hPM1BiTWRGdzd6UUJ2THBGUXV5YzVmTkxjVkh1N09xbDZ2dmJIeHBxWkcvUFk4WDdpNzJ0SDNCS1JrTitCWWVRdWNUWTdIKzZGNnJkTlRhMGhvSUR1NHE0TUY5ODN3Z1plN0NjVVZUZGliMll3MkI2WWhuRnB6dlZwYjVxMnAyWUw0RURzc21oQ3MyajZTM1lpTU1pdmNuRTBvcTY3Ri9od0tHcTY4bUJCdmhQdDV3ZExDZVcxdHhpTnpBa0FMR3R4enNDbXBnY3p1eXJrK2dTQ3h3Vnp2Tnk3VURvc25ockI1M3FmK2Q3bWZQKzNwbnl5clltcEl1Z1VPanVJaTZGTEhwdDJ6L1ZYOGxMV05WZ3dQdHNlU1NXR0t0M09LbTdFOW94bGVKSVpzdG4wTlFzc0dpeFV4QWVBY2hwSTZyY2d1Yk1hQlhBdGNuWjM2ZEEzOExBSkkxMzdTczByeHpwY3BtRExRRFZiT2c1VzdaV21kQllYTUovSjN0a2Z4dGxyVUw3TDAydnlRN2dRN0ZGSHp1ZS9PRytEcjY2WGFYdlAyZXR6LzZnR01DUGJnWXVsN2h1ZzZRQWN1b0tvNksyS2pQUERiZTViQ3g5c1Q2Wm01dU9QUnRhaHVvbUJ5c2xjQ3F1dDlmZkZiVElta3lrYmNmZVU0TEwzc1BOWGxPK3MyNHI1VmV4RHFZWWVKTVdiY3VUQktMYlFqeHlxeGZuOGR6QzcwMnptMjRjRjdsc1BOelJVTkRZM1lkZXNMS0cza0JzTjVGbUg3VXlEOUhtSy9keXdaZzJXTEwvaXA2a2hMejhIeWg5NUZHOXQyb3VWekVsMzhaSnVuVThHWm12ekdJN1c0OC9JRVhIZmxITlhFOWwxSmVPSHF0YmhvV2lqcW02eW4wK3daM1NNQnBEMUZqYmh4Zmh4K2RlMUZxcTJOMyszQmk3LzdFck1IdXZTcHFmOHpDU0JOeThuS0xjYjY3RHBjR09aTW01aC9wcU81Rll0bkRzYTBjZEh3cG5QYjFjVUVmMTkzUlNCTmVKd1IzVHR1RnZYVEtxb1BRVXdEV1FCU2RqSWc2clQ0anVRbElQNE1lWFczaUtTSytDeWtiZGwxVkwxMkFhZm5NVW4vWFpjZm0xTmFUcHU5RTJyckxSUkFwRTFqQyt3ZG5XRFgzS1pVZXJsZmRrK3BxN0xRcFJOK2x6NUV0VC9SemlxNHl6aWtFNmxuaTdzanpTYzFOTFlsSnBTMEw2RHVJZU02Y2p4ZVRpWTBXZTNSM083SGtlOEIzTTEzRkRmZ3YwUkFMTkVFeE1idmR1TnZuNi9IN0dITUQrTStZbTMzWWNtbjBNT1pXcTRMRjZpUXBJM3VCK25QRmhldDU4NTMwU1phVDNLRGFHWFF3dDZPR2kzL1NaQkRCSmpjTHhZWmg2M0cxUk90WlB6MnJDaVdwSHdYR3NpcmhXL2QwVlVGVEtSdGViRnRuUi9rVXdIYmtXaXVEdXE3aXdQbnpWNXArbEl1bDd2elErcTRpQm5MLzRwWFRvU0x0TlhKbzUzMWRaemt1bUFsZnd6SGx0WUtKK0VKUlMrWlozN25mOVdYRFIvSS9iMEpQNHNBMGdmUTNFUi9RR1VUVEZGdXlLcW94OXl4WWZpdjY4K0RyNWVyWHVXc2ZMYXp4U20xTGN3bERGbFZWNCswMGtwVWx0V3ErLzBEUEJEdDV3MVA3dXl5OER0NGp2WGI2TlBLTDZ0RVNrRTV1R0lCSHpNbWhmaXJpUzJwcnVjQ2RJQ1B1eHNaVVJaS0p3aGptSjBka0ZWVWkwZWZXZ3NYSnp2VVVDdHNwSURtQ3NUUi9ETGswWTZKOC9WZ1BVZHN6QzRCdHRQc0VSam5pL0YwMnB0ZE5aK01WdGo1TGd4ZFZWZUhRMlZWa0Y0alBNd0k5dkhpb3BFNmJjZ3NLa1ZoZlFQY1RTYkVCUHJDMGRGRVBteERkWDBkanBaVzBVeG1ScnE3R1I5K25ZeXR1NCtxQlZkVWFZVzNDeHZZbEEzcnpjTTZPbXRyNDVpM3A2SXcyQkVoSHBvRFZsMWtHeTB0Rm55ZlJweVBsUUhGbEU2anZEQTJPZ1NlWnJNU1NLelNJK2dhZERYOVFadTJKc0ZrRXJOQnIwNEI3ZUNBblB4eW1tTEVuWUtralRUTExLMUFaaTc3U3E1bVJkTFJpN2JnVUI4a2hnZkNnM09ueXdjUkpuWnNyTFN5Q2dlS09XOTE1RkVHTElKOE9NLytYbkJ6Y1ZGQkU3MDNFZjUxcE5laGtncFVWOVp4WUczdzhmZkEwQUFmdUxscUVXSzlydjRwdklUQ09wcitlVWpMbzErSXBtdDhxQi85VnA0VWNKcUFrTG9hTHEwMGE2dXhuenpIeER1UkxnamtwaXc4WjJiN2txQ3JnK0pSbXJTVm5OOFUxcThYZkRoREh1UzdXTmIzTXJzcDJoN0hiUHJOOHNtbVpNTnNhR3JBMFpKS0ZEYzE4MC9ubU9oTDh5SVBPdmQ0bTIwVHAvcjlaeFZBb2g0TFJVVGFIcTZ3NEs0SU9qTXBmSVRCYkVGTm1HMUJIMzhYZm1sdHNXSnpaajVtaHJUaXdRV3hpQmtVcnZCTVNjM0dsMXVPWWt1bUNSTWlRam5mb2tIUVQySnBRbHBCUGhZaytPRDN5MmRRbTNOQlZtNFJYdjlrTDdVN055U084dVpFdHlLTHZwTUdxNFBhdGZSUmEvMEJMdloweXZzNjBiZGlqNnJhTnRycDFJYmM3REYzWERnWHFnbEhNa3V3OVdBdVhycDlNc2F1R3FvWTZPQ2hOTHo5NlY3azFiVEExOVBqdUIxYjJtMmdxamwya0R1dW1SWEVheTBvTEczQWwvdHFFZWpsZ1lxYVNpeWJIa2o4bk9nOGJzUFh1MHJRME9KQVBKc1JIMmFQcTZpZENvTm04ZGhOV1ZVOUJ2aHJUTm5Jb3ppT25MUGZQQktMOEZEZmp0bng5bkxIZzQrTm9WbnJnaTFKRkpLQ0FFSG12YVFrSDQ5ZkVZOExwaStDaTRzelV0T3o4Uy82QXc4WHR5RFkxNXNMaXl1eE85Q2FVRmRxYSt0eDZaMy94b0NoZ1JUK0xXcHhpWlpUYm1sRk1JVjJsQTgxYTg3RDRidzhySmdSaXFsM1RNQ2dxRENWTGxMRGpTVHBVQWJXZm5rQVdlVk5GTUpVTTdsWW03Z3BiczNPeFRXalBQSHJKZVBoUTdvME5qY2pOU01QbjJ4S3hiRXFUd3dJOEZjQ1d6YWtvd1hGaUhTcng4TUxZeG10RGFId3M4ZVI5RnlzL1RvRlJ5czlNSEtBNWllekhVcHpNNE1mSlZtNGErSEZDT2VHMU5EWWhLODNIOFNyZTdJd016cUNWYlhJWnhQNzNaV1Rod1d4THZqVlJYRUlEZmFIaGI2YjFJeGNmTFk1RlNubFpzUUVCMUl3YU5xWDhPak8zSHhNRHdPdVdoeUx5SENKSGdPWjJZWFlzUFVJZnNoaXdDVThoSUtadmljeW13MHBXVXNML05UVzE2T3B2Z1EzWHhBQmQ3TXJUTTVtN0VxcEpDODNVazVTbU90TXFsbys4N2MrRlVBYThqSUNlYlVQdjUwcFpTZzZRYVNlWHZ4ekN4OGRyNHlpUWp5M1lqUXV1K1I4K1B2N0tpYVdhNWZTbEZ1eHJCVHZydHVBSjk0N2pQZ0JZVXJkemk4dHhLcjc1K0RDV1ZQVkFwTzZBclBQbTRDeThncE1tVFFPUmNWbCtNcy9Qc0hHNUJvRXVEc3BEVXJxaUxralRzTFlFR2ZjdW1JQndrSUNrWHc0QTFzZlhRYy9UeGZjc0d3K3drSURzV3ZQUWR4OHJRTkdqeHd1dHlrWVBTb080OGVOd0s4ZmV4dFZ6VmJ1WEk0ZFFraWlVN3NyRzdCNGVqaHV2MmtlbkoyY2tKeVNoamUydnNYZDBSWFJnVTY0N2NhRkNBa0tRQ01YUmMxVGIyUHQ5Z3I2S1JxeGVONVVYRHgzS2hvcGpGYS90WjU5dGVIbTVmT1ZFRjc5ci9YWWY3Z0FmM3pvYXJYcjZ4ckttRkhEa1RBNkRvY09aMkxsVmF2VXVCU1NuT2ovKzkxVm1EWmx2SVkwMzBlT0dJNnhZK0p4LytOdkk3MnNrY3FpY3djOU9pcjk2QXNaSmEwUStkd1V4SHhUd0ExdG1LOG53cmpqaXhETEx5dkJta2Ztays2VDRNVHgyc0xFOFFrNGIzb2kvdmpVKzBpaEZ1WkdUYWVtcGhqdjNUOExzOCtmREMrdnp1eCtxOVZLMHpJZlQ2OWFoeS8yVnlBcXlCOUpPUVc0Y3FJMzdyN2xSZ3lRemFlZGc4V3N2bUpoRHY3ZjZrK3hmaCsxS0M1Y1cvRDJOQ01wK1ErSUd4N2JVVHovd2htWTh2RTNlSFROWHNTR2h0QVBZMFZWRlRlc2UyZGl6aXdORjMwdFdIanR1aXVMOE1xYm4rTDFid3VKaTJ3bXJjZ3RLY0xLNWFOeCthWGtVYjlPSG0waGoxNTNaVGw1OUN2OC9ZTVVEQTROb3dtbXBhRG9DTmh4WTZtdnFVZE9TeWxXUDdZSTB5YVBVenkrY1VzU1B0NjZSWm41c2o1bDVmWW05S2tBMG9TS0pxMWxFR0lEYXpvaGY1Qi9KSG9oSUtybnVRS1N1L0ZWZWdIK2VVTUNibHErVUUxS1EyTXowaklMbERZUU16Z01JU0ZCWE5CWGNGZDVEMDkrbklWaWFobXJiNStPQmZObnFXRTBORkFiT2xiSThUb2dObVpReC9nOGFNcElMbzN5RmRnTTJlWXJuR2dLQ1pnY0tVamFaOStGa1FvQldkeE5GREtIanVUUWhHaEJMSEdSK3JGRG9yRjAvaGpjOGZKQlRBbjNSak92Q1lqL0lzYlRDYnNPRmFPRTVsUjRhQUNDQXYxd1dVSVFYdGhjaHBYTGhzQlBhUUxVdnFpVmpCZ2Foc2Uvek1NOE9pWmpCOHZPRERTenYvVS9ITVBDODJNVkxhUk1ja25LYTF1eE55a0xBOFA5RUNwbUpxR1laa0JwZVMxU00wc1JHV0JXWmZMbTZlR09pZVBISXBsNHk4SWVRdE5MekpXb3lIQXNtWmVBSzFadXc1d2hZdEpxZUhmYzJPV0xLNTNienp3L0RjN09qSlJ5MXhMNm1DaEVzZ3RxOE8yQkd1d3BhY0p6TjA2RExHNkJ2SUl5Yk41K2hGcU9GVlBHRDhiZ2dhRVlGQjJKVzYrYmc4bjNmWXBJMXhhc3ZHMG1GaStjcmVyWE1reDlsUGxwWnVha3hRNEtRL1RBQVhqazNtdFE5YWMzOE5xZVF2em0vQUE4ZVBkVjhQUHpRVDFONHZSalJSUnlEdFN5Z2xrM0V2ZmNkZ1ZLLy9JbTlpVlhVakhXWmxVRXhTaHVHTFYxalRod0tFdjVPWWRFaDhLYjV0ZlZTK1lpZzRHWlQvYlVvS3kyRmsvZE9oMVhMTHBRNFZMTk1INmFqZ3ZuZVFBM3VudnZXSWFhK2pYWWtGU1BHdkxrM1pmSDRhYnJGeWtUdEtuSmdwUzBMTVZ6UTFrL2lKdktyVGN1b1RiM0RsN2tuTHJUYkxYbE02dUZvVW1heTJzMi94clRweWFxUHJmdk9Zckgvcm1ad3BDQkQ5SzF3NmVscnZiT1c1OEtvSGMrM0VwbUxLSHQ2a1FpMmVFSTdmK0VJV1lTejRyRVVGZDh2eWVYNnVnWFNvTVFSMXAxWFRNbWpvM0duQmtqZW1lMHA5aUtDTUxhUmd2bUQzSWpFMDlXQzY2K3ZoR3Z2UFVOL3ZlalZMaHdEQTh2amNOVmw4c2ljTUxDK2RQeDNzWTFHTUhGTkhYU2FOV2IxRi96M2lZOCttNEtKOTBlOTEwV2krdVhuc2NGTG1hT3RWMDdzV1dGNDVFVWhoV1FUNzJXcmJQeXpmZS94VTJ2SnlQT2JJOS8vR1ltWms0WnBlb1BHeklBOVJXN1lLL0pEVlVtUGlvL2h2VGY0UTUrSjlWeUVVRCsxQlFTNHFpei8zVWZFdjR5aHd2SXBOR2ZtOFB3MkVqYUdPc3hiR1lzaFlQczhFQitZU25XYlM3Qm90bWR2aDdKZ045N3JBWlRyM3dmcS84bkVjdXYwcUk5WXVKY01QTkRqTDBpREVPRHpCME1MQUdBOXovNUhuZS90QmNsUEUvNCtTTXpNWGVXeHZTUkVjRklDSFJHSXgzY3NoL3BRbGQxTG04VU1yb200TzN0alR0dnZhYnpFaXZiRSsrOUIxS3hidnZIckdyUGhlM0xSVjJrQlBUcXQ3L0ZueC9hei9vbCtPOC9UTUJmSDcxRjNSdmc3d05zcnNUbGp3ekIzQXNtcTdMeWltbzgrOG9HUFBkTkRnSjUrUGxaYWlMblRSMkpnQUEvekorVmdOYytYNGRibDErdmhFOXhTVGxXUHI4T2YzczlqYnRuRzE1OFpDbzFqZ3NSSEJ5QTVVdW00NVduWDFWT2JXbFlhRlhGVklWblhscVBKOVpuWTVTUENmOTcxM1JNbnp3Q3J1U2JSWmRNd1o5Ly94THUvTzBRWERSbmlzS2xvcklHVDcrOEhrOXV5TUZBc3dQK2RHTWlMcmx3UER3OTNiR0N0SDVxeFdwY1BNd0xTeGJPVXNKSE5yeFhPZGFIMzB1QkQzbE9lSFRab21tUWpldkt5MmRodzQ0MVdNK1FlNGVad1Y3czdGcnd4VmUzZEFpZnpUOGs0KzRudjFHYWtpZFBIZ2p2bkEzb1V3RzBnNmZabjFxWkNyOHA3aWpqV2E1NCtoQUN1U0RFMytCT3ArdmgvRHE4c1RlWm5qQm1qZEpuMlp6YWhEZWYxaGpmMWl3N0c0VG9yazBKVjI2aWorVEpSWU1RNk8rbnFxUWN6Y1lEN3laamZLQzdpaUk4dUdZUEVzZEVJMjdvUU83OGdaZzJNa1RWRXpOR0lEZS9CUGU4c1IrVGdqM3BDMm5Gbjk3ZWo4VFJVUmc3U2xPL2RWTlRWVDdCbTc3b2JLdms1aGZqMDIrUFlCSjlIZHVLNjdGclgzcUhBREs3MFFGS0gxUFgrNFNPSmpMVXdaUmNqRThZcWdST2VBakhOdENaMnBEbXZ6bVduWTlCQThNNW5nREVqSExDb0FGKzFDdzBUV3duKytBRWRRaERoUThGaFRJeVFreXMxMmx1aUlNV281enBvS2FXcDV5bEdoT0xlYmQyZlJLaTZXdnlaN09idGgzR2xBbkRtZk5sVm10Q2NzQUV6K003c1IyNTlsMU1QWXROZHJqOGRxRUFFdmRSUzVzRHhnZTc0Tzl2N01DMzZldVVzM3ZLQkIvY2NKYzN3b0lHWVBiTU1SME5pb2xDYnNQbytFaTRFd2VCZlFmVDhPakx5YmhvVWpEeXlodXc1c045akVSYWxTYWFYVmlEZTY0YWp1QWdqU2NLaTRyUlpxM0JZNytLVkQ2YW91SkNsRmRVOGJvL3dzUG9oNWxFYzVDYmpRNEhEMlhpOXk4bVkvNlVZT3pKSTg5L3VCMGo0NkxnVFgrVDhOQ1lTN2twRUJmUkZBWDJKNlhqc2RkU01DOHhDTGtWalhqMnJlM2tuMmh1SUlHSUhCQ0N4YU45TVRJbXVBTWY4UkhkOGVvZXpJcnlVV2tsTjcyOEU1UEdEdUtHRXFXRTR0UXhBN0NlNDlONVErZzJhY0lZYXFGYThDZU4vcmc3SHYrQW1wOFBqejJaem1yV2RwOEtJSDhmTnlUTTlVWjBBTlZyTXFRNFJDWDBMbndxa1I5dlprRXZIT3FsaUM1RWFZandRRlNFcHM2cndyUDRwc0xxeElQL0NXSWZTN2liQzZlOEdSR01VSWhtSUZCV3p1aENhVFBjSWpUU0ZSNXFSQ1YzS0FIUmdzS0RmVkJSVmNlRnFGMnZwMU92a2RxQk9jcVhqdWxXT0ZPcktpdVhTTXpwZzc0WGlZblF5RGJkcVUxeGk1WC9IU0Q0ZDdlQXhTK1NTUHB2MkpHRkpRdnFtZWJnUlNZT3hzMEx3eEVZNEVzVHk0Si9iOWlEYTVkNGNRR1lNVzlzRUJkSHBHcTNpZjZmWFFkeUFMY2ZzMDFuMTUzZmREdzdrR3IvSWs1b01WbWNIRjJWMzBYbVhnOXZjOXFWWDZuclBSMi8yYnp3aGl3ZVdlVFB2UFFsM0JnNWt6SzVWOHo2b3JJNitOR0hKTkd2NUx3Y1BMTjhCTTZucjhlUDJwNzR2Y3lzTC9NcFdtWG4rVVY3MGtMeitZaXdPSnlhUi9QTXJQeElBUlNVcVhrMXVKaDVNZ3dkY2xkcHhIT1BqSU5UdXlrY04yd0ludmpENEE0VVpkeGlNZ3Y0VTd0YVBES0l6bkJOQUVtZk9YbkZRRER4WThWQlBrN0lLYXBEQVRWTEVVQ09OR2VIUlhqQ2wxRTNBUkdPUjlMeUVCM0JYRG5lNjhmZ1EzVkRIYkp5UklNTlZCclBJR2FWQi9velM1NzhLcEJHaC9sQUR4UEh4bFFIdmdhN09qS1BMRThKSU9IemtDQnFmTEk1cWRwa0U1YUo4TmNobEpyeDRtbGhXUGxGUGlZT0NPeW9wMS92emM4ZmMxSnZ0dDZscmZ4aTJ1WHZsMkRQWkJLM3dvcW9RYTRZNU10SUJUVWcwVFpLYWkzWXNMc1NjQ1VoeXpsaGtTNVlGYVFKcEM1TjllcFAwVUtjcURxTElHeFZjeWdzcEJReHRiQzFYM3FYc3IxYU9uWVA4TGdFNzlJdnNweGhUQW1YdDRPVENDSS9PZTB2dXl6RDNOVlY5TlBvVTYvWE9yMVBZU1pwU2VWemRGR1JWUS9ISTY0NmtXcXVWQzgzcGxmaldGYWhKb0JvOWt5aUZpZm1XRlZWTGRaOGtZS0w1eVF5LzhnRFU4WU5vUk5jMCtiU0dBVk15NnVGblplV1gyT0x0ZXBLVnBTODJrRmh4M3dYRWVUTVNEZ2VpTHZrMVlocWIwc05tWXVUQlJHV2YxcVZoSWloQWJCd2NVclBUV3hQanZPRWVidmdLeDc5ZVBlZVdjb3BLNkg1dXZvbVpOQlBjemp0TUZxc2pUUkhadHAwcFVVdjlRSkpvWkI1VldGOHRLRFZVb2M1a1EwcUpTS0Rja3FGeU5zeEwyWUlQanV2ak9ZZjU1cGprZ1Z0c1ZqNHRZWCtwbGFVMTlFWWJCY09hbGVRcENmeWc5U1RsNlFyaUFEVndjNWVBZ2Y2TDJuU3lwNG9MTWxiZG5hU20wWGNwQTJDM05iQzU5SzA2YyttVWUzSmRhMTlyVTRMNjdYWFo0RnEyM2Eza2pJMmxKdFh3a2licjlLRXJsMDZCOXYydjRJS3BoaVk2UTlVUENhTjlUTDBxUUJhY2NVRVhEWW5udW54RHR5SkhMRmxaenFlK3ZRb1JnYTVNdkxSaElXSklYaitnUkZLclpaZFVoeUtvVHovSkVDNm5qVm9ySzlGNW1jSGtUUFJGOVltVHA3MHhZbDFkNlhXMCtaR3AyWVZHYWxaYVRnK1BDOERwenBVTWdTc2ZESGVUZkJpVkVOQWJPL0NzZ1prVUswdUs2K0NIN1dMVU81U2Q4MzB3N092N2VmS3Q2UHFQb1FheFJCVlg1anZURUhqMjFOclIycTdVekJ1MlptS2NXTmlsY041RnFORUFvZlRjckY3ZXczeXlJd1NWcDQrWlJ4YzZKc1FPRUt0NERzK2dpWEdMQXRORlozd3pXb1Z4MlkyQ3VuZkMrbmNZTFY3YkJiY1NUVFZiVDhpQklZTU5mTnNGVk0zMmdXUVhsRXlqQytJTk5QWlBWSnBDYVhNeC9yajM5ZmgyZStaQzdTakVnODhNS0JEQUduVWsxUUg0a3R3cFBZU0Z4dUc5STNmSW5xeEc3Ym5sdU9hTWU3NDlTM0w2VWR4SnQyT1lIZFNyb29JaXFhYm5wbkRxTkhMd05Sd09GQzR0K3loaGhQYmpNbEJMdkQwOHNNM1J5MjRacTZXQnlVNFI0cFd2emtmbG1ndmJNNHB4ODNqekVxYmtiNGxJVENqeElLS2FvYnFDU0k0NDJMQ2tiNzVHMFJmeG53NTVwOUZtdXN4c04wbkp4clZNV1kxZTNvMFVzaG93aTkyY0Roem5qNUZHRk5heE5KSUt5bGwyZ2o5ZkFTcFUxaGF4eWpEOFp0SWNrb21McjcvZlh5MmNpbmRDWkZzUHh6MzNuZ0I1dHo3RVdhUGp2NWxDS0NFa1lNVUVmUTMyWkh5bnovQS9CbDNwREppRVJQbGg4bmptYzl5bHVINDVXckhFTzA0ZkxjNVFnbEdmV0dKQ1NPTStNbFhCL0R1eGd3c1hWQk5UY0Nma3pNSVQ5OHdHbysvc1UzbEw2MjZjUWFHRElwVUdCY1VsZVA3cEZKa1YxbTRrUE1ZYWVFaFY2clZEOTl6TGFZazdxQVF0Y2NjaG5lOXZUV3RUdkE0MmNWbnUwT3FiYStEUnAwdDJOWlI2L3Y0Z1hiY0liMmFLZHdQSGkyQ0pQT0pxUlhCL0JDQnRNeENhbXh1Mkhjb0J4TVRoeU13VURPQmF5aHdkeWRsSTFRWXQxVjJiTnZtMnJVWXlUN3UyT2xCczhBYjE5OFd5RnlpWmhSVnNYNzdQYmEzYWpKWVNyVFM0OXExNmFMaks2dnBDMDArSzZsdE52TUlqNjBBa2dCR0EwM1RJVHdrSzNNb1VNK2RQQ3NyRStDQ2R4elJodWtUTlVlNVhGUG1LdjFhT3cva1l0NHNqUjRqNDJMdzRBT0RzZXJMUTRpbm1iVGl5a3N3bEJGTWdjMDcwdkQzYndweDU0b3FtaTV1R0JVZmc1VlBKK0xGai9iU0JMVERKWGNQeEEzWFhvb0krbisyVWxoOU1YMnQwcGpVelh5TEh4NkR4LzgyQ28rK3R3ZmovSnh4RmFOdTRsQVdrRWpkdHIyMXpOVXFwTE82VG0xdThYR0Q4Y2o5c1hqaDh4UjRjRGkzMzN3Si9UMmFWcHBKTGZhRG96VTA4U1JBVUU1QjVrLy9YUVNldVgwcy92ajZWdFhtUHhsTmt3aWphcDlKckQ4a1VVQjZtMGd6amVaYWVRbXk5OUFmOWNGMi9PNmVJQldWbkRhWmJTdzdqUC81ZHk1bVJOR01KSjE3Ry9wVUE5THQvRmFxZ3hLU2xsQWhqVlNObWVsNDFGUDdaUmZRdFFQWk1Yb1hoTjFrb1dqdHlxZUVZdVhWSFJ5aEd2LzRLOGV3NGJza1hMTjRtanJMZE1zTml6RmpTb0tLdUF4bHlOdEVmNEtZQTE5c1BJRE1TZ3ZDYVgrLytNNU9CTkduTW5oZ3NBcUJMbDAwWHpWZlZsR0RvenluRkRNb29uM0pTWEVuSXh5SEExZW52cUQxVDZHTC9sMk5RVlp3KzZyVnk2VU45YjM5R1VySHRja2ZvazRIMGZtLzkxZ3RmUjNpak5ZYzRyS2dNN0pLZUZyZGhIMkhpMVNVVHZkbFZkSTArNDdKaEFPOG5aa3MyTnhCUDcwdkM5djA5ZVNoV1Rwc2RZam5JbjcxK2NlWWE1U0IrS3RmMUFROEw2cGpJTzNtaTZBdWdsbkhYWnVYN3VkY3FDVGg3TTY2NUozMmR2USs1VlBNQ1UrYVlYdXphbEZiUzAyQ2Z1QUJFU0g0NisrVzQ4YlVUUHE4d2pCcVJHY1VUL0hhS0JNMjdDL0Y5TytUc2VDaThlcWM0RU8vV1lITEwwNm5hZXJEQlJ5aHVrZy9Wb0QzMWgraFdXTEMybi92eGgwclpzT0RBdnp1MjVjeFgyZUNNclZqeUJQaTBHMGtmMi9mbDAxSkxCbloycGhFWXhHQi84QTkxelBpTnBHSmpwNFl5UEMrZ0dqUW4yeEl3c2poWHZnbXVaekppVW00ZlA0RW1zSmUrTzI5MStQU2kxS1ZyMFpTT2FROUNlVy93NlRUa1Y3T3pNN252Vi90WTByQkxCVk51K1dHSmRUS1J0TnNzOE53K3FoRUVNdTYrbmo5WHVReWN6MkNwckdPay9RdFBqRy9lRE5lMzVLUEdST1RNZmY4c1VvelhuSDFQT3hLWG8wY25wLzBkWmZNNjk0VlFuMHFnUFJGMys1bzBRalFJWVZGZlJSU3ROdlgrZyt0cU5mZWhlRk5QRk5scGQ5SlFEdVhwSWtBNlY0cjFiNklROURTWW8rd0dBLzgzM3NIbVJGc3hhVnpFcFNkUEdwa0p3Tm41NVhpdzg5MzQ1bVBtT1RsSzZmVlcvSGE1blJxUTgvaDRlc21jZWVNNWdRN29hcW1BVytzMjRhRnM0WnFBb2pJYUl2cCtBV240MkR2d0dROEZUM1M3SHg3a3pQc1ZKbGdMbWVudUhBZG5TV0FJMFRqd3RQVWZMbW1YRTVNOGJmVmlxUmNRRWd1WjdBMk1SU2JmQ1NmVWJ4WVJmdk03Q0lrWlZaaERFMm1JelFqczNKTE1Hd0lCU1h4VERtYWgrOXpHakdQK1RsRWdrY3lPazl5dDltWlVNOFQ3Mk5vQ24yd0tZc214aTVxR0VPNTBOeG9RbkNoTU9JSmFvSnkyRmhBSHRGaHgyeGM4RnliV2dReXB2YjVrT2lWQStlbmMwYlVMZXEzbzczV3I4eVp6STNjNDhKOEZpV0FiU1pQelRHZDBSVU5iVmo3MlI3Y2VKVTdBbmlNUWhhdXZLVC9MVHNPTThBUlFLM1dENDVzWTJaOEFBV3pQWjVZdlpNYllTdG1UWXRUanVCeENTTVZBbUp1N3p1WWlWVnZiMlVreW9MSm9XWTgvMW1hY2pZdlhUQ2VqbDFmaklqcjFONExpeXVZZnJFRmIzeDlqRWMrNkVBbUh3bFltRjZ3YlhjeUJnNElZaDVYdkNxVHQvS0tXcno5MFRhOHZabGFwcWZtYy9remNSRmNMNWdlei93c0R5U09IYVhxaTRETllGN1ptK3QyWU8zV1hJUlRBRW5acytzT0tUL1JwUmVPVnZqWUpxaUtaclh1aXoxNGdTNFAyVVJLR2RHVGVSTVFlbG5wUStJelJqR1lFZFYvdkxVTHcySWltRWtkeUNoZU1HNi9ialp1ZlhJVGswTTFjYS96cDdyNUROL3NaaXg3L3JUYWt4UFpYK3l0eEk2WEwwZGl3aEFWeGVnUU1EK0JsR2hDVXZkelJsdm1QZkFWRm83enc0ZE05MzcraGxHNDdmclppdUZ0cGJNMEo0dEF5aVFWL2RhSDNzSzIxRXFFOGp5UHZrQi9vc3ZqTHNzQ2pBMXpwME5Sa3F2MFN4MWY5QUxWWDE1SlBaUENMTXBKbmxyZWlFbFJua2lNRCtGamFMVW9SUTc5UTF2MjVlRVFEMklPNU1US0J0SE1wSzVGMHhrVzlYZEZTVmtOUHZqNkNEYVhjSVUwa3duVGk3RnovVzMwdmNSQjhqdnVmK0o5N00yZ3FzMUloYTJqVDVqQ2lVSWlLdENOajBodzVGa3NDMjE5UnRlNHNLS0MzSGc4d3hGVkxNdGkrRjFvSTg1Y0h6Y1Rvb0lsbEcxSEh4VVQ0M2pleUltbkRxV3RyaUR5WFdnbi9VWXdSMGZhcmFocFFqYlREdlMxSE16eEJQbTRxa1dRWFZ6SG5DZ2VpT1ZGY1I0SGNKR0UrR3BoMndKcVBjVlZQTlBITmlSL3A0bnREaWQ5dlpqZExYTmR3bXRGUE1rK25ORWRKNXArb3VrZVlWUkowWjY0dVRrN1lBREhLUThzS3ljT3VjU2hPN0R0Vi9pbmdZdm9hSDZOMnVXN3F5K2FWbEdOQldNSGVtTEtXSWJZM1p4NGp3VjdEK1ZqSTdXNWhFaEdtemdPT2VoN2pPT1R4UzYweXVFZldwZ1I2NFBKWXlLb3lRaVAwYzlDMCsyVEgzS1VhUmZDcUpqUVcyaFJWTXVNZFFyZUtXUENGVS9JZUl0TGE3SDlZQjcyNTlZaGdqd3FrY29BSm9CR0JESVhpdGVUc3FxNG1CMXgzdmdvUG5UUHJKSkp2OStkaFkySHl4SFpMa3hrZmlqemtFMWNaaEtYc2ZHaHBLZUxtdXRqdVJYNGZuOCtjaXFiS2F5Y0ZOL0luTWs5bVN4TGpQVEFwRkZoa0tnelM1RmZWSTF0Qi9LUVZOQ0FBVjdjbEZncWMrL0hjWVFIU0IwKzM0bHpsRXYvcFJ3UXJ1TFJtaGc2N2Z5OHRQNGtUZVp3VHJWcVgxWHV4YmYvU0FFa2sxWEV4MzQwV0NUVXJ1MjEzZEZVbURHSWpPTENTWkZKazBoZEJYZnprZ1pHUmRTcXBqbkF4b0xjSE5SQ0ZxYVUwK0liY211dy9XK1hkSmcyVzdidHh2T3Zmb3FTeWpvc1d6QVpTeGRkcE5UYkkzVDRYdjdmYTJrT3laa3EvcE5PYkVENktPVmpPZXJJQU40VStENE1mM2N0ODJhWnpud1NUU3lnc0NRYThLWnA2NnZxMnpUWTVhc3dyTnhUVEZwd2pmQ3ZqZkNrT3dXU0RyVjB5SmR4ckhKV0w0QnRPVE42SnpqS2ZSTHBLeEhOaGlEWFpFT1NmdVVzbG94Rm50bGQweDROOUtPNjc4NVhRYlZGUFVwWEVqaURhS1lLM2dJaWVFczR6Z1paRkt6bnlWZDNvUGRieWdVaWdsNGVXaGZvVHA5VUY3clozaXRDU0hBcDRUMFNsUlBjUE5WOUpyWFF5aGlsOHVDNC9EZ0dGVlVrVWpJR2VTeE1LUVdUaXVUeEhoUGJDZWRpZDZaQWJ5YWVncnU4cFAxS3RsMUtPb21BMVBxZzFVVVRVSVNNTEhUQlc0UlFBWVVWV1FraE5IOGJaYTdZQitOYW1rQm5mWCthdnNKRE9zaDlPaTVsN2JqSVZUbkpIc3h4Uys2YzdlTmpGRDZrYlNYSFcxelBZQXBCNmhORkJKSkh2VG0zZW4wZHB5TFNYY0NYTlBmZ1M0U2UrTEdFenl2WXA0QWI2Uk5JM0RveFU4Vzk4dGJKYmIzU1hQOW9SQWdwTzRkTTJFK0JMQTZkSjJUeVpJR0tJTEFGdWE1UHJHZ2pvNms1dlBUdURxVUdSNFFGOE56WFdLcmJ3NVgyNXNrRG9nS2lFci8wcnkyS1lZVkJ1UG4rQ0dSQmlKWW4xNFV4dEYyM3Mwd1dvYTQxeVNJVWJVZlNHZ1FFSi8zYWp4cHVMOUR2a1VPYkF2TGJkZ0hZanRXV0RsTFBqUUlubXVGWkFmMmEwRk1FcERCM0FCbVd1Wm9LZEZ3aXZNVzAwa0NubC93U2hwZHJjajlKM0NQZWVyOEQyL3RsVmJYQXBZMmVRSEFUNGVJdmtidDJrUHRVT1hFVVJWYW5yVnlXUGtTUWlEQUlvS0N3QmJsSDhCWThCVlQvTExPbGszYWxuWll5R0tuSEQxY0t2Umc2bktWRTJwRmtTOGw3azkvU250U3hwVDJMVG9nTG0ramdPYWtySUczcFd1MkplRlRWWldYQlNlY1hRVlcwTTVrN3dVL3U5MnVubWZRbFpXY0RPbWZsTkZzL08yajFqSXpxcnhjNmxZazZIWkNKMFBhRjd1OFdKcExqRHB0U0t0RDZ6SmU0ZHNFWVJET0M0TXBGSTZaUkRxTVF4K2hyZWZtOW5kaWVUak9TSmtCWHhyTnR1VHM4dXl1VGU0U0piUmUyYlRzOWZUL1JQU2NhcS9CalQ4L21VWXRKM3JwQVQ3aWRDSWN1VFNqQjJsTy9YZXZxdjN1aXIxVTY3a2J3QytZOTNhTzNhZnQ1SWpycDlZUmVvamwxQVBzK0VSL3A5VTRWRjdudlpQQ1JlaWVhdzVOdFE5bzVFemd6QVVUcWlNVHNTNUR1WkNITHhQUngxeWM5VEZsb1l2dnZ6NmpFeXc5OWdkblJIZ2lpVmlSSVo1UTBZQ3Q5QTRrODd4VDJFOExucERzMEtob1U2S2NVT0RNQkpQYXdPQThVL05pSDBSTk54RXdSOFNIdnRtSkVGYk5FdTY0dWRyekpOUkYyY3A1S2RpZk4xOUJ4K1p6NklvSlJjUFNrdVRZbmloRWlPa3RUY3JRa056Tk5semxSN3VyNnFleXk1OVFBRFdRTUN2UVNCYlRZNEdrMEpydDhUS2d6TnUzTVZGRU5DU2VMWm5JeUwzbG9rMERYeDNGSXlGYWd1N2IwQ051QlE3bEl5cTJGUDUxcVlyT2V5eUJxYkJPZE94SWRFaitCdk9SWWdwVEpOUU1NQ3Z5blUrQzBOU0R4UTRUVGNmakdoalI0OE9EZmd0a2o0ZTM1NDZjWmRrZGdFUnh1Zk1aS2pTU0o4UWwvS3FMRUNFdzlIODBneVZqeWpKdXVwcDBzMklPSDgvRE02OXZnUUhWSVV0VDd5eUpXNHpQa1RYZXNZSlQ5aDFQZ3RNUHdPdDFFWjhsbWVGVkNzV0plcUNpSWZ2RW5Qc1dzNnJvdUplSmpDM0pkaXVRemovMTRVVkI1TVB3by9yd3VWVzF2TTc0YkZEQW8wQThvY05vYWtPM1lCdktzalBpQzFDbndrNVVLbEQ0U2ZwVlFzdzRpa0NRL29qdkpJclhDbWVvdkpwNW9QcDEzNlhjYm53WUZEQXIwTndxY3NRQVN6VVRNTVJFbThqb1ZrS1F3RVRvNmlQWWpSd1I2QXFsL3J2dDllc0xkS0Rjb1lGRGd4eFE0WXdHa042bjVWRzJraVg3aEZEN2w3dTRpWUtmUWhGSFZvSUJCZ1g1RWdaN1ZqWDQwQ0FOVmd3SUdCZm9uQlF3QjFEL256Y0Rhb01BdmdnS0dBUHBGVEtNeENJTUMvWk1DaGdEcW4vTm1ZRzFRNEJkQkFVTUEvU0ttMFJpRVFZSCtTUUZEQVBYUGVUT3dOaWp3aTZDQUlZQitFZE5vRE1LZ1FQK2tnQ0dBK3VlOEdWZ2JGUGhGVU1BUVFMK0lhVFFHWVZDZ2YxSkFmOHBGLzhUZXdOcWdnRUdCZmtzQk9YcGxYOGMvamRMMUJIcS9IWkdCdUVFQmd3TDlnZ0lpYzVUc21SVHJ4citmcFAxZDdYNkJ1WUdrUVFHREF2MmFBbkxtczV3eVIyU1A0eFZ6aDhMUE14WGJVbXJSeUtlR2FvZEsrL1g0RE9RTkNoZ1VPRWNwb0o1NHdUK09NbXUwSnk2WVBBVC9IMHVrVi85U3FTeFpBQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgXG5cdFx0XHRcdHN0eWxlPXsgYnV0dG9uU3R5bGUgfSBcblx0XHRcdFx0c3JjPXsgZmFjZWJvb2sgfSBcblx0XHRcdFx0YWx0PVwiTG9nIGluIHdpdGggRmFjZWJvb2tcIiBcblx0XHRcdFx0b25DbGljaz17IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKSB9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdHJlc3VsdDogbnVsbFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0bGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiO1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9ICAgXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRyZWxheW91dChzZWxmKTtcblx0XHRcdH0gICAgXG5cdFx0fSwgNTAwKTtcblx0XHRmdW5jdGlvbiByZWxheW91dChzZWxmKSB7XG5cdFx0XHRnYXBpLmxvYWQoJ2F1dGgyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBpbnN0YW5jZSA9IGdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiBzZWxmLnByb3BzLmNsaWVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnN0YW5jZS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgdXNlciA9IGluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpO1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbi8vIFx0XHRcdFx0XHRpZiAodXNlci5pc1NpZ25lZEluKCkpIHtcbi8vIFx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5sYXN0bmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmltYWdlVXJsID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LnRva2VuID0gdXNlci5nZXRBdXRoUmVzcG9uc2UoKS5pZF90b2tlbjtcbi8vIFx0XHRcdFx0XHRcdHNlbGYucHJvcHMuZ0xvZ2luKHJlc3VsdCk7XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuLy8gXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Y2xpY2tCdXR0b24oKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLnJlc3VsdCkge1xuXHRcdFx0bGV0IGluc3RhbmNlID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTsgXG5cdFx0XHRpbnN0YW5jZS5zaWduSW4oKS50aGVuKCgpID0+IHtcblx0XHRcdFx0bGV0IHVzZXIgPSBpbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKTtcblx0XHRcdFx0aWYgKHVzZXIuaXNTaWduZWRJbigpKSB7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xuXHRcdFx0XHRcdGxldCBwcm9maWxlID0gdXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaWQgPSBwcm9maWxlLmdldElkKCk7XG5cdFx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBwcm9maWxlLmdldE5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuZmlyc3RuYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQubGFzdG5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTtcblx0XHRcdFx0XHRyZXN1bHQuaW1hZ2VVcmwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuXHRcdFx0XHRcdHJlc3VsdC50b2tlbiA9IHVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nTG9naW4ocmVzdWx0KTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVzdWx0IH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBidXR0b25TdHlsZSA9IHtcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuXHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXG5cdFx0fTtcblx0XHRsZXQgZ29vZ2xlID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVg0QUFBQmNDQVlBQUFCcHlkNTFBQUFBQVhOU1IwSUFyczRjNlFBQUh2dEpSRUZVZUFIdFhRbVlGTlcxL3F2WFdSbldZUVlIQk1kUmhIRVFrRVhEYUNDSUd0eStNUkhVQ0NiaWtvZHhTNFRra2ZjZVdkU0VHSTFQZVpGZ1ZCUWpmdS9CcDRualU4SGxnWXBoQkpSOUcwZGtHVmFaalpucHRkNjUzVjNkVmRWVjAwMVA5MHczblB0OTFWMTExM1AvZSt2Y2M4ODk5eGJBamhGZ0JCZ0JSb0FSWUFRWUFVYUFFV0FFR0FGR2dCRmdCQmdCUm9BUllBUVlBVWFBRVdBRU1oRUJLVTZpNDQwWFozWWNqUkZnQkJnQlJpQkZDTWl4OG8zRjBLMlVnU1YwaWJpeDRzY3FqOE1aQVVhQUVXQUVVb09BWVBqaThvY3VuMWt4Wm94YytGdEgzZkgyNEI2REx2NmRaSEZNa0N5Vy9tYVpzRDhqd0Fnd0FveEE5eU1nKy8ySFpiLzdvNmJEbTMrKzRiOG1ma1VVQ2VZZk5RTXdZL3lDNlE4cEdITHBPa215OU9yKzZqQUZqQUFqd0Fnd0F2RWlJTXYraGhQN1BoMzcrYUlwWDFLYUtNbmZacEtSTFgvZ3lBV0M2WTg5eDRxSHZ1dEF2eDVDNDhQT0RJR2pUWDQ4OFpZYjY3Nk13dGdzQ2ZzekFvd0FJNUFTQkloMzl5d29IdkY3eXZ4bXVxS1lraEUzRjdNQWg4V1M5UzFCRVROOWdVSnNKd1pHZ1JVN1JvQVJZQVRTQVlFUUR4ZE1LVXF6WThyNEphdTFVQkRQa243OFRjaFl4WThWeDJRRUdJSFVJaERpNGFmRStNMVVRS21sbEhObkJCZ0JSb0FSU0NZQ2dwZkhMZkVielFTU1NRem54UWd3QW93QUk1QjZCQVF2ajR2eEMxS2lJcWFlUGk2QkVXQUVHQUZHSU1rSUdQSnlsdXlUakRKbnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTUFEUCtKQVBLMlRFQ2pBQWprTzRJTU9OUDl4WmkraGdCUm9BUlNESUN6UGlURENobnh3Z3dBb3hBdWlQQWpEL2RXNGpwWXdRWUFVWWd5UWd3NDA4eW9Kd2RJOEFJTUFMcGpnQXovblJ2SWFhUEVXQUVHSUVrSThDTVA4bUFjbmFNQUNQQUNLUTdBc3o0MDcyRm1ENUdnQkZnQkpLTVFOcC9jTVYzdUI3dW1rL2gyYjRaM2oyN0lEZWNnTCs1Q2JCSXNQVHFBMHZ2UHJBV0ZzRXhlaHdjWXkraDU3NUpob2l6WXdRWUFVYmc5RUlnTFJtL0xNdHdmYmdTN1crdWdPZUxEYWFJKytzUFFGemVyWnZnK3VEZFFEemIwT0hJbVQ0RHpna1RUZE54QUNQQUNEQUNaeklDYWNmNDNldi9pWlpGL3duZmw3c1RhaGZ2anExb21qOFh0cktoeUwzckozQ01ISk5RUHB5SUVXQUVHSUhURllHMDBmSExiamVhbjNrY2pYTi9rakRUVnplU2QvY09ORDQ4R3lkZmVCYXkzNjhPNG50R2dCRmdCTTVvQk5KQzR2YzNOYUx4Ri9mQnUzTjcwaHVqOVpYbjRhM2JnNEpmUDU3MHZEbERSb0FSWUFReUVZRnVaL3orRTkrZ1ljNXMrT3BxVTRPZnc0bnM2MjlLVGQ2Y0t5UEFDREFDR1loQXR6SisyZU5CNDM4OG5GS21YL0NiUDVMRno5Z01iQm9tbVJHSUQ0RXhJKzI0NVR3TFBGN0FicE94NW4wM1ZoeU5MeTNIT25VRThnZlk4UE5LSyt5RU40aURIdHZxeG9JdDhxbG4xSTBwdXBYeHR5ejhJN3piTnNkVmZkdDVGOEF4N2xzUVZqdVdYcjBCc3Z6eGsybW5kOWQydU5kOUF1LzJMZHA4U05JLzNabitaSHJocDF4Z3hWbTlKTkgvQU9xSXphMSsxSDNsd3hzYnZOaHlVZ3RKNEttZkRVdCs0RVJKTmozNVpMenpSaHNXN01pY1RudnpOVm1ZVldFTlZLVmhueHR6WHZZZ1JYTkZBL0NTNzVXTStneTd3STZLd1ZLWXVPeXZQY1Q0VTllbStmMnN1T05TRzBZV1daQ2w0aUFuanZtd2Zxc1hpN2VjM210cWhXZFpNYjQwVW5HdncwZU1YNHdDbWVNaTFIY3h6VzR5MHhUbW1yR2NiZGlGeUx2N2Z0aUhWeGhHZGRKZ2tIdmJMSGpJcExObDBWUEJnZVEwWi9ybDVYYjgyMVFIK2diNW53YVh2bjBzR0RMUWhrbVZUdXpmNnNLOWIzalJySW94ZVp3OXlQU0ZuMVhDbFpmYmlQRjdWREhTK05aaHhUVWhwaStvN0RuUWpxdjZlYkF3VTZYYkpOWEg3ZE8ybVpEOFUrTWszSG1qRTlQUE4raDRWR0RmQWd2S1N1Mllmb1VQSy83dXdzTGExQTArcWFsZm5MbnE4RzNYNFI5bkx0MGFyVnNZdjkvblJjdlRqOFdzZVBiMG1jajkwWThoV1dJYkg0bUJvZWVUaTNEeXIzOE9idVk2VGRVN1l5cXo4RHVhWnNialNvWTdzYXlIaEtra0ZTdk9xZHdvLzdhSXBLaDRaYzYvakpaSTFUS0hiRk5LOWZXUk1QL3VIRlQyb2NrY01SZWIxWS9ubm1yRHEwWXpPZE04a3hWZ3dZTDdzakU2TDQ3OHNxMm9tcGFEYzFlMjRzR2EwNVQ1eHdGRE9rZUp6VkZUUWYySmQrQXNYMDA5Mlh4S21IM1RiY2liTlRzdXBxK1FLRmx0eUJPMis2Y3AwMGMvTzM1cHdQUmJqb3NwdGdlYjl2bUZ0a2Zqc2dZNnNHUnlaS0JZdmRtTEJsV005ZXYwS1ZTQjZYWkxvdTBuWDBVWWliZlJqMjNxeXFRYnZiSG9pYU0rQlRuQlRHeUJKcFNRWjQrVmFXckM1OHd5WXZveXFSVzkrSFNuRjRkYUl1MmlVRkJ4UlJhcWNwVW4vazhuQkxwRjRwZnJsOEo1NFFrNmFxRU5KMWNNSVYyOVZnN051cVlxd01EVENhaDBvR1hxT0JyWU5JVDRzZXpGTml3K3FQSjBXUERJRDdNeG5xUkV4WlZjYUVQcEtsOUFGOTY4MTRNYkgvV2dPRmRDeTBsWm93WlM0cWZ6LzhLL3RXS2hRMEl4Wk5TNzA1blMrR2lMVlIvOWhNYXQ5NGl2bUU3RnlpOTE0TXBDYlJidFJ6eVkvNXdiTlNydjhuSUhIcm5PcnVxakZ0eDZsUlVybG1lZ0xrUlZyOVB4dHNzWnYreHBnSHpzelFDV3R2N3Q2UEhEblRqNTV0bnc3QzRJK0VsNStjaWRkZS9waUhYUzYzUm9rMXZMOUVVSmJqL21MWFZoK2YxTzlGUktwS24zQkhxb0ZkSnhyZ1UzRDdQQUVRbzdSZ3ZCMVlZTGdSS3FLdTJZT05pQ29KQXA0OUIrSDE3K3dJdldzMG5YWGlnaHdIZmIvRmhCaTNuS09rTHhBQ3VtbkJWVUh6bUlPYjlmUXdOT1R5c2VvTFdFb2FSMkNqaGFWTjY4aVhUekNTd0NqaGxxdzdEOEVQRmVHZTl1OUtFKzlKaXlzbW1ndVhtRU5ZeFo4emVrdzlicHI4dUpya3VJTGplOVVjZjJlQW5URUZHaHY4cVJOcHlqdkcxRTl3cWlXMkJtWEIvQ2Zvd1ZUcStFVXJFSUgzWVNMaHByZzd1RlBKcDllTlZrVWQ3YlJ1RzVWc3laVEdVcW1GTy9XUCtGQjR0TjBvU0xNTGlaY1psQ2VDaVE5R3YzRWRPdjFjWGRzc1dOeDJuQmQvN1l5QXl6NXlBU09oQVVPblRSQTQrVENaY0o1MWhSbEJQc0d4NmljOGN1SDE0SzRXT1VSdTBuRnBxblU5c01LN1NBdWprNUdjZVArdkhCcHg2c2lqa2JUS3lQcTh1UGRaL2YwNExwRjFPZkRkRm5JL29PMS92dyttb3ZhcnBSY05HMWFLeHFkRDVjUHJJYzhMdkNHVWxaZnVUZVdJZjJ0WVZvWDEyTTdPL2ZDa3VlVnE0TlJ6N0RiNXlSOXltSWhKbVc1cVFQT3hwbFhFd3dlbjBTc2tDTU9TUXBsZzZ6WTlZVmtXYjM3bk9oK21WZFJzTHlaeVpaL2lpalF3ajNNbG8wcnJ6SWptTTBxd2d2TE5ONnpmb3RMaWcyVlZPKzdjUU1sWVhKNkVGZUREbmZGclE2VXJWZjJXQWJwb3p4NEtFWG9obUlLcHJ1VnNLTTY1MFlGc1pCaHFPdUZZdERMM2lxeXM2blJlUlpWNmgwTEVmSVhMSldMWHBiOEVDVkUwTVVhb2RMcUg1T0d6N3phbFU0dGNleHJXMm9kcHZVQjJRMWM0V1QyaTNhVlZ6aVJNRE1nWERmdkNPQ3V6cG14YVFzVk9lUnhZM2FrL0lVQzY5WGtTWFV2YlRtb3d5V21paEdEN2xrS0ZBY0dyQkQ0ZXZmTjdla1dyT1cxdStJOFlmZjRHd0xobEkvcXRVeHVmS1JEdnhxaWgwa0UrZ2NNWEdpcytvN1BpejdieGNXNzQxV0lRVVRXRER2dGl4TUdxaWxUWVNWRFFUR2ozTGd0cDFrM0xCY2E5d1FMcXdUZlR5Y1I0YzNFaDZZbG9WclM2TzE2Y0w0WXZ4WUI5Wi8wSTQ1YTgzVjNSMW0zOG5BQ0Fmb1pFYnhKcGNiUG82S0tsSGJaVjk2QkxiQjFObXJwa2VGRzNsODltWG5wbzkwdUNkR0RZbnFkVVpGcFkxZmswdjdFaFNOY21KQm8xSG5rVEZ2WWFzeDNUb2VIMldSME5PRzVYZXFaZ3Y2WE9oRjdxdjJveGRhQ0ppSzAxdVlsQkhUTjNONXhYWThlbzBQMDk2TXZ5M2JCQU5SU2NGcWZwS3FzcHRyZmRoUDg1NFNwU0o5ckJnRFQwVE5RVE1nNGpVUlYyakZaQXBmcGZpUVZGcXMzTk8vOTdnWHEwT0VtOVZIMTB5cTFISGNSakg5U0pxZXRPYnorRlYrM1BwMi9KaEhVdE9kejRkL2RHU3pmdEtMZXhiN1VhS01reDQ1U3JJdEhlUEVVeXJoUTVPLzhrQVdUOU52emNIZ3Y3ZGlYbFI1VWx3THpTWG5PL0g2M1JiY3RVZ25YSFN5anlza212OUxtRWVMOHBOVTZ0Ym91QkpHVDh6R2t0eDJ6Q1ExYkZjNzg3Y3lSWlRJTFlwc0dGMkFvNklDVW5ab05TczZXT016ZDFtNzVqbVJoN2ZuNXNCT0pvMlo0bFp0OStIaFVWYVY5QnpzUE8rTThXRjFqUWZMMXRPVVdzMEpFNmpZbk84Wk1IMVM1Mnc3NkVjaFNTcDlkYk1BRWlUamN2djNlZEZrczJCWXNWWUM2anZjamtwaS9Hdml5aVd4U0owdjI0ZU45VEpLRk1uWGFzSFlma0JOU0owemxkWlF0QytTRlJPSFNsZ1ZVcXVVbjZ1VnZnL1JRS0tveGd4cjFDcGpKNmtEZXBDcXAyeWdGcStHSXo0Y0pUN2hvWis5aG9ram5xTGViVFJOTENPMW5Ob1ZsZHN3aGhpL1dqK3ZEbGZmNTFQNXBDV01PRkxUSFl3OEdkN1ZrNnJGZEVaQk00aEhEWmorZmxvay9vWndyZERWZC94MVdaaTZTOHlPSWtWVlhaOFZaVjNrYmZGaDJ3RVpoYVJhS2xJSkJ1Z1RMVnlrcW84ckZGWk9ka1l4L1hZeVJLaW5kdTFGUWtOUDFUdFVNdGFKbVd0YnNhU0xMYlcwL1ZXaFBKWC9yZ09tdVV2NW8wM0RVaEhRUUl1Yi9SUWRhQ29LU0hhZXRERDcyN1ZXekw5RXkyMXRlVlpNbWlndW9LWFJoM1ViUEhoK2JVVDNIVGNaWkRWMHVXNFI3eGhObDZmUmREbm8zSGpndG14Y2F6QzlOaTlEdXdCZFROUDQ1Nlk1SW1vSWV0bUhFbWRaRTFNZmExNkNlVWp5eXY1NGp4L1hGaXU0UzdpUW1EbUl3UUVTTGoxSHk1d0ZQVU9IVTl3ZFFkeEdhMmFXTWpadWl6RzlwNm5MbkJlQ1V1QWpEK1ppZkppUnlmaWZsOXJ4cW9vSkd0ZmRqNWNXdDJGSmFHQXFKbDNMaTFYMnlPQkUwdlJGaEhsTkhKZ0xsWTJvUlpoUnVHV1l6Q1dOU2RINVZsMUYrMC9VZmo2aTlma0lyZmxuMi9IaXJRN1ZZR1BCakNsV1ZDdXpRaG80YmgydXhmc1E3VmU1bGZhckJKMExkNUlwNmZUU3lHRFh0OEtCcW5mYnNFTGdscEkrcnE2UUZmZW8xamhFU04yNmRzd0tTL1UwR3lEamk0ajZUTUlVc3RSYmt1Z01URjMwS2R4ckVUeUZoQWxIOVRhYUozWDBOdzlMUWNnSll2eVo1dGFRWHZDeE5WNll6WGZ5Q3NRQWtJV2xOSnQ1eE1EMHM2UDZqaW0zUmhpeWlFaUxlQStFbWI3d2tQR25sOXV3TFNiakVYR0RiamZScTdZNnFxLzFndFRiR25jSzJXblN4WHBJWnRrMU8zd2F6QWNLeGk4Y0thbkx3d3J0b0ZmQW01aDllZUNSRm1UN1I1aVFXSHovT0piSUhNNUdDaTJzaHoyUUY4ZUVlTnZLOWpEVEZ5bnJhWVBldGtReEo0NGZadnFVVjh0aG5UUlBnOGpUczNPd2ZIWTJYb3U2Y3ZER2JDZG9yMkhJV1RCeGlBb0w4djMwRFMydHd1cHN6a3FGaVFlVDlhV0Y4OUpRRHVVVk50V2dRSjdVUis4Sk0vMWdwTVd2dFdHVHByNFdWTks2aTNDcDZPUEJVb08vcGJSWVhhVDJhUFNvbUw0SWtQSElteDVOWHlvNlQ2c0tWQ2RQMVgzWE0vNVUxU1NCZkU5RzFwZ1RTTjE5U1ZhdGNXSHE0NjFZc2NtSEZqTXlTSVUxbmpaN3ZYR0xvbXcxaXhqeDE2dGg2c2ptMzJqSzNuWUtLc25vWGFReXRoN3VtZ0UzcVdVZjlXS1hhb1RLNm04Tk1LTnlVdk1ZOEgyQUdPTGtBWVF0L1E4S1MreEErMEd5NW9oQWZzcDNLaEpPSWEyTWJRbGlubVBYTXVxc2ZBbUtVVldBQUxMR0dWUWdvU2Z0MmhVN2Q3VVg3VHNnUVdTQU1saVJoY3VnOENCQXFXbTk0SFVESzZOYVVsdldxZnNZR1JPTUNLVWJQVVRMc3VvMkdpM2VrdFhVNStvTWdNS3pndWxTMGNmVkRUR1dtTGpHMFJoV1JhcTFtMmxBQ0YvbmFqRUZXWTExdUJ5Z3lUQTVEK3JCUERrNXhzckZSbWFibnRBY1ZCL1hmVmp2azlMbkh0bTZCa2hwYVVuT25LYmNDOTlzcHd1b0pJbm9zdUUyakQyWHJDbDAvUzV2TUczZ29zVzhtWEZNSmZXTG8yMEdtM0tTVVF0OU9jbklNOTQ4RWk5YnhycDlNaW9VRlFJeGRETE1RRy9WOFFVTlgzbHdzSzhkd3dJamdZU1JaRGFMT3EyTy9NdmRXb1lVTDkyZGpVY3E4TVNjamtQWWlIbWZUVG1wVitwMFVhTEtDUTlXdE5BckJKWHdRRWw5K0p1bzJNS0QvQ25Sa1BDQVNZeFJEQjdrcDIrL1pwTSt1cWRCSzF6a2hWUzYrdlNwNnVQaGF0RWF3K3pyd2srbU41b0ppbW1zNUFYRWFyUGtsYVRrNUR6TGxQSEx6ZXVWV0YzeTN6c3ZneG0vQ3FFMXBFc1dsM0JUNll5ZXV5cTFVbWpKQ0h0Y2kza3VzaThYT212RnRXbG4zSXIzR2Z2LzRTNGZab1VQNXlMR1B0b0crdVJ6Mk8zNHB3ZWZYRVEyMitjSE1Td2FiTU5NV3RDT09CbWZiZE15cEVoWWV0N1ZIdkVIMUJKcTAxQU5rMnJ3NGE4clhlZ1Q0aVJ1V3BDZU1zbUJJcDBBWWxTN2xzUG05djM2K09IQlF4ZXdaNzh4bnNva1F4Y2RhZG5IQ2F2d0dLY25PRVhQWGM3NHBieHl5QzJmRzFabmQ4TStEUEswSWNjZUc0Wkx5MkwzcktOTk1uYVRUdExJQ1hOT1pUdThVWGphK2RHR25QblgyRkJBek5oRHJXWnZweE1CU2JlcFY4VlVreHFvK21zL3FtbUJMUHl5MGdKcVBJdDVUdDI1UGZFcmlkSU9yWlFRVkUrTS85alZaTmtVeW4zMFpVNDY2RTRweW85UGFGUFhhanFyOTZIemc4alpDbTJvNmhrWlNOSGl4YnRkYkwyaFVKZncvN0dnbEI3dVN3NGJianpiaFFWN2xSeEpyVktqbGhBa0RKOUFqTi9vRlNhMVVWamFwK1I1QVhXWk4yb2ptSkt6K2wrdElWTDduMXRDK0JwdVFGVEhpdHgzZVIrbk5SMWhFZGVoOVNDZHFIczhRbUtYM0hVOTQrLzVMY2lIbG1vcVJ5Y3M0K1cyYzdHbzlXemN2ZnN0L0dqWWpacHdvNGZmZkQvY0ZZMkNBMzdQdnVjeVpmejlTUzlwRVJzSU1zVGxrd2hWR1pZMmlXaWF1dmN4WVB5QjZ1d1ZBNElqc3FHSVBNMGtKblgxOWRMUWdFRWtyZElPU25ZaEJHaGozSGF5VGFnVW04d0ZMR0dtVDVZdlIyaTNyb2hHaThBUm0zOWlkTVN4Z2dlczBZN2V2UWxZV29rOHU5T3A2eHlpNDNMYXlidEF2K2t2SGhwcFQ1dDZpSURKNWk2eDYxaTdZNWwyNDVxWUVnVjA5d1o5Vks5cmJ5Y2hVTGhVOTNGWHV5Z253bGNPN1hEako0cEZVb0NDOVBoUnowTzdoQ0twOEViSUVrbEtJZGZpdDJGTzgxajh1WFVZN1dlVXNIVEgzOUhpN3J4WTVDVjc0OVgwRXBxNXNhV3F0OVlzVWhyNU54L3lhdzVYZzlXR2V5dE5tbzkySmZiVDBXNG1NYW1qcmQycG5SMzFIZTVRV1dTRVl0Sm1KTzFMcWM3aGRMK1g4ZEhlRUVhaSs2aTZWOTFPNWNHSGoyZ3RRTzJDQjZ3QmUzVDRxdU9ZM1hmL3JFdEdOUmtScUYzV1FDZWVuV2oyL2tqb1lSWWtkcFFMSlgvWVdYRFRwT2pJVlpOcFIyODREdDNRaHJlVkljbmx3NjFhV29vcTdMUlpUdWZJNVBNR1pTMG1GTFNKOXNBSWwrbyt2cFptMjJwWFZPSEVuZnFYVVVTZ05hS242YlRUZWVXUlFVS2RMdFgzSnB3amRjVks5cDd3OXI0eVVNQWVidy9jM25BNVBuSkhES0NhUFNmeDlLWlhPazFBOWVkZUhLWmpDOHpjT0ZvSXpTaEhPeUxYSE5GU1hGYVpqVmZJSm43cUFMSzBJTTZlVHdldlRiM0VnZVUvY21pbTFIUkdCbmJFWWJOZFR4K1QySzhwd29LSDdzdkNUTXBmdUZLeXdYK3RvMTI5bXJTbjU4TS9OL3NpVW11NEM4bFl1em55d3IrL1JjdWNna2pReWFJR0Zpd2RveVRqYzQwMUR1blBKOWdDQit5VjVuYWNNcG1oTmFRK3BHT2hOSzdza2l3c3Y0MzZYajg2TUMvVTl5YVBzZU9WbjJXalRDZGxSQjVsdktxVHprdEdaZUhacTZoT2dkd2x6S1FQN2N6VzJlbHZvbzhLTllkS3I5L2lnWFo5M0lwZlBKaUZtME45dEppK2pyWGt4ODZ3T2k2UWpCYXJsdFVHTTBoMUg2L2ZxS2RQd3ZRN2N6QnZwQ1ZzRFZWSjM5TjRqV2dlUmp1c0oxMUhadGNqdTU3NWQ3bXFSOER2S2J3Skt3OXN3SUtXRVhDcDU4dkJ0cUZ6VU41Rkx1bjU3eHR4VzhqbjFQNzIwS0xSb3ZkMFBWV1ZoWk5xUFpLMjJXZWErOU9yTGx4Q2g2OHBPbVpCZnhFeDQ0ZkUxVUZsOXEvellFMEg0WkVnT29SdGd4Ky9HS1dTQjBneW1YRjdEbVpFSXAzUmQ4MmtSdHZuczRQTTlDTk82TzVWQTJzdGZZVkt2UllnSW5ycDZPelZrUlJ4MyttdFVJUUV1VlFjMXVQMjRxN0hYWEhweCtNdXpEU2lqQWYvNWtiMTdhcDFJNG9yUG9UejBKMHg1aVMwUVl1T1V3cTdMV0lRdVRnSEZhbzFnREk2ZW1RcFhVSU5GTVdReUE1K2dlWk1meitlZWQrclBmS0JUbWViUlgzMGRocHZsZGxWdUVDNldmTy82aU1iVXQzSC9makR1MTc4aGRhQ0lrN0NwS3RwMDliVlFWV1hPa1RFdWVnODZreGtsdHFWVHZXR2QxMnhPZjJyOERmckRZWk1YNkhpNVIxdjRKa3Zsc0l2UnlRcEpheWoveTM3ZkpqN2FqdnA4c3hqWFVmV0dBN2RRcVo1N0RRS0lhbC8ybUlYNkpETXVOMnhXanFvS3J4ck1IYXlWVyszNHgwNm5xQXJYVVFpakYycW5zMmNTbHFqM0U4OXZSOGJqMmp4T1VTTHZwcEZkdUxXNjNXek03TmpHbUxWNTgzUFREcnlLZlNCcE5UN0lHMUVvcTJ2R2syTlVjWnFQOXJ3OGNRejdWaWxrY0ZvRVBsTE8zWnJUSU9DaWZRTVVkaHVQcmJZcmNXV29tNnBjZUdKZGRFQUdERjlzV3Qydm02bWxlbytYcnZSRmRoa3FZWkN1WStxSXcxc2MxOHphV01sVVFyK3U0WHgyMGcvL2ZDb08ySldaOG1PMXpIcnZWOWkwN0dkTWVQdWJUNklSMnFleGYwcm44ZUpWbk1nYzJsNTRaWkxULzExajBsQVYwV2dqVVF6ZjkrSzU5WjZERDkrb1pEUlFIclJaYSsxWWhwMUttV2FMTUphMVlkRzBuTjcxTzVsR1F0ZW9QdzNxRlFhU3FiMHY1cysrRUtmVm8wNDlUMzVCaGZQSXNGTkJpOTRSRmNTaktmaEM1R2tobmV0bXZLMFg2eEtkZGtLUWYrbldUdVM4WWxPQnk3aXZVVlNmOFRSSGdDVFl4bzZxbzlJMzB5SEw0bWQydXJjQXZtcVpoeGRWVyt4QS9oNjJqaTRiQk45ektlRFJtdWcyYzM3dEdQN2hpZmJVVzIwWEVlNi9udWVwSHhJWDIrNEE1M1c1M1p2Y3RHTVJqOW9SQkN0WHRXT0g3emlRcDJKSGIvNE9KSG8vNUdqRWlKcHhUNkJ6dlR4Mk84UUlEWlozdkFpelc1MFFrS1lDbkZNOWpxS3M5Q3QyUk1SRGsveGpaRnlTUXhLaFpNZWFUa2d5bjd2WDFPblRIenNzNzhFMURyeDFQR0NYcVdZTUdBVWh2Y3VRKytzQXRyNTdzR0Jsc1BZVDlmMmIycnhjZjBHYXM2Z0pHWnRLMFAyNGRtdytIcEZaVDFyb2gwM2t4NDhWZTQ3anhyMTlGU1ZGdFRyRCsxTGg0RFI1aGpRaGpRbjJlTFgxZnM3ZDFpYitOQUpiYTZwcDhYMnlVTXRhRHd1bzZDUGhEbzZFYlhXYmtNMXFadkNObFdrY3JpZlZBNWJVbGRGemxrZ1FHMHlXWndKUkFPM1lQUjdxSTI3KzBNMHhmMHNHRTRib3hyYnFIOVEzMnRzb3JVa01xMVVDeHF4RzAvQ21GSUxtU25MYUtUK2x1WHg0L09EcDVhSG9HTVU5Yzhqb3AvMm9EMXpaQWhSRytzMTdNSStMdGJleHRIaGN5NWhXVVE0dFIvMzB6bEoybGxqYkp3U2kvSCt2RHphT0FVeC85VElEbEV6ajhTeVR5elZ6MGIrRUxzYnZzTG00N3RpWnJEOVJDM0VGWS96WmUvR3laSi9EekIvVy92UWNKSVJaSjc0dmJINnlYVTRPQ052bWtsaXJ5RUpLbm1PanJ5OUo0ZE9QNlREcytqclhrc1U2VGF3MlZyQ0hQWCtBQ3JVMitCbnBwODg4TTF6b29GNGxkSVc1ckc2TkNSd0NxZkpKdno0Q2FIK1M2ZVZkc1lKT3NJZnZvbUxucTd0NCtJZFRiZTI2MWJHYjdmYThmaUV1ZmlYRDMrRjJzYXZPOVAyVVdsbFd4TmFCL3dPem05dWdyUGh1eGhFRXNHdnY1ZlY4VWFLcUZ6T1BJODdiMUcrclVxbkl0NmVpMGwwRE1GSHUybWRoU3dRdmozYWppTGRaT21MVHpXQ3hKa0hHTmM0NHhEZ1BtNndpTjdWclNqVU5vc20vZ3IzcmY0dHRwSEtKcWxPa3VIcTh4cEtDaHZ3Mk9RN2tKZGxwTmxLYW9rWm4xbXYwQ2Z3bElxVURMWmorbURsU2ZkUEMxTlBSbjBrUXhlSEh4bUJORU9BK3pqUUxZdTcrbjVRNE16SDRrbS94VTFsWk8rVVpEZWhlRFFXWFRzZFJYUzRGTHZZQ0N4NGprNzlySTF0U1hXSUZoM3Zvb1VwalRWTDdPdzVCaVBRN1Fod0gwOERpVi9wQlE1Uyt3aExuOHNHWEl5bnZuaUpkUDk3bGFDRS9uczZlK0FPT3ZwaFd0bDNJV1hRMFF3SlZUYXBpZWpVVHpyUC9DVTZaMzdHZUJ0R2xsZ2dKQ1JoS2lkMlF4ODlRSi9lSTR1aWFscUFZOGNJWkNZQzNNZTdWY2R2MUduR0ZZM0EwdjUvd01xdlB5SEpjeVUySE4xcUZNM1VyMzlPWDl4eTNsUlVsVTVCbG8xc045a2xoRUF6bmJxNDhPM09MYm9sVkRBbllnUzZDSUV6dVkrbkhlTVhiVzZSTExqeTdBbUJxLzdrVWF3OTlEbTJrT1hQemhOMU9PRnFRcE03dUkya3Q3TUF2Yko2b0RDN0QwWVZEc2Q0R2pTRzlDanBvbTdEeFRBQ2pBQWprSmtJcENYalYwTlpuTnVQcFBjckFwZmFuKzhaQVVhQUVXQUVFa09BVnp3VHc0MVRNUUtNQUNPUXNRZ3c0OC9ZcG1QQ0dRRkdnQkZJREFGbS9Jbmh4cWtZQVVhQUVjaFlCSmp4WjJ6VE1lR01BQ1BBQ0NTR0FEUCt4SERqVkl3QUk4QUlaQ3dDelBnenR1bVljRWFBRVdBRUVrT0FHWDlpdUhFcVJvQVJZQVF5RmdGbS9CbmJkRXc0SThBSU1BS0pJY0NNUHpIY09CVWp3QWd3QWhtTEFEUCtqRzA2SnB3UllBUVlnY1FRWU1hZkdHNmNpaEZnQkJpQmpFV0FHWC9HTmgwVHpnZ3dBb3hBWWdndzQwOE1OMDdGQ0RBQ2pFREdJc0NNUDJPYmpnbG5CQmdCUmlBeEJKanhKNFlicDJJRUdBRkdJR01SWU1hZnNVM0hoRE1DakFBamtCZ0N6UGdUdzQxVE1RS01BQ09Rc1FpWU1YN1o3L1VjRTdVNjJ1VFAyTXAxTmVHTVZWY2p6dVV4QW95QUdRSWhIaTRiaFJzeGZoSFI1Mms3dGtFa2VPSXROek4vSStSMGZvTHBDNnpZTVFLTUFDT1FEZ2lFZUxpUGFJbGkvcElCZ1dJd0tCZ3didGJGNTEzemgrVVdpejNmSUE1N01RS01BQ1BBQ0tRcEFyTFAwN1R6SHorOThXRE44K3VKeEVhNk5Lb2Jxd25kMXVZREc5eHRKNzc2dU1kWkYvV1hyTmtGRnFzdDJ5UXVlek1DakFBandBaWtBUUkraitzYmQvT0JUM2Y5NDZkekQyMThaU2VSMUV4WGxDckNTT0lYNUR2b0VwSitIN29LNk1xaVM4d0V6T0pURUR0R2dCRmdCQmlCYmtSQXFIU0VaTjlPbDVEeWo5Tmx5UGh0RkdEa3ZPUjVNaFRnb24vQitNWHNnQmwvQ0JUK1l3UVlBVVlnelJBSXJNOFNUWUx4dDlBbGVMamc1Vkd1STBZdXd1eWhTd3dRTFBGSHdjY2VqQUFqd0Fpa0RRS0t4QytZdlNkMFJTM3NDbW83WXZ3aVhEZ1JSN2tDSHZ6RENEQUNqQUFqa0pZSUNFYXZYR2xKSUJQRkNEQUNqQUFqd0Fnd0Fvd0FJOEFJTUFLcFJ1RC9BZWJteGp0VHVzME9BQUFBQUVsRlRrU3VRbUNDXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWcgc3R5bGU9e2J1dHRvblN0eWxlfSBzcmM9eyBnb29nbGUgfSBhbHQ9XCJMb2cgaW4gd2l0aCBHb29nbGVcIiBvbkNsaWNrPXsgdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpIH0vPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Hb29nbGVsb2dpbi5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRFeHBsb3JlTW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9UWVBFID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfTkFUVVJFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VYUExPUkVfTU9NRU5UUyA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZUV4cGxvcmVNb21lbnRzKG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHNEYXRhLCB0eXBlLCBuYXR1cmUsIGxvYWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRFeHBsb3JlTW9tZW50cyh0eXBlLCBuYXR1cmUsIGxvYWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVBhcmFtcyA9ICc/bG9hZD0nICsgbG9hZCArICcmbmF0dXJlPScgKyBuYXR1cmUgKyAnJnR5cGU9JyArIHR5cGU7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRFeHBsb3JlTW9tZW50c0FwaSArIGFwaVBhcmFtcylcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUV4cGxvcmVNb21lbnRzKGpzb24sIHR5cGUsIG5hdHVyZSwgbG9hZCkpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFeHBsb3JlVHlwZSh0eXBlLCBuYXR1cmUsIG5ld1R5cGUpIHtcblx0aWYgKG5ld1R5cGUgPT09IC0xKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX1RZUEUsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hdHVyZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9UWVBFLFxuXHRcdFx0ZGF0YTogbmV3VHlwZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKG5ld1R5cGUsIG5hdHVyZSwgMCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEV4cGxvcmVOYXR1cmUobmF0dXJlLCB0eXBlLCBuZXdOYXR1cmUpIHtcblx0aWYgKG5ld05hdHVyZSA9PT0gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTkFUVVJFLFxuXHRcdFx0ZGF0YTogbnVsbFxuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX05BVFVSRSxcblx0XHRcdGRhdGE6IG5ld05hdHVyZVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVhZEV4cGxvcmVNb21lbnRzKHR5cGUsIG5ld05hdHVyZSwgMCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9leHBsb3JlLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCByZWFkSG9tZU1vbWVudHNBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfSE9NRV9NT01FTlRTID0gXCJob21lL0NIQU5HRV9IT01FX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlSG9tZU1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9IT01FX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkSG9tZU1vbWVudHMobG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRIb21lTW9tZW50c0FwaSArICc/bG9hZD0nICsgbG9hZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUhvbWVNb21lbnRzKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkTW9tZW50UGFnZUFwaSwgZGVsZXRlTW9tZW50UGFnZUFwaSwgdXBkYXRlTW9tZW50TGlrZUFwaSwgXG5cdHJlYWRNb21lbnRDb21tZW50c0FwaSwgY3JlYXRlTW9tZW50Q29tbWVudEFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9NT01FTlRfUEFHRSA9IFwibW9tZW50L0JVSUxEX01PTUVOVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19NT01FTlRfREVMRVRFID0gXCJtb21lbnQvU0hPV19NT01FTlRfREVMRVRFXCI7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVVNFUl9QQUdFID0gXCJtb21lbnQvUkVESVJFQ1RfVVNFUl9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9MSUtFID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9MSUtFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX01PTUVOVF9DT01NRU5UUyA9IFwibW9tZW50L0NIQU5HRV9NT01FTlRfQ09NTUVOVFNcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTU1FTlRfRU1QVFkgPSBcIm1vbWVudC9TSE9XX0NPTU1FTlRfRU1QVFlcIjtcbmV4cG9ydCBjb25zdCBBRERfTU9NRU5UX0NPTU1FTlQgPSBcIm1vbWVudC9BRERfTU9NRU5UX0NPTU1FTlRcIjtcblxuZnVuY3Rpb24gYnVpbGRNb21lbnRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9NT01FTlRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTW9tZW50UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRNb21lbnRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZE1vbWVudFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9tZW50RGVsZXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfTU9NRU5UX0RFTEVURVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyY3RVc2VyUGFnZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9VU0VSX1BBR0Vcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9tZW50UGFnZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlTW9tZW50UGFnZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChyZWRpcmN0VXNlclBhZ2UoKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbWVudExpa2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVNb21lbnRMaWtlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRMaWtlKGFjdGlvbiwgdXNlcklkKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRDb21tZW50cyhtb21lbnRJZCwgY29tbWVudExvYWQsIGNvbW1lbnRBZGRlZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9pZD0nICsgbW9tZW50SWQgKyAnJmxvYWQ9JyArIGNvbW1lbnRMb2FkICsgJyZhZGQ9JyArIGNvbW1lbnRBZGRlZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudENvbW1lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlTW9tZW50Q29tbWVudHMoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tbWVudEVtcHR5KCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQ09NTUVOVF9FTVBUWVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkge1xuXHRjb25zdCBkYXRhID0gW1xuXHRcdGNvbnRlbnQsXG5cdFx0ZG9tYWluVXJsICsgJy9pbWcvdXNlci8nICsgdXNlcklkICsgJy5qcGcnLFxuXHRcdCcvdXNlci8nICsgdXNlcklkLFxuXHRcdG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdF07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX01PTUVOVF9DT01NRU5ULFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbWVudENvbW1lbnQodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBjb250ZW50KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlTW9tZW50Q29tbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdjb250ZW50JzogY29udGVudFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRQZXRQYWdlQXBpLCB1cGRhdGVQZXRXYXRjaEFwaSwgY3JlYXRlUGV0TW9tZW50QXBpLFxuXHRyZWFkUGV0TW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9QRVRfUEFHRSA9IFwicGV0L0JVSUxEX1BFVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ0NPVU5UX1JFUVVJUkVEID0gXCJwZXQvU0hPV19BQ0NPVU5UX1JFUVVJUkVEXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9XQVRDSCA9IFwicGV0L0NIQU5HRV9QRVRfV0FUQ0hcIjtcbmV4cG9ydCBjb25zdCBBRERfUEVUX01PTUVOVCA9IFwicGV0L0FERF9QRVRfTU9NRU5UXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVF9NT01FTlRTID0gXCJwZXQvQ0hBTkdFX1BFVF9NT01FTlRTXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUGV0UGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfUEVUX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFBldFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUGV0UGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRQZXRQYWdlKGpzb24pKVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjY291bnRSZXF1aXJlZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTSE9XX0FDQ09VTlRfUkVRVUlSRURcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUEVUX1dBVENILFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGV0V2F0Y2godXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVQZXRXYXRjaEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWQsXG5cdFx0XHRcdCdhY3Rpb24nOiBhY3Rpb25cblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0V2F0Y2goYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkUGV0TW9tZW50KGluZm8sIHBldElkLCBtZXNzYWdlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX1BFVF9NT01FTlQsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgcGV0SWQsIG1lc3NhZ2Vcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQZXRNb21lbnQodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBpbWFnZSwgbWVzc2FnZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0bGV0IHR5cGUgPSBpbWFnZS50eXBlO1xuXHRcdHR5cGUgPSB0eXBlLnNwbGl0KFwiL1wiKVsxXTtcblx0XHR0eXBlID0gXCIuXCIgKyB0eXBlO1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSwgdHlwZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJwZXRcIiwgcGV0SWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInVzZXJcIiwgdXNlcklkKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVQZXRNb21lbnRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHRcdGJvZHk6IGZpbGVEYXRhXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYWRkUGV0TW9tZW50KHJlc3VsdCwgcGV0SWQsIG1lc3NhZ2UpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBldE1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfTU9NRU5UUyxcblx0XHRkYXRhXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQZXRNb21lbnRzKHBldElkLCBsb2FkLCBhZGQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IHBhcmFtcyA9ICc/YWRkPScgKyBhZGQgKyAnJmxvYWQ9JyArIGxvYWQgKyAnJnBldD0nICsgcGV0SWQ7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRNb21lbnRzQXBpICsgcGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0TW9tZW50cyhqc29uKSlcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9wZXQuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkUmVxdWVzdFBhZ2VBcGksIGRlbGV0ZVJlcXVlc3RVc2VyQXBpLCBjcmVhdGVSZXF1ZXN0VXNlckFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9SRVFVRVNUX1BBR0UgPSBcInJlcXVlc3QvQlVJTERfUkVRVUVTVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1JFUVVFU1RfVVNFUiA9IFwicmVxdWVzdC9DSEFOR0VfUkVRVUVTVF9VU0VSXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWVzdFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1JFUVVFU1RfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVxdWVzdFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUmVxdWVzdFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkUmVxdWVzdFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1JFUVVFU1RfVVNFUixcblx0XHRkYXRhOiBpbmRleFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVxdWVzdFVzZXIocGV0SWQsIGluZGV4LCB1c2VySWQsIHVzZXJUb2tlbiwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlVcmwgPSBhY3Rpb24gPT09IDAgPyBkZWxldGVSZXF1ZXN0VXNlckFwaSA6IGNyZWF0ZVJlcXVlc3RVc2VyQXBpO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRVc2VyUGFnZUFwaSwgcmVhZFVzZXJNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1VTRVJfUEFHRSA9IFwidXNlci9CVUlMRF9VU0VSX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfVVNFUl9NT01FTlRTID0gXCJ1c2VyL0NIQU5HRV9VU0VSX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRVc2VyUGFnZShpbmZvLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9VU0VSX1BBR0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0aW5mbywgdXNlcklkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFVzZXJQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFVzZXJQYWdlKGpzb24sIHBhcnNlSW50KGlkKSkpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVzZXJNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfVVNFUl9NT01FTlRTLFxuXHRcdGRhdGFcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVzZXJNb21lbnRzKGJlbG9uZywgbG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRVc2VyTW9tZW50c0FwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQnYmVsb25nJzogYmVsb25nLFxuXHRcdFx0XHQnbG9hZCc6IGxvYWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVVzZXJNb21lbnRzKGpzb24pKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFdhdGNoUGFnZUFwaSwgZGVsZXRlV2F0Y2hQZXRBcGksIGNyZWF0ZVdhdGNoUGV0QXBpLFxuXHRyZWFkV2F0Y2hNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1dBVENIX1BBR0UgPSBcIndhdGNoL0JVSUxEX1dBVENIX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfV0FUQ0hfUEVUID0gXCJ3YXRjaC9DSEFOR0VfV0FUQ0hfUEVUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1dBVENIX01PTUVOVFMgPSBcIndhdGNoL0NIQU5HRV9XQVRDSF9NT01FTlRTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BFVFNfTE9BRCA9IFwid2F0Y2gvQ0hBTkdFX1BFVFNfTE9BRFwiO1xuXG5mdW5jdGlvbiBidWlsZFdhdGNoUGFnZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQlVJTERfV0FUQ0hfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkV2F0Y2hQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFdhdGNoUGFnZUFwaSArICc/aWQ9JyArIGlkKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRXYXRjaFBhZ2UoanNvbikpXG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoUGV0KGFjdGlvbiwgcGV0SWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfV0FUQ0hfUEVULFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbiwgcGV0SWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaFBldCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpVXJsID0gYWN0aW9uID09PSAwID8gZGVsZXRlV2F0Y2hQZXRBcGkgOiBjcmVhdGVXYXRjaFBldEFwaTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSk7XG5cdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdC8vZXJyb3Jcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdhdGNoTW9tZW50cyhtb21lbnRzLCBsb2FkLCBsb2FkTGlzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9XQVRDSF9NT01FTlRTLFxuXHRcdGRhdGE6IHtcblx0XHRcdG1vbWVudHMsIGxvYWQsIGxvYWRMaXN0XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFdhdGNoTW9tZW50cyhsaXN0cywgbG9hZCwgbG9hZExpc3QsIHVzZXJJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRXYXRjaE1vbWVudHNBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J2xpc3QnOiBsaXN0cyxcblx0XHRcdFx0J2xvYWQnOiBsb2FkLFxuXHRcdFx0XHQncm91dGUnOiBsb2FkTGlzdCxcblx0XHRcdFx0J3VzZXInOiB1c2VySWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVdhdGNoTW9tZW50cyhqc29uLCBsb2FkLCBsb2FkTGlzdCkpO1xuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGV0c0xvYWQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1BFVFNfTE9BRFxuXHR9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3dhdGNoLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Y29tbWVudC5jb21tZW50X2NvbnRlbnQsXG5cdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCArIFwiLmpwZ1wiLFxuXHRcdFx0XCIvdXNlci9cIiArIGNvbW1lbnQudXNlcl9pZCxcblx0XHRcdG5ldyBEYXRlKGNvbW1lbnQuY29tbWVudF90aW1lKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9yZWR1Y2Vycy9hY2NvdW50JztcbmltcG9ydCBob21lIGZyb20gJy4vcmVkdWNlcnMvaG9tZSc7XG5pbXBvcnQgcGV0IGZyb20gJy4vcmVkdWNlcnMvcGV0JztcbmltcG9ydCB1c2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJy4vcmVkdWNlcnMvbW9tZW50JztcbmltcG9ydCBleHBsb3JlIGZyb20gJy4vcmVkdWNlcnMvZXhwbG9yZSc7XG5pbXBvcnQgd2F0Y2ggZnJvbSAnLi9yZWR1Y2Vycy93YXRjaCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlZHVjZXJzL3JlcXVlc3QnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9yZWR1Y2Vycy9zZXR0aW5nJztcbmltcG9ydCBhZGQgZnJvbSAnLi9yZWR1Y2Vycy9hZGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuXHRhY2NvdW50LFxuXHRob21lLFxuXHRtb21lbnQsXG5cdHBldCxcblx0dXNlcixcblx0ZXhwbG9yZSxcblx0d2F0Y2gsXG5cdHJlcXVlc3QsXG5cdHNldHRpbmcsXG5cdGFkZFxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzLmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0FDQ09VTlRfREFUQSwgQ0xFQVJfQUNDT1VOVF9EQVRBIH0gZnJvbSAnLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IENIQU5HRV9BQ0NPVU5UX05BTUUgfSBmcm9tICcuLi9hY3Rpb25zL3NldHRpbmcnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdGlkOiBudWxsLFxuXHRuYW1lOiBudWxsLFxuXHR0b2tlbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRpZiAoc3RhdGUuaWQgPT09IG51bGwgJiYgYWN0aW9uLmRhdGFbMF0gIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRpZDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF0pLFxuXHRcdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRcdHRva2VuOiBhY3Rpb24uZGF0YVsyXVxuXHRcdFx0XHR9O1x0XG5cdFx0XHR9XG5cdFx0Y2FzZSBDTEVBUl9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdHRva2VuOiBudWxsXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0FDQ09VTlRfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRuYW1lOiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2FjY291bnQuanMiLCJpbXBvcnQgeyBcblx0Q0hBTkdFX0VYUExPUkVfVFlQRSwgQ0hBTkdFX0VYUExPUkVfTkFUVVJFLCBDSEFOR0VfRVhQTE9SRV9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvZXhwbG9yZSc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHR0eXBlOiBudWxsLFxuXHRuYXR1cmU6IG51bGwsXG5cdG1vbWVudHNEYXRhOiBbXSxcblx0bG9hZDogMCxcblx0bG9ja2VyOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9FWFBMT1JFX1RZUEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dHlwZTogYWN0aW9uLmRhdGEsXG5cdFx0XHRcdG1vbWVudHNEYXRhOiBbXSxcblx0XHRcdFx0bG9hZDogMFxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfTkFUVVJFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG5hdHVyZTogYWN0aW9uLmRhdGEsXG5cdFx0XHRcdG1vbWVudHNEYXRhOiBbXSxcblx0XHRcdFx0bG9hZDogMFxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld01vbWVudHMgPSBhY3Rpb24uZGF0YS5sb2FkID09PSAwID8gXG5cdFx0XHRcdGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5tb21lbnRzRGF0YSkgOlxuXHRcdFx0XHRzdGF0ZS5tb21lbnRzRGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhKSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IG5ld01vbWVudHMsXG5cdFx0XHRcdHR5cGU6IGFjdGlvbi5kYXRhLnR5cGUsXG5cdFx0XHRcdG5hdHVyZTogYWN0aW9uLmRhdGEubmF0dXJlLFxuXHRcdFx0XHRsb2FkOiBhY3Rpb24uZGF0YS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YS5tb21lbnRzRGF0YS5sZW5ndGggIT09IDIwXG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0hPTUVfTU9NRU5UUyB9IGZyb20gJy4uL2FjdGlvbnMvaG9tZSc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIG1vbWVudHMgZGF0YVxuXHRkYXRhOiBbXSxcblx0Ly9yZWNvcmQgbG9hZCBudW1iZXJcblx0bG9hZDogMCxcblx0Ly9hbGxvdyBsb2FkIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0hPTUVfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLmNvbmNhdChuZXdEYXRhKSxcblx0XHRcdFx0bG9ja2VyOiBuZXdEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX01PTUVOVF9QQUdFLCBTSE9XX01PTUVOVF9ERUxFVEUsIFJFRElSRUNUX1VTRVJfUEFHRSwgQ0hBTkdFX01PTUVOVF9MSUtFLFxuXHRDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLCBTSE9XX0NPTU1FTlRfRU1QVFksIEFERF9NT01FTlRfQ09NTUVOVFxufSBmcm9tICcuLi9hY3Rpb25zL21vbWVudCc7XG5pbXBvcnQgYnVpbGRDb21tZW50cyBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkQ29tbWVudHMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdG1vbWVudERhdGE6IFtdLFxuXHRmYW1pbHlEYXRhOiBbXSxcblx0bGlrZURhdGE6IFtdLFxuXHRjb21tZW50RGF0YTogW10sXG5cdHNob3dDb25maXJtOiBmYWxzZSxcblx0Y29tbWVudExvY2tlcjogZmFsc2UsXG5cdGNvbW1lbnRBZGRlZDogMCxcblx0Y29tbWVudExvYWQ6IDAsXG5cdGNvbW1lbnRFcnJvcjogbnVsbCxcblx0cmVkaXJlY3RVc2VyOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX01PTUVOVF9QQUdFOlxuXHRcdFx0Y29uc3QgbGlrZURhdGEgPSBhY3Rpb24uZGF0YVsyXS5tYXAoZnVuY3Rpb24obGlrZSkge1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQobGlrZS51c2VyX2lkKTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgY29tbWVudERhdGEgPSBidWlsZENvbW1lbnRzKGFjdGlvbi5kYXRhWzNdKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnREYXRhOiBhY3Rpb24uZGF0YVswXSxcblx0XHRcdFx0ZmFtaWx5RGF0YTogW1xuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLm93bmVyX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XHRwYXJzZUludChhY3Rpb24uZGF0YVsxXS5yZWxhdGl2ZV9pZCkgfHwgbnVsbCwgXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpa2VEYXRhLFxuXHRcdFx0XHRjb21tZW50RGF0YSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSA1XG5cdFx0XHR9O1xuXHRcdGNhc2UgU0hPV19NT01FTlRfREVMRVRFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dDb25maXJtOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVESVJFQ1RfVVNFUl9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0VXNlcjogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfTElLRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsaWtlRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUubGlrZURhdGEsIGFjdGlvbi5kYXRhLnVzZXJJZF0gOlxuXHRcdFx0XHRcdHN0YXRlLmxpa2VEYXRhLmZpbHRlcihmdW5jdGlvbihsaWtlKSB7IHJldHVybiBsaWtlICE9PSBhY3Rpb24uZGF0YS51c2VySWQgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTOlxuXHRcdFx0Y29uc3QgbmV3Q29tbWVudHMgPSBidWlsZENvbW1lbnRzKGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RGF0YTogWy4uLnN0YXRlLmNvbW1lbnREYXRhLCAuLi5uZXdDb21tZW50c10sXG5cdFx0XHRcdGNvbW1lbnRMb2FkOiBzdGF0ZS5jb21tZW50TG9hZCArIDEsXG5cdFx0XHRcdGNvbW1lbnRMb2NrZXI6IGFjdGlvbi5kYXRhLmxlbmd0aCAhPT0gMTBcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX0NPTU1FTlRfRU1QVFk6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudEVycm9yOiBcIkNvbW1lbnQgY2Fu4oCydCBiZSBlbXB0eVwiXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX01PTUVOVF9DT01NRU5UOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLmNvbW1lbnREYXRhXSxcblx0XHRcdFx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRcdFx0XHRjb21tZW50QWRkZWQ6IHN0YXRlLmNvbW1lbnRBZGRlZCArIDFcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfUEVUX1BBR0UsIFNIT1dfQUNDT1VOVF9SRVFVSVJFRCwgQ0hBTkdFX1BFVF9XQVRDSCwgQUREX1BFVF9NT01FTlQsIENIQU5HRV9QRVRfTU9NRU5UU1xufSBmcm9tICcuLi9hY3Rpb25zL3BldCc7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgeyBub0dldEFiaWxpdHkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL25vVG9JbmZvJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vaW5kaWNhdGUgcGV0IGJlbG9uZyB0byBjdXJyZW50IHVzZXIgb3Igbm90XG5cdHBldE93bmVyOiBmYWxzZSxcblx0Ly9zdG9yZSBkYXRhIGZvciBvbmUgcGV0XG5cdHBldERhdGE6IHt9LFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldCdzIGZhbWlseVxuXHRmYW1pbHlEYXRhOiBbXSxcblx0Ly9zdG9yZSBkYXRhIGZvciBwZXRzIGZyaWVuZFxuXHRmcmllbmREYXRhOiBbXSxcblx0Ly9zdG9yZSBkYXRhIGZvciBpbWFnZSBnYWxsZXJ5XG5cdGdhbGxlcnlEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIGhvdyBtYW55IHRpbWVzXG5cdGxvYWQ6IDEsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlLFxuXHQvL2luZGljYXRlIGFkZCBob3cgbWFueSBpbWFnZXNcblx0YWRkOiAwLFxuXHQvL3N0b3JlIGFsbCB3YXRjaGVyIG9mIGN1cnJlbnQgcGV0XG5cdHdhdGNoRGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbm90aWNlIHVzZXIgbG9naW4gb3Igbm90XG5cdGxvZ2luUmVxdWlyZWQ6IGZhbHNlLFxuXHQvL3RyaWdnZXIgcmVzZXQgZnVuY3Rpb24gZm9yIHBvc3QgaW1hZ2Vcblx0cmVzZXQ6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfUEVUX1BBR0U6XG5cdFx0XHRhY3Rpb24uZGF0YVswXVsnb3duZXJfaWQnXSA9IHBhcnNlSW50KGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddKTtcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddID0gYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPT09IG51bGwgPyBcblx0XHRcdFx0bnVsbCA6IHBhcnNlSW50KGFjdGlvbi5kYXRhWzBdWydyZWxhdGl2ZV9pZCddKTtcbiAgICAgIHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXREYXRhOiBhY3Rpb24uZGF0YVswXSxcblx0XHRcdFx0ZmFtaWx5RGF0YTogYWN0aW9uLmRhdGFbMV0sXG5cdFx0XHRcdGZyaWVuZERhdGE6IGFjdGlvbi5kYXRhWzJdLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhWzNdLmxlbmd0aCAhPT0gMjAsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGFbM10pLFxuXHRcdFx0XHR3YXRjaERhdGE6IGFjdGlvbi5kYXRhWzRdLm1hcChmdW5jdGlvbih3YXRjaCkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCh3YXRjaC51c2VyX2lkKTtcblx0XHRcdFx0fSlcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX0FDQ09VTlRfUkVRVUlSRUQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9naW5SZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdGNhc2UgQ0hBTkdFX1BFVF9XQVRDSDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR3YXRjaERhdGE6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMSA/XG5cdFx0XHRcdFx0Wy4uLnN0YXRlLndhdGNoRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUud2F0Y2hEYXRhLmZpbHRlcihmdW5jdGlvbih3YXRjaCkgeyByZXR1cm4gd2F0Y2ggIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9QRVRfTU9NRU5UOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50ID0gW1xuXHRcdFx0XHRkb21haW5VcmwgKyBcIi9pbWcvcGV0L1wiICsgYWN0aW9uLmRhdGEucGV0SWQgKyBcIi9tb21lbnQvXCIgKyBhY3Rpb24uZGF0YS5pbmZvWzFdLFxuXHRcdFx0XHRhY3Rpb24uZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcIi9tb21lbnQvXCIgKyBhY3Rpb24uZGF0YS5pbmZvWzBdXG5cdFx0XHRdO1xuXHRcdFx0aWYgKGFjdGlvbi5kYXRhLmluZm8ubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRcdGNvbnN0IGFiaWxpdHkgPSBub0dldEFiaWxpdHkoYWN0aW9uLmRhdGEuaW5mb1syXSk7XG5cdFx0XHRcdGNvbnN0IG5ld0FiaWxpdHkgPSB7Li4uc3RhdGUucGV0RGF0YX07XG5cdFx0XHRcdG5ld0FiaWxpdHlbYWJpbGl0eV0gPSBwYXJzZUludChzdGF0ZS5wZXREYXRhW2FiaWxpdHldKSArIDE7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0Z2FsbGVyeURhdGE6IFtuZXdNb21lbnQsIC4uLnN0YXRlLmdhbGxlcnlEYXRhXSxcblx0XHRcdFx0XHRyZXNldDogc3RhdGUucmVzZXQgKyAxLFxuXHRcdFx0XHRcdGFkZDogc3RhdGUuYWRkICsgMSxcblx0XHRcdFx0XHRwZXREYXRhOiBuZXdBYmlsaXR5XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0Z2FsbGVyeURhdGE6IFtuZXdNb21lbnQsIC4uLnN0YXRlLmdhbGxlcnlEYXRhXSxcblx0XHRcdFx0XHRyZXNldDogc3RhdGUucmVzZXQgKyAxLFxuXHRcdFx0XHRcdGFkZDogc3RhdGUuYWRkICsgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX01PTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdEYXRhID0gYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogc3RhdGUuZ2FsbGVyeURhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2FkOiBzdGF0ZS5sb2FkICsgMSxcblx0XHRcdFx0bG9ja2VyOiBuZXdEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9wZXQuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfUkVRVUVTVF9QQUdFLCBDSEFOR0VfUkVRVUVTVF9VU0VSXG59IGZyb20gJy4uL2FjdGlvbnMvcmVxdWVzdCc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSByZXF1ZXN0IGxpc3Rcblx0cmVxdWVzdERhdGE6IFtdLFxuXHQvL3N0b3JlIGFjY2VwdCBsaXN0XG5cdGFjY2VwdExpc3Q6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfUkVRVUVTVF9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlcXVlc3REYXRhOiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9SRVFVRVNUX1VTRVI6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVxdWVzdERhdGE6IHN0YXRlLnJlcXVlc3REYXRhLmZpbHRlcigocmVxdWVzdCwgaW5kZXgpID0+IHsgXG5cdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggIT09IGFjdGlvbi5kYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3JlcXVlc3QuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfU0VUVElOR19QQUdFLCBDSEFOR0VfU0VUVElOR19BQk9VVCwgQ0hBTkdFX1NFVFRJTkdfTkFNRSwgXG5cdENIQU5HRV9TRVRUSU5HX1BST0ZJTEVcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXR0aW5nJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHVzZXIgZGF0YVxuXHR1c2VyRGF0YTogW10sXG5cdC8vaW5kaWNhdGUgdXBkYXRlIHJlc3VsdFxuXHR1cGRhdGVSZXN1bHQ6IG51bGwsXG5cdC8vc3RvcmUgdXNlciBhYm91dCBpbmZvXG5cdHVzZXJBYm91dDogXCJcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1NFVFRJTkdfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyRGF0YTogYWN0aW9uLmRhdGEsXG5cdFx0XHRcdHVzZXJBYm91dDogYWN0aW9uLmRhdGEudXNlcl9hYm91dFxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9TRVRUSU5HX0FCT1VUOlxuXHRcdFx0aWYgKCFhY3Rpb24uZGF0YSkge1xuXHRcdFx0XHRhY3Rpb24uZGF0YSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJBYm91dDogYWN0aW9uLmRhdGEsIFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdNb29kIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfU0VUVElOR19OQU1FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ05hbWUgdXBkYXRlZCBTdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9TRVRUSU5HX1BST0ZJTEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnUHJvZmlsZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9zZXR0aW5nLmpzIiwiaW1wb3J0IHsgXG5cdEJVSUxEX1VTRVJfUEFHRSwgQ0hBTkdFX1VTRVJfTU9NRU5UU1xufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xuaW1wb3J0IHsgZG9tYWluVXJsIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9zdG9yZSB1c2VyIGRhdGFcblx0dXNlckRhdGE6IFtdLFxuXHQvL3N0b3JlIHJlbGF0aXZlIGRhdGFcblx0cmVsYXRpdmVEYXRhOiBbXSxcblx0Ly9zdG9yZSBwZXRzIGxpc3Rcblx0cGV0c0RhdGE6IFtdLFxuXHQvL3N0b3JlIG1vbWVudCBpbWFnZXNcblx0bW9tZW50RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBtb21lbnQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgaW1hZ2VzIG9yIG5vdFxuXHRsb2NrZXI6IGZhbHNlLFxuXHQvL3N0b3JlIHBldCBsaXN0XG5cdGJlbG9uZ0RhdGE6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9VU0VSX1BBR0U6XG5cdFx0XHRsZXQgcmVsYXRpdmVEYXRhID0gW107XG5cdFx0XHRhY3Rpb24uZGF0YS5pbmZvWzFdLmZvckVhY2goZnVuY3Rpb24ocGV0KSB7XG5cdFx0XHRcdGlmIChwZXQucmVsYXRpdmVfaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZURhdGEucHVzaChcblx0XHRcdFx0XHRcdHBhcnNlSW50KHBldC5yZWxhdGl2ZV9pZCkgPT09IGFjdGlvbi5kYXRhLnVzZXJJZCA/IFxuXHRcdFx0XHRcdFx0XHRwYXJzZUludChwZXQub3duZXJfaWQpIDogcGFyc2VJbnQocGV0LnJlbGF0aXZlX2lkKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fSk7XG5cdFx0XHRhY3Rpb24uZGF0YS5pbmZvWzBdLnVzZXJfaWQgPSBwYXJzZUludChhY3Rpb24uZGF0YS5pbmZvWzBdLnVzZXJfaWQpO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzBdLFxuXHRcdFx0XHRwZXRzRGF0YTogYWN0aW9uLmRhdGEuaW5mb1sxXSxcblx0XHRcdFx0YmVsb25nRGF0YTogYWN0aW9uLmRhdGEuaW5mb1szXSxcblx0XHRcdFx0bW9tZW50RGF0YTogYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLmluZm9bMl0pLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLmluZm9bMl0ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0cmVsYXRpdmVEYXRhOiBbLi4ubmV3IFNldChyZWxhdGl2ZURhdGEpXVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9VU0VSX01PTUVOVFM6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9tZW50RGF0YTogc3RhdGUubW9tZW50RGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhKSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXIuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfV0FUQ0hfUEFHRSwgQ0hBTkdFX1dBVENIX1BFVCwgQ0hBTkdFX1dBVENIX01PTUVOVFMsIENIQU5HRV9QRVRTX0xPQURcbn0gZnJvbSAnLi4vYWN0aW9ucy93YXRjaCc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHBldHMgZGF0YSBvbiB3YXRjaCBsaXN0XG5cdHBldHNMaXN0OiBbXSxcblx0Ly9zdG9yZSBwZXQgaGFzIGJlZW4gdW53YXRjaGVkXG5cdHVud2F0Y2g6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgcGV0IGxpc3QgZm9yIGhvdyBtYW55IHRpbWVzXG5cdGxvYWRQZXRzOiAxLFxuXHQvL3N0b3JlIHBldHMgaWQgb24gd2F0Y2ggbGlzdFxuXHR3YXRjaExpc3Q6IG51bGwsXG5cdC8vc3RvcmUgbGlzdCBtb21lbnRzIHRvIHNob3dcblx0Z2FsbGVyeURhdGE6IFtdLFxuXHQvL2luZGljYXRlIHdoaWNoIGxpc3QgdG8gc2hvd1xuXHRsb2FkTGlzdDogXCJ3YXRjaFwiLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBpbWFnZXMgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vaW5kaWNhdGUgY2xpY2sgbG9hZCBmb3IgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1dBVENIX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cGV0c0xpc3Q6IGFjdGlvbi5kYXRhWzJdLFxuXHRcdFx0XHR3YXRjaExpc3Q6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhWzFdKSxcblx0XHRcdFx0bG9ja2VyOiBhY3Rpb24uZGF0YVsxXS5sZW5ndGggIT09IDIwXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1dBVENIX1BFVDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1bndhdGNoOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDAgPyBcblx0XHRcdFx0XHRbLi4uc3RhdGUudW53YXRjaCwgYWN0aW9uLmRhdGEucGV0SWRdIDogXG5cdFx0XHRcdFx0c3RhdGUudW53YXRjaC5maWx0ZXIoaWQgPT4geyBpZCAhPT0gYWN0aW9uLmRhdGEucGV0SWQ7IH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1dBVENIX01PTUVOVFM6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGFjdGlvbi5kYXRhLmxvYWQgPT09IDAgP1xuXHRcdFx0XHRcdGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5tb21lbnRzKSA6XG5cdFx0XHRcdFx0c3RhdGUuZ2FsbGVyeURhdGEuY29uY2F0KGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YS5tb21lbnRzKSksXG5cdFx0XHRcdGxvYWQ6IGFjdGlvbi5kYXRhLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLm1vbWVudHMubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0bG9hZExpc3Q6IGFjdGlvbi5kYXRhLmxvYWRMaXN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1BFVFNfTE9BRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkUGV0czogc3RhdGUubG9hZFBldHMgKyAxXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3dhdGNoLmpzIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy5qcyc7XG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBCdW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgc3RhdGUgPSB7XG4gICAgbW9kOiBudWxsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMubG9hZCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5sb2FkICE9PSB0aGlzLnByb3BzLmxvYWQpIHtcbiAgICAgIHRoaXMubG9hZChuZXh0UHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBudWxsIH0pO1xuICAgIHByb3BzLmxvYWQoKG1vZCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZDogbW9kLmRlZmF1bHQgPyBtb2QuZGVmYXVsdCA6IG1vZCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLm1vZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcblx0Y2hhbmdlQWNjb3VudERhdGEsIGRlbGV0ZUFjY291bnRUb2tlbiwgcmVhZEFjY291bnREYXRhXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBnb29nbGVDbGllbnRJZCwgZmFjZWJvb2tDbGllbnRJZCB9IGZyb20gJy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBHb29nbGVsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0dvb2dsZWxvZ2luJztcbmltcG9ydCBGYWNlYm9va2xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbic7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93RHJvcDogZmFsc2UsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jaGFuZ2VBY2NvdW50RGF0YShcblx0XHRcdFtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpLFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH1cblx0Z0xvZ2luKGRldGFpbCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjY291bnQuaWQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMucHJvcHMucmVhZEFjY291bnREYXRhKCdnb29nbGUnLCBkZXRhaWwudG9rZW4pO1xuXHRcdH1cblx0fVxuXHRmTG9naW4ocmVzcG9uc2UsIHRva2VuKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2ZhY2Vib29rJywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHRzaG93RHJvcCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0Ryb3A6ICF0aGlzLnN0YXRlLnNob3dEcm9wIH0pO1xuXHR9XG5cdGxvZ091dCgpIHtcblx0XHRpZiAoRkIpIHtcblx0XHRcdEZCLmxvZ291dCgpO1xuXHRcdH1cblx0XHRpZiAoZ2FwaSkge1xuXHRcdFx0bGV0IGF1dGgyID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdGF1dGgyLnNpZ25PdXQoKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5kZWxldGVBY2NvdW50VG9rZW4oXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQuaWQsXG5cdFx0XHR0aGlzLnByb3BzLmFjY291bnQudG9rZW5cblx0XHQpO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRjb25zdCBsb2dpblN0eWxlID0gdGhpcy5zdGF0ZS5zaG93RHJvcCA/IFwiaGVhZGVyLWRyb3BcIiA6IFwiaGVhZGVyLWRyb3AtaGlkZVwiO1xuXHRcdGNvbnN0IHVzZXJJbmZvID0gKFxuXHRcdFx0PGRpdiBpZD1cImhlYWRlci1sb2dpblwiIG9uQ2xpY2s9eyB0aGlzLnNob3dEcm9wLmJpbmQodGhpcykgfT5cblx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsID8gJ0xvZ2luJyA6IHRoaXMucHJvcHMuYWNjb3VudC5uYW1lIH1cblx0XHRcdFx0PC9oNT5cblx0XHRcdFx0PGltZyBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1kcm9wZG93bi5wbmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9nb3V0Qm9hcmQ7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd0Ryb3AgJiYgdGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsKSB7XG5cdFx0XHRsb2dvdXRCb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3BcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZCB9PjxoNT5Ib21lPC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3dhdGNoXCIgfT48aDU+V2F0Y2ggTGlzdDwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9yZXF1ZXN0XCIgfT48aDU+UmVxdWVzdHM8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvc2V0dGluZ1wiIH0+PGg1PlNldHRpbmc8L2g1PjwvYT5cblx0XHRcdFx0XHQ8aDYgaWQ9XCJoZWFkZXItZHJvcC1sb2dvdXRcIiBvbkNsaWNrPXsgdGhpcy5sb2dPdXQuYmluZCh0aGlzKSB9PkxvZyBPdXQ8L2g2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgaWQ9XCJoZWFkZXItbG9nb1wiIHNyYz1cIi9wdWJsaWMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZGVzY1wiPkhvbWVwYWdlIGZvciBwZXRzPC9oNT5cblx0XHRcdFx0eyB1c2VySW5mbyB9XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9leHBsb3JlXCI+XG5cdFx0XHRcdFx0PGg1PkV4cGxvcmU8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8aDU+UHVibGljPC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9eyBsb2dpblN0eWxlIH0+XG5cdFx0XHRcdFx0PGg1IGlkPVwiaGVhZGVyLWRyb3Atbm90aWNlXCI+Q2xpY2sgdG8gc2lnbiBpbiBvciBzaWduIHVwPC9oNT5cblx0XHRcdFx0XHQ8R29vZ2xlbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGdvb2dsZUNsaWVudElkIH0gXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjIwMHB4XCJcblx0XHRcdFx0XHRcdGdMb2dpbj17IHRoaXMuZ0xvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGYWNlYm9va2xvZ2luIFxuXHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBmYWNlYm9va0NsaWVudElkIH1cblx0XHRcdFx0XHRcdHdpZHRoPVwiMTk0cHhcIlxuXHRcdFx0XHRcdFx0ZkxvZ2luPXsgdGhpcy5mTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0eyBsb2dvdXRCb2FyZCB9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyBjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGEgfVxuKShIZWFkZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEJ1bmRsZSBmcm9tICcuL0J1bmRsZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nZW5lcmFsLmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9aG9tZSEuLi9wYWdlcy9Ib21lJztcbmltcG9ydCBFeHBsb3JlIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWV4cGxvcmUhLi4vcGFnZXMvRXhwbG9yZSc7XG5pbXBvcnQgUGV0IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXBldCEuLi9wYWdlcy9QZXQnO1xuaW1wb3J0IFVzZXIgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dXNlciEuLi9wYWdlcy9Vc2VyJztcbmltcG9ydCBNb21lbnQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9bW9tZW50IS4uL3BhZ2VzL01vbWVudCc7XG5pbXBvcnQgV2F0Y2ggZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9d2F0Y2ghLi4vcGFnZXMvV2F0Y2gnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVxdWVzdCEuLi9wYWdlcy9SZXF1ZXN0JztcbmltcG9ydCBTZXR0aW5nIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvU2V0dGluZyc7XG5pbXBvcnQgQWRkIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvQWRkJztcbmltcG9ydCBUZXJtcyBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT10ZXJtcyEuLi9wYWdlcy9UZXJtcyc7XG5pbXBvcnQgUmVhY3RVSSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuLi9wYWdlcy9SZWFjdCc7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IChwcm9wcykgPT4gKFxuICA8QnVuZGxlIGxvYWQ9eyBjb21wb25lbnQgfT5cbiAgICB7XG4gICAgICAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPiA6IG51bGxcbiAgICB9XG4gIDwvQnVuZGxlPlxuKTtcblxuY29uc3QgZ2V0Um91dGVyID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoSG9tZSkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9leHBsb3JlXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEV4cGxvcmUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcGV0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQZXQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvdXNlci86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVXNlcikgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9tb21lbnQvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KE1vbWVudCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi93YXRjaFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChXYXRjaCkgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9yZXF1ZXN0XCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFJlcXVlc3QpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2V0dGluZ1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChTZXR0aW5nKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChBZGQpIH0gLz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvdGVybXNcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoVGVybXMpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcmVhY3RcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoUmVhY3RVSSkgfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxoNj7CqSAyMDE3LTIwMTggU21pbGluZ3MubWU8L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViXCIgdGFyZ2V0PVwiX19ibGFua1wiPlNvdXJjZSBDb2RlPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjYvVGhvdXNhbmRheS1XZWIvaXNzdWVzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlJlcG9ydDwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHA6Ly9nbHlwaGljb25zLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5HbHlwaGljb25zPC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX19ibGFua1wiPlRlcm1zICYgUHJpdmFjeSBQb2xpY3k8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNlwiIHRhcmdldD1cIl9fYmxhbmtcIj5BYm91dDwvYT48L2g2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRXhwbG9yZS5qc1wiKSk7XG5cdH0sIFwiZXhwbG9yZVwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuL3NyYy9wYWdlcy9FeHBsb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Ib21lLmpzXCIpKTtcblx0fSwgXCJob21lXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4vc3JjL3BhZ2VzL0hvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL01vbWVudC5qc1wiKSk7XG5cdH0sIFwibW9tZW50XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi9zcmMvcGFnZXMvTW9tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9QZXQuanNcIikpO1xuXHR9LCBcInBldFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4vc3JjL3BhZ2VzL1BldC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRHYWxsZXJ5KGRhdGEpIHtcblx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGltYWdlKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGRvbWFpblVybCArICcvaW1nL3BldC8nICsgaW1hZ2UucGV0X2lkICsgJy9tb21lbnQvJyArIGltYWdlLmltYWdlX25hbWUsXG5cdFx0XHRpbWFnZS5tb21lbnRfbWVzc2FnZSxcblx0XHRcdCcvbW9tZW50LycgKyBpbWFnZS5tb21lbnRfaWRcblx0XHRdO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9idWlsZEdhbGxlcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlYWN0LmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvUmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlcXVlc3QuanNcIikpO1xuXHR9LCBcInJlcXVlc3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlcXVlc3QhLi9zcmMvcGFnZXMvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2V0dGluZy5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9TZXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9UZXJtcy5qc1wiKSk7XG5cdH0sIFwidGVybXNcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4vc3JjL3BhZ2VzL1Rlcm1zLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Vc2VyLmpzXCIpKTtcblx0fSwgXCJ1c2VyXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4vc3JjL3BhZ2VzL1VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1dhdGNoLmpzXCIpKTtcblx0fSwgXCJ3YXRjaFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9d2F0Y2ghLi9zcmMvcGFnZXMvV2F0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qZ2VuZXJhbC1oZWFkZXIqL1xcbiNoZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmODUxMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNoZWFkZXItZGVzY3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuLmhlYWRlci1uYXZpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyLWxvZ297XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI2hlYWRlci1sb2dpbntcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyLWxvZ2luIGg1e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI2hlYWRlci1sb2dpbiBpbWd7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRyb3B7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4jaGVhZGVyLWRyb3AtbWVzc2FnZXtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDUyNDU2ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDhweCAyJSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wIGF7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1kcm9wIGlucHV0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jaGVhZGVyLWRyb3AtbG9nb3V0e1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmODUxMztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItZHJvcC1oaWRle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIyNHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDdiNDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFx0XFx0XFx0XFxufVxcbiNoZWFkZXItZHJvcC1ub3RpY2V7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2VmODUxMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qRm9vdGVyIHN0eWxlKi9cXG4jZm9vdGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdHBhZGRpbmc6IDVweCAxMCU7XFxuXFx0bWFyZ2luLXRvcDogNzBweDtcXG5cXHRjbGVhcjogYm90aDtcXG59XFxuXFxuI2Zvb3RlciBoNntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzJTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ4cHgpIHtcXG4gICAgI2hlYWRlci1sb2dve1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNmb290ZXJ7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgI2hlYWRlci1kZXNje1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAgICNoZWFkZXItbG9nb3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIl0sInNvdXJjZVJvb3QiOiIifQ==