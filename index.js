let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = ['suke','suke','suke','suke','suke', 'spin' ,'spin' ,'spin' ,'spin' ,
'kilo','kilo','kilo','kilo', 'bari','bari','bari', 'mero', 'mero', 'mero' , 'gomu', , 'gomu', , 'gomu',
'horo ',  'horo ',  'horo ',  'horo ', 'bomu', 'bomu', 'bomu', 'bomu', 'yomi', 'yomi', 'yomi', 'zushi',  'gura',
 'suna', 'hie', 'goro', 'ito', 'nikyu', 'kage',  'mera', 'magu', 'pika', 'tori', 'mochi'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});