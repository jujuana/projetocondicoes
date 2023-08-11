function verificar(){
    var nasc = document.getElementById('nasc')
    var sexo = document.getElementById('sexo')
    var nasc = Number(nasc.value)
    var idade = 2023 - nasc
    var sexo = String(sexo.value)

    var resultado = document.getElementById('resultado');

    var img = document.createElement('img');
    img.setAttribute('id', 'data');
     if(nasc > 2023 || nasc == 0){
        resultado.innerText = ('Data de nascimento inválida')
     }
     else{
        if(sexo == 'Masculino'){
            resultado.innerText = (`Você e um garoto de ${idade} anos de idade`)
            img.setAttribute(`src`, `../simbolo_masc.png`)
        }
        else{
            resultado.innerText = (`Você é um garota de ${idade} anos de idade`)
            img.setAttribute('src', '/simbolo_fem.png')
        };
     };
     resultado.appendChild(img);
     

     }

