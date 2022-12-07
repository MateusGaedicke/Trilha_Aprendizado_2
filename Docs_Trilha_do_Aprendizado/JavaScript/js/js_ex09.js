/*Funções sem retorno*/
function somar(n1,n2)
{
    var resultado
    resultado=n1+n2
    alert("Função soma sem retorno "+resultado)
}
/*Funções com retorno*/
function subtrair(n1,n2)
{
    var resultado
    resultado=n1-n2
    return(resultado)
}

somar(35,10)
somar(9,12)

var resposta
r=subtrair(54,32)
alert("Funcão subtrair foi chamada e retornou o segunte resultado "+r)