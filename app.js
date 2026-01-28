var nome
var numero1
var numero2
var numero3
var resultadoSoma

var readline = require("readline")

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Solicitando o nome do usuário
entradaDados.question("Por favor, informar seu nome: ", function(nomeUsuario){
    nome = nomeUsuario
    console.log()
    console.log(`Olá ${nome}, seja bem vindo(a)! Vamos realizar a soma de três números.`)
    console.log()
    
    // Solicitando os três números ao usuário
    entradaDados.question("Por favor, informe o primeiro número: ", function(primeiroNumero){
        numero1 = primeiroNumero

        entradaDados.question("Por favor, informe o segundo número: ", function(segundoNumero){
            numero2 = segundoNumero

            entradaDados.question("Por favor, informe o terceiro número:", function(terceiroNumero){
                numero3 = terceiroNumero
                
                // Realizando a soma dos três números, convertendo as variáveis de string para float
                resultadoSoma = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)

                console.log()
                console.log(`${nome}, o resultado da soma dos três números é: ${resultadoSoma}`)

                entradaDados.close()
            })
        })
    })

})