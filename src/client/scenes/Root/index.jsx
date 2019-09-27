// @flow
import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Navbar from '../../components/Navbar';
import { useStateValue } from '../../State';
import Footer from '../../components/Footer/index';
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
  text-align: center;
  margin-top: 12px;
  border: 1px solid rgba(144, 146, 148, 0.2);
  box-shadow: 0 4px 4px -2px rgba(144, 146, 148, 0.2);
  border-radius: 2px;
  font-size: 17px;
  font-weight: 900;
  color: #212529;
  padding: 12px 18px;
  width: 250px;

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
      <Navbar />
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
                <Flex justifyContent="center">
                  <Button>
                    <Link href={CATEGORIES_META[cat].link}>
                      View all {filterCategoryJobs(jobs, cat).length} {CATEGORIES_META[cat].title}{' '}
                      jobs
                    </Link>
                  </Button>
                </Flex>
              </Category>
            ))}
        </JobListWrapper>
        <Footer />
      </Flex>
    </>
  );
};
export default Root;
