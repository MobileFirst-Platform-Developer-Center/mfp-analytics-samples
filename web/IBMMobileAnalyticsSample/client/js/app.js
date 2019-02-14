define([
'ibmmfpfanalytics',
'ibmmfpf',
], function(ibmmfpfanalytics, WL){

var wlInitOptions = {'mfpContextRoot' : '/mfp' , 'applicationId' : 'com.ibm.mobile.foundation.ibmmobileanalyticssample'};

WL.Client.init(wlInitOptions).always(function() {
    console.log('MobileFirstPlatform initialized');

    WLAuthorizationManager.obtainAccessToken().then(function(token){
            console.log('token: ' + JSON.stringify(token));
        }, function(error){
            console.log('what?? ' + error);
        })
});


function userContext(user) {
    ibmmfpfanalytics.setUserContext(user)
    send();
};

function callHttpApi(httpapi) {
    var request = new WL.ResourceRequest(httpapi, WL.ResourceRequest.GET);
    request.send().then(function(data){
        console.log('data: ' + JSON.stringify(data));
    })
    send();
};

function callAdapter() {
    var request = new WL.ResourceRequest('adapters/javaAdapter/resource/unprotected', WL.ResourceRequest.GET);
    request.send().then(function(data){
        console.log('data: ' + JSON.stringify(data));
    })
    send();
};

function log(msg) {
    var logger = ibmmfpfanalytics.logger.pkg('samplePackage');
    ibmmfpfanalytics.logger.info(msg);
    ibmmfpfanalytics.logger.error('error', msg);
    send();
};

function logCustom(customEventLog) {
    ibmmfpfanalytics.addEvent({'custom_message':customEventLog});
    send();
};

function send() {
    ibmmfpfanalytics.send()
    .then(function (response) {
            console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};


function crashMe(){
    throw new Error("it's over 9000!!!");
}

return {
    userContext: userContext,
    callHttpApi: callHttpApi,
    callAdapter: callAdapter,
    send: send,
    logCustom: logCustom,
    log: log,
    crashMe : crashMe
  };
});
