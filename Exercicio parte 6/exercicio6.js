function calcular(){
    let num = document.querySelector('.num')
    let tab = document.querySelector('.seltab')

    if (num.value.length == 0){
        window.alert('Erro')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=""

        for (let i = c; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
            
        }
    }


}

//foi feito em while, mas fiz com for pra praticar
//Em for precisei criar a variavel i de indice enquanto em while, não precisa, mas tem que adicionar o c++ no final

// while (c<=10){
// let item = document.createElement('option')
// item.text = `${n} x ${i} = ${n*i}`
// tab.appendChild(item)
//c++
//}