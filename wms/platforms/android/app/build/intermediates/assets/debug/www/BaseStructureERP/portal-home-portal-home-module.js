(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-home-portal-home-module"],{

/***/ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js":
/*!****************************************************************!*\
  !*** ./node_modules/angular-svg-icon/esm5/angular-svg-icon.js ***!
  \****************************************************************/
/*! exports provided: AngularSvgIconModule, SvgIconRegistryService, SVG_ICON_REGISTRY_PROVIDER_FACTORY, SVG_ICON_REGISTRY_PROVIDER, SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSvgIconModule", function() { return AngularSvgIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconRegistryService", function() { return SvgIconRegistryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER_FACTORY", function() { return SVG_ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER", function() { return SVG_ICON_REGISTRY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var SvgIconRegistryService = /** @class */ (function () {
    function SvgIconRegistryService(http) {
        this.http = http;
        this.iconsByUrl = new Map();
        this.iconsLoadingByUrl = new Map();
    }
    SvgIconRegistryService.prototype.addSvg = function (name, data) {
        if (!this.iconsByUrl.has(name)) {
            var div = document.createElement('DIV');
            div.innerHTML = data;
            var svg = (div.querySelector('svg'));
            this.iconsByUrl.set(name, svg);
        }
    };
    SvgIconRegistryService.prototype.loadSvg = function (url) {
        var _this = this;
        if (this.iconsByUrl.has(url)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.iconsByUrl.get(url));
        }
        else if (this.iconsLoadingByUrl.has(url)) {
            return this.iconsLoadingByUrl.get(url);
        }
        else {
            var o = (this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (svg) {
                var div = document.createElement('DIV');
                div.innerHTML = svg;
                return (div.querySelector('svg'));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (svg) { return _this.iconsByUrl.set(url, svg); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                console.error(err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.iconsLoadingByUrl.delete(url); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])()));
            this.iconsLoadingByUrl.set(url, o);
            return o;
        }
    };
    SvgIconRegistryService.prototype.unloadSvg = function (url) {
        if (this.iconsByUrl.has(url)) {
            this.iconsByUrl.delete(url);
        }
    };
    return SvgIconRegistryService;
}());
SvgIconRegistryService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
SvgIconRegistryService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], },
]; };
function SVG_ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, http) {
    return parentRegistry || new SvgIconRegistryService(http);
}
var SVG_ICON_REGISTRY_PROVIDER = {
    provide: SvgIconRegistryService,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), SvgIconRegistryService], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
    useFactory: SVG_ICON_REGISTRY_PROVIDER_FACTORY
};
var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent(element, differs, renderer, iconReg) {
        this.element = element;
        this.differs = differs;
        this.renderer = renderer;
        this.iconReg = iconReg;
        this.stretch = false;
    }
    Object.defineProperty(SvgIconComponent.prototype, "svgStyle", {
        set: function (v) {
            this._svgStyle = v;
            if (!this.differ && v) {
                this.differ = this.differs.find(v).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    SvgIconComponent.prototype.ngOnInit = function () {
        this.init();
    };
    SvgIconComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    SvgIconComponent.prototype.ngOnChanges = function (changeRecord) {
        if (changeRecord['src']) {
            if (this.svg) {
                this.destroy();
            }
            this.init();
        }
        if (changeRecord['stretch']) {
            this.stylize();
        }
    };
    SvgIconComponent.prototype.ngDoCheck = function () {
        if (this.svg && this.differ) {
            var changes = this.differ.diff(this._svgStyle);
            if (changes) {
                this.applyChanges(changes);
            }
        }
    };
    SvgIconComponent.prototype.init = function () {
        var _this = this;
        this.icnSub = this.iconReg.loadSvg(this.src).subscribe(function (svg) {
            _this.setSvg(svg);
            _this.resetDiffer();
        });
    };
    SvgIconComponent.prototype.destroy = function () {
        this.svg = undefined;
        this.differ = undefined;
        if (this.icnSub) {
            this.icnSub.unsubscribe();
        }
    };
    SvgIconComponent.prototype.resetDiffer = function () {
        if (this._svgStyle && !this.differ) {
            this.differ = this.differs.find(this._svgStyle).create();
        }
    };
    SvgIconComponent.prototype.setSvg = function (svg) {
        if (svg) {
            this.svg = svg;
            var icon = (svg.cloneNode(true));
            var elem = this.element.nativeElement;
            elem.innerHTML = '';
            this.renderer.appendChild(elem, icon);
            this.stylize();
        }
    };
    SvgIconComponent.prototype.stylize = function () {
        if (this.svg) {
            var svg = this.element.nativeElement.firstChild;
            if (this.stretch === true) {
                this.renderer.setAttribute(svg, 'preserveAspectRatio', 'none');
            }
            else if (this.stretch === false) {
                this.renderer.removeAttribute(svg, 'preserveAspectRatio');
            }
        }
    };
    SvgIconComponent.prototype.applyChanges = function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (record) { return _this.setStyle(record.key, null); });
        changes.forEachAddedItem(function (record) { return _this.setStyle(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this.setStyle(record.key, record.currentValue); });
    };
    SvgIconComponent.prototype.setStyle = function (nameAndUnit, value) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
        value = value !== null && unit ? "" + value + unit : value;
        var svg = this.element.nativeElement.firstChild;
        if (value !== null) {
            this.renderer.setStyle(svg, name, (value));
        }
        else {
            this.renderer.removeStyle(svg, name);
        }
    };
    return SvgIconComponent;
}());
SvgIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'svg-icon',
                styles: [":host { display: inline-block; }"],
                template: '<ng-content></ng-content>'
            },] },
];
SvgIconComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: SvgIconRegistryService, },
]; };
SvgIconComponent.propDecorators = {
    "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "stretch": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "svgStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var AngularSvgIconModule = /** @class */ (function () {
    function AngularSvgIconModule() {
    }
    return AngularSvgIconModule;
}());
AngularSvgIconModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ],
                declarations: [SvgIconComponent],
                providers: [SVG_ICON_REGISTRY_PROVIDER],
                exports: [SvgIconComponent]
            },] },
];


//# sourceMappingURL=angular-svg-icon.js.map


/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js ***!
  \********************************************************************************/
/*! exports provided: BsDropdownContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__["BsDropdownState"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js ***!
  \***************************************************************************/
/*! exports provided: BsDropdownMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownMenuDirective = /** @class */ (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__["BsDropdownState"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js ***!
  \*****************************************************************************/
/*! exports provided: BsDropdownToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_1__["BsDropdownState"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [],] },],
        "onDocumentClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js ***!
  \*******************************************************************/
/*! exports provided: BsDropdownConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/** Default dropdown configuration */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsDropdownConfig;
}());

//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js ***!
  \**********************************************************************/
/*! exports provided: BsDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-dropdown.config */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var _bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bs-dropdown-container.component */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");







var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_5__["BsDropdownState"], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        set: /**
           * Indicates that dropdown will be closed on item or document click,
           * and after pressing ESC
           */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        set: /**
           * Disables dropdown toggle and hides dropdown menu if opened
           */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the popover is currently being shown
           */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_6__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (value) { return value; }))
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    BsDropdownDirective.prototype.show = /**
       * Opens an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            // show dropdown
            _this._dropdown
                .attach(_bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_4__["BsDropdownContainerComponent"])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    BsDropdownDirective.prototype.hide = /**
       * Closes an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of
       * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
       * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
       */
    BsDropdownDirective.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of
       * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
       * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
       */
    function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_6__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.addDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.prototype.removeDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
        }
    };
    BsDropdownDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [_bs_dropdown_state__WEBPACK_IMPORTED_MODULE_5__["BsDropdownState"]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _component_loader_index__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], },
        { type: _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_3__["BsDropdownConfig"], },
        { type: _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_5__["BsDropdownState"], },
    ]; };
    BsDropdownDirective.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDropdownDirective;
}());

//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js ***!
  \*******************************************************************/
/*! exports provided: BsDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var _bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-dropdown-container.component */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var _bs_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bs-dropdown-menu.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony import */ var _bs_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-dropdown-toggle.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony import */ var _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bs-dropdown.config */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var _bs_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-dropdown.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");









var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                _component_loader_index__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"],
                _positioning_index__WEBPACK_IMPORTED_MODULE_2__["PositioningService"],
                _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_8__["BsDropdownState"],
                {
                    provide: _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_6__["BsDropdownConfig"],
                    useValue: config ? config : { autoClose: true }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _bs_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_4__["BsDropdownMenuDirective"],
                        _bs_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"],
                        _bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_3__["BsDropdownContainerComponent"],
                        _bs_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"]
                    ],
                    exports: [
                        _bs_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_4__["BsDropdownMenuDirective"],
                        _bs_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"],
                        _bs_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"]
                    ],
                    entryComponents: [_bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_3__["BsDropdownContainerComponent"]]
                },] },
    ];
    return BsDropdownModule;
}());

//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js ***!
  \******************************************************************/
/*! exports provided: BsDropdownState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/index.js ***!
  \******************************************************/
/*! exports provided: BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bs_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-dropdown.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return _bs_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"]; });

/* harmony import */ var _bs_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-dropdown-menu.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return _bs_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"]; });

/* harmony import */ var _bs_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-dropdown-toggle.directive */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return _bs_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"]; });

/* harmony import */ var _bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-dropdown-container.component */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return _bs_dropdown_container_component__WEBPACK_IMPORTED_MODULE_3__["BsDropdownContainerComponent"]; });

/* harmony import */ var _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bs-dropdown.state */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return _bs_dropdown_state__WEBPACK_IMPORTED_MODULE_4__["BsDropdownState"]; });

/* harmony import */ var _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-dropdown.config */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return _bs_dropdown_config__WEBPACK_IMPORTED_MODULE_5__["BsDropdownConfig"]; });

/* harmony import */ var _bs_dropdown_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bs-dropdown.module */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return _bs_dropdown_module__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js ***!
  \******************************************************************/
/*! exports provided: BsModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
           * Hides the modal
           */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsModalRef;
}());

//# sourceMappingURL=bs-modal-ref.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/bs-modal.service.js ***!
  \**************************************************************/
/*! exports provided: BsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-backdrop.component */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-container.component */ "./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-options.class */ "./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");






var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["modalConfigDefaults"];
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    /** Shows a modal */
    BsModalService.prototype.show = /** Shows a modal */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["modalConfigDefaults"], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["TRANSITION_DURATIONS"].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_2__["ModalBackdropComponent"])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["TRANSITION_DURATIONS"].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]();
        var modalContainerRef = modalLoader
            .provide({ provide: _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["ModalOptions"], useValue: this.config })
            .provide({ provide: _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"], useValue: bsModalRef })
            .attach(_modal_container_component__WEBPACK_IMPORTED_MODULE_3__["ModalContainerComponent"])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], },
    ]; };
    return BsModalService;
}());

//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/index.js ***!
  \***************************************************/
/*! exports provided: BsModalRef, ModalBackdropOptions, ModalContainerComponent, ModalBackdropComponent, ModalOptions, ModalDirective, ModalModule, BsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]; });

/* harmony import */ var _modal_backdrop_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop.options */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return _modal_backdrop_options__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropOptions"]; });

/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-container.component */ "./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return _modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]; });

/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-backdrop.component */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_3__["ModalBackdropComponent"]; });

/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-options.class */ "./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["ModalOptions"]; });

/* harmony import */ var _modal_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.directive */ "./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return _modal_directive__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"]; });

/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.module */ "./node_modules/ngx-bootstrap/modal/modal.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]; });

/* harmony import */ var _bs_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-modal.service */ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _bs_modal_service__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js ***!
  \**********************************************************************/
/*! exports provided: ModalBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-options.class */ "./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.class */ "./node_modules/ngx-bootstrap/utils/utils.class.js");




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN);
            }
            if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].FADE);
            _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-backdrop.options.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal-backdrop.options.js ***!
  \********************************************************************/
/*! exports provided: ModalBackdropOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

//# sourceMappingURL=modal-backdrop.options.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-container.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal-container.component.js ***!
  \***********************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-options.class */ "./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])() ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN : _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
        }, this.isAnimated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["TRANSITION_DURATIONS"].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(_modal_options_class__WEBPACK_IMPORTED_MODULE_1__["DISMISS_REASONS"].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function (event) {
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(_modal_options_class__WEBPACK_IMPORTED_MODULE_1__["DISMISS_REASONS"].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])() ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN : _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["TRANSITION_DURATIONS"].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["ModalOptions"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-options.class.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal-options.class.js ***!
  \*****************************************************************/
/*! exports provided: ModalOptions, modalConfigDefaults, CLASS_NAME, SELECTOR, TRANSITION_DURATIONS, DISMISS_REASONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfigDefaults", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR", function() { return SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_DURATIONS", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISMISS_REASONS", function() { return DISMISS_REASONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal.directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal.directive.js ***!
  \*************************************************************/
/*! exports provided: ModalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.class */ "./node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-backdrop.component */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-options.class */ "./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
           * (will wait for CSS transitions to complete)
           */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired immediately when
           * the hide instance method has been called.
           */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired when the modal has finished being
           * hidden from the user (will wait for CSS transitions to complete).
           */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: /** allows to set modal configuration via element property */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["DISMISS_REASONS"].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = 
    // todo: consider preventing default and stopping propagation
    function (event) {
        if (!this._isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["DISMISS_REASONS"].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = /* Public methods */
    /** Allows to manually toggle modal visibility */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /** Allows to manually open modal */
    ModalDirective.prototype.show = /** Allows to manually open modal */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(_modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = /** Allows to manually close modal */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].IN);
        if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = /** Private methods @internal */
    function (config) {
        return Object.assign({}, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["modalConfigDefaults"], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
       *  Show dialog
       *  @internal
       */
    ModalDirective.prototype.showElement = /**
       *  Show dialog
       *  @internal
       */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].IN);
        if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.hideModal = /** @internal */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    _this._renderer.removeClass(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = 
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_4__["ModalBackdropComponent"])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.removeBackdrop = /** @internal */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.resetAdjustments = /** @internal */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
    /** @internal */
    function () {
        this.isBodyOverflowing = _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = 
    // thx d.walsh
    function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], },
    ]; };
    ModalDirective.propDecorators = {
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/modal.module.js ***!
  \**********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop.component */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.directive */ "./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-container.component */ "./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var _bs_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bs-modal.service */ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [_bs_modal_service__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _component_loader_index__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"],
                        _modal_directive__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"],
                        _modal_container_component__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponent"]
                    ],
                    exports: [_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"], _modal_directive__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"]],
                    entryComponents: [_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"], _modal_container_component__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponent"]]
                },] },
    ];
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/utils.class.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \*********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "./src/app/change-warehouse/change-warehouse.component.html":
/*!******************************************************************!*\
  !*** ./src/app/change-warehouse/change-warehouse.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'SelectWarehouse'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!-- <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'SelectWarehouse'|translate}}</label>\r\n                    <div class=\"col-sm-9\">\r\n                            <kendo-dropdownlist \r\n                            [data]=\"whsList\" \r\n                            textField=\"OPTM_WHSE\"\r\n                            valueField=\"BPLid\"\r\n                            id=\"whseId\"\r\n                            name = \"defaultWHS\"\r\n                            [(ngModel)]=\"defaultWHS\"\r\n                            (selectionChange)=\"OnOptionChange($event)\"\r\n                           ></kendo-dropdownlist>\r\n                    </div> -->\r\n                        <label label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span class=\"opti_form-label\">{{'SelectWarehouse'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <!-- <kendo-dropdownlist class=\"form-control form-control-sm\" [data]=\"whsList\" [textField]=\"'OPTM_WHSE'\"\r\n                             [valueField]=\"'BPLid'\" id=\"whseId\" name=\"defaultWHS\" [(ngModel)]=\"defaultWHS\" ></kendo-dropdownlist> -->\r\n                             <kendo-dropdownlist\r\n                                [data]=\"whsList\"\r\n                                textField=\"OPTM_WHSE\"\r\n                                valueField=\"BPLid\"\r\n                                id=\"whseId\"\r\n                                name=\"defaultWHS\"\r\n                                [(ngModel)]=\"defaultWHS\"\r\n                            >\r\n                            </kendo-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" (click)=\"onSubmitClick()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/change-warehouse/change-warehouse.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/change-warehouse/change-warehouse.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS13YXJlaG91c2UvY2hhbmdlLXdhcmVob3VzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/change-warehouse/change-warehouse.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/change-warehouse/change-warehouse.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangeWarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeWarehouseComponent", function() { return ChangeWarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");





var ChangeWarehouseComponent = /** @class */ (function () {
    function ChangeWarehouseComponent(commonService, signinService, router) {
        this.commonService = commonService;
        this.signinService = signinService;
        this.router = router;
        this.whsList = [];
        this.defaultWHS = { OPTM_WHSE: localStorage.getItem("whseId"), BPLid: 0 };
    }
    ChangeWarehouseComponent.prototype.ngOnInit = function () {
        this.setWarehouseList();
    };
    ChangeWarehouseComponent.prototype.setWarehouseList = function () {
        var _this = this;
        this.signinService.getWHS(localStorage.getItem("CompID")).subscribe(function (data) {
            _this.whsList = data.Table;
            // for (var i = 0; i < this.whsList.length; i++) {
            //   if (this.getCookie('whseId') == this.whsList[i].OPTM_WHSE) {
            //     this.defaultWHS = this.whsList[i];
            //   }
            // }
            // this.defaultWHS = localStorage.getItem("whseId");
        }, function (error) {
        });
    };
    ChangeWarehouseComponent.prototype.onSubmitClick = function () {
        localStorage.setItem("whseId", this.defaultWHS.OPTM_WHSE);
        this.setCookie('whseId', this.defaultWHS.OPTM_WHSE, 365);
        this.commonService.refreshTopBarValue(localStorage.getItem("whseId"));
        this.router.navigateByUrl('home/dashboard');
    };
    /**
      * Function for set cookie data
      * @param cname
      * @param cvalue
      * @param exdays
      */
    ChangeWarehouseComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    ChangeWarehouseComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    ChangeWarehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-warehouse',
            template: __webpack_require__(/*! ./change-warehouse.component.html */ "./src/app/change-warehouse/change-warehouse.component.html"),
            styles: [__webpack_require__(/*! ./change-warehouse.component.scss */ "./src/app/change-warehouse/change-warehouse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"], _services_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangeWarehouseComponent);
    return ChangeWarehouseComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"opti_DashboardID\" class=\"opti_dashboard position-relative\" [perfectScrollbar]=\" \">    \r\n    <div class=\"d-flex text-primary align-items-center\">\r\n        <svg version=\"1.1\" id=\"Layer_1\" width=\"150px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 164.6 148.3\" style=\"enable-background:new 0 0 164.6 148.3;\" xml:space=\"preserve\">\r\n            <style type=\"text/css\">\r\n                .st0{fill:#26B1FB;}\r\n                .st1{fill:#003F5E;}\r\n                .st2{fill:#EEA91F;}\r\n                .st3{fill:#EEAA1F;}\r\n                .st4{fill:#EEAA21;}\r\n                .st5{fill:#EEAA20;}\r\n            </style>\r\n            <path class=\"st0\" d=\"M164.4,62.5c-0.2-0.2-0.4-0.4-0.6-0.6C137.1,41.5,110.3,21,83.6,0.6c-1.1-0.9-1.7-0.6-2.7,0.1\r\n                C54.3,21.1,27.7,41.4,1,61.8c-0.7,0.5-1,1.1-1,2c0,11,0,21.9,0,32.9c0,16.8,0,33.6,0,50.4c0,1,0.2,1.3,1.2,1.3c2.5-0.1,5,0,7.6,0\r\n                c1.7,0,1.5,0.2,1.5-1.5c0-26,0-51.9,0-77.9c0-0.7,0.1-1.3,0.7-1.9C34.5,49.1,58,31.2,81.4,13.3c0.9-0.7,1.3-0.4,2,0.1\r\n                C106.7,31.2,130,49,153.3,66.8c0.7,0.6,1,1.2,1,2.1c0,25.9,0,51.8,0,77.6c0,0.3,0,0.6,0,1c-0.1,0.7,0.3,0.8,0.8,0.8\r\n                c3.1,0,6.2,0,9.2-0.1c0.1,0,0.2,0,0.2,0c0-28.6,0-57.1,0-85.7C164.6,62.5,164.5,62.5,164.4,62.5z\"/>\r\n            <path class=\"st1\" d=\"M61.2,116.7c0.9-4.1,1.8-8.1,2.6-12.2c0.6-2.7,1.2-5.3,1.7-8c0.1-0.6,0.3-0.9,1-0.9c1.4,0.1,2.9,0.1,4.3,0\r\n                c1-0.1,1,0.3,0.8,1.1c-1.6,6.8-3.3,13.6-4.9,20.4c-0.7,2.8-1.4,5.6-2,8.4c-0.1,0.7-0.4,0.8-1,0.8c-1.6,0-3.2-0.1-4.8,0\r\n                c-0.9,0-1.1-0.3-1.3-1.1c-1.7-6.8-3.5-13.6-5.3-20.4c-0.1-0.4-0.1-0.8-0.5-1.2c-1.3,4.9-2.6,9.8-3.9,14.6c-0.6,2.4-1.3,4.7-1.9,7.1\r\n                c-0.2,0.8-0.5,0.9-1.2,0.9c-1.6,0-3.3,0-4.9,0c-0.6,0-0.9-0.2-1-0.8c-2.3-9.7-4.5-19.3-6.9-29c-0.2-0.9,0.1-0.9,0.8-0.9\r\n                c1.4,0,2.9,0,4.3,0c0.8,0,1.1,0.2,1.3,1c1.4,6.5,2.8,13,4.3,19.5c0,0,0,0.1,0.1,0.2c0.4-0.6,0.5-1.2,0.6-1.8\r\n                c1.6-5.9,3.2-11.9,4.7-17.8c0.2-0.8,0.5-1.1,1.4-1.1c1.7,0.1,3.4,0.1,5.2,0c0.9,0,1.2,0.2,1.4,1.1c1.5,6.2,3.1,12.5,4.6,18.7\r\n                c0.1,0.4,0.2,0.8,0.3,1.1C61.1,116.7,61.1,116.7,61.2,116.7z\"/>\r\n            <path class=\"st1\" d=\"M80.7,103.2c0,7.3,0,14.6,0,21.9c0,1.1-0.3,1.4-1.4,1.3c-1.2-0.1-2.3,0-3.5,0c-0.6,0-0.8-0.1-0.8-0.8\r\n                c0-9.7,0-19.4,0-29c0-0.7,0.2-0.9,0.9-0.9c2.4,0,4.9,0,7.3,0c0.8,0,1.1,0.2,1.3,1c1.7,6.5,3.4,13,5.1,19.5c0.5-0.3,0.4-0.8,0.5-1.3\r\n                c1.6-6,3.1-12,4.7-18.1c0.2-0.8,0.5-1.2,1.4-1.1c2.4,0.1,4.8,0,7.2,0c0.7,0,1,0.1,1,0.9c0,9.6,0,19.3,0,28.9c0,0.7-0.1,0.9-0.8,0.9\r\n                c-1.3-0.1-2.6-0.1-3.8,0c-0.8,0-1.1-0.2-1.1-1.1c0-7,0-13.9,0-20.9c0-0.4,0-0.9-0.2-1.3c-0.8,3.3-1.7,6.6-2.5,9.9\r\n                c-1,4.1-2.1,8.3-3.1,12.4c-0.2,0.7-0.5,1-1.2,0.9c-1.3-0.1-2.6-0.1-4,0c-0.9,0.1-1.1-0.2-1.3-1c-1.7-6.9-3.4-13.8-5.1-20.7\r\n                c-0.1-0.5-0.3-1-0.4-1.5C80.8,103.1,80.8,103.2,80.7,103.2z\"/>\r\n            <path class=\"st1\" d=\"M129.7,104.6c-0.2,0-0.4,0-0.6,0c-1.5,0.3-2.7,0.2-3-1.8c-0.2-1-1.1-1.7-2.1-2c-2.1-0.7-4.2-0.7-6.3,0.2\r\n                c-1,0.4-1.7,1.1-1.7,2.2c0,1.2,0.7,1.9,1.7,2.4c2.1,1,4.3,1.4,6.5,2c1.3,0.4,2.6,0.7,3.9,1.3c4,1.6,5.8,4.6,5.7,9\r\n                c-0.1,3.7-2.6,7-6.3,8.2c-3.6,1.1-7.3,1.2-11,0.1c-4.6-1.3-6.7-4.9-7.4-9.1c-0.1-0.5,0.1-0.7,0.6-0.8c1.6-0.1,3.1-0.3,4.7-0.5\r\n                c0.9-0.1,0.8,0.5,0.9,0.9c0.6,2.3,1.9,4.1,4.3,4.6c1.7,0.4,3.4,0.3,5.1-0.2c0.8-0.3,1.5-0.7,2.1-1.4c1.6-1.8,1.2-4.2-1-5.3\r\n                c-1.8-0.8-3.8-1.2-5.7-1.7c-1.8-0.5-3.6-1-5.3-1.9c-3.1-1.7-4.7-4.4-4.4-8c0.3-3.4,2.1-5.7,5.2-6.8c4-1.5,8.1-1.5,12.1,0.1\r\n                c3.3,1.3,5,3.9,5.4,7.5c0.1,0.6-0.1,0.8-0.7,0.8C131.3,104.5,130.5,104.5,129.7,104.6C129.7,104.5,129.7,104.6,129.7,104.6z\"/>\r\n            <path class=\"st2\" d=\"M24.8,110.5c0-12.1,0-24.1,0-36.2c0-1.1,0.3-1.5,1.4-1.4c1.2,0.1,2.3,0,3.5,0c0.6,0,0.8,0.2,0.8,0.8\r\n                c0,5.2,0,10.4,0,15.6c0,0.9-0.5,0.9-1.1,0.8c-1.1-0.2-1.3,0.3-1.3,1.3c0,13,0,26,0,39c0,1,0.2,1.4,1.2,1.2c0.9-0.2,1.2,0.2,1.1,1.1\r\n                c0,4.8,0,9.6,0,14.4c0,0.9-0.3,1.1-1.1,1c-1.3-0.1-2.6,0-3.8,0c-0.6,0-0.8-0.2-0.8-0.8c0-0.3,0-0.6,0-0.8\r\n                C24.8,134.6,24.8,122.5,24.8,110.5z\"/>\r\n            <path class=\"st2\" d=\"M139.9,110.6c0,12.1,0,24.2,0,36.2c0,1.1-0.3,1.4-1.4,1.4c-1.2-0.1-2.3,0-3.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                c0-5,0-9.9,0-14.9c0-0.7,0.3-0.9,0.9-0.9c2.4,0,2.4-0.1,2.4-2.5c0-12.5,0-25,0-37.5c0-1.1-0.2-1.5-1.4-1.5c-1.9,0.1-1.9,0-1.9-1.9\r\n                c0-4.7,0-9.4,0-14c0-0.9,0.2-1.3,1.2-1.2c1,0.1,2.1,0.1,3.1,0c1.1-0.1,1.4,0.2,1.4,1.4c-0.1,6.6,0,13.3,0,19.9\r\n                C139.9,99.7,139.9,105.2,139.9,110.6z\"/>\r\n            <path class=\"st2\" d=\"M45.1,81.5c0-2.5,0-5,0-7.5c0-0.7,0.1-1.1,1-1.1c2.3,0.1,4.6,0,6.8,0c0.7,0,0.9,0.2,0.9,0.9\r\n                c0,5.2,0,10.3,0,15.5c0,0.8-0.3,0.9-1,0.9c-2.2,0-4.4-0.1-6.6,0c-0.9,0-1.2-0.2-1.1-1.1C45.2,86.6,45.1,84,45.1,81.5z\"/>\r\n            <path class=\"st2\" d=\"M86.7,81.6c0,2.5,0,5,0,7.4c0,0.8-0.1,1.1-1,1.1c-2.2-0.1-4.5-0.1-6.7,0c-0.8,0-1-0.3-1-1c0-5.1,0-10.1,0-15.2\r\n                c0-0.8,0.3-1,1-1c2.2,0,4.4,0,6.6,0c0.8,0,1.1,0.2,1.1,1.1C86.7,76.5,86.7,79.1,86.7,81.6z\"/>\r\n            <path class=\"st2\" d=\"M97.7,81.6c0,2.6,0,5.1,0,7.7c0,0.7-0.2,0.9-0.9,0.9c-2.3,0-4.6,0-6.9,0c-0.7,0-0.9-0.2-0.9-0.9\r\n                c0-5.1,0-10.3,0-15.4c0-0.8,0.3-0.9,1-0.9c2.2,0,4.5,0,6.7,0c0.8,0,1,0.2,1,1C97.6,76.5,97.7,79.1,97.7,81.6z\"/>\r\n            <path class=\"st2\" d=\"M53.8,140c0,2.4,0,4.7,0,7.1c0,0.8-0.2,1.1-1,1.1c-2.2-0.1-4.5-0.1-6.7,0c-0.8,0-0.9-0.2-0.9-0.9\r\n                c0-4.9,0-9.8,0-14.6c0-0.7,0.1-1,0.9-1c2.3,0.1,4.6,0,6.8,0c0.7,0,1,0.2,0.9,0.9C53.8,135.1,53.8,137.6,53.8,140z\"/>\r\n            <path class=\"st2\" d=\"M78,139.9c0-2.4,0-4.9,0-7.3c0-0.7,0.2-1,0.9-1c2.3,0,4.6,0,6.8,0c0.8,0,0.9,0.2,0.9,1c0,4.9,0,9.8,0,14.6\r\n                c0,0.7-0.2,1-0.9,1c-2.3,0-4.6,0-6.8,0c-0.8,0-0.9-0.2-0.9-1C78.1,144.8,78,142.4,78,139.9z\"/>\r\n            <path class=\"st2\" d=\"M97.7,139.9c0,2.4,0,4.9,0,7.3c0,0.7-0.2,1-0.9,1c-2.3,0-4.6,0-6.8,0c-0.8,0-0.9-0.3-0.9-1c0-4.9,0-9.8,0-14.6\r\n                c0-0.7,0.2-1,0.9-1c2.3,0,4.6,0,6.8,0c0.8,0,0.9,0.3,0.9,1C97.7,135.1,97.7,137.5,97.7,139.9z\"/>\r\n            <path class=\"st2\" d=\"M118.8,81.6c0,2.6,0,5.1,0,7.7c0,0.7-0.2,0.9-0.9,0.9c-1.8,0-3.7,0-5.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                c0-5.2,0-10.4,0-15.6c0-0.6,0.2-0.9,0.8-0.8c1.8,0,3.7,0,5.5,0c0.7,0,0.9,0.3,0.9,0.9C118.8,76.4,118.8,79,118.8,81.6z\"/>\r\n            <path class=\"st2\" d=\"M118.8,140c0,2.4,0,4.9,0,7.3c0,0.7-0.1,0.9-0.9,0.9c-1.8,0-3.7,0-5.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                c0-5,0-9.9,0-14.9c0-0.6,0.2-0.9,0.8-0.8c1.8,0,3.7,0,5.5,0c0.7,0,0.9,0.2,0.9,0.9C118.8,135,118.8,137.5,118.8,140z\"/>\r\n            <path class=\"st3\" d=\"M68.9,81.5c0-2.5,0-5,0-7.4c0-0.9,0.3-1.2,1.2-1.1c1,0.1,2,0,3,0c0.6,0,0.8,0.2,0.8,0.9c0,5.2,0,10.4,0,15.6\r\n                c0,0.7-0.3,0.8-0.9,0.8c-1.3-0.1-3,0.4-3.8-0.2c-0.8-0.6-0.2-2.4-0.3-3.7C68.9,84.7,68.9,83.1,68.9,81.5z\"/>\r\n            <path class=\"st3\" d=\"M68.9,139.8c0-2.4,0-4.8,0-7.2c0-0.7,0.2-1,0.9-1c1.1,0.1,2.2,0,3.2,0c0.6,0,0.8,0.2,0.8,0.8c0,5,0,9.9,0,14.9\r\n                c0,0.7-0.3,0.9-0.9,0.8c-1,0-2.1-0.1-3.1,0c-0.8,0-0.9-0.2-0.9-1C68.9,144.8,68.9,142.3,68.9,139.8z\"/>\r\n            <path class=\"st2\" d=\"M101.8,81.5c0-2.5,0-5,0-7.6c0-0.8,0.2-1.1,1-1c1,0.1,2.1,0,3.1,0c0.6,0,0.8,0.2,0.8,0.8c0,5.2,0,10.5,0,15.7\r\n                c0,0.6-0.2,0.8-0.8,0.7c-0.1,0-0.2,0-0.2,0c-1.2,0-2.8,0.4-3.6-0.2c-0.8-0.6-0.2-2.3-0.3-3.5C101.7,84.8,101.8,83.1,101.8,81.5z\"/>\r\n            <path class=\"st2\" d=\"M101.8,139.9c0-2.4,0-4.8,0-7.2c0-0.8,0.1-1.2,1-1.1c1,0.1,2,0,3,0c0.6,0,0.9,0.1,0.9,0.8c0,5,0,10,0,15\r\n                c0,0.7-0.3,0.8-0.9,0.8c-1,0-2.1-0.1-3.1,0c-0.8,0.1-0.9-0.3-0.9-1C101.8,144.8,101.8,142.4,101.8,139.9z\"/>\r\n            <path class=\"st4\" d=\"M127.8,81.6c0,2.5,0,5,0,7.5c0,0.8-0.2,1-1,1c-2.4,0-2.4,0-2.4-2.5c0-4.5,0-9,0-13.5c0-1,0.2-1.3,1.3-1.3\r\n                c2.2,0.1,2.2,0,2.2,2.2C127.8,77.3,127.8,79.5,127.8,81.6z\"/>\r\n            <path class=\"st4\" d=\"M127.8,139.9c0,2.4,0,4.9,0,7.3c0,0.7-0.2,1-0.9,1c-2.5,0-2.5,0.1-2.5-2.4c0-4.3,0-8.5,0-12.8\r\n                c0-1,0.2-1.4,1.3-1.3c2.1,0.1,2.1,0,2.1,2.2C127.8,135.9,127.8,137.9,127.8,139.9z\"/>\r\n            <path class=\"st5\" d=\"M36.9,81.5c0-2.5,0-5,0-7.5c0-0.8,0.2-1,1-1c2.9,0.1,2.3-0.3,2.4,2.3c0,4.6,0,9.2,0,13.8c0,1-0.3,1.2-1.2,1.2\r\n                c-2.2-0.1-2.2,0-2.2-2.2C36.9,85.8,36.9,83.6,36.9,81.5z\"/>\r\n            <path class=\"st5\" d=\"M62.1,81.6c0,2.5,0,5,0,7.5c0,0.9-0.3,1.1-1.1,1.1c-2.3,0-2.3,0-2.3-2.3c0-4.6,0-9.2,0-13.8\r\n                c0-0.9,0.2-1.2,1.1-1.1c2.3,0,2.3,0,2.3,2.3C62.1,77.3,62.1,79.5,62.1,81.6z\"/>\r\n            <path class=\"st5\" d=\"M62.1,140.1c0,2.4,0,4.8,0,7.2c0,0.7-0.2,1-0.9,1c-2.5,0-2.5,0.1-2.5-2.4c0-4.3,0-8.6,0-12.9\r\n                c0-0.9,0.2-1.2,1.2-1.2c2.2,0.1,2.2,0,2.2,2.2C62.1,135.9,62.1,138,62.1,140.1z\"/>\r\n            <path class=\"st5\" d=\"M40.3,139.9c0,2.4,0,4.9,0,7.3c0,0.9-0.3,1.1-1.1,1.1c-2.3,0-2.3,0-2.3-2.3c0-4.3,0-8.7,0-13\r\n                c0-1,0.3-1.2,1.2-1.2c2.2,0.1,2.2,0,2.2,2.2C40.3,135.9,40.3,137.9,40.3,139.9z\"/>\r\n        </svg> \r\n        <!-- <span class=\"text-logo text-primary\">{{'Dashboard_ProductName'|translate}}</span> -->\r\n    </div>\r\n    <p class=\"mb-1 mt-4\">{{appVersion}}</p>\r\n    <p>{{'Dashboard_CopyWrt_Msg'|translate}}</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  #opti_ThemeSettingID {\n  background-color: #f0f0f0; }\n  body {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  p {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  a {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  h1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\n  h2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\n  h3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\n  h4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\n  h5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n  h6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .fs-18 {\n  font-size: 18px; }\n  .fs-20 {\n  font-size: 20px; }\n  .fs-24 {\n  font-size: 24px; }\n  .fs-26 {\n  font-size: 26px; }\n  #opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n  #opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n  .opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  body button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none; }\n  body button + button:not(:last-child) {\n  margin: 0 5px 0 0; }\n  .k-datepicker .k-select {\n  margin: -1px -1px -1px 0;\n  position: relative;\n  z-index: 1; }\n  button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon {\n  border-color: #1fa2ff;\n  color: #ffffff;\n  border-radius: 5px;\n  background-color: #1fa2ff; }\n  button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:hover, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:active, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:focus {\n    border-color: #1b8ee0;\n    color: #ffffff;\n    background-color: #1b8ee0; }\n  .opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  #opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n  #opti_WrapperID #opti_LeftPanelID {\n    min-width: 260px;\n    max-width: 260px; }\n  #opti_WrapperID #opti_LeftPanelID.opti_sidebar-minimize {\n    min-width: 80px;\n    max-width: 80px; }\n  #opti_WrapperID #opti_LeftPanelID {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  #opti_WrapperID .opti_left-navigation {\n    margin: 10px;\n    border-radius: 5px;\n    display: flex;\n    align-self: center;\n    width: calc(100% - 20px);\n    justify-self: flex-start;\n    flex: 1; }\n  #opti_WrapperID #opti_RightPanelID.opti_sidebar-minimize {\n    width: calc(100% - 80px); }\n  #opti_WrapperID #opti_RightPanelID {\n    width: calc(100% - 260px); }\n  #opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n  #opti_WrapperID #opti_MainContentID {\n    height: calc(100% - 45px);\n    overflow: hidden; }\n  #opti_WrapperID section#opti_TopBarID {\n    min-height: 45px !important; }\n  #opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 99;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n  #opti_WrapperID .opti_right-fix-section .opti_tab {\n      border: none; }\n  #opti_WrapperID .opti_right-fix-section .opti_tab button {\n        border-radius: 0; }\n  #opti_WrapperID .opti_right-fix-section .opti_tabcontent {\n      padding: 15px 0;\n      height: calc(100vh - 105px);\n      border-top: 1px solid #c7c7c7; }\n  #opti_WrapperID .opti_right-fix-section .opti_close-icon-right-section {\n      display: inline-flex !important;\n      height: 40px;\n      width: 30px;\n      cursor: pointer; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_backarrow {\n  display: none; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_hamburger {\n  display: block; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\n  section#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n  .opti_left-navigation {\n  box-shadow: 0px 1px 15px #1fa2ff; }\n  body kendo-grid {\n  box-shadow: 0px 1px 15px #1fa2ff; }\n  body.opti_account-module .k-indicator-container, body.opti_account-module a, body.opti_account-module h1, body.opti_account-module h2, body.opti_account-module h3, body.opti_account-module h4, body.opti_account-module h5, body.opti_account-module h6, body.opti_account-module .k-grid-header .k-header {\n  color: #1fa2ff; }\n  body.opti_account-module .k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #1fa2ff; }\n  body.opti_account-module .ps__thumb-y, body.opti_account-module .ps__rail-y:hover > .ps__thumb-y, body.opti_account-module .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #1fa2ff; }\n  body.opti_account-module .k-checkbox:focus + .k-checkbox-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #1fa2ff; }\n  body.opti_account-module .k-dropdown > :hover,\nbody.opti_account-module .k-dropdown .k-dropdown-wrap {\n  border-color: #1fa2ff; }\n  body.opti_account-module .k-dropdown .k-state-focused, body.opti_account-module .k-dropdowntree .k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\n  body.opti_account-module .opti_loader .opti_spinner {\n  border-top-color: #1fa2ff !important; }\n  body.opti_account-module .k-button.k-primary:focus, body.opti_account-module .k-button.k-primary.k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\n  #opti_DashboardID {\n  background: #fff;\n  height: calc(100vh - 85px);\n  border-radius: 5px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n  .opti_dashboard-icon {\n  font-size: 80px;\n  margin: 0 auto; }\n  .text-logo {\n  font-size: 80px;\n  margin-left: 10px;\n  line-height: 1;\n  font-weight: 800; }\n  @media screen and (max-width: 479px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n  @media only screen and (min-width: 768px) and (max-width: 959px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n  @media only screen and (min-width: 960px) and (max-width: 1024px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBbmt1clxcV01TXFxORXdXTVNDTG9uZTNcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFxfYmFzZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvRDpcXEFua3VyXFxXTVNcXE5Fd1dNU0NMb25lM1xcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF90eXBvZ3JhcGh5LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2J1dHRvbi5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvRDpcXEFua3VyXFxXTVNcXE5Fd1dNU0NMb25lM1xcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9sYXlvdXQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBbmt1clxcV01TXFxORXdXTVNDTG9uZTNcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFx3ZWJcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGQTtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtFQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0VBSWQ7RUFDSSxhQUFhLEVBQUE7RUNuR2pCO0VBQ0kseUJBQXlCLEVBQUE7RUFPN0I7RURPSSwrQkFIaUM7RUFJckIsZUM5Qk07RUQrQkosZ0JDcEJNLEVBQUE7RUFjeEI7RURJSSwrQkFIaUM7RUFJckIsZUM5Qk07RUQrQkosZ0JDcEJNLEVBQUE7RUFpQnhCO0VEQ0ksK0JBSGlDO0VBSXJCLGVDOUJNO0VEK0JKLGdCQ3BCTSxFQUFBO0VBd0J4QjtFRE5JLCtCQUhpQztFQUlyQixlQ3pCVTtFRDBCUixnQkNwQk0sRUFBQTtFQTJCeEI7RURUSSwrQkFIaUM7RUFJckIsZUMxQlM7RUQyQlAsZ0JDcEJNLEVBQUE7RUE4QnhCO0VEWkksK0JBSGlDO0VBSXJCLGVDM0JRO0VENEJOLGdCQ3BCTSxFQUFBO0VBaUN4QjtFRGZJLCtCQUhpQztFQUlyQixlQzVCTTtFRDZCSixnQkNwQk0sRUFBQTtFQW9DeEI7RURsQkksK0JBSGlDO0VBSXJCLGVDN0JRO0VEOEJOLGdCQ3BCTSxFQUFBO0VBdUN4QjtFRHJCSSwrQkFIaUM7RUFJckIsZUM5Qk07RUQrQkosZ0JDcEJNLEVBQUE7RUEyQ3hCO0VBQ0ksZUFBZSxFQUFBO0VBRW5CO0VBQ0ksZUFBZSxFQUFBO0VBRW5CO0VBQ0ksZUFBZSxFQUFBO0VBRW5CO0VBQ0ksZUFBZSxFQUFBO0VBSW5CO0VBUVEsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0VBVDNCO0VBYVEseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixvQ0FBb0MsRUFBQTtFREU1QztFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtFQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0VBSWQ7RUFDSSxhQUFhLEVBQUE7RUVsSGpCO0VBR1Esa0JBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZ0I7RUFDaEIsaUJBQWtCO0VBQ2xCLGVEUGM7RUNRZCxZQUFZLEVBQUE7RUFPcEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0VBR2Q7RUFDSSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUo3QjtJQU1RLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCLEVBQUE7RUZvRGpDO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBSmhCO0lBTVEsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7RUFJbkI7RUFDSSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0VBSTNCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQ0FoRzBDO0VBaUcxQyxVQUFVLEVBQUE7RUFJZDtFQUNJLGFBQWEsRUFBQTtFRzVHakI7RUFDSSxhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7RUFGeEI7SUFNWSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFQNUI7SUFZWSxlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBYjNCO0lBa0JZLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0VBckIxQztJQXlCWSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixPQUFPLEVBQUE7RUEvQm5CO0lBb0NZLHdCQUF3QixFQUFBO0VBcENwQztJQXdDWSx5QkFBeUIsRUFBQTtFQXhDckM7SUE0Q1ksYUFBYSxFQUFBO0VBNUN6QjtJQWlEWSx5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUE7RUFsRDVCO0lBd0RZLDJCQUE2QyxFQUFBO0VBeER6RDtJQTZEUSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGdCSDlESztJRytETCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO0lBRWYsV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw4QkFBOEIsRUFBQTtFQXZFdEM7TUE0RVksWUFBWSxFQUFBO0VBNUV4QjtRQThFZ0IsZ0JBQWdCLEVBQUE7RUE5RWhDO01BbUZZLGVBQWU7TUFFZiwyQkFBMEI7TUFDMUIsNkJBQTZCLEVBQUE7RUF0RnpDO01BMEZZLCtCQUErQjtNQUMvQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWUsRUFBQTtFQVUzQjtFQUdZLGFBQWEsRUFBQTtFQUh6QjtFQU1ZLGNBQWMsRUFBQTtFQU4xQjtFQVNZLGFBQWEsRUFBQTtFQU96QjtFQUNJLG9HQUFvRyxFQUFBO0VBR3hHO0VBQ0ksZ0NBQWdDLEVBQUE7RUFHcEM7RUFDSSxnQ0FBZ0MsRUFBQTtFQUlwQztFQUVRLGNINUh1QixFQUFBO0VHMEgvQjtFQUtRLHFCSC9IdUIsRUFBQTtFRzBIL0I7RUFRUSx5QkhsSXVCLEVBQUE7RUcwSC9CO0VBV1EsNkNIckl1QixFQUFBO0VHMEgvQjs7RUFlUSxxQkh6SXVCLEVBQUE7RUcwSC9CO0VBa0JRLDZDSDVJdUIsRUFBQTtFRzBIL0I7RUFxQlEsb0NBQW9ELEVBQUE7RUFyQjVEO0VBd0JRLDZDSGxKdUIsRUFBQTtFSWhCL0I7RUFDSSxnQkpNUztFSUxULDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtFQVMzQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFFbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtFQzFCcEI7RUFDQTtJQUNJLFVBQVUsRUFBQSxFQUNiO0VBR0Q7RUFDQTtJQUNJLFVBQVUsRUFBQSxFQUNiO0VBR0Q7RUFDQTtJQUNJLFVBQVUsRUFBQSxFQUNiO0VBR0Q7RUFDQTtJQUNJLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIGltcG9ydHMgZm9yIGFsbCBtaXhpbnMgKyBnbG9iYWwgcHJvamVjdCB2YXJpYWJsZXNcclxuLy8gQGltcG9ydCAnX3R5cG9ncmFwaHknO1xyXG4vLyBAaW1wb3J0ICdfYnV0dG9uJztcclxuLy8gQGltcG9ydCAnX2dyaWQnO1xyXG5cclxuLy8gU29tZSBCYXNpYyBWYXJpYWJsZVxyXG4kd2hpdGUgOiAjZmZmO1xyXG4kZXJyb3IgOiAjRDQ3NDc0O1xyXG4kdG9wLWJhci1oZWlnaHQ6NjVweDtcclxuJGxpc3QtaG92ZXItYmctY29sb3I6ICNmMmY0Zjg7XHJcbiRsaXN0LWJnLWNvbG9yOiAjRjhGOEY4O1xyXG4kbGlzdC1zZXByYXRvci1jb2xvcjpyZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xyXG4kbGlnaHQtYmxhY2s6IzMzMztcclxuJGRhcmstYmxhY2s6IzMzMztcclxuJGlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDMzLCAzNywgNDEsIDAuMTUpO1xyXG4kdGhlbWVGb3JBY2NvdW50U2VjdGlvbjojMWZhMmZmO1xyXG5cclxuLy8gVHJ1bmNhdGVcclxuQG1peGluIHRydW5jYXRlKCR0cnVuY2F0aW9uLWJvdW5kYXJ5KSB7XHJcbiAgICBtYXgtd2lkdGg6ICR0cnVuY2F0aW9uLWJvdW5kYXJ5O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLy8gZm9udCBzaXplXHJcbiRmb250LWZhbWlseS1sYXRvOiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbi8vJGZvbnQtZmFtaWx5LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBmb250KCRzaXplOiBmYWxzZSwgJHdlaWdodDogZmFsc2UsICAkbGg6IGZhbHNlKSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxhdG87IFxyXG4gICAgQGlmICRzaXplIHsgZm9udC1zaXplOiAkc2l6ZTsgfVxyXG4gICAgQGlmICR3ZWlnaHQgeyBmb250LXdlaWdodDogJHdlaWdodDsgfVxyXG4gICAgQGlmICRsaCB7IGxpbmUtaGVpZ2h0OiAkbGg7IH1cclxufVxyXG5cclxuLy8gcHNldWRvXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKXtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuLy8gVG8gcXVpY2tseSBjZW50cmUgYSBibG9jayBlbGVtZW50XHJcbkBtaXhpbiBwdXNoLS1hdXRvIHtcclxuICAgIG1hcmdpbjogeyBcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBib3JkZXIgcmFkaXVzXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICB9XHJcblxyXG4gLy8gbWFyZ2luXHJcbkBtaXhpbiBtYXJnaW4oJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7bWFyZ2luLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge21hcmdpbi1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge21hcmdpbi1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7bWFyZ2luLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gcGFkZGluZ1xyXG5AbWl4aW4gcGFkZGluZygkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHtwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge3BhZGRpbmctcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHtwYWRkaW5nLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHtwYWRkaW5nLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gVHJ1bmNhdGVcclxuQG1peGluIHBhc3N3b3JkLW1nLWluZGljYXRvcigkd2lkdGg6IGZhbHNlLCAkY29sb3I6IGZhbHNlKSB7XHJcbiAgICBAaWYgJHdpZHRoIHt3aWR0aDogJHdpZHRoO31cclxuICAgIEBpZiAkY29sb3Ige2JhY2tncm91bmQtY29sb3I6ICRjb2xvcjt9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMnM7IC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xyXG4gICAgdHJhbnNpdGlvbjogMnM7XHJcbn1cclxuXHJcbi8vIEFsaWduIFZlcnRpY2FsbHlcclxuLm9wdGlfdGFibGUtdi1taWRkbGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLm9wdGlfdGFibGUtY2VsbC12LW1pZGRsZXtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLm9wdGlfdmVydGljYWwtYWxpZ257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gTGluZSBTZXByYXRvclxyXG4ub3B0aV9zZXByYXRvcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LXNlcHJhdG9yLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gSGlkZSBlbGVtZW50IEluIERlc2t0b3AgQW5kIElwYWRcclxuLm9wdGlfaGlkZS1pbi1kZXNrdG9wLWlwYWR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIkBpbXBvcnQgJ19iYXNlJztcclxuXHJcbi8vIGZvbnQgc2l6ZVxyXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xyXG4kZm9udC1zaXplLXJlZ3VsYXI6IDE0cHg7XHJcbiRmb250LXNpemUtbGFyZ2U6IDI0cHg7XHJcbiRmb250LXNpemUteC1sYXJnZTogMzJweDtcclxuJGZvbnQtc2l6ZS14eC1sYXJnZTogNDhweDtcclxuJGZvbnQtc2l6ZS14eHgtbGFyZ2U6IDY0cHg7XHJcbiRmb250LXNpemUteHh4eC1sYXJnZTogOTZweDtcclxuXHJcblxyXG4vLyBmb250IHdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6XHQ0MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOjQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6XHQ3MDA7XHJcblxyXG4jb3B0aV9UaGVtZVNldHRpbmdJRCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8yLiBDb21tb24gY3NzIHN0YXJ0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYm9keXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5we1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTokZm9udC1zaXplLXNtYWxsLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuYXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxuICAgIC8vICY6aG92ZXJ7XHJcbiAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG5cclxuaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXh4eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgye1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgze1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14LWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDV7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXJlZ3VsYXIsICR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDZ7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXNtYWxsLCAkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcblxyXG4uZnMtMTh7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmZzLTIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mcy0yNHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uZnMtMjZ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi8vIFRvcCBCYXJcclxuI29wdGlfVG9wQmFySUR7XHJcbiAgICAub3B0aV91c2VyLXByb2ZpbGV7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ117XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddOmZvY3VzLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ106Zm9jdXN7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuYm9keSB7XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGwgO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuYm9keSBidXR0b24gKyBidXR0b246bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcblxyXG4uay1kYXRlcGlja2VyIC5rLXNlbGVjdHtcclxuICAgIG1hcmdpbjogLTFweCAtMXB4IC0xcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmJ0bi1zbS5idG4tdHJhbnNwYXJlbnQuYnRuLWljb24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzFiOGVlMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4ZWUwO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuLy8gMS4gTGF5b3V0IENTU1xyXG4vLyAyLiBUb3AgQmFyIENTU1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8xLiBMYXlvdXQgY3NzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuI29wdGlfV3JhcHBlcklEe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIExlZnQgUGFuZWxcclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNvcHRpX0xlZnRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5vcHRpX2xlZnQtbmF2aWdhdGlvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyBDc3MgUmVsYXRlZCBUbyBSaWdodCBDb250ZW50IEFyZWFcclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUQub3B0aV9zaWRlYmFyLW1pbmltaXplIHsgLy8gd2lkdGggYWZ0ZXIgY2xvc2Ugc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUR7IC8vIHdpZHRoIGFmdGVyIG9wZW4gc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI29wdGlfUmlnaHRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBDU1MgUmVsYXRlZCBUbyBNYWluIENvbnRlbnQgU2VjdGlvblxyXG4gICAgICAgICNvcHRpX01haW5Db250ZW50SUQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ1cHgpOyAvLyB0b3AgYmFyIGhlaWdodCA2NXB4XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIHRvcCBwYW5lbFxyXG4gICAgICAgIHNlY3Rpb24jb3B0aV9Ub3BCYXJJRCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodCAtIDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy9PcHRpIHJpZ2h0IHNlY3Rpb24gXHJcbiAgICAub3B0aV9yaWdodC1maXgtc2VjdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XHJcbiAgICAgICAgdG9wOiA2NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGFiIHNlY3Rpb24gdW5kZXIgcmlnaHQgc2VjdGlvblxyXG4gICAgICAgIC5vcHRpX3RhYiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wdGlfdGFiY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDEwNXB4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3B0aV9jbG9zZS1pY29uLXJpZ2h0LXNlY3Rpb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLzIuIFRvcCBQYW5lbCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBpZiBsZWZ0IHBhbmVsIGNsb3NlXHJcbiNvcHRpX1JpZ2h0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemV7IC8vIC5vcHRpX3NpZGViYXItbWluaW1pemUgY2FuJ3QgYWNjZXNzIHRoaXMgY2xhc3MgaW4gdG9wLmNvbXBvbmVudCB0aGF0J3Mgd2h5IHdlIGFyZSB1c2luZyBoZXJlXHJcbiAgICAjc2lkZWJhckNvbGxhcHNle1xyXG4gICAgICAgIC5vcHRpX2JhY2thcnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfaGFtYnVyZ2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfbW9iaWxlLW1lbnUtaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgdGhlbWUgY29sb3JcclxuLy8gaWYgd2Ugd2lsbCBhZGQgdGhpcyBjc3MgaW4gdG9wIGJhciB0aGFuIGJhY2tncm91bmQgY29sb3Igd2lsbCBub3QgY2hhbmdlIGZyb20gdGhlbWUgZmlsZSBiZWN1YXNlIGl0IHdpbGwgdGFrZSBoaWdoIHByaW9yYXR5IHRoYXQncyB3aHkgaSBhZGQgaGVyZVxyXG5zZWN0aW9uI29wdGlfVG9wQmFySUR7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3N2RlZywgIzQ4M0RGNiAyJSwgIzQzNUVGOCAxMCUsICMxQkEwRjEgNDQlLCAjMjVEREY1IDkxJSwgIzQ1RDc5MCAxMzAlKTtcclxufVxyXG4gIFxyXG4ub3B0aV9sZWZ0LW5hdmlnYXRpb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4ICMxZmEyZmY7XHJcbn1cclxuXHJcbmJvZHkga2VuZG8tZ3JpZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggIzFmYTJmZjtcclxufVxyXG5cclxuLy8gQWx3YXlzIHNldCBzdHJpcGUgdGhlbWUgZm9yIGFjY291bnQgbW9kdWxlXHJcbmJvZHkub3B0aV9hY2NvdW50LW1vZHVsZXtcclxuICAgIC5rLWluZGljYXRvci1jb250YWluZXIsIGEsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5rLWdyaWQtaGVhZGVyIC5rLWhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLmstY2hlY2tib3g6Y2hlY2tlZCArIC5rLWNoZWNrYm94LWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAucHNfX3RodW1iLXksIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LCAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWNoZWNrYm94OmZvY3VzICsgLmstY2hlY2tib3gtbGFiZWw6OmJlZm9yZXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggJHdoaXRlLCAwIDAgMCAzcHggJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAuay1kcm9wZG93biA+IDpob3ZlcixcclxuICAgIC5rLWRyb3Bkb3duIC5rLWRyb3Bkb3duLXdyYXB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWRyb3Bkb3duIC5rLXN0YXRlLWZvY3VzZWQsIC5rLWRyb3Bkb3dudHJlZSAuay1zdGF0ZS1mb2N1c2VkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uLCAkYWxwaGE6IDAuMik7IFxyXG4gICAgfVxyXG4gICAgLm9wdGlfbG9hZGVyIC5vcHRpX3NwaW5uZXJ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5rLWJ1dHRvbi5rLXByaW1hcnk6Zm9jdXMsIC5rLWJ1dHRvbi5rLXByaW1hcnkuay1zdGF0ZS1mb2N1c2Vke1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKCRjb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24sICRhbHBoYTogMC4yKTsgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAaW1wb3J0ICcuLi8uLi9fdHlwb2dyYXBoeS1idXR0b24tbGF5b3V0JztcclxuXHJcbiNvcHRpX0Rhc2hib2FyZElEIHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDg1cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2lnbnVwL25vdXNlL3NodXR0ZXIvYmFja2dyb3VuZC13bXMuanBnJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2lnbnVwL25vdXNlL3NodXR0ZXIvYmFja2dyb3VuZC13bXMtbS5qcGcnKTtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAvLyB9XHJcbn1cclxuLm9wdGlfZGFzaGJvYXJkLWljb257XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4udGV4dC1sb2dve1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iLCJAaW1wb3J0ICcuLy4uLy4uL2Fzc2V0cy9jc3Mvd2ViL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2Nzcyc7XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbi5vcHRpX3pvb20tZG9udXQtb25seS1tb2JpbGV7XHJcbiAgICB6b29tOiAwLjc1O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4ub3B0aV96b29tLWRvbnV0LW9ubHktbW9iaWxle1xyXG4gICAgem9vbTogMC43NTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuLm9wdGlfem9vbS1kb251dC1vbmx5LW1vYmlsZXtcclxuICAgIHpvb206IDAuNzU7XHJcbn0gICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4ub3B0aV96b29tLWRvbnV0LW9ubHktbW9iaWxle1xyXG4gICAgem9vbTogMC43NTtcclxufSAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(commonservice, translate) {
        this.commonservice = commonservice;
        this.translate = translate;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.appVersion = "Version: " + this.commonservice.config_params.AppVersion;
        // this.appVersion = this.translate.instant("Dashboard_AppVersion") +   this.commonservice.config_params.AppVersion;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"], _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory-transfer/bin-transfer/bin-transfer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{PageTitle}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'ItemCode'|translate}}\" name=\"itemCode\" [(ngModel)]=\"itemCode\"\r\n                                    (blur)=\"OnItemCodeChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"OnItemCodeLookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"showItemName\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemName'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"itemName\" [(ngModel)]=\"itemName\" [disabled]=true>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"showBatchNo\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span *ngIf=\"!isItemSerialTrack\">{{'BatchNo'|translate}}</span>\r\n                            <span *ngIf=\"isItemSerialTrack\">{{'SerialNo'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{batchNoPlaceholder}}\" name=\"lotValue\" [(ngModel)]=\"lotValue\"\r\n                                    (blur)=\"OnLotChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowLOTList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_FromBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'InvTransfer_FromBin'|translate}}\" name=\"fromBin\" [(ngModel)]=\"fromBin\"\r\n                                    (blur)=\"OnFromBinChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowFromBins()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_ToBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'InvTransfer_ToBin'|translate}}\" name=\"toBin\" [(ngModel)]=\"toBin\"\r\n                                    (blur)=\"OnToBinChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowToBins()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span *ngIf=\"!isItemSerialTrack\">{{'OnHandQty'|translate}}</span>\r\n                            <span *ngIf=\"isItemSerialTrack\">{{'SerialQty'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"number\" min=\"0\" class=\"form-control form-control-sm text-right\" placeholder=\"{{zero}}\" name=\"onHandQty\"\r\n                                [(ngModel)]=\"onHandQty\" [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_TransferQty'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input id=\"txtfld\" type=\"number\" min=\"0\" class=\"form-control form-control-sm text-right\" placeholder=\"{{zero}}\"\r\n                                (blur)=\"formatTransferNumbers()\" name=\"transferQty\" [(ngModel)]=\"transferQty\" [disabled]=\"editTransferQty\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_Reason'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'InvTransfer_Reason'|translate}}\" name=\"Remarks\" [(ngModel)]=\"Remarks\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"SubmitPutAway()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text\" (click)=\"AddLineLots()\">\r\n                    <span class=\"k-icon k-i-plus\" role=\"presentation\"></span> {{'AddMore'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text mr-1\" (click)=\"ShowSavedData()\">\r\n                    <span class=\"k-icon k-i-preview\" role=\"presentation\"></span> {{'InvTransfer_ViewLines'|translate}}</button>\r\n                <div class=\"clearfix mt-1 d-block d-sm-none\"></div>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"goBack()\">\r\n                    <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <!-- USE THIS HTML CODE BLOCK FOR VIEW LINE PAGE -->\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'AddedItems'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-12\">\r\n                    <!-- loader start -->\r\n                    <div class=\"opti_loader opti_loader-content-tab\" *ngIf=\"showLoader\">\r\n                        <div class=\"opti_spinner\"></div>\r\n                    </div>\r\n                    <!-- loader end -->\r\n\r\n                    <!-- grid start -->\r\n                    <ng-container *ngIf=\"showLoader==false\">\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"TransferedItemsDetail\" [resizable]=\"true\" [pageSize]=\"pageSize\" [pageable]=\"pagable\"\r\n                            [sortable]=\"true\" [selectable]=\"true\" #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'ItemCode'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ItemCode }}</dd>\r\n\r\n                                        <dt>{{'BatchNo'|translate}}</dt>\r\n                                        <dd>{{ dataItem.LotNo }}</dd>\r\n\r\n                                        <dt>{{'InvTransfer_ToBin'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ToBin }}</dd>\r\n                                    </dl>\r\n\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'Quantity'|translate}}\r\n\r\n                                            <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                                                <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                            </button>\r\n                                        </dt>\r\n                                        <dd>{{ dataItem.Qty }}</dd>\r\n\r\n                                        <dt>{{'InvTransfer_FromBin'|translate}}</dt>\r\n                                        <dd>{{ dataItem.BinNo }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column class=\"pl-1\" media=\"(min-width: 768px)\" field=\"ItemCode\" title=\"{{'ItemCode'|translate}}\" [width]=\"160\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"Qty\" headerClass=\"text-right\" class=\"text-right\" title=\"{{'Quantity'|translate}}\"\r\n                                [width]=\"60\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNo\" [width]=\"160\" title=\"{{'BatchNo'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"BinNo\" [width]=\"160\" title=\"{{'InvTransfer_FromBin'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"ToBin\" title=\"{{'InvTransfer_ToBin'|translate}}\" [width]=\"160\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"Delete\" headerClass=\"text-center\" class=\"text-center\" title=\"\" width=\"30\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                                        <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                        </kendo-grid>\r\n                    </ng-container>\r\n                    <!-- grid end -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"OnOKClick()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"deleteAll()\">\r\n                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <ng-template #template>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">{{'Confirm'|translate}}</h4>\r\n            <button id=\"modalCloseBtn\" type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            {{'DeleteAllLines'|translate}}\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary k-button btn-sm\" type=\"button\" (click)=\"deleteAllOkClick()\">{{'Ok'|translate}}</button>\r\n            <button class=\"btn btn-default k-button btn-sm\" type=\"button\" (click)=\"modalRef.hide()\">{{'Cancel'|translate}}</button>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\"\r\n    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 id=\"dialog-auto-name\" class=\"modal-title pull-left\">{{'Confirm'|translate}}</h4>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{ModalContent}}\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary k-button btn-sm\" type=\"button\" #transferedItemsBtn>{{'Ok'|translate}}</button>\r\n                <button class=\"btn btn-default k-button btn-sm\" type=\"button\" (click)=\"hideModal()\">{{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<span [hidden]=\"showLookupLoader\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory-transfer/bin-transfer/bin-transfer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS10cmFuc2Zlci9iaW4tdHJhbnNmZXIvYmluLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/inventory-transfer/bin-transfer/bin-transfer.component.ts ***!
  \***************************************************************************/
/*! exports provided: BinTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinTransferComponent", function() { return BinTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_inventory_transfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/inventory-transfer.service */ "./src/app/services/inventory-transfer.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var BinTransferComponent = /** @class */ (function () {
    function BinTransferComponent(commonservice, activatedRoute, router, inventoryTransferService, toastr, translate, modalService, _location) {
        this.commonservice = commonservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.inventoryTransferService = inventoryTransferService;
        this.toastr = toastr;
        this.translate = translate;
        this.modalService = modalService;
        this._location = _location;
        this.showLoader = false;
        this.showLookupLoader = true;
        this.itemCode = "";
        this.lotValue = "";
        this.fromBin = "";
        this.transferQty = "0";
        this.itemName = "";
        this.ItemTracking = "";
        this.showItemName = false;
        this.showBatchNo = false;
        this.Remarks = "";
        this.onHandQty = "0";
        this.toBin = "";
        this.getDefaultBinFlag = false;
        this.TransferedItemsDetail = [];
        this.cancelevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.batchNoPlaceholder = "";
        this.showValidation = true;
        this.showConfirmDialog = false;
        this.pagable = false;
        this.pageSize = _services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"].pageSize;
        this.operationType = "";
        this.itemIndex = -1;
        this.isModalShown = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    // UI Section
    BinTransferComponent.prototype.onResize = function (event) {
        // apply grid height
        this.gridHeight = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].getMainContentHeight();
        // check mobile device
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
    };
    // End UI Section
    BinTransferComponent.prototype.ngOnInit = function () {
        // apply grid height
        this.gridHeight = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].getMainContentHeight();
        // check mobile device
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
        //  this.getViewLineList();
        this.viewLines = false;
        if (localStorage.getItem("towhseId") == localStorage.getItem("whseId")) {
            this.PageTitle = this.translate.instant("BinTransfer");
        }
        else {
            this.PageTitle = this.translate.instant("WarehouseTransfer") + this.translate.instant("InvTransfer_From") + localStorage.getItem("whseId") + this.translate.instant("InvTransfer_To") + localStorage.getItem("towhseId");
        }
        this.formatTransferNumbers();
        this.formatOnHandQty();
        this.zero = this.onHandQty;
        console.log("bin loaded");
    };
    /** Simple method to toggle element visibility */
    BinTransferComponent.prototype.ShowSavedData = function () {
        this.operationType = "viewlines";
        if (this.TransferedItemsDetail.length > 0) {
            this.viewLines = !this.viewLines;
        }
        else {
            this.toastr.error('', this.translate.instant("CommonNoDataAvailableMsg"));
        }
    };
    BinTransferComponent.prototype.getViewLineList = function () {
        var _this = this;
        this.showLoader = true;
        setTimeout(function () {
            _this.showLoader = false;
        }, 1000);
    };
    BinTransferComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-dialog-centered' }));
    };
    BinTransferComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    BinTransferComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    BinTransferComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    BinTransferComponent.prototype.OnItemCodeLookupClick = function () {
        var _this = this;
        this.showLoader = true;
        this.inventoryTransferService.getItemCodeList().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                // console.log("ItemList - " + data.toString());
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data;
                _this.lookupfor = "ItemsList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.OnItemCodeChange = function () {
        var _this = this;
        if (this.itemCode == "" || this.itemCode == undefined) {
            return;
        }
        this.showLoader = true;
        this.inventoryTransferService.getItemInfo(this.itemCode).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.itemCode = data[0].ITEMCODE;
                _this.itemName = data[0].ITEMNAME;
                _this.showItemName = true;
                // oWhsTransEditLot.Remarks = data[0].getValue();
                _this.ItemTracking = data[0].TRACKING;
                _this.transferQty = "0.000";
                _this.onHandQty = 0.000;
                _this.CheckTrackingandVisiblity();
                if (localStorage.getItem("whseId") != localStorage.getItem("towhseId")) {
                    _this.getDefaultBin();
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                _this.showItemName = false;
                _this.itemCode = "";
                _this.fromBin = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.OnLotChange = function () {
        var _this = this;
        if (this.lotValue == "" || this.lotValue == undefined) {
            return;
        }
        this.showLoader = true;
        this.inventoryTransferService.getLotInfo(this.fromBin, this.itemCode, this.lotValue).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length == 0) {
                    if (_this.ItemTracking == "S") {
                        _this.toastr.error('', _this.translate.instant("InvTransfer_InvalidSerial"));
                    }
                    else {
                        _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                    }
                }
                else {
                    _this.lotValue = data[0].LOTNO;
                    _this.onHandQty = data[0].TOTALQTY;
                    _this.transferQty = _this.onHandQty;
                    _this.formatTransferNumbers();
                    _this.formatOnHandQty();
                    _this.SysNumber = data[0].SYSNUMBER;
                    _this.fromBin = data[0].BINNO;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.getDefaultBin = function () {
        var _this = this;
        this.inventoryTransferService.getDefaultBin(this.itemCode, localStorage.getItem("towhseId")).subscribe(function (data) {
            _this.getDefaultBinFlag = true;
            if (data != null) {
                if (data != _this.fromBin) {
                    _this.toBin = data;
                }
                return;
            }
            else {
                _this.ShowToBins();
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.ShowLOTList = function () {
        var _this = this;
        this.showLoader = true;
        this.inventoryTransferService.getLotList(localStorage.getItem("whseId"), this.fromBin, this.itemCode, this.lotValue).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("ItemList - " + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                for (var i = 0; i < data.length; i++) {
                    data[i].TOTALQTY = data[i].TOTALQTY.toFixed(Number(localStorage.getItem("DecimalPrecision")));
                }
                _this.serviceData = data;
                _this.lookupfor = "BatchNoList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.ShowFromBins = function () {
        var _this = this;
        this.showLoader = true;
        this.inventoryTransferService.getFromBins(this.ItemTracking, "", this.itemCode, this.lotValue).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    _this.showLookupLoader = false;
                    if (_this.ItemTracking != "N") {
                        _this.lookupfor = "SBTrackFromBin";
                    }
                    else {
                        _this.lookupfor = "NTrackFromBin";
                        for (var i = 0; i < data.length; i++) {
                            data[i].TOTALQTY = data[i].TOTALQTY.toFixed(Number(localStorage.getItem("DecimalPrecision")));
                        }
                    }
                    _this.serviceData = data;
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.OnFromBinChange = function () {
        var _this = this;
        if (this.fromBin == "" || this.fromBin == undefined) {
            return;
        }
        this.showLoader = true;
        this.inventoryTransferService.isFromBinExists(this.ItemTracking, this.fromBin, this.itemCode, this.lotValue).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    if (_this.ItemTracking == "N") {
                        _this.fromBin = data[0].BINNO;
                        _this.onHandQty = data[0].TOTALQTY.toString();
                        _this.transferQty = data[0].TOTALQTY.toString();
                        _this.SysNumber = data[0].SYSNUMBER;
                        _this.LotWhsCode = data[0].WHSCODE;
                    }
                    else {
                        if (data[0].Result == "0") {
                            _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                            return;
                        }
                        else {
                            _this.fromBin = data[0].ID;
                            if (_this.toBin == _this.fromBin) {
                                _this.toastr.error('', _this.translate.instant("FrmNToBinCantSame"));
                                _this.fromBin = "";
                                return;
                            }
                        }
                    }
                }
                else {
                    _this.fromBin = "";
                    _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                    return;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.OnToBinChange = function () {
        var _this = this;
        if (this.toBin == "" || this.toBin == undefined) {
            return;
        }
        this.showLoader = true;
        this.inventoryTransferService.isToBinExist(this.toBin, localStorage.getItem("towhseId")).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Result == "0") {
                        _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                        return;
                    }
                    else {
                        _this.toBin = data[0].ID;
                        if (_this.toBin == _this.fromBin) {
                            _this.toastr.error('', _this.translate.instant("FrmNToBinCantSame"));
                            _this.toBin = "";
                            return;
                        }
                    }
                }
                else {
                    _this.toBin = "";
                    _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                    return;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.ShowToBins = function () {
        var _this = this;
        this.showLoader = true;
        this.inventoryTransferService.getToBin(this.fromBin, localStorage.getItem("towhseId")).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    if (_this.getDefaultBinFlag == false) {
                        _this.showLookupLoader = false;
                        _this.serviceData = data;
                        _this.lookupfor = "toBinsList";
                    }
                    else {
                        if (data[0].BINNO != _this.fromBin) {
                            _this.toBin = data[0].BINNO;
                        }
                        _this.getDefaultBinFlag = false;
                    }
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.IsInvTransferDetailLineExists = function (Item, LotNumber, Binno, ToBin, remarks, InvType) {
        var sumLotQuantity = 0;
        for (var i = 0; i < this.TransferedItemsDetail.length; i++) {
            if (this.TransferedItemsDetail[i].ItemCode == Item &&
                this.TransferedItemsDetail[i].LotNo == LotNumber &&
                this.TransferedItemsDetail[i].BinNo == Binno &&
                this.TransferedItemsDetail[i].ToBin == ToBin &&
                this.TransferedItemsDetail[i].Remarks == remarks)
                return i;
        }
        return -1;
    };
    BinTransferComponent.prototype.AddLineLots = function () {
        this.operationType = "add";
        if (!this.CheckValidation()) {
            return;
        }
        this.itemIndex = this.IsInvTransferDetailLineExists(this.itemCode, this.lotValue, this.fromBin, this.toBin, this.Remarks, "");
        if (this.itemIndex == -1) {
            this.TransferedItemsDetail.push({
                LineNum: '01',
                LotNo: this.lotValue,
                ItemCode: this.itemCode,
                ItemName: this.itemName,
                Qty: this.transferQty,
                SysNumber: this.SysNumber,
                BinNo: this.fromBin,
                ToBin: this.toBin,
                Tracking: this.ItemTracking,
                WhsCode: localStorage.getItem("whseId"),
                OnHandQty: this.onHandQty,
                Remarks: this.Remarks
            });
            this.clearDataForAddMore();
        }
        else {
            if (this.ItemTracking == "S") {
                this.toastr.error('', this.translate.instant("SerialAlreadyExist"));
                return false;
            }
            else {
                this.showOverwriteConfirmDailog();
            }
        }
        if (this.TransferedItemsDetail.length > this.pageSize) {
            this.pagable = true;
        }
        else {
            this.pagable = false;
        }
        if (this.itemIndex == -1) {
            return true;
        }
        else {
            return false;
        }
    };
    BinTransferComponent.prototype.SubmitPutAway = function () {
        this.showValidation = true;
        if (this.TransferedItemsDetail.length > 0) {
            this.showValidation = false;
        }
        var _is = this.AddLineLots();
        this.operationType = "submit";
        if (!_is) {
            return;
        }
        this.SubmitFinally();
    };
    BinTransferComponent.prototype.SubmitFinally = function () {
        var _this = this;
        var oWhsTransAddLot = {};
        oWhsTransAddLot.Header = [];
        oWhsTransAddLot.Detail = [];
        oWhsTransAddLot.UDF = [];
        for (var i = 0; i < this.TransferedItemsDetail.length; i++) {
            this.TransferedItemsDetail[i].LineNum = i;
        }
        oWhsTransAddLot.Detail = this.TransferedItemsDetail;
        var type;
        if (localStorage.getItem("whseId") == localStorage.getItem("towhseId")) {
            type = "";
        }
        else {
            type = "Items";
        }
        oWhsTransAddLot.Header.push({
            WhseCode: localStorage.getItem("whseId"),
            ToWhsCode: localStorage.getItem("towhseId"),
            Type: type,
            DiServerToken: localStorage.getItem("Token"),
            CompanyDBId: localStorage.getItem("CompID"),
            TransType: "WHS",
            //--------------------Adding Parameters for the Licence--------------------------------------------
            GUID: localStorage.getItem("GUID"),
            UsernameForLic: localStorage.getItem("UserId")
            //------------------End for the Licence Parameter------------------------------------------------------
        });
        this.inventoryTransferService.submitBinTransfer(oWhsTransAddLot).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    //--------------------------------------Function to Check for the Licence---------------------------------------
                    if (data[0].ErrorMsg != undefined) {
                        if (data[0].ErrorMsg == "7001") {
                            _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                            return;
                        }
                    }
                    //-----------------------------------End for the Function Check for Licence--------------------------------
                    if (data[0].ErrorMsg == "") {
                        _this.toastr.success('', _this.translate.instant("InvTransfer_ItemsTranSuccessfully") + " " + data[0].SuccessNo);
                        oWhsTransAddLot = {};
                        oWhsTransAddLot.Header = [];
                        oWhsTransAddLot.Detail = [];
                        oWhsTransAddLot.UDF = [];
                        _this.TransferedItemsDetail = [];
                        _this.clearData();
                    }
                    else {
                        _this.toastr.error('', data[0].ErrorMsg);
                    }
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    BinTransferComponent.prototype.showOverwriteConfirmDailog = function () {
        this.showDialog("overwriteQty", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("InvTransfer_Overwrite"));
    };
    BinTransferComponent.prototype.clearData = function () {
        this.itemCode = "";
        this.itemName = "";
        this.ItemTracking = "";
        this.lotValue = "";
        this.transferQty = "";
        this.toBin = "";
        this.fromBin = "";
        this.onHandQty = "";
        this.Remarks = "";
    };
    BinTransferComponent.prototype.clearDataForAddMore = function () {
        //this.itemCode = "";
        // this.itemName = "";
        // this.ItemTracking = "";
        this.lotValue = "";
        this.transferQty = "";
        //this.toBin = "";
        this.fromBin = "";
        this.onHandQty = "";
        this.Remarks = "";
    };
    BinTransferComponent.prototype.CheckValidation = function () {
        if (this.itemCode == "") {
            if (this.showValidation) {
                this.toastr.error('', this.translate.instant("ItemCannotbeBlank"));
            }
            return false;
        }
        if (this.ItemTracking == "B") {
            if (this.lotValue == "") {
                if (this.showValidation) {
                    this.toastr.error('', this.translate.instant("Lotcannotbeblank"));
                }
                return false;
            }
        }
        if (this.ItemTracking == "S") {
            if (this.lotValue == "") {
                if (this.showValidation) {
                    this.toastr.error('', this.translate.instant("SerialNoCantBlank"));
                }
                return false;
            }
        }
        else {
            if (Number(this.transferQty) <= 0) {
                if (this.showValidation) {
                    this.toastr.error('', this.translate.instant("InvTransfer_Enterquantitygreaterthanzero"));
                }
                return false;
            }
        }
        if (this.fromBin == "") {
            this.toastr.error('', this.translate.instant("InvTransfer_FromBinMsg"));
            return false;
        }
        if (this.toBin == "") {
            if (this.showValidation) {
                this.toastr.error('', this.translate.instant("InvTransfer_ToBinMsg"));
            }
            return false;
        }
        if (this.transferQty == "") {
            if (this.showValidation) {
                this.toastr.error('', this.translate.instant("EnterLotQuantity"));
            }
            return false;
        }
        return true;
    };
    BinTransferComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "ItemsList") {
            this.itemCode = $event[0];
            this.itemName = $event[1];
            this.ItemTracking = $event[2];
            this.showItemName = true;
            this.transferQty = this.translate.instant("InvTransfer_zero");
            this.onHandQty = 0.000;
            if (localStorage.getItem("whseId") != localStorage.getItem("towhseId")) {
                this.getDefaultBin();
            }
            this.CheckTrackingandVisiblity();
        }
        else if (this.lookupfor == "BatchNoList") {
            this.lotValue = $event[0];
            this.fromBin = $event[6];
            this.transferQty = $event[7];
            this.onHandQty = $event[7];
            this.SysNumber = $event[9];
        }
        else if (this.lookupfor == "SBTrackFromBin") {
            this.fromBin = $event[3];
            this.transferQty = $event[6];
            this.onHandQty = $event[6];
        }
        else if (this.lookupfor == "NTrackFromBin") {
            this.fromBin = $event[3];
            this.transferQty = $event[6];
            this.onHandQty = $event[6];
        }
        else if (this.lookupfor == "toBinsList") {
            this.toBin = $event[0];
        }
        this.formatTransferNumbers();
        this.formatOnHandQty();
    };
    BinTransferComponent.prototype.CheckTrackingandVisiblity = function () {
        if (this.ItemTracking == "B") {
            this.isItemSerialTrack = false;
            this.showBatchNo = true;
            this.editTransferQty = false;
            this.batchNoPlaceholder = this.translate.instant("BatchNo");
            // oTxtTransferQty.setEnabled(true);
        }
        else if (this.ItemTracking == "S") {
            this.isItemSerialTrack = true;
            this.showBatchNo = true;
            this.editTransferQty = true;
            this.batchNoPlaceholder = this.translate.instant("SerialNo");
        }
        else if (this.ItemTracking == "N") {
            this.isItemSerialTrack = false;
            this.showBatchNo = false;
            this.editTransferQty = false;
            // olbllotno.setText("")
        }
        this.fromBin = "";
        this.toBin = "";
        this.lotValue = "";
    };
    BinTransferComponent.prototype.ViewLinesRowDeleteClick = function (rowindex, gridData) {
        this.showDialog("delete", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("DeleteRecordsMsg"));
        this.rowindex = rowindex;
        this.gridDataRow = gridData;
    };
    BinTransferComponent.prototype.OnOKClick = function () {
        this.viewLines = false;
    };
    BinTransferComponent.prototype.deleteAllOkClick = function () {
        this.TransferedItemsDetail = [];
        document.getElementById("modalCloseBtn").click();
    };
    BinTransferComponent.prototype.formatTransferNumbers = function () {
        this.transferQty = Number(this.transferQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
    };
    BinTransferComponent.prototype.formatOnHandQty = function () {
        this.onHandQty = Number(this.onHandQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
    };
    BinTransferComponent.prototype.goBack = function () {
        this.operationType = "back";
        if (localStorage.getItem("towhseId") == localStorage.getItem("whseId")) {
            this.router.navigate(['home/dashboard']);
        }
        else {
            this.cancelevent.emit(true);
        }
    };
    BinTransferComponent.prototype.deleteAll = function () {
        this.showDialog("deleteAll", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("DeleteAllLines"));
    };
    BinTransferComponent.prototype.showDialog = function (dialogFor, yesbtn, nobtn, msg) {
        this.dialogFor = dialogFor;
        this.yesButtonText = yesbtn;
        this.noButtonText = nobtn;
        this.showConfirmDialog = true;
        this.dialogMsg = msg;
    };
    BinTransferComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("delete"):
                    this.TransferedItemsDetail.splice(this.rowindex, 1);
                    this.gridDataRow.data = this.TransferedItemsDetail;
                    console.log(this.TransferedItemsDetail.length);
                    break;
                case ("deleteAll"):
                    this.deleteAllOkClick();
                    break;
                case ("overwriteQty"):
                    this.TransferedItemsDetail[this.itemIndex].Qty = this.transferQty;
                    if (this.operationType == "submit") {
                        this.SubmitFinally();
                        this.clearData();
                    }
                    else if (this.operationType == "add") {
                        this.clearDataForAddMore();
                    }
                    break;
            }
        }
        else {
            if ($event.Status == "no") {
                switch ($event.From) {
                    case ("delete"):
                        break;
                    case ("deleteAll"):
                        break;
                    case ("overwriteQty"):
                        break;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BinTransferComponent.prototype, "fromScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BinTransferComponent.prototype, "cancelevent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BinTransferComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoShownModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], BinTransferComponent.prototype, "autoShownModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferedItemsBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BinTransferComponent.prototype, "transferedItemsBtn", void 0);
    BinTransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bin-transfer',
            template: __webpack_require__(/*! ./bin-transfer.component.html */ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.html"),
            styles: [__webpack_require__(/*! ./bin-transfer.component.scss */ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_inventory_transfer_service__WEBPACK_IMPORTED_MODULE_7__["InventoryTransferService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], BinTransferComponent);
    return BinTransferComponent;
}());



/***/ }),

/***/ "./src/app/inventory-transfer/inventory-transfer-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/inventory-transfer/inventory-transfer-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InventoryTransferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTransferRoutingModule", function() { return InventoryTransferRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bin-transfer/bin-transfer.component */ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.ts");
/* harmony import */ var _whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whs-transfer/whs-transfer.component */ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.ts");





var routes = [
    { path: '', component: _bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_3__["BinTransferComponent"] },
    { path: 'binTransfer', component: _bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_3__["BinTransferComponent"] },
    { path: 'whsTransfer', component: _whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_4__["WhsTransferComponent"] },
];
var InventoryTransferRoutingModule = /** @class */ (function () {
    function InventoryTransferRoutingModule() {
    }
    InventoryTransferRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InventoryTransferRoutingModule);
    return InventoryTransferRoutingModule;
}());



/***/ }),

/***/ "./src/app/inventory-transfer/inventory-transfer.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/inventory-transfer/inventory-transfer.module.ts ***!
  \*****************************************************************/
/*! exports provided: InventoryTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTransferModule", function() { return InventoryTransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whs-transfer/whs-transfer.component */ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.ts");
/* harmony import */ var _bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bin-transfer/bin-transfer.component */ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.ts");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inventory_transfer_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inventory-transfer-routing.module */ "./src/app/inventory-transfer/inventory-transfer-routing.module.ts");












var InventoryTransferModule = /** @class */ (function () {
    function InventoryTransferModule() {
    }
    InventoryTransferModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_3__["WhsTransferComponent"], _bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["BinTransferComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_5__["TrnaslateLazyModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _inventory_transfer_routing_module__WEBPACK_IMPORTED_MODULE_11__["InventoryTransferRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot()
            ]
        })
    ], InventoryTransferModule);
    return InventoryTransferModule;
}());



/***/ }),

/***/ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory-transfer/whs-transfer/whs-transfer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"whsView\">\r\n  <form class=\"form-with-fix-btnBar\">\r\n    <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n      <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n        {{'WarehouseTransfer'|translate}}\r\n      </h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_FromWhse'|translate}}</label>\r\n            <div class=\"col-sm-9\">\r\n              <input id=\"fromWhse\" name=\"fromWhse\" [(ngModel)]=\"fromWhse\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'InvTransfer_FromWhse'|translate}}\"\r\n                disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_ToWhse'|translate}}</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"input-group input-group-sm\">\r\n                <input type=\"text\" name=\"toWhse\" [(ngModel)]=\"toWhse\" class=\"form-control form-control-sm\" placeholder=\"{{'InvTransfer_ToWhse'|translate}}\"\r\n                  (blur)=\"OnToWarehouseChange()\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getToWhse()\">\r\n                    <i class=\"opti-icon-hammenu\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row fix-footer-btnBar\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <hr />\r\n      </div>\r\n      <div class=\"col-sm-12 col-12\">\r\n        <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\">\r\n          <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n        <!-- <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" (click)=\"listClick($event, 'binTransfer')\" roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button> -->\r\n        <button type=\"button\" *ngIf=\"showNext\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" (click)=\"viewSwitch()\">\r\n          <i class=\"opti-icon-arrow-next\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<app-bin-transfer *ngIf=\"!whsView\" [fromScreen]='fromScreen' (cancelevent)=\"binCancelEvent($event)\"></app-bin-transfer>\r\n<span [hidden]=\"showLookupLoader\">\r\n  <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n  <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory-transfer/whs-transfer/whs-transfer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS10cmFuc2Zlci93aHMtdHJhbnNmZXIvd2hzLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/inventory-transfer/whs-transfer/whs-transfer.component.ts ***!
  \***************************************************************************/
/*! exports provided: WhsTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhsTransferComponent", function() { return WhsTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inventory_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inventory-transfer.service */ "./src/app/services/inventory-transfer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/sidebar/current-sidebar-info */ "./src/app/models/sidebar/current-sidebar-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var WhsTransferComponent = /** @class */ (function () {
    function WhsTransferComponent(commonservice, router, inventoryTransferService, toastr, translate) {
        this.commonservice = commonservice;
        this.router = router;
        this.inventoryTransferService = inventoryTransferService;
        this.toastr = toastr;
        this.translate = translate;
        this.showLookupLoader = true;
        this.whsView = true;
        this.showNext = false;
        this.fromScreen = "";
        this.showLoader = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    WhsTransferComponent.prototype.ngOnInit = function () {
        this.fromWhse = localStorage.getItem("whseId");
    };
    WhsTransferComponent.prototype.getToWhse = function () {
        var _this = this;
        this.showLoader = true;
        this.inventoryTransferService.getToWHS().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                    return;
                }
                console.log(data);
                _this.showLookupLoader = false;
                _this.serviceData = data;
                _this.lookupfor = "toWhsList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    /**
     *
     * @param event
     * @param module
     */
    WhsTransferComponent.prototype.listClick = function (event, module) {
        if (this.toWhse == "" || this.toWhse == undefined) {
            this.toastr.error('', this.translate.instant("InvTransfer_ToWhsBlankErrMsg"));
            return;
        }
        localStorage.setItem("towhseId", this.toWhse);
        this.selectedItem = module;
        this.closeRightSidebar();
        this.router.navigateByUrl('home/' + module, { skipLocationChange: true });
    };
    WhsTransferComponent.prototype.closeRightSidebar = function () {
        var currentSidebarInfo = new _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_4__["CurrentSidebarInfo"]();
        currentSidebarInfo.SideBarStatus = false;
        this.commonservice.setCurrentSideBar(currentSidebarInfo);
    };
    WhsTransferComponent.prototype.getLookupValue = function ($event) {
        this.toWhse = $event[0];
        this.showNext = true;
    };
    WhsTransferComponent.prototype.OnToWarehouseChange = function () {
        var _this = this;
        if (this.toWhse == "" || this.toWhse == undefined) {
            return;
        }
        this.showLoader = true;
        this.inventoryTransferService.isWHsExists(this.toWhse).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                    return;
                }
                console.log(data);
                if (data[0].Result == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidWhsErrorMsg"));
                    _this.toWhse = "";
                    _this.showNext = false;
                }
                else {
                    _this.toWhse = data[0].ID;
                    _this.showNext = true;
                }
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
        if (this.fromWhse == this.toWhse && this.fromWhse != "" && this.toWhse != "") {
            this.toastr.error('', this.translate.instant("InvTransfer_FrmnToNotSame"));
        }
    };
    WhsTransferComponent.prototype.viewSwitch = function () {
        if (this.toWhse == "" || this.toWhse == undefined) {
            this.toastr.error('', this.translate.instant("InvTransfer_ToWhsBlankErrMsg"));
            return;
        }
        localStorage.setItem("towhseId", this.toWhse);
        this.whsView = !this.whsView;
        this.fromScreen = "WhsTransfer";
    };
    WhsTransferComponent.prototype.onCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    WhsTransferComponent.prototype.binCancelEvent = function () {
        this.whsView = !this.whsView;
    };
    WhsTransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-whs-transfer',
            template: __webpack_require__(/*! ./whs-transfer.component.html */ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.html"),
            styles: [__webpack_require__(/*! ./whs-transfer.component.scss */ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_inventory_transfer_service__WEBPACK_IMPORTED_MODULE_2__["InventoryTransferService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], WhsTransferComponent);
    return WhsTransferComponent;
}());



/***/ }),

/***/ "./src/app/models/sidebar/current-sidebar-info.ts":
/*!********************************************************!*\
  !*** ./src/app/models/sidebar/current-sidebar-info.ts ***!
  \********************************************************/
/*! exports provided: CurrentSidebarInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSidebarInfo", function() { return CurrentSidebarInfo; });
var CurrentSidebarInfo = /** @class */ (function () {
    function CurrentSidebarInfo() {
        this.RequesterId = '';
        this.RequesterData = null;
        this.SideBarStatus = false;
    }
    return CurrentSidebarInfo;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-home-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal-home/portal-home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PortalHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHomeRoutingModule", function() { return PortalHomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portal_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-home.component */ "./src/app/portal-home/portal-home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _inventory_transfer_bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory-transfer/bin-transfer/bin-transfer.component */ "./src/app/inventory-transfer/bin-transfer/bin-transfer.component.ts");
/* harmony import */ var _inventory_transfer_whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory-transfer/whs-transfer/whs-transfer.component */ "./src/app/inventory-transfer/whs-transfer/whs-transfer.component.ts");
/* harmony import */ var _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../change-warehouse/change-warehouse.component */ "./src/app/change-warehouse/change-warehouse.component.ts");



// import { SalesOrderListComponent } from '../sales-order/sales-order-list/sales-order-list.component';


// import { FormFieldComponent } from '../form/form-field/form-field.component';



// import { InboundDetailsComponent } from '../inbound/inbound-details/inbound-details.component';
// import { OutCutomerComponent } from '../outbound/out-cutomer/out-cutomer.component';
// import { OutOrderComponent } from '../outbound/out-order/out-order.component';
// import { OutProdissueComponent } from '../outbound/out-prodissue/out-prodissue.component';
// import { OutboundModule } from '../outbound/outbound.module';
var routes = [
    {
        path: '', component: _portal_home_component__WEBPACK_IMPORTED_MODULE_3__["PortalHomeComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            // { path: 'salesorder', component:SalesOrderListComponent },
            //{ path: 'form', component:FormFieldComponent },
            { path: 'binTransfer', component: _inventory_transfer_bin_transfer_bin_transfer_component__WEBPACK_IMPORTED_MODULE_5__["BinTransferComponent"] },
            { path: 'whsTransfer', component: _inventory_transfer_whs_transfer_whs_transfer_component__WEBPACK_IMPORTED_MODULE_6__["WhsTransferComponent"] },
            { path: 'changeWarehouse', component: _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_7__["ChangeWarehouseComponent"] },
            { path: 'inbound', loadChildren: "../inbound/inbound.module#InboundModule" },
            { path: 'adjustment-counting', loadChildren: "../adjustments-counting/adjustments-counting.module#AdjustmentsCountingModule" },
            //{ path: 'inventory-transfer', loadChildren: "../inventory-transfer/inventory-transfer.module#InventoryTransferModule" },
            { path: 'production', loadChildren: "../production/production.module#ProductionModule" },
            { path: 'printing-label', loadChildren: "../printing-label/printing-label.module#PrintingLabelModule" },
            // Need to remove these routing
            // { path:'outbound/outcustomer', component:OutCutomerComponent },
            // { path:'outbound/outorder', component:OutOrderComponent },
            // { path:'outbound/outprodissue', component:OutProdissueComponent },
            { path: 'outbound', loadChildren: "../outbound/outbound.module#OutboundModule" },
        ]
    }
];
var PortalHomeRoutingModule = /** @class */ (function () {
    function PortalHomeRoutingModule() {
    }
    PortalHomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PortalHomeRoutingModule);
    return PortalHomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-home.component.html":
/*!********************************************************!*\
  !*** ./src/app/portal-home/portal-home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"opti_WrapperID\">\r\n\r\n    <!-- start this left panle for Desktop -->\r\n      <app-portal-left *ngIf='isMobile == false'></app-portal-left>\r\n      <!-- <app-left *ngIf='isMobile == false'></app-left> -->\r\n    <!-- end this left panle for Desktop -->\r\n\r\n    <!-- right panel start -->\r\n      <section id=\"opti_RightPanelID\" class=\"\">\r\n          \r\n          <!-- start Top Bar Section -->\r\n            <!-- <app-top></app-top> -->\r\n            <app-portal-top></app-portal-top>\r\n          <!-- end Top Bar Section -->\r\n\r\n          <!-- left panel for for mobile -->\r\n            <!-- <app-left *ngIf='isMobile == true'></app-left> -->\r\n            <app-portal-left *ngIf='isMobile == true'></app-portal-left>\r\n          <!-- end left for mobile -->\r\n          \r\n          <!-- content section strat -->\r\n          <section id=\"opti_MainContentID\" class=\"position-relative\" style=\"overflow-x: hidden !important;\">\r\n            <div class=\"opti_MainContentArea\">\r\n              <router-outlet></router-outlet>\r\n            </div>  \r\n          </section>  \r\n          <!-- end content section strat -->\r\n          \r\n          <!-- right section start -->\r\n          <app-portal-right [currentSidebarInfo]=\"currentSidebarInfo\" *ngIf=\"localRightSectionContainer==true\"></app-portal-right>\r\n          \r\n          <!-- right section end -->\r\n\r\n      </section>\r\n    <!-- right panel end -->\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/portal-home/portal-home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/portal-home/portal-home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portal-home/portal-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal-home/portal-home.component.ts ***!
  \******************************************************/
/*! exports provided: PortalHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHomeComponent", function() { return PortalHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");




var PortalHomeComponent = /** @class */ (function () {
    function PortalHomeComponent(service) {
        this.service = service;
        this.currentSidebarInfo = null;
    }
    PortalHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Remove account related class from body
        var element = document.getElementsByTagName("body")[0];
        element.className = "";
        //this.localRightSectionContainer = this.globals.localRightSectionContainer;
        this.service.currentSidebarInfo.subscribe(function (data) {
            if (data != null) {
                _this.currentSidebarInfo = data;
                _this.localRightSectionContainer = data.SideBarStatus;
            }
        });
        //  this.getSettingOnSAP();
        // UI operations
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].manageNavigationPanel(document.getElementById('sidebarCollapse'));
    };
    PortalHomeComponent.prototype.onResize = function (event) {
        // UI operations   
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].manageNavigationPanel(document.getElementById('sidebarCollapse'));
    };
    PortalHomeComponent.prototype.getSettingOnSAP = function () {
        // this.showLoader = true;
        //here we will read the settings frm db
        this.service.getSettingOnSAP().subscribe(function (data) {
            if (data != null || data != undefined) {
                // this.showLoader = false;
                if (data.CustomizationDetails != undefined) {
                    if (data.CustomizationDetails.length > 0) {
                        // this.isCustEnabled = data.CustomizationDetails[0].CustEnabled;
                        // this.isCustomizedFor = data.CustomizationDetails[0].CustFor;
                        localStorage.setItem('isCustEnabled', data.CustomizationDetails[0].CustEnabled);
                    }
                }
                if (data.SettingTable.length > 0) {
                    if (data.SettingTable != undefined) {
                        // this.IsMoveOrderTimeMandatory = data.SettingTable[0].IsMoveOrderTimeMandatory;
                        // this.settingOnSAP = data.SettingTable[0].ScreenSetting;
                    }
                }
                if (data.UserDetails != undefined) {
                    if (data.UserDetails.length > 0) {
                        if (data.UserDetails != undefined) {
                            // this.isUserIsSubcontracter = data.UserDetails[0].isUserIsSubcontracter;
                            localStorage.setItem('isUserIsSubcontracter', data.UserDetails[0].isUserIsSubcontracter);
                        }
                        // this.showLoader = false;
                    }
                }
                //because of async req.
                // this.getAllWorkOrders("init");
            }
            else {
                // this.showLoader = false;
            }
        }, function (error) {
            // this.toastr.error('', this.language.some_error, this.baseClassObj.messageConfig);
            // this.showLoader = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PortalHomeComponent.prototype, "onResize", null);
    PortalHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-home',
            template: __webpack_require__(/*! ./portal-home.component.html */ "./src/app/portal-home/portal-home.component.html"),
            styles: [__webpack_require__(/*! ./portal-home.component.scss */ "./src/app/portal-home/portal-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["Commonservice"]])
    ], PortalHomeComponent);
    return PortalHomeComponent;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/portal-home/portal-home.module.ts ***!
  \***************************************************/
/*! exports provided: PortalHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHomeModule", function() { return PortalHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portal_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-home-routing.module */ "./src/app/portal-home/portal-home-routing.module.ts");
/* harmony import */ var _portal_left_portal_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-left/portal-left.component */ "./src/app/portal-home/portal-left/portal-left.component.ts");
/* harmony import */ var _portal_right_portal_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-right/portal-right.component */ "./src/app/portal-home/portal-right/portal-right.component.ts");
/* harmony import */ var _portal_top_portal_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portal-top/portal-top.component */ "./src/app/portal-home/portal-top/portal-top.component.ts");
/* harmony import */ var _portal_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portal-home.component */ "./src/app/portal-home/portal-home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var _inventory_transfer_inventory_transfer_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../inventory-transfer/inventory-transfer.module */ "./src/app/inventory-transfer/inventory-transfer.module.ts");
/* harmony import */ var _inbound_inbound_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../inbound/inbound.module */ "./src/app/inbound/inbound.module.ts");
/* harmony import */ var _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../outbound/outbound.module */ "./src/app/outbound/outbound.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../change-warehouse/change-warehouse.component */ "./src/app/change-warehouse/change-warehouse.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");















// import { FormModule } from '../form/form.module';









var PortalHomeModule = /** @class */ (function () {
    function PortalHomeModule() {
    }
    PortalHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _portal_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["PortalHomeRoutingModule"],
                // BS
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__["AngularSvgIconModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_15__["TrnaslateLazyModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__["DropDownsModule"],
                // Angular
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__["GridModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
                _inbound_inbound_module__WEBPACK_IMPORTED_MODULE_17__["InboundModule"],
                _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_18__["OutboundModule"],
                _inventory_transfer_inventory_transfer_module__WEBPACK_IMPORTED_MODULE_16__["InventoryTransferModule"]
            ],
            declarations: [_portal_home_component__WEBPACK_IMPORTED_MODULE_7__["PortalHomeComponent"], _portal_left_portal_left_component__WEBPACK_IMPORTED_MODULE_4__["PortalLeftComponent"], _portal_right_portal_right_component__WEBPACK_IMPORTED_MODULE_5__["PortalRightComponent"], _portal_top_portal_top_component__WEBPACK_IMPORTED_MODULE_6__["PortalTopComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_20__["ChangeWarehouseComponent"]],
            providers: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
        })
    ], PortalHomeModule);
    return PortalHomeModule;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-left/portal-left.component.html":
/*!********************************************************************!*\
  !*** ./src/app/portal-home/portal-left/portal-left.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- left panel start -->\r\n<section id=\"opti_LeftPanelID\" class=\"position-relative\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center opti_vertical-align opti_device-logo-outer\">\r\n                <!-- logo -->\r\n                <section class=\"opti_logo opti_device-logo text-primary\">\r\n                    <!-- <img src=\"assets/images/logo/large-logo.png\" alt=\"Large Logo\" class=\"opti_large-logo opti_mouse-pointer\" />\r\n                    <img src=\"assets/images/logo/small-logo.png\" alt=\"Logo\" class=\"opti_small-logo opti_mouse-pointer\" /> -->\r\n                    <svg version=\"1.1\" id=\"Layer_1\" width=\"50px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 164.6 148.3\" style=\"enable-background:new 0 0 164.6 148.3;\" xml:space=\"preserve\">\r\n                        <style type=\"text/css\">\r\n                            .st0{fill:#26B1FB;}\r\n                            .st1{fill:#003F5E;}\r\n                            .st2{fill:#EEA91F;}\r\n                            .st3{fill:#EEAA1F;}\r\n                            .st4{fill:#EEAA21;}\r\n                            .st5{fill:#EEAA20;}\r\n                        </style>\r\n                        <path class=\"st0\" d=\"M164.4,62.5c-0.2-0.2-0.4-0.4-0.6-0.6C137.1,41.5,110.3,21,83.6,0.6c-1.1-0.9-1.7-0.6-2.7,0.1\r\n                            C54.3,21.1,27.7,41.4,1,61.8c-0.7,0.5-1,1.1-1,2c0,11,0,21.9,0,32.9c0,16.8,0,33.6,0,50.4c0,1,0.2,1.3,1.2,1.3c2.5-0.1,5,0,7.6,0\r\n                            c1.7,0,1.5,0.2,1.5-1.5c0-26,0-51.9,0-77.9c0-0.7,0.1-1.3,0.7-1.9C34.5,49.1,58,31.2,81.4,13.3c0.9-0.7,1.3-0.4,2,0.1\r\n                            C106.7,31.2,130,49,153.3,66.8c0.7,0.6,1,1.2,1,2.1c0,25.9,0,51.8,0,77.6c0,0.3,0,0.6,0,1c-0.1,0.7,0.3,0.8,0.8,0.8\r\n                            c3.1,0,6.2,0,9.2-0.1c0.1,0,0.2,0,0.2,0c0-28.6,0-57.1,0-85.7C164.6,62.5,164.5,62.5,164.4,62.5z\"/>\r\n                        <path class=\"st1\" d=\"M61.2,116.7c0.9-4.1,1.8-8.1,2.6-12.2c0.6-2.7,1.2-5.3,1.7-8c0.1-0.6,0.3-0.9,1-0.9c1.4,0.1,2.9,0.1,4.3,0\r\n                            c1-0.1,1,0.3,0.8,1.1c-1.6,6.8-3.3,13.6-4.9,20.4c-0.7,2.8-1.4,5.6-2,8.4c-0.1,0.7-0.4,0.8-1,0.8c-1.6,0-3.2-0.1-4.8,0\r\n                            c-0.9,0-1.1-0.3-1.3-1.1c-1.7-6.8-3.5-13.6-5.3-20.4c-0.1-0.4-0.1-0.8-0.5-1.2c-1.3,4.9-2.6,9.8-3.9,14.6c-0.6,2.4-1.3,4.7-1.9,7.1\r\n                            c-0.2,0.8-0.5,0.9-1.2,0.9c-1.6,0-3.3,0-4.9,0c-0.6,0-0.9-0.2-1-0.8c-2.3-9.7-4.5-19.3-6.9-29c-0.2-0.9,0.1-0.9,0.8-0.9\r\n                            c1.4,0,2.9,0,4.3,0c0.8,0,1.1,0.2,1.3,1c1.4,6.5,2.8,13,4.3,19.5c0,0,0,0.1,0.1,0.2c0.4-0.6,0.5-1.2,0.6-1.8\r\n                            c1.6-5.9,3.2-11.9,4.7-17.8c0.2-0.8,0.5-1.1,1.4-1.1c1.7,0.1,3.4,0.1,5.2,0c0.9,0,1.2,0.2,1.4,1.1c1.5,6.2,3.1,12.5,4.6,18.7\r\n                            c0.1,0.4,0.2,0.8,0.3,1.1C61.1,116.7,61.1,116.7,61.2,116.7z\"/>\r\n                        <path class=\"st1\" d=\"M80.7,103.2c0,7.3,0,14.6,0,21.9c0,1.1-0.3,1.4-1.4,1.3c-1.2-0.1-2.3,0-3.5,0c-0.6,0-0.8-0.1-0.8-0.8\r\n                            c0-9.7,0-19.4,0-29c0-0.7,0.2-0.9,0.9-0.9c2.4,0,4.9,0,7.3,0c0.8,0,1.1,0.2,1.3,1c1.7,6.5,3.4,13,5.1,19.5c0.5-0.3,0.4-0.8,0.5-1.3\r\n                            c1.6-6,3.1-12,4.7-18.1c0.2-0.8,0.5-1.2,1.4-1.1c2.4,0.1,4.8,0,7.2,0c0.7,0,1,0.1,1,0.9c0,9.6,0,19.3,0,28.9c0,0.7-0.1,0.9-0.8,0.9\r\n                            c-1.3-0.1-2.6-0.1-3.8,0c-0.8,0-1.1-0.2-1.1-1.1c0-7,0-13.9,0-20.9c0-0.4,0-0.9-0.2-1.3c-0.8,3.3-1.7,6.6-2.5,9.9\r\n                            c-1,4.1-2.1,8.3-3.1,12.4c-0.2,0.7-0.5,1-1.2,0.9c-1.3-0.1-2.6-0.1-4,0c-0.9,0.1-1.1-0.2-1.3-1c-1.7-6.9-3.4-13.8-5.1-20.7\r\n                            c-0.1-0.5-0.3-1-0.4-1.5C80.8,103.1,80.8,103.2,80.7,103.2z\"/>\r\n                        <path class=\"st1\" d=\"M129.7,104.6c-0.2,0-0.4,0-0.6,0c-1.5,0.3-2.7,0.2-3-1.8c-0.2-1-1.1-1.7-2.1-2c-2.1-0.7-4.2-0.7-6.3,0.2\r\n                            c-1,0.4-1.7,1.1-1.7,2.2c0,1.2,0.7,1.9,1.7,2.4c2.1,1,4.3,1.4,6.5,2c1.3,0.4,2.6,0.7,3.9,1.3c4,1.6,5.8,4.6,5.7,9\r\n                            c-0.1,3.7-2.6,7-6.3,8.2c-3.6,1.1-7.3,1.2-11,0.1c-4.6-1.3-6.7-4.9-7.4-9.1c-0.1-0.5,0.1-0.7,0.6-0.8c1.6-0.1,3.1-0.3,4.7-0.5\r\n                            c0.9-0.1,0.8,0.5,0.9,0.9c0.6,2.3,1.9,4.1,4.3,4.6c1.7,0.4,3.4,0.3,5.1-0.2c0.8-0.3,1.5-0.7,2.1-1.4c1.6-1.8,1.2-4.2-1-5.3\r\n                            c-1.8-0.8-3.8-1.2-5.7-1.7c-1.8-0.5-3.6-1-5.3-1.9c-3.1-1.7-4.7-4.4-4.4-8c0.3-3.4,2.1-5.7,5.2-6.8c4-1.5,8.1-1.5,12.1,0.1\r\n                            c3.3,1.3,5,3.9,5.4,7.5c0.1,0.6-0.1,0.8-0.7,0.8C131.3,104.5,130.5,104.5,129.7,104.6C129.7,104.5,129.7,104.6,129.7,104.6z\"/>\r\n                        <path class=\"st2\" d=\"M24.8,110.5c0-12.1,0-24.1,0-36.2c0-1.1,0.3-1.5,1.4-1.4c1.2,0.1,2.3,0,3.5,0c0.6,0,0.8,0.2,0.8,0.8\r\n                            c0,5.2,0,10.4,0,15.6c0,0.9-0.5,0.9-1.1,0.8c-1.1-0.2-1.3,0.3-1.3,1.3c0,13,0,26,0,39c0,1,0.2,1.4,1.2,1.2c0.9-0.2,1.2,0.2,1.1,1.1\r\n                            c0,4.8,0,9.6,0,14.4c0,0.9-0.3,1.1-1.1,1c-1.3-0.1-2.6,0-3.8,0c-0.6,0-0.8-0.2-0.8-0.8c0-0.3,0-0.6,0-0.8\r\n                            C24.8,134.6,24.8,122.5,24.8,110.5z\"/>\r\n                        <path class=\"st2\" d=\"M139.9,110.6c0,12.1,0,24.2,0,36.2c0,1.1-0.3,1.4-1.4,1.4c-1.2-0.1-2.3,0-3.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                            c0-5,0-9.9,0-14.9c0-0.7,0.3-0.9,0.9-0.9c2.4,0,2.4-0.1,2.4-2.5c0-12.5,0-25,0-37.5c0-1.1-0.2-1.5-1.4-1.5c-1.9,0.1-1.9,0-1.9-1.9\r\n                            c0-4.7,0-9.4,0-14c0-0.9,0.2-1.3,1.2-1.2c1,0.1,2.1,0.1,3.1,0c1.1-0.1,1.4,0.2,1.4,1.4c-0.1,6.6,0,13.3,0,19.9\r\n                            C139.9,99.7,139.9,105.2,139.9,110.6z\"/>\r\n                        <path class=\"st2\" d=\"M45.1,81.5c0-2.5,0-5,0-7.5c0-0.7,0.1-1.1,1-1.1c2.3,0.1,4.6,0,6.8,0c0.7,0,0.9,0.2,0.9,0.9\r\n                            c0,5.2,0,10.3,0,15.5c0,0.8-0.3,0.9-1,0.9c-2.2,0-4.4-0.1-6.6,0c-0.9,0-1.2-0.2-1.1-1.1C45.2,86.6,45.1,84,45.1,81.5z\"/>\r\n                        <path class=\"st2\" d=\"M86.7,81.6c0,2.5,0,5,0,7.4c0,0.8-0.1,1.1-1,1.1c-2.2-0.1-4.5-0.1-6.7,0c-0.8,0-1-0.3-1-1c0-5.1,0-10.1,0-15.2\r\n                            c0-0.8,0.3-1,1-1c2.2,0,4.4,0,6.6,0c0.8,0,1.1,0.2,1.1,1.1C86.7,76.5,86.7,79.1,86.7,81.6z\"/>\r\n                        <path class=\"st2\" d=\"M97.7,81.6c0,2.6,0,5.1,0,7.7c0,0.7-0.2,0.9-0.9,0.9c-2.3,0-4.6,0-6.9,0c-0.7,0-0.9-0.2-0.9-0.9\r\n                            c0-5.1,0-10.3,0-15.4c0-0.8,0.3-0.9,1-0.9c2.2,0,4.5,0,6.7,0c0.8,0,1,0.2,1,1C97.6,76.5,97.7,79.1,97.7,81.6z\"/>\r\n                        <path class=\"st2\" d=\"M53.8,140c0,2.4,0,4.7,0,7.1c0,0.8-0.2,1.1-1,1.1c-2.2-0.1-4.5-0.1-6.7,0c-0.8,0-0.9-0.2-0.9-0.9\r\n                            c0-4.9,0-9.8,0-14.6c0-0.7,0.1-1,0.9-1c2.3,0.1,4.6,0,6.8,0c0.7,0,1,0.2,0.9,0.9C53.8,135.1,53.8,137.6,53.8,140z\"/>\r\n                        <path class=\"st2\" d=\"M78,139.9c0-2.4,0-4.9,0-7.3c0-0.7,0.2-1,0.9-1c2.3,0,4.6,0,6.8,0c0.8,0,0.9,0.2,0.9,1c0,4.9,0,9.8,0,14.6\r\n                            c0,0.7-0.2,1-0.9,1c-2.3,0-4.6,0-6.8,0c-0.8,0-0.9-0.2-0.9-1C78.1,144.8,78,142.4,78,139.9z\"/>\r\n                        <path class=\"st2\" d=\"M97.7,139.9c0,2.4,0,4.9,0,7.3c0,0.7-0.2,1-0.9,1c-2.3,0-4.6,0-6.8,0c-0.8,0-0.9-0.3-0.9-1c0-4.9,0-9.8,0-14.6\r\n                            c0-0.7,0.2-1,0.9-1c2.3,0,4.6,0,6.8,0c0.8,0,0.9,0.3,0.9,1C97.7,135.1,97.7,137.5,97.7,139.9z\"/>\r\n                        <path class=\"st2\" d=\"M118.8,81.6c0,2.6,0,5.1,0,7.7c0,0.7-0.2,0.9-0.9,0.9c-1.8,0-3.7,0-5.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                            c0-5.2,0-10.4,0-15.6c0-0.6,0.2-0.9,0.8-0.8c1.8,0,3.7,0,5.5,0c0.7,0,0.9,0.3,0.9,0.9C118.8,76.4,118.8,79,118.8,81.6z\"/>\r\n                        <path class=\"st2\" d=\"M118.8,140c0,2.4,0,4.9,0,7.3c0,0.7-0.1,0.9-0.9,0.9c-1.8,0-3.7,0-5.5,0c-0.6,0-0.8-0.2-0.8-0.8\r\n                            c0-5,0-9.9,0-14.9c0-0.6,0.2-0.9,0.8-0.8c1.8,0,3.7,0,5.5,0c0.7,0,0.9,0.2,0.9,0.9C118.8,135,118.8,137.5,118.8,140z\"/>\r\n                        <path class=\"st3\" d=\"M68.9,81.5c0-2.5,0-5,0-7.4c0-0.9,0.3-1.2,1.2-1.1c1,0.1,2,0,3,0c0.6,0,0.8,0.2,0.8,0.9c0,5.2,0,10.4,0,15.6\r\n                            c0,0.7-0.3,0.8-0.9,0.8c-1.3-0.1-3,0.4-3.8-0.2c-0.8-0.6-0.2-2.4-0.3-3.7C68.9,84.7,68.9,83.1,68.9,81.5z\"/>\r\n                        <path class=\"st3\" d=\"M68.9,139.8c0-2.4,0-4.8,0-7.2c0-0.7,0.2-1,0.9-1c1.1,0.1,2.2,0,3.2,0c0.6,0,0.8,0.2,0.8,0.8c0,5,0,9.9,0,14.9\r\n                            c0,0.7-0.3,0.9-0.9,0.8c-1,0-2.1-0.1-3.1,0c-0.8,0-0.9-0.2-0.9-1C68.9,144.8,68.9,142.3,68.9,139.8z\"/>\r\n                        <path class=\"st2\" d=\"M101.8,81.5c0-2.5,0-5,0-7.6c0-0.8,0.2-1.1,1-1c1,0.1,2.1,0,3.1,0c0.6,0,0.8,0.2,0.8,0.8c0,5.2,0,10.5,0,15.7\r\n                            c0,0.6-0.2,0.8-0.8,0.7c-0.1,0-0.2,0-0.2,0c-1.2,0-2.8,0.4-3.6-0.2c-0.8-0.6-0.2-2.3-0.3-3.5C101.7,84.8,101.8,83.1,101.8,81.5z\"/>\r\n                        <path class=\"st2\" d=\"M101.8,139.9c0-2.4,0-4.8,0-7.2c0-0.8,0.1-1.2,1-1.1c1,0.1,2,0,3,0c0.6,0,0.9,0.1,0.9,0.8c0,5,0,10,0,15\r\n                            c0,0.7-0.3,0.8-0.9,0.8c-1,0-2.1-0.1-3.1,0c-0.8,0.1-0.9-0.3-0.9-1C101.8,144.8,101.8,142.4,101.8,139.9z\"/>\r\n                        <path class=\"st4\" d=\"M127.8,81.6c0,2.5,0,5,0,7.5c0,0.8-0.2,1-1,1c-2.4,0-2.4,0-2.4-2.5c0-4.5,0-9,0-13.5c0-1,0.2-1.3,1.3-1.3\r\n                            c2.2,0.1,2.2,0,2.2,2.2C127.8,77.3,127.8,79.5,127.8,81.6z\"/>\r\n                        <path class=\"st4\" d=\"M127.8,139.9c0,2.4,0,4.9,0,7.3c0,0.7-0.2,1-0.9,1c-2.5,0-2.5,0.1-2.5-2.4c0-4.3,0-8.5,0-12.8\r\n                            c0-1,0.2-1.4,1.3-1.3c2.1,0.1,2.1,0,2.1,2.2C127.8,135.9,127.8,137.9,127.8,139.9z\"/>\r\n                        <path class=\"st5\" d=\"M36.9,81.5c0-2.5,0-5,0-7.5c0-0.8,0.2-1,1-1c2.9,0.1,2.3-0.3,2.4,2.3c0,4.6,0,9.2,0,13.8c0,1-0.3,1.2-1.2,1.2\r\n                            c-2.2-0.1-2.2,0-2.2-2.2C36.9,85.8,36.9,83.6,36.9,81.5z\"/>\r\n                        <path class=\"st5\" d=\"M62.1,81.6c0,2.5,0,5,0,7.5c0,0.9-0.3,1.1-1.1,1.1c-2.3,0-2.3,0-2.3-2.3c0-4.6,0-9.2,0-13.8\r\n                            c0-0.9,0.2-1.2,1.1-1.1c2.3,0,2.3,0,2.3,2.3C62.1,77.3,62.1,79.5,62.1,81.6z\"/>\r\n                        <path class=\"st5\" d=\"M62.1,140.1c0,2.4,0,4.8,0,7.2c0,0.7-0.2,1-0.9,1c-2.5,0-2.5,0.1-2.5-2.4c0-4.3,0-8.6,0-12.9\r\n                            c0-0.9,0.2-1.2,1.2-1.2c2.2,0.1,2.2,0,2.2,2.2C62.1,135.9,62.1,138,62.1,140.1z\"/>\r\n                        <path class=\"st5\" d=\"M40.3,139.9c0,2.4,0,4.9,0,7.3c0,0.9-0.3,1.1-1.1,1.1c-2.3,0-2.3,0-2.3-2.3c0-4.3,0-8.7,0-13\r\n                            c0-1,0.3-1.2,1.2-1.2c2.2,0.1,2.2,0,2.2,2.2C40.3,135.9,40.3,137.9,40.3,139.9z\"/>\r\n                    </svg>\r\n                </section>\r\n                <div id=\"sidebarCollapse-alt\" class=\"opti_vertical-align\">\r\n                    <i class=\"opti-icon-left-arrow opti_mobile-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"opti_left-navigation position-relative\" [perfectScrollbar]=\"\">\r\n        <ul class=\"opti_left-nav-ul\">\r\n            <!-- <li (click)=\"listClick($event, 'dashboard')\" [ngClass]=\"{'active': selectedItem == 'dashboard'}\">\r\n                <a roterLink=\"dashboard\">\r\n                    <i class=\"opti-icon-dashboard\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">Dashboard</span>\r\n                </a>\r\n            </li> -->\r\n\r\n            <li id=\"PUR\" (click)=\"listClick($event, 'inbound')\" [ngClass]=\"{'active': selectedItem == 'inbound'}\">\r\n                <a roterLink=\"inbound\" (click)=\"onInboundClick()\">\r\n                    <i class=\"opti-icon-inbound-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Inbound'|translate}}</span>\r\n                </a>\r\n            </li>\r\n\r\n            <li id=\"SLS\" (click)=\"listClick($event, 'outbound')\" [ngClass]=\"{'active': selectedItem == 'outbound'}\">\r\n                <a roterLink=\"outbound\" (click)=\"onOutboundClick()\">\r\n                    <i class=\"opti-icon-outbound-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Outbound'|translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\" >\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-inventory-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'InventoryTransfer'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                    <!-- <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'inventory-transfer/whsTransfer')\" > -->\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'whsTransfer')\" >\r\n                        <a class=\"dropdown-item\" roterLink=\"whsTransfer\">\r\n                            <i class=\"opti-icon-warehouse-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'WarehouseTransfer'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <!-- <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'inventory-transfer/binTransfer')\" > -->\r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'binTransfer')\" >\r\n                        <a class=\"dropdown-item\" roterLink=\"binTransfer\" (click)=\"binClick()\">\r\n                            <i class=\"opti-icon-bin-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'BinTransfer'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-notes\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'AdjustmentsCounting'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'adjustment-counting/physical-count')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"physical-count\" >\r\n                            <i class=\"opti-icon-time\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'PhysicalCount'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-factory\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Production'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">                    \r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'production/production-issue')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"issue\" (click)=\"onOutboundClick()\">\r\n                            <i class=\"opti-icon-issue\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'IssueForProduction'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'production/production-receipt')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"receipt\">\r\n                            <i class=\"opti-icon-customer-purchase-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'ReceiptFromProduction'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-printer\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'LabelPrintingandReports'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">                    \r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/item-label')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"item-label\">\r\n                            <i class=\"opti-icon-issue\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'ItemLabel'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/bin-label')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"bin-label\">\r\n                            <i class=\"opti-icon-sales-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'BinLabel'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/inventory-enquiry')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"inventory-enquiry\">\r\n                            <i class=\"opti-icon-sales-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'InventoryEnquiry'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n\r\n    </section>\r\n\r\n    <section id=\"opti_LeftPanelFooterLogo\">\r\n        <img src=\"assets/images/logo/poweredbylogo.svg\" alt=\"powered logo\">\r\n    </section>\r\n\r\n\r\n</section>\r\n<!-- left panel end -->\r\n\r\n<!-- <a routerLink='dashboard'>Dashboard</a><br>\r\n<a routerLink='purchaseinquiry'> Purchase Inquery</a> -->"

/***/ }),

/***/ "./src/app/portal-home/portal-left/portal-left.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/portal-home/portal-left/portal-left.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  .opti_left-nav-ul {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #F8F8F8; }\n  .opti_left-nav-ul > li {\n    list-style: none;\n    padding: 10px 10px;\n    background-color: #F8F8F8;\n    border-bottom: 1px solid rgba(120, 130, 140, 0.13);\n    cursor: pointer; }\n  .opti_left-nav-ul > li > a {\n      color: #333;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n  .opti_left-nav-ul > li > a:hover {\n        text-decoration: none;\n        color: #333; }\n  .opti_left-nav-ul > li > a span.text {\n        align-self: center;\n        justify-self: flex-start;\n        display: flex;\n        flex: 1;\n        font-size: 12px; }\n  .opti_left-nav-ul > li > a i {\n        font-size: 28px; }\n  .opti_left-nav-ul > li:first-child {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n  .opti_left-nav-ul > li:last-child {\n      border-bottom: none; }\n  .opti_left-nav-ul > li.dropdown {\n      position: static;\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n      z-index: 0; }\n  .opti_left-nav-ul > li.dropdown > a.dropdown-toggle {\n        padding: 10px 10px; }\n  .opti_left-nav-ul > li.dropdown > a.dropdown-toggle:after {\n          font-family: \"OptiProErp\";\n          content: \"\\e936\";\n          border: none;\n          display: flex;\n          align-self: center;\n          justify-self: flex-end;\n          justify-content: flex-end;\n          font-size: 10px;\n          width: 10px;\n          height: 9px;\n          margin: 0 0 0 5px;\n          line-height: 9px;\n          transition: all 300ms ease-in-out; }\n  .opti_left-nav-ul > li.dropdown.open:hover {\n        background-color: transparent !important; }\n  .opti_left-nav-ul > li.dropdown.open > a {\n        background-color: var(--kendo-light-primary-hover-color); }\n  .opti_left-nav-ul > li.dropdown.open > a.dropdown-toggle:after {\n        -webkit-transform: rotateX(180deg);\n                transform: rotateX(180deg); }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu {\n        margin: 0;\n        padding: 0;\n        border: none;\n        border-radius: 0;\n        position: static;\n        z-index: 0;\n        box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.2); }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a {\n          padding: 10px 15px 10px 25px;\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          font-size: 12px; }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a:hover {\n            background-color: transparent; }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a i {\n            font-size: 28px; }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active {\n          background-color: var(--kendo-light-primary-hover-color); }\n  .opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover a, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover a:hover, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active a, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active a:hover {\n            background-color: rgba(255, 255, 255, 0.5); }\n  .opti_left-navigation > ul li span {\n  margin-left: 10px; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul {\n  min-width: initial; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a {\n    justify-content: center; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a.dropdown-toggle {\n    padding: 15px 5px 15px 10px; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li > ul.dropdown-menu {\n    min-width: initial; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li > ul.dropdown-menu > li a {\n      padding: 10px 15px;\n      justify-content: center; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a.dropdown-toggle:after {\n    font-size: 8px;\n    width: 8px;\n    line-height: 8px; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li img {\n    width: 100%; }\n  #opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li span.text {\n    display: none; }\n  .opti_sidebar-minimize ul li {\n  max-width: 80px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n  .opti_logo.opti_vertical-align {\n  max-height: 65px;\n  max-width: 100%;\n  height: auto;\n  width: auto; }\n  .opti_sidebar-minimize .opti_logo .opti_large-logo {\n  display: none; }\n  .opti_sidebar-minimize .opti_logo .opti_small-logo {\n  display: block; }\n  .opti_logo .opti_large-logo {\n  display: block; }\n  .opti_logo .opti_small-logo {\n  display: none; }\n  .opti_device-logo-outer {\n  max-height: 65px;\n  overflow: hidden;\n  height: 65px;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n  .opti_device-logo-outer .opti_logo.opti_device-logo {\n    flex: 1;\n    font-size: 27px;\n    font-weight: 800; }\n  .opti_device-logo-outer #sidebarCollapse-alt {\n    display: none; }\n  @media screen and (max-width: 767px) {\n      .opti_device-logo-outer #sidebarCollapse-alt {\n        display: block; } }\n  .opti_device-logo-outer #sidebarCollapse-alt i {\n      font-size: 24px; }\n  .opti_sidebar-minimize .opti_logo.opti_device-logo {\n  font-size: 25px;\n  line-height: 22px; }\n  .opti_device-logo {\n  max-height: 100%; }\n  .opti_device-logo img {\n    height: auto;\n    width: auto;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    max-width: 100%;\n    max-height: 100%;\n    margin: 0 auto; }\n  @media screen and (max-width: 479px) {\n      .opti_device-logo img {\n        padding: 0; } }\n  #opti_LeftPanelFooterLogo {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  align-items: center;\n  justify-items: flex-end;\n  justify-content: center; }\n  #opti_LeftPanelFooterLogo img {\n    width: 60%; }\n  @media screen and (max-width: 479px) {\n      #opti_LeftPanelFooterLogo img {\n        width: auto;\n        height: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLWxlZnQvRDpcXEFua3VyXFxXTVNcXE5Fd1dNU0NMb25lM1xcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9iYXNlLnNjc3MiLCJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1sZWZ0L0Q6XFxBbmt1clxcV01TXFxORXdXTVNDTG9uZTNcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFwcFxccG9ydGFsLWhvbWVcXHBvcnRhbC1sZWZ0XFxwb3J0YWwtbGVmdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RkE7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFKaEI7SUFNUSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQUluQjtFQUNJLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJDQWhHMEM7RUFpRzFDLFVBQVUsRUFBQTtFQUlkO0VBQ0ksYUFBYSxFQUFBO0VDaEhqQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJETW1CLEVBQUE7RUNUdkI7SUFLUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCREVlO0lDRGYsa0RERXNDO0lDRHRDLGVBQWUsRUFBQTtFQVR2QjtNQVdZLFdEQUs7TUNDTCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDJCQUEyQixFQUFBO0VBZHZDO1FBZ0JnQixxQkFBcUI7UUFDckIsV0RMQSxFQUFBO0VDWmhCO1FBb0JnQixrQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYixPQUFPO1FBQ1AsZUFBZSxFQUFBO0VBeEIvQjtRQW1DZ0IsZUFBZSxFQUFBO0VBbkMvQjtNQXVDWSwyQkFBMkI7TUFDM0IsNEJBQTRCLEVBQUE7RUF4Q3hDO01BMkNZLG1CQUFtQixFQUFBO0VBM0MvQjtNQThDWSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixVQUFVO01BQ1YsVUFBVSxFQUFBO0VBbER0QjtRQW9EZ0Isa0JBQWtCLEVBQUE7RUFwRGxDO1VBdURvQix5QkFBeUI7VUFDekIsZ0JBQWdCO1VBQ2hCLFlBQVk7VUFDWixhQUFhO1VBQ2Isa0JBQWtCO1VBQ2xCLHNCQUFzQjtVQUN0Qix5QkFBeUI7VUFDekIsZUFBZTtVQUNmLFdBQVc7VUFDWCxXQUFXO1VBQ1gsaUJBQWlCO1VBQ2pCLGdCQUFnQjtVQUNoQixpQ0FBaUMsRUFBQTtFQW5FckQ7UUF3RW9CLHdDQUF3QyxFQUFBO0VBeEU1RDtRQTJFb0Isd0RBQXdELEVBQUE7RUEzRTVFO1FBOEVvQixrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBO0VBOUU5QztRQWtGZ0IsU0FBUztRQUNULFVBQStIO1FBQy9ILFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixvREFBaUQsRUFBQTtFQXhGakU7VUE0RndCLDRCQUE0QjtVQUM1QixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLDJCQUEyQjtVQUMzQixlQUFlLEVBQUE7RUFoR3ZDO1lBa0c0Qiw2QkFBNkIsRUFBQTtFQWxHekQ7WUFxRzRCLGVBQWUsRUFBQTtFQXJHM0M7VUF5R3dCLHdEQUF3RCxFQUFBO0VBekdoRjtZQTJHNEIsMENBQXVDLEVBQUE7RUFTbkU7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUdZLGtCQUFrQixFQUFBO0VBSDlCO0lBTW9CLHVCQUF1QixFQUFBO0VBTjNDO0lBU29CLDJCQUEyQixFQUFBO0VBVC9DO0lBWW9CLGtCQUFrQixFQUFBO0VBWnRDO01BY3dCLGtCQUFrQjtNQUNsQix1QkFBdUIsRUFBQTtFQWYvQztJQW9Cd0IsY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQXRCeEM7SUEwQm9CLFdBQVcsRUFBQTtFQTFCL0I7SUE2Qm9CLGFBQWEsRUFBQTtFQVFqQztFRDNJSSxlQzhJOEI7RUQ3STlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VDNElmLGtCQUFrQixFQUFBO0VBTzlCO0VBQ0ksZ0JEbEtnQjtFQ21LaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFJZjtFQUdZLGFBQWEsRUFBQTtFQUh6QjtFQU1ZLGNBQWMsRUFBQTtFQU0xQjtFQUVRLGNBQWMsRUFBQTtFQUZ0QjtFQUtRLGFBQWEsRUFBQTtFQUtyQjtFQUNJLGdCRGhNZ0I7RUNpTWhCLGdCQUFnQjtFQUNoQixZRGxNZ0I7RUNtTWhCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7RUFOdkI7SUFRUSxPQUFNO0lBQ04sZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBVnhCO0lBYVEsYUFBYSxFQUFBO0VBQ2I7TUFkUjtRQWVZLGNBQWMsRUFBQSxFQUtyQjtFQXBCTDtNQWtCWSxlQUFlLEVBQUE7RUFPM0I7RUFFUSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFHekI7RUFFSSxnQkFBZ0IsRUFBQTtFQUZwQjtJQVFRLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQUNkO01BZlI7UUFnQlksVUFDSixFQUFBLEVBQ0g7RUFLTDtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7RUFOM0I7SUFRUSxVQUFVLEVBQUE7RUFDVjtNQVRSO1FBVVksV0FBVTtRQUNWLFlBQVcsRUFBQSxFQUVsQiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1sZWZ0L3BvcnRhbC1sZWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gaW1wb3J0cyBmb3IgYWxsIG1peGlucyArIGdsb2JhbCBwcm9qZWN0IHZhcmlhYmxlc1xyXG4vLyBAaW1wb3J0ICdfdHlwb2dyYXBoeSc7XHJcbi8vIEBpbXBvcnQgJ19idXR0b24nO1xyXG4vLyBAaW1wb3J0ICdfZ3JpZCc7XHJcblxyXG4vLyBTb21lIEJhc2ljIFZhcmlhYmxlXHJcbiR3aGl0ZSA6ICNmZmY7XHJcbiRlcnJvciA6ICNENDc0NzQ7XHJcbiR0b3AtYmFyLWhlaWdodDo2NXB4O1xyXG4kbGlzdC1ob3Zlci1iZy1jb2xvcjogI2YyZjRmODtcclxuJGxpc3QtYmctY29sb3I6ICNGOEY4Rjg7XHJcbiRsaXN0LXNlcHJhdG9yLWNvbG9yOnJnYmEoMTIwLCAxMzAsIDE0MCwgMC4xMyk7XHJcbiRsaWdodC1ibGFjazojMzMzO1xyXG4kZGFyay1ibGFjazojMzMzO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOnJnYmEoMzMsIDM3LCA0MSwgMC4xNSk7XHJcbiR0aGVtZUZvckFjY291bnRTZWN0aW9uOiMxZmEyZmY7XHJcblxyXG4vLyBUcnVuY2F0ZVxyXG5AbWl4aW4gdHJ1bmNhdGUoJHRydW5jYXRpb24tYm91bmRhcnkpIHtcclxuICAgIG1heC13aWR0aDogJHRydW5jYXRpb24tYm91bmRhcnk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4vLyBmb250IHNpemVcclxuJGZvbnQtZmFtaWx5LWxhdG86ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuLy8kZm9udC1mYW1pbHktcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuQG1peGluIGZvbnQoJHNpemU6IGZhbHNlLCAkd2VpZ2h0OiBmYWxzZSwgICRsaDogZmFsc2UpIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbGF0bzsgXHJcbiAgICBAaWYgJHNpemUgeyBmb250LXNpemU6ICRzaXplOyB9XHJcbiAgICBAaWYgJHdlaWdodCB7IGZvbnQtd2VpZ2h0OiAkd2VpZ2h0OyB9XHJcbiAgICBAaWYgJGxoIHsgbGluZS1oZWlnaHQ6ICRsaDsgfVxyXG59XHJcblxyXG4vLyBwc2V1ZG9cclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpe1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG4vLyBUbyBxdWlja2x5IGNlbnRyZSBhIGJsb2NrIGVsZW1lbnRcclxuQG1peGluIHB1c2gtLWF1dG8ge1xyXG4gICAgbWFyZ2luOiB7IFxyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGJvcmRlciByYWRpdXNcclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIH1cclxuXHJcbiAvLyBtYXJnaW5cclxuQG1peGluIG1hcmdpbigkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHttYXJnaW4tYm90dG9tOiAkYm90dG9tO31cclxuICAgIEBpZiAkcmlnaHQgICB7bWFyZ2luLXJpZ2h0OiAkcmlnaHQ7fVxyXG4gICAgQGlmICRsZWZ0ICAgICB7bWFyZ2luLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHttYXJnaW4tdG9wOiAkdG9wO31cclxuIH1cclxuXHJcbiAvLyBwYWRkaW5nXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3A6IGZhbHNlLCAkcmlnaHQ6IGZhbHNlLCAkYm90dG9tOiBmYWxzZSwgICRsZWZ0OiBmYWxzZSkge1xyXG4gICAgQGlmICRib3R0b20ge3BhZGRpbmctYm90dG9tOiAkYm90dG9tO31cclxuICAgIEBpZiAkcmlnaHQgICB7cGFkZGluZy1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge3BhZGRpbmctbGVmdDogJGxlZnQ7fVxyXG4gICAgQGlmICR0b3AgICAgICAge3BhZGRpbmctdG9wOiAkdG9wO31cclxuIH1cclxuXHJcbiAvLyBUcnVuY2F0ZVxyXG5AbWl4aW4gcGFzc3dvcmQtbWctaW5kaWNhdG9yKCR3aWR0aDogZmFsc2UsICRjb2xvcjogZmFsc2UpIHtcclxuICAgIEBpZiAkd2lkdGgge3dpZHRoOiAkd2lkdGg7fVxyXG4gICAgQGlmICRjb2xvciB7YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO31cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyczsgLyogRm9yIFNhZmFyaSAzLjEgdG8gNi4wICovXHJcbiAgICB0cmFuc2l0aW9uOiAycztcclxufVxyXG5cclxuLy8gQWxpZ24gVmVydGljYWxseVxyXG4ub3B0aV90YWJsZS12LW1pZGRsZXtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAub3B0aV90YWJsZS1jZWxsLXYtbWlkZGxle1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4ub3B0aV92ZXJ0aWNhbC1hbGlnbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyBMaW5lIFNlcHJhdG9yXHJcbi5vcHRpX3NlcHJhdG9ye1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3Qtc2VwcmF0b3ItY29sb3I7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vLyBIaWRlIGVsZW1lbnQgSW4gRGVza3RvcCBBbmQgSXBhZFxyXG4ub3B0aV9oaWRlLWluLWRlc2t0b3AtaXBhZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL2Nzcy9fYmFzZSc7XHJcbi8vIDEuIENzcyBTdGFydCBSZWxhdGVkIHRvIGxlZnQgcGFuZWwgbWVudSBsaXN0aW5nXHJcbi8vIDIuIENTUyBTdGFydCAgUmVsYXRlZCBUbyBMb2dvXHJcbi8vIDEuIENzcyBTdGFydCBSZWxhdGVkIHRvIGxlZnQgcGFuZWwgbWVudSBsaXN0aW5nIC8vXHJcbi5vcHRpX2xlZnQtbmF2LXVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtYmctY29sb3I7XHJcbiAgICA+IGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1iZy1jb2xvcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3Qtc2VwcmF0b3ItY29sb3I7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmstYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGltZ3tcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgc3ZnLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5kcm9wZG93biB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICYgPiBhLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wdGlQcm9FcnBcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYub3BlbntcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID4gYXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rZW5kby1saWdodC1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYgPiBhLmRyb3Bkb3duLXRvZ2dsZTphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgPiAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgICAgICAgJiA+IGxpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmID4gYXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rZW5kby1saWdodC1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSwgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpX2xlZnQtbmF2aWdhdGlvbj51bCBsaSBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jb3B0aV9MZWZ0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemUge1xyXG4gICAgLm9wdGlfbGVmdC1uYXZpZ2F0aW9uIHtcclxuICAgICAgICA+dWwge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYgPiB1bC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAmID4gbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJZiBsZWZ0IFNpZGViYXIgaXMgTWluaW1pemVcclxuLm9wdGlfc2lkZWJhci1taW5pbWl6ZSB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cnVuY2F0ZSg4MHB4KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gRW5kIENzcyBSZWxhdGVkIHRvIGxlZnQgcGFuZWwgbWVudSBsaXN0aW5nIC8vICAgICAgICBcclxuLy8gMi4gQ1NTIFN0YXJ0ICBSZWxhdGVkIFRvIExvZ28gLy9cclxuLm9wdGlfbG9nby5vcHRpX3ZlcnRpY2FsLWFsaWduIHtcclxuICAgIG1heC1oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4vLyBpZiBsZWZ0IHBhbmVsIGNsb3NlXHJcbi5vcHRpX3NpZGViYXItbWluaW1pemUge1xyXG4gICAgLm9wdGlfbG9nbyB7XHJcbiAgICAgICAgLm9wdGlfbGFyZ2UtbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpX3NtYWxsLWxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGlmIGxlZnQgcGFuZWwgb3BlblxyXG4ub3B0aV9sb2dvIHtcclxuICAgIC5vcHRpX2xhcmdlLWxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm9wdGlfc21hbGwtbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3NzIFJlbGF0ZWQgVG8gRGVza3RvcCBhbmQgSXBhZCBMb2dvXHJcbi5vcHRpX2RldmljZS1sb2dvLW91dGVyIHtcclxuICAgIG1heC1oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6ICR0b3AtYmFyLWhlaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5vcHRpX2xvZ28ub3B0aV9kZXZpY2UtbG9nb3tcclxuICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhckNvbGxhcHNlLWFsdHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDc5cHgpe1xyXG4gICAgICAgIC8vaGVpZ2h0OiAkdG9wLWJhci1oZWlnaHQgLSAxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5vcHRpX3NpZGViYXItbWluaW1pemV7XHJcbiAgICAmIC5vcHRpX2xvZ28ub3B0aV9kZXZpY2UtbG9nb3tcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuLm9wdGlfZGV2aWNlLWxvZ28ge1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7ICAgXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDc5cHgpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENTUyBFbmQgIFJlbGF0ZWQgVG8gTG9nbyAvLyAgICAgICBcclxuLy8gcG93ZXJlZCBieSBsb2dvXHJcbiNvcHRpX0xlZnRQYW5lbEZvb3RlckxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ3OXB4KXtcclxuICAgICAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/portal-home/portal-left/portal-left.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portal-home/portal-left/portal-left.component.ts ***!
  \******************************************************************/
/*! exports provided: PortalLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalLeftComponent", function() { return PortalLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/sidebar/current-sidebar-info */ "./src/app/models/sidebar/current-sidebar-info.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var _const_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../const/common-constants */ "./src/app/const/common-constants.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var PortalLeftComponent = /** @class */ (function () {
    function PortalLeftComponent(commonService, router, menuService, translate) {
        var _this = this;
        this.commonService = commonService;
        this.router = router;
        this.menuService = menuService;
        this.translate = translate;
        this.selectedThemeColor = 'opticonstants.DEFAULTTHEMECOLOR';
        router.events.subscribe(function (val) {
            // get current url with last word
            var partsOfUrl = _this.router.url.split('/');
            _this.selectedItem = partsOfUrl[partsOfUrl.length - 1];
            setTimeout(function () {
                if (typeof (document.getElementById('opti_RightPanelID')) != 'undefined' && document.getElementById('opti_RightPanelID') != null) {
                    document.getElementById('opti_RightPanelID').classList.remove('opti_menusidebar-mobile-open');
                    document.getElementById('opti_LeftPanelID').classList.remove('opti_menusidebar-mobile-open');
                }
            }, 1000);
        });
    }
    PortalLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get current url with last word
        var partsOfUrl = this.router.url.split('/');
        this.selectedItem = partsOfUrl[partsOfUrl.length - 1];
        // get selected theme color
        this.commonService.themeCurrentData.subscribe(function (data) {
            _this.selectedThemeColor = data;
        });
        this.getAllMenus();
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__["UIHelper"].manageNavigationPanel(document.getElementById('sidebarCollapse-alt'));
    };
    PortalLeftComponent.prototype.getAllMenus = function () {
        var _this = this;
        this.menuService.getAllMenus().subscribe(function (data) {
            if (data != null)
                _this.displayMenuOptions(data.Modules);
        }, function (error) {
            alert(_this.translate.instant("ReloadPageMsg"));
        });
    };
    PortalLeftComponent.prototype.displayMenuOptions = function (menus) {
        menus.forEach(function (element) {
            document.getElementById(element.id);
        });
    };
    /**
     *
     * @param event
     * @param module
     */
    PortalLeftComponent.prototype.listClick = function (event, module) {
        this.selectedItem = module;
        this.closeRightSidebar();
        this.router.navigate(['home/' + module]);
    };
    /**
     *
     */
    PortalLeftComponent.prototype.closeRightSidebar = function () {
        var currentSidebarInfo = new _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_4__["CurrentSidebarInfo"]();
        currentSidebarInfo.SideBarStatus = false;
        this.commonService.setCurrentSideBar(currentSidebarInfo);
    };
    PortalLeftComponent.prototype.binClick = function () {
        localStorage.setItem("towhseId", localStorage.getItem("whseId"));
    };
    PortalLeftComponent.prototype.onInboundClick = function () {
        this.clearInboundData();
    };
    PortalLeftComponent.prototype.clearInboundData = function () {
        localStorage.setItem("GRPOReceieveData", "");
        localStorage.setItem("Line", "0");
        localStorage.setItem("addToGRPOPONumbers", "");
        localStorage.setItem("AddToGRPO", "");
        localStorage.setItem("VendCode", "");
        localStorage.setItem("VendName", "");
        localStorage.setItem("selectedPO", "");
        localStorage.setItem("PONumber", "");
    };
    PortalLeftComponent.prototype.onOutboundClick = function () {
        localStorage.setItem(_const_common_constants__WEBPACK_IMPORTED_MODULE_7__["CommonConstants"].OutboundData, null);
        localStorage.setItem("ComingFrom", "");
    };
    PortalLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-left',
            template: __webpack_require__(/*! ./portal-left.component.html */ "./src/app/portal-home/portal-left/portal-left.component.html"),
            styles: [__webpack_require__(/*! ./portal-left.component.scss */ "./src/app/portal-home/portal-left/portal-left.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], PortalLeftComponent);
    return PortalLeftComponent;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-right/portal-right.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/portal-home/portal-right/portal-right.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #optirightfixedsection class=\"opti_right-fix-section\" id=\"opti_optirightfixedsectionID\">\r\n    <svg-icon src=\"assets/images/common/back-opposite.svg\" (click)=\"closeRightSidebar()\" [svgStyle]=\"{ 'width.px':20, 'height.px':20 }\" class=\"float-right opti_vertical-align opti_close-icon-right-section\"></svg-icon>    \r\n    \r\n    <!-- <app-purchase-inquiry *ngIf=\"currentSidebarInfo.ModuleName==1\" [currentSidebarInfo]=\"currentSidebarInfo\"> </app-purchase-inquiry>\r\n    \r\n    <app-sales-quotations-detail *ngIf=\"currentSidebarInfo.ModuleName==2\" [currentSidebarInfo]=\"currentSidebarInfo\"> </app-sales-quotations-detail> -->\r\n\r\n    <!-- <app-sales-order-detail *ngIf=\"currentSidebarInfo.ModuleName==4\" [currentSidebarInfo]=\"currentSidebarInfo\"></app-sales-order-detail>  -->\r\n</div>        \r\n"

/***/ }),

/***/ "./src/app/portal-home/portal-right/portal-right.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/portal-home/portal-right/portal-right.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1yaWdodC9wb3J0YWwtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portal-home/portal-right/portal-right.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/portal-home/portal-right/portal-right.component.ts ***!
  \********************************************************************/
/*! exports provided: PortalRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalRightComponent", function() { return PortalRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/sidebar/current-sidebar-info */ "./src/app/models/sidebar/current-sidebar-info.ts");




var PortalRightComponent = /** @class */ (function () {
    // Event emitter variable.
    //  @Output() messageEvent = new EventEmitter<boolean>();
    function PortalRightComponent(commonService) {
        this.commonService = commonService;
    }
    PortalRightComponent.prototype.ngOnInit = function () {
    };
    /**
    *
    * @param status close right content section, will pass false
    */
    PortalRightComponent.prototype.closeRightSidebar = function () {
        var currentSidebarInfo = new _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_3__["CurrentSidebarInfo"]();
        currentSidebarInfo.SideBarStatus = false;
        this.commonService.setCurrentSideBar(currentSidebarInfo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_sidebar_current_sidebar_info__WEBPACK_IMPORTED_MODULE_3__["CurrentSidebarInfo"])
    ], PortalRightComponent.prototype, "currentSidebarInfo", void 0);
    PortalRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-right',
            template: __webpack_require__(/*! ./portal-right.component.html */ "./src/app/portal-home/portal-right/portal-right.component.html"),
            styles: [__webpack_require__(/*! ./portal-right.component.scss */ "./src/app/portal-home/portal-right/portal-right.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"]])
    ], PortalRightComponent);
    return PortalRightComponent;
}());



/***/ }),

/***/ "./src/app/portal-home/portal-top/portal-top.component.html":
/*!******************************************************************!*\
  !*** ./src/app/portal-home/portal-top/portal-top.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"opti_TopBarID\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- this logo only for mobile -->\r\n                <!-- <div class=\"opti_icon-spacing float-left opti_mobile-logo opti_vertical-align\"><img src=\"assets/images/logo/mobile-logo.png\" alt=\"Logo\" class=\"opti_small-logo opti_mouse-pointer\" /></div> -->\r\n                <!-- ebd this logo only for mobile -->\r\n\r\n                <div id=\"sidebarCollapse\" class=\"opti_vertical-align float-left\">\r\n                    <!-- hamburger and close icon -->\r\n                    <i class=\"opti-icon-left-arrow opti_desktop-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                    <i class=\"opti-icon-hammenu opti_desktop-menu-icon opti_mouse-pointer opti_hamburger\"></i>\r\n                    <i class=\"opti-icon-left-arrow opti_mobile-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                    <i class=\"opti-icon-hammenu opti_mobile-menu-icon opti_mouse-pointer opti_hamburger\"></i>\r\n                </div>\r\n\r\n                <!-- Top Right Section -->\r\n                <div class=\"opti_topbar-rightpanel float-right\">\r\n                    <div class=\"opti_vertical-align\">\r\n                        <ul class=\"d-inline-flex\">\r\n                            <!-- <li class=\"opti_icon-spacing\"> -->\r\n\r\n                                <!-- search for desktop and ipad -->\r\n                                <!-- <div class=\"opti_search-form opti_hide-in-mobile\">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                                    <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\"><img src=\"assets/images/common/search-black.svg\" class=\"\" alt=\"Search\" width=\"15\" /></span>\r\n                                </div> -->\r\n                                <!-- end search for desktop and ipad -->\r\n\r\n                                <!-- search for mobile -->\r\n                                <!-- <div class=\"opti_search-form opti_hide-in-desktop-ipad \">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                                    <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\" (click)=\"openVerticallyCentered(mobileSearch)\"><img src=\"assets/images/common/search-white.svg\" class=\"\" alt=\"Search\" width=\"20\" height=\"30\" /></span>\r\n                                </div> -->\r\n                                <!-- end search for mobile -->\r\n                                \r\n                            <!-- </li> -->\r\n\r\n                            <!-- <li class=\"opti_icon-spacing\">\r\n                            <img src=\"assets/images/common/settings.svg\" (click)=\"openCloseRightPanel();\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                        </li> -->\r\n\r\n                            <!-- if notifications not  avialble -->\r\n                            <!-- <li class=\"opti_icon-spacing\">\r\n                            <img src=\"assets/images/common/notifications-button.svg\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                        </li> -->\r\n\r\n                            <!-- if notifications avialble -->\r\n                            <!-- <li class=\"opti_icon-spacing position-relative\" dropdown>\r\n                                <span dropdownToggle class=\"dropdown-toggle opti_mouse-pointer\">\r\n                                <img src=\"assets/images/common/notifications-button.svg\" class=\"float-left opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                                <span class=\"opt_topbar-count\">99+</span>\r\n                                </span>\r\n                                <div class=\"dropdown-menu opti_notification-drop-down\" *dropdownMenu [perfectScrollbar]=\"\">\r\n                                    <ul class=\"opti_liststyle-one-ul\">\r\n                                        <li class=\"opti_mouse-pointer opti_liststyle-one-li\" *ngFor='let i of [1,2,3,4,5,6]'>\r\n                                            <div class=\"opti_liststyle-one-image\">\r\n                                                <img src=\"assets/images/common/user-avatar.png\" width=\"30\" height=\"30\" alt=\"img\" />\r\n                                            </div>\r\n                                            <div class=\"opti_liststyle-one-text\">\r\n                                                <h5>Peter</h5>\r\n                                                <p>purchase request has been created by samsung</p>\r\n                                                <p class=\"opti_date\">May 30, 2018 8:02 AM</p>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li> -->\r\n\r\n                            <li class=\"opti_icon-spacing opti_user-profile position-relative\" dropdown>\r\n                                <a dropdownToggle class=\"dropdown-toggle\">\r\n                                    <img src=\"assets/images/common/user-avatar.png\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"User Profile\" width=\"30\" height=\"30\" />\r\n                                    <span>{{DBName}}</span>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu opti_user-profile-drop-down\" *dropdownMenu>\r\n                                    <!-- <li>\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"opti_profile-box\">\r\n                                                        <div class=\"opti_profile-box-img\">\r\n                                                            <img src=\"assets/images/common/user-avatar.png\" alt=\"user image\" width=\"80\"> \r\n                                                        </div>\r\n                                                        <div class=\"opti_profile-box-text opti_vertical-align\">\r\n                                                            <h5>{{loggedInUserName}}</h5>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li> -->\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-setting cursor-normal\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12 pl-2\">\r\n                                                    <img src=\"assets/images/common/user-avatar.png\" class=\"opti_mouse-pointer opti_theme-setting mr-1\" alt=\"User Profile\" width=\"30\" height=\"30\" /> {{loggedInUserName}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <!-- <li class=\"opti_mouse-pointer opti_profile-box-setting\" (click)=\"openCloseRightPanel();\"> -->\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-setting\" (click)=\"listClick($event, 'changeWarehouse')\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/settings-black.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'ChangeWarehouse'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-aboutus\" (click)=\"openVerticallyCentered(about)\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/about-us.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'About'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-logout\" (click)=\"signOut()\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/logout.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'Logout'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"opti_icon-spacing opti_warehouse_count\">\r\n                                <i class=\"opti-icon-home mr-2\"></i><span>{{loggedinWarehouse}}</span>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <!-- <div class=\"opti_vertical-align opt_top-bar-height opti_icon-spacing float-left\">\r\n                    <img src=\"assets/images/common/settings.svg\" (click)=\"themeSetting();\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Theme setting -->\r\n<!-- <section id=\"opti_ThemeSettingID\" [ngClass]=\"{'opt_show': openThemeSetting==true}\">\r\n    <app-theme-manager (messageEvent)=receiverMessage($event)></app-theme-manager>\r\n</section> -->\r\n\r\n<!-- About us modal start -->\r\n<ng-template #about let-modal>\r\n    <!-- <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div> -->\r\n\r\n    <div class=\"modal-body text-center\" style=\"padding: 20px;\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <img src=\"assets/images/common/close-black.svg\" width=\"15\" />\r\n        </button>\r\n        <p></p>\r\n        <p>\r\n            <img src=\"assets/images/logo/large-logo-old.png\" alt=\"Large Logo\" class=\"opti_large-logo\" />\r\n        </p>\r\n        <p>{{appVersion}}</p>\r\n        <p>{{'Dashboard_CopyWrt_Msg'|translate}}</p>\r\n        <p><a href=\"http://www.optiproerp.com\">www.optiproerp.com</a></p>\r\n    </div>\r\n\r\n    <!-- <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div> -->\r\n</ng-template>\r\n<!-- About us modal end -->\r\n\r\n<!-- Mobile search start -->\r\n<ng-template #mobileSearch let-modal>\r\n    <div class=\"modal-body opti_mobile-search-modal\">\r\n        <div class=\"opti_search-form\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\" (click)=\"modal.dismiss('Cross click')\"><img src=\"assets/images/common/search-black.svg\" class=\"\" alt=\"Search\" width=\"15\" /></span>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<!-- mobile search end -->\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/portal-home/portal-top/portal-top.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portal-home/portal-top/portal-top.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  .opti_search-form {\n  background-color: #fff;\n  height: 30px;\n  border-radius: 5px; }\n  .opti_search-form input {\n    width: calc(100% - 40px);\n    float: left;\n    background-color: transparent; }\n  .opti_search-form input.form-control {\n      border: none; }\n  #opti_TopBarID .opti_top-search-icon.opti_vertical-align {\n  height: 30px;\n  padding: 0 10px; }\n  #sidebarCollapse.opti_vertical-align {\n  height: 65px; }\n  #sidebarCollapse .opti_backarrow {\n  display: block; }\n  #sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\n  #sidebarCollapse .opti_hamburger {\n  display: none; }\n  #opti_TopBarID .opti_vertical-align {\n  height: 45px; }\n  #opti_TopBarID .opti_vertical-align > i {\n    font-size: 24px;\n    color: #fff; }\n  @media screen and (max-width: 767px) {\n    #opti_TopBarID .opti_vertical-align {\n      height: 45px; } }\n  #opti_TopBarID .opti_topbar-rightpanel ul li {\n  list-style: none; }\n  #opti_TopBarID .opti_user-profile > a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: center; }\n  #opti_TopBarID .opti_user-profile > a img {\n    border-radius: 50%; }\n  #opti_TopBarID .opti_user-profile > a span {\n    color: #fff;\n    margin-left: 7px;\n    font-size: 14px;\n    font-weight: 700; }\n  #opti_TopBarID .opti_user-profile .dropdown-toggle::after {\n  display: none; }\n  #opti_TopBarID .opti_user-profile-drop-down {\n  right: 0 !important;\n  left: auto !important;\n  top: 36px !important;\n  width: 270px;\n  padding-bottom: 0; }\n  #opti_TopBarID .opti_user-profile-drop-down img {\n    border: 0; }\n  @media screen and (max-width: 767px) {\n    #opti_TopBarID .opti_user-profile-drop-down {\n      top: 36px !important; } }\n  #opti_TopBarID .opti_profile-box {\n  height: 100%; }\n  #opti_TopBarID .opti_profile-box .opti_profile-box-img {\n    float: left; }\n  #opti_TopBarID .opti_profile-box .opti_profile-box-text {\n    float: left;\n    margin-left: 15px;\n    width: 140px;\n    max-height: 80px;\n    height: 100%; }\n  #opti_TopBarID .opti_profile-box .opti_profile-box-text h5,\n    #opti_TopBarID .opti_profile-box .opti_profile-box-text p {\n      margin-bottom: 0; }\n  #opti_TopBarID .opti_profile-box .opti_profile-para .btn {\n    border-radius: 60px;\n    margin-top: 3px;\n    margin-bottom: 4px; }\n  #opti_TopBarID .opti_profile-box-logout svg-icon,\n#opti_TopBarID .opti_profile-box-help svg-icon,\n#opti_TopBarID .opti_profile-box-setting svg-icon,\n#opti_TopBarID .opti_profile-box-aboutus svg-icon {\n  margin-right: 10px; }\n  #opti_TopBarID .opti_user-profile-drop-down li {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  #opti_TopBarID .opti_user-profile-drop-down li.opti_seprator {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n  #opti_TopBarID .opt_topbar-count {\n  background: orange;\n  color: white;\n  font-size: 10px;\n  border-radius: 50%;\n  padding: 5px 3px;\n  position: relative;\n  top: -9px;\n  right: 3px;\n  width: 23px;\n  height: 23px;\n  text-align: center;\n  cursor: pointer; }\n  #opti_ThemeSettingID {\n  position: fixed;\n  right: 0;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  height: calc(100% - 45px);\n  z-index: 999;\n  width: 200px;\n  display: none;\n  border-left: 2px solid #c7c7c7; }\n  #opti_ThemeSettingID.opt_show {\n  display: block; }\n  .opti_mobile-logo {\n  display: none; }\n  .dropdown-toggle::after {\n  display: none; }\n  .opti_notification-drop-down {\n  left: auto !important;\n  right: 13px !important;\n  top: 44px !important;\n  width: 357px;\n  height: auto;\n  overflow-y: auto;\n  max-height: 400px; }\n  .dropdown-menu.opti_notification-drop-down.show {\n  padding: 0; }\n  .opti_warehouse_count {\n  color: #fff;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  font-weight: 700; }\n  .opti_warehouse_count span {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700; }\n  .opti_warehouse_count i {\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLXRvcC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2Jhc2Uuc2NzcyIsInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLXRvcC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXHBvcnRhbC1ob21lXFxwb3J0YWwtdG9wXFxwb3J0YWwtdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGQTtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtFQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0VBSWQ7RUFDSSxhQUFhLEVBQUE7RUNuSGhCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUh0QjtJQU1RLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsNkJBQTZCLEVBQUE7RUFSckM7TUFVWSxZQUFZLEVBQUE7RUFLeEI7RUFDSSxZQUFZO0VBQ1osZUFBZSxFQUFBO0VBR25CO0VBQ0ksWURYZSxFQUFBO0VDZW5CO0VBRVEsY0FBYyxFQUFBO0VBRnRCO0VBS1EsYUFBYSxFQUFBO0VBTHJCO0VBUVEsYUFBYSxFQUFBO0VBS3JCO0VBRU8sWUFBOEIsRUFBQTtFQUZyQztJQUlZLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFFZjtJQVBSO01BUVcsWUFBOEIsRUFBQSxFQUVwQztFQVZMO0VBY2dCLGdCQUFnQixFQUFBO0VBZGhDO0VBb0JXLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBO0VBdkJoQztJQXlCWSxrQkFBa0IsRUFBQTtFQXpCOUI7SUE0QlcsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUEvQjNCO0VBbUNZLGFBQWEsRUFBQTtFQW5DekI7RUF1Q1EsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBM0N6QjtJQTZDWSxTQUFTLEVBQUE7RUFFYjtJQS9DUjtNQWdEVyxvQkFBbUIsRUFBQSxFQUV6QjtFQWxETDtFQW9EUSxZQUFZLEVBQUE7RUFwRHBCO0lBc0RZLFdBQVcsRUFBQTtFQXREdkI7SUF5RFksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBS1osZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQWpFeEI7O01BOERnQixnQkFBZ0IsRUFBQTtFQTlEaEM7SUFvRVksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQXRFOUI7Ozs7RUFnRlksa0JBQWtCLEVBQUE7RUFoRjlCO0VBb0ZRLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtFQXJGNUI7RUEyRlEsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBNUYzQjtFQWdHUSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUt2QjtFQUNJLGVBQWU7RUFDZixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7RUFHbEM7RUFDSSxjQUFjLEVBQUE7RUFJbEI7RUFDSSxhQUFhLEVBQUE7RUFJakI7RUFDSSxhQUFhLEVBQUE7RUFJakI7RUFDSSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUlyQjtFQUNJLFVBQVUsRUFBQTtFQUdkO0VBQ0csV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0VBRW5CO0VBQ0csV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUVuQjtFQUNHLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC10b3AvcG9ydGFsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIGltcG9ydHMgZm9yIGFsbCBtaXhpbnMgKyBnbG9iYWwgcHJvamVjdCB2YXJpYWJsZXNcclxuLy8gQGltcG9ydCAnX3R5cG9ncmFwaHknO1xyXG4vLyBAaW1wb3J0ICdfYnV0dG9uJztcclxuLy8gQGltcG9ydCAnX2dyaWQnO1xyXG5cclxuLy8gU29tZSBCYXNpYyBWYXJpYWJsZVxyXG4kd2hpdGUgOiAjZmZmO1xyXG4kZXJyb3IgOiAjRDQ3NDc0O1xyXG4kdG9wLWJhci1oZWlnaHQ6NjVweDtcclxuJGxpc3QtaG92ZXItYmctY29sb3I6ICNmMmY0Zjg7XHJcbiRsaXN0LWJnLWNvbG9yOiAjRjhGOEY4O1xyXG4kbGlzdC1zZXByYXRvci1jb2xvcjpyZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xyXG4kbGlnaHQtYmxhY2s6IzMzMztcclxuJGRhcmstYmxhY2s6IzMzMztcclxuJGlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDMzLCAzNywgNDEsIDAuMTUpO1xyXG4kdGhlbWVGb3JBY2NvdW50U2VjdGlvbjojMWZhMmZmO1xyXG5cclxuLy8gVHJ1bmNhdGVcclxuQG1peGluIHRydW5jYXRlKCR0cnVuY2F0aW9uLWJvdW5kYXJ5KSB7XHJcbiAgICBtYXgtd2lkdGg6ICR0cnVuY2F0aW9uLWJvdW5kYXJ5O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLy8gZm9udCBzaXplXHJcbiRmb250LWZhbWlseS1sYXRvOiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbi8vJGZvbnQtZmFtaWx5LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBmb250KCRzaXplOiBmYWxzZSwgJHdlaWdodDogZmFsc2UsICAkbGg6IGZhbHNlKSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxhdG87IFxyXG4gICAgQGlmICRzaXplIHsgZm9udC1zaXplOiAkc2l6ZTsgfVxyXG4gICAgQGlmICR3ZWlnaHQgeyBmb250LXdlaWdodDogJHdlaWdodDsgfVxyXG4gICAgQGlmICRsaCB7IGxpbmUtaGVpZ2h0OiAkbGg7IH1cclxufVxyXG5cclxuLy8gcHNldWRvXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKXtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuLy8gVG8gcXVpY2tseSBjZW50cmUgYSBibG9jayBlbGVtZW50XHJcbkBtaXhpbiBwdXNoLS1hdXRvIHtcclxuICAgIG1hcmdpbjogeyBcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBib3JkZXIgcmFkaXVzXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICB9XHJcblxyXG4gLy8gbWFyZ2luXHJcbkBtaXhpbiBtYXJnaW4oJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7bWFyZ2luLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge21hcmdpbi1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge21hcmdpbi1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7bWFyZ2luLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gcGFkZGluZ1xyXG5AbWl4aW4gcGFkZGluZygkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHtwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge3BhZGRpbmctcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHtwYWRkaW5nLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHtwYWRkaW5nLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gVHJ1bmNhdGVcclxuQG1peGluIHBhc3N3b3JkLW1nLWluZGljYXRvcigkd2lkdGg6IGZhbHNlLCAkY29sb3I6IGZhbHNlKSB7XHJcbiAgICBAaWYgJHdpZHRoIHt3aWR0aDogJHdpZHRoO31cclxuICAgIEBpZiAkY29sb3Ige2JhY2tncm91bmQtY29sb3I6ICRjb2xvcjt9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMnM7IC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xyXG4gICAgdHJhbnNpdGlvbjogMnM7XHJcbn1cclxuXHJcbi8vIEFsaWduIFZlcnRpY2FsbHlcclxuLm9wdGlfdGFibGUtdi1taWRkbGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLm9wdGlfdGFibGUtY2VsbC12LW1pZGRsZXtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLm9wdGlfdmVydGljYWwtYWxpZ257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gTGluZSBTZXByYXRvclxyXG4ub3B0aV9zZXByYXRvcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LXNlcHJhdG9yLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gSGlkZSBlbGVtZW50IEluIERlc2t0b3AgQW5kIElwYWRcclxuLm9wdGlfaGlkZS1pbi1kZXNrdG9wLWlwYWR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIiBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvY3NzL19iYXNlJztcclxuIC5vcHRpX3NlYXJjaC1mb3JtIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGhlaWdodDogMzBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgaW5wdXQge1xyXG4gICAgICAgICAvLyB3aWR0aDogMTcxcHg7XHJcbiAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAmLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9XHJcbiBcclxuICNvcHRpX1RvcEJhcklEIC5vcHRpX3RvcC1zZWFyY2gtaWNvbi5vcHRpX3ZlcnRpY2FsLWFsaWduIHtcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gfVxyXG4gXHJcbiAjc2lkZWJhckNvbGxhcHNlLm9wdGlfdmVydGljYWwtYWxpZ24ge1xyXG4gICAgIGhlaWdodDogJHRvcC1iYXItaGVpZ2h0O1xyXG4gfVxyXG4gXHJcbiAvLyBpZiBsZWZ0IHBhbmVsIG9wZW5cclxuICNzaWRlYmFyQ29sbGFwc2Uge1xyXG4gICAgIC5vcHRpX2JhY2thcnJvdyB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgICAub3B0aV9tb2JpbGUtbWVudS1pY29uIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB9XHJcbiAgICAgLm9wdGlfaGFtYnVyZ2VyIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC8vIGVuZCBsZWZ0IHBhbmVsIG9wZW5cclxuICNvcHRpX1RvcEJhcklEIHtcclxuICAgICAub3B0aV92ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAkdG9wLWJhci1oZWlnaHQgLSAyMHB4O1xyXG4gICAgICAgICAmPmkge1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHRvcC1iYXItaGVpZ2h0IC0gMjBweDtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAub3B0aV90b3BiYXItcmlnaHRwYW5lbCB7XHJcbiAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC5vcHRpX3VzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgJiA+IGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC5vcHRpX3VzZXItcHJvZmlsZS1kcm9wLWRvd24ge1xyXG4gICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIHRvcDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgICAgICB0b3A6MzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLm9wdGlfcHJvZmlsZS1ib3gge1xyXG4gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgIC5vcHRpX3Byb2ZpbGUtYm94LWltZyB7XHJcbiAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAub3B0aV9wcm9maWxlLWJveC10ZXh0IHtcclxuICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5vcHRpX3Byb2ZpbGUtcGFyYSAuYnRuIHtcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLm9wdGlfcHJvZmlsZS1ib3gtbG9nb3V0LFxyXG4gICAgIC5vcHRpX3Byb2ZpbGUtYm94LWhlbHAsXHJcbiAgICAgLm9wdGlfcHJvZmlsZS1ib3gtc2V0dGluZyxcclxuICAgICAub3B0aV9wcm9maWxlLWJveC1hYm91dHVzIHtcclxuICAgICAgICAgc3ZnLWljb24ge1xyXG4gICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgLy8gdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLm9wdGlfdXNlci1wcm9maWxlLWRyb3AtZG93biBsaSB7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgLy8gJi5vcHRpX21vdXNlLXBvaW50ZXI6aG92ZXJ7XHJcbiAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ob3Zlci1iZy1jb2xvcjtcclxuICAgICAgICAgLy8gfVxyXG4gICAgIH1cclxuICAgICAub3B0aV91c2VyLXByb2ZpbGUtZHJvcC1kb3duIGxpLm9wdGlfc2VwcmF0b3Ige1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgIH1cclxuICAgICAub3B0X3RvcGJhci1jb3VudCB7XHJcbiAgICAgICAgIC8vIE5vdGlmaWNhdGlvblxyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtOXB4O1xyXG4gICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC8vIFJpZ2h0IFBhbmVsXHJcbiAjb3B0aV9UaGVtZVNldHRpbmdJRCB7XHJcbiAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgIHJpZ2h0OiAwO1xyXG4gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XHJcbiAgICAgei1pbmRleDogOTk5O1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcclxuIH1cclxuIFxyXG4gI29wdGlfVGhlbWVTZXR0aW5nSUQub3B0X3Nob3cge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG4gXHJcbiAvLyBNb2JpbGUgbG9nb1xyXG4gLm9wdGlfbW9iaWxlLWxvZ28ge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiBcclxuIC8vIGhpZGUgZG93biBhcnJvdyBmcm9tIG1vYmlsZSBzZWFyY2hcclxuIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gXHJcbiAvLyBDc3MgUmVsYXRlZCB0byBOb3RpZmljYXRpb25cclxuIC5vcHRpX25vdGlmaWNhdGlvbi1kcm9wLWRvd24ge1xyXG4gICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgIHRvcDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgIHdpZHRoOiAzNTdweDtcclxuICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICBcclxuIH1cclxuIFxyXG4gLmRyb3Bkb3duLW1lbnUub3B0aV9ub3RpZmljYXRpb24tZHJvcC1kb3duLnNob3cge1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiB9XHJcblxyXG4gLm9wdGlfd2FyZWhvdXNlX2NvdW50IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gfVxyXG4gLm9wdGlfd2FyZWhvdXNlX2NvdW50IHNwYW57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiB9XHJcbiAub3B0aV93YXJlaG91c2VfY291bnQgaXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/portal-home/portal-top/portal-top.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portal-home/portal-top/portal-top.component.ts ***!
  \****************************************************************/
/*! exports provided: PortalTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalTopComponent", function() { return PortalTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var PortalTopComponent = /** @class */ (function () {
    function PortalTopComponent(modalService, commonService, toastr, router, translate) {
        this.modalService = modalService;
        this.commonService = commonService;
        this.toastr = toastr;
        this.router = router;
        this.translate = translate;
        this.openThemeSetting = false;
        this.selectedThemeColor = _constants__WEBPACK_IMPORTED_MODULE_5__["opticonstants"].DEFAULTTHEMECOLOR;
        this.showConfirmDialog = false;
        this.appVersion = "Version : 1.2.10";
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    PortalTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].manageThemeCssFile();
        this.loggedInUserName = localStorage.getItem("UserId");
        this.DBName = localStorage.getItem("CompID");
        this.loggedinWarehouse = localStorage.getItem("whseId");
        this.updatetopBarSubs = this.commonService.refreshTopbarSubscriber.subscribe(function (data) {
            _this.loggedinWarehouse = localStorage.getItem("whseId");
        });
        // this.appVersion = "Version: " +   this.commonservice.config_params.AppVersion;
        // this.appVersion = this.translate.instant("Dashboard_AppVersion") +   this.commonservice.config_params.AppVersion;
    };
    // open and close theme setting side panel
    PortalTopComponent.prototype.openCloseRightPanel = function () {
        var _this = this;
        this.openThemeSetting = !this.openThemeSetting;
        // get theme color
        this.commonService.themeCurrentData.subscribe(function (data) {
            _this.selectedThemeColor = data;
        });
    };
    // evenet emitted by client(right) to parenet(top).
    PortalTopComponent.prototype.receiverMessage = function ($evenet) {
        this.openThemeSetting = $evenet;
    };
    PortalTopComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    /**
     *
     * @param event
     * @param module
     */
    PortalTopComponent.prototype.listClick = function (event, module) {
        this.selectedItem = module;
        this.router.navigate(['home/' + module]);
    };
    PortalTopComponent.prototype.showDialog = function (dialogFor, yesbtn, nobtn, msg) {
        this.dialogFor = dialogFor;
        this.yesButtonText = yesbtn;
        this.noButtonText = nobtn;
        this.showConfirmDialog = true;
        this.dialogMsg = msg;
    };
    PortalTopComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("Logout"):
                    this.commonService.RemoveLicenseAndSignout(this.toastr, this.router, this.translate.instant("Dashboard_LogoutSuccess"));
                    break;
            }
        }
        else {
            if ($event.Status == "no") {
                switch ($event.From) {
                    case ("Logout"):
                        break;
                }
            }
        }
    };
    PortalTopComponent.prototype.signOut = function () {
        this.showDialog("Logout", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("Dashboard_Logout_Msg"));
    };
    PortalTopComponent.prototype.ngOnDestroy = function () {
        if (this.updatetopBarSubs != undefined)
            this.updatetopBarSubs.unsubscribe();
    };
    PortalTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-top',
            template: __webpack_require__(/*! ./portal-top.component.html */ "./src/app/portal-home/portal-top/portal-top.component.html"),
            styles: [__webpack_require__(/*! ./portal-top.component.scss */ "./src/app/portal-home/portal-top/portal-top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["Commonservice"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], PortalTopComponent);
    return PortalTopComponent;
}());



/***/ }),

/***/ "./src/app/services/inventory-transfer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/inventory-transfer.service.ts ***!
  \********************************************************/
/*! exports provided: InventoryTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTransferService", function() { return InventoryTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InventoryTransferService = /** @class */ (function () {
    function InventoryTransferService(httpclient) {
        this.httpclient = httpclient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    }
    InventoryTransferService.prototype.getToWHS = function () {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: localStorage.getItem("whseId"), UserId: localStorage.getItem("UserId"), GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetToWHS", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getItemCodeList = function () {
        var jObject = { ITEMCODE: '', ITEMNAME: '', WHSCODE: localStorage.getItem("whseId"), CompanyDBName: localStorage.getItem("CompID") };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsIssue/AllItemLookup", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getBinListWithoutBinForNonTrack = function (ItemCode, lotNo, BINNO) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: ItemCode, LOTNO: lotNo, WHSCODE: localStorage.getItem("whseId"), BINNO: BINNO, SUPPORTTRX: '67' }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsIssue/GetLotWithoutBinNItemCode", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getLotWithoutBinItemCode = function (ItemCode, lotNo, BINNO) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: ItemCode, LOTNO: lotNo, WHSCODE: localStorage.getItem("whseId"), BINNO: BINNO, SUPPORTTRX: '67', LOTISSUEMETHOD: '' }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsIssue/GetLotWithoutBinNItemCode", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.submitBinTransfer = function (oWhsTransAddLot) {
        var jObject = { BinTransToken: JSON.stringify(oWhsTransAddLot) };
        return this.httpclient.post(this.config_params.service_url + "/api/BinTransfer/PutAway", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.isWHsExists = function (toWhs) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: toWhs }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsWhsExist", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getItemInfo = function (itemCode) {
        var jObject = { ITEMCODE: JSON.stringify([{ CompanyDbName: localStorage.getItem("CompID"), ITEMCODE: itemCode, WHSCODE: localStorage.getItem("whseId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsReceipt/GetItemInfo", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getLotInfo = function (FromBin, Item, Lot) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), BINNO: FromBin, ITEMCODE: Item, LOTNO: Lot, DOCNUM: '', }]) };
        if (Item == "" && FromBin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotWithoutBinNItemCode", jObject, this.httpOptions);
        }
        else if (Item != "" && FromBin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotBinForPallet", jObject, this.httpOptions);
        }
        else if (Item != "" && FromBin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotWithoutBinForPallet", jObject, this.httpOptions);
        }
        else if (Item == "" && FromBin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotBinWithoutItemCode", jObject, this.httpOptions);
        }
    };
    InventoryTransferService.prototype.getLotList = function (oFromWhs, FromBin, Item, Lot) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), WHSCODE: oFromWhs, BINNO: FromBin, ITEMCODE: Item, DOCNUM: '', SUPPORTEDTRX: 67 }]) };
        if (Item == "" && FromBin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListWithoutBinNItemCodeforWhsTransfer", jObject, this.httpOptions);
        }
        else if (Item != "" && FromBin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListWithoutBinForPalletforWhsTransfer", jObject, this.httpOptions);
        }
        else if (Item != "" && FromBin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListWithoutBinForPalletforWhsTransfer", jObject, this.httpOptions);
        }
        else if (Item == "" && FromBin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListBinWithoutItemCodeforWhsTransfer", jObject, this.httpOptions);
        }
    };
    InventoryTransferService.prototype.getFromBins = function (ItemTracking, FromBin, Item, Lot) {
        if (ItemTracking == "N") {
            var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: Item, LOTNO: Lot, WHSCODE: localStorage.getItem("whseId"), BINNO: FromBin, SUPPORTTRX: '67' }]) };
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetBinListWithoutBinForNonTrack", jObject, this.httpOptions);
        }
        else {
            var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: Item, LOTNO: Lot, WHSCODE: localStorage.getItem("whseId"), BINNO: FromBin, SUPPORTTRX: '67', LOTISSUEMETHOD: '' }]) };
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotWithoutBinWise", jObject, this.httpOptions);
        }
    };
    InventoryTransferService.prototype.isFromBinExists = function (ItemTracking, FromBin, Item, Lot) {
        if (ItemTracking == "N") {
            var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: Item, LOTNO: Lot, WHSCODE: localStorage.getItem("whseId"), BINNO: FromBin, SUPPORTTRX: '67' }]) };
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetBinForNonTrackItem", jObject, this.httpOptions);
        }
        else {
            var jObject1 = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), BinCode: FromBin, ItemCode: '', WhsCode: localStorage.getItem("whseId") }]) };
            return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsBinExist", jObject1, this.httpOptions);
        }
    };
    InventoryTransferService.prototype.isToBinExist = function (ToBin, oToWhs) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), BinCode: ToBin, ItemCode: '', WhsCode: oToWhs }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsBinExist", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getToBin = function (fromBin, oToWhs) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: oToWhs, FromBin: fromBin }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetToBIN", jObject, this.httpOptions);
    };
    InventoryTransferService.prototype.getDefaultBin = function (itemCode, oToWhs) {
        var jObject = { DEFAULTSYSTEMBIN: JSON.stringify([{ ITEMCODE: itemCode, WHSCODE: oToWhs, CompanyDBName: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/WhsTrans/GetDefaultBinFromWarehouse", jObject, this.httpOptions);
    };
    InventoryTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventoryTransferService);
    return InventoryTransferService;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MenuService = /** @class */ (function () {
    function MenuService(httpclient) {
        this.httpclient = httpclient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    }
    MenuService.prototype.getAllMenus = function () {
        var jObject = { CompanyDBId: localStorage.getItem("CompID"), UserId: localStorage.getItem("UserId"), };
        return this.httpclient.post(this.config_params.service_url + "/api/Menu/AllModule", jObject, this.httpOptions);
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuService);
    return MenuService;
}());



/***/ })

}]);
//# sourceMappingURL=portal-home-portal-home-module.js.map