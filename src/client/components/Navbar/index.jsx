// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import mq from '../../services/mediaQuery';

// $FlowFixMe
const HeaderWrapper = styled.div`
  background-color: #212429;
  width: 100%;
`;

const Headline = styled.div`
  padding: 16px 16px 18px;
  max-width: 950px;
  margin: 0 auto;
`;

const MobileImg = styled.img`
  display: inherit;
  ${mq.TABLET`
    display:none;
  `}
`;

const TabletImg = styled.img`
  display: none;
  ${mq.TABLET`
    display:inherit;
  `}
`;

const Navbar = () => (
  <HeaderWrapper>
    <Headline>
      <Flex alignItems="center">
        <a href="/">
          <MobileImg src="/images/logo-mobile.png" alt="Remote Seer" />
          <TabletImg src="/images/logo.png" alt="Remote Seer" />
        </a>
      </Flex>
    </Headline>
  </HeaderWrapper>
);

export default Navbar;
