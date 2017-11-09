import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import CreatePost from './components/CreatePost'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink} from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'

import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  background-color: white;
`;


const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9syw4gedqd10109vtfu3sdv' })

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('graphcoolToken')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

const client = new ApolloClient({ 
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <Container>
        <Route exact path='/' component={App} />
        <Route path='/create' component={CreatePost} />
        <Route path='/login' component={LoginUser} />
        <Route path='/signup' component={CreateUser} />
      </Container>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
