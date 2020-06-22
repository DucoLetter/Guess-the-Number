let name = prompt('Wat is uw naam?', 'Vul hier uw naam in');
alert(`Hey ${name} Leuk dat je mee doet`);

let rangeMin = parseInt(prompt("Wat wil u gebruiken als kleinste getal?"))
let rangeMax = parseInt(prompt("Wat wil u gebruiken als grootste getal?"))


let nummer = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

let guess = parseInt(prompt("Voer een nummer in tussen de " + rangeMin + " en " + rangeMax + " om te beginnen met raden..."))

let guesses = 1;

while (guess !== nummer && guesses < 5) {
    alert("Jij koos: " + guess + ". Dat is helaas niet correct. Je hebt nog " + (5 - guesses) + " pogingen over.");
    guess = parseInt(prompt("Probeer opnieuw"))
    guesses++;
}

if (guess == nummer && guesses < 6) {
    alert("Gefeliciteerd, je hebt gewonnen!");
}

if (guess !== nummer && guesses == 5) {
    alert("Helaas je hebt geen pogingen meer over, het spel is afgelopen. Het winnende getal was " + nummer + ".");
}

alert("Dag " + name + ". Tot de volgende keer!"); 