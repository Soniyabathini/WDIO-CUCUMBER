const { Given, When, Then } = require('@wdio/cucumber-framework');
const pdf=require('../pageobjects/pdfpg');
const CucumberJson=require("wdio-cucumberjs-json-reporter");


Given(/^user is on register page$/, async() => {
    //await browser.url("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    await pdf.webpage();
    await browser.maximizeWindow();
    await browser.pause(2000)
});

Then(/^user uploads resume$/, async() => {
    await browser.pause(2000)
    //await pdf.resume.waitForClickable();
    await pdf.resume.setValue("C:\\Users\\pc\\Downloads\\Soniya_Bathinii.docx");
    await browser.pause(3000)
    CucumberJson.attach(await browser.takeScreenshot(),'img/png');
});
