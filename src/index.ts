import { Command } from 'commander';

import { main } from './main';
import { opts } from './opts';

const program = new Command();

opts(program);

program.parse(process.argv);

export async function init() {
  try {
    const opts = program.opts();
    await main(opts);
    return 0;
  } catch (error: any) {
    console.error(error.toString());
  }
}

init();
