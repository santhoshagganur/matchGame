import {Component} from 'react'
import Thumbnails from '../Thumbnails'
import TabItem from '../TabItem'
import './index.css'

class MatchGame extends Component {
  state = {activeTab: 'FRUIT'}

  changeActiveTab = id => {
    this.setState({activeTab: id})
  }

  getThumbnailsList = () => {
    const {activeTab} = this.state
    const {imagesList} = this.props
    return imagesList.filter(each => each.category === activeTab)
  }

  getMatchImage = () => {
    const {imagesList} = this.props
    const imageIndex = Math.floor(Math.random() * imagesList.length)
    const imageDetails = imagesList[imageIndex]
    console.log(imageDetails)
    return (
      <img src={imageDetails.imageUrl} alt="match" className="match-image" />
    )
  }

  render() {
    const {tabsList} = this.props

    const thumbnails = this.getThumbnailsList()

    console.log(thumbnails)

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
            {this.getMatchImage}
            <ul className="tabs-container">
              {tabsList.map(each => (
                <TabItem
                  eachItem={each}
                  key={each.tabId}
                  changeActiveTab={this.changeActiveTab}
                  activeTab={this.state}
                />
              ))}
            </ul>

            <ul className="thumbnails-container">
              {thumbnails.map(each => (
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
