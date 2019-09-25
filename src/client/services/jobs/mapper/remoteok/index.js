// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import normalizeTitle from '../../normalizeTitle';
import getTags, { ALLOWED_TAGS, TAGS } from '../../tags';

export default function mapperRemoteOkJobs(input: any): Job[] {
  return input
    .filter(x => x.company)
    .map(x => {
      const tags = getTags(x.position);
      const remoteOkTags = Array.from(new Set(x.tags))
        .map(tag => (tag === 'front end' ? ALLOWED_TAGS.FRONTEND : tag))
        .map(tag => (tag === 'macos' ? ALLOWED_TAGS.OSX : tag))
        .map(tag => (tag === 'c plus plus' ? TAGS.CPP : tag))
        .map(tag => (tag === 'ruby on rails' ? TAGS.RAILS : tag))
        .map(tag => (tag === 'product manager' ? ALLOWED_TAGS.PRODUCT_MANAGEMENT : tag))
        .map(tag => (tag === 'node js' || tag === 'node.js' ? ALLOWED_TAGS.NODEJS : tag))
        .map(tag => (tag === 'meteor js' ? 'meteorjs' : tag))
        .filter(tag =>
          Object.values(ALLOWED_TAGS)
            .concat(Object.values(TAGS))
            .includes(tag),
        );

      const finalTags = tags.concat(remoteOkTags.filter(tag => !tags.includes(tag)));
      return {
        id: x.id,
        title: normalizeTitle(x.position),
        location: '',
        url: x.url, // description: x.description,
        company: x.company,
        companyLogo: x.company_logo,
        logo: x.logo,
        companyUrl: '',
        createdAt: new Date(x.date).getTime(),
        ageDays: differenceInDays(new Date(), new Date(x.date)),
        ageHours: differenceInHours(new Date(), new Date(x.date)),
        tags: finalTags,
        providerId: PROVIDERS.REMOTEOK,
      };
    });
}
