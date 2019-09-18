// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import { CATEGORIES_META } from '../../../server/consts/categories';

// $FlowFixMe
const HeaderWrapper = styled.div`
  background-color: #212429;
  width: 100%;
`;

const Headline = styled.div`
  padding: 16px 12px 18px;
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

const DropdownButton = styled.span`
  cursor: pointer;
  color: white;
  padding: 0 0 16px;
  font-size: 16px;
`;

const DropdownContent = styled.ul`
  display: none;
  padding: 12px;
  position: absolute;
  left: -125px;
  background-color: #f1f1f1;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style-type: none;
  padding-inline-start: 12px;
  transition: all 0.1s;
  border-radius: 5px;
  overflow: hidden;
`;

const Item = styled.li`
  font-size: 13px;
  padding: 12px 16px;
  a {
    color: black;
    text-decoration: none;
    display: block;
  }
  a:hover {
    font-weight: 900;
  }
`;

const Dropdown = styled.div`
  position: relative;

  :hover .dropdown-content {
    display: inherit;
  }
`;

const Navbar = () => (
  <HeaderWrapper>
    <Headline>
      <Flex alignItems="center" justifyContent="space-between">
        <a href="/">
          <MobileImg src="/images/logo-mobile.png" alt="Remote Seer" />
          <TabletImg src="/images/logo.png" alt="Remote Seer" />
        </a>
        <Dropdown>
          <DropdownButton className="dropbtn">Categories</DropdownButton>
          <DropdownContent className="dropdown-content">
            {Object.keys(CATEGORIES_META).map(cat => (
              <Item key={cat}>
                <a href={CATEGORIES_META[cat].link}>{CATEGORIES_META[cat].title}</a>
              </Item>
            ))}
          </DropdownContent>
        </Dropdown>
        {/* <Item>Jobs in Development</Item>
        <Item>All Remote Jobs</Item> */}
      </Flex>
    </Headline>
  </HeaderWrapper>
);

export default Navbar;
