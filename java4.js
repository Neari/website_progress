//console.log(document.body.childNodes[5].childNodes[1]); // selection le premier <h2>

var titleEltsH2 = document.getElementsByTagName("h2"); // on cible que les h2
console.log(titleEltsH2[0]);
console.log(titleEltsH2.length);

var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++){
    console.log(merveillesElts[i]);
}

console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1

// Tous les <p>
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les <p> à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length);//affiche 1
console.log(document.querySelectorAll("#nouvelles > .existe").length);//affiche 7

//le premier <p>
console.log(document.querySelector("p"));

// le contenu de l'element identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML); //avec balises
console.log(document.getElementById("contenu").textContent); //sans balises

//attribut href du premier lien
//console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("a").href);

//id de la premire liste
console.log(document.querySelector("ul").id);

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

//liste des classes de l'element identifie par "antiques"
var classes= document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);

if(document.getElementById("antiques").classList.contains("merveille")){
    console.log("l'ID antique possede la classe merveille");
}
    else{
        console.log("l'ID antique ne possede pas la classe merveille");
    }

//--------------------------------------------------------------

function compterElements(target){
    Target=target;
    return console.log(document.querySelectorAll(Target).length);
}
    

compterElements("p"); // Doit afficher 2
compterElements(".existe"); // Doit afficher 8
compterElements("div .aah"); // Doit afficher 1
compterElements("#nouvelles > .existe"); // Doit afficher 7

//--------------------------------------------------------------

function infoLink(target){
    return document.querySelectorAll(target);
}

var infoLinkLength = infoLink("a").length;
console.log(infoLinkLength);
console.log(infoLink("a")[0].href);
console.log(infoLink("a")[infoLinkLength-1].href);

//--------------------------------------------------------------
function possede(id, classe){
    var instrument = document.getElementById(id);
    if (instrument !==null){
         console.log(instrument.classList.contains(classe));
    }
    else console.log("Aucun element avec l'ID = " + id);   
}


possede("saxophone", "cuivre"); // Doit afficher true
possede("saxophone", "bois"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur