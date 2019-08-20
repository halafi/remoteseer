// @flow
import React from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const Container: any = styled(Flex)`
  height: 100vh;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

const Description = styled(Box)`
  text-align: center;
  width: 790px;
`;

const Subheader = styled.h2`
  font-size: 19px;
  font-weight: 400;
`;

const Root = () => (
  <Container alignItems="center" flexDirection="column">
    <h1>Remote Seer</h1>
    <Description>
      <Subheader>
        Find remote work and work from anywhere. We aggregate all the providers we can to bring you
        the <strong>largest listing of remote jobs</strong>. All remote jobs in one place.
      </Subheader>
    </Description>
    <img alt="work remotely" src="images/work_remotely.svg" />
  </Container>
);

export default hot(module)(Root);
