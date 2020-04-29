import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from './InteractiveFormUserPage'
import WizardFormSecondPage from './InteractiveFormPrivacyPage'
import WizardFormThirdPage from './InteractiveFormDonePage'
import './App.css'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      pageName: ''
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  setPageName() {
    if(this.page === 1) {
      this.pageName = 'User'
    }
    if(this.page === 2) {
      this.pageName = 'Privacy'
    }
    if(this.page === 3) {
      this.pageName = 'Done'
    }
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="pageHolder">
        <h2>Interactive Form</h2>
        <ul className="pageTabs">
          <li className={page === 1 ? 'highlight' : ''}>User</li>
          <li className={page === 2 ? 'highlight' : ''}>Privacy</li>
          <li className={page === 3 ? 'highlight' : ''}>Done</li>
        </ul>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
