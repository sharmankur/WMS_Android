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

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'selectWarehouse'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!-- <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'selectWarehouse'|translate}}</label>\r\n                    <div class=\"col-sm-9\">\r\n                            <kendo-dropdownlist \r\n                            [data]=\"whsList\" \r\n                            textField=\"OPTM_WHSE\"\r\n                            valueField=\"BPLid\"\r\n                            id=\"whseId\"\r\n                            name = \"defaultWHS\"\r\n                            [(ngModel)]=\"defaultWHS\"\r\n                            (selectionChange)=\"OnOptionChange($event)\"\r\n                           ></kendo-dropdownlist>\r\n                    </div> -->\r\n                        <label label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span class=\"opti_form-label\">{{'selectWarehouse'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <!-- <kendo-dropdownlist class=\"form-control form-control-sm\" [data]=\"whsList\" [textField]=\"'OPTM_WHSE'\"\r\n                             [valueField]=\"'BPLid'\" id=\"whseId\" name=\"defaultWHS\" [(ngModel)]=\"defaultWHS\" ></kendo-dropdownlist> -->\r\n                             <kendo-dropdownlist\r\n                                [data]=\"whsList\"\r\n                                textField=\"OPTM_WHSE\"\r\n                                valueField=\"BPLid\"\r\n                                name=\"defaultWHS\"\r\n                                [(ngModel)]=\"defaultWHS\"\r\n                            >\r\n                            </kendo-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" (click)=\"onSubmitClick()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

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
        this.commonService.refreshTopBarValue(localStorage.getItem("whseId"));
        this.router.navigateByUrl('home/dashboard');
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

/***/ "./src/app/common/theme-manager/theme-manager.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/common/theme-manager/theme-manager.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <h4>\r\n            Themes <span class=\"float-right\"><img src=\"assets/images/common/close-theme-panel.svg\" (click)=\"onClose();\" class=\"opti_mouse-pointer\" alt=\"Close Right Panel\" width=\"15\" height=\"15\" /></span>\r\n          </h4>  \r\n          <!-- theme change  -->\r\n          <div id=\"opti_changeThemeID\" class=\"position-relative\" [perfectScrollbar]=\"\" style=\"height: calc(100vh - 180px);\">\r\n            \r\n            <!-- new code theme changer -->\r\n            <form class=\"k-form\">\r\n                <div class=\"k-form-field\">\r\n                    <div class=\"opti_theme_outer\">\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"bluelagoo\" class=\"k-radio\" (change)=\"onThemeChange(bluelagooColor)\" [checked]=\"selectedColor==bluelagooColor\" />\r\n                        <label class=\"k-radio-label\" for=\"bluelagoo\">Bluelagoo</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#0052d4;\"></span>\r\n                            <span style=\"background-color:rgba(0, 82, 212, 0.2);\"></span>\r\n                            <span style=\"background-color:#6fb1fc;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Borabora <input type=\"radio\" name=\"themeColor\" id=\"borabora\" (change)=\"onThemeChange(boraboraColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"borabora\" class=\"k-radio\" (change)=\"onThemeChange(boraboraColor)\" [checked]=\"selectedColor==boraboraColor\" />\r\n                        <label class=\"k-radio-label\" for=\"borabora\">Borabora</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#2bc0e4;\"></span>\r\n                            <span style=\"background-color:rgba(43, 192, 228, 0.2);\"></span>\r\n                            <span style=\"background-color:#eaecc6;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Castify <input type=\"radio\" name=\"themeColor\" id=\"castify\" (change)=\"onThemeChange(castfyColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"castify\" class=\"k-radio\" (change)=\"onThemeChange(castfyColor)\" [checked]=\"selectedColor==castfyColor\" />\r\n                        <label class=\"k-radio-label\" for=\"castify\">Castify</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#ff8382;\"></span>\r\n                            <span style=\"background-color:rgba(255, 131, 130, 0.2);\"></span>\r\n                            <span style=\"background-color:#ff9e76;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Coffee <input type=\"radio\" name=\"themeColor\" id=\"coffee\" (change)=\"onThemeChange(coffeeColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"coffee\" class=\"k-radio\" (change)=\"onThemeChange(coffeeColor)\" [checked]=\"selectedColor==coffeeColor\" />\r\n                        <label class=\"k-radio-label\" for=\"coffee\">Coffee</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#595959;\"></span>\r\n                            <span style=\"background-color:rgba(89, 89, 89, 0.2);\"></span>\r\n                            <span style=\"background-color:#f0e9d9;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Green <input type=\"radio\" name=\"themeColor\" id=\"green\" (change)=\"onThemeChange(greenColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"green\" class=\"k-radio\" (change)=\"onThemeChange(greenColor)\" [checked]=\"selectedColor==greenColor\" />\r\n                        <label class=\"k-radio-label\" for=\"green\">Green</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#8bcb6e;\"></span>\r\n                            <span style=\"background-color:rgba(139, 203, 110, 0.2);\"></span>\r\n                            <span style=\"background-color:#d7f1cb;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Maldive <input type=\"radio\" name=\"themeColor\" id=\"maldive\" (change)=\"onThemeChange(maldiveColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"maldive\" class=\"k-radio\" (change)=\"onThemeChange(maldiveColor)\" [checked]=\"selectedColor==maldiveColor\" />\r\n                        <label class=\"k-radio-label\" for=\"maldive\">Maldive</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#0ed2f7;\"></span>\r\n                            <span style=\"background-color:rgba(14, 210, 247, 0.2);\"></span>\r\n                            <span style=\"background-color:#b2fefa;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>New Trend <input type=\"radio\" name=\"themeColor\" id=\"newtrend\" (change)=\"onThemeChange(newtrendColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"newtrend\" class=\"k-radio\" (change)=\"onThemeChange(newtrendColor)\" [checked]=\"selectedColor==newtrendColor\" />\r\n                        <label class=\"k-radio-label\" for=\"newtrend\">New Trend</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#329ac2;\"></span>\r\n                            <span style=\"background-color:rgba(50, 154, 194, 0.2);\"></span>\r\n                            <span style=\"background-color:#9cb3b9;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Skype <input type=\"radio\" name=\"themeColor\" id=\"skype\" (change)=\"onThemeChange(skypeColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"skype\" class=\"k-radio\" (change)=\"onThemeChange(skypeColor)\" [checked]=\"selectedColor==skypeColor\" />\r\n                        <label class=\"k-radio-label\" for=\"skype\">Skype</label>\r\n\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#3dbfe6;\"></span>\r\n                            <span style=\"background-color:rgba(61, 191, 230, 0.2);\"></span>\r\n                            <span style=\"background-color:#e4f2f7;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Stripe <input type=\"radio\" name=\"themeColor\" id=\"stripe\" (change)=\"onThemeChange(stripeColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"stripe\" class=\"k-radio\" (change)=\"onThemeChange(stripeColor)\" [checked]=\"selectedColor==stripeColor\"/>\r\n                        <label class=\"k-radio-label\" for=\"stripe\">Stripe</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#1fa2ff;\"></span>\r\n                            <span style=\"background-color:rgba(31, 162, 255, 0.2);\"></span>\r\n                            <span style=\"background-color:#9dd0f3;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Sunrise <input type=\"radio\" name=\"themeColor\" id=\"sunrise\" (change)=\"onThemeChange(sunriseColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"sunrise\" class=\"k-radio\" (change)=\"onThemeChange(sunriseColor)\" [checked]=\"selectedColor==sunriseColor\" />\r\n                        <label class=\"k-radio-label\" for=\"sunrise\">Sunrise</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#ff512f;\"></span>\r\n                            <span style=\"background-color:rgba(255, 81, 47, 0.2);\"></span>\r\n                            <span style=\"background-color:#f09819;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                        \r\n                        <br/>\r\n                        \r\n                    <div class=\"opti_theme_outer\">\r\n                        <!-- <div>Urban <input type=\"radio\" name=\"themeColor\" id=\"urban\" (change)=\"onThemeChange(urbanColor)\"></div> -->\r\n\r\n                        <input type=\"radio\" name=\"themeColor\" id=\"urban\" class=\"k-radio\" (change)=\"onThemeChange(urbanColor)\" [checked]=\"selectedColor==urbanColor\" />\r\n                        <label class=\"k-radio-label\" for=\"urban\">Urban</label>\r\n\r\n                        <div class=\"opti_theme_color-container\">\r\n                            <span style=\"background-color:#ff804d;\"></span>\r\n                            <span style=\"background-color:rgba(255, 128, 77, 0.2);\"></span>\r\n                            <span style=\"background-color:#73a9c9;\"></span>\r\n                            <span style=\"background-color:#fff;\"></span>\r\n                            <span style=\"background-color:#f0f0f0;\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>    \r\n            </form>\r\n            <!-- ned code theme changer -->\r\n\r\n\r\n              <!-- <button (click)=\"onThemeChange(opalColor)\" id=\"opal\">\r\n                  Opal\r\n              </button>\r\n              <button id=\"bootstrap\">\r\n                  Boot-V3\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"urban\" (click)=\"onThemeChange(urbanColor)\">\r\n                  Urban\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"skype\" (click)=\"onThemeChange(skypeColor)\">\r\n                  Skype\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"green\" (click)=\"onThemeChange(greenColor)\">\r\n                  Green\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"stripe\" (click)=\"onThemeChange(stripeColor)\">\r\n                  Stripe\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"coffee\" (click)=\"onThemeChange(coffeeColor)\">\r\n                  Coffee\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"newtrend\" (click)=\"onThemeChange(newtrendColor)\">\r\n                  New Trend 2018\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"castify\" (click)=\"onThemeChange(castfyColor)\">\r\n                  Castfy\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"sunrise\" (click)=\"onThemeChange(sunriseColor)\">\r\n                  Sunrise\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"maldive\" (click)=\"onThemeChange(maldiveColor)\">\r\n                  Maldive\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"borabora\" (click)=\"onThemeChange(boraboraColor)\">\r\n                  Borabora\r\n              </button>\r\n              <br/>\r\n              <br/>\r\n              <button id=\"bluelagoo\" (click)=\"onThemeChange(bluelagooColor)\">\r\n                  Bluelagoo\r\n              </button> -->\r\n          </div>\r\n          <!-- end theme change -->\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/theme-manager/theme-manager.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/common/theme-manager/theme-manager.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opti_theme_outer {\n  display: flow-root; }\n\n.opti_theme_color-container {\n  border: 1px solid #c7c7c7;\n  width: auto;\n  float: left; }\n\n.opti_theme_color-container span {\n  height: 20px;\n  width: 20px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3RoZW1lLW1hbmFnZXIvRDpcXEFua3VyXFxXTVNcXE5ld1dNU0Nsb25lMlxcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXBwXFxjb21tb25cXHRoZW1lLW1hbmFnZXJcXHRoZW1lLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx5QkFBd0I7RUFDeEIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsV0FDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3RoZW1lLW1hbmFnZXIvdGhlbWUtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpX3RoZW1lX291dGVye1xyXG4gICAgZGlzcGxheTogZmxvdy1yb290O1xyXG59XHJcbi5vcHRpX3RoZW1lX2NvbG9yLWNvbnRhaW5lcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2M3YzdjNztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm9wdGlfdGhlbWVfY29sb3ItY29udGFpbmVyIHNwYW57XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBmbG9hdDpsZWZ0XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/theme-manager/theme-manager.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/theme-manager/theme-manager.component.ts ***!
  \*****************************************************************/
/*! exports provided: ThemeManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeManagerComponent", function() { return ThemeManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var ThemeManagerComponent = /** @class */ (function () {
    function ThemeManagerComponent(commonService) {
        this.commonService = commonService;
        // Event emitter variable.
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opalColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].OPALTHEMECOLOR;
        this.urbanColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].URBANTHEMECOLOR;
        this.skypeColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].SKYPETHEMECOLOR;
        this.greenColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].GREEN;
        this.stripeColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].STRIPE;
        this.coffeeColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].COFFEE;
        this.newtrendColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].NEWTREND2018;
        this.castfyColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].CASTFY;
        this.sunriseColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].SUNRISE;
        this.maldiveColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].MALDIVE;
        this.boraboraColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].BORABORA;
        this.bluelagooColor = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].BLUELAGOO;
        this.selectedColor = this.stripeColor;
        this.selectedThemeID = _constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].STRIPEID;
    }
    ThemeManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + _this.selectedThemeID).click();
        }, 500);
    };
    // Function called on cross icon.
    ThemeManagerComponent.prototype.onClose = function () {
        this.messageEvent.emit(false);
    };
    ThemeManagerComponent.prototype.onThemeChange = function (themeColor) {
        // alert(themeColor);
        this.commonService.setThemeData(themeColor);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeManagerComponent.prototype, "messageEvent", void 0);
    ThemeManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-manager',
            template: __webpack_require__(/*! ./theme-manager.component.html */ "./src/app/common/theme-manager/theme-manager.component.html"),
            styles: [__webpack_require__(/*! ./theme-manager.component.scss */ "./src/app/common/theme-manager/theme-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"]])
    ], ThemeManagerComponent);
    return ThemeManagerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"opti_DashboardID\" class=\"opti_dashboard position-relative\" [perfectScrollbar]=\" \">    \r\n    <div class=\"d-flex text-primary align-items-center\">\r\n        <i class=\"opti-icon-wms-logo opti_dashboard-icon text-primary\"></i> <span class=\"text-logo text-primary\">WMS</span>\r\n    </div>\r\n    <p class=\"mb-1 mt-4\">Version</p>\r\n    <p>Copyright 2000-2018. All rights reserved.</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_ThemeSettingID {\n  background-color: #f0f0f0; }\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\np {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\na {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\nh1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\nh2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\nh4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\nh5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\nh6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n.fs-18 {\n  font-size: 18px; }\n.fs-20 {\n  font-size: 20px; }\n.fs-24 {\n  font-size: 24px; }\n.fs-26 {\n  font-size: 26px; }\n#opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n#opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none; }\nbody button:focus {\n    outline: none; }\nbody button + button:not(:last-child) {\n  margin: 0 5px 0 0; }\n.k-datepicker .k-select {\n  margin: -1px -1px -1px 0;\n  position: relative;\n  z-index: 1; }\nbutton.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon {\n  border-color: #1fa2ff;\n  color: #ffffff;\n  border-radius: 5px;\n  background-color: #1fa2ff; }\nbutton.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:hover, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:active, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:focus {\n    border-color: #1b8ee0;\n    color: #ffffff;\n    background-color: #1b8ee0; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n#opti_WrapperID #opti_LeftPanelID {\n    min-width: 260px;\n    max-width: 260px; }\n#opti_WrapperID #opti_LeftPanelID.opti_sidebar-minimize {\n    min-width: 80px;\n    max-width: 80px; }\n#opti_WrapperID #opti_LeftPanelID {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n#opti_WrapperID .opti_left-navigation {\n    margin: 10px;\n    border-radius: 5px;\n    display: flex;\n    align-self: center;\n    width: calc(100% - 20px);\n    justify-self: flex-start;\n    flex: 1; }\n#opti_WrapperID #opti_RightPanelID.opti_sidebar-minimize {\n    width: calc(100% - 80px); }\n#opti_WrapperID #opti_RightPanelID {\n    width: calc(100% - 260px); }\n#opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n#opti_WrapperID #opti_MainContentID {\n    height: calc(100% - 45px);\n    overflow: hidden; }\n#opti_WrapperID section#opti_TopBarID {\n    min-height: 45px !important; }\n#opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 99;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n#opti_WrapperID .opti_right-fix-section .opti_tab {\n      border: none; }\n#opti_WrapperID .opti_right-fix-section .opti_tab button {\n        border-radius: 0; }\n#opti_WrapperID .opti_right-fix-section .opti_tabcontent {\n      padding: 15px 0;\n      height: calc(100vh - 105px);\n      border-top: 1px solid #c7c7c7; }\n#opti_WrapperID .opti_right-fix-section .opti_close-icon-right-section {\n      display: inline-flex !important;\n      height: 40px;\n      width: 30px;\n      cursor: pointer; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_backarrow {\n  display: none; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_hamburger {\n  display: block; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\nsection#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n.opti_left-navigation {\n  box-shadow: 0px 1px 15px #1fa2ff; }\nbody kendo-grid {\n  box-shadow: 0px 1px 15px #1fa2ff; }\nbody.opti_account-module .k-indicator-container, body.opti_account-module a, body.opti_account-module h1, body.opti_account-module h2, body.opti_account-module h3, body.opti_account-module h4, body.opti_account-module h5, body.opti_account-module h6, body.opti_account-module .k-grid-header .k-header {\n  color: #1fa2ff; }\nbody.opti_account-module .k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #1fa2ff;\n  background-color: #1fa2ff; }\nbody.opti_account-module .ps__thumb-y, body.opti_account-module .ps__rail-y:hover > .ps__thumb-y, body.opti_account-module .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #1fa2ff; }\nbody.opti_account-module .k-checkbox:focus + .k-checkbox-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #1fa2ff; }\nbody.opti_account-module .k-dropdown > :hover,\nbody.opti_account-module .k-dropdown .k-dropdown-wrap {\n  border-color: #1fa2ff; }\nbody.opti_account-module .k-dropdown .k-state-focused, body.opti_account-module .k-dropdowntree .k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\nbody.opti_account-module .opti_loader .opti_spinner {\n  border-top-color: #1fa2ff !important; }\nbody.opti_account-module .k-button.k-primary:focus, body.opti_account-module .k-button.k-primary.k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\n#opti_DashboardID {\n  background: #fff;\n  height: calc(100vh - 85px);\n  border-radius: 5px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n.opti_dashboard-icon {\n  font-size: 80px;\n  margin: 0 auto; }\n.text-logo {\n  font-size: 80px;\n  margin-left: 10px;\n  line-height: 1;\n  font-weight: 800; }\n@media screen and (max-width: 479px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n@media only screen and (min-width: 960px) and (max-width: 1024px) {\n  .opti_zoom-donut-only-mobile {\n    zoom: 0.75; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBbmt1clxcV01TXFxOZXdXTVNDbG9uZTJcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFxfYmFzZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvRDpcXEFua3VyXFxXTVNcXE5ld1dNU0Nsb25lMlxcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF90eXBvZ3JhcGh5LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2J1dHRvbi5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvRDpcXEFua3VyXFxXTVNcXE5ld1dNU0Nsb25lMlxcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9sYXlvdXQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBbmt1clxcV01TXFxOZXdXTVNDbG9uZTJcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFx3ZWJcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLG1FQUFZO0FBQVosbUVBQVk7QUFBWixtRUFBWTtBQXVGWjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0FBSWQ7RUFDSSxhQUFhLEVBQUE7QUNwR2pCO0VBQ0kseUJBQXlCLEVBQUE7QUFPN0I7RURRSSwrQkFIaUM7RUFJckIsZUMvQk07RURnQ0osZ0JDckJNLEVBQUE7QUFjeEI7RURLSSwrQkFIaUM7RUFJckIsZUMvQk07RURnQ0osZ0JDckJNLEVBQUE7QUFpQnhCO0VERUksK0JBSGlDO0VBSXJCLGVDL0JNO0VEZ0NKLGdCQ3JCTSxFQUFBO0FBd0J4QjtFRExJLCtCQUhpQztFQUlyQixlQzFCVTtFRDJCUixnQkNyQk0sRUFBQTtBQTJCeEI7RURSSSwrQkFIaUM7RUFJckIsZUMzQlM7RUQ0QlAsZ0JDckJNLEVBQUE7QUE4QnhCO0VEWEksK0JBSGlDO0VBSXJCLGVDNUJRO0VENkJOLGdCQ3JCTSxFQUFBO0FBaUN4QjtFRGRJLCtCQUhpQztFQUlyQixlQzdCTTtFRDhCSixnQkNyQk0sRUFBQTtBQW9DeEI7RURqQkksK0JBSGlDO0VBSXJCLGVDOUJRO0VEK0JOLGdCQ3JCTSxFQUFBO0FBdUN4QjtFRHBCSSwrQkFIaUM7RUFJckIsZUMvQk07RURnQ0osZ0JDckJNLEVBQUE7QUEyQ3hCO0VBQ0ksZUFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZSxFQUFBO0FBSW5CO0VBUVEsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0FBVDNCO0VBYVEseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixvQ0FBb0MsRUFBQTtBREc1QztFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0FBSWQ7RUFDSSxhQUFhLEVBQUE7QUVuSGpCO0VBR1Esa0JBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZ0I7RUFDaEIsaUJBQWtCO0VBQ2xCLGVEUGM7RUNRZCxZQUFZLEVBQUE7QUFUcEI7SUFXWSxhQUFhLEVBQUE7QUFNekI7RUFDSSxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtBQUo3QjtJQU1RLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCLEVBQUE7QUZvRGpDO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBSmhCO0lBTVEsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7QUFJbkI7RUFDSSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0FBSTNCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQ0FoRzBDO0VBaUcxQyxVQUFVLEVBQUE7QUFJZDtFQUNJLGFBQWEsRUFBQTtBRzdHakI7RUFDSSxhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7QUFGeEI7SUFNWSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFQNUI7SUFZWSxlQUFlO0lBQ2YsZUFBZSxFQUFBO0FBYjNCO0lBa0JZLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0FBckIxQztJQXlCWSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixPQUFPLEVBQUE7QUEvQm5CO0lBb0NZLHdCQUF3QixFQUFBO0FBcENwQztJQXdDWSx5QkFBeUIsRUFBQTtBQXhDckM7SUE0Q1ksYUFBYSxFQUFBO0FBNUN6QjtJQWlEWSx5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUE7QUFsRDVCO0lBd0RZLDJCQUE2QyxFQUFBO0FBeER6RDtJQTZEUSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGdCSDdESztJRzhETCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO0lBRWYsV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw4QkFBOEIsRUFBQTtBQXZFdEM7TUE0RVksWUFBWSxFQUFBO0FBNUV4QjtRQThFZ0IsZ0JBQWdCLEVBQUE7QUE5RWhDO01BbUZZLGVBQWU7TUFFZiwyQkFBMEI7TUFDMUIsNkJBQTZCLEVBQUE7QUF0RnpDO01BMEZZLCtCQUErQjtNQUMvQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWUsRUFBQTtBQVUzQjtFQUdZLGFBQWEsRUFBQTtBQUh6QjtFQU1ZLGNBQWMsRUFBQTtBQU4xQjtFQVNZLGFBQWEsRUFBQTtBQU96QjtFQUNJLG9HQUFvRyxFQUFBO0FBR3hHO0VBQ0ksZ0NBQWdDLEVBQUE7QUFHcEM7RUFDSSxnQ0FBZ0MsRUFBQTtBQUlwQztFQUVRLGNIM0h1QixFQUFBO0FHeUgvQjtFQUtRLHFCSDlIdUI7RUcrSHZCLHlCSC9IdUIsRUFBQTtBR3lIL0I7RUFTUSx5QkhsSXVCLEVBQUE7QUd5SC9CO0VBWVEsNkNIckl1QixFQUFBO0FHeUgvQjs7RUFnQlEscUJIekl1QixFQUFBO0FHeUgvQjtFQW1CUSw2Q0g1SXVCLEVBQUE7QUd5SC9CO0VBc0JRLG9DQUFvRCxFQUFBO0FBdEI1RDtFQXlCUSw2Q0hsSnVCLEVBQUE7QUlqQi9CO0VBQ0ksZ0JKT1M7RUlOVCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7QUFTM0I7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUMxQnBCO0VBQ0E7SUFDSSxVQUFVLEVBQUEsRUFDYjtBQUdEO0VBQ0E7SUFDSSxVQUFVLEVBQUEsRUFDYjtBQUdEO0VBQ0E7SUFDSSxVQUFVLEVBQUEsRUFDYjtBQUdEO0VBQ0E7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAnKTtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJyk7XHJcblxyXG4vLyBpbXBvcnRzIGZvciBhbGwgbWl4aW5zICsgZ2xvYmFsIHByb2plY3QgdmFyaWFibGVzXHJcbi8vIEBpbXBvcnQgJ190eXBvZ3JhcGh5JztcclxuLy8gQGltcG9ydCAnX2J1dHRvbic7XHJcbi8vIEBpbXBvcnQgJ19ncmlkJztcclxuXHJcbi8vIFNvbWUgQmFzaWMgVmFyaWFibGVcclxuJHdoaXRlIDogI2ZmZjtcclxuJGVycm9yIDogI0Q0NzQ3NDtcclxuJHRvcC1iYXItaGVpZ2h0OjY1cHg7XHJcbiRsaXN0LWhvdmVyLWJnLWNvbG9yOiAjZjJmNGY4O1xyXG4kbGlzdC1iZy1jb2xvcjogI0Y4RjhGODtcclxuJGxpc3Qtc2VwcmF0b3ItY29sb3I6cmdiYSgxMjAsIDEzMCwgMTQwLCAwLjEzKTtcclxuJGxpZ2h0LWJsYWNrOiMzMzM7XHJcbiRkYXJrLWJsYWNrOiMzMzM7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6cmdiYSgzMywgMzcsIDQxLCAwLjE1KTtcclxuJHRoZW1lRm9yQWNjb3VudFNlY3Rpb246IzFmYTJmZjtcclxuXHJcbi8vIFRydW5jYXRlXHJcbkBtaXhpbiB0cnVuY2F0ZSgkdHJ1bmNhdGlvbi1ib3VuZGFyeSkge1xyXG4gICAgbWF4LXdpZHRoOiAkdHJ1bmNhdGlvbi1ib3VuZGFyeTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi8vIGZvbnQgc2l6ZVxyXG4kZm9udC1mYW1pbHktbGF0bzogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4vLyRmb250LWZhbWlseS1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5AbWl4aW4gZm9udCgkc2l6ZTogZmFsc2UsICR3ZWlnaHQ6IGZhbHNlLCAgJGxoOiBmYWxzZSkge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1sYXRvOyBcclxuICAgIEBpZiAkc2l6ZSB7IGZvbnQtc2l6ZTogJHNpemU7IH1cclxuICAgIEBpZiAkd2VpZ2h0IHsgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7IH1cclxuICAgIEBpZiAkbGggeyBsaW5lLWhlaWdodDogJGxoOyB9XHJcbn1cclxuXHJcbi8vIHBzZXVkb1xyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJyl7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbi8vIFRvIHF1aWNrbHkgY2VudHJlIGEgYmxvY2sgZWxlbWVudFxyXG5AbWl4aW4gcHVzaC0tYXV0byB7XHJcbiAgICBtYXJnaW46IHsgXHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLy8gYm9yZGVyIHJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgfVxyXG5cclxuIC8vIG1hcmdpblxyXG5AbWl4aW4gbWFyZ2luKCR0b3A6IGZhbHNlLCAkcmlnaHQ6IGZhbHNlLCAkYm90dG9tOiBmYWxzZSwgICRsZWZ0OiBmYWxzZSkge1xyXG4gICAgQGlmICRib3R0b20ge21hcmdpbi1ib3R0b206ICRib3R0b207fVxyXG4gICAgQGlmICRyaWdodCAgIHttYXJnaW4tcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHttYXJnaW4tbGVmdDogJGxlZnQ7fVxyXG4gICAgQGlmICR0b3AgICAgICAge21hcmdpbi10b3A6ICR0b3A7fVxyXG4gfVxyXG5cclxuIC8vIHBhZGRpbmdcclxuQG1peGluIHBhZGRpbmcoJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7cGFkZGluZy1ib3R0b206ICRib3R0b207fVxyXG4gICAgQGlmICRyaWdodCAgIHtwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7fVxyXG4gICAgQGlmICRsZWZ0ICAgICB7cGFkZGluZy1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7cGFkZGluZy10b3A6ICR0b3A7fVxyXG4gfVxyXG5cclxuIC8vIFRydW5jYXRlXHJcbkBtaXhpbiBwYXNzd29yZC1tZy1pbmRpY2F0b3IoJHdpZHRoOiBmYWxzZSwgJGNvbG9yOiBmYWxzZSkge1xyXG4gICAgQGlmICR3aWR0aCB7d2lkdGg6ICR3aWR0aDt9XHJcbiAgICBAaWYgJGNvbG9yIHtiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7fVxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDJzOyAvKiBGb3IgU2FmYXJpIDMuMSB0byA2LjAgKi9cclxuICAgIHRyYW5zaXRpb246IDJzO1xyXG59XHJcblxyXG4vLyBBbGlnbiBWZXJ0aWNhbGx5XHJcbi5vcHRpX3RhYmxlLXYtbWlkZGxle1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5vcHRpX3RhYmxlLWNlbGwtdi1taWRkbGV7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5vcHRpX3ZlcnRpY2FsLWFsaWdue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIExpbmUgU2VwcmF0b3JcclxuLm9wdGlfc2VwcmF0b3J7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1zZXByYXRvci1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIEhpZGUgZWxlbWVudCBJbiBEZXNrdG9wIEFuZCBJcGFkXHJcbi5vcHRpX2hpZGUtaW4tZGVza3RvcC1pcGFke1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJAaW1wb3J0ICdfYmFzZSc7XHJcblxyXG4vLyBmb250IHNpemVcclxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcclxuJGZvbnQtc2l6ZS1yZWd1bGFyOiAxNHB4O1xyXG4kZm9udC1zaXplLWxhcmdlOiAyNHB4O1xyXG4kZm9udC1zaXplLXgtbGFyZ2U6IDMycHg7XHJcbiRmb250LXNpemUteHgtbGFyZ2U6IDQ4cHg7XHJcbiRmb250LXNpemUteHh4LWxhcmdlOiA2NHB4O1xyXG4kZm9udC1zaXplLXh4eHgtbGFyZ2U6IDk2cHg7XHJcblxyXG5cclxuLy8gZm9udCB3ZWlnaHRcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0Olx0NDAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjo0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOlx0NzAwO1xyXG5cclxuI29wdGlfVGhlbWVTZXR0aW5nSUQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vMi4gQ29tbW9uIGNzcyBzdGFydC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmJvZHl7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXNtYWxsLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxucHtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6JGZvbnQtc2l6ZS1zbWFsbCwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmF7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXNtYWxsLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbiAgICAvLyAmOmhvdmVye1xyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14eHgtbGFyZ2UsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5oMntcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUteHgtbGFyZ2UsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5oM3tcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUteC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmg0e1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmg1e1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS1yZWd1bGFyLCAkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmg2e1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbCwgJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5cclxuLmZzLTE4e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5mcy0yMHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZnMtMjR7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmZzLTI2e1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4vLyBUb3AgQmFyXHJcbiNvcHRpX1RvcEJhcklEe1xyXG4gICAgLm9wdGlfdXNlci1wcm9maWxle1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgLy8gYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlID0gJ3RleHQnXSwgaW5wdXRbdHlwZSA9ICdlbWFpbCdde1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dFt0eXBlID0gJ3RleHQnXTpmb2N1cywgaW5wdXRbdHlwZSA9ICdlbWFpbCddOmZvY3Vze1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgJ19iYXNlJztcclxuXHJcbmJvZHkge1xyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyIDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsIDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcbmJvZHkgYnV0dG9uICsgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG5cclxuLmstZGF0ZXBpY2tlciAuay1zZWxlY3R7XHJcbiAgICBtYXJnaW46IC0xcHggLTFweCAtMXB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5idG4tc20uYnRuLXRyYW5zcGFyZW50LmJ0bi1pY29uIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFmYTJmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTJmZjtcclxuICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMxYjhlZTA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOGVlMDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJ19iYXNlJztcclxuXHJcbi8vIDEuIExheW91dCBDU1NcclxuLy8gMi4gVG9wIEJhciBDU1NcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vMS4gTGF5b3V0IGNzcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiNvcHRpX1dyYXBwZXJJRHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbiAgICAvLyBDc3MgUmVsYXRlZCBUbyBMZWZ0IFBhbmVsXHJcbiAgICAgICAgI29wdGlfTGVmdFBhbmVsSUR7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI29wdGlfTGVmdFBhbmVsSUQub3B0aV9zaWRlYmFyLW1pbmltaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAub3B0aV9sZWZ0LW5hdmlnYXRpb257XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ3NzIFJlbGF0ZWQgVG8gUmlnaHQgQ29udGVudCBBcmVhXHJcbiAgICAgICAgI29wdGlfUmlnaHRQYW5lbElELm9wdGlfc2lkZWJhci1taW5pbWl6ZSB7IC8vIHdpZHRoIGFmdGVyIGNsb3NlIHNpZGViYXJcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI29wdGlfUmlnaHRQYW5lbElEeyAvLyB3aWR0aCBhZnRlciBvcGVuIHNpZGViYXJcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNvcHRpX1JpZ2h0UGFuZWxJRHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gQ1NTIFJlbGF0ZWQgVG8gTWFpbiBDb250ZW50IFNlY3Rpb25cclxuICAgICAgICAjb3B0aV9NYWluQ29udGVudElEIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTsgLy8gdG9wIGJhciBoZWlnaHQgNjVweFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBDc3MgUmVsYXRlZCBUbyB0b3AgcGFuZWxcclxuICAgICAgICBzZWN0aW9uI29wdGlfVG9wQmFySUQge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkdG9wLWJhci1oZWlnaHQgLSAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vT3B0aSByaWdodCBzZWN0aW9uIFxyXG4gICAgLm9wdGlfcmlnaHQtZml4LXNlY3Rpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xyXG4gICAgICAgIHRvcDogNjVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIHRhYiBzZWN0aW9uIHVuZGVyIHJpZ2h0IHNlY3Rpb25cclxuICAgICAgICAub3B0aV90YWIge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcHRpX3RhYmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OmNhbGMoMTAwdmggLSAxMDVweCk7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wdGlfY2xvc2UtaWNvbi1yaWdodC1zZWN0aW9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8yLiBUb3AgUGFuZWwgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gaWYgbGVmdCBwYW5lbCBjbG9zZVxyXG4jb3B0aV9SaWdodFBhbmVsSUQub3B0aV9zaWRlYmFyLW1pbmltaXpleyAvLyAub3B0aV9zaWRlYmFyLW1pbmltaXplIGNhbid0IGFjY2VzcyB0aGlzIGNsYXNzIGluIHRvcC5jb21wb25lbnQgdGhhdCdzIHdoeSB3ZSBhcmUgdXNpbmcgaGVyZVxyXG4gICAgI3NpZGViYXJDb2xsYXBzZXtcclxuICAgICAgICAub3B0aV9iYWNrYXJyb3d7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpX2hhbWJ1cmdlcntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpX21vYmlsZS1tZW51LWljb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWZhdWx0IHRoZW1lIGNvbG9yXHJcbi8vIGlmIHdlIHdpbGwgYWRkIHRoaXMgY3NzIGluIHRvcCBiYXIgdGhhbiBiYWNrZ3JvdW5kIGNvbG9yIHdpbGwgbm90IGNoYW5nZSBmcm9tIHRoZW1lIGZpbGUgYmVjdWFzZSBpdCB3aWxsIHRha2UgaGlnaCBwcmlvcmF0eSB0aGF0J3Mgd2h5IGkgYWRkIGhlcmVcclxuc2VjdGlvbiNvcHRpX1RvcEJhcklEeyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzdkZWcsICM0ODNERjYgMiUsICM0MzVFRjggMTAlLCAjMUJBMEYxIDQ0JSwgIzI1RERGNSA5MSUsICM0NUQ3OTAgMTMwJSk7XHJcbn1cclxuICBcclxuLm9wdGlfbGVmdC1uYXZpZ2F0aW9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAjMWZhMmZmO1xyXG59XHJcblxyXG5ib2R5IGtlbmRvLWdyaWQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4ICMxZmEyZmY7XHJcbn1cclxuXHJcbi8vIEFsd2F5cyBzZXQgc3RyaXBlIHRoZW1lIGZvciBhY2NvdW50IG1vZHVsZVxyXG5ib2R5Lm9wdGlfYWNjb3VudC1tb2R1bGV7XHJcbiAgICAuay1pbmRpY2F0b3ItY29udGFpbmVyLCBhLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuay1ncmlkLWhlYWRlciAuay1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWNoZWNrYm94OmNoZWNrZWQgKyAuay1jaGVja2JveC1sYWJlbDo6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLnBzX190aHVtYi15LCAucHNfX3JhaWwteTpob3ZlciA+IC5wc19fdGh1bWIteSwgLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAuay1jaGVja2JveDpmb2N1cyArIC5rLWNoZWNrYm94LWxhYmVsOjpiZWZvcmV7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICR3aGl0ZSwgMCAwIDAgM3B4ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLmstZHJvcGRvd24gPiA6aG92ZXIsXHJcbiAgICAuay1kcm9wZG93biAuay1kcm9wZG93bi13cmFwe1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAuay1kcm9wZG93biAuay1zdGF0ZS1mb2N1c2VkLCAuay1kcm9wZG93bnRyZWUgLmstc3RhdGUtZm9jdXNlZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoJGNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbiwgJGFscGhhOiAwLjIpOyBcclxuICAgIH1cclxuICAgIC5vcHRpX2xvYWRlciAub3B0aV9zcGlubmVye1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuay1idXR0b24uay1wcmltYXJ5OmZvY3VzLCAuay1idXR0b24uay1wcmltYXJ5Lmstc3RhdGUtZm9jdXNlZHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uLCAkYWxwaGE6IDAuMik7ICBcclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCAnLi4vLi4vX3R5cG9ncmFwaHktYnV0dG9uLWxheW91dCc7XHJcblxyXG4jb3B0aV9EYXNoYm9hcmRJRCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NpZ251cC9ub3VzZS9zaHV0dGVyL2JhY2tncm91bmQtd21zLmpwZycpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NpZ251cC9ub3VzZS9zaHV0dGVyL2JhY2tncm91bmQtd21zLW0uanBnJyk7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLy8gfVxyXG59XHJcbi5vcHRpX2Rhc2hib2FyZC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnRleHQtbG9nb3tcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59IiwiQGltcG9ydCAnLi8uLi8uLi9hc3NldHMvY3NzL3dlYi9kYXNoYm9hcmQvZGFzaGJvYXJkLnNjc3MnO1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4ub3B0aV96b29tLWRvbnV0LW9ubHktbW9iaWxle1xyXG4gICAgem9vbTogMC43NTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuLm9wdGlfem9vbS1kb251dC1vbmx5LW1vYmlsZXtcclxuICAgIHpvb206IDAuNzU7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbi5vcHRpX3pvb20tZG9udXQtb25seS1tb2JpbGV7XHJcbiAgICB6b29tOiAwLjc1O1xyXG59ICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuLm9wdGlfem9vbS1kb251dC1vbmx5LW1vYmlsZXtcclxuICAgIHpvb206IDAuNzU7XHJcbn0gICBcclxufSJdfQ== */"

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


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{PageTitle}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'ItemCode'|translate}}\" name=\"itemCode\" [(ngModel)]=\"itemCode\"\r\n                                    (blur)=\"OnItemCodeChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"OnItemCodeLookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"showItemName\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemName'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"itemName\" [(ngModel)]=\"itemName\" [disabled]=true>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"showBatchNo\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span *ngIf=\"!isItemSerialTrack\">{{'BatchNo'|translate}}</span>\r\n                            <span *ngIf=\"isItemSerialTrack\">{{'SerialNo'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{batchNoPlaceholder}}\" name=\"lotValue\" [(ngModel)]=\"lotValue\"\r\n                                    (blur)=\"OnLotChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowLOTList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'FromBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'FromBin'|translate}}\" name=\"fromBin\" [(ngModel)]=\"fromBin\"\r\n                                    (blur)=\"OnFromBinChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowFromBins()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ToBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'ToBin'|translate}}\" name=\"toBin\" [(ngModel)]=\"toBin\"\r\n                                    (blur)=\"OnToBinChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowToBins()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">\r\n                            <span *ngIf=\"!isItemSerialTrack\">{{'OnHandQty'|translate}}</span>\r\n                            <span *ngIf=\"isItemSerialTrack\">{{'SerialQty'|translate}}</span>\r\n                        </label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"number\" min=\"0\" class=\"form-control form-control-sm text-right\" placeholder=\"{{zero}}\" name=\"onHandQty\"\r\n                                [(ngModel)]=\"onHandQty\" [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'TransferQty'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input id=\"txtfld\" type=\"number\" min=\"0\" class=\"form-control form-control-sm text-right\" placeholder=\"{{zero}}\"\r\n                                (blur)=\"formatTransferNumbers()\" name=\"transferQty\" [(ngModel)]=\"transferQty\" [disabled]=\"editTransferQty\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Reason'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'Reason'|translate}}\" name=\"Remarks\" [(ngModel)]=\"Remarks\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"SubmitPutAway()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text\" (click)=\"AddLineLots()\">\r\n                    <span class=\"k-icon k-i-plus\" role=\"presentation\"></span> {{'AddMore'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text mr-1\" (click)=\"ShowSavedData()\">\r\n                    <span class=\"k-icon k-i-preview\" role=\"presentation\"></span> {{'ViewLines'|translate}}</button>\r\n                <div class=\"clearfix mt-1 d-block d-sm-none\"></div>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"goBack()\">\r\n                    <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <!-- USE THIS HTML CODE BLOCK FOR VIEW LINE PAGE -->\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'AddedItems'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-12\">\r\n                    <!-- loader start -->\r\n                    <div class=\"opti_loader opti_loader-content-tab\" *ngIf=\"showLoader\">\r\n                        <div class=\"opti_spinner\"></div>\r\n                    </div>\r\n                    <!-- loader end -->\r\n\r\n                    <!-- grid start -->\r\n                    <ng-container *ngIf=\"showLoader==false\">\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"TransferedItemsDetail\" [resizable]=\"true\" [pageSize]=\"50\" [pageable]=\"true\"\r\n                            [sortable]=\"true\" [selectable]=\"true\" #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'Item'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ItemCode }}</dd>\r\n\r\n                                        <dt>{{'Batch'|translate}}</dt>\r\n                                        <dd>{{ dataItem.LotNo }}</dd>\r\n\r\n                                        <dt>{{'ToBin'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ToBin }}</dd>\r\n                                    </dl>\r\n\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'Qty'|translate}}\r\n\r\n                                            <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                                                <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                            </button>\r\n                                        </dt>\r\n                                        <dd>{{ dataItem.Qty }}</dd>\r\n\r\n                                        <dt>{{'FromBin'|translate}}</dt>\r\n                                        <dd>{{ dataItem.BinNo }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column class=\"pl-1\" media=\"(min-width: 768px)\" field=\"ItemCode\" title=\"{{'Item'|translate}}\" [width]=\"160\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"Qty\" headerClass=\"text-right\" class=\"text-right\" title=\"{{'Qty'|translate}}\"\r\n                                [width]=\"60\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNo\" [width]=\"160\" title=\"{{'Batch'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"BinNo\" [width]=\"160\" title=\"{{'FromBin'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"ToBin\" title=\"{{'ToBin'|translate}}\" [width]=\"160\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"Delete\" title=\"\" width=\"30\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                                        <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                        </kendo-grid>\r\n                    </ng-container>\r\n                    <!-- grid end -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"OnOKClick()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"openModal(template)\">\r\n                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <ng-template #template>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">{{'Confirm'|translate}}</h4>\r\n            <button id=\"modalCloseBtn\" type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            {{'DoYouWantToDeleteAllTheLines'|translate}}\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary k-button btn-sm\" type=\"button\" (click)=\"deleteAllOkClick()\">{{'Ok'|translate}}</button>\r\n            <button class=\"btn btn-default k-button btn-sm\" type=\"button\" (click)=\"modalRef.hide()\">{{'Cancel'|translate}}</button>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\"\r\n    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 id=\"dialog-auto-name\" class=\"modal-title pull-left\">{{'Confirm'|translate}}</h4>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{ModalContent}}\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary k-button btn-sm\" type=\"button\" #transferedItemsBtn>{{'Ok'|translate}}</button>\r\n                <button class=\"btn btn-default k-button btn-sm\" type=\"button\" (click)=\"hideModal()\">{{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<span [hidden]=\"showLookupLoader\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

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
        this.isModalShown = false;
        this.showValidation = true;
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
            this.PageTitle = this.translate.instant("WarehouseTransfer") + this.translate.instant("From") + localStorage.getItem("whseId") + this.translate.instant("To") + localStorage.getItem("towhseId");
        }
        this.formatTransferNumbers();
        this.formatOnHandQty();
        this.zero = this.onHandQty;
        console.log("bin loaded");
    };
    /** Simple method to toggle element visibility */
    BinTransferComponent.prototype.ShowSavedData = function () {
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
                _this.lookupfor = "ItemCodeList";
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
                        _this.toastr.error('', _this.translate.instant("InvalidSerial"));
                    }
                    else {
                        _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                    }
                }
                else {
                    _this.lotValue = data[0].LOTNO;
                    _this.onHandQty = data[0].TOTALQTY;
                    // oWhsTransEditLot.Qty = oCurrentController.getFormatedValue(oWhsTransEditLot.Qty);
                    _this.transferQty = _this.onHandQty;
                    _this.formatTransferNumbers();
                    _this.formatOnHandQty();
                    // oWhsTransEditLot.Item = data[0].ITEMCODE;
                    // oWhsTransEditLot.ITEMNAME = data[0].ITEMCODE;
                    // oWhsTransEditLot.Tracking = data[0].TRACKING;
                    // oWhsTransEditLot.LotWhsCode = data[0].WHSCODE;
                    // oWhsTransEditLot.SysNumber = data[0].SYSNUMBER;
                    // oWhsTransEditLot.Remarks = otxtReason.getValue();
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
                    _this.toastr.error('', _this.translate.instant("NoBinsAvailableMsg"));
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
                        // olblQtyOnhand.setValue(oCurrentController.getFormatedValue(modelBins.oData[0].TOTALQTY.toString()));
                        _this.SysNumber = data[0].SYSNUMBER;
                        _this.LotWhsCode = data[0].WHSCODE;
                        //  this.Remarks;// = otxtReason.getValue();
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
                        // oModelWhsTranEditLines = new JSONModel(oWhsTransEditLot)
                        // oCurrentController.getView().setModel(oModelWhsTranEditLines);
                        _this.getDefaultBinFlag = false;
                    }
                }
                else {
                    _this.toastr.error('', _this.translate.instant("NoBinsAvailableMsg"));
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
        var _this = this;
        if (!this.CheckValidation()) {
            return;
        }
        var itemIndex = this.IsInvTransferDetailLineExists(this.itemCode, this.lotValue, this.fromBin, this.toBin, this.Remarks, "");
        var transferedItemsDetail;
        if (itemIndex == -1) {
            this.TransferedItemsDetail.push({
                LineNum: '01',
                LotNo: this.lotValue,
                ItemCode: this.itemCode,
                ItemName: this.itemName,
                Qty: this.transferQty,
                SysNumber: "0",
                BinNo: this.fromBin,
                ToBin: this.toBin,
                Tracking: this.ItemTracking,
                WhsCode: localStorage.getItem("whseId"),
                OnHandQty: this.onHandQty,
                Remarks: this.Remarks
                //EnableSplitContainer: oCurrentController.GetWMSDefaultValues("EnableSplitContainer"),
                //NewConatiner: oWhsTransEditLot.Container
            });
            // localStorage.setItem("InvPutAwayLot", this.TransferedItemsDetail);
            this.clearData();
        }
        else {
            if (this.ItemTracking == "S") {
                this.toastr.error('', this.translate.instant("SerialAlreadyExist"));
                return false;
            }
            else {
                //this.toastr.error('', this.translate.instant("WhsTransferEdit.overwrite"));
                this.showModal();
                this.ModalContent = this.translate.instant("WhsTransferEdit.overwrite");
                var that_1 = this;
                setTimeout(function () {
                    var el = _this.transferedItemsBtn.nativeElement;
                    el.onclick = function () {
                        that_1.TransferedItemsDetail[itemIndex].Qty = that_1.transferQty;
                        that_1.autoShownModal.hide();
                        that_1.clearData();
                    };
                }, 1000);
            }
        }
    };
    BinTransferComponent.prototype.SubmitPutAway = function () {
        var _this = this;
        this.showValidation = true;
        if (this.TransferedItemsDetail.length > 0) {
            this.showValidation = false;
        }
        this.AddLineLots();
        var oWhsTransAddLot = {};
        oWhsTransAddLot.Header = [];
        oWhsTransAddLot.Detail = [];
        oWhsTransAddLot.UDF = [];
        // var oFromWhs = JSON.parse(sessionStorage.getItem(oCurrentController.SessionProperties.FromWhse));
        // var oToWhs = JSON.parse(sessionStorage.getItem(oCurrentController.SessionProperties.ToWhse));
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
        // var UDF = JSON.parse(sessionStorage.getItem(oCurrentController.SessionProperties.UDFSaveSession));
        // if (UDF != null && UDF.length > 0) {
        //     for (var iIndex = 0; iIndex < UDF.length ; iIndex++) {
        //         oWhsTransAddLot.UDF.push({
        //             Key: UDF[iIndex].Key,
        //             Value: UDF[iIndex].Value,
        //             LotNo: UDF[iIndex].LotNo,
        //             Flag: UDF[iIndex].Source,
        //             LineNo: UDF[iIndex].LineNo
        //         });
        //     }
        // }
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
                        _this.toastr.success('', _this.translate.instant("ItemsTranSuccessfully") + data[0].SuccessNo);
                        oWhsTransAddLot = {};
                        oWhsTransAddLot.Header = [];
                        oWhsTransAddLot.Detail = [];
                        oWhsTransAddLot.UDF = [];
                        _this.TransferedItemsDetail = [];
                        _this.clearData();
                    }
                    else {
                        _this.toastr.success('', data[0].ErrorMsg);
                    }
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
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
                    this.toastr.error('', this.translate.instant("Enterquantitygreaterthanzero"));
                }
                return false;
            }
        }
        if (this.fromBin == "") {
            this.toastr.error('', this.translate.instant("FromBinMsg"));
            return false;
        }
        if (this.toBin == "") {
            if (this.showValidation) {
                this.toastr.error('', this.translate.instant("ToBinMsg"));
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
        if (this.lookupfor == "ItemCodeList") {
            this.itemCode = $event[0];
            this.itemName = $event[1];
            this.ItemTracking = $event[2];
            this.showItemName = true;
            this.transferQty = this.translate.instant("zero");
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
            // oTxtTransferQty.setEnabled(false);
            // var qty = olblQtyOnhand.getValue();
            // if (qty > 0) {
            //     oWhsTransEditLot.TransferQty = oCurrentController.getFormatedValue("1");
            // }
            // else {
            //     oWhsTransEditLot.TransferQty = oCurrentController.getFormatedValue("0");
            // }
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
        this.TransferedItemsDetail.splice(rowindex, 1);
        gridData.data = this.TransferedItemsDetail;
        console.log(this.TransferedItemsDetail.length);
        // const itemDetails = selection.selectedRows[0].dataItem;
        // this.TransferedItemsDetail.splice(index, 1);
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
        if (localStorage.getItem("towhseId") == localStorage.getItem("whseId")) {
            this.router.navigate(['home/dashboard']);
        }
        else {
            this.cancelevent.emit(true);
        }
    };
    BinTransferComponent.prototype.OnScanItem = function () {
        // oCurrentController.ClearModel();
        // oModelWhsTranEditLines.refresh();
        // if (oWhsTransEditLot.LotScan.trim() == "") {
        //   return;
        // }
        // var oModelReq = new JSONModel();
        // var oScan = {};
        // oScan.Vsvendorid = "";
        // oScan.StrScan = oWhsTransEditLot.LotScan;
        // oScan.CompanyDBId = companyDBObject.CompanyDbName;
        // var oScanArr = [];
        // oScanArr.push(oScan)
        // var jObject = { Gs1Token: JSON.stringify(oScanArr) };
        // var psURL = this.WMSBaseURL();
        // oModelReq.loadData(psURL + '/api/Gs1/GS1SETUP', jObject, true, 'POST');
        // oModelReq.attachRequestCompleted(function (oEvent) {
        //   var data = oEvent.getSource();
        //   oTxtScan.focus();
        //   oModelWhsTranEditLines.refresh();
        //   if (data != null) {
        //     if (data.oData != null) {
        //       if (data.oData[0].Error != null) {
        //         oCurrentController.ShowMessageDialog(data.oData[0].Error, oCurrentController.MessageState.MessageStateError, "Error");
        //         oWhsTransEditLot.Item = "";
        //         oWhsTransEditLot.ITEMNAME = "";
        //         oWhsTransEditLot.Qty = oCurrentController.getFormatedValue(0);
        //         oWhsTransEditLot.Lot = "";
        //         olblQtyOnhand.setValue("");
        //         oWhsTransEditLot.UOM = "";
        //         oWhsTransEditLot.FromBin = "";
        //         oWhsTransEditLot.ToBin = "";
        //         oWhsTransEditLot.refresh();
        //         oTxtScan.focus();
        //         return;
        //       }
        //       for (var i = 0; i < data.oData.length; i++) {
        //         if (data.oData[i].Key == 'ItemCode') {
        //           oWhsTransEditLot.ItemCode = data.oData[i].Value;
        //           oCurrentController.OnItemChange();
        //           oTxtScan.focus();
        //           oModelWhsTranEditLines.refresh();
        //         }
        //         if (data.oData[i].Key == '10' || data.oData[i].Key == '21' || data.oData[i].Key == '23') {
        //           oWhsTransEditLot.Lot = data.oData[i].Value;
        //           oModelWhsTranEditLines.refresh();
        //           oCurrentController.OnLotChange();
        //           oTxtScan.focus();
        //           oModelWhsTranEditLines.refresh();
        //         }
        //       }
        //     }
        //   }
        //   oWhsTransEditLot.LotScan = ""
        //   oModelWhsTranEditLines.refresh();
        // });
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

module.exports = "<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"whsView\">\r\n  <form class=\"form-with-fix-btnBar\">\r\n    <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n      <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n        {{'WarehouseTransfer'|translate}}\r\n      </h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'FromWhse'|translate}}</label>\r\n            <div class=\"col-sm-9\">\r\n              <input id=\"fromWhse\" name=\"fromWhse\" [(ngModel)]=\"fromWhse\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'FromWhse'|translate}}\"\r\n                disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ToWhse'|translate}}</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"input-group input-group-sm\">\r\n                <input type=\"text\" name=\"toWhse\" [(ngModel)]=\"toWhse\" class=\"form-control form-control-sm\" placeholder=\"{{'ToWhse'|translate}}\"\r\n                  (blur)=\"OnToWarehouseChange()\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getToWhse()\">\r\n                    <i class=\"opti-icon-hammenu\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row fix-footer-btnBar\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <hr />\r\n      </div>\r\n      <div class=\"col-sm-12 col-12\">\r\n        <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\">\r\n          <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n        <!-- <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" (click)=\"listClick($event, 'binTransfer')\" roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button> -->\r\n        <button type=\"button\" *ngIf=\"showNext\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" (click)=\"viewSwitch()\">\r\n          <i class=\"opti-icon-arrow-next\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<app-bin-transfer *ngIf=\"!whsView\" [fromScreen]='fromScreen' (cancelevent)=\"binCancelEvent($event)\"></app-bin-transfer>\r\n<span [hidden]=\"showLookupLoader\">\r\n  <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n  <div class=\"opti_spinner\"></div>\r\n</div>"

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
            this.toastr.error('', this.translate.instant("ToWhsBlankErrMsg"));
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
            this.toastr.error('', this.translate.instant("FrmnToNotSame"));
        }
    };
    WhsTransferComponent.prototype.viewSwitch = function () {
        if (this.toWhse == "" || this.toWhse == undefined) {
            this.toastr.error('', this.translate.instant("ToWhsBlankErrMsg"));
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
        // UI operations
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].manageNavigationPanel(document.getElementById('sidebarCollapse'));
    };
    PortalHomeComponent.prototype.onResize = function (event) {
        // UI operations   
        this.isMobile = _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].isMobile();
        _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_2__["UIHelper"].manageNavigationPanel(document.getElementById('sidebarCollapse'));
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
/* harmony import */ var _common_theme_manager_theme_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/theme-manager/theme-manager.component */ "./src/app/common/theme-manager/theme-manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var _inventory_transfer_inventory_transfer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../inventory-transfer/inventory-transfer.module */ "./src/app/inventory-transfer/inventory-transfer.module.ts");
/* harmony import */ var _inbound_inbound_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../inbound/inbound.module */ "./src/app/inbound/inbound.module.ts");
/* harmony import */ var _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../outbound/outbound.module */ "./src/app/outbound/outbound.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../change-warehouse/change-warehouse.component */ "./src/app/change-warehouse/change-warehouse.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
















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
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_13__["AngularSvgIconModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_16__["TrnaslateLazyModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownsModule"],
                // Angular
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                _inbound_inbound_module__WEBPACK_IMPORTED_MODULE_18__["InboundModule"],
                _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_19__["OutboundModule"],
                _inventory_transfer_inventory_transfer_module__WEBPACK_IMPORTED_MODULE_17__["InventoryTransferModule"]
            ],
            declarations: [_portal_home_component__WEBPACK_IMPORTED_MODULE_7__["PortalHomeComponent"], _portal_left_portal_left_component__WEBPACK_IMPORTED_MODULE_4__["PortalLeftComponent"], _portal_right_portal_right_component__WEBPACK_IMPORTED_MODULE_5__["PortalRightComponent"], _portal_top_portal_top_component__WEBPACK_IMPORTED_MODULE_6__["PortalTopComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _common_theme_manager_theme_manager_component__WEBPACK_IMPORTED_MODULE_9__["ThemeManagerComponent"], _change_warehouse_change_warehouse_component__WEBPACK_IMPORTED_MODULE_21__["ChangeWarehouseComponent"]],
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

module.exports = "<!-- left panel start -->\r\n<section id=\"opti_LeftPanelID\" class=\"position-relative\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center opti_vertical-align opti_device-logo-outer\">\r\n                <!-- logo -->\r\n                <section class=\"opti_logo opti_device-logo text-primary\">\r\n                    <!-- <img src=\"assets/images/logo/large-logo.png\" alt=\"Large Logo\" class=\"opti_large-logo opti_mouse-pointer\" />\r\n                    <img src=\"assets/images/logo/small-logo.png\" alt=\"Logo\" class=\"opti_small-logo opti_mouse-pointer\" /> -->\r\n                    <i class=\"opti-icon-wms-logo opti_dashboard-icon text-primary\"></i> WMS\r\n                </section>\r\n                <div id=\"sidebarCollapse-alt\" class=\"opti_vertical-align\">\r\n                    <i class=\"opti-icon-left-arrow opti_mobile-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"opti_left-navigation position-relative\" [perfectScrollbar]=\"\">\r\n        <ul class=\"opti_left-nav-ul\">\r\n            <!-- <li (click)=\"listClick($event, 'dashboard')\" [ngClass]=\"{'active': selectedItem == 'dashboard'}\">\r\n                <a roterLink=\"dashboard\">\r\n                    <i class=\"opti-icon-dashboard\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">Dashboard</span>\r\n                </a>\r\n            </li> -->\r\n\r\n            <li id=\"PUR\" (click)=\"listClick($event, 'inbound')\" [ngClass]=\"{'active': selectedItem == 'inbound'}\">\r\n                <a roterLink=\"inbound\" (click)=\"onInboundClick()\">\r\n                    <i class=\"opti-icon-inbound-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Inbound'|translate}}</span>\r\n                </a>\r\n            </li>\r\n\r\n            <li id=\"SLS\" (click)=\"listClick($event, 'outbound')\" [ngClass]=\"{'active': selectedItem == 'outbound'}\">\r\n                <a roterLink=\"outbound\" (click)=\"onOutboundClick()\">\r\n                    <i class=\"opti-icon-outbound-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Outbound'|translate}}</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\" >\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-inventory-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'InventoryTransfer'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                    <!-- <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'inventory-transfer/whsTransfer')\" > -->\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'whsTransfer')\" >\r\n                        <a class=\"dropdown-item\" roterLink=\"whsTransfer\">\r\n                            <i class=\"opti-icon-warehouse-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'WarehouseTransfer'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <!-- <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'inventory-transfer/binTransfer')\" > -->\r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'binTransfer')\" >\r\n                        <a class=\"dropdown-item\" roterLink=\"binTransfer\" (click)=\"binClick()\">\r\n                            <i class=\"opti-icon-bin-transfer\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'BinTransfer'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-notes\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'AdjustmentsCounting'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'adjustment-counting/physical-count')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"physical-count\">\r\n                            <i class=\"opti-icon-time\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'PhysicalCount'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-factory\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'Production'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">                    \r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'production/production-issue')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"issue\">\r\n                            <i class=\"opti-icon-issue\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'IssueForProduction'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'production/production-receipt')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"receipt\">\r\n                            <i class=\"opti-icon-customer-purchase-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'ReceiptFromProduction'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown\" dropdown id=\"INV\">\r\n                <a dropdownToggle class=\"dropdown-toggle\">\r\n                    <i class=\"opti-icon-printer\" [style.color]=\"selectedThemeColor\"></i>\r\n                    <span class=\"text\">{{'LabelPrintingandReports'|translate}}</span>\r\n                </a>\r\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">                    \r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/item-label')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"item-label\">\r\n                            <i class=\"opti-icon-issue\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'ItemLabel'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15108\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/bin-label')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"bin-label\">\r\n                            <i class=\"opti-icon-sales-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'BinLabel'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li id=\"15109\" role=\"menuitem\" (click)=\"listClick($event, 'printing-label/inventory-enquiry')\">\r\n                        <a class=\"dropdown-item\" roterLink=\"inventory-enquiry\">\r\n                            <i class=\"opti-icon-sales-order\" [style.color]=\"selectedThemeColor\"></i>\r\n                            <span class=\"text\">{{'InventoryEnquiry'|translate}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n\r\n    </section>\r\n\r\n    <section id=\"opti_LeftPanelFooterLogo\">\r\n        <img src=\"assets/images/logo/poweredbylogo.svg\" alt=\"powered logo\">\r\n    </section>\r\n\r\n\r\n</section>\r\n<!-- left panel end -->\r\n\r\n<!-- <a routerLink='dashboard'>Dashboard</a><br>\r\n<a routerLink='purchaseinquiry'> Purchase Inquery</a> -->"

/***/ }),

/***/ "./src/app/portal-home/portal-left/portal-left.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/portal-home/portal-left/portal-left.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n.opti_left-nav-ul {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #F8F8F8; }\n.opti_left-nav-ul > li {\n    list-style: none;\n    padding: 10px 10px;\n    background-color: #F8F8F8;\n    border-bottom: 1px solid rgba(120, 130, 140, 0.13);\n    cursor: pointer; }\n.opti_left-nav-ul > li > a {\n      color: #333;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n.opti_left-nav-ul > li > a:hover {\n        text-decoration: none;\n        color: #333; }\n.opti_left-nav-ul > li > a span.text {\n        align-self: center;\n        justify-self: flex-start;\n        display: flex;\n        flex: 1;\n        font-size: 12px; }\n.opti_left-nav-ul > li > a i {\n        font-size: 28px; }\n.opti_left-nav-ul > li:first-child {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n.opti_left-nav-ul > li:last-child {\n      border-bottom: none; }\n.opti_left-nav-ul > li.dropdown {\n      position: static;\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n      z-index: 0; }\n.opti_left-nav-ul > li.dropdown > a.dropdown-toggle {\n        padding: 10px 10px; }\n.opti_left-nav-ul > li.dropdown > a.dropdown-toggle:after {\n          font-family: \"OptiProErp\";\n          content: \"\\e936\";\n          border: none;\n          display: flex;\n          align-self: center;\n          justify-self: flex-end;\n          justify-content: flex-end;\n          font-size: 10px;\n          width: 10px;\n          height: 9px;\n          margin: 0 0 0 5px;\n          line-height: 9px;\n          transition: all 300ms ease-in-out; }\n.opti_left-nav-ul > li.dropdown.open:hover {\n        background-color: transparent !important; }\n.opti_left-nav-ul > li.dropdown.open > a {\n        background-color: var(--kendo-light-primary-hover-color); }\n.opti_left-nav-ul > li.dropdown.open > a.dropdown-toggle:after {\n        -webkit-transform: rotateX(180deg);\n                transform: rotateX(180deg); }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu {\n        margin: 0;\n        padding: 0;\n        border: none;\n        border-radius: 0;\n        position: static;\n        z-index: 0;\n        box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.2); }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a {\n          padding: 10px 15px 10px 25px;\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          font-size: 12px; }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a:hover {\n            background-color: transparent; }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu > li > a i {\n            font-size: 28px; }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active {\n          background-color: var(--kendo-light-primary-hover-color); }\n.opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover a, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li:hover a:hover, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active a, .opti_left-nav-ul > li.dropdown > .dropdown-menu > li.active a:hover {\n            background-color: rgba(255, 255, 255, 0.5); }\n.opti_left-navigation > ul li span {\n  margin-left: 10px; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul {\n  min-width: initial; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a {\n    justify-content: center; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a.dropdown-toggle {\n    padding: 15px 5px 15px 10px; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li > ul.dropdown-menu {\n    min-width: initial; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li > ul.dropdown-menu > li a {\n      padding: 10px 15px;\n      justify-content: center; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li a.dropdown-toggle:after {\n    font-size: 8px;\n    width: 8px;\n    line-height: 8px; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li img {\n    width: 100%; }\n#opti_LeftPanelID.opti_sidebar-minimize .opti_left-navigation > ul > li span.text {\n    display: none; }\n.opti_sidebar-minimize ul li {\n  max-width: 80px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n.opti_logo.opti_vertical-align {\n  max-height: 65px;\n  max-width: 100%;\n  height: auto;\n  width: auto; }\n.opti_sidebar-minimize .opti_logo .opti_large-logo {\n  display: none; }\n.opti_sidebar-minimize .opti_logo .opti_small-logo {\n  display: block; }\n.opti_logo .opti_large-logo {\n  display: block; }\n.opti_logo .opti_small-logo {\n  display: none; }\n.opti_device-logo-outer {\n  max-height: 65px;\n  overflow: hidden;\n  height: 65px;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n.opti_device-logo-outer .opti_logo.opti_device-logo {\n    flex: 1;\n    font-size: 27px;\n    font-weight: 800; }\n.opti_device-logo-outer #sidebarCollapse-alt {\n    display: none; }\n@media screen and (max-width: 767px) {\n      .opti_device-logo-outer #sidebarCollapse-alt {\n        display: block; } }\n.opti_device-logo-outer #sidebarCollapse-alt i {\n      font-size: 24px; }\n.opti_sidebar-minimize .opti_logo.opti_device-logo {\n  font-size: 25px;\n  line-height: 22px; }\n.opti_device-logo {\n  max-height: 100%; }\n.opti_device-logo img {\n    height: auto;\n    width: auto;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    max-width: 100%;\n    max-height: 100%;\n    margin: 0 auto; }\n@media screen and (max-width: 479px) {\n      .opti_device-logo img {\n        padding: 0; } }\n#opti_LeftPanelFooterLogo {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  align-items: center;\n  justify-items: flex-end;\n  justify-content: center; }\n#opti_LeftPanelFooterLogo img {\n    width: 60%; }\n@media screen and (max-width: 479px) {\n      #opti_LeftPanelFooterLogo img {\n        width: auto;\n        height: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLWxlZnQvRDpcXEFua3VyXFxXTVNcXE5ld1dNU0Nsb25lMlxcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9iYXNlLnNjc3MiLCJzcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1sZWZ0L0Q6XFxBbmt1clxcV01TXFxOZXdXTVNDbG9uZTJcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFwcFxccG9ydGFsLWhvbWVcXHBvcnRhbC1sZWZ0XFxwb3J0YWwtbGVmdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxtRUFBWTtBQXVGWjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0FBSWQ7RUFDSSxhQUFhLEVBQUE7QUNqSGpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkRPbUIsRUFBQTtBQ1Z2QjtJQUtRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJER2U7SUNGZixrRERHc0M7SUNGdEMsZUFBZSxFQUFBO0FBVHZCO01BV1ksV0RDSztNQ0FMLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCLEVBQUE7QUFkdkM7UUFnQmdCLHFCQUFxQjtRQUNyQixXREpBLEVBQUE7QUNiaEI7UUFvQmdCLGtCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLE9BQU87UUFDUCxlQUFlLEVBQUE7QUF4Qi9CO1FBbUNnQixlQUFlLEVBQUE7QUFuQy9CO01BdUNZLDJCQUEyQjtNQUMzQiw0QkFBNEIsRUFBQTtBQXhDeEM7TUEyQ1ksbUJBQW1CLEVBQUE7QUEzQy9CO01BOENZLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixVQUFVLEVBQUE7QUFsRHRCO1FBb0RnQixrQkFBa0IsRUFBQTtBQXBEbEM7VUF1RG9CLHlCQUF5QjtVQUN6QixnQkFBZ0I7VUFDaEIsWUFBWTtVQUNaLGFBQWE7VUFDYixrQkFBa0I7VUFDbEIsc0JBQXNCO1VBQ3RCLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsV0FBVztVQUNYLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsZ0JBQWdCO1VBQ2hCLGlDQUFpQyxFQUFBO0FBbkVyRDtRQXdFb0Isd0NBQXdDLEVBQUE7QUF4RTVEO1FBMkVvQix3REFBd0QsRUFBQTtBQTNFNUU7UUE4RW9CLGtDQUEwQjtnQkFBMUIsMEJBQTBCLEVBQUE7QUE5RTlDO1FBa0ZnQixTQUFTO1FBQ1QsVUFBK0g7UUFDL0gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLG9EQUFpRCxFQUFBO0FBeEZqRTtVQTRGd0IsNEJBQTRCO1VBQzVCLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsMkJBQTJCO1VBQzNCLGVBQWUsRUFBQTtBQWhHdkM7WUFrRzRCLDZCQUE2QixFQUFBO0FBbEd6RDtZQXFHNEIsZUFBZSxFQUFBO0FBckczQztVQXlHd0Isd0RBQXdELEVBQUE7QUF6R2hGO1lBMkc0QiwwQ0FBdUMsRUFBQTtBQVNuRTtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBR1ksa0JBQWtCLEVBQUE7QUFIOUI7SUFNb0IsdUJBQXVCLEVBQUE7QUFOM0M7SUFTb0IsMkJBQTJCLEVBQUE7QUFUL0M7SUFZb0Isa0JBQWtCLEVBQUE7QUFadEM7TUFjd0Isa0JBQWtCO01BQ2xCLHVCQUF1QixFQUFBO0FBZi9DO0lBb0J3QixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0FBdEJ4QztJQTBCb0IsV0FBVyxFQUFBO0FBMUIvQjtJQTZCb0IsYUFBYSxFQUFBO0FBUWpDO0VEMUlJLGVDNkk4QjtFRDVJOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUMySWYsa0JBQWtCLEVBQUE7QUFPOUI7RUFDSSxnQkRqS2dCO0VDa0toQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUlmO0VBR1ksYUFBYSxFQUFBO0FBSHpCO0VBTVksY0FBYyxFQUFBO0FBTTFCO0VBRVEsY0FBYyxFQUFBO0FBRnRCO0VBS1EsYUFBYSxFQUFBO0FBS3JCO0VBQ0ksZ0JEL0xnQjtFQ2dNaEIsZ0JBQWdCO0VBQ2hCLFlEak1nQjtFQ2tNaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtBQU52QjtJQVFRLE9BQU07SUFDTixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUFWeEI7SUFhUSxhQUFhLEVBQUE7QUFDYjtNQWRSO1FBZVksY0FBYyxFQUFBLEVBS3JCO0FBcEJMO01Ba0JZLGVBQWUsRUFBQTtBQU8zQjtFQUVRLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtBQUd6QjtFQUVJLGdCQUFnQixFQUFBO0FBRnBCO0lBUVEsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0FBQ2Q7TUFmUjtRQWdCWSxVQUNKLEVBQUEsRUFDSDtBQUtMO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTtBQU4zQjtJQVFRLFVBQVUsRUFBQTtBQUNWO01BVFI7UUFVWSxXQUFVO1FBQ1YsWUFBVyxFQUFBLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLWxlZnQvcG9ydGFsLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAnKTtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJyk7XHJcblxyXG4vLyBpbXBvcnRzIGZvciBhbGwgbWl4aW5zICsgZ2xvYmFsIHByb2plY3QgdmFyaWFibGVzXHJcbi8vIEBpbXBvcnQgJ190eXBvZ3JhcGh5JztcclxuLy8gQGltcG9ydCAnX2J1dHRvbic7XHJcbi8vIEBpbXBvcnQgJ19ncmlkJztcclxuXHJcbi8vIFNvbWUgQmFzaWMgVmFyaWFibGVcclxuJHdoaXRlIDogI2ZmZjtcclxuJGVycm9yIDogI0Q0NzQ3NDtcclxuJHRvcC1iYXItaGVpZ2h0OjY1cHg7XHJcbiRsaXN0LWhvdmVyLWJnLWNvbG9yOiAjZjJmNGY4O1xyXG4kbGlzdC1iZy1jb2xvcjogI0Y4RjhGODtcclxuJGxpc3Qtc2VwcmF0b3ItY29sb3I6cmdiYSgxMjAsIDEzMCwgMTQwLCAwLjEzKTtcclxuJGxpZ2h0LWJsYWNrOiMzMzM7XHJcbiRkYXJrLWJsYWNrOiMzMzM7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6cmdiYSgzMywgMzcsIDQxLCAwLjE1KTtcclxuJHRoZW1lRm9yQWNjb3VudFNlY3Rpb246IzFmYTJmZjtcclxuXHJcbi8vIFRydW5jYXRlXHJcbkBtaXhpbiB0cnVuY2F0ZSgkdHJ1bmNhdGlvbi1ib3VuZGFyeSkge1xyXG4gICAgbWF4LXdpZHRoOiAkdHJ1bmNhdGlvbi1ib3VuZGFyeTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi8vIGZvbnQgc2l6ZVxyXG4kZm9udC1mYW1pbHktbGF0bzogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4vLyRmb250LWZhbWlseS1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5AbWl4aW4gZm9udCgkc2l6ZTogZmFsc2UsICR3ZWlnaHQ6IGZhbHNlLCAgJGxoOiBmYWxzZSkge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1sYXRvOyBcclxuICAgIEBpZiAkc2l6ZSB7IGZvbnQtc2l6ZTogJHNpemU7IH1cclxuICAgIEBpZiAkd2VpZ2h0IHsgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7IH1cclxuICAgIEBpZiAkbGggeyBsaW5lLWhlaWdodDogJGxoOyB9XHJcbn1cclxuXHJcbi8vIHBzZXVkb1xyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJyl7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbi8vIFRvIHF1aWNrbHkgY2VudHJlIGEgYmxvY2sgZWxlbWVudFxyXG5AbWl4aW4gcHVzaC0tYXV0byB7XHJcbiAgICBtYXJnaW46IHsgXHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLy8gYm9yZGVyIHJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgfVxyXG5cclxuIC8vIG1hcmdpblxyXG5AbWl4aW4gbWFyZ2luKCR0b3A6IGZhbHNlLCAkcmlnaHQ6IGZhbHNlLCAkYm90dG9tOiBmYWxzZSwgICRsZWZ0OiBmYWxzZSkge1xyXG4gICAgQGlmICRib3R0b20ge21hcmdpbi1ib3R0b206ICRib3R0b207fVxyXG4gICAgQGlmICRyaWdodCAgIHttYXJnaW4tcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHttYXJnaW4tbGVmdDogJGxlZnQ7fVxyXG4gICAgQGlmICR0b3AgICAgICAge21hcmdpbi10b3A6ICR0b3A7fVxyXG4gfVxyXG5cclxuIC8vIHBhZGRpbmdcclxuQG1peGluIHBhZGRpbmcoJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7cGFkZGluZy1ib3R0b206ICRib3R0b207fVxyXG4gICAgQGlmICRyaWdodCAgIHtwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7fVxyXG4gICAgQGlmICRsZWZ0ICAgICB7cGFkZGluZy1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7cGFkZGluZy10b3A6ICR0b3A7fVxyXG4gfVxyXG5cclxuIC8vIFRydW5jYXRlXHJcbkBtaXhpbiBwYXNzd29yZC1tZy1pbmRpY2F0b3IoJHdpZHRoOiBmYWxzZSwgJGNvbG9yOiBmYWxzZSkge1xyXG4gICAgQGlmICR3aWR0aCB7d2lkdGg6ICR3aWR0aDt9XHJcbiAgICBAaWYgJGNvbG9yIHtiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7fVxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDJzOyAvKiBGb3IgU2FmYXJpIDMuMSB0byA2LjAgKi9cclxuICAgIHRyYW5zaXRpb246IDJzO1xyXG59XHJcblxyXG4vLyBBbGlnbiBWZXJ0aWNhbGx5XHJcbi5vcHRpX3RhYmxlLXYtbWlkZGxle1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5vcHRpX3RhYmxlLWNlbGwtdi1taWRkbGV7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5vcHRpX3ZlcnRpY2FsLWFsaWdue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIExpbmUgU2VwcmF0b3JcclxuLm9wdGlfc2VwcmF0b3J7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1zZXByYXRvci1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIEhpZGUgZWxlbWVudCBJbiBEZXNrdG9wIEFuZCBJcGFkXHJcbi5vcHRpX2hpZGUtaW4tZGVza3RvcC1pcGFke1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvY3NzL19iYXNlJztcclxuLy8gMS4gQ3NzIFN0YXJ0IFJlbGF0ZWQgdG8gbGVmdCBwYW5lbCBtZW51IGxpc3RpbmdcclxuLy8gMi4gQ1NTIFN0YXJ0ICBSZWxhdGVkIFRvIExvZ29cclxuLy8gMS4gQ3NzIFN0YXJ0IFJlbGF0ZWQgdG8gbGVmdCBwYW5lbCBtZW51IGxpc3RpbmcgLy9cclxuLm9wdGlfbGVmdC1uYXYtdWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1iZy1jb2xvcjtcclxuICAgID4gbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWJnLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1zZXByYXRvci1jb2xvcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsaWdodC1ibGFjaztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyay1ibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuLnRleHR7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaW1ne1xyXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBzdmctaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgJiA+IGEuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3B0aVByb0VycFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM2XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5vcGVue1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPiBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtlbmRvLWxpZ2h0LXByaW1hcnktaG92ZXItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJiA+IGEuZHJvcGRvd24tdG9nZ2xlOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiA+IC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAgICAgICAmID4gbGl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYgPiBheyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtlbmRvLWxpZ2h0LXByaW1hcnktaG92ZXItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLCBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm9wdGlfbGVmdC1uYXZpZ2F0aW9uPnVsIGxpIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiNvcHRpX0xlZnRQYW5lbElELm9wdGlfc2lkZWJhci1taW5pbWl6ZSB7XHJcbiAgICAub3B0aV9sZWZ0LW5hdmlnYXRpb24ge1xyXG4gICAgICAgID51bCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCA1cHggMTVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJiA+IHVsLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICYgPiBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElmIGxlZnQgU2lkZWJhciBpcyBNaW5pbWl6ZVxyXG4ub3B0aV9zaWRlYmFyLW1pbmltaXplIHtcclxuICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRydW5jYXRlKDgwcHgpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFbmQgQ3NzIFJlbGF0ZWQgdG8gbGVmdCBwYW5lbCBtZW51IGxpc3RpbmcgLy8gICAgICAgIFxyXG4vLyAyLiBDU1MgU3RhcnQgIFJlbGF0ZWQgVG8gTG9nbyAvL1xyXG4ub3B0aV9sb2dvLm9wdGlfdmVydGljYWwtYWxpZ24ge1xyXG4gICAgbWF4LWhlaWdodDogJHRvcC1iYXItaGVpZ2h0O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi8vIGlmIGxlZnQgcGFuZWwgY2xvc2VcclxuLm9wdGlfc2lkZWJhci1taW5pbWl6ZSB7XHJcbiAgICAub3B0aV9sb2dvIHtcclxuICAgICAgICAub3B0aV9sYXJnZS1sb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfc21hbGwtbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaWYgbGVmdCBwYW5lbCBvcGVuXHJcbi5vcHRpX2xvZ28ge1xyXG4gICAgLm9wdGlfbGFyZ2UtbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAub3B0aV9zbWFsbC1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDc3MgUmVsYXRlZCBUbyBEZXNrdG9wIGFuZCBJcGFkIExvZ29cclxuLm9wdGlfZGV2aWNlLWxvZ28tb3V0ZXIge1xyXG4gICAgbWF4LWhlaWdodDogJHRvcC1iYXItaGVpZ2h0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogJHRvcC1iYXItaGVpZ2h0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm9wdGlfbG9nby5vcHRpX2RldmljZS1sb2dve1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgICNzaWRlYmFyQ29sbGFwc2UtYWx0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NzlweCl7XHJcbiAgICAgICAgLy9oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodCAtIDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLm9wdGlfc2lkZWJhci1taW5pbWl6ZXtcclxuICAgICYgLm9wdGlfbG9nby5vcHRpX2RldmljZS1sb2dve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxufVxyXG4ub3B0aV9kZXZpY2UtbG9nbyB7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jazsgICBcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NzlweCl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ1NTIEVuZCAgUmVsYXRlZCBUbyBMb2dvIC8vICAgICAgIFxyXG4vLyBwb3dlcmVkIGJ5IGxvZ29cclxuI29wdGlfTGVmdFBhbmVsRm9vdGVyTG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDc5cHgpe1xyXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<section id=\"opti_TopBarID\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- this logo only for mobile -->\r\n                <!-- <div class=\"opti_icon-spacing float-left opti_mobile-logo opti_vertical-align\"><img src=\"assets/images/logo/mobile-logo.png\" alt=\"Logo\" class=\"opti_small-logo opti_mouse-pointer\" /></div> -->\r\n                <!-- ebd this logo only for mobile -->\r\n\r\n                <div id=\"sidebarCollapse\" class=\"opti_vertical-align float-left\">\r\n                    <!-- hamburger and close icon -->\r\n                    <i class=\"opti-icon-left-arrow opti_desktop-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                    <i class=\"opti-icon-hammenu opti_desktop-menu-icon opti_mouse-pointer opti_hamburger\"></i>\r\n                    <i class=\"opti-icon-left-arrow opti_mobile-menu-icon opti_mouse-pointer opti_backarrow\"></i>\r\n                    <i class=\"opti-icon-hammenu opti_mobile-menu-icon opti_mouse-pointer opti_hamburger\"></i>\r\n                </div>\r\n\r\n                <!-- Top Right Section -->\r\n                <div class=\"opti_topbar-rightpanel float-right\">\r\n                    <div class=\"opti_vertical-align\">\r\n                        <ul class=\"d-inline-flex\">\r\n                            <!-- <li class=\"opti_icon-spacing\"> -->\r\n\r\n                                <!-- search for desktop and ipad -->\r\n                                <!-- <div class=\"opti_search-form opti_hide-in-mobile\">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                                    <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\"><img src=\"assets/images/common/search-black.svg\" class=\"\" alt=\"Search\" width=\"15\" /></span>\r\n                                </div> -->\r\n                                <!-- end search for desktop and ipad -->\r\n\r\n                                <!-- search for mobile -->\r\n                                <!-- <div class=\"opti_search-form opti_hide-in-desktop-ipad \">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                                    <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\" (click)=\"openVerticallyCentered(mobileSearch)\"><img src=\"assets/images/common/search-white.svg\" class=\"\" alt=\"Search\" width=\"20\" height=\"30\" /></span>\r\n                                </div> -->\r\n                                <!-- end search for mobile -->\r\n\r\n                            <!-- </li> -->\r\n\r\n                            <!-- <li class=\"opti_icon-spacing\">\r\n                            <img src=\"assets/images/common/settings.svg\" (click)=\"openCloseRightPanel();\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                        </li> -->\r\n\r\n                            <!-- if notifications not  avialble -->\r\n                            <!-- <li class=\"opti_icon-spacing\">\r\n                            <img src=\"assets/images/common/notifications-button.svg\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                        </li> -->\r\n\r\n                            <!-- if notifications avialble -->\r\n                            <!-- <li class=\"opti_icon-spacing position-relative\" dropdown>\r\n                                <span dropdownToggle class=\"dropdown-toggle opti_mouse-pointer\">\r\n                                <img src=\"assets/images/common/notifications-button.svg\" class=\"float-left opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                                <span class=\"opt_topbar-count\">99+</span>\r\n                                </span>\r\n                                <div class=\"dropdown-menu opti_notification-drop-down\" *dropdownMenu [perfectScrollbar]=\"\">\r\n                                    <ul class=\"opti_liststyle-one-ul\">\r\n                                        <li class=\"opti_mouse-pointer opti_liststyle-one-li\" *ngFor='let i of [1,2,3,4,5,6]'>\r\n                                            <div class=\"opti_liststyle-one-image\">\r\n                                                <img src=\"assets/images/common/user-avatar.png\" width=\"30\" height=\"30\" alt=\"img\" />\r\n                                            </div>\r\n                                            <div class=\"opti_liststyle-one-text\">\r\n                                                <h5>Peter</h5>\r\n                                                <p>purchase request has been created by samsung</p>\r\n                                                <p class=\"opti_date\">May 30, 2018 8:02 AM</p>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li> -->\r\n\r\n                            <li class=\"opti_icon-spacing opti_user-profile position-relative\" dropdown>\r\n                                <a dropdownToggle class=\"dropdown-toggle\">\r\n                                    <img src=\"assets/images/common/user-avatar.png\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"User Profile\" width=\"30\" height=\"30\" />\r\n                                    <span>{{DBName}}</span>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu opti_user-profile-drop-down\" *dropdownMenu>\r\n                                    <!-- <li>\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"opti_profile-box\">\r\n                                                        <div class=\"opti_profile-box-img\">\r\n                                                            <img src=\"assets/images/common/user-avatar.png\" alt=\"user image\" width=\"80\"> \r\n                                                        </div>\r\n                                                        <div class=\"opti_profile-box-text opti_vertical-align\">\r\n                                                            <h5>{{loggedInUserName}}</h5>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li> -->\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-setting cursor-normal\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12 pl-2\">\r\n                                                    <img src=\"assets/images/common/user-avatar.png\" class=\"opti_mouse-pointer opti_theme-setting mr-1\" alt=\"User Profile\" width=\"30\" height=\"30\" /> {{loggedInUserName}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <!-- <li class=\"opti_mouse-pointer opti_profile-box-setting\" (click)=\"openCloseRightPanel();\"> -->\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-setting\" (click)=\"listClick($event, 'changeWarehouse')\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/settings-black.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'ChangeWarehouse'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-aboutus\" (click)=\"openVerticallyCentered(about)\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/about-us.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'About'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"opti_seprator\"></li>\r\n\r\n                                    <li class=\"opti_mouse-pointer opti_profile-box-logout\" (click)=\"signOut()\">\r\n                                        <div class=\"container-fluid\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <svg-icon src=\"assets/images/common/logout.svg\" [svgStyle]=\"{ 'width.px':20, 'height.px':20, 'fill':selectedThemeColor }\"></svg-icon>{{'Logout'|translate}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"opti_icon-spacing opti_warehouse_count\">\r\n                                <i class=\"opti-icon-home mr-2\"></i><span>{{loggedinWarehouse}}</span>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <!-- <div class=\"opti_vertical-align opt_top-bar-height opti_icon-spacing float-left\">\r\n                    <img src=\"assets/images/common/settings.svg\" (click)=\"themeSetting();\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"Theme Setting\" width=\"20\" height=\"30\" />\r\n                </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Theme setting -->\r\n<section id=\"opti_ThemeSettingID\" [ngClass]=\"{'opt_show': openThemeSetting==true}\">\r\n    <app-theme-manager (messageEvent)=receiverMessage($event)></app-theme-manager>\r\n</section>\r\n\r\n<!-- About us modal start -->\r\n<ng-template #about let-modal>\r\n    <!-- <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div> -->\r\n\r\n    <div class=\"modal-body text-center\" style=\"padding: 20px;\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <img src=\"assets/images/common/close-black.svg\" width=\"15\" />\r\n        </button>\r\n        <p></p>\r\n        <p>\r\n            <img src=\"assets/images/logo/large-logo-old.png\" alt=\"Large Logo\" class=\"opti_large-logo\" />\r\n        </p>\r\n        <p>Version {{applicationVersion}}</p>\r\n        <p>Copyright 2000-2018. All rights reserved.</p>\r\n    </div>\r\n\r\n    <!-- <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div> -->\r\n</ng-template>\r\n<!-- About us modal end -->\r\n\r\n<!-- Mobile search start -->\r\n<ng-template #mobileSearch let-modal>\r\n    <div class=\"modal-body opti_mobile-search-modal\">\r\n        <div class=\"opti_search-form\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <span class=\"opti_top-search-icon opti_vertical-align opti_mouse-pointer\" (click)=\"modal.dismiss('Cross click')\"><img src=\"assets/images/common/search-black.svg\" class=\"\" alt=\"Search\" width=\"15\" /></span>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<!-- mobile search end -->"

/***/ }),

/***/ "./src/app/portal-home/portal-top/portal-top.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portal-home/portal-top/portal-top.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n.opti_search-form {\n  background-color: #fff;\n  height: 30px;\n  border-radius: 5px; }\n.opti_search-form input {\n    width: calc(100% - 40px);\n    float: left;\n    background-color: transparent; }\n.opti_search-form input.form-control {\n      border: none; }\n#opti_TopBarID .opti_top-search-icon.opti_vertical-align {\n  height: 30px;\n  padding: 0 10px; }\n#sidebarCollapse.opti_vertical-align {\n  height: 65px; }\n#sidebarCollapse .opti_backarrow {\n  display: block; }\n#sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\n#sidebarCollapse .opti_hamburger {\n  display: none; }\n#opti_TopBarID .opti_vertical-align {\n  height: 45px; }\n#opti_TopBarID .opti_vertical-align > i {\n    font-size: 24px;\n    color: #fff; }\n@media screen and (max-width: 767px) {\n    #opti_TopBarID .opti_vertical-align {\n      height: 45px; } }\n#opti_TopBarID .opti_topbar-rightpanel ul li {\n  list-style: none; }\n#opti_TopBarID .opti_user-profile > a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: center; }\n#opti_TopBarID .opti_user-profile > a img {\n    border-radius: 50%; }\n#opti_TopBarID .opti_user-profile > a span {\n    color: #fff;\n    margin-left: 7px;\n    font-size: 14px;\n    font-weight: 700; }\n#opti_TopBarID .opti_user-profile .dropdown-toggle::after {\n  display: none; }\n#opti_TopBarID .opti_user-profile-drop-down {\n  right: 0 !important;\n  left: auto !important;\n  top: 36px !important;\n  width: 270px;\n  padding-bottom: 0; }\n#opti_TopBarID .opti_user-profile-drop-down img {\n    border: 0; }\n@media screen and (max-width: 767px) {\n    #opti_TopBarID .opti_user-profile-drop-down {\n      top: 36px !important; } }\n#opti_TopBarID .opti_profile-box {\n  height: 100%; }\n#opti_TopBarID .opti_profile-box .opti_profile-box-img {\n    float: left; }\n#opti_TopBarID .opti_profile-box .opti_profile-box-text {\n    float: left;\n    margin-left: 15px;\n    width: 140px;\n    max-height: 80px;\n    height: 100%; }\n#opti_TopBarID .opti_profile-box .opti_profile-box-text h5,\n    #opti_TopBarID .opti_profile-box .opti_profile-box-text p {\n      margin-bottom: 0; }\n#opti_TopBarID .opti_profile-box .opti_profile-para .btn {\n    border-radius: 60px;\n    margin-top: 3px;\n    margin-bottom: 4px; }\n#opti_TopBarID .opti_profile-box-logout svg-icon,\n#opti_TopBarID .opti_profile-box-help svg-icon,\n#opti_TopBarID .opti_profile-box-setting svg-icon,\n#opti_TopBarID .opti_profile-box-aboutus svg-icon {\n  margin-right: 10px; }\n#opti_TopBarID .opti_user-profile-drop-down li {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n#opti_TopBarID .opti_user-profile-drop-down li.opti_seprator {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n#opti_TopBarID .opt_topbar-count {\n  background: orange;\n  color: white;\n  font-size: 10px;\n  border-radius: 50%;\n  padding: 5px 3px;\n  position: relative;\n  top: -9px;\n  right: 3px;\n  width: 23px;\n  height: 23px;\n  text-align: center;\n  cursor: pointer; }\n#opti_ThemeSettingID {\n  position: fixed;\n  right: 0;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  height: calc(100% - 45px);\n  z-index: 999;\n  width: 200px;\n  display: none;\n  border-left: 2px solid #c7c7c7; }\n#opti_ThemeSettingID.opt_show {\n  display: block; }\n.opti_mobile-logo {\n  display: none; }\n.dropdown-toggle::after {\n  display: none; }\n.opti_notification-drop-down {\n  left: auto !important;\n  right: 13px !important;\n  top: 44px !important;\n  width: 357px;\n  height: auto;\n  overflow-y: auto;\n  max-height: 400px; }\n.dropdown-menu.opti_notification-drop-down.show {\n  padding: 0; }\n.opti_warehouse_count {\n  color: #fff;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  font-weight: 700; }\n.opti_warehouse_count span {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700; }\n.opti_warehouse_count i {\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLXRvcC9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2Jhc2Uuc2NzcyIsInNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLXRvcC9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXHBvcnRhbC1ob21lXFxwb3J0YWwtdG9wXFxwb3J0YWwtdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLG1FQUFZO0FBdUZaO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBSmhCO0lBTVEsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7QUFJbkI7RUFDSSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0FBSTNCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQ0FoRzBDO0VBaUcxQyxVQUFVLEVBQUE7QUFJZDtFQUNJLGFBQWEsRUFBQTtBQ3BIaEI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBSHRCO0lBTVEsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCw2QkFBNkIsRUFBQTtBQVJyQztNQVVZLFlBQVksRUFBQTtBQUt4QjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHbkI7RUFDSSxZRFZlLEVBQUE7QUNjbkI7RUFFUSxjQUFjLEVBQUE7QUFGdEI7RUFLUSxhQUFhLEVBQUE7QUFMckI7RUFRUSxhQUFhLEVBQUE7QUFLckI7RUFFTyxZQUE4QixFQUFBO0FBRnJDO0lBSVksZUFBZTtJQUNmLFdBQVcsRUFBQTtBQUVmO0lBUFI7TUFRVyxZQUE4QixFQUFBLEVBRXBDO0FBVkw7RUFjZ0IsZ0JBQWdCLEVBQUE7QUFkaEM7RUFvQlcsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7QUF2QmhDO0lBeUJZLGtCQUFrQixFQUFBO0FBekI5QjtJQTRCVyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtBQS9CM0I7RUFtQ1ksYUFBYSxFQUFBO0FBbkN6QjtFQXVDUSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUEzQ3pCO0lBNkNZLFNBQVMsRUFBQTtBQUViO0lBL0NSO01BZ0RXLG9CQUFtQixFQUFBLEVBRXpCO0FBbERMO0VBb0RRLFlBQVksRUFBQTtBQXBEcEI7SUFzRFksV0FBVyxFQUFBO0FBdER2QjtJQXlEWSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFLWixnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0FBakV4Qjs7TUE4RGdCLGdCQUFnQixFQUFBO0FBOURoQztJQW9FWSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0FBdEU5Qjs7OztFQWdGWSxrQkFBa0IsRUFBQTtBQWhGOUI7RUFvRlEsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0FBckY1QjtFQTJGUSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUE1RjNCO0VBZ0dRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBS3ZCO0VBQ0ksZUFBZTtFQUNmLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUdsQztFQUNJLGNBQWMsRUFBQTtBQUlsQjtFQUNJLGFBQWEsRUFBQTtBQUlqQjtFQUNJLGFBQWEsRUFBQTtBQUlqQjtFQUNJLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBSXJCO0VBQ0ksVUFBVSxFQUFBO0FBR2Q7RUFDRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFFbkI7RUFDRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBRW5CO0VBQ0csZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLXRvcC9wb3J0YWwtdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCcpO1xyXG5cclxuLy8gaW1wb3J0cyBmb3IgYWxsIG1peGlucyArIGdsb2JhbCBwcm9qZWN0IHZhcmlhYmxlc1xyXG4vLyBAaW1wb3J0ICdfdHlwb2dyYXBoeSc7XHJcbi8vIEBpbXBvcnQgJ19idXR0b24nO1xyXG4vLyBAaW1wb3J0ICdfZ3JpZCc7XHJcblxyXG4vLyBTb21lIEJhc2ljIFZhcmlhYmxlXHJcbiR3aGl0ZSA6ICNmZmY7XHJcbiRlcnJvciA6ICNENDc0NzQ7XHJcbiR0b3AtYmFyLWhlaWdodDo2NXB4O1xyXG4kbGlzdC1ob3Zlci1iZy1jb2xvcjogI2YyZjRmODtcclxuJGxpc3QtYmctY29sb3I6ICNGOEY4Rjg7XHJcbiRsaXN0LXNlcHJhdG9yLWNvbG9yOnJnYmEoMTIwLCAxMzAsIDE0MCwgMC4xMyk7XHJcbiRsaWdodC1ibGFjazojMzMzO1xyXG4kZGFyay1ibGFjazojMzMzO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOnJnYmEoMzMsIDM3LCA0MSwgMC4xNSk7XHJcbiR0aGVtZUZvckFjY291bnRTZWN0aW9uOiMxZmEyZmY7XHJcblxyXG4vLyBUcnVuY2F0ZVxyXG5AbWl4aW4gdHJ1bmNhdGUoJHRydW5jYXRpb24tYm91bmRhcnkpIHtcclxuICAgIG1heC13aWR0aDogJHRydW5jYXRpb24tYm91bmRhcnk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4vLyBmb250IHNpemVcclxuJGZvbnQtZmFtaWx5LWxhdG86ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuLy8kZm9udC1mYW1pbHktcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuQG1peGluIGZvbnQoJHNpemU6IGZhbHNlLCAkd2VpZ2h0OiBmYWxzZSwgICRsaDogZmFsc2UpIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbGF0bzsgXHJcbiAgICBAaWYgJHNpemUgeyBmb250LXNpemU6ICRzaXplOyB9XHJcbiAgICBAaWYgJHdlaWdodCB7IGZvbnQtd2VpZ2h0OiAkd2VpZ2h0OyB9XHJcbiAgICBAaWYgJGxoIHsgbGluZS1oZWlnaHQ6ICRsaDsgfVxyXG59XHJcblxyXG4vLyBwc2V1ZG9cclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpe1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG4vLyBUbyBxdWlja2x5IGNlbnRyZSBhIGJsb2NrIGVsZW1lbnRcclxuQG1peGluIHB1c2gtLWF1dG8ge1xyXG4gICAgbWFyZ2luOiB7IFxyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGJvcmRlciByYWRpdXNcclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIH1cclxuXHJcbiAvLyBtYXJnaW5cclxuQG1peGluIG1hcmdpbigkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHttYXJnaW4tYm90dG9tOiAkYm90dG9tO31cclxuICAgIEBpZiAkcmlnaHQgICB7bWFyZ2luLXJpZ2h0OiAkcmlnaHQ7fVxyXG4gICAgQGlmICRsZWZ0ICAgICB7bWFyZ2luLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHttYXJnaW4tdG9wOiAkdG9wO31cclxuIH1cclxuXHJcbiAvLyBwYWRkaW5nXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3A6IGZhbHNlLCAkcmlnaHQ6IGZhbHNlLCAkYm90dG9tOiBmYWxzZSwgICRsZWZ0OiBmYWxzZSkge1xyXG4gICAgQGlmICRib3R0b20ge3BhZGRpbmctYm90dG9tOiAkYm90dG9tO31cclxuICAgIEBpZiAkcmlnaHQgICB7cGFkZGluZy1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge3BhZGRpbmctbGVmdDogJGxlZnQ7fVxyXG4gICAgQGlmICR0b3AgICAgICAge3BhZGRpbmctdG9wOiAkdG9wO31cclxuIH1cclxuXHJcbiAvLyBUcnVuY2F0ZVxyXG5AbWl4aW4gcGFzc3dvcmQtbWctaW5kaWNhdG9yKCR3aWR0aDogZmFsc2UsICRjb2xvcjogZmFsc2UpIHtcclxuICAgIEBpZiAkd2lkdGgge3dpZHRoOiAkd2lkdGg7fVxyXG4gICAgQGlmICRjb2xvciB7YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO31cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyczsgLyogRm9yIFNhZmFyaSAzLjEgdG8gNi4wICovXHJcbiAgICB0cmFuc2l0aW9uOiAycztcclxufVxyXG5cclxuLy8gQWxpZ24gVmVydGljYWxseVxyXG4ub3B0aV90YWJsZS12LW1pZGRsZXtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAub3B0aV90YWJsZS1jZWxsLXYtbWlkZGxle1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4ub3B0aV92ZXJ0aWNhbC1hbGlnbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyBMaW5lIFNlcHJhdG9yXHJcbi5vcHRpX3NlcHJhdG9ye1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3Qtc2VwcmF0b3ItY29sb3I7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vLyBIaWRlIGVsZW1lbnQgSW4gRGVza3RvcCBBbmQgSXBhZFxyXG4ub3B0aV9oaWRlLWluLWRlc2t0b3AtaXBhZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9jc3MvX2Jhc2UnO1xyXG4gLm9wdGlfc2VhcmNoLWZvcm0ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICBpbnB1dCB7XHJcbiAgICAgICAgIC8vIHdpZHRoOiAxNzFweDtcclxuICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICYuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gI29wdGlfVG9wQmFySUQgLm9wdGlfdG9wLXNlYXJjaC1pY29uLm9wdGlfdmVydGljYWwtYWxpZ24ge1xyXG4gICAgIGhlaWdodDogMzBweDtcclxuICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiB9XHJcbiBcclxuICNzaWRlYmFyQ29sbGFwc2Uub3B0aV92ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgICAgaGVpZ2h0OiAkdG9wLWJhci1oZWlnaHQ7XHJcbiB9XHJcbiBcclxuIC8vIGlmIGxlZnQgcGFuZWwgb3BlblxyXG4gI3NpZGViYXJDb2xsYXBzZSB7XHJcbiAgICAgLm9wdGlfYmFja2Fycm93IHtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgfVxyXG4gICAgIC5vcHRpX21vYmlsZS1tZW51LWljb24ge1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuICAgICAub3B0aV9oYW1idXJnZXIge1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLy8gZW5kIGxlZnQgcGFuZWwgb3BlblxyXG4gI29wdGlfVG9wQmFySUQge1xyXG4gICAgIC5vcHRpX3ZlcnRpY2FsLWFsaWduIHtcclxuICAgICAgICBoZWlnaHQ6ICR0b3AtYmFyLWhlaWdodCAtIDIwcHg7XHJcbiAgICAgICAgICY+aSB7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkdG9wLWJhci1oZWlnaHQgLSAyMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC5vcHRpX3RvcGJhci1yaWdodHBhbmVsIHtcclxuICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLm9wdGlfdXNlci1wcm9maWxlIHtcclxuICAgICAgICAmID4gYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLm9wdGlfdXNlci1wcm9maWxlLWRyb3AtZG93biB7XHJcbiAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgICAgIHRvcDozNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAub3B0aV9wcm9maWxlLWJveCB7XHJcbiAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgLm9wdGlfcHJvZmlsZS1ib3gtaW1nIHtcclxuICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5vcHRpX3Byb2ZpbGUtYm94LXRleHQge1xyXG4gICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgIGg1LFxyXG4gICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLm9wdGlfcHJvZmlsZS1wYXJhIC5idG4ge1xyXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAub3B0aV9wcm9maWxlLWJveC1sb2dvdXQsXHJcbiAgICAgLm9wdGlfcHJvZmlsZS1ib3gtaGVscCxcclxuICAgICAub3B0aV9wcm9maWxlLWJveC1zZXR0aW5nLFxyXG4gICAgIC5vcHRpX3Byb2ZpbGUtYm94LWFib3V0dXMge1xyXG4gICAgICAgICBzdmctaWNvbiB7XHJcbiAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAvLyB0b3A6IDVweDtcclxuICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAub3B0aV91c2VyLXByb2ZpbGUtZHJvcC1kb3duIGxpIHtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAvLyAmLm9wdGlfbW91c2UtcG9pbnRlcjpob3ZlcntcclxuICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWhvdmVyLWJnLWNvbG9yO1xyXG4gICAgICAgICAvLyB9XHJcbiAgICAgfVxyXG4gICAgIC5vcHRpX3VzZXItcHJvZmlsZS1kcm9wLWRvd24gbGkub3B0aV9zZXByYXRvciB7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgfVxyXG4gICAgIC5vcHRfdG9wYmFyLWNvdW50IHtcclxuICAgICAgICAgLy8gTm90aWZpY2F0aW9uXHJcbiAgICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgcGFkZGluZzogNXB4IDNweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLy8gUmlnaHQgUGFuZWxcclxuICNvcHRpX1RoZW1lU2V0dGluZ0lEIHtcclxuICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgcmlnaHQ6IDA7XHJcbiAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzdjN2M3O1xyXG4gfVxyXG4gXHJcbiAjb3B0aV9UaGVtZVNldHRpbmdJRC5vcHRfc2hvdyB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcbiBcclxuIC8vIE1vYmlsZSBsb2dvXHJcbiAub3B0aV9tb2JpbGUtbG9nbyB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIFxyXG4gLy8gaGlkZSBkb3duIGFycm93IGZyb20gbW9iaWxlIHNlYXJjaFxyXG4gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiBcclxuIC8vIENzcyBSZWxhdGVkIHRvIE5vdGlmaWNhdGlvblxyXG4gLm9wdGlfbm90aWZpY2F0aW9uLWRyb3AtZG93biB7XHJcbiAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgdG9wOiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDM1N3B4O1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgIFxyXG4gfVxyXG4gXHJcbiAuZHJvcGRvd24tbWVudS5vcHRpX25vdGlmaWNhdGlvbi1kcm9wLWRvd24uc2hvdyB7XHJcbiAgICAgcGFkZGluZzogMDtcclxuIH1cclxuXHJcbiAub3B0aV93YXJlaG91c2VfY291bnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiB9XHJcbiAub3B0aV93YXJlaG91c2VfY291bnQgc3BhbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuIH1cclxuIC5vcHRpX3dhcmVob3VzZV9jb3VudCBpe1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gfSJdfQ== */"

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
    PortalTopComponent.prototype.signOut = function () {
        // this.toastr.success('', message, this.toast_config);
        // // let login_page = this.common_params.application_path + '/index.html#login';
        // sessionStorage.removeItem('isLoggedIn');
        // sessionStorage.removeItem('selectedComp');
        // sessionStorage.removeItem('loggedInUser');
        // sessionStorage.removeItem('ConfigData');
        // localStorage.removeItem('CompID');
        // localStorage.removeItem('GUID');
        // localStorage.removeItem('Token');
        // localStorage.removeItem('UserId');
        // localStorage.removeItem('whseId');
        // this.router.navigateByUrl('/account');    
        this.commonService.RemoveLicenseAndSignout(this.toastr, this.router, this.translate.instant("CommonSessionExpireMsg"));
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