function carregar() {

    let msg = window.document.querySelector('.msg')
    let img = window.document.querySelector('.foto')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`


        if (hora >=0 && hora < 12 ) {
            img.innerHTML= 'C:\Users\T-Gamer\Desktop\Curso Front-End\guanabara\dia.png'
        } else if (hora >= 12 && hora < 18 ) {
            img.innerHTML='C:\Users\T-Gamer\Desktop\Curso Front-End\guanabara\dia.png'
        } else {
            img.innerHTML='C:\Users\T-Gamer\Desktop\Curso Front-End\guanabara\noite.png'
        }

}

//deu algum erro que nao sei qual, mas provavelmente nas imagens