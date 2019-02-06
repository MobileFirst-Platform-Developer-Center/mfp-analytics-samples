# mfp-analytics-samples
This is a repository of simple technology samples that demonstrate the Mobile Foundation Analytics Service's capabilities.  This repository contains samples for all the different channels for which Mobile Foundation Analytics capability is supported - presently Android, iOS, Cordova (iOS & Android), Web.  Look into the specific sub-directory in this repository to find the sample for a platform / channel.

## Pre-requisites
Before you build and run the samples ensure that you: -
- Create an instance of Mobile Foundation Service on IBM Cloud
- Clone this repo and go to the sub-directory that holds the sample of your choice
- Open the Mobile Foundation Service Operations Console and register the sample application.  If the sample you have chosen uses Adapters then deploy the Adapters as well.  The Adapter deployables can be found in the root of the sample sub-directory
- Configure the sample with the endpoint url of the Mobile Foundation Server.  The endpoint can be found in the 'credentials' of the Mobile Foundation Service.  Copy this url into mfpclient.properties.
- Open up the Analytics Console by selecting the option titled 'Analytics Console'in the left-navigation pane of the Operations Console.  At this time you will not see the sample application listed in the 'Applications' filter dropdown.

## Running the Sample
Firstly the intent of these sample applications is only to demonstrate the capabilities of Mobile Foundation Analytics Service and the usage of it's Client SDKs and is not built around any specific usecase.  However, the code patterns in the samples can be easily adopted into a real life applications.  If you have completed the pre-requistes you can build and run the sample application.  

## Gather Insights from Analytics Console

When the sample application is started and opens up, the application is initialized for Mobile Foundation Analytics.  Move over to the Analytics Console and refresh the view.  You will then see the sample application listed in the 'Applications' filter dropdown.

Subsequently you may now excercise the different action buttons, providing inputs wherever required and observe the changes to the views and charts in the Analytics console as analytics data gets captured from your app and is sent to the Mobile Foundation Analytics Service.  For example if log a message you will be able to look it up in the TroubleShooting view of the Anlytics Console OR if you have captured and sent interactive Feedback you will see it listed under User Feedback.


