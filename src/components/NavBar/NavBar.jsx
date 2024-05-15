import React from 'react'
import OpcoesMenu from './OpcoesMenu'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function NavBar({ logo, nome, altImg }) {

    const menu = OpcoesMenu;
    const icones = [perfil, sacola];

    const HeaderContainer = styled.header`
        display: flex;
        background-color: #fff;
        align-items: center;
        height: 5rem;
        justify-content: center;
        padding: 0 2rem;
        gap: 3rem;
    `

    const Icone = styled.li`
        font-size: 1rem;
        display: flex;
        align-items: center;
        text-align: center;
    `
    const Lista = styled.ul`
        display: flex;
        align-items: center;
        text-align: center;
        gap: 1rem;
    `

    const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
    `

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to={"/"}>
                    <img src={logo} alt={altImg}/>
                </Link>
            </LogoContainer>
            <div>
                <Lista>
                    {menu.map((itens) => (
                        <Icone key={itens.titulo}>
                            <Link to={itens.Link}>{itens.titulo}</Link>
                        </Icone>
                    ))}
                    {icones.map((icone) => (
                        <Icone key={icone}>
                            <Link href='#'><img src={icone}></img></Link>
                        </Icone>
                    ))}
                </Lista>
            </div>
        </HeaderContainer>
    )
}

export default NavBar