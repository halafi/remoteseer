// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import fs from 'fs-extra';
import path from 'path';
import colors from 'colors';
import markup from './services/markup/index';
import { CATEGORIES, DEV_CATEGORIES } from './consts/categories';

function getFilesizeInMegaBytes(filename: string) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size / 1000000.0;
  return `${fileSizeInBytes.toFixed(2)}MB`;
}

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
  console.log('[render] done');
}

render();
