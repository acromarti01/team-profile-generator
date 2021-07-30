const file_system = require('fs');
const inquirer = require('inquirer');
const { promisify } = require('util');
const writeFileAsync = promisify(file_system.writeFile);
const { generateProfile } = require('./template');
const { manager_questions, menu_questions, engineer_questions, intern_questions } = require('./questions');
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const employeeArray = [];  //Array of Manager, Intern and Engineer objects

module.exports = {
    promptManagerQuestions() {
        return inquirer
            .prompt(manager_questions)
            .then(answers => {
                promptMenuOptions();
                const manager = new Manager(answers.manager_office_number);
                manager.name = answers.manager_name;
                manager.id = answers.manager_id;
                manager.email = answers.manager_email;
                employeeArray.push(manager);
            })
    }
}

function promptMenuOptions() {
    return inquirer
        .prompt(menu_questions)
        .then(answers => {
            if (answers.engineer_or_intern === "Engineer") { promptEngineerQuestions(); }
            else if (answers.engineer_or_intern === "Intern") { promptInternQuestions(); }
            else {
                const html = generateProfile(employeeArray);
                writeFileAsync('./dist/index.html', html).then(res => quit())
            }
        })
}

function promptEngineerQuestions() {
    return inquirer
        .prompt(engineer_questions)
        .then(answers => {
            promptMenuOptions();
            const engineer = new Engineer(answers.engineer_github_username);
            engineer.name = answers.engineer_name;
            engineer.id = answers.engineer_id;
            engineer.email = answers.engineer_email;
            employeeArray.push(engineer);
        })
}

function promptInternQuestions() {
    return inquirer
        .prompt(intern_questions)
        .then(answers => {
            promptMenuOptions();
            const intern = new Intern(answers.intern_school);
            intern.name = answers.intern_name;
            intern.id = answers.intern_id;
            intern.email = answers.intern_email;
            employeeArray.push(intern);
        })
}

function quit() {
    console.log("Team Profile Generated");
    process.exit(0);
}

