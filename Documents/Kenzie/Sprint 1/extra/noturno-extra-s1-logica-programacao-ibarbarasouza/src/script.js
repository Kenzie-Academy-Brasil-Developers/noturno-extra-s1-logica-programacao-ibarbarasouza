//1

function calculateSalary (salarioFixo, valorTotalVendas){
    let salarioTotal

    if (valorTotalVendas <= 1200){
        salarioTotal = (salarioFixo + (valorTotalVendas * 0.03))
    }else{
        salarioTotal = (salarioFixo + (valorTotalVendas * 0.05))
    }
return(salarioTotal)
}


//2

function calculateStock (quantAtualEstoque, quantMaxEstoque, quantMinEstoque){
    let quantMedia = ((quantMaxEstoque + quantMinEstoque) / 2 )

    if (quantAtualEstoque >= quantMedia){
        return('Não efetuar a compra!')
    }else{
        return('Efetuar compra!')
    }
}


//3

function calculateAge (anoNascimento, anoAtual) {

    let idadeAnos = (anoAtual - anoNascimento)

    let idadeMeses = (idadeAnos * 12)
     
    let idadeDias = (idadeAnos * 365) //considerei que todo ano tem 365 dias
    
    let idadeSemanas = (idadeMeses * 4) //considerei que cada mês tem 4 semanas

    return ('Sua idade em anos é: '+ idadeAnos + '; \n' + 
            ' Sua idade em meses é :'+ idadeMeses + '; \n'+
            ' Sua idade em dias é: '+ idadeDias + '; \n' +
            ' Sua idade em semanas é: '+ idadeSemanas + '. \n')
}


//4



//5
 function cashMachine (valorSaque){
    let quantNotas100
    let quantNotas50
    let quantNotas20
    let quantNotas10
    let quantNotas5
    let quantNotas2
    let quantNotas1
    let resto

   
    if (valorSaque >= 100){
        quantNotas100 = Math.floor((valorSaque / 100))
        resto = (valorSaque - (quantNotas100 * 100))
    }else{
        quantNotas100 = 0
    }

    if (resto >= 50){
        quantNotas50 = Math.floor((resto / 50))
        resto = (resto - (quantNotas50 * 50))
    }else{
        quantNotas50 = 0
    }

    if(resto >= 20){
        quantNotas20 = Math.floor((resto / 20))
        resto = (resto - (quantNotas20 * 20))
    }else{
        quantNotas20 = 0
    }

    if(resto >= 10){
        quantNotas10 = Math.floor((resto / 10))
        resto = (resto - (quantNotas10 * 10))
    }else{
        quantNotas10 =0
    }

    if(resto >= 5){
        quantNotas5 = Math.floor((resto / 5))
        resto = (resto - (quantNotas5 * 5))
    }else{
        quantNotas5 = 0
    }

    if(resto >= 2){
        quantNotas2 = Math.floor((resto / 2))
        resto = (resto - (quantNotas2 * 2))
    }else{
        quantNotas2 = 0
    }
    
    if(resto >= 1){
        quantNotas1 = Math.floor((resto / 1))
        resto = (resto - (quantNotas1 * 1))
    }else{
        quantNotas1 = 0
    }


return('Você receberá: \n'
        + quantNotas100 + ' cédulas de R$100, \n'
        + quantNotas50 + ' cédulas de R$50, \n' 
        + quantNotas20 + ' cédulas de R$20, \n'
        + quantNotas10 + ' cédulas de R$10, \n'
        + quantNotas5 + ' cédulas de R$5, \n'
        + quantNotas2 + ' cédulas de R$2, \n'
        + quantNotas1 + ' cédulas de R$1, \n')
 }

 console.log(cashMachine(1381))