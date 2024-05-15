import React from 'react'
import styled from 'styled-components'
import { ultimosLivros } from './DataUltimosLancamentos'
import Resultado from '../Geral/Resultado'
import CardContainer from '../Geral/CardContainer'
import CardImage from '../Geral/CardImage'
import CardContent from '../Geral/CardContent'
import BookName from '../Geral/BookName'
import Titulo from '../Geral/Titulo'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const UltimosLancamentos = () => {
    return (
        <section>
            <Titulo cor='#EB9B00' tamanhoFonte='2rem'>Ultimos Lançamentos</Titulo>
            <Resultado>
                {
                    ultimosLivros.map((livros) => (
                        <UltimosLancamentosContainer key={livros.id}>
                            <img src={livros.src} />
                        </UltimosLancamentosContainer>
                    ))
                }
            </Resultado>

        </section>
    )
}

export default UltimosLancamentos