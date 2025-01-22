/**
 * APP Flex 
 * @author Davi do couto
 */

function calcular() {
    //Entrada de dados(input)

    etanol = frmFlex.inputEtanol.value //A variável "etanol" recebe o valor do que vc digitar dentro da caixa de texto input com o name "inputEtanol" no html
    gasolina = frmFlex.inputGasolina.value //A variável "gasolina" recebe o valor do que vc digitar dentro da caixa de texto input com o name "inputGasolina" no html

    if(etanol < 0.7* gasolina){
        document.getElementById("status").src="img/etanol.png" //Se o etanol for mais barato, vai mudar a imagem com a setinha apontando para o etanol
    }else {
        document.getElementById("status").src="img/gasolina.png" //Se o gasolina for mais barato, vai mudar a imagem com a setinha apontando para a gasolina
    }

    return false
} 