var h = document.head;
console.log(h.nodeName.toLowerCase());
console.log(h);
var b = document.body;
console.log(b.nodeName.toLowerCase());
console.log(b);

if(document.body.nodeType === document.ELEMENT_NODE){
    console.log("Body est un noeud element");
}
else {
    console.log("Body est un noeud textuel");
}

//console.log(document.body.childNodes[0]); // affiche text car retour à la ligne
//console.log(document.body.childNodes[1]); // affiche <div id ="top title">

// affiche tous les noeuds enfants de <body>
for (var i=0; i < document.body.childNodes.length; i++){
    console.log(document.body.childNodes [i]);
}

console.log("-----------------------------");
console.log("-----------------------------");
console.log("-----------------------------");

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); //affiche le noeud body
console.log(document.parentNode);// affiche null : document n'a aucun noeud parent

console.log("-----------------------------");
console.log("-----------------------------");
console.log("-----------------------------");

/*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    if (noeud.nodeType === document.ELEMENT_NODE){
        if ((indice >= 0) && (indice < noeud.childNodes.length)){
            console.log(noeud.childNodes[indice]);
        }
        else {
            console.error("Indice incorrect");
        }
    }
    else {
        console.error("Type de noeud incorrect");
    }   
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 20 noeuds enfants
afficherEnfant(document.body, 7);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);