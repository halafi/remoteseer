// @flow
import { differenceInDays, differenceInHours, subHours, subDays } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';
import normalizeTitle from '../../normalizeTitle';

export default function mapperRemotiveJobs(input: any): Job[] {
  const today = new Date();
  return input.map(x => {
    let days = x.date.includes('Yesterday') ? 1 : 0;
    if (x.date.includes(' day')) {
      days = Number(x.date.split(' day')[0]);
    } else if (x.date.includes(' week')) {
      days = Number(x.date.split(' week')[0]) * 7;
    } else if (x.date.includes(' month')) {
      days = Number(x.date.split(' month')[0]) * 30;
    }
    let createdAt = subHours(today, 1);
    if (days) {
      createdAt = subHours(subDays(today, days), 1); // subtract 1 hour to not make it so fresh since we do not know exact date
    }
    const tags = getTags(x.title);
    if (x.category === 'marketing-sales' && !tags.includes('sales and marketing')) {
      tags.push('sales and marketing');
    } else if (x.category === 'design' && !tags.includes('design')) {
      tags.push('design');
    } else if (x.category === 'customer-support' && !tags.includes('customer support')) {
      tags.push('customer support');
    } else if (x.category === 'software-dev' && !tags.includes('dev')) {
      tags.push('dev');
    } else if (x.category === 'product' && !tags.includes('product')) {
      tags.push('product');
    }
    // TODO: x.category tag
    return {
      id: x.id,
      title: normalizeTitle(
        x.title
          .replace('&amp;', '&')
          .replace('&#x2013;', '–')
          .replace('&#x2014;', '—'),
      ),
      location: '',
      url: x.link, // description: x.description,
      company: x.company.replace('&amp;', '&').replace('&#x26A1;&#xFE0F;', ''),
      createdAt: createdAt.getTime(),
      ageDays: differenceInDays(new Date(), createdAt),
      ageHours: differenceInHours(new Date(), createdAt),
      tags: getTags(x.title),
      providerId: PROVIDERS.REMOTIVE,
    };
  });
}
