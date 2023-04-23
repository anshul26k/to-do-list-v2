let input_txt = document.getElementById("input-box");
let list_cont = document.getElementById("list-container");

function addt(){
    if(input_txt.value === ''){
        alert("Plz enter text");
    }else{
        let list = document.createElement("li");
        list.innerHTML = input_txt.value;
        list_cont.appendChild(list);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    input_txt.value = " ";
    savedata()
}

// list_cont.addEventListener("click",(e)=>{
//     if(e.target.tag)
// })
list_cont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
});

function savedata(){
    localStorage.setItem("data",list_cont.innerHTML);
}

function showdata(){
    list_cont.innerHTML = localStorage.getItem("data");
}
showdata();

