const boxes=document.querySelectorAll('.box');
const Reset=document.querySelector('.newgame');
const winner=document.querySelector("#winner");
const winerPattern= [[0,1,2],
                     [3,4,5]
                     ,[6,7,8]
                     ,[0,3,6]
                     ,[1,4,7]
                     ,[2,5,8]
                     ,[0,4,8]
                     ,[2,4,6]
                    ]
let playerO = true;
let moveCounter=0;

boxes.forEach((box)=>{
    box.addEventListener("click",(event)=>{
        if(playerO){
            box.innerText="O"
            playerO=false;
        }
        else{
            box.innerText="X";
            playerO=true;
        }
        box.disabled= true 
        moveCounter++;
        checkWinner();
        if(moveCounter===boxes.length){
            winner.innerText="NA KATE NE GOLE KO JITNE DIYA OR NA HI GOLE NE KATE KO";
        }
    })
})

function checkWinner(){
    for (let turm of winerPattern) {
       let pos1=boxes[turm[0]].innerText;
       let pos2=boxes[turm[1]].innerText;
       let pos3=boxes[turm[2]].innerText;
   
       
    //    console.log(winerPattern[0]);
            if(pos1!==""&& pos2!=="" && pos3!== ""){

                if(pos1===pos2 && pos2===pos3){
                    Winnermsg(pos1)
                }
              
            }
           
    }
}



function Winnermsg(pos1){
    if(pos1==="O"){
    winner.innerText="Winner Is GOLA Player";
    }
    else{
        winner.innerText="winner Is KATA Player";
    }
    if(pos1===""){
        winner.innerText="Oops!! Na KATA jITA NA GOLA !!"
    }
    boxes.forEach((box)=>{
            box.disabled=true;
    })
}



Reset.addEventListener('click',()=>{
        boxes.forEach((box)=>{
            box.innerHTML=""

            box.disabled= false 
        })
        winner.innerText=""
})
