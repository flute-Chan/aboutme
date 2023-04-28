/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c212fccb96a5dce91ae.wasm";

/***/ }),

/***/ 878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee65d3464bdf9ba0d75c.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ruffle-extension:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			492: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkruffle_extension"] = self["webpackChunkruffle_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ../../node_modules/wasm-feature-detect/dist/esm/index.js
const bigInt=()=>(async e=>{try{return(await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0))===BigInt(0)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11])),bulkMemory=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),extendedConst=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0])),gc=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,95,1,125,0,96,0,1,107,0,3,2,1,1,10,12,1,10,0,67,0,0,0,0,251,7,0,11])),memory64=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1])),multiValue=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11])),mutableGlobals=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1])),referenceTypes=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),relaxedSimd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),saturatedFloatToInt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),signExtensions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),streamingCompilation=()=>(async()=>"compileStreaming"in WebAssembly)(),tailCall=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11])),threads=()=>(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));

;// CONCATENATED MODULE: ../core/dist/js-polyfills.js
/**
 * Polyfills the `Array.prototype.reduce` method.
 *
 * Production steps of ECMA-262, Edition 5, 15.4.4.21
 * Reference: https://es5.github.io/#x15.4.4.21
 * https://tc39.github.io/ecma262/#sec-array.prototype.reduce
 */
function polyfillArrayPrototypeReduce() {
    Object.defineProperty(Array.prototype, "reduce", {
        value(...args) {
            if (args.length === 0 &&
                window.Prototype &&
                window.Prototype.Version &&
                window.Prototype.Version < "1.6.1") {
                // Off-spec: compatibility with prototype.js
                return this.length > 1 ? this : this[0];
            }
            const callback = args[0];
            if (this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError(`${callback} is not a function`);
            }
            const o = Object(this);
            const len = o.length >>> 0;
            let k = 0;
            let value;
            if (args.length >= 2) {
                value = args[1];
            }
            else {
                while (k < len && !(k in o)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                value = o[k++];
            }
            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }
                k++;
            }
            return value;
        },
    });
}
/**
 * Polyfills the `Window` function.
 */
function polyfillWindow() {
    if (typeof window.constructor !== "function" ||
        !isNativeFunction(window.constructor)) {
        // Don't polyfill `Window` if `window.constructor` has been overridden.
        return;
    }
    // @ts-expect-error: `Function not assignable to { new (): Window; prototype: Window; }`
    window.Window = window.constructor;
}
/**
 * Polyfills the `Reflect` object and members.
 *
 * This is a partial implementation, just enough to match our needs.
 */
function tryPolyfillReflect() {
    if (window.Reflect === undefined || window.Reflect === null) {
        // @ts-expect-error: {} indeed doesn't implement Reflect's interface.
        window.Reflect = {};
    }
    if (typeof Reflect.get !== "function") {
        Object.defineProperty(Reflect, "get", {
            value(target, key) {
                return target[key];
            },
        });
    }
    if (typeof Reflect.set !== "function") {
        Object.defineProperty(Reflect, "set", {
            value(target, key, value) {
                target[key] = value;
            },
        });
    }
    if (typeof Reflect.has !== "function") {
        Object.defineProperty(Reflect, "has", {
            value(target, key) {
                // @ts-expect-error: Type 'T' is not assignable to type 'object'.
                return key in target;
            },
        });
    }
    if (typeof Reflect.ownKeys !== "function") {
        Object.defineProperty(Reflect, "ownKeys", {
            value(target) {
                return [
                    ...Object.getOwnPropertyNames(target),
                    ...Object.getOwnPropertySymbols(target),
                ];
            },
        });
    }
}
/**
 * Determines whether a function is native or not.
 *
 * @param func The function to test.
 * @returns True if the function hasn't been overridden.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFunction(func) {
    const val = typeof Function.prototype.toString === "function"
        ? Function.prototype.toString()
        : null;
    if (typeof val === "string" && val.indexOf("[native code]") >= 0) {
        return (Function.prototype.toString.call(func).indexOf("[native code]") >= 0);
    }
    return false;
}
/**
 * Checks and applies the polyfills to the current window, if needed.
 */
function setPolyfillsOnLoad() {
    if (typeof Array.prototype.reduce !== "function" ||
        !isNativeFunction(Array.prototype.reduce)) {
        // Some external libraries override the `Array.prototype.reduce` method in a way
        // that causes Webpack to crash (#1507, #1865), so we need to override it again.
        polyfillArrayPrototypeReduce();
    }
    if (typeof Window !== "function" || !isNativeFunction(Window)) {
        // Overriding the native `Window` function causes issues in wasm-bindgen, as a
        // code like `window instanceof Window` will no longer work.
        polyfillWindow();
    }
    // Some pages override the native `Reflect` object, which causes various issues:
    // 1- wasm-bindgen's stdlib may crash (#3173).
    // 2- FlashVars may be ignored (#8537).
    tryPolyfillReflect();
}

;// CONCATENATED MODULE: ../core/dist/public-path.js
// This must be in global scope because `document.currentScript`
// works only while the script is initially being processed.
let currentScriptURL = "";
try {
    if (document.currentScript !== undefined &&
        document.currentScript !== null &&
        "src" in document.currentScript &&
        document.currentScript.src !== "") {
        let src = document.currentScript.src;
        // CDNs allow omitting the filename. If it's omitted, append a slash to
        // prevent the last component from being dropped.
        if (!src.endsWith(".js") && !src.endsWith("/")) {
            src += "/";
        }
        currentScriptURL = new URL(".", src).href;
    }
}
catch (e) {
    console.warn("Unable to get currentScript URL");
}
/**
 * Attempt to discover the public path of the current Ruffle source. This can
 * be used to configure Webpack.
 *
 * A global public path can be specified for all sources using the RufflePlayer
 * config:
 *
 * ```js
 * window.RufflePlayer.config.publicPath = "/dist/";
 * ```
 *
 * If no such config is specified, then the parent path of where this script is
 * hosted is assumed, which should be the correct default in most cases.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @returns The public path for the given source.
 */
function publicPath(config) {
    // Default to the directory where this script resides.
    let path = currentScriptURL;
    if ("publicPath" in config &&
        config.publicPath !== null &&
        config.publicPath !== undefined) {
        path = config.publicPath;
    }
    // Webpack expects the paths to end with a slash.
    if (path !== "" && !path.endsWith("/")) {
        path += "/";
    }
    return path;
}

;// CONCATENATED MODULE: ../core/dist/load-ruffle.js
/**
 * Conditional ruffle loader
 */



/**
 * Load ruffle from an automatically-detected location.
 *
 * This function returns a new instance of Ruffle and downloads it every time.
 * You should not use it directly; this module will memoize the resource
 * download.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle constructor that may be used to create new Ruffle
 * instances.
 */
async function fetchRuffle(config, progressCallback) {
    // Apply some pure JavaScript polyfills to prevent conflicts with external
    // libraries, if needed.
    setPolyfillsOnLoad();
    // NOTE: Keep this list in sync with $RUSTFLAGS in the CI build config!
    const extensionsSupported = (await Promise.all([
        bulkMemory(),
        simd(),
        saturatedFloatToInt(),
        signExtensions(),
        referenceTypes(),
    ])).every(Boolean);
    if (!extensionsSupported) {
        console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module");
    }
    __webpack_require__.p = publicPath(config);
    // Note: The argument passed to import() has to be a simple string literal,
    // otherwise some bundler will get confused and won't include the module?
    const { default: init, Ruffle } = await (extensionsSupported
        ? __webpack_require__.e(/* import() */ 339).then(__webpack_require__.bind(__webpack_require__, 339))
        : __webpack_require__.e(/* import() */ 159).then(__webpack_require__.bind(__webpack_require__, 159)));
    let response;
    const wasmUrl = extensionsSupported
        ? new URL(/* asset import */ __webpack_require__(899), __webpack_require__.b)
        : new URL(/* asset import */ __webpack_require__(878), __webpack_require__.b);
    const wasmResponse = await fetch(wasmUrl);
    if (progressCallback) {
        const contentLength = wasmResponse.headers.get("content-length") || "";
        let bytesLoaded = 0;
        // Use parseInt rather than Number so the empty string is coerced to NaN instead of 0
        const bytesTotal = parseInt(contentLength);
        response = new Response(new ReadableStream({
            async start(controller) {
                var _a;
                const reader = (_a = wasmResponse.body) === null || _a === void 0 ? void 0 : _a.getReader();
                if (!reader) {
                    throw "Response had no body";
                }
                progressCallback(bytesLoaded, bytesTotal);
                for (;;) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    if (value === null || value === void 0 ? void 0 : value.byteLength) {
                        bytesLoaded += value === null || value === void 0 ? void 0 : value.byteLength;
                    }
                    controller.enqueue(value);
                    progressCallback(bytesLoaded, bytesTotal);
                }
                controller.close();
            },
        }), wasmResponse);
    }
    else {
        response = wasmResponse;
    }
    await init(response);
    return Ruffle;
}
let lastLoaded = null;
/**
 * Obtain an instance of `Ruffle`.
 *
 * This function returns a promise which yields `Ruffle` asynchronously.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle constructor that may be used to create new Ruffle
 * instances.
 */
function loadRuffle(config, progressCallback) {
    if (lastLoaded === null) {
        lastLoaded = fetchRuffle(config, progressCallback);
    }
    return lastLoaded;
}

;// CONCATENATED MODULE: ../core/dist/flash-identifiers.js
const FLASH_MIMETYPE = "application/x-shockwave-flash";
const FUTURESPLASH_MIMETYPE = "application/futuresplash";
const FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
const FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";
const FLASH_ACTIVEX_CLASSID = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";

;// CONCATENATED MODULE: ../core/dist/plugin-polyfill.js

/**
 * Replacement object for `MimeTypeArray` that lets us install new fake mime
 * types.
 *
 * Unlike plugins we can at least enumerate mime types in Firefox, so we don't
 * lose data.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.mimeTypes` has an
 * `install` method, you should not use `RuffleMimeTypeArray` as some other
 * plugin emulator is already present.
 */
class RuffleMimeTypeArray {
    constructor(mimeTypes) {
        this.__mimeTypes = [];
        this.__namedMimeTypes = {};
        if (mimeTypes) {
            for (let i = 0; i < mimeTypes.length; i++) {
                this.install(mimeTypes[i]);
            }
        }
    }
    /**
     * Install a MIME Type into the array.
     *
     * @param mimeType The mime type to install
     */
    install(mimeType) {
        const index = this.__mimeTypes.length;
        this.__mimeTypes.push(mimeType);
        this.__namedMimeTypes[mimeType.type] = mimeType;
        this[mimeType.type] = mimeType;
        this[index] = mimeType;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use.
        return this.__mimeTypes[index >>> 0];
    }
    namedItem(name) {
        return this.__namedMimeTypes[name];
    }
    get length() {
        return this.__mimeTypes.length;
    }
    [Symbol.iterator]() {
        return this.__mimeTypes[Symbol.iterator]();
    }
}
/**
 * Equivalent object to `Plugin` that allows us to falsify plugins.
 */
class RufflePlugin extends RuffleMimeTypeArray {
    constructor(name, description, filename) {
        super();
        this.name = name;
        this.description = description;
        this.filename = filename;
    }
}
/**
 * Replacement object for `PluginArray` that lets us install new fake plugins.
 *
 * This object needs to wrap the native plugin array, since the user might have
 * actual plugins installed. Firefox doesn't let us enumerate the array, though,
 * which has some consequences. Namely, we can't actually perfectly wrap the
 * native plugin array, at least unless there's some secret "unresolved object
 * property name handler" that I've never known before in JS...
 *
 * We can still wrap `namedItem` perfectly at least.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.plugins` has an
 * `install` method, you should not use `RufflePluginArray` as some other plugin
 * emulator is already present.
 */
class RufflePluginArray {
    constructor(plugins) {
        this.__plugins = [];
        this.__namedPlugins = {};
        for (let i = 0; i < plugins.length; i++) {
            this.install(plugins[i]);
        }
    }
    install(plugin) {
        const index = this.__plugins.length;
        this.__plugins.push(plugin);
        this.__namedPlugins[plugin.name] = plugin;
        this[plugin.name] = plugin;
        this[index] = plugin;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use. Cloudflare's anti-bot
        // checks rely on this.
        return this.__plugins[index >>> 0];
    }
    namedItem(name) {
        return this.__namedPlugins[name];
    }
    refresh() {
        // Nothing to do, we just need to define the method.
    }
    [Symbol.iterator]() {
        return this.__plugins[Symbol.iterator]();
    }
    get length() {
        return this.__plugins.length;
    }
}
/**
 * A fake plugin designed to trigger Flash detection scripts.
 */
const FLASH_PLUGIN = new RufflePlugin("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
/**
 * A fake plugin designed to allow early detection of if the Ruffle extension is in use.
 */
const RUFFLE_EXTENSION = new RufflePlugin("Ruffle Extension", "Ruffle Extension", "ruffle.js");
FLASH_PLUGIN.install({
    type: FUTURESPLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "spl",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH7_AND_8_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MOVIE_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
/**
 * Install a fake plugin such that detectors will see it in `navigator.plugins`.
 *
 * This function takes care to check if the existing implementation of
 * `navigator.plugins` already accepts fake plugin entries. If so, it will use
 * that version of the plugin array. This allows the plugin polyfill to compose
 * across multiple plugin emulators with the first emulator's polyfill winning.
 *
 * @param plugin The plugin to install
 */
function installPlugin(plugin) {
    if (!("install" in navigator.plugins) || !navigator.plugins["install"]) {
        Object.defineProperty(navigator, "plugins", {
            value: new RufflePluginArray(navigator.plugins),
            writable: false,
        });
    }
    const plugins = navigator.plugins;
    plugins.install(plugin);
    if (plugin.length > 0 &&
        (!("install" in navigator.mimeTypes) || !navigator.mimeTypes["install"])) {
        Object.defineProperty(navigator, "mimeTypes", {
            value: new RuffleMimeTypeArray(navigator.mimeTypes),
            writable: false,
        });
    }
    const mimeTypes = navigator.mimeTypes;
    for (let i = 0; i < plugin.length; i += 1) {
        mimeTypes.install(plugin[i]);
    }
}

;// CONCATENATED MODULE: ../core/dist/shadow-template.js
/**
 * The shadow template which is used to fill the actual Ruffle player element
 * on the page.
 */
const ruffleShadowTemplate = document.createElement("template");
ruffleShadowTemplate.innerHTML = `
    <style>
        :host {
            --ruffle-blue: #37528c;
            --ruffle-orange: #ffad33;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
            line-height: normal;
        }

        /* Ruffle's width/height CSS interferes with Safari's fullscreen CSS. */
        /* Ensure that Safari's fullscreen mode actually fills the screen. */
        :host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }

        .hidden {
            display: none !important;
        }

        /* All of these use the dimensions specified by the embed. */
        #container,
        #play_button,
        #unmute_overlay,
        #unmute_overlay .background,
        #panic,
        #splash-screen,
        #message_overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        #container {
            overflow: hidden;
        }

        #container canvas {
            width: 100%;
            height: 100%;
        }

        #play_button,
        #unmute_overlay {
            cursor: pointer;
            display: none;
        }

        #unmute_overlay .background {
            background: black;
            opacity: 0.7;
        }

        #play_button .icon,
        #unmute_overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }

        #play_button:hover .icon,
        #unmute_overlay:hover .icon {
            opacity: 1;
        }

        #panic {
            font-size: 20px;
            text-align: center;
            /* Inverted colors from play button! */
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }

        #panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }

        #panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }

        #panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }

        #panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }

        #panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }

        #message_overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }

        #message_overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }

        #message_overlay p {
            margin: 0.5em 0;
        }

        #message_overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }

        #message_overlay a, #message_overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }

        #message_overlay a:hover, #message_overlay button:hover {
            background: #ffffff4c;
        }

        #continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }

        #continue-btn:hover {
            background: #ffffff4c;
        }

        #context-menu {
            display: none;
            color: black;
            background: #fafafa;
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        #context-menu .menu_item {
            padding: 5px 10px;
            cursor: pointer;
            color: black;
        }

        #context-menu .menu_item.disabled {
            cursor: default;
            color: gray;
        }

        #context-menu .menu_item:not(.disabled):hover {
            background: lightgray;
        }

        #context-menu .menu_separator hr {
            border: none;
            border-bottom: 1px solid lightgray;
            margin: 2px;
        }

        #splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }

        .loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }

        .loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }
            
        .logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }

        .loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }

        .spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        #virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }

        #save-manager {
            width: 100%;
            height: 100%;
            position: absolute;
            user-select: text;
        }
        #modal-area {
            position: fixed;
            background: white;
            width: fit-content;
            padding: 16px;
            border: 3px solid black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        #restore-save {
            display: none;
        }

        .replace-save {
            display: none;
        }

        .save-option {
            display: inline-block;
            padding: 3px 10px;
            margin: 5px 2px;
            cursor: pointer;
            border-radius: 50px;
            background-color: var(--ruffle-blue);
            color: white;
        }

        #close-modal {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: x-large;
        }

        .general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #888;
        }

        #local-saves {
            border-collapse: collapse;
        }

        #local-saves td {
            border-bottom: 1px solid #bbb;
            height: 30px;
        }

        #local-saves tr td:nth-child(1) {
            padding-right: 1em;
            word-break: break-all;
        }

        #local-saves tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
    <style id="dynamic_styles"></style>

    <div id="container">
        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" width="100%" height="100%"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>
        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584"  width="100%" height="100%" scale="0.8"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" font-size="60px" fill="#FFF" stroke="#FFF">Click to unmute</text></svg></div></div>
        <input id="virtual-keyboard" type="text" autocapitalize="off" autocomplete="off" autocorrect="off">
    </div>
    <div class="hidden" id="splash-screen">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 380 150"><g><path fill="#966214" d="M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"/><path fill="var(--ruffle-orange)" d="M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"/></g></svg>
        <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
            <circle class="spinner" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>        
        <div class="loadbar"><div class="loadbar-inner"></div></div>
    </div>

    <div id="save-manager" class="hidden">
        <div id="modal-area">
            <span id="close-modal">&times;</span>
            <div class="general-save-options">
                <span class="save-option" id="backup-saves">Backup all saves (download all sols)</span>
            </div>
            <table id="local-saves"></table>
        </div>
    </div>
    <ul id="context-menu"></ul>
`;

;// CONCATENATED MODULE: ../core/dist/register-element.js
/**
 * Number of times to try defining a custom element.
 */
const MAX_TRIES = 999;
/**
 * A mapping between internal element IDs and DOM element IDs.
 */
const privateRegistry = {};
/**
 * Lookup a previously registered custom element.
 *
 * The returned object will have `name`, `class`, and `internal_name`
 * properties listing the external name, implementing class, and internal name
 * respectively.
 *
 * @param elementName The internal element name, previously used to
 * register the element with the private registry.
 * @returns The element data in the registry, or null if there is
 * no such element name registered.
 */
function lookupElement(elementName) {
    const data = privateRegistry[elementName];
    if (data !== undefined) {
        return {
            internalName: elementName,
            name: data.name,
            class: data.class,
        };
    }
    else {
        return null;
    }
}
/**
 * Register a custom element.
 *
 * This function is designed to be tolerant of naming conflicts. If
 * registration fails, we modify the name, and try again. As a result, this
 * function returns the real element name to use.
 *
 * Calling this function multiple times will *not* register multiple elements.
 * We store a private registry mapping internal element names to DOM names.
 * Thus, the proper way to use this function is to call it every time you are
 * about to work with custom element names.
 *
 * @param elementName The internal name of the element.
 * @param elementClass The class of the element.
 *
 * You must call this function with the same class every time.
 * @returns The actual element name.
 * @throws Throws an error if two different elements were registered with the
 * same internal name.
 */
function registerElement(elementName, elementClass) {
    const registration = privateRegistry[elementName];
    if (registration !== undefined) {
        if (registration.class !== elementClass) {
            throw new Error("Internal naming conflict on " + elementName);
        }
        else {
            return registration.name;
        }
    }
    let tries = 0;
    if (window.customElements !== undefined) {
        while (tries < MAX_TRIES) {
            let externalName = elementName;
            if (tries > 0) {
                externalName = externalName + "-" + tries;
            }
            if (window.customElements.get(externalName) !== undefined) {
                tries += 1;
                continue;
            }
            else {
                window.customElements.define(externalName, elementClass);
            }
            privateRegistry[elementName] = {
                class: elementClass,
                name: externalName,
                internalName: elementName,
            };
            return externalName;
        }
    }
    throw new Error("Failed to assign custom element " + elementName);
}

;// CONCATENATED MODULE: ../core/dist/load-options.js
/**
 * Represents the various types of auto-play behaviours that are supported.
 */
var AutoPlay;
(function (AutoPlay) {
    /**
     * The player should automatically play the movie as soon as it is loaded.
     *
     * If the browser does not support automatic audio, the movie will begin
     * muted.
     */
    AutoPlay["On"] = "on";
    /**
     * The player should not attempt to automatically play the movie.
     *
     * This will leave it to the user or API to actually play when appropriate.
     */
    AutoPlay["Off"] = "off";
    /**
     * The player should automatically play the movie as soon as it is deemed
     * "appropriate" to do so.
     *
     * The exact behaviour depends on the browser, but commonly requires some
     * form of user interaction on the page in order to allow auto playing videos
     * with sound.
     */
    AutoPlay["Auto"] = "auto";
})(AutoPlay || (AutoPlay = {}));
/**
 * Controls whether the content is letterboxed or pillarboxed when the
 * player's aspect ratio does not match the movie's aspect ratio.
 *
 * When letterboxed, black bars will be rendered around the exterior
 * margins of the content.
 */
var Letterbox;
(function (Letterbox) {
    /**
     * The content will never be letterboxed.
     */
    Letterbox["Off"] = "off";
    /**
     * The content will only be letterboxed if the content is running fullscreen.
     */
    Letterbox["Fullscreen"] = "fullscreen";
    /**
     * The content will always be letterboxed.
     */
    Letterbox["On"] = "on";
})(Letterbox || (Letterbox = {}));
/**
 * When the player is muted, this controls whether or not Ruffle will show a
 * "click to unmute" overlay on top of the movie.
 */
var UnmuteOverlay;
(function (UnmuteOverlay) {
    /**
     * Show an overlay explaining that the movie is muted.
     */
    UnmuteOverlay["Visible"] = "visible";
    /**
     * Don't show an overlay and pretend that everything is fine.
     */
    UnmuteOverlay["Hidden"] = "hidden";
})(UnmuteOverlay || (UnmuteOverlay = {}));
/**
 * Console logging level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
    LogLevel["Trace"] = "trace";
})(LogLevel || (LogLevel = {}));
/**
 * The window mode of a Ruffle player.
 */
var WindowMode;
(function (WindowMode) {
    /**
     * The Flash content is rendered in its own window and layering is done with the browser's
     * default behavior.
     *
     * In Ruffle, this mode functions like `WindowMode::Opaque` and will layer the Flash content
     * together with other HTML elements.
     */
    WindowMode["Window"] = "window";
    /**
     * The Flash content is layered together with other HTML elements, and the stage color is
     * opaque. Content can render above or below Ruffle based on CSS rendering order.
     */
    WindowMode["Opaque"] = "opaque";
    /**
     * The Flash content is layered together with other HTML elements, and the SWF stage color is
     * transparent. Content beneath Ruffle will be visible through transparent areas.
     */
    WindowMode["Transparent"] = "transparent";
    /**
     * Request compositing with hardware acceleration when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode.Opaque`.
     */
    WindowMode["Direct"] = "direct";
    /**
     * Request a direct rendering path, bypassing browser compositing when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode::Opaque`.
     */
    WindowMode["Gpu"] = "gpu";
})(WindowMode || (WindowMode = {}));

;// CONCATENATED MODULE: ../core/dist/config.js

const DEFAULT_CONFIG = {
    allowScriptAccess: false,
    parameters: {},
    autoplay: AutoPlay.Auto,
    backgroundColor: null,
    letterbox: Letterbox.Fullscreen,
    unmuteOverlay: UnmuteOverlay.Visible,
    upgradeToHttps: true,
    compatibilityRules: true,
    warnOnUnsupportedContent: true,
    logLevel: LogLevel.Error,
    showSwfDownload: false,
    contextMenu: true,
    // Backwards-compatibility option
    preloader: true,
    splashScreen: true,
    maxExecutionDuration: { secs: 15, nanos: 0 },
    base: null,
    menu: true,
    salign: "",
    quality: "high",
    scale: "showAll",
    forceScale: false,
    wmode: WindowMode.Opaque,
    publicPath: null,
    polyfills: true,
    playerVersion: null,
};

;// CONCATENATED MODULE: ../core/dist/swf-file-name.js
/**
 * Create a filename to save a downloaded SWF into.
 *
 * @param swfUrl The URL of the SWF file.
 * @returns The filename the SWF file can be saved at.
 */
function swfFileName(swfUrl) {
    const pathName = swfUrl.pathname;
    const name = pathName.substring(pathName.lastIndexOf("/") + 1);
    return name;
}

;// CONCATENATED MODULE: ../core/dist/build-info.js
/**
 * Stores build information. The string literals are replaces at compile time by `set_version.js`.
 */
const buildInfo = {
    versionNumber: "0.1.0",
    versionName: "nightly 2023-04-22",
    versionChannel: "nightly",
    buildDate: "2023-04-22T00:18:46.196Z",
    commitHash: "ebb14a7ab61590e1e3ff26333b481259120fef00",
};

;// CONCATENATED MODULE: ../core/dist/ruffle-player.js








const RUFFLE_ORIGIN = "https://ruffle.rs";
const DIMENSION_REGEX = /^\s*(\d+(\.\d+)?(%)?)/;
let isAudioContextUnmuted = false;
var PanicError;
(function (PanicError) {
    PanicError[PanicError["Unknown"] = 0] = "Unknown";
    PanicError[PanicError["CSPConflict"] = 1] = "CSPConflict";
    PanicError[PanicError["FileProtocol"] = 2] = "FileProtocol";
    PanicError[PanicError["InvalidWasm"] = 3] = "InvalidWasm";
    PanicError[PanicError["JavascriptConfiguration"] = 4] = "JavascriptConfiguration";
    PanicError[PanicError["JavascriptConflict"] = 5] = "JavascriptConflict";
    PanicError[PanicError["WasmCors"] = 6] = "WasmCors";
    PanicError[PanicError["WasmDownload"] = 7] = "WasmDownload";
    PanicError[PanicError["WasmMimeType"] = 8] = "WasmMimeType";
    PanicError[PanicError["WasmNotFound"] = 9] = "WasmNotFound";
    PanicError[PanicError["WasmDisabledMicrosoftEdge"] = 10] = "WasmDisabledMicrosoftEdge";
    PanicError[PanicError["SwfFetchError"] = 11] = "SwfFetchError";
    PanicError[PanicError["SwfCors"] = 12] = "SwfCors";
})(PanicError || (PanicError = {}));
/**
 * Converts arbitrary input to an easy to use record object.
 *
 * @param parameters Parameters to sanitize
 * @returns A sanitized map of param name to param value
 */
function sanitizeParameters(parameters) {
    if (parameters === null || parameters === undefined) {
        return {};
    }
    if (!(parameters instanceof URLSearchParams)) {
        parameters = new URLSearchParams(parameters);
    }
    const output = {};
    for (const [key, value] of parameters) {
        // Every value must be type of string
        output[key] = value.toString();
    }
    return output;
}
/**
 * The ruffle player element that should be inserted onto the page.
 *
 * This element will represent the rendered and intractable flash movie.
 */
class RufflePlayer extends HTMLElement {
    /**
     * Indicates the readiness of the playing movie.
     *
     * @returns The `ReadyState` of the player.
     */
    get readyState() {
        return this._readyState;
    }
    /**
     * The metadata of the playing movie (such as movie width and height).
     * These are inherent properties stored in the SWF file and are not affected by runtime changes.
     * For example, `metadata.width` is the width of the SWF file, and not the width of the Ruffle player.
     *
     * @returns The metadata of the movie, or `null` if the movie metadata has not yet loaded.
     */
    get metadata() {
        return this._metadata;
    }
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     */
    constructor() {
        super();
        // Allows the user to permanently disable the context menu.
        this.contextMenuForceDisabled = false;
        // Whether this device is a touch device.
        // Set to true when a touch event is encountered.
        this.isTouch = false;
        // Whether this device sends contextmenu events.
        // Set to true when a contextmenu event is seen.
        this.contextMenuSupported = false;
        this.panicked = false;
        this._cachedDebugInfo = null;
        this.isExtension = false;
        this.longPressTimer = null;
        /**
         * Any configuration that should apply to this specific player.
         * This will be defaulted with any global configuration.
         */
        this.config = {};
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(ruffleShadowTemplate.content.cloneNode(true));
        this.dynamicStyles = (this.shadow.getElementById("dynamic_styles"));
        this.container = this.shadow.getElementById("container");
        this.playButton = this.shadow.getElementById("play_button");
        this.playButton.addEventListener("click", () => this.play());
        this.unmuteOverlay = this.shadow.getElementById("unmute_overlay");
        this.splashScreen = this.shadow.getElementById("splash-screen");
        this.virtualKeyboard = (this.shadow.getElementById("virtual-keyboard"));
        this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this));
        this.saveManager = (this.shadow.getElementById("save-manager"));
        this.saveManager.addEventListener("click", () => this.saveManager.classList.add("hidden"));
        const modalArea = this.saveManager.querySelector("#modal-area");
        if (modalArea) {
            modalArea.addEventListener("click", (event) => event.stopPropagation());
        }
        const closeSaveManager = this.saveManager.querySelector("#close-modal");
        if (closeSaveManager) {
            closeSaveManager.addEventListener("click", () => this.saveManager.classList.add("hidden"));
        }
        const backupSaves = this.saveManager.querySelector("#backup-saves");
        if (backupSaves) {
            backupSaves.addEventListener("click", this.backupSaves.bind(this));
        }
        this.contextMenuElement = this.shadow.getElementById("context-menu");
        window.addEventListener("pointerdown", this.pointerDown.bind(this));
        this.addEventListener("contextmenu", this.showContextMenu.bind(this));
        this.container.addEventListener("pointerdown", this.startLongPressTimer.bind(this));
        this.container.addEventListener("pointerup", this.checkLongPress.bind(this));
        this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this));
        this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this));
        this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this));
        this.instance = null;
        this.onFSCommand = null;
        this._readyState = ReadyState.HaveNothing;
        this._metadata = null;
        this.lastActivePlayingState = false;
        this.setupPauseOnTabHidden();
    }
    /**
     * Setup event listener to detect when tab is not active to pause instance playback.
     * this.instance.play() is called when the tab becomes visible only if the
     * the instance was not paused before tab became hidden.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
     * @ignore
     * @internal
     */
    setupPauseOnTabHidden() {
        document.addEventListener("visibilitychange", () => {
            if (!this.instance) {
                return;
            }
            // Tab just changed to be inactive. Record whether instance was playing.
            if (document.hidden) {
                this.lastActivePlayingState = this.instance.is_playing();
                this.instance.pause();
            }
            // Play only if instance was playing originally.
            if (!document.hidden && this.lastActivePlayingState === true) {
                this.instance.play();
            }
        }, false);
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        this.updateStyles();
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === "width" || name === "height") {
            this.updateStyles();
        }
    }
    /**
     * @ignore
     * @internal
     */
    disconnectedCallback() {
        this.destroy();
    }
    /**
     * Updates the internal shadow DOM to reflect any set attributes from
     * this element.
     *
     * @protected
     */
    updateStyles() {
        if (this.dynamicStyles.sheet) {
            if (this.dynamicStyles.sheet.rules) {
                for (let i = 0; i < this.dynamicStyles.sheet.rules.length; i++) {
                    this.dynamicStyles.sheet.deleteRule(i);
                }
            }
            const widthAttr = this.attributes.getNamedItem("width");
            if (widthAttr !== undefined && widthAttr !== null) {
                const width = RufflePlayer.htmlDimensionToCssDimension(widthAttr.value);
                if (width !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { width: ${width}; }`);
                }
            }
            const heightAttr = this.attributes.getNamedItem("height");
            if (heightAttr !== undefined && heightAttr !== null) {
                const height = RufflePlayer.htmlDimensionToCssDimension(heightAttr.value);
                if (height !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { height: ${height}; }`);
                }
            }
        }
    }
    /**
     * Determine if this element is the fallback content of another Ruffle
     * player.
     *
     * This heuristic assumes Ruffle objects will never use their fallback
     * content. If this changes, then this code also needs to change.
     *
     * @private
     */
    isUnusedFallbackObject() {
        const element = lookupElement("ruffle-object");
        if (element !== null) {
            let parent = this.parentNode;
            while (parent !== document && parent !== null) {
                if (parent.nodeName === element.name) {
                    return true;
                }
                parent = parent.parentNode;
            }
        }
        return false;
    }
    /**
     * Ensure a fresh Ruffle instance is ready on this player before continuing.
     *
     * @throws Any exceptions generated by loading Ruffle Core will be logged
     * and passed on.
     *
     * @private
     */
    async ensureFreshInstance() {
        var _a;
        this.destroy();
        if (this.loadedConfig &&
            this.loadedConfig.splashScreen !== false &&
            this.loadedConfig.preloader !== false) {
            this.showSplashScreen();
        }
        if (this.loadedConfig && this.loadedConfig.preloader === false) {
            console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration.");
        }
        const ruffleConstructor = await loadRuffle(this.loadedConfig || {}, this.onRuffleDownloadProgress.bind(this)).catch((e) => {
            console.error(`Serious error loading Ruffle: ${e}`);
            // Serious duck typing. In error conditions, let's not make assumptions.
            if (window.location.protocol === "file:") {
                e.ruffleIndexError = PanicError.FileProtocol;
            }
            else {
                e.ruffleIndexError = PanicError.WasmNotFound;
                const message = String(e.message).toLowerCase();
                if (message.includes("mime")) {
                    e.ruffleIndexError = PanicError.WasmMimeType;
                }
                else if (message.includes("networkerror") ||
                    message.includes("failed to fetch")) {
                    e.ruffleIndexError = PanicError.WasmCors;
                }
                else if (message.includes("disallowed by embedder")) {
                    e.ruffleIndexError = PanicError.CSPConflict;
                }
                else if (e.name === "CompileError") {
                    e.ruffleIndexError = PanicError.InvalidWasm;
                }
                else if (message.includes("could not download wasm module") &&
                    e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.WasmDownload;
                }
                else if (e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.JavascriptConflict;
                }
                else if (navigator.userAgent.includes("Edg") &&
                    message.includes("webassembly is not defined")) {
                    // Microsoft Edge detection.
                    e.ruffleIndexError = PanicError.WasmDisabledMicrosoftEdge;
                }
            }
            this.panic(e);
            throw e;
        });
        this.instance = await new ruffleConstructor(this.container, this, this.loadedConfig);
        this._cachedDebugInfo = this.instance.renderer_debug_info();
        console.log("New Ruffle instance created (WebAssembly extensions: " +
            (ruffleConstructor.is_wasm_simd_used() ? "ON" : "OFF") +
            ")");
        // In Firefox, AudioContext.state is always "suspended" when the object has just been created.
        // It may change by itself to "running" some milliseconds later. So we need to wait a little
        // bit before checking if autoplay is supported and applying the instance config.
        if (this.audioState() !== "running") {
            this.container.style.visibility = "hidden";
            await new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve();
                }, 200);
            });
            this.container.style.visibility = "";
        }
        this.unmuteAudioContext();
        // On Android, the virtual keyboard needs to be dismissed as otherwise it re-focuses when clicking elsewhere
        if (navigator.userAgent.toLowerCase().includes("android")) {
            this.container.addEventListener("click", () => this.virtualKeyboard.blur());
        }
        // Treat invalid values as `AutoPlay.Auto`.
        if (!this.loadedConfig ||
            this.loadedConfig.autoplay === AutoPlay.On ||
            (this.loadedConfig.autoplay !== AutoPlay.Off &&
                this.audioState() === "running")) {
            this.play();
            if (this.audioState() !== "running") {
                // Treat invalid values as `UnmuteOverlay.Visible`.
                if (!this.loadedConfig ||
                    this.loadedConfig.unmuteOverlay !== UnmuteOverlay.Hidden) {
                    this.unmuteOverlay.style.display = "block";
                }
                this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                    once: true,
                });
                const audioContext = (_a = this.instance) === null || _a === void 0 ? void 0 : _a.audio_context();
                if (audioContext) {
                    audioContext.onstatechange = () => {
                        if (audioContext.state === "running") {
                            this.unmuteOverlayClicked();
                        }
                        audioContext.onstatechange = null;
                    };
                }
            }
        }
        else {
            this.playButton.style.display = "block";
        }
    }
    /**
     * Uploads the splash screen progress bar.
     *
     * @param bytesLoaded The size of the Ruffle WebAssembly file downloaded so far.
     * @param bytesTotal The total size of the Ruffle WebAssembly file.
     */
    onRuffleDownloadProgress(bytesLoaded, bytesTotal) {
        const loadBar = (this.splashScreen.querySelector(".loadbar-inner"));
        const outerLoadbar = (this.splashScreen.querySelector(".loadbar"));
        if (Number.isNaN(bytesTotal)) {
            if (outerLoadbar) {
                outerLoadbar.style.display = "none";
            }
        }
        else {
            loadBar.style.width = `${100.0 * (bytesLoaded / bytesTotal)}%`;
        }
    }
    /**
     * Destroys the currently running instance of Ruffle.
     */
    destroy() {
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
            this._metadata = null;
            this._readyState = ReadyState.HaveNothing;
            console.log("Ruffle instance destroyed.");
        }
    }
    checkOptions(options) {
        if (typeof options === "string") {
            return { url: options };
        }
        const check = (condition, message) => {
            if (!condition) {
                const error = new TypeError(message);
                error.ruffleIndexError = PanicError.JavascriptConfiguration;
                this.panic(error);
                throw error;
            }
        };
        check(options !== null && typeof options === "object", "Argument 0 must be a string or object");
        check("url" in options || "data" in options, "Argument 0 must contain a `url` or `data` key");
        check(!("url" in options) || typeof options.url === "string", "`url` must be a string");
        return options;
    }
    /**
     * Gets the configuration set by the Ruffle extension
     *
     * @returns The configuration set by the Ruffle extension
     */
    getExtensionConfig() {
        var _a;
        return window.RufflePlayer &&
            window.RufflePlayer.conflict &&
            (window.RufflePlayer.conflict["newestName"] === "extension" ||
                window.RufflePlayer["newestName"] === "extension")
            ? (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.conflict["config"]
            : {};
    }
    /**
     * Loads a specified movie into this player.
     *
     * This will replace any existing movie that may be playing.
     *
     * @param options One of the following:
     * - A URL, passed as a string, which will load a URL with default options.
     * - A [[URLLoadOptions]] object, to load a URL with options.
     * - A [[DataLoadOptions]] object, to load data with options.
     *
     * The options will be defaulted by the [[config]] field, which itself
     * is defaulted by a global `window.RufflePlayer.config`.
     */
    async load(options) {
        var _a, _b;
        options = this.checkOptions(options);
        if (!this.isConnected || this.isUnusedFallbackObject()) {
            console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");
            return;
        }
        if (isFallbackElement(this)) {
            // Silently fail on attempt to play a Ruffle element inside a specific node.
            return;
        }
        try {
            const extensionConfig = this.getExtensionConfig();
            this.loadedConfig = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_CONFIG), extensionConfig), ((_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {})), this.config), options);
            // `allowScriptAccess` can only be set in `options`.
            this.loadedConfig.allowScriptAccess =
                options.allowScriptAccess === true;
            // Pre-emptively set background color of container while Ruffle/SWF loads.
            if (this.loadedConfig.backgroundColor &&
                this.loadedConfig.wmode !== WindowMode.Transparent) {
                this.container.style.backgroundColor =
                    this.loadedConfig.backgroundColor;
            }
            await this.ensureFreshInstance();
            if ("url" in options) {
                console.log(`Loading SWF file ${options.url}`);
                this.swfUrl = new URL(options.url, document.baseURI);
                const parameters = Object.assign(Object.assign({}, sanitizeParameters(options.url.substring(options.url.indexOf("?")))), sanitizeParameters(options.parameters));
                this.instance.stream_from(this.swfUrl.href, parameters);
            }
            else if ("data" in options) {
                console.log("Loading SWF data");
                this.instance.load_data(new Uint8Array(options.data), sanitizeParameters(options.parameters), options.swfFileName || "movie.swf");
            }
        }
        catch (e) {
            console.error(`Serious error occurred loading SWF file: ${e}`);
            const err = new Error(e);
            if (err.message.includes("Error parsing config")) {
                err.ruffleIndexError = PanicError.JavascriptConfiguration;
            }
            this.panic(err);
            throw err;
        }
    }
    /**
     * Plays or resumes the movie.
     */
    play() {
        if (this.instance) {
            this.instance.play();
            this.playButton.style.display = "none";
        }
    }
    /**
     * Whether this player is currently playing.
     *
     * @returns True if this player is playing, false if it's paused or hasn't started yet.
     */
    get isPlaying() {
        if (this.instance) {
            return this.instance.is_playing();
        }
        return false;
    }
    /**
     * Returns the master volume of the player.
     *
     * @returns The volume. 1.0 is 100% volume.
     */
    get volume() {
        if (this.instance) {
            return this.instance.volume();
        }
        return 1.0;
    }
    /**
     * Sets the master volume of the player.
     *
     * @param value The volume. 1.0 is 100% volume.
     */
    set volume(value) {
        if (this.instance) {
            this.instance.set_volume(value);
        }
    }
    /**
     * Checks if this player is allowed to be fullscreen by the browser.
     *
     * @returns True if you may call [[enterFullscreen]].
     */
    get fullscreenEnabled() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }
    /**
     * Checks if this player is currently fullscreen inside the browser.
     *
     * @returns True if it is fullscreen.
     */
    get isFullscreen() {
        return ((document.fullscreenElement || document.webkitFullscreenElement) ===
            this);
    }
    /**
     * Exported function that requests the browser to change the fullscreen state if
     * it is allowed.
     *
     * @param isFull Whether to set to fullscreen or return to normal.
     */
    setFullscreen(isFull) {
        if (this.fullscreenEnabled) {
            if (isFull) {
                this.enterFullscreen();
            }
            else {
                this.exitFullscreen();
            }
        }
    }
    /**
     * Requests the browser to make this player fullscreen.
     *
     * This is not guaranteed to succeed, please check [[fullscreenEnabled]] first.
     */
    enterFullscreen() {
        const options = {
            navigationUI: "hide",
        };
        if (this.requestFullscreen) {
            this.requestFullscreen(options);
        }
        else if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen(options);
        }
        else if (this.webkitRequestFullScreen) {
            this.webkitRequestFullScreen(options);
        }
    }
    /**
     * Requests the browser to no longer make this player fullscreen.
     */
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    /**
     * Called when entering / leaving fullscreen
     */
    fullScreenChange() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(this.isFullscreen);
    }
    pointerDown(event) {
        if (event.pointerType === "touch" || event.pointerType === "pen") {
            this.isTouch = true;
        }
    }
    base64ToBlob(bytesBase64, mimeString) {
        const byteString = atob(bytesBase64);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    /**
     * Download base-64 string as file
     *
     * @param bytesBase64 The base-64 encoded SOL string
     * @param mimeType The MIME type
     * @param fileName The name to give the file
     */
    saveFile(bytesBase64, mimeType, fileName) {
        const blob = this.base64ToBlob(bytesBase64, mimeType);
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobURL;
        link.style.display = "none";
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobURL);
    }
    /**
     * @returns If the string represent a base-64 encoded SOL file
     * Check if string is a base-64 encoded SOL file
     * @param solData The base-64 encoded SOL string
     */
    isB64SOL(solData) {
        try {
            const decodedData = atob(solData);
            return decodedData.slice(6, 10) === "TCSO";
        }
        catch (e) {
            return false;
        }
    }
    confirmReloadSave(solKey, b64SolData, replace) {
        if (this.isB64SOL(b64SolData)) {
            if (localStorage[solKey]) {
                if (!replace) {
                    const confirmDelete = confirm("Are you sure you want to delete this save file?");
                    if (!confirmDelete) {
                        return;
                    }
                }
                const swfPath = this.swfUrl ? this.swfUrl.pathname : "";
                const swfHost = this.swfUrl
                    ? this.swfUrl.hostname
                    : document.location.hostname;
                const savePath = solKey.split("/").slice(1, -1).join("/");
                if (swfPath.includes(savePath) && solKey.startsWith(swfHost)) {
                    const confirmReload = confirm(`The only way to ${replace ? "replace" : "delete"} this save file without potential conflict is to reload this content. Do you wish to continue anyway?`);
                    if (confirmReload && this.loadedConfig) {
                        this.destroy();
                        replace
                            ? localStorage.setItem(solKey, b64SolData)
                            : localStorage.removeItem(solKey);
                        this.load(this.loadedConfig);
                        this.populateSaves();
                        this.saveManager.classList.add("hidden");
                    }
                    return;
                }
                replace
                    ? localStorage.setItem(solKey, b64SolData)
                    : localStorage.removeItem(solKey);
                this.populateSaves();
                this.saveManager.classList.add("hidden");
            }
        }
    }
    /**
     * Replace save from SOL file.
     *
     * @param event The change event fired
     * @param solKey The localStorage save file key
     */
    replaceSOL(event, solKey) {
        const fileInput = event.target;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (reader.result && typeof reader.result === "string") {
                const b64Regex = new RegExp("data:.*;base64,");
                const b64SolData = reader.result.replace(b64Regex, "");
                this.confirmReloadSave(solKey, b64SolData, true);
            }
        });
        if (fileInput &&
            fileInput.files &&
            fileInput.files.length > 0 &&
            fileInput.files[0]) {
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
    /**
     * Delete local save.
     *
     * @param key The key to remove from local storage
     */
    deleteSave(key) {
        const b64SolData = localStorage.getItem(key);
        if (b64SolData) {
            this.confirmReloadSave(key, b64SolData, false);
        }
    }
    /**
     * Puts the local save SOL file keys in a table.
     */
    populateSaves() {
        const saveTable = this.saveManager.querySelector("#local-saves");
        if (!saveTable) {
            return;
        }
        try {
            localStorage;
        }
        catch (e) {
            return;
        }
        saveTable.textContent = "";
        Object.keys(localStorage).forEach((key) => {
            const solName = key.split("/").pop();
            const solData = localStorage.getItem(key);
            if (solName && solData && this.isB64SOL(solData)) {
                const row = document.createElement("TR");
                const keyCol = document.createElement("TD");
                keyCol.textContent = solName;
                keyCol.title = key;
                const downloadCol = document.createElement("TD");
                const downloadSpan = document.createElement("SPAN");
                downloadSpan.textContent = "Download";
                downloadSpan.className = "save-option";
                downloadSpan.addEventListener("click", () => this.saveFile(solData, "application/octet-stream", solName + ".sol"));
                downloadCol.appendChild(downloadSpan);
                const replaceCol = document.createElement("TD");
                const replaceInput = (document.createElement("INPUT"));
                replaceInput.type = "file";
                replaceInput.accept = ".sol";
                replaceInput.className = "replace-save";
                replaceInput.id = "replace-save-" + key;
                const replaceLabel = (document.createElement("LABEL"));
                replaceLabel.htmlFor = "replace-save-" + key;
                replaceLabel.textContent = "Replace";
                replaceLabel.className = "save-option";
                replaceInput.addEventListener("change", (event) => this.replaceSOL(event, key));
                replaceCol.appendChild(replaceInput);
                replaceCol.appendChild(replaceLabel);
                const deleteCol = document.createElement("TD");
                const deleteSpan = document.createElement("SPAN");
                deleteSpan.textContent = "Delete";
                deleteSpan.className = "save-option";
                deleteSpan.addEventListener("click", () => this.deleteSave(key));
                deleteCol.appendChild(deleteSpan);
                row.appendChild(keyCol);
                row.appendChild(downloadCol);
                row.appendChild(replaceCol);
                row.appendChild(deleteCol);
                saveTable.appendChild(row);
            }
        });
    }
    /**
     * Gets the local save information as SOL files and downloads them.
     */
    backupSaves() {
        Object.keys(localStorage).forEach((key) => {
            const solName = key.split("/").pop();
            const solData = localStorage.getItem(key);
            if (solData && this.isB64SOL(solData)) {
                this.saveFile(solData, "application/octet-stream", solName + ".sol");
            }
        });
    }
    /**
     * Opens the save manager.
     */
    openSaveManager() {
        this.saveManager.classList.remove("hidden");
    }
    /**
     * Fetches the loaded SWF and downloads it.
     */
    async downloadSwf() {
        try {
            if (this.swfUrl) {
                console.log("Downloading SWF: " + this.swfUrl);
                const response = await fetch(this.swfUrl.href);
                if (!response.ok) {
                    console.error("SWF download failed");
                    return;
                }
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                const swfDownloadA = document.createElement("a");
                swfDownloadA.style.display = "none";
                swfDownloadA.href = blobUrl;
                swfDownloadA.download = swfFileName(this.swfUrl);
                document.body.appendChild(swfDownloadA);
                swfDownloadA.click();
                document.body.removeChild(swfDownloadA);
                URL.revokeObjectURL(blobUrl);
            }
            else {
                console.error("SWF download failed");
            }
        }
        catch (err) {
            console.error("SWF download failed");
        }
    }
    virtualKeyboardInput() {
        const input = this.virtualKeyboard;
        const string = input.value;
        for (const char of string) {
            for (const eventType of ["keydown", "keyup"]) {
                this.dispatchEvent(new KeyboardEvent(eventType, {
                    key: char,
                    bubbles: true,
                }));
            }
        }
        input.value = "";
    }
    openVirtualKeyboard() {
        // On Android, the Rust code that opens the virtual keyboard triggers
        // before the TypeScript code that closes it, so delay opening it
        if (navigator.userAgent.toLowerCase().includes("android")) {
            setTimeout(() => {
                this.virtualKeyboard.focus({ preventScroll: true });
            }, 100);
        }
        else {
            this.virtualKeyboard.focus({ preventScroll: true });
        }
    }
    contextMenuItems() {
        const CHECKMARK = String.fromCharCode(0x2713);
        const items = [];
        const addSeparator = () => {
            // Don't start with or duplicate separators.
            if (items.length > 0 && items.at(-1) !== null) {
                items.push(null);
            }
        };
        if (this.instance) {
            const customItems = this.instance.prepare_context_menu();
            customItems.forEach((item, index) => {
                if (item.separatorBefore) {
                    addSeparator();
                }
                items.push({
                    // TODO: better checkboxes
                    text: item.caption + (item.checked ? ` (${CHECKMARK})` : ``),
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.run_context_menu_callback(index); },
                    enabled: item.enabled,
                });
            });
            addSeparator();
        }
        if (this.fullscreenEnabled) {
            if (this.isFullscreen) {
                items.push({
                    text: "Exit fullscreen",
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(false); },
                });
            }
            else {
                items.push({
                    text: "Enter fullscreen",
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(true); },
                });
            }
        }
        if (this.instance &&
            this.swfUrl &&
            this.loadedConfig &&
            this.loadedConfig.showSwfDownload === true) {
            addSeparator();
            items.push({
                text: "Download .swf",
                onClick: this.downloadSwf.bind(this),
            });
        }
        if (window.isSecureContext) {
            items.push({
                text: "Copy debug info",
                onClick: () => navigator.clipboard.writeText(this.getPanicData()),
            });
        }
        this.populateSaves();
        const localSaveTable = this.saveManager.querySelector("#local-saves");
        if (localSaveTable && localSaveTable.textContent !== "") {
            items.push({
                text: "Open Save Manager",
                onClick: this.openSaveManager.bind(this),
            });
        }
        addSeparator();
        const extensionString = this.isExtension ? "extension" : "";
        items.push({
            text: `About Ruffle ${extensionString} (${buildInfo.versionName})`,
            onClick() {
                window.open(RUFFLE_ORIGIN, "_blank");
            },
        });
        // Give option to disable context menu when touch support is being used
        // to avoid a long press triggering the context menu. (#1972)
        if (this.isTouch) {
            addSeparator();
            items.push({
                text: "Hide this menu",
                onClick: () => (this.contextMenuForceDisabled = true),
            });
        }
        return items;
    }
    clearLongPressTimer() {
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
    }
    startLongPressTimer() {
        const longPressTimeout = 800;
        this.clearLongPressTimer();
        this.longPressTimer = setTimeout(() => this.clearLongPressTimer(), longPressTimeout);
    }
    checkLongPress(event) {
        if (this.longPressTimer) {
            this.clearLongPressTimer();
            // The pointerType condition is to ensure right-click does not trigger
            // a context menu the wrong way the first time you right-click,
            // before contextMenuSupported is set.
        }
        else if (!this.contextMenuSupported &&
            event.pointerType !== "mouse") {
            this.showContextMenu(event);
        }
    }
    showContextMenu(event) {
        event.preventDefault();
        if (event.type === "contextmenu") {
            this.contextMenuSupported = true;
            window.addEventListener("click", this.hideContextMenu.bind(this), {
                once: true,
            });
        }
        else {
            window.addEventListener("pointerup", this.hideContextMenu.bind(this), { once: true });
            event.stopPropagation();
        }
        if ((this.loadedConfig && this.loadedConfig.contextMenu === false) ||
            this.contextMenuForceDisabled) {
            return;
        }
        // Clear all context menu items.
        while (this.contextMenuElement.firstChild) {
            this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
        }
        // Populate context menu items.
        for (const item of this.contextMenuItems()) {
            if (item === null) {
                const menuSeparator = document.createElement("li");
                menuSeparator.className = "menu_separator";
                const hr = document.createElement("hr");
                menuSeparator.appendChild(hr);
                this.contextMenuElement.appendChild(menuSeparator);
            }
            else {
                const { text, onClick, enabled } = item;
                const menuItem = document.createElement("li");
                menuItem.className = "menu_item";
                menuItem.textContent = text;
                this.contextMenuElement.appendChild(menuItem);
                if (enabled !== false) {
                    menuItem.addEventListener(this.contextMenuSupported ? "click" : "pointerup", onClick);
                }
                else {
                    menuItem.classList.add("disabled");
                }
            }
        }
        // Place a context menu in the top-left corner, so
        // its `clientWidth` and `clientHeight` are not clamped.
        this.contextMenuElement.style.left = "0";
        this.contextMenuElement.style.top = "0";
        this.contextMenuElement.style.display = "block";
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.x;
        const y = event.clientY - rect.y;
        const maxX = rect.width - this.contextMenuElement.clientWidth - 1;
        const maxY = rect.height - this.contextMenuElement.clientHeight - 1;
        this.contextMenuElement.style.left =
            Math.floor(Math.min(x, maxX)) + "px";
        this.contextMenuElement.style.top =
            Math.floor(Math.min(y, maxY)) + "px";
    }
    hideContextMenu() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.clear_custom_menu_items();
        this.contextMenuElement.style.display = "none";
    }
    /**
     * Pauses this player.
     *
     * No more frames, scripts or sounds will be executed.
     * This movie will be considered inactive and will not wake up until resumed.
     */
    pause() {
        if (this.instance) {
            this.instance.pause();
            this.playButton.style.display = "block";
        }
    }
    audioState() {
        if (this.instance) {
            const audioContext = this.instance.audio_context();
            return (audioContext && audioContext.state) || "running";
        }
        return "suspended";
    }
    unmuteOverlayClicked() {
        if (this.instance) {
            if (this.audioState() !== "running") {
                const audioContext = this.instance.audio_context();
                if (audioContext) {
                    audioContext.resume();
                }
            }
            this.unmuteOverlay.style.display = "none";
        }
    }
    /**
     * Plays a silent sound based on the AudioContext's sample rate.
     *
     * This is used to unmute audio on iOS and iPadOS when silent mode is enabled on the device (issue 1552).
     */
    unmuteAudioContext() {
        // No need to play the dummy sound again once audio is unmuted.
        if (isAudioContextUnmuted) {
            return;
        }
        // TODO: Use `navigator.userAgentData` to detect the platform when support improves?
        if (navigator.maxTouchPoints < 1) {
            isAudioContextUnmuted = true;
            return;
        }
        this.container.addEventListener("click", () => {
            var _a;
            if (isAudioContextUnmuted) {
                return;
            }
            const audioContext = (_a = this.instance) === null || _a === void 0 ? void 0 : _a.audio_context();
            if (!audioContext) {
                return;
            }
            const audio = new Audio();
            audio.src = (() => {
                // Returns a seven samples long 8 bit mono WAVE file.
                // This is required to prevent the AudioContext from desyncing and crashing.
                const arrayBuffer = new ArrayBuffer(10);
                const dataView = new DataView(arrayBuffer);
                const sampleRate = audioContext.sampleRate;
                dataView.setUint32(0, sampleRate, true);
                dataView.setUint32(4, sampleRate, true);
                dataView.setUint16(8, 1, true);
                const missingCharacters = window
                    .btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
                    .slice(0, 13);
                return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${missingCharacters}AgAZGF0YQcAAACAgICAgICAAAA=`;
            })();
            audio.load();
            audio
                .play()
                .then(() => {
                isAudioContextUnmuted = true;
            })
                .catch((err) => {
                console.warn(`Failed to play dummy sound: ${err}`);
            });
        }, { once: true });
    }
    /**
     * Copies attributes and children from another element to this player element.
     * Used by the polyfill elements, RuffleObject and RuffleEmbed.
     *
     * @param element The element to copy all attributes from.
     * @protected
     */
    copyElement(element) {
        if (element) {
            for (const attribute of element.attributes) {
                if (attribute.specified) {
                    // Issue 468: Chrome "Click to Active Flash" box stomps on title attribute
                    if (attribute.name === "title" &&
                        attribute.value === "Adobe Flash Player") {
                        continue;
                    }
                    try {
                        this.setAttribute(attribute.name, attribute.value);
                    }
                    catch (err) {
                        // The embed may have invalid attributes, so handle these gracefully.
                        console.warn(`Unable to set attribute ${attribute.name} on Ruffle instance`);
                    }
                }
            }
            for (const node of Array.from(element.children)) {
                this.appendChild(node);
            }
        }
    }
    /**
     * Converts a dimension attribute on an HTML embed/object element to a valid CSS dimension.
     * HTML element dimensions are unitless, but can also be percentages.
     * Add a 'px' unit unless the value is a percentage.
     * Returns null if this is not a valid dimension.
     *
     * @param attribute The attribute to convert
     *
     * @private
     */
    static htmlDimensionToCssDimension(attribute) {
        if (attribute) {
            const match = attribute.match(DIMENSION_REGEX);
            if (match) {
                let out = match[1];
                if (!match[3]) {
                    // Unitless -- add px for CSS.
                    out += "px";
                }
                return out;
            }
        }
        return null;
    }
    /**
     * When a movie presents a new callback through `ExternalInterface.addCallback`,
     * we are informed so that we can expose the method on any relevant DOM element.
     *
     * This should only be called by Ruffle itself and not by users.
     *
     * @param name The name of the callback that is now available.
     *
     * @internal
     * @ignore
     */
    onCallbackAvailable(name) {
        const instance = this.instance;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this[name] = (...args) => {
            return instance === null || instance === void 0 ? void 0 : instance.call_exposed_callback(name, args);
        };
    }
    /**
     * Sets a trace observer on this flash player.
     *
     * The observer will be called, as a function, for each message that the playing movie will "trace" (output).
     *
     * @param observer The observer that will be called for each trace.
     */
    set traceObserver(observer) {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_trace_observer(observer);
    }
    /**
     * Get data included in any panic of this ruffle-player
     *
     * @returns A string containing all the data included in the panic.
     */
    getPanicData() {
        const dataArray = [];
        dataArray.push("\n# Player Info\n");
        dataArray.push(this.debugPlayerInfo());
        dataArray.push("\n# Page Info\n");
        dataArray.push(`Page URL: ${document.location.href}\n`);
        if (this.swfUrl) {
            dataArray.push(`SWF URL: ${this.swfUrl}\n`);
        }
        dataArray.push("\n# Browser Info\n");
        dataArray.push(`User Agent: ${window.navigator.userAgent}\n`);
        dataArray.push(`Platform: ${window.navigator.platform}\n`);
        dataArray.push(`Has touch support: ${window.navigator.maxTouchPoints > 0}\n`);
        dataArray.push("\n# Ruffle Info\n");
        dataArray.push(`Version: ${buildInfo.versionNumber}\n`);
        dataArray.push(`Name: ${buildInfo.versionName}\n`);
        dataArray.push(`Channel: ${buildInfo.versionChannel}\n`);
        dataArray.push(`Built: ${buildInfo.buildDate}\n`);
        dataArray.push(`Commit: ${buildInfo.commitHash}\n`);
        dataArray.push(`Is extension: ${this.isExtension}\n`);
        dataArray.push("\n# Metadata\n");
        if (this.metadata) {
            for (const [key, value] of Object.entries(this.metadata)) {
                dataArray.push(`${key}: ${value}\n`);
            }
        }
        return dataArray.join("");
    }
    /**
     * Panics this specific player, forcefully destroying all resources and displays an error message to the user.
     *
     * This should be called when something went absolutely, incredibly and disastrously wrong and there is no chance
     * of recovery.
     *
     * Ruffle will attempt to isolate all damage to this specific player instance, but no guarantees can be made if there
     * was a core issue which triggered the panic. If Ruffle is unable to isolate the cause to a specific player, then
     * all players will panic and Ruffle will become "poisoned" - no more players will run on this page until it is
     * reloaded fresh.
     *
     * @param error The error, if any, that triggered this panic.
     */
    panic(error) {
        var _a;
        if (this.panicked) {
            // Only show the first major error, not any repeats - they aren't as important
            return;
        }
        this.panicked = true;
        this.hideSplashScreen();
        if (error instanceof Error &&
            (error.name === "AbortError" ||
                error.message.includes("AbortError"))) {
            // Firefox: Don't display the panic screen if the user leaves the page while something is still loading
            return;
        }
        const errorIndex = (_a = error === null || error === void 0 ? void 0 : error.ruffleIndexError) !== null && _a !== void 0 ? _a : PanicError.Unknown;
        const errorArray = Object.assign([], {
            stackIndex: -1,
            avmStackIndex: -1,
        });
        errorArray.push("# Error Info\n");
        if (error instanceof Error) {
            errorArray.push(`Error name: ${error.name}\n`);
            errorArray.push(`Error message: ${error.message}\n`);
            if (error.stack) {
                const stackIndex = errorArray.push(`Error stack:\n\`\`\`\n${error.stack}\n\`\`\`\n`) - 1;
                if (error.avmStack) {
                    const avmStackIndex = errorArray.push(`AVM2 stack:\n\`\`\`\n    ${error.avmStack
                        .trim()
                        .replace(/\t/g, "    ")}\n\`\`\`\n`) - 1;
                    errorArray.avmStackIndex = avmStackIndex;
                }
                errorArray.stackIndex = stackIndex;
            }
        }
        else {
            errorArray.push(`Error: ${error}\n`);
        }
        errorArray.push(this.getPanicData());
        const errorText = errorArray.join("");
        const buildDate = new Date(buildInfo.buildDate);
        const monthsPrior = new Date();
        monthsPrior.setMonth(monthsPrior.getMonth() - 6); // 6 months prior
        const isBuildOutdated = monthsPrior > buildDate;
        // Create a link to GitHub with all of the error data, if the build is not outdated.
        // Otherwise, create a link to the downloads section on the Ruffle website.
        let actionTag;
        if (!isBuildOutdated) {
            // Remove query params for the issue title.
            const pageUrl = document.location.href.split(/[?#]/)[0];
            const issueTitle = `Error on ${pageUrl}`;
            let issueLink = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(issueTitle)}&template=error_report.md&labels=error-report&body=`;
            let issueBody = encodeURIComponent(errorText);
            if (errorArray.stackIndex > -1 &&
                String(issueLink + issueBody).length > 8195) {
                // Strip the stack error from the array when the produced URL is way too long.
                // This should prevent "414 Request-URI Too Large" errors on GitHub.
                errorArray[errorArray.stackIndex] = null;
                if (errorArray.avmStackIndex > -1) {
                    errorArray[errorArray.avmStackIndex] = null;
                }
                issueBody = encodeURIComponent(errorArray.join(""));
            }
            issueLink += issueBody;
            actionTag = `<a target="_top" href="${issueLink}">Report Bug</a>`;
        }
        else {
            actionTag = `<a target="_top" href="${RUFFLE_ORIGIN}#downloads">Update Ruffle</a>`;
        }
        // Clears out any existing content (ie play button or canvas) and replaces it with the error screen
        let errorBody, errorFooter;
        switch (errorIndex) {
            case PanicError.FileProtocol:
                // General error: Running on the `file:` protocol
                errorBody = `
                    <p>It appears you are running Ruffle on the "file:" protocol.</p>
                    <p>This doesn't work as browsers block many features from working for security reasons.</p>
                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="${RUFFLE_ORIGIN}/demo">Web Demo</a></li>
                    <li><a target="_top" href="${RUFFLE_ORIGIN}#downloads">Desktop Application</a></li>
                `;
                break;
            case PanicError.JavascriptConfiguration:
                // General error: Incorrect JavaScript configuration
                errorBody = `
                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>
                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>
                    <p>You can also consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.WasmNotFound:
                // Self hosted: Cannot load `.wasm` file - file not found
                errorBody = `
                    <p>Ruffle failed to load the required ".wasm" file component.</p>
                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>
                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.WasmMimeType:
                // Self hosted: Cannot load `.wasm` file - incorrect MIME type
                errorBody = `
                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>
                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>
                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.SwfFetchError:
                errorBody = `
                    <p>Ruffle failed to load the Flash SWF file.</p>
                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>
                    <p>Try contacting the website administrator for help.</p>
                `;
                errorFooter = `
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.SwfCors:
                // Self hosted: Cannot load SWF file - CORS issues
                errorBody = `
                    <p>Ruffle failed to load the Flash SWF file.</p>
                    <p>Access to fetch has likely been blocked by CORS policy.</p>
                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.WasmCors:
                // Self hosted: Cannot load `.wasm` file - CORS issues
                errorBody = `
                    <p>Ruffle failed to load the required ".wasm" file component.</p>
                    <p>Access to fetch has likely been blocked by CORS policy.</p>
                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.InvalidWasm:
                // Self hosted: Cannot load `.wasm` file - incorrect configuration or missing files
                errorBody = `
                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>
                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>
                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.WasmDownload:
                // Usually a transient network error or botched deployment
                errorBody = `
                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>
                    <p>This can often resolve itself, so you can try reloading the page.</p>
                    <p>Otherwise, please contact the website administrator.</p>
                `;
                errorFooter = `
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.WasmDisabledMicrosoftEdge:
                // Self hosted: User has disabled WebAssembly in Microsoft Edge through the
                // "Enhance your Security on the web" setting.
                errorBody = `
                    <p>Ruffle failed to load the required ".wasm" file component.</p>
                    <p>To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".</p>
                    <p>This will allow your browser to load the required ".wasm" files.</p>
                    <p>If the issue persists, you might have to use a different browser.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error">More Information</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.JavascriptConflict:
                // Self hosted: Cannot load `.wasm` file - a native object / function is overriden
                errorBody = `
                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>
                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>
                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>
                `;
                if (isBuildOutdated) {
                    errorBody += `<p>You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: ${buildInfo.buildDate}).</p>`;
                }
                errorFooter = `
                    <li>${actionTag}</li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            case PanicError.CSPConflict:
                // General error: Cannot load `.wasm` file - a native object / function is overriden
                errorBody = `
                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>
                    <p>This web server's Content Security Policy does not allow the required ".wasm" component to run.</p>
                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>
                `;
                errorFooter = `
                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
            default:
                // Unknown error
                errorBody = `<p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>`;
                if (!isBuildOutdated) {
                    errorBody += `<p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>`;
                }
                else {
                    errorBody += `<p>If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: ${buildInfo.buildDate}).</p>`;
                }
                errorFooter = `
                    <li>${actionTag}</li>
                    <li><a href="#" id="panic-view-details">View Error Details</a></li>
                `;
                break;
        }
        this.container.innerHTML = `
            <div id="panic">
                <div id="panic-title">Something went wrong :(</div>
                <div id="panic-body">${errorBody}</div>
                <div id="panic-footer">
                    <ul>${errorFooter}</ul>
                </div>
            </div>
        `;
        const viewDetails = (this.container.querySelector("#panic-view-details"));
        if (viewDetails) {
            viewDetails.onclick = () => {
                const panicBody = (this.container.querySelector("#panic-body"));
                panicBody.classList.add("details");
                panicBody.innerHTML = `<textarea>${errorText}</textarea>`;
                return false;
            };
        }
        // Do this last, just in case it causes any cascading issues.
        this.destroy();
    }
    displayRootMovieDownloadFailedMessage() {
        if (this.isExtension &&
            window.location.origin !== this.swfUrl.origin) {
            this.hideSplashScreen();
            const div = document.createElement("div");
            div.id = "message_overlay";
            div.innerHTML = `<div class="message">
                <p>Ruffle wasn't able to run the Flash embedded in this page.</p>
                <p>You can try to open the file in a separate tab, to sidestep this issue.</p>
                <div>
                    <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>
                </div>
            </div>`;
            this.container.prepend(div);
        }
        else {
            const error = new Error("Failed to fetch: " + this.swfUrl);
            if (!this.swfUrl.protocol.includes("http")) {
                error.ruffleIndexError = PanicError.FileProtocol;
            }
            else if (window.location.origin === this.swfUrl.origin) {
                error.ruffleIndexError = PanicError.SwfFetchError;
            }
            else {
                // This is a selfhosted build of Ruffle that tried to make a cross-origin request
                error.ruffleIndexError = PanicError.SwfCors;
            }
            this.panic(error);
        }
    }
    displayUnsupportedMessage() {
        const div = document.createElement("div");
        div.id = "message_overlay";
        // TODO: Change link to https://ruffle.rs/faq or similar
        // TODO: Pause content until message is dismissed
        div.innerHTML = `<div class="message">
            <p>The Ruffle emulator may not yet fully support all of ActionScript 3 used by this content.</p>
            <p>Some parts of the content may not work as expected.</p>
            <div>
                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>
                <button id="run-anyway-btn">Run anyway</button>
            </div>
        </div>`;
        this.container.prepend(div);
        const button = div.querySelector("#run-anyway-btn");
        button.onclick = () => {
            div.parentNode.removeChild(div);
        };
    }
    /**
     * Show a dismissible message in front of the player.
     *
     * @param message The message shown to the user.
     */
    displayMessage(message) {
        const div = document.createElement("div");
        div.id = "message_overlay";
        div.innerHTML = `<div class="message">
            <p>${message}</p>
            <div>
                <button id="continue-btn">continue</button>
            </div>
        </div>`;
        this.container.prepend(div);
        (this.container.querySelector("#continue-btn")).onclick = () => {
            div.parentNode.removeChild(div);
        };
    }
    debugPlayerInfo() {
        let result = `Allows script access: ${this.loadedConfig ? this.loadedConfig.allowScriptAccess : false}\n`;
        let renderInfo = `(Cached) ${this._cachedDebugInfo}`;
        if (this.instance) {
            try {
                renderInfo = this.instance.renderer_debug_info();
            }
            catch (_a) {
                // ignored
            }
        }
        if (renderInfo) {
            result += `${renderInfo}\n`;
        }
        return result;
    }
    hideSplashScreen() {
        this.splashScreen.classList.add("hidden");
        this.container.classList.remove("hidden");
    }
    showSplashScreen() {
        this.splashScreen.classList.remove("hidden");
        this.container.classList.add("hidden");
    }
    setMetadata(metadata) {
        this._metadata = metadata;
        // TODO: Switch this to ReadyState.Loading when we have streaming support.
        this._readyState = ReadyState.Loaded;
        this.hideSplashScreen();
        this.dispatchEvent(new Event(RufflePlayer.LOADED_METADATA));
        // TODO: Move this to whatever function changes the ReadyState to Loaded when we have streaming support.
        this.dispatchEvent(new Event(RufflePlayer.LOADED_DATA));
    }
    setIsExtension(isExtension) {
        this.isExtension = isExtension;
    }
}
/**
 * Triggered when a movie metadata has been loaded (such as movie width and height).
 *
 * @event RufflePlayer#loadedmetadata
 */
RufflePlayer.LOADED_METADATA = "loadedmetadata";
/**
 * Triggered when a movie is fully loaded.
 *
 * @event RufflePlayer#loadeddata
 */
RufflePlayer.LOADED_DATA = "loadeddata";

/**
 * Describes the loading state of an SWF movie.
 */
var ReadyState;
(function (ReadyState) {
    /**
     * No movie is loaded, or no information is yet available about the movie.
     */
    ReadyState[ReadyState["HaveNothing"] = 0] = "HaveNothing";
    /**
     * The movie is still loading, but it has started playback, and metadata is available.
     */
    ReadyState[ReadyState["Loading"] = 1] = "Loading";
    /**
     * The movie has completely loaded.
     */
    ReadyState[ReadyState["Loaded"] = 2] = "Loaded";
})(ReadyState || (ReadyState = {}));
/**
 * Returns whether a SWF file can call JavaScript code in the surrounding HTML file.
 *
 * @param access The value of the `allowScriptAccess` attribute.
 * @param url The URL of the SWF file.
 * @returns True if script access is allowed.
 */
function isScriptAccessAllowed(access, url) {
    if (!access) {
        access = "sameDomain";
    }
    switch (access.toLowerCase()) {
        case "always":
            return true;
        case "never":
            return false;
        case "samedomain":
        default:
            try {
                return (new URL(window.location.href).origin ===
                    new URL(url, window.location.href).origin);
            }
            catch (_a) {
                return false;
            }
    }
}
/**
 * Returns whether a SWF file should show the built-in context menu items.
 *
 * @param menu The value of the `menu` attribute.
 * @returns True if the built-in context items should be shown.
 */
function isBuiltInContextMenuVisible(menu) {
    if (menu === null || menu.toLowerCase() === "true") {
        return true;
    }
    return false;
}
/**
 * Returns whether the given filename is a Youtube Flash source.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a Youtube Flash source.
 */
function isYoutubeFlashSource(filename) {
    if (filename) {
        let pathname = "";
        let cleaned_hostname = "";
        try {
            // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
            const url = new URL(filename, RUFFLE_ORIGIN);
            pathname = url.pathname;
            cleaned_hostname = url.hostname.replace("www.", "");
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
        // See https://wiki.mozilla.org/QA/Youtube_Embedded_Rewrite
        if (pathname.startsWith("/v/") &&
            (cleaned_hostname === "youtube.com" ||
                cleaned_hostname === "youtube-nocookie.com")) {
            return true;
        }
    }
    return false;
}
/**
 * Workaround Youtube mixed content if upgradeToHttps is true.
 *
 * @param elem The element to change.
 * @param attr The attribute to adjust.
 */
function workaroundYoutubeMixedContent(elem, attr) {
    var _a, _b;
    const elem_attr = elem.getAttribute(attr);
    const window_config = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
    if (elem_attr) {
        try {
            const url = new URL(elem_attr);
            if (url.protocol === "http:" &&
                window.location.protocol === "https:" &&
                (!("upgradeToHttps" in window_config) ||
                    window_config.upgradeToHttps !== false)) {
                url.protocol = "https:";
                elem.setAttribute(attr, url.toString());
            }
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
    }
}
/**
 * Returns whether the given filename ends in a known flash extension.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a flash movie (swf or spl).
 */
function isSwfFilename(filename) {
    if (filename) {
        let pathname = "";
        try {
            // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
            pathname = new URL(filename, RUFFLE_ORIGIN).pathname;
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
        if (pathname && pathname.length >= 4) {
            const extension = pathname.slice(-4).toLowerCase();
            if (extension === ".swf" || extension === ".spl") {
                return true;
            }
        }
    }
    return false;
}
/**
 * Returns whether the given MIME type is a known flash type.
 *
 * @param mimeType The MIME type to test.
 * @returns True if the MIME type is a flash MIME type.
 */
function isSwfMimeType(mimeType) {
    switch (mimeType.toLowerCase()) {
        case FLASH_MIMETYPE.toLowerCase():
        case FUTURESPLASH_MIMETYPE.toLowerCase():
        case FLASH7_AND_8_MIMETYPE.toLowerCase():
        case FLASH_MOVIE_MIMETYPE.toLowerCase():
            return true;
        default:
            return false;
    }
}
/**
 * Determine if an element is a child of a node that was not supported
 * in non-HTML5 compliant browsers. If so, the element was meant to be
 * used as a fallback content.
 *
 * @param elem The element to test.
 * @returns True if the element is inside an <audio> or <video> node.
 */
function isFallbackElement(elem) {
    let parent = elem.parentElement;
    while (parent !== null) {
        switch (parent.tagName) {
            case "AUDIO":
            case "VIDEO":
                return true;
        }
        parent = parent.parentElement;
    }
    return false;
}

;// CONCATENATED MODULE: ../core/dist/ruffle-embed.js



/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<embed>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleEmbed extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<embed>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        super.connectedCallback();
        const src = this.attributes.getNamedItem("src");
        if (src) {
            const allowScriptAccess = (_b = (_a = this.attributes.getNamedItem("allowScriptAccess")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
            const menu = (_d = (_c = this.attributes.getNamedItem("menu")) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : null;
            // Kick off the SWF download.
            this.load({
                url: src.value,
                allowScriptAccess: isScriptAccessAllowed(allowScriptAccess, src.value),
                parameters: (_f = (_e = this.attributes.getNamedItem("flashvars")) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : null,
                backgroundColor: (_h = (_g = this.attributes.getNamedItem("bgcolor")) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : null,
                base: (_k = (_j = this.attributes.getNamedItem("base")) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : null,
                menu: isBuiltInContextMenuVisible(menu),
                salign: (_m = (_l = this.attributes.getNamedItem("salign")) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : "",
                quality: (_p = (_o = this.attributes.getNamedItem("quality")) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : "high",
                scale: (_r = (_q = this.attributes.getNamedItem("scale")) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : "showAll",
                wmode: (_t = (_s = this.attributes.getNamedItem("wmode")) === null || _s === void 0 ? void 0 : _s.value) !== null && _t !== void 0 ? _t : WindowMode.Window,
            });
        }
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get src() {
        var _a;
        return (_a = this.attributes.getNamedItem("src")) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    set src(srcval) {
        if (srcval) {
            const attr = document.createAttribute("src");
            attr.value = srcval;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("src");
        }
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["src", "width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, oldValue, newValue) {
        var _a, _b, _c, _d;
        super.attributeChangedCallback(name, oldValue, newValue);
        if (this.isConnected && name === "src") {
            const src = this.attributes.getNamedItem("src");
            if (src) {
                this.load({
                    url: src.value,
                    parameters: (_b = (_a = this.attributes.getNamedItem("flashvars")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null,
                    base: (_d = (_c = this.attributes.getNamedItem("base")) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : null,
                });
            }
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a flash embed.
     */
    static isInterdictable(elem) {
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill when no file is specified.
        if (!elem.getAttribute("src")) {
            return false;
        }
        // Don't polyfill when the file is a Youtube Flash source.
        if (isYoutubeFlashSource(elem.getAttribute("src"))) {
            // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well
            workaroundYoutubeMixedContent(elem, "src");
            return false;
        }
        // Check for MIME type.
        const type = elem.getAttribute("type");
        if (!type) {
            // If no MIME type is specified, polyfill if movie is an SWF file.
            return isSwfFilename(elem.getAttribute("src"));
        }
        else {
            return isSwfMimeType(type);
        }
    }
    /**
     * Creates a RuffleEmbed that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleEmbed.
     */
    static fromNativeEmbedElement(elem) {
        const externalName = registerElement("ruffle-embed", RuffleEmbed);
        const ruffleObj = document.createElement(externalName);
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/ruffle-object.js




/**
 * Find and return the first value in obj with the given key.
 * Many Flash params were case insensitive, so we use this when checking for them.
 *
 * @param obj Object to check
 * @param key Key to find
 * @param defaultValue Value if not found
 * @returns Value if found, else [[defaultValue]]
 */
function findCaseInsensitive(obj, key, defaultValue) {
    key = key.toLowerCase();
    for (const [k, value] of Object.entries(obj)) {
        if (k.toLowerCase() === key) {
            return value;
        }
    }
    return defaultValue;
}
/**
 * Returns all flash params ([[HTMLParamElement]]) that are for the given object.
 *
 * @param elem Element to check.
 * @returns A record of every parameter.
 */
function paramsOf(elem) {
    var _a, _b;
    const params = {};
    for (const param of elem.children) {
        if (param instanceof HTMLParamElement) {
            const key = (_a = param.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
            const value = (_b = param.attributes.getNamedItem("value")) === null || _b === void 0 ? void 0 : _b.value;
            if (key && value) {
                params[key] = value;
            }
        }
    }
    return params;
}
/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<object>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleObject extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<object>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
        this.params = {};
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.params = paramsOf(this);
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        const allowScriptAccess = findCaseInsensitive(this.params, "allowScriptAccess", null);
        const parameters = findCaseInsensitive(this.params, "flashvars", this.getAttribute("flashvars"));
        const backgroundColor = findCaseInsensitive(this.params, "bgcolor", this.getAttribute("bgcolor"));
        const base = findCaseInsensitive(this.params, "base", this.getAttribute("base"));
        const menu = findCaseInsensitive(this.params, "menu", null);
        const salign = findCaseInsensitive(this.params, "salign", "");
        const quality = findCaseInsensitive(this.params, "quality", "high");
        const scale = findCaseInsensitive(this.params, "scale", "showAll");
        const wmode = findCaseInsensitive(this.params, "wmode", "window");
        if (url) {
            const options = { url };
            options.allowScriptAccess = isScriptAccessAllowed(allowScriptAccess, url);
            if (parameters) {
                options.parameters = parameters;
            }
            if (backgroundColor) {
                options.backgroundColor = backgroundColor;
            }
            if (base) {
                options.base = base;
            }
            options.menu = isBuiltInContextMenuVisible(menu);
            if (salign) {
                options.salign = salign;
            }
            if (quality) {
                options.quality = quality;
            }
            if (scale) {
                options.scale = scale;
            }
            if (wmode) {
                options.wmode = wmode;
            }
            // Kick off the SWF download.
            this.load(options);
        }
    }
    debugPlayerInfo() {
        var _a;
        let errorText = super.debugPlayerInfo();
        errorText += "Player type: Object\n";
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        errorText += `SWF URL: ${url}\n`;
        Object.keys(this.params).forEach((key) => {
            errorText += `Param ${key}: ${this.params[key]}\n`;
        });
        Object.keys(this.attributes).forEach((key) => {
            var _a;
            errorText += `Attribute ${key}: ${(_a = this.attributes.getNamedItem(key)) === null || _a === void 0 ? void 0 : _a.value}\n`;
        });
        return errorText;
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get data() {
        return this.getAttribute("data");
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    set data(href) {
        if (href) {
            const attr = document.createAttribute("data");
            attr.value = href;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("data");
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a flash object.
     */
    static isInterdictable(elem) {
        var _a, _b;
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill if there's already a <ruffle-object> or a <ruffle-embed> inside the <object>.
        if (elem.getElementsByTagName("ruffle-object").length > 0 ||
            elem.getElementsByTagName("ruffle-embed").length > 0) {
            return false;
        }
        // Don't polyfill if no movie specified.
        const data = (_a = elem.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value.toLowerCase();
        const params = paramsOf(elem);
        let isSwf;
        // Check for SWF file.
        if (data) {
            // Don't polyfill when the file is a Youtube Flash source.
            if (isYoutubeFlashSource(data)) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well
                workaroundYoutubeMixedContent(elem, "data");
                return false;
            }
            isSwf = isSwfFilename(data);
        }
        else if (params && params["movie"]) {
            // Don't polyfill when the file is a Youtube Flash source.
            if (isYoutubeFlashSource(params["movie"])) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well
                const movie_elem = elem.querySelector("param[name='movie']");
                if (movie_elem) {
                    workaroundYoutubeMixedContent(movie_elem, "value");
                    // The data attribute needs to be set for the re-fetch to happen
                    // It also needs to be set on Firefox for the YouTube object rewrite to work, regardless of mixed content
                    const movie_src = movie_elem.getAttribute("value");
                    if (movie_src) {
                        elem.setAttribute("data", movie_src);
                    }
                }
                return false;
            }
            isSwf = isSwfFilename(params["movie"]);
        }
        else {
            // Don't polyfill when no file is specified.
            return false;
        }
        // Check ActiveX class ID.
        const classid = (_b = elem.attributes
            .getNamedItem("classid")) === null || _b === void 0 ? void 0 : _b.value.toLowerCase();
        if (classid === FLASH_ACTIVEX_CLASSID.toLowerCase()) {
            // classid is an old-IE style embed that would not work on modern browsers.
            // Often there will be an <embed> inside the <object> that would take precedence.
            // Only polyfill this <object> if it doesn't contain a polyfillable <embed> or
            // another <object> that would be supported on modern browsers.
            return (!Array.from(elem.getElementsByTagName("object")).some(RuffleObject.isInterdictable) &&
                !Array.from(elem.getElementsByTagName("embed")).some(RuffleEmbed.isInterdictable));
        }
        else if (classid) {
            // Non-Flash classid.
            return false;
        }
        // Check for MIME type.
        const type = elem.attributes.getNamedItem("type");
        if (!type) {
            // If no MIME type is specified, polyfill if movie is an SWF file.
            return isSwf;
        }
        else {
            return isSwfMimeType(type.value);
        }
    }
    /**
     * Creates a RuffleObject that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleObject.
     */
    static fromNativeObjectElement(elem) {
        const externalName = registerElement("ruffle-object", RuffleObject);
        const ruffleObj = (document.createElement(externalName));
        // Avoid copying embeds-inside-objects to avoid double polyfilling.
        for (const embedElem of Array.from(elem.getElementsByTagName("embed"))) {
            if (RuffleEmbed.isInterdictable(embedElem)) {
                embedElem.remove();
            }
        }
        // Avoid copying objects-inside-objects to avoid double polyfilling.
        // This may happen when Internet Explorer's conditional comments are used.
        for (const objectElem of Array.from(elem.getElementsByTagName("object"))) {
            if (RuffleObject.isInterdictable(objectElem)) {
                objectElem.remove();
            }
        }
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/polyfills.js
var _a, _b;




let isExtension;
const globalConfig = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
const jsScriptUrl = publicPath(globalConfig) + "ruffle.js";
/**
 * Polyfill native Flash elements with Ruffle equivalents.
 *
 * This polyfill isn't fool-proof: If there's a chance site JavaScript has
 * access to a pre-polyfill element, then this will break horribly. We can
 * keep native objects out of the DOM, and thus out of JavaScript's grubby
 * little hands, but only if we load first.
 */
let objects;
let polyfills_embeds;
/**
 *
 */
function polyfillFlashInstances() {
    try {
        // Create live collections to track embed tags.
        objects = objects !== null && objects !== void 0 ? objects : document.getElementsByTagName("object");
        polyfills_embeds = polyfills_embeds !== null && polyfills_embeds !== void 0 ? polyfills_embeds : document.getElementsByTagName("embed");
        // Replace <object> first, because <object> often wraps <embed>.
        for (const elem of Array.from(objects)) {
            if (RuffleObject.isInterdictable(elem)) {
                const ruffleObject = RuffleObject.fromNativeObjectElement(elem);
                ruffleObject.setIsExtension(isExtension);
                elem.replaceWith(ruffleObject);
            }
        }
        for (const elem of Array.from(polyfills_embeds)) {
            if (RuffleEmbed.isInterdictable(elem)) {
                const ruffleEmbed = RuffleEmbed.fromNativeEmbedElement(elem);
                ruffleEmbed.setIsExtension(isExtension);
                elem.replaceWith(ruffleEmbed);
            }
        }
    }
    catch (err) {
        console.error(`Serious error encountered when polyfilling native Flash elements: ${err}`);
    }
}
/**
 * Inject Ruffle into <iframe> and <frame> elements.
 *
 * This polyfill isn't fool-proof either: On self-hosted builds, it may
 * not work due to browsers CORS policy or be loaded too late for some
 * libraries like SWFObject. These should be less of a problem on the
 * web extension. This polyfill should, however, do the trick in most
 * cases, but users should be aware of its natural limits.
 */
let iframes;
let polyfills_frames;
/**
 *
 */
function polyfillFrames() {
    // Create live collections to track embed tags.
    iframes = iframes !== null && iframes !== void 0 ? iframes : document.getElementsByTagName("iframe");
    polyfills_frames = polyfills_frames !== null && polyfills_frames !== void 0 ? polyfills_frames : document.getElementsByTagName("frame");
    [iframes, polyfills_frames].forEach((elements) => {
        for (const element of elements) {
            if (element.dataset["rufflePolyfilled"] !== undefined) {
                // Don't re-polyfill elements with the "data-ruffle-polyfilled" attribute.
                continue;
            }
            element.dataset["rufflePolyfilled"] = "";
            const elementWindow = element.contentWindow;
            // Cross origin requests may reach an exception, so let's prepare for this eventuality.
            const errorMessage = `Couldn't load Ruffle into ${element.tagName}[${element.src}]: `;
            try {
                if (elementWindow.document.readyState === "complete") {
                    injectRuffle(elementWindow, errorMessage);
                }
            }
            catch (err) {
                if (!isExtension) {
                    // The web extension should be able to load Ruffle into cross origin frames
                    // because it has "all_frames" set to true in its manifest.json: RufflePlayer
                    // config won't be injected but it's not worth showing an error.
                    console.warn(errorMessage + err);
                }
            }
            // Attach listener to the element to handle frame navigation.
            element.addEventListener("load", () => {
                injectRuffle(elementWindow, errorMessage);
            }, false);
        }
    });
}
/**
 * @param elementWindow The (i)frame's window object.
 * @param errorMessage The message to log when Ruffle cannot access the (i)frame's document.
 */
async function injectRuffle(elementWindow, errorMessage) {
    var _a;
    // The document is supposed to be completely loaded when this function is run.
    // As Chrome may be unable to access the document properties, we have to delay the execution a little bit.
    await new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 100);
    });
    let elementDocument;
    try {
        elementDocument = elementWindow.document;
        if (!elementDocument) {
            // Don't polyfill if the window has no document: the element may have been removed from the parent window.
            return;
        }
    }
    catch (err) {
        if (!isExtension) {
            console.warn(errorMessage + err);
        }
        return;
    }
    if (!isExtension &&
        elementDocument.documentElement.dataset["ruffleOptout"] !== undefined) {
        // Don't polyfill elements with the "data-ruffle-optout" attribute.
        return;
    }
    if (!isExtension) {
        if (!elementWindow.RufflePlayer) {
            const script = elementDocument.createElement("script");
            script.setAttribute("src", jsScriptUrl);
            script.onload = () => {
                // Inject parent configuration once the script is loaded, preventing it from being ignored.
                elementWindow.RufflePlayer = {};
                elementWindow.RufflePlayer.config = globalConfig;
            };
            elementDocument.head.appendChild(script);
        }
    }
    else {
        if (!elementWindow.RufflePlayer) {
            elementWindow.RufflePlayer = {};
        }
        // Merge parent window and frame configurations, will likely be applied too late though.
        elementWindow.RufflePlayer.config = Object.assign(Object.assign({}, globalConfig), ((_a = elementWindow.RufflePlayer.config) !== null && _a !== void 0 ? _a : {}));
    }
}
/**
 * Listen for changes to the DOM.
 *
 */
function initMutationObserver() {
    const observer = new MutationObserver(function (mutationsList) {
        // If any nodes were added, re-run the polyfill to detect any new instances.
        const nodesAdded = mutationsList.some((mutation) => mutation.addedNodes.length > 0);
        if (nodesAdded) {
            polyfillFlashInstances();
            polyfillFrames();
        }
    });
    observer.observe(document, { childList: true, subtree: true });
}
/**
 * Polyfills the detection of Flash plugins in the browser.
 */
function pluginPolyfill() {
    installPlugin(FLASH_PLUGIN);
}
/**
 * Polyfills legacy Flash content on the page.
 *
 * @param isExt Whether or not Ruffle is running as a browser's extension.
 */
function polyfill(isExt) {
    var _a;
    isExtension = isExt;
    const usingExtension = ((_a = navigator.plugins.namedItem("Ruffle Extension")) === null || _a === void 0 ? void 0 : _a.filename) ===
        "ruffle.js";
    if (isExtension || !usingExtension) {
        polyfillFlashInstances();
        polyfillFrames();
        initMutationObserver();
    }
}

;// CONCATENATED MODULE: ../core/dist/version.js
/**
 * A representation of a semver 2 compliant version string
 */
class Version {
    /**
     * Construct a Version from specific components.
     *
     * If you wish to parse a string into a Version then please use [[fromSemver]].
     *
     * @param major The major version component.
     * @param minor The minor version component.
     * @param patch The patch version component.
     * @param prIdent A list of pre-release identifiers, if any
     * @param buildIdent A list of build identifiers, if any
     */
    constructor(major, minor, patch, prIdent, 
    // @ts-expect-error: Property 'buildIdent' is declared but its value is never read.
    buildIdent) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.prIdent = prIdent;
        this.buildIdent = buildIdent;
    }
    /**
     * Construct a version from a semver 2 compliant string.
     *
     * This function is intended for use with semver 2 compliant strings.
     * Malformed strings may still parse correctly, but this result is not
     * guaranteed.
     *
     * @param versionString A semver 2.0.0 compliant version string
     * @returns A version object
     */
    static fromSemver(versionString) {
        const buildSplit = versionString.split("+"), prSplit = buildSplit[0].split("-"), versionSplit = prSplit[0].split(".");
        const major = parseInt(versionSplit[0], 10);
        let minor = 0;
        let patch = 0;
        let prIdent = null;
        let buildIdent = null;
        if (versionSplit[1] !== undefined) {
            minor = parseInt(versionSplit[1], 10);
        }
        if (versionSplit[2] !== undefined) {
            patch = parseInt(versionSplit[2], 10);
        }
        if (prSplit[1] !== undefined) {
            prIdent = prSplit[1].split(".");
        }
        if (buildSplit[1] !== undefined) {
            buildIdent = buildSplit[1].split(".");
        }
        return new Version(major, minor, patch, prIdent, buildIdent);
    }
    /**
     * Returns true if a given version is compatible with this one.
     *
     * Compatibility is defined as having the same nonzero major version
     * number, or if both major versions are zero, the same nonzero minor
     * version number, or if both minor versions are zero, the same nonzero
     * patch version number.
     *
     * This implements the ^ operator in npm's semver package, with the
     * exception of the prerelease exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if compatible
     */
    isCompatibleWith(other) {
        return ((this.major !== 0 && this.major === other.major) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor !== 0 &&
                this.minor === other.minor) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor === 0 &&
                other.minor === 0 &&
                this.patch !== 0 &&
                this.patch === other.patch));
    }
    /**
     * Returns true if this version has precedence over (is newer than) another
     * version.
     *
     * Precedence is defined as in the Semver 2 spec. This implements the >
     * operator in npm's semver package, with the exception of the prerelease
     * exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if this version has precedence over the other one
     */
    hasPrecedenceOver(other) {
        if (this.major > other.major) {
            return true;
        }
        else if (this.major < other.major) {
            return false;
        }
        if (this.minor > other.minor) {
            return true;
        }
        else if (this.minor < other.minor) {
            return false;
        }
        if (this.patch > other.patch) {
            return true;
        }
        else if (this.patch < other.patch) {
            return false;
        }
        if (this.prIdent === null && other.prIdent !== null) {
            return true;
        }
        else if (this.prIdent !== null && other.prIdent !== null) {
            const isNumeric = /^[0-9]*$/;
            for (let i = 0; i < this.prIdent.length && i < other.prIdent.length; i += 1) {
                if (!isNumeric.test(this.prIdent[i]) &&
                    isNumeric.test(other.prIdent[i])) {
                    return true;
                }
                else if (isNumeric.test(this.prIdent[i]) &&
                    isNumeric.test(other.prIdent[i])) {
                    if (parseInt(this.prIdent[i], 10) >
                        parseInt(other.prIdent[i], 10)) {
                        return true;
                    }
                    else if (parseInt(this.prIdent[i], 10) <
                        parseInt(other.prIdent[i], 10)) {
                        return false;
                    }
                }
                else if (isNumeric.test(this.prIdent[i]) &&
                    !isNumeric.test(other.prIdent[i])) {
                    return false;
                }
                else if (!isNumeric.test(this.prIdent[i]) &&
                    !isNumeric.test(other.prIdent[i])) {
                    if (this.prIdent[i] > other.prIdent[i]) {
                        return true;
                    }
                    else if (this.prIdent[i] < other.prIdent[i]) {
                        return false;
                    }
                }
            }
            return this.prIdent.length > other.prIdent.length;
        }
        return false;
    }
    /**
     * Tests if a given version is equivalent to this one.
     *
     * Build and prerelease tags are ignored.
     *
     * @param other The other version to test against
     * @returns True if the given version is equivalent
     */
    isEqual(other) {
        return (this.major === other.major &&
            this.minor === other.minor &&
            this.patch === other.patch);
    }
    /**
     * Tests if a given version is stable or a compatible prerelease for this
     * version.
     *
     * This implements the prerelease exclusion rule of NPM semver: a
     * prerelease version can only pass this check if the major/minor/patch
     * components of both versions are the same. Otherwise, the prerelease
     * version always fails.
     *
     * @param other The other version to test against
     * @returns True if the given version is either stable, or a
     * prerelease in the same series as this one.
     */
    isStableOrCompatiblePrerelease(other) {
        if (other.prIdent === null) {
            return true;
        }
        else {
            return (this.major === other.major &&
                this.minor === other.minor &&
                this.patch === other.patch);
        }
    }
}

;// CONCATENATED MODULE: ../core/dist/version-range.js

/**
 * Represents a set of version requirements.
 */
class VersionRange {
    /**
     * Constructs a range of versions as specified by the given requirements.
     *
     * If you wish to construct this object from a string representation,
     * then use [[fromRequirementString]].
     *
     * @param requirements Requirements to set this range by
     */
    constructor(requirements) {
        this.requirements = requirements;
    }
    /**
     * Determine if a given version satisfies this range.
     *
     * @param fver A version object to test against.
     * @returns Whether or not the given version matches this range
     */
    satisfiedBy(fver) {
        for (const requirement of this.requirements) {
            let matches = true;
            for (const { comparator, version } of requirement) {
                matches =
                    matches && version.isStableOrCompatiblePrerelease(fver);
                if (comparator === "" || comparator === "=") {
                    matches = matches && version.isEqual(fver);
                }
                else if (comparator === ">") {
                    matches = matches && fver.hasPrecedenceOver(version);
                }
                else if (comparator === ">=") {
                    matches =
                        matches &&
                            (fver.hasPrecedenceOver(version) ||
                                version.isEqual(fver));
                }
                else if (comparator === "<") {
                    matches = matches && version.hasPrecedenceOver(fver);
                }
                else if (comparator === "<=") {
                    matches =
                        matches &&
                            (version.hasPrecedenceOver(fver) ||
                                version.isEqual(fver));
                }
                else if (comparator === "^") {
                    matches = matches && version.isCompatibleWith(fver);
                }
            }
            if (matches) {
                return true;
            }
        }
        return false;
    }
    /**
     * Parse a requirement string into a version range.
     *
     * @param requirement The version requirements, consisting of a
     * series of space-separated strings, each one being a semver version
     * optionally prefixed by a comparator or a separator.
     *
     * Valid comparators are:
     * - `""` or `"="`: Precisely this version
     * - `">`": A version newer than this one
     * - `">`=": A version newer or equal to this one
     * - `"<"`: A version older than this one
     * - `"<="`: A version older or equal to this one
     * - `"^"`: A version that is compatible with this one
     *
     * A separator is `"||`" which splits the requirement string into
     * left OR right.
     * @returns A version range object.
     */
    static fromRequirementString(requirement) {
        const components = requirement.split(" ");
        let set = [];
        const requirements = [];
        for (const component of components) {
            if (component === "||") {
                if (set.length > 0) {
                    requirements.push(set);
                    set = [];
                }
            }
            else if (component.length > 0) {
                const match = /[0-9]/.exec(component);
                if (match) {
                    const comparator = component.slice(0, match.index).trim();
                    const version = Version.fromSemver(component.slice(match.index).trim());
                    set.push({ comparator, version });
                }
            }
        }
        if (set.length > 0) {
            requirements.push(set);
        }
        return new VersionRange(requirements);
    }
}

;// CONCATENATED MODULE: ../core/dist/source-api.js




/**
 * Represents this particular version of Ruffle.
 *
 * Multiple APIs can be instantiated from different sources; e.g. an "extension"
 * version, versus a "local" version. This expresses to the Public API
 * negotiator (see [[PublicAPI]]) what this particular version of Ruffle is and
 * how to control it.
 */
const SourceAPI = {
    /**
     * The version of this particular API, as a string in a semver compatible format.
     */
    version: buildInfo.versionNumber,
    /**
     * Start up the polyfills.
     *
     * Do not run polyfills for more than one Ruffle source at a time.
     *
     * @param isExt Whether or not Ruffle is running as a browser's extension.
     */
    polyfill(isExt) {
        polyfill(isExt);
    },
    /**
     * Polyfill the plugin detection.
     *
     * This needs to run before any plugin detection script does.
     */
    pluginPolyfill() {
        pluginPolyfill();
    },
    /**
     * Create a Ruffle player element using this particular version of Ruffle.
     *
     * @returns The player element. This is a DOM element that may be inserted
     * into the current page as you wish.
     */
    createPlayer() {
        const name = registerElement("ruffle-player", RufflePlayer);
        return document.createElement(name);
    },
};

;// CONCATENATED MODULE: ../core/dist/public-api.js



/**
 * Represents the Ruffle public API.
 *
 * The public API exists primarily to allow multiple installs of Ruffle on a
 * page (e.g. an extension install and a local one) to cooperate. In an ideal
 * situation, all Ruffle sources on the page install themselves into a single
 * public API, and then the public API picks the newest version by default.
 *
 * This API *is* versioned, in case we need to upgrade it. However, it must be
 * backwards- and forwards-compatible with all known sources.
 */
class PublicAPI {
    /**
     * Construct the Ruffle public API.
     *
     * Do not use this function to negotiate a public API. Instead, use
     * `public_api` to register your Ruffle source with an existing public API
     * if it exists.
     *
     * Constructing a Public API will also trigger it to initialize Ruffle once
     * the page loads, if the API has not already been superseded.
     *
     * @param prev What used to be in the public API slot.
     *
     * This is used to upgrade from a prior version of the public API, or from
     * a user-defined configuration object placed in the public API slot.
     * @protected
     */
    constructor(prev) {
        this.sources = {};
        this.config = {};
        this.invoked = false;
        this.newestName = null;
        this.conflict = null;
        if (prev !== undefined && prev !== null) {
            if (prev instanceof PublicAPI) {
                // We're upgrading from a previous API to a new one.
                this.sources = prev.sources;
                this.config = prev.config;
                this.invoked = prev.invoked;
                this.conflict = prev.conflict;
                this.newestName = prev.newestName;
                prev.superseded();
            }
            else if (prev.constructor === Object &&
                prev["config"] instanceof Object) {
                // We're the first, install user configuration.
                this.config = prev["config"];
            }
            else {
                // We're the first, but conflicting with someone else.
                this.conflict = prev;
            }
        }
        if (document.readyState === "loading") {
            // Cloudflare Rocket Loader interferes with the DOMContentLoaded event,
            // so we listen for readystatechange instead
            document.addEventListener("readystatechange", this.init.bind(this));
        }
        else {
            window.setTimeout(this.init.bind(this), 0);
        }
    }
    /**
     * The version of the public API.
     *
     * This is *not* the version of Ruffle itself.
     *
     * This allows a page with an old version of the Public API to be upgraded
     * to a new version of the API. The public API is intended to be changed
     * very infrequently, if at all, but this provides an escape mechanism for
     * newer Ruffle sources to upgrade older installations.
     *
     * @returns The version of this public API.
     */
    get version() {
        return "0.1.0";
    }
    /**
     * Register a given source with the Ruffle Public API.
     *
     * @param name The name of the source.
     */
    registerSource(name) {
        this.sources[name] = SourceAPI;
    }
    /**
     * Determine the name of the newest registered source in the Public API.
     *
     * @returns The name of the source, or `null` if no source
     * has yet to be registered.
     */
    newestSourceName() {
        let newestName = null, newestVersion = Version.fromSemver("0.0.0");
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const kVersion = Version.fromSemver(this.sources[k].version);
                if (kVersion.hasPrecedenceOver(newestVersion)) {
                    newestName = k;
                    newestVersion = kVersion;
                }
            }
        }
        return newestName;
    }
    /**
     * Negotiate and start Ruffle.
     *
     * This function reads the config parameter to determine which polyfills
     * should be enabled. If the configuration parameter is missing, then we
     * use a built-in set of defaults sufficient to fool sites with static
     * content and weak plugin detection.
     */
    init() {
        if (!this.invoked) {
            this.invoked = true;
            this.newestName = this.newestSourceName();
            if (this.newestName === null) {
                throw new Error("No registered Ruffle source!");
            }
            const polyfills = "polyfills" in this.config ? this.config.polyfills : true;
            if (polyfills !== false) {
                this.sources[this.newestName].polyfill(this.newestName === "extension");
            }
        }
    }
    /**
     * Look up the newest Ruffle source and return it's API.
     *
     * @returns An instance of the Source API.
     */
    newest() {
        const name = this.newestSourceName();
        return name !== null ? this.sources[name] : null;
    }
    /**
     * Look up a specific Ruffle version (or any version satisfying a given set
     * of requirements) and return it's API.
     *
     * @param ver_requirement A set of semantic version requirement
     * strings that the player version must satisfy.
     * @returns An instance of the Source API, if one or more
     * sources satisfied the requirement.
     */
    satisfying(ver_requirement) {
        const requirement = VersionRange.fromRequirementString(ver_requirement);
        let valid = null;
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const version = Version.fromSemver(this.sources[k].version);
                if (requirement.satisfiedBy(version)) {
                    valid = this.sources[k];
                }
            }
        }
        return valid;
    }
    /**
     * Look up the newest Ruffle version compatible with the `local` source, if
     * it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    localCompatible() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("^" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Look up the newest Ruffle version with the exact same version as the
     * `local` source, if it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    local() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("=" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Indicates that this version of the public API has been superseded by a
     * newer version.
     *
     * This should only be called by a newer version of the Public API.
     * Identical versions of the Public API should not supersede older versions
     * of that same API.
     *
     * Unfortunately, we can't disable polyfills after-the-fact, so this
     * only lets you disable the init event...
     *
     * @protected
     */
    superseded() {
        this.invoked = true;
    }
    /**
     * Join a source into the public API, if it doesn't already exist.
     *
     * @param prevRuffle The previous iteration of the Ruffle API.
     *
     * The `prevRuffle` param lists the previous object in the RufflePlayer
     * slot. We perform some checks to see if this is a Ruffle public API or a
     * conflicting object. If this is conflicting, then a new public API will
     * be constructed (see the constructor information for what happens to
     * `prevRuffle`).
     *
     * Note that Public API upgrades are deliberately not enabled in this
     * version of Ruffle, since there is no Public API to upgrade from.
     * @param sourceName The name of this particular
     * Ruffle source.
     *
     * If both parameters are provided they will be used to define a new Ruffle
     * source to register with the public API.
     * @returns The Ruffle Public API.
     */
    static negotiate(prevRuffle, sourceName) {
        let publicAPI;
        if (prevRuffle instanceof PublicAPI) {
            publicAPI = prevRuffle;
        }
        else {
            publicAPI = new PublicAPI(prevRuffle);
        }
        if (sourceName !== undefined) {
            publicAPI.registerSource(sourceName);
            // Install the faux plugin detection immediately.
            // This is necessary because scripts such as SWFObject check for the
            // Flash Player immediately when they load.
            // TODO: Maybe there's a better place for this.
            const polyfills = "polyfills" in publicAPI.config
                ? publicAPI.config.polyfills
                : true;
            if (polyfills !== false) {
                SourceAPI.pluginPolyfill();
            }
        }
        return publicAPI;
    }
}

;// CONCATENATED MODULE: ../core/dist/index.js


















;// CONCATENATED MODULE: ./src/ruffle.ts

function handleMessage(message) {
    var _a;
    switch (message.type) {
        case "load": {
            const api = (_a = window.RufflePlayer) !== null && _a !== void 0 ? _a : {};
            api.config = Object.assign(Object.assign({}, message.config), api.config);
            window.RufflePlayer = PublicAPI.negotiate(api, "extension");
            return {};
        }
        case "ping":
            // Ping back.
            return {};
        default:
            // Ignore unknown messages.
            return null;
    }
}
let ID = null;
if (document.currentScript !== undefined &&
    document.currentScript !== null &&
    "src" in document.currentScript &&
    document.currentScript.src !== "") {
    try {
        ID = new URL(document.currentScript.src).searchParams.get("id");
    }
    catch (_) {
        // ID remains null.
    }
}
if (ID) {
    window.addEventListener("message", (event) => {
        // We only accept messages from ourselves.
        if (event.source !== window) {
            return;
        }
        const { to, index, data } = event.data;
        if (to === `ruffle_page${ID}`) {
            const response = handleMessage(data);
            if (response) {
                const message = {
                    to: `ruffle_content${ID}`,
                    index,
                    data: response,
                };
                window.postMessage(message, "*");
            }
        }
    });
}

})();

/******/ })()
;
