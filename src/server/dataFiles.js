// @flow
import fs from 'fs-extra';
import path from 'path';
import * as R from 'ramda';
import {
  mapperGithubJobs,
  mapperStackOverflowJobs,
  mapperRemoteOkJobs,
  filterDuplicates,
} from '../client/services/jobs';

const DATA_DIR = path.resolve(__dirname, '../../data');

const sortFn = R.compose(
  R.reverse,
  R.sortBy(R.prop('createdAt')),
);

// eslint-disable-next-line import/prefer-default-export
export const getJobs = () => {
  const githubjobs = fs.readJsonSync(path.join(DATA_DIR, 'githubJobs.json'));
  const stackoverflowjobs = fs.readJsonSync(path.join(DATA_DIR, 'stackOverflowJobs.json'));
  const remoteOkJobs = fs.readJsonSync(path.join(DATA_DIR, 'remoteOkJobs.json'));
  return sortFn(
    filterDuplicates(
      mapperGithubJobs(githubjobs).concat(
        mapperStackOverflowJobs(stackoverflowjobs).concat(mapperRemoteOkJobs(remoteOkJobs)),
      ),
    ),
  );
};
