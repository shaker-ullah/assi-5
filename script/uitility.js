const allSeats = document.getElementsByClassName('seat-btn');
let count = 0;
let booking = 24;
let perSeatPrice = 550;
let seatClass = 'Economy';
for (const btn of allSeats) {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        btn.style.backgroundColor = 'green'
        count = count + 1
        booking = booking - 1;

        const seatName = e.target.innerText;
        // console.log(seatName)

        const bookingSeat = document.getElementById('new-ticket');
        const li = document.createElement('li')
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = perSeatPrice;
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        bookingSeat.appendChild(li)

        // function call 
        setInnerText('count-seats', count)
        setInnerText('booking-seats', booking)
        totalTicketPrice('total-price', perSeatPrice)
        totalTicketPrice('grand-total', perSeatPrice)
    })
}


// total price function

function totalTicketPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice)
    document.getElementById(id).innerText = convertedTotalPrice + perSeatPrice;
}

// innerText function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;


}