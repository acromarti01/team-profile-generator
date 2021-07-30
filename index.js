const { promptManagerQuestions } = require("./src/prompts");

const getTeamInfo = () => {
    promptManagerQuestions().then(res => {})
};

getTeamInfo();


