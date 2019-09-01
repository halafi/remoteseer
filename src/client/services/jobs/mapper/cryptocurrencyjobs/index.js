// @flow
import { differenceInDays, differenceInHours, parse } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';

export default function mapperCryptocurrencyJobs(input: any): Job[] {
  return input.map(x => {
    const createdAt = parse(x.pubDate.split(', ')[1], 'dd LLL yyyy HH:mm:ss xx', new Date());
    const tags = getTags(x.title);
    if (!tags.includes('cryptocurrency')) {
      tags.push('cryptocurrency');
    }
    if (!tags.includes('blockchain')) {
      tags.push('blockchain');
    }
    return {
      id: x.guid,
      title: x.title,
      url: x.link, // description: x.description,
      company: x.description.split(' is hiring')[0],
      createdAt: createdAt.getTime(),
      ageDays: differenceInDays(new Date(), createdAt),
      ageHours: differenceInHours(new Date(), createdAt),
      tags,
      providerId: PROVIDERS.CRYPTOCURRENCYJOBS,
    };
  });
}
