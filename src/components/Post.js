import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
flex: 1 1 calc(20% - 8px);
`;

export default class Post extends React.Component {

  render () {
    return (
      <Container className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.post.description}&nbsp;
        </div>
      </Container>
    )
  }
}
