import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NewPost = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 20px;
  right: 20px;

  border-radius: 50%;
	width: 70px;
	height: 70px; 

  padding: 10px;
  background: #246faf;
  text-decoration: none;
  color: white;
  font-size: 60px;
`;

export default class NewPostLink extends React.Component {
  render() {
    return (
        <NewPost to='/create'>
          +
      </NewPost>
    )
  }
}
