// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import {
  CATEGORIES_META,
  DEV_CATEGORIES_META,
  SUBSUBCATEGORIES_META,
} from '../../../server/consts/categories';

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
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ selected }) => (!selected ? 900 : 400)};
  text-decoration: none;
`;

const Selected = styled.span`
  color: ${({ theme }) => theme.gray};
  font-weight: 400;
`;

type Props = {
  category?: ?string,
  subcategory?: ?string,
  subsubcategory?: ?string,
  className?: ?string,
  contentPage?: ?{ title: string, link: string },
};

// TEST: https://search.google.com/structured-data/testing-tool/u/0/
// GUIDE: https://audisto.com/insights/guides/2/
// https://schema.org/BreadcrumbList microdata
const Breadcrumbs = ({ className, category, subcategory, subsubcategory, contentPage }: Props) => (
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
      {contentPage && (
        <ListItem
          key="home"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Selected>
            <link itemProp="item" href={contentPage.link} />
            <span itemProp="name">{contentPage.title}</span>
          </Selected>
          <meta itemProp="position" content={2} />
        </ListItem>
      )}
      {category && (
        <ListItem
          key="home"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          {!subcategory ? (
            <Selected>
              <link itemProp="item" href={CATEGORIES_META[category].link} />
              <span itemProp="name">{CATEGORIES_META[category].title}</span>
            </Selected>
          ) : (
            <Link itemProp="item" href={CATEGORIES_META[category].link}>
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
          {!subsubcategory ? (
            <Selected>
              <link itemProp="item" href={DEV_CATEGORIES_META[subcategory].link} />
              <span itemProp="name">{DEV_CATEGORIES_META[subcategory].title}</span>
            </Selected>
          ) : (
            <Link itemProp="item" href={DEV_CATEGORIES_META[subcategory].link}>
              <span itemProp="name">{DEV_CATEGORIES_META[subcategory].title}</span>
            </Link>
          )}
          <meta itemProp="position" content={3} />
        </ListItem>
      )}
      {subsubcategory && (
        <ListItem
          key="home"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Selected>
            <link itemProp="item" href={SUBSUBCATEGORIES_META[subsubcategory].link} />
            <span itemProp="name">{SUBSUBCATEGORIES_META[subsubcategory].title}</span>
          </Selected>
          <meta itemProp="position" content={4} />
        </ListItem>
      )}
    </StyledList>
  </Container>
);

Breadcrumbs.defaultProps = {
  category: null,
  subcategory: null,
  subsubcategory: null,
  className: null,
  contentPage: null,
};

export default Breadcrumbs;
