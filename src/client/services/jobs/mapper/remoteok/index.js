// @flow
import { differenceInDays, differenceInHours } from 'date-fns';
import type { Job } from '../../../../records/Job';
import { PROVIDERS } from '../../../../records/Job';
import normalizeTitle from '../../normalizeTitle';
import getTags from '../../tags';

export default function mapperRemoteOkJobs(input: any): Job[] {
  return input
    .filter(x => x.company)
    .map(x => {
      const tags = getTags(x.position);
      const remoteOkTags = Array.from(new Set(x.tags))
        .filter(
          tag =>
            ![
              'analyst',
              'angularjs',
              'mobile apps',
              'c',
              'software engineer',
              'gis',
              'saas',
              'rest apis',
              'google cloud platform',
              'salesforce',
              'lamp',
              'mob',
              'sr.',
              'remote',
              'vm',
              'machine images',
              'infrastructure',
              'cd',
              'ci',
              'vm',
              'virtualization',
              'packer',
              'go',
              'healthcare',
              'development',
              'css',
              'web dev',
              'engineer',
              'architecture',
              'web design',
              'senior',
              'graphic design',
              'bizdev',
              'growth',
              'eng',
              'pm',
              'digital nomad',
              'wordpress development',
              'account executive',
              'customer success',
              'inbound sales',
              'non tech',
              'startup',
              'sales development',
              'airflow',
              'snowflake',
              'unix',
              'git',
              'mysql',
              'buddypress',
              'buddyboss',
              'appboss',
              'vfx',
              'consulting',
              'api',
              'microservices',
              'fintech',
              'finance',
              'gcp',
              'stenciljs',
              'nestjs',
              'storybook',
              'application',
              'infosec',
              'admin',
              'sys admin',
              'chef',
              'rest',
              'healthcare tech',
              'node',
              'rxjava',
              'junit',
              'mockito',
              'reswift',
              'good vibes',
              '😹',
              'clojurescript',
              'vagrant',
              'dev tools',
              'hyperv',
              'virtual box',
              'vmware',
              'web apps',
              'quality assurance',
              'html',
              'travel',
              'deep learning',
              'coordinator',
              'client services',
              'business',
              'executive',
              'director',
              'vp',
              'engineering',
              'performance',
              'virtualbox',
              'data engineering',
              'stats',
              'part time',
              'statistical models',
            ].includes(tag),
        )
        .map(tag => (tag === 'front end' ? 'frontend' : tag))
        .map(tag => (tag === 'macos' ? 'osx' : tag))
        .map(tag => (tag === 'c plus plus' ? 'c++' : tag))
        .map(tag => (tag === 'ruby on rails' ? 'rails' : tag))
        .map(tag => (tag === 'node js' || tag === 'node.js' ? 'nodejs' : tag))
        .map(tag => (tag === 'meteor js' ? 'meteorjs' : tag));
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
