// @flow
import React from 'react';
import { Flex } from '@rebass/grid';
import Navbar from '../../components/Navbar';
import { useStateValue } from '../../State';
import Footer from './components/Footer/index';
import JobList from './components/JobList/index';
import Headline from './components/Headline/index';

const Root = () => {
  const { jobs, category } = useStateValue();
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection="column">
        <Headline jobsCount={jobs.length} category={category} />
        <JobList jobs={jobs} />
        <Footer />
      </Flex>
    </>
  );
};
export default Root;
