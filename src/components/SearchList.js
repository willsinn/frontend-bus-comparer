import React from 'react'
import { Card } from 'semantic-ui-react'






const SearchList = props => {
  // const generateList = () => {
  //   debugger
  // }
  const bus = props.search
  return (
    <>
      <br/>
      <Card>
      <Card.Content>
        <Card.Header>{bus.company}</Card.Header>
        <Card.Description>{bus.target_date}</Card.Description>
        <Card.Description>{bus.url}</Card.Description>
      </Card.Content>
      </Card>
      <br/>
    </>
  )
}

export default SearchList
