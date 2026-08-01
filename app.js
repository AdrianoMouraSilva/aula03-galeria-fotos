'use strict'

const btnCadastrar = document.getElementById('cadastrar')

function cadastrarFoto(){
    const caixaFoto = document.getElementById('foto')
    const galeria = document.getElementById('galeria')

    const novaImagem = document.createElement('img')
    novaImagem.src = caixaFoto.value

    galeria.append(novaImagem)

}

btnCadastrar.addEventListener('click', cadastrarFoto)