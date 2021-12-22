// Méthode 1
function changeImageM11(url, nom) { 
  document.body.children[1].children[2].children[0].src = './Images/image_france_monument.jpg' ; // en décomposé on modifie
  document.body.children[1].firstElementChild.nextElementSibling.children[0].innerHTML = 'Voyager en France !' ;
}
function changeImageM12(url, nom) { 
  document.body.children[1].children[2].children[0].src = './Images/image_france_univ.jpg' ; // en décomposé on modifie
  document.body.children[1].firstElementChild.nextElementSibling.children[0].innerHTML = ' Etuier à : Université de Pau!' ;
} 
// Méthode 2
function changeImageM21(id_url, id_nom, url, nom) {
  document.getElementById('id_image').src = './Images/image_canada_monument.jpg';
  document.getElementById('id_quoi').innerHTML = 'Voyager au Canada !';
}
function changeImageM22(id_url, id_nom, url, nom) {
  document.getElementById('id_image').src = './Images/image_canada_univ.jpg';
  document.getElementById('id_quoi').innerHTML = 'Etudier à : Université de Toronto !';
}
// Méthode 3 
function changeImageM31(url, nom) {
  document.querySelector('#id_image').src = "./Images/image_usa_monument.jpg" ;
  document.querySelector('#id_quoi').innerHTML= ' Voyager aux Etats-Unis !' ;
}
function changeImageM32(url, nom) {
  document.querySelector('#id_image').src = "./Images/image_usa_univ.jpg" ;
  document.querySelector('#id_quoi').innerHTML= ' Etudier à: Université de Harvard !' ;
}
// Revenir à l'image d'introduction
function changeImageM4(url,nom) {
  document.querySelector('#id_image').src = "./Images/image_intro.jpg" ;
  document.querySelector('#id_quoi').innerHTML= ' Voyager pour Etudier !' ; 

}
//fonction changement de la couleur de l'arrière plan
function random(nb){
  return Math.floor(Math.random()*(nb-1));
}
function changeCouleur() {
  
 let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
 document.body.style.backgroundColor = rndCol;

}