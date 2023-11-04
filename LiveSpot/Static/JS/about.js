
function getDate(){
    return new Date().toLocaleString();
}
function makeComment(){
    const name = prompt("Введите ваше имя: ");
    let comment = prompt("Ваш отзыв: ")
    let element = document.getElementsByClassName("comments")[0];
    
    element.innerHTML += '<p>'+'<b>'+name+'</b> '+'<i>'+getDate()+'</i>'+'<br>'+comment+'</p>'
}

