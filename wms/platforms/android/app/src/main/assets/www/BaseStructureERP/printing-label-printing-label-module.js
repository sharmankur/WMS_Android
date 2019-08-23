(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printing-label-printing-label-module"],{

/***/ "./src/app/printing-label/bin-label/bin-label.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/printing-label/bin-label/bin-label.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n  <form class=\"form-with-fix-btnBar\" >\r\n      <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n          <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n              {{'binLabelReport'|translate}}\r\n          </h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_FromBin'|translate}}</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <div class=\"input-group input-group-sm\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" #fromBinIp=ngModel\r\n                             [(ngModel)] ='fromBin' (blur)=\"OnFromBinChange()\" name ='fromBin' placeholder=\"{{'InvTransfer_FromBin'|translate}}\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"k-button k-primary btn\" type=\"button\"  (click)=\"OnFromBinLookupClick()\">\r\n                                    <i class=\"opti-icon-hammenu\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'InvTransfer_ToBin'|translate}}</label>\r\n                  <div class=\"col-sm-9\">\r\n                      <div class=\"input-group input-group-sm\">\r\n                          <input type=\"text\" (blur)=\"OnToBinChange()\" class=\"form-control form-control-sm\" [(ngModel)]='toBin' #toBinIp=ngModel\r\n                           name ='toBin' placeholder=\"{{'InvTransfer_ToBin'|translate}}\">\r\n                          <div class=\"input-group-append\">\r\n                              <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"OnToBinLookupClick()\">\r\n                                  <i class=\"opti-icon-hammenu\"></i>\r\n                              </button>\r\n                          </div> \r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'noOfCopies'|translate}}</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"   [(ngModel)]=\"noOfCopies\" #numberOfCopiesIp=ngModel class=\"form-control form-control-sm\" name ='customerCode' placeholder=\"{{'noOfCopies'|translate}}\">\r\n                  </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"fix-footer-btnBar\">\r\n        <div class=\"col-sm-12 col-12\">\r\n            <hr />\r\n        </div>\r\n        <div class=\"col-sm-12 col-12\">\r\n            <button type=\"button\"  (click)=\"OnPrintClick()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-printer\"\r\n              role=\"presentation\"></span> {{'Print'|translate}}</button>\r\n            <button type=\"button\" (click)=\"OnCancelClick()\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-close-outline\"\r\n              role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"showLookupLoader == false\">\r\n        <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</div>\r\n<div>\r\n    <app-display-pdf *ngIf =\"displayPDF\" [base64String] = 'base64String' [fileName] = 'fileName'\r\n        (redirectTo)=\"getValueOfRedirect($event)\"></app-display-pdf>\r\n</div>\r\n<div class=\"opti_loader full-section\"  *ngIf=\"showLoader\" >\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/printing-label/bin-label/bin-label.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/printing-label/bin-label/bin-label.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLWxhYmVsL2Jpbi1sYWJlbC9iaW4tbGFiZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/printing-label/bin-label/bin-label.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/printing-label/bin-label/bin-label.component.ts ***!
  \*****************************************************************/
/*! exports provided: BinLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinLabelComponent", function() { return BinLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/label-print-reports.service */ "./src/app/services/label-print-reports.service.ts");







var BinLabelComponent = /** @class */ (function () {
    function BinLabelComponent(commonservice, router, labelPrintReportsService, toastr, translate) {
        this.commonservice = commonservice;
        this.router = router;
        this.labelPrintReportsService = labelPrintReportsService;
        this.toastr = toastr;
        this.translate = translate;
        this.showLoader = false;
        this.showLookupLoader = true;
        this.fromBin = "";
        this.toBin = "";
        this.whsCode = "";
        this.noOfCopies = "1";
        this.showPDF = false;
        this.fileName = "";
        this.base64String = "";
        this.displayPDF = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    BinLabelComponent.prototype.ngOnInit = function () {
        this.getCopyCountForBin();
    };
    /**
     * Item code lookup click.
     */
    BinLabelComponent.prototype.OnFromBinLookupClick = function () {
        console.log('from bin click');
        this.getFromBinsList();
    };
    /**
     * Batch serial lookup click.
     */
    BinLabelComponent.prototype.OnToBinLookupClick = function () {
        console.log('to bin click');
        this.getToBinsList();
    };
    /**
     * Method to get list of inquries from server.
     */
    BinLabelComponent.prototype.getFromBinsList = function () {
        var _this = this;
        this.showLoader = true; //this.getPIlistSubs = 
        this.fromBinListSubs = this.labelPrintReportsService.getFromBinsList().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data;
                _this.lookupfor = "FromBinList";
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
     * Method to get list of inquries from server.
     */
    BinLabelComponent.prototype.getToBinsList = function () {
        var _this = this;
        this.showLoader = true; //this.getPIlistSubs = 
        this.toBinListSubs = this.labelPrintReportsService.getToBinsList().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg")); //.subscribe();
                    return;
                }
                _this.serviceData = data;
                var serviceDataTemp = [];
                var shouldAdd = false;
                for (var index = 0; index < _this.serviceData.length; index++) {
                    if (_this.fromBin == _this.serviceData[index].BINNO) {
                        shouldAdd = true;
                        continue;
                    }
                    if (shouldAdd) {
                        serviceDataTemp.push(_this.serviceData[index]);
                    }
                }
                _this.serviceData = serviceDataTemp;
                _this.lookupfor = "ToBinList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    BinLabelComponent.prototype.ngOnDestroy = function () {
        if (this.fromBinListSubs != undefined)
            this.fromBinListSubs.unsubscribe();
        if (this.toBinListSubs != undefined)
            this.toBinListSubs.unsubscribe();
        if (this.copyCountSubs != undefined)
            this.copyCountSubs.unsubscribe();
        if (this.printServiceSubs != undefined)
            this.printServiceSubs.unsubscribe();
    };
    /**
    * @param $event this will return the value on row click of lookup grid.
    */
    BinLabelComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "FromBinList") {
            this.fromBin = $event[0];
            //this.whsCode = $event;
            console.log("selected item:" + this.fromBin);
        }
        if (this.lookupfor == "ToBinList") {
            this.toBin = $event[0];
            //this.whsCode = $event;
            console.log("selected item:" + this.toBin);
        }
    };
    /**
    * this method will validate all input fields.
    */
    BinLabelComponent.prototype.checkValidation = function () {
        if (this.fromBin == "") {
            this.toastr.error('', this.translate.instant("InvTransfer_FromBinMsg"));
            this.fromBinInput.nativeElement.focus();
            return false;
        }
        if (this.toBin == "") {
            this.toastr.error('', this.translate.instant("InvTransfer_ToBinMsg"));
            this.toBinInput.nativeElement.focus();
            return false;
        }
        if (this.noOfCopies == "" || this.noOfCopies == "0") {
            this.toastr.error('', this.translate.instant("NoOfCopiesCannotbeBlank"));
            this.noOfCopiesInput.nativeElement.focus();
            return false;
        }
        if (!this.check_if_is_integer(this.noOfCopies)) {
            this.toastr.error('', this.translate.instant("NoOfCopiesShouldBeNumeric"));
            this.noOfCopiesInput.nativeElement.focus();
            return false;
        }
        return true;
    };
    BinLabelComponent.prototype.check_if_is_integer = function (value) {
        // I can have spacespacespace1 - which is 1 and validators pases but
        // spacespacespace doesn't - which is what i wanted.
        // 1space2 doesn't pass - good
        // of course, when saving data you do another parseInt.
        return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
    };
    /**
     * this method will check no. of copy count value from server.
     */
    BinLabelComponent.prototype.getCopyCountForBin = function () {
        var _this = this;
        this.copyCountSubs = this.labelPrintReportsService.getCopyCountForBinLabelReport().subscribe(function (data) {
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.noOfCopies = "1";
                    return;
                }
                _this.noOfCopies = data;
            }
            else {
                _this.noOfCopies = "1";
            }
        }, function (error) {
            _this.toastr.error('', error);
            _this.noOfCopies = "1";
        });
    };
    /**
     * handel print click, validate data print data api call.
     */
    BinLabelComponent.prototype.OnPrintClick = function () {
        var _this = this;
        if (!this.checkValidation()) {
            return;
        }
        this.showLoader = true;
        this.printServiceSubs = this.labelPrintReportsService.printingServiceForBinLabel(this.fromBin, this.toBin, this.noOfCopies).subscribe(function (data) {
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
                if (_this.fileName == "1") {
                    _this.toastr.error('', _this.base64String);
                    return;
                }
                if (_this.base64String != null && _this.base64String != "") {
                    // this.showPdf(); // this function is used to display pdf in new tab.
                    _this.base64String = 'data:application/pdf;base64,' + _this.base64String;
                    _this.displayPDF = true;
                    _this.commonservice.refreshDisplyPDF(true);
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
                }
                console.log("filename:" + _this.fileName);
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
    /**
     * show pdf
     * @param base64
     */
    BinLabelComponent.prototype.showPdf = function () {
        this.base64String = 'data:application/pdf;base64,' + this.base64String; //aeded type: application/pdf for pdf file
        this.showPDF = true;
        var pdfWindow = window.open("");
        pdfWindow.document.write("<iframe width='80%' title=" + this.fileName + " height='80%' src=' " + encodeURI(this.base64String) + "'></iframe>");
    };
    /**
      *
      * This method will check if entered bin is valid or not on field blur event.
      */
    BinLabelComponent.prototype.OnFromBinChange = function () {
        var _this = this;
        if (this.fromBin == "" || this.fromBin == undefined) {
            return;
        }
        this.showLoader = true;
        this.isBinExistsSubs = this.labelPrintReportsService.isBinExists(this.fromBin).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data != null) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data[0].Result == "0") {
                    _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                    _this.fromBin = "";
                    return;
                }
                _this.fromBin = data[0].ID; //check this code.
            }
            else {
                _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                _this.fromBin = "";
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    /**
     *
     * This method will check if entered bin is valid or not on field blur event.
     */
    BinLabelComponent.prototype.OnToBinChange = function () {
        var _this = this;
        if (this.toBin == "" || this.toBin == undefined) {
            return;
        }
        this.showLoader = true;
        this.isBinExistsSubs = this.labelPrintReportsService.isBinExists(this.toBin).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data != null) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data[0].Result == "0") {
                    _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                    _this.toBin = "";
                    return;
                }
                _this.toBin = data[0].ID; //check this code.
            }
            else {
                _this.toastr.error('', _this.translate.instant("INVALIDBIN"));
                _this.toBin = "";
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    BinLabelComponent.prototype.getValueOfRedirect = function ($event) {
    };
    BinLabelComponent.prototype.OnCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fromBinIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BinLabelComponent.prototype, "fromBinInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toBinIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BinLabelComponent.prototype, "toBinInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('numberOfCopiesIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BinLabelComponent.prototype, "noOfCopiesInput", void 0);
    BinLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bin-label',
            template: __webpack_require__(/*! ./bin-label.component.html */ "./src/app/printing-label/bin-label/bin-label.component.html"),
            styles: [__webpack_require__(/*! ./bin-label.component.scss */ "./src/app/printing-label/bin-label/bin-label.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_6__["LabelPrintReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], BinLabelComponent);
    return BinLabelComponent;
}());



/***/ }),

/***/ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"opti_input-group-form form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n\r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                {{'InventoryEnquiry'|translate}}\r\n            </h3>\r\n\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n                    <div class=\"opti_input-group-radio border-0 px-0\">\r\n                        <input type=\"radio\" name=\"group\" (change)=\"handleCheckChange($event)\" id=\"InventoryEnquiryOptions1\" class=\"k-radio\" checked />\r\n                        <label class=\"k-radio-label\" for=\"InventoryEnquiryOptions1\">{{'BatchSerial'|translate}}</label>\r\n\r\n                        <input type=\"radio\" name=\"group\"  (change)=\"handleCheckChange($event)\"id=\"InventoryEnquiryOptions2\" class=\"k-radio\" />\r\n                        <label class=\"k-radio-label\" for=\"InventoryEnquiryOptions2\">{{'ItemSummary'|translate}}</label>\r\n\r\n                        <input type=\"radio\" name=\"group\"  (change)=\"handleCheckChange($event)\" class=\"k-radio\" id=\"InventoryEnquiryOptions3\" />\r\n                        <label class=\"k-radio-label\" for=\"InventoryEnquiryOptions3\">{{'ItemDetail'|translate}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"batchSerial\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BatchSrBinNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <input type=\"text\" id=\"invEnqBatchNoScanInput\" class=\"form-control form-control-sm\" \r\n                                [(ngModel)]=\"lotNo\" (blur)=\"OnLotsChange()\"\r\n                                    name='batchSrNo' placeholder=\"{{'BatchSrBinNo'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" (click)=\"OnBatchSerialLookupClick()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button id=\"printBatchSerialscanButton\" (click)=\"onBatchSerialScan()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\"\r\n                                        type=\"button\">\r\n                                        <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" id=\"invEnqItemNoScanInput1\" [disabled]=\"disableItemCode\" [(ngModel)]=\"itemCode\" (blur)=\"OnItemCodeChange()\"\r\n                             class=\"form-control form-control-sm\" *ngIf=\"batchSerial\"\r\n                                name='itemCode' placeholder=\"{{'ItemCode'|translate}}\" >\r\n                            <div class=\"input-group input-group-sm\" id=\"inboundItemNoScanInput\" *ngIf=\"itemSummary || itemDetail\">\r\n                                <input type=\"text\" id=\"invEnqItemNoScanInput2\" [disabled]=\"disableItemCode\" [(ngModel)]=\"itemCode\" \r\n                                class=\"form-control form-control-sm\"  (blur)=\"OnItemCodeChange()\"\r\n                                    name='itemCode' placeholder=\"{{'ItemCode'|translate}}\">\r\n                                <div class=\"input-group-append has-seprate-btn\">\r\n                                    <button class=\"k-button k-primary btn\" (click)=\"OnItemCodeLookupClick()\" type=\"button\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                    <button id=\"printItemscanButton\" (click)=\"onItemScan()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\"\r\n                                        type=\"button\">\r\n                                        <i class=\"opti-icon-qr-code fs-24\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'Description'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                                \r\n                            <input type=\"text\" [disabled]=\"disableDescription\" [(ngModel)]=\"itemNameLabel\" class=\"form-control form-control-sm\"\r\n                                name='descriptionCode' placeholder=\"{{'Description'|translate}}\">\r\n                                \r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"showQuantityGrid\">\r\n                <!-- Kendo Table Grid Row start -->\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12\">\r\n                        <kendo-grid class=\"no-shadow\" [kendoGridBinding]=\"quantityGridData\" [resizable]=\"true\" [pageSize]=\"pageSize\"\r\n                             [pageable]=\"pagable\" [sortable]=\"true\" [filterable]=isColumnFilter [groupable]=isColumnGroup\r\n                            [height]=gridHeight [selectable]=\"true\" #gridItem>\r\n\r\n                            <!-- grid for mobile start -->\r\n                            <kendo-grid-column media=\"(max-width: 767px)\" title=\"Payment List\" class=\"opti_mobile-grid-td\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt *ngIf=\"!nonTracked\">{{'LotNo'|translate}}</dt>\r\n                                        <dd>{{ dataItem.LOTNO }}</dd>\r\n\r\n                                        <dt>{{'BinNo'|translate}}</dt>\r\n                                        <dd>{{ dataItem.BINNO }}</dd>\r\n                                    </dl>\r\n                                    <dl class=\"opti_mobile_grid_dl\">\r\n                                        <dt>{{'StockQty'|translate}}</dt>\r\n                                        <dd>{{ dataItem.TOTALQTY }}</dd>\r\n                                    </dl>\r\n                                </ng-template>\r\n                            </kendo-grid-column>\r\n                            <!-- grid for mobile end -->\r\n\r\n                            <kendo-grid-column *ngIf=\"!nonTracked\" media=\"(min-width: 768px)\" field=\"LOTNO\" title=\"{{'LotNo'|translate}}\" [width]=\"6\"></kendo-grid-column>\r\n                            <kendo-grid-column field=\"BINNO\" media=\"(min-width: 768px)\" [width]=\"6\" title=\"{{'BinNo'|translate}}\"></kendo-grid-column>\r\n                            <kendo-grid-column field=\"TOTALQTY\" media=\"(min-width: 768px)\" headerClass=\"text-right\" title=\"{{'StockQty'|translate}}\"  class=\"text-right\" [width]=\"6\">\r\n                                <ng-template kendoGridCellTemplate let-dataItem>\r\n                                    {{ dataItem.TOTALQTY | numberFormat }}\r\n                                </ng-template></kendo-grid-column>\r\n\r\n\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n                <!-- Kendo Table Grid Row end -->\r\n\r\n                <div class=\"row mt-2 justify-content-end\">\r\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-4\">\r\n\r\n                        <div class=\"form-group row justify-content-end\">\r\n                            <label for=\"inputPassword\" class=\"col-form-label col-4 col-sm-4 text-right pr-0\">{{'Total'|translate}}</label>\r\n                            <div class=\"col-sm-8 col-8\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm text-right\" disabled [(ngModel)]=\"totalSum\" name='totalValue'\r\n                                    placeholder=\"{{'Total'|translate}}\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <!-- <button type=\"button\"  (click)=\"OnPrintClick()\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-printer\"\r\n                role=\"presentation\"></span> {{'Print'|translate}}</button> -->\r\n                <button type=\"button\" (click)=\"OnCancelClick()\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span class=\"k-icon k-i-close-outline\"\r\n                        role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n                <button type=\"button\" id=\"inventoryBatchHiddenScanButton\" style=\"visibility:hidden\" \r\n                (click)=\"onHiddenScanBatchClick()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                   SB </button>\r\n\r\n                <button type=\"button\" id=\"inventoryItemHiddenScanButton\" style=\"visibility:hidden\" \r\n                (click)=\"onHiddenScanItemClick()\" class=\"btn btn-light k-button btn-sm btn-transparent btn-icon separate-btn p-0\">\r\n                      SB </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div *ngIf=\"showLookupLoader == false\"> \r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</div>\r\n\r\n<div class=\"opti_loader full-section\"  *ngIf=\"showLoader\" >\r\n    <div class=\"opti_spinner\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLWxhYmVsL2ludmVudG9yeS1lbnF1aXJ5L2ludmVudG9yeS1lbnF1aXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InventoryEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryEnquiryComponent", function() { return InventoryEnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/label-print-reports.service */ "./src/app/services/label-print-reports.service.ts");







var InventoryEnquiryComponent = /** @class */ (function () {
    function InventoryEnquiryComponent(renderer, commonservice, router, labelPrintReportsService, toastr, translate) {
        this.renderer = renderer;
        this.commonservice = commonservice;
        this.router = router;
        this.labelPrintReportsService = labelPrintReportsService;
        this.toastr = toastr;
        this.translate = translate;
        this.itemCode = "";
        this.lotNo = "";
        this.itemName = "";
        this.itemNameLabel = "";
        this.binNo = "";
        this.type = "";
        this.nonTracked = false;
        this.pagable = false;
        this.showLoader = false;
        this.showLookupLoader = true;
        this.disableDescription = false;
        this.disableItemCode = false;
        this.batchSerial = true;
        this.itemSummary = false;
        this.itemDetail = false;
        this.showQuantityGrid = false;
        this.isFromLotChange = false;
        this.isFromItemChange = false;
        this.totalSum = 0;
        //pageSize: number = Commonservice.pageSize;
        this.pageSize = 10;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    InventoryEnquiryComponent.prototype.ngOnInit = function () {
        console.log("PageSize:", this.pageSize);
        this.initialize();
    };
    InventoryEnquiryComponent.prototype.initialize = function () {
        this.batchSerial = true;
        this.itemSummary = false;
        this.itemDetail = false;
        this.disableDescription = true;
        this.disableItemCode = true;
    };
    InventoryEnquiryComponent.prototype.handleCheckChange = function ($event) {
        this.resetGridOnRadioChange();
        switch ($event.target.id) {
            case ("InventoryEnquiryOptions1"):
                this.initialize();
                break;
            case ("InventoryEnquiryOptions2"):
                this.batchSerial = false;
                this.itemSummary = true;
                this.itemDetail = false;
                this.disableDescription = true;
                this.disableItemCode = false;
                break;
            case ("InventoryEnquiryOptions3"):
                this.batchSerial = false;
                this.itemSummary = false;
                this.itemDetail = true;
                this.disableDescription = true;
                this.disableItemCode = false;
                break;
        }
    };
    InventoryEnquiryComponent.prototype.onBatchSerialScan = function () {
    };
    InventoryEnquiryComponent.prototype.onItemScan = function () {
    };
    /**
     * item code lookup click.
     */
    InventoryEnquiryComponent.prototype.OnItemCodeLookupClick = function () {
        this.getItemList();
    };
    /**
     * Batch serial lookup click.
     */
    InventoryEnquiryComponent.prototype.OnBatchSerialLookupClick = function () {
        this.showLotsList();
    };
    /**
    * Method to get list of inquries from server.
    */
    InventoryEnquiryComponent.prototype.showLotsList = function () {
        var _this = this;
        this.showLoader = true;
        this.lotsListSubs = this.labelPrintReportsService.getLotsList("").subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data;
                _this.lookupfor = "LotsList";
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
    * This method will check if entered code is valid or not on field blur event.
    */
    InventoryEnquiryComponent.prototype.OnLotsChange = function () {
        console.log("onLostsChange:");
        if (this.lotNo == undefined || this.lotNo == "") {
            return;
        }
        this.isFromLotChange = true;
        this.checkBinForOtherTrackedItems();
    };
    InventoryEnquiryComponent.prototype.checkBinForOtherTrackedItems = function () {
        var _this = this;
        this.showLoader = true;
        this.lotScanListWithoutWhseBinSubs = this.labelPrintReportsService.getLotScanListWithoutWhseBinAndItemWise(this.itemCode, this.lotNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                    _this.lotNo = "";
                    return;
                }
                _this.lotNo = data[0].LOTNO; //check this code.
                _this.GetItemOrBatchDetail();
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                _this.lotNo = "";
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
            _this.lotNo = "";
        });
    };
    /**
     * @param $event this will return the value on row click of lookup grid.
     */
    InventoryEnquiryComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "LotsList") {
            //this.lotNo = $event[0];
            this.isFromLotChange = false; // reset this variable for batch value is not from on change.
            //this.itemCode = $event[2];
            this.itemCode = "";
            this.binNo = $event[3];
            this.itemNameLabel = $event[8];
            this.itemName = ""; //in case of  item code send itemName = ""
            this.type = $event[9];
            if (this.type == "N") {
                this.lotNo = this.binNo;
                this.nonTracked = true;
            }
            else {
                this.lotNo = $event[0];
                this.nonTracked = false;
            }
            if (this.lotNo != "")
                this.GetItemOrBatchDetail();
        }
        if (this.lookupfor == "ItemsList") {
            this.isFromItemChange = false; // reset this variable for batch value is not from on change.
            console.log("value of lots" + $event);
            this.lotNo = ""; //in case of  item code send lotNo = ""
            this.itemCode = $event[0];
            this.itemNameLabel = $event[1];
            if (this.itemSummary == true) {
                this.itemName = "summary";
                this.nonTracked = true;
            }
            else {
                this.type = $event[2];
                this.itemName = "";
                if (this.type == "N") {
                    this.nonTracked = true;
                }
                else {
                    this.nonTracked = false;
                }
            }
            // we do not need to show lot no. column in case of item summery.
            if (this.itemCode != "")
                this.GetItemOrBatchDetail();
        }
    };
    /**
     * this method will get result enquiry grid data.
     */
    InventoryEnquiryComponent.prototype.GetItemOrBatchDetail = function () {
        var _this = this;
        this.getItemOrBatchDetailSubs = this.labelPrintReportsService.GetItemOrBatchDetail(this.itemCode, this.lotNo, this.itemName).subscribe(function (data) {
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showQuantityGrid = true;
                _this.quantityGridData = data;
                if (_this.quantityGridData.length > _this.pageSize) {
                    _this.pagable = true;
                }
                else {
                    _this.pagable = false;
                }
                _this.getTotalSum(data);
                //case when value comes from on input text change then set value to desable input labels
                if (_this.isFromLotChange == true) {
                    _this.itemCode = data[0].ITEMCODE;
                    _this.lotNo = data[0].LOTNO;
                    _this.binNo = data[0].BINNO;
                    _this.itemNameLabel = data[0].itemCode;
                    _this.isFromLotChange = false;
                }
                if (_this.isFromItemChange == true) {
                    _this.itemNameLabel = data[0].ItemName;
                    _this.isFromItemChange = false;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
                    return;
                }
            }
            else {
                _this.pagable = false;
                _this.quantityGridData = [];
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.pagable = false;
            _this.quantityGridData = [];
            _this.toastr.error('', error);
        });
    };
    /**
     * method used to calculate total qty sum.
     * @param data collection of data
     */
    InventoryEnquiryComponent.prototype.getTotalSum = function (data) {
        this.totalSum = 0;
        if (data != undefined && data != null && data.length > 0) {
            var num = 0;
            for (num = 0; num < data.length; num++) {
                this.totalSum = this.totalSum + data[num].TOTALQTY;
            }
        }
    };
    /**
     * this method will reset all variables on initialze the radio change property.
     */
    InventoryEnquiryComponent.prototype.resetGridOnRadioChange = function () {
        //reset grid hide show variables, grid data vaiables other api passing parameters.
        this.showQuantityGrid = false;
        this.quantityGridData = null;
        this.itemCode = "";
        this.binNo = "";
        this.itemName = "";
        this.type = "";
        this.itemNameLabel = "";
        this.isFromLotChange = false;
        this.isFromItemChange = false;
    };
    // item section.
    /**
    * Method to get list of inquries from server.
    */
    InventoryEnquiryComponent.prototype.getItemList = function () {
        var _this = this;
        this.showLoader = true; //this.getPIlistSubs = 
        this.itemLabelSubs = this.labelPrintReportsService.getItemCode().subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
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
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    /**
     * This method will be invoked when scan from mobile version of app device.
     */
    InventoryEnquiryComponent.prototype.onHiddenScanBatchClick = function () {
        var inputValue = document.getElementById('invEnqBatchNoScanInput').value;
        if (inputValue.length > 0) {
            this.lotNo = inputValue;
        }
        // alert("scan lotNo result:"+this.lotNo)
        console.log("onLostsChange:");
        if (this.lotNo == undefined || this.lotNo == "") {
            return;
        }
        this.isFromLotChange = true;
        this.checkBinForOtherTrackedItems();
    };
    /**
     * This method will be invoked when scan from mobile version of app device.
     */
    InventoryEnquiryComponent.prototype.onHiddenScanItemClick = function () {
        var inputValue = document.getElementById('invEnqItemNoScanInput2').value;
        if (inputValue.length > 0) {
            this.itemCode = inputValue;
        }
        // alert("scan item result:"+this.itemCode)
        this.OnItemCodeChange();
    };
    InventoryEnquiryComponent.prototype.ngOnDestroy = function () {
        if (this.itemLabelSubs != undefined)
            this.itemLabelSubs.unsubscribe();
        if (this.getItemOrBatchDetailSubs != undefined)
            this.getItemOrBatchDetailSubs.unsubscribe();
        if (this.lotScanListWithoutWhseBinSubs != undefined)
            this.lotScanListWithoutWhseBinSubs.unsubscribe();
        if (this.lotsListSubs != undefined)
            this.lotsListSubs.unsubscribe();
        if (this.isItemExistsSubs != undefined)
            this.isItemExistsSubs.unsubscribe();
        if (this.itemTrackingSubs != undefined)
            this.itemTrackingSubs.unsubscribe();
    };
    /**
     *
     * This method will check if entered code is valid or not on field blur event.
     */
    InventoryEnquiryComponent.prototype.OnItemCodeChange = function () {
        var _this = this;
        if (this.itemCode == "" || this.itemCode == undefined) {
            //this.itemTracking = "";
            return;
        }
        this.showLoader = true;
        this.isFromItemChange = true;
        this.isItemExistsSubs = this.labelPrintReportsService.isItemExists(this.itemCode).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                    _this.itemCode = "";
                    return;
                }
                else {
                    //do the needful for correct data.
                    _this.getItemTracking(_this.itemCode); //no need of tracking here.
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                _this.itemCode = "";
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    /**
     * get  type (tracking) of item if not available.
     * @param itemCode
     */
    InventoryEnquiryComponent.prototype.getItemTracking = function (itemCode) {
        var _this = this;
        this.itemTrackingSubs = this.labelPrintReportsService.getItemTracking(itemCode).subscribe(function (data) {
            if (data != undefined && data.length > 0 && data != "0") {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    return;
                }
                _this.type = data;
                if (_this.itemSummary == true) {
                    _this.itemName = "summary";
                    _this.nonTracked = true;
                }
                else {
                    _this.itemName = "";
                    if (_this.type == "N") {
                        _this.nonTracked = true;
                    }
                    else {
                        _this.nonTracked = false;
                    }
                }
                if (_this.itemCode != "")
                    _this.GetItemOrBatchDetail();
            }
            else {
                //  this.toastr.error('', this.translate.instant("InvalidItemCode"));
                _this.itemCode = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    InventoryEnquiryComponent.prototype.OnCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    InventoryEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-enquiry',
            template: __webpack_require__(/*! ./inventory-enquiry.component.html */ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./inventory-enquiry.component.scss */ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_6__["LabelPrintReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], InventoryEnquiryComponent);
    return InventoryEnquiryComponent;
}());



/***/ }),

/***/ "./src/app/printing-label/item-label/item-label.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/printing-label/item-label/item-label.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opti_container position-relative bg-white rounded\">\r\n    <form class=\"form-with-fix-btnBar\">\r\n        <div class=\"opti_container_inner\" [perfectScrollbar]=\" \">\r\n              \r\n            <h3 class=\"border-bottom d-flex pt-1 pb-3 mb-4\">\r\n                    {{'itemLabelReport'|translate}}\r\n            </h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'ItemCode'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name='customerCode' [(ngModel)]=\"itemCode\"\r\n                                    (blur)=\"OnItemCodeChange()\" #itemCodeIp placeholder=\"{{'ItemCode'|translate}}\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"OnItemCodeLookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'BatchSrBinNo'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group input-group-sm\">\r\n\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" #batchSrBinIp name='binNoInput'\r\n                                    placeholder=\"{{'BatchSrBinNo'|translate}}\" [(ngModel)]=\"binNo\" (blur)=\"OnLotsChange()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"k-button k-primary btn\" type=\"button\" (click)=\"OnBatchSerialLookupClick()\">\r\n                                        <i class=\"opti-icon-hammenu\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">{{'noOfCopies'|translate}}</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" #noOfCopiesIp [(ngModel)]=\"noOfCopies\"\r\n                                name='noOfCopies' placeholder=\"{{'noOfCopies'|translate}}\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"fix-footer-btnBar\">\r\n            <div class=\"col-sm-12 col-12\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-sm-12 col-12\">\r\n                <button type=\"button\" class=\"btn btn-success k-button btn-sm btn-icon-with-text\" (click)=\"OnPrintClick()\"><span\r\n                        class=\"k-icon k-i-printer\" role=\"presentation\"></span> {{'Print'|translate}}</button>\r\n                <button type=\"button\" (click)=\"OnCancelClick()\" class=\"btn btn-danger k-button btn-sm btn-icon-with-text\"><span\r\n                        class=\"k-icon k-i-close-outline\" role=\"presentation\"></span> {{'Cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"showLookupLoader==false\">\r\n    <app-lookup [lookupfor]='lookupfor' [serviceData]='serviceData' (lookupvalue)=\"getLookupValue($event)\"></app-lookup>\r\n</div>\r\n\r\n<div>\r\n    <app-display-pdf *ngIf=\"displayPDF\" [base64String]='base64String' [fileName]='fileName' (pdfClose)=\"closePDF($event)\"></app-display-pdf>\r\n</div>\r\n\r\n<div class=\"opti_loader full-section\"  *ngIf=\"showLoader\" >\r\n    <div class=\"opti_spinner\"></div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/printing-label/item-label/item-label.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/printing-label/item-label/item-label.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLWxhYmVsL2l0ZW0tbGFiZWwvaXRlbS1sYWJlbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/printing-label/item-label/item-label.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/printing-label/item-label/item-label.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemLabelComponent", function() { return ItemLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/label-print-reports.service */ "./src/app/services/label-print-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
//===============================================================================
// © 2018 Optipro.  All rights reserved.
// Original Author: Ankur Sharma
// Original Date: 13 March 2019
//==============================================================================







var ItemLabelComponent = /** @class */ (function () {
    function ItemLabelComponent(renderer, commonservice, router, labelPrintReportsService, toastr, translate) {
        this.renderer = renderer;
        this.commonservice = commonservice;
        this.router = router;
        this.labelPrintReportsService = labelPrintReportsService;
        this.toastr = toastr;
        this.translate = translate;
        this.showLoader = false;
        this.showLookupLoader = true;
        this.itemCode = "";
        this.itemTracking = "";
        this.noOfCopies = "1";
        this.binNo = "";
        this.showPDF = false;
        this.fileName = "";
        this.base64String = "";
        this.displayPDF = false;
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
        translate.use(userLang);
        translate.onLangChange.subscribe(function (event) {
        });
    }
    ItemLabelComponent.prototype.ngOnInit = function () {
        this.getCopyCountForItem();
    };
    /**
     * Item code lookup click.
     */
    ItemLabelComponent.prototype.OnItemCodeLookupClick = function () {
        console.log('button click');
        // this.showLookupLoader = true;
        this.getItemList();
    };
    /**
     * Batch serial lookup click.
     */
    ItemLabelComponent.prototype.OnBatchSerialLookupClick = function () {
        this.showLotsList();
    };
    /**
     * Method to get list of inquries from server.
     */
    ItemLabelComponent.prototype.getItemList = function () {
        var _this = this;
        this.showLoader = true;
        //this.showLoader = true; this.getPIlistSubs = 
        this.itemLabelSubs = this.labelPrintReportsService.getItemCode().subscribe(function (data) {
            if (data != undefined && data.length > 0) {
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
            _this.showLoader = false;
        }, function (error) {
            _this.toastr.error('', error);
            _this.showLoader = false;
        });
    };
    /**
     *
     * This method will check if entered code is valid or not on field blur event.
     */
    ItemLabelComponent.prototype.OnItemCodeChange = function () {
        var _this = this;
        if (this.itemCode == "" || this.itemCode == undefined) {
            this.itemTracking = "";
            return;
        }
        this.binNo = "";
        this.showLoader = true;
        this.isItemExistsSubs = this.labelPrintReportsService.isItemExists(this.itemCode).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                    _this.itemCode = "";
                    return;
                }
                else {
                    //do the needful for correct data.
                    _this.batchSrBinIp.nativeElement.focus(); //just focus on next field
                    _this.getItemTracking(_this.itemCode);
                }
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidItemCode"));
                _this.itemCode = "";
            }
        }, function (error) {
            _this.showLoader = false;
            _this.toastr.error('', error);
        });
    };
    /**
     * This method will check if entered code is valid or not on field blur event.
     */
    ItemLabelComponent.prototype.OnLotsChange = function () {
        if (this.binNo == undefined || this.binNo == "") {
            return;
        }
        if (this.itemCode != undefined && this.itemCode != null && this.itemCode != "") {
            if (this.itemTracking == "N") {
                //item type is empty then get tracking type
                this.checkBinForNonTrackedItems();
            }
            else {
                this.checkBinForOtherTrackedItems();
            }
        }
        else {
            this.checkBinForOtherTrackedItems();
        }
    };
    /**
     * get  type (tracking) of item if not available.
     * @param itemCode
     */
    ItemLabelComponent.prototype.getItemTracking = function (itemCode) {
        var _this = this;
        this.itemTrackingSubs = this.labelPrintReportsService.getItemTracking(itemCode).subscribe(function (data) {
            if (data != undefined && data.length > 0 && data != "0") {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    return;
                }
                _this.itemTracking = data;
            }
            else {
                //  this.toastr.error('', this.translate.instant("InvalidItemCode"));
                _this.itemCode = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
        });
    };
    /**
     * @param $event this will return the value on row click of lookup grid.
     */
    ItemLabelComponent.prototype.getLookupValue = function ($event) {
        if (this.lookupfor == "ItemsList") {
            this.itemCode = $event[0];
            this.binNo = "";
        }
        else if (this.lookupfor == "LotsList") {
            console.log("value of lots" + $event);
            console.log("value of lots" + $event.LOTNO);
            this.binNo = $event[0];
            this.itemCode = $event[2];
        }
    };
    /**
     * Method to get list of inquries from server.
     */
    ItemLabelComponent.prototype.showLotsList = function () {
        var _this = this;
        this.showLoader = true;
        this.lotsListSubs = this.labelPrintReportsService.getLotsList(this.itemCode).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                _this.showLookupLoader = false;
                _this.serviceData = data;
                _this.lookupfor = "LotsList";
            }
            else {
                _this.toastr.error('', _this.translate.instant("CommonNoDataAvailableMsg"));
            }
        }, function (error) {
            _this.toastr.error('', error);
            _this.showLoader = false;
        });
    };
    ItemLabelComponent.prototype.checkBinForNonTrackedItems = function () {
        var _this = this;
        this.showLoader = true;
        this.checkBinForItemSubs = this.labelPrintReportsService.checkBinForItemLabelReport(this.itemCode, this.binNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                    _this.binNo = "";
                    return;
                }
                _this.binNo = data[0].BINNO; //check this code.
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                _this.binNo = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
            _this.binNo = "";
            _this.showLoader = false;
        });
    };
    ItemLabelComponent.prototype.checkBinForOtherTrackedItems = function () {
        var _this = this;
        this.showLoader = true;
        this.lotScanListWithoutWhseBinSubs = this.labelPrintReportsService.getLotScanListWithoutWhseBinAndItemWise(this.itemCode, this.binNo).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                    _this.binNo = "";
                    return;
                }
                _this.binNo = data[0].LOTNO; //check this code.
            }
            else {
                _this.toastr.error('', _this.translate.instant("InvalidBatch"));
                _this.binNo = "";
            }
        }, function (error) {
            _this.toastr.error('', error);
            _this.binNo = "";
            _this.showLoader = false;
        });
    };
    /**
     * this method will check no. of copy count value from server.
     */
    ItemLabelComponent.prototype.getCopyCountForItem = function () {
        var _this = this;
        this.copyCountSubs = this.labelPrintReportsService.getCopyCountForItemLabelReport().subscribe(function (data) {
            if (data != undefined && data.length > 0) {
                console.log("" + data);
                if (data[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data == "0" || data[0] == "0") {
                    _this.noOfCopies = "1";
                    return;
                }
                _this.noOfCopies = data;
            }
            else {
                _this.noOfCopies = "1";
            }
        }, function (error) {
            _this.toastr.error('', error);
            _this.noOfCopies = "1";
        });
    };
    /**
     * handel print click, validate data print data api call.
     */
    ItemLabelComponent.prototype.OnPrintClick = function () {
        var _this = this;
        console.log('print click');
        if (!this.checkValidation()) {
            return;
        }
        this.showLoader = true;
        this.printServiceSubs = this.labelPrintReportsService.printingServiceForItemLabel(this.itemCode, this.binNo, this.noOfCopies).subscribe(function (data) {
            _this.showLoader = false;
            if (data != undefined) {
                console.log("" + data);
                if (data.LICDATA != undefined && data.LICDATA[0].ErrorMsg == "7001") {
                    _this.commonservice.RemoveLicenseAndSignout(_this.toastr, _this.router, _this.translate.instant("CommonSessionExpireMsg"));
                    return;
                }
                if (data.Detail != null && data.Detail != undefined && data.Detail[0] != null
                    && data.Detail[0] != undefined) {
                    _this.fileName = data.Detail[0].FileName;
                    _this.base64String = data.Detail[0].Base64String;
                }
                // if(this.base64String !=null && this.base64String != ""){
                // this.showPdf();
                // }
                if (_this.base64String != null && _this.base64String != "") {
                    // this.showPdf(); // this function is used to display pdf in new tab.
                    _this.base64String = 'data:application/pdf;base64,' + _this.base64String;
                    _this.displayPDF = true;
                    _this.commonservice.refreshDisplyPDF(true);
                }
                else {
                    _this.toastr.error('', _this.translate.instant("CommonSomeErrorMsg"));
                }
                console.log("filename:" + _this.fileName);
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
    /**
     * show pdf
     * @param base64
     */
    ItemLabelComponent.prototype.showPdf = function () {
        this.base64String = 'data:application/pdf;base64,' + this.base64String; //aeded type: application/pdf for pdf file
        this.showPDF = true;
        var pdfWindow = window.open("");
        pdfWindow.document.write("<iframe width='80%' title=" + this.fileName + " height='80%' src=' " + encodeURI(this.base64String) + "'></iframe>");
    };
    /**
     * this method will validate all input fields.
     */
    ItemLabelComponent.prototype.checkValidation = function () {
        if (this.itemCode == "") {
            this.toastr.error('', this.translate.instant("ItemCannotbeBlank"));
            this.itemCodeIp.nativeElement.focus();
            return false;
        }
        if (this.binNo == "") {
            this.toastr.error('', this.translate.instant("Lotcannotbeblank"));
            this.batchSrBinIp.nativeElement.focus();
            return false;
        }
        if (this.noOfCopies == "") {
            this.toastr.error('', this.translate.instant("NoOfCopiesCannotbeBlank"));
            this.noOfCopiesIp.nativeElement.focus();
            return false;
        }
        return true;
    };
    ItemLabelComponent.prototype.ngOnDestroy = function () {
        if (this.batchLabelSubs != undefined)
            this.batchLabelSubs.unsubscribe();
        if (this.checkBinForItemSubs != undefined)
            this.checkBinForItemSubs.unsubscribe();
        if (this.copyCountSubs != undefined)
            this.copyCountSubs.unsubscribe();
        if (this.isItemExistsSubs != undefined)
            this.isItemExistsSubs.unsubscribe();
        if (this.itemLabelSubs != undefined)
            this.itemLabelSubs.unsubscribe();
        if (this.itemTrackingSubs != undefined)
            this.itemTrackingSubs.unsubscribe();
        if (this.lotScanListWithoutWhseBinSubs != undefined)
            this.lotScanListWithoutWhseBinSubs.unsubscribe();
        if (this.lotsListSubs != undefined)
            this.lotsListSubs.unsubscribe();
        if (this.printServiceSubs != undefined)
            this.printServiceSubs.unsubscribe();
    };
    ItemLabelComponent.prototype.closePDF = function () {
        console.log("PDF dialog is closed");
    };
    ItemLabelComponent.prototype.OnCancelClick = function () {
        this.router.navigate(['home/dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemCodeIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ItemLabelComponent.prototype, "itemCodeIp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('batchSrBinIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ItemLabelComponent.prototype, "batchSrBinIp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noOfCopiesIp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ItemLabelComponent.prototype, "noOfCopiesIp", void 0);
    ItemLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-label',
            template: __webpack_require__(/*! ./item-label.component.html */ "./src/app/printing-label/item-label/item-label.component.html"),
            styles: [__webpack_require__(/*! ./item-label.component.scss */ "./src/app/printing-label/item-label/item-label.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__["Commonservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_label_print_reports_service__WEBPACK_IMPORTED_MODULE_2__["LabelPrintReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ItemLabelComponent);
    return ItemLabelComponent;
}());



/***/ }),

/***/ "./src/app/printing-label/printing-label-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/printing-label/printing-label-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PrintingLabelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingLabelRoutingModule", function() { return PrintingLabelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bin_label_bin_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bin-label/bin-label.component */ "./src/app/printing-label/bin-label/bin-label.component.ts");
/* harmony import */ var _inventory_enquiry_inventory_enquiry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-enquiry/inventory-enquiry.component */ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.ts");
/* harmony import */ var _item_label_item_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-label/item-label.component */ "./src/app/printing-label/item-label/item-label.component.ts");






var routes = [
    { path: '', component: _item_label_item_label_component__WEBPACK_IMPORTED_MODULE_5__["ItemLabelComponent"] },
    { path: 'item-label', component: _item_label_item_label_component__WEBPACK_IMPORTED_MODULE_5__["ItemLabelComponent"] },
    { path: 'bin-label', component: _bin_label_bin_label_component__WEBPACK_IMPORTED_MODULE_3__["BinLabelComponent"] },
    { path: 'inventory-enquiry', component: _inventory_enquiry_inventory_enquiry_component__WEBPACK_IMPORTED_MODULE_4__["InventoryEnquiryComponent"] },
];
var PrintingLabelRoutingModule = /** @class */ (function () {
    function PrintingLabelRoutingModule() {
    }
    PrintingLabelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PrintingLabelRoutingModule);
    return PrintingLabelRoutingModule;
}());



/***/ }),

/***/ "./src/app/printing-label/printing-label.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/printing-label/printing-label.module.ts ***!
  \*********************************************************/
/*! exports provided: PrintingLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingLabelModule", function() { return PrintingLabelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _printing_label_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printing-label-routing.module */ "./src/app/printing-label/printing-label-routing.module.ts");
/* harmony import */ var _item_label_item_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-label/item-label.component */ "./src/app/printing-label/item-label/item-label.component.ts");
/* harmony import */ var _bin_label_bin_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bin-label/bin-label.component */ "./src/app/printing-label/bin-label/bin-label.component.ts");
/* harmony import */ var _inventory_enquiry_inventory_enquiry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-enquiry/inventory-enquiry.component */ "./src/app/printing-label/inventory-enquiry/inventory-enquiry.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _translate_lazy_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../translate-lazy.module */ "./src/translate-lazy.module.ts");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");











//import { DisplayPdfComponent } from './display-pdf/display-pdf.component';
//import { PdfpipePipe } from './pdfpipe.pipe';


var PrintingLabelModule = /** @class */ (function () {
    function PrintingLabelModule() {
    }
    PrintingLabelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _translate_lazy_module__WEBPACK_IMPORTED_MODULE_8__["TrnaslateLazyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _printing_label_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrintingLabelRoutingModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"]
            ],
            declarations: [_item_label_item_label_component__WEBPACK_IMPORTED_MODULE_4__["ItemLabelComponent"], _bin_label_bin_label_component__WEBPACK_IMPORTED_MODULE_5__["BinLabelComponent"], _inventory_enquiry_inventory_enquiry_component__WEBPACK_IMPORTED_MODULE_6__["InventoryEnquiryComponent"],
            ],
            entryComponents: [],
            exports: []
        })
    ], PrintingLabelModule);
    return PrintingLabelModule;
}());



/***/ }),

/***/ "./src/app/services/label-print-reports.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/label-print-reports.service.ts ***!
  \*********************************************************/
/*! exports provided: LabelPrintReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPrintReportsService", function() { return LabelPrintReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
//===============================================================================
// © 2018 Optipro.  All rights reserved.
// Original Author: Ankur Sharma
// Original Date: 13 March 2019
//==============================================================================



var LabelPrintReportsService = /** @class */ (function () {
    function LabelPrintReportsService(httpclient) {
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
    LabelPrintReportsService.prototype.getItemCode = function () {
        //var jObject = { COMPANYDBNAME: companyDBObject.CompanyDbName };
        var jObject = { CompanyDBName: localStorage.getItem("CompID") };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsReceipt/AllItemLookup", jObject, this.httpOptions);
    };
    /**
     * check item is exists or not.
     * @param item
     */
    LabelPrintReportsService.prototype.isItemExists = function (item) {
        var jObject = { ITEMCODE: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), ItemCode: item }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsReceipt/IsItemExists", jObject, this.httpOptions);
    };
    /**
     * get tracking type for the item.
     * @param item
     */
    LabelPrintReportsService.prototype.getItemTracking = function (item) {
        var jObject = { ITEMCODE: JSON.stringify([{ COMPANYDBNAME: localStorage.getItem("CompID"), ItemCode: item }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsReceipt/GetItemTracking", jObject, this.httpOptions);
    };
    ///api/LabelPrint/GetAllLotsForItemLabelReport
    /**
     * get list for batch, serial, bin list (lots list).
     * @param item
     */
    LabelPrintReportsService.prototype.getLotsList = function (item) {
        var jObject = { LabelPrintToken: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: item, WhsCode: localStorage.getItem("whseId"), ALLBINS: true, LOTISSUEMETHOD: '1', SUPPORTTRX: '15' }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/LabelPrint/GetAllLotsForItemLabelReport", jObject, this.httpOptions);
    };
    /**
     * check bin for non tracked items.
     * @param item selected or entered item.
     * @param binNo selected or entered bin no.
     */
    LabelPrintReportsService.prototype.checkBinForItemLabelReport = function (item, binNo) {
        //var jObject = null;
        var jObject = { LabelPrintToken: JSON.stringify([{ BINNO: binNo, CompanyDBId: localStorage.getItem("CompID"), ItemCode: item, WhsCode: '', ALLBINS: true, LOTISSUEMETHOD: '1', SUPPORTTRX: '15' }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/LabelPrint/CheckBinForItemLabelReport", jObject, this.httpOptions);
    };
    /**
     * get lot scan list.
     * @param item
     * @param binNo
     */
    LabelPrintReportsService.prototype.getLotScanListWithoutWhseBinAndItemWise = function (item, binNo) {
        var jObject = { DeliveryToken: JSON.stringify([{ LOTNO: binNo, CompanyDBId: localStorage.getItem("CompID"), ITEMCODE: item, WhsCode: '', ALLBINS: true, LOTISSUEMETHOD: '1', SUPPORTTRX: '15' }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Delivery/GetLotScanListWithoutWhseBinAndItemWise", jObject, this.httpOptions);
    };
    /**
     * get the value for no. of copies for print.
     */
    LabelPrintReportsService.prototype.getCopyCountForItemLabelReport = function () {
        var jObject = { Print: JSON.stringify([{ USERID: localStorage.getItem("UserId"), COMPANYDBNAME: localStorage.getItem("CompID"), RPTID: "Item Label Report" }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/GetCopyCount", jObject, this.httpOptions);
    };
    /**
     * This API method will return base64 string for pdf format for print.
     * @param item
     * @param binNo
     * @param noOfCopies
     */
    LabelPrintReportsService.prototype.printingServiceForItemLabel = function (item, binNo, noOfCopies) {
        var jObject = { PrintingObject: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"),
                    USERID: localStorage.getItem("UserId"), ITEMCODE: item, LOTNO: binNo,
                    RPTID: 1, NOOFLABELS: noOfCopies, WHSCODE: localStorage.getItem("whseId"),
                    GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/WMSPrintingService", jObject, this.httpOptions);
    };
    /**
    * get list for batch, serial, bin list (lots list).
    * @param item
    */
    LabelPrintReportsService.prototype.getFromBinsList = function () {
        //var jObject = null;
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: localStorage.getItem("whseId"),
                    ALLBINS: true, GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetBins", jObject, this.httpOptions);
    };
    /**
     * get list for batch, serial, bin list (lots list).
     * @param item
     */
    LabelPrintReportsService.prototype.getToBinsList = function () {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: localStorage.getItem("whseId"),
                    ALLBINS: true, GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), ItemCode: '', WhsCode: localStorage.getItem("whseId"),
                    ALLBINS: true, GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/GetBins", jObject, this.httpOptions);
    };
    /**
      * get the value for no. of copies for print.
      */
    LabelPrintReportsService.prototype.getCopyCountForBinLabelReport = function () {
        var jObject = { Print: JSON.stringify([{ USERID: localStorage.getItem("UserId"), COMPANYDBNAME: localStorage.getItem("CompID"), RPTID: "Bin Label Report" }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/GetCopyCount", jObject, this.httpOptions);
    };
    /**
     * This API method will return base64 string for pdf format for print.
     * @param item
     * @param binNo
     * @param noOfCopies
     */
    LabelPrintReportsService.prototype.printingServiceForBinLabel = function (fromBin, toBin, noOfCopies) {
        var jObject = { PrintingObject: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), USERID: localStorage.getItem("UserId"),
                    BINFROM: fromBin, BINTO: toBin, RPTID: 2, NOOFLABELS: noOfCopies,
                    GUID: localStorage.getItem("GUID"), UsernameForLic: localStorage.getItem("UserId") }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/Printing/WMSPrintingService", jObject, this.httpOptions);
    };
    /**
    * check bin is exists or not.
    * @param item
    */
    LabelPrintReportsService.prototype.isBinExists = function (bin) {
        var jObject = { WhsCode: JSON.stringify([{ CompanyDBId: localStorage.getItem("CompID"), BinCode: bin,
                    ItemCode: '', WhsCode: localStorage.getItem("whseId"), ALLBINS: true }]) };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodReceiptPO/IsBinExist", jObject, this.httpOptions);
    };
    /**
     * get the value for no. of copies for print.
     */
    LabelPrintReportsService.prototype.GetItemOrBatchDetail = function (item, lot, itemName) {
        var jObject = {
            ITEMCODE: JSON.stringify([{
                    COMPANYDBNAME: localStorage.getItem("CompID"), WHSCODE: localStorage.getItem("whseId"),
                    ItemCode: item, LotNo: lot, ItemName: itemName
                }])
        };
        return this.httpclient.post(this.config_params.service_url + "/api/GoodsReceipt/GetItemOrBatchDetail", jObject, this.httpOptions);
    };
    LabelPrintReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LabelPrintReportsService);
    return LabelPrintReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=printing-label-printing-label-module.js.map