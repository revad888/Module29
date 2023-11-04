let session = new Map();
const inputParseFunction = function(){
    
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}
let sessionLog = function logSession(){
    for(let result of session){
        console.log(result)
    }
}

function handleSession(){
    
    let agent = window.navigator.userAgent
    let age = prompt("Пожалуйста, введите ваш возраст");
    session.set('agent', agent);
    session.set('age', age);
    session.set('date', new Date().toLocaleString());
    
}
function checkAge(){
    if(session.get("age") >= 18){
        // Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
    }
    else{
        // Выполним проверку. Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function userFilter(inputParseFunction){
    let elements = document.getElementsByClassName("video-container");
    
    for (i=0; elements.length; i++){
        let element = elements[i].querySelector('.video-title').innerText.toLowerCase();
        //let des = element.textContent.toLowerCase();
        if(element.includes(inputParseFunction)){
            elements[i].style.display = "inline-block";
        }
        else {
            elements[i].style.display = "none";
        }
    }
}







