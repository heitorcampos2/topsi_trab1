

const tabMusicas = document.getElementById('playLists')
tabMusicas.addEventListener('dblclick',e =>{
    if(e.target.parentNode.tagName != 'TR' || e.target.tagName == 'TH' ){
        alert('Dê um duplo click em uma linha cadastrada')
        return;
    }
    e.target.parentNode.remove();
})


const buttonCadastrar = document.getElementById('button')
buttonCadastrar.addEventListener('click', function () {
        //tabela
        const playList = document.getElementById('playList');
        //coletar dados para a tabela
        //musicas
        const inputMusicas = document.getElementById('musica');
        const musica = inputMusicas.value;
        const textMusica = document.createTextNode(musica);
        //cantor
        const inputCantor = document.getElementById('cantor');
        const cantor = inputCantor.value;
        const textCantor = document.createTextNode(cantor);
        //ano
        const inputAno = document.getElementById('ano');
        const ano = inputAno.value;
        const textAno = document.createTextNode(ano);
        //variaveis p/ tabela
        const tdMusica = document.createElement('td');
        const tdCantor = document.createElement('td');
        const tdAno = document.createElement('td');
        const tr = document.createElement('tr');

        //insere uma musica
        tdMusica.appendChild(textMusica);
        tr.appendChild(tdMusica);
        //cantor
        tdCantor.appendChild(textCantor);
        tr.appendChild(tdCantor);
        //ano
        tdAno.appendChild(textAno);
        tr.appendChild(tdAno);
        //analise antes de carregar na tabela
        if (musica == '' || cantor == '' || ano == '') {
            alert('Contém um ou vários Campos vazios!');
            return;
        }

        playList.appendChild(tr);

        inputMusicas.value = '';
        inputCantor.value = '';
        inputAno.value = '';

    })
