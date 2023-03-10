import './index.css'

const Thumbnails = props => {
  const {eachItem, getUpdatedScore} = props
  const {thumbnailUrl, id} = eachItem

  const changeScore = () => {
    getUpdatedScore(id)
  }

  return (
    <button type="button" className="list-button" onClick={changeScore}>
      <li>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </li>
    </button>
  )
}

export default Thumbnails
