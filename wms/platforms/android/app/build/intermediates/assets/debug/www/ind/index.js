/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
         //alert('device ready');
      //  document.getElementById("scBtn").addEventListener("click", this.scanBarCode);
     //   document.getElementById("scBtn").addEventListener("click", this.scanBarCode("userEmail"));
      //  document.getElementById("btnScan").addEventListener("click", this.scanBarCode("userEmail"));
       //
        this.receivedEvent('deviceready');
      //  document.getElementById("scBtn").removeEventListener("click",  this.scanBarCode("userEmail"));
    },
    scanBarCode: function(inputRef,buttonRef) {
     //   this.receivedEvent('deviceready');
      // alert("I am an alert box2!");
     cordova.plugins.barcodeScanner.scan(
        function (result) {
        /*alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);*/ //dono # k saath hi pass karna hai.
                  document.getElementById(inputRef).value = result.text;
                   $(document).find(buttonRef).trigger("click");


                    //  $("#inboundScanInputField").blur();
                  // we can set value like this on input field after reading value from barcode.
                  //   document.getElementById('input_field').value = result.text;
                  //setScanResultToField(expression1)
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            orientation:false,
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : false, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417,DATA_MATRIX,UPC_E,UPC_A,EAN_8,EAN_13,CODE_128,CODE_39,CODE_93,CODABAR,ITF,RSS14,RSS_EXPANDED", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true // iOS
        }
     );
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    setScanResultToField: function(id) {
       switch(id){
           case "scanWorkOrder":
           alert("hello scanWorkOrder");
           document.getElementById('psWONOid').value = result.text;
           break;
           default:
           alert("default case run");
           break;
       }
    }
};

app.initialize();