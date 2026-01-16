const decraseBtn = document.querySelector(."decrease")
const increaseBtn = document.querySelector(".increase")
const countEl = document.querySelector(".count")





let;

if(localStorage.getItem("counter") !== null){
    count = Number(localStorage.getItem("couner"))
}else {
    count = 0;
}

countEl.textContent = count ;


increaseBtn.addEventListener("click", ()=>{
    count++;
    countEl.textContent = count;
    localStorage.setItem("counter", count);
})


decraseBtn.addEventListener("click",()=>{
    count--;
    countEl.textContent = count;
    localStorage.setItem("counter", count);
})