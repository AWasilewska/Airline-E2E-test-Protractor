# Ryanair-Automation-Test

This test utlizes Javascript, Protractor and the default jasmine framework. 

Purpose: 

The purpose of this test is to automate a flight booking, traversing through flight selection to flight confirmation. 

Note: Due to not wanting to add redundant data outside of staging the creator opted not to create a fake user as they were not sure of how this can affect user dependent metrics.

Design: 

The design of the test is to run through one complete test cycle to confirm that it is possible to complete a flat run. 



How to run this test 

To run this test you will need to have the following programs installed.

1) NodeJS
2) NPM
3) Web-driver manager 
4) protractor 

Then you will need to follow these steps: 

1) Load a command line/bash 
2) Begin the server by typing webdriver-manager start --seleniumPort 8888 (NOTE: With some debian flavours you may need to start the server using sudo, which you can cancel and then restart at a desecelated level )
3) navigate to the cloned directory 'Ryanair Protractor' and load a terminal inside this folder 
4) Write the command protractor conf.js
5) Observe that the test has begun and observe as it carries out the process
6) Check the terminal/bash for output verification.

KNOWN ISSUES

1) There is an issue in which loading the test too soon can result in the web-app selecting ALICANTE as the destination. If this happens please reload the test. 


