module.exports = {
    manager_questions: [
        {
            type: 'input',
            name: 'manager_name',
            message: 'Enter team manager’s name? '
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter team manager’s id? '
        },
        {
            type: 'input',
            name: 'manager_email',
            message: 'Enter team manager’s email? '
        },
        {
            type: 'input',
            name: 'manager_office_number',
            message: 'Enter team manager’s office number? '
        }
    ],
    menu_questions: [
        {
            type: 'list',
            name: 'engineer_or_intern',
            message: 'Add Engineer, Intern or are you finished? ',
            choices: ["Engineer",
                "Intern",
                "Finished",
            ],
            loop: false
        }
    ],
    engineer_questions: [
        {
            type: 'input',
            name: 'engineer_name',
            message: 'Enter engineer’s name? ',
        },
        {
            type: 'input',
            name: 'engineer_id',
            message: 'Enter engineer’s id? ',
        },
        {
            type: 'input',
            name: 'engineer_email',
            message: 'Enter engineer’s email? ',
        },
        {
            type: 'input',
            name: 'engineer_github_username',
            message: 'Enter engineer’s GitHub username? ',
        }
    ],
    intern_questions: [
        {
            type: 'input',
            name: 'intern_name',
            message: 'Enter intern’s name? ',
        },
        {
            type: 'input',
            name: 'intern_id',
            message: 'Enter intern’s id? ',
        },
        {
            type: 'input',
            name: 'intern_email',
            message: 'Enter intern’s email? ',
        },
        {
            type: 'input',
            name: 'intern_school',
            message: 'Enter intern’s school? ',
        }
    ]

}
