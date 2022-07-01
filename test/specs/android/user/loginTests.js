
const { default: LoginPage } = require("../../../screenobject/android/user/LoginPage");
const { default: WelcomePage } = require("../../../screenobject/android/user/WelcomePage");
import allureReporter from '@wdio/allure-reporter'


describe('USER - ANDROID: Log In Tests', () => {

    before('Swipe tour', async() => {
        await WelcomePage.swipeToLoginPage();
    });

    it('Log In Page UI', async() => {
        
        await expect(LoginPage.riderkoLogo).toBeDisplayed();
        await expect(LoginPage.mobileField).toExist();
        await expect(LoginPage.passwordField).toExist();
        await expect(LoginPage.showPasswordIcon).toExist();
        await expect(LoginPage.loginButton).toBeDisplayed();
        await expect(LoginPage.forgotPasswordLink).toExist();
        await expect(LoginPage.signupButton).toBeDisplayed();
        await expect(LoginPage.privacyPolicyLink).toExist();
        await expect(LoginPage.tAndCLink).toExist();
        
    });

    it('Tapping the mobile field', async() => {
        await LoginPage.mobileField.click();
        await driver.pressKeyCode(4);
        await driver.pressKeyCode(4);
        await expect($('//*[@resource-id="com.riderko.user:id/textinput_prefix_text"]')).toHaveText("+63");
        await expect(LoginPage.mobileField).toHaveText("9XXXXXXXXX");
        await expect((await LoginPage.mobileField).isFocused()).toBeTruthy();
        
    });
   
    it('Tapping Password Field', async() => {
         await LoginPage.passwordField.click();
         await driver.pressKeyCode(4);
         await expect(LoginPage.passwordField).toHaveText("Password");
         await expect((await LoginPage.passwordField).isFocused()).toBeTruthy();
        
    });

    it('Typing at mobile number field', async() => {
        await LoginPage.mobileField.addValue("1234");
        await expect(LoginPage.mobileField).toHaveText("1234");
    });

    it('Typing at password field', async() => {
        await LoginPage.passwordField.addValue("password");
        await expect(LoginPage.passwordField).toHaveText("password");

    });

    it('Tap Forgot Password', async() =>{
        (await LoginPage.forgotPasswordLink).click();
        await expect($('//*[@resource-id="com.riderko.user:id/forgot_title"]')).toExist();

        (await $('//*[@resource-id="com.riderko.user:id/close_icon"]')).click();
        await expect(LoginPage.riderkoLogo).toBeDisplayed();
    });

    it('Tap Privacy Policy', async() => {
        (await LoginPage.privacyPolicyLink).click();
        await expect($('//*[@resource-id="com.riderko.user:id/text_title"]')).toHaveText("Privacy Policy");

        (await $('//*[@resource-id="com.riderko.user:id/back_image"]')).click();
        await expect(LoginPage.riderkoLogo).toBeDisplayed();
    });

    it('Tap Terms and Conditions', async() => {
        (await LoginPage.tAndCLink).click();
        await expect($('//*[@resource-id="com.riderko.user:id/text_title"]')).toHaveText("Terms and Conditions");

        (await $('//*[@resource-id="com.riderko.user:id/back_image"]')).click();
        await expect(LoginPage.riderkoLogo).toBeDisplayed();
    });

    it('Log in with Invalid password', async() => {
        (await LoginPage.mobileField).addValue("9155939529");
        (await LoginPage.passwordField).addValue("wrongpassword");
        (await LoginPage.loginButton).click();

        await expect(LoginPage.toastMessage).toHaveText("Incorrect mobile number or password");
    });

    it('Log In without password', async() => {
        (await LoginPage.mobileField).addValue("9155939529");
        (await LoginPage.mobileField).click();
        (await LoginPage.passwordField).clearValue();
        (await LoginPage.loginButton).click();

        await expect($('//android.widget.ImageButton[@content-desc="Error"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.riderko.user:id/textinput_error"]')).toHaveText("Password is required.");
    });


    it('Log In without mobile number', async() => {
        allureReporter.addIssue("error message should behave as in the pasword field");
        (await LoginPage.mobileField).clearValue();
        (await LoginPage.passwordField).addValue("password2");
        (await LoginPage.loginButton).click();

        await expect($('//android.widget.ImageButton[@content-desc="Error"]')).not.toBeDisplayed();
        await expect($('//*[@resource-id="com.riderko.user:id/textinput_error"]')).not.toBeDisplayed();
    });

    it("Log In with incomplete mobile number", async() => {
        (await LoginPage.mobileField).addValue("915593952");
        (await LoginPage.mobileField).click();
        (await LoginPage.passwordField).addValue("password2");
        (await LoginPage.loginButton).click();

        await expect(LoginPage.toastMessage).toExist();
        await expect(LoginPage.toastMessage).toHaveText("The mobile must be 10 digits.");
    });

    it("Log in without credentials", async() => {
        (await LoginPage.loginButton).click();
        await driver.pause(5000);
        let screenshot = await driver.takeScreenshot();
        allureReporter.addAttachment("screenshot", screenshot);
        allureReporter.addDescription("Mobile number has no error message")
    });

    it.only('Log in with valid credentaials', async() => {

        (await LoginPage.mobileField).addValue("9155939529");
        (await LoginPage.passwordField).addValue("password2");
        (await LoginPage.loginButton).click();

        await expect($('//android.widget.ImageButton[@content-desc="Open navigation drawer"]')).toBeDisplayed();

        (await $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]')).click();
        (await $('//*[@resource-id="com.riderko.user:id/nav_logout"]')).click();
        (await $('//*[@resource-id="com.riderko.user:id/llcomplete"]')).click();

        await expect(LoginPage.riderkoLogo).toBeDisplayed();
    })
    
});