import React, { Component } from 'react'


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
    console.log(this.state);
    return(
      <div>
        Search!
      </div>)
  }
}

export default Search
