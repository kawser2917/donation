console.log("Hello js!! We are trying to work with js")
const blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener('click',function(){
    const faq =  document.getElementById("faq");
    faq.classList.remove("hidden")
})