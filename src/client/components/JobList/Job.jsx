/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import mq from '../../services/mediaQuery';
import type { Job as JobType } from '../../records/Job';
import { TAG_LINKS } from '../../services/jobs/tags';

const Link = styled.div`
  color: initial;
  :hover {
    color: initial;
    h3 {
      text-decoration: underline;
    }
  }
`;

const Container = styled(Flex)`
  cursor: pointer;
  transition: ease all 0.3s;
  padding: 8px 14px;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: ${({ last }) => (last ? '1px solid #efefef' : '')};

  :hover {
    background-color: #f5f5f5;
  }
  ${mq.TABLET`
    padding: 16px;
  `}
`;

const getProviderImg = (providerId: number): string => {
  if (providerId === 0) {
    return `url('/images/github.svg')`;
  }
  if (providerId === 1) {
    return `url('/images/stackoverflow.svg')`;
  }
  if (providerId === 2) {
    return `url('/images/remoteok.ico')`;
  }
  if (providerId === 3) {
    return `url('/images/wwr.png')`;
  }
  if (providerId === 4) {
    return `url('/images/dribbble.svg')`;
  }
  if (providerId === 5) {
    return `url('/images/justremote.png')`;
  }
  if (providerId === 6) {
    return `url('/images/remote_co.png')`;
  }
  if (providerId === 7) {
    return `url('/images/nodesk.png')`;
  }
  if (providerId === 8) {
    return `url('/images/cryptocurrencyjobs.png')`;
  }
  if (providerId === 9) {
    return `url('/images/remotive.png')`;
  }
  return '';
};

const CompanyLogo = styled(Flex)`
  color: #dad6d2;
  font-size: 22px;
  font-weight: 900;
  width: 40px;
  margin-right: 14px;
  text-align: center;
  background-image: ${({ provider }) => getProviderImg(provider)};
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: 100% 100%;
  ${mq.TABLET`
    width: 40px;
    font-size: 24px;
  `}
`;

const JobTitle = styled.h3`
  margin-block-start: 6px;
  margin-block-end: 6px;
  font-size: 16px;
  ${mq.TABLET`
    margin-block-end: ${({ location }) => (location ? '6px' : '0')};
    font-size: 19px;
  `}
`;

const JobLocation = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  color: #3d3e41;
  ${mq.TABLET`
    font-size: 16px;
  `}
`;

const JobInfo = styled(Flex)`
  width: 100%;
`;

const Age = styled(Box)`
  width: 43px;
`;

const Tag = styled(Box)`
  z-index: 1;
  margin-bottom: 4px;
  margin-right: 4px;
  border-radius: 0.3em;
  background-color: white;
  border: ${({ link }) => (link ? '1px solid #0f1115' : '1px solid #8a8b8b')};
  padding: 3px;
  font-size: 11px;
  text-align: center;
  color: ${({ link }) => (link ? 'initial' : '#8a8b8b')};

  :hover {
    cursor: ${({ link }) => (link ? 'pointer' : 'initial')};
    filter: ${({ link }) => (link ? 'invert(1)' : 'initial')};
  }
  a {
    white-space: nowrap;
    color: inherit;
  }
`;

type Props = {
  job: JobType,
  last: boolean,
};

const Job = ({ job, last }: Props) => (
  <Container
    key={job.id}
    tabIndex={0}
    alignItems="center"
    last={last}
    onClick={ev => {
      if (!ev.target.className.includes('taglink')) {
        window.open(job.url, '_blank');
      }
    }}
    onKeyPress={ev => {
      if (ev.key === 'Enter' && !ev.target.className.includes('taglink')) {
        window.open(job.url, '_blank');
      }
    }}
  >
    <CompanyLogo provider={job.providerId} justifyContent="center" alignItems="center">
      {job.company.slice(0, 1).toUpperCase()}
    </CompanyLogo>
    <JobInfo alignItems="center" justifyContent="space-between">
      <JobInfo flexDirection="column">
        <Flex
          flexDirection={['column', null, null, null, 'row']}
          justifyContent={['flex-start', null, null, null, 'space-between']}
          alignItems="center"
        >
          <Flex flexDirection="column" width={[1, null, null, null, 3 / 5]}>
            <Link>
              {job.company}
              <JobTitle location={Boolean(job.location)}>{job.title}</JobTitle>
              {job.location && <JobLocation>{job.location}</JobLocation>}
            </Link>
          </Flex>
          <Flex width={[1, null, null, null, 2 / 5]} alignItems="center" flexWrap="wrap">
            {job.tags.map(x => (
              <Tag key={x} link={Boolean(TAG_LINKS[x])}>
                {TAG_LINKS[x] ? (
                  <a className="taglink" href={TAG_LINKS[x]}>
                    {x.toUpperCase()}
                  </a>
                ) : (
                  <span className="taglink">{x.toUpperCase()}</span>
                )}
              </Tag>
            ))}
          </Flex>
        </Flex>
      </JobInfo>
      <Age ml={[0, null, null, null, 3]} px={2}>
        {job.ageDays > 0 ? `${job.ageDays}d` : `${job.ageHours}h`}
      </Age>
    </JobInfo>
  </Container>
);

export default Job;
