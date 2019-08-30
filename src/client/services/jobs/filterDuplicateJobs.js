// @flow
import * as R from 'ramda';
import { PROVIDERS } from '../../records/Job';
import type { Job } from '../../records/Job';

export default function filterDuplicateJobs(input: Job[]): Job[] {
  const groupedByProviders = R.groupBy(R.prop('providerId'))(input);
  const notremoteok = groupedByProviders[PROVIDERS.GITHUB].concat(
    groupedByProviders[PROVIDERS.STACKOVERFLOW],
    groupedByProviders[PROVIDERS.WWR],
    groupedByProviders[PROVIDERS.DRIBBBLE],
  );
  const filteredOk = groupedByProviders[PROVIDERS.REMOTEOK].filter(
    remoteOkJob =>
      !notremoteok.some(job => {
        const match =
          job.createdAt === remoteOkJob.createdAt ||
          (job.title.toLowerCase() === remoteOkJob.title.toLowerCase() &&
            job.company.toLowerCase().includes(remoteOkJob.company.toLowerCase()));
        return match;
      }),
  );
  const doubleFilteredOk = filteredOk.filter(
    (remoteOkJob, i) =>
      !R.remove(0, i + 1, filteredOk).some(
        x => x.title === remoteOkJob.title && x.company === remoteOkJob.company,
      ),
  );
  return doubleFilteredOk.concat(notremoteok);
}
