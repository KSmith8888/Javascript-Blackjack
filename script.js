let yourHand = 0;
let dealerHand = 0;

let aceEquals11 = false;
let ace2Equals11 = false;
let ace3Equals11 = false;
let ace4Equals11 = false;
let ace5Equals11 = false;
let ace6Equals11 = false;

let dealerAce11 = false;
let dealer2Ace11 = false;
let dealer3Ace11 = false;
let dealer4Ace11 = false;
let dealer5Ace11 = false;
let dealer6Ace11 = false;

let cards = [];
let cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
let cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function createDeck() {
for(let i = 0; i < cardSuits.length; i++) {
    for(let j = 0; j < cardValues.length; j++) {
    cards.push(
        { 
            suit: cardSuits[i], 
            value: cardValues[j]
        })
}
}
}

window.onload = createDeck;

function reset() {
  location.reload();
}

function dealerDraw() {
    let dealerDraw1 = Math.floor(Math.random() * 52)
    let dealerCard1Num = document.getElementById('dealerCard1Num');
    dealerCard1Num.innerText = cards[dealerDraw1].value;
    if(cards[dealerDraw1].value == 'J' || cards[dealerDraw1].value == 'Q' || cards[dealerDraw1].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerDraw1].value == 'A') {
        dealerHand += 11;
        dealerAce11 = true;
    } else {
        dealerHand += cards[dealerDraw1].value;
    }
    if(cards[dealerDraw1].suit == 'Hearts' || cards[dealerDraw1].suit == 'Diamonds') {
        dealerSuit1.style.backgroundColor = 'red';
    } else {
        dealerSuit1.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
}

function doesAceBust() {
  if(aceEquals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      aceEquals11 = false;
  } else if(ace2Equals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      ace2Equals11 = false;
  }
  else if(ace3Equals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      ace3Equals11 = false;
  }
  else if(ace4Equals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      ace4Equals11 = false;
  }
  else if(ace5Equals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      ace5Equals11 = false;
  }
  else if(ace6Equals11 == true && yourHand > 21) {
      document.getElementById('yourHand').innerText -= 10;
      yourHand -= 10;
      ace6Equals11 = false;
  }
}

function drawCards() {
    let cardOneNum = document.getElementById('card1Num');
    let rando = Math.floor(Math.random() * 52);
    cardOneNum.innerText = cards[rando].value;
    if(cards[rando].value == 'J' || cards[rando].value == 'Q' || cards[rando].value == 'K') {
        yourHand += 10;
    }else if(cards[rando].value == 'A') {
        yourHand += 11;
        aceEquals11 = true;
    } else {
        yourHand += cards[rando].value;
    }
    if(cards[rando].suit == 'Hearts' || cards[rando].suit == 'Diamonds') {
        suit1.style.backgroundColor = 'red';
    } else {
        suit1.style.backgroundColor = 'black';
    }
    let cardTwoNum = document.getElementById('card2Num');
    let rando2 = Math.floor(Math.random() * 52);
    cardTwoNum.innerText = cards[rando2].value;
    if(cards[rando2].value == 'J' || cards[rando2].value == 'Q' || cards[rando2].value == 'K') {
        yourHand += 10;
    }else if(cards[rando2].value == 'A') {
        yourHand += 11;
        ace2Equals11 = true;
    } else {
        yourHand += cards[rando2].value;
    }
    if(cards[rando2].suit == 'Hearts' || cards[rando2].suit == 'Diamonds') {
        suit2.style.backgroundColor = 'red';
    } else {
        suit2.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = yourHand;
    doesAceBust();
    if(yourHand < 21) {
        document.getElementById('drawCards').outerHTML = `<button id='drawCards' onclick='hit1()'>Hit</button><button id='stay' onclick='stay()'>Stay</button>`
    } else {
        setTimeout(function() {
        alert('You Win!');
        }, 300);
        document.getElementById('drawCards').outerHTML =
        `<button id='drawCards' onclick='reset()'>Play Again</button>`
    }
    dealerDraw();
}

function hit1() {
    document.getElementById('drawCards').outerHTML = `<section id='hit1Card'><h2 id='hit1Num'>0</h2><canvas id='hit1Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit2()'>Hit</button>`
    let randoNew = Math.floor(Math.random() * 52);
    let hit1Num = document.getElementById('hit1Num');
    hit1Num.innerText = cards[randoNew].value;
    if(cards[randoNew].value == 'J' || cards[randoNew].value == 'Q' || cards[randoNew].value == 'K') {
        yourHand += 10;
    }else if(cards[randoNew].value == 'A') {
        yourHand += 11;
        ace3Equals11 = true;
    } else {
        yourHand += cards[randoNew].value;
    }
    if(cards[randoNew].suit == 'Hearts' || cards[randoNew].suit == 'Diamonds') {
        hit1Suit.style.backgroundColor = 'red';
    } else {
        hit1Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = yourHand;
    doesAceBust();
    if(yourHand > 21) {
        setTimeout(function() {
    alert('You Busted! Better luck next time');
    }, 300);
    document.getElementById('drawCards').outerHTML =
    `<button id='drawCards' onclick='reset()'>Play Again</button>`
    document.getElementById('stay').outerHTML = ``;
}
}

function hit2() {
    document.getElementById('drawCards').outerHTML = `<section id='hit2Card'><h2 id='hit2Num'>0</h2><canvas id='hit2Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit3()'>Hit</button>`
    let randoNew2 = Math.floor(Math.random() * 52);
    let hit2Num = document.getElementById('hit2Num');
    hit2Num.innerText = cards[randoNew2].value;
    if(cards[randoNew2].value == 'J' || cards[randoNew2].value == 'Q' || cards[randoNew2].value == 'K') {
        yourHand += 10;
    }else if(cards[randoNew2].value == 'A') {
        yourHand += 11;
        ace4Equals11 = true;
    } else {
        yourHand += cards[randoNew2].value;
    }
    if(cards[randoNew2].suit == 'Hearts' || cards[randoNew2].suit == 'Diamonds') {
        hit2Suit.style.backgroundColor = 'red';
    } else {
        hit2Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = yourHand;
    doesAceBust();
    if(yourHand > 21) {
        setTimeout(function() {
        alert('You Busted! Better luck next time')
        }, 300);
        document.getElementById('drawCards').outerHTML =
        `<button id='drawCards' onclick='reset()'>Play Again</button>`
        document.getElementById('stay').outerHTML = ``;
    }
}

function hit3() {
    document.getElementById('drawCards').outerHTML = `<section id='hit3Card'><h2 id='hit3Num'>0</h2><canvas id='hit3Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit4()'>Hit</button>`
    let randoNew3 = Math.floor(Math.random() * 52);
    let hit3Num = document.getElementById('hit3Num');
    hit3Num.innerText = cards[randoNew3].value;
    if(cards[randoNew3].value == 'J' || cards[randoNew3].value == 'Q' || cards[randoNew3].value == 'K') {
        yourHand += 10;
    }else if(cards[randoNew3].value == 'A') {
        yourHand += 11;
        ace5Equals11 = true;
    } else {
        yourHand += cards[randoNew3].value;
    }
    if(cards[randoNew3].suit == 'Hearts' || cards[randoNew3].suit == 'Diamonds') {
        hit3Suit.style.backgroundColor = 'red';
    } else {
        hit3Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = yourHand;
    doesAceBust();
    if(yourHand > 21) {
        setTimeout(function() {
        alert('You Busted! Better luck next time')
        }, 300);
        document.getElementById('drawCards').outerHTML =
        `<button id='drawCards' onclick='reset()'>Play Again</button>`
        document.getElementById('stay').outerHTML = ``;
    }
}

function hit4() {
    document.getElementById('drawCards').outerHTML = `<section id='hit4Card'><h2 id='hit4Num'>0</h2><canvas id='hit4Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><button id='drawCards'></button>`
    let randoNew4 = Math.floor(Math.random() * 52);
    let hit4Num = document.getElementById('hit4Num');
    hit4Num.innerText = cards[randoNew4].value;
    if(cards[randoNew4].value == 'J' || cards[randoNew4].value == 'Q' || cards[randoNew4].value == 'K') {
        yourHand += 10;
    }else if(cards[randoNew4].value == 'A') {
        yourHand += 11;
        ace6Equals11 = true;
    } else {
        yourHand += cards[randoNew4].value;
    }
    if(cards[randoNew4].suit == 'Hearts' || cards[randoNew4].suit == 'Diamonds') {
        hit4Suit.style.backgroundColor = 'red';
    } else {
        hit4Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = yourHand;
    doesAceBust();
    if(yourHand > 21) {
        setTimeout(function() {
        alert('You Busted! Better luck next time')
        }, 300);
        document.getElementById('drawCards').outerHTML =
        `<button id='drawCards' onclick='reset()'>Play Again</button>`
        document.getElementById('stay').outerHTML = ``;
    }
}

function gameMessage() {
    if(dealerHand > yourHand && dealerHand <= 21) {
      setTimeout(function() {
      alert('You lose! Better luck next time')
      }, 500);
      document.getElementById('drawCards').outerHTML =
      `<button id='drawCards' onclick='reset()'>Play Again</button>`
      document.getElementById('stay').outerHTML = ``;
    } else if(dealerHand == yourHand) {
        setTimeout(function() {
        alert('Push!')
        }, 500);
        document.getElementById('drawCards').outerHTML =
      `<button id='drawCards' onclick='reset()'>Play Again</button>`
      document.getElementById('stay').outerHTML = ``;
    } else {
        setTimeout(function() {
        alert('You Win!')
        }, 500);
        document.getElementById('drawCards').outerHTML =
      `<button id='drawCards' onclick='reset()'>Play Again</button>`
      document.getElementById('stay').outerHTML = ``;
    }
}

function dealerAceBust() {
  if(dealerAce11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealerAce11 = false;
  } else if(dealer2Ace11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealer2Ace11 = false;
  }
  else if(dealer3Ace11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealer3Ace11 = false;
  }
  else if(dealer4Ace11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealer4Ace11 = false;
  }
  else if(dealer5Ace11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealer5Ace11 = false;
  }
  else if(dealer6Ace11 == true && dealerHand > 21) {
      document.getElementById('dealerHand').innerText -= 10;
      dealerHand -= 10;
      dealer6Ace11 = false;
  }
}

function stay() {
    let dealerDraw2 = Math.floor(Math.random() * 52)
    let dealerCard2Num = document.getElementById('dealerCard2Num');
    dealerCard2Num.innerText = cards[dealerDraw2].value;
    if(cards[dealerDraw2].value == 'J' || cards[dealerDraw2].value == 'Q' || cards[dealerDraw2].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerDraw2].value == 'A') {
        dealerHand += 11;
        dealer2Ace11 = true;
    } else {
        dealerHand += cards[dealerDraw2].value
    }
    if(cards[dealerDraw2].suit == 'Hearts' || cards[dealerDraw2].suit == 'Diamonds') {
        dealerSuit2.style.backgroundColor = 'red';
    } else {
        dealerSuit2.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
    dealerAceBust();
    if(dealerHand < 17) {
      document.getElementById('dealersHits').outerHTML = `<section id='dealerHit1'><h2 id='dealerHit1Num'>0</h2><canvas id='dealerHit1Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><div id='dealersHits'></div>`;
        dealHitFunc();
    } else {
        gameMessage();
    }
}
    function dealHitFunc() {
    let dealerHit1Num = document.getElementById('dealerHit1Num');
    let dealerHit1 = Math.floor(Math.random() * 52)
    dealerHit1Num.innerText = cards[dealerHit1].value;
    if(cards[dealerHit1].value == 'J' || cards[dealerHit1].value == 'Q' || cards[dealerHit1].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerHit1].value == 'A') {
        dealerHand += 11;
        dealer3Ace11 = true;
    } else {
        dealerHand += cards[dealerHit1].value;
    }
    if(cards[dealerHit1].suit == 'Hearts' || cards[dealerHit1].suit == 'Diamonds') {
        dealerHit1Suit.style.backgroundColor = 'red';
    } else {
        dealerHit1Suit.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
    dealerAceBust();
    if(dealerHand < 17) {
      document.getElementById('dealersHits').outerHTML = `<section id='dealerHit2'><h2 id='dealerHit2Num'>0</h2><canvas id='dealerHit2Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><div id='dealersHits'></div>`;
        dealHitFunc2();
    } else {
        gameMessage();
    }
}
function dealHitFunc2() {
    let dealerHit2Num = document.getElementById('dealerHit2Num');
    let dealerHit2 = Math.floor(Math.random() * 52)
    dealerHit2Num.innerText = cards[dealerHit2].value;
    if(cards[dealerHit2].value == 'J' || cards[dealerHit2].value == 'Q' || cards[dealerHit2].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerHit2].value == 'A') {
        dealerHand += 11;
        dealer4Ace11 = true;
    } else {
        dealerHand += cards[dealerHit2].value;
    }
    if(cards[dealerHit2].suit == 'Hearts' || cards[dealerHit2].suit == 'Diamonds') {
        dealerHit2Suit.style.backgroundColor = 'red';
    } else {
        dealerHit2Suit.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
    dealerAceBust();
    if(dealerHand < 17) {
      document.getElementById('dealersHits').outerHTML = `<section id='dealerHit3'><h2 id='dealerHit3Num'>0</h2><canvas id='dealerHit3Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><div id='dealersHits'></div>`;
        dealHitFunc3();
    }else {
        gameMessage();
    }
}
function dealHitFunc3() {
    let dealerHit3Num = document.getElementById('dealerHit3Num');
    let dealerHit3 = Math.floor(Math.random() * 52)
    dealerHit3Num.innerText = cards[dealerHit3].value;
    if(cards[dealerHit3].value == 'J' || cards[dealerHit3].value == 'Q' || cards[dealerHit3].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerHit3].value == 'A') {
        dealerHand += 11;
        dealer5Ace11 = true;
    } else {
        dealerHand += cards[dealerHit3].value;
    }
    if(cards[dealerHit3].suit == 'Hearts' || cards[dealerHit3].suit == 'Diamonds') {
        dealerHit3Suit.style.backgroundColor = 'red';
    } else {
        dealerHit3Suit.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
    dealerAceBust();
    if(dealerHand < 17) {
      document.getElementById('dealersHits').outerHTML = `<section id='dealerHit4'><h2 id='dealerHit4Num'>0</h2><canvas id='dealerHit4Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><div id='dealersHits'></div>`;
        dealHitFunc4();
    } else {
        gameMessage();
    }
}
function dealHitFunc4() {
    let dealerHit4Num = document.getElementById('dealerHit4Num');
    let dealerHit4 = Math.floor(Math.random() * 52)
    dealerHit4Num.innerText = cards[dealerHit4].value;
    if(cards[dealerHit4].value == 'J' || cards[dealerHit4].value == 'Q' || cards[dealerHit4].value == 'K') {
        dealerHand += 10;
    }else if(cards[dealerHit4].value == 'A') {
        dealerHand += 11;
        dealer4Ace11 = true;
    } else {
        dealerHand += cards[dealerHit4].value;
    }
    if(cards[dealerHit4].suit == 'Hearts' || cards[dealerHit4].suit == 'Diamonds') {
        dealerHit4Suit.style.backgroundColor = 'red';
    } else {
        dealerHit4Suit.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = dealerHand;
    dealerAceBust();
    gameMessage();
}
