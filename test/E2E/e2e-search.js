describe('E2E - Search', () => {
    it('Should load homepage', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#searchTerm').waitForExist()

    })

    it('Should submit searchbox', () => {
        $('#searchTerm').setValue('bank')
        browser.keys('Enter')
        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })


})