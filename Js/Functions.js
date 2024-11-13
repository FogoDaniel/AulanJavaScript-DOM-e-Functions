// Manipulação dos objetos DOM (Document Obeject Model)
// Representação de dados dos objetos que compõem uma estrutura 
// e o conteúdo de um documento web

//Essencail ´para manipular e interagir com elementos de uma página 
//Document.querySlector()

//Exemplo 
const titulo = document.querySelector('h1')
titulo.textContent = 'Texto Modificado'; //Modifica o texto do elemento 

//Uso Pricipal: Buscar e modificar elementos HTML

// Document.createElement()
// Cria novos elementos dinamicamnete

// Exemplo
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso pricipal: Adicionar novos elementos ao DOM

// AddEventetListener()
// Funções que lidam com interações do usúario
// Sua função é adicionar um ouvinte para eventos (como clique)

//Exemplo

const botao = document.querySelector('button');
botao.addEventListener('click' , () => {
    alert('Botão Clicado!');
}
);
// Uso principal: Criar interatividade, como cliques ou movimento do mouse 

// setTimeout()
// Controla ações que ocorrem em intervalos ou apos um tempo
// Executa uma função após um periodo de tempo (unidade de medida > Milisegundos)

// Exemplo
setTimeout(() => {
 alert('Executado após 2 segundos!');
}, 2000);

// alert > ele execulta o toString do seu objeto e apresenta em tela 
// console.log > ele registra a informação no console do navegador 
//   ficando restrita ao conhecimento do desenvolvedor
// Uso pricipal: Atrasar execuções ou criar temporizadores 