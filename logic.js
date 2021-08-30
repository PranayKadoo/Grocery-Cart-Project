let count=0;
let x=0;
let carthide = document.getElementById("list");
carthide.style.display = "none";

function items(c){
    count++
    let i = c;
    let t = document.getElementById("price"+i).innerText;
    console.log(i);
    console.log(t);
     
    let cartlist = document.createElement("P");
    cartlist.innerText = t;
    list.appendChild(cartlist);

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    list.appendChild(remove);

    remove.addEventListener("click", function(){
           list.removeChild(cartlist);
           list.removeChild(remove);

    })
  
}

function cart(){
  
  if(x%2==0){
    carthide.style.display = "block";
   console.log(x);
  }else{
    carthide.style.display = "none";
    console.log(x);
  }
  x++;
}
