// @flow
import * as R from 'ramda';
import { CATEGORIES } from '../../../server/consts/categories';
import type { Job } from '../../records/Job';

export default function filterByCategory(jobs: Job[], category: string): Job[] {
  if (Object.keys(CATEGORIES).includes(category)) {
    return jobs.filter(job => R.any(tag => job.tags.includes(tag))(CATEGORIES[category]));
  }
  return jobs;
}
