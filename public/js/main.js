// ## EXO1
// #### Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

let addit = (a,b) => {
    return `${a} + ${b} = ${a+b}`
}
console.log(addit(4,3));

// ## EXO2
// #### Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

let soust = (a,b) => {
    return `${a} - ${b} = ${a-b}`
}
console.log(soust(4,3));

// ## EXO3  
// #### Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

let multi = (a,b) => {
    return `${a} * ${b} = ${a*b}`
}
console.log(multi(4,3));

// ## EXO4 
// #### Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

let div = (a,b) => {
    return `${a} / ${b} = ${a/b}`
}
console.log(div(4,3));

// ## EXO5
// #### Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

let modu = (a,b) => {
    return `${a} % ${b} = ${a%b}`
}
console.log(modu(4,3));

// ## EXO6
// #### Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

let rc = (a) => {
    return `${a} au carré = ${Math.pow(a,2)}`
}
console.log(rc(4));

// ## EXO7
// #### Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

let rc2 = (a,b) => {
    return `${a} éxposant ${b} = ${Math.pow(a,b)}`
}
console.log(rc2(4,3));

// ## EXO8
// #### Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

let capitalize = (a) => {
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}
console.log(capitalize("aJadjaIjdoaJDIAJ"));

// ## EXO9
// #### Créer une function [calcul] ayant 3 paramètres
// #### nbr1 , operator , nbr2
// #### Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

let calcul = (nbr1,operator,nbr2) => {
    