// @flow
import React from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { groupJobs, PERIODS } from '../services/jobs';
import mq from '../services/mediaQuery';
import { useStateValue } from '../State';

const Link = styled.a`
  color: initial;
  :hover {
    color: initial;
    h2 {
      text-decoration: underline;
    }
  }
`;

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
    return `url('images/github.svg')`;
  }
  if (providerId === 1) {
    return `url('images/stackoverflow.svg')`;
  }
  if (providerId === 2) {
    return `url('images/remoteok.ico')`;
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

// const useGithubRemoteJobs = () => {
//   const url = `https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote`;
//   const [data, updateData] = React.useState([]);
//   React.useEffect(() => {
//     fetch(url)
//       .then(res => {
//         return res.json();
//       })
//       .then(json => {
//         updateData(mapperGithubJobs(json));
//       });
//   }, []);
//   return data;
// };

const Provider = styled.img`
  padding: 12px;
  width: 32px;
  height: 32px;
`;

const Root = () => {
  const { jobs } = useStateValue();
  const groupedJobs = jobs ? groupJobs(jobs) : {};
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Image alt="work remotely" src="images/work_remotely.svg" />
        <Header>Remote Seer</Header>
        <Description>
          <Subheader>
            Find remote work and <strong>work from anywhere</strong>. We aggregate providers and
            remote job boards to bring you the <strong>largest listing of remote jobs</strong>. Find
            all the latest remote jobs in one place.
          </Subheader>
          <Providers justifyContent="center">
            <Provider src="/images/github.svg" alt="Github jobs" />
            <Provider src="/images/stackoverflow.svg" alt="StackOverflow jobs" />
            <Provider src="/images/remoteok.ico" alt="RemoteOk jobs" />
          </Providers>
        </Description>
        <JobList flexDirection="column">
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
                          <Box>{job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}</Box>
                        </JobInfo>
                      </Job>
                    </Link>
                  ))}
                </TimeBlock>
              </Box>
            ))}
        </JobList>
      </Flex>
    </>
  );
};

export default Root;
