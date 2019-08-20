// @flow
import React from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const Container: any = styled(Flex)`
  height: 100vh;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
`;

const Description = styled(Box)`
  text-align: center;
  width: 790px;
`;

const Header = styled.h1`
  margin-block-start: 16px;
  margin-block-end: 12px;
`;

const Subheader = styled.h2`
  font-size: 19px;
  font-weight: 400;
`;

const JobList = styled(Flex)`
  margin: 40px auto;
  width: 950px;
`;

const useGithubRemoteJobs = () => {
  const url = `https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote`;
  const [data, updateData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        updateData(json);
      });
  }, []);
  return data;
};

const Root = () => {
  const githubJobs = useGithubRemoteJobs();
  console.log(githubJobs);
  return (
    <Container alignItems="center" flexDirection="column">
      <Header>Remote Seer</Header>
      <img alt="work remotely" src="images/work_remotely.svg" />
      <Description>
        <Subheader>
          Find remote work and <strong>work from anywhere</strong>. We aggregate providers so that
          we can bring you the <strong>largest listing of remote jobs</strong>. Find all remote jobs
          in one place.
        </Subheader>
      </Description>
      <JobList flexDirection="column">
        {githubJobs.map(job => (
          <Flex alignItems="center" key={job.id}>
            <a target="_blank" rel="noopener noreferrer nofollow" href={job.url}>
              {job.company}
            </a>{' '}
            - {job.title}
          </Flex>
        ))}
      </JobList>
    </Container>
  );
};

export default hot(module)(Root);
