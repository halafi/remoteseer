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
import mapperRemotiveJobs from './mapper/remotive/index';

const sortFn = R.compose(
  R.reverse,
  R.sortBy(R.prop('createdAt')),
);

function filterDuplicates(input: Job[]): Job[] {
  return input.reduce((acc, job) => {
    if (
      acc.find(
        x =>
          x.title.toLowerCase() === job.title.toLowerCase() &&
          x.company.toLowerCase() === job.company.toLowerCase(),
      )
    ) {
      return acc;
    }
    return acc.concat(job);
  }, []);
}

function putJobs(allJobs: Job[], newJobs: Job[]) {
  const filtered = newJobs.filter(
    newJob =>
      !allJobs.find(
        job =>
          (job.title.toLowerCase() === newJob.title.toLowerCase() &&
            job.company.toLowerCase() === newJob.company.toLowerCase()) ||
          (newJob.providerId === PROVIDERS.REMOTEOK && job.createdAt === newJob.createdAt),
      ),
  );
  // console.log(
  //   `[getProcessedJobs] put ${label} jobs: ${filtered.length} (out of ${newJobs.length})`,
  // );
  return allJobs.concat(filtered);
}

export function getProcessedJobStats(jobs: {
  github: Job[],
  stackoverflow: Job[],
  wwr: Job[],
  remoteok: Job[],
  dribbble: Job[],
  justremote: Job[],
  remoteco: Job[],
  nodesk: Job[],
  cryptocurrency: Job[],
  remotive: Job[],
}) {
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
    remotive,
  } = jobs;
  const githubJobs = mapperGithubJobs(github);
  const dribbbleJobs = mapperDribbbleJobs(dribbble);
  const justRemoteJobs = mapperJustRemoteJobs(justremote);
  const stackOverflowJobs = mapperStackOverflowJobs(stackoverflow);
  const remoteokJobs = mapperRemoteOkJobs(remoteok);
  const wwrJobs = mapperWwrJobs(wwr);
  const remotecoJobs = filterDuplicates(mapperRemoteCo(remoteco));
  const nodeskJobs = mapperNodeskJobs(nodesk);
  const cryptocurrencyJobs = mapperCryptocurrencyJobs(cryptocurrency);
  const remotiveJobs = filterDuplicates(
    mapperRemotiveJobs(remotive.filter(x => !x.date.includes('<i'))),
  );
  return {
    github: githubJobs.length,
    dribbble: dribbbleJobs.length,
    justremote: justRemoteJobs.length,
    stackoverflow: stackOverflowJobs.length,
    remoteok: remoteokJobs.length,
    wwr: wwrJobs.length,
    remoteco: remotecoJobs.length,
    nodesk: nodeskJobs.length,
    cryptocurrency: cryptocurrencyJobs.length,
    remotive: remotiveJobs.length,
  };
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
    remotive: Job[],
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
    remotive,
  } = jobs;
  const githubJobs = mapperGithubJobs(github);
  const dribbbleJobs = mapperDribbbleJobs(dribbble);
  const justRemoteJobs = mapperJustRemoteJobs(justremote);
  const stackOverflowJobs = mapperStackOverflowJobs(stackoverflow);
  const remoteokJobs = mapperRemoteOkJobs(remoteok);
  const wwrJobs = mapperWwrJobs(wwr);
  const remotecoJobs = filterDuplicates(mapperRemoteCo(remoteco));
  const nodeskJobs = mapperNodeskJobs(nodesk);
  const cryptocurrencyJobs = mapperCryptocurrencyJobs(cryptocurrency);
  const remotiveJobs = filterDuplicates(
    mapperRemotiveJobs(remotive.filter(x => !x.date.includes('<i'))),
  );

  let allJobs = putJobs([], githubJobs);
  allJobs = putJobs(allJobs, dribbbleJobs);
  allJobs = putJobs(allJobs, justRemoteJobs);
  allJobs = putJobs(allJobs, stackOverflowJobs);
  allJobs = putJobs(allJobs, remoteokJobs);
  allJobs = putJobs(allJobs, wwrJobs);
  allJobs = putJobs(allJobs, remotecoJobs);
  allJobs = putJobs(allJobs, nodeskJobs);
  allJobs = putJobs(allJobs, remotiveJobs);
  allJobs = sortFn(putJobs(allJobs, cryptocurrencyJobs));

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
