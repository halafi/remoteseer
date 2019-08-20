// @flow
import React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const Container: any = styled(Flex)`
  height: 100vh;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

const Root = () => (
  <Container alignItems="center" flexDirection="column">
    <h1>Remote Seer</h1>
    <img alt="work remotely" src="images/work_remotely.svg" />
  </Container>
);

export default hot(module)(Root);
