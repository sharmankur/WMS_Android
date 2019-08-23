(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../adjustments-counting/adjustments-counting.module": [
		"./src/app/adjustments-counting/adjustments-counting.module.ts",
		"adjustments-counting-adjustments-counting-module"
	],
	"../inbound/inbound.module": [
		"./src/app/inbound/inbound.module.ts",
		"default~inbound-inbound-module~portal-home-portal-home-module"
	],
	"../outbound/outbound.module": [
		"./src/app/outbound/outbound.module.ts"
	],
	"../printing-label/printing-label.module": [
		"./src/app/printing-label/printing-label.module.ts",
		"printing-label-printing-label-module"
	],
	"../production/production.module": [
		"./src/app/production/production.module.ts",
		"production-production-module"
	],
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"default~account-account-module~portal-home-portal-home-module",
		"account-account-module"
	],
	"./portal-home/portal-home.module": [
		"./src/app/portal-home/portal-home.module.ts",
		"default~inbound-inbound-module~portal-home-portal-home-module",
		"default~account-account-module~portal-home-portal-home-module",
		"portal-home-portal-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing-loader.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-loader.ts ***!
  \***************************************/
/*! exports provided: AppCustomPreloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCustomPreloader", function() { return AppCustomPreloader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AppCustomPreloader = /** @class */ (function () {
    function AppCustomPreloader() {
    }
    AppCustomPreloader.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    };
    return AppCustomPreloader;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/landing/landing.component */ "./src/app/common/landing/landing.component.ts");
/* harmony import */ var _app_routing_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing-loader */ "./src/app/app-routing-loader.ts");





var routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', loadChildren: "./account/account.module#AccountModule", data: { preload: true } },
    { path: 'landing', component: _common_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'home', loadChildren: "./portal-home/portal-home.module#PortalHomeModule", data: { preload: true } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _app_routing_loader__WEBPACK_IMPORTED_MODULE_4__["AppCustomPreloader"], useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_app_routing_loader__WEBPACK_IMPORTED_MODULE_4__["AppCustomPreloader"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { TranslateService, LangChangeEvent } from '../../node_modules/@ngx-translate/core';
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        // let userLang = navigator.language.split('-')[0];
        // userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        // translate.use(userLang);
        var _this = this;
        this.router = router;
        this.title = 'app';
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.CommonService.loadConfig();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/landing/landing.component */ "./src/app/common/landing/landing.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./outbound/outbound.module */ "./src/app/outbound/outbound.module.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");













// import { LookupComponent } from 'src/app/common/lookup/lookup.component';




function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    },
                    isolate: false
                }),
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogsModule"],
                _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_15__["OutboundModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_16__["InputsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }


/***/ }),

/***/ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-dialog title=\"Please confirm\" (close)=\"close('cancel')\" [minWidth]=\"250\" [width]=\"380\">\r\n  <p style=\"margin: 15px 0;font-size:16px;\">{{titleMessage}}</p>\r\n  <kendo-dialog-actions>\r\n      <button kendoButton *ngIf=\"showNoButton\" (click)=\"close('no')\">{{noButtonText}}</button>         \r\n      <button class=\"ml-1\" kendoButton (click)=\"close('yes')\" primary=\"true\">{{yesButtonText}}</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog> "

/***/ }),

/***/ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21vbi1jb25maXJtLWRpYWxvZy9jb21vbi1jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComonConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComonConfirmDialogComponent", function() { return ComonConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComonConfirmDialogComponent = /** @class */ (function () {
    function ComonConfirmDialogComponent() {
        this.isYesClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showNoButton = true;
        this.opened = true;
    }
    ComonConfirmDialogComponent.prototype.ngOnInit = function () {
        this.showNoButton = true;
        if (this.noButtonText == undefined || this.noButtonText == "") {
            this.showNoButton = false;
        }
    };
    ComonConfirmDialogComponent.prototype.close = function (status) {
        this.isYesClick.emit({ Status: status, From: this.fromWhere });
        // if (status == "yes") {
        // } else {
        //   this.isYesClick.emit(status,this.fromWhere);
        // }
        this.opened = false;
    };
    ComonConfirmDialogComponent.prototype.open = function () {
        this.opened = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComonConfirmDialogComponent.prototype, "titleMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComonConfirmDialogComponent.prototype, "yesButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComonConfirmDialogComponent.prototype, "noButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComonConfirmDialogComponent.prototype, "fromWhere", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComonConfirmDialogComponent.prototype, "isYesClick", void 0);
    ComonConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comon-confirm-dialog',
            template: __webpack_require__(/*! ./comon-confirm-dialog.component.html */ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./comon-confirm-dialog.component.scss */ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComonConfirmDialogComponent);
    return ComonConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    {{ message }}\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\r\n  </div>"

/***/ }),

/***/ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.decline = function () {
    };
    ConfirmDialogComponent.prototype.accept = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmDialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmDialogComponent.prototype, "btnOkText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/confirm-dialog/confirmdialog.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/confirm-dialog/confirmdialog.service.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmdialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdialogService", function() { return ConfirmdialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.ts");




var ConfirmdialogService = /** @class */ (function () {
    function ConfirmdialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmdialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modelRef = this.modalService.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], { size: dialogSize });
        modelRef.componentInstance.title = title;
        modelRef.componentInstance.message = message;
        modelRef.componentInstance.btnOkText = btnOkText;
        modelRef.componentInstance.btnCancelText = btnCancelText;
        return modelRef.result;
    };
    ConfirmdialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ConfirmdialogService);
    return ConfirmdialogService;
}());



/***/ }),

/***/ "./src/app/common/landing/landing.component.html":
/*!*******************************************************!*\
  !*** ./src/app/common/landing/landing.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"opti_landingpageID\" class=\"opti_account-submodule-wrapper\">\r\n\r\n   \r\n  <div class=\"float-left opti_account-banner-section\">\r\n  </div>\r\n\r\n  <div class=\"float-right opti_account-form-section\">\r\n      <div class=\"opti_outer-landing opti_account-submodule-container\">\r\n        <div class=\"opti_vertcal-align-outer-box\">\r\n            <div class=\"panel-body position-relative\" [perfectScrollbar]=\"\">\r\n                \r\n                <img src=\"assets/images/logo/large-logo.png\" alt=\"brandlogo\" class=\"opti_account-logo\">\r\n\r\n                <div class=\"opti_landing-link\">\r\n                  <button (click)=\"navigateToSignIn()\" class=\"\"> Login</button>\r\n                  <button (click)=\"navigateToSignUp(1)\" class=\"\">Customer Sign Up</button> \r\n                  <button (click)=\"navigateToSignUp(2)\" class=\"\" disabled>Vendor Sign Up</button>\r\n                  <button (click)=\"navigateToSignUp(3)\" class=\"\" >Bizchat User Sign Up</button>\r\n\r\n                  <button (click)=\"navigateToset()\" class=\"\" >Set Password</button>\r\n                  <button (click)=\"navigateToreset()\" class=\"\" >Reset Password</button>\r\n                  <button (click)=\"navigateTohome()\" class=\"\" >Home</button>\r\n                </div>\r\n              \r\n            </div>\r\n        </div>    \r\n      </div>\r\n  </div>   \r\n</div>"

/***/ }),

/***/ "./src/app/common/landing/landing.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/landing/landing.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  #opti_ThemeSettingID {\n  background-color: #f0f0f0; }\n  body {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  p {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  a {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  h1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\n  h2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\n  h3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\n  h4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\n  h5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n  h6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .fs-18 {\n  font-size: 18px; }\n  .fs-20 {\n  font-size: 20px; }\n  .fs-24 {\n  font-size: 24px; }\n  .fs-26 {\n  font-size: 26px; }\n  #opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n  #opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n  .opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  body button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none; }\n  body button + button:not(:last-child) {\n  margin: 0 5px 0 0; }\n  .k-datepicker .k-select {\n  margin: -1px -1px -1px 0;\n  position: relative;\n  z-index: 1; }\n  button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon {\n  border-color: #1fa2ff;\n  color: #ffffff;\n  border-radius: 5px;\n  background-color: #1fa2ff; }\n  button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:hover, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:active, button.btn.btn-outline-secondary.btn-sm.btn-transparent.btn-icon:focus {\n    border-color: #1b8ee0;\n    color: #ffffff;\n    background-color: #1b8ee0; }\n  .opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n  .opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n  .opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n  .opti_hide-in-desktop-ipad {\n  display: none; }\n  #opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n  #opti_WrapperID #opti_LeftPanelID {\n    min-width: 260px;\n    max-width: 260px; }\n  #opti_WrapperID #opti_LeftPanelID.opti_sidebar-minimize {\n    min-width: 80px;\n    max-width: 80px; }\n  #opti_WrapperID #opti_LeftPanelID {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  #opti_WrapperID .opti_left-navigation {\n    margin: 10px;\n    border-radius: 5px;\n    display: flex;\n    align-self: center;\n    width: calc(100% - 20px);\n    justify-self: flex-start;\n    flex: 1; }\n  #opti_WrapperID #opti_RightPanelID.opti_sidebar-minimize {\n    width: calc(100% - 80px); }\n  #opti_WrapperID #opti_RightPanelID {\n    width: calc(100% - 260px); }\n  #opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n  #opti_WrapperID #opti_MainContentID {\n    height: calc(100% - 45px);\n    overflow: hidden; }\n  #opti_WrapperID section#opti_TopBarID {\n    min-height: 45px !important; }\n  #opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 99;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n  #opti_WrapperID .opti_right-fix-section .opti_tab {\n      border: none; }\n  #opti_WrapperID .opti_right-fix-section .opti_tab button {\n        border-radius: 0; }\n  #opti_WrapperID .opti_right-fix-section .opti_tabcontent {\n      padding: 15px 0;\n      height: calc(100vh - 105px);\n      border-top: 1px solid #c7c7c7; }\n  #opti_WrapperID .opti_right-fix-section .opti_close-icon-right-section {\n      display: inline-flex !important;\n      height: 40px;\n      width: 30px;\n      cursor: pointer; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_backarrow {\n  display: none; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_hamburger {\n  display: block; }\n  #opti_RightPanelID.opti_sidebar-minimize #sidebarCollapse .opti_mobile-menu-icon {\n  display: none; }\n  section#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n  .opti_left-navigation {\n  box-shadow: 0px 1px 15px #1fa2ff; }\n  body kendo-grid {\n  box-shadow: 0px 1px 15px #1fa2ff; }\n  body.opti_account-module .k-indicator-container, body.opti_account-module a, body.opti_account-module h1, body.opti_account-module h2, body.opti_account-module h3, body.opti_account-module h4, body.opti_account-module h5, body.opti_account-module h6, body.opti_account-module .k-grid-header .k-header {\n  color: #1fa2ff; }\n  body.opti_account-module .k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #1fa2ff; }\n  body.opti_account-module .ps__thumb-y, body.opti_account-module .ps__rail-y:hover > .ps__thumb-y, body.opti_account-module .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #1fa2ff; }\n  body.opti_account-module .k-checkbox:focus + .k-checkbox-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #1fa2ff; }\n  body.opti_account-module .k-dropdown > :hover,\nbody.opti_account-module .k-dropdown .k-dropdown-wrap {\n  border-color: #1fa2ff; }\n  body.opti_account-module .k-dropdown .k-state-focused, body.opti_account-module .k-dropdowntree .k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\n  body.opti_account-module .opti_loader .opti_spinner {\n  border-top-color: #1fa2ff !important; }\n  body.opti_account-module .k-button.k-primary:focus, body.opti_account-module .k-button.k-primary.k-state-focused {\n  box-shadow: 0 0 0 3px rgba(31, 162, 255, 0.2); }\n  a {\n  color: #333;\n  text-decoration: underline; }\n  a:hover {\n  color: #333; }\n  .opti_vertcal-align-outer-box {\n  height: 100vh; }\n  .panel-body {\n  width: 100%;\n  overflow-y: scroll;\n  height: auto;\n  max-height: 100%;\n  background-color: white;\n  box-shadow: 0px 0px 13px 0px #1fa2ff;\n  border-radius: 5px;\n  padding: 0px; }\n  .opti_account-submodule-container {\n  width: 370px;\n  max-width: 100%;\n  margin: 0 auto; }\n  .opti_vertcal-align-outer-box {\n  height: calc(100vh - 100px); }\n  .k-checkbox-label::before {\n  border-color: rgba(255, 255, 255, 0.7);\n  background-color: #fff; }\n  label .opti_checkbox-container label,\nlabel > label {\n  color: #fff;\n  font-size: 12px; }\n  label .opti_checkbox-container label a,\n  label > label a {\n    font-size: 12px; }\n  label .opti_checkbox-container label a:hover,\n  label > label a:hover {\n    text-decoration: underline; }\n  .opti_vertcal-align-outer-box {\n  padding: 10px 0;\n  width: 100%; }\n  .opti_form-label {\n  font-size: 12px;\n  color: #fff;\n  margin-bottom: 0 !important; }\n  .opti_account-submodule-wrapper {\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n  display: flex;\n  border-radius: 5px; }\n  @media screen and (max-width: 767px) {\n    .opti_account-submodule-wrapper {\n      box-shadow: none; } }\n  .opti_account-form-section {\n  width: 40%;\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%);\n  height: calc(100vh - 100px);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n  @media screen and (max-width: 767px) {\n    .opti_account-form-section {\n      background: none; } }\n  .opti_account-banner-section {\n  width: 60%;\n  height: calc(100vh - 100px);\n  background: url(\"/assets/images/signup/nouse/shutter/background2.jpg\");\n  background-size: cover;\n  background-position: left center;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  position: relative; }\n  .opti_form-label,\n.k-checkbox-label {\n  color: #333 !important; }\n  #opti_landingpageID .panel-body {\n  padding: 20px; }\n  .panel-body button.w-100 {\n  margin-left: 0;\n  text-align: center; }\n  button {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n  button {\n  width: 100%;\n  font-size: 14px;\n  margin-bottom: 15px; }\n  button:first-child {\n  margin-bottom: 15px; }\n  .panel-body {\n  text-align: center; }\n  .opti_account-logo {\n  margin-top: 0;\n  margin-bottom: 20px; }\n  button:last-child {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xhbmRpbmcvRDpcXEFua3VyXFxXTVNcXE5Fd1dNU0NMb25lM1xcT3B0aVByb0VSUFdNUy1Bbmd1bGFyL3NyY1xcYXNzZXRzXFxjc3NcXF9iYXNlLnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9sYW5kaW5nL0Q6XFxBbmt1clxcV01TXFxORXdXTVNDTG9uZTNcXE9wdGlQcm9FUlBXTVMtQW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9jb21tb24vbGFuZGluZy9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2J1dHRvbi5zY3NzIiwic3JjL2FwcC9jb21tb24vbGFuZGluZy9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcX2xheW91dC5zY3NzIiwic3JjL2FwcC9jb21tb24vbGFuZGluZy9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhc3NldHNcXGNzc1xcd2ViXFxhY2NvdW50X21vZHVsZVxcYWNjb3VudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbGFuZGluZy9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGNvbW1vblxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RkE7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFKaEI7SUFNUSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQUluQjtFQUNJLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJDQWhHMEM7RUFpRzFDLFVBQVUsRUFBQTtFQUlkO0VBQ0ksYUFBYSxFQUFBO0VDbkdqQjtFQUNJLHlCQUF5QixFQUFBO0VBTzdCO0VET0ksK0JBSGlDO0VBSXJCLGVDOUJNO0VEK0JKLGdCQ3BCTSxFQUFBO0VBY3hCO0VESUksK0JBSGlDO0VBSXJCLGVDOUJNO0VEK0JKLGdCQ3BCTSxFQUFBO0VBaUJ4QjtFRENJLCtCQUhpQztFQUlyQixlQzlCTTtFRCtCSixnQkNwQk0sRUFBQTtFQXdCeEI7RUROSSwrQkFIaUM7RUFJckIsZUN6QlU7RUQwQlIsZ0JDcEJNLEVBQUE7RUEyQnhCO0VEVEksK0JBSGlDO0VBSXJCLGVDMUJTO0VEMkJQLGdCQ3BCTSxFQUFBO0VBOEJ4QjtFRFpJLCtCQUhpQztFQUlyQixlQzNCUTtFRDRCTixnQkNwQk0sRUFBQTtFQWlDeEI7RURmSSwrQkFIaUM7RUFJckIsZUM1Qk07RUQ2QkosZ0JDcEJNLEVBQUE7RUFvQ3hCO0VEbEJJLCtCQUhpQztFQUlyQixlQzdCUTtFRDhCTixnQkNwQk0sRUFBQTtFQXVDeEI7RURyQkksK0JBSGlDO0VBSXJCLGVDOUJNO0VEK0JKLGdCQ3BCTSxFQUFBO0VBMkN4QjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGVBQWUsRUFBQTtFQUluQjtFQVFRLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtFQVQzQjtFQWFRLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysb0NBQW9DLEVBQUE7RURFNUM7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFKaEI7SUFNUSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQUluQjtFQUNJLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJDQWhHMEM7RUFpRzFDLFVBQVUsRUFBQTtFQUlkO0VBQ0ksYUFBYSxFQUFBO0VFbEhqQjtFQUdRLGtCQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWdCO0VBQ2hCLGlCQUFrQjtFQUNsQixlRFBjO0VDUWQsWUFBWSxFQUFBO0VBT3BCO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUdkO0VBQ0kscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7RUFKN0I7SUFNUSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QixFQUFBO0VGb0RqQztFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUpoQjtJQU1RLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtFQUkzQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkNBaEcwQztFQWlHMUMsVUFBVSxFQUFBO0VBSWQ7RUFDSSxhQUFhLEVBQUE7RUc1R2pCO0VBQ0ksYUFBYTtFQUNiLG9CQUFvQixFQUFBO0VBRnhCO0lBTVksZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBUDVCO0lBWVksZUFBZTtJQUNmLGVBQWUsRUFBQTtFQWIzQjtJQWtCWSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEIsRUFBQTtFQXJCMUM7SUF5QlksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsT0FBTyxFQUFBO0VBL0JuQjtJQW9DWSx3QkFBd0IsRUFBQTtFQXBDcEM7SUF3Q1kseUJBQXlCLEVBQUE7RUF4Q3JDO0lBNENZLGFBQWEsRUFBQTtFQTVDekI7SUFpRFkseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBO0VBbEQ1QjtJQXdEWSwyQkFBNkMsRUFBQTtFQXhEekQ7SUE2RFEsZUFBZTtJQUNmLFFBQVE7SUFDUixnQkg5REs7SUcrREwsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsZUFBZTtJQUVmLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7RUF2RXRDO01BNEVZLFlBQVksRUFBQTtFQTVFeEI7UUE4RWdCLGdCQUFnQixFQUFBO0VBOUVoQztNQW1GWSxlQUFlO01BRWYsMkJBQTBCO01BQzFCLDZCQUE2QixFQUFBO0VBdEZ6QztNQTBGWSwrQkFBK0I7TUFDL0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlLEVBQUE7RUFVM0I7RUFHWSxhQUFhLEVBQUE7RUFIekI7RUFNWSxjQUFjLEVBQUE7RUFOMUI7RUFTWSxhQUFhLEVBQUE7RUFPekI7RUFDSSxvR0FBb0csRUFBQTtFQUd4RztFQUNJLGdDQUFnQyxFQUFBO0VBR3BDO0VBQ0ksZ0NBQWdDLEVBQUE7RUFJcEM7RUFFUSxjSDVIdUIsRUFBQTtFRzBIL0I7RUFLUSxxQkgvSHVCLEVBQUE7RUcwSC9CO0VBUVEseUJIbEl1QixFQUFBO0VHMEgvQjtFQVdRLDZDSHJJdUIsRUFBQTtFRzBIL0I7O0VBZVEscUJIekl1QixFQUFBO0VHMEgvQjtFQWtCUSw2Q0g1SXVCLEVBQUE7RUcwSC9CO0VBcUJRLG9DQUFvRCxFQUFBO0VBckI1RDtFQXdCUSw2Q0hsSnVCLEVBQUE7RUNhL0I7RUd4QkksV0pTWTtFSVJaLDBCQUEwQixFQUFBO0VBRzlCO0VBQ0ksV0pHYSxFQUFBO0VJQWpCO0VBQ0ksYUFBYSxFQUFBO0VBSWpCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYyxFQUFBO0VBbkJsQjtFQXVCSSwyQkFBMkIsRUFBQTtFQUcvQjtFQUNJLHNDQUFzQztFQUN0QyxzQkFBc0IsRUFBQTtFQUcxQjs7RUFFSSxXSnZDUztFSXdDVCxlSDlDa0IsRUFBQTtFRzJDdEI7O0lBS1EsZUhoRGMsRUFBQTtFRzJDdEI7O0lBUVEsMEJBQTBCLEVBQUE7RUF2Q2xDO0VBNENJLGVBQWU7RUFDZixXQUFXLEVBQUE7RUFJZjtFQUNJLGVIOURrQjtFRytEbEIsV0p6RFM7RUkwRFQsMkJBQTJCLEVBQUE7RUFHL0I7RUFDSSwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VBQ2xCO0lBSko7TUFLUSxnQkFBZ0IsRUFBQSxFQUV2QjtFQUVEO0VBQ0ksVUFBVTtFQUNWLG9HQUFvRztFQUNwRywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFBO0VBQy9CO0lBTko7TUFPUSxnQkFBZ0IsRUFBQSxFQUV2QjtFQUVEO0VBQ0ksVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixzRUFBc0U7RUFDdEUsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGtCQUNKLEVBQUE7RUFjQTs7RUFFSSxzQkFBOEIsRUFBQTtFQWVsQztFQUVRLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLG9HQUFvRyxFQUFBO0VBRHhHO0VDdElJLFdBQVc7RUFDWCxlQUFlO0VBSWYsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxtQkFBbUIsRUFBQTtFREl2QjtFQ0FJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIGltcG9ydHMgZm9yIGFsbCBtaXhpbnMgKyBnbG9iYWwgcHJvamVjdCB2YXJpYWJsZXNcclxuLy8gQGltcG9ydCAnX3R5cG9ncmFwaHknO1xyXG4vLyBAaW1wb3J0ICdfYnV0dG9uJztcclxuLy8gQGltcG9ydCAnX2dyaWQnO1xyXG5cclxuLy8gU29tZSBCYXNpYyBWYXJpYWJsZVxyXG4kd2hpdGUgOiAjZmZmO1xyXG4kZXJyb3IgOiAjRDQ3NDc0O1xyXG4kdG9wLWJhci1oZWlnaHQ6NjVweDtcclxuJGxpc3QtaG92ZXItYmctY29sb3I6ICNmMmY0Zjg7XHJcbiRsaXN0LWJnLWNvbG9yOiAjRjhGOEY4O1xyXG4kbGlzdC1zZXByYXRvci1jb2xvcjpyZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xyXG4kbGlnaHQtYmxhY2s6IzMzMztcclxuJGRhcmstYmxhY2s6IzMzMztcclxuJGlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDMzLCAzNywgNDEsIDAuMTUpO1xyXG4kdGhlbWVGb3JBY2NvdW50U2VjdGlvbjojMWZhMmZmO1xyXG5cclxuLy8gVHJ1bmNhdGVcclxuQG1peGluIHRydW5jYXRlKCR0cnVuY2F0aW9uLWJvdW5kYXJ5KSB7XHJcbiAgICBtYXgtd2lkdGg6ICR0cnVuY2F0aW9uLWJvdW5kYXJ5O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLy8gZm9udCBzaXplXHJcbiRmb250LWZhbWlseS1sYXRvOiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbi8vJGZvbnQtZmFtaWx5LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBmb250KCRzaXplOiBmYWxzZSwgJHdlaWdodDogZmFsc2UsICAkbGg6IGZhbHNlKSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxhdG87IFxyXG4gICAgQGlmICRzaXplIHsgZm9udC1zaXplOiAkc2l6ZTsgfVxyXG4gICAgQGlmICR3ZWlnaHQgeyBmb250LXdlaWdodDogJHdlaWdodDsgfVxyXG4gICAgQGlmICRsaCB7IGxpbmUtaGVpZ2h0OiAkbGg7IH1cclxufVxyXG5cclxuLy8gcHNldWRvXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKXtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuLy8gVG8gcXVpY2tseSBjZW50cmUgYSBibG9jayBlbGVtZW50XHJcbkBtaXhpbiBwdXNoLS1hdXRvIHtcclxuICAgIG1hcmdpbjogeyBcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBib3JkZXIgcmFkaXVzXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICB9XHJcblxyXG4gLy8gbWFyZ2luXHJcbkBtaXhpbiBtYXJnaW4oJHRvcDogZmFsc2UsICRyaWdodDogZmFsc2UsICRib3R0b206IGZhbHNlLCAgJGxlZnQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGJvdHRvbSB7bWFyZ2luLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge21hcmdpbi1yaWdodDogJHJpZ2h0O31cclxuICAgIEBpZiAkbGVmdCAgICAge21hcmdpbi1sZWZ0OiAkbGVmdDt9XHJcbiAgICBAaWYgJHRvcCAgICAgICB7bWFyZ2luLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gcGFkZGluZ1xyXG5AbWl4aW4gcGFkZGluZygkdG9wOiBmYWxzZSwgJHJpZ2h0OiBmYWxzZSwgJGJvdHRvbTogZmFsc2UsICAkbGVmdDogZmFsc2UpIHtcclxuICAgIEBpZiAkYm90dG9tIHtwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTt9XHJcbiAgICBAaWYgJHJpZ2h0ICAge3BhZGRpbmctcmlnaHQ6ICRyaWdodDt9XHJcbiAgICBAaWYgJGxlZnQgICAgIHtwYWRkaW5nLWxlZnQ6ICRsZWZ0O31cclxuICAgIEBpZiAkdG9wICAgICAgIHtwYWRkaW5nLXRvcDogJHRvcDt9XHJcbiB9XHJcblxyXG4gLy8gVHJ1bmNhdGVcclxuQG1peGluIHBhc3N3b3JkLW1nLWluZGljYXRvcigkd2lkdGg6IGZhbHNlLCAkY29sb3I6IGZhbHNlKSB7XHJcbiAgICBAaWYgJHdpZHRoIHt3aWR0aDogJHdpZHRoO31cclxuICAgIEBpZiAkY29sb3Ige2JhY2tncm91bmQtY29sb3I6ICRjb2xvcjt9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMnM7IC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xyXG4gICAgdHJhbnNpdGlvbjogMnM7XHJcbn1cclxuXHJcbi8vIEFsaWduIFZlcnRpY2FsbHlcclxuLm9wdGlfdGFibGUtdi1taWRkbGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLm9wdGlfdGFibGUtY2VsbC12LW1pZGRsZXtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLm9wdGlfdmVydGljYWwtYWxpZ257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gTGluZSBTZXByYXRvclxyXG4ub3B0aV9zZXByYXRvcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LXNlcHJhdG9yLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gSGlkZSBlbGVtZW50IEluIERlc2t0b3AgQW5kIElwYWRcclxuLm9wdGlfaGlkZS1pbi1kZXNrdG9wLWlwYWR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIkBpbXBvcnQgJ19iYXNlJztcclxuXHJcbi8vIGZvbnQgc2l6ZVxyXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xyXG4kZm9udC1zaXplLXJlZ3VsYXI6IDE0cHg7XHJcbiRmb250LXNpemUtbGFyZ2U6IDI0cHg7XHJcbiRmb250LXNpemUteC1sYXJnZTogMzJweDtcclxuJGZvbnQtc2l6ZS14eC1sYXJnZTogNDhweDtcclxuJGZvbnQtc2l6ZS14eHgtbGFyZ2U6IDY0cHg7XHJcbiRmb250LXNpemUteHh4eC1sYXJnZTogOTZweDtcclxuXHJcblxyXG4vLyBmb250IHdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6XHQ0MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOjQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6XHQ3MDA7XHJcblxyXG4jb3B0aV9UaGVtZVNldHRpbmdJRCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8yLiBDb21tb24gY3NzIHN0YXJ0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYm9keXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxufVxyXG5we1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTokZm9udC1zaXplLXNtYWxsLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuYXtcclxuICAgIEBpbmNsdWRlIGZvbnQoJHNpemU6ICRmb250LXNpemUtc21hbGwsJHdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXIsICAkbGg6IGZhbHNlKTtcclxuICAgIC8vICY6aG92ZXJ7XHJcbiAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG5cclxuaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXh4eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgye1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14eC1sYXJnZSwkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcbmgze1xyXG4gICAgQGluY2x1ZGUgZm9udCgkc2l6ZTogJGZvbnQtc2l6ZS14LWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLWxhcmdlLCR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDV7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXJlZ3VsYXIsICR3ZWlnaHQ6ICRmb250LXdlaWdodC1yZWd1bGFyLCAgJGxoOiBmYWxzZSk7XHJcbn1cclxuaDZ7XHJcbiAgICBAaW5jbHVkZSBmb250KCRzaXplOiAkZm9udC1zaXplLXNtYWxsLCAkd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhciwgICRsaDogZmFsc2UpO1xyXG59XHJcblxyXG4uZnMtMTh7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmZzLTIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mcy0yNHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uZnMtMjZ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi8vIFRvcCBCYXJcclxuI29wdGlfVG9wQmFySUR7XHJcbiAgICAub3B0aV91c2VyLXByb2ZpbGV7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ117XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGUgPSAndGV4dCddOmZvY3VzLCBpbnB1dFt0eXBlID0gJ2VtYWlsJ106Zm9jdXN7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuYm9keSB7XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGwgO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuYm9keSBidXR0b24gKyBidXR0b246bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcblxyXG4uay1kYXRlcGlja2VyIC5rLXNlbGVjdHtcclxuICAgIG1hcmdpbjogLTFweCAtMXB4IC0xcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmJ0bi1zbS5idG4tdHJhbnNwYXJlbnQuYnRuLWljb24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhMmZmO1xyXG4gICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzFiOGVlMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4ZWUwO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnX2Jhc2UnO1xyXG5cclxuLy8gMS4gTGF5b3V0IENTU1xyXG4vLyAyLiBUb3AgQmFyIENTU1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8xLiBMYXlvdXQgY3NzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuI29wdGlfV3JhcHBlcklEe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIExlZnQgUGFuZWxcclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9MZWZ0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNvcHRpX0xlZnRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5vcHRpX2xlZnQtbmF2aWdhdGlvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyBDc3MgUmVsYXRlZCBUbyBSaWdodCBDb250ZW50IEFyZWFcclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUQub3B0aV9zaWRlYmFyLW1pbmltaXplIHsgLy8gd2lkdGggYWZ0ZXIgY2xvc2Ugc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjb3B0aV9SaWdodFBhbmVsSUR7IC8vIHdpZHRoIGFmdGVyIG9wZW4gc2lkZWJhclxyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI29wdGlfUmlnaHRQYW5lbElEe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBDU1MgUmVsYXRlZCBUbyBNYWluIENvbnRlbnQgU2VjdGlvblxyXG4gICAgICAgICNvcHRpX01haW5Db250ZW50SUQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ1cHgpOyAvLyB0b3AgYmFyIGhlaWdodCA2NXB4XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIENzcyBSZWxhdGVkIFRvIHRvcCBwYW5lbFxyXG4gICAgICAgIHNlY3Rpb24jb3B0aV9Ub3BCYXJJRCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0b3AtYmFyLWhlaWdodCAtIDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy9PcHRpIHJpZ2h0IHNlY3Rpb24gXHJcbiAgICAub3B0aV9yaWdodC1maXgtc2VjdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XHJcbiAgICAgICAgdG9wOiA2NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGFiIHNlY3Rpb24gdW5kZXIgcmlnaHQgc2VjdGlvblxyXG4gICAgICAgIC5vcHRpX3RhYiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wdGlfdGFiY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDEwNXB4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3B0aV9jbG9zZS1pY29uLXJpZ2h0LXNlY3Rpb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLzIuIFRvcCBQYW5lbCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBpZiBsZWZ0IHBhbmVsIGNsb3NlXHJcbiNvcHRpX1JpZ2h0UGFuZWxJRC5vcHRpX3NpZGViYXItbWluaW1pemV7IC8vIC5vcHRpX3NpZGViYXItbWluaW1pemUgY2FuJ3QgYWNjZXNzIHRoaXMgY2xhc3MgaW4gdG9wLmNvbXBvbmVudCB0aGF0J3Mgd2h5IHdlIGFyZSB1c2luZyBoZXJlXHJcbiAgICAjc2lkZWJhckNvbGxhcHNle1xyXG4gICAgICAgIC5vcHRpX2JhY2thcnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfaGFtYnVyZ2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlfbW9iaWxlLW1lbnUtaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgdGhlbWUgY29sb3JcclxuLy8gaWYgd2Ugd2lsbCBhZGQgdGhpcyBjc3MgaW4gdG9wIGJhciB0aGFuIGJhY2tncm91bmQgY29sb3Igd2lsbCBub3QgY2hhbmdlIGZyb20gdGhlbWUgZmlsZSBiZWN1YXNlIGl0IHdpbGwgdGFrZSBoaWdoIHByaW9yYXR5IHRoYXQncyB3aHkgaSBhZGQgaGVyZVxyXG5zZWN0aW9uI29wdGlfVG9wQmFySUR7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3N2RlZywgIzQ4M0RGNiAyJSwgIzQzNUVGOCAxMCUsICMxQkEwRjEgNDQlLCAjMjVEREY1IDkxJSwgIzQ1RDc5MCAxMzAlKTtcclxufVxyXG4gIFxyXG4ub3B0aV9sZWZ0LW5hdmlnYXRpb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4ICMxZmEyZmY7XHJcbn1cclxuXHJcbmJvZHkga2VuZG8tZ3JpZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggIzFmYTJmZjtcclxufVxyXG5cclxuLy8gQWx3YXlzIHNldCBzdHJpcGUgdGhlbWUgZm9yIGFjY291bnQgbW9kdWxlXHJcbmJvZHkub3B0aV9hY2NvdW50LW1vZHVsZXtcclxuICAgIC5rLWluZGljYXRvci1jb250YWluZXIsIGEsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5rLWdyaWQtaGVhZGVyIC5rLWhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLmstY2hlY2tib3g6Y2hlY2tlZCArIC5rLWNoZWNrYm94LWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAucHNfX3RodW1iLXksIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LCAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWNoZWNrYm94OmZvY3VzICsgLmstY2hlY2tib3gtbGFiZWw6OmJlZm9yZXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggJHdoaXRlLCAwIDAgMCAzcHggJHRoZW1lRm9yQWNjb3VudFNlY3Rpb247XHJcbiAgICB9XHJcbiAgICAuay1kcm9wZG93biA+IDpob3ZlcixcclxuICAgIC5rLWRyb3Bkb3duIC5rLWRyb3Bkb3duLXdyYXB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWVGb3JBY2NvdW50U2VjdGlvbjtcclxuICAgIH1cclxuICAgIC5rLWRyb3Bkb3duIC5rLXN0YXRlLWZvY3VzZWQsIC5rLWRyb3Bkb3dudHJlZSAuay1zdGF0ZS1mb2N1c2VkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgkY29sb3I6ICR0aGVtZUZvckFjY291bnRTZWN0aW9uLCAkYWxwaGE6IDAuMik7IFxyXG4gICAgfVxyXG4gICAgLm9wdGlfbG9hZGVyIC5vcHRpX3NwaW5uZXJ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5rLWJ1dHRvbi5rLXByaW1hcnk6Zm9jdXMsIC5rLWJ1dHRvbi5rLXByaW1hcnkuay1zdGF0ZS1mb2N1c2Vke1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKCRjb2xvcjogJHRoZW1lRm9yQWNjb3VudFNlY3Rpb24sICRhbHBoYTogMC4yKTsgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAaW1wb3J0ICcuLi8uLi9fdHlwb2dyYXBoeS1idXR0b24tbGF5b3V0JztcclxuaDUsXHJcbmg2IHtcclxuICAgIC8vIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICRkYXJrLWJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICRsaWdodC1ibGFjaztcclxufVxyXG5cclxuLm9wdGlfdmVydGNhbC1hbGlnbi1vdXRlci1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIEBleHRlbmQgLm9wdGlfdmVydGljYWwtYWxpZ247XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4ICMxZmEyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtc3VibW9kdWxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm9wdGlfdmVydGNhbC1hbGlnbi1vdXRlci1ib3gge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG59XHJcblxyXG4uay1jaGVja2JveC1sYWJlbDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxubGFiZWwgLm9wdGlfY2hlY2tib3gtY29udGFpbmVyIGxhYmVsLFxyXG5sYWJlbD5sYWJlbCB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpX3ZlcnRjYWwtYWxpZ24tb3V0ZXItYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBjc3MgZm9yIHdoaXRlIGxhYmVsXHJcbi5vcHRpX2Zvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wdGlfYWNjb3VudC1zdWJtb2R1bGUtd3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtZm9ybS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc3ZGVnLCAjNDgzREY2IDIlLCAjNDM1RUY4IDEwJSwgIzFCQTBGMSA0NCUsICMyNURERjUgOTElLCAjNDVENzkwIDEzMCUpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3B0aV9hY2NvdW50LWJhbm5lci1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NpZ251cC9ub3VzZS9zaHV0dGVyL2JhY2tncm91bmQyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtYmFubmVyLXNlY3Rpb246YWZ0ZXIge1xyXG4gICAgLy8gY29udGVudDogJyc7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICAvLyB6LWluZGV4OiAxO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzFlOWFmMTtcclxuICAgIC8vIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLm9wdGlfZm9ybS1sYWJlbCxcclxuLmstY2hlY2tib3gtbGFiZWwge1xyXG4gICAgY29sb3I6ICRsaWdodC1ibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAub3B0aV9hY2NvdW50LWxvZ297XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuLy8gfVxyXG4vLyAucHNfX3RodW1iLXksXHJcbi8vIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LCBcclxuLy8gLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXlcclxuLy8ge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTJmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5wc19fdGh1bWIteSwgYm9keS5vcHRpX2FjY291bnQtbW9kdWxlIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LCBib2R5Lm9wdGlfYWNjb3VudC1tb2R1bGUgLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXkge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMxZmEyZmYgIWltcG9ydGFudDtcclxuLy8gfVxyXG4jb3B0aV9sYW5kaW5ncGFnZUlEIHtcclxuICAgIC5wYW5lbC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFuZWwtYm9keSBidXR0b24udy0xMDAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc3ZGVnLCAjNDgzREY2IDIlLCAjNDM1RUY4IDEwJSwgIzFCQTBGMSA0NCUsICMyNURERjUgOTElLCAjNDVENzkwIDEzMCUpO1xyXG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9jc3Mvd2ViL2FjY291bnRfbW9kdWxlL2FjY291bnQnO1xyXG5cclxuLy8gYnV0dG9uOmxhc3QtY2hpbGQsIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBhbmVsLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpX2FjY291bnQtbG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/landing/landing.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/landing/landing.component.ts ***!
  \*****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var element = document.getElementsByTagName("body")[0];
        element.className = "";
        element.classList.add("opti_body-landingpage");
        element.classList.add("opti_account-module");
    };
    LandingComponent.prototype.navigateToSignUp = function (value) {
        this.router.navigateByUrl('account/signup');
    };
    LandingComponent.prototype.navigateToSignIn = function () {
        this.router.navigateByUrl('account/login');
    };
    LandingComponent.prototype.navigateToset = function () {
        this.router.navigateByUrl('account/setpassword');
    };
    LandingComponent.prototype.navigateToreset = function () {
        this.router.navigateByUrl('account/resetpassword');
    };
    LandingComponent.prototype.navigateTohome = function () {
        this.router.navigateByUrl('home');
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/common/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/common/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/common/lookup/lookup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/lookup/lookup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Grid Modal-->\r\n<kendo-dialog [width]=\"750\"  *ngIf=\"dialogOpened\" (close)=\"close_kendo_dialog()\">\r\n\r\n    <kendo-dialog-titlebar>\r\n        {{lookupTitle}}\r\n    </kendo-dialog-titlebar>\r\n    <kendo-grid  [kendoGridBinding]=\"serviceData\"\r\n        [filterable]=isColumnFilter [groupable]=isColumnGroup [selectable]=\"true\" [pageable]=\"pagable\" [sort]=\"state.sort\"\r\n        [filter]=\"state.filter\" [resizable]=\"true\" [skip]=\"skip\" (selectionChange)=\"on_item_select($event)\" [pageSize]=\"pagesize\"\r\n        style=\"max-height:400px\" class=\"no-shadow\">\r\n\r\n        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"1\">\r\n            <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\r\n            <kendo-pager-numeric-buttons [buttonCount]=\"5\"></kendo-pager-numeric-buttons>\r\n            <kendo-pager-next-buttons></kendo-pager-next-buttons>\r\n            <kendo-pager-info></kendo-pager-info>\r\n        </ng-template>\r\n        <!-- grid template start -->\r\n        <ng-template kendoGridToolbarTemplate>\r\n\r\n            <!-- checkbox -->\r\n            <form class=\"k-form opti_show-hide-grid-column-filter float-left opti_hide-in-mobile pl-0 pt-0\">\r\n                <div class=\"k-form-field d-flex\">\r\n                    <input #chkFilter  type=\"checkbox\" (change)=\"onFilterChange(chkFilter,gridItem)\" id=\"opti_SalesOrderListColumnFilterID\"\r\n                        [(ngModel)]=\"isColumnFilter\" class=\"k-checkbox\" name=\"columnfilter\" />\r\n                    <label class=\"k-checkbox-label\" for=\"opti_SalesOrderListColumnFilterID\">Enable Filter</label>\r\n                </div>\r\n            </form>\r\n\r\n        </ng-template>\r\n        <kendo-grid-checkbox-column *ngIf=\"showSelection==true\" title=\"Select\" [width]=\"25\">\r\n            <ng-template  kendoGridCellTemplate let-idx='rowIndex' let-di='dataItem'>\r\n                <div class=\"k-form-field d-flex center-checkbox\">\r\n                    <input #chkSelection type=\"checkbox\" [disabled]='di.OldData' [checked]='di.OldData' (change)=\"onCheckboxClick(chkSelection.checked,idx)\" id=\"chkbox-{{idx}}\" class=\"k-checkbox\"\r\n                        name=\"columnfilter\" />\r\n                        \r\n                    <label class=\"k-checkbox-label\" for=\"chkbox-{{idx}}\"></label>\r\n                </div>\r\n            </ng-template>\r\n        </kendo-grid-checkbox-column>\r\n        <!-- <kendo-grid-checkbox-column  *ngIf=\"showSelection==true\" title=\"Select\" [width]=\"25\"></kendo-grid-checkbox-column> -->\r\n\r\n        <kendo-grid-column *ngFor=\"let column of table_head\" field=\"{{column.field}}\" title=\"{{column.title}}\" filter=\"{{column.type}}\"\r\n            format=\"{{column.format}}\" width=\"{{column.width}}\" minResizableWidth=\"{{column.width}}\" headerClass={{column.headerClass}} class={{column.class}}></kendo-grid-column>\r\n\r\n    </kendo-grid>\r\n    <div class=\"mt-3 clearfix\" *ngIf=\"showSelection==true\"></div>\r\n    <button id=\"btnDone\" *ngIf=\"showSelection==true\" (click)=\"Done()\">Done</button>\r\n</kendo-dialog>"

/***/ }),

/***/ "./src/app/common/lookup/lookup.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/lookup/lookup.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 0;\n  margin-bottom: .2rem !important; }\n\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.table-invoice td, .table-invoice th {\n  padding: 0.3rem 0.5rem !important; }\n\n.table-invoice td, .table-invoice th {\n  padding: 0.4rem 0.5rem !important; }\n\n.panel-default > .panel-heading a {\n  display: block;\n  padding: 3px 10px;\n  color: black;\n  font-weight: 450;\n  font-size: 14px; }\n\n.panel-default > .panel-heading a:before {\n  content: \"\";\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 300;\n  line-height: 1.5;\n  font-size: 13.5px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  float: right;\n  transition: -webkit-transform .25s linear;\n  transition: transform .25s linear;\n  transition: transform .25s linear, -webkit-transform .25s linear;\n  -webkit-transition: -webkit-transform .25s linear; }\n\n.panel-default > .panel-heading {\n  background-color: #eee; }\n\n.panel-default > .panel-heading a[aria-expanded=\"true\"]:before,\n.panel-default > .panel-heading a[aria-expanded=\"true\"]:before {\n  content: \"\\2212\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.panel-default > .panel-heading a[aria-expanded=\"false\"]:before,\n.panel-default > .panel-heading a[aria-expanded=\"false\"]:before {\n  content: \"\\002b\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.accordion-option {\n  width: 100%;\n  float: left;\n  clear: both;\n  margin: 15px 0; }\n\n.accordion-option .title {\n  font-size: 20px;\n  font-weight: bold;\n  float: left;\n  padding: 0;\n  margin: 0; }\n\n.accordion-option .toggle-accordion {\n  float: right;\n  font-size: 16px;\n  color: #6a6c6f; }\n\n.accordion-option .toggle-accordion:before {\n  content: \"Expand All\"; }\n\n.accordion-option .toggle-accordion.active:before {\n  content: \"Collapse All\"; }\n\n.inner-table tr td {\n  vertical-align: middle; }\n\n.mt--3 {\n  margin-top: -3px; }\n\n.lookup_search {\n  margin-top: 5px; }\n\n.lookup_search .opti_search {\n    width: 170px; }\n\n.lookup_search #search {\n    width: 100%;\n    max-width: 137px; }\n\n.lookup_search button {\n    float: right;\n    width: 30px; }\n\n#rule_output_table_lookup table {\n  min-width: 1250px;\n  min-width: 1250px;\n  word-break: break-word; }\n\n#rule_output_table_lookup table th:nth-child(1),\n  #rule_output_table_lookup table tr td:nth-child(1) {\n    width: 6%; }\n\n#rule_output_table_lookup table th:nth-child(2),\n  #rule_output_table_lookup table tr td:nth-child(2) {\n    width: 13%; }\n\n#rule_output_table_lookup table th:nth-child(3),\n  #rule_output_table_lookup table tr td:nth-child(3) {\n    width: 20%;\n    word-break: break-word; }\n\n#rule_output_table_lookup table th:nth-child(4),\n  #rule_output_table_lookup table tr td:nth-child(4) {\n    width: 14%; }\n\n#rule_output_table_lookup table th:nth-child(5),\n  #rule_output_table_lookup table tr td:nth-child(5) {\n    width: 7%; }\n\n#rule_output_table_lookup table th:nth-child(6),\n  #rule_output_table_lookup table tr td:nth-child(6) {\n    width: 6%; }\n\n#rule_output_table_lookup table th:nth-child(7),\n  #rule_output_table_lookup table tr td:nth-child(7) {\n    width: 8%; }\n\n#rule_output_table_lookup table th:nth-child(8),\n  #rule_output_table_lookup table tr td:nth-child(8) {\n    width: 7%; }\n\n#rule_output_table_lookup table th:nth-child(9),\n  #rule_output_table_lookup table tr td:nth-child(9) {\n    width: 6%; }\n\n#rule_output_table_lookup table th:nth-child(10),\n  #rule_output_table_lookup table tr td:nth-child(10) {\n    width: 5%; }\n\n#rule_output_table_lookup table th:nth-child(11),\n  #rule_output_table_lookup table tr td:nth-child(11) {\n    width: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvb2t1cC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGNvbW1vblxcbG9va3VwXFxsb29rdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsK0JBQStCLEVBQUE7O0FBSW5DO0VBQ0ksV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlDQUNKLEVBQUE7O0FBRUE7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHlDQUFpQztFQUFqQyxpQ0FBaUM7RUFBakMsZ0VBQWlDO0VBQ2pDLGlEQUFpRCxFQUFBOztBQUdyRDtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjs7RUFFSSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHlCQUF5QixFQUFBOztBQUc3Qjs7RUFFSSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0ksZ0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLFlBQVksRUFBQTs7QUFIcEI7SUFPUSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBUnhCO0lBWVEsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFJbkI7RUFFUSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUo5Qjs7SUFPWSxTQUFTLEVBQUE7O0FBUHJCOztJQVdZLFVBQVUsRUFBQTs7QUFYdEI7O0lBZVksVUFBVTtJQUNWLHNCQUFzQixFQUFBOztBQWhCbEM7O0lBb0JZLFVBQVUsRUFBQTs7QUFwQnRCOztJQXdCWSxTQUFTLEVBQUE7O0FBeEJyQjs7SUE0QlksU0FBUyxFQUFBOztBQTVCckI7O0lBZ0NZLFNBQVMsRUFBQTs7QUFoQ3JCOztJQW9DWSxTQUFTLEVBQUE7O0FBcENyQjs7SUF3Q1ksU0FBUyxFQUFBOztBQXhDckI7O0lBNENZLFNBQVMsRUFBQTs7QUE1Q3JCOztJQWdEWSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9va3VwL2xvb2t1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGZvciBleHBhbmQgYW5kIGNvbGxhcHNlIHNlY3Rpb24gXHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGFibGUtaW52b2ljZSB0ZCwgLnRhYmxlLWludm9pY2UgdGh7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnRhYmxlLWludm9pY2UgdGQsIC50YWJsZS1pbnZvaWNlIHRoIHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgYTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGxpbmVhcjtcclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTpiZWZvcmUsXHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl06YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMjEyXCI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZyBhW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTpiZWZvcmUsXHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIGFbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMDAyYlwiO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tb3B0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLW9wdGlvbiAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tb3B0aW9uIC50b2dnbGUtYWNjb3JkaW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmE2YzZmO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLW9wdGlvbiAudG9nZ2xlLWFjY29yZGlvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJFeHBhbmQgQWxsXCI7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tb3B0aW9uIC50b2dnbGUtYWNjb3JkaW9uLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJDb2xsYXBzZSBBbGxcIjtcclxufVxyXG5cclxuLmlubmVyLXRhYmxlIHRyIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5tdC0tM3tcclxuICAgIG1hcmdpbi10b3AgOiAtM3B4O1xyXG59XHJcblxyXG4ubG9va3VwX3NlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC5vcHRpX3NlYXJjaHtcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlYXJjaHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNydWxlX291dHB1dF90YWJsZV9sb29rdXB7XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBtaW4td2lkdGg6IDEyNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEyNTBweDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHRoOm50aC1jaGlsZCgxKSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICB3aWR0aDogNiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCgyKSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aDpudGgtY2hpbGQoMyksXHJcbiAgICAgICAgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGg6bnRoLWNoaWxkKDQpLFxyXG4gICAgICAgIHRyIHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCg1KSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgICB3aWR0aDogNyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCg2KSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgICB3aWR0aDogNiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCg3KSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoNykge1xyXG4gICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCg4KSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoOCkge1xyXG4gICAgICAgICAgICB3aWR0aDogNyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCg5KSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoOSkge1xyXG4gICAgICAgICAgICB3aWR0aDogNiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOm50aC1jaGlsZCgxMCksXHJcbiAgICAgICAgdHIgdGQ6bnRoLWNoaWxkKDEwKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGg6bnRoLWNoaWxkKDExKSxcclxuICAgICAgICB0ciB0ZDpudGgtY2hpbGQoMTEpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/lookup/lookup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/lookup/lookup.component.ts ***!
  \***************************************************/
/*! exports provided: LookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupComponent", function() { return LookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");


// import { CommonService } from '../../../services/common.service';
// import * as XLSX from 'ts-xlsx';
// import { FeaturemodelService } from '../../../services/featuremodel.service';
// import { ModelbomService } from '../../../services/modelbom.service';
// import { CommonData, ColumnSetting } from "../../../models/CommonData";




// import { UIHelper } from '../../../helpers/ui.helpers';
// import { Http, ResponseContentType } from '@angular/http';
var LookupComponent = /** @class */ (function () {
    function LookupComponent(toastr, translate, router) {
        this.toastr = toastr;
        this.translate = translate;
        this.router = router;
        this.lookupvalue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lookupkey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.table_head = [];
        this.dialogOpened = true;
        this.pagable = false;
        this.isColumnFilter = false;
        this.isColumnGroup = false;
        this.showLoader = false;
        this.showSelection = false;
        this.selectedValues = [];
        this.mySelection = [];
        this.state = {
            skip: 0,
            take: 5,
            // Initial filter descriptor
            filter: {
                logic: 'and',
                filters: []
            }
        };
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    LookupComponent.prototype.close_kendo_dialog = function () {
        if (this.lookupfor == "PhyCntItemList") {
            this.router.navigate(['home/dashboard']);
        }
        else {
            this.dialogOpened = false;
        }
    };
    LookupComponent.prototype.clearFilters = function () {
        this.state.filter = {
            logic: 'and',
            filters: []
        };
    };
    LookupComponent.prototype.onFilterChange = function (checkBox, grid) {
        if (checkBox.checked == false) {
            this.clearFilter(grid);
        }
    };
    LookupComponent.prototype.clearFilter = function (grid) {
        this.clearFilters();
    };
    LookupComponent.prototype.ngOnInit = function () {
    };
    LookupComponent.prototype.ngOnChanges = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.lookupfor == "toWhsList") {
                    this.showToWhsList();
                }
                else if (this.lookupfor == "ItemsList") {
                    this.showItemCodeList();
                }
                else if (this.lookupfor == "BatchNoList") {
                    this.showBatchNoList();
                }
                else if (this.lookupfor == "NTrackFromBin") {
                    this.showNTrackFromBinList();
                }
                else if (this.lookupfor == "SBTrackFromBin") {
                    this.showSBTrackFromBinList();
                }
                else if (this.lookupfor == "toBinsList") {
                    this.showSBTrackFromBinList();
                }
                else if (this.lookupfor == "RecvBinList") {
                    this.showRecvBinList();
                }
                else if (this.lookupfor == "VendorList") {
                    this.showVendorList();
                }
                else if (this.lookupfor == "POList") {
                    this.showPOList();
                }
                else if (this.lookupfor == "POItemList") {
                    this.showPOItemList();
                }
                else if (this.lookupfor == "out-customer") {
                    this.showCustomerList();
                }
                else if (this.lookupfor == "out-items") {
                    this.showAvaliableItems();
                }
                else if (this.lookupfor == 'out-order') {
                    this.showOutSOList();
                }
                else if (this.lookupfor == "LotsList") {
                    this.showLotsList();
                }
                else if (this.lookupfor == "FromBinList") {
                    this.showBinList();
                }
                else if (this.lookupfor == "ToBinList") {
                    this.showBinList();
                }
                else if (this.lookupfor == "OrderList") {
                    this.orderList();
                }
                else if (this.lookupfor == "PhyCntItemList") {
                    this.ShowPhyCntItemList();
                }
                else if (this.lookupfor == "showPhyCntItemsList") {
                    this.ShowPhyCntInnerItemList();
                }
                else if (this.lookupfor == "ShowBatachSerList") {
                    this.ShowBatachSerList();
                }
                else if (this.lookupfor = "PIOrderList") {
                    this.orderList();
                }
                this.clearFilters();
                this.isColumnFilter = false;
                return [2 /*return*/];
            });
        });
    };
    LookupComponent.prototype.showToWhsList = function () {
        this.table_head = [
            {
                field: 'WHSCODE',
                title: this.translate.instant("WhseCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'WHSName',
                title: this.translate.instant("WhseName"),
                type: 'text',
                width: '100'
            },
        ];
        this.lookupTitle = this.translate.instant("WarehouseList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showAvaliableItems = function () {
        this.pagesize = 5;
        if (this.serviceData.length > this.pagesize) {
            this.pagable = true;
        }
        else {
            this.pagable = false;
        }
        this.showSelection = true;
        this.selectedValues = [];
        this.table_head = [
            {
                field: 'LOTNO',
                title: this.translate.instant("BatchSerial_No"),
                type: 'text',
                width: '100'
            },
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            },
            {
                field: 'TOTALQTY',
                headerClass: 'text-right',
                class: 'text-right',
                title: this.translate.instant("AvailableQty"),
                type: 'numeric',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("AvaliableMeterial");
        if (this.serviceData !== undefined) {
            var len = this.serviceData.length;
            if (len > 0) {
                //  console.log('ServiceData', this.serviceData);
                var tempData;
                for (var i = 0; i < len; i++) {
                    var qty = Number(this.serviceData[i].TOTALQTY).toFixed(Number(localStorage.getItem("DecimalPrecision")));
                    this.serviceData[i].TOTALQTY = qty;
                }
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showBatchNoList = function () {
        this.table_head = [
            {
                field: 'LOTNO',
                title: this.translate.instant("BatchSerial_No"),
                type: 'text',
                width: '100'
            },
            {
                field: 'ITEMCODE',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'TOTALQTY',
                headerClass: 'text-right',
                class: 'text-right',
                title: this.translate.instant("TOTALQTY"),
                type: 'text',
                width: '100'
            },
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            },
            {
                field: 'ITEMNAME',
                title: this.translate.instant("ItemName"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("Palletmessage.Lot");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showNTrackFromBinList = function () {
        this.table_head = [
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100',
                headerClass: '',
                class: '',
            },
            {
                field: 'TOTALQTY',
                headerClass: 'text-right',
                class: 'text-right',
                title: this.translate.instant("TOTALQTY"),
                type: 'text',
                width: '100',
            },
            {
                field: 'WHSCODE',
                title: this.translate.instant("WhseCode"),
                type: 'text',
                width: '100',
                headerClass: '',
                class: '',
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_BinNoList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showSBTrackFromBinList = function () {
        this.table_head = [
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            },
            {
                field: 'WHSCODE',
                title: this.translate.instant("WhseCode"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_BinNoList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showToBinsList = function () {
        this.table_head = [
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            },
            {
                field: 'WHSCODE',
                title: this.translate.instant("WhseCode"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_BinNoList");
    };
    LookupComponent.prototype.showRecvBinList = function () {
        this.table_head = [
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_BinNoList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showCustomerList = function () {
        this.table_head = [
            {
                title: this.translate.instant("CustomerCode"),
                field: 'CUSTOMER CODE',
                type: 'text',
                width: '100'
            },
            {
                title: this.translate.instant("Name"),
                field: 'CUSTOMER NAME',
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("CustomerList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showVendorList = function () {
        this.table_head = [
            {
                field: 'CARDCODE',
                title: this.translate.instant("VendorCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'CARDNAME',
                title: this.translate.instant("VendorName"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("VendorList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showPOItemList = function () {
        this.table_head = [
            {
                field: 'ItemCode',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'ItemName',
                title: this.translate.instant("ItemName"),
                type: 'text',
                width: '100'
            },
        ];
        this.lookupTitle = this.translate.instant("ItemsList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showPOList = function () {
        this.table_head = [
            {
                field: 'DocNum',
                title: this.translate.instant("PO#"),
                type: 'numeric',
                width: '100'
            },
            {
                field: 'DocDueDate',
                title: this.translate.instant("DelDate"),
                type: 'date',
                width: '100'
            } //,
            // {
            //   field: 'CardCode',
            //   title: this.translate.instant("VendorCode"),
            //   type: 'text',
            //   width: '100'
            // },
            // {
            //   field: 'CardName',
            //   title: this.translate.instant("VendorName"),
            //   type: 'text',
            //   width: '100'
            // }
        ];
        this.lookupTitle = this.translate.instant("POList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.ShowPhyCntItemList = function () {
        this.table_head = [
            {
                field: 'DocNum',
                title: this.translate.instant("DocNum"),
                headerClass: 'text-right',
                class: 'text-right',
                type: 'numeric',
                width: '50'
            },
            {
                field: 'ItemCode',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'Bin',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '180'
            },
            {
                field: 'InWhsQty',
                title: this.translate.instant("OnHandQty"),
                headerClass: 'text-right',
                class: 'text-right',
                type: 'numeric',
                width: '70'
            },
            {
                field: 'CountDate',
                title: this.translate.instant("CountDate"),
                type: 'text',
                width: '70'
            },
            {
                field: 'IsTeamCount',
                title: this.translate.instant("TeamCount"),
                type: 'text',
                width: '70'
            }
        ];
        this.lookupTitle = this.translate.instant("ItemsList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.ShowBatachSerList = function () {
        this.table_head = [
            {
                field: 'LOTNO',
                title: this.translate.instant("BatchSerial_No"),
                type: 'text'
            },
            {
                field: 'ITEMCODE',
                title: this.translate.instant("ItemCode"),
                type: 'text'
            },
            {
                field: 'TOTALQTY',
                title: this.translate.instant("TOTALQTY"),
                headerClass: 'text-right',
                class: 'text-right',
                type: 'numeric',
            },
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text'
            }
        ];
        this.lookupTitle = this.translate.instant("Palletmessage.Lot");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.ShowPhyCntInnerItemList = function () {
        this.table_head = [
            {
                field: 'ItemCode',
                title: this.translate.instant("ItemCode"),
                type: 'text'
            },
            {
                field: 'BinCode',
                title: this.translate.instant("BinNo"),
                type: 'text'
            }
        ];
        this.lookupTitle = this.translate.instant("ItemsList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showOutSOList = function () {
        this.table_head = [
            {
                field: 'DOCNUM',
                title: 'SO#',
                type: 'numeric',
                width: '100'
            },
            {
                field: 'DOCDUEDATE',
                title: 'Del. Date',
                type: 'date',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("SalesOrderList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.on_item_select = function (selection) {
        if (!this.showSelection) {
            var lookup_key = selection.selectedRows[0].dataItem;
            //console.log("lookup_key - " + lookup_key);
            // console.log(lookup_key);
            this.lookupkey.emit(lookup_key);
            this.lookupvalue.emit(Object.values(lookup_key));
            //  console.log(selection);
            selection.selectedRows = [];
            selection.index = 0;
            selection.selected = false;
            this.serviceData = [];
            this.dialogOpened = false;
        }
    };
    LookupComponent.prototype.showLotsList = function () {
        var titleValue = this.translate.instant("BatchNo");
        if (this.serviceData !== undefined && this.serviceData.length > 0) {
            if ("S" == this.serviceData[0].TRACKING) {
                titleValue = this.translate.instant("SerialNo");
            }
            else if ("N" == this.serviceData[0].TRACKING) {
                titleValue = this.serviceData[0].TRACKING;
            }
        }
        this.table_head = [
            {
                field: 'LOTNO',
                title: titleValue,
                type: 'text',
                width: '100'
            },
            {
                field: 'ITEMCODE',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            }
        ];
        if ("N" == titleValue) {
            this.table_head.splice(0, 1);
        }
        this.lookupTitle = this.translate.instant("BatchSrBinList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showBinList = function () {
        this.table_head = [
            {
                field: 'BINNO',
                title: this.translate.instant("BinNo"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_BinNoList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.orderList = function () {
        this.table_head = [
            {
                field: 'Order No',
                title: this.translate.instant("OrderNo"),
                type: 'text',
                width: '100'
            },
            {
                field: 'Item',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            }
        ];
        this.lookupTitle = this.translate.instant("LookupTitle_OrderList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.showItemCodeList = function () {
        this.table_head = [
            {
                field: 'ITEMCODE',
                title: this.translate.instant("ItemCode"),
                type: 'text',
                width: '100'
            },
            {
                field: 'ITEMNAME',
                title: this.translate.instant("ItemName"),
                type: 'text',
                width: '100'
            },
        ];
        this.lookupTitle = this.translate.instant("ItemsList");
        if (this.serviceData !== undefined) {
            if (this.serviceData.length > 0) {
                this.dialogOpened = true;
            }
        }
    };
    LookupComponent.prototype.onCheckboxClick = function (checked, index) {
        var servivceItem = this.serviceData[index];
        if (checked) {
            this.selectedValues.push(servivceItem);
        }
        else {
            // let rixd: number= this.selectedValues.findIndex(i => i.LOTNO == servivceItem.LOTNO && i.LOTNO == servivceItem.BINNO)
            var temp = this.selectedValues.splice(index, 1);
            this.selectedValues = this.selectedValues;
            console.log("selectedValues.size", this.selectedValues.length);
        }
    };
    LookupComponent.prototype.Done = function () {
        this.lookupkey.emit(this.selectedValues);
        this.dialogOpened = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lookupsearch"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LookupComponent.prototype, "_el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "serviceData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "lookupfor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "fillLookupArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "selectedImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "lookupvalue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "lookupkey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupComponent.prototype, "ruleselected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LookupComponent.prototype, "myInputVariable", void 0);
    LookupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lookup',
            template: __webpack_require__(/*! ./lookup.component.html */ "./src/app/common/lookup/lookup.component.html"),
            styles: [__webpack_require__(/*! ./lookup.component.scss */ "./src/app/common/lookup/lookup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LookupComponent);
    return LookupComponent;
}());



/***/ }),

/***/ "./src/app/common/number-format.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/common/number-format.pipe.ts ***!
  \**********************************************/
/*! exports provided: NumberFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return NumberFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberFormatPipe = /** @class */ (function () {
    function NumberFormatPipe() {
    }
    NumberFormatPipe.prototype.transform = function (value, args) {
        var formattedNo = "";
        var precision = localStorage.getItem("DecimalPrecision");
        var decSeperator = localStorage.getItem("DecimalSeparator");
        var thSeperator = localStorage.getItem("ThousandSeparator");
        var dateFormat = localStorage.getItem("DATEFORMAT");
        if (value == null && value == undefined && value.toString() == "") {
            return value;
        }
        var arr = value.toString().trim().split(decSeperator);
        formattedNo = this.addDigitSeperatorToNo(arr[0], thSeperator);
        //logic to add . and ifs after place digit manage.
        if (arr != null && arr != undefined && arr[1] != undefined && arr[1] != null) {
            var noOfDigitsAfterDesimal = arr[1].length;
            formattedNo = this.addDecimalDigitsToNo(formattedNo, value.toString(), decSeperator);
        }
        else {
            // case when no has no decimal then directly add precision zeros.
            formattedNo = formattedNo + decSeperator;
            for (var i = 0; i < Number(precision); i++) {
                formattedNo = formattedNo + "0";
            }
        }
        console.log("case when no. not has decimal:", formattedNo);
        return formattedNo;
    };
    NumberFormatPipe.prototype.addDigitSeperatorToNo = function (numberStringBeforeDesimal, seperator) {
        var newNo = "";
        if (numberStringBeforeDesimal.length > 3 && numberStringBeforeDesimal.length < 7) {
            newNo = numberStringBeforeDesimal.substring(0, numberStringBeforeDesimal.length - 3) + seperator + numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 3, numberStringBeforeDesimal.length);
        }
        else if (numberStringBeforeDesimal.length > 6 && numberStringBeforeDesimal.length < 10) {
            newNo = numberStringBeforeDesimal.substring(0, numberStringBeforeDesimal.length - 6) + seperator + numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 6, numberStringBeforeDesimal.length - 3)
                + seperator + numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 3, numberStringBeforeDesimal.length);
        }
        else if (numberStringBeforeDesimal.length > 9 && numberStringBeforeDesimal.length < 13) {
            newNo = numberStringBeforeDesimal.substring(0, numberStringBeforeDesimal.length - 9) + seperator +
                numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 9, numberStringBeforeDesimal.length - 6) + seperator + numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 6, numberStringBeforeDesimal.length - 3)
                + seperator + numberStringBeforeDesimal.substring(numberStringBeforeDesimal.length - 3, numberStringBeforeDesimal.length);
        }
        else {
            newNo = numberStringBeforeDesimal;
        }
        return newNo;
    };
    NumberFormatPipe.prototype.addDecimalDigitsToNo = function (formattedString, no, DecimalSeparator) {
        var noOfDigitsAfterDesimal = no.toString().split(DecimalSeparator)[1].length;
        var precision = localStorage.getItem("DecimalPrecision");
        if (noOfDigitsAfterDesimal == 0) {
            formattedString = formattedString + DecimalSeparator;
            for (var i = 0; i < Number(precision); i++) {
                formattedString = formattedString + "0";
            }
        }
        else {
            formattedString = formattedString + DecimalSeparator + no.toString().split(DecimalSeparator)[1];
            var zeroCount = 0;
            if (noOfDigitsAfterDesimal < Number(precision)) {
                zeroCount = Number(precision) - noOfDigitsAfterDesimal;
            }
            for (var i = 0; i < zeroCount; i++) {
                formattedString = formattedString + "0";
            }
        }
        return formattedString;
    };
    NumberFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'numberFormat'
        })
    ], NumberFormatPipe);
    return NumberFormatPipe;
}());



/***/ }),

/***/ "./src/app/const/common-constants.ts":
/*!*******************************************!*\
  !*** ./src/app/const/common-constants.ts ***!
  \*******************************************/
/*! exports provided: CommonConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonConstants", function() { return CommonConstants; });
var CommonConstants = /** @class */ (function () {
    function CommonConstants() {
    }
    CommonConstants.OutboundData = "OutboundData";
    return CommonConstants;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: opticonstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opticonstants", function() { return opticonstants; });
var opticonstants = {
    DEFAULTTHEMECOLOR: '#1fa2ff',
    OPALTHEMECOLOR: '#13688c',
    URBANTHEMECOLOR: '#ff804d',
    SKYPETHEMECOLOR: '#428bca',
    GREEN: '#8bcb6e',
    STRIPE: '#1fa2ff',
    COFFEE: '#595959',
    NEWTREND2018: '#329ac2',
    CASTFY: '#ff8382',
    SUNRISE: '#ff512f',
    MALDIVE: '#0ed2f7',
    BORABORA: '#2bc0e4',
    BLUELAGOO: '#0052d4',
    STRIPEID: 'stripe',
    URBANID: 'urban',
    SKYPEID: 'skype',
    GREENID: 'green',
    COFFEEID: 'coffee',
    NEWTREND2018ID: 'newtrend',
    CASTFYID: 'castify',
    SUNRISEID: 'sunrise',
    MALDIVEID: 'maldive',
    BORABORAID: 'borabora',
    BLUELAGOOID: 'bluelagoo'
};


/***/ }),

/***/ "./src/app/helpers/ui.helpers.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/ui.helpers.ts ***!
  \***************************************/
/*! exports provided: UIHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHelper", function() { return UIHelper; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//===============================================================================
// © 2018 Optipro.  All rights reserved.
// Original Author: Shashank Jain
// Original Date: 10 March 2018
//==============================================================================

var UIHelper = /** @class */ (function () {
    function UIHelper() {
    }
    // start sidebar and right panel manage
    // this function will call only for desktop and ipad
    UIHelper.manageNavigationPanel = function (e) {
        e.onclick = function () {
            if (UIHelper.isMobile() == false) {
                document.getElementById('opti_LeftPanelID').classList.toggle('opti_sidebar-minimize');
                document.getElementById('opti_RightPanelID').classList.toggle('opti_sidebar-minimize');
            }
            else {
                document.getElementById('opti_LeftPanelID').classList.toggle('opti_menusidebar-mobile-open');
                document.getElementById('opti_RightPanelID').classList.toggle('opti_menusidebar-mobile-open');
            }
        };
    };
    // Apply class on the basis of device
    UIHelper.deviceClass = function () {
        var isDevice;
        var getDeviceWidth = screen.width;
        //alert(getDeviceWidth);
    };
    // check is it mobile or not
    UIHelper.isMobile = function () {
        var isMobile;
        // let getDeviceWidth = window.outerWidth;
        // let getDeviceHeight = window.outerHeight;
        var getDeviceWidth = screen.width;
        var getDeviceHeight = screen.height;
        //alert(getDeviceWidth);
        // alert(getDeviceHeight);
        if (getDeviceWidth <= 767) {
            isMobile = true;
        }
        else {
            isMobile = false;
        }
        return isMobile;
    };
    // get main content height for mobile and desktop
    UIHelper.getMainContentHeight = function () {
        var mainContenntHeight;
        if (UIHelper.isMobile() == false) {
            mainContenntHeight = window.innerHeight - 85;
        }
        else {
            mainContenntHeight = window.innerHeight - 85;
        }
        return mainContenntHeight;
    };
    // Apply Theme CSS FILE
    UIHelper.manageThemeCssFile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('#opal').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_blue_opal.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            // $('#bootstrap').click(function (){
            //     $('footer').find('link.opti__theme-css-file').remove();
            //     $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo.custom.bootstrap.v3.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            // });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#urban').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_urban.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#skype').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_skype.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#green').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_green.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#stripe').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_stripe.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#coffee').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_coffee.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#newtrend').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_newtrend18.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#castify').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_castify.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#sunrise').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_sunrise.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#maldive').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_maldive.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#borabora').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_borabora.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__('#bluelagoo').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').find('link.opti__theme-css-file').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0__('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_bluelagoo.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
        });
    };
    // our custom tab section
    UIHelper.customOpenTab = function (evt, type) {
        if (type == 'horizontal') {
            var i, tabcontent, tablinks;
            // tabcontent = document.getElementsByClassName("opti_tabcontent");
            // for (i = 0; i < tabcontent.length; i++) {
            //     tabcontent[i].style.display = "none";
            // }
            tablinks = document.getElementsByClassName("opti_tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }
            //document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        else {
            var i, tabcontent, tablinks;
            // tabcontent = document.getElementsByClassName("opti_tabcontent");
            // for (i = 0; i < tabcontent.length; i++) {
            //     tabcontent[i].style.display = "none";
            // }
            tablinks = document.getElementsByClassName("opti_tablinks-vertical");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }
            //document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    };
    return UIHelper;
}());



/***/ }),

/***/ "./src/app/models/Production/IFP.ts":
/*!******************************************!*\
  !*** ./src/app/models/Production/IFP.ts ***!
  \******************************************/
/*! exports provided: Item, Lot, ProductionIssueModel, RootObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lot", function() { return Lot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionIssueModel", function() { return ProductionIssueModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootObject", function() { return RootObject; });
var Item = /** @class */ (function () {
    function Item() {
    }
    ; // 5,
    return Item;
}());

var Lot = /** @class */ (function () {
    function Lot() {
    }
    return Lot;
}());

var ProductionIssueModel = /** @class */ (function () {
    function ProductionIssueModel() {
    }
    return ProductionIssueModel;
}());

var RootObject = /** @class */ (function () {
    function RootObject() {
    }
    return RootObject;
}());



/***/ }),

/***/ "./src/app/models/outbound/out-del-req.ts":
/*!************************************************!*\
  !*** ./src/app/models/outbound/out-del-req.ts ***!
  \************************************************/
/*! exports provided: SOHEADER, SODETAIL, DeliveryToken, RootObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOHEADER", function() { return SOHEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SODETAIL", function() { return SODETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryToken", function() { return DeliveryToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootObject", function() { return RootObject; });
var SOHEADER = /** @class */ (function () {
    function SOHEADER() {
    }
    return SOHEADER;
}());

var SODETAIL = /** @class */ (function () {
    function SODETAIL() {
    }
    return SODETAIL;
}());

var DeliveryToken = /** @class */ (function () {
    function DeliveryToken() {
    }
    return DeliveryToken;
}());

var RootObject = /** @class */ (function () {
    function RootObject() {
    }
    return RootObject;
}());



/***/ }),

/***/ "./src/app/models/outbound/outbound-data.ts":
/*!**************************************************!*\
  !*** ./src/app/models/outbound/outbound-data.ts ***!
  \**************************************************/
/*! exports provided: OutboundData, CurrentOutBoundData, CurrentCustomerData, CurrentOrderData, CurrentSelectedItem, CurrentSelectedMeterials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundData", function() { return OutboundData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentOutBoundData", function() { return CurrentOutBoundData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCustomerData", function() { return CurrentCustomerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentOrderData", function() { return CurrentOrderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSelectedItem", function() { return CurrentSelectedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSelectedMeterials", function() { return CurrentSelectedMeterials; });
var OutboundData = /** @class */ (function () {
    function OutboundData() {
        this.TempSavedData = [];
        this.DeleiveryCollection = [];
        this.TempMeterials = [];
    }
    return OutboundData;
}());

var CurrentOutBoundData = /** @class */ (function () {
    function CurrentOutBoundData() {
    }
    CurrentOutBoundData.CustomerData = null;
    return CurrentOutBoundData;
}());

var CurrentCustomerData = /** @class */ (function () {
    function CurrentCustomerData() {
    }
    CurrentCustomerData.OrderData = [];
    return CurrentCustomerData;
}());

var CurrentOrderData = /** @class */ (function () {
    function CurrentOrderData() {
    }
    CurrentOrderData.SelectedItem = null;
    return CurrentOrderData;
}());

var CurrentSelectedItem = /** @class */ (function () {
    function CurrentSelectedItem() {
    }
    CurrentSelectedItem.SelectedMeterials = [];
    return CurrentSelectedItem;
}());

var CurrentSelectedMeterials = /** @class */ (function () {
    function CurrentSelectedMeterials() {
    }
    return CurrentSelectedMeterials;
}());



/***/ }),

/***/ "./src/app/models/outbound/request-model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/outbound/request-model.ts ***!
  \**************************************************/
/*! exports provided: OutRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutRequest", function() { return OutRequest; });
var OutRequest = /** @class */ (function () {
    function OutRequest() {
    }
    return OutRequest;
}());



/***/ }),

/***/ "./src/app/outbound/out-cutomer/out-cutomer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/outbound/out-cutomer/out-cutomer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'Outbound_Delivery'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Outbound_Customer'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input (blur)=\"onCustomerCodeBlur()\" [disabled]='orderCollection!=undefined && orderCollection!=null && orderCollection.length>0'\r\n                                    type=\"text\" class=\"form-control form-control-sm\" name='customerCode' [(ngModel)]=\"customerCode\"\r\n                                    placeholder=\"{{'Outbound_Customer'|translate}}\" >\r\n                                <div class=\"input-group-append\">\r\n                                    <button [disabled]='orderCollection!=undefined && orderCollection!=null && orderCollection.length>0'\r\n                                        class=\"k-button k-primary btn\" (click)=\"openCustomerLookup()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- *ngIf=\"customerName!=undefined && customerName!=''\" -->\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Name'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"customerName\" value=\"{{customerName}}\"\r\n                                    [disabled]=\"true\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf='(orderCollection!==undefined && orderCollection!==null && orderCollection.length>0)'>\r\n                <div class=\"col-12\">\r\n\r\n                    <div>\r\n                        <!-- (selectionChange)=\"openPOByUOM($event,soItemsDetail.ITEMCODE)\" -->\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"orderCollection\" [resizable]=\"true\"\r\n                            [pageSize]=\"pageSize\" [pageable]=\"pagable\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                            [height]=gridHeight (selectionChange)=\"openOrderScreen($event)\"\r\n                            [selectable]=\"true\" #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <dl class=\"opti_mobile_grid_dl w-100\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'OrderNo'|translate}}\r\n                                            <button id=\"removeSelectedMeterial\" (click)=\"removeOrder(idx,gridItem)\" \r\n                                                class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\">\r\n                                                <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                                        </dt>\r\n                                        <dd>{{ dataItem.DOCNUM }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column media=\"(min-width: 768px)\"  field=\"DOCNUM\" title=\"Order No\"></kendo-grid-column>\r\n                            <kendo-grid-column headerClass=\"text-center\" class=\"text-center\" media=\"(min-width: 768px)\"  field=\"DOCNUM\" [width]=\"80\" title=\"{{'Delete'|translate}}\">\r\n                                <ng-template kendoGridCellTemplate let-idx=\"rowIndex\">\r\n                                    <button id=\"removeSelectedMeterial\" (click)=\"removeOrder(idx,gridItem)\" class=\"btn btn-danger k-button btn-sm btn-icon\">\r\n                                        <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                        </kendo-grid>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" [hidden]='!(orderCollection!==undefined && orderCollection!==null && orderCollection.length>0)'\r\n                    (click)=\"prepareDeleiveryCollection()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Deleiver'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"cancel()\"><span\r\n                        class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" [disabled]=\"!customerCode\"\r\n                    (click)=\"openCustSO(true)\" roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button>\r\n\r\n            </div> \r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>\r\n<!-- Lookup -->\r\n<span *ngIf=\"showLookup==true && showLookupLoader==false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<!-- Loader -->\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<!-- Dialog -->\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        [yesButtonText]=\"yesButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/outbound/out-cutomer/out-cutomer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/outbound/out-cutomer/out-cutomer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGJvdW5kL291dC1jdXRvbWVyL291dC1jdXRvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/outbound/out-cutomer/out-cutomer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/outbound/out-cutomer/out-cutomer.component.ts ***!
  \***************************************************************/
/*! exports provided: OutCutomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutCutomerComponent", function() { return OutCutomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/outbound.service */ "./src/app/services/outbound.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/outbound/outbound-data */ "./src/app/models/outbound/outbound-data.ts");
/* harmony import */ var src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/const/common-constants */ "./src/app/const/common-constants.ts");
/* harmony import */ var src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/outbound/out-del-req */ "./src/app/models/outbound/out-del-req.ts");










var OutCutomerComponent = /** @class */ (function () {
    function OutCutomerComponent(outboundservice, router, commonservice, toastr, translate) {
        this.outboundservice = outboundservice;
        this.router = router;
        this.commonservice = commonservice;
        this.toastr = toastr;
        this.translate = translate;
        this.dialogMsg = "Do you want to delete?";
        this.yesButtonText = "Yes";
        this.noButtonText = "No";
        this.lookupfor = 'out-customer';
        this.showLookup = false;
        this.customerName = '';
        this.customerCode = '';
        this.showLookupLoader = false;
        this.uomList = [];
        this.pagable = false;
        this.pageSize = 10;
    }
    OutCutomerComponent.prototype.ngOnInit = function () {
        this.customerName = '';
        this.customerCode = '';
        this.showLookup = false;
        // lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData);
        if (outboundData !== undefined && outboundData !== '' && outboundData !== null) {
            this.outbound = JSON.parse(outboundData);
            if (this.outbound != undefined && this.outbound != null) {
                if (this.outbound
                    && this.outbound.CustomerData !== undefined && this.outbound.CustomerData !== null) {
                    this.customerCode = this.outbound.CustomerData.CustomerCode;
                    this.customerName = this.outbound.CustomerData.CustomerName;
                }
                if (this.outbound.DeleiveryCollection !== undefined && this.outbound.DeleiveryCollection !== null && this.outbound.DeleiveryCollection.length > 0) {
                    this.orderCollection = this.getUniqueValuesByProperty(this.outbound.DeleiveryCollection);
                    if (this.orderCollection.length > this.pageSize) {
                        this.pagable = true;
                    }
                }
            }
        }
    };
    OutCutomerComponent.prototype.getUniqueValuesByProperty = function (data) {
        var items = [];
        var _loop_1 = function (index) {
            var element = data[index];
            if (items.length > 0) {
                var sameItem = items.filter(function (i) { return element.Item.DOCNUM === i.DOCNUM; });
                if (sameItem.length <= 0) {
                    items.push(element.Item);
                }
            }
            else {
                items.push(element.Item);
            }
        };
        for (var index = 0; index < data.length; index++) {
            _loop_1(index);
        }
        return items;
    };
    OutCutomerComponent.prototype.getUniqueValuesByProperty1 = function (data) {
        var items = [];
        var _loop_2 = function (index) {
            var element = data[index];
            if (items.length > 0) {
                var sameItem = items.filter(function (i) { return element.Item.DOCNUM === i.DOCNUM
                    && element.Item.Tracking === i.Tracking; });
                if (sameItem.length <= 0) {
                    items.push(element.Item);
                }
            }
            else {
                items.push(element.Item);
            }
        };
        for (var index = 0; index < data.length; index++) {
            _loop_2(index);
        }
        return items;
    };
    OutCutomerComponent.prototype.onCustomerCodeBlur = function () {
        var _this = this;
        this.outboundservice.getCustomer(this.customerCode).subscribe(function (resp) {
            if (resp.length == 0) {
                _this.customerCode = null;
                _this.customerName = '';
            }
            else {
                var outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__["OutboundData"]();
                _this.customerCode = resp[0].CUSTCODE;
                _this.customerName = resp[0].CUSTNAME;
                outbound.CustomerData = { CustomerCode: _this.customerCode, CustomerName: _this.customerName };
                // lsOutbound
                localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, JSON.stringify(outbound));
                src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__["CurrentOutBoundData"].CustomerData = outbound.CustomerData;
            }
        });
    };
    OutCutomerComponent.prototype.getLookupValue = function (lookupValue) {
        this.selectedCustomerElement = lookupValue;
        var outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__["OutboundData"]();
        this.customerCode = this.selectedCustomerElement[0];
        this.customerName = this.selectedCustomerElement[1];
        outbound.CustomerData = { CustomerCode: this.customerCode, CustomerName: this.customerName };
        // lsOutbound
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, JSON.stringify(outbound));
        src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__["CurrentOutBoundData"].CustomerData = outbound.CustomerData;
        this.outbound = outbound;
    };
    OutCutomerComponent.prototype.openCustomerLookup = function () {
        var _this = this;
        this.showLookupLoader = true;
        this.outboundservice.getCustomerList().subscribe(function (resp) {
            if (resp != undefined && resp != null) {
                if (resp[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                    return;
                }
                //this.showLookup = true;
                _this.serviceData = resp;
                _this.showLookupLoader = false;
                if (_this.serviceData.length > 0) {
                    _this.showLookup = true;
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                _this.showLookupLoader = false;
                _this.showLookup = false;
            }
        }, function (error) {
            console.log("Error:", error);
            _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
            _this.showLookupLoader = false;
            _this.showLookup = false;
        }, function () {
            _this.showLookupLoader = false;
        });
    };
    OutCutomerComponent.prototype.openCustSO = function (clearOrder) {
        if (clearOrder === void 0) { clearOrder = false; }
        // Clear otred data
        if (this.outbound)
            this.outbound.OrderData = null;
        if (clearOrder == true)
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        this.router.navigateByUrl('home/outbound/outorder', { skipLocationChange: true });
    };
    OutCutomerComponent.prototype.cancel = function () {
        // lsOutbound   
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, null);
        src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_7__["CurrentOutBoundData"].CustomerData = null;
        this.router.navigateByUrl('home/dashboard');
    };
    OutCutomerComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        // Yes
        if ($event.Status === 'yes') {
            this.removeOrderMain(this.delIdx, this.delGrd);
        }
        else if ($event.Status === 'no') {
        }
        else {
        }
    };
    OutCutomerComponent.prototype.clearOutbound = function () {
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, null);
        this.orderCollection = [];
        this.customerName = '';
        this.customerCode = '';
        this.showLookup = false;
    };
    OutCutomerComponent.prototype.prepareDeleiveryCollection = function () {
        var _this = this;
        if (this.outbound != null && this.outbound != undefined
            && this.outbound.DeleiveryCollection != null && this.outbound.DeleiveryCollection != undefined
            && this.outbound.DeleiveryCollection.length > 0) {
            //let tempDeleiveryCollection: any[] = this.outbound.DeleiveryCollection;
            var arrSOHEADER = [];
            var arrSODETAIL = [];
            var deliveryToken = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["DeliveryToken"]();
            // Hdr
            var comDbId = localStorage.getItem('CompID');
            var token = localStorage.getItem('Token');
            var guid = localStorage.getItem('GUID');
            var uid = localStorage.getItem('UserId');
            var hdrLine = 0;
            var limit = -1;
            var hdrLineVal = 0;
            var _loop_3 = function (index) {
                //get first item from collection        
                var element = this_1.outbound.DeleiveryCollection[index];
                // let coll=Get all Item for Item.Lineno===i
                var lineDeleiveryCollection = this_1.outbound.DeleiveryCollection.filter(function (d) {
                    //d.Item.LINENUM === element.Item.LINENUM
                    return element.Order.DOCNUM === d.Order.DOCNUM &&
                        element.Item.DOCENTRY === d.Item.DOCENTRY &&
                        element.Item.TRACKING === d.Item.TRACKING;
                });
                // Process Order Item and Tracking collection
                for (var hIdx = 0; hIdx < lineDeleiveryCollection.length; hIdx++) {
                    var o = lineDeleiveryCollection[hIdx];
                    // check hdr exists
                    var existHdr = false;
                    for (var index_1 = 0; index_1 < arrSOHEADER.length; index_1++) {
                        var h = arrSOHEADER[index_1];
                        if (h.SONumber === o.Order.DOCNUM
                            && h.ItemCode === o.Item.ITEMCODE
                            && h.Tracking === o.Item.TRACKING) {
                            existHdr = true;
                            break;
                        }
                    }
                    if (existHdr == false) {
                        // Add Header here and then add 
                        hdrLineVal = hdrLineVal + 1;
                        var hdr = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["SOHEADER"]();
                        // "DiServerToken":"66F7E7A4-D2AE-4E37-91E8-8BE390F2D32F",
                        // "SONumber":165,
                        // "CompanyDBId":"BUILD128SRC12X",
                        // "LineNo":0,
                        // "ShipQty":"2",
                        // "DocNum":165,
                        // "OpenQty":" 12.000",
                        // "WhsCode":"01",
                        // "Tracking":"S",
                        // "ItemCode":"Serial",
                        // "UOM":-1,
                        // "Line":0
                        hdr.DiServerToken = token;
                        hdr.SONumber = o.Item.DOCENTRY;
                        hdr.CompanyDBId = comDbId;
                        hdr.LineNo = o.Item.LINENUM;
                        var metQty = lineDeleiveryCollection.map(function (i) { return i.Meterial.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
                        hdr.ShipQty = metQty.toString();
                        hdr.DocNum = o.Order.DOCNUM;
                        hdr.OpenQty = o.Item.OPENQTY;
                        hdr.WhsCode = o.Item.WHSCODE;
                        hdr.Tracking = o.Item.TRACKING;
                        hdr.ItemCode = o.Item.ITEMCODE;
                        hdr.UOM = -1;
                        hdr.UOMName = o.Item.UOM;
                        hdr.Line = hdrLineVal;
                        arrSOHEADER.push(hdr);
                    }
                    // check weather item existe or not 
                    var hasDetail = false;
                    for (var index_2 = 0; index_2 < arrSODETAIL.length; index_2++) {
                        var element_1 = arrSODETAIL[index_2];
                        if (element_1.LotNumber === o.Meterial.LOTNO && element_1.Bin === o.Meterial.BINNO && element_1.parentLine === hdrLineVal) {
                            hasDetail = true;
                            break;
                        }
                    }
                    if (hasDetail == false) {
                        // Add Detail here 
                        var dtl = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["SODETAIL"]();
                        // "Bin":"01-SYSTEM-BIN-LOCATION",
                        // "LotNumber":"08JANS000011",
                        // "LotQty":"1",
                        // "SysSerial":231,
                        // "parentLine":0,
                        // "GUID":"6d92d887-23bb-4390-85df-75e4caa7e328",
                        // "UsernameForLic":"Rishabh"
                        dtl.Bin = o.Meterial.BINNO;
                        dtl.LotNumber = o.Meterial.LOTNO;
                        dtl.LotQty = o.Meterial.MeterialPickQty;
                        dtl.SysSerial = o.Meterial.SYSNUMBER;
                        dtl.parentLine = hdrLineVal;
                        dtl.GUID = guid;
                        dtl.UsernameForLic = uid;
                        arrSODETAIL.push(dtl);
                    }
                    limit = limit + lineDeleiveryCollection.length;
                }
            };
            var this_1 = this;
            // Loop through delivery collection 
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                _loop_3(index);
            }
            if (arrSOHEADER.length > 0 && arrSODETAIL.length > 0) {
                deliveryToken.SOHEADER = arrSOHEADER;
                deliveryToken.SODETAIL = arrSODETAIL;
                deliveryToken.UDF = [];
            }
            this.showLookupLoader = true;
            this.outboundservice.addDeleivery(deliveryToken).subscribe(function (data) {
                if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                    _this.showLookupLoader = false;
                    _this.toastr.success('', _this.translate.instant("DeleiverySuccess") + " : " + data[0].SuccessNo);
                    _this.clearOutbound();
                }
                else if (data[0].ErrorMsg == "7001") {
                    _this.showLookupLoader = false;
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                else {
                    _this.showLookupLoader = false;
                    _this.toastr.error('', data[0].ErrorMsg);
                }
            }, function (error) {
                _this.showLookupLoader = false;
                console.log(error);
            });
        }
    };
    OutCutomerComponent.prototype.manageShipQty = function (arrSOHEADER) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var tarrSOHEADER, _loop_4, this_2, idx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                tarrSOHEADER = [];
                _loop_4 = function (idx) {
                    var o = arrSOHEADER[idx];
                    // Get UOM and value
                    this_2.outboundservice.getUOMList(o.ItemCode).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var selectedUOM;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uomList = data;
                                    selectedUOM = this.uomList.filter(function (u) { return u.UomName == o.UOMName; });
                                    selectedUOM = selectedUOM[0];
                                    o.UOM = selectedUOM.UomCode;
                                    o.ShipQty = (parseFloat(o.tShipQty) * parseFloat(selectedUOM.AltQty)).toString();
                                    return [4 /*yield*/, tarrSOHEADER.push(o)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                this_2 = this;
                for (idx = 0; idx < arrSOHEADER.length; idx++) {
                    _loop_4(idx);
                }
                return [2 /*return*/, tarrSOHEADER];
            });
        });
    };
    OutCutomerComponent.prototype.manageLineNo = function (hdrList, dtlList) {
        var tmpHdr = [];
        var tmpDtlList = [];
        var _loop_5 = function (index) {
            var hdr = hdrList[index];
            var lineDetailList = dtlList.filter(function (d) { return d.parentLine === hdr.LineNo; });
            // Detail
            for (var j = 0; j < lineDetailList.length; j++) {
                var linedtl = lineDetailList[j];
                linedtl.parentLine = index;
                tmpDtlList.push(linedtl);
            }
            hdr.Line = index;
            tmpHdr.push(hdr);
        };
        // Hdr
        for (var index = 0; index < hdrList.length; index++) {
            _loop_5(index);
        }
    };
    OutCutomerComponent.prototype.removeOrder = function (idx, grd) {
        this.delGrd = grd;
        this.delIdx = idx;
        this.showConfirmDialog = true;
    };
    OutCutomerComponent.prototype.removeOrderMain = function (idx, grd) {
        this.filterData(idx);
        this.orderCollection.splice(idx, 1);
        grd.data = this.orderCollection;
        if (this.orderCollection.length > this.pageSize) {
            this.pagable = true;
        }
    };
    OutCutomerComponent.prototype.filterData = function (idx) {
        var order = this.orderCollection[idx];
        this.outbound.DeleiveryCollection = this.outbound.DeleiveryCollection.filter(function (d) { return d.Order.DOCNUM !== order.DOCNUM; });
        this.outbound.TempMeterials = this.outbound.TempMeterials.filter(function (d) { return d.Order.DOCNUM !== order.DOCNUM; });
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
    };
    OutCutomerComponent.prototype.openOrderScreen = function (selection) {
        var selectedIinquiry = selection.selectedRows[0].dataItem;
        var orderList = this.outbound.DeleiveryCollection.filter(function (d) { return d.Order.DOCNUM === selectedIinquiry.DOCNUM; });
        if (orderList.length > 0) {
            this.outbound.OrderData = orderList[0].Order;
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_8__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            this.openCustSO();
        }
    };
    OutCutomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-out-cutomer',
            template: __webpack_require__(/*! ./out-cutomer.component.html */ "./src/app/outbound/out-cutomer/out-cutomer.component.html"),
            styles: [__webpack_require__(/*! ./out-cutomer.component.scss */ "./src/app/outbound/out-cutomer/out-cutomer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_2__["OutboundService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], OutCutomerComponent);
    return OutCutomerComponent;
}());



/***/ }),

/***/ "./src/app/outbound/out-order/out-order.component.html":
/*!*************************************************************!*\
  !*** ./src/app/outbound/out-order/out-order.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'Outbound_DeleiveryToCustomer'|translate}}: {{selectedCustomer.CustomerName}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Outbound_SO'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" name=\"orderNumber\" (blur)=\"onOrderNoBlur()\" value='' [(ngModel)]=\"orderNumber\"\r\n                                    class=\"form-control form-control-sm\" placeholder=\"{{'Outbound_SO'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" (click)=\"openOrderLookup()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\"\r\n                                        (click)=\"openSOOrderList()\" type=\"button\">\r\n                                        <i class=\"opti-icon-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"showSOIetDetail==true && orderNumber!=undefined\">\r\n                <!-- Serial tracked item -->\r\n                <div class=\"row\" *ngIf=\"soItemsDetail!=undefined && soItemsDetail!=null && soItemsDetail.length>0 \">\r\n                    <div class=\"col-12 col-sm-12 col-md-12\">\r\n                        <div class=\"d-flex align-items-center\">\r\n                            <h4 class=\"mt-2 mb-2  mt-md-0\">{{'Items'|translate}}</h4>\r\n                            <ul class=\"color-label mt-2 mt-md-0 ml-auto mb-2\">\r\n                                <li><span class=\"color-block blue\"></span><span>Batch</span></li>\r\n                                <li><span class=\"color-block red\"></span><span>Serial</span></li>\r\n                                <li><span class=\"color-block \"></span><span>None</span></li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-12 mb-2 border-bottom\"></div>\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"soItemsDetail\" [resizable]=\"true\" \r\n                        [pageSize]=\"pageSize\" [pageable]=\"pagable\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                            [height]=gridHeight [selectable]=\"true\" [rowClass]=\"rowCallback\" (selectionChange)=\"openPOByUOM($event,soItemsDetail.ITEMCODE)\"\r\n                            #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'ItemCode'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                        <dt>{{'PickQty'|translate}}</dt>\r\n                                        <dd>{{ dataItem.RPTQTY|numberFormat }}</dd>\r\n                                    </dl>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'OpenQty'|translate}} <span class=\"opti_arrow-grid-detail float-right text-center opti_vertical-align ml-auto\">›</span></dt>\r\n                                        <dd>{{ dataItem.OPENQTY|numberFormat }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"ITEMCODE\" title=\"{{'ItemCode'|translate}}\"\r\n                                [width]=\"6\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"OPENQTY\" headerClass=\"text-right\"\r\n                                class=\"text-right\" [width]=\"6\" title=\"{{'OpenQty'|translate}}\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.OPENQTY | numberFormat}}</ng-template>\r\n\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" headerClass=\"text-right\" class=\"text-right\"\r\n                                [width]=\"6\" format=\"{0:n3}\" title=\"{{'PickQty'|translate}}\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.RPTQTY | numberFormat}}</ng-template>\r\n                            </kendo-grid-column>\r\n\r\n\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon mr-1\" (click)=\"openOutboundCustomer()\"\r\n                    roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-back\"></i></button>\r\n\r\n                <!-- *ngIf='outbound.TempMeterials!==undefined && outbound.TempMeterials!==null && outbound.TempMeterials.length>0;'' -->\r\n                <button type=\"button\" *ngIf=\"showDeleiveryAndAdd\" (click)=\"addToDeleiver()\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text ml-1\"><span\r\n                        class=\"k-icon k-i-plus-outline\" role=\"presentation\"></span> {{'AddToDeleiver'|translate}}</button>\r\n\r\n                <button type=\"button\" *ngIf=\"showDeleiveryAndAdd\" (click)=\"deliveryConfirmation()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Deleiver'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<span *ngIf=\"showLookup==true && showLookupLoader==false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupkey)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n\r\n<!-- Loader -->\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<!-- Dialog -->\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        [yesButtonText]=\"yesButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/outbound/out-order/out-order.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/outbound/out-order/out-order.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGJvdW5kL291dC1vcmRlci9vdXQtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/outbound/out-order/out-order.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/outbound/out-order/out-order.component.ts ***!
  \***********************************************************/
/*! exports provided: OutOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOrderComponent", function() { return OutOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/outbound.service */ "./src/app/services/outbound.service.ts");
/* harmony import */ var src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/const/common-constants */ "./src/app/const/common-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/outbound/outbound-data */ "./src/app/models/outbound/outbound-data.ts");
/* harmony import */ var src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/outbound/out-del-req */ "./src/app/models/outbound/out-del-req.ts");










var OutOrderComponent = /** @class */ (function () {
    function OutOrderComponent(outboundservice, router, commonservice, toastr, translate) {
        this.outboundservice = outboundservice;
        this.router = router;
        this.commonservice = commonservice;
        this.toastr = toastr;
        this.translate = translate;
        this.dialogMsg = "Which order you want to deliver?";
        this.yesButtonText = "All";
        this.noButtonText = "Current";
        this.customerName = "";
        this.lookupfor = 'out-order';
        this.showLookup = false;
        this.outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__["OutboundData"]();
        this.showSOIetDetail = false;
        this.soItemsDetail = null;
        this.showLookupLoader = false;
        this.pagable = false;
        this.pageSize = src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"].pageSize;
        this.rowCallback = function (context) {
            switch (context.dataItem.TRACKING) {
                case 'S':
                    return { serial: true };
                case 'B':
                    return { batch: true };
                case 'N':
                    return { none: false };
                default:
                    return {};
            }
        };
    }
    OutOrderComponent.prototype.ngOnInit = function () {
        // lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData);
        console.log("Order:data", outboundData);
        if (outboundData != null && outboundData != undefined && outboundData != '' && outboundData != 'null') {
            this.outbound = JSON.parse(outboundData);
            this.selectedCustomer = this.outbound.CustomerData;
            if (this.outbound.OrderData !== undefined && this.outbound.OrderData !== null && this.outbound.OrderData.DOCNUM !== undefined && this.outbound.OrderData.DOCNUM !== null) {
                this.orderNumber = this.outbound.OrderData.DOCNUM;
                this.openSOOrderList();
                this.showDeleiveryAndAdd = this.showAddToMeterialAndDelevery();
            }
            this.calculatePickQty();
        }
    };
    OutOrderComponent.prototype.showAddToMeterialAndDelevery = function () {
        var _this = this;
        var dBit = false;
        if (this.outbound && this.outbound.TempMeterials) {
            var data = this.outbound.TempMeterials.filter(function (tm) { return tm.Order.DOCNUM === _this.orderNumber; });
            dBit = data.length > 0;
        }
        else {
            dBit = false;
        }
        return dBit;
    };
    OutOrderComponent.prototype.onOrderNoBlur = function () {
        if (this.orderNumber)
            this.openSOOrderList(this.orderNumber);
    };
    OutOrderComponent.prototype.openOrderLookup = function () {
        var _this = this;
        if (this.selectedCustomer != null && this.selectedCustomer != undefined
            && this.selectedCustomer.CustomerCode != '' && this.selectedCustomer.CustomerCode != null) {
            var whseId = localStorage.getItem("whseId");
            this.outboundservice.getCustomerSOList(this.selectedCustomer.CustomerCode, "", whseId).subscribe(function (resp) {
                if (resp != null) {
                    if (resp[0].ErrorMsg == "7001") {
                        _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                        return;
                    }
                    var tempData = resp;
                    for (var i = 0; i < _this.outbound.DeleiveryCollection.length; i++) {
                        for (var j = 0; j < resp.length; j++) {
                            if (_this.outbound.DeleiveryCollection[i].Order.DOCNUM == resp[j].DOCNUM) {
                                tempData.splice(j, 1);
                            }
                        }
                    }
                    _this.showLookupLoader = false;
                    _this.serviceData = tempData;
                    if (_this.serviceData.length > 0) {
                        _this.showLookup = true;
                    }
                    else {
                        _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                        _this.showLookupLoader = false;
                        _this.showLookup = false;
                    }
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
                }
            }, function (error) {
                _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
                _this.showLookupLoader = false;
                _this.showLookup = false;
            });
        }
        else {
            this.toastr.error('', this.translate.instant("CommonNoDataAvailableMsg"));
            this.showLookupLoader = false;
            this.showLookup = false;
        }
    };
    OutOrderComponent.prototype.getLookupValue = function (lookupValue) {
        this.outbound.OrderData = lookupValue;
        this.orderNumber = this.outbound.OrderData.DOCNUM;
        // lsOutbound
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        this.showDeleiveryAndAdd = this.showAddToMeterialAndDelevery();
    };
    OutOrderComponent.prototype.openPOByUOM = function (selection) {
        var selectdeData = selection.selectedRows[0].dataItem;
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            this.outbound.SelectedItem = selectdeData;
            //lsOutbound
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            this.router.navigateByUrl('home/outbound/outprodissue', { skipLocationChange: true });
        }
    };
    OutOrderComponent.prototype.openSOOrderList = function (orderNumber) {
        var _this = this;
        if (orderNumber === void 0) { orderNumber = null; }
        if (!this.orderNumber) {
            this.toastr.error('', this.translate.instant("OValidation"));
            return;
        }
        if ((this.outbound.OrderData && this.outbound.OrderData != '' && this.outbound.OrderData != null) || orderNumber) {
            var tempOrderData_1 = this.outbound.OrderData;
            if (orderNumber) {
                //         CARDCODE: "SP Contact"
                // CARDNAME: "Test SP"
                // CUSTREFNO: ""
                // DOCDUEDATE: "04/24/2019"
                // DOCNUM: 203
                // SHIPPINGTYPE: ""
                // SHIPTOCODE: ""
                tempOrderData_1 = {
                    CARDCODE: this.outbound.CustomerData.CustomerCode,
                    CARDNAME: this.outbound.CustomerData.customerName,
                    CUSTREFNO: "",
                    DOCDUEDATE: "04/24/2019",
                    DOCNUM: orderNumber.toString(),
                    SHIPPINGTYPE: "",
                    SHIPTOCODE: ""
                };
                //this.outbound.OrderData = tempOrderData;
            }
            else {
                this.outbound.OrderData.DOCNUM = tempOrderData_1.DOCNUM = this.orderNumber;
            }
            this.showDeleiveryAndAdd = this.showAddToMeterialAndDelevery();
            //lsOutbound
            var whseId = localStorage.getItem("whseId");
            this.showLookup = false;
            this.showLookupLoader = true;
            this.outboundservice.getSOItemList(tempOrderData_1.CARDCODE, tempOrderData_1.DOCNUM, whseId).subscribe(function (resp) {
                if (resp != null && resp != undefined)
                    if (resp.ErrorMsg == "7001") {
                        _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                        _this.showLookupLoader = false;
                        return;
                    }
                // When order num from text box.
                _this.outbound.OrderData = tempOrderData_1;
                _this.soItemsDetail = resp.RDR1;
                if (_this.soItemsDetail.length > _this.pageSize) {
                    _this.pagable = true;
                }
                _this.showLookupLoader = false;
                if (_this.soItemsDetail.length === 0) {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                    _this.showLookupLoader = false;
                }
                _this.calculatePickQty();
                localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData, JSON.stringify(_this.outbound));
                _this.showSOIetDetail = true;
                _this.showLookupLoader = false;
            }, function (error) {
                _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
                _this.showLookupLoader = false;
            });
        }
        else {
            this.toastr.error('', this.translate.instant("CommonNoDataAvailableMsg"));
            this.showLookupLoader = false;
        }
    };
    OutOrderComponent.prototype.openOutboundCustomer = function () {
        this.router.navigateByUrl("home/outbound/outcustomer", { skipLocationChange: true });
    };
    OutOrderComponent.prototype.addToDeleiver = function (goToCustomer) {
        if (goToCustomer === void 0) { goToCustomer = true; }
        this.showLookupLoader = true;
        //lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            this.prepareDeleiveryTempCollection();
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            if (goToCustomer == true)
                this.openOutboundCustomer();
            this.showLookupLoader = false;
        }
    };
    OutOrderComponent.prototype.prepareDeleiveryTempCollection = function () {
        if (this.outbound) {
            var tempMeterialCollection = this.outbound.TempMeterials;
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                var d = this.outbound.DeleiveryCollection[index];
                for (var j = 0; j < tempMeterialCollection.length; j++) {
                    var element = tempMeterialCollection[j];
                    if (d.Item.DOCENTRY == element.Item.DOCENTRY && d.Order.DOCNUM == element.Order.DOCNUM) {
                        tempMeterialCollection.slice(index, 1);
                    }
                }
            }
            if (tempMeterialCollection !== undefined &&
                tempMeterialCollection !== null && tempMeterialCollection.length > 0) {
                var _loop_1 = function (index) {
                    var tm = tempMeterialCollection[index];
                    var hasitem = this_1.outbound.DeleiveryCollection.filter(function (d) {
                        return d.Item.DOCENTRY === tm.Item.DOCENTRY &&
                            d.Item.TRACKING === tm.Item.TRACKING &&
                            d.Order.DOCNUM === tm.Order.DOCNUM &&
                            d.Meterial.LOTNO === tm.Meterial.LOTNO &&
                            d.Meterial.BINNO === tm.Meterial.BINNO;
                    });
                    if (hasitem.length == 0) {
                        this_1.outbound.DeleiveryCollection.push(tm);
                    }
                };
                var this_1 = this;
                for (var index = 0; index < tempMeterialCollection.length; index++) {
                    _loop_1(index);
                }
            }
        }
    };
    OutOrderComponent.prototype.deleiver = function (orderId) {
        if (orderId === void 0) { orderId = null; }
        //this.showLookupLoader = true;
        this.addToDeleiver(false);
        this.prepareDeleiveryCollectionAndDeliver(orderId);
        //this.showLookupLoader = false;
    };
    OutOrderComponent.prototype.calculatePickQty = function () {
        if (this.soItemsDetail) {
            for (var i = 0; i < this.soItemsDetail.length; i++) {
                var soelement = this.soItemsDetail[i];
                var totalPickQty = 0;
                if (this.outbound && this.outbound.TempMeterials && this.outbound.TempMeterials.length > 0) {
                    for (var j = 0; j < this.outbound.TempMeterials.length; j++) {
                        var element = this.outbound.TempMeterials[j];
                        console.log("My Element", element);
                        if (soelement.ROWNUM === element.Item.ROWNUM && soelement.ITEMCODE === element.Item.ITEMCODE && this.outbound.OrderData.DOCNUM === element.Order.DOCNUM) {
                            totalPickQty = totalPickQty + element.Meterial.MeterialPickQty;
                        }
                    }
                }
                // Total Qty of Item
                soelement.RPTQTY = totalPickQty;
                this.soItemsDetail[i] = soelement;
            }
        }
    };
    OutOrderComponent.prototype.prepareDeleiveryCollectionAndDeliver = function (orderId) {
        var _this = this;
        if (this.outbound != null && this.outbound != undefined
            && this.outbound.DeleiveryCollection != null && this.outbound.DeleiveryCollection != undefined
            && this.outbound.DeleiveryCollection.length > 0) {
            if (orderId !== undefined && orderId !== null) {
                this.outbound.DeleiveryCollection = this.outbound.DeleiveryCollection.filter(function (d) { return d.Order.DOCNUM === orderId; });
            }
            var arrSOHEADER = [];
            var arrSODETAIL = [];
            var deliveryToken = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["DeliveryToken"]();
            // Hdr
            var comDbId = localStorage.getItem('CompID');
            var token = localStorage.getItem('Token');
            var guid = localStorage.getItem('GUID');
            var uid = localStorage.getItem('UserId');
            var hdrLine = 0;
            var limit = -1;
            var hdrLineVal = 0;
            this.showLookupLoader = true;
            var _loop_2 = function (index) {
                // // break when item processed.
                // if (limit >= this.outbound.DeleiveryCollection.length) {
                //   break;
                // }
                //get first item from collection        
                var element = this_2.outbound.DeleiveryCollection[index];
                // let coll=Get all Item for Item.Lineno===i
                var lineDeleiveryCollection = this_2.outbound.DeleiveryCollection.filter(function (d) {
                    //d.Item.LINENUM === element.Item.LINENUM
                    return element.Order.DOCNUM === d.Order.DOCNUM &&
                        element.Item.DOCENTRY === d.Item.DOCENTRY &&
                        element.Item.TRACKING === d.Item.TRACKING;
                });
                // Process Order Item and Tracking collection
                for (var hIdx = 0; hIdx < lineDeleiveryCollection.length; hIdx++) {
                    var o = lineDeleiveryCollection[hIdx];
                    // check hdr exists
                    var existHdr = false;
                    for (var index_1 = 0; index_1 < arrSOHEADER.length; index_1++) {
                        var h = arrSOHEADER[index_1];
                        if (h.SONumber === o.Order.DOCNUM
                            && h.ItemCode === o.Item.ITEMCODE
                            && h.Tracking === o.Item.TRACKING) {
                            existHdr = true;
                            break;
                        }
                    }
                    if (existHdr == false) {
                        // Add Header here and then add 
                        hdrLineVal = hdrLineVal + 1;
                        var hdr = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["SOHEADER"]();
                        // "DiServerToken":"66F7E7A4-D2AE-4E37-91E8-8BE390F2D32F",
                        // "SONumber":165,
                        // "CompanyDBId":"BUILD128SRC12X",
                        // "LineNo":0,
                        // "ShipQty":"2",
                        // "DocNum":165,
                        // "OpenQty":" 12.000",
                        // "WhsCode":"01",
                        // "Tracking":"S",
                        // "ItemCode":"Serial",
                        // "UOM":-1,
                        // "Line":0
                        hdr.DiServerToken = token;
                        hdr.SONumber = o.Item.DOCENTRY;
                        hdr.CompanyDBId = comDbId;
                        hdr.LineNo = o.Item.LINENUM;
                        //hdr.tShipQty = lineDeleiveryCollection.map(i => i.Meterial.MeterialPickQty).reduce((sum, c) => sum + c);
                        //hdr.ShipQty = 
                        //let metQty = 
                        var metQty = lineDeleiveryCollection.map(function (i) { return i.Meterial.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
                        hdr.ShipQty = metQty.toString();
                        // hdr.ShipQty = hdr.ShipQty.toString();
                        hdr.DocNum = o.Order.DOCNUM;
                        hdr.OpenQty = o.Item.OPENQTY;
                        hdr.WhsCode = o.Item.WHSCODE;
                        hdr.Tracking = o.Item.TRACKING;
                        hdr.ItemCode = o.Item.ITEMCODE;
                        hdr.UOM = -1;
                        hdr.UOMName = o.Item.UOM;
                        hdr.Line = hdrLineVal;
                        arrSOHEADER.push(hdr);
                    }
                    // check weather item existe or not 
                    var hasDetail = false;
                    for (var index_2 = 0; index_2 < arrSODETAIL.length; index_2++) {
                        var element_1 = arrSODETAIL[index_2];
                        if (element_1.LotNumber === o.Meterial.LOTNO && element_1.Bin === o.Meterial.BINNO && element_1.parentLine === hdrLineVal) {
                            hasDetail = true;
                            break;
                        }
                    }
                    if (hasDetail == false) {
                        // Add Detail here 
                        var dtl = new src_app_models_outbound_out_del_req__WEBPACK_IMPORTED_MODULE_9__["SODETAIL"]();
                        // "Bin":"01-SYSTEM-BIN-LOCATION",
                        // "LotNumber":"08JANS000011",
                        // "LotQty":"1",
                        // "SysSerial":231,
                        // "parentLine":0,
                        // "GUID":"6d92d887-23bb-4390-85df-75e4caa7e328",
                        // "UsernameForLic":"Rishabh"
                        dtl.Bin = o.Meterial.BINNO;
                        dtl.LotNumber = o.Meterial.LOTNO;
                        dtl.LotQty = o.Meterial.MeterialPickQty;
                        dtl.SysSerial = o.Meterial.SYSNUMBER;
                        dtl.parentLine = hdrLineVal;
                        dtl.GUID = guid;
                        dtl.UsernameForLic = uid;
                        arrSODETAIL.push(dtl);
                    }
                    limit = limit + lineDeleiveryCollection.length;
                }
            };
            var this_2 = this;
            // Loop through delivery collection 
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                _loop_2(index);
            }
            console.log("Dtl", arrSODETAIL);
            console.log("hdr", arrSOHEADER);
            // this.manageLineNo(arrSOHEADER, arrSODETAIL);
            // arrSOHEADER=await this.manageShipQty(arrSOHEADER);
            if (arrSOHEADER.length > 0 && arrSODETAIL.length > 0) {
                deliveryToken.SOHEADER = arrSOHEADER;
                deliveryToken.SODETAIL = arrSODETAIL;
                deliveryToken.UDF = [];
            }
            this.outboundservice.addDeleivery(deliveryToken).subscribe(function (data) {
                if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                    _this.showLookupLoader = false;
                    _this.toastr.success('', _this.translate.instant("DeleiverySuccess") + " : " + data[0].SuccessNo);
                    _this.clearOutbound();
                }
                else if (data[0].ErrorMsg == "7001") {
                    _this.showLookupLoader = false;
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                else {
                    _this.showLookupLoader = false;
                    _this.toastr.error('', data[0].ErrorMsg);
                }
            }, function (error) {
                _this.showLookupLoader = false;
                console.log(error);
            });
            console.log("shdr", arrSOHEADER);
        }
    };
    OutOrderComponent.prototype.clearOutbound = function () {
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_3__["CommonConstants"].OutboundData, null);
        this.router.navigateByUrl("home/outbound/outcustomer", { skipLocationChange: true });
    };
    OutOrderComponent.prototype.manageLineNo = function (hdrList, dtlList) {
        var tmpHdr = [];
        var tmpDtlList = [];
        var _loop_3 = function (index) {
            var hdr = hdrList[index];
            var lineDetailList = dtlList.filter(function (d) { return d.parentLine === hdr.LineNo; });
            // Detail
            for (var j = 0; j < lineDetailList.length; j++) {
                var linedtl = lineDetailList[j];
                linedtl.parentLine = index;
                tmpDtlList.push(linedtl);
            }
            hdr.Line = index;
            tmpHdr.push(hdr);
        };
        // Hdr
        for (var index = 0; index < hdrList.length; index++) {
            _loop_3(index);
        }
    };
    OutOrderComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        // Yes
        if ($event.Status === 'yes') {
            this.deleiver();
        }
        else if ($event.Status === 'no') {
            this.deleiver(this.outbound.OrderData.DOCNUM);
        }
        else {
        }
    };
    OutOrderComponent.prototype.deliveryConfirmation = function () {
        this.showConfirmDialog = true;
    };
    OutOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-out-order',
            template: __webpack_require__(/*! ./out-order.component.html */ "./src/app/outbound/out-order/out-order.component.html"),
            styles: [__webpack_require__(/*! ./out-order.component.scss */ "./src/app/outbound/out-order/out-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_2__["OutboundService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], OutOrderComponent);
    return OutOrderComponent;
}());



/***/ }),

/***/ "./src/app/outbound/out-prodissue/out-prodissue.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/outbound/out-prodissue/out-prodissue.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar \">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" *ngIf=\"!fromProduction\">\r\n                {{pageTitle}}: {{outbound.OrderData.DOCNUM}}\r\n            </h3>\r\n            \r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" *ngIf=\"fromProduction\">\r\n                    {{pageTitle}}: {{currentOrderNo}}\r\n                </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"selectedItems\" [resizable]=\"true\" [pageSize]=\"10\"\r\n                        [pageable]=\"false\" [sortable]=\"true\" [selectable]=\"true\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'ItemDetails'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{'ItemCode'|translate}}</dt>\r\n                                    <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                    <dt>{{PickQtylbl}}</dt>\r\n                                    <dd>{{ _pickedMeterialQty|numberFormat }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{OpenQtylbl}}</dt>\r\n                                    <dd>{{ dataItem.OPENQTY|numberFormat }}</dd>\r\n\r\n                                    <dt *ngIf=\"!fromProduction\">{{'UoM'|translate}}</dt>\r\n                                    <dd *ngIf=\"!fromProduction\">\r\n                                        <kendo-dropdownlist class=\"form-control input-sm\" (valueChange)=\"valueChange($event)\"\r\n                                            [data]=\"uomList\" [textField]=\"'UomName'\" [valueField]=\"'UomCode'\" [value]=\"uomList[0]\"></kendo-dropdownlist>\r\n                                    </dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"ITEMCODE\" title=\"{{'ItemCode'|translate}}\"\r\n                            [width]=\"160\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"OPENQTY\" headerClass=\"text-right\" class=\" text-right\"\r\n                            title=\"{{OpenQtylbl}}\" [width]=\"160\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.OPENQTY|numberFormat}}</ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" headerClass=\"text-right\" class=\"text-right\"\r\n                            [width]=\"160\" title=\"{{PickQtylbl}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{_pickedMeterialQty|numberFormat}}</ng-template>\r\n                            <!-- <ng-template kendoGridCellTemplate format=\"{0:n3}\">{{_pickedMeterialQty|number:'1.3-3'}}</ng-template> -->\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column *ngIf=\"!fromProduction\" media=\"(min-width: 768px)\" field=\"Delete\" title=\"{{'UoM'|translate}}\"\r\n                            width=\"120\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                <kendo-dropdownlist class=\"form-control input-sm\" (valueChange)=\"valueChange($event)\"\r\n                                    [data]=\"uomList\" [textField]=\"'UomName'\" [valueField]=\"'UomCode'\" [value]=\"selectedUOM\"></kendo-dropdownlist>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                    <div class=\"form-group row\">\r\n                        <!-- <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\"></label> -->\r\n                        <!-- <div class=\"col-sm-9\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" name=\"orderNumber\" value='' class=\"form-control form-control-sm\"\r\n                                        placeholder=\"{{'OrderNo'|translate}}\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn \" type=\"button\">\r\n                                            <i class=\"opti-icon-search\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div *ngIf=\"OrderType!='N'\" class=\"col-sm-9\">\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" [(ngModel)]=ScanInputs id=\"outboundOrderNoScanInput\" name=\"orderNumber\"\r\n                                        value='' class=\"form-control form-control-sm\" (blur)=\"onScanInputChange()\"\r\n                                        placeholder=\"{{scanInputPlaceholder}}\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn \" type=\"button\" [disabled]=\"selected==null || selected==''\"\r\n                                            (click)=\"openAvaliableMeterials()\">\r\n                                            <i class=\"opti-icon-hammenu\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ml-1 d-flex\">\r\n                                    <button id=\"outBoundDeliverForSOScan\" (click)=\"prodIssueScan()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\"\r\n                                        type=\"button\">\r\n                                        <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"d-none d-sm-flex d-md-flex d-xl-flex row align-items-center\">\r\n                        <h5 class=\"h5 col-12 col-sm-6 mb-2 col-md-6 col-lg-9\">{{'SelectedMaterials'|translate}}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid class=\"no-shadow\" [data]=\"selectedMeterials\" [resizable]=\"true\" [pageSize]=\"pageSize\"\r\n                        [pageable]=\"pagable\" [sortable]=\"true\" [selectable]=\"true\" id=\"gridSelectedMeterial\"\r\n                        #gridSelectedMeterial>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'SelectedMaterials'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt *ngIf=\"OrderType==='S' || OrderType==='B'\">{{SerialBatchHeaderTitle}}</dt>\r\n                                    <dd *ngIf=\"OrderType==='S' || OrderType==='B'\">{{ dataItem.LOTNO }}</dd>\r\n\r\n                                    <dt>{{'BinNo'|translate}}</dt>\r\n                                    <dd>{{ dataItem.BINNO }}</dd>  \r\n                                </dl>\r\n\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'TOTALQTY'|translate}}\r\n\r\n                                        <button *ngIf=\"OrderType!='N'\" id=\"removeSelectedMeterial\" (click)=\"removeSelectedMeterial(idx,gridSelectedMeterial)\"\r\n                                            class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\">\r\n                                            <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.TOTALQTY | numberFormat }}</dd>\r\n                                    <dt *ngIf=\"OrderType!='S'\">{{'PickQty'|translate}}</dt>\r\n                                    <dd *ngIf=\"OrderType!='S'\">\r\n                                        <kendo-numerictextbox #txtMet name=\"data\"\r\n                                            class=\"form-control form-control-sm text-right!important\" [format]=\"'n3'\"\r\n                                            [(value)]=\"dataItem.MeterialPickQty\" [step]=\"step\"\r\n                                            (blur)=\"onIssueMeterialQtyChange(idx,txtMet)\"\r\n                                            ></kendo-numerictextbox>\r\n\r\n                                        <!-- <input [ngModel]=\"dataItem.MeterialPickQty | numberFormat\"(ngModelChange)=\"dataItem.MeterialPickQty=$event\"\r\n                                            name=\"inputField\" type=\"text\"\r\n                                            #display_name (change)=\"updatePickQty(display_name.value, idx)\" /> -->\r\n                                    </dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" *ngIf=\"OrderType==='S' || OrderType==='B'\" field=\"LOTNO\"\r\n                            title=\"{{SerialBatchHeaderTitle}}\" [width]=\"30\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"BINNO\" title=\"{{'BinNo'|translate}}\"\r\n                            [width]=\"30\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"TOTALQTY\" headerClass=\"text-right\" class=\" text-right\"\r\n                            title=\"{{'TOTALQTY'|translate}}\" [width]=\"10\">\r\n\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.TOTALQTY | numberFormat}}</ng-template>\r\n                        </kendo-grid-column>\r\n\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" *ngIf=\"OrderType!='S'\" headerClass=\"text-right\"\r\n                            class=\"text-right\" field=\"MeterialPickQty\" width=\"50\" editor=\"numeric\" title=\"{{'PickQty'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" class=\"text-right\" let-idx=\"rowIndex\">\r\n                                \r\n                                    <!-- <input [ngModel]=\"dataItem.MeterialPickQty | numberFormat\"  (blur)=\"onIssueMeterialQtyChange(idx,txtMet, e)\"\r\n                                    (ngModelChange)=\"dataItem.MeterialPickQty=$event\" \r\n                                    #display_name (change)=\"updatePickQty(display_name.value, idx)\" class=\"text-right\" name=\"inputField\" type=\"number\" /> -->\r\n\r\n                                <kendo-numerictextbox #txtMet name=\"data\" (blur)=\"onIssueMeterialQtyChange(idx,txtMet)\"\r\n                                    class=\"form-control text-right form-control-sm text-right!important\" [format]=\"'n3'\"\r\n                                    [(value)]=\"dataItem.MeterialPickQty\" [step]=\"step\"\r\n                                   ></kendo-numerictextbox>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column headerClass=\"text-center\" class=\"text-center\" media=\"(min-width: 768px)\" *ngIf=\"OrderType!='N'\" field=\"LOTNO\" title=\"\"\r\n                            width=\"10\">\r\n                            <ng-template kendoGridCellTemplate let-idx=\"rowIndex\">\r\n                                <button id=\"removeSelectedMeterial\" (click)=\"removeMeterial(idx,gridSelectedMeterial)\"\r\n                                    class=\"btn btn-danger k-button btn-sm btn-icon\">\r\n                                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <!-- *ngIf=\"selectedMeterials && selectedMeterials.length>0\" -->\r\n                <button type=\"button\" *ngIf=\"selectedMeterials && selectedMeterials.length>0 && !fromProduction\"\r\n                    (click)=\"addMetToCollection()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-save\" role=\"presentation\"></span> {{'Save'|translate}}</button>\r\n\r\n                <button type=\"button\" *ngIf=\"selectedMeterials && selectedMeterials.length>0 && fromProduction\" (click)=\"addMetToCollection(true)\"\r\n                    class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-save\"></span>\r\n                    {{'Save'|translate}}</button>\r\n                <button type=\"button\" *ngIf=\"selectedMeterials && selectedMeterials.length>0 && fromProduction\"  (click)=\"submitProduction()\"\r\n                 class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-check\"></span>\r\n                            {{'Issue'|translate}}</button>\r\n                <!-- <div class=\"clearfix mt-1 d-block d-sm-none\"></div> -->\r\n\r\n                <button type=\"button\" (click)=\"back(0)\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" id=\"outBoundHiddenScanButton\" style=\"visibility:hidden\" (click)=\"onHiddenScanClick()\"\r\n                    class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                    SB </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<span *ngIf=\"showLookup==true\">\r\n    <app-lookup [lookupfor]='lookupFor' [serviceData]='lookupData' (lookupkey)=\"getLookupValue($event,gridSelectedMeterial)\"></app-lookup>\r\n</span>\r\n\r\n<!-- Loader -->\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<!-- Dialog -->\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        [yesButtonText]=\"yesButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/outbound/out-prodissue/out-prodissue.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/outbound/out-prodissue/out-prodissue.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGJvdW5kL291dC1wcm9kaXNzdWUvb3V0LXByb2Rpc3N1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/outbound/out-prodissue/out-prodissue.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/outbound/out-prodissue/out-prodissue.component.ts ***!
  \*******************************************************************/
/*! exports provided: OutProdissueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutProdissueComponent", function() { return OutProdissueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/const/common-constants */ "./src/app/const/common-constants.ts");
/* harmony import */ var src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/outbound.service */ "./src/app/services/outbound.service.ts");
/* harmony import */ var src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/outbound/outbound-data */ "./src/app/models/outbound/outbound-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/Production/IFP */ "./src/app/models/Production/IFP.ts");
/* harmony import */ var src_app_services_production_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/production.service */ "./src/app/services/production.service.ts");











var OutProdissueComponent = /** @class */ (function () {
    function OutProdissueComponent(ourboundService, router, toastr, translate, commonservice, productionService) {
        this.ourboundService = ourboundService;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.commonservice = commonservice;
        this.productionService = productionService;
        this.dialogMsg = "Do you want to delete?";
        this.yesButtonText = "Yes";
        this.noButtonText = "No";
        this.selected = null;
        this.step = 0.001;
        this.lookupFor = 'out-items';
        this.showLookup = false;
        this.totalPickQty = 0.000;
        this.mask = "0.000";
        this.uomList = [];
        this.selectedMeterials = Array();
        this.comingSelectedMeterials = Array();
        this.indivisualPickQty = 0.000;
        this.screenBackEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._requiredMeterialQty = 0;
        this._remainingMeterial = 0;
        this._pickedMeterialQty = 0;
        this.OrderType = '';
        this.oldSelectedMeterials = Array();
        this.scanInputPlaceholder = "Select/Scan";
        this.SerialBatchHeaderTitle = "";
        this.showLookupLoader = false;
        this.uomIdx = 0;
        this.pagable = false;
        this.pageSize = src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__["Commonservice"].pageSize;
        this.pageTitle = "";
        this.fromProduction = true;
        this.ScanInputs = "";
    }
    OutProdissueComponent.prototype.ngOnInit = function () {
        var _this = this;
        //lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            this.selected = this.outbound.SelectedItem;
            this.OrderType = this.selected.TRACKING;
            this.currentOrderNo = this.outbound.OrderData["Order No"];
            if (this.OrderType != 'N') {
                if (this.OrderType === 'S') {
                    this.SerialBatchHeaderTitle = this.translate.instant("SerialNo");
                }
                else if (this.OrderType === 'B') {
                    this.SerialBatchHeaderTitle = this.translate.instant("BatchNo");
                }
                this.manageOldCollection();
            }
            if (localStorage.getItem("ComingFrom") == "ProductionIssue") {
                this.fromProduction = true;
                this.OpenQtylbl = this.translate.instant("BalanceQty");
                this.PickQtylbl = this.translate.instant("IssuedQty");
                this.pageTitle = this.translate.instant("IssueForPO");
            }
            else {
                this.fromProduction = false;
                this.PickQtylbl = this.translate.instant("PickQty");
                this.OpenQtylbl = this.translate.instant("OpenQty");
                this.pageTitle = this.translate.instant("DeleiveryForSO");
                this.ourboundService.getUOMList(this.selected.ITEMCODE).subscribe(function (data) {
                    _this.uomList = data;
                    _this.selectedUOM = _this.uomList.filter(function (u) { return u.UomCode == _this.selected.UOM; });
                    _this.selectedUOM = _this.selectedUOM[0];
                });
            }
            this._requiredMeterialQty = parseFloat(this.selected.OPENQTY);
            this._remainingMeterial = this._requiredMeterialQty - this._pickedMeterialQty;
            this.selectedItems = [this.selected];
            if (this.OrderType == 'N') {
                this.showLookupLoader = true;
                this.ourboundService.getAvaliableMeterialForNoneTracked(this.selected.ITEMCODE).subscribe(function (mdata) {
                    var el = document.getElementById('gridSelectedMeterial');
                    _this.getLookupValue(mdata, el, true);
                    _this.manageUOM();
                });
            }
        }
    };
    OutProdissueComponent.prototype.manageUOM = function () {
        // this._pickedMeterialQty=this.selectedUOM.AltQty*this._pickedMeterialQty;
    };
    OutProdissueComponent.prototype.manageOldCollection = function () {
        var _this = this;
        var itemMeterials;
        if (this.outbound.TempMeterials !== undefined
            && this.outbound.TempMeterials !== null
            && this.outbound.TempMeterials.length > 0) {
            itemMeterials = this.outbound.TempMeterials.filter(function (m) { return m.Item.ITEMCODE
                === _this.outbound.SelectedItem.ITEMCODE && m.Item.ROWNUM
                === _this.outbound.SelectedItem.ROWNUM && _this.outbound.OrderData.DOCNUM === m.Item.DOCNUM; });
        }
        if (itemMeterials !== undefined && itemMeterials !== null
            && itemMeterials.length > 0) {
            itemMeterials.forEach(function (element) {
                _this.selectedMeterials.push(element.Meterial);
            });
            ;
            //applying paging..
            this.pagable = this.selectedMeterials.length > this.pageSize;
            this.manageMeterial();
            this.calculateTotalAndRemainingQty();
        }
    };
    OutProdissueComponent.prototype.onScanInputChange = function () {
        if (this.needMeterial() == false) {
            this.toastr.error('', this.translate.instant("PickedAllRequiredItems"));
            //alert('You picked all requerde items.');
            return;
        }
        this.onGS1ScanItem();
    };
    OutProdissueComponent.prototype.prodIssueScan = function () {
    };
    OutProdissueComponent.prototype.onHiddenScanClick = function () {
        // alert("outbound hidden scan click")
        this.onGS1ScanItem();
    };
    OutProdissueComponent.prototype.onGS1ScanItem = function () {
        var _this = this;
        var inputValue = document.getElementById('outboundOrderNoScanInput').value;
        if (inputValue.length > 0) {
            this.ScanInputs = inputValue;
        }
        if (this.ScanInputs != null && this.ScanInputs != undefined &&
            this.ScanInputs != "" && this.ScanInputs != "error decoding QR Code") {
        }
        else {
            // if any message is required to show then show.
            this.ScanInputs = "";
            return;
        }
        var this1 = this;
        var code = "";
        if (this.outbound.CustomerData != null &&
            this.outbound.CustomerData != undefined &&
            this.outbound.CustomerData != "null") {
            code = this.outbound.CustomerData.CustomerCode;
        }
        else {
            code = "";
        }
        this.ourboundService.checkAndScanCode(code, this.ScanInputs).subscribe(function (data) {
            //  alert("check and scan code api call response data:"+JSON.stringify(data));
            var openQty;
            var tracking;
            var oepxpdt;
            var piManualOrSingleDimentionBarcode = 0;
            var serialNo = "";
            if (data != null) {
                if (data[0].Error != null) {
                    if (data[0].Error == "Invalidcodescan") {
                        piManualOrSingleDimentionBarcode = 1;
                        _this.toastr.error('', _this.translate.instant("InvalidScanCode"));
                        _this.ScanInputs = "";
                        // nothing is done in old code.
                    }
                    else {
                        // some message is handle in else section in old code
                        //return;
                    }
                    return;
                }
                // now check if the  code is for avilable item or not other wise invalid item error.
                var itemCode = _this.outbound.SelectedItem.ITEMCODE;
                if (piManualOrSingleDimentionBarcode == 0) {
                    if (data[0] != null && data[0].Value != null && (data[0].Value.toUpperCase() != itemCode.toUpperCase())) {
                        _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                        _this.ScanInputs = "";
                        return;
                    }
                    var piExpDateExist = 0;
                    tracking = this1.OperationType;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Key == '10' || data[i].Key == '21' || data[i].Key == '23') {
                            _this.ScanInputs = data[i].Value;
                            serialNo = data[i].Value;
                            var result = _this.selectedMeterials.find(function (element) { return element.LOTNO == serialNo; });
                            if (result != undefined) {
                                _this.toastr.error('', _this.translate.instant("BatchSerialAlreadyExist"));
                                return;
                            }
                            //scan input value me set karna hai
                            // make sure ScanInputs variable me puri string aati hai.. to uski value change karne
                            // se kuch affect na kare.
                            //scan input field par set karna hai.. ye value 10,21,23 k case me.
                        }
                        if (data[i].Key == '15' || data[i].Key == '17') {
                            var d = data[i].Value.split('/');
                            oepxpdt = d[0] + '/' + d[1] + '/' + d[2];
                            // set value to date field 
                            ///  this.expiryDate = oepxpdt; 
                            piExpDateExist = 1; //taken this variable for date purpose check if later used.
                        }
                        if (data[i].Key == '30' || data[i].Key == '310' ||
                            data[i].Key == '315' || data[i].Key == '316' || data[i].Key == '320') {
                            openQty = data[i].Value;
                            // ye dekhna hai kaise use hoga  this.addQuantity();
                        }
                    }
                }
                // create array 
                //let lookupArray:any=[{ITEMCODE:itemCode,OPENQTY:openQty}]
                // BINNO TOTALQTY LOTNO PickQty
                //this.getLookupValue(lookupArray,null,false); 
                _this.ourboundService.getAllPickPackAndOtherSerialBatchWithoutBin(itemCode, "", serialNo, _this.outbound.SelectedItem.DOCENTRY).subscribe(function (data) {
                    console.log("data:" + data);
                    if (data != null && data != undefined && data.length > 0) {
                        var binno = data[0].BINNO;
                        var totalQty = data[0].TOTALQTY;
                        var lotNo = data[0].LOTNO;
                        var PickQty = openQty;
                        var sysNumber = data[0].SYSNUMBER;
                        var lookupArray = [{
                                ITEMCODE: itemCode, OPENQTY: openQty, BINNO: binno,
                                TOTALQTY: totalQty, LOTNO: lotNo, PickQty: PickQty, SYSNUMBER: sysNumber
                            }];
                        var el = document.getElementById('gridSelectedMeterial');
                        _this.getLookupValue(lookupArray, el, true, false);
                    }
                    else {
                        _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                    }
                    _this.ScanInputs = "";
                }, function (error) {
                    console.log("Error when checking availability: ", error);
                });
            }
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    OutProdissueComponent.prototype.calculateRequeiredMeterial = function () {
        var needMeterial = false;
        var localTotalPickQty = this.totalPickQty;
        var requiredQty = parseFloat(this.selected.OPENQTY) - localTotalPickQty;
        if (localTotalPickQty >= requiredQty) {
            return false;
        }
        if (this.comingSelectedMeterials != undefined && this.comingSelectedMeterials != null && this.comingSelectedMeterials.length > 0) {
            this.comingSelectedMeterials = this.comingSelectedMeterials.reverse(function (i) { return i.TOTALQTY; });
            var _loop_1 = function (i) {
                requiredQty = requiredQty - localTotalPickQty;
                // if (this.totalPickQty >= requiredQty) {
                //   return false;
                // }
                needMeterial = true;
                var meterial = this_1.comingSelectedMeterials[i];
                var meterialExists = false;
                meterialExists = this_1.selectedItems.filter(function (i) { return i.LOTNO == meterial.LOTNO && i.BINNO == meterial.BINNO; }).length > 0;
                if (meterialExists) {
                    return { value: false };
                }
                var avlQty = meterial.TOTALQTY;
                if (avlQty >= requiredQty) {
                    meterial.MeterialPickQty = parseFloat(this_1.selected.OPENQTY);
                }
                else {
                    meterial.MeterialPickQty = parseFloat(avlQty);
                }
                localTotalPickQty = localTotalPickQty + meterial.MeterialPickQty;
                this_1.selectedMeterials.push(meterial);
                //apply paging..
                this_1.pagable = this_1.selectedMeterials.length > this_1.pageSize;
            };
            var this_1 = this;
            // Insert Pick qty
            for (var i = 0; i < this.comingSelectedMeterials.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            this.totalPickQty = this.totalPickQty + this.selectedMeterials.map(function (i) { return i.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
        }
        return needMeterial;
    };
    OutProdissueComponent.prototype.QtyFilled = function () {
        if (this.selectedMeterials != undefined && this.selectedMeterials != null && this.selectedMeterials.length > 0) {
            this.totalPickQty = this.totalPickQty + this.selectedMeterials.map(function (i) { return i.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
        }
        else {
            this.totalPickQty = 0;
        }
        return this.totalPickQty >= this.selected.OPENQTY;
    };
    OutProdissueComponent.prototype.needMeterial = function () {
        this.calculateTotalAndRemainingQty();
        return this._pickedMeterialQty < this._requiredMeterialQty;
    };
    // updatePickQty(value, rowindex) {
    //   for (let i = 0; i < this.selectedMeterials.length; ++i) {
    //     if (i === rowindex) {
    //       this.selectedMeterials[rowindex].MeterialPickQty = value;
    //       if(this.selectedMeterials[rowindex].BalanceQty < value){
    //         this.toastr.error('', this.translate.instant("Pickup quntity must be less or equal balance quantity"));
    //       }
    //     }
    //   }
    // }
    OutProdissueComponent.prototype.onIssueMeterialQtyChange = function (idx, txt) {
        var oldValue = parseFloat(this.oldSelectedMeterials[idx].MeterialPickQty);
        if (this.selectedMeterials[idx].MeterialPickQty === null || this.selectedMeterials[idx].MeterialPickQty === undefined) {
            this.selectedMeterials[idx].MeterialPickQty = oldValue;
        }
        //let oldValue: number = parseFloat(this.selectedMeterials[idx].MeterialPickQty);
        if (txt.value === '' || txt.value === undefined || txt.value === null) {
            this.toastr.error('', this.translate.instant("MeterialCanNotBeBlank"));
            txt.value = oldValue;
            this.selectedMeterials[idx].MeterialPickQty = oldValue;
            return;
        }
        this.selectedMeterials[idx].MeterialPickQty = parseFloat(txt.value);
        if (this.selectedMeterials[idx].MeterialPickQty > this.selectedMeterials[idx].TOTALQTY) {
            this.toastr.error('', this.translate.instant("QtyGTTotal"));
            txt.value = oldValue;
            this.selectedMeterials[idx].MeterialPickQty = oldValue;
        }
        this.calculateTotalAndRemainingQty();
        if (this._pickedMeterialQty < 0) {
            this.toastr.error('', this.translate.instant("MeterialCanNotBeLTZero"));
            txt.value = oldValue;
            this.selectedMeterials[idx].MeterialPickQty = oldValue;
            //apply paging..
            this.pagable = this.selectedMeterials.length > this.pageSize;
            this.calculateTotalAndRemainingQty();
            return;
        }
        if (this._pickedMeterialQty > this._requiredMeterialQty) {
            this.toastr.error('', this.translate.instant("QtyGTOpen"));
            txt.value = oldValue;
            this.selectedMeterials[idx].MeterialPickQty = oldValue;
            this.calculateTotalAndRemainingQty();
            return;
        }
    };
    OutProdissueComponent.prototype.calculateTotalAndRemainingQty = function () {
        if (this.selectedMeterials && this.selectedMeterials.length > 0) {
            this._pickedMeterialQty = this.selectedMeterials.map(function (i) { return i.MeterialPickQty; }).reduce(function (sum, c) { return parseFloat(sum) + parseFloat(c); });
            this._remainingMeterial = this._requiredMeterialQty - this._pickedMeterialQty;
        }
        else {
            this._pickedMeterialQty = 0;
            this._remainingMeterial = this._requiredMeterialQty - this._pickedMeterialQty;
        }
    };
    OutProdissueComponent.prototype.openAvaliableMeterials = function () {
        var _this = this;
        if (this.needMeterial() == false) {
            this.toastr.error('', this.translate.instant("PickedAllRequiredItems"));
            //alert('You picked all requerde items.');
            return;
        }
        var itemCode = this.selected.ITEMCODE;
        var docEntry = this.selected.DOCENTRY;
        this.showLookupLoader = true;
        this.ourboundService.getAvaliableMeterial(itemCode, docEntry).subscribe(function (resp) {
            _this.lookupData = resp;
            _this.showLookupLoader = false;
            if (_this.lookupData.length > 0) {
                _this.manageOldSelectedItems();
                _this.manageExistingItem();
                _this.showLookup = true;
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        });
    };
    OutProdissueComponent.prototype.getLookupValue = function (lookupValue, gridSelectedMeterial, updateGrid, scan) {
        if (updateGrid === void 0) { updateGrid = true; }
        if (scan === void 0) { scan = false; }
        if (lookupValue) {
            this.showLookupLoader = false;
            if (this.OrderType == 'S') {
                var data = [];
                var tempLookup = lookupValue;
                for (var index = 0; index < this._remainingMeterial; index++) {
                    if (index < tempLookup.length) {
                        data.push(tempLookup[index]);
                    }
                }
                this.comingSelectedMeterials = data;
            }
            else {
                this.comingSelectedMeterials = lookupValue;
            }
            this.manageMeterial(scan);
            console.log("SelectedMeterial", this.selectedMeterials);
            if (updateGrid == true)
                gridSelectedMeterial.data = this.selectedMeterials;
            //lsOutbound
            this.outbound = JSON.parse(localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData));
            this.outbound.SelectedMeterials = lookupValue;
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        }
        else {
            this.toastr.error('', this.translate.instant("CommonNoDataAvailableMsg"));
            this.showLookupLoader = false;
            this.showLookup = false;
        }
    };
    OutProdissueComponent.prototype.valueChange = function (e) {
        this.selectedUOM = e;
        this.manageUOM();
    };
    OutProdissueComponent.prototype.removeSelectedMeterial = function (idx, grd) {
        this.selectedMeterials.splice(idx, 1);
        grd.data = this.selectedMeterials;
        this.calculateTotalAndRemainingQty();
        //setting paging..
        this.pagable = this.selectedMeterials.length > this.pageSize;
    };
    OutProdissueComponent.prototype.removeMeterial = function (idx, grd) {
        this.delGrd = grd;
        this.delIdx = idx;
        this.showConfirmDialog = true;
    };
    OutProdissueComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        // Yes
        if ($event.Status === 'yes') {
            this.removeSelectedMeterial(this.delIdx, this.delGrd);
        }
        else if ($event.Status === 'no') {
        }
        else {
        }
    };
    OutProdissueComponent.prototype.manageMeterial = function (scan) {
        var _this = this;
        if (scan === void 0) { scan = false; }
        var requiredMeterialQty = this._requiredMeterialQty;
        var pickedMeterialQty = this._pickedMeterialQty;
        var remailingMeterialQty = requiredMeterialQty - pickedMeterialQty;
        if (pickedMeterialQty < requiredMeterialQty) {
            // if scan
            if (scan) {
                var meterial = this.comingSelectedMeterials[0];
                if (meterial.PickQty > requiredMeterialQty) {
                    if (meterial.totalPickQty > remailingMeterialQty) {
                        meterial.MeterialPickQty = remailingMeterialQty;
                    }
                    else {
                        meterial.MeterialPickQty = meterial.totalPickQty;
                    }
                }
                else {
                    if (meterial.totalPickQty > remailingMeterialQty) {
                        meterial.MeterialPickQty = remailingMeterialQty;
                    }
                    else {
                        meterial.MeterialPickQty = meterial.totalPickQty;
                    }
                    meterial.MeterialPickQty = meterial.TOTALQTY - meterial.PickQty;
                }
                this.selectedMeterials.push(meterial);
                //apply paging..
                this.pagable = this.selectedMeterials.length > this.pageSize;
                pickedMeterialQty = pickedMeterialQty + meterial.MeterialPickQty;
                remailingMeterialQty = requiredMeterialQty - pickedMeterialQty;
            }
            else {
                for (var i = 0; i < this.comingSelectedMeterials.length; i++) {
                    var meterial = this.comingSelectedMeterials[i];
                    var avaliableMeterialQty = parseFloat(meterial.TOTALQTY);
                    if (avaliableMeterialQty >= remailingMeterialQty) {
                        meterial.MeterialPickQty = remailingMeterialQty;
                    }
                    else {
                        meterial.MeterialPickQty = avaliableMeterialQty;
                    }
                    // meterial.MeterialPickQty = avaliableMeterialQty - remailingMeterialQty;
                    // if (meterial.MeterialPickQty < 0) {
                    //   meterial.MeterialPickQty = 0.000;
                    // }
                    // else {
                    //   meterial.MeterialPickQty = remailingMeterialQty;
                    // }
                    this.selectedMeterials.push(meterial);
                    //apply paging..
                    this.pagable = this.selectedMeterials.length > this.pageSize;
                    pickedMeterialQty = pickedMeterialQty + meterial.MeterialPickQty;
                    remailingMeterialQty = requiredMeterialQty - pickedMeterialQty;
                }
                //code only for non tracked item
                //fixed issue: save&remaing items showing 
                if (this.OrderType == 'N') {
                    var itemMeterials = void 0;
                    if (this.outbound.TempMeterials !== undefined
                        && this.outbound.TempMeterials !== null
                        && this.outbound.TempMeterials.length > 0) {
                        itemMeterials = this.outbound.TempMeterials.filter(function (m) { return m.Item.ITEMCODE
                            === _this.outbound.SelectedItem.ITEMCODE && m.Item.ROWNUM
                            === _this.outbound.SelectedItem.ROWNUM && _this.outbound.OrderData.DOCNUM === m.Item.DOCNUM; });
                    }
                    if (itemMeterials !== undefined && itemMeterials !== null
                        && itemMeterials.length > 0) {
                        // this.selectedMeterials = [];
                        itemMeterials.forEach(function (element) {
                            for (var i = 0; i < _this.selectedMeterials.length; i++) {
                                if (_this.selectedMeterials[i].BINNO == element.Meterial.BINNO) {
                                    _this.selectedMeterials[i] = (element.Meterial);
                                }
                            }
                        });
                    }
                }
            }
            // Selected meterial
            if (this.selectedMeterials && this.selectedMeterials.length > 0) {
                this._pickedMeterialQty = this.selectedMeterials.map(function (i) { return i.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
                this._remainingMeterial = this._requiredMeterialQty - this._pickedMeterialQty;
            }
            else {
                this._pickedMeterialQty = pickedMeterialQty;
                this._requiredMeterialQty = remailingMeterialQty;
            }
        }
        this.oldSelectedMeterials = JSON.parse(JSON.stringify(this.selectedMeterials));
        this.pagable = this.selectedMeterials.length > this.pageSize;
    };
    // Save click
    OutProdissueComponent.prototype.addMetToCollection = function (fromIFPSave) {
        //lsOutbound
        var _this = this;
        if (fromIFPSave === void 0) { fromIFPSave = false; }
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            var count = 0;
            if (this.outbound.TempMeterials !== undefined
                && this.outbound.TempMeterials !== null && this.outbound.TempMeterials.length > 0) {
                if (this.fromProduction) {
                    this.outbound.TempMeterials = this.outbound.TempMeterials.filter(function (t) {
                        return t.Item.RefLineNo !== _this.outbound.SelectedItem.RefLineNo && t.Item.ITEMCODE !== _this.outbound.SelectedItem.ITEMCODE || t.Order["Order No"] !== _this.outbound.OrderData["Order No"];
                    });
                }
                else {
                    this.outbound.TempMeterials = this.outbound.TempMeterials.filter(function (t) {
                        return t.Item.ROWNUM !== _this.outbound.SelectedItem.ROWNUM && t.Item.ITEMCODE !== _this.outbound.SelectedItem.ITEMCODE || t.Item.DOCNUM !== _this.outbound.OrderData.DOCNUM;
                    });
                }
                // loop selected Items
                for (var index = 0; index < this.selectedMeterials.length; index++) {
                    var m = this.selectedMeterials[index];
                    count = count + m.MeterialPickQty;
                    if (count > this._requiredMeterialQty) {
                        this.toastr.error('', this.translate.instant("QtyGTTotal"));
                        return;
                    }
                    if (m.MeterialPickQty > 0) {
                        var item = { Order: this.outbound.OrderData, Item: this.outbound.SelectedItem, Meterial: m };
                        this.outbound.TempMeterials.push(item);
                    }
                }
            }
            else {
                this.outbound.TempMeterials = [];
                // loop selected Items
                for (var index = 0; index < this.selectedMeterials.length; index++) {
                    var m = this.selectedMeterials[index];
                    count = count + m.MeterialPickQty;
                    if (count > this._requiredMeterialQty) {
                        this.toastr.error('', this.translate.instant("QtyGTTotal"));
                        return;
                    }
                    if (m.MeterialPickQty > 0) {
                        var item = { Order: this.outbound.OrderData, Item: this.outbound.SelectedItem, Meterial: m };
                        this.outbound.TempMeterials.push(item);
                    }
                }
            }
        }
        // //lsOutbound
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        if (this.fromProduction == true && fromIFPSave == true) {
            this.back(2);
        }
        else if (this.fromProduction == false) {
            this.back(-1);
        }
    };
    OutProdissueComponent.prototype.back = function (fromwhereval) {
        if (localStorage.getItem("ComingFrom") == "ProductionIssue") {
            var statusObject = { fromwhere: fromwhereval };
            this.screenBackEvent.emit(statusObject);
        }
        else {
            this.router.navigateByUrl('home/outbound/outorder', { skipLocationChange: true });
        }
    };
    OutProdissueComponent.prototype.intersection = function (array1, array2) {
        var result = [];
        for (var i = 0; i < array1.length; i++) {
            for (var j = 0; j < array2.length; j++) {
                if (array1[i] === array2[j] && result.indexOf(array1[i]) === -1) {
                    result.push(array1[i]);
                    break;
                }
            }
        }
        return result;
    };
    ;
    OutProdissueComponent.prototype.filterData = function (m1, m2) {
        var result = [];
        var _loop_2 = function (i) {
            var data = m2.filter(function (m) {
                return m.BINNO !== m1[i].BINNO &&
                    m.LOTNO !== m1[i].LOTNO;
            });
            if (data !== undefined && data !== null && data.length > 0) {
                result.push(data);
            }
        };
        for (var i = 0; i < m1.length; i++) {
            _loop_2(i);
        }
        return result;
    };
    OutProdissueComponent.prototype.removeData = function (m1, m2) {
        var _loop_3 = function (index) {
            var data = m1.filter(function (m) {
                return m.BINNO !== m2[index].BINNO &&
                    m.LOTNO !== m2[index].LOTNO;
            });
            var idx = m1.indexOf(data);
            if (idx > -1) {
                m1 = m1.splice(idx, 1);
            }
            return { value: m1 };
        };
        for (var index = 0; index < m2.length; index++) {
            var state_2 = _loop_3(index);
            if (typeof state_2 === "object")
                return state_2.value;
        }
    };
    OutProdissueComponent.prototype.manageOldSelectedItems = function () {
        if (this.selectedMeterials !== null && this.selectedMeterials !== undefined && this.selectedMeterials.length > 0) {
            for (var index = 0; index < this.selectedMeterials.length; index++) {
                var element = this.selectedMeterials[index];
                for (var j = 0; j < this.lookupData.length; j++) {
                    var sd = this.lookupData[j];
                    if (sd.ITEMCODE === element.ITEMCODE
                        && sd.LOTNO === element.LOTNO
                        && sd.BINNO === element.BINNO) {
                        sd.OldData = true;
                        // if(sd.TOTALQTY>=element.MeterialPickQty  ){
                        // sd.TOTALQTY = sd.TOTALQTY-element.MeterialPickQty;
                        // }
                        this.lookupData[j] = sd;
                    }
                    else {
                        // sd.OldData=false;
                        // this.lookupData[j]=sd;
                    }
                }
            }
        }
    };
    OutProdissueComponent.prototype.manageExistingItem = function () {
        var tempLookup = this.lookupData;
        for (var j = 0; j < this.lookupData.length; j++) {
            var sd = this.lookupData[j];
            // Remove old selected metarial
            if (this.outbound) {
                var tempCollection = this.outbound.TempMeterials;
                var currentOrder = this.outbound.OrderData;
                // Serial
                if (this.OrderType === 'S') {
                    for (var index = 0; index < tempCollection.length; index++) {
                        var element = tempCollection[index];
                        // If already selectde
                        if (element.Order.DOCNUM !== currentOrder.DOCNUM
                            && element.Meterial.BINNO === sd.BINNO &&
                            element.Meterial.LOTNO === sd.LOTNO &&
                            element.Meterial.ITEMCODE === sd.ITEMCODE) {
                            if (tempLookup.length > j) {
                                tempLookup.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
                else {
                    // Prepare collection of bin
                    var totalBinPickQtyCollection = this.getBinAndTotalMeterial(tempCollection);
                    for (var i = 0; i < totalBinPickQtyCollection.length; i++) {
                        var element = totalBinPickQtyCollection[i];
                        if (element.BINNO === sd.BINNO &&
                            element.LOTNO === sd.LOTNO &&
                            element.ITEMCODE === sd.ITEMCODE) {
                            sd.TOTALQTY = sd.TOTALQTY - element.TotalAllocatedMetQty;
                            if (element.TotalAllocatedMetQty >= sd.TOTALQTY) {
                                if (tempLookup.length > j && this.OrderType != 'B') {
                                    tempLookup.splice(j, 1);
                                    break;
                                }
                                else {
                                    tempLookup[j].TOTALQTY = sd.TOTALQTY;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.lookupData == tempLookup;
    };
    OutProdissueComponent.prototype.getBinAndTotalMeterial = function (tempCollection) {
        var binAndQtyCollectionArray = [];
        var ProcessedCount = 0;
        var _loop_4 = function (index) {
            var element = tempCollection[index];
            var tCollection = tempCollection.filter(function (t) {
                return element.Meterial.BINNO === t.Meterial.BINNO &&
                    element.Meterial.LOTNO === t.Meterial.LOTNO &&
                    element.Meterial.ITEMCODE === t.Meterial.ITEMCODE;
            });
            ProcessedCount = ProcessedCount + tCollection.length;
            if (ProcessedCount <= tempCollection.length) {
                var existCol = binAndQtyCollectionArray.filter(function (t) {
                    return element.Meterial.BINNO === t.BINNO &&
                        element.Meterial.LOTNO === t.LOTNO &&
                        element.Meterial.ITEMCODE === t.ITEMCODE;
                });
                if (existCol.length == 0) {
                    var binAndQtyCollection = {};
                    binAndQtyCollection.BINNO = element.Meterial.BINNO;
                    binAndQtyCollection.LOTNO = element.Meterial.LOTNO;
                    binAndQtyCollection.ITEMCODE = element.Meterial.ITEMCODE;
                    binAndQtyCollection.TotalAllocatedMetQty = tCollection.map(function (i) { return i.Meterial.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
                    binAndQtyCollectionArray.push(binAndQtyCollection);
                }
            }
        };
        for (var index = 0; index < tempCollection.length; index++) {
            _loop_4(index);
        }
        return binAndQtyCollectionArray;
    };
    // IFP
    OutProdissueComponent.prototype.addToDeleiver = function (goToCustomer) {
        if (goToCustomer === void 0) { goToCustomer = true; }
        this.showLookupLoader = true;
        //lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            this.prepareDeleiveryTempCollection();
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            this.showLookupLoader = false;
        }
    };
    // On Issue Click
    OutProdissueComponent.prototype.submitProduction = function (orderId) {
        if (orderId === void 0) { orderId = null; }
        this.addMetToCollection();
        this.addToDeleiver(false);
        this.prepareDeleiveryCollectionAndDeliver(orderId);
    };
    OutProdissueComponent.prototype.prepareDeleiveryTempCollection = function () {
        if (this.outbound) {
            var tempMeterialCollection = this.outbound.TempMeterials;
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                var d = this.outbound.DeleiveryCollection[index];
                for (var j = 0; j < tempMeterialCollection.length; j++) {
                    var element = tempMeterialCollection[j];
                    if (d.Item.DOCENTRY == element.Item.DOCENTRY && d.Order.DOCNUM == element.Order.DOCNUM) {
                        tempMeterialCollection.slice(index, 1);
                    }
                }
            }
            if (tempMeterialCollection !== undefined &&
                tempMeterialCollection !== null && tempMeterialCollection.length > 0) {
                var _loop_5 = function (index) {
                    var tm = tempMeterialCollection[index];
                    var hasitem = this_2.outbound.DeleiveryCollection.filter(function (d) {
                        return d.Item.DOCENTRY === tm.Item.DOCENTRY &&
                            d.Item.TRACKING === tm.Item.TRACKING &&
                            d.Order.DOCNUM === tm.Order.DOCNUM &&
                            d.Meterial.LOTNO === tm.Meterial.LOTNO &&
                            d.Meterial.BINNO === tm.Meterial.BINNO;
                    });
                    if (hasitem.length == 0) {
                        this_2.outbound.DeleiveryCollection.push(tm);
                    }
                };
                var this_2 = this;
                for (var index = 0; index < tempMeterialCollection.length; index++) {
                    _loop_5(index);
                }
            }
        }
    };
    OutProdissueComponent.prototype.prepareDeleiveryCollectionAndDeliver = function (orderId) {
        var _this = this;
        if (this.outbound != null && this.outbound != undefined
            && this.outbound.DeleiveryCollection != null && this.outbound.DeleiveryCollection != undefined
            && this.outbound.DeleiveryCollection.length > 0) {
            if (orderId !== undefined && orderId !== null) {
                this.outbound.DeleiveryCollection = this.outbound.DeleiveryCollection.filter(function (d) { return d.Order.DOCNUM === orderId; });
            }
            var arrIssues = [];
            var arrLots = [];
            var prodIssueModel = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_9__["ProductionIssueModel"]();
            // Hdr
            var comDbId = localStorage.getItem('CompID');
            var token = localStorage.getItem('Token');
            var guid = localStorage.getItem('GUID');
            var uid = localStorage.getItem('UserId');
            var hdrLine = 0;
            var limit = -1;
            var hdrLineVal = -1;
            var refLineNo = 0;
            this.showLookupLoader = true;
            var _loop_6 = function (index) {
                //get first item from collection        
                var element = this_3.outbound.DeleiveryCollection[index];
                // Filter for getting  current item :: May be we need to change this in future
                this_3.outbound.DeleiveryCollection = this_3.outbound.DeleiveryCollection.filter(function (d) { return d.Item.DOCENTRY === _this.outbound.SelectedItem.DOCENTRY; });
                // let coll=Get all Item for Item.Lineno===i
                var lineDeleiveryCollection = this_3.outbound.DeleiveryCollection.filter(function (d) {
                    //d.Item.LINENUM === element.Item.LINENUM
                    return element.Order.DOCNUM === d.Order.DOCNUM &&
                        element.Item.DOCENTRY === d.Item.DOCENTRY &&
                        element.Item.TRACKING === d.Item.TRACKING;
                });
                // Process Order Item and Tracking collection
                for (var hIdx = 0; hIdx < lineDeleiveryCollection.length; hIdx++) {
                    var o = lineDeleiveryCollection[hIdx];
                    // check hdr exists
                    var existHdr = false;
                    for (var index_1 = 0; index_1 < arrIssues.length; index_1++) {
                        var h = arrIssues[index_1];
                        if (h.DOCENTRY === o.Item.DOCENTRY
                            && h.ItemCode === o.Item.ITEMCODE
                            && h.Tracking === o.Item.TRACKING) {
                            existHdr = true;
                            break;
                        }
                    }
                    if (existHdr == false) {
                        // Add Header here and then add 
                        hdrLineVal = hdrLineVal + 1;
                        var item = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_9__["Item"]();
                        item.DiServerToken = token;
                        item.CompanyDBId = comDbId;
                        item.Transaction = "ProductionIssue";
                        item.RECUSERID = item.LoginId = item.UsernameForLic = uid;
                        item.DOCENTRY = o.Item.DOCENTRY;
                        item.ItemCode = o.Item.ITEMCODE;
                        item.Tracking = o.Item.TRACKING;
                        item.RefLineNo = o.Item.RefLineNo;
                        item.BATCHNO = o.Order["Order No"];
                        refLineNo = item.RefLineNo;
                        item.ONLINEPOSTING = null;
                        var metQty = lineDeleiveryCollection.map(function (i) { return i.Meterial.MeterialPickQty; }).reduce(function (sum, c) { return sum + c; });
                        item.DBIssuedQty = o.Item.IssuedQty;
                        item.U_O_ACTISSQTY = metQty;
                        item.U_O_PLNISSQTY = o.Item.ActualQty;
                        item.U_O_BALQTY = o.Item.BalQty;
                        item.FGWAREHOUSE = item.U_O_ISSWH = o.Item.WhsCode;
                        item.RefDocEntry = o.Order.RefDocEntry.toString();
                        item.GUID = guid;
                        item.LineId = o.Item.LineId;
                        item.LineNo = hdrLineVal;
                        item.IssuedQty = "0.000";
                        arrIssues.push(item);
                    }
                    // check weather item existe or not 
                    var hasDetail = false;
                    for (var index_2 = 0; index_2 < arrLots.length; index_2++) {
                        var element_1 = arrLots[index_2];
                        if (element_1.LotNumber === o.Meterial.LOTNO && element_1.Bin === o.Meterial.BINNO && element_1.LineNo === refLineNo) {
                            hasDetail = true;
                            break;
                        }
                    }
                    if (hasDetail == false) {
                        // Add Detail here 
                        var dtl = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_9__["Lot"]();
                        dtl.Bin = o.Meterial.BINNO;
                        dtl.LotNumber = o.Meterial.LOTNO;
                        dtl.LotQty = o.Meterial.MeterialPickQty + "";
                        dtl.LOTSIGMASTATUS = 'N';
                        dtl.LineNo = refLineNo;
                        dtl.SYSNUMBER = o.Meterial.SYSNUMBER;
                        arrLots.push(dtl);
                    }
                    limit = limit + lineDeleiveryCollection.length;
                }
            };
            var this_3 = this;
            // Loop through delivery collection 
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                _loop_6(index);
            }
            console.log("Dtl", arrLots);
            console.log("hdr", arrIssues);
            if (arrIssues.length > 0 && arrLots.length > 0) {
                prodIssueModel.Items = arrIssues;
                prodIssueModel.Lots = arrLots;
            }
            this.productionService.submitProduction(prodIssueModel).subscribe(function (data) {
                if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                    _this.showLookupLoader = false;
                    _this.toastr.success('', _this.translate.instant("ProductionIssueSuccess") + " : " + data[0].SuccessNo);
                    _this.resetIssueProduction();
                    _this.back(1);
                }
                else if (data[0].ErrorMsg == "7001") {
                    _this.showLookupLoader = false;
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    _this.back(1);
                    return;
                }
                else {
                    _this.showLookupLoader = false;
                    _this.toastr.error('', data[0].ErrorMsg);
                }
            }, function (error) {
                _this.showLookupLoader = false;
                console.log(error);
            });
            console.log("shdr", arrIssues);
        }
    };
    OutProdissueComponent.prototype.showAddToMeterialAndDelevery = function () {
        var _this = this;
        var dBit = false;
        if (this.outbound && this.outbound.TempMeterials) {
            var data = this.outbound.TempMeterials.filter(function (tm) { return tm.Order["Order No"] === _this.currentOrderNo; });
            dBit = data.length > 0;
        }
        else {
            dBit = false;
        }
        return dBit;
    };
    OutProdissueComponent.prototype.resetIssueProduction = function () {
        // this.ngOnInit();   
        var data = this.outbound;
        this.outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_4__["OutboundData"]();
        this.outbound.OrderData = data.OrderData;
        this.outbound.SelectedItem = data.SelectedItem;
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        this.selectedMeterials = [];
    };
    OutProdissueComponent.prototype.getItemListForOrder = function () {
        var _this = this;
        this.productionService.GetBOMItemForProductionIssue(this.currentOrderNo).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    // -------------------Check For Licence---------------
                    if (data[0].ErrorMsg != undefined) {
                        if (data[0].ErrorMsg.length > 0) {
                            _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                            return;
                        }
                    }
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
        }, function (error) {
            //this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OutProdissueComponent.prototype, "screenBackEvent", void 0);
    OutProdissueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-out-prodissue',
            template: __webpack_require__(/*! ./out-prodissue.component.html */ "./src/app/outbound/out-prodissue/out-prodissue.component.html"),
            styles: [__webpack_require__(/*! ./out-prodissue.component.scss */ "./src/app/outbound/out-prodissue/out-prodissue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_outbound_service__WEBPACK_IMPORTED_MODULE_3__["OutboundService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__["Commonservice"], src_app_services_production_service__WEBPACK_IMPORTED_MODULE_10__["ProductionService"]])
    ], OutProdissueComponent);
    return OutProdissueComponent;
}());



/***/ }),

/***/ "./src/app/outbound/outbound-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/outbound/outbound-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OutboundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundRoutingModule", function() { return OutboundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./out-cutomer/out-cutomer.component */ "./src/app/outbound/out-cutomer/out-cutomer.component.ts");
/* harmony import */ var _out_order_out_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./out-order/out-order.component */ "./src/app/outbound/out-order/out-order.component.ts");
/* harmony import */ var _out_prodissue_out_prodissue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./out-prodissue/out-prodissue.component */ "./src/app/outbound/out-prodissue/out-prodissue.component.ts");






var routes = [
    { path: '', component: _out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_3__["OutCutomerComponent"] },
    { path: 'outcustomer', component: _out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_3__["OutCutomerComponent"] },
    { path: 'outorder', component: _out_order_out_order_component__WEBPACK_IMPORTED_MODULE_4__["OutOrderComponent"] },
    { path: 'outprodissue', component: _out_prodissue_out_prodissue_component__WEBPACK_IMPORTED_MODULE_5__["OutProdissueComponent"] }
];
var OutboundRoutingModule = /** @class */ (function () {
    function OutboundRoutingModule() {
    }
    OutboundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OutboundRoutingModule);
    return OutboundRoutingModule;
}());



/***/ }),

/***/ "./src/app/outbound/outbound.module.ts":
/*!*********************************************!*\
  !*** ./src/app/outbound/outbound.module.ts ***!
  \*********************************************/
/*! exports provided: OutboundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundModule", function() { return OutboundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _outbound_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outbound-routing.module */ "./src/app/outbound/outbound-routing.module.ts");
/* harmony import */ var _out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./out-cutomer/out-cutomer.component */ "./src/app/outbound/out-cutomer/out-cutomer.component.ts");
/* harmony import */ var _out_order_out_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./out-order/out-order.component */ "./src/app/outbound/out-order/out-order.component.ts");
/* harmony import */ var _out_prodissue_out_prodissue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./out-prodissue/out-prodissue.component */ "./src/app/outbound/out-prodissue/out-prodissue.component.ts");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");














var OutboundModule = /** @class */ (function () {
    function OutboundModule() {
    }
    OutboundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_6__["OutCutomerComponent"], _out_order_out_order_component__WEBPACK_IMPORTED_MODULE_7__["OutOrderComponent"], _out_prodissue_out_prodissue_component__WEBPACK_IMPORTED_MODULE_8__["OutProdissueComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_3__["TrnaslateLazyModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
                _outbound_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutboundRoutingModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__["DropDownsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"]
            ],
            exports: [_out_cutomer_out_cutomer_component__WEBPACK_IMPORTED_MODULE_6__["OutCutomerComponent"], _out_order_out_order_component__WEBPACK_IMPORTED_MODULE_7__["OutOrderComponent"], _out_prodissue_out_prodissue_component__WEBPACK_IMPORTED_MODULE_8__["OutProdissueComponent"]]
        })
    ], OutboundModule);
    return OutboundModule;
}());



/***/ }),

/***/ "./src/app/printing-label/display-pdf/display-pdf.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/printing-label/display-pdf/display-pdf.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-dialog  *ngIf=\"opened\" [width]=\"1024\" [height]=\"600\" (close)=\"close()\">\r\n    <kendo-dialog-titlebar>\r\n        {{fileNameLabel}}\r\n    </kendo-dialog-titlebar>\r\n    <iframe *ngIf=\"isMobile==false\" width='100%' height='500px' [src]='base64String | pdfpipe'></iframe>\r\n    <!-- <button type=\"button\"  (click)=\"OnCancelClick()\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-close-outline\"\r\n        role=\"presentation\"></span> {{'Cancel'|translate}}</button> -->\r\n\r\n    <pdf-viewer  *ngIf=\"isMobile\" [src]=\"fileNameLabel\" \r\n        [render-text]=\"true\"\r\n        style=\"display: block;\"></pdf-viewer>\r\n</kendo-dialog>"

/***/ }),

/***/ "./src/app/printing-label/display-pdf/display-pdf.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/printing-label/display-pdf/display-pdf.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLWxhYmVsL2Rpc3BsYXktcGRmL2Rpc3BsYXktcGRmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/printing-label/display-pdf/display-pdf.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/printing-label/display-pdf/display-pdf.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPdfComponent", function() { return DisplayPdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");




var DisplayPdfComponent = /** @class */ (function () {
    //npm install ng2-pdf-viewer --save
    function DisplayPdfComponent(commonService) {
        this.commonService = commonService;
        this.pdfClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayPDF = false;
        this.isMobile = false;
        this.fileNameLabel = "";
        this.opened = true;
    }
    DisplayPdfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileNameLabel = this.fileName.substr(this.fileName.lastIndexOf("\\") + 1);
        //console.log("File name: "+this.fileNameLabel);
        this.fileNameLabel = this.fileName; //"http://www.pdf995.com/samples/pdf.pdf";
        this.base64String = encodeURI(this.base64String);
        if (this.base64String != null && this.base64String != "")
            this.displayPDF = true;
        this.refreshEventForReopenPDFSubs = this.commonService.refreshPDFSubscriber.subscribe(function (data) {
            //for event to destroy item here.
            _this.opened = true;
        });
        if (src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["UIHelper"].isMobile()) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    };
    DisplayPdfComponent.prototype.OnCancelClick = function () {
        this.pdfClose.emit("item");
    };
    DisplayPdfComponent.prototype.close = function () {
        console.log("PDF dialog  close called");
        this.pdfClose.emit({ close: true });
        this.opened = false;
    };
    DisplayPdfComponent.prototype.open = function () {
        this.opened = true;
    };
    DisplayPdfComponent.prototype.ngOnDestroy = function () {
        console.log("distroy");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DisplayPdfComponent.prototype, "base64String", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DisplayPdfComponent.prototype, "fileName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DisplayPdfComponent.prototype, "pdfClose", void 0);
    DisplayPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-pdf',
            template: __webpack_require__(/*! ./display-pdf.component.html */ "./src/app/printing-label/display-pdf/display-pdf.component.html"),
            styles: [__webpack_require__(/*! ./display-pdf.component.scss */ "./src/app/printing-label/display-pdf/display-pdf.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"]])
    ], DisplayPdfComponent);
    return DisplayPdfComponent;
}());



/***/ }),

/***/ "./src/app/printing-label/pdfpipe.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/printing-label/pdfpipe.pipe.ts ***!
  \************************************************/
/*! exports provided: PdfpipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfpipePipe", function() { return PdfpipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PdfpipePipe = /** @class */ (function () {
    function PdfpipePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PdfpipePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    PdfpipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'pdfpipe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], PdfpipePipe);
    return PdfpipePipe;
}());



/***/ }),

/***/ "./src/app/services/commonservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/commonservice.service.ts ***!
  \***************************************************/
/*! exports provided: Commonservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commonservice", function() { return Commonservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var Commonservice = /** @class */ (function () {
    function Commonservice(httpclient, toastr, router) {
        this.httpclient = httpclient;
        this.toastr = toastr;
        this.router = router;
        this.href = window.location.href;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        // Declaration
        this.commonData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.commonData$ = this.commonData.asObservable();
        this.toast_config = {
            closeButton: true,
            progressBar: false,
            opacity: 1,
            timeOut: 5000,
            positionClass: 'toast-top-right',
            iconClasses: {
                error: 'alert alert-danger',
                info: 'alert alert-info ',
                success: 'alert alert-success ',
                warning: 'alert alert-warning'
            }
        };
        // for Seeting color of theme.
        this.themeData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_constants__WEBPACK_IMPORTED_MODULE_3__["opticonstants"].DEFAULTTHEMECOLOR);
        this.themeCurrentData = this.themeData.asObservable();
        // For opening content from left navigation links.
        this.navigatedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentNavigatedData = this.navigatedData.asObservable();
        // For signup navigation link
        this.navigatedFromData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](2);
        this.currentNavigatedFromValue = this.navigatedFromData.asObservable();
        // sidebar code
        this.isRigntSideBarOpenData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentSideBarOpenStatus = this.isRigntSideBarOpenData.asObservable();
        // SideBar Observer
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentSidebarInfo = this.sidebarSubject.asObservable();
        // Refresh List
        this.openPDFSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.refreshPDFSubscriber = this.openPDFSub.asObservable();
        // for Seeting color of theme.
        this.purchaseInquiryAttachmentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.purchaseInquiryAttachmentGridStatus = this.purchaseInquiryAttachmentGrid.asObservable();
        //  share data between landing and signup page
        this.customerUserDataSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.getcustomerUserDataSub = this.customerUserDataSub.asObservable();
        // Refresh List
        this.updateTopBarBSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.refreshTopbarSubscriber = this.updateTopBarBSub.asObservable();
        this.loadConfig();
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    }
    Commonservice.RemoveLicenseAndSignout = function () {
        throw new Error("Method not implemented.");
    };
    Commonservice.prototype.loadConfig = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.httpclient.get('./assets/config.json').subscribe(function (data) {
                    sessionStorage.setItem('ConfigData', JSON.stringify(data));
                    _this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
                }, function (err) {
                    console.log(err.message);
                });
                return [2 /*return*/];
            });
        });
    };
    Commonservice.prototype.loadJsonData = function () {
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    };
    Commonservice.prototype.get_current_url = function () {
        var temp = this.href.substring(0, this.href.lastIndexOf('/'));
        if (temp.lastIndexOf('#') != '-1') {
            temp = temp.substring(0, temp.lastIndexOf('#'));
        }
        var sanitized = temp.replace(/^http\:\/\//, '').replace(/\/+/g, '/').replace(/\/+$/, '');
        temp = (window.location.protocol + '//' + sanitized);
        return temp;
    };
    // Methods
    Commonservice.prototype.ShareData = function (data) {
        this.commonData.next(data);
    };
    Commonservice.prototype.setThemeData = function (data) {
        this.themeData.next(data);
    };
    Commonservice.prototype.setNavigatedData = function (navigationLink) {
        this.navigatedData.next(navigationLink);
    };
    Commonservice.prototype.setCurrentNavigatedFromData = function (value) {
        this.navigatedFromData.next(value);
    };
    Commonservice.prototype.setRightSidebarStatus = function (open) {
        this.isRigntSideBarOpenData.next(open);
    };
    Commonservice.prototype.setCurrentSideBar = function (currentSidebarInfoValue) {
        this.sidebarSubject.next(currentSidebarInfoValue);
    };
    Commonservice.prototype.refreshDisplyPDF = function (data) {
        this.openPDFSub.next(data);
    };
    Commonservice.prototype.setPurchaseInquiryAttachmentGrid = function (data) {
        this.purchaseInquiryAttachmentGrid.next(data);
    };
    Commonservice.prototype.passCustomerUserDataToSignup = function (data) {
        this.customerUserDataSub.next(data);
    };
    Commonservice.prototype.checkAndScanCode = function (vendCode, scanInputString) {
        var jObject = { Gs1Token: JSON.stringify([{ Vsvendorid: vendCode, StrScan: scanInputString, CompanyDBId: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Gs1/GS1SETUP", jObject, this.httpOptions);
    };
    Commonservice.prototype.RemoveLicenseAndSignout = function (toastr, router, message) {
        var jObject = { GUID: localStorage.getItem("GUID"), LoginId: localStorage.getItem("UserId") };
        this.httpclient.post(this.config_params.service_url + "/api/Login/RemoveLoggedInUser", jObject, this.httpOptions);
        this.signOut(this.toastr, this.router, message);
        //return this.httpclient.post(this.config_params.service_url + "/api/Login/RemoveLoggedInUser", jObject, this.httpOptions);
    };
    //Get Setting from DB
    Commonservice.prototype.getSettingOnSAP = function () {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = {
            MoveOrder: JSON.stringify([{
                    CompanyDBID: localStorage.getItem("CompID"),
                    UserID: localStorage.getItem("UserId")
                }])
        };
        //Return the response form the API  
        return this.httpclient.post(this.config_params.service_url + "/MoveOrder/GetSettingOnSAP", jObject, this.httpOptions);
    };
    Commonservice.prototype.signOut = function (toastr, router, message) {
        toastr.error('', message);
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('selectedComp');
        sessionStorage.removeItem('loggedInUser');
        // sessionStorage.removeItem('ConfigData');
        localStorage.removeItem('CompID');
        localStorage.removeItem('GUID');
        localStorage.removeItem('UserId');
        localStorage.removeItem('whseId');
        localStorage.removeItem('Token');
        this.clearInboundData();
        this.router.navigateByUrl('/account');
    };
    Commonservice.prototype.refreshTopBarValue = function (data) {
        this.updateTopBarBSub.next(data);
    };
    Commonservice.prototype.clearInboundData = function () {
        localStorage.setItem("GRPOReceieveData", "");
        localStorage.setItem("Line", "0");
        localStorage.setItem("addToGRPOPONumbers", "");
        localStorage.setItem("AddToGRPO", "");
        localStorage.setItem("VendCode", "");
        localStorage.setItem("VendName", "");
        localStorage.setItem("selectedPO", "");
        localStorage.setItem("PONumber", "");
    };
    Commonservice.pageSize = 10;
    Commonservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Commonservice);
    return Commonservice;
}());



/***/ }),

/***/ "./src/app/services/outbound.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/outbound.service.ts ***!
  \**********************************************/
/*! exports provided: OutboundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundService", function() { return OutboundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/outbound/request-model */ "./src/app/models/outbound/request-model.ts");




var OutboundService = /** @class */ (function () {
    function OutboundService(httpclient) {
        this.httpclient = httpclient;
        this.outRequest = new _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__["OutRequest"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    }
    OutboundService.prototype.getCustomerList = function () {
        var body = { DeliveryToken: this.prepareRequest() };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/Customerlist", body, this.httpOptions);
    };
    OutboundService.prototype.getCustomer = function (code) {
        this.outRequest.CompanyDBId = localStorage.getItem("CompID");
        var body = { DeliveryToken: JSON.stringify([{ CompanyDBId: this.outRequest.CompanyDBId, CUSTCODE: code }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/Customer", body, this.httpOptions);
    };
    OutboundService.prototype.getSOItemList = function (custCode, docNum, whse) {
        this.outRequest = new _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__["OutRequest"]();
        this.outRequest.DocEntry = docNum;
        this.outRequest.CUSTCODE = custCode;
        this.outRequest.Whse = whse;
        var body = { DeliveryToken: this.prepareRequest() };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetOpenSoItemList", body, this.httpOptions);
    };
    OutboundService.prototype.getCustomerSOList = function (custCode, docNum, whseId) {
        this.outRequest = new _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__["OutRequest"]();
        this.outRequest.DOCNUM = docNum;
        this.outRequest.CUSTCODE = custCode;
        this.outRequest.Whse = whseId;
        var body = { DeliveryToken: this.prepareRequest() };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/SoCustomerWiseLookup", body, this.httpOptions);
    };
    OutboundService.prototype.getUOMList = function (itemCode) {
        this.outRequest = new _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__["OutRequest"]();
        this.outRequest.ItemCode = itemCode;
        var body = { ItemKey: this.prepareRequest() };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/getUOM", body, this.httpOptions);
    };
    OutboundService.prototype.getAvaliableMeterial = function (itemCode, docentry) {
        var body = {
            DeliveryToken: JSON.stringify([{
                    COMPANYDBNAME: localStorage.getItem("CompID"),
                    WHSCODE: localStorage.getItem("whseId"), ITEMCODE: itemCode, DocEntry: docentry
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetAllPickPackAndOtherSerialBatch", body, this.httpOptions);
    };
    OutboundService.prototype.getAvaliableMeterialForNoneTracked = function (itemCode) {
        var body = { WHSCODE: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), ITEMCODE: itemCode }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionIssue/GetBinsToIssueForNonTrackItem", body, this.httpOptions);
    };
    OutboundService.prototype.addDeleivery = function (req) {
        var body = { DeliveryToken: JSON.stringify(req) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/SubmitDelivery", body, this.httpOptions);
    };
    OutboundService.prototype.prepareRequest = function () {
        //    this.outRequest = new OutRequest();
        this.outRequest.CompanyDBId = localStorage.getItem("CompID");
        this.outRequest.GUID = localStorage.getItem("GUID");
        this.outRequest.UsernameForLic = localStorage.getItem("UserId");
        return JSON.stringify([this.outRequest]);
    };
    /**
     * check and scan code.
     * @param whsCode
     */
    OutboundService.prototype.checkAndScanCode = function (vendCode, scanInputString) {
        var jObject = { Gs1Token: JSON.stringify([{ Vsvendorid: vendCode, StrScan: scanInputString, CompanyDBId: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Gs1/GS1SETUP", jObject, this.httpOptions);
    };
    OutboundService.prototype.getAllPickPackAndOtherSerialBatchWithoutBin = function (itemCode, scanBin, scannedSerialValue, docEntry) {
        var jObject = { DeliveryToken: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), ITEMCODE: itemCode, BINNO: scanBin, SCANSERIAL: scannedSerialValue,
                    DocEntry: docEntry }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetAllPickPackAndOtherSerialBatchWithoutBin", jObject, this.httpOptions);
    };
    OutboundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OutboundService);
    return OutboundService;
}());



/***/ }),

/***/ "./src/app/services/production.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/production.service.ts ***!
  \************************************************/
/*! exports provided: ProductionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionService", function() { return ProductionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductionService = /** @class */ (function () {
    function ProductionService(httpclient) {
        this.httpclient = httpclient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.config_params = JSON.parse(sessionStorage.getItem('ConfigData'));
    }
    /**
     * get list of items.
     */
    ProductionService.prototype.getOrderNumberList = function (batchNo) {
        var jObject = { BATCHNO: JSON.stringify([{ BATCHNO: batchNo, COMPANYDBNAME: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"),
                    GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionReceipt/GetBatchesForProductionReceipt", jObject, this.httpOptions);
    };
    ProductionService.prototype.GetItemsDetailForProductionReceipt = function (batchNo) {
        var jObject = { BATCHNO: JSON.stringify([{ BATCHNO: batchNo, COMPANYDBNAME: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionReceipt/GetItemsForProductionReceipt", jObject, this.httpOptions);
    };
    ProductionService.prototype.GetBinsList = function () {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: localStorage.getItem("whseId"), QCRequired: '', PageId: "FGRECEIPT" }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetBinsForReceiptWithReceivingBin", jObject, this.httpOptions);
    };
    /**
     * check bin is exists or not.
     * @param item
     */
    ProductionService.prototype.isBinExists = function (bin) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), BinCode: bin,
                    ItemCode: '', WhsCode: localStorage.getItem("whseId"), ALLBINS: true }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsBinExist", jObject, this.httpOptions);
    };
    ProductionService.prototype.submitProductionRecepit = function (submitReceiptProdData) {
        var jObject = { GoodsReceiptModel: JSON.stringify(submitReceiptProdData) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionReceipt/SubmitProductionReceipt", jObject, this.httpOptions);
    };
    /**
     * check bin is exists or not.
     * @param item
     */
    ProductionService.prototype.isSerialExists = function (serialNo, itemCode, transType, tracking, wono) {
        var jObject = { SerialNo: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: itemCode, SerialNo: serialNo, TransType: transType, TRACKING: tracking, WONO: wono }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/CheckSerialNoPROD", jObject, this.httpOptions);
    };
    /**
    * check bin is exists or not.
    * @param item
    */
    ProductionService.prototype.GetBatchesForProductionIssueWithProcessCell = function () {
        var jObject = { BATCHNO: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionIssue/GetBatchesForProductionIssueWithProcessCell", jObject, this.httpOptions);
    };
    ProductionService.prototype.GetBOMItemForProductionIssue = function (orderNo) {
        var jObject = { BATCHNO: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), ORDERNO: orderNo, WHSCODE: localStorage.getItem("whseId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionIssue/GetBOMItemForProductionIssue", jObject, this.httpOptions);
    };
    ProductionService.prototype.submitProduction = function (req) {
        var body = { ProductionIssueModel: JSON.stringify(req) };
        return this.httpclient.post(this.config_params.service_url + "/api/ProductionIssue/SubmitProductionIssue", body, this.httpOptions);
    };
    ProductionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductionService);
    return ProductionService;
}());



/***/ }),

/***/ "./src/app/shared-module/shared-module.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared-module/shared-module.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/lookup/lookup.component */ "./src/app/common/lookup/lookup.component.ts");
/* harmony import */ var _common_comon_confirm_dialog_comon_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/comon-confirm-dialog/comon-confirm-dialog.component */ "./src/app/common/comon-confirm-dialog/comon-confirm-dialog.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_confirm_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/confirm-dialog/confirm-dialog/confirm-dialog.component */ "./src/app/common/confirm-dialog/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _common_confirm_dialog_confirmdialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/confirm-dialog/confirmdialog.service */ "./src/app/common/confirm-dialog/confirmdialog.service.ts");
/* harmony import */ var _printing_label_display_pdf_display_pdf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../printing-label/display-pdf/display-pdf.component */ "./src/app/printing-label/display-pdf/display-pdf.component.ts");
/* harmony import */ var _printing_label_pdfpipe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../printing-label/pdfpipe.pipe */ "./src/app/printing-label/pdfpipe.pipe.ts");
/* harmony import */ var _common_number_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/number-format.pipe */ "./src/app/common/number-format.pipe.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");














var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogsModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"]],
            providers: [_common_confirm_dialog_confirmdialog_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmdialogService"]],
            declarations: [_common_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__["LookupComponent"], _common_confirm_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], _common_comon_confirm_dialog_comon_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ComonConfirmDialogComponent"], _printing_label_display_pdf_display_pdf_component__WEBPACK_IMPORTED_MODULE_10__["DisplayPdfComponent"],
                _printing_label_pdfpipe_pipe__WEBPACK_IMPORTED_MODULE_11__["PdfpipePipe"], _common_number_format_pipe__WEBPACK_IMPORTED_MODULE_12__["NumberFormatPipe"]],
            entryComponents: [_common_confirm_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], _printing_label_display_pdf_display_pdf_component__WEBPACK_IMPORTED_MODULE_10__["DisplayPdfComponent"]],
            exports: [_common_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__["LookupComponent"], _common_confirm_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], _common_comon_confirm_dialog_comon_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ComonConfirmDialogComponent"],
                _printing_label_display_pdf_display_pdf_component__WEBPACK_IMPORTED_MODULE_10__["DisplayPdfComponent"], _printing_label_pdfpipe_pipe__WEBPACK_IMPORTED_MODULE_11__["PdfpipePipe"], _common_number_format_pipe__WEBPACK_IMPORTED_MODULE_12__["NumberFormatPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    assetsPath: "../assets/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/translate-lazy.module.ts":
/*!**************************************!*\
  !*** ./src/translate-lazy.module.ts ***!
  \**************************************/
/*! exports provided: createTranslateLoader, TrnaslateLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrnaslateLazyModule", function() { return TrnaslateLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");





// import { CommonHelper, LocalStorageService } from "ewapps-lib";
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var TrnaslateLazyModule = /** @class */ (function () {
    function TrnaslateLazyModule(translate) {
        // get the current UserLang
        // let userLang: string = translate.getBrowserLang();
        // let userLang: string = CommonHelper.getBrowserLanguage();
        var userLang = 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        // translate.use(userLang);
        // Get Language from local storage
        var currentLang = 'en';
        translate.use(currentLang);
    }
    TrnaslateLazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    },
                    isolate: true
                }),
            ],
            declarations: [],
            providers: [],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], TrnaslateLazyModule);
    return TrnaslateLazyModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ankur\WMS\NEwWMSCLone3\OptiProERPWMS-Angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map