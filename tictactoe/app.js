let boxes=document.querySelectorAll(".box");
let re=document.querySelector("#re");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let winpatterns=[[0,1,2],
         [0,3,6],
         [0,4,8],
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [3,4,5],
         [6,7,8],
         ];

         let playero=true;
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(playero)
    {
    box.innerText="O";
    box.style.color="yellow";
    playero=false;
     }
    else
    {
        box.innerText="X";
        playero=true;
        box.style.color="green";
    }
     box.disabled=true;
    checkwinner();
})
}
);


   const resetGame=()=>{
     playero=true;
     boxenable();
       msgContainer.classList.add("hide");
   }
  const boxdisable=()=>{
         for(let box of boxes)
         box.disabled=true;
  }

  const boxenable=()=>{
    for(let box of boxes){
    box.disabled=false;
      box.innerText='';  
}
}

  
  const showwinner=(winner)=>{
           msg.innerText=`winner is ${winner}`;
           msgContainer.classList.remove("hide");
           boxdisable();
           

  }
const checkwinner=()=>{
    for(let pattern of winpatterns){
      
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=''&&pos2!=''&&pos3!='')
        {
            if(pos1===pos2&&pos2===pos3){
            console.log("winner",pos1);
            showwinner(pos1);
        }
        }

    }
}
newGameBtn.addEventListener("click",resetGame);
re.addEventListener("click",resetGame);