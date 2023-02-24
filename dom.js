//selection of element
// const heading = document.getElementById('main-heading');
// console.log(heading);
// const listitems=document.getElementsByClassName("list-items");
// console.log(listitems);
// const list=document.getElementsByTagName("li");
// console.log(list);
//  const all=document.querySelector(".container");
//  all.style.fontSize="1.5em";
// console.log(all);
// const hall=document.querySelectorAll(".list-items");
// for(i=0;i<hall.length;i++){
//     hall[i].style.color="green";
//     console.log(hall);
// }
// const ul=document.querySelector("ul");
// const li = document.createElement("li");
// li.setAttribute("class","list-items");
// li.innerText='hello world'
// ul.append(li);
// li.remove();
// console.log(ul);


// parent node
// const ul=document.querySelector("div");
// console.log(ul.parentNode.parentNode);
//child nodes
// const div=document.querySelector("div");
// console.log(div.children);
// console.log(div.firstElementChild.nextElementSibling.);

         //eventlisteners
//  const clay=document.querySelector(".btn-2");
//  function loam() {
//     alert("you are welcome")
//  }
// clay.addEventListener("click",loam)
// const mousing=document.querySelector(".boxes");
// function even(){
//     mousing.style.backgroundColor="red"
// }
// mousing.addEventListener("mouseover",even);
          //hiding event
const near=document.querySelector(".reveal-btn"); 
const dear=document.querySelector(".hidden-content"); 
function hiding() {
    if (near.classList.contains("dear")) {
        console.log(near.classList.remove("dear"));
    }else{
        console.log(near.classList.add("dear"));
    }
} 
near.addEventListener("click",hiding)                