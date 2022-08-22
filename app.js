'use strict';
 let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

let seattle = {
    minCust: 23,
    maxCust: 65,
    avrgCookie: 6.3,
    totalArray: [],
    grandTotal: 0,

    randCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },

    generateCookie: function(){
        for (let i = 0; i < hours.length; i++) {
        let cook = this.avrgCookie * this.randCust();
        let roundedCookies = Math.round(cook);
        this.totalArray.push(roundedCookies);
        this.grandTotal += roundedCookies;
        // console.log(this.totalArray, this.grandTotal);
        };
    },

    display: function(){
        this.generateCookie();
        let list = document.getElementById('Hourly-list');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalentry = document.createElement('li');
        totalentry.textContent = 'Total: ' + this.grandTotal;
        list.appendChild(totalentry);
    }
}

let Tokyo = {
    minCust: 3,
    maxCust: 24,
    avrgCookie: 1.2,
    totalArray: [],
    grandTotal: 0,

    randCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },

    generateCookie: function(){
        for (let i = 0; i < hours.length; i++) {
        let cook = this.avrgCookie * this.randCust();
        let roundedCookies = Math.round(cook);
        this.totalArray.push(roundedCookies);
        this.grandTotal += roundedCookies;
        // console.log(this.totalArray, this.grandTotal);
        };
    },

    display: function(){
        this.generateCookie();
        let list = document.getElementById('listHours');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalentry = document.createElement('li');
        totalentry.textContent = 'Total: ' + this.grandTotal;
        list.appendChild(totalentry);
    }
}

let Dubai =  {
    minCust: 11,
    maxCust: 38,
    avrgCookie: 3.7,
    totalArray: [],
    grandTotal: 0,

    randCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },

    generateCookie: function(){
        for (let i = 0; i < hours.length; i++) {
        let cook = this.avrgCookie * this.randCust();
        let roundedCookies = Math.round(cook);
        this.totalArray.push(roundedCookies);
        this.grandTotal += roundedCookies;
        // console.log(this.totalArray, this.grandTotal);
        };
    },

    display: function(){
        this.generateCookie();
        let list = document.getElementById('hourList');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalentry = document.createElement('li');
        totalentry.textContent = 'Total: ' + this.grandTotal;
        list.appendChild(totalentry);
    }
}

let Paris = {
    minCust: 20,
    maxCust: 38,
    avrgCookie: 2.3,
    totalArray: [],
    grandTotal: 0,

    randCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },

    generateCookie: function(){
        for (let i = 0; i < hours.length; i++) {
        let cook = this.avrgCookie * this.randCust();
        let roundedCookies = Math.round(cook);
        this.totalArray.push(roundedCookies);
        this.grandTotal += roundedCookies;
        // console.log(this.totalArray, this.grandTotal);
        };
    },

    display: function(){
        this.generateCookie();
        let list = document.getElementById('hours');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalentry = document.createElement('li');
        totalentry.textContent = 'Total: ' + this.grandTotal;
        list.appendChild(totalentry);
    }
}

let Lima = {
    minCust: 2,
    maxCust: 16,
    avrgCookie: 4.6,
    totalArray: [],
    grandTotal: 0,

    randCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },

    generateCookie: function(){
        for (let i = 0; i < hours.length; i++) {
        let cook = this.avrgCookie * this.randCust();
        let roundedCookies = Math.round(cook);
        this.totalArray.push(roundedCookies);
        this.grandTotal += roundedCookies;
        // console.log(this.totalArray, this.grandTotal);
        };
    },

    display: function(){
        this.generateCookie();
        let list = document.getElementById('lima-hours');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalentry = document.createElement('li');
        totalentry.textContent = 'Total: ' + this.grandTotal;
        list.appendChild(totalentry);
    }
}


seattle.display();
Tokyo.display();
Dubai.display();
Paris.display();
Lima.display();
