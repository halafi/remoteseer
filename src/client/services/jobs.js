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

export function groupJobs(input) {
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

export function mapperGithubJobs(input) {
  return input.map(x => ({
    company: x.company,
    companyLogo: x.company_logo,
    companyUrl: x.company_url,
    createdAt: new Date(x.created_at).getTime(),
    ageDays: differenceInDays(new Date(), new Date(x.created_at)),
    ageHours: differenceInHours(new Date(), new Date(x.created_at)),
    description: x.description,
    id: x.id,
    location: x.location,
    title: x.title,
    type: x.type,
    url: x.url,
  }));
}
