import type { Command } from 'commander';

export function opts(program: Command) {
  program.version('0.0.1', '-v, --version', 'output the current version');

  // This is only for demo...
  program
    .option('-d, --debug', 'output extra debugging')
    .requiredOption('-s, --size <type>', 'set size', 'empty');
  // End: This is only for demo
}
