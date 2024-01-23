const { Given, When, Then } = require('@wdio/cucumber-framework');
const Login1=require('../pageobjects/Login1pg');
const Timeout = require('../pageobjects/Timeout');
const CucumberJson=require("wdio-cucumberjs-json-reporter");
const Variables=require('../Variables/Credintials.json')

Given(/^the user is on the web page$/, async() => {
    await browser.maximizeWindow();
    await browser.url("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    await Timeout.wait()
});

When(/^the user clicks on the login or Register button$/, async() => {
    await Login1.LoginorRegister.moveTo();
    await Timeout.wait()
});

Then(/^an template is displayed$/, async() => {
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()

});

Then(/^the user enters valid username$/, async() => {
    await Timeout.wait()
    await Login1.ValidLogin.setValue(Variables.validusername);
    await Timeout.wait()


});

Then(/^also the user enters invalid password$/, async() => {
    await Timeout.wait()
    await Login1.InvalidPassword.setValue(Variables.InValidPassword);
    await Timeout.wait()

});

Then(/^user clicks on the Signin button$/, async() => {
    await Timeout.wait()
    await Login1.Signin.click();
    await Timeout.wait()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()

});
