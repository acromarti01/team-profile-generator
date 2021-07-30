function createHTML(answers) {
    let html = firstHalf_HTMLDocument();
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].role === "Manager") {
            html = html + createManagerCard(answers[i]);
        }
        else if (answers[i].role === "Engineer") {
            html = html + createEngineerCard(answers[i]);
        }
        else { html = html + createInternCard(answers[i]); }
    }
    html = html + secondHalf_HTMLDocument(); 
    return html; 
}

module.exports = { generateProfile: (answers) => createHTML(answers) } 


function firstHalf_HTMLDocument() {
    const html =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
        integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <header></header>
    <main class="container">
`
    return html;
}

function secondHalf_HTMLDocument() {
    const html =
        `</main>

<footer></footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>
`
    return html;
}



function createManagerCard(manager_class) {
    const html =
        `
<div class="row">
    <div class="col s12 m6">
        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="manager-name">${manager_class.name}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">free_breakfast</i>
                    <label class="role">${manager_class.role}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${manager_class.id}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: </p> <a href="${manager_class.email}">${manager_class.email}</a>
                    </li>
                    <li class="collection-item">
                        <p>Office number: ${manager_class.officeNumber}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
    return html;
}

function createEngineerCard(engineer_class) {
    const html =
        `
<div class="row">
    <div class="col s12 m6">
        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="manager-name">${engineer_class.name}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">free_breakfast</i>
                    <label class="role">${engineer_class.role}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${engineer_class.id}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: </p> <a href="${engineer_class.email}">${engineer_class.email}</a>
                    </li>
                    <li class="collection-item">
                        <p>Github: </p> <a href="${engineer_class.getGithub()}">${engineer_class.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
    return html;
}

function createInternCard(intern_class) {
    const html =
        `
<div class="row">
    <div class="col s12 m6">
        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="manager-name">${intern_class.name}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">free_breakfast</i>
                    <label class="role">${intern_class.role}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${intern_class.id}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: <span>${intern_class.email}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>School: <span>${intern_class.getSchool()}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
    return html;
}





