import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordContainer extends Component {
  state = {searchInput: '', checkboxValue: false}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeCheckbox = () => {
    // console.log(event.target.value)
    this.setState(prev => ({
      checkboxValue: !prev.checkboxValue,
    }))
  }

  render() {
    const {searchInput, checkboxValue} = this.state
    const {passwordList, onClickDeleteBtn} = this.props
    const filteredList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="passwords-container">
        <div className="password-header-container">
          <div className="password-heading-container">
            <h3 className="password-heading">Your Passwords</h3>
            <p className="password-count">{passwordList.length}</p>
          </div>
          <div className="password-input-container">
            <img
              className="password-search-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              className="password-input-ele"
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="hr-ele" />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.onChangeCheckbox}
          />
          <label className="label-ele" htmlFor="showPassword">
            Show Passwords
          </label>
        </div>
        {filteredList.length === 0 ? (
          <>
            <img
              className="no-password-image"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="no-password">No Passwords</p>
          </>
        ) : (
          <ul className="password-list-items">
            {filteredList.map(eachItem => (
              <PasswordItem
                onClickDeleteBtn={onClickDeleteBtn}
                key={eachItem.id}
                checkboxValue={checkboxValue}
                passwordDetails={eachItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default PasswordContainer
