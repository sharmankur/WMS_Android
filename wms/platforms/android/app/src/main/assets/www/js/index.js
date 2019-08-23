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


    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
         // alert("device ready");
         /*setTimeout(function(){
                window.location.href = 'BaseStructureERP/index.html';
            }, 2000);*/
       document.getElementById("popupDialog").addEventListener("click", this.dialogPrompt);
  /*     document.getElementById("showToast").addEventListener("click", this.showToastMessage);*/
       this.readFile();
       this.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        var receivedElement = parentElement.querySelector('.received');
       // listeningElement.setAttribute('style', 'display:none;');
       // receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },

    // display dialog
    dialogPrompt: function() {
       var obj = this;
       var message = "Enter Your server url";
       var title = "Alert";
       var buttonLabels = ["Proceed"];
       var defaultText = "http://"
       //alert("in dialog prompt");
       navigator.notification.prompt(message, promptCallback,
          title, buttonLabels, defaultText);
       function promptCallback(result) {
             // if user has not entered any thing then  show alert
             if(result.input1 == '' || result.input1 === 'error' ||  result.input1 === undefined ||
             result.input1 === 'http' || result.input1 === 'http://' ||
             result.input1 === 'https://' ){
             alert("You have not setup your server configuration properly!");
             return;
             }else{
             obj.callAPI(result.input1);
             }
       }
    },


    // write to file.
    writeFile: function(text) {
       var obj = this;
       var type = window.TEMPORARY;
       var size = 5*1024*1024;
       window.requestFileSystem(type, size, successCallback, errorCallback)
       function successCallback(fs) {

          fs.root.getFile('wms_mobile_config.txt', {create: true}, function(fileEntry) {
             fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function(e) {
                // alert("File Write completed.");
                  obj.showToastMessage();
                  obj.setLocalStorage(text);
                  setTimeout(function(){
                     window.location.href = 'BaseStructureERP/index.html';
                       }, 2000);
                };
                fileWriter.onerror = function(e) {
                   alert("File Write error please retry ");// + e.toString());
                   // obj.dialogPrompt();
                };
                var blob = new Blob([text], {type: 'text/plain'});
                fileWriter.write(blob);
             }, errorCallback);
          }, errorCallback);
       }
       function errorCallback(error) {
          obj.dialogPrompt();
          alert("Error in writing file please reenter server url: " + error.code)
       }
    },

     // read to file.
     readFile: function() {
           var type = window.TEMPORARY;
           var size = 5*1024*1024;
           var obj = this;
           //alert("in read file");
           window.requestFileSystem(type, size, successCallback, errorCallback)
           function successCallback(fs) {
              fs.root.getFile('wms_mobile_config.txt', {}, function(fileEntry) {
                 fileEntry.file(function(file) {
                    var reader = new FileReader();
                    reader.onloadend = function(e) {
                    //  alert(" in readfile success text:"+this.result);
                      resultData = this.result;
                      obj.readFileResponse(this.result)
                     // return resultData;
                    };
                    reader.readAsText(file);
                 }, errorCallback);
              }, errorCallback);
           }
           function errorCallback(error) {
              //alert("Read file error Reenter server URL: " + error.code)
              obj.readFileResponse('error');
           }
        },
        readFileResponse: function(responseOfRead){
        var obj = this;
         //alert("at readFileResponse :in read file response"+responseOfRead);
           if(responseOfRead === 'error' ||  responseOfRead === undefined ||  responseOfRead === '' || responseOfRead === 'http' || responseOfRead === 'http://' || responseOfRead === 'https://' ){//|| responseOfRead === undefined
           // alert("invalid readresponse call dialog prompt.");
             obj.dialogPrompt(); // showing prompt dialog.
           }else{
           //alert("response of read call to validate::::"+responseOfRead);
           // network call to validate url
           obj.setLocalStorage(responseOfRead);
           //obj.getLocalStorage();
           setTimeout(function(){
            window.location.href = 'BaseStructureERP/index.html';
           }, 1000);
           //obj.callAPI(responseOfRead)
           }
        },
        // create a text file.
        createFile: function(){
               var type = window.TEMPORARY;
               var size = 5*1024*1024;
               window.requestFileSystem(type, size, successCallback, errorCallback)
               function successCallback(fs) {
                  fs.root.getFile('wms_mobile_config.txt', {create: true, exclusive: true}, function(fileEntry) {
                     //alert('File creation successfully!')
                  }, errorCallback);
               }
               function errorCallback(error) {
                  alert("Error in Creating file: " + error.code)
               }
        },
        checkFileExist: function(){
                  //alert("check file exists?");
                  window.requestFileSystem(window.TEMPORARY, 0, function(fileSystem){
                  fileSystem.root.getFile('wms_mobile_config.txt', { create: false }, fileExists, fileDoesNotExist);
                  }, getFSFail) //of requestFileSystem
                   function fileExists(fileEntry){
                   //alert("File " + fileEntry.fullPath + " exists!");
                   return true;
                   }
                   function fileDoesNotExist(){
                   //alert("file does not exist");
                   return false;
                   }
                  function getFSFail(evt) {
                  console.log(evt.target.error.code);
                  }
        },
        removeFile: function() {
           var type = window.TEMPORARY;
           var size = 5*1024*1024;
           window.requestFileSystem(type, size, successCallback, errorCallback)
           function successCallback(fs) {
              fs.root.getFile('wms_mobile_config.txt', {create: false}, function(fileEntry) {
                 fileEntry.remove(function() {
                    //alert('File removed.');
                 }, errorCallback);
              }, errorCallback);
           }
           function errorCallback(error) {
              alert("ERROR at delete: " + error.code)
           }
        },
        setLocalStorage: function(url) {
           localStorage.setItem("service_url",url);
        },
        getLocalStorage: function() {
           console.log(localStorage.getItem("service_url"));
         //  alert("localStorageSavedValue:"+localStorage.getItem("service_url"));
        },
        callAPI: function(URL){
        var obj = this;
        //console.log("call api button");//"http://139.144.10.220/OptiProWMS/"
        //alert("URL at apicall:"+URL);
        $.ajax({url: URL, success: function(result){
        //alert("api call success");
        //obj.createFile();
        obj.writeFile(URL);
        //obj.getLocalStorage();

        }, error: function(response){
        alert("You have entered an incorrect url, please reenter!");
         setTimeout(function(){
             obj.dialogPrompt();
         }, 2000);
        },
        statusCode: { //what status code api returns.
        200: function() {
        /*console.log("success code:");
           alert('success');*/
        },
        500: function() {
        //alert('500 status code! server error');
        //internal server error 500 or anything else
        },
        400: function() {
        //console.log("error code: 400");
        //internal server error 500 or anything else
        },
        401: function(){
        //console.log("error code: 401");
        //page not found error.
        }
        }
        });
        },

        showToastMessage: function() {
          window.plugins.toast.showWithOptions(
            {
              message: "Please wait proceeding...",
              duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
              position: "bottom",
              addPixelsY: -40  // added a negative value to move it up a bit (default 0)
            }

          );
        }
};

app.initialize();