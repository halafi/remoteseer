// @flow
import { differenceInDays, differenceInHours, parse } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import getTags from '../../tags';
import normalizeTitle from '../../normalizeTitle';

export default function mapperDribbbleJobs(input: any): Job[] {
  return input.map(x => {
    const createdAt =
      x.date === 'Now Hiring'
        ? new Date().getTime()
        : parse(x.date, 'MMMM d', new Date()).getTime();
    let location =
      x.location.includes('Anywhere') || x.location.includes('Remote') ? '' : x.location;
    if (location.includes('United Kingdom') || location.includes('London')) {
      location = `🇬🇧 ${location}`;
    } else if (location.includes('Europe')) {
      location = '🇪🇺 Europe';
    } else if (location.includes('Portugal')) {
      location = '🇵🇹 Portugal';
    } else if (location.includes('Canada')) {
      location = '🇨🇦 Canada';
    } else if (location.includes('Germany')) {
      location = '🇩🇪 Germany';
    } else if (
      location.includes('North America') ||
      location.includes('United States') ||
      location.includes('US')
    ) {
      location = '🇺🇸 United States';
    } else if (
      location.includes('Richmond') ||
      location.includes('Chicago') ||
      location.includes('Boston') ||
      location.includes('Dearborn') ||
      location.includes('San Francisco') ||
      location.includes('San Diego') ||
      location.includes(', CA') ||
      location.includes('Los Angeles') ||
      location.includes('los angeles') ||
      location.includes('New York') ||
      location.includes('South Carolina') ||
      location.includes('Austin')
    ) {
      location = `🇺🇸 ${location}`;
    }
    return {
      id: x.id,
      title: normalizeTitle(x.title).replace('&amp;', '&'),
      location,
      url: x.link, // description: x.description,
      company: x.company
        .replace('&amp;', '&')
        .replace('&apos;', "'")
        .replace('&#x14D;', 'ō'),
      companyLogo: '',
      logo: '',
      companyUrl: '',
      createdAt,
      ageDays: differenceInDays(new Date(), createdAt),
      ageHours: differenceInHours(new Date(), createdAt),
      tags: getTags(x.title),
      providerId: PROVIDERS.DRIBBBLE,
    };
  });
}
