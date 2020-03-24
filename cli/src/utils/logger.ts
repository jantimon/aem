import * as chalk from 'chalk';

export const log = (...args) => {
  const sbaem = chalk.rgb(255, 71, 133).bold('[sb-aem]');
  console.log(`${sbaem}`, ...args);
};
