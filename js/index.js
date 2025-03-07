const blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener('click',function(){
    const faq =  document.getElementById("faq");
    faq.classList.remove("hidden")
})

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