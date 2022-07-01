class WelcomePage {

    get allowLocation(){
        return $('//XCUIElementTypeButton[@name="Allow While Using App"]');
    }

    get allowNotification(){
        return $('//XCUIElementTypeButton[@name="Allow"]');
    }

    async swipeToLogin(){
        (await this.allowLocation).click();
        (await this.allowNotification).click();
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
        await driver.execute('mobile:scroll', {direction: "right"});
    }
}

export default new WelcomePage;