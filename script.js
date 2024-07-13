const body = document.body;
const h1 = document.createElement('h1');
h1.innerText = 'Freelancer Fourm';
body.append(h1);

const avgerageString = document.createElement('h2');
avgerageString.className = 'line2';
avgerageString.innerText = 'The average starting price is $';
body.append(avgerageString);

const availableString = document.createElement('h1');
availableString.className = 'line3';
availableString.innerText = 'Available Freelancers';
body.append(availableString);

//initial Arrrays for the table
const headers = ['Name', 'Occupation', 'Starting Price'];
const initialpeople = [{name: 'Alice', occupation:'Writer', price:'$30'},{name:'Bob', occupation:'teacher', price:'$50'},{name:'Carol', occupation:'Programmer', price:'$70'},{name:'Steve', occupation:'Student', price:'$40'},{name:'Jess', occupation:'Student', price:'$30'}]

// Function to get a random index excluding the first two
function getRandomIndex(excludeIndexes, maxIndex) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * maxIndex);
    } while (excludeIndexes.includes(randomIndex));
    return randomIndex;
  }

// First two freelancers and one random freelancer
const indexesToShow = [0, 1];
const randomIndex = getRandomIndex(indexesToShow, initialpeople.length);
indexesToShow.push(randomIndex);

//create the table
const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableBody = document.createElement('tbody')
const headerRow = document.createElement('tr');
body.append(table)

//fill table header
headers.forEach(item =>{
    const th = document.createElement('th');
    th.innerText = item;
    headerRow.append(th);
})
//attach to table
tableHeader.append(headerRow);
table.append(tableHeader);

//fill the inital data
indexesToShow.forEach(index => {
    const item = initialpeople[index];
    const row = document.createElement('tr');
    Object.values(item).forEach(attribute =>{
        const td= document.createElement('td');
        td.innerText = attribute;
        row.append(td);
        
    })
    tableBody.append(row);
})

table.append(tableBody)





