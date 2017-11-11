import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid blue;
`;

class basicFunction extends React.Component {

  render () {
    if (this.props.basicFunctionQuery.loading) {
      return (<div>Loading</div>)
    }

    return (
      <Container>
        {this.props.basicFunctionQuery.dataFunction.message}
      </Container>
    )
  }
}

const BASIC_FUNCTION_QUERY = gql`
query basicFunctionQuery {
  dataFunction {
    message
  }
}
`

export default graphql(BASIC_FUNCTION_QUERY, { name: 'basicFunctionQuery'})(basicFunction)