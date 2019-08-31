// @flow
import { differenceInDays, differenceInHours, parse } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';
import normalizeTitle from '../../normalizeTitle';

export default function mapperJustRemoteJobs(input: any): Job[] {
  return input.map(x => {
    const createdAt = parse(x.date, 'dd MMM', new Date()).getTime();
    const tags = getTags(x.title);
    if (x.category.includes('design') && !tags.includes('design')) {
      tags.push('design');
    }
    if (x.category.includes('marketing') && !tags.includes('marketing')) {
      tags.push('marketing');
    }
    if (x.category.includes('developer') && !tags.includes('dev')) {
      tags.push('dev');
    }
    if (x.category.includes('manager') && !tags.includes('manager')) {
      tags.push('manager');
      if (!tags.includes('exect')) {
        tags.push('exec');
      }
    }
    let finalTitle = normalizeTitle(x.title);
    const companyMatch = x.title.match(/.+ at ([^(]+)/);
    if (companyMatch && companyMatch[1]) {
      finalTitle = finalTitle.replace(`at ${companyMatch[1]}`, '');
    }
    finalTitle = finalTitle.replace('&amp;', '&').replace('&#x2013;', '-');

    return {
      company: x.company.replace('&apos;', "'").replace('&amp;', '&'),
      companyLogo: '',
      logo: '',
      companyUrl: '',
      createdAt,
      ageDays: differenceInDays(new Date(), createdAt),
      ageHours: differenceInHours(new Date(), createdAt),
      id: x.id,
      location: '',
      title: finalTitle, // normalizeTitle(x.title) .replace(/(\(.*?\))/g, '') .trim(),
      url: x.link,
      tags,
      providerId: PROVIDERS.JUSTREMOTE,
    };
  });
}
