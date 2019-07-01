import React from 'react'

const SearchListItem = props => {
  console.log(props);
  const bus = props.item
  return(
      <div className="search-list-item">
        <span>Price: ${bus.price} </span>
        <span>Time: {bus.bus_time} </span>
        <span>Location: {bus.location} </span>
        <span>Location: {bus.location} </span>
      </div>
  )
}

export default SearchListItem
