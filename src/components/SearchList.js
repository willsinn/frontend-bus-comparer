import React from 'react'
import { Card } from 'semantic-ui-react'
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
    <>
      <br/>
      <Card>
      <Card.Content>
        <Card.Header>{busList.company}</Card.Header>
        <Card.Description>{busList.target_date}</Card.Description>
        <Card.Description>{busList.url}</Card.Description>
        <Card>
          {generateItem()}
        </Card>
      </Card.Content>
      </Card>
      <br/>
    </>
  )
}

export default SearchList
