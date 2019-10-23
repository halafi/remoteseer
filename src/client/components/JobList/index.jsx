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

const presetOrder = ['today', 'yesterday', 'week', 'month', 'past'];

function sortSpecial(arr) {
  const result = [];
  let i;
  let j;
  for (i = 0; i < presetOrder.length; i += 1)
    // eslint-disable-next-line
    while (-1 != (j = arr.indexOf(presetOrder[i]))) result.push(arr.splice(j, 1)[0]);
  return result.concat(arr);
}

type Props = {
  jobs: JobType[],
  nogroup?: boolean,
};

const JobList = ({ jobs, nogroup }: Props) => {
  // const groupedJobs = groupJobsByPeriod(jobs);

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
    <Box my={20}>
      {jobs.map((job, i) => (
        <Job job={job} key={job.id} last={i >= jobs.length - 1} />
      ))}
    </Box>
  );
};

JobList.defaultProps = {
  nogroup: false,
};

export default JobList;
