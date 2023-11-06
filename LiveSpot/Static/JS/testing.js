
function saveInput(){
    let input = document.getElementsByTagName("input")[0].value;
    this.lastInput;
    alert(`Последний ввод был: ${this.lastInput} \nтекущий ввод: ${input}`);
    this.lastInput = input;
    
}