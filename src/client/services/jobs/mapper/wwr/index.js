// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import getTags from '../../tags';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import normalizeTitle from '../../normalizeTitle';

const WWR_TAGS = {
  'remote-customer-support-jobs': 'customer support',
  product: 'product',
  'remote-programming-jobs': 'dev',
  'sales-and-marketing': 'sales and marketing',
  'business-and-management': 'management',
  'remote-copywriting-jobs': 'copywriting',
  'remote-design-jobs': 'design',
  'remote-devops-sysadmin-jobs': 'devops',
  'finance-and-legal': 'finance and legal',
  'remote-jobs': '',
};

export default function mapperWwrJobs(input: any): Job[] {
  return input.map(x => {
    const split = x.title.split(': ');
    const tags = getTags(split[1]);
    if (WWR_TAGS[x.category] && !tags.includes(WWR_TAGS[x.category])) {
      tags.push(WWR_TAGS[x.category]);
    }
    return {
      id: x.guid,
      title: normalizeTitle(split[1]).trim(),
      location: '',
      url: x.link, // description: x.description,
      company: split[0],
      companyLogo: '',
      companyUrl: '',
      createdAt: new Date(x.pubDate).getTime(),
      ageDays: differenceInDays(new Date(), new Date(x.pubDate)),
      ageHours: differenceInHours(new Date(), new Date(x.pubDate)),
      tags,
      providerId: PROVIDERS.WWR,
    };
  });
}
