import { short, medium, long } from '../lib/timeouts'

describe('Third Test', () => {

    it('Inputs field', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Raju Krish')
        input.pause(short)
        // input.clearValue()
        // input.pause(short)
        // input.addValue('Dhanush Raj')
        // input.pause(short)
    })

    it('Click action', () => {
        const click = $('#populate')
        click.waitForExist()
        click.click()
        click.pause(short)
    })

    it('Checkbox and Radio Button', () => {
        const radio = $('#windows')
        radio.click()
        radio.pause(short)
        const checkbox = $('#traffic-markup-analysis')
        checkbox.click()
        checkbox.pause(short)


    })

    it('Select Box', () => {
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        select.pause(short)
    })
})