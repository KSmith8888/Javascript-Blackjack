# JavaScript-Blackjack

https://ksmith8888.github.io/Javascript-Blackjack/

  Blackjack game made with vanilla JavaScript. Creates a procedurally generated array of card objects representing the deck on page load. Pressing the "Draw Cards" button starts a function that uses Math.random() to select an index of the cards array for each of the player's cards and the dealer's visible card. Each hit runs a function to create a new card within the HTML and determine if the player's hand has gone over 21. If it has, an alert displays a game over message, otherwise the player can choose to hit again or stay. Once the player selects stay, a function runs that draws additional cards for the dealer until their hand totals at least 17. Once the dealer's hand reaches at least 17 a function determines the outcome and displays the appropriate message, then creates a "Play Again" button that allows the player to reset.   
