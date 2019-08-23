(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/ngx-bootstrap/tooltip/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/index.js ***!
  \*****************************************************/
/*! exports provided: TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return _tooltip_container_component__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]; });

/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.directive */ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"]; });

/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.module */ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _tooltip_module__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]; });

/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js ***!
  \***************************************************************************/
/*! exports provided: TooltipContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      margin-left: -6px;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      margin-top: -6px;\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_1__["TooltipConfig"], },
    ]; };
    return TooltipContainerComponent;
}());

//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.config.js ***!
  \**************************************************************/
/*! exports provided: TooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/** Default values provider for tooltip */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js ***!
  \*****************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _utils_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony import */ var _utils_warn_once__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/warn-once */ "./node_modules/ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/triggers */ "./node_modules/ngx-bootstrap/utils/triggers.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Fired when tooltip content changes */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Css class for tooltip container
           */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["TooltipConfig"], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the tooltip is currently being shown
           */
        function () {
            return this._tooltip.isShown;
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
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        set: /** @deprecated - please use `tooltip` instead */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        set: /** @deprecated - please use `placement` instead */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /** @deprecated - please use `isOpen` instead*/
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /** @deprecated - please use `isDisabled` instead */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /** @deprecated - please use `container="body"` instead */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        set: /** @deprecated - will replaced with customClass */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        set: /** @deprecated - removed */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /** @deprecated */
        function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /** @deprecated -  please use `triggers` instead */
        function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.show = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(_tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__["TooltipContainerComponent"])
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var _timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var triggers = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_6__["parseTriggers"])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    _timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.hide = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _component_loader_index__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["TooltipConfig"], },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tooltipChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "containerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "delay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "htmlContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] },],
        "_placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] },],
        "_enable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] },],
        "_animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAnimation',] },],
        "_popupClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] },],
        "_fadeDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipFadeDuration',] },],
        "_tooltipTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] },],
        "tooltipStateChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    __decorate([
        Object(_utils_decorators__WEBPACK_IMPORTED_MODULE_4__["OnChange"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.module.js ***!
  \**************************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");







var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [_tooltip_config__WEBPACK_IMPORTED_MODULE_4__["TooltipConfig"], _component_loader_index__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
        };
    };
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"]],
                    exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]],
                    entryComponents: [_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"]]
                },] },
    ];
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/decorators.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/decorators.js ***!
  \********************************************************/
/*! exports provided: OnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/warn-once.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/warn-once.js ***!
  \*******************************************************/
/*! exports provided: warnOnce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/account/signin/signin.component.ts");




var routes = [
    { path: '', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'login', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/account/signin/signin.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");












var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
                // BS
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_11__["TrnaslateLazyModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ],
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]]
            // declarations: [SignupComponent, SigninComponent, SetPasswordComponent, ResetPasswordComponent]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/signin/signin.component.html":
/*!******************************************************!*\
  !*** ./src/app/account/signin/signin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"opti_signinID\" class=\"opti_account-submodule-wrapper\">\r\n\r\n    <div class=\"float-left opti_account-banner-section\">\r\n    </div>\r\n\r\n    <div class=\"float-right opti_account-form-section\">\r\n        <div class=\"opti_outer-login-form opti_account-submodule-container\">\r\n            <div class=\"opti_vertcal-align-outer-box\">\r\n                <div class=\"panel-body opti_position-relative\" [perfectScrollbar]=\"\">\r\n\r\n                    <!-- loader start -->\r\n                    <div class=\"opti_loader\" *ngIf=\"showLoader==true\">\r\n                        <div class=\"opti_spinner\"></div>\r\n                    </div>\r\n                    <!-- loader end --> \r\n\r\n                    <div class=\"opti_fullwidth text-center opti_signin-logo\">\r\n                        <img src=\"assets/images/logo/large-logo.png\" alt=\"brandlogo\" class=\"opti_account-logo\">\r\n                    </div>\r\n\r\n                    <form class=\"k-form\" #signInForm=\"ngForm\">\r\n                        <label class=\"k-form-field\">\r\n                          <span class=\"opti_form-label\">{{ 'Username'|translate}}\r\n                          <!-- <span *ngIf=\"emailId.errors?.email && emailId.touched\" \r\n                          class=\"float-right opti_error-msg\"> Invalid emailId. </span> -->\r\n                          <span *ngIf=\"emailId.errors?.required && (emailId.dirty || emailId.touched)\" \r\n                          class=\"float-right opti_error-msg\" >{{'UnBlankErrMsg'|translate}}</span>\r\n                          <!-- <span  *ngIf=\"this.userNotExist==true && (emailId.dirty || emailId.touched) \r\n                          && (pwd.dirty || pwd.touched) && !emailId.errors?.required &&\r\n                           !emailId.errors?.valid \" class=\"float-right opti_error-msg\">\r\n                           User does not exists.</span> -->\r\n                          </span> \r\n                          <input type=\"text\" id=\"emailID\"  name =\"email\" required [(ngModel)]=\"userName\"\r\n                            #emailId = ngModel class=\"k-textbox\"  value=\"\" placeholder=\"{{ 'EnterUsername'|translate}}\"\r\n                            [readonly]=readonlyFlag\r\n                            />  \r\n                        </label> \r\n\r\n                        <label class=\"k-form-field\">\r\n                          <span class=\"opti_form-label\">{{ 'Password'|translate}}\r\n                              <span  *ngIf=\"pwd.errors && (pwd.dirty || pwd.touched)\"   class=\"float-right opti_error-msg\">{{'PwdBlankErrMsg'|translate}}</span>\r\n                              <span  *ngIf=\"this.isError==true &&  (pwd.dirty || pwd.touched) && (emailId.dirty || emailId.touched) && !pwd.errors?.required\" class=\"float-right opti_error-msg\">Invalid credentials.</span>\r\n                              \r\n                          </span>\r\n                          <input name = \"password\" required [(ngModel)]=\"password\" \r\n                          #pwd = ngModel type=\"password\" class=\"k-textbox\" value=\"\" \r\n                          placeholder=\"{{'EnterPassword'|translate}}\" [readonly]=readonlyFlag />\r\n                        </label>\r\n\r\n                        <!-- start if condition -->\r\n                        <ng-container *ngIf=\"isCompleteLoginVisible\">\r\n                            <label class=\"k-form-field\">\r\n                              <span class=\"opti_form-label\">{{'Company'|translate}} </span>\r\n                              <kendo-dropdownlist class=\"form-control form-control-sm\"\r\n                              \r\n                               [data]=\"companyName\" name=\"selectedItem\"\r\n                               [(ngModel)]=\"selectedItem\"\r\n                               id=\"compId\"\r\n                               ></kendo-dropdownlist>\r\n                            </label>\r\n\r\n                            <label class=\"k-form-field\">\r\n                              <span class=\"opti_form-label\">{{'Warehouse'|translate}} </span>\r\n                              <kendo-dropdownlist class=\"form-control form-control-sm\"\r\n                               [data]=\"whsList\" (click)=\"setWarehouseList()\" \r\n                               textField=\"OPTM_WHSE\"\r\n                               valueField=\"BPLid\"\r\n                               id=\"whseId\"\r\n                               name = \"defaultWHS\"\r\n                               [(ngModel)]=\"defaultWHS\"\r\n                              ></kendo-dropdownlist>\r\n                            </label>\r\n\r\n                            <!-- <label class=\"k-form-field\">\r\n                                <span class=\"opti_form-label\">Select Mode </span>\r\n                                <input type=\"radio\" name=\"scan\" id=\"radio1\" class=\"k-radio\" checked />\r\n                                <label class=\"k-radio-label\" for=\"radio1\">scanning</label>\r\n                            <input type=\"radio\" name=\"scan\" id=\"radio2\" class=\"k-radio\" />\r\n                            <label class=\"k-radio-label\" for=\"radio2\">Without-Scanning</label>\r\n                            </label> -->\r\n                        </ng-container>\r\n                        <!-- end if condition -->\r\n\r\n                        <label class=\"k-form-field\" *ngIf=\"isCompleteLoginVisible\">\r\n                            <div class=\"opti_checkbox-container\">\r\n                                <input type=\"checkbox\" id=\"auth-2fa\" class=\"k-checkbox float-left\" [(ngModel)]=\"isRemember\" name=\"isRemember\">\r\n                                <label class=\"k-checkbox-label\" for=\"auth-2fa\">{{'RememberMe'|translate}}</label>\r\n                            </div>\r\n                        </label>\r\n                        <div class=\"text-right\">\r\n                            <button type=\"submit\" id=connectbtn class=\"k-button k-primary opti_fullwidth mt-4\" *ngIf=\"!isCompleteLoginVisible\" (click)=\"login()\">{{'Connect'|translate}}</button>\r\n                            <button type=\"button\" id=connectbtn *ngIf=\"isCompleteLoginVisible\" class=\"k-button k-primary opti_fullwidth\" (click)=\"onResetClick(signInForm)\">{{'Reset'|translate}}</button>\r\n                            <button type=\"submit\" id=connectbtn *ngIf=\"isCompleteLoginVisible\" class=\"k-button k-primary opti_fullwidth\" (click)=\"login()\">{{'Login'|translate}}</button>                            \r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Full page loader start -->\r\n    <div class=\"opti_FullPageLoader\" *ngIf=\"showFullPageLoader==true\">\r\n        <div class=\"blob blob-0\"></div>\r\n        <div class=\"blob blob-1\"></div>\r\n        <div class=\"blob blob-2\"></div>\r\n        <div class=\"blob blob-3\"></div>\r\n        <div class=\"blob blob-4\"></div>\r\n        <div class=\"blob blob-5\"></div>\r\n    </div>\r\n\r\n    <!-- Full page loader loader end -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/account/signin/signin.component.scss":
/*!******************************************************!*\
  !*** ./src/app/account/signin/signin.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_ThemeSettingID {\n  background-color: #f0f0f0; }\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\np {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\na {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\nh1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\nh2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\nh4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\nh5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\nh6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n.fs-18 {\n  font-size: 18px; }\n.fs-20 {\n  font-size: 20px; }\n.fs-24 {\n  font-size: 24px; }\n.fs-26 {\n  font-size: 26px; }\n#opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n#opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none; }\nbody button:focus {\n    outline: none; }\nbody button + button:not(:last-child) {\n  margin: 0 5px 0 0; }\n.k-datepicker .k-select {\n  margin: -1px -1px -1px 0;\n  position: relative;\n  z-index: 1; }\nbutton.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon {\n  border-color: #1fa2ff;\n  color: #ffffff;\n  border-radius: 5px;\n  background-color: #1fa2ff; }\nbutton.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:hover, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:active, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:focus {\n    border-color: #1b8ee0;\n    color: #ffffff;\n    background-color: #1b8ee0; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n#opti_WrapperID #opti_LeftPanelID {\n    min-width: 260px;\n    max-width: 260px; }\n#opti_WrapperID #opti_LeftPanelID.opti_sidebar-minimize {\n    min-width: 80px;\n    max-width: 80px; }\n#opti_WrapperID #opti_LeftPanelID {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n#opti_WrapperID .opti_left-navigation {\n    margin: 10px;\n    border-radius: 5px;\n    display: flex;\n    align-self: center;\n    width: calc(100% - 20px);\n    justify-self: flex-start;\n    flex: 1; }\n#opti_WrapperID #opti_RightPanelID.opti_sidebar-minimize {\n    width: calc(100% - 80px); }\n#opti_WrapperID #opti_RightPanelID {\n    width: calc(100% - 260px); }\n#opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n#opti_WrapperID #opti_MainContentID {\n    height: calc(100% - 45px);\n    overflow: hidden; }\n#opti_WrapperID section#opti_TopBarID {\n    min-height: 45px !important; }\n#opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 99;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n#opti_WrapperID .opti_right-fix-section .opti_tab {\n      border: none; }\n#opti_WrapperID .opti_right-fix-section .opti_tab button {\n        border-radius: 0; }\n#opti_WrapperID .opti_right-fix-section .opti_tabcontent {\n      padding: 15px 0;\n      height: calc(100vh - 105px);\n      border-top: 1px solid #c7c7c7; }\n#opti_WrapperID .opti_right-fix-section .opti_close-icon-right-section {\n      display: inline-flex !important;\n      height: 40px;\n      width: 30px;\n      cursor: pointer; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_backarrow {\n  display: none; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_hamburger {\n  display: block; }\n#opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\nsection#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n.opti_left-navigation {\n  box-shadow: 0px 1px 15px #1fa2ff; }\nbody kendo-grid {\n  box-shadow: 0px 1px 15px #1fa2ff; }\nbody.opti_account-module .k-indicator-container, body.opti_account-module a, body.opti_account-module h1, body.opti_account-module h2, body.opti_account-module h3, body.opti_account-module h4, body.opti_account-module h5, body.opti_account-module h6, body.opti_account-module .k-grid-header .k-header {\n  color: #1fa2ff; }\nbody.opti_account-module .k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #1fa2ff;\n  background-color: #1fa2ff; }\nbody.opti_account-module .ps__thumb-y, body.opti_account-module .ps__rail-y:hover > .ps__thumb-y, body.opti_account-module .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #1fa2ff; }\nbody.opti_account-module .k-checkbox:focus + .k-checkbox-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #1fa2ff; }\nbody.opti_account-module .k-dropdown > :hover,\nbody.opti_account-module .k-dropdown .k-dropdown-wrap {\n  border-color: #1fa2ff; }\nbody.opti_account-module .k-dropdown .k-state-focused, body.opti_account-module .k-dropdowntree .k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\nbody.opti_account-module .opti_loader .opti_spinner {\n  border-top-color: #1fa2ff !important; }\nbody.opti_account-module .k-button.k-primary:focus, body.opti_account-module .k-button.k-primary.k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\na {\n  color: #333;\n  text-decoration: underline; }\na:hover {\n  color: #333; }\n.opti_vertcal-align-outer-box {\n  height: 100vh; }\n.panel-body {\n  width: 100%;\n  overflow-y: scroll;\n  height: auto;\n  max-height: 100%;\n  background-color: white;\n  box-shadow: 0px 0px 13px 0px #1fa2ff;\n  border-radius: 5px;\n  padding: 0px; }\n.opti_account-submodule-container {\n  width: 370px;\n  max-width: 100%;\n  margin: 0 auto; }\n.opti_vertcal-align-outer-box {\n  height: calc(100vh - 100px); }\n.k-checkbox-label::before {\n  border-color: rgba(255, 255, 255, 0.7); }\nlabel .opti_checkbox-container label,\nlabel > label {\n  color: #fff;\n  font-size: 12px; }\nlabel .opti_checkbox-container label a,\n  label > label a {\n    font-size: 12px; }\nlabel .opti_checkbox-container label a:hover,\n  label > label a:hover {\n    text-decoration: underline; }\n.opti_vertcal-align-outer-box {\n  padding: 10px 0;\n  width: 100%; }\n.opti_form-label {\n  font-size: 12px;\n  color: #fff;\n  margin-bottom: 0 !important; }\n.opti_account-submodule-wrapper {\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n  display: flex;\n  border-radius: 5px; }\n@media screen and (max-width: 767px) {\n    .opti_account-submodule-wrapper {\n      box-shadow: none; } }\n.opti_account-form-section {\n  width: 40%;\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%);\n  height: calc(100vh - 100px);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n@media screen and (max-width: 767px) {\n    .opti_account-form-section {\n      background: none; } }\n.opti_account-banner-section {\n  width: 60%;\n  height: calc(100vh - 100px);\n  background: url(\"/assets/images/signup/nouse/shutter/background2.jpg\");\n  background-size: cover;\n  background-position: left center;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  position: relative; }\n.opti_form-label,\n.k-checkbox-label {\n  color: #333 !important; }\n#opti_landingpageID .panel-body {\n  padding: 20px; }\n.panel-body button.w-100 {\n  margin-left: 0;\n  text-align: center; }\nbutton {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n.opti_target-link {\n  position: relative;\n  top: 12px; }\n#captchaCanvasID {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  margin-left: 5px;\n  background-image: url(\"/../assets/images/common/captcha-background.jpg\");\n  background-repeat: repeat; }\n.opti_signin-captcha {\n  margin-top: 10px; }\n.opti_captcha-refresh button {\n  margin-top: 2px; }\n.opti_captcha-refresh {\n  height: 32px;\n  display: flex !important;\n  margin-bottom: 0 !important;\n  margin-left: 5px !important; }\n.ng-untouched.ng-invalid {\n  border-color: rgba(33, 37, 41, 0.15); }\n.opti_signin-logo {\n  padding: 20px 20px 0 20px; }\n.k-form .k-form-field.opti_signin-captcha,\n.opti_captcha-canvas,\n.opti_captcha-text {\n  margin-bottom: 0 !important; }\n.opti_captcha-error {\n  position: relative;\n  top: -7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaWduaW4vRDpcXEFua3VyXFxXTVNcXE5ld1dNU0Nsb25lMlxcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9iYXNlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvc2lnbmluL0Q6XFxBbmt1clxcV01TXFxOZXdXTVNDbG9uZTJcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3NpZ25pbi9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2J1dHRvbi5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3NpZ25pbi9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2xheW91dC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3NpZ25pbi9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcd2ViXFxhY2NvdW50X21vZHVsZVxcYWNjb3VudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3NpZ25pbi9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGFjY291bnRcXHNpZ25pblxcc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLG1FQUFZO0FBQVosbUVBQVk7QUFBWixtRUFBWTtBQXVGWjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFz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QUEyQixFQUFBO0FBRzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAnKTtcclxuXHJcbi8vIGltcG9ydHMgZm9yIGFsbCBtaXhpbnMgKyBnbG9iYWwgcHJvamVjdCB2YXJpYWJsZXNcclxuLy8gQGltcG9ydCAnX3R5cG9ncmFwaHknO1xyXG4vLyBAaW1wb3J0ICdfYnV0dG9uJztcclxuLy8gQGltcG9ydCAnX2dyaWQnO1xyXG5cclxuLy8gU29tZSBCYXNpYyBWYXJpYWJsZVxyXG4kd2hpdGUgOiAjZmZmO1xyXG4kZXJyb3IgOiAjRDQ3NDc0O1xyXG4kdG9wLWJhci1oZWlnaHQ6NjVweDtcclxuJGxpc3QtaG92ZXItYmctY29sb3I6ICNmMmY0Zjg7XHJcbiRsaXN0LWJnLWNvbG9yOiAjRjhGOEY4O1xyXG4kbGlzdC1zZXByYXRvci1jb2xvcjpyZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xyXG4kbGlnaHQtYmxhY2s6IzMzMztcclxuJGRhcmstYmxhY2s6IzMzMztcclxuJGlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDMzLCAzNywgNDEsIDAuMTUpO1xyXG4kdGhlbWVGb3JBY2NvdW50U2VjdGlvbjojMWZhMmZmO1xyXG5cclxuLy8gVHJ1bmNhdGVcclxuQG1peGluIHRydW5jYXRlKCR0cnVuY2F0aW9uLWJvdW5kYXJ5KSB7XHJcbiAgICBtYXgtd2lkdGg6ICR0cnVuY2F0aW9uLWJvdW5kYXJ5O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLy8gZm9udCBzaXplXHJcbiRmb250LWZhbWlseS1sYXRvOiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbi8vJGZvbnQtZmFtaWx5LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBmb250KCRzaXplOiBmYWxzZSwgJHdlaWdodDogZmFsc2UsICAkbGg6IGZhbHNlKSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxhdG87IFxyXG4gICAgQGlmICRzaXplIHsgZm9udC1zaXplOiAkc2l6ZTsgfVxyXG4gICAgQGlmICR3ZWlnaHQgeyBmb250LXdlaWdodDogJHdlaWdodDsgfVxyXG4gICAgQGlmICRsaCB7IGxpbmUtaGVpZ2h0OiAkbGg7IH1cclxufVxyXG5cclxuLy8gcHNldWRvXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKXtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuLy8gVG8gcXVpY2tseSBjZW50cmUgYSBibG9jayBlbGVtZW50XHJcbkBtaXhpbiBwdXNoLS1hdXRvIHtcclxuICAgIG1hcmdpbjogeyBcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBib3JkZXIgcmFkaXVzXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICB9XHJcblxyXG4gLy8gbWFyZ2luXHJcbkBtaXhpbiBtYXJnaW4oJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7bWFyZ2luLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge21hcmdpbi1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge21hcmdpbi1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7bWFyZ2luLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gcGFkZGluZ1xyXG5AbWl4aW4gcGFkZGluZygkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHtwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge3BhZGRpbmctcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHtwYWRkaW5nLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHtwYWRkaW5nLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gVHJ1bmNhdGVcclxuQG1peGluIHBhc3N3b3JkLW1nLWluZGljYXRvcigkd2lkdGg6IGZhbHNlLCAkY29sb3I6IGZhbHNlKSB7XHJcbiAgICBAaWYgJHdpZHRoIHt3aWR0aDogJHdpZHRoO31cclxuICAgIEBpZiAkY29sb3Ige2JhY2tncm91bmQtY29sb3I6ICRjb2xvcjt9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMnM7IC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xyXG4gICAgdHJhbnNpdGlvbjogMnM7XHJcbn1cclxuXHJcbi8vIEFsaWduIFZlcnRpY2FsbHlcclxuLm9wdGlfdGFibGUtdi1taWRkbGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLm9wdGlfdGFibGUtY2VsbC12LW1pZGRsZXtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLm9wdGlfdmVydGljYWwtYWxpZ257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gTGluZSBTZXByYXRvclxyXG4ub3B0aV9zZXByYXRvcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LXNlcHJhdG9yLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gSGlkZSBlbGVtZW50IEluIERlc2t0b3AgQW5kIElwYWRcclxuLm9wdGlfaGlkZS1pbi1kZXNrdG9wLWlwYWR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIkBpbXBvcnQgJ19iYXNlJztcclxuXHJcbi8vIGZvbnQgc2l6ZVxyXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xyXG4kZm9udC1zaXplLXJlZ3VsYXI6IDE0cHg7XHJcbiRmb250LXNpemUtbGFyZ2U6IDI0cHg7XHJcbiRmb250LXNpemUteC1sYXJnZTogMzJweDtcclxuJGZvbnQtc2l6ZS14eC1sYXJnZTogNDhweDtcclxuJGZvbnQtc2l6ZS14eHgtbGFyZ2U6IDY0cHg7XHJcbiRmb250LXNpemUteHh4eC1sYXJnZTogOTZweDtcclxuXHJcblxyXG4vLyBmb250IHdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6XHQ0MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOjQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6XHQ3MDA7XHJcblxyXG4jb3B0aV9UaGVtZVNldHRpbmdJRCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8yLiBDb21tb24gY3NzIHN0YXJ0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYm9keXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5we1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTokZm9udC1zaXplLXNtYWxsLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuYXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxuICAgIC8vICY6aG92ZXJ7XHJcbiAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG5cclxuaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXh4eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgye1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgze1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14LWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDV7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXJlZ3VsYXIsICR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDZ7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXNtYWxsLCAkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcblxyXG4uZnMtMTh7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmZzLTIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mcy0yNHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uZnMtMjZ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi8vIFRvcCBCYXJcclxuI29wdGlfVG9wQmFySUR7XHJcbiAgICAub3B0aV91c2VyLXByb2ZpbGV7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ117XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddOmZvY3VzLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ106Zm9jdXN7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuYm9keSB7XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGwgO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuYm9keSBidXR0b24gKyBidXR0b246bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcblxyXG4uay1kYXRlcGlja2VyIC5rLXNlbGVjdHtcclxuICAgIG1hcmdpbjogLTFweCAtMXB4IC0xcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmJ0bi1zbS5idG4tdHJhbnNwYXJlbnQuYnRuLWljb24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzFiOGVlMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4ZWUwO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuLy8gMS4gTGF5b3V0IENTU1xyXG4vLyAyLiBUb3AgQmFyIENTU1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8xLiBMYXlvdXQgY3NzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuI29wdGlfV3JhcHBlcklEe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIExlZnQgUGFuZWxcclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNvcHRpX0xlZnRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5vcHRpX2xlZnQtbmF2aWdhdGlvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyBDc3MgUmVsYXRlZCBUbyBSaWdodCBDb250ZW50IEFyZWFcclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUQub3B0aV9zaWRlYmFyLW1pbmltaXplIHsgLy8gd2lkdGggYWZ0ZXIgY2xvc2Ugc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUR7IC8vIHdpZHRoIGFmdGVyIG9wZW4gc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI29wdGlfUmlnaHRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBDU1MgUmVsYXRlZCBUbyBNYWluIENvbnRlbnQgU2VjdGlvblxyXG4gICAgICAgICNvcHRpX01haW5Db250ZW50SUQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ1cHgpOyAvLyB0b3AgYmFyIGhlaWdodCA2NXB4XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIHRvcCBwYW5lbFxyXG4gICAgICAgIHNlY3Rpb24jb3B0aV9Ub3BCYXJJRCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodCAtIDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy9PcHRpIHJpZ2h0IHNlY3Rpb24gXHJcbiAgICAub3B0aV9yaWdodC1maXgtc2VjdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XHJcbiAgICAgICAgdG9wOiA2NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGFiIHNlY3Rpb24gdW5kZXIgcmlnaHQgc2VjdGlvblxyXG4gICAgICAgIC5vcHRpX3RhYiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wdGlfdGFiY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDEwNXB4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3B0aV9jbG9zZS1pY29uLXJpZ2h0LXNlY3Rpb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLzIuIFRvcCBQYW5lbCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBpZiBsZWZ0IHBhbmVsIGNsb3NlXHJcbiNvcHRpX1JpZ2h0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemV7IC8vIC5vcHRpX3NpZGViYXItbWluaW1pemUgY2FuJ3QgYWNjZXNzIHRoaXMgY2xhc3MgaW4gdG9wLmNvbXBvbmVudCB0aGF0J3Mgd2h5IHdlIGFyZSB1c2luZyBoZXJlXHJcbiAgICAjc2lkZWJhckNvbGxhcHNle1xyXG4gICAgICAgIC5vcHRpX2JhY2thcnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfaGFtYnVyZ2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfbW9iaWxlLW1lbnUtaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgdGhlbWUgY29sb3JcclxuLy8gaWYgd2Ugd2lsbCBhZGQgdGhpcyBjc3MgaW4gdG9wIGJhciB0aGFuIGJhY2tncm91bmQgY29sb3Igd2lsbCBub3QgY2hhbmdlIGZyb20gdGhlbWUgZmlsZSBiZWN1YXNlIGl0IHdpbGwgdGFrZSBoaWdoIHByaW9yYXR5IHRoYXQncyB3aHkgaSBhZGQgaGVyZVxyXG5zZWN0aW9uI29wdGlfVG9wQmFySUR7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3N2RlZywgIzQ4M0RGNiAyJSwgIzQzNUVGOCAxMCUsICMxQkEwRjEgNDQlLCAjMjVEREY1IDkxJSwgIzQ1RDc5MCAxMzAlKTtcclxufVxyXG4gIFxyXG4ub3B0aV9sZWZ0LW5hdmlnYXRpb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4ICMxZmEyZmY7XHJcbn1cclxuXHJcbmJvZHkga2VuZG8tZ3JpZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggIzFmYTJmZjtcclxufVxyXG5cclxuLy8gQWx3YXlzIHNldCBzdHJpcGUgdGhlbWUgZm9yIGFjY291bnQgbW9kdWxlXHJcbmJvZHkub3B0aV9hY2NvdW50LW1vZHVsZXtcclxuICAgIC5rLWluZGljYXRvci1jb250YWluZXIsIGEsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5rLWdyaWQtaGVhZGVyIC5rLWhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLmstY2hlY2tib3g6Y2hlY2tlZCArIC5rLWNoZWNrYm94LWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAucHNfX3RodW1iLXksIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LCAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWNoZWNrYm94OmZvY3VzICsgLmstY2hlY2tib3gtbGFiZWw6OmJlZm9yZXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggJHdoaXRlLCAwIDAgMCAzcHggJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAuay1kcm9wZG93biA+IDpob3ZlcixcclxuICAgIC5rLWRyb3Bkb3duIC5rLWRyb3Bkb3duLXdyYXB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWRyb3Bkb3duIC5rLXN0YXRlLWZvY3VzZWQsIC5rLWRyb3Bkb3dudHJlZSAuay1zdGF0ZS1mb2N1c2VkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uLCAkYWxwaGE6IDAuMik7IFxyXG4gICAgfVxyXG4gICAgLm9wdGlfbG9hZGVyIC5vcHRpX3NwaW5uZXJ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5rLWJ1dHRvbi5rLXByaW1hcnk6Zm9jdXMsIC5rLWJ1dHRvbi5rLXByaW1hcnkuay1zdGF0ZS1mb2N1c2Vke1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKCRjb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24sICRhbHBoYTogMC4yKTsgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAaW1wb3J0ICcuLi8uLi9fdHlwb2dyYXBoeS1idXR0b24tbGF5b3V0JztcclxuaDUsXHJcbmg2IHtcclxuICAgIC8vIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICRkYXJrLWJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICRsaWdodC1ibGFjaztcclxufVxyXG5cclxuLm9wdGlfdmVydGNhbC1hbGlnbi1vdXRlci1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIEBleHRlbmQgLm9wdGlfdmVydGljYWwtYWxpZ247XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4ICMxZmEyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtc3VibW9kdWxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm9wdGlfdmVydGNhbC1hbGlnbi1vdXRlci1ib3gge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG59XHJcblxyXG4uay1jaGVja2JveC1sYWJlbDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG59XHJcblxyXG5sYWJlbCAub3B0aV9jaGVja2JveC1jb250YWluZXIgbGFiZWwsXHJcbmxhYmVsPmxhYmVsIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XHJcbiAgICBhIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLm9wdGlfdmVydGNhbC1hbGlnbi1vdXRlci1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGNzcyBmb3Igd2hpdGUgbGFiZWxcclxuLm9wdGlfZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3B0aV9hY2NvdW50LXN1Ym1vZHVsZS13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLm9wdGlfYWNjb3VudC1mb3JtLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzdkZWcsICM0ODNERjYgMiUsICM0MzVFRjggMTAlLCAjMUJBMEYxIDQ0JSwgIzI1RERGNSA5MSUsICM0NUQ3OTAgMTMwJSk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtYmFubmVyLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2lnbnVwL25vdXNlL3NodXR0ZXIvYmFja2dyb3VuZDIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLm9wdGlfYWNjb3VudC1iYW5uZXItc2VjdGlvbjphZnRlciB7XHJcbiAgICAvLyBjb250ZW50OiAnJztcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMWU5YWYxO1xyXG4gICAgLy8gb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ub3B0aV9mb3JtLWxhYmVsLFxyXG4uay1jaGVja2JveC1sYWJlbCB7XHJcbiAgICBjb2xvcjogJGxpZ2h0LWJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5vcHRpX2FjY291bnQtbG9nb3tcclxuLy8gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4vLyB9XHJcbi8vIC5wc19fdGh1bWIteSxcclxuLy8gLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksIFxyXG4vLyAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteVxyXG4vLyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhMmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnBzX190aHVtYi15LCBib2R5Lm9wdGlfYWNjb3VudC1tb2R1bGUgLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksIGJvZHkub3B0aV9hY2NvdW50LW1vZHVsZSAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTJmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbiNvcHRpX2xhbmRpbmdwYWdlSUQge1xyXG4gICAgLnBhbmVsLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5IGJ1dHRvbi53LTEwMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzdkZWcsICM0ODNERjYgMiUsICM0MzVFRjggMTAlLCAjMUJBMEYxIDQ0JSwgIzI1RERGNSA5MSUsICM0NUQ3OTAgMTMwJSk7XHJcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL2Nzcy93ZWIvYWNjb3VudF9tb2R1bGUvYWNjb3VudCc7XHJcbi8vIC5vcHRpX2xvZ2luLWJyYW5kbG9nbyB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGltZ3tcclxuLy8gICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgbWF4LXdpZHRoOiAzMDVweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLm9wdGlfdGFyZ2V0LWxpbmt7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDoxMnB4O1xyXG59XHJcblxyXG4vLyAub3B0aV92ZXJ0Y2FsLWFsaWduLW91dGVyLWJveCB7XHJcbi8vICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbi8vIH1cclxuXHJcbi8vIC5vcHRpX2xvZ2luLWJyYW5kbG9nbyB7XHJcbi8vICAgaGVpZ2h0OiA2NXB4O1xyXG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuLy8gICAub3B0aV92ZXJ0aWNhbC1hbGlnbntcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbiNjYXB0Y2hhQ2FudmFzSUR7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAkd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy8uLi9hc3NldHMvaW1hZ2VzL2NvbW1vbi9jYXB0Y2hhLWJhY2tncm91bmQuanBnJyk7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbn1cclxuXHJcbi8vIC5vcHRpX2Rpc3BsYXktaW5saW5lLWZsZXgge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLm9wdGlfc2lnbmluLWNhcHRjaGF7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm9wdGlfY2FwdGNoYS1yZWZyZXNoIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ub3B0aV9jYXB0Y2hhLXJlZnJlc2h7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyB0ZW1wb3JhcmFcclxuLy8gLm9wdGlfbG9nby1vdXRlci1sb2dpbntcclxuLy8gICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4vLyAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5vcHRpX2xvZ2luLWJyYW5kbG9nb3tcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAub3B0aV9mb3JtLWxhYmVsLCAuay1jaGVja2JveC1sYWJlbHtcclxuLy8gICBjb2xvcjogJGxpZ2h0LWJsYWNrICFpbXBvcnRhbnQ7XHJcblxyXG4vLyB9XHJcbi5uZy11bnRvdWNoZWQubmctaW52YWxpZHtcclxuICBib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi8vIC5vcHRpX2FjY291bnQtc3VibW9kdWxlLWNvbnRhaW5lciB7XHJcbi8vICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vIH1cclxuXHJcbi5vcHRpX3NpZ25pbi1sb2dve1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi5rLWZvcm0gLmstZm9ybS1maWVsZC5vcHRpX3NpZ25pbi1jYXB0Y2hhLFxyXG4ub3B0aV9jYXB0Y2hhLWNhbnZhcyxcclxuLm9wdGlfY2FwdGNoYS10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcHRpX2NhcHRjaGEtZXJyb3J7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/signin/signin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/signin/signin.component.ts ***!
  \****************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, signinService, commonService, toastr, translate, httpClientSer) {
        var _this = this;
        this.router = router;
        this.signinService = signinService;
        this.commonService = commonService;
        this.toastr = toastr;
        this.translate = translate;
        this.httpClientSer = httpClientSer;
        this.showLoader = false;
        this.showFullPageLoader = false;
        this.isError = false;
        this.invalidCredentialMsg = "";
        this.userNotExist = false;
        this.isRemember = false;
        // Captcha
        this.randomstring = '';
        this.invalidCapcha = false;
        this.isCompleteLoginVisible = false;
        this.selectedItem = "";
        this.selectedWhse = "";
        this.whsList = [];
        this.companyName = [];
        this.readonlyFlag = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
            _this.selectedItem = translate.instant("SelectCompany");
            _this.defaultWHS = { OPTM_WHSE: translate.instant("SelectWarehouse"), BPLid: 0 };
        });
        this.commonService.loadConfig();
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showFullPageLoader = false;
        // Get cookie start
        if (this.getCookie('cookieEmail') != '' && this.getCookie('cookiePassword') != '') {
            this.userName = this.getCookie('cookieEmail');
            this.password = this.getCookie('cookiePassword');
            this.isRemember = true;
        }
        else {
            this.userName = '';
            this.password = '';
            this.isRemember = false;
        }
        // alert('ng on init');
        // Apply classes on Body
        var element = document.getElementsByTagName("body")[0];
        element.className = "";
        element.classList.add("opti_body-login");
        element.classList.add("opti_account-module");
        //this.getPSURL();
        // alert("ngoninit config.json subs get data");
        this.httpClientSer.get('./assets/config.json').subscribe(function (data) {
            sessionStorage.setItem('ConfigData', JSON.stringify(data));
            _this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
            //alert("config param service url:"+this.config_params.service_url);
            _this.signinService.getPSURL(_this.config_params.service_url).subscribe(function (data) {
                // alert("getPSURL data:"+data);
                if (data != null) {
                    // alert('success data ps url:'+data);
                    localStorage.setItem("PSURLFORADMIN", "http://139.144.10.220/OptiAdmin/");
                    //localStorage.setItem("PSURLFORADMIN", data);
                }
            }, function (error) {
                //  alert("getPSURL error:"+error);
                _this.toastr.error('', 'There is some error to connect with server', error);
                _this.showLoader = false;
            });
        }, function (err) {
            //  alert("getPSURL httperrorsection");
            console.log(err.message);
        });
    };
    SigninComponent.prototype.ngOnChanges = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.commonService.loadConfig();
                this.signinService.loadConfig();
                return [2 /*return*/];
            });
        });
    };
    SigninComponent.prototype.onScanClick = function () {
    };
    // getPSURL() {
    //   alert('getPs:: getps url');
    //  // localStorage.setItem("PSURLFORADMIN", "http://139.144.10.220/OptiAdmin/");
    //   //alert('getps url'+localStorage.getItem("PSURLFORADMIN"));
    //   this.signinService.getPSURL().subscribe(
    //     data => {
    //       alert('success data ps url:'+data);
    //      localStorage.setItem("PSURLFORADMIN", "http://139.144.10.220/OptiAdmin/");
    //     },
    //     error => {
    //       alert('failure ps url'+error);
    //       this.toastr.error('', this.translate.instant("PsurlFailed"), 
    //       this.commonService.toast_config.iconClasses.error);
    //     }
    //   );
    //   alert(' at last getps url');
    // }
    /**
     * Function for login
     */
    SigninComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // alert('login:: at login method top');
                // this.isCompleteLoginVisible = true;
                if (this.userName == "" || this.password == "") {
                    this.toastr.error('', this.translate.instant("UnPwdBlankErrorMsg"), this.commonService.toast_config.iconClasses.error);
                    return [2 /*return*/, true];
                }
                this.showLoader = true;
                if (!this.isCompleteLoginVisible) {
                    this.validateUserLogin();
                }
                else {
                    this.selectedItem = document.getElementById("compId").innerText.trim();
                    if (this.validateFields()) {
                        this.showLoader = false;
                        return [2 /*return*/];
                    }
                    //alert("call getlicence data");
                    this.getLicenseData();
                    //  this.showLoader = false;
                    //   // localStorage.setItem("GUID", this.licenseData[1].GUID);
                    //    localStorage.setItem("CompID", "BUILD128SRC12X");
                    //    localStorage.setItem("whseId", "01");
                    //    localStorage.setItem("Token", "2bf91be7-819c-4443-a1bc-82dc150da05d");
                    //   this.router.navigateByUrl('home/dashboard'); 
                }
                return [2 /*return*/];
            });
        });
    };
    SigninComponent.prototype.validateUserLogin = function () {
        var _this = this;
        //alert('validateUserLogin: ');
        this.signinService.ValidateUserLogin(this.userName, this.password).subscribe(function (data) {
            // alert("data:"+JSON.stringify(data));
            _this.userDetails = data.Table;
            _this.handleValidationUserSuccessResponse();
        }, function (error) {
            //  alert("error:"+JSON.stringify(error));
            _this.toastr.error('', _this.translate.instant("InvalidUnPwdErrMsg"), _this.commonService.toast_config.iconClasses.error);
            _this.showLoader = false;
        });
    };
    SigninComponent.prototype.onResetClick = function (frm) {
        this.isCompleteLoginVisible = false;
        frm.resetForm();
        this.readonlyFlag = false;
        this.setCookie('cookieEmail', "", 365);
        this.setCookie('cookiePassword', "", 365);
        this.setCookie('CompID', "", 365);
        this.setCookie('whseId', "", 365);
    };
    SigninComponent.prototype.getLicenseData = function () {
        var _this = this;
        this.showFullPageLoader = true;
        this.signinService.getLicenseData(this.selectedItem).subscribe(function (data) {
            _this.licenseData = data;
            if (_this.licenseData != null && _this.licenseData != undefined) {
                _this.handleLicenseDataSuccessResponse();
            }
            else {
                _this.showLoader = false;
                _this.toastr.error('', _this.translate.instant("license Failed"));
            }
        }, function (error) {
            // alert("in getLicenseData() subs result error"+error)
            _this.showLoader = false;
            _this.showFullPageLoader = false;
            _this.toastr.error('', _this.translate.instant("license Failed"), _this.commonService.toast_config.iconClasses.error);
        });
    };
    SigninComponent.prototype.handleLicenseDataSuccessResponse = function () {
        // alert("in handle license data success response");
        this.selectedWhse = document.getElementById("whseId").innerText.trim();
        this.showLoader = false;
        if (this.licenseData.length > 1) {
            if (this.licenseData[1].ErrMessage == "" || this.licenseData[1].ErrMessage == null) {
                if (this.licenseData[0].Message == "True") {
                    this.selectedItem = document.getElementById("compId").innerText.trim();
                    localStorage.setItem("GUID", this.licenseData[1].GUID);
                    localStorage.setItem("CompID", this.selectedItem);
                    localStorage.setItem("whseId", this.selectedWhse);
                    localStorage.setItem("Token", this.licenseData[0].Token);
                    if (this.licenseData[0].DefaultValues.length == 8) {
                        localStorage.setItem("DefaultValues", JSON.stringify(this.licenseData[0].DefaultValues));
                        localStorage.setItem("DecimalPrecision", this.licenseData[0].DefaultValues[3].DefaultValue);
                        localStorage.setItem("DecimalSeparator", this.licenseData[0].DefaultValues[4].DefaultValue);
                        localStorage.setItem("ThousandSeparator", this.licenseData[0].DefaultValues[5].DefaultValue);
                        localStorage.setItem("DATEFORMAT", this.licenseData[0].DefaultValues[6].DefaultValue);
                    }
                    else {
                        localStorage.setItem("DefaultValues", JSON.stringify(this.licenseData[0].DefaultValues));
                        localStorage.setItem("DecimalPrecision", this.licenseData[0].DefaultValues[0].DefaultValue);
                        localStorage.setItem("DecimalSeparator", this.licenseData[0].DefaultValues[1].DefaultValue);
                        localStorage.setItem("ThousandSeparator", this.licenseData[0].DefaultValues[2].DefaultValue);
                        localStorage.setItem("DATEFORMAT", this.licenseData[0].DefaultValues[3].DefaultValue);
                    }
                    // code for remember me 
                    if (this.isRemember == true) {
                        this.setCookie('cookieEmail', this.userName, 365);
                        this.setCookie('cookiePassword', this.password, 365);
                        this.setCookie('CompID', this.selectedItem, 365);
                        this.setCookie('whseId', this.selectedWhse, 365);
                    }
                    else {
                        this.setCookie('cookieEmail', "", 365);
                        this.setCookie('cookiePassword', "", 365);
                        this.setCookie('CompID', "", 365);
                        this.setCookie('whseId', "", 365);
                    }
                    this.router.navigateByUrl('home/dashboard');
                }
                else {
                    alert(this.licenseData[0].Message + " " + this.licenseData[0].Token);
                }
            }
            else {
                alert(this.licenseData[1].ErrMessage);
            }
        }
        else {
            alert(this.licenseData[0].ErrMessage);
        }
    };
    SigninComponent.prototype.handleValidationUserSuccessResponse = function () {
        var _this = this;
        this.showLoader = false;
        if (this.userDetails == null || this.userDetails.length < 1) {
            this.toastr.error('', this.translate.instant("InvalidUn"), this.commonService.toast_config.iconClasses.error);
            return true;
        }
        if (this.userDetails[0].OPTM_ACTIVE == 0) {
            this.toastr.error('', this.translate.instant("UsernotActive"), this.commonService.toast_config.iconClasses.error);
            return true;
        }
        localStorage.setItem("UserId", this.userName);
        this.isCompleteLoginVisible = true;
        this.readonlyFlag = true;
        this.userDetails.forEach(function (element) {
            _this.companyName.push(element.OPTM_COMPID);
        });
        for (var i = 0; i < this.companyName.length; i++) {
            if (this.getCookie('CompID') == this.companyName[i]) {
                this.selectedItem = this.companyName[i];
                this.setWarehouseList();
            }
        }
    };
    SigninComponent.prototype.setWarehouseList = function () {
        var _this = this;
        if (document.getElementById("compId") != null) {
            this.selectedItem = document.getElementById("compId").innerText.trim();
        }
        this.signinService.getWHS(this.selectedItem).subscribe(function (data) {
            _this.whsList = data.Table;
            for (var i = 0; i < _this.whsList.length; i++) {
                if (_this.getCookie('whseId') == _this.whsList[i].OPTM_WHSE) {
                    _this.defaultWHS = _this.whsList[i];
                }
            }
        }, function (error) {
        });
    };
    SigninComponent.prototype.validateFields = function () {
        if (this.selectedItem == this.translate.instant("SelectCompany") || this.selectedItem == '') {
            this.showLoader = false;
            this.toastr.error('', this.translate.instant("SelectCompanyMsg"), this.commonService.toast_config.iconClasses.error);
            return true;
        }
        if (document.getElementById("whseId").innerText.trim() == this.translate.instant("SelectWarehouse") ||
            document.getElementById("whseId").innerText.trim() == "") {
            this.showLoader = false;
            this.toastr.error('', this.translate.instant("SelectCompanyMsg"), this.commonService.toast_config.iconClasses.error);
            return true;
        }
        return false;
    };
    /**
     * function for get cookie data
     * @param cname
     */
    SigninComponent.prototype.getCookie = function (cname) {
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
    /**
     * Function for set cookie data
     * @param cname
     * @param cvalue
     * @param exdays
     */
    SigninComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SigninComponent.prototype, "myCanvas", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/account/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/account/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"],
            _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map