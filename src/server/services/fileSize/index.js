// @flow strict
import fs from 'fs';

function getFilesizeInMegaBytes(filename: string) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size / 1000000.0;
  return `${fileSizeInBytes.toFixed(2)}MB`;
}

export default getFilesizeInMegaBytes;
