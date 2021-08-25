import fs from 'fs';
import path from 'path';

const readFile = (resolve, reject) => {
  const fPath = path.join(__dirname, '../template.html');

  fs.readFile(fPath, 'utf8', (err, data) => {
    if (err) reject(err.message);

    resolve(data);
  });
};

export const getTemplate = () => new Promise(readFile);
