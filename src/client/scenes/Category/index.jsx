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

const Promo = styled.div`
  padding: 0 12px;
  font-weight: 900;
`;

const Link = styled.a`
  color: #89050a;
  text-decoration: underline;
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
    headlineText = `${ALL_META[subsubcategory].headline || ALL_META[subsubcategory].title}`;
  } else if (subcategory && ALL_META[subcategory]) {
    headlineText = `${ALL_META[subcategory].headline || ALL_META[subcategory].title}`;
  } else if (category && ALL_META[category]) {
    headlineText = `${ALL_META[category].headline || ALL_META[category].title}`;
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
          {subsubcategory && subsubcategory === 'compilers' && (
            <Promo>
              <span role="img" aria-label="screaming cats">
                🙀🙀🙀
              </span>
              <Link
                href="https://www.linkedin.com/in/ondrej-glasn%C3%A1k-0764b2140/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire the best remote compiler engineer
              </Link>
              &nbsp;
              <span role="img" aria-label="screaming cats">
                ✅
              </span>
              Verified by our team of seers
            </Promo>
          )}
          <JobList jobs={jobs} />
        </JobListWrapper>
        <Footer />
      </Flex>
    </>
  );
};
export default Root;
