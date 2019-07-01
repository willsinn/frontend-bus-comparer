import React from 'react'
import SearchList from './SearchList'


const Search = props => {
  const generateSearchList = () => (
      props.searches.map(search => {
        return (
          <SearchList
            key={search.id}
            search={search}
          />
        )
      })
    )
  return (
    <>
    {generateSearchList()}
    </>
  )
}
export default Search
