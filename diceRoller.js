function roll() {
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let result = document.getElementById("result");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let total = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    result.innerHTML = ` You rolled ${total}`;
}