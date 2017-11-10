import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid green;
`;

class PageData extends React.Component {

  render () {
    if (this.props.pageDataQuery.loading) {
      return (<div>Loading</div>)
    }

    return (
      <Container>
      <ul>
      {this.props.pageDataQuery.allPages.map((data) =>
        <li>
        {data.title}
        </li>
      )}
      </ul>
      </Container>
    )
  }
}

const PAGE_DATA_QUERY = gql`
query pageDataQuery {
  allPages {
    id
    title
  }
}
`

export default graphql(PAGE_DATA_QUERY, { name: 'pageDataQuery'})(PageData)
