import feedbackPage from '../pageobjects/pages/feedbackPage'

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {

        feedbackPage.openFeedbackPage()
        feedbackPage.waitforFeedbackpage()
    })

    it('Should submit feedback form', () => {
        feedbackPage.submitFeedbackform()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')

    })


})