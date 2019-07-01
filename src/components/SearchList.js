import React from 'react'
import SearchListItem from './SearchListItem'


const SearchList = props => {
  const busList = props.search
  const generateItem = () => (
    busList.items.map(item => (
      <SearchListItem
        key={item.id}
        item={item}
      />
    ))
  )
  return (
    <div className="search-list">
      <div>{busList.company}</div>
      <div>{busList.target_date}</div>
      <div>{busList.url}</div>
      <div>
        {generateItem()}
      </div>
    </div>
  )
}

export default SearchList
