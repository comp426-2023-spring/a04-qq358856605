#!/usr/bin/env node
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {string: ['h', 'r']});
const help = function() {
    const helpText = `
    Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}
    `
    console.log(helpText);
}
const rules = function() {
    const rulesText = `
    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock SMOOSHES Lizard
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
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
    console.log(JSON.stringify(rpsls(args._[0])));
} catch(e) {
    console.error(e.message); 
    help();
    rules();
    process.exit(1);
}