import React from 'react'
import Post from '../components/Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`;

class ListPage extends React.Component {

  render () {
    if (this.props.allPostsQuery.loading) {
      return (<div>Loading</div>)
    }
    return (
      <Container>
          {this.props.allPostsQuery.allPosts.map((post) =>
            <Post key={post.id} post={post} />
          )}
      </Container>
    )
  }
}

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`

export default graphql(ALL_POSTS_QUERY, { name: 'allPostsQuery'})(ListPage)
