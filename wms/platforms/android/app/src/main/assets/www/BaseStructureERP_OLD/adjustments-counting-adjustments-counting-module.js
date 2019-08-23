(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjustments-counting-adjustments-counting-module"],{

/***/ "./src/app/adjustments-counting/adjustments-counting-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/adjustments-counting/adjustments-counting-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdjustmentsCountingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentsCountingRoutingModule", function() { return AdjustmentsCountingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _physical_count_physical_count_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physical-count/physical-count.component */ "./src/app/adjustments-counting/physical-count/physical-count.component.ts");




var routes = [
    { path: '', component: _physical_count_physical_count_component__WEBPACK_IMPORTED_MODULE_3__["PhysicalCountComponent"] },
    { path: 'physical-count', component: _physical_count_physical_count_component__WEBPACK_IMPORTED_MODULE_3__["PhysicalCountComponent"] },
];
var AdjustmentsCountingRoutingModule = /** @class */ (function () {
    function AdjustmentsCountingRoutingModule() {
    }
    AdjustmentsCountingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdjustmentsCountingRoutingModule);
    return AdjustmentsCountingRoutingModule;
}());



/***/ }),

/***/ "./src/app/adjustments-counting/adjustments-counting.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/adjustments-counting/adjustments-counting.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdjustmentsCountingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentsCountingModule", function() { return AdjustmentsCountingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adjustments_counting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustments-counting-routing.module */ "./src/app/adjustments-counting/adjustments-counting-routing.module.ts");
/* harmony import */ var _physical_count_physical_count_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physical-count/physical-count.component */ "./src/app/adjustments-counting/physical-count/physical-count.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var _node_modules_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");











var AdjustmentsCountingModule = /** @class */ (function () {
    function AdjustmentsCountingModule() {
    }
    AdjustmentsCountingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_physical_count_physical_count_component__WEBPACK_IMPORTED_MODULE_4__["PhysicalCountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _node_modules_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_6__["TrnaslateLazyModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogsModule"],
                _adjustments_counting_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdjustmentsCountingRoutingModule"]
            ]
        })
    ], AdjustmentsCountingModule);
    return AdjustmentsCountingModule;
}());



/***/ }),

/***/ "./src/app/adjustments-counting/physical-count/physical-count.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/adjustments-counting/physical-count/physical-count.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" *ngIf=\"!showSavedItems\">\r\n                {{'PhysicalCount'|translate}}\r\n            </h3>\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" *ngIf=\"showSavedItems\">\r\n                {{'Items'|translate}}\r\n            </h3>\r\n            <div class=\"row\" *ngIf=\"!showSavedItems\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'DocNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'DocNo'|translate}}\" name=\"DocNo\" [(ngModel)]=\"DocNo\"\r\n                                    [disabled]=true>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'CountDate'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'CountDate'|translate}}\" name=\"CountDate\" [(ngModel)]=\"CountDate\"\r\n                                [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Scan'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"d-flex\">\r\n                                <input class=\"form-control form-control-sm\"  type=\"text\" \r\n                                id=\"scanInputFieldPC\" name=\"ScanInputs\" \r\n                                [(ngModel)]=ScanInputs (blur)=\"onScanCodeChange()\" placeholder=\"{{'Scan'|translate}}\">\r\n                                <div class=\"ml-1 d-flex\">\r\n                                    <button class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\" type=\"button\"\r\n                                    id=\"scanButtonPC\"  (click)=\"onScanPC()\" >\r\n                                        <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"ItemCode\" [(ngModel)]=\"ItemCode\" placeholder=\"{{'ItemCode'|translate}}\"\r\n                                    (blur)=\"OnItemChange()\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"onItemlookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button style=\"padding: 0 6px;font-size:16px\" class=\"k-button k-primary btn separate-btn\" type=\"button\" (click)=\"viewSavedItems()\"\r\n                                        *ngIf=\"showitemlist\">\r\n                                        <i class=\"opti-icon-detail-view\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Name'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <span></span>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"form-group row\" *ngIf=\"showItemName\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Name'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"itemName\" [(ngModel)]=\"itemName\" [disabled]=true>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BinNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"BinNo\" [(ngModel)]=\"BinNo\" placeholder=\"{{'BinNo'|translate}}\" [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"!isNonTrack\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{batchNoPlaceholder}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"batchserno\" [(ngModel)]=\"batchserno\" placeholder=\"{{batchNoPlaceholder}}\"\r\n                                autocomplete=\"off\"\r\n                                    (blur)=\"OnLotChange()\">\r\n\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowBatachSerList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\" type=\"button\" (click)=\"showLotSerList()\" *ngIf=\"showbatchser\">\r\n                                        <i class=\"opti-icon-view-batch mr-1\"></i>{{batchSrBtn}}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'QtyOnHand'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm text-right\" name=\"QtyOnHand\" [(ngModel)]=\"QtyOnHand\" placeholder=\"{{'QtyOnHand'|translate}}\" [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'CountedQty'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='CountedQty' [(ngModel)]=\"CountedQty\" placeholder=\"{{'CountedQty'|translate}}\"\r\n                                    (blur)=\"onCountedQtyChanged()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" *ngIf=\"!isNonTrack\" (click)=\"onAddItemClick()\">\r\n                                        <span class=\"k-icon k-i-plus-outline mr-1\"></span>{{batchSrBtn}}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'UoM'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" name='UOM' [(ngModel)]=\"UOM\" placeholder=\"{{'UoM'|translate}}\" [disabled]=true>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Counted'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"opti_input-group-checkbox\">\r\n                                <input type=\"checkbox\" id=\"ch7\" name='isCounted' [(ngModel)]=\"isCounted\" class=\"k-checkbox\" checked />\r\n                                <label class=\"k-checkbox-label\" for=\"ch7\"></label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- static table added 09-05-2018 -->\r\n            <div class=\"row\" *ngIf=\"showSavedItems\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid [resizable]=\"true\" [pageSize]=\"10\" [pageable]=\"true\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                        [height]=gridHeight [selectable]=\"true\" [data]=\"ItemArray\" style=\"max-height:400px\" class=\"no-shadow\"\r\n                        #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{'DocNo'|translate}}</dt>\r\n                                    <dd>{{ dataItem.DocNo }}</dd>\r\n\r\n                                    <dt>{{'BinNo'|translate}}</dt>\r\n                                    <dd>{{ dataItem.BinNo }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'ItemCode'|translate}}\r\n                                        <button class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                                            <span class=\"k-icon k-i-delete\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.ItemCode }}</dd>\r\n\r\n                                    <dt>{{'ViewBatchSerial'|translate}}</dt>\r\n                                    <dd>\r\n                                        <button class=\"k-button k-primary simple-btn\" type=\"button\" (click)=\"ShowBatachSerListForClickRow(rowIndex, gridItem)\">\r\n                                            <i class=\"opti-icon-detail-view\"></i>\r\n                                        </button>\r\n                                    </dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"DocNo\" title=\"{{'DocNo'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"ItemCode\" title=\"{{'ItemCode'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"BinNo\" title=\"{{'BinNo'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Discontinued\" width=\"120\" title=\"{{'ViewBatchSerial'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button class=\"k-button k-primary simple-btn\" type=\"button\" (click)=\"ShowBatachSerListForClickRow(rowIndex, gridItem)\">\r\n                                    <i class=\"opti-icon-detail-view\"></i>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" width=\"60\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\" (click)=\"ItemListRowDeleteClick(rowIndex, gridItem)\">\r\n                                    <span class=\"k-icon k-i-delete\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n            <!-- static table added 09-05-2018 -->\r\n\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\" *ngIf=\"!showSavedItems\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"onSubmitClick()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"onAddItemClick()\">\r\n                    <span class=\"k-icon k-i-plus-outline\" role=\"presentation\"></span> {{'Item'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-Primary k-button btn-sm btn-icon-with-text\" (click)=\"onSaveClick()\">\r\n                    <span class=\"k-icon k-i-save\" role=\"presentation\"></span> {{'Save&Next'|translate}}</button>\r\n                <div class=\"clearfix mt-1 d-block d-sm-none\"></div>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\">\r\n                    <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                    <button type=\"button\" id=\"hiddenScanButtonPC\" style=\"visibility:hidden\" (click)=\"onHiddenScanClick()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                            SB </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\" *ngIf=\"showSavedItems\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"loadFistPage()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n<kendo-dialog [width]=\"750\" *ngIf=\"dialogOpened\" (close)=\"close('dialog')\" [minWidth]=\"250\" [width]=\"450\">\r\n    <kendo-dialog-titlebar>\r\n        Reported Quantities\r\n    </kendo-dialog-titlebar>\r\n    <p>{{ItemCode}}</p>\r\n    <kendo-grid [resizable]=\"true\" [pageSize]=\"10\" [pageable]=\"true\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n        [height]=gridHeight [selectable]=\"true\" [data]=\"BatchSerialArray\" style=\"max-height:370px\" class=\"no-shadow\" #gridItem>\r\n\r\n        <!-- grid for mobile start -->\r\n        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                <dl class=\"opti_mobile_grid_dl\">\r\n                    <dt>{{'Batch'|translate}}</dt>\r\n                    <dd>{{ dataItem.LotNo }}</dd>\r\n\r\n                    <dt>{{'CountedQty'|translate}}</dt>\r\n                    <dd>{{ dataItem.QtyCounted }}</dd>\r\n                </dl>\r\n                <dl class=\"opti_mobile_grid_dl\">\r\n                    <dt class=\"d-flex align-items-center\">{{batchSrBtn}}\r\n                        <button class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\" (click)=\"ViewLinesRowDeleteClick(rowIndex, gridItem)\">\r\n                            <span class=\"k-icon k-i-delete\"></span>\r\n                        </button>\r\n                    </dt>\r\n                    <dd>{{ dataItem.BinNo }}</dd>\r\n\r\n                    <dt>{{'QtyOnHand'|translate}}</dt>\r\n                    <dd>{{ dataItem.InWhsQty }}</dd>\r\n                </dl>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <!-- grid for mobile end -->\r\n\r\n        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNo\" title=\"{{'Batch'|translate}}\" width=\"60\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column media=\"(min-width: 768px)\" field=\"BinNo\" title=\"{{batchSrBtn}}\" width=\"250\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column media=\"(min-width: 768px)\" field=\"QtyCounted\" title=\"{{'CountedQty'|translate}}\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column media=\"(min-width: 768px)\" field=\"InWhsQty\" title=\"{{'QtyOnHand'|translate}}\" width=\"110\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Discontinued\" width=\"80\">\r\n            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                <button class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\" (click)=\"LotSerialDeleteClick(rowIndex, gridItem)\">\r\n                    <span class=\"k-icon k-i-delete\"></span>\r\n                </button>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n    </kendo-grid>\r\n    <kendo-dialog-actions class=\"text-right\">\r\n        <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"close('dialog')\">\r\n            <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>\r\n\r\n\r\n<span *ngIf=\"showLookupLoader\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/adjustments-counting/physical-count/physical-count.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/adjustments-counting/physical-count/physical-count.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkanVzdG1lbnRzLWNvdW50aW5nL3BoeXNpY2FsLWNvdW50L3BoeXNpY2FsLWNvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/adjustments-counting/physical-count/physical-count.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/adjustments-counting/physical-count/physical-count.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PhysicalCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalCountComponent", function() { return PhysicalCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_physicalcount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/physicalcount.service */ "./src/app/services/physicalcount.service.ts");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var PhysicalCountComponent = /** @class */ (function () {
    function PhysicalCountComponent(phycountService, commonservice, router, toastr, translate) {
        this.phycountService = phycountService;
        this.commonservice = commonservice;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.showLoader = false;
        this.showLookupLoader = false;
        this.DocNo = "";
        this.DocEntry = "";
        this.BinNo = "";
        this.SerialNo = "";
        this.CountedQty = "0";
        this.ItemTracking = "";
        this.isNonTrack = false;
        this.IsteamCount = "";
        this.batchserno = "";
        this.QtyOnHand = "0";
        this.showItemName = "";
        this.showConfirmDialog = false;
        this.SavedDocNoDetailArray = [];
        this.dialogMsg = "";
        this.yesButtonText = "";
        this.noButtonText = "";
        this.dialogFor = "";
        this.isCounted = false;
        this.isLotAdded = false;
        this.LotSerialQtycheck = 0;
        this.showSavedItems = false;
        this.showbatchser = false;
        this.showitemlist = false;
        // Kendo Dialog box
        this.dialogOpened = false;
        this.BatchSerialArray = [];
        this.ItemArray = [];
        this.ScanInputs = "";
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    PhysicalCountComponent.prototype.ngOnInit = function () {
        localStorage.setItem("PhysicalCountData", "");
        this.getPhysicalCountData();
    };
    PhysicalCountComponent.prototype.getPhysicalCountData = function () {
        var _this = this;
        this.showLoader = true;
        this.phycountService.getPhysicalCountDataView().subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = true;
                for (var i = 0; i < data.length; i++) {
                    data[i].InWhsQty = Number(data[i].InWhsQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
                }
                _this.serviceData = data;
                _this.lookupfor = "PhyCntItemList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                _this.onCancelClick();
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.toastr.error('', error);
        });
    };
    PhysicalCountComponent.prototype.onItemlookupClick = function () {
        var _this = this;
        this.showLoader = true;
        this.phycountService.getItemList(this.DocNo).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data.ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = true;
                _this.serviceData = data;
                _this.lookupfor = "showPhyCntItemsList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.ShowBatachSerList = function () {
        var _this = this;
        this.phycountService.ShowBILOTList(this.ItemCode, this.BinNo).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data.ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.length > 0) {
                    _this.showLookupLoader = true;
                    for (var i = 0; i < data.length; i++) {
                        data[i].TOTALQTY = Number(data[i].TOTALQTY).toFixed(Number(localStorage.getItem("DecimalPrecision")));
                    }
                    _this.serviceData = data;
                    _this.lookupfor = "ShowBatachSerList";
                }
                else {
                    _this.toastr.error('', _this.translate.instant("BinTransfer.NoData"));
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("BinTransfer.NoData"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.OnItemChange = function () {
        var _this = this;
        if (this.ItemCode == "" || this.ItemCode == undefined) {
            return;
        }
        this.showLoader = true;
        this.phycountService.getItemInfo(this.ItemCode, this.DocNo, this.DocEntry).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    _this.ItemCode = data[0].ITEMCODE;
                    _this.ItemName = data[0].ITEMNAME;
                    _this.UOM = data[0].UomCode;
                    _this.ItemTracking = data[0].TRACKING;
                    _this.batchserno = "";
                    _this.CheckTrackingandVisiblity();
                }
                else {
                    _this.toastr.error('', _this.translate.instant("GoodsIssue.INVALIDITEM"));
                    _this.ItemCode = "";
                    _this.ItemName = "";
                    _this.ItemTracking = "";
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("GoodsIssue.INVALIDITEM"));
                _this.ItemCode = "";
                _this.ItemName = "";
                _this.ItemTracking = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    PhysicalCountComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("addBatchSer"):
                    this.isLotAdded = true;
                    break;
                case ("DeleteItem"):
                    this.ItemListRowDelete();
                    break;
                case ("DeleteLot"):
                    this.LotSerialDelete();
                    break;
                case ("overwrite"):
                    this.LotSerialQtycheck = 2;
                    break;
                case ("SubmitAll"):
                    this.onSubmitClick();
                    break;
            }
        }
        else {
            if ($event.Status == "no") {
                switch ($event.From) {
                    case ("addBatchSer"):
                        this.isLotAdded = false;
                        break;
                    case ("DeleteItem"):
                        break;
                    case ("DeleteLot"):
                        break;
                    case ("overwrite"):
                        if (this.ItemTracking == "S") {
                            this.LotSerialQtycheck = 2;
                        }
                        else if (this.ItemTracking == "B") {
                            this.LotSerialQtycheck = 1;
                        }
                        break;
                }
            }
        }
    };
    PhysicalCountComponent.prototype.LotExistCheck = function () {
        if (this.ItemTracking == "S") {
            this.showDialog("addBatchSer", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("LotvalidSerial"));
            this.CountedQty = "1";
            this.formatCountedQty();
        }
        if (this.ItemTracking == "B") {
            this.showDialog("addBatchSer", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("LotvalidBatch"));
        }
    };
    PhysicalCountComponent.prototype.showDialog = function (dialogFor, yesbtn, nobtn, msg) {
        this.dialogFor = dialogFor;
        this.yesButtonText = yesbtn;
        this.noButtonText = nobtn;
        this.showConfirmDialog = true;
        this.dialogMsg = msg;
    };
    PhysicalCountComponent.prototype.OnLotChange = function () {
        var _this = this;
        if (this.batchserno == "" || this.batchserno == undefined) {
            return;
        }
        this.showLoader = true;
        this.phycountService.IslotExist(this.BinNo, this.ItemCode, this.batchserno).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length == "0") {
                    // isLotValid = false;
                    if (_this.ItemTracking != "N") {
                        _this.LotExistCheck();
                    }
                }
                else {
                    _this.batchserno = data[0].LOTNO;
                    _this.BinNo = data[0].BINNO;
                    // this.w = data[0].WHSCODE;
                    _this.ItemCode = data[0].ITEMCODE;
                    _this.ItemName = data[0].ITEMNAME;
                    _this.QtyOnHand = data[0].TOTALQTY;
                    _this.CountedQty = data[0].TOTALQTY;
                    _this.ItemTracking = data[0].TRACKING;
                    // EnableContainer = data[0].ENABLECONTAINER;
                    // SysNumber = data[0].SYSNUMBER;
                    // otxtUnitPrice.setValue(data[0].UnitPrice);
                    // otxtUnitPrice.setTextAlign(sap.ui.core.TextAlign.Right);
                    _this.CheckTrackingandVisiblity();
                    // isLotValid = true;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    PhysicalCountComponent.prototype.GetSavedDocNoDetails = function () {
        var _this = this;
        this.showLoader = true;
        this.phycountService.GetSavedDocNoDetails(this.DocNo, this.ItemCode, this.BinNo, this.IsteamCount).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data.ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                for (var i = 0; i < data.length; i++) {
                    if (data[i].OPTM_LOTSERQTY != null) {
                        data[i].OPTM_LOTSERQTY = data[i].OPTM_LOTSERQTY.toFixed(Number(localStorage.getItem("DecimalPrecision")));
                    }
                }
                _this.SavedDocNoDetailArray = data;
                if (_this.SavedDocNoDetailArray.length > 0) {
                    _this.ItemTracking = _this.SavedDocNoDetailArray[_this.SavedDocNoDetailArray.length - 1].Tracking;
                    _this.CountType = _this.SavedDocNoDetailArray[_this.SavedDocNoDetailArray.length - 1].CountType;
                    //      this.CountDate = this.SavedDocNoDetailArray[this.SavedDocNoDetailArray.length - 1].CountDate;
                    _this.UOM = _this.SavedDocNoDetailArray[_this.SavedDocNoDetailArray.length - 1].UomCode;
                    _this.CountedQty = _this.SavedDocNoDetailArray[_this.SavedDocNoDetailArray.length - 1].Qty;
                    if (_this.SavedDocNoDetailArray.length == 1) {
                        _this.QtyOnHand = _this.SavedDocNoDetailArray[_this.SavedDocNoDetailArray.length - 1].Qty;
                    }
                    _this.formatCountedQty();
                    _this.formatOnHandQty();
                    _this.CheckTrackingandVisiblity();
                }
                _this.GetDocNoDetails();
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.GetDocNoDetails = function () {
        var _this = this;
        this.phycountService.GetDocNoDetails(this.DocNo, this.CountType, this.IsteamCount).subscribe(function (data) {
            if (data != undefined) {
                _this.DocNoDetails = data;
                var index = 0;
                for (var i = 0; i < _this.DocNoDetails.length; i++) {
                    if (_this.DocNoDetails[i].ItemCode == _this.ItemCode) {
                        index = i;
                    }
                }
                _this.ItemTracking = _this.DocNoDetails[index].Tracking;
                _this.CountType = _this.DocNoDetails[index].CountType;
                _this.ItemName = _this.DocNoDetails[index].ItemDesc;
                _this.UOM = _this.DocNoDetails[index].UomCode;
                _this.CheckTrackingandVisiblity();
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "PhyCntItemList") {
            this.DocNo = $event[0];
            this.DocEntry = $event[1];
            this.CountDate = $event[4];
            this.ItemCode = $event[2];
            this.BinNo = $event[3];
            this.QtyOnHand = $event[5];
            this.IsteamCount = $event[6];
            this.GetSavedDocNoDetails();
        }
        else if (this.lookupfor == "showPhyCntItemsList") {
            this.ItemCode = $event[0];
            this.ItemName = $event[1];
            this.BinNo = $event[3];
            this.ItemTracking = $event[2];
            this.UOM = $event[4];
            this.CountedQty = "0";
            this.QtyOnHand = "0";
            this.batchserno = "";
            this.CheckTrackingandVisiblity();
        }
        else if (this.lookupfor == "ShowBatachSerList") {
            this.batchserno = $event[0];
            this.ItemCode = $event[2];
            this.ItemName = $event[3];
            this.ItemTracking = $event[11];
            // this.UOM = $event[19];
            this.CountedQty = $event[7];
            this.QtyOnHand = $event[7];
            this.CheckTrackingandVisiblity();
        }
        this.formatCountedQty();
        this.formatOnHandQty();
    };
    PhysicalCountComponent.prototype.formatCountedQty = function () {
        this.CountedQty = Number(this.CountedQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
    };
    PhysicalCountComponent.prototype.formatOnHandQty = function () {
        this.QtyOnHand = Number(this.QtyOnHand).toFixed(Number(localStorage.getItem("DecimalPrecision")));
    };
    PhysicalCountComponent.prototype.CheckTrackingandVisiblity = function () {
        var _this = this;
        if (this.ItemTracking == "B") {
            this.isNonTrack = false;
            this.batchNoPlaceholder = this.translate.instant("BatchNo");
            this.batchSrBtn = this.translate.instant("Batch");
        }
        else if (this.ItemTracking == "S") {
            this.isNonTrack = false;
            this.batchNoPlaceholder = this.translate.instant("SerialNo");
            this.batchSrBtn = this.translate.instant("Serial");
        }
        else if (this.ItemTracking == "N") {
            this.isNonTrack = true;
        }
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oAddPhysicalCountData.Detail = [];
            oAddPhysicalCountData.LotSerial = [];
            oAddPhysicalCountData.ItemList = [];
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        var result = oAddPhysicalCountData.LotSerial.find(function (element) { return element.ItemCode == _this.ItemCode; });
        if (result != undefined) {
            this.showbatchser = true;
        }
        else {
            this.showbatchser = false;
        }
    };
    PhysicalCountComponent.prototype.onCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    PhysicalCountComponent.prototype.NextRecord = function () {
        var isBinAdd = 0;
        var TotalSave = 0;
        var nextIndex;
        var DocDataLength = 0;
        var isDocAdd = 0;
        if (this.DocNoDetails != null) {
            if (this.DocNoDetails.length > 0) {
                var oAddPhysicalCountData = {};
                var dataModel = localStorage.getItem("PhysicalCountData");
                if (dataModel == null || dataModel == undefined || dataModel == "") {
                    oAddPhysicalCountData.Detail = [];
                    oAddPhysicalCountData.LotSerial = [];
                    oAddPhysicalCountData.ItemList = [];
                }
                else {
                    oAddPhysicalCountData = JSON.parse(dataModel);
                }
                // oPhysicalCountModel.Detail.sort(function (a, b) { return a.RowOrder - b.RowOrder });
                for (var iCountindex = 0; iCountindex < this.DocNoDetails.length; iCountindex++) {
                    if (this.DocNo == this.DocNoDetails[iCountindex].DocNum) {
                        DocDataLength++;
                    }
                }
                for (var index = 0; index < oAddPhysicalCountData.Detail.length; index++) {
                    for (var iPhyindex = 0; iPhyindex < this.DocNoDetails.length; iPhyindex++) {
                        if (oAddPhysicalCountData.Detail[index].ItemCode == this.DocNoDetails[iPhyindex].ItemCode && oAddPhysicalCountData.Detail[index].DocNo == this.DocNoDetails[iPhyindex].DocNum && oAddPhysicalCountData.Detail[index].BinNo == this.DocNoDetails[iPhyindex].BinCode) {
                            TotalSave++;
                            nextIndex = iPhyindex + 1;
                            if (nextIndex == this.DocNoDetails.length) {
                                nextIndex = 0;
                            }
                        }
                    }
                }
                if (TotalSave == DocDataLength) {
                    this.showDialog("SubmitAll", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("PhysicalCount.SubmitSaveLines"));
                }
                else {
                    this.ItemCode = this.DocNoDetails[nextIndex].ItemCode;
                    this.ItemName = this.DocNoDetails[nextIndex].ItemName;
                    this.BinNo = this.DocNoDetails[nextIndex].BinCode;
                    this.UOM = this.DocNoDetails[nextIndex].UomCode;
                    this.QtyOnHand = this.DocNoDetails[nextIndex].InWhsQty;
                    this.CountedQty = "0";
                    this.ItemTracking = this.DocNoDetails[nextIndex].Tracking;
                    this.formatCountedQty();
                    this.formatOnHandQty();
                    this.CheckTrackingandVisiblity();
                }
            }
        }
    };
    PhysicalCountComponent.prototype.SavePhysicalCountData = function (oAddPhysicalCountData) {
        var _this = this;
        this.showLoader = true;
        this.phycountService.SavePhysicalCountData(oAddPhysicalCountData).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data == "True") {
                    _this.toastr.success('', _this.translate.instant("PhysicalCount.DataSavedSuccessfully"));
                    _this.QtyOnHand = "0";
                    _this.CountedQty = "0";
                    _this.formatCountedQty();
                    _this.formatOnHandQty();
                    _this.NextRecord();
                }
                else {
                    _this.toastr.success('', _this.translate.instant("PhysicalCount.NoDataSaved"));
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.SubmitPhysicalCount = function (oAddPhysicalCountData) {
        var _this = this;
        this.showLoader = true;
        this.phycountService.SubmitPhysicalCount(oAddPhysicalCountData).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    //--------------------------------------Function to Check for the Licence---------------------------------------
                    if (data[0].ErrorMsg != undefined) {
                        if (data[0].ErrorMsg.length > 0) {
                            if (data[0].ErrorMsg == "7001") {
                                _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                                return;
                            }
                        }
                    }
                    if (data[0].ErrorMsg == "" && data[0].Successmsg != "") {
                        _this.toastr.success('', _this.translate.instant("DocUpdatedSucessfullyMsg") + " " + _this.DocEntry);
                        _this.clearData();
                        _this.getPhysicalCountData();
                        return;
                    }
                    else {
                        if (data.oData[0].ErrorMsg.startsWith("env:Sender-50021470000498 -") == true) {
                            data.oData[0].ErrorMsg = data.oData[0].ErrorMsg.split("env:Sender-50021470000498 -")[1];
                            data.oData[0].ErrorMsg = data.oData[0].ErrorMsg.split("[INC1.ItemCode]")[0];
                        }
                        _this.toastr.error('', data[0].ErrorMsg);
                        return;
                    }
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent.prototype.PreparePhysicalCountData = function (oAddPhysicalCountData) {
        var index = 0;
        for (var i = 0; i < this.DocNoDetails.length; i++) {
            if (this.DocNoDetails[i].ItemCode == this.ItemCode) {
                index = i;
            }
        }
        var isDetailExist = false;
        for (var iAdd = 0; iAdd < oAddPhysicalCountData.Detail.length; iAdd++) {
            if (oAddPhysicalCountData.Detail[iAdd].ItemCode == this.ItemCode && oAddPhysicalCountData.Detail[iAdd].DocNo == this.DocNo && oAddPhysicalCountData.Detail[iAdd].BinNo == this.BinNo) {
                if (oAddPhysicalCountData.Detail[iAdd].Tracking == "B" || oAddPhysicalCountData.Detail[iAdd].Tracking == "S") {
                    if ((oAddPhysicalCountData.Detail[iAdd].LotNo).toUpperCase() != this.batchserno.toUpperCase()) {
                    }
                    else {
                        oAddPhysicalCountData.Detail[iAdd].QtyCounted = this.CountedQty;
                    }
                }
                else {
                    oAddPhysicalCountData.Detail[iAdd].QtyCounted = this.CountedQty;
                }
                oAddPhysicalCountData.Detail[iAdd].Counted = this.isCounted == false ? "N" : "Y";
                isDetailExist = true;
            }
        }
        if (!isDetailExist) {
            oAddPhysicalCountData.Detail.push({
                DocEntry: "" + this.DocEntry,
                DiServerToken: localStorage.getItem("Token"),
                DocNo: this.DocNo,
                CompanyUsername: localStorage.getItem("UserId"),
                // CompanyPassword: "",
                CompanyDBId: localStorage.getItem("CompID"),
                LotNo: this.batchserno,
                ItemCode: this.ItemCode,
                ItemName: this.ItemName,
                QtyCounted: this.CountedQty,
                BinNo: this.BinNo,
                CountType: this.DocNoDetails[index].CountType,
                InWhsQty: Number(this.QtyOnHand),
                UOM: this.UOM,
                Counted: this.isCounted == false ? "N" : "Y",
                CountDate: this.DocNoDetails[index].CountDate,
                LineStatus: this.DocNoDetails[index].LineStatus,
                LineNum: this.DocNoDetails[index].LineNum,
                RowOrder: this.DocNoDetails[index].RowOrder,
                Time: this.DocNoDetails[index].Time,
                BinEntry: this.DocNoDetails[index].BinEntry,
                CounterId: this.DocNoDetails[index].CounterId,
                CounteName: this.DocNoDetails[index].CounteName,
                CounterNum: this.DocNoDetails[index].CounterNum,
                VisOrder: this.DocNoDetails[index].VisOrder,
                Taker1Type: this.DocNoDetails[index].Taker1Type,
                Tracking: this.ItemTracking,
                WhsCode: localStorage.getItem("whseId"),
                isSaved: "N",
                TeamCount: this.DocNoDetails[index].TeamCount,
                IsTeamCount: this.IsteamCount,
                IndvCount: this.DocNoDetails[index].IndvCount,
                Username: localStorage.getItem("UserId"),
                GUID: localStorage.getItem("GUID"),
                UsernameForLic: localStorage.getItem("UserId"),
            });
        }
        var isLotSerExist = false;
        for (var iAddLot = 0; iAddLot < oAddPhysicalCountData.LotSerial.length; iAddLot++) {
            if (oAddPhysicalCountData.LotSerial[iAddLot].LotNo.toUpperCase() == this.batchserno.toUpperCase() && oAddPhysicalCountData.LotSerial[iAddLot].ItemCode == this.ItemCode &&
                oAddPhysicalCountData.LotSerial[iAddLot].DocNo == this.DocNo) {
                isLotSerExist = true;
                if (this.LotSerialQtycheck == 1) {
                    oAddPhysicalCountData.LotSerial[iAddLot].QtyCounted = (Number(this.CountedQty) + Number(oAddPhysicalCountData.LotSerial[iAddLot].QtyCounted)).toFixed(Number(localStorage.getItem("DecimalPrecision")));
                    this.LotSerialQtycheck = 0;
                }
                if (this.LotSerialQtycheck == 2) {
                    oAddPhysicalCountData.LotSerial[iAddLot].QtyCounted = this.CountedQty;
                    this.LotSerialQtycheck = 0;
                }
            }
        }
        if (!isLotSerExist) {
            oAddPhysicalCountData.LotSerial.push({
                DocEntry: "" + this.DocEntry,
                DocNo: this.DocNo,
                CompanyUsername: localStorage.getItem("UserId"),
                // CompanyPassword: "",
                CompanyDBId: localStorage.getItem("CompID"),
                LotNo: this.batchserno,
                InWhsQty: this.QtyOnHand,
                ItemCode: this.ItemCode,
                ItemName: this.ItemName,
                QtyCounted: this.CountedQty,
                BinNo: this.BinNo,
                CountType: this.CountType,
                Tracking: this.ItemTracking,
                WhsCode: localStorage.getItem("whseId"),
                Username: localStorage.getItem("UserId"),
                GUID: localStorage.getItem("GUID"),
                UsernameForLic: localStorage.getItem("UserId")
            });
        }
        if (oAddPhysicalCountData.Detail.length > 0) {
            for (var iDetail = 0; iDetail < oAddPhysicalCountData.Detail.length; iDetail++) {
                var totalQuantity = 0;
                var totalNoneQuantity = 0;
                for (var iLotSerial = 0; iLotSerial < oAddPhysicalCountData.LotSerial.length; iLotSerial++) {
                    if (oAddPhysicalCountData.Detail[iDetail].ItemCode == oAddPhysicalCountData.LotSerial[iLotSerial].ItemCode && oAddPhysicalCountData.Detail[iDetail].DocNo == oAddPhysicalCountData.LotSerial[iLotSerial].DocNo && oAddPhysicalCountData.Detail[iDetail].BinNo == oAddPhysicalCountData.LotSerial[iLotSerial].BinNo) {
                        if (oAddPhysicalCountData.Detail[iDetail].Tracking == "B" || oAddPhysicalCountData.Detail[iDetail].Tracking == "S") {
                            totalQuantity = totalQuantity + parseFloat(oAddPhysicalCountData.LotSerial[iLotSerial].QtyCounted);
                            oAddPhysicalCountData.Detail[iDetail].QtyCounted = totalQuantity;
                        }
                        if (oAddPhysicalCountData.Detail[iDetail].Tracking == "N") {
                            totalNoneQuantity = totalNoneQuantity + parseFloat(oAddPhysicalCountData.LotSerial[iLotSerial].QtyCounted);
                            oAddPhysicalCountData.Detail[iDetail].QtyCounted = totalNoneQuantity;
                        }
                    }
                }
            }
        }
        return oAddPhysicalCountData;
    };
    PhysicalCountComponent.prototype.onCountedQtyChanged = function () {
        var _this = this;
        this.LotSerialQtycheck = 0;
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            this.formatCountedQty();
            return;
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        var result = oAddPhysicalCountData.LotSerial.find(function (element) { return element.ItemCode == _this.ItemCode && element.DocNo == _this.DocNo && element.LotNo.toUpperCase() == _this.batchserno.toUpperCase(); });
        if (result != undefined) {
            if (this.ItemTracking == "S") {
                this.showDialog("overwrite", this.translate.instant("PhysicalCount.Overwrite"), "", this.translate.instant("PhysicalCount.SerialQtyChangeMsg"));
            }
            if (this.ItemTracking == "B") {
                this.showDialog("overwrite", this.translate.instant("PhysicalCount.Overwrite"), "add", this.translate.instant("PhysicalCount.BatchQtyChangeMsg"));
            }
        }
        this.formatCountedQty();
    };
    PhysicalCountComponent.prototype.onSaveClick = function () {
        if (this.ItemTracking != "N") {
            if (this.batchserno == undefined || this.batchserno == "" || this.batchserno == null) {
                if (this.ItemTracking == "S") {
                    this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotcannotbeblank"));
                }
                else {
                    this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotcannotbeblank"));
                }
                return;
            }
        }
        if (!this.isLotAdded) {
            this.LotExistCheck();
            return;
        }
        if (!this.isLotAdded && this.ItemTracking != "N") {
            if (this.ItemTracking == "S") {
                this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotisnotadded"));
            }
            else {
                this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotisnotadded"));
            }
            return;
        }
        if (this.ItemTracking == "S") {
            this.CountedQty = "1";
            this.formatCountedQty();
        }
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oAddPhysicalCountData.Detail = [];
            oAddPhysicalCountData.LotSerial = [];
            oAddPhysicalCountData.ItemList = [];
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        oAddPhysicalCountData = this.PreparePhysicalCountData(oAddPhysicalCountData);
        localStorage.setItem("PhysicalCountData", JSON.stringify(oAddPhysicalCountData));
        this.SavePhysicalCountData(oAddPhysicalCountData);
    };
    PhysicalCountComponent.prototype.onAddItemClick = function () {
        if (this.ItemTracking != "N") {
            if (this.batchserno == undefined || this.batchserno == "" || this.batchserno == null) {
                if (this.ItemTracking == "S") {
                    this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotcannotbeblank"));
                }
                else {
                    this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotcannotbeblank"));
                }
                return;
            }
        }
        if (!this.isLotAdded) {
            this.LotExistCheck();
            return;
        }
        if (!this.isLotAdded && this.ItemTracking != "N") {
            if (this.ItemTracking == "S") {
                this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotisnotadded"));
            }
            else {
                this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotisnotadded"));
            }
            return;
        }
        if (this.ItemTracking == "S") {
            this.CountedQty = "1";
            this.formatCountedQty();
        }
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oAddPhysicalCountData.Detail = [];
            oAddPhysicalCountData.LotSerial = [];
            oAddPhysicalCountData.ItemList = [];
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        oAddPhysicalCountData = this.PreparePhysicalCountData(oAddPhysicalCountData);
        localStorage.setItem("PhysicalCountData", JSON.stringify(oAddPhysicalCountData));
        if (oAddPhysicalCountData.LotSerial.length > 0) {
            this.showbatchser = true;
            this.showitemlist = true;
        }
        else {
            this.showbatchser = false;
            this.showitemlist = false;
        }
        this.toastr.success('', this.translate.instant("PhysicalCount.Operation"));
        this.batchserno = "";
        this.CountedQty = "0";
        this.formatCountedQty();
    };
    PhysicalCountComponent.prototype.close = function (component) {
        this[component + 'Opened'] = false;
    };
    PhysicalCountComponent.prototype.open = function (component) {
        this[component + 'Opened'] = true;
    };
    PhysicalCountComponent.prototype.action = function (status) {
        this.dialogOpened = false;
    };
    PhysicalCountComponent.prototype.showLotSerList = function () {
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        this.dialogOpened = true;
        this.BatchSerialArray = [];
        for (var iLotSerial = 0; iLotSerial < oAddPhysicalCountData.LotSerial.length; iLotSerial++) {
            if (this.ItemCode == oAddPhysicalCountData.LotSerial[iLotSerial].ItemCode && this.DocNo == oAddPhysicalCountData.LotSerial[iLotSerial].DocNo && this.BinNo == oAddPhysicalCountData.LotSerial[iLotSerial].BinNo) {
                this.BatchSerialArray.push(oAddPhysicalCountData.LotSerial[iLotSerial]);
            }
        }
    };
    PhysicalCountComponent.prototype.viewSavedItems = function () {
        this.showSavedItems = true;
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        this.ItemArray = oAddPhysicalCountData.Detail;
    };
    PhysicalCountComponent.prototype.loadFistPage = function () {
        this.showSavedItems = false;
    };
    PhysicalCountComponent.prototype.ShowBatachSerListForClickRow = function (rowindex, gridData) {
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        this.dialogOpened = true;
        this.BatchSerialArray = [];
        for (var iLotSerial = 0; iLotSerial < oAddPhysicalCountData.LotSerial.length; iLotSerial++) {
            if (oAddPhysicalCountData.Detail[rowindex].ItemCode == oAddPhysicalCountData.LotSerial[iLotSerial].ItemCode && oAddPhysicalCountData.Detail[rowindex].DocNo == oAddPhysicalCountData.LotSerial[iLotSerial].DocNo && oAddPhysicalCountData.Detail[rowindex].BinNo == oAddPhysicalCountData.LotSerial[iLotSerial].BinNo) {
                this.BatchSerialArray.push(oAddPhysicalCountData.LotSerial[iLotSerial]);
            }
        }
    };
    PhysicalCountComponent.prototype.onSubmitClick = function () {
        var _this = this;
        if (this.ItemTracking != "N") {
            if (this.batchserno == undefined || this.batchserno == "" || this.batchserno == null) {
                if (this.ItemTracking == "S") {
                    this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotcannotbeblank"));
                }
                else {
                    this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotcannotbeblank"));
                }
                return;
            }
        }
        if (!this.isLotAdded) {
            this.LotExistCheck();
            return;
        }
        if (!this.isLotAdded && this.ItemTracking != "N") {
            if (this.ItemTracking == "S") {
                this.toastr.error('', this.translate.instant("PhysicalCount.SerialLotisnotadded"));
            }
            else {
                this.toastr.error('', this.translate.instant("PhysicalCount.BatchLotisnotadded"));
            }
            return;
        }
        if (this.ItemTracking == "S") {
            this.CountedQty = "1";
            this.formatCountedQty();
        }
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oAddPhysicalCountData.Detail = [];
            oAddPhysicalCountData.LotSerial = [];
            oAddPhysicalCountData.ItemList = [];
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        oAddPhysicalCountData = this.PreparePhysicalCountData(oAddPhysicalCountData);
        for (var iCopy = 0; iCopy < this.DocNoDetails.length; iCopy++) {
            var result = oAddPhysicalCountData.Detail.find(function (element) { return element.ItemCode == _this.DocNoDetails[iCopy].ItemCode && element.DocNo == _this.DocNoDetails[iCopy].DocNum; });
            if (result == undefined) {
                oAddPhysicalCountData.ItemList.push({
                    ItemCode: this.DocNoDetails[iCopy].ItemCode,
                    Counted: this.DocNoDetails[iCopy].Counted,
                    LineNum: this.DocNoDetails[iCopy].LineNum,
                    IsTeamCount: this.DocNoDetails[iCopy].TeamCount == 0 ? "N" : "Y"
                });
            }
        }
        this.SubmitPhysicalCount(oAddPhysicalCountData);
    };
    PhysicalCountComponent.prototype.LotSerialDeleteClick = function (rowindex, gridData) {
        this.gridData = gridData;
        this.rowindex = rowindex;
        this.showDialog("DeleteLot", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("DeleteRecordsMsg"));
    };
    PhysicalCountComponent.prototype.LotSerialDelete = function () {
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        for (var iLotSerial = 0; iLotSerial < oAddPhysicalCountData.LotSerial.length; iLotSerial++) {
            if (this.BatchSerialArray[this.rowindex].ItemCode == oAddPhysicalCountData.LotSerial[iLotSerial].ItemCode && this.BatchSerialArray[this.rowindex].DocNo == oAddPhysicalCountData.LotSerial[iLotSerial].DocNo && this.BatchSerialArray[this.rowindex].BinNo == oAddPhysicalCountData.LotSerial[iLotSerial].BinNo && this.BatchSerialArray[this.rowindex].LotNo == oAddPhysicalCountData.LotSerial[iLotSerial].LotNo) {
                oAddPhysicalCountData.LotSerial.splice(iLotSerial, 1);
            }
        }
        this.BatchSerialArray.splice(this.rowindex, 1);
        this.gridData.data = this.BatchSerialArray;
        localStorage.setItem("PhysicalCountData", JSON.stringify(oAddPhysicalCountData));
    };
    PhysicalCountComponent.prototype.ItemListRowDeleteClick = function (rowindex, gridData) {
        this.gridData = gridData;
        this.rowindex = rowindex;
        this.showDialog("DeleteItem", this.translate.instant("yes"), this.translate.instant("no"), this.translate.instant("DeleteRecordsMsg"));
    };
    PhysicalCountComponent.prototype.ItemListRowDelete = function () {
        var oAddPhysicalCountData = {};
        var dataModel = localStorage.getItem("PhysicalCountData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            oAddPhysicalCountData = JSON.parse(dataModel);
        }
        for (var iAdd = 0; iAdd < oAddPhysicalCountData.Detail.length; iAdd++) {
            if (oAddPhysicalCountData.Detail[iAdd].ItemCode == this.ItemArray[this.rowindex].ItemCode && oAddPhysicalCountData.Detail[iAdd].DocNo == this.ItemArray[this.rowindex].DocNo && oAddPhysicalCountData.Detail[iAdd].BinNo == this.ItemArray[this.rowindex].BinNo) {
                oAddPhysicalCountData.Detail.splice(iAdd, 1);
            }
        }
        for (var iLotSerial = 0; iLotSerial < oAddPhysicalCountData.LotSerial.length; iLotSerial++) {
            if (this.ItemArray[this.rowindex].ItemCode == oAddPhysicalCountData.LotSerial[iLotSerial].ItemCode && this.ItemArray[this.rowindex].DocNo == oAddPhysicalCountData.LotSerial[iLotSerial].DocNo && this.ItemArray[this.rowindex].BinNo == oAddPhysicalCountData.LotSerial[iLotSerial].BinNo) {
                oAddPhysicalCountData.LotSerial.splice(iLotSerial, 1);
                iLotSerial = -1;
            }
        }
        this.ItemArray.splice(this.rowindex, 1);
        this.gridData.data = this.ItemArray;
        localStorage.setItem("PhysicalCountData", JSON.stringify(oAddPhysicalCountData));
    };
    PhysicalCountComponent.prototype.clearData = function () {
        localStorage.setItem("PhysicalCountData", "");
        // showLoader: boolean = false;
        // showLookupLoader: boolean = false;
        // serviceData: any[];
        this.lookupfor = "";
        this.DocNo = "";
        this.DocEntry = "";
        this.CountDate = "";
        this.ItemCode = "";
        this.ItemName = "";
        this.BinNo = "";
        this.SerialNo = "";
        this.CountedQty = "0";
        // UOM: string;
        // ItemTracking = "";
        // batchNoPlaceholder: string;
        // batchSrBtn: string;
        // isNonTrack: boolean = false;
        // IsteamCount: string = "";
        this.batchserno = "";
        // QtyOnHand = "0";
        // showItemName = "";
        // showConfirmDialog: boolean = false;
        // SavedDocNoDetailArray: any[] = [];
        // dialogMsg = ""
        // yesButtonText = "";
        // noButtonText = "";
        // dialogFor = "";
        // isCounted: boolean = false;
        // CountType: string;
        // DocNoDetails: any;
        // isLotAdded: boolean = false;
        // LotSerialQtycheck: Number = 0;
        // showSavedItems = false;
        this.showbatchser = false;
        this.showitemlist = false;
        // // Kendo Dialog box
        // public dialogOpened = false;
        // BatchSerialArray: any = [];
        // ItemArray: any = [];
    };
    //   SetQRDataInGrid (result) {
    //     oCurrentController.OnGS1ScanItem(result);
    //     otxtScan.focus();
    // }
    // onScanQRCode () {
    //     qrcode.callback = oCurrentController.SetQRDataInGrid;
    //     piQRCodeUsed = 1;
    //     $("input[type=file]").click();
    //     $("input[type=file]").val("");
    // }
    PhysicalCountComponent.prototype.onHiddenScanClick = function () {
        this.onScanCodeChange();
    };
    PhysicalCountComponent.prototype.onScanPC = function () {
        //alert("scan click");
    };
    PhysicalCountComponent.prototype.onScanCodeChange = function () {
        this.onGS1ItemScan();
    };
    PhysicalCountComponent.prototype.onGS1ItemScan = function () {
        var _this = this;
        var inputValue = document.getElementById('scanInputFieldPC').value;
        if (inputValue.length > 0) {
            this.ScanInputs = inputValue;
        }
        // alert("at onGS1ItemScan value:: "+this.ScanInputs);
        if (this.ScanInputs != null && this.ScanInputs != undefined &&
            this.ScanInputs != "" && this.ScanInputs != "error decoding QR Code") {
        }
        else {
            // if any message is required to show then show.
            this.ScanInputs = "";
            return;
        }
        var piManualOrSingleDimentionBarcode = 0;
        this.commonservice.checkAndScanCode("", this.ScanInputs).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Error != null) {
                        piManualOrSingleDimentionBarcode = 1;
                        _this.toastr.error('', data[0].Error); //this.translate.instant("InvalidItemCode"));
                        _this.ScanInputs = "";
                        return;
                    }
                    else {
                        _this.ScanInputs = data[0].Value;
                    }
                    if (piManualOrSingleDimentionBarcode == 0) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Key == '10' || data[i].Key == '21' || data[i].Key == '23') {
                                _this.batchserno = data[i].Value;
                            }
                            if (data[i].Key == '30' || data[i].Key == '310' ||
                                data[i].Key == '315' || data[i].Key == '316' || data[i].Key == '320') {
                                if (_this.ItemTracking == "S") {
                                    _this.CountedQty = "1";
                                }
                                else {
                                    _this.CountedQty = data[i].Value;
                                }
                                _this.formatCountedQty();
                            }
                        }
                    }
                }
                if (_this.ScanInputs != "error decoding QR Code") {
                    // this.OnItemChange();
                    //if (oFCModel.Tracking != "N") {
                    //    oCurrentController.OnLotChange();
                    //}
                    // ScanLotChange = 1;
                }
                else {
                    var psMsg;
                    if (_this.ScanInputs == "error decoding QR Code") {
                        psMsg = "Cannot read QC Code, please scan again";
                    }
                    else {
                        psMsg = _this.ScanInputs + ", Please scan again.";
                    }
                    _this.ScanInputs = "";
                    _this.toastr.error('', psMsg);
                }
                // $("input[type=file]").val("");
                // otxtScan.setValue();
            }
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    PhysicalCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-physical-count',
            template: __webpack_require__(/*! ./physical-count.component.html */ "./src/app/adjustments-counting/physical-count/physical-count.component.html"),
            styles: [__webpack_require__(/*! ./physical-count.component.scss */ "./src/app/adjustments-counting/physical-count/physical-count.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_physicalcount_service__WEBPACK_IMPORTED_MODULE_3__["PhysicalcountService"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], PhysicalCountComponent);
    return PhysicalCountComponent;
}());



/***/ }),

/***/ "./src/app/services/physicalcount.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/physicalcount.service.ts ***!
  \***************************************************/
/*! exports provided: PhysicalcountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalcountService", function() { return PhysicalcountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/outbound/request-model */ "./src/app/models/outbound/request-model.ts");




var PhysicalcountService = /** @class */ (function () {
    function PhysicalcountService(httpclient) {
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
    PhysicalcountService.prototype.getPhysicalCountDataView = function () {
        var jObject = {
            DeliveryToken: JSON.stringify([{
                    CompanyDBId: localStorage.getItem("CompID"),
                    WhsCode: localStorage.getItem("whseId"),
                    User: localStorage.getItem("UserId")
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetPhysicalCountDataView", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.getItemList = function (docNo) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), DocNum: docNo, Warehouse: localStorage.getItem("whseId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetItemList", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.GetSavedDocNoDetails = function (DocEntry, ItemCode, Bin, IsTeamCount) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), DocEntry: DocEntry, ItemCode: ItemCode, Bin: Bin, User: localStorage.getItem("UserId"), IsTeamCount: IsTeamCount }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetSavedDocNoDetails", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.ShowBILOTList = function (itemCode, Bin) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), BINNO: Bin, ITEMCODE: itemCode, DOCNUM: '', User: localStorage.getItem("UserId") }]) };
        if (itemCode == "" && Bin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListWithoutBinNItemCode", jObject, this.httpOptions);
        }
        else if (itemCode != "" && Bin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListBinForPallet", jObject, this.httpOptions);
        }
        else if (itemCode != "" && Bin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListWithoutBinForPallet", jObject, this.httpOptions);
        }
        else if (itemCode == "" && Bin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotListBinWithoutItemCode", jObject, this.httpOptions);
        }
    };
    PhysicalcountService.prototype.IslotExist = function (bin, itemCode, lot) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"), BINNO: bin, ITEMCODE: itemCode, LOTNO: lot, DOCNUM: '' }]) };
        if (itemCode == "" && bin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotWithoutBinNItemCode", jObject, this.httpOptions);
        }
        else if (itemCode != "" && bin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/CheckLotValid", jObject, this.httpOptions);
        }
        else if (itemCode != "" && bin == "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotWithoutBinForPallet", jObject, this.httpOptions);
        }
        else if (itemCode == "" && bin != "") {
            return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotBinWithoutItemCode", jObject, this.httpOptions);
        }
    };
    PhysicalcountService.prototype.getItemInfo = function (itemCode, docNo, docEntry) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDbName: localStorage.getItem("CompID"), ITEMCODE: itemCode, WHSCODE: localStorage.getItem("whseId"), DocNo: docNo, DocEntry: docEntry }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetItemValidate", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.SavePhysicalCountData = function (oAddPhysicalCountData) {
        var jObject = { DeliveryToken: JSON.stringify(oAddPhysicalCountData) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/SavePhysicalCountData", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.SubmitPhysicalCount = function (oAddPhysicalCountData) {
        var jObject = { DeliveryToken: JSON.stringify(oAddPhysicalCountData) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/SubmitPhysicalCount", jObject, this.httpOptions);
    };
    PhysicalcountService.prototype.GetDocNoDetails = function (DocNum, CountType, IsTeamCount) {
        var jObject = { DeliveryToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), DocNum: DocNum, CountType: CountType, User: localStorage.getItem("UserId"), IsTeamCount: IsTeamCount }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetDocNoDetails", jObject, this.httpOptions);
    };
    /**
     * check whs is valid or not.
     * @param whsCode
     */
    PhysicalcountService.prototype.isWHSExists = function (whsCode) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: whsCode }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsWhsExist", jObject, this.httpOptions);
    };
    /**
     * check and scan code.
     * @param whsCode
     */
    PhysicalcountService.prototype.checkAndScanCode = function (vendCode, scanInputString) {
        var jObject = { Gs1Token: JSON.stringify([{ Vsvendorid: vendCode, StrScan: scanInputString, CompanyDBId: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Gs1/GS1SETUP", jObject, this.httpOptions);
    };
    /**
    * This API method will return base64 string for pdf format for print.
    * @param item
    * @param binNo
    * @param noOfCopies
    */
    PhysicalcountService.prototype.printingServiceForSubmitGRPO = function (psReceiptNo) {
        var jObject = {
            PrintingObject: JSON.stringify([{
                    CompanyDBId: localStorage.getItem("CompID"),
                    USERID: localStorage.getItem("UserId"), RPTID: 6, DOCNO: psReceiptNo,
                    GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId")
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/WMSPrintingService", jObject, this.httpOptions);
    };
    PhysicalcountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PhysicalcountService);
    return PhysicalcountService;
}());



/***/ })

}]);
//# sourceMappingURL=adjustments-counting-adjustments-counting-module.js.map