// @flow
import fs from 'fs-extra';
import path from 'path';
import { WWR_CATEGORIES } from '../../consts/wwr';
import { JUSTREMOTE_CATEGORIES } from '../../consts/justremote';
import { REMOTECO_CATEGORIES } from '../../consts/remoteco';

import getProcessedJobs from '../../../client/services/jobs/getProcessedJobs';

const DATA_DIR = path.resolve(__dirname, '../../../../data');

// eslint-disable-next-line import/prefer-default-export
export const getJobs = (category: string) => {
  const remoteOkJobs = fs.readJsonSync(path.join(DATA_DIR, 'remoteOkJobs.json'));
  const remoteOkJobsSliced = remoteOkJobs.slice(1, remoteOkJobs.length);
  return getProcessedJobs(
    {
      github: fs.readJsonSync(path.join(DATA_DIR, 'githubJobs.json')),
      stackoverflow: fs.readJsonSync(path.join(DATA_DIR, 'stackOverflowJobs.json')),
      remoteok: remoteOkJobsSliced,
      wwr: WWR_CATEGORIES.reduce((acc, cat) => {
        const jobs = fs.readJsonSync(path.join(DATA_DIR, `wwr-${cat}.json`));
        return acc.concat(jobs.map(x => ({ ...x, category: cat })));
      }, []),
      dribbble: fs.readJsonSync(path.join(DATA_DIR, 'dribbbleJobs.json')),
      justremote: JUSTREMOTE_CATEGORIES.reduce((acc, cat) => {
        const jobs = fs.readJsonSync(path.join(DATA_DIR, `justremote-${cat}.json`));
        return acc.concat(jobs.map(x => ({ ...x, category: cat })));
      }, []),
      remoteco: REMOTECO_CATEGORIES.reduce((acc, cat) => {
        const jobs = fs.readJsonSync(path.join(DATA_DIR, `remoteco-${cat}.json`));
        return acc.concat(jobs.map(x => ({ ...x, category: cat })));
      }, []),
      nodesk: fs.readJsonSync(path.join(DATA_DIR, 'nodeskJobs.json')),
      cryptocurrency: fs.readJsonSync(path.join(DATA_DIR, 'cryptocurrencyJobs.json')),
    },
    category,
  );
};
