import {Component} from 'react'
import Thumbnails from '../Thumbnails'
import TabItem from '../TabItem'
import './index.css'

class MatchGame extends Component {
  state = {
    activeTab: 'FRUIT',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    score: 0,
    timer: 60,
    isGameEnd: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.changeTimer, 1000)
  }

  changeTimer = () => {
    const {timer} = this.state
    if (timer !== 0) {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameEnd: true})
    }
  }

  changeActiveTab = id => {
    this.setState({activeTab: id})
  }

  restartGame = () => {
    this.setState({
      activeTab: 'FRUIT',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      score: 0,
      timer: 60,
      isGameEnd: false,
    })
    this.timerId = setInterval(this.changeTimer, 1000)
  }

  getThumbnailsList = () => {
    const {activeTab} = this.state
    const {imagesList} = this.props
    return imagesList.filter(each => each.category === activeTab)
  }

  getUpdatedScore = id => {
    const {imagesList} = this.props
    const {imgUrl} = this.state
    const result = imagesList.filter(each => each.id === id)
    const {imageUrl} = result[0]
    if (imageUrl === imgUrl) {
      const newImageUrl =
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
      this.setState(prevState => ({
        imgUrl: newImageUrl,
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameEnd: true})
    }

    const imageIndex = Math.floor(Math.random() * imagesList.length)
    const imageDetails = imagesList[imageIndex]

    this.setState({imgUrl: imageDetails.imageUrl})
  }

  render() {
    const {tabsList} = this.props
    const {imgUrl, score, timer, isGameEnd} = this.state

    const thumbnails = this.getThumbnailsList()

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
                Score: <span className="score"> {score} </span>
              </p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="show-timer"> {timer} sec </p>
            </div>
          </div>
          {!isGameEnd && (
            <div className="bottom-container">
              <img src={imgUrl} alt="match" className="match-image" />
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
                  <Thumbnails
                    eachItem={each}
                    key={each.id}
                    getUpdatedScore={this.getUpdatedScore}
                  />
                ))}
              </ul>
            </div>
          )}
          {isGameEnd && (
            <div className="bottom-container">
              <div className="score-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                  alt="trophy"
                  className="trophy"
                />
                <h1 className="yours-score">
                  YOUR SCORE <span className="your-score"> {score} </span>
                </h1>
                <button
                  className="play-again"
                  type="button"
                  onClick={this.restartGame}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                    alt="reset"
                  />
                  PLAY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
