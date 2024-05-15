import React, { useState } from 'react'
import Input from '../Input/Input'
import styled from 'styled-components'
import { livros } from './DataSearch'
import UltimosLancamentos from '../UltimosLancamentos/UltimosLancamentos'
import Titulo from '../Geral/Titulo'
import Subtitulo from '../Geral/Subtitulo'
import BookName from '../Geral/BookName'
import CardContainer from '../Geral/CardContainer'
import CardImage from '../Geral/CardImage'
import CardContent from '../Geral/CardContent'
import Resultado from '../Geral/Resultado'
import CardRecomendacao from '../CardRecomendacao/CardRecomendacao'
import imagemLivro from '../../images/livro2.png'


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`


function Search() {

  const [livroPesquisado, setLivroPesquisado] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo tamanhoFonte='2rem' cor='#fff'>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input placeholder='Escreva sua próxima leitura' onKeyUp={e => {
        const textoDigitado = e.target.value
        const resultadoPesquisa = livros.filter((livro =>
          livro.nome.toLowerCase()
            .includes(textoDigitado.toLowerCase()))
        )
        setLivroPesquisado(resultadoPesquisa)
      }} />
      <Resultado>
        {livroPesquisado.map((l) => (
          <CardContainer>
            <CardImage src={l.src} />
            <CardContent>
              <BookName>{l.nome}</BookName>
            </CardContent>
          </CardContainer>
        ))}
      </Resultado>
      <UltimosLancamentos />
      <CardRecomendacao descricao={'teste'} img={imagemLivro} subtitulo={'teste de subtitulo'} titulo={'Teste de titulo'} />
    </PesquisaContainer>
  )
}

export default Search