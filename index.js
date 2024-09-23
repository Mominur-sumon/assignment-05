
function inputvalueByID(id) {
    return Number(document.getElementById(id).value);
}

function valuFormText(id) {
    const value = document.getElementById(id).innerText;
    return Number(value);
}

let grandTotalEl = valuFormText("grand-total");


const historySection = document.getElementById("History-section");
const donationSection = document.getElementById("donation-section") ;
const historyBtn = document.getElementById("history-btn") ;
const donationBtn = document.getElementById("donation-btn") ;

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add("bg-btnPrimary")
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden") ;
    donationBtn.classList.remove("bg-btnPrimary");
});

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add("bg-btnPrimary");
    historySection.classList.add("hidden");
    historyBtn.classList.remove("bg-btnPrimary") ;
    donationSection.classList.remove("hidden");
});



document.getElementById("donate-noakhali").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-noakhali");
    if (donateAmount < 1) {
        alert("Please enter a valid amount");
        return;
    }
    else {
        const noakhaliTotal = valuFormText("noakhali-total");
        const noakhaliAmount = noakhaliTotal + donateAmount;
        document.getElementById("noakhali-total").innerText = noakhaliAmount;
        grandTotalEl = grandTotalEl - donateAmount;
        document.getElementById("grand-total").innerText = grandTotalEl;

        const div = document.createElement('div') ;
        div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Donate for Flood at Noakhali, Bangladesh</h2>
                        <p class="text-md opacity-80">Date: ${Date()} </p>`
        console.log(div);
        historySection.insertBefore(div, historySection.firstChild);
    }

});

document.getElementById("donate-feni").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-feni");
    if (donateAmount < 1) {
        alert("Please enter a valid amount");
        return;
    }
    const noakhaliTotal = valuFormText("feni-total");
    const feniAmount = noakhaliTotal + donateAmount;
    document.getElementById("feni-total").innerText = feniAmount;
    grandTotalEl = grandTotalEl - donateAmount;
    document.getElementById("grand-total").innerText = grandTotalEl;

    const div = document.createElement('div') ;
    div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
    div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Donate for Flood Relief in Feni,Bangladesh</h2>
                    <p class="text-md opacity-80">Date: ${Date()} </p>`
    console.log(div);
    historySection.insertBefore(div, historySection.firstChild);


});

document.getElementById("donate-qouta").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-qouta");
    if (donateAmount < 1) {
        alert("Please enter a valid amount");
        return;
    }
    const noakhaliTotal = valuFormText("qouta-total");
    const noakhaliAmount = noakhaliTotal + donateAmount;
    document.getElementById("qouta-total").innerText = noakhaliAmount;
    grandTotalEl = grandTotalEl - donateAmount;
    document.getElementById("grand-total").innerText = grandTotalEl;

    const div = document.createElement('div') ;
    div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
    div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Aid for Injured in the Quota Movement</h2>
                    <p class="text-md opacity-80">Date: ${Date()} </p>`
    console.log(div);
    historySection.insertBefore(div, historySection.firstChild);


});