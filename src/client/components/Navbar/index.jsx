// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

// $FlowFixMe
const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
`;

const Headline = styled.div`
  padding: 16px 16px 18px;
  max-width: 950px;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  :active,
  :hover,
  :visited,
  :link {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }
`;

const Navbar = () => (
  <HeaderWrapper>
    <Headline>
      <Flex alignItems="center">
        <Title>
          <StyledLink href="/">Remote Seer</StyledLink>
        </Title>
      </Flex>
    </Headline>
  </HeaderWrapper>
);

export default Navbar;
