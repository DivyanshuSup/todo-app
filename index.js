const btn = document.getElementById("btn");
var containet=document.getElementById("container");
var list=document.createElement("ul");
containet.appendChild(list);
btn.addEventListener("click",()=>{
    const todo = document.getElementById("todo").value;
    console.log(todo);
    var items=document.createElement("li");
    items.innerHTML=todo;
    list.appendChild(items);

    
})

// interview question
// higher order functions  