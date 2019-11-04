import React, {Component} from 'react'
import axios from 'axios'

import DisplayComic from './DisplayComic'

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
       <DisplayComic image={latestComic.img} alt={latestComic.title} title={latestComic.alt}/>
      </div>
    );
  }
}

export default HomePage