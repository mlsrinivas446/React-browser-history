import './index.css'

const BrowserHistoryItems = props => {
  const {historyItem} = props
  const {title, domainUrl, logoUrl, timeAccessed} = historyItem
  return (
    <li className="history-container">
      <div className="history">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>

      <button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
          onClick={this.onDeleteHistory}
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItems
