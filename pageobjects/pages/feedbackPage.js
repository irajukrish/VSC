import { browser } from '../../lib/config';
import Page from '../page';

class feedbackPage extends Page {

    openFeedbackPage() {
        return super.openFeedbackPage();
    }

    get feebackTitle() { return $('#feedback-title') }
    get namet() { return $('#name') }
    get email() { return $('#email') }
    get subject() { return $('#subject') }
    get comment() { return $('#comment') }
    get sendMessage() { return $('.btn-signin') }

    waitforFeedbackpage() {
        this.feebackTitle.waitForExist()
    }

    submitFeedbackform() {
        this.namet.waitForExist()
        this.namet.setValue('Raju Krish')
        this.email.waitForExist()
        this.email.setValue('rajukrish@mail.com')
        this.subject.waitForExist()
        this.subject.setValue('Feedback RK')
        this.comment.waitForExist()
        this.comment.setValue('Could have been better')
        this.sendMessage.waitForExist()
        this.sendMessage.click()

    }
}

export default new feedbackPage()