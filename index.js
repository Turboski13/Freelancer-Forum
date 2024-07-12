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

