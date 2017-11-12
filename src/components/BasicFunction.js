import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Container = styled.div`

`;

class basicFunction extends React.Component {

  render () {
    if (this.props.basicFunctionQuery.loading) {
      return (<div>Loading</div>)
    }

    return (
      <Container>
        {this.props.basicFunctionQuery.basicFunction.totalPosts}
      </Container>
    )
  }
}

const BASIC_FUNCTION_QUERY = gql`
query basicFunctionQuery {
  basicFunction {
    totalPosts
  }
}
`

export default graphql(BASIC_FUNCTION_QUERY, { name: 'basicFunctionQuery'})(basicFunction)