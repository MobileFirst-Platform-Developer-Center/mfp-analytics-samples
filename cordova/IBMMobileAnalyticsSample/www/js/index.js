
var Messages = {
  // Add here your messages for the default language.
  // Generate a similar file with a language suffix containing the translated messages.
  // key1 : message1,
};

var wlInitOptions = {
  // Options to initialize with the WL.Client object.
  // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

function wlCommonInit() {
  app.init();
}

var app = {
  //initialize app
  "init": function init() {
      
    WL.App.getServerUrl(function (url) {
        alert("connecting "+url);
    });

    WLAuthorizationManager.obtainAccessToken()
      .then(
        function (accessToken) {
            alert("Connected to MobileFirst Server");
        },
        function (error) {
            alert("Failed to connect to MobileFirst Server");
        }
    );

    /*var buttonElement = document.getElementById("ping_button");
    buttonElement.style.display = "block";
    buttonElement.addEventListener('click', app.testServerConnection, false);*/

    var buttonElement1 = document.getElementById("setuser_button");
    buttonElement1.style.display = "block";
    buttonElement1.addEventListener('click', app.setuser, false);

    var buttonElement2 = document.getElementById("callhttpapi_button");
    buttonElement2.style.display = "block";
    buttonElement2.addEventListener('click', app.callhttpapi, false);

    var buttonElement3 = document.getElementById("logmessage_button");
    buttonElement3.style.display = "block";
    buttonElement3.addEventListener('click', app.logmessage, false);

    var buttonElement4 = document.getElementById("logcustom_button");
    buttonElement4.style.display = "block";
    buttonElement4.addEventListener('click', app.logCustomMessage, false);

    var buttonElement5 = document.getElementById("adapter_button");
    buttonElement5.style.display = "block";
    buttonElement5.addEventListener('click', app.callAdapter, false);

    var buttonElementX = document.getElementById("feedback_button");
    buttonElementX.style.display = "block";
    buttonElementX.addEventListener('click', app.invokefeedback, false);
  },

  //test server connection
  "testServerConnection": function testServerConnection() {

    var titleText = document.getElementById("main_title");
    var statusText = document.getElementById("main_status");
    var infoText = document.getElementById("main_info");
    titleText.innerHTML = "Hello MobileFirst";
    statusText.innerHTML = "Connecting to Server...";
    infoText.innerHTML = "";
    WL.App.getServerUrl(function (url) {
      infoText.innerHTML = url;
    });

    WLAuthorizationManager.obtainAccessToken()
      .then(
        function (accessToken) {
          titleText.innerHTML = "Yay!";
          statusText.innerHTML = "Connected to MobileFirst Server";
        },
        function (error) {
          titleText.innerHTML = "Bummer...";
          statusText.innerHTML = "Failed to connect to MobileFirst Server";
        }
        );
  },

  "setuser": function setuser() {
        var userID = document.getElementById("user_context_text").value;
        if (userID === null) {
            userID = "undefined";
        }
        WL.Analytics.setUserContext(userID);
        WL.Analytics.send();
  },

  "callhttpapi": function callhttpapi() {
        var httpurl = document.getElementById("call_http_api").value;
        if (httpurl === null) {
            alert("http url is empty");
        } else {
            alert("httpurl : "+httpurl);
            var resourceRequest = new WLResourceRequest(httpurl, WLResourceRequest.GET);
            resourceRequest.send().then(function(data){
                                        console.log('data: ' + JSON.stringify(data.status));
                                        });
            WL.Analytics.send();
        }
  },

  "logmessage": function logmessage() {
        var message = document.getElementById("log_message").value;
        if (message === null) {
            message = "Sample Log Message";
        }

        // Set the logging level (optional)
        // The default setting is DEBUG
        WL.Logger.config({"level": "INFO"});

        //Create a logger instance.  You can create multiple loggers to organize your logs as you wish
        var logger = WL.Logger.create({ pkg: 'loggerName' });
      
        //log the message as info level
        logger.info("info",message);

        // Send logs to the Mobile Analytics
        WL.Logger.send();
        WL.Analytics.send();
   },

   "logCustomMessage": function logCustomMessage() {
        var message = document.getElementById("log_message").value;
        if (message === null) {
            message = '{"CurPage":"LoginPage"}';
        }
        WL.Analytics.log(message);
        // Send logs to the Mobile Analytics
        WL.Analytics.send();
   },

   "callAdapter": function callAdapter() {
       var httpurl = "adapters/javaAdapter/resource/unprotected";
        var resourceRequest = new WLResourceRequest(httpurl, WLResourceRequest.GET);
        resourceRequest.send().then(function(data){
                                    console.log('data: ' + JSON.stringify(data.status));
                                    });
        WL.Analytics.send();
   },

  "invokefeedback": function invokefeedback() {

        console.log("In Feedback button");
        WL.Analytics.triggerFeedbackMode();
  },

}




