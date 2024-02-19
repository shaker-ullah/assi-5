const allSeats = document.getElementsByClassName('seat-btn');
let count = 0;
let booking = 24;
for (const btn of allSeats) {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        btn.style.backgroundColor = 'green'
        count = count + 1
        booking = booking - 1;

        const seatName = e.target.innerText;
        // console.log(seatName)
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes)


        setInnerText('count-seats', count)
        setInnerText('booking-seats', booking)
    })
}

// innerText function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;


}