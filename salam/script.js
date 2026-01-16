 const counter = document.querySelector('.counter');
 const incrementBtn = document.querySelector('.incerment');
 const decrementBtn = document.querySelector('.decrment');

 incrementBtn.onclick = ()  => {
    counter.innerText = Number(counter.innerText) + 1;
 }

 decrementBtn.onclick = () => {
counter. innerText =Number(counter.innerText)  - 1;

 }
const input = document.querySelector('input[type="nuber"]');
const incrementByValueBtn =document.querySelector('.incerment-by-valute');

incrementByValueBtn.onclick = () => {
    let val = Number(input.value);
    if (! isNaN(val)) {
counter.innerText = Number(counter.innerText) + val;
input.value = '';
    }
}