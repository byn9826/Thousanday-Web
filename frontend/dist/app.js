webpackJsonp([10],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(169));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(179));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(180));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(8).then((function(require) {
		cb(__webpack_require__(181));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(6).then((function(require) {
		cb(__webpack_require__(182));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(183));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "/*general-header*/\n#header{\n    position: fixed;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid white;\n    background-color: #ef8513;\n    color: white;\n    z-index: 999;\n    vertical-align: middle;\n}\n#header-desc{\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin-left: 2%;\n}\n.header-navi{\n    color: white;\n    float: right;\n    margin-right: 5%;\n    cursor: pointer;\n}\n#header-logo{\n    float: left;\n    margin-left: 10%;\n    height: 40px;\n    margin-top: 5px;\n}\n\n#header-login{\n    float: right;\n    margin-right: 10%;\n    cursor: pointer;\n}\n#header-login h5{\n    display: inline-block;\n    vertical-align: middle;\n    margin-bottom: 5px;\n}\n#header-login img{\n    display: inline-block;\n    vertical-align: middle;\n    height: 6px;\n    margin-left: 10px;\n}\n\n.header-drop{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n    text-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: visible;\n}\n#header-drop-message{\n    border-left: 2px solid #052456 !important;\n    border-right: 2px solid #052456 !important;\n    color: black !important;\n    background-color: white !important;\n    padding: 8px 2% !important;\n    width: 76% !important;\n    margin-bottom: 15px !important;\n}\n.header-drop a{\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    margin-left: 10%;\n    width: 80%;\n    border-radius: 3px;\n    color: white;\n    background-color: #ef8513;\n    line-height: initial;\n    padding: 5px 0;\n    cursor: pointer;\n}\n.header-drop input{\n    cursor: pointer;\n    width: 80%;\n    border-radius: 3px;\n    height: 26px;\n    background-color: #ef8513;\n    outline: none;\n    margin-top: 20px;\n}\n#header-drop-logout{\n    border-bottom: 2px solid #ef8513;\n    width: 80%;\n    margin-left: 10%;\n    color: black;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    line-height: 30px !important;\n}\n.header-drop-hide{\n    position: fixed;\n    top: 50px;\n    width: 224px;\n\ttext-align: center;\n    padding: 10px 0;\n    right: 10%;\n    background-color: white;\n    border: 1px solid #f7d7b4;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    margin-top: 3px;\n    border-radius: 5px;\n    visibility: hidden;\t\t\t\n}\n#header-drop-notice{\n    display: block;\n    color: #ef8513;\n    text-align: center;\n    line-height: 30px;\n    font-weight: bold;\n}\n\n/*Footer style*/\n#footer{\n    display: block;\n\twidth: 80%;\n\tbackground-color: black;\n\tpadding: 5px 10%;\n\tmargin-top: 70px;\n\tclear: both;\n}\n\n#footer h6{\n    display: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 3%;\n\tcolor: white;\n}\n\n@media only screen and (max-width: 948px) {\n    #header-logo{\n        margin-left: 5%;\n    }\n\n    #footer{\n        width: 90%;\n        padding: 5px 5%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    #header-desc{\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    #header-logo{\n        display: none;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(106);

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

/***/ 162:
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 2:
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

/***/ 35:
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
					localStorage.setItem("newAvatar", null);
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

var _config = __webpack_require__(2);

var _processError = __webpack_require__(452);

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

/***/ 452:
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(14);

var _store = __webpack_require__(86);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(89);

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

var	fixUrls = __webpack_require__(162);

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

/***/ 64:
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

var _processError = __webpack_require__(452);

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

/***/ 65:
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

var _processError = __webpack_require__(452);

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

/***/ 66:
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

var _processError = __webpack_require__(452);

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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_HOME_MOMENTS = undefined;
exports.readHomeMoments = readHomeMoments;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(452);

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

/***/ 68:
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

var _processError = __webpack_require__(452);

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

/***/ 69:
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

var _processError = __webpack_require__(452);

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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_REQUEST_USER = exports.BUILD_REQUEST_PAGE = undefined;
exports.readRequestPage = readRequestPage;
exports.updateRequestUser = updateRequestUser;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(452);

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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHANGE_USER_MOMENTS = exports.BUILD_USER_PAGE = undefined;
exports.readUserPage = readUserPage;
exports.readUserMoments = readUserMoments;

var _config = __webpack_require__(2);

var _processError = __webpack_require__(452);

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

/***/ 72:
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

var _processError = __webpack_require__(452);

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

/***/ 73:
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _account = __webpack_require__(75);

var _account2 = _interopRequireDefault(_account);

var _home = __webpack_require__(79);

var _home2 = _interopRequireDefault(_home);

var _pet = __webpack_require__(81);

var _pet2 = _interopRequireDefault(_pet);

var _user = __webpack_require__(84);

var _user2 = _interopRequireDefault(_user);

var _moment = __webpack_require__(80);

var _moment2 = _interopRequireDefault(_moment);

var _explore = __webpack_require__(78);

var _explore2 = _interopRequireDefault(_explore);

var _watch = __webpack_require__(85);

var _watch2 = _interopRequireDefault(_watch);

var _request = __webpack_require__(82);

var _request2 = _interopRequireDefault(_request);

var _setting = __webpack_require__(83);

var _setting2 = _interopRequireDefault(_setting);

var _add = __webpack_require__(76);

var _add2 = _interopRequireDefault(_add);

var _edit = __webpack_require__(77);

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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _account = __webpack_require__(35);

var _setting = __webpack_require__(37);

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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _add = __webpack_require__(64);

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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _edit = __webpack_require__(65);

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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _explore = __webpack_require__(66);

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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _home = __webpack_require__(67);

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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _moment = __webpack_require__(68);

var _buildComments = __webpack_require__(73);

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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _pet = __webpack_require__(69);

var _config = __webpack_require__(2);

var _noToInfo = __webpack_require__(60);

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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _request = __webpack_require__(70);

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

/***/ 83:
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _user = __webpack_require__(71);

var _config = __webpack_require__(2);

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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _watch = __webpack_require__(72);

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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(74);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 87:
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(16);

var _account = __webpack_require__(35);

var _config = __webpack_require__(2);

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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _Bundle = __webpack_require__(87);

var _Bundle2 = _interopRequireDefault(_Bundle);

__webpack_require__(161);

var _Header = __webpack_require__(88);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(91);

var _Home2 = _interopRequireDefault(_Home);

var _Explore = __webpack_require__(90);

var _Explore2 = _interopRequireDefault(_Explore);

var _Pet = __webpack_require__(93);

var _Pet2 = _interopRequireDefault(_Pet);

var _User = __webpack_require__(104);

var _User2 = _interopRequireDefault(_User);

var _Moment = __webpack_require__(92);

var _Moment2 = _interopRequireDefault(_Moment);

var _Watch = __webpack_require__(105);

var _Watch2 = _interopRequireDefault(_Watch);

var _Request = __webpack_require__(98);

var _Request2 = _interopRequireDefault(_Request);

var _Setting = __webpack_require__(101);

var _Setting2 = _interopRequireDefault(_Setting);

var _Edit = __webpack_require__(100);

var _Edit2 = _interopRequireDefault(_Edit);

var _Add = __webpack_require__(99);

var _Add2 = _interopRequireDefault(_Add);

var _Signup = __webpack_require__(102);

var _Signup2 = _interopRequireDefault(_Signup);

var _Terms = __webpack_require__(103);

var _Terms2 = _interopRequireDefault(_Terms);

var _React = __webpack_require__(97);

var _React2 = _interopRequireDefault(_React);

var _PageNotFound = __webpack_require__(96);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _InternalServerError = __webpack_require__(95);

var _InternalServerError2 = _interopRequireDefault(_InternalServerError);

var _Forbidden = __webpack_require__(94);

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

/***/ 9:
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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(170));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(7).then((function(require) {
		cb(__webpack_require__(172));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(174));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(176));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(171));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(173));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(175));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(177));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(9).then((function(require) {
		cb(__webpack_require__(178));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(168));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ })

},[166]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU2lnbnVwLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nZW5lcmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzPzdiN2QiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9wcm9jZXNzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93YXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9idWlsZENvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9leHBsb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2J1aWxkR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRXhwbG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0ZvcmJpZGRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW50ZXJuYWxTZXJ2ZXJFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFnZU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9SZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWRkLmpzIl0sIm5hbWVzIjpbImRvbWFpblVybCIsImFuZHJvaWRTdG9yZVVybCIsImdvb2dsZUNsaWVudElkIiwiZmFjZWJvb2tDbGllbnRJZCIsInJlYWRBY2NvdW50RmFjZWJvb2tBcGkiLCJyZWFkQWNjb3VudEdvb2dsZUFwaSIsImRlbGV0ZUFjY291bnRUb2tlbkFwaSIsInJlYWRIb21lTW9tZW50c0FwaSIsInJlYWRFeHBsb3JlTW9tZW50c0FwaSIsInJlYWRQZXRQYWdlQXBpIiwidXBkYXRlUGV0V2F0Y2hBcGkiLCJjcmVhdGVQZXRNb21lbnRBcGkiLCJyZWFkUGV0TW9tZW50c0FwaSIsInJlYWRVc2VyUGFnZUFwaSIsInJlYWRVc2VyTW9tZW50c0FwaSIsInJlYWRNb21lbnRQYWdlQXBpIiwiZGVsZXRlTW9tZW50UGFnZUFwaSIsInVwZGF0ZU1vbWVudExpa2VBcGkiLCJyZWFkTW9tZW50Q29tbWVudHNBcGkiLCJjcmVhdGVNb21lbnRDb21tZW50QXBpIiwicmVhZFdhdGNoUGFnZUFwaSIsImNyZWF0ZVdhdGNoUGV0QXBpIiwiZGVsZXRlV2F0Y2hQZXRBcGkiLCJyZWFkV2F0Y2hNb21lbnRzQXBpIiwicmVhZFJlcXVlc3RQYWdlQXBpIiwiY3JlYXRlUmVxdWVzdFVzZXJBcGkiLCJkZWxldGVSZXF1ZXN0VXNlckFwaSIsInJlYWRTZXR0aW5nUGFnZUFwaSIsInVwZGF0ZVNldHRpbmdBYm91dEFwaSIsInVwZGF0ZVNldHRpbmdOYW1lQXBpIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGkiLCJjcmVhdGVBZGRQZXRBcGkiLCJyZWFkRWRpdFBhZ2VBcGkiLCJ1cGRhdGVFZGl0TmFtZUFwaSIsInVwZGF0ZUVkaXRQcm9maWxlQXBpIiwiZGVsZXRlRWRpdFJlbGF0aXZlQXBpIiwicmVhZEVkaXRTZWFyY2hBcGkiLCJjcmVhdGVFZGl0UmVsYXRpdmVBcGkiLCJ1cGRhdGVFZGl0VHJhbnNmZXJBcGkiLCJ1cGRhdGVFZGl0UmVsYXRpb25BcGkiLCJjaGFuZ2VBY2NvdW50RGF0YSIsInJlYWRBY2NvdW50RGF0YSIsImRlbGV0ZUFjY291bnRUb2tlbiIsImNsZWFyQWNjb3VudFNpZ251cCIsIkNIQU5HRV9BQ0NPVU5UX0RBVEEiLCJDTEVBUl9BQ0NPVU5UX0RBVEEiLCJSRURJUkVDVF9UT19TSUdOVVAiLCJDTEVBUl9BQ0NPVU5UX1NJR05VUCIsImRhdGEiLCJ0eXBlIiwicmVkaXJlY3RUb1NpZ251cCIsInBvcnRhbCIsImRldGFpbCIsImFwaVVybCIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmFtZSIsImltYWdlVXJsIiwiY2F0Y2giLCJjbGVhckFjY291bnREYXRhIiwib2siLCJjbGVhciIsInJlYWRTZXR0aW5nUGFnZSIsInVwZGF0ZVNldHRpbmdBYm91dCIsInVwZGF0ZVNldHRpbmdOYW1lIiwiY3JlYXRlU2V0dGluZ1Byb2ZpbGUiLCJCVUlMRF9TRVRUSU5HX1BBR0UiLCJDSEFOR0VfU0VUVElOR19BQk9VVCIsIkNIQU5HRV9BQ0NPVU5UX05BTUUiLCJDSEFOR0VfU0VUVElOR19OQU1FIiwiQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSIsImJ1aWxkU2V0dGluZ1BhZ2UiLCJjaGFuZ2VTZXR0aW5nQWJvdXQiLCJhYm91dCIsInN0YXR1cyIsImNoYW5nZUFjY291bnROYW1lIiwiY2hhbmdlU2V0dGluZ05hbWUiLCJjaGFuZ2VTZXR0aW5nUHJvZmlsZSIsImZpbGUiLCJmaWxlRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2Vzc0RhdGEiLCJwcm9jZXNzRXJyb3IiLCJlcnIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRmFjZWJvb2tsb2dpbiIsInByb3BzIiwic3RhdGUiLCJ3aWR0aCIsImhlYWRlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwcGVuZENoaWxkIiwic2VsZiIsImZiQXN5bmNJbml0IiwiRkIiLCJpbml0IiwiYXBwSWQiLCJjbGllbnRJZCIsInhmYm1sIiwidmVyc2lvbiIsImZMb2dpbiIsImxvZ2luIiwiYXV0aFJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJhcGkiLCJzZXRTdGF0ZSIsImJ1dHRvblN0eWxlIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJmYWNlYm9vayIsImNsaWNrQnV0dG9uIiwiYmluZCIsIkdvb2dsZWxvZ2luIiwicmVzdWx0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlYWR5U3RhdGUiLCJjbGVhckludGVydmFsIiwicmVsYXlvdXQiLCJnYXBpIiwibG9hZCIsImluc3RhbmNlIiwiYXV0aDIiLCJjbGllbnRfaWQiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJnZXQiLCJwcm9maWxlIiwiZ2V0QmFzaWNQcm9maWxlIiwiZ2V0QXV0aEluc3RhbmNlIiwic2lnbkluIiwiaXNTaWduZWRJbiIsImdldElkIiwiZ2V0TmFtZSIsImZpcnN0bmFtZSIsImdldEdpdmVuTmFtZSIsImxhc3RuYW1lIiwiZ2V0RmFtaWx5TmFtZSIsImdldEltYWdlVXJsIiwiZW1haWwiLCJnZXRFbWFpbCIsImdldEF1dGhSZXNwb25zZSIsImlkX3Rva2VuIiwiZ0xvZ2luIiwiZ29vZ2xlIiwibm9HZXRBYmlsaXR5Iiwibm9HZXRHZW5kZXIiLCJub0dldE5hdHVyZSIsIm5vR2V0VHlwZSIsInZhbHVlIiwicGFyc2VJbnQiLCJjaGFuZ2VBZGREZXRhaWwiLCJjaGFuZ2VBZGRVcGRhdGUiLCJjcmVhdGVBZGRQZXQiLCJDSEFOR0VfQUREX0RFVEFJTCIsIkNIQU5HRV9BRERfVVBEQVRFIiwiUkVESVJFQ1RfVE9fVVNFUiIsInJlZGlyZWN0VG9Vc2VyIiwicGV0TmFtZSIsInBldEdlbmRlciIsInBldFR5cGUiLCJwZXROYXR1cmUiLCJwZXRBdmF0YXIiLCJ1c2VySWQiLCJ1c2VyVG9rZW4iLCJyZWFkRWRpdFBhZ2UiLCJjaGFuZ2VFZGl0VXBkYXRlIiwidXBkYXRlRWRpdE5hbWUiLCJ1cGRhdGVFZGl0UHJvZmlsZSIsImNoYW5nZUVkaXRSZW1vdmUiLCJkZWxldGVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0QWRkIiwicmVzZXRFZGl0U2VhcmNoIiwicmVhZEVkaXRTZWFyY2giLCJjcmVhdGVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0T3duZXJzaGlwIiwidXBkYXRlRWRpdFRyYW5zZmVyIiwiY2hhbmdlRWRpdEVuZCIsInJlZGlyZWN0VG9Ib21lIiwidXBkYXRlRWRpdFJlbGF0aW9uIiwiQlVJTERfRURJVF9QQUdFIiwiQ0hBTkdFX0VESVRfVVBEQVRFIiwiQ0hBTkdFX0VESVRfTkFNRSIsIkNIQU5HRV9FRElUX1JFTU9WRSIsIlJFTU9WRV9FRElUX1JFTEFUSVZFIiwiQ0hBTkdFX0VESVRfQUREIiwiUkVTRVRfRURJVF9TRUFSQ0giLCJDSEFOR0VfRURJVF9TRUFSQ0giLCJBRERfRURJVF9SRUxBVElWRSIsIkNIQU5HRV9FRElUX09XTkVSU0hJUCIsIkNIQU5HRV9FRElUX1RSQU5TRkVSIiwiQ0hBTkdFX0VESVRfRU5EIiwiUkVESVJFQ1RfVE9fSE9NRSIsImJ1aWxkRWRpdFBhZ2UiLCJwZXRJZCIsImNoYW5nZUVkaXROYW1lIiwiZm9ybURhdGEiLCJyZW1vdmVFZGl0UmVsYXRpdmUiLCJjaGFuZ2VFZGl0U2VhcmNoIiwic2VhcmNoSWQiLCJzZWFyY2hEYXRhIiwiYWRkRWRpdFJlbGF0aXZlIiwiY2hhbmdlRWRpdFRyYW5zZmVyIiwicmVsYXRpdmVJZCIsInJlYWRFeHBsb3JlTW9tZW50cyIsInNlbGVjdEV4cGxvcmVUeXBlIiwic2VsZWN0RXhwbG9yZU5hdHVyZSIsIkNIQU5HRV9FWFBMT1JFX1RZUEUiLCJDSEFOR0VfRVhQTE9SRV9OQVRVUkUiLCJDSEFOR0VfRVhQTE9SRV9NT01FTlRTIiwiY2hhbmdlRXhwbG9yZU1vbWVudHMiLCJtb21lbnRzRGF0YSIsIm5hdHVyZSIsImFwaVBhcmFtcyIsIm5ld1R5cGUiLCJuZXdOYXR1cmUiLCJyZWFkSG9tZU1vbWVudHMiLCJDSEFOR0VfSE9NRV9NT01FTlRTIiwiY2hhbmdlSG9tZU1vbWVudHMiLCJyZWFkTW9tZW50UGFnZSIsInNob3dNb21lbnREZWxldGUiLCJkZWxldGVNb21lbnRQYWdlIiwidXBkYXRlTW9tZW50TGlrZSIsInJlYWRNb21lbnRDb21tZW50cyIsInNob3dDb21tZW50RW1wdHkiLCJjcmVhdGVNb21lbnRDb21tZW50IiwiQlVJTERfTU9NRU5UX1BBR0UiLCJTSE9XX01PTUVOVF9ERUxFVEUiLCJSRURJUkVDVF9VU0VSX1BBR0UiLCJDSEFOR0VfTU9NRU5UX0xJS0UiLCJDSEFOR0VfTU9NRU5UX0NPTU1FTlRTIiwiU0hPV19DT01NRU5UX0VNUFRZIiwiQUREX01PTUVOVF9DT01NRU5UIiwiYnVpbGRNb21lbnRQYWdlIiwicmVkaXJjdFVzZXJQYWdlIiwibW9tZW50SWQiLCJjaGFuZ2VNb21lbnRMaWtlIiwiYWN0aW9uIiwiY2hhbmdlTW9tZW50Q29tbWVudHMiLCJjb21tZW50TG9hZCIsImNvbW1lbnRBZGRlZCIsImFkZE1vbWVudENvbW1lbnQiLCJjb250ZW50IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwicmVhZFBldFBhZ2UiLCJzaG93QWNjb3VudFJlcXVpcmVkIiwidXBkYXRlUGV0V2F0Y2giLCJjcmVhdGVQZXRNb21lbnQiLCJyZWFkUGV0TW9tZW50cyIsIkJVSUxEX1BFVF9QQUdFIiwiU0hPV19BQ0NPVU5UX1JFUVVJUkVEIiwiQ0hBTkdFX1BFVF9XQVRDSCIsIkFERF9QRVRfTU9NRU5UIiwiQ0hBTkdFX1BFVF9NT01FTlRTIiwiYnVpbGRQZXRQYWdlIiwiY2hhbmdlUGV0V2F0Y2giLCJhZGRQZXRNb21lbnQiLCJpbmZvIiwibWVzc2FnZSIsImltYWdlIiwic3BsaXQiLCJjaGFuZ2VQZXRNb21lbnRzIiwiYWRkIiwicGFyYW1zIiwicmVhZFJlcXVlc3RQYWdlIiwidXBkYXRlUmVxdWVzdFVzZXIiLCJCVUlMRF9SRVFVRVNUX1BBR0UiLCJDSEFOR0VfUkVRVUVTVF9VU0VSIiwiYnVpbGRSZXF1ZXN0UGFnZSIsImNoYW5nZVJlcXVlc3RVc2VyIiwiaW5kZXgiLCJyZWFkVXNlclBhZ2UiLCJyZWFkVXNlck1vbWVudHMiLCJCVUlMRF9VU0VSX1BBR0UiLCJDSEFOR0VfVVNFUl9NT01FTlRTIiwiYnVpbGRVc2VyUGFnZSIsImNoYW5nZVVzZXJNb21lbnRzIiwiYmVsb25nIiwicmVhZFdhdGNoUGFnZSIsInVwZGF0ZVdhdGNoUGV0IiwicmVhZFdhdGNoTW9tZW50cyIsImNoYW5nZVBldHNMb2FkIiwiQlVJTERfV0FUQ0hfUEFHRSIsIkNIQU5HRV9XQVRDSF9QRVQiLCJDSEFOR0VfV0FUQ0hfTU9NRU5UUyIsIkNIQU5HRV9QRVRTX0xPQUQiLCJidWlsZFdhdGNoUGFnZSIsImNoYW5nZVdhdGNoUGV0IiwiY2hhbmdlV2F0Y2hNb21lbnRzIiwibW9tZW50cyIsImxvYWRMaXN0IiwibGlzdHMiLCJidWlsZENvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsImNvbW1lbnRfY29udGVudCIsInVzZXJfaWQiLCJjb21tZW50X3RpbWUiLCJhY2NvdW50IiwiaG9tZSIsIm1vbWVudCIsInBldCIsImV4cGxvcmUiLCJ3YXRjaCIsInJlcXVlc3QiLCJzZXR0aW5nIiwiZWRpdCIsInJlZHVjZXIiLCJpbml0U3RhdGUiLCJyZWRpcmVjdFNpZ251cCIsInVwZGF0ZVJlc3VsdCIsImNyZWF0ZUF2YXRhciIsImNyZWF0ZUdlbmRlciIsImNyZWF0ZVR5cGUiLCJjcmVhdGVOYXR1cmUiLCJyZWRpcmVjdFVzZXIiLCJuZXdTdGF0ZSIsInBldERhdGEiLCJzaG93RW5kIiwic2hvd0FkZCIsInNlYXJjaCIsInNob3dSZW1vdmUiLCJzaG93VHJhbnNmZXIiLCJkYXRhTG9hZGVkIiwicmVkaXJlY3RIb21lIiwicGV0X25hbWUiLCJyZWxhdGl2ZV9pZCIsIm93bmVyX2lkIiwibG9ja2VyIiwibmV3TW9tZW50cyIsImNvbmNhdCIsImxlbmd0aCIsIm5ld0RhdGEiLCJtb21lbnREYXRhIiwiZmFtaWx5RGF0YSIsImxpa2VEYXRhIiwiY29tbWVudERhdGEiLCJzaG93Q29uZmlybSIsImNvbW1lbnRMb2NrZXIiLCJjb21tZW50RXJyb3IiLCJsaWtlIiwiZmlsdGVyIiwibmV3Q29tbWVudHMiLCJwZXRPd25lciIsImZyaWVuZERhdGEiLCJnYWxsZXJ5RGF0YSIsIndhdGNoRGF0YSIsImxvZ2luUmVxdWlyZWQiLCJyZXNldCIsIm5ld01vbWVudCIsImFiaWxpdHkiLCJuZXdBYmlsaXR5IiwicmVxdWVzdERhdGEiLCJhY2NlcHRMaXN0IiwidXNlckRhdGEiLCJ1c2VyQWJvdXQiLCJ1c2VyX2Fib3V0IiwicmVsYXRpdmVEYXRhIiwicGV0c0RhdGEiLCJiZWxvbmdEYXRhIiwiZm9yRWFjaCIsInB1c2giLCJTZXQiLCJwZXRzTGlzdCIsInVud2F0Y2giLCJsb2FkUGV0cyIsIndhdGNoTGlzdCIsInN0b3JlIiwiQnVuZGxlIiwibW9kIiwibmV4dFByb3BzIiwiZGVmYXVsdCIsImNoaWxkcmVuIiwiSGVhZGVyIiwic2hvd0Ryb3AiLCJnZXRJdGVtIiwibG9nb3V0Iiwic2lnbk91dCIsImxvZ2luU3R5bGUiLCJ1c2VySW5mbyIsImxvZ291dEJvYXJkIiwibG9nT3V0IiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0Um91dGVyIiwiYnVpbGRHYWxsZXJ5IiwicGV0X2lkIiwiaW1hZ2VfbmFtZSIsIm1vbWVudF9tZXNzYWdlIiwibW9tZW50X2lkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEM7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEM7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7OztBQ0pBO0FBQ0E7OztBQUdBO0FBQ0EscURBQXNELHNCQUFzQixrQkFBa0IsbUJBQW1CLHdCQUF3QixxQ0FBcUMsZ0NBQWdDLG1CQUFtQixtQkFBbUIsNkJBQTZCLEdBQUcsZUFBZSw0QkFBNEIsNkJBQTZCLG1CQUFtQixzQkFBc0IsR0FBRyxlQUFlLG1CQUFtQixtQkFBbUIsdUJBQXVCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLG1CQUFtQix3QkFBd0Isc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0Qiw2QkFBNkIseUJBQXlCLEdBQUcsb0JBQW9CLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLHdCQUF3QixHQUFHLGlCQUFpQixzQkFBc0IsZ0JBQWdCLG1CQUFtQix5QkFBeUIsc0JBQXNCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLGdEQUFnRCxzQkFBc0IseUJBQXlCLDBCQUEwQixHQUFHLHVCQUF1QixnREFBZ0QsaURBQWlELDhCQUE4Qix5Q0FBeUMsaUNBQWlDLDRCQUE0QixxQ0FBcUMsR0FBRyxpQkFBaUIsdUJBQXVCLHFCQUFxQix5QkFBeUIsdUJBQXVCLGlCQUFpQix5QkFBeUIsbUJBQW1CLGdDQUFnQywyQkFBMkIscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsZ0NBQWdDLG9CQUFvQix1QkFBdUIsR0FBRyxzQkFBc0IsdUNBQXVDLGlCQUFpQix1QkFBdUIsbUJBQW1CLHVCQUF1QiwwQkFBMEIsc0JBQXNCLG1DQUFtQyxHQUFHLG9CQUFvQixzQkFBc0IsZ0JBQWdCLG1CQUFtQix1QkFBdUIsc0JBQXNCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLGdEQUFnRCxzQkFBc0IseUJBQXlCLHlCQUF5QixTQUFTLHNCQUFzQixxQkFBcUIscUJBQXFCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEdBQUcsOEJBQThCLHFCQUFxQixlQUFlLDRCQUE0QixxQkFBcUIscUJBQXFCLGdCQUFnQixHQUFHLGVBQWUsNEJBQTRCLDJCQUEyQixxQkFBcUIsaUJBQWlCLEdBQUcsK0NBQStDLG1CQUFtQiwwQkFBMEIsT0FBTyxnQkFBZ0IscUJBQXFCLDBCQUEwQixPQUFPLEdBQUcsK0NBQStDLG1CQUFtQix3QkFBd0IsT0FBTyxHQUFHLCtDQUErQyxtQkFBbUIsd0JBQXdCLE9BQU8sR0FBRzs7QUFFbnZHOzs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rk8sSUFBTUEsZ0NBQVkscUJBQWxCOztBQUVBLElBQU1DLDRDQUFrQiw4REFBeEI7O0FBRUEsSUFBTUMsMENBQWlCLDBFQUF2QjtBQUNBLElBQU1DLDhDQUFtQixpQkFBekI7O0FBRUEsSUFBTUMsMERBQXlCLG1CQUEvQjtBQUNBLElBQU1DLHNEQUF1QixpQkFBN0I7QUFDQSxJQUFNQyx3REFBd0IsaUJBQTlCOztBQUVBLElBQU1DLGtEQUFxQixhQUEzQjtBQUNBLElBQU1DLHdEQUF3QixlQUE5Qjs7QUFFQSxJQUFNQywwQ0FBaUIsV0FBdkI7QUFDQSxJQUFNQyxnREFBb0IsWUFBMUI7QUFDQSxJQUFNQyxrREFBcUIsZ0JBQTNCO0FBQ0EsSUFBTUMsZ0RBQW9CLFdBQTFCOztBQUVBLElBQU1DLDRDQUFrQixZQUF4QjtBQUNBLElBQU1DLGtEQUFxQixZQUEzQjs7QUFFQSxJQUFNQyxnREFBb0IsY0FBMUI7QUFDQSxJQUFNQyxvREFBc0IsZ0JBQTVCO0FBQ0EsSUFBTUMsb0RBQXNCLGNBQTVCO0FBQ0EsSUFBTUMsd0RBQXdCLGNBQTlCO0FBQ0EsSUFBTUMsMERBQXlCLGlCQUEvQjs7QUFFQSxJQUFNQyw4Q0FBbUIsYUFBekI7QUFDQSxJQUFNQyxnREFBb0IsWUFBMUI7QUFDQSxJQUFNQyxnREFBb0IsZUFBMUI7QUFDQSxJQUFNQyxvREFBc0IsYUFBNUI7O0FBRUEsSUFBTUMsa0RBQXFCLGVBQTNCO0FBQ0EsSUFBTUMsc0RBQXVCLGlCQUE3QjtBQUNBLElBQU1DLHNEQUF1QixpQkFBN0I7O0FBRUEsSUFBTUMsa0RBQXFCLGVBQTNCO0FBQ0EsSUFBTUMsd0RBQXdCLGdCQUE5QjtBQUNBLElBQU1DLHNEQUF1QixlQUE3QjtBQUNBLElBQU1DLDREQUEwQixjQUFoQzs7QUFFQSxJQUFNQyw0Q0FBa0IsYUFBeEI7QUFDQSxJQUFNQyw0Q0FBa0IsWUFBeEI7QUFDQSxJQUFNQyxnREFBb0IsWUFBMUI7QUFDQSxJQUFNQyxzREFBdUIsYUFBN0I7QUFDQSxJQUFNQyx3REFBd0IsY0FBOUI7QUFDQSxJQUFNQyxnREFBb0IsY0FBMUI7QUFDQSxJQUFNQyx3REFBd0IsV0FBOUI7QUFDQSxJQUFNQyx3REFBd0IsZ0JBQTlCO0FBQ0EsSUFBTUMsd0RBQXdCLFdBQTlCLEM7Ozs7Ozs7Ozs7Ozs7O1FDekNTQyxpQixHQUFBQSxpQjtRQWFBQyxlLEdBQUFBLGU7UUFnREFDLGtCLEdBQUFBLGtCO1FBMkJBQyxrQixHQUFBQSxrQjs7QUFqR2hCOztBQUlPLElBQU1DLG9EQUFzQiw2QkFBNUI7QUFDQSxJQUFNQyxrREFBcUIsNEJBQTNCO0FBQ0EsSUFBTUMsa0RBQXFCLDRCQUEzQjtBQUNBLElBQU1DLHNEQUF1Qiw4QkFBN0I7O0FBRUEsU0FBU1AsaUJBQVQsQ0FBMkJRLElBQTNCLEVBQWlDO0FBQ3ZDLFFBQU87QUFDTkMsUUFBTUwsbUJBREE7QUFFTkk7QUFGTSxFQUFQO0FBSUE7O0FBRUQsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDM0IsUUFBTztBQUNORCxRQUFNSDtBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTTCxlQUFULENBQXlCVSxNQUF6QixFQUFpQ0MsTUFBakMsRUFBeUM7QUFDL0MsS0FBTUMsU0FBU0YsV0FBVyxVQUFYLGdFQUFmO0FBQ0EsUUFBTyxVQUFVRyxRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sb0JBQVlGLE1BQWxCLEVBQTBCO0FBQ2hDRyxXQUFRLE1BRHdCO0FBRWhDQyxTQUFNLE1BRjBCO0FBR2hDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUh1QjtBQU1oQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGFBQVNWLE9BQU9XLEtBREk7QUFFcEIsZ0JBQVk7QUFGUSxJQUFmO0FBTjBCLEdBQTFCLEVBV0xDLElBWEssQ0FXQyxvQkFBWTtBQUNsQixVQUFPQyxTQUFTQyxJQUFULEVBQVA7QUFDQSxHQWJLLEVBY0xGLElBZEssQ0FjQSxVQUFDRSxJQUFELEVBQVU7QUFDZixPQUFJQSxLQUFLQyxFQUFULEVBQWE7QUFDWkMsaUJBQWFDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILEtBQUtDLEVBQW5DO0FBQ0FDLGlCQUFhQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDakIsT0FBT1csS0FBeEM7QUFDQUssaUJBQWFDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NsQixNQUFwQztBQUNBLFFBQUlBLFdBQVcsVUFBZixFQUEyQjtBQUMxQmlCLGtCQUFhQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDakIsT0FBT2EsUUFBUCxDQUFnQkssSUFBaEQ7QUFDQUYsa0JBQWFDLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsSUFBbEM7QUFDQSxLQUhELE1BR087QUFDTkQsa0JBQWFDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NqQixPQUFPa0IsSUFBdkM7QUFDQUYsa0JBQWFDLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NqQixPQUFPbUIsUUFBekM7QUFDQTtBQUNEakIsYUFBU0osa0JBQVQ7QUFDQSxJQVpELE1BWU87QUFDTmtCLGlCQUFhQyxPQUFiLENBQXFCLElBQXJCLEVBQTJCSCxLQUFLLENBQUwsQ0FBM0I7QUFDQUUsaUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJILEtBQUssQ0FBTCxDQUE3QjtBQUNBRSxpQkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4QkgsS0FBSyxDQUFMLENBQTlCO0FBQ0FaLGFBQVNkLGtCQUFrQjBCLElBQWxCLENBQVQ7QUFDQTtBQUNELEdBakNLLEVBaUNITSxLQWpDRyxDQWlDRyxZQUFNO0FBQ2Q7QUFDQSxHQW5DSyxDQUFQO0FBb0NBLEVBckNEO0FBc0NBOztBQUVELFNBQVNDLGdCQUFULEdBQTRCO0FBQzNCLFFBQU87QUFDTnhCLFFBQU1KO0FBREEsRUFBUDtBQUdBOztBQUVNLFNBQVNILGtCQUFULENBQTRCeUIsRUFBNUIsRUFBZ0NKLEtBQWhDLEVBQXVDO0FBQzdDLFFBQU8sVUFBVVQsUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLGlEQUFOLEVBQXlDO0FBQy9DQyxXQUFRLE1BRHVDO0FBRS9DQyxTQUFNLE1BRnlDO0FBRy9DQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhzQztBQU0vQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGFBQVNDLEtBRFc7QUFFcEIsVUFBTUk7QUFGYyxJQUFmO0FBTnlDLEdBQXpDLEVBV0xILElBWEssQ0FXQyxvQkFBWTtBQUNsQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7QUFDTCxHQWZLLEVBZ0JMVixJQWhCSyxDQWdCQSxVQUFDRSxJQUFELEVBQVU7QUFDZkUsZ0JBQWFPLEtBQWI7QUFDQXJCLFlBQVNtQixrQkFBVDtBQUNBLEdBbkJLLEVBbUJIRCxLQW5CRyxDQW1CRyxZQUFNO0FBQ2Q7QUFDQSxHQXJCSyxDQUFQO0FBc0JBLEVBdkJEO0FBd0JBOztBQUVNLFNBQVM3QixrQkFBVCxHQUE4QjtBQUNwQyxRQUFPO0FBQ05NLFFBQU1GO0FBREEsRUFBUDtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7O1FDbEZlNkIsZSxHQUFBQSxlO1FBcUJBQyxrQixHQUFBQSxrQjtRQTZDQUMsaUIsR0FBQUEsaUI7UUE0QkFDLG9CLEdBQUFBLG9COztBQWpIaEI7O0FBSUE7Ozs7OztBQUVPLElBQU1DLGtEQUFxQiw0QkFBM0I7QUFDQSxJQUFNQyxzREFBdUIsOEJBQTdCO0FBQ0EsSUFBTUMsb0RBQXNCLDZCQUE1QjtBQUNBLElBQU1DLG9EQUFzQiw2QkFBNUI7QUFDQSxJQUFNQywwREFBeUIsZ0NBQS9COztBQUVQLFNBQVNDLGdCQUFULENBQTBCckMsSUFBMUIsRUFBZ0M7QUFDL0IsUUFBTztBQUNOQyxRQUFNK0Isa0JBREE7QUFFTmhDO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVM0QixlQUFULENBQXlCVCxFQUF6QixFQUE2QjtBQUNuQyxRQUFPLFVBQVViLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSxpREFBaUMsTUFBakMsR0FBMENZLEVBQWhELEVBQ0xILElBREssQ0FDQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ2hCLFdBQU9ULFNBQVNDLElBQVQsRUFBUDtBQUNBO0FBQ0QsR0FMSyxFQU1MRixJQU5LLENBTUEsZ0JBQVE7QUFDYlYsWUFBUytCLGlCQUFpQm5CLElBQWpCLENBQVQ7QUFDQSxHQVJLLENBQVA7QUFTQSxFQVZEO0FBV0E7O0FBRUQsU0FBU29CLGtCQUFULENBQTRCdEMsSUFBNUIsRUFBa0M7QUFDakMsUUFBTztBQUNOQyxRQUFNZ0Msb0JBREE7QUFFTmpDO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVM2QixrQkFBVCxDQUE0QlYsRUFBNUIsRUFBZ0NKLEtBQWhDLEVBQXVDd0IsS0FBdkMsRUFBOEM7QUFDcEQsUUFBTyxVQUFVakMsUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLGlEQUFOLEVBQXlDO0FBQy9DQyxXQUFRLE1BRHVDO0FBRS9DQyxTQUFNLE1BRnlDO0FBRy9DQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhzQztBQU0vQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLFlBQVFLLEVBRFk7QUFFcEIsYUFBU0osS0FGVztBQUdwQixhQUFTd0I7QUFIVyxJQUFmO0FBTnlDLEdBQXpDLEVBWUx2QixJQVpLLENBWUEsb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNYLFdBQU8sSUFBUDtBQUNEO0FBQ0wsK0JBQWFULFNBQVN1QixNQUF0QjtBQUNBLEdBakJLLEVBa0JMeEIsSUFsQkssQ0FrQkEsWUFBTTtBQUNYVixZQUFTZ0MsbUJBQW1CQyxLQUFuQixDQUFUO0FBQ0EsR0FwQkssQ0FBUDtBQXFCQSxFQXRCRDtBQXVCQTs7QUFFRCxTQUFTRSxpQkFBVCxDQUEyQnpDLElBQTNCLEVBQWlDO0FBQ2hDLFFBQU87QUFDTkMsUUFBTWlDLG1CQURBO0FBRU5sQztBQUZNLEVBQVA7QUFJQTs7QUFFRCxTQUFTMEMsaUJBQVQsR0FBNkI7QUFDNUIsUUFBTztBQUNOekMsUUFBTWtDO0FBREEsRUFBUDtBQUdBOztBQUVELFNBQVNRLG9CQUFULEdBQWdDO0FBQy9CLFFBQU87QUFDTjFDLFFBQU1tQztBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTTixpQkFBVCxDQUEyQlgsRUFBM0IsRUFBK0JKLEtBQS9CLEVBQXNDTyxJQUF0QyxFQUE0QztBQUNsRCxRQUFPLFVBQVVoQixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sZ0RBQU4sRUFBd0M7QUFDOUNDLFdBQVEsTUFEc0M7QUFFOUNDLFNBQU0sTUFGd0M7QUFHOUNDLFlBQVM7QUFDUkMsWUFBUTtBQURBLElBSHFDO0FBTTlDQyxTQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDcEIsWUFBUUssRUFEWTtBQUVwQixhQUFTSixLQUZXO0FBR3BCLFlBQVFPO0FBSFksSUFBZjtBQU53QyxHQUF4QyxFQVlMTixJQVpLLENBWUEsb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPLElBQVA7QUFDQTtBQUNELCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWpCSyxFQWtCTHhCLElBbEJLLENBa0JBLFlBQU07QUFDWEksZ0JBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCO0FBQ0FoQixZQUFTbUMsa0JBQWtCbkIsSUFBbEIsQ0FBVDtBQUNBaEIsWUFBU29DLG1CQUFUO0FBQ0EsR0F0QkssQ0FBUDtBQXVCQSxFQXhCRDtBQXlCQTs7QUFFTSxTQUFTWCxvQkFBVCxDQUE4QlosRUFBOUIsRUFBa0NKLEtBQWxDLEVBQXlDNkIsSUFBekMsRUFBK0M7QUFDckQsUUFBTyxVQUFVdEMsUUFBVixFQUFvQjtBQUMxQixNQUFNdUMsV0FBVyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFdBQVNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JILElBQXhCLEVBQThCekIsS0FBSyxNQUFuQztBQUNBMEIsV0FBU0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QjVCLEVBQXhCO0FBQ0EwQixXQUFTRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCaEMsS0FBekI7QUFDQSxTQUFPUixNQUFNLG1EQUFOLEVBQTJDO0FBQ2pEQyxXQUFRLE1BRHlDO0FBRWpEQyxTQUFNLE1BRjJDO0FBR2pEQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUh3QztBQU1qRHFDLGdCQUFhLEtBTm9DO0FBT2pEcEMsU0FBTWlDO0FBUDJDLEdBQTNDLEVBU0w3QixJQVRLLENBU0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPLElBQVA7QUFDQTtBQUNELCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWRLLEVBZUx4QixJQWZLLENBZUEsWUFBTTtBQUNYVixZQUFTcUMsc0JBQVQ7QUFDQSxHQWpCSyxDQUFQO0FBa0JBLEVBdkJEO0FBd0JBLEM7Ozs7Ozs7Ozs7Ozs7a0JDMUl1Qk0sWTtBQUFULFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ3pDQyxRQUFPQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixNQUFNSCxHQUE5QjtBQUNBLEM7Ozs7Ozs7Ozs7QUNGRDs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsbUJBQVNJLE1BQVQsQ0FDQztBQUFBO0FBQUEsR0FBVSxzQkFBVjtBQUF5QjtBQUF6QixDQURELEVBQ21EQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRG5ELEU7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZYQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxhOzs7QUFDcEIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU8sTUFBS0YsS0FBTCxDQUFXRSxLQUFYLElBQW9CLE1BRGY7QUFFWjNDLGFBQVU7QUFGRSxHQUFiO0FBRmtCO0FBTWxCOzs7O3VDQUNvQjtBQUNwQixPQUFJNEMsU0FBU04sU0FBU08sb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBYjtBQUNBLE9BQUlDLFNBQVNSLFNBQVNTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRCxVQUFPNUMsRUFBUCxHQUFZLGdCQUFaO0FBQ0E0QyxVQUFPRSxHQUFQLEdBQWEscUNBQWI7QUFDQUosVUFBT0ssV0FBUCxDQUFtQkgsTUFBbkI7QUFDQTs7O3NDQUNtQjtBQUFBOztBQUNuQixPQUFJSSxPQUFPLElBQVg7QUFDQWhCLFVBQU9pQixXQUFQLEdBQXFCLFlBQU07QUFDMUJDLE9BQUdDLElBQUgsQ0FBUTtBQUNQQyxZQUFhLE9BQUtiLEtBQUwsQ0FBV2MsUUFEakI7QUFFUEMsWUFBYSxJQUZOO0FBR1BDLGNBQWE7QUFITixLQUFSO0FBS0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHLElBakJEO0FBa0JBOzs7Z0NBQ2E7QUFDYixPQUFJUCxPQUFPLElBQVg7QUFDQSxPQUFJLEtBQUtSLEtBQUwsQ0FBVzFDLFFBQWYsRUFBeUI7QUFDeEIsU0FBS3lDLEtBQUwsQ0FBV2lCLE1BQVgsQ0FBa0IsS0FBS2hCLEtBQUwsQ0FBVzFDLFFBQTdCO0FBQ0EsSUFGRCxNQUVPO0FBQ05vRCxPQUFHTyxLQUFILENBQVMsVUFBQzNELFFBQUQsRUFBYztBQUN0QixTQUFJQSxTQUFTdUIsTUFBVCxLQUFvQixXQUF4QixFQUFxQztBQUNwQyxVQUFJekIsUUFBUUUsU0FBUzRELFlBQVQsQ0FBc0JDLFdBQWxDO0FBQ0FULFNBQUdVLEdBQUgsQ0FBTyxLQUFQLEVBQWMsVUFBQzlELFFBQUQsRUFBYztBQUMzQmtELFlBQUthLFFBQUwsQ0FBYyxFQUFFL0Qsa0JBQUYsRUFBZDtBQUNBa0QsWUFBS1QsS0FBTCxDQUFXaUIsTUFBWCxDQUFrQjFELFFBQWxCLEVBQTRCRixLQUE1QjtBQUNBLE9BSEQ7QUFJQSxNQU5ELE1BTU87QUFDTG9ELFdBQUthLFFBQUwsQ0FBYyxFQUFFL0QsVUFBVSxLQUFaLEVBQWQ7QUFDRDtBQUNELEtBVkQ7QUFXQTtBQUNEOzs7MkJBQ1E7QUFDUixPQUFJZ0UsY0FBYztBQUNqQkMsYUFBUyxjQURRO0FBRWpCQyxtQkFBZSxRQUZFO0FBR2pCdkIsV0FBTyxLQUFLRCxLQUFMLENBQVdDLEtBSEQ7QUFJakJ3QixZQUFRLFNBSlM7QUFLakJDLGtCQUFjO0FBTEcsSUFBbEI7QUFPQSxPQUFJQyxXQUFXLG8ra0JBQWY7QUFDQSxVQUNDO0FBQ0MsV0FBUUwsV0FEVDtBQUVDLFNBQU1LLFFBRlA7QUFHQyxTQUFJLHNCQUhMO0FBSUMsYUFBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUpYLEtBREQ7QUFRQTs7Ozs7O2tCQXZFbUIvQixhOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUJnQyxXOzs7QUFDcEIsc0JBQVkvQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPLE1BQUtGLEtBQUwsQ0FBV0UsS0FBWCxJQUFvQixNQURmO0FBRVo4QixXQUFRO0FBRkksR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FDb0I7QUFDcEIsT0FBSTdCLFNBQVNOLFNBQVNPLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWI7QUFDQSxPQUFJQyxTQUFTUixTQUFTUyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUQsVUFBT0UsR0FBUCxHQUFhLDBDQUFiO0FBQ0FKLFVBQU9LLFdBQVAsQ0FBbUJILE1BQW5CO0FBQ0E7OztzQ0FDbUI7QUFDbkIsT0FBSUksT0FBTyxJQUFYO0FBQ0EsT0FBSXdCLFdBQVdDLFlBQVksWUFBTTtBQUNoQyxRQUFHckMsU0FBU3NDLFVBQVQsS0FBd0IsVUFBM0IsRUFBdUM7QUFDdENDLG1CQUFjSCxRQUFkO0FBQ0FJLGNBQVM1QixJQUFUO0FBQ0E7QUFDRCxJQUxjLEVBS1osR0FMWSxDQUFmO0FBTUEsWUFBUzRCLFFBQVQsQ0FBa0I1QixJQUFsQixFQUF3QjtBQUN2QjZCLFNBQUtDLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQVc7QUFDN0IsU0FBSUMsV0FBV0YsS0FBS0csS0FBTCxDQUFXN0IsSUFBWCxDQUFnQjtBQUM5QjhCLGlCQUFXakMsS0FBS1QsS0FBTCxDQUFXYztBQURRLE1BQWhCLENBQWY7QUFHQTBCLGNBQVNsRixJQUFULENBQWMsWUFBTTtBQUNuQixVQUFJcUYsT0FBT0gsU0FBU0ksV0FBVCxDQUFxQkMsR0FBckIsRUFBWDtBQUNBLFVBQUlDLFVBQVVILEtBQUtJLGVBQUwsRUFBZDtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNLLE1BZkQ7QUFnQkEsS0FwQkQ7QUFxQkE7QUFDRDs7O2dDQUNhO0FBQUE7O0FBQ2IsT0FBSSxDQUFDLEtBQUs5QyxLQUFMLENBQVcrQixNQUFoQixFQUF3QjtBQUN2QixRQUFJUSxXQUFXRixLQUFLRyxLQUFMLENBQVdPLGVBQVgsRUFBZjtBQUNBUixhQUFTUyxNQUFULEdBQWtCM0YsSUFBbEIsQ0FBdUIsWUFBTTtBQUM1QixTQUFJcUYsT0FBT0gsU0FBU0ksV0FBVCxDQUFxQkMsR0FBckIsRUFBWDtBQUNBLFNBQUlGLEtBQUtPLFVBQUwsRUFBSixFQUF1QjtBQUN0QixVQUFJbEIsU0FBUyxFQUFiO0FBQ0EsVUFBSWMsVUFBVUgsS0FBS0ksZUFBTCxFQUFkO0FBQ0FmLGFBQU92RSxFQUFQLEdBQVlxRixRQUFRSyxLQUFSLEVBQVo7QUFDQW5CLGFBQU9wRSxJQUFQLEdBQWNrRixRQUFRTSxPQUFSLEVBQWQ7QUFDQXBCLGFBQU9xQixTQUFQLEdBQW1CUCxRQUFRUSxZQUFSLEVBQW5CO0FBQ0F0QixhQUFPdUIsUUFBUCxHQUFrQlQsUUFBUVUsYUFBUixFQUFsQjtBQUNBeEIsYUFBT25FLFFBQVAsR0FBa0JpRixRQUFRVyxXQUFSLEVBQWxCO0FBQ0F6QixhQUFPMEIsS0FBUCxHQUFlWixRQUFRYSxRQUFSLEVBQWY7QUFDQTNCLGFBQU8zRSxLQUFQLEdBQWVzRixLQUFLaUIsZUFBTCxHQUF1QkMsUUFBdEM7QUFDQSxhQUFLN0QsS0FBTCxDQUFXOEQsTUFBWCxDQUFrQjlCLE1BQWxCO0FBQ0EsYUFBS1YsUUFBTCxDQUFjLEVBQUVVLGNBQUYsRUFBZDtBQUNBLE1BWkQsTUFZTztBQUNOLGFBQUtoQyxLQUFMLENBQVc4RCxNQUFYLENBQWtCLEtBQWxCO0FBQ0E7QUFDRCxLQWpCRDtBQWtCQSxJQXBCRCxNQW9CTztBQUNOLFNBQUs5RCxLQUFMLENBQVc4RCxNQUFYLENBQWtCLEtBQUs3RCxLQUFMLENBQVcrQixNQUE3QjtBQUNBO0FBQ0Q7OzsyQkFDUTtBQUNSLE9BQUlULGNBQWM7QUFDakJDLGFBQVMsY0FEUTtBQUVqQkMsbUJBQWUsUUFGRTtBQUdqQnZCLFdBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUhEO0FBSWpCd0IsWUFBUTtBQUpTLElBQWxCO0FBTUEsT0FBSXFDLFNBQVMsbzhVQUFiO0FBQ0EsVUFDQyx1Q0FBSyxPQUFPeEMsV0FBWixFQUF5QixLQUFNd0MsTUFBL0IsRUFBd0MsS0FBSSxvQkFBNUMsRUFBaUUsU0FBVSxLQUFLbEMsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBM0UsR0FERDtBQUdBOzs7Ozs7a0JBbEZtQkMsVzs7Ozs7Ozs7Ozs7OztRQ0ZMaUMsWSxHQUFBQSxZO1FBZ0JBQyxXLEdBQUFBLFc7UUFJQUMsVyxHQUFBQSxXO1FBY0FDLFMsR0FBQUEsUztBQWxDVCxTQUFTSCxZQUFULENBQXNCSSxLQUF0QixFQUE2QjtBQUNuQ0EsU0FBUUMsU0FBU0QsS0FBVCxDQUFSO0FBQ0EsU0FBUUEsS0FBUjtBQUNDLE9BQUssQ0FBTDtBQUNDLFVBQU8sUUFBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sUUFBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sUUFBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sT0FBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sT0FBUDtBQVZGO0FBWUE7O0FBRU0sU0FBU0gsV0FBVCxDQUFxQkcsS0FBckIsRUFBNEI7QUFDbEMsUUFBT0MsU0FBU0QsS0FBVCxNQUFvQixDQUFwQixHQUF3QixHQUF4QixHQUE4QixHQUFyQztBQUNBOztBQUVNLFNBQVNGLFdBQVQsQ0FBcUJFLEtBQXJCLEVBQTRCO0FBQ2xDQSxTQUFRQyxTQUFTRCxLQUFULENBQVI7QUFDQSxTQUFRQSxLQUFSO0FBQ0MsT0FBSyxDQUFMO0FBQ0MsVUFBTyxNQUFQO0FBQ0QsT0FBSyxDQUFMO0FBQ0MsVUFBTyxRQUFQO0FBQ0QsT0FBSyxDQUFMO0FBQ0MsVUFBTyxPQUFQO0FBQ0QsT0FBSyxDQUFMO0FBQ0MsVUFBTyxRQUFQO0FBUkY7QUFVQTs7QUFFTSxTQUFTRCxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUNoQ0EsU0FBUUMsU0FBU0QsS0FBVCxDQUFSO0FBQ0EsU0FBUUEsS0FBUjtBQUNDLE9BQUssQ0FBTDtBQUNDLFVBQU8sS0FBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sS0FBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sTUFBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sTUFBUDtBQUNELE9BQUssQ0FBTDtBQUNDLFVBQU8sT0FBUDtBQVZGO0FBWUEsQzs7Ozs7Ozs7Ozs7Ozs7UUMxQ2VFLGUsR0FBQUEsZTtRQVNBQyxlLEdBQUFBLGU7UUFhQUMsWSxHQUFBQSxZOztBQTVCaEI7O0FBQ0E7Ozs7OztBQUNPLElBQU1DLGdEQUFvQix1QkFBMUI7QUFDQSxJQUFNQyxnREFBb0IsdUJBQTFCO0FBQ0EsSUFBTUMsOENBQW1CLHNCQUF6Qjs7QUFFQSxTQUFTTCxlQUFULENBQXlCL0gsSUFBekIsRUFBK0I2SCxLQUEvQixFQUFzQztBQUM1QyxRQUFPO0FBQ043SCxRQUFNa0ksaUJBREE7QUFFTm5JLFFBQU07QUFDTEMsYUFESyxFQUNDNkg7QUFERDtBQUZBLEVBQVA7QUFNQTs7QUFFTSxTQUFTRyxlQUFULENBQXlCakksSUFBekIsRUFBK0I7QUFDckMsUUFBTztBQUNOQyxRQUFNbUksaUJBREE7QUFFTnBJO0FBRk0sRUFBUDtBQUlBOztBQUVELFNBQVNzSSxjQUFULEdBQTBCO0FBQ3pCLFFBQU87QUFDTnJJLFFBQU1vSTtBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTSCxZQUFULENBQ05LLE9BRE0sRUFDR0MsU0FESCxFQUNjQyxPQURkLEVBQ3VCQyxTQUR2QixFQUNrQ0MsU0FEbEMsRUFDNkNDLE1BRDdDLEVBQ3FEQyxTQURyRCxFQUVMO0FBQ0QsUUFBTyxVQUFVdkksUUFBVixFQUFvQjtBQUMxQixNQUFNdUMsV0FBVyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFdBQVNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0J3RixPQUF4QjtBQUNBMUYsV0FBU0UsTUFBVCxDQUFnQixRQUFoQixFQUEwQnlGLFNBQTFCO0FBQ0EzRixXQUFTRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCMEYsT0FBeEI7QUFDQTVGLFdBQVNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIyRixTQUExQjtBQUNBN0YsV0FBU0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QjRGLFNBQXhCLEVBQW1DLE1BQW5DO0FBQ0E5RixXQUFTRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCNkYsTUFBeEI7QUFDQS9GLFdBQVNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUI4RixTQUF6QjtBQUNBLFNBQU90SSxNQUFNLDJDQUFOLEVBQW1DO0FBQ3pDQyxXQUFRLE1BRGlDO0FBRXpDQyxTQUFNLE1BRm1DO0FBR3pDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhnQztBQU16Q3FDLGdCQUFhLEtBTjRCO0FBT3pDcEMsU0FBTWlDO0FBUG1DLEdBQW5DLEVBU0w3QixJQVRLLENBU0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPLElBQVA7QUFDQTtBQUNELCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWRLLEVBZUx4QixJQWZLLENBZUEsWUFBTTtBQUNYVixZQUFTZ0ksZ0JBQVQ7QUFDQSxHQWpCSyxDQUFQO0FBa0JBLEVBM0JEO0FBNkJBLEM7Ozs7Ozs7Ozs7Ozs7O1FDaENlUSxZLEdBQUFBLFk7UUFlQUMsZ0IsR0FBQUEsZ0I7UUFjQUMsYyxHQUFBQSxjO1FBMkJBQyxpQixHQUFBQSxpQjtRQTRCQUMsZ0IsR0FBQUEsZ0I7UUFZQUMsa0IsR0FBQUEsa0I7UUEwQkFDLGEsR0FBQUEsYTtRQU1BQyxlLEdBQUFBLGU7UUFlQUMsYyxHQUFBQSxjO1FBcUJBQyxrQixHQUFBQSxrQjtRQTJCQUMsbUIsR0FBQUEsbUI7UUFZQUMsa0IsR0FBQUEsa0I7UUEyQkFDLGEsR0FBQUEsYTtRQU1BQyxjLEdBQUFBLGM7UUFNQUMsa0IsR0FBQUEsa0I7O0FBOVFoQjs7QUFLQTs7Ozs7O0FBRU8sSUFBTUMsNENBQWtCLHNCQUF4QjtBQUNBLElBQU1DLGtEQUFxQix5QkFBM0I7QUFDQSxJQUFNQyw4Q0FBbUIsdUJBQXpCO0FBQ0EsSUFBTUMsa0RBQXFCLHlCQUEzQjtBQUNBLElBQU1DLHNEQUF1QiwyQkFBN0I7QUFDQSxJQUFNQyw0Q0FBa0Isc0JBQXhCO0FBQ0EsSUFBTUMsZ0RBQW9CLHdCQUExQjtBQUNBLElBQU1DLGtEQUFxQix5QkFBM0I7QUFDQSxJQUFNQyxnREFBb0Isd0JBQTFCO0FBQ0EsSUFBTUMsd0RBQXdCLDRCQUE5QjtBQUNBLElBQU1DLHNEQUF1QiwyQkFBN0I7QUFDQSxJQUFNQyw0Q0FBa0Isc0JBQXhCO0FBQ0EsSUFBTUMsOENBQW1CLHVCQUF6Qjs7QUFFUCxTQUFTQyxhQUFULENBQXVCMUssSUFBdkIsRUFBNkI7QUFDNUIsUUFBTztBQUNOQyxRQUFNNEosZUFEQTtBQUVON0o7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzhJLFlBQVQsQ0FBc0I2QixLQUF0QixFQUE2Qi9CLE1BQTdCLEVBQXFDO0FBQzNDLFFBQU8sVUFBVXRJLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSw4Q0FBOEIsT0FBOUIsR0FBd0NvSyxLQUF4QyxHQUFnRCxRQUFoRCxHQUEyRC9CLE1BQWpFLEVBQ0w1SCxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQU5LLEVBT0x4QixJQVBLLENBT0EsZ0JBQVE7QUFDYlYsWUFBU29LLGNBQWN4SixJQUFkLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVhEO0FBWUE7O0FBRU0sU0FBUzZILGdCQUFULENBQTBCL0ksSUFBMUIsRUFBZ0M7QUFDdEMsUUFBTztBQUNOQyxRQUFNNkosa0JBREE7QUFFTjlKO0FBRk0sRUFBUDtBQUlBOztBQUVELFNBQVM0SyxjQUFULENBQXdCNUssSUFBeEIsRUFBOEI7QUFDN0IsUUFBTztBQUNOQyxRQUFNOEosZ0JBREE7QUFFTi9KO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNnSixjQUFULENBQXdCSixNQUF4QixFQUFnQ0MsU0FBaEMsRUFBMkM4QixLQUEzQyxFQUFrRHBDLE9BQWxELEVBQTJEO0FBQ2pFLFFBQU8sVUFBVWpJLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSw2Q0FBTixFQUFxQztBQUMzQ0MsV0FBUSxNQURtQztBQUUzQ0MsU0FBTSxNQUZxQztBQUczQ0MsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIa0M7QUFNM0NDLFNBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQixhQUFTK0gsU0FEVztBQUVwQixZQUFRRCxNQUZZO0FBR3BCLFdBQU8rQixLQUhhO0FBSXBCLFlBQVFwQztBQUpZLElBQWY7QUFOcUMsR0FBckMsRUFhTHZILElBYkssQ0FhQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7QUFDTCwrQkFBYVQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FsQkssRUFtQkx4QixJQW5CSyxDQW1CQSxZQUFNO0FBQ1hWLFlBQVNzSyxlQUFlckMsT0FBZixDQUFUO0FBQ0EsR0FyQkssQ0FBUDtBQXNCQSxFQXZCRDtBQXdCQTs7QUFFTSxTQUFTVSxpQkFBVCxDQUEyQkwsTUFBM0IsRUFBbUNDLFNBQW5DLEVBQThDOEIsS0FBOUMsRUFBcUQvSCxJQUFyRCxFQUEyRDtBQUNqRSxRQUFPLFVBQVV0QyxRQUFWLEVBQW9CO0FBQzFCLE1BQU11SyxXQUFXLElBQUkvSCxRQUFKLEVBQWpCO0FBQ0ErSCxXQUFTOUgsTUFBVCxDQUFnQixNQUFoQixFQUF3QkgsSUFBeEIsRUFBOEIrSCxRQUFRLE1BQXRDO0FBQ0FFLFdBQVM5SCxNQUFULENBQWdCLE1BQWhCLEVBQXdCNkYsTUFBeEI7QUFDQWlDLFdBQVM5SCxNQUFULENBQWdCLE9BQWhCLEVBQXlCOEYsU0FBekI7QUFDQWdDLFdBQVM5SCxNQUFULENBQWdCLEtBQWhCLEVBQXVCNEgsS0FBdkI7QUFDQSxTQUFPcEssTUFBTSxnREFBTixFQUF3QztBQUM5Q0MsV0FBUSxNQURzQztBQUU5Q0MsU0FBTSxNQUZ3QztBQUc5Q0MsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIcUM7QUFNOUNxQyxnQkFBYSxLQU5pQztBQU85Q3BDLFNBQU1pSztBQVB3QyxHQUF4QyxFQVNMN0osSUFUSyxDQVNBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDaEIsV0FBTyxJQUFQO0FBQ0E7QUFDRCwrQkFBYVQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FkSyxFQWVMeEIsSUFmSyxDQWVBLFlBQU07QUFDWFYsWUFBU3lJLGlCQUFpQiw4QkFBakIsQ0FBVDtBQUNBLEdBakJLLENBQVA7QUFrQkEsRUF4QkQ7QUF5QkE7O0FBRU0sU0FBU0csZ0JBQVQsR0FBNEI7QUFDbEMsUUFBTztBQUNOakosUUFBTStKO0FBREEsRUFBUDtBQUdBOztBQUVELFNBQVNjLGtCQUFULEdBQThCO0FBQzdCLFFBQU87QUFDTjdLLFFBQU1nSztBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTZCxrQkFBVCxDQUE0QlAsTUFBNUIsRUFBb0NDLFNBQXBDLEVBQStDOEIsS0FBL0MsRUFBc0Q7QUFDNUQsUUFBTyxVQUFVckssUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLGlEQUFOLEVBQXlDO0FBQy9DQyxXQUFRLE1BRHVDO0FBRS9DQyxTQUFNLE1BRnlDO0FBRy9DQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhzQztBQU0vQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGFBQVMrSCxTQURXO0FBRXBCLFlBQVFELE1BRlk7QUFHcEIsV0FBTytCO0FBSGEsSUFBZjtBQU55QyxHQUF6QyxFQVlMM0osSUFaSyxDQVlBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWpCSyxFQWtCTHhCLElBbEJLLENBa0JBLFlBQU07QUFDWFYsWUFBU3dLLG9CQUFUO0FBQ0EsR0FwQkssQ0FBUDtBQXFCQSxFQXRCRDtBQXVCQTs7QUFFTSxTQUFTMUIsYUFBVCxHQUF5QjtBQUMvQixRQUFPO0FBQ05uSixRQUFNaUs7QUFEQSxFQUFQO0FBR0E7O0FBRU0sU0FBU2IsZUFBVCxHQUEyQjtBQUNqQyxRQUFPO0FBQ05wSixRQUFNa0s7QUFEQSxFQUFQO0FBR0E7O0FBRUQsU0FBU1ksZ0JBQVQsQ0FBMEJDLFFBQTFCLEVBQW9DQyxVQUFwQyxFQUFnRDtBQUMvQyxRQUFPO0FBQ05oTCxRQUFNbUssa0JBREE7QUFFTnBLLFFBQU07QUFDTGdMLHFCQURLLEVBQ0tDO0FBREw7QUFGQSxFQUFQO0FBTUE7O0FBRU0sU0FBUzNCLGNBQVQsQ0FBd0IwQixRQUF4QixFQUFrQztBQUN4QyxRQUFPLFVBQVUxSyxRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sZ0RBQWdDLE1BQWhDLEdBQXlDeUssUUFBL0MsRUFDTGhLLElBREssQ0FDQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ2hCLFdBQU9ULFNBQVNDLElBQVQsRUFBUDtBQUNBO0FBQ0QsK0JBQWFELFNBQVN1QixNQUF0QjtBQUNBLEdBTkssRUFPTHhCLElBUEssQ0FPQSxnQkFBUTtBQUNiVixZQUFTeUssaUJBQWlCQyxRQUFqQixFQUEyQjlKLElBQTNCLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVhEO0FBWUE7O0FBRUQsU0FBU2dLLGVBQVQsR0FBMkI7QUFDMUIsUUFBTztBQUNOakwsUUFBTW9LO0FBREEsRUFBUDtBQUdBOztBQUVNLFNBQVNkLGtCQUFULENBQTRCWCxNQUE1QixFQUFvQ0MsU0FBcEMsRUFBK0M4QixLQUEvQyxFQUFzREssUUFBdEQsRUFBZ0U7QUFDdEUsUUFBTyxVQUFVMUssUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLGlEQUFOLEVBQXlDO0FBQy9DQyxXQUFRLE1BRHVDO0FBRS9DQyxTQUFNLE1BRnlDO0FBRy9DQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhzQztBQU0vQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGFBQVMrSCxTQURXO0FBRXBCLFlBQVFELE1BRlk7QUFHcEIsV0FBTytCLEtBSGE7QUFJcEIsV0FBT0s7QUFKYSxJQUFmO0FBTnlDLEdBQXpDLEVBYUxoSyxJQWJLLENBYUMsb0JBQVk7QUFDbEIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNYLFdBQU8sSUFBUDtBQUNEO0FBQ0wsK0JBQWFULFNBQVN1QixNQUF0QjtBQUNBLEdBbEJLLEVBbUJMeEIsSUFuQkssQ0FtQkEsWUFBTTtBQUNYVixZQUFTNEssaUJBQVQ7QUFDQSxHQXJCSyxDQUFQO0FBc0JBLEVBdkJEO0FBd0JBOztBQUVNLFNBQVMxQixtQkFBVCxHQUErQjtBQUNyQyxRQUFPO0FBQ052SixRQUFNcUs7QUFEQSxFQUFQO0FBR0E7O0FBRUQsU0FBU2Esa0JBQVQsR0FBOEI7QUFDN0IsUUFBTztBQUNObEwsUUFBTXNLO0FBREEsRUFBUDtBQUdBOztBQUVNLFNBQVNkLGtCQUFULENBQTRCYixNQUE1QixFQUFvQ0MsU0FBcEMsRUFBK0M4QixLQUEvQyxFQUFzRFMsVUFBdEQsRUFBa0U7QUFDeEUsUUFBTyxVQUFVOUssUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLGlEQUFOLEVBQXlDO0FBQy9DQyxXQUFRLE1BRHVDO0FBRS9DQyxTQUFNLE1BRnlDO0FBRy9DQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhzQztBQU0vQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGFBQVMrSCxTQURXO0FBRXBCLFlBQVFELE1BRlk7QUFHcEIsV0FBTytCLEtBSGE7QUFJcEIsZ0JBQVlTO0FBSlEsSUFBZjtBQU55QyxHQUF6QyxFQWFMcEssSUFiSyxDQWFDLG9CQUFZO0FBQ2xCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWxCSyxFQW1CTHhCLElBbkJLLENBbUJBLFlBQU07QUFDWFYsWUFBUzZLLG9CQUFUO0FBQ0EsR0FyQkssQ0FBUDtBQXNCQSxFQXZCRDtBQXdCQTs7QUFFTSxTQUFTekIsYUFBVCxHQUF5QjtBQUMvQixRQUFPO0FBQ056SixRQUFNdUs7QUFEQSxFQUFQO0FBR0E7O0FBRU0sU0FBU2IsY0FBVCxHQUEwQjtBQUNoQyxRQUFPO0FBQ04xSixRQUFNd0s7QUFEQSxFQUFQO0FBR0E7O0FBRU0sU0FBU2Isa0JBQVQsQ0FBNEJoQixNQUE1QixFQUFvQ0MsU0FBcEMsRUFBK0M4QixLQUEvQyxFQUFzRDtBQUM1RCxRQUFPLFVBQVVySyxRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0saURBQU4sRUFBeUM7QUFDL0NDLFdBQVEsTUFEdUM7QUFFL0NDLFNBQU0sTUFGeUM7QUFHL0NDLFlBQVM7QUFDUkMsWUFBUTtBQURBLElBSHNDO0FBTS9DQyxTQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDcEIsYUFBUytILFNBRFc7QUFFcEIsWUFBUUQsTUFGWTtBQUdwQixXQUFPK0I7QUFIYSxJQUFmO0FBTnlDLEdBQXpDLEVBWUwzSixJQVpLLENBWUMsb0JBQVk7QUFDbEIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNYLFdBQU8sSUFBUDtBQUNEO0FBQ0wsK0JBQWFULFNBQVN1QixNQUF0QjtBQUNBLEdBakJLLEVBa0JMeEIsSUFsQkssQ0FrQkEsWUFBTTtBQUNYVixZQUFTcUosZ0JBQVQ7QUFDQSxHQXBCSyxDQUFQO0FBcUJBLEVBdEJEO0FBdUJBLEM7Ozs7Ozs7Ozs7Ozs7O1FDcFJlMEIsa0IsR0FBQUEsa0I7UUFnQkFDLGlCLEdBQUFBLGlCO1FBZ0JBQyxtQixHQUFBQSxtQjs7QUFsRGhCOztBQUdBOzs7Ozs7QUFFTyxJQUFNQyxvREFBc0IsNkJBQTVCO0FBQ0EsSUFBTUMsd0RBQXdCLCtCQUE5QjtBQUNBLElBQU1DLDBEQUF5QixnQ0FBL0I7O0FBRVAsU0FBU0Msb0JBQVQsQ0FBOEJDLFdBQTlCLEVBQTJDM0wsSUFBM0MsRUFBaUQ0TCxNQUFqRCxFQUF5RDVGLElBQXpELEVBQStEO0FBQzlELFFBQU87QUFDTmhHLFFBQU15TCxzQkFEQTtBQUVOMUwsUUFBTTtBQUNMNEwsMkJBREssRUFDUTNMLFVBRFIsRUFDYzRMLGNBRGQsRUFDc0I1RjtBQUR0QjtBQUZBLEVBQVA7QUFNQTs7QUFFTSxTQUFTb0Ysa0JBQVQsQ0FBNEJwTCxJQUE1QixFQUFrQzRMLE1BQWxDLEVBQTBDNUYsSUFBMUMsRUFBZ0Q7QUFDdEQsUUFBTyxVQUFVM0YsUUFBVixFQUFvQjtBQUMxQixNQUFNd0wsWUFBWSxXQUFXN0YsSUFBWCxHQUFrQixVQUFsQixHQUErQjRGLE1BQS9CLEdBQXdDLFFBQXhDLEdBQW1ENUwsSUFBckU7QUFDQSxTQUFPTSxNQUFNLG9EQUFvQ3VMLFNBQTFDLEVBQ0w5SyxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQU5LLEVBT0x4QixJQVBLLENBT0EsZ0JBQVE7QUFDYlYsWUFBU3FMLHFCQUFxQnpLLElBQXJCLEVBQTJCakIsSUFBM0IsRUFBaUM0TCxNQUFqQyxFQUF5QzVGLElBQXpDLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVpEO0FBYUE7O0FBRU0sU0FBU3FGLGlCQUFULENBQTJCckwsSUFBM0IsRUFBaUM0TCxNQUFqQyxFQUF5Q0UsT0FBekMsRUFBa0Q7QUFDeEQsS0FBSUEsWUFBWSxDQUFDLENBQWpCLEVBQW9CO0FBQ25CLFNBQU87QUFDTjlMLFNBQU11TCxtQkFEQTtBQUVOeEwsU0FBTTtBQUZBLEdBQVA7QUFJQSxFQUxELE1BS08sSUFBSTZMLFdBQVcsSUFBZixFQUFxQjtBQUMzQixTQUFPO0FBQ041TCxTQUFNdUwsbUJBREE7QUFFTnhMLFNBQU0rTDtBQUZBLEdBQVA7QUFJQSxFQUxNLE1BS0E7QUFDTixTQUFPVixtQkFBbUJVLE9BQW5CLEVBQTRCRixNQUE1QixFQUFvQyxDQUFwQyxDQUFQO0FBQ0E7QUFDRDs7QUFFTSxTQUFTTixtQkFBVCxDQUE2Qk0sTUFBN0IsRUFBcUM1TCxJQUFyQyxFQUEyQytMLFNBQTNDLEVBQXNEO0FBQzVELEtBQUlBLGNBQWMsQ0FBQyxDQUFuQixFQUFzQjtBQUNyQixTQUFPO0FBQ04vTCxTQUFNd0wscUJBREE7QUFFTnpMLFNBQU07QUFGQSxHQUFQO0FBSUEsRUFMRCxNQUtPLElBQUlDLFNBQVMsSUFBYixFQUFtQjtBQUN6QixTQUFPO0FBQ05BLFNBQU13TCxxQkFEQTtBQUVOekwsU0FBTWdNO0FBRkEsR0FBUDtBQUlBLEVBTE0sTUFLQTtBQUNOLFNBQU9YLG1CQUFtQnBMLElBQW5CLEVBQXlCK0wsU0FBekIsRUFBb0MsQ0FBcEMsQ0FBUDtBQUNBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7UUNwRGVDLGUsR0FBQUEsZTs7QUFaaEI7O0FBQ0E7Ozs7OztBQUVPLElBQU1DLG9EQUFzQiwwQkFBNUI7O0FBRVAsU0FBU0MsaUJBQVQsQ0FBMkJuTSxJQUEzQixFQUFpQztBQUNoQyxRQUFPO0FBQ05DLFFBQU1pTSxtQkFEQTtBQUVObE07QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU2lNLGVBQVQsQ0FBeUJoRyxJQUF6QixFQUErQjtBQUNyQyxRQUFPLFVBQVUzRixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0saURBQWlDLFFBQWpDLEdBQTRDMEYsSUFBbEQsRUFDTGpGLElBREssQ0FDQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ2hCLFdBQU9ULFNBQVNDLElBQVQsRUFBUDtBQUNBO0FBQ0QsK0JBQWFELFNBQVN1QixNQUF0QjtBQUNBLEdBTkssRUFPTHhCLElBUEssQ0FPQSxnQkFBUTtBQUNiVixZQUFTNkwsa0JBQWtCakwsSUFBbEIsQ0FBVDtBQUNBLEdBVEssQ0FBUDtBQVVBLEVBWEQ7QUFZQSxDOzs7Ozs7Ozs7Ozs7OztRQ0pla0wsYyxHQUFBQSxjO1FBZUFDLGdCLEdBQUFBLGdCO1FBWUFDLGdCLEdBQUFBLGdCO1FBb0NBQyxnQixHQUFBQSxnQjtRQWtDQUMsa0IsR0FBQUEsa0I7UUFnQkFDLGdCLEdBQUFBLGdCO1FBbUJBQyxtQixHQUFBQSxtQjs7QUF6SmhCOztBQUlBOzs7Ozs7QUFFTyxJQUFNQyxnREFBb0IsMEJBQTFCO0FBQ0EsSUFBTUMsa0RBQXFCLDJCQUEzQjtBQUNBLElBQU1DLGtEQUFxQiwyQkFBM0I7QUFDQSxJQUFNQyxrREFBcUIsMkJBQTNCO0FBQ0EsSUFBTUMsMERBQXlCLCtCQUEvQjtBQUNBLElBQU1DLGtEQUFxQiwyQkFBM0I7QUFDQSxJQUFNQyxrREFBcUIsMkJBQTNCOztBQUVQLFNBQVNDLGVBQVQsQ0FBeUJsTixJQUF6QixFQUErQjtBQUM5QixRQUFPO0FBQ05DLFFBQU0wTSxpQkFEQTtBQUVOM007QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU29NLGNBQVQsQ0FBd0JqTCxFQUF4QixFQUE0QjtBQUNsQyxRQUFPLFVBQVViLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSxnREFBZ0MsTUFBaEMsR0FBeUNZLEVBQS9DLEVBQ0xILElBREssQ0FDQyxvQkFBWTtBQUNsQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ2hCLFdBQU9ULFNBQVNDLElBQVQsRUFBUDtBQUNBO0FBQ0QsK0JBQWFELFNBQVN1QixNQUF0QjtBQUNBLEdBTkssRUFPTHhCLElBUEssQ0FPQSxVQUFDRSxJQUFELEVBQVU7QUFDZlosWUFBUzRNLGdCQUFnQmhNLElBQWhCLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVhEO0FBWUE7O0FBRU0sU0FBU21MLGdCQUFULEdBQTRCO0FBQ2xDLFFBQU87QUFDTnBNLFFBQU0yTTtBQURBLEVBQVA7QUFHQTs7QUFFRCxTQUFTTyxlQUFULEdBQTJCO0FBQzFCLFFBQU87QUFDTmxOLFFBQU00TTtBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTUCxnQkFBVCxDQUEwQjFELE1BQTFCLEVBQWtDQyxTQUFsQyxFQUE2Q3VFLFFBQTdDLEVBQXVEekMsS0FBdkQsRUFBOEQ7QUFDcEUsUUFBTyxVQUFVckssUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLCtDQUFOLEVBQXVDO0FBQzdDQyxXQUFRLE1BRHFDO0FBRTdDQyxTQUFNLE1BRnVDO0FBRzdDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhvQztBQU03Q0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLFlBQVE4SCxNQURZO0FBRXBCLGFBQVNDLFNBRlc7QUFHcEIsY0FBVXVFLFFBSFU7QUFJcEIsV0FBT3pDO0FBSmEsSUFBZjtBQU51QyxHQUF2QyxFQWFMM0osSUFiSyxDQWFBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWxCSyxFQW1CTHhCLElBbkJLLENBbUJBLFlBQU07QUFDWFYsWUFBUzZNLGlCQUFUO0FBQ0EsR0FyQkssQ0FBUDtBQXNCQSxFQXZCRDtBQXdCQTs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0MxRSxNQUFsQyxFQUEwQztBQUN6QyxRQUFPO0FBQ04zSSxRQUFNNk0sa0JBREE7QUFFTjlNLFFBQU07QUFDTHNOLGlCQURLLEVBQ0cxRTtBQURIO0FBRkEsRUFBUDtBQU1BOztBQUVNLFNBQVMyRCxnQkFBVCxDQUEwQjNELE1BQTFCLEVBQWtDQyxTQUFsQyxFQUE2Q3VFLFFBQTdDLEVBQXVERSxNQUF2RCxFQUErRDtBQUNyRSxRQUFPLFVBQVVoTixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sK0NBQU4sRUFBdUM7QUFDN0NDLFdBQVEsTUFEcUM7QUFFN0NDLFNBQU0sTUFGdUM7QUFHN0NDLFlBQVM7QUFDUkMsWUFBUTtBQURBLElBSG9DO0FBTTdDQyxTQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDcEIsWUFBUThILE1BRFk7QUFFcEIsYUFBU0MsU0FGVztBQUdwQixjQUFVdUUsUUFIVTtBQUlwQixjQUFVRTtBQUpVLElBQWY7QUFOdUMsR0FBdkMsRUFhTHRNLElBYkssQ0FhQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7QUFDTCwrQkFBYVQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FsQkssRUFtQkx4QixJQW5CSyxDQW1CQSxZQUFNO0FBQ1hWLFlBQVMrTSxpQkFBaUJDLE1BQWpCLEVBQXlCMUUsTUFBekIsQ0FBVDtBQUNBLEdBckJLLENBQVA7QUFzQkEsRUF2QkQ7QUF3QkE7O0FBRUQsU0FBUzJFLG9CQUFULENBQThCdk4sSUFBOUIsRUFBb0M7QUFDbkMsUUFBTztBQUNOQyxRQUFNOE0sc0JBREE7QUFFTi9NO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVN3TSxrQkFBVCxDQUE0QlksUUFBNUIsRUFBc0NJLFdBQXRDLEVBQW1EQyxZQUFuRCxFQUFpRTtBQUN2RSxRQUFPLFVBQVVuTixRQUFWLEVBQW9CO0FBQzFCLE1BQU13TCxZQUFZLFNBQVNzQixRQUFULEdBQW9CLFFBQXBCLEdBQStCSSxXQUEvQixHQUE2QyxPQUE3QyxHQUF1REMsWUFBekU7QUFDQSxTQUFPbE4sTUFBTSxvREFBb0N1TCxTQUExQyxFQUNMOUssSUFESyxDQUNBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDaEIsV0FBT1QsU0FBU0MsSUFBVCxFQUFQO0FBQ0E7QUFDRCwrQkFBYUQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FOSyxFQU9MeEIsSUFQSyxDQU9BLGdCQUFRO0FBQ2JWLFlBQVNpTixxQkFBcUJyTSxJQUFyQixDQUFUO0FBQ0EsR0FUSyxDQUFQO0FBVUEsRUFaRDtBQWFBOztBQUVNLFNBQVN1TCxnQkFBVCxHQUE0QjtBQUNsQyxRQUFPO0FBQ054TSxRQUFNK007QUFEQSxFQUFQO0FBR0E7O0FBRUQsU0FBU1UsZ0JBQVQsQ0FBMEI5RSxNQUExQixFQUFrQytFLE9BQWxDLEVBQTJDO0FBQzFDLEtBQU0zTixPQUFPLENBQ1oyTixPQURZLEVBRVosb0JBQVksWUFBWixHQUEyQi9FLE1BQTNCLEdBQW9DLE1BRnhCLEVBR1osV0FBV0EsTUFIQyxFQUlaLElBQUlnRixJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBSlksQ0FBYjtBQU1BLFFBQU87QUFDTjdOLFFBQU1nTixrQkFEQTtBQUVOak47QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzBNLG1CQUFULENBQTZCOUQsTUFBN0IsRUFBcUNDLFNBQXJDLEVBQWdEdUUsUUFBaEQsRUFBMERPLE9BQTFELEVBQW1FO0FBQ3pFLFFBQU8sVUFBVXJOLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSxrREFBTixFQUEwQztBQUNoREMsV0FBUSxNQUR3QztBQUVoREMsU0FBTSxNQUYwQztBQUdoREMsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIdUM7QUFNaERDLFNBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQixZQUFROEgsTUFEWTtBQUVwQixhQUFTQyxTQUZXO0FBR3BCLGNBQVV1RSxRQUhVO0FBSXBCLGVBQVdPO0FBSlMsSUFBZjtBQU4wQyxHQUExQyxFQWFMM00sSUFiSyxDQWFBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWxCSyxFQW1CTHhCLElBbkJLLENBbUJBLFlBQU07QUFDWFYsWUFBU29OLGlCQUFpQjlFLE1BQWpCLEVBQXlCK0UsT0FBekIsQ0FBVDtBQUNBLEdBckJLLENBQVA7QUFzQkEsRUF2QkQ7QUF3QkEsQzs7Ozs7Ozs7Ozs7Ozs7UUMvSmVJLFcsR0FBQUEsVztRQWVBQyxtQixHQUFBQSxtQjtRQWVBQyxjLEdBQUFBLGM7UUFvQ0FDLGUsR0FBQUEsZTtRQXVDQUMsYyxHQUFBQSxjOztBQTVIaEI7O0FBSUE7Ozs7OztBQUVPLElBQU1DLDBDQUFpQixvQkFBdkI7QUFDQSxJQUFNQyx3REFBd0IsMkJBQTlCO0FBQ0EsSUFBTUMsOENBQW1CLHNCQUF6QjtBQUNBLElBQU1DLDBDQUFpQixvQkFBdkI7QUFDQSxJQUFNQyxrREFBcUIsd0JBQTNCOztBQUVQLFNBQVNDLFlBQVQsQ0FBc0J6TyxJQUF0QixFQUE0QjtBQUMzQixRQUFPO0FBQ05DLFFBQU1tTyxjQURBO0FBRU5wTztBQUZNLEVBQVA7QUFJQTs7QUFFTSxTQUFTK04sV0FBVCxDQUFxQjVNLEVBQXJCLEVBQXlCO0FBQy9CLFFBQU8sVUFBVWIsUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLDZDQUE2QixNQUE3QixHQUFzQ1ksRUFBNUMsRUFDTEgsSUFESyxDQUNBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDaEIsV0FBT1QsU0FBU0MsSUFBVCxFQUFQO0FBQ0E7QUFDRCwrQkFBYUQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FOSyxFQU9MeEIsSUFQSyxDQU9BLGdCQUFRO0FBQ2JWLFlBQVNtTyxhQUFhdk4sSUFBYixDQUFUO0FBQ0EsR0FUSyxDQUFQO0FBVUEsRUFYRDtBQVlBOztBQUVNLFNBQVM4TSxtQkFBVCxHQUErQjtBQUNyQyxRQUFPO0FBQ04vTixRQUFNb087QUFEQSxFQUFQO0FBR0E7O0FBRUQsU0FBU0ssY0FBVCxDQUF3QnBCLE1BQXhCLEVBQWdDMUUsTUFBaEMsRUFBd0M7QUFDdkMsUUFBTztBQUNOM0ksUUFBTXFPLGdCQURBO0FBRU50TyxRQUFNO0FBQ0xzTixpQkFESyxFQUNHMUU7QUFESDtBQUZBLEVBQVA7QUFNQTs7QUFFTSxTQUFTcUYsY0FBVCxDQUF3QnJGLE1BQXhCLEVBQWdDQyxTQUFoQyxFQUEyQzhCLEtBQTNDLEVBQWtEMkMsTUFBbEQsRUFBMEQ7QUFDaEUsUUFBTyxVQUFVaE4sUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLDZDQUFOLEVBQXFDO0FBQzNDQyxXQUFRLE1BRG1DO0FBRTNDQyxTQUFNLE1BRnFDO0FBRzNDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhrQztBQU0zQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLFlBQVE4SCxNQURZO0FBRXBCLGFBQVNDLFNBRlc7QUFHcEIsV0FBTzhCLEtBSGE7QUFJcEIsY0FBVTJDO0FBSlUsSUFBZjtBQU5xQyxHQUFyQyxFQWFMdE0sSUFiSyxDQWFBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWxCSyxFQW1CTHhCLElBbkJLLENBbUJBLFlBQU07QUFDWFYsWUFBU29PLGVBQWVwQixNQUFmLEVBQXVCMUUsTUFBdkIsQ0FBVDtBQUNBLEdBckJLLENBQVA7QUFzQkEsRUF2QkQ7QUF3QkE7O0FBRUQsU0FBUytGLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCakUsS0FBNUIsRUFBbUNrRSxPQUFuQyxFQUE0QztBQUMzQyxRQUFPO0FBQ041TyxRQUFNc08sY0FEQTtBQUVOdk8sUUFBTTtBQUNMNE8sYUFESyxFQUNDakUsWUFERCxFQUNRa0U7QUFEUjtBQUZBLEVBQVA7QUFNQTs7QUFFTSxTQUFTWCxlQUFULENBQXlCdEYsTUFBekIsRUFBaUNDLFNBQWpDLEVBQTRDOEIsS0FBNUMsRUFBbURtRSxLQUFuRCxFQUEwREQsT0FBMUQsRUFBbUU7QUFDekUsUUFBTyxVQUFVdk8sUUFBVixFQUFvQjtBQUMxQixNQUFJTCxPQUFPNk8sTUFBTTdPLElBQWpCO0FBQ0FBLFNBQU9BLEtBQUs4TyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0E5TyxTQUFPLE1BQU1BLElBQWI7QUFDQSxNQUFNNEMsV0FBVyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFdBQVNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IrTCxLQUF4QixFQUErQjdPLElBQS9CO0FBQ0E0QyxXQUFTRSxNQUFULENBQWdCLFNBQWhCLEVBQTJCOEwsT0FBM0I7QUFDQWhNLFdBQVNFLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI0SCxLQUF2QjtBQUNBOUgsV0FBU0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QjZGLE1BQXhCO0FBQ0EvRixXQUFTRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCOEYsU0FBekI7QUFDQSxTQUFPdEksTUFBTSw4Q0FBTixFQUFzQztBQUM1Q0MsV0FBUSxNQURvQztBQUU1Q0MsU0FBTSxNQUZzQztBQUc1Q0MsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIbUM7QUFNNUNxQyxnQkFBYSxLQU4rQjtBQU81Q3BDLFNBQU1pQztBQVBzQyxHQUF0QyxFQVNMN0IsSUFUSyxDQVNBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDaEIsV0FBT1QsU0FBU0MsSUFBVCxFQUFQO0FBQ0E7QUFDRCwrQkFBYUQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FkSyxFQWVMeEIsSUFmSyxDQWVBLGtCQUFVO0FBQ2ZWLFlBQVNxTyxhQUFhakosTUFBYixFQUFxQmlGLEtBQXJCLEVBQTRCa0UsT0FBNUIsQ0FBVDtBQUNBLEdBakJLLENBQVA7QUFrQkEsRUE1QkQ7QUE2QkE7O0FBRUQsU0FBU0csZ0JBQVQsQ0FBMEJoUCxJQUExQixFQUFnQztBQUMvQixRQUFPO0FBQ05DLFFBQU11TyxrQkFEQTtBQUVOeE87QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU21PLGNBQVQsQ0FBd0J4RCxLQUF4QixFQUErQjFFLElBQS9CLEVBQXFDZ0osR0FBckMsRUFBMEM7QUFDaEQsUUFBTyxVQUFVM08sUUFBVixFQUFvQjtBQUMxQixNQUFNNE8sU0FBUyxVQUFVRCxHQUFWLEdBQWdCLFFBQWhCLEdBQTJCaEosSUFBM0IsR0FBa0MsT0FBbEMsR0FBNEMwRSxLQUEzRDtBQUNBLFNBQU9wSyxNQUFNLGdEQUFnQzJPLE1BQXRDLEVBQ0xsTyxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQU5LLEVBT0x4QixJQVBLLENBT0EsZ0JBQVE7QUFDYlYsWUFBUzBPLGlCQUFpQjlOLElBQWpCLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVpEO0FBYUEsQzs7Ozs7Ozs7Ozs7Ozs7UUMzSGVpTyxlLEdBQUFBLGU7UUFxQkFDLGlCLEdBQUFBLGlCOztBQXBDaEI7O0FBR0E7Ozs7OztBQUVPLElBQU1DLGtEQUFxQiw0QkFBM0I7QUFDQSxJQUFNQyxvREFBc0IsNkJBQTVCOztBQUVQLFNBQVNDLGdCQUFULENBQTBCdlAsSUFBMUIsRUFBZ0M7QUFDL0IsUUFBTztBQUNOQyxRQUFNb1Asa0JBREE7QUFFTnJQO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNtUCxlQUFULENBQXlCaE8sRUFBekIsRUFBNkI7QUFDbkMsUUFBTyxVQUFVYixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0saURBQWlDLE1BQWpDLEdBQTBDWSxFQUFoRCxFQUNMSCxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELEdBTEssRUFNTEYsSUFOSyxDQU1BLGdCQUFRO0FBQ2JWLFlBQVNpUCxpQkFBaUJyTyxJQUFqQixDQUFUO0FBQ0EsR0FSSyxDQUFQO0FBU0EsRUFWRDtBQVdBOztBQUVELFNBQVNzTyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDakMsUUFBTztBQUNOeFAsUUFBTXFQLG1CQURBO0FBRU50UCxRQUFNeVA7QUFGQSxFQUFQO0FBSUE7O0FBRU0sU0FBU0wsaUJBQVQsQ0FBMkJ6RSxLQUEzQixFQUFrQzhFLEtBQWxDLEVBQXlDN0csTUFBekMsRUFBaURDLFNBQWpELEVBQTREeUUsTUFBNUQsRUFBb0U7QUFDMUUsUUFBTyxVQUFVaE4sUUFBVixFQUFvQjtBQUMxQixNQUFNRCxTQUFTaU4sV0FBVyxDQUFYLDhEQUFmO0FBQ0EsU0FBTy9NLE1BQU0sb0JBQVlGLE1BQWxCLEVBQTBCO0FBQ2hDRyxXQUFRLE1BRHdCO0FBRWhDQyxTQUFNLE1BRjBCO0FBR2hDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUh1QjtBQU1oQ0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLFlBQVE4SCxNQURZO0FBRXBCLGFBQVNDLFNBRlc7QUFHcEIsV0FBTzhCO0FBSGEsSUFBZjtBQU4wQixHQUExQixFQVlMM0osSUFaSyxDQVlBLG9CQUFZO0FBQ2pCLE9BQUlDLFNBQVNTLEVBQWIsRUFBaUI7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNMLCtCQUFhVCxTQUFTdUIsTUFBdEI7QUFDQSxHQWpCSyxFQWtCTHhCLElBbEJLLENBa0JBLFlBQU07QUFDWFYsWUFBU2tQLGtCQUFrQkMsS0FBbEIsQ0FBVDtBQUNBLEdBcEJLLENBQVA7QUFxQkEsRUF2QkQ7QUF3QkEsQzs7Ozs7Ozs7Ozs7Ozs7UUM1Q2VDLFksR0FBQUEsWTtRQXNCQUMsZSxHQUFBQSxlOztBQXZDaEI7O0FBR0E7Ozs7OztBQUVPLElBQU1DLDRDQUFrQixzQkFBeEI7QUFDQSxJQUFNQyxvREFBc0IsMEJBQTVCOztBQUVQLFNBQVNDLGFBQVQsQ0FBdUJsQixJQUF2QixFQUE2QmhHLE1BQTdCLEVBQXFDO0FBQ3BDLFFBQU87QUFDTjNJLFFBQU0yUCxlQURBO0FBRU41UCxRQUFNO0FBQ0w0TyxhQURLLEVBQ0NoRztBQUREO0FBRkEsRUFBUDtBQU1BOztBQUVNLFNBQVM4RyxZQUFULENBQXNCdk8sRUFBdEIsRUFBMEI7QUFDaEMsUUFBTyxVQUFVYixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sOENBQThCLE1BQTlCLEdBQXVDWSxFQUE3QyxFQUNMSCxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQU5LLEVBT0x4QixJQVBLLENBT0EsZ0JBQVE7QUFDYlYsWUFBU3dQLGNBQWM1TyxJQUFkLEVBQW9CNkcsU0FBUzVHLEVBQVQsQ0FBcEIsQ0FBVDtBQUNBLEdBVEssQ0FBUDtBQVVBLEVBWEQ7QUFZQTs7QUFFRCxTQUFTNE8saUJBQVQsQ0FBMkIvUCxJQUEzQixFQUFpQztBQUNoQyxRQUFPO0FBQ05DLFFBQU00UCxtQkFEQTtBQUVON1A7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzJQLGVBQVQsQ0FBeUJLLE1BQXpCLEVBQWlDL0osSUFBakMsRUFBdUM7QUFDN0MsUUFBTyxVQUFVM0YsUUFBVixFQUFvQjtBQUMxQixTQUFPQyxNQUFNLDhDQUFOLEVBQXNDO0FBQzVDQyxXQUFRLE1BRG9DO0FBRTVDQyxTQUFNLE1BRnNDO0FBRzVDQyxZQUFTO0FBQ1JDLFlBQVE7QUFEQSxJQUhtQztBQU01Q0MsU0FBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCLGNBQVVrUCxNQURVO0FBRXBCLFlBQVEvSjtBQUZZLElBQWY7QUFOc0MsR0FBdEMsRUFXTGpGLElBWEssQ0FXQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ2hCLFdBQU9ULFNBQVNDLElBQVQsRUFBUDtBQUNBO0FBQ0QsK0JBQWFELFNBQVN1QixNQUF0QjtBQUNBLEdBaEJLLEVBaUJMeEIsSUFqQkssQ0FpQkEsZ0JBQVE7QUFDYlYsWUFBU3lQLGtCQUFrQjdPLElBQWxCLENBQVQ7QUFDQSxHQW5CSyxDQUFQO0FBb0JBLEVBckJEO0FBc0JBLEM7Ozs7Ozs7Ozs7Ozs7O1FDNUNlK08sYSxHQUFBQSxhO1FBd0JBQyxjLEdBQUFBLGM7UUFvQ0FDLGdCLEdBQUFBLGdCO1FBMkJBQyxjLEdBQUFBLGM7O0FBekdoQjs7QUFJQTs7Ozs7O0FBRU8sSUFBTUMsOENBQW1CLHdCQUF6QjtBQUNBLElBQU1DLDhDQUFtQix3QkFBekI7QUFDQSxJQUFNQyxzREFBdUIsNEJBQTdCO0FBQ0EsSUFBTUMsOENBQW1CLHdCQUF6Qjs7QUFFUCxTQUFTQyxjQUFULENBQXdCelEsSUFBeEIsRUFBOEI7QUFDN0IsUUFBTztBQUNOQyxRQUFNb1EsZ0JBREE7QUFFTnJRO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNpUSxhQUFULENBQXVCOU8sRUFBdkIsRUFBMkI7QUFDakMsUUFBTyxVQUFVYixRQUFWLEVBQW9CO0FBQzFCLFNBQU9DLE1BQU0sK0NBQStCLE1BQS9CLEdBQXdDWSxFQUE5QyxFQUNMSCxJQURLLENBQ0Esb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQU5LLEVBT0x4QixJQVBLLENBT0EsZ0JBQVE7QUFDYlYsWUFBU21RLGVBQWV2UCxJQUFmLENBQVQ7QUFDQSxHQVRLLENBQVA7QUFVQSxFQVhEO0FBWUE7O0FBRUQsU0FBU3dQLGNBQVQsQ0FBd0JwRCxNQUF4QixFQUFnQzNDLEtBQWhDLEVBQXVDO0FBQ3RDLFFBQU87QUFDTjFLLFFBQU1xUSxnQkFEQTtBQUVOdFEsUUFBTTtBQUNMc04saUJBREssRUFDRzNDO0FBREg7QUFGQSxFQUFQO0FBTUE7O0FBRU0sU0FBU3VGLGNBQVQsQ0FBd0J0SCxNQUF4QixFQUFnQ0MsU0FBaEMsRUFBMkM4QixLQUEzQyxFQUFrRDJDLE1BQWxELEVBQTBEO0FBQ2hFLFFBQU8sVUFBVWhOLFFBQVYsRUFBb0I7QUFDMUIsTUFBTUQsU0FBU2lOLFdBQVcsQ0FBWCx3REFBZjtBQUNBLFNBQU8vTSxNQUFNLG9CQUFZRixNQUFsQixFQUEwQjtBQUNoQ0csV0FBUSxNQUR3QjtBQUVoQ0MsU0FBTSxNQUYwQjtBQUdoQ0MsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIdUI7QUFNaENDLFNBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQixZQUFROEgsTUFEWTtBQUVwQixhQUFTQyxTQUZXO0FBR3BCLFdBQU84QjtBQUhhLElBQWY7QUFOMEIsR0FBMUIsRUFZTDNKLElBWkssQ0FZQSxvQkFBWTtBQUNqQixPQUFJQyxTQUFTUyxFQUFiLEVBQWlCO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7QUFDTCwrQkFBYVQsU0FBU3VCLE1BQXRCO0FBQ0EsR0FqQkssRUFrQkx4QixJQWxCSyxDQWtCQSxZQUFNO0FBQ1hWLFlBQVNvUSxlQUFlcEQsTUFBZixFQUF1QjNDLEtBQXZCLENBQVQ7QUFDQSxHQXBCSyxDQUFQO0FBcUJBLEVBdkJEO0FBd0JBOztBQUVELFNBQVNnRyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUMzSyxJQUFyQyxFQUEyQzRLLFFBQTNDLEVBQXFEO0FBQ3BELFFBQU87QUFDTjVRLFFBQU1zUSxvQkFEQTtBQUVOdlEsUUFBTTtBQUNMNFEsbUJBREssRUFDSTNLLFVBREosRUFDVTRLO0FBRFY7QUFGQSxFQUFQO0FBTUE7O0FBRU0sU0FBU1YsZ0JBQVQsQ0FBMEJXLEtBQTFCLEVBQWlDN0ssSUFBakMsRUFBdUM0SyxRQUF2QyxFQUFpRGpJLE1BQWpELEVBQXlEO0FBQy9ELFFBQU8sVUFBVXRJLFFBQVYsRUFBb0I7QUFDMUIsU0FBT0MsTUFBTSwrQ0FBTixFQUF1QztBQUM3Q0MsV0FBUSxNQURxQztBQUU3Q0MsU0FBTSxNQUZ1QztBQUc3Q0MsWUFBUztBQUNSQyxZQUFRO0FBREEsSUFIb0M7QUFNN0NDLFNBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQixZQUFRZ1EsS0FEWTtBQUVwQixZQUFRN0ssSUFGWTtBQUdwQixhQUFTNEssUUFIVztBQUlwQixZQUFRakk7QUFKWSxJQUFmO0FBTnVDLEdBQXZDLEVBYUw1SCxJQWJLLENBYUEsb0JBQVk7QUFDakIsT0FBSUMsU0FBU1MsRUFBYixFQUFpQjtBQUNoQixXQUFPVCxTQUFTQyxJQUFULEVBQVA7QUFDQTtBQUNELCtCQUFhRCxTQUFTdUIsTUFBdEI7QUFDQSxHQWxCSyxFQW1CTHhCLElBbkJLLENBbUJBLGdCQUFRO0FBQ2JWLFlBQVNxUSxtQkFBbUJ6UCxJQUFuQixFQUF5QitFLElBQXpCLEVBQStCNEssUUFBL0IsQ0FBVDtBQUNBLEdBckJLLENBQVA7QUFzQkEsRUF2QkQ7QUF3QkE7O0FBRU0sU0FBU1QsY0FBVCxHQUEwQjtBQUNoQyxRQUFPO0FBQ05uUSxRQUFNdVE7QUFEQSxFQUFQO0FBR0EsQzs7Ozs7Ozs7Ozs7OztrQkMzR3VCTyxhOztBQUZ4Qjs7QUFFZSxTQUFTQSxhQUFULENBQXVCL1EsSUFBdkIsRUFBNkI7QUFDM0MsUUFBT0EsS0FBS2dSLEdBQUwsQ0FBUyxVQUFTQyxPQUFULEVBQWtCO0FBQ2pDLFNBQU8sQ0FDTkEsUUFBUUMsZUFERixFQUVOLG9CQUFZLFlBQVosR0FBMkJELFFBQVFFLE9BQW5DLEdBQTZDLE1BRnZDLEVBR04sV0FBV0YsUUFBUUUsT0FIYixFQUlOLElBQUl2RCxJQUFKLENBQVNxRCxRQUFRRyxZQUFqQixFQUErQnZELFdBQS9CLEdBQTZDQyxTQUE3QyxDQUF1RCxDQUF2RCxFQUEwRCxFQUExRCxDQUpNLENBQVA7QUFNQSxFQVBNLENBQVA7QUFRQSxDOzs7Ozs7Ozs7Ozs7OztBQ1hEOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDOUJ1RCwyQkFEOEI7QUFFOUJDLHFCQUY4QjtBQUc5QkMseUJBSDhCO0FBSTlCQyxtQkFKOEI7QUFLOUJuTCxxQkFMOEI7QUFNOUJvTCwyQkFOOEI7QUFPOUJDLHVCQVA4QjtBQVE5QkMsMkJBUjhCO0FBUzlCQywyQkFUOEI7QUFVOUIzQyxtQkFWOEI7QUFXOUI0QztBQVg4QixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ0RTQyxPOztBQVp4Qjs7QUFHQTs7QUFFQSxJQUFNQyxZQUFZO0FBQ2pCNVEsS0FBSSxJQURhO0FBRWpCRyxPQUFNLElBRlc7QUFHakJQLFFBQU8sSUFIVTtBQUlqQmlSLGlCQUFnQjtBQUpDLENBQWxCOztBQU9lLFNBQVNGLE9BQVQsR0FBNEM7QUFBQSxLQUEzQm5PLEtBQTJCLHVFQUFuQm9PLFNBQW1CO0FBQUEsS0FBUnpFLE1BQVE7O0FBQzFELFNBQVFBLE9BQU9yTixJQUFmO0FBQ0M7QUFDQyxPQUFJcU4sT0FBT3ROLElBQVAsQ0FBWSxDQUFaLE1BQW1CLElBQXZCLEVBQTZCO0FBQzVCLHdCQUNJMkQsS0FESjtBQUVDeEMsU0FBSTRHLFNBQVN1RixPQUFPdE4sSUFBUCxDQUFZLENBQVosQ0FBVCxDQUZMO0FBR0NzQixXQUFNZ00sT0FBT3ROLElBQVAsQ0FBWSxDQUFaLENBSFA7QUFJQ2UsWUFBT3VNLE9BQU90TixJQUFQLENBQVksQ0FBWjtBQUpSO0FBTUE7QUFDRjtBQUNDLHVCQUNJMkQsS0FESjtBQUVDeEMsUUFBSSxJQUZMO0FBR0NHLFVBQU0sSUFIUDtBQUlDUCxXQUFPO0FBSlI7QUFNRDtBQUNDLHVCQUNJNEMsS0FESjtBQUVDckMsVUFBTWdNLE9BQU90TjtBQUZkO0FBSUQ7QUFDQyx1QkFDSTJELEtBREo7QUFFQ3FPLG9CQUFnQjtBQUZqQjtBQUlEO0FBQ0MsdUJBQ0lyTyxLQURKO0FBRUNxTyxvQkFBZ0I7QUFGakI7QUFJRDtBQUNDLFVBQU9yTyxLQUFQO0FBakNGO0FBbUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDN0J1Qm1PLE87O0FBbkJ4Qjs7QUFJQSxJQUFNQyxZQUFZO0FBQ2pCO0FBQ0FFLGVBQWMsSUFGRztBQUdqQjtBQUNBQyxlQUFjLElBSkc7QUFLakI7QUFDQUMsZUFBYyxJQU5HO0FBT2pCO0FBQ0FDLGFBQVksSUFSSztBQVNqQjtBQUNBQyxlQUFjLElBVkc7QUFXakJDLGVBQWM7QUFYRyxDQUFsQjs7QUFlZSxTQUFTUixPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsT0FBTXNTLHdCQUFnQjVPLEtBQWhCLENBQU47QUFDQTRPLFlBQVMsV0FBV2pGLE9BQU90TixJQUFQLENBQVlDLElBQWhDLElBQXdDcU4sT0FBT3ROLElBQVAsQ0FBWThILEtBQXBEO0FBQ0EsVUFBT3lLLFFBQVA7QUFDRDtBQUNDLHVCQUNJNU8sS0FESjtBQUVDc08sa0JBQWMzRSxPQUFPdE47QUFGdEI7QUFJRDtBQUNDLHVCQUNJMkQsS0FESjtBQUVDMk8sa0JBQWM7QUFGZjtBQUlEO0FBQ0MsVUFBTzNPLEtBQVA7QUFoQkY7QUFrQkEsQzs7Ozs7Ozs7Ozs7Ozs7OztrQkNSdUJtTyxPOztBQTlCeEI7O0FBT0EsSUFBTUMsWUFBWTtBQUNqQjtBQUNBUyxVQUFTLEVBRlE7QUFHakI7QUFDQWpLLFVBQVMsRUFKUTtBQUtqQjtBQUNBMEosZUFBYyxJQU5HO0FBT2pCO0FBQ0FRLFVBQVMsS0FSUTtBQVNqQjtBQUNBQyxVQUFTLEtBVlE7QUFXakI7QUFDQUMsU0FBUSxFQVpTO0FBYWpCO0FBQ0ExSCxhQUFZLElBZEs7QUFlakI7QUFDQTJILGFBQVksS0FoQks7QUFpQmpCO0FBQ0FDLGVBQWMsS0FsQkc7QUFtQmpCQyxhQUFZLEtBbkJLO0FBb0JqQkMsZUFBYztBQXBCRyxDQUFsQjs7QUF1QmUsU0FBU2pCLE9BQVQsR0FBNEM7QUFBQSxLQUEzQm5PLEtBQTJCLHVFQUFuQm9PLFNBQW1CO0FBQUEsS0FBUnpFLE1BQVE7O0FBQzFELFNBQVFBLE9BQU9yTixJQUFmO0FBQ0M7QUFDQyx1QkFDSTBELEtBREo7QUFFQzZPLGFBQVNsRixPQUFPdE4sSUFGakI7QUFHQ3VJLGFBQVMrRSxPQUFPdE4sSUFBUCxDQUFZZ1QsUUFIdEI7QUFJQ0YsZ0JBQVk7QUFKYjtBQU1EO0FBQ0MsdUJBQ0luUCxLQURKO0FBRUNzTyxrQkFBYzNFLE9BQU90TjtBQUZ0QjtBQUlEO0FBQ0MsdUJBQ0kyRCxLQURKO0FBRUM0RSxhQUFTK0UsT0FBT3ROLElBRmpCO0FBR0NpUyxrQkFBYztBQUhmO0FBS0Q7QUFDQyx1QkFDSXRPLEtBREo7QUFFQ2lQLGdCQUFZLENBQUNqUCxNQUFNaVA7QUFGcEI7QUFJRDtBQUNDLHVCQUNJalAsS0FESjtBQUVDaVAsZ0JBQVksS0FGYjtBQUdDWCxrQkFBYyxnQ0FIZjtBQUlDTywwQkFBYzdPLE1BQU02TyxPQUFwQixJQUE2QlMsYUFBYSxJQUExQztBQUpEO0FBTUQ7QUFDQyx1QkFDSXRQLEtBREo7QUFFQytPLGFBQVMsQ0FBQy9PLE1BQU0rTyxPQUZqQjtBQUdDQyxZQUFRLEVBSFQ7QUFJQzFILGdCQUFZO0FBSmI7QUFNRDtBQUNDLHVCQUNJdEgsS0FESjtBQUVDZ1AsWUFBUSxFQUZUO0FBR0MxSCxnQkFBWTtBQUhiO0FBS0Q7QUFDQyx1QkFDSXRILEtBREo7QUFFQ2dQLFlBQVFyRixPQUFPdE4sSUFBUCxDQUFZZ0wsUUFGckI7QUFHQ0MsZ0JBQVlxQyxPQUFPdE4sSUFBUCxDQUFZaUw7QUFIekI7QUFLRDtBQUNDLHVCQUNJdEgsS0FESjtBQUVDK08sYUFBUyxLQUZWO0FBR0NDLFlBQVEsRUFIVDtBQUlDMUgsZ0JBQVksSUFKYjtBQUtDZ0gsa0JBQWM7QUFMZjtBQU9EO0FBQ0MsdUJBQ0l0TyxLQURKO0FBRUNrUCxrQkFBYyxDQUFDbFAsTUFBTWtQO0FBRnRCO0FBSUQ7QUFDQyx1QkFDSWxQLEtBREo7QUFFQ2tQLGtCQUFjLEtBRmY7QUFHQ0wsMEJBQ0k3TyxNQUFNNk8sT0FEVjtBQUVDVSxlQUFVdlAsTUFBTTZPLE9BQU4sQ0FBY1MsV0FGekI7QUFHQ0Esa0JBQWF0UCxNQUFNNk8sT0FBTixDQUFjVTtBQUg1QixNQUhEO0FBUUNqQixrQkFBYztBQVJmO0FBVUQ7QUFDQyx1QkFDSXRPLEtBREo7QUFFQzhPLGFBQVMsQ0FBQzlPLE1BQU04TztBQUZqQjtBQUlEO0FBQ0MsdUJBQ0k5TyxLQURKO0FBRUNvUCxrQkFBYztBQUZmO0FBSUQ7QUFDQyxVQUFPcFAsS0FBUDtBQXJGRjtBQXVGQSxDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ3pHdUJtTyxPOztBQWJ4Qjs7QUFHQTs7Ozs7O0FBRUEsSUFBTUMsWUFBWTtBQUNqQjlSLE9BQU0sSUFEVztBQUVqQjRMLFNBQVEsSUFGUztBQUdqQkQsY0FBYSxFQUhJO0FBSWpCM0YsT0FBTSxDQUpXO0FBS2pCa04sU0FBUTtBQUxTLENBQWxCOztBQVFlLFNBQVNyQixPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsdUJBQ0kwRCxLQURKO0FBRUMxRCxVQUFNcU4sT0FBT3ROLElBRmQ7QUFHQzRMLGlCQUFhLEVBSGQ7QUFJQzNGLFVBQU07QUFKUDtBQU1EO0FBQ0MsdUJBQ0l0QyxLQURKO0FBRUNrSSxZQUFReUIsT0FBT3ROLElBRmhCO0FBR0M0TCxpQkFBYSxFQUhkO0FBSUMzRixVQUFNO0FBSlA7QUFNRDtBQUNDLE9BQU1tTixhQUFhOUYsT0FBT3ROLElBQVAsQ0FBWWlHLElBQVosS0FBcUIsQ0FBckIsR0FDbEIsNEJBQWFxSCxPQUFPdE4sSUFBUCxDQUFZNEwsV0FBekIsQ0FEa0IsR0FFbEJqSSxNQUFNaUksV0FBTixDQUFrQnlILE1BQWxCLENBQXlCLDRCQUFhL0YsT0FBT3ROLElBQVAsQ0FBWTRMLFdBQXpCLENBQXpCLENBRkQ7QUFHQSx1QkFDSWpJLEtBREo7QUFFQ2lJLGlCQUFhd0gsVUFGZDtBQUdDblQsVUFBTXFOLE9BQU90TixJQUFQLENBQVlDLElBSG5CO0FBSUM0TCxZQUFReUIsT0FBT3ROLElBQVAsQ0FBWTZMLE1BSnJCO0FBS0M1RixVQUFNcUgsT0FBT3ROLElBQVAsQ0FBWWlHLElBQVosR0FBbUIsQ0FMMUI7QUFNQ2tOLFlBQVE3RixPQUFPdE4sSUFBUCxDQUFZNEwsV0FBWixDQUF3QjBILE1BQXhCLEtBQW1DO0FBTjVDO0FBUUQ7QUFDQyxVQUFPM1AsS0FBUDtBQTVCRjtBQThCQSxDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ2hDdUJtTyxPOztBQVp4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsWUFBWTtBQUNqQjtBQUNBL1IsT0FBTSxFQUZXO0FBR2pCO0FBQ0FpRyxPQUFNLENBSlc7QUFLakI7QUFDQWtOLFNBQVE7QUFOUyxDQUFsQjs7QUFTZSxTQUFTckIsT0FBVCxHQUE0QztBQUFBLEtBQTNCbk8sS0FBMkIsdUVBQW5Cb08sU0FBbUI7QUFBQSxLQUFSekUsTUFBUTs7QUFDMUQsU0FBUUEsT0FBT3JOLElBQWY7QUFDQztBQUNDLE9BQU1zVCxVQUFVLDRCQUFhakcsT0FBT3ROLElBQXBCLENBQWhCO0FBQ0EsdUJBQ0kyRCxLQURKO0FBRUNzQyxVQUFNdEMsTUFBTXNDLElBQU4sR0FBYSxDQUZwQjtBQUdDakcsVUFBTTJELE1BQU0zRCxJQUFOLENBQVdxVCxNQUFYLENBQWtCRSxPQUFsQixDQUhQO0FBSUNKLFlBQVFJLFFBQVFELE1BQVIsS0FBbUI7QUFKNUI7QUFNRDtBQUNDLFVBQU8zUCxLQUFQO0FBVkY7QUFZQSxDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ051Qm1PLE87O0FBbkJ4Qjs7QUFJQTs7Ozs7Ozs7QUFFQSxJQUFNQyxZQUFZO0FBQ2pCeUIsYUFBWSxFQURLO0FBRWpCQyxhQUFZLEVBRks7QUFHakJDLFdBQVUsRUFITztBQUlqQkMsY0FBYSxFQUpJO0FBS2pCQyxjQUFhLEtBTEk7QUFNakJDLGdCQUFlLEtBTkU7QUFPakJwRyxlQUFjLENBUEc7QUFRakJELGNBQWEsQ0FSSTtBQVNqQnNHLGVBQWMsSUFURztBQVVqQnhCLGVBQWM7QUFWRyxDQUFsQjs7QUFhZSxTQUFTUixPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsT0FBTXlULFdBQVdwRyxPQUFPdE4sSUFBUCxDQUFZLENBQVosRUFBZWdSLEdBQWYsQ0FBbUIsVUFBUytDLElBQVQsRUFBZTtBQUNsRCxXQUFPaE0sU0FBU2dNLEtBQUs1QyxPQUFkLENBQVA7QUFDQSxJQUZnQixDQUFqQjtBQUdBLE9BQU13QyxjQUFjLDZCQUFjckcsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLENBQWQsQ0FBcEI7QUFDQSx1QkFDSTJELEtBREo7QUFFQzZQLGdCQUFZbEcsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLENBRmI7QUFHQ3lULGdCQUFZLENBQ1gxTCxTQUFTdUYsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLEVBQWVrVCxRQUF4QixLQUFxQyxJQUQxQixFQUVYbkwsU0FBU3VGLE9BQU90TixJQUFQLENBQVksQ0FBWixFQUFlaVQsV0FBeEIsS0FBd0MsSUFGN0IsQ0FIYjtBQU9DUyxzQkFQRDtBQVFDQyw0QkFSRDtBQVNDRSxtQkFBZXZHLE9BQU90TixJQUFQLENBQVksQ0FBWixFQUFlc1QsTUFBZixLQUEwQjtBQVQxQztBQVdEO0FBQ0MsdUJBQ0kzUCxLQURKO0FBRUNpUSxpQkFBYTtBQUZkO0FBSUQ7QUFDQyx1QkFDSWpRLEtBREo7QUFFQzJPLGtCQUFjO0FBRmY7QUFJRDtBQUNDLHVCQUNJM08sS0FESjtBQUVDK1AsY0FBVXBHLE9BQU90TixJQUFQLENBQVlzTixNQUFaLEtBQXVCLENBQXZCLGdDQUNMM0osTUFBTStQLFFBREQsSUFDV3BHLE9BQU90TixJQUFQLENBQVk0SSxNQUR2QixLQUVUakYsTUFBTStQLFFBQU4sQ0FBZU0sTUFBZixDQUFzQixVQUFTRCxJQUFULEVBQWU7QUFBRSxZQUFPQSxTQUFTekcsT0FBT3ROLElBQVAsQ0FBWTRJLE1BQTVCO0FBQW9DLEtBQTNFO0FBSkY7QUFNRDtBQUNDLE9BQU1xTCxjQUFjLDZCQUFjM0csT0FBT3ROLElBQXJCLENBQXBCO0FBQ0EsdUJBQ0kyRCxLQURKO0FBRUNnUSw4Q0FBaUJoUSxNQUFNZ1EsV0FBdkIsc0JBQXVDTSxXQUF2QyxFQUZEO0FBR0N6RyxpQkFBYTdKLE1BQU02SixXQUFOLEdBQW9CLENBSGxDO0FBSUNxRyxtQkFBZXZHLE9BQU90TixJQUFQLENBQVlzVCxNQUFaLEtBQXVCO0FBSnZDO0FBTUQ7QUFDQyx1QkFDSTNQLEtBREo7QUFFQ21RLGtCQUFjO0FBRmY7QUFJRDtBQUNDLHVCQUNJblEsS0FESjtBQUVDZ1Esa0JBQWNyRyxPQUFPdE4sSUFBckIsNEJBQThCMkQsTUFBTWdRLFdBQXBDLEVBRkQ7QUFHQ0csa0JBQWMsSUFIZjtBQUlDckcsa0JBQWM5SixNQUFNOEosWUFBTixHQUFxQjtBQUpwQztBQU1EO0FBQ0MsVUFBTzlKLEtBQVA7QUF2REY7QUF5REEsQzs7Ozs7Ozs7Ozs7Ozs7OztrQkM3Q3VCbU8sTzs7QUFoQ3hCOztBQUdBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1DLFlBQVk7QUFDakI7QUFDQW1DLFdBQVUsS0FGTztBQUdqQjtBQUNBMUIsVUFBUyxFQUpRO0FBS2pCO0FBQ0FpQixhQUFZLEVBTks7QUFPakI7QUFDQVUsYUFBWSxFQVJLO0FBU2pCO0FBQ0FDLGNBQWEsRUFWSTtBQVdqQjtBQUNBbk8sT0FBTSxDQVpXO0FBYWpCO0FBQ0FrTixTQUFRLEtBZFM7QUFlakI7QUFDQWxFLE1BQUssQ0FoQlk7QUFpQmpCO0FBQ0FvRixZQUFXLEVBbEJNO0FBbUJqQjtBQUNBQyxnQkFBZSxLQXBCRTtBQXFCakI7QUFDQUMsUUFBTztBQXRCVSxDQUFsQjs7QUF5QmUsU0FBU3pDLE9BQVQsR0FBNEM7QUFBQSxLQUEzQm5PLEtBQTJCLHVFQUFuQm9PLFNBQW1CO0FBQUEsS0FBUnpFLE1BQVE7O0FBQzFELFNBQVFBLE9BQU9yTixJQUFmO0FBQ0M7QUFDQ3FOLFVBQU90TixJQUFQLENBQVksQ0FBWixFQUFlLFVBQWYsSUFBNkIrSCxTQUFTdUYsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLEVBQWUsVUFBZixDQUFULENBQTdCO0FBQ0FzTixVQUFPdE4sSUFBUCxDQUFZLENBQVosRUFBZSxhQUFmLElBQWdDc04sT0FBT3ROLElBQVAsQ0FBWSxDQUFaLEVBQWUsYUFBZixNQUFrQyxJQUFsQyxHQUMvQixJQUQrQixHQUN4QitILFNBQVN1RixPQUFPdE4sSUFBUCxDQUFZLENBQVosRUFBZSxhQUFmLENBQVQsQ0FEUjtBQUVHLHVCQUNDMkQsS0FERDtBQUVGNk8sYUFBU2xGLE9BQU90TixJQUFQLENBQVksQ0FBWixDQUZQO0FBR0Z5VCxnQkFBWW5HLE9BQU90TixJQUFQLENBQVksQ0FBWixDQUhWO0FBSUZtVSxnQkFBWTdHLE9BQU90TixJQUFQLENBQVksQ0FBWixDQUpWO0FBS0ZtVCxZQUFRN0YsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLEVBQWVzVCxNQUFmLEtBQTBCLEVBTGhDO0FBTUZjLGlCQUFhLDRCQUFhOUcsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLENBQWIsQ0FOWDtBQU9GcVUsZUFBVy9HLE9BQU90TixJQUFQLENBQVksQ0FBWixFQUFlZ1IsR0FBZixDQUFtQixVQUFTVSxLQUFULEVBQWdCO0FBQzdDLFlBQU8zSixTQUFTMkosTUFBTVAsT0FBZixDQUFQO0FBQ0EsS0FGVTtBQVBUO0FBV0o7QUFDQyx1QkFDSXhOLEtBREo7QUFFQzJRLG1CQUFlO0FBRmhCO0FBSUQ7QUFDQyx1QkFDSTNRLEtBREo7QUFFQzBRLGVBQVcvRyxPQUFPdE4sSUFBUCxDQUFZc04sTUFBWixLQUF1QixDQUF2QixnQ0FDTjNKLE1BQU0wUSxTQURBLElBQ1cvRyxPQUFPdE4sSUFBUCxDQUFZNEksTUFEdkIsS0FFVmpGLE1BQU0wUSxTQUFOLENBQWdCTCxNQUFoQixDQUF1QixVQUFTdEMsS0FBVCxFQUFnQjtBQUFFLFlBQU9BLFVBQVVwRSxPQUFPdE4sSUFBUCxDQUFZNEksTUFBN0I7QUFBcUMsS0FBOUU7QUFKRjtBQU1EO0FBQ0MsT0FBTTRMLFlBQVksQ0FDakIsb0JBQVksV0FBWixHQUEwQmxILE9BQU90TixJQUFQLENBQVkySyxLQUF0QyxHQUE4QyxVQUE5QyxHQUEyRDJDLE9BQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLENBRDFDLEVBRWpCdEIsT0FBT3ROLElBQVAsQ0FBWTZPLE9BRkssRUFHakIsYUFBYXZCLE9BQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLENBSEksQ0FBbEI7QUFLQSxPQUFJdEIsT0FBT3ROLElBQVAsQ0FBWTRPLElBQVosQ0FBaUIwRSxNQUFqQixLQUE0QixDQUFoQyxFQUFtQztBQUNsQyxRQUFNbUIsVUFBVSw0QkFBYW5ILE9BQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLENBQWIsQ0FBaEI7QUFDQSxRQUFNOEYsMEJBQWlCL1EsTUFBTTZPLE9BQXZCLENBQU47QUFDQWtDLGVBQVdELE9BQVgsSUFBc0IxTSxTQUFTcEUsTUFBTTZPLE9BQU4sQ0FBY2lDLE9BQWQsQ0FBVCxJQUFtQyxDQUF6RDtBQUNBLHdCQUNJOVEsS0FESjtBQUVDeVEsbUJBQWNJLFNBQWQsNEJBQTRCN1EsTUFBTXlRLFdBQWxDLEVBRkQ7QUFHQ0csWUFBTzVRLE1BQU00USxLQUFOLEdBQWMsQ0FIdEI7QUFJQ3RGLFVBQUt0TCxNQUFNc0wsR0FBTixHQUFZLENBSmxCO0FBS0N1RCxjQUFTa0M7QUFMVjtBQU9BLElBWEQsTUFXTztBQUNOLHdCQUNJL1EsS0FESjtBQUVDeVEsbUJBQWNJLFNBQWQsNEJBQTRCN1EsTUFBTXlRLFdBQWxDLEVBRkQ7QUFHQ0csWUFBTzVRLE1BQU00USxLQUFOLEdBQWMsQ0FIdEI7QUFJQ3RGLFVBQUt0TCxNQUFNc0wsR0FBTixHQUFZO0FBSmxCO0FBTUE7QUFDRjtBQUNDLE9BQU1zRSxVQUFVLDRCQUFhakcsT0FBT3ROLElBQXBCLENBQWhCO0FBQ0EsdUJBQ0kyRCxLQURKO0FBRUN5USxpQkFBYXpRLE1BQU15USxXQUFOLENBQWtCZixNQUFsQixDQUF5QkUsT0FBekIsQ0FGZDtBQUdDdE4sVUFBTXRDLE1BQU1zQyxJQUFOLEdBQWEsQ0FIcEI7QUFJQ2tOLFlBQVFJLFFBQVFELE1BQVIsS0FBbUI7QUFKNUI7QUFNRDtBQUNDLFVBQU8zUCxLQUFQO0FBOURGO0FBZ0VBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDdEZ1Qm1PLE87O0FBWHhCOztBQUlBLElBQU1DLFlBQVk7QUFDakI7QUFDQTRDLGNBQWEsRUFGSTtBQUdqQjtBQUNBQyxhQUFZO0FBSkssQ0FBbEI7O0FBT2UsU0FBUzlDLE9BQVQsR0FBNEM7QUFBQSxLQUEzQm5PLEtBQTJCLHVFQUFuQm9PLFNBQW1CO0FBQUEsS0FBUnpFLE1BQVE7O0FBQzFELFNBQVFBLE9BQU9yTixJQUFmO0FBQ0M7QUFDQyx1QkFDSTBELEtBREo7QUFFQ2dSLGlCQUFhckgsT0FBT3ROO0FBRnJCO0FBSUQ7QUFDQyx1QkFDSTJELEtBREo7QUFFQ2dSLGlCQUFhaFIsTUFBTWdSLFdBQU4sQ0FBa0JYLE1BQWxCLENBQXlCLFVBQUNyQyxPQUFELEVBQVVsQyxLQUFWLEVBQW9CO0FBQ3hELFlBQU9BLFVBQVVuQyxPQUFPdE4sSUFBeEI7QUFDQSxLQUZXO0FBRmQ7QUFNRDtBQUNDLFVBQU8yRCxLQUFQO0FBZEY7QUFnQkEsQzs7Ozs7Ozs7Ozs7Ozs7OztrQkNkdUJtTyxPOztBQWR4Qjs7QUFLQSxJQUFNQyxZQUFZO0FBQ2pCO0FBQ0E4QyxXQUFVLEVBRk87QUFHakI7QUFDQTVDLGVBQWMsSUFKRztBQUtqQjtBQUNBNkMsWUFBVztBQU5NLENBQWxCOztBQVNlLFNBQVNoRCxPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsdUJBQ0kwRCxLQURKO0FBRUNrUixjQUFVdkgsT0FBT3ROLElBRmxCO0FBR0M4VSxlQUFXeEgsT0FBT3ROLElBQVAsQ0FBWStVO0FBSHhCO0FBS0Q7QUFDQyxPQUFJLENBQUN6SCxPQUFPdE4sSUFBWixFQUFrQjtBQUNqQnNOLFdBQU90TixJQUFQLEdBQWMsRUFBZDtBQUNBO0FBQ0QsdUJBQ0kyRCxLQURKO0FBRUNtUixlQUFXeEgsT0FBT3ROLElBRm5CO0FBR0NpUyxrQkFBYztBQUhmO0FBS0Q7QUFDQyx1QkFDSXRPLEtBREo7QUFFQ3NPLGtCQUFjO0FBRmY7QUFJRDtBQUNDLHVCQUNJdE8sS0FESjtBQUVDc08sa0JBQWM7QUFGZjtBQUlGO0FBQ0MsVUFBT3RPLEtBQVA7QUEzQkQ7QUE2QkEsQzs7Ozs7Ozs7Ozs7Ozs7OztrQkNyQnVCbU8sTzs7QUF2QnhCOztBQUdBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1DLFlBQVk7QUFDakI7QUFDQThDLFdBQVUsRUFGTztBQUdqQjtBQUNBRyxlQUFjLEVBSkc7QUFLakI7QUFDQUMsV0FBVSxFQU5PO0FBT2pCO0FBQ0F6QixhQUFZLEVBUks7QUFTakI7QUFDQXZOLE9BQU0sQ0FWVztBQVdqQjtBQUNBa04sU0FBUSxLQVpTO0FBYWpCO0FBQ0ErQixhQUFZO0FBZEssQ0FBbEI7O0FBaUJlLFNBQVNwRCxPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsT0FBSStVLGVBQWUsRUFBbkI7QUFDQTFILFVBQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLEVBQW9CdUcsT0FBcEIsQ0FBNEIsVUFBUzNELEdBQVQsRUFBYztBQUN6QyxRQUFJQSxJQUFJeUIsV0FBSixLQUFvQixJQUF4QixFQUE4QjtBQUM3QitCLGtCQUFhSSxJQUFiLENBQ0NyTixTQUFTeUosSUFBSXlCLFdBQWIsTUFBOEIzRixPQUFPdE4sSUFBUCxDQUFZNEksTUFBMUMsR0FDQ2IsU0FBU3lKLElBQUkwQixRQUFiLENBREQsR0FDMEJuTCxTQUFTeUosSUFBSXlCLFdBQWIsQ0FGM0I7QUFJQTtBQUNELElBUEQ7QUFRQTNGLFVBQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLEVBQW9CdUMsT0FBcEIsR0FBOEJwSixTQUFTdUYsT0FBT3ROLElBQVAsQ0FBWTRPLElBQVosQ0FBaUIsQ0FBakIsRUFBb0J1QyxPQUE3QixDQUE5QjtBQUNHLHVCQUNDeE4sS0FERDtBQUVGa1IsY0FBVXZILE9BQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLENBRlI7QUFHRnFHLGNBQVUzSCxPQUFPdE4sSUFBUCxDQUFZNE8sSUFBWixDQUFpQixDQUFqQixDQUhSO0FBSUZzRyxnQkFBWTVILE9BQU90TixJQUFQLENBQVk0TyxJQUFaLENBQWlCLENBQWpCLENBSlY7QUFLRjRFLGdCQUFZLDRCQUFhbEcsT0FBT3ROLElBQVAsQ0FBWTRPLElBQVosQ0FBaUIsQ0FBakIsQ0FBYixDQUxWO0FBTUZ1RSxZQUFRN0YsT0FBT3ROLElBQVAsQ0FBWTRPLElBQVosQ0FBaUIsQ0FBakIsRUFBb0IwRSxNQUFwQixLQUErQixFQU5yQztBQU9GMEIsK0NBQWtCLElBQUlLLEdBQUosQ0FBUUwsWUFBUixDQUFsQjtBQVBFO0FBU0o7QUFDQyx1QkFDSXJSLEtBREo7QUFFQzZQLGdCQUFZN1AsTUFBTTZQLFVBQU4sQ0FBaUJILE1BQWpCLENBQXdCLDRCQUFhL0YsT0FBT3ROLElBQXBCLENBQXhCLENBRmI7QUFHQ2lHLFVBQU10QyxNQUFNc0MsSUFBTixHQUFhLENBSHBCO0FBSUNrTixZQUFRN0YsT0FBT3ROLElBQVAsQ0FBWXNULE1BQVosS0FBdUI7QUFKaEM7QUFNRDtBQUNDLFVBQU8zUCxLQUFQO0FBN0JGO0FBK0JBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDL0J1Qm1PLE87O0FBeEJ4Qjs7QUFHQTs7Ozs7Ozs7QUFFQSxJQUFNQyxZQUFZO0FBQ2pCO0FBQ0F1RCxXQUFVLEVBRk87QUFHakI7QUFDQUMsVUFBUyxFQUpRO0FBS2pCO0FBQ0FDLFdBQVUsQ0FOTztBQU9qQjtBQUNBQyxZQUFXLElBUk07QUFTakI7QUFDQXJCLGNBQWEsRUFWSTtBQVdqQjtBQUNBdkQsV0FBVSxPQVpPO0FBYWpCO0FBQ0FzQyxTQUFRLEtBZFM7QUFlakI7QUFDQWxOLE9BQU07QUFoQlcsQ0FBbEI7O0FBbUJlLFNBQVM2TCxPQUFULEdBQTRDO0FBQUEsS0FBM0JuTyxLQUEyQix1RUFBbkJvTyxTQUFtQjtBQUFBLEtBQVJ6RSxNQUFROztBQUMxRCxTQUFRQSxPQUFPck4sSUFBZjtBQUNDO0FBQ0MsdUJBQ0kwRCxLQURKO0FBRUMyUixjQUFVaEksT0FBT3ROLElBQVAsQ0FBWSxDQUFaLENBRlg7QUFHQ3lWLGVBQVduSSxPQUFPdE4sSUFBUCxDQUFZLENBQVosQ0FIWjtBQUlDb1UsaUJBQWEsNEJBQWE5RyxPQUFPdE4sSUFBUCxDQUFZLENBQVosQ0FBYixDQUpkO0FBS0NtVCxZQUFRN0YsT0FBT3ROLElBQVAsQ0FBWSxDQUFaLEVBQWVzVCxNQUFmLEtBQTBCO0FBTG5DO0FBT0Q7QUFDQyx1QkFDSTNQLEtBREo7QUFFQzRSLGFBQVNqSSxPQUFPdE4sSUFBUCxDQUFZc04sTUFBWixLQUF1QixDQUF2QixnQ0FDSjNKLE1BQU00UixPQURGLElBQ1dqSSxPQUFPdE4sSUFBUCxDQUFZMkssS0FEdkIsS0FFUmhILE1BQU00UixPQUFOLENBQWN2QixNQUFkLENBQXFCLGNBQU07QUFBRTdTLFlBQU9tTSxPQUFPdE4sSUFBUCxDQUFZMkssS0FBbkI7QUFBMkIsS0FBeEQ7QUFKRjtBQU1EO0FBQ0MsdUJBQ0loSCxLQURKO0FBRUN5USxpQkFBYTlHLE9BQU90TixJQUFQLENBQVlpRyxJQUFaLEtBQXFCLENBQXJCLEdBQ1osNEJBQWFxSCxPQUFPdE4sSUFBUCxDQUFZNFEsT0FBekIsQ0FEWSxHQUVaak4sTUFBTXlRLFdBQU4sQ0FBa0JmLE1BQWxCLENBQXlCLDRCQUFhL0YsT0FBT3ROLElBQVAsQ0FBWTRRLE9BQXpCLENBQXpCLENBSkY7QUFLQzNLLFVBQU1xSCxPQUFPdE4sSUFBUCxDQUFZaUcsSUFBWixHQUFtQixDQUwxQjtBQU1Da04sWUFBUTdGLE9BQU90TixJQUFQLENBQVk0USxPQUFaLENBQW9CMEMsTUFBcEIsS0FBK0IsRUFOeEM7QUFPQ3pDLGNBQVV2RCxPQUFPdE4sSUFBUCxDQUFZNlE7QUFQdkI7QUFTRDtBQUNDLHVCQUNJbE4sS0FESjtBQUVDNlIsY0FBVTdSLE1BQU02UixRQUFOLEdBQWlCO0FBRjVCO0FBSUQ7QUFDQyxVQUFPN1IsS0FBUDtBQWhDRjtBQWtDQSxDOzs7Ozs7Ozs7Ozs7OztBQzNERDs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJK1IsUUFBUSw0Q0FBNkIsaURBQTdCLENBQVo7O2tCQUVlQSxLOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7Ozs7Ozs7Ozs7OztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OztzTEFFSmhTLEssR0FBUTtBQUNOaVMsV0FBSztBQURDLEs7Ozs7O3lDQUlhO0FBQ25CLFdBQUszUCxJQUFMLENBQVUsS0FBS3ZDLEtBQWY7QUFDRDs7OzhDQUV5Qm1TLFMsRUFBVztBQUNuQyxVQUFJQSxVQUFVNVAsSUFBVixLQUFtQixLQUFLdkMsS0FBTCxDQUFXdUMsSUFBbEMsRUFBd0M7QUFDdEMsYUFBS0EsSUFBTCxDQUFVNFAsU0FBVjtBQUNEO0FBQ0Y7Ozt5QkFFSW5TLEssRUFBTztBQUFBOztBQUNWLFdBQUtzQixRQUFMLENBQWMsRUFBRTRRLEtBQUssSUFBUCxFQUFkO0FBQ0FsUyxZQUFNdUMsSUFBTixDQUFXLFVBQUMyUCxHQUFELEVBQVM7QUFDbEIsZUFBSzVRLFFBQUwsQ0FBYyxFQUFFNFEsS0FBS0EsSUFBSUUsT0FBSixHQUFjRixJQUFJRSxPQUFsQixHQUE0QkYsR0FBbkMsRUFBZDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLbFMsS0FBTCxDQUFXcVMsUUFBWCxDQUFvQixLQUFLcFMsS0FBTCxDQUFXaVMsR0FBL0IsQ0FBUDtBQUNEOzs7Ozs7a0JBR1lELE07Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUssTTs7O0FBQ0wsaUJBQVl0UyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNac1MsYUFBVSxLQURFO0FBRVpsRCxpQkFBYztBQUZGLEdBQWI7QUFGa0I7QUFNbEI7Ozs7dUNBQ29CO0FBQ3BCLFFBQUtyUCxLQUFMLENBQVdsRSxpQkFBWCxDQUNDLENBQ0M0QixhQUFhOFUsT0FBYixDQUFxQixJQUFyQixDQURELEVBRUM5VSxhQUFhOFUsT0FBYixDQUFxQixNQUFyQixDQUZELEVBR0M5VSxhQUFhOFUsT0FBYixDQUFxQixPQUFyQixDQUhELENBREQ7QUFPQTs7O3VDQUNvQjtBQUNwQixPQUFJLEtBQUt2UyxLQUFMLENBQVdvUCxZQUFmLEVBQTZCO0FBQzVCLFNBQUsvTixRQUFMLENBQWMsRUFBRStOLGNBQWMsS0FBaEIsRUFBZDtBQUNBLElBRkQsTUFFTyxJQUFJLEtBQUtyUCxLQUFMLENBQVcyTixPQUFYLENBQW1CVyxjQUF2QixFQUF1QztBQUM3QyxTQUFLdE8sS0FBTCxDQUFXL0Qsa0JBQVg7QUFDQTtBQUNEOzs7eUJBQ01TLE0sRUFBUTtBQUNkLE9BQUksS0FBS3NELEtBQUwsQ0FBVzJOLE9BQVgsQ0FBbUJsUSxFQUFuQixLQUEwQixJQUE5QixFQUFvQztBQUNuQyxTQUFLdUMsS0FBTCxDQUFXakUsZUFBWCxDQUEyQixRQUEzQixFQUFxQ1csTUFBckM7QUFDQTtBQUNEOzs7eUJBQ01hLFEsRUFBVUYsSyxFQUFPO0FBQ3ZCLE9BQUksS0FBSzJDLEtBQUwsQ0FBVzJOLE9BQVgsQ0FBbUJsUSxFQUFuQixLQUEwQixJQUE5QixFQUFvQztBQUNuQyxTQUFLdUMsS0FBTCxDQUFXakUsZUFBWCxDQUEyQixVQUEzQixFQUF1QyxFQUFFd0Isa0JBQUYsRUFBWUYsWUFBWixFQUF2QztBQUNBO0FBQ0Q7Ozs2QkFDVTtBQUNWLFFBQUtpRSxRQUFMLENBQWMsRUFBRWlSLFVBQVUsQ0FBQyxLQUFLdFMsS0FBTCxDQUFXc1MsUUFBeEIsRUFBZDtBQUNBOzs7MkJBQ1E7QUFDUixPQUFJNVIsRUFBSixFQUFRO0FBQ1BBLE9BQUc4UixNQUFIO0FBQ0E7QUFDRCxPQUFJblEsSUFBSixFQUFVO0FBQ1QsUUFBSUcsUUFBUUgsS0FBS0csS0FBTCxDQUFXTyxlQUFYLEVBQVo7QUFDQVAsVUFBTWlRLE9BQU47QUFDQTtBQUNELFFBQUsxUyxLQUFMLENBQVdoRSxrQkFBWCxDQUNDLEtBQUtnRSxLQUFMLENBQVcyTixPQUFYLENBQW1CbFEsRUFEcEIsRUFFQyxLQUFLdUMsS0FBTCxDQUFXMk4sT0FBWCxDQUFtQnRRLEtBRnBCO0FBSUEsUUFBS2lFLFFBQUwsQ0FBYyxFQUFFK04sY0FBYyxJQUFoQixFQUFkO0FBQ0E7OzsyQkFDUztBQUNULE9BQUksS0FBS3BQLEtBQUwsQ0FBV29QLFlBQWYsRUFBNkI7QUFDekIsV0FBTywwREFBVSxJQUFLLEdBQWYsR0FBUDtBQUNELElBRkgsTUFFUyxJQUFJLEtBQUtyUCxLQUFMLENBQVcyTixPQUFYLENBQW1CVyxjQUF2QixFQUF1QztBQUMvQyxXQUFPLDBEQUFVLElBQUssU0FBZixHQUFQO0FBQ0E7QUFDRCxPQUFNcUUsYUFBYSxLQUFLMVMsS0FBTCxDQUFXc1MsUUFBWCxHQUFzQixhQUF0QixHQUFzQyxrQkFBekQ7QUFDQSxPQUFNSyxXQUNMO0FBQUE7QUFBQSxNQUFLLElBQUcsY0FBUixFQUF1QixTQUFVLEtBQUtMLFFBQUwsQ0FBY3pRLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakM7QUFDQztBQUFBO0FBQUE7QUFDRyxVQUFLOUIsS0FBTCxDQUFXMk4sT0FBWCxDQUFtQmxRLEVBQW5CLEtBQTBCLElBQTFCLEdBQWlDLE9BQWpDLEdBQTJDLEtBQUt1QyxLQUFMLENBQVcyTixPQUFYLENBQW1CL1A7QUFEakUsS0FERDtBQUlDLDJDQUFLLEtBQUksc0NBQVQ7QUFKRCxJQUREO0FBUUEsT0FBSWlWLG9CQUFKO0FBQ0EsT0FBSSxLQUFLNVMsS0FBTCxDQUFXc1MsUUFBWCxJQUF1QixLQUFLdlMsS0FBTCxDQUFXMk4sT0FBWCxDQUFtQmxRLEVBQW5CLEtBQTBCLElBQXJELEVBQTJEO0FBQzFEb1Ysa0JBQ0M7QUFBQTtBQUFBLE9BQVMsV0FBVSxhQUFuQjtBQUNDO0FBQUE7QUFBQSxRQUFHLE1BQU8sV0FBVyxLQUFLN1MsS0FBTCxDQUFXMk4sT0FBWCxDQUFtQmxRLEVBQXhDO0FBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0MsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFHLE1BQU8sUUFBVjtBQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCLE1BRkQ7QUFHQztBQUFBO0FBQUEsUUFBRyxNQUFPLFVBQVY7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QixNQUhEO0FBSUM7QUFBQTtBQUFBLFFBQUcsTUFBTyxVQUFWO0FBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkIsTUFKRDtBQUtDO0FBQUE7QUFBQSxRQUFJLElBQUcsb0JBQVAsRUFBNEIsU0FBVSxLQUFLcVYsTUFBTCxDQUFZaFIsSUFBWixDQUFpQixJQUFqQixDQUF0QztBQUFBO0FBQUE7QUFMRCxLQUREO0FBU0E7QUFDQyxVQUNEO0FBQUE7QUFBQSxNQUFRLElBQUcsUUFBWDtBQUNDO0FBQUE7QUFBQSxPQUFHLE1BQUssR0FBUjtBQUNDLDRDQUFLLElBQUcsYUFBUixFQUFzQixLQUFJLGtCQUExQixFQUE2QyxLQUFJLE1BQWpEO0FBREQsS0FERDtBQUlDO0FBQUE7QUFBQSxPQUFJLElBQUcsYUFBUDtBQUFBO0FBQUEsS0FKRDtBQUtHOFEsWUFMSDtBQU1DO0FBQUE7QUFBQSxPQUFHLFdBQVUsYUFBYixFQUEyQixNQUFLLFVBQWhDO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELEtBTkQ7QUFTQztBQUFBO0FBQUEsT0FBRyxXQUFVLGFBQWIsRUFBMkIsTUFBSyxHQUFoQztBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxLQVREO0FBWUM7QUFBQTtBQUFBLE9BQVMsV0FBWUQsVUFBckI7QUFDQztBQUFBO0FBQUEsUUFBSSxJQUFHLG9CQUFQO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFDQyxzQ0FERDtBQUVDLGFBQU0sT0FGUDtBQUdDLGNBQVMsS0FBSzdPLE1BQUwsQ0FBWWhDLElBQVosQ0FBaUIsSUFBakI7QUFIVixPQUZEO0FBT0M7QUFDQyx3Q0FERDtBQUVDLGFBQU0sT0FGUDtBQUdDLGNBQVMsS0FBS2IsTUFBTCxDQUFZYSxJQUFaLENBQWlCLElBQWpCO0FBSFY7QUFQRCxLQVpEO0FBeUJHK1E7QUF6QkgsSUFEQztBQTZCRDs7Ozs7O2tCQUdZLHlCQUNiLFVBQUM1UyxLQUFEO0FBQUEsUUFBWSxFQUFFME4sU0FBUzFOLE1BQU0wTixPQUFqQixFQUFaO0FBQUEsQ0FEYSxFQUViLEVBQUU3Uiw2Q0FBRixFQUFxQkUsK0NBQXJCLEVBQXlDRCx5Q0FBekMsRUFBMERFLCtDQUExRCxFQUZhLEVBR2JxVyxNQUhhLEM7Ozs7Ozs7Ozs7Ozs7O0FDeEhmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNUyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFNBQUQ7QUFBQSxTQUFlLFVBQUNoVCxLQUFEO0FBQUEsV0FDckM7QUFBQTtBQUFBLFFBQVEsTUFBT2dULFNBQWY7QUFFSSxnQkFBQ0MsU0FBRDtBQUFBLGVBQWVBLFlBQVksOEJBQUMsU0FBRCxFQUFnQmpULEtBQWhCLENBQVosR0FBeUMsSUFBeEQ7QUFBQTtBQUZKLEtBRHFDO0FBQUEsR0FBZjtBQUFBLENBQXhCOztBQVFBLElBQU1rVCxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNoQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSwyREFERjtBQUVFO0FBQUE7QUFBQTtBQUNFLCtEQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLFdBQVlILCtCQUFsQyxHQURGO0FBRUYsK0RBQU8sV0FBUCxFQUFhLE1BQUssVUFBbEIsRUFBNkIsV0FBWUEsa0NBQXpDLEdBRkU7QUFHRiwrREFBTyxXQUFQLEVBQWEsTUFBSyxVQUFsQixFQUE2QixXQUFZQSw4QkFBekMsR0FIRTtBQUlGLCtEQUFPLFdBQVAsRUFBYSxNQUFLLFdBQWxCLEVBQThCLFdBQVlBLCtCQUExQyxHQUpFO0FBS0YsK0RBQU8sV0FBUCxFQUFhLE1BQUssYUFBbEIsRUFBZ0MsV0FBWUEsaUNBQTVDLEdBTEU7QUFNRiwrREFBTyxXQUFQLEVBQWEsTUFBSyxRQUFsQixFQUEyQixXQUFZQSxnQ0FBdkMsR0FORTtBQU9GLCtEQUFPLFdBQVAsRUFBYSxNQUFLLFVBQWxCLEVBQTZCLFdBQVlBLGtDQUF6QyxHQVBFO0FBUUYsK0RBQU8sV0FBUCxFQUFhLE1BQUssVUFBbEIsRUFBNkIsV0FBWUEsa0NBQXpDLEdBUkU7QUFTRiwrREFBTyxXQUFQLEVBQWEsTUFBSyxXQUFsQixFQUE4QixXQUFZQSwrQkFBMUMsR0FURTtBQVVGLCtEQUFPLFdBQVAsRUFBYSxNQUFLLE1BQWxCLEVBQXlCLFdBQVlBLDhCQUFyQyxHQVZFO0FBV0YsK0RBQU8sV0FBUCxFQUFhLE1BQUssU0FBbEIsRUFBNEIsV0FBWUEsaUNBQXhDLEdBWEU7QUFZRSwrREFBTyxXQUFQLEVBQWEsTUFBSyxRQUFsQixFQUEyQixXQUFZQSxnQ0FBdkMsR0FaRjtBQWFGLCtEQUFPLFdBQVAsRUFBYSxNQUFLLFFBQWxCLEVBQTJCLFdBQVlBLGdDQUF2QyxHQWJFO0FBY0YsK0RBQU8sV0FBUCxFQUFhLE1BQUssTUFBbEIsRUFBeUIsV0FBWUEsOENBQXJDLEdBZEU7QUFlRiwrREFBTyxXQUFQLEVBQWEsTUFBSyxNQUFsQixFQUF5QixXQUFZQSxvQ0FBckMsR0FmRTtBQWdCRiwrREFBTyxXQUFZQSx1Q0FBbkI7QUFoQkUsT0FGRjtBQW9CRTtBQUFBO0FBQUEsVUFBUSxJQUFHLFFBQVg7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBRyxNQUFLLDJDQUFSLEVBQW9ELFFBQU8sU0FBM0Q7QUFBQTtBQUFBO0FBQUosU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxjQUFHLE1BQUssa0RBQVIsRUFBMkQsUUFBTyxTQUFsRTtBQUFBO0FBQUE7QUFBSixTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBSyx1QkFBUixFQUFnQyxRQUFPLFNBQXZDO0FBQUE7QUFBQTtBQUFKLFNBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBRyxNQUFLLFFBQVIsRUFBaUIsUUFBTyxTQUF4QjtBQUFBO0FBQUE7QUFBSixTQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBSyw0QkFBUixFQUFxQyxRQUFPLFNBQTVDO0FBQUE7QUFBQTtBQUFKO0FBTkY7QUFwQkY7QUFERixHQURnQjtBQUFBLENBQWxCOztrQkFrQ2VHLFM7Ozs7Ozs7Ozs7Ozs7a0JDL0RTQyxZOztBQUZ4Qjs7QUFFZSxTQUFTQSxZQUFULENBQXNCN1csSUFBdEIsRUFBNEI7QUFDMUMsUUFBT0EsS0FBS2dSLEdBQUwsQ0FBUyxVQUFTbEMsS0FBVCxFQUFnQjtBQUMvQixTQUFPLENBQ04sb0JBQVksV0FBWixHQUEwQkEsTUFBTWdJLE1BQWhDLEdBQXlDLFVBQXpDLEdBQXNEaEksTUFBTWlJLFVBRHRELEVBRU5qSSxNQUFNa0ksY0FGQSxFQUdOLGFBQWFsSSxNQUFNbUksU0FIYixDQUFQO0FBS0EsRUFOTSxDQUFQO0FBT0EsQzs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEM7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEM7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEM7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vRWRpdC5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9FZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2V0dGluZy5qc1wiKSk7XG5cdH0sIFwic2V0dGluZ1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuL3NyYy9wYWdlcy9TZXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vU2lnbnVwLmpzXCIpKTtcblx0fSwgXCJzZXR0aW5nXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4vc3JjL3BhZ2VzL1NpZ251cC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1Rlcm1zLmpzXCIpKTtcblx0fSwgXCJ0ZXJtc1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9dGVybXMhLi9zcmMvcGFnZXMvVGVybXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Vc2VyLmpzXCIpKTtcblx0fSwgXCJ1c2VyXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4vc3JjL3BhZ2VzL1VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9XYXRjaC5qc1wiKSk7XG5cdH0sIFwid2F0Y2hcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXdhdGNoIS4vc3JjL3BhZ2VzL1dhdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypnZW5lcmFsLWhlYWRlciovXFxuI2hlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4NTEzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI2hlYWRlci1kZXNje1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG4uaGVhZGVyLW5hdml7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXItbG9nb3tcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ2lue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXItbG9naW4gaDV7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jaGVhZGVyLWxvZ2luIGltZ3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItZHJvcHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbiNoZWFkZXItZHJvcC1tZXNzYWdle1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNTI0NTYgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA1MjQ1NiAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogOHB4IDIlICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWRyb3AgYXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyLWRyb3AgaW5wdXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjg1MTM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNoZWFkZXItZHJvcC1sb2dvdXR7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWY4NTEzO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1kcm9wLWhpZGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjI0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkN2I0O1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHRcXHRcXHRcXG59XFxuI2hlYWRlci1kcm9wLW5vdGljZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZWY4NTEzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLypGb290ZXIgc3R5bGUqL1xcbiNmb290ZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0cGFkZGluZzogNXB4IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiA3MHB4O1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG5cXG4jZm9vdGVyIGg2e1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDMlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDhweCkge1xcbiAgICAjaGVhZGVyLWxvZ297XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgI2Zvb3RlcntcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHggNSU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAjaGVhZGVyLWRlc2N7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gICAgI2hlYWRlci1sb2dve1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvZ2VuZXJhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2VuZXJhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlbmVyYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnQgY29uc3QgZG9tYWluVXJsID0gJ2h0dHBzOi8vc21pbGluZ3MubWUnO1xuXG5leHBvcnQgY29uc3QgYW5kcm9pZFN0b3JlVXJsID0gJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20udGhvdXNhbmRheSc7XG5cbmV4cG9ydCBjb25zdCBnb29nbGVDbGllbnRJZCA9ICcxNjgwOTg4NTAyMzQtZnNxODRwazRjYWU5N21sajBrNDY0am9jMjFjZ3FqdnYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xuZXhwb3J0IGNvbnN0IGZhY2Vib29rQ2xpZW50SWQgPSAnNDQ3Njg4MjY1NTc2MTI1JztcblxuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50RmFjZWJvb2tBcGkgPSAnL2FjY291bnQvZmFjZWJvb2snO1xuZXhwb3J0IGNvbnN0IHJlYWRBY2NvdW50R29vZ2xlQXBpID0gJy9hY2NvdW50L2dvb2dsZSc7XG5leHBvcnQgY29uc3QgZGVsZXRlQWNjb3VudFRva2VuQXBpID0gJy9hY2NvdW50L2xvZ291dCc7XG5cbmV4cG9ydCBjb25zdCByZWFkSG9tZU1vbWVudHNBcGkgPSAnL2luZGV4L3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFeHBsb3JlTW9tZW50c0FwaSA9ICcvZXhwbG9yZS9yZWFkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRQZXRQYWdlQXBpID0gJy9wZXQvcmVhZCc7XG5leHBvcnQgY29uc3QgdXBkYXRlUGV0V2F0Y2hBcGkgPSAnL3BldC93YXRjaCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUGV0TW9tZW50QXBpID0gJy91cGxvYWQvbW9tZW50JztcbmV4cG9ydCBjb25zdCByZWFkUGV0TW9tZW50c0FwaSA9ICcvcGV0L2xvYWQnO1xuXG5leHBvcnQgY29uc3QgcmVhZFVzZXJQYWdlQXBpID0gJy91c2VyL3JlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWRVc2VyTW9tZW50c0FwaSA9ICcvdXNlci9sb2FkJztcblxuZXhwb3J0IGNvbnN0IHJlYWRNb21lbnRQYWdlQXBpID0gJy9tb21lbnQvcmVhZCc7XG5leHBvcnQgY29uc3QgZGVsZXRlTW9tZW50UGFnZUFwaSA9ICcvbW9tZW50L2RlbGV0ZSc7XG5leHBvcnQgY29uc3QgdXBkYXRlTW9tZW50TGlrZUFwaSA9ICcvbW9tZW50L2xpa2UnO1xuZXhwb3J0IGNvbnN0IHJlYWRNb21lbnRDb21tZW50c0FwaSA9ICcvbW9tZW50L2xvYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vbWVudENvbW1lbnRBcGkgPSAnL21vbWVudC9jb21tZW50JztcblxuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaFBhZ2VBcGkgPSAnL3dhdGNoL3JlYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVdhdGNoUGV0QXBpID0gJy93YXRjaC9hZGQnO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVdhdGNoUGV0QXBpID0gJy93YXRjaC9yZW1vdmUnO1xuZXhwb3J0IGNvbnN0IHJlYWRXYXRjaE1vbWVudHNBcGkgPSAnL3dhdGNoL2xvYWQnO1xuXG5leHBvcnQgY29uc3QgcmVhZFJlcXVlc3RQYWdlQXBpID0gJy9yZXF1ZXN0L3JlYWQnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3RVc2VyQXBpID0gJy9yZXF1ZXN0L2FjY2VwdCc7XG5leHBvcnQgY29uc3QgZGVsZXRlUmVxdWVzdFVzZXJBcGkgPSAnL3JlcXVlc3QvZGVsZXRlJztcblxuZXhwb3J0IGNvbnN0IHJlYWRTZXR0aW5nUGFnZUFwaSA9ICcvc2V0dGluZy9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVTZXR0aW5nQWJvdXRBcGkgPSAnL3NldHRpbmcvYWJvdXQnO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdOYW1lQXBpID0gJy9zZXR0aW5nL25hbWUnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNldHRpbmdQcm9maWxlQXBpID0gJy91cGxvYWQvdXNlcic7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBZGRQZXRBcGkgPSAnL3VwbG9hZC9hZGQnO1xuZXhwb3J0IGNvbnN0IHJlYWRFZGl0UGFnZUFwaSA9ICcvZWRpdC9yZWFkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0TmFtZUFwaSA9ICcvZWRpdC9uYW1lJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0UHJvZmlsZUFwaSA9ICcvdXBsb2FkL3BldCc7XG5leHBvcnQgY29uc3QgZGVsZXRlRWRpdFJlbGF0aXZlQXBpID0gJy9lZGl0L3JlbW92ZSc7XG5leHBvcnQgY29uc3QgcmVhZEVkaXRTZWFyY2hBcGkgPSAnL2VkaXQvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBjcmVhdGVFZGl0UmVsYXRpdmVBcGkgPSAnL2VkaXQvYWRkJztcbmV4cG9ydCBjb25zdCB1cGRhdGVFZGl0VHJhbnNmZXJBcGkgPSAnL2VkaXQvdHJhbnNmZXInO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUVkaXRSZWxhdGlvbkFwaSA9ICcvZWRpdC9lbmQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2NvbmZpZy5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRBY2NvdW50RmFjZWJvb2tBcGksIHJlYWRBY2NvdW50R29vZ2xlQXBpLCBkZWxldGVBY2NvdW50VG9rZW5BcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfREFUQSA9IFwiYWNjb3VudC9DSEFOR0VfQUNDT1VOVF9EQVRBXCI7XG5leHBvcnQgY29uc3QgQ0xFQVJfQUNDT1VOVF9EQVRBID0gXCJhY2NvdW50L0NMRUFSX0FDQ09VTlRfREFUQVwiO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1RPX1NJR05VUCA9IFwiYWNjb3VudC9SRURJUkVDVF9UT19TSUdOVVBcIjtcbmV4cG9ydCBjb25zdCBDTEVBUl9BQ0NPVU5UX1NJR05VUCA9IFwiYWNjb3VudC9DTEVBUl9BQ0NPVU5UX1NJR05VUFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWNjb3VudERhdGEoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9BQ0NPVU5UX0RBVEEsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyZWN0VG9TaWdudXAoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVESVJFQ1RfVE9fU0lHTlVQXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBY2NvdW50RGF0YShwb3J0YWwsIGRldGFpbCkge1xuXHRjb25zdCBhcGlVcmwgPSBwb3J0YWwgPT09ICdmYWNlYm9vaycgPyByZWFkQWNjb3VudEZhY2Vib29rQXBpIDogcmVhZEFjY291bnRHb29nbGVBcGk7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgYXBpVXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogZGV0YWlsLnRva2VuLCBcblx0XHRcdFx0XCJwbGF0Zm9ybVwiOiBcIndlYnNpdGVcIlxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0aWYgKGpzb24uaWQpIHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld0lkXCIsIGpzb24uaWQpO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3VG9rZW5cIiwgZGV0YWlsLnRva2VuKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld1BsYXRmb3JtXCIsIHBvcnRhbCk7XG5cdFx0XHRcdFx0aWYgKHBvcnRhbCA9PT0gJ2ZhY2Vib29rJykge1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdOYW1lXCIsIGRldGFpbC5yZXNwb25zZS5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3QXZhdGFyXCIsIG51bGwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld05hbWVcIiwgZGV0YWlsLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdBdmF0YXJcIiwgZGV0YWlsLmltYWdlVXJsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJlY3RUb1NpZ251cCgpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGpzb25bMF0pO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBqc29uWzFdKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGpzb25bMl0pO1xuXHRcdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUFjY291bnREYXRhKGpzb24pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHQvL2Vycm9yXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhckFjY291bnREYXRhKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENMRUFSX0FDQ09VTlRfREFUQVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBY2NvdW50VG9rZW4oaWQsIHRva2VuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlQWNjb3VudFRva2VuQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdG9rZW4sIFxuXHRcdFx0XHRcImlkXCI6IGlkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoanNvbikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2xlYXJBY2NvdW50RGF0YSgpKTtcblx0XHRcdH0pLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Ly9lcnJvclxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWNjb3VudFNpZ251cCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDTEVBUl9BQ0NPVU5UX1NJR05VUFxuXHR9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWNjb3VudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRTZXR0aW5nUGFnZUFwaSwgdXBkYXRlU2V0dGluZ0Fib3V0QXBpLCB1cGRhdGVTZXR0aW5nTmFtZUFwaSxcblx0Y3JlYXRlU2V0dGluZ1Byb2ZpbGVBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9TRVRUSU5HX1BBR0UgPSAnc2V0dGluZy9CVUlMRF9TRVRUSU5HX1BBR0UnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9TRVRUSU5HX0FCT1VUID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfQUJPVVQnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX05BTUUgPSAnYWNjb3VudC9DSEFOR0VfQUNDT1VOVF9OQU1FJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfU0VUVElOR19OQU1FID0gJ3NldHRpbmcvQ0hBTkdFX1NFVFRJTkdfTkFNRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFVFRJTkdfUFJPRklMRSA9ICdzZXR0aW5nL0NIQU5HRV9TRVRUSU5HX1BST0ZJTEUnO1xuXG5mdW5jdGlvbiBidWlsZFNldHRpbmdQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9TRVRUSU5HX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFNldHRpbmdQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFNldHRpbmdQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRTZXR0aW5nUGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdBYm91dChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfQUJPVVQsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ0Fib3V0KGlkLCB0b2tlbiwgYWJvdXQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVTZXR0aW5nQWJvdXRBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCdhYm91dCc6IGFib3V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlU2V0dGluZ0Fib3V0KGFib3V0KSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY2NvdW50TmFtZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FDQ09VTlRfTkFNRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNldHRpbmdOYW1lKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9TRVRUSU5HX05BTUVcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2V0dGluZ1Byb2ZpbGUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1NFVFRJTkdfUFJPRklMRVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ05hbWUoaWQsIHRva2VuLCBuYW1lKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlU2V0dGluZ05hbWVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiBpZCxcblx0XHRcdFx0J3Rva2VuJzogdG9rZW4sXG5cdFx0XHRcdCduYW1lJzogbmFtZVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBuYW1lKTtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlQWNjb3VudE5hbWUobmFtZSkpO1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VTZXR0aW5nTmFtZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nUHJvZmlsZShpZCwgdG9rZW4sIGZpbGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGZpbGVEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLCBpZCArICcuanBnJyk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCBpZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBjcmVhdGVTZXR0aW5nUHJvZmlsZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVNldHRpbmdQcm9maWxlKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9zZXR0aW5nLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvY2Vzc0Vycm9yKGVycikge1xuXHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycgKyBlcnIpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3Byb2Nlc3NFcnJvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3JlZHV4L3N0b3JlLmpzJztcbmltcG9ydCBnZXRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5cblJlYWN0RG9tLnJlbmRlcihcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+e2dldFJvdXRlcigpfTwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZWJvb2tsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBcIjEwMCVcIixcblx0XHRcdHJlc3BvbnNlOiBudWxsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHRsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0XHRzY3JpcHQuaWQgPSBcImZhY2Vib29rLWpzc2RrXCI7XG5cdFx0c2NyaXB0LnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0d2luZG93LmZiQXN5bmNJbml0ID0gKCkgPT4ge1xuXHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdGFwcElkICAgICAgOiB0aGlzLnByb3BzLmNsaWVudElkLFxuXHRcdFx0XHR4ZmJtbCAgICAgIDogdHJ1ZSxcblx0XHRcdFx0dmVyc2lvbiAgICA6ICd2Mi44J1xuXHRcdFx0fSk7XG4vLyBcdFx0XHRGQi5nZXRMb2dpblN0YXR1cygocmVzcG9uc2UpID0+IHtcbi8vIFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbi8vIFx0XHRcdFx0XHRsZXQgdG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4vLyBcdFx0XHRcdFx0RkIuYXBpKCcvbWUnLCAocmVzcG9uc2UpID0+IHtcbi8vIFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZSB9KTtcbi8vICBcdFx0XHRcdFx0XHRzZWxmLnByb3BzLmZMb2dpbihyZXNwb25zZSwgdG9rZW4pO1xuLy8gXHRcdFx0XHRcdH0pO1xuLy8gXHRcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyByZXNwb25zZTogZmFsc2UgfSk7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y2xpY2tCdXR0b24oKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGlmICh0aGlzLnN0YXRlLnJlc3BvbnNlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmZMb2dpbih0aGlzLnN0YXRlLnJlc3BvbnNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0RkIubG9naW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0bGV0IHRva2VuID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuXHRcdFx0XHRcdEZCLmFwaSgnL21lJywgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgcmVzcG9uc2UgfSk7XG5cdFx0XHRcdFx0XHRzZWxmLnByb3BzLmZMb2dpbihyZXNwb25zZSwgdG9rZW4pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3BvbnNlOiBmYWxzZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIlxuXHRcdH07XG5cdFx0bGV0IGZhY2Vib29rID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVNBQUFBQStDQVlBQUFDTEtNYmZBQUFLeG1sRFExQkpRME1nVUhKdlptbHNaUUFBU0EydGxuZFVVOWtXaC9lOTZZMldVS1dFM3BFaVhYb05vQ0JWc0JHU1FFSUpJU1NJV0xBd09BSmpRVVVFS3pvaW91QllBQmtMWXNHS1lPOERNcWlvNDJEQmhzcTdnUWN6YTlhYi85NWU2OXp6M1gxK2Q5K3pUMWxyQTlCYnVCSkpKcW9Da0NXV1NhTkQvTmt6RTVQWXBFZEFBZ1RVUUJ2b1hGNnV4QzhxS2dMKzFUN2N4clNZM2JCVnhQcFgyZjhlVU9VTGNua0FTQlEybk1MUDVXVmhmQVJyMjNnU3FRd0FGNHY1VGViTEpBck94NWdseFNhSWNabUMwOFo0aDRKVHhoajdGdFBFUmdkZ21nc0FaRHFYSzAwRG9OM0UvT3c4WGhvV2gvWWVZM3N4WHlRR29KdGc3TTBUY3ZrWVl3MXNzckt5RmJ3V1k0dVV2OFZKK3h0enVTa1RNYm5jdEFrZXl3WDdFdnR4b0NoWGtzbGRNUHJ5LzN4a1pjcXg5Um8xZmV4Sno4MklDY2Q2TTJ6TjhubmNvSmh4RmdvNGlqMGI5VXRrL3RIakxKSnhZc2RaS0ErTkcyZDVScHpmT0dka2gwL294U25USThmOXZOd0FiTzNIWWhZSVl4UEdtUzhJREJwbmFYYjBoRDQzTDJiQ1h5QU1tRDZ1U2VlR0tmWjdkRzVjS1ViL1pVRm15TVIvSmJLb2lYbUtNNmRQNUpJcURaN1FDSEwveWxjbWpBMGRqeVBERHNBNHA0cUNPZU1zbElaTytDV1pvMmQ2ZEE1U2VmVEVPZ2pFY1JOcnlPY0dUcXd0eElJUTVDQUdQZ2hBQ2ltUURaa2dBellFZ2doeVFZSzljUUhiYnBrZ0h6dGpBQUhaa2dWU1VacFF4dmJEYm9YQWhzMFI4K3hzMkk3MkRrNmd1R01LRGNBN2pkRzdnMmhjK3N1WDB3YmdYb0x0cCtKNHN4VXFBSzR4d0xHbkFNd1BmL21NMzQ2ZDB4TmRQTGswYjB5SFYzUUVvSUl5c0xEYnF3L0dZQUcyNEFndTRBbStFQVJoRUlsbGtnaHpnWWZsazRWbE1oOFd3VElvaGxKWUN4dWhDcmJETHRnTEIrQVFOTU54T0EzbjRUSjB3UzE0QUQzUUR5OWhFRDdBTUlJZ0pJU0JNQkZ0eEFBeFJhd1JSOFFOOFVhQ2tBZ2tHa2xFa3BFMFJJeklrVVhJQ3FRVUtVZXFrSjFJSGZJTGNndzVqVnhFdXBGN1NDOHlnTHhGdnFBNGxJNnlVRDNVREoyTXVxRithRGdhaTg1QjA5QWN0QUF0UWxlamxXZ051aDl0UWsramw5RmJhQS82RWgzQ0FZNkcwOEFaNG14eGJyZ0FYQ1F1Q1plS2srS1c0RXB3RmJnYVhBT3VGZGVCdTRIcndiM0NmY1lUOFV3OEcyK0w5OFNINHVQd1BId09mZ20rREYrRjM0dHZ3cC9GMzhEMzRnZngzd2tNZ2k3Qm11QkI0QkJtRXRJSTh3bkZoQXJDSHNKUndqbkNMVUkvNFFPUlNOUWdtaE5kaWFIRVJHSTZjU0d4akxpVjJFaHNJM1lUKzRoREpCSkptMlJOOGlKRmtyZ2tHYW1ZdEptMG4zU0tkSjNVVC9wRXBwRU55STdrWUhJU1dVeGVUcTRnN3lPZkpGOG5QeU1QVTFRb3BoUVBTaVNGVDFsQVdVUFpUV21sWEtQMFU0YXBxbFJ6cWhjMWxwcE9YVWF0cERaUXoxRWZVdC9SYURRam1qdHRCazFFVzBxcnBCMmtYYUQxMGo3VDFlaFc5QUQ2YkxxY3ZwcGVTMitqMzZPL1l6QVlaZ3hmUmhKRHhsak5xR09jWVR4bWZGSmlLdGtwY1pUNFNvVksxVXBOU3RlVlhpdFRsRTJWL1pUbktoY29WeWdmVnI2bS9FcUZvbUttRXFEQ1ZWbWlVcTF5VE9XT3lwQXFVOVZCTlZJMVM3Vk1kWi9xUmRYbmFpUTFNN1VnTmI1YWtkb3V0VE5xZlV3YzA1Z1p3T1F4VnpCM004OHgrMWxFbGptTHcwcG5sYklPc0RwWmcrcHE2bFBVNDlYejFhdlZUNmozYU9BMHpEUTRHcGthYXpRT2FkelcrS0twcCttbktkQmNwZG1nZVYzem85WWtMVjh0Z1ZhSlZxUFdMYTB2Mm16dElPME03WFhhemRxUGRQQTZWam96ZE9icmJOTTVwL05xRW11UzV5VGVwSkpKaHliZDEwVjFyWFNqZFJmcTd0SzlvanVrcDY4WG9pZlIyNngzUnUrVnZvYStyMzY2L2diOWsvb0RCa3dEYndPUndRYURVd1l2Mk9wc1AzWW11NUo5bGoxb3FHc1lhaWczM0duWWFUaHNaRzRVWjdUY3FOSG9rVEhWMk0wNDFYaURjYnZ4b0ltQnlUU1RSU2IxSnZkTkthWnVwa0xUVGFZZHBoL056TTBTekZhYU5aczlOOWN5NTVnWG1OZWJQN1JnV1BoWTVGalVXTnkwSkZxNldXWlliclhzc2tLdG5LMkVWdFZXMTZ4UmF4ZHJrZlZXNjI0YmdvMjdqZGlteHVhT0xkM1d6emJQdHQ2MjEwN0RMc0p1dVYyejNldkpKcE9USnErYjNESDV1NzJ6ZmFiOWJ2c0hEbW9PWVE3TEhWb2QzanBhT2ZJY3F4MXZPakdjZ3AwS25WcWMza3l4bmlLWXNtM0tYV2VtOHpUbmxjN3R6dDljWEYya0xnMHVBNjRtcnNtdVcxenZ1TEhjb3R6SzNDNjRFOXo5M1F2ZGo3dC85bkR4a0hrYzh2alQwOVl6dzNPZjUvT3A1bE1GVTNkUDdmTXk4dUo2N2ZUcThXWjdKM3Z2OE83eE1mVGgrdFQ0UFBFMTl1WDc3dkY5NW1mcGwrNjMzKysxdjcyLzFQK28vOGNBajRERkFXMkJ1TUNRd0pMQXppQzFvTGlncXFESHdVYkJhY0gxd1lNaHppRUxROXBDQ2FIaG9ldEM3M0QwT0R4T0hXY3d6RFZzY2RqWmNIcDRUSGhWK0pNSXF3aHBST3MwZEZyWXRQWFRIazQzblM2ZTNod0prWnpJOVpHUG9zeWpjcUorblVHY0VUV2plc2JUYUlmb1JkRWRNY3lZZVRIN1lqN0Urc2V1aVgwUVp4RW5qMnVQVjQ2ZkhWOFgvekVoTUtFOG9XZm01Sm1MWjE1TzFFa1VKYllra1pMaWsvWWtEYzBLbXJWeFZ2OXM1OW5GczIvUE1aK1RQK2ZpWEoyNW1YTlB6Rk9leDUxM09KbVFuSkM4TC9rck41SmJ3eDFLNGFSc1NSbmtCZkEyOFY3eWZma2IrQU1DTDBHNTRGbXFWMnA1NnZNMHI3VDFhUU5DSDJHRjhKVW9RRlFsZXBNZW1yNDkvV05HWkVadHhraG1RbVpqRmprck9ldVlXRTJjSVQ2YnJaK2RuOTB0c1pZVVMzcHlQSEkyNWd4S3c2VjdjcEhjT2JrdE1oWld6RnlSVzhoL2tQZm1lZWRWNTMyYUh6Ly9jTDVxdmpqL3lnS3JCYXNXUENzSUx2aDVJWDRoYjJIN0lzTkZ5eGIxTHZaYnZITUpzaVJsU1h1aGNXRlJZZi9Ta0tWN2wxR1haU3k3dXR4K2Vmbnk5eXNTVnJRVzZSVXRMZXI3SWVTSCttS2xZbW54blpXZUs3Zi9pUDlSOUdQbktxZFZtMWQ5TCtHWFhDcTFMNjBvL1ZyR0s3djBrOE5QbFQrTnJFNWQzYm5HWmMyMnRjUzE0clczMS9tczIxdXVXbDVRM3JkKzJ2cW1EZXdOSlJ2ZWI1eTM4V0xGbElydG02aWI1SnQ2S2lNcVd6YWJiRjY3K1d1VnNPcFd0WDkxNHhiZExhdTJmTnpLMzNwOW0rKzJodTE2MjB1M2Y5a2gybkYzWjhqT3BocXptb3BkeEYxNXU1N3VqdC9kOGJQYnozVjdkUGFVN3ZsV0s2N3QyUnU5OTJ5ZGExM2RQdDE5YStyUmVubjl3UDdaKzdzT0JCNW9hYkJ0Mk5tbzBWaDZFQTdLRDc3NEpmbVgyNGZDRDdVZmRqdmNjTVQweUphanpLTWxUVWpUZ3FiQlptRnpUMHRpUy9leHNHUHRyWjZ0UjMrMSs3WDJ1T0h4NmhQcUo5YWNwSjRzT2pseXF1RFVVSnVrN2RYcHROTjk3ZlBhSDV5WmVlYm0yUmxuTzgrRm43dHdQdmo4bVE2L2psTVh2QzRjditoeDhkZ2x0MHZObDEwdU4xMXh2bkwwcXZQVm81MHVuVTNYWEsrMWRMbDN0WFpQN1Q1NTNlZjY2UnVCTjg3ZjVOeThmR3Y2cmU3YmNiZnYzcGw5cCtjdS8rN3plNW4zM3R6UHV6LzhZT2xEd3NPU1J5cVBLaDdyUHE3NXpmSzN4aDZYbmhPOWdiMVhuc1E4ZWRESDYzdjVlKzd2WC91TG5qS2VWand6ZUZiMzNQSDU4WUhnZ2E0WHMxNzB2NVM4SEg1Vi9JZnFIMXRlVzd3KzhxZnZuMWNHWnc3MnY1RytHWGxiOWs3N1hlMzdLZS9iaDZLR0huL0krakQ4c2VTVDlxZTluOTArZDN4SitQSnNlUDVYMHRmS2I1YmZXcitIZjM4NGtqVXlJdUZLdWFPMUFBNTdvcW1wQUc5ckFSaUpXTzNRQlVCVkdxdUJSeFhJV04yT3NhSitWelNGL1lQSDZ1VFJFUmVBV2wrQXVLVUFFVzBBMjdCbWlqRWQ2eFhsWEt3dm9FNU9FdzN6S0N3MzFjbHhGQkM2RkN0TlBvMk12Tk1ESUxVQ2ZKT09qQXh2SFJuNXRodXIxZThCdE9XTTFkNEtOVkVGb054Y1U0bEZ2bHFJVGZzZjloL2N3djJCT2l4cHN3QUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWpkcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU1TNHlJajRLSUNBZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0FnSUNBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWp3dmRHbG1aanBZVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1BIUnBabVk2V1ZKbGMyOXNkWFJwYjI0K056SThMM1JwWm1ZNldWSmxjMjlzZFhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rTnZiWEJ5WlhOemFXOXVQakU4TDNScFptWTZRMjl0Y0hKbGMzTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGpFOEwzUnBabVk2VDNKcFpXNTBZWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xCb2IzUnZiV1YwY21salNXNTBaWEp3Y21WMFlYUnBiMjQrTWp3dmRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQZ29nSUNBZ0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJQ0FnUEM5eVpHWTZVa1JHUGdvOEwzZzZlRzF3YldWMFlUNEt1c3QrSVFBQUtmWkpSRUZVZUFIdGZRZGdWVVhXL3kvbHBiMzBYa2tJa0FBSkxSQjZVd1FSVkZCQVZGUkUxNjZmcSt1bmE5bGQzZjFjOTl0RjkxTlgzVDgyeExJMnhMWVdSQkVSa040U0FxU1IzbnZQZTBuK3Z6TTNOM25FQkNraEV2Y2VlRzN1M0prelo4NmNPVzF1N043OVpHdmJrMi91aGF1REhkcGdnRUVCZ3dJR0JjNHVCZXpZZkgxTEcrNWJOZ1oyNDVjKzF5YkNCMUpxZ0VFQmd3SUdCZnFDQXRSMlJBalp1emthd3FjdjZHMzBZVkRBb0lBTkJTaDJ6SlE5OW9iWlpVTVU0NnRCQVlNQ2ZVWUJrVDMyZmRhYjBaRkJBWU1DQmdXNlVNQVFRRjBJWXZ3MEtHQlFvTzhvWUFpZ3ZxTzEwWk5CQVlNQ1hTaGdDS0F1QkRGK0doUXdLTkIzRkRBRVVOL1IydWpKb0lCQmdTNFVNQVJRRjRJWVB3MEtHQlRvT3dvWUFxanZhRzMwWkZEQW9FQVhDaGdDcUF0QmpKOEdCUXdLOUIwRkRBSFVkN1EyZWpJb1lGQ2dDd1VNQWRTRklNWlBnd0lHQmZxT0FvNjkwWldEdlIwY2VhQlZwTm5aUE5yUjB0b0dLdyt3bmMwK2VvTWVSaHNHQlF3S25Cd0Z6a2dBaVNCd3BQQ3BickJpVjBFRDBOREtrck4wcko3U0xTekFoQ0YrTHJCang0WVFPcmtKTm1vWkZEaVhLWEJHQWtpRVQyRjFNNmJFQmVHdnZ4NEJQMjgzdExXMWk0YmVra05zem81dGllYXpmWDhPWHZnb0NUN08xTGJZdDk3VnVVeGdBemVEQWdZRmVxYkFhUXNnTWJ1cUd5eVlGaCtNUisrZWkrQUF6NTU3NmFVckNTT2pFZWpuam9kZjNJWXdkd2UwVWpBWlFxaVhpR3MwWTFEZ1o2REFhVHVoVGZUNTdNcHJ4S0k1dzVUd0VjMm50YldWTC9rODFWY3JXbHBhTzdVbklVUjdlMUt1dFNmbUhYRCsxR0VZSFc1R2ViMFZEcUlhR1dCUXdLQkF2NlhBYVd0QWF1M1h0OExIdzBVTlhnU1F2ZjJweXpPNXo4NnU4ejZMVlJNMFltSTUyTFRYMXFZSkczYzNKN2k3T0tLUkpwa2hmL290M3htSUd4UlFGRGh0QWFUdXBreG9wUURSNE5TMUVVMzQyQ24vVG1wR0FaS1BGdUJZUVpYeTczaTZPU1BBMXcwallrTVFIUm5FTHFRZnplK2o3bXN2MGZvKzlYZG5rd1BzS2NHa1ZSRjZMZFRlempXd0kzNU9qdllLVDRrQU5sdGJ6aGtVWlhNd0VUZUJrNldmVG5QaG1TYkw2WTNGdHQrZWlDR2NlQzdSUzNoTS9LVk9qZzRLWlN1MSttYStUbjNGOURUaTB5c1hONHJKQmlmQnE2L2h6QVFRc2JVN1RUTHF3cWV1b1JtdmYvQURibnR0TDh4dExRaDFwVytIaTgzTlpJK0RIMWJpcVgrT3h6MjN6RlcrSHRGNDFLU2Q4Y3kxNGF0akpXaXJhUlRPd09nUUwzaTd1NTVUL2lRWnE4VnF3WGM1bFdpdGFVWVFoWEZzb09keDJtSmZNNHZlbitCV1dsT0hBL2xWcW1oa3FCZDhTVDlPbTFwb0pnY1JUTnhZS05SRk9Ja2lLK2I1K294U29MYUp6K0oweHJSd1g2WGh5dUk4V1pCK3k5anZmdFh2Q2U2a2dBdGtRR1NZK0NWdHRPdVQ3YWMzNndtV3N0RExheHV3TDdkQ2RteEVCM2tpeXMrRDlLRVczNXVkblVKYlJBa1ZkUTNZbTF2SnU5cklXeDRJOVhaWGMzZ0t6Wnh4MVRNV1FLZUxnZXp1QXU5OHNoTzNQYk1kRnc3elFCdkxwRlF1eWM1Zk5MY1ZIdTdPcWw2dnZiSHhwcVpHL1BZOFg3aTcydEgzQktSa04rQlllUXVjVFk3SCs2RjZyZE5UYTBob0lEdTRxNE1GOTgzd2daZTdDY1VWVGRpYjJZdzJCNllobkZwenZWcGI1cTJwMllMNEVEc3NtaENzMmo2UzNZaU1NaXZjbkUwb3E2N0YvaHdLR3E2OG1CQnZoUHQ1d2RMQ2VXMXR4aU56QWtBTEd0eHpzQ21wZ2N6dXlyaytnU0N4d1Z6dk55N1VEb3NuaHJCNTNxZitkN21mUCszcG55eXJZbXBJdWdVT2p1SWk2RkxIcHQyei9WWDhsTFdOVmd3UHRzZVNTV0dLdDNPS203RTlveGxlSklac3RuME5Rc3NHaXhVeEFlQWNocEk2cmNndWJNYUJYQXRjblozNmRBMzhMQUpJMTM3U3Mwcnh6cGNwbURMUURWYk9nNVc3WldtZEJZWE1KL0ozdGtmeHRsclVMN0wwMnZ5UTdnUTdGRkh6dWUvT0crRHI2NlhhWHZQMmV0ei82Z0dNQ1BiZ1l1bDdodWc2UUFjdW9LbzZLMktqUFBEYmU1YkN4OXNUNlptNXVPUFJ0YWh1b21CeXNsY0NxdXQ5ZmZGYlRJbWt5a2JjZmVVNExMM3NQTlhsTytzMjRyNVZleERxWVllSk1XYmN1VEJLTGJRanh5cXhmbjhkekM3MDJ6bTI0Y0Y3bHNQTnpSVU5EWTNZZGVzTEtHM2tCc041Rm1IN1V5RDlIbUsvZHl3WmcyV0xML2lwNmtoTHo4SHloOTVGRzl0Mm91VnpFbDM4Wkp1blU4R1ptdnpHSTdXNDgvSUVYSGZsSE5YRTlsMUplT0hxdGJob1dpanFtNnluMCt3WjNTTUJwRDFGamJoeGZoeCtkZTFGcXEyTjMrM0JpNy83RXJNSHV2U3BxZjh6Q1NCTnk4bktMY2I2N0RwY0dPWk1tNWgvcHFPNUZZdG5Ec2EwY2RId3BuUGIxY1VFZjE5M1JTQk5lSndSM1R0dUZ2WFRLcW9QUVV3RFdRQlNkaklnNnJUNGp1UWxJUDRNZVhXM2lLU0srQ3lrYmRsMVZMMTJBYWZuTVVuL1haY2ZtMU5hVHB1OUUycnJMUlJBcEUxakMrd2RuV0RYM0taVWVybGZkaytwcTdMUXBSTitsejVFdFQvUnppcTR5emlrRTZsbmk3c2p6U2MxTkxZbEpwUzBMNkR1SWVNNmNqeGVUaVkwV2UzUjNPN0hrZThCM00xM0ZEZmd2MFJBTE5FRXhNYnZkdU52bjYvSDdHSE1EK00rWW0zM1ljbW4wTU9aV3E0TEY2aVFwSTN1QituUEZoZXQ1ODUzMFNaYVQzS0RhR1hRd3Q2T0dpMy9TWkJEQkpqY0x4WVpoNjNHMVJPdFpQejJyQ2lXcEh3WEdzaXJoVy9kMFZVRlRLUnRlYkZ0blIva1V3SGJrV2l1RHVxN2l3UG56VjVwK2xJdWw3dnpRK3E0aUJuTC80cFhUb1NMdE5YSm81MzFkWnprdW1BbGZ3ekhsdFlLSitFSlJTK1paMzduZjlXWERSL0kvYjBKUDRzQTBnZlEzRVIvUUdVVFRGRnV5S3FveDl5eFlmaXY2OCtEcjVlclh1V3NmTGF6eFNtMUxjd2xERmxWVjQrMDBrcFVsdFdxKy8wRFBCRHQ1dzFQN3V5eThEdDRqdlhiNk5QS0w2dEVTa0U1dUdJQkh6TW1oZmlyaVMycHJ1Y0NkSUNQdXhzWlVSWktKd2hqbUowZGtGVlVpMGVmV2dzWEp6dlVVQ3RzcElEbUNzVFIvRExrMFk2SjgvVmdQVWRzekM0QnR0UHNFUmpuaS9GMDJwdGROWitNVnRqNUxneGRWVmVIUTJWVmtGNGpQTXdJOXZIaW9wRTZiY2dzS2tWaGZRUGNUU2JFQlByQzBkRkVQbXhEZFgwZGpwWlcwVXhtUnJxN0dSOStuWXl0dTQrcUJWZFVhWVczQ3h2WWxBM3J6Y002T210cjQ1aTNwNkl3MkJFaEhwb0RWbDFrR3kwdEZueWZScHlQbFFIRmxFNmp2REEyT2dTZVpyTVNTS3pTSStnYWREWDlRWnUySnNGa0VyTkJyMDRCN2VDQW5QeHltbUxFbllLa2pUVExMSzFBWmk3N1NxNW1SZExSaTdiZ1VCOGtoZ2ZDZzNPbnl3Y1JKblpzckxTeUNnZUtPVzkxNUZFR0xJSjhPTS8rWG5CemNWRkJFNzAzRWY1MXBOZWhrZ3BVVjlaeFlHM3c4ZmZBMEFBZnVMbHFFV0s5cnY0cHZJVENPcHIrZVVqTG8xK0lwbXQ4cUIvOVZwNFVjSnFBa0xvYUxxMDBhNnV4bnp6SHhEdVJMZ2prcGl3OFoyYjdrcUNyZytKUm1yU1ZuTjhVMXE4WGZEaERIdVM3V05iM01yc3AyaDdIYlByTjhzbW1aTU5zYUdyQTBaSktGRGMxODAvbm1PaEw4eUlQT3ZkNG0yMFRwL3I5WnhWQW9oNExSVVRhSHE2dzRLNElPak1wZklUQmJFRk5tRzFCSDM4WGZtbHRzV0p6Wmo1bWhyVGl3UVd4aUJrVXJ2Qk1TYzNHbDF1T1lrdW1DUk1pUWpuZm9rSFFUMkpwUWxwQlBoWWsrT0QzeTJkUW0zTkJWbTRSWHY5a0w3VTdOeVNPOHVaRXR5S0x2cE1HcTRQYXRmUlJhLzBCTHZaMHl2czYwYmRpajZyYU50cnAxSWJjN0RGM1hEZ1hxZ2xITWt1dzlXQXVYcnA5TXNhdUdxb1k2T0NoTkx6OTZWN2sxYlRBMTlQanVCMWIybTJncWpsMmtEdXVtUlhFYXkwb0xHM0FsL3RxRWVqbGdZcWFTaXliSGtqOG5PZzhic1BYdTByUTBPSkFQSnNSSDJhUHE2aWRDb05tOGRoTldWVTlCdmhyVE5uSW96aU9uTFBmUEJLTDhGRGZqdG54OW5MSGc0K05vVm5yZ2kxSkZKS0NBRUhtdmFRa0g0OWZFWThMcGkrQ2k0c3pVdE96OFMvNkF3OFh0eURZMTVzTGl5dXhPOUNhVUZkcWErdHg2WjMveG9DaGdSVCtMV3B4aVpaVGJtbEZNSVYybEE4MWE4N0Q0Ync4ckpnUmlxbDNUTUNncURDVkxsTERqU1RwVUFiV2Zua0FXZVZORk1KVU03bFltN2dwYnMzT3hUV2pQUEhySmVQaFE3bzBOamNqTlNNUG4yeEt4YkVxVHd3SThGY0NXemFrb3dYRmlIU3J4OE1MWXhtdERhSHdzOGVSOUZ5cy9Ub0ZSeXM5TUhLQTVpZXpIVXB6TTRNZkpWbTRhK0hGQ09lRzFORFloSzgzSDhTcmU3SXdNenFDVmJYSVp4UDczWldUaHdXeEx2alZSWEVJRGZhSGhiNmIxSXhjZkxZNUZTbmxac1FFQjFJd2FOcVg4T2pPM0h4TUR3T3VXaHlMeUhDSkhnT1oyWVhZc1BVSWZzaGl3Q1U4aElLWnZpY3ltdzBwV1VzTC9OVFcxNk9wdmdRM1h4QUJkN01yVE01bTdFcXBKQzgzVWs1U21PdE1xbG8rODdjK0ZVQWE4aklDZWJVUHY1MHBaU2c2UWFTZVh2eHpDeDhkcjR5aVFqeTNZalF1dStSOCtQdjdLaWFXYTVmU2xGdXhyQlR2cnR1QUo5NDdqUGdCWVVyZHppOHR4S3I3NStEQ1dWUFZBcE82QXJQUG00Q3k4Z3BNbVRRT1JjVmwrTXMvUHNIRzVCb0V1RHNwRFVycWlMa2pUc0xZRUdmY3VtSUJ3a0lDa1h3NEExc2ZYUWMvVHhmY3NHdyt3a0lEc1d2UFFkeDhyUU5Hanh3dXR5a1lQU29PNDhlTndLOGZleHRWelZidVhJNGRRa2lpVTdzckc3QjRlamh1djJrZW5KMmNrSnlTaGplMnZzWGQwUlhSZ1U2NDdjYUZDQWtLUUNNWFJjMVRiMlB0OWdyNktScXhlTjVVWER4M0tob3BqRmEvdFo1OXRlSG01Zk9WRUY3OXIvWFlmN2dBZjN6b2FyWHI2eHJLbUZIRGtUQTZEb2NPWjJMbFZhdlV1QlNTbk9qLys5MVZtRFpsdklZMDMwZU9HSTZ4WStKeC8rTnZJNzJza2NxaWN3YzlPaXI5NkFzWkphMFErZHdVeEh4VHdBMXRtSzhud3Jqaml4RExMeXZCbWtmbWsrNlQ0TVR4MnNMRThRazRiM29pL3ZqVSswaWhGdVpHVGFlbXBoanYzVDhMczgrZkRDK3Z6dXgrcTlWSzB6SWZUNjlhaHkvMlZ5QXF5QjlKT1FXNGNxSTM3cjdsUmd5UXphZWRnOFdzdm1KaER2N2Y2ayt4ZmgrMUtDNWNXL0QyTkNNcCtRK0lHeDdiVVR6L3dobVk4dkUzZUhUTlhzU0dodEFQWTBWVkZUZXNlMmRpeml3TkYzMHRXSGp0dWl1TDhNcWJuK0wxYnd1Smkyd21yY2d0S2NMSzVhTngrYVhrVWI5T0htMGhqMTUzWlRsNTlDdjgvWU1VREE0Tm93bW1wYURvQ05oeFk2bXZxVWRPU3lsV1A3WUkweWFQVXp5K2NVc1NQdDY2UlpuNXNqNWw1ZlltOUtrQTBvU0tKcTFsRUdJRGF6b2hmNUIvSkhvaElLcm51UUtTdS9GVmVnSCtlVU1DYmxxK1VFMUtRMk16MGpJTGxEWVFNemdNSVNGQlhOQlhjRmQ1RDA5K25JVmlhaG1yYjUrT0JmTm5xV0UwTkZBYk9sYkk4VG9nTm1aUXgvZzhhTXBJTG8zeUZkZ00yZVlybkdnS0NaZ2NLVWphWjkrRmtRb0JXZHhORkRLSGp1VFFoR2hCTEhHUityRkRvckYwL2hqYzhmSkJUQW4zUmpPdkNZai9Jc2JUQ2JzT0ZhT0U1bFI0YUFDQ0F2MXdXVUlRWHRoY2hwWExoc0JQYVFMVXZxaVZqQmdhaHNlL3pNTThPaVpqQjh2T0REU3p2L1UvSE1QQzgyTVZMYVJNY2tuS2ExdXhOeWtMQThQOUVDcG1KcUdZWmtCcGVTMVNNMHNSR1dCV1pmTG02ZUdPaWVQSElwbDR5OEllUXROTHpKV295SEFzbVplQUsxWnV3NXdoWXRKcWVIZmMyT1dMSzUzYnp6dy9EYzdPakpSeTF4TDZtQ2hFc2d0cThPMkJHdXdwYWNKek4wNkRMRzZCdklJeWJONStoRnFPRlZQR0Q4YmdnYUVZRkIySlc2K2JnOG4zZllwSTF4YXN2RzBtRmkrY3JlclhNa3g5bFBscFp1YWt4UTRLUS9UQUFYamszbXRROWFjMzhOcWVRdnptL0FBOGVQZFY4UFB6UVQxTjR2UmpSUlJ5RHRTeWdsazNFdmZjZGdWSy8vSW05aVZYVWpIV1psVUV4U2h1R0xWMWpUaHdLRXY1T1lkRWg4S2I1dGZWUytZaWc0R1pUL2JVb0t5MkZrL2RPaDFYTExwUTRWTE5NSDZhamd2bmVRQTN1bnZ2V0lhYStqWFlrRlNQR3ZMazNaZkg0YWJyRnlrVHRLbkpncFMwTE1WelExay9pSnZLclRjdW9UYjNEbDdrbkxyVGJMWGxNNnVGb1VtYXkyczIveHJUcHlhcVByZnZPWXJIL3JtWndwQ0JEOUsxdzZlbHJ2Yk9XNThLb0hjKzNFcG1MS0h0NmtRaTJlRUk3ZitFSVdZU3o0ckVVRmQ4dnllWDZ1Z1hTb01RUjFwMVhUTW1qbzNHbkJramVtZTBwOWlLQ01MYVJndm1EM0lqRTA5V0M2Nit2aEd2dlBVTi92ZWpWTGh3REE4dmpjTlZsOHNpY01MQytkUHgzc1kxR01IRk5IWFNhTldiMUYvejNpWTgrbTRLSjkwZTkxMFdpK3VYbnNjRkxtYU90VjA3c1dXRjQ1RVVoaFdRVDcyV3JiUHl6ZmUveFUydkp5UE9iSTkvL0dZbVprNFpwZW9QR3pJQTlSVzdZSy9KRFZVbVBpby9odlRmNFE1K0o5VnlFVUQrMUJRUzRxaXovM1VmRXY0eWh3dklwTkdmbThQdzJFamFHT3N4YkdZc2hZUHM4RUIrWVNuV2JTN0JvdG1kdmg3SmdOOTdyQVpUcjN3ZnEvOG5FY3V2MHFJOVl1SmNNUE5EakwwaURFT0R6QjBNTEFHQTl6LzVIbmUvdEJjbFBFLzQrU016TVhlV3h2U1JFY0ZJQ0hSR0l4M2NzaC9wUWxkMUxtOFVNcm9tNE8zdGpUdHZ2YWJ6RWl2YkUrKzlCMUt4YnZ2SHJHclBoZTNMUlYya0JQVHF0Ny9GbngvYXovb2wrTzgvVE1CZkg3MUYzUnZnN3dOc3JzVGxqd3pCM0FzbXE3THlpbW84KzhvR1BQZE5EZ0o1K1BsWmFpTG5UUjJKZ0FBL3pKK1ZnTmMrWDRkYmwxK3ZoRTl4U1RsV1ByOE9mM3M5amJ0bkcxNThaQ28xamdzUkhCeUE1VXVtNDVXblgxVk9iV2xZYUZYRlZJVm5YbHFQSjlablk1U1BDZjk3MTNSTW56d0NydVNiUlpkTXdaOS8veEx1L08wUVhEUm5pc0tsb3JJR1Q3KzhIazl1eU1GQXN3UCtkR01pTHJsd1BEdzkzYkdDdEg1cXhXcGNQTXdMU3hiT1VzSkhOcnhYT2RhSDMwdUJEM2xPZUhUWm9tbVFqZXZLeTJkaHc0NDFXTStRZTRlWndWN3M3RnJ3eFZlM2RBaWZ6VDhrNCs0bnYxR2FraWRQSGdqdm5BM29Vd0cwZzZmWm4xcVpDcjhwN2lqaldhNTQraEFDdVNERTMrQk9wK3ZoL0RxOHNUZVpuakJtamRKbjJaemFoRGVmMWhqZjFpdzdHNFRvcmswSlYyNmlqK1RKUllNUTZPK25xcVFjemNZRDd5WmpmS0M3aWlJOHVHWVBFc2RFSTI3b1FPNzhnWmcyTWtUVkV6TkdJRGUvQlBlOHNSK1RnajNwQzJuRm45N2VqOFRSVVJnN1NsTy9kVk5UVlQ3Qm03N29iS3ZrNWhmajAyK1BZQko5SGR1SzY3RnJYM3FIQURLNzBRRktIMVBYKzRTT0pqTFV3WlJjakU4WXFnUk9lQWpITnRDWjJwRG12em1Xblk5QkE4TTVuZ0RFakhMQ29BRisxQ3cwVFd3bisrQUVkUWhEaFE4RmhUSXlRa3lzMTJsdWlJTVdvNXpwb0thV3A1eWxHaE9MZWJkMmZSS2k2V3Z5WjdPYnRoM0dsQW5EbWZObFZtdENjc0FFeitNN3NSMjU5bDFNUFl0TmRyajhkcUVBRXZkUlM1c0R4Z2U3NE85djdNQzM2ZXVVczN2S0JCL2NjSmMzd29JR1lQYk1NUjBOaW9sQ2JzUG8rRWk0RXdlQmZRZlQ4T2pMeWJob1VqRHl5aHV3NXNOOWpFUmFsU2FhWFZpRGU2NGFqdUFnalNjS2k0clJacTNCWTcrS1ZENmFvdUpDbEZkVThiby93c1BvaDVsRWM1Q2JqUTRIRDJYaTl5OG1ZLzZVWU96Skk4OS91QjBqNDZMZ1RYK1Q4TkNZUzdrcEVCZlJGQVgySjZYanNkZFNNQzh4Q0xrVmpYajJyZTNrbjJodUlJR0lIQkNDeGFOOU1USW11QU1mOFJIZDhlb2V6SXJ5VVdrbE43MjhFNVBHRHVLR0VxV0U0dFF4QTdDZTQ5TjVRK2cyYWNJWWFxRmE4Q2VOL3JnN0h2K0FtcDhQanoyWnptcldkcDhLSUg4Zk55VE05VVowQU5Wck1xUTRSQ1gwTG53cWtSOXZaa0V2SE9xbGlDNUVhWWp3UUZTRXBzNnJ3clA0cHNMcXhJUC9DV0lmUzdpYkM2ZThHUkdNVUlobUlGQld6dWhDYVRQY0lqVFNGUjVxUkNWM0tBSFJnc0tEZlZCUlZjZUZxRjJ2cDFPdmtkcUJPY3FYanVsV09GT3JLaXVYU016cGc3NFhpWW5ReURiZHFVMXhpNVgvSFNENGQ3ZUF4UytTU1BwdjJKR0ZKUXZxbWViZ1JTWU94czBMd3hFWTRFc1R5NEovYjlpRGE1ZDRjUUdZTVc5c0VCZEhwR3EzaWY2ZlhRZHlBTGNmczAxbjE1M2ZkRHc3a0dyL0lrNW9NVm1jSEYyVjMwWG1YZzl2YzlxVlg2bnJQUjIvMmJ6d2hpd2VXZVRQdlBRbDNCZzVreks1Vjh6Nm9ySTYrTkdISk5HdjVMd2NQTE44Qk02bnI4ZVAycDc0dmN5c0wvTXBXbVhuK1VWNzBrTHorWWl3T0p5YVIvUE1yUHhJQVJTVXFYazF1Smg1TWd3ZGNsZHB4SE9QaklOVHV5a2NOMndJbnZqRDRBNFVaZHhpTWd2NFU3dGFQREtJem5CTkFFbWZPWG5GUUREeFk4VkJQazdJS2FwREFUVkxFVUNPTkdlSFJYakNsMUUzQVJHT1I5THlFQjNCWERuZTY4ZmdRM1ZESGJKeVJJTU5WQnJQSUdhVkIvb3pTNTc4S3BCR2gvbEFEeFBIeGxRSHZnYTdPaktQTEU4SklPSHprQ0JxZkxJNXFkcGtFNWFKOE5jaGxKcng0bWxoV1BsRlBpWU9DT3lvcDEvdnpjOGZjMUp2dHQ2bHJmeGkydVh2bDJEUFpCSzN3b3FvUWE0WTVNdElCVFVnMFRaS2FpM1lzTHNTY0NVaHl6bGhrUzVZRmFRSnBDNU45ZXBQMFVLY3FEcUxJR3hWY3lnc3BCUXh0YkMxWDNxWHNyMWFPbllQOExnRTc5SXZzcHhoVEFtWHQ0T1RDQ0kvT2UwdnV5ekQzTlZWOU5Qb1U2L1hPcjFQWVNacFNlVnpkRkdSVlEvSEk2NDZrV3F1VkM4M3BsZmpXRmFoSm9CbzlreWlGaWZtV0ZWVkxkWjhrWUtMNXlReS84Z0RVOFlOb1JOYzArYlNHQVZNeTZ1Rm5aZVdYMk9MdGVwS1ZwUzgya0ZoeDN3WEVlVE1TRGdlaUx2azFZaHFiMHNObVl1VEJSR1dmMXFWaElpaEFiQndjVXJQVFd4UGp2T0VlYnZnS3g3OWVQZWVXY29wSzZINXV2b21aTkJQY3pqdE1GcXNqVFJIWnRwMHBVVXY5UUpKb1pCNVZXRjh0S0RWVW9jNWtRMHFKU0tEY2txRnlOc3hMMllJUGp1dmpPWWY1NXBqa2dWdHNWajR0WVgrcGxhVTE5RVliQmNPYWxlUXBDZnlnOVNUbDZRcmlBRFZ3YzVlQWdmNkwyblN5cDRvTE1sYmRuYVNtMFhjcEEyQzNOYkM1OUswNmMrbVVlM0pkYTE5clU0TDY3WFhaNEZxMjNhM2tqSTJsSnRYd2tpYnI5S0VybDA2Qjl2MnY0SUtwaGlZNlE5VVBDYU45VEwwcVFCYWNjVUVYRFlubnVueER0eUpITEZsWnpxZSt2UW9SZ2E1TXZMUmhJV0pJWGorZ1JGS3JaWmRVaHlLb1R6L0pFQzZualZvcks5RjVtY0hrVFBSRjlZbVRwNzB4WWwxZDZYVzArWkdwMllWR2FsWmFUZytQQzhEcHpwVU1nU3NmREhlVGZCaVZFTkFiTy9Dc2daa1VLMHVLNitDSDdXTFVPNVNkODMwdzdPdjdlZkt0NlBxUG9RYXhSQlZYNWp2VEVIajIxTnJSMnE3VXpCdTJabUtjV05pbGNONUZxTkVBb2ZUY3JGN2V3M3l5SXdTVnA0K1pSeGM2SnNRT0VLdDREcytnaVhHTEF0TkZaM3d6V29WeDJZMkN1bmZDK25jWUxWN2JCYmNTVFRWYlQ4aUJJWU1OZk5zRlZNMzJnV1FYbEV5akMrSU5OUFpQVkpwQ2FYTXgvcmozOWZoMmUrWkM3U2pFZzg4TUtCREFHblVrMVFINGt0d3BQWVNGeHVHOUkzZklucXhHN2JubHVPYU1lNzQ5UzNMNlVkeEp0Mk9ZSGRTcm9vSWlxYWJucG5EcU5ITHdOUndPRkM0dCt5aGhoUGJqTWxCTHZEMDhzTTNSeTI0WnE2V0J5VTRSNHBXdnprZmxtZ3ZiTTRweDgzanpFcWJrYjRsSVRDanhJS0thb2JxQ1NJNDQyTENrYjc1RzBSZnhudzU1cDlGbXVzeHNOMG5KeHJWTVdZMWUzbzBVc2hvd2k5MmNEaHpuajVGR0ZOYXhOSklLeWxsMmdqOWZBU3BVMWhheHlqRDhadElja29tTHI3L2ZYeTJjaW5kQ1pGc1B4ejMzbmdCNXR6N0VXYVBqdjVsQ0tDRWtZTVVFZlEzMlpIeW56L0EvQmwzcERKaUVSUGxoOG5qbWM5eWx1SDQ1V3JIRU8wNGZMYzVRZ2xHZldHSkNTT00rTWxYQi9EdXhnd3NYVkJOVGNDZmt6TUlUOTh3R28rL3NVM2xMNjI2Y1FhR0RJcFVHQmNVbGVQN3BGSmtWMW00a1BNWWFlRWhWNnJWRDk5ekxhWWs3cUFRdGNjY2huZTl2VFd0VHZBNDJjVm51ME9xYmErRFJwMHQyTlpSNi92NGdYYmNJYjJhS2R3UEhpMkNKUE9KcVJYQi9CQ0J0TXhDYW14dTJIY29CeE1UaHlNd1VET0JheWh3ZHlkbEkxUVl0MVYyYk52bTJyVVl5VDd1Mk9sQnM4QWIxOThXeUZ5aVpoUlZzWDc3UGJhM2FqSllTclRTNDlxMTZhTGpLNnZwQzAwK0s2bHROdk1JajYwQWtnQkdBMDNUSVR3a0szTW9VTStkUENzckUrQ0NkeHpSaHVrVE5VZTVYRlBtS3YxYU93L2tZdDRzalI0ajQyTHc0QU9Ec2VyTFE0aW5tYlRpeWtzd2xCRk1nYzA3MHZEM2J3cHg1NG9xbWk1dUdCVWZnNVZQSitMRmovYlNCTFRESlhjUHhBM1hYb29JK24rMlVsaDlNWDJ0MHBqVXpYeUxIeDZEeC84MkNvKyt0d2ZqL0p4eEZhTnU0bEFXa0VqZHRyMjF6TlVxcExPNlRtMXU4WEdEOGNqOXNYamg4eFI0Y0RpMzMzd0ovVDJhVnBwSkxmYURvelUwOFNSQVVFNUI1ay8vWFFTZXVYMHMvdmo2VnRYbVB4bE5rd2lqYXA5SnJEOGtVVUI2bTBnemplWmFlUW15OTlBZjljRjIvTzZlSUJXVm5EYVpiU3c3alAvNWR5NW1STkdNSkoxN0cvcFVBOUx0L0ZhcWd4S1NsbEFoalZTTm1lbDQxRlA3WlJmUXRRUFpNWG9YaE4xa29XanR5cWVFWXVYVkhSeWhHdi80SzhldzRic2tYTE40bWpyTGRNc05pekZqU29LS3VBeGx5TnRFZjRLWUExOXNQSURNU2d2Q2FYKy8rTTVPQk5Hbk1uaGdzQXFCTGwwMFh6VmZWbEdEb3p5bkZETW9vbjNKU1hFbkl4eUhBMWVudnFEMVQ2R0wvbDJOUVZadys2clZ5NlVOOWIzOUdVckh0Y2tmb2s0SDBmbS85MWd0ZlIzaWpOWWM0cktnTTdKS2VGcmRoSDJIaTFTVVR2ZGxWZEkwKzQ3SmhBTzhuWmtzMk54QlA3MHZDOXYwOWVTaFdUcHNkWWpuSW43MStjZVlhNVNCK0t0ZjFBUThMNnBqSU8zbWk2QXVnbG5IWFp1WDd1ZGNxQ1RoN002NjVKMzJkdlErNVZQTUNVK2FZWHV6YWxGYlMwMkNmdUFCRVNINDYrK1c0OGJVVFBxOHdqQnFSR2NVVC9IYUtCTTI3Qy9GOU8rVHNlQ2k4ZXFjNEVPL1dZSExMMDZuYWVyREJSeWh1a2cvVm9EMzFoK2hXV0xDMm4vdnhoMHJac09EQXZ6dTI1Y3hYMmVDTXJWanlCUGkwRzBrZjIvZmwwMUpMQm5aMnBoRVl4R0IvOEE5MXpQaU5wR0pqcDRZeVBDK2dHalFuMnhJd3NqaFh2Z211WnpKaVVtNGZQNEVtc0plK08yOTErUFNpMUtWcjBaU09hUTlDZVcvdzZUVGtWN096TTdudlYvdFkwckJMQlZOdStXR0pkVEtSdE5zczhOdytxaEVFTXU2K25qOVh1UXljejJDcHJHT2svUXRQakcvZUROZTM1S1BHUk9UTWZmOHNVb3pYbkgxUE94S1hvMGNucC8wZFpmTTY5NFZRbjBxZ1BSRjMrNW8wUWpRSVlWRmZSUlN0TnZYK2crdHFOZmVoZUZOUEZObHBkOUpRRHVYcElrQTZWNHIxYjZJUTlEU1lvK3dHQS84MzNzSG1SRnN4YVZ6RXBTZFBHcGtKd05uNTVYaXc4OTM0NW1QbU9UbEs2ZlZXL0hhNW5ScVE4L2g0ZXNtY2VlTTVnUTdvYXFtQVcrczI0YUZzNFpxQW9qSWFJdnArQVduNDJEdndHUThGVDNTN0h4N2t6UHNWSmxnTG1lbnVIQWRuU1dBSTBUand0UFVmTG1tWEU1TThiZlZpcVJjUUVndVo3QTJNUlNiZkNTZlVieFlSZnZNN0NJa1pWWmhERTJtSXpRanMzSkxNR3dJQlNYeFREbWFoKzl6R2pHUCtUbEVna2N5T2s5eXQ5bVpVTThUNzJOb0NuMndLWXNteGk1cUdFTzUwTnhvUW5DaE1PSUphb0p5MkZoQUh0Rmh4MnhjOEZ5YldnUXlwdmI1a09pVkErZW5jMGJVTGVxM283M1dyOHlaekkzYzQ4SjhGaVdBYlNaUHpUR2QwUlVOYlZqNzJSN2NlSlU3QW5pTVFoYXV2S1QvTFRzT004QVJRSzNXRDQ1c1kyWjhBQVd6UFo1WXZaTWJZU3RtVFl0VGp1QnhDU01WQW1KdTd6dVlpVlZ2YjJVa3lvTEpvV1k4LzFtYWNqWXZYVENlamwxZmpJanIxTjRMaXl1WWZyRUZiM3g5akVjKzZFQW1Id2xZbUY2d2JYY3lCZzRJWWg1WHZDcVR0L0tLV3J6OTBUYTh2WmxhcHFmbWMva3pjUkZjTDVnZXovd3NEeVNPSGFYcWk0RE5ZRjdabSt0MllPM1dYSVJUQUVuWnMrc09LVC9ScFJlT1Z2allKcWlLWnJYdWl6MTRnUzRQMlVSS0dkR1RlUk1RZWxucFErSXpSakdZRWRWL3ZMVUx3MklpbUVrZHlDaGVNRzYvYmpadWZYSVRrME0xY2EvenA3cjVETi9zWml4Ny9yVGFreFBaWCt5dHhJNlhMMGRpd2hBVnhlZ1FNRCtCbEdoQ1V2ZHpSbHZtUGZBVkZvN3p3NGRNOTM3K2hsRzQ3ZnJaaXVGdHBiTTBKNHRBeWlRVi9kYUgzc0syMUVxRThqeVB2a0Ivb3N2akxzc0NqQTF6cDBOUmtxdjBTeDFmOUFMVlgxNUpQWlBDTE1wSm5scmVpRWxSbmtpTUQrRmphTFVvUlE3OVExdjI1ZUVRRDJJTzVNVEtCdEhNcEs1RjB4a1c5WGRGU1ZrTlB2ajZDRGFYY0lVMGt3blRpN0Z6L1czMHZjUkI4anZ1ZitKOTdNMmdxczFJaGEyalQ1akNpVUlpS3RDTmowaHc1RmtzQzIxOVJ0ZTRzS0tDM0hnOHd4RlZMTXRpK0Yxb0k4NWNIemNUb29JbGxHMUhIeFVUNDNqZXlJbW5EcVd0cmlEeVhXZ24vVVl3UjBmYXJhaHBRamJURHZTMUhNenhCUG00cWtXUVhWekhuQ2dlaU9WRmNSNEhjSkdFK0dwaDJ3SnFQY1ZWUE5QSE5pUi9wNG50RGlkOXZaamRMWE5kd210RlBNaytuTkVkSjVwK291a2VZVlJKMFo2NHVUazdZQURIS1E4c0t5Y091Y1NoTzdEdFYvaW5nWXZvYUg2TjJ1VzdxeSthVmxHTkJXTUhlbUxLV0liWTNaeDRqd1Y3RCtWakk3VzVoRWhHbXpnT09laDdqT09UeFM2MHl1RWZXcGdSNjRQSll5S295UWlQMGM5QzArMlRIM0tVYVJmQ3FKalFXMmhSVk11TWRRcmVLV1BDRlUvSWVJdExhN0g5WUI3MjU5WWhnandxa2NvQUpvQkdCRElYaXRlVHNxcTRtQjF4M3Znb1BuVFBySkpKdjkrZGhZMkh5eEhaTGt4a2ZpanprRTFjWmhLWHNmR2hwS2VMbXV0anVSWDRmbjgrY2lxYktheWNGTi9Jbk1rOW1TeExqUFRBcEZGaGtLZ3pTNUZmVkkxdEIvS1FWTkNBQVY3Y2xGZ3FjKy9IY1lRSFNCMCszNGx6bEV2L3BSd1FydUxSbWhnNjdmeTh0UDRrVGVad1RyVnFYMVh1eGJmL1NBRWtrMVhFeDM0MFdDVFVydTIxM2RGVW1ER0lqT0xDU1pGSmswaGRCWGZ6a2daR1JkU3Fwam5BeG9MY0hOUkNGcWFVMCtJYmNtdXcvVytYZEpnMlc3YnR4dk92Zm9xU3lqb3NXekFaU3hkZHBOVGJJM1Q0WHY3ZmEya095WmtxL3BOT2JFRDZLT1ZqT2VySUFONFUrRDRNZjNjdDgyYVp6bndTVFN5Z3NDUWE4S1pwNjZ2cTJ6VFk1YXN3ck54VFRGcHdqZkN2amZDa093V1NEclYweUpkeHJISldMNEJ0T1RONkp6aktmUkxwS3hITmhpRFhaRU9TZnVVc2xveEZudGxkMHg0TjlLTzY3ODVYUWJWRlBVcFhFamlEYUtZSzNnSWllRXM0emdaWkZLem55VmQzb1BkYnlnVWlnbDRlV2hmb1RwOVVGN3JaM2l0Q1NIQXA0VDBTbFJQY1BOVjlKclhReWhpbDh1QzQvRGdHRlZVa1VqSUdlU3hNS1FXVGl1VHhIaFBiQ2VkaWQ2WkFieWFlZ3J1OHBQMUt0bDFLT29tQTFQcWcxVVVUVUlTTUxIVEJXNFJRQVlVVldRa2hOSDhiWmE3WUIrTmFta0JuZlgrYXZzSkRPc2g5T2k1bDdiaklWVG5KSHN4eFMrNmM3ZU5qRkQ2a2JTWEhXMXpQWUFwQjZoTkZCSkpIdlRtM2VuMGRweUxTWGNDWE5QZmdTNFNlK0xHRXp5dllwNEFiNlJOSTNEb3hVOFc5OHRiSmJiM1NYUDlvUkFncE80ZE0yRStCTEE2ZEoyVHlaSUdLSUxBRnVhNVByR2dqbzZrNXZQVHVEcVVHUjRRRjhOelhXS3JidzVYMjVza0RvZ0tpRXIvMHJ5MktZWVZCdVBuK0NHUkJpSlluMTRVeHRGMjNzMHdXb2E0MXlTSVViVWZTR2dRRUovM2FqeHB1TDlEdmtVT2JBdkxiZGdIWWp0V1dEbExQalFJbm11RlpBZjJhMEZNRXBEQjNBQm1XdVpvS2RGd2l2TVcwMGtDbmwvd1NocGRyY2o5SjNDUGVlcjhEMi90bFZiWEFwWTJlUUhBVDRlSXZrYnQya1B0VU9YRVVSVmFuclZ5V1BrU1FpREFJb0tDd0JibEg4Qlk4QlZUL0xMT2xrM2FsblpZeUdLbkhEMWNLdlJnNm5LVkUycEZrUzhsN2s5L1NudFN4cFQyTFRvZ0xtK2pnT2FrcklHM3BXdTJKZUZUVlpXWEJTZWNYUVZXME01azd3VS91OTJ1bm1mUWxaV2NET21mbE5Gcy9PMmoxakl6cXJ4YzZsWWs2SFpDSjBQYUY3dThXSnBMakRwdFNLdEQ2ekplNGRzRVlSRE9DNE1wRkk2WlJEcU1ReCtocmVmbTluZGllVGpPU0prQlh4ck50dVRzOHV5dVRlNFNKYlJlMmJUczlmVC9SUFNjYXEvQmpUOC9tVVl0SjNycEFUN2lkQ0ljdVRTakIybE8vWGV2cXYzdWlyMVU2N2tid0MrWTkzYU8zYWZ0NUlqcnA5WVJlb2psMUFQcytFUi9wOVU0VkY3bnZaUENSZWllYXc1TnRROW81RXpnekFVVHFpTVRzUzVEdVpDSEx4UFJ4MXljOVRGbG9ZdnZ2ejZqRXl3OTlnZG5SSGdpaVZpUklaNVEwWUN0OUE0azg3eFQyRThMbnBEczBLaG9VNktjVU9ETUJKUGF3T0E4VS9OaUgwUk5OeEV3UjhTSHZ0bUpFRmJORXU2NHVkcnpKTlJGMmNwNUtkaWZOMTlCeCtaejZJb0pSY1BTa3VUWW5paEVpT2t0VGNyUWtOek5ObHpsUjd1cjZxZXl5NTlRQURXUU1DdlFTQmJUWTRHazBKcnQ4VEtnek51M01WRkVOQ1NlTFpuSXlMM2xvazBEWHgzRkl5RmFndTdiMENOdUJRN2xJeXEyRlA1MXFZck9leXlCcWJCT2RPeElkRWorQnZPUllncFRKTlFNTUN2eW5VK0MwTlNEeFE0VFRjZmpHaGpSNDhPRGZndGtqNGUzNTQ2Y1pka2RnRVJ4dWZNWktqU1NKOFFsL0txTEVDRXc5SDgwZ3lWanlqSnV1cHAwczJJT0g4L0RNNjl2Z1FIVklVdFQ3eXlKVzR6UGtUWGVzWUpUOWgxUGd0TVB3T3QxRVo4bG1lRlZDc1dKZXFDaUlmdkVuUHNXczZyb3VKZUpqQzNKZGl1UXpqLzE0VVZCNU1Qd28vcnd1Vlcxdk03NGJGREFvMEE4b2NOb2FrTzNZQnZLc2pQaUMxQ253azVVS2xENFNmcFZRc3c0aWtDUS9vanZKSXJYQ21lb3ZKcDVvUHAxMzZYY2Jud1lGREFyME53cWNzUUFTelVUTU1SRW04am9Wa0tRd0VUbzZpUFlqUndSNkFxbC9ydnQ5ZXNMZEtEY29ZRkRneHhRNFl3R2tONm41Vkcya2lYN2hGRDdsN3U0aVlLZlFoRkhWb0lCQmdYNUVnWjdWalg0MENBTlZnd0lHQmZvbkJRd0IxRC9uemNEYW9NQXZnZ0tHQVBwRlRLTXhDSU1DL1pNQ2hnRHFuL05tWUcxUTRCZEJBVU1BL1NLbTBSaUVRWUgrU1FGREFQWFBlVE93Tmlqd2k2Q0FJWUIrRWROb0RNS2dRUCtrZ0NHQSt1ZThHVmdiRlBoRlVNQVFRTCtJYVRRR1lWQ2dmMUpBZjhwRi84VGV3TnFnZ0VHQmZrc0JPWHBsWDhjL2pkTDFCSHEvSFpHQnVFRUJnd0w5Z2dJaWM1VHNtUlRyeHIrZnBQMWQ3WDZCdVlHa1FRR0RBdjJhQW5MbXM1d3lSMlNQNHhWemg4TFBNeFhiVW1yUnlLZUdhb2RLKy9YNERPUU5DaGdVT0VjcG9KNTR3VCtPTW11MEp5NllQQVQvSDB1a1YvOVNxU3haQUFBQUFFbEZUa1N1UW1DQ1wiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW1nIFxuXHRcdFx0XHRzdHlsZT17IGJ1dHRvblN0eWxlIH0gXG5cdFx0XHRcdHNyYz17IGZhY2Vib29rIH0gXG5cdFx0XHRcdGFsdD1cIkxvZyBpbiB3aXRoIEZhY2Vib29rXCIgXG5cdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcykgfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tsb2dpbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgXCIxMDAlXCIsXG5cdFx0XHRyZXN1bHQ6IG51bGxcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHRcdGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanNcIjtcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fSAgIFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0cmVsYXlvdXQoc2VsZik7XG5cdFx0XHR9ICAgIFxuXHRcdH0sIDUwMCk7XG5cdFx0ZnVuY3Rpb24gcmVsYXlvdXQoc2VsZikge1xuXHRcdFx0Z2FwaS5sb2FkKCdhdXRoMicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgaW5zdGFuY2UgPSBnYXBpLmF1dGgyLmluaXQoe1xuXHRcdFx0XHRcdGNsaWVudF9pZDogc2VsZi5wcm9wcy5jbGllbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aW5zdGFuY2UudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHVzZXIgPSBpbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKTtcblx0XHRcdFx0XHRsZXQgcHJvZmlsZSA9IHVzZXIuZ2V0QmFzaWNQcm9maWxlKCk7XG4vLyBcdFx0XHRcdFx0aWYgKHVzZXIuaXNTaWduZWRJbigpKSB7XG4vLyBcdFx0XHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQuaWQgPSBwcm9maWxlLmdldElkKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQubmFtZSA9IHByb2ZpbGUuZ2V0TmFtZSgpO1xuLy8gXHRcdFx0XHRcdFx0cmVzdWx0LmZpcnN0bmFtZSA9IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCk7XG4vLyBcdFx0XHRcdFx0XHRyZXN1bHQubGFzdG5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5pbWFnZVVybCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcbi8vIFx0XHRcdFx0XHRcdHJlc3VsdC50b2tlbiA9IHVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG4vLyBcdFx0XHRcdFx0XHRzZWxmLnByb3BzLmdMb2dpbihyZXN1bHQpO1xuLy8gXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHJlc3VsdCB9KTtcbi8vIFx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGNsaWNrQnV0dG9uKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5yZXN1bHQpIHtcblx0XHRcdGxldCBpbnN0YW5jZSA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7IFxuXHRcdFx0aW5zdGFuY2Uuc2lnbkluKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdGxldCB1c2VyID0gaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCk7XG5cdFx0XHRcdGlmICh1c2VyLmlzU2lnbmVkSW4oKSkge1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcblx0XHRcdFx0XHRsZXQgcHJvZmlsZSA9IHVzZXIuZ2V0QmFzaWNQcm9maWxlKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmlkID0gcHJvZmlsZS5nZXRJZCgpO1xuXHRcdFx0XHRcdHJlc3VsdC5uYW1lID0gcHJvZmlsZS5nZXROYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmZpcnN0bmFtZSA9IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0Lmxhc3RuYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7XG5cdFx0XHRcdFx0cmVzdWx0LmltYWdlVXJsID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuXHRcdFx0XHRcdHJlc3VsdC5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcblx0XHRcdFx0XHRyZXN1bHQudG9rZW4gPSB1c2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ0xvZ2luKHJlc3VsdCk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlc3VsdCB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdMb2dpbihmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmdMb2dpbih0aGlzLnN0YXRlLnJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcblx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxuXHRcdH07XG5cdFx0bGV0IGdvb2dsZSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFYNEFBQUJjQ0FZQUFBQnB5ZDUxQUFBQUFYTlNSMElBcnM0YzZRQUFIdnRKUkVGVWVBSHRYUW1ZRk5XMS9xdlhXUm5XWVFZSEJNZFJoSEVRa0VYRGFDQ0lHdHkrTVJIVUNDYmlrb2R4UzRUa2tmY2VXZFNFR0kxUGVaRmdWQlFqZnUvQnA0bmpVOEhsZ1lwaEJKUjlHMGRrR1ZhWmpabnB0ZDY1M1YzZFZkVlYwMDFQOTB3M25QdDkxVjExMTNQL2UrdmNjODg5OXhiQWpoRmdCQmdCUm9BUllBUVlBVWFBRVdBRUdBRkdnQkZnQkJnQlJvQVJZQVFZQVVhQUVXQUVNaEVCS1U2aTQ0MFhaM1ljalJGZ0JCZ0JSaUJGQ01peDhvM0YwSzJVZ1NWMGliaXg0c2NxajhNWkFVYUFFV0FFVW9PQVlQamk4b2N1bjFreFpveGMrRnRIM2ZIMjRCNkRMdjZkWkhGTWtDeVcvbWFac0Q4andBZ3dBb3hBOXlNZysvMkhaYi83bzZiRG0zKys0YjhtZmtVVUNlWWZOUU13WS95QzZROHBHSExwT2tteTlPcis2akFGakFBandBZ3dBdkVpSU12K2hoUDdQaDM3K2FJcFgxS2FLTW5mWnBLUkxYL2d5QVdDNlk4OXg0cUh2dXRBdng1QzQ4UE9ESUdqVFg0ODhaWWI2NzZNd3Rnc0Nmc3pBb3dBSTVBU0JJaDM5eXdvSHZGN3l2eG11cUtZa2hFM0Y3TUFoOFdTOVMxQkVUTjlnVUpzSndaR2dSVTdSb0FSWUFUU0FZRVFEeGRNS1Vxelk4cjRKYXUxVUJEUGtuNzhUY2hZeFk4VngyUUVHSUhVSWhEaTRhZkUrTTFVUUttbGxITm5CQmdCUm9BUlNDWUNncGZITGZFYnpRU1NTUXpueFFnd0Fvd0FJNUI2QkFRdmo0dnhDMUtpSXFhZVBpNkJFV0FFR0FGR0lNa0lHUEp5bHV5VGpESm54d2d3QW94QXVpUEFqRC9kVzRqcFl3UVlBVVlneVFndzQwOHlvSndkSThBSU1BTHBqZ0F6L25SdklhYVBFV0FFR0lFa0k4Q01QOG1BY25hTUFDUEFDS1E3QXN6NDA3MkZtRDVHZ0JGZ0JKS01BRFArSkFQSzJURUNqQUFqa080SU1PTlA5eFppK2hnQlJvQVJTRElDelBpVERDaG54d2d3QW94QXVpUEFqRC9kVzRqcFl3UVlBVVlneVFndzQwOHlvSndkSThBSU1BTHBqZ0F6L25SdklhYVBFV0FFR0lFa0k4Q01QOG1BY25hTUFDUEFDS1E3QXN6NDA3MkZtRDVHZ0JGZ0JKS01RTnAvY01WM3VCN3Vtay9oMmI0WjNqMjdJRGVjZ0wrNUNiQklzUFRxQTB2dlByQVdGc0V4ZWh3Y1l5K2g1NzVKaG9pell3UVlBVWJnOUVJZ0xSbS9MTXR3ZmJnUzdXK3VnT2VMRGFhSSsrc1BRRnplclp2Zyt1RGRRRHpiME9ISW1UNER6Z2tUVGROeEFDUEFDREFDWnpJQ2FjZjQzZXYvaVpaRi93bmZsN3NUYWhmdmpxMW9tajhYdHJLaHlMM3JKM0NNSEpOUVBweUlFV0FFR0lIVEZZRzAwZkhMYmplYW4za2NqWE4va2pEVFZ6ZVNkL2NPTkQ0OEd5ZGZlQmF5MzY4TzRudEdnQkZnQk01b0JOSkM0dmMzTmFMeEYvZkJ1M043MGh1ajlaWG40YTNiZzRKZlA1NzB2RGxEUm9BUllBUXlFWUZ1Wi96K0U5K2dZYzVzK09wcVU0T2Z3NG5zNjI5S1RkNmNLeVBBQ0RBQ0dZaEF0ekorMmVOQjQzODhuRkttWC9DYlA1TEZ6OWdNYkJvbW1SR0lENEV4SSsyNDVUd0xQRjdBYnBPeDVuMDNWaHlOTHkzSE9uVUU4Z2ZZOFBOS0sreUVONGlESHR2cXhvSXQ4cWxuMUkwcHVwWHh0eXo4STd6Yk5zZFZmZHQ1RjhBeDdsc1FWanVXWHIwQnN2enhrMm1uZDlkMnVOZDlBdS8yTGRwOFNOSS8zWm4rWkhyaHAxeGd4Vm05Sk5IL0FPcUl6YTErMUgzbHd4c2J2Tmh5VWd0SjRLbWZEVXQrNEVSSk5qMzVaTHp6UmhzVzdNaWNUbnZ6TlZtWVZXRU5WS1Zobnh0elh2WWdSWE5GQS9DUzc1V00rZ3k3d0k2S3dWS1l1T3l2UGNUNFU5ZW0rZjJzdU9OU0cwWVdXWkNsNGlBbmp2bXdmcXNYaTdlYzNtdHFoV2RaTWI0MFVuR3Z3MGVNWDR3Q21lTWkxSGN4elc0eTB4VG1tckdjYmRpRnlMdjdmdGlIVnhoR2RkSmdrSHZiTEhqSXBMTmwwVlBCZ2VRMFovcmw1WGI4MjFRSCtnYjVud2FYdm4wc0dETFFoa21WVHV6ZjZzSzliM2pScklveGVadzl5UFNGbjFYQ2xaZmJpUEY3VkRIUytOWmh4VFVocGkrbzdEblFqcXY2ZWJBd1U2WGJKTlhIN2RPMm1aRDhVK01rM0htakU5UFBOK2g0VkdEZkFndktTdTJZZm9VUEsvN3V3c0xhMUEwK3FhbGZuTG5xOEczWDRSOW5MdDBhclZzWXY5L25SY3ZUajhXc2VQYjBtY2o5MFk4aFdXSWJING1Cb2VlVGkzRHlyMzhPYnVZNlRkVTdZeXF6OER1YVpzYmpTb1k3c2F5SGhLa2tGU3ZPcWR3by83YUlwS2g0WmM2L2pKWkkxVEtIYkZOSzlmV1JNUC91SEZUMm9ja2NNUmViMVkvbm5tckRxMFl6T2RNOGt4Vmd3WUw3c2pFNkw0NzhzcTJvbXBhRGMxZTI0c0dhMDVUNXh3RkRPa2VKelZGVFFmMkpkK0FzWDAwOTJYeEttSDNUYmNpYk5Uc3VwcStRS0ZsdHlCTzIrNmNwMDBjL08zNXB3UFJiam9zcHRnZWI5dm1GdGtmanNnWTZzR1J5WktCWXZkbUxCbFdNOWV2MEtWU0I2WFpMb3UwblgwVVlpYmZSajIzcXlxUWJ2YkhvaWFNK0JUbkJUR3lCSnBTUVo0K1ZhV3JDNTh3eVl2b3lxUlc5K0hTbkY0ZGFJdTJpVUZCeFJSYXFjcFVuL2s4bkJMcEY0cGZybDhKNTRRazZhcUVOSjFjTUlWMjlWZzdOdXFZcXdNRFRDYWgwb0dYcU9CcllOSVQ0c2V6Rk5pdytxUEowV1BESUQ3TXhucVJFeFpWY2FFUHBLbDlBRjk2ODE0TWJIL1dnT0ZkQ3kwbFpvd1pTNHFmei84Sy90V0toUTBJeFpOUzcwNW5TK0dpTFZSLzloTWF0OTRpdm1FN0Z5aTkxNE1wQ2JSYnRSenlZLzV3Yk5TcnY4bklISHJuT3J1cWpGdHg2bFJVcmxtZWdMa1JWcjlQeHRzc1p2K3hwZ0h6c3pRQ1d0djd0NlBIRG5UajU1dG53N0M0SStFbDUrY2lkZGUvcGlIWFM2M1JvazF2TDlFVUpiai9tTFhWaCtmMU85RlJLcEtuM0JIcW9GZEp4cmdVM0Q3UEFFUW83Umd2QjFZWUxnUktxS3UyWU9OaUNvSkFwNDlCK0gxNyt3SXZXczBuWFhpZ2h3SGZiL0ZoQmkzbktPa0x4QUN1bW5CVlVIem1JT2I5ZlF3Tk9UeXNlb0xXRW9hUjJDamhhVk42OGlYVHpDU3dDamhscXc3RDhFUEZlR2U5dTlLRSs5Sml5c21tZ3VYbUVOWXhaOHpla3c5YnByOHVKcmt1SUxqZTlVY2YyZUFuVEVGR2h2OHFSTnB5anZHMUU5d3FpVzJCbVhCL0Nmb3dWVHErRVVyRUlIM1lTTGhwcmc3dUZQSnA5ZU5Wa1VkN2JSdUc1VnN5WlRHVXFtRk8vV1ArRkI0dE4wb1NMTUxpWmNabENlQ2lROUd2M0VkT3YxY1hkc3NXTngybkJkLzdZeUF5ejV5QVNPaEFVT25UUkE0K1RDWmNKNTFoUmxCUHNHeDZpYzhjdUgxNEs0V09VUnUwbkZwcW5VOXNNSzdTQXVqazVHY2VQK3ZIQnB4NnNpamtiVEt5UHE4dVBkWi9mMDRMcEYxT2ZEZEZuSS9vTzEvdncrbW92YXJwUmNORzFhS3hxZEQ1Y1BySWM4THZDR1VsWmZ1VGVXSWYydFlWb1gxMk03Ty9mQ2t1ZVZxNE5SejdEYjV5Ujl5bUloSm1XNXFRUE94cGxYRXd3ZW4wU3NrQ01PU1FwbGc2elk5WVZrV2IzN25PaCttVmRSc0x5WnlaWi9paWpRd2ozTWxvMHJyeklqbU0wcXdndkxOTjZ6Zm90TGlnMlZWTys3Y1FNbFlYSjZFRmVERG5mRnJRNlVyVmYyV0FicG96eDRLRVhvaG1JS3BydVZzS002NTBZRnNaQmhxT3VGWXRETDNpcXlzNm5SZVJaVjZoMExFZklYTEpXTFhwYjhFQ1ZFME1VYW9kTHFINU9Hejd6YWxVNHRjZXhyVzJvZHB2VUIyUTFjNFdUMmkzYVZWemlSTURNZ1hEZnZDT0N1enBteGFRc1ZPZVJ4WTNhay9JVUM2OVhrU1hVdmJUbW93eVdtaWhHRDdsa0tGQWNHckJENGV2Zk43ZWtXck9XMXUrSThZZmY0R3dMaGxJL3F0VXh1ZktSRHZ4cWloMGtFK2djTVhHaXMrbzdQaXo3YnhjVzc0MVdJUVVUV0REdnRpeE1HcWlsVFlTVkRRVEdqM0xndHAxazNMQmNhOXdRTHF3VGZUeWNSNGMzRWg2WWxvVnJTNk8xNmNMNFl2eFlCOVovMEk0NWE4M1YzUjFtMzhuQUNBZm9aRWJ4SnBjYlBvNktLbEhiWlY5NkJMYkIxTm1ycGtlRkczbDg5bVhucG85MHVDZEdEWW5xZFVaRnBZMWZrMHY3RWhTTmNtSkJvMUhua1RGdllhc3gzVG9lSDJXUjBOT0c1WGVxWmd2NlhPaEY3cXYyb3hkYUNKaUswMXVZbEJIVE4zTjV4WFk4ZW8wUDA5Nk12eTNiQkFOUlNjRnFmcEtxc3B0cmZkaFA4NTRTcFNKOXJCZ0RUMFROUVRNZzRqVVJWMmpGWkFwZnBmaVFWRnFzM05PLzk3Z1hxME9FbTlWSDEweXExSEhjUmpIOVNKcWV0T2J6K0ZWKzNQcDIvSmhIVXRPZHo0ZC9kR1N6ZnRLTGV4YjdVYUtNa3g0NVNySXRIZVBFVXlyaFE1Ty84a0FXVDlOdnpjSGd2N2RpWGxSNVVsd0x6U1huTy9INjNSYmN0VWduWEhTeWp5c2ttdjlMbUVlTDhwTlU2dGJvdUJKR1Q4ekdrdHgyekNRMWJGYzc4N2N5UlpUSUxZcHNHRjJBbzZJQ1VuWm9OU3M2V09NemQxbTc1am1SaDdmbjVzQk9KbzJaNGxadDkrSGhVVmFWOUJ6c1BPK004V0YxalFmTDF0T1VXczBKRTZqWW5POFpNSDFTNTJ3NzZFY2hTU3A5ZGJNQUVpVGpjdnYzZWRGa3MyQllzVllDNmp2Y2prcGkvR3ZpeWlXeFNKMHYyNGVOOVRKS0ZNblhhc0hZZmtCTlNKMHpsZFpRdEMrU0ZST0hTbGdWVXF1VW42dVZ2Zy9SUUtLb3hneHIxQ3BqSjZrRGVwQ3FwMnlnRnErR0l6NGNKVDdob1orOWhva2pucUxlYlRSTkxDTzFuTm9WbGRzd2hoaS9Xait2RGxmZjUxUDVwQ1dNT0ZMVEhZdzhHZDdWazZyRmRFWkJNNGhIRFpqK2Zsb2svb1p3cmREVmQveDFXWmk2Uzh5T0lrVlZYWjhWWlYza2JmRmgyd0VaaGFSYUtsSUpCdWdUTFZ5a3FvOHJGRlpPZGtZeC9YWXlSS2luZHUxRlFrTlAxVHRVTXRhSm1XdGJzYVNMTGJXMC9WV2hQSlgvcmdPbXVVdjVvMDNEVWhIUVFJdWIvUlFkYUNvS1NIYWV0REQ3MjdWV3pMOUV5MjF0ZVZaTW1pZ3VvS1hSaDNVYlBIaCtiVVQzSFRjWlpEVjB1VzRSN3hoTmw2ZlJkRG5vM0hqZ3RteGNhekM5Tmk5RHV3QmRUTlA0NTZZNUltb0lldG1IRW1kWkUxTWZhMTZDZVVqeXl2NTRqeC9YRml1NFM3aVFtRG1Jd1FFU0xqMUh5NXdGUFVPSFU5d2RRZHhHYTJhV01qWnVpekc5cDZuTG5CZUNVdUFqRCtaaWZKaVJ5ZmlmbDlyeHFvb0pHdGZkajVjV3QyRkphR0FxSmwzTGkxWDJ5T0JFMHZSRmhIbE5ISmdMbFkyb1JaaFJ1R1dZekNXTlNkSDVWbDFGKzAvVWZqNmk5ZmtJcmZsbjIvSGlyUTdWWUdQQmpDbFdWQ3V6UWhvNGJoMnV4ZnNRN1ZlNWxmYXJCSjBMZDVJcDZmVFN5R0RYdDhLQnFuZmJzRUxnbHBJK3JxNlFGZmVvMWpoRVNOMjZkc3dLUy9VMEd5RGppNGo2VE1JVXN0UmJrdWdNVEYzMEtkeHJFVHlGaEFsSDlUYWFKM1gwTnc5TFFjZ0pZdnlaNXRhUVh2Q3hOVjZZelhmeUNzUUFrSVdsTkp0NXhNRDBzNlA2amltM1JoaXlpRWlMZUErRW1iN3drUEdubDl1d0xTYmpFWEdEYmpmUnE3WTZxcS8xZ3RUYkduY0syV25TeFhwSVp0azFPM3dhekFjS3hpOGNLYW5Md3dydG9GZkFtNWg5ZWVDUkZtVDdSNWlRV0h6L09KYklITTVHQ2kyc2h6MlFGOGVFZU52SzlqRFRGeW5yYVlQZXRrUXhKNDRmWnZxVVY4dGhuVFJQZzhqVHMzT3dmSFkyWG91NmN2REdiQ2RvcjJISVdUQnhpQW9MOHYzMERTMnR3dXBzemtxRmlRZVQ5YVdGODlKUUR1VVZOdFdnUUo3VVIrOEpNLzFncE1XdnRXR1RwcjRXVk5LNmkzQ3A2T1BCVW9PL3BiUllYYVQyYVBTb21MNElrUEhJbXg1Tlh5bzZUNnNLVkNkUDFYM1hNLzVVMVNTQmZFOUcxcGdUU04xOVNWYXRjV0hxNDYxWXNjbUhGak15U0lVMW5qWjd2WEdMb213MWl4angxNnRoNnNqbTMyakszbllLS3Nub1hhUXl0aDd1bWdFM3FXVWY5V0tYYW9USzZtOE5NS055VXZNWThIMkFHT0xrQVlRdC9ROEtTK3hBKzBHeTVvaEFmc3AzS2hKT0lhMk1iUWxpbm1QWE11cXNmQW1LVVZXQUFMTEdHVlFnb1NmdDJoVTdkN1VYN1RzZ1FXU0FNbGlSaGN1ZzhDQkFxV205NEhVREs2TmFVbHZXcWZzWUdST01DS1ViUFVUTHN1bzJHaTNla3RYVTUrb01nTUt6Z3VsUzBjZlZEVEdXbUxqRzBSaFdSYXExbTJsQUNGL25hakVGV1kxMXVCeWd5VEE1RCtyQlBEazV4c3JGUm1hYm50QWNWQi9YZlZqdms5TG5IdG02QmtocGFVbk9uS2JjQzk5c3B3dW9KSW5vc3VFMmpEMlhyQ2wwL1M1dk1HM2dvc1c4bVhGTUpmV0xvMjBHbTNLU1VRdDlPY25JTTk0OEVpOWJ4cnA5TWlvVUZRSXhkRExNUUcvVjhRVU5YM2x3c0s4ZHd3SWpnWVNSWkRhTE9xMk8vTXZkV29ZVUw5MmRqVWNxOE1TY2prUFlpSG1mVFRtcFYrcDBVYUxLQ1E5V3ROQXJCSlh3UUVsOStKdW8yTUtEL0NuUmtQQ0FTWXhSREI3a3AyKy9acE0rdXFkQksxemtoVlM2K3ZTcDZ1UGhhdEVhdyt6cndrK21ONW9KaW1tczVBWEVhclBrbGFUazVEekxsUEhMemV1VldGM3kzenN2Z3htL0NxRTFwRXNXbDNCVDZZeWV1eXExVW1qSkNIdGNpM2t1c2k4WE9tdkZ0V2xuM0lyM0dmdi80UzRmWm9VUDV5TEdQdG9HK3VSejJPMzRwd2VmWEVRMjIrY0hNU3dhYk1OTVd0Q09PQm1mYmRNeXBFaFlldDdWSHZFSDFCSnEwMUFOazJydzRhOHJYZWdUNGlSdVdwQ2VNc21CSXAwQVlsUzdsc1BtOXYzNitPSEJReGV3Wjc4eG5zb2tReGNkYWRuSENhdndHS2NuT0VYUFhjNzRwYnh5eUMyZkcxWm5kOE0rRFBLMEljY2VHNFpMeTJMM3JLTk5NbmFUVHRMSUNYTk9aVHU4VVhqYStkR0duUG5YMkZCQXpOaERyV1p2cHhNQlNiZXBWOFZVa3hxbyttcy9xbW1CTFB5eTBnSnFQSXQ1VHQyNVBmRXJpZElPclpRUVZFK00vOWpWWk5rVXluMzBaVTQ2NkU0cHlvOVBhRlBYYWpxcjk2SHpnOGpaQ20ybzZoa1pTTkhpeGJ0ZGJMMmhVSmZ3LzdHZ2xCN3VTdzRiYmp6YmhRVjdsUnhKclZLamxoQWtESjlBak4vb0ZTYTFVVmphcCtSNUFYV1pOMm9qbUpLeitsK3RJVkw3bjF0QytCcHVRRlRIaXR4M2VSK25OUjFoRWRlaDlTQ2RxSHM4UW1LWDNIVTk0Ky81TGNpSGxtb3FSeWNzNCtXMmM3R285V3pjdmZzdC9HallqWnB3bzRmZmZEL2NGWTJDQTM3UHZ1Y3laZno5U1M5cEVSc0lNc1Rsa3doVkdaWTJpV2lhdXZjeFlQeUI2dXdWQTRJanNxR0lQTTBrSm5YMTlkTFFnRUVrcmRJT1NuWWhCR2hqM0hheVRhZ1VtOHdGTEdHbVQ1WXZSMmkzcm9oR2k4QVJtMzlpZE1TeGdnZXMwWTdldlFsWVdvazh1OU9wNnh5aTQzTGF5YnRBditrdkhocHBUNXQ2aUlESjVpNng2MWk3WTVsMjQ1cVlFZ1YwOXdaOVZLOXJieWNoVUxoVTkzRlh1eWdud2xjTzdYRGpKNHBGVW9DQzlQaFJ6ME83aENLcDhFYklFa2xLSWRmaXQyRk84MWo4dVhVWTdXZVVzSFRIMzlIaTdyeFk1Q1Y3NDlYMEVwcTVzYVdxdDlZc1VocjVOeC95YXc1WGc5V0dleXRObW85MkpmYlQwVzRtTWFtanJkMnBuUjMxSGU1UVdXU0VZdEptSk8xTHFjN2hkTCtYOGRIZUVFYWkrNmk2VjkxTzVjR0hqMmd0UU8yQ0I2d0JlM1Q0cXVPWTNYZi9yRXRHTlJrUnFGM1dRQ2VlbldqMi9ram9ZUllrZHBRTEpYL1lXWERUcE9qSVZaTnBSMjg0RHQzUWhyZVZJY25sdzYxYVdvb3E3TFJaVHVmSTVQTUdaUzBtRkxTSjlzQUlsK28rdnBabTIycFhWT0hFbmZxWFVVU2dOYUtuNmJUVGVlV1JRVUtkTHRYM0pwd2pkY1ZLOXA3dzlyNHlVTUFlYncvYzNuQTVQbkpIREtDYVBTZng5S1pYT2sxQTllZGVIS1pqQzh6Y09Gb0l6U2hIT3lMWEhORlNYRmFaalZmSUpuN3FBTEswSU02ZVR3ZXZUYjNFZ2VVL2NtaW0xSFJHQm5iRVliTmRUeCtUMks4cHdvS0g3c3ZDVE1wZnVGS3l3WCt0bzEyOW1yU241OE0vTi9zaVVtdTRDOGxZdXpueXdyKy9SY3VjZ2tqUXlhSUdGaXdkb3lUamM0MDFEdW5QSjlnQ0IreVY1bmFjTXBtaE5hUStwR09oTks3c2tpd3N2NDM2WGo4Nk1DL1U5eWFQc2VPVm4yV2pUQ2RsUkI1bHZLcVR6a3RHWmVIWnE2aE9nZHdsektRUDdjelcyZWx2b284S05ZZEtyOS9pZ1haOTNJcGZQSmlGbTBOOXRKaStqclhreDg2d09pNlFqQmFybHRVR00waDFINi9mcUtkUHd2UTdjekJ2cENWc0RWVkozOU40aldnZVJqdXNKMTFIWnRjanU1NzVkN21xUjhEdktid0pLdzlzd0lLV0VYQ3A1OHZCdHFGelVONUZMdW41N3h0eFc4am4xUDcyMEtMUm92ZDBQVldWaFpOcVBaSzIyV2VhKzlPckxseENoNjhwT21aQmZ4RXg0NGZFMVVGbDlxL3pZRTBINFpFZ09vUnRneCsvR0tXU0IwZ3ltWEY3RG1aRUlwM1JkODJrUnR2bnM0UE05Q05PNk81VkEyc3RmWVZLdlJZZ0lucnA2T3pWa1JSeDMrbXRVSVFFdVZRYzF1UDI0cTdIWFhIcHgrTXV6RFNpakFmLzVrYjE3YXAxSTRvclBvVHowSjB4NWlTMFFZdU9Vd3E3TFdJUXVUZ0hGYW8xZ0RJNmVtUXBYVUlORk1XUXlBNStnZVpNZnorZWVkK3JQZktCVG1lYlJYMzBkaHB2bGRsVnVFQzZXZk8vNmlNYlV0M0gvZmpEdTE3OGhkYUNJazdDcEt0cDA5YlZRVldYT2tURXVlZzg2a3hrbHRxVlR2V0dkMTJ4T2YycjhEZnJEWVpNWDZIaTVSMXY0Smt2bHNJdlJ5UXBKYXlqL3kzN2ZKajdhanZwOHN4alhVZldHQTdkUXFaNTdEUUtJYWwvMm1JWDZKRE11TjJ4V2pxb0tyeHJNSGF5VlcrMzR4MDZucUFyWFVRaWpGMnFuczJjU2xxajNFODl2UjhiajJqeE9VU0x2cHBGZHVMVzYzV3pNN05qR21MVjU4M1BURHJ5S2ZTQnBOVDdJRzFFb3EydkdrMk5VY1pxUDlydzhjUXo3Vmlsa2NGb0VQbExPM1pyVElPQ2lmUU1VZGh1UHJiWXJjV1dvbTZwY2VHSmRkRUFHREY5c1d0MnZtNm1sZW8rWHJ2UkZkaGtxWVpDdVkrcUl3MXNjMTh6YVdNbFVRcit1NFh4MjBnLy9mQ29PMkpXWjhtTzF6SHJ2VjlpMDdHZE1lUHViVDZJUjJxZXhmMHJuOGVKVm5NZ2MybDU0WlpMVC8xMWowbEFWMFdnalVRemY5K0s1OVo2REQ5K29aRFJRSHJSWmErMVlocDFLbVdhTE1KYTFZZEcwbk43MU81bEdRdGVvUHczcUZRYVNxYjB2NXMrK0VLZlZvMDQ5VDM1QmhmUElzRk5CaTk0UkZjU2pLZmhDNUdraG5ldG12SzBYNnhLZGRrS1FmK25XVHVTOFlsT0J5N2l2VVZTZjhUUkhnQ1RZeG82cW85STMweUhMNG1kMnVyY0F2bXFaaHhkVlcreEEvaDYyamk0YkJOOXpLZURSbXVnMmMzN3RHUDdoaWZiVVcyMFhFZTYvbnVlcEh4SVgyKzRBNTNXNTNadmN0R01SajlvUkJDdFh0V09IN3ppUXAySkhiLzRPSkhvLzVHakVpSnB4VDZCenZUeDJPOFFJRFpaM3ZBaXpXNTBRa0tZQ25GTTlqcUtzOUN0MlJNUkRrL3hqWkZ5U1F4S2haTWVhVGtneW43dlgxT25USHpzczc4RTFEcngxUEdDWHFXWU1HQVVodmN1USsrc0F0cjU3c0dCbHNQWVQ5ZjJiMnJ4Y2YwR2FzNmdKR1p0SzBQMjRkbXcrSHBGWlQxcm9oMDNreDQ4VmU0N2p4cjE5RlNWRnRUckQrMUxoNERSNWhqUWhqUW4yZUxYMWZzN2QxaWIrTkFKYmE2cHA4WDJ5VU10YUR3dW82Q1BoRG82RWJYV2JrTTFxWnZDTmxXa2NyaWZWQTViVWxkRnpsa2dRRzB5V1p3SlJBTzNZUFI3cUkyNyswTTB4ZjBzR0U0Ym94cmJxSDlRMzJ0c29yVWtNcTFVQ3hxeEcwL0NtRklMbVNuTGFLVCtsdVh4NC9PRHA1YUhvR01VOWM4am9wLzJvRDF6WkFoUkcrczE3TUkrTHRiZXh0SGhjeTVoV1VRNHRSLzMwemxKMmxsamJKd1NpL0grdkR6YU9BVXgvOVRJRGxFemo4U3lUeXpWejBiK0VMc2J2c0xtNDd0aVpyRDlSQzNFRlkvelplL0d5WkovRHpCL1cvdlFjSklSWko3NHZiSDZ5WFU0T0NOdm1rbGlyeUVKS25tT2pyeTlKNGRPUDZURHMranJYa3NVNlRhdzJWckNIUFgrQUNyVTIrQm5wcDg4OE0xem9vRjRsZElXNXJHNk5DUndDcWZKSnZ6NENhSCtTNmVWZHNZSk9zSWZ2b21MbnE3dDQrSWRUYmUyNjFiR2I3ZmE4ZmlFdWZpWEQzK0Yyc2F2TzlQMlVXbGxXeE5hQi93T3ptOXVnclBodXhoRUVzR3Z2NWZWOFVhS3FGek9QSTg3YjFHK3JVcW5JdDZlaTBsMERNRkh1Mm1kaFN3UXZqM2FqaUxkWk9tTFR6V0N4SmtIR05jNDR4RGdQbTZ3aU43VnJTalVOb3NtL2dyM3JmNHR0cEhLSnFsT2t1SHE4eHBLQ2h2dzJPUTdrSmRscE5sS2Fva1puMW12MENmd2xJcVVETFpqK21EbFNmZFBDMU5QUm4wa1F4ZUhIeG1CTkVPQSt6alFMWXU3K241UTRNekg0a20veFUxbFpPK1VaRGVoZURRV1hUc2RSWFM0Rkx2WUNDeDRqazc5ckkxdFNYV0lGaDN2b29VcGpUVkw3T3c1QmlQUTdRaHdIMDhEaVYvcEJRNVMrd2hMbjhzR1hJeW52bmlKZFA5N2xhQ0UvbnM2ZStBT092cGhXdGwzSVdYUTBRd0pWVGFwaWVqVVR6clAvQ1U2WjM3R2VCdEdsbGdnSkNSaEtpZDJReDg5UUovZUk0dWlhbHFBWThjSVpDWUMzTWU3VmNkdjFHbkdGWTNBMHY1L3dNcXZQeUhKY3lVMkhOMXFGTTNVcjM5T1g5eHkzbFJVbFU1QmxvMXNOOWtsaEVBem5icTQ4TzNPTGJvbFZEQW5ZZ1M2Q0lFenVZK25IZU1YYlc2UkxMank3QW1CcS83a1Vhdzk5RG0ya09YUHpoTjFPT0ZxUXBNN3VJMmt0N01BdmJKNm9EQzdEMFlWRHNkNEdqU0c5Q2pwb203RHhUQUNqQUFqa0prSXBDWGpWME5abk51UHBQY3JBcGZhbis4WkFVYUFFV0FFRWtPQVZ6d1R3NDFUTVFLTUFDT1FzUWd3NDgvWXBtUENHUUZHZ0JGSURBRm0vSW5oeHFrWUFVYUFFY2hZQkpqeFoyelRNZUdNQUNQQUNDU0dBRFAreEhEalZJd0FJOEFJWkN3Q3pQZ3p0dW1ZY0VhQUVXQUVFa09BR1g5aXVIRXFSb0FSWUFReUZnRm0vQm5iZEV3NEk4QUlNQUtKSWNDTVB6SGNPQlVqd0Fnd0FobUxBRFArakcwNkpwd1JZQVFZZ2NRUVlNYWZHRzZjaWhGZ0JCaUJqRVdBR1gvR05oMFR6Z2d3QW94QVlnZ3c0MDhNTjA3RkNEQUNqRURHSXNDTVAyT2JqZ2xuQkJnQlJpQXhCSmp4SjRZYnAySUVHQUZHSUdNUllNYWZzVTNIaERNQ2pBQWprQmdDelBnVHc0MVRNUUtNQUNPUXNRaVlNWDdaNy9VY0U3VTYydVRQMk1wMU5lR01WVmNqenVVeEFveUFHUUloSGk0YmhSc3hmaEhSNTJrN3RrRWtlT0l0TnpOL0krUjBmb0xwQzZ6WU1RS01BQ09RRGdpRWVMaVBhSWxpL3BJQmdXSXdLQmd3YnRiRjUxM3poK1VXaXozZklBNTdNUUtNQUNQQUNLUXBBckxQMDdUekh6Kzk4V0ROOCt1SnhFYTZOS29icXduZDF1WURHOXh0Sjc3NnVNZFpGL1dYck5rRkZxc3QyeVF1ZXpNQ2pBQWp3QWlrQVFJK2orc2JkL09CVDNmOTQ2ZHpEMjE4WlNlUjFFeFhsQ3JDU09JWDVEdm9FcEorSDdvSzZNcWlTOHdFek9KVEVEdEdnQkZnQkJpQmJrUkFxSFNFWk45T2w1RHlqOU5seVBodEZHRGt2T1I1TWhUZ29uL0IrTVhzZ0JsL0NCVCtZd1FZQVVZZ3pSQUlyTThTVFlMeHQ5QWxlTGpnNVZHdUkwWXV3dXloU3d3UUxQRkh3Y2NlakFBandBaWtEUUtLeEMrWXZTZDBSUzNzQ21vN1l2d2lYRGdSUjdrQ0h2ekRDREFDakFBamtKWUlDRWF2WEdsSklCUEZDREFDakFBandBZ3dBb3dBSThBSU1BS3BSdUQvQWVibXhqdFR1czBPQUFBQUFFbEZUa1N1UW1DQ1wiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW1nIHN0eWxlPXtidXR0b25TdHlsZX0gc3JjPXsgZ29vZ2xlIH0gYWx0PVwiTG9nIGluIHdpdGggR29vZ2xlXCIgb25DbGljaz17IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKSB9Lz5cblx0XHQpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR29vZ2xlbG9naW4uanMiLCJleHBvcnQgZnVuY3Rpb24gbm9HZXRBYmlsaXR5KHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICdhdHRhY2snO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnZGVmZW5kJztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJ2hlYWx0aCc7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuICdzd2lmdCc7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuICdsdWNreSc7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0R2VuZGVyKHZhbHVlKSB7XG5cdHJldHVybiBwYXJzZUludCh2YWx1ZSkgPT09IDAgPyBcIuKZglwiIDogXCLimYBcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0TmF0dXJlKHZhbHVlKSB7XG5cdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRzd2l0Y2ggKHZhbHVlKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFwiY3V0ZVwiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcInN0cm9uZ1wiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcInNtYXJ0XCI7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFwiYmVhdXR5XCI7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vR2V0VHlwZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBcImRvZ1wiO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBcImNhdFwiO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBcImJpcmRcIjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gXCJmaXNoXCI7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFwib3RoZXJcIjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL25vVG9JbmZvLmpzIiwiaW1wb3J0IHsgZG9tYWluVXJsLCBjcmVhdGVBZGRQZXRBcGkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUREX0RFVEFJTCA9ICdhZGQvQ0hBTkdFX0FERF9ERVRBSUwnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BRERfVVBEQVRFID0gJ2FkZC9DSEFOR0VfQUREX1VQREFURSc7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfVE9fVVNFUiA9ICdhZGQvUkVESVJFQ1RfVE9fVVNFUic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBZGREZXRhaWwodHlwZSwgdmFsdWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQUREX0RFVEFJTCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlLCB2YWx1ZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFkZFVwZGF0ZShkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0FERF9VUERBVEUsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWRpcmVjdFRvVXNlcigpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9UT19VU0VSXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFBldChcblx0cGV0TmFtZSwgcGV0R2VuZGVyLCBwZXRUeXBlLCBwZXROYXR1cmUsIHBldEF2YXRhciwgdXNlcklkLCB1c2VyVG9rZW5cbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJuYW1lXCIsIHBldE5hbWUpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcImdlbmRlclwiLCBwZXRHZW5kZXIpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInR5cGVcIiwgcGV0VHlwZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwibmF0dXJlXCIsIHBldE5hdHVyZSk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwiZmlsZVwiLCBwZXRBdmF0YXIsIFwiLnBuZ1wiKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIHVzZXJJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidG9rZW5cIiwgdXNlclRva2VuKTtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlQWRkUGV0QXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0XHRib2R5OiBmaWxlRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2gocmVkaXJlY3RUb1VzZXIoKSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWRkLmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZEVkaXRQYWdlQXBpLCB1cGRhdGVFZGl0TmFtZUFwaSwgdXBkYXRlRWRpdFByb2ZpbGVBcGksXG5cdGRlbGV0ZUVkaXRSZWxhdGl2ZUFwaSwgcmVhZEVkaXRTZWFyY2hBcGksIGNyZWF0ZUVkaXRSZWxhdGl2ZUFwaSwgdXBkYXRlRWRpdFRyYW5zZmVyQXBpLFxuXHR1cGRhdGVFZGl0UmVsYXRpb25BcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9FRElUX1BBR0UgPSAnZWRpdC9CVUlMRF9FRElUX1BBR0UnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX1VQREFURSA9ICdlZGl0L0NIQU5HRV9FRElUX1VQREFURSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfTkFNRSA9ICdlZGl0L0NIQU5HRV9FRElUX05BTUUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX1JFTU9WRSA9ICdlZGl0L0NIQU5HRV9FRElUX1JFTU9WRSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0VESVRfUkVMQVRJVkUgPSAnZWRpdC9SRU1PVkVfRURJVF9SRUxBVElWRSc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfQUREID0gJ2VkaXQvQ0hBTkdFX0VESVRfQUREJztcbmV4cG9ydCBjb25zdCBSRVNFVF9FRElUX1NFQVJDSCA9ICdlZGl0L1JFU0VUX0VESVRfU0VBUkNIJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfRURJVF9TRUFSQ0ggPSAnZWRpdC9DSEFOR0VfRURJVF9TRUFSQ0gnO1xuZXhwb3J0IGNvbnN0IEFERF9FRElUX1JFTEFUSVZFID0gJ2VkaXQvQUREX0VESVRfUkVMQVRJVkUnO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FRElUX09XTkVSU0hJUCA9ICdlZGl0L0NIQU5HRV9FRElUX09XTkVSU0hJUCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfVFJBTlNGRVIgPSAnZWRpdC9DSEFOR0VfRURJVF9UUkFOU0ZFUic7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VESVRfRU5EID0gJ2VkaXQvQ0hBTkdFX0VESVRfRU5EJztcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9UT19IT01FID0gJ2VkaXQvUkVESVJFQ1RfVE9fSE9NRSc7XG5cbmZ1bmN0aW9uIGJ1aWxkRWRpdFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX0VESVRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRWRpdFBhZ2UocGV0SWQsIHVzZXJJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRFZGl0UGFnZUFwaSArICc/cGV0PScgKyBwZXRJZCArICcmdXNlcj0nICsgdXNlcklkKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZEVkaXRQYWdlKGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVkaXRVcGRhdGUoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX1VQREFURSxcblx0XHRkYXRhXG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlRWRpdE5hbWUoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX05BTUUsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFZGl0TmFtZSh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIHBldE5hbWUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVFZGl0TmFtZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcInRva2VuXCI6IHVzZXJUb2tlbixcblx0XHRcdFx0XCJ1c2VyXCI6IHVzZXJJZCxcblx0XHRcdFx0XCJwZXRcIjogcGV0SWQsXG5cdFx0XHRcdFwibmFtZVwiOiBwZXROYW1lXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlRWRpdE5hbWUocGV0TmFtZSkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVkaXRQcm9maWxlKHVzZXJJZCwgdXNlclRva2VuLCBwZXRJZCwgZmlsZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBwZXRJZCArIFwiLnBuZ1wiKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3VzZXInLCB1c2VySWQpO1xuXHRcdGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB1c2VyVG9rZW4pO1xuXHRcdGZvcm1EYXRhLmFwcGVuZCgncGV0JywgcGV0SWQpO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVFZGl0UHJvZmlsZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZm9ybURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUVkaXRVcGRhdGUoJ0F2YXRhciB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEnKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWRpdFJlbW92ZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9SRU1PVkVcblx0fVx0XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVkaXRSZWxhdGl2ZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRU1PVkVfRURJVF9SRUxBVElWRVxuXHR9XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVkaXRSZWxhdGl2ZSh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBkZWxldGVFZGl0UmVsYXRpdmVBcGksIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XCJ0b2tlblwiOiB1c2VyVG9rZW4sXG5cdFx0XHRcdFwidXNlclwiOiB1c2VySWQsXG5cdFx0XHRcdFwicGV0XCI6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2gocmVtb3ZlRWRpdFJlbGF0aXZlKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVkaXRBZGQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfQUREXG5cdH1cdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRFZGl0U2VhcmNoKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFU0VUX0VESVRfU0VBUkNIXG5cdH1cbn1cdFxuXG5mdW5jdGlvbiBjaGFuZ2VFZGl0U2VhcmNoKHNlYXJjaElkLCBzZWFyY2hEYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VESVRfU0VBUkNILFxuXHRcdGRhdGE6IHtcblx0XHRcdHNlYXJjaElkLCBzZWFyY2hEYXRhXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRWRpdFNlYXJjaChzZWFyY2hJZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRFZGl0U2VhcmNoQXBpICsgJz9pZD0nICsgc2VhcmNoSWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUVkaXRTZWFyY2goc2VhcmNoSWQsIGpzb24pKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkRWRpdFJlbGF0aXZlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEFERF9FRElUX1JFTEFUSVZFXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRSZWxhdGl2ZSh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIHNlYXJjaElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlRWRpdFJlbGF0aXZlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdXNlclRva2VuLFxuXHRcdFx0XHRcInVzZXJcIjogdXNlcklkLFxuXHRcdFx0XHRcInBldFwiOiBwZXRJZCxcblx0XHRcdFx0XCJhZGRcIjogc2VhcmNoSWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZEVkaXRSZWxhdGl2ZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFZGl0T3duZXJzaGlwKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9FRElUX09XTkVSU0hJUFxuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUVkaXRUcmFuc2ZlcigpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9UUkFOU0ZFUlxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFZGl0VHJhbnNmZXIodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCByZWxhdGl2ZUlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlRWRpdFRyYW5zZmVyQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdXNlclRva2VuLFxuXHRcdFx0XHRcInVzZXJcIjogdXNlcklkLFxuXHRcdFx0XHRcInBldFwiOiBwZXRJZCxcblx0XHRcdFx0XCJyZWxhdGl2ZVwiOiByZWxhdGl2ZUlkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VFZGl0VHJhbnNmZXIoKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWRpdEVuZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfRURJVF9FTkRcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUb0hvbWUoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVESVJFQ1RfVE9fSE9NRVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFZGl0UmVsYXRpb24odXNlcklkLCB1c2VyVG9rZW4sIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgdXBkYXRlRWRpdFJlbGF0aW9uQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFwidG9rZW5cIjogdXNlclRva2VuLFxuXHRcdFx0XHRcInVzZXJcIjogdXNlcklkLFxuXHRcdFx0XHRcInBldFwiOiBwZXRJZCxcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlZGlyZWN0VG9Ib21lKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9lZGl0LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZEV4cGxvcmVNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX0VYUExPUkVfVFlQRSA9IFwiZXhwbG9yZS9DSEFOR0VfRVhQTE9SRV9UWVBFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VYUExPUkVfTkFUVVJFID0gXCJleHBsb3JlL0NIQU5HRV9FWFBMT1JFX05BVFVSRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FWFBMT1JFX01PTUVOVFMgPSBcImV4cGxvcmUvQ0hBTkdFX0VYUExPUkVfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBjaGFuZ2VFeHBsb3JlTW9tZW50cyhtb21lbnRzRGF0YSwgdHlwZSwgbmF0dXJlLCBsb2FkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfTU9NRU5UUyxcblx0XHRkYXRhOiB7XG5cdFx0XHRtb21lbnRzRGF0YSwgdHlwZSwgbmF0dXJlLCBsb2FkXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRXhwbG9yZU1vbWVudHModHlwZSwgbmF0dXJlLCBsb2FkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlQYXJhbXMgPSAnP2xvYWQ9JyArIGxvYWQgKyAnJm5hdHVyZT0nICsgbmF0dXJlICsgJyZ0eXBlPScgKyB0eXBlO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkRXhwbG9yZU1vbWVudHNBcGkgKyBhcGlQYXJhbXMpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZUV4cGxvcmVNb21lbnRzKGpzb24sIHR5cGUsIG5hdHVyZSwgbG9hZCkpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RXhwbG9yZVR5cGUodHlwZSwgbmF0dXJlLCBuZXdUeXBlKSB7XG5cdGlmIChuZXdUeXBlID09PSAtMSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9UWVBFLFxuXHRcdFx0ZGF0YTogbnVsbFxuXHRcdH1cblx0fSBlbHNlIGlmIChuYXR1cmUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogQ0hBTkdFX0VYUExPUkVfVFlQRSxcblx0XHRcdGRhdGE6IG5ld1R5cGVcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHJlYWRFeHBsb3JlTW9tZW50cyhuZXdUeXBlLCBuYXR1cmUsIDApO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFeHBsb3JlTmF0dXJlKG5hdHVyZSwgdHlwZSwgbmV3TmF0dXJlKSB7XG5cdGlmIChuZXdOYXR1cmUgPT09IC0xKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IENIQU5HRV9FWFBMT1JFX05BVFVSRSxcblx0XHRcdGRhdGE6IG51bGxcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsXG5cdFx0XHRkYXRhOiBuZXdOYXR1cmVcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHJlYWRFeHBsb3JlTW9tZW50cyh0eXBlLCBuZXdOYXR1cmUsIDApO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXhwbG9yZS5qcyIsImltcG9ydCB7IGRvbWFpblVybCwgcmVhZEhvbWVNb21lbnRzQXBpIH0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfSE9NRV9NT01FTlRTID0gXCJob21lL0NIQU5HRV9IT01FX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gY2hhbmdlSG9tZU1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9IT01FX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkSG9tZU1vbWVudHMobG9hZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRIb21lTW9tZW50c0FwaSArICc/bG9hZD0nICsgbG9hZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlSG9tZU1vbWVudHMoanNvbikpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkTW9tZW50UGFnZUFwaSwgZGVsZXRlTW9tZW50UGFnZUFwaSwgdXBkYXRlTW9tZW50TGlrZUFwaSwgXG5cdHJlYWRNb21lbnRDb21tZW50c0FwaSwgY3JlYXRlTW9tZW50Q29tbWVudEFwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX01PTUVOVF9QQUdFID0gXCJtb21lbnQvQlVJTERfTU9NRU5UX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX01PTUVOVF9ERUxFVEUgPSBcIm1vbWVudC9TSE9XX01PTUVOVF9ERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9VU0VSX1BBR0UgPSBcIm1vbWVudC9SRURJUkVDVF9VU0VSX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTU9NRU5UX0xJS0UgPSBcIm1vbWVudC9DSEFOR0VfTU9NRU5UX0xJS0VcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTID0gXCJtb21lbnQvQ0hBTkdFX01PTUVOVF9DT01NRU5UU1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NTUVOVF9FTVBUWSA9IFwibW9tZW50L1NIT1dfQ09NTUVOVF9FTVBUWVwiO1xuZXhwb3J0IGNvbnN0IEFERF9NT01FTlRfQ09NTUVOVCA9IFwibW9tZW50L0FERF9NT01FTlRfQ09NTUVOVFwiO1xuXG5mdW5jdGlvbiBidWlsZE1vbWVudFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX01PTUVOVF9QQUdFLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRQYWdlKGlkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkTW9tZW50UGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9tZW50RGVsZXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfTU9NRU5UX0RFTEVURVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZGlyY3RVc2VyUGFnZSgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRURJUkVDVF9VU0VSX1BBR0Vcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9tZW50UGFnZSh1c2VySWQsIHVzZXJUb2tlbiwgbW9tZW50SWQsIHBldElkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgZGVsZXRlTW9tZW50UGFnZUFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdwZXQnOiBwZXRJZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKHJlZGlyY3RVc2VyUGFnZSgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbWVudExpa2UodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyB1cGRhdGVNb21lbnRMaWtlQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdtb21lbnQnOiBtb21lbnRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZU1vbWVudExpa2UoYWN0aW9uLCB1c2VySWQpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vbWVudENvbW1lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfTU9NRU5UX0NPTU1FTlRTLFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRNb21lbnRDb21tZW50cyhtb21lbnRJZCwgY29tbWVudExvYWQsIGNvbW1lbnRBZGRlZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0Y29uc3QgYXBpUGFyYW1zID0gJz9pZD0nICsgbW9tZW50SWQgKyAnJmxvYWQ9JyArIGNvbW1lbnRMb2FkICsgJyZhZGQ9JyArIGNvbW1lbnRBZGRlZDtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZE1vbWVudENvbW1lbnRzQXBpICsgYXBpUGFyYW1zKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VNb21lbnRDb21tZW50cyhqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tbWVudEVtcHR5KCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQ09NTUVOVF9FTVBUWVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRNb21lbnRDb21tZW50KHVzZXJJZCwgY29udGVudCkge1xuXHRjb25zdCBkYXRhID0gW1xuXHRcdGNvbnRlbnQsXG5cdFx0ZG9tYWluVXJsICsgJy9pbWcvdXNlci8nICsgdXNlcklkICsgJy5qcGcnLFxuXHRcdCcvdXNlci8nICsgdXNlcklkLFxuXHRcdG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdF07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX01PTUVOVF9DT01NRU5ULFxuXHRcdGRhdGFcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbWVudENvbW1lbnQodXNlcklkLCB1c2VyVG9rZW4sIG1vbWVudElkLCBjb250ZW50KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgY3JlYXRlTW9tZW50Q29tbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQnbW9tZW50JzogbW9tZW50SWQsXG5cdFx0XHRcdCdjb250ZW50JzogY29udGVudFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZE1vbWVudENvbW1lbnQodXNlcklkLCBjb250ZW50KSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRQZXRQYWdlQXBpLCB1cGRhdGVQZXRXYXRjaEFwaSwgY3JlYXRlUGV0TW9tZW50QXBpLFxuXHRyZWFkUGV0TW9tZW50c0FwaVxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgcHJvY2Vzc0Vycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvcHJvY2Vzc0Vycm9yJztcblxuZXhwb3J0IGNvbnN0IEJVSUxEX1BFVF9QQUdFID0gXCJwZXQvQlVJTERfUEVUX1BBR0VcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDQ09VTlRfUkVRVUlSRUQgPSBcInBldC9TSE9XX0FDQ09VTlRfUkVRVUlSRURcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX1dBVENIID0gXCJwZXQvQ0hBTkdFX1BFVF9XQVRDSFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QRVRfTU9NRU5UID0gXCJwZXQvQUREX1BFVF9NT01FTlRcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEVUX01PTUVOVFMgPSBcInBldC9DSEFOR0VfUEVUX01PTUVOVFNcIjtcblxuZnVuY3Rpb24gYnVpbGRQZXRQYWdlKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBCVUlMRF9QRVRfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0UGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRQZXRQYWdlQXBpICsgJz9pZD0nICsgaWQpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGJ1aWxkUGV0UGFnZShqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWNjb3VudFJlcXVpcmVkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQUNDT1VOVF9SRVFVSVJFRFxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRXYXRjaChhY3Rpb24sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRfV0FUQ0gsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQZXRXYXRjaCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGFjdGlvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHVwZGF0ZVBldFdhdGNoQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCd1c2VyJzogdXNlcklkLFxuXHRcdFx0XHQndG9rZW4nOiB1c2VyVG9rZW4sXG5cdFx0XHRcdCdwZXQnOiBwZXRJZCxcblx0XHRcdFx0J2FjdGlvbic6IGFjdGlvblxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVBldFdhdGNoKGFjdGlvbiwgdXNlcklkKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRQZXRNb21lbnQoaW5mbywgcGV0SWQsIG1lc3NhZ2UpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBBRERfUEVUX01PTUVOVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCBwZXRJZCwgbWVzc2FnZVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBldE1vbWVudCh1c2VySWQsIHVzZXJUb2tlbiwgcGV0SWQsIGltYWdlLCBtZXNzYWdlKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRsZXQgdHlwZSA9IGltYWdlLnR5cGU7XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoXCIvXCIpWzFdO1xuXHRcdHR5cGUgPSBcIi5cIiArIHR5cGU7XG5cdFx0Y29uc3QgZmlsZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlLCB0eXBlKTtcblx0XHRmaWxlRGF0YS5hcHBlbmQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInBldFwiLCBwZXRJZCk7XG5cdFx0ZmlsZURhdGEuYXBwZW5kKFwidXNlclwiLCB1c2VySWQpO1xuXHRcdGZpbGVEYXRhLmFwcGVuZChcInRva2VuXCIsIHVzZXJUb2tlbik7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGNyZWF0ZVBldE1vbWVudEFwaSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Ym9keTogZmlsZURhdGFcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGFkZFBldE1vbWVudChyZXN1bHQsIHBldElkLCBtZXNzYWdlKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQZXRNb21lbnRzKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfUEVUX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGV0TW9tZW50cyhwZXRJZCwgbG9hZCwgYWRkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBwYXJhbXMgPSAnP2FkZD0nICsgYWRkICsgJyZsb2FkPScgKyBsb2FkICsgJyZwZXQ9JyArIHBldElkO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUGV0TW9tZW50c0FwaSArIHBhcmFtcylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUGV0TW9tZW50cyhqc29uKSlcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcGV0LmpzIiwiaW1wb3J0IHsgXG5cdGRvbWFpblVybCwgcmVhZFJlcXVlc3RQYWdlQXBpLCBkZWxldGVSZXF1ZXN0VXNlckFwaSwgY3JlYXRlUmVxdWVzdFVzZXJBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9SRVFVRVNUX1BBR0UgPSBcInJlcXVlc3QvQlVJTERfUkVRVUVTVF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1JFUVVFU1RfVVNFUiA9IFwicmVxdWVzdC9DSEFOR0VfUkVRVUVTVF9VU0VSXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWVzdFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1JFUVVFU1RfUEFHRSxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVxdWVzdFBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkUmVxdWVzdFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChidWlsZFJlcXVlc3RQYWdlKGpzb24pKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVJlcXVlc3RVc2VyKGluZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1JFUVVFU1RfVVNFUixcblx0XHRkYXRhOiBpbmRleFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVxdWVzdFVzZXIocGV0SWQsIGluZGV4LCB1c2VySWQsIHVzZXJUb2tlbiwgYWN0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRjb25zdCBhcGlVcmwgPSBhY3Rpb24gPT09IDAgPyBkZWxldGVSZXF1ZXN0VXNlckFwaSA6IGNyZWF0ZVJlcXVlc3RVc2VyQXBpO1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyBhcGlVcmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0J3VzZXInOiB1c2VySWQsXG5cdFx0XHRcdCd0b2tlbic6IHVzZXJUb2tlbixcblx0XHRcdFx0J3BldCc6IHBldElkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goY2hhbmdlUmVxdWVzdFVzZXIoaW5kZXgpKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRkb21haW5VcmwsIHJlYWRVc2VyUGFnZUFwaSwgcmVhZFVzZXJNb21lbnRzQXBpXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCBwcm9jZXNzRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9wcm9jZXNzRXJyb3InO1xuXG5leHBvcnQgY29uc3QgQlVJTERfVVNFUl9QQUdFID0gXCJ1c2VyL0JVSUxEX1VTRVJfUEFHRVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX01PTUVOVFMgPSBcInVzZXIvQ0hBTkdFX1VTRVJfTU9NRU5UU1wiO1xuXG5mdW5jdGlvbiBidWlsZFVzZXJQYWdlKGluZm8sIHVzZXJJZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1VTRVJfUEFHRSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpbmZvLCB1c2VySWRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkVXNlclBhZ2UoaWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkVXNlclBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRVc2VyUGFnZShqc29uLCBwYXJzZUludChpZCkpKVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVXNlck1vbWVudHMoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9VU0VSX01PTUVOVFMsXG5cdFx0ZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkVXNlck1vbWVudHMoYmVsb25nLCBsb2FkKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRyZXR1cm4gZmV0Y2goZG9tYWluVXJsICsgcmVhZFVzZXJNb21lbnRzQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdiZWxvbmcnOiBiZWxvbmcsXG5cdFx0XHRcdCdsb2FkJzogbG9hZFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb2Nlc3NFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VVc2VyTW9tZW50cyhqc29uKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXIuanMiLCJpbXBvcnQgeyBcblx0ZG9tYWluVXJsLCByZWFkV2F0Y2hQYWdlQXBpLCBkZWxldGVXYXRjaFBldEFwaSwgY3JlYXRlV2F0Y2hQZXRBcGksXG5cdHJlYWRXYXRjaE1vbWVudHNBcGlcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9jb25maWcnO1xuaW1wb3J0IHByb2Nlc3NFcnJvciBmcm9tICcuLi8uLi9oZWxwZXJzL3Byb2Nlc3NFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBCVUlMRF9XQVRDSF9QQUdFID0gXCJ3YXRjaC9CVUlMRF9XQVRDSF9QQUdFXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1dBVENIX1BFVCA9IFwid2F0Y2gvQ0hBTkdFX1dBVENIX1BFVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9XQVRDSF9NT01FTlRTID0gXCJ3YXRjaC9DSEFOR0VfV0FUQ0hfTU9NRU5UU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QRVRTX0xPQUQgPSBcIndhdGNoL0NIQU5HRV9QRVRTX0xPQURcIjtcblxuZnVuY3Rpb24gYnVpbGRXYXRjaFBhZ2UoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IEJVSUxEX1dBVENIX1BBR0UsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFdhdGNoUGFnZShpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIHJlYWRXYXRjaFBhZ2VBcGkgKyAnP2lkPScgKyBpZClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9jZXNzRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goYnVpbGRXYXRjaFBhZ2UoanNvbikpXG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX1dBVENIX1BFVCxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb24sIHBldElkXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hQZXQodXNlcklkLCB1c2VyVG9rZW4sIHBldElkLCBhY3Rpb24pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdGNvbnN0IGFwaVVybCA9IGFjdGlvbiA9PT0gMCA/IGRlbGV0ZVdhdGNoUGV0QXBpIDogY3JlYXRlV2F0Y2hQZXRBcGk7XG5cdFx0cmV0dXJuIGZldGNoKGRvbWFpblVybCArIGFwaVVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQndXNlcic6IHVzZXJJZCxcblx0XHRcdFx0J3Rva2VuJzogdXNlclRva2VuLFxuXHRcdFx0XHQncGV0JzogcGV0SWRcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaChjaGFuZ2VXYXRjaFBldChhY3Rpb24sIHBldElkKSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VXYXRjaE1vbWVudHMobW9tZW50cywgbG9hZCwgbG9hZExpc3QpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfV0FUQ0hfTU9NRU5UUyxcblx0XHRkYXRhOiB7XG5cdFx0XHRtb21lbnRzLCBsb2FkLCBsb2FkTGlzdFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRXYXRjaE1vbWVudHMobGlzdHMsIGxvYWQsIGxvYWRMaXN0LCB1c2VySWQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuXHRcdHJldHVybiBmZXRjaChkb21haW5VcmwgKyByZWFkV2F0Y2hNb21lbnRzQXBpLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdsaXN0JzogbGlzdHMsXG5cdFx0XHRcdCdsb2FkJzogbG9hZCxcblx0XHRcdFx0J3JvdXRlJzogbG9hZExpc3QsXG5cdFx0XHRcdCd1c2VyJzogdXNlcklkXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvY2Vzc0Vycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKGNoYW5nZVdhdGNoTW9tZW50cyhqc29uLCBsb2FkLCBsb2FkTGlzdCkpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBldHNMb2FkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9QRVRTX0xPQURcblx0fTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy93YXRjaC5qcyIsImltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb21tZW50cyhkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGNvbW1lbnQuY29tbWVudF9jb250ZW50LFxuXHRcdFx0ZG9tYWluVXJsICsgXCIvaW1nL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQgKyBcIi5qcGdcIixcblx0XHRcdFwiL3VzZXIvXCIgKyBjb21tZW50LnVzZXJfaWQsXG5cdFx0XHRuZXcgRGF0ZShjb21tZW50LmNvbW1lbnRfdGltZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRDb21tZW50cy5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhY2NvdW50IGZyb20gJy4vcmVkdWNlcnMvYWNjb3VudCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL3JlZHVjZXJzL2hvbWUnO1xuaW1wb3J0IHBldCBmcm9tICcuL3JlZHVjZXJzL3BldCc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICcuL3JlZHVjZXJzL21vbWVudCc7XG5pbXBvcnQgZXhwbG9yZSBmcm9tICcuL3JlZHVjZXJzL2V4cGxvcmUnO1xuaW1wb3J0IHdhdGNoIGZyb20gJy4vcmVkdWNlcnMvd2F0Y2gnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZWR1Y2Vycy9yZXF1ZXN0JztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vcmVkdWNlcnMvc2V0dGluZyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vcmVkdWNlcnMvYWRkJztcbmltcG9ydCBlZGl0IGZyb20gJy4vcmVkdWNlcnMvZWRpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGFjY291bnQsXG5cdGhvbWUsXG5cdG1vbWVudCxcblx0cGV0LFxuXHR1c2VyLFxuXHRleHBsb3JlLFxuXHR3YXRjaCxcblx0cmVxdWVzdCxcblx0c2V0dGluZyxcblx0YWRkLFxuXHRlZGl0XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJpbXBvcnQgeyBcblx0Q0hBTkdFX0FDQ09VTlRfREFUQSwgQ0xFQVJfQUNDT1VOVF9EQVRBLCBSRURJUkVDVF9UT19TSUdOVVAsIENMRUFSX0FDQ09VTlRfU0lHTlVQXG59IGZyb20gJy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBDSEFOR0VfQUNDT1VOVF9OQU1FIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXR0aW5nJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRpZDogbnVsbCxcblx0bmFtZTogbnVsbCxcblx0dG9rZW46IG51bGwsXG5cdHJlZGlyZWN0U2lnbnVwOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGFbMF0gIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRpZDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF0pLFxuXHRcdFx0XHRcdG5hbWU6IGFjdGlvbi5kYXRhWzFdLFxuXHRcdFx0XHRcdHRva2VuOiBhY3Rpb24uZGF0YVsyXVxuXHRcdFx0XHR9O1x0XG5cdFx0XHR9XG5cdFx0Y2FzZSBDTEVBUl9BQ0NPVU5UX0RBVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdHRva2VuOiBudWxsXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0FDQ09VTlRfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRuYW1lOiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIFJFRElSRUNUX1RPX1NJR05VUDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZWRpcmVjdFNpZ251cDogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENMRUFSX0FDQ09VTlRfU0lHTlVQOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0U2lnbnVwOiBmYWxzZVxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2FjY291bnQuanMiLCJpbXBvcnQgeyBcblx0Q0hBTkdFX0FERF9ERVRBSUwsIENIQU5HRV9BRERfVVBEQVRFLCBSRURJUkVDVF9UT19VU0VSXG59IGZyb20gJy4uL2FjdGlvbnMvYWRkJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL2luZGljYXRlIHVwZGF0ZSByZXN1bHRcblx0dXBkYXRlUmVzdWx0OiBudWxsLFxuXHQvL3N0b3JlIGF2YXRhciBpbWFnZVxuXHRjcmVhdGVBdmF0YXI6IG51bGwsXG5cdC8vc3RvcmUgcGV0IGdlbmRlclxuXHRjcmVhdGVHZW5kZXI6IG51bGwsXG5cdC8vc3RvcmUgY3JlYXRlIHR5cGVcblx0Y3JlYXRlVHlwZTogbnVsbCxcblx0Ly9zdG9yZSBjcmVhdGUgbmF0dXJlXG5cdGNyZWF0ZU5hdHVyZTogbnVsbCxcblx0cmVkaXJlY3RVc2VyOiBmYWxzZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0FERF9ERVRBSUw6XG5cdFx0XHRjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcblx0XHRcdG5ld1N0YXRlWydjcmVhdGUnICsgYWN0aW9uLmRhdGEudHlwZV0gPSBhY3Rpb24uZGF0YS52YWx1ZTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblx0XHRjYXNlIENIQU5HRV9BRERfVVBEQVRFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogYWN0aW9uLmRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9UT19VU0VSOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0VXNlcjogdHJ1ZVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hZGQuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfRURJVF9QQUdFLCBDSEFOR0VfRURJVF9VUERBVEUsIENIQU5HRV9FRElUX05BTUUsIENIQU5HRV9FRElUX1JFTU9WRSxcblx0UkVNT1ZFX0VESVRfUkVMQVRJVkUsIENIQU5HRV9FRElUX0FERCwgUkVTRVRfRURJVF9TRUFSQ0gsIENIQU5HRV9FRElUX1NFQVJDSCxcblx0QUREX0VESVRfUkVMQVRJVkUsIENIQU5HRV9FRElUX09XTkVSU0hJUCwgQ0hBTkdFX0VESVRfVFJBTlNGRVIsIENIQU5HRV9FRElUX0VORCxcblx0UkVESVJFQ1RfVE9fSE9NRVxufSBmcm9tICcuLi9hY3Rpb25zL2VkaXQnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcGV0IGRhdGFcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgcGV0IG5hbWVcblx0cGV0TmFtZTogXCJcIixcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgaW5mb1xuXHR1cGRhdGVSZXN1bHQ6IG51bGwsXG5cdC8vc2hvdyBlbmQgcmVsYXRpb24gYm94XG5cdHNob3dFbmQ6IGZhbHNlLFxuXHQvL3Nob3cgYWRkIHJlbGF0aXZlIGJveFxuXHRzaG93QWRkOiBmYWxzZSxcblx0Ly9jb250ZW50IGluIHNlYXJjaCBiYXJcblx0c2VhcmNoOiBcIlwiLFxuXHQvL3N0b3JlIHNlYXJjaCBkYXRhXG5cdHNlYXJjaERhdGE6IG51bGwsXG5cdC8vc2hvdyByZW1vdmUgcmVsYXRpdmUgYm94XG5cdHNob3dSZW1vdmU6IGZhbHNlLFxuXHQvL3Nob3cgdHJhbnNmZXIgYm94XG5cdHNob3dUcmFuc2ZlcjogZmFsc2UsXG5cdGRhdGFMb2FkZWQ6IGZhbHNlLFxuXHRyZWRpcmVjdEhvbWU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfRURJVF9QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhLFxuXHRcdFx0XHRwZXROYW1lOiBhY3Rpb24uZGF0YS5wZXRfbmFtZSxcblx0XHRcdFx0ZGF0YUxvYWRlZDogdHJ1ZVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX1VQREFURTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfTkFNRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXROYW1lOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTmFtZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfUkVNT1ZFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dSZW1vdmU6ICFzdGF0ZS5zaG93UmVtb3ZlXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVNT1ZFX0VESVRfUkVMQVRJVkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1JlbW92ZTogZmFsc2UsXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ1N1Y2Nlc3NmdWxseSByZW1vdmVkIHJlbGF0aXZlIScsXG5cdFx0XHRcdHBldERhdGE6IHsgLi4uc3RhdGUucGV0RGF0YSwgcmVsYXRpdmVfaWQ6IG51bGwgfVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9FRElUX0FERDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93QWRkOiAhc3RhdGUuc2hvd0FkZCxcblx0XHRcdFx0c2VhcmNoOiAnJyxcblx0XHRcdFx0c2VhcmNoRGF0YTogbnVsbFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFU0VUX0VESVRfU0VBUkNIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlYXJjaDogJycsXG5cdFx0XHRcdHNlYXJjaERhdGE6IG51bGxcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9TRUFSQ0g6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VhcmNoOiBhY3Rpb24uZGF0YS5zZWFyY2hJZCxcblx0XHRcdFx0c2VhcmNoRGF0YTogYWN0aW9uLmRhdGEuc2VhcmNoRGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIEFERF9FRElUX1JFTEFUSVZFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dBZGQ6IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2g6ICcnLFxuXHRcdFx0XHRzZWFyY2hEYXRhOiBudWxsLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdSZXF1ZXN0IHNlbnQgc3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9PV05FUlNISVA6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1RyYW5zZmVyOiAhc3RhdGUuc2hvd1RyYW5zZmVyXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX0VESVRfVFJBTlNGRVI6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1RyYW5zZmVyOiBmYWxzZSxcblx0XHRcdFx0cGV0RGF0YTogeyBcblx0XHRcdFx0XHQuLi5zdGF0ZS5wZXREYXRhLCBcblx0XHRcdFx0XHRvd25lcl9pZDogc3RhdGUucGV0RGF0YS5yZWxhdGl2ZV9pZCxcblx0XHRcdFx0XHRyZWxhdGl2ZV9pZDogc3RhdGUucGV0RGF0YS5vd25lcl9pZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdTdWNjZXNzZnVsbHkgdHJhbnNmZXJyZWQgb3duZXJzaGlwISdcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfRURJVF9FTkQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0VuZDogIXN0YXRlLnNob3dFbmRcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9UT19IT01FOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHJlZGlyZWN0SG9tZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZWRpdC5qcyIsImltcG9ydCB7IFxuXHRDSEFOR0VfRVhQTE9SRV9UWVBFLCBDSEFOR0VfRVhQTE9SRV9OQVRVUkUsIENIQU5HRV9FWFBMT1JFX01PTUVOVFNcbn0gZnJvbSAnLi4vYWN0aW9ucy9leHBsb3JlJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdHR5cGU6IG51bGwsXG5cdG5hdHVyZTogbnVsbCxcblx0bW9tZW50c0RhdGE6IFtdLFxuXHRsb2FkOiAwLFxuXHRsb2NrZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0VYUExPUkVfVFlQRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0eXBlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9OQVRVUkU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0bW9tZW50c0RhdGE6IFtdLFxuXHRcdFx0XHRsb2FkOiAwXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfRVhQTE9SRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3TW9tZW50cyA9IGFjdGlvbi5kYXRhLmxvYWQgPT09IDAgPyBcblx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhKSA6XG5cdFx0XHRcdHN0YXRlLm1vbWVudHNEYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEubW9tZW50c0RhdGEpKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnRzRGF0YTogbmV3TW9tZW50cyxcblx0XHRcdFx0dHlwZTogYWN0aW9uLmRhdGEudHlwZSxcblx0XHRcdFx0bmF0dXJlOiBhY3Rpb24uZGF0YS5uYXR1cmUsXG5cdFx0XHRcdGxvYWQ6IGFjdGlvbi5kYXRhLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhLm1vbWVudHNEYXRhLmxlbmd0aCAhPT0gMjBcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V4cGxvcmUuanMiLCJpbXBvcnQgeyBDSEFOR0VfSE9NRV9NT01FTlRTIH0gZnJvbSAnLi4vYWN0aW9ucy9ob21lJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgbW9tZW50cyBkYXRhXG5cdGRhdGE6IFtdLFxuXHQvL3JlY29yZCBsb2FkIG51bWJlclxuXHRsb2FkOiAwLFxuXHQvL2FsbG93IGxvYWQgb3Igbm90XG5cdGxvY2tlcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfSE9NRV9NT01FTlRTOlxuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEuY29uY2F0KG5ld0RhdGEpLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfTU9NRU5UX1BBR0UsIFNIT1dfTU9NRU5UX0RFTEVURSwgUkVESVJFQ1RfVVNFUl9QQUdFLCBDSEFOR0VfTU9NRU5UX0xJS0UsXG5cdENIQU5HRV9NT01FTlRfQ09NTUVOVFMsIFNIT1dfQ09NTUVOVF9FTVBUWSwgQUREX01PTUVOVF9DT01NRU5UXG59IGZyb20gJy4uL2FjdGlvbnMvbW9tZW50JztcbmltcG9ydCBidWlsZENvbW1lbnRzIGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRDb21tZW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0bW9tZW50RGF0YTogW10sXG5cdGZhbWlseURhdGE6IFtdLFxuXHRsaWtlRGF0YTogW10sXG5cdGNvbW1lbnREYXRhOiBbXSxcblx0c2hvd0NvbmZpcm06IGZhbHNlLFxuXHRjb21tZW50TG9ja2VyOiBmYWxzZSxcblx0Y29tbWVudEFkZGVkOiAwLFxuXHRjb21tZW50TG9hZDogMCxcblx0Y29tbWVudEVycm9yOiBudWxsLFxuXHRyZWRpcmVjdFVzZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfTU9NRU5UX1BBR0U6XG5cdFx0XHRjb25zdCBsaWtlRGF0YSA9IGFjdGlvbi5kYXRhWzJdLm1hcChmdW5jdGlvbihsaWtlKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludChsaWtlLnVzZXJfaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjb21tZW50RGF0YSA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGFbM10pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1vbWVudERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBbXG5cdFx0XHRcdFx0cGFyc2VJbnQoYWN0aW9uLmRhdGFbMV0ub3duZXJfaWQpIHx8IG51bGwsIFxuXHRcdFx0XHRcdHBhcnNlSW50KGFjdGlvbi5kYXRhWzFdLnJlbGF0aXZlX2lkKSB8fCBudWxsLCBcblx0XHRcdFx0XSxcblx0XHRcdFx0bGlrZURhdGEsXG5cdFx0XHRcdGNvbW1lbnREYXRhLFxuXHRcdFx0XHRjb21tZW50TG9ja2VyOiBhY3Rpb24uZGF0YVszXS5sZW5ndGggIT09IDVcblx0XHRcdH07XG5cdFx0Y2FzZSBTSE9XX01PTUVOVF9ERUxFVEU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0NvbmZpcm06IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSBSRURJUkVDVF9VU0VSX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVkaXJlY3RVc2VyOiB0cnVlXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX01PTUVOVF9MSUtFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxpa2VEYXRhOiBhY3Rpb24uZGF0YS5hY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFsuLi5zdGF0ZS5saWtlRGF0YSwgYWN0aW9uLmRhdGEudXNlcklkXSA6XG5cdFx0XHRcdFx0c3RhdGUubGlrZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGxpa2UpIHsgcmV0dXJuIGxpa2UgIT09IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9NT01FTlRfQ09NTUVOVFM6XG5cdFx0XHRjb25zdCBuZXdDb21tZW50cyA9IGJ1aWxkQ29tbWVudHMoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNvbW1lbnREYXRhOiBbLi4uc3RhdGUuY29tbWVudERhdGEsIC4uLm5ld0NvbW1lbnRzXSxcblx0XHRcdFx0Y29tbWVudExvYWQ6IHN0YXRlLmNvbW1lbnRMb2FkICsgMSxcblx0XHRcdFx0Y29tbWVudExvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAxMFxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQ09NTUVOVF9FTVBUWTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IFwiQ29tbWVudCBjYW7igLJ0IGJlIGVtcHR5XCJcblx0XHRcdH07XG5cdFx0Y2FzZSBBRERfTU9NRU5UX0NPTU1FTlQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y29tbWVudERhdGE6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuY29tbWVudERhdGFdLFxuXHRcdFx0XHRjb21tZW50RXJyb3I6IG51bGwsXG5cdFx0XHRcdGNvbW1lbnRBZGRlZDogc3RhdGUuY29tbWVudEFkZGVkICsgMVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL21vbWVudC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9QRVRfUEFHRSwgU0hPV19BQ0NPVU5UX1JFUVVJUkVELCBDSEFOR0VfUEVUX1dBVENILCBBRERfUEVUX01PTUVOVCwgQ0hBTkdFX1BFVF9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvcGV0JztcbmltcG9ydCB7IGRvbWFpblVybCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uZmlnJztcbmltcG9ydCB7IG5vR2V0QWJpbGl0eSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvbm9Ub0luZm8nO1xuaW1wb3J0IGJ1aWxkR2FsbGVyeSBmcm9tICcuLi8uLi9oZWxwZXJzL2J1aWxkR2FsbGVyeSc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcblx0Ly9pbmRpY2F0ZSBwZXQgYmVsb25nIHRvIGN1cnJlbnQgdXNlciBvciBub3Rcblx0cGV0T3duZXI6IGZhbHNlLFxuXHQvL3N0b3JlIGRhdGEgZm9yIG9uZSBwZXRcblx0cGV0RGF0YToge30sXG5cdC8vc3RvcmUgZGF0YSBmb3IgcGV0J3MgZmFtaWx5XG5cdGZhbWlseURhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIHBldHMgZnJpZW5kXG5cdGZyaWVuZERhdGE6IFtdLFxuXHQvL3N0b3JlIGRhdGEgZm9yIGltYWdlIGdhbGxlcnlcblx0Z2FsbGVyeURhdGE6IFtdLFxuXHQvL2luZGljYXRlIGxvYWQgaG93IG1hbnkgdGltZXNcblx0bG9hZDogMSxcblx0Ly9pbmRpY2F0ZSBjb3VsZCBsb2FkIG1vcmUgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vaW5kaWNhdGUgYWRkIGhvdyBtYW55IGltYWdlc1xuXHRhZGQ6IDAsXG5cdC8vc3RvcmUgYWxsIHdhdGNoZXIgb2YgY3VycmVudCBwZXRcblx0d2F0Y2hEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBub3RpY2UgdXNlciBsb2dpbiBvciBub3Rcblx0bG9naW5SZXF1aXJlZDogZmFsc2UsXG5cdC8vdHJpZ2dlciByZXNldCBmdW5jdGlvbiBmb3IgcG9zdCBpbWFnZVxuXHRyZXNldDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9QRVRfUEFHRTpcblx0XHRcdGFjdGlvbi5kYXRhWzBdWydvd25lcl9pZCddID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ293bmVyX2lkJ10pO1xuXHRcdFx0YWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10gPSBhY3Rpb24uZGF0YVswXVsncmVsYXRpdmVfaWQnXSA9PT0gbnVsbCA/IFxuXHRcdFx0XHRudWxsIDogcGFyc2VJbnQoYWN0aW9uLmRhdGFbMF1bJ3JlbGF0aXZlX2lkJ10pO1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHBldERhdGE6IGFjdGlvbi5kYXRhWzBdLFxuXHRcdFx0XHRmYW1pbHlEYXRhOiBhY3Rpb24uZGF0YVsxXSxcblx0XHRcdFx0ZnJpZW5kRGF0YTogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGFbM10ubGVuZ3RoICE9PSAyMCxcblx0XHRcdFx0Z2FsbGVyeURhdGE6IGJ1aWxkR2FsbGVyeShhY3Rpb24uZGF0YVszXSksXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGFbNF0ubWFwKGZ1bmN0aW9uKHdhdGNoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHdhdGNoLnVzZXJfaWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRjYXNlIFNIT1dfQUNDT1VOVF9SRVFVSVJFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpblJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0Y2FzZSBDSEFOR0VfUEVUX1dBVENIOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHdhdGNoRGF0YTogYWN0aW9uLmRhdGEuYWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRbLi4uc3RhdGUud2F0Y2hEYXRhLCBhY3Rpb24uZGF0YS51c2VySWRdIDpcblx0XHRcdFx0XHRzdGF0ZS53YXRjaERhdGEuZmlsdGVyKGZ1bmN0aW9uKHdhdGNoKSB7IHJldHVybiB3YXRjaCAhPT0gYWN0aW9uLmRhdGEudXNlcklkIH0pXG5cdFx0XHR9O1xuXHRcdGNhc2UgQUREX1BFVF9NT01FTlQ6XG5cdFx0XHRjb25zdCBuZXdNb21lbnQgPSBbXG5cdFx0XHRcdGRvbWFpblVybCArIFwiL2ltZy9wZXQvXCIgKyBhY3Rpb24uZGF0YS5wZXRJZCArIFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMV0sXG5cdFx0XHRcdGFjdGlvbi5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFwiL21vbWVudC9cIiArIGFjdGlvbi5kYXRhLmluZm9bMF1cblx0XHRcdF07XG5cdFx0XHRpZiAoYWN0aW9uLmRhdGEuaW5mby5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgYWJpbGl0eSA9IG5vR2V0QWJpbGl0eShhY3Rpb24uZGF0YS5pbmZvWzJdKTtcblx0XHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IHsuLi5zdGF0ZS5wZXREYXRhfTtcblx0XHRcdFx0bmV3QWJpbGl0eVthYmlsaXR5XSA9IHBhcnNlSW50KHN0YXRlLnBldERhdGFbYWJpbGl0eV0pICsgMTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxLFxuXHRcdFx0XHRcdHBldERhdGE6IG5ld0FiaWxpdHlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRnYWxsZXJ5RGF0YTogW25ld01vbWVudCwgLi4uc3RhdGUuZ2FsbGVyeURhdGFdLFxuXHRcdFx0XHRcdHJlc2V0OiBzdGF0ZS5yZXNldCArIDEsXG5cdFx0XHRcdFx0YWRkOiBzdGF0ZS5hZGQgKyAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRjYXNlIENIQU5HRV9QRVRfTU9NRU5UUzpcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQobmV3RGF0YSksXG5cdFx0XHRcdGxvYWQ6IHN0YXRlLmxvYWQgKyAxLFxuXHRcdFx0XHRsb2NrZXI6IG5ld0RhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3BldC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9SRVFVRVNUX1BBR0UsIENIQU5HRV9SRVFVRVNUX1VTRVJcbn0gZnJvbSAnLi4vYWN0aW9ucy9yZXF1ZXN0JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHJlcXVlc3QgbGlzdFxuXHRyZXF1ZXN0RGF0YTogW10sXG5cdC8vc3RvcmUgYWNjZXB0IGxpc3Rcblx0YWNjZXB0TGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBCVUlMRF9SRVFVRVNUX1BBR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cmVxdWVzdERhdGE6IGFjdGlvbi5kYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1JFUVVFU1RfVVNFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRyZXF1ZXN0RGF0YTogc3RhdGUucmVxdWVzdERhdGEuZmlsdGVyKChyZXF1ZXN0LCBpbmRleCkgPT4geyBcblx0XHRcdFx0XHRcdHJldHVybiBpbmRleCAhPT0gYWN0aW9uLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVxdWVzdC5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9TRVRUSU5HX1BBR0UsIENIQU5HRV9TRVRUSU5HX0FCT1VULCBDSEFOR0VfU0VUVElOR19OQU1FLCBcblx0Q0hBTkdFX1NFVFRJTkdfUFJPRklMRVxufSBmcm9tICcuLi9hY3Rpb25zL3NldHRpbmcnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgdXNlciBkYXRhXG5cdHVzZXJEYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSB1cGRhdGUgcmVzdWx0XG5cdHVwZGF0ZVJlc3VsdDogbnVsbCxcblx0Ly9zdG9yZSB1c2VyIGFib3V0IGluZm9cblx0dXNlckFib3V0OiBcIlwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfU0VUVElOR19QQUdFOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVzZXJEYXRhOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YS51c2VyX2Fib3V0XG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfQUJPVVQ6XG5cdFx0XHRpZiAoIWFjdGlvbi5kYXRhKSB7XG5cdFx0XHRcdGFjdGlvbi5kYXRhID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckFib3V0OiBhY3Rpb24uZGF0YSwgXG5cdFx0XHRcdHVwZGF0ZVJlc3VsdDogJ01vb2QgdXBkYXRlZCBTdWNjZXNzZnVsbHkhJ1xuXHRcdFx0fTtcblx0XHRjYXNlIENIQU5HRV9TRVRUSU5HX05BTUU6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBkYXRlUmVzdWx0OiAnTmFtZSB1cGRhdGVkIFN1Y2Nlc3NmdWxseSEnXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1NFVFRJTkdfUFJPRklMRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVSZXN1bHQ6ICdQcm9maWxlIHVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISdcblx0XHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3NldHRpbmcuanMiLCJpbXBvcnQgeyBcblx0QlVJTERfVVNFUl9QQUdFLCBDSEFOR0VfVVNFUl9NT01FTlRTXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgYnVpbGRHYWxsZXJ5IGZyb20gJy4uLy4uL2hlbHBlcnMvYnVpbGRHYWxsZXJ5JztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHQvL3N0b3JlIHVzZXIgZGF0YVxuXHR1c2VyRGF0YTogW10sXG5cdC8vc3RvcmUgcmVsYXRpdmUgZGF0YVxuXHRyZWxhdGl2ZURhdGE6IFtdLFxuXHQvL3N0b3JlIHBldHMgbGlzdFxuXHRwZXRzRGF0YTogW10sXG5cdC8vc3RvcmUgbW9tZW50IGltYWdlc1xuXHRtb21lbnREYXRhOiBbXSxcblx0Ly9pbmRpY2F0ZSBsb2FkIG1vbWVudCBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxLFxuXHQvL2luZGljYXRlIGNvdWxkIGxvYWQgbW9yZSBpbWFnZXMgb3Igbm90XG5cdGxvY2tlcjogZmFsc2UsXG5cdC8vc3RvcmUgcGV0IGxpc3Rcblx0YmVsb25nRGF0YTogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEJVSUxEX1VTRVJfUEFHRTpcblx0XHRcdGxldCByZWxhdGl2ZURhdGEgPSBbXTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMV0uZm9yRWFjaChmdW5jdGlvbihwZXQpIHtcblx0XHRcdFx0aWYgKHBldC5yZWxhdGl2ZV9pZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlRGF0YS5wdXNoKFxuXHRcdFx0XHRcdFx0cGFyc2VJbnQocGV0LnJlbGF0aXZlX2lkKSA9PT0gYWN0aW9uLmRhdGEudXNlcklkID8gXG5cdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBldC5vd25lcl9pZCkgOiBwYXJzZUludChwZXQucmVsYXRpdmVfaWQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVx0XG5cdFx0XHR9KTtcblx0XHRcdGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCA9IHBhcnNlSW50KGFjdGlvbi5kYXRhLmluZm9bMF0udXNlcl9pZCk7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlckRhdGE6IGFjdGlvbi5kYXRhLmluZm9bMF0sXG5cdFx0XHRcdHBldHNEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzFdLFxuXHRcdFx0XHRiZWxvbmdEYXRhOiBhY3Rpb24uZGF0YS5pbmZvWzNdLFxuXHRcdFx0XHRtb21lbnREYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEuaW5mb1syXSksXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEuaW5mb1syXS5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRyZWxhdGl2ZURhdGE6IFsuLi5uZXcgU2V0KHJlbGF0aXZlRGF0YSldXG5cdFx0XHR9O1xuXHRcdGNhc2UgQ0hBTkdFX1VTRVJfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtb21lbnREYXRhOiBzdGF0ZS5tb21lbnREYXRhLmNvbmNhdChidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGEpKSxcblx0XHRcdFx0bG9hZDogc3RhdGUubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubGVuZ3RoICE9PSAyMFxuXHRcdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlci5qcyIsImltcG9ydCB7IFxuXHRCVUlMRF9XQVRDSF9QQUdFLCBDSEFOR0VfV0FUQ0hfUEVULCBDSEFOR0VfV0FUQ0hfTU9NRU5UUywgQ0hBTkdFX1BFVFNfTE9BRFxufSBmcm9tICcuLi9hY3Rpb25zL3dhdGNoJztcbmltcG9ydCBidWlsZEdhbGxlcnkgZnJvbSAnLi4vLi4vaGVscGVycy9idWlsZEdhbGxlcnknO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdC8vc3RvcmUgcGV0cyBkYXRhIG9uIHdhdGNoIGxpc3Rcblx0cGV0c0xpc3Q6IFtdLFxuXHQvL3N0b3JlIHBldCBoYXMgYmVlbiB1bndhdGNoZWRcblx0dW53YXRjaDogW10sXG5cdC8vaW5kaWNhdGUgbG9hZCBwZXQgbGlzdCBmb3IgaG93IG1hbnkgdGltZXNcblx0bG9hZFBldHM6IDEsXG5cdC8vc3RvcmUgcGV0cyBpZCBvbiB3YXRjaCBsaXN0XG5cdHdhdGNoTGlzdDogbnVsbCxcblx0Ly9zdG9yZSBsaXN0IG1vbWVudHMgdG8gc2hvd1xuXHRnYWxsZXJ5RGF0YTogW10sXG5cdC8vaW5kaWNhdGUgd2hpY2ggbGlzdCB0byBzaG93XG5cdGxvYWRMaXN0OiBcIndhdGNoXCIsXG5cdC8vaW5kaWNhdGUgY291bGQgbG9hZCBtb3JlIGltYWdlcyBvciBub3Rcblx0bG9ja2VyOiBmYWxzZSxcblx0Ly9pbmRpY2F0ZSBjbGljayBsb2FkIGZvciBob3cgbWFueSB0aW1lc1xuXHRsb2FkOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQlVJTERfV0FUQ0hfUEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwZXRzTGlzdDogYWN0aW9uLmRhdGFbMl0sXG5cdFx0XHRcdHdhdGNoTGlzdDogYWN0aW9uLmRhdGFbMF0sXG5cdFx0XHRcdGdhbGxlcnlEYXRhOiBidWlsZEdhbGxlcnkoYWN0aW9uLmRhdGFbMV0pLFxuXHRcdFx0XHRsb2NrZXI6IGFjdGlvbi5kYXRhWzFdLmxlbmd0aCAhPT0gMjBcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfUEVUOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVud2F0Y2g6IGFjdGlvbi5kYXRhLmFjdGlvbiA9PT0gMCA/IFxuXHRcdFx0XHRcdFsuLi5zdGF0ZS51bndhdGNoLCBhY3Rpb24uZGF0YS5wZXRJZF0gOiBcblx0XHRcdFx0XHRzdGF0ZS51bndhdGNoLmZpbHRlcihpZCA9PiB7IGlkICE9PSBhY3Rpb24uZGF0YS5wZXRJZDsgfSlcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfV0FUQ0hfTU9NRU5UUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRnYWxsZXJ5RGF0YTogYWN0aW9uLmRhdGEubG9hZCA9PT0gMCA/XG5cdFx0XHRcdFx0YnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpIDpcblx0XHRcdFx0XHRzdGF0ZS5nYWxsZXJ5RGF0YS5jb25jYXQoYnVpbGRHYWxsZXJ5KGFjdGlvbi5kYXRhLm1vbWVudHMpKSxcblx0XHRcdFx0bG9hZDogYWN0aW9uLmRhdGEubG9hZCArIDEsXG5cdFx0XHRcdGxvY2tlcjogYWN0aW9uLmRhdGEubW9tZW50cy5sZW5ndGggIT09IDIwLFxuXHRcdFx0XHRsb2FkTGlzdDogYWN0aW9uLmRhdGEubG9hZExpc3Rcblx0XHRcdH07XG5cdFx0Y2FzZSBDSEFOR0VfUEVUU19MT0FEOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRQZXRzOiBzdGF0ZS5sb2FkUGV0cyArIDFcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2F0Y2guanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJ1bmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBtb2Q6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxvYWQgIT09IHRoaXMucHJvcHMubG9hZCkge1xuICAgICAgdGhpcy5sb2FkKG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZChwcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2Q6IG51bGwgfSk7XG4gICAgcHJvcHMubG9hZCgobW9kKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kOiBtb2QuZGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUubW9kKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW5kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvQnVuZGxlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFxuXHRjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGEsIGNsZWFyQWNjb3VudFNpZ251cFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgZ29vZ2xlQ2xpZW50SWQsIGZhY2Vib29rQ2xpZW50SWQgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XG5pbXBvcnQgR29vZ2xlbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVsb2dpbic7XG5pbXBvcnQgRmFjZWJvb2tsb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rbG9naW4nO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd0Ryb3A6IGZhbHNlLFxuXHRcdFx0cmVkaXJlY3RIb21lOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuY2hhbmdlQWNjb3VudERhdGEoXG5cdFx0XHRbXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLCBcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSxcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblx0XHRcdF1cblx0XHQpO1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdEhvbWUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdEhvbWU6IGZhbHNlIH0pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hY2NvdW50LnJlZGlyZWN0U2lnbnVwKSB7XG5cdFx0XHR0aGlzLnByb3BzLmNsZWFyQWNjb3VudFNpZ251cCgpO1xuXHRcdH1cblx0fVxuXHRnTG9naW4oZGV0YWlsKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjb3VudC5pZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZWFkQWNjb3VudERhdGEoJ2dvb2dsZScsIGRldGFpbCk7XG5cdFx0fVxuXHR9XG5cdGZMb2dpbihyZXNwb25zZSwgdG9rZW4pIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlYWRBY2NvdW50RGF0YSgnZmFjZWJvb2snLCB7IHJlc3BvbnNlLCB0b2tlbiB9KTtcblx0XHR9XG5cdH1cblx0c2hvd0Ryb3AoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dEcm9wOiAhdGhpcy5zdGF0ZS5zaG93RHJvcCB9KTtcblx0fVxuXHRsb2dPdXQoKSB7XG5cdFx0aWYgKEZCKSB7XG5cdFx0XHRGQi5sb2dvdXQoKTtcblx0XHR9XG5cdFx0aWYgKGdhcGkpIHtcblx0XHRcdGxldCBhdXRoMiA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XG5cdFx0XHRhdXRoMi5zaWduT3V0KCk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuZGVsZXRlQWNjb3VudFRva2VuKFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LmlkLFxuXHRcdFx0dGhpcy5wcm9wcy5hY2NvdW50LnRva2VuXG5cdFx0KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3RIb21lOiB0cnVlIH0pO1xuXHR9XG4gIHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdEhvbWUpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89eyAnLycgfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWNjb3VudC5yZWRpcmVjdFNpZ251cCkge1xuXHRcdFx0cmV0dXJuIDxSZWRpcmVjdCB0bz17ICcvc2lnbnVwJyB9IC8+O1xuXHRcdH1cblx0XHRjb25zdCBsb2dpblN0eWxlID0gdGhpcy5zdGF0ZS5zaG93RHJvcCA/IFwiaGVhZGVyLWRyb3BcIiA6IFwiaGVhZGVyLWRyb3AtaGlkZVwiO1xuXHRcdGNvbnN0IHVzZXJJbmZvID0gKFxuXHRcdFx0PGRpdiBpZD1cImhlYWRlci1sb2dpblwiIG9uQ2xpY2s9eyB0aGlzLnNob3dEcm9wLmJpbmQodGhpcykgfT5cblx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5hY2NvdW50LmlkID09PSBudWxsID8gJ0xvZ2luJyA6IHRoaXMucHJvcHMuYWNjb3VudC5uYW1lIH1cblx0XHRcdFx0PC9oNT5cblx0XHRcdFx0PGltZyBzcmM9XCIvcHVibGljL2ljb24vZ2x5cGhpY29ucy1kcm9wZG93bi5wbmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRsZXQgbG9nb3V0Qm9hcmQ7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd0Ryb3AgJiYgdGhpcy5wcm9wcy5hY2NvdW50LmlkICE9PSBudWxsKSB7XG5cdFx0XHRsb2dvdXRCb2FyZCA9IChcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3BcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvdXNlci9cIiArIHRoaXMucHJvcHMuYWNjb3VudC5pZCB9PjxoNT5Ib21lPC9oNT48L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj17IFwiL3dhdGNoXCIgfT48aDU+V2F0Y2ggTGlzdDwvaDU+PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9eyBcIi9yZXF1ZXN0XCIgfT48aDU+UmVxdWVzdHM8L2g1PjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPXsgXCIvc2V0dGluZ1wiIH0+PGg1PlNldHRpbmc8L2g1PjwvYT5cblx0XHRcdFx0XHQ8aDYgaWQ9XCJoZWFkZXItZHJvcC1sb2dvdXRcIiBvbkNsaWNrPXsgdGhpcy5sb2dPdXQuYmluZCh0aGlzKSB9PkxvZyBPdXQ8L2g2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpO1xuXHRcdH1cbiAgICByZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxpbWcgaWQ9XCJoZWFkZXItbG9nb1wiIHNyYz1cIi9wdWJsaWMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aDUgaWQ9XCJoZWFkZXItZGVzY1wiPkhvbWVwYWdlIGZvciBwZXRzPC9oNT5cblx0XHRcdFx0eyB1c2VySW5mbyB9XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9leHBsb3JlXCI+XG5cdFx0XHRcdFx0PGg1PkV4cGxvcmU8L2g1PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1uYXZpXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8aDU+UHVibGljPC9oNT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9eyBsb2dpblN0eWxlIH0+XG5cdFx0XHRcdFx0PGg1IGlkPVwiaGVhZGVyLWRyb3Atbm90aWNlXCI+Q2xpY2sgdG8gc2lnbiBpbiBvciBzaWduIHVwPC9oNT5cblx0XHRcdFx0XHQ8R29vZ2xlbG9naW4gXG5cdFx0XHRcdFx0XHRjbGllbnRJZD17IGdvb2dsZUNsaWVudElkIH0gXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjIwMHB4XCJcblx0XHRcdFx0XHRcdGdMb2dpbj17IHRoaXMuZ0xvZ2luLmJpbmQodGhpcykgfSBcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGYWNlYm9va2xvZ2luIFxuXHRcdFx0XHRcdFx0Y2xpZW50SWQ9eyBmYWNlYm9va0NsaWVudElkIH1cblx0XHRcdFx0XHRcdHdpZHRoPVwiMTk0cHhcIlxuXHRcdFx0XHRcdFx0ZkxvZ2luPXsgdGhpcy5mTG9naW4uYmluZCh0aGlzKSB9IFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0eyBsb2dvdXRCb2FyZCB9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4gKHsgYWNjb3VudDogc3RhdGUuYWNjb3VudCB9KSxcbiAgeyBjaGFuZ2VBY2NvdW50RGF0YSwgZGVsZXRlQWNjb3VudFRva2VuLCByZWFkQWNjb3VudERhdGEsIGNsZWFyQWNjb3VudFNpZ251cCB9XG4pKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vQnVuZGxlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dlbmVyYWwuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5pbXBvcnQgSG9tZSBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1ob21lIS4uL3BhZ2VzL0hvbWUnO1xuaW1wb3J0IEV4cGxvcmUgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9ZXhwbG9yZSEuLi9wYWdlcy9FeHBsb3JlJztcbmltcG9ydCBQZXQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cGV0IS4uL3BhZ2VzL1BldCc7XG5pbXBvcnQgVXNlciBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT11c2VyIS4uL3BhZ2VzL1VzZXInO1xuaW1wb3J0IE1vbWVudCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1tb21lbnQhLi4vcGFnZXMvTW9tZW50JztcbmltcG9ydCBXYXRjaCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT13YXRjaCEuLi9wYWdlcy9XYXRjaCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZXF1ZXN0IS4uL3BhZ2VzL1JlcXVlc3QnO1xuaW1wb3J0IFNldHRpbmcgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9TZXR0aW5nJztcbmltcG9ydCBFZGl0IGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvRWRpdCc7XG5pbXBvcnQgQWRkIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXNldHRpbmchLi4vcGFnZXMvQWRkJztcbmltcG9ydCBTaWdudXAgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9c2V0dGluZyEuLi9wYWdlcy9TaWdudXAnO1xuaW1wb3J0IFRlcm1zIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXRlcm1zIS4uL3BhZ2VzL1Rlcm1zJztcbmltcG9ydCBSZWFjdFVJIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4uL3BhZ2VzL1JlYWN0JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi4vcGFnZXMvUGFnZU5vdEZvdW5kJztcbmltcG9ydCBJbnRlcm5hbFNlcnZlckVycm9yIGZyb20gJ2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlYWN0IS4uL3BhZ2VzL0ludGVybmFsU2VydmVyRXJyb3InO1xuaW1wb3J0IEZvcmJpZGRlbiBmcm9tICdidW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuLi9wYWdlcy9Gb3JiaWRkZW4nO1xuXG5jb25zdCBjcmVhdGVDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiAocHJvcHMpID0+IChcbiAgPEJ1bmRsZSBsb2FkPXsgY29tcG9uZW50IH0+XG4gICAge1xuICAgICAgKENvbXBvbmVudCkgPT4gQ29tcG9uZW50ID8gPENvbXBvbmVudCB7IC4uLnByb3BzIH0gLz4gOiBudWxsXG4gICAgfVxuICA8L0J1bmRsZT5cbik7XG5cbmNvbnN0IGdldFJvdXRlciA9ICgpID0+IChcbiAgPFJvdXRlcj5cbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KEhvbWUpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvZXhwbG9yZVwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChFeHBsb3JlKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BldC86aWRcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoUGV0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3VzZXIvOmlkXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFVzZXIpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvbW9tZW50LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChNb21lbnQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvd2F0Y2hcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoV2F0Y2gpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvcmVxdWVzdFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChSZXF1ZXN0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NldHRpbmdcIiBjb21wb25lbnQ9eyBjcmVhdGVDb21wb25lbnQoU2V0dGluZykgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9lZGl0LzppZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChFZGl0KSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FkZFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChBZGQpIH0gLz5cblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXsgY3JlYXRlQ29tcG9uZW50KFNpZ251cCkgfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi90ZXJtc1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChUZXJtcykgfSAvPlxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWFjdFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChSZWFjdFVJKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiLzUwMFwiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChJbnRlcm5hbFNlcnZlckVycm9yKSB9IC8+XG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiLzQwM1wiIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChGb3JiaWRkZW4pIH0gLz5cblx0XHRcdFx0PFJvdXRlIGNvbXBvbmVudD17IGNyZWF0ZUNvbXBvbmVudChQYWdlTm90Rm91bmQpIH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxuICAgICAgICA8aDY+wqkgMjAxNy0yMDE4IFNtaWxpbmdzLm1lPC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnluOTgyNi9UaG91c2FuZGF5LVdlYlwiIHRhcmdldD1cIl9fYmxhbmtcIj5Tb3VyY2UgQ29kZTwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ieW45ODI2L1Rob3VzYW5kYXktV2ViL2lzc3Vlc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5SZXBvcnQ8L2E+PC9oNj5cbiAgICAgICAgPGg2PjxhIGhyZWY9XCJodHRwOi8vZ2x5cGhpY29ucy5jb21cIiB0YXJnZXQ9XCJfX2JsYW5rXCI+R2x5cGhpY29uczwvYT48L2g2PlxuICAgICAgICA8aDY+PGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9fYmxhbmtcIj5UZXJtcyAmIFByaXZhY3kgUG9saWN5PC9hPjwvaDY+XG4gICAgICAgIDxoNj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J5bjk4MjZcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+QWJvdXQ8L2E+PC9oNj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICA8L1JvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVycy9yb3V0ZXIuanMiLCJpbXBvcnQgeyBkb21haW5VcmwgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkR2FsbGVyeShkYXRhKSB7XG5cdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihpbWFnZSkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRkb21haW5VcmwgKyAnL2ltZy9wZXQvJyArIGltYWdlLnBldF9pZCArICcvbW9tZW50LycgKyBpbWFnZS5pbWFnZV9uYW1lLFxuXHRcdFx0aW1hZ2UubW9tZW50X21lc3NhZ2UsXG5cdFx0XHQnL21vbWVudC8nICsgaW1hZ2UubW9tZW50X2lkXG5cdFx0XTtcblx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvYnVpbGRHYWxsZXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9FeHBsb3JlLmpzXCIpKTtcblx0fSwgXCJleHBsb3JlXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1leHBsb3JlIS4vc3JjL3BhZ2VzL0V4cGxvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0hvbWUuanNcIikpO1xuXHR9LCBcImhvbWVcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPWhvbWUhLi9zcmMvcGFnZXMvSG9tZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vTW9tZW50LmpzXCIpKTtcblx0fSwgXCJtb21lbnRcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPW1vbWVudCEuL3NyYy9wYWdlcy9Nb21lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1BldC5qc1wiKSk7XG5cdH0sIFwicGV0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1wZXQhLi9zcmMvcGFnZXMvUGV0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9Gb3JiaWRkZW4uanNcIikpO1xuXHR9LCBcInJlYWN0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuL3NyYy9wYWdlcy9Gb3JiaWRkZW4uanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL0ludGVybmFsU2VydmVyRXJyb3IuanNcIikpO1xuXHR9LCBcInJlYWN0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuL3NyYy9wYWdlcy9JbnRlcm5hbFNlcnZlckVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5PXRydWUhLi9QYWdlTm90Rm91bmQuanNcIikpO1xuXHR9LCBcInJlYWN0XCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1yZWFjdCEuL3NyYy9wYWdlcy9QYWdlTm90Rm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlYWN0LmpzXCIpKTtcblx0fSwgXCJyZWFjdFwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlcj9sYXp5Jm5hbWU9cmVhY3QhLi9zcmMvcGFnZXMvUmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3Rvcnk9dHJ1ZSEuL1JlcXVlc3QuanNcIikpO1xuXHR9LCBcInJlcXVlc3RcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSZuYW1lPXJlcXVlc3QhLi9zcmMvcGFnZXMvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeT10cnVlIS4vQWRkLmpzXCIpKTtcblx0fSwgXCJzZXR0aW5nXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyP2xhenkmbmFtZT1zZXR0aW5nIS4vc3JjL3BhZ2VzL0FkZC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=