import React from 'react'
import styled from 'styled-components'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'

function Header({darkMode, setDarkMode}) {
  return (
    <StyledHeader darkMode={darkMode}>
        <h2>devfinder</h2>
        <div>
            <p>{darkMode?"LIGHT":"DARK"}</p>
            <img src={darkMode?sun:moon} alt='' onClick={()=>setDarkMode(!darkMode)}/>
        </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
        color: ${props=>props.darkMode?"#FFFFFF":"#222731"};
    }
    div{
        display: flex;
        p{
            margin-right: 16px;
            font-size: 13px;
            font-weight: 700;
            line-height: 19px;
            letter-spacing: 2.5px;
            color: ${props=>props.darkMode?"#FFFFFF":"#697C9A"};
        }
        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }
`

export default Header