const allSeats = document.getElementsByClassName('seat-btn');
let count = 0;
let seatClass = 'Economy';
for (const btn of allSeats) {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        btn.style.backgroundColor = 'green'
        count = count + 1
        let booking = document.getElementById('booking-seats').innerText;
        let convertedBooking = parseInt(booking);
        convertedBooking = convertedBooking - 1;

        const seatName = e.target.innerText;
        // console.log(seatName)

        const perSeat = document.getElementById('per-seat').innerText;
        const convertedPrice = parseInt(perSeat)
        // console.log(convertedPrice)


        const bookingSeat = document.getElementById('new-ticket');
        const li = document.createElement('li')
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = convertedPrice;
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        bookingSeat.appendChild(li)

        // function call 
        setInnerText('count-seats', count)
        setInnerText('booking-seats', convertedBooking)
        totalTicketPrice('total-price', convertedPrice)
        totalTicketPrice('grand-total', convertedPrice)
    })
}


// total price function

function totalTicketPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice)
    document.getElementById(id).innerText = convertedTotalPrice + value;
}

// innerText function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;


}