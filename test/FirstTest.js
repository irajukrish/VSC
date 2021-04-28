describe('My First Test', () => {

    it('Get Element Text', () => {
        browser.url('https://www.amazon.in/')
        //browser.pause(3000)
        expect(browser).toHaveUrl('https://www.amazon.in/')
        const text = $("(//a[@class='nav_a'])[1]").getText()
        const element = $("(//a[@class='nav_a'])[1]")
        element.waitForExist()
        expect(element).toHaveText('About Us')
        console.log('The Text is: ' + text)
    })


})