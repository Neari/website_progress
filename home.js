 /*
//Retourne l'lement de l'id "corps"
var corps = document.getElementById("corps");
 alert(corps);
        
//Retourne tous les elements "div" present dans la page
var divs = document.getElementsByTagName("div");
for (var i =0, c = divs.length; i < c ; i++){
    alert("Element n°" + (i+1) + " : " + divs[i]);
}

// accès aux differents elements de l'ID ou class specifique
var query = document.querySelector("#top_title .top_element a");
var queryAll = document.querySelectorAll("#top_title .top_element a");

alert(queryAll.length);  // affiche 7 car il y a bien <a> x7
alert(queryAll[0].innerHTML + " - " + queryAll[1].innerHTML); // affiche Home - Page 2 ; les deux premiers <a>

var link = document.getElementById("google_link");
//var href = link.getAttribute("href"); // on recupere attribut "href" ici google.com
var href = link.href; // on recupere attribut "href" ici google.com

alert(href);

//link.setAttribute("href", "https://www.wikipedia.org/"); // on edit le href pour changer le lien du site
link.href = "https://www.wikipedia.org/" // on edit le href pour changer le lien du site

document.getElementById("MycolorDiv").className = "blue"; //modifie le style d'un element id
*/
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
/*
var div = document.getElementById("MycolorDiv"); // recupere le code html enfant d'un element sous forme de texte
alert(div.innerHTML);
//alert(div.innerText); // affiche que le text sans balises (avant IE 9)
//alert(div.textContent); // affiche que le text sans balises (version standardisé partout sauf avant IE9)

//gestion en fonction du navigateur
var txt = "";
txt = div.textContent || div.innerText || "";
alert(txt);

document.getElementById("MycolorDiv").innerHTML = "<blockquote> je met une citation avec du <strong>strong</strong> ahahah</blockquote>";
*/
//-----------------------------------------------------------------------------------
// ---- NAVIGATION DANS LES NOEUDS ----
//-----------------------------------------------------------------------------------
var h1 = document.getElementById("mytest");
var elem_type_parent = h1.nodeType;  //type d'un noeud (cf tableau)
var elem_name_parent = h1.nodeName; //nom d'un noeud
alert(elem_type_parent + " <---> " + elem_name_parent.toLowerCase());

var first = h1.firstChild; //ou firstElementChild pour ne retourner que les elements HTML
var last = h1.lastChild;
alert(first.nodeName.toLowerCase()+ " <---> " + last.nodeName.toLowerCase());

alert("1st child du 1st child (<a>) = " + first.firstChild.nodeValue); //nodeValue ou data pour recup le contenu du noeud
alert("2 child du 1st child (<a>) = " + first.childNodes[1].nodeName);
alert("3 child du 1st child (<a>) = " + first.childNodes[2].nodeValue);
alert("last child value = " + last.nodeValue); // on recupere donc "   " car entre </p> et </div> il ya un retour a la ligne ; si on les collait </p></div> on obtientrait NULL
alert("last balise child name = " + h1.childNodes[6].nodeName); //derniere balise = <p>
alert("last balise child value = " + h1.childNodes[6].firstChild.nodeValue);//dernier contenu de la derniere valise

// Boucle pour lire tous les childs de l'ID + le 1er child de chaque child
/*
var children = h1.childNodes;
for(var i= 0, c = children.length; i < c; i++){
    if (children[i].nodeType === Node.ELEMENT_NODE){
        
        alert(children[i].firstChild.data);
    }
    else {
        alert(children[i].data);
    }
}
*/

//Boucle en partant du dernier element (ici balise p) et on remonte jusqu'à la 1er en sautant les noeuds textuels !
var child = h1.lastElementChild;
while (child){
    if(child.nodeType === Node.ELEMENT_NODE){
        alert(child.firstChild.data);
    }
    else{
        alert(child.data);
    }
    child = child.previousElementSibling;
}

//-----------------------------------------------------------------------------------
// ---- NAVIGATION DANS LES NOEUDS ----
//-----------------------------------------------------------------------------------
var newLink = document.createElement("a"); // creation d'un element <a>
var newLinkText = document.createTextNode("vers MMO-Champion"); // creation du noeud text associé

newLink.id = "mmo_link";
newLink.href = "https://www.mmo-champion.com";
newLink.target = "_blanck"
newLink.title = "Let's go in MMO Champion";
newLink.setAttribute("tabindex", "10");

newLink.appendChild(newLinkText); // ajout du noeud text dans notre nouvel element

document.getElementById("mytest").appendChild(newLink); //insertion dans le code html en place (dernier enfant de mytest)





