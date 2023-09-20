function rollDice() {
    // Get random values for two dice rolls (between 1 and 6)
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    // Update the src attribute of the dice images to display the rolled numbers
    document.getElementById("die1").src = `dice-${roll1}.png`;
    document.getElementById("die2").src = `dice-${roll2}.png`;
}