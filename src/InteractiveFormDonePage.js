import React from 'react'
import { reduxForm } from 'redux-form'

const WizardFormThirdPage = props => {
  return (
    <div class="submit Message donePage">
      <span class="correctSubmissionIcon"></span>
      <p>Please verify your email address. You should have received an email from us already</p>
    </div>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardFormThirdPage)
