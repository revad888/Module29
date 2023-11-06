
function getDate(){
    return new Date().toLocaleString();
}
function makeComment(){
    let comment = new Object();
    comment.name = prompt("Введите ваше имя: ");
    comment.content = prompt("Ваш отзыв: ");
    comment.date = getDate();
    if(confirm("Хотите ли, что ваш коменнтарий могли оценить?")){
        let likedComment = Object.create(comment)
        likedComment.rate = 0;
        writeComment(likedComment);
    }
    else {
        writeComment(comment);
    }
}

function writeComment(comment){
    let element = document.getElementsByClassName("comments")[0];
    if(comment.hasOwnProperty('rate')){
        element.innerHTML += '<p>'+'<b>'+comment.name+'</b> '+'<i>'+comment.date+'</i> '+'<b style="color: crimson">Рейтинг комметария: '+comment.rate+'</b><br>'+comment.content+'</p>';
    }
    else{
        element.innerHTML += '<p>'+'<b>'+comment.name+'</b> '+'<i>'+comment.date+'</i>'+'<br>'+comment.content+'</p>';
    }
}