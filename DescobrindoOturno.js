/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

function descobrindoTurno(){
    if (turno === 'M'){
        console.log('Olá, bom dia!')
    }
    else if (turno === 'V'){
        console.log('Olá, boa tarde!')
    }
    else if (turno === 'N'){
        console.log('Olá, boa noite!')
    }
    else{
        console.log('Dados inválidos!')
    }
}

descobrindoTurno(turno = 'M')