// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import type { Job as JobType } from '../../records/Job';
import PERIODS from '../../consts/Periods';
import groupJobsByPeriod from '../../services/jobs/groupJobsByPeriod';
import Job from './Job';

const TimeBlock = styled(Flex)`
  margin: 0 0 20px;
`;

const PeriodTitle = styled.span`
  padding: 20px 12px;
  font-size: 19px;
  font-weight: 700;
  ${mq.TABLET`
    font-size: 22px;
`}
`;

type Props = {
  jobs: JobType[],
  nogroup?: boolean,
};

const JobList = ({ jobs, nogroup }: Props) => {
  const groupedJobs = groupJobsByPeriod(jobs);

  if (nogroup) {
    // isLp
    return (
      <Box>
        {jobs.map((job, i) => (
          <Job job={job} key={job.id} last={i === 14} />
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
              <Job job={job} key={job.id} last={i === groupedJobs[period].length - 1} />
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
