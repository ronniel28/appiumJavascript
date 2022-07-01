class LoginPage {

    get riderkoLogo(){
        return $('//*[@resource-id="com.riderko.user:id/white_logo"]');
    }

    get mobileField(){
        return $('//*[@resource-id="com.riderko.user:id/text_mobile_number"]');
    }

    get passwordField() {
        return $('//*[@resource-id="com.riderko.user:id/text_password"]');
    }

    get showPasswordIcon(){
        return $('//*[@resource-id="com.riderko.user:id/text_input_end_icon"]');
    }

    get loginButton(){
        return $('//*[@resource-id="com.riderko.user:id/btn_login"]');
    }

    get forgotPasswordLink() {
        return $('//*[@resource-id="com.riderko.user:id/text_forgot"]');
    }

    get signupButton() {
        return $('//*[@resource-id="com.riderko.user:id/btn_register"]')
    }

    get privacyPolicyLink() {
        return $('//*[@resource-id="com.riderko.user:id/privacy_textview"]')
    }

    get tAndCLink() {
        return $('//*[@resource-id="com.riderko.user:id/tnc_textview"]')
    }

    get toastMessage() {
        return $('//android.widget.Toast')
    }

    async login(){
        (await this.mobileField).addValue("9155939529");
        (await this.passwordField).addValue("password2");
        (await this.loginButton).click();
    }
}

export default new LoginPage;