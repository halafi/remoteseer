// @flow
import * as R from 'ramda';
import type { Job } from '../../records/Job';
import { PROVIDERS } from '../../records/Job';
import mapperGithubJobs from './mapper/github';
import mapperStackOverflowJobs from './mapper/stackoverflow';
import mapperRemoteOkJobs from './mapper/remoteok';
import mapperWwrJobs from './mapper/wwr';
import mapperDribbbleJobs from './mapper/dribbble';
import mapperJustRemoteJobs from './mapper/justremote/index';
import mapperRemoteCo from './mapper/remoteco/index';
import mapperNodeskJobs from './mapper/nodesk/index';
import filterCategoryJobs from './filterCategoryJobs';
import mapperCryptocurrencyJobs from './mapper/cryptocurrencyjobs/index';

const sortFn = R.compose(
  R.reverse,
  R.sortBy(R.prop('createdAt')),
);

function filterRemoteCoDuplicates(input: Job[]): Job[] {
  return input.reduce((acc, job) => {
    if (acc.find(x => x.title === job.title && x.company === job.company)) {
      return acc;
    }
    return acc.concat(job);
  }, []);
}

function putJobs(allJobs: Job[], newJobs: Job[], label: string) {
  const filtered = newJobs.filter(
    newJob =>
      !allJobs.find(
        job =>
          (job.title === newJob.title && job.company === newJob.company) ||
          (newJob.providerId === PROVIDERS.REMOTEOK && job.createdAt === newJob.createdAt),
      ),
  );
  // eslint-disable-next-line no-console
  console.log(
    `[getProcessedJobs] put ${label} jobs: ${filtered.length} (out of ${newJobs.length})`,
  );
  return allJobs.concat(filtered);
}

export default function getJobs(
  jobs: {
    github: Job[],
    stackoverflow: Job[],
    wwr: Job[],
    remoteok: Job[],
    dribbble: Job[],
    justremote: Job[],
    remoteco: Job[],
    nodesk: Job[],
    cryptocurrency: Job[],
  },
  category: string,
): Job[] {
  // should be added by priority and duplicates should not be added further
  const {
    github,
    dribbble,
    justremote,
    stackoverflow,
    remoteok,
    wwr,
    remoteco,
    nodesk,
    cryptocurrency,
  } = jobs;
  const githubJobs = mapperGithubJobs(github);
  const dribbbleJobs = mapperDribbbleJobs(dribbble);
  const justRemoteJobs = mapperJustRemoteJobs(justremote);
  const stackOverflowJobs = mapperStackOverflowJobs(stackoverflow);
  const remoteokJobs = mapperRemoteOkJobs(remoteok);
  const wwrJobs = mapperWwrJobs(wwr);
  const remotecoJobs = filterRemoteCoDuplicates(mapperRemoteCo(remoteco));
  const nodeskJobs = mapperNodeskJobs(nodesk);
  const cryptocurrencyJobs = mapperCryptocurrencyJobs(cryptocurrency);

  let allJobs = putJobs([], githubJobs, 'github.com');
  allJobs = putJobs(allJobs, dribbbleJobs, 'dribbble.com');
  allJobs = putJobs(allJobs, justRemoteJobs, 'justremote.co');
  allJobs = putJobs(allJobs, stackOverflowJobs, 'stackoverflow');
  allJobs = putJobs(allJobs, remoteokJobs, 'remoteok.io');
  allJobs = putJobs(allJobs, wwrJobs, 'weworkremotely.com');
  allJobs = putJobs(allJobs, remotecoJobs, 'remote.co');
  allJobs = putJobs(allJobs, nodeskJobs, 'nodesk.co');
  allJobs = sortFn(putJobs(allJobs, cryptocurrencyJobs, 'cryptocurrencyjobs.co'));

  return filterCategoryJobs(allJobs, category).map(x => ({
    id: x.id,
    title: x.title,
    company: x.company,
    createdAt: x.createdAt,
    ageDays: x.ageDays,
    ageHours: x.ageHours,
    location: x.location,
    url: x.url,
    tags: x.tags,
    providerId: x.providerId,
  }));
}
