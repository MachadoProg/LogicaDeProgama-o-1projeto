alert('bem vindo ao jogo do numero secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
tentativas = 1;

//enquanto chute nãofor igual ao numero secreto 
while(chute != numeroSecreto){
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    //chute for igual ao numero secreto 
    if( chute == numeroSecreto ) {
        break;
        alert(`Isso ai, você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`)
        } else {
           alert(`o numero secreto é maior que ${chute}`)
        }
       // tentativas = tentativas + 1;
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' :'tentativa';
alert(`Isso ai, você acertou o numero secreto ${numeroSecreto} com ${tentativas}  ${palavraTentativa}` );


