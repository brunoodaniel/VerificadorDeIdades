function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
 
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'homemcriança.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'homemjovem.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'homemadulto.png')
            }
            else{
                img.setAttribute('src', 'homemidoso.png')
            }
        }
        else{
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'mulhercriança.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'mulherjovem.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'mulheradulta.png')
            }
            else{
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}