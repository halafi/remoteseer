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

export const PERIODS = {
  today: 'Today',
  week: 'Last 7 days',
  month: 'Last 30 days',
  past: 'Older',
};

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

export function mapperGithubJobs(input: any): any {
  return input.map(x => {
    const tags = [];
    const lowerCaseTitle = x.title.toLowerCase();
    if (lowerCaseTitle.includes('php')) {
      tags.push('php');
    }
    if (lowerCaseTitle.includes('backend')) {
      tags.push('backend');
    }
    if (lowerCaseTitle.includes('python')) {
      tags.push('python');
    }
    if (lowerCaseTitle.includes('django')) {
      tags.push('django');
    }
    if (lowerCaseTitle.includes('react')) {
      tags.push('react');
    }
    if (lowerCaseTitle.includes('angular')) {
      tags.push('angular');
    }
    if (lowerCaseTitle.includes('vue')) {
      tags.push('vue');
    }
    if (
      lowerCaseTitle.includes('mobile') ||
      lowerCaseTitle.includes('ios') ||
      lowerCaseTitle.includes('android')
    ) {
      tags.push('mobile');
    }
    if (lowerCaseTitle.includes('ios')) {
      tags.push('ios');
    }
    if (lowerCaseTitle.includes('android')) {
      tags.push('android');
    }
    if (lowerCaseTitle.includes('rails')) {
      tags.push('rails');
    }
    if (lowerCaseTitle.includes('ruby')) {
      tags.push('ruby');
    }
    if (
      lowerCaseTitle.includes('javascript') ||
      lowerCaseTitle.includes('frontend') ||
      lowerCaseTitle.includes('front-end')
    ) {
      tags.push('javascript');
    }
    if (lowerCaseTitle.includes('blockchain')) {
      tags.push('blockchain');
    }
    if (lowerCaseTitle.includes('devops')) {
      tags.push('devops');
    }
    if (lowerCaseTitle.includes('golang')) {
      tags.push('golang');
    }
    const lowerCaseLocation = x.location.toLowerCase();
    // const location =
    //   lowerCaseLocation === 'remote' || lowerCaseLocation === 'remote job' ? '' : x.location;
    let finalLocation = '';
    if (lowerCaseLocation.includes('us') || lowerCaseLocation.includes('america')) {
      finalLocation = '🇺🇸 US only';
    }
    if (lowerCaseLocation.includes('germany')) {
      finalLocation = '🇩🇪 DE only';
    }
    return {
      company: x.company,
      companyLogo: x.company_logo,
      companyUrl: x.company_url,
      createdAt: new Date(x.created_at).getTime(),
      ageDays: differenceInDays(new Date(), new Date(x.created_at)),
      ageHours: differenceInHours(new Date(), new Date(x.created_at)),
      description: x.description,
      id: x.id,
      location: finalLocation,
      title: x.title,
      type: x.type,
      url: x.url,
      tags,
    };
  });
}
