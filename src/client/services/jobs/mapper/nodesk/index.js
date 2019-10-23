// @flow
import { differenceInDays, differenceInHours, parse } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';
import normalizeTitle from '../../normalizeTitle';

export default function mapperNodeskJobs(input: any): Job[] {
  return input.map(x => {
    const createdAt = parse(x.pubDate.split(', ')[1], 'dd LLL yyyy HH:mm:ss xx', new Date());

    return {
      id: x.guid,
      title: normalizeTitle(x.title),
      url: x.link, // description: x.description,
      company: '',
      createdAt: createdAt.getTime(),
      ageDays: differenceInDays(new Date(), createdAt),
      ageHours: differenceInHours(new Date(), createdAt),
      tags: getTags(x.title),
      providerId: PROVIDERS.NODESK,
    };
  });
}
