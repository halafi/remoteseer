// @flow
import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Navbar from '../../components/Navbar';
import { useStateValue } from '../../State';
import Footer from '../../components/Footer/index';
import JobList from '../../components/JobList/index';
import Headline from '../../components/Headline/index';
import Breadcrumbs from '../../components/Breadcrumbs';
import mq from '../../services/mediaQuery';
import DevCategories from '../../components/DevCategories';
// import JobCategories from '../../components/JobCategories';

const JobListWrapper: any = styled(Flex)`
  margin: 0 auto 40px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const Root = () => {
  const { jobs, category, subcategory } = useStateValue();
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} category={subcategory || category} />
        <JobListWrapper flexDirection="column">
          <Breadcrumbs category={category} subcategory={subcategory} />
          {category === 'development' && !subcategory && <DevCategories />}
          {/* <JobCategories /> */}
          <JobList jobs={jobs} />
        </JobListWrapper>
        <Footer />
      </Flex>
    </>
  );
};
export default Root;
