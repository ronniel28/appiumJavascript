class WelcomePage {
    async swipeToLoginPage() {
        // await driver.acceptAlert();

        await expect($('//android.widget.ImageView[@resource-id="com.riderko.user:id/image_part"]')).toExist();
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    }
}

export default new WelcomePage;