import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordForm extends Component {
  state = {websiteInput: '', usernameInput: '', passwordInput: ''}

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitFormEle = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const {onSubmitNewPassword} = this.props
    const newObj = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    onSubmitNewPassword(newObj)
    this.setState({websiteInput: '', usernameInput: '', passwordInput: ''})
  }

  render() {
    const {websiteInput, usernameInput, passwordInput} = this.state

    return (
      <div className="password-form-container">
        <form className="form-ele" onSubmit={this.onSubmitFormEle}>
          <h3 className="form-heading">Add New Password</h3>
          <div className="input-container">
            <img
              className="input-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              className="input-ele"
              type="text"
              placeholder="Enter Website"
              value={websiteInput}
              onChange={this.onChangeWebsiteInput}
            />
          </div>

          <div className="input-container">
            <img
              className="input-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              className="input-ele"
              type="text"
              placeholder="Enter Username"
              value={usernameInput}
              onChange={this.onChangeUsernameInput}
            />
          </div>

          <div className="input-container">
            <img
              className="input-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              className="input-ele"
              type="password"
              placeholder="Enter Password"
              value={passwordInput}
              onChange={this.onChangePasswordInput}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <img
          className="form-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
      </div>
    )
  }
}

export default PasswordForm
