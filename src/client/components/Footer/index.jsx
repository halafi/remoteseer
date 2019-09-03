// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import { CATEGORIES_META, DEV_CATEGORIES_META } from '../../../server/consts/categories';

const FooterWrapper: any = styled(Box)`
  color: #ffffff;
  background-color: #212429;
  width: 100%;
  font-size: 14px;
  a {
    color: #ffffff;
  }
`;

const FooterContent = styled(Flex)`
  margin: 0px auto;
  padding: 0 16px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const FooterHtml = styled.footer`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #8a8b8b;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin-right: 4px;
`;

const Icon = styled.img`
  padding: 8px;
  width: 20px;
  height: 20px;
`;

const List = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent flexDirection="column">
      <Flex flexDirection={['column', null, 'row']} justifyContent="space-between" py={4} mt={2}>
        <Flex flexDirection="column">
          <a href="/">Remote Jobs</a>
          {Object.keys(CATEGORIES_META).map(cat => {
            if (cat === 'development') {
              return (
                <>
                  <a key={cat} href={CATEGORIES_META[cat].link}>
                    Remote {CATEGORIES_META[cat].title} Jobs
                  </a>
                  <List>
                    {Object.keys(DEV_CATEGORIES_META).map(devcat => (
                      <li>
                        <a key={devcat} href={DEV_CATEGORIES_META[devcat].link}>
                          Remote {DEV_CATEGORIES_META[devcat].title}
                          {devcat !== 'devops' ? ' Development' : ''} Jobs
                        </a>
                      </li>
                    ))}
                  </List>
                </>
              );
            }
            return (
              <a key={cat} href={CATEGORIES_META[cat].link}>
                Remote {CATEGORIES_META[cat].title} Jobs
              </a>
            );
          })}
        </Flex>
        <Box mt={[4, null, 0]}>
          <a href="#">Back to top ↑</a>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" py={2}>
        <Disclaimer>
          By using the site you agree that we use cookies for analysis of visitor behaviour.
        </Disclaimer>
        <a href="https://twitter.com/remote_seer" target="_blank" rel="noopener noreferrer">
          <Icon src="/images/icons/twitter.svg" alt="twitter" />
        </a>
      </Flex>
      <FooterHtml>
        <span>© 2019 Made with love working remotely</span>
        <a href="mailto:hello@remoteseer.net">Contact</a>
      </FooterHtml>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;