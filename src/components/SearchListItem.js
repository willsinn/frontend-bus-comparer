import React from 'react'

const SearchListItem = props => {
  console.log(props);
  const bus = props.item
  return(
    <>
    <Card>
      <Card.Content>
        <Card.Description>
        <span>Price: ${bus.price} </span>
        <span>Time: {bus.bus_time} </span>
        <span>Location: {bus.location} </span>
        <span>Location: {bus.location} </span>
        </Card.Description>
      </Card.Content>
    </Card>
    </>
  )
}


export default SearchListItem
