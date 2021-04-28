
describe('First Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('https://www.amazon.in/')
        //browser.pause(3000)
        expect(browser).toHaveUrl('https://www.amazon.in/')
        expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('Link should be visible', () => {

        const a = $('#nav-logo-sprites')
        a.waitForExist()
        expect(a).toBeVisible()
    })

    it('Amazon Search field should be visible', () => {

        const search = $('#twotabsearchtextbox')
        search.waitForExist()
        expect(search).toBeVisible
        //search.setValue('FAN')
    })

    it('Check Link Value', () => {
        const link = $("(//a[@class='nav_a'])[1]")
        expect(link).toHaveLink('https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer')

    })
})