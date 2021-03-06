import React, {Component} from 'react'
import axios from 'axios'

import './HomePage.css'

import NavBar from '../NavBar/NavBar'
import DisplayComic from '../DisplayComic/DisplayComic'

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
      <React.Fragment>
       <NavBar />
       <DisplayComic value="latestImage" image={latestComic.img} alt={latestComic.title} title={latestComic.alt}/>
      </React.Fragment>
    );
  }
}

export default HomePage