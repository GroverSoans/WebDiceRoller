
function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("numOfDice");
    const diceImages = document.getElementById("diceImages");

    const values = []
    const images = []

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        //console.log(value);
        values.push(value);
        images.push(`<img src="diceImages/${value}.png" alt="Dice ${value}">`)
    }
    //console.log(values)

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')

}