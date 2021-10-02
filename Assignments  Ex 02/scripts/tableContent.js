 import {fetchData} from "./api.js";

async function tableContent (){

    const people = await fetchData()
 

    const table = document.createElement('table');
    table.style.border = "1px solid black"   
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    
    table.appendChild(thead)
    table.appendChild(tbody)
    const root = document.getElementById("root");
    root.appendChild(table) 
    
    let row1 = document.createElement('tr')
    let heading1= document.createElement('th')
    heading1.innerHTML= "First Name";
    let heading2 = document.createElement('th');
    heading2.innerHTML = "Last Name";
    let heading3 = document.createElement('th');
    heading3.innerHTML = "Email";


    row1.appendChild(heading1)
    row1.appendChild(heading2);
    row1.appendChild(heading3);
    thead.appendChild(row1);

people.forEach((e) => {
let row2 = document.createElement('tr');
let row2Data1 = document.createElement('td');
row2Data1.innerHTML = e.firstName;
let row2Data2 = document.createElement('td');
row2Data2.innerHTML = e.lastName;
let row2Data3 = document.createElement('td');
row2Data3.innerHTML = e.email;
row2.appendChild(row2Data1);
row2.appendChild(row2Data2);
row2.appendChild(row2Data3);
tbody.appendChild(row2);
})





}

export {tableContent}