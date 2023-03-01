import {Component} from 'react'
import Thumbnails from '../Thumbnails'
import './index.css'

class MatchGame extends Component {
  state = {activeTab: '', thumbnailsList: []}

  changeModule = tabId => {
    this.setState({activeTab: tabId})
  }

  getActiveThumbnails

  render() {
    const {tabsList, imagesList} = this.props

    const activeThumbnails = this.getActiveThumbnails()

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="nav-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="scores-container">
              <p className="display-score">
                Score: <span className="score"> 0 </span>
              </p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="show-timer"> 60 sec </p>
            </div>
          </div>
          <div className="bottom-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png"
              alt="match"
              className="match-image"
            />
            <ul className="tabs-container">
              {tabsList.map(each => (
                <li className="tab-item">
                  <button
                    type="button"
                    className="tab-button"
                    onClick={this.changeModule(each.tabId)}
                  >
                    {each.displayText}
                  </button>
                </li>
              ))}
            </ul>

            <ul className="thumbnails-container">
              {imagesList.map(each => (
                <Thumbnails eachItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchGame
