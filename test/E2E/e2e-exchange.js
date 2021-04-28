describe('E2E - Currency Exchange', () => {
    it('Should log into the application', () => {
        browser.url('http://zero.webappsecurity.com')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        browser.pause(3000)
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click()
        $('.nav-tabs').waitForExist()
    })

    it('Should make currency exchange', () => {

        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        $('#tabs > ul > li:nth-child(3) > a').waitForExist()
        $('#tabs > ul > li:nth-child(3) > a').click()
        $('#pc_currency').waitForExist()
        const selectcurrency = $('#pc_currency')
        selectcurrency.selectByAttribute('value', 'JPY')
        $('#pc_amount').waitForExist()
        $('#pc_amount').setValue('5000')
        $('#pc_inDollars_true').click()
        $('#purchase_cash').click()
        const successfulpurchase = $('#alert_content')
        expect(successfulpurchase).toHaveText('Foreign currency cash was successfully purchased.')
    })
})