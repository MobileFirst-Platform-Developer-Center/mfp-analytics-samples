<!---Licensed Materials - Property of IBM
5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or
disclosure restricted by GSA ADP Schedule Contract with IBM Corp.-->

# IBM MobileFirst Platform Foundation Web Sample Application for Analytics
Use this sample application to get started with development of web applications.
The application uses the IBM MobileFirst SDK to connect to a local or remote server, and obtain an access token and demonstrate various analytics features

**Note** Due to the constraints of the same-origin policy, your MobileFirst Server and your web server must be behind the same host. To satisfy this requirement, the sample applications includes a node web server at `http://localhost:9081`. This server forwards MobileFirst requests to the MobileFirst Server. 

**Getting Started**
1. Register the sample application to MobileFirst Server. You can do this from the MobileFirst Operations Console, or by using the MobileFirst Platform CLI (`mfpdev`). During registration, set the application ID (`applicationId`) to `com.ibm.mfpstarterweb`.
   To register the application using `mfpdev`, do the following:
   * From the command line, run `mfpdev app register web 'com.ibm.mobile.foundation.ibmmobileanalyticssample'`.
   * Follow any prompts to provide server and client application details.
2. Start the `node_server` web server by using the IP address of your MobileFirst Server:
   * From the command line, change directory (`cd`) to the `node_server` directory.
   * Run the command `npm start <MobileFirst Server IP address>`. For example: `npm start http://localhost:9080`.
3. View the [sample web application](http://localhost:9081) in any browser.


**Google Chrome Security-Origins Policy**

In production, it is recommended that you use the HTTPS protocol (HTTP over SSL) for the network communication with your web server and MobileFirst Server. However, during the development process you might prefer to use non-secure HTTP communication. In Google Chrome, HTTP communication with a remote server (not localhost) might cause an error due to the Chrome secure-origins policy. For more information about this policy, see the [Chrome documentation](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features). You can overcome this error by starting Chrome with the `--unsafely-treat-insecure-origin-as-secure` flag set to the IP address of your HTTP server. You also need to set  the `--user-data-dir` flag to a profile-session directory. For example:
```
--args --unsafely-treat-insecure-origin-as-secure=http://9.148.225.123:3000 --user-data-dir=/tmp/profile
```
