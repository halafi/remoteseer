// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';

export default function mapperRemoteOkJobs(input: any): Job[] {
  return input.map(x => ({
    id: x.id,
    title: x.position,
    location: '',
    url: x.url, // description: x.description,
    company: x.company,
    companyLogo: x.company_logo,
    logo: x.logo,
    companyUrl: '',
    createdAt: new Date(x.date).getTime(),
    ageDays: differenceInDays(new Date(), new Date(x.date)),
    ageHours: differenceInHours(new Date(), new Date(x.date)),
    tags: Array.from(new Set(x.tags)),
    providerId: PROVIDERS.REMOTEOK,
  }));
}
