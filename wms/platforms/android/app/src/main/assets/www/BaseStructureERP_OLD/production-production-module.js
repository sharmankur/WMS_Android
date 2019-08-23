(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["production-production-module"],{

/***/ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar \">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'DeleiveryForSO'|translate}}: 54\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"selectedItems\" [resizable]=\"true\" [pageSize]=\"50\"\r\n                        [pageable]=\"false\" [sortable]=\"true\" [selectable]=\"true\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl w-100\">\r\n                                    <dt>{{'ItemCode'|translate}}</dt>\r\n                                    <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                    <dt>{{'PickQty'|translate}}</dt>\r\n                                    <dd>{{ dataItem.RPTQTY|numberFormat }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl w-100\">\r\n                                    <dt>{{'OpenQty'|translate}}</dt>\r\n                                    <dd>{{ dataItem.OPENQTY|numberFormat }}</dd>\r\n\r\n                                    <dt>{{'UoM'|translate}}</dt>\r\n                                    <dd>\r\n                                        <kendo-dropdownlist class=\"form-control input-sm\" (valueChange)=\"valueChange($event)\"\r\n                                            [data]=\"uomList\" [textField]=\"'UomName'\" [valueField]=\"'UomCode'\" [value]=\"uomList[0]\"></kendo-dropdownlist>\r\n                                    </dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"ITEMCODE\" title=\"{{'ItemCode'|translate}}\"\r\n                            [width]=\"160\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"OPENQTY\" headerClass=\"text-right\" class=\" text-right\"\r\n                            title=\"{{'OpenQty'|translate}}\" [width]=\"160\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.OPENQTY|numberFormat}}</ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" headerClass=\"text-right\" class=\"text-right\"\r\n                            [width]=\"160\" title=\"{{'PickQty'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{_pickedMeterialQty|numberFormat}}</ng-template>\r\n                            <!-- <ng-template kendoGridCellTemplate format=\"{0:n3}\">{{_pickedMeterialQty|number:'1.3-3'}}</ng-template> -->\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Delete\" title=\"{{'UoM'|translate}}\" width=\"120\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                <kendo-dropdownlist class=\"form-control input-sm\" (valueChange)=\"valueChange($event)\"\r\n                                    [data]=\"uomList\" [textField]=\"'UomName'\" [valueField]=\"'UomCode'\" [value]=\"selectedUOM\"></kendo-dropdownlist>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                    <div class=\"form-group row\">\r\n                        <!-- <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\"></label> -->\r\n                        <!-- <div class=\"col-sm-9\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" name=\"orderNumber\" value='' class=\"form-control form-control-sm\"\r\n                                        placeholder=\"{{'OrderNo'|translate}}\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn \" type=\"button\">\r\n                                            <i class=\"opti-icon-search\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div *ngIf=\"OrderType!='N'\" class=\"col-sm-9\">\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" [(ngModel)]=ScanInputs id=\"outboundOrderNoScanInput\" \r\n                                    name=\"orderNumber\" value='' class=\"form-control form-control-sm\" \r\n                                        placeholder=\"\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn \" type=\"button\" [disabled]=\"\">\r\n                                            <i class=\"opti-icon-hammenu\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ml-1 d-flex\">\r\n                                        <button id=\"outBoundDeliverForSOScan\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\" type=\"button\">\r\n                                        <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n                               \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"row align-items-center\">\r\n                        <h5 class=\"h5 col-12 col-sm-6 mb-2 col-md-6 col-lg-9\">{{'SelectedMaterials'|translate}}</h5>\r\n                        <div class=\"col-sm-6 col-md-6 mb-2 col-lg-3\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" name='customerCode' placeholder=\"{{'SearchBin'|translate}}\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid class=\"no-shadow\" [data]=\"selectedMeterials\" [resizable]=\"true\" [pageSize]=\"50\"\r\n                        [pageable]=\"false\" [sortable]=\"true\" [selectable]=\"true\" id=\"gridSelectedMeterial\"\r\n                        #gridSelectedMeterial>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'SelectedMaterials'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-idx=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt *ngIf=\"OperationType==='S' || OperationType==='B'\">{{selected.ITEMCODE}}</dt>\r\n                                    <dd *ngIf=\"OperationType==='S' || OperationType==='B'\">{{ dataItem.LOTNO }}</dd>\r\n\r\n                                    <dt>{{'BINNO'|translate}}</dt>\r\n                                    <dd>{{ dataItem.BINNO }}</dd>\r\n\r\n                                    <dt *ngIf=\"OrderType!='S'\">{{'PickQty'|translate}}</dt>\r\n                                    <dd *ngIf=\"OrderType!='S'\">\r\n                                        <!-- <kendo-numerictextbox #txtMet name=\"data\" (blur)=\"onIssueMeterialQtyChange(idx,txtMet,e)\"\r\n                                            class=\"form-control form-control-sm text-right!important\" [format]=\"'n3'\"\r\n                                            [(value)]=\"dataItem.MeterialPickQty\" [step]=\"step\"></kendo-numerictextbox> -->\r\n\r\n                                        <input [ngModel]=\"dataItem.MeterialPickQty | numberFormat\" (ngModelChange)=\"dataItem.MeterialPickQty=$event\"\r\n                                            name=\"inputField\" type=\"text\" />\r\n                                    </dd>\r\n                                </dl>\r\n\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'TOTALQTY'|translate}}\r\n\r\n                                        <button *ngIf=\"OrderType!='N'\" id=\"removeSelectedMeterial\" (click)=\"removeSelectedMeterial(idx,gridSelectedMeterial)\"\r\n                                            class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\">\r\n                                            <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.TOTALQTY | numberFormat }}</dd>\r\n\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" *ngIf=\"OrderType==='S' || OrderType==='B'\" field=\"LOTNO\"\r\n                            title=\"{{SerialBatchHeaderTitle}}\" [width]=\"30\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"BINNO\" title=\"{{'BINNO'|translate}}\"\r\n                            [width]=\"30\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"TOTALQTY\" headerClass=\"text-right\" class=\" text-right\"\r\n                            title=\"{{'TOTALQTY'|translate}}\" [width]=\"10\">\r\n\r\n                            <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.TOTALQTY | numberFormat}}</ng-template>\r\n                        </kendo-grid-column>\r\n\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" *ngIf=\"OrderType!='S'\" headerClass=\"text-right\"\r\n                            class=\"text-right\" field=\"MeterialPickQty\" width=\"50\" editor=\"numeric\" title=\"{{'PickQty'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" class=\"text-right\" let-idx=\"rowIndex\">\r\n                                <!-- \r\n                                    <input [ngModel]=\"dataItem.MeterialPickQty | numberFormat\"  (blur)=\"onIssueMeterialQtyChange(idx,txtMet,e)\"\r\n                                    (ngModelChange)=\"dataItem.MeterialPickQty=$event\" name=\"inputField\" type=\"number\" /> -->\r\n\r\n                                <kendo-numerictextbox #txtMet name=\"data\" (blur)=\"onIssueMeterialQtyChange(idx,txtMet,e)\"\r\n                                    class=\"form-control text-right form-control-sm text-right!important\" [format]=\"'n4'\" [(value)]=\"dataItem.MeterialPickQty\"\r\n                                    [step]=\"step\"></kendo-numerictextbox>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" *ngIf=\"OrderType!='N'\" field=\"LOTNO\" title=\"\"\r\n                            width=\"10\">\r\n                            <ng-template kendoGridCellTemplate let-idx=\"rowIndex\">\r\n                                <button id=\"removeSelectedMeterial\" (click)=\"removeMeterial(idx,gridSelectedMeterial)\"\r\n                                    class=\"btn btn-danger k-button btn-sm btn-icon\">\r\n                                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span></button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <!-- *ngIf=\"selectedMeterials && selectedMeterials.length>0\" -->\r\n                <button type=\"button\" (click)=\"addMetToCollection()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-save\" role=\"presentation\"></span> {{'Save'|translate}}</button>\r\n                <!-- <div class=\"clearfix mt-1 d-block d-sm-none\"></div> -->\r\n                <button type=\"button\" (click)=\"back()\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" id=\"outBoundHiddenScanButton\" style=\"visibility:hidden\" (click)=\"onHiddenScanClick()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                SB </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<span *ngIf=\"showLookup==true\">\r\n    <app-lookup [lookupfor]='lookupFor' [serviceData]='lookupData' (lookupkey)=\"getLookupValue($event,gridSelectedMeterial)\"></app-lookup>\r\n</span>\r\n\r\n<!-- Loader -->\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<!-- Dialog -->\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        [yesButtonText]=\"yesButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>"

/***/ }),

/***/ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-label {\n  padding: 0;\n  margin: 0 0 10px 0;\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-self: flex-end;\n  justify-content: flex-end; }\n\n.color-label li {\n  display: flex;\n  align-items: center; }\n\n.color-label li span.color-block {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #bfbfbf;\n  margin-right: 10px; }\n\n.color-label li span.color-block + span {\n  padding-right: 10px;\n  color: #666; }\n\n.color-label li span.red {\n  background-color: #ffcece; }\n\n.color-label li span.blue {\n  background-color: #b6def9; }\n\n.color-label li span.green {\n  background-color: #b6f9c4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGlvbi9wcm9kdWN0aW9uLWlzc3VlL3Byb2QtaXRlbS1pc3N1ZS9EOlxcQW5rdXJcXFdNU1xcTmV3V01TQ2xvbmUyXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXHByb2R1Y3Rpb25cXHByb2R1Y3Rpb24taXNzdWVcXHByb2QtaXRlbS1pc3N1ZVxccHJvZC1pdGVtLWlzc3VlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVSxFQUFBOztBQUVkO0VBQ0kseUJBQ0osRUFBQTs7QUFDQTtFQUNJLHlCQUNKLEVBQUE7O0FBQ0E7RUFDSSx5QkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdGlvbi9wcm9kdWN0aW9uLWlzc3VlL3Byb2QtaXRlbS1pc3N1ZS9wcm9kLWl0ZW0taXNzdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItbGFiZWx7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uY29sb3ItbGFiZWwgbGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5jb2xvci1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5jb2xvci1ibG9jayArIHNwYW57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IzY2NjtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZWNlXHJcbn1cclxuLmNvbG9yLWxhYmVsIGxpIHNwYW4uYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRlZjlcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmY5YzRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProdItemIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdItemIssueComponent", function() { return ProdItemIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdItemIssueComponent = /** @class */ (function () {
    function ProdItemIssueComponent() {
        this.dialogMsg = "Do you want to delete?";
        this.yesButtonText = "Yes";
        this.noButtonText = "No";
        // public outbound: OutboundData;
        this.selected = null;
        this.step = 0.001;
        this.lookupFor = 'out-items';
        this.showLookup = false;
        this.totalPickQty = 0.000;
        this.mask = "0.000";
        this.uomList = [];
        // public selectedMeterials: any = Array<MeterialModel>();
        // public comingSelectedMeterials: any = Array<MeterialModel>();
        this.indivisualPickQty = 0.000;
        this._requiredMeterialQty = 0;
        this._remainingMeterial = 0;
        this._pickedMeterialQty = 0;
        this.OrderType = '';
        this.scanInputPlaceholder = "Scan";
        this.SerialBatchHeaderTitle = "";
        this.showLookupLoader = false;
        this.uomIdx = 0;
    }
    ProdItemIssueComponent.prototype.ngOnInit = function () {
    };
    ProdItemIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-item-issue',
            template: __webpack_require__(/*! ./prod-item-issue.component.html */ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.html"),
            styles: [__webpack_require__(/*! ./prod-item-issue.component.scss */ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProdItemIssueComponent);
    return ProdItemIssueComponent;
}());



/***/ }),

/***/ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" >\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n  \r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'issueForProduction'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n  \r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OrderNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name ='orderNo' \r\n                                [(ngModel)]=\"orderNo\" placeholder=\"{{'OrderNo'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getOrderList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\" type=\"button\" (click)=\"getItemListForOrder()\">\r\n                                          <i class=\"opti-icon-search\"></i>\r\n                                      </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n  \r\n            <div *ngIf=\"showSOIetDetail\">\r\n              <!-- Serial tracked item -->\r\n              <div class=\"row\" *ngIf=\"soItemsDetail!=undefined && soItemsDetail!=null && soItemsDetail.length>0 \">\r\n                  <div class=\"col-12 col-sm-12 col-md-12\">\r\n                      <div class=\"d-flex align-items-center\">\r\n                          <h4 class=\"mt-2 mb-2  mt-md-0\">{{'Items'|translate}}</h4>\r\n                          <ul class=\"color-label mt-2 mt-md-0 ml-auto mb-2\">\r\n                              <li><span class=\"color-block blue\"></span><span>Batch</span></li>\r\n                              <li><span class=\"color-block red\"></span><span>Serial</span></li>\r\n                              <li><span class=\"color-block \"></span><span>None</span></li>\r\n                          </ul>\r\n                      </div>\r\n                      <div class=\"col-12 mb-2 border-bottom\"></div>\r\n                      <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"soItemsDetail\" [resizable]=\"true\" [pageSize]=\"pageSize\"\r\n                          [pageable]=\"true\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                          [height]=gridHeight [selectable]=\"true\" [rowClass]=\"rowCallback\" (selectionChange)=\"openPOByUOM($event, soItemsDetail.ItemCode)\"\r\n                          #gridItem>\r\n  \r\n                          <!-- grid for mobile start -->\r\n                          <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                              <ng-template kendoGridCellTemplate let-dataItem>\r\n                                  <dl class=\"opti_mobile_grid_dl\">\r\n                                      <dt>{{'ItemCode'|translate}}</dt>\r\n                                      <dd>{{ dataItem.ItemCode }}</dd>\r\n  \r\n                                      <dt>{{'IssuedQty'|translate}}</dt>\r\n                                      <dd>{{ dataItem.IssuedQty|numberFormat }}</dd>\r\n                                  </dl>\r\n                                  <dl class=\"opti_mobile_grid_dl\">\r\n                                      <dt class=\"d-flex align-items-center\">{{'BalanceQty'|translate}} <span class=\"opti_arrow-grid-detail float-right text-center opti_vertical-align ml-auto\">›</span></dt>\r\n                                      <dd>{{ dataItem.BalQty|numberFormat }}</dd>\r\n                                  </dl>\r\n                              </ng-template>\r\n                          </kendo-grid-column>\r\n                          <!-- grid for mobile end -->\r\n  \r\n                          <kendo-grid-column media=\"(min-width: 768px)\" field=\"ItemCode\" title=\"{{'ItemCode'|translate}}\"\r\n                              [width]=\"6\"></kendo-grid-column>\r\n                          <kendo-grid-column media=\"(min-width: 768px)\" field=\"BalQty\" headerClass=\"text-right\"\r\n                              class=\"text-right\" [width]=\"6\" title=\"{{'BalanceQty'|translate}}\">\r\n                              <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.BalQty | numberFormat}}</ng-template>\r\n  \r\n                          </kendo-grid-column>\r\n                          <kendo-grid-column media=\"(min-width: 768px)\" field=\"IssuedQty\" headerClass=\"text-right\" class=\"text-right\"\r\n                              [width]=\"6\" format=\"{0:n3}\" title=\"{{'IssuedQty'|translate}}\">\r\n                              <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.IssuedQty | numberFormat}}</ng-template>\r\n                          </kendo-grid-column>\r\n                      </kendo-grid>\r\n                  </div>\r\n              </div>\r\n  \r\n          </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\"><span class=\"k-icon k-i-close-outline\"\r\n                        role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" \r\n                    roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <span *ngIf=\"showLookupLoader == false\">\r\n      <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n  </span>\r\n  \r\n  <span *ngIf=\"showConfirmDialog\">\r\n      <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n          (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n  </span>\r\n  <div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n      <div class=\"opti_spinner\"></div>\r\n  </div>"

/***/ }),

/***/ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi1pc3N1ZS9wcm9kLW9yZGVybGlzdC9wcm9kLW9yZGVybGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProdOrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdOrderlistComponent", function() { return ProdOrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_production_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/production.service */ "./src/app/services/production.service.ts");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_production_production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/production/production-issue/production-issue.component */ "./src/app/production/production-issue/production-issue.component.ts");








var ProdOrderlistComponent = /** @class */ (function () {
    function ProdOrderlistComponent(router, productionService, productionIssueComponent, toastr, translate, commonservice) {
        this.router = router;
        this.productionService = productionService;
        this.productionIssueComponent = productionIssueComponent;
        this.toastr = toastr;
        this.translate = translate;
        this.commonservice = commonservice;
        this.showLookupLoader = true;
        this.showSOIetDetail = false;
        this.showLoader = false;
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
    ProdOrderlistComponent.prototype.ngOnInit = function () {
    };
    ProdOrderlistComponent.prototype.onCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    ProdOrderlistComponent.prototype.getOrderList = function () {
        var _this = this;
        this.showLoader = true;
        this.productionService.GetBatchesForProductionIssueWithProcessCell().subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    // -------------------Check For Licence---------------
                    if (data[0].ErrorMsg != undefined) {
                        if (data[0].ErrorMsg.length > 0) {
                            _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                            return;
                        }
                    }
                    _this.showLookupLoader = false;
                    _this.serviceData = data;
                    _this.lookupfor = "PIOrderList";
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    ProdOrderlistComponent.prototype.getItemListForOrder = function () {
        var _this = this;
        this.showLoader = true;
        this.productionService.GetBOMItemForProductionIssue(this.orderNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    // -------------------Check For Licence---------------
                    if (data[0].ErrorMsg != undefined) {
                        if (data[0].ErrorMsg.length > 0) {
                            _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                            return;
                        }
                    }
                    _this.showSOIetDetail = true;
                    _this.soItemsDetail = data;
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    ProdOrderlistComponent.prototype.openPOByUOM = function (selection) {
        var selectdeData = selection.selectedRows[0].dataItem;
        localStorage.setItem("ProductionIssueData", JSON.stringify(selectdeData));
        this.productionIssueComponent.prodissueComponent = 2;
        // let outboundData: string = localStorage.getItem("ProductionIssueData");
        // if (outboundData != undefined && outboundData != '') {
        //   this.outbound = JSON.parse(outboundData);
        //   this.outbound.SelectedItem = selectdeData;
        //   //lsOutbound
        //   localStorage.setItem("ProductionIssueData", JSON.stringify(selectdeData));
        //   this.router.navigateByUrl('home/outbound/outprodissue', { skipLocationChange: true });
        // }
    };
    ProdOrderlistComponent.prototype.getLookupValue = function ($event) {
        this.orderNo = $event[0];
    };
    ProdOrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-orderlist',
            template: __webpack_require__(/*! ./prod-orderlist.component.html */ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.html"),
            styles: [__webpack_require__(/*! ./prod-orderlist.component.scss */ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_production_service__WEBPACK_IMPORTED_MODULE_3__["ProductionService"], src_app_production_production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_7__["ProductionIssueComponent"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"]])
    ], ProdOrderlistComponent);
    return ProdOrderlistComponent;
}());



/***/ }),

/***/ "./src/app/production/production-issue/production-issue.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/production/production-issue/production-issue.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-prod-orderlist *ngIf=\"prodissueComponent == 1\" ></app-prod-orderlist>\r\n\r\n<app-prod-item-issue *ngIf=\"prodissueComponent==2\"></app-prod-item-issue>"

/***/ }),

/***/ "./src/app/production/production-issue/production-issue.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/production/production-issue/production-issue.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi1pc3N1ZS9wcm9kdWN0aW9uLWlzc3VlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/production/production-issue/production-issue.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/production/production-issue/production-issue.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductionIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionIssueComponent", function() { return ProductionIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductionIssueComponent = /** @class */ (function () {
    function ProductionIssueComponent() {
        this.prodissueComponent = 1;
    }
    ProductionIssueComponent.prototype.ngOnInit = function () {
    };
    ProductionIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-issue',
            template: __webpack_require__(/*! ./production-issue.component.html */ "./src/app/production/production-issue/production-issue.component.html"),
            styles: [__webpack_require__(/*! ./production-issue.component.scss */ "./src/app/production/production-issue/production-issue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductionIssueComponent);
    return ProductionIssueComponent;
}());



/***/ }),

/***/ "./src/app/production/production-receipt/production-receipt.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/production/production-receipt/production-receipt.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"showMainLayoutItems\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" >\r\n                {{'receiptFromProduction'|translate}}\r\n            </h3>\r\n            <div class=\"row\"> \r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OrderNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\"  [(ngModel)]=orderNumber (blur)=\"OnOrderValueChange()\" name='orderNo' placeholder=\"{{'OrderNo'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" (click)=\"OnOrderLookupClick()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\"  (click)=\"getProductionDetail()\" type=\"button\">\r\n                                        <i class=\"opti-icon-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- container row -->\r\n            <div *ngIf=\"displayFormAndSubmit\"> \r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Item'|translate}}</label>\r\n                            <div class=\"col-sm-9 d-flex align-items-center\">\r\n                                <p class=\"mb-0\">{{itemCode}}</p>\r\n                                <p class=\"mb-0\" *ngIf=\"showColon\">:</p>\r\n                                <p class=\"mb-0\">{{itemName}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf =\"showRejectQtyField\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row align-items-center\"  >\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'TransType'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <fieldset class=\"d-block w-100\">\r\n                                    <div class=\"d-flex align-items-center w-100\">\r\n                                        <div class=\"d-flex align-items-center\">\r\n                                            \r\n                                             <input type=\"radio\" id=\"radio1\" name=\"group\" class=\"k-radio\" [(ngModel)]=\"model.options\" value=\"1\">\r\n                                             <label class=\"k-radio-label mr-3\" for=\"radio1\">{{'PostToInv'|translate}}</label>\r\n                                           <input type=\"radio\"  id=\"radio2\" name=\"group\" class=\"k-radio\" [(ngModel)]=\"model.options\" value=\"2\">\r\n                                           <label class=\"k-radio-label mr-3\" for=\"radio2\">{{'PostToReject'|translate}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='S'\" >\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'SerialQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" #SerialQty class=\"form-control form-control-sm text-right\" [(ngModel)]=enteredQty name='SerialQty'\r\n                                    placeholder=\"{{'SerialQty'|translate}}\"  [disabled]=\"disableSearialQty\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='B'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BatchQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"number\" #BatchQty class=\"form-control form-control-sm text-right\"\r\n                                name='BatchQty' [(ngModel)]=enteredQty  placeholder=\"{{'BatchQty'|translate}}\"> \r\n                            </div>\r\n                        </div> \r\n                        <div class=\"form-group row\"  *ngIf=\"tracking=='N'\"  >\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Qty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" #Qty class=\"form-control form-control-sm text-right\" name='Qty'  [(ngModel)]=enteredQty\r\n                                    placeholder=\"{{'Qty'|translate}}\">\r\n                            </div> \r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='S'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Serial'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" (blur)=\"checkAndValidateSerial()\" [(ngModel)]=serialBatchNo name='Serial' placeholder=\"{{'Serial'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='B'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Batch'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name='Batch'  [(ngModel)]=serialBatchNo  placeholder=\"{{'Batch'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ExpiryDate'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <kendo-datepicker [format]=\"'MM/dd/yy'\" [value]=\"value\" name=\"expiryDate\" [(ngModel)]=expDate\r\n                                placeholder=\"MM/dd/yy\"></kendo-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Bin'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm\"   (blur)=\"OnBinValueChange()\"\r\n                                    [(ngModel)]=binNo name='binNo' placeholder=\"{{'Bin'|translate}}\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getBinList()\"  >\r\n                                            <i class=\"opti-icon-hammenu\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OpenQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='openQty' [attr.disabled]=\"disableOpenQty\"\r\n                                [ngModel]=\"orignalActualQty | numberFormat\" \r\n                                (ngModelChange)=\"orignalActualQty=$event\" \r\n                                    placeholder=\"{{'OpenQty'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\"  *ngIf =\"showRejectQtyField\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'DefectQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" \r\n                                name='defectQty'  [attr.disabled]=\"disableDefRejQty\" \r\n                                [ngModel]=\"rejectQty | numberFormat\" \r\n                                (ngModelChange)=\"rejectQty=$event\" \r\n                                    placeholder=\"{{'DefectQty'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <h5>{{'AssignedQuantity'|translate}}</h5>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'AcceptQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='acceptQty'\r\n                                    placeholder=\"{{'AcceptQty'|translate}}\"\r\n                                     [attr.disabled]=\"disableAcceptQty\" \r\n                                     [ngModel]=\"acceptQty | numberFormat\" \r\n                                (ngModelChange)=\"acceptQty=$event\" >\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\" *ngIf =\"showRejectQtyField\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'RejectQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='rejectQty' \r\n                                 [ngModel]=\"rjQty | numberFormat\" \r\n                                (ngModelChange)=\"rjQty=$event\"\r\n                                 [attr.disabled]=\"disableDefRejQty\" placeholder=\"{{'RejectQty'|translate}}\"> \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- container row end -->\r\n\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div> \r\n            <div class=\"col-sm-12 col-12\">  \r\n                    <button type=\"button\" *ngIf=\"displayFormAndSubmit\" (click)=\"submitRecord($event)\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                            <span class=\"k-icon k-i-save\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n                            <button class=\"k-button k-primary k-button btn-sm btn-icon-with-text\" *ngIf=\"showAddMoreButton\" type=\"button\" (click)=\"addMoreClick($event)\">\r\n                                    <span class=\"k-icon k-i-download\" role=\"presentation\"></span> {{'AddMore'|translate}}</button>\r\n                                    <button class=\"k-button k-primary k-button btn-sm btn-icon-with-text\" *ngIf=\"showViewAcceptButton\" type=\"button\" (click)=\"showViewAcceptItems($event)\">\r\n                                            <span class=\"k-icon k-i-download\" role=\"presentation\"></span> {{'ViewAccept'|translate}}</button>\r\n                                   <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"  *ngIf=\"showViewRejectButton\" (click)=\"showViewRejectItems($event)\"><span class=\"k-icon k-i-close-outline\"\r\n                                                role=\"presentation\"></span> {{'ViewReject'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\"><span class=\"k-icon k-i-close-outline\"\r\n                        role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <!-- <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" \r\n                  roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button> -->\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- Accept Item Grid Start -->\r\n<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"acceptItemsGrid\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" >\r\n                {{'AcceptedLot'|translate}}\r\n            </h3>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid [kendoGridBinding]=\"Lots\" [resizable]=\"true\" [pageSize]=\"pageSize\" [pageable]=\"false\" [sortable]=\"true\" \r\n                    [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                        [height]=gridHeight [selectable]=\"true\" [data]=\"ItemArray\" style=\"max-height:400px\" class=\"no-shadow\"\r\n                        #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'AcceptedSerials '|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex='rowIndex'>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{lotSerialHeading}}</dt>\r\n                                    <dd>{{ dataItem.LotNumber }}</dd>\r\n\r\n                                    <dt>{{'Quantity'|translate}}</dt>\r\n                                    <dd>{{ dataItem.LotQty }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'BinNoHeading'|translate}}\r\n                                        <button class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\">\r\n                                            <span class=\"k-icon k-i-delete\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.Bin }}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNumber\" title=\"{{lotSerialHeading}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" title=\"{{'BinNoHeading'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" title=\"{{'Quantity'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" width=\"60\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button (click)=\"confirmDialogForDeleteAcceptItem($event,rowIndex)\" class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\">\r\n                                    <span class=\"k-icon k-i-delete\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div> \r\n            <div class=\"col-sm-12 col-12\">  \r\n                <button type=\"button\" (click)=\"viewAcceptOkClick($event)\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" \r\n                (click)=\"confirmDialogForDeleteAllAcceptItems()\">\r\n                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}\r\n                </button>\r\n                \r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- Accept Item Grid End -->\r\n\r\n<!-- Reject Item Grid Start -->\r\n<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"rejectItemsGrid\">\r\n        <form class=\"form-with-fix-btnBar\">\r\n            <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n    \r\n                <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\" >\r\n                    {{'RejectedLot'|translate}}\r\n                </h3>\r\n    \r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n    \r\n                        <kendo-grid [kendoGridBinding]=\"RejectLots\" [resizable]=\"true\" [pageSize]=\"pageSize\" [pageable]=\"false\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                            [height]=gridHeight [selectable]=\"true\" [data]=\"ItemArray\" style=\"max-height:400px\" class=\"no-shadow\"\r\n                            #gridItem>\r\n    \r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'RejectedSerials '|translate}}\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex='rowIndex'>\r\n                                        <dl class=\"opti_mobile_grid_dl\">\r\n                                                <dt>{{lotSerialHeading}}</dt>\r\n                                                <dd>{{ dataItem.LotNumber }}</dd>\r\n            \r\n                                                <dt>{{'Quantity'|translate}}</dt>\r\n                                                <dd>{{ dataItem.LotQty }}</dd>\r\n                                            </dl>\r\n                                            <dl class=\"opti_mobile_grid_dl\">\r\n                                                <dt class=\"d-flex align-items-center\">{{'BinNoHeading'|translate}}\r\n                                                    <button class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\">\r\n                                                        <span class=\"k-icon k-i-delete\"></span>\r\n                                                    </button>\r\n                                                </dt>\r\n                                                <dd>{{ dataItem.Bin }}</dd>\r\n                                            </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n    \r\n                            <!-- grid for mobile end -->\r\n    \r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNumber\" title=\"{{lotSerialHeading}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" title=\"{{'Quantity'|translate}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" title=\"{{'BinNoHeading'|translate}}\">\r\n                                </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" width=\"60\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                    <button (click)=\"confirmDialogForDeleteRejectItem($event,rowIndex)\" class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\">\r\n                                        <span class=\"k-icon k-i-delete\"></span>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"fix-footer-btnBar\">\r\n                <div class=\"col-sm-12 col-12\">\r\n                    <hr />\r\n                </div> \r\n                <div class=\"col-sm-12 col-12\">  \r\n                    <button type=\"button\" (click)=\"viewRejectOkClick($event)\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                        <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"\r\n                     (click)=\"confirmDialogForDeleteAllRejectItems()\">\r\n                        <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}\r\n                    </button>\r\n                    \r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- Reject Item Grid End -->\r\n\r\n<div *ngIf=\"showLookupLoader==false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</div>\r\n <!-- loader start -->\r\n <div class=\"opti_loader\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div> \r\n</div>\r\n\r\n<!--delete dialog start-->\r\n<span *ngIf=\"showConfirmDialog\">\r\n        <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n            (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n<!--delete dialog end-->\r\n\r\n<div class=\"opti_loader full-section\"  *ngIf=\"showLoader\" >\r\n        <div class=\"opti_spinner\"></div>\r\n    </div>"

/***/ }),

/***/ "./src/app/production/production-receipt/production-receipt.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/production/production-receipt/production-receipt.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi1yZWNlaXB0L3Byb2R1Y3Rpb24tcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/production/production-receipt/production-receipt.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/production/production-receipt/production-receipt.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductionReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionReceiptComponent", function() { return ProductionReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_production_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/production.service */ "./src/app/services/production.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ProductionReceiptComponent = /** @class */ (function () {
    function ProductionReceiptComponent(renderer, commonservice, router, productionService, toastr, translate) {
        this.renderer = renderer;
        this.commonservice = commonservice;
        this.router = router;
        this.productionService = productionService;
        this.toastr = toastr;
        this.translate = translate;
        //for making disable the three fields.
        this.disableSearialQty = false;
        this.disableOpenQty = false;
        this.disableAcceptQty = false;
        this.disableDefRejQty = false;
        //showing loader for data loading purpose.
        this.showLookupLoader = true;
        // values related variables.
        this.value = new Date();
        this.orderNumber = "";
        this.item = "";
        this.itemCode = "";
        this.itemName = "";
        this.orderQty = "";
        this.tracking = "N";
        this.printLbl = "";
        this.refDocEntry = "";
        this.expDate = "";
        this.serialQty = "1";
        this.batchQty = "";
        this.serialNo = "";
        this.batchNo = "";
        this.serialBatchNo = "";
        this.binNo = "";
        this.whsCode = "";
        this.showRejectQtyField = false;
        this.type = "N"; //S for serial, B for Batch, N for non tracked.
        this.showColon = false;
        this.defaultQty = "0";
        this.enteredQty = "0";
        this.displayFormAndSubmit = false;
        this.showAddMoreButton = false;
        this.showViewAcceptButton = false;
        this.showViewRejectButton = false;
        this.Transaction = "ProductionReceipt";
        this.ONLINEPOSTING = null;
        this.IsPalletExist = false;
        this.acceptItemsGrid = false;
        this.rejectItemsGrid = false;
        this.finalAcceptQty = 0;
        this.finalRejectQty = 0;
        // data variables for submit request
        this.Lots = [];
        this.Items = [];
        this.UDF = [];
        this.RejectItems = [];
        this.RejectLots = [];
        this.submitRecProdData = {};
        this.selectedRadio = "PostToInv";
        this.model = { options: '1' };
        this.dialogFor = "";
        this.dialogMsg = "";
        this.yesButtonText = "";
        this.noButtonText = "";
        this.showLoader = false;
        this.showMainLayoutItems = true;
        this.lotSerialHeading = this.translate.instant("LotNoHeading");
    }
    ProductionReceiptComponent.prototype.ngOnInit = function () {
        this.enterQtyPlaceholder = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        console.log("entered qty" + this.enteredQty);
        console.log("acceptQty qty" + this.acceptQty);
    };
    ProductionReceiptComponent.prototype.OnOrderLookupClick = function () {
        this.showOrderList();
    };
    ProductionReceiptComponent.prototype.OnOrderValueChange = function () {
        if (this.orderNumber == "" || this.orderNumber == undefined) {
            return;
        }
        this.getProductionDetail();
    };
    ProductionReceiptComponent.prototype.OnBinValueChange = function () {
        var _this = this;
        if (this.binNo == "") {
            return;
        }
        this.productionService.isBinExists(this.binNo).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Result == "0") {
                        _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                        _this.binNo = "";
                        return;
                    }
                    else {
                        _this.binNo = data[0].ID;
                        // oCurrentController.isReCeivingBinExist();
                    }
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                _this.binNo = "";
                return;
            }
        }, function (error) {
            console.log("Error: ", error);
            _this.binNo = "";
        });
    };
    ProductionReceiptComponent.prototype.submitRecord = function () {
        // case when only single item is going to submit.
        if (this.Lots.length == 0 && this.RejectLots.length == 0) {
            // object is empty.
            console.log("object is empty");
            //means user comming first time and directly clicking on submit
            if (this.validateForm() == false) {
                return;
            }
            if (this.showRejectQtyField == true && this.model.options == '2') {
                if (this.enteredQty > this.rejectQty) {
                    this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
                    return false;
                }
                //add rejected lot.
                if (this.tracking == "N") {
                    this.serialBatchNo = "";
                }
                this.RejectLots.push({
                    Bin: this.binNo,
                    LineNo: 1,
                    LotNumber: this.serialBatchNo,
                    LotQty: this.enteredQty,
                    ExpiryDate: this.GetSubmitDateFormat(this.expDate)
                });
                this.RejectItems = this.prepareRejectItemData(this.enteredQty);
                this.UDF = [];
                this.Items = [];
                this.Lots = [];
                this.submitRecProdData = {
                    Items: this.Items, Lots: this.Lots, UDF: this.UDF,
                    RejectItems: this.RejectItems, RejectLots: this.RejectLots
                };
                // add rejected item.
                this.submitProductionReport(this.submitRecProdData);
            }
            else {
                if (this.enteredQty > this.orignalActualQty) {
                    this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
                    return false;
                }
                // if not rejected item.
                if (this.tracking == "N") {
                    this.serialBatchNo = "";
                }
                this.Lots.push({
                    Bin: this.binNo,
                    LineNo: 0,
                    LotNumber: this.serialBatchNo,
                    LotQty: this.enteredQty,
                    ExpiryDate: this.GetSubmitDateFormat(this.expDate)
                });
                this.Items = this.prepareCommonItemData(this.enteredQty);
                this.UDF = [];
                this.RejectItems = [];
                this.RejectLots = [];
                this.submitRecProdData = { Items: this.Items, Lots: this.Lots, UDF: this.UDF, RejectItems: this.RejectItems, RejectLots: this.RejectLots };
                this.submitProductionReport(this.submitRecProdData);
            }
        }
        else {
            // if multiple items are submitted.
            console.log("object is not empty");
            if (this.Lots.length > 0) {
                this.Items = this.prepareCommonItemData(this.acceptQty);
            }
            if (this.RejectLots.length > 0) {
                this.RejectItems = this.prepareRejectItemData(this.rjQty);
            }
            this.UDF = [];
            this.submitRecProdData = { Items: this.Items, Lots: this.Lots, UDF: this.UDF, RejectItems: this.RejectItems, RejectLots: this.RejectLots };
            this.submitProductionReport(this.submitRecProdData);
            //case when multiple items will be submitted then two cases if user adding new item with old items or
            // if user only submitting previous items which are stored in array.
            //then no need to validate we can submit directly using updated qty.
        }
    };
    ProductionReceiptComponent.prototype.submitProductionReport = function (requestData) {
        var _this = this;
        this.showLoader = true;
        this.productionService.submitProductionRecepit(requestData).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                //check and update response for entered serial no.
                if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                    _this.toastr.success(_this.translate.instant("FGRSuccessMessage") + data[0].DocEntry);
                    _this.resetAfterSubmit();
                }
                else {
                    if (data[0].ErrorMsg != "") {
                        // show errro.
                        _this.toastr.error('', data[0].ErrorMsg);
                    }
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    ProductionReceiptComponent.prototype.resetAfterSubmit = function () {
        this.displayFormAndSubmit = false;
        this.Lots = [];
        this.Items = [];
        this.UDF = [];
        this.RejectItems = [];
        this.RejectLots = [];
        this.submitRecProdData = {};
        this.orderNumber = "";
        this.expDate = "";
        this.enteredQty = "";
        this.serialBatchNo = "";
        this.model = { options: '1' };
        this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
    };
    ProductionReceiptComponent.prototype.resetOnSerchClick = function () {
        this.Lots = [];
        this.Items = [];
        this.UDF = [];
        this.RejectItems = [];
        this.RejectLots = [];
        this.submitRecProdData = {};
        this.expDate = "";
        this.enteredQty = "";
        this.serialBatchNo = "";
        this.model = { options: '1' };
        this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
    };
    ProductionReceiptComponent.prototype.addMoreClick = function () {
        if (this.showRejectQtyField == true && this.model.options == '2') {
            //means add in accept qty
            if (this.validateForm() == false) {
                return;
            }
            if (this.checkIfSerialBatchAlreadyExists(this.serialBatchNo) == true) {
                if (this.tracking == "B") {
                    this.toastr.error('', this.translate.instant("BatchAlreadyExists"));
                }
                if (this.tracking == "S") {
                    this.toastr.error('', this.translate.instant("SerialAlreadyExist"));
                }
                return;
            }
            else { }
            this.calculateRejectQtyOnAddMore();
        }
        else {
            if (this.validateForm() == false) {
                return;
            }
            if (this.checkIfSerialBatchAlreadyExists(this.serialBatchNo) == true) {
                if (this.tracking == "B") {
                    this.toastr.error('', this.translate.instant("BatchAlreadyExists"));
                }
                if (this.tracking == "S") {
                    this.toastr.error('', this.translate.instant("SerialAlreadyExist"));
                }
                return;
            }
            this.calculateAcceptQtyOnAddMore();
        }
        //reset form variables.
        this.serialBatchNo = "";
        if (this.tracking == "S") {
            this.serialQty = Number(this.serialQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
            this.enteredQty = this.serialQty;
        }
        else {
            this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        }
        //enable disable accept list and reject list buttons.
        this.showViewAcceptViewRejectButtons();
    };
    ProductionReceiptComponent.prototype.checkIfSerialBatchAlreadyExists = function (serialBatch) {
        var isExists = false;
        if (this.tracking == "S" || this.tracking == "B") {
            if (this.showRejectQtyField == true) {
                if (this.model.options == '2') {
                    if (this.RejectLots.length > 0) {
                        for (var i = 0; i < this.RejectLots.length; i++) {
                            if (serialBatch == this.RejectLots[i].LotNumber) {
                                isExists = true;
                            }
                        }
                    }
                }
                else {
                    if (this.Lots.length > 0) {
                        for (var i = 0; i < this.Lots.length; i++) {
                            if (serialBatch == this.Lots[i].LotNumber) {
                                isExists = true;
                            }
                        }
                    }
                }
            }
            else {
                if (this.Lots.length > 0) {
                    for (var i = 0; i < this.Lots.length; i++) {
                        if (serialBatch == this.Lots[i].LotNumber) {
                            isExists = true;
                        }
                    }
                }
            }
        }
        return isExists;
    };
    ProductionReceiptComponent.prototype.showViewAcceptViewRejectButtons = function () {
        if (this.showRejectQtyField == true && this.model.options == '2') {
            if (this.RejectLots.length > 0) {
                this.showViewRejectButton = true;
            }
        }
        else {
            if (this.Lots.length > 0) {
                this.showViewAcceptButton = true;
            }
        }
    };
    ProductionReceiptComponent.prototype.calculateAcceptQtyOnAddMore = function () {
        //added in accept qty and open qty.
        var tempQty = 0; // logic to manage qty.
        for (var i = 0; i < this.Lots.length; i++) {
            tempQty = tempQty + this.Lots[i].LotQty;
        }
        tempQty = tempQty + Number(this.enteredQty);
        var orignalRejectQty = this.itemDataResponse.RejectQTY; // taken in a local variable for compairsion.
        var orignalActualQty = this.itemDataResponse.ORIGINALACTUALQUANTITY;
        if (tempQty > parseFloat(orignalActualQty)) {
            this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
            this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        }
        else {
            // add qty to Reject Lot list and update rejectQty and rjQty
            this.Lots.push({
                Bin: this.binNo,
                LineNo: 0,
                LotNumber: this.serialBatchNo,
                LotQty: Number(this.enteredQty),
                ExpiryDate: this.GetSubmitDateFormat(this.expDate)
            });
            //this.totalQtyToSubmit = tempQty; // at the end update totalQty with calculated qty.
            this.acceptQty = tempQty;
            var initialOrignalActualQty = this.itemDataResponse.ORIGINALACTUALQUANTITY;
            this.orignalActualQty = initialOrignalActualQty - tempQty;
        }
    };
    ProductionReceiptComponent.prototype.calculateRejectQtyOnAddMore = function () {
        var tempQty = 0; // logic to manage qty.
        for (var i = 0; i < this.RejectLots.length; i++) {
            tempQty = tempQty + this.RejectLots[i].LotQty;
        }
        tempQty = tempQty + Number(this.enteredQty);
        var orignalRejectQty = this.itemDataResponse.RejectQTY; // taken in a local variable for compairsion.
        if (tempQty > parseFloat(orignalRejectQty)) {
            this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
            this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        }
        else {
            // add qty to Reject Lot list and update rejectQty and rjQty
            this.RejectLots.push({
                Bin: this.binNo,
                LineNo: 1,
                LotNumber: this.serialBatchNo,
                LotQty: Number(this.enteredQty),
                ExpiryDate: this.GetSubmitDateFormat(this.expDate)
            });
            //this.totalQtyToSubmit = tempQty; // at the end update totalQty with calculated qty.
            this.rjQty = tempQty;
            var orignalRejectQty = this.itemDataResponse.RejectQTY;
            this.rejectQty = orignalRejectQty - tempQty;
            // console.log("total qty to submit:" + this.totalQtyToSubmit);
        }
    };
    ProductionReceiptComponent.prototype.GetSubmitDateFormat = function (EXPDATE) {
        if (EXPDATE == "" || EXPDATE == null)
            return "";
        else {
            var d = new Date(EXPDATE);
            var day;
            if (d.getDate().toString().length < 2) {
                day = "0" + d.getDate();
            }
            else {
                day = d.getDate();
            }
            var mth;
            if ((d.getMonth() + 1).toString().length < 2) {
                mth = "0" + (d.getMonth() + 1).toString();
            }
            else {
                mth = d.getMonth() + 1;
            }
            // return day + ":" + mth + ":" + d.getFullYear();
            return mth + "/" + day + "/" + d.getFullYear();
        }
    };
    ProductionReceiptComponent.prototype.objectIsEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    ProductionReceiptComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    ProductionReceiptComponent.prototype.prepareSubmitData = function () {
        this.Items = this.prepareCommonItemData(this.enteredQty);
        this.RejectItems = this.prepareRejectItemData(this.enteredQty);
        this.Lots.push({
            Bin: this.binNo,
            LineNo: 0,
            LotNumber: this.serialBatchNo,
            LotQty: this.enteredQty,
            ExpiryDate: this.GetSubmitDateFormat(this.expDate)
        });
        this.submitRecProdData = { Items: this.Items, Lots: this.Lots, UDF: this.UDF, RejectItems: this.RejectItems, RejectLots: this.RejectLots };
    };
    ProductionReceiptComponent.prototype.prepareCommonItemData = function (totalAcceptedRejectedQty) {
        var itemsData = [];
        itemsData.push({
            DiServerToken: localStorage.getItem("Token"),
            CompanyDBId: localStorage.getItem("CompID"),
            Transaction: this.Transaction,
            RECUSERID: localStorage.getItem("UserId"),
            ONLINEPOSTING: this.ONLINEPOSTING,
            BATCHNO: this.orderNumber,
            LineNo: 0,
            RefDocEntry: this.refDocEntry,
            RejectQTY: this.itemDataResponse.RejectQTY,
            RecRjctedQty: this.recRejectQty,
            DOCENTRY: this.refDocEntry,
            Quantity: totalAcceptedRejectedQty,
            ItemCode: this.itemCode,
            POSTEDFGQTY: this.postedFGQTY,
            PASSEDQTY: this.passedQty,
            AcctDefectQty: this.ACCTDEFECTQTY,
            FGQTYTOPOST: this.itemDataResponse.ORIGINALACTUALQUANTITY,
            WhsCode: this.whsCode,
            Tracking: this.tracking,
            IsPalletExist: this.IsPalletExist,
            LoginId: localStorage.getItem("UserId"),
            GUID: localStorage.getItem("GUID"),
            UsernameForLic: localStorage.getItem("UserId")
        });
        return itemsData;
    };
    ProductionReceiptComponent.prototype.prepareRejectItemData = function (totalAcceptedRejectedQty) {
        var rejectItemsData = [];
        rejectItemsData.push({
            DiServerToken: localStorage.getItem("Token"),
            CompanyDBId: localStorage.getItem("CompID"),
            Transaction: this.Transaction,
            RECUSERID: localStorage.getItem("UserId"),
            ONLINEPOSTING: this.ONLINEPOSTING,
            BATCHNO: this.orderNumber,
            LineNo: 0,
            RefDocEntry: this.refDocEntry,
            DOCENTRY: this.refDocEntry,
            ItemCode: this.itemCode,
            WhsCode: this.whsCode,
            POSTEDFGQTY: this.postedFGQTY,
            PASSEDQTY: this.passedQty,
            AcctDefectQty: this.ACCTDEFECTQTY,
            FGQTYTOPOST: this.itemDataResponse.ORIGINALACTUALQUANTITY,
            Tracking: this.tracking,
            IsPalletExist: this.IsPalletExist,
            LoginId: localStorage.getItem("UserId"),
            RejectQTY: this.itemDataResponse.RejectQTY,
            RecRjctedQty: this.recRejectQty,
            Quantity: totalAcceptedRejectedQty,
        });
        return rejectItemsData;
    };
    ProductionReceiptComponent.prototype.validateForm = function () {
        if (this.tracking === "S") {
            return this.validateSerialForm();
        }
        if (this.tracking === "B") {
            return this.validateBatchForm();
        }
        if (this.tracking === "N") {
            return this.validateNonTrackedForm();
        }
    };
    ProductionReceiptComponent.prototype.validateBatchForm = function () {
        if (this.orderNumber == null || this.orderNumber == undefined || this.orderNumber == "") {
            this.toastr.error('', this.translate.instant("OrderNoBlank"));
            return false;
        }
        if (this.enteredQty == null || this.enteredQty == undefined || this.enteredQty == "" ||
            parseFloat(this.enteredQty).toFixed(4) == parseFloat("0").toFixed(4)) {
            this.toastr.error('', this.translate.instant("EnterLotQuantity"));
            return false;
        }
        if (this.serialBatchNo == null || this.serialBatchNo == undefined || this.serialBatchNo == "") {
            this.toastr.error('', this.translate.instant("EnterBatchNo"));
            return false;
        }
        if (this.binNo == null || this.binNo == undefined || this.binNo == "") {
            this.toastr.error('', this.translate.instant("EnterBinNo"));
            return false;
        }
        if (parseFloat(this.enteredQty).toFixed(4) < parseFloat("0").toFixed(4)) {
            this.toastr.error('', this.translate.instant("QtyGraterThenZero"));
            return false;
        }
        // if(this.enteredQty>this.orignalActualQty){
        //   this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
        //   return false;
        // }
        return true;
    };
    ProductionReceiptComponent.prototype.validateSerialForm = function () {
        if (this.orderNumber == null || this.orderNumber == undefined || this.orderNumber == "") {
            this.toastr.error('', this.translate.instant("OrderNoBlank"));
            return false;
        }
        if (this.serialBatchNo == null || this.serialBatchNo == undefined || this.serialBatchNo == "") {
            this.toastr.error('', this.translate.instant("EnterSerialNo"));
            return false;
        }
        if (this.binNo == null || this.binNo == undefined || this.binNo == "") {
            this.toastr.error('', this.translate.instant("EnterBinNo"));
            return false;
        }
        //  if(this.enteredQty>this.orignalActualQty){
        //   this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
        //   return false;
        // }
        return true;
    };
    ProductionReceiptComponent.prototype.validateNonTrackedForm = function () {
        if (this.orderNumber == null || this.orderNumber == undefined || this.orderNumber == "") {
            this.toastr.error('', this.translate.instant("OrderNoBlank"));
            return false;
        }
        if (this.enteredQty == null || this.enteredQty == undefined || this.enteredQty == "" ||
            parseFloat(this.enteredQty).toFixed(4) == parseFloat("0").toFixed(4)) {
            this.toastr.error('', this.translate.instant("EnterQty"));
            return false;
        }
        if (this.binNo == null || this.binNo == undefined || this.binNo == "") {
            this.toastr.error('', this.translate.instant("EnterBinNo"));
            return false;
        }
        if (parseFloat(this.enteredQty).toFixed(4) < parseFloat("0").toFixed(4)) {
            this.toastr.error('', this.translate.instant("QtyGraterThenZero"));
            return false;
        }
        // if(this.enteredQty>this.orignalActualQty){
        //   this.toastr.error('', this.translate.instant("SelectedQtyGrater"));
        //   return false;
        // }
        return true;
    };
    ProductionReceiptComponent.prototype.checkAndValidateSerial = function () {
        var _this = this;
        this.checkValidateSerialSubs = this.productionService.isSerialExists(this.serialBatchNo, this.itemCode).subscribe(function (data) {
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                //check and update response for entered serial no.
                if (data == "1") {
                    //error message
                    _this.toastr.error('', _this.translate.instant("SerialNoAlreadyUsed"));
                    _this.serialBatchNo = "";
                    return;
                }
                else {
                    // allow data
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    /**
    * Method to get list of inquries from server.
    */
    ProductionReceiptComponent.prototype.showOrderList = function () {
        var _this = this;
        this.orderNoListSubs = this.productionService.getOrderNumberList(this.orderNumber).subscribe(function (data) {
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.Table != undefined && data.Table != null && data.Table != "") {
                    _this.showLookupLoader = false;
                    _this.serviceData = data.Table;
                    _this.lookupfor = "OrderList";
                    return;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    /**
      * @param $event this will return the value on row click of lookup grid.
      */
    ProductionReceiptComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "OrderList") {
            //this.lotNo = $event[0];
            this.orderNumber = $event[0];
            this.item = $event[1];
        }
        else if (this.lookupfor == "ToBinList") {
            this.binNo = $event[0];
            this.whsCode = $event[1];
        }
    };
    ProductionReceiptComponent.prototype.getProductionDetail = function () {
        var _this = this;
        if (this.orderNumber == "") {
            this.toastr.error('', this.translate.instant("OrderNoBlank"));
            return;
        }
        this.resetOnSerchClick();
        this.orderNoListSubs = this.productionService.GetItemsDetailForProductionReceipt(this.orderNumber).subscribe(function (data) {
            _this.displayFormAndSubmit = true;
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.Table != undefined && data.Table != null && data.Table != "" && data.Table.length > 0) {
                    _this.showLookupLoader = false;
                    _this.itemDataResponse = data.Table[0];
                    _this.setFormData(data.Table[0]);
                    return;
                }
                else {
                    _this.toastr.error('', _this.translate.instant("OrderNotExistMessge"));
                    _this.orderNumber = "";
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
        this.binListSubs = this.productionService.GetBinsList().subscribe(function (data) {
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data != undefined && data != null && data != "") {
                    _this.binList = data;
                    _this.binNo = _this.binList[0].BINNO;
                    _this.whsCode = _this.binList[0].WHSCODE;
                    return;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    ProductionReceiptComponent.prototype.getBinList = function () {
        var _this = this;
        this.binListSubs = this.productionService.GetBinsList().subscribe(function (data) {
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data != undefined && data != null && data != "") {
                    _this.showLookupLoader = false;
                    _this.serviceData = data;
                    _this.lookupfor = "ToBinList";
                    return;
                }
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    ProductionReceiptComponent.prototype.setFormData = function (response) {
        this.itemCode = response.ItemCode;
        this.itemName = response.ItemName;
        this.ACCTDEFECTQTY = response.ACCTDEFECTQTY;
        this.orignalActualQty = response.ORIGINALACTUALQUANTITY;
        this.orderNumber = response.OrderNo;
        this.orderQty = response.OrderQty;
        this.passedQty = response.PASSEDQTY;
        this.postedFGQTY = response.POSTEDFGQTY;
        this.printLbl = response.PRINTLBL;
        this.recRejectQty = response.RecRjctedQty;
        this.refDocEntry = response.RefDocEntry;
        this.rejectQty = response.RejectQTY;
        this.tracking = response.TRACKING;
        this.whsCode = response.WhsCode;
        if (this.itemCode != null && this.itemCode != undefined && this.itemCode != ""
            && this.itemName != null && this.itemName != undefined && this.itemName != "") {
            this.showColon = true;
        }
        if (this.tracking == "S") {
            this.serialQty = Number(this.serialQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
            this.enteredQty = this.serialQty;
            this.disableSearialQty = true;
            //set serial form data and hide other fields
            //serial qty, openqty and 
            this.showAddMoreButton = true;
            //  this.SerialQtyField.nativeElement.focus(); //set focus on serial qty field.
        }
        else if (this.tracking == "B") {
            //set batch form data and hide other fields    
            this.showAddMoreButton = true;
            this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
            //  this.BatchQtyField.nativeElement.focus(); //set focus on batch qty field.
        }
        else if (this.tracking == "N") {
            //set non form data and hide other fields 
            this.showAddMoreButton = false;
            this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
            //  console.log('--this.SerialQtyField.nativeElement---',this.QtyField.nativeElement);
            // this.QtyField.nativeElement.focus(); //set focus on non qty field.
        }
        //this two fields will be disable in all three cases.
        this.disableOpenQty = true;
        this.disableAcceptQty = true;
        // manage reject qty fields.
        if (this.recRejectQty == "N" || parseFloat(this.rejectQty).toFixed(4) == parseFloat("0").toFixed(4)) {
            this.showRejectQtyField = false;
        }
        else {
            if (parseFloat(this.rejectQty).toFixed(4) > parseFloat("0").toFixed(4)) {
                this.showRejectQtyField = true;
            }
        }
    };
    ProductionReceiptComponent.prototype.showViewAcceptItems = function ($event) {
        this.showMainLayoutItems = false;
        this.acceptItemsGrid = true;
        this.rejectItemsGrid = false;
        if (this.tracking == "S") {
            this.lotSerialHeading = this.translate.instant("Serial");
        }
        else {
            this.lotSerialHeading = this.translate.instant("LotNoHeading");
        }
    };
    ProductionReceiptComponent.prototype.showViewRejectItems = function ($event) {
        //show view reject items.
        this.showMainLayoutItems = false;
        this.acceptItemsGrid = false;
        this.rejectItemsGrid = true;
        if (this.tracking == "S") {
            this.lotSerialHeading = this.translate.instant("Serial");
        }
        else {
            this.lotSerialHeading = this.translate.instant("LotNoHeading");
        }
    };
    ProductionReceiptComponent.prototype.viewAcceptOkClick = function ($event) {
        //set variable to hide grid and show the form.
        this.showMainLayoutItems = true;
        this.acceptItemsGrid = false;
        this.rejectItemsGrid = false;
    };
    ProductionReceiptComponent.prototype.viewAcceptDeleteAll = function () {
        // clear all items from array after alert.
        // ckeck if after delete
        this.Lots = [];
        this.orignalActualQty = this.itemDataResponse.ORIGINALACTUALQUANTITY;
        this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        if (this.tracking == "S") {
            this.serialQty = Number(this.serialQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        }
    };
    ProductionReceiptComponent.prototype.viewAcceptDeleteItem = function ($event, rowIndex) {
        //splice item from Array. and update grid.
        console.log("event at delete click:" + JSON.stringify($event));
        var itemToDelete = this.Lots[rowIndex];
        this.acceptQty = this.acceptQty - itemToDelete.LotQty;
        if (this.acceptQty == 0) {
            this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        }
        this.orignalActualQty = this.orignalActualQty + itemToDelete.LotQty;
        this.Lots.splice(rowIndex, 1);
    };
    ProductionReceiptComponent.prototype.viewRejectOkClick = function () {
        //set variable to hide grid and show the form.
        this.showMainLayoutItems = true;
        this.acceptItemsGrid = false;
        this.rejectItemsGrid = false;
    };
    ProductionReceiptComponent.prototype.viewRejectDeleteAll = function () {
        // clear all items from array after alert.
        // ckeck if after delete
        // ckeck if after delete
        this.RejectLots = [];
        this.rejectQty = this.itemDataResponse.RejectQTY;
        this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
    };
    ProductionReceiptComponent.prototype.viewRejectDeleteItem = function ($event, rowIndex) {
        //splice item from Array. and update grid.
        console.log("event at delete click:" + JSON.stringify($event));
        var itemToDelete = this.RejectLots[rowIndex];
        this.rjQty = this.rjQty - itemToDelete.LotQty;
        if (this.rjQty == 0) {
            this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        }
        this.rejectQty = this.rejectQty + itemToDelete.LotQty;
        this.RejectLots.splice(rowIndex, 1);
    };
    ProductionReceiptComponent.prototype.ngOnDestroy = function () {
        if (this.orderNoListSubs != undefined)
            this.orderNoListSubs.unsubscribe();
    };
    ProductionReceiptComponent.prototype.confirmDialogForDeleteAllRejectItems = function () {
        this.dialogFor = "deleteAllRejectItems";
        this.dialogMsg = this.translate.instant("DeleteAllLines");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
    };
    ProductionReceiptComponent.prototype.confirmDialogForDeleteAllAcceptItems = function () {
        this.dialogFor = "deleteAllAcceptItems";
        this.dialogMsg = this.translate.instant("DeleteAllLines");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
    };
    ProductionReceiptComponent.prototype.confirmDialogForDeleteAcceptItem = function ($event, rowIndex) {
        this.rowIndexForDelete = rowIndex;
        this.dialogFor = "deleteAcceptItem";
        this.dialogMsg = this.translate.instant("DeleteRecordsMsg");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
    };
    ProductionReceiptComponent.prototype.confirmDialogForDeleteRejectItem = function ($event, rowIndex) {
        this.rowIndexForDelete = rowIndex;
        this.dialogFor = "deleteRejectItem";
        this.dialogMsg = this.translate.instant("DeleteRecordsMsg");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
    };
    ProductionReceiptComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("deleteAcceptItem"):
                    this.viewAcceptDeleteItem($event, this.rowIndexForDelete);
                    break;
                case ("deleteRejectItem"):
                    this.viewRejectDeleteItem($event, this.rowIndexForDelete);
                    break;
                case ("deleteAllAcceptItems"):
                    this.viewAcceptDeleteAll();
                    break;
                case ("deleteAllRejectItems"):
                    this.viewRejectDeleteAll();
                    break;
            }
        }
        else {
            //nothing to do.
        }
    };
    ProductionReceiptComponent.prototype.onCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SerialQty'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductionReceiptComponent.prototype, "SerialQtyField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('BatchQty'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductionReceiptComponent.prototype, "BatchQtyField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Qty'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductionReceiptComponent.prototype, "QtyField", void 0);
    ProductionReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-receipt',
            template: __webpack_require__(/*! ./production-receipt.component.html */ "./src/app/production/production-receipt/production-receipt.component.html"),
            styles: [__webpack_require__(/*! ./production-receipt.component.scss */ "./src/app/production/production-receipt/production-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_production_service__WEBPACK_IMPORTED_MODULE_4__["ProductionService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ProductionReceiptComponent);
    return ProductionReceiptComponent;
}());



/***/ }),

/***/ "./src/app/production/production-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/production/production-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionRoutingModule", function() { return ProductionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./production-issue/production-issue.component */ "./src/app/production/production-issue/production-issue.component.ts");
/* harmony import */ var _production_receipt_production_receipt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-receipt/production-receipt.component */ "./src/app/production/production-receipt/production-receipt.component.ts");





var routes = [
    { path: '', component: _production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_3__["ProductionIssueComponent"] },
    { path: 'production-issue', component: _production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_3__["ProductionIssueComponent"] },
    { path: 'production-receipt', component: _production_receipt_production_receipt_component__WEBPACK_IMPORTED_MODULE_4__["ProductionReceiptComponent"] },
];
var ProductionRoutingModule = /** @class */ (function () {
    function ProductionRoutingModule() {
    }
    ProductionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductionRoutingModule);
    return ProductionRoutingModule;
}());



/***/ }),

/***/ "./src/app/production/production.module.ts":
/*!*************************************************!*\
  !*** ./src/app/production/production.module.ts ***!
  \*************************************************/
/*! exports provided: ProductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionModule", function() { return ProductionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _production_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-routing.module */ "./src/app/production/production-routing.module.ts");
/* harmony import */ var _production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./production-issue/production-issue.component */ "./src/app/production/production-issue/production-issue.component.ts");
/* harmony import */ var _production_receipt_production_receipt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./production-receipt/production-receipt.component */ "./src/app/production/production-receipt/production-receipt.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var _production_issue_prod_orderlist_prod_orderlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./production-issue/prod-orderlist/prod-orderlist.component */ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.ts");
/* harmony import */ var _production_issue_prod_item_issue_prod_item_issue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./production-issue/prod-item-issue/prod-item-issue.component */ "./src/app/production/production-issue/prod-item-issue/prod-item-issue.component.ts");
















var ProductionModule = /** @class */ (function () {
    function ProductionModule() {
    }
    ProductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_5__["ProductionIssueComponent"], _production_receipt_production_receipt_component__WEBPACK_IMPORTED_MODULE_6__["ProductionReceiptComponent"], _production_issue_prod_orderlist_prod_orderlist_component__WEBPACK_IMPORTED_MODULE_14__["ProdOrderlistComponent"], _production_issue_prod_item_issue_prod_item_issue_component__WEBPACK_IMPORTED_MODULE_15__["ProdItemIssueComponent"]],
            imports: [
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _production_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductionRoutingModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_8__["TrnaslateLazyModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__["DateInputsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__["DropDownsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"]
            ]
        })
    ], ProductionModule);
    return ProductionModule;
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
    ProductionService.prototype.isSerialExists = function (serialNo, itemCode) {
        var jObject = { SerialNo: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: itemCode, SerialNo: serialNo }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/CheckSerialNo", jObject, this.httpOptions);
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
    ProductionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductionService);
    return ProductionService;
}());



/***/ })

}]);
//# sourceMappingURL=production-production-module.js.map