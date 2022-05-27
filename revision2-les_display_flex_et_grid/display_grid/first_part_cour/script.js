const btn_1 = document.querySelector('#btn_answer_1');
const btn_2 = document.querySelector('#btn_answer_2');
const btn_3 = document.querySelector('#btn_answer_3');
const btn_4 = document.querySelector('#btn_answer_4');
const btn_5 = document.querySelector('#btn_answer_5');

const btn_6 = document.querySelector('#next_1');
const btn_7 = document.querySelector('#next_2');
const btn_8 = document.querySelector('#next_3');
const btn_9 = document.querySelector('#next_4');
const btn_10 = document.querySelector('#next_5');
const btn_11 = document.querySelector('#next_6');

const answer_1 = document.querySelector('.answer_1');
const answer_2 = document.querySelector('.answer_2');
const answer_3_1 = document.querySelector('.answer_3-1');
const answer_3_2 = document.querySelector('.answer_3-2');
const answer_4 = document.querySelector('.answer_4');
const answer_5 = document.querySelector('.answer_5');

const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const div_3 = document.querySelector('.div_3');
const div_4 = document.querySelector('.div_4');
const div_5 = document.querySelector('.div_5');
const div_6 = document.querySelector('.div_6');
const div_7 = document.querySelector('.div_7');

const p_final = document.querySelector('.p_final');

btn_1.addEventListener("click",() =>{
    answer_1.classList.toggle('block'),
    div_1.classList.toggle('block')
});

btn_2.addEventListener("click",() =>{
    answer_2.classList.toggle('block'),
    div_2.classList.toggle('block')
});

btn_3.addEventListener("click",() =>{
    answer_3_1.classList.toggle('block'),
    answer_3_2.classList.toggle('block')
});

btn_4.addEventListener("click",() =>{
    answer_4.classList.toggle('block')
});

btn_5.addEventListener("click",() =>{
    answer_5.classList.toggle('block')
});

btn_6.addEventListener("click",() =>{
    div_3.classList.toggle('block')
});

btn_7.addEventListener("click",() =>{
    div_4.classList.toggle('block')
});

btn_8.addEventListener("click",() =>{
    div_5.classList.toggle('block')
});

btn_9.addEventListener("click",() =>{
    div_6.classList.toggle('block')
});

btn_10.addEventListener("click",() =>{
    div_7.classList.toggle('block')
});

btn_11.addEventListener("click",() =>{
    p_final.classList.toggle('block')
});