import { Given, When, Then } from 'cucumber';
import calcPage from '../../pageobjects/calc.page';

Given(/^I send a message$/, () => {
     console.log('Hello World');
});

Given(
    /^I start application by name "([^"]*)"$/,
    (appName) => {
         console.log(appName);
         console.log(flag_run_mode);
         if (flag_run_mode ==='perfecto') {
              browser.execute('mobile:application:open', {'name': appName});
         }

         browser.switchContext('NATIVE_APP');
         browser.pause(5000)
    });

When(
    /^I add "([^"]*)" to "([^"]*)"$/,
    (num1, num2) => {
         browser.switchContext('NATIVE_APP');
         calcPage.add(num1,num2);

    });

Then(
    /^the result should be "(\d+)"$/,
    (result) => {
         console.log(result);
         calcPage.verifyResult(result);
    });


