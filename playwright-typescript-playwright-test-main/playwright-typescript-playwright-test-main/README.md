

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Records videos for Test Cases.
- Records the test script and every action on the target page is turned into generated script.
- Generates trace file, which gives in-depth details of Test Case execution.
- Execution of test case is faster when compared with other competitive framework in market.
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
- It supports API testing (From Playwright version 1.16 onwards)
- It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.
- It has ability to produce and visually compare screenshots.
- To slow down execution slowMo option is available.
- Supports 'download' event monitoring, so there is no need for user to actually wait for downloads to finish.
- Supports Serial and Parallel execution.
- Allure/HTML Reports are generated after execution with an option to capture screenshot/video/trace file on failure.
- Nonetheless Support from Microsoft so FREQUENT RELEASES and turn arounf time for any queries is 48 hours.



### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)


## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.
- Install Java 11 instead of Java 8 if you intend to use Sonar Qube.
- allure commandline : Install allure command line for generating Allure Reports using
  npm ci -g allure-commandline 
### Installation

1. Clone the repo using below URL

https://github.com/anagandulajyothi/HRMS_Automation.git
```
2. Navigate to folder and install npm packages using:
npm install
```
<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" or "dev", `Test Cases are present in "tests" folder`:

npx cross-env ENV=qa npm run test

3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change `--project=Firefox` against `test:single` in `package.json`, just make sure the browser name given matches the name given in `playwright.config.ts`.

npx cross-env ENV=qa npm run test:single

4. For recording test scripts :

npm run test:record

5. To produce and visually compare screenshots execute below command. On first execution reference screenshot will be generated for comparision with subsequent runs.

npx cross-env ENV=qa npm run test:visual

6. For emulating test cases on any device, in `playwright.config.ts`, under device section provide desired device name and execute :

npx cross-env ENV=qa npm run test:device


7. For Allure Report generation execute :

npm run allureReport

8. For HTML Report generation execute below command , single static HTML report(index.html) which can be sent via email is generated in "html-report" folder:
9. For converting HTML Reports to zip file "adm-zip" library is used, the logic is implemented in `global-teardown.ts` , to make sure this runs after all the test are executed and after reports are generated, `global-teardown.ts` is given as a parameter for "globalTeardown" in `playwright.config.ts` file. Results are generated as `html-report.zip` in project directory. 
10. For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.
11. Screenshots, Videos and Trace files will be generated in test-results folder.
12. To change your username go to `testConfig.ts` and provide value against `username`
13. To change password, go to `lib/WebActions` in `decipherPassword()` uncomment `ENCRYPT` code block and replace `password` with your password, execute the test case, Encrypted password will be printed on your console . Copy Encrypted password in `testConfig.ts` against `password` field. You can comment Encrypt bloack ater this.

14. You can change the Logging Message at Test Case/Test Step Level in CustomReporterConfig.ts file
15. In `tsconfig.json` file in `paths` section we can re-assign the long path imports like '../../' to a variable which starts with '@' and then we can use it to shorten our import statements in respective file.
In the below example wherever '../../pageFactory/pageRepository/' import statement is used we can replace it with '@pages'
"@pages/*":["pageFactory/pageRepository/*"]

16. Logging is implemented in `CustomReporterConfig.ts` using winston logger. 

First we have to create a logger object using winston.createLogger and then provid the configuration you need.
First argument is "level" for which i have provided value as "info", in winston logger every logging level is provided with a numeric value, for info the numeric value is 2, so if we provide level as info then all the logs which are equal to or less than info level will be displayed. In our case logs with error(0) and warn(1) wil also be logged. For more info on logging refer below link
`https://github.com/winstonjs/winston#logging`

Second we have to provide format for the log file generate I have provided format as json using ` winston.format.json()` because JSON is widely used. There are various levels like printf, simple, colorize which you can refer in below link
`https://github.com/winstonjs/logform#formats` 

Third part is transports which defines where the log file will be written. I have provided the location as `logs/info.log` in my case

Once logger object is created I have provided `logger.add(console);` which instructs logger to write the log files in console as well.

Once logger object is created you can use this instead of console.log in your framework and these logs will be written both in your console and log file.

## Reports

- <b>Overall Report</b>
  ![Overall Report Screenshot][overall-report-screenshot]

- <b>Detailed Report</b>
  ![Detailed Report Screenshot][detailed-report-screenshot]

- <b>Failure Report</b>
  ![Failure Report Screenshot][failure-report-screenshot]




