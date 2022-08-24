'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let collection = [];
let table = document.getElementById('table');
let hourlyT= [];
let superGrand = [];

function Store(minCust,maxCust,avrgCookie,name){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrgCookie = avrgCookie;
    this.totalArray = [];
    this.grandTotal = 0;

    collection.push(this);
}

Store.prototype.customerHr = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
}

Store.prototype.generateCookie = function(){
    for (let i = 0; i < hours.length; i++) {
    let cook = this.avrgCookie * this.customerHr();
    let roundedCookies = Math.round(cook);
    this.totalArray.push(roundedCookies);
    this.grandTotal += roundedCookies;
    // console.log(this.totalArray, this.grandTotal);
    };
    superGrand.push(this.grandTotal);
}

Store.prototype.display = function(){
    this.generateCookie();
        let row = document.createElement('tr');
        table.appendChild(row);

        let heading = document.createElement('th');
        row.appendChild(heading);
        heading.textContent = this.name;

        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent = this.totalArray[i];
            row.appendChild(entry);
        }
        let totalSale = document.createElement('td');
        totalSale.textContent = this.grandTotal;
        row.appendChild(totalSale);
    }
    
    function generateFooter(){
        let grand = 0;
        for(let hour in hours){
            let salesAthour = 0;
            for(let stores in collection){
                let currentStore = collection[stores];
                let currentSale = currentStore.totalArray[hour];
                salesAthour += currentSale;
                grand += currentSale;
            }
            hourlyT.push(salesAthour);
            for (let i = 0; i < superGrand.length; i++){
            let leGrand = grand + superGrand[i];
            console.log(leGrand);
            }
            // console.log(`Sales at ${hours[hour]}: ${salesAthour}`);
        }
    }
    
    function tableFooter() {
        let foot = document.createElement('tfoot');
        table.appendChild(foot);
        let row = document.createElement('tr');
        foot.appendChild(row);
        let label = document.createElement('th');
        label.textContent = 'Hourly total'
        row.appendChild(label);
        
        for (let i = 0; i < hours.length; i++){
            let totalHR = document.createElement('td');
        totalHR.textContent = hourlyT[i];
        row.appendChild(totalHR);
    }
}

function display(){
    let header = document.createElement('thead');
    table.appendChild(header);
    let row = document.createElement('tr');
    header.appendChild(row);
    let city = document.createElement('td');
    row.appendChild(city);
    
    for(let i = 0; i < hours.length; i++){
        let time = document.createElement('th');
        time.textContent = hours[i];
        row.appendChild(time); 
    }
    let totalLabel = document.createElement('th');
    totalLabel.textContent = 'Total';
    row.appendChild(totalLabel);
}


new Store(23,65,6.3,'Seattle');
new Store(3,24,1.2,'Tokyo');
new Store(11,38,4.6,'Dubai');
new Store(20,38,2.3,'Paris');
new Store(2,16,4.6,'Lima');

console.log(collection);
for (let store of collection){
    store.display();
}
generateFooter();
display();
tableFooter();
// console.log(superGrand)