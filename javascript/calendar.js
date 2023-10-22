fetch('https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyDFgeJBrjFIloKl1_ijy8sJcSD53dlhN4g')
.then(res => res.json())
.then(data => console.log(data.items))



const getEvent =  () => {
    fetch('https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyDFgeJBrjFIloKl1_ijy8sJcSD53dlhN4g')
    .then(res => res.json())
    .then(data => topEvent(data.items));
}

const topEvent = (data) => {
    data.forEach(element => {
        document.getElementById('bodyEvent').innerHTML += 
        ` 
           <td>
                <div class="card text-bg-primary" style="width: 15rem;">
                    <div class="card-header">${element.summary}</div>
                    <div class="card-body">
                        <p class="card-title">${element.start.dateTime}</p>
                    </div>
                </div>
            </td>

            <td>
                <div class="card text-bg-primary" style="width: 15rem;">
                    <div class="card-header">${element.summary}</div>
                    <div class="card-body">
                        <p class="card-title">${element.start.dateTime}</p>
                    </div>
                </div>
            </td>

            <td>
                <div class="card text-bg-primary" style="width: 15rem;">
                    <div class="card-header">${element.summary}</div>
                    <div class="card-body">
                        <p class="card-title">${element.start.dateTime}</p>
                    </div>
                </div>
            </td>

            <td>
                <div class="card text-bg-primary" style="width: 15rem;">
                    <div class="card-header">${element.summary}</div>
                    <div class="card-body">
                        <p class="card-title">${element.start.dateTime}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="card text-bg-primary" style="width: 15rem;">
                    <div class="card-header">${element.summary}</div>
                    <div class="card-body">
                        <p class="card-title">${element.start.dateTime}</p>
                    </div>
                </div>
            </td>
            
        `;
    });
}

getEvent()