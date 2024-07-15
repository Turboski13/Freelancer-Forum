const body = document.body;
const h1 = document.createElement("h1");
h1.innerText = "Freelancer Fourm";
body.append(h1);

const averageString = document.createElement("h2");
averageString.className = "line2";
averageString.innerText = "The average starting price is $";
body.append(averageString);

const availableString = document.createElement("h1");
availableString.className = "line3";
availableString.innerText = "Available Freelancers";
body.append(availableString);

//initial Arrrays for the table
const headers = ["Name", "Occupation", "Starting Price"];
const initialpeople = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

//create the table
const table = document.createElement("table");
const tableHeader = document.createElement("thead");
const headerRow = document.createElement("tr");
const tableBody = document.createElement("tbody");

//attach table elements to body
body.append(table);
table.append(tableHeader);
table.append(tableBody);

//fill table header
headers.forEach((item) => {
  const th = document.createElement("th");
  th.innerText = item;
  headerRow.append(th);
});
tableHeader.append(headerRow);

//initial seetup
const freelancers = [...initialpeople];
addFreelancer(initialpeople[1]);
addFreelancer(initialpeople[0]);
updateAverage();

//stored data
const randomNames = ["Steven","Doaa","Ben","Charlie","Diana","Jessica","Ken",];
const randomOccupations = ["Therapist","Developer","Designer","Photographer","Chef","Accountant","Product Manager",];

setTimeout(addAlice,3000);
setTimeout(interval,3000)


/* ************************************  FUNCTIONS BELOW  *******************************************************/

function addAlice(){
    const freelancer = {name:"Carol", occupation: "Programer", price:70};
    freelancers.push(freelancer);
    addFreelancer(freelancer);
    updateAverage();
}

function interval(){
    id =
    setInterval(() =>{ 
    const freelancer = randomFreelancer();
    freelancers.push(freelancer);
    addFreelancer(freelancer);
    updateAverage();
    
    if(freelancers.length == 10){
        clearInterval(id);
    }
},3000);
    
    
}
 
//generate random freelancer
function randomFreelancer() {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
  const price = Math.floor(Math.random() * (100 - 30)) + 30;

  return { name, occupation, price };
}

//add freelancer to table
function addFreelancer(freelancer) {
  const row = document.createElement("tr");
  Object.values(freelancer).forEach((attribute, index) => {
    const td = document.createElement("td");
    if (index === 2) {
      td.innerText = `$${attribute}`;
    } else {
      td.innerText = attribute;
    }
    row.append(td);
  });
  tableBody.append(row);
}

//calculate average price by traversing the freelancers array
function getAverage(freelancers){
    let total = freelancers.reduce((acc,object)=>acc+object.price,0)
    
  return total / freelancers.length;
}
//Update the Average price string
function updateAverage(){
    const average = getAverage(freelancers)
    averageString.innerText = `The Average starting price is $${average.toFixed(2)}`;
    }


// Generate random freelancers and add to the table
/* for (let i = 0; i < 5; i++) {
  // Loop to generate 5 random freelancers
  const freelancer = randomFreelancer(); // Generate random freelancer
  freelancers.push(freelancer); // Add to freelancers array
  addFreelancer(freelancer); // Add to the table
}
updateAverage() */

