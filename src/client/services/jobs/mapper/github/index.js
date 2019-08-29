// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import getTags from '../../tags';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import normalizeTitle from '../../normalizeTitle';

function getLocation(input: string): string {
  const lowerCaseInput = input.toLocaleLowerCase();
  let finalLocation = '';
  if (lowerCaseInput.includes('us') || lowerCaseInput.includes('america')) {
    finalLocation = '🇺🇸 United States';
  }
  if (lowerCaseInput.includes('germany')) {
    finalLocation = '🇩🇪 Germany';
  }
  return finalLocation;
}

export default function mapperGithubJobs(input: any): Job[] {
  return input.map(x => ({
    company: x.company,
    companyLogo: x.company_logo,
    companyUrl: x.company_url,
    createdAt: new Date(x.created_at).getTime(),
    ageDays: differenceInDays(new Date(), new Date(x.created_at)),
    ageHours: differenceInHours(new Date(), new Date(x.created_at)), // description: x.description,
    id: x.id,
    location: getLocation(x.location),
    title: normalizeTitle(x.title)
      .replace(/(\(.*?\))/g, '')
      .trim(),
    type: x.type,
    url: x.url,
    tags: getTags(x.title),
    providerId: PROVIDERS.GITHUB,
  }));
}
