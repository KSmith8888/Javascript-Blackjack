let cardOne = document.getElementById('card1');
let cardTwo = document.getElementById('card2');
let cardOneNum = document.getElementById('card1Num');
let cardTwoNum = document.getElementById('card2Num');
let dealCard1Num = document.getElementById('dealerCard1Num');
let dealCard2Num = document.getElementById('dealerCard2Num');


let cards = [
    {
        name: 'Ace of Hearts',
        suit: 'Hearts',
        value: 'A'
    },
    {
        name: 'Two of Hearts',
        suit: 'Hearts',
        value: 2
    },
    {
        name: 'Three of Hearts',
        suit: 'Hearts',
        value: 3
    },
    {
        name: 'Four of Hearts',
        suit: 'Hearts',
        value: 4
    },
    {
        name: 'Five of Hearts',
        suit: 'Hearts',
        value: 5
    },
    {
        name: 'Six of Hearts',
        suit: 'Hearts',
        value: 6
    },
    {
        name: 'Seven of Hearts',
        suit: 'Hearts',
        value: 7
    },
    {
        name: 'Eight of Hearts',
        suit: 'Hearts',
        value: 8
    },
    {
        name: 'Nine of Hearts',
        suit: 'Hearts',
        value: 9
    },
    {
        name: 'Ten of Hearts',
        suit: 'Hearts',
        value: 10
    },
    {
        name: 'Jack of Hearts',
        suit: 'Hearts',
        value: 'J'
    },
    {
        name: 'Queen of Hearts',
        suit: 'Hearts',
        value: 'Q'
    },
    {
        name: 'King of Hearts',
        suit: 'Hearts',
        value: 'K'
    },
    {
        name: 'Ace of Spades',
        suit: 'Spades',
        value: 'A'
    },
    {
        name: 'Two of Spades',
        suit: 'Spades',
        value: 2
    },
    {
        name: 'Three of Spades',
        suit: 'Spades',
        value: 3
    },
    {
        name: 'Four of Spades',
        suit: 'Spades',
        value: 4
    },
    {
        name: 'Five of Spades',
        suit: 'Spades',
        value: 5
    },
    {
        name: 'Six of Spades',
        suit: 'Spades',
        value: 6
    },
    {
        name: 'Seven of Spades',
        suit: 'Spades',
        value: 7
    },
    {
        name: 'Eight of Spades',
        suit: 'Spades',
        value: 8
    },
    {
        name: 'Nine of Spades',
        suit: 'Spades',
        value: 9
    },
    {
        name: 'Ten of Spades',
        suit: 'Spades',
        value: 10
    },
    {
        name: 'Jack of Spades',
        suit: 'Spades',
        value: 'J'
    },
    {
        name: 'Queen of Spades',
        suit: 'Spades',
        value: 'Q'
    },
    {
        name: 'King of Spades',
        suit: 'Spades',
        value: 'K'
    },
    {
        name: 'Ace of Diamonds',
        suit: 'Diamonds',
        value: 'A'
    },
    {
        name: 'Two of Diamonds',
        suit: 'Diamonds',
        value: 2
    },
    {
        name: 'Three of Diamonds',
        suit: 'Diamonds',
        value: 3
    },
    {
        name: 'Four of Diamonds',
        suit: 'Diamonds',
        value: 4
    },
    {
        name: 'Five of Diamonds',
        suit: 'Diamonds',
        value: 5
    },
    {
        name: 'Six of Diamonds',
        suit: 'Diamonds',
        value: 6
    },
    {
        name: 'Seven of Diamonds',
        suit: 'Diamonds',
        value: 7
    },
    {
        name: 'Eight of Diamonds',
        suit: 'Diamonds',
        value: 8
    },
    {
        name: 'Nine of Diamonds',
        suit: 'Diamonds',
        value: 9
    },
    {
        name: 'Ten of Diamonds',
        suit: 'Diamonds',
        value: 10
    },
    {
        name: 'Jack of Diamonds',
        suit: 'Diamonds',
        value: 'J'
    },
    {
        name: 'Queen of Diamonds',
        suit: 'Diamonds',
        value: 'Q'
    },
    {
        name: 'King of Diamonds',
        suit: 'Diamonds',
        value: 'K'
    },
    {
        name: 'Ace of Clubs',
        suit: 'Clubs',
        value: 'A'
    },
    {
        name: 'Two of Clubs',
        suit: 'Clubs',
        value: 2
    },
    {
        name: 'Three of Clubs',
        suit: 'Clubs',
        value: 3
    },
    {
        name: 'Four of Clubs',
        suit: 'Clubs',
        value: 4
    },
    {
        name: 'Five of Clubs',
        suit: 'Clubs',
        value: 5
    },
    {
        name: 'Six of Clubs',
        suit: 'Clubs',
        value: 6
    },
    {
        name: 'Seven of Clubs',
        suit: 'Clubs',
        value: 7
    },
    {
        name: 'Eight of Clubs',
        suit: 'Clubs',
        value: 8
    },
    {
        name: 'Nine of Clubs',
        suit: 'Clubs',
        value: 9
    },
    {
        name: 'Ten of Clubs',
        suit: 'Clubs',
        value: 10
    },
    {
        name: 'Jack of Clubs',
        suit: 'Clubs',
        value: 'J'
    },
    {
        name: 'Queen of Clubs',
        suit: 'Clubs',
        value: 'Q'
    },
    {
        name: 'King of Clubs',
        suit: 'Clubs',
        value: 'K'
    },
]

function dealerDraw() {
    let dealerDraw1 = Math.floor(Math.random() * 52)
    dealCard1Num.textContent = cards[dealerDraw1].value;
    if(cards[dealerDraw1].value == 'J' || cards[dealerDraw1].value == 'Q' || cards[dealerDraw1].value == 'K') {
        cards[dealerDraw1].value = 10;
    }
    if(cards[dealerDraw1].value == 'A') {
        cards[dealerDraw1].value = 1;
    }
    if(cards[dealerDraw1].suit == 'Hearts') {
        dealerHeart();
    } else if(cards[dealerDraw1].suit == 'Diamonds') {
        dealerDiamond();
    } else if(cards[dealerDraw1].suit == 'Clubs') {
        dealerSuit1.style.backgroundColor = 'black';
    } else if(cards[dealerDraw1].suit == 'Spades') {
        dealerSuit1.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = cards[dealerDraw1].value;
}

function drawCards() {
    let rando = Math.floor(Math.random() * 52);
    cardOneNum.textContent = cards[rando].value;
    if(cards[rando].value == 'J' || cards[rando].value == 'Q' || cards[rando].value == 'K') {
        cards[rando].value = 10;
    }
    if(cards[rando].value == 'A' && document.getElementById('yourHand').innerText <= 10) {
        cards[rando].value = 11;
    }
    if(cards[rando].suit == 'Hearts') {
        drawHeart();
    } else if(cards[rando].suit == 'Diamonds') {
        drawDiamond();
    } else if(cards[rando].suit == 'Clubs') {
        suit1.style.backgroundColor = 'black';
    } else if(cards[rando].suit == 'Spades') {
        suit1.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = cards[rando].value;
    let rando2 = Math.floor(Math.random() * 52);
    cardTwoNum.textContent = cards[rando2].value;
    if(cards[rando2].value == 'J' || cards[rando2].value == 'Q' || cards[rando2].value == 'K') {
        cards[rando2].value = 10;
    }
    if(cards[rando2].value == 'A' && document.getElementById('card1Num').innerHTML == 'A') {
        cards[rando2].value = 1;
    } else if(cards[rando2].value == 'A' && document.getElementById('card1Num').innerHTML != 'A'){
        cards[rando2].value = 11;
    } 
    if(cards[rando2].suit == 'Hearts' || cards[rando2].suit == 'Diamonds') {
        suit2.style.backgroundColor = 'red';
    } else {
        suit2.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = cards[rando].value + cards[rando2].value;
    if((document.getElementById('yourHand').innerText = cards[rando].value + cards[rando2].value) < 21) {
        document.getElementById('drawCards').outerHTML = `<button id='drawCards' onclick='hit1()'>Hit</button><button id='stay()' onclick='stay()'>Stay</button>`
    } else {
        document.getElementById('drawCards').outerHTML = `<button id='stay()' onclick='stay()'>Stay</button>`
    }
    dealerDraw();
}

function hit1() {
    document.getElementById('drawCards').outerHTML = `<section id='hit1Card'><h2 id='hit1Num'>0</h2><canvas id='hit1Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit2()'>Hit</button>`
    let randoNew = Math.floor(Math.random() * 52);
    document.getElementById('hit1Num').textContent = cards[randoNew].value;
    if(cards[randoNew].value == 'J' || cards[randoNew].value == 'Q' || cards[randoNew].value == 'K') {
        cards[randoNew].value = 10;
    }
    if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) <= 21) {
        cards[randoNew].value = 11;
    } else if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) > 21) {
        cards[randoNew].value = 1;
    }
    if(cards[randoNew].suit == 'Hearts' || cards[randoNew].suit == 'Diamonds') {
        hit1Suit.style.backgroundColor = 'red';
    } else {
        hit1Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value;
    if(document.getElementById('card1Num').innerHTML == 'A' && document.getElementById('card2Num').innerHTML != 'A' && document.getElementById('yourHand').innerText > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }
    if(document.getElementById('card2Num').innerHTML == 'A' && document.getElementById('card1Num').innerHTML != 'A' && document.getElementById('yourHand').innerText > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }
    if(document.getElementById('card1Num').innerHTML == 'A' && document.getElementById('card2Num').innerHTML == 'A' && document.getElementById('card1Num').innerHTML != 'A' && document.getElementById('yourHand').innerText > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }
}

function hit2() {
    document.getElementById('drawCards').outerHTML = `<section id='hit2Card'><h2 id='hit2Num'>0</h2><canvas id='hit2Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit3()'>Hit</button>`
    let randoNew = Math.floor(Math.random() * 52);
    document.getElementById('hit2Num').textContent = cards[randoNew].value;
    document.getElementById('hit2Num').textContent = cards[randoNew].value;
    if(cards[randoNew].value == 'J' || cards[randoNew].value == 'Q' || cards[randoNew].value == 'K') {
        cards[randoNew].value = 10;
    }
    if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) <= 21) {
        cards[randoNew].value = 11;
    } else if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) > 21) {
        cards[randoNew].value = 1;
    }
    if(cards[randoNew].suit == 'Hearts' || cards[randoNew].suit == 'Diamonds') {
        hit2Suit.style.backgroundColor = 'red';
    } else {
        hit2Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value;
    if(document.getElementById('card1Num').innerHTML === 'A' && document.getElementById('card2Num').innerHTML === 'A' && parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }
    if(document.getElementById('card1Num').innerHTML == 'A' && document.getElementById('card2Num').innerHTML == 'A' && document.getElementById('card1Num').innerHTML != 'A' && document.getElementById('yourHand').innerText > 21 && document.getElementById('hit1Num').innerHTML <= 9) {
        document.getElementById('yourHand').innerText -= 10;
    }
    /*if(document.getElementById('hit1Num').innerHTML === 'A' && parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }*/
}

function hit3() {
    document.getElementById('drawCards').outerHTML = `<section id='hit3Card'><h2 id='hit3Num'>0</h2><canvas id='hit3Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit4()'>Hit</button>`
    let randoNew = Math.floor(Math.random() * 52);
    document.getElementById('hit3Num').textContent = cards[randoNew].value;
    document.getElementById('hit3Num').textContent = cards[randoNew].value;
    if(cards[randoNew].value == 'J' || cards[randoNew].value == 'Q' || cards[randoNew].value == 'K') {
        cards[randoNew].value = 10;
    }
    if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) <= 21) {
        cards[randoNew].value = 11;
    } else if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) > 21) {
        cards[randoNew].value = 1;
    }
    if(cards[randoNew].suit == 'Hearts' || cards[randoNew].suit == 'Diamonds') {
        hit3Suit.style.backgroundColor = 'red';
    } else {
        hit3Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value;
    /*if(document.getElementById('hit2Num').innerHTML === 'A' && parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }*/
}

function hit4() {
    document.getElementById('drawCards').outerHTML = `<section id='hit4Card'><h2 id='hit4Num'>0</h2><canvas id='hit4Suit' height='15px' width='10px'><p>New Card Suit</p></canvas></section><br><button id='drawCards' onclick='hit3()'>Hit</button>`
    let randoNew = Math.floor(Math.random() * 52);
    document.getElementById('hit4Num').textContent = cards[randoNew].value;
    document.getElementById('hit4Num').textContent = cards[randoNew].value;
    if(cards[randoNew].value == 'J' || cards[randoNew].value == 'Q' || cards[randoNew].value == 'K') {
        cards[randoNew].value = 10;
    }
    if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) <= 21) {
        cards[randoNew].value = 11;
    } else if(cards[randoNew].value == 'A' && (document.getElementById('yourHand').innerText + 11) > 21) {
        cards[randoNew].value = 1;
    }
    if(cards[randoNew].suit == 'Hearts' || cards[randoNew].suit == 'Diamonds') {
        hit4Suit.style.backgroundColor = 'red';
    } else {
        hit4Suit.style.backgroundColor = 'black';
    }
    document.getElementById('yourHand').innerText = parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value;
    /*if(document.getElementById('hit3Num').innerHTML === 'A' && parseInt(document.getElementById('yourHand').innerText) + cards[randoNew].value > 21) {
        document.getElementById('yourHand').innerText -= 10;
    }*/
}

function stay() {
    let dealerDraw2 = Math.floor(Math.random() * 52)
    dealCard2Num.textContent = cards[dealerDraw2].value;
    if(cards[dealerDraw2].value == 'J' || cards[dealerDraw2].value == 'Q' || cards[dealerDraw2].value == 'K') {
        cards[dealerDraw2].value = 10;
    }
    if(cards[dealerDraw2].value == 'A') {
        cards[dealerDraw2].value = 1;
    }
    if(cards[dealerDraw2].suit == 'Hearts' || cards[dealerDraw2].suit == 'Diamonds') {
        dealerSuit2.style.backgroundColor = 'red';
    } else {
        dealerSuit2.style.backgroundColor = 'black';
    }
    document.getElementById('dealerHand').innerText = parseInt(document.getElementById('dealerHand').innerText) + cards[dealerDraw2].value;
}
      
function drawHeart() {
  let canvas = document.getElementById('suit1');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(20, 15);
    ctx.lineTo(27, 15);
    ctx.lineTo(32, 22);
    ctx.lineTo(37, 15);
    ctx.lineTo(45, 15);
    ctx.lineTo(48, 30);
    ctx.lineTo(33, 50);
    ctx.lineTo(15, 30);
    ctx.fill(); 
  }
}

function drawDiamond() {
  let canvas2 = document.getElementById('suit1');
  if (canvas2.getContext) {
    let ctxd = canvas2.getContext('2d');
    ctxd.fillStyle = 'red';
    ctxd.beginPath();
    ctxd.moveTo(32, 2);
    ctxd.lineTo(43, 26);
    ctxd.lineTo(32, 50);
    ctxd.lineTo(20, 26);
    ctxd.fill(); 
  }
}

function dealerHeart() {
  let dealerCanvas = document.getElementById('dealerSuit1');
  if (dealerCanvas.getContext) {
    let DHctx = dealerCanvas.getContext('2d');
    DHctx.fillStyle = 'red';
    DHctx.beginPath();
    DHctx.moveTo(20, 15);
    DHctx.lineTo(27, 15);
    DHctx.lineTo(32, 22);
    DHctx.lineTo(37, 15);
    DHctx.lineTo(45, 15);
    DHctx.lineTo(48, 30);
    DHctx.lineTo(33, 50);
    DHctx.lineTo(15, 30);
    DHctx.fill(); 
  }
}

function dealerDiamond() {
  let dealerCanvas2 = document.getElementById('dealerSuit1');
  if (dealerCanvas2.getContext) {
    let DDctx = dealerCanvas2.getContext('2d');
    DDctx.fillStyle = 'red';
    DDctx.beginPath();
    DDctx.moveTo(32, 2);
    DDctx.lineTo(43, 26);
    DDctx.lineTo(32, 50);
    DDctx.lineTo(20, 26);
    DDctx.fill(); 
  }
}
