// @flow
import fs from 'fs-extra';
import path from 'path';
import { DATA_DIR } from './fetchData';
import { mapperGithubJobs } from '../client/services/jobs';

// eslint-disable-next-line import/prefer-default-export
export const getJobs = () => {
  const data = fs.readJsonSync(path.join(DATA_DIR, 'jobs.json'));
  return mapperGithubJobs(data);
};
