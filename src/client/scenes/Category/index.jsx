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
import {
  SUBSUBCATEGORIES_META,
  DEV_CATEGORIES_META,
  CATEGORIES_META,
  ALL_META,
} from '../../../server/consts/categories';

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
  const { jobs, category, subcategory, subsubcategory } = useStateValue();

  let title;
  if (subsubcategory) {
    title =
      SUBSUBCATEGORIES_META[subsubcategory].headline || SUBSUBCATEGORIES_META[subsubcategory].title;
  } else if (subcategory) {
    title = DEV_CATEGORIES_META[subcategory].headline || DEV_CATEGORIES_META[subcategory].title;
  } else {
    title = CATEGORIES_META[category].title;
  }

  let headlineText = '';
  if (subsubcategory && ALL_META[subsubcategory]) {
    headlineText = ` in ${ALL_META[subsubcategory].headline || ALL_META[subsubcategory].title}`;
  } else if (subcategory && ALL_META[subcategory]) {
    headlineText = ` in ${ALL_META[subcategory].headline || ALL_META[subcategory].title}`;
  } else if (category && ALL_META[category]) {
    headlineText = ` in ${ALL_META[category].headline || ALL_META[category].title}`;
  }
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} headlineText={headlineText} />
        <JobListWrapper flexDirection="column">
          <Breadcrumbs
            category={category}
            subcategory={subcategory}
            subsubcategory={subsubcategory}
          />
          <CatTitle>{title} Jobs</CatTitle>
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
