import type { OptionValues } from 'commander';

import { execute } from './utils/execute';

export async function main(opts: OptionValues) {
  // You code here...

  // This is only for demo...
  if ('debug' in opts) {
    // Do something if you pass the "--debug" parameter
    console.log(opts);
  }

  if ('size' in opts) {
    if (opts.size !== 'empty') {
      // Do something if you pass the "--size 16" parameter
      console.log(`Size: ${opts.size}`);
    }
  }

  // For example, let's run the bash command
  try {
    // Get distribution codename
    const result = await execute('lsb_release -cs');

    // Print distribution codename
    console.log('Release name:', result);
  } catch (error: any) {
    console.error(error.toString());
  }
  // End: This is only for demo
}
