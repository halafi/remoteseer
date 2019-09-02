// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { CATEGORIES_META } from '../../../server/consts/categories';

const JobCategoriesWrapper: any = styled(Flex)`
  width: 100%;
  margin-top: 16px;
`;

const JobCategory = styled.a`
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  color: initial;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin: 0 12px;
  border-bottom: 1px solid transparent;
  span {
    margin-bottom: 8px;
  }
  :hover {
    border-bottom: 1px solid black;
  }
`;

const JobCategories = () => (
  <JobCategoriesWrapper justifyContent="center" flexWrap="wrap">
    <JobCategory href="/" key="remote jobs">
      <span role="img" aria-label="remote jobs">
        🌴
      </span>
      remote jobs
    </JobCategory>
    {Object.keys(CATEGORIES_META).map(cat => (
      <JobCategory href={CATEGORIES_META[cat].link} key={cat}>
        <span role="img" aria-label={CATEGORIES_META[cat].title}>
          {CATEGORIES_META[cat].img}
        </span>
        {CATEGORIES_META[cat].title}
      </JobCategory>
    ))}
  </JobCategoriesWrapper>
);
export default JobCategories;
