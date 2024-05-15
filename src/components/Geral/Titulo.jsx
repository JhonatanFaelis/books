import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h2`
        color: ${props => props.cor || '#000'};
        font-size: ${props => props.tamanhoFonte || '16px'};
        text-align: ${props => props.textAlign || 'center'};
        width: 100%;
`

export default Titulo