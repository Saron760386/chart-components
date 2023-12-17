const hoverclick=document.querySelector(".wednesday1")
const color=document.querySelector(".wed")

hoverclick.addEventListener('mouseover',()=>{
    color.style.display="block";
})
hoverclick.addEventListener('mouseout',()=>{
    color.style.display="none";
})

const clickhover=document.querySelector(".thusday1")
const colorcontent=document.querySelector(".thu")

clickhover.addEventListener('mouseover',()=>{
    colorcontent.style.display="block";
})
clickhover.addEventListener('mouseout',()=>{
    colorcontent.style.display="none";
})