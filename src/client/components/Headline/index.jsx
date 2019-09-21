// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';

const Main: any = styled(Box)`
  background-color: #fcfdfe;
  background-image: url('/images/cover-pattern.svg');
  width: 100%;
  border-bottom: 1px solid #ebeffb;
`;

const MainContent = styled(Flex)`
  margin: 30px auto;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const Description = styled(Box)`
  text-align: center;
  max-width: 790px;
`;

const Header = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 36px;
  line-height: 2.25;
  font-weight: 900;
  text-transform: uppercase;
  ${mq.TABLET`
    font-size: 54px;
`}
`;

const Subheader = styled.span`
  margin: 0 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  ${mq.TABLET`
    font-size: 19px;
  `}
`;

const Providers = styled(Flex)`
  margin-top: 12px;
`;

const Provider = styled.img`
  padding: 12px;
  width: 32px;
  height: 32px;
`;

const Link = styled.a`
  color: initial;
  text-decoration: underline;
`;

type Props = {
  jobsCount: number,
  headlineText: string,
};

const Headline = ({ jobsCount, headlineText }: Props) => (
  <Main>
    <MainContent alignItems="center" flexDirection="column">
      <Header>Remote Seer</Header>
      {/* <Image alt="work remotely" src="/images/digital_nomad.svg" /> */}
      <Description>
        <Subheader>
          Find remote work and <strong>work from anywhere</strong>. We aggregate providers and
          remote job boards to bring you the <strong>largest listing of remote jobs</strong>.
          <br />
          <br />
          <strong>
            {jobsCount} remote jobs{headlineText}
          </strong>{' '}
          from{' '}
          <Link href="/about/">
            <strong>well trusted sites</strong>
          </Link>
          :
        </Subheader>
        <Providers justifyContent="center" flexWrap="wrap">
          <Provider src="/images/github.svg" alt="Github jobs" />
          <Provider src="/images/stackoverflow.svg" alt="StackOverflow jobs" />
          <Provider src="/images/remoteok.ico" alt="RemoteOk jobs" />
          <Provider src="/images/wwr.png" alt="We Wrok Remotely jobs" />
          <Provider src="/images/dribbble.svg" alt="Dribbble jobs" />
          <Provider src="/images/justremote.png" alt="JustRemote jobs" />
          <Provider src="/images/remote_co.png" alt="Remote.co jobs" />
          <Provider src="/images/nodesk.png" alt="Nodesk jobs" />
          <Provider src="/images/cryptocurrencyjobs.png" alt="Cryptocurrency jobs" />
          <Provider src="/images/remotive.png" alt="Remotive jobs" />
        </Providers>
      </Description>
    </MainContent>
  </Main>
);

export default Headline;
