// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import type { Job as JobType } from '../../records/Job';
import PERIODS from '../../consts/Periods';
import groupJobsByPeriod from '../../services/jobs/groupJobsByPeriod';

const Link = styled.a`
  color: initial;
  :hover {
    color: initial;
    h2 {
      text-decoration: underline;
    }
  }
`;

const TimeBlock = styled(Flex)`
  margin: 0 0 20px;
`;

const Job = styled(Flex)`
  padding: 8px 14px;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: ${({ last }) => (last ? '1px solid #efefef' : '')};

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  ${mq.TABLET`
    padding: 18px;
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
  if (providerId === 7) {
    return `url('/images/nodesk.png')`;
  }
  if (providerId === 8) {
    return `url('/images/cryptocurrencyjobs.png')`;
  }
  if (providerId === 9) {
    return `url('/images/remotive.png')`;
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
  margin-block-start: 8px;
  margin-block-end: 8px;
  font-size: 16px;
  ${mq.TABLET`
    font-size: 19px;
  `}
`;

const JobLocation = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  color: #3d3e41;
  ${mq.TABLET`
    font-size: 16px;
  `}
`;

const JobInfo = styled(Flex)`
  width: 100%;
`;

const Age = styled(Box)`
  width: 43px;
`;

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

type Props = {
  jobs: JobType[],
  nogroup?: boolean,
};

const JobList = ({ jobs, nogroup }: Props) => {
  const groupedJobs = groupJobsByPeriod(jobs);

  if (nogroup) {
    return (
      <Box>
        {jobs.map((job, i) => (
          <Link key={job.id} href={job.url} target="_blank" rel="noopener noreferrer">
            <Job alignItems="center" last={i === 14}>
              <CompanyLogo provider={job.providerId} justifyContent="center" alignItems="center">
                {job.company.slice(0, 1).toUpperCase()}
              </CompanyLogo>
              <JobInfo alignItems="center" justifyContent="space-between">
                <JobInfo flexDirection="column">
                  <Flex
                    flexDirection={['column', null, null, 'row']}
                    justifyContent={['flex-start', null, null, 'space-between']}
                    alignItems="center"
                  >
                    <Flex flexDirection="column" width={[1, null, null, 3 / 5]}>
                      {job.company}
                      <JobTitle>{job.title}</JobTitle>
                      {job.location && <JobLocation>{job.location}</JobLocation>}
                    </Flex>
                    <Flex width={[1, null, null, 2 / 5]} alignItems="center" flexWrap="wrap">
                      {job.tags.map(x => (
                        <Tag key={x}>{x.toUpperCase()}</Tag>
                      ))}
                    </Flex>
                  </Flex>
                </JobInfo>
                <Age ml={[0, null, null, 3]} px={2}>
                  {job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}
                </Age>
              </JobInfo>
            </Job>
          </Link>
        ))}
      </Box>
    );
  }
  return (
    <>
      {Object.keys(groupedJobs).map(period => (
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
                    <JobInfo flexDirection="column">
                      <Flex
                        flexDirection={['column', null, null, 'row']}
                        justifyContent={['flex-start', null, null, 'space-between']}
                        alignItems="center"
                      >
                        <Flex flexDirection="column" width={[1, null, null, 3 / 5]}>
                          {job.company}
                          <JobTitle>{job.title}</JobTitle>
                          {job.location && <JobLocation>{job.location}</JobLocation>}
                        </Flex>
                        <Flex width={[1, null, null, 2 / 5]} alignItems="center" flexWrap="wrap">
                          {job.tags.map(x => (
                            <Tag key={x}>{x.toUpperCase()}</Tag>
                          ))}
                        </Flex>
                      </Flex>
                    </JobInfo>
                    <Age ml={[0, null, null, 3]} px={2}>
                      {job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}
                    </Age>
                  </JobInfo>
                </Job>
              </Link>
            ))}
          </TimeBlock>
        </Box>
      ))}
    </>
  );
};

JobList.defaultProps = {
  nogroup: false,
};

export default JobList;
