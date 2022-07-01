const { default: LoginPage } = require("../../../screenobject/ios/user/LoginPage");
const { default: WelcomePage } = require("../../../screenobject/ios/user/WelcomePage");

describe('Ios', () =>{
    it('test 1', async() => {
        (await WelcomePage.allowLocation).click();
        (await WelcomePage.allowNotification).click();
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});

        (await LoginPage.mobileField).addValue("9155939529");
        (await LoginPage.passwordField).addValue("password1");
        (await LoginPage.loginButton).click();

        await expect($('//*[@name="ic side menu"]')).toBeDisplayed();
        await driver.pause(5000);
    })
})