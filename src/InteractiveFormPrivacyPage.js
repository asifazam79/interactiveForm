import React from 'react'
import { Field, reduxForm } from 'redux-form'

const WizardFormSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="privacyForm">
      <div>
        <label>
          <Field name="updates" component="input" type="checkbox" value="Receive updates about Tray.io product by email" />{' '}
          Receive updates about Tray.io product by email
        </label>
        <label>
          <Field name="communications" component="input" type="checkbox" value="Receive communication by email for other products created by Tray.io team" />{' '}
          Receive communication by email for other products created by Tray.io team
        </label>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardFormSecondPage)
