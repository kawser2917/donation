function toggleBtnColor(id){
    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.remove("bg-[#B4F461]")
}

function donationAmount(id){
    const donateAmount = document.getElementById(id).value;
    const donatedAmount = parseFloat(donateAmount);
    document.getElementById(id).value = ""
    return donatedAmount;
}

function previousDonationAmount(id){
    const totalDonateAmount = document.getElementById(id).innerText;
    const totalDonatedAmount = parseFloat(totalDonateAmount);
    return totalDonatedAmount;
}

function initialAmount(id){
    const initialAmount = document.getElementById(id).innerText;
    const initial = parseFloat(initialAmount);
    return initial;
}