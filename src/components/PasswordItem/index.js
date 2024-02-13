import './index.css'

const PasswordItem = props => {
  const {passwordDetails, checkboxValue, onClickDeleteBtn} = props
  const {id, website, username, password} = passwordDetails
  const initialLetter = website[0]

  const onClickDel = () => {
    onClickDeleteBtn(id)
  }

  return (
    <li className="list-item">
      <p className="initial-letter">{initialLetter}</p>
      <div className="password-contents">
        <p className="passwords">{website}</p>
        <p className="passwords">{username}</p>
        {checkboxValue ? (
          <p className="passwords">{password}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        data-testid="delete"
        onClick={onClickDel}
        className="delete-btn"
        type="button"
      >
        <img
          className="del-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
