import LoginPage from '../pageobjects/pages/LoginPage'
import Base from '../pageobjects/Base'
import allureReporter from '@wdio/allure-reporter'


describe('E2E Test - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        allureReporter.addFeature('Feature: UnSuccessful Login')
        LoginPage.open()
        LoginPage.homePagetoLogin()
        Base.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.successfulLogin('invalid', 'invalid')
        const invalidvalidation = $('.alert-error')
        expect(invalidvalidation).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        allureReporter.addFeature('Feature: Successful Login')
        LoginPage.open()
        LoginPage.homePagetoLogin()
        Base.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.unsuccessfulLogin('username', 'password')
    })

    it('Should logout from app', () => {
        allureReporter.addFeature('Feature: Successful Logout')
        LoginPage.open()
        LoginPage.userLogout()
        Base.pauseShort()
    })
})