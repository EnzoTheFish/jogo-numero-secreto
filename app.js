let listaNumeros = []
let numeroLimite= 10
let numeroSecreto = numeroAleatorio();
let tentativas= 1;
function ExibirTextoNaTela(tag,texto) {
   let campo = document.querySelector(tag)
   campo.innerHTML= (texto)
}
function mensagemInicial() {
   ExibirTextoNaTela('h1','Adivinhe o Numero');
   ExibirTextoNaTela('p','Escolha um numero de 1 a 10');
}

mensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto){
      ExibirTextoNaTela('h1', 'Acerto mizeravi');
      let palavraTentativas= tentativas > 1 ? 'Tentativas' : 'Tentativa';
      let mensagemTentativas= `Voce acertou com ${tentativas} ${palavraTentativas} `;
      ExibirTextoNaTela('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else{
      if(chute > numeroSecreto){
         ExibirTextoNaTela('h1', 'o numero e menor');
      }
      else{
         ExibirTextoNaTela('h1', 'o numero e maior');
      } tentativas++;
      limparTexto();
   }
}

function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeItensLista = listaNumeros.length;
   if  (quantidadeItensLista== numeroLimite);{
      listaNumeros = [];
   }


   if(listaNumeros.includes(numeroEscolhido)){
      return numeroAleatorio
   }else{
      listaNumeros.push(numeroEscolhido);
      return numeroEscolhido;
   }
}
function limparTexto() {
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {
   numeroSecreto = numeroAleatorio();
   tentativas = 1
   limparTexto();
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);

}


