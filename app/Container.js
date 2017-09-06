import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'

import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  return fetch('http://localhost:8080/query', {
    method: 'POST',
    mode: 'cors',
    headers: {
      // Add authentication and other headers here
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => response.json())
}

const source = new RecordSource()
const store = new Store(source)
const network = Network.create(fetchQuery)

const environment = new Environment({ network, store })

export default class Container extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContainerQuery {
            hero {
              name
              appearsIn
            }
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>
                <div>{props.hero.name} appeared in:</div>
                <ul>
                  {props.hero.appearsIn.map( (appearance, i) => (
                    <li key={i}>{appearance}</li>
                  ))}
                </ul>
              </div>
            )
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}
