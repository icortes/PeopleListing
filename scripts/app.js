/**{
  id: 1,
  firstName: "Ezra",
  lastName: "Aiden",
  email: "e.aiden@basshall.com",
  ipAddress: "18.6.24.104"
} */

'use strict';

onload = () => {
  let tbody = document.getElementById('tableBody');
  people.forEach((person) => {
    let row = tbody.insertRow(-1);
    let cellId = row.insertCell(0);
    cellId.textContent = person.id;
    let cellFName = row.insertCell(1);
    cellFName.textContent = person.firstName;
    let cellLName = row.insertCell(2);
    cellLName.textContent = person.lastName;
    let cellEmail = row.insertCell(3);
    cellEmail.textContent = person.email;
    let cellIP = row.insertCell(4);
    cellIP.textContent = person.ipAddress;
  });
};
