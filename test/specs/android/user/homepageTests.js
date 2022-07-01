const { default: LoginPage } = require("../../../screenobject/android/user/LoginPage");
const { default: RiderKoHomepage } = require("../../../screenobject/android/user/RiderKoHomepage");
const { default: WelcomePage } = require("../../../screenobject/android/user/WelcomePage")

describe('Homepage Tests', () => {
    before('Log In', async() =>{
        await driver.reset();
        
        await WelcomePage.swipeToLoginPage();
        await LoginPage.login();
    })

    it.only('Homepage UI Test', async() => {
        await driver.startActivity("com.riderko.user","com.riderko.user.v2.SignUpActivity");
        await driver.pause(10000);
        (await RiderKoHomepage.burgerIcon).isExisting();
        (await RiderKoHomepage.location).isExisting();

        if((await RiderKoHomepage.savedAddressIcon).isExisting()){
            (await RiderKoHomepage.savedAddressName).isExisting();
        }else{
            (await RiderKoHomepage.currentLocation).isExisting();
        }

        (await RiderKoHomepage.searchBar).isExisting();
        (await RiderKoHomepage.promoImage).isDisplayed();
        (await RiderKoHomepage.promoTitle).isExisting();
        (await RiderKoHomepage.promoDescription).isExisting();
        
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Discover More")');
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).flingToEnd(3)');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.riderko.user:id/recycle_deals"))');
        await expect(RiderKoHomepage.dealsSection).toBeDisplayed();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.riderko.user:id/recycle_discover"))');
        await expect(RiderKoHomepage.discoverSection).toBeDisplayed();
        
    })
})