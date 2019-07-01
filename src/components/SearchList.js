import React from 'react'
import { Card } from 'semantic-ui-react'
import SearchListItem from './SearchListItem'


const SearchList = props => {
  const bus = props.search
  const generateItem = () => (
    bus.items.map(item => (
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
        <Card.Header>{bus.company}</Card.Header>
        <Card.Description>{bus.target_date}</Card.Description>
        <Card.Description>{bus.url}</Card.Description>
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
