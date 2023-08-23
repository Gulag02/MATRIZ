const caixa = document.querySelector("#caixa");
let cursos = [];

let resposta = "";

/* incluindo curso na matriz curso */
while (resposta != "N") {
    let curso = prompt("Digite o nome do curso");
    cursos.push(curso.toUpperCase());
    resposta = prompt("Cadastrar outro Curso S/N ");

    if (resposta.toUpperCase() == "N") {
        cursos.forEach((aula) => {
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>--------------------<br>";
            caixa.appendChild(p);
        })
        break;

    }

}

/* Deseja excluir algum curso */
resposta = prompt("deseja excluir algum curso? S/N ");

if(resposta.toUpperCase() == "S") {
    let curso = prompt("Digite o curso que deseja excluir: ");

    /* pegando a posição do elemento dentro da matriz */
    alert("Posição do curso: " + curso.indexOf(curso.toUpperCase(),1));
    let posicao = curso.indexOf(curso.toLocaleUpperCase(),1);

    /* apagando o curso com método .splice */
    curso.splice(posicao);

    cursos.forEach((aula) => {
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>---------LISTA EXCLUIDO-----------<br>" + aula + "<br>--------------------<br>";
        caixa.appendChild(p); 
    });

}


