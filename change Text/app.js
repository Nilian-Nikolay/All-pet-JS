let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');

let changeButton = document.getElementById('changeButton');
let changeButtonR = document.getElementById('changeButtonR');

let polsovText = document.getElementById('polsovText');
let addText = document.getElementById('addText');

let changeText = document.getElementById('changeText');
let changeText2 = document.getElementById('changeText2');



let text1 = ["Сочный", "Ароматный", "Сладкий", "Умный", "Быстрый", "Яркий", "Сияющий", "Уютный", "Мелодичный", "Мощный", "Теплый", "Красивый", "Прозрачный", "Сочное", "Прочный", "Удивительный", "Ловкий", "Верный", "Смелый", "Лазурный", "Сверкающий", "Фотографический", "Современный", "Вкусное", "Итальянская", "Массивный", "Электрический", "Мелодичная", "Ритмичный"]
let text2 = ["Апельсин", "Кофе", "Шоколад", "Книга", "Машина", "Солнце", "Луна", "Дом", "Музыка", "Компьютер", "Чашка", "Цветок", "Вода", "Яблоко", "Стол", "Стул", "Радуга", "Кот", "Собака", "Птица", "Океан", "Звезда", "Фотоаппарат", "Телефон", "Печенье", "Пицца", "Бегемот", "Электричество", "Гитара", "Барабан"]


changeButton.addEventListener('click', () => {
    let i = Math.floor(Math.random() * text1.length);
    txt1.textContent = text1[i];
});

changeButtonR.addEventListener('click', () => {
    let i = Math.floor(Math.random() * text2.length);
    txt2.textContent = text2[i];
});

addText.addEventListener('click', () => {
    text1.push(polsovText.value);
    text2.push(polsovText.value); 
    polsovText.value = "";
});

changeText.addEventListener('click',()=>{
    txt1.textContent = text1[text1.length - 1];
})
changeText2.addEventListener('click',()=>{
    txt2.textContent = text2[text2.length - 1];
})





