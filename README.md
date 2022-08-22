Setup instructions:
1. Fork project's files from github: https://github.com/Aurims999/sft-kaunas-red
2. Create a folder in your device, where the local cloned data will be stored
3. Clone git by using prefered application (f.e. SourceTree);
4. Use Git-friendly IDE (VS Code was used for this project) to access the downloaded project;
5. In IDE, open up the folder, which you selected in the second instruction's point;
6. In terminal, install npm (npm install) and playwright (npx playwright install);
7. To launch the test, in terminal write down "npx playwright test websiteTesting.spec.js" (tests are stored in the file "websiteTesting.spec.js").

Test values:
Login testing - tester should test out how input validation is being done, how does the system handle the errors and etc. We automated proper logging in function (Valid login) and we tried to test out login timeout (does the website throw any errors when invalid login is being done by the user);
Ordering test - We tried to test out if the users ordered item is properly processed (check if the order isn't changed during the requests)(but we had problems with the internet speed and some problems with unexpected and unsolvable exceptions)