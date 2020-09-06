function verificar(){
var data = new Date()
var ano = data.getFullYear()
var anoF = document.getElementById('txtano1')
var res = document.querySelector('div#res1')
if (anoF.value.length == 0 || Number(anoF.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
     var fsex = document.getElementsByName('radsex1')
     var idade = ano - Number(anoF.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >=0 && idade < 10) {
          //criança

          img.setAttribute('src', '../img/foto-bebe-m.png')
      } else if (idade < 21) {
          //jovem
          img.setAttribute('src', '../img/foto-jovem-m.png')
      } else if (idade < 50) {
          //adulto
          img.setAttribute('src', '../img/foto-adulto-m.png')
      } else{
          //idoso
          img.setAttribute('src', '../img/foto-idoso-m.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', '../img/foto-bebe-f.png')
    } else if (idade < 21) {
        //jovem
        img.setAttribute('src', '../img/foto-jovem-f.png')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', '../img/foto-adulto-f.png')
    } else{
        //idoso
        img.setAttribute('src', '../img/foto-idoso-f.png')
    }
    }
    res.style.textAlign = 'center'   
    res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
    res.appendChild(img)
    }   
  
} 