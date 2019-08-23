(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.Component.html":
/*!************************************!*\
  !*** ./src/app/app.Component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"text-center\">OptiPro Mobile MoveOrder</h1> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OptiPro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.Component.html */ "./src/app/app.Component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _move_order_move_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./move-order/move-order.component */ "./src/app/move-order/move-order.component.ts");
/* harmony import */ var _operational_detail_operational_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operational-detail/operational-detail.component */ "./src/app/operational-detail/operational-detail.component.ts");
/* harmony import */ var _work_order_detail_work_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work-order-detail/work-order-detail.component */ "./src/app/work-order-detail/work-order-detail.component.ts");
/* harmony import */ var _qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./qty-without-fgscan/qty-without-fgscan.component */ "./src/app/qty-without-fgscan/qty-without-fgscan.component.ts");
/* harmony import */ var _qty_with_fgscan_qty_with_fgscan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qty-with-fgscan/qty-with-fgscan.component */ "./src/app/qty-with-fgscan/qty-with-fgscan.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _qty_with_fgscan_detail_qty_with_fgscan_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./qty-with-fgscan-detail/qty-with-fgscan-detail.component */ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.ts");
/* harmony import */ var _progress_kendo_angular_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-upload */ "./node_modules/@progress/kendo-angular-upload/dist/es/index.js");
/* harmony import */ var _fgrmscanparent_fgrmscanparent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fgrmscanparent/fgrmscanparent.component */ "./src/app/fgrmscanparent/fgrmscanparent.component.ts");
/* harmony import */ var _fgrmscanparentinputform_fgrmscanparentinputform_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fgrmscanparentinputform/fgrmscanparentinputform.component */ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.ts");
/* harmony import */ var _fgrmscanchildinputform_fgrmscanchildinputform_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fgrmscanchildinputform/fgrmscanchildinputform.component */ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lookup/lookup.component */ "./src/app/lookup/lookup.component.ts");
/* harmony import */ var _operation_lookup_operation_lookup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operation-lookup/operation-lookup.component */ "./src/app/operation-lookup/operation-lookup.component.ts");
/* harmony import */ var _work_order_lookup_work_order_lookup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./work-order-lookup/work-order-lookup.component */ "./src/app/work-order-lookup/work-order-lookup.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// Bootstrap Dropdown




//Ngx Toaster

var myRoots = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'moveorder', component: _move_order_move_order_component__WEBPACK_IMPORTED_MODULE_5__["MoveOrderComponent"] },
    { path: 'operationaldetail', component: _operational_detail_operational_detail_component__WEBPACK_IMPORTED_MODULE_6__["OperationalDetailComponent"] },
    { path: 'workorderdetail', component: _work_order_detail_work_order_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkOrderDetailComponent"] },
    { path: 'qtywithoutfgscan', component: _qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_8__["QtyWithoutFGScanComponent"] },
    { path: 'qtywithfgscan', component: _qty_with_fgscan_qty_with_fgscan_component__WEBPACK_IMPORTED_MODULE_9__["QtyWithFGScanComponent"] },
    { path: 'fgrmscanparent', component: _fgrmscanparent_fgrmscanparent_component__WEBPACK_IMPORTED_MODULE_20__["FgrmscanparentComponent"] },
    { path: 'fgrmscanparentinputform', component: _fgrmscanparentinputform_fgrmscanparentinputform_component__WEBPACK_IMPORTED_MODULE_21__["FgrmscanparentinputformComponent"] },
    { path: 'fgrmscanchildinputform', component: _fgrmscanchildinputform_fgrmscanchildinputform_component__WEBPACK_IMPORTED_MODULE_22__["FgrmscanchildinputformComponent"] },
    { path: 'lookup', component: _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_29__["LookupComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _move_order_move_order_component__WEBPACK_IMPORTED_MODULE_5__["MoveOrderComponent"],
                _operational_detail_operational_detail_component__WEBPACK_IMPORTED_MODULE_6__["OperationalDetailComponent"],
                _work_order_detail_work_order_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkOrderDetailComponent"],
                _qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_8__["QtyWithoutFGScanComponent"],
                _qty_with_fgscan_qty_with_fgscan_component__WEBPACK_IMPORTED_MODULE_9__["QtyWithFGScanComponent"],
                _qty_with_fgscan_detail_qty_with_fgscan_detail_component__WEBPACK_IMPORTED_MODULE_18__["QtyWithFGScanDetailComponent"],
                _fgrmscanparent_fgrmscanparent_component__WEBPACK_IMPORTED_MODULE_20__["FgrmscanparentComponent"],
                _fgrmscanparentinputform_fgrmscanparentinputform_component__WEBPACK_IMPORTED_MODULE_21__["FgrmscanparentinputformComponent"],
                _fgrmscanchildinputform_fgrmscanchildinputform_component__WEBPACK_IMPORTED_MODULE_22__["FgrmscanchildinputformComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_26__["TopbarComponent"],
                _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_29__["LookupComponent"],
                _operation_lookup_operation_lookup_component__WEBPACK_IMPORTED_MODULE_30__["OperationLookupComponent"],
                _work_order_lookup_work_order_lookup_component__WEBPACK_IMPORTED_MODULE_31__["WorkOrderLookupComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(myRoots, { useHash: true }),
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["StorageServiceModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"].forRoot(),
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__["DropDownsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientJsonpModule"],
                _progress_kendo_angular_upload__WEBPACK_IMPORTED_MODULE_19__["UploadModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__["ButtonsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_25__["BsDropdownModule"].forRoot(),
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_27__["DateInputsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__["OwlNativeDateTimeModule"]
            ],
            providers: [_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_29__["LookupComponent"], _qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_8__["QtyWithoutFGScanComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/BaseClass.ts":
/*!**************************************!*\
  !*** ./src/app/classes/BaseClass.ts ***!
  \**************************************/
/*! exports provided: BaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this.href = window.location.href;
        this.adminDBName = "OPTIPROADMIN";
        this.messageConfig = {
            closeButton: true
            // progressBar:true
        };
        //Customization Client Codes
        this.ellyza_london = "EllyzaLondon";
        this.standard = "standard";
    }
    BaseClass.prototype.get_current_url = function () {
        var temp = this.href.substring(0, this.href.lastIndexOf('/'));
        if (temp.lastIndexOf('#') != '-1') {
            temp = temp.substring(0, temp.lastIndexOf('#'));
        }
        return temp;
    };
    return BaseClass;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService() {
        // Declaration
        this.commonData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.commonData$ = this.commonData.asObservable();
    }
    // Methods
    CommonService.prototype.ShareData = function (data) {
        this.commonData.next(data);
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n            <div class=\"opti_spinner\"></div>\r\n        </div>\r\n    <!-- loader end -->\r\n<form class=\"k-form col-md-12 col-sm-12 col-xs-12\" >\r\n      <label class=\"k-form-field opti_item-code-superchild\">\r\n            <span class=\"opti_form-label\">Item Code</span>\r\n            <span class=\"float-left opti_fgbatch-serial\"><input type=\"text\" class=\"k-textbox\" [(ngModel)]=\"psChildCompItemCode\" (blur)=\"onChildCompItemBlur()\" id=\"psChildCompItemCodeID\" name =\"psChildCompItemCodeName\" [disabled]=\"bIsInEditMode\"></span> \r\n            <span class=\"opti_fgbatch-serial-icon\">\r\n                  <img src=\"assets/images/common/scanner.svg\" id=\"ItemCodeScan\" (click)=\"onFGScan()\" class=\"opti_mouse-pointer\" width=\"27px\" height=\"27px\">\r\n            </span>\r\n            <span *ngIf=\"bIsChildItemCodeEmpty\" class=\"float-right opti_error-msg\"> Item code can't be empty </span>\r\n\r\n      </label>\r\n\r\n      <label class=\"k-form-field\">\r\n            <span class=\"opti_form-label\">RM Batch Serial</span>\r\n            <input type=\"text\" class=\"k-textbox\"  [(ngModel)]=\"psChildCompBatchSer\" (blur)=\"onChildCompBatchSerBlur()\" id=\"psChildCompBatchSerID\" name=\"psChildCompBatchSerName\" [disabled]=\"bIsInEditMode || bIsChildItemCodeEmpty || disableChildBatSerEmpty\">\r\n            <span *ngIf=\"bIsChildBatSerEmpty\" class=\"float-right opti_error-msg\"> Item code batch/serial can't be empty </span>\r\n      </label>\r\n\r\n      <label class=\"k-form-field\">\r\n            <span class=\"opti_form-label\">Qty</span>\r\n            <input type=\"number\" style=\"text-align: right;\" class=\"k-textbox\" [(ngModel)]=\"iQty\" id=\"iQtyID\" name=\"iQyName\" [disabled]=\"bIsChildItemCodeEmpty || disableQtyField\" (blur)=\"onQuantityBlur()\">\r\n            <span *ngIf=\"bIsQtyIsZero\" class=\"float-right opti_error-msg\"> Quantity should be greater than 0 </span>\r\n      </label>\r\n\r\n      <div class=\"text-left\">\r\n            <button align=\"center\" type=\"button\" align=\"middle\" class=\"k-button k-primary\" (click)=\"onRMAddRowPress()\">Add</button>\r\n            <button align=\"center\" type=\"button\" align=\"middle\" class=\"k-button\" (click)=\"showLevelChild()\">Cancel</button>\r\n      </div> \r\n</form>            "

/***/ }),

/***/ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-form {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.opti_fgbatch-serial {\n  width: calc(100% - 30px);\n  margin-bottom: 0 !important; }\n\n.opti_fgbatch-serial input {\n    width: 100%; }\n\n.opti_fgbatch-serial-icon {\n  width: 27px;\n  float: right;\n  margin-bottom: 0 !important; }\n"

/***/ }),

/***/ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.ts ***!
  \****************************************************************************/
/*! exports provided: FgrmscanchildinputformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanchildinputformComponent", function() { return FgrmscanchildinputformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fgrmscanchildinputform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/fgrmscanchildinputform.service */ "./src/app/services/fgrmscanchildinputform.service.ts");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/qty-with-fg-scan.service */ "./src/app/services/qty-with-fg-scan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FgrmscanchildinputformComponent = /** @class */ (function () {
    function FgrmscanchildinputformComponent(qtyWithFGScanDtl, FGRMinput, toastr) {
        this.qtyWithFGScanDtl = qtyWithFGScanDtl;
        this.FGRMinput = FGRMinput;
        this.toastr = toastr;
        this.psChildCompItemCode = '';
        this.psChildCompBatchSer = '';
        this.CompanyDBId = '';
        this.iQty = 1;
        this.showLoader = false;
        this.bIsInEditMode = false;
        this.bIsChildItemCodeEmpty = false;
        this.disableChildBatSerEmpty = false;
        this.disableQtyField = false;
        this.bIsQtyIsZero = false;
        this.bIsChildBatSerEmpty = false;
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]();
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FgrmscanchildinputformComponent.prototype.ngOnInit = function () {
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.psChildCompItemCode = "";
        this.psChildCompBatchSer = "";
        this.iQty = 1;
        this.sChildBin = "";
        this.sChildWhse = "";
        this.sChildManagedBy = "";
        //Take if is in edit mode
        if (this.rowChildEditFrmParentInpt != null) {
            if (this.rowChildEditFrmParentInpt.length > 0) {
                this.bIsInEditMode = true;
                this.psChildCompItemCode = this.rowChildEditFrmParentInpt[0].ChildItemCode;
                this.psChildCompBatchSer = this.rowChildEditFrmParentInpt[0].ChildBatchSerNo;
                this.iQty = this.rowChildEditFrmParentInpt[0].Qty,
                    this.seqNo = this.rowChildEditFrmParentInpt[0].SequenceNo;
                this.sChildManagedBy = this.rowChildEditFrmParentInpt[0].ManagedBy;
            }
        }
    };
    FgrmscanchildinputformComponent.prototype.showLevelChild = function () {
        document.getElementById('opti_QtylevelChildID').style.display = 'block';
        document.getElementById('opti_qtylevelSuperchildID').style.display = 'none';
        this.messageEvent.emit(this.sendRMRowToParent);
    };
    //Events
    FgrmscanchildinputformComponent.prototype.onChildCompItemBlur = function () {
        var _this = this;
        var inputValue = document.getElementById('psChildCompItemCodeID').value;
        if (inputValue.length > 0) {
            this.psChildCompItemCode = inputValue;
            //This function will get the decoded string
            //  this.getDecodedString();
        }
        this.showLoader = true;
        //First we will check whether the child component Item code entered is valid and get its details
        if (this.psChildCompItemCode != "") {
            this.FGRMinput.CheckIfChildCompExists(this.CompanyDBId, this.basicDetailFrmParentInput[0].ItemCode, this.psChildCompItemCode, this.basicDetailFrmParentInput[0].WorkOrderNo, this.basicDetailFrmParentInput[0].OperNo).subscribe(function (data) {
                if (data != null) {
                    _this.bIsChildItemCodeEmpty = false;
                    _this.disableChildBatSerEmpty = false;
                    //The entire details of item will be fetched here
                    _this.childCompItemCodeDetls = data;
                    //if the item not exists then we will give error 
                    if (_this.childCompItemCodeDetls[0].isChildComExists == "False") {
                        _this.disableChildBatSerEmpty = true;
                        _this.toastr.error('', "The item code does'nt exists", _this.baseClassObj.messageConfig);
                        _this.psChildCompItemCode = '';
                    }
                    else {
                        if (_this.childCompItemCodeDetls[0].ManagedBy != "None") {
                            _this.sChildBin = _this.childCompItemCodeDetls[0].Bin;
                            _this.sChildWhse = _this.childCompItemCodeDetls[0].WareHouse;
                            _this.sChildManagedBy = _this.childCompItemCodeDetls[0].ManagedBy;
                        }
                        else {
                            _this.disableChildBatSerEmpty = true;
                            _this.toastr.warning('', "None tracked items not allowed", _this.baseClassObj.messageConfig);
                            _this.psChildCompItemCode = '';
                        }
                    }
                    _this.showLoader = false;
                }
                else {
                    _this.showLoader = false;
                }
            });
        }
        else {
            this.showLoader = false;
            this.bIsChildItemCodeEmpty = true;
        }
    };
    //This will check the bat / serial enterd by user
    FgrmscanchildinputformComponent.prototype.onChildCompBatchSerBlur = function () {
        var _this = this;
        this.showLoader = true;
        if (this.psChildCompBatchSer != "") {
            this.FGRMinput.CheckIfValidBatchSerialComponentEntered(this.CompanyDBId, this.sChildWhse, this.sChildBin, this.psChildCompBatchSer, this.psChildCompItemCode).subscribe(function (data) {
                if (data != null) {
                    if (data.length > 0) {
                        _this.bIsChildBatSerEmpty = false;
                        //If the Child Item code is Batch Tracked
                        if (_this.sChildManagedBy == "Batch") {
                            //enable qty field if batch 
                            _this.disableQtyField = false;
                            if (data[0].TOTALQTY == "") {
                                _this.toastr.error('', 'No inventory found for ' + _this.psChildCompBatchSer, _this.baseClassObj.messageConfig);
                            }
                            else {
                                _this.iChildInventory = data[0].TOTALQTY;
                            }
                        }
                        //If the Child Item code is Serial Tracked
                        if (_this.sChildManagedBy == "Serial") {
                            //disable qty field if serial and set qty to 1
                            _this.disableQtyField = true;
                            if (data[0].TOTALQTY == "") {
                                _this.toastr.error('', 'No inventory found for ' + _this.psChildCompBatchSer, _this.baseClassObj.messageConfig);
                            }
                            else {
                                _this.iQty = data[0].TOTALQTY;
                            }
                        }
                        //Get the sysnumber of the child item code
                        _this.iSysNum = data[0].SYSNUMBER;
                    }
                    else {
                        _this.toastr.error('', "It does'nt belong to this item or it is consumed", _this.baseClassObj.messageConfig);
                        _this.psChildCompBatchSer = '';
                    }
                    _this.showLoader = false;
                }
                else {
                    _this.showLoader = false;
                }
            });
        }
        else {
            this.showLoader = false;
            this.bIsChildBatSerEmpty = true;
        }
    };
    //on Save row press
    FgrmscanchildinputformComponent.prototype.onRMAddRowPress = function () {
        if (this.bIsInEditMode == false) {
            if (this.checkIfChildComponentsExists() == false) {
                //This json row will be added to the grid present in the parent form of this one
                this.sendRMRowToParent = {
                    OPTM_SEQ: 0,
                    OPTM_ITEMCODE: this.psChildCompItemCode,
                    OPTM_BTCHSERNO: this.psChildCompBatchSer,
                    OPTM_QUANTITY: this.iQty,
                    OPTM_BINNO: this.sChildBin,
                    OPTM_WHSCODE: this.sChildWhse,
                    ManagedBy: this.sChildManagedBy,
                    CompanyDBId: this.CompanyDBId,
                    WorkOrder: this.basicDetailFrmParentInput[0].WorkOrderNo,
                    ParentBatchSerial: this.detailsOfParentinputFrm.ParentBatchSer,
                    User: this.loggedInUser,
                    OperNo: this.detailsOfParentinputFrm.OperNo,
                    SysNumber: this.iSysNum
                };
                // //check that the entered data is not duplicate before pushing into array
                // let isEntryExists = this.childGridDataArray.some(e => e.OPTM_BTCHSERNO === this.psChildCompBatchSer && e.OPTM_ITEMCODE == e.psChildCompItemCode);
                // //if the entry is new then ok else we will stop
                // // if(isEntryExists == false){
                // //   this.messageEvent.emit(this.sendRMRowToParent);
                // // }
                // if(isEntryExists == true){
                //   //alert("The item code with this serial/batch already exsits")
                //   this.toastr.error('',"The item code with this serial/batch already exsits",this.baseClassObj.messageConfig);    
                //   this.psChildCompBatchSer = '';
                //   this.psChildCompItemCode = '';
                // }
                this.showLevelChild();
            }
            else {
                //alert("Item componenent with this batch/serial already exists");
                this.toastr.error('', "The item code with this serial/batch already exsits", this.baseClassObj.messageConfig);
            }
        }
        else {
            //This json row will use to update the child data
            this.sendRMRowToParent = {
                OPTM_SEQ: this.seqNo,
                OPTM_ITEMCODE: this.psChildCompItemCode,
                OPTM_BTCHSERNO: this.psChildCompBatchSer,
                OPTM_QUANTITY: this.iQty,
                ManagedBy: this.sChildManagedBy,
                LoggedInUser: this.loggedInUser
            };
            //this.messageEvent.emit(this.sendRMRowToParent);
            this.showLevelChild();
        }
    };
    //OnQty blur this will be called
    FgrmscanchildinputformComponent.prototype.onQuantityBlur = function () {
        //If qty is greater than zero
        if (this.iQty > 0) {
            this.bIsQtyIsZero = false;
            //chk for the managed by
            if (this.sChildManagedBy == "Serial") {
                if (this.iChildInventory < this.iQty) {
                    this.toastr.warning('', "Quantity can't be greater than inventory quantity", this.baseClassObj.messageConfig);
                    this.iQty = 1;
                }
            }
            if (this.sChildManagedBy == "Batch") {
                if (this.iChildInventory < this.iQty) {
                    this.toastr.warning('', "Quantity can't be greater than inventory quantity", this.baseClassObj.messageConfig);
                    this.iQty = 1;
                }
            }
        }
        else {
            this.bIsQtyIsZero = true;
        }
    };
    //Core Functions
    FgrmscanchildinputformComponent.prototype.checkIfChildComponentsExists = function () {
        var _this = this;
        var isCompExists = false;
        if (this.childGridDataArray != null && this.childGridDataArray.length > 0) {
            isCompExists = this.childGridDataArray.some(function (e) { return e.OPTM_ITEMCODE == _this.psChildCompItemCode && e.OPTM_BTCHSERNO == _this.psChildCompBatchSer; });
        }
        return isCompExists;
    };
    //Get Decoded String
    FgrmscanchildinputformComponent.prototype.getDecodedString = function () {
        var _this = this;
        this.showLoader = true;
        this.qtyWithFGScanDtl.getDecodedString(this.CompanyDBId, this.psChildCompItemCode).subscribe(function (data) {
            if (data != null) {
                _this.showLoader = false;
                if (data.length > 0) {
                    console.log("response data" + data);
                    _this.psChildCompItemCode = "";
                    _this.iQty = 1;
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanchildinputformComponent.prototype, "basicDetailFrmParentInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanchildinputformComponent.prototype, "detailsOfParentinputFrm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanchildinputformComponent.prototype, "childGridDataArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanchildinputformComponent.prototype, "rowChildEditFrmParentInpt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FgrmscanchildinputformComponent.prototype, "messageEvent", void 0);
    FgrmscanchildinputformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fgrmscanchildinputform',
            template: __webpack_require__(/*! ./fgrmscanchildinputform.component.html */ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.html"),
            styles: [__webpack_require__(/*! ./fgrmscanchildinputform.component.scss */ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_4__["QtyWithFGScanService"], src_app_services_fgrmscanchildinputform_service__WEBPACK_IMPORTED_MODULE_1__["FgrmscanchildinputformService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], FgrmscanchildinputformComponent);
    return FgrmscanchildinputformComponent;
}());



/***/ }),

/***/ "./src/app/fgrmscanparent/fgrmscanparent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/fgrmscanparent/fgrmscanparent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n<!-- loader end -->\r\n<div #qtylevel1 id=\"opti_QtylevelParentID\"> \r\n    <kendo-grid \r\n    [data]=\"FGScanGridData\" \r\n    [height]=gridHeight-56-62\r\n    (remove)=\"removeHandler($event)\"\r\n    (edit)=\"editHandler($event)\"\r\n    [resizable]=\"false\" \r\n    [pageSize]=\"50\" \r\n    [pageable]=\"true\" \r\n    [sortable]=\"true\"  \r\n    [filterable]=\"false\"\r\n    [groupable]=\"false\" \r\n    >\r\n      <ng-template kendoGridToolbarTemplate>\r\n        <img src=\"assets/images/common/add.svg\" class=\"opti_mouse-pointer float-right\" (click)=\"showLevelChildSuperChild()\" width=\"20px\" height=\"20px\">\r\n        <h5>Finished Goods List</h5>\r\n        \r\n      </ng-template>  \r\n\r\n      <kendo-grid-column field=\"OPTM_SEQ\" title=\"#\"  width=\"100\" [hidden]=\"true\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"OPTM_BTCHSERNO\" title=\"FG Batch/Serial\" width=\"120\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"OPTM_QUANTITY\"  title=\"Quantity\"  width=\"120\" class=\"text-right\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"OPTM_REJECT\" title=\"Reject\"  width=\"80\">\r\n          <ng-template kendoGridCellTemplate let-dataItem>\r\n              <input type=\"checkbox\" disabled [checked]=\"dataItem.OPTM_REJECT\"/>\r\n          </ng-template>\r\n      </kendo-grid-column>\r\n      <kendo-grid-column field=\"OPTM_NC\" title=\"NC\"  width=\"80\" [hidden]=\"true\">\r\n          <ng-template kendoGridCellTemplate let-dataItem>\r\n              <input type=\"checkbox\" disabled  [checked]=\"dataItem.OPTM_NC\"/>\r\n          </ng-template>\r\n      </kendo-grid-column>\r\n      <kendo-grid-command-column title=\"Actions\" width=\"150\">\r\n          <ng-template kendoGridCellTemplate>\r\n            <button kendoGridEditCommand class=\"k-primary\" *ngIf=\"showEditBtn\">Edit</button>\r\n            <button kendoGridRemoveCommand class=\"k-primary\">Delete</button>\r\n          </ng-template>\r\n      </kendo-grid-command-column>\r\n    </kendo-grid>\r\n     \r\n    \r\n    <div class=\"row\">\r\n     <div class=\"opti_quantity-summary col-md-12 col-lg-10\">\r\n            <form class=\"k-form float-right\">\r\n                <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Produced Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblProducedQty}}\" disabled>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\">\r\n                    <span class=\"opti_form-label\">Balance Qty</span>\r\n                    <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblBalQty}}\" disabled>\r\n                </label>\r\n        \r\n                <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Accepted Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblAcceptedQty}}\" disabled>\r\n                </label>\r\n        \r\n                <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Rejected Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblRejectedQty}}\" disabled>\r\n                </label>\r\n        \r\n                <label class=\"k-form-field\" [hidden]=\"true\">\r\n                        <span class=\"opti_form-label\">NC Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblNCQty}}\" disabled>\r\n                </label>\r\n            </form>\r\n     </div>\r\n\r\n     <div class=\"text-right col-md-12 col-lg-2\">\r\n            <button type=\"button\" (click)=\"onOKPress()\" class=\"k-button k-primary opti_ok\">OK</button>\r\n     </div>\r\n    </div> \r\n\r\n</div>\r\n\r\n<section #qtylevelChildSuperchild id=\"opti_QtylevelChildSuperChildID\">\r\n    <app-fgrmscanparentinputform *ngIf=\"showFGInputForm\" \r\n    [basicFGInputForm]=\"basicDetailsToFGParentInput\" \r\n    [rowDataFrmFGWithScan]=\"rowDataForEdit\" [FGWithScanGridFrmMaster]=\"FGScanGridData\" \r\n    (messageEvent)=\"receiveMessage($event)\"></app-fgrmscanparentinputform>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/fgrmscanparent/fgrmscanparent.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/fgrmscanparent/fgrmscanparent.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#opti_QtylevelParentID {\n  padding-top: 20px; }\n\n.opti_quantity-summary {\n  margin-top: 5px; }\n\n.opti_quantity-summary form {\n    padding: 0; }\n\n.opti_quantity-summary form label.k-form-field {\n      width: 19%;\n      margin-right: 1%; }\n\n.opti_quantity-summary form label.k-form-field .opti_form-label {\n        font-size: 12px; }\n\nbutton.opti_ok {\n  margin-top: 23px !important; }\n"

/***/ }),

/***/ "./src/app/fgrmscanparent/fgrmscanparent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fgrmscanparent/fgrmscanparent.component.ts ***!
  \************************************************************/
/*! exports provided: FgrmscanparentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanparentComponent", function() { return FgrmscanparentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/qty-with-fg-scan.service */ "./src/app/services/qty-with-fg-scan.service.ts");
/* harmony import */ var _services_fgrmscanparent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fgrmscanparent.service */ "./src/app/services/fgrmscanparent.service.ts");
/* harmony import */ var src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FgrmscanparentComponent = /** @class */ (function () {
    function FgrmscanparentComponent(qtyWithFGScan, fgrmService, toastr) {
        this.qtyWithFGScan = qtyWithFGScan;
        this.fgrmService = fgrmService;
        this.toastr = toastr;
        this.FGScanGridData = [];
        this.CompanyDBId = '';
        this.showEditBtn = true;
        this.lblBalQty = 0.0;
        this.lblAcceptedQty = 0.0;
        this.lblRejectedQty = 0.0;
        this.lblNCQty = 0.0;
        this.lblProducedQty = 0.0;
        this.rowDataForEdit = [];
        this.showFGInputForm = false;
        this.showLoader = false;
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_4__["BaseClass"]();
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.islevel2 = false;
        this.islevel1 = true;
    }
    FgrmscanparentComponent.prototype.onResize = function (event) {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["UIHelper"].getMainContentHeight();
    };
    FgrmscanparentComponent.prototype.showLevelChildSuperChild = function () {
        this.qtylevel1.nativeElement.style.display = 'none';
        this.qtylevelChildSuperchild.nativeElement.style.display = 'block';
        this.showFGInputForm = true;
    };
    FgrmscanparentComponent.prototype.ngOnInit = function () {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["UIHelper"].getMainContentHeight();
        // hide childsuperchild level on initial    
        this.qtylevelChildSuperchild.nativeElement.style.display = 'none';
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        console.log(this.basicDetailsFrmMO);
        this.basicDetailsToFGParentInput = this.basicDetailsFrmMO;
        //Fill all details from DB in the grid
        this.fillFGData();
        this.refreshQtys();
    };
    //Event
    FgrmscanparentComponent.prototype.onInsertFGBatSerRowPress = function () {
        //show the dialog for fg serial / batch
        //this.showFGRMScanParentInsertPopup = true;
    };
    //Kendo inbuilt method handlers
    FgrmscanparentComponent.prototype.removeHandler = function (_a) {
        var rowIndex = _a.rowIndex;
        this.deleteParentFGandRM(rowIndex);
    };
    //For edit functionalities
    FgrmscanparentComponent.prototype.editHandler = function (_a) {
        //To show the popup screen which will supdateave the data
        var rowIndex = _a.rowIndex;
        this.rowDataForEdit.push({ FGBatchSerNo: this.FGScanGridData[rowIndex].OPTM_BTCHSERNO, Quantity: this.FGScanGridData[rowIndex].OPTM_QUANTITY, IsRejected: this.FGScanGridData[rowIndex].OPTM_REJECT, IsNC: this.FGScanGridData[rowIndex].OPTM_NC, SeqNo: this.FGScanGridData[rowIndex].OPTM_SEQ, ItemManagedBy: this.FGScanGridData[rowIndex].ManagedBy });
        this.showLevelChildSuperChild();
    };
    //This will reload the screen
    FgrmscanparentComponent.prototype.receiveMessage = function ($event) {
        if ($event == "FromFGRMScanParentInputForm") {
            //This will hide the FGRM Svan paretn input form
            this.showFGInputForm = false;
            this.fillFGData();
            //This will clear ro data
            this.rowDataForEdit = [];
        }
    };
    //On OK Press the control will back to the main Move Order screen
    FgrmscanparentComponent.prototype.onOKPress = function () {
        // this.optirightfixedsection.nativeElement.style.display = 'none';
        document.getElementById('opti_rightfixedsectionID').style.display = 'none';
        document.getElementById('opti_QuantityRightSection').style.display = 'none';
        //We will get this values and push into this array to send back
        var QtySummary = {
            'BalQty': this.lblBalQty,
            'AcceptedQty': this.lblAcceptedQty,
            'RejectedQty': this.lblRejectedQty,
            'NCQty': this.lblNCQty,
            'ProducedQty': this.lblProducedQty
        };
        this.messageEvent.emit(QtySummary);
    };
    //Core Functions
    //This func. will fill data into the grid
    FgrmscanparentComponent.prototype.fillFGData = function () {
        var _this = this;
        this.showLoader = true;
        this.qtyWithFGScan.getBatchSerialInfo(this.CompanyDBId, this.basicDetailsFrmMO[0].WorkOrderNo, this.basicDetailsFrmMO[0].ItemCode, this.basicDetailsFrmMO[0].OperNo).subscribe(function (data) {
            if (data != null) {
                _this.FGScanGridData = data;
                for (var iCount in _this.FGScanGridData) {
                    if (_this.FGScanGridData[iCount].OPTM_REJECT == 'Y') {
                        _this.FGScanGridData[iCount].OPTM_REJECT = true;
                    }
                    else {
                        _this.FGScanGridData[iCount].OPTM_REJECT = false;
                    }
                    if (_this.FGScanGridData[iCount].OPTM_NC == 'Y') {
                        _this.FGScanGridData[iCount].OPTM_NC = true;
                    }
                    else {
                        _this.FGScanGridData[iCount].OPTM_NC = false;
                    }
                }
                // refresh the qtys in the lower table
                _this.refreshQtys();
                _this.showLoader = false;
            }
        });
    };
    //refresh Qtys in the lower table
    FgrmscanparentComponent.prototype.refreshQtys = function () {
        var iRejectCount = 0;
        var iNCCount = 0;
        var balQty = 0;
        var totalBalQty = 0;
        var totalProducedQty = 0;
        for (var recCount in this.FGScanGridData) {
            totalProducedQty = totalProducedQty + this.FGScanGridData[recCount].OPTM_QUANTITY;
            balQty = balQty + this.FGScanGridData[recCount].OPTM_QUANTITY;
            if (this.FGScanGridData[recCount].OPTM_REJECT == true) {
                iRejectCount = iRejectCount + this.FGScanGridData[recCount].OPTM_QUANTITY;
                balQty = balQty - this.FGScanGridData[recCount].OPTM_QUANTITY;
            }
            if (this.FGScanGridData[recCount].OPTM_NC == true) {
                iNCCount = iNCCount + this.FGScanGridData[recCount].OPTM_QUANTITY;
                balQty = balQty - this.FGScanGridData[recCount].OPTM_QUANTITY;
            }
        }
        this.lblBalQty = this.basicDetailsFrmMO[0].BalQty;
        this.lblRejectedQty = iRejectCount;
        this.lblNCQty = iNCCount;
        this.lblProducedQty = totalProducedQty;
        this.lblAcceptedQty = totalProducedQty - iNCCount - iRejectCount;
    };
    //This will Delete the Parent FGs and its corresponding attached Child RMs
    FgrmscanparentComponent.prototype.deleteParentFGandRM = function (rowIndex) {
        var _this = this;
        this.showLoader = true;
        this.fgrmService.deleteParentFGandRM(this.CompanyDBId, this.FGScanGridData[rowIndex].OPTM_SEQ, this.basicDetailsFrmMO[0].WorkOrderNo, this.FGScanGridData[rowIndex].OPTM_BTCHSERNO).subscribe(function (data) {
            if (data != null) {
                if (data == "True") {
                    //alert("Data deleted");
                    _this.fillFGData();
                }
                else {
                    _this.toastr.error('', "Failed to delete Data", _this.baseClassObj.messageConfig);
                }
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentComponent.prototype, "basicDetailsFrmMO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FgrmscanparentComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('qtylevel1'),
        __metadata("design:type", Object)
    ], FgrmscanparentComponent.prototype, "qtylevel1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('qtylevelChildSuperchild'),
        __metadata("design:type", Object)
    ], FgrmscanparentComponent.prototype, "qtylevelChildSuperchild", void 0);
    FgrmscanparentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fgrmscanparent',
            template: __webpack_require__(/*! ./fgrmscanparent.component.html */ "./src/app/fgrmscanparent/fgrmscanparent.component.html"),
            styles: [__webpack_require__(/*! ./fgrmscanparent.component.scss */ "./src/app/fgrmscanparent/fgrmscanparent.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__["QtyWithFGScanService"], _services_fgrmscanparent_service__WEBPACK_IMPORTED_MODULE_2__["FgrmscanparentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], FgrmscanparentComponent);
    return FgrmscanparentComponent;
}());



/***/ }),

/***/ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n<!-- loader end -->\r\n<section #qtylevelChild id=\"opti_QtylevelChildID\" style=\"overflow-x: hidden\">\r\n    <div class=\"container-fluid opti_padding-zero\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form class=\"k-form\" >\r\n                    <label class=\"k-form-field \">\r\n                        <span class=\"opti_form-label\">FG Batch Serial <span *ngIf=\"bIfBatSerEmpty\" class=\"float-right opti_error-msg\"> FG Batch/Serial can't be empty </span></span>\r\n                        <span class=\"float-left opti_fgbatch-serial\"><input type=\"text\" class=\"k-textbox\" [(ngModel)]=\"psBatchSer\" (blur)=\"onBatchSerBlur()\" id=\"psBatchSerID\" name =\"psBatchSername\" [disabled]=\"bIsInEditMode\"></span> \r\n                        <span class=\"opti_fgbatch-serial-icon\">\r\n                            <img src=\"assets/images/common/scanner.svg\" (click)=\"onFGScan()\" id=\"FGBatchSerialScan\" class=\"opti_mouse-pointer\" width=\"27px\" height=\"27px\">\r\n                        </span>\r\n                        \r\n                    </label>    \r\n\r\n                    <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Qty <span *ngIf=\"bIfQtyIsZero\" class=\"float-right opti_error-msg\"> Quantity can't be blank or zero </span></span>\r\n                        <input type=\"text\" style=\"text-align: right;\" width=\"50\" class=\"k-textbox\" [(ngModel)]=\"iQty\" (blur)=\"onQtyBlur()\" [disabled]=\"isQtyDisabled\" id=\"iQtyID\" name = \"iQtyname\">\r\n                        \r\n                    </label>\r\n\r\n                    <div class=\"k-form-field\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"bIsRejected\" class=\"k-checkbox\" name=\"opti_bIsRejectedID\" id=\"opti_bIsRejectedID\"  (change)=\"isCheckBoxChecked($event)\">\r\n                        <label class=\"k-checkbox-label\" for=\"opti_bIsRejectedID\">Rejected</label>\r\n\r\n                        <input type=\"checkbox\" [(ngModel)]=\"bIsNC\" class=\"k-checkbox\" name=\"opti_bIsNCID\" id=\"opti_bIsNCID\"  (change)=\"isCheckBoxChecked($event)\">\r\n                        <label class=\"k-checkbox-label\" for=\"opti_bIsNCID\" [hidden]=\"true\">NC Qty</label>\r\n                        <span *ngIf=\"bothSelectionRestrict\" class=\"float-right opti_error-msg\"> FG can either be Rejected or NC </span>\r\n                    </div>\r\n                </form>\r\n            </div>    \r\n        </div>\r\n    </div>        \r\n\r\n    <div style=\"clear: both;\">\r\n\r\n        <!-- <button  type=\"button\"  (click)=\"onInsertChildRowPress()\" align=\"middle\" class=\"btn btn-primary\">+</button> -->\r\n        \r\n        <kendo-grid \r\n        [data]=\"ChildCompGridData\" \r\n        [height]=gridHeight-276\r\n        (remove)=\"removeHandler($event)\"\r\n        (edit)=\"editHandler($event)\"\r\n        [resizable]=\"false\" \r\n        [pageSize]=\"50\" \r\n        [pageable]=\"true\" \r\n        [sortable]=\"true\"  \r\n        [filterable]=\"false\"\r\n        [groupable]=\"false\" \r\n        >\r\n            <ng-template kendoGridToolbarTemplate>\r\n                <img src=\"assets/images/common/add.svg\" class=\"opti_mouse-pointer float-right\" (click)=\"showLevelSuperChild()\" width=\"20px\" height=\"20px\">\r\n            </ng-template>  \r\n\r\n            <kendo-grid-column field=\"OPTM_SEQ\" title=\"#\"  width=\"100\" [hidden]=\"true\"></kendo-grid-column>\r\n            <kendo-grid-column field=\"OPTM_ITEMCODE\" title=\"Item Code\"  width=\"100\"></kendo-grid-column>\r\n            <kendo-grid-column field=\"ManagedBy\" title=\"Managed By\"  width=\"100\" disabled></kendo-grid-column>\r\n            <kendo-grid-column field=\"OPTM_BTCHSERNO\" title=\"RM Batch/Serial\" width=\"120\"></kendo-grid-column>\r\n            <kendo-grid-column field=\"OPTM_QUANTITY\" title=\"Quatity\"  width=\"60\"></kendo-grid-column>\r\n            <kendo-grid-command-column title=\"Actions\" width=\"120\">\r\n                <ng-template kendoGridCellTemplate>\r\n                <button kendoGridEditCommand class=\"k-primary\">Edit</button>\r\n                <button kendoGridRemoveCommand class=\"k-primary\">Delete</button>\r\n                </ng-template>\r\n            </kendo-grid-command-column>\r\n        </kendo-grid>\r\n        <br/>\r\n        <div class=\"text-left\">\r\n            <button align=\"center\" type=\"button\" align=\"middle\" class=\"k-button k-primary\" (click)=\"onFinalSavePress()\" >Save</button>\r\n            <button align=\"center\" type=\"button\" align=\"middle\" class=\"k-button\" (click)=\"showLevelParent()\">Cancel</button>\r\n        </div> \r\n        \r\n    </div>\r\n</section>\r\n\r\n<section #qtylevelSuperchild id=\"opti_qtylevelSuperchildID\">\r\n    <app-fgrmscanchildinputform *ngIf=\"showFGRMScanChildInsertPopup\" (messageEvent)=\"receiveArrayRMRowData($event)\" [detailsOfParentinputFrm]=\"detailsOfParentToChild\" [basicDetailFrmParentInput]=\"basicDetailsToChildForm\" [childGridDataArray]=\"ChildCompGridData\" [rowChildEditFrmParentInpt]=\"rowDataForChildEdit\"></app-fgrmscanchildinputform>\r\n</section>"

/***/ }),

/***/ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-form {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.opti_fgbatch-serial {\n  width: calc(100% - 30px);\n  margin-bottom: 0 !important; }\n\n.opti_fgbatch-serial input {\n    width: 100%; }\n\n.opti_fgbatch-serial-icon {\n  width: 27px;\n  float: right;\n  margin-bottom: 0 !important; }\n"

/***/ }),

/***/ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.ts ***!
  \******************************************************************************/
/*! exports provided: FgrmscanparentinputformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanparentinputformComponent", function() { return FgrmscanparentinputformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/qty-with-fg-scan.service */ "./src/app/services/qty-with-fg-scan.service.ts");
/* harmony import */ var _services_fgrmscanparentinputform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fgrmscanparentinputform.service */ "./src/app/services/fgrmscanparentinputform.service.ts");
/* harmony import */ var _fgrmscanchildinputform_fgrmscanchildinputform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fgrmscanchildinputform/fgrmscanchildinputform.component */ "./src/app/fgrmscanchildinputform/fgrmscanchildinputform.component.ts");
/* harmony import */ var src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FgrmscanparentinputformComponent = /** @class */ (function () {
    function FgrmscanparentinputformComponent(qtyWithFGScanDtl, fgrmParentForm, toastr) {
        this.qtyWithFGScanDtl = qtyWithFGScanDtl;
        this.fgrmParentForm = fgrmParentForm;
        this.toastr = toastr;
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]();
        this.ChildCompGridData = [];
        this.ParentGridData = [];
        this.rowDataForChildEdit = [];
        this.oModalData = {};
        this.showFGRMScanChildInsertPopup = false;
        this.loggedInUser = '';
        this.CompanyDBId = '';
        this.psItemManagedBy = '';
        this.bIsEdit = false;
        this.psBatchSer = '';
        this.iQty = 1;
        this.bIsRejected = false;
        this.showLoader = false;
        this.bIsInEditMode = false;
        this.bIsRMGridInEditMode = false;
        this.bothSelectionRestrict = false;
        this.bIfBatSerEmpty = false;
        this.bIfQtyIsZero = false;
        this.disableSaveBtn = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FgrmscanparentinputformComponent.prototype.onResize = function (event) {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_4__["UIHelper"].getMainContentHeight();
    };
    FgrmscanparentinputformComponent.prototype.showLevelSuperChild = function () {
        //if fields are empty then restrict user from going to add child
        if (this.psBatchSer != undefined || this.psBatchSer != "") {
            //While after putting all data for the FG input serial field the basic validations will be check here
            //This mehtod will retrun true if all things are OK and after we will navigate otherwise will throw error
            if (this.validateData() == true) {
                this.detailsOfParentToChild = {
                    ParentBatchSer: this.psBatchSer,
                    ParentItemManagedBy: this.psItemManagedBy,
                    OperNo: this.basicFGInputForm[0].OperNo
                };
                this.qtylevelChild.nativeElement.style.display = 'none';
                this.qtylevelSuperchild.nativeElement.style.display = 'block';
                this.showFGRMScanChildInsertPopup = true;
            }
        }
        else {
            this.toastr.warning('', 'Please first enter the FG batch/serial', this.baseClassObj.messageConfig);
        }
    };
    FgrmscanparentinputformComponent.prototype.showLevelParent = function () {
        document.getElementById('opti_QtylevelChildSuperChildID').style.display = 'none';
        document.getElementById('opti_QtylevelParentID').style.display = 'block';
        this.messageEvent.emit("FromFGRMScanParentInputForm");
    };
    FgrmscanparentinputformComponent.prototype.ngOnChange = function () {
        this.clearValues();
    };
    FgrmscanparentinputformComponent.prototype.ngOnInit = function () {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_4__["UIHelper"].getMainContentHeight();
        // Hide superchild section on initial
        this.qtylevelSuperchild.nativeElement.style.display = 'none';
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        console.log("On FG SCANC PARENT");
        console.log(this.basicFGInputForm);
        //console.log(this.rowDataFrmFGWithScan);
        this.basicDetailsToChildForm = this.basicFGInputForm;
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        //taking item managed by
        if (this.basicFGInputForm != null) {
            if (this.basicFGInputForm.length > 0) {
                this.psItemManagedBy = this.basicFGInputForm[0].ManagedBy;
            }
        }
        //Disable/enalbe controls
        //this.disableEnableControls();
        if (this.rowDataFrmFGWithScan != null) {
            if (this.rowDataFrmFGWithScan.length > 0) {
                this.bIsEdit = true;
                this.bIsInEditMode = true;
                this.psBatchSer = this.rowDataFrmFGWithScan[0].FGBatchSerNo;
                this.iQty = this.rowDataFrmFGWithScan[0].Quantity;
                this.bIsRejected = this.rowDataFrmFGWithScan[0].IsRejected;
                this.bIsNC = this.rowDataFrmFGWithScan[0].IsNC;
                this.iSeqNo = this.rowDataFrmFGWithScan[0].SeqNo;
                this.psItemManagedBy = this.rowDataFrmFGWithScan[0].ItemManagedBy;
                //If screen is in edit mode then will get all childs
                this.GetAllChildByParentId();
            }
            else {
                this.bIsInEditMode = false;
            }
        }
    };
    FgrmscanparentinputformComponent.prototype.clearValues = function () {
        this.psBatchSer = "";
    };
    //Events
    FgrmscanparentinputformComponent.prototype.onBatchSerBlur = function () {
        if (this.psBatchSer != null) {
            if (this.psBatchSer.length > 0) {
                this.bIfBatSerEmpty = false;
                if (this.chkIfFGBatSerAlreadyExists() == false) {
                    this.validateFGSerBat();
                }
            }
            else {
                this.bIfBatSerEmpty = true;
            }
        }
    };
    //On Qty blur this will run
    FgrmscanparentinputformComponent.prototype.onQtyBlur = function () {
        if (this.iQty <= 0 || this.iQty == undefined) {
            this.bIfQtyIsZero = true;
        }
        else {
            this.bIfQtyIsZero = false;
            //If value is ok then chk produced qty not greater than bal qty
            if (this.iQty > this.basicFGInputForm[0].BalQty) {
                this.toastr.error('', "Quantity can't be greater than balance qty", this.baseClassObj.messageConfig);
                this.iQty = 1;
                return;
            }
            else {
                //If value is ok then chk produced qty not greater than bal qty
                if (this.iQty > this.basicFGInputForm[0].ProducedQty) {
                    // alert("Quantity can't be greater than produced quantity")
                    this.toastr.error('', "Quantity can't be greater than produced qty", this.baseClassObj.messageConfig);
                    this.iQty = 1;
                    return;
                }
            }
        }
    };
    FgrmscanparentinputformComponent.prototype.onIsRejectedCheck = function () {
        console.log(this.bIsRejected);
    };
    FgrmscanparentinputformComponent.prototype.onIsNCCheck = function () {
        console.log(this.bIsNC);
    };
    //This event will recieve the data from its child input form
    FgrmscanparentinputformComponent.prototype.receiveArrayRMRowData = function ($event) {
        this.showFGRMScanChildInsertPopup = false;
        console.log("I AM --->" + $event);
        if ($event != undefined || $event != null) {
            if (this.bIsRMGridInEditMode == false) {
                this.ChildCompGridData.push($event);
            }
            else {
                for (var iRowCount in this.ChildCompGridData) {
                    if ($event.OPTM_SEQ == this.ChildCompGridData[iRowCount].OPTM_SEQ) {
                        this.ChildCompGridData[iRowCount].OPTM_ITEMCODE = $event.OPTM_ITEMCODE;
                        this.ChildCompGridData[iRowCount].OPTM_BTCHSERNO = $event.OPTM_BTCHSERNO;
                        this.ChildCompGridData[iRowCount].OPTM_QUANTITY = Number($event.OPTM_QUANTITY);
                    }
                }
            }
        }
        //To clear the array after call backing from the child form
        this.rowDataForChildEdit = [];
        //To hide the child input form
        this.showFGRMScanChildInsertPopup = false;
    };
    //This function will save the final data for a single FG Batch/Serial
    FgrmscanparentinputformComponent.prototype.onFinalSavePress = function () {
        var _this = this;
        //If child data is not saved then we will restrict user
        if (this.ChildCompGridData != null && this.ChildCompGridData.length > 0) {
            var sIsRejected = void 0;
            var sIsNC = void 0;
            //gather the Parent FG Data here
            if (this.bIsRejected == true) {
                sIsRejected = 'Y';
            }
            else {
                sIsRejected = 'N';
            }
            if (this.bIsNC == true) {
                sIsNC = 'Y';
            }
            else {
                sIsNC = 'N';
            }
            if (this.iSeqNo == undefined || this.iSeqNo == null) {
                this.iSeqNo = 0;
            }
            //this.oModalData.ABC = [{'keyNAME':'ashish'},{'keyNAME':'rmaesh'}]
            this.ParentGridData = [{
                    'SequenceNo': this.iSeqNo,
                    'WorkOrder': this.basicFGInputForm[0].WorkOrderNo,
                    'FGBatchSerial': this.psBatchSer,
                    'Rejected': sIsRejected,
                    'User': this.loggedInUser,
                    'NC': sIsNC,
                    'Item': this.basicFGInputForm[0].ItemCode,
                    'Operation': this.basicFGInputForm[0].OperNo,
                    'Quantity': this.iQty,
                    'CompanyDBId': this.CompanyDBId
                }];
            this.oModalData.HeaderData = [{ CompanyDBId: this.CompanyDBId }];
            this.oModalData.ChildDataToSave = this.ChildCompGridData;
            this.oModalData.ParentDataToSave = this.ParentGridData;
            this.fgrmParentForm.SubmitDataforFGandRM(this.oModalData).subscribe(function (data) {
                if (data != null) {
                    if (data == "True") {
                        //alert("Data saved sucessfully");
                        //Now call the parent componet by event emitter here
                        //this.messageEvent.emit("FromFGRMScanParentInputForm");
                        //this.GetAllChildByParentId();
                        _this.showLevelParent();
                    }
                    else {
                        //alert("There was some error while submitting data"); 
                        _this.toastr.error('', "There was some error while submitting data", _this.baseClassObj.messageConfig);
                        //this.GetAllChildByParentId();  
                        _this.showLevelParent();
                    }
                }
            });
        }
        else {
            this.toastr.warning('', 'Please attach batch/serials before saving the record', this.baseClassObj.messageConfig);
        }
    };
    //Following will remove the data
    FgrmscanparentinputformComponent.prototype.removeHandler = function (_a) {
        var rowIndex = _a.rowIndex;
        this.deleteRMDataBySeq(rowIndex);
    };
    //For edititng child the following fucntion will work
    FgrmscanparentinputformComponent.prototype.editHandler = function (_a) {
        var rowIndex = _a.rowIndex;
        this.bIsRMGridInEditMode = true;
        //To show the popup screen which will supdateave the data
        this.showLevelSuperChild();
        this.rowDataForChildEdit.push({
            SequenceNo: this.ChildCompGridData[rowIndex].OPTM_SEQ,
            ChildItemCode: this.ChildCompGridData[rowIndex].OPTM_ITEMCODE,
            ChildBatchSerNo: this.ChildCompGridData[rowIndex].OPTM_BTCHSERNO,
            Qty: this.ChildCompGridData[rowIndex].OPTM_QUANTITY,
            ManagedBy: this.ChildCompGridData[rowIndex].ManagedBy,
            loggedInUser: this.loggedInUser
        });
    };
    //Core Functions
    //this will chk if the data we are adding is duplicate
    FgrmscanparentinputformComponent.prototype.chkIfFGBatSerAlreadyExists = function () {
        if (this.FGWithScanGridFrmMaster != null) {
            for (var rowCount in this.FGWithScanGridFrmMaster) {
                if (this.FGWithScanGridFrmMaster[rowCount].OPTM_BTCHSERNO == this.psBatchSer) {
                    //alert("Serial/Batch already exist");
                    this.toastr.warning('', "Serial/Batch already exist", this.baseClassObj.messageConfig);
                    this.psBatchSer = "";
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    };
    //This will validate the FG Ser Batch
    FgrmscanparentinputformComponent.prototype.validateFGSerBat = function () {
        var _this = this;
        this.qtyWithFGScanDtl.checkIfFGSerBatisValid(this.CompanyDBId, this.psBatchSer, this.basicFGInputForm[0].WorkOrderNo, this.basicFGInputForm[0].ItemCode, this.basicFGInputForm[0].OperNo).subscribe(function (data) {
            if (data != null || data[0].ItemCheck != "") {
                if (data[0].ItemCheck == "ItemNotExists") {
                    //alert("FG Bat/Ser you are entering is not valid");
                    _this.toastr.error('', "FG Bat/Ser you are entering is not valid", _this.baseClassObj.messageConfig);
                    _this.psBatchSer = '';
                }
                if (data[0].ItemCheck == "ItemRejected") {
                    //alert("FG Bat/Ser you are entering is rejected");
                    _this.toastr.error('', "FG Bat/Ser you are entering is rejected", _this.baseClassObj.messageConfig);
                    _this.psBatchSer = '';
                    _this.iQty = 1;
                    return;
                }
                if (data[0].ItemCheck == "ItemMoved") {
                    _this.toastr.error('', "FG Bat/Ser you are entering is already moved", _this.baseClassObj.messageConfig);
                    _this.psBatchSer = '';
                    _this.iQty = 1;
                    return;
                }
                if (data[0].ItemCheck == "Manual") {
                    console.log(_this.psBatchSer + " -->This has a maual case");
                }
            }
            else {
                _this.toastr.error('', "There was some error while validating finished good serial batch", _this.baseClassObj.messageConfig);
                console.log("error-->" + data);
            }
        });
    };
    //This will get all childs of the parent batchserial enterd
    FgrmscanparentinputformComponent.prototype.GetAllChildByParentId = function () {
        var _this = this;
        this.showLoader = true;
        this.fgrmParentForm.GetAllChildByParentId(this.CompanyDBId, this.psBatchSer).subscribe(function (data) {
            if (data != null) {
                _this.ChildCompGridData = data;
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    FgrmscanparentinputformComponent.prototype.validateData = function () {
        //Check whether the input is not empty
        if (this.psBatchSer == '' || this.psBatchSer == null) {
            this.bIfBatSerEmpty = true;
            return false;
        }
        else {
            this.bIfBatSerEmpty = false;
        }
        //Check whether the qty is not empty
        if (this.iQty <= 0 || this.iQty == undefined) {
            this.bIfQtyIsZero = true;
            return false;
        }
        else {
            this.bIfQtyIsZero = false;
        }
        //Check if selection is of both is done
        if (this.bIsNC == true && this.bIsRejected == true) {
            this.bothSelectionRestrict = true;
            return false;
        }
        else {
            this.bothSelectionRestrict = false;
        }
        return true;
    };
    //to delete the RM
    FgrmscanparentinputformComponent.prototype.deleteRMDataBySeq = function (rowIndex) {
        var _this = this;
        this.showLoader = true;
        console.log(this.ChildCompGridData[rowIndex].OPTM_SEQ);
        this.fgrmParentForm.deleteRMDataBySeq(this.CompanyDBId, this.ChildCompGridData[rowIndex].OPTM_SEQ).subscribe(function (data) {
            if (data != null) {
                if (data == "True") {
                    //alert("Data deleted");
                    //After the Data Deletion the grid will refreshed by this
                    _this.GetAllChildByParentId();
                }
                else {
                    //alert("Failed to delete data");
                    _this.toastr.error('', "Failed to delete Data", _this.baseClassObj.messageConfig);
                    console.log("error-->" + data);
                }
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "rowDataFrmFGWithScan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "FGWithScanGridFrmMaster", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "basicFGInputForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_fgrmscanchildinputform_fgrmscanchildinputform_component__WEBPACK_IMPORTED_MODULE_3__["FgrmscanchildinputformComponent"]),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "child", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FgrmscanparentinputformComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('qtylevelChild'),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "qtylevelChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('qtylevelSuperchild'),
        __metadata("design:type", Object)
    ], FgrmscanparentinputformComponent.prototype, "qtylevelSuperchild", void 0);
    FgrmscanparentinputformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fgrmscanparentinputform',
            template: __webpack_require__(/*! ./fgrmscanparentinputform.component.html */ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.html"),
            styles: [__webpack_require__(/*! ./fgrmscanparentinputform.component.scss */ "./src/app/fgrmscanparentinputform/fgrmscanparentinputform.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__["QtyWithFGScanService"], _services_fgrmscanparentinputform_service__WEBPACK_IMPORTED_MODULE_2__["FgrmscanparentinputformService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], FgrmscanparentinputformComponent);
    return FgrmscanparentinputformComponent;
}());



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
    // public static  manageNavigationPanel():void{
    //     document.getElementById('sidebarCollapse').onclick = function() {
    //     if(UIHelper.isMobile()==false){ 
    //         document.getElementById('opti_LeftPanelID').classList.toggle('opti_sidebar-minimize');  
    //         document.getElementById('opti_RightPanelID').classList.toggle('opti_sidebar-minimize');
    //     }else{
    //         document.getElementById('opti_LeftPanelID').classList.toggle('opti_menusidebar-mobile-open');  
    //         document.getElementById('opti_RightPanelID').classList.toggle('opti_menusidebar-mobile-open');
    //     }
    //     };  
    // }
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
    UIHelper.customOpenTab = function (evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("opti_tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("opti_tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    };
    // get width of opti_TabID 
    UIHelper.getWidthOfOuterTab = function () {
        var i;
        var a;
        var tabWidth = 0;
        var tablinks = document.getElementsByClassName("opti_tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tabWidth = tabWidth + tablinks[i].offsetWidth;
        }
        document.getElementById("opti_TabID").style.width = tabWidth - 70 + 'px';
    };
    return UIHelper;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"opti_signinID\" class=\"opti_account-submodule-wrapper\">\r\n    <div class=\"float-left opti_account-banner-section\">\r\n        <img class=\"opti_mo_login-banner\" [src] = \"loginBackground\">\r\n    </div>\r\n\r\n    <div class=\"float-right opti_account-form-section\">\r\n        <div class=\"opti_outer-login-form opti_account-submodule-container\">\r\n            <div class=\"opti_vertcal-align-outer-box\">\r\n                <div class=\"panel-body opti_position-relative\" [perfectScrollbar]=\"\">\r\n\r\n                    <!-- loader start -->\r\n                    <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n                        <div class=\"opti_spinner\"></div>\r\n                    </div>\r\n                    <!-- loader end -->\r\n\r\n                    <div class=\"opti_fullwidth text-center opti_signin-logo\">\r\n                        <img src=\"assets/images/logo/large-logo.png\" alt=\"brandlogo\" class=\"opti_account-logo\">\r\n                    </div>\r\n\r\n                    <form class=\"k-form\" #signInForm=\"ngForm\">\r\n                        <label class=\"k-form-field\">\r\n                            <span class=\"opti_form-label\">\r\n                                Username * <span *ngIf=\"name.errors?.required && name.touched\" class=\"float-right opti_error-msg\"> Username Required </span>\r\n                            </span>\r\n                          \r\n                            <!--Bug no. 18145... disble autocompletion of the input field-->\r\n                            <input  autofocus  name=\"id\" required #name = ngModel  ng-change=\"GetCompany()\" [(ngModel)]=\"loginId\" (keyup)=\"onKeyUp()\" type=\"text\" class=\"k-textbox\" id=\"usr\" placeholder=\"Your username\" autocomplete=\"off\">\r\n                            \r\n                            \r\n                        </label>\r\n\r\n                        <label class=\"k-form-field\">\r\n                            <span class=\"opti_form-label\">\r\n                                Password *\r\n                                <span *ngIf=\"PasswordBlank.errors?.required && PasswordBlank.touched\" class=\"float-right opti_error-msg\">  Password required.  </span>\r\n                                <span *ngIf=\"InvalidActiveUser\"  class=\"float-right opti_error-msg\"> You are not active user.</span>\r\n                            </span>\r\n                            <input name=\"pwd\" required #PasswordBlank = ngModel  (keyup)=\"onKeyUp()\"  [(ngModel)]=\"password\" type=\"password\" class=\"k-textbox\" id=\"pwd\" (blur)=\"onPasswordBlur()\" placeholder=\"Your password\">\r\n                            <span *ngIf=\"passwordBlank\" class=\"float-right opti_error-msg\">  Password required.  </span>\r\n                            <span *ngIf=\"invalidCredentials\"  class=\"float-right opti_error-msg\"> Invalid username or password.</span>\r\n                            <span *ngIf=\"InvalidActiveUser\"  class=\"float-right opti_error-msg\"> You are not active user.</span>\r\n                        </label>\r\n\r\n                        <label class=\"k-form-field\">\r\n                            <span class=\"opti_form-label\">\r\n                                Company *\r\n                            </span>\r\n                            <kendo-dropdownlist [disabled]=\"hasCompaneyData==false\" [textField]=\"'OPTM_COMPID'\" [valueField]=\"'OPTM_COMPID'\" [data]=\"listItems\"\r\n                                name=\"listname\" [(ngModel)]=\"selectedValue\" (selectionChange)=\"onCompanyChange($event)\"></kendo-dropdownlist>\r\n                        </label>\r\n\r\n                        <label class=\"k-form-field\">\r\n                            <span class=\"opti_form-label\">\r\n                                Warehouse *\r\n                            </span>\r\n                            <kendo-dropdownlist [disabled]=\"hasWhseData==false\" [textField]=\"'OPTM_WHSE'\" [valueField]=\"'OPTM_WHSE'\" [data]=\"whseListItems\"\r\n                            name=\"whseListItems\" [(ngModel)]=\"selectedWhseValue\" (selectionChange)=\"onWarehouseChange($event)\"></kendo-dropdownlist>\r\n                        </label>\r\n\r\n                        <div class=\"text-right\">\r\n\r\n                            <button (click)=\"onLoginClick()\" [disabled]=\"!signInForm.form.valid  || disableLoginBtn\" align=\"center\" type=\"button\" class=\"opti_fullwidth\">Login</button>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\np {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\na {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\nh1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\nh2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\nh4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\nh5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\nh6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n#opti_TopBarID .opti_user-profile img {\n  border: 2px solid #fff; }\n#opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n#opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 15px;\n  border: none; }\nbody button:focus {\n    outline: none; }\nbody button:first-child {\n  margin: 0 5px 0 0; }\nbody button:last-child {\n  margin: 0 0 0 5px; }\nbody button:hover {\n  opacity: 0.8; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n#opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n#opti_WrapperID #opti_MainContentID {\n    overflow-y: auto; }\n#opti_WrapperID section#opti_TopBarID {\n    min-height: 65px; }\n#opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 999999;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\nsection#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\nbody kendo-grid {\n  box-shadow: none !important; }\na {\n  color: #333;\n  text-decoration: underline; }\na:hover {\n  color: #333; }\n.opti_vertcal-align-outer-box {\n  height: 100vh; }\n.panel-body {\n  width: 100%;\n  overflow-y: scroll;\n  height: auto;\n  max-height: 100%;\n  background-color: white;\n  box-shadow: 0px 0px 13px 0px #1fa2ff;\n  border-radius: 5px;\n  padding: 0px; }\n.opti_account-submodule-container {\n  width: 370px;\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%; }\n.opti_vertcal-align-outer-box {\n  height: calc(100vh - 100px); }\n.k-checkbox-label::before {\n  border-color: rgba(255, 255, 255, 0.7); }\nlabel .opti_checkbox-container label, label > label {\n  color: #fff;\n  font-size: 12px; }\nlabel .opti_checkbox-container label a, label > label a {\n    font-size: 12px; }\nlabel .opti_checkbox-container label a:hover, label > label a:hover {\n    text-decoration: underline; }\n.opti_vertcal-align-outer-box {\n  padding: 10px 0;\n  width: 100%; }\n.opti_form-label {\n  font-size: 15px;\n  color: #fff;\n  margin-bottom: 0 !important; }\n.opti_account-form-section {\n  width: 40%;\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%);\n  height: calc(100vh - 100px);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 0px 0px 20px #bababa; }\n.opti_account-banner-section {\n  width: 60%;\n  height: calc(100vh - 100px);\n  background-size: cover;\n  box-shadow: 0px 0px 20px #bababa;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.opti_form-label, .k-checkbox-label {\n  color: #333 !important; }\n.panel-body button.opti_fullwidth {\n  margin-left: 0;\n  text-align: center; }\nbutton {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n.opti_mo_login-banner {\n  width: 180%;\n  height: 100%;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  float: left; }\n.opti_target-link {\n  position: relative;\n  top: 12px; }\n.k-checkbox-label {\n  font-weight: normal; }\n#captchaCanvasID {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  margin-left: 5px;\n  background-image: url(\"/../assets/images/common/captcha-background.jpg\");\n  background-repeat: repeat; }\n.opti_display-inline-flex {\n  display: inline-flex !important; }\n.opti_signin-captcha {\n  margin-top: 10px; }\n.opti_captcha-refresh button {\n  margin-top: 2px; }\n.opti_captcha-refresh {\n  height: 32px;\n  display: flex !important;\n  margin-bottom: 0 !important;\n  margin-left: 5px !important; }\n.ng-untouched.ng-invalid {\n  border-color: #EAEAEA; }\n.opti_signin-logo {\n  padding: 20px 20px 0 20px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, httpClientSer, toastr) {
        this.auth = auth;
        this.router = router;
        this.httpClientSer = httpClientSer;
        this.toastr = toastr;
        this.disableLoginBtn = true;
        this.psURL = '';
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]();
        this.defaultCompnyComboValue = [{ OPTM_COMPID: "Select Company" }];
        this.listItems = this.defaultCompnyComboValue;
        this.defaultWhseComboValue = [{ OPTM_WHSE: "Select Warehouse" }];
        this.whseListItems = this.defaultWhseComboValue;
        this.hasCompaneyData = false;
        this.hasWhseData = false;
        this.userName = "";
        this.companyName = "";
        this.warehouseName = "";
        this.invalidCredentials = false;
        this.InvalidActiveUser = false;
        this.passwordBlank = false;
        this.showLoader = false;
        //public loginBackground = this.baseClassObj.get_current_url()+ "/assets/images/signup/nouse/shutter/body-bg-new-1.jpg";
        this.loginBackground = "./assets/images/signup/nouse/shutter/body-bg-new-1.jpg";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('loggedInUser') != null || window.localStorage.getItem('loggedInUser') != undefined) {
            this.router.navigateByUrl('/moveorder');
        }
        this.listItems = this.defaultCompnyComboValue;
        this.selectedValue = this.listItems[0];
        this.whseListItems = this.defaultWhseComboValue;
        this.selectedWhseValue = this.whseListItems[0];
        alert("ngoninit");
        var element = document.getElementsByTagName("body")[0];
        element.className = "";
        element.classList.add("opti_body-login");
        element.classList.add("opti_account-module");
        //this.toastr.warning('',this.baseClassObj.get_current_url() +'/assets/configuration.json',this.baseClassObj.messageConfig);
        //This will get all config
        alert("ngoninit config.json subs get data");
        this.httpClientSer.get('./assets/configuration.json').subscribe(function (data) {
            _this.arrConfigData = data;
            window.localStorage.setItem('arrConfigData', JSON.stringify(_this.arrConfigData[0]));
            alert("call to get ps url");
            //This will get the psURL
            _this.auth.getPSURL(_this.baseClassObj.adminDBName, _this.arrConfigData[0].optiProMoveOrderAPIURL).subscribe(function (data) {
                alert("getPSURL data:" + data);
                if (data != null) {
                    _this.psURL = data;
                    //For code analysis remove in live enviorments.
                    //this.psURL = "http://localhost:9500/";
                    //this.psURL = "http://172.16.6.140/OptiAdmin";
                }
            }, function (error) {
                alert("getPSURL error:" + error);
                _this.toastr.error('', 'There was some error', _this.baseClassObj.messageConfig);
                _this.showLoader = false;
            });
        }, function (err) {
            alert("getPSURL httperrorsection");
            console.log(err.message);
        });
    };
    LoginComponent.prototype.onKeyUp = function () {
        if (this.loginId == "" || this.password == "") {
            this.invalidCredentials = false;
            this.listItems = this.defaultCompnyComboValue;
            this.selectedValue = this.listItems[0];
            return;
        }
    };
    //On Password blur the authentication will be checked
    LoginComponent.prototype.onPasswordBlur = function () {
        var _this = this;
        this.showLoader = true;
        if (this.loginId == "" || this.password == "") {
            this.invalidCredentials = false;
            this.passwordBlank = true;
            this.hasCompaneyData = false;
            this.hasWhseData = false;
            this.listItems = this.defaultCompnyComboValue;
            this.selectedValue = this.listItems[0];
            //this.companyName = this.listItems[0];
            this.selectedWhseValue = this.whseListItems[0];
            this.showLoader = false;
            return;
        }
        else {
            if (this.password != undefined || this.password != null) {
                // Check users authontication 
                this.auth.login(this.loginId, this.password, this.psURL).subscribe(function (data) {
                    _this.modelSource = data;
                    if (_this.modelSource != null && _this.modelSource.Table.length > 0 && _this.modelSource.Table[0].OPTM_ACTIVE == 1) {
                        _this.showLoader = false;
                        //If everything is ok then we will navigate the user to main home page
                        //this.router.navigateByUrl('/moveorder');
                        _this.getCompanies();
                    }
                    else {
                        if (_this.password != null || _this.password != undefined) {
                            _this.hasCompaneyData = false;
                            _this.hasWhseData = false;
                            _this.disableLoginBtn = true;
                            _this.invalidCredentials = true;
                            _this.passwordBlank = false;
                            _this.InvalidActiveUser = false;
                            _this.listItems = _this.defaultCompnyComboValue;
                            _this.selectedValue = _this.listItems[0];
                            //this.companyName = this.listItems[0];
                            _this.whseListItems = _this.defaultWhseComboValue;
                            _this.selectedWhseValue = _this.whseListItems[0];
                        }
                    }
                    _this.showLoader = false;
                }, function (error) {
                    _this.toastr.error('', 'There was some error', _this.baseClassObj.messageConfig);
                    console.log("getpsURL -->" + error.toString());
                    _this.showLoader = false;
                });
            }
            else {
                this.showLoader = false;
            }
        }
    };
    // On Login button clicked
    LoginComponent.prototype.onLoginClick = function () {
        alert("login click");
        this.showLoader = true;
        if (this.disableLoginBtn == false) {
            //For License Checking
            //Commented by ashish temperary
            // this.GetLicenseData();
            window.localStorage.setItem('selectedComp', this.selectedValue.OPTM_COMPID);
            window.localStorage.setItem('loggedInUser', this.loginId);
            window.localStorage.setItem('selectedWhse', this.warehouseName);
            window.localStorage.setItem('GUID', this.GUID);
            this.router.navigateByUrl('/moveorder');
        }
        else {
            alert("Select company first");
        }
        this.showLoader = false;
    };
    //On Comapany selection the selected comp will be set into session
    LoginComponent.prototype.onCompanyChange = function (event) {
        this.userName = this.loginId;
        this.companyName = event.OPTM_COMPID;
        if (this.companyName != null || this.companyName != undefined) {
            this.getWarehouse(this.companyName);
        }
    };
    LoginComponent.prototype.onWarehouseChange = function (event) {
        this.warehouseName = event.OPTM_WHSE;
    };
    //Core Functions
    LoginComponent.prototype.getCompanies = function () {
        var _this = this;
        this.showLoader = true;
        this.auth.getCompany(this.loginId, this.psURL).subscribe(function (data) {
            alert("getcompany data:" + data);
            _this.modelSource = data;
            if (_this.modelSource != undefined
                && _this.modelSource != null
                && _this.modelSource.Table.length > 0) {
                //Show the Company Combo box
                _this.listItems = data.Table;
                console.log("data", _this.listItems);
                _this.selectedValue = _this.listItems[0];
                //this.companyName = this.listItems[0];
                _this.disableLoginBtn = false;
                _this.hasCompaneyData = true;
                _this.invalidCredentials = false;
                _this.InvalidActiveUser = false;
                //When the first item sets in the drop down then will get its warehouse
                _this.getWarehouse(_this.selectedValue.OPTM_COMPID);
                _this.showLoader = false;
            }
            else {
                _this.disableLoginBtn = true;
                _this.hasCompaneyData = false;
                _this.listItems = _this.defaultCompnyComboValue;
                _this.selectedValue = _this.listItems[0];
                _this.InvalidActiveUser = true;
                _this.showLoader = false;
            }
        });
    };
    //This Funciton will get all the whse of this company
    LoginComponent.prototype.getWarehouse = function (companyName) {
        var _this = this;
        this.showLoader = true;
        this.auth.getWarehouse(this.loginId, companyName, this.psURL).subscribe(function (data) {
            alert("getwhse data:" + data);
            if (data != null || data != undefined) {
                _this.whseListItems = data.Table;
                _this.hasWhseData = true;
                _this.selectedWhseValue = _this.whseListItems[0];
                _this.warehouseName = _this.selectedWhseValue.OPTM_WHSE;
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    LoginComponent.prototype.GetLicenseData = function () {
        var _this = this;
        this.auth.getLicenseData(this.loginId, this.arrConfigData[0].optiProMoveOrderAPIURL, this.companyName).subscribe(function (data) {
            alert("getlicence data:" + data);
            if (data != null || data != undefined) {
                if (data.LICData.length > 0) {
                    if (data.LICData[0].ErrMessage == "" || data.LICData[0].ErrMessage == null) {
                        window.localStorage.removeItem("GUID");
                        window.localStorage.removeItem("loggedInUser");
                        //if all set to go then we will set credentials in session
                        _this.GUID = data.LICData[0].GUID;
                        window.localStorage.setItem('selectedComp', _this.selectedValue.OPTM_COMPID);
                        window.localStorage.setItem('loggedInUser', _this.loginId);
                        window.localStorage.setItem('selectedWhse', _this.warehouseName);
                        window.localStorage.setItem('GUID', _this.GUID);
                        _this.router.navigateByUrl('/moveorder');
                        _this.showLoader = false;
                    }
                    else {
                        //If error in login then show to user the message
                        alert(data.LICData[0].ErrMessage);
                        _this.showLoader = false;
                    }
                }
                else {
                    _this.showLoader = false;
                }
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lookup/lookup.component.html":
/*!**********************************************!*\
  !*** ./src/app/lookup/lookup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n<!-- loader end -->\r\n<kendo-grid [ngStyle]=\"setStyles()\"\r\n            [kendoGridBinding]=\"dataBind\"\r\n            [scrollable]=\"'scrollable'\"\r\n            [height]=\"height\"\r\n            [selectable]=\"true\"\r\n            [sortable]=\"{ mode: 'multiple' }\"\r\n            [resizable]=\"false\" \r\n            [pageSize]=\"10000\" \r\n            [pageable]=\"true\" \r\n            [filterable]=\"false\"\r\n            [groupable]=\"false\"\r\n            [selectable]=\"true\"           \r\n              >   \r\n\r\n\r\n            <!-- grid template start -->\r\n                <!-- <ng-template kendoGridToolbarTemplate>\r\n                    <div class=\"float-right opti_right-top-sec-grid\">\r\n                        <form class=\"k-form opti_common-search-form float-left opti_padding-zero\">\r\n                            <label class=\"k-form-field opti_common-search-label\">\r\n                                <input type=\"text\" class=\"k-textbox\" name=\"searchRequest\" />\r\n                                <span class=\"opti_vertical-align opti_mouse-pointer\"><img src=\"assets/images/common/search-black.svg\" class=\"\" alt=\"Search\" width=\"15\" /></span>\r\n                            </label>\r\n                        </form>\r\n                    </div>\r\n                </ng-template> -->\r\n            <!-- grid template start -->\r\n\r\n    <kendo-grid-column *ngFor=\"let col of columns;let i=index\" class=\"opti_{{col.Name}}\" field=\"{{col.Name}}\" title=\"{{col.Name}}\"\r\n                       [sortable]=\"col.CanSort\"\r\n                       [hidden]=\"col.Hidden\"\r\n                       [width]=\"100\"> \r\n                       \r\n\r\n        <ng-template  kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div  (click)=\"onRowClick($event, rowIndex)\" class=\"gridCell\">  \r\n                {{dataItem[col.Name]}}\r\n            </div>\r\n            <!-- <button  (click)=\"onRowBtnClick($event, rowIndex)\" class=\"gridCell\">  \r\n                Select                \r\n            </button> -->\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\t\r\n\t</kendo-grid>"

/***/ }),

/***/ "./src/app/lookup/lookup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lookup/lookup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lookup/lookup.component.ts":
/*!********************************************!*\
  !*** ./src/app/lookup/lookup.component.ts ***!
  \********************************************/
/*! exports provided: LookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupComponent", function() { return LookupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LookupComponent = /** @class */ (function () {
    function LookupComponent(commonService) {
        this.commonService = commonService;
        this.height = 400;
        this.columnToShow = [];
        this.width = 100;
        this.parent = "";
        this.sWorkOrderLookupColumns = ["WorkOrder No", "Product Id", "Start Date", "End Date"];
        this.sOperationLookupColumns = ["Operation No", "Operation Desc", "Balance Quantity"];
        this.dataBind = [];
        this.columns = [];
        this.showLoader = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkboxOnly = false;
    }
    LookupComponent.prototype.ngOnInit = function () {
        //show loader
        this.showLoader = true;
        this.dataBind = [];
        if (this.parent == 'opr') {
            this.dataBind = JSON.stringify(this.fillLookupArray, this.sOperationLookupColumns);
        }
        else if (this.parent == 'wo') {
            this.dataBind = JSON.stringify(this.fillLookupArray, this.sWorkOrderLookupColumns);
        }
        this.dataBind = JSON.parse(this.dataBind);
        //JSON.stringify(this.fillLookupArray,"WorkOrderNo")  
        this.SetDataSource();
        this.showLoader = false;
    };
    LookupComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.fillLookupArray != null && changes.fillLookupArray.currentValue != null) {
        //     this.SetDataSource();
        // }
    };
    LookupComponent.prototype.SetDataSource = function () {
        if (this.dataBind != null) {
            this.SetColumns();
        }
    };
    LookupComponent.prototype.SetColumns = function () {
        this.columns = [];
        if (this.dataBind != null) {
            var row = this.dataBind[0];
            this.columns = this.GetColumns(row);
        }
        //hide loader
        this.showLoader = false;
    };
    LookupComponent.prototype.GetColumns = function (obj) {
        var properties = [];
        if (obj != null && typeof obj == "object") {
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    if (property != '$type') {
                        var item = {};
                        item.Name = property;
                        item.DisplayFormat = null;
                        item.CanSort = true;
                        item.CanFilter = true;
                        item.DataType = 'String';
                        // if (this.columnToShow == undefined || this.columnToShow == null || this.columnToShow.length < 1) {
                        //     item.Hidden = false;
                        // }
                        // else {
                        //     if (this.columnToShow.indexOf(property) > -1) {
                        //         item.Hidden = false;
                        //     }
                        //     else {
                        //         item.Hidden = true;
                        //     }
                        // }
                        properties.push(item);
                    }
                }
            }
        }
        if (properties != null)
            properties.sort();
        return properties;
    };
    LookupComponent.prototype.setStyles = function () {
        var styles = {
            'height': (this.height - 45) + 'px'
        };
        return styles;
    };
    //Double click will handle the lookup values back to the move order component
    LookupComponent.prototype.onRowClick = function (evt, rowIndex) {
        //this.messageEvent.emit(this.fillLookupArray[rowIndex]);
        this.commonService.ShareData(this.fillLookupArray[rowIndex]);
        console.log("Value-", this.fillLookupArray[rowIndex]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LookupComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LookupComponent.prototype, "fillLookupArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LookupComponent.prototype, "columnToShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LookupComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LookupComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LookupComponent.prototype, "messageEvent", void 0);
    LookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lookup',
            template: __webpack_require__(/*! ./lookup.component.html */ "./src/app/lookup/lookup.component.html"),
            styles: [__webpack_require__(/*! ./lookup.component.scss */ "./src/app/lookup/lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], LookupComponent);
    return LookupComponent;
}());



/***/ }),

/***/ "./src/app/move-order/move-order.component.html":
/*!******************************************************!*\
  !*** ./src/app/move-order/move-order.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\r\n\r\n<div id=\"opti_WrapperID\">\r\n    <div id=\"opti_MoveOrderID\">\r\n        <section id=\"opti_MainContentID\" class=\"opti_account-submodule-wrapper opti_position-relative\">\r\n            <!-- banner section -->\r\n            <div class=\"float-left opti_account-banner-section\">\r\n                    <img class=\"opti_mo_login-banner\" [src] = \"loginBackground\">\r\n            </div>\r\n\r\n            <!-- form section -->\r\n            <div class=\"float-right opti_account-form-section\">\r\n                <div class=\"opti_outer-moveorder-form opti_account-submodule-container\"> \r\n                    <div class=\"opti_vertcal-align-outer-box\">\r\n                        <div class=\"panel-body opti_position-relative\" [perfectScrollbar]=\"\">\r\n\r\n                            <!-- loader start -->\r\n                            <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n                                <div class=\"opti_spinner\"></div>\r\n                            </div>\r\n                            <!-- loader end -->\r\n\r\n\r\n                            <form class=\"k-form\">\r\n                                <div class=\"text-center\">\r\n                                    <h5>Move Order </h5>\r\n                                </div>\r\n\r\n                                <label class=\"k-form-field\">\r\n                                    <span class=\"opti_form-label\"><span class=\"opti_mouse-pointer opti_primary-color\" (click)=\"onWorkOrderDetail(true,WorkOrderImageStatus)\">Work Order *</span> <span *ngIf=\"InvalidWorkOrder\"  class=\"float-right opti_error-msg\"> Invalid workorder number </span></span>\r\n                                    <span class=\"float-left opti_work-order\">\r\n                                        <input type=\"text\" id=\"psWONOid\"  (blur)=\"onWorkOrderBlur()\" required #WorkOrderBlank name=\"psWONO\" requir class=\"k-textbox\" [(ngModel)]=\"psWONO\" (change)=\"onWorkOrderChange()\">\r\n                                     \r\n                            \r\n                                    </span> \r\n                                    <span class=\"opti_workorder-icon\">\r\n                                        <img src=\"assets/images/common/list.svg\" title=\"Work Order's\" class=\"opti_mouse-pointer\" (click)=\"onWOPress(true)\" alt=\"work order\" width=\"27px\" height=\"27px\" />\r\n                                        <img src=\"assets/images/common/scanner.svg\" title=\"scan\" id=\"workOrderScan\" class=\"opti_mouse-pointer\" width=\"27px\" height=\"27px\" />\r\n                                    </span>\r\n                                  \r\n                                </label>\r\n                                \r\n                               \r\n                                <label class=\"k-form-field\">\r\n                                    <span class=\"opti_form-label\">Product Code</span>\r\n                                    <input type=\"text\" class=\"k-textbox\" id=\"txtProductCode\" [value]=\"psProductCode\" [disabled]=true>\r\n                                    \r\n                                </label>\r\n\r\n                                <label class=\"k-form-field\">\r\n                                    <span class=\"opti_form-label\">Product Description</span>\r\n                                    <input type=\"text\" class=\"k-textbox\" id=\"txtProductDesc\" [value]=\"psProductDesc\" [disabled]=true>\r\n                                </label>\r\n\r\n                                <label class=\"k-form-field\">\r\n                                    <span class=\"opti_form-label\"><span class=\"opti_mouse-pointer opti_primary-color\" (click)=\"onOperDtlPress(true,OperationDetailImageStatus)\">Operation Number *</span> <span *ngIf=\"InvalidOperation\"  class=\"float-right opti_error-msg\"> Invalid operation number</span>\r\n                                    <span *ngIf=\"NoOperAvailable\"  class=\"float-right opti_error-msg\"> No operations available </span>\r\n                                </span>\r\n                                    <span class=\"float-left opti_operation\">\r\n                                        <input type=\"text\" class=\"k-textbox\" [(ngModel)]=\"psOperNO\" id=\"psOperNOid\" name=\"psOperNO\" (blur)=\"onOperationNoBlur()\" [disabled]=DisableEnablOperation>\r\n                                    </span>\r\n                                    <span class=\"opti_operation-icon\">\r\n                                        <img src=\"assets/images/common/list.svg\" title=\"Operation's\" class=\"opti_mouse-pointer\" (click)=\"onOperationPress(true,GetOperationImageStatus)\" alt=\"work order\" width=\"27px\" height=\"27px\"  />\r\n                                        <!-- <img src=\"assets/images/common/detail.svg\" title=\"Operation Detail\" class=\"opti_mouse-pointer\" (click)=\"onOperDtlPress(true,OperationDetailImageStatus)\" alt=\"work order setaiol\" width=\"27px\" height=\"27px\" style=\"margin-right: 5px;\"/> -->\r\n                                        <img src=\"assets/images/common/scanner.svg\" title=\"Scan\" id=\"operationNumberScan\" class=\"opti_mouse-pointer\" width=\"27px\" height=\"27px\" />\r\n                                    </span>\r\n                                </label>\r\n                                \r\n                            \r\n                                <label class=\"k-form-field\">\r\n                                    <span class=\"opti_form-label\">Qty Produced *</span>\r\n                                    <span class=\"float-left opti_qty-produced\">\r\n                                        <input type=\"text\" style=\"text-align: right;\"  class=\"k-textbox\" id=\"QtyProducedID\" name = \"QtyProducedName\" [(ngModel)]=\"iProducedQty\" [disabled]=DisableEnablQuantity (blur)=\"onProducedQtyBlur()\">\r\n                                    </span>\r\n                                    <span class=\"opti_qty-operation-icon\">\r\n                                        <img src=\"assets/images/common/list.svg\" title=\"Quantity\" class=\"opti_mouse-pointer\" (click)=\"onQtyProdBtnPress(QuantityImageStatus)\" alt=\"Quantity\" width=\"27px\" height=\"27px\" />\r\n                                    </span>\r\n                                </label>\r\n\r\n                                <label class=\"k-form-field opti_date-start-end\">\r\n                                        <span class=\"opti_form-label\">Start Date Time * </span>\r\n                                        <input [owlDateTimeTrigger]=\"dt12\" [owlDateTime]=\"dt12\"\r\n                                            [(ngModel)]=\"FrmToDateTime\"\r\n                                            [selectMode]=\"'rangeFrom'\" name=\"selectedMoments\" type=\"text\" class=\"k-textbox\" [(ngModel)]=\"startDateTime\" >\r\n                                        <owl-date-time #dt12></owl-date-time>\r\n\r\n                                        <!-- <span class=\"float-left opti_date\">\r\n                                            <input [owlDateTimeTrigger]=\"dt12\" placeholder=\"StartDate\" [owlDateTime]=\"dt12\"\r\n                                            [selectMode]=\"'rangeFrom'\" name=\"selectedMoments\" type=\"text\" class=\"k-textbox\"  [(ngModel)]=\"FrmToDateTime\" [max]=\"maxDateRestriction\" readonly />\r\n                                            <span *ngIf=\"invalidStartDate\" class=\"float-right opti_error-msg\"> Select Start Date </span>\r\n                                            <owl-date-time #dt12></owl-date-time>\r\n                                        </span> -->\r\n\r\n                                        <!-- <span class=\"opti_date-icon float-right\">\r\n                                            <img src=\"assets/images/common/start-date.svg\" title=\"Start Date\" class=\"opti_mouse-pointer\" alt=\"Quantity\" width=\"24px\" height=\"27px\" (click)=\"setCurrentServerDate('startDate')\"/>\r\n                                        </span> -->\r\n\r\n                                </label>\r\n                                \r\n\r\n                                <label class=\"k-form-field opti_date-start-end\">\r\n                                        <span class=\"opti_form-label\">End Date Time * </span>\r\n                                        <input [owlDateTimeTrigger]=\"dt13\" [owlDateTime]=\"dt13\"\r\n                                            [(ngModel)]=\"FrmToDateTime\"\r\n                                            [selectMode]=\"'rangeTo'\" name=\"selectedMoments\" type=\"text\" class=\"k-textbox\" [(ngModel)]=\"endDateTime\">\r\n                                        <owl-date-time #dt13></owl-date-time> \r\n\r\n                                        <!-- <span class=\"float-left opti_date\">\r\n                                            <input [owlDateTimeTrigger]=\"dt13\" placeholder=\"End Date\" [owlDateTime]=\"dt13\"\r\n                                            [selectMode]=\"'rangeTo'\" name=\"selectedMoments\" type=\"text\" class=\"k-textbox\" [(ngModel)]=\"FrmToDateTime\" [max]=\"maxDateRestriction\" readonly />\r\n                                            <span *ngIf=\"invalidEndDate\" class=\"float-right opti_error-msg\"> Select End Date </span>\r\n                                            <owl-date-time #dt13></owl-date-time>\r\n                                        </span> -->\r\n\r\n                                        <!-- <span class=\"opti_date-icon float-right\">\r\n                                            <img src=\"assets/images/common/end-date.svg\" title=\"End Date\" class=\"opti_mouse-pointer\" alt=\"Quantity\" width=\"24px\" height=\"27px\" (click)=\"setCurrentServerDate('endDate')\"/>\r\n                                        </span> -->\r\n                                        \r\n                                </label>\r\n                                \r\n\r\n                                <button align=\"center\" type=\"button\" align=\"middle\" class=\"opti_full-width opti_margin-zero opti_fullwidth\" (click)=\"onSubmitPress()\">Submit</button>\r\n                            </form>\r\n                        </div>    \r\n                    </div>    \r\n                </div>\r\n            </div>\r\n\r\n            <!-- right sidebar section -->\r\n            <div #optirightfixedsection id=\"opti_rightfixedsectionID\" class=\"opti_right-fix-section opti_position-relative\" [perfectScrollbar]=\"\" [ngStyle]=\"{'display':isFixedRightSection == true ? 'block' : 'none' }\">\r\n                <div class=\"container-fluid\"> \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <img *ngIf=\"!isQuantityRightSection\" src=\"assets/images/common/back-opposite.svg\" (click)=\"closeRightSection(false)\" class=\"opti_mouse-pointer float-right opti_vertical-align opti_close-icon-right-section\" width=\"20px\" height=\"20px\" />\r\n                            \r\n                            <!-- Quantity Screen start -->\r\n                            <div id=\"opti_QuantityRightSection\" [ngStyle]=\"{'display':isQuantityRightSection == true ? 'block' : 'none' }\">\r\n                                <h5 class=\"modal-title center-block\">{{ScreenName}}</h5>\r\n                                <app-qty-without-fgscan (messageEvent)=\"recieveChildSAPSetFormData($event)\" [basicDetailsFrmMO]=\"basicDetails\" *ngIf=\"showQtyNoScanScreen\"></app-qty-without-fgscan> \r\n                                <app-qty-with-fgscan (messageEvent)=\"recieveChildSAPSetFormData($event)\" [basicDetailsFrmMO]=\"basicDetails\" *ngIf=\"showQtyWithFGScanScreen\"></app-qty-with-fgscan>\r\n                                <app-fgrmscanparent (messageEvent)=\"recieveChildSAPSetFormData($event)\" [basicDetailsFrmMO]=\"basicDetails\" *ngIf=\"showQtyWithFGRMScanScreen\"></app-fgrmscanparent>\r\n                            </div>    \r\n                            <!-- Quantity Screen end -->\r\n\r\n                            <!-- Operation Detail start -->\r\n                            <div id=\"opti_OperationRightSection\" [ngStyle]=\"{'display':isOperationRightSection == true ? 'block' : 'none' }\">\r\n                                <h5>Operation Details</h5>\r\n                                <app-operational-detail [woOperDetail]=\"selectedWOOperDetail\" *ngIf=showOperDtPopup></app-operational-detail>\r\n                            </div>\r\n                            <!-- Operation Detail end -->\r\n\r\n                            <!-- Operation List start -->\r\n                            <div id=\"opti_OperationListRightSection\" [ngStyle]=\"{'display':isOperationListRightSection == true ? 'block' : 'none' }\">\r\n                                <h5>Operation List</h5>\r\n                                <div class=\"\" id=\"opti_OperationListID\" style=\"margin-top: 20px;\">\r\n                                    <div class=\"container-fluid opti_padding-zero\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <!-- paste here shortcode lookup-->\r\n                                                <!-- (messageEvent)=\"receiveLookupRowData($event)\" -->\r\n                                                <!-- <app-operation-lookup  *ngIf=\"showOperLookup\"></app-operation-lookup> -->\r\n                                                <!-- <app-lookup  *ngIf=\"showOperLookup\" [columnToShow] =\"columnsToShow\" [parent]=\"parent\" [fillLookupArray]=\"lookupData\" [height]=\"gridHeight-52\"></app-lookup> -->\r\n                                                <app-operation-lookup  *ngIf=\"showOperLookup\"    [fillLookupArray]=\"oprLookupData\"  [height]=\"gridHeight-52\"></app-operation-lookup>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Operation List end -->\r\n\r\n                            <!-- Work order detail start -->\r\n                            <div id=\"opti_WorkOrderRightSection\" [ngStyle]=\"{'display':isWorkOrderRightSection == true ? 'block' : 'none' }\">\r\n                                <!-- loader start -->\r\n                                <!-- <div class=\"opti_loader\">\r\n                                    <div class=\"opti_spinner\"></div>\r\n                                </div> -->\r\n                                <!-- loader end -->\r\n                                <h5 class=\"\">Work Order Details</h5>\r\n                                <app-work-order-detail [workOrderDetail]=\"selectedWODetail\" *ngIf=\"showWODtPopup\"></app-work-order-detail>\r\n                            </div>\r\n                            <!-- work order detail end -->\r\n\r\n                            <!-- Work order List start -->\r\n                            <div id=\"opti_WorkOrderListRightSection\" [ngStyle]=\"{'display':isWorkOrderListRightSection == true ? 'block' : 'none' }\">\r\n\r\n                                <!-- loader start -->\r\n                                    <!-- <div class=\"opti_loader\">\r\n                                        <div class=\"opti_spinner\"></div>\r\n                                    </div> -->\r\n                                <!-- loader end -->\r\n\r\n                                <h5 class=\"\">Work Order Lookup List</h5>\r\n                                <div class=\"\" id=\"opti_workOrderListID\" style=\"margin-top: 20px;\">\r\n                                    <div class=\"container-fluid opti_padding-zero\">\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <!-- paste here shortcode lookup-->\r\n                                                    <!-- (messageEvent)=\"receiveLookupRowData($event)\" -->\r\n\r\n                                        <app-work-order-lookup  *ngIf=\"showWOLookup\"    [fillLookupArray]=\"WoLookupData\"  [height]=\"gridHeight-52\"></app-work-order-lookup>\r\n                                            <!-- <app-lookup  *ngIf=\"showWOLookup\" [columnToShow] =\"columnsToShow\" [fillLookupArray]=\"lookupData\" [parent]=\"parent\" [height]=\"gridHeight-52\"></app-lookup> -->\r\n                                          \r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- work order List end -->\r\n                        </div>    \r\n                    </div>    \r\n                </div>    \r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/move-order/move-order.component.scss":
/*!******************************************************!*\
  !*** ./src/app/move-order/move-order.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\np {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\na {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\nh1 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 64px;\n  font-weight: 400; }\nh2 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 48px;\n  font-weight: 400; }\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 32px;\n  font-weight: 400; }\nh4 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 24px;\n  font-weight: 400; }\nh5 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\nh6 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n#opti_TopBarID .opti_user-profile img {\n  border: 2px solid #fff; }\n#opti_TopBarID input[type='text'], #opti_TopBarID input[type='email'] {\n  height: 30px;\n  line-height: normal; }\n#opti_TopBarID input[type='text']:focus, #opti_TopBarID input[type='email']:focus {\n  border-color: transparent;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem transparent; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\nbody button {\n  border-radius: 5px;\n  box-shadow: none;\n  border: 1px solid;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 15px;\n  border: none; }\nbody button:focus {\n    outline: none; }\nbody button:first-child {\n  margin: 0 5px 0 0; }\nbody button:last-child {\n  margin: 0 0 0 5px; }\nbody button:hover {\n  opacity: 0.8; }\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align, .opti_vertcal-align-outer-box {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_WrapperID {\n  display: flex;\n  align-items: stretch; }\n#opti_WrapperID #opti_RightPanelID {\n    height: 100vh; }\n#opti_WrapperID #opti_MainContentID {\n    overflow-y: auto; }\n#opti_WrapperID section#opti_TopBarID {\n    min-height: 65px; }\n#opti_WrapperID .opti_right-fix-section {\n    position: fixed;\n    right: 0;\n    background: #fff;\n    width: 45%;\n    height: calc(100% - 65px);\n    top: 65px;\n    max-width: 100%;\n    z-index: 999999;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\nsection#opti_TopBarID {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\nbody kendo-grid {\n  box-shadow: none !important; }\na {\n  color: #333;\n  text-decoration: underline; }\na:hover {\n  color: #333; }\n.opti_vertcal-align-outer-box {\n  height: 100vh; }\n.panel-body {\n  width: 100%;\n  overflow-y: scroll;\n  height: auto;\n  max-height: 100%;\n  background-color: white;\n  box-shadow: 0px 0px 13px 0px #1fa2ff;\n  border-radius: 5px;\n  padding: 0px; }\n.opti_account-submodule-container {\n  width: 370px;\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100%; }\n.opti_vertcal-align-outer-box {\n  height: calc(100vh - 100px); }\n.k-checkbox-label::before {\n  border-color: rgba(255, 255, 255, 0.7); }\nlabel .opti_checkbox-container label, label > label {\n  color: #fff;\n  font-size: 12px; }\nlabel .opti_checkbox-container label a, label > label a {\n    font-size: 12px; }\nlabel .opti_checkbox-container label a:hover, label > label a:hover {\n    text-decoration: underline; }\n.opti_vertcal-align-outer-box {\n  padding: 10px 0;\n  width: 100%; }\n.opti_form-label {\n  font-size: 15px;\n  color: #fff;\n  margin-bottom: 0 !important; }\n.opti_account-form-section {\n  width: 40%;\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%);\n  height: calc(100vh - 100px);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 0px 0px 20px #bababa; }\n.opti_account-banner-section {\n  width: 60%;\n  height: calc(100vh - 100px);\n  background-size: cover;\n  box-shadow: 0px 0px 20px #bababa;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.opti_form-label, .k-checkbox-label {\n  color: #333 !important; }\n.panel-body button.opti_fullwidth {\n  margin-left: 0;\n  text-align: center; }\nbutton {\n  background: linear-gradient(177deg, #483DF6 2%, #435EF8 10%, #1BA0F1 44%, #25DDF5 91%, #45D790 130%); }\n.opti_mo_login-banner {\n  width: 180%;\n  height: 100%;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  float: left; }\nlabel.k-form-field {\n  clear: both; }\n.opti_workorder-icon,\n.opti_operation-icon {\n  width: 55px;\n  float: left; }\n.opti_work-order, .opti_operation {\n  width: calc(100% - 55px); }\n.opti_work-order input, .opti_operation input {\n    width: 100%; }\n.opti_qty-operation-icon {\n  width: 27px;\n  float: left; }\n.opti_qty-produced {\n  width: calc(100% - 27px); }\n.opti_qty-produced input {\n    width: 100%; }\n.opti_right-fix-section {\n  height: calc(100vh - 65px); }\n.opti_vertcal-align-outer-box {\n  display: flex !important; }\n.k-form .k-form-field > span:not(.k-widget) {\n  padding: 0;\n  margin: 0; }\n#opti_WorkOrderListRightSection .opti_loader,\n#opti_WorkOrderRightSection .opti_loader {\n  width: 97%; }\n"

/***/ }),

/***/ "./src/app/move-order/move-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/move-order/move-order.component.ts ***!
  \****************************************************/
/*! exports provided: MoveOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveOrderComponent", function() { return MoveOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_moveorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/moveorder.service */ "./src/app/services/moveorder.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lookup/lookup.component */ "./src/app/lookup/lookup.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
/* harmony import */ var _qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../qty-without-fgscan/qty-without-fgscan.component */ "./src/app/qty-without-fgscan/qty-without-fgscan.component.ts");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//For Ngx Bootstrap






var MoveOrderComponent = /** @class */ (function () {
    function MoveOrderComponent(mo, router, modalService, lookupData, commonService, toastr) {
        this.mo = mo;
        this.router = router;
        this.modalService = modalService;
        this.lookupData = lookupData;
        this.commonService = commonService;
        this.toastr = toastr;
        this.showWOLookup = false;
        this.showOperLookup = false;
        this.psWONO = '';
        this.psOperNO = '';
        this.psOperName = '';
        this.psProductCode = '';
        this.psProductDesc = '';
        this.showWODtPopup = false;
        this.showOperDtPopup = false;
        this.showItemLinkingScreen = false;
        this.ScreenName = '';
        this.settingOnSAP = "";
        this.showQtyWithFGScanScreen = false;
        this.showQtyNoScanScreen = false;
        this.showQtyWithFGRMScanScreen = false;
        this.DisableEnablOperation = true;
        this.DisableEnablQuantity = true;
        //variable for WorkOrder Blank 
        this.bEnabeSaveBtn = false;
        this.basicDetails = [];
        //showLookup: boolean = false;
        this.openedLookup = '';
        this.iProducedQty = 0;
        this.iAcceptedQty = 0;
        this.iRejectedQty = 0;
        this.iNCQty = 0;
        this.iOrderedQty = 0;
        this.FrmToDateTime = [];
        this.invalidStartDate = false;
        this.invalidEndDate = false;
        this.showLoader = false;
        this.maxDateRestriction = new Date();
        this.WorkOrderImageStatus = false;
        this.OperationDetailImageStatus = false;
        this.GetOperationImageStatus = false;
        this.QuantityImageStatus = false;
        this.NoOperAvailable = false;
        this.bAllowToSubmit = true;
        this.isUserIsSubcontracter = "False";
        this.restrictedDate = new Date().getDate();
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_7__["BaseClass"]();
        //public loginBackground = this.baseClassObj.get_current_url() + "/assets/images/signup/nouse/shutter/body-bg-new-1.jpg";
        this.loginBackground = "./assets/images/signup/nouse/shutter/body-bg-new-1.jpg";
        //This array string will show the columns given for lookup , if want to displau all the make this array blank
        this.columnsToShow = [];
        this.sWorkOrderLookupColumns = "WorkOrder No,Product Id,Start Date,End Date";
        this.sOperationLookupColumns = "Operation No,Operation Desc,Balance Quantity";
        this.isWorkOrderRightSection = false;
        this.isOperationRightSection = false;
        this.isQuantityRightSection = false;
        this.isWorkOrderListRightSection = false;
        this.isOperationListRightSection = false;
        this.parent = "wo";
        this.oprLookupData = [];
        this.WoLookupData = [];
    }
    MoveOrderComponent.prototype.onResize = function (event) {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_5__["UIHelper"].getMainContentHeight();
    };
    MoveOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //This will check if login is valid
        this.checkIfLoginIsValid();
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_5__["UIHelper"].getMainContentHeight();
        this.isFixedRightSection = false;
        var element = document.getElementsByTagName("body")[0];
        element.className = "";
        element.classList.add("opti_body-move-order");
        element.classList.add("opti_account-module");
        this.commonService.commonData$.subscribe(function (data) {
            if (data == null || data == undefined) {
                return;
            }
            _this.selectedLookUpData = data.value;
            console.log('opend lookup-', _this.openedLookup);
            //if (this.openedLookup == "WOLookup") {
            if (data.from == "WO") {
                //this.cleanupScreen();
                //here we will clear values
                _this.clearScreenAfterLookup();
                _this.psWONO = _this.selectedLookUpData.U_O_ORDRNO;
                _this.psProductCode = _this.selectedLookUpData.U_O_PRODID;
                _this.psProductDesc = _this.selectedLookUpData.ItemName;
                _this.docEntry = _this.selectedLookUpData.DocEntry;
                _this.iOrderedQty = _this.selectedLookUpData.U_O_ORDRQTY;
                _this.psItemManagedBy = _this.selectedLookUpData.ManagedBy;
                console.log("WO-", _this.psWONO);
                //Validation when we want to Disable the Operation and Quantity if he Workorder is Not Selected 
                if (_this.psWONO != "" || _this.psWONO != null || _this.psWONO != undefined) {
                    //enable  Operation input Box
                    _this.DisableEnablOperation = false;
                    _this.getOperationByWONO();
                    _this.showLoader = false;
                }
                else {
                    //disable the Operation input Box
                    _this.DisableEnablOperation = true;
                }
            }
            //if (this.openedLookup == "OperLookup") {
            if (data.from == "OPER") {
                _this.psOperNO = _this.selectedLookUpData.U_O_OPERNO;
                _this.getSelectedOperationDetail();
                //Validation when we want to Disable the Operation and Quantity if he Workorder is Not Selected 
                if (_this.psOperNO != "" || _this.psOperNO != null || _this.psOperNO != undefined) {
                    //enable  Operation input Box
                    _this.DisableEnablQuantity = false;
                    _this.InvalidOperation = false;
                }
                else {
                    //disable the Operation input Box
                    _this.DisableEnablQuantity = true;
                    _this.InvalidOperation = true;
                }
            }
            //To hide the lookup
            //this.showLookup = false;
            _this.showWOLookup = false;
            _this.showOperLookup = false;
            _this.parent = "";
            //close the right section
            _this.closeRightSection(false);
            //To clear the lookup screen name on close
            _this.openedLookup = '';
            //Clear the data of lookup
            _this.lookupData = null;
            //To clear the columns name 
            _this.columnsToShow = [];
        });
        //get company name from session
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        //get the logged in user name from session
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        //get Whse name from session
        this.warehouseName = window.localStorage.getItem('selectedWhse');
        //Get Settingsfrom DB for Option Screens
        this.getSettingOnSAP();
        //On Form Initialization get All WO
        //this.getAllWorkOrders("init");
        //this.getServerDate();
        this.setDefaultDateTime();
    };
    //This will get all WO
    MoveOrderComponent.prototype.onWOPress = function (status) {
        //this.showQtyNoScanScreen=this.showQtyWithFGScanScreen=this.showQtyWithFGRMScanScreen=false;
        this.showLoader = true;
        this.columnsToShow = this.sWorkOrderLookupColumns.split(",");
        this.openedLookup = "WOLookup";
        this.isWorkOrderListRightSection = status;
        //this.openRightSection(status);
        //this.showLookup = true;
        //this.lookupData = this.allWODetails;
        this.getAllWorkOrders("lookup");
        this.WoLookupData = this.allWODetails;
        this.openRightSection(status);
        this.showOperLookup = false;
        this.showWOLookup = true;
        this.parent = "wo";
    };
    MoveOrderComponent.prototype.onOperationPress = function (status, GetOperationImageStatus) {
        this.openedLookup = "OperLookup";
        //show loader
        this.showLoader = true;
        //this.showQtyNoScanScreen=this.showQtyWithFGScanScreen=this.showQtyWithFGRMScanScreen=false;
        if (this.psWONO == "" || this.psWONO == null || this.psWONO == undefined || this.NoOperAvailable == true) {
            GetOperationImageStatus = false;
        }
        else {
            this.oprLookupData = this.allWOOpDetails;
            GetOperationImageStatus = true;
        }
        if (GetOperationImageStatus == true) {
            this.columnsToShow = this.sOperationLookupColumns.split(",");
            this.isOperationListRightSection = status;
            this.openRightSection(status);
            this.showOperLookup = true;
            this.showWOLookup = false;
            this.parent = "opr";
        }
        //hide loader
        this.showLoader = false;
    };
    //This function will check, if the user entered WO is in the array
    MoveOrderComponent.prototype.onWorkOrderBlur = function () {
        var _this = this;
        var inputValue = document.getElementById('psWONOid').value;
        if (inputValue.length > 0) {
            this.psWONO = inputValue;
        }
        if (this.allWODetails != null &&
            this.allWODetails.length > 0 &&
            this.psWONO.length > 0) {
            this.DisableEnablOperation = false;
            //To check in the array
            var isWOExists = this.allWODetails.some(function (e) { return e.U_O_ORDRNO === _this.psWONO; });
            if (isWOExists == false) {
                this.getAllWorkOrders("change");
                //Message for Invalid WorkOdere
                // this.InvalidWorkOrder = true;
                // this.psWONO = '';
                // this.DisableEnablOperation = true;
            }
            else {
                for (var i = 0; i < this.allWODetails.length; i++) {
                    if (this.allWODetails[i].U_O_ORDRNO == this.psWONO) {
                        this.docEntry = this.allWODetails[i].DocEntry;
                        this.psProductCode = this.allWODetails[i].U_O_PRODID;
                        this.psProductDesc = this.allWODetails[i].ItemName;
                        this.iOrderedQty = this.allWODetails[i].U_O_ORDRQTY;
                        this.psItemManagedBy = this.allWODetails[i].ManagedBy;
                    }
                }
                this.DisableEnablOperation = false;
                //remove the Message if Workorder is not Blank 
                this.InvalidWorkOrder = false;
                this.getOperationByWONO();
            }
        }
        else {
            this.DisableEnablOperation = true;
            this.cleanupScreen();
        }
    };
    //On Work Order Detal Press event
    MoveOrderComponent.prototype.onWorkOrderDetail = function (status, WorkOrderImageStatus) {
        if (this.psWONO == "" || this.psWONO == null || this.psWONO == undefined) {
            WorkOrderImageStatus = false;
        }
        else {
            WorkOrderImageStatus = true;
        }
        if (WorkOrderImageStatus == true) {
            this.showWODtPopup = true;
            this.isWorkOrderRightSection = status;
            this.openRightSection(status);
            this.selectedWODetail = this.filterWODetail(this.allWODetails, this.docEntry);
        }
    };
    //On Operation Detal Press event
    MoveOrderComponent.prototype.onOperDtlPress = function (status, OperationDetailImageStatus) {
        if (this.psOperNO == "" || this.psOperNO == null || this.psOperNO == undefined) {
            OperationDetailImageStatus = false;
        }
        else {
            OperationDetailImageStatus = true;
        }
        if (OperationDetailImageStatus == true) {
            this.isOperationRightSection = status;
            this.openRightSection(status);
            this.getSelectedOperationDetail();
        }
    };
    //If user puts manual entry for operation then this fun will check whether oper is valid
    MoveOrderComponent.prototype.onOperationNoBlur = function () {
        var _this = this;
        var inputValue = document.getElementById('psOperNOid').value;
        if (inputValue.length > 0) {
            this.psOperNO = Number(inputValue);
        }
        if (this.allWOOpDetails != null && this.allWOOpDetails.length > 0) {
            //Enable the Produced Quantity Input 
            this.DisableEnablQuantity = false;
            //To check in the array
            var isWOOperExists = this.allWOOpDetails.some(function (e) { return e.U_O_OPERNO == _this.psOperNO; });
            if (isWOOperExists == false) {
                //message for invalid Operation
                this.InvalidOperation = true;
                this.psOperNO = '';
                //disable the Produced Quantity Field
                this.DisableEnablQuantity = true;
            }
            else {
                //Enable the Produced Quantity 
                this.DisableEnablQuantity = false;
                //message for invalid operation 
                this.InvalidOperation = false;
                this.getSelectedOperationDetail();
            }
        }
        else {
            //Disable the Produced Quantity 
            this.DisableEnablQuantity = true;
        }
    };
    MoveOrderComponent.prototype.onQtyProdBtnPress = function (status) {
        if (this.psItemManagedBy == "None") {
            this.toastr.error('', "Not allowed to add/modify attached items for none tracked finished goods", this.baseClassObj.messageConfig);
            return;
        }
        if (this.psWONO == "" || this.psWONO == null || this.psWONO == undefined || this.psOperNO == "" || this.psOperNO == undefined || this.psOperNO == null) {
            status = false;
        }
        else {
            status = true;
        }
        if (status == true) {
            this.openRightSection(status);
            this.isQuantityRightSection = status;
            document.getElementById('opti_QuantityRightSection').style.display = 'block';
            this.basicDetails = [];
            //Setting basic details to share on another screen
            this.basicDetails.push({ 'WorkOrderNo': this.psWONO, 'OperNo': this.psOperNO, 'ItemCode': this.psProductCode, 'ManagedBy': this.psItemManagedBy, 'BalQty': this.iBalQty, 'ProducedQty': this.iProducedQty });
            //This will open itel linking screen      
            this.openItemLinkingScreen();
        }
    };
    //Final submission for Move Order will be done by this function
    MoveOrderComponent.prototype.onSubmitPress = function () {
        //show Loader
        this.showLoader = true;
        if (this.checkMandatoryInpts() == true) {
            if ((this.settingOnSAP == "2" || this.settingOnSAP == "3") && this.psItemManagedBy != "None") {
                //First we will chk whether the user have linked FG serials/batch for option 2 screen
                this.GetBatchSerialLinking();
            }
            else {
                this.getServerDate(false);
                //submission service callled
                //this.submitMoveOrder(false);
            }
        }
        else {
            this.showLoader = false;
        }
    };
    //This will recive data from lookup
    MoveOrderComponent.prototype.receiveLookupRowData = function ($event) {
        if (this.openedLookup == "WOLookup") {
            //this.cleanupScreen();
            //here we will clear values
            this.clearScreenAfterLookup();
            this.psWONO = $event.U_O_ORDRNO;
            this.psProductCode = $event.U_O_PRODID;
            this.psProductDesc = $event.ItemName;
            this.docEntry = $event.DocEntry;
            this.iOrderedQty = $event.U_O_ORDRQTY;
            this.psItemManagedBy = $event.ManagedBy;
            //Validation when we want to Disable the Operation and Quantity if he Workorder is Not Selected 
            if (this.psWONO != "" || this.psWONO != null || this.psWONO != undefined) {
                //enable  Operation input Box
                this.DisableEnablOperation = false;
                this.getOperationByWONO();
            }
            else {
                //disable the Operation input Box
                this.DisableEnablOperation = true;
            }
        }
        if (this.openedLookup == "OperLookup") {
            //this.psOperNO = $event.U_O_OPERNO;
            this.getSelectedOperationDetail();
            //Validation when we want to Disable the Operation and Quantity if he Workorder is Not Selected 
            if (this.psOperNO != "" || this.psOperNO != null || this.psOperNO != undefined) {
                //enable  Operation input Box
                this.DisableEnablQuantity = false;
                this.InvalidOperation = false;
            }
            else {
                //disable the Operation input Box
                this.DisableEnablQuantity = true;
                this.InvalidOperation = true;
            }
        }
        //To hide the lookup
        //this.showLookup = false;
        this.showWOLookup = false;
        this.showOperLookup = false;
        this.parent = "";
        //close the right section
        this.closeRightSection(false);
        //To clear the lookup screen name on close
        this.openedLookup = '';
        //Clear the data of lookup
        this.lookupData = null;
        //To clear the columns name 
        this.columnsToShow = [];
    };
    //This emitter event will send the data back to the main form
    MoveOrderComponent.prototype.recieveChildSAPSetFormData = function ($event) {
        console.log("FROM CHILD SCREENSSSS--->");
        console.log($event);
        if (this.settingOnSAP == "1") {
            this.iAcceptedQty = $event.AcceptedQty;
            this.iRejectedQty = $event.RejectedQty;
            this.iNCQty = $event.NCQty;
        }
        if (this.settingOnSAP == "2") {
            this.iAcceptedQty = $event.AcceptedQty;
            this.iRejectedQty = $event.RejectedQty;
            this.iNCQty = $event.NCQty;
            this.iProducedQty = $event.ProducedQty;
            this.showQtyWithFGScanScreen = false;
        }
        if (this.settingOnSAP == "3") {
            this.iAcceptedQty = $event.AcceptedQty;
            this.iRejectedQty = $event.RejectedQty;
            this.iNCQty = $event.NCQty;
            this.iProducedQty = $event.ProducedQty;
            this.showQtyWithFGRMScanScreen = false;
        }
    };
    //on ProdQty Blur
    MoveOrderComponent.prototype.onProducedQtyBlur = function () {
        if (this.iProducedQty != null) {
            if (this.iProducedQty > this.iBalQty) {
                alert("Produced Qty should not be greater than balance qty");
                this.iProducedQty = 0;
            }
            else {
                this.iAcceptedQty = this.iProducedQty;
                this.iNCQty = 0;
                this.iRejectedQty = 0;
            }
        }
    };
    //Core Functions
    //This will filter for filter WO
    MoveOrderComponent.prototype.filterWODetail = function (data, docEntry) {
        return data.filter(function (e) { return e.DocEntry == docEntry; });
    };
    //This will filter Oper No
    MoveOrderComponent.prototype.filterOperDetail = function (data, operNo, docEntry) {
        return data.filter(function (e) { return e.U_O_OPERNO == operNo && e.DocEntry == docEntry; });
    };
    //This fun will get all WO
    MoveOrderComponent.prototype.getAllWorkOrders = function (fromEvent) {
        var _this = this;
        //Show Loader
        this.showLoader = true;
        this.mo.getAllWorkOrders(this.CompanyDBId, this.warehouseName).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].ErrMessage != undefined) {
                        _this.toastr.error('', "Session expired", _this.baseClassObj.messageConfig);
                        sessionStorage.clear();
                        window.localStorage.clear();
                        _this.router.navigateByUrl('/login');
                        return;
                    }
                    _this.allWODetails = data;
                    if (_this.allWODetails.length > 0) {
                        _this.lookupData = _this.allWODetails;
                        _this.WoLookupData = _this.allWODetails;
                        //JSON
                        if (fromEvent == "change") {
                            var isWOExists = _this.allWODetails.some(function (e) { return e.U_O_ORDRNO === _this.psWONO; });
                            if (isWOExists == false) {
                                //Message for Invalid WorkOdere
                                _this.InvalidWorkOrder = true;
                                _this.psWONO = '';
                                _this.DisableEnablOperation = true;
                            }
                            else {
                                _this.lookupData = _this.allWODetails;
                                _this.WoLookupData = _this.allWODetails;
                                for (var i = 0; i < _this.allWODetails.length; i++) {
                                    if (_this.allWODetails[i].U_O_ORDRNO == _this.psWONO) {
                                        _this.docEntry = _this.allWODetails[i].DocEntry;
                                        _this.psProductCode = _this.allWODetails[i].U_O_PRODID;
                                        _this.psProductDesc = _this.allWODetails[i].ItemName;
                                        _this.iOrderedQty = _this.allWODetails[i].U_O_ORDRQTY;
                                        _this.psItemManagedBy = _this.allWODetails[i].ManagedBy;
                                    }
                                }
                                _this.DisableEnablOperation = false;
                                //remove the Message if Workorder is not Blank 
                                _this.InvalidWorkOrder = false;
                                _this.getOperationByWONO();
                            }
                        }
                        else {
                            _this.InvalidWorkOrder = false;
                            _this.showLoader = false;
                        }
                        _this.showLoader = false;
                    }
                }
                else {
                    _this.allWODetails = data;
                    _this.showLoader = false;
                }
            }
            else {
                //Hide Loader
                _this.showLoader = false;
            }
        });
    };
    //get Operations by work order no.
    MoveOrderComponent.prototype.getOperationByWONO = function () {
        var _this = this;
        //show Loader
        this.showLoader = true;
        if (this.psWONO != null || this.psWONO != undefined) {
            this.mo.getOperationByWorkOrder(this.CompanyDBId, this.docEntry, this.psWONO).subscribe(function (data) {
                if (data != null && data.length > 0) {
                    _this.NoOperAvailable = false;
                    _this.GetOperationImageStatus = false;
                    _this.DisableEnablOperation = false;
                    _this.allWOOpDetails = data;
                    if (_this.allWOOpDetails.length > 0) {
                        // this.lookupData = this.allWOOpDetails;
                        //this.oprLookupData=this.allWODetails;
                        _this.openedLookup = "OperLookup";
                        // this.showLookup = true;
                    }
                    //hide Loader
                    _this.showLoader = false;
                }
                else {
                    //hide Loader
                    _this.showLoader = false;
                    _this.NoOperAvailable = true;
                    _this.GetOperationImageStatus = true;
                    _this.DisableEnablOperation = true;
                }
            });
        }
    };
    //This will get the selected Operation's
    MoveOrderComponent.prototype.getSelectedOperationDetail = function () {
        var _this = this;
        //show Loader
        this.showLoader = true;
        //here we will need to call a service which will get the Operation Details on the basis of docEntry & OperNo
        this.mo.getOperDetailByDocEntry(this.CompanyDBId, this.docEntry, this.psOperNO).subscribe(function (data) {
            if (data != null) {
                _this.selectedWOOperDetail = data;
                _this.showOperDtPopup = true;
                _this.psToOperation = data[0].NextOperNo;
                _this.psPreOperation = data[0].PrevOperNo;
                switch (_this.isCustomizedFor) {
                    case _this.baseClassObj.ellyza_london:
                        if (_this.isUserIsSubcontracter == "True") {
                            _this.iBalQty = Number(data[0].U_O_BALQTY);
                        }
                        else {
                            _this.iBalQty = Number(data[0].U_O_BALQTY);
                        }
                        break;
                    default:
                        _this.iBalQty = data[0].U_O_BALQTY;
                }
                //By default set into it
                _this.iProducedQty = data[0].U_O_BALQTY;
                _this.iAcceptedQty = data[0].U_O_BALQTY;
                //hide Loader
                _this.showLoader = false;
            }
            else {
                //hide Loader
                _this.showLoader = false;
            }
        });
    };
    MoveOrderComponent.prototype.openRightSection = function (status) {
        this.optirightfixedsection.nativeElement.style.display = 'block'; //content section
        this.isFixedRightSection = status;
    };
    MoveOrderComponent.prototype.closeRightSection = function (status) {
        this.optirightfixedsection.nativeElement.style.display = 'none';
        this.isFixedRightSection = status;
        this.isQuantityRightSection = status;
        this.isOperationRightSection = status;
        this.isWorkOrderRightSection = status;
        this.isWorkOrderListRightSection = status;
        this.isOperationListRightSection = status;
        this.showLoader = false;
    };
    //This function will make the screen reset
    MoveOrderComponent.prototype.cleanupScreen = function () {
        this.psWONO = '';
        this.psItemManagedBy = '';
        this.psOperName = '';
        this.psOperNO = '';
        this.psProductCode = '';
        this.psProductDesc = '';
        this.iAcceptedQty = 0;
        this.iBalQty = 0;
        this.iNCQty = 0;
        this.iOrderedQty = 0;
        this.iProducedQty = 0;
        this.iRejectedQty = 0;
        this.psToOperation = '';
        this.psPreOperation = '';
        //this function will reset the time and date of the server
        //As discussed with vaibhav sir and rohit sir the date will not be of server
        //this.getServerDate();
        this.setDefaultDateTime();
    };
    //This will set the time and date
    MoveOrderComponent.prototype.setDefaultDateTime = function () {
        // if(this.currentServerDateTime != null && this.currentServerDateTime.length > 0){
        //   let currentDateTime = new Date(this.currentServerDateTime);
        //   this.FrmToDateTime = [
        //     new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(),currentDateTime.getDate(), currentDateTime.getHours(), currentDateTime.getMinutes()),
        //     new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(),currentDateTime.getDate(), currentDateTime.getHours(), currentDateTime.getMinutes())
        //   ];
        // }
        var defDateTime = new Date();
        this.FrmToDateTime = [
            new Date(defDateTime.getFullYear(), defDateTime.getMonth(), defDateTime.getDate(), defDateTime.getHours(), defDateTime.getMinutes()),
            new Date(defDateTime.getFullYear(), defDateTime.getMonth(), defDateTime.getDate(), defDateTime.getHours(), defDateTime.getMinutes())
        ];
    };
    //This will get the server date time
    MoveOrderComponent.prototype.getServerDate = function (isForcefullSubmission) {
        var _this = this;
        //here we will need to call a service which will get the Server Date Time
        this.mo.getServerDate(this.CompanyDBId).subscribe(function (data) {
            _this.showLoader = false;
            console.log("Server Date Time", data[0].DATEANDTIME);
            if (_this.FrmToDateTime[1] > new Date(data[0].DATEANDTIME)) {
                _this.toastr.error('', "Operation End time can't be greater than server date & time", _this.baseClassObj.messageConfig);
                return;
            }
            else {
                //If time and date is not greater than server time then will go for submit
                _this.submitMoveOrder(isForcefullSubmission);
            }
            _this.showLoader = false;
            // this.currentServerDateTime = data[0].DATEANDTIME;
            // this.setDefaultDateTime();
        }, function (error) {
            _this.toastr.error('', 'There was some error', _this.baseClassObj.messageConfig);
            _this.showLoader = false;
        });
    };
    //check for the mandatory inputs on submit
    MoveOrderComponent.prototype.checkMandatoryInpts = function () {
        if (this.psWONO == "" || this.psWONO == null || this.psWONO == undefined) {
            this.toastr.error('', "Select workorder number", this.baseClassObj.messageConfig);
            return false;
        }
        if (this.psOperNO == "" || this.psOperNO == null || this.psOperNO == undefined) {
            this.toastr.error('', "Select operation number", this.baseClassObj.messageConfig);
            return false;
        }
        if (this.iProducedQty <= 0) {
            this.toastr.error('', "Produced quantity can't be zero or less than zero", this.baseClassObj.messageConfig);
            return false;
        }
        if (this.FrmToDateTime != null) {
            if (this.FrmToDateTime[0] == "" || this.FrmToDateTime[0] == null || this.FrmToDateTime[0] == undefined) {
                alert("Please enter start date ");
                return false;
            }
            if (this.FrmToDateTime[1] == "" || this.FrmToDateTime[1] == null || this.FrmToDateTime[1] == undefined) {
                alert("Please enter end date ");
                return false;
            }
        }
        else {
            alert("please enter  date");
        }
        return true;
    };
    //This function will read the settings
    MoveOrderComponent.prototype.getSettingOnSAP = function () {
        var _this = this;
        this.showLoader = true;
        //here we will read the settings frm db
        this.mo.getSettingOnSAP(this.CompanyDBId, this.loggedInUser).subscribe(function (data) {
            if (data != null || data != undefined) {
                _this.showLoader = false;
                if (data.CustomizationDetails != undefined) {
                    if (data.CustomizationDetails.length > 0) {
                        _this.isCustEnabled = data.CustomizationDetails[0].CustEnabled;
                        _this.isCustomizedFor = data.CustomizationDetails[0].CustFor;
                        window.localStorage.setItem('isCustEnabled', _this.isCustEnabled);
                    }
                }
                //this.isCustomizedFor = "ellyzaLondon";
                if (data.SettingTable.length > 0) {
                    if (data.SettingTable != undefined) {
                        _this.IsMoveOrderTimeMandatory = data.SettingTable[0].IsMoveOrderTimeMandatory;
                        _this.settingOnSAP = data.SettingTable[0].ScreenSetting;
                    }
                }
                if (data.UserDetails.length > 0) {
                    if (data.UserDetails != undefined) {
                        _this.isUserIsSubcontracter = data.UserDetails[0].isUserIsSubcontracter;
                        window.localStorage.setItem('isUserIsSubcontracter', _this.isUserIsSubcontracter);
                    }
                    _this.showLoader = false;
                }
                //because of async req.
                _this.getAllWorkOrders("init");
            }
            else {
                _this.showLoader = false;
            }
        }, function (error) {
            _this.toastr.error('', 'There was some error', _this.baseClassObj.messageConfig);
            _this.showLoader = false;
        });
    };
    MoveOrderComponent.prototype.submitMoveOrder = function (forcefullySubmission) {
        var _this = this;
        //if To Operation no. is empty then put the same
        if (this.psToOperation == "" || this.psToOperation == undefined) {
            this.psToOperation = this.psOperNO;
        }
        this.mo.submitMoveOrder(this.CompanyDBId, this.docEntry, this.psOperNO, this.psToOperation, this.psWONO, this.psProductCode, this.loggedInUser, this.iAcceptedQty, this.iRejectedQty, this.iNCQty, this.iOrderedQty, this.iProducedQty, this.FrmToDateTime, this.psPreOperation, this.settingOnSAP, this.IsMoveOrderTimeMandatory, this.iBalQty, forcefullySubmission).subscribe(function (data) {
            //Submit Move Order Status
            // if (data.recordSubmitDetails != undefined) {
            if (data.recordSubmitDetails.length > 0) {
                if (data.recordSubmitDetails[0].isRecordSubmitted == "True") {
                    _this.toastr.success('', 'Record submitted sucessfully', _this.baseClassObj.messageConfig);
                    //alert("Record submitted sucessfully");
                    _this.cleanupScreen();
                    //hide Loader
                    _this.showLoader = false;
                }
                else if (data.recordSubmitDetails[0].isRecordSubmitted == "OperOverlapping") {
                    _this.toastr.error('', "Operation's start date & time can't be lesser than previous operation's start date time", _this.baseClassObj.messageConfig);
                    _this.showLoader = false;
                }
            }
            // }
            // else if (data.recordAlreadySubmitDetails != undefined) {
            if (data.recordAlreadySubmitDetails.length > 0) {
                if (data.recordAlreadySubmitDetails[0].OPTM_STATUS == "N") {
                    _this.toastr.warning('', 'Record already under progress', _this.baseClassObj.messageConfig);
                    //this.cleanupScreen();
                    //hide Loader
                    _this.showLoader = false;
                    return;
                }
                if (data.recordAlreadySubmitDetails[0].OPTM_STATUS == "E") {
                    var userResponse = void 0;
                    userResponse = confirm("Record have error :-" + data.recordAlreadySubmitDetails[0].OPTM_RESULTDESC + ", Do you want to continue ?");
                    if (userResponse == true) {
                        _this.getServerDate(true);
                        //this.submitMoveOrder(true);
                    }
                    else {
                        _this.cleanupScreen();
                        //hide Loader
                        _this.showLoader = false;
                        return;
                    }
                    //hide Loader
                    _this.showLoader = false;
                }
            }
            else {
                console.log(data);
                _this.toastr.error('', 'Error while submitting record', _this.baseClassObj.messageConfig);
                //show Loader
                _this.showLoader = false;
            }
        });
    };
    //This will clear the screen after lookup selection
    MoveOrderComponent.prototype.clearScreenAfterLookup = function () {
        this.psWONO = "";
        this.psOperNO = "";
        this.psOperName = "";
        this.psToOperation = "";
        this.iProducedQty = 0;
        this.allWOOpDetails = [];
        //Hiding forms if uncesry opened forms
        if (this.settingOnSAP == "1") {
            this.showQtyNoScanScreen = false;
        }
        if (this.settingOnSAP == "2") {
            this.showQtyWithFGScanScreen = false;
        }
        if (this.settingOnSAP == "3") {
            this.showQtyWithFGRMScanScreen = false;
        }
    };
    //This function will check whether the FG is linked to WO or not 
    MoveOrderComponent.prototype.GetBatchSerialLinking = function () {
        var _this = this;
        this.showLoader = true;
        this.mo.GetBatchSerialLinking(this.CompanyDBId, this.psWONO, this.warehouseName, Number(this.psOperNO)).subscribe(function (data) {
            var isAllowed = true;
            if (data != null && data.Table.length > 0) {
                //Putting qtys if there is need to open the fg input screen
                _this.basicDetails = [];
                //Setting basic details to share on another screen
                _this.basicDetails.push({ 'WorkOrderNo': _this.psWONO, 'OperNo': _this.psOperNO, 'ItemCode': _this.psProductCode, 'ManagedBy': _this.psItemManagedBy, 'BalQty': _this.iBalQty, 'ProducedQty': _this.iProducedQty, 'IsUserIsSubcontracter': _this.isUserIsSubcontracter });
                //If data of linked qty is less then zero
                if (Number(data.Table[0].LinkedQuantity) <= 0) {
                    //alert("No serials/batches attached");
                    _this.toastr.error('', "No serials/batches attached", _this.baseClassObj.messageConfig);
                    isAllowed = false;
                    //hide Loader
                    _this.showLoader = false;
                    //Load screen elements
                    _this.loadFGScreenElements();
                    //This function will decide the screen to be opened
                    _this.openItemLinkingScreen();
                }
                else {
                    //If the number of linked qty is more than produced qty
                    if (Number(data.Table[0].LinkedQuantity) > _this.iProducedQty) {
                        //alert("Number of attached batch/serial quantities can't be greater then produced quantity");
                        _this.toastr.error('', "Number of attached batch/serial quantities can't be greater then produced quantity", _this.baseClassObj.messageConfig);
                        isAllowed = false;
                        //hide Loader
                        _this.showLoader = false;
                        //Load screen elements
                        _this.loadFGScreenElements();
                        //This function will decide the screen to be opened
                        _this.openItemLinkingScreen();
                    }
                    //If the number of linked qty is less than produced qty
                    if (Number(data.Table[0].LinkedQuantity) < _this.iProducedQty) {
                        //alert("Batch/Serial not linked");
                        _this.toastr.error('', "Quantity Mismatch", _this.baseClassObj.messageConfig);
                        isAllowed = false;
                        //hide Loader
                        _this.showLoader = false;
                        //Load screen elements
                        _this.loadFGScreenElements();
                        //This function will decide the screen to be opened
                        _this.openItemLinkingScreen();
                    }
                    //If all ok then the flag will allow to submit otherwise not
                    if (isAllowed == true) {
                        _this.getServerDate(false);
                        //submission service callled
                        //this.submitMoveOrder(false);
                    }
                }
            }
        });
    };
    //THis will deceide which screen have to be opened
    MoveOrderComponent.prototype.openItemLinkingScreen = function () {
        this.showItemLinkingScreen = true;
        if (this.settingOnSAP == "1") {
            this.ScreenName = 'Move Order Summary';
            this.showQtyNoScanScreen = true;
        }
        if (this.settingOnSAP == "2") {
            this.ScreenName = 'Finished Goods Scan';
            this.showQtyWithFGScanScreen = true;
        }
        if (this.settingOnSAP == "3") {
            this.ScreenName = 'Finished Goods & Raw Materials Scan';
            this.showQtyWithFGRMScanScreen = true;
        }
    };
    //Load Rifgt Screen elements
    MoveOrderComponent.prototype.loadFGScreenElements = function () {
        //For Opening the Right Section
        this.openRightSection(true);
        this.isQuantityRightSection = true;
        document.getElementById('opti_QuantityRightSection').style.display = 'block';
    };
    MoveOrderComponent.prototype.checkIfLoginIsValid = function () {
        if (window.localStorage.getItem('loggedInUser') == null || window.localStorage.getItem('loggedInUser') == undefined) {
            this.router.navigateByUrl('/login');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('optirightfixedsection'),
        __metadata("design:type", Object)
    ], MoveOrderComponent.prototype, "optirightfixedsection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__["LookupComponent"]),
        __metadata("design:type", Object)
    ], MoveOrderComponent.prototype, "child", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_qty_without_fgscan_qty_without_fgscan_component__WEBPACK_IMPORTED_MODULE_6__["QtyWithoutFGScanComponent"]),
        __metadata("design:type", Object)
    ], MoveOrderComponent.prototype, "childSAPSettingForms", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MoveOrderComponent.prototype, "onResize", null);
    MoveOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-move-order',
            template: __webpack_require__(/*! ./move-order.component.html */ "./src/app/move-order/move-order.component.html"),
            styles: [__webpack_require__(/*! ./move-order.component.scss */ "./src/app/move-order/move-order.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_moveorder_service__WEBPACK_IMPORTED_MODULE_1__["MoveorderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_3__["LookupComponent"], _common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], MoveOrderComponent);
    return MoveOrderComponent;
}());



/***/ }),

/***/ "./src/app/operation-lookup/operation-lookup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/operation-lookup/operation-lookup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n\r\n    \r\n<kendo-grid [data]=\"dataBind\" \r\n[scrollable]=\"'scrollable'\"\r\n[height]=\"height\"\r\n[selectable]=\"true\"\r\n[sortable]=\"{ mode: 'multiple' }\"\r\n[resizable]=\"false\" \r\n[pageSize]=\"1000\" \r\n[pageable]=\"true\" \r\n[filterable]=\"false\"\r\n[groupable]=\"false\"\r\n[selectable]=\"true\"  >\r\n        <kendo-grid-column field=\"Operation No\" title=\"Operation No\" width=\"100\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"Operation Desc\" title=\"Operation Desc\" width=\"100\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"Balance Quantity\" title=\"Balance Quantity\" width=\"100\">\r\n        </kendo-grid-column>\r\n       <kendo-grid-column width=\"50\"> \r\n            <ng-template  kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">    \r\n                    <button  (click)=\"onRowBtnClick($event, rowIndex)\" class=\"gridCell\">Select  \r\n                   </button>\r\n                   <!-- <div (click)=\"onRowClick($event, rowIndex)\" class=\"gridCell\">  \r\n                   </div> -->\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n    </kendo-grid>\r\n\r\n\r\n    <!-- sWorkOrderLookupColumns = [\"WorkOrder No\", \"Product Id\", \"Start Date\", \"End Date\"]; -->"

/***/ }),

/***/ "./src/app/operation-lookup/operation-lookup.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/operation-lookup/operation-lookup.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operation-lookup/operation-lookup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/operation-lookup/operation-lookup.component.ts ***!
  \****************************************************************/
/*! exports provided: OperationLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationLookupComponent", function() { return OperationLookupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperationLookupComponent = /** @class */ (function () {
    function OperationLookupComponent(commonService) {
        this.commonService = commonService;
        this.height = 400;
        this.width = 100;
        this.sOperationLookupColumns = ["Operation No", "Operation Desc", "Balance Quantity"];
        this.dataBind = [];
        this.showLoader = false;
    }
    OperationLookupComponent.prototype.ngOnInit = function () {
        this.showLoader = true;
        this.dataBind = [];
        this.dataBind = JSON.stringify(this.fillLookupArray, this.sOperationLookupColumns);
        this.dataBind = JSON.parse(this.dataBind);
        this.showLoader = false;
    };
    OperationLookupComponent.prototype.onRowBtnClick = function (evt, rowIndex) {
        this.commonService.ShareData({ value: this.fillLookupArray[rowIndex], from: "OPER" });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OperationLookupComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationLookupComponent.prototype, "fillLookupArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OperationLookupComponent.prototype, "width", void 0);
    OperationLookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operation-lookup',
            template: __webpack_require__(/*! ./operation-lookup.component.html */ "./src/app/operation-lookup/operation-lookup.component.html"),
            styles: [__webpack_require__(/*! ./operation-lookup.component.scss */ "./src/app/operation-lookup/operation-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], OperationLookupComponent);
    return OperationLookupComponent;
}());



/***/ }),

/***/ "./src/app/operational-detail/operational-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/operational-detail/operational-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"\" id=\"opti_operationDetailID\">\r\n    <div class=\"container-fluid opti_padding-zero\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <form class=\"k-form col-md-12\">\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Sc# Start Date</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.U_OPTM_OPSDATE | date: 'MM/dd/yyyy' }}\" disabled>\r\n            </label>\r\n            \r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Sch# End Date</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.U_OPTM_OPEDATE | date: 'MM/dd/yyyy' }}\" disabled>\r\n            </label>\r\n            \r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Qty Bal</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.U_O_BALQTY}}\" disabled>\r\n            </label>\r\n\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">WC</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.U_OPTM_WC_ID}}\" disabled>\r\n            </label>\r\n\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Previous Operation</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.PrevOperNo}}\" disabled>\r\n            </label>\r\n\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Previous Operation Bal. Qty</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.PrevBalQty}}\" disabled>\r\n            </label>\r\n\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Next Operation </span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.NextOperNo}}\" disabled>\r\n            </label>\r\n\r\n            <label class=\"k-form-field\">\r\n              <span class=\"opti_form-label\">Next Operation Bal. Qty</span>\r\n              <input type=\"text\" class=\"k-textbox\" value=\"{{oOperDetails.NextBalQty}}\" disabled>\r\n            </label>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>   "

/***/ }),

/***/ "./src/app/operational-detail/operational-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/operational-detail/operational-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#opti_operationDetailID {\n  margin-top: 20px; }\n\n.k-form {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/operational-detail/operational-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/operational-detail/operational-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: OperationalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalDetailComponent", function() { return OperationalDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_commanservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/commanservice.service */ "./src/app/services/commanservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperationalDetailComponent = /** @class */ (function () {
    function OperationalDetailComponent(comman, router) {
        this.comman = comman;
        this.router = router;
    }
    OperationalDetailComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('loggedInUser') == null || window.localStorage.getItem('loggedInUser') == undefined) {
            this.router.navigateByUrl('/login');
        }
        this.oOperDetails = this.woOperDetail[0];
    };
    OperationalDetailComponent.prototype.checkIfLoginIsValid = function () {
        if (window.localStorage.getItem('loggedInUser') == null || window.localStorage.getItem('loggedInUser') == undefined) {
            this.router.navigateByUrl('/login');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationalDetailComponent.prototype, "woOperDetail", void 0);
    OperationalDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operational-detail',
            template: __webpack_require__(/*! ./operational-detail.component.html */ "./src/app/operational-detail/operational-detail.component.html"),
            styles: [__webpack_require__(/*! ./operational-detail.component.scss */ "./src/app/operational-detail/operational-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_commanservice_service__WEBPACK_IMPORTED_MODULE_1__["CommanserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OperationalDetailComponent);
    return OperationalDetailComponent;
}());



/***/ }),

/***/ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n<!-- loader end -->\r\n\r\n<div class=\"container-fluid opti_padding-zero\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form class=\"k-form\" >\r\n                <label class=\"k-form-field\">\r\n                    <span class=\"opti_form-label\">FG Batch Serial</span> \r\n                    <span class=\"float-left opti_fgbatch-serial\"><input type=\"text\" class=\"k-textbox\" id=\"FgBatchSerialID\" [(ngModel)]=\"psBatchSer\" (blur)=\"onBatchSerBlur()\" [disabled]=\"bIsInEditMode\" name=\"psBatchSer\" /></span>\r\n                    <span class=\"opti_fgbatch-serial-icon\">         \r\n                        <img src=\"assets/images/common/scanner.svg\"  id=\"scanFgBatchSerialId\" class=\"opti_mouse-pointer\" width=\"27px\" height=\"27px\">\r\n                    </span>\r\n                    <span *ngIf=\"bIfBatSerEmpty\" class=\"float-right opti_error-msg\"> FG Batch/Serial can't be empty </span>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\">\r\n                    <span class=\"opti_form-label\">Qty</span>\r\n                    <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" [(ngModel)]=\"iQty\" (blur)=\"onQtyBlur()\" [disabled]=\"isQtyDisabled\" name=\"iQty\" />\r\n                    <span *ngIf=\"bIfQtyIsZero\" class=\"float-right opti_error-msg\"> Quantity can't be blank or zero </span>\r\n                </label>\r\n\r\n                <div class=\"k-form-field\">\r\n                    <input type=\"checkbox\" class=\"k-checkbox\" [(ngModel)]=\"bIsRejected\" (change)=\"onIsRejectedCheck()\" name=\"bIsRejected\" id=\"opti_bIsInEditModeID\">\r\n                    <label class=\"k-checkbox-label\" for=\"opti_bIsInEditModeID\">Rejected</label>\r\n\r\n                    <input type=\"checkbox\" class=\"k-checkbox\" [(ngModel)]=\"bIsNC\" (change)=\"onIsNCCheck()\" name=\"bIsNC\" id=\"opti_bIsNCID\" [hidden]=\"true\"/>\r\n                    <label class=\"k-checkbox-label\" for=\"opti_bIsNCID\" [hidden]=\"true\">NC Qty</label>\r\n\r\n                    <span *ngIf=\"bothSelectionRestrict\" class=\"float-right opti_error-msg\"> FG can either be Rejected or NC </span>\r\n                </div>\r\n              \r\n\r\n                <div class=\"text-right\">\r\n                    <button type=\"button\" class=\"k-button k-primary\" (click)=\"onAddPress()\" >Save</button>\r\n                    <button type=\"button\" class=\"k-button\" (click)=\"onClosePress()\">Close</button> \r\n                </div>\r\n            </form>\r\n        </div>    \r\n    </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-form {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.opti_fgbatch-serial {\n  width: calc(100% - 30px);\n  margin-bottom: 0 !important; }\n\n.opti_fgbatch-serial input {\n    width: 100%; }\n\n.opti_fgbatch-serial-icon {\n  width: 27px;\n  float: right;\n  margin-bottom: 0 !important; }\n"

/***/ }),

/***/ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: QtyWithFGScanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyWithFGScanDetailComponent", function() { return QtyWithFGScanDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/qty-with-fg-scan.service */ "./src/app/services/qty-with-fg-scan.service.ts");
/* harmony import */ var src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/BaseClass */ "./src/app/classes/BaseClass.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QtyWithFGScanDetailComponent = /** @class */ (function () {
    function QtyWithFGScanDetailComponent(qtyWithFGScanDtl, toastr) {
        this.qtyWithFGScanDtl = qtyWithFGScanDtl;
        this.toastr = toastr;
        this.psBatchSer = '';
        this.iQty = 1;
        this.bIsRejected = false;
        this.CompanyDBId = '';
        this.bIsNC = false;
        this.bIsEdit = false;
        this.loggedInUser = '';
        this.isQtyDisabled = false;
        this.bIsInEditMode = false;
        this.psItemManagedBy = '';
        this.bEnableSaveBtn = false;
        this.iSum = 0;
        this.iAcceptedQty = 0;
        this.iRejectedQty = 0;
        this.iNCQty = 0;
        this.iProducedQty = 0;
        this.bothSelectionRestrict = false;
        this.bIfBatSerEmpty = false;
        this.bIfQtyIsZero = false;
        this.showLoader = false;
        this.baseClassObj = new src_app_classes_BaseClass__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]();
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //Events
    QtyWithFGScanDetailComponent.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        //taking item managed by
        if (this.basicDetailsFrmFGWithScan != null) {
            if (this.basicDetailsFrmFGWithScan.length > 0) {
                this.psItemManagedBy = this.basicDetailsFrmFGWithScan[0].ManagedBy;
            }
        }
        if (this.rowDataFrmFGWithScan != null) {
            if (this.rowDataFrmFGWithScan.length > 0) {
                this.bIsEdit = true;
                this.bIsInEditMode = true;
                this.psBatchSer = this.rowDataFrmFGWithScan[0].FGBatchSerNo;
                this.iQty = this.rowDataFrmFGWithScan[0].Quantity;
                this.bIsRejected = this.rowDataFrmFGWithScan[0].IsRejected;
                this.bIsNC = this.rowDataFrmFGWithScan[0].IsNC;
                this.iSeqNo = this.rowDataFrmFGWithScan[0].SeqNo;
                this.psItemManagedBy = this.rowDataFrmFGWithScan[0].ItemManagedBy;
            }
            else {
                this.bIsInEditMode = false;
            }
        }
        //Disable/enalbe controls
        this.disableEnableControls();
        console.log("QTY SUMMARY");
        console.log(this.qtySummaryValues);
        //this.updateQtySummaryValues();
    };
    QtyWithFGScanDetailComponent.prototype.onClosePress = function () {
        this.ShowParent('close');
    };
    QtyWithFGScanDetailComponent.prototype.ShowParent = function (FromOper) {
        document.getElementById('opti_QtyFGScanChildID').style.display = 'none';
        document.getElementById('opti_QtyFGScanID').style.display = 'block';
        if (FromOper == "close") {
            //THis will notify the parent form i.e fg list
            this.messageEvent.emit("true");
        }
    };
    QtyWithFGScanDetailComponent.prototype.onAddPress = function () {
        //This mehtod will retrun true if all things are OK
        if (this.validateData() == true) {
            //validate sum of qtys
            if (this.validateSumOfQtys() == true) {
                if (this.bIsEdit == true) {
                    this.updateBatchSerInfoRow();
                }
                else {
                    this.bIsInEditMode = false;
                    this.saveBatchSerInfoRow();
                }
                this.ShowParent('add');
            }
        }
    };
    QtyWithFGScanDetailComponent.prototype.onBatchSerBlur = function () {
        //Added if for first time value is avail\able in input field.
        var inputValue = document.getElementById('FgBatchSerialID').value;
        //  var inputValue = "123#O1#5";
        if (inputValue.length > 0) {
            //alert('input values:'+inputValue);
            this.psBatchSer = inputValue;
            //this.getDecodedString();
            //this.decodeBarcodeQRString();
        }
        if (this.psBatchSer != null) {
            if (this.psBatchSer.length > 0) {
                this.bIfBatSerEmpty = false;
                if (this.chkIfFGBatSerAlreadyExists() == false) {
                    this.validateFGSerBat();
                }
                //If the value is filled then only enable add button
                this.bEnableSaveBtn = true;
            }
            else {
                this.bIfBatSerEmpty = true;
                //If the value is filled then only enable add button
                this.bEnableSaveBtn = true;
            }
        }
    };
    //On Qty blur thi swill run
    QtyWithFGScanDetailComponent.prototype.onQtyBlur = function () {
        if (this.iQty <= 0 || this.iQty == undefined) {
            this.bIfQtyIsZero = true;
        }
        else {
            this.bIfQtyIsZero = false;
            if (this.iQty > this.basicDetailsFrmFGWithScan[0].BalQty) {
                //alert("Quantity can't be greater than balance qty");
                this.toastr.error('', "Quantity can't be greater than balance qty", this.baseClassObj.messageConfig);
                this.iQty = 1;
                return;
            }
            else {
                //If value is ok then chk produced qty not greater than bal qty
                if (this.iQty > this.basicDetailsFrmFGWithScan[0].ProducedQty) {
                    // alert("Quantity can't be greater than produced quantity")
                    this.toastr.error('', "Quantity can't be greater than produced qty", this.baseClassObj.messageConfig);
                    this.iQty = 1;
                    return;
                }
            }
        }
    };
    QtyWithFGScanDetailComponent.prototype.onIsRejectedCheck = function () {
        console.log(this.bIsRejected);
    };
    QtyWithFGScanDetailComponent.prototype.onIsNCCheck = function () {
        console.log(this.bIsNC);
    };
    //Core Functions
    //this will save data 
    QtyWithFGScanDetailComponent.prototype.saveBatchSerInfoRow = function () {
        var _this = this;
        this.showLoader = true;
        var isRejected;
        var isNC;
        if (this.bIsRejected == true) {
            isRejected = 'Y';
        }
        else {
            isRejected = 'N';
        }
        if (this.bIsNC == true) {
            isNC = 'Y';
        }
        else {
            isNC = 'N';
        }
        if (this.iSeqNo == undefined || this.iSeqNo == null) {
            this.iSeqNo = 0;
        }
        this.qtyWithFGScanDtl.saveBatchSerInfo(this.CompanyDBId, this.iSeqNo, this.psBatchSer, this.iQty, isRejected, isNC, this.basicDetailsFrmFGWithScan[0].WorkOrderNo, this.basicDetailsFrmFGWithScan[0].ItemCode, this.basicDetailsFrmFGWithScan[0].OperNo, this.loggedInUser).subscribe(function (data) {
            if (data != null) {
                if (data == "True") {
                    //alert("Data saved");
                    _this.rowDataFrmFGWithScan = [];
                    _this.messageEvent.emit("true");
                }
                else {
                    //alert("Failed to Save Data");
                    _this.toastr.error('', "Failed to Save Data", _this.baseClassObj.messageConfig);
                    _this.rowDataFrmFGWithScan = [];
                }
                _this.showLoader = false;
            }
        });
    };
    //This will validate the FG Ser Batch
    QtyWithFGScanDetailComponent.prototype.validateFGSerBat = function () {
        var _this = this;
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        this.qtyWithFGScanDtl.checkIfFGSerBatisValid(this.CompanyDBId, this.psBatchSer, this.basicDetailsFrmFGWithScan[0].WorkOrderNo, this.basicDetailsFrmFGWithScan[0].ItemCode, this.basicDetailsFrmFGWithScan[0].OperNo).subscribe(function (data) {
            if (data[0].ItemCheck == "ItemNotExists") {
                //alert("FG Bat/Ser you are entering is not valid");
                _this.toastr.error('', "FG Bat/Ser you are entering is not valid", _this.baseClassObj.messageConfig);
                _this.psBatchSer = '';
                _this.iQty = 1;
                return;
            }
            if (data[0].ItemCheck == "ItemRejected") {
                //alert("FG Bat/Ser you are entering is rejected");
                _this.toastr.error('', "FG Bat/Ser you are entering is rejected", _this.baseClassObj.messageConfig);
                _this.psBatchSer = '';
                _this.iQty = 1;
                return;
            }
            if (data[0].ItemCheck == "ItemMoved") {
                //alert("FG Bat/Ser you are entering is rejected");
                _this.toastr.error('', "FG Bat/Ser you are entering is already moved", _this.baseClassObj.messageConfig);
                _this.psBatchSer = '';
                _this.iQty = 1;
                return;
            }
            if (data[0].ItemCheck == "Manual") {
                console.log(_this.psBatchSer + " -->This has a maual case");
            }
        });
    };
    //This will update FG Ser Batch 
    QtyWithFGScanDetailComponent.prototype.updateBatchSerInfoRow = function () {
        var _this = this;
        this.showLoader = true;
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        this.qtyWithFGScanDtl.updateBatchSerInfoRow(this.CompanyDBId, this.psBatchSer, this.iQty, this.bIsRejected, this.bIsNC, this.basicDetailsFrmFGWithScan[0].WorkOrderNo, this.basicDetailsFrmFGWithScan[0].OperNo, this.basicDetailsFrmFGWithScan[0].ItemCode, this.loggedInUser, this.iSeqNo).subscribe(function (data) {
            if (data != null) {
                if (data == "True") {
                    //alert("Data Updated sucessfully");
                    _this.rowDataFrmFGWithScan = [];
                    _this.messageEvent.emit("true");
                }
                else {
                    //alert("Failed to update Data");
                    _this.toastr.error('', "Failed to update Data", _this.baseClassObj.messageConfig);
                    console.log("DATA save failed-->" + data);
                    _this.rowDataFrmFGWithScan = [];
                }
                _this.showLoader = false;
            }
        });
    };
    QtyWithFGScanDetailComponent.prototype.disableEnableControls = function () {
        if (this.psItemManagedBy == "Serial") {
            this.isQtyDisabled = true;
            this.iQty = 1;
        }
        else {
            this.isQtyDisabled = false;
        }
    };
    //this will chk if the data we are adding is duplicate
    QtyWithFGScanDetailComponent.prototype.chkIfFGBatSerAlreadyExists = function () {
        console.log(this.FGWithScanGridFrmMaster);
        for (var rowCount in this.FGWithScanGridFrmMaster) {
            if (this.FGWithScanGridFrmMaster[rowCount].OPTM_BTCHSERNO == this.psBatchSer) {
                //alert("Serial/Batch already exist");
                this.toastr.warning('', "Serial/Batch already exist", this.baseClassObj.messageConfig);
                this.psBatchSer = "";
                return true;
            }
        }
        return false;
    };
    QtyWithFGScanDetailComponent.prototype.validateData = function () {
        //Check whether the input is not empty
        if (this.psBatchSer == '' || this.psBatchSer == null) {
            this.bIfBatSerEmpty = true;
            return false;
        }
        else {
            this.bIfBatSerEmpty = false;
        }
        //Check whether the qty is not empty
        if (this.iQty <= 0 || this.iQty == undefined) {
            this.bIfQtyIsZero = true;
            return false;
        }
        else {
            this.bIfQtyIsZero = false;
        }
        //Check if selection is of both is done
        if (this.bIsNC == true && this.bIsRejected == true) {
            this.bothSelectionRestrict = true;
            return false;
        }
        else {
            this.bothSelectionRestrict = false;
        }
        return true;
    };
    //Get Decoded String
    QtyWithFGScanDetailComponent.prototype.getDecodedString = function () {
        var _this = this;
        this.showLoader = true;
        this.qtyWithFGScanDtl.getDecodedString(this.CompanyDBId, this.psBatchSer).subscribe(function (data) {
            if (data != null) {
                _this.showLoader = false;
                if (data.length > 0) {
                    console.log("response data" + data);
                    _this.psBatchSer = "";
                    _this.iQty = 1;
                }
            }
        });
    };
    //This will check the sum of qty not to be greater then produced
    QtyWithFGScanDetailComponent.prototype.validateSumOfQtys = function () {
        var isValidQtys = true;
        if (this.psItemManagedBy == "Serial") {
            console.log(this.FGWithScanGridFrmMaster);
            debugger;
            var totalQty = 0;
            for (var rowCount in this.FGWithScanGridFrmMaster) {
                totalQty = this.FGWithScanGridFrmMaster[rowCount].OPTM_QUANTITY + totalQty;
            }
            //Check sum of qtys here
            if (totalQty > this.basicDetailsFrmFGWithScan[0].BalQty) {
                //alert("Quantity can't be greater than balance qty");
                this.toastr.error('', "Quantity can't be greater than balance qty", this.baseClassObj.messageConfig);
                this.iQty = 1;
                return;
            }
            else {
                //If value is ok then chk produced qty not greater than bal qty
                if (totalQty > this.basicDetailsFrmFGWithScan[0].ProducedQty) {
                    //alert("Quantity can't be greater than produced quantity")
                    this.toastr.error('', "Quantity can't be greater than produced qty", this.baseClassObj.messageConfig);
                    this.iQty = 1;
                    return;
                }
            }
        }
        else {
            if (this.iQty > this.basicDetailsFrmFGWithScan[0].ProducedQty) {
                //alert("Quantity can't be greater than produced quantity")
                this.toastr.error('', "Quantity can't be greater than produced qty", this.baseClassObj.messageConfig);
                isValidQtys = false;
            }
        }
        return isValidQtys;
    };
    //Update Qty Summary Values
    QtyWithFGScanDetailComponent.prototype.updateQtySummaryValues = function () {
        this.iAcceptedQty = this.qtySummaryValues[0].AcceptedQty;
        this.iNCQty = this.qtySummaryValues[0].NcQty;
        this.iRejectedQty = this.qtySummaryValues[0].RejectedQty;
        this.iProducedQty = this.qtySummaryValues[0].ProducedQty;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanDetailComponent.prototype, "basicDetailsFrmFGWithScan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanDetailComponent.prototype, "rowDataFrmFGWithScan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanDetailComponent.prototype, "FGWithScanGridFrmMaster", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanDetailComponent.prototype, "qtySummaryValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanDetailComponent.prototype, "messageEvent", void 0);
    QtyWithFGScanDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qty-with-fgscan-detail',
            template: __webpack_require__(/*! ./qty-with-fgscan-detail.component.html */ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.html"),
            styles: [__webpack_require__(/*! ./qty-with-fgscan-detail.component.scss */ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__["QtyWithFGScanService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], QtyWithFGScanDetailComponent);
    return QtyWithFGScanDetailComponent;
}());



/***/ }),

/***/ "./src/app/qty-with-fgscan/qty-with-fgscan.component.html":
/*!****************************************************************!*\
  !*** ./src/app/qty-with-fgscan/qty-with-fgscan.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n<!-- loader end -->\r\n<div #QtyFGScanIDParent id=\"opti_QtyFGScanID\"> \r\n        <kendo-grid \r\n        [kendoGridBinding]=\"FGScanGridData\" \r\n        [height]=gridHeight-52-62 \r\n        (remove)=\"removeHandler($event)\"\r\n        (edit)=\"editHandler($event)\"\r\n        [resizable]=\"false\" \r\n        [pageSize]=\"50\" \r\n        [pageable]=\"true\" \r\n        [sortable]=\"true\"  \r\n        [filterable]=\"false\"\r\n        [groupable]=\"false\" \r\n        >\r\n\r\n        <ng-template kendoGridToolbarTemplate>\r\n            <img src=\"assets/images/common/add.svg\" class=\"opti_mouse-pointer float-right\" (click)=\"showLevelChild()\" width=\"20px\" height=\"20px\">\r\n            <h5>Finished Goods List</h5>\r\n        </ng-template>  \r\n\r\n        \r\n        <kendo-grid-column field=\"OPTM_SEQ\" title=\"#\"  width=\"100\" [hidden]=\"true\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"OPTM_BTCHSERNO\" title=\"FG Batch/Serial\" width=\"120\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"OPTM_QUANTITY\" title=\"Quatity\" class=\"text-right\" width=\"120\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"OPTM_REJECT\" title=\"Reject\"  width=\"120\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                <input type=\"checkbox\" disabled [checked]=\"dataItem.OPTM_REJECT\"/>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"OPTM_NC\" title=\"NC\"  width=\"100\" [hidden]=\"true\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                <input type=\"checkbox\" disabled  [checked]=\"dataItem.OPTM_NC\"/>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"Actions\" width=\"150\">\r\n            <ng-template kendoGridCellTemplate>\r\n                <button kendoGridEditCommand class=\"k-primary\"  *ngIf=\"showEditBtn\">Edit</button>\r\n                <button kendoGridRemoveCommand class=\"k-primary\">Delete</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"opti_quantity-summary col-md-12 col-lg-10\">\r\n            <form class=\"k-form float-right\">\r\n                <label class=\"k-form-field\">\r\n                    <span class=\"opti_form-label\">Produced Qty</span>\r\n                    <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblProducedQty}}\" disabled>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\">\r\n                    <span class=\"opti_form-label\">Balance Qty</span>\r\n                    <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblBalQty}}\" disabled>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Accepted Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblAcceptedQty}}\" disabled>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\">\r\n                        <span class=\"opti_form-label\">Rejected Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblRejectedQty}}\" disabled>\r\n                </label>\r\n\r\n                <label class=\"k-form-field\" [hidden]=\"true\">\r\n                        <span class=\"opti_form-label\">NC Qty</span>\r\n                        <input type=\"text\" style=\"text-align: right;\" class=\"k-textbox\" value=\"{{lblNCQty}}\" disabled>\r\n                </label>\r\n            \r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"text-right col-md-12 col-lg-2\">\r\n            <button type=\"button\" (click)=\"onOKPress()\"  class=\"k-button k-primary opti_ok\">OK</button>\r\n        </div>\r\n    </div>    \r\n\r\n</div>\r\n        \r\n<section #QtyFGScanChildID id=\"opti_QtyFGScanChildID\">\r\n    <app-qty-with-fgscan-detail (messageEvent)=\"receiveMessage($event)\" [basicDetailsFrmFGWithScan]=\"basicDetailsFrmMO\" [rowDataFrmFGWithScan]=\"rowDataForEdit\" [FGWithScanGridFrmMaster]=\"FGScanGridData\" [qtySummaryValues]=\"qtySummaryValuesFGScan\" *ngIf=\"showFGInputForm\"></app-qty-with-fgscan-detail>\r\n</section>\r\n        \r\n          \r\n          "

/***/ }),

/***/ "./src/app/qty-with-fgscan/qty-with-fgscan.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/qty-with-fgscan/qty-with-fgscan.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#opti_QtyFGScanID {\n  margin-top: 20px; }\n\n.opti_quantity-summary {\n  margin-top: 5px; }\n\n.opti_quantity-summary form {\n    padding: 0; }\n\n.opti_quantity-summary form label.k-form-field {\n      width: 19%;\n      margin-right: 1%; }\n\n.opti_quantity-summary form label.k-form-field .opti_form-label {\n        font-size: 12px; }\n\n.k-button {\n  margin-top: 10px !important; }\n\nbutton.opti_ok {\n  margin-top: 27px !important; }\n"

/***/ }),

/***/ "./src/app/qty-with-fgscan/qty-with-fgscan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/qty-with-fgscan/qty-with-fgscan.component.ts ***!
  \**************************************************************/
/*! exports provided: QtyWithFGScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyWithFGScanComponent", function() { return QtyWithFGScanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/qty-with-fg-scan.service */ "./src/app/services/qty-with-fg-scan.service.ts");
/* harmony import */ var _qty_with_fgscan_detail_qty_with_fgscan_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qty-with-fgscan-detail/qty-with-fgscan-detail.component */ "./src/app/qty-with-fgscan-detail/qty-with-fgscan-detail.component.ts");
/* harmony import */ var src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/ui.helpers */ "./src/app/helpers/ui.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QtyWithFGScanComponent = /** @class */ (function () {
    function QtyWithFGScanComponent(qtyWithFGScan) {
        this.qtyWithFGScan = qtyWithFGScan;
        this.FGScanGridData = [];
        this.CompanyDBId = "";
        this.showFGInputForm = false;
        this.showLoader = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.txtFGValue = "";
        this.txtFGSerBatValue = "";
        this.txtFGQty = 0;
        this.isFGValid = true;
        this.lblBalQty = 0.0;
        this.lblAcceptedQty = 0.0;
        this.lblRejectedQty = 0.0;
        this.lblNCQty = 0.0;
        this.lblProducedQty = 0.0;
        this.rowID = 0;
        this.rowDataForEdit = [];
        this.showEditBtn = true;
        this.qtySummaryValuesFGScan = [];
        this.clearValues();
    }
    QtyWithFGScanComponent.prototype.onResize = function (event) {
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["UIHelper"].getMainContentHeight();
    };
    QtyWithFGScanComponent.prototype.ngOnChange = function () {
        //this.clearValues();
        //alert('onchange-Child');
        //this.fillFGData();
        //this.refreshQtys();
    };
    QtyWithFGScanComponent.prototype.ngOnInit = function () {
        this.clearValues();
        //alert('change init');  
        this.gridHeight = src_app_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["UIHelper"].getMainContentHeight();
        //  hide child level 
        this.QtyFGScanChildID.nativeElement.style.display = 'none';
        //console.log(this.basicDetailsFrmMO);
        this.CompanyDBId = window.localStorage.getItem('selectedComp');
        console.log(this.basicDetailsFrmMO);
        //Fill all details from DB in the grid
        this.fillFGData();
        this.refreshQtys();
    };
    QtyWithFGScanComponent.prototype.clearValues = function () {
        this.txtFGValue = "";
        this.txtFGSerBatValue = "";
        this.txtFGQty = 0;
        this.isFGValid = true;
        this.lblBalQty = 0.0;
        this.lblAcceptedQty = 0.0;
        this.lblRejectedQty = 0.0;
        this.lblNCQty = 0.0;
        this.lblProducedQty = 0.0;
        this.rowID = 0;
        this.rowDataForEdit = [];
        this.showEditBtn = true;
        //this.basicDetailsFrmMO=[];
    };
    QtyWithFGScanComponent.prototype.showLevelChild = function () {
        this.QtyFGScanChildID.nativeElement.style.display = 'block';
        this.QtyFGScanIDParent.nativeElement.style.display = 'none';
        //This will make the FG input Form show 
        this.showFGInputForm = true;
    };
    QtyWithFGScanComponent.prototype.receiveMessage = function ($event) {
        if ($event == "true") {
            //This will again refresh the grid again
            this.fillFGData();
            this.rowDataForEdit = [];
            //This will again hide the popup again
            this.showFGInputForm = false;
        }
    };
    //Kendo inbuilt method handlers
    QtyWithFGScanComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var rowIndex = _a.rowIndex;
        this.qtyWithFGScan.deleteBatchSerInfo(this.CompanyDBId, this.FGScanGridData[rowIndex].OPTM_SEQ).subscribe(function (data) {
            if (data != null) {
                if (data == "True") {
                    //alert("Data deleted");
                    _this.fillFGData();
                }
                else {
                    alert("Failed to delete data");
                }
            }
        });
    };
    QtyWithFGScanComponent.prototype.editHandler = function (_a) {
        var rowIndex = _a.rowIndex;
        //To show the popup screen which will supdateave the data
        this.showLevelChild();
        this.rowDataForEdit.push({ FGBatchSerNo: this.FGScanGridData[rowIndex].OPTM_BTCHSERNO, Quantity: this.FGScanGridData[rowIndex].OPTM_QUANTITY, IsRejected: this.FGScanGridData[rowIndex].OPTM_REJECT, IsNC: this.FGScanGridData[rowIndex].OPTM_NC, SeqNo: this.FGScanGridData[rowIndex].OPTM_SEQ, ItemManagedBy: this.FGScanGridData[rowIndex].ManagedBy });
    };
    //On OK Press the control will back to the main Move Order screen
    QtyWithFGScanComponent.prototype.onOKPress = function () {
        // this.optirightfixedsection.nativeElement.style.display = 'none';
        document.getElementById('opti_rightfixedsectionID').style.display = 'none';
        document.getElementById('opti_QuantityRightSection').style.display = 'none';
        //We will get this values and push into this array to send back
        var QtySummary = {
            'BalQty': this.lblBalQty,
            'AcceptedQty': this.lblAcceptedQty,
            'RejectedQty': this.lblRejectedQty,
            'NCQty': this.lblNCQty,
            'ProducedQty': this.lblProducedQty
        };
        this.messageEvent.emit(QtySummary);
    };
    //Core Functions
    //This func. will fill data into the grid
    QtyWithFGScanComponent.prototype.fillFGData = function () {
        var _this = this;
        this.showLoader = true;
        this.qtyWithFGScan.getBatchSerialInfo(this.CompanyDBId, this.basicDetailsFrmMO[0].WorkOrderNo, this.basicDetailsFrmMO[0].ItemCode, this.basicDetailsFrmMO[0].OperNo).subscribe(function (data) {
            if (data != null) {
                _this.FGScanGridData = data;
                for (var iCount in _this.FGScanGridData) {
                    if (_this.FGScanGridData[iCount].OPTM_REJECT == 'Y') {
                        _this.FGScanGridData[iCount].OPTM_REJECT = true;
                    }
                    else {
                        _this.FGScanGridData[iCount].OPTM_REJECT = false;
                    }
                    if (_this.FGScanGridData[iCount].OPTM_NC == 'Y') {
                        _this.FGScanGridData[iCount].OPTM_NC = true;
                    }
                    else {
                        _this.FGScanGridData[iCount].OPTM_NC = false;
                    }
                }
                // refresh the qtys in the lower table
                _this.refreshQtys();
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
            }
        });
        if (this.basicDetailsFrmMO[0].ManagedBy == "Serial") {
            this.showEditBtn = false;
        }
        else {
            this.showEditBtn = true;
        }
    };
    //refresh Qtys in the lower table
    QtyWithFGScanComponent.prototype.refreshQtys = function () {
        var iRejectCount = 0;
        var iNCCount = 0;
        var balQty = 0;
        var totalProducedQty = 0;
        for (var recCount in this.FGScanGridData) {
            totalProducedQty = totalProducedQty + this.FGScanGridData[recCount].OPTM_QUANTITY;
            balQty = balQty + this.FGScanGridData[recCount].OPTM_QUANTITY;
            if (this.FGScanGridData[recCount].OPTM_REJECT == true) {
                iRejectCount = iRejectCount + this.FGScanGridData[recCount].OPTM_QUANTITY;
                balQty = balQty - this.FGScanGridData[recCount].OPTM_QUANTITY;
            }
            if (this.FGScanGridData[recCount].OPTM_NC == true) {
                iNCCount = iNCCount + this.FGScanGridData[recCount].OPTM_QUANTITY;
                balQty = balQty - this.FGScanGridData[recCount].OPTM_QUANTITY;
            }
        }
        this.lblBalQty = this.basicDetailsFrmMO[0].BalQty;
        this.lblRejectedQty = iRejectCount;
        this.lblNCQty = iNCCount;
        this.lblProducedQty = totalProducedQty;
        this.lblAcceptedQty = totalProducedQty - iNCCount - iRejectCount;
        //put the summary in an array for calculation
        this.qtySummaryValuesFGScan.push({ RejectedQty: this.lblRejectedQty, NcQty: this.lblNCQty, AcceptedQty: this.lblAcceptedQty, BalQty: this.lblBalQty, ProducedQty: this.lblProducedQty });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanComponent.prototype, "basicDetailsFrmMO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_qty_with_fgscan_detail_qty_with_fgscan_detail_component__WEBPACK_IMPORTED_MODULE_2__["QtyWithFGScanDetailComponent"]),
        __metadata("design:type", Object)
    ], QtyWithFGScanComponent.prototype, "child", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('QtyFGScanIDParent'),
        __metadata("design:type", Object)
    ], QtyWithFGScanComponent.prototype, "QtyFGScanIDParent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('QtyFGScanChildID'),
        __metadata("design:type", Object)
    ], QtyWithFGScanComponent.prototype, "QtyFGScanChildID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QtyWithFGScanComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], QtyWithFGScanComponent.prototype, "onResize", null);
    QtyWithFGScanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qty-with-fgscan',
            template: __webpack_require__(/*! ./qty-with-fgscan.component.html */ "./src/app/qty-with-fgscan/qty-with-fgscan.component.html"),
            styles: [__webpack_require__(/*! ./qty-with-fgscan.component.scss */ "./src/app/qty-with-fgscan/qty-with-fgscan.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_qty_with_fg_scan_service__WEBPACK_IMPORTED_MODULE_1__["QtyWithFGScanService"]])
    ], QtyWithFGScanComponent);
    return QtyWithFGScanComponent;
}());



/***/ }),

/***/ "./src/app/qty-without-fgscan/qty-without-fgscan.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/qty-without-fgscan/qty-without-fgscan.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" id=\"opti_qtyWithoutFGScanID\">\r\n  <div class=\"container-fluid opti_padding-zero\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <form class=\"k-form col-md-12\">\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Balance Qty \r\n                  <!-- <span class=\"float-right opti_error-msg\"> Invalid Balance Quantity </span> -->\r\n                </span>\r\n                <input type=\"number\" style=\"text-align: right;\" class=\"k-textbox\" id=\"iBalQtyID\" name=\"iBalQtyName\" [(ngModel)]=\"iBalQty\" [disabled]=true>\r\n              </label>\r\n\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Accepted Qty </span>\r\n                <input type=\"number\" style=\"text-align: right;\" class=\"k-textbox\" id=\"iAcceptedQtyID\" name=\"iAcceptedQtyName\" [(ngModel)]=\"iAcceptedQty\" (blur)=\"onAccepetedQtyBlur()\" />\r\n              </label>\r\n\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Rejected Qty </span>\r\n                <input type=\"number\" style=\"text-align: right;\" class=\"k-textbox\" id=\"iRejectedQtyID\" name=\"iRejectedQtyName\" [(ngModel)]=\"iRejectedQty\" (blur)=\"onRejectQtyBlur()\" />\r\n              </label>\r\n\r\n              <label class=\"k-form-field\" [hidden]=\"true\">\r\n                <span class=\"opti_form-label\">NC Qty </span>\r\n                <input type=\"number\" style=\"text-align: right;\" class=\"k-textbox\" id=\"iNCQtyID\" name=\"iNCQtyName\" [(ngModel)]=\"iNCQty\" (blur)=\"onNCQtyBlur()\" />\r\n              </label>\r\n\r\n              <span class=\"float-left opti_error-msg\" *ngIf=\"negativeQty\"> Qty should not be negative </span>\r\n              <span class=\"float-left opti_error-msg\" *ngIf=\"sumOfQty\"> Sum of accepted quantity and reject quantity should be equal to produced quantity </span>\r\n              \r\n              <br>\r\n              <div class=\"text-right\">\r\n               \r\n                <br>\r\n                <button type=\"button\" (click)=\"onOKPress()\"  class=\"k-button k-primary\">OK</button>\r\n              </div>\r\n\r\n          </form> \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/qty-without-fgscan/qty-without-fgscan.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/qty-without-fgscan/qty-without-fgscan.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#opti_qtyWithoutFGScanID {\n  margin-top: 20px; }\n\n.k-form {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/qty-without-fgscan/qty-without-fgscan.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/qty-without-fgscan/qty-without-fgscan.component.ts ***!
  \********************************************************************/
/*! exports provided: QtyWithoutFGScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyWithoutFGScanComponent", function() { return QtyWithoutFGScanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QtyWithoutFGScanComponent = /** @class */ (function () {
    function QtyWithoutFGScanComponent() {
        this.iBalQty = 0.0;
        this.iAcceptedQty = 0.0;
        this.iRejectedQty = 0.0;
        this.iNCQty = 0.0;
        this.iSum = 0.0;
        this.negativeQty = false;
        this.sumOfQty = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QtyWithoutFGScanComponent.prototype.ngOnInit = function () {
        this.iBalQty = parseFloat(this.basicDetailsFrmMO[0].BalQty);
        this.iAcceptedQty = parseFloat(this.basicDetailsFrmMO[0].ProducedQty);
    };
    //Events
    QtyWithoutFGScanComponent.prototype.onOKPress = function () {
        //We will get this values and push into this array to send back
        if (this.validateSumOfQtys() == true) {
            // this.optirightfixedsection.nativeElement.style.display = 'none';
            document.getElementById('opti_rightfixedsectionID').style.display = 'none';
            document.getElementById('opti_QuantityRightSection').style.display = 'none';
            var QtySummary = {
                'BalQty': this.iBalQty,
                'AcceptedQty': this.iAcceptedQty,
                'RejectedQty': this.iRejectedQty,
                'NCQty': this.iNCQty
            };
            this.messageEvent.emit(QtySummary);
            //If data is ok then we will navigate back
            document.getElementById('opti_rightfixedsectionID').style.display = 'none';
        }
        else {
            return false;
        }
    };
    //On Accepeted Qty blur
    QtyWithoutFGScanComponent.prototype.onAccepetedQtyBlur = function () {
        if (this.iAcceptedQty != null) {
            if (this.isQtyIsNegative(this.iAcceptedQty) == true) {
                this.iAcceptedQty = 0;
            }
        }
    };
    //On Rejected Qry blur
    QtyWithoutFGScanComponent.prototype.onRejectQtyBlur = function () {
        if (this.iRejectedQty != null) {
            if (this.isQtyIsNegative(this.iRejectedQty) == true) {
                this.iRejectedQty = 0;
            }
        }
    };
    //On NC Qty blur
    QtyWithoutFGScanComponent.prototype.onNCQtyBlur = function () {
        if (this.iNCQty != null) {
            if (this.isQtyIsNegative(this.iNCQty) == true) {
                this.iNCQty = 0;
            }
        }
    };
    //Core Functions
    //This will check the qty is negative or not 
    QtyWithoutFGScanComponent.prototype.isQtyIsNegative = function (inputQty) {
        if (inputQty < 0) {
            this.negativeQty = true;
            return true;
        }
        else {
            this.negativeQty = false;
            return false;
        }
    };
    //This will check the sum of qty not to be greater then produced
    QtyWithoutFGScanComponent.prototype.validateSumOfQtys = function () {
        this.iSum = this.iAcceptedQty + this.iRejectedQty + this.iNCQty;
        if (this.iSum > this.basicDetailsFrmMO[0].ProducedQty) {
            this.sumOfQty = true;
            return false;
        }
        else {
            this.sumOfQty = false;
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QtyWithoutFGScanComponent.prototype, "basicDetailsFrmMO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QtyWithoutFGScanComponent.prototype, "messageEvent", void 0);
    QtyWithoutFGScanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qty-without-fgscan',
            template: __webpack_require__(/*! ./qty-without-fgscan.component.html */ "./src/app/qty-without-fgscan/qty-without-fgscan.component.html"),
            styles: [__webpack_require__(/*! ./qty-without-fgscan.component.scss */ "./src/app/qty-without-fgscan/qty-without-fgscan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QtyWithoutFGScanComponent);
    return QtyWithoutFGScanComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpclient) {
        this.httpclient = httpclient;
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
    }
    //Login function to hit login API
    AuthenticationService.prototype.login = function (loginId, loginPassword, psURL) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { Login: JSON.stringify([{ User: loginId, Password: loginPassword, IsAdmin: false }]) };
        //Return the response form the API  
        return this.httpclient.post(psURL + "/api/login/ValidateUserLogin", jObject, this.httpOptions);
    };
    //This function will get Company acc. to User
    AuthenticationService.prototype.getCompany = function (loginId, psURL) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { Username: JSON.stringify([{ Username: loginId, Product: "SFES" }]) };
        //Return the response form the API  
        return this.httpclient.post(psURL + "/api/login/GetCompaniesAndLanguages", jObject, this.httpOptions);
    };
    //Get psURL
    AuthenticationService.prototype.getPSURL = function (CompanyDBID, optiProMoveOrderAPIURL) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID }]) };
        //Return the response form the API  
        return this.httpclient.post(optiProMoveOrderAPIURL + "/MoveOrder/GetPSURL", jObject, this.httpOptions);
    };
    //Get Warehouses
    AuthenticationService.prototype.getWarehouse = function (loginId, CompanyDBID, psURL) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { CompanyName: JSON.stringify([{ Username: loginId, CompanyDBId: CompanyDBID }]) };
        //Return the response form the API  
        return this.httpclient.post(psURL + "/api/login/GetWHS", jObject, this.httpOptions);
    };
    //Get License Data
    AuthenticationService.prototype.getLicenseData = function (loginId, optiProMoveOrderAPIURL, CompanyDBID) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ Username: loginId, DataBase: CompanyDBID }]) };
        //Return the response form the API  
        return this.httpclient.post(optiProMoveOrderAPIURL + "/MoveOrder/getLicenseData", jObject, this.httpOptions);
    };
    //Get License Data
    AuthenticationService.prototype.removeCurrentUser = function (loginId, CompanyDBID, currentGUID, optiProMoveOrderAPIURL) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyId: CompanyDBID, GUID: currentGUID, Login: loginId }]) };
        //Return the response form the API  
        return this.httpclient.post(optiProMoveOrderAPIURL + "/MoveOrder/RemoveLoggedInUser", jObject, this.httpOptions);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

;


/***/ }),

/***/ "./src/app/services/commanservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/commanservice.service.ts ***!
  \***************************************************/
/*! exports provided: CommanserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanserviceService", function() { return CommanserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommanserviceService = /** @class */ (function () {
    function CommanserviceService(router) {
        this.router = router;
    }
    CommanserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommanserviceService);
    return CommanserviceService;
}());



/***/ }),

/***/ "./src/app/services/fgrmscanchildinputform.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/fgrmscanchildinputform.service.ts ***!
  \************************************************************/
/*! exports provided: FgrmscanchildinputformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanchildinputformService", function() { return FgrmscanchildinputformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FgrmscanchildinputformService = /** @class */ (function () {
    function FgrmscanchildinputformService(httpclient) {
        this.httpclient = httpclient;
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
    }
    //Check the Item Code and get its details
    FgrmscanchildinputformService.prototype.CheckIfChildCompExists = function (CompanyDBID, FGItemCode, ChildCompId, WONO, OperNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, FGItemCode: FGItemCode, ChildComponentId: ChildCompId, WorkOrderNo: WONO, OperationNo: OperNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/CheckIfChildCompBatchSerExists", jObject, this.httpOptions);
    };
    //This will fetch sysnumber
    FgrmscanchildinputformService.prototype.CheckIfValidBatchSerialComponentEntered = function (CompanyDBID, WareHouse, Bin, ChildBtchSerNo, ItemCode) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, WareHouse: WareHouse, Bin: Bin, ChildBtchSerNo: ChildBtchSerNo, ItemCode: ItemCode }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/CheckIfValidBatchSerialComponentEntered", jObject, this.httpOptions);
    };
    FgrmscanchildinputformService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FgrmscanchildinputformService);
    return FgrmscanchildinputformService;
}());



/***/ }),

/***/ "./src/app/services/fgrmscanparent.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/fgrmscanparent.service.ts ***!
  \****************************************************/
/*! exports provided: FgrmscanparentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanparentService", function() { return FgrmscanparentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FgrmscanparentService = /** @class */ (function () {
    function FgrmscanparentService(httpclient) {
        this.httpclient = httpclient;
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
    }
    //Delete Data for parent FG and child RM
    FgrmscanparentService.prototype.deleteParentFGandRM = function (CompanyDBID, seqNo, WONo, ParentFGBatchSerNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, Sequence: seqNo, WorkOrder: WONo, ParentBatchSerial: ParentFGBatchSerNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/DeleteFGandRM", jObject, this.httpOptions);
    };
    FgrmscanparentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FgrmscanparentService);
    return FgrmscanparentService;
}());



/***/ }),

/***/ "./src/app/services/fgrmscanparentinputform.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/fgrmscanparentinputform.service.ts ***!
  \*************************************************************/
/*! exports provided: FgrmscanparentinputformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgrmscanparentinputformService", function() { return FgrmscanparentinputformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FgrmscanparentinputformService = /** @class */ (function () {
    function FgrmscanparentinputformService(httpclient) {
        this.httpclient = httpclient;
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
    }
    //save the data for both the grids
    FgrmscanparentinputformService.prototype.SubmitDataforFGandRM = function (oModal) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify(oModal) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/SubmitDataforFGandRM", jObject, this.httpOptions);
    };
    //This will get the child data if exists
    FgrmscanparentinputformService.prototype.GetAllChildByParentId = function (CompanyDBID, ParentBatchSerialNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, ParentBatchSerialNo: ParentBatchSerialNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetAllChildByParentId", jObject, this.httpOptions);
    };
    //This method will delete the data from child RM
    FgrmscanparentinputformService.prototype.deleteRMDataBySeq = function (CompanyDBID, sequenceNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, squence: sequenceNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/DeleteChildComponent", jObject, this.httpOptions);
    };
    FgrmscanparentinputformService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FgrmscanparentinputformService);
    return FgrmscanparentinputformService;
}());



/***/ }),

/***/ "./src/app/services/moveorder.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/moveorder.service.ts ***!
  \***********************************************/
/*! exports provided: MoveorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveorderService", function() { return MoveorderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoveorderService = /** @class */ (function () {
    function MoveorderService(httpclient) {
        this.httpclient = httpclient;
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
        this.username = window.localStorage.getItem('loggedInUser');
        this.GUID = window.localStorage.getItem("GUID");
    }
    //GetAllWO function to hit login API
    MoveorderService.prototype.getAllWorkOrders = function (CompanyDBID, Warehouse) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, Warehouse: Warehouse, Username: window.localStorage.getItem('loggedInUser'), GUID: window.localStorage.getItem("GUID"), isUserIsSubcontracter: window.localStorage.getItem("isUserIsSubcontracter"),
                    isCustEnabled: window.localStorage.getItem("isCustEnabled"),
                }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetAllWorkOrders", jObject, this.httpOptions);
    };
    //GetAll Oper function to hit login API
    MoveorderService.prototype.getOperationByWorkOrder = function (CompanyDBID, docenrty, workOrderNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, DocEnrty: docenrty, WorkOrderNo: workOrderNo, Username: window.localStorage.getItem('loggedInUser'), isUserIsSubcontracter: window.localStorage.getItem("isUserIsSubcontracter"),
                    isCustEnabled: window.localStorage.getItem("isCustEnabled") }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetOperationByWorkOrder", jObject, this.httpOptions);
    };
    //Get Operation Detail By DocEnty
    MoveorderService.prototype.getOperDetailByDocEntry = function (CompanyDBID, docenrty, operNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, DocEnrty: docenrty, OperNo: operNo, isUserIsSubcontracter: window.localStorage.getItem("isUserIsSubcontracter"),
                    isCustEnabled: window.localStorage.getItem("isCustEnabled") }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetOperDetailByDocEntry", jObject, this.httpOptions);
    };
    //Get Server Date
    MoveorderService.prototype.getServerDate = function (CompanyDBID) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{
                    CompanyDBID: CompanyDBID
                }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetServerDate", jObject, this.httpOptions);
    };
    //Submit Move Order
    MoveorderService.prototype.submitMoveOrder = function (CompanyDBID, DocEntry, FromOperationNo, ToOperationNo, WorkOrderNo, ItemCode, loggedInUser, AcceptedQty, RejectedQty, NCQty, OrderedQty, ProducedQty, FrmToDateTime, preOperNo, getSettingOnSAP, IsMoveOrderTimeMandatory, iBalQty, isForcefullSubmission) {
        var sFromDateTime = new Date(FrmToDateTime[0]).toLocaleString();
        var sEndDateTime = new Date(FrmToDateTime[1]).toLocaleString();
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{
                    CompanyDBID: CompanyDBID,
                    FromOperation: FromOperationNo,
                    ToOperation: ToOperationNo,
                    WorkOrderNo: WorkOrderNo,
                    ItemCode: ItemCode,
                    UserID: loggedInUser,
                    QtyAccepted: AcceptedQty,
                    QtyRejected: RejectedQty,
                    QtyProduced: ProducedQty,
                    QtyNC: NCQty,
                    QtyOrder: OrderedQty,
                    StartDateTime: sFromDateTime,
                    EndDateTime: sEndDateTime,
                    genealogySetting: getSettingOnSAP,
                    PreOperNo: preOperNo,
                    IsMoveOrderTimeMandatory: IsMoveOrderTimeMandatory,
                    isForcefullSubmission: isForcefullSubmission,
                    isUserIsSubcontracter: window.localStorage.getItem("isUserIsSubcontracter"),
                    DocEntry: DocEntry,
                    iBalQty: iBalQty,
                    isCustEnabled: window.localStorage.getItem("isCustEnabled"),
                }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/SubmitMoveOrder", jObject, this.httpOptions);
    };
    //Get Setting from DB
    MoveorderService.prototype.getSettingOnSAP = function (CompanyDBID, loggedInUser) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{
                    CompanyDBID: CompanyDBID,
                    UserID: loggedInUser
                }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetSettingOnSAP", jObject, this.httpOptions);
    };
    //Get count of FG linked in db by its whse and wono
    MoveorderService.prototype.GetBatchSerialLinking = function (CompanyDBID, woNo, warehouseName, operNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{
                    CompanyDBID: CompanyDBID,
                    warehouseName: warehouseName,
                    workOrderNo: woNo,
                    operNo: operNo
                }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetBatchSerialLinking", jObject, this.httpOptions);
    };
    MoveorderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoveorderService);
    return MoveorderService;
}());



/***/ }),

/***/ "./src/app/services/qty-with-fg-scan.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/qty-with-fg-scan.service.ts ***!
  \******************************************************/
/*! exports provided: QtyWithFGScanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyWithFGScanService", function() { return QtyWithFGScanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QtyWithFGScanService = /** @class */ (function () {
    function QtyWithFGScanService(httpclient) {
        this.httpclient = httpclient;
        this.scanDataInputs = {};
        //defining properties for the call 
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
    }
    //Check whether the Finished Good is valid serial/bat no.
    QtyWithFGScanService.prototype.checkIfFGSerBatisValid = function (CompanyDBID, FGSerBatValue, WONo, FGItemCode, OpNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, FGSerBat: FGSerBatValue, WorkOrderNo: WONo, ItemCode: FGItemCode, OperNo: OpNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/checkIfFGSerBatisValid", jObject, this.httpOptions);
    };
    //Get all data
    QtyWithFGScanService.prototype.getBatchSerialInfo = function (CompanyDBID, WONo, FGItemCode, OpNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, WorkOrderNo: WONo, ItemCode: FGItemCode, FromOperation: OpNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/GetBatchSerialInfo", jObject, this.httpOptions);
    };
    //Save Data
    QtyWithFGScanService.prototype.saveBatchSerInfo = function (CompanyDBID, SeqNo, FGBatchSer, QtyProd, IsRejected, IsNC, WorkOrderNo, ItemCode, OperationNo, loggedInUser) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, WorkOrder: WorkOrderNo, SequenceNo: SeqNo, FGBatchSerial: FGBatchSer, Rejected: IsRejected, User: loggedInUser, NC: IsNC, Item: ItemCode, Operation: OperationNo, Quantity: QtyProd }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/SaveBatchSerialInfo", jObject, this.httpOptions);
    };
    //Delete Data
    QtyWithFGScanService.prototype.deleteBatchSerInfo = function (CompanyDBID, seqNo) {
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, Sequence: seqNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/DeleteBatchSerialInfo", jObject, this.httpOptions);
    };
    //Update Data
    QtyWithFGScanService.prototype.updateBatchSerInfoRow = function (CompanyDBID, FGBatchSer, QtyProd, IsRejected, IsNC, WorkOrderNo, OperationNo, ItemCode, loggedInUser, iSeqNo) {
        if (IsNC == undefined || IsNC == null) {
            IsNC = false;
        }
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { MoveOrder: JSON.stringify([{ CompanyDBID: CompanyDBID, WorkOrder: WorkOrderNo, FGBatchSerial: FGBatchSer, Rejected: IsRejected, User: loggedInUser, NC: IsNC, Item: ItemCode, Operation: OperationNo, Quantity: QtyProd, SeqNo: iSeqNo }]) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/MoveOrder/UpdateBatchSerialInfo", jObject, this.httpOptions);
    };
    //Get Decoded String
    QtyWithFGScanService.prototype.getDecodedString = function (CompanyDBID, FGScannedString) {
        var dataSCAN = [];
        this.scanDataInputs.CompanyDBID = CompanyDBID;
        this.scanDataInputs.Vsvendorid = "";
        this.scanDataInputs.FGItem = "";
        this.scanDataInputs.strScan = FGScannedString;
        dataSCAN.push(this.scanDataInputs);
        //JSON Obeject Prepared to be send as a param to API
        var jObject = { Gs1Token: JSON.stringify(dataSCAN) };
        //Return the response form the API  
        return this.httpclient.post(this.arrConfigData.optiProMoveOrderAPIURL + "/GS1/GS1Setup", jObject, this.httpOptions);
    };
    QtyWithFGScanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QtyWithFGScanService);
    return QtyWithFGScanService;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"opti_TopBarID\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n            <!-- this logo only for mobile -->\r\n            <img src=\"assets/images/logo/mobile-logo.svg\" alt=\"Logo\" class=\"opti_mouse-pointer float-left\" width=\"80\" height=\"65\" />\r\n            <!-- ebd this logo only for mobile -->\r\n            \r\n\r\n            <!-- Top Right Section -->\r\n            <div class=\"opti_topbar-rightpanel float-right\">\r\n                <div class=\"opti_vertical-align\">\r\n                    <div class=\"opti_display-inline-flex\">\r\n\r\n                    <span class=\"opti_mouse-pointer opti_logout\" (click)=\"signOut()\"><img src=\"assets/images/common/logout.svg\" width=\"20px\" height=\"20px\" />&nbsp; Log Out</span>\r\n\r\n                        <!-- <li class=\"opti_icon-spacing opti_user-profile opti_position-relative\" dropdown>\r\n                            <a dropdownToggle class=\"dropdown-toggle\"><img src=\"https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png\" class=\"opti_mouse-pointer opti_theme-setting\" alt=\"User Profile\" width=\"30\" height=\"30\" /></a>\r\n                            <ul class=\"dropdown-menu opti_user-profile-drop-down\" *dropdownMenu>\r\n                                <li>\r\n                                    <div class=\"container-fluid\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"opti_profile-box\">\r\n                                                    <div class=\"opti_profile-box-img\">\r\n                                                        <img src=\"https://wrappixel.com/demos/admin-templates/material-pro/assets/images/users/1.jpg\" alt=\"user image\" width=\"80\">\r\n                                                    </div>\r\n                                                    <div class=\"opti_profile-box-text\">\r\n                                                        <h5>{{userName}}</h5>\r\n                                                        <p>{{selectedCompany}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>            \r\n                                </li>\r\n                                \r\n                                <li class=\"opti_seprator\"></li>\r\n                                \r\n                             \r\n                                \r\n                                <li class=\"opti_seprator\"></li>\r\n\r\n                                <li class=\"opti_mouse-pointer opti_profile-box-logout\">\r\n                                    <div class=\"container-fluid\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\"(click)=\"signOut()\" >\r\n                                                <img src=\"assets/images/common/logout.svg\" width=\"20px\" height=\"20px\" />LogOut\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </li> -->\r\n                    </div>\r\n                </div>    \r\n            </div>    \r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n.opti_table-v-middle {\n  display: table;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n.opti_table-v-middle .opti_table-cell-v-middle {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n.opti_vertical-align {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center; }\n.opti_seprator {\n  height: 1px;\n  overflow: hidden;\n  background-color: rgba(120, 130, 140, 0.13);\n  padding: 0; }\n.opti_hide-in-desktop-ipad {\n  display: none; }\n#opti_TopBarID .opti_vertical-align {\n  height: 65px; }\n.opti_logout {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.showLoader = false;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        this.selectedCompany = window.localStorage.getItem('selectedComp');
        this.userName = window.localStorage.getItem('loggedInUser');
        this.currentGuid = window.localStorage.getItem("GUID");
    };
    TopbarComponent.prototype.signOut = function () {
        //To deallocate license
        //Commeted Temperary
        //this.removeCurrentUser();
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    TopbarComponent.prototype.removeCurrentUser = function () {
        var _this = this;
        //'http://localhost:57913/api'
        this.arrConfigData = JSON.parse(window.localStorage.getItem('arrConfigData'));
        this.auth.removeCurrentUser(this.userName, this.selectedCompany, window.localStorage.getItem("GUID"), this.arrConfigData.optiProMoveOrderAPIURL).subscribe(function (data) {
            if (data != null || data != undefined) {
                if (data == true) {
                    window.localStorage.setItem('loggedInUser', '');
                }
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/work-order-detail/work-order-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/work-order-detail/work-order-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"\">\r\n  <p></p>\r\n  <form>\r\n      <table class=\"table table-bordered\">\r\n          <tbody>\r\n            <tr>\r\n              <th scope=\"row\">Sch# Start Date</th>\r\n              <td>{{oWODetails.U_O_STARTDATE | date: 'MM/dd/yyyy' }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">Sch# End Date</th>\r\n              <td>{{oWODetails.U_O_ENDDATE | date: 'MM/dd/yyyy' }}</td>\r\n              \r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">SO#</th>\r\n              <td>{{oWODetails.U_O_SONO }}</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th scope=\"row\">Customer</th>\r\n                <td>{{oWODetails.U_O_CUSTCODE }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                  <th scope=\"row\">Product</th>\r\n                  <td>{{oWODetails.U_O_PRODID }}</td>\r\n                </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        \r\n      </form>\r\n</div> -->\r\n\r\n\r\n<div class=\"\" id=\"opti_workOrderDetailID\">\r\n  <div class=\"container-fluid opti_padding-zero\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <form class=\"k-form col-md-12\">\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Sch# Start Date</span>\r\n                <input type=\"text\" class=\"k-textbox\" value=\"{{ oWODetails.U_O_STARTDATE | date: 'MM/dd/yyyy' }}\" disabled>\r\n              </label>\r\n              \r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Sch# End Date</span>\r\n                <input type=\"text\" class=\"k-textbox\" value=\"{{ oWODetails.U_O_ENDDATE | date: 'MM/dd/yyyy' }}\" disabled>\r\n              </label>\r\n              \r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">SO#</span>\r\n                <input type=\"text\" class=\"k-textbox\" value=\"{{ oWODetails.U_O_SONO }}\" disabled>\r\n              </label>\r\n\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Customer</span>\r\n                <input type=\"text\" class=\"k-textbox\" value=\"{{ oWODetails.U_O_CUSTCODE }}\" disabled>\r\n              </label>\r\n\r\n              <label class=\"k-form-field\">\r\n                <span class=\"opti_form-label\">Product</span>\r\n                <input type=\"text\" class=\"k-textbox\" value=\"{{ oWODetails.U_O_PRODID }}\" disabled>\r\n              </label>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div>  \r\n</div>    \r\n"

/***/ }),

/***/ "./src/app/work-order-detail/work-order-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/work-order-detail/work-order-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#opti_workOrderDetailID {\n  margin-top: 20px; }\n\n.k-form {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/work-order-detail/work-order-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/work-order-detail/work-order-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: WorkOrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderDetailComponent", function() { return WorkOrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkOrderDetailComponent = /** @class */ (function () {
    function WorkOrderDetailComponent() {
    }
    WorkOrderDetailComponent.prototype.ngOnInit = function () {
        this.oWODetails = this.workOrderDetail[0];
        console.log(this.oWODetails);
    };
    WorkOrderDetailComponent.prototype.onOKPress = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrderDetailComponent.prototype, "workOrderDetail", void 0);
    WorkOrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-order-detail',
            template: __webpack_require__(/*! ./work-order-detail.component.html */ "./src/app/work-order-detail/work-order-detail.component.html"),
            styles: [__webpack_require__(/*! ./work-order-detail.component.scss */ "./src/app/work-order-detail/work-order-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkOrderDetailComponent);
    return WorkOrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/work-order-lookup/work-order-lookup.component.html":
/*!********************************************************************!*\
  !*** ./src/app/work-order-lookup/work-order-lookup.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLoader\">\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>\r\n\r\n    \r\n<kendo-grid [data]=\"dataBind\" \r\n[scrollable]=\"'scrollable'\"\r\n[height]=\"height\"\r\n[selectable]=\"true\"\r\n[sortable]=\"{ mode: 'multiple' }\"\r\n[resizable]=\"false\" \r\n[pageSize]=\"1000\" \r\n[pageable]=\"true\" \r\n[filterable]=\"false\"\r\n[groupable]=\"false\"\r\n[selectable]=\"selectableSettings\" >\r\n        <kendo-grid-column field=\"WorkOrder No\" title=\"WorkOrder No\" width=\"130\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"Product Id\" title=\"Product Id\" width=\"100\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"Start Date\" title=\"Start Date\" width=\"100\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"End Date\" title=\"End Date\"width=\"100\">\r\n        </kendo-grid-column>\r\n\r\n<kendo-grid-column  width=\"60\">\r\n\r\n\r\n        <ng-template  kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">    \r\n                <button  (click)=\"onRowBtnClick($event, rowIndex)\" class=\"gridCell\">Select  \r\n               </button>\r\n               <!-- <div (click)=\"onRowClick($event, rowIndex)\" class=\"gridCell\">  \r\n               </div> -->\r\n        </ng-template>\r\n\r\n</kendo-grid-column>\r\n    </kendo-grid>\r\n\r\n\r\n    <!-- sWorkOrderLookupColumns = [\"WorkOrder No\", \"Product Id\", \"Start Date\", \"End Date\"]; -->"

/***/ }),

/***/ "./src/app/work-order-lookup/work-order-lookup.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/work-order-lookup/work-order-lookup.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work-order-lookup/work-order-lookup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/work-order-lookup/work-order-lookup.component.ts ***!
  \******************************************************************/
/*! exports provided: WorkOrderLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderLookupComponent", function() { return WorkOrderLookupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkOrderLookupComponent = /** @class */ (function () {
    //  sWorkOrderLookupColumns = ["WorkOrder No", "Product Id", "Start Date", "End Date"];
    function WorkOrderLookupComponent(commonService) {
        this.commonService = commonService;
        this.height = 400;
        this.width = 100;
        this.sWorkOrderLookupColumns = ["WorkOrder No", "Product Id", "Start Date", "End Date"];
        this.dataBind = [];
        this.showLoader = false;
    }
    WorkOrderLookupComponent.prototype.ngOnInit = function () {
        this.showLoader = true;
        this.dataBind = [];
        this.dataBind = JSON.stringify(this.fillLookupArray, this.sWorkOrderLookupColumns);
        console.log("this.fillLookupArray");
        console.log(this.fillLookupArray);
        this.dataBind = JSON.parse(this.dataBind);
        this.showLoader = false;
    };
    WorkOrderLookupComponent.prototype.ngOnChanges = function () {
        this.showLoader = true;
        this.dataBind = [];
        this.dataBind = JSON.stringify(this.fillLookupArray, this.sWorkOrderLookupColumns);
        console.log("this.fillLookupArray");
        console.log(this.fillLookupArray);
        this.dataBind = JSON.parse(this.dataBind);
        this.showLoader = false;
    };
    WorkOrderLookupComponent.prototype.onRowBtnClick = function (evt, rowIndex) {
        this.commonService.ShareData({ value: this.fillLookupArray[rowIndex], from: "WO" });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WorkOrderLookupComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrderLookupComponent.prototype, "fillLookupArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WorkOrderLookupComponent.prototype, "width", void 0);
    WorkOrderLookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-order-lookup',
            template: __webpack_require__(/*! ./work-order-lookup.component.html */ "./src/app/work-order-lookup/work-order-lookup.component.html"),
            styles: [__webpack_require__(/*! ./work-order-lookup.component.scss */ "./src/app/work-order-lookup/work-order-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], WorkOrderLookupComponent);
    return WorkOrderLookupComponent;
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
    production: false
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\finalMo\optipro-moveorder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map