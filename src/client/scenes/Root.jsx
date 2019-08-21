// @flow
import React from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Navbar from '../components/Navbar';
import { groupJobs, mapperGithubJobs, PERIODS } from '../services/jobs';
import mq from '../services/mediaQuery';

const Image = styled.img`
  height: 200px;
  width: 300px;
`;

const Description = styled(Box)`
  text-align: center;
  max-width: 790px;
`;

const Header = styled.h1`
  margin-block-start: 0;
  margin-block-end: 10px;
`;

const Subheader = styled.h2`
  margin: 0 6px;
  font-size: 16px;
  font-weight: 400;
  ${mq.TABLET`
    font-size: 19px;
  `}
`;

const JobList = styled(Flex)`
  margin: 40px auto;
  max-width: 950px;
`;

const TimeBlock = styled(Flex)`
  margin: 0 0 20px;
`;

const Job = styled(Flex)`
  padding: 8px 14px;
  border-top: 1px solid #efefef;
  :last-child {
    border-bottom: 1px solid #efefef;
  }
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

const CompanyLogo = styled(Flex)`
  color: #dad6d2;
  font-size: 22px;
  font-weight: 900;
  width: 22px;
  margin-right: 14px;
  text-align: center;
  ${mq.TABLET`
    width: 40px;
    font-size: 24px;
  `}
`;

const JobTitle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  ${mq.TABLET`
    font-size: 18px;
  `}
`;

const JobLocation = styled.span`
  font-size: 12px;
  color: #3d3e41;
  ${mq.TABLET`
    font-size: 14px;
  `}
`;

const JobInfo = styled(Flex)`
  width: 100%;
`;

const useGithubRemoteJobs = () => {
  const url = `https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote`;
  const [data, updateData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        updateData(mapperGithubJobs(json));
      });
  }, []);
  return data;
};

const Root = () => {
  const githubJobs = useGithubRemoteJobs();
  const groupedJobs = githubJobs ? groupJobs(githubJobs) : {};
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Image alt="work remotely" src="images/work_remotely.svg" />
        <Header>Remote Seer</Header>
        <Description>
          <Subheader>
            Find remote work and <strong>work from anywhere</strong>. We aggregate providers so that
            we can bring you the <strong>largest listing of remote jobs</strong>. Find all remote
            jobs in one place.
          </Subheader>
        </Description>
        <JobList flexDirection="column">
          {githubJobs &&
            Object.keys(groupedJobs).map(period => (
              <Box key={period}>
                <TimeBlock flexDirection="column">
                  <PeriodTitle>{PERIODS[period]}</PeriodTitle>
                  {groupedJobs[period].map(job => (
                    <Job alignItems="center" key={job.id}>
                      <CompanyLogo justifyContent="center" alignItems="center">
                        {job.company.slice(0, 1).toUpperCase()}
                      </CompanyLogo>
                      <JobInfo alignItems="center" justifyContent="space-between">
                        <Flex flexDirection="column">
                          <a target="_blank" rel="noopener noreferrer nofollow" href={job.url}>
                            {job.company}
                          </a>{' '}
                          <JobTitle>{job.title}</JobTitle>
                          <JobLocation>{job.location}</JobLocation>
                        </Flex>
                        <Box>{job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}</Box>
                      </JobInfo>
                    </Job>
                  ))}
                </TimeBlock>
              </Box>
            ))}
        </JobList>
      </Flex>
    </>
  );
};

export default hot(module)(Root);
