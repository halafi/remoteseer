// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import fetch from 'node-fetch';
import path from 'path';
import cheerio from 'cheerio';
import fs from 'fs-extra';
import convert from 'xml-js';

// DUPLICATE
const WWR_CATEGORIES = [
  'remote-customer-support-jobs',
  'product',
  'remote-programming-jobs',
  'sales-and-marketing',
  'business-and-management',
  'remote-copywriting-jobs',
  'remote-design-jobs',
  'remote-devops-sysadmin-jobs',
  'finance-and-legal',
  'remote-jobs',
];

const DATA_DIR = path.resolve(__dirname, '../data');

async function downloadJson(url, file) {
  const response = await fetch(url);
  const data = await response.json();
  if (data.type && data.type === 'error') {
    throw new Error(data.message);
  }
  const outputFile = path.join(DATA_DIR, file);
  await fs.outputJson(outputFile, data);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadHtml(url, file) {
  const response = await fetch(url);
  const data = await response.text();
  const outputFile = path.join(DATA_DIR, file).replace('.html', '.json');
  const $ = cheerio.load(data);
  const jobs = [];
  let date = 'Today';
  $('.all-of-the-jobs')
    .children()
    .each((i, e) => {
      const className = $(e)
        .attr('class')
        .split(' ')
        .join('.');
      if (className === 'jobs-date') {
        date = $(e)
          .html()
          .trim(); // August 1 or August 11
      } else if (className === 'jobs-list') {
        $(e)
          .find('a.item-link')
          .each((j, job) => {
            // for each job in day period
            const link = `https://dribbble.com${$(job).attr('href')}`;
            const location = $(job)
              .find('.item-meta')
              .html()
              .trim();
            const company = $(job)
              .find('.item-title')
              .html()
              .trim();
            const title = $(job)
              .find('.item-desc')
              .html()
              .trim();
            const companyLogo = $(job)
              .find('.item-team img')
              .attr('src')
              .trim();
            console.log(companyLogo);
            jobs.push({
              id: `drb-${j}`,
              date,
              link,
              title,
              location,
              company,
            });
          });
      }
    });
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadRss(url, file) {
  const response = await fetch(url);
  const data = await response.text();
  const xml = await convert.xml2js(data);
  const items = xml.elements[0].elements[0].elements;
  const jobs = items
    .map(x => x.elements)
    .reduce((acc, jobArr) => {
      acc.push(
        jobArr.reduce((subacc, prop) => {
          return { ...subacc, [prop.name]: prop.elements && prop.elements[0].text };
        }, {}),
      );
      return acc;
    }, [])
    .filter(x => x.link && (x.category || x.guid)); // link and category for soverflow, link and guid for wwr
  const outputFile = path.join(DATA_DIR, file);
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function fetchData() {
  console.log('[fetchData] start');
  await fs.ensureDir(DATA_DIR);
  await downloadJson(
    'https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote',
    'githubJobs.json',
  );
  await downloadJson('https://remoteok.io/api', 'remoteOkJobs.json');
  await downloadRss(
    'https://stackoverflow.com/jobs/feed?l=Remote&u=Km&d=20',
    'stackOverflowJobs.json',
  );
  await Promise.all(
    WWR_CATEGORIES.map(wwrCat =>
      downloadRss(`https://weworkremotely.com/categories/${wwrCat}.rss`, `wwr-${wwrCat}.json`),
    ),
  );
  await downloadHtml(
    'https://dribbble.com/jobs?utf8=%E2%9C%93&category=&anywhere=true&location=Anywhere&role_type=',
    'dribbbleJobs.html',
  );
  console.log('[fetchData] done');
}

fetchData();
