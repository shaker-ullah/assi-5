const allSeats = document.getElementsByClassName('btn');
let count = 0;
for (const btn of allSeats) {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        count = count + 1
       document.getElementById('count-seats').innerText = count;
    })
}