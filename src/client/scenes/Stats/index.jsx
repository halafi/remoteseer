// @flow
import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Navbar from '../../components/Navbar';
import { useStateValue } from '../../State';
import Footer from '../../components/Footer/index';
// import JobList from '../../components/JobList/index';
import Headline from '../../components/Headline/index';
import mq from '../../services/mediaQuery';
// import { CATEGORIES_META } from '../../../server/consts/categories';
// import filterCategoryJobs from '../../services/jobs/filterCategoryJobs';
// import Categories from '../../components/Categories';
import { PROVIDERS } from '../../records/Job';
import Breadcrumbs from '../../components/Breadcrumbs/index';

const JobListWrapper: any = styled(Flex)`
  margin: 0 auto 40px;
  width: 100%;
  ${mq.DESKTOP`
    width: 950px;
  `}
`;

// const Link = styled.a`
//   color: inherit;
// `;

// const Category = styled(Box)`
//   margin: 40px 0;
// `;

// const Button = styled(Box)`
//   text-align: center;
//   margin-top: 12px;
//   border: 1px solid rgba(144, 146, 148, 0.2);
//   box-shadow: 0 4px 4px -2px rgba(144, 146, 148, 0.2);
//   border-radius: 2px;
//   font-size: 17px;
//   font-weight: 900;
//   color: #212529;
//   padding: 12px 18px;
//   width: 250px;

//   ${mq.MIDDLE_MOBILE`
//     width: initial;
//     max-width: 500px;
//   `}
// `;

const FlexWrapper = styled(Flex)``;

const Provider = styled.img`
  padding: 12px 12px 12px 0;
  width: 32px;
  height: 32px;
`;

const GROUPS = {
  github: 'GitHub',
  stackoverflow: 'StackOverflow',
  remoteok: 'Remote OK',
  wwr: 'We Work Remotely',
  dribbble: 'Dribbble',
  justremote: 'JustRemote',
  remoteco: 'Remote.co',
  nodesk: 'NODESK',
  cryptocurrency: 'CryptoCurrencyJobs',
  remotive: 'Remotive.io',
};

const PROVIDER_IMAGES = {
  github: 'github.svg',
  stackoverflow: 'stackoverflow.svg',
  remoteok: 'remoteok.ico',
  wwr: 'wwr.png',
  dribbble: 'dribbble.svg',
  justremote: 'justremote.png',
  remoteco: 'remote_co.png',
  nodesk: 'nodesk.png',
  cryptocurrency: 'cryptocurrencyjobs.png',
  remotive: 'remotive.png',
};

const COVERAGE = {
  github: 100,
  stackoverflow: 100,
  remoteok: 100,
  wwr: 14,
  dribbble: 100,
  justremote: 100,
  remoteco: 100,
  nodesk: 7,
  cryptocurrency: 14,
  remotive: 100,
};

const H2 = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Stats = () => {
  const { jobs, category, stats } = useStateValue();
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} category={category} />
        <JobListWrapper flexDirection="column">
          <Breadcrumbs contentPage={{ title: 'About', link: '/about/' }} />
          <Box px={12}>
            <H2>About Remote Seer</H2>
            <h3>What do we do?</h3>
            <p>
              Our aim is to cover the <strong>largest amount of remote jobs</strong> on the web. At
              the moment we collect data from {Object.keys(PROVIDERS).length} different remote job
              websites and remote job boards. By aggregating several websites we have the{' '}
              <strong>largest listing of remote jobs</strong> and people looking for work only need
              to visit our website to find job offers.
            </p>
            <p>
              Quantity of job offers is not everything, so we are also working hard to filter out
              irrelevant or broken job offers and to build a layer on top of our data sources to
              help you find the type of jobs you are looking for.
            </p>
            <h3>Statistics</h3>
            <p>
              We are brutally honest about not being perfect, we do not have all jobs from every
              featured website, but we are constantly improving and doing our best.
            </p>
            <p>
              Here we give you some statistics about the amount of <strong>remote jobs</strong> we
              have aggregated so far. We rate our job coverage for last 30 days (e.g. having jobs
              from the last 10 days equals to 33%).
            </p>
            <FlexWrapper flexWrap="wrap" my={40} px={20}>
              {/* todo sort by smallest to biggest */}
              {Object.keys(stats)
                .sort((a, b) => COVERAGE[b] - COVERAGE[a])
                .map(group => (
                  <Flex
                    width={[1, 1 / 2, 1 / 3, 1 / 4]}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Provider src={`/images/${PROVIDER_IMAGES[group]}`} alt={GROUPS[group]} />
                    <Flex flexDirection="column">
                      <strong>{GROUPS[group]}</strong>
                      <span>
                        {stats[group]} jobs ({COVERAGE[group]}%)
                      </span>
                      <progress value={COVERAGE[group]} max="100" />
                    </Flex>
                  </Flex>
                ))}
            </FlexWrapper>
            <p>Jobs are updated at least twice per day.</p>
            <h3>Contact</h3>
            <p>We would love to hear from you about anything you would like to see on our site.</p>
            <p>
              If you have any questions or data you would like to provide us, do not hesitate to
              contact us at <a href="mailto:hello@remoteseer.net">hello@remoteseer.net</a>.
            </p>
          </Box>
        </JobListWrapper>
        <Footer />
      </Flex>
    </>
  );
};
export default Stats;
