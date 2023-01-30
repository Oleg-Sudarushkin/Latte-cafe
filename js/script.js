let Food = document.querySelector('#food');
let Drinks = document.querySelector('#drinks');
let TakeAway = document.querySelector('#takeaway');

// let blocks = document.getElementsByClassName('block');
// for (let i = 0; i < blocks.length; i++){
//     blocks[i].onclick = function(){
//         console.log('work');
//     }
// }

Food.onclick = function(){
    Food.classList.add('active');
    Drinks.classList.remove('active');
    TakeAway.classList.remove('active');
    document.querySelector('.menu__right_food').classList.remove('hide');
    document.querySelector('.menu__right_drinks').classList.add('hide');
    document.querySelector('.menu__right_takeawaay').classList.add('hide');
}
Drinks.onclick = function(){
    Food.classList.remove('active');
    Drinks.classList.add('active');
    TakeAway.classList.remove('active');
    document.querySelector('.menu__right_food').classList.add('hide');
    document.querySelector('.menu__right_drinks').classList.remove('hide');
    document.querySelector('.menu__right_takeawaay').classList.add('hide');
}
TakeAway.onclick = function(){
    Food.classList.remove('active');
    Drinks.classList.remove('active');
    TakeAway.classList.add('active');
    document.querySelector('.menu__right_food').classList.add('hide');
    document.querySelector('.menu__right_drinks').classList.add('hide');
    document.querySelector('.menu__right_takeawaay').classList.remove('hide');
}


