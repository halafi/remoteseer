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
  ${mq.TABLET`
    max-width: 1220px;
  `}
`;

const DropdownButton = styled.span`
  cursor: pointer;
  color: white;
  padding: 0 0 16px;
  font-size: 16px;
`;

const Arrow = styled.span`
  position: absolute;
  left: calc(50% - 5px);
  right: 50%;
  top: 0;
  width: 10px;
  height: 10px;
  display: block;
  background: #f1f1f1;
  transform: translateY(-50%) rotate(45deg);
`;

const DropdownContent = styled.ul`
  display: none;
  padding: 12px;
  position: absolute;
  left: ${({ shift }) => `-${shift}px`};
  background-color: #f1f1f1;
  min-width: ${({ minWidth }) => `${minWidth}px`};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style-type: none;
  padding-inline-start: 12px;
  transition: all 0.1s;
  border-radius: 5px;
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
  margin: 0 10px;
  position: relative;

  :hover .dropdown-content {
    display: inherit;
  }
`;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;
//   padding: 0 0 16px;
//   font-size: 16px;
// `;

// const Menu = styled(Flex)`
//   div {
//     margin: 0 12px;
//   }
// `;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const CaptionWrapper = styled(Flex)`
  display: none;
  color: #fff;
  margin-left: 14px;
  ${mq.MIDDLE_MOBILE`
    display: inherit;
  `}
`;

const Caption = styled.span`
  font-size: 22px;
`;

// const SubTitle = styled.span`
//   top: 18px;
//   font-size: 11px;
//   letter-spacing: 0.7px;
// `;

const Navbar = () => (
  <HeaderWrapper>
    <Headline>
      <Flex alignItems="center" justifyContent="space-between">
        <a href="/">
          <Flex alignItems="center">
            <Logo src="/images/icons/android-chrome-192x192.png" alt="RemoteSeer" />
            <CaptionWrapper flexDirection="column">
              <Caption>Remote Seer</Caption>
              {/* <SubTitle>find work from anywhere</SubTitle> */}
            </CaptionWrapper>
          </Flex>
        </a>
        <Flex>
          <Dropdown>
            <DropdownButton className="dropbtn">Categories</DropdownButton>
            <DropdownContent className="dropdown-content" shift={55} minWidth={165}>
              <Arrow />
              {Object.keys(CATEGORIES_META)
                .slice(0, 5)
                .map(cat => (
                  <Item key={cat}>
                    <a href={CATEGORIES_META[cat].link}>{CATEGORIES_META[cat].title}</a>
                  </Item>
                ))}
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownButton className="dropbtn">Community</DropdownButton>
            <DropdownContent className="dropdown-content" shift={20} minWidth={90}>
              <Arrow />
              <Item>
                <a href="https://twitter.com/remote_seer" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Item>
              <Item>
                <a type="application/rss+xml" href="https://remoteseer.net/remote-jobs.rss">
                  RSS Feed
                </a>
              </Item>
            </DropdownContent>
          </Dropdown>
          {/* <div>
            <Link href="/companies-hiring-remotely/">Companies</Link>
          </div> */}
        </Flex>
        {/* <Item>Jobs in Development</Item>
        <Item>All Remote Jobs</Item> */}
      </Flex>
    </Headline>
  </HeaderWrapper>
);

export default Navbar;
