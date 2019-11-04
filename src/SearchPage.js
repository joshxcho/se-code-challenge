import React, { Component } from 'react'
import axios from 'axios';

import Search from './Search'
import Button from './Button'
import DisplayComic from './DisplayComic'

export default class SearchPage extends Component {

  state ={
    searchValue: '',
    searchedComic: {},
    isSearched: false
  }

  updateSearchValue =(e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  fetchSearchResult = () => {
    console.log('ouch')
    const {searchValue} = this.state;
    const endpoint = `https://xkcd.now.sh/?comic=${searchValue}`;
    axios.get(endpoint)
    .then(data => this.setState({searchedComic: data.data, isSearched: true}))
    .catch(err => console.error(err))
  }
  render() {
    const {searchValue, searchedComic, isSearched} = this.state
    return (
      <div>
        <Search placeholderText="" searchValue={searchValue} updateSearchValue={this.updateSearchValue} />
        <Button handleClick={this.fetchSearchResult} value="SEARCH" />
        {isSearched &&
        <DisplayComic image={searchedComic.img} alt={searchedComic.title} title={searchedComic.alt}/>
        }
      </div>
    )
  }
}
