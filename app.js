console.log("working")
let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin")
let flipBtn = $("#flip-button");
let resetBtn = $("#reset-button");
flipBtn.on("click", ()=>{
    console.log("cliked")
    const updateStats = () =>{
        $("#heads-count").
        text(`Heads: ${heads}`);
        $("#tails-count").
        text(`Tails: ${tails}`);
    }
    let i = Math.floor(Math.random() * 2);
    // coin.style.animation ="none"
    if(i % 2 === 0){
        setTimeout(()=>{
        //    coin.animate("spin-heads 3s forwards")
           coin.style.animation = "spin-heads 3s forwards"
       }, 100);
       heads++;  
    }
    else{
        setTimeout(() =>{
        //    coin.animate("spin-tails 3s forwards")
           coin.style.animation = "spin-tails 3s forwards" 
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
const disableButton = () => {
   flipBtn.disabled = true
   setTimeout(()=>{
       flipBtn.disabled = false;
   }, 3000);
}
resetBtn.on("click", ()=>{
   coin.animate = "none";
   heads = 0;
   tails = 0;
   updateStats();
})
});