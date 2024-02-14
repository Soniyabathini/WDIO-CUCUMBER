const { Given, When, Then } = require('@wdio/cucumber-framework');
const Resume=require('../pageobjects/Resumepg')
const CucumberJson=require("wdio-cucumberjs-json-reporter");

Given(/^User is on w3schools webpage$/, async() => {
    await browser.url("https://www.w3schools.com/howto/howto_html_file_upload_button.asp")
    await browser.maximizeWindow();
    await browser.pause(1000)
});

When(/^user clicks on choose file and uploads file$/, async() => {
    await Resume.file.setValue("C:\\Users\\pc\\Downloads\\Soniya_Bathinii.docx");
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});
