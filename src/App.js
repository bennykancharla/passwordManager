import {Component} from 'react'

import PasswordForm from './components/PasswordForm'
import PasswordContainer from './components/PasswordContainer'

import './App.css'

class App extends Component {
  state = {passwordList: []}

  onSubmitNewPassword = newPasswordObj => {
    // console.log('fgffdf')
    this.setState(prev => ({
      passwordList: [...prev.passwordList, newPasswordObj],
    }))
  }

  onClickDeleteBtn = id => {
    const {passwordList} = this.state
    const remainingList = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: remainingList})
  }

  render() {
    const {passwordList} = this.state
    // console.log(passwordList)
    return (
      <div className="main-bg">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <PasswordForm onSubmitNewPassword={this.onSubmitNewPassword} />
        <PasswordContainer
          onClickDeleteBtn={this.onClickDeleteBtn}
          passwordList={passwordList}
        />
      </div>
    )
  }
}
export default App
