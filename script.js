/*console.log("Hello, World!");

var malédiction = "Je suis maudit";
let espoir = "Je suis plein d'espoir";
const serment = "Je suis un sermon";

typeof "épée";         // string
typeof 100;            // number
typeof true;           // boolean
typeof undefined;      // undefined
typeof null;           // object ← malédiction antique
typeof Symbol();       // symbol

let foi = 47;

if (foi > 70) {
  console.log("Tu es digne du Feu");
} else if (foi > 40) {
  console.log("Tu chancelles... mais avances");
} else {
  console.log("Tu n'es que cendres");
}

let jugement = foi > 70 ? "Feu accordé" : "Tu erreras encore";


let serments = ["Loyauté", "Courage", "Sacrifice"];

for (let serment of serments) {
  console.log(serment); // valeurs
}

for (let rang in serments) {
  console.log(rang); // index
}

let élu = {
    nom: "Morteflamme",
    force: 99,
    bague: ["Serment de l'Est", "Anneau de Frappe"]
  };
  
  console.log(élu.nom); // "Morteflamme"
  console.log(élu["force"]); // 99

élu.vitalité = 30;
élu.bague.push("Anneau de Loup");*/

let objets = [
    { nom: "Anneau du Vide", description: "Réduit les erreurs fatales.", corrompu: false },
    { nom: "Flamme de Promesse", description: "Permet de restaurer la foi (et les promesses).", corrompu: false }
  ];
  
  function afficherObjets() {
    const ul = document.getElementById("listeObjets");
    ul.innerHTML = "";
  
    objets.forEach((objet, index) => {
      const li = document.createElement("li");
      li.className = "objet" + (objet.corrompu ? " corrompu" : "");
      li.textContent = objet.nom;
      li.onclick = () => afficherDetails(index);
      ul.appendChild(li);
    });
  }
  
  function ajouterObjet() {
    const input = document.getElementById("nouvelObjet");
    const nom = input.value.trim();
    if (!nom) return alert("Nom requis, élu sans nom.");
    
    objets.push({ nom, description: "???", corrompu: false });
    input.value = "";
    afficherObjets();
  }
  
  function afficherDetails(index) {
    const details = document.getElementById("details");
    const objet = objets[index];
    details.innerHTML = `
      <h2>${objet.nom}</h2>
      <p>${objet.description}</p>
      <button onclick="corrompreObjet(${index})">☠️ Corrompre</button>
      <button onclick="détruireObjet(${index})">🔥 Détruire</button>
    `;
  }
  
  function corrompreObjet(index) {
    objets[index].corrompu = !objets[index].corrompu;
    afficherObjets();
    afficherDetails(index);
  }
  
  function détruireObjet(index) {
    if (confirm("Es-tu sûr ? Ce pouvoir est irréversible.")) {
      objets.splice(index, 1);
      afficherObjets();
      document.getElementById("details").innerHTML = "";
    }
  }
  
  // Premier affichage
  afficherObjets();
  

  
