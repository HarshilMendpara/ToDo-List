let ul = document.getElementById("list");
let input = document.getElementById("input");

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",addItem);
input.addEventListener("keypress",addItemKeypress);

function addItem(){
    let item = input.value;
    let textNode = document.createTextNode(item);

    if(item != ""){
        let li = document.createElement("li");
        li.setAttribute("class","myCheck");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check");

        let label = document.createElement("label");
        label.setAttribute("for","item");

        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = "visual";
        },2);
        input.value = "";
    }
}

function addItemKeypress(event) {
    let item = input.value;
    let textNode = document.createTextNode(item);
  
    if (item != "" && event.keyCode == 13) {
        let li = document.createElement("li");
        li.setAttribute("class","myCheck");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check");

        let label = document.createElement("label");
        label.setAttribute("for","item");

        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = "visual";
        },2);
        input.value = "";
    }
  }

  let removebtn = document.getElementById("removebtn");
  removebtn.addEventListener("click",removeItem);

  function removeItem(){
      li = ul.children;
      for(let index=0; index<li.length; index++){
          while(li[index].children[0].checked){
              ul.removeChild(li[index]);
          }
      }
  }

  let removeallbtn = document.getElementById("removeallbtn");
  removeallbtn.addEventListener("click",removeAllItem);

  li = ul.children;
  console.log(li.length);

  function removeAllItem(){
      li = ul.children;
      while(li.length>0){
          ul.removeChild(li[li.length-1]);
          li.length--;
      }
  }