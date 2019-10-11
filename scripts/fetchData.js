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
  'remote-product-jobs',
  'remote-programming-jobs',
  'remote-sales-and-marketing-jobs',
  'remote-business-and-management-jobs',
  'remote-copywriting-jobs',
  'remote-design-jobs',
  'remote-devops-sysadmin-jobs',
  'remote-finance-and-legal-jobs',
  'remote-jobs',
];

const JUSTREMOTE_CATEGORIES = [
  'remote-developer-jobs',
  'remote-marketing-jobs',
  'remote-design-jobs',
  'remote-manager-exec-jobs',
];

const REMOTIVE_CATEGORIES = [
  'software-dev',
  'customer-support',
  'design',
  'marketing-sales',
  'product',
  'others',
];

const REMOTECO_CATEGORIES = [
  'developer',
  'accounting',
  'customer-service',
  'online-data-entry',
  'design',
  'developer',
  'online-editing',
  'healthcare',
  'it',
  'legal',
  'marketing',
  'project-management',
  'qa',
  'recruiter',
  'sales',
  'online-teaching',
  'virtual-assistant',
  'writing',
  'other',
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

async function downloadRemoteCo(url, file, category) {
  const response = await fetch(url);
  const data = await response.text();
  const outputFile = path.join(DATA_DIR, file);
  const $ = cheerio.load(data);
  const jobs = [];
  $('.job_listing').each((i, e) => {
    // console.log($(e).html());
    const id = `rco-${category}-${i}`;
    const link = $(e)
      .find('a')
      .attr('href');
    const companyLogo = $(e)
      .find('img')
      .attr('src');
    const title = $(e)
      .find('h3')
      .html()
      .trim();
    const company = $(e)
      .find('.company span')
      .html();
    const date = $(e)
      .find('.date date')
      .html()
      .trim();
    jobs.push({
      id,
      title,
      company,
      companyLogo,
      date,
      category,
      link,
    });
  });
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}
async function downloadJustRemote(url, file, category) {
  const response = await fetch(url);
  const data = await response.text();
  const outputFile = path.join(DATA_DIR, file);
  const $ = cheerio.load(data);
  const jobs = [];
  $('.job-item__JobItemWrapper-s2jmpga-0').each((i, e) => {
    // console.log($(e).html());
    const id = `jr-${category}-${i}`;
    const link = `https://justremote.co/${$(e)
      .find('a')
      .attr('href')
      .trim()}`;
    const title = $(e)
      .find('a div > h4')
      .html()
      .trim();
    const company = $(e)
      .find('a div > div')
      .html()
      .trim();
    const date = $(e)
      .find('a')
      .children()
      .eq(1)
      .html()
      .trim();
    jobs.push({
      id,
      title,
      company,
      date,
      category,
      link,
    });
  });
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadRemotive(url, file, category) {
  const response = await fetch(url);
  const data = await response.text();
  const outputFile = path.join(DATA_DIR, file);
  const $ = cheerio.load(data);
  const jobs = [];
  $('.job-list-item').each((i, e) => {
    // console.log($(e).html());
    const id = `jr-${category}-${i}`;
    const link = `https://remotive.io${$(e)
      .find('.position a')
      .attr('href')
      .trim()}`;
    const title = $(e)
      .find('.position a')
      .html()
      .trim();
    const company = $(e)
      .find('.company span')
      .html()
      .trim();
    const date = $(e)
      .find('.job-date > span')
      .html()
      .trim();
    jobs.push({
      id,
      title,
      company,
      date,
      category,
      link,
    });
  });
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadDribbble(url, file) {
  const response = await fetch(url);
  const data = await response.text();
  const outputFile = path.join(DATA_DIR, file).replace('.html', '.json');
  const $ = cheerio.load(data);
  const jobs = [];
  const date = 'Today'; // fuckers removed it
  $('#job-board-groups')
    .children()
    .each((i, e) => {
      $(e)
        .find('a.job-board-job-link')
        .each((j, job) => {
          // for each job in day period
          const link = `https://dribbble.com${$(job).attr('href')}`;
          const location = $(e)
            .find('.job-board-job-meta > li')
            .html()
            .split('</svg>')[1]
            .trim();
          const company = $(job)
            .find('.job-board-job-company')
            .html()
            .trim();
          const title = $(job)
            .find('.job-board-job-title')
            .html()
            .trim();
          jobs.push({
            id: `drb-${j}`,
            date,
            link,
            title,
            location: location === 'Anywhere' ? '' : location,
            company,
          });
        });
    });
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadNodeskRss(url, file, linkFilter) {
  const response = await fetch(url);
  const data = await response.text();
  const xml = await convert.xml2js(data);
  const items = xml.elements[0].elements[0].elements;
  const jobs = items
    .filter(x => x.name === 'item')
    .map(x => x.elements)
    .reduce((acc, jobArr) => {
      acc.push(
        jobArr.reduce((subacc, prop) => {
          return { ...subacc, [prop.name]: prop.elements && prop.elements[0].text };
        }, {}),
      );
      return acc;
    }, [])
    .filter(x => (x.link && linkFilter ? x.link.includes('remote-jobs') : true));
  const outputFile = path.join(DATA_DIR, file);
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadRss(url, file) {
  console.log(url);
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
  try {
    await fs.ensureDir(DATA_DIR);
    await downloadJson('https://jobs.github.com/positions.json?location=remote', 'githubJobs.json');
    await downloadJson('https://remoteok.io/api', 'remoteOkJobs.json');
    await downloadRss(
      'https://stackoverflow.com/jobs/feed?l=Remote&u=Km&d=20',
      'stackOverflowJobs.json',
    );
    await downloadNodeskRss('https://nodesk.co/index.xml', 'nodeskJobs.json', true);
    await downloadNodeskRss(
      'https://cryptocurrencyjobs.co/index.xml',
      'cryptocurrencyJobs.json',
      false,
    );
    await Promise.all(
      WWR_CATEGORIES.map(wwrCat =>
        downloadRss(`https://weworkremotely.com/categories/${wwrCat}.rss`, `wwr-${wwrCat}.json`),
      ),
    );
    await downloadDribbble(
      'https://dribbble.com/jobs?utf8=%E2%9C%93&category=&anywhere=true&location=Anywhere&role_type=',
      'dribbbleJobs.html',
    );
    await Promise.all(
      REMOTECO_CATEGORIES.map(remoteCoCategory =>
        downloadRemoteCo(
          `https://remote.co/remote-jobs/${remoteCoCategory}/`,
          `remoteco-${remoteCoCategory}.json`,
          remoteCoCategory,
        ),
      ),
    );
    await Promise.all(
      JUSTREMOTE_CATEGORIES.map(justRemoteCategory =>
        downloadJustRemote(
          `https://justremote.co/${justRemoteCategory}`,
          `justremote-${justRemoteCategory}.json`,
          justRemoteCategory,
        ),
      ),
    );
    await Promise.all(
      REMOTIVE_CATEGORIES.map(remotiveCategory =>
        downloadRemotive(
          `https://remotive.io/remote-jobs/${remotiveCategory}`,
          `remotive-${remotiveCategory}-jobs.json`,
          remotiveCategory,
        ),
      ),
    );
    await downloadRemotive('https://remotive.io/remote-jobs/software-dev', 'remotiveJobs.json');
    console.log('[fetchData] done');
  } catch (err) {
    console.log(err);
    console.log('[fetchData] abort');
    process.exit(1);
  }
}

fetchData();
