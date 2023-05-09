#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {string: ['h', 'r']});
const help = function() {
    const helpText = `
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}
    `
    console.log(helpText);
}
const rules = function() {
    const rulesText = `
    Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors
    `
    console.log(rulesText);
}
if(args.h !== undefined || args.help) {
    help();
    process.exit();
}
if(args.r !== undefined || args.rules) {
    rules();
    process.exit();
}

try {
    console.log(JSON.stringify(rps(args._[0])));
} catch(e) {
    console.error(e.message); 
    help();
    rules();
    process.exit(1);
}