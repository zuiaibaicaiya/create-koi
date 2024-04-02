#!/usr/bin/env node
import inquirer from "inquirer";
import { Command } from "commander";
const program = new Command();
program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");
program.parse();

const prompt = inquirer.createPromptModule();
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Anonymous",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Do you like inquirer?",
    default: true,
  },
  {
    type: "list",
    name: "language",
    message: "What is your favorite programming language?",
    choices: ["JavaScript", "Python", "Java", "C#", "C++"],
    default: "JavaScript",
  },
  {
    type: "checkbox",
    name: "skills",
    message: "What skills do you have?",
    choices: [
      { name: "HTML", checked: true },
      { name: "CSS", checked: true },
      {
        name: "JavaScript",
        checked: true,
      },
      { name: "Node.js" },
      { name: "React" },
      { name: "Vue" },
    ],
  },
  {
    type: "password",
    name: "password",
    message: "Enter a password",
    mask: "*",
  },
];
prompt(questions).then((answers) => {
  console.log(answers);
});

