#!/usr/bin/env node
import { calculateDivisors } from './src';

require('yargs')
  .scriptName('calculate-dividors')
  .usage('$0 <cmd> [args]')
  .command(
    'calculate [a] [b]',
    'Prints the amount of dividors',
    yargs => {
      yargs.positional('a', {
        type: 'number',
      });
      yargs.positional('b', {
        type: 'number',
      });
    },
    function ({ a, b }) {
      calculateDivisors(a, b);
    },
  )
  .help().argv;
