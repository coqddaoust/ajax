//1. Chargement du fichier json et affichage dans la console
let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'data.json');
myRequest.onload = function() {
    let myData = JSON.parse(myRequest.responseText);  
    console.log(myData);  


//2. Ajouter un score aléatoire (0 -> 1000) à toutes ces personnes
let myDataScore = myData.map(function random(data) {
    let newData = data;
    newData['score'] = Math.floor((Math.random() * 1000) + 1);
    return newData;
});

//3. Classer l'ordre du tableau selon les scores
myData.sort(function(a, b) {
    return parseInt(a.score) - parseInt(b.score);
});

//4. Mettre personnes dans 3 catégories
//(a > 750, b > 500, c < 500 ) les catgories sont des tableaux
let catA = [];
let catB = [];
let catC = [];
myData.forEach(function(element) {
    if(element.score > 750) {
        catA.push(element);
    }
    else if (element.score > 500) {
        catB.push(element);
    }
    else {
        catC.push(element);
    }
    
});
//5. compter combien de personne viennent du "Bahrain" tip : filter()
let dataFilter = myDataScore.filter(function(element) {
    return element.country == "Bahrain";
});

//6. afficher le plus grand score dans la console tip : sort()
let bigScore = myDataScore.sort(function(a, b) {
    return parseInt(b.score) - parseInt(a.score);
});
//alert(myData[0]);

//7.0afficher le plus petit score tip : sort()
let miniScore = myDataScore.sort(function(a, b) {
    return parseInt(a.score) - parseInt(b.score);
});
//alert(myData[0]);

};
myRequest.send();