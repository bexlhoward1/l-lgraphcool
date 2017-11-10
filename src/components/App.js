import React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ListPage from './ListPage'
import NewPostLink from './NewPostLink'
import gql from 'graphql-tag'

import styled from 'styled-components';

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 14px;
  background-color: #8c8c8c;
  width: 100%;
  height: 50px;
  padding: 10px;
  color: white;

`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;


class App extends React.Component {

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

  _showLogin = () => {
    this.props.history.replace('/login')
  }

  _showSignup = () => {
    this.props.history.replace('/signup')
  }

  _isLoggedIn = () => {
    return this.props.loggedInUserQuery.loggedInUser && this.props.loggedInUserQuery.loggedInUser.id !== null
  }

  render () {

    if (this.props.loggedInUserQuery.loading) {
      return (<div>Loading</div>)
    }

    if (this._isLoggedIn()) {
      return this.renderLoggedIn()
    } else {
      return this.renderLoggedOut()
    }
  }

  renderLoggedIn() {
    return (
      <div>
        <UserDetails>
        <strong>Bex - </strong> &nbsp;ID: {this.props.loggedInUserQuery.loggedInUser.id}
        </UserDetails>
        <ButtonContainer>
          <span
            className='dib bg-red white pa3 pointer dim'
            onClick={this._logout}
          >
            Logout
          </span>
        </ButtonContainer>
        <ListPage />
        <NewPostLink />
      </div>
    )
  }

  renderLoggedOut() {
    return (
      <div>
        <div className='pv3'>
          <div className='w-100 pa4 flex justify-center'>
            <span
              onClick={this._showLogin}
              className='dib pa3 white bg-blue dim pointer'
            >
              Log in with Email
            </span>
          </div>
          <div className='w-100 flex justify-center'>
            <span
              onClick={this._showSignup}
              className='dib pa3 white bg-blue dim pointer'
            >
              Sign up with Email
            </span>
          </div>
        </div>
        <ListPage />
      </div>
    )
  }
}


const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

export default graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
  options: {fetchPolicy: 'network-only'}
})(withRouter(App))
