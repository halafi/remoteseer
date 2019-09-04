// @flow
import * as R from 'ramda';
import { ALL_CATEGORIES } from '../../../server/consts/categories';
import type { Job } from '../../records/Job';

export default function filterByCategory(jobs: Job[], category: string): Job[] {
  if (Object.keys(ALL_CATEGORIES).includes(category)) {
    return jobs.filter(job => R.any(tag => job.tags.includes(tag))(ALL_CATEGORIES[category]));
  }
  return jobs;
}
