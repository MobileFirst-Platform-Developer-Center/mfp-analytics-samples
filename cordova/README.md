<!---Licensed Materials - Property of IBM
5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or
disclosure restricted by GSA ADP Schedule Contract with IBM Corp.-->

# IBM MobileFirst Platform Foundation Cordova Sample Application for Analytics
Use this sample application to get started with development of Cordova applications.
The application uses the IBM MobileFirst SDK to connect to a local or remote server and obtain an access token and demonstrate various analytics features

**Getting Started**

1. Unzip the compressed cordova.zip file.
* Change directory into IBMMobileAnalyticsSample.
* At this point no platforms are included.  To add a platform(s) to the IBMMobileAnalyticsSample application run the 'cordova platform add' command:
  * cordova platform add <android|ios>
* Run the 'mfpdev app register' command to register the sample application on the MobileFirst Server:
  * mfpdev app register
  * Follow any prompts to include server and client application details.
* To run the application on a real device run the 'cordova run' command:
  * cordova run <platform>  
* To run the application on a virtual device run the 'cordova emulate' command:
  * cordova emulate <platform>  
