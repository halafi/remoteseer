// @flow
// eslint-disable-next-line
export const PROVIDERS = {
  GITHUB: 0,
  STACKOVERFLOW: 1,
  REMOTEOK: 2,
  WWR: 3,
  DRIBBBLE: 4,
};

type ProviderId = 0 | 1 | 2 | 3;

export type Job = {
  id: number,
  company: string,
  companyLogo: ?string,
  logo?: ?string,
  companyUrl: ?string,
  createdAt: number,
  ageDays: number,
  ageHours: number,
  location: string,
  title: string,
  type: string,
  url: string,
  tags: string[],
  providerId: ProviderId,
  // description: string,
  category?: string, // wwrcategory
};
