
function inputvalueByID(id) {
    return Number(document.getElementById(id).value);
}

function valuFormText(id) {
    const value = document.getElementById(id).innerText;
    return Number(value);
}

let grandTotalEl = valuFormText("grand-total");


const historySection = document.getElementById("History-section");
const donationSection = document.getElementById("donation-section");
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");

historyBtn.addEventListener('click', function () {
    historyBtn.classList.add("bg-btnPrimary")
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");
    donationBtn.classList.remove("bg-btnPrimary");
});

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add("bg-btnPrimary");
    historySection.classList.add("hidden");
    historyBtn.classList.remove("bg-btnPrimary");
    donationSection.classList.remove("hidden");
});

// Code for Noakhali Donation
const donateNoakhali = document.getElementById("donate-noakhali");


donateNoakhali.addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-noakhali");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else if (donateAmount > grandTotalEl) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else {
        document.getElementById('my_modal_5').showModal();

        const noakhaliTotal = valuFormText("noakhali-total");
        const noakhaliAmount = noakhaliTotal + donateAmount;
        document.getElementById("noakhali-total").innerText = noakhaliAmount.toFixed(2);
        grandTotalEl = grandTotalEl - donateAmount;
        document.getElementById("grand-total").innerText = grandTotalEl.toFixed(2);


        const div = document.createElement('div');
        div.classList.add("w-11/12", "mx-auto", "border-2", "rounded-lg", "shadow-xl", "px-5", "py-5", "space-y-2");
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount.toFixed(2)} Taka is donated for Donate for Flood at Noakhali, Bangladesh</h2>
                        <p class="text-md opacity-80">Date: ${Date()} </p>`;
        historySection.insertBefore(div, historySection.firstChild);

    }

    document.getElementById("amount-noakhali").value = "";

});

// Code for Feni Donation
document.getElementById("donate-feni").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-feni");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-feni").value = "";
        return;
    }
    else if (donateAmount > grandTotalEl) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-feni").value = "";
        return;
    }
    else {
        document.getElementById('my_modal_5').showModal();
        const noakhaliTotal = valuFormText("feni-total");
        const feniAmount = noakhaliTotal + donateAmount;
        document.getElementById("feni-total").innerText = feniAmount.toFixed(2);
        grandTotalEl = grandTotalEl - donateAmount;
        document.getElementById("grand-total").innerText = grandTotalEl.toFixed(2);

        const div = document.createElement('div');
        div.classList.add("w-11/12", "mx-auto", "border-2", "rounded-lg", "shadow-xl", "px-5", "py-5", "space-y-2");
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount.toFixed(2)} Taka is donated for Donate for Flood Relief in Feni,Bangladesh</h2>
                    <p class="text-md opacity-80">Date: ${Date()} </p>` ;
        historySection.insertBefore(div, historySection.firstChild);
    }
    document.getElementById("amount-feni").value = "";

});

// Code for Quota Movement Donation
document.getElementById("donate-qouta").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-qouta");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-qouta").value = "";
        return;
    }
    else if (donateAmount > grandTotalEl) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-qouta").value = "";
        return;
    }
    else {
        document.getElementById('my_modal_5').showModal();
        const noakhaliTotal = valuFormText("qouta-total");
        const qoutaAmount = noakhaliTotal + donateAmount;
        document.getElementById("qouta-total").innerText = qoutaAmount.toFixed(2);
        grandTotalEl = grandTotalEl - donateAmount;
        document.getElementById("grand-total").innerText = grandTotalEl.toFixed(2);

        const div = document.createElement('div');
        div.classList.add("w-11/12", "mx-auto", "border-2", "rounded-lg", "shadow-xl", "px-5", "py-5", "space-y-2");
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount.toFixed(2)} Taka is donated for Donate for Quota Movement in Bangladesh</h2>
                    <p class="text-md opacity-80">Date: ${Date()} </p>` ;
        historySection.insertBefore(div, historySection.firstChild);
    }
    document.getElementById("amount-qouta").value = "";

});
