function Comment(author, text){
    this.Id = Math.random();
    this.author = author;
    this.text = text;
    this.date = new Date().toLocaleString();
}
function getDate(){
    return new Date().toLocaleString();
}
function makeComment(){
    
    const name = prompt("Введите ваше имя: ");
    const content = prompt("Ваш отзыв: ");
    const comment = new Comment(name, content);
    if(confirm("Хотите ли, что ваш коменнтарий могли оценить?")){
        let likedComment = Object.create(comment)
        likedComment.rate = 0;
        writeComment(likedComment);
    }
    else {
        writeComment(comment);
    }
}
function addLike(id){
    const comment = document.getElementById(id);
    let innerText = comment.innerText.split(" ");
    let newCounter = parseInt(innerText[innerText.length-1], 10)+1;
    innerText[innerText.length-1] = `${newCounter}`;
    comment.innerText = innerText.join(" ");
    
    
}

function writeComment(comment){
    let element = document.getElementsByClassName("comments")[0];
    if(comment.hasOwnProperty('rate')){
        element.innerHTML += '<p>'+'<b>'+comment.author+'</b> '+
            '<i>'+comment.date+'</i> '+
            `<button id="${Math.random()}" onclick="addLike(this.id)">❤️ 0</button>`+
            '</b><br>'+comment.text+'</p>';
    }
    else{
        element.innerHTML += '<p>'+'<b>'+comment.author+'</b> '+'<i>'+
            comment.date+'</i>'+'<br>'+comment.text+'</p>';
    }
}