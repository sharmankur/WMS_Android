(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["production-production-module"],{

/***/ "./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/production/production-issue/prod-orderlist/prod-orderlist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"prodOrderlist == true\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'issueForProduction'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OrderNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name='orderNo' [(ngModel)]=\"orderNo\"\r\n                                    placeholder=\"{{'OrderNo'|translate}}\"\r\n                                    (blur)=\"getItemListForOrder(false,true)\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getOrderList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\" type=\"button\" (click)=\"getItemListForOrder(false,true)\">\r\n                                        <i class=\"opti-icon-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"showSOIetDetail\">\r\n                <!-- Serial tracked item -->\r\n                <div class=\"row\" *ngIf=\"soItemsDetail!=undefined && soItemsDetail!=null && soItemsDetail.length>0 \">\r\n                    <div class=\"col-12 col-sm-12 col-md-12\">\r\n                        <div class=\"d-flex align-items-center\">\r\n                            <h4 class=\"mt-2 mb-2  mt-md-0\">{{'Items'|translate}}</h4>\r\n                            <ul class=\"color-label mt-2 mt-md-0 ml-auto mb-2\">\r\n                                <li><span class=\"color-block blue\"></span><span>Batch</span></li>\r\n                                <li><span class=\"color-block red\"></span><span>Serial</span></li>\r\n                                <li><span class=\"color-block \"></span><span>None</span></li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-12 mb-2 border-bottom\"></div>\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"soItemsDetail\" [resizable]=\"true\" [pageSize]=\"pageSize\"\r\n                            [pageable]=\"pagable\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                            [height]=gridHeight [selectable]=\"true\" [rowClass]=\"rowCallback\" (selectionChange)=\"openPOByUOM($event, soItemsDetail.ItemCode)\"\r\n                            #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'ItemCode'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                        <dt>{{'IssuedQty'|translate}}</dt>\r\n                                        <dd>{{ dataItem.RPTQTY|numberFormat }}</dd>\r\n                                    </dl>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'BalanceQty'|translate}} <span class=\"opti_arrow-grid-detail float-right text-center opti_vertical-align ml-auto\">›</span></dt>\r\n                                        <dd>{{ dataItem.BalQty|numberFormat }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"ItemCode\" title=\"{{'ItemCode'|translate}}\"\r\n                                [width]=\"6\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"BalQty\" headerClass=\"text-right\" class=\"text-right\"\r\n                                [width]=\"6\" title=\"{{'BalanceQty'|translate}}\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.BalQty | numberFormat}}</ng-template>\r\n\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" headerClass=\"text-right\" class=\"text-right\"\r\n                                [width]=\"6\" format=\"{0:n3}\" title=\"{{'IssuedQty'|translate}}\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>{{dataItem.RPTQTY | numberFormat}}</ng-template>\r\n                            </kendo-grid-column>\r\n                        </kendo-grid>\r\n                        \r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">               \r\n             \r\n                <button type=\"button\" *ngIf=\"showAddToMeterialAndDelevery()\" (click)=\"submitProduction()\"\r\n                    class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-check\"></span>\r\n                    {{'Submit'|translate}}</button>\r\n                    <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"onCancelClick()\"><span\r\n                        class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n<app-out-prodissue *ngIf=\"prodOrderlist == false\" (screenBackEvent)=\"onBackToScreen($event)\"></app-out-prodissue>\r\n<span *ngIf=\"showLookupLoader == false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupkey)=\"getLookupKey($event)\"></app-lookup>\r\n</span>\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\"\r\n        [noButtonText]=\"noButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

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
/* harmony import */ var src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/outbound/outbound-data */ "./src/app/models/outbound/outbound-data.ts");
/* harmony import */ var src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/const/common-constants */ "./src/app/const/common-constants.ts");
/* harmony import */ var src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/Production/IFP */ "./src/app/models/Production/IFP.ts");











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
        this.prodOrderlist = true;
        this.outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__["OutboundData"]();
        this.pagable = false;
        this.pageSize = src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["Commonservice"].pageSize;
        this.showConfirmDialog = false;
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
        var outboundData = localStorage.getItem("OutboundData");
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            if (this.outbound != null && this.outbound.OrderData !== undefined && this.outbound.OrderData !== null && this.outbound.OrderData["Order No"] !== undefined && this.outbound.OrderData["Order No"] !== null) {
                this.orderNumber = this.outbound.OrderData["Order No"];
                this.orderNo = this.outbound.OrderData["Order No"];
                this.getItemListForOrder();
            }
            this.calculatePickQty();
        }
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
    ProdOrderlistComponent.prototype.showAddToMeterialAndDelevery = function () {
        var _this = this;
        var dBit = false;
        if (this.outbound && this.outbound.TempMeterials) {
            var data = this.outbound.TempMeterials.filter(function (tm) { return tm.Order["Order No"] === _this.orderNo; });
            dBit = data.length > 0;
        }
        else {
            dBit = false;
        }
        return dBit;
    };
    ProdOrderlistComponent.prototype.getItemListForOrder = function (fromIssueProduction, fromsearchButtonClick) {
        var _this = this;
        if (fromIssueProduction === void 0) { fromIssueProduction = false; }
        if (fromsearchButtonClick === void 0) { fromsearchButtonClick = false; }
        if (fromsearchButtonClick && this.outbound != null) {
            var outboundTempData = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__["OutboundData"]();
            outboundTempData.OrderData = this.outbound.OrderData;
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(outboundTempData));
        }
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
                    for (var i = 0; i < data.length; i++) {
                        _this.soItemsDetail[i].ITEMCODE = data[i].ItemCode;
                        _this.soItemsDetail[i].RPTQTY = data[i].IssuedQty;
                        _this.soItemsDetail[i].OPENQTY = data[i].BalQty;
                        _this.soItemsDetail[i].DOCENTRY = data[i].DocEntry;
                    }
                    if (_this.soItemsDetail.length > _this.pageSize) {
                        _this.pagable = true;
                    }
                    else {
                        _this.pagable = false;
                    }
                    //this.getLookupKey()
                    _this.calculatePickQty();
                }
                else {
                    if (fromIssueProduction) {
                        _this.orderNo = _this.orderNumber = "";
                        _this.soItemsDetail = [];
                    }
                    else {
                        _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                        _this.soItemsDetail = [];
                    }
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    ProdOrderlistComponent.prototype.openPOByUOM = function (selection) {
        var selectdeData = selection.selectedRows[0].dataItem;
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '' && outboundData != null && outboundData != 'null') {
            this.outbound = JSON.parse(outboundData);
            this.outbound.SelectedItem = selectdeData;
            //lsOutbound
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            this.prodOrderlist = false;
        }
    };
    ProdOrderlistComponent.prototype.getLookupKey = function (lookupValue) {
        this.orderNo = lookupValue["Order No"];
        if (this.outbound == null) {
            this.outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__["OutboundData"]();
        }
        this.outbound.OrderData = lookupValue;
        this.orderNumber = this.outbound.OrderData.RefDocEntry;
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        localStorage.setItem("ComingFrom", "ProductionIssue");
        // this.showDeleiveryAndAdd = this.showAddToMeterialAndDelevery();
    };
    ProdOrderlistComponent.prototype.onBackToScreen = function (event) {
        // Issue
        if (event.fromwhere == 1) {
            var outboundData = localStorage.getItem("OutboundData");
            debugger;
            if (outboundData != undefined && outboundData != '') {
                this.outbound = JSON.parse(outboundData);
                if (this.outbound != null && this.outbound.OrderData !== undefined && this.outbound.OrderData !== null && this.outbound.OrderData["Order No"] !== undefined && this.outbound.OrderData["Order No"] !== null) {
                    this.orderNumber = this.outbound.OrderData["Order No"];
                    this.orderNo = this.outbound.OrderData["Order No"];
                    this.getItemListForOrder(true);
                }
                this.calculatePickQty();
            }
            this.prodOrderlist = !this.prodOrderlist;
        }
        else if (event.fromwhere == 2) {
            this.ngOnInit();
            this.prodOrderlist = !this.prodOrderlist;
        }
        else {
            this.prodOrderlist = !this.prodOrderlist;
        }
    };
    ProdOrderlistComponent.prototype.calculatePickQty = function () {
        if (this.soItemsDetail) {
            for (var i = 0; i < this.soItemsDetail.length; i++) {
                var soelement = this.soItemsDetail[i];
                var totalPickQty = 0;
                if (this.outbound && this.outbound.TempMeterials && this.outbound.TempMeterials.length > 0) {
                    for (var j = 0; j < this.outbound.TempMeterials.length; j++) {
                        var element = this.outbound.TempMeterials[j];
                        console.log("My Element", element);
                        if (soelement.ROWNUM === element.Item.ROWNUM && soelement.ITEMCODE === element.Item.ITEMCODE && this.outbound.OrderData.DOCNUM === element.Order.DOCNUM) {
                            totalPickQty = totalPickQty + parseInt(element.Meterial.MeterialPickQty);
                        }
                    }
                }
                // Total Qty of Item
                soelement.RPTQTY = totalPickQty;
                this.soItemsDetail[i] = soelement;
            }
        }
    };
    // Issue For Production
    ProdOrderlistComponent.prototype.submitProduction = function (orderId) {
        if (orderId === void 0) { orderId = null; }
        this.addToDeleiver(false);
        this.prepareDeleiveryCollectionAndDeliver(orderId);
    };
    ProdOrderlistComponent.prototype.addToDeleiver = function (goToCustomer) {
        if (goToCustomer === void 0) { goToCustomer = true; }
        this.showLoader = true;
        //lsOutbound
        var outboundData = localStorage.getItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData);
        if (outboundData != undefined && outboundData != '') {
            this.outbound = JSON.parse(outboundData);
            this.prepareDeleiveryTempCollection();
            localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
            this.showLoader = false;
        }
    };
    ProdOrderlistComponent.prototype.prepareDeleiveryTempCollection = function () {
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
    ProdOrderlistComponent.prototype.prepareDeleiveryCollectionAndDeliver = function (orderId) {
        var _this = this;
        if (this.outbound != null && this.outbound != undefined
            && this.outbound.DeleiveryCollection != null && this.outbound.DeleiveryCollection != undefined
            && this.outbound.DeleiveryCollection.length > 0) {
            if (orderId !== undefined && orderId !== null) {
                this.outbound.DeleiveryCollection = this.outbound.DeleiveryCollection.filter(function (d) { return d.Order.DOCNUM === orderId; });
            }
            var arrIssues = [];
            var arrLots = [];
            var prodIssueModel = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_10__["ProductionIssueModel"]();
            // Hdr
            var comDbId = localStorage.getItem('CompID');
            var token = localStorage.getItem('Token');
            var guid = localStorage.getItem('GUID');
            var uid = localStorage.getItem('UserId');
            var hdrLine = 0;
            var limit = -1;
            var hdrLineVal = -1;
            var refLineNo = 0;
            this.showLoader = true;
            var _loop_2 = function (index) {
                //get first item from collection        
                var element = this_2.outbound.DeleiveryCollection[index];
                // let coll=Get all Item for Item.Lineno===i
                var lineDeleiveryCollection = this_2.outbound.DeleiveryCollection.filter(function (d) {
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
                        var item = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_10__["Item"]();
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
                        var dtl = new src_app_models_Production_IFP__WEBPACK_IMPORTED_MODULE_10__["Lot"]();
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
            var this_2 = this;
            // Loop through delivery collection 
            for (var index = 0; index < this.outbound.DeleiveryCollection.length; index++) {
                _loop_2(index);
            }
            console.log("Dtl", arrLots);
            console.log("hdr", arrIssues);
            if (arrIssues.length > 0 && arrLots.length > 0) {
                prodIssueModel.Items = arrIssues;
                prodIssueModel.Lots = arrLots;
            }
            this.productionService.submitProduction(prodIssueModel).subscribe(function (data) {
                if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                    _this.showLoader = false;
                    _this.toastr.success('', _this.translate.instant("ProductionIssueSuccess") + " : " + data[0].SuccessNo);
                    _this.resetIssueProduction();
                }
                else if (data[0].ErrorMsg == "7001") {
                    _this.showLoader = false;
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                else {
                    _this.showLoader = false;
                    _this.toastr.error('', data[0].ErrorMsg);
                    // Reset All meterial on error.
                    _this.outbound.DeleiveryCollection = [];
                    _this.outbound.SelectedMeterials = [];
                    _this.outbound.TempMeterials = [];
                    localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(_this.outbound));
                    _this.getItemListForOrder();
                }
            }, function (error) {
                _this.showLoader = false;
                console.log(error);
            });
            console.log("shdr", arrIssues);
        }
    };
    ProdOrderlistComponent.prototype.resetIssueProduction = function () {
        var data = this.outbound;
        this.outbound = new src_app_models_outbound_outbound_data__WEBPACK_IMPORTED_MODULE_8__["OutboundData"]();
        localStorage.setItem(src_app_const_common_constants__WEBPACK_IMPORTED_MODULE_9__["CommonConstants"].OutboundData, JSON.stringify(this.outbound));
        this.orderNo = "";
        this.soItemsDetail = [];
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

module.exports = "<app-prod-orderlist *ngIf=\"prodissueComponent == 1\" ></app-prod-orderlist>\r\n\r\n<!-- <app-prod-item-issue *ngIf=\"prodissueComponent==2\"></app-prod-item-issue> -->"

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

module.exports = "<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"showMainLayoutItems\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'receiptFromProduction'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OrderNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=orderNumber\r\n                                    (blur)=\"OnOrderValueChange()\" name='orderNo' placeholder=\"{{'OrderNo'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" (click)=\"OnOrderLookupClick()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\" (click)=\"getProductionDetail()\"\r\n                                        type=\"button\">\r\n                                        <i class=\"opti-icon-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- container row -->\r\n            <div *ngIf=\"displayFormAndSubmit\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Item'|translate}}</label>\r\n                            <div class=\"col-sm-9 d-flex align-items-center\">\r\n                                <p class=\"mb-0\">{{itemCode}}</p>\r\n                                <p class=\"mb-0\" *ngIf=\"showColon\">:</p>\r\n                                <p class=\"mb-0\">{{itemName}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"showRejectQtyField\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ProdReceipt_TransType'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <fieldset class=\"d-block w-100\">\r\n                                    <div class=\"d-flex align-items-center w-100\">\r\n                                        <div class=\"d-flex align-items-center\">\r\n\r\n                                            <input type=\"radio\" id=\"radio1\" name=\"group\" class=\"k-radio\"\r\n                                                [(ngModel)]=\"model.options\" value=\"1\">\r\n                                            <label class=\"k-radio-label mr-3\"\r\n                                                for=\"radio1\">{{'PostToInv'|translate}}</label>\r\n                                            <input type=\"radio\" id=\"radio2\" name=\"group\" class=\"k-radio\"\r\n                                                [(ngModel)]=\"model.options\" value=\"2\">\r\n                                            <label class=\"k-radio-label mr-3\"\r\n                                                for=\"radio2\">{{'PostToReject'|translate}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='S'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'SerialQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" #SerialQty class=\"form-control form-control-sm text-right\"\r\n                                    [(ngModel)]=enteredQty name='SerialQty' placeholder=\"{{'SerialQty'|translate}}\"\r\n                                    [disabled]=\"disableSearialQty\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='B'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BatchQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"number\" #BatchQty class=\"form-control form-control-sm text-right\"\r\n                                [ngModel]=\"enteredQty | numberFormat\" \r\n                                (ngModelChange)=\"enteredQty=$event\" \r\n                                name='BatchQty' placeholder=\"{{'BatchQty'|translate}}\"> \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='N'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Quantity'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" #Qty class=\"form-control form-control-sm text-right\" name='Qty'\r\n                                [ngModel]=\"enteredQty | numberFormat\" \r\n                                (ngModelChange)=\"enteredQty=$event\"  placeholder=\"{{'Quantity'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='S'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'SerialNo'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" (blur)=\"checkAndValidateSerial()\"\r\n                                 [(ngModel)]=serialBatchNo name='Serial' placeholder=\"{{'Serial'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tracking=='B'\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BatchNo'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name='Batch'\r\n                                    [(ngModel)]=serialBatchNo  (blur)=\"checkAndValidateSerial()\" placeholder=\"{{'BatchNo'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"shouldShowExpiryDate\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\"\r\n                                class=\"col-sm-3 col-form-label\">{{'ExpiryDate'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <kendo-datepicker [format]=dateFormat [value]=\"value\" name=\"expiryDate\"\r\n                                    [(ngModel)]=expDate placeholder={{dateFormat}}></kendo-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BinNo'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm\" (blur)=\"OnBinValueChange()\"\r\n                                        [(ngModel)]=binNo name='binNo' placeholder=\"{{'BinNo'|translate}}\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getBinList()\">\r\n                                            <i class=\"opti-icon-hammenu\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'OpenQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='openQty'\r\n                                    [attr.disabled]=\"disableOpenQty\" [ngModel]=\"orignalActualQty | numberFormat\"\r\n                                    (ngModelChange)=\"orignalActualQty=$event\" placeholder=\"{{'OpenQty'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"showRejectQtyField\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ProdReceipt_DefectQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='defectQty'\r\n                                    [attr.disabled]=\"disableDefRejQty\" [ngModel]=\"rejectQty | numberFormat\"\r\n                                    (ngModelChange)=\"rejectQty=$event\" placeholder=\"{{'ProdReceipt_DefectQty'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <h5>{{'AssignedQuantity'|translate}}</h5>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ProdReceipt_AcceptQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='acceptQty'\r\n                                    placeholder=\"{{'ProdReceipt_AcceptQty'|translate}}\" [attr.disabled]=\"disableAcceptQty\"\r\n                                    [ngModel]=\"acceptQty | numberFormat\" (ngModelChange)=\"acceptQty=$event\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\" *ngIf=\"showRejectQtyField\">\r\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ProdReceipt_RejectQty'|translate}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" name='rejectQty'\r\n                                    [ngModel]=\"rjQty | numberFormat\" (ngModelChange)=\"rjQty=$event\"\r\n                                    [attr.disabled]=\"disableDefRejQty\" placeholder=\"{{'ProdReceipt_RejectQty'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- container row end -->\r\n\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" *ngIf=\"displayFormAndSubmit\" (click)=\"submitRecord($event)\"\r\n                    class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Submit'|translate}}</button>\r\n                <button class=\"btn btn-primary k-button btn-sm btn-icon-with-text\" *ngIf=\"showAddMoreButton\"\r\n                    type=\"button\" (click)=\"addMoreClick($event)\">\r\n                    <span class=\"k-icon k-i-plus\" role=\"presentation\"></span> {{'AddMore'|translate}}</button>\r\n                <button class=\"btn btn-primary k-button btn-sm btn-icon-with-text mr-1\" *ngIf=\"showViewAcceptButton\"\r\n                    type=\"button\" (click)=\"showViewAcceptItems($event)\">\r\n                    <span class=\"k-icon k-i-preview\" role=\"presentation\"></span> {{'ViewAccept'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text\"\r\n                    *ngIf=\"showViewRejectButton\" (click)=\"showViewRejectItems($event)\"><span\r\n                        class=\"k-icon k-i-preview\" role=\"presentation\"></span> {{'ViewReject'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"\r\n                    (click)=\"onCancelClick()\"><span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span>\r\n                    {{'Cancel'|translate}}</button>\r\n                <!-- <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" \r\n                  roterLink=\"binTransfer\" skipLocationChange><i class=\"opti-icon-arrow-next\"></i></button> -->\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- Accept Item Grid Start -->\r\n<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"acceptItemsGrid\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'ProdReceipt_AcceptedLot'|translate}}\r\n            </h3>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid  [kendoGridBinding]=\"Lots\" [resizable]=\"true\" [pageSize]=\"pageSize\" [pageable]=\"pagable\"\r\n                        [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup [height]=gridHeight\r\n                        [selectable]=\"true\" [data]=\"ItemArray\" style=\"max-height:400px\" class=\"no-shadow\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'AcceptedSerials '|translate}}\"\r\n                            class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex='rowIndex'>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt *ngIf=\"tracking!='N'\">{{lotSerialHeading}}</dt>\r\n                                    <dd *ngIf=\"tracking!='N'\">{{ dataItem.LotNumber }}</dd>\r\n\r\n                                    <dt>{{'Quantity'|translate}}</dt>\r\n                                    <dd>{{ dataItem.LotQty }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'BinNo'|translate}}\r\n                                        <button  (click)=\"confirmDialogForDeleteAcceptItem(rowIndex,gridItem)\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\">\r\n                                            <span class=\"k-icon k-i-delete\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.Bin }}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column *ngIf=\"tracking!='N'\" media=\"(min-width: 768px)\" field=\"LotNumber\" title=\"{{lotSerialHeading}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" title=\"{{'BinNo'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" title=\"{{'Quantity'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" class=\"text-center\" headerClass=\"text-center\" width=\"60\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button (click)=\"confirmDialogForDeleteAcceptItem(rowIndex,gridItem)\"\r\n                                    class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\">\r\n                                    <span class=\"k-icon k-i-delete\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" (click)=\"viewAcceptOkClick($event)\"\r\n                    class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"\r\n                    (click)=\"confirmDialogForDeleteAllAcceptItems()\">\r\n                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- Accept Item Grid End -->\r\n\r\n<!-- Reject Item Grid Start -->\r\n<div class=\"opti_container position-relative bg-white rounded\" *ngIf=\"rejectItemsGrid\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'ProdReceipt_RejectedLot'|translate}}\r\n            </h3>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                    <kendo-grid [kendoGridBinding]=\"RejectLots\" [resizable]=\"true\" [pageSize]=\"pageSize\"\r\n                        [pageable]=\"pagable\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                        [height]=gridHeight [selectable]=\"true\" [data]=\"ItemArray\" style=\"max-height:400px\"\r\n                        class=\"no-shadow\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'RejectedSerials '|translate}}\"\r\n                            class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex='rowIndex'>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt *ngIf=\"tracking!='N'\">{{lotSerialHeading}}</dt>\r\n                                    <dd *ngIf=\"tracking!='N'\">{{ dataItem.LotNumber }}</dd>\r\n\r\n                                    <dt>{{'Quantity'|translate}}</dt>\r\n                                    <dd>{{ dataItem.LotQty }}</dd>\r\n                                </dl>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'BinNo'|translate}}\r\n                                        <button (click)=\"confirmDialogForDeleteRejectItem(rowIndex,gridItem)\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" type=\"button\">\r\n                                            <span class=\"k-icon k-i-delete\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.Bin }}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column *ngIf=\"tracking!='N'\" media=\"(min-width: 768px)\" field=\"LotNumber\" title=\"{{lotSerialHeading}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" title=\"{{'BinNo'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" title=\"{{'Quantity'|translate}}\">\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column headerClass=\"text-center\" class=\"text-center\" media=\"(min-width: 768px)\" field=\"\" width=\"60\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button (click)=\"confirmDialogForDeleteRejectItem(rowIndex,gridItem)\"\r\n                                    class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\">\r\n                                    <span class=\"k-icon k-i-delete\"></span>\r\n                                   \r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" (click)=\"viewRejectOkClick($event)\"\r\n                    class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Ok'|translate}}\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"\r\n                    (click)=\"confirmDialogForDeleteAllRejectItems()\">\r\n                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span> {{'DeleteAll'|translate}}\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- Reject Item Grid End -->\r\n\r\n<div *ngIf=\"showLookupLoader==false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</div>\r\n<!-- loader start -->\r\n<div class=\"opti_loader\" *ngIf=\"showLookupLoader==true\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<!--delete dialog start-->\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\"\r\n        [noButtonText]=\"noButtonText\" (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n<!--delete dialog end-->\r\n\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

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
        this.shouldShowExpiryDate = true;
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
        this.pagable = false;
        this.pageSize = _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"].pageSize;
        this.showMainLayoutItems = true;
        this.lotSerialHeading = this.translate.instant("BatchNo");
    }
    ProductionReceiptComponent.prototype.ngOnInit = function () {
        this.enterQtyPlaceholder = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        this.enteredQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision")));
        this.acceptQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        this.rjQty = Number(this.defaultQty).toFixed(Number(localStorage.getItem("DecimalPrecision"))); //ye niche vali field jo calculation se dikhate hai.
        console.log("entered qty" + this.enteredQty);
        console.log("acceptQty qty" + this.acceptQty);
        this.dateFormat = localStorage.getItem("DATEFORMAT");
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
                    ExpiryDate: this.GetReceiptSubmitDateFormat(this.expDate)
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
                    ExpiryDate: this.GetReceiptSubmitDateFormat(this.expDate)
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
            //case when already added items are there and user also want to add current record with add more items on submit click.
            if (this.tracking == "S" || this.tracking == "B") {
                if (this.serialBatchNo != null && this.serialBatchNo != undefined && this.serialBatchNo != "") {
                    this.addMoreClick(); //adding the current displaying item on add more then below submit data code will run.
                }
            }
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
                    // this.toastr.success( this.translate.instant("FGRSuccessMessage") +data[0].SuccessNo);
                    _this.toastr.success('', _this.translate.instant("FGRSuccessMessage") + " " + data[0].SuccessNo);
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
        this.showAddMoreButton = false;
        this.showViewAcceptButton = false;
        this.showViewRejectButton = false;
        this.shouldShowExpiryDate = true;
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
        this.showViewAcceptButton = false;
        this.showViewRejectButton = false;
        this.showAddMoreButton = false;
    };
    ProductionReceiptComponent.prototype.resetOnSerchClick = function () {
        this.showViewAcceptButton = false;
        this.showViewRejectButton = false;
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
            if (this.tracking == "N") {
            }
            else {
                //check case or check karna padega ki non tracked hai kya
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
            }
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
                ExpiryDate: this.GetReceiptSubmitDateFormat(this.expDate)
            });
            //this.totalQtyToSubmit = tempQty; // at the end update totalQty with calculated qty.
            this.acceptQty = tempQty;
            var initialOrignalActualQty = this.itemDataResponse.ORIGINALACTUALQUANTITY;
            this.orignalActualQty = initialOrignalActualQty - tempQty;
        }
        if (this.Lots.length > this.pageSize) {
            this.pagable = true;
        }
        else {
            this.pagable = false;
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
                ExpiryDate: this.GetReceiptSubmitDateFormat(this.expDate)
            });
            //this.totalQtyToSubmit = tempQty; // at the end update totalQty with calculated qty.
            this.rjQty = tempQty;
            var orignalRejectQty = this.itemDataResponse.RejectQTY;
            this.rejectQty = orignalRejectQty - tempQty;
            // console.log("total qty to submit:" + this.totalQtyToSubmit);
        }
        if (this.RejectLots.length > this.pageSize) {
            this.pagable = true;
        }
        else {
            this.pagable = false;
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
            ExpiryDate: this.GetReceiptSubmitDateFormat(this.expDate)
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
        var type;
        if (this.model.options == '1')
            type = 0;
        if (this.model.options == '2')
            type = 1;
        this.checkValidateSerialSubs = this.productionService.isSerialExists(this.serialBatchNo, this.itemCode, type, this.tracking, this.orderNumber).subscribe(function (data) {
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
                else if (data == "2") {
                    _this.toastr.error('', _this.translate.instant("InvalidBatchSerial"));
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
        this.showLoader = true;
        this.orderNoListSubs = this.productionService.getOrderNumberList(this.orderNumber).subscribe(function (data) {
            _this.showLoader = false;
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
                    _this.shouldShowExpiryDate = true;
                    if ("N" == _this.itemDataResponse.TRACKING) {
                        _this.shouldShowExpiryDate = false;
                    }
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
        this.showLoader = true;
        this.binListSubs = this.productionService.GetBinsList().subscribe(function (data) {
            _this.showLoader = false;
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
        // show add more button incase of non track item if rejected items available.
        if (this.tracking == "N" && this.showRejectQtyField == true) {
            this.showAddMoreButton = true;
        }
    };
    ProductionReceiptComponent.prototype.showViewAcceptItems = function ($event) {
        this.showMainLayoutItems = false;
        this.acceptItemsGrid = true;
        this.rejectItemsGrid = false;
        if (this.tracking == "S") {
            this.lotSerialHeading = this.translate.instant("SerialNo");
        }
        else {
            this.lotSerialHeading = this.translate.instant("BatchNo");
        }
    };
    ProductionReceiptComponent.prototype.showViewRejectItems = function ($event) {
        //show view reject items.
        this.showMainLayoutItems = false;
        this.acceptItemsGrid = false;
        this.rejectItemsGrid = true;
        if (this.tracking == "S") {
            this.lotSerialHeading = this.translate.instant("SerialNo");
        }
        else {
            this.lotSerialHeading = this.translate.instant("BatchNo");
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
        this.gridDataAcceptItems.data = this.Lots;
        //var values=  this.Lots.splice(rowIndex,1);
        // this.Lots = values; 
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
        this.gridDataRejectItems.data = this.RejectLots;
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
    ProductionReceiptComponent.prototype.confirmDialogForDeleteAcceptItem = function (rowIndex, gridData) {
        this.rowIndexForDelete = rowIndex;
        this.dialogFor = "deleteAcceptItem";
        this.dialogMsg = this.translate.instant("DeleteRecordsMsg");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
        this.rowindexDelAccpetItem = rowIndex;
        this.gridDataAcceptItems = gridData;
    };
    ProductionReceiptComponent.prototype.confirmDialogForDeleteRejectItem = function (rowIndex, gridData) {
        this.rowIndexForDelete = rowIndex;
        this.dialogFor = "deleteRejectItem";
        this.dialogMsg = this.translate.instant("DeleteRecordsMsg");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.showConfirmDialog = true;
        this.rowindexDelRejectItem = rowIndex;
        this.gridDataRejectItems = gridData;
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
    ProductionReceiptComponent.prototype.GetReceiptSubmitDateFormat = function (EXPDATE) {
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
            return day + ":" + mth + ":" + d.getFullYear();
            //return mth + "/" + day + "/" + d.getFullYear();
        }
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
/* harmony import */ var _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../outbound/outbound.module */ "./src/app/outbound/outbound.module.ts");
















var ProductionModule = /** @class */ (function () {
    function ProductionModule() {
    }
    ProductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_production_issue_production_issue_component__WEBPACK_IMPORTED_MODULE_5__["ProductionIssueComponent"], _production_receipt_production_receipt_component__WEBPACK_IMPORTED_MODULE_6__["ProductionReceiptComponent"], _production_issue_prod_orderlist_prod_orderlist_component__WEBPACK_IMPORTED_MODULE_14__["ProdOrderlistComponent"]],
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
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
                _outbound_outbound_module__WEBPACK_IMPORTED_MODULE_15__["OutboundModule"]
            ]
        })
    ], ProductionModule);
    return ProductionModule;
}());



/***/ })

}]);
//# sourceMappingURL=production-production-module.js.map