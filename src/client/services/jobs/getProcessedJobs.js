// @flow
import * as R from 'ramda';
import type { Job } from '../../records/Job';
import mapperGithubJobs from './mapper/github';
import mapperStackOverflowJobs from './mapper/stackoverflow';
import mapperRemoteOkJobs from './mapper/remoteok';
import mapperWwrJobs from './mapper/wwr';
import mapperDribbbleJobs from './mapper/dribbble';
import mapperJustRemoteJobs from './mapper/justremote/index';
import filterDuplicateJobs from './filterDuplicateJobs';
import filterCategoryJobs from './filterCategoryJobs';

const sortFn = R.compose(
  R.reverse,
  R.sortBy(R.prop('createdAt')),
);

export default function getJobs(
  jobs: {
    github: Job[],
    stackoverflow: Job[],
    wwr: Job[],
    remoteok: Job[],
    dribbble: Job[],
    justremote: Job[],
  },
  category: string,
): Job[] {
  const allJobs = sortFn(
    filterDuplicateJobs(
      mapperGithubJobs(jobs.github).concat(
        mapperStackOverflowJobs(jobs.stackoverflow)
          .concat(mapperRemoteOkJobs(jobs.remoteok))
          .concat(mapperWwrJobs(jobs.wwr))
          .concat(mapperDribbbleJobs(jobs.dribbble))
          .concat(mapperJustRemoteJobs(jobs.justremote)),
      ),
    ),
  );
  return filterCategoryJobs(allJobs, category);
}
