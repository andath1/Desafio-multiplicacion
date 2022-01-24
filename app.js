let multiplicar = () => {
    num = parseInt(prompt("Ingresar un número: "))
    if (num < 1 || num > 20) {
        alert("Número fuera del rango")
    } else {

        for (let i = 1; i <= num; i++) {
            console.log(`${i} * ${num} = ${num * i};
        `)
        }
        let result = 1
        for (let j = 1; j <= num; j++) {
            result = result * j
            console.log(`
               factorial de ${j} es :  ${result}
                `)
        }
    }
}

console.log(multiplicar())