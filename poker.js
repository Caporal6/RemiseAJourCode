play();

function play() {
    document.getElementById("zackPoche").style.display = "none";
    document.getElementById("zackOk").style.display = "none";
    document.getElementById("zackYessir").style.display = "none";
    document.getElementById("1").innerHTML = Math.floor(Math.random() * 5);
    document.getElementById("2").innerHTML = Math.floor(Math.random() * 5);
    document.getElementById("3").innerHTML = Math.floor(Math.random() * 5);
    document.getElementById("4").innerHTML = Math.floor(Math.random() * 5);
    document.getElementById("5").innerHTML = Math.floor(Math.random() * 5);

    let nbr = [
        document.getElementById("1").innerHTML,
        document.getElementById("2").innerHTML,
        document.getElementById("3").innerHTML,
        document.getElementById("4").innerHTML,
        document.getElementById("5").innerHTML
    ];

    // Compter les occurrences de chaque valeur
    let counts = {};
    for (let n of nbr) {
        counts[n] = (counts[n] || 0) + 1;
    }

    // Compter le nombre de paires
    let nbPaires = 0;
    for (let val in counts) {
        if (counts[val] === 2) {
            nbPaires++;
        }
    }

    if (nbPaires === 0) {
        document.getElementById("resultat").innerHTML = "No pairs found.";
        document.getElementById("zackPoche").style.display = "block";
    } else if (nbPaires === 1) {
        document.getElementById("resultat").innerHTML = "You have one pair!";
        document.getElementById("zackOk").style.display = "block";
    } else {
        document.getElementById("resultat").innerHTML = "You have " + nbPaires + " pairs!";
        document.getElementById("zackYessir").style.display = "block";

    }
}