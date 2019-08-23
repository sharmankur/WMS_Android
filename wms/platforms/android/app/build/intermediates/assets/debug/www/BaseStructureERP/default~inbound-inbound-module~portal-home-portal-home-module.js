(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~inbound-inbound-module~portal-home-portal-home-module"],{

/***/ "./src/app/inbound/inbound-details/inbound-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inbound/inbound-details/inbound-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'Inbound_GoodsReceiptPO'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'VendorCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"VendCode\" [(ngModel)]=\"VendCode\" placeholder=\"{{'VendorCode'|translate}}\"\r\n                                    (blur)=\"OnVendorChange()\" [disabled]=showGRPOGridAndBtn>\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"onVendorLookupClick()\" [disabled]=showGRPOGridAndBtn>\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'VendorName'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"VendName\" [(ngModel)]=\"VendName\" [disabled]=\"true\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Kendo Table Grid Row start -->\r\n            <div class=\"row\" *ngIf=\"showGRPOGridAndBtn\">\r\n                <div class=\"col-12 col-sm-12 col-md-12\">\r\n                    <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"Polist\" [resizable]=\"true\"  [sortable]=\"true\" [height]=gridHeight \r\n                        [selectable]=\"true\" (selectionChange)=\"onPOSelection($event)\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" class=\"opti_mobile-grid-td\" title=\"{{'POList'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl w-100\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'PurchaseOrderNumber'|translate}}\r\n                                        <div class=\"d-flex align-items-center  ml-auto\">\r\n                                            <span class=\"opti_arrow-grid-detail text-center opti_vertical-align\">›</span>\r\n                                            <button class=\"btn btn-danger k-button btn-sm btn-icon ml-2\" type=\"button\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                                <span class=\"k-icon k-i-delete\"></span>\r\n                                            </button>\r\n                                        </div>\r\n                                    </dt>\r\n                                    <dd>{{ dataItem.PONumber }}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"PONumber\" headerClass=\"text-center\" class=\"text-center\" title=\"{{'PurchaseOrderNumber'|translate}}\"\r\n                            [width]=\"90\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" headerClass=\"text-center\" class=\"text-center\" title=\"\" [width]=\"10\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button class=\"btn btn-danger k-button btn-sm btn-icon\" type=\"button\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                    <span class=\"k-icon k-i-delete\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n            <!-- Kendo Table Grid Row end -->\r\n\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button *ngIf=\"showGRPOGridAndBtn\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" type=\"button\" (click)=\"receive()\">\r\n                    <span class=\"k-icon k-i-check\" role=\"presentation\"></span> {{'Receive'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"OnCancelClick()\">\r\n                    <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon\" \r\n                (click)=\"onNextClick()\" [disabled]=\"!showNext\" skipLocationChange >\r\n                    <i class=\"opti-icon-arrow-next\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n</div>\r\n<span *ngIf=\"showLookupLoader == false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n\r\n<div>\r\n    <app-display-pdf *ngIf=\"displayPDF1\" [base64String]='base64String' [fileName]='fileName' (pdfClose)=\"closePDF($event)\"></app-display-pdf>\r\n</div>\r\n\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/inbound/inbound-details/inbound-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/inbound/inbound-details/inbound-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaW5ib3VuZC1kZXRhaWxzL2luYm91bmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inbound/inbound-details/inbound-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inbound/inbound-details/inbound-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: InboundDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundDetailsComponent", function() { return InboundDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbound_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inbound-master.component */ "./src/app/inbound/inbound-master.component.ts");








var InboundDetailsComponent = /** @class */ (function () {
    function InboundDetailsComponent(inboundService, commonservice, router, toastr, translate, inboundMasterComponent) {
        this.inboundService = inboundService;
        this.commonservice = commonservice;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.inboundMasterComponent = inboundMasterComponent;
        this.showLookupLoader = true;
        this.showLoader = false;
        this.showGRPOGridAndBtn = false;
        this.Polist = [];
        this.dialogFor = "";
        this.dialogMsg = "";
        this.showNext = false;
        this.yesButtonText = "";
        this.noButtonText = "";
        this.showPDF = false;
        this.base64String = "";
        this.fileName = "";
        this.displayPDF1 = false;
        this.detailsAvailable = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    InboundDetailsComponent.prototype.ngOnInit = function () {
        this.VendCode = localStorage.getItem("VendCode");
        this.VendName = localStorage.getItem("VendName");
        if (this.VendCode != "") {
            this.showNext = true;
        }
        else {
            this.showNext = false;
        }
        this.dateAvailableToReceieve();
    };
    InboundDetailsComponent.prototype.dateAvailableToReceieve = function () {
        var dataModel = localStorage.getItem("addToGRPOPONumbers");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            this.showGRPOGridAndBtn = false;
        }
        else {
            var inboundData = JSON.parse(dataModel);
            this.Polist = inboundData.PONumbers;
            this.showGRPOGridAndBtn = true;
            this.detailsAvailable = true;
        }
    };
    InboundDetailsComponent.prototype.receive = function () {
        var dataModel = localStorage.getItem("AddToGRPO");
        if (dataModel != null && dataModel != undefined && dataModel != "") {
            this.showPrintConfirmDialog();
        }
    };
    InboundDetailsComponent.prototype.showPrintConfirmDialog = function () {
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.dialogFor = "receiveSinglePDFDialog";
        this.dialogMsg = this.translate.instant("PrintAllLabelsAfterSubmit");
        this.showConfirmDialog = true; // show dialog 
    };
    InboundDetailsComponent.prototype.SubmitGoodsReceiptPO = function (oSubmitPOLotsObj) {
        var _this = this;
        this.showLoader = true;
        this.inboundService.SubmitGoodsReceiptPO(oSubmitPOLotsObj).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                // alert("Goods Receipt PO generated successfully with Doc No: " + data.DocEntry);
                _this.toastr.success('', _this.translate.instant("GRPOSuccessMessage") + " " + data[0].SuccessNo);
                localStorage.setItem("Line", "0");
                localStorage.setItem("GRPOReceieveData", "");
                localStorage.setItem("AddToGRPO", "");
                localStorage.setItem("addToGRPOPONumbers", "");
                _this.dateAvailableToReceieve();
                if (_this.showPDF) {
                    //show pdf
                    _this.displayPDF(data[0].DocEntry);
                    _this.showPDF = false;
                }
                else {
                    // no need to display pdf
                    //this.inboundMasterComponent.inboundComponent = 1;
                }
            }
            else if (data[0].ErrorMsg == "7001") {
                _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                return;
            }
            else {
                // alert(data[0].ErrorMsg);
                _this.toastr.error('', data[0].ErrorMsg);
            }
        }, function (error) {
            console.log("Error: ", error);
            // alert("fail");
        });
    };
    InboundDetailsComponent.prototype.onVendorLookupClick = function () {
        var _this = this;
        this.showLoader = true;
        this.inboundService.getVendorList().subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data.Table;
                _this.lookupfor = "VendorList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.toastr.error('', error);
        });
    };
    InboundDetailsComponent.prototype.OnVendorChange = function () {
        var _this = this;
        if (this.VendCode == "" || this.VendCode == undefined) {
            return;
        }
        this.showLoader = true;
        this.inboundService.IsVendorExists(this.VendCode).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data != undefined && data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data[0].Result == "0") {
                    _this.toastr.error('', _this.translate.instant("VendorExistMessge"));
                    _this.VendCode = "";
                    _this.showNext = false;
                    return;
                }
                else {
                    _this.VendCode = data[0].ID;
                    _this.VendName = data[0].Name;
                    _this.showNext = true;
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("VendorExistMessge"));
                _this.VendCode = "";
                _this.showNext = false;
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.toastr.error('', error);
        });
    };
    InboundDetailsComponent.prototype.getLookupValue = function ($event) {
        this.VendCode = $event[0];
        this.VendName = $event[1];
        this.showNext = true;
        this.detailsAvailable = true;
    };
    InboundDetailsComponent.prototype.onNextClick = function () {
        if (this.VendCode != undefined && this.VendCode != "") {
            this.inboundMasterComponent.selectedVernder = this.VendCode;
            this.inboundMasterComponent.inboundComponent = 2;
            localStorage.setItem("VendCode", this.VendCode);
            localStorage.setItem("VendName", this.VendName);
            localStorage.setItem("selectedPO", "");
            localStorage.setItem("PONumber", "");
        }
        else {
            this.toastr.error('', this.translate.instant("SelectVendorValidateMsg"));
        }
    };
    InboundDetailsComponent.prototype.OnCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    InboundDetailsComponent.prototype.onPOSelection = function ($event) {
        localStorage.setItem("selectedPO", $event.selectedRows[0].dataItem.PONumber);
        this.inboundMasterComponent.inboundComponent = 2;
    };
    InboundDetailsComponent.prototype.openConfirmForDelete = function (rowindex, gridData) {
        this.dialogFor = "deleteRow";
        this.dialogMsg = this.translate.instant("DoYouWantToDelete");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.rowindexForDelete = rowindex;
        this.gridDataAfterDelete = gridData;
        this.showConfirmDialog = true;
    };
    InboundDetailsComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("deleteRow"):
                    this.DeleteRowClick(this.rowindexForDelete, this.gridDataAfterDelete);
                    break;
                case ("receiveSinglePDFDialog"):
                    this.SubmitGoodsReceiptPO(JSON.parse(localStorage.getItem("AddToGRPO")));
                    this.showPDF = true;
                    break;
            }
        }
        else {
            if ($event.Status == "cancel") {
                // when user click on cross button nothing to do.
            }
            else if ($event.From == "receiveSinglePDFDialog") {
                this.SubmitGoodsReceiptPO(JSON.parse(localStorage.getItem("AddToGRPO")));
            }
        }
    };
    InboundDetailsComponent.prototype.DeleteRowClick = function (rowindex, gridData) {
        var dataModel = localStorage.getItem("addToGRPOPONumbers");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
        }
        else {
            var inboundData = JSON.parse(dataModel);
            inboundData.PONumbers.splice(rowindex, 1);
            this.removePODetailData(this.Polist[rowindex].PONumber);
        }
        this.Polist.splice(rowindex, 1);
        localStorage.setItem("addToGRPOPONumbers", JSON.stringify(inboundData));
        gridData.data = this.Polist;
        if (this.Polist.length > 0) {
            this.showGRPOGridAndBtn = true;
        }
        else {
            this.showGRPOGridAndBtn = false;
        }
    };
    InboundDetailsComponent.prototype.removePODetailData = function (PONumbers) {
        var inboundData = JSON.parse(localStorage.getItem("AddToGRPO"));
        if (inboundData != undefined && inboundData != null && inboundData != "") {
            for (var i = 0; i < inboundData.POReceiptLots.length; i++) {
                if (inboundData.POReceiptLots[i].PONumber == PONumbers) {
                    for (var j = 0; j < inboundData.POReceiptLotDetails.length; j++) {
                        if (inboundData.POReceiptLotDetails[j].ParentLineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.POReceiptLotDetails.splice(j, 1);
                            j = -1;
                        }
                    }
                    for (var k = 0; k < inboundData.UDF.length; k++) {
                        if (inboundData.UDF[k].Key == "OPTM_TARGETWHS" &&
                            inboundData.UDF[k].LineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.UDF.splice(k, 1);
                        }
                        if (inboundData.UDF[k].Key == "OPTM_TARGETBIN" &&
                            inboundData.UDF[k].LineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.UDF.splice(k, 1);
                        }
                    }
                    for (var m = 0; m < inboundData.LastSerialNumber.length; m++) {
                        if (inboundData.LastSerialNumber[m].ItemCode == inboundData.POReceiptLots[i].ItemCode) {
                            inboundData.LastSerialNumber.splice(m, 1);
                            m = -1;
                        }
                    }
                    inboundData.POReceiptLots.splice(i, 1);
                }
            }
            localStorage.setItem("AddToGRPO", JSON.stringify(inboundData));
        }
        var GRPOReceieveData = JSON.parse(localStorage.getItem("GRPOReceieveData"));
        if (GRPOReceieveData != undefined && GRPOReceieveData != null && GRPOReceieveData != "") {
            for (var i = 0; i < GRPOReceieveData.POReceiptLots.length; i++) {
                if (GRPOReceieveData.POReceiptLots[i].PONumber == PONumbers) {
                    for (var j = 0; j < GRPOReceieveData.POReceiptLotDetails.length; j++) {
                        if (GRPOReceieveData.POReceiptLotDetails[j].ParentLineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.POReceiptLotDetails.splice(j, 1);
                            j = -1;
                        }
                    }
                    for (var k = 0; k < GRPOReceieveData.UDF.length; k++) {
                        if (GRPOReceieveData.UDF[k].Key == "OPTM_TARGETWHS" &&
                            GRPOReceieveData.UDF[k].LineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.UDF.splice(k, 1);
                        }
                        if (GRPOReceieveData.UDF[k].Key == "OPTM_TARGETBIN" &&
                            GRPOReceieveData.UDF[k].LineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.UDF.splice(k, 1);
                        }
                    }
                    for (var m = 0; m < GRPOReceieveData.LastSerialNumber.length; m++) {
                        if (GRPOReceieveData.LastSerialNumber[m].ItemCode == GRPOReceieveData.POReceiptLots[i].ItemCode) {
                            GRPOReceieveData.LastSerialNumber.splice(m, 1);
                            m = -1;
                        }
                    }
                    GRPOReceieveData.POReceiptLots.splice(i, 1);
                }
            }
            localStorage.setItem("GRPOReceieveData", JSON.stringify(GRPOReceieveData));
        }
    };
    InboundDetailsComponent.prototype.displayPDF = function (dNo) {
        var _this = this;
        this.showLoader = true;
        this.inboundService.printingServiceForSubmitGRPO(dNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined) {
                console.log("" + data);
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.Detail != null && data.Detail != undefined && data.Detail[0] != null && data.Detail[0] != undefined) {
                    _this.fileName = data.Detail[0].FileName;
                    _this.base64String = data.Detail[0].Base64String;
                }
                if (_this.base64String != null && _this.base64String != "") {
                    // this.showPdf(); // this function is used to display pdf in new tab.
                    _this.base64String = 'data:application/pdf;base64,' + _this.base64String;
                    _this.displayPDF1 = true;
                    //this.commonservice.refreshDisplyPDF(true); 
                }
                else {
                    // no data available then redirect to first screen.
                    //this.inboundMasterComponent.inboundComponent = 1;
                }
                //  console.log("filename:" + this.fileName);
                //console.log("filename:" + this.base64String);
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    InboundDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-details',
            template: __webpack_require__(/*! ./inbound-details.component.html */ "./src/app/inbound/inbound-details/inbound-details.component.html"),
            styles: [__webpack_require__(/*! ./inbound-details.component.scss */ "./src/app/inbound/inbound-details/inbound-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_inbound_service__WEBPACK_IMPORTED_MODULE_2__["InboundService"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _inbound_master_component__WEBPACK_IMPORTED_MODULE_7__["InboundMasterComponent"]])
    ], InboundDetailsComponent);
    return InboundDetailsComponent;
}());



/***/ }),

/***/ "./src/app/inbound/inbound-grpo/inbound-grpo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/inbound/inbound-grpo/inbound-grpo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                Receive for PO: {{Ponumber}}\r\n            </h3>\r\n\r\n\r\n            <!-- Kendo Table Grid Row start -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12\">\r\n                    <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"openPOLineModel\" [resizable]=\"true\" [pageSize]=\"2\" [pageable]=\"false\" [sortable]=\"true\"\r\n                        [filterable]=isColumnFilter [groupable]=isColumnGroup [height]=gridHeight [selectable]=\"true\" (selectionChange)=\"openPOByUOM($event,soItemsDetail.ITEMCODE)\"\r\n                        #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'ItemDetails'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{'ItemCode'|translate}}</dt>\r\n                                    <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                    <dt>{{'ReceiveQty'|translate}}</dt>\r\n                                    <dd>{{dataItem.RPTQTY | numberFormat}}</dd>\r\n\r\n                                </dl>\r\n\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{'OpenQty'|translate}}</dt>\r\n                                    <dd>{{dataItem.OPENQTY | numberFormat}}</dd>\r\n\r\n                                    <dt>{{'UoM'|translate}}</dt>\r\n                                    <dd>\r\n                                        <kendo-dropdownlist class=\"form-control\" name=\"uomSelectedVal\" [(ngModel)]=\"uomSelectedVal\" [data]=\"dataItem.UOMList\" textField=\"UomName\"\r\n                                            valueField=\"UomCode\"></kendo-dropdownlist>\r\n                                    </dd>\r\n\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"ITEMCODE\" title=\"{{'ItemCode'|translate}}\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"OPENQTY\" headerClass=\"text-right\" class=\"text-right\" title=\"{{'OpenQty'|translate}}\"\r\n                            class=\"text-right\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.OPENQTY | numberFormat}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" headerClass=\"text-right\" title=\"{{'ReceiveQty'|translate}}\"\r\n                            class=\"text-right\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.RPTQTY | numberFormat}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"UOM1\" title=\"{{'UoM'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <kendo-dropdownlist class=\"form-control\" name=\"uomSelectedVal\" [(ngModel)]=\"uomSelectedVal\" [data]=\"dataItem.UOMList\" textField=\"UomName\"\r\n                                    valueField=\"UomCode\"></kendo-dropdownlist>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                    </kendo-grid>\r\n                </div>\r\n            </div>\r\n            <!-- Kendo Table Grid Row end -->\r\n\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Inbound_ReceivingBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"RecvbBinvalue\" [(ngModel)]=RecvbBinvalue placeholder=\"{{'Inbound_ReceivingBin'|translate}}\"\r\n                                    (blur)=\"OnBinChange()\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"ShowBins()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\" *ngIf=\"!isNonTrack\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ExpiryDate'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <kendo-datepicker [format]=dateFormat [value]=\"value\" name=\"expiryDate\" [(ngModel)]=expiryDate placeholder={{dateFormat}}></kendo-datepicker>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row align-items-center\" *ngIf=\"showScanInput\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ScanInputs'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <fieldset [disabled]=isDisabledScanInput class=\"d-block w-100\">\r\n                                <div class=\"d-flex align-items-center w-100\">\r\n                                    <div class=\"d-flex align-items-center\">\r\n                                        <input type=\"radio\" name=\"group\" (change)=\"handleCheckChange($event)\" id=\"InventoryEnquiryOptions1\" class=\"k-radio\" checked\r\n                                        />\r\n                                        <label class=\"k-radio-label\" for=\"InventoryEnquiryOptions1\">{{mfrRadioText}}</label>\r\n                                    </div>\r\n                                    <div class=\"d-flex align-items-center ml-3\">\r\n                                        <input type=\"radio\" name=\"group\" (change)=\"handleCheckChange($event)\" id=\"InventoryEnquiryOptions2\" class=\"k-radio\" />\r\n                                        <label class=\"k-radio-label\" for=\"InventoryEnquiryOptions2\">{{sysRadioText}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row mt-1 mt-md-0\" *ngIf=\"showScanInput\">\r\n                        <label class=\"col-sm-3 col-form-label\"></label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"d-flex\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" id=\"inboundScanInputField\" name=\"ScanInputs\" \r\n                                [(ngModel)]=ScanInputs (blur)=\"onScanCodeChange()\" \r\n                                    placeholder=\"{{scanInputPlaceholder}}\">\r\n                                <div class=\"ml-1 d-flex\">\r\n                                   <button type=\"button\" id=\"inboundscanButton\"  (click)=\"onInboundScan()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                                    <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                    \r\n                                </div> \r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Quantity'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"d-flex\">\r\n                                <input type=\"number\" class=\"form-control form-control-sm\" #Quantity name=\"qty\" [(ngModel)]=qty placeholder=\"{{'Quantity'|translate}}\">\r\n                                <div class=\"ml-1 d-flex\">\r\n                                    <button class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\" type=\"button\" (click)=\"addQuantity(event)\">\r\n                                        <i class=\"opti-icon-add1 fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!-- Kendo Table Grid Row start -->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <kendo-grid *ngIf=\"!isNonTrack\" class=\"no-shadow\" [kendoGridBinding]=\"recvingQuantityBinArray\"\r\n                     [resizable]=\"true\" [sortable]=\"true\"\r\n                        [selectable]=\"true\" #gridItem>\r\n\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex='rowIndex'>\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt style=\"margin-top:4px;\">{{mfrGridColumnText}}</dt>\r\n                                    <dd>\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"dataItem.VendorLot\" [(ngModel)]=dataItem.VendorLot id=\"VendorLot\"\r\n                                        #VendorLot (change)=\"updateVendorLot(VendorLot.value, rowIndex)\">\r\n                                    </dd>\r\n\r\n                                    <dt>{{'Quantity'|translate}}</dt>\r\n                                    <dd>{{dataItem.LotQty | numberFormat}}</dd>\r\n\r\n                                    <dt>{{'ExpiryDate'|translate}}</dt>\r\n                                    <dd>{{dataItem.expiryDate | date:dateFormat}}</dd>\r\n\r\n                                </dl>\r\n\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{SRBatchColumnText}}\r\n                                        <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" style=\"margin-bottom: 2px;\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                            <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"dataItem.LotNumber\" value={{dataItem.LotNumber}} [disabled]=isDisabledScanInput\r\n                                        id=\"display_name\" #display_name (change)=\"updateLotNumber(display_name.value, rowIndex, gridItem)\">\r\n                                    </dd>\r\n\r\n                                    <dt>{{'BinNo'|translate}}</dt>\r\n                                    <dd>{{dataItem.Bin}}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"VendorLot\" [width]=\"18\" title=\"{{mfrGridColumnText}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-idx='rowIndex'>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"dataItem.VendorLot\" value={{dataItem.VendorLot}} id=\"display_name\"\r\n                                    #display_name (change)=\"updateVendorLot(display_name.value, idx)\">\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotNumber\" [width]=\"18\" title=\"{{SRBatchColumnText}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-idx='rowIndex'>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"dataItem.LotNumber\" value={{dataItem.LotNumber}} [disabled]=isDisabledScanInput\r\n                                    id=\"display_name\" #display_name (change)=\"updateLotNumber(display_name.value, idx, gridItem)\">\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" headerClass=\"text-right\" class=\"text-right\" [width]=\"18\" title=\"{{'Quantity'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.LotQty | numberFormat}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" [width]=\"18\" title=\"{{'BinNo'|translate}}\"></kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"expiryDate\" [width]=\"18\" title=\"{{'ExpiryDate'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.expiryDate | date:dateFormat}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"\" headerClass=\"text-center\" class=\"text-center\" [width]=\"10\" title=\"\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n\r\n\r\n\r\n\r\n                    <kendo-grid *ngIf=\"isNonTrack\" class=\"no-shadow\" [kendoGridBinding]=\"recvingQuantityBinArray\" \r\n                    [resizable]=\"true\" [sortable]=\"true\"\r\n                        [selectable]=\"true\" #gridItem>\r\n                        <!-- grid for mobile start -->\r\n                        <kendo-grid-column media=\"(max-width: 767px)\" title=\"List\" class=\"opti_mobile-grid-td\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt>{{'Quantity'|translate}}</dt>\r\n                                    <dd>{{dataItem.LotQty |numberFormat}}</dd>\r\n                                </dl>\r\n\r\n                                <dl class=\"opti_mobile_grid_dl\">\r\n                                    <dt class=\"d-flex align-items-center\">{{'BinNo'|translate}}\r\n                                        <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon ml-auto\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                            <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                        </button>\r\n                                    </dt>\r\n                                    <dd>{{dataItem.Bin}}</dd>\r\n                                </dl>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <!-- grid for mobile end -->\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"LotQty\" headerClass=\"text-right\" class=\"text-right\" [width]=\"45\" title=\"{{'Quantity'|translate}}\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem>\r\n                                {{dataItem.LotQty |numberFormat}}\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" field=\"Bin\" [width]=\"45\" title=\"{{'BinNo'|translate}}\"></kendo-grid-column>\r\n\r\n                        <kendo-grid-column media=\"(min-width: 768px)\" headerClass=\"text-center\" class=\"text-center\" field=\"\" [width]=\"10\" title=\"\">\r\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon\" (click)=\"openConfirmForDelete(rowIndex, gridItem)\">\r\n                                    <span class=\"k-icon k-i-delete\" role=\"presentation\"></span>\r\n                                </button>\r\n                            </ng-template>\r\n                        </kendo-grid-column>\r\n                    </kendo-grid>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- Kendo Table Grid Row end -->\r\n\r\n            <div class=\"row mt-2\" *ngIf=\"IsQCRequired\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'TargetWhse'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"targetWhse\" [(ngModel)]=targetWhse placeholder=\"{{'TargetWhse'|translate}}\"\r\n                                    (blur)=\"onQCWHSChange()\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getTargetWhseList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'TargetBin'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"targetBinValue\" [(ngModel)]=targetBin placeholder=\"{{'TargetBin'|translate}}\"\r\n                                    (blur)=\"OnTargetBinChange()\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"getTargetBinList()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n\r\n                <button type=\"button\" *ngIf=\"showButton\" (click)=\"save($event)\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\">\r\n                    <span class=\"k-icon k-i-save\" role=\"presentation\"></span> {{'Save'|translate}}</button>\r\n                <button class=\"k-button k-primary k-button btn-sm btn-icon-with-text\" *ngIf=\"showButton\" type=\"button\" (click)=\"receive($event)\">\r\n                    <span class=\"k-icon k-i-download\" role=\"presentation\"></span> {{'Receive'|translate}}</button>\r\n                <!-- <button class=\"k-button k-primary\" type=\"button\" (click)=\"cancel($event)\">Cancel</button> -->\r\n                <button type=\"button\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\" (click)=\"cancel($event)\">\r\n                    <span class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> Cancel</button>\r\n                    <button type=\"button\" id=\"hiddenScanButton\" style=\"visibility:hidden\" (click)=\"onHiddenScanClick()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                            SB </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n<span *ngIf=\"showLookupLoader == false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<span *ngIf=\"showConfirmDialog\">\r\n    <app-comon-confirm-dialog [titleMessage]=\"dialogMsg\" [yesButtonText]=\"yesButtonText\" [fromWhere]=\"dialogFor\" [noButtonText]=\"noButtonText\"\r\n        (isYesClick)=\"getConfirmDialogValue($event)\"></app-comon-confirm-dialog>\r\n</span>\r\n\r\n<div>\r\n    <app-display-pdf *ngIf=\"displayPDF1\" [base64String]='base64String' [fileName]='fileName' (pdfClose)=\"closePDF($event)\"></app-display-pdf>\r\n</div>\r\n\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/inbound/inbound-grpo/inbound-grpo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/inbound/inbound-grpo/inbound-grpo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaW5ib3VuZC1ncnBvL2luYm91bmQtZ3Jwby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inbound/inbound-grpo/inbound-grpo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inbound/inbound-grpo/inbound-grpo.component.ts ***!
  \****************************************************************/
/*! exports provided: InboundGRPOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundGRPOComponent", function() { return InboundGRPOComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_inbound_inbound_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/inbound/inbound-master.component */ "./src/app/inbound/inbound-master.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_inbound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/Inbound/RecvingQuantityBin */ "./src/app/models/Inbound/RecvingQuantityBin.ts");









var InboundGRPOComponent = /** @class */ (function () {
    function InboundGRPOComponent(inboundService, commonservice, router, toastr, translate, inboundMasterComponent) {
        this.inboundService = inboundService;
        this.commonservice = commonservice;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.inboundMasterComponent = inboundMasterComponent;
        this.dialogMsg = "";
        this.yesButtonText = "";
        this.noButtonText = "";
        this.openPOLineModel = [];
        this.tracking = "";
        this.RecvbBinvalue = "";
        this.showLoader = false;
        this.qty = undefined;
        this.showButton = false;
        this.recvingQuantityBinArray = [];
        this.defaultRecvBin = false;
        this.showLookupLoader = true;
        this.operationType = "";
        this.value = new Date();
        this.searlNo = "";
        this.MfrSerial = "";
        this.expiryDate = "";
        this.isNonTrack = false;
        this.isSerial = false;
        this.dialogFor = "";
        //locale string variables
        this.serialNoTitle = "";
        this.mfrRadioText = "";
        this.sysRadioText = "";
        this.scanInputPlaceholder = "";
        this.mfrGridColumnText = "";
        this.SRBatchColumnText = "";
        this.oSubmitPOLotsArray = [];
        this.isDisabledScanInput = false;
        this.ScanSerial = "";
        this.ScanInputs = "";
        this.targetBin = "";
        this.targetWhse = "";
        this.showScanInput = true;
        this.targetBinClick = false;
        this.radioSelected = 0;
        this.previousReceivedQty = 0;
        this.showPDF = false;
        this.displayPDF1 = false;
        this.base64String = "";
        this.fileName = "";
        this.UOMentry = "";
        this.pageSize = src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"].pageSize;
        // let userLang = navigator.language.split('-')[0];
        // userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        // translate.use(userLang);
        // translate.onLangChange.subscribe((event: LangChangeEvent) => {
        // });
    }
    InboundGRPOComponent.prototype.ngOnInit = function () {
        this.dateFormat = localStorage.getItem("DATEFORMAT");
        this.openPOLineModel[0] = this.inboundMasterComponent.openPOmodel;
        //update below variable with local storage data
        this.operationType = "";
        // also update this.openPOLineModel[0].RPTQTY with local storage value
        if (this.openPOLineModel != undefined && this.openPOLineModel != null) {
            this.Ponumber = this.openPOLineModel[0].DocNum;
            this.tracking = this.openPOLineModel[0].TRACKING;
            this.OpenQty = this.openPOLineModel[0].OPENQTY;
            this.ItemCode = this.openPOLineModel[0].ITEMCODE;
            this.showScanInput = true;
            if (this.tracking == "S") {
                this.isSerial = true;
                this.setLocalStringForSerial();
            }
            else if (this.tracking == "N") {
                this.isNonTrack = true;
                this.showScanInput = false;
            }
            else if (this.tracking == "B") {
                this.isSerial = false;
                this.isNonTrack = false;
                this.setLocalStringForBatch();
            }
            var autoLots = JSON.parse(localStorage.getItem("primaryAutoLots"));
            if (autoLots.length > 0 && autoLots[0].AUTOLOT == "Y") {
                this.isDisabledScanInput = true;
            }
            else {
                this.isDisabledScanInput = false;
            }
            if (this.openPOLineModel[0].QCREQUIRED == "Y") {
                this.IsQCRequired = true;
            }
            else {
                this.IsQCRequired = false;
            }
            this.getUOMList();
            if (this.RecvbBinvalue == "") {
                this.defaultRecvBin = true;
                this.ShowBins();
            }
        }
        this.LastSerialNumber = [];
        this.LineId = [];
        this.showSavedDataToGrid();
    };
    InboundGRPOComponent.prototype.onInboundScan = function () {
        // alert("scan click");
    };
    InboundGRPOComponent.prototype.setLocalStringForBatch = function () {
        this.serialNoTitle = this.translate.instant("SerialNo");
        this.mfrRadioText = this.translate.instant("MfrBatch");
        this.sysRadioText = this.translate.instant("SysBatch");
        this.scanInputPlaceholder = this.translate.instant("ScanBatch");
        this.mfrGridColumnText = this.translate.instant("MfrBatchNo");
        this.SRBatchColumnText = this.translate.instant("BatchNo");
    };
    InboundGRPOComponent.prototype.setLocalStringForSerial = function () {
        this.serialNoTitle = this.translate.instant("SerialNo");
        this.mfrRadioText = this.translate.instant("MfrSerial");
        this.sysRadioText = this.translate.instant("SysSerial");
        this.scanInputPlaceholder = this.translate.instant("ScanSerial");
        this.mfrGridColumnText = this.translate.instant("MfrSerialNo");
        this.SRBatchColumnText = this.translate.instant("SerialNo");
    };
    /**
      * Method to get list of inquries from server.
     */
    InboundGRPOComponent.prototype.ShowBins = function () {
        var _this = this;
        this.targetBinClick = false;
        this.showLoader = true;
        this.inboundService.getRevBins(this.openPOLineModel[0].QCREQUIRED).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    if (_this.defaultRecvBin == true) {
                        _this.RecvbBinvalue = data[0].BINNO;
                        _this.defaultRecvBin = false;
                    }
                    else {
                        console.log(data);
                        _this.showLookupLoader = false;
                        _this.serviceData = data;
                        _this.lookupfor = "RecvBinList";
                        return;
                    }
                }
                else {
                    _this.toastr.error('', _this.translate.instant("NoBinsAvailableMsg"));
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    InboundGRPOComponent.prototype.OnBinChange = function () {
        var _this = this;
        if (this.RecvbBinvalue == "") {
            return;
        }
        this.showLoader = true;
        this.inboundService.binChange(this.RecvbBinvalue).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Result == "0") {
                        _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                        _this.RecvbBinvalue = "";
                        return;
                    }
                    else {
                        _this.RecvbBinvalue = data[0].ID;
                        // oCurrentController.isReCeivingBinExist();
                    }
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                _this.RecvbBinvalue = "";
                return;
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.RecvbBinvalue = "";
        });
    };
    InboundGRPOComponent.prototype.onScanInputChange = function () {
        //  alert("scan change event")
    };
    /**
     * Method to validate entered scan code .
    */
    InboundGRPOComponent.prototype.onScanCodeChange = function () {
        this.onGS1ItemScan();
    };
    /**
     * Method to get list of uoms from server.
    */
    InboundGRPOComponent.prototype.getUOMList = function () {
        var _this = this;
        this.showLoader = true;
        this.inboundService.getUOMs(this.openPOLineModel[0].ITEMCODE).subscribe(function (data) {
            _this.showLoader = false;
            console.log("UOM data response:", data);
            _this.openPOLineModel[0].UOMList = data;
            if (_this.openPOLineModel[0].UOMList.length > 0) {
                _this.uomSelectedVal = _this.openPOLineModel[0].UOMList[0];
                _this.getUOMVal(_this.UOMentry);
            }
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    InboundGRPOComponent.prototype.handleCheckChange = function ($event) {
        if ($event.currentTarget.id == "InventoryEnquiryOptions1") {
            // mfr serial radio selected.
            this.radioSelected = 0;
        }
        if ($event.currentTarget.id == "InventoryEnquiryOptions2") {
            // mfr serial radio selected.
            this.radioSelected = 1;
        }
    };
    InboundGRPOComponent.prototype.validateQuantity = function () {
        var quantitySum = 0;
        for (var i = 0; i < this.recvingQuantityBinArray.length; i++) {
            quantitySum += Number(this.recvingQuantityBinArray[i].LotQty);
        }
        quantitySum = quantitySum + Number(this.qty);
        if (Number(this.OpenQty) == 0) {
            this.toastr.error('', this.translate.instant("NoOpenQuantity"));
            this.qty = 0;
            return false;
        }
        else if (quantitySum > Number(this.OpenQty)) {
            this.toastr.error('', this.translate.instant("NoOpenQuantityValid"));
            this.qty = 0;
            return false;
        }
        else {
            return true;
        }
    };
    InboundGRPOComponent.prototype.updateVendorLot = function (value, rowindex) {
        for (var i = 0; i < this.recvingQuantityBinArray.length; ++i) {
            if (i === rowindex) {
                this.recvingQuantityBinArray[i].VendorLot = value;
            }
        }
    };
    InboundGRPOComponent.prototype.updateLotNumber = function (value, rowindex, gridData) {
        var result = this.recvingQuantityBinArray.find(function (element) { return element.LotNumber == value; });
        if (result != undefined) {
            if (this.openPOLineModel[0].TRACKING != "N") {
                if (this.openPOLineModel[0].TRACKING == "S") {
                    this.toastr.error('', this.translate.instant("SerialCanNotbeSame"));
                }
                else {
                    this.toastr.error('', this.translate.instant("BatchCanNotbeSame"));
                }
            }
            //this.recvingQuantityBinArray[rowindex].LotNumber = "";
            for (var i = 0; i < this.recvingQuantityBinArray.length; ++i) {
                if (i === rowindex) {
                    this.recvingQuantityBinArray[i].LotNumber = "";
                }
            }
            //gridData.data = this.recvingQuantityBinArray;
            //  return;
        }
        else {
            for (var i = 0; i < this.recvingQuantityBinArray.length; ++i) {
                if (i === rowindex) {
                    this.recvingQuantityBinArray[i].LotNumber = value;
                }
            }
        }
    };
    InboundGRPOComponent.prototype.addQuantity = function () {
        var _this = this;
        if (this.qty == 0 || this.qty == undefined) {
            this.toastr.error('', this.translate.instant("EnterQuantityErrMsg"));
            return;
        }
        if (!Number.isInteger(this.qty)) {
            this.toastr.error('', this.translate.instant("DecimalQuantity"));
            this.QuantityField.nativeElement.focus();
            return;
        }
        if (this.RecvbBinvalue == "" || this.RecvbBinvalue == undefined) {
            this.toastr.error('', this.translate.instant("INVALIDBIN"));
            return;
        }
        if (!this.validateQuantity()) {
            return;
        }
        this.LastSerialNumber = [];
        this.LineId = [];
        if (this.isNonTrack) {
            this.addNonTrackQty(this.qty);
        }
        else {
            if (this.radioSelected == 0) {
                this.MfrSerial = this.ScanInputs;
            }
            else if (this.radioSelected == 1) {
                this.searlNo = this.ScanInputs;
            }
            var autoLots = JSON.parse(localStorage.getItem("primaryAutoLots"));
            if (this.isSerial) {
                while (this.qty > 0 && this.qty != 0) {
                    if (autoLots.length > 0 && autoLots[0].AUTOLOT == "Y") {
                        this.LastSerialNumber = [];
                        this.LineId = [];
                        this.addBatchSerialQty(autoLots, this.qty);
                        var result = this.recvingQuantityBinArray.find(function (element) { return element.LotNumber == _this.searlNo; });
                        if (result == undefined) {
                            this.recvingQuantityBinArray.push(new src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__["RecvingQuantityBin"](this.MfrSerial, this.searlNo, 1, this.RecvbBinvalue, this.expiryDate));
                            this.qty = this.qty - 1;
                        }
                    }
                    else {
                        this.recvingQuantityBinArray.push(new src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__["RecvingQuantityBin"](this.MfrSerial, this.searlNo, 1, this.RecvbBinvalue, this.expiryDate));
                        this.qty = this.qty - 1;
                    }
                }
            }
            else {
                this.batchCalculation(autoLots, this.qty);
            }
        }
        this.qty = undefined;
        this.ScanInputs = "";
        if (this.recvingQuantityBinArray.length > 0) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
        this.updateReceiveQty();
    };
    InboundGRPOComponent.prototype.updateReceiveQty = function () {
        var quantitySum = 0;
        //quantitySum = 0;//this.openPOLineModel[0].RPTQTY;
        for (var i = 0; i < this.recvingQuantityBinArray.length; i++) {
            quantitySum += Number(this.recvingQuantityBinArray[i].LotQty);
        }
        if (this.openPOLineModel != null && this.openPOLineModel.length > 0) {
            this.openPOLineModel[0].RPTQTY = quantitySum;
        }
    };
    InboundGRPOComponent.prototype.batchCalculation = function (autoLots, qty) {
        var _this = this;
        if (autoLots.length > 0 && autoLots[0].AUTOLOT == "Y") {
            this.addBatchSerialQty(autoLots, this.qty);
            var result = this.recvingQuantityBinArray.find(function (element) { return element.LotNumber == _this.searlNo; });
            if (result == undefined) {
                this.recvingQuantityBinArray.push(new src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__["RecvingQuantityBin"](this.MfrSerial, this.searlNo, qty, this.RecvbBinvalue, this.expiryDate));
            }
            else {
                this.batchCalculation(autoLots, this.qty);
            }
        }
        else {
            this.recvingQuantityBinArray.push(new src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__["RecvingQuantityBin"](this.MfrSerial, this.searlNo, qty, this.RecvbBinvalue, this.expiryDate));
        }
    };
    InboundGRPOComponent.prototype.addNonTrackQty = function (qty) {
        var _this = this;
        var result = this.recvingQuantityBinArray.find(function (element) { return element.Bin == _this.RecvbBinvalue; });
        if (result == undefined) {
            this.recvingQuantityBinArray.push(new src_app_models_Inbound_RecvingQuantityBin__WEBPACK_IMPORTED_MODULE_8__["RecvingQuantityBin"]("", "", qty, this.RecvbBinvalue, this.expiryDate));
            this.showButton = true;
        }
        else {
            this.toastr.error('', this.translate.instant("BinValidation"));
            return;
        }
    };
    /**
     * method to create logic for autolot for serial batch qty.
     * @param autoLots
     * @param qty
     */
    InboundGRPOComponent.prototype.addBatchSerialQty = function (autoLots, qty) {
        this.searlNo = "";
        for (var i = 0; i < autoLots.length; i++) {
            if (autoLots[i].OPRTYPE == "1") {
                this.searlNo = this.searlNo + autoLots[i].STRING;
            }
            if (autoLots[i].OPRTYPE === "2" && autoLots[i].OPERATION == "2") {
                if (this.recvingQuantityBinArray.length > 0) {
                    var finalString = this.getAutoLotStringOPR2(autoLots[i].STRING);
                    autoLots[i].STRING = finalString;
                    this.searlNo = this.searlNo + finalString;
                    this.LastSerialNumber.push(this.getAutoLotStringOPR2(finalString));
                    this.LineId.push(autoLots[i].LINEID);
                }
                else {
                    var finalString = autoLots[i].STRING;
                    this.searlNo = this.searlNo + finalString;
                    this.LastSerialNumber.push(this.getAutoLotStringOPR2(finalString));
                    this.LineId.push(autoLots[i].LINEID);
                }
            }
            if (autoLots[i].OPRTYPE == "2" && autoLots[i].OPERATION == "3") {
                if (this.recvingQuantityBinArray.length > 0) {
                    var finalString = this.getAutoLotStringOPR3(autoLots[i].STRING);
                    this.searlNo = this.searlNo + finalString;
                    autoLots[i].STRING = finalString;
                    this.LastSerialNumber.push(this.getAutoLotStringOPR3(autoLots[i].STRING));
                    this.LineId.push(autoLots[i].LINEID);
                }
                else {
                    var finalString = autoLots[i].STRING;
                    this.searlNo = this.searlNo + finalString;
                    this.LastSerialNumber.push(this.getAutoLotStringOPR3(autoLots[i].STRING));
                    this.LineId.push(autoLots[i].LINEID);
                }
            }
        }
    };
    InboundGRPOComponent.prototype.getAutoLotStringOPR2 = function (autolotString) {
        var strlength = autolotString.length;
        var numberLength = (parseInt(autolotString)).toString().length;
        var finlNumber = parseInt(autolotString) + 1;
        var finalString = this.forwardZero(finlNumber, strlength - numberLength);
        return finalString;
    };
    InboundGRPOComponent.prototype.getAutoLotStringOPR3 = function (autolotString) {
        var strlength = autolotString.length;
        var numberLength = (parseInt(autolotString)).toString().length;
        var finlNumber = parseInt(autolotString) - 1;
        var finalString = this.forwardZero(finlNumber, strlength - numberLength);
        return finalString;
    };
    InboundGRPOComponent.prototype.openConfirmForDelete = function (rowindex, gridData) {
        this.dialogFor = "deleteRow";
        this.dialogMsg = this.translate.instant("DoYouWantToDelete");
        this.yesButtonText = this.translate.instant("yes");
        this.noButtonText = this.translate.instant("no");
        this.rowindexForDelete = rowindex;
        this.gridDataAfterDelete = gridData;
        this.showConfirmDialog = true;
    };
    InboundGRPOComponent.prototype.getConfirmDialogValue = function ($event) {
        this.showConfirmDialog = false;
        if ($event.Status == "yes") {
            switch ($event.From) {
                case ("deleteRow"):
                    this.DeleteRowClick(this.rowindexForDelete, this.gridDataAfterDelete);
                    break;
                case ("recCurrentOrAll"):
                    // show pdf dialog
                    this.yesButtonText = this.translate.instant("yes");
                    this.noButtonText = this.translate.instant("no");
                    this.dialogFor = "receiveMultiplePDFDialog";
                    this.dialogMsg = this.translate.instant("PrintAllLabelsAfterSubmit");
                    this.operationType = "All";
                    this.showConfirmDialog = true; // show dialog
                    this.showPDF = true;
                    break;
                case ("receiveSinglePDFDialog"):
                    //do something. //yes mean all click
                    this.submitCurrentGRPO();
                    this.showPDF = true;
                    break;
                case ("receiveMultiplePDFDialog"):
                    // if pdf dialog yes click for multiple recevie.
                    this.prepareAllData();
                    break;
            }
        }
        else {
            if ($event.Status == "cancel") {
                // when user click on cross button nothing to do.
            }
            else {
                //means user click on negative button
                if ($event.From == "recCurrentOrAll") {
                    //this.submitCurrentGRPO();
                    this.yesButtonText = this.translate.instant("yes");
                    this.noButtonText = this.translate.instant("no");
                    this.dialogFor = "receiveSinglePDFDialog";
                    this.dialogMsg = this.translate.instant("PrintAllLabelsAfterSubmit");
                    this.operationType = "Current";
                    this.showConfirmDialog = true; // show dialog
                }
                else if ($event.From == "receiveSinglePDFDialog") {
                    this.submitCurrentGRPO();
                    this.showPDF = false;
                }
                else if ($event.From == "receiveMultiplePDFDialog") {
                    this.prepareAllData();
                    this.showPDF = false;
                }
            }
        }
    };
    InboundGRPOComponent.prototype.submitCurrentGRPO = function () {
        var oSubmitPOLotsObj = {};
        oSubmitPOLotsObj.POReceiptLots = [];
        oSubmitPOLotsObj.POReceiptLotDetails = [];
        oSubmitPOLotsObj.UDF = [];
        oSubmitPOLotsObj.LastSerialNumber = [];
        var oSubmitPOLotsObj = this.prepareSubmitPurchaseOrder(oSubmitPOLotsObj); // current data only.
        this.SubmitGoodsReceiptPO(oSubmitPOLotsObj);
    };
    InboundGRPOComponent.prototype.forwardZero = function (num, size) {
        var s = num + "";
        var sign = "";
        if (s.length > 0 && s[0] == "-") {
            s = s.substring(1, s.length);
            sign = "-";
        }
        size = size + s.length;
        while (s.length < size)
            s = "0" + s;
        s = sign + s;
        return s;
    };
    InboundGRPOComponent.prototype.save = function () {
        if (this.IsQCRequired && (this.targetBin == null || this.targetBin == undefined || this.targetBin == "")) {
            this.toastr.error('', "Target Warehouse cannot be blank");
            return;
        }
        else if (this.IsQCRequired && (this.targetWhse == null || this.targetWhse == undefined || this.targetWhse == "")) {
            this.toastr.error('', "Target Bin cannot be blank");
            return;
        }
        if (this.openPOLineModel[0].TRACKING != "N") {
            var result = this.recvingQuantityBinArray.find(function (element) { return element.LotNumber == ""; });
            if (result != undefined) {
                if (this.openPOLineModel[0].TRACKING == "S") {
                    this.toastr.error('', this.translate.instant("SerialNotBlank"));
                }
                else {
                    this.toastr.error('', this.translate.instant("BatchNotBlank"));
                }
                return;
            }
            // for(var i =0; i<this.recvingQuantityBinArray.length;i++){
            //   let result = this.recvingQuantityBinArray.find(element => element.LotNumber == );
            //   if (result != undefined) {
            //     if (this.openPOLineModel[0].TRACKING == "S") {
            //       this.toastr.error('', this.translate.instant("SerialNotBlank"));
            //     } else {
            //       this.toastr.error('', this.translate.instant("BatchNotBlank"));
            //     }
            //     return;
            //   }
            // }
        }
        this.prepareCommonData();
        localStorage.setItem("PONumber", this.Ponumber);
        this.inboundMasterComponent.inboundComponent = 2;
    };
    InboundGRPOComponent.prototype.prepareCommonData = function () {
        var oSubmitPOLotsObj = {};
        var dataModel = localStorage.getItem("GRPOReceieveData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oSubmitPOLotsObj.POReceiptLots = [];
            oSubmitPOLotsObj.POReceiptLotDetails = [];
            oSubmitPOLotsObj.UDF = [];
            oSubmitPOLotsObj.LastSerialNumber = [];
        }
        else {
            oSubmitPOLotsObj = JSON.parse(dataModel);
        }
        var oSubmitPOLotsObj = this.prepareSubmitPurchaseOrder(oSubmitPOLotsObj);
        localStorage.setItem("GRPOReceieveData", JSON.stringify(oSubmitPOLotsObj));
    };
    InboundGRPOComponent.prototype.prepareAllData = function () {
        var oSubmitPOLotsObj = {};
        var dataModel = localStorage.getItem("AddToGRPO");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            oSubmitPOLotsObj.POReceiptLots = [];
            oSubmitPOLotsObj.POReceiptLotDetails = [];
            oSubmitPOLotsObj.UDF = [];
            oSubmitPOLotsObj.LastSerialNumber = [];
        }
        else {
            oSubmitPOLotsObj = JSON.parse(dataModel);
        }
        oSubmitPOLotsObj = this.prepareSubmitPurchaseOrder(oSubmitPOLotsObj);
        // localStorage.setItem("GRPOReceieveData", JSON.stringify(oSubmitPOLotsObj));
        // var dataModel = localStorage.getItem("AddToGRPO");
        // if (dataModel != null && dataModel != undefined && dataModel != "") {
        this.SubmitGoodsReceiptPO(oSubmitPOLotsObj);
        // }
    };
    InboundGRPOComponent.prototype.showSavedDataToGrid = function () {
        this.openPOLineModel[0] = this.inboundMasterComponent.openPOmodel;
        if (this.openPOLineModel != undefined && this.openPOLineModel != null) {
        }
        var oSubmitPOLots = {};
        var dataModel = localStorage.getItem("GRPOReceieveData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            //this.oSubmitPOLotsArray = []; 
            oSubmitPOLots = {};
        }
        else {
            oSubmitPOLots = JSON.parse(dataModel);
        }
        if (oSubmitPOLots != null && oSubmitPOLots != undefined && oSubmitPOLots.POReceiptLots != null &&
            oSubmitPOLots.POReceiptLots != undefined && oSubmitPOLots.POReceiptLots != ""
            && oSubmitPOLots.POReceiptLots.length > 0) {
            for (var i = 0; i < oSubmitPOLots.POReceiptLots.length; i++) {
                if (oSubmitPOLots.POReceiptLots[i].PONumber == this.Ponumber &&
                    oSubmitPOLots.POReceiptLots[i].ItemCode == this.ItemCode &&
                    oSubmitPOLots.POReceiptLots[i].LineNo == this.openPOLineModel[0].LINENUM &&
                    oSubmitPOLots.POReceiptLots[i].Tracking == this.tracking) {
                    this.UOMentry = oSubmitPOLots.POReceiptLots[i].UOM;
                    this.getUOMVal(this.UOMentry);
                    for (var j = 0; j < oSubmitPOLots.POReceiptLotDetails.length; j++) {
                        if (oSubmitPOLots.POReceiptLotDetails[j].ParentLineNo == oSubmitPOLots.POReceiptLots[i].Line) {
                            this.recvingQuantityBinArray.push(oSubmitPOLots.POReceiptLotDetails[j]);
                            this.previousReceivedQty = Number(this.previousReceivedQty) + Number(oSubmitPOLots
                                .POReceiptLotDetails[j].LotQty);
                        }
                    }
                    // this.LastSerialNumber = oSubmitPOLotsObj.LastSerialNumber;
                    // this.LineId = oSubmitPOLotsObj.LastSerialNumber;
                    for (var m = 0; m < oSubmitPOLots.LastSerialNumber.length; m++) {
                        this.LastSerialNumber.push(oSubmitPOLots.LastSerialNumber[m].LastSerialNumber);
                        this.LineId.push(oSubmitPOLots.LastSerialNumber[m].LineId);
                    }
                }
            }
            // this.updateReceiveQty();
            this.openPOLineModel[0].RPTQTY = this.previousReceivedQty;
            if (oSubmitPOLots.UDF != undefined && oSubmitPOLots.UDF != null && oSubmitPOLots.UDF.length > 0) {
                this.targetWhse = oSubmitPOLots.UDF[0].Value;
                this.targetBin = oSubmitPOLots.UDF[1].Value;
            }
        }
        if (this.tracking == "S") {
            this.isNonTrack = false;
        }
        else if (this.tracking == "N") {
            this.isNonTrack = true;
        }
        else if (this.tracking == "B") {
            this.isNonTrack = false;
        }
        if (this.recvingQuantityBinArray.length > 0) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
    };
    InboundGRPOComponent.prototype.getUOMVal = function (UomEntry) {
        if (this.openPOLineModel[0].UOMList != undefined) {
            for (var i = 0; i < this.openPOLineModel[0].UOMList.length; i++) {
                if (this.openPOLineModel[0].UOMList[i].UomEntry == UomEntry) {
                    this.uomSelectedVal = this.openPOLineModel[0].UOMList[i];
                }
            }
        }
    };
    InboundGRPOComponent.prototype.manageRecords = function (oSubmitPOLotsObj) {
        var size = oSubmitPOLotsObj.POReceiptLots.length;
        for (var i = 0; i < oSubmitPOLotsObj.POReceiptLots.length; i++) {
            if (oSubmitPOLotsObj.POReceiptLots[i].PONumber == this.Ponumber &&
                oSubmitPOLotsObj.POReceiptLots[i].ItemCode == this.openPOLineModel[0].ITEMCODE &&
                oSubmitPOLotsObj.POReceiptLots[i].LineNo == this.openPOLineModel[0].LINENUM) {
                var s = oSubmitPOLotsObj.POReceiptLotDetails.length;
                for (var j = 0; j < oSubmitPOLotsObj.POReceiptLotDetails.length; j++) {
                    if (oSubmitPOLotsObj.POReceiptLotDetails[j].ParentLineNo == oSubmitPOLotsObj.POReceiptLots[i].Line) {
                        oSubmitPOLotsObj.POReceiptLotDetails.splice(j, 1);
                        j = -1;
                    }
                }
                for (var k = 0; k < oSubmitPOLotsObj.UDF.length; k++) {
                    if (oSubmitPOLotsObj.UDF[k].Key == "OPTM_TARGETWHS" &&
                        oSubmitPOLotsObj.UDF[k].LineNo == oSubmitPOLotsObj.POReceiptLots[i].Line) {
                        oSubmitPOLotsObj.UDF.splice(k, 1);
                    }
                    if (oSubmitPOLotsObj.UDF[k].Key == "OPTM_TARGETBIN" &&
                        oSubmitPOLotsObj.UDF[k].LineNo == oSubmitPOLotsObj.POReceiptLots[i].Line) {
                        oSubmitPOLotsObj.UDF.splice(k, 1);
                    }
                }
                // oSubmitPOLotsObj.UDF.splice(i, 1);
                for (var m = 0; m < oSubmitPOLotsObj.LastSerialNumber.length; m++) {
                    if (oSubmitPOLotsObj.LastSerialNumber[m].ItemCode == oSubmitPOLotsObj.POReceiptLots[i].ItemCode) {
                        oSubmitPOLotsObj.LastSerialNumber.splice(m, 1);
                        m = -1;
                    }
                }
                // oSubmitPOLotsObj.LastSerialNumber.splice(i, 1);
                oSubmitPOLotsObj.POReceiptLots.splice(i, 1);
            }
        }
        return oSubmitPOLotsObj;
    };
    InboundGRPOComponent.prototype.receive = function (e) {
        if (this.IsQCRequired && (this.targetBin == null || this.targetBin == undefined || this.targetBin == "")) {
            this.toastr.error('', "Target Warehouse cannot be blank");
            return;
        }
        else if (this.IsQCRequired && (this.targetWhse == null || this.targetWhse == undefined || this.targetWhse == "")) {
            this.toastr.error('', "Target Bin cannot be blank");
            return;
        }
        if (this.openPOLineModel[0].TRACKING != "N") {
            var result = this.recvingQuantityBinArray.find(function (element) { return element.LotNumber == ""; });
            if (result != undefined) {
                if (this.openPOLineModel[0].TRACKING == "S") {
                    this.toastr.error('', this.translate.instant("SerialNotBlank"));
                }
                else {
                    this.toastr.error('', this.translate.instant("BatchNotBlank"));
                }
                return;
            }
        }
        var dataModel = localStorage.getItem("GRPOReceieveData");
        if (dataModel == null || dataModel == undefined || dataModel == "") {
            //this.submitCurrentGRPO();
            // show print dialog here and onclick its handling.  
            this.yesButtonText = this.translate.instant("yes");
            this.noButtonText = this.translate.instant("no");
            this.dialogFor = "receiveSinglePDFDialog";
            this.dialogMsg = this.translate.instant("PrintAllLabelsAfterSubmit");
            this.showConfirmDialog = true; // show dialog
        }
        else {
            dataModel = this.manageRecords(JSON.parse(dataModel));
            if (dataModel == null || dataModel == undefined || dataModel == "") {
                this.yesButtonText = this.translate.instant("yes");
                this.noButtonText = this.translate.instant("no");
                this.dialogFor = "receiveSinglePDFDialog";
                this.dialogMsg = this.translate.instant("PrintAllLabelsAfterSubmit");
                this.showConfirmDialog = true; // show dialog
                //this.submitCurrentGRPO();
                return;
            }
            this.yesButtonText = this.translate.instant("All");
            this.noButtonText = this.translate.instant("Current");
            this.dialogFor = "recCurrentOrAll";
            this.dialogMsg = this.translate.instant("ReceiveCurrentOrAll");
            this.showConfirmDialog = true; // show dialog
        }
    };
    InboundGRPOComponent.prototype.prepareSubmitPurchaseOrder = function (oSubmitPOLotsObj) {
        oSubmitPOLotsObj = this.manageRecords(oSubmitPOLotsObj);
        if (localStorage.getItem("Line") == null || localStorage.getItem("Line") == undefined ||
            localStorage.getItem("Line") == "") {
            localStorage.setItem("Line", "0");
        }
        oSubmitPOLotsObj.POReceiptLots.push({
            DiServerToken: localStorage.getItem("Token"),
            PONumber: this.openPOLineModel[0].DOCENTRY,
            CompanyDBId: localStorage.getItem("CompID"),
            LineNo: this.openPOLineModel[0].LINENUM,
            ShipQty: this.openPOLineModel[0].RPTQTY.toString(),
            OpenQty: this.openPOLineModel[0].OPENQTY.toString(),
            WhsCode: localStorage.getItem("whseId"),
            Tracking: this.openPOLineModel[0].TRACKING,
            ItemCode: this.openPOLineModel[0].ITEMCODE,
            LastSerialNumber: 0,
            Line: Number(localStorage.getItem("Line")),
            GUID: localStorage.getItem("GUID"),
            UOM: this.uomSelectedVal.UomEntry,
            UsernameForLic: localStorage.getItem("UserId")
            //------end Of parameter For License----
        });
        // oSubmitPOLotsObj.UDF = [];  
        oSubmitPOLotsObj.UDF.push({
            Key: "OPTM_TARGETWHS",
            Value: this.targetWhse,
            //LotNo: UDF[iIndex].LotNo,
            Flag: 'D',
            LineNo: Number(localStorage.getItem("Line"))
        });
        oSubmitPOLotsObj.UDF.push({
            Key: "OPTM_TARGETBIN",
            Value: this.targetBin,
            //LotNo: UDF[iIndex].LotNo,
            Flag: 'D',
            LineNo: Number(localStorage.getItem("Line"))
        });
        for (var iBtchIndex = 0; iBtchIndex < this.recvingQuantityBinArray.length; iBtchIndex++) {
            oSubmitPOLotsObj.POReceiptLotDetails.push({
                // POItemCode: this.Ponumber+this.openPOLineModel[0].ITEMCODE,
                Bin: this.recvingQuantityBinArray[iBtchIndex].Bin,
                LineNo: this.openPOLineModel[0].LINENUM,
                LotNumber: this.recvingQuantityBinArray[iBtchIndex].LotNumber,
                LotQty: this.recvingQuantityBinArray[iBtchIndex].LotQty,
                SysSerial: "0",
                ExpireDate: this.GetSubmitDateFormat(this.expiryDate),
                VendorLot: this.recvingQuantityBinArray[iBtchIndex].VendorLot,
                //NoOfLabels: oActualGRPOModel.PoDetails[iIndex].NoOfLabels,
                //Containers: piContainers,
                SuppSerial: this.recvingQuantityBinArray[iBtchIndex].VendorLot,
                ParentLineNo: Number(localStorage.getItem("Line")),
                LotSteelRollId: ""
            });
        }
        for (var iLastIndexNumber = 0; iLastIndexNumber < this.LastSerialNumber.length; iLastIndexNumber++) {
            oSubmitPOLotsObj.LastSerialNumber.push({
                LastSerialNumber: this.LastSerialNumber[iLastIndexNumber],
                LineId: this.LineId[iLastIndexNumber],
                ItemCode: this.openPOLineModel[0].ITEMCODE
            });
        }
        localStorage.setItem("Line", "" + (Number(localStorage.getItem("Line")) + 1));
        return oSubmitPOLotsObj;
    };
    InboundGRPOComponent.prototype.GetSubmitDateFormat = function (EXPDATE) {
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
    InboundGRPOComponent.prototype.removePODetailData = function () {
        var inboundData = JSON.parse(localStorage.getItem("AddToGRPO"));
        if (inboundData != undefined && inboundData != null && inboundData != "") {
            for (var i = 0; i < inboundData.POReceiptLots.length; i++) {
                if (inboundData.POReceiptLots[i].PONumber == this.Ponumber &&
                    inboundData.POReceiptLots[i].ItemCode == this.openPOLineModel[0].ITEMCODE &&
                    inboundData.POReceiptLots[i].LineNo == this.openPOLineModel[0].LINENUM) {
                    for (var j = 0; j < inboundData.POReceiptLotDetails.length; j++) {
                        if (inboundData.POReceiptLotDetails[j].ParentLineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.POReceiptLotDetails.splice(j, 1);
                            j = -1;
                        }
                    }
                    for (var k = 0; k < inboundData.UDF.length; k++) {
                        if (inboundData.UDF[k].Key == "OPTM_TARGETWHS" &&
                            inboundData.UDF[k].LineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.UDF.splice(k, 1);
                        }
                        if (inboundData.UDF[k].Key == "OPTM_TARGETBIN" &&
                            inboundData.UDF[k].LineNo == inboundData.POReceiptLots[i].Line) {
                            inboundData.UDF.splice(k, 1);
                        }
                    }
                    for (var m = 0; m < inboundData.LastSerialNumber.length; m++) {
                        if (inboundData.LastSerialNumber[m].ItemCode == inboundData.POReceiptLots[i].ItemCode) {
                            inboundData.LastSerialNumber.splice(m, 1);
                            m = -1;
                        }
                    }
                    inboundData.POReceiptLots.splice(i, 1);
                }
            }
            localStorage.setItem("AddToGRPO", JSON.stringify(inboundData));
        }
        var GRPOReceieveData = JSON.parse(localStorage.getItem("GRPOReceieveData"));
        if (GRPOReceieveData != undefined && GRPOReceieveData != null && GRPOReceieveData != "") {
            for (var i = 0; i < GRPOReceieveData.POReceiptLots.length; i++) {
                if (inboundData.POReceiptLots[i].PONumber == this.Ponumber &&
                    inboundData.POReceiptLots[i].ItemCode == this.openPOLineModel[0].ITEMCODE &&
                    inboundData.POReceiptLots[i].LineNo == this.openPOLineModel[0].LINENUM) {
                    for (var j = 0; j < GRPOReceieveData.POReceiptLotDetails.length; j++) {
                        if (GRPOReceieveData.POReceiptLotDetails[j].ParentLineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.POReceiptLotDetails.splice(j, 1);
                            j = -1;
                        }
                    }
                    for (var k = 0; k < GRPOReceieveData.UDF.length; k++) {
                        if (GRPOReceieveData.UDF[k].Key == "OPTM_TARGETWHS" &&
                            GRPOReceieveData.UDF[k].LineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.UDF.splice(k, 1);
                        }
                        if (GRPOReceieveData.UDF[k].Key == "OPTM_TARGETBIN" &&
                            GRPOReceieveData.UDF[k].LineNo == GRPOReceieveData.POReceiptLots[i].Line) {
                            GRPOReceieveData.UDF.splice(k, 1);
                        }
                    }
                    for (var m = 0; m < GRPOReceieveData.LastSerialNumber.length; m++) {
                        if (GRPOReceieveData.LastSerialNumber[m].ItemCode == GRPOReceieveData.POReceiptLots[i].ItemCode) {
                            GRPOReceieveData.LastSerialNumber.splice(m, 1);
                            m = -1;
                        }
                    }
                    GRPOReceieveData.POReceiptLots.splice(i, 1);
                }
            }
            localStorage.setItem("GRPOReceieveData", JSON.stringify(GRPOReceieveData));
        }
    };
    InboundGRPOComponent.prototype.SubmitGoodsReceiptPO = function (oSubmitPOLotsObj) {
        var _this = this;
        this.showLoader = true;
        this.inboundService.SubmitGoodsReceiptPO(oSubmitPOLotsObj).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data[0].ErrorMsg == "" && data[0].Successmsg == "SUCCESSFULLY") {
                if (_this.operationType == "All") {
                    localStorage.setItem("Line", "0");
                    localStorage.setItem("GRPOReceieveData", "");
                    localStorage.setItem("AddToGRPO", "");
                    localStorage.setItem("addToGRPOPONumbers", "");
                }
                else if (_this.operationType == "Current") {
                    _this.removePODetailData();
                }
                else {
                    localStorage.setItem("Line", "0");
                    localStorage.setItem("GRPOReceieveData", "");
                    localStorage.setItem("AddToGRPO", "");
                    localStorage.setItem("addToGRPOPONumbers", "");
                }
                // alert("Goods Receipt PO generated successfully with Doc No: " + data.DocEntry);
                _this.toastr.success('', _this.translate.instant("GRPOSuccessMessage") + " " + data[0].SuccessNo);
                if (_this.showPDF) {
                    //show pdf
                    _this.displayPDF(data[0].DocEntry);
                    _this.showPDF = false;
                }
                else {
                    // no need to display pdf
                    _this.inboundMasterComponent.inboundComponent = 1;
                }
            }
            else if (data[0].ErrorMsg == "7001") {
                _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                return;
            }
            else {
                // alert(data[0].ErrorMsg);
                _this.toastr.error('', data[0].ErrorMsg);
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    InboundGRPOComponent.prototype.cancel = function () {
        localStorage.setItem("PONumber", this.Ponumber);
        this.inboundMasterComponent.inboundComponent = 2;
    };
    InboundGRPOComponent.prototype.DeleteRowClick = function (rowindex, gridData) {
        if (this.recvingQuantityBinArray.length > 0) {
            var qtyForRemove = this.recvingQuantityBinArray[rowindex].LotQty;
            if (this.openPOLineModel[0].RPTQTY >= qtyForRemove) {
                this.openPOLineModel[0].RPTQTY = this.openPOLineModel[0].RPTQTY - qtyForRemove;
            }
        }
        this.recvingQuantityBinArray.splice(rowindex, 1);
        gridData.data = this.recvingQuantityBinArray;
        if (this.recvingQuantityBinArray.length > 0) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
    };
    // item section.
    /**
    * Method to get list of inquries from server.
    */
    InboundGRPOComponent.prototype.getTargetWhseList = function () {
        var _this = this;
        this.showLoader = true;
        this.targetWhseSubs = this.inboundService.getQCTargetWhse().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
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
    // item section.
    /**
    * Method to get list of inquries from server.
    */
    InboundGRPOComponent.prototype.getTargetBinList = function () {
        var _this = this;
        this.targetBinClick = true;
        //this.showLoader = true; this.getPIlistSubs = 
        this.showLoader = true;
        this.targetBinSubs = this.inboundService.getRevBins("N").subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    console.log(data);
                    _this.showLookupLoader = false;
                    _this.serviceData = data;
                    _this.lookupfor = "RecvBinList";
                    return;
                }
                else {
                    _this.toastr.error('', _this.translate.instant("NoBinsAvailableMsg"));
                }
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    /**
    * @param $event this will return the value on row click of lookup grid.
    */
    InboundGRPOComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "RecvBinList") {
            //this.itemCode = $event[0];
            if (this.targetBinClick) {
                this.targetBin = $event[0];
                this.targetBinClick = false;
            }
            else {
                this.RecvbBinvalue = $event[0];
            }
        }
        else if (this.lookupfor == "toWhsList") {
            console.log("value of lots" + $event);
            console.log("value of lots" + $event.LOTNO);
            this.targetWhse = $event[0];
            //this.itemCode = $event[2];
        }
    };
    InboundGRPOComponent.prototype.OnTargetBinChange = function () {
        var _this = this;
        if (this.targetBin == "") {
            return;
        }
        this.showLoader = true;
        this.inboundService.binChange(this.targetBin).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Result == "0") {
                        _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                        _this.targetBin = "";
                        return;
                    }
                    else {
                        _this.targetBin = data[0].ID;
                        // oCurrentController.isReCeivingBinExist();
                    }
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                _this.targetBin = "";
                return;
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.targetBin = "";
        });
    };
    InboundGRPOComponent.prototype.onQCWHSChange = function () {
        var _this = this;
        if (this.targetWhse == "") {
            return;
        }
        this.showLoader = true;
        this.inboundService.isWHSExists(this.targetWhse).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != null) {
                if (data.length > 0) {
                    if (data[0].Result == "0") {
                        _this.toastr.error('', _this.translate.instant("InvalidWhsErrorMsg"));
                        _this.targetWhse = "";
                        return;
                    }
                    else {
                        _this.targetWhse = data[0].ID;
                        // oCurrentController.isReCeivingBinExist();
                    }
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidWhsErrorMsg"));
                _this.targetWhse = "";
                return;
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
            _this.targetWhse = "";
        });
    };
    InboundGRPOComponent.prototype.onHiddenScanClick = function () {
        this.onGS1ItemScan();
    };
    InboundGRPOComponent.prototype.onGS1ItemScan = function () {
        var _this = this;
        // alert("at onGS1ItemScan ");
        var inputValue = document.getElementById('inboundScanInputField').value;
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
        this.openPOLineModel;
        var piManualOrSingleDimentionBarcode = 0;
        // alert("check and scan code api call")
        this.inboundService.checkAndScanCode(this.openPOLineModel[0].CardCode, this.ScanInputs).subscribe(function (data) {
            //  alert("check and scan code api call response data:"+JSON.stringify(data));
            console.log("responseData: " + JSON.stringify(data));
            if (data != null) {
                if (data[0].Error != null) {
                    if (data[0].Error == "Invalidcodescan") {
                        piManualOrSingleDimentionBarcode = 1;
                        _this.toastr.error('', _this.translate.instant("InvalidScanCode"));
                        // nothing is done in old code.
                    }
                    else {
                        // some message is handle in else section in old code
                        //return;
                    }
                    return;
                }
                console.log("Inapi call section openPoline::", JSON.stringify(_this.openPOLineModel));
                // now check if the  code is for avilable item or not other wise invalid item error.
                var itemCode = _this.openPOLineModel[0].ITEMCODE.toUpperCase();
                if (piManualOrSingleDimentionBarcode == 0) {
                    if (data[0] != null && data[0].Value != null && (data[0].Value.toUpperCase() != itemCode.toUpperCase())) {
                        _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                        _this.ScanInputs = "";
                        return;
                    }
                    var piExpDateExist = 0;
                    //var oGetExpDate = oTextExpiryDate.getValue();
                    var tracking = _this.openPOLineModel[0].TRACKING;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Key == '10' || data[i].Key == '21' || data[i].Key == '23') {
                            _this.ScanInputs = data[i].Value;
                            // make sure ScanInputs variable me puri string aati hai.. to uski value change karne
                            // se kuch affect na kare.
                            //scan input field par set karna hai.. ye value 10,21,23 k case me.
                        }
                        if (data[i].Key == '15' || data[i].Key == '17') {
                            var d = data[i].Value.split('/');
                            var oepxpdt = d[0] + '/' + d[1] + '/' + d[2];
                            // set value to date field 
                            _this.expiryDate = oepxpdt;
                            piExpDateExist = 1; //taken this variable for date purpose check if later used.
                        }
                        if (data[i].Key == '30' || data[i].Key == '310' ||
                            data[i].Key == '315' || data[i].Key == '316' || data[i].Key == '320') {
                            if (tracking == "S") {
                                //oAddserial.setValue("1");
                                _this.qty = 1;
                            }
                            else {
                                _this.qty = data[i].Value;
                            }
                            _this.addQuantity();
                        }
                    }
                }
                var index = 0;
                var selectedMode = "WMS"; // I dont know why we are setting it to wms.
                var autoLots = JSON.parse(localStorage.getItem("primaryAutoLots"));
                if ((autoLots[0].AUTOLOT == "Y" || autoLots[0].AUTOLOT == "N" || autoLots[0].AUTOLOT == null)
                    && selectedMode === "WMS" && tracking == "S" && _this.ScanInputs != "") {
                    //oAddserial.setValue("1");  I think not needed to set value because we are already setting in above code.
                    _this.QuantityField.nativeElement.disabled = true;
                }
                else {
                    //oAddserial.setValue("");
                    _this.QuantityField.nativeElement.disabled = false;
                }
            }
        }, function (error) {
            console.log("Error: ", error);
            _this.targetWhse = "";
        });
    };
    InboundGRPOComponent.prototype.displayPDF = function (dNo) {
        var _this = this;
        this.showLoader = true;
        this.inboundService.printingServiceForSubmitGRPO(dNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined) {
                console.log("" + data);
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.Detail != null && data.Detail != undefined && data.Detail[0] != null && data.Detail[0] != undefined) {
                    _this.fileName = data.Detail[0].FileName;
                    _this.base64String = data.Detail[0].Base64String;
                }
                if (_this.base64String != null && _this.base64String != "") {
                    // this.showPdf(); // this function is used to display pdf in new tab.
                    _this.base64String = 'data:application/pdf;base64,' + _this.base64String;
                    _this.displayPDF1 = true;
                    //this.commonservice.refreshDisplyPDF(true); 
                }
                else {
                    // no data available then redirect to first screen.
                    _this.inboundMasterComponent.inboundComponent = 1;
                }
                //  console.log("filename:" + this.fileName);
                console.log("filename:" + _this.base64String);
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    InboundGRPOComponent.prototype.closePDF = function () {
        //close current screen and redirect to first screen.
        this.inboundMasterComponent.inboundComponent = 1;
        console.log("PDF dialog is closed");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Quantity'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InboundGRPOComponent.prototype, "QuantityField", void 0);
    InboundGRPOComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-grpo',
            template: __webpack_require__(/*! ./inbound-grpo.component.html */ "./src/app/inbound/inbound-grpo/inbound-grpo.component.html"),
            styles: [__webpack_require__(/*! ./inbound-grpo.component.scss */ "./src/app/inbound/inbound-grpo/inbound-grpo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_inbound_service__WEBPACK_IMPORTED_MODULE_4__["InboundService"], src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["Commonservice"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            src_app_inbound_inbound_master_component__WEBPACK_IMPORTED_MODULE_2__["InboundMasterComponent"]])
    ], InboundGRPOComponent);
    return InboundGRPOComponent;
}());



/***/ }),

/***/ "./src/app/inbound/inbound-master.component.html":
/*!*******************************************************!*\
  !*** ./src/app/inbound/inbound-master.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-inbound-details *ngIf=\"inboundComponent == 1\" ></app-inbound-details>\r\n\r\n<app-inbound-polist *ngIf=\"inboundComponent==2\"></app-inbound-polist>\r\n\r\n<app-inbound-grpo *ngIf=\"inboundComponent==3\"></app-inbound-grpo>"

/***/ }),

/***/ "./src/app/inbound/inbound-master.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/inbound/inbound-master.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaW5ib3VuZC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/inbound/inbound-master.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/inbound/inbound-master.component.ts ***!
  \*****************************************************/
/*! exports provided: InboundMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundMasterComponent", function() { return InboundMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InboundMasterComponent = /** @class */ (function () {
    function InboundMasterComponent() {
        this.inboundComponent = 1;
        this.oSubmitPOLotsArray = [];
        this.AddtoGRPOFlag = false;
        this.SubmitPOArray = [];
    }
    InboundMasterComponent.prototype.ngOnInit = function () {
    };
    InboundMasterComponent.prototype.setSelectedVender = function (vender) {
        this.selectedVernder = vender;
    };
    // setAutoLots(autoLots: AutoLot[]){
    //   this.autoLots = autoLots;
    // }
    InboundMasterComponent.prototype.setClickedItemDetail = function (openPOmodel) {
        this.openPOmodel = openPOmodel;
    };
    InboundMasterComponent.prototype.savePOLots = function (oSubmitPOLot) {
        this.oSubmitPOLotsArray.push(oSubmitPOLot);
        this.AddtoGRPOFlag = true;
    };
    InboundMasterComponent.prototype.AddPOList = function (openPOLinesModel) {
        this.SubmitPOArray.push(openPOLinesModel);
    };
    InboundMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-master',
            template: __webpack_require__(/*! ./inbound-master.component.html */ "./src/app/inbound/inbound-master.component.html"),
            styles: [__webpack_require__(/*! ./inbound-master.component.scss */ "./src/app/inbound/inbound-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InboundMasterComponent);
    return InboundMasterComponent;
}());



/***/ }),

/***/ "./src/app/inbound/inbound-polist/inbound-polist.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inbound/inbound-polist/inbound-polist.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\" *ngIf=\"!viewLines\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'Inbound_GoodsReceiptPO'|translate}} : {{selectedVendor}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row align-items-center\">\r\n                        <label for=\"inputPassword\" class=\"col-4 col-sm-3 col-form-label py-0\">{{'FuturePOs'|translate}}</label>\r\n                        <div class=\"col-8 col-sm-9\">\r\n                            <div class=\"opti_input-group-checkbox\">\r\n                                <input type=\"checkbox\" id=\"ch7\" class=\"k-checkbox\" name=\"futurepo\" ([ngModel])=\"futurepo\" />\r\n                                <label class=\"k-checkbox-label\" for=\"ch7\"></label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'PO#'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"poCode\" [(ngModel)]=poCode placeholder=\"{{'PO#'|translate}}\"\r\n                                    (blur)=\"OnPOChange()\" [disabled]=disablePO>\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"onPOlookupClick()\" [disabled]=disablePO>\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button class=\"k-button k-primary btn separate-btn\" (click)=\"openPOLines()\" type=\"button\">\r\n                                        <i class=\"opti-icon-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" placeholder=\"{{'ItemCode'|translate}}\" class=\"form-control form-control-sm\" name=\"itemCode\" [(ngModel)]=itemCode>\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"onItemlookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"showSerialTrackItem\">\r\n                <!-- Serial tracked item -->\r\n                <div class=\"row\" *ngIf=\"showSerialTrackItem\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12\">\r\n                        <div class=\"d-flex align-items-center\">\r\n                            <h4 class=\"mt-2 mb-2  mt-md-0\">{{'Items'|translate}}</h4>\r\n                            <ul class=\"color-label mt-2 mt-md-0 ml-auto mb-2\">\r\n                                <li>\r\n                                    <span class=\"color-block blue\"></span>\r\n                                    <span>{{'Batch'|translate}}</span>\r\n                                </li>\r\n                                <li>\r\n                                    <span class=\"color-block red\"></span>\r\n                                    <span>{{'Serial'|translate}}</span>\r\n                                </li>\r\n                                <li>\r\n                                    <span class=\"color-block \"></span>\r\n                                    <span>{{'None'|translate}}</span>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-12 mb-2 border-bottom\"></div>\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"openPOLinesModel\" [resizable]=\"true\" \r\n                          [pageSize]=\"pageSize\" [pageable]=\"pagable\" [sortable]=\"true\"\r\n                            [filterable]=isColumnFilter [groupable]=isColumnGroup [height]=gridHeight [selectable]=\"true\" [rowClass]=\"rowCallback\"\r\n                            (selectionChange)=\"onClickOpenPOLineRowOpenAutoLot($event)\" #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"{{'Items'|translate}}\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'ItemCode'|translate}}</dt>\r\n                                        <dd>{{ dataItem.ITEMCODE }}</dd>\r\n\r\n                                        <dt>{{'ReceiveQty'|translate}}</dt>\r\n                                        <dd>{{dataItem.RPTQTY | numberFormat}}</dd>\r\n                                    </dl>\r\n\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt class=\"d-flex align-items-center\">{{'OpenQty'|translate}}\r\n                                            <span class=\"opti_arrow-grid-detail ml-auto text-center opti_vertical-align\">›</span>\r\n                                        </dt>\r\n                                        <dd>{{dataItem.OPENQTY | numberFormat}}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"ITEMCODE\" title=\"{{'ItemCode'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"OPENQTY\" title=\"{{'OpenQty'|translate}}\" headerClass=\"text-right\" class=\"text-right\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    {{dataItem.OPENQTY | numberFormat}}\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column media=\"(min-width: 768px)\" field=\"RPTQTY\" title=\"{{'ReceiveQty'|translate}}\" headerClass=\"text-right\" class=\"text-right\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    {{dataItem.RPTQTY |numberFormat}}\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n\r\n                <button class=\"btn btn-outline-secondary btn-sm btn-transparent btn-icon mr-1\" (click)=\"onCancelClick()\" type=\"button\">\r\n                    <i class=\"opti-icon-arrow-back\"></i>\r\n                </button>\r\n\r\n                <button type=\"button\" *ngIf=\"showGRPOButton\" class=\"btn btn-primary k-button btn-sm btn-icon-with-text\" (click)=\"onAddtoGRPOClick()\">\r\n                    <span class=\"k-icon k-i-plus-outline\" role=\"presentation\"></span>{{'AddToGRPO'|translate}} </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<span *ngIf=\"showLookupLoader == false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</span>\r\n<div class=\"opti_loader full-section\" *ngIf=\"showLoader\">\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/inbound/inbound-polist/inbound-polist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/inbound/inbound-polist/inbound-polist.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-label {\n  padding: 0;\n  margin: 0 0 10px 0;\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-self: flex-end;\n  justify-content: flex-end; }\n\n.color-label li {\n  display: flex;\n  align-items: center; }\n\n.color-label li span.color-block {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #bfbfbf;\n  margin-right: 10px; }\n\n.color-label li span.color-block + span {\n  padding-right: 10px;\n  color: #666; }\n\n.color-label li span.red {\n  background-color: #ffcece; }\n\n.color-label li span.blue {\n  background-color: #b6def9; }\n\n.color-label li span.green {\n  background-color: #b6f9c4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3VuZC9pbmJvdW5kLXBvbGlzdC9EOlxcQW5rdXJcXFdNU1xcTkV3V01TQ0xvbmUzXFxPcHRpUHJvRVJQV01TLUFuZ3VsYXIvc3JjXFxhcHBcXGluYm91bmRcXGluYm91bmQtcG9saXN0XFxpbmJvdW5kLXBvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVUsRUFBQTs7QUFFZDtFQUNJLHlCQUNKLEVBQUE7O0FBQ0E7RUFDSSx5QkFDSixFQUFBOztBQUNBO0VBQ0kseUJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaW5ib3VuZC1wb2xpc3QvaW5ib3VuZC1wb2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItbGFiZWx7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uY29sb3ItbGFiZWwgbGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5jb2xvci1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5jb2xvci1ibG9jayArIHNwYW57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IzY2NjtcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZWNlXHJcbn1cclxuLmNvbG9yLWxhYmVsIGxpIHNwYW4uYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRlZjlcclxufVxyXG4uY29sb3ItbGFiZWwgbGkgc3Bhbi5ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmY5YzRcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/inbound/inbound-polist/inbound-polist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inbound/inbound-polist/inbound-polist.component.ts ***!
  \********************************************************************/
/*! exports provided: InboundPolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundPolistComponent", function() { return InboundPolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _inbound_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbound-master.component */ "./src/app/inbound/inbound-master.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Inbound_AutoLot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/Inbound/AutoLot */ "./src/app/models/Inbound/AutoLot.ts");









var InboundPolistComponent = /** @class */ (function () {
    function InboundPolistComponent(inboundService, commonservice, router, toastr, translate, inboundMasterComponent) {
        this.inboundService = inboundService;
        this.commonservice = commonservice;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.inboundMasterComponent = inboundMasterComponent;
        this.futurepo = false;
        this.poCode = "";
        this.showLookupLoader = true;
        this.itemCode = "";
        this.showSerialTrackItem = false;
        this.showBatchTrackItem = false;
        this.showNonTrackItem = false;
        this.oSavedPOLotsArray = {};
        this.addToGRPOArray = {};
        this.addToGRPOPONumbers = {};
        this.showGRPOButton = false;
        this.selectedVendor = "";
        this.disablePO = false;
        this.showLoader = false;
        this.pagable = false;
        this.pageSize = _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["Commonservice"].pageSize;
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
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    InboundPolistComponent.prototype.ngOnInit = function () {
        var ponumber = localStorage.getItem("PONumber");
        if (ponumber != undefined && ponumber != null && ponumber != "") {
            this.poCode = ponumber;
            this.openPOLines();
        }
        this.selectedVendor = this.inboundMasterComponent.selectedVernder;
        this.showGRPOButton = false;
    };
    InboundPolistComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var selectedPO = localStorage.getItem("selectedPO");
            if (selectedPO != undefined && selectedPO != null && selectedPO != "") {
                _this.poCode = selectedPO;
                _this.disablePO = true;
                _this.openPOLines();
            }
            else {
                _this.disablePO = false;
            }
        }, 100);
    };
    InboundPolistComponent.prototype.onPOlookupClick = function () {
        var _this = this;
        console.log("item POlookup click :");
        this.showLoader = true;
        this.inboundService.getPOList(this.futurepo, this.inboundMasterComponent.selectedVernder, this.itemCode).subscribe(function (data) {
            _this.showLoader = false;
            console.log("get polist response:");
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data.Table;
                console.log("get polist response serviceData:", _this.serviceData);
                _this.lookupfor = "POList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    InboundPolistComponent.prototype.onItemlookupClick = function () {
        var _this = this;
        console.log("item lookup click :");
        this.showLoader = true;
        this.inboundService.getItemList(this.futurepo, this.inboundMasterComponent.selectedVernder, this.poCode).subscribe(function (data) {
            _this.showLoader = false;
            console.log(data);
            if (data != undefined) {
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data.Table;
                _this.lookupfor = "POItemList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    InboundPolistComponent.prototype.openPOLines = function () {
        var _this = this;
        if (this.poCode == "") {
            this.toastr.error('', this.translate.instant("POValidation"));
            return;
        }
        //console.log("search click : in open poline method :openPOLines()");
        this.showLoader = true;
        this.inboundService.GetOpenPOLines(this.futurepo, this.itemCode, this.poCode).subscribe(function (data) {
            _this.showLoader = false;
            console.log("api call resonse section :openPOLines()");
            console.log(data);
            _this.showNonTrackItem = false;
            _this.showBatchTrackItem = false;
            _this.showSerialTrackItem = false;
            if (data.Table != undefined && data.Table != null) {
                _this.openPOLinesModel = [];
                _this.BatchItemsDetail = [];
                _this.NonItemsDetail = [];
                _this.SerialItemsDetail = [];
                if (data.Table.length == 0) {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                    return;
                }
                _this.openPOLinesModel = data.Table;
                // var  unmatchedPOLinesModel = data.Table;
                _this.updateReceivedQtyForSavedItems();
                if (_this.openPOLinesModel.length > 0) {
                    _this.showSerialTrackItem = true;
                    // this.pagable = true;
                }
                if (_this.openPOLinesModel.length > _this.pageSize) {
                    _this.pagable = true;
                }
            }
            else if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                return;
            }
            console.log("api call resonse section end of if :openPOLines()");
        }, function (error) {
            _this.showLoader = false;
            console.log("Error: ", error);
        });
    };
    InboundPolistComponent.prototype.OnPOChange = function () {
        var _this = this;
        if (this.poCode == "" || this.poCode == undefined) {
            return;
        }
        this.showLoader = true;
        this.inboundService.IsPOExists(this.poCode, "").subscribe(function (data) {
            _this.showLoader = false;
            if (data != null) {
                if (data.length > 0) {
                    _this.openPOLines();
                }
                else {
                    _this.poCode = "";
                    _this.toastr.error('', _this.translate.instant("POExistMessage"));
                    return;
                }
            }
            else {
                _this.poCode = "";
                _this.toastr.error('', _this.translate.instant("POExistMessage"));
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    InboundPolistComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "POList") {
            this.poCode = $event[0];
            this.Name = $event[1];
        }
        else if (this.lookupfor == "POItemList") {
            this.itemCode = $event[0];
            this.openPOLines();
        }
    };
    InboundPolistComponent.prototype.onClickOpenPOLineRowOpenAutoLot = function (selection) {
        var poline = selection.selectedRows[0].dataItem;
        this.openPOLineModel = poline;
        this.openPOLineModel.RPTQTY = 0;
        this.openPOLineModel.DocNum = this.poCode;
        this.inboundMasterComponent.setClickedItemDetail(this.openPOLineModel);
        this.getAutoLot(poline.ITEMCODE);
    };
    InboundPolistComponent.prototype.getAutoLot = function (itemCode) {
        var _this = this;
        this.inboundService.getAutoLot(itemCode).subscribe(function (data) {
            console.log(data);
            if (data.Table != undefined) {
                _this.autoLot = data.Table;
                console.log("autolot value from polist:" + _this.autoLot);
            }
            else if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                return;
            }
            if (_this.autoLot.length > 0) {
            }
            else {
                _this.autoLot.push(new _models_Inbound_AutoLot__WEBPACK_IMPORTED_MODULE_8__["AutoLot"]("N", itemCode, "", "", "", ""));
            }
            //this.inboundMasterComponent.setAutoLots(this.autoLot);
            localStorage.setItem("primaryAutoLots", JSON.stringify(_this.autoLot));
            // this.openPOLineModel = this.openPOLinesModel.find(e => e.ITEMCODE == itemCode);
            if (_this.openPOLineModel != null) {
                _this.inboundMasterComponent.inboundComponent = 3;
            }
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    InboundPolistComponent.prototype.updateReceivedQtyForSavedItems = function () {
        // var  unmatchedPOLinesModel = array;
        if (localStorage.getItem("GRPOReceieveData") != undefined && localStorage.getItem("GRPOReceieveData") != null && localStorage.getItem("GRPOReceieveData") != "") {
            this.oSavedPOLotsArray = JSON.parse(localStorage.getItem("GRPOReceieveData"));
        }
        else {
            this.oSavedPOLotsArray = undefined;
        }
        for (var k = 0; k < this.openPOLinesModel.length; k++) {
            this.openPOLinesModel[k].RPTQTY = 0;
        }
        if (this.oSavedPOLotsArray != undefined && this.oSavedPOLotsArray != null &&
            this.oSavedPOLotsArray.POReceiptLots != undefined && this.oSavedPOLotsArray.POReceiptLots != null &&
            this.oSavedPOLotsArray.POReceiptLots.length > 0 &&
            this.openPOLinesModel != undefined && this.openPOLinesModel != null &&
            this.openPOLinesModel.length > 0) {
            for (var i = 0; i < this.openPOLinesModel.length; i++) {
                for (var j = 0; j < this.oSavedPOLotsArray.POReceiptLots.length; j++) {
                    if (this.oSavedPOLotsArray.POReceiptLots[j].PONumber == this.poCode &&
                        this.oSavedPOLotsArray.POReceiptLots[j].ItemCode == this.openPOLinesModel[i].ITEMCODE &&
                        this.oSavedPOLotsArray.POReceiptLots[j].LineNo == this.openPOLinesModel[i].LINENUM) {
                        this.openPOLinesModel[i].RPTQTY = this.oSavedPOLotsArray.POReceiptLots[j].ShipQty;
                        this.showGRPOButton = true;
                    }
                }
            }
        }
        console.log("OpenPOlines items size:", this.openPOLinesModel.length);
        console.log("OpenPOlines items :", JSON.stringify(this.openPOLinesModel));
    };
    InboundPolistComponent.prototype.copyRemaingItemtoMainArray = function (unmatchedPOLinesModel) {
        for (var i = 0; i < this.openPOLinesModel.length; i++) {
            for (var j = 0; j < this.unmatchedPOLinesModel.length; j++) {
                if (this.unmatchedPOLinesModel[j].POReceiptLots != null &&
                    this.unmatchedPOLinesModel[j].POReceiptLots != undefined &&
                    this.unmatchedPOLinesModel[j].POReceiptLots.length > 0 &&
                    this.unmatchedPOLinesModel[j].POReceiptLots[0].PONumber == this.poCode &&
                    this.unmatchedPOLinesModel[j].POReceiptLots[0].ItemCode == this.openPOLinesModel[i].ITEMCODE) {
                    this.openPOLinesModel[i].RPTQTY = 0;
                    //this.openPOLinesModel.splice(i,1); 
                }
            }
        }
    };
    InboundPolistComponent.prototype.onCancelClick = function () {
        this.inboundMasterComponent.inboundComponent = 1;
        localStorage.setItem("PONumber", "");
    };
    InboundPolistComponent.prototype.onAddtoGRPOClick = function () {
        this.oSavedPOLotsArray = JSON.parse(localStorage.getItem("GRPOReceieveData"));
        if (this.oSavedPOLotsArray != undefined && this.oSavedPOLotsArray != null && this.oSavedPOLotsArray != "") {
            if (localStorage.getItem("AddToGRPO") != "") {
                this.addToGRPOArray = JSON.parse(localStorage.getItem("AddToGRPO"));
                this.manageGRPOData();
            }
            else {
                this.addToGRPOArray.POReceiptLots = [];
                this.addToGRPOArray.POReceiptLotDetails = [];
                this.addToGRPOArray.UDF = [];
                this.addToGRPOArray.LastSerialNumber = [];
            }
            if (localStorage.getItem("addToGRPOPONumbers") != "") {
                this.addToGRPOPONumbers = JSON.parse(localStorage.getItem("addToGRPOPONumbers"));
                // this.managePONumberListData();
            }
            else {
                this.addToGRPOPONumbers.PONumbers = [];
            }
            var addpo = true;
            for (var i = 0; i < this.oSavedPOLotsArray.POReceiptLots.length; i++) {
                if (this.oSavedPOLotsArray.POReceiptLots[i].PONumber == this.poCode) {
                    if (addpo) {
                        var isExist = false;
                        for (var c = 0; c < this.addToGRPOPONumbers.PONumbers.length; c++) {
                            if (this.addToGRPOPONumbers.PONumbers[c].PONumber == this.poCode) {
                                // this.addToGRPOPONumbers.PONumbers.splice(c, 1);
                                this.addToGRPOPONumbers.PONumbers[c].PONumber = this.oSavedPOLotsArray.POReceiptLots[i].PONumber;
                                isExist = true;
                            }
                        }
                        if (!isExist) {
                            this.addToGRPOPONumbers.PONumbers.push({
                                PONumber: this.oSavedPOLotsArray.POReceiptLots[i].PONumber
                            });
                        }
                        addpo = false;
                    }
                    this.addToGRPOArray.POReceiptLots.push({
                        DiServerToken: localStorage.getItem("Token"),
                        PONumber: this.oSavedPOLotsArray.POReceiptLots[i].PONumber,
                        CompanyDBId: localStorage.getItem("CompID"),
                        LineNo: this.oSavedPOLotsArray.POReceiptLots[i].LineNo,
                        ShipQty: this.oSavedPOLotsArray.POReceiptLots[i].ShipQty,
                        OpenQty: this.oSavedPOLotsArray.POReceiptLots[i].OpenQty,
                        WhsCode: localStorage.getItem("whseId"),
                        Tracking: this.oSavedPOLotsArray.POReceiptLots[i].Tracking,
                        ItemCode: this.oSavedPOLotsArray.POReceiptLots[i].ItemCode,
                        LastSerialNumber: 0,
                        Line: this.oSavedPOLotsArray.POReceiptLots[i].Line,
                        GUID: localStorage.getItem("GUID"),
                        UOM: this.oSavedPOLotsArray.POReceiptLots[i].UOM,
                        UsernameForLic: localStorage.getItem("UserId")
                    });
                    for (var j = 0; j < this.oSavedPOLotsArray.POReceiptLotDetails.length; j++) {
                        if (this.oSavedPOLotsArray.POReceiptLotDetails[j].ParentLineNo == this.oSavedPOLotsArray.POReceiptLots[i].Line) {
                            this.addToGRPOArray.POReceiptLotDetails.push({
                                Bin: this.oSavedPOLotsArray.POReceiptLotDetails[j].Bin,
                                LineNo: this.oSavedPOLotsArray.POReceiptLotDetails[j].LineNo,
                                LotNumber: this.oSavedPOLotsArray.POReceiptLotDetails[j].LotNumber,
                                LotQty: this.oSavedPOLotsArray.POReceiptLotDetails[j].LotQty,
                                SysSerial: "0",
                                ExpireDate: this.oSavedPOLotsArray.POReceiptLotDetails[j].ExpireDate,
                                VendorLot: this.oSavedPOLotsArray.POReceiptLotDetails[j].VendorLot,
                                SuppSerial: this.oSavedPOLotsArray.POReceiptLotDetails[j].SuppSerial,
                                ParentLineNo: this.oSavedPOLotsArray.POReceiptLotDetails[j].ParentLineNo,
                                LotSteelRollId: ""
                            });
                        }
                    }
                    for (var k = 0; k < this.oSavedPOLotsArray.UDF.length; k++) {
                        if (this.oSavedPOLotsArray.UDF[k].Key == "OPTM_TARGETWHS" &&
                            this.oSavedPOLotsArray.UDF[k].LineNo == this.oSavedPOLotsArray.POReceiptLots[i].Line) {
                            this.addToGRPOArray.UDF.push({
                                Key: "OPTM_TARGETWHS",
                                Value: this.oSavedPOLotsArray.UDF[k].Value,
                                Flag: 'D',
                                LineNo: this.oSavedPOLotsArray.UDF[k].LineNo
                            });
                        }
                        if (this.oSavedPOLotsArray.UDF[k].Key == "OPTM_TARGETBIN" &&
                            this.oSavedPOLotsArray.UDF[k].LineNo == this.oSavedPOLotsArray.POReceiptLots[i].Line) {
                            this.addToGRPOArray.UDF.push({
                                Key: "OPTM_TARGETBIN",
                                Value: this.oSavedPOLotsArray.UDF[k].Value,
                                Flag: 'D',
                                LineNo: this.oSavedPOLotsArray.UDF[k].LineNo
                            });
                        }
                    }
                    for (var m = 0; m < this.oSavedPOLotsArray.LastSerialNumber.length; m++) {
                        if (this.oSavedPOLotsArray.LastSerialNumber[m].ItemCode == this.oSavedPOLotsArray.POReceiptLots[i].ItemCode) {
                            this.addToGRPOArray.LastSerialNumber.push({
                                LastSerialNumber: this.oSavedPOLotsArray.LastSerialNumber[m].LastSerialNumber,
                                LineId: this.oSavedPOLotsArray.LastSerialNumber[m].LineId,
                                ItemCode: this.oSavedPOLotsArray.LastSerialNumber[m].ItemCode
                            });
                        }
                    }
                }
            }
            localStorage.setItem("AddToGRPO", JSON.stringify(this.addToGRPOArray));
            localStorage.setItem("addToGRPOPONumbers", JSON.stringify(this.addToGRPOPONumbers));
        }
        localStorage.setItem("PONumber", "");
        this.inboundMasterComponent.inboundComponent = 1;
    };
    InboundPolistComponent.prototype.managePONumberListData = function () {
        for (var i = 0; i < this.addToGRPOPONumbers.PONumbers.length; i++) {
            if (this.addToGRPOPONumbers.PONumbers[i].PONumber == this.poCode) {
                this.addToGRPOPONumbers.PONumbers.splice(i, 1);
            }
        }
    };
    InboundPolistComponent.prototype.manageGRPOData = function () {
        for (var i = 0; i < this.addToGRPOArray.POReceiptLots.length; i++) {
            if (this.addToGRPOArray.POReceiptLots[i].PONumber == this.poCode) {
                for (var j = 0; j < this.addToGRPOArray.POReceiptLotDetails.length; j++) {
                    if (this.addToGRPOArray.POReceiptLotDetails[j].ParentLineNo == this.addToGRPOArray.POReceiptLots[i].Line) {
                        this.addToGRPOArray.POReceiptLotDetails.splice(j, 1);
                        j = -1;
                    }
                }
                for (var k = 0; k < this.addToGRPOArray.UDF.length; k++) {
                    if (this.addToGRPOArray.UDF[k].Key == "OPTM_TARGETWHS" &&
                        this.addToGRPOArray.UDF[k].LineNo == this.addToGRPOArray.POReceiptLots[i].Line) {
                        this.addToGRPOArray.UDF.splice(k, 1);
                    }
                    if (this.addToGRPOArray.UDF[k].Key == "OPTM_TARGETBIN" &&
                        this.addToGRPOArray.UDF[k].LineNo == this.addToGRPOArray.POReceiptLots[i].Line) {
                        this.addToGRPOArray.UDF.splice(k, 1);
                    }
                }
                for (var m = 0; m < this.addToGRPOArray.LastSerialNumber.length; m++) {
                    if (this.addToGRPOArray.LastSerialNumber[m].ItemCode == this.addToGRPOArray.POReceiptLots[i].ItemCode) {
                        this.addToGRPOArray.LastSerialNumber.splice(m, 1);
                        m = -1;
                    }
                }
                this.addToGRPOArray.POReceiptLots.splice(i, 1);
                i = -1;
            }
        }
    };
    InboundPolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-polist',
            template: __webpack_require__(/*! ./inbound-polist.component.html */ "./src/app/inbound/inbound-polist/inbound-polist.component.html"),
            styles: [__webpack_require__(/*! ./inbound-polist.component.scss */ "./src/app/inbound/inbound-polist/inbound-polist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_inbound_service__WEBPACK_IMPORTED_MODULE_2__["InboundService"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _inbound_master_component__WEBPACK_IMPORTED_MODULE_4__["InboundMasterComponent"]])
    ], InboundPolistComponent);
    return InboundPolistComponent;
}());



/***/ }),

/***/ "./src/app/inbound/inbound-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/inbound/inbound-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InboundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundRoutingModule", function() { return InboundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbound_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbound-master.component */ "./src/app/inbound/inbound-master.component.ts");




// const routes: Routes = [];
var routes = [
    { path: '', component: _inbound_master_component__WEBPACK_IMPORTED_MODULE_3__["InboundMasterComponent"] }
    // { path: 'outcustomer', component: OutCutomerComponent },
    // { path: 'outorder', component: OutOrderComponent },
    // { path: 'outprodissue', component: OutProdissueComponent }
];
var InboundRoutingModule = /** @class */ (function () {
    function InboundRoutingModule() {
    }
    InboundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InboundRoutingModule);
    return InboundRoutingModule;
}());



/***/ }),

/***/ "./src/app/inbound/inbound.module.ts":
/*!*******************************************!*\
  !*** ./src/app/inbound/inbound.module.ts ***!
  \*******************************************/
/*! exports provided: InboundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundModule", function() { return InboundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _inbound_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbound-routing.module */ "./src/app/inbound/inbound-routing.module.ts");
/* harmony import */ var _inbound_details_inbound_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbound-details/inbound-details.component */ "./src/app/inbound/inbound-details/inbound-details.component.ts");
/* harmony import */ var _inbound_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbound-master.component */ "./src/app/inbound/inbound-master.component.ts");
/* harmony import */ var _inbound_polist_inbound_polist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbound-polist/inbound-polist.component */ "./src/app/inbound/inbound-polist/inbound-polist.component.ts");
/* harmony import */ var _inbound_grpo_inbound_grpo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inbound-grpo/inbound-grpo.component */ "./src/app/inbound/inbound-grpo/inbound-grpo.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");















//import { PrintingLabelModule } from '../inbound/inbound-routing.module';
var InboundModule = /** @class */ (function () {
    function InboundModule() {
    }
    InboundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_inbound_details_inbound_details_component__WEBPACK_IMPORTED_MODULE_9__["InboundDetailsComponent"], _inbound_master_component__WEBPACK_IMPORTED_MODULE_10__["InboundMasterComponent"], _inbound_polist_inbound_polist_component__WEBPACK_IMPORTED_MODULE_11__["InboundPolistComponent"],
                _inbound_grpo_inbound_grpo_component__WEBPACK_IMPORTED_MODULE_12__["InboundGRPOComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_6__["TrnaslateLazyModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _inbound_routing_module__WEBPACK_IMPORTED_MODULE_8__["InboundRoutingModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_13__["DropDownsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_14__["DateInputsModule"]
            ]
        })
    ], InboundModule);
    return InboundModule;
}());



/***/ }),

/***/ "./src/app/models/Inbound/AutoLot.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Inbound/AutoLot.ts ***!
  \*******************************************/
/*! exports provided: AutoLot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLot", function() { return AutoLot; });
var AutoLot = /** @class */ (function () {
    function AutoLot(AUTOLOT, ItemCode, LineId, OPERATION, OPRTYPE, STRING) {
        this.AUTOLOT = AUTOLOT;
        this.ItemCode = ItemCode;
        this.LINEID = LineId;
        this.OPERATION = OPERATION;
        this.OPRTYPE = OPRTYPE;
        this.STRING = STRING;
    }
    return AutoLot;
}());



/***/ }),

/***/ "./src/app/models/Inbound/RecvingQuantityBin.ts":
/*!******************************************************!*\
  !*** ./src/app/models/Inbound/RecvingQuantityBin.ts ***!
  \******************************************************/
/*! exports provided: RecvingQuantityBin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecvingQuantityBin", function() { return RecvingQuantityBin; });
var RecvingQuantityBin = /** @class */ (function () {
    // public Bin: string;
    function RecvingQuantityBin(MfrSerial, serial, qty, bin, expiryDate) {
        this.VendorLot = MfrSerial;
        this.LotNumber = serial;
        this.LotQty = qty;
        this.Bin = bin;
        this.expiryDate = expiryDate;
    }
    return RecvingQuantityBin;
}());



/***/ }),

/***/ "./src/app/services/inbound.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/inbound.service.ts ***!
  \*********************************************/
/*! exports provided: InboundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundService", function() { return InboundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_outbound_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/outbound/request-model */ "./src/app/models/outbound/request-model.ts");




var InboundService = /** @class */ (function () {
    function InboundService(httpclient) {
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
    InboundService.prototype.getVendorList = function () {
        var jObject = {
            GoodsReceiptToken: JSON.stringify([{
                    UserId: '',
                    CompanyDBId: localStorage.getItem("CompID"), WhseCode: localStorage.getItem("whseId"),
                    FuturePO: false, PO: "", GUID: localStorage.getItem("GUID"),
                    UsernameForLic: localStorage.getItem("UserId")
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetVendorList", jObject, this.httpOptions);
    };
    InboundService.prototype.IsVendorExists = function (vendor) {
        var jObject = { VendorCode: JSON.stringify([{ UserId: '', CompanyDBId: localStorage.getItem("CompID"), VendorCode: vendor }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsVendorExists", jObject, this.httpOptions);
    };
    InboundService.prototype.getItemList = function (futurepo, vendercode, po) {
        var jObject = {
            GoodsReceiptToken: JSON.stringify([{
                    UserId: '',
                    CompanyDBId: localStorage.getItem("CompID"), WhseCode: localStorage.getItem("whseId"),
                    VendorCode: vendercode,
                    FuturePO: futurepo, PO: po
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetItemList", jObject, this.httpOptions);
    };
    InboundService.prototype.getPOList = function (futurepo, vendercode, itemcode) {
        console.log("get polist method :");
        var jObject = {
            GoodsReceiptToken: JSON.stringify([{
                    UserId: '',
                    CompanyDBId: localStorage.getItem("CompID"), WhseCode: localStorage.getItem("whseId"),
                    ItemCode: itemcode, VendorCode: vendercode,
                    FuturePO: futurepo, IsCustom: false, GUID: localStorage.getItem("GUID"),
                    UsernameForLic: localStorage.getItem("UserId")
                }])
        };
        console.log("get polist method call api :");
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetPOList", jObject, this.httpOptions);
    };
    InboundService.prototype.IsPOExists = function (poCode, cardCode) {
        var jObject = { POCode: JSON.stringify([{ UserId: '', CompanyDBId: localStorage.getItem("CompID"), POCode: poCode, CardCode: cardCode }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsPOExists", jObject, this.httpOptions);
    };
    InboundService.prototype.GetOpenPOLines = function (futurepo, itemCode, po) {
        var jObject = {
            GoodsReceiptToken: JSON.stringify([{
                    UserId: '',
                    CompanyDBId: localStorage.getItem("CompID"),
                    DOCNUM: po,
                    ItemCode: itemCode,
                    WhsCode: localStorage.getItem("whseId"),
                    FuturePO: futurepo
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetOpenPOLines", jObject, this.httpOptions);
    };
    InboundService.prototype.getAutoLot = function (itemCode) {
        var jObject = {
            GoodsReceiptToken: JSON.stringify([{
                    UserId: '',
                    CompanyDBId: localStorage.getItem("CompID"),
                    ItemCode: itemCode
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetAutoLot", jObject, this.httpOptions);
    };
    InboundService.prototype.getUOMs = function (itemCode) {
        var jObject = {
            ItemKey: JSON.stringify([{
                    CompanyDBId: localStorage.getItem("CompID"),
                    ItemCode: itemCode
                }])
        };
        console.log("getUOMs API's request:" + JSON.stringify(jObject));
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/getUOM", jObject, this.httpOptions);
    };
    InboundService.prototype.getRevBins = function (QCrequired) {
        var jObject = {
            WhsCode: JSON.stringify([{
                    CompanyDBId: localStorage.getItem("CompID"), ItemCode: '',
                    WhsCode: localStorage.getItem("whseId"), QCRequired: QCrequired,
                    PageId: "GRPO"
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetBinsForReceiptWithReceivingBin", jObject, this.httpOptions);
    };
    InboundService.prototype.binChange = function (binCode) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), BinCode: binCode, ItemCode: '', WhsCode: localStorage.getItem("whseId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsBinExist", jObject, this.httpOptions);
    };
    InboundService.prototype.SubmitGoodsReceiptPO = function (oSubmitPOLots) {
        var jObject = { GoodsReceiptToken: JSON.stringify(oSubmitPOLots) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/SubmitGoodsReceiptPO", jObject, this.httpOptions);
    };
    // getTargetBins(QCrequired: string): Observable<any> {
    //   var jObject = {
    //     WhsCode: JSON.stringify([{
    //       CompanyDBId: localStorage.getItem("CompID"), ItemCode: '',
    //       WhsCode: localStorage.getItem("whseId"), QCRequired: QCrequired,ageId: "GRPO"}])
    //   };
    //   return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetBinsForReceiptWithReceivingBin", jObject, this.httpOptions);
    // }
    /**
     * get whs list for target whs.
     */
    InboundService.prototype.getQCTargetWhse = function () {
        var jObject = {
            WhsCode: JSON.stringify([{
                    CompanyDBId: localStorage.getItem("CompID"),
                    //Need to pass Username as Warehouses are filled Accordind to the Permission from Admin Portal 
                    //Chane dt 2-July-2018
                    UserId: localStorage.getItem("UserId")
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetWHS", jObject, this.httpOptions);
    };
    /**
     * check whs is valid or not.
     * @param whsCode
     */
    InboundService.prototype.isWHSExists = function (whsCode) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: whsCode }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsWhsExist", jObject, this.httpOptions);
    };
    /**
     * check and scan code.
     * @param whsCode
     */
    InboundService.prototype.checkAndScanCode = function (vendCode, scanInputString) {
        var jObject = { Gs1Token: JSON.stringify([{ Vsvendorid: vendCode, StrScan: scanInputString, CompanyDBId: localStorage.getItem("CompID") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Gs1/GS1SETUP", jObject, this.httpOptions);
    };
    /**
    * This API method will return base64 string for pdf format for print.
    * @param item
    * @param binNo
    * @param noOfCopies
    */
    InboundService.prototype.printingServiceForSubmitGRPO = function (psReceiptNo) {
        var jObject = { PrintingObject: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"),
                    USERID: localStorage.getItem("UserId"), RPTID: 6, DOCNO: psReceiptNo,
                    GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/WMSPrintingService", jObject, this.httpOptions);
    };
    InboundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InboundService);
    return InboundService;
}());



/***/ })

}]);
//# sourceMappingURL=default~inbound-inbound-module~portal-home-portal-home-module.js.map