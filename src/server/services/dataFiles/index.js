// @flow
import fs from 'fs-extra';
import path from 'path';
import { WWR_CATEGORIES } from '../../consts/wwr';
import { JUSTREMOTE_CATEGORIES } from '../../consts/justremote';
import { REMOTECO_CATEGORIES } from '../../consts/remoteco';
import { REMOTIVE_CATEGORIES } from '../../consts/remotive';

import getProcessedJobs, {
  getProcessedJobStats,
} from '../../../client/services/jobs/getProcessedJobs';

const DATA_DIR = path.resolve(__dirname, '../../../../data');

const getJobData = () => {
  const remoteOkJobs = fs.readJsonSync(path.join(DATA_DIR, 'remoteOkJobs.json'));
  return {
    github: fs.readJsonSync(path.join(DATA_DIR, 'githubJobs.json')),
    stackoverflow: fs.readJsonSync(path.join(DATA_DIR, 'stackOverflowJobs.json')),
    remoteok: remoteOkJobs.slice(1, remoteOkJobs.length),
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
    remotive: REMOTIVE_CATEGORIES.reduce((acc, cat) => {
      const jobs = fs.readJsonSync(path.join(DATA_DIR, `remotive-${cat}-jobs.json`));
      return acc.concat(jobs.map(x => ({ ...x, category: cat })));
    }, []),
  };
};

export const getJobStats = () => {
  const jobData = getJobData();
  const mappedJobStats = getProcessedJobStats(jobData);
  return Object.keys(jobData).reduce((acc, key) => {
    acc[key] = mappedJobStats[key];
    return acc;
  }, {});
};

// eslint-disable-next-line import/prefer-default-export
export const getJobs = (category: string) => {
  return getProcessedJobs(getJobData(), category);
};
