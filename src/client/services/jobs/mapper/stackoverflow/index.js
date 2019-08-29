// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import getTags from '../../tags';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import normalizeTitle from '../../normalizeTitle';

export default function mapperStackOverflowJobs(input: any): Job[] {
  return input.map(x => {
    const title = normalizeTitle(x.title);
    const companyMatch = title.match(/.+ at ([^(]+)/);
    const company = companyMatch && companyMatch[1] ? companyMatch[1].trim() : '';
    const locationMatch = title.match(/.+(\(.*\))/);
    const location = locationMatch && locationMatch[1].toLowerCase();
    let finalLocation = x.title.toLowerCase().includes('uk/eu only') ? '🇪🇺🇬🇧 EU or UK only' : '';
    if (location && !finalLocation) {
      if (
        location.includes('austin') ||
        location.includes('new york') ||
        location.includes('santa barbara') ||
        location.includes('seattle')
      ) {
        finalLocation = '🇺🇸 United States';
      } else if (location.includes('italy')) {
        finalLocation = '🇮🇹 Italy';
      } else if (location.includes('europe')) {
        finalLocation = '🇪🇺 Europe';
      } else if (location.includes('czechia')) {
        finalLocation = '🇨🇿 Czechia';
      } else if (location.includes('poland')) {
        finalLocation = '🇵🇱 Poland';
      } else if (location.includes('austria')) {
        finalLocation = '🇦🇹 Austria';
      } else if (location.includes('switzerland')) {
        finalLocation = '🇨🇭 Switzerland';
      } else if (location.includes('german') || location.includes('deutschland')) {
        finalLocation = '🇩🇪 Germany';
      } else if (location.includes('denmark')) {
        finalLocation = '🇩🇰 Denmark';
      } else if (location.includes(' uk')) {
        finalLocation = '🇬🇧 United Kingdom';
      } else if (location.includes('south korea')) {
        finalLocation = '🇰🇷 South Korea';
      } else if (location.includes('singapore')) {
        finalLocation = '🇸🇬 Singapore';
      } else if (location.includes('norway')) {
        finalLocation = '🇳🇴 Norway';
      } else if (location.includes('finland')) {
        finalLocation = '🇫🇮 Finland';
      } else if (location.includes('spain')) {
        finalLocation = '🇪🇸 Spain';
      } else if (location.includes('turkey')) {
        finalLocation = '🇹🇷 Turkey';
      } else if (location.includes('budapest')) {
        finalLocation = '🇭🇺 Hungary';
      } else if (location.includes('australia')) {
        finalLocation = '🇦🇺 Australia';
      } else if (location.includes('netherlands')) {
        finalLocation = '🇳🇱 Amsterdam';
      } else if (location.includes('sweden')) {
        finalLocation = '🇸🇪 Sweden';
      } else if (location.includes('brazil')) {
        finalLocation = '🇧🇷 Brazil';
      }
    }
    let finalTitle = title;
    if (companyMatch && companyMatch[1]) {
      finalTitle = finalTitle.replace(`at ${companyMatch[1]}`, '');
    }
    if (location) {
      finalTitle = finalTitle.replace(`${locationMatch[1]}`, '');
    }
    finalTitle = finalTitle.replace(/(\(.*?\))/g, '').trim();
    return {
      id: x.guid,
      url: x.link,
      title: finalTitle,
      // description: x.description,
      createdAt: new Date(x.pubDate).getTime(),
      ageDays: differenceInDays(new Date(), new Date(x.pubDate)),
      ageHours: differenceInHours(new Date(), new Date(x.pubDate)),
      company,
      companyLogo: null,
      companyUrl: null,
      // location: getLocation(title), needs more strictness
      location: finalLocation,
      type: x.category,
      tags: getTags(title),
      providerId: PROVIDERS.STACKOVERFLOW,
    };
  });
}
