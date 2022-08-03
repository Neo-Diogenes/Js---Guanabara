
function verificar () {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('.txtano')
    var res = document.querySelector('.res')
    if (fano.value.lenght == 0 ||Number(fano.value) > ano) {
        window.alert('Erro. Tente novamente')

}  else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                    //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                    //jovem
                 img.setAttribute('src', 'foto-jovem-m.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
                //adulto

            } else { 
                img.setAttribute('src', 'foto-aidoso-m.png')
                //idoso
            }


        } else if (fsex[1].checked){ 
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.png')
                //criança

        } else if (idade < 21) {
            img.setAttribute('src', 'foto-jovem-f.png')
                //jovem


        } else if (idade < 50) {
            img.setAttribute('src', 'foto-adulto-f.png')
            //adulto

        } else { 
            img.setAttribute('src', 'foto-idoso-f.png')
            //idoso
        }


            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
}


}