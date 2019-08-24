// @flow
import {
  isToday,
  isWithinInterval,
  startOfYesterday,
  startOfToday,
  subDays,
  differenceInDays,
  differenceInHours,
} from 'date-fns';

type Job = {
  company: string,
  companyLogo: ?string,
  companyUrl: ?string,
  createdAt: number,
  ageDays: number,
  ageHours: number,
  description: string,
  id: number,
  location: string,
  title: string,
  type: string,
  url: string,
  tags: string[],
  providerId: number,
};

const PROVIDERS = {
  GITHUB: 0,
  STACKOVERFLOW: 1,
};

export const PERIODS = {
  today: 'Today',
  week: 'Last 7 days',
  month: 'Last 30 days',
  past: 'Older',
};

// simple
export const TAGS = {
  PHP: 'php',
  KOTLIN: 'kotlin',
  SAP: 'sap',
  SYMFONY: 'symfony',
  LARAVEL: 'laravel',
  WORDPRESS: 'wordpress',
  ELIXIR: 'elixir',
  LINUX: 'linux',
  // JAVA: 'java',
  SPRING: 'spring',
  SCALA: 'scala',
  PYTHON: 'python',
  CLOUD: 'cloud',
  DESIGN: 'design',
  DJANGO: 'django',
  FLASK: 'flask',
  REACT: 'react',
  ANGULAR: 'angular',
  VUE: 'vue',
  CYPRESS: 'cypress',
  LOCUST: 'locust',
  GHERKIN: 'gherkin',
  HIPTEST: 'hiptest',
  OPENGL: 'opengl',
  ANDROID: 'android',
  RUBY: 'ruby',
  RAILS: 'rails',
  IOS: 'ios',
  DEVOPS: 'devops',
  CPP: 'c++',
  SQL: 'sql',
  ELASTICSEARCH: 'elasticsearch',
  AWS: 'aws',
  SALES: 'sales',
  // SENIOR: 'senior',
  // LEAD: 'lead',
  SECURITY: 'security',
  GRAPHQL: 'graphql',
  DOCKER: 'docker',
  KUBERNETES: 'kubernetes',
  RANCHER: 'rancher',
};

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
function getTagsFromTitle(title: string): string[] {
  const tags = [];
  const lowerCaseTitle = title.toLowerCase();
  if (
    lowerCaseTitle.includes('developer') ||
    lowerCaseTitle.includes('engineer') ||
    lowerCaseTitle.includes('development') ||
    lowerCaseTitle.includes('architect')
  ) {
    tags.push('dev');
  }
  if (lowerCaseTitle.includes('product manager')) {
    tags.push('product management');
  }
  if (lowerCaseTitle.includes('big data')) {
    tags.push('big data');
  }
  if (lowerCaseTitle.includes('compiler')) {
    tags.push('compilers');
  }
  if (
    lowerCaseTitle.includes('mobile') ||
    lowerCaseTitle.includes('ios') ||
    lowerCaseTitle.includes('android')
  ) {
    tags.push('mobile');
  }
  if (
    lowerCaseTitle.includes('game') ||
    lowerCaseTitle.includes('gaming') ||
    lowerCaseTitle.includes('games')
  ) {
    tags.push('game dev');
  }
  if (lowerCaseTitle.includes('data scientist') || lowerCaseTitle.includes('data science')) {
    tags.push('data science');
  }
  if (
    lowerCaseTitle.includes('fullstack') ||
    lowerCaseTitle.includes('full stack') ||
    lowerCaseTitle.includes('full-stack')
  ) {
    tags.push('full stack');
  }
  if (
    lowerCaseTitle.includes('macos') ||
    lowerCaseTitle.includes('mac os') ||
    lowerCaseTitle.includes('osx')
  ) {
    tags.push('osx');
  }
  if (
    lowerCaseTitle.includes('backend') ||
    lowerCaseTitle.includes('back end') ||
    lowerCaseTitle.includes('back-end')
  ) {
    tags.push('backend');
  }
  if (lowerCaseTitle.includes('desktop')) {
    tags.push('desktop apps');
  }
  if (
    lowerCaseTitle.includes('test') ||
    lowerCaseTitle.includes('quality') ||
    lowerCaseTitle.includes('qa ')
  ) {
    tags.push('testing');
  }
  if (
    lowerCaseTitle.includes('javascript') ||
    lowerCaseTitle.includes(', js') ||
    lowerCaseTitle.includes('frontend') ||
    lowerCaseTitle.includes('front-end') ||
    lowerCaseTitle.includes('web dev') ||
    lowerCaseTitle.includes('web-dev') ||
    lowerCaseTitle.includes('web app') ||
    lowerCaseTitle.includes('website') ||
    lowerCaseTitle.includes('react') ||
    lowerCaseTitle.includes('angular') ||
    lowerCaseTitle.includes('vue') ||
    lowerCaseTitle.includes('php')
  ) {
    tags.push('javascript');
    tags.push('frontend');
    tags.push('web dev');
  }
  if (
    lowerCaseTitle.includes('wordpress') ||
    lowerCaseTitle.includes('cms') ||
    lowerCaseTitle.includes('drupal') ||
    lowerCaseTitle.includes('magento') ||
    lowerCaseTitle.includes('magnolia')
  ) {
    tags.push('cms');
  }
  if (
    lowerCaseTitle.includes('blockchain') ||
    lowerCaseTitle.includes('ledger') ||
    lowerCaseTitle.includes('crypto')
  ) {
    tags.push('blockchain');
  }
  Object.keys(TAGS).forEach(tag => {
    if (lowerCaseTitle.includes(TAGS[tag])) {
      tags.push(TAGS[tag]);
    }
  });
  if (!lowerCaseTitle.includes('javascript') && lowerCaseTitle.includes('java')) {
    tags.push('java');
  }
  if (
    lowerCaseTitle.includes('golang') ||
    lowerCaseTitle.includes(' go ') ||
    lowerCaseTitle.includes('(go)')
  ) {
    tags.push('golang');
  }
  if (lowerCaseTitle.includes('node')) {
    tags.push('nodejs');
  }
  return tags;
}
export function groupJobs(input: any): any {
  return input.reduce((acc, x) => {
    if (isToday(x.createdAt)) {
      if (!acc.today) {
        acc.today = [x];
      } else {
        acc.today.push(x);
      }
    } else if (
      isWithinInterval(x.createdAt, {
        start: subDays(startOfYesterday(), 6),
        end: startOfToday(),
      })
    ) {
      if (!acc.week) {
        acc.week = [x];
      } else {
        acc.week.push(x);
      }
    } else if (
      isWithinInterval(x.createdAt, {
        start: subDays(startOfYesterday(), 30),
        end: subDays(startOfYesterday(), 6),
      })
    ) {
      if (!acc.month) {
        acc.month = [x];
      } else {
        acc.month.push(x);
      }
    } else {
      if (!acc.past) {
        acc.past = [x];
        return acc;
      }
      acc.past.push(x);
    }
    return acc;
  }, {});
}
const normalizeTitle = title =>
  title
    .replace(' (allows remote)', '')
    .replace(' ()', '')
    .replace('Sr ', 'Senior ')
    .replace('Sr. ', 'Senior ')
    .replace(' (Rails/React)', '')
    .replace('(Remote)', '')
    .replace(' (remote)', '')
    .replace(' (REMOTE)', '')
    .replace(' [REMOTE]', '')
    .replace(' - [Remote]', '')
    .replace(' - Remote', '')
    .replace(', Remote', '')
    .replace('/ Remote ', '')
    .replace(' - REMOTE', '')
    .replace('REMOTE ', '')
    .replace('- Full remote', '')
    .replace('-- 100% Remote, Flexible hours', '')
    .replace('-- 100% REMOTE, FLEXIBLE HOURS', '')
    .replace('- 100% REMOTE, FLEXIBLE HOURS', '')
    .replace('(Go)', '')
    .replace('(UK/EU only)', '')
    .replace('(UK/EU Only)', '')
    .replace('Remote ', '');

export function mapperStackOverflowJobs(input: any): Job[] {
  return input.map(x => {
    const title = normalizeTitle(x.title);
    const companyMatch = title.match(/.+ at ([^(]+)/);
    const company = companyMatch && companyMatch[1] ? companyMatch[1] : '';
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
        finalLocation = '🇦🇺 Australia 🦘';
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
    finalTitle = finalTitle.replace(/(\(.*?\))/g, '');
    return {
      id: x.guid,
      url: x.link,
      title: finalTitle,
      description: x.description,
      createdAt: new Date(x.pubDate).getTime(),
      ageDays: differenceInDays(new Date(), new Date(x.pubDate)),
      ageHours: differenceInHours(new Date(), new Date(x.pubDate)),
      company,
      companyLogo: null,
      companyUrl: null,
      // location: getLocation(title), needs more strictness
      location: finalLocation,
      type: x.category,
      tags: getTagsFromTitle(title),
      providerId: PROVIDERS.STACKOVERFLOW,
    };
  });
}
export function mapperGithubJobs(input: any): Job[] {
  return input.map(x => ({
    company: x.company,
    companyLogo: x.company_logo,
    companyUrl: x.company_url,
    createdAt: new Date(x.created_at).getTime(),
    ageDays: differenceInDays(new Date(), new Date(x.created_at)),
    ageHours: differenceInHours(new Date(), new Date(x.created_at)),
    description: x.description,
    id: x.id,
    location: getLocation(x.location),
    title: normalizeTitle(x.title).replace(/(\(.*?\))/g, ''),
    type: x.type,
    url: x.url,
    tags: getTagsFromTitle(x.title),
    providerId: PROVIDERS.GITHUB,
  }));
}
