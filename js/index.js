document.getElementById("transction").addEventListener('click',function(){
    // const donationBtn = document.getElementById('donation');
    // donationBtn.classList.remove('bg-[#B4F461]');
    toggleBtnColor('donation');
    document.getElementById("transction").classList.add("bg-[#B4F461]")
})
document.getElementById("donation").addEventListener('click',function(){
    // const transBtn = document.getElementById('transction');
    // transBtn.classList.remove('bg-[#B4F461]');
    toggleBtnColor('transction');
    document.getElementById("donation").classList.add("bg-[#B4F461]")
})
document.getElementById('donate1').addEventListener('click',function(){
    const donatedAmount = donationAmount('donateamount1');
    const prviousDonatedAmount = previousDonationAmount("total-donate-amount")
    document.getElementById('total-donate-amount').innerText = donatedAmount+prviousDonatedAmount;
    const initial = initialAmount("initail-balance")
    document.getElementById("initail-balance").innerText = initial - donatedAmount;
    // Transction history
    const transctionContent = document.getElementById('transction-content');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${donatedAmount} ${document.getElementById('title1').innerText} </p>
    <p>${new Date()}</p>
    `
    transctionContent.appendChild(div)
})
document.getElementById('donate2').addEventListener('click',function(){
    const donatedAmount = donationAmount('donateamount2');
    const prviousDonatedAmount = previousDonationAmount("total-donate-amount2")
    document.getElementById('total-donate-amount2').innerText = donatedAmount+prviousDonatedAmount;
    const initial = initialAmount("initail-balance")
    document.getElementById("initail-balance").innerText = initial - donatedAmount;
    // Transction section
    const transctionContent = document.getElementById('transction-content');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${donatedAmount} ${document.getElementById('title2').innerText} </p>
    <p>${new Date()}</p>
    `
    transctionContent.appendChild(div)
})

document.getElementById('donate3').addEventListener('click',function(){
    const donatedAmount = donationAmount('donateamount3');
    const prviousDonatedAmount = previousDonationAmount("total-donate-amount2")
    document.getElementById('total-donate-amount3').innerText = donatedAmount+prviousDonatedAmount;
    const initial = initialAmount("initail-balance")
    document.getElementById("initail-balance").innerText = initial - donatedAmount;
    // Transction section
    const transctionContent = document.getElementById('transction-content');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${donatedAmount} ${document.getElementById('title3').innerText} </p>
    <p>${new Date()}</p>
    `
    transctionContent.appendChild(div)
})

document.getElementById("blog-btn").addEventListener('click',function(){
    toggleSection('faq');
})

document.getElementById("donation").addEventListener('click',function(){
    toggleSection('mainsec');
})

document.getElementById("transction").addEventListener('click',function(){
    toggleSection('transhis');
})