function verificar() {
    var res = document.getElementById('res')    
    var items = [
        { name: 'Lata 350ml', ml: 350, value: document.getElementById('recipiente1') },
        { name: 'Latão 473ml', ml: 473, value: document.getElementById('recipiente2') },
        { name: 'Latinha 269ml', ml: 330, value: document.getElementById('recipiente3') },
        { name: 'Long Neck 335ml', ml: 270, value: document.getElementById('recipiente4') },
        { name: 'Long Neck 330ml', ml: 270, value: document.getElementById('recipiente5') }
    ];

    let menor = items.reduce((total, currento) => {
        let calculodivisao = parseFloat(currento.value ? currento.value.value : '9999.9') / currento.ml
        if (calculodivisao < total.value) {
            return {...currento, value: parseFloat(calculodivisao).toFixed(4)} 
        }
        return total
    }, { value: 9999.9, name: "" })

    res.style.textAlign = 'center'
    res.innerHTML = `A melhor opção é ${menor.name} com valor por ML de: ${menor.value}`
}
$(function () {
    $('#recipiente1, #recipiente2, #recipiente3, #recipiente4, #recipiente5').maskMoney();
})