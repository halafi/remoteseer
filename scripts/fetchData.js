// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs-extra';

const DATA_DIR = path.resolve(__dirname, '../data');

async function fetchData() {
  console.log('[fetchData] start');
  await fs.ensureDir(DATA_DIR);
  const response = await fetch(
    'https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote',
  );
  const data = await response.json();

  if (data.type && data.type === 'error') {
    throw new Error(data.message);
  }
  await fs.outputJson(path.join(DATA_DIR, 'jobs.json'), data);
  console.log(`[fetchData] saved ${path.join(DATA_DIR, 'jobs.json')}`);
  console.log('[fetchData] done');
}

fetchData();
