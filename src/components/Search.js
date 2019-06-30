import React, { Component } from 'react'
import SearchList from './SearchList'


class Search extends Component {
  state = {
    searches:[]
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/searches', {
      method:'GET',
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    }).then(r => r.json())
    .then(searches => {
      this.setState({ searches })
    })
  }

  render() {
    const generateSearchList = () => {
      debugger
      
      this.state.map(search => {
        <SearchList
          search={search}
        />
      })
    }
    console.log(this.state);
    return(
      <div>
      {generateSearchList()}
      </div>)
  }
}

export default Search
