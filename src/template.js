function createHTML(employeeArray) {
    let html = firstHalf_HTMLDocument();
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].role === "Manager") {
            html = html + createManagerCard(employeeArray[i]);
        }
        else if (employeeArray[i].role === "Engineer") {
            html = html + createEngineerCard(employeeArray[i]);
        }
        else { html = html + createInternCard(employeeArray[i]); }
    }
    html = html + secondHalf_HTMLDocument(); 
    return html; 
}

module.exports = { generateProfile: (employeeArray) => createHTML(employeeArray) } 


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
    <header>
        <h3>My Team</h3>
    </header>
    <main class="container">
`
    return html;
}

function secondHalf_HTMLDocument() {
    const html =
        `
</main>

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

        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="employee-name">${manager_class.getName()}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">free_breakfast</i>
                    <label class="role">${manager_class.getRole()}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${manager_class.getId()}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: <a href="mailto:${manager_class.getEmail()}?subject=Subject&body=message%20goes%20here">${manager_class.getEmail()}</a></p>                        
                    </li>
                    <li class="collection-item">
                        <p>Office number: ${manager_class.officeNumber}</p>
                    </li>
                </ul>
            </div>
        </div>
`
    return html;
}

function createEngineerCard(engineer_class) {
    const html =
        `
        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="employee-name">${engineer_class.getName()}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">business_center</i>
                    <label class="role">${engineer_class.getRole()}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${engineer_class.getId()}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: <a href="mailto:${engineer_class.getEmail()}?subject=Subject&body=message%20goes%20here">${engineer_class.getEmail()}</a></p>
                    </li>
                    <li class="collection-item">
                        <p>Github: <a href="https://github.com/${engineer_class.getGithub()}">${engineer_class.getGithub()}</a></p>                    
                    </li>
                </ul>
            </div>
        </div>
`
    return html;
}

function createInternCard(intern_class) {
    const html =
        `
        <div class="card grey lighten-3">
            <div class="card-title blue darken-2 white-text">
                <label class="employee-name">${intern_class.getName()}</label>
                <div class="flex-this">                        
                    <i class="small material-icons">school</i>
                    <label class="role">${intern_class.getRole()}</label> 
                </div>                                               
            </div>
            <div class="padding-div">
                <ul class="collection">
                    <li class="collection-item">
                        <p>ID: <span>${intern_class.getId()}</span></p>
                    </li>
                    <li class="collection-item">
                        <p>Email: <a href="mailto:${intern_class.getEmail()}?subject=Subject&body=message%20goes%20here">${intern_class.getEmail()}</a></p>
                    </li>
                    <li class="collection-item">
                        <p>School: <span>${intern_class.getSchool()}</span></p>
                    </li>
                </ul>
            </div>
        </div>
`
    return html;
}





