/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';

const Main: any = styled(Box)`
  background-color: #fcfdfe;
  background-image: linear-gradient(0deg, #ededef 0%, #fff 100%);
  width: 100%;
  border-bottom: 1px solid #ebeffb;
`;

const MainContent = styled(Flex)`
  margin: 0 auto 30px;
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
  font-family: 'Poppins', sans-serif;
  padding: 0 4px;
  margin-block-start: 0;
  margin-block-end: 8px;
  font-size: 24px;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.4;
  ${mq.TABLET`
    line-height: 2.25;
    font-size: 36px;
`}
`;

const Subheader = styled.div`
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

const Purple = styled.span`
  color: #8756f6;
`;

const Par = styled.p`
  margin-block-start: 0;
  margin-block-end: ${({ mb }) => (mb ? `${mb}px` : '0')};
`;

type Props = {
  jobsCount: number,
  headlineText: string,
};

const Headline = ({ jobsCount, headlineText }: Props) => (
  <Main>
    <MainContent alignItems="center" flexDirection="column">
      <Header>
        Remote <Purple>{headlineText}</Purple> Jobs
      </Header>
      {/* <Image alt="work remotely" src="/images/digital_nomad.svg" /> */}
      <Description>
        <Subheader>
          <Par mb={28}>
            Find remote work and <strong>work from anywhere</strong>. We aggregate providers and
            remote job boards to bring you the <strong>largest listing of remote jobs</strong>.
          </Par>
          <Par>
            <strong>
              {jobsCount} remote jobs{headlineText ? ` in ${headlineText}` : ''}
            </strong>{' '}
            from{' '}
            <Link href="/about/">
              <strong>well trusted sites</strong>
            </Link>
          </Par>
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
