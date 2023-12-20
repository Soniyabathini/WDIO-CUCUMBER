const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^the user is on the webpage$/, async() => {
browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

When(/^the user enters the details and clicks on loginbutton$/, async() => {
await Orangehrm.LoginButton('Admin','admin123')
});

Then(/^the user clicks on the pimmodule$/, async() => {
await Orangehrm.PimModules()
});

When(/^the user click on the addemployee$/, async() => {
await Orangehrm.AddEmployees()
});

Then(/^the user enters all the elements and clicks savebutton$/, async() => {
await Orangehrm.SaveButton('Bathini','Soniya','Gowda')
});
