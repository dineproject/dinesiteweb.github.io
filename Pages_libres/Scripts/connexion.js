// connexion.js
// auteurs : Souaibou Dine Barry

//----------------------------------------------------- Variables globales ---
let codeChiffres = "";
let capchaFormule = "";
let capchaResultat = ""

//--------------------------------------------------------- Initialisation ---

// appelle la fonction d'Initialisation quand la fenêtre est chargée
window.addEventListener("load", init);

function init() {

  // Code d'accès
  melangeChiffres();
  afficheCode();

  // Capcha
  genereCapcha();

}
//----------------------------------------------- Gestion de l'identifiant ---

// revoie vrai si la longueur de l'identifiant saisi est >= 8 caractères
function verifieIdentifiant() {
  let identifiant = document.getElementById("input_identifiant").value;
  return identifiant.length >= 8;
}

// modifie la couleur de l'identifiant en fonction de sa validité
function valideIdentifiant() {
  let identifiantElt = document.getElementById("input_identifiant");
  if (verifieIdentifiant() === true) {
    identifiantElt.style = "color:black;"
  } else {
    identifiantElt.style = "color:red;"
  }
}

//------------------------------------------------ Gestion du code d'accès ---

function melangeChiffres() {
  // récupère un tableau de boutons chiffres
  let divElt = document.getElementById("boutons_chiffres");
  let buttonElts = divElt.getElementsByTagName("button");

  // créer un tableau qui contient autant de chiffres que de boutons
  let tabChiffres = []; // tablean vide;
  for (let i = 0; i < buttonElts.length; i++) {
    tabChiffres[i] = i;
  }

  // mélanger ce tableau de chiffres
  melangeTableau(tabChiffres);

  // affecter ces chiffres mélangés sur les boutons
  for (let i = 0; i < buttonElts.length; i++) {
    buttonElts[i].textContent = tabChiffres[i];
  }
}

function melangeTableau(tab) {
  let i;
  let j;
  let temp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
  }
}

function saisieChiffre(elt) {
  let chiffre = elt.textContent;

  // TODO: Quoi faire avec le chiffre saisi ?
  console.log("Chiffre saisi : "+ chiffre);

  afficheCode();
}

// Affiche le code dans le forumulaire
function afficheCode() {
  console.log("Code à afficher : " + codeChiffres);
  document.getElementById("code_saisi").value="123456";

  // TODO: Complétez la fonction...
}

//------------------------------------------------------ Gestion du Capcha ---

function genereCapcha() {
  var operations = ['+', '-', '*'];
  var o = parseInt(Math.round(Math.random() * 2));
  console.log("Opération choisie pour le capcha : " + operations[o]);

  // TODO: Modifier pour construire une formule aléatoire
  //       et le résultat correspondant
  var formule  = "3 * 5 = ";
  var resultat = 3 * 5;

  capchaFormule  = formule;
  capchaResultat = resultat;

  afficheCapcha();
}

function afficheCapcha() {
  let labelElt = document.getElementById("capcha_formule");
  labelElt.textContent = capchaFormule;
  let inputElt = document.getElementById("capcha_saisi").value = "";
}

//----------------------------------------------- Validation du formulaire ---

function valideFormulaire() {
  let ok = true;
  if (verifieIdentifiant()===false) {
    console.log("L'identifiant doit comporter au moins 8 caractères !");
    ok = false;
  }
  return ok;
}
