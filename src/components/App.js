import React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ListPage from './ListPage'
import NewPostLink from './NewPostLink'
import BasicFunction from './BasicFunction'
import PageData from '../components/PageData'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  
  font-size: 14px;
  background: #27ae60;
  width: 100%;
  padding: 10px 0 0;
  color: white;

`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  span {
    border: 2px solid white;
    border-radius: 10px;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #969696;
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
        <Header>
          <PageData />
          <Name>
            <strong>Hi {this.props.loggedInUserQuery.loggedInUser.name}!</strong>
            <BasicFunction />
          </Name>
        </Header>
        <ButtonContainer>
          <span
            className='dib white pa3 pointer dim'
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
      name
    }
  }
`

export default graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
  options: {fetchPolicy: 'network-only'}
})(withRouter(App))
