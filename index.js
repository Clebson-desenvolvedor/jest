function somaHorasExtras(salario, valorHorasExtras) {
    return salario + valorHorasExtras;
}

function calculaDescontos(salario, descontos) {
    return salario - descontos;
}

module.exports = {
    somaHorasExtras,
    calculaDescontos
}