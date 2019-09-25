// @flow
import { differenceInDays, subHours, subDays, differenceInHours } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';
import normalizeTitle from '../../normalizeTitle';

export default function mapperRemoteCo(input: any): Job[] {
  const today = new Date();
  return input.map(x => {
    const hours = x.date.includes('hours ago') ? Number(x.date.split(' hours ago')[0]) : 0;
    let days = 0;
    if (x.date.includes('day')) {
      days = Number(x.date.split(' day')[0]);
    } else if (x.date.includes('week')) {
      days = Number(x.date.split(' week')[0]) * 7;
    } else if (x.date.includes('month')) {
      days = Number(x.date.split(' month')[0]) * 30;
    }
    let createdAt = subHours(today, 1);
    if (hours) {
      createdAt = subHours(today, hours);
    } else if (days) {
      createdAt = subHours(subDays(today, days), 1);
    }
    const tags = getTags(x.title);
    if (x.category.includes('writing') && !tags.includes('copywriting')) {
      tags.push('copywriting');
    }
    if (x.category.includes('virtual-assistant') && !tags.includes('virtual assistant')) {
      tags.push('virtual assistant');
    }
    if (x.category.includes('online-teaching') && !tags.includes('online teaching')) {
      tags.push('online teaching');
    }
    if (
      (x.category.includes('sales') && !tags.includes('sales')) ||
      (x.category.includes('marketing') && !tags.includes('marketing'))
    ) {
      if (!tags.includes('sales')) {
        tags.push('sales');
      }
      if (!tags.includes('marketing')) {
        tags.push('marketing');
      }
    }
    if (x.category.includes('recruiter') && !tags.includes('recruiter')) {
      tags.push('human resources');
    }
    if (x.category.includes('customer-service') && !tags.includes('customer support')) {
      tags.push('customer support');
    }
    if (x.category.includes('accounting') && !tags.includes('accounting')) {
      tags.push('accounting');
    }
    if (x.category.includes('legal') && !tags.includes('legal')) {
      tags.push('finance and legal');
    }
    if (x.category.includes('healthcare') && !tags.includes('healthcare')) {
      tags.push('healthcare');
    }
    if (x.category.includes('qa') && !tags.includes('testing')) {
      tags.push('testing');
    }
    if (x.category.includes('design') && !tags.includes('design')) {
      tags.push('design');
    }
    if (x.category.includes('developer') && !tags.includes('dev')) {
      tags.push('dev');
    }
    if (x.category.includes('online-data-entry') && !tags.includes('data entry')) {
      tags.push('data entry');
    }
    if (x.category.includes('project management') && !tags.includes('project management')) {
      tags.push('project management');
    }
    if (x.category.includes('online-teaching') && !tags.includes('online teaching')) {
      tags.push('online teaching');
    }
    if (x.category.includes('online-editing') && !tags.includes('online editing')) {
      tags.push('online editing');
    }

    return {
      company: x.company
        .replace('&amp;', '&')
        .replace('&apos;', "'")
        .replace('&#x2013;', '-'),
      companyLogo: '',
      logo: '',
      companyUrl: '',
      createdAt: createdAt.getTime(),
      ageDays: days || differenceInDays(today, createdAt),
      ageHours: hours || differenceInHours(today, createdAt),
      id: x.id,
      location: '',
      title: normalizeTitle(x.title)
        .replace('&amp;', '&')
        .replace('&apos;', "'")
        .replace('&#x2013;', '-')
        .replace('&#x2013;', '-'),
      url: x.link,
      tags,
      providerId: PROVIDERS.REMOTECO,
    };
  });
}
