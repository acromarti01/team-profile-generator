const { promptManagerQuestions } = require("./prompts");

const getTeamInfo = () => {
    promptManagerQuestions().then(() => {})
};

getTeamInfo();


