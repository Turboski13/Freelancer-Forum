const h1Elm = document.createElement('h1')
h1Elm.setAttribute('id', 'h1')
h1Elm.innerText = "Freelancer Forum";
console.log(h1Elm)
document.querySelector('body').append(h1Elm)

const pElm = document.createElement('p')
pElm.setAttribute('id', 'p')
pElm.innerText = "The average starting price is $30";
console.log(pElm)
document.querySelector('body').append(pElm)

const h2Elm = document.createElement('h2')
h2Elm.setAttribute('id', 'h2')
h2Elm.innerText = "Available Freelancers";
console.log(h2Elm)
document.querySelector('body').append(h2Elm)


//insert cell adds a td into a table row
const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    { name: "Steven", price: 50, occupation: "Student" },
    { name: "Thomas", price: 70, occupation: "Mentor" },
    { name: "Jessica", price: 30, occupation: "Student" },
  ];

  function createTable() {
    var table = document.createElement("table"); // creates a table element

    // creates the header row and appends it to the table
    var headerRow = table.insertRow();
    headerRow.classList.add('firstRow');
    var nameHeader = document.createElement("th");
    nameHeader.innerText = "Name";
    headerRow.appendChild(nameHeader);

    var occupationHeader = document.createElement("th");
    occupationHeader.innerText = "Occupation";
    headerRow.appendChild(occupationHeader);

    var priceHeader = document.createElement("th");
    priceHeader.innerText = "Starting Price";
    headerRow.appendChild(priceHeader);

    // loops through the array to add the freelancer data
    for (var i = 0; i < freelancers.length; i++) {
        var row = table.insertRow();
        var nameCell = row.insertCell();
        nameCell.innerText = freelancers[i].name;

        var occupationCell = row.insertCell();
        occupationCell.innerText = freelancers[i].occupation;

        var priceCell = row.insertCell();
        priceCell.innerText = freelancers[i].price;
    }

    document.body.append(table);
}

createTable();

function randomNumber (2, 6) 
    {
        var random =  Math.floor((Math.random() * (6 - 2) + 2))/100;
    }

//setInterval() for adding an interval
/* const addShapeIntervalId = setInterval(addShape, 1000);
function addShape() {
    if (shapes.length >= maxShapes) {
      clearInterval(addShapeIntervalId);
    }
  }
  render();  */


  
/* adding randomizer
  function addShape() {
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    // TODO: Randomize the size of the shape
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    shapes.push({ color, size });
    shapes.push({ color, size: "small" });
  
    render();
  
    // TODO: Stop adding shapes if we've reached the maximum number of shapes
  } */
