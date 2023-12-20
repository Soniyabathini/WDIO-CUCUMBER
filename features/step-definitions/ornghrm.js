const { Given, When, Then } = require('@wdio/cucumber-framework');
const Orangepage=require('../pageobjects/ornghrm.page')
Given(/^first login functionality user enters the user name and password$/, async() => {
    browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

Then(/^after click on pim module$/, async() => {
    await Orangepage.Login('Admin','admin123')
});

Then(/^click on the addemploye$/, async() => {
await Orangepage.ClickAddemploye();
});

When(/^fill all elements and click the add button$/, async() => {
await Orangepage.Loginnames('Bathini','Soniya','Gowda')
});
