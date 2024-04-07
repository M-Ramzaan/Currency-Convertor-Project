#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { randomBytes } from "crypto";
import Choices from "inquirer/lib/objects/choices.js";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow(
    `Welcome to "Razmi's Currency Convertor`
  );
  await sleep();
  rainbowTitle.stop();
  console.log(`ℳ𝒶𝒹ℯ 𝒷𝓎 ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 ℛ𝒶𝓂𝓏𝒶𝓃 𝒜𝓀𝓇𝒶𝓂`);
}

await welcome();

const currency: any = {
  USD: 1, //Base Currency
  PKR: 277.54,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.3,
  SAR: 3.75,
};

let userRes = await inquirer.prompt([
  {
    name: "Current",
    message: "Select current currency.",
    type: "list",
    choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR"],
  },
  {
    name: "Required",
    message: "Select required currency",
    type: "list",
    choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR"],
  },
  {
    name: "amount",
    message: "Enter amount you want to convert",
    type: "number",
  },
]);

if (userRes.Current === userRes.Required) {
  console.log(
    chalk.bgRed(
      `Sorry! You select the same currency for conversion. Please select a different current and required currency.`
    )
  );
} else {
  let curr_currency = currency[userRes.Current];
  let req_currency = currency[userRes.Required];
  let user_input = userRes.amount;
  let conv_currency = chalk.bgYellow(user_input / curr_currency);
  console.log(conv_currency);
}
