
fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=7867a7709e3b4cd28598cfe38a2a32ab&siteid=9325&timewindow=60')
.then(res => res.json())
.then(data => console.log(data.ResponseData));



//SL Buss API
const getTime = () => {
    fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=5a2f7a4fe6b94dbfbcbf47bc85ecb127&siteid=9325&timewindow=60')
    .then(res => res.json())
    .then(res => bussTable(res.ResponseData.Buses))
}

//SL Tåg API
const getTrainTime = () => {
    fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=7867a7709e3b4cd28598cfe38a2a32ab&siteid=9526&timewindow=60')
    .then(res => res.json())
    .then(data => trainTable(data.ResponseData.Trains));
}

// Returns the train time into HTML
const trainTable = (data) => {
    data.forEach(data => {
        setTimeout(() => {
            document.getElementById('tableTrain').innerHTML += 
            `<td><span id="bag">${data.LineNumber}</span></td>
            <td>${data.Destination}</td>
            <td>${data.StopPointDesignation}</td>
            <td>${data.DisplayTime}</td>`;
        },1500)
    })
}

// Returns the buss time into HTML
const bussTable = (res) => {
    res.forEach(res => {
        setTimeout(() => {
            document.getElementById('tableBody').innerHTML += 
            `<td><span id="bag">${res.LineNumber}</span></td>
            <td>${res.Destination}</td>
            <td>${res.StopPointDesignation}</td>
            <td>${res.DisplayTime}</td>`;
        },1500)
    });
}


getTrainTime();
getTime()
