class LoginPage{
    get riderkoLogo(){
        return $('//*[@name="RiderKo White Logo"]');
    }

    get mobileField(){
        return $('//XCUIElementTypeApplication[@name="RiderKo"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField');
    }

    get clickedMobileField(){
        return $('//XCUIElementTypeApplication[@name="RiderKo"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField');
    }

    get passwordField() {
        return $('//*[@value="Password"]');
    }

    get showPasswordIcon(){
        return $('//*[@name="Button"]');
    }

    get loginButton(){
        return $('//*[@name="Login"]');
    }

    get forgotPasswordLink() {
        return $('//*[@name="Forgot password?"]');
    }

    get signupButton() {
        return $('//*[@name="Sign Up"]');
    }

    get privacyPolicyLink() {
        return $('//*[@name="Privacy Policy"]');
    }

    get tAndCLink() {
        return $('//*[@name="Terms and Conditions"]');
    }

}

export default new LoginPage;