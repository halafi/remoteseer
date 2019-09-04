// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import { CATEGORIES_META, DEV_CATEGORIES_META } from '../../../server/consts/categories';

const Container: any = styled(Box)`
  margin: 30px 0;
  padding: 0 12px;
`;

const StyledList = styled.ol`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  li + li:before {
    display: inline-block;
    padding: 0 4px;
    color: ${({ theme }) => theme.gray};
    content: '/';
  }
`;

const ListItem = styled.li`
  display: inline;
  font-size: 14px;
  line-height: 1.4;
  a:hover {
    text-decoration: underline;
  }
`;

const Link = styled.a`
  color: ${({ selected, theme }) => (!selected ? theme.primary : theme.gray)};
  font-weight: ${({ selected }) => (!selected ? 900 : 400)};
  text-decoration: none;
`;

const Selected = styled.span`
  color: ${({ theme }) => theme.gray};
  font-weight: 400;
`;

type Props = {
  category: string,
  subcategory?: ?string,
  className?: ?string,
};

// TEST: https://search.google.com/structured-data/testing-tool/u/0/
// GUIDE: https://audisto.com/insights/guides/2/
// https://schema.org/BreadcrumbList microdata
const Breadcrumbs = ({ className, category, subcategory }: Props) => (
  <Container>
    <StyledList className={className} itemScope itemType="http://schema.org/BreadcrumbList">
      <ListItem
        key="home"
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        {/* $FlowFixMe */}
        <Link itemProp="item" href="/">
          <span itemProp="name">Remote Jobs</span>
        </Link>
        <meta itemProp="position" content={1} />
      </ListItem>
      {category && (
        <ListItem
          key="home"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          {!subcategory ? (
            <Selected itemProp="item" href={CATEGORIES_META[category].link}>
              <span itemProp="name">{CATEGORIES_META[category].title}</span>
            </Selected>
          ) : (
            <Link
              selected={Boolean(category && !subcategory)}
              itemProp="item"
              href={CATEGORIES_META[category].link}
            >
              <span itemProp="name">{CATEGORIES_META[category].title}</span>
            </Link>
          )}
          <meta itemProp="position" content={2} />
        </ListItem>
      )}
      {subcategory && (
        <ListItem
          key="home"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Selected itemProp="item" href={DEV_CATEGORIES_META[subcategory].link}>
            <span itemProp="name">{DEV_CATEGORIES_META[subcategory].title}</span>
          </Selected>
          <meta itemProp="position" content={3} />
        </ListItem>
      )}
    </StyledList>
  </Container>
);

Breadcrumbs.defaultProps = {
  subcategory: null,
  className: null,
};

export default Breadcrumbs;
