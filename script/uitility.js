const allBtn = document.getElementsByClassName('seat-btn');
// console.log(allBtn)
for (const btn of allBtn) {
    // console.log(btn)

    let seatClass = 'Ac-class'
   
    btn.addEventListener('click', function (event) {
        const perPersonBuy = getInnerTextValue('count-seats')
        if (perPersonBuy + 1 > 4) {
            alert('Your limit is close')
            return;
        }

        event.target.style.backgroundColor = 'green';
        event.target.setAttribute('disabled', false)
        const seatPrice = getInnerTextValue('per-seat')
        // console.log(seatPrice)
        const seatName = event.target.innerText;

        const seat = getInnerTextValue('count-seats')
        document.getElementById('count-seats').innerText = seat + 1
        const haveSeat = getInnerTextValue('booking-seats')
        document.getElementById('booking-seats').innerText = haveSeat - 1;
        
        const selectedDiv = document.getElementById('new-ticket');
        // create New Element


       
       





        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-between')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        // set innerText
        p1.innerText = seatName;
        p2.innerText = seatClass;
        p3.innerText = seatPrice;
        // appendChild 
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        selectedDiv.appendChild(div)

        //    function call 
        totalCost(seatPrice)
        updateGrandTotal()
    })
}


// function 
function updateGrandTotal(coupon) {
    const totalPrice = getInnerTextValue('total-price')
    // use  coupon
    if (coupon) {
        const couponCode = document.getElementById("apply-coupon").value;


        if ((couponCode == 'NEW15') || (couponCode == 'couple 20')) {
            const discount = totalPrice * 0.1;
            // console.log(discount)
            document.getElementById('grand-total').innerText = totalPrice - discount
        }

        else {
            alert('please a use valid coupon code')
        }
    }
    else {
        const totalPrice = getInnerTextValue('total-price')
        // console.log(totalPrice, grandTotal)
        document.getElementById('grand-total').innerText = totalPrice;
    }


}

function totalCost(price) {
    const totalPrice = getInnerTextValue('total-price')
    // console.log(totalPrice)
    document.getElementById('total-price').innerText = totalPrice + price;

}

function getInnerTextValue(id) {
    const innerTextValue = document.getElementById(id).innerText;
    const convertedValue = parseInt(innerTextValue)
    // console.log(convertedValue)
    return convertedValue

}