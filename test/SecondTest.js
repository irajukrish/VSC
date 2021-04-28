import { short, medium, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('Second Test', () => {
    it('Get Element Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        expect(browser).toHaveUrl('https://devexpress.github.io/testcafe/example/')

        const submitbtn = $('#submit-button')
        submitbtn.waitForExist()
        expect(submitbtn).toHaveAttrContaining('type', 'submit')

    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshots', () => {
        browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(short)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})