import Page from '../page';

class LoginPage extends Page {

    open() {
        return super.open();
    }

    get signin() { return $('#signin_button') }
    get loginForm() { return $('#login_form') }
    get userInput() { return $('#user_login') }
    get pwdInput() { return $('#user_password') }
    get submitBtn() { return $('input[type="submit"]') }
    get userIcon() { return $('.icon-user') }
    get logoutLink() { return $('#logout_link') }
    get tabsNav() { return $('.nav-tabs') }
    get pageNav() { return $('#pages-nav') }


    homePagetoLogin() {
        this.signin.waitForExist()
        this.signin.click()
    }

    formIsVisible() {
        this.loginForm.waitForExist()
    }

    successfulLogin(username, password) {
        this.userInput.waitForExist()
        this.userInput.setValue(username)
        this.pwdInput.waitForExist()
        this.pwdInput.setValue(password)
        this.submitBtn.waitForExist()
        this.submitBtn.click()
    }

    unsuccessfulLogin(username, password) {
        this.userInput.waitForExist()
        this.userInput.setValue(username)
        this.pwdInput.waitForExist()
        this.pwdInput.setValue(password)
        this.submitBtn.waitForExist()
        this.submitBtn.click()
        this.tabsNav.waitForExist()
    }

    userLogout() {
        this.userIcon.waitForExist()
        this.userIcon.click()
        this.logoutLink.waitForExist()
        this.logoutLink.click()
        this.pageNav.waitForExist()
    }
}

export default new LoginPage()