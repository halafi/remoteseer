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
import Categories from '../../components/Categories';
import { DEV_CATEGORIES_META, CATEGORIES_META } from '../../../server/consts/categories';

const JobListWrapper: any = styled(Flex)`
  margin: 0 auto 40px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

const CatTitle = styled.h2`
  padding: 0 12px;
  margin-block-start: 0;
  margin-block-end: 10px;
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
          <CatTitle>
            {subcategory
              ? DEV_CATEGORIES_META[subcategory].headline || DEV_CATEGORIES_META[subcategory].title
              : CATEGORIES_META[category].title}{' '}
            Jobs
          </CatTitle>
          {category === 'development' && !subcategory && (
            <Categories categories={DEV_CATEGORIES_META} />
          )}
          <JobList jobs={jobs} />
        </JobListWrapper>
        <Footer />
      </Flex>
    </>
  );
};
export default Root;
