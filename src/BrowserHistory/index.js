import {Component} from 'react'

import '../BrowserHistoryItems'

import './index.css'

class BrowserHistory extends Component {
  state = {historyList: initialHistoryList} //how can i set history list from app.js
  
  render() {
    const {historyList} = this.state
    const {initialHistoryList} = this.props
    return (
      <div className="browser-history-container">
        <div className="history-header-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-bar-container">
            <div className="search-logo-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <input
              type="search"
              className="search-bar"
              placeholder="Search history"
            />
          </div>
        </div>

        <div className="history-bottom-section">
          <ul className="history-card-container">
            {initialHistoryList.map(each => (
              <BrowserHistory key={each.id} historyItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
