employeecard = (data) => {

    myTeam = [];

    for (let i =0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            myTeam.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard;
        }
        if (role === 'Intern') {
            const internCard = generateIntern (employee);
            myTeam.push(internCard)
        }
    }
    const employeeCards = myTeam.join('')
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam;
}

const generateTeamPage = (employeeCards) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
  <h1 class="header">The Team</h1>
    </header>
    <div class="conainer-fluid">
        <div class="row">
        ${employeeCards}
        </div>
        </div>
        
        </body>
        </html>`;
}