
/* let meuArray = ["Asta","Gustavo","Antonio","Camila",21,22,24];
console.table(meuArray);

meuArray.push("Senai","Senac,","Unip","Unicamp");

console.table(meuArray);

meuArray.unshift(123456)

console.table(meuArray);

 */
/* var frutas= ["Banana", "Laranja", "maça", "Manga","Uva","Morando","Pera","Melancia",]

console.table(frutas);

frutas.splice(0,1,"Abacate");

console.table(frutas);

let posicao = frutas.indexOf("Manga");

console.log("Posição da fruta : "+ posicao);

 */


/* var fruits = ["Ameixa", "Morango", "Mertilo ", "Jabuticaba","Goiaba"]

let position = fruits.indexOf("Goiaba");

console.table(fruits);
console.log("Tamanho da Matriz: " + fruits.length)
console.log("Posição da frutas : "+position);

fruits.splice(position);

console.table(fruits);
fruits.sort();
console.table(fruits);
console.log("Posição 4 removida"); */

/* Somando valores de uma MATRIZ */


/* Criando a função com o nome SOMA */

/* function somaArray(val1,val2,val3){
    resp = val1+val2+val3;
    return resp;
}
let x = somaArray(234,3,4);

console.log("Resposta da soma :" + x); 
 */
/* function somaMedia(n1,n2,n3,n4){ */
/* calc = (n1+n2+n3+n4)/4; */
/*     return (n1+n2+n3+n4)/4;
}

let resultado = somaMedia(8,8,3,10)

console.log("A sua média é : "+ resultado.toFixed(2)); */



/* CALCULAR  A SOMA SOA NÚMEROS DE UM ARRAY[]*/
/* 
function somarARRAY(x) {
    let soma = 0;

    for (let a = 0; a < x.length; a++) {
        soma += x[a];

    }
    return soma;
} */

/* PASSANDO OS VALORES PARA ARRAY[]*/

/* 
let pezinho = [21, 22, 44, 99, 2, 50, 32, 47, 78];
let resultado = somarARRAY(pezinho);

console.log("resultado da soma é : " + resultado); */



function mediaARRAY(n1,n2,n3,n4) {
    let escola = (n1,n2,n3,n4)/4;

    return escola;
}
let calc = [8,10,6,3];
let resultado = mediaARRAY(calc);

console.log("A sua média é :" + resultado);

