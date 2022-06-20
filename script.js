function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    
    var formAno = window.document.getElementById('txtano');
    var res = window.document.getElementById('resultado');

    if (formAno.value == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value) ;
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade <= 16) {
                img.setAttribute('src', 'img/crianca-menino.jpg'); 
            } else if (idade <= 35) {
                img.setAttribute('src', 'img/homem.jpg') 
            } else if (idade > 35) {
                img.setAttribute('src', 'img/homem-idoso.jpg') 
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade <= 16) {
                img.setAttribute('src', 'img/crianca-menina.jpg')               
            } else if (idade <= 35) {
                img.setAttribute('src', 'img/mulher.jpg') 
            } else if (idade > 35) {
                img.setAttribute('src', 'img/mulher-idosa.jpg') 
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
}