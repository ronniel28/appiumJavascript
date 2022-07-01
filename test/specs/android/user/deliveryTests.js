const { default: LoginPage } = require("../../../screenobject/android/user/LoginPage");
const { default: WelcomePage } = require("../../../screenobject/android/user/WelcomePage");


describe('Delivery End to End', () => {

    before('Log in', async() => {
        
        await WelcomePage.swipeToLoginPage();

        await LoginPage.mobileField.addValue("9155939529");
        await LoginPage.passwordField.addValue("password2");
        await LoginPage.loginButton.click();
       

    });

    it('Single Stop Delivery', async() => {
        await expect($('//*[@content-desc="Open navigation drawer"]')).toExist();

        await $('//android.widget.TextView[@text="Delivery"]').click();

        //delivery page
        await $('//*[@resource-id="com.riderko.user:id/deliver_to_text"]').click();

        await $('//*[@resource-id="com.riderko.user:id/text_location"]').addValue("megamall");

        await expect($('//*[@resource-id="com.riderko.user:id/save_places"]')).toExist();

    

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SM Megamall - Building B")');
        
        await $('//android.widget.TextView[@text="SM Megamall - Building B"]').click();

        await $('//*[@resource-id="com.riderko.user:id/btn_proceed"]').click();

        await $('//*[@resource-id="com.riderko.user:id/text_contact_name"]').addValue("Ronniel");

        await $('//*[@resource-id="com.riderko.user:id/text_contact_number"]').addValue("9123456789");

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Done")');

        await $('//*[@resource-id="com.riderko.user:id/mbbtnconfirm"]').click();

        await $('//*[@resource-id="com.riderko.user:id/mbbtnconfirm"]').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Confirm")');

        await $('//android.widget.TextView[@text="Confirm"]').click();

        await expect($('//*[@resource-id="com.riderko.user:id/p2p_head"]')).toExist();
        await driver.pause(10000);

    });

})