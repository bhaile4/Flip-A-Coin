//console.log("working")

let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = $("#flip-button");
let resetBtn = $("#reset-button");
let headsCoin = $('.heads');
let tailCoin = $('.tails');
let userInput = $("#userInput")
let playBtn = $("#submit")
let userChoice = ""
let h2 = $('h2')
h2.hide()
let h3 = $('h3')
h3.hide()

//add event listner to the play button

playBtn.on('click', event => {
  event.preventDefault()
  userChoice = userInput.val()
  h2.text(`You picked ${userChoice.toUpperCase()} you can now flip the coin!`)
  userInput.hide()
  playBtn.hide()
  h2.show()
})
flipBtn.on("click", () => {

  // update Points
  const updateStats = () => {
    $("#heads-count").text(`HEADS: ${heads}`);
    $("#tails-count").text(`TAILS: ${tails}`);
    //console.log(userChoice.toLowerCase())

    // If user picks heads and accumulates 5 points user wins

    if (userChoice.toLowerCase() === 'heads' && heads == 5) {
      h3.text('You Win!')
      h3.show()
    }
    // If user picks tails and accumulates 5 points user wins
    if (userChoice.toLowerCase() === 'tails' && tails == 5) {
      h3.text('You Win!')
      h3.show()
    }
    // If user picks tails instead of heads user loses. 
    if (userChoice.toLowerCase() === 'heads' && tails == 5) {
      h3.text('You lose!')
      h3.show()
    }
    // If user picks heads instead of tails user loses. 
    if (userChoice.toLowerCase() === 'tails' && heads == 5) {
      h3.text('You lose!')
      h3.show()
    }
  };
  // disable flip button for 3ms
  const disableButton = () => {
    flipBtn.disabled = true
    setTimeout(() => {
      flipBtn.disabled = false;
    }, 3000);
  };

  //* ====================================== Main
  // gets random number
  let i = Math.floor(Math.random() * 2);
  // console.log((i));

  // MAIN: if i = 0 (heads) else i = 1 (tails)
  if (i % 2 === 0) {
    // HEADS
    setTimeout(() => {
      // animation that flips the coin 
      coin.style.animation = "spin-heads 3s forwards"

    }, 100);
    heads++;// updates head points
    coin.style.animation = "none"
  } else {
    // TAILS

    setTimeout(() => {
      //    coin.animate("spin-tails 3s forwards")
      coin.style.animation = "spin-tails 3s forwards"

    }, 100);
    tails++;
    coin.style.animation = "none"
  };

  // calls update stats func after 3ms
  setTimeout(updateStats, 3000);
  disableButton()

  // Reset button event listener
  resetBtn.on("click", () => {
    coin.animate = "none";
    heads = 0;
    tails = 0;
    updateStats();
  })
});