import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  background: #129974;
  color: white;
  line-height: 28px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

class PageData extends React.Component {

  render () {
    if (this.props.pageDataQuery.loading) {
      return (<div>Loading</div>)
    }

    return (
      <Container>
        <Title>{this.props.pageDataQuery.Page.title}</Title>
        <Description>{this.props.pageDataQuery.Page.description}</Description>
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
