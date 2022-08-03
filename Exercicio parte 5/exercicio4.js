
function contar () {

    let ini = document.querySelector(".inicio")
    let fim = document.querySelector(".fim")
    let passo = document.querySelector(".passo")
    let res = document.querySelector(".res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro. Todos os campos devem ser preenchidos')
    } else {
        res.innerHTML = 'contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number (passo.value)

       if(i<f){
        for(let c=i; c<=f; c+=p) {
          
            res.innerHTML += ` ${c}`
        }
    } else {
            for (let c = i; c >=f ; c -= p)
            res.innerHTML += ` ${c}`
        }
    }

}