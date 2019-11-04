import React, {Component} from 'react'
import axios from 'axios'

class HomePage extends Component {
  state = {
    latestComic: {}
  }

  componentDidMount() {
    this.fetchLatestComic()
  }

  fetchLatestComic = () => {
    axios.get('https://xkcd.now.sh/?comic=latest')
    .then(data => this.setState({latestComic: data.data}))
    .catch(err => console.error(err))
  }

  render() {
    const {latestComic} = this.state
    return (
      <div>
       <img className="latestImage" src={latestComic.img} alt={latestComic.title} title={latestComic.alt} ></img>
      </div>
    );
  }
}

export default HomePage