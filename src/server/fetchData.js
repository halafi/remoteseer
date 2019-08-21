// @flow
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs-extra';

// eslint-disable-next-line import/prefer-default-export
export const DATA_DIR = path.resolve(__dirname, '../../data');

fs.ensureDir(DATA_DIR).then(() => {
  fetch(
    `https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote`,
  )
    .then(res => {
      return res.json();
    })
    .then(json => {
      if (json.type && json.type === 'error') {
        throw new Error(json.message);
      }
      fs.outputJson(path.join(DATA_DIR, 'jobs.json'), json);
    });
});
