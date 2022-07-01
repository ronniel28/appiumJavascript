const { default: LoginPage } = require("../../../screenobject/ios/user/LoginPage");
const { default: WelcomePage } = require("../../../screenobject/ios/user/WelcomePage");
import allureReporter from '@wdio/allure-reporter'


describe('USER - IOS: Log In Tests', () => {

    before('Swipe tour', async() => {
       await WelcomePage.swipeToLogin();
    });

    it('Log In Page UI', async() => {
        await expect(LoginPage.riderkoLogo).toBeDisplayed();
        await expect(LoginPage.mobileField).toExist();
        await expect(LoginPage.passwordField).toExist();
        await expect(LoginPage.showPasswordIcon).toExist();
        await expect(LoginPage.loginButton).toExist();
        await expect(LoginPage.forgotPasswordLink).toExist();
        await expect(LoginPage.signupButton).toExist();
        await expect(LoginPage.privacyPolicyLink).toExist();
        await expect(LoginPage.tAndCLink).toExist()
         
    });

    it.only('Tapping the mobile field', async() => {
       
        (await LoginPage.mobileField).click();
        await driver.pause(1000);

        const [value] = await Promise.all(
            [
               $('//*[@value="9XXXXXXXXX"]').getValue()
        
            ]
        )
        
        console.log("test " + value);
        await driver.pause(10000);

    });
   
    it('Tapping Password Field', async() => {
         
        
    });

    it('Typing at mobile number field', async() => {
        
    });

    it('Typing at password field', async() => {
        

    });

    it('Tap Forgot Password', async() =>{
       
    });

    it('Tap Privacy Policy', async() => {
       
    });

    it('Tap Terms and Conditions', async() => {
       
    });

    it('Log in with Invalid password', async() => {
       
    });

    it('Log In without password', async() => {
       
    });


    it('Log In without mobile number', async() => {
       
    });

    it("Log In with incomplete mobile number", async() => {
       
    });

    it("Log in without credentials", async() => {
       
    });

    it.only('Log in with valid credentaials', async() => {

       
    })

})