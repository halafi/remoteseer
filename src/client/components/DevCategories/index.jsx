// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { DEV_CATEGORIES_META } from '../../../server/consts/categories';

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

const DevCategories = () => (
  <JobCategoriesWrapper justifyContent="center" flexWrap="wrap">
    {Object.keys(DEV_CATEGORIES_META).map(cat => (
      <JobCategory href={DEV_CATEGORIES_META[cat].link} key={cat}>
        <span role="img" aria-label={DEV_CATEGORIES_META[cat].title}>
          {DEV_CATEGORIES_META[cat].img}
        </span>
        {DEV_CATEGORIES_META[cat].title}
      </JobCategory>
    ))}
  </JobCategoriesWrapper>
);
export default DevCategories;
