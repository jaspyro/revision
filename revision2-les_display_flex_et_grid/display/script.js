const question = document.querySelector('#property');

// id button
const button = document.querySelector('#first_button');
const button_2 = document.querySelector('#second_button');
const button_3 = document.querySelector('#third_button');
const button_4 = document.querySelector('#fourth_button');
const button_5 = document.querySelector('#fifth_button');
const button_6 = document.querySelector('#sixth_button');
const button_7 = document.querySelector('#seventh_button');
const button_8 = document.querySelector('#heighth_button');
//id part
const button_part_2 = document.querySelector('#part_two');
const button_part_3 = document.querySelector('#part_three');

// class answer and part : display none
const answer = document.querySelector('.first_answer');
const answer_2 = document.querySelector('.second_answer');
const answer_3 = document.querySelector('.third_answer');
const answer_4 = document.querySelector('.fourth_answer');
const answer_5 = document.querySelector('.fifth_answer');
const answer_6 = document.querySelector('.sixth_answer');
const answer_7 = document.querySelector('.seventh_answer');
const answer_8 = document.querySelector('.heighth_answer');
//class part
const part_2 = document.querySelector('.value_of_display');
const part_3 = document.querySelector('.combine_value');

// for question
button.addEventListener("click",() =>{
    answer.classList.toggle('block')
});

button_2.addEventListener("click",() =>{
    answer_2.classList.toggle('block')
});

button_3.addEventListener("click",() =>{
    answer_3.classList.toggle('block')
});

button_4.addEventListener("click",() =>{
    answer_4.classList.toggle('block')
});

button_5.addEventListener("click",() =>{
    answer_5.classList.toggle('block')
});

button_6.addEventListener("click",() =>{
    answer_6.classList.toggle('block')
});

button_7.addEventListener("click",() =>{
    answer_7.classList.toggle('block')
});

button_8.addEventListener("click",() =>{
    answer_8.classList.toggle('block')
});

// for part

button_part_2.addEventListener("click",() =>{
    part_2.classList.toggle('block')
});

button_part_3.addEventListener("click",() =>{
    part_3.classList.toggle('block')
});