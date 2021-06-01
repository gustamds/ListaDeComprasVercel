let inputItem

inputItem = document.getElementById("ins-item");

let btn 

btn = document.getElementById("btn-adc");

let ul

ul = document.getElementById("itens");

let excItemBtn

excItemBtn = document.getElementsByTagName("li");

let todosExcBtn 

todosExcBtn = document.getElementsByClassName("remove-item");

function adicionarItens(){
    let li
    let exeBtn
    let txt

    li = document.createElement("li");
    exeBtn = document.createElement("button");

    exeBtn.innerHTML = "X";
    exeBtn.className = "remove-item";

    li.appendChild(exeBtn);
    
    txt = document.createTextNode(inputItem.value);

    li.appendChild(txt);
    ul.appendChild(li);
    inputItem.value = "";
    lendoBtnExc();
}

function excluiItens(){
  this.parentElement.remove();
}

function lendoBtnExc(){
  for(let i = 0; i < todosExcBtn.length; i++){
    todosExcBtn[i].addEventListener("click", excluiItens);
  }
}

btn.addEventListener("click", adicionarItens);
lendoBtnExc();