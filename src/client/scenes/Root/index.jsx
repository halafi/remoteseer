// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import groupJobsByPeriod from '../../services/jobs/groupJobsByPeriod';
import mq from '../../services/mediaQuery';
import { useStateValue } from '../../State';
import { CATEGORIES_META } from '../../../server/consts/categories';
import PERIODS from '../../consts/Periods';

const Link = styled.a`
  color: initial;
  :hover {
    color: initial;
    h2 {
      text-decoration: underline;
    }
  }
`;

const Main = styled(Box)`
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

const Subheader = styled.h2`
  margin: 0 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  ${mq.TABLET`
    font-size: 19px;
  `}
`;

const JobList = styled(Flex)`
  margin: 40px auto;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const TimeBlock = styled(Flex)`
  margin: 0 0 20px;
`;

const Job = styled(Flex)`
  padding: 8px 14px;
  border-top: 1px solid #efefef;
  border-bottom: ${({ last }) => (last ? '1px solid #efefef' : '')};

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  ${mq.TABLET`
    padding: 8px 24px;
  `}
`;

const PeriodTitle = styled.span`
  padding: 20px 12px;
  font-size: 19px;
  font-weight: 700;
  ${mq.TABLET`
    font-size: 22px;
`}
`;

const getProviderImg = (providerId: number): string => {
  if (providerId === 0) {
    return `url('/images/github.svg')`;
  }
  if (providerId === 1) {
    return `url('/images/stackoverflow.svg')`;
  }
  if (providerId === 2) {
    return `url('/images/remoteok.ico')`;
  }
  if (providerId === 3) {
    return `url('/images/wwr.png')`;
  }
  if (providerId === 4) {
    return `url('/images/dribbble.svg')`;
  }
  if (providerId === 5) {
    return `url('/images/justremote.png')`;
  }
  if (providerId === 6) {
    return `url('/images/remote_co.png')`;
  }
  return '';
};

const CompanyLogo = styled(Flex)`
  color: #dad6d2;
  font-size: 22px;
  font-weight: 900;
  width: 40px;
  margin-right: 14px;
  text-align: center;
  background-image: ${({ provider }) => getProviderImg(provider)};
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: 100% 100%;
  ${mq.TABLET`
    width: 40px;
    font-size: 24px;
  `}
`;

const JobTitle = styled.h3`
  margin-block-start: 4px;
  margin-block-end: 4px;
  font-size: 16px;
  ${mq.TABLET`
    font-size: 18px;
  `}
`;

const JobLocation = styled.span`
  margin-bottom: 8px;
  font-size: 12px;
  color: #3d3e41;
  ${mq.TABLET`
    font-size: 14px;
  `}
`;

const JobInfo = styled(Flex)`
  width: 100%;
`;

const Tags = styled(Flex)``;

const Tag = styled(Box)`
  margin-bottom: 4px;
  margin-right: 4px;
  border-radius: 0.3em;
  border: 1px solid #0f1115;
  padding: 3px;
  font-size: 11px;
  vertical-align: middle;
  text-align: center;
`;

const Providers = styled(Flex)`
  margin-top: 12px;
`;

const Provider = styled.img`
  padding: 12px;
  width: 32px;
  height: 32px;
`;

const JobCategories = styled(Flex)`
  width: 100%;
`;

const JobCategory = styled.a`
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  color: initial;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin: 0 12px;
  border-bottom: 1px solid transparent;
  span {
    margin-bottom: 8px;
  }
  :hover {
    border-bottom: 1px solid black;
  }
`;

const FooterWrapper = styled(Box)`
  color: #ffffff;
  background-color: #212429;
  width: 100%;
  font-size: 14px;
  a {
    color: #ffffff;
  }
`;

const Footer = styled(Flex)`
  margin: 0px auto;
  padding: 0 16px;
  max-width: 950px;
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

const Root = () => {
  const { jobs, category } = useStateValue();
  const groupedJobs = jobs ? groupJobsByPeriod(jobs) : {};
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
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
                  {jobs.length} remote jobs
                  {category ? ` in ${CATEGORIES_META[category].title}` : ''}
                </strong>{' '}
                from <strong>well trusted sites</strong>:
              </Subheader>
              <Providers justifyContent="center" flexWrap="wrap">
                <Provider src="/images/github.svg" alt="Github jobs" />
                <Provider src="/images/stackoverflow.svg" alt="StackOverflow jobs" />
                <Provider src="/images/remoteok.ico" alt="RemoteOk jobs" />
                <Provider src="/images/wwr.png" alt="We Wrok Remotely jobs" />
                <Provider src="/images/dribbble.svg" alt="Dribbble jobs" />
                <Provider src="/images/justremote.png" alt="JustRemote jobs" />
                <Provider src="/images/remote_co.png" alt="Remote.co jobs" />
              </Providers>
            </Description>
          </MainContent>
        </Main>
        <JobList flexDirection="column">
          <JobCategories justifyContent="center" flexWrap="wrap">
            <JobCategory href="/" key="remote jobs">
              <span role="img" aria-label="remote jobs">
                🌴
              </span>
              remote jobs
            </JobCategory>
            {Object.keys(CATEGORIES_META).map(cat => (
              <JobCategory href={CATEGORIES_META[cat].link} key={cat}>
                <span role="img" aria-label={CATEGORIES_META[cat].title}>
                  {CATEGORIES_META[cat].img}
                </span>
                {CATEGORIES_META[cat].title}
              </JobCategory>
            ))}
          </JobCategories>
          {jobs &&
            Object.keys(groupedJobs).map(period => (
              <Box key={period}>
                <TimeBlock flexDirection="column">
                  <PeriodTitle>{PERIODS[period]}</PeriodTitle>
                  {groupedJobs[period].map((job, i) => (
                    <Link key={job.id} href={job.url} target="_blank" rel="noopener noreferrer">
                      <Job alignItems="center" last={i === groupedJobs[period].length - 1}>
                        <CompanyLogo
                          provider={job.providerId}
                          justifyContent="center"
                          alignItems="center"
                        >
                          {job.company.slice(0, 1).toUpperCase()}
                        </CompanyLogo>
                        <JobInfo alignItems="center" justifyContent="space-between">
                          <Flex flexDirection="column">
                            {job.company} <JobTitle>{job.title}</JobTitle>
                            {job.location && <JobLocation>{job.location}</JobLocation>}
                            <Tags alignItems="center" flexWrap="wrap">
                              {job.tags.map(x => (
                                <Tag>{x.toUpperCase()}</Tag>
                              ))}
                            </Tags>
                          </Flex>
                          <Box px={2}>
                            {job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}
                          </Box>
                        </JobInfo>
                      </Job>
                    </Link>
                  ))}
                </TimeBlock>
              </Box>
            ))}
        </JobList>
        <FooterWrapper>
          <Footer flexDirection="column">
            <Flex justifyContent="flex-end" py={4} mt={2}>
              <a href="#">Back to top ↑</a>
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
          </Footer>
        </FooterWrapper>
      </Flex>
    </>
  );
};
export default Root;
