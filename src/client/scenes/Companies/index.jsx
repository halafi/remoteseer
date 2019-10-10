// @flow
import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { useStateValue } from '../../State';
import Headline from '../../components/Headline/index';
import mq from '../../services/mediaQuery';
import Breadcrumbs from '../../components/Breadcrumbs/index';

const JobListWrapper: any = styled(Flex)`
  margin: 0 auto 40px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const CompaniesList = styled(Flex)`
  font-size: 14px;
`;

const Company = styled(Flex)`
  padding: 8px 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #f5f5f5;
  }
`;

const JobCount = styled.div`
  font-size: 12px;
`;

const H2 = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Stats = () => {
  const { jobs } = useStateValue();
  const groupedJobs = R.groupWith((a, b) => a.company === b.company)(jobs);

  return (
    <>
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} />
        <JobListWrapper flexDirection="column">
          <Breadcrumbs
            contentPage={{
              title: 'Companies',
              link: '/companies-hiring-remotely/',
            }}
          />
          <Box px={12}>
            <H2>Top Companies Hiring Remotely</H2>
            <p>
              Here you can find companies listed on our site with at least two remote positions
              available.
            </p>
            <CompaniesList
              flexDirection="column"
              companies={
                groupedJobs.filter(x => x[0].company !== 'Nodesk').filter(x => x.length > 1).length
              }
            >
              {groupedJobs
                .filter(x => x[0].company !== 'Nodesk')
                .filter(x => x.length > 1)
                .sort(R.comparator((a, b) => a.length >= b.length))
                .map(group => (
                  <Company
                    key={group[0].company}
                    justifyContent="space-between"
                    width={1}
                    alignItems="center"
                  >
                    <div>{group[0].company}</div>
                    <JobCount>{group.length} remote jobs</JobCount>
                  </Company>
                ))}
            </CompaniesList>
          </Box>
        </JobListWrapper>
      </Flex>
    </>
  );
};
export default Stats;
