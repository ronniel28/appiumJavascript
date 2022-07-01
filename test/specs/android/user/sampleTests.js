const { default: LoginPage } = require("../../../screenobject/android/user/LoginPage");
const { default: WelcomePage } = require("../../../screenobject/android/user/WelcomePage");

describe('Testing Activity', ()=>{
    it('get activity', async() => {    
        await driver.startActivity("com.riderko.user", "com.riderko.user.v2.SignUpActivity");
        await driver.pause(10000)
    })
})