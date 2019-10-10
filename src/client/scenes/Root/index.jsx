// @flow
import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { useStateValue } from '../../State';
import JobList from '../../components/JobList/index';
import Headline from '../../components/Headline/index';
import mq from '../../services/mediaQuery';
import { CATEGORIES_META } from '../../../server/consts/categories';
import filterCategoryJobs from '../../services/jobs/filterCategoryJobs';
// import Categories from '../../components/Categories';

const JobListWrapper: any = styled(Flex)`
  margin: 0 auto 40px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const Link = styled.a`
  color: inherit;
`;

const Category = styled(Box)`
  margin: 40px 0;
`;

const Button = styled(Box)`
  background: #884ffa;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 12px 28px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #ffffff;
  width: 250px;
  :hover {
    box-shadow: 0px 20px 24px 0px rgba(0, 11, 40, 0.1);
  }

  ${mq.MIDDLE_MOBILE`
    width: initial;
    max-width: 500px;
  `}
`;

const CatTitle = styled.h2`
  display: inline-block;
  padding: 0 12px;
  margin-top: 16px;
`;

const Root = () => {
  const { jobs } = useStateValue();
  return (
    <>
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} />
        <JobListWrapper flexDirection="column">
          {/* <Categories categories={CATEGORIES_META} /> */}
          {Object.keys(CATEGORIES_META)
            .slice(0, 5)
            .map(cat => (
              <Category key={cat}>
                <Link href={CATEGORIES_META[cat].link}>
                  <CatTitle>{CATEGORIES_META[cat].title}</CatTitle>
                </Link>

                <JobList jobs={filterCategoryJobs(jobs, cat).splice(0, 15)} nogroup />
                <Flex justifyContent="center" mt={12}>
                  <Link href={CATEGORIES_META[cat].link}>
                    <Button>
                      View all {filterCategoryJobs(jobs, cat).length} {CATEGORIES_META[cat].title}{' '}
                      jobs
                    </Button>
                  </Link>
                </Flex>
              </Category>
            ))}
        </JobListWrapper>
      </Flex>
    </>
  );
};
export default Root;
