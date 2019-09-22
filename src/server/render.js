// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import fs from 'fs-extra';
import path from 'path';
import colors from 'colors';
import markup from './services/markup/index';
import {
  CATEGORIES,
  DEV_CATEGORIES,
  SUBSUBCATEGORIES,
  SUBSUBCATEGORIES_META,
} from './consts/categories';
import getFilesizeInMegaBytes from './services/fileSize/index';

function renderPage(url: string, pagePath: string): Promise<boolean | Error> {
  return new Promise((resolve, reject) => {
    fs.ensureDir(pagePath).then(() => {
      const filePath = path.relative(process.cwd(), path.join(pagePath, 'index.html'));
      let htmlStream;
      try {
        htmlStream = markup(url);
      } catch (err) {
        console.error(err);
        process.exit(1); // ideally should be reject, but careful that return code is still 1 of the script
      }
      if (htmlStream) {
        const fileStream = fs.createWriteStream(filePath);
        htmlStream.pipe(fileStream);
        fileStream.on('close', () => {
          console.log(
            `[render] ✔ ${getFilesizeInMegaBytes(filePath)} ${filePath.replace(
              url,
              `${colors.blue(url)}`,
            )}`,
          );
          resolve(true);
        });
        fileStream.on('error', err => {
          console.error(`[render] Error: ${err}`);
          reject(err);
        });
      }
    });
  });
}

async function render() {
  const rootDir = path.join(__dirname, '../static');
  // const outputDir = path.join(rootDir, 'pages');
  await fs.ensureDir(rootDir);
  // await fs.ensureDir(outputDir);
  await renderPage(`/`, rootDir); // put main index.html to static
  const aboutDir = path.join(rootDir, 'about');
  await fs.ensureDir(aboutDir);
  await renderPage(`/about/`, aboutDir);
  const companiesDir = path.join(rootDir, 'companies-hiring-remotely');
  await fs.ensureDir(companiesDir);
  await renderPage(`/companies-hiring-remotely/`, companiesDir);
  await Promise.all(
    Object.keys(CATEGORIES).map(async category => {
      const filepath = path.join(rootDir, `remote-${category}-jobs`);
      await fs.ensureDir(filepath);
      await renderPage(`/remote-${category}-jobs/`, filepath);
    }),
  );
  await Promise.all(
    Object.keys(DEV_CATEGORIES).map(async category => {
      const filepath = path.join(rootDir, `remote-development-jobs/${category}`);
      await fs.ensureDir(filepath);
      await renderPage(`/remote-development-jobs/${category}/`, filepath);
    }),
  );
  await Promise.all(
    Object.keys(SUBSUBCATEGORIES).map(async category => {
      const filepath = path.join(
        rootDir,
        SUBSUBCATEGORIES_META[category].link.slice(
          1,
          SUBSUBCATEGORIES_META[category].link.length - 1,
        ),
      );
      await fs.ensureDir(filepath);
      await renderPage(SUBSUBCATEGORIES_META[category].link, filepath);
    }),
  );
  console.log('[render] done');
}

render();
