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
        {this.props.pageDataQuery.Page.title}
        {this.props.pageDataQuery.Page.description}
      </Container>
    )
  }
}

const PAGE_DATA_QUERY = gql `
query pageDataQuery {
    Page(id: "cj9t3opet0sau0165vue7s22r") {
      title
      description
    }
}
`

export default graphql(PAGE_DATA_QUERY, { name: 'pageDataQuery'})(PageData)
