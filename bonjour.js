const prompt = require("prompt-sync")();

function randomCard() {
  const cards = ["eau", "plante", "feu"];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function winner(player, IAplayer) {
  if (
    (player === "eau" && IAplayer === "feu") ||
    (player === "feu" && IAplayer === "plante") ||
    (player === "plante" && IAplayer === "eau")
  ) {
    return "Victoire";
  } else if (player === IAplayer) {
    return "Égalité";
  } else {
    return "Défaite";
  }
}

function card_game() {
  console.log("XXXXXXXXXXXXXXXXX");
  console.log("|   Bienvenue   |");
  console.log("XXXXXXXXXXXXXXXXX");

  let myresult = 0;
  let botresult = 0;

  for (let round = 1; round <= 3; round++) {
    console.log(` Manche ${round}`);
    console.log("  3 \n  2 \n  1 \n GO!!");
    const mycard = prompt("Veuillez choisir une carte : ");
    const botcard = randomCard();
    const roundResult = winner(mycard, botcard);

    console.log("Attendez le résultat de cette manche");
    console.log(`${roundResult}`);

    if (roundResult === "Victoire") {
      myresult++;
    } else if (roundResult === "Défaite") {
      botresult++;
    }
  }

  console.log("\nRésultat final :");
  console.log(`Vous avez ${myresult} point(s)`);
  console.log(`L'IA a ${botresult} point(s)`);

  if (myresult > botresult) {
    console.log("Vous remportez la partie !");
  } else if (myresult < botresult) {
    console.log("Le robot remporte la partie.");
  } else {
    console.log("Égalité !");
  }
}

card_game();
