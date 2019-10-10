import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import { CATEGORIES_META } from '../../../server/consts/categories';

const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  background-color: white;
  width: 100%;
`;

const Headline = styled.div`
  padding: 20px 0 22px;
  max-width: 950px;
  margin: 0 auto;
  ${mq.TABLET`
    max-width: 1120px;
    padding: 20px 12px 22px;
  `}
`;

const DropdownButton = styled.span`
  font-weight: 500;
  cursor: pointer;
  position: relative;
  color: #323232;
  padding: 0 0 16px;
  font-size: 12px;
  transition: ease all 0.3s;
  :before {
    content: '';
    width: 0;
    height: 1px;
    display: inline-block;
    vertical-align: top;
    background: #323232;
    transition: ease all 0.3s;
    position: absolute;
    bottom: 12px;
    left: 1px;
  }
  :hover:before {
    width: 60%;
  }
  :after {
    display: none;
    width: 0px;
    height: 0px;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0px;
    border-left: 0.3em solid transparent;
    ${mq.BIG_MOBILE`
      display: inline-block;
    `}
  }
  ${mq.BIG_MOBILE`
  font-size: 14px;
  `}
`;

const DropdownContent = styled.ul`
  display: none;
  padding: 12px;
  position: absolute;
  left: ${({ shift }) => `-${shift}px`};
  background-color: #ffffff;
  min-width: ${({ minWidth }) => `${minWidth - 24}px`};
  box-shadow: 0 8px 20px -8px rgba(84, 84, 120, 0.26);
  border: 1px solid #f7f7f8;
  z-index: 1;
  list-style-type: none;
  transition: all 0.1s;
  border-radius: 3px;
  ${mq.BIG_MOBILE`
    min-width: ${({ minWidth }) => `${minWidth}px`};
  `}
`;

const Item = styled.li`
  font-size: 12px;
  padding: 12px 8px;
  a {
    transition: transform 0.2s ease;
    color: #323232;
    text-decoration: none;
    display: block;
  }
  a:hover {
    color: #8756f6;
    transform: translate(2px, 0);
  }
  ${mq.BIG_MOBILE`
  font-size: 14px;
  padding: 12px 16px;

  `}
`;

const Dropdown = styled.div`
  position: relative;
  margin: 0 4px;

  :hover .dropdown-content {
    display: inherit;
  }
  :hover span:before {
    width: 60%;
  }

  ${mq.BIG_MOBILE`
    margin: 0 8px;
  `};
  ${mq.TABLET`
    margin: 0 12px;
  `};
`;

const Purple = styled.span`
  color: #8756f6;
`;

const Caption = styled.span`
  color: #323232;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  margin-left: 14px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  font-size: 18px;
  ${mq.TABLET`
  font-size: 24px;
  `}
`;

const Navbar = () => (
  <HeaderWrapper>
    <Headline>
      <Flex alignItems="center">
        <a href="/">
          <Flex alignItems="center" pr={20}>
            <Caption>
              <Purple>Remote</Purple>Seer
            </Caption>
            {/* <SubTitle>find work from anywhere</SubTitle> */}
          </Flex>
        </a>
        <Dropdown>
          <DropdownButton className="dropbtn">Categories</DropdownButton>
          <DropdownContent className="dropdown-content" shift={70} minWidth={195}>
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
          <DropdownContent className="dropdown-content" shift={20} minWidth={95}>
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
      </Flex>
    </Headline>
  </HeaderWrapper>
);

export default Navbar;
